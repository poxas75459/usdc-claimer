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
    "A1Y2SxYfSzcS5ytBNwZ3j1PGAw78E5U4ucVTTEdAon9yY32fT3xk12yvSswEhGyvxQwy9t5UCrMMYuBEDkpK1PG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y7PnFmWDhJ3zxVVTuPPGDNzdxZGjHSzroYvpV1PtqZHKJPTmJCVT5aApiV18fknzYuZg2xKh4Z7nsBgwVLv8GBK",
  "key1": "fcX8a4sqzwzhUXrLqaABJYtmGBhHm9tpQSwXSZb6hwQMiuAucHUNb9Z9q89xpjr2B4eE9QAirnKbtMiPS7wzsSF",
  "key2": "33JKv2L4LbvXhHAzq3JGBGpyN5dEPrbF3uAb6pSboMaxSTAaCryRjSZj7mqbwM99rT71FdtLcQukA6FzR7jQVrnW",
  "key3": "TvtvKi634GU1e8uzVj76J7mk89hKbgfQhAP72WtsK8TP117N55nw4gQ79f5D51kX2m4meyMzsrdpyKpWMuijAts",
  "key4": "2f92uoWQ3Lrfj8WMY2ncNjRtfeq3QwC8ZSAhjvK11DgRQ62fuXTYrMcTK6r7k7SdscCrXi6FNK2xQqS1rsCWiBa4",
  "key5": "PfhJkipbQRhk14GGmRyBTvode2ph44fdwspsCVrKMsUjvM5YhuMDSPfyVCeouCd7yofVjq9iZnibVrQo9gULVts",
  "key6": "3PDLmHZrqhxEpJcurGUn5UWahdpBEFAR8YG11zk9Yhjo5Ui7NbKdvmt81jrwWYVB7HD3fsAPiNE2LFLwNtsdcnAn",
  "key7": "YKtGxttaJz9sC1xTkqVKJkTpo7FqUXdwtuTuzo1VGM1H6htahhmBtLbPMNBTCzZT3M75NYVpGwx4noUWCbJggMQ",
  "key8": "512AeafvdgAiLXhpL6n8rzEFXjZFWQjTG5WbydihM2ncPJVWRbZKwUqq2xEVPzUM9aoUmvoRLExCPyb3Q5edCuBQ",
  "key9": "38MRZmHafJiy6eRwTufPRed7wKHq1Y2bRAF92ed5utEag9taXyfKxh2xahMXx6torxgrz5UyAq8ky9hJQRZ59BQq",
  "key10": "2pPjRpURtZ9ebjWNn2SE8eGQNGHT7iTmMPMHyTurQ4iAkLjSfuxCFn2UtTnKrPjhLVEMSztCGTeFWMaiWgPDitJz",
  "key11": "9B59f1nJmJnWQaZU9PbiWeJJbQPpSzQYWvpikQbiBbXjonQ5P6ZGs6WKxSRi8ZEm7wHEDkQS1WaAFcpvPjp9972",
  "key12": "koqgLXGaC7FpkwnXkjqegXeNovrbn5L3UGpL6kUQmg4ZySeMrJaJWrdMJf5eD4dRjeohHUVaL4DRBj9fNWwz3FB",
  "key13": "5N2RSh6H8WStC7KqVkZTgzfvTN1i1cVTFQRxpXEtd757tKWDcSUBo8MdYA3w1NyTiuhv3YqZ4gkHByR4fX8cbjuE",
  "key14": "NfZh1qrnxKKPNvJ44tJ1cnXJH2TkyyuEVJX54jeRaLJduBxoZ6oCRCtn8rxHFdn2aYsc4CDP723rUUbenjQA23u",
  "key15": "3PvsCpXhMzBomQX3EwcTda259MNVYNAPsmgBXxFX5uzKb7A8zkcYTnL4gYi3RvxbTpZRYcJc3h1jqkQ6gFq8adSL",
  "key16": "55XRGhjJEQEfxSgxdUtyeKvFbR9QsBgwbtPVgE2X3RypxmoWDMAt8Ghn16YdZvbCXDxgVPjTYapirLzY35DYzmVd",
  "key17": "5qV39kudpicD1fH4uqGbWVwhQVMLemPCCsD7VJMaofjE7fqnGBJuiKU75bmbUA4CA6rr5cbUbtEqZRCXy6Dq5WL9",
  "key18": "28ZzEufxemuA9YeTkUoQku4DAQohPcHroJZGzg4R4yqprNxnto9kohxqx6qrogtpnUFYpTQ7CJ1vvffgbNfdRy67",
  "key19": "2WV5QYK8c7ixmmPMM6GvfN3gHPmj35Fx57ax1ydoKAPJ9FmRSTQzvsqTaerAzrE9FpjiuC1Gu9NYWkH6ddp91isj",
  "key20": "574hUJphpiZ5veAThD84xSkLxLRmipFU991XG2DoxaFC8EamBE13g3Vhbj97E92FQdmagaV98wV1muAWabzLWyvs",
  "key21": "56F8RXzVxFh1cfxWZjTMMMyCrNQN7cUMcXaT4yLwhR2Vn9ThFqDg1WvsLE7RHccCCGoXVRVq6Y3YuyUKeBRsZY9s",
  "key22": "q9iMqz3nsauidv59qde9RGFahMpXoQfUAMmM3CuL7e9dTsbUrCGpr9YN2k4ny8x4nHJ6kwr8tBrhRUWyGF9w7m6",
  "key23": "5XdYix4EkSNwBhaY9xEs9F66gAZ9KQgXo3d71uqojJxE3CRco2DsxquDN14gg4WGeUz8msKj44TEuSSA79Ckfn2",
  "key24": "5rwRDwyADem5x6tDxtGiNqDcU7VjdRZ2YnyyHcybUy8JrnUZ6PdYYhj6sFWAQEbbcLH5N8QevNBxQSPhaLdjxGtR",
  "key25": "546TERsHWidQ3gGJ89x7Ze9rqE8n8wTamXh4EX8dqGu71xWoFkJhg6Uc34USjnNrH9YRCG9BKirEQtkDs3vN84jY",
  "key26": "X3BH2Tz3sDAgzx8ZpFKRb1LqaZVfY6rK2y1TGB1JqsYpEjJBag78jCQDKsHDfVb7K2KaNHyfN18MVfAJgM9nmfR",
  "key27": "29admi6jFLtdVX8JyCp4imJhQf4PoFtrZ2bVsDupoWvw4qNzd5pf6oMNo2Q3Ueeg4W24zudjNozYSwz8VuZe5oJf",
  "key28": "4UahCSX44jJpByzMbSD5brZam6UxDSbsYC7gzUkgcK7trMkGhGg2KT6YF1GVsDnuHYGBEPkP4dsfNwxFTcv6GiiG",
  "key29": "5SvWw3AKUX5BLLkNqpFcamLX9t66XYeJRABjSywQhEtjRTByHqg6HcprqJqyAYahVXaqvLk68jr795UurWKBQj5p",
  "key30": "p16NqqrHt3My2Pt5XoufSyFzzmN97Yp95LZe4yL8EL2H2e1WSbp3Gg8Soy7Qd9UxX3ueiY1N9JeFV572ub4xhM6",
  "key31": "4tCssr6DTZdMoeYUGf1FzMc82RA31QkSZFxNNzdpRQeidRFctnYE3SZp7eYyWTputxSwLgGmJ4qf7x4NLcUea11G",
  "key32": "4yzpwvwhkrCyU9dMhFi9rZNfCSe3fbASPFgm7xPb67AGxxazCCPZJ7Dnn8LSuWZbN9JNyfKiwz7e9HMZroCFJRXc",
  "key33": "saVHxnPzUK3ZrxiTWLuyibcuxCyLrLQMMdsHurPgSEpT7tePZDE7VQobbuhpjS3Kuo2NpiAFLwQ5ttNbxRJj6PR",
  "key34": "5L4kdjk6AX7M7FAg9AC1pTr81JecgzpyBtCy4k9xp9AqcKn5ewnALsNN94Gmai3vxiqAtf9VPjQut13ujZUUQbZ8",
  "key35": "5AEZ29es3TazaM8dPBhcubHtLN8jBA2r8dveH13n1z1rAwQ5T4b18XaF5BwQqcQYfm7EBvjTifuFEFTnDkVq5Pkh",
  "key36": "2TpEFuxnt4SUpQncTBvvdCD3kNpaLk9PtKhm69W6FeWW6bMA1BxAxf4gMEtXUBmKGXyA3LwS182fCTmuhGLqW339",
  "key37": "5MripzCQz4EezznfQeUNLTvUmxLpAaGAuRqSmCr3e8o33vjtx9gMKFMFnmmUSj22vMS5QvHGmCxdUyaHZPgnWNLc",
  "key38": "39qa27nRvVvqJteYjf6oU2kNGAQ14KfcW9HyNMwcM2S243uKVJheE5H4mC3mieoZ8zGErWj42epjBUdwPeYLzeRL",
  "key39": "5Qsa5xrKc7AYuATxCFWqGskAnUXKcLX1wLnRXa8d6NdBbk8b3R3F13YeUzmEWWUNV97tmWFBhDxdMSbBssmALnNr",
  "key40": "3Kz2tmUd2PvuF4zrqyhByUiHHbbfkhVFWanfGKjbbiFT3QgfAed7dbsmdMkGu2b2SCdWHvBhiNW2N1SqsXDyBw33",
  "key41": "2Aa92Yzb94DzioFgUnbwyFh6P4LGe4B1uFPMtXJPdqXwMSbqikJ4FZdt3kAiV4zk12TWV112UseqzZBjRBMT2aAy"
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
