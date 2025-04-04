/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "2UoZA1GYiPjV7UEm39oNXYTrTWM8BHynfAuaP3sAs9uwQqTX4y1ApBzYwvUuZjKPAqdeSE4zSLpw5GSzhedgEdiB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R6T26u4jRbtB5dHVDvXortaV6zMqGMfy7HueNtgRhHGHPjVscJdiZxbF6yHE8VdHHZvE5JoenoV3fHaxiYPZhby",
  "key1": "295DeF2QjnTbiuYsyqSHQumcWTW3q8nHJJvtGv6cNrgvC37dv76PHrKBoHDU65DrMM66stD7VfH7qkKhNXNHyG3Y",
  "key2": "43XPhp5ShXTN5KkjkvYuDKcDiU3fh5eK7GbKWTdgNWiwjsvToaJCEa5VAnX7sNHBYdQsuGWkUi7Ng8EvaR85GyyG",
  "key3": "2Azb2r1JgJ1EzKUMr2YcYUNeGEWmcmtDowzqvK1dkxNHtK4qpsBiTcAsRsnP4SEeEepibdqjGmR6w7imsVknxbVL",
  "key4": "5uKHuPC434hAwrZxbXcL8RRofpqiS9v4Tj8FR2mfH3cvgqs6VcziApJKVau9R99tEAQF9CP9fHKgMQV8U2C52pqv",
  "key5": "2xidheoSWeKtqmSdgpKgdxNkDxQs8XV7AFyGUFFgrcRLGupRyFDdESrq4iFqNyRLVNkJvLxb4m7X88CqHuMDY5qj",
  "key6": "2iFKgt2SKf3B2UJUGmZhepMb5fdfmMxR2auSdaccr79J65bQQZyWSjcKQBn9y7DfcAFG1999axX8kREkkbvF2EF3",
  "key7": "4J1PVuZexx2yfktG8zJJpkxGT8H9rhu83ozE4UckCZReWsfxuvg5aDjC1TkTAxcidbadeAQdGnKw83ajGFPmckA8",
  "key8": "5WWYQTu5S6Q11RaAgNzwcVWPknrAXccQeu8tf59T97xucnUE4RKhCfUhpgwmubDT2sy8Xbe76P9o42rpsAF6SQUh",
  "key9": "2Sr3fft3eZg5L2JfWxvgeosnKYi8suzSHLUuCw6JLRoYcnopBqK3CK37GKt52bXsxQZ8FFrVPAWaVHfFLbPk6Egr",
  "key10": "5xaB257La1GjKmtMTSxGQerDNsAmyy56tcGeAgqTkELtL4xHpEveBVymPM1g69rS1RrtCYn5ktcWCpFLZKLH8MS4",
  "key11": "48D24aoXz4SS5nUaapsYAHvqKjPH5zGeU63iH7D4Did4cpwSxL4jqzVC1j9fY97gsMjuW8naU4iYS3vbtmGtA4Uw",
  "key12": "2UthaiHtJKPVcbpGcHsnBM5g547h3tT3tXndc7kY1KCTchtfrvLF9GCXJoRc6yXnHM7F51ZDygwFE6m8S2icTQt6",
  "key13": "JvCNcmc8aG59U8HGxRuzwbiFQXwqdPDnLjqHRJuxTdcbESnFsCrwTfcLLtGRyTRJHjwTmpXtkqpm4LpYKwsEMqL",
  "key14": "3fVXjYdxjnGZtmPPaPM4vKf1S6cCBJj9mSCdJyyz9ziN2Haj8VkhveU5nzCxhBM57jaR5H9RAFShHA3UiSDry7bS",
  "key15": "5kR2wgQSj6R1SupcHcaMdqtyYXUv1mhA31vEjmkPv2ec1WpjLBe6xNTFasZfpzPY5asEiFpo8B21hrnXfDvtaV2Y",
  "key16": "2cVk3svG9MAVWoqhNqxkFUZJ3gfDVaXNrtSDTsEDyXFeD4CRVMtUHQehKUj9cbveXSLDYeXk73FLpcSweTUWGRHC",
  "key17": "5cMUH4B41QBi4GdWowfSdNK8iMAuYgi6cx1bGq2Y53iYN1XAcyrvmyfeAi9MvugeU4KqP8Hm3QfXvEQ7x3hjsHGg",
  "key18": "5MuPMC33cou43P5epsKspWpUtB7KeqUoWZ2QFJBZJ1tnP8F9PHar4UBEPo5GK3k9uxXfmsAYvghA9XDGkkNtXSBB",
  "key19": "21zNNewRngyjRtpw34jLNjMmpevtNyGtvHgEvRZKbwSoRReizbruBxc6YxPToZjnimFimyYR9RmskQAnELozDvks",
  "key20": "4ZMdiqD55isCUGrGGtFWLu8ny3emf1JPyFVQvWk17ZXKr97JUkmzyft3GqygnCiejjkK8E3yfUgeuVPiBWnATzZu",
  "key21": "vatgJHUS2ZkTnkL8pGq8rTt8Xh1GJAt7RbsCw3sSRjGd7SwiM8BMgFnPLWLQQGXg9nR1WMkDnrSzLga4rfoJ3FT",
  "key22": "3ukPUVmRBoQ4qMexk5v98Lpxa6Y4pLsUppdteVWxJ9kzBTRK1D3Ffjp2nLnD46rRjrJPArGNjGuwvGG2cuoSDLmB",
  "key23": "23QSAdhF1TAgMNnPkdNfvaRv7Z7VNAQ8wXVjdSmeegJeN6FVfuu5TEKv4pGM2NLSrQvf6mbEN5Uhweu2jsoY1xPk",
  "key24": "4jwfhrusZDnziTVZYAJpBiiBGWdAY4u51HtsDu4FkzUWRRq62zYUs19ZmEctZqHqdxkNCBrgKEq5CxGkx66efJhk",
  "key25": "ZAz3bw7Yr94zGpAbAcchQZCUdoi68cSMQWunjCxF1KRFLsTUvZfotYueD1e8CJ3u6Fy3uUxoKA1YaHVwnCiBKu6",
  "key26": "5GTVRCxxpnAaqA3nA8SbsmxU5XbonGpPHzV3g9SGhDJNvpUjtri6DK1kB6WQyEgSqESeeHdKDWqf5LcvB5iQeFZe",
  "key27": "662nWsBLqwbNVWEYwC9rEoM86d8scBSC3vKcFXa2dJuAT3pHiiynEQkffuwNM1RGRbDcae52YD2kx497pGRxTDGS",
  "key28": "2vmHgGeXmboPDPEJbNL7SBs9sy2MxuLUMFgWbCcaaDvB76fg4D5Jo713F3Zo73FPLVyZ8ntLi1WABKQhXzrEmn21",
  "key29": "7X9AyqcJ3zUyn2uL9kHn1LGmSmWqmYXC9mZwymg3QofQ5S452cnsv76V6nxLfQ4tYkHurrrkQsebatfNapTL7gg",
  "key30": "41ZedxXGSuq9UXAtjq8ESQiowPJ5bXPPPJdB61hk4HXPb5jFzZvq9RXRfsHvu6mZb9fm4Mskk8QBrKy5gXT5PeLP",
  "key31": "GHh7TjZjuzYaY5mkdqMDb5Ds4xnqdu5QZUJtbyrFvRXpqFz6XEF859L7Vo2mgjj37fs73s1Q1D7Kx2kPJmFE1fk"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
