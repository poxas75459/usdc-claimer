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
    "9btbH7Xyp7gS65cKwG1cfF5yGyRCaWsrt4HpBfrDRxSu8nDrysUGPvrNoLdsH1oYwA2y9epgCUQC6NtszhNBvNX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s1kCnmQnS3Grv1h6TTa9E2GVjCN16JwR1oNBceXCHmxqZx9eQxxHoEPEuYhHtxKa4DSqV8aC2U8ebp7X8dHH971",
  "key1": "3qiLssgbiXBnDCExrg4MGgrekjFqZAGqnchmevH9WW6hA9mZw5xyHYM2MTEjQsFvD2qsBMXPSjBUgoimJ5JLc2sR",
  "key2": "4M5rojaMsiKEHgWUtB9q73S8o163VvGvohSt6KJCpXDNwqjFU1TaSrt2nBDVLXC4NtQDaQFBUTDKCErYrjpgtRdf",
  "key3": "5eDev8sz4fJYELtV1NcYpAauzpo2PtxAV5WNN2JG3oehqye98tz5UNA78xHYMNahPrdTwnZDNcaqpxYcc1dJykFf",
  "key4": "5cZrgbiQkCXsACS343JYdVRoLMEno4i8AULdmjK9by4GXkRNk1qJMuzGxgevns7J2F9vCjKCCw8jUGrmFSmCUqcP",
  "key5": "5g1WxAuCgxaFFZQcr3mmZa3wN9wv82ZhQwehH5K2J9LGJpFf6ztfSm5quGamjzyBBntwr4Mcyuf8LSjjWBPCWZqi",
  "key6": "64S9mCAtYPbsM6Byby8E1icz1piwyXmGem6dq9c59pjCvgqJ3GmU5buRdJqkpQPizxG6vGddR3YHRCpWgxq5kibw",
  "key7": "2qBWHKNmW17BF4e7EVLSRmbjhdjXdDwetzWPoY96h7A9XzQLiB3xRrLjrBuCa9b4awdSAjGFo8QQiQQtbFYSrtrW",
  "key8": "51tvSnSeR3tN7KLA6KRmeHGkqbjsLXZKXUeQ6JjHXgfmmKArNnwxMMT8zW7tT3bZeD6mR1aCBBeE27xLFu2gAViu",
  "key9": "66NZ1JciSXJVbVvF6UVfCVMjxFDYKVqMMidiiLERa2joGRwJChnbvKmev1xYGWESkvUktd84JJUFZW7Tmi1GkMMU",
  "key10": "5rqYvaRVbRxbxqgMWCegsSPwTV1piLnRdDmp34MtRWFkahwGFXvB4Ys9mjmmWwo1t7Z76UWDJ4BFWdeda8fXambq",
  "key11": "3E4YJ6KiEQS7tXqFRBXZDG8LDFjZz6j9McnPh4kMgZ9Tbcd5Pu6g9UAsia2qtgBXr8WUM51R6BuixPtzVJPJsMNe",
  "key12": "2byQYh4u9kvPzFND4qF2QPoacxJnpTyf3k7hRxebPSCknfMqTSWJPYaKxi1kSzFMzSfdLnj2ayJfYtURxwXZE7Yu",
  "key13": "3CTMZ9TziYj56QMCgY5kxgDQrhRSgUNNerzRu8PDBeh2C8sUfNkDa8sJkAmVAZisdus8iueXV6CKbAqcsgMdp3JE",
  "key14": "27xhkTAF9eS5zTuuvFqkwfmwCNjHRAtcn22EyhzJGQEy2kEYwxjAL2wQWuUxhhfLgt14iYCGJGGM7LSkJLXXh8PM",
  "key15": "5BphYH7PwL3tRZDEkh8XF5eSDDvGQKf6RPQorAtgSL5Prha4pWW7RH5GMs7kxpDyN6Mn4Uq2dLWauNMkxmwX78Rv",
  "key16": "4xCmf3veQCbdDKB3Qe94FbFXucgaRe8kzKUfWUY7c5HYaW6GdBqi8esP5DLasSR6rt5Wgd6b9pnbz19vhuHNUju1",
  "key17": "2HQwKxzZCYMqXiP3bpuXzwsQeBHLFFaEcN4PzKi245d5HVtpfPPyDcwXsjxZxLmUC66TdvwNxQyusqskSGZYrZmL",
  "key18": "2MYqBYDM5ScZ4aC92St7RXr1BeBDBhwEzRxp59svTRqKFmozbTxee84sZpWSY6KDZmQuh7dpacBrJGzEPDTEvFHT",
  "key19": "3r2Y1ZxhbY7PvNgertgx7yV5CgcxeeGS8hLum4Q5X49ErchFr9ZWqi2Rm4r1gUHPzvZrzX1RPmyj2T54uiJGw1LE",
  "key20": "3NabauJdtNmweqaQHkgprdBxVzpsyL2ehoRumGEnUHbZY4j5EjWobtseVuyKViE9TyMqUZEkrgL337jwqz1bGvfk",
  "key21": "5pN3Vf9ry6nyuCKba3H8S2ubrFHwhZQHB5gYTqJv2VJ13omTRCSDg66GBSKbUHS6qVKEExbbNr1aB5pKg6TGd2aA",
  "key22": "T2URrz1LEpcb9bAE8su6fe7nnYRHKBrfhdock5D1P8zVD7z12mwMvDC4qdsLttvMp1FWcqYYSbdGfFKfWnmDgcg",
  "key23": "8oyPYAA2yGZhuT8rgNdGp7C4jMoRxGLR8Yfrd2xreN8u2tWCv6PQCQQpapQWKStbZrsrHrLwvmX1hTbnrUCEtSQ",
  "key24": "RVje9jZnQ5tki66zi4PtCWzhtFTjLw9q4d1FdQi9wGahYCurbcd5PirRU4V9YzKtJUjo5FKfxb9mzMbSYRnUHY4",
  "key25": "4b9ZHqKRik9k1yHDf6TTEbh5JdS1kLfYQmDZNa6ARbxKL1Fak7yXMmu3yxxPddQJcY49qkbCUJqJYpnQcFPWwRTv",
  "key26": "3cxJ6VtaT8uHWaQ7Xdi7xAjauCfDXTQnuGwRv1MLLB35VqoKMzGFT4NZmHQstTxk2k51vgL4hcKoyXm3NPQzKzHA",
  "key27": "65sZWUevt8mLbRHY3xedHFRixtutQgeMyawccDeNkx43BeLt9bAX8Ty53PJFDDknXYquQqVB6xHsCQRJBePmEQHb",
  "key28": "xNEbhCJJ2LPgEMeqzi6nAtD3QpD4DejQP1JEjwHe5RhM39Nq9vLuBhxGpdYxus9XV97PM8cWNCHe64bQ94dDKdA",
  "key29": "aBmfxZEbtRDpU4bzRiySKYGtErLX3GYXYnd9URfPQwvdcdym5uAU1AEyoZ18UgLUTmwmjaAr8R4cqA1W8yjWuMg",
  "key30": "2QfgFgFdz1Sv9Nc2XDjQAxNx5AS3DWkca3gv6HUzCPGvMrSRuJfygPVuQe4t78FqTiLAZ466aFwNUjCu9twcnNHm",
  "key31": "4ds5e4mNGXdATDC63fuMdjtSRAYXAip5fbxeS2Rm1SX5DN8pCmWtbEpSNesN3WC23vWSqg4umY4KPbD3uaNzPjQS",
  "key32": "4pS4WRSM1MDxo3Hazvk8xswgy27r41Gjmtq8rporusFuzE6gs6WhJjbabuB1NJJnwy8VL3qn5odeofGPF5t3vSkn",
  "key33": "2p5Nf5aVpz8t5tfubRtpS8rT8yhYwHM8dYHZ7XcSLWX4sgy7HAY3AyRAnQ7ujvhu5DAp2nc2pdhsHZWHPEhaE7Az",
  "key34": "2anXwYyzngvPhvFzQGLMjUE8pK9DagZE4GKDK3gCiPD3qbcRU9AM2ABfiLGk1AQ6rA7k33ByXDX5mpxNvrMrnSsY",
  "key35": "2s5jB7BCKeiwHG8NS33ptNX6prFXruSfSMeagSKFTDa4YuCEne7QHXQvWcJrwyATtkiPFpBoa2jt6a9SgZ2woiUK",
  "key36": "64baMYdAgkVN7uYowcWN2M8mQ2SzQf6vvyEs6Wsj1stMQngNeAi68Kf1MUnwP6TeEmquzWNDPZ5vLkJ9JhBdFDkt",
  "key37": "ML9yELWvGggn4KNTGR2EM2qxX2DkEZ35aS6fXT7UtSdAf85JkuuV7FYkaQdLC4d8aEfvsMf6VBBKqhU7TwgSWW4",
  "key38": "hjpufxBxmD7jDfPrPWWquczoBxA597knUaWEdMqFqWFuJrWwfT4M9BvTnXLDv4P3sNqLCNLuof8rKwKAjhFwVwN",
  "key39": "56BwMdfX3S1dH4Tf3DRcX48V34HneGtFNrMYKrFZb1umiCXu8ViwcXLktsdeZmp9pBGAfGPyupw31nxgKghyHaZ9",
  "key40": "6MkyoYJK9qTBZLVWnK64AdeahZzmUMNL4M3kx7WkcrYQqF5HWS9FhWk3kqt21hcW2uA94s7R4Xk6DY6d3j251WY",
  "key41": "5FixDxES6PDQRLxiyaLEWmZC1HPQJ3EBGMZ8jxZejWFrfj2dkga42ZuKE8dxRPSvV6Pu7D4kmrsUq9WBhgZv7uAb",
  "key42": "57o4ojsxQyqpR7aDk4Lek9H7Lco175yqaaKPQFToPHC3qF3cMTBbNPyeSAo7QrzPDr18LsqC2xvuzeg84Nv2H9TG",
  "key43": "2YaMSMW8ENit3ipmjgpPMJMp1X4tyGt3t5yqvu2zPds6U1K2YSUW3x6i4W4NJvDt9RuUwktvxHmGQQkGaSumQryd"
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
