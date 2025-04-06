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
    "4CGFVBPTGJu35ZBTCz9XZa1v1w26jmBokYfHpzNJ3oowTUsfSveEedBqCniZJRCFjL5ck7MC6vEGiRnAMZJByHv8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XGqLYjVoUSDDY1zPqfVnzcjUcCVg83wdLeTB4quT1ZuWG6VdYwRZzs6e1kJBQ63A12HJWASyUaGYzR7gPAkQzVi",
  "key1": "4BXeNdgo5WxKGWbvKy95uAKPYMmoeupoy2vzy6Cj67tGPt5LB5Vyoocoisr7gUcMw4RYRoqg63bSpPVSJGugwd6n",
  "key2": "2a4f3Uhzw9NEdt3S3uSaHvFsotC7AQqdeCZSekGXsHUKSH91qQ31MVH6HrH6jJtfhiU9GyS3mPjnLgNK4Te74dCM",
  "key3": "4MUMMREDyvvj8tmrN2Sr7AU4nwTeM4MQycA6z2U4ZQi32cKUUALzaJVKe28FgxATPPcyVsELvuwdpEgfWeHETuAg",
  "key4": "5PjmC1kVcvhL6v63bRTp6U2uikvHYLk6bqYC9dYL7ienosJZ2bj3r3T5iqNio24CkYdRY9NuiAhR14MHf4xgQ5hL",
  "key5": "4cCFAArUmTdmiZSFDo8xeyPW27vcCnw6XgLdENm5UsAYt6ZTeEqgQ2FAvKvHS2YGXbxRq4h6XGUkZJ3VCixBPEVE",
  "key6": "3Rd8u7XVQ7UkvTSGZwrBZrwdjqLJ2bJzhJ18d3TbtVmNCHp3R2HXH9J1tFBdTXDCbdmsRDzNcc9hdTfeYeKCosmW",
  "key7": "2CKz8qPMTmkMgyyZY3jhSyYzWYTreobMjdp3pauaeKpq6DzMszsmQefqkdK6PriV8KuQYdRtXsUnaczwGCNTK8z4",
  "key8": "5296BJip981qxFWVvkWbahhrszzUk6L2v1rneBtGLd18A6Tb9Yp24dqSa2vFoy4Qwj48bNvN7gCY42kC1D3SqcVE",
  "key9": "4mpwpeNHhWTQHJuCczPeXRTbS3NuvxFdVR33yXeN8TwyYgAZv2Kw6gVKStJKtu23zHJAvVD52uuWS1nk3s3c6wao",
  "key10": "5gKPddjbrysdfTPGppUHev4JDkuNoJR9BArdVGMizm1jmaqffeok5cQGgESmg7EdNJgoGAc7sVFjuuUmGTLqzE7T",
  "key11": "5uzD17g8D2CaLjM5ZuootYK6hPXf3af6vUJKWciGgyoaHNtSm3xEvzBwdGrbSBpQP733WTkuHZTdkfYbmhn53id5",
  "key12": "2Wbwvd7gG7NzcjPhVjhn7VdMXGq1vdKZwQYhLXmnyiNdSvnh3eQHw24qKURJAG616HVKWV4PUV4iaZRHbzniBykF",
  "key13": "2w2SDtnJAyBse39awX6f4QHMci7gukvyKqRdQBttTanzNy8Bhcg9oVNJuRbc3pGZdQqJ7K11LRBWaDqAhvM4QojL",
  "key14": "27od3tNiakv8uBQpa9iakhkt93SYsxnUDrciiRrX5uok8ECKr3hJrqErfJWRRtrVqMLooJJg7mF4hxMfnHAJGDDW",
  "key15": "3z8QM3ppT1jumvDu95jEh7f7sAf2fkRFFyqh9VziQq9SFbCBPojb8VGa93FNJQ4C6Jnxc2MnUgTLSmJYu2DbMnXp",
  "key16": "k8WKHdfkL2dEg5SJbNzbikSTrGCqduo7xNYdPRF7rR5kUwVU4eSt95Coyn2pUCThUdkYEpNjqnCkWXpAPgB8p78",
  "key17": "3QaXLzx55c2r9DDKFrNCGAesfzytqdLWjjy692Qc1zHcEhUBwvp3y9ShczX8gkFvxsENkVitm2W28dABXAotXnxk",
  "key18": "63Y6r8h9jK48JwPZyjShHoRvyWgXHx5DSN4qEiNzuz6WD5VPp49MbqPXxaWijkExbDmSTj9JMqBHyUL9ymSpQ7HA",
  "key19": "YbSkkiJvqfQTH1sNvtz7vbCHzVKRgcjbpXhmTWEfivBjuE7S82LXVq6dBXz1ifQntoJB8dy5y8FMTnknRvQVY1E",
  "key20": "4DJ53QQtmFwA1kzK3TXnHERFFKDLhREc9Q4ow96wGSX9uAVuQppdER9ghUnEXbJfVmGhyAd4QbKcej6VUx8Qt3r3",
  "key21": "5hp9KeyvWFpLLqHV7W9vFFcPvPcwb779bC22VE4VE2Lzgmg5ENQKTLTaciWXGQHDogBrkiGyF2nNfrdK4JL5KTHL",
  "key22": "22iKLU6iUsPNMUa4DWCEu7uXNft1FqHZ6Augc64PL4apPmv9kjrh3mxTfBLjTK4eAwHNDSZWNGAVE2UBxL2Y4tfV",
  "key23": "GynMWdnXpukx3ZqdJvaZEyVpvzmwC1FdZAGD3JmzbyiVPb7tmgDKeajsrSYtS72zaad7cYPygcGmVeDZ6nnjjZG",
  "key24": "4Ff8QfCdVLzTiprojJWZENv3xhNG5zDhT3jg87c3W9oM5kg7ppqUsCYdric2BD51tMN5FWTUgaSK9gxoJHuyUgRL",
  "key25": "43hbMswy2u9C3Kxdjw5o586QmSmQ3gVGpQC3o6cNrSWcFPA4Ms6X2JrmcsbS4TvCARPRbJ1n7SLbgzqb4Ph1NG2C",
  "key26": "5EexV4yW8KvJ28HA8PDrYmZNYNsnJnq6aoQsPGVaapDSYKx2UDyJZwX88vj1yQCZCdorvBXMYAQsXaMFfhJGpFZQ",
  "key27": "2nSq42JionWEJLdNirjeM4YVmDhjCZRktb7ksvXcN25TNzPLDZMi5U8NofWReYmEWVGsNvYf1Mau9nmvEmcW7Tey",
  "key28": "2Emcv3NDPssf1uxRsUPKWXHCn51qMtoxkv3wD8vazEncHfXDdiiN9PwRUC2Uge85sL1zVYuvmVrfY3Pz3NTnEBLh",
  "key29": "23udtupRm9fZJSp9L8kiSNE4CP1HJwWVHTQpMWnouwve42q2j5CdJbztgbTK1GJ4i5bAK7PKJt2Zj2KuHqbU4WLL",
  "key30": "3M8yEPzwivreNGfypjnLgN1VNXMZ23gfgXtjQRbnoZepu3gNs2AmuQS844VxDGziGHkLraEmFa5uQwMU45PniHrN",
  "key31": "34QyhXzbLFuJGPqkW3xvUQMPcFKt6BiV6H2rdk8Dk3kg1B9Jb5eAys353GGEPxNLtAQthAf3gdkWSXLgUhkaoYBS",
  "key32": "39tKAz6ddPDekez8jnpAntHAASYV52ayqJ7UGrKixemvVLctNpNAkCfUtGfFNJgHsWUDXZMkde4bYQDobDidRtKj",
  "key33": "5dagZyDFhpDvtjST8JJMUZW9MKMxQqbS63E2SB3SFMYrTBS6ridR1mGexeU8efEMCnyjg33yPfn7T3z1YwAVtnPZ",
  "key34": "5RrXe9ZMbsVgMDhyg8d2cWNhjN1ZKncpEYQWEjoLRNNarKj5BbZF1VTzgnJrcuvFU3x4UQN5owtNNRoFzXiU3x2S",
  "key35": "umzZmnvjhmtEUM8ZV7dNV6jntjg963iWCryR4ydY71XKSPgQBezjxgxwBuyZUGaTiHkMLKDQFCpqQxgXyybH2YU",
  "key36": "22EpdNeeV6TwxmbjjmBUgQaikfTCUoUbrUjMYYqdz4tgYJ4HEDeDC7jrW7UB1yrZEx2Zg94Q6AnXWkEWoKypLdsu"
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
