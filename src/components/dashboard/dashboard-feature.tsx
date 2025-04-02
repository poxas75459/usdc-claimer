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
    "3U1F9wqzZGghhqv6jVP3jSCi7Ci7oiNkijdPWyuNcRAFEuVYz6DAJpvqq9pE5QK5a74VBTUNCUYJxwRLBu1ipP68"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WAyksub54nGvzm9hc6e2a9UMXCaXrcTBXrtcRoY3sLnxsGJfnYr6eDMH6fMbXFcKcPAUv8ciKkZdPi3WtWtNKQm",
  "key1": "4tKshPjBH9ZVAKZt5mWwoajzf9EoGW2gF1GU7FUogfKSPbZa2yYr2TpzMF8r17q4fW5iqdffazqsMJ3YUQqnfHAk",
  "key2": "3BzxhWVZtdiJrUUf358F4hP2utMqxDwoKKe4Y7241h8sbQvdETnvZaL1LPBeJJyu19aYpzvGjutKeF365MSJgDyb",
  "key3": "4wexDtRejL7UtGPboos2K3zdhTYM6KSMDvrMnzg7xaBb7CsZboqk3Uj7efHjUQvrhHsEkYWfVQk71YdSUhEnMi8p",
  "key4": "5BtuZM7FTSWTBtYyJ9zw653RzZfwGz2zRHzRBCMqa9PbzMxVWbjVMo6TenBWgzVt15bjQhzLiwRWZVqkBP3F4Kkr",
  "key5": "2p8o3NTfttKgSAo85y5mruatfS7pBuZ9mbEc2bZMHzWr8Rqwd3seKa6Fy1nEpA2ngYNFcBZeEE7uPifxiGrQGBho",
  "key6": "4G34Nh9JS6omLWhzrXWwqABgDpSbVTHEyeVQbZGmxfn34Z9b2jAmiHoD1rmraaPt9Z9uVqDuDKLnx7u4iJHi2uSo",
  "key7": "2pjjhMcVyuCamS2jBaAKS82poS6yEPDnhZuYhdnRn8Q9W9nC5r95kninyrrytiVZKa6GUbcBxAFX1MZELmjTpDu6",
  "key8": "4qyz5t4PHNE3tSR5a61fYbiTsEE4N2yQ5WjTTFt6EdziNeG7PisVHckAxPV2qUkQXaAyPnX2NyBE25mFv3qZdyfR",
  "key9": "4qRs7nieE5eXhf8AraNR1BjihxSDTgdqsmtdHcTVJNPjzn2cuojaFSA8cUWfHQhj7vZ3quUYM7i4dnkC1rm1zJiV",
  "key10": "4aeEPQYypCcVCzrU6U7hHtzFK9uCA1X8P8z49YAVTQYisDSkgHS5dp4NsaSpP6S3US3uqtBuLeEVz9KeAV2Lhz1G",
  "key11": "2QTKY8a2fGWNtsdD2qasUdoDJvXsuWGXvShivga6qxUvcxQiukSrCe5TV5psBjMuPTTKQPy9hmXTG9NaJaQNd9eN",
  "key12": "5xrBz8oMs4tX53ihQ5ZFEExQeRqmDmSSmkSUqbECQCmZn5yojYPUc1KLMAbDJM71UvwLWr3GNxvT6rrt26mMAMns",
  "key13": "5Bw5wUSNcjdPiU2UtrvVt6zZabSyhvELtWyfhsuRzWDEBXuT5GsEL2WjjUTo49SpPedu3AouvDAMHgbiw6CDJdg3",
  "key14": "3weSR7WSbvxzpFdZsRGMJE1bM7kZGG4rqtGo7sVMrkyJmedCJBPSxHA2Ty4xYk1LVkQqFcCrH2s5YsYvUuDipZWQ",
  "key15": "2DktBCZyLAir2QNEYw8EyXwgbsqzmWvY3BEQA1ZL6wXKwnzcrx7sq35ViVbG7FB7pgVfntQV3qTk1YWRkECSoLP1",
  "key16": "4AW9kf78gNCkZx77LgX9Zx4oxYvMLmzPjMffPc4887Y8rJHqgncaYnV5UPyrMdC4BsG2iapXayDo7ah1XffppFus",
  "key17": "3gSPyxY47V7vBadTrdjXpRHJ8pPWWFXMoZxNpbNgxDetLiEKTAZ8ZMo96yvUWgTD6Y2TcWkRdL2kHr7BszUBaWqe",
  "key18": "3yGrJxS6xisWNRx3D5dsSsLpAjcKemxBZSfPey2KNySqiY8TMyvMWECJyRSm59VD96cRo2iz3FhaVoKQ8tS6WSR8",
  "key19": "xQxUMgfbpPsoZzaBv5x1FiekjoEokQd6Mj9tZxpzdfk8j9CNoZw3VZB6pesxrGcod5KzJDcw37qqPYfDBezNiHe",
  "key20": "22S9khmm4Bxzq8StC2FmKHGNzutfMxmFcRn8nY9aGQSNbCgm6nzhaeE7UpD45scPid14gDv5bWxHsfqDDK36Vefn",
  "key21": "2hZS6T244Nedfa2jEz1fbnyn4DFC6BTsrGdvU54mHT9Ft7cyz6KKsojwfZMzwjGk6eroeoxntX58iqWb8ku9CUET",
  "key22": "UbLS3uaf7kWxNX1vaizXKJgDehzbKQ4gfVe8qd5WK1EiaHm4mhrkwJ4Tx84cWtfoPS4HcvVmQ1cbXrRTFn28pjv",
  "key23": "35AKED2EEcr1GB5KMavxfRqAgn2S9pWJnL1A2hXJCqpWY24aP8jCA3dwM8oZD19qy49rAfinJT5dXXwk1x2s66Hi",
  "key24": "2YUHtJodGpk97A6CbD3tfqjDqmx6SLvkoJK3btEM1bf1gMcMR1Tzh1yKAZy6WhX9rRFiU4s1EWWUH9Mis29UwxwL",
  "key25": "SL3rHccmCJ1Gjs18GZfoXc9Np4PxJ1rgfPNUhVfaABrWRmPrsJpMPF7MVgdaX49MZHmepoUix6xbvPwuUfECum6",
  "key26": "CdnDftKH9ttA3C14DQ28BRi1KeGzmpwacv5mokn4hDMoJ9GYFjHSBxiGGzgCe7GrmxbqfGfjioMMSVs46BLeDCM",
  "key27": "4arKDTpStLxNmiWUnkxPyDQpyBsDWdmT9PwaFdfkWksjcm4ndbH8iRKx9KXoFUXSifJrHeAwYapUCXpiJreFhj5j",
  "key28": "3JXF1GCLcY3cB2w7exXZsD49wCZcBdX6F4zTELriYfBPJ2VYNnq3V2t8ATNU2kwfYBrB2NrFQNpZ31nBuy6zuuXD",
  "key29": "47e75QwxXr8hhzJjQbFYuaGpFK5CqNYtseS9FoQqPE3dMj44Si67FJ7TuHdFxqdNkAnmVusZxr4RKVddnMrkSyfh",
  "key30": "3gRAFABC3VACLSRtaBa1KRWqWb7LqR1uVvAn91FmVWiikZsbrVC5DRPSwTPa53SRmh5pmbUmM6b1y8gj4nEfKmDZ",
  "key31": "5mCrN5kjTXsHdK7bVGAreTHrjAzZ4AkYNvRXMxwVKKT4QDH2N6asQ6bypzn3TzpeVQzMFDvXSVqJZx5b5HxuMtSB",
  "key32": "5gdKpixKohMjf1bY7hfDoiKhjgHFWiyt4BCKPEC2FkWeT1rWgtcVLTBoUx8vGgkRoXQRc4PahWH8tN1NXsmN8QXc",
  "key33": "EghmD9d7dhRqx3CdQK2LMQU7vmv4RXsVtkRXLZSTGbaq7guHMEKVycwMSeRdV6ZySYtmhk4nCqehXwehqkGfzLF",
  "key34": "5UDVT29whYbtc9vkwtgBdUDrUPQJ2yGBTANetzJt5tgNkztR4gMToQraeeH5sMxJDPrx6DVg57V7nGmm4cjKGy2s",
  "key35": "5QULWagLMxwvnFoh7eU2oaKUix3ruzeqRkEYeGqgpfRNvtT82FTiAn5V2Tr9GDbFkP5a8361tg8Gj7BtSLM8JsnP",
  "key36": "129QTKri4156qejnc7ViZNJG3ExQ5ta2QyAVJqqzCgiDrSVGTLTkKqDrMJxA7mRSBQar8RD98eWKufFhpn8KMTu3",
  "key37": "3Dy2dkFVfAJAuaCa3WU9QXF4zqcLLyKnkJBgUQfw35vX2aTacfxgwBFogJxvqxVMcmQockc4J9kxaj4o6bvrX1vc",
  "key38": "66PDRJ5ETwfurvTAyuWRZ7T17cwGXHdvYiS8uPuL2Yg6aJE8CXdteo9npC2KhwS3D6MK8Rza3PvKnRYLEX8ZwoyA",
  "key39": "39uVgAN1qpN8pSGqm1fcfxawcT4wgVmbpsbZN1TwihKV65nKQJY7oK4afS45NDuLwP85Ao5YAGEgHpRjvFUpo4hL",
  "key40": "3Ec9KnddmBa4rDRQLqXjoAhCd1DMpL6TN1cqGSYydnJtCKJGu7pMhKsynjwP74kXuoNEHAs8QE2DRSeBhPNkmzur",
  "key41": "51m8wvrMMNR6jDoryPE9iDitKhWPZqG8ZqaYunDK3Qxv8U4XNoNm2HgcoQxxrFjGDDVkdRpRHFfE6s5yUeu346gF",
  "key42": "2jfVdWzXuwY7A3z8xo8KBjUu3Do3m5tynKaGBbdCfj5ZGNbXQFuDg43TXahsSZ23QqHEtq2ZhaYY8aAxU8eK2QdC",
  "key43": "2viSqUitBoJzc2EHG7vHNyTmU69in8tonaZaeJoC5rhMacS3g9Agmvd878s75gFbLpyFa88wZ6phmtcvnC3doZSb"
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
