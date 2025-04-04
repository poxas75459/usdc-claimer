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
    "5MSYThLVWkWGZRuobCe7PXaUR9nboDZ6zJXzucYxXzpqrHjVx8gyAVsTvaqHsuixC2kapHXkAc5ZeVhRwxg8G2vD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QNz91gRNUW45Ly62DdYDNhZ9reD4xjW33jsQoRDXnyYAm2KAgcT2C5w6bre7ZwKG98xZBUfx8PkYgGNwe7rCyUf",
  "key1": "3VqV7j7Q6auwii4LrfJzB6R2Vzi8Nd5aBo2twQV75XTMsxon3AxreSPc85eCXQYEuTSjx9BprNALvj9wX3NrfH6A",
  "key2": "3YRDfy8ijrdVeZwU72d3eDzcTNo2Tn9gSNDEe1yLHaWL3rSkxx1mDNgfSPZvy1RAi3DMZW1pJCsrRci6Yqbp3gL2",
  "key3": "5MiYXLBMUUBDvyQfT2jFcQV9csFfSKd8MWumg12EgJvZEs6gQFmqEtvnpYpuVbufdR3HLfX7FnBYpXsP6XYtbkwR",
  "key4": "2GM8xesRnu4qu4teLigM79B94fRygLJUeoMwEGmmTZ1WsNo8MPeUTWC4pXN8ycjMtcjG3VFP6BgfRepKGYy8Y4NA",
  "key5": "XZRE9xaLLzp5hTqsJQN8Gx8LmVmfg38jFhLzqo5ySJQqskAYUHJF4crWyoBbgbNbbsNV7xnVneMLRWDo74ycTph",
  "key6": "2B2gS4sJ9VBoW6Cai6GyVTi8xbzsysdeVfdrYMVRPcmogieVfMUEUSfb9osPb7ZHUuxptthcVGzRZ8sTmTZcv3ZH",
  "key7": "2nEjh28ffxgfQPhzEzftV9gDL7ua52NERpa5fYGT5Y7JeH61Fa3xqV541AfihASsQ17f1LWnnY7ZyqNNgF13q3EN",
  "key8": "2udnxnd6X4zom2xrb3K3YZC7DJMcSHSZtzGK6wvg2CPxupiLQBF2tek3KJJDGwf917GfuAHNQRXKRG4TEa6T1Hur",
  "key9": "3rTmxKJ9ig8DRrRVmALEu2tmxKc1tdSu6CyKu4XEZpzWyJBEY7tAwgmvt4JrQsPevbKt3KJybwnebRXUNRgpRzPT",
  "key10": "2aVe2wG425W6QfFVfNXRfmGyF8uopdTesAJRGzJbCNXd96bjAohML6RRTptohh4AHcax3Ur4zoVV8nUV9P6CBQwv",
  "key11": "54ZJSorndnS1SwEgYtRtPpiR7sUmk5BBorzfbcZEAgUeWGbgDAfDktVhhjXqurZaJbesb6BEV1ZeUvESmXLed48p",
  "key12": "5kA4DJM1F93NQejZWFwre1VZG4hQymQWSCjjdpexvLPAPDXADc9MdjMcrL6fy8fQ8Mj1fH84D9xL2uXqgyecgRdc",
  "key13": "5eiDM8pD2eUgjdYy9qXjvU1ppep9JZY4EFFNQuUswkf8vs6ULNkAUwTr61Er5WnLeJfrnJN3VQSXMeTyREt4QHVE",
  "key14": "bWG5Nd1f8f4NkSAyKoMjtyzK4xPZQpGc7kFMM1aR3cSzovgEPndeAZykRtRs2A3oyt7CgAgDh2b2h4pVWWrdCkv",
  "key15": "2XVgdse8cvpH9Sf2NmchXmz8XJqdt5LEgdeHsQhFdviXwxpJ68FbYK3PtHbVXPsumQmmDsUTzKNKjtG5xprFbeXi",
  "key16": "LyPpBEU8vdunWq4hLk1aHTGXpAGXnEcMEBw6BBvRQJjxdxYhtkpFSQvVwvxkVGEofkMLjrJybXtmamNWjkDNhjV",
  "key17": "52biscSrLjShWrgxBBQsYUaxZynvjKBNVHwNgnUB1fRBHvuA46FDhk3TndzQwhjFxjLMGTEjapaRwuQAB2Rg7cP3",
  "key18": "34QKquxVDkS5c2iGXAx8MnX22YScHwoV5MtFxsySfwt9zF8SUP3pqXN5nUCL5po5QPfUM1G7PruNPwUFtY2DrBdU",
  "key19": "3gTRoSeLVPvXNN7qmWRwNnNpJ6K9DWuMHmjzwUQWX5P9fSvFy5hFr1t6k1BoAubvVrwWK4NNBPqnrxVGjivxFuhp",
  "key20": "Kv8XfpahP9tPmTXwAF43x1vcxK9X8eRdcqwABDhdx7MNffRARhbNfjmQXVbiLonsCRHUNGvmiTZiVxP98qQrxP5",
  "key21": "MUpH7SHy5jNkXtrX4Wf787NR79sAXkNgEp9QJvxY12siuNjY6hmJRuDH7idD4KHuhtQWrqRXcdejs7w63T7QP8o",
  "key22": "64WVcMspm7z4QX1Jq9qcgKbNHFg9vFA9FrAixPzrYGBaokDkY5jWSpeRT3tYBTge6jEEzXvEdWD34Kt4DLai5c4B",
  "key23": "3j8vK5Y43hyzFBnrdjoD8ZaXCXCNMQgaHJjp4pgENP7XYspvLxZSixXQceXyvv2k3TLkKxbJJt9AeSVhVpFUwVup",
  "key24": "3etRoo2NJBs2KuAxZmybwDNzHrPFTEamv4UsvW5H4Js3UkcGwrJnbLQ4Me592iSD8Cn4USuTZQjW77z1Z8M5Rjyc",
  "key25": "4QS1gcdR7F14PyDioiKoRDWk2pnmE1avdyP83HwyqBCgHwJJERJYe2epbXytRPS8e2SGWDx4g2agANwtZwFxPNhN",
  "key26": "2kWZkrH3PPeqmYdHsZJKwKY6R74tDGjvXi6FD8Y1MBqDRfg9t2pK9xn7VLjkDtmxCXttjw4QecoBoZSqEUFqXdtz",
  "key27": "5qJaCDQzDPJygu1iSa7aKcqdzHqhiri1Gkfw9GuxvNG48n5vamE6xdUnXE32HDtya7tz2s4p4goEF66kJp4iQ6MP",
  "key28": "5JKiAxUUweB2JB8xxoWdZ7Eq89DMY2Zd4p86vuzVK6ppujGpNmyuRS4P6cnKEXhrSkVP62NJJwdndv1m8EPsUtmW",
  "key29": "3hv15RtiZMTyo847LFTbevLtXTKmcGFyK76Tc18gqKHjHV1bqBxK1GZREJcSUw3ZhPMoPi48Gavu3BbzJNzVyWgF",
  "key30": "5FvK8rBE8GLrimxAZ29tA3WN63cxQQ9LUiPE8ehjxkPeQtaASBzprBsb8GKQWdtLEtCaWAFh3CZqPzyWzb6JBxHw",
  "key31": "5D2nBYeW39pciyN37TnbwnbH8em12ApwaLjoPS9mXuXGRm8ZrqmjuKcAjB6V35wQhj5Q7H8vVexGbPtZQ2CbU6UH",
  "key32": "3BRwRQ9svUGXF9aftcqD6zpsJJvY4VeCzx5mJP4aajgYViApfNLfDhSkskPBGMFzCH82WXpyA8BxPyfH83hmgcRQ",
  "key33": "24mKJn42nYM3cxgrWLhXMQYZ3cjNGvxNi13N5qo5ii4buJZUkXEVerb9irxavRR29fMrm6D1fTc2c5PvMrmncAsW",
  "key34": "4xcpgFwZQJeKuQHhYoXgh9a29icRpnZNjaj4AQ5zUxQuQMXnE1Cwhao6SwM7cJoSpB6882CRQVUagJz4M42bQgt4",
  "key35": "3qewZprcBLm35cgNL9m2F7iKk3mGoWvFhMZgGjzbgfe6eAUkgZwL3yFLTe4Z513ECairbY3TpRGUt37B6SYfKdXq"
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
