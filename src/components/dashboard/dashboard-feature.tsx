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
    "3ydJ5YYnhZDoyQDtfNBUB4Y3SdYKCoFW9gssfYUErJtZc6zTkKXq5nrWDdSfge3jcGbp2YMougBAThbcyJNVrfgg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gj2bKT6rCt3BVmQrqYjZt5dfCsQ4YicWVb1zpvppfQ4AP2S2ymZShP7JuycYxKN7jnnBUjxrq8SrnDtTwMPKAS",
  "key1": "4UdCmgUg3CCRbm1RFNSPg2ZN6iM4fckFepefgVqc5GU19BcQXwti8ft9bFBmfpyVqJPw1oHdtJCyhFnhJdboZZX7",
  "key2": "4rHMnmKmcnuLVBRnWdP5dfZPCufX3JnqypTnjwNjyRLnBiMY3LDPoYjQvGyACwtVH4ohmsPvHnD4PkJEYUeYCodu",
  "key3": "SaSyycqcni3gGKRQbLLwftNbKLCSw7WCCN2dHAn2csKXW1gZwaQi9CrP7qhUoJNrakS9Nhv8Uzz5yMbrnRhtQ5g",
  "key4": "sW4Lyxa3aipEut3qxBuYjcmpkQx3jf4L7hQ2s2QqTnP8Vk3VmGYycVaaStvmcJFW7nKKmnJYmJQHmpQfDAG7AKc",
  "key5": "4iut8uRrNdRdG7DNaW6zg7BUbq5yepJyAci7YoLayJYpSyb9jv8Nnzcc5X9u6TK58edbmhdv2hzNohCco12n8Hc7",
  "key6": "41Re8YvVkiL7DiEqgRsCnKonvjTtt9pAN1aQyfD77Qc1ioBSn2aco3uLWZonYEaa5tvPrAEKaobFPkMCM6grYB73",
  "key7": "2Zoy7e6zzKQzhGYwip2kF8W6VCSmV4oCaBjFQkqdtJUC8BoBJfGNBeVr2CfNXPunpGwmkuMz1ieppXC8ArX1djWo",
  "key8": "2a9jVBfLCpQG49uivAwxofbdYuvQ8x5bVw6B28rzbymwrGWbfQbhihcL4XXzMnMTSGaqiqxYX6pEbppTFiC2gaVN",
  "key9": "55FEYuNvmCAmYxFu3GFLz4nxZZCNbohKgwzbzNp5RneJnw6Br5JNhGwPHhXsP8c2MkZXt7m2ieatvK28Txpo1Hjx",
  "key10": "2VGmgPz2HKQSFyGbXXomncGbNvUqSfL9j61qVpcNeXrBCa8fzAHerHJcf3JhcyEAxb3Qat7XYxyZ4uj8MmDfjpvB",
  "key11": "5PVPNtAJoipX7GAkTuSS8Xnysyszq8nwjnrneF86P9eupCfXJ6tN5x8rDK12TEsD61u7ro7AyByHKD43sh6ktzD4",
  "key12": "4PCehmezySABHWBVtrxMubBwDsZXnyfsb8YrvsxC8uRYRVphENibyP8eckGRF1Kw41B2C3EgcbmgWRGzcfiqxy7E",
  "key13": "MCidNEX3LRQ6dhsxYcH1s7Ndvjja9bfHyGcbExiuFpkTRx5zhqjUy7tijKLQkUrqfv5DKnpALFvxpmJomkTpvxh",
  "key14": "58EU7XuHtHooKnYjDiKQzRwSFg5bDVcjkZUtPmxE61SYsyCSrNXeHR8asKoUrwcaFjp9Fb46XJv9C6cga4VNUgHa",
  "key15": "3HssNMnmPxxLj9JDrzZf2JZcnPLB2XDcehL4fB5i8epAeHAbkWq9qqHo3GXM2QkjnF2r3UiprCxKxd7iE79ZD75z",
  "key16": "hKzxWJkehtpvV4SCpdacKzD4GUy8WsvtnKHb9RoBja69edsTikpN9VRaNFtjyFFqNR1ncv6Pcm5yqAK8uCxnkgP",
  "key17": "2DV5ewZDKUnEEFVDzo83TBdWYZ1RCQTuXqduPV6nJw5mv7gsUMt1HZvtujSPRWQiM2Jc5JsUH7HknqMGa86F97Tk",
  "key18": "5eY41uVNbVm4XzQwSatUxEFU7snNCXuQHU4yFjEGavsHKeWeWWSSoiqi7g8LsxRbrUQdd9bXr5QsceCw8LihwTUS",
  "key19": "3MnNmtaYvCJuEtaYhBPrtykUTDZJo6gJmUm1Pw4EzSzYMs1zCHe5be4Xryo5iD73DRLMxV7cTjyRWFYp7eRyN5jQ",
  "key20": "ezUKCwJMqnprAXFPqYrA1h1EfpNYYwxQwfvfrg3J8MmniYg7BcgtH1eNqMYZRFYx69jKH6f6in4BogGN3Xkf115",
  "key21": "3YueAj5thHeVohj2u5ZFWPAPRBHr2DDZwgtXGfnrpHd9zZCmKyANvY3fk5vnqHoEbU1NMdxirhvQw7yaHk8Q8GP5",
  "key22": "35797B9tjbMqDCqJLbWSKzaHDmQxtF164XG1j6VdVZG1wJqaco2igSR4JjYbojmCa1dsWfm25XCM8W6UUpote6bc",
  "key23": "3nT34vpH11bUoykTDkrAe5FNgq4sjeVCqP1v6Rx8guELw4yfvKuKFfEu1yqK5q8FRZeowX4gAeLbt7KdBdFFtVDa",
  "key24": "4qJghs37MNpXRVNnFbb4P9AWu5V4LPGrZnTtPcLxebHjjLcriRD56VXbdKPiVD2hBwK1f4wW2M7xjvtF5j2ZwKaQ",
  "key25": "37YV1XAuvTLD2rH74SBnFSFzrAxJGEtGHAn4x12rBaRNHvHvp8T7rfPqowhoxHzfPunVUrtQPmgmzyjfH19MknvW",
  "key26": "3V7L4PHRCXZLqrmratyr32x3VynLKHYMmhCQWo1zWDTRvYYqwdrmks8kFNKJASiHBkJJViaw4TnwERhhB6L46MtM",
  "key27": "3eKHwML3cSbdwu7ndayS6fs2CmJeH8Jrvfy9qgh2iU6FhHoiBvwugQKFeE87BYYAT9KfZg7md1meo53Jb6FwcBr",
  "key28": "3LyFzFnk1P2KFXUonYvatiYywvPRwfdhjmxi6E8HxLVaYTzmRk4zjPi7LRsD6bXV7zZPHe3iq7mXZnet1QMXtuPT",
  "key29": "2JePB4cWtovHbgkH6dNBGgHaqanBYhQkN3G23qpfvUMKjZ7Miydff3yhzgNinjsvFFTCmsoMwuGXB2aAGBe2MugU",
  "key30": "2eTZHdYgwZ88c1i6RjHxvXdcvwmtAkL8h5Rt7W1a2yVaVCbD3AnNxpJKyYM1b3KBzwtjAMmJe6AFXpJpvTMqZHar",
  "key31": "2MzPt2LmUCGtpDQxR716EqoBy5XjXjHVorbBbGxzoWqbDjjAdNzidmsBpbaWNq7zTs2i3fHJMPmjRHhm244WrtpK",
  "key32": "nxkUnwNN7LpLEm6APsZiRedjc5CdkLAJg3q1zkAnSXaE1i2D1EwB9N5mq7AyLmYjXZp3tFGm356eFX3eZDYTe3T",
  "key33": "45G168NBzvcFSHvaFcqntAvWvDjJJEU3HrRisfLdnmLDgNkRi7ejNzqbBEEeZCgqd1Fo83n6Za9KhQYaepv6dvAZ",
  "key34": "1qGXNj1D6zQbZdGjSyJaHGg82HN5iAtKComU3ARcd8zxQpokwZjSbF2Qrcy33MA13vKTuMJxayP3WfhaaJNGDp2",
  "key35": "5Szd8amPyZUGbswEWDM5gKHjPezJyg1tbKgQe7etsQjUKLNE5pDyUkM3S1LcSvqYMhjaHiWe8Lfikost11BHLXcS",
  "key36": "5eQK37JLfi2XKkw1pPGg1A51ruHmdaUuzYnoRbmMrSi5vjnFhmRv2U3xAkNc4ccvK2n1wmUFveBZqzCK74fqmWXr",
  "key37": "2ENLPKaRHJ8t9bdpHBhufGzsSGTzZ5p1Uzgc7V1AACVK2N8aBh1Vy48Tm1vW39z3DvpSkWHcKdAfQHdBGN4ZgGvx",
  "key38": "2q8QRFpcMAPF7T2oacweLx6PCTTw248hDvS7pkNCWmJXetXPXv4ThUnuPmQvDXkAoSzbccWMeCWY3XkrZRpvDMuT",
  "key39": "3h5V8kVb5TGh9vnRCqN4KGvNz22NEwdRosff9Pt174oxx7aHgi48EUYUR7QfxpUj15B92vuBWpfkhwwVrtJCpVZ6",
  "key40": "2RwTzauC1x3JWJzSB13iDJ26WwU6LgJgJjy9q1SydGyKfJgsK5863uUKvWHTqEonWG9Qy5dmMdvMo3qGWn5J4JZU",
  "key41": "2epHXRsRsMaRJbPtL7WKHP1kG7Mmk1UEbx4ynCAijFLSq8yZmgo4f5ws69Vyx4a3vdWdSSQYHw1Br4kUnzc3mBjy",
  "key42": "3kjXTLebQVEpu3qsXmB5bLjM9P4s7pfwTZgoXuti4yQHT8Wr4FjB6x7QoxzMXAtW4Ynk9aQG6J7fj6Lc7guTg1RH",
  "key43": "3P9L9DnbWo5XjWpmSSwu3pRsJ8MDH4BeDdjDjP8pvHW2SnwT9pMsRRRZDTyyAtDSxn4tqvxiN3Jd9uvbtfw7hWgD",
  "key44": "2Km5rEYVf6g93wcxG3gHiJrmQ8H52TfVPdn8ya8m9sKLqMzmTUey3bA8u4QYisN6vuXyHEj8gMrAXhPLhFbvtCoV",
  "key45": "5XBru7xS43XFbC4nVxcJQRmqVs7manFmRm8hjx7uNWb1NSkm9tyhcmHybfv6jkNi2PUPmnE3vaxB1gDXCN8KHMc9"
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
