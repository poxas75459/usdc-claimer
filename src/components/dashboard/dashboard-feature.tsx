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
    "5yxfSZMgAmc6giswjDiEMuz1ryyeuoSp2VPARNuDQUVb2yZ5e4oJNRiRipRFGXYtCqpdLBR6wKL8ZPi3FuXJkfSQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ECBjxYSvNDWe8b3jrjxxcaCyEWpWeCm8Eqa5XwKbShCGQwLCArFLY4ovEs1DXNKK6vCWBFdjTYN7uT1RjTpDH7u",
  "key1": "4cDRBXnMZCr3EZShn3EQQgiasC4FKY3SjpjwdswJpTXa2XbnmPJr9cGgvEs8pz1oBrmbkoUQvVDhb6WQLHGniU67",
  "key2": "vgccQbhmhz3zti2aH7aVMvnXKXiW279sRWNN68scAyve6T3HhTESFr1Jk9j1mQ2vEGZNQAK8NK7Xrhm3acqTkVf",
  "key3": "4JbyAkqiZDoivsMqp8vn9h3GR4yPNFSN4r6w7u7nzgWRnhR9NETBrkPoobLxvbty75XqPL8riQrV6mSW3j7oERCa",
  "key4": "4W5EFpijpniGF6YKSgDGBYocJQyr794dXVpcvQk3JNx48TC3yctyUQNxUBruGo2nmnikHrwiEPGvPmCbcCY2u9nR",
  "key5": "3qFzKdeuGfkFjQTtp7uGTknbnXxtAMGACnYKkEM4Wn3F1mbv3daJbcmeRHpFn8qJWwpuyfAwfrM7bffkYdb1phPx",
  "key6": "5vhmmkVTVFvx8BdcWQvMvfUPCH5nzdTkbcQdw5tgMy3aaQxPRJcDWDdLrbBx9oxQwho9hUKWTVnzQANHLfhc44A9",
  "key7": "5TCDpqYtGvyyCkAtcQfu5X8ozFSoJ5kZw2sipy4DpG7kea7PftVoiskctmrbTdxCSZXxgdkhtBSTbdY3Zi1GrzKz",
  "key8": "3gyTDh13PyMfJRc4RcuxzDvvEE99yzCJKYG2txwCvZzzGrXWpdvvpwCtrpuGNHBsRD29C5FZqQ1vTaQgGcyNRM8q",
  "key9": "4BNRDbMpj9sa4FgzBLw1sAutFCLxpUjQ5Jr1jrCVoinFLwCtrmkazv8wA2m6aGj6Y2uidgkmp1wda2VATTHVFCPp",
  "key10": "5NByPAvRgmZvCwBKdBFcLwosDftPFvZf7BjX9DAqntCvnxFW592Seq553bAuqjrCq7iMvzt4Axb8MwmnK4xasWP4",
  "key11": "2JGhKbX3scBkicxb9J6Uo7J3wv3utvxo3Fg4Xb4pYof5gXwStLuBNcpMLeT3i1yfGdp5soyLpvdQj5KNQpFE8pMH",
  "key12": "2GQi9g4WNNdPNt1Wqz7Gz8bJ9Qt4MuqB1mizhp1V5vYcLmS78Kj2v8sfsoNRxJENVLR8LaDLRXZMCcH54ocC1vgH",
  "key13": "2WvTUP3U68tBN17qudbwvzf9gadsizYH9bVJvmxQbA3nJVRcRpt3Nz7GKhL9eQWbnb9DQ3vBBPGaMDfF5QcK5fUS",
  "key14": "3PHyRAcCkz9JobYLp9723DKEDfjG82gyRRP4kbFVJ9wRtFgEYfrHiZTsZKzPNCZjoN3Gxtabbe4yzUBZThUsqZ7c",
  "key15": "5rH16BWMrCNJDMLoaurQekjQoGaaj1Q4mvGYcjMsoQ5JSpfmVBaEAJcQXNx2mJqUUPDWmZgdPjwuJN8YMjhw6tPw",
  "key16": "5eQEawZbM8D8nS3pfgwEpD16qrC7jqH291RXPDktdJDMFvf62EK8fZFrYphLr5XuzL2zmnSUU7WQyiMn3bp2oxf1",
  "key17": "23iAxjucVDMnHwZcbMfFim2VsS6wiK4iz2cjekPFmdQ1y729jD7W4o3Fhvyfe4kpggH6czxv11bwHh5b4S8ugmhP",
  "key18": "zoi2c1zqEZ2URNiLufbMXf5ytLT8Tefvp8UpNvQ4gRuQqu1EC7NfjCM7Du8KNFU8cSo53MHVpCNBoavzScdkCg7",
  "key19": "594rAVykf3jcbh82gPqZjdQtWvHV8Tdm8x9cB63G62oViRfSKu8LJ5z2e5S37XaF7QyRdRf1oU7iyKTZcafVUtgg",
  "key20": "3YFVKZArLuYbcuwadrtshbdokt5eNWoYds7r9ieFjpQqPPoumFeL2T8eAVCQEnHMsNWnoKEQnzeBWycJY6CzzTVG",
  "key21": "2M5ipUiWLsN4hcpDPfvEEqe9p7L6uTfwEMJTZye17CazTyBM7GUBd5GN6apxQomTerxoL6jC9KEPYFwTjf42F5f4",
  "key22": "u9ugrRTUVqyWSFVuaoPUVGJxxfiHTH1mbf2x25e94KpngSyLg54au1td2gPiSHgH7Z28smL1ARRiDZAoaqHedSy",
  "key23": "3aLqoXkAwLoxum3kPLNVb4y2npuqeNFjhH9gfsBURLYAuq8bfXsHao995cYbZGVykynDTbMAyrWcCw65KUdfncP7",
  "key24": "2HkmkYDs4qBHEo2Ae9p2dv8WqUguwt1WCxVGhgttWEyCuZ6TS9esUsbREzXfUphoEKB4Yk1tL76zM9tKxpySiRFa",
  "key25": "4cZJsfbPC1TVbxTd5ztYSRqYheXpN8Tkz6SAXVWDEhqHy9WzWUQo4T3gtxcYN2nSuD1A8euTJhGQ4GieQ1VbekYh",
  "key26": "cKkcJ849Y7HPvZr8dzUuNiMDhU4dTw9CD2p5ev8tx1cPFGBYsvfUGhNqH596UorLTey64qLaewiKvExy7E14T9A",
  "key27": "4hfb1oiJEDCmzritAKKx1CHHeNbtyYhLSTctv7hzUCWAwRByGbUoJGjHX5GRvEorTiYVZf8AsmZpDUNuEbwwjQW5",
  "key28": "5t91NXT6AFq1z62MpqCK98xdFSXjuDjr7tp8M8KPT2Bq1ixRkXUckhizNR6DCzg3imFVyhUJECsjMYhjAswvYBzQ",
  "key29": "3m5ZukhsHNWef1c74aZX9145JVNL4uepdgmFhf3umSAHnKCZxVXijQZFqwstpxuDXw6HncHpWfTrvbXTmz38Ro1T",
  "key30": "34gXz7hwdwCkBeGJ7mCALsgmeyDboK2DGryh2FazDCWCZTUuR2WKgdaEpkVeZpcKVJj59Gcxs6ZjEW25M9AndCMU",
  "key31": "5kaQkQcoJ6iTdMwSkNugeonx68oZTg9u79SJdaNzFFAecbJj3r9dtDwUVgzSNLhwDY4pNUwScswncGW1KR4qc7z4",
  "key32": "3uBLa5NX2Hc8tnZsX611pSt1vRncTLn1qyGSpTWRCqFNQ6r1SYnJRVet4yS2mFRrkvs1Lcc11DwNqTPy6qdUfN8L",
  "key33": "1mAY3mLBxnN2tMeYhP2BRnu8TM6FvL9Sipx7SsoLpC1qKTtAeBYjw1Eo2orAixHLnzEmpKNz8woYhTBhWXrF3v5",
  "key34": "5R5mkUPUxCfrkLLo4y7n8ge67zdKJwKsSy8LWS3tbfp4ZzrzTJiDwxaeiQaGZgTmY37AAbnxKjjhSYRshBLoWAaL",
  "key35": "2x7AVg6bdCzWQWaneDG72ubaLN2NzxsgvTc3e3L3aX3hUTsxZpVCUvi6Fe63NcGSUtEH71dnC5TDhNyskX73BJ5Q",
  "key36": "321m6ePqx4GXcbG8sFkrpTNXuYfwEufzMJgdDua5yv71CY6tGHa2uad1hqeJQmcJ1wRkEmnMPgUdk7HvR9Uvfpnc",
  "key37": "byDiuiQ85fumjYXfVZBoXMx8zKA6k1Md8bSCrHV9YbC3WpJQbRerzfEmVrZcZoMHT98pCXMucPYCfKPhZw4cVoW",
  "key38": "3yC5X9mhaCHhcyi3Tp8qyRxwPtRBbSfStTg41BJBFKicCKCX4htuth2BdyGvqKbWoHFwZV8Mqp7rhfr5hrXWLpTR",
  "key39": "4Sv1cb9rjfy9ifn5sfftodc9hFPCGpF2VH3MiLKMbVkogRzbqhuQGjLbb1vixf1fEk7Hnc9PGPz9wuGMT3mvtthH",
  "key40": "WaUfKaCHk1j1HsgRbFMieNHx5ZKwALZBuPbyttV9PDbwWEN7sj2nfGCAhzE1goNac6s7mv2SQtQhcsifP57vVTq",
  "key41": "24wHyGxCrad11CTSLUBJtNsjfwrtzX8Td8NSAHekkXQQsC8hxf9qmcSWuKf8DujdHHpAL7NpkZsQL5MWyL3jFBA5",
  "key42": "56jJ4RqjutaLea9ua5SFyoctVCsmnGHrniMhrxhJ6DfDp9oV3kKPALUGxwjihVgwpEnTJXcbiyXGZwwqmbnfRqMS",
  "key43": "2mGaQwLfF8bTihFRDa295KRV9kJj3W5kSypVaMrEcQHB62UvdRt2NnhFkieufez9VhdmpE6d2kHHTZSM4QEtQnaj",
  "key44": "59zU9ynyDn8rLSAybA3R8o1mD3fSCzk3WVK3Siu35DvRG4MWiemDgDLaE3DR1Y3x68Gm5KpeuDW5c3iQuJA1AsVp",
  "key45": "XX4iCzRicJbSmm98kjUpJWrXdNNb1UB6c8A17M5GMzPzgsrfxzAPxeb533nSnygqjaL2Q27z918P6TB4CfC59HB",
  "key46": "49JSUbB3vgaSL2oZMRANc8Es36wuEduNNy3ruuaiVakJfLKrXk6JaH88CibuApZ8SwFNdYgfnkqJzoqUTszsK9pZ",
  "key47": "GuuVr6ehrbMedwVr6oGXu9tZhn43uwxtS9cLFe2wcZhBfk6vmhVjqGwsGLJ9m2xsHEW7WAiYaZEeQP7pSLXK3st",
  "key48": "3QXx7XFFoqJDasxVdHmaZcFFAXyVUh6zG3RA5Ckh8b5ZjxFCZdVHA3KZBrKXhsvMMxRhZdUFrxfiFM5M1gUWC4BV"
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
