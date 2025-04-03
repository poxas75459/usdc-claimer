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
    "4qAEnW4nGhetxLExZAqynBHrrnC5KFeCVq1foKxyiV5okJhh7nbVcouF2BB62aDdQY6woeUEqTQ25CoUdq21doFK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y47RqqA1NFYeTDsHnjyHRaMAtfQrf6LoyMGrZdUvU6yvT9McD8ya7azJdpXjR1BKHTj29G1ZqpKYSdWRPu3Pj5P",
  "key1": "5iP47MqAtN1hwCSGWoCHTnEaR188YKgWjgLFYmYk8TG3ep3oG6LNsBA2Jgdc3v7KmJ6MxKppHHRufjr3gsWkFiBd",
  "key2": "3LyLXFZZhAxqMpkxbh4TQAp923iUbVwonw4KfVrPFB9VpdR7XdxvVfbDvzrfLQCfXPJkURiEKBgzVzuTx2Gx1d14",
  "key3": "WmifRuB7duT9FHFMHKdHinYCpg8zbD8mrHbBtjj9TXcHBjBQrzsynPHq3DcTWc6t35U4PbxMd55Sr5DcpXJ1wLz",
  "key4": "2YBqLiSDGpiHQszNpv1w5KNvceBvtRqBHPvrLec3sQKPuctzJZUDze9rUcCQLjgLSwvg7hoxc18R4aJoSMhq8Xnm",
  "key5": "5SXvDXomcFGBpSpQ31ZUoBxukihCu1UWuEHHxyDVPzFVCFNdKUzZvgN1ovARY5UVZ8nUg6N9njgy3gPCgQrvCGtP",
  "key6": "3LZ3Jbixg6hWFHKRnpbwpD75HrQgUKfg1JTD5Q7NoEp5CiwB3HoWF1w2fTYQ1SWFcbtAsQQyc5pbcmYqCNh4YDZY",
  "key7": "fSPzFHPmVE6ecBcLi8ZDNoQiE4sMXGfkZ5iV55K7FHgFBC7UPparCMP8A5q9wC5FPQpipqDpLCL17CsyqSBzvEk",
  "key8": "2q2ySPM6rsgfEmn3RyzFwrvDW1U4U1TfdUQUG5w5nQbUcvpkBLfZ96BD427xHR46drDwdMdN1pJ8AEybM6eNZr6z",
  "key9": "2VEhLhByWEUsf6NFXiVXVGeKUME2GVwcFAM5bGRxZ1MducXNsj4iaYtMGg9YuFSqicKFWNYB9FUsJsT7yBXcoPCK",
  "key10": "41rBi8HYYEzmyneNEmNQXUFWaGVaSfYnrE2CBw81t6mAKgQm13XNtSoo3vdQnaZXPnVqDNKSdhorRZ5UpX65pnpa",
  "key11": "2yZMMRPZvEVDzenN3FozxVLuVezMjXYMpt9QcRTo5ButGFXPHaHfV27dvERj8ydXjzZRXDJmghke6aaEgAL3brDh",
  "key12": "3MHjh72Gj5WkRbgWdQXx8JtCBQJxd5u9yNVv4JwtQpybvnv8NetB7C1oaHBDWBjtaWvdGnTxXaAVfRgH368eB8wT",
  "key13": "21TMNqbbfw8naMGbyjVWqqx6qa2y3Q9ZJnt3fgpiPm2fs7KwzAhHmZj5rgHuJypqpWyqTWFonfQy23vEjs6ZNHzx",
  "key14": "4HFfpGCqabWjtzKnR3jhLWFMc9DRuSm9ShTBaEmuJbiGHFxsRHBjpb2BmB8pRnUhG5WfUCiJ4rh7mhbo63XR5abW",
  "key15": "38yGr7dFe3Di31M7wPCQEFnDNN8EvvGAPomsYTRXr1RvRdFovpz7yhmTTUPBxhM2Kdv1x8U8qeZoqJZNGGgzTcCY",
  "key16": "4ReZXSJQAPor4uGQs3opsvXNHMFs2RCWgnd9ocu4iWhNhBEX4UuhVCAKYAmZ7SzKjVqciod1tCE66Tu7kTxXNgqa",
  "key17": "5ayiLZ4UDBqskFaCy3XCQMk2imQAK7BQrw5DkVo2Q8HYMb2rtosWaG4gR7KEsaUj2wkyLY1HCBuNX7cZCeR2mn6T",
  "key18": "9zjPN8P9iEuyCzDyc7nKv4CzYkCv2eNfAuUZyvf9QAjpjfTTepcrdtvuDNXuXhXaHjCJ5QBjuk7gk8f3mhHkPWh",
  "key19": "4tPaKAxXrzribBMFf4tadtz6QduF1417YdsocCpox6xcuE4xkBGCjvf3bctjNiqwbuyDQpmmY5FXfXV1g26M4139",
  "key20": "PkmZy4TwC4casifUNYnNhixvZBuWJrtGwy2YzVjqzcW7UPwXMLapxeCDFEzaRj9vqMb2dovkwquJz4N2qF7V63x",
  "key21": "3vD5Vkb2P2ZF6k2PRBLedLzhq7F2FTXW4poN4VzYoXx66R8iMQTNv6mw5QrpRQwfqjez5aacn7wWDnvvvLEzzfn1",
  "key22": "42SaRChJvs5HuGTA52Zg5SPDf4kTq9xUUWBtbhX1RtHgrFN7Wwvg4SUssgbMojqr2TdYqK38aFan96rqLuJByQEM",
  "key23": "3Pzo4af4VEe91ZthsUxosCfKNvmhtS3u6xwmWMioxM4nVwmjPm4jGiZv1pre2LzoSmhGWPvAWC5PftSieQ4QhPkJ",
  "key24": "3uB5NGQhVKCeGeJ33U6ZYr3rDVaT8xAVREi8J4XfTLSymV65jSPotfxHVJEY6DbeA7CaqMVVFowhcNJcbnfGg7oR",
  "key25": "2DQXq7LfANQTz9XvGUKWu4DF9efJaxrpiXpWUKdr4ere1oov6W1tjKJbLKVuxe4Dem86Ht6pRbpnVE9mhgomVNC4",
  "key26": "2wPXG51NuVgnfVBJ32krNkhYfbmDbBf5mejtEwnfQwxWGLdRFcuJ66iC6UrDYSnKtQmpdjGaGsMSPC4anTxFApEf",
  "key27": "2juJLHRBFmhUfa6pK4N9hLqsBZpSfwPWSxS6NJFYKE5bBHX1PvarrdUBHaBVE6xpFq8Uxp1J42Xyc4NAU6tTUYhj",
  "key28": "DcAGiN1Jdisec9Pu7htwNLnsWY25jPHyharbWyXiGRWHKZFcKVYJJCcgStJ8aNB6qDmwsYm7jXLjgM118DggHz6",
  "key29": "2XFU6cpAG3NsTbCVt1Qg1tB2gNUub6p5YJvpxM4rVrNn1xdxDPe2Y2Bi8FgYXrT7SRyZ2KEMTay6TtPvXequX9ea",
  "key30": "3tWwBxB4Z2Vs8FeSUCZxuhnURLTuqU5mVyTBYbTNFdhVHif7WDZADyacnCcxAB39CYbbV6g2VDFGXpZTU1KqRQAi",
  "key31": "5KUTuoGUwfnyj9GgYRQT8i6zv7o4mPe6kLTBVX2x3sfwQu3Yeffi5zGtekE6wk7VaYBwPTvkm7WaGnvTTSmzecu1",
  "key32": "4ntEVXiwJ5dxyewH8JajWZaAx3TrHkWXa6a5bBKRPjnbWUZW4veJFH9CgaYvrstLbVv4i9W5ReijZzm3W9wVrgUR",
  "key33": "XqpSVbdXKakFzfEpXs3UPvy28ir87HkXRFzo3H8Y6CfKYxFxcoau31EoopAnG7xK2NPvBgHrEdXQVweiXRdAHBB",
  "key34": "2tuDYqFX2rgiTdQcf6SmdZK1bNmsAXRSgFASCnFHZtJB6zyF5S6vsEugwExnGCh26yXPcvuMizp16nDxiW8m7dF6",
  "key35": "GrRe8Pd2TLTJJRoC5B7EWBCvTjpHctxGo1zJKPS3VYxsgcJERwh4Lr4hFmDc7ge42gWBjSzb7tPrw4Z7yQZCs2J",
  "key36": "2oF2WUoyVUhGYDuW5KyVme9V4ormuJFeK4gYGoTDhpfhSMnMg4Egx6yXFtC4N2u85UJJ8m3aHLEFWR9uHpnHobYq",
  "key37": "RKuc7S3xJ7sEzHZ94uT1UXmpQ5LjCXQinhDo6JnBKJRczWXB6wdYgJfjhSYJ7wn3rtHqvG4D5eBLtXVLApQu5eS",
  "key38": "2xfxUJ4NR3ouwmDf2XmvZxgQC3zrNkdNsB9woMLKckdDCQZbTXbseaKk8wyGAYftm7948C9a8JxQdfnF5eig7QmA",
  "key39": "5kgHopYaaJ4BjBnp6vzM22GBst7wAhzUpYKG9eXiphk6EED9DP3CNbBTkaS7EWiTXwm5UfafoWTgF7NAfMFvQ7h4",
  "key40": "xi1Z6mRMeWMS7KHjFR2RzSXdFDrgr8RV8QXAixGCukeuWtj3T3uoAxyLU6Z8mU83aJq7vpyxyB223XGVgnvk3vp",
  "key41": "3qTW2Dd81H8Cn8rfUqMaSZNVnmJBxkLJ5kdEnwk2nv4UqHWqN8uZQbzBQhQaLyjVpcty7T8jJYx8qv3oRNGM7i2X",
  "key42": "3ZA3iF5k6HgMtSg64uxVRbPgRWCpyiGq4tUzPB7pmhycNeYAy1pgRi52Tav6CyzMzq9qVgDqW9FqpBNbatwF1d5p",
  "key43": "cafJH8R5J85gmF9cYLci9j3XnNT1N7hc5QcoWw7ou927mAQ3YPWm6bz8s1A2dxi3hn33cZs7Rntc8JAf4U9pC8z",
  "key44": "4zwFPrWkTHzEtutZx4fW83UqrURWkvXdivvJzaLbWb2k6BvTD9xuVk3SyVNcZ3skae3ZHf5wqhUTam4RbJ5bNk5F",
  "key45": "4sdiaijqyTXuUSYU3cp2ea4nSHoTZr1igmhK3wNxTCZNwjXgoV8u9Va7JUB673wkpPx4w7YUMAsYT7vHZTJ4hp5i",
  "key46": "536H7TKVKAmRR6eu6n4Q725mwmSjtSgtgaCjZ6cU99gUEiD13x8TSxKDHfXdKL6rJbzEmSWv8GNTDHNeKyMBEt7X"
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
