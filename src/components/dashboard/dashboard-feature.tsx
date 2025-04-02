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
    "5PurKGxawgFnnf9WGXC2n8Z4oaRxNkAPRkEncFhANAwfAjTheHowbJZDK63QQJnd5DGH7t7VdjmWAt4z1qJyz7Nt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "516ZqiMHsMP6XmW6f1tJ5fvnwLC2tfVhSPmccWxP4m9uVH3JcXE998qwgjRdaconH2P3hB6RcbsaURAzFycqVpN",
  "key1": "2tKA3u2SiQmVbwe7B6o1ihuEwTbythohVM3hddWErnEJdkp5eTbuNPMmRL1CC2J3SNCaaLKyLtCMbemMbRv6Faut",
  "key2": "3cxXijai2mRgNau9sXa7oD9DuQTTVrpZrUDDnyotVjrBa1C6ysiK9xcprXpik3A1AGFRcZoDNhEhuArweD6o6aS9",
  "key3": "5TciNCgcAZhSP6AtARyPL6Q81tBbTG6JjWaNLNtAFTyzKjsHNBrZrhTzoxYoRGmoV9QL4VPCLwA4t4jSTXf1AT77",
  "key4": "43oLmUTvvAAdyCGkH9wBoZrR2RnN6VMtaZGqJqF5V5yy5dg4ZCPmmZT4cH1iSjj14QqzkzMjvnki6dtGxiAoEq7f",
  "key5": "5m4zdn7eTYX5TZqfHZsJaz9faeaXcerTLqbXT8cen8KQ6vK26YqQFrsFknwKS9kDrWk8jRCK7d3A1uEjGphTuvWP",
  "key6": "3bMbX2CAVbJnYywL1wsE5GTjKtSgnhJqmApjHMFiLoQTLij39ifXamDsyjRvVoNjrSNPSdiUXLPcRjStFbP4zy5P",
  "key7": "64gSENaiUpYeEh7KQb74YdArSPiBY7bLtLc3kA1hjFzStRj9raQGJ4UGKqtVmPu2gRCGFzscG28RNMjvWxAdALHt",
  "key8": "SKA1g7Bp5BhXRkgVWajVTo4VsMEt1wJe7KfTwS6q8aYNGbJBRZJU6JYJ7XTXt3Aj7uffzxbD82Lbc66LudWc6ie",
  "key9": "4ZhBoBWRzuYF5Far76Qt9fht6aZYPzyyzPbLqTg2LNCV3MEgpa9Dp3HhXfe1m884YMoWhyV6UGyKESu9sAdNxRoB",
  "key10": "3ivUN1dXNxeg2UTttNH5WNqPTxDaZtXzE4zyz28Dn6gG52C8GXeDFNcrj4JqhztXMuGsUVS2trrLF454JjSQcTGf",
  "key11": "2UMCNgBaELGJVdEfaGAmUSVyP1YBcTPTYwbhui9W9ADfAWq4r2S1JchfNHYUWA9qMah7fkwSRVDSw7HE785bucCD",
  "key12": "3ZzQw5Tou244mBMNZuo6pDsmAWssCWDThMBhAUmPS9zWCY44QnzEbLnaEacWiK88JJgjRWRPnJ9d9Zcn4Hs1YEj1",
  "key13": "2H6on27Xeq7qNnZd1Vpv3eGeG4wntxhm6FHhENHoafUhTC8iSgFnyN58wrf6FhU4jJrwRYkE96fViBG6UnkGthWa",
  "key14": "4t3XTL3TPsH7FzRBX824pr9UqYuJ2s3Mw6bHx79bTPKJnww1AQoqcfktsE8QMBziztU4vJt27qUQp8WdHca99wLy",
  "key15": "4p2NuemT8CQAGu5afzHj8QY9cC1UXHazb5RCGidJgD2Cdmg81276F7nfoayYMRZADq47gZqmmyfCUiHcwe17iEcr",
  "key16": "3yi44sVoHh2HKxQFCsiB1T7HyUgqvipEsNSbJW9rGVZ54rzBpzWrkMyjNKKWZVUb592EptPgCagbmPby62DdbFoH",
  "key17": "4LBfnAPYhugCdtXJfzZZ8qPG7PgxyRYFeXqnr3dDSeahUpaLPDiUxtHy7gXfhwm2iRRSuMtz9Q2TBVgYteG4RmBN",
  "key18": "2Zmq4sLAEeLc57wVSHFNJEYByb5vdfzxWRqJpoSX9jtfyBttgdKZfwW4NmgGvmftSrmoj2TH4Cgzpf8gd2tSGVTA",
  "key19": "3TqWFtSPXQXio2oK8Fw6bXs69kueWxU7GseQaFmqpGZ8KCFE8fhWnHPGvYyZcW664xzt77fhk6B2kaeVnEFwegsS",
  "key20": "32BW3rPNodJDik368ryeHAwQS9GJYeVuUyXjaeZfpZZamtgwL66QwZD7RMYs7iGG67zaHLW1UEMBGh2RgiSNCSYx",
  "key21": "3rhkWq4QhDgmownVSLscvzDAKWwNQdC6ZDddpomSWbsuUNp4wfZphZQBe4wFLB1BhpkU7AbLvpDLD58viw9u5sX1",
  "key22": "2YbdVgmG5X1yixhZ7pcjZ2hn9rvogBMMLTBMHMRGzEA28zb5kZgQtqAnze4BBKtQviFjvTqUbRKNYyNcQ9iKpKpM",
  "key23": "5G7PV4Rv7aTiBqMBHQRNspgiDrsfnHywVVgVKCcDMDBL3qSfEuFAYeKbagcdCVJ6uAQzEx1PyhmhVEMsJnBdT5zA",
  "key24": "4sEGa36ysoePNtYjRHQvyzYkRYQipddr5wnWCT7GqnNTD3nym2hUkvqQST3KyYa9v1aXEnVuXM9ihmoGYzExLB9t",
  "key25": "4c5AZGkqMAZ1XZfcvrHAVBh186jbnhoqvo7RpqeXFEYPo5v5UcBTBWFbbz6BDZrJxK9we2aSbHHuRvspAW9Mm82T",
  "key26": "o8GeYbVHfw3WFuuXJHh8ANjzas6gXjXR216U2nuybZSF1dCZDND4hLQnSGVRasZPtzvtWVRR3ZLyAqGuQXPGz93",
  "key27": "2LmcQtdrF1Ff6p8hzoM9z5JSMU9BH2iWpErRrXLu9SwZqCexUudEEs9Ru4a3WRSEu8cu4x17r2FML3N7SzDNpJb8",
  "key28": "2ZH6wp85zTS6Jt25cxEQHRRwqDqm2duegeyhL9k8j65wEyhsPftUi5LuTvSM9JH1sUhMDuGSZdhtNNjjvqbGHuGp",
  "key29": "kAoGbCRwrgbauPEWnqyDJ3BHVhW7CmGEex238px9VaMBo75mHVp7bi72yR1vTqccWPTSKDStsyiJDJzxRonMS1W",
  "key30": "YBSPcoqoGNXDeSJfqTENwLELYqVdZJ2raQ1ZaQAY7WGMJiaaRDgkhSVoiv8poAR3UHpXAXT2Y1ezQ6TJBvkWoZF",
  "key31": "4AAW4bfTHAcYJrNe7s454S8HB9ymMY6jmVX3wTxwiTxuRC514VGucHzrSkGkP6c4Ux1zaJNYWf8ZU5Ej6Sbu9ktE"
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
