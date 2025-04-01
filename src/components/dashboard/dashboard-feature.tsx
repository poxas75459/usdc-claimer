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
    "ah9ekF6TrdzRgBr7NmHAgodAaayQ3eDgwoJp8K2BctEECGWnktGJSgzurgczeriEhS9Lc1ga4qCnB3SF2Hc35nx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y2h2vyaq313dw1fFcEXWvDSruLgyU9sgKKb3MwwucFw69cJSEydTYxA7Gzpa556D1XEUSM8rHoUKdUy31oen12p",
  "key1": "1nHwgrnFqaoQRE8XyYq7P2dYN2zt3nJwxXf5hHqABU1Ut1j6k2D2dwkMH8vvCkwsEN9bgVdhWXR9EpbkSzFeHXT",
  "key2": "5QpzbXhvYmNSccrsnBGGuJSWCVx2WRGd6VM5w2MfbhPqkiPK3RwPGy73K58F7An2GfLgqEkP8Zsf8L9sgQY8NDiG",
  "key3": "4Zuf2zzcfY1NL56ND7KaLfwnKjDw8uUDiYjsBhzfrFmzFJ8s3NgoFbi1V6APhu6VMxngERMvVvBUukgWcAzxD5FN",
  "key4": "qpJtBY58BrybkiXjyXxwZRbkTiJFdn64Vg6QsSaYirBCi2ut72uduroPddM6diyQQgZ6zACCDBVWZW3dMaCZyQ9",
  "key5": "3EVc7N3uVCGhRaEZ6nMMNC6WwHfBzsebgzq2ahnoLMe2gHLPr9SPebZWrcCpNfvfQWypkdwkWGBGyGhJtKQVJ1X9",
  "key6": "67a5QAHa8mgiGmpFQjaWPimdLMrKZUeL3SSZLF9n9kLX3UhF2fiqZhimaLfGGRkcBHZPvusASYLDDJDNsKsPBY6Y",
  "key7": "Wxm6cSDoDgVxNnVh3A4NzDmXLmQxSRLbqKSWGdcgsX8x4EXUQ67Vpg1gmFuUKBnjhWzXZfuxR9DwGi7vejpPQxb",
  "key8": "4BX8b763kpffdv7mLWy5dQxBXY23PFpdjEFteYUzRg51V9XqEiuZJYGi3t3VAVVcVYhJUg7K6cXU29wNce7qoTku",
  "key9": "5mrBN8Avyhz9XWe1EoMXo4Ki6bpej3tsU1kaH2zWoAT9JtLqwdEecs4moPPKTBbxxRrTPNq4imtxPoPkZSeCRNbV",
  "key10": "2PirPYzbUBxvZ8LwDRGpnxbMzof3KHDuH2hbF2kDT3VhKJRkjQswgwFkEurUDVm9Njd75ARhGjRNian2pKQb6PAi",
  "key11": "65hfQ1i8uMu8kx9eRoM1uDJj7n9j9djQBzcBc6VZCJ5NPxjcpK3uHcjyaKsgzXNSm4Ks7xyQFN1cdwuibhgRUqKQ",
  "key12": "5QwR2UGcuFmD6fTxncJF3xpZtuEqkaSsy6W27MXkSapRVqsx54EZGda4DGZAHxgTjoXzPVzMaetvCe7Lt2y1Ca3a",
  "key13": "5FyGgfYn5qJPFSYTxFsp24oqkja3fE8p5F7R4mNAVELYLdXft7SBRgXVDKsmTyR5uhvEBf9SPb1Qt64g1CKzVww9",
  "key14": "5XrRJnCXLCJmJ8xXYuAU7ufCyG5vrkeovCNqq3zjQ3xCGgk2V9pF5G1SY321a8a7h4n5fpxxNvAZ1Pce4maVSP3g",
  "key15": "kFfgBRHg2XwNCtBCpRVfHxuBVSK4pGtPskroRtdPJ1R93mYVBJLyL3bWbwywyZwjqnh8bummvvm4sV1RVfV4pEz",
  "key16": "23q1NwFgkG2CULGaPHL3ffW7FjR17obkTYE25r8RjhyNxAvzmp48znzGyowEd5GeGJZzgykaqtv8io3Ves5kaUfx",
  "key17": "Nr5k3WVMxQbYLwidg5zfGb529RMF4FWzKyZ2d9oebJGx2eBHW6bTNPGiShf9xyX9vmR4NweFq7yCD1FsiBRsWr6",
  "key18": "2nRznae9qvMoh8gBEa4yKTPxFg47yftD1XsxKxSzgrU5FH3fiTKsQW1PstX6fS47WMk3CLaT7Hfk34AsWyEoFfHf",
  "key19": "2MgbJ78rDFcutK3smbzcadAGXpoyBZt4uvUiApVFwKPJ9yJDyt7A2AE8x42PMxDrH1KQ1PTVNwdKxvy5TzhQBQ8T",
  "key20": "3Ru19jimPgKH99SYYVdLDuQMnbukC6GNZRTrxg1H9G6U7mNmmGth8AwhCejQNB4AdsAYfDynqgRgXMNLE8Tc5enN",
  "key21": "2nTp8bVs7VRouLCSvfnEhtdLnG9kcyBR1BzvNxFSWgN79gwn5vP4sNeJH28B65JLwSy9kv8kVgFNYEHLRVTkPPk2",
  "key22": "5dRvWrKCCKQ73vVR5ztxumgLWn3fxpTe9zHuddZqxLMA5ajS4PhbkFy9qVfT1YzJfDYuRkWEYpyiTfXKBvkptRuZ",
  "key23": "5fWcrtR4dDdCebJnLgB6vxbiRHWU7Fu7o5QRf64n1L9MYeVP2Ahp8ddWfnB4AtiWHwbWcQxBPVuYDyxizNLW8Uda",
  "key24": "2APDQLLviajGAbKKDXN18r2NrDdKwdGKbqPN84vq9hDWv3oz6BuyqZm7ouMghJ5JLuhivYK3tDtRDWccNpkJd1S5",
  "key25": "4CcmBbaVLwNRc5CbFkFgWtTeLnRR4EfWZN1Te3Uedh3ayevtJLHvkKNkXM7s3DeoeDzdqKM85orciSmEXzZmMfAc",
  "key26": "22StZe23JWTB33ANci5gAdDcsnYJdo59dRjtbDYVy67gXDWbcTTcZ7ib1AsGKpPAC7PcW8TTfKGvqAdVYLgDurzd",
  "key27": "N16VRbknhQvRVuCFxxF8DvMRt8yV1y3zQf8JDHGaTXdLjFNqTvKzYxStXeNQRy4y6qv5qo5td93XkPY3igTLAwx",
  "key28": "5dLUddX61FheD7yGcid8HYvGdqj17Y3DrBCQCC7yZr1na7d4N1yzvMmD12qwfUwxuw91qoejZ7svyQiYxHpo7ygZ",
  "key29": "2WiT7uuwJNocqbjAxGaQemJKdT3rX2AoZsq1RMZcY45gTabTZD9i7zKkCMKDackhrCCFizWp8MEfjAP1XZb8eC1b",
  "key30": "Mveg6ZRMZSiSqTNGKzaiei7fTGsKGvB5pBMwoLHVSot7HfFfC2br5UuEUeHE3d2SUNrygNtCdp9WKngyRYpnxvE",
  "key31": "5jAa9Yvz6ZDPXQAywZxw5uocxYuMqfYKfJr3hbznSfhvGqDQwdmHancTrpFqTdDVLL3RELtLnNYtsTaR4mUMyenR",
  "key32": "3qFP6a6jkotfUxmgHVzW8oXh6Lkc8kVHkxvkkd5CineG5EXvptvAJTopXvchiRxqtcPr8QTb4gAbHTrGQL7jBM3u",
  "key33": "3nrXLbBbTunU8yoqk9rmgx8hsHdHYNMkax1ZsLw9xHe4afANXFX3oX6yMoMkiPJA4QidUp2nh39mRUCYusfEPdVL",
  "key34": "2SWbaf7esvFd61ESPUsLkS1NqXTkaTwdWbeWpbG1d9e37N8tDJ1XetQkvhQ6rkx1n68d1ead25tqJiEvvxa8Ftvj",
  "key35": "62ASFhjeRzMbaKQnWNPs1awSf2TsFwMUCWhMrvNbjBdxZJ93MJQXDYYpWp3otc99fQ1AHfL6HGtqvuh5ht4AwMYr",
  "key36": "5Rbvd3S4aZJy64PxkB6jEog2kCYp51YhF7qvbRRnyU5iVnUTDU539SJTmVCJBpSr7KdBS9RBKeFCJTX7DEDgwYZY",
  "key37": "5A4EzzmWfXALdMcRgBNXei6W8pcRWscXBrDfUeTwHTwA3Lv6j5GKRVEw8h25g8SuCcoGcm4BYmdeMumxAMtaT3ak",
  "key38": "63iAHv1BjQLb9YWgq8mu7PApzVABcc9eY3BsvhjgDixcXerJqBGtx2DdcoBrECweqoQhYTQPtuy7d2ZiCE61d6Cj",
  "key39": "26QknfnWMRcufou1uY2Be8Kby4yc4HCyj6LBQh77xqztRrTP4BswV7XqhqWz31eNEP8UZtAWeZMfeDAYVy1XzkWh",
  "key40": "46tgLVyeqWSo9gzJTPzR7Mi5NkW7tPoJGqAzVEXuxc32zk5G4h8kSFSoc3Uf2oPhC2ToB74b2B8JrYj3aLWzyw6a",
  "key41": "2KVycSr6ouj6cuDyt8ZEgMsVLM8r9E4vQnYokty7vknSsSigZqNjbdEb6qJfFQHnPZYRj624P1Y29DjhDs2gSvaz",
  "key42": "5BMRkYXzJ37AMKrzCXf6eLYtW79UYH3c9D6w9FxiJYMKQkPbek53B2XpSeN8yjz5x97uCVSbAMgE4ZFzq6Yecsk5",
  "key43": "2Vk9e37ycXgHYyZkxxZ98AMdeKZJu8MAheikTA8GBKfZryybAHRGZ3QLyoKbZ5ve57cBjAFwtHMuXS6EGjNZSFM3",
  "key44": "22tkYxgWN4WZzMfao8PFLZ6Eotb23xVYVshzSDm5JiktDXsFNxnAXx4jtCd3npcotMGzEEoBZbcfQKU6TDzU9t5Y",
  "key45": "39Y12636ohbT9SABm74bMMUMjhJonSA8HVmdfc3dBcr646w4tPzs5LJ5UfwmAL5pNJTLbhXFWinDkepDn1o8tgdi",
  "key46": "43wwGNTSr8NvamTuX2k4J2bavjwNFCETRgDu2V7zZfgJN9yxctpmCcFAXhqefe1aMHy34jR4qc26k4EQ2PFj9Wzz"
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
