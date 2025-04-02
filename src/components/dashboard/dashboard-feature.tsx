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
    "5zU7ucq2hJDsi6hVdTe8d9t9WzXguwPdMacSwMHH28j7pa5wF8JuZUJ61da85bnEe7tQjt4PK1KFvKoHLAzVqwdP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LXTWGCTC2hLnsCSyqkGpXtqa5S44iHXhZcnwfu1gzsVuRHGgMPoL5DKguhs16Qg4Qe6u3y4kLPvEV3N42MK3CBv",
  "key1": "2WA96JT7GTHxERHcYoGhmu3FLDLR7ymy8kTfURvzW52KR2kX68x1Qgk5C2UFerGGZXZdyxRdLtrQsxvbiDDzLp6Q",
  "key2": "2EU7s4s36Zhfg5wnvPJSUWtQwrmC7PRmBNPRjc4GcTTGGyfKZBV8MHrqub28sPBRQxmAAkx3rhPvo17LHRYKDuD",
  "key3": "5ojAKabTihnJhhtGRdLKQ5J5bP1J1YLoMbKM41EaoQLhnT9Dd2VXd7gZ2iK5EJuvFw5J3LHQt5NVXiLZiTnc7hxK",
  "key4": "NmFzQdCEP3jakXfU5DB6F5BAgFmBtMuDPz5vNGq3he5JEpx8JiPPrP38s949qREcUpw2WpaCabyXH6Q1gbMTM5e",
  "key5": "PJoJ9815LiqQZNRbQmhAiGeQ925u9732thDGCiNPmFKYD5Pjet22MYdiA82bdUrt89mt8FCz8cQpdAkhXpZJXov",
  "key6": "4S9PfwimuPqDAP6XwAKxRs3VKy4rX8rHjaHbuZrkhoeFLVa2AJo58CZ9N7c48mUAQHP7SjDUdK2bdbqtnPxRAYgx",
  "key7": "5mMd6N1shXzMtVxmRtzioYnhmwAR1MxQBwKeFjc8E1CKi1aqHux5mZg9ef45Ya2Tiw3wCZzRF8stjkTGqxgtC6Xk",
  "key8": "2dPYhGcZbc38t8KWk1wRX89aZ5ofWUznMJPuUproHdw7z8syyEXpZevvxygSv79oQVzRKCY8cofDL7Kvexy7agiT",
  "key9": "37C7EKszEhJXNzmQ1oJ9F8uGG7dpfjrVETNopC58EoYfmJMSSGG6sed3tdcqqQJo7N73sq3TML5JNs7Egxg8g9A9",
  "key10": "2FPBF7KMr7PMFqPNekr6B9jpJxCSysKuPMHS5sQSsourKJGi8tNjLQcLeAPmfp7FpwEp7RV4y9dCRv8Pn7DCMgZF",
  "key11": "4Xd5hBQgBpNrxYceqtRBrmx2mzavovsjcqpnj4g4LmTBmfHhryMv4wUSfk62qnypuQGqC68Uy6D365FvyFZrbqm4",
  "key12": "5ULh7hSLTMv6EtTjxyTMV8DSmdgLjgWvWCUmjVWSnCKLsD84cGqb92rp4t8Seaui1YxwrzJSZyjZHmTwHHwP3Zjp",
  "key13": "7Qyp4w3PbgEvcWng4jz4yjJAhErz8v4NMT5JVLh9bri5KLRM8nkbY5zyAeFLjJzYmF2QSKirdeX67b8WP3JqSF6",
  "key14": "5xfuVSP722893vJoVbP2PoMFCqumLA6Dh2ALXBqW7jWuqYiBJ3PDT4Qs2Yz8DuQtJ5AxqDYssiwbQMEM3WNLbg3t",
  "key15": "3PxATGQvEZ4jrfJBCusuSpHSJi3tk7abmtZyzJc21so9dPwi3dffZDmRx4SDJJnrwmJYFcuKELquZip1LbNWhFiV",
  "key16": "2tXzKV9BCucy3p2r9py4Ph8wuvc98K5PEBQCDv4Lp8GAFcLMQtsC9SHT1KduCJiekMTxg2jDt6LJPMjjuadtSkwa",
  "key17": "peQvTRjTAGhU2ErLuiMmRi4e2Qzq5KknDLZkBVpGfvzYccuUfsMUpfNvbTfVrUVWWsGYJUgn6DwDwUuk8v3DaS3",
  "key18": "3X4CbG38vcNnPDdfbsunn2pPA4uRG28eqTV5L1NPo5hMnHthzrmXM5XNgyNnF6ocwiXufdB9EYn6bM8kGCxoT7W4",
  "key19": "5ktPjDsvrfr2f2Q6guU2P5kqMkPivD4JDGqverYAGoS7NMqgRHkemV9o8GTex1Q6LWLDPARtFw92Ag7VhizzUTdR",
  "key20": "QwQMaMDtFD8ewpipyftogTxykfLvUY6XkTbMEMVEUCtvfvY2CvRre24KVrt6CCMP5VH95LGFvm5MuXzsMo5Hsqc",
  "key21": "4KNN6PReg3HfRjSUJFHsFfJGwKMm6imGF5K4M4fobuwzMfHwu1nZ5sYSHxL77gGFRMDvcnc1gbppmfasBRdBeYE3",
  "key22": "5v7CPQSfs8MCQZUcEwYSr7UqRQBTa1zbVvvgqU9wQBMDzt3U4VcAWCdb1S7iRkzkDZhHHcJhy4LbktR7y19oY1x2",
  "key23": "NicAGYTSqMoFc1Ad5k1AwcEKT22PPCGdjm1b5rhsVxUU1uLFaxXZdcqeMKJy4AMkg21FdPU5UtGhr2X9a9YAKuP",
  "key24": "62u5xccBH33fyWyfN6x4MTUkqhwSuf6yHUkuQvgh1HgSV4fYgB68JmMioBb3CS1MFgCryUZsPMNvp18zssc4C666",
  "key25": "2jxW8FidBLCzVdfTgFoh6NzcZNTUVtMLECCyAqDbyuCMpLqaz1VHj6ngyS1B3mwoxvDpxRmVuajpk4ErU4dFSHSi",
  "key26": "64913uknGxiVtLMsuy3hpNpFFzhU4DJHEp4vSAzSj62NEgcQUMGu4XKkHrnDCUu5bWHPVkxkWfnr3br96nKVF1gE",
  "key27": "FjXqKiyP6PK22bo3cE2e6fNjU659Gp7HoeAbAffRjkKtAD57RDQn2Bj1xPpXnpR8KyvNYrL3tPvYqGZ7SX1gFpT",
  "key28": "3HB6iTbrFTatqN3magCqeCxjuMqrivZbNeJc8Z6ZrfSUReb81CcFYPWhFf1tZHwALtMp2VkXUNBaKDXV561YuatS",
  "key29": "5Xhr8UxRTMJT1buDiy8bf4Gn7rwQmz4wrKn7fjqMLPoKe56RCw72dzMZXg1PE2cxPSyyrGhJNRNvZ23hxe1Zcgu2",
  "key30": "4QyKyAg3SckPNCGU1ge55T9rhc9PUMn8R5Kd14Bnmg7wEPQYDR25z1NziSFrYqfTS2bdkTHdKCcwrqMBcBoAaGPu",
  "key31": "46jhGTtnVTEZTxRa6nUusKNpYwX9TEdoJVbVUyGrJ9jmFH5tSDw9M8x7zdpdXrjTT6UYHKk3KqNdw7XrsAxpJthE",
  "key32": "6CzHnXJVXA58dsoyrz56muvu34RnX5wDPfnFfSM5T5FjoogskYXrREG7UNaqtbAKQdxQT9bVpA75z9qqKmMMy9s",
  "key33": "4euNhHUJvLyZ8KD8HTsbu6z7PjjRWD2cU4SEKn6oaEFqK3TMiEquXiMAK35QD438FGdQdiB1rE6uYy57RZZKVWn1",
  "key34": "3hnNWFT3EKiaADCqHwri8MtKqgodgFX29jjTqpW7Yt1WKmsnUKSxvoainqFoHCV3kJ2meDN4CQtEujC36rr14Vki",
  "key35": "4yeP2sGbhXP5ownEkUzNFnDx1ZxZqMnQuNxDfF5SDKaXNWesQzbLgp7Ri8WDpZdGkYjb1CfsXudrBKqWzTcGPcFX",
  "key36": "34UFu8LjoqyE4V17DfbHpcoMnK2NRuD1URzbFLVf1h6FiH3tChaQivEdFAxUhhxuwjUBKLbWBBZmwhPhftNwpMdE",
  "key37": "2DoPRWe62EYkV4fp7uMTbKeyepf89xEotSuJuqeinJwvGMaLfNUoy82Td9DZBrgJf6tjnZv76xzm7TFSeBLnw7y8",
  "key38": "2cTh7mk156YkHfHuUPS7M9sMh1UqKrFQ2QaJc2eeaSHXGsbQFyP4VMR75Z4U1v9AwQ4fNxis4ShXKgtKaJMKahM8",
  "key39": "37mSTJwvRGzymvZF295eSEmeN7vaipr1Ty6t1FHagAL1FPi7pitFxxPJqySp2hoL48QaQhxymV1ocq1hrvtboVi9",
  "key40": "2USqK2ykLDDLgVXimeC5LnUBopMV4DqvHc7KXBjXucdrcWMvCnY5KQYA7pnhN2LzMxYQ7jazMw1a5Tyy2GXw6YNX",
  "key41": "2KaJBDiDYSSGagRSVbL5bhbodSmhTHzYLMTJ8axL5VUfLWdTUzJiQ8G5QDbPS2UfyD2roacNuQeuHJuB5jN1FMNG",
  "key42": "3x1agorV8LJYZbKtUpd76fcpV5Tp57ym2FUthtKsApfrJD8h9B3z8eYLbSoosGZnXscxifXULK7VU356v8AHXQCx",
  "key43": "669BDKz8pgUBuWJRNJ1ZVZGvNtNu39jQMkTRibh4CAXotvLkpRRbE5fh5i6qH7KJsv4NbBZnxibr9yw7Dmoda2xk",
  "key44": "43ersBARehY6LkFy4iQFwE4nQ2b5FF9BVnjaim1iNjWei1yCeq1L4LhgcUxsmSYWPDGyJUoD3qsXFRfuiFqY3qo9",
  "key45": "4QUj5TLPnBwCgGHT1RKQTBP2ctogxXbMQnmirzi6q6QB1ESFj4wRhw3ZxpNRoKW1q9YLW2g7Zqt7TPmejjTyP99n",
  "key46": "5KuBU5VqQr7byN4KzL3M7sC5FoSLgJBNshtW3dPcjsQvjiYE4gCEueCrELKa2mCrkQSv276uspk9cmSKycRLbS6h",
  "key47": "44NxSQTNRnExyYR9UoAsWGni7ZGAGE3tm7raYwTm155957GFqtXwmv2Sk5d5KD1NSicyuQYFwxxXyitS4QZMrFDo",
  "key48": "mwUxi8irtYsJVCmwT9nao1h2og2mDBWZ5koQkoeyf91abDwpncKVinqds6PHtcgqiwqszKZ6pN6ZvaudzENqS4k",
  "key49": "5g93XJ3n6NnG3Kj7rMfhQENnzyxbaRTYEoj6EPaFCAJXEVQhiGVjyU99YT9cD6ZJLWk3ZrnteMYBBGpoA4gbz7ms"
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
