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
    "3aEmBLuXoyTLfaJ6GPokN4vVkwtw6CgozkQ2Y3p5hBpj3LLeJH9dJ487Z1KJP86LPczCG1z53HXhQd5Ds1dc1bGY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YnzDVmujBu6ToCFgiF12zXsKU2M9cFFRUZR9QK3qUYhY9khAnKjZeFSyPebMPRVL1YoD4P6kwMW8EL9hUB7BBDR",
  "key1": "ZCf2q5jteiQad42k8ZhLmJU2aXvL7CcSYRvfFJPoF8p1YvxehRBRmgCycy4UhrSoV7ZLsqcKvQeJPo2hAbGebgJ",
  "key2": "2zNFytbZziwFA6ASm1SeqDK6WvaYuHwmmrhwUDBFvr1ThWxTDcx8Qt3GPzatr2uUPGurxxPzCjjfeH6KmwLnfmBf",
  "key3": "3md7fEAK1GFBoHwt5pM3j8t76wbJ738ozcn8obRA2f5cJ6zwLsrWp3KzBFavW3UM6Ag1bFoa5yvfXBnUkkJNGxhn",
  "key4": "4upaLGALiLjMnhFKzNcDsfypdMMarjcDHTyWiAKC6EcJvHvtNNDTVqjMpg4aATUP5xWNE4h4Yj6oyuJ55vNyP3zN",
  "key5": "5EDcXm3gbB2EpKkKooForGMMXgz7izUfnzmwtBUc14uRn8ZPYk8ym9Lohhn7mZU6uLnog1bgAg1JCMXgF2Bpfz5U",
  "key6": "2fZWcF7YLnJNPFE7p423gz7HhE4X82xNS5inveWSa6adxPsRQeAcuEmBQ99cyqYQLbUWrwfvtGupYUAnjsVZCGVU",
  "key7": "2kXoHBsufKMmBXK2As2mVnX4mtY34EWHQunnWqzmEf9mqeUwpm4auGQ74uFoP8BSx75FBjHM2jU8hp9wzFWHBPXm",
  "key8": "4RLhjEfvcHkgFLs5Xto9ndRHaX8k2Utq5w8wriZERGv2oCHBisPrKac3ohKVrPzoLemMshRkZVsU5KQRSdTDob4Z",
  "key9": "5AFAoH2CVJqcAySA5wdatfLUi9yTfrXLn2DfYqq5Xp3fL5CTKyKqxsfPv3cW6jYjbtfohURCCKfSpD4DRxnxrfAv",
  "key10": "2xreS826yUQFghTCsUMfQK7EDderosrqYJ9tcaHBQ4wZL7JRLvYESyPyg98y2iXMiZrQUAdun15E2WKv4b1mg6mc",
  "key11": "oiJWQyDpFLtGCRjR2tYWZrAdiXAxpeCE7N2vsSyT4LpSK5i1j4HW8i5MBqjdTj4k7cdkRGgANxWvbdRFvDgs2Zy",
  "key12": "Wv8s3yFxVv4JqT5G9hnumQ8tJs1DmeMDc5tFM2mup8ucEFm4KYxQrZzzS1mJtMT2C7MFL6pwFoCkn2HQNvUPbjB",
  "key13": "29efMmhbhEWAAmZSTDiKchGx7t56a6B5vDZkoiY1oMeffUphYzQfkcKHwY8PtMkhUcQ1FydEJgDejvx1VnWppoyM",
  "key14": "5VSGGbCQ3u6ud9NJPaJ3X26Cz3cAceaKb7cYLQ4YMh9f3YbWyEamhpeB2j54CTGJer6BjKxfjY1jcMYCbZM3chec",
  "key15": "5P3QYLDA5XeFZMJfukCHfsv8F16R663dzJzi6eCHDEr1CPvG5oViY9kWFX5AmXdUdgDQLxkjCEh5RH3pAtok3AZt",
  "key16": "2xpxtZ9Ue5h28odf1zRKB1kzeLq1HCUisNCSeVRifDRyoxf81gDnM8q3BfpUcBYTmfnjWGFoRZvqroGgxqKP16c9",
  "key17": "3ofV2eA1KHmN18kDR6FQaASVtszAqgRNu7Gp6XbYgndZqgVQh74Mw7GGpueShg5nbvXj72wDmGGUKW7nioTWgEMu",
  "key18": "2ekevZHneU5q9TNQRYwBLenJXUbbXzkZ7TH2zPixCrAZV5q4Dbfv9i2teFsKtCjc2QGt8ywRahNpcDb62NSmbCsX",
  "key19": "5b6GjD2m9gmUnFrtakCaFePuGp9g9JE3ybxwC2yaw9godjekiV4qtZxT4WeVeh2NXUrPgYLRoBH2bxCQ3PyCDesm",
  "key20": "5TkG8uJzeGaogjoa2NcZzWc8JgUktvi4RcDVdxVRH3R9cwHnxaGWREf1gjBxNiskFbksjr98MixrnjeAU4mMwoUw",
  "key21": "4fkhJY8zA43je1Tj5geF3SrT4RjJDfRQZuJczYn6m8zzHkUMv6qNQwqXD87STF3Spxqsj1mXuZy9kUGGLwkk7svE",
  "key22": "3M2LWGuzNyPZzoJmh1QkmfpyJfzADoyL5pvd1U9yGQg2sbGhTX4EcRZNjpoeStM34MDJccLRAkHWk4oZqqsms2kh",
  "key23": "4bzUt3M4NBpTgjFCLGqiPUVUtZqtFh6R7BbqZSWcTYBD8PqYcCyk5rcVHnyzAwvTqkTpTJat9cviJxkT38s5eAAZ",
  "key24": "4QFCXk2rDTjpgsc2kcGYGuhR7cwfqExbiaBgA9UhHx9aQfgqKN5yjARJCax8K935Di9RR1cNzpDxsUQU8UtuwyuC",
  "key25": "2hPeUTCz3Eb1zBWiEZ9ZJX4kGmqtba9KDs1NRBGRYGsu3ErkXhXTyniZ3UEDWveqXrnj8pjytCKkCNX3WauJbamn"
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
