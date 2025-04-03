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
    "5f2BFbqMKwiu5h9K3ystaok22nSczy3keKr6Y3Y6XTPv1JgoWSCbbSAzSmdZAQJ5937zrWdLVvF726bKFKnBPM6d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nDaK4664o9MQY6oHCLjxt39BkiydTt9DiXJ2bS7zXnkGgAff8MQraV6SuEYXhTykx1p18PjBjg44VR3TSNtiKNj",
  "key1": "2eQgD2qrKecXLfKoM96h1seSqptPSrHXpref4RHPwzCquWatjNHCpmBspddD5uXSJWfiZPduhE9HeaLVVcG12YSA",
  "key2": "5kbTELjodp2QLVihzSQoWsBbbQZRS3Y9Yw6Dn9cHsdpcuTHspjHQWmvc5wDgJo6wnS3ZP6h5SzTDnZwzxpkkdTJr",
  "key3": "54cQiRD4BeNPs7j6qL7drkRLnqDGrh9Whc2s9cNDYSC25R27WepF36XYRKL9pxYt9RfG9BEMJZsKxDSTirKqiRC9",
  "key4": "2ULPGBAhi84EUZTcs2PugQsjeA1vVovJyRjSDmXjHojZF12X2cFtC5TABPQZyfhJN14vTmB6iCTJ5KNh3Jhr8sdf",
  "key5": "4iTmrTqT31ogtQ6Xt1e6a5NN6Cyf2A4HJmm2kQ5Y6AJMoeYgTDSjtoRjFVUjM3nSVQxYmuzPPRE78zcoFoL7XgYR",
  "key6": "21BSEN9n3EVsQ2AKFwTVJKikg7hFrF8wT6WJuxR9Pvu1K6QN3YF45wLMhzrZYXh6LmHRatC7eusWGUmnEviGwfCD",
  "key7": "CQ2pfN2FLnUxDudJdAfyfAqqGSJ4mGR2QYkCKDkapvdYvQewvkSMCwso25XEyyjuqsNdWhcipmCnwG5gkm5t4XZ",
  "key8": "2bNDv5x7XTSSchmTPojuEH1R1qCcwsSdvQCEuDkDadzcadrkBNX7UUNdR7c7XdmpovrJdLXFLVfwAVNEYVsXfLad",
  "key9": "2Dn7yYXuAKEaTGvXS475jecZZcXQhxk6L6JE6QLvV5u9AJRqbN6gmGBSA6uuuBugTXpmB7Di1giHUbWPEfzMjukT",
  "key10": "5BwRUoBW2KDkhJQx1Ht2fg7s2BEBHiu1dHBX8CgULP4WS59i3y1VchRvW6FyLYeRfwZQbURg1xJQrKoyQ4eQcY5m",
  "key11": "3h2HEadSkFDa6GF5wpZHxSxrFb1DU53yFpzfP12TNciL7Veo1QRw8nhFMR4Bv44P49vW9NwjcZD93UfEtQgZZ9ci",
  "key12": "5GuiqqRwMtpqFcmHzSuGs27T6j6qDvrk64dXCYVgRvTVYS2wfkWhFEeKQQoGjEgt3DS49CAFEkvCcSMSGfUDsRcn",
  "key13": "pmCLmcMRABDJWaBCo82uRa5iM8R2kjc8pNToCA2mbpgaGv3HYgeJ8HGhaDsNWcEFsGPceAyPwqFuK2ceAxkGzKm",
  "key14": "4WTREsK4ZBAMWWEF2i3KZ35knbBLaXmhDKuXBG1eRvzDe9udZLePqiN2s2iyYQJsd88pBswkj8opK9twXSr76G2F",
  "key15": "5T2WfCWMY3JHxw5dq3QhSUK57Xnnq9ijKY7yhs5ZGfq7DzdKVi5odDVW33DyG5iADAihJSAewW4qmFBBmq8WwK5G",
  "key16": "2H4vXPmEiGpKNcHtUdmUgVoUaRocSwDNLXzAqR2xDypGTCoweBDWYY3ntwzGmfEtNqVjMp36BumbdjwGxCkCbjJQ",
  "key17": "5ENy6JnUgJ7RBVG7cDbZtyMbUpHfGVa3dWYaPyKovuoyXUjNExWRu3jWLm4ajjkjfQH5Gju93ehkTMFELPB7XueP",
  "key18": "DxjumAKnH83QPgUWzjNBjPut4nvMTyToxPu76tmCpBM4wnoC2XKdFFKC7D4AxhgYHFa6Yq5L5NeQUeU8AoZmLQS",
  "key19": "5sPugE45joE9Xg1VUtaFZETGZkjSxsPtp4MYmGRTQS21vRfZs8XRtwZpi5yv5c8DwFTqJ3tV4LCQYxXvX8BiwRsR",
  "key20": "nugS4hzjRhBboMLSQdhxY96XdXQJS4Monnsa4qQvJdyN2agvtaeNpA5zhCS2gAYX3V5921VtcRL4SVmH3KaMcmu",
  "key21": "4tWZ25Ad4Bp2FfdqfdtBLNEezxH9nto1DAVPswbE1H7it7BPdNaxbdFqPpmua4nGeXjTco1CxXNLkb4NomqV5MPp",
  "key22": "63rjJyWZ4RtM1pFLMwwcuA1K9grrkjzv59mkvXfWLe3LZ9e6oYW9YpMrZHBsTGMVPMwhf8bzPZ9b6XypeP95ujPQ",
  "key23": "2UVEoxbRUCw8Z7yFfkx9qiBx6dJphZfSzAjim9HDTRMwBnw6mfhuND36zwGtiachM4u7DWAr69B4KropDVYTK1ro",
  "key24": "4ScxZSjkAVGhVgxboGEB6rcdEwN1mGGJ5pHhuSAeQCzCLuZh5U4JViuJHCR8jpzJmKmfegk36kjCPiJ1CYWDQiQT",
  "key25": "cfV9eDPSoNFn7NEyEmY2GknsqzyCYfswiY81w36v35hQWLwms8GYpRqGp4HPkjzW145juTz1AhErGerCkLbezuo",
  "key26": "5Eg5DUCgpZawE1TvZijH276EEtiVoyNizBVLh2A2NYNrCkgVFUHR2nvQEYqbeu2TMg8vjXLGjQ5HC8XAcGtLynSo",
  "key27": "2N1vE9xr9TKCCMBbM6qCiYi1J9VvYeVUqLTpw6tD2DPvvvNEBXQik4Pp3UUksGqPPgDzQ1bZz39iMHpGFWzJKEyr",
  "key28": "4Gkif2bgAmfGK8HLnmHDaVbZrTuBUi4pwuiBHefTPq72CfVCMQxb1mPaqr4sFWGARtnhJ1sVVxoN18K5kaA5Thay",
  "key29": "3xH7AcgrFVZDKpy44g18kwRm77ckpehbjFiDfGdCX1JvHNRoCvm76QdUNEA2et8vWMbjc6LWr8XxLoiD2XE3onWN",
  "key30": "3eRbKWjbYxEQbcLBeXJ4qGQQWUSZMm8u6L6dDGnwERAywiw886HnYe4mpj4z9hEdmmFGWqZEEVyuh4hcXekieoHr",
  "key31": "5VqbaD15WF2JKSaS2sB5DbwwQfwzRLKseeeL5SpoudyLviNB6wEhqvbJ8672cLgTmJi7ysCzDzsyVjVN8zDSCNg1",
  "key32": "4QhhoBQA9yo4jU88Rm9CkTjyLCHt4vgZJimGzRRxSpMXXEs9Q8TJrf4ZcfRVTLB1hyN2tMDc1bcyfBSSd8HuczYT",
  "key33": "DChUUF6ZhVnXsAtZZNeC4sADfUN15Pg52gfSY9y4Xv9U44m9Rrts2wupTDvJPU8MQGpgNK9dGNgmksEgKfN8twS"
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
