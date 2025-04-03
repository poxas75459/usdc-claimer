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
    "2ZuG9VCycJVtaMk7JjEcA3s6rhnYcahNKEjfK2aZ9dWs4qP9As6AH2JhJ69QbKUZNxo23BZcHCkrHD7qXPMCP3C9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AN4DC5sLRmkL5iUFBNpV3FrFdpQs5YKdbQznQzzeMhNnNZvPBikXZmx1bLf5SwhpW7dbopJHQu4aduQA3d3rKVG",
  "key1": "3p9XmJA8BhPxMMxu6jux7D8vyu4YcYVwFXwGyeAiZeWu5vyUjwfnzAQu1Ridu68xreHgYiWQm6jNZzqNxfisbxFJ",
  "key2": "25ELYWEc37N6VD415sXmLedMRVkXdgiLXuwcdq6Qn8QREVDHdqTyzLUhskgWcmDZw8Xt8vkGeUE4vvku3wrcyF7D",
  "key3": "3NYRhVJ81Vcdoyjrmp19ncmTPxQBkVwonE8uvso3QmCTFmcHsjc8CJgb3xTQyEMT8MgmgtjZsvqB7FxyMZ3qcbBU",
  "key4": "2ZhJaFbuJHdsxXFAT8HRgFsHG24na15NWiY78a5Gq7sjyNNUtSCLPCCWBKjQWuhfPPePqXbJ9sqvimwpn2BztHTx",
  "key5": "4oVAKGpXCbZcfH1pLB1JaHU9MkWNqKwqbqjfDyRkr8ZQfCnTGvydZxjUerio6zsm2vx9BviS9fkH4nzyyUJxCawn",
  "key6": "3ePXgufs8d6ydkzRm4WXCezDdGFADfbSeDBkHkKCkFjfcitEwmXmM6xaBe8pY5D648KCPhAYCLJwi13DXxb529xj",
  "key7": "5Wb9QZnZd19vTvr5eaqt7LAuyNTR2SvtFZNAsbiJDMviwDDw3E9sNdf8rh9etbGoK4WxkZiyFNwpirWP7iBJwLTg",
  "key8": "jJ1mnMEg8VQXKApcocpjphuN49VAk5zK79V2bgUvBf9qF7o3MmDcnudiMf6EXCwyEbiVTXPKaBdwidXwe5LJU4E",
  "key9": "4BaUGHH35wTo6wHfa9yJNMGZjCqefJY2VMqsNbznopSp1riFje9PrDPcU3gyEWxaYhyEstcgeeQRexGmbxAoeu39",
  "key10": "2c6NNhUEarxV68gFoiscNaCWZsbwMfFSitVdACx48UXzVaxh29CLNuSNLBjkZ3GXpwBiscGcrGFuCUNvTVL7Nrod",
  "key11": "3A7zUxt3SooQLK8iuurE4DspA5Cty5mKNtPFj4tHDbXXoTNvNBS5VCxjC94MjbVtxec3khL9BravE7xCs3MErYnG",
  "key12": "2j9c5Ftmht5Yy6YPfohiVbHVmLidKipWRNLwUFUF2G3u3a2DhTC8afivqku7tuYPkGztpS7h9cFuJtaauKd9B6Ki",
  "key13": "5WkqEBv4ebZjzf3rne5btJ1xXnngdTaxbdcMNCADPYpNhozd5EQ61xj3bsa4JqBbrJ3xtuMDMTePtacRYaEYyiRE",
  "key14": "qzLcdBSSrgt4YX99tQzjGxsBfgYK1FAmWbxdHTcvmVacywGxq3wrFM3pgVvbKiRAZL3r9DYYgvtYscQoDBfb1At",
  "key15": "CF24SkRsxLs9pDLdtULGZF3XhTdAKyee3yMmSwDFNwsHJHPyfVHCB4TzcswAcQHMJQFPNkPMZ6zsgf6o4ikZXCU",
  "key16": "4P4X34XvejShTjRtcVYyLv6gBUAjKfxrcB4MBwHHJ6n3EdAZe5fTG3PJFL5Tez6svpFRCuMDRDkNW6aa2E32U7Dc",
  "key17": "3hUANzB39F8VqWWM5yHBA7L4cERGp9uTLWtq35RQLgXiLJK6ZsAQQZ7oHZbuNXDPfE8X9bZ1E5ZpS2iG64xbcVj3",
  "key18": "5DkLcbwGwTNKCfXCMFVu2A2ZaH1waPCWaxQayCsetNP3KuPr94Lz2q1ktHpyBPaXXd7gqC4nRyK6HTsBkVRPLA6w",
  "key19": "xbYJkdF1jdi5FzcayftCSe93tLLVV3cAHvYyDKcCvszxku1enR9xRaRGFBpwDBvaU6qZn8wo1XJUeCK2K2YmogG",
  "key20": "7FFyudpe2ScENG1xyZVfbDCYyEbKXic3ouHg7xP8ok82mRVbde7okFCZaqcfpY9v9kDKxV8jWGEefVtSHQ1KXZD",
  "key21": "4jU88mzySALYWnsmdCt1xsPNsVx6Khn2Q2AdoR7cFTi7yLdbrCNsD7wPHsP1x2c3MDuBQNL6fb4CQAQDKLJYFZCu",
  "key22": "VKNs95QVXHrQx6b8ZcJvAuEcceRaV8iyoFyvq9ZhcZX5mwiQDzHTtswwdwkY7EGS8YcKime5ZPQ9BXkhEECcSkg",
  "key23": "4dAHd91wt6n6XprtLPMacR9RMJtaghVsVK87P3MAE3AwTa64gEzDKaHVA1Xk3VRYJukySDVPQH2EsWKVSHt6iCrq",
  "key24": "aLqWkdJY5mtBXb1iBE1ZNmrduTCXwqWC6m1jUwHJNQ26ZWero53uriYabFE7vm9v8NxCqpa5K2zXaFQHH9ZWYaP",
  "key25": "3cYiPoNr836UtTanfUstx6MvCPZbMVva4q9rQCuk967VS57Sf1yUE1WMzTLunexTXDCdfC8XVL6Ecu4UTCSuYFMd",
  "key26": "58gUtjd4XnxRfTNc7F4datJhV2F8J3xcMQi9ZJYj7csk35dYGAsfDgUYPnxHhYtE29hJgMxZEHqk3Mbj2fgVuDC8",
  "key27": "2A86ozcuJ3fmge4i3yRh4oV7ii2jZcF2w911cmWrMW4Uknpmo3TcrqBJsmjSeFd14jLnQLGuubXCQqaU6UvNUXFk",
  "key28": "KEQb4TW9DCpPcXhzZKERidn226avMPoaiXgCm1fE8W558YPfncBoPtUFPgVxeXY14TzwAp9uesrQLeqYcQpkPJD",
  "key29": "28kiHiMtdZPJoJeb2d397PHbjLNTYCTXLxkcU4YNs4o11ZYM6N5EPaESZVqhdQWEnRK5pBNdiZAivwiMZ7d3yRns",
  "key30": "R3Pwjr4CbfFAamMhuchbAG6j8mLkm2co8WK8NSSxAywqCARF56FZ4BxebwRqwQq1vBqdt9gyTL7a4chENzVxMN9",
  "key31": "47kUJr8z6MBCxXHjTrDsA6f13GqwXBW9YmmbwYtw38FAKE8LvXai4A3WFV3sQT6bTZTGAhBhYZCEnK8kHoLQcNXG",
  "key32": "2dXN4LSSHkhDN8hL5X2iRUMPPLqHLqEN4W9aBu7DdeadWMY2HpGU7aEqLguMZF6ASEWoWfejSKvHbregFgPuPSxU",
  "key33": "LLEz6Vuyb7qe9JtbpuHQFMNQnWehXGXhSf5n3gCDaHfGHuNoCrkRBfKeSPQ3AcRwxeW3qTbCjkn8EJEN9hQYGVa",
  "key34": "66pZ9KRLwYAXgdCVZpFjLipXBT2NTCyeb6LFLhuH4g9VmNPA6t169noM8kniU67aUUeENUBGoL51o7G3ghxoCM2v",
  "key35": "3by9hEX8T4VtKG47LMbDbTbmqCJ4cRgaFPFtDFAZhoEjkSPU6NqTamhmJNGdivtkLmNcuenwZ9o94ZCFH53VzAt3",
  "key36": "k6qdycV9EFzX2V2crasWK9i6Hjng1qQZozoTcfVNNtWjjV9h1wqZXNKMyR27tGNiWgHigoNERa7HduG7zJcGqAt",
  "key37": "2gwmTMFNjctJX9d2KZq7LPyrmEicaXW6KnQzuYWA1Gf5LMJz6seHbygSqhzxw1ShrZBqYgGZkFdssannPwuaRY7P",
  "key38": "HkHo3bZUF7E8n4geRgFgEBo2ZtAfXWTPcLsU6GQJGUiDLK3yoD8LxtiQjXk6QMoyDbT2GdTVLDujPJmRbPXNWb4",
  "key39": "4SPkuj3SS2o9fXtScUr291QKc7kTS2XqM7BfsALVvVj37PNzeFD3t3HuPW9eUu1RVUcGyNvkEFXAqTFxNL7uQWfj",
  "key40": "rVsqag6VzicwVSfMCZAsG7Y2hva4FRbREGyHKmjin7Ntwi3DM3mGR6maxwnPkzNobiRRbzaLU3h5M9wXmFhP1qt"
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
