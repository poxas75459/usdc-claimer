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
    "4xAa1nEZfzieXDc1iwNQT5YbT5FPT3u8Uf6x1S8rphgEjpPcV54yjWwccwFHjSkwMySiGKjDZW4tHR6Eza4cWaPq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HJY9wKemhHJKPVH1hYYBV77CPA69rSDhMrugmHF1WuS6GunZXnz7fLhb6ZTZ91zW9bgD6XaXBdkfkYHZhPQWu6z",
  "key1": "2t6XnnaYHQU5zVXJa6LcA3yQDRgcLheWwboUKPYBLPhmuz4eMZUzVfxKy5h39s7UyqAA7auQpLefGNcTosF99QND",
  "key2": "3QAkkvTedsTHdQNXXbhbTKAfs6kRKmwtLZJudzNqzYuoWPXQf611oFk5uaHstm1LbBVEBYrCzoGqGivsv77HxSKv",
  "key3": "3k5vF21QyBt1fV6ZKP1qi7FcKX7Gortv6rrFctrPVfTqJ457AsTrNBoqkbGEKoTSom93AU1Dr5jywj6XERW4Fh44",
  "key4": "2ih8L1pd9oBfmbfHB14i9qDJsHLuhb75uG4P3bXPEjsuoxmEQx5QZufBm2qH8xqZhs5ArKjDaJEyK5hC1QsCptFp",
  "key5": "2TPQH6NVe6sfBGxfHNHjFuJMRakCF6BJEVm2VkzQZqJd25PgWn3cQy47KBRE48wQh8L7f2LB3q3GRJBAomZBjFXn",
  "key6": "369inz7eAxdgoRVDwfv3yVfWAsXcAiSFiaKWPWTo2pnWeVMqBkiMx7Q9WnQnWGDWNjYAm8S9zDrtxCKkw6bWEFkn",
  "key7": "gpmTJez9fWxru7k1kbxGpA54Zx97B1nvr3DxFvePH7EJY5pyoKLcSxDUzNDVsiequTqUYxS2QeaChc3SBUxjmnY",
  "key8": "6gbRB1ZY8qNBcn4oLoAbGCqGpCkYrThk6nEmXC4CRr3Th7N728A3XWGA7L6bno2Q8y6Gk795DJjFrjegiUYkFmD",
  "key9": "5MtzMkY6u6thc27BHfuBiHZdNeAbwB5YiJPm986VR5Ar87TBzZn4fufdWUbvR3sR7juKcnyD1T1Wgg9eGG1KMAkr",
  "key10": "23cVposu5fweGnLT3Hp9mLErtFiSsxb5HLCsmzWf5hh95yS7U33X6fQd9qrA6jg4P1xzXqNj6H8Qw4VYhfsrQAe4",
  "key11": "2ySMMRSK1YWT7mXgL2oEjqc6PJHXvBSbYKKK3qvXmsbjFyTZnEaBZwtkPN3R3CD5LfmLJg3d42W1QyQAc9aWWrge",
  "key12": "48yLDoy1xo8cjyirYYjRQbepKiynha42P5W8EqnTJKGnX1F69DxCRZc1vtCgbRgZSev71dkuLh5uRUfjzYmTMzKz",
  "key13": "vPEGPYoHGdWU1WZNgCtw2S8KcihXvm1moYHX4oWEP5ATQHCAEDDTyPevMrwXDdQCfM5PCsd5rjQkvbdK1BSUyFK",
  "key14": "2vosMVUvK8bYkD7yA17AJ2xF2XW2t5jrz95c63vnXbvRZrZVi3p1T5wgPMowdeJ5LM7umqu9YdsCDtNH63ALU5Ff",
  "key15": "4m5CvDVz1uy7krGSxjJbPTyExMRDNbEEEHP8JMDAPPv8hhtNyfwDAx6mLwLYHa4SD8KoSJ6Fqq9REkQrUaHMMBdo",
  "key16": "2riVVZnedWoXDbCn1UFgVxv1mLSwRwQJkgYUHPNhaEshAVkZFdf6omMMTxLgd8mGJzBAzEekzwtuwbhekaD3YC8n",
  "key17": "2kgK475udv8C15R4LFTNESkHRzx5FterBezokn3hCYHeZ21PxGpq8S1jL9zeMwWbfGZRcBRq6sTCJxPzSyUGgCut",
  "key18": "rztxpq9v4r8YVBChFwSerCbtBeBi5u4c13JmRdFaeKejUvW2r2299vm165i4vf2AyRdwaegCC3HziFSuyf6FtR5",
  "key19": "23gHRNY1sE1KztqWuqtnGiBaBBUy9p7VUuXs6dud7kYQuJ6YHA322gKrwp2n7MYahT1ZkzW1Xq5SX3hzDgMtYPQ8",
  "key20": "4pQ6HkHzsVPjwP6aNZiYydtwhjB8NQxFY4UpnERTcbRbUYfbCXkLQnUsrVwGJnSkYGGvheYsUvsVpoUEqGDCrhzG",
  "key21": "4fCGzJLA2PAoaUSWemXa1nxN9xx6dhiNSRcUoDpNcZygnVqLE7hffN13CaWHHAa1FF1aMr1Dcs52rG2qiSr7hAms",
  "key22": "4bTa3EntKj6gHBTfrzoGwHFu5vewv61NJdZbjKBS5F8JW7D5BTR8gGdpKoqdUse1jrVzduBz1ybuhuj96SGxRuLY",
  "key23": "ubCSrxFfjNtayViMsS5NZJ6qtqmwsVwx2dg2hdvg7e6oW2y8zcRiRun2uyuoqaYkLvVGkMQyGxFBqKGMfwULykH",
  "key24": "3xgT7oVmus5EU2LP787ZDwJruaRU3CaHAh23iwG2EPocXgpWQLeFeytSh759u48FgTpwNQxehJf5JkuVo6u4wHRu",
  "key25": "4avghVQcMpQc1L5TRW4CgKHG5moQrdyYXkmZ2ieJHMCCviQ2FP32EMJ9sJvoMCgotAAU78m5bwayBg5pu3V2QPFK",
  "key26": "2mxmmVBUXyAAMGSpYWi9gpAaKjNspg9Egmb7LwWaYFqrwkxaeoXzorMe43DKaGDdLYW1iyo1nAqatxckoWEeo8rz",
  "key27": "4Qr1k9hUArWcuN1UzqaC9KHphZdTcQCvgkg1YX1Xze27joEofgdp5T8bWd2kjpvRwwskP5QBJFHXCPeJa6Yac12X",
  "key28": "3Atz4dtfMok28PbD6hKhKwo7x19shrtgYUwMcEoWYbH6rtQgnvH8TDqv13aqs8g4DehNJj1LaLXoNVpAwG1PA6CV",
  "key29": "38XHZtyKzvBQ2mQQUXA8cppicspufAU8sr3XLRGbvWxthcWLUK6mPU12K78xdDAqss82BBZw3ZuRGhCCuPw2R43A",
  "key30": "5cpVdJib1gKvvLbb8ToqHBqPETJA5tPfRXyjjcDFS9Sc6YLmbWBcyqMENUZaqPLhTc2SJZU8jYDKE97MuVuGrtxQ",
  "key31": "4MfztnuAndyHSkjeyTzaDXxpMCy7ivygRo8XvL8cacqMjSACivamcbSFZZanjD4qjZ6iUMgZeVFJyMH7ZT7Unatd",
  "key32": "46UF7WfdZUzJ2t5HD68xCu96wAe5hZzzW4czeM3p6LfKHuMuDp1LTXomeYDnQi57ewmkNBws2Amzr4CxKrtEaYwt",
  "key33": "GbnbncMQqWBtqQSiAvvCttv72ajcX38H5HCewrhgD1Gawhw4KHipk5DWxYnNFfKjTkSnFogjJs7w3FZ59W1BnCv",
  "key34": "SEmT8qRHKTCGQn4QGQ1w2bZjVzWxdWw5s44WEs3DMekPkdty4fPyPdFXi8zocgqXY7uFe1wkE8xNKjeH8wzjNDE",
  "key35": "2T9hvAd8x7vDeN9DjoZtoYoPm5Jg8DnnrJuwv8QhByZ2D2YSiKRvb3Zck8LAJvceufpm5eVGZJrZNffv3JgkSQf8",
  "key36": "2VmgSDD1nXEZcvNv5FGWLApBndNFLDNqCH4SE6uX7nhj9jBCvgZXdrvQWfM72fmqhrrReP9Z1Ek2LhVUQe8us5xM",
  "key37": "4qJWF2rpRnY6VHEr8TTa71T29QGj2TPeLrfrPFmRvEpj2wn9myNhJnbUdbsTNQ8ZEADteYpLsyC6CgBf7PzgcGj1",
  "key38": "LEfvALEc9e5FrNamr1WAPiuxiYfhY9LUTcxg22JubjTWR3HaPzGAyNcobcAnWh3TfNoT6w7LoAkPtbmdFP1nRyc",
  "key39": "5z8pWXcZBYrWd3LD3JVJug4mBNYzxByqVbjT51ZECJsMUfXJX8iKjJzRUfrcSDstgMToS6TKrAGvxTP1YzWjCQQs",
  "key40": "2rfsYKsHph7VWdzkZfTKa7oZbgmkcPbXrqRWjnzuBBwyNQqyZRPjrSWdAvC4E6wVLTZUpQM59ySwpDVLqG9p1ZBc",
  "key41": "2uS78qkwGgs9kPnX3e1s7LceBD3XxDgkqBUPgQc47tvFDHd1xasB5TA57ooNrtLeyq93E3Phh21ei96csYjNoyDW",
  "key42": "2fzwfYkAcLibeebFhjvgz6qkTmT86vsuskZApUzUu2xwpGhXN4SRAVH6Bf5fW3BH2VLYKVr8aFrqN9bYWzP8U5wu",
  "key43": "5bBxYzWhJCUksf54TbpWbtMYXXDSNmboYfoSdR4698KVcX6iVyu9x4cXPufMTZBv4ErgjZXqFc6anDkLWkDgCvE6",
  "key44": "2BB1eHGLzgfmbtMYpNdkF5F5vEarDktwhsUGYb7NhjiH7weyk4ZDkfszSdhEePCbkfrdZRU9ngLtqRr6jKU9Tuz7",
  "key45": "2EN4i9t7KLcwDiGYrrfKhktGfinN6mpxuuDcDGyyk76bfoepMubxHbBVYFrd7pGeonyAeczu7R1c2AA78ykVfEsP"
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
