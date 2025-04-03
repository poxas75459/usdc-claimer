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
    "5uLxQVYmTPb9HMWDjFinZyinZDEZuCo5ZYiuKbC3MfUsChSVgyMNHVZatkfhMCPz2UjU6HWbfY8FsXV2CSZzBJ2M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EC4PuP1a5Ychyomjnfp5rC1Szvb1MKiFDcDQjxZnNwTXK84LPnhEwHbg86af2jLjx7je34o2xqqL6jGk9ZG7DAS",
  "key1": "5YJrp6bNgDG7p92o2PLdg9yBDUDsbeJ8eeFLFtoGgzXeVQZ4Li2qnXszrwNmNExQfHcaMbYdT4UgtVAeKQXCSjMN",
  "key2": "35DLubaMGD9xA2PHKYmijHCwbukffCht1LvQWZdB4o4CG5sqkqqghBqxgxYs24ypfYEkHtcLDEJYyR1PUWvZDeU5",
  "key3": "4tyUskn6Rt4djsnXiX4UwiKtWBUdAm7UdpMPxckMPjYjw72wj66hbdDZqjL2FhUiJ8qPx8JB7WHj8BgfCR3Cd2Ua",
  "key4": "3ZBLKDzzmRT3SEbds8fv6KkMByem3x815qB97bqKshV7hVejqAdz2ELKPNzcrib8q5G4wAiNcQ3n9VBXaWJZdpaL",
  "key5": "5eL5SAUj6SJwuxf28bKKXxCA7nTfPGvqmvSkjYNDPBxWo1jsgRkEyfg5pF4652sTeA3yLaL4YGhUu5BmnmS76Dt",
  "key6": "3jMVcKo5mv9Et4CvT4BUXJuZXjLyBSa5PUtFSo1fjvSinQ4HKa7rZjrEVux938pgiecRdiMAfUEN3hVyCiiEGvhk",
  "key7": "2sUHGtxPVncUtQK5wxzNXmz32foz5dfoB9T5YhFh7TkiXYoF9Shnicu6Qgd16Hstva9rVSLXyh2pzQFHv5ipKY3H",
  "key8": "SNgMkKAb7i5U3n9ehD9tzERknXcftTZeQjzpkTh7PKPdaj8ue9sUV7iy9dZ7YVzPZ9Kcc9MLJm1jukGfc3HyoS9",
  "key9": "2SyFCGyGfmM5JENZehtRxPgQ1xp9EdDAfPcMWQ1BbZ1TqgXKLMVieUoVc3wf7pDGUfb39k8yWBy7ErdxdKfdrJ2c",
  "key10": "365BNUSmH83EMfdP5c3vix2dEa7d6KdAcP3nJgioeE4SiD6sUcCvPBXtLZGCTDBLg7T2gwR4VoTvL1KD3JiNpuF6",
  "key11": "2a73ogAkQVB5YimDksLMqxD33au4s4j7jjoRZ6q5mErpaVZMb9JvbmhXb9UjSKKLVEkDhtshYL3c8ogcw3qaRZ6Q",
  "key12": "5UmQ5SrrVCHXkH2Uqn1V8XCdJ4hfjQ4g3rPtSeJWYGjsdeLP5g5QKuFBW1PuBqJAa71jQgcUjTT1s3WW2qpEsKdF",
  "key13": "3Wy3cyU5AAmPvAGS3KZxznpTc5oGBhnekvNsvVnY7cK5xxGiB8rtdFHVTJNdb5xRs2s2PqMBB7Fh5f1Ay5rrhWiv",
  "key14": "2eNPQtPbbuxKrLCcytVwMNUGvRs8yHE64dUQepT92gMdDCnjfi1KETu6L2FGKt4b1UPp5AHTwHNtfciu8H1qywah",
  "key15": "5kYDJdqJxaGMNBCuYtXBNU7g6rPaVpXEmRTSeW1MVxdNpN5ctWN4NnSdgfQZMYwYuoxaXbsqoLLfeugEp732Me6p",
  "key16": "4URfsXJzLikxBj7nKtVe86SvxgtT9trptZ4d6L9DotbSpuWtNjVNDK4KVRBTMN6U9tJN8pSf4S2ne98XrvfTQVQ7",
  "key17": "4SdcwZc5Q3aSD2mVzhraiZ6KrWDg69AjWgpvNNAKzrSHZ2c27BrmLFTZQdPb7GwBWRXcS3BDnExsbcPBKPMnnRu6",
  "key18": "56tvVajotNMDsDb8uRkvNfPxzXcMz4dFjJ27ZVfEh329QN8rsvZdsbfuL5e7YNFoWXrveQ4ww9k2etWGhraG1jhp",
  "key19": "3BUnG7N9YCypoTYF9HxFqA8oHdwtBRhWwmwtB6hXsgL1bscUDCoYSDy7iT1T1PQhjPKLb6N51Tbo6cGYsPPNkDap",
  "key20": "2V6jhhmhw9iWpsxob1xuL5dgp1FGKYw2sXxWtwPNrsFcAvLVHVfzWMjXzXnDWYzNH7R9xWPuDfKL5WuVizfz12gg",
  "key21": "4N8BewhsFEzi2HpisxJERxTXevaC4WesNkCmdbzfHmZWn8bMJekxgnqYmyZmkaQcz21hesz4kR2DanTrHUTuu6o2",
  "key22": "2WFT7bzE9XBPVZcdoJMshsX7f2xBjD7FfRQ3YNXsuJt2nM3yqneQnh1imoyZaLmQViueGAHsUGk41bQgZUMqeraU",
  "key23": "YXXNGbP9FPc8s4qBc8DtCyDJLKQUW7uxFLL935761XxaraaSienRaXmRmxTVfjBqesdJKuoWmd8SfGQ3e6MNpcB",
  "key24": "5SfTcQ4yjZ3i5LkKrcwGTo5KArBptab14HzRddLonKTAYXbWqrwTzkMUnsx9JoTBasT5pCud6Q41v94hMzgooR9X",
  "key25": "5p8s6yaaWmUiaFNpkte5y2mE6npY1Ag7KTLqW7utJR1TLwQwKyvwGo86pmEb5CiN2izZTKoVTF5EhXpoKgyPZUMG",
  "key26": "5zeVh5NML1CHTvRYqE7GdgbvWMs39yQ7fvkzghAh2H4NeyqDbtHJXZSnCt7WJEBhZvH6mpJkhUNMwpiNEuK9NNEy",
  "key27": "4AJzgp6H1G3pSiuDzCxo9e8C9WxdAPkc6A8zZeDfZo3o9DkzphhM2mqhv9foH1ZCBZDZSCaJDqTPMLdh2FtyPoGi",
  "key28": "2Ab1Giiazb95xgrkrs9asMmFvZQ6fWUFKBFpGKBcnMwrNTEB4aWDtKnLGFYhYaSQ3jaxkXKXSiYCicueBrQijaeK",
  "key29": "2abPxybNUXeSq5cX8igZtncVxBuauWumrYgDjN4GfQ9mEmt8PKsitQjG6JxLPUmC6tcV6qi97TdPRHHktfhAtT92",
  "key30": "38mjNBNwwzuZ5d14sdfTaX7pXznhWMNG4spUcp87c3o4c5y1bxJ4csAMCqC2NqFj5A8ocWVWrpmwZn6zpJWfZsYp",
  "key31": "2xEdyPHPzNrBL4SnbpzyE7aMwkafrL3y9XtGR17ME5S4ZTxq9gp4Qf1qa6BaXQRk1yovXCxKyh3VzcVUTqdmcMkS",
  "key32": "4ZE2RrSH3iqJCbsCav8oNcRAdKWejCpZJ6tvuCdhkHJCGfs4cDx8vRqV4zqmLGPFW9TasG6Qwj3cUgTAfT8Uc2HB"
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
