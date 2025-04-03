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
    "4BiUTsb12gKEWzcoyX8TRy1FqvZ2Qv3TPEQ6f3PVDfCpCBbRWAiFkEDE44LHBYjP35JfEmcY3G8ykPp3J19vqw3d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B5657YvdkLBpVvA7qMCCPdqUgCeJqTA5jUTfnDvyjwDXh4KrDbeRAtcPWLKUnuhHMnetcxyJrmeZ2NBQmSaPUGs",
  "key1": "3HZqhHKaD4xEAFbVFGCDhD2BN98LMNxnhrbfemSK4d6GDMx34aXGeVSijoKuqQ47HxcwtLSitGD2res3aL378Twu",
  "key2": "Dk8EKE933abCSABDvduVEc1wXeed9sh15r4Zo8G1MsqD2KchpjYBRRB8UnCLHMUD4gwFiy3vQBJpzPDyWaSt3da",
  "key3": "2kTZaHae6J4fmvjjToVCfAEQ1dn4RM3e4CSeLU7tV5oWLCzXBw7rUSzfXrbaKpAbYhpwrVpHdbBMmpfCYQTQzyV7",
  "key4": "5gqogMGxapTnMotgfDU914L74JkQRgsoN5juSXf2BwoaKpDqfb6vXz7ffj574RTjQz1e6x1qzxz6Zn4EnBAx5oEA",
  "key5": "5QcmCKeSeQdovspLU2wQcFGUaKPJ426q4R9UoVN1UqtCdRpzjXLpR5DoYaaeE6xkgHX6qNe49Y1VCeg7FTyQFCf2",
  "key6": "3tjmEdhZYX1m4ChxuDTKMuFPqDtgc2DTr5xF5eYssS55XjerRsXx7omfpPcBsovX8U3V9G3VLFmfWCzfKVfrszeE",
  "key7": "3LbSUKsZ9B3fU7AdJ94957ezTh8CW1oTva3SN19GxivbVZZKf7172LYLMUsyVkk2D4nyHYVMvCt6Rt4z8ZD3qxup",
  "key8": "3ZHLsCM4yNNbjRWp7fL8wiagQkuGNs5zvRYEJTKgSj5tEZAxrzYS5u9Sf1LDipCRMPCrQqDmaN4XMNAAzFgSCV72",
  "key9": "4pZRsaYpFynjMmKAswY9LZZpLy7vx6Xkbb2dqqT2ecGGWU49qbdixDDrHwJGVUY9guqQoxKq6eEa1e2yQcGEWVmZ",
  "key10": "2JNR9mGWADBsfpM7mzYzh1pESyBkan2FyAtmBsQZCJCD4ZB7iqNnuEtCM23fgf3tPNh5SRoL7jcFZak6eq9ZaW1X",
  "key11": "38gBZy3gMyxHKiS3F8k8Ho6ET3HzS7UhMDZZhY6iUguXjtnS76EqJYD2CYsjYPV1v2Tah3CDsk25eiq1xwLCatUV",
  "key12": "aC35uvaSeDfmpwWS3JsCMm8ydWCCgrEUDQtPHD86W8YZx3b84pUpaVvwt5KUFqC832oipbKWNzQFNHubXeg8cZE",
  "key13": "2RQBDJWrEzw8H1nWcjWxj2CnAnK1vzgACZXUVJRrKtoA8XoXCtsLyosEuofqHhACn7EFboqvTLK3uDwK82gowGAC",
  "key14": "2ydL7Z8ju196ym1Y7SfeFeNhZHYjpnYoxsP9jmxBFzF1WxK5sJjJoco8Fm9hFMMLLJ6TNU7N6npAnE4kxZonZogb",
  "key15": "2v3nuojWDn1w2xasRQR6Mtyrh4mZoujLa6LBYhrwoWRtcf48cViRNz8CUy8pVHWTCqbWhUPpkrPThg9vGL3mAdE5",
  "key16": "5YaP95JiAUunyVTqhJxxszjpgyQZAADa5wNtNcTMnJGkcGFKwEQtWKoNpB4NPYDbZK8Byc8bZegvDefHiBtEP1Eq",
  "key17": "vMRxnX4UR52yCS7oYGfgKAwhr5cd6HRdoYmrkrvV1Ux5EidepzyxkSdSxWD3NJfzcrXtmUP8AvdqKGHgE3L7Rsj",
  "key18": "5dE9WLuYGRjeWRvFmszzG2HLcG57QY7VDcV2UNKv5mUCpzMo4LshbKovRU1q8NdXzXfj2aHRBJwdMVz4VkRmDveh",
  "key19": "AvRUdE6aZcRRX72JiQunptKwdCp2DYmWezZipkJSoT6sV3PwFGxEkzygAGzdxwtCdQAAHeus2cQSk4chgsZMRKk",
  "key20": "VZVEFyPG6yDXR16yvuXHoQCLTA1WPQSkc3vCNzc8gA5ujmgtfHoQsN269gSMxhPNp81E1qdh8Y7oca8cYZEA4Vc",
  "key21": "4VHtadtEmM3mEZuNerfGHQojcheQJnAuMtVTjfyMBeAKoG13nnLqiunG6EbJKcMtQAhb6REumdwhF8VTgG4TaXA8",
  "key22": "22qVNHwiSHJ8e65BUGq1LJ7tL46yV5nyhTYm1ugHEeAAft4jvukjabuPi3QLradwF3x8gFGvTz9Z9owTupkTixPD",
  "key23": "3uTt8fBcYDubwUWUKhiGN8wigQUYjc7N6B7KXxfXPcqSKwzhcnNQZWTnK6JSJHqdQKWkibypkJ5vhSEnXPwJmnD8",
  "key24": "2gY84sKZT4K1rnWMNZRcXUNjpXzZzjFtcKaYnvSWcYS6KY1LTqVok7AUVuYnUur8XvJr4kvpgsnxooH12db3z3G9",
  "key25": "4dMqRcsnaUqaGqXYjBaKN1ShDjtZJZxxqBB6RsySftXNxUgvZ8Tk9HfHVrNgUCTvjsH2ejYwR8tNvY92mhJUwy7f",
  "key26": "4igCydowLSHzsjQByFMrKrF1czXDzLJJj2kzYgxYWZQxF72o64ja5KPzwi8yVFL9aNLNcYuZKw9v1K81xJdrxvUd",
  "key27": "3z1gmYQfUp8dhv9RRx7bqSfAhD71Z2ZBU3mHE48Eeim8RtdgbByGDrR85ss3aiB5VHm4KhiCVjNYDw6EYwaPgkYX",
  "key28": "4q9LdfFx4kgY7hLomrHPYr3RhSJVgC8AwgkMzAHZawcf3ekFWf4rM7uYv6mHH2xP7CoAB6e7U1vTwESfKxSBxrMt",
  "key29": "3qMYXFvX7z9DE4Xh6fW7fj4fNSkrQQpw96WjBvU7ru1ygevq17rC2cccSpQBjq16HFBi8pjtFZtz5zkUJgZV1kLE",
  "key30": "2pQHKmJkFmcFL1tfzCWash7gJu6HyUFS36yT7ispdDNYWSkhYREdc4fETVsyv7NPFMRcucKGr9CtqJyNbLvjArUX",
  "key31": "5i1jbegj8UaAPX2UwzEHQHfYGTjxmimfhcMBJzBM1XSEvEXTkaj5bPJax631xv6Ji4jTxgjMhnkXPrqwx3hHLHee",
  "key32": "3radoB1wh2Kr7nBDURduQ5v6NNm6ak38dhXXi51K5JU2vWMB7Pxwzit15ZuSU8UhcQRAt7aXJyMQKDnNR2BQJm7c",
  "key33": "4DQM7i1D546E5AxVgKMzN62cVxkSsFGkhmjimFiFUn4vpmGNW9TnqBFcDtLjjvXHmXhFPaPoy63SpfBM4qQQWyty",
  "key34": "4uucqwzE6GEv5tRUmYqkZYjCSWtHnwuxjiUjH6T3WuMb2YEWwNEbNq915wFae3y6UUWDbiiPQhNZqf7qCLC9sRrr",
  "key35": "5wsfhDHuiyihF7cvropioiUwNSb1koW4x83KC1ZrxvNRjGRWdCxwPLvhQgQpzvJBkaGs2egsxL5GmmmnZmfQpcvb",
  "key36": "5io4ThBWMHrDGWaz8CadQrzwSAVws7m2JESny9Kg2XHDgSyexaBEp2tawsSyTAxz1HV1SHVeMmLJ112C8mudZg78",
  "key37": "2u67szseh2svnUbazZpCbSkauHCkC8FBK6xbGpYNNUQQXgPnffgciabX6k5zpJXRxmySAdbasJv3cn8tgtMMFciM",
  "key38": "5ddsgLdPTUQmDjnh6tVVzYc6fNTeAcZQUtXprLYjz9MPNd1bPkbk7QimxYSatQiSygn5u3CSVbkx6jHiS2c3qguV",
  "key39": "npzAYEoShnJaPqVVwkbDzce6p8bhfQ7KtZxTaqxqGv9rXrKnmGzxfyZvRKcbexMpvpZLt7DF41mWfhMKA15x3Uh",
  "key40": "5WTrZUZKaeZAxygHM3MLJ8CiKhb1BSnRNFc972MLav46BvBnuoR9AGar5K1XoJREHD8PqN8DAggduHYWqTw23UQT",
  "key41": "35SCdWdyfsRVJGJAzTRtQEDYsaircWffb4vujoXW7oV8zqWBDpXipMq2twfwisMjVFkicuqRkWNwGrEghjiuMzCT"
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
