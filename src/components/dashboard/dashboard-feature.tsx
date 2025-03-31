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
    "JxEGM7zsCZuYT9pLmNeNvS81kNhTNFRpayraMVKipjYevfBaakRH7iatqd7bK31d8s1vVjWQKCDAYzy9dVXuXxH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65rxPj5Q4grvR2549PSBtDk9yq8D9TovcQ4CH2GzzzribyL8F97c7RndAgBuiBLz3y1SGeZ48KCeQknoVaRiN6Py",
  "key1": "4zAzoSHz2YwrmKDio5uwXSdLe7nUKcWynVQKPFWmQxffJytwvLNhnShpbvZSXyv2xyYw1e9AzhCmV3Tx9gbUd5AT",
  "key2": "3JzKtMeng86LZJjRYsMyPwgerm3FW4UDHmqWQwMNEoGJhVH22wUGYnBDMjjqFQK3EMUWxcRqyWpXVWte6Y9Cpqz8",
  "key3": "3Wzj3XZj7aw1EfsBwGGMv5Gsxuii8iMGH4VKt6ARpqcdAnbmgGq3bm5eGzJoyWb41cf7tD2XcMnzoMHvJ7rggtvg",
  "key4": "pKzEAy9XsRrYyTzHnhJvvKTaMV456ufEZegHp4WgoSfbd98KWtCdtNkf1QwcKJja2zDtxMuRjmGs5J4RqVnPsvo",
  "key5": "3BRnhtLhAaJVweJVzUywM4ehqESg4cXDWG88iXimJuowWESv46kGoDDu2r6rdqWXp4Hr2ZDt1u1UzW5BkAxy35dD",
  "key6": "P65eyKYJC2midHgAwsyYKJjKKz2kMQgLtXLcioAKeRCZdSzFAxe2Q8RDXAsNtX3J6AKB3zi9aJULD4AttEUNcxp",
  "key7": "3dnaDLAwqnY8FNoRuZ9gK2pVivrebox288ZM5NRGVwuUBFxJ4Dbu7QCH8EjqwCX6ZXEbrgT2LGoK5Gsrdo9BJrMb",
  "key8": "3ebJEpTisiWSkjcu221CUbVRA8yWtUskBC15HHarGi1hnEBDVVTwc4hbNc948itcKbWz5FF9XUd6wjgB9AbRkzCb",
  "key9": "UeARcDiWtByS36XLTi5peMnGYi3dbgK8LTxsi3STW8EwWnQE6VcykPeescyoD9eYuj9t8W7SJuwzQzuC6Y4ZgoL",
  "key10": "LjpEF8wiY71sNLGdJS8AQiaQaBNWXtpUn3teNE4ahA69c8HCdXfPAbpssKhaePjSDbUspKfvnnTycod7CGJEWms",
  "key11": "4dmVLuFHFqvKQmAJKwmkWRRZrHzTVBhh5JoTpsYaLWwNgGYX1BWDhAZ7TfrVnt3YSivjyb52uWaTaofCdSUQ2zZZ",
  "key12": "2rtCRmEyTF1MMAwTuHvvMPhJ2CFpkdD4TuWM9mhS8xKgkmkZBtAVin4huBeERWNMYncDpWxtztMEccQqaUweJZWQ",
  "key13": "4i5w6qubWRa4KgBZD51jEby1ty7wFGp6dweLw5rzjhhZqyJHvUUKA6hweL4JVcbFz9JrRykqnT5GweJZNYfZqrDb",
  "key14": "5ASGvLLmnCkWbV7xVwhRfHa9a6t2NSkJnuceJdwK2fxRsKDKyaMyG9mwWmD6PnsPVcTrc1jMModcxm9GTh3sqGxC",
  "key15": "hN1xGYSgx2a2BkpZQPiSBw6x44WdMRsuXkHpFPfzzqtFSsSVskhRDTvJsMhRB9oymSXFsiGKBaudxQPKJm9i5Gr",
  "key16": "5Vjzi3vP2WTEpaoxGCcUPXALr3ypdyT4a3j92V9UUAVfwryPzL4tQ5RJ9whmpxKHEhgsS3K23fEzQDa6Kikh9CcV",
  "key17": "DEcN7xKekngw2kyFktpVogAc3FbRvLHBd14HntX1o2Fbg7mY6YeQmnaZqXTQYdQEw5LQDVATRx92N6VpJYRMwmx",
  "key18": "3u5TS93Xq49nNAXyqqsWEXovoYLZ5VwPexQ6nYdxGYTU1YHEJRY1WMN7Sub89TVkx7RT1ABH7MfBqPyCfVA7uW8R",
  "key19": "63gxmEMsNGQJatvZzG2oP8LQN6QXkPGym5H54Rf911KtbC7fGGVN9QHjDuqQgQTXeNNa4UfpYSPnoUhU26CXqBQV",
  "key20": "3Nwsfft68VzwjtwErdzaQamCafdvezugi9VsL4EMuJPiqkdn3nTAw2x4W1TRApLHtcjPzwksZ6DF9A9X2XTnFrpE",
  "key21": "3sKEnZvoqbJpMjisun5CAeZH1EpVRLgdab8cZo1F7c9msCxu7CBMcQXeW4vfybDzVQ4941dEg2uFXkoLcoaGawS2",
  "key22": "38zWZZUo9czbjUBWAavBqKUxs1K5N9UQvJjn9iQjYafZj4TXA9NRtXboEFRfGUSx5JN2yPVp4XADFRWvUr1A7MCM",
  "key23": "37rxRAHt3dsuD4QhVtCh6x5qgkWQBvUT6FGhbfTznaFEZXwzY8iBZ3qUKDVv1Au8zwsjur5UJxBd3CNEuL8vUkip",
  "key24": "ehY2wbXroD4KMqcQ6jvq61TSks75zPyHEaUoywYXwFfiy88zsCZHFskeK5Qiu3EDAVstBJwgmyyu22a24WHPeXu",
  "key25": "T2oRbUcYqYnpHKxMjrPPz9C2FfauCCXmfAGXRvVFZFRQu5Bsrr4frkxtg3MRw8Ffj787Xi7vLRYoYGYTDhzqugv",
  "key26": "3hUx2r7JZXhojnoNhLkFKejVLyFYssXod2pE9bjNNHFWKHpxDbixbhneiHtSEhjRnCYchSfBaA23y26Vg3b4sQB4",
  "key27": "ycpwhMbE8YYcXBLBQ6WLqDPX6g2vwNW5Tu8114VZv7QKJsf2zQwBoP5doJRtbwJj976XUbjVkGHKmy4JFZnrQgT",
  "key28": "q3VjZZobtVgRMrbMG6Z5uRhknR56U3do7vMWnjgVNsERVjcx1Ewh8dtBBPVGVWmcFi6uZjSSYmNtPjSMwi2ci6g",
  "key29": "2RiVrLBQqfDnzRD51UdmPFndcPmgSynqwR38dHX3wcs8x6Uxs5bgxQy18FaojjRee52mtf8Q1vCkxWczvj2RPzvH",
  "key30": "5iowW1JSuqVuYH98E2BjmG6prFbBCuic8ZLAf8Y7GDvRjTF3t9ah8oQna73XXAp4WRtKPUnrsdvdy9p2Uj9duu1y",
  "key31": "2zjMwmYPjT8YHXsVwBHGTBU3h9tJSokNammcft8nc2VNFS8q6fpEUJDhDRjkAiyH6XUQtqEPf43KMaCjfi3Gr3zs",
  "key32": "64dyoVMoaWsmuqeT9mUYCvL1dgq4gpCy8n8nxtNjJF9nUAG5h9hB9sNd7e73HsvanAaXwHGXdQ9HtwFSBgxeyXwx",
  "key33": "5UJNTBYydoWAiDm9pyRDSH6Gayjssy48pFceiqHXUdTWX6fhSuhUU3y6kNU5bJjcA8uGxE3gbrromCLvHZY8hptc",
  "key34": "YcY2e2LUJEYPdF8LJvY6n6AKGAFgigPPZwnGp3JvzoxYEG7wY4DNsyDWsymBb8UvA3WBYtx7YqjBqYQkhmcWrXM",
  "key35": "4MLeyPjUXixR316az2EwpiMqFx1qAuKpdcse988MHcBgvT6tdveyAUgTusLmWAXxK8KqnFZUTwLMShN4NKpNVKKc",
  "key36": "4Ma5s73vGbwmR6ErWL3C9WxLo4SUnkWMUzmU721gtKhZZ7DByvnKFuVtCsbu7KbmZ8H4aK4qgqMRzgZTL59aMu5o",
  "key37": "bhuAn4goHnJmxGBZKYCQnjfLP3NaYNkLMYWWP6FcyftaNoZbMcJQg7NAUienS88gp4JsQQ1bZKdpAC6hspuXWJz",
  "key38": "5mYoLQ96aSF3XPZfi5Aq2mKBkQ6vX2nd8TbvTisZCJATkzHLcEEAWbUvA8Z9q1qWUzoXWZ8kWNxNfYP2mtbo1CyD",
  "key39": "5SbGfYMYae9nRaansEsLdtWdZM2woaAyms1VNFNrFFitfESuTNe7ewCK9hy7uAqENvbkfy4T8ypM7KkjvFXcnzCL",
  "key40": "3UM6XBp19V8vSBdHfAQZBG8LtR1SuDsa4sVeePryzNBG1iSye6dMbHnihcJ2V4vDL7poKujo6H8p34XmCtwDnaKb",
  "key41": "5jkgTwrpWreeg4gdrxUi2oPForFDcCNisDazXNHmCfhxz6pp5sUp8ke8tQydpbQqVLfTm771FuQokV13cE7jPtdS"
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
