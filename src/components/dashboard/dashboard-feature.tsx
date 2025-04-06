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
    "PL3jVQsdNSUm8rpGunvyZk7JAuecYxJ8LvbmjDtA9a2DL1aoFJAc9WTmCQVZk3rXtXcJcH69fsKP1bSBhy9wEgj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62ZChbg4RnaQsfN7SMxAuzRavujTVcJzXrTG1aMGRFumPx1ij29KSn8G2YSR1WTp4zwpECtMYibYDTwfSyThmrav",
  "key1": "379T7ALmUTnRADbaFWa5CS7RruMxPyxuuUfofWjoqntaty5CnGNUMPGJv5hZKMSXPXwFGmGvXxRVbSgf7c8bSG7v",
  "key2": "pSjgG1MRovbtktGE4uwL8JKuUMy3D96jfmEkE868F14B93Jmqkuiy5SM62eF9qXA5MHRFKUqRHkRwX92AGvkfnZ",
  "key3": "NnwtMNUqDV8YFWVpA5ix7LNqVsJxthxj3xZn6pwUvBbzutMYpCEZVvSYKhqSDWF74Mongk76HztVAUKCKkzSr6r",
  "key4": "5FDkGE3WSMJtpzADfucUWDAkY54Uc46LaSU5s7kEFGbn4cLCkoK3ejXENf2awQKUZ5S1HqhDFHjczH17SM1y6fs3",
  "key5": "4i8tSwnhij7gv5fGn4U7ShT7gpUDNCgNakeZ95kDocXsgtDK65zkjxxeo3C7Fo5bgtteaqjYbNS3yGgnELqv7Hc6",
  "key6": "2jq33YeEJe43SZrecJFZyCxvgKC2od3pwWXVNh6VmzvPkyNrYnkDBo1kuTMyHZ9T74zBRhoMyr2YymNhSBK4DBHm",
  "key7": "5k4rWBtyoF8U5VtbaeUoAwrPpzHSwZ3Ugc9EzTkK3BTM5HRNAcWdz9RmuwCURcym8Ta9PoeLDaEBUrPBFt1mHDJU",
  "key8": "2CJo4LY2ZJUXnVrkwRcaERwVG27sWVZcryKdkHybjex33zkDSXBX2ZscNaL54qcnW6RrnPtgWJHbwoi53NSEJtJu",
  "key9": "3sywdXXbMfovBdsqSiADEPc2r2czKkPbs8g1KWPwDyDsXWJK2d1Q6eP8rU1dpsdudh1LKCRYLXuJXhqvLiRr12c",
  "key10": "4E8varEa1iGcLNZpQRiXqCg9EubeNQUxFZrGdB8E7ecfkVz3SLGvRVd9BKn9v4zv9kZUrStuiEa6tzXdtGaVpZGF",
  "key11": "41bDGaU4w6qwpwUYJPrT55vb57xAVHx54MuC5PZuZr15Xd1f51HDLWYYgvRa4RCnnwsDzkoXamPHCnShZnH3Cgxy",
  "key12": "3zXPbCsrzgcbcRTufytEx9M1fqYFcRCP3om22m5hSWpvANiWJ1W9Gsx6C7BqevRojPCT39wpT7ji5CZPZWFf5vJT",
  "key13": "324W12owzcvqwD3p2mUY9dzq9fX6ycD6yVVQSqtDVxRD37q9DvLzwH45VUi9hRAbSAFaVGUsUfmsHXJhUpMcfoeA",
  "key14": "5krA1o1vgxpemGANw92mtmXx6QLjMUjzfESoH4VoeM7B2iNjn7GvAqk8V3hwqmrLcWRAajAWUWU9aJUNQrTWJ8mB",
  "key15": "3QDmvLaDgjQVUQ1pvRtxLn9837z3ueoUXWGfPKY7WVmeRf4v9npUeyxomHvoqyvYPW6j6zDVqLjvJ88to3Ttq82x",
  "key16": "2wpZUso4cSYGhr28ujp8t8KHHXBgbYAm2aDHpnLnvSHH9dkiobuv8TxA2v6mJXFGzpzZDtpZ5SvJnvUAbGbdCfod",
  "key17": "GsWjjMvWx1e4PFW9P6pmM6gVPGD6ALZVap4EkrPxUk5JFoszgF3FcHhP5NFBQ3avZdyynmA5Cu7t81atT5j63ra",
  "key18": "3sfkCEenjw3rDbBvYAoXq64hbtfZ6WmuYhLzbAYWnNopTzFYNP1LrhAriDxbWc4CcGWiSkf2Wj9Hr8j2xy5NLW5C",
  "key19": "5mhq2L4NUhPihatQfbQkbaFRsi42hL4B5Ay4d9x1N5rLXu3v5rGeC9XWEQPpBpuCgsagtovP2xH424XGjZ3vtdn",
  "key20": "2hbHFXJoHu8k1V7rr3PAwfdMhjD3j9uRKaqR2PZGyfvNTmPMK4iJ2DdgvdXhx4Vvzho3KC3x7Rq3NZhJm4QwKnr6",
  "key21": "zbjy7svGWLVb1GzNttTSrTr6vauMMDw2MJvXyRQ5HvdAHNV1UBHJcg2AX3fv3KpK4bLdwhQzVswihJ9eRAmHsQy",
  "key22": "46zyzPn1X38kCz2Zezf3GHymAM2cxMrPye6cUdwEuGdJko849DzKinrfq4i5Bff68NwhqnZ7pe1b9MWqXb4eMrVx",
  "key23": "3cajjybhpoopz9upmGcUk443JqmT29nQu5iTnBMY2RqzZ553ujq2TQnxqvZRE8D3iE8AHXTc8mHkvY1PbbF4VRYg",
  "key24": "Bej6yMqBGcaVSQuzephubf8BfBrqLu61h6BYJQqc4NwKyfiHp7oUXqjuGrixkiWFpBTvt8Bx7dD6T4LYXxpyBFs",
  "key25": "2RNmNuB1zSDtDDB3KY7RwCYF9ttdGsjJhL2oh8wPvmnAfYDcXRJmNAXMBYTduH8JdaMZfLiBXWwQpbnScZQYr2B1",
  "key26": "2GB1vP8mcotALdvVBytCaMjTm6JHE8Aiec8q5WYSi2h2YzUZJC3NizxwGc8UbE83mNiSHxE4xjeUEiPJkCLZwbAk",
  "key27": "4jwwibwYQ9Hu13GN2BD6z5Drcg3XbUsBZJBM3fb2takMaWBgZpNNrATUSu3Kmva5TiJwTN4pchKWt5Q1cQCPNTZy",
  "key28": "3txJ2AaXcN2k2av5hLrdKrtYpxrh67SrMwiYEvXCUEzwZanPRvhWnoKGG2xqk7A9chLcmZTNS5k64ZytQcmXGNGt",
  "key29": "528Kz4L2oruwzhEg1iVMgq8hX7vcknpYjXdkPDd69bijmKV1NeAjaVvDPCZrTYNqFjjSoTKxcK4VtYqzMu3Vx5xh",
  "key30": "2QHffVYJ3kzSKRVxELmrpMbPBxz3uW8U3XyYwJjtHbfU9hR4CHDgzsJA7EYwu9xomDHN4eo52hBGjLANoEwsoci8",
  "key31": "4ombpwmAEae82jRhdVfG3B5GEtAEkmSDyLNsVzDwy5sXchpWm2bLYHaPenuX13hRfF4ZgTLn9Vx7cAp7fkgdxTdE",
  "key32": "4qt5mqGJBPFEi6Su1zyXAZRmZGef45FJddQytGzTDbAhqzaYU7ZFbwbVvRBQNNN4dayRjjM3QR9CtU79V29jotMf",
  "key33": "5jWhTkdNSR3cG1QV624QxqHLh7ja7Z1PgB33QsQt1WDAGbzxpG2bwm5YhytJMWwJmi5Y2VkSiaKFv6cj4zFqfn6b",
  "key34": "2LyvHDcSdjTxUBE7v6B5DAruyxR72U1ihbvcwyKTfcy6exXYE46RARDQq39S5FgetkMX5v9UuDR6FoXT9HNmM7Pq",
  "key35": "5gu6FMRLjaBbQPVYKCvqWcKu3xVCYC1Qy8eUc1CSCk9sTnLXq3NbevkyPwSv38UvWzkn4Qsfis1vCf5TzJv2vC2R",
  "key36": "4FLh2bgkGVzX6wDdckByKTRfXd26gyUvEL6VgnjF6osJcYknEfTpowouYLrk9M9Xb5E1ZHN7XmuCqdqtBZ8vCNHC",
  "key37": "Mqvf2r87SX2sMnAZ6tixR4iPj8EsTbWX5D9NhNqV85WbhHM5YBU9UtFpCQba59mGEtGkaBBLRAMuCJ1VwqrCJTe",
  "key38": "43Qm39qTK5dNj7zCu9eMGXcgR8K2FF4mztiJ9zwGPansY45iMAhtrQYBY1JXMwiXekjMagbLy7os5qNqojd6Erwq",
  "key39": "4876yBZ2XHz3LKo8uxp7J5z3BbJbiMGuaA1z3Pu55y7Ecjg3E8Axe49NhTneCYsS2Euy1dbffwLnVBc8MuHCtTgo",
  "key40": "22Ush9xyG89n7KEoknGEtxL98G9QLWmcd8pXWan4HKQGJQiL2vWsGM9PW4NXKsciSw9d8m9CUZPHswKLoWV9dM8h",
  "key41": "45B95Cy2MHMiT3cSJbiAjERsDwrhaVRSF7Maj9YGMaawuuzKfmQK2DsCgpPc1eCDeXo2NsYEGChxGeXjZ4f1sKPE",
  "key42": "1ELFLGKaAhbrPMRCJMyi9kJVZMKkyQiJx1VN7Lft2whQeKqeGxBkUhHWEfHq5zhjxiSTmUDjgw8DA1SgweK6v32",
  "key43": "4KzXPgfrd51uTgMNmYcgRqGDCAWAa2kCc4x1riVTJGNufjv5yu1jJt9dj7aZgeMprQxUbzUZMnytHdWMkx897im3"
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
