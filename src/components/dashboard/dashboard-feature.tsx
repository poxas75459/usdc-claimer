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
    "5mjHa9UHdwuNbaidnyJL65GAZMt6MuqpyPZeem6cToNhyiFuSr5iMhkFhEhJb9coWCPMD5qfAFjzKTKw6Qi3hqe2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Rm8FQn3tRefFWzdWr3vhUm3SbmuLt22TpxeLE7zni3L1VsnwaP2eTraBYZxdFMDPLru2ivgottLYqnBDoER8ptj",
  "key1": "5313vLC6vcqDyq1copJegBEqVkUedyrRyYAYBzRd1F2ozqMUeWXHAmoQxuorvdriJyRLenEfTjQ4BowT3JgMjEJW",
  "key2": "8CVabGDoAgZcNS3YgfFHZwAXheNT128QL9Cr44w7J2MXsDt6362NLrWwSTeUSd9E5BZBcf2AnSGds9oK19R1sb6",
  "key3": "4Qo5fiSBSdXMrhL5uV9UVqd7aocHiorQFh3UxZf8fLNFFeyc7J2p6rS66p7r6VSnEbbxpr898TmxAcLA8Y1qo5QB",
  "key4": "4WqFyLr5DVfj7rf7HWK9p4MCNNJmU4ZgtCgPrLiKRQhdcE5ArejZENALHKTmt5vBoknHVDd5ym9rU1H52QM7BaZj",
  "key5": "41VgmwYeRwS4gf6ELPQRc5afpBxBhjBRJedfbUDvFVpSHPDtrdPbwUVnhqr4UdsS3ehWhb64jV6MkmvfHGhHSdnZ",
  "key6": "3jERbFHKumhECzjR3NXFbBiCvRyJ287YoWmnrshrpk84NfJkq4tA3AG8F6j58ikB5AfwVh2VGemKXM55NsfpvW4y",
  "key7": "2Y4Du7DLnGaeScLCVHRkzpT8fntVKtfHob28fnUfiuXZ39TvvsjFs7jqkcR5EqsycYsQoa1RAGWnp7JZ8F7Be6KH",
  "key8": "3dLjRdJcq3qBsVQt4VmtqtrvGa7JnXybTroWURSkZpfzhTQnvRDi2pfQCXxGodUb62Ghx8yrpr94j2iVLCxwHp4Z",
  "key9": "6Lr2pF2ngzVqsjw2qf1eyxPnarQUH1FwGgQvTXGf2tozcChG9q5ZK1BWuveaT8rGuWN6NYkETRavopZMGatdNLU",
  "key10": "2wdGFvUhznDHLnXcvmaXwbur7Q2uxkqhHNvw2DpWPu3AZ8P3SRZALkURSJrDr7MW592EdVVwzEEtASNhE4ZeBizX",
  "key11": "3m1QJtrSmuF9D8oNJ7SR5DmDyQQhXmY4zU8tKF3NkjT6Ny9i7S5D755f6LrJnooTaExVHSs2hdHBsSohyTZ3vpeb",
  "key12": "JdPd3aXHJoD6UphnDoJ7WVfwcabedpqHPEQKekDHuk8FA34YuCfxbEiVSZveynw7ejxW7Sk98crjPceKJPBBfzi",
  "key13": "5hCCMyey9unA3APyDJjm9tH9X62NMoA3XrYQgWbeWLzjy29yXyxepPiunLkXLGpHe5nSMNhPnfSzi12XtGa4QSB9",
  "key14": "5288HUtYVvrd9FShXjVcS3ne31x2EtuCmMfHrniicLNHGUeYWBzR5HzQ47NQiPcNbn6b7xgwVPJsQiVtQ6fArYF3",
  "key15": "5y96JBDegZtaPT5yiaKsLa4cjrz9XMEWS7SxDisp9EVCuUPSUN6Q7tXSN68zNg4L9CGK5JUuX9arFE7WuhZbWxCN",
  "key16": "3U1d8qiaxP79whevFbzTrmot9VaZMdV7vXLzq7h8i67SAXDKkELre7muobuhwAneUndUrvhqrMamMoxxbfycVwpJ",
  "key17": "4MoFTvR1HAtdjqVXnDEnhrSf2ojm4wRADwj4rmWrSovXhyDvmcg4Yz9nsQWpSsBaWgNgj3KRuyHSbknUhyAV2Mym",
  "key18": "5KWouGWWWDfDqbMWy8K7GyTr6saCV6XGM7ZKrC7kW5ymWHkt9vPr3yM9TAdprxTjEgqkBbuQsnA6FgVNSrp4Eb3C",
  "key19": "3jnr2P6enJx8UvtdLyiSnJdL5MWcEnYP9poArSQV62tfuYzjrPc911aESSVU7knGCao8QZYsDaG5pifXKKHs9JXi",
  "key20": "ZFBHAmBAoKW5kvfkT7DXHVurcu9Ko2gXwh7WTAFwQ5eWjvNdDh3SV8PMe75LPQrRkqgUckoY1YyaEj9FJDQYXbB",
  "key21": "61o8jiSaJoSemA4jNBn1ss5XnE4jYAMVvPGHWDG1kZ4ToKRwxbxLX8jeEV4RLX73mohNcsyJaCHgQyZ5jdpPSvJo",
  "key22": "3cSWuSyVWak1xbyJhGKyKErCs3f3ZUk1ZGhFgYW2GwiFRRQX9ip23uZvVV6My3jtLYZD8n9uSTNxfWXMS76zsAE5",
  "key23": "3aKnJA2CxcPJj67fEreqMtvpNLQSnwBnzbMrNnY6Mq8MJEdkzW7fK9gYJA9UHvTgcGs9WUZjpNrZdh5AaJoHtDVy",
  "key24": "J2FQFf96nstkoRxzVBSpo9qny9Wq8S7sV39637wYL8azcTfPC5GdacXxvLnLuVvjhC8UD5ZZGGBK9wD2gVFTfH8",
  "key25": "4qjtZ1qzmsANxjtxDJeemyQz4XBqetarbtMx3e86vZCPCvFYC1ryiMGXwa3Ww53rP7Y6cERW6bYMN4mExEiP4MB",
  "key26": "5Sr8fR3c1ws3wyeFhSycfLsQL8pypD6gSBGsGiX5hkNA8AsyQDvW3CjQNyjKUMsYGyuBJxt5RaoGa62FCnPVXbxh",
  "key27": "482BsDyHUJ936fK5bRAbtgeqCHz4H6gHomLV1sJasiciZfkXwzmwxD7tvZwRc1ej3iJBAy4EtVFM4EksHKkNZSqs",
  "key28": "46vnUrQua9hcRtNjENWtcZ89a8apuWp1qAYJQ2EYDnazLzq9qkdmHUUNYytCg1K7wu8GJRBRhdZadp7UEnhuwToq",
  "key29": "mafQYFDgwt8vqJDpCCYW96tWEL1uXjEsindR3Bwizv9cPd9EGX7qdVPFoiBad7Ntbjbqo2KxoeWGUXART56wt4b",
  "key30": "5FjT2LMLVBMxHi179SFew75S7gf3mRmBhBRvGNTeBFCXfJXVAxZW9KYimcYsdntBmcHiwgR9oV3RJAsQ72st2iX9",
  "key31": "3LocY7zEgJE4uUMKA6dNu8LiU8UZwYV2KoQi3bczz7RzPEJ4ECvkddTTFzUwZ43KS8rdmKEnYwNnt4cURZpHi4i2",
  "key32": "2u947oLoCe4UsPaimJAmuMhMgac8FdoCA5LDo5LqHQ1vhYnqiPkJUAAMzTTGPK7P5oEfpfEBedWP69emgpyQL6on",
  "key33": "3b2cQrp1et5iNcyBgAjGP6PMxueab9QSy7Do78qgm5XWQ3tNxriJfKPehfojkid2CJrjFkSg3WKUXevkNR9RXx6h"
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
