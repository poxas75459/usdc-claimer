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
    "pJex6PCRX1od3vzgAa258VAWioZ3q4XAR8NHcVBHubSqvp7S8XQJB52neRQgXrkWFFmJaGVTUtWcNPYiEErqqy5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FgesykFcc6ZnbotHSM8By3Da3MjzUPsAarfkWJbHPe5iJSv5SVfPxpmcXBneo2hBt1Z1CquMTsWQxxYwP4si8BJ",
  "key1": "3BiiYzstuvaWdTS32pWoETDgRqeF9rbHfqLXaxGCQe8mCVZzF28Tigo4WhHv8GbvtPDkTQrRoEQSqmBUakPMRprx",
  "key2": "63TqWRNBktuVYsZsJ86pb718ViCRDHCRqZXCAJbLuzs6T7amwGe9RMXoboGUPPZvLW4xZ7N5FVSBzoYsAM35Kh1V",
  "key3": "3DBca9Anwg5XQGc6E3XmTjpjoA2oJeFHdPSQptFb9dzZYo6w4RZDYJr3N8wFVokj8uqLet3Zzf3KvtHmsEkxxxBz",
  "key4": "4Cdy8Pv93Rv3672kyDJiQmYNZReuMWPzjr3ZfYwm5wrRJZFrvteuVyYszZ3s3Stzw2UMoJq52MES5WAtQCbPEfEC",
  "key5": "44GuJJAX8GThhmQnFG5xX4YS5D6bike1j9Kz8n2Ahk4sMUzhU5ja5H8oXM3YK5vcX1KPJqrxqYnq4ScVUkBQM3ki",
  "key6": "XBi12FSmxZR7xFqrVYuV4pDqZDTWjA6jvnkxnvX2T4y3ghKwf5PnxgNHZ9TwzmKfzpH3LC6ZNKtdhaGruiJNGoG",
  "key7": "4aurVv7auugHPp6dRmSUzvcXBcpFyiydD5RmxMhfHP3ycQE7UukjMADwmVJTYkQJP5pAtJd8oJgsZ6VVWsTN1mDc",
  "key8": "48nhfwj9U4tbdfcB1p4xHnqkRcxGutnPgdgoXxZmoLpgwrh1tAp7qP7wrtK5NcACn3W1vK9X25qFhPJB68FDSw35",
  "key9": "4Wr7mrhxSXrtUJvitWNz6wK4tBJMS17nHvYg2gEEskvJ7UGJjirnpZYr98jyk2jBVM819BV9XDFNCaZHdhxwWQK5",
  "key10": "5Dp4zAmiTPjPKQQPUZxe3YC5xTHi2r3CGE42qz8EgGnm9Qd68EZLbkNAC2tPZhGNUd5UJDsi4wkpFt3LyUzjyBTS",
  "key11": "21qEKkYCe3JbEgRPQgjMEWsB8YhTrct5y7LwJgcmqU7AJpEJMJffaY2gxsiBAtJjwt7oPahzFLaKpHJztKPUwisr",
  "key12": "44in7eskYYemeQ9KKTr3wtAeDJCLf4VB2tid5rB2v1zVFzBTY41xvLZbCQxB4TdtMRgCw5wv3AjQ7HLoH51sNMgm",
  "key13": "4UAc5bmDxq8yTENmjcWakyojDxUtexuzzj2886Hp4UEPyeLQ4KPsqih9D3YdpzsWRMAwddeLSbLTNTT6p2BKaLAK",
  "key14": "2ewZMrJQriuzfoAB2B8Dxb57WsE7PrQJ5LxrSe75RuAoz6uPXiH8PV6Ae6BM2yq5QvSJrNrTyyoSxVxosNAYqFqt",
  "key15": "4Z5YSd4kumdKf9AVUHR78NefPZ4sF2SYgAQfWmdpscidFYbC2hvJWhZRoHhkKsXXXtbJvn6dFFTvGRjiL1U88doa",
  "key16": "5MsDUVn81ze5FaaSUFeD7AXEmfBeFAFYfH83JyuRjif5JxAEMNWS9PRLLrdjZG2B4MXVqHJEDLrJpTjSk9PmznHz",
  "key17": "Hcp4j8btkVU8TBVqBitJ6EbZVbuD5ax8WxsXZYADmnDEpJLjbaCXbb1NKRbzhr64qPXh2gVhSGsDQcoeVi8dpjW",
  "key18": "4tLNw78W6aaBW4ysg7yb3SkUkGvgBhi9rhLnSF78FCxM9LFkVUCTnB1ysu9b37ZmPMrQ7yWQoahodauLspSsor4u",
  "key19": "4mzLFfMF6RqQN1LiGaQYzJAAfBdXWDE2ByAfwP7hmqbfXX81A8wefXp6c5kLihbtp3cGJXgZwCC9RsfVNhi9u11q",
  "key20": "2PnmtnAHLvAm7zeaxCpng9VFGdrsFjSLKQCsNxFwPrD9CG55LAwEad8CPDQ45GCEtHuE34HFt7qjPuh99i9FXMNG",
  "key21": "5qujH6a3U6pdESw57TG9dt3HPbmffCDePi2nHUcmYPuE3kNYporgmhVuzq4JAF4gBq4fqPMF4e5PnYFFsQhgLEe5",
  "key22": "3vnnQMAH4yRqCL4eKcrgKVVX8PBHp9eA5Vz8Htgmq1PzFAxqJ4w7mujxJxiaD2xVE7P5HP9cJMw96VruuRKwoja",
  "key23": "4gzzEi8yRXEMKf9NYCrMmJo1gGXmBw1DC67jgpLHm3X7kZfLrsX1LUDryWyPyXhY8X9dPaKkTVgt9Bh5dvzDVdD9",
  "key24": "353faMaNXrPFApZadh94Jv49UFRw2Mn3zhfqXZDCxVYJYdpfiKVWZcuzYd88d1PioZBALgP69E8EiK5EFhmNydbr",
  "key25": "2KWSv6VogQGvKx9UVx571qJcEkoNuRwQQaYG1qjDDJ5sRRMAQsZn6duCR5necUkciBC9R4MzacFTkw5rutsH6YWT",
  "key26": "5aVnxTXfA1pzK6MDAVRvpVLPrySB896uKdfkekZeTMJqVdvi5ND5rELX3C7FwyM8zzKAxz4szKza7SJCyAYZLgcq",
  "key27": "MGoj5BRvLYvufNgo9J1WkGKG32SysthYB2vVtrtk6KVBn27MZqKCz2VBua1thFwjoLPJjrkeMFMUda85aUiCXjW",
  "key28": "YTzwY1ic7Vmg52MseoMGzJGfFqfQuUQ1y6UHesbNWZhmWL8c2XgiUNmgd7g6T28dq4h4G4v5J5H9wenbBvHgYGW",
  "key29": "czHDm7TEsRNMNmo1tiqDh2PY4G3UMmkyJ3FoG2jB48VZ8NuTC8Q9e2ELZgeAbrNFhdceCXBJUJMvNfFgG7DDAMc",
  "key30": "3ofdD6ZjCzDAgnNfxYKT45XpK9CJfuLeBhMoG1zXyqKkm43bcuFsNRTaSbvAM3L43Ybasi6EQiCXcHsrz7ke8TZD",
  "key31": "5U6PaCPEGksKYu5Lq62NxUbt4t489Ao1vrFGZbJVGspyTs9Xyqm8rPJyN8JBR1aigaee9eaNsXGBJZU9tx1Mm8t9",
  "key32": "2hao5SyuYVoUp36PLw9CtumytaNHEUgQTfxLXwqm1YpsgUw7doLmDaSD3L6icnA3XNtHQjKJ4Vi7TLEMQ5nRmicL",
  "key33": "4GLmxgXfkqfkj8S6uF5MESBST96tH9TBDsndpL8VAyWK8pAB3YydTNAFi3RrTmNXXBsySs8VnwKTsFHteog3xQ5g",
  "key34": "2dUU1BXJkXSMJT8iyCirvynzrh3b6oXe342vUaCuKNy3sWN9HbFtK57Jcz947NnooYtT2QMuguAg4j4HUZ5ftvT2",
  "key35": "2rc2LKyzkZuhyCUvPgRoys1cYVP7UEDBRMyuQXqmoHCDXsiwMaixXtGJ4XGJ6KNCvcH8PbfKM8q1V75qv2okLY22",
  "key36": "2FZFfij8mrmxnzPN8wCHFd2kvK79V8sWuLDroz3wcT2Lz3Q7kYd8fZPRWmSDxqBeLXyz2uNND2Em2FFwkQ7TMZTu",
  "key37": "JLxhzoWQX7hBGpvkNffVZLoPV5EzjL3vMevtgJb4oS2ZYob7hMZZYLRcbyEK76ooTHTUJvC2NvuFKWM6kPEfgms",
  "key38": "4B4zxfxmimFGrf78W4r9ok3t9tVvRrKXEEHZbdxfx2nfgT9JzFpNYwVWnSsRrv2vs8GuFwHnmpxuV7Lsns87f9Ny",
  "key39": "45wZMSFaY1fTzaP7UzKivv45QJ52C1xcVv1gMcp4y9sENTGSgtaxkHMCarrhpTCEEAnDQdAKHGfRJxnwwmWihTBA",
  "key40": "2vk9JkbW7m9K9yRGAn6Qzc24yZ4S9moJa8AmnsxNUdFqPRZgaeaJ5SmfMTPG9GkP2dMg8z1R7vEXGQGYHWftB8v6",
  "key41": "62tWFK44tufFjEeuFQYa1T6F9Qr4k9ayFnwDy8TTwX3jqsDqSSHhwqAADm55yZSTDWTaoQBwZRNkRC9E5WxAhmw1",
  "key42": "2yN46jHQWt1ig6pPYhYUmDEv7fHu3y5S9JKV7244T7cdQfN2z6QSxTCoLg6FJ4UgHxUAkxHKiThDqTWTnUxpwkYq",
  "key43": "5mx7Kqhc4dTkgDfTSWDmUw1sjCP88brrt2CxFHM1Jbz37LknzpD4Hk7U52SPYTeXPcAfhxjdZqN5Z2LFYnZZ46j2",
  "key44": "64WDU2iuxgTehi46m15Yus1ALUPw6gLr4V5tzALYP9weqKCEPUAvuBVHieg8D9cciytG4pQH2Edk9N9YwVp5q39A",
  "key45": "5wFq6tanjea8ajuAwKXHkg5r1rnqtX9mTv5M1adS7NXYjk9N9nG2wEoY55QgznCCXrK2LhGysGbLAsNGHJdCrWve"
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
