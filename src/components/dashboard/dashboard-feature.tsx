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
    "iigyLSP4GTbQwnZsBc57cmtMcx3TM9serxg33nVHDC796gqTGsTmmQhsobNj5ZrFwzT8ziwNPjr7vzvoMEZhfPu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZM8Sva54eHGfuBsnZqncx1QKTy3ebLmJHfGrgMv2o6WfP97nPmFFdJ6ce3q4tRbDAsSUxhpsSAepensmFDV2G2k",
  "key1": "kr3bp1Tma5DmT7fuKqgUxDFrKrBxtE1z5ZRsVrn9EsTMKRoLDcpKwDaUbs2S5S1wBhBK1S7fBqKf5ohnqvhjiis",
  "key2": "3KqcKiQSwypVg8K3sxAinhdN8YV8nM7DSsmxadFpvP3DAPDq3MQsGiqTMPKdyXR5getAAfiq7neTmMhS7t5ePh5d",
  "key3": "pYeXn8R7BePFezaxmSKCSp1DNvrnSHTEysCsHnFpM48QidyiJxBqE2zzjxDDrxTMTkk93EjpkNuSBCVSkFHKDMp",
  "key4": "2v7g28gRESTYFVnNtTouv3nzkGpdKt2j3Aw1eVHYESHVgkqzQ3oxBj5ydkLAPHwfNMkY4HsSVKmG88cTwqtW3yN6",
  "key5": "2u8xMshbzPXJCUJsQ3jFMvEMXncMTVPQFvccB9cgHCQks8UAf8bUaA8yafbJbKcerarnzrgb8gvW4ekRv4mNmSR7",
  "key6": "42Qm7gkqCXwcV9ms5RM2Zcrh7ggCRvHzQeKg3txCn6odE3zD8Mmo22qhTxGSnMQXxgmjLeyxn3u9RkNNXmgGZme3",
  "key7": "98QS5e9tHf2A4vPaQNKxRA3dTdVh1roN3dobgmE49nzJvTe6d2WX8GtsiDQTjVzxSbuhMDB1RBMg9YKEx1vnbg7",
  "key8": "129Vokb4M6eSJjV1qTu45XLXY5HsTcdQmWFoUTxLuGfyh8XYEhReSzmgNB67yxK2SCd2udGiSgpzraXNeNUs8ZEg",
  "key9": "2mUmaCh7soVSVf1SEQLwvddg7XL7xRgjbxG2brqztDu1dF7jt2Guw9SF5nNxdzW6SmP7gJeTwLRzNyZsNVvVx7Jy",
  "key10": "4hHVMQZz6kKBDwk2DejHtpMdPZkuTRfWSeZZcUtPdmeSQSo6o6vMmhTXmN2g888X953eCcemQm771mh3VcdutCfq",
  "key11": "wqoJX8bqayaj2wmXWsQ5NarEayhohmqtBTVVBXiwmQXAzDm2wZzMhVPEHzh8EUTrYZXCPSp9Yz6tpkpSmNhAJFk",
  "key12": "3CEzq4VpkibKof33cmsgEWWmZrZtWdsLvJzfFytDLGTKGsTS4iKoGCvDpWjgjktLheibH4UJxicEeGmzKCMBRJRo",
  "key13": "4hYnXFsKmzmgvWCUdSymdUaDXa7reJEo72Fjzw6y5djBuMx1fx5Cv9VEeVkwh3SiNyo7hYoDwPKdheuZjSkszy1U",
  "key14": "3XKszi8Xj1XjxdB8vZjW6UHBxvLMUeh714c62GzC4CWwfN4SceUXqwtBp2frRCwsURbD4buSog5CnP2Ku2PET2dz",
  "key15": "56nzsi9DrvfoLMChHJedRewwEmdvH8YJZhrJLaajQsSUuwW4sSCMgXsgW4FinVvKUmNMA7UaYNt9s2u6GNTSFDHu",
  "key16": "5nGB6V9USCuv1v53JC9YzBie4PSHkgaQqCH5QaPq3XTz84XX2T1rs9M8x7ZUjHHq4c7rFfEGpBc2XxXNXq52Rrev",
  "key17": "2Rf2fWWzTFDEgA3qNTmT8oWM2r5ykr5uTqkksMV4AkCPu17pykEcagxis9cc4mJdkHhpXjXB9R11U6txHharfQFF",
  "key18": "51zd62ZBpJVGpD2WmFtraE4T7368dvbxqBrRN4BVq5Us2P3dHtn2EUS1QNawKtWz1yAzrhrgcDdJMi4zM9xCBgNm",
  "key19": "2PpmRHE5advPXvsSGuBzeajc9kDnJZ6uBbjKVWCQyrCHQt5XeXnsVUG55Lk2x4oQbXqRXDY35qG3u8KeH7owXiyw",
  "key20": "5UPQcJtbvZnnbk4BtdA3GyWhYwQvDDMwf5HC7BKuHcH3zyD7axqeDVVUjobM2ZUPVbu5oUmLbD6eNgMDWdhhGJBt",
  "key21": "5AvofLbmnDSwPQPnEkPbwzPPcmd7ypcGbqTtWqRmmWibTiL8iXBXHz57G4Crq1s3uREBBmQ6KfHwMtBKC7gtvoqL",
  "key22": "3HKMTG1Ut82VtZk7Q1xrVjBniay9gMBrU8zTHqgnC57j5X3jcwqWaHsyS9KiZVuuUaJ1PpJ4skEyg2RTyJDA4XkB",
  "key23": "63T3RzzkwHEu4QbHL5DV5escPkYx6RtNXCmCDX1LfJ4apykcTQJvdvQRKccHSq5C8zqFhUtDxR658gcmJBuzSEn",
  "key24": "LW2HisoyU2FkoHfNiHbcHEG4bVRGLr3T6NofLQdPQ8ya9CvJazPwQofunPYcdtQ289u2SsiEGUuMSUTknzvyWEE",
  "key25": "KHrK8pQTDXPHL28pZXU4go6YpUrut3u4WhUjwxX53Pxci4tDESMKRcT8DjWonZZ2x6aUp8Q4aaUi5w6BvgJmqij",
  "key26": "u57qZtUngFmt4HYcfL1CS6eyaTEv3zyA2Jzbejngb9SWWMVJeNKVbzmkTgRtNTNYKPAj7q1nBNcCPbBN3AiLZN5",
  "key27": "3B8Q5MHk9Fwn52ebkErZnahcreTvoAeMBZNFib5HztTdaxBhuj1FPLp8xLq1vWcm8heiiRzRawbxq67NL8TkMDcP",
  "key28": "49dEXmwR59Hbnurv87upezSLDTQhYEmY71UAM2NtyBiX3na4UXv1AEP1PY3eKjRMhpbkDC5KniyBqGWnnZXtA3yZ",
  "key29": "3fiMozHE9xgrUnuox17gxNzn2WKEbNtFqDZvLY6J8kjQFtfuHFgfsMrPW7isjCGK8XyipkJ41ur5WsibwSno3g2j",
  "key30": "3wWwAn1oA1Yp5NjJBRH8ADQwtTfou7fYWGgpFGxcWMhDadQZaAr68UzdaXQobLTzkqJ29BYfVNzUZmMHLhrvHSKv",
  "key31": "41xrZJ96Bar5HVSkarjcswVHijP2bZQNVqdcr33MJeJp8qeuXTPVnVhbvLobXUjQFWcQM9KDFMzeK5oKFXAmP8Y",
  "key32": "3EhTDon8p2Bf9qHVXwUKjVE7fU2xPfZKMdwv4jCDAFUiyTGC4QSLm9Q8joUPrer4QC2k3npMycdd7pBoBHtior7r",
  "key33": "4Cf9ZR77TXavdvPS5DsDCzieT8DS69qSx2UvdExviUYtvHry8ic5eZ6hmZFV9oZHx8HKUJWy7XqVdXKesR1c5Vpy",
  "key34": "63mhkAp3yBiS1q2xhPPLtTDXFHysbxj5QANYKTgfW6GujgRP8hXSKqzWJMZxqC1NG3aNQgmJWiRMZfYS2PzGzqHC",
  "key35": "4m7xeD7BaPkFqU5ht6JVkHw68bArjuo8zwKd1JBiBZFGcGD5Qqeq2GtDJ4QJ8aizBhwNMVPrkR37m6H57Hw3DMfM",
  "key36": "H31nPZZSi31btxnCMkf9PK4u3Y4EW4mXnnkfrLxXTbozxepiUuz2tZUtdd6sibL4rBQVVnrbNWBBMccmf1V7zwE",
  "key37": "4qg1MkAjKE1LSxDiUv2BPMKtMmTgP7pYAwzfkvvQLUZyoauBaCsPXrFmKSpPiwbnabDmtzNAdLLk7aWxsbeo2g4W",
  "key38": "9W5tK6BBW2xzg6mnesBQSXUS9VPTv2gfc9C6fWEVT5oM6w3AZ854NgVt9RDHwng6mCQSbY53eSPk25zQXmh2nZL",
  "key39": "56MjJzmMmyUveWs2wLVMxmcyyYh1vajcfLQVfFxEeUuSpFNpA6tDmqfzR6dXZpKrtGksrBgmiJQEQV3GaWJD8aDL",
  "key40": "WhkipLx13PZcuzDMTQMpMc8fxnfMCf43iMxC6EkPyQeJ83EBBV63L3BCQiaNGLBzMfLtsiwGcBZxDEE3pBRy2J2",
  "key41": "2HokkBgydMioC2pKyknHktHPRsjPbb4zgUnpPUVM47TmAoGd1JavvnCnnwtnsmAAm9DW8NouPkP4NifLHoTsNzcB",
  "key42": "4rNC18PQcYN21532CUrXHnLLfqevmas7p8f8zzLzACPVV4XQF7vfvJrZdddqggNUg1tkaBFuKV7ouVbp7hCMgsw5",
  "key43": "2A6F7bm9bgBVrgD3BWzWr7p9EXXH7kg4tAvbVjNKsmre69K2EgauKHvDttZanNwJ5HYEA19Vzv6hzUZRxH6ZSYmb",
  "key44": "3iMZfXfdXhXGfffnR5sZb3hvfLKkmn2a92UFca3cApkuDtCa65wwMuuke1NwWYV4SUvBYFQNMbsXbeVf7VDXdSeb",
  "key45": "24Wcpgy5Gbemk5sbjqBtzZwhZe1h9dyRZ2QLZZmW9KaYQ3TCa3UBxwH5ao5F9peCUvHtB4pA5MYnMG12YdsHVrUU",
  "key46": "FCWtn4yck3r65ovK3zmH4A1ktn3EjCD1EmEFqicDceg98YcMEm7VpNavztQVGEBdPMofsjJ7cVfrug2KfnBeEXR"
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
