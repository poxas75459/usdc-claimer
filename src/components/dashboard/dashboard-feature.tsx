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
    "3hsWTtKu1GqPntE2bRHRGAMYanXBVy2HD7YgjAHvii8p3vLgKpZGcp8uK4D94cEjNxbVv5FT7HrmxqZXCf2nBc9z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aShevQqH2EoDNh2emFPx4ZfNrv1ZrbciewvJJjzVBDhL4YbBxG5kreahJLjadYgi2WKmw8PV3KDxsDavchk2fSB",
  "key1": "4RmmeY6cH28uQNhSy5Rji6xeo5HsRAFUwskYCpNEBeKgAVbRQdPwVgfskTFj9AcCJY36dnw5nTHQXQSEtHGnBrad",
  "key2": "4hE5cWGrQkxEuwgZj7VeeTU8QRpEgF4eV7W7X7N8CHggqzuNepkhPpD81ctJ4yGy1PdMa74gSk5ArD5hyvtxELSb",
  "key3": "2jeL1g66Su1G16dHY3x7WZyPGhHhz7Ti52ju1rPYnaR4Niy8PzbtWEHR1QxP4Q2TLEiptBCxatFRG2vpYrJgdpXZ",
  "key4": "3VVyEVgBn6o148op4GUFNVKSXDGyynWw9e8XNhmoocJ9uGvfQn9oc5Fv4Yb6UYkCd3AF4s35fkrCnhpPgySTkPmS",
  "key5": "5iRMV753pMRwMmqcVPQCaBF4LKXcuR58yh9GEpaUSmofVSrJLcZ3oqurzHTPBavXJWzrvqdTGBEbPAULrLWaTrae",
  "key6": "uuD5eRyNSeMhfu1Hh53GW1yMkMGxRJ5EqQTLQUQZaDK62tsrUvvnVks5j6jfuRXceWtbNrVQec9Pi86KR3RcLEU",
  "key7": "2boC3KmX64UHNVk2CTaC4rAQ2zQu8zNYM4HJGu36XQ9uZp7nckVmFJYtLarvtGmUoJ4zJ6RcLLrCbURZdQCgS3id",
  "key8": "3dGa7grG1Gr6xkrDKzKA1n5NbDiMQyiV4MPzYCbmBt5XW5SUwcWp8K4VbXTTnUzd449bhNP2J2ufX29EHk1XfTso",
  "key9": "y1f9J6QvbUxGV4mcRSeWjZrtRpg9b5hzJStyQgQh3MybJc9Ayr9RdvpXUANSx6ipfSAEDNLeC5xg7VyHifsCmJm",
  "key10": "59mVKNrrHc6jR3nVuApoyfX3PCV3EYGatPtZgJmAMruUkYStd6tadJYi4Co6r5N42JhtCMNmkx94AS75rUTpJ8Se",
  "key11": "3EzghSSsL3hNrTHaghujF1HJFCwTdgBspP3Rg1Gn61zxcksxQ1jTvcH8hRutcAt9VXi8pGpx2mpgQegD8wH8DmPX",
  "key12": "2MSUJkQX371Vnvr2MvZK5AEndM6p5p5JTFtCg1kZuRXYaaYEy7QCLzNmjy4tKKH7q9DvAgECG3qsFcgiHvATjJq",
  "key13": "54UnLQm7ZNWvJJJ3DJChURgi9V7MemhYRVLCoSrbc2jhofGuv3wmL2YsYyTLJkTbxiAYhVtBmrQcArBnnkvpSTAp",
  "key14": "KzMN8xHLVmiwg6eqt5DxkDErqzkNhpY5kNaZBpVE45eHEmoa3XXT7nLbgMsuiQ2ThFDRcTmenYMzUNXKHni7Jx5",
  "key15": "BW4bRTKUPDZgT13b1LzRRPcZJfuZY5kHxcGqHs3P2Sz4Hz3pVYtzehYbrxURzpEzRWaRpUPaLM2yySHxAJnFNCM",
  "key16": "3Z7FjhHMV4p5Gwo6ugAZwdGNM8uxcjum6kR7RkeB1m5qBuADg9uhwfHe661g5rWY6TXFX8uAvsiymzStK1u2vDb",
  "key17": "1odPutJjWq85PVTwQV7hBgKeTb5MrAtvX1EcGyiU7MuRMv4r1HxkAP8cfSoxeFbeeCTkq6uksg7NsB2qFLhXetk",
  "key18": "5UUcBaf1sKXXyfTf6q42ixpbQEDnzxkNAZ6TSd5f1h6J3mQSU28We92TdJuHrbjgTAwTtG27XN5L3oPG6jkuoQLW",
  "key19": "66M6aSWwtVcYuSSNJFsjDgCe7VAXkP8qLBZuXaLe7ki8hftCRbKuLG6qXGBWC38MUSpvf2hU8QnrnfzWGTM3tT7K",
  "key20": "2gt1fHbpxCaViw5RFDMXGUNwFU62jWtRXJDHyMJrLty67TTo2LQsCLFwKfCpsKNhAqCwqnTuBSiUix2SPFmhENEK",
  "key21": "5xLCB84Rjge8tLRuWL7xVzsS3XnWxq2dTiukcpJgrMmsvzeyy9hcBuALzRXBuTTyrz2PzoNxoJtoJk1Wu1ewN8yK",
  "key22": "2T2E4DueywB4kZUjenHgw8BNYP3yKhzeczgKrkHMshsdWeGs13E6GASWcRY7YeNDU2HnxDe1kE5ZcyZQX6wQNrFr",
  "key23": "2R9jDSFXeUcJMyd5gMP5Jema9j4VMW3FjQtGujTzfXwQLpYjNdFEGg6JLikAHz7nxGqT19eB8cMVVtXtbwsru1W3",
  "key24": "326YG7FySup39ZwHhZ5Rp1QX7Q4qvm5BXB64s88zT3gTDihtRd8YkZhyqPB22Mh4yC5a63s3fkjHyoHsnk3AMWK2",
  "key25": "5bc2M45cJSvWDDkuM6sLfguAcdYe34hfct3vwJcbXAmQhCe7Uaw7aUmLFYYqJ6pYDQowTSzGVhT6QyMdE8BCyoFF",
  "key26": "3hrmi2NVrEMxtojAvVVyDqqjiFvbKGjJ1V86gnEbSVGg48G1F8rmAZzNWxJeC9tTo3ZZewVNbD2P8xhp34Fdn2qB",
  "key27": "5JwEZArfAtjeZibUv4v8doZbnv5nzYLDcVDRc4FwwUCSZKuwMgE4L53mrAYfoW7XcwDgwdv3Ns593Lik2eCrww9u",
  "key28": "5gRyV1XiwrWXuAX518zeKDTJd82EbGiAizYB2Hxx4eB1QY1nx5rDkQNMmZSk98qMXrSFhbqKriwqfXhwnN9TG3ae",
  "key29": "q7tePzGdrr8qy3KsEUQaBUeLfBjE9KmFfGN2Xs13VG23rpzRDgnNm7R3wokSC5kiRicbNJ6496kbckNV8LEKeDj",
  "key30": "53Sw7PAGXtpKrXzSQ1H2UbkGUVGWSSVeYt3w3Rctr1mPPcq4k2mkbzYLFC9Unr3k3R6fQUws8dtq6jst9p6iesKB",
  "key31": "2jx43EtSDwnEugwxkh6AL6pPRxNwkGcRV4xRJ1zdKVHt78ykFCxbXKuxfmSuQosq4fYFdnocmwBBUCh15QTvc76U",
  "key32": "5tCrQBqTfpgoS21MgpWercHd6j85WBtZbaDKfut69hA23fxe2ZkN8LRyxTKtXJivDh3NXz5ViY5m91bGfTedyptm",
  "key33": "5aKRw6V9sVMcKA4JBZFk4Lb6SNgwhb3ZuELy5kuwHvFmzEgyn5fErng9UvkAwF9WyncU9rxBpEoET1q1zgyrvm48",
  "key34": "dtBWrzCKCMDcvEmZbWa5z8BhVaAyWtRFXfmn857AXfLXJPbru5cE5LpscSRPhWFZirfocA3xpFF79Khh3yJLVLT",
  "key35": "578MMzeWYV8Z1xRWziRxQFRCKuF8yhdGfthBbdG7Wr4H5wN8Ubu8zjbEt9Awu3Z6CRAZf1nuiRH1Z7Y9SfABZRtL",
  "key36": "1wtJr4J4w44AXfQaACQakFZk9phBgSmpBvRVMtYiJsirKVuSayoHjimmXGdYmw2A33Yuba7ahp4dFvr94u6qqSA"
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
