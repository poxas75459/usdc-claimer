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
    "tP3j77Cq2ZYSDgcE7jxQ3ksvjUpZrS7uJaJpf7nZtZEHpPbWPFy43whSZtvv1W4fuP5c5M2ztXHkEaaVp6ffsP9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z9BYwC3pACUdRFB75frubEhiRi6PQbvUXbVXqGZvANtye5N6HP9MiMxsD9DCmSRtZLvafgfTH5CrSJX1bcEP2q6",
  "key1": "Lvw2v5wetRPBSGedGwr2RKMVS6UkfC2LyBZPCNcQeVfHaFab4p7WaFJQHeQos8nsWCvz1U2s6zM3rcBWjfYWZ2z",
  "key2": "5hKEMHVbeEBGiozhCq7pUVrHLJ637eszXziVVxVhgaRpnAQkmpWSBojUU8fMT9P7MAb3Vw1EptZTQQbfN7NVjPb9",
  "key3": "4PLnTSXxVWH4M5sF8eWpmtewWCDHCfoKJR4okNCvP4khrC6gu1gQr1fMLeYuWbqzNvxvcwRYWwdZqW7P3uFhTzmt",
  "key4": "25c9PNwCwLt9n49bEQshNAyLhzVodAJQrkRKHXKcjXzsg1TqcLENkcCp9HsqAqDQENYzmxw1Uk6pi7HfKYxUQDP4",
  "key5": "5aNF1ZaQzjZ1dtrm2nxaRJrH8qrNpFB5q3pCyYNqrFmLx45ooVzvyd9cFnN28XHVztYWiPe5DwcnGMD3ihZWd2Uc",
  "key6": "3NPF2KPU8LCUm4CqvMHikgsDB1wTz5yYEbWikSj88CMnLusZdhTv2YewtFZkVysaYGzXpWyWoLdmHdSAnfj7GKa9",
  "key7": "5BCDh7Q8qGBGMSJo4ZJXtsmh6Dcis5UaAEU9QDiZDYEM6oX89wsVetjemLQM8w4ykwKFHu4QRvoadDzY41yGYTtA",
  "key8": "2vDgbC1hFgbVx72YBwvrf7ad9DJducgmAVX8VgLL8EZBjUVbzUqqwsVbLU2KUP6SJmuHHD9Xydr1EL6BxXp3MDFc",
  "key9": "5xfsfroZSya65bBLu63NnGgMD9GxeFxSvgMRbq54ae297JmcdKT2FLXGx7xVocams92HUasFcBxHbCGoHNfmcHNz",
  "key10": "xFiJ7U8wKW7jdsu7omvVNTJQpfR9Wcd4VL7y5xo1SuwfDxfgTUk9FqXT8y8qCD6rzzNcshwx5m5uV2fUSf2ePTU",
  "key11": "dvfa2dpF8dhY7G7ouw4E9ZRLucq7WRT6AEst3E3o4iN2ifnXpr5d8JKMsnv8j8TpP84WkC332ZK2BxAgeUtE2ar",
  "key12": "xKBuFq53pycvRvSL42HcnRDv4Kx9yD1D55JZWoWE3DJ1YwnS22YNK79X88cDaUaxqEwgSriaFxLusF9rvxXBkFc",
  "key13": "3LArBCnkt3M79tnSYqquAe1jWj8SQjQiEqHV2jhkYtFqreCRpyPRZiQJ5RpjjokMuvqhHZhYrYaVEVdLgeM6xt8f",
  "key14": "674wCYufKotFM4jnGFUk3ZCBV4YK1ocQKFcV3LybYJ1k2X3o3c7QKgE85mGb8Uniqiiqt5c7JPwc8fohwbQY6FiD",
  "key15": "3Cn8fuFxtheDRhKd7QFkwNLmXdsn8C38z4ushR9RiiQEH47pXgZnhrBJPT9mY79nzTdxmvJ6EutAEogFVz5KaYFZ",
  "key16": "5UN4RnfcPkJCyCMngPUroXqFfQuVfWEeYJftFhBrSa1u4eSUzUojSQYX58PoLq7y39oCutP8pQjesYgEfnHmXMk7",
  "key17": "5eiUJp7ETaNmtRi3kJxazrBUVehQ8q8FgVcjYrtAYK8nNi39RL6e6LgSgSLz3JAmdJ9X5VEyCcrTYdegqhA3J4aM",
  "key18": "4oDecpLpRYR9QUYgZ9kNxSTisVjQkAkYC62pkSJwF3mmH4k2ceTFabsvdhysWm4vqZp1ytMV8SjsKfRh9ZgUvY7B",
  "key19": "5gTKAs2euiFPdWzee2oyZxgZ8FUNiC1RY3SFFSumTu8ywgodAw3ekwMgwxzHb4SJTAWmLKfURNLpLPkLbcQ9rfXc",
  "key20": "45BhYrhuwovdUgL6gAYjGG93gxJpvev4XoJcMLDYPy9aKYTRYuhBLvVU4ZabA9CxoYsojNz9VmeGCyMjuZj5bY5f",
  "key21": "3dUSrtx4cupDLphSEUjq1AnNxdvwDYKvmfp7Z3qNegduwLwGUw7RPWC9f2aRb2bxCRreTeTwuhgX1m9MbgmPoJ9A",
  "key22": "57LAuFD13hGEqxzTXtC1ceGhvGShRPXqVyehxCzQQud6hoUynAmsuphJiam3NMMegcJJpZ7WvntMXJMy9vJnQnKG",
  "key23": "EEGrK3cLHvCB5Kgt33TmqjJJX1ARBEPuBu3AK2XR3bkDsHLYutDBXQxAX5L1tsc7DeoYDHYo85vGBKNeBGLiffq",
  "key24": "4NkLGaKngcp7kNWVLpCYZykkPboEf8YdVzaKGHKVb3W4ck5PNrZJfDjMs9Zb1qcVw3TVATQqQqDjgcPqWRnQRooy",
  "key25": "bLnuw9mMG6r9dwGS3XeVPSmPPu2Te8BB4UgaEVUQj1nN9XMffeKWSpD14ei5e34BDYtPn7z7JzFwAXonR8sN4vi",
  "key26": "24aMmyioj5aeX7aDK6MWAMzwkP6YkwniMEiiMyZq6yHrFmUFT7RPr4ESX3DPRrh7dCqHeThMoDy54qEsdkViGfcV",
  "key27": "3133KGLg3QeYuT4xVQNp7oNfCYtDdXAN75Zmf1VFGcjdrcVeb8YyiedkvQLWNr4N69zp9Z5MH8oaak3T6HqH8rt8",
  "key28": "4LnhCibd7p4RnV1TvVGdFWKfqNCTvVLTJs2CmJ2iSAzWSw6NdvvLhzobDaNENMSKCZ72dyohqsUGt1MmLGEZngoZ",
  "key29": "2GHvtS32z9x3GrDCgzAawjmQHzDUsECsQVRfn9YrbzZ4UcdLoGztzDDyAPMDrw8ddwTtiioMa7AvZyogfwamVNLN",
  "key30": "6VK3CFkxE6U5BZxzsGwynWkZd8MMxQZL2AaQ7VEHjEwGXKi9A4BMcbxp5zEifUNf584hM633RPDtH1g2CKeaoUt",
  "key31": "2jL8vSAmaquNZWSkYLHrFN2UXDgmfwVfa5e2hHG9LXvPhbhsAw8v3g2iG5BjfKwBQXeVtW5eV9KGnZHjaTjNbv6K",
  "key32": "5ro11sQ6rxT3p5wwV4mFeuPMnc5W3Tkqxc2WfTGhGY1VPuyktQCP8rt1bqRMuE29AUQ4ShxUHNaENaMvhDEB6w32",
  "key33": "4PWwLFdqvHTCZLWqnRHMxmfAv2zFxiABgC6kLRDWZ4GN6yvBtq2BmBphh9wYpHDcJJCcW6ScthHMcDHDjZnmff6M",
  "key34": "4oMsqdNNzxw7EQcRRWCc8i1ZsXpi9N3r1LDat1LhUF5i8yPQ8HRBC4drZL9zaoWVzN3wkk6SEfRv9UWJfo6USVUU",
  "key35": "2gKmVgAemP9pao6tYRamXmmzqeVpXm4sZBbqMq5Ds28FZEBbRfVQzYXLZFyTDNsG5dMiRQRsb6TSKJ4LARYkdBtH",
  "key36": "3vzFVmzgYKJ3Y9XWED3zUSX41uva3cP8iVLzwprgfr7EqUgA2TqFq4yb3kyDXtTJ8B4YFGQkRnmsDaDUwwk9VTec",
  "key37": "3J753R9GX4JLAo1m5frNMyAKK5ug2ds5EcGFbevR6AWLvZzhrNuWG2JdCcgPS1ZXiw45NkRAKLqD8xiPUSdJf9WM",
  "key38": "4fdgFvRRvfcWqsoDwDd4CyGa8Ky3zCpddn8ts8iBvM9KAnLgQ6bmRKWhvKyzD292s7Tb67fC9Ng6ozkoV3BLRsCq",
  "key39": "3fmfehVsmeL4D6YMsyjoVpenrneCTEjywhRFP3W45zNTTUad1EBPPbnfAMwA8cUafHrk8vWzeAHo3YyAakpYWFVo",
  "key40": "5LCJyvGNa5XL8XBJ1511xas4v4aJudBQLj7EgkQYjsGej5C7MmAfypqPWHQ3GGHoYH3yWwn6854KebVo71SxyKR2",
  "key41": "5GGD4GWoKuN7uJDFHiggCSJmcxYXCK9ne8isrKpVgQUaJEE8RjCvG1XK1CdtPkeYkB4p4utR77HznEKp1F5Mafev",
  "key42": "HpW9NXuCdWG4n6Lgb5cFqYDw6kx9MhazDwaCsMYxKYahBubPKKnhEWqzRD7MRBADYcsuiTpE46kL8NgK4Xg95pj",
  "key43": "36n23XUDTgs2YHGRQjQyLTFk25N6ithpNmNRk8AeBSLkZKsVk3ZCywG8iF2yAW9hYxeWYtu7Mnyg77Tg9V3zaDQG",
  "key44": "BaUcDkCAqvAjdAABX17pgDGMpf5mawGnR7bnEPue6jsXUCHQvEKLs4Ktnsu7feoUYiHFabovz1ieULvVEwTVHzF",
  "key45": "5HJXZ1GkTTm4umsS8F8hPwePSLZPQVHVVepQ5LptfcetsHAT3SfHqmF4gkHRVj3HAEkKkTyXWbBqYueEK2pF1Wpo",
  "key46": "4L6RxTZJHtKVPSkueXCd7i8VmMJ18iA8LmF9VAD9epZhDcjsK27ASkGNQHrcsBztcY5JERRubG6FJuXBmonb8x6R",
  "key47": "433ha8xzqKujw7YSzqtXcmXww16qhGpMoYADgeYg19LzbJHQWXpdF7zZAeUZaGtXMtaFYfyza5qefM1tKsvqB7LD",
  "key48": "YnbmEMX3CKcjQ6cAsvQtGymz3KcVmLmVf8qA16hsEuapGs7kvwNJ2hHzEHQBTRm1F1mEqoqfiCK3Rj6PqwyWoHo"
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
