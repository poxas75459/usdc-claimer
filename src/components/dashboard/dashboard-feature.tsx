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
    "52Q6S5nHHxUCRE5AjUu7wd1AQrqnkzDzkGvTAd5tAeivt9b9AeCw4Q4sjLSJWgvzXmsmKKvCyzrTMf8go44KC8Qr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JUhcUbwzF5TfQK8kUPuFKCZaMN7AWdFBqdaaRfin2GQeMjx8CfR9usQnk3SZP3jsrHSeE2U6CGq8zfYhfKry7Mt",
  "key1": "578TvcHpNTURtoweiJwYBgC3JrV718WjH25Q5ctpuF8XvZm6pCdYPVUqiZy6PhEZU6KiYoNgmhkw9MDjbASikJ7A",
  "key2": "3kktQw5SimQYmoZPm6KkFi9fLwE5LcwXahnYtv2Jbas615qynFnVEMmmH3KjHwmmLyaJX5LigXMWR489eDNJXnci",
  "key3": "3HBjM3TvUnH4Ux4eKXGdPEZXnw5gM4TAH3otLjtT9pnrSK5CPjmu4VU1cZqvyKBgvHfM8dmouEFMidpWwU7pnNb2",
  "key4": "5nCm2zePc2j2wQmZtfGjGVqjugP5G5g7fENrxAHDQtxy4EUNUscQNT6nSGdDRP1xwFYYksgyfahjBvZRURr2jBkm",
  "key5": "UfyzNTNR14PLJeUn6TQB3ne7Rdvgt5cBGHirA5QraPFiUZH4c3FXnpbTvSpiRXYDmHwpBeQCrZXJ1mVzwB364GM",
  "key6": "3UCtGyNEbEgoa1MEv1rktYczLeu16aTnaKcGqdvueLDiBcDgq1VC9njdNbh2fKNAbHUzNUdkTzgL2Axqp1q8qcAE",
  "key7": "3HwT3yWgSyDYVhq2Bc4D74zR6VjZVD92qJw1GtN3dheyaY5iTFcRhNgwgr923h9EvP2ZutmwDak8f7kgT2xBY1D4",
  "key8": "4yUZjjVJ83jfzzTf8gkuLT8nzvZUqHsT6mKAm6xc4eM42HxDs8oQFk2keoyAHw3gxpXevB3BdWgysXStM2ANvM5q",
  "key9": "3PgAGcdJZmGZawZ98tw2Vkzf86U8Lw7xaL4rN1oPHrm7ZPmzVERsGrHoczM2FSRhPGbVYs3ubRXMCAPipzvmNitC",
  "key10": "4qQ2nJfvr1U1D8vVJT43YQ8By6swVHiViA65pWPEfuFYWpP42boRVV7iCSB5HgX7raXZ7XY76EHUaMsmfNwvUfET",
  "key11": "6458yEFX5DSkL3D8kEBL7viQFL1An6mjz5f9SE7SyrJ5QgJk5DWmiQ9eJxoEEXv9ZgM6Vuni91WyzGAq9uGoSAJL",
  "key12": "5JAESNR4m5iesNBnXe6EwfzT37B4HToyTJJGRKSrTcmBb4JZGMAzExbpu3JsWv94QiduiP3pmnpCufjdQYXtkx74",
  "key13": "48spogsrmkkuoQjDffnNbjTZvXSd5qSQ2eKUjVAeCLVFGm3KqF3K1ky5rD4cvQNS9kgw2x91qT2RMMn5NcZ6Etfp",
  "key14": "3CCGuL1PzU8L2dkGF3wfHRNR7mjHGSLFRjezwbuSGLefoTXwCBPsCjTwXWWfQWPRKMrVoVAa37hpbNxbp7Si1mxh",
  "key15": "3iu72fgVJ1dZqEiLHr7Nru3VuoU34Cq6f3iRhQfUokc6yhLiis7MJTxQ5QdYRSBQedRuMFgb2gEWiddqcu8XSKFP",
  "key16": "38CvWFoppV1W1mjxYYVauh5P6qGNG7dfJvoXyGgFdMZ1hwnRRgKTFsFeigFK7uXSqHxSp4vrJK3Nhd4EfNmB1BtF",
  "key17": "4iJPVEAWxm62Qx3XRJVMv1Wu5ydSx7c8w2TzNcDxufkifDBccMU7XWDMQX7e8KSYGFs1Uy6bsVHCBjuhQ6HFLZB6",
  "key18": "2MawNLDi81c36fD4RAXK7RBY1FJH7Z9wUT61wxiYUVwrmV7pEpHpEBWQFTxPRGTj67nshtzR2ijrN4BSRptJSpNw",
  "key19": "2Wf8LKJCUeBS6wVqJL7fBa1BmY9VMheRsPoLeGrHK1d5aZ7Hs5FSXL2sL4d2WxCcRuDcxX6x5wm5dQpyLr1KRWiN",
  "key20": "cjeAMaQWLWePMe9QnLfZrbJvTirmceh1s9ZPTQ3xVEB9yBuNDZ6iQR1uAtFtevtGsNu4ZYQ4oE6za9Me8v1Fz3T",
  "key21": "3F1ShikXPAS4PaCnMy53sd3edD8frV6QXHdBivrQn3gGig3F2rCxGqUpAyEyhQZBBTDxrUs49mnryciQuvAh7FjA",
  "key22": "2vwMrRBxurhfNd4Tiiu9g7yE9QTqYyrsDAebdTpENxvirQ3dY8q1RfYTtC3sQxCVxez9Rej9CngryeUvmuQT49Ud",
  "key23": "Yey71GSGeawq7GBBuPtZvvF4UmsEa1wXfm6WU2HmPehfVVEXhYx9wEXD4gyEwMtELENxUEZKTzZ2fh8Rib1KCzA",
  "key24": "4Kwdn7j52rosCUFPPAhsMA7CFXP7tMcpq8fnHKYp7jTSU8Mfnybu13dK8B4W6AorRY89NBavSZwRc5MdgxP1DNUi",
  "key25": "3XEVxJvv7GyP5g2Fe3cvheWvSkwcgu7FEFEdErXVJKkDRi77wjRtBDn6SfUaXNoZzCF6FkkFd7o4yDvJq5c87gh3",
  "key26": "35bY2rT7Mbrshu44jVHssYqJAK5eQdjAaAzSSiKn5JdCr9Rhjg11Le6aR1wnZoLUzytiSMsMWD4DA2NB5249t8ia",
  "key27": "3wiyUuittYGkqgURpxRkVoh7iuq8ViHyvxQXt84VBrBZP3xYAXwkbfQWDQjjMHKSqUKhwzQ4yqHRhtHomJGWuTuE",
  "key28": "5N5hd54jweewnTFAMRV6285QpNbPyuzne6be42NHvSmvYTbmmmcJR7FR1mupNv4itso7jpdbV9rrRXXTUWKCGjxi",
  "key29": "62fC175Btk1c9WfrgtwnSpyPKQsnpCbD4wcc6k4igyrFsctTjscEgfHCCb5X9WDoeLehH46CFAMYPmuYvpFWvTPp",
  "key30": "bAoMN2ieUbxdrNGX58BL3V5gzrpgmqNRD26DcBSJcbySYdniEc9hhxLjNLRtWRQQxTaWaJdS7F3BQvcNgJv4TGd",
  "key31": "2KkRKugiAfL415ZuXMNSHeCGv2MNkg5p7VqNWxCX78VK5g5d1ejnPCCsG3rrVhXkMp4BuzXXLo2iP1ghx3fvZEN5",
  "key32": "f52jGWYgx3eX7wq43KxVYDga4FwjKaB4CUKptq2xCx5k3cJWit9hYyogKEucmSXZskARc4BdQtTHXvHzoDVoJp4",
  "key33": "2DZhQ6m7AVZGdLD3k5ygztqgF8EdpwzzPXRrYaU1h9EXKwaAiDpi3kPVioob21Kr8LYSHCnrZtovbEyKe1X6E5G3",
  "key34": "256UzwckXPRncSkrKw32w34yZVug4TBVjnQcnXVhoaEHTgCFt3xjK8hy7TgkdqEDUQ1bRvaXaAATDBDJMnJDcKRX",
  "key35": "2jNhot7a6X1Det7danrepW3xZDoqiBxqeGubq3Bp6NJ3dK5yJ2Z1RP4iMepHgF2mcXMDB6QqM2CDFwcoLuFkSKTE",
  "key36": "3JM78LWWAN5T7JZ1tgcby9UAtmGdUzgqnSakbe6xVYnnunWbE23YsxkuF9kjNn8YxrcrrvmQkjMdAA62TDYrUWPe",
  "key37": "2qTkV2Ar6fGxGqmnvauLWNmMboxKdyAS3injNgfrjhiV4bhpET4kyZUGYrUgPo958UX4aUcwFHVXrSAU9KXBnbE8",
  "key38": "4rMZpyejhQEFwammGm95zUFREktfmRA4Nz2CtNdvCzzKPjavw4Tua8eRAQHbHEAQoHiER3EUKeV1GXu3hYzodgTy"
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
