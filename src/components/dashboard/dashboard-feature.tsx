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
    "4F2HkLpUDtcANkVFhZaM1fheffrHcJdREfTR7p8H1ziujmUZRQk6pM8SaSdM7HtUgio9R51Z1yqyBPDS1v3B7g48"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GfofJyn8qRtD6Uow1wbwJbrjSsPqxKj67mGkCMVbyKZZygiWtw38KQXZpYzE3UF4g9QgV3u7Jv7EqLf1SuhqD96",
  "key1": "4JJtcz1J9v8nEtBiW8LMZa6eqzi36puuzdDJss3stGQnipG6GuzVRHefx6mR7QoYKQg1YAPjJvMT4LmtVP5chbJi",
  "key2": "BwZq8qjTDLtTV8wF9zPXKQ9pdWJwYjTP3VATJDDbJAmgXsGpGjP6bPY6sniFHUBqM2YPcX4dysvt8MwL57kE8ej",
  "key3": "4BTi6S9yXJhpKm5nmTWc9QnADNzHR9GgzMJLMAdmn7EEKJAeuXV9EKiCdpPdzGPjdzj91CPTajfaVfJ1wm7ua1wV",
  "key4": "29FnbyfC6w41gEjppbi9TbmJHzPkwcgdhC6ZuiYLeKwSCH1tAZPQPbqjHMZ3sVDfg4mo3d9YTWXX8xgcXGXqonuj",
  "key5": "5nG1yPaWtwSv1UTaHpg5G4gevy6q9rnLDxnb8e2qFHgCsPM8PKTWedBatuZmqC2fNZYzdQJ2uBURLXemht3HuVHG",
  "key6": "kP1NdjrTiS6ggrRRfcQk4mtHuJrukQbdA5asRPpHn9s4zEty5fScSLb4pp9L9GW5HS7XUziAQRXmdXN9U3gvqhe",
  "key7": "4iZxAtJAWSFsTwGvkgcV7oCXD3YatDfUdMTk8frDBKeTmwcJM44aGZizsDVaFvvEKvSpL6fh4y3UKcEtVEmeC2kR",
  "key8": "4juA3547YNTDC6mvjskU3g9pmzKbqwZ5FjY7GqAV8WsH9CLPnAckY7jmN7gGGhqS2hKJCfwZKrFPCqmNsBq67BKo",
  "key9": "3ATZrA61MwnQk6xSczMuCkYPbiwAYi7fJhCyEZx4XyacR3SWFujbDDdcFVM1o5azdGoVsvap5UpsVn5d7LCxGWqM",
  "key10": "28nz2wq9RczSjN1DX9swYaA5HaBqHGFEHhvZSDmqm6qqV8NwrnVMPvzzriNLg4iWGyiMTqFFP3SsVrxiusRM5B2D",
  "key11": "4QGzpLKy5WvmiKpUBLPYbHv9dJqefHdqvsK2dznUVtxzvVPeQn2Vnatp6yLvwJGb298oZSYpkZDynWk7Jwt642xb",
  "key12": "2nsjWv4ptCdU6hH5nLWbnLs5M8d1n5Vz9vCQhpTpjR8nXNKHaQtX6G3LJZKbU5Bqy2kK2KTKnVT5QqPKbgvWHXRx",
  "key13": "2cVqoxKv2tEwW8nECjsTyZ3Ao7CuZcMpEqYU18S1nobLKUDLgaJvWbVGWo2mYmosZHidGWyZGPUDuXdfRrp6XJ1W",
  "key14": "xXmfFbLAiGqWuboZohwTx4hYuT5KwWTQ7GhTVXoR3BNpo4Q5vRFEQ1R9SYTQVJqekBLX2ceRd2gA7GaLv26nHry",
  "key15": "2cWECdxQ2sAD1f3zwY4nbWz3wps1dEZTwV3KRo8aF2CABytDt2nzzH3umYQ1D4RYJAy28oPbKbYqwMxGnoPNwg9F",
  "key16": "1eEAH9XUw367s7aAem1Bh1Bpx29TCJoCv6MuBn1p3zmVggMsRckzMPUz7cC5L1bEze8dF1DDGV2tp42NvswagSR",
  "key17": "UNYcbNytHuQjLpZJrts8XPTMLc8uBFgUYppRKveAZHevZ5MC45Ha4Ur237mFLPGpoevGpVmkh4Ufcsyc6hRBgQV",
  "key18": "44BNRe1gekmmqwrs3XHuwSG47FV9o8JuitqNrA64UEzeqegRNhSAUGEH428xyvzB5XL9sRU41uDvR9sHnSpncNta",
  "key19": "3rYRm8WU79W7drwNSYbjW57nysMrHAETr2LQKDWeRgFsoeTDzHqnKUVu5SjmWpqL987LBwwFaSMYA1f77DnGw4mU",
  "key20": "34KVJQamz1eQzvwMpbDR3TrfvcE8gbAxrW683M1bk4zg8NP2qbtNDVyuUaSCaLi9pKiM35tEHVHfWUcRc67GPzvU",
  "key21": "5daGhM48XBeFjCLXrBAbWSzUooXYQcWQv7HdidHfhJE3A256GCdEuPL2p4VCrd47LLPpmkTQW8GnDmNUoMntawKo",
  "key22": "5Rtu64gwmWskW9if9M6EqJQ8rZktgWM99BfqVYHY4WXZYk7qF4dXNntB3DaESwTg9hb8C68oRoo1PQPB9Mqg4fcL",
  "key23": "27mfGapKXAqqzxt4urrhMRbCwrUaimpuxNtCUCTEveDfY5Sp9uLQhxBGLcAUJ6vV7JWFdMcjQUPsqJptLbanK8zN",
  "key24": "2NbJEu29w7i4ntcQPamuN9ee9FNb6q1nFL1CqGvm6fM3of21LGYz3YpP6JoP3H2MBohHHPcR8vRS3WqFspzTR7Ae",
  "key25": "iV3pHrHYxWfRftdAiA2KnULdQjbK6EEfkWrygRQzYR1ZNdpdHPGYa4ENgLhxa3D7iUHR1CVSzexMeVuAtdqmD9T",
  "key26": "2qN4AHmXG1J9WzzLKP1nwH8r4gga5LuSnQwkk5T5u8vKXzp58vX2fxFLriSUEiFdEPStGZxRmX3kpU6BLbzincKM",
  "key27": "3qHFYgcvjE1VB4GL9sFunrCkvxXnzvke1jqehSN2aemwKmTUU4aGCrw22N2RQJf6xAhyttFYc6Lysd2ZHfUdXkXQ",
  "key28": "5LobHLrXabgvrJSXv6spEjLXtZN1DjPB2oFdXrHLBj28bX8QUdNNpCgeypekkx7bWSm3xKgiQRhprDdXoQVpB6FM",
  "key29": "3anWazgTvyxwHmE9VNH2hE1N4x5CmdC4BAwvYCGssehojgWMPVyyd8j2exgE6oY8vA4Qh2ZrM8FLSSj48nbiXttK",
  "key30": "5vMpJBwPLmSbfRMDNbMf5FauPXVoWPJ27sS7b61Y52hFwhkf4NUUFMgXYjw3NLKxN2S8PwMDv5x78QS6fTHhsmTc"
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
