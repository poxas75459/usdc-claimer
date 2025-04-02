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
    "2AWtkT9ZyiDLi461L7E6wmTQ1GTL1o3rwZkiEK1Yn6118LZyvUS2xfwhdAHyGQ8yBAPv1MyJWRp1xRtFnLj68n3H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hQwTGhhDMMcfenw1yiknPkPKDp2GLgwMVyUqV9Lj3JjibqdrENS1WbupRoKHTeGNooFqaNy5xqsg11HkdS3rsUJ",
  "key1": "495Zwes8hacJP5cfKLiUvsTTBESJynbDVyGhkKqaRnFtLTcAgB4iWeLPAzH6BkwhzQuJZwWotR1jZSpG7mt7mW21",
  "key2": "3gWCAGRnwaP2vwuXQ6UcejqZib94ouzmzUxQw7yRiA8yWV8tEHTLEwwDuFA8ak5ZtGrc4WmYyN9AbwxAnfZp992V",
  "key3": "4FTeuZsexwveJkQMcbVSHrAZoPnU9od2gXTAA6d5eEsku7WUbmMgupzaSKv1z9WQZdHiVKsLYSWv3epbFoV8ZP7h",
  "key4": "49sNttUuuJtXwbJmPdrC9WwBLeFaKf83tGq8RPDQBYhm6rAiiGiuTaTWahfWKZok9EaMXWzK8DZpXmoRFcXPEexo",
  "key5": "3U1AvF22qPP7dVyPVwG6gsKbrtmVphvDJgeRSube41QcCnbYqPmrL6Y6v4omJt3pqDDp8EAXtf8V1dTKnsK3ixoV",
  "key6": "4p99JVn1bKJyJvFg5r6HHfYQKDzxuJFrVwqfw4tfUbM9Y6ZhJHmgwTjvpuDwgAQsJdrgDCh1Z91KFcbi56PHjQZS",
  "key7": "5sGmiebLFHmaMVFNHwt8H97TSazvjesJ2DKgaDUrvfeqZb7pag6pn5hxRdVp4zwD58d8HgyCn5rJuUV8MxgZuRJJ",
  "key8": "4HVbJNWuT4o3vuz1foGCi6Ep2KJgU8Hy38QzMdbwqRQub5Z5i4CGMc895SP2JPsTDYL1Cw7rwyiwB3UHLoAW85zN",
  "key9": "2FRw3iHijk4Z4StVNuaGjPzPnNCmDGnbmE2Zj7th5quVuRWjB7idg9fY4MzoQbeocZopTBcGbuWCXNXYyh9n38Nt",
  "key10": "3Nzjdw6okYXp5ifmi2DUC2uSCLDaiUVCKVW6BsM7A1tKfUoXzCiRr2qEqH6AbpLW6qFMKsoL6oRFvySyqDJoHCGc",
  "key11": "ska1PxZySr7qm1vgPi3cqdtahukSPyoXyQfxk5ktQ256W9S8pE1wEBxCNtdhho9xKmUtgBAQxZkRX4FtJMw5cfE",
  "key12": "48UpxDuJKDaHufL1dnLoPt1SUoG5z9XZAXrSFZ4p6WdF6DPmaVRR2gznk4HQiu6oUNt3uHLJD81adLgPzhXgrDzy",
  "key13": "47fSmVbDGDiKCG3g5n63Pcj5CUThcfb5tnR6K6jgudb7cPXRNw8yt3jtHvjJEgTef3yMaXvgBACCDgjqueetRQXo",
  "key14": "yzDHU89Bce1DxiAeosmA5KoW3SGP8BmjKXSn8wF5V3xCpSzjcucR5bvzvKMxdRjhvGdajp7gqgQwf8LMScvKznS",
  "key15": "2f7u6Mzyg573v7qaqePrHqmBR291gRr17yNY92qHfq4zD8VBkQ8FuKfZQGhCeEBwKZ3tV3o9s7akwJmPgythgeAh",
  "key16": "5Wjo6Nznq7YFWmLLFnbKPn48H2aCRppNL4kWUodtvdsYLaUBVT9HHoxwm1GPxhb44vzP2mEbDQ8nvggrB218xm5y",
  "key17": "2fynTJcY6JkqgpuMHb9VPikE1RvCzpY1g8y3zuGwH1abtgnvymv4CswPuXG4ZWEZFi7vnH1iBFyHX94yYgNFFDQX",
  "key18": "3aRJKmDYDKg8ZhuaoRTNdM4bwFzrEWoVi5D7h1QrD7ZjV3jU5kBTUNjCTHoZATF9M7TDrx9PniA7vik4YsGCmsZr",
  "key19": "2JLEEyUGgeuzdSUHXSoJBCNdC6qk3pCRETesTpS8rkB1RUQt8x8j7GYc3MQkkwjWW2mCVJs5MJ3ireFkcRi1KQv2",
  "key20": "5XapdeUbr9zvLMtXZJcS26cr7YfUs34eN2eBHW9ouJLwbJyKpZzsxQMwJAj7fgCmuVSipeiqfhuFU3JbrZaYzpdr",
  "key21": "XJdQprnMQxXdift9uGdLan3eVHudtXG12SumEgEfZXC6C2aNsYJujeW9pCXYMovKMPia9XFFvvuN19nBvSRtM71",
  "key22": "2KW7BtPTjjgM71ViNueqUbBuCvhpEdttbQ6sZm3eF3vzv84r8VRWQwhKQcJqJuYG2hA9XvEX9BNastLxPJ5Wq3Up",
  "key23": "VfAUrd4Gq8nzNv9Sw8TR648nm8E9ivsHagruvMCWYXSTVauPBjY14ge1WuL9G5PydZx9YnUiNzbmq6EmGgkCZpm",
  "key24": "4gSNK7Us879tEYvxZ2tyvLRo2W78mQnLXDCTWg4MauXhGzakmXtEq4mB7XfGM1uRwnEuN9Tn1eZyihw6NViAuf3z",
  "key25": "2PrKKNTBvHVvc1q6MH7TxhWfwHrEwSuWR3FqHPGFPK2JYPCTCUdyULiFkqtthJVUWD3DNvuVFUqiMWXPpBQfsZWY",
  "key26": "2yb1oHSsHVhjLYVQ3nXPK5k69tsirenRfMGjGkHSUxH9jqJFMWn3VQTHH5avD568miskVAKnvcZ7Pr3EChQ8HBxb",
  "key27": "2AqVHDqzkguwWBH9DuZqdhs2qk2sPqLUemoNm5LjVVPnwFcdL6uyyHqACXrw5tqbMjNp4WgEAVhiMq28uGvG11Fg",
  "key28": "aRad12AHvHcxL5YWNz1SuMQ6rVBjDzTFQhgN7oByeeWs5DosAJY26Ty6wdgUq8SF6cESSTEwLLBm1FHVvNv2v1d",
  "key29": "2qiEzmNMGg9yPkH8v9J43P36fcXF6c7pFyTCVUqtJUXcKWDbYneEfxdhYhDNNf1ReYAqHvgv1f8Kzs23MAFsKzSj",
  "key30": "3UyyUxVnfJDdPtyhG6U8tDgd4htiCAct2hGQvSD81ccmVLoxxAPJRqRJDxy5pK8P7BjPfRcpdkjNsLq75iisSS1m",
  "key31": "4KqpnVBgFju7EiQ6A23Mgi6nqiALMUhNytbiM7trZDDsRBHSJRP8zhXTGswutgF86bqF9sxGchxkQZi4gY5GmWeA",
  "key32": "3GXwYDDTfqiUK7LgcMuGwMjbNvNaGhpdJHSFof162KShJQ8HkKiKypx565Ac8v73qNaH9t8nxGbhtAjFH9R7KC5Z",
  "key33": "nAp7WPJ7Xm6KUqBoHBqncHpNu74JDUDK3FPjUKcVYExehyxTEh5t9o8Sw6oWJ2Lhqa1bJbSmik9KMUcKPUdNpCu",
  "key34": "4J2wZUo19YZNQZi6cSpnhekTsohrkbf6qZUMH2KXapQ279ZtsvfxxksdCiN28zVVmngYwBQUYhG1o4wEWFBSF91Y",
  "key35": "5GhECTEompuqD9sxdfV7d83gpB8mjpbCX7Tb5EbEsXTTmjmhryAVxhmHJG6j8K1RVRfh7Yobd4thdkK1nwBVJDaS",
  "key36": "5cT7Jy4AZ1r17tqHg1hu7Rytmf3Qr9RPSvgnWasJpbTvzJe5e8NMY5V9kSmi2ztZ9cydzwMKewCsu3gT8zKdmkhn",
  "key37": "513TMFcvmsbmEBWWGdUFa4e4N7wVFyrXExJmDyL3Vc7y2pW5grbyYvRbSpas3VdryXHGbjx94GBwCpi47r1aKc8u"
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
