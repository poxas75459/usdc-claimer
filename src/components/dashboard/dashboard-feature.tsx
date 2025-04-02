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
    "2cE2cnLQCiuiieKJjPrB84LSrrXKjN4XEHp2U3EMEu8PoJqUi1mRqXdcnTJgC9fVr5RsJ4rHo95CBnsm5YVZLyip"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fx7pPm4ym4K6QS7ST7qUtuNw5w7YqFp1uvrY58qgRDMVQLCLAp9Jy3ULxKjeAxmZBVBFeaNTM6ZVrC5tApcnXDv",
  "key1": "53TG7XyPTwBy1sjVNEmPF8QxJDeQwmYMcxhU7NKr3R4VDpQ6LsAsicPtts2BVM65jgZDYQ3gkDLRUVgdTgv4E3yZ",
  "key2": "4E32Z5XGoKmUKsKBQkDXR7EHuVzYJupzeBjfYGabmuYE7qbh4ncyJ2Jw4fbAnCdhtB8bLMDe4H3vvRqRwb5cDvw8",
  "key3": "5rmEQpb4wA5xxrMwRNoqZHSKxvtQWfZmpPUN7rdcPD1jwfacRTT4vt2hCjWVtedgTs2AWUmgy7VsLgsEhskyVofr",
  "key4": "44BDKCVwjuhWhFXKfdMBTxTnb9Q326WA6WWVKbyWtsZF14m6p16Gn2WSkQ4QGnGiNVjFTQNsYo28u8nkoKKM6KuA",
  "key5": "2PUJ6uqS58J1wqZYeQsRuP1ow3bAn7AkoY4PiQcdzbt2SC9rqraT6Es2q6PhLNiEwkqvM9Cu9kc7VAq3B5bYqHFw",
  "key6": "32UvXHVyNRRWSgmPET3YqgXceThddbRHKZhJmqEg2ia3zwutZmbYYqUq6FKBw8cehczb4epcw3PzSKSWMWbN1wXD",
  "key7": "3q6Jb4LzDmr6YsRG7kMf8wZjyQQZ2B58ScvYcbUTnuzcowRyZaKKzJMpoZFmEwjXPy5Qqb8GB6BFvnqCh17Ug9h9",
  "key8": "4GUqPNPiG5prXJ4LWXPqFjqy3EzMFqJ2XFxciZeWMsqn49TrA6Gvc72J167b2Es45tcP4btnyxW7ZH2TiSKQTNR6",
  "key9": "5Be5bCSP6G8M64BFfKRaGeF4g49gnKdMCrQ8eFfBRof1RfcdAnsVEcBMCz8HPb9egQdZ3zH75k45ghcR8k8SY4bq",
  "key10": "QsUva2YSfo6iVd8sMBS8Szkm2emAKVC8PF1fd4CSxdkMJjDBby3iDLzBXWkgzvVmrJoTJHMkG2CZMyxb8jMbDGx",
  "key11": "2to2BmKz8YnCAd98uR9NfBNtH3ZdoBuNHRNRBrNJa9YKWqEj3DX3wQqj8NobSEwoAm4mzPXQXgVw6rnz1VqsJU2b",
  "key12": "3FLqf7YTtawRtc61DK6BdKjdm9qhcia7gcLo6FiYQfkMxn9ocSPr3pZHj5gdr7tutGMctQDabqMJYePHZudn3XEk",
  "key13": "3o4zNzCWLCpqkzRSBdMAcRkXdAQHEKx3tsMkwMLRgGiH9GYbYiZZfFuzLNL6H3mYErbAmkFVydrXuFAKmf7DoGk",
  "key14": "126pyS8RaeTYpTs8RkFQA5DELVAE5c5sPqhAd4uvqhG1wN2VzNb45sYj3Wym1y2abJkJcMAsBWi2X5hpG7EnSrdr",
  "key15": "cLC38n2NwCx45zkDb7AFk7jidinrE8LRBDK8trMpcYDoUwpmc4daisqLpAzq9D4bt9z2M4qWdNdaksXcPt2espA",
  "key16": "25bRjpTjADTF4UKhnmnqQyCmsyKgwjQsfmKC5UXigTQEbNuZQQeacRFeNtj4VoYCL9miCDB7ZyvK2FMJWAfydgba",
  "key17": "4X4CvD4xiTENuQsnbuJ7g6xJx9NPyVAHBd6Msvnvxx5EpL8FNbD5r83CdE9XueaUUi99VJ8ANcbK8x1KgMzNxhLo",
  "key18": "236TGS4T2F2fGj1nJu7PoP1dUC2HhFTfz5mJVirUCo9EapGzcRQce4N71k3mxDo6rvXt9VvrN1J7iZs1xzNS1hEd",
  "key19": "2hDLfjmHyxnKxg1113eBzRiqp3jgPXftrpyo2moaXPpgjPfMovqp2qAgYe6GMrnroDmkGo84BQeRmcJYa2goDjW2",
  "key20": "5dhpasYMwgcxhjCc6jDJZ5XTqF1pKeL37whUGfiscEYjYLmUftFMq97VpasU8yNPHBfWszbryzT87oQ2nveXvJ7V",
  "key21": "eeBx3ZDmMrec9eTLDCAwSzKLDHw6qr2s9Nxg3tGNcQp9pS9yc3dWsLdHVakgY8S1NB16pJeeLv8jBTsNBCxa376",
  "key22": "wdzaaF1Qv74j79iJdBypEk95yhgH8P9HqeW1oGktW17gwtaFDyNcVzZEfSsZ6sfbsjqhkLg95JH8TaVcE5hfJHS",
  "key23": "2n2JWs8q1XENuwGJ8CBfFtHq9WS2Cb7qKMU95BVRpA5J2ghYrZ2YQvdMGYwVYbUuz72RJMUNbLFSXX4xtt9WL39m",
  "key24": "2wxsVNPdvVNfUEkFoE5doEa2SEtCJtoosLZFzR3YiMsb6H8cvnZy3QaKYLdffBe4AV78vCaK1YkoQPDGdEkJC49t",
  "key25": "rhnSfMrhsrUeAMnS8mK3M4LibbeK2RKAj7bGqggvExi3YXfUby6iTneXpZtmfrKF7se3yKZhjNmnX6aL4DaGtwq",
  "key26": "61KybnhQUxkcTRtTUd1YidHCtNbhFPNXschsJLByqcrqvapsb5oi1qwChgc4H2mL9Zk2hwZEeu3y6ESmhJk6dg3q",
  "key27": "2kiuntDJ9NJm5APPqNvJLvyvXr4s7SztKxu5cgxBQR5zhhmhgsLM1ZghR9M17yh6fwhJxWmsAekqCsAWx85XbRkL",
  "key28": "2qqgsKv25Uu2F5MX8wiKwbL1f2fH3BgYropPFkRJBmwsHz7dGDhYWNrxLLsbyi7EgqcQzg1SmvmJcRPHazPECfb1",
  "key29": "gVfMjBBC2Q2vRkypuLUU4BwJ7ABwzZA2Wirk1fvbfGzyi712sqnoguo7PP9CLkP6B7kwZn1jKPgqZWEvxYyhUxE",
  "key30": "64ex2L6Ct4LWwF72pK6qGXdaMcBUvSBErihNhjMpRZzsSFCj2jd2zWSwhnYALYTton3CrGEZ3YvuKhXDr42koVSE",
  "key31": "5mFmHfbtGAYQ7p1bqgRuGZLyhAgPJdfXVQZnevYqD4xDHoxMEUjidSwxZNmz7sytF3EDXcJ15Y4zLxjQv9jb3JzS",
  "key32": "3TtmE8F25FFyW1SqbPkYk8FBNbBZJ7h7Ubgj4abWGA4RTfqQ1SNCpH341ZnBUGH5E4Z5iqFCDejftYrNYgcdx8e5",
  "key33": "4Akuh7FTZTNjFa5RExwmeqJjXAVvi9tMj5r8Cjfk4YktPEgzXy4mB6K5ExWDVezhrv3eGQLACXxy3tr39BRtsf59",
  "key34": "4HVmZjfqZUJbEdimr5jMHpG8yhQcHgPadrWL29GZYqY5rJBepZ3Jz16156kKy8VYWcTFHS2vruSZjGtCUGSTkhxQ",
  "key35": "3uZa3jNn4zj4cfAHBcFpe14fBSJcMoyCCFTnqGZp6JmrFNqUwc6AHQCyD6vQqba8umiKhMzvTuJdh4cxYKWnBHWt",
  "key36": "4WPQWmsDKvcBsHU69SeVYkdFgPGLgrL1TgpNHgEJxQk7oKSNHjmSNiBgxvuDUj7e6mzkikZWMpMryavf5FCqrGPB",
  "key37": "3i2wn4JeNhPuHSNHX3sZZ27Mf9FpqqCBLEiSpij3zZtCxQFmAkqGVysAbWX36bkqLHFJwnCXyuTGw63MsGm8SedT",
  "key38": "4yXJpz2anh1J1EvEwAE7s3CKU98LAMMTtBVypxCk8sYV99jbiq8nBTf2xTHKFi4s5ic87Xofm8y5jsBKdjeZdTaj",
  "key39": "7Hzo2YeeZ5wC8YtmW2SGPeThmSBS9u8rQdohLpqiEe6pDKph1mezGYkuUuhaYafFPy1o58Ec6UHvcpeBLcqXdnJ",
  "key40": "5Z8CDVVVzCkVpDc3cgFyWo3Tnd6YG1Vh51zSWv2pAF51gp8o11wnjuuHUGXFzwf6PMw6twp29xPfMQrsmiXyi2V4"
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
