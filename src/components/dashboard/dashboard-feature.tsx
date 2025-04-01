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
    "3MgRwcykAWrE7rgLuAhjL1QDLZsSmwC1395YQN9GFMVNKY6JNZ5sVXLisSJLMaqS6KamuJYjFo1YKhsNv5Zb6jyM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pEhpRYE9X4xuLk2vSuNTg4jnVr6dWUW3R4B2sDKFcQkrKT7QPD8WWfTEwa3aHn5yhEesRmTQrD13Kv8hwELB9ag",
  "key1": "gFNmvRkuivKUSvnxkHEdYBq6rg2JrYmNjxyASuTMuwFKVdhF5WTqoYjq8KAt37jCkSNnkxSEEEd1SVD7Qcy7zA6",
  "key2": "3nFS3q1Jf9AWpFcZtB1miyKPNnWfWMUvKsqHD5eiPexthfgtkR3D986f4UuvnWRc3NiQmvxDTxBDpBJQ48TY8ACP",
  "key3": "4AdRpgziHczJaFj9zzARctLcpjKqyq9y9v3mPYHQiAoNxnhYer3hFU5VTbeFenoGHs9ua6Aze5BxVeLM6MKoQNK2",
  "key4": "pmDvXWxESaCtKrmrnabMe7xito4uSRD2f9RFECvRBjevmQd77NQPHTs4CnHBcRpR8PP1dghFn69pcexk333NNHw",
  "key5": "4Sutavo4VKnE6RNJYWiFhuZSW1LArAzi9dg4pUL7Z8wUmSG2t8ZNecoLrM17qDC6BJvP5Vgii2iq3iy4VcUAvyuU",
  "key6": "2VgY1NBwMooXghWo66JqcV5TTMzFFFWbULBbBTbpPTej6VaVkeKnUYji3GcimSkR9XyqCWPw5Bc669MQ1rCJwaMW",
  "key7": "55wNkLTYfM3vi1ECSDL1nY49jGeh8kfx8hbnWYo9C5aYjjmk5p5BHEUvob1tzWrKrxUpUi6tdhnVY9zu1yxpQPTi",
  "key8": "CGdPaayoYfmGbms1ywEWdyghJbBTHFfCCsFvyeZZXJHagj5d2xYftYHwYNzrsbw1UKBR4PWAqTstsGQyPmbEvsL",
  "key9": "jTLZEnk8wiPBsdRFvvVKWu6tiqGYTR3scio6CXV7NKfe1BcFem9nfrVBUWMJX7yM6iJbFRhApNSmx8jyv368YaR",
  "key10": "4GYn91tT7GRwpPTkt9fT6zsKKLxx2UymR7tNtkm6NwAUG2Lq5QwXGxai5VHCnh1U2amZYhufqV8wWHwtfxXmV8sa",
  "key11": "mHCT1UDaejdWAsJNXJbpVn8bnEeuRwrPuvFVbYWYn1Q2cyDoMNSrYQth26eGXPAytws7aokMn2rafmDG6K8VRPN",
  "key12": "2PHFfb8fV1TXREB4QavjCtQXv1TsGpzQjUXGr6Z7C48djiQhkWWxfjUhgb5NWxLAskDugnyU9aZPGgHP7RPhQrb7",
  "key13": "3dJrAN2RXk6R9QYXn9Qh1jGB4RBUKREzxQeUCKNAbKZgc4eAfPdeycqdqh22NSNruii9zZob7duTVKbN9Di4bmpd",
  "key14": "3ajbcCpAQgvZVdLuowf3uByWiPQyCXY1yYPtigwz3nXmLkqpQvgzMT84Ae5gGqM21arJtu31kvHX23mKaek5HHJg",
  "key15": "5HGkh3CgNK8cZD2oxC3XMNbjZfPJP376dzsY1NXJCz2QkAKZ62XfXLmh6KgSGKNRRgkhkueAMj9o4HSuR3vFgJSd",
  "key16": "58vhrd3V5L4uh9BjM2PCt4FkMBTSVd4A9UmVPDCqxjA4FNHdqg3SrKSBQimhFAHpDAgYbnQoJDUi5SCaJBHMGCQW",
  "key17": "4mvhtg5jLRypp8TwUhtzVA7WvJXrU4bhpiAP45yLuZYjbtdfAfpWkGhBg4W1CAfy3WiGamFLAdE7Uc6y6MxrzpMs",
  "key18": "2V3re7gabXuvW2AQkrjTycPBnETAh4h8zosW1GWUh36ajSRZDvZC9qXk4xuPgXZwD3Yeeu7ZMaw6FLsD58RDfVRH",
  "key19": "3JG8pcKLL7YEwNSv1EdUvYLfbRKXqGe3rb1tDdk9xSP5nwmTKnhFobTtuyj2nxkzLFPStqhQY1ikA96Zxz6wMTHU",
  "key20": "2dsgnhj4mCaf8kJn3e4qB614Zq2URaEeM9ed9MyMTNM4sMq6NTF4NbaF5PXbRyGzs8VY3nKTkFczL5K4SJaJL3mX",
  "key21": "5VxUfwpbCwny1a9W6jgFzMCZyy7sBk4rqYVjNKntv9o4haCqoDShV1V7TDp4tSkuHkmmvYKofocy63qqMpz97Sid",
  "key22": "61pzUp7suaVKaYX5KQTo4LCY1e6ZcD2vbFpEw6YobbERD8PsyneLiBvyE7zNrFVfJWagDKKyu128CvJQAgdMJcsT",
  "key23": "4LeudPr3Q2gXLFQ9Uapy2oAeYqyWGFhRK3bPty8VZBp4q4XwT7t9bXaN7LAtr3dQkvs6Tp89Tzzdt5ztuqExy4C2",
  "key24": "2U9s7Sbh8UVNfFHWDEm5k8oNyA6tq3hFEh9kDhAfZuNyNKyt79MQRwLPgMeLZzJs26mRd2rixR7AoaGacFLn1ipA",
  "key25": "211v8XvGRdqNfgj9qDjG8jbcCmTHnEdqMZqMFMHX2Cc4rbyLXBUEwdQJNQjYtJqDJQpro6HNHYnuBoQFiheAs9nz",
  "key26": "vp2NnVm3nKo2nsGwKMGAq4FC2RcaGPBNFPBjXp8DuPNeWbBXHdFFMctEY5DmhCfkNEiwcphkTjBUm1hGAGVjrcN",
  "key27": "kz3WEpU4Cosfj8UDs65GtMYZ8eGmxBQGziRnRrHBqB7A9xWH6PJjjc9XaqjSKYsfSKrX6UKpB21uUMSuh1XodBn",
  "key28": "5nv1r1k86uTG936L2tKmH2Q6BS7UTXf5mZp4kSrjxhChUq3Yeagonqp8X4eBxAVbdqkfXMmY7iKcWx6bxgt6P3oC",
  "key29": "4v8qXjP9EHztgrbNwPoCSwYWfukNiiD3eqmkvEvajYEjoUWyXoZ6GUrHE2CRx6E54AenCpavqcXRUBxXawwekJq2",
  "key30": "2cmyx4wDErEj8TkWAqa8medzxWF1zBWG3jDgNMsJyJojk1Nynf2t4VwdPRP7iGLXEsG1vf1xS2dSkopzvYRMhKXr",
  "key31": "4FRFjYfaMhfL2h7YR2UFrUGD9dXPT6jUUcLH94EsbcUVnXLbyRNt76gsiq6JVz5TNFV4J4MEz152zNRSHN3tRew9",
  "key32": "5yEeMqfrpAz7a8AR3T4KWwRuxoAxoxpHaBJZXrC5oyE2cEWz6sACM28ch3PHE85hwipq4qiUgbCt3mFfENof5asS",
  "key33": "3LWUZfeoqafzFJyJc7ZQ25E6aHXh7ydWAZgv9F6P6vgPRDuANaiscXSDr19kLkoLu1raLp6Hqjj6VMJJsgrH21kW",
  "key34": "3WxGb9eh7MC6mEu2xMHjyyxsda3VHSDFj5fScWtyANLSUrQVtc3uocMgGkVC6mtPchMLEic9XJi4YfQ3nEdcEvmt",
  "key35": "3k9QHFssKfWcPgA7HTopy6xvWUHoEmeFHfCyfjsV5NjQFfUecrLoRvWeYRKyNMygx1StoEHz1Efs6GRG9fT2SQcp",
  "key36": "4DfW5ew6hS1bDvpWb54KCrXAPwEgV99cuZSHgTC2k7qGKDKZAE3nyew6AKtYDRrw1ytstipwynzBrNVVMT8E6A3m"
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
