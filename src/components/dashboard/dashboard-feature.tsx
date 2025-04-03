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
    "3n9WiuVqeTcnYLujnrN7QkNCwDQ5VkSWbgeGeRH4Ma1FUcfLLi66LmY3cEY1ddDWfF7NweX2iCg9pFnnbU8mDcmV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TfJnzGoaKg17F14f9WWVeT6vv9wm43nWuArGM6pGuW8fqgKPvJT6MLn9SAFt783pGc8ck4RUgk59cBtt45AQ8Lt",
  "key1": "2ZBQ5H7VEahb6JVeVmXEikeL5NtTxG6vng7igd5q2bJKNfF3hNy1Hs4htTPEeQjhcjbb215AFZcY4DdwSQriFzAk",
  "key2": "5WHy2b3Gj2NRXv7t79mZNs95adR4zVc5qJ4zNsArNjY46hn8CrohLmyM89qLEkVb9cTqbaf86aPUtBFPT2P6rdpP",
  "key3": "4CY6ETZqP551ERyj9kyrnJqPzXZmHF3awGwLMHRvW4dMhfu8jNaetYKPxVJzSgcPUYQBUSGHtwzGcWU27qoU6Tqj",
  "key4": "2wU9NGAddBqkseThYazURz9RWcBfJdGh1Xc8PEJyzDZgWFju8Qp4W6enYtXK5fNMv5y6XXrHFpXMZiLckiMQH4qX",
  "key5": "5c7wwFHDWVGP8kxAbWxk8VZLSrfozysw2TFw9m21wW3xLfqiqisSt1fwe8PzZCRrjd5Qm1pX2XNe5hmgVWurLLJy",
  "key6": "2g74TN46oHPBM4Ru5dctE5XK8JAtRtV1FcYn7zLRAmNvs3TWFnSiwYsT2qvpup7o181wcheCAf9yC5o4kxoAxCPi",
  "key7": "5Q3Nyw35wqGSB88UkBGdPmT6HkEi1SViHrPQjEzpzAWgnJkv7dcEenqfY7pQNK9UJzQga2iY1UoaJt9sxu9pvi2o",
  "key8": "3YqWTzw1jq7FUV3LvZGuWk8HxwS82skmvptY7g9XRmS5rZy45NX2rMKWrrw5uSd558AFit2GwfyiGj3ph78jHRbJ",
  "key9": "3JkN577pwj27YiNK6ZSp2YcmjibmbKSxSLU8TA4nfcHfR6ZHEHnzxAq35tkQsxUVZ6t2ptiyesJL39DLKEEXs8Un",
  "key10": "3mrAnW4fhwpK33WVBDCxA6j8QBf427WWfoMT7btoF7zVJYjeHBy68dHmSfhsJQkwmBVb4kir8hPqGZAZzVvP1fEM",
  "key11": "3WxtkBkdaniYuba6mJPG2gHS2hoNxhnCfyhg8j2FsNcmm6wXptDkycHBXzuxh53TDxMf6i6B1ba3d9CNZkWv64R9",
  "key12": "5BMpinMsXQDCsyrSxnA1euXDAo9PAnavtsWBGP7JFY7WZ84Eik3pFJGircVsHbRNAz3VYhpYsPkmakFWDEDPLr9C",
  "key13": "Fx61J2E8r1CZ9WfPbcZCF1wMNwikvJWXLYZsnxNEkpecrf8HpoZbraZAJwSdF6rKh5veMx1Ta8X7B6igG88kXxW",
  "key14": "5bcc8echqMrRZJNwy3uFZRa2s59sb2zMqR2gkV19cMuzrNXY4s7HS6BQ4r7SZEGtDAu7y7hosCgeM5f2ZE7YjHMw",
  "key15": "3mU77VBLgnGyFCufsDa4RsFUHSu4wvFYUaT5pr8XH7RwgowTXV8SXn4exd2xg2EKwhWpZmGzNc6gGt7fZSRUdSJ",
  "key16": "3i1bAPU8GHDEis63hPMZwNw84YRdrtjERnJ1Wypd3fTArPchGvooCF14sPpm5dmpARmpA5vQ7TmNYvsc2ikPfVdp",
  "key17": "38ZwMEUBqwoc3UyDm3zp2LztZ6jwnz4YGTAJZo1mkfNmk88nyBfNnPDqnaTzZ5NJqLBKveEzhNqnp776tQtANQyj",
  "key18": "2rxLAyfKqWoGw29rvRn7ZFK7dinC9r85RyUSKQ6HADJnSLu9h1iYkCvpye5vQPhPoo6t5M9bVvtXBJep6pC1bCW5",
  "key19": "5xiyQ2158CULZH7S8yuzb1iy9AtE4kQTCeAeCp9uc4b3BspzGoNtY3ZitJoC8DFGKh8WwVUvgQF4JwycdvVDbHE7",
  "key20": "4KzkeVvXXzMpZj3vmKsH5CDa5jbzD95XkhZzyMqG88xdHbQAKv6BbzRgMjTKxznYFULiQ1A2xfbn45rRhMEerUuP",
  "key21": "4xQoijzX2TaoGBq6Km4qMtNhn1H3DLopUFWvGJ2NjxsTtg1DpHo6unGQJ8Mr5AokVd1bVTph2MSihyc2wuNkT6iX",
  "key22": "4aSEoqjkdtsSjsQRbymBDykxuX8HfCkg93kgV9k7jSNdVHHjWDDjKdfCwa3Rm2MWuKowUY4qjJ4jPfLoZkCe7isZ",
  "key23": "hMzRstJWtGo9wxAYSeYZKvffu6Twh9SYgJ6ptbCrJVanm3Anx2s7BnRgmkMeJtKKCakUuxQiYB69f8MZt1z94Ac",
  "key24": "3BoBYPTxwqiBv2F1f9FJ3BJWu8gJJT2vrmS3hgKz4nx7aBjRtU93i5wrkHx1yGAGQadEDybvpNq6bCX5yqhVT7GL",
  "key25": "cDJeVLuziR4A5gfHnJi8b6XYmGoA5aedsTv5MTE6P7xhn8zbWrmoKL3EqtdLU9cjgtrBYXWtqvKqkEvBWtmuaoG",
  "key26": "24yKB4VRaAzpKUQgUQqHXM5QXRBRZcFgTu4S74JHvuqEL7qn27xmW5mZMbipd2u6SeST9NPdxZE6CQXtJKzRzRdf",
  "key27": "4jt3XEcteh1nFpuSgf9fPLNjBDsfrPkGzt4C9nYCNwBVnWmQKtcP5NjUcQy6pRMSGFBkH5e6mhrN8yWVa31ZXBhT",
  "key28": "5uQCn6ynVJNFAhDdAVZXygVUPHUfG5KtA2284n44aekWHiG9AuW7UsBpKo12xFPn5KBmgqfmgaaRMFJexiTLpNXy",
  "key29": "52He9SkcmXSsHZDC8xtnnPPQysDcctBvFaA74fSxxXaxzv6FBG1LUiA9Fn2z7xYwHRKmMpGtuedqw6A7WVF2FQyf",
  "key30": "2fS21CvJoM1sj58WHpsJq94NxQPowJZtfUKkDjHAkpBANKUyH73nivxaou88R26gHjbrUx5Fm9BzCyKrkyFAwApd",
  "key31": "4d6EtfdYNX46LYQMLJ98Yr1MqPddW8fEFvRkHTfqHQcb9ZP6xfn2ERNHJGMjw1gBhTaCHdcHPK8zSByQNjXEZG2V",
  "key32": "AQyYSvbkCBySiW8FhhAAATL2twQfi2qtz5QCxe3ZfHFxhtv95bBp6DZtDxeRGJo8ZKyBSTKqTBZC5utmcAvBBMR"
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
