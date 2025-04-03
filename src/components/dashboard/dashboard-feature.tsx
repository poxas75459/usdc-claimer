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
    "3bcyjpo9jeMW35mMpF48mBo84JbEqeQtHPLooAkNmmLpsJN1yYg2uDhK1duuJGczPsGDHiQMP8mBneVaKGCmzhVF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j17e6r2Sum7AHUBugsaKqsqvUFayvHaPqWLvCcoMTH7r3sicUfCuanPB1apGExM1r7ECrEvsVyzNg6x7uhwUGTR",
  "key1": "k3JKoJXqqEKEhgJ5vZstmwQqEKzDL4MAWGAm7PKSxD7bfgRPMfHEE73MxiH79KWTtLeeH86XfQCs7org42dppdc",
  "key2": "4jTAZ8YUpNus7yZeWdd2BN2mAQWxEPUUFemUwFZgXvqASWiD4aFsCR82KincjBvnF3jAWkvjrLgQU1UqbZ88AQYY",
  "key3": "3WDoYywWuLSj8mFDr9fGDR1siUCMTcnmKSPKWPm23oYGywqHDm3bNsD5WXNUrEuoVgHfc3E1anecZ1WYVoUKvVKx",
  "key4": "25biZ6A5yuCCkKnwc6qDu3vKeJ7c8WQWt2mKnQwrVJD2WaaUpoA5R2YQ9NHnFodhjaSpDuiPJQQQpQZkYVc1qf3T",
  "key5": "73bfaki51zGNUMkZagxEtz8q7M1FKjGceoVq9GDXCDrRSBKeu5o9xGUKu1eqAXi64Z5ccTpEB2SqUFPLJx2EYup",
  "key6": "3PSNq6Mj9tPYbxbBXUhbqM7z2AzW4qtJ7228FBcGJzpLHmwtwpUCYB69LAwwFjGLWfS6FpGBSk2LjdYNbGhCSefW",
  "key7": "w3hVMy69F95ucECDJoMLR1Y8mWcTaa62okb7Wf4K4zU68pQ6LkzoKFWJAi3BFUYaWo3mKBriEEgMW4DY8AFMgWX",
  "key8": "3CzrasedEuGbERCSBc4tjqgTghLAhbCMDiBWv7VZLW6NaCS69PVan8Ggsh6kEm1KXVduGGD51Fpx4NiiCLCDK4oV",
  "key9": "9kxEmLzcFV624rqXVvweaZx3nNi2DUwgue9q9NkfHyF1wFqPFHaLeyuK1rJbrKVivHe2JpuFcenEPnJjHyB8stN",
  "key10": "5nPXycWQQd5yKCoTLfQoRH1dbgchtX75ZQPZzZoQbhJoJLtbqBU2suMvSDA3JaZXuXYPEhWoJqjUXGnN45v3JM4Q",
  "key11": "8hMX3LFNUaDrfArQzYc97ETuGX6yeAw7WsKE6kY86ngCj6VwMWXN9WZRGKSv5DnnK4oqMYesmGGSKr44UVPy8br",
  "key12": "3eRDsR25Y8rp5uePAgVQ6q7PLdxSS7qU49uUJe7UUfGZkehmYtKU6nhAktS4sMADE5zaru5j99UyeXYkUJpFpDDg",
  "key13": "4pw2bYUvjdUeJJnSNDYNNSLUbesKP82KhxzFaizKhAyu3qTAF36ao3byWBs1eneREd8A1FdEpUGqSJDSC5gNQXrV",
  "key14": "5Hw1hufesZdQ5CAFn9MPRjYmvDFGWTLvT5tbVGYeDA9hXFAUFvGCZFLnzztBnf2zQdHBxysk7Z2pzExavaEpRyW7",
  "key15": "274BBBhrDgmeJhW5FrnoTESyggEQt4PUbizayKEesFDcgD1Svy2hWN1QKT4tEGbMLVFpqDZTvXk4aDvPiqyvh94t",
  "key16": "VkrxFeV1wYwF3B9mu3DPWLwZx7yZqtjvSr3JxLfBFDyeqtWmVpEtnpYApJGeryaRMxNukyoB5ypH3PfwR2WkhqE",
  "key17": "495baMEh5xvY1wtDfeg5cBverownEEhyNw1LaDyUh6DnPqXg6wXM9ejg7Mvbfa37ySbHm75SVt3tyZ4XXgtrh6nw",
  "key18": "3XBfNoMjzAwim8kaaktWyCJcf3wziQnkD5s5pUFWeA1d2uFaDMyXveoxAQtqSar3QKxJ5pz1bvnMFj925WiWWVPV",
  "key19": "4U95gxHxhNmJBxXnCd6BwTMMjpnJRwgjm1hzNra1Aomfhz5n8ATPyt1LGBTagsZzMHPvkTwFmgvAPVwXyyzTfWqz",
  "key20": "5CpiMw5ZtX4RDgqpi1qhb3cXb6kRGuDFVxyFF4JnLBDkVo3BVmp8J3JBsJonVoYq9UeUSaxSfgfXjSBjbopNKQwT",
  "key21": "29Yme9RWWpasJFXdSs4GnRaFo8mxEvoCVDfTc7Zg8K3y6Rn6EomWKTy2YDwM7cA5g2drCzB3uuZhRA32GZ7RzBqJ",
  "key22": "5WRSW8rpJBcrt97JXrf5HrjudpJJ13kgdU4w9Sy73jh4Ck3pcQkwuoPgQy4mRkaDXbnuo3svNxevWDjyHGexpzWu",
  "key23": "4bMWy8tTHgaYJeo7NsoXGVzCRUmdcyM6exVppdHHsPRC4zkgL3SQqBixd4BMkzVWhtcKMKKpfztKXb1ohcgDCkK5",
  "key24": "cJb9QfMX1Vmxwa6TZJvotFAALSobZZnbMKTCJcnE8zFEiStJzakTtBWVYwiESDNjkyV3k7638jsvC5Td2ZAzVXw",
  "key25": "2ueegtx7Gwj8ukQsjheVTTVUTwVBGbTgcFoTrdKhivxiZRMqi65PcXmm8hkjouQqqRTh34KBPxpCTT8sYBkKa5p1",
  "key26": "VZXchFoCKei2jbst6pC5GDoP8i4V24LGELfjDs5UWCTzTztXx2Kz7fgfoY9iKSFVYyCpx4tKeQpMuKpic4hkPkj",
  "key27": "2fvVswAYzaFVhf3mfuCwJAGWxw96owSBw7TcQnduGQSKxVTFWo7GFJLxsHvxneuJuNshfeefhLJXSmJJ4Kdi3Tgr",
  "key28": "zm6apo8Lzq2VbvhV2wGMweZ3g83Ez2T1uQqMgGhUH7KHoD7GmKj7uHrZP5YtN5H4oYgmqvWKv3cQtfxa6KsAijB",
  "key29": "63xNSkADKPfR1GNQj1LPjGWwBcbcGyYQLjP7HBcC1KV66DiBYiMazpKMpMAQAV78bQE47HPTZxL9m2zh1BXQ5iGL",
  "key30": "43EjWWz9b86DweTFBFU4q6WbjhpUmvLC1YrYsz2ZcRgKzxTvMTpatkdyKgacPKFXTFHkdCu2Kf9hQEzMmKnZ5vLN",
  "key31": "2YYYgX2RszRqUMpuJWwhgMCwmT6xCByAiJPdPcZr77Rj6YezHh7dRDeVBeMNbaiYtQ9uBDghLKKuJG4GN53bpJoq",
  "key32": "3qN5TRchdGS4FJhKjQmEFoWbySgCwM3rRGqqJU8cctb5J9tCBMM5rihrycEDZ7ggrzVr5U7PaPbgc5Mh38ZnRyrD",
  "key33": "2U3zdf2XmbrWC4CievYNFtDcAnALqpr8WMBaXY7f2ibi4TeAwgrZiD9LrxkUnUr8S9yKCn9mErHHNHxWhyPTfAdx",
  "key34": "457qR3KT8R4sR7yJBUaVNQtfSuSkV4nVywwEzskGuPjDuGtzYuqNaS38H6H4LtPcU739RvHWoCBCewcnZBUtL7Rz",
  "key35": "kdTeBT6gePRxBSirXQwFkrWYYwtHgRKWMc7yVB6jEp6zpuxvs8fP8G1h39UiFveFQiBCEDFt9jGKvtZxqiij5Xb",
  "key36": "2aq5DwqSwMAamjw7X37xxWyHmtPAS986cn44eTcdavyAy929L5NqpSr2qemKNYxiGbvTnrAXVJc6GnFGiceqoPcF",
  "key37": "54teDtSoehwVEYsBt3KcHAxDKyvuaSLgdx1cfCTUXL9ejTDDdpZSJ4RhwkreHCp7M1JrQDfQGJiPY586rjLtdy85",
  "key38": "2EjTrp2cPZoURmbfVMd8Sjk577C28xgH8jTVW4AbXQeuxDUtaa8nxqQvtgREC4gAdh7mvXCW43QbkKhUHyFdx8E9",
  "key39": "2EiVZQJWfjB2ijM3Wqndg6Ry7KBD4GFvcWYknCjhaCMKscqq1QUNEuvrhyWtZMcC2SJJvHroJKe1be33Ybev73Ws",
  "key40": "2j2Wgxm8q81duLVvawwHjavbNQqEBTAW17UJY3GMiCUZhpRDj9S8vCVyQrLwswEy5fU37E66KkGyS5sS8pow8Zwi",
  "key41": "3mLvKcrd12nRsxzWGWdytNXenKduNgGxbN6hKSeuL4CQSSZaaR1q4FJBj4NbjaTMuVeo47VzCeouK5TMtzrejjn8",
  "key42": "47FuNiYXBoXPN7JeESCGTiYpF2fXb5oAL5rmAnaHnjeKG6HEzxSWo1SquwAXpiuubkfSmpa4fDFf8YQRW5gLoHHQ",
  "key43": "2Agns2WhtS3xZu4A9seJWEK8yw6KFJkGiygXn2rk4PQnGMV38wjCzC114DZPPnAUGwz5g4quoUfRa5xbLiwtwuT9",
  "key44": "2ivYYP5WU9r17Jdh4kepNJRTZv8qqgG62WZaCTmzkXZYKvKPZ2RBHcpwy9768n2eW3c7ftJn96mSeeJjWBQGz7Ki",
  "key45": "3kPugZdjke8Qeq4wmcSWsDB547TJW8ncNqE1xnA4Dp8d86LtBDjkFPnB3AsvzbWHgTJxdRn49vTEeh2yLdVDvJVZ",
  "key46": "4sXtnZ63WYFFdJoXrk59EZjck5w171EgZpRYtRXybFNq8MqLvTg4kEjFbhyyKHShWLzSBs5YPhMAmKEsoopsT7EW",
  "key47": "4DR1oDXVC9uewCrEaGdDcW5mdTYtswvvkjnUe3cZZFKS6Um41hwms7hCWUkQDhJJogaWx5bWkSTuciv7GrWprjxp",
  "key48": "219GQ4eKHWxgMLM3xAjvu93dXJxvrRsBn2eT6Ek7MRVRfZHJ38hs7Ty9NUHm8nJMqJbA8zWPPQK5opirWZM9aWpN",
  "key49": "41WohqzJdMuwCHKC7hWdA94AGZXVn3xcX92eJMvvsNSMAG4UY5WmQXSRziVynWTrYykWVMoV299RHrdssAyDKUXh"
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
