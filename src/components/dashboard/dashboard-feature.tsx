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
    "4NuurRiQxQuLwFxYVsrf7j9UPTveiTgpLaWDYk2nvDaM9eJmSftUiZfgRL5qmjXGwsRhngSzTJzGFpz4Wh9CnQQy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SwDr5opcpuyDkTbSq6J5PPspsRTZmSbDx5985CR7ycHgSppNfuUVVXAXfQi5RPJmFBiUCtz8Eo2wrBSTv7LdWj3",
  "key1": "3ePhXrrd9vzjMskY6qdVAwX9UaB1pMyJoyVUHQS2no6voB6ia6TdNBEHM8zwsgtDou3omtfuxbFXq8W9oB6scEWr",
  "key2": "38gMGwJvcYwbzt1s1w1nh5j5Fe2dV8neTpFDbTVM2St57t69p8tKBQRs6jAAFtxPm15W93KiGKVyS7fbRazGP7sS",
  "key3": "4xNUcJycHBrvhXy2V6x73Ty2FQ9Jpop4cBR5omAEqsx97vNirerEYADQNTgQniYSobfqJDHXGEPB6D8qDGwubZzm",
  "key4": "2HwrA13Md1S34sj8oGDyBjLNtcB3vEj75QHZjoaK4vdKTwCam3MUXKhn9nYnhiGxUHYsyr8Htxyta5yVNDjxdvVX",
  "key5": "jdWSLfvAekgvr5wFE5FoGqy4MMFheD55f77UYbsbEaC4gEF4owcoA6g93qZLz7zdHbGohGPsLETr8TM2tBAhRmg",
  "key6": "335DcPvjPnKWhwcxGhwusJcsrTEyV3xVcVVAa4HwomBKQcNTxkJyUfw5V92uUzLt3jrxzUYXCwCj7uKadRrpqVXJ",
  "key7": "Y8QwoAhYZ3FeS5GSsirQTg3rKfVCnRLvw28MiTMXH7tTmjtQms1xRbGnpcEiqSPYN24NVLAthdVEM4kRQeMgL4h",
  "key8": "67mbHoYp4Y4DaqDyN3GHvLztrrrmbqf3CACSDim6hnPzZihcJfjjtYbK6P3FqtCs6RQwc7jhW7w6p4kqfv8jK5Ls",
  "key9": "vgP1tsmYxCmATe8itxKeLHqYxznLpS21KDg5hc6SELzZuq3iV3nXnqXpgVyVwRKpUvgZT2cyPVKQw71AWxHq5fh",
  "key10": "3xhuG6yH5TYBHjA7916X4jLkqdEu892CLYiaD5TKj86NDeVR2QZkgjf4S2dK55usgdxZZMnhU151cDdvrvnBSTDV",
  "key11": "3q4vNBRSG4Zb3Gy86zJizBbAJX5X7zbErXQDVXvZWpNAqMQKqfWsRiviz9mBTfox8fmagzTHy4gkHynQmQLUATd3",
  "key12": "32a6zV2HbYdqZHfTQxQ9HKfGJtWd3eHDmhqQ8Uy9ynRucnXUYtf5X6AGEjEA7oS687zyspWL4uFbYk788kTTRL7B",
  "key13": "NnzwwPGs5BPDHocT7EKSZSFtJ6zGCMz2imQc7TK8XRTETqY3W43ckuok91sjE4wuk62yycPjojkK3oYYhxMWMP3",
  "key14": "39BHitqkN3QPcbiZ2KRoFucTCnM9styhYNPokhJZRwLQHRt4RcCPhTWx3RbWCrKqJJLg1T8RyeAJoWuVy23tWQJH",
  "key15": "2b37Nf3aEht2RX4P68wahv8D4YLmGfbQXaanCgxd7UoJZ7pT3Tha5s6nv57nPgSdVbVB9otyEmZVcygsC9kkHnvs",
  "key16": "4AgKSYioXseR2YAQLTKNR27rdRbWrZY7dbrFx6Ukj9LaUDhQzPKKCD2JF4KgweCyCxKDuBAXgUVXNqWMb9uSTYKk",
  "key17": "3HERTsfbjAvHvABLiuas9zJeJzwknymBn62frc2My1UzJeeqcn5hX8MgFeQYUtoTU46F7TnR5zxY2JFKFWYjxCbR",
  "key18": "22QaSJUFR2sxxd8vGPhrPHGaYqNyqT7PNSQ8uELorumZfcwVqMp3k8oiNv3V9TwKZy8FE5o62LKFZAYofq4W2i9q",
  "key19": "5YiWNKSEgR43zQdGDVe7t2DLRmxUrLwkCkkPDLeF2BZz9xQxwDR2Mwzp9MvFGnR1vZ1DbjwAXNAaBfpAVNjuF96W",
  "key20": "5CsKYQFMF8QHH7PUBraUumu7BpwrgXLFFUM7oBMn9GEbhCN5mHTbdKisdAXcX1zM2GzfBwTzzATC5rEBC1ft8Crp",
  "key21": "3VE67Bg2LNCL9UCE53xgAt3PAGiusRFXYbDQZWDio6RzEkz7VAyRmwwcLngmFWS41ZfrnQV8u4xTFjdMu76KS8c4",
  "key22": "mABUpMRySdeLDioPXrsf1bhKKRFCUpyf32PFbA4PYtA85Gba1tF4othL89PZXPcsH4QvtyK1KwGzVJzjvtNWhqe",
  "key23": "LtgNJcduHHaJtwCbsBuueZgaA3yw4JroJZEhwYbxPxHPhX8us8jgeDWuSJ3f7oEDhwXTuu5ikmY5yWztxTc184H",
  "key24": "62HLagA695B3zHnfkBCGg2cWX5fYntoQKP3Ec5BRZGtnq27fqRtGuBbQFXrHjzWwXcDSAUFybX9fTsXhqXJjPSH2",
  "key25": "4BoJUy21KDePEg1CTaz9kG8RH7pqzX4Qx1KUytY1moVGFhhrnyNn3MPoumw3zNN4rbmAonA5ZxiifboqnAfwv1iS",
  "key26": "2AF2ag7rL7Yih6a9VcfmAiHEUQaphNPM6g3szTrY3yxaVzcUaNnae3K4ve5HUxcChAudFsg9yCa6Xxq3zmxg5D3E",
  "key27": "5FTaECcwocHN6kasbHHjvBtXtawSmzWnkNsoYDV9vgxB2GPNHULhRN5FGuCEK76EyHJbdKgwbR82RiNeMMNKg48X",
  "key28": "3EJyxfLTSSPVKn2oMcpDA77e1Duj1X69PYHiPFbHV7jJS2hAFw1qVvqsLGYsLib3GPs2DwqmkeCux2U6fcnFMsEt",
  "key29": "SBYMgPtEqcV9QZ5aSSyLjeBcJEi4j2D6gAuUGXzLDaRhV2guBPQnxCBVfiidw9kpfhzu9jD9Cx2fxbMfGCjKdq4",
  "key30": "3rJ57sgvG5VgFH45zeCgsA6vncQtG3bYKicYuXWQmYVxUAds3qCaKEAxeouMxtwrFTtVSx3P9Zj4pqyNbSnNvxUj",
  "key31": "4qn8gn6BDXsbWooezY21F6hKsyrwUVRaVa8oWjfMfuDL2Y7YeV3Nu6Pok4YyHmAFjmDUDsTBpDjzsx5DzRy1BFz5",
  "key32": "4H5yV8b84PALRjwXpmiqfHPapM9oeQsnUjupcVwxdGKAdS9QhWvMpZZhUDj6dPgXCLBrK2mu25hyUcQ5C7kWLmDL",
  "key33": "4KHdc4tQo29xR81PtaUynvkfzNd38Sw1zGnM4DGikE3uscy1PQk32DEFKDMwaoKezwEbrwGKcy7oHU4jpgXEfLUH",
  "key34": "4iNWN1CoHXt5keETCCbxwKuN3cmEZBY8iG8uZyizJaAQiz5yiz7FSVFi1JvojzqUVnteKh8rZZ6mtjFPKb9e6San",
  "key35": "5NvdW4HsokTm28s6D3dCNbGQudHuY3kgDYAhgUqaBe3DrGf1fSVQVHLAjRvL2yB5P2bxM1XrJaV8AjDcQJSybov8",
  "key36": "4Bw7GFYehfsA8zg9T2Yo4ZvbQgiSNmLJnvkB9EKmddKgq6rWyqB4AGJgDWp4CowEZ7oXQLWuihMfjuZwB4eW45oK",
  "key37": "3W6fDRdoq9kUoxoKAet1sVXVAHkdBDwiwJGKLHSQCj1RDZtXVqcQz9XYc4AvMxBG3aGwhNYTCXvQbBP2h9APNtDp",
  "key38": "2hPaqJdVXNE95VsPMnanRjHUqq24ht1fHeMVzSZVpxyAfF5ouM4nnMp5EjqHngjHT3WDkzyEEic1aZ5wBqx2QqRn",
  "key39": "5rq8X5HDWLhtdnSovik7XP3ixkuVeMxdGhFBSLzwiEN135Q34dPd6WV1v7KQwV3ziXTmWyjQoNdbGPST4f6WvNjD",
  "key40": "FNrpvjC4wnE7Usptbhx2a8dij62ymDuuAEF2FPn93BrVJ9U3Jtk8BqENfPVwaLuMeLt3tXGC76njnEJpHaExnBu",
  "key41": "364E1GMv5YwEZ2cFWTzr6fb5NL4SRU6mFXSWwTxV6A2S1THEjJnHdFfR3RMzvNUqEm23XBTTRsHnwHqHTeDT9mid",
  "key42": "5SsTj17QA5gPCgCcbATutdeYhbjwX1bikXguJf9XLyG133LtPBcy6RrRhnNBA8KWMcbWwvGu7itKKPveP7k3d7nr",
  "key43": "55ytyaZeEPPcUwCVVJ2euuergWMsNV1h3hKpJMhDD3izGJvqYCWXSuQSnJe5ozA1xKcA26H3grTQAEU9bfAz69i1",
  "key44": "4JG1DWrv1LMXperXP98jfK78YZNUdZr2MfM8k9tsvYYKYV4eRBzDH5fv6MomnH6YfT1VBjGEjCBLXQ6EKWUsy77t",
  "key45": "QCHNXLXZhzyMkVUDqka57oyEBawM3fCSqjhJAVb199azcnKtKnHZJ5PC2dLBMNTPJJ6LEukFMGDbd7D43eeBbVy"
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
