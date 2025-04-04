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
    "3K8427u61QDn63hsgAQqTDo7viWPNokRXXfy5WoDtjCdXs9CwTcjNAYK3hQ11KVjMEKZocLKFcRgjXxe58dENuYU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HyqNzNH8vvaSvEC9BtfWWaH47v68XdfpcKq7e6zc29ZYY7yZWv1tFJTFWcuqS61aVZAcbkDkKpFafKmCZcqRa38",
  "key1": "294z4AfjPbuaRiqGm4NJ36T4Krhg9QHZBfhoebBduk6cr8i5EJjCp7jpzhzFkTNaGXjcEKvCRjoXKVCf4AKYbm1A",
  "key2": "5S2nC1ZcrAkDJmbGKDR4eML7JDWU1gfyv1XaaE2KjYNBELJmr5ajAbjoQ3QJHf76YQxa5D1nCRcS93wyc79BaJog",
  "key3": "5br8Q1oat7dZS3ZqqExJhjMZiiLZCXSYxnZjrUV2Ymt53CEnzmVuCa2dtVGwiqv4HkQVUfx3TRBBFicN2WpcYH7q",
  "key4": "2RiMD1K7E2YwkGYNewtHakzb2ftaoWfsppefDzv3AZ1CXzBMCiSBLXVgEVpSKyJ6PUgGuUhrqK7HKe6ERq7cdohw",
  "key5": "3d266fGPUSA6mzsNYp2TZyeUibkEveyEEEiwcZvamzeGTRW32QWiF2pF1WswwAUs8opdkzjP1q2DnjBbjr5JSnep",
  "key6": "124t917aNx9tqcaEqjcNS3z1id7kx9UZtqy3bvm38EkA7FPuHdubsv2Xc3a9BMjtpZvUAqk3WwAZbDkicPjbs832",
  "key7": "4tUwF7MZqnqTEogyoUe6YEhybVyjKRJbkzWAfcgeo62skXdoFTWDrWJr8TRfy3PpnWKeT9GVkWUxNgSKVaVdKx6R",
  "key8": "3WpowJUK6HoUHA266AnFFXLhuKTmX4Mwdf4fnG1Npd3Eo4h4SJgrUN3MDfsmS5fFwt6AEm1Rw3ySwqnBaVSWmaMJ",
  "key9": "4nY9JMd6DTjYEoe4XJgQSX5pMN4s9WhV4idsHXUEXEBgATckXS7DchVwhqsjZLXmPCg2eo2gFyF1q2stxLt5QkBA",
  "key10": "24USFE1FMNVJsU3b8w4WoK9wwPoiMM624hqt47frV7RbndFR65oz9pUskwwSdLFjVxdiupUJqNzzERbrd3D3rFRN",
  "key11": "4VhGKXGz9GCoxRowCCTbwcggw47rzcHwQuwsQDGc5rMyE7HRuUqHBQJzHeBf4hC26tzQor67Nrc89BKuiGCtMxWJ",
  "key12": "17tQCcv1KWKekD37McP34DiJx6jDQLAxpEMsoCwyxfB9hFxWwK1c53g1RkDqvbqXxCAsU3tAXWE3wzqZN22o8kH",
  "key13": "2xZSjnkbtAXjUvr94yBtvnsWMXY2pep4AodLauyUvt7nWv6Rv4uDVH6P68NJKuv9XzERM8AkjKJS1to9cpWSyN54",
  "key14": "4NCMUaZpagKPbGcx4Bc7rpenw6w9tJFtEBWmAV8tzU7TepWBco1RHBcYshigaZHAxoQeih7rR6CVyvdaKcrjRK8",
  "key15": "39BPtHv1JV3TQhK2PKQSokaPpokB42RoF3ZgkJmuth3iDNqqf35kRauPvzKLvcWx6EKnbJubxP3GJS312Y1YGbDe",
  "key16": "x6dJ8cqGr9DwEnoGE25H6Hgwmk9iMH9BnaytXdYFpV4QSvxGHaEmpBxECSe3BE8jZN9YDyE8VgAZMHbTs2Ymx4L",
  "key17": "BdgcRfnEzy98Xb2gUVqc6BCKPAc16reQ7eapkCY2fwqR993iKKk4yZ4nSW9atYe1UpB9GgaV8BGEmvBgc5hHVkZ",
  "key18": "qaUF6pfCcRbeE4cMS3YhYXoVARR2W5TrN34J3M3vjDXu4o5qoCFpTxpGvsTg5TiZWCxYfJJtZbhpWTHa6Yibiih",
  "key19": "2cAi7YNTpL61SMwCddG1iiPzuMykKdNUvztqpzcCYHqk3nNP2SqFTG8eSAeuwacBb6aAJyd9aXwnVtKYokjvkVpZ",
  "key20": "53jMXTinVE2m8By1ac2QCJepH9DiLJSGxzgbZnkVLTBw8aSPJRp7HWRqt2TYyZ71WMMYvD9mqNea47J3wtREJH2K",
  "key21": "4xWCsJDrQp7RzArKKEofJg4kcGKZKeAWHH2NdVEqzuyGMGpmNJ1Som8f5oDcRhRaiDpPhpWRota734DHQ3D9UZ4k",
  "key22": "2i7ZbaazQ4e6chcWe66W3HaZics8Dw7914evG7G9HLSGAMmJKS3afB66wL26hbMWvXtwCtLNvHHtNkS18EjKZLdX",
  "key23": "2zPSnLqnBsaR4Pur2WQbPSXFjDbwyji2XgnWzmaXnpyFsU6iGF7PmjoC5wcce2xdKZNhSmkjD5H9kxTEWm88bJ3c",
  "key24": "4kgueud4DK9TncSzScjFxke267gwUuTPhH2vHYvT3L641RTb7xsEkAiTory1bPS8yEwurUz3y2ZQziVSTf3FrfkV",
  "key25": "5pz5fUXPCuCTZFCQq1JAmPRK4biRgMGXKTopW4LiegLwyVPrLaLnZyj1ca2hRiPtEGJkrrtEsdkrvdkY3wSJ2SVN",
  "key26": "5Y93Kta875CN3TYQxDij9JnaAp5tc8Y2c26yt6WMkgTvE2npLgcH5fuNNDdRsk5AqbAsSsADbYjRAwXmkapmrrwE",
  "key27": "6G9uoHUYQcwU9aYUoTgghWGMJAmdAWAHTwUDX3QQgERqtHirbwviHtDyfoLt8JYAYhZZCUovNPRAhdbirqyzp3f",
  "key28": "5Y7r6GXrBHJSMWUYursKPTEJM3ShYwPmU3eyYmXxR1M2xnvYbb8BQrdLWcgx5g6nczFSsb51BBKqd6EQN851EEKs",
  "key29": "26MQ6NBgDEcAmgdgm6UkEJjPLDvb1E4A33TTnueLGKigzcupbukx1cYaDARemWLtQjc6xVFjMWc3rTPfvgA7Vtnj",
  "key30": "yCHrExQjdiAwoo6MJtEvJkSQU26yuZGDCouePUoNkmabjGXUYMHER8xt2KcWjh982akfHnCQWrNLzFAPrebizyY",
  "key31": "2VJcckEPcfus7L2nNS6913hxdU6cfr8KFpofNUQwEEbPfk9Mrdh6whDb1omUE2KSU7mAS8ad8gg9MNP8XWsKvjsT",
  "key32": "4daAaagtzCBUxiqwemEPirA4qLEWmyKn8Qs1U84ezrgZbyoqh2HCp1UQP6D5consUm3qeXsyQpqvjmkoQXrDgLpP",
  "key33": "5C7CbBgz6bEjBf4CHPSijicroUsWoMhH1tr2oEPURv1i1h3XxZyNjF2JDW8K1sZL5bkEiS1T1Cnz81BA1bQYL5sp"
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
