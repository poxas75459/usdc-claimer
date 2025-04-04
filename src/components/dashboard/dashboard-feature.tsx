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
    "4CyF2pfLwr4sNwA1TYWSb5ZteDVunS3n3VRNvYtv8X7uDaYBEXLGhK9FTNay1CZKbk3XUPMu3rJDaFqcKNvHx3G6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mbDY3Tzc6p2awDD1D4r6KNQ42xfKr8Muw3zhzzW8aDt8W9tft6tKYdQBegRjwdhjvvw2KYgfwd2SkAVmJnYScGZ",
  "key1": "2DyJpajxH51c7u1p8ZPQHy2AuGdX1w151fXuAqCto7wRy9QmYAKpRMBRMS7KYtzdhBRDncKmdJuEAwqHWjZGrv4o",
  "key2": "3sHWHgfM593M3PJignDQy2qZcHoJKfMRhL5h7syeGBrcaDQ4me9TaCopjjTKdsuJv3LaSthmFgYfsuGojPs1QDXw",
  "key3": "4AnV92SJThrDAWixJYhLKp1oz35dtazwq9hojFRzEwgnHMVn2LGzBRRCZ3omtMaKydSnSXr7bGsEupmTYuiXG9rk",
  "key4": "2XrjqohL3VSv14o394aHE193pev5DrYqmswcstkrpgV4Zh6DThUKWMat9Xbh7b96fDA2pzLjNpN2A3NBoAm19fZF",
  "key5": "67M71whT4Z9eBPAFpcRLYsxJz1Lt4yd533zHMBX4vuBHL4BLno2JZSkLrV23wYbDC6PscNh2myzPPQHzbuvNQigs",
  "key6": "4u7czBfgef2oibzSvXZkCVfKyPLkVV6UyoBcqMDWmxDJMAPZ5iSg67NAzaoHLtjumUngLrCnJfLeymKPE52LjfsZ",
  "key7": "ZG72roserfAR1cg2mYtac7sKoYAXNWFGCqggjvrHqsSsyFMVGRrEb2NCbE6U2CMSvJveanYwMHxBPezGvDkSSmM",
  "key8": "2Q8SexpHpTEaNCAB3ETdFVav8eLnUTWC4WMvPjbLPjkqAekYQa4E9rW2sXWjjet6be43rtMssEbraP6dvghr4yFs",
  "key9": "45UQAeAQEbtg7oe4AX8ohhjCp2A1EhddyuwVfThcYFkxpLrGBBc8LTHsZytLPSe3VBmZMLh6Ar2j7jBbNiupZz3o",
  "key10": "q3x5xKx5KoGaQ4C7tZGJ7HLtJaAPh3sDarJ4s3ktQXsLePq9vusso71vPyWCoTmDJ3WuqezSG494UQpucKAhk8K",
  "key11": "2Txezp6KdFGZZqFn3JRyErsEsWEJWDGwBh2d7hnQP2DiXW9YuyHvmjeTgyYFURawWt6RTpXphbvR53veKJUUqrmF",
  "key12": "32NYtUSAcXfPstPDEfJCCZm2J6XaEwELW9m2EfzEsAwk1guzrYMkcy5FF29UrXfYYXnxr8JTGRM1Ssm9qQxnZrLS",
  "key13": "2FFxA2VdhQzLmdChYysUGTmhuyi6PwNr7qKVKK1K98CBbAAMNVi1j2KzgwMmqyaLMXWKWRiTCWqdGTDSAVn7oWD2",
  "key14": "4eToekkQmcVngTZrnsSsLNAHiMGEFvjMmVPcNLxZ3SAdaVVx9Ytp5HEfXXWN9wJcotKSEpfAFBJSYd4Gr37Vt3RL",
  "key15": "2RKX6dtTdUs9Vr38VErWYhSs2TTCjDeaMcTHC2r1CJMBpe38zSpvVAqp6cX4EkaFJzp65juSmWGYTGqBY2XjuF9p",
  "key16": "2sH1iEA49NaWcEz9FYEK6q4j8V92AojdG7mX5Yf9rH18tQQmShPzxjXxLoZDpqZcVUtdMtqA72Pxp4cYzk3umLnB",
  "key17": "xcWaTZxUAjAuPBeKkf59o3A27kBehk92ULJJmT2iHokUmhuCQgn5ABZAVrDh3StrV8FBvxbv4uYv2pLB6aVxh8k",
  "key18": "4VQSvVEoHvdDpZbxnekKqtAkwe4VUTjZsiZ5H7AYBAkSdtrqCtXudoGDB8QxW4rSF1c1nCM5KGZ7tUAfthgkSXcP",
  "key19": "28EJ4a6o13QJ7KEZjdw3dsEc9U79dA1yvfkShmM3koeGLH3EnKveEcMcCj4cZ6SMP3yqijXBxkoJR7dgtyxZQ61Y",
  "key20": "2f1ewBogrt3FXt9D97kwTPDDsg6pq63Uec2uSWac987ACaXEBYypGwHh4jSLtK6q16zbAfj6RYMtR23NmDoZXoxX",
  "key21": "4vrszfhsmUUwbkSujUJ9y2t8V8hdzefRzxTjo7dMjSD5tZ9k4u1DeSCAFcpgxaTEvWwmFdF1VKVwPRvP1WrSY2RK",
  "key22": "59FYM3u4dQLqjX16xafyPcfa55hsxbkea7fn9vncaWf1CRe9hMAwJ7eFMMAjVEMvg2gA76e325USAPfVYMp31grB",
  "key23": "2TpzBcJPiizAvpeuZTLBhhDD2MvLH1hJmWrdGCHYjdnw3YDM6mQ9dPn7pqGekG2sq5PU1EqAA118SBU6Xw75dep5",
  "key24": "3MuQhTofjUGs3wqbKbEXJdbBLSaHMr68Ech1JGRhYgWHUQ7gSZ7EkLgTUuHBjUAtraJa9sEzk9rVacFxTLCpfZe3",
  "key25": "3Sq23MsRrrQFhRgKigJQKkj4qs7G4LcFovNUpy9DCGNezxDbJMoGWupfx4ysqPHRQkUMZjevcn6Bp3LzpjeZSHJo",
  "key26": "2MDZ5tVqBQGjDSQJt3dr5TuJVRYFUidzFTAfBEuyRxo4WCZC8fRP72PBN81PttPe6TTehCpcqdkfNqtXQFK5dxEo",
  "key27": "3QMQDPHythekucaQMpbPocTN6AALiyi3BNbCzppTEDMrNQRq9y8ovMxWDFYSksH8rqrTYrhAf5azcCr719xyxZdW",
  "key28": "btiQAW69n97dsLWLWPAPEZb87NwbjwWdDzKUDeA1vW6Zipw8T1nyurfMuKtqgFxZhTJaCZuX6EacxBMvguex3ET",
  "key29": "3ykMiNtMrvZam5J4LiaaoCoJCUiPTiMMjfv1XPHAxiu7LGyNiHH1U8DaPSvNLkQcLSFKSi5X6hZ6rr5FcsVjbLfB",
  "key30": "97ZvG4bx28GZ6gBqD29dmVNVd2a1XestGfrQavD5FV5zYzoKH3tGtQ1cxhfrW4jcMPnQBgyuMFdspsqzdcfFWyu",
  "key31": "2pMAwq6NiBzxoo68SXtPJzYcAMy2C5jEfsmNiUVNjwx9eBUp68YD5JLJx11wsgg7bBPAkvyG9PFHLfXTmo2J3avt",
  "key32": "2fcLGfFiGZtR2xCHyqrYUUbsM8jxgatoRbM9vdgNz923MiqRFAbvBz243fMq6StD6B7HD9yPiMhUwc68j1szamn7",
  "key33": "2YNaoNdNdPmH4sZSVXS98Hqo2NhqYxD58auXYqfq5Y9AHoBxiq3SZvsgEdBYGitgpkYWhBqV2MoVaeE8KfeV2qJk",
  "key34": "45UwF7ignp715YxaPgpsHTpwWBS3ah8idjoCMHi6UGxTBZJakAAADvijiMwwiV3TQok7RFvSugbVLgusRuGQcQtZ",
  "key35": "2M3g2g91rsZzTvqYn5YxP9u6cqMfwA5wxsnSGEB1vqVVYDLfGEEFxn5uNGguJvVao7UgzaVeYduuLktkQN7Pu8Si"
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
