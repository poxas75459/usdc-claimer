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
    "5j2aw2fMQNGHpKARnCUAfute1wDnsUbmCYUtCQJnxrW3BvNGNfRdoKfdDEkw4wFXD8i6maU61U4MNCNK7jzCUk5c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2P1XYUJqQXaVzLnZ4UVR6MzhAa4x6cvEVFaL6DPqCxTjgm7FSX9j7nr9zatiUB4XPKrSzFPvXnnWfBQa2ncEXuDi",
  "key1": "4wPo4e8NVSwgpy3marhu9CxtVcXsNj5kjsx63bvmBw6mQ72pjmYZi5F2JDwhneduHnNh3P9vk9w4zSj6fiGA86Cy",
  "key2": "39rsrL5Ups6G8XgaWqQppopUCnsSYaBvGV1vN2D2DPojatspTAVKGd8JRSUf6A7oAxQPwMye5KcLHog9t7s8dNJ9",
  "key3": "2MM4f4q2JAxDGN58YzcBEiUi1TSTuNg4qGNSYAwodBHaBBZYaBoNnv6kwLFSmkRRiHojH1LcgiZB9buwdN5UdXRy",
  "key4": "3dmSXWydppK63gGjKuQnjohRSCG6HTrRMFPXUymLbxGg4y6CS4BRhBn1vGdv9NGwwxvsVtsWDMmk42doQRy4Ksxh",
  "key5": "CTm2wKopEd8driEGzxN7WPSGCRZw5qo7ZQXdvUetoRVevGW65xAdcoojEGDgTq25md1Fs4ycizkxVfMBnR31k93",
  "key6": "i63woiZS6wmqguqeapKcTU3WQy2XYrfQAK2cfZwxKnHpjqEsJ1qjLcKMJdgRCHXwkzrXAMRGg1F9XwUgr2drGN6",
  "key7": "2JvCebYLuLKE1ZPW8HNhjfdsT2nXGnHJwdqC8xXDBjjg9X1yBrpzCJmH2ijG2hCHFbESKCNt3b6YL144rCL4Vf91",
  "key8": "3LdsvAXZuNMoQdGrKPQT5StbPvNCLqM6G7u2bNTGDc7hmFtQHGUp1VnFU61eEaTbE286ueCaGVo2X4Vxyq6nc9gA",
  "key9": "4Nr9MSnR8DcRoU43epiYBkvVL7d7Sty1pwqGM6k9QEKbzzULDwVkfSBpmR68qyjkC8Lp1svTZ689MgJVAqBKyqWW",
  "key10": "3y2zDjmET1GEMxdNyg85beu55SgxjSAmtAkGGoMm7ckDzmwGvwNRo5bbHCuME5BYwq3AP1B5Rf7kqhBuHfN1g6NV",
  "key11": "iQpMVXM7bV21isbWNSRJqmcdsdDZAyNrgbvr9DkyP7PBJSxz4LsW7AKqmB4CnfSTKDwqk92teuaLvnzJGSJmpc6",
  "key12": "2ft1FMrQWj8o3kMrmwbQgbqSvBYnAVHpNHQNKWddAJyySyzNVUKHuwuNfGe2WVEP7fd4osWy1oU7MYmfmpXyJkvi",
  "key13": "5iDqgioYV2gGuEPrj8CxRDq5Q5PaFnFMg2CdpfpBh7zfamM6BHfHxEBHLQi5ictFj9DjhepgHWTFiQohvnrUpFLf",
  "key14": "2fQ1y2QhDsEonz5eWWUQcbFxu67FKZ772xGfZG8vgB5TKuGbojRr5omjqfQrFw3TX9ekR6EanccUqwzRh6ZoE9Go",
  "key15": "nruhzTFrYW4e4odhuPdruMqoPYgL5EfiXUMrEkS2yKs9hYvz2DrWy4b9CcYhZVhmNMF49EGwdTxtTaZ1niP7x6B",
  "key16": "ffvSmhzYhF5CRE3rGQnQFXMwT2KCCLkmEYB16L2mugxckW2Z71VBGAGsGWD2VGFc9EXViQGo7dLs4gXS93DAebs",
  "key17": "3csTptqwMKB41TkAJKpEjMJznzEnckbmMuJLDrfZsm9bnaqoqt2pd7rcmJgHge61w62eKJgre8gfuUsYUyuUxSWu",
  "key18": "dPUd6MzJzpKSnxe37d1am5rBCriBAy1McLQi9gpCnv5pZjCUGspPzLuHsnuM1cQ5TchXrBqJyCgU1349w7EL1qG",
  "key19": "5uQgaPCZdjqyScoupTZ4QwKdUcMyz747LhvsjcrT2JUopoNNoy3sUTPZptWhyHC8c6DcyfvSyEDeUh6skzmCV3TC",
  "key20": "XKRKMNzcNRpCLHzKAf43Vjz9K6iJruVR6DmwYrMutLBryCAnxzKoBTv7ygSDdSDH1PuWk1KA2cBjwshzgGauZ54",
  "key21": "2QSCdJkVA1ySNCiEFvpxxXjywTPQKiCyRQsfUoXDpJWx3LDP4NWDjoNKPJQJ2mR5KVSkw84J6htRn9Q8Hs2XaesP",
  "key22": "4VhQWkPtFdjahGsRzvoHteM1MeCRWnmkivnbxDwmA1Sg3dYWdEqqWE2np5m3BSHaAYxnCPbPBJqe4mSxQAG9oSWu",
  "key23": "3zzj6AWLmApguRp8TnvgTGPuGr8dncunMUyHDu8zpUdq1jxSyXkNuARB8SsJAgEdVEEHfNKgmHUUYuJP42EAYj2R",
  "key24": "4BKJAjDdYroWYLD6XyKLj5duyLfqq7ga2FHsQ1XnN9d6xfTHjXDCLyVWV7pajNqT8CxL4tWVDZzsfyFHYD2ShMGa",
  "key25": "5Kk9dM3tb61SkzGbAsdzqkp63caUzNjoKx943K68KHozkjH6oTwSP91qE8HTxyK17dD2xDkyZXPLGAJJ5a7Q8NRF",
  "key26": "ntDUTvw7kTk6JrnXXkLyrNZqzuSBQDBKrq8Cp9sUdDfn1pawK6Jy5BH99oESK9YX8rpD5gwZ2CmnDk4Dq8ET5B2",
  "key27": "58NxETHmrmMDze3djhM5pM3FqiwyPc44AqFujBb398UW3b83o7qj3iBMeaGKvE2L7UmovGxjMhSGBHnAGpdpE1Qt",
  "key28": "4p1taL9sTZrzUsR7beAcPfkzr7naRpU1ZK9Juyw26Wsk2txLrAjCage7KPeh9Jz2eCuesmJUX7tiUiHhsc6uv1KU",
  "key29": "3aGYin1bjs58fiazFMfLkMiNgBbZVpRZa4jaJ44GzZTp8a9qMHtvzSxoL7AFHtZpfiRPbw2tXW3HmZrN3y19oiV3",
  "key30": "2a4xrSxZ95eAJyfLYneZ9zsv5KdSBW5AMtpdR8f8SgT9pbYmgnBu4VL3Ti4btmSz1ACrH5RiaMVMpvKKv7a7NeHH",
  "key31": "2Pqo2VcUyrc7XcMXsTK7NjMHPVjfGUGLRowDH4F1zJ1wqWR9KmjtCwo2WRJawP8Uq4yr6LowgSQQGgJYFyJDQj6D",
  "key32": "5JuyRrjjq3uB1R72SMu68E6YaUEzFkRUSr7f5X7XMT4dq5WJjWtahbum4veAoyzysXdd394q4WnTvwHBUCRcEX4K",
  "key33": "92h5u7VUuVSYJAeHFgyS8wNA2utaW6EJirUGUoYBCkcGFoDZNNzFvTX8ZkxiMFtCpwMooWvskQ3syzKNuN9jvXN",
  "key34": "momJQesEfX8ZszWo1RQMKkS3mLbHqQhQHy7nFH4xrC1wfM33ayrvbfw1mjMTxN3kQY3yYR9xu2KSTsyn8bv6Z3U",
  "key35": "4PdM8WDpxVSLJUwb9vSYgxEpRaBVDParCfo2ZSTJqwUNNcRwMPXjgrX6b7pNvAvYGFvoDYx6qmZ5kQX6abnZC4Cc",
  "key36": "5NhsPy1PFTBMTGvpZq1xzP49GcHtS1FBWrkv3edZTEHSzsrcwvBVjfnFrVK6LPvWhBfBjDgoj5BzorieUdF5WJhj",
  "key37": "58PdzAguaFXjLM8hroPnAxwVJrQoGTtMerf9u8ZTpSAd1Zzsvgpvi79LNegEcZoHPHuBKC1yTQmit8roYT1ae6ST",
  "key38": "32thUxpYhFMg4p91oH6vGjpgsYEvGEcDi4zVxg83TxohaWr3QsunAdBkhmUodu3JRnd1GskRtYR6bSGrvvAqzfKv"
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
