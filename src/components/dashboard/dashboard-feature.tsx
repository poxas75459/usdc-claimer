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
    "4C7eS8i6xihD4H42qPQN1Z4xXQHT7PEhLQQchEXsAhieotDETsdgS6JkVLrXGqpwEQspJzyRWoBngykMn1fvpgG4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N4YConG6E7r7Fc9iu9xFgYyirR2ZdRQbfuB7sJybfSYNLB5cJwSakuEGzAVK8ZCzJmpWNJevKhjveEqouRACWRU",
  "key1": "ybB57bev8evPRHUJyucBKVzKz7AcwSCTrHJUJJ2qA8fPMknV1GUw6rN133VJ6ht2ykq4rrJCR4ArDkaSvJE6w2Q",
  "key2": "RgcVFh2DpC3Fr5iGRv5XEDaFd1UAdseu5mwSbDvUXSAG67KGnPPQq5586tbqniaBj9x6s5hmEySDMZqqGMm8Y7K",
  "key3": "4XS8eSBGefKGEXyyqYadWG2qaDZ2pZCkeXg3nj5novC4JYFzY3ug2a8n4H8cb5uSLUN1SqP45gQKqoo3DJNucM8H",
  "key4": "4eJGgdTfXxk3g9pe9XhqCaPMiokRDj7dE8BgEKTj7XcDmKe2qeM8u5YhBKmuGLJQJDkCUm7g1qqN8qeFt7PxG6ce",
  "key5": "2UZeVrrncUAysv4BJ47En3pDL9Qie2ypN8BUkTMQK4wsXyJ1uJb2w6wpheVWRMtnBLuuHycCenvPHNhE74HyACJx",
  "key6": "6N67jZ2Lb83kzTBxVgfRyPHM9MtgE8CZgAWaz7UE5ccc2kmZc4YBEsuteWyfaF9acTGWLxP4MGL4kE4Gg52bf2R",
  "key7": "51LGJuZa1eNxFduem3DNiVJMjYmJGPjLnf8DPuUzGFnEh2emryfrTbQN2pabzMf1E9KVZavyJXB1Pwb2icQbCDFV",
  "key8": "3rV9nkBarJyqo7xtp2qNTU7qj41eWhvzN5KXnoVr8cuvdMztHHVUtWN9s8ngsQcvb1JVdSpvfNmkD4BbgwbDjBHK",
  "key9": "4KsVf5ELpuq9BU1iXY9t5YzcrJSfY494jhK8dj5gRHZq8DyK3ZpijSSy1VGNAd8ZTXcRHACrmsUuSYhjG6pB2piy",
  "key10": "2uX6bcDb3kvGxedzLTkTtFpncwguYNGKJXw4v5xUC9zyMxsm98yadhZ3WSb2qekv44Xaa5in1vTxZ5a7tRbwfm2T",
  "key11": "2vgXbJtHBaZpdiFQt2rHBTQe1RsCP9EV2Z4fp6CpqMcWTfPFZHTo2XyBCfQX1AqeyPbtzFA2Q1uMbNnYBrjjU7ES",
  "key12": "4EmsxKM3G4b9iGMsMQni4pdaMnUJv8sQuvJMW4W5ZxZfeyAK9F3c1eVKNt7x85ptaTw2HQzMgL6CekuaLjNutS3j",
  "key13": "3mw9RauekMvdS5T3CjvBNuKfwDnjyXx3Gqid34LaL1cvhfKEKW63o4SNcvK1CgFbF9LzW3q7QpoKku4zWkSoL9YX",
  "key14": "5oM8t1QoBJuXLtHddu2XR7WMrnJa6bPHsbRbRHo1ma77tF73w9k5zNbQ7QkvGfnwvRywV6aYcxRiVpome12kZiAH",
  "key15": "5fmhcM5hHmWn5w86UmHWL97444EqL3NWNgFberxYBRZs8zfSggzFgNDcYkMQ3D1qK7nkceQqnFNU95ch9jTdC7b2",
  "key16": "fMH4ipxR4m6cFRB4thepkkJQhNpu1MvgctrsY7xXM4o6bDm8asDbSupcwyxvZxLjRpJfdWpwY4wsZVM3U22NPAh",
  "key17": "2NWCpCCwqCRgQg57rgjtQ6Fphzk5fk1YQCuZWhC9kdNMG9RZ15k9qqzinybAHRD2hksejGt26HBSRZeptb56sZdr",
  "key18": "5H3RqtQMwAEJ1tKWLC9Cg8uvN83oQq3atJbgYjwexKg4su5Vc1FPaZPdKBjuu4BoePzHAfudFyQhtZNve4fjvzyS",
  "key19": "5CmDDRfqxcRD8vpRUWsaQD2kxkEo9A6zvcBdbJ8eDn6BNUvaL1zNSfMK2gQE1Wo91t5qNCYw7su21xKjjnnmH7qZ",
  "key20": "5C3FJcsmqFt5shZCMRBdUWokAhct3S192Afj7AgKegVLKiMrfTJwNNuGHsgePvqu7eRxoaMSuZr3j2EKbA8AkctL",
  "key21": "sD3JRHBBTeNzdoLCZgBJAjVfYLMJR8UpWkWopkB4sZqnEwqZpje2UicAJJQvQxFau82eMq8SBALigaeHGS9YZuW",
  "key22": "ET7n8DNRd4JFafYc9XDWYUq8S9dT4auUMum2qmUdPoi4ZnYs8BoyPPzEQ8pr1qeoqDQQZCYQ1VqpAX5iFsVajyZ",
  "key23": "Zg4JsoiPKTX4GAC5FP9oYWv8t8B7bxb9skszheeYNgVwnYPxFAQy64jTLR1bbCWudca4JUVDwUQPCabwp4W19wi",
  "key24": "2AYShSTFZ6BMsPoQSDhZAYFo5C9zQUKH9azNDU29aNEmdaodAeozpiL5ic43YLTCCEQ6PxeJDLRtjXRzvTbFppGN",
  "key25": "33teXnhZPztvpEfgfC6tSt4GxXykNTP2T4d3DhsyYJy94ZVmwfERG399iXS71E4mbK4s8txSZUkhJbEa76CoHfjF",
  "key26": "Esqb8nWaepwJ1X9f51G3QbwEs9Hfsrviympr9tnmCxyp7PJEi97N3u52NRbWb7TRjziyGTNWr2cys4ubYrPLiQV",
  "key27": "2CJYRtLyZHHkmYDNy3VtRhLhxQHbt3Bc774uid1KeZuRu7vojrjncTy1JtoLGq4GEsbQrutRmLkxPgoqC4mkyvaV",
  "key28": "37UKUVcr6WjsWLvZFKbxKis2oyKcqDkVWztCnfAsJSR8jvNyqXg4LV87XK8mgz1Jvji7VQLMVrKoHJRmbVXgvhXK",
  "key29": "wkdJvpPZ5osE5pu2ZQX3rTWrHsmo4Af3CkSD6XaqfrirZLeN38suwtesf5wQePCq1nda7J7tHUJ8w36nhwuzirT",
  "key30": "2nVXw8JQ3yyvWTemouciwEq854RbwyntMSAJn7ju2AwtD92r3NWnQZ8xQJ1pUw86ehmHRgPd7FPPVR5qAsjuwxUL",
  "key31": "4tt2G5JnqeKH7D9PkAoicYnhoQy1N22n8ihKV4LpCJrhZRV5F54qQ76unoA38doMzxqv7ee8pZ15o5YbBAdVfBK5",
  "key32": "3X2J38Ux9x3mXGHYWmK55WgqagAoSSR25VYbsWE6wCHM5eQBEii2NmowjR6N2gEEUQNg9rnxMiPBoQQUtQVFpquW",
  "key33": "2HafoBx3go3j6GGD21i4sZQrvqsehbmgSnrwdhbyM2ynwav8mSwtHdUZJDX49itu9WgjyXdoa6YfzDMWPArrJPgB",
  "key34": "5UeBTqSjQR7G7b4PP4LYB8g3ogCShdWAASAHCke2ceKhNVxAvGDK5Rdt5uGNqvHDrgXx9MAk5e6pfayJVuPakwnE",
  "key35": "2Z4ZaRigGP2fmV1Ak8nX5HTaHhLpBubC31NrqkvryGrNeJ72vXnr2dn2Ae6NGqBRUqyppY3enbDuc8NoZK21wFGv",
  "key36": "2Qj2RgRBsMLr48sS1pPCiLWou9bFm6W1LiPmYYV9E6VRw1YPt7cbJtJwu8RhyuhojhNaYXuY2W589wqjfcVmhkcR",
  "key37": "5Hky55WXTUxyHh7KP4SYsGYyXgnTxHHVKPgaJn8LXcaKoojmutsP9XhnwzmXsNYMKQ9tYNyUGzJzvZxh3qbn34Mm",
  "key38": "3odzTPjX9hoVsec9Mq4vZ8QiFeTxUhjHRBvSvgiHNRrQPiWLk1G2DTfSJPYzCToSDDF2gbjtfLS5Vfb4KvQfpeHf",
  "key39": "48nMqLJfCiMJyskujKTffYnRFoQtn9gWNdNSeSWK26w787zpX3SZnDAoJKQRrZjFe1xo5YwkuVECGrui7PaxqVHJ",
  "key40": "4unZjg8GeWjjVF3FBT4uPr1o3pAd5urYnEdzqfE3g98cGzCcPc8vqikLzMEb82pLSVcVk48MKecx2v6py2JdLRwP",
  "key41": "3xGCXQ65eUamuEPANseY9p3bnRhW7YPxQe7nPUVPQPuwDFvtZGyLiukfXi6seo1hqBP1tivhtYsDQ7cxH9DuWEgU",
  "key42": "Hkr9WfvqnjXJ4KHyxfnYkQPLz1d2uDJfCg5y6AogK7UMEptaVN352yVrP1s5RL3N1RHaN3gESGoP3VuM3kBKLSw",
  "key43": "2PrJg4FRHJBpfwZfcXWKq4gbChtCSh4JpkYt1Lm48JgTi5n7uLdDLueTZZ3rj6YGra7UPYGukGBL5bzYX4hMNLbu",
  "key44": "5ai5dDicFPZv2szfhNF1FxXErraYF9xv514PBW5JdzK5cfKLDjC8C1WrkzUAwztTC4QYso2Q2wUMMccryorNGsJp",
  "key45": "2e6dCdzcKUy8aviZ3Xc6b4Cd2xQMyzgjJfTcsBEQa1UQoBemePS4V53wHUY1YvAznfbMkng1HWvtkdgKYYPDM2W2",
  "key46": "HNyMc3Uwbyk2LUUwzktWHXVdBLm1Y9T2ywgByNprZwu3iDjGAHFfFPnsxXapUQk76sjNmGkeY1tMsMopsK2HMb2",
  "key47": "pm1BZCbEYm1K77urS8sEysEhDpzKQzZ6X5MRmVyrTyKRrNz1yVKVzXPzn9NAX7t5uQPuzmYwXUwJCDymjMYBw7Z"
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
