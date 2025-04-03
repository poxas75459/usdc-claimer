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
    "4RwHbyh3bfYLh4w8rknpAY8DyVd6BiuUGemZkCEkeqw6UWjpRPxJVKRP1C1SuHmSXywr43jXQ5DmDsWFNKX7ReXs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rwpuyvM6LCgWnRksQz19r8sewC1WEWajBbnSbixLmvTqk9nWmtoEGhxyTWayyFWZVH5ggtHzULUhdKE67qBxfQT",
  "key1": "4Sd1n5DRLx3WmBwRkLFrARLqBu4B1mi4wMyYR2UVuTEvdCbaP5iPMjAnYGkNxezcdAGeaHnhEhZvKziWVRj4ZyNS",
  "key2": "2QBXidJarVNenPQXZLtREn3upDufRKqJ1K61kYsu8NqLFZK3KjaSw7PYRoQvtcatMRSdQSwnqTSyK9svsQhL3hxp",
  "key3": "2Gw9pDUdC1213VG1nb6vRpz4v2ZkmtphSGSBnLkkrbsCPgmdSnkmQFieCoAvrMYBdrpU4Zv33keDMu6jZcxmJ3Ts",
  "key4": "2jgJDvPvoBNMjPQjG38ywUpvzcXbtbvUJUrKgQJDXbi5j1MbfBVaqrZCuuFR3dEZ4SqHhpQno52p2fn6o7tJCtuz",
  "key5": "2J62FUYeP2U6EapuLpKpXEQeHb86WAkdsLuEYS8ienCUMYzc82wyYciaXgK2pqXFEpHPmWM2Fwu8tY4aJM3nns55",
  "key6": "4XEHb6WNNSxZcJww8BN1D1kr1JGbJkJfXjqYqpAEnrEKNq41Z5Rj2ehtRCKq9hURcAozoRDg9CfkfryjwmK79NPy",
  "key7": "k6hHZxY8gyE1dxaFBpyWWTqeJmHgFTt97WcAQ8Wkt21jZBDWGv4GsG5F58fYV3DbSSDpRmXYjXUZYRkC4WZ94Vh",
  "key8": "G8xspZqFx7fXXAfJx8ztDnNb6e9a2gL9Db7co56v46EF989JRGbpgdK2mrUDxKCr1rASFE8f8PLy9UCTcL3fJa1",
  "key9": "4bHPeNUX9DGLhiRwoM8Av8kHbt91L5c6XhabABUZRqLPZVa4n6QRidqCZtXreu2UAedtpVV48Y143iE72HUSuTT8",
  "key10": "31ACcgju52mq3WCN7oVL7LzRMPC8EFJBSJE1p2Lbi712aq6u5TYRXpuH5xX9J5nLvkTa3PBh84JDNdcXfFxKUW4K",
  "key11": "5Bs28k8ak8yLXfwzY1tzk7Dn1CvAEvepv1zuisiXeqs3V69Lbtv3ZPTcaZ53JjnPJDDawMmQqFwHxXNcdFLp9nk2",
  "key12": "3ppayJGGii1H2uN2bscCeDUq2JfdSwVKwRs6EusuCRM5SC5qGcQDUWbSwk35xwGk1s8PYnZYoNLwBduQApoayDa9",
  "key13": "5Exg3Sasode91F6o3MwNoSJkBdgk1toHY2xxWopEegfhktL3GZzgcKcrtmfrwdaehAkPz2w8pdtm5MyTgScM5vTS",
  "key14": "YwAgjaHND4MqYou668RbABqkkeYk42izZr64u7rD1P6vMQnwBAhZUaDv13geGLqoJMHcL3CTutNfWNivgyMbDij",
  "key15": "4N7RUcj9qcLb5rRHgxAYBkNshrJWTXcPPcVtjkPcFEUTphWBTBmrfU4go9zhYCPtfAGdWE3oEHpxmayQ3xi3uX1d",
  "key16": "4EqXmGWA5aiG9FRURjK9fLzT27ZMxWbLUqYtecp71jHFyCoqWasiJfj4bTcAB7opQCd6JX6iYrgXA9QVhiR5878b",
  "key17": "DD4UUULz3fFnQaDjU84TQb954ujDKVhQmDRCFSUySpXpDMLkYBUPoD5o7s9Z3eWdc6idpjHPDeFfWCz2PfpTZXn",
  "key18": "2TziHh97SQ3mH4x1M5N6M8t33DJ2FqdgwBBVyiaZVsGDCmszUKFh4H8fQnCBDV8anf7ZVNLYf5S3HV72S9PTks3s",
  "key19": "3QzuT5gz3rW1cfrPVoQq2JGBGGXu2fvZULXUGm1qgzFF49YBKCfrVfVDiZ8JLZqMV2uPNFTDKxexUr139i3P8SNJ",
  "key20": "aURGsoeQUUfFbrGducLUUYKVsrqfANvHrV2DgKYjSiFUcxT9uiGVNLrZfyY4KaA2ABSLe5u1fRq2i7J2toDQCLi",
  "key21": "4NHKbv33p2hfHZuPQ1N9EYqV75Ed5xQHKS2DMGMAiLzUG3dEiFTKTn47Q55kJoqZtuUS3iryGMZJH6V51SLQPFSC",
  "key22": "3QJh3GvSusC341RhSjSxtoTDjmkRBp41Vm7369FMHjty2KsBT3xLW8wmGpxjjk8dHGYkYSFkqjd2wgo1FdAEEXLT",
  "key23": "491K65WYwHpXzn4t4Rv4hzrZMUnWegMv2zwreSy2hW5J33TGy2SDebrtoKS1jxCYotcEQrfrpjnMyo2nt3c8e7y",
  "key24": "2JWMbpohgVbMHDNmTXd3BFAXjcGMVC5HUw5D5r5z25CBz4PFhQxan1ir4JL5VwLQ1bg2kwrdM1cjtU4fEENrNgGY",
  "key25": "sLCtDWMJ3gAXHcJitfoTrn5WSear1JLxE3E7t2ekpRQAmDJfjYhP25LFz1bPF3pkcXTXBnLJx4tbG4nHsQS1vaK",
  "key26": "2GFG7k9VAj5FLx9Q2uRD7oMwrK5Wzui3nHiQKNsQ2qqKWbGQPoCxU5GrKJ7ZtVXRdrwvTTmTJS4nkhj8TVKDfd7J",
  "key27": "2NGg1EJ7Jb5ivQKs2oyC2Wz1qA2ajhUSrV4JrnrSpqtJ6pq3RvWCuAsNokgc21a2rfBvY3c9BBzwVm3FcCpvN9kg",
  "key28": "4CJXLf6hPCsCvXhKABUoJV5to9wRjLg4Kicrqu9rwB9eWcT4PTj6RRPkfv3Z6aCaKQRUDwLKQPJYiNd6SSYVBZnY",
  "key29": "2ZQSYtngFkRzrdEdho7gh5GT5sjrn3t5wwyAVk3hgVQv7pvDXpBWK25cpGR9MAKxx6Bh7oKeCjYspQcgd69UYQJH",
  "key30": "5gg3vyqZMiW1PWpP3JW2LbhbQhiZtiJBFf5RRWtoHq7cQUPQkTWEXMaTL1qS5EDNLxqaAMQbBKaCxkJYfsLHpeNx",
  "key31": "4EXgwQ6Na7s2Q6HGwRJBUyqhvsB7z9bxaAb5BGbPgfzxarXjW61JUUiX6Dd4qJaqMckBoiBwgHRyfMxtxxUVMVUL",
  "key32": "4eJc2NJc6wU5nAiawe4QTLVefx4BFRt3HJyPGcDDLgCRFwdBBtGCGc2xba8z2iBWBFGY2v2B9rWgGX9aWnBVfjqM",
  "key33": "4bqixJCmqa5pXcKJ2nCisPavf58DfVdFQUSFyoLrqE3eQgaRp9YZtjae5RYAt3eUMUCVrygp2UWrqgMaXtozDeU6",
  "key34": "5ECoWmoaSH1tsYbq6D532ni6vX7sLK38kNBkV2Mevni2qethh7SmgQ31YiKekN1GMidFsLpVP1Wc2BisjjVseLuq",
  "key35": "dUWQh9FopTHdKahrDc9L7LHwSJgKvQgtvKEH3HSmrcxqWAv1YDbhrP4GKBAZUUzsUpbsNaoCNxMGQ4LBgP2pSgx",
  "key36": "3wK6cy2hnbJQnKBsJjcJT937qeRBEfrrnLJaux76DhKE9oJ5fHDDpQGEyJzkws56fokBq9RHoeYLiEAqqiKkvYBw",
  "key37": "3ajdzCNxL72duhUqrCyBethPVKvxRzZx1VrL8b8QNkhswGdTq1cZ91EZivNYKGrymUj2tr9frzfc6AgsEWg6s3SN",
  "key38": "4736oYuo7orG5n9yBWY7VbhYTza5AKphfvTF3A7mSRx56kL8yhm1qKWUAdD1TiHmMaCBJLgSjTkxz9Xjd1ghSFpq"
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
