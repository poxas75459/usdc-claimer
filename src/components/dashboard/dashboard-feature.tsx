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
    "2EnRdUVMoRLPzEPenKSQ1pT4GL95j2H1acHnj9yXx3coTXnnrdKWsqrWQTaYBGBfdBZ1XVp8x9BpsaMa3TWHzy4R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SSEFM8hf5w3n4nSYbiyotgkqk5WJ3x86VWoN5FrQTn6sehfXMJuBbb2rJx8v6hRqZfSRw5QT5TMnuf9tiGp7ZC6",
  "key1": "4aMS7dGF8MJKGoDQfZYYr3xnYfdrSWWDmCe5FoeMuDkpWouKS5WPp7GvVsgT8J3Ez9H3LUFdTyqzByfkCTsw7b68",
  "key2": "5vCzmQEkUEoQawtRgG8HUpyvu321Lq4KXHoYUKwubk55fgnbJ4PC5SYJ2NoBbAnYWG2XHWrAV6ixs7anCKqRBxZp",
  "key3": "37bpVXvviotCJkdspNzDH9HMfSoJ86UH5epVt5H9RmCvdBdWhZZULfWmFW9ALNjVogVJEtyPQFxwUDKBF9Yycar9",
  "key4": "UndRC3ijYzLKLiLaLmZS9HkqMq9fz7CPPemm6MDHdM7N6vodTedRCia2ETZRYGRVtvrnxBSkH1o2KKxAb2nxvVk",
  "key5": "5mcnvyjBaXeUsgHjQnVXSYJbMmurDxUg37U4ZzgoBRAVSMPHHiHSg3eTS7XRnzcF9sm225afD9Tx2rptaXaVcMRk",
  "key6": "58LhwKzSKuwWTiJ1xD5JySLudziEuB9AGH5YBboYaBiHpTSAWU4JNagjjcXwgVmV4Doew9Kd6YbFe4Bj28bFHwc8",
  "key7": "5ry8XR1FtTsWsLZoVs28Ky1ypYrfmhLxcTSBxFYCKjfPQBBHt6zBSNfjARzQYQVtTUXCwzJdB41Y8jHoQpvoktyt",
  "key8": "4HqzFij4nML5ew9gTHZ1DTzSnzpK836Q464JnhNDw7c6wK69eLT78CSBtFKnwEFTMoHEdCj6V2C9b715WdfhDeB5",
  "key9": "5Ay878AaXWRtSVrVtf2NezfY215eRKDwc1p7J9BHep5ntfK19pdyVs25bhVhPumJ4xDmykHWZ77ZuRotr4zQeAVg",
  "key10": "ZYqXaVtSo9cAPDARwPQYXSDceeXkA8FhEsAFw5BZjLgXZzSBozvPcwyZWESH6RRfapRZAk4MMmD9zC5cYgEvoeS",
  "key11": "3vMzdjf4pv3zqwky16Wd9ZxqgstjT157XGikX4fwPRfskfFvr6eZHsDpdiB7RHKK65VKstYu95P5bCpjqVh7H71x",
  "key12": "3v1ZrHZwdMgKknJk5R1aMMX6bUmsGYziAe8ppyiBseCnLoTP3Aq4jhgwNei2Ux3ZV35fUxaZJSMFjzpw1rdgw74c",
  "key13": "4hSttPEfsRreWzbgoqfsvhB6xGj6ELuN1Vw3xAxSs4x6FsLVr8f3CpykTBXGf5dbi3rqYUAPVEghHyERky1d8sMx",
  "key14": "SKpY47JDHTKr4U8DDXBohsVKkTLsu4jQPmAtQuxHrTRfBG4a59F68wkmXx3tULc2ryMV6HxMGmtcpMpJD751sUh",
  "key15": "4skALsBcUtHm67mE5cx4zsfbvh7JjoLHoMWZv3o4qdZNqx1yGbWYcHXop6yuXGw8FpwY6sQxjnwPofw7PF1xLMQ1",
  "key16": "2mutFi8eYEoXBPZUTyK2oHfTgiNp4aAg4xgABddXrxr7jtHd2y7jMjpFKdxAUSfSa947jXnH2DkeQqKFD9Z3eo4Y",
  "key17": "XgcK6qgUJCyjz5gBygcwHJoJj7Q8iEaTXoonaz8aKr2owykycsfTX5f9Fmjq3ezjzRnpwxAaELqMghzW5T1qwUB",
  "key18": "4jXyioH572gbBdAryRCY7rysNzYgP7gy8e7J3yNmjsPF3gX8ShcAr8xPFCSYDkQjbDN5ynsLp5aprUmWL5isnKne",
  "key19": "5tDv8hgqhjQiV5FRknN3WEA3tsp3FtRarHBUTQrgQgY77ksSdyPGBjthPCfvD1R1hj4Lbuswr89cLRQNe4WW4WwF",
  "key20": "3pGd2Xh6ew3AX5bcvdMXb92kxtRa3vwaC5HLcstYBxUwfH1WoDtaZUwZcfS5vKfoq1vPzn2PFQHBcMJRkr2Gnp8d",
  "key21": "dUMTGtVWAeb6bZ2heYTFRH8dBpGxXfTgJimuD4qEvkjLHRzNVJyh1AWwXKRtPL7HjxBHEKGkzXVZggDt9uUPfCE",
  "key22": "3qvEDRL9YngFfZUsGVVpb94TZejwGCZBpxC9hyGAvf2CqCiUjauXKNHCXv3MZsfLNPgdtDPtvRRw7KeEzA1xgtWX",
  "key23": "3fUwXJbfwSU5bB8R1FHiPyjax5dQ23JLRFDyfGyG6rRVcG8X6VAifAWPwkv78AKLTju65aES6gqzngdEB1aaKPA4",
  "key24": "3voL4aNBpQwCxBbu1quhSZC6snGndhoQFYb2PknFDEs6A1VdtCYP6Qg3XJVNYsHKgrYDktkggzL42QtYjWM1TiCj",
  "key25": "2ToSueYo677UTzmEvgNkBPVSnmeRszKoaUuKQ8i5D5FLCH6TuHbMvqb3UU9HXEYSxnubuS5tB3sJmM4cTWgwJo16",
  "key26": "CrBjytaXUa1Ws2JRB6kEW3G3w7FiXDa3yQesh6XxXjoEgWFvC3TgQLX69SK5QkXKZJeQ9HRjvLGGFARGfSo3rxJ",
  "key27": "43oAprzx7JEnDzQqSGNCFiGXzAfUPz3hDbwNWUKN8k8NezNfgtASjc1zC2UZviC7G1fypMcUbvmMbAqm51YUjdFg",
  "key28": "352qnCvt6h6eWXmJYybuByEg4hrLFVPNbzB6ZqMfHxrYWgFjYTipDKR2qLLnMcWmkmnY9Smx7iYhMtJrb2NLde8w",
  "key29": "4P41dx3UTTozV4Dos4smYCd2GRUniUeUpfquyg9kpD8KVDpWPx6opzArBHHryBBFnpzHpfcRaF8gX1tzg3THZcQk",
  "key30": "5WBuuq3dJrgerUDsJeai93DhZwqg98t59mVf9CdNTGa1siuaFKasq5QLCgsreBz4xqHFkbesQ6LqxsH68DPnQmuj",
  "key31": "5wJJyvPYpR2zT6647ynxbaeyWjKRwMS1UrKK13DcWmHswuTFvXkUdpxAkMuGvyXcJ6qodD8v9vPcwCFTQ6JFysLE",
  "key32": "4YnpiEzFmBseeLynEyvdsDAWgY4GBY1iQv98UZBBdBajNuocybs4J4NJWVVioHhYhkhAuyJtmhZCd85ZPdTMc7hc",
  "key33": "2so7TaEhg64vXQCPLeGVVZ4ms2ZMGMASNXRa5XJpxPYbF5BwHof4gbwYE9g3UBXUrS3BhAcUhFyiAnLFx7Ybzu6q",
  "key34": "5kM81cGEzLFidkvsPe7FGiHBVcmfusroZjtU45PTKSACEqQNGZz166grH2a8FRwDgXkpPeYDTauMQWn3PcsQXEGa",
  "key35": "29xsBVjtnBkJhrHRTSAfVGiVSq98Y8u2sGrnNkMiAyJeGJoqk3bGxXPAWsBZkmMQgDL2KV2somBNaYDWzjHqvCrx",
  "key36": "5z2MWPJgmRhnAbE68UxYqZs5HqyN7obyR5arnQeiWv2GTNshbCn1R73gGtQnvSvnq4MwG49DyWu83fMgURiDPdwL",
  "key37": "mWrkb3GWQA6XpLAFD59vS3SYcd4iWh4QjkV8NRt36WmRWjwa7aJtZpFtkn9rvvTdaFfmH1f4QvhsWz93dZKEm4t",
  "key38": "5d8QkTNHgLX7BGbE9aNeFYWJnV2dzvjX7i89YjJCCDVoLqLmTeUiWWr9d8q4WwwPgq6QdbYTU8cSVARH9VyiD4bX",
  "key39": "3KhXg6dgbpiALzsmvdbsVTubyWp63QduhXy8XYo1fpgdMjj8L6KtmWN6SUi2CwahRTwTYtcS4Jc2x3r1kZTUQg6X"
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
