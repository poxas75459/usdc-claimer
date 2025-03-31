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
    "Vc6t9qFFfi14tXEmsKirMWyRqEESfysDgXvrTXHYXtLjCJmUHo8RsbotqXwFdGdnHbdGB9BnkVERdtsM1utvcCE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34nWDngmv9LQsXXNNsonv5E4KfYNEJGUnu8tBokZocTya74GQSgn393CRXNZeaG1p7tG1MyKJmkFUzUbhrHJG5n1",
  "key1": "3RphuytPYPmCbwa4Qs57RZ6H95LUMgSdjdpjEophsB4sbZ19iX9TakHxoJpYVk55QaWJYQfTvmgD44hMVhLXLW4i",
  "key2": "5D2eSjVpx1zyemvxwKhSJdsdEfTqhk5m6TqueDwHEnB7ztK8Zm6taJfSTZMnLrfGw2m5BhdSiwygVLGPezwuxiSQ",
  "key3": "5zQmczQzY5aybRPXcmf7pDjdRUZS1Cen2RD3mGxBnDaCwMRqh9dj5c48uEW9NxmjibiPBRpiboLTyUuFWW9ubtwi",
  "key4": "2NEi8QmcJZMrZ9VASDZrm5gZ4vqzzye6hZyCvbMcjTf9p3jmjRhTPTtHVFSsZQ8aARWynjfHG4Q9DiKjrqkjFR7u",
  "key5": "3hwXqdqQY9VXhdJ4TyFSwtspLwptPURxjTBhZgYRruUmcQRdAABRFenZRViofrWUE8wDFLsy4yQnXr57oRwFa5dG",
  "key6": "5eNo1KjT8VPzHkGUHoZTHL6UEXL2xTqFvC8c7Zjc4keKJJcvL2EWC5eLp59RgCD6HdR4UnJvGjBxMizhrG7txZZX",
  "key7": "Puo2vEqSzLa9yNbfyxcG176TtbBSp1GcEDbdaT9Az3UiHuFBRk4hRCPkwe42QprC6jbx38fZW9Ar8WbY7xdUCZ5",
  "key8": "dTKwFuRtzRLjKwK8X1CV84B6XjerfCWiBnvjvQLEeSBChurzaYZxcSWjS9U6BKXA5UAJoJgkFPNpyB7TEJbUcGT",
  "key9": "4b2H8VBvQ17e6BkkGNknCPR8SLsTxFm3DNUSfWsWZJwSgHpPMEYStynd6vyryaxGMfT6KfcMRwQfhEAPP7vPVjTA",
  "key10": "2GTam4ayzNTxNFVvGF68RrcaHwMPJ65kMRBFiyuRPouJphP2gG6Jc3zsP92vRwFRkQ8EGgbfzDRYBeruTw7LrRtt",
  "key11": "2PiuqkkKW4ms2C6UHe7GbjrJrA9g714aHqdXFUBKWGzeLCzxFJyQ4hWsyiFiXGCsYWdpNGJ8ohGTQYBBPM9JuM2x",
  "key12": "jXCWLkCNopUKRBfW5vFr3gtqUTiK6hJfRqq1qymCA26X4kgy8hwnjCA4Ek6vFNopBnX5gspGeEc2na64GZFFSv1",
  "key13": "2ittUV5EswkG2gNhdGBN9WS8iVJbqeTLpPpAjRyxMLHMdiDwZvAuR8f5sKKXRVcxRNrrr6J8RN9nQxc1q2nRcbzr",
  "key14": "2g7oCEadjL6zDvJZVuAh4DHgHZFJXQq3G19fm6ajg3Pr95AzdHpjTajbYPoSuHqgQey9gwkGewSGF76E28pu3EnV",
  "key15": "4kYxx6B6kaG3tGYyuS9sn66RNXTg7Xs7Gu41AwkwWgMpNvyoeHRpQ8NXVAjYagcbVM1jRfeGRiKD1M6Y3JPTyaic",
  "key16": "2xboM1o1Rj27jB4ZX9Pt6Bgc3b5UB3ttqcBSmGK4pU8h3hRd683VSuScSV2ebes4F4yNwsYUdjLSkfS74T7b1WYN",
  "key17": "2tuNNsxDDY2YYpGvw4Rs21e66kH3gyEycBrexwE6aD2Vtsh8eghaNcjmZr1xR5BgcT6N6GUuXmCKvEeqHEuuYK1N",
  "key18": "3X8DX9h4oTCguqmo5reeowBsqhq3Z9mUrvdX5DhRJMxHSqF5TwTGQCx9LaGwiApTVgXmbeQ1rpqwqrdSh32WHj62",
  "key19": "577ADiFA3P7MiBEG6ouKAoZ8yH4Pj4wPR895PgdQWGAzBQAwMezp2VjfMUvSP75iJKh5o1cwJvf6QN1t7rMfu8Ej",
  "key20": "5FcduU1rtHr8yMT5zak9cxacUeFPHL39MtEYvKea1wnykx7MRS4E23jwiavTd7k2BLqBNG1cW2TEL9fNcTVjEQXi",
  "key21": "3xXspu4gVF9UFtArGtLnbLFMVC9EDiUChST8oU4d3YQpGJHTfWCP8BPQCygiMEa5j3gkbMeho2zzXHPdrsHvQf3w",
  "key22": "SXiEesvyCikpDSc1PzUpoNVkBdkvi1Ebyndg3Z7YfcpeJcC8xeve7ReKBH18Lx2Rps4TMNEX9KCKwke9QReD9Ga",
  "key23": "5P8ftyBg77wQR9YyNHX9EZRzNVtMMnSzMU2X9zQNGv2TunJzXicSR93vJuogqwEsLQPe9FkauBfUCw9szN8iUTuS",
  "key24": "2bTLAgcUQ3TNsggBeF8u8obhQHM9cZXj23ERM2vJ945AkmWboNFqu7YvLmunL6mncebgK74ywhBgsFmGGXaSypej",
  "key25": "4xJUi6gjE8qMqdvrHHdj7TsvFFmmuMMFznPkZSvC2XNpbCLrSSENTrWiyf3aFioVTcxCBje9XKw35JwzsyfnVsaM",
  "key26": "4udDeZLWDPgTduZwrA6QV2mWTjRGNnYUL5aezkfs8Nh7PohJbv7fiE1fWtripodRiU1SQmahYDqoJuTp8RRSdsQv",
  "key27": "5TJUxbvMYo3FvfyfBJLkshhRaB34rx1pkp12JGBky7gxeWGyWxmnWYJSknuZkw9aTGLjcAjcYA5LDbcZucWcuCAA",
  "key28": "2t8Q2KNW1g8zzyGRFoC4V3hqqK1EB6ti9mTUfLubfZVqPPNHVJs466nBSTCQ4ZppcDF8MZpaeAMD9135WgCxrp6U",
  "key29": "5syZKqa7zZkhkXH2W3D6PJefW5G7sxgHn6aZE2U5N3ZqxZ9vyiNSZy2ivDgYhTBRebUkXXG2eVMJEhWgFdUMaRUA",
  "key30": "55XsFCMjkEF6V9HyF12YbrDGTEEyaJASzxXjwVn4pE7J4teUJPDxXT7KnWnhY2CwzPCgQGABx1d9xqEzkoNjo5u1",
  "key31": "31R8DKfEMNjKo4gHTCK6dhgcLduC6xNMyfvEJgHw2ZYaHRgb1YvtrB1ntHeXkvso3VPZKzSU7rdQN9TScnGqbLmJ",
  "key32": "2f3JCmvLEYP3SAdXuMDjx4iQmLGsGsX6cmD87gD1oYD4j1HUgiM14b6Puv34hX5XjUNhGyfDi4XgWRhZszNLhbaS",
  "key33": "y4rbcCvBefxQWAbo4DHLNXPbvpr8RTwKwhWehc8a723EXMWXNszpeNnZsXtNVUhbBUYsPSDYybwEjioJAka7fHw",
  "key34": "3aTsZnpih1yCnp71d3dm97btwH6xCpRtFLd9ybESE6WE6W4oJZtkX6vjPf1H73J41BBwWD2VRWXKkLaoTX7MtgSu"
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
