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
    "5AKQ5KTatonMYjrSTwrbeE9WnQGSrSCcyNfSWVX4wYAX1BP8ahYY7vdzvvKT7pNoUevZBz5yRrWQsTnZU5h8E7ny"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52n5ZMQ7vcLq5EV3fMV2WPZhmXRDp5fKFZu9KsL9bMD8p4Ap9uHKZYYbv2pGB9BcEXme9eyRgt3UrYGyzQqmNyiG",
  "key1": "SHYzyeRUngdTMXF2m26P5hN5QZvQfkoVRf92AeYmschuMkE5DF6nYJN37F9WxfoiZ7v7BvyV6LbVoRNmxvJMVZL",
  "key2": "26BHnmb4oEQc4oNUeb7q9GVurB6WEv49tBwHsa3nRevTSigFjU5UbsxWFKhTYn1Dkei82xaVzy7Tk1ZLSJn6UkGB",
  "key3": "29c3Ci73U9ZYw8Zey59kFcg7QqmWugTLfw7PVrETNwdhcxAuwcY6gR4cJcb9pU657x4mVfEnbU3uxKELFEe7AdSB",
  "key4": "9m1Y7BH2yhQwzLnnuUZaSXoyZjNXq6uM4ZQaqWp6AS8AEbxTEyytY8Vxgoy7jfCw4DbmDi6BTD2FcK9hr2fvWKE",
  "key5": "4JDMKTxShGX4CrSMx2Ze11a66XFrgWrwzawYCteqaqu2SW8B3Vw1hzZQtHv6XQjRDW2Xb5MZw7dmSdz1ehec7Gs5",
  "key6": "2Y2AJ3CcDivW6daMFxMQSAhnTjvogV3kG3d7kLuoAB3T5JZRKWiEx6uMDHQSXxYfuKjM3MU1fYksFv11UDG2RP5",
  "key7": "5k9KYWedyedwkFVtMaJ3GRBoabU8B4UxaUJt6w4hesuocoJ3VZd88JcN3wNvwbnniPLmG3PvZBL9R9qCZzSMYLBV",
  "key8": "3uuLjPqAgWKVb66Vg65NwEKD7L5dHKqdRZprcALjGQ6tkiLgUuEvCCNKvRDZHku8gghkkg7zv1B8rz4Zwc3ucAU2",
  "key9": "ZkcVReoxbTwkdUwUUAbCH2y7Wq1ezkusQJNsJ2ovSD8fRrFVeCSV4FSKstA8kCM2SRzSNtyrQqvRZWeFodv4ScD",
  "key10": "xucRpoLcL5KYJQcEaJboMTiDHt3m6ccaaz3Aq9GWDnATU1JpKV4aai5TRqdmpQSxNkDiewRshW6oZK7ehorbwN9",
  "key11": "2bpVFnPLntx94G5vzuHXbw8aJtetk6TbKBRUvVoC2GpuiAXTDZEnAfS7VCcE5HV4vtA2qm7KfNjXHkr33k7yiiu8",
  "key12": "4AePZNiS9fPyxtBSFRdb9jGEPNayP71PJFfkWt4tBMqDDkikJw1UufqDykteBsHpxtzAyxh2MRpJJfveZqxXjToU",
  "key13": "3cdwDyU9HcmAkGvP9ZZdXFzs8AFnXTtQuR6wbryEkgc8vc4Y3EYX3VSgMucb1uW88VFJkVd8mXoJMkN1AssFCpqq",
  "key14": "5ymjQ2mCrd6iG5gyjSv5fiWazLho79VTr3G1A5G1421v8gWtuiPr57SdLcsvL7bXzii1g3rsXbE5xLKLQzUryArA",
  "key15": "3CP7Su4JFHfbjgFC96WPcEnZzWofYkJNKXUJsKMri4Aetofbgx74BgEyaByUBd37RJu7wM1DBw9VKw5uCw7LaoVC",
  "key16": "2DK7ZWW3VG7qgZp453rYFUrSWbDpqKHpqHFbVbdW6nFETnRx43cya5kNu2dxjukWRgYjXeAcT2LZHVuE97JP2r1w",
  "key17": "4WZXfm1hiZD8kpL9Rojgv1ejUzAg5Z1MWStP5XnUoZs4qQW1AhBK3DhHEuSZDpQ9kPZoo3f7jKNvsPJ8JLjQGQwJ",
  "key18": "2RoeRzbGDmCZwuSTGu8epZCySnWrmGVK2i22gsYKFY2gZZ5DQLqjGmQ7ohLtZxSJzQJcbKxZFzu9TFAnkKUFYxxW",
  "key19": "3n3xZScG6bvpWf6EgMW5LDxsmqXmf4hDnYiPAgTZ6Tuwf9GsUmE6isZw2AB6YS77NP2UHj1bmqx7tpKdYxJF7Ez9",
  "key20": "2RACTTD8jZSiWXpS9zkSnZmWQ6HdwQbddWxS4tCA4uT2Ae4qd3i3Nv5p1iMpyAwbyucPZ4KCvrsrTj3bbZvy6EM8",
  "key21": "5PzvUbUZfarpcRKrp6UiZ2jcfMAcrwMee3SqsLu8wH4hsuPGZXKfeqC7DwiPhR9SKimcvbpxNDjCNAk8si4dDimu",
  "key22": "Z1zqq4qquVwDUePHrGpNMxbzww9rA1T8gpcxpuUANmDRhhfS1iWFeCepW5ouvMnAkpQxv8X69BBn2x71RnpB3dv",
  "key23": "2gJipKjkKiKmuxnocSG2Y8VgachhzPw7SRJdSL79WV5YYc92ATXP2ii3X9ryYs5FpJLdetZTmPdrrN3L5kBHGHcf",
  "key24": "64b7qPPdy2UHKTbM6qNQW1uvR8tub5Zx9eDXoMCHV8E2L2yqvRUo3mrhYtLSbJmQ3ivti7YtB1jKJkZCX4D7Mhoh",
  "key25": "1xG7tDBKBA1mcGJU2LAdCnwtZKrRdzYhZodbuHt4GVo1dfWWoZcmejL3r4bi5Gumro87FhecpxNGMo2V6RDkWq4",
  "key26": "3vVQeMxQMq2qT5up1xBMY7KDEWErMLeg8BP2fxtBi6Frae3cbpxVGHvBX4Xafb7ojRhyc1z8Z5Ba5zzHWpXCtnKY",
  "key27": "SVu9qrzuNQdxba3G9CzSEEafnkFedUsXFuLxCoFBoyDmykXu9WXRYPFZBPEGfwe1hmoLeWYz6xsbEeyPNdhx4F2",
  "key28": "3VGj7kyxkRdGcNrgmZnByiNNGJb8cXUFQk8hMLTbLXkw6B42B3ach2Jj77Ni1Lc37BGH4Jh9xBajvSj67FNcMoW4",
  "key29": "5ZHgKvMM99xmjJuPL1LbrUah1xydMbNjmuzMw2x3XUE7ZdZzKhPV2Crt7njcheA5hXvTAnHB6gt7wPKWCEQ8zP5R",
  "key30": "4cZVifhVB2ysCmpKVgKWF8jjb3AWKgwBaxBZBi8HWj1HnDgECjXcZSk2vV1Rc6jVa8A3baUVFr9hrrSm1VBj8p1m",
  "key31": "5dCJ2VuHE2nJYpzycUgMyqYpDQzqFCxt6GcxBGC7yWBrTY6yNZ9GteQo8rRJ4uWzNMt3omLJiEKtzDDikauzQinm",
  "key32": "CtiTQotvaQGP1o6pV8Frpx1mThufSx2kQEBwtuWRMM2G3DmSz6TYog5EjX8QoQ5bNSgD9MQoBZmg9kFDYF64e8k",
  "key33": "3GpWeBxaHah29TZhhzeQjBNtKijpd8epn18d9Qk4Vgcz85roRbWJoSq8x72UN9Kia3836W8U9jywyxpSV9DPQpHA",
  "key34": "2vf56TC7Qirb59nq4LArFeCnLTspspyVCGf49oxitqCyxTKgBy4Qs7TSgynjVuTWoqYF2FgcFLrpybnWZFc2SnoV",
  "key35": "223RUEqTqHt9qpoYRUiuurxUjg4smzxxtLFiWyv8dAVisR9oJKFkassahP2xswjUFY1mYd4myTKnR2MQiAvhfKY7",
  "key36": "2QD7r7xKFERdH1ARtmeXaMJFFUCiLMHpKDRDaPVLVhgbTzaDCT4AvTThAb9sNurWV6oAzkyxHGXtkDAT6qq7DU7B",
  "key37": "2MoNN2w3v8dDQKRJEfbcd1CKsfNXLzceQ86iMHwtMfriRGp2HCoCmdp9e4xEECc8X7uuDnmDYeX4AQfU2Cco9fE8",
  "key38": "4aYJEVfRraPjn8XfKyNDw9FSNZtU8vmDAoSVv4PM1RSRKJvvLyu9W9LFMHnSiFUANp25sxkptipifmTqojed9cpj",
  "key39": "54itso6JbE8sSzUaTDSczWqJgq2XD5Y3URLuGtuagPbqxErzusoJ2PRBjZmcNWpDS7gu9SnaC486V4yu2jp9DP2r",
  "key40": "5mXCyN5NPSzwmixtodVUERsoYtTxgUXCXXpoWqKQD3ShHgW52JinkFiteWAQ5UCthwayQrm4YYBXnKFDVPnwssK3"
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
