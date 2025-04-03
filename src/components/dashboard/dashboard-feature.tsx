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
    "2pH7CY9JXSL5q6vLSN8TJb3pmDG4tQt9AkJgjBAmY5GQJASsJso7EJKajXQuk9gvDppSt8Gbas7aqtbNt2x8eRaK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34aabGmBRJJhkk1yDzo5NTtprn5JRYkDNhtNtAEsr1PS9ydyHXmXiQxgtaGghnomLBYXaNVX75WXjrZGHTghya5o",
  "key1": "3MfvgWPuEPr5zoKiyrT8zPime8w6xg6USMSjHmS6sbq2np9XZAf9XLyN2XmnRZZyuNjhrkFVBkHsZYQw4WH89C8Q",
  "key2": "2BwsbekY3vg7Wub9yyXD2vd9Q3gqijkgftqqaPKnFfFkBfxXHUD46kY77iERap8dMxtRfZB9Tee9XKFDYqrj53HN",
  "key3": "4rVPfz1MrMzRh2GQxscjChdyeSH6hjsJzVkzRYcE4WrwycLAi34CedxQQttbUY6gGGBK4dC4p99KNtdW51NrWKYH",
  "key4": "2yaWbfePfozzx1XUzMC8qYSV8X1QrCL8SgSDJ8Jqd8LJGNtbdrrXwZvp9HNmMVSrC71g6qTUV277TTMCYrGF7unL",
  "key5": "4Nk1SSba3qYKCP3rvHZ4WHyXUi5Wpk7xm4kLbvRUihyc6kjS5LSdoBKKJAiJoVvQutZEyvBoEA9kuhZnNru3D4E4",
  "key6": "4Yp7djLpnEfAuDQpeAkWu4SdUL66zm5UwyjL2bDNNCBr88YeSv2mh8S7dR5zcdEaHga8robXRoE31DXDArjUbgiW",
  "key7": "vpjGaRdxBVu9PCWhKnk5G1eikaDFv9W95MCsgkDepGub4pBKM7n76yreS12Vi3X7ht4tv1RA7ih1sSuAwoVy5qr",
  "key8": "4kQ5gLo3KgLjxHeVFEGxxDCSyufm9jZiLR7PkUxTbZ9dGbk5fVgkGXM77WQ2RkF6MbtHC9Jt5uX2FiYaBzCD2qFd",
  "key9": "3oxNfEgNtC3nwK5phvYoTDF4kRAx7nyrjgq6oguoU6QV15FMdysDwkwGkAJX6Hz8dLLSsjKSQ6z3uQ78niWbag2P",
  "key10": "vy4u4q9itCgYboUwKM8NNRB9GmPk6yYgkbtYyNdHNhHCY1h27Jhiyr7Nrdx5Z5ofBp45f1e2a9qvV7AnqrpoFct",
  "key11": "66tQqqFx6pp7KwtvGedEJCxVcFnfHgkEAEGhMqshJLVKgX5vhYkotsQmiNEd1GA8NZP5yHrDasW7dFdrn1nxMoZr",
  "key12": "emZQNhbtocsbxPJCumVpYyCzuSNZZNxrutqxAa6BEnKGnMgThmB45wmkJiR6zxpYMewWmVsmKQndQR4DwMKZXUH",
  "key13": "4vDRknoBjHBy9mrjD4JrHVpsMrBqgtpzNyycBBWj13uRWJVPueNP4Ym9zjRk7ncFKbojNiPHxUyTrebBuvXDJB8b",
  "key14": "3npF8oiEWNZcJ6cqfaZHzWJjFviJRWHF9jNrdSxDxBPs1uyZUoAbGz1GjdZvskQ5wLJce13uScYUNmr5sJrLWtoT",
  "key15": "5TLeo26WEgc99jfibUgtEf9VZxXm15e4GhKxzeiSuUewbvT1PyHqU7pCGPUyMMcDc5Vr3mC3hYaaLsTrBhUzqgGE",
  "key16": "5PUbjxJJxgRDeswaQbHHryrKm3eWmopLBtQdNxuqmaYUh45C6JAghPTYFE6GJa2tAoETKdEU9oq2PXRbCRiMDXoE",
  "key17": "5CVsa4ZoggKxWhhDLZrsP8U2UHRnC7mrYuZnBr9nbKFpwE7iBRU4F3QG1Pax93ytWwL669sio6aGu8n2QvhXpKx6",
  "key18": "4sFZQcyyFm7Ksq9K3ADbQ4jbFs2id4nZEDLRR8GuCDVKbuaupNQFgjTGEp6tcakuHABpdJANv8STQyRXUAivSCz8",
  "key19": "4qUTyu2HVpweEw7f4h6WPgHHQ1ph9NzKH7LiP69zytHf8dqcLPcCfVCD34n7iF4TBRo6ozrsdBcRzWqzCyxVQnMP",
  "key20": "T1i5FRCTbUWYsopBRGETGbHCuvrpo5VB18CDYjM9ojRNTdii2PidAjx83gUpQaKJh8J77AjgJp586EWQKs6ndgr",
  "key21": "5rsbezwmbHkRJHpvdtnunZ1yKoQvKXqSupLYxAZHnsSZUS6vPMjvrtnJubK34HT1UpjT4d5NUsKfXg9AM2hEbidT",
  "key22": "624gva53KVmm7pz9KNMUpcuxXZPe4d2Ri81krgointLWdJDbn1cGDLhSJEWhRLa5VgH76T4GzEQ2NrMou6zSQq2G",
  "key23": "5sCXMoUxmnkCJuSzXrmhfBrQ4jfaEpnUfKx383XVfS7APbEAJaAWUcRAF2EV8sQjkS31QNYgUz4jz5t5sftgqJB3",
  "key24": "3QeByWZ2ofNbgqSeY1kJhhMbS4KbQB8imenKmGkpm65Co5EpXYAasTL45BA2dcpiucffe5xR6meJXdxEB2xjhyds",
  "key25": "5xc2xr7AyN38Ggdghn7DpiShZ4F1QYXJJUTLGuL3TDBxA38J5trKZpbq3Av5pzUNde1mzDUnGUJ5gkSz3JsdpeAm",
  "key26": "V7D8VerL7RCHDLbN6GbSQrfDLtRW94QXdXXBAMS3FHyXv2G8ETL15Lj7pDD9ckQGH67MisVwpTv1uGLG2Wwfkr9",
  "key27": "5dCi6LwKm7PdxwxebRegqXwhhn9Pj9soMoho5peVFu9ewbxuMC3M5MrfAZ8ty9vpyKF9RZFHfDWqEGXPrcGtYbM6",
  "key28": "2DAPcvHuQWrBAG8DaGxuRqTGmZMkmjVoTTv7TPcAZ9HLyctof6dyqcWuGnqmm5LLG6pgg6Tpi7Ynbyxd7Ab3zKU5",
  "key29": "pzbpPjqu5jJnMNAaDpucQVqetHQWXFrnxeQDViXZSdAKtuuSp7ABFwR3bimWaN42E4Pu7DT9LR3CxNZqgmUSaKk",
  "key30": "5ESyZ3nHyHg6a9hKagJwGttTPsCXxm52qksAEnfaxNE2G45hSL1FNUfWQFHTafVmGF91ogwhnSwoY6tVxTis1f7x",
  "key31": "4i2EFL5M2VpwL8XTKJqvgkSphqP2suQLK6i5KrGdrnbpSyRa9Hhdak2BbvabGHRwL5WDK8JtZugqmPnVohck5Rog",
  "key32": "2V8cDiVpWUQJPeqoicvjRDWUe8M4whKBStDNwDPpH9ZttitxoHREgNEdVUWYqDTE6ZkfsnpjjLxXauHAf4uVCP8S",
  "key33": "4zQzdM19u7qm5jojWY7U51zqsWZBUjzWfyKbA7sESYCEsRC5CJaQpZ1zwUua8diNQWV4s4P65F2hGy1SDX7VZGAr",
  "key34": "4WZHiaG6wdPouxn57CGfNAmnckvbzojRyH88vLQqcdJyZNu17b4Md6JYNvZtXYeravuRPFAUKX6uqW4GqKyWJzPR",
  "key35": "4md1eUZ7iEbbgxc8E2ihMhg3PBX3BtCGDjC8HoaQpS7gzJBXXd2XhQ9aqHN4wg6F2tLFgiihYGUgpK4qQss61kxu",
  "key36": "3f8QKMWKdXo8X3u23z6enCtmrSLdWSJUhhMhKmC2ztGpBg6xofLF66sHchg32pV7A4C7ZByZK9ihsEAW13x7WcjC",
  "key37": "QtZWj8FbAPETxTSkRp2NU4JMBc1dwRFDERif5b9UXaKGSeCX1v9HNKLy5PE4vy2zsqBiaGNRUfjRGunc8gpTZeW",
  "key38": "4BPFFq17XwL4eVzMfZxp4b7VvCsbsMds97eyTBxDHJE2Pgq7pE6vxKjyWZh964wyJCRuGAj95uX9BNZznGkQd23x",
  "key39": "3YD5SsUK3D4n51GBkV1Q9W72ksCbJe1vBxNTVTYMQ84noFw478haKvr9Q94qpmu2nvyY5uskpyRZ64QEusL4ZA6w",
  "key40": "KmxN5FzjwTFdvNKZRezrvYuhrXNvGyqUFfRe7gdzf1ssBPZ2g35rW19Yd2s63tN8JX5HoHgwy1t5ZULxY9mutot",
  "key41": "3NT9G3fHoGNgDcfB855fwkFXSEN8XsEuoHGwbCBugbtd5fZ6Gfu5rCFxksjyoVvF1MMH4G72JVf9s9xLF76BYPCq",
  "key42": "5WMSEAbJbFVZtyqGGkoQRyd1VpWQ1KS2nvPo6aS2NiawtPontfZ7UFGRpnJ5cTX9j5Y9JJBWBUXqn82QyM7NDDnM",
  "key43": "2FLMqjRw43oUNrHgPLk1YVaQ23PA4LYTAGBpgiyo5z8jTN6wbyVVsxmQZePw7RHeTkdJjujEbJPR45ZEXVPniogy"
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
