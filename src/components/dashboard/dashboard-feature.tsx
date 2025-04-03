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
    "5PDbcMSyPzRTb6hn1K7bkf1h55TcPTZJh5A3k4xA8a2rQyTyP7Sa74jYmczYTi4UaGBEJtFR9WoPEkKRLzhxph6M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21fBEXycJRgbin4pNGxJvbR6wM45jgqT6keq1WQhQLJk1hZ2KMJnFiyPqocbrNgfUYBC2xMcM5i6S2LMAKubAreC",
  "key1": "5KDGMjRGRDTavaZ4LkG8d7Dyj7SqDR8KbHYD3XwTYnQWVRzXoFJbbyd7kVmf2DW2wbEq9UqXyKizSrUMLN8uT9ce",
  "key2": "5DhJPoPmYkB3KY4G2SmiH6KDb63znRxXszCMS9HQoZJxbxFBACQa9WSXTXSvM3qBgnSPe84TicezofYtTPsgXcdk",
  "key3": "tTHxddDPhLrMnvQKGKz46KBhydD4oPUVFtsrsxAt4z1zEFWkLjBhcWXTgJS2kFH4qPh4KvFYUXMNaXMFVrPpvRz",
  "key4": "swooWYmza61ireCm1tx4gr9ag8PGCUkdnriHcGqYEFMoyEzcjt1eA3mRMk8umndiGDCYRwcjwY58sjTWPbYFHKh",
  "key5": "33nU5956Py29fnBL6xKXWhSDN3BGJqawKnq1T9yjRkTMKDjLVT2s99RqstwfqJGEYiRSvrzuSfoWuS69UhZTQLyL",
  "key6": "47f1VafDt31jNPA5mCgRxedbBXRj8BiiJeL9RGEr1WS8eJbHTWwEY5J76RwguJndXSAU8jTVMKNtUtBjew438ppg",
  "key7": "H5LwW9v2UCWKbNtFWT1xzqseoofCCBQXKyxu1JdGim2JZuDEPMcxHsWrEkTdDQjj1rLVSqmjfN5dwTfvBP1HVLw",
  "key8": "55CJwedhNaguCAk79eVajTJr8vWgVwyHFhZpgAbMu7DaD1Rk8fzecd7RFB2QggLzUXhPY9BbgYsGPcjhMwdnU4gW",
  "key9": "3djGb3aDHxmHNJJFMMfRaNUjsexd4RHDBCrjBYNnVs611tLLk5BveFouwLSPDqCBLjDLS1HUZeQwzB18btyRZg1B",
  "key10": "5oHafCBKAwG4yyTAcJLhNC6CzdCgziBLuencgkijU5mDEe81eKUzwHHtk4xwaHERLV944ndm7zxGzAgcx9GekPUR",
  "key11": "4jb6hzWtEbc99XJjEm9SLJGaPz54s4iZSpcUSQCps1ZcThG7e5e6Z2GhEMVujDiwhBHDixJ3U8P5yJh3qUNYt3T6",
  "key12": "5fMbuquhrVsuNuN3iQSn7HQUF9V5JenNNhgq3VRMAeFxjtSqPG2cB24mMjwDsNRSchF4y717357qp4e5ZC59V7xE",
  "key13": "5wdWfsABTKkm2cf6D1Hs9DvkAcFhX3ckR52p1p5L866wycknPfRCQMAqp7QzgeMkfS7RyZ98jSAtxramVdBhYoQp",
  "key14": "3RUuP5DGzzdLDggc8WPJhybmcRcGPsiCPTLRvcx7dBHwvwj1Mrh1BkadVSNLxB85kkoRqtxGQDrtkZ9UEiWsUsqJ",
  "key15": "4mJiN7BACNCtG2aHNsutnCPKWV9XxnvZ1BM9HJfwDBVQWXt2qBFTmgNDPcBprVHkUkAQx6CyBU5qm2G2dsb4MF9x",
  "key16": "2ny5ELsqMnLxaSG1iZyx1SA2oguXWXsthU8NqNEQAQsVBbZL8qaoUDnPehKqWSvJoriDg1tmt6fVeGjKSgQuKQ9k",
  "key17": "2iR5rJzBA1PympuNF698uTBSL5Nqyatwf5HmvY53EAmDgn69ReRRF9dn75gp7gi9jFAJiNRYW3RivRAXYYrxTqT4",
  "key18": "2W18yLa1ZTeuEuMtEE2uLBNJ82t1rnYgzGKQ1SrPvgyVC4kCZ5TemTr6u4ts5Ep2vHx9BjuLvVX5DBtgfgaAPoyr",
  "key19": "35jWsoGKxD8j5SSHzUr9hkbNX47P5jtHeotnypucB7kFcm9EjnGuJF7pctpSedoAzePLucpMveBQPaXT2sQt1yup",
  "key20": "347k2M3LzNY5ivwH5Fe8rwCFcFsP9Wt5SdWM28uaEjcmUrr1hkXogrb4nsN1UCQiUyFuiwCby48Sgs4XAcmJtyA5",
  "key21": "4cVwLXSuvC15ZxP9pgVLJYGxFiVCREjJUkqLuG8kvDUy2YLW77o8yLRPPGFazARNKBzVa9WzunRYpdqd87Lh8PtX",
  "key22": "deJ5dhk1vQAesaXuPgVLrNZLcTkTuUR6rLUioHCdLjExwPBtfW8Y2p5JaiM2bSAexPfQyEJA14iLeZ2LzVJWhmE",
  "key23": "yKVZfx58ych2RV7nNQ9E5nojXJ3bYUwvpeNR6uVio24xasx7MeSJevSZNrLbHNjvgKbFTz2oAARg1abKYzHXMAh",
  "key24": "2A6y5xJgbH4HafboTVfttT7oYMzzQKSAYSmHFvUjhxkeG56gHbdiLoPa1Y6oxNycS4L8wPfGQQimhmHTdvynemHy",
  "key25": "J6meNdX4Fk8bq9Qn4t2JA2Ke45Amii61JP1YTArqvauw7sLugSBqpBqaA1NYw3tqw1695ikz2PaMTpomsv1wyjP",
  "key26": "2RrDvz2r8SswER3jEPBKgaCGb3zvRuk9SRTtwSRwN7jj8hRdcawkpoXDyMQJYdkBxCKdwqwQDPU8j3bDh1nGLbYn",
  "key27": "3KEReezpdexUBqNsD5SGBvFomjWMb5hXVwbPzteEdL6QbLbpWeFfffoyCmeFsY52Kmb7zKqTBvbLkDd6zwC2Ace9",
  "key28": "2QLWFgV6gdhkTHriRR6Tvshvep1gyfFoifLC38SwiqnLLxhVaQg3YigLocMxuDrJtf7pW5XhXX9KKk2MviM3QgNR",
  "key29": "945ea4V12wSkgXyhwPaGdd37q6kkmYDVX1A5nrJ5rKCYKZ9qytEfEu8eSPh8fcQKpxUzw5rUd5bsXoU2aECFtfp",
  "key30": "3G6KRhSN6wACwBruVnmW5xZZ2YanmdWRq6HzTZZ3RCZXVeDsakmrjKddFdGsc5v4LDADV1vSuhHvWgRcJa3gjELu",
  "key31": "5SjPo6dy1SxxrqpJCu9fR4kdui3cnkDE8jardmXkd4HtTGtWu9vBKVVLnRQdcDWAijzrrD4vNHK4GTy9anHsjdh3",
  "key32": "FWsomqDiro5SrH1fKd2bHWaMhqscWcFQx4gQyLyWvh4LveU4Sp6jKeVBZXNkJCfSWpqQGo6PDbsbyq7UAVzHQpo",
  "key33": "5ywG2UYrK6TcVEVRUvzvjr8uEfZ6bRb4MhLjkwY77JGNm2uRGxV9puumGGH8rCMhJhRk6bA7kjr1VsyoZgWs5EBi",
  "key34": "5iAs8Cma9ASheGk4ubravUm3tN4PBUo7xdGwyoto78tA5t4KsAuUapqRquDmbDht36V25bPrQdKfqrve4m4P7reT",
  "key35": "3G9ojhPGSUB5vpn2HYTEL69X6yWxMYjsR6HRckv9PSGshdeP9PskHhybtBMFY9gbq3RdLSXdeexpv9oY1Urhuaag",
  "key36": "4ueESjqNUH9HYx6o9e67zxmWa6yAitKnjBv7vs9sBujT4Hs3j3MVyjE2EZFFv16cqPgXFqKc5t6UMHDDpwKSbqEC",
  "key37": "2hWGwMFuVhVRLjxyuCKDPx2GQbb7augDAJsiNAYvph6gSzbZmh3zRRozpNvHdoaM46ek4uYVE3ERZdmmrfgFjyrx",
  "key38": "5N48G6uTJZNyT1Fe1uusVmQByyk6ysLPwjxWhv3jRmFyZsRsji5FgV1ngZmyzvD8EVdz5AvR1LJazaoFXgQFYmes",
  "key39": "HBnEetGazhr1Px57GzHmSXUaoo6wy58QyoNAu5WEHn77tkX52yMUxvqd8QJi941rq8qc9sVH1R3xtgX9qPxdN1Z",
  "key40": "24mhApz4bZrKjmk6gbXKYcRZnVa6pZisT6ny7nVi4nF8Fv1tJSwYD1FCkyfJ5HYwtojcRo4Rind1piVo5D1UKsnM",
  "key41": "23fzEFN75g1ejfBsv2Q85C9f3G5u3B1gT3wazezZyZ6RNLxPuuj2puSDTbKppe3JagHZ21cmNA3gye7uBXFm3qSo",
  "key42": "3niWtbhMYoojnMMHkGzbQyEGxsyyivuu7kWLqzKpNbCc64bJBULtYZnAbH5cyK47peqB1aC7HiV6bhg9zmTXz1K1",
  "key43": "2yhswez7BKeVvU7xt9ZWVJMU9QavZVQbPJVgnrH4JFF8ZDRYSHiCy25XrPSXgtQsbJ3h4ubDLZ5Aa8meNUa1DA9T",
  "key44": "5SuTaPa1kqWxFTiajJT7Dpkc1s5rGcxKvWkedFXAxJzjAhiddXVLpamgJyVmZ58y5C4J1V3f63iaUwZL1h9T7qhY",
  "key45": "4Ft1gLQfezepFMUNZGtfVCy9Hmn587d9BeZHTbd2C2qeFtmwwsanpjyfNzs7c2FxmenqhhxQc6J1hmiAtGe2j5AC",
  "key46": "jfiVqWkvSSnxLVkZpsUPwTruYfsZ8LrwZMLafgHndKCnBQ4YUBWC6ThtdwjKG1P27TLGZuy12MoXEJtNmdhUcp4",
  "key47": "45PXAaDkvYfi9BHdTn4yLR4QvejPVfHkdhMar5yNC4zxXoEtZTVLAH2q4UUqWjb6RSLqRedqpZu6sTMAgngDwws4",
  "key48": "4fMHZyPspHEAgebUTwc1p1tkxftSZFzp3MmGuvGSigLMBNrfRPfb1tpPFSsaw4hgTTKEFxJWQroo6XMSFWmPzanf"
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
