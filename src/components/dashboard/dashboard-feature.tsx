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
    "5m2RovWRe5oLjri9xNJNkMYrDbo7gXfg6UEWAnShBRBBTejAGpSJdiAYMiux2YphFY2AfdfVarbRUtReV46iK3z9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q1DEmVeqCuwSXZWmwrTBGvVWjqpwshbcTpzpcraT4wtwSgzSsQoAHJ9XPpinHmdRfycRxiWfo92Jim8w74pDcYf",
  "key1": "DrU9zVBQVjUTT8jEV9jU6pLKoJUFXSaz12DuCbKxGsyXy7djBUumLUD95mv1Trr94myS1MWwdhXzCum8fXtLJoN",
  "key2": "M6CQCpwzdt8eM6SsWp3fWcKAMohKbXtJYEhgXBJNxmT3nSYWxMTF3q1D9TUv1Q72AZFDMf5YfAdkrBAu3ANzCig",
  "key3": "4Vf1dWFPvFi4zG87h5TzcaCf6PUp22yYw3G6pVBo4kdihSmf4BKUmBkCNrTLtfHsTB8ZGoqbcvPFB42eS9aUWt8B",
  "key4": "Jgs5STRNaYfxJrz151CxGWGTNQRd5Hfco3KoR7kJ53zsueigbbShnqUStuKnF5SWBpdGEk2GhttQkzdyX56xfpw",
  "key5": "5DLSQg5jAY8Nqmo4dEACKw3nQGUomWA5PyRLpaAoxMQhZbEVQWx6uerUM9rcfgUVH5jPSU1Wcqfsv3PVSoWicMgk",
  "key6": "JM3TmtzKZeqg67g6vwW3XoDxhL9PesU61C3u9wZB1LbS1xKZr3PzcqV7em85b91Wk8tYbPpTFYr8kuSB2Y2NZaT",
  "key7": "2UfnoapRhPv3uLH6t86UgCFGLJ9ur4rtQqGgLsV1FTDJZPfGPHYTU37VQpPNnPAFNQL95Z8jZqHKHyPMY1zoECvF",
  "key8": "GCnQAR7nzhAW7ULck2tm7RperwdrggmviPzEpQF3RmniSLdNRkB5webwtWDN6E1kaRXiMHWe5SnmuFJHhwgBmkB",
  "key9": "4B3iXAWFRF3HT3NZbACfj4RG9ewzR8tz4NtsaBhwA1LtKEHpHmbqrAAriK5Yj1QdfacQaqgtfz5G59o2PaKV9k6q",
  "key10": "4NPEie1tpiYwjGkQUXPxVTFTuv1ZVQfUS7qm8zmSaUb5x8o15qFMh4pDmhJVzkJWkv9uaHkqDReNACfsdSHQWk8Y",
  "key11": "5HEAhWuQ6hZtTeTx917VwdJvQ8jbHRbuL38UdYiBucsWy7u2jyMA2v8ZVhTkLzWpPL2BrUGHX3dsJrdugfb6sxz4",
  "key12": "5WEmkW6oQqUY3Z79s9pmHqRRbygwNzemWSgpnDGAcdnCuVkVTCv7XJS4dVReDkfZFtTkZW8Ss6Mn2hKBumcHq8hC",
  "key13": "2ypGnmsZzvaMaPnzuAGYD6a9aQrPH9z8iEUkzAL5JPuKVZG4MZPAKfYN5iB1xwafYeM8sHjxZZtf2DPDGDmhu28Q",
  "key14": "4r6yoeJUs1Njx6VkXyYfzZvHTYFtCYcMQuiAttpGy2hinfiEnGwMdHTDuf9MmpHFLRwHEFr5BJjKCj8jvJAxb52b",
  "key15": "4jBnmZ8zSUvjRXULYgZfw2JSouURoesboLf3rzeLZzF7X9FqP67PefdrYFt8Xwr5DezP9uWKYGfWYQTtyGuXVxZn",
  "key16": "WtXjapj8DUd6dVLq5Rp5SwYsUxVQCZcCyKQQcue7jXKn3qWy6sDGf8b2oZwHMvtqfJEnEhszMyJRbExRx17sosX",
  "key17": "67T2iyRUF3FMVtecCoxPh7F7Lm4XYBA9KRvRFjYMDUF3Rrg1hUdfwzTDZwdovdHT41u4pDrcuUdQSNEkbe52j4Cu",
  "key18": "3wrzGYqGkorbtdrrKjwcWG8hQ7P8FeUEUE57wwH9NytZ9DK7Uu9kM4MsAeQbW5cdtt1NAerEwJMprFqFoSb9aeWP",
  "key19": "5FWPKsWRURuCfXJwwDVmYE2uosRrg4UzGAA3BK2ou6RxraL8R7Ww2rpjDGjFtB5wHQUshmWtsn9aGLSTHuphW2eo",
  "key20": "2uwvnqqwixojhrfFSjfbXSVr6Lk6Y4kywP6bRj8Fs5h2CPnZvrAYrYwuVVvqLdcacaks2UZUUqevVZaHDhkkeJvv",
  "key21": "3PcfcogotqRnNcbfJkXXp9R6ZSGU1JVfKx31Sw6vBryUW9gQrjVJugxSd45sXE8RJkpL3WtqHjicPBAH3jESP3tf",
  "key22": "38n9eHzisJuTj2pKYZ9PK12Ez68CdMSukyBW99ryRhrC9R27qWjHQUhaC1EYctwQdAfaEArkFzgQhhEiAXv4LFn1",
  "key23": "388nf7fhZVWLdQhQgTF2pZcY2PetUqGfzGmnfLq7LXH5723qR61wgRZdTVYbSDTfTUZfqpGWP9Yk8XvcDSVMcpo3",
  "key24": "4kXRvruaXQgysjHcrQDJNkwzrSTr6vuoGhijTZ1pxM1Hq4HQ598sCAnXkgn2Y99ieEhnY4JM4PcmeThnvkMptfo1",
  "key25": "3kwv1d8ANVLpkvBhpYe4nMzCZ9ast9ksiVvjQnm6huCc3on75rHfxPUPqEbXWPgD3RXFkYpMnTJF4Dinrod6YfWJ",
  "key26": "4eBdrYRiHHJTeTKgcMmXSQNoCzrUjvq5HeCEYvdENqSxG9z2dpJbjK6NnLDChhrr6KrNonNo4cSdQ3yxepA68xdv",
  "key27": "3AChgBf6m7erAwNWEitSwCHpGEDJedrrbj2PuPUnBArSHf94JU9S6hkxBeviYUrFwCHckPqbxHweKJ6t8ab9wysH",
  "key28": "5GT4nLXqNDgWMEpAjG6RNu6sGEaAYJgVwNi7Ftgj5iUP3f682LMLxpKM45LR2cfzWZKea8zo3BMSPAYD9RtUGkE8",
  "key29": "24rPZmpYThCrWDkiA3hQXtYxJzScEuUhrSdAGQrY63G2kRnT2vFeTMedfv4TUAdtXXB3iRVW4k2jbsxxtt9ZjF3w",
  "key30": "2jN6Ldw2rosmfRye2gLVzav5P1Hn8q4Jozz898BfG1JNKddvSmnK3NB5bVzfPtBPKjP5jevB1Kj4D4zSC33Fype9",
  "key31": "5r9SkzQZNT4S46cKGpT4Uzu4F9N63kDn8pPwtJVVrnCwcsftqxxi2foMvRT6pqVuijZGbSaPbqLqib7JUWnMCvHL",
  "key32": "4qtse9bR5HFxJWpH1mSL4NQBtn6uHSwGNth2CtiMVU5puX6UNszN7cgvV132NSEnfxgjx1fFaKNqsrS4BGU4xvum",
  "key33": "3BTYjbxzxQTCrwC13vVSoeeMDNwX1vmzfyo7dcfVrFtYCfyAmDNpSKYiDFEhtBi6ZTrqKBd2Hgrz47fGzZGQPSX1",
  "key34": "38af1uxYBPShpv78mfxuVm9zrPqYtqDAv3N3VdAh6W5LmBFFzAYZwqWcDm579wcJTbP24La1janZfSNsP3U2ZerG",
  "key35": "5etVhNXsTkQ5BpPm6P3xYSW7aYCWbFnBnwV5qrD1CPvPFF8zbYWDrmZ9HwW5s1duDSk5GsdP2prBERPE6SvLLajS",
  "key36": "rzXhJ4HPWhJQxSf6CDmHefdoeyEGHdNNxVWQ3dFtmpN9nM9MRKWbBPBWCyLCkx6gCubjz4RqbBG4Q5JttAskGbe",
  "key37": "42uxSfhAYrgiJ3iQ8TYSYc3nbxoNMaBwKr3DuL5f9KBXwDixw3n4GNHZCPwG9jZoZwJ177nQbowgyPF6mbN6nayC",
  "key38": "58AdLU2jKvhfUzYi4PYoBTideX76TRbQzR7VDsGqvkTCucG17hkczCn8ttkBbiVzdHXW5eiEadLJcB6K8FBrw9og",
  "key39": "5p5jiBu8hZaN4CkRgBiZ7y4NGajQ8HvB3KPSrkEWz5D7UESjfMFJtd4Czro7Xcb1vqKuiaDdQAnFD1XVrvhUiNgY",
  "key40": "66qeB4vKizF11ugLHcyH4iefyRkSeZJ52ijgf2ihvwAD5cTfthkm9V4V8sVNtSbUWY6GNHVsd3155wzMCAwWPNvu"
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
