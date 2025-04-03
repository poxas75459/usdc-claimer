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
    "5wFRDyMuYaZQcCez8xpHywsnFJusn7tZgJYfD9oh28LDpxAF1wS3pST8X4psJxTZ3xBLaKUe4j7RwzzZcSS2T6Ma"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KhUiPnUxtv2RSJ7UBZznNoMc3WzjNeJNjSybgSS2ditHhfrpeaP2d8FQERwwQKBGBF5f4u15nNenx4zUBcio1k3",
  "key1": "2ybddYFgcSKTBbbD1bLUwLxWhiZbjRyxw8xYHzyZsSgGWZoV5axcTevinHDhKx4YmjQMbBiq3j98nDBESZJRVVaQ",
  "key2": "3xqSCReFCq3fEamgNbJi7yQxM1mhZcj1vLY7mYwC2ed5on16hz5jnEmodnyWgfKyMWwQSFL9sM9P24voDYL48iiU",
  "key3": "3U4gZHP4RxkJrugptiGf9DcCBxJUBHyGgaQvDBxTb5YaHRT5v1pTPR3fSVg4BLtaXJV79TuNFDuhe19G1A4nxj5Y",
  "key4": "GbAFxukSgkmhESaMvjiyJaEh6tMGxY4bcEN8s65cxuocT8otMkPKEJ1SaDvZuc7gRrxWXYXyD7hA8k9it76U6be",
  "key5": "bNSJrfxscqYgYCvHVTBPQHkJ57Gi63r7oxpDHEZRcRhUY5fEa7yEicKtg53vgLXgycrY7m6Hp7ZdxZjyuptzVyV",
  "key6": "5Z99ANkGfyAKaxCq5Dot7sdfRrLK2DSfYRBWmaAZmUCZz2rYPjdgDuXRed7NhEiT6WygP8Poo6jbZjnbdhDJeMUY",
  "key7": "4VJfpHzzvLSmqNiKGW9uPcqWMWjCYKaXGfxnV3C9UahQb1dd4x1C2YyucwaRqEWUZVXrfwESNauEFGinAfEksmMw",
  "key8": "2dS9U2eHph3EokWAekEg4NzVAfsWkyBssdf524ndLSC4rCaBC3p64JzBJDwdZna9TzuQ3kba36D3yYgv1jx9YT22",
  "key9": "5Tx6YdbUeqfAGagDbnhbVvRDTycFFpY57uj51tnGgWeoDewt4rjXtsvShfkWeUiAj5e46mKhmCbJ3iVfun8dxCrg",
  "key10": "448TiLwMSGso7i3GZuMgdEWwXF2AaCUwvJPpxoYDK1oGgbtMRj7w2XXVY8dR7AsFbHjmZsgwFoeJR4V42CcbQRaj",
  "key11": "4trMNJhf3ULuXzzwfnjYdhTmnsBRCiMQr7mz2mDHku6PXXrXr9wH3dfzwXr8MSVRpTe4vKigHSqaQ68ixaB3cgsr",
  "key12": "4UPSRfej5vVjaQqNXuiAANRWU53WSdyvnFajJL83tt1stWcPRXbwCUZLfmaQLCRkF4Cvhk9R2BhA6Xm7BsCHUiSc",
  "key13": "2GTZT9bh95uCjcHPyftgHfiKcx8DjqsexVv4MLQ3PLoZsGRscPkyMXKoWmQ1Ffj6x5VTAdsPyt17UXzJZHN5MSjG",
  "key14": "4WENiV1FWJZjts7opXyw7Khb6T7FrbhLP3zqSKnYXFWyT4neXDVh79Ty6ARaLRwyTyVj376HNBxxZRvzgTE7rapa",
  "key15": "JckbMjB3JsrP8GKu8SDM8hpZrWR1F4PY3xg5bRWYcegYBXemVrza7oy5jbDHgtEVSLuDvovDTnDdSXyM4LM33AC",
  "key16": "3nyHN3naqicxurZpGuXeqw4aS4MvmN8h1hSwL9hJva9v2EunxNZZA6eE63n37Po3mUJnBBjNmUkPJTHcmqdGHcCy",
  "key17": "57bDQpWHRs42iX3uqSrohTXLhm5GjRQdBQKEVieHsR8k8yrC7hmDNhQkfNFe56hBouYS9Y7CY9PoxcDnCTXUcJ94",
  "key18": "9zia3sXBvuKnDQ7uaukqNgZqmc5T5UK7BQvizCsf7wt8RgJuAuiULuv9LejZmxC6gneunEpfDosVVShNAsR11e9",
  "key19": "4C7QQnymkaTJEGLmRAEaebSgUxHLDznigzeRC4uTRcTA1mddKmGFj6Jc5Dk7oT6TeHYmtjiXhaBQzfRYZJbyotc7",
  "key20": "Zzvo9gUAjEtwr5aAyF3FCyR25n9ggqiqSA2PRW85pQytoXHfhUcqcGbnuaKN3KWnG7drz5cgj22NkNoZstfHFms",
  "key21": "4xQ2jggRktP76kkqfzxKbsMH17AHN4j5JM3A1tqjpbg113NoFPHu4Gif2KAxnK6u9r7FUPDwHGHUTQM1odPYWV7H",
  "key22": "2D2YfLWEUsn6mYjxBjrRpikPhV51BZXaeAwkA6x97J67rtdWNc2j3wVSY2bbzxRPgM9EqCutpao7ASXrSkgwHjVT",
  "key23": "5GEQ3pztm8vH2Ck3BwCbKaLpYBZxv1gfMEdtSUmZyEr8bZwz546TJ4G3mYCzS8E6MKfC2mgyuVV8RSRe1iEaiHx2",
  "key24": "poXGF8AcbKJSoe2RbUeBQ4fvYGtbiRtHyzyG7zUQcjGtZZVzGDd4H7WW3mgbm6Mn5TVyoG2iZZFbftzDFitRfC2",
  "key25": "PU4iyyoK3KA86xi6CRvGFsvC2AAFaBqMoyRBNQR5YJtwFbom9Xgh9PAMEWEXoo97J3yWzQgL1VtfqEWcrCmsED4",
  "key26": "yPM12PrtpR2C5ehaoYce9ijNMT8iFzQu48QuFxfDXf7W7c6yME2tufjsGBCrC597hBU9KbDhMttBBZ2ufmAtfw5",
  "key27": "2k8PLzFR727iaemAMCRwKV6dhV73SCzjwVVDNXZt49D3YwtX8ToCGvnftbeurhoLN6sYdB8rKbkueEAWSeW8mxdz",
  "key28": "3UHfxrkzhkuFoNyo1KpdER1SPXuqAP47SGdXR2sPvMDEqcSUQSALRGV6jzuT9AA2V6f6sdKNL8jgj9TBgypKKXKc",
  "key29": "3LC693t53Z6wNVxnPfjs8oMjgZMqNcXTMCeVHZgWMsBuDUqBrBMf5yukbhyfzoWjiDmqnq2cUcePdVgEHMsm2dnm",
  "key30": "2Jehfifit5d5Fr82ZSfz9DVWF4dCdZSdeRkaAfZrtV6CdsF6RWRyd1rp4K46xU8g15yZWcXmytZCiugMgbmfQnzE",
  "key31": "2ep5X7cRmsCVqYPTuVsp91WBdsuhNehQSupkUTenVjqR6D9cfxtpt8vaGVXvW4fqkpBe88nkdAf2wkvVZ5Pf8FUr",
  "key32": "3kPQarrqQGRGawsBBJRQjrPoNjPoQeZumWwHotpC6QMw8tsoauFYowv1xc9SViG6TPysm7iNhm8vb9gzKAhxv5uG",
  "key33": "2ZjYS5vSPKf4HMoRQqhZbvMJEnCAiWqMS1rdmPw16kP8eLoYtXGrE7E7zfnb3auHErrKCsS6BvttQwoRu3u48paW",
  "key34": "3akpRJVscizpgzpGsz4BmdcRPtfomGvVG9Lb2hMnf221i3D8NRPrdv5aps2ayYvMaWaiBZ7zWn8YjwXAwouMzCxb",
  "key35": "hxUfv9eiE93ZaYcBQqcp3zfu2WbVSFZvpqKRPvFom87gV5pBv2z2JzYdDCkn7mVn2y25d2jf4YU5W8qfsABZgUC",
  "key36": "FiR4ZyN2xFhPSNVZAfvT1LUeNWpuTpeVyie8FHyuLXiCp5dyYDUiMcSTLMbf8QB7JAPJkSZ9p3gG7ezSALDryhP",
  "key37": "45NUm3hE496wEEYzYZ19dZpA8tGnuXZyNdFK98er8tJLGLGYSv1DP5tKtvuCAdHXUz1khboqRhm8HVg9tbtvbmaN",
  "key38": "25zj6r2V9g8kZLGgdhRRVTrD2zLd9dtq16MDyVRZAAggzjBxeKzpYPoegYmTc4pxuokGAiSFWdiPABJaAJ3TjSDW",
  "key39": "2XC6SHc3HS3nnGP9N44bg3UTXGya2E5mJWGEbvfvuUR39BJR71uzfnASrpe8coZVxNubrjPZ9XNYp3wjiqF4wBnJ",
  "key40": "TGBKa9VUHXBSMUNyzYYbgKJHuNkmrGayj4PunbZ49zm6a7MfVrFN2sh3Xya7esvKpLPkZAouTkQLyyzYGxBq33c",
  "key41": "s8a2u2HFhBijjxMpNSZV2LBjQuuv4F4qMtUeNDHsh3XKKE8JjVtTTtyjd1EgAEL4ExWJZVjaWnLFprPW4djywTG",
  "key42": "3Ux5NTnS7Ups5iEvTBbvKuZLE6YSXQBbXUdFuvLnWefZC2RTCJcL3dLPvqfquJjB62Bf3hK6QCUZ8gsPhvMuNPCa",
  "key43": "AqQtGg58H9C8REdG59yaTqYYC9eek6FrvzZ9FWVQX2y2BBGNzYZKcsWX6wbYLDH8qr8iyZ23hpYBShTLh1ketoA",
  "key44": "2FDbC7nRXPRp5kqURpm4DAFA5HEY2GPCx7g7vopHYcTzvCgi3Zm9hFegKfLb1ccPnNUrDqDYjYJVZVVU6SDu31Ua",
  "key45": "2rmZa4BheQpEz69VsgTp4LxqwfoggTYVpC1njr5hZftdUzg8CepQiRSgdrZ3LTNSZ77cymoTeo1XHRnpB7duQnSg"
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
