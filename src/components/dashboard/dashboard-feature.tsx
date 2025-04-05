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
    "3ryERLacKp2ZdifbKbZDquakp3QKxScXDwAjWTwGtweb5Kguw5rgVG7DS5nAX15oh4FWrWw5j5a9p9hrgswjSXQo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X9vEbqBMAZFrXJ4datfUT7Hc3mm52JW94qHkLqetF7koZMe5N9Bfy3xU9Zcot7E2bwp4YzpWjrVF6ZciFnCKavp",
  "key1": "2EfjpEjewBEKTwp4GXupJFXg5Mx9JAphxhkPKFdxF9QDcZRYqPtZQ8pmfDqBtwDMZrmWYLBRojTRBTijRRMMNc2B",
  "key2": "2q635VSzz3h2RB63ikRxBKRafDVtkJ3k3sbFUBNhgTYPWoEEupbPg8ko1vEzjYFJAdt8AaJ3vyXfYFmFHGDj1DKX",
  "key3": "NSstqLfJCgPS9EmtEwR6F2aXYW86YLCWAR3nad8Pq5sUcbNL5cYTNzq7zF87ovDjYfiQs1CKbABPar28VY3RzUj",
  "key4": "EPwVaTxZXMHAKL6XkRjN7vJSe3Zqp3dqTCshoWDn52P1prZTsCGzXVuZNkZMsa9vRKaUzw1RJpkRpBhSUfmB4hA",
  "key5": "2xo68jDgQZe7iRzZTM2M8Suxk6dhRjWeUuhQ8A9jrCMGx5eW3CShdjBxKRseQMM14fbiRZWmVLsYekwNB3RxDEme",
  "key6": "5ii1nvAdUakrFxwwUW7WJjFtn3xmPwnBu1ZB7U4yxSfVMZ7e4zPsgrjLnRmWYkJHq3wGjp1hbsJQDF3DTDgNDTCp",
  "key7": "4XYxzVdnoJsmNer3E4ZPYKNS8w6FLrjMTbDFQQawcDNvz2RFAcWTXamfvkfYAQ1QhtpPWRbDkXmJurPs8kMRxF6m",
  "key8": "4RyhRVoqzf6uppdtwVHGvWtK6MArwCeaZBzvVYXYZWXyUQLHdp7SWFhW5pEAaV7zsL4XxNFQiCJhZp4PtShP4rRb",
  "key9": "3SB7fSvhpCqccYAELsJwrHBpQ5WW8UiQCA5gcZ7XXdcJnKfEYaVxip2gXrfTMtD9TvjbtRuGwN1Udo3SKUT2muCF",
  "key10": "2XJQREwrADLMDC6ttGYaNo7GeUGUb17DtbzaSCF8Dwrpgwusg8qdNMZ5XHqJwZgazSwydMWcfLGuRa3rnbLM9tR6",
  "key11": "3oH5HTKpm2nxiYzzBRbVfDSy9y2HnzNiFKhixMcGF8oN3eDuYHaKdgBpNsfXRso5sbLjGiqBkLvD4gtxNHp9MXPZ",
  "key12": "quG78uef8JVitrHpE1NmeX2aTroWfLuT3vehzCv7Buah3z27eg3RUtG7txKVbFWPdc7WCg9oGEUzjkRQVBEyWni",
  "key13": "3zV7kD1TiD9vwyAyNbS3CgsyiWhRLgUWFXRorKvLUWnC4eQz9DGmbwpaZL2FsYkqxNiDQxs1V64EJGxofUnhvjRv",
  "key14": "5kT7AdX2DvVCtrUmgwD8YttZSv18DSTfpg7T4MvM4w1X6vLmM5Aii7fPtt8kqQLyoRtX3pAfHkE7oM6ivi99rnBu",
  "key15": "5e53Q6qaoU4UU8JdW28zNsd9hw7JWBkz1WzZB3AjpTZHSx9aYkdkdF34nwd2mtnxgC9RLFMyLhM9dxBkvdSh7EsV",
  "key16": "129GsQbJp1szcRfPoekLNnKXhKQjtYwVaSf5RqB4CGwMhSQyUzevNX35AMPrzBGxp3VHvqwhKnySyeVjCKzP6mN4",
  "key17": "4PyBuBjCnv717EiKwoyUJojawZAxbWjHQyuKJskbHyXwXL4YQfz9CE4s7boKKkcTM91FuXiUgfJeZ9R2oVh9ir4F",
  "key18": "61MAtc4RaRHwk4MXSifKY5C2zTBsr3P2bqDn2AjipW9odYuagBriTXeTSTXAeWBPLu7m8oFZ2bDTGerBGBFegyCw",
  "key19": "2hGGyxLN54UbkatvNns9Gu9B8e4cQPCgqQNVM9ttCYfP41wZXRrAa6LVJoxfr4gd7xuskMNZR61jCzyoG5wzBsbm",
  "key20": "3onHTZ5CtGjZKDRqQUy8X8f7eY9mF1qgr3fzC1cqSikpAA8CNomkePcqwoC4UFKGbqrZzGJrazxFMbDhfWtLoira",
  "key21": "3SwGQik2Jr1f6PG3NfBsr68FLkVGpokvZ5xhDYuMBoWmHfKeSmRyfEGaqvh7fS1EYdSFP9EyDmqfsWL5RMDXMJtB",
  "key22": "HcnyWUF9jHUeToNQE29NjkgcM4fEpmSjmCpvDEjXG9QjzuYYHw6TaQQPqCKPrhgUf3gSWYRRJPUyxm4am8vy8Zo",
  "key23": "4JTU7b81V9dosY9Pezkh61J1qu8AQGVPHV735rxzirLSUp2Gf5xzqUxKin1ZKcfH6ePJh3yd4jcPXgVvYS7xg9ft",
  "key24": "2nt5ZaXYsvpua8nGPnN5shLd6u8oQXmCQFQW8XsoSgp1BVcHcnRnSM46Qwyvw8hFDkrFizu5EZfuUHqu8kXBS5rj",
  "key25": "vnDRYkpvFmRRhsSNYyipBofNk8cVjzYds23fyGQJDVcqyCZmS9nvGJd342eLpwhyxxUGKAZ8dAquggGE8nNXvpc",
  "key26": "ksYUQvyfExSqEnqSwYN8KsypfzBk7D8rkctxe8YvXESq1biTyw3KuGCV9ajAh5GbQKoUQSJANQSryvJXUg4E3jW",
  "key27": "2UJj5KXuQUNZ7GCPpsMbwbUd1dqbqu6tJ1FfEQ2DypjKyhG41fpV4YK19KsyUSWqfwu6YBXQRSYiw35C91LT5GtC",
  "key28": "2kyq9sPRcvBNk9BwY9RjpXZQwjKXGqvbjRKk7ms93n2LYeWyAZ9hbwGYbUXENP7jZLQrVDgezTpJfHvZAY7bFhXY",
  "key29": "4LQoE2bGDXSmQjyCPsxRMMWyBv5EzsQYaPBcXmx4wFvinNF5jHNbEVfCXD7aKVyzYUGHw9J6X5xNGwRGviR2MUMj",
  "key30": "ntMdzLAmTQRJvD8nbP9Hoc4pb1AE5LzZwB1YP2zGGDNuAVP6RTrv39JAvt1yLgkMkNeaYms8qqgRcodhSmUrbGs",
  "key31": "yJepo67GzEXoi67miw8Cnh8493BePXngZ9FvUY5oRCr43MEs7vZVNxjgrPLhtXcaE1KW6z1Suq27m7W8C2Mxy7n",
  "key32": "4NETgjnsfQKba2qzKJyjTAovp1cZTUeyCZTo2VvMtV3bEZuQGyQxQzy2WL3mcrvHsyGymGBP6CvsTeoV41jn4wG",
  "key33": "zkbjRjQxSf475VWmqRdPUVF1V3PsfyCgxTJDCzs1DFQCtLAepVUAXmP4emoXyZgGoumZaoPErZH4MiJuk1vBgY5",
  "key34": "3x4WjGED3E72YaDqWFwjXVrwGLWZCxLQASzpjaeZuc33hoqqZdx9D7EU2LYv51u988nfhocvAqh621FxPRXuhidh"
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
