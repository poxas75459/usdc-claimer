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
    "5Be7FRmh85Kt6mzMRXLuuv6TwgCCFcd4wbNTWdvsbg2j6YmmzSrBzNo9tGivk1HqUsJDwmnesPU9K8ik8artKMNz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vQVdWBkuReSmSwM8y9v4VyD4cfbwrVFus9qUzVbzZckUpRfz1GsL7jk1FZyhpNkBLmUuELZKQQk4PFjeDNFLJDF",
  "key1": "5qeUVnMbnL4yxKwjiwiQ1795FiUuiddD6dekNwuUnvgNjdKTAzYpmAgprncvhMz5Mkv3NAW4CoLh9nDF6FJs4Snb",
  "key2": "48oXUWbztTkU9HzEHngwzRoHQn8ba5aJUjJXM6auCFtzrsQTqEhi3hwQAwaETx61q6KSvK3KQK5iozKdfryDmk3p",
  "key3": "3BuUJF49amR3bcSKTir7QU4eLr61UemkvYTrVoKF5rmWhgVcj9CzkaKkGQgyhVCqBVqUGQ5emraME3xwNTxPo5RS",
  "key4": "onVeZ5w3iYorm4VLQkZxYTUwgj6E94QGnTjW1DMyVZVgjyjj9jYaw5wfD5HpvssFaeHhWEcR9TXwhECcwtQfmzv",
  "key5": "5uWgQkcQktYMHV9GN1weGwgn97dMx9DWuevLbsL4VUAzush5ECF9RZCyHyMijmEWmnFmGJ66LZsBoE21rqkbVBNs",
  "key6": "3XBN1yMqxnFjF67ay4bJ8urtTtU9vhj3aM6YQSeY4oDMkWWrT5rKK1BFdhG8cj5KpDCwwb91CZ3MSMUzW1sgoqft",
  "key7": "gSsT3B2wC9RJcYJHmzuuqTfXVprSQ5PwKom76Tucd4X54KLBqp4uNRDCKupyrc4uGoe1AkYyngm9UhYGWiMkosq",
  "key8": "3cM7CWoh8kadBfykDnKqLzhL9eVZZKNHTPYVBfTU11ikVpdb9EP1coN4NjSoQtXHrUtJmgwQb4CCHcXwCbSPcyzy",
  "key9": "3RQAaKuVotNGuFY22h8TvKBmAMnCBbvaaoyZvopXUeQdhzwQNL11r7AMS7bh5MpYq6B5ir9EJKHajt1vFuQg2Qf5",
  "key10": "3UuR36WPRHdd869TcyBy5nzHVMDZaZx886omcRkxHcDCWMMufJVMCDnyzpDbyjysyiLSn9wwAXNtjKEnrDFR1EZU",
  "key11": "5aBVcuTvrQksdwAR4Vk6mtrJgg4sY3tcKY5CXibdePZaVVKibnYugHRq18M3ZnHrYChTU3UcghxvtMHfx8s2vZqt",
  "key12": "nGriT3nV5hRqcKq4fi7sv2RV34bKxxH8cEm9SXKH23Y1h1TTU9CW8Lo6HtLiJ1fLPCi1KJUavRRHLjn45nBVYzo",
  "key13": "Y4MBUv1fhAyW2hUnMCKcPxksYGHCDUTQCHKVnVwvFvpMaBbbxrj5omJeX3kauMdF9L93skPSgMKYkCDFjwKrTVL",
  "key14": "4v3GsdaQTAAnn6oFQmutZVV6Mte3q6mfFLexaR8YRBhYBSS92vkSYzGmMPSb3Q38NwNiS8Yapqgi56dv3tL3oR7v",
  "key15": "D9e9rt3ZaPEzCe18BpEEJndTeYdSMHJ2NK8t9eAQpnkHe4HrDJcHPGjQNNzs4rGemcKA4s8jsMv1jep44QR4Nsy",
  "key16": "4kDsTxUCkuAW8hQstZWqGN5jPyz4uP1TQ4EBdHFRQKY8Nqvybwn4LTDsAdL8CwptEteP28g1ghUtnbsKJnTiS9ng",
  "key17": "4eNxf7PTY5ErgkvKoA5ain6cAGgzcPgmYQARZ6FLz8MfxtEbyGXSQoPryPncYoQS9ycRuFhdMYxRBxiuXaFSw6HD",
  "key18": "bPKjh9W1xB6ZdzGQNtvTgZzrhViGJ9WkCjUvdnZUSRhMmnUkX6Cf6y7oRCrwVnsxFPXRD1TytAdqnErmvip2tpB",
  "key19": "3v5CpqQnRtjVuTs83JjCsjSettP2ahGaJxhy7CuDE86PhXSKKATBhBAbsF216PcVYGRwwHNKibDExeyeKMhR5cp",
  "key20": "2MSuT9DMVkwqd42RJkPfSL9sAur691MQojvPKjrUdLgH6XJhSnjE8rxXVVDNgMH2nsMSeeoiUcRth5PWwV51DQtf",
  "key21": "2CutPiYxCmGLsLqefBrkpvZeAEkcFPdURp69mxRTCt1DWZTcVS7hS4KFfi3QJJEP7kFod2RTUDzDXrC1E3mNGgtj",
  "key22": "4rVBEBfKr6hnWmp3XtCrqY9GmS8WoVoAJwfgqzxTWGeuyXo7SSBFoFpDAewiT5HeMoooZNyywGRjf9fkwMSWEbMZ",
  "key23": "4fK7mtkrMxkrWspyCmvE2ujfxo7ShrVDTEXAEedjgAF8Y8MvbP4YYpYWGLq1GjBYZXLHVngXtPeVo3wcd3iEr2jt",
  "key24": "2nUyWvYJc19c2yCxwa1QzRJ6bUMZAjuodZA5ZRJTsDmLzcGUek5dsSrqZoM4bMggTXQaQKETSsk5LEgMj8TYtc1P",
  "key25": "2J7hdYyEGgivwe8AopnAyxjZXhdr89MqpgwyPspvVnUPJpNfk4VEWAeAWY7DEAFoBqGNJBdJWU1bvKx1sKEPYGjF",
  "key26": "4JQ7SJV2DovikLeNSrqu6L37BQJ4iMyyxpPMMapp8C4eKq5EitdUQt5NvRpkm45yknHozK1ASbrSejEkjYvgwDQP",
  "key27": "4Nt4PqHB318RoHy9KcF2xxpeXhJXsZ298aZzCdaUfKxRuVfTbugRnhjrapowBKdSzUE3kETLnFXiGH2aXgovUXAK",
  "key28": "5RX14Z6UcDANMWAyx1JszBELuTHw6cwM4C83F2AjQgQGrd2NsqyL3rfawEyyQnuptjEdGvR97SR7qh8fQrqzZfC2",
  "key29": "63aHK64MK9unECnt9n2zXS9YU6gHJb9UpowKwxDEdLfQf8bA1Gz7VsdHqDRqE4FEdNQYhZDEaAHJ2Qyq65YU6ZRR",
  "key30": "49R8fatEtQvaQAdZjPvF6bKWrraqopzXxPqosgHYVWtqbggGXHQZ9Ez7aL5Zj37zAgLELGrAS53kVBs5rhDKnhAj",
  "key31": "3VGyenvJSqEgYK6zvqBXNkgv4SFDajqWgWxZhScJaqZcX1FP3djL4e9ArKWnCBFZ7H5UhTqXfsxoENAzKNqDopKi",
  "key32": "4cjGV9FkGJXVkhiwsgnZn6yN3mkDpXsAfP4CkrBCL2KNvSGWsDJtW3phb8Ya2rnNNEKCficP8EGMgrYNTJvsK5YF",
  "key33": "42PKobdE5Pe4af2uJBbPpzycjSgfHyLTmeFY91DVkYSn3KMjcXYJsT3TLGWArETXRU7JZLE1hzUggc44VDibCsaM",
  "key34": "3BT7hMkX3YWzVRTgNqQC5nyMGHazMo1hfgRHGBxZBxhstS44xdmfg9SM7UQ517JkhknFJWKkCyMbEotD2j7tnSTW",
  "key35": "2MWbXpFxpMhZcMR999EQhun2p3VXgbEMUYqo1srbG42RGXYoPaw9tpBMhFL9DGay6BLJ4uD3jJhJeBGMs9zDjQcY",
  "key36": "hpfA5rZ9Dta49itiShFJeR3Y3GCS5cvwrNWVAvRdJXx9FzgAHVroTmHc1bYVj18x8CvF1RAMArRuu2GALzZQnYv",
  "key37": "4D1VZD1XkfYks2SzhPbkUTWmYfhucFo2ScGfLVfJit6YMRme1BHFheugH3HUfFJ3ZgaRe61WXwbt34APraZ3Qy7X",
  "key38": "3VJdphLCL3uqbjRH2WtVAh6HSf83UEfuEFwotny8z7H8QWcGbsgSn2HHTYPRw3Ai7sXQFWzJCfPFu3BVDsnb1CwR",
  "key39": "3EnYXEbT7et75zgb8bWSLUueXDst3uzkqM4hBJciKfGip8MqAk4hvBMfhdaZtwCBgY9rfXw2xvGnHxGzuB2DMiYe",
  "key40": "4tZW5QZk6LLTovYiJsBGQy2JzXsGS233SceA8SqNMLGVMTe2bwb4t6QmSYMdRVgGqbUDXhjDXUwKawei69wgNQu2",
  "key41": "4xec6Us5SQZYYcV8XJavMaCoFtfUp9281ty8UV91NgP1hjjoikw27akiL9mTwYqzaE8BFMt32ZKoQCtTS4sfzD4A",
  "key42": "3SDdfJvtkcYYPj4gZBfVytrHa3Gb5aBsMcstrWM1X7FnxMbjcfQj36GBiBh2qLuDDBxHWERNMvQg53vuumvy3amc",
  "key43": "23uXSVopCLu5STW2HgDBWV8xSJvXBMwv2KdYz94wrEEgjpXaRPR7KUEPE1NobTazun67MkV1Up8AZn3UAfLcMCYZ",
  "key44": "nRz6vwixwu6XyuH2AH4vvG7fcuXPMYuPkr9AFwnrp7QEa7Nf9hmYnBPPpgKyVzmbepZR1kT4BonjSSTpbJ3tbUJ",
  "key45": "4BfmW2NgpiVAGYUhppnzeovA3wqmuSoM1tpUnaX9rkR2aZSfa7FQwZs8w7ANYFFatdqT1sNgHvwK59FVBK9WrH4h",
  "key46": "5w6XZhzSBi8eDrfx1mzbqLPYacx2aQfPk5nZmUc2ub4D4n6Ji1RGVQteveSP6X8xKmHJbn9YxRharAuAicjoQYqv",
  "key47": "4bQQMv17ZPy6WQws3WFzAV7xENpzMyrBG75i8JWgpexHXU3UYwLUPE4gQuctTtr3HHckCqxgKrk3PgaaeetBx8hH",
  "key48": "4WXZDkEHdCakyRkzSFz5Y9UBPhP5ujqAKvfBhNKRUySTckgJnUthLD3hzYHNcsaHYibYVj4UftbZ3c3ekmFgj4Vz"
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
