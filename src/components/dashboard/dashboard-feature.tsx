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
    "3ZXPuDoJ4VmZu1PGRpcnF8gw3kJjMvK3G6ZjsnGFeVBRprady4rDJuwXGXoAZsR6zmPcBg6LgMZh7fbigYMtAbf7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1jkR4k8iqvUn7vuvLheUaquTUY7GEyPez6cAte1uzdGircYnnMQcnNBVB19TLaKK3YgT7UTYGCebM7GRE6zKBBc",
  "key1": "49iSgaS581ReYE64Hvf6Yq7h9QTJGvb3atzUwMnGDWuJbzEa992ceNr4HJZ8z2SeLuczbouPYMb3531qMkkA4tix",
  "key2": "48ynnoKomV4uhMBmMCLZyAGLmWjDKsWANegbQzkFYPayva8KfChcqiHGu5XT7mYwRAFYbehuz4mSEHdJJzFXtfv9",
  "key3": "2reYYMzy1Cj2deX1eMgbVp18gFhVfH37aDMqaAz4nBUB4btvBwKemhPNJ9SNDxfjm5ThvDagCnX113zJ29u6EmRw",
  "key4": "5XGdPiFXMwoackR9BuFyXS8yhsE4RGfeoB6hXre33KbqDSJxABrQdHfKr4AkjgcnjB77Kkcb76ycycKf7WU8bA6a",
  "key5": "2cMA7tE7QNqvDCxQzU1k9GhX5tJZyTdquaadJaAGqgCvAE9DtvbgQrJQh5U9uX7KbcC1NdEPPwBGbZTcgQ87pskH",
  "key6": "4B8CBBAvqtTKWReecYMQzK8hKBDeJihgU5ShhPnm4X3VH7XFmsmXj45MLb1LKnjFDZ1JM8fK1vPv27FN6BthN53G",
  "key7": "4YyiYMZCbJ9uahSU5jTAPvjcAeE7rRLW4BJFXFZKw1vYRXNJeeBQcUQpp3DcmxfCp5ReSkb2aqXDRCx9gDVBirCn",
  "key8": "4qNgYJv3fcF6WzWw6FQ3yoizvC76jXzCTmbwwfQbsXcPimytwPLbyCxYw2RErBqfijfmd1ZCf2FMEJn5h1nD8swe",
  "key9": "4iyAZGUATBT4yTHU9iSHK8s71UuqaGZLJLHjH9oLLCAirnqrCsTiE15aAzMwKUapWcfGxDdyecVLWFFjUYyoZght",
  "key10": "2hTR3UiqrdosuTxEwKGi7QAqd9fo1uLTLgvytsvECTCYnxaBG3BiigXmgEj9UzDq83LpiVWL9zjPzJAJqxgkgDvo",
  "key11": "4omvzEx4gJKSAoExqKPyiS6TEZNunV6qzUf2ukf3y3unBgejqpKQnUm38B9y3cq7A2odfQVCbWjoyxwCuU7m8crb",
  "key12": "43Ygb4nqRfKmZSeoBXhkzwE9c9nCDHnv9vSDB71hL3rpoSPxspBvgFPzWLZKQUSgGBWrWGN2wk9NMVP3UGifhXoH",
  "key13": "4kzxDTNJYL9uN4U61u3SVrVVvVHAciiGA9svL16Pa9NipjukN5XQ1WciDyU3qbUqsHig8dQ4Tin34oAtgJ5Rty15",
  "key14": "2w8LrNQy8Szch6yBdpJXQoLso7hYkw8vooaigD2ukBxPP6nhbcBPLsZrYFHg8tLnSyQ3TMFFqfAsmDNYL1DTGxry",
  "key15": "5uqD3mTPLLnojiPFHrAUSbupFTHvCPC31nRqBXG8yRfQ3wTuGySpWLZZp8MTPL2CNecbaAKnMFGuThvkZkiwJ5rJ",
  "key16": "46yVXymwrYj2HMPsTXRv9FVSHR6SKwJypWBLJAt97sYGWnv5MVNt1MZCD7At66CYwUboLWAvAg7wvRcAsZwdhJFr",
  "key17": "5HiQ8jwUfzQL9ioMPF2bSAZwctQABYjgrsQGzQoefJvSZhaBWWG1CFLNN9g6Q6oqftwECkTy7Cr7ejt5M4MYVZVZ",
  "key18": "5fi7wESFuvrFeeRXmcP5qQBK9jAzhwEM1zYaDaiyDq9o2eQz273ngjNeQNB7Dok364sk25x3ENwvw7TuBLXCsqqL",
  "key19": "2qM1uAULKRaEcqo1H2Lmi8dNQG85NswXEyQvwJj1RYEYUYUJ5FYkN89XZkadBxEA8oxs4TRnuURfmnD2VkyMaskt",
  "key20": "31qpbaJzRM9ZHMQe1TD8oC7LQWbxU1jWqaJwDo4MLtXHZdbTzeThoLRPNU3ravp5jRVgMcovx15rEHEYbFhHY4fz",
  "key21": "ZSksuEeauig23m98Vqz9uHk2r6GgjKixsDW2JngJCsqLRuhdaPu7dPnPbViLdgQtg5yDJjJ93xXLDz22nM4DSSf",
  "key22": "njYSueunjgKx9nnuxLuhhZKbYb55wJc4EUABeBSEPU928MxBHAwd7kSCKPMNR8rXxKy977VjtsZbwsj6VqpL4qD",
  "key23": "27ps3TdMmG1keqJWvE7tYX7C3whJddmjoTPXYXixohf2acQ42aNntGUN7Q7Jcf1SZtrCnGgJ1q1RsgyBTyVn2xTv",
  "key24": "3nBXybcaZDxFmqnRXZSHXEhg8HdxibKj34Q5ACKZ5Y79ev6YCjVcpKBFYeoK8AqhmoGJcBQzRJ5vgt29EsUMEdG9",
  "key25": "4TWfkjj3b7HPQiNnCczsLwykv2LXYLgKgbXmyQ2RTrs9cJVcsa4cojy2pkxanovKGv2EuseymnKyLBBr7LbqW7af",
  "key26": "3TZvhakcoA4LzZxkgcMhTKiAZJSksLNJ4ToX8bNFUTsLJaFZU8Veb9edzBgBk4bQYXdgNtgJMRdvQUujutrJxVSh",
  "key27": "5vofKCQyBropkuHNa1tjgBLQq532muPpG7X7R26RLdNSDWH5oqDTyQjNN4eWJ2Ze5GFTywwmV5AfskzP4xhK2cy2",
  "key28": "2NhRPVrChi84uHYxxZHnu5PEQYp4pnrrq4qK8gCunkQYU6UcjUqfM8qEB52g77dL8wXK98jYfbp1E4jonkLpmm8i",
  "key29": "4YuxNHxvWEWUR1976T9KJtwTLy3ajLrA4CAjKV7NcwjhaaVMoo4CuYfMNfDK7F8Bj4YooKDRak1upBbew6YACiTu",
  "key30": "3Ke4ncTodBqVv6gZdxuPHuiWpxgeQoRcoDYfzgUSDamoXP1uXz9P9RKLx2suXo7SvaZN8vjqBNVedkRGvKFBBuNv",
  "key31": "yY7jHzJurP26YXmwd3pZtWy8KAGayoUNN4sLEPJzA23tfHRu6pGg2vLKoPi2DTh7W3rSJiKXWk3tY4ZQMv1AvBx",
  "key32": "XaKRp8a3T8NV4gk8FjpiKVctYGe8cq4wYAQh6xi2SjSf1wAa4AKarVgHTvZnpaSqmqi6Wd8oBR2yb6zgwasDFhJ",
  "key33": "31z61UiaoKwVcfensdmQBx4JxV1JeViitnUpMaiNraZWdzC5zGqBwoxLB5TVAbTrE9NhSTzi35B5LW6L1gzWErrU",
  "key34": "4vuhVPkWFHmeG7yR4R1QH5YBcWgDgLNGmqa6bPpeHck1ri4i6w6uYsytGi4SCGPkrqJTTmvXKP1U6XWNCdavEBrg",
  "key35": "5bwBMf2mLmyexmquhpwoaNPVcNkumZNMwyJtYvFCUXjr47fCijqm8xXTsBu2jppvEBD9DknRpaSwHBGbocJdxbgZ",
  "key36": "SmSWsNk1KA2eMpX3MRvSfgS41HUFi5RqvN2JeM8d6i2Z47KTwFsbgi54kMd9NX2tNMddeo5WcQbRV2GBsjpciPg",
  "key37": "5wA9N6PFkyfWSDPT398RWwcfjZbFT8XG9ATQGPdeuQrrGPEdLfbcbU8CaZFjjX82BiKvV61zqXVE7fw4JSVATwiZ",
  "key38": "8Hm2jJLgxBSp7tKDJGsb875K6FHbKEUkFBMu6icUntY3cpME3uTvFhJ6vCuRZfbc3oFXNfnDQ9fXt7tFvj5h6Sb",
  "key39": "ikNx2h1iFM69BEP97VzriyyM33KdovTgEpuf11YZuHn3c7mEiqJWqoEBp5oxsUDQtmfDxRTeojV4fymaogmDsYe",
  "key40": "yKonTKVViVpdMJr9wHk4b3ksimEsMFRm5zZXD1jBXsm6DsLT2CkwWdyxZYZy76u3z29hp2CmeZBqut1M1XGShU4"
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
