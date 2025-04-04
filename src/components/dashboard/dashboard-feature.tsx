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
    "454L8wggGtSGH35gqFPJvrZV6qX4jpFdEpFLPZR6PeRKat1eETsc8AdUJrigzyb6PFvgU4bMCqhvHHgcC2U5tWno"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MW38CiX1KpcaryMoRZFWjdtFsxTLaxL48bVCoytGLkc7Ssyde1KCGmJYwRzuCLVRASUpbFpeEW5tuiqe62CsLTf",
  "key1": "5uhTXQc97Zn8mNXN1kd1Uh8fpMQyBc1rECv8h9RHVQCZUA8SfxqQ5r9vgf83ky6MmxMGK9wgddhcMSrgrpFzMH3F",
  "key2": "43uB2FaTqn9wEjVXH53ezF3SWtgsKKquP35fANbe858oeNECLcfF1GtGDu47JeLbCi7WgJjeM2D81tNL3zEPYWAD",
  "key3": "HsPVw6fpjnHr4xvyGXcAHHwbuThK6xJarfwnfjFeukKZi4tomb4Fqp5zJih9G9MYwhEECzgQv2PNPdieYaxec5H",
  "key4": "2zW4EAYgMWni4m5x4evoWsPav4ju1dXpQ6pjzdRVbZpcqNaVWiF8jFesi4B8FYiUSuHwRtiW8Cmiuyrgim2ezLD1",
  "key5": "3nVUfGcHNoJdcxz339caMoTdoSbCyG6d2jjy68Ap8WhPTgADp9S7UrhAeRrzj6ZccEhxKFqBS8YiiC56P8fbWMK7",
  "key6": "3xLRznfxhyubWDdJQxjMWdXrmSZH1GsV7RV56iMNSJK9sN7ch6r4kMAgxYEUSMXQpqddXBWZy4Nt4892tDc6nhAe",
  "key7": "56aZVVoPkPUoCxtzLvkzyxgQdwWTmHB7eG9dTdtiMBd9BM8jjXA659GR6XQRG8PVSBnh9CL92T79BDseMi1MF8ex",
  "key8": "5bJdFfbp5XW5Dg6oKcQwWiR39ZH774MpzXDZEjd2UYzRkTK3H6URRUjcpofMQ7nqFtJ3mzddbsL1DKiQFvydMgHk",
  "key9": "2SEyhGVH3m8rzAE3bUPw5dkRESJxiCATeUin9GMWwJV2Ha7Hc1KTY4dtRUCrevkUncxZXybpEQtRye4SKYWcyiLZ",
  "key10": "3XyH4ctiBPagRpZp6KH8rX42U9qFrZ18SEB5buFqsCvk5MyqC8W1AUiiABha425L3BCpHac1GkDwsUWBdcatdhzn",
  "key11": "P1jpZHbawdsWx5XRkPXQ2r2RUPpsXvTHKnwhAF4ZDQJSXHFMArgZkYVhs8cbeZDxvy6Fwx8uLtsWVm2Dq7Gj7rF",
  "key12": "2LcCNYTDZr8fXoMmBc79rWXPC3k3jVijWLxmmu9q89ABGoR2VgRDLtYYsbvBQuZhNBwjj9GgLxLmBx7NAhGNnjYE",
  "key13": "28ZXSDijtWdpn2r3hKNNaZxDZdYuHLhSPGZUmDLtMfBR9HFgj3wo4BK6ZKiZW9LgK825q67y67prZZHLfMchzwar",
  "key14": "Vq5D9gFvvb6mXBSeH2RAUWJi4S6HBn7gjmzb978Eaa5Yb9KBfwxy1JGWoW7HJyaN7xNt8YFk6uoCW7sCNm712kj",
  "key15": "2A1hACyX68VtfDPfS7vAt5oX4jAdJn1DZpGUrXFRaY3okqQeRugQhmpfrWuWFTw5gzTB4L4iJSYS1wzhqkrnpJAL",
  "key16": "4XCg2EcDxAY1pHsTACtVRqtWA9by4RuHnyuL1tjsfXGn6tMBpFFLPyN2FQSbspXoAHShKf1c8vBBGcuoBTW15T1e",
  "key17": "5PtSDPjzDTWnJhE4A1XmjwtyhaywLbjNtevizCY2URKPtePpUCub48NZBbtR9hYfqtt2BQeEiMMgWdEVyBJkdJYr",
  "key18": "583eZ2X77sPgaVepG7Qtfr6NrqmvPHHFYMnsqTvdN1kSntDJ7zfiwdtzt9BPRzmZXdN35jdsavbui378CFvM4tj5",
  "key19": "5SKpVEndh5QC6PqRjP55nARDxGkEHq4RPxxEwD1etaprojWVfK5SwNdoGF8yjTjL7wJgmogTRfocvXGHkNZCzN2N",
  "key20": "4G4Q5ypAXgRVHA62CLD1a1zQVxbeWN91qUhyHRhDGyYuYS5jnwDgZT2ZsZ59jB8iUh9BuWaTEcHbrtrHvrWKZ6Am",
  "key21": "4jo7QEacmg7pvwvK68ynvZjWczSg8hGNPz95po9kYUPHnkXer7X9SPAjTyEqonWZZufEQBDLY4qSuiucLawngNCj",
  "key22": "596PWPfBV25nDUjB4HGXdrfSVQjXZtpDQdhja8taUNX86RnP2V1oWvYKkcYY2jD6EQ5bkSWU8FiT8yB2wPLce5cZ",
  "key23": "4KhC4xyeMKYaK3XWZiMWftnmwAhTYQ39edJQXgbSNohEET5dG5e6JUzU9RVDsk6ob5hWo4brQPdHVQFG9uVrHVFm",
  "key24": "2BByRhcTVHGsgSbvXCvxYiwMMc6n8Q5Rdx8WD3UNkKpYn3JQTiZRbsqtynAu4LuCivFR3yWd7JT8vKRtYcNDTpVH",
  "key25": "5k8zo1wTJJaEFYMMf1tJB8JtmnQA9pkUBp2FVTVjeK68EAgSTedqapLkynPgrmHJmSj3NRWy42B1nmF2zwnJSkxL",
  "key26": "41kH2yxAjKWfedcjjT3MzsHVdSGTZ5cw4EvgENEtPgy9Cyc7AYpmWaWmyzZv9uEUidC7cAsBtewhgCX5XSFNtdhQ"
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
