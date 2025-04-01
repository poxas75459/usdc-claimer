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
    "2zNDGoyeMCTYeabQVowLqMHD7hcWDFdwenCxM3WFmFDftfG9y5CNjM1E2DEMrMpzjen1hLuZLV3NQJgpm8mEoTin"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MvZKzjcjZ3fjTmdx2mkU5fgo6EX2fhhZ7wVqbuAFDWqqcn63Ad2GdS9yQZ2hpbDiQezgEN2iF7Ri2KBuoeLx3yz",
  "key1": "3vYAgzQxsWo3269mT5wKDrHRgT5pqberJkYEYv5sUBhkUM57xGsNCZLzgtpA9DcF5rKcMeuo4B1SQiwdjsXHnWRZ",
  "key2": "4ZQJpJEmfwGmtvsUbU3TYYdhZB8NtoChs1v5uaX3Qp7jNGEubMHEQnrasBQn3c3Lzj4C5F9QcrxDXpoEsssTqrL6",
  "key3": "4JaJR3f7H88Hjg5Hvw7Ymi7sfXbbfC1Y8FassD29qC4Srydxx4Zs3WhTfi2v9k6dXY2jiCcpEvF7BkgsEP6HALqN",
  "key4": "2GJQXyzpDGkkbSHuWSozGhxQsU17HupY5aSSfWgUd3gDmQjS2vaH2vwVyqqdwYow4n55Qg6q2UUAasBhTA3SJtNt",
  "key5": "3WQwNbYxoZCuxVmFx2DXaRncPLhCgBjeDFV3fttR6A1qGKqzZmmm26ymiUFxJ2KxS3LqL25Y6oea3RoTUbGtusmC",
  "key6": "4UJZHrQhaxUZfq45QBZD99rtnDaSbdY9Y1j9PfRKNLMmN6VFTvaxNfAYmEMpWNahPMim2dDX6RY9eFZhgbjkGgAR",
  "key7": "xo9kuGedyiZTRksnWcsDWhMv1m8HRQtopsX6mLf3hDC9V71krAcg5erxe5xCWecFyGzB8Lqd2HFQ1ASr1vmU8RK",
  "key8": "4izcvoTU3bbQ2VxHtnfuPUUhwQySJth1VNRfPzXVECduqWvvrWvjeTEUpv8DfeH71XSPqChNvM1P53i1mgPzGCAa",
  "key9": "46CZqFhTjoNFLiF3Qk7kE92RSigJXz9qX5wnkniiZanQ1LybsmQg1bGVtv35gyd4ePQ4YAou4PB7zfTCC9bEarky",
  "key10": "2DwcdU2zEBRTvTJUpWzETakEnEQbTZd8fu8rdjZqUQDs4JbLqiBG6ytiNDCYSaHV1EZbxjkANwWY21YMaZYHx9zt",
  "key11": "4uuspkJZ2z1YbCWQ1KMnoYQz41ZWGgfgkzkwawfkSLoAKWbQMfFZvfW1CnqbMyFT4as9stcaxdPZJ6kN2uvjfRHk",
  "key12": "298Egrqa1UCwP3xubL4HkN5sS7xBTjZDhYNf3M6HBR5RQCiTssKG7czAo3dcKYjGiTFip3aRDjuAzgXtQtpLGxTN",
  "key13": "5PkSd6YUhJ47VTU4rtJzFbTKiQX1i5SVnpshjFBR3yu7FRJmHHr7eV2Xnip8mXYsAWpQcz5Nph6Z7FKuJae3vZDi",
  "key14": "RKxxb1wu7UbBCrzwGQyFA4uk3nDEX6dpkL3oBeB8pYtSNRMJTU9ekNPsJQfbqSBYUtUoUP6wnSbf3okrnVqez49",
  "key15": "58x1etn8ryaxW4dy4B39d6pPEP4iZbJ1geGRu6yoQjdHXnki1jEojz729E2kXdb9VQuX3PkhVBA5574aoBK8DHJ8",
  "key16": "2Un8GJtfwKFTDiVEEJtoRhw3tEfMXVe8eUjH5dD7dTsUXaL6mvhAjjCo4qpQWd3Kvr6xsrVwdfY1WR6ZTcuZFYsq",
  "key17": "4ePLi3kckP6KZzFAtKpHhFBQui3Ah3gLyTAyLU71ZRmBtHTuHfnryxUtG3SNWKZktPT9bwgyuYuJxRsP3k32eh58",
  "key18": "q1eXcuFsZ6hAEYChaZtYcXxbEbDZNjzcdaNSwjZ6HnmFZwcPp9LAAvcJcuu1u8dsttxNSGZDZRHUB2pPAA6SCyh",
  "key19": "3LPCdqGPCm17UFUdMYyrMofT8Cs9NV7EeurpurcvLXx8vRM7bUWszgcW6uj8k2bafDNRZJ1315Q6jR8vGDPsxQbv",
  "key20": "ukisn6roV9nQ6oo62kE3z2o14Ra9JsB85vVqdTxgtdbPGL56DpMeVKnuka75eredMLmCfuGqfb1BU85cjton4tk",
  "key21": "4oFWDdJhGAiLmXGRqxDBkDGcnT7jCE1pWKSsdjnTH1kvqrhXMCCDcexQULcQFQD4x7MxACDVHRQRsRVsa7zU77mj",
  "key22": "5asjewt55dikfgwpNpU3okBEdhHX3NrSskwvCuoCd8fXVpfXd8ZyB9LjuyeRc2694sQ9Yd4hGJT3bCFmt4Jkaxbe",
  "key23": "3kg5erQdwKmdrffZYYNgBvMcX8DdczkW6XRs5eo88b72e2hoS3Qvb96Lan6JPDjpp7qiHBgm5F5FNCC8ZHJoYHuQ",
  "key24": "U4sgiKeWdMg92QvJThJhhCrLJxnZfbWsbDyTgbCHh8AUgThjXuvorCETMfz93zoKdAffc4o4jUiLCwHB7fYnRmN",
  "key25": "2oTcVrMjxBWk8WNHrF7setbuqbsMHaxxRVK8zFxMeSoHBA5K2C4s7wnoStZJz5DZR16zywvDApVgoKBjSCZk7t17",
  "key26": "5cs7gCFT8pwX3kFqZNzjmocbSRN2FG3qt8EDP9WAWQwKb2HUaq31NHP4LJQwMBM4Sbjysoe4J19MoTrSs7kcWSMC",
  "key27": "3rfqvjz2AFCdrQqRi2DYvQ46Vuw8hxQDBPJRkS72YBsirLuVf8fEc9vyqNt2ioazBYHUJGo62GnUhBG735A9wzZW",
  "key28": "2u4hCyVAK94yCTRgsp8TEdg2dQ58uHt3xbSPxHpZPKqmdsMEevvuZQwGdWBGSpQ58c6uZiHbp6b9gxEpcPRWnP8D",
  "key29": "5mHVr7jnk8efjCXemVSTPHjbzNKqWNAmbZ9EbCpgJ8iKAVftNBUhBK1BBLXVXHmTbfYKNGHAX1jiaaPpHM9UY9Ee",
  "key30": "5nKGmjmqEzoYKTX5tYmafSD1DCxLuh53PuLktgtWQ6epx9XeiQTzHGpCPT35nSav5sm3ijM1yUMMVWiSuE9q2K46",
  "key31": "2dcv3pBzY2F4TsDv9Qrb1ySH8MAN2k83baHueC3N7WV82df3Ue6Y1AH73Pdxjsoh5VXUuZtCE51H14jvwjSrjXFT",
  "key32": "4o1QA12dRMifkU8RtjWU4FvWjKcfGWsxjGLTYZGi3KuKLYfNjREHa64QxAfc72fU9PuCwHCTx6n5FcdDtDF2NXFr",
  "key33": "3VAtyR9egBS4eHdBKanTSsDobW2vz7TNux1pvykTYpN4hG7d3tSPiegJKmkpCpEpQiUKfi8Jdrc2Ay5rihx37vXS",
  "key34": "5q6TDtzeAomRJJ9JEanX8vaHR5TDxFkLwRabhBt1b6Ef87QMsEWFsUbs5T1tjnFZiNC6HY1M1eVUeV949KsXYxnb",
  "key35": "3s8fR9dFHJRXQEsAQV6wFZNTG71oPTs9wTpbGG4YFfoap4ZcwBMBTFAqsU4qHpvFw7xRRPHzkPWpfEYeyq8Q26ny",
  "key36": "5qToxgnjsmsBmydVkie74WSWuRzTTMM3ad7fWp87wDZyLcFfChEEfwJqDwc9wY9TXWLuEFo4KmFTDBqPvbjf1pgk",
  "key37": "pbG23hsbBggwfagAmSDcyLA4ujumsz1ow2ZyKtnuWBvyDyRhCxwTFDvwk9V9AhV6GQCEqtPhgWXmx5w2kyJ9hcQ",
  "key38": "2hqcRTgqH9Bg6VzkFfv6aKPLTbcG2xZiPFZkBviCsx4zvjisdJCSgSrrRL8egfzpeCinqHnWFq3vXsi3NSxQaGPo",
  "key39": "2FCpKCygXdq8HFbPJVoTVxg5qWUxq6MJj4ZALR2LEcWFdJ1nBns4dSBZKS4VkWPNLhYZeXSCsEEz94K1on75bRmB",
  "key40": "5dabWeqRSbdfqUbDfyxsZdkbv5PcomEeZiBFXv4zfJdwNpBQTWPnfnwMMWRxByivxSxXpRRjU9NTK7m8hZzXbZgM",
  "key41": "3JEwb51hMwUKBvXsyM5mvyJMi8d6q4XapTPSsqfzPmqVJh4pjAVbLaJ7k5gAtPFpCDN4UFDUAEFRGbQbXidQdXdL",
  "key42": "45oB6QCTQRhA2Hjnv9paXJuEFHMk1CwBENaYKZG41daKecnqWkP3ELDoHZeaWvEDTp15aqXePB1VBTPSQ5uchQWP",
  "key43": "5GqYrR1BtQwHNEc2nEPX3LQxkQoX5VRzRYLBHMMQFTPaMWNU1Q5AbhJE51tLZZz3d8h8EkDgi6rKk4AyKqLnXVco",
  "key44": "5BvNNFnE5wRNumXpyQHbuJzZxgoy9w37bQ73nwihwhEjXUFUCZvMxBEain3zGWcoLWyFYyEWPWuYJ6393PZqHaJ4",
  "key45": "6ZxbWbSvSbV6JKL6rM5EYCVyjwuNvdhatjgJCwG3XMsNE9rnkr3s125txv31ZJ4YU3meNWAfuRVKPG2GhY6G3dU",
  "key46": "4TUDYvY1FiYmXG8tPyq4x6qk1sXeABznk72Ax216mAVaYQTPBaTfPED6XTwPjJuwsdmr9aGSGgpoorCNx3WFBeiy"
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
