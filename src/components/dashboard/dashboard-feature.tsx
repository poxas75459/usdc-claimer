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
    "5nT8GDiwSEXWRT9LjpW9jZWqr14WLqrp71mT7XXAEWMSq8CDoq29d7Nuo8FiFygAv19VK7nCUArtvY3UecXJmTiw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pTLxY3uGpNdAzdtYf5jExcFuYhtv8hwCUARKEvSMc7M4Sazkv2ebYkh9vYgMySrhKqKSMcxvXmBuFhYJe7sov1Q",
  "key1": "3bVa67bAbwP2RtQX7esNFV5f7j4Eb7PmuZkPT3tBqi28V9GcCz1Xd1vnVxjgRTTWzVm7TQesxRscVpViBx8Fz7Ps",
  "key2": "4ASFXFfReoM6fJNAiz7quTmH3Jz9kjYDw8V6gNMTZfq7oxUekt8yTcWYktS6rnjstik4FAQJDyEmZbaQYrkGiWeS",
  "key3": "5EfXfAEwLUffCkZCRBaJQLZ7xJEAygHVGotHuoqTcR1r9hDyCAK3nqucCuCceCPkYav4nuM6WNXygPKSdfSoBGoc",
  "key4": "zsvccAVWE63awKiRQptMRn7xGmrq93gntkWei2GBgWiRq6Gyfw7Jjb1y4BT66vfB518QUCQ2tmfkb616C1gWN4N",
  "key5": "4ZqjMpgjytDMgLppQbSdQRkmepiripW4qkkfXxsxCTe44xH3GVWXAcyGAwHDJQsT7aqiKPy77s6jLriGgnVWSdoA",
  "key6": "3oS4mncsALq1nohJy6awJ5hZznzXKSvBR2TXjj6ke6GRChVrndHriNy9TrYg1CuvowDDwxSdqd5R2mzk4EQSHX7a",
  "key7": "3QLUYTmu5WPQq8vwBWeC51T8vyUJSJTcyamUJozzTVFgs7i29r27KaxdpqRPAx2o1jGYEbsEzEAd3Qc9ACZ6Auow",
  "key8": "37J275UW4dwBTAV4Z2Lqz4xufyPyWJ5y9FTd7W6JqFAFALVvwC8vr5uN2XJqorz31ZASHEf1k5kJp7X9Ryo9uswe",
  "key9": "2P2ekK5soEcX1RiX6nxqMsTnqGHJML1ntCDZwyqoCCzExuLc1fwiaf8Pxubn9Vuw89rwtCijioZATFexco4pRStB",
  "key10": "pUqH636e4fST1HDqY9vEGaWJobuYWr2QZgDK4G7UKzziF8SVGNiJzJLSHTCDsJvrscZFyLeuAdsgzvzoh9LuSxM",
  "key11": "uuZDV2u8cauJX2oHz4s5vLZpiitT4a448DvxSZV9GbyohsjG1zJjk4YesHcthrQCLwu9cUUTojmkr2yCBhfot5Q",
  "key12": "2MGMQKYAxZU2zy3ntS13LcjaYbwxiic24VyGx2jjvhhiqsEkMyYLE1w8XmxKpAaknqSHxX9AThkES6TdUxBYy8q3",
  "key13": "y9aZFfUX5NavyrWPA49UQGZcByPMbzFK5ixF7dYjJD55rP2bL84pAsWCqsGjUKEREVFFZckjRAx6xHq9zW3h8mZ",
  "key14": "5sdyp3DcpXRwgD6E6BUyZpnB3Kkh3SoX2j48hbEbcmXYwCiJsSyKfbo9rBHKJWBBwMjNezM34iHEhFX2Sg3GZZq8",
  "key15": "2f1gRu6zcH3cieh315ALXzygebc3GYMhN4jYrEYnbm8Fy9nkqy1kbxh8x3dKtSdA5r8MSbJBbXFfyrAHZpEakGvk",
  "key16": "3RFQvKheMQWHgou3v9abZYTtmrgmSx3UsqWkJBpdAX8iR3N2CsTLhzifSmvPjPHE1xJXrKRhPWmVBfb9nDa5Zhat",
  "key17": "2HZJfKr8SZxSuGP4g9sFqzhCfYmVEw9sGdmQMP1VtGgZYRM8UmSKuFkpK9Hyi7mYYRcQZuohTJGVp53ASWPW52BE",
  "key18": "3Jpz1azsnz3WWcHQrc3Vzuk3g8GcLzPz6L8vm3CW8q17UaeefqTnzuD6w3zpy9784FTXYHLUFq926PCitGkBTKe3",
  "key19": "2zZHzYMybupihwR6LM3Hge5vgvGiNDfMJHbhqyMU1uCXFRiKeCUUhpqA4sgzUF2SnB7f6hFyCFU2iMY4KwwQDdbs",
  "key20": "3h4k9X8Ckutzx5QRPLfhb2i3rsmpb2wSdGYnvjDmzKLeCcmvrcmmPZLTmnLuk5bVuYGMWouaNQ9ZC1UUSsdD2ezd",
  "key21": "3nKrLECNtovUBLYUngh4khn7Dg8SFdXeNS9cWpXzsN3cLT5pyxqN7egZsHSr2HEAg15r5mhUoaWXG2htmBH8eJWB",
  "key22": "2KM9dWGUXhR96gKKiziGfvsPFFxe3xVgxfvSZPmmdveE9H6o9NrJhiF7dNf6GfeYeRVL4zg9ANqiJch4mA9N5xwK",
  "key23": "gUB6DGgzux3QfadDGxy7Uj1fLwUkBgWWZAfYN5FbtwJjVGGwd4aZLQueDksassP9qx4rHrSPnEitgzNZwZuaASX",
  "key24": "iwYVP5bRnzukqvLGe5dk8vPQNuSv4EkrnGy47DW6yTF4MuGvvshzMA2GX2vEBiqMo5famtuqfnJz85TvfKbNT8T",
  "key25": "2ujiaA6BAm8WBMwcRXPLTtKan4PBRTDK25bZQhzjRgLP6VDkj3bhkpZyZbPnFrG8L64L5SpRD5tuFWNQxr6n4uUv",
  "key26": "4TDUKr22zDwA9aP5C8rBCRezLt6xtC79Jy9Rkw6EYSvcggaySABRDaSAxaVLqkYZ4Wqns8toRid9uSZG9JczLPqj",
  "key27": "5asMf4s6HtKXf8ZwLriECsEYDhj5HDXsk4R43wQBqagQQnesBsLzCZFqWmfvkhF3pFh7tgY2cTi7HJS4FRqF1pDp",
  "key28": "2nfVTrZVyw9XGtt5VvKH8S7gVmJTcu5y9fGLdiWmoUjb4ZhtnvHUwYfwgJxmvH4Gi2Um7GghpLwJvsv19Y8jgcuG",
  "key29": "scTyMkRTG3KPU5AnTqgvymt93JjYtN7zHphkj1cosS3L59sHCLoQnbVCQfHtrwoV53hbu1a4iB27rAkCtocZS49",
  "key30": "3D1XhNTFjEm4kftRkhpz4f4zS37QFKAwiy8A3MK3hwyuUuTKSgYWAf2qmqC8bi1T27VJK6MGo357MuvuzYmvTUin",
  "key31": "5uQFqcuFnkZF8127VZUSyAHjnx19Bsbgpqb4rkeBbwkv1QaU67m1gJ7fQ8JE9uz7Waewm4yUSTuSmFTFbEyqzLJm",
  "key32": "2odExEvPZGnVCgo4QCnXyAStV2ajPsmJQnndtpFuT6kUTLqWRyodm1V5mo6udU45Eu3B8EARC59vq2rWyh41aNd5",
  "key33": "57pN88qKMTv1cCVkjYAphoEvgg3KjCN9cVmofVCusRD7z71798LGHgNLtoKyPmthUCoUfBhiZmgnuuYC7Se2gpHA",
  "key34": "4695SfMAdHj6z1gAcFDtc6eU4Fvk7i1HQ4EkkkzQ5Uv1xPVskCTaUUfsHBNj3K2dmHjb4RaiQF1Cm2SHemaynQjG",
  "key35": "5AsWgEFJL4KQbeLQ7AJ8WMXL8mDmx7Zm7WBr8QnAdSVzixgQK8VZXHFj3Kn9BMNwNAD1tPfg59wCY2N2BgBeBs92",
  "key36": "5QDv47M8aWiNA2fkLc5xSFRQf9jvGTFicn9t375hHySKT446xRDR5hGS36viBFuy9QmCAAi69BFaVeEJq1uq8Z5K",
  "key37": "3pAvCgJD1ZhxQY1pbRcM2d4ypkWNbbvbkaLS4uFyB4VkUpuczMKxMCneWN2iYeN7No4fxrmRxRR1Dv1Ngrgr1kbQ",
  "key38": "51dVcm98KQZLpZoAZCNSQ3UcA6cRwqX7LM6k93YDhrGaDDfrZsTte77RnsF5gDbCqLVYbJYHVEQCJN26JgLmUnXh",
  "key39": "4SF89Xtmau8xZK195ap12uR3ojuYARSiv5Y4aNZAF1JLhRAsj73eTu3rju8Cwndz5fjnJ1apFEY4zsLevhHAnh3h",
  "key40": "GrwLK4VHqmqCedzrJHfUxxCePuBwGTFu2PrjVySJhS6uhhQgkVK6NhJ5gAXQv6hCCmBWivGM1t5JpYmSUYGwdPt",
  "key41": "4WwKB9XbiBxEzqjeNJ34EUHBdQE3cczkBkrRTLrmo3XhKK5NmSFxEdvs3vh315g6pD7Quqm4sEyp2299BAReCK4K",
  "key42": "4mtbuy5gCUUjpcUq6XCxBPpiZ5mnwcKi7WvC7R8SdCxU6baJZyWNDQHJr8dTa6JA23WhotuHA6BYSPZWQLaeq4rX",
  "key43": "4itKwyrBfTtokN6Tr81sdYWrmgKdSMY5N7CqKwmRC6pMpWCnx3DRmmFPNDKYF831Rj8tDXeG1ttfAt9wNDzYaPKe",
  "key44": "ndpcFFuSL4AruBUpk2bWkaRhiJpBBvbpfZ34L5xF1f5uA15BGz8DQggq1Myrbs5WKEPDtaZMwjX6aB6moSzE8Zx",
  "key45": "3dCBwa7V4zio5zzneLMqkVuWbr7Gy8yBDF1kEJZYzMup9HfD2cz53wENr1LTMR7TsiXkK3vHPetVsH3GEzJEgPpA",
  "key46": "3PCk4iMFvgLkoeQmmh218Qd7nJWZE7KJyDEt7v2Ja59QC8sXRvBKeDas3on75TvYmxkaRgJEaiagkoeT8w8fj2Yg",
  "key47": "SZEqhQeZ5bVvjK7JzUbsyEpy4uoxLpat2qyoYgHRB5BhRB2dR8XBgqySBTFqvJiYptnde4bcAsK7MCYLfqWpEDE",
  "key48": "1HazVrjobecTtF7cU1r67T91xMvmrKpjoLaxBEAgvfWZ3JQbBDtSE3sKWi6JBVkz6fen8vjurYmsxeXFYUwR4vm"
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
