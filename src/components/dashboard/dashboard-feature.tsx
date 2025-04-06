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
    "35dFTfrj8YqRK664KJTWkDp4ESB5JDQy8KTS52CwcYPuYh9gP756agCg14bvqKo2MdYPadiK5wKXbrGtkxLRz5rV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H19AdFYk7LGKmWq6pshpcPKWbABDAUjTyrqSCfWy78A7GVyE9zFYa1KpC7xqoAdvKJ3QWi9yBWQfAnECBcMAjCz",
  "key1": "2pg5sWzmmvU63wZkZMreS6VESsPoCHP8tJdpJQHk51wDJ49uYPERZwbPyXeycDEFK4ApYtLZnZmQV8biDMQuN6kn",
  "key2": "4CYFadLewP7b1iwqkxCFxpSEZoQ4JLsgkRLVwgdG22kqG2zwnE1Q9uaMENXEZdr7FaPjHVmJijTDwmD87qELi5mu",
  "key3": "4ien1fffCZxUvYFnoS8oC95Rwpt5pPpBmoMqomZAan9Pz3Rym5iFsKf7Q9TUXRZ5PeniXDMZEZqPYjVBFxS1Xdis",
  "key4": "2oiPyk9F6C9HtgpHQx4AytuBJvScJ1TPrXWoWYRz4CyNiaUycdxi8vzNUvRK5qQtRj71K7V2rPuKND6tgfkMjCZL",
  "key5": "a4o7uudmzaZeEEHbUjYwFQ1KFTdpz272qtogh6e21s6NfNyB8rsM8mrWCkCvdaRENtXQ6aNVNN6eAJWt6VnwfnG",
  "key6": "4uyKj4MLAYA6QvKVr6EWU8zkgUof56yzCfPgqzz4AmYQabaaXzZYXb5ndzt6K9XisrZcPEdgD3GF2rBH7PyCSMsa",
  "key7": "5tXc8Lcu3QgNWBVHzNkSkgQ5wg3Q8U8qhWV68fSECGQKzA22LJNCMSNQjrFcLphUEq3UfWs7pMnYWhS3AWDA4RsJ",
  "key8": "5VJqXvv4MqCsoPavnUM6KZU5u9rLbTboyPM2wwTym5xJEioMKA9Xo6o5d3QsyhnmBKBCb9qHo4UVsmYP3jv9NiNf",
  "key9": "2hgh11vDc6vCtDpti1hGdyXfm76D3G1K7NPUu6hWwvBdNUeNZ8V8ZUP8XhaqfCpj9sEiRZjfrCnk1tUei7cfTAgc",
  "key10": "uv2RLrEoApXoDdQcrbEYeZzoQezSwEZG8yXJsFeJoWWwkc4AYBWLnENB9kGsKvvcFK21uY9aij5pcdsxBbjTMqM",
  "key11": "4UDvsHMWwyT5cqAnDNxHUqwtQ4qxJxaK2Q8aENaKaoK1pJ1oTjZipfA4TtZbHkhQKCE1L5MgaPR663B7TPGns6UQ",
  "key12": "4Wwq9AwuKRGvmGyaGVPhnep7w9vJfAj7144SRz3ukD2CGNpK6c9CupCnPbVgPWpD2ktRbZ5btnHD4BuU2wge7HwC",
  "key13": "2N3iX2UPdtiYUoaDyKmfup8MfPNKxRutr7bZysTTXD1VXeUwbTHZHpdv6kePeJru9p7nwNtN5tt8TP93rigPVG6d",
  "key14": "bPNLU4L7xbSweutoWW5MWWBcaxGd85nku9ofqamscWoYnkqWJ5DQiBkrKyW9s3D1iFVEjHGNVouNmq5GKr8dHDu",
  "key15": "3bbugmRCBNJBuhCjJg7Edhe2oMiwjY42WEBwyFGSreByUVqJnPH1s7jmjet46siSr9kjaGJhTKjTSjzr7F3weayA",
  "key16": "61Z2Yx2wxxjpTJkfLehXwnmtcER5aHRcj3byCjoyx8fvQMtV1Fg62jbrVooCepoAducGsvFbTFiCasQCkNp86qE7",
  "key17": "3hzvzmtv3EvDgFGFXfhsi7g5unw2eCQnivWuQUTYMWc3yXxXJ4iNjf4VZLi1bbWX1sWKMKJ6G3vsp5vUpmNhdAVj",
  "key18": "ixfyinL4AANPdfdA7tK7R5HMCLDEmB86T5SsBBERY5dEPgZcryrzrLJMsS8RM9J1i35ybb98xHX7wvTPcRLVRkj",
  "key19": "4sSa5coHX4JqAHGbw4iCMhHNfTcBFZXvvsFGfUJZ4RCCt9pjHZJLqR36QXsPBCidYYpwiUrZXtTd2BmEybW72Pq7",
  "key20": "4Q1SpqXb3D1vDXj8GXMjAHZo6BFio4z2MoKm8FF9MSfn8TzAicw3gi8PJRi6E8UaedXCgR5bsgSfWL6hryGPMGLZ",
  "key21": "2Y6PS1gzZKMiDdd3FhmPFkiVjZXA42DXQa2oAJoEkM21AnCAvaq2bHrjYCydx1JLQjtfFMxP29Kn1YMCSUZrj1r4",
  "key22": "3HT22jcSEcneWeiPzdNA5DUkK3YaJDiKcdSwYt7sR8dF2oEmp3MdjzhULmhfYENnCTDmwhQYqmpFwpzFRWuqvttx",
  "key23": "3c2QcajXctroxUDu1DsFV2PxuBPmNXPj2v1xWNhP9sBhpHbDpanfkbo3TcqtN3cMrRzoZwD1DUYiDsGVsmswcncN",
  "key24": "nUHR8reg8EBwYbfU5nPPaUtJCgKoTSxbQTvbaCAHDu8B1LtSvjofm8NqRoeTQgMWa9TxcwJCGm1qRhvWFDHph2Z",
  "key25": "3mMEeXykYxRfNpLqJ2yz9Zw9Y5zhm733ojbWxvkFXyC3EkHKQSXmWqckRcA6LLGgmitxiNb4juvPNDUBGWyjEU9M",
  "key26": "64LSX5xkNMnKz3RUsY8gD3gdcyD4isx9HcZQjDtEDgdbmL7xtNvA4YZ1Qe6sWsSc316Vg31Dsa7WGUBnayFMjWwK",
  "key27": "4XWA7GigwcvEjJ9SM2NRQjtovhRDnkuAkD4DMuYehUk352QYxe4yUURPwrP7oADC8UJ59ESUbS14FXxfHFjh3Ueu",
  "key28": "tNmnCiVFe6KfRXBZkEE9i55frrUTM7M7s8SyFACvSYYAwApoqJ3fRHZNmUzGaeifYs6czASZHF9Kzjr2vu4bhB3",
  "key29": "3x3E1HWmzaSn6oBsBq7aUeqzqyCwiepWUyA3RkQVByC2Bo4PtMiV4wSNuDFu7uoEpbCWsAzpfn36VvDDSpBDd3nm",
  "key30": "3kqaLK9g8AySoQVydYyJ9fPckuvrBYCTBSm2BYRCViS4bfCaC2gf912DM3buUhtApBhn2Z9RFLjZr47R4tf7vvRe",
  "key31": "4U2Sv2im7s91XQ89SghTVnJ9k3WmNccnT6QbbhjsSiypjnifsmoZzbYZuVLqnAHKpoQkzDF1K4Ku4xsVUoA9vVYq",
  "key32": "5geNjt4bCb7VAigrifhNVYTwmWz2jMEmiSRhQJbBBSKSQhdBaTSC31jrRQ63ZDP2Q4cp7gCGBTtyURsevo37yQMv",
  "key33": "2bk4fm41wUxQqYpmsdxbMs8ART4wZoQmwcwE8ZFia6V2xBHVSnDynG7s8FsUDcz4dm93DRdFDaHSMhj6qsV2JCUw",
  "key34": "5psYJvD331gstTwgVfSfQ2QuQATJbGvSpPV85rnmUGMmBEvKbCM6bF5L6C9htSBNrSgCJ9HSBQqRkJj7V36x5ajQ",
  "key35": "3Di3NcXvGp6kfNYfjynxmGU8by5w2YAHE5oTHFL477A9w2okeavjmXcPztiXk5VFzjJqvXjaC9s35S4pnseSfoBp",
  "key36": "5h6hy62uVNfsxDnipN4Dfv1zSB2fExgdDRJQZpS5LC7QXsCTPfbQVWoM3xVxitK8TfAyPbVfHdWCEFQeFE1DpR9F",
  "key37": "4hva23mp1VbtnPJ55xTFAkYDz2UUBeFtR7fEZupR4deaQtyVjeWJYXQ8xDiwnX7kFMmJK1x1xxYqonv5gNxnmirP",
  "key38": "2KSJUFzoWUsRZS9KdYSiK2KWcVpRyXegQhi3WL86wQEK9vFndmddZRbb6vcwN7MiqLruXAjaJ28SDX8o5M1ZSnqp"
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
