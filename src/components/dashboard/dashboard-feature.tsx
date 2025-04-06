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
    "3wouPVqx6d5VPduBHKNFnpqYon4SEpdNqKskK38QK9ucVQoxirPN1Liz6NcCnAgGcW5m4k4aVZTLDy9bsJ8EZo4f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4weCXtLc42VdnAS2zD7oSLcVWYbYL6Lkr8nfzCmWgML7PAgW7hoBpeKN3kfKKqAU23Hrx3xNdgyHu6iuofhT2JhA",
  "key1": "3AJb4aWpGuCv4Rvi39Yt58enDJZwjVGJ31RozguhJsc84ozsrbB8WCBcmqiKuAMc7v4rqDVii2VpY4BR1HVzMquH",
  "key2": "mUTyMwM1WujyKpzcgn2ojpMHQMAXfm2fFj12EwCubWq4qi7FFaQWaWDtqtEpb81yMYFBfwBGUs4HaFPuvnV3Gkf",
  "key3": "2sBXLVen3HT7ZN1YQZFzz28JLMVG5xgPKRDAU6cF7GcGVw3rmriCnDVYtXkHrhCvNtfNmb1pRvRkjZi9yVz7bd5x",
  "key4": "57JtvXf684oRW2mbB22x1MYdNdJD5zKiM4De3Wx1YpQ8P6736fqSaaXhimNeRPvQn8JdDp6vyK8GLiQFhxknLgiU",
  "key5": "4ezfya7LocQXpZsbiNXZKRMfEmzQpo2Y3LEvs5DmCerA5E2GmYZqc5WJqBdDiXYyb9muZaqvLorNhRRXTtf68hWC",
  "key6": "2LXf4S9XYULKHeApAAwuHKFdMrPrqdXc66ytZn3PyYDjavNyh4j2TFzcNTeaEgFwWGfkSbdTVHAqCh3g3evddxLK",
  "key7": "2qPSGWcDErQRV9QWCWGfUTEu86rkw4ybfbDsGrGcex82XRiNRsyrras12L3NR546Fz5Cazqm5Xt5VAihLpU4nRDG",
  "key8": "4dJaUNHzJqU3fB1vreeNGNVP8ZxmgtfFKju4qPzLRwm1KGqEcnvMvmMzgCe4XPSd3M3z9sntihtHQLLj1viVWoQ4",
  "key9": "3rvCkWKR66QPRgotqHqTNUZm6hpbxjDrz5cAAPEBRsrGnR2gwLuNFTwQCvcB9VtgC7qHCmmCcgwxoPCgNCXSHVrE",
  "key10": "2pFYPrYUCrKGs1zbTyB9NkT557giw5aWop1Hq3Nxs1sZ4uHKTE1pEXwVPCnF9oqTDfuP4AVgrsnv5PtLJkqenuRr",
  "key11": "4BNFmex1FLFVcfJEHrkQxAbFKuS4tDDDYn6gJHErczwJ9dNSQ2g6coDZAwoQYsHBWnr2D2Zi16NheYLvB9BEU252",
  "key12": "4HMuTTRWNpSxS2oLyahrbnbeD7xdToifb36cALAoof4KPqwPAk2eBSh5dq8LrzcwtiBov6uKzZcDFg3MbNpgNerJ",
  "key13": "pXq9NMMBGnPK1RZVh5wF8Yp4skDDqoS7YFSse12W4adnZV8DPifN2pP3hZ26rfxgyPhrh7PxzaNpcHHiP1u7Yh3",
  "key14": "2rtYVCRNn5jYHGMFkvPzLVBF8gWSHsq2ezdDDpehBptkbMysuvwann8UgPJXtBAv6GFcNPbqn948gwJXnmsJK7xY",
  "key15": "3WSP4oCt1sgDScJxqNzoqgeeTY9UNU4HRfrtvMsLTJovaghTixPP86rg9KYCpLKeM5511oeqqTrTUJEqnQFcN5qU",
  "key16": "57Av3TyM5CS4bcCpdyFHajqfyWPu2ac3JcTT3QobLicTrKLW8VcLHND4f4LpywB3CuhDMtPfD6WZXPhzLmuhfmV8",
  "key17": "2cUcNfjePXKZufVmpVkPZ2iFzJ5Mw2HiMD2b8zn1zpbMeCC9wk6mXMnHXbh3bHUhYFWC6yLrF5yarNpucjGjyktt",
  "key18": "NRR77ocdcUHtM41mr9VGoyxVM92wEaBEj9UDXVzNhP5sidXtWfv7Y9TWq84QkanuhBpLGGLpstJmRjZRAcpvrEn",
  "key19": "2J7gg6gZLDaDcCY4JUMw9voxwxR2HqCA5oh7yVuW8PCCT5j5PKKYnUierd6Hc8GyNckkr11DAbgndV6UjmcUQjPv",
  "key20": "4beQQwFSm5DfCz436N2Mxddwx8mtpiiHdYokMminxFGVKNC5tKMQduY7L4HEmgCqGg7WtUTfoLBH3aMmsT5RwG42",
  "key21": "4qzqfJ4ReAfZWdiqsq4cV5LDjfDpwAdF6TsyrWW68CEujtTsZY6rYyeSunYQZqRMjR9ft2u4ztHZmHoJa9BPAUhL",
  "key22": "2CiJwZKpUbD9VWBu9pJNnEt56KKD6fFd5SVW7RtEoQcRLgpo8Zfzr4HenEdjveua9GZKvNJdDZjog6w1pbcaX22y",
  "key23": "5jdsXtxLLo1v2tecPZ21AZNmyYnPuaUd1NLAi2PoezcWeSUDRXAXFhXUDqHShnpnyLUJdpSJ84WebZtPCF7YGdpf",
  "key24": "2x8pBSEx7YJkthkPSkczT2k7khewJvZdDYNcWX3ZfrAkBdLV5U4ZKWyBUBUbmkL3coUuY2LxvbgqHuTDtRomHnA1",
  "key25": "4ktadCZzP7z361eETP6zgkyfDF1yDZk36fDjuNv2jAGJPBttWi58YFTE4qYK9a23EE6yyo7zqRaDEzhU4UWpvwhV",
  "key26": "245XLu4yxihevHWPRWbCNNyxF19FetyjXMbinJCHvL6z4Rq7wNodwCci85cKSsrdrPMmHnVxxa9t274w5p6fQhwz",
  "key27": "2rcByJsXCfwang64z2DEksMGL2yMiFAdWzx7zNrZnB97yYHorzgeJGtvkmrs7rxKu3U7H5e7gCM6C3DCtYGz1ucV",
  "key28": "2NTigc1ec3S6zXS5j4a5hUC5LE8vBoCnwirGBLpaNZB2LYHL2StBXtfGD5fb9TPA96Tuet9F8qjtA7boQm6fx3L2",
  "key29": "GAQGkGwShgw3A3LEZi7YkJLt9tNCaq3ZBtZ5Jtt2KPLkKoKnkW6uLrEf3SKruALh1A5g3BhDgCSVPGigZYRnheW",
  "key30": "si7VPJuqMjPCKcPopm94zsMxFchheQEDxRh9sGxeUiuFAVRAe3pyiWk9ehGPs3aXvCjsgPseN2Z5mhaPdokkEFZ",
  "key31": "4ftQYAgFU2WvNVREoVgXpi6FuUzTV234XJucamEM6FF2zC6PqN3DkuGdZtu2LJjfr3w7BYo492ywg4WEgPenNZLc",
  "key32": "2472WsNXZutx3NJiuhBEBXjSQu7jpGWJddV5dSfoKp3KdcMiq8gYBa27YSJ3FbDW5PYf5RPv1fhykELqexm7r4bt",
  "key33": "6tveQ3kLgQk1kshQpdmrr3KLwCvt5V47AJcgttQxJwxLKGXu9xkrPS5VobwWDuXiizChchUWCCgXYTaHZj74RdU",
  "key34": "4rvGv7Tah83oFJ8o8oqVWUQGoGfhkUPr5QJ4grVg918eCGBy9tGnUWzz9L8fpUgQ2ps3b3jGyPaA7HHSDePNxSfM",
  "key35": "2BzZPczUfnqcKHno2mqvWCF48QGfQAkKoowawXbASvG4BQR1663MhUoSwumeb1vDkwmBcM1Tv9SARuMGHmfdnmzY",
  "key36": "vUAHvWjfiJx2My1uBibxC91RSkAKHYQmHqfHkFPw87nKxfmb887a1e4KziMNnwVrWwMx6a93bXVTQQ1STRZ12dv",
  "key37": "3hwLTtFazYTD7z6359dH7bQSwkudZoyPRRKNtApZYoX1JBjmLwqSynTeMu5tWmnz4YkV6smgw52NMnkBCX5JKv2p",
  "key38": "5ar7fgxj5ayW6GR3xL3cb4YkSKSFmev4D1p5FU1QgEU6F2tctuFbCUPVraG4wg83TFamc3rNfPBpNcm7t3TQiMKP",
  "key39": "5rZwVLaWcukpkfnQRVbVCLc3tsE4YU3bZWEWNNthM7GSc5xwt23gLiuJ1Z3kPfXEwcLatLe71u8uATGnZQDiLVyG",
  "key40": "36kzv3avGMDgH9defiNeUgdipdzWA6VVfnXcHcMUY96ECXfDV2n937TCWYPTFPCDQWsMWtF4KAk3T96ayFKBQd7w",
  "key41": "2khC8XpQcrvF8JNtStwCJEKh9ZNPCw53nD5VymU6hXWB3PVR3EUZRznEMaCAb3zJE8W7B7upMErNbbQ2x6AP1wGM",
  "key42": "5FRaPvkyDj9ce5SR5E7HUmt5KYJJsLTdK9NiWPLjzyb1yFmGTqcSco7ua74gNh2aFHah85C3N9qeNn1c3mWTynFW",
  "key43": "67naJA32mK45v8ywZBp31nCE37gC8Aqi9AvnjFaHWij4JnFjk6M4tbbQ54KX6Y7x5eACUhF7JjFEhCdVD89G2CBZ"
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
