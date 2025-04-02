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
    "234RRrZPCFw2yad5gdpRwAaQYyoR3vh2owMXYUsNVjxh7CP2rLhT8ALfPugFo38ByJ8h9zFnJeWQhzbxPS1rd1Rs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y9Vps1jxQiQY9ttLBwFuTabzoq2q89ujKoix9JaGrJMcZVLtq5rXWfUZwmeez6P4HTmvUVdVRoXMFF5kV9bttSQ",
  "key1": "5BHoqrDZBHkcB9YirCJYnks3LdTPaPVB4Zj7sfC3BPhbn6r1PpgoHTXHSJj5sBHBoZ7aj9U9byY2WEuzVGUJfV7i",
  "key2": "43eknb24zpteehFb6eBEVskpHYjZe5j3oVoqQFoqEXJzKJyZCc7dKGYS2LBycXc9FTcnZL8FnUheE4LCqdZtAGXz",
  "key3": "rgxPi5Q4mcz5Vb1jjN5hG9AYPTRYkAkPWFNUZofzzyqVA8Y4vEEgAexhDggTEVPLU4isS1LEp1pn2xqvvKwMHge",
  "key4": "VHBBXiSdBSTo9MP2owWtFeaJ1ALdT1Hv4LyXpwCakv3jYzkNhqPqMStaSh4ccqKpNZJQYkjinjAHLNcnPD3jbFn",
  "key5": "pmn3QyX25fPKcUM7ma6J4NMigMPKGKdqd4uLRtV9eEFj41edMtXWMrfd1EqTvCfQ7H2X8ogRvcZQdpqitrfr8uj",
  "key6": "2JuhUt7HVHaPkCmoibuHDMvYZBpeCMLHA82MDw9eCvCsBmi1nAvYnneqXU3KKJdJS1v28wBtDD9dD2ipgL4W8GSz",
  "key7": "4o5u8UuQwa7Csx88ni62LtjiB71qShmC7HHRtDcaXKRu54mBPNYDZsTWszh2osWvuUSeRxLHXXZLEjwxZX9QBFgn",
  "key8": "3YftAiQBdHTRmfUVY61ytgxW4eCvtUXfdgQ7e26KeU6fweJZxLjJco5ctqmYLaRVNrXGryUz9EwbaZQddtbzaazX",
  "key9": "GuzNV9hrY65yZeUGpWHpdD8Zmo4ZZnAF66HYS42N7g5mWqUpKuSD826ReMeGrBnRz92WpN5VkMjozNSr4d2WanG",
  "key10": "3SPk4MiLd3p2vJCMJd4zJdynavPY4Ago2g3tdCXGyLdLn59XrDuCfqZNczKhpmLhAbCreTRis3cQgLYsyGDRRFXf",
  "key11": "YkBAiWp8Rf8gXjgWqSHApeY29fdvhRAx8c9ubmY9YogZB8oGpWBab9kCofqaZ89kjZdXZS2wGUDYi7vi73LqC1p",
  "key12": "5k4Y6oh1rx5xxCXHq8fMt6Yt2dmiyjtKREgzwqkGPuiMV49jYm7veyrBv4jtDqzwc7vUKKLXEjKoJ6t8D1NCZMHf",
  "key13": "3r6jx9o7d2J6jD4eokceFvSonUaw9WUkS3YeZ6jNeNsdogqjSTHu9JsDjR3mmhUCZ6A34cuSq7sayDQGnfR1LgJY",
  "key14": "2wyU6CFg8Eqzc3xcmsd2dB4FNawskjswrbDRsopfvZi1u3B1k62vHTqkBDRMuJ9VotZxucxZ7ypDLMTsBSHpAQE3",
  "key15": "Xx3VWvitAegsCoC6kkoVr7VYwUxV7ghpA3YFFPg2Q3Lrnu74yLqbU3Zqg6VhQeR1rPfUFWNdcpGkWkRdAipp4i4",
  "key16": "cw2hCJxawfW2dc4sCeMnf92QsXvJLVKVS1aJ64sFf8ptKUcM6XMtWbKoH2Bcgt5obxMfFc9ENi5PZwhep4wWGb5",
  "key17": "62UmGwP4J1g5HH1X52sXDeKGKdn9gGDHCxqSiUbg46HDG4PxDz9WddABYRJ3A2FhPhH4cecuKpaok4ADp84aNQLp",
  "key18": "t8M5vdsvM6ybtSm1zcJ5zeh63KGAcXsrFEApQKuuAesuaT9MH6w14id18pKrJqrFnTyMeWwSvoByQmnp727avMC",
  "key19": "gxwL8AwL6nHXLKxK55Nz9GQ9MBrvvw5gg436EHFPR5eyM3CHVCUTpd2Me8iugedHbhHc7RSLixjBQ7YuvTz9HeM",
  "key20": "iTa4i2NopsabgA8Qh5JurBDG4VDbTUmBkx9K4d3UzXesHqZcX9uohiUrHJPFLUyE1NHn2E17cGWyqHv1PBxCsuJ",
  "key21": "4vjHmYSfQBKba2wFdRcG3UiujWqdeoppdkx3GVLRZfaZ4Lv5ghRnbhe1wE2NgwNk9XDFFP4pXGe2KDcszKb2AsM",
  "key22": "5URrtDGQWQjpMQFHDaRGkKEfEqrjH6MthscKCG5QffwDkaTcPM6H9WSZdJmBKhGcaTH1tmWxRYCur6qcJVxUKVP",
  "key23": "4A8WALLfhtDgP4rDBvLRH6LDjxVqZKwFcMeHv4RPqSrP15aEBjsgz6jdHcA7zpi7uKXaAkyXA9WKF5J1pJa7QmVx",
  "key24": "2nJ3NbDiksS7ieXTZUTwpeYNZ4wBRmvzCCCPecQVvTuHxNvwghkU6vdXtGzLprfSsHS6ePDNJAUUhmKQmQduYcd6",
  "key25": "4ZjpGZxH2dkjXC77hE9HbmmsLJ8fdxPLGh7cmfotp4vtfHVkvE581XTkG8AoASL94iuTt1Kz3kptSrjpSZpnui5P",
  "key26": "5uxeqMkuyT3HprMxMQ4bcYs4QgURq8D5mQiNJzVwkxbqtRogNe3DBmXLaN7y4cL5mM5VtBLXFi8ib5kjiKT5wM57",
  "key27": "YPqpwbKs84FmqBe3WWe68tY3RjcGTZwJDE4C99GtWNhq6xJKFnJEqYz9yxTnri6iFWtQKRpQjBJPJKPQqTzDhef",
  "key28": "7AWX6eRVrdmh8XBrBRJYSdf6mhyuFzAsvZisVHogidWqvicjYTpjEy6JCVKqa8Dm34sYj2S1xaZjXYEBsfdZJGc",
  "key29": "u4sR4ChBTkjQjSGqS98AUcntZ5sY2eSoNVU6CMHX94G9mqn8FYkYbNKhSihVitGSEBH6XmTaawNekXyVd6vfcRd",
  "key30": "4EtQt5Mq6EpTaeJizDSPTtdjqwiPzLUj1iL1yxtSqzcJpswqPMTRZEh6bcUfYQpe2UAzs2bXW2iJfaTdXzxz5NFd"
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
