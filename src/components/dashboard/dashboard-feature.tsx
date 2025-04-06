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
    "vZ35EXbNhzKN5DwZu2L3bFjbzHVmTzBQ7d3eB1sx7WPtkYNPpNoN5Tn6pNvt91TbtSJzUFqh1H9Jpwm8gAZoE34"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39cA1hfDeGPbgatNG6Keh3SSiZi4Xg9KRpfRMqNca8gH1H22a5NByECRp5zfEg4QtpJJv9HCFVs1v5PqSozQnfxN",
  "key1": "3nhh18JRRrrLJPv3dGy1k9edjKqwLwRATF4jkiag6HtgM6pZkRrm1CDXDFtgqXqJREFoYtf7fUS2QiZp1UcEMbUo",
  "key2": "3Ld22Q1jgxR6BCnPTDKELWRDdpTXVEDCpf3BRyHJ9ZCytvnkuoVwtv6TPssvtYHownEC811oPNjoFcF4zqh1iQNo",
  "key3": "sygqDs9kAc44k6Lup8MR5qLNdjJZEHdjSpnPErM4chqd6HgHFnxriLy1kWa2a14VeeDZmEiKhVUZJwshcFctYbH",
  "key4": "qyUdpsrA1sirkCeoPjuF4p4bqsXYC2gYN1WVSzghLGmdzBa2HRC1suo6YQbJ2oZoYYncQcLAz7tTWb9X8gbtTF9",
  "key5": "629ZSvB3s9XyxvuiTLQCmMcXkJ9tf1qhUN2AcAKWuvvmgMFDmw14b7wD7PBaWVHF3s1JuiioF237C38v9Tfex67D",
  "key6": "58F8KiXyAijPzrABxbSeRkyUk4bUd5VyhiMp8uuskb8vFmhqjaWEyMrRgMBurV6rVFNxQdiRd6tJiLpLdokJHzY2",
  "key7": "2qUgmNih1YZKtmyTd7YntbawEgGPsAmjo8c43ACENGWiRAM5P8FdpjGh4enbcn2ztxVEaA7xn8JFhf4RXt3YCePN",
  "key8": "4cS55bTtnMREGQDqQtUxnehbXuwKFEbTEcMDBZ8dLs95beKkoCch4g8mP9XphUS4PYm7YgEGSn4TYnwN8apP14ty",
  "key9": "Nai37BQP6ipdk4oKEex5NAgmx89kLj7sM9mgyRupUqH6Xxbs4etSCB5UZPsYzHydDuonhKSXEPaUWtjbSJZzR8m",
  "key10": "BRZQxHUf4P4bZExCibmY86WsJ7NM4zSe6J7qZo3HdX5yBXqjaKCoGQNkLNE7QGQ7ykSoRZ5zjcjDLL2ApRuTDJf",
  "key11": "52e3gvLCVrTFHSiTVdPMTbmb5q8LW2kaFgQr36hvcdhwTP8FnQxKJrirBenLcM1tp8NjrB4fYUHe2zJ4bCtH7ajB",
  "key12": "45vgSFWNp4NDFnksqU5MUcpZ9x8Lk45R7Ey7DVKcGV3JduoGf3Sqy7C6RAe5GQME9zYHr3WFY2ZGj55vUQfk63bw",
  "key13": "2dnMFGqLuSJwb6gjtWP7ghQrnkZRig6kR4n6bPZm8TxcHgnNioKtGBpx4Mk4gxxFu4UkV1BJYKkNgQYfeuiyBpQ8",
  "key14": "5iKKh6qgZWwXnMT564VUUTsH73DKT2rDVyaYaUxMYBSTnAhoEmaGnW69T9ZoyiniBVfJ997pijSTqJN6Kqm6iVHU",
  "key15": "2659nEq7BXvoPpb75zEFydk47PoJzCbmUB1T6YHjrq5k4dSiAb3v8oLrmMH1bbdhxceKFZ3yP1qLWqJqFTYfNbQt",
  "key16": "5Zic4rXLuZ6V3vssdykoRLmAtMubBxRHNGgA3f7oGNZpN7ZCrDCgAHLk8ey37sNyCeNceUSFCoRXeAGBXKfAs1gB",
  "key17": "2uUstRsgUcEud14EA9YVvG2XHGjHwi3Gi1EP7StPx8oNNLs7iitUm5sykfuyUeBofgvcxEs2AJMhWDft7Ee4rKQh",
  "key18": "4AspTHNaitEAreKvAZkR3Ae2LcJRVHackCL8brQDHB1dJaEHtEcfj7RreVNQnRAXwedPYXeRHH4Z2fT7XUM5kUB",
  "key19": "46F45W7DKyfGd7sazc5Nf18BxXeo3XThxtY7ERetBkPCk3pRS2o4GKQqSTsrUwQFLV81tKy97LQgjVVrGe2UefEh",
  "key20": "2Jw77NdVuo6o7q9Pi9PHzjTnL6UmdpjK2J93BshG9RUyAC5wLArwg2zCmR9yRNGRU2Nm6tJie7snQy3hQU38iQfM",
  "key21": "5EiJRz99tuNwSvc1cbKguwk66itLVge1YidM5ZJbw1ZbMo1EAAmAEKGEdx9TrJEG6QjbKCJknGCj6X274WnJUXdc",
  "key22": "5ufM8fyVjQQAd94whz4cGUwojNctK93ohnTDwqfevduRYGQJ86GXekvhS23MtaXAzWs3aS8Bm94YrTxTz9u9Tk3D",
  "key23": "3JLSL8pJ2C9mYY8kFyV5JS1qhe16iPe2VgUCf3TCqqN6ZGVSxXLktUrcVjHbvTQDWr9or7EJvPiadQrj186HR9BW",
  "key24": "4rkTvrJLDvbdsveTDBhacJYTXj9fzCCMfMF2nKDXegnXw32XgpZpsGFJyNYRt9Vdr5hz59DUqbNsrRjm558Git6k",
  "key25": "3NnneWRyjEvA3dUME5LJkXD6nWS6xo68aha2sMrsL5QM7f3QehM9rqt5NZrLNr39LVNPajKDjc7hHepnje5hHj7e",
  "key26": "5cpcoeqAaVQ13ug9bSyiK8RQH3ZUgQ7NLtuNjpaZKs1CGYd6PzfTobfibgwBHctomAxYLWZ71KB9VG716hGKzVow",
  "key27": "2DasKrcKGqg1MjW74qoodfm1GDjLA1m4PcJXxA4Hri6BtBJpJH1k2KsgBmrypV5nQyxqqRRrAVenMQjfiVSyYWBT",
  "key28": "4R1ZTWPZZNwaZAEX96ftQ9RgXmYeteW5fCJADG1dDC5EbaFHHsEaXP69U5FNUDHRtauWbkeEtqHXzTSFEVtRUxLj",
  "key29": "3tGLztJLEb5V2mhRwLwJCA6N38yapxMR5wfPE66JsStAkCUDgo4k6CJHTagUGYgRM3sJCGif7ZVBgBm3DFoox6dG",
  "key30": "56cg9WxfgBEDNfqB5E5Y5vvZZ4nHzLiGEtfSNgeJi4ZsnwN16pq8MTmxJgaM5gbQ1hWGkkoBYGeSQ4NiCV5T9o2S",
  "key31": "5JmFD8vZ5DTn9h6L4kBUT1k3xY9tmVbp8XNtrE4gBHgAxwdJKTjFnsaJvdx8bH5tJj7Wo4NagEzTrntAc2JXEsx1",
  "key32": "3QRs6Gqs38e7MK2zTQntt82Zpx3oNKeCN1VKurGyYTwiW2Q1vd3tMdLyP9RKJ3KMtQysMP8pFuLYz4nSjRvpBAPQ",
  "key33": "2FV6UztgS8AhqkpoJa8BaskWJiuwafi9fsqQvHfNyLKbW4QfJyzr8LY43Fmbj1DH34Xr2RzmxtmhcqFnHePNsmKi",
  "key34": "4KpceeTk9JBqL4gDvLHpAehWntp6SiDD9qD7M5DAqR6k78qWQ1THAF8jV7AkaXAvsy8KXBtNAMNZ3nW9L2GzvZcG",
  "key35": "3iN3kZpL7gje6Fmg5W1iCZBgLRydad23YKnwVFMvaJXv9tjKpGevf8LPWPMvdWAduUX9SMjxNg4VWmri72kMBMLE"
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
