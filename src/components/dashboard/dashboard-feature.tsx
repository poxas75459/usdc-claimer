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
    "4gtaZu1d9q7cseRLQgjaqKVuZidgbF3PEs4LSgQVnTGzpAdGPSFJ1HHR4fpK7wMsagv4jL65u5kgrdRTYGhbr4hA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qWtbBkStFNsyhiLgRiD9BjYwhmmeJmwxBz8hRFudpqmVFkcF2mXksLNQVzc2nfpZVsBebr14YYTPaxfxHmaizcH",
  "key1": "4z3bSHwmxKgun5o8DmfZWsd9Kvv1S5izqVQ3XhSzRgCbPcmphdQmmpa2vXvnreDJhmGQXCUvm3nfZ3Aed6uwMngY",
  "key2": "Cd4pM62GwTsaKajDmmg9nwumxB91LwNMyhwjKjL2b47yPa2vBozfTwV8qM4xtgYD6k8nrtqj1k9Q9Bnk4T8YXmN",
  "key3": "2BWYBTbPjN9Wby4gyXMwPY3KhmC3tHrJxnSon9i9qsxECyc1LJ4FRXpxHMsRxDW9qwaJtvrKaoxjMPTAJZxtqiGw",
  "key4": "oJ6AK813DsvNGhzGo2DdTU5M6Qq5mdJagGPhJ6wf26zxR9pUX28Brinjpz1Mgav8jkZVmkFDkki9uJdL1VKS866",
  "key5": "4EP46iftBHJD8czPEb2eTM7y5bXx5cdKYJyX4sAzs6yrJmVNXZUNtVrbFpSAVLxUHnK5esA9vzs1D2xHTM1UYZ7H",
  "key6": "4YKdHmv3ghL8H4SbHEViFnuN3Br6UiqDsRjmKfJtwYLpBTJg4YFnA95vgs3RgpbHLH3K5EtHknUrdPMwY7Cng796",
  "key7": "36w8MLKfsfEfRUmTBjgZbwJep4vkMveQSoGnVvrWb19U6nncHMi4KNL4bt8JgVRPA23eaBf2WH5VVun88hHTgyrQ",
  "key8": "5PBoX2jGKxxyjNdk84kdMnxoG1cnHigXaHzxaiJLoyT6366Va15N4WV3RtynR4VcNShzngs3yM3s7Zgtw6uGMDi6",
  "key9": "ZwMRtRmiisjFKG9Pu2nXSGDH2K6ZYjY8ERfY1JwbbBmkZTbtPS4r8aAZoruj9fenhQdvQyQRz2w2FcbSXQb1ep4",
  "key10": "5p3yocCpJFgBbqghMwnihHhVRCe8XqFaCBeEtNzAKQv9oBFzp1SFdZgiveDmQedmpFGwncBRSap8eqHQc4VidV1n",
  "key11": "63xcV5DdWVNRxwqpQhANfpRn2rAJMegEU3ic1xwGsnVrFTEcnr6Gfw2uPJE79zgmjK1EVBUD3L3BeBCEdWoWt9hY",
  "key12": "2gb9o5em92tuvmVFhdhLpAR3zprMLAHL1LFEduEaepoCfmhcE24pCgonrJBN9BGpGzuDDfSRkjsAFJoZxiBHCzTd",
  "key13": "gtNr4HAUaSHY9jGpBdrsjBQrAgDSgf5jBnxjkrLuffC9uMBLfPqKfp1ncSgYcVsntopq53pYbqEW8eojom4Hm7x",
  "key14": "2tLJTf7ANciW6MXXPXQppbiRnLdmXFXhCoWjvUG9bjX5iQxCiJkYHmR2gwewMvihVXoPb8Jsc4i4fyFKt6wvEewH",
  "key15": "5iTDBVUi5WsqCVP69XksLCCzMA2NfxcnfmcXewGyJPZfedBJ7c1SpizqpMUEx5YNKXrwshF2fzzi38juWyygpa2h",
  "key16": "4JhLBQntwgRBKdWBuVWvsARWyNK7DDoVL64WJRg9XksjebYuuTymmNHqxrqL2TsG6TuSYrc1jaMsqV8zZmDvpi6x",
  "key17": "54wrrS6gcpL6TaKZBvSBZvY6U1aDJnjPy6FjLt4KB6d6ZdmVH1HxWRytzEEZaETHtFFyPHn7SbFwuTSrU9qCHKer",
  "key18": "3gKW5GRrUhpW2NBXgcD8WLANFk4QJJU92haZeAgfgvqsFSZ3heSaZMExcZn2TMXFA3J1yedjCdf4DNHxp2mp6CJE",
  "key19": "5nTgVZcwqt9kLuBaAH9cDqQLqcRKRT9L27QvhABTzH7PFt8RdnvcKR2Ny9yFDw8aTrWVCPoV4ApJSRR41PHpRoYf",
  "key20": "aMoL3cAYTADBLhBjGjpwv39cQ1mYQbarQ3hp9DEGXKEMACFe4kzYpCxBtnVzHv5V3aKkrAnWR4z7yeBQyin9Gc4",
  "key21": "5g5Czct3ADyniWDNikE72nphfBR4bU2TFGFqz1NwKEwh1iSUDKZab4GjS1w9yaYUC1nUXBSJXFfvXDxYorZJz8yC",
  "key22": "4Uvfs2Bo3R3kXGwp58FEigg6fkmcFTPhD43Ney89pbUoGXeRdCXhnGCYHCfhX7X5wtxx4xZf8bWut5UbVCkRrE4M",
  "key23": "3x4FmH8ryXtQVmaRUTQDRitFZDG1GsiLUULHXb4bBJyZ3X6TZ9TYKR1j22NBw41T9f9RXx8HBYAXiJcp8RqzDXNB",
  "key24": "53vM6TGFhWxqSppuZinmLRTjsgok3ZTa72KLmotAtTU6P4wTKcD4kXhEMXhiCeaMmfqEcSx9tNQ34pCWGNj3w4ri",
  "key25": "3a9Zqi9WEMscTHN9AofrP7tQxj4eBvcAzqy1GaZcz8xWS3tSpTPajgsq5hZABatTqivNQDTN3b7ANemSrc3AmMUp",
  "key26": "2hMzdapm3r3cv8mVZPvtJ6LmF42vUgxTZrKQsLYK6dWh9FQeh6xNPNki2vLTKTqQcPTmh2YP2EqKSbaRzJRkNbmo",
  "key27": "5LWyyggc4AafWAgRPkmJQFHMduQdodRgjVNjPwjpJJqgzemjF9TjWfhH5KZKMVZQPAmdfhsCeZzq8H4EKYBcmdPk",
  "key28": "bb6iWc6k6LmscSt8PTwAbCtc2Gr3SKN575GoAvf4EVTyWrLYJfes3mXzaQYza73vm6odPYsnZHjXJtrSGVtfZYZ",
  "key29": "3yZiPZraisJty7mJMBJTEJtkpQ1FC7Kh2ZuBTPYnjThnzULdGc2oERh78rpfsKPLcKXaYy96aPuGW26GNGtD5xUy",
  "key30": "5UtScGw1zEwohKc9BEtMJiyd94NVmg3q9oihqH8m4MRtfLs4Dovq1MNve66XfjRoAcCXaFrUe2H95Rkb7L4XuYLG",
  "key31": "4NHKrHAvRRMwXyDDnDsXG483BbeG5mfm8TpRWS2AmSFPYYKfH4uFWDyhxHNLpGiiAX7x9U4ePvyFYbdsrmcXCccA",
  "key32": "58sozEFyoXYZe9FWqaCkFL6ND4bEUy9TofhgZQnwwBRqWc3byRENAbCs1YoJB9aNBtnCjH3gGU2Y23cjnSyyMNxo",
  "key33": "4BBcUc16mkbgbJBJoK6WQ9wRsvgcpUygVB6xby3vwnCVC8KABdAaoP7BVEgucdVGNk496AoFe2iMNVAK41ZMEqW",
  "key34": "2evs1qAgwCMKCNUZAoGiXs9NRjt5kq5pZBt729cQiC88skJ8f5raJPTuZrAnc7EV2HWz34Kitp6Fx137f3inUxhe",
  "key35": "jufghe9tGF1V1AGznNuzP5Q221zWLH8sLdBn1SWJLLUX4JiWrofKXAxrxWit4PGXktoSwjgY25qzBxD4LWurJkn",
  "key36": "2ZAL1PdUhFk5DzB48mhunfbegvGjpnPF9zK3v7a97JFpKzJvPSH2Y5LR1FoGJmCvvFrQkvPtoZXjgdZRxHZGEtiA",
  "key37": "4YnuXweuoJnnU4UDFBRBQ3ZxE98RDZ2h5M2TPzxZSR8q6mkjq37EpHBpKdDFiKRWVj2jNTag8w2iJRkpvfJU96eu",
  "key38": "66eNUrFSCwGcBCNmYreVdAMMTd3QdALAkt75tM7xsxnWgThKvtwoZL23ok1H2a9a6kUyo8JpZTmDpKQsKwvi88Xq",
  "key39": "pmDcHebgCE49xeaKTchjTKBTS8d1M34M4mWSsBhjmpexCkSmKAmdHwetEwqLDiPK3n1phwb8E526hP6j9b6bGaL"
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
