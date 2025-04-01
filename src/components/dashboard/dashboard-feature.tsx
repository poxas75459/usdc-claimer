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
    "3pwKc1Wgd3krkVinHLvk3BeUZJPCikFHhEhaeZv7G1KYw54LNkES33W5VBFax2DhE3ddeK7aRQo34JRzKTvpkA5S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6rsGti1eumf9yebqbB9mrAReNmZryyTSRiwwKNKZJd8gDXaDSZYjTtpXM1Z3GZyVf2iP5KkhqFK2fVb1XcLqLmN",
  "key1": "3KasyDAJ3U11RjBbzJ7GVXFw1WTCrKr7Y7DpgThPp34BwkpEgHQ7PDpqUYd7kdANS1adQxx1fmjDmzk2WTPZwKkQ",
  "key2": "65zVr6nnpsHnQHEUrm8TC4VtMmUKdon4hM9kSBAFjSxekZ1MAsvism7ZNEGAUKPu2NKs42dhDZ1tvteRpbZTHZo",
  "key3": "3iWmeYaKt18CgLN5chrT3SgRwXKibDXZfZeKk6Enh3Sv633UFZNSbtCD7zT9TQWW3eoN1aXzBP7wFLy3deuvftUe",
  "key4": "4LYZTG61u3FGkVXWmwiEy2UnyiiEs2Kw3M1SBbh29XuWv9ju6pqjw6dhpnWPaDqpjN22ktih1GjGRXA48t4zQUki",
  "key5": "vrRrL3aLXpAM1B62iozDLCCbT7C1SmghDypwJ7VrigPnZpyqZxK5joLfFPEEQ3rAQTAb12qJvJUXchXphYUcTx9",
  "key6": "zB6dhggPpGtW9PvuLfP5ZwvwyMG2g97cd9FnpxLHqEWS4diQfbRTEAgCPT4y1DbEy42ikvnxfQAXDz5AHifCXWY",
  "key7": "3aeDSxYhqo2HtuCgXto3GpqUKZ3JPjKuk6niiKbAwj1DtfhEexPVdRCG3qxoesuWUnsyyoVzh1nJYvnN44QZ6Qgs",
  "key8": "2LDi5buaxdQwEh44C4Pf9JnxMVsB68aSENk1zPrfoZ9THNK69JSgxv5QDztYt76ghLveipMpDnVEMLWMC5F523ac",
  "key9": "4vjtLmArkZQefqeUXKwjQNpYsDSrwUNHKy1LsgDyzXpfFCJNmASkW2aJtSuTWwUgfyDkyLTsAEGWR9V8uFFAkRto",
  "key10": "5qF2WyFVxkcKeJR32C4z5fDxTHz4cQ1XdWAFoetT9JnyvvyYRdCx4dKjcXrHnJ3GywWHZ9zf26UvthwRJmg9DjMJ",
  "key11": "HGUGY5BBUhFMF4jE5Gwnb3W3Aiznmw3vTxoaPSWLQ5rasFHuUBfsDGJXpYNnZmjtY8vwDPnj1P9MU1t7gazbn9Y",
  "key12": "4XWLTBLdeBsanWCs7pKEvmbP4g1bQhLyyg4EMbnVLrbGujfr8sT6e3NMVcgV8AbBx61GdFBvVoyRBsjmajQL8mab",
  "key13": "59RHFU6taKBpLLArLPt92DcDoA5uphxMvTow3LD781wKJV5QHjydNc3XTW2UcC2FQBwxmyD9DmWmtrZvZ65QZzap",
  "key14": "2X12AnGjrnHAmBcMTLSMXmRkV6iFP7SH1zZsk56dAVh5wzeD9xkPNYzC7WvXaC3JH1eSuK3QnfLVAwsQUFfvwTC1",
  "key15": "3XbjQtV16WjCgQJhQHHM11sPNhqeEjViGJr5pTe968cyjEw19j4WFe4ShaP5xYmbReZcT7b62XYqfQT4KiQKCqAP",
  "key16": "Q7vwMcaZ66RjotKJA1b6Z26jAhDpnwh4tY1BPaqjMrk5zTxnFVVYkjXF26FoG8dLfMSmJiQoyAeY6yvzjg4vWZZ",
  "key17": "AtDHt5PpXKVn7KUL4aktzinMiRCQy75LTFCyD9MphoM5uhd2Hwi1iTsie2HCaFwF4Ndgj8gqeWWvz7aXbor8sXf",
  "key18": "cNvL5oUoBz8aaHkWqDjPt5bEfD9yukpSH99c8TZhwYYRT6no17hAvvTJSMLNrw2U9dvxr2GSHZoFMw4TXxvVh5C",
  "key19": "5dYGMFD2jbDNqqyq7dFKXUKZuJndnubhUrfEknEZVDw9QgawqcttS9Bc2LsoY3dxLUGE4brjaaAoAW8LFH5VDaov",
  "key20": "2L1tbEVfJJCYzEbM6SLSynyApTTH27kofYNdhmwvWrdTF2Lp6pDNitUd4JR7rrE5U42sEuVE9EetDtUHX2oEZ2hy",
  "key21": "hvCGj3aVhEK4dfkW8wCVDdu73Dmax9Dwrt4x18U22VsaFxAtyWZaY8ZWtwPTdtD3NDuQvPbYFGU6Xa8kaLTDmbo",
  "key22": "32L1QWRJfHd3dtjeEE96La6kSupp9o8jzEvE68UQC3kXw6gGycVfgmKyGQoowossGccXkzFzLLKuohZeEVR43irP",
  "key23": "4WnDiGPvayraFHRFFczp7uGEkSYiPo2HTL3HZUGurjj5qDuw1Rw7ioyxfnu8PtaH9gJwEwf7vHcK2wKEGH34ATWz",
  "key24": "2MiH2HUtxaJjBXRrSbschPuBr3AB5Uiac3j6wso8GQmYsTywwgTb4JNggmSiacd6BewCinwa7jY5Q7Ycr9nXCTuU",
  "key25": "q5is4oCTYHEtAcBwHKQSrQmCLLbvh7hwdu6iesnNzfsfQmz9W9arKrdM8xbuhz3yyjnPaeMhEa7uUhtjqmWS1EN",
  "key26": "2UxwbzYytx9MzqAJQXh9QTSkbZepb76tY2a5qjTL4bUFCuf3xiJvpH1wkYXjuM2uG9cFgBsCrnB6UKFmRfJkxE9p",
  "key27": "inFfXz3aNEKcwpBjb2SWnp6MxFajBiFA3ztx1QjNDSQDgwKNBFwxXa8PptxF7tEBwogE9sAMqKSRxAd4FKLs7PA",
  "key28": "52A2eW6fJ2yu6DdovvmmCMnj8Kg7QG28a9hzcjxGmHZmyanZ2mQX2GQD1a4HeFpZLNybTCp54oDFMi45Z3QVUMLt",
  "key29": "4DDB5jkwxMwDiZJTZzUsjyRaPNwNy8y7BnHKCfj5LALgKMCJzaJzXbR1JG9L1avaNQRUW3Zsg8xRDK5hF4J8jC2v",
  "key30": "9YCdZkaF3uLkE5pgVDeQeuMjxFNPKFiCa9xr5PiXxhzmvkFTC8Jk3vh52urVRNqZhAKqSweBCwxGkc3XXVF7QmH",
  "key31": "3sgobN4aVExF33LvPNn1FPYXpdcRkJF2vgRSvEQVz9Equw74F4uhFc1ucqm5CeULoj3Ra9wE6hBPBQQcXAuvhY7d",
  "key32": "CZvuJ8g87hzJooKtnBLW1amjvMGxsUBAG8mNARfdmaPVMs54oTEAP6UtXziuHDJEuU9b18FU9zumjtuUrWEQQw1",
  "key33": "5Noc87YovbR9VZZvJ5vznKp1TvsYPBFgQk5r3jMh8hRc6wUqxoYpc3bEtt7PEhyy2wodGi5pdFmNcxSiNuysPjrc",
  "key34": "2nRf1iXfo3s7th4GcnnrdENeCuftryhyv6S95nEikEHcwzxp88NbirZWaQTBUT1TNUQ46kvMQ5QPuAQ6KgSBGFaJ",
  "key35": "4AdbvooS4DdqiBfNoTrcL8vqd5BhRfz5iiGYrQ6SzXeauyRw8JSVmV1XTpaWvtbvTCWSP5TS76UjNzLAVKdcStS2",
  "key36": "4qDePsKHr7wwAQ5fvS13Qy7vA5RNWhdjSfk3tRE51pvi8vM6gqoetdoR4ppPqdMdTMwjHQYezSQjiyTDZVQebghw",
  "key37": "41CjUua1rxhB8pfRmoMYEeQvKoBG3PWMjFNmWLND7EEnnfK3AocmayzXiKM9vPekv1P2mKuEHZiVGhkV5XGKCwVH",
  "key38": "LJ3SDSqyBzc1W5ehs9sXPHUa3NVfAXszpnQb8Ft1hvjzvYEWCiY1pk4395dyYBRzhWkW5BaUX3y58AkipwG4pu6"
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
