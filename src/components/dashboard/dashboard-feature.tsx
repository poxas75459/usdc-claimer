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
    "2vSPTDBMMXUMJXHqsTSQADeanEHA34R2bV67KskwBPUPKa5jPb8v617uvdoKCbCMHiXam5p6W6bDJonWXgJpF7Po"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cv4D6eSFCwn4416ASstopaxZzdV9UwApH3ZPPiX9XtRqiCrYsEVsXc2vkppTgszrPDCDiPzJNb4AjqvM6rC3Nw",
  "key1": "226w7R1bjzuyaPxEhajYyy73QvbAfNwbCojbCKuxButHbCuxTDYm47UjL74PD9ks2yfEduoAqq2S4LZw6psteWR1",
  "key2": "5268UnXXsuXX1nGKgWWADdARdEUDvLtL4Qb51DfEQDmBBnpCiHMi2D1eFSTHbijDHEPX8G6w8ctMagPNFqCaXqEA",
  "key3": "3KRjAtX5A8isDCDT6VZ7ay9tzVaqcuoPUbw3w9MCgEedg6D4SyFgKoJT4tveGyVAheR1ruwJn1iN7muRL8Sn1Uo9",
  "key4": "4dYw84nzdNX7haB7KtdkHtDmmGtH2S9Jdv4qVHLZQ2RgGHmMFd1Tkd2CEyzSFtRKB6bhKWEVjWDoDiMTDMNPVzDT",
  "key5": "3neBGC5yNtpZvHuXFzsVj1vg4KrE9xvt6PvBKGfEsu2qYUqZV8FaJ7EM4u1h6EsN4rQ3nQEt3N1fMqb9oXPpvcRg",
  "key6": "bpKXqH6wswrepmxoYESEug3vg9VfVLLwswhRwax3ztvZwt5dPMHvPzs1YqnqYVMNHPCCmPouszs5uqHJ1AfhYux",
  "key7": "63ps8S85KZJoPha2XLcSb5n1aj8NnyEK9tHEcN6fG4RsqQqJWmNnT2rLU4ueRpY4aZvgzffh155Hkpg2hE6NydGb",
  "key8": "5jMVJSED7ya2JaCKBhBzEfZPWtAsANkGYYhqKRYHee8EmUeQfpJNLb1v87PWUV5W6RZQq5B8yLxUM1SWzk9SmMke",
  "key9": "w15UiqFpivRtbM4aovGAj8dCf953RSuaxa1825qiTTDzsGm3qetAy6P3JowE8wwbZiB2WKjMFSo4HSDFyKqrTYP",
  "key10": "4CqBYu4JtH4dQbukMdeeEamHCvvugSstM8UWxkUKV8bp6FyRj1Uz716LHz7J3TU2YHhFdE2WsXvfoppcKhp1cjSa",
  "key11": "3YRmJJjVupu12r2prLDJLHVBdss67QxYfbGoGzfTaVp8LNW9ZYBc2Bv84itYuTsEuHFWQRNkppB2jJcJwD9yiUTa",
  "key12": "67MRbFmA6SFsawiBioSKjGizpwGmDKDihoo7GM1YcdDgoAgk6MJScuJ7oqHKxj6m1TPQH4vsTsDJz5CtHfhGqkxP",
  "key13": "rZZidW6JpQUQ5yK4d1BF86bKt6HyYR285roht7mjeBAQMGExhtNh2vU46eHbxT1ZCD48VV3N1Aauo6okDyoqx4E",
  "key14": "3eWifVnu4npNBvhdF43Ys6ZbNAwkvCaJfjEQvw2ZZ6kjiNzXiouLPL5Mwr4R8XWMiQxZwquuyzzi6aSMB1e8CYVr",
  "key15": "7DNGcbp2ACSvKujQURzjV7P4CKUqXE5oFR4GvmvbFVFqTGsK1Sf6uGphkGJYGB9ht76CZyUsYp7N4dH9yKsd4Q4",
  "key16": "5PyC2sUvv3bnAQrnbwuBePSHs9wb1HQY4Fxeotyt6EpqExaoyrvRHNEyBYXSgmTuFmyRcvjHYgsqy4aen4Q4wWRt",
  "key17": "3UF2Szg76YLSkVQYHpeaVwB5omffAj8GWbh6H5YgmmtpDfXwQSyFG2uWwaJcNFPMfRSDBSRHv4xQwHkdhci5BixQ",
  "key18": "4JFuVLw96c7gaGWgY7E6wMaEBdBAoYE1H6WKZ4aeEedKERTFYpXZ5PQ5XtJFoLCc5jXEVmT96brboQMaDNdie8do",
  "key19": "2Tn2YZR6dC1wVnKRBEVgfyBT2DrLW4ETmkHHSpHYtBPpJ7h9MFvKDCFSxp5iVuJuh9kbAeqatVvLGmBiiZTm1DPW",
  "key20": "5jdQL2S3ib5WkesSSsn2AtNLoJ83BM6UfwQKgzwFMA5i8qK1QijdLzSG8tNmVxdXi7dFRpZAjSsjnSTLqkfMrnb7",
  "key21": "zynEhABdrq8WQGL4FUDEDpzkkBJQ9NeuAxVFj5w9dwTUhCb2zgYx2x1BKWaGmuMm2UTuUNM69pEHcC8qTugj2C8",
  "key22": "4eGTgtWLumjiXyZyrNN9PFTq6GbaCB6dmd5XbTpMdE6ffThysZJ47N3r8RtXcaybsfymYd9U45bqrm8wXzoX1huT",
  "key23": "2UYBCNpNGb3FcMkap5MCb2C8XenyQM4JQJN3R3ydJy7H8mnLyf7vdrAUNYduXHhjn5VZ5Qq9R2hPkdoFZdjCfVD5",
  "key24": "58U21LMX4UH7zzVSDBByjsVg9fFcynasdPXgwnecAp6QM257GQaVpYSiCtfgBhQ8uDugczY3wunEbd7KU2yLPzbT",
  "key25": "3p3uHEXKcb4QwSr2dVdrZU81UWMvTU9Vap8gvAwLDERrhLBxpjSAec3wu1rDZsvRkgddCqUi9TBGg69WG9uo7pHo",
  "key26": "2SwkJJaEsTzJwnKCoDSPatbf5MPESDAKetssaepSdNPCNz5xRejUbFhm7w8XU4ZXcc7ifJKgGGsQQzWiXrf8JYoo",
  "key27": "XprXnRS3WhBD7Xs8ESrNdTAEHHMRH9cxcLiW2v9DBu57vZkLZ7QXtci6tsTeP56835bK4szMNia6Q7UytD24qr2",
  "key28": "4Yks8uxKXkwf8r82ZFpuab2sXVuardKY7RVa1Mu1FHeyH3JBFXVBiYLWXv3tbZmsANcYMi2DD3izXJpnp7QnkMS6",
  "key29": "384KmUP4jxjNHHfjBvn5TVEC9wWVwDYkuCZ5xaNB2JFUyPzxL2oPJSijLU26ho8vxe2dfVgAGXQFWPWzygXptgbP",
  "key30": "3rBi6BLEk5EhSWUggKbYvy8iuPVTg8diSGHF7FSeWsP1YtS2YF7NxeBASFjiYmvANMJfA4g2UFWv8ACx4QyJATx3",
  "key31": "5vztJZoimJgJ8ssMNK34N9bsBpJm4gGLFyVeqDuYZx1Msa14JFUrrkKygpZndtGymuhfZGLuK2jTMmpyBjYNJ8MY",
  "key32": "5fHu3AVMA238ew5u72EmJvtCZxHD3xKHjKjzfSTaUSEcdtPc6qbFHYSHi9Wu2pjRk4wpZborkYWQoT1xSXzEiJcn",
  "key33": "33q61XmEv5twtjaDpLVHFsYfbAKZR4fDBybHdbCiszEjzP7tSCk1ddM2vYvT2F98aEUbaacX7jujBqkpqoRgN7BB",
  "key34": "3AYxRTewLv4j1Dw75LUKq8Rr3yijMs2Wb5HGb5RG5J5DHCQ8T1mWGSnwg3tzYRhj59fNiKZwGoQm5NpTqhQHEaEf"
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
