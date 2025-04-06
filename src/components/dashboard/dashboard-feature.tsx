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
    "5KZFeQmCqXMDSQuC5XTrXnVUNJLVhCdWEvJEyhB5heWoS51fQXNZZLUb3FhrkFSqRi4o2hTF4VMSXh6No9oeRX7o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ciEpvc3ZNFJ67tSkxbCNc6L7zvSq2QatWq7uxqiLeqZcEgobcpFdBLBWWtr4Qgf9a3dF1iRmo7xjgXH4FHEA5uK",
  "key1": "m8b7QN1auWzjkMTxypvxzbKyMaqF25a54wTwxuv16JWaCyw3hpEakkeXd16WxuSw4Hxd3rmEZretkRH3v8XHniD",
  "key2": "8Mj6Tb43gnrqdzDt7zVwCbxFbYtA2htKve8FGoNiZQFsGeMBKJ2JuYvBtcJAktn3sLmtYXppADN3zmE9sMeK8jL",
  "key3": "37GhWLT1goEFFHNm2Zw1d85iyuvB3siSUbKg1py5eV5sabc2fPmLitzEgfzwFMZWJttzS8PM5mhFqaAmCD8SLe4e",
  "key4": "2RDvdumzb2EP4wpAmiaLbfpFEopGWpAsiNK1jJFoFLbiHynjQzAQiurv6oKndHoC6UXHihqAAZ1V3PfCLvpQau5T",
  "key5": "5humHUJyqkMXYFVgD39BTJFTZbWpdytWCgwXXLMYuX7AXNj1gwFF5N11ZpNXtH8yS9H5QjWVTF9UHdMWtD572mc1",
  "key6": "27RgnjArSfw3kLHfYE8tjD84g6SkmkTapBkSVsyXEmpjzT8V2QWRQJ9rYwhaP1dy5DArpw6ha3Xb1kryNtiVwRj2",
  "key7": "4Ci9jN79wtoEgs5Fw2kseL1hEUUtctf4Lf5GdQKedofemDdHYcptCLRCVgfmPkfa5Eymbd34JL8C5M23e7banp5Y",
  "key8": "2ZnNunPxFEbfELqcWdDVty2E9o3G7cDNHa2H5UKGk65qFvneCE93MBHw1xEP61HfXPQZPC1kVFzmbdQHgi7qhUc9",
  "key9": "2xcF55oDDbNyZb7jx9b6H9J2NBApT8ngsPVK5UxeUSLQ77qQaVQPC16RNJLGZfF16gDJJjziauAGqfxJt6QVorNU",
  "key10": "5ZxZdDt7J9frwpEUfcB1R19EsaLCZAQwb5hQMDJeQ255j3b6KS1b8fALQc4xVoein3UudGLUkko19xNVriAx3pgg",
  "key11": "61QWNBNFnHUTZiGNAiCiastvxQH3HQi7BznJ2yLzwhkoUn18x7DKKU9KC9EEPt5Lns47pTD9NavPkrxQLtV57q9J",
  "key12": "3iQyCREybZBaMuh8ZKSZ5HjUQQQitvfvCoiKEfZBnxcsT6qE1XaN1WJGvxbqG5z1ERZVyBcD7asv11rK7niY3WjH",
  "key13": "4XfLrktS9nrVTCB3L2idtofBPFbDkAoyBtea3CfnzooUcaUAT4o4tKNVG5L749s5ATZaq4Bdnas2RVTTGEXoVXWw",
  "key14": "oo9DZB9M23b2BR4tqSfm6KLEeaHiDoBgmYiquzAXXPqGak1ACY7G5uLPtCz5zm5vnFmi7z4GPAXuYmtQQveZibu",
  "key15": "5Vi4ka4w1WJ56V1BC4LcksRfpErwCApNpKjc95PvTTzfrxGTPpCn5xy7pkpQsKgCKecxuqBFX2N7HYAgmiAzTX6Z",
  "key16": "3Dq9SnCt55rQ4y1rbtfVPprb4eWg9UJwzGfpzSz4Q1htLNV6P9fBDN7K8YYA52oggy2cdLm76Qz5XZo5d4LycsJ8",
  "key17": "2Tgs5U7Li5ptxuKpspchAQxhvXDrDm6ywN2e828emsi7PvVCZ1kmhL5AYCzKHDZ1b6h9awak3TbKRnW2wXxUwKju",
  "key18": "3s236GVToMVTn8fGbc2XHGrrdS8KrS84CS38Pf91TjkXRLZWHqAcX5xzN6miGot6NDQpWPgjoZepWQqnnJ38aytT",
  "key19": "3YF68XwLW2Mpw73r1moenP2WStVw1j4r4iyE6FEJY62XBA7s3H7ae81H5fPq4uZxvHR9FA8bgVdxpZL1AkMjyn2c",
  "key20": "2Ci3pA1LRKFkWgPeuU36fMagHiS8RJReJ5kuN7D4jRp6Mm7xg4gi17zbToxGx8gpxd9XZRkAwVU5NfSN3Xcrt6ZJ",
  "key21": "5e71mSVQ6JdVEed9QsfRyhX2kPYAsQFmJapAdnr46o46tRo2dA6EwKD2bmwbaFwWddyP8Xrf3jzz91FrYaWHi4T5",
  "key22": "2Xfoowd53YGeatsC6bN48XwFB2QWiwAcM1BnvQYpwWtLtWttSTscj9TD4Ym5URVAaKv5X1HAxZtNvHtaBZaq99Jy",
  "key23": "4Ba3DjmpWfg7wE66qoPzzEn7ktMEVX4Ydoq5EuqYdDFP8MsjeogoWWQi2MTxTMncwvRmThAUoHtCYhBogpC4eBHM",
  "key24": "2sjD8uvMk9BBFNf8F3Ux3taj1Y8BpWbh5y8rFjEa5hSz6eck7YDu3bV1xa52Ehxu5vczW8GB97DBWxmWM11eYTMA",
  "key25": "2UvtSAgTDv4GVTFiUnHSGkRbkBaUt1v27jZX1kkUHQcWYF2u9DVioraVYtWRYcezrSWHhW4nTKbdUxmMi9EDW5JG",
  "key26": "2LmMShypFJuZUuxSPzFn1BARW7CC5anFKehUfYbmymoQQ4iSS4KfY94Nu28JLTTDzTb4xXwYvq7xN4zVKzrYAui5",
  "key27": "2yHcpuQ2aAwv1BTWkEmhSMiYKf1RVtPH4zRVVXK8cfmuunv2yhWutQe6vXoqHfhnNGnmzF6BweYGWBjDLcqdSVrS",
  "key28": "4jLUEMk9qZM71LbV549CCDpzJ8pZGEUHacNyKCtWB9aHCvZBixHDPBMrx2PUDW389z54kPduDLox9i7wvf2ArHuH",
  "key29": "nWgmYHDG9cgFeQewPesEokxbHoem7WCTVsYG96AanoMeH7yC3vMMkBjHr6MPq4ZXAgVQo99usgYxYvW1xbA29Au",
  "key30": "455TPFKgKnY9pzpkx6WKPmSkRfraSoRFoHXc413v6x1MekCcFcrAVsxpCAGw1rfw5n8iGBueHoYyVXiK5fbDh6Kr",
  "key31": "5SABUqmPr1d4n7GcRVkKjgZPE8By1LrpFEUPkPowyTbR3CM6Fqtf1Ae879MWsmDzTzJj1HUaAGR7SuaXH4kgGid1",
  "key32": "5nuk5xmzJVpoLKyVx1YnDMJkYXnEdnuERPfyLVy2T6xj7rc7ZRVsxGvFiHuZ9FtAjteQQ1DVFftw4j2vHBJ3Cqis",
  "key33": "5aYSjyqjCX1UEBYLpd9zem3hCKYsAb8oAndEniY22BvNmbDKnmcWgeZHPZfJGuiahJLAKbyVTwyj6L8voByKPSF6",
  "key34": "271zXAb7wpjdxEsufTS2Qi1DT71LT694DSp7xW2EwaubjNURL9ANMnP61VB88Gow3AayRdSCdPtkLtot2ReaaZnD",
  "key35": "hChg1nSxJkrSd2KQxcHSAJ1Qgrqi1ZCvW8bj4jJhSpkvaVrrp6ZkM3cPPc1ruUvvNRcyGCR9oRYAoAKwptYGJLJ",
  "key36": "5okGNhKHKbMaazg3E6Kd1HrAubsbYGV4NA5nrQGoYrNoKbE2MB19sgpBxbPHgb2x9fRwTXGeoRfDHZXAGfxzeoFf"
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
