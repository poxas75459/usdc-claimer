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
    "2CEfTsFjt3B1HRwr9Hoh79GvDWwx65AdU63VBHDFSPYoRNQhQzEzySinC2U5RcmP2dwSwGHc5n6YemiGd2wTaguL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gjpuhpP7WeT4Gb2sgMJtjrohNCASJaEf251VkDPxPZS4dkagCaDfSePXscQifrjWBkVuFhKPLejsvgiPhEVBbMH",
  "key1": "4e5cJk3z841ZcKn5Yw4aC1PaQhPufsYgr5XgarCESXAh6siujMLM2zBaT9aswE1BTpyrniu1se8qVhE7uJqGaNum",
  "key2": "4LDxKkUSZZ9dG9bazFHFwz6Tf3zL3o1RNpLwKd4JCr4NYioaPqVuJNbGAiBPhfhH3D1eyLwVvzRBFeWuRqVikYfC",
  "key3": "5qksB7GWsETnVPfTWNNFzJxvPLQnjPfa6NgxrDfm3KMHmipFFvTWuNuWFCoEWyVrLGfwUXbNtXYNh2bNAaKwJZGy",
  "key4": "4BHswDcrU1agRAPvpskBmufKiksiPnWdDJV43d898kQY1n4Tr8K5sWRMT95K2vhdxi2d78T7h72o2xTiyQ5Ru196",
  "key5": "4Z2ULfCQyPxNf4Vg3PErFvciFn4SNEqPnWs4JELXVdbtDtUyrEzjBKAWZ2jyq289vneb9TkwMAgFJWHfmf4axwLt",
  "key6": "63T8wWkNZgvWfSfTZJ6Lth9RinJZuAJLFps2gtHs4CkPfTcu4GLvs3VE8GeY9aXvH7J1eR5HFCkwNKqxiQY2eGkP",
  "key7": "3NaQuCAFGvd2Rju8GM2Wdg2MkjeLqRnd7uwUtTermgJztyN131N2bvVCsN1DB2HcGfTQH2qDkr9WQ6iJyEH56qPU",
  "key8": "4JTisCttZzkZRWViRT4ZkByTmezVjtc7BU2vt9PLYyskHyWkPwnuHd8Cv7J4nTsP7pxv9YZgKKUmWDpBtDJbYg7Z",
  "key9": "2D9tYZCGks28niECc9Ci9khziTjtU8NcgJphG2e3EYPDszGGy5d7837YsY2djUZSsfG76idv79dtyD5S5ZnZPsCT",
  "key10": "2PQadv4EaPTaGUzM7PGb8GJ8ENZRnNr8epujLTDc84ccHAA9f3cHGFdnhJfuwfzpheKaK5YEi5mfBrGYYeTR9YMz",
  "key11": "2cLEPbgYz9sHrjQpCoTVvy7dX2deTsLJnVDGkciuJ27jSVNqhmZvr52dQVjShzn9C27St1EGR6Ddrsmunkgu8cvq",
  "key12": "2co5fvfzKVtRz1Rf5oSY8HSprTuztHfn1SaPLKqFr5iAwXB42ibHs5nLnvEd8nrXuWUQ4hBjLfiZrUcpzopyMgJX",
  "key13": "5VuEfESKqiXCo7rfRerhmDQC2nHGGjYWqpngp8JyXopFD3zHY69Vr4dHnfhGkLL8gpDf8P86Z1uWPWebiKvJVqq8",
  "key14": "5L7keJQdWVAt2FpP61cvN4HusZp81JAAomCUn4t8bCgGudEX3uG2fXmjf8KJo68ZNC6t6A77QoFeY8bYoLzpZLfF",
  "key15": "2Tx8mXmE7fvr8yyVyEgvNY4Ku1wZrAb9PWzxs5bk9RLo1ZdZBM3xAYP6DaNg5WrvQFtUrYQ4KUe5x4iZfuoNjrMM",
  "key16": "vS1Zhz56zE4jte9LuMoPU8MyMpXX27RH8x72gn3qJu5pb1G5Sr16Ly9xJsqPVKQaqK6gubPVtSe4Y7E5JpsEbyV",
  "key17": "5Ct6W3RJKb5EkwAVu31dpzQ51S4aHbfriMUKiPCXq3nExmtfx8suBajRb49jXak9XES56cEiPtFvC5VDmB7aAd4D",
  "key18": "4jAbkQfPjMBrR5t8FNNzKtbPhfdE36oyCWg7zg9o1qLuRB48fn2LBDHrmS5b3zfT3RzkaMqCaPjWrqAzLY4y1F9g",
  "key19": "WAg1GiCu7nifWyrWt6frybBUM7EQZG4CUKZKQwDb8CjfbKR5ztpJKALf7x7cooqRpEzn8PHZzWW8k4xnotQkqU5",
  "key20": "NEu1kdj6dJhyYbXFuxKmbQFfA3cD47DSV3UkqFMoL9dfwAaX4SThvgnJqA5bzRxsvrsvZoArdUJ7Ej3JNeL75Y6",
  "key21": "R6EDfgpMU13t2y9FvarUNrM1QguFiJfbgFqpjBtcbMWT4dc9ZFzAJQceorE4KNGvfgmBmqzaWToxqu8wMnwBkvX",
  "key22": "4LQ9hhvXzni3AxhZxqQY7TCfngc6aoZaJeDDNb8bvKBeafFQZ3bpHe95exCpfAanzs5hwe1oYhvCqgxWv6dtSce3",
  "key23": "3Dmv6AeupeLEJ4fbgMLrS8X3DxdHFEq2rsrEbE3m23X4yVHKhabkJqP6kXnGSDKy96U9B2e3ujxjtosFzb7ZR3sX",
  "key24": "WBmRsryqMLj4mwRbPz22zho9MzxPPKToqiCGNSpmyJHgn8GyQnfdMxw9VtVSkY9KmmkUPbmusK9cetBHFRoBqiY",
  "key25": "5M9VnkAuRQooNRaEvg6W1JgDidM6ttcEU248jgGmDKPukkbWZZ4cfjCDAm1YHsv2RQsMk9sfsHVG6Ky6zWqknjYj",
  "key26": "2aKGUiFdMrYawsJBro6FBZLJ4xfz14CCk2WK7sYcDQBG9N7m6zddPQQBh6W2rhKqikREVUepNES96B87vTKVojai",
  "key27": "5HZBA8ZxwqdN3UbuUYnJR5NZr3aaSZqYTwGdiDajtmy1mvNZ2z9BjS9cLbBniqL2GtEyRw5F2ino3wBZTFJttBfn",
  "key28": "46w3Y2oqwgxYA8RBn61GCog47QPzxWd7H1NbKK1upKbPZWLzwymCdxwyBktNydu7CVgwEfSLTR2Qp5woT7G5RFGe",
  "key29": "2yS45roRWS338p5Ft8NBtLcgqrmzxbopJSUPGFZPkH2pPRiBrUHhjsRNryKf9NQs2mhn58hYadzNSxYVKMcTsLT5",
  "key30": "4RVPtYuyojF1gobjqT4vwFiM4ZZH1UNiaVjqwfjxAUMU4d44VCJrySLAPg8qtFWmHiy9dtAvNo8n4a8UsHgTQ2UA",
  "key31": "5tuqs67U2WxUC2yFAEso1qDJcJoJkuZNQgqesjnsbMizV32Qb4qvpU7to1AKC9gk1pn2duDNjfFkMwTQQWQU1BSd",
  "key32": "5vqebvRcnaJxbrZxCEDKLuQdwpCKFaUHbiqDrMeaJ6TsMASRptTXXuqnrwRU3ZTWpqAftaKJJfQD8YhLBLgYAt3k",
  "key33": "H3XPi7soamxQhXe8eiZKkHHdSt2X1LQDhNjeLETckCCgDhmSH86RN384FHnfUWFmm6aNaSo1hjHADP34xs5j2sW",
  "key34": "3NZpevo2UxY9r5mzU7FzVeqbGrychP8YcJJGtyKghQbCLsrCmoNCN1Tcojn4VaWu6pSdQ7ez3xWJaEaWTGTqHgz7",
  "key35": "2xpqs3ufgDxd6RhcsNYteGivtQUjEYScNKiyDoXqVmWe8pRhuNWx6KNLH1wq9su3VrSkTLEfqu1M32MtZMVanEFb",
  "key36": "2rtPXjL8xWbwSgJAbW5yaj3KsbS3vsJ14Gd1iWu1o5Kcq9snFWiwQb3RiZtQhQ9W7gsQXoYiEkyjuikzTT1xi3Ts",
  "key37": "tSi4iRNJRDxT7C4cKvx3AhmY5BQLfTkMLRVo1Rt6SeRRwmB2rq3MKBQkmqhuCqQvjYgSurFLnXJNWiAaos18XDp",
  "key38": "4QUQo5LBStcta12ehCbN9u9vm31z7KMiBSsk3cVmbY2fY3oWLgq62G8ruoGGpaZmi9i7gwqTfmc6C6N9iL5PcfEb",
  "key39": "4qG2AJRaGW1uXPDDEWzL8wfUDi5uFX3UxjZF7esPb9Femr48SAog8fR8qmGUorQjNukU65fee3TtubF2jYBW7JLH",
  "key40": "sbtHHd7xdWLseiQhtSeWis1bJmABpYYkjk5dKeU6eBQdxRHF7DziDyWhnv5VxTTzPhpiZ8oZMmFpTHWS8VuHh9m",
  "key41": "uA7CoFjY1LMYKLYJ8HTvEuZgwiMGPKLerXsmeDVoNZmaFuxwF4znpFMZpYHByXjp8ee1jRCYfEY1EZLCz4dVUjh",
  "key42": "2bGfXENGKQkA1yWyZXWdcoyfUoa9F3mbbYxBaV6kiz5oFobhoZMcAyuTdvedEsGoAfNi2t25TKBJKudXsBPonUMe",
  "key43": "Z787NXSBdK7LqR8H4tCsasGpom2bVsDQa8RYK28TrXxA8o3FnxSAe8fuujmds2bLJc27nMA9Fqci8nUnNKmpxeK",
  "key44": "4vHkS23Gfb4fm5wEfJQfvMajMy8gzmvWrXvMKphy469fXkZvUtzVwapV2DihcuMrCVYumdi1BjTY5cCxJXSK29Mq",
  "key45": "3kzfzzdLoJGTPxfEqeDSKrQwT8pNFZ9q9bczdVSuQddDV5mKUNAWzWgpLBjdgaXNmmp1JiX9tHyLHpZm8pKXDRhq",
  "key46": "3cqomzPYDaDkubNLAEs3mc1NPH6mmvXeR1DxhtZFHs3LeEZ9hbVMso3ekWJyndLW3dBrt5GmfzwbVSwqTNDBPDyL",
  "key47": "4GM4QTqgsZTK7ggJJbZ3QTFuCcXwthETjhbMLDvAwseYsuKnfniaqca1C4hmNBVAXFpAeEpJsSEg8QAyN5hsKp8A",
  "key48": "3AG6di6AWGQH3r9QkbgLzSygNuG2St25SXvDkLGy8gAu8zFcXNnFZX714bdBQtEnwbeAhkhGHXVFFEKY7JJhNRsK"
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
