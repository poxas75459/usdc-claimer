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
    "4QFVEqqpDSbfHkxoKVjATBnEB4ZqdRMFwpNNSgUZMnFVt4em8bQmcg5RwcYtv3BgqDYEHnSMYBC7NZtquYg71t9Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4deb8bcysv8SidH6q4Z1jRcvR5tESJoEGi3CBNGBLkT7kjzJPoSx4BsMtks6MDSresDqsHSh4eojaY93e8mn4DTk",
  "key1": "5kXM9VkzizePNXEFkgyJSimsShGPUAGNCCBnkVksh8LSCx9orAyPqfx8cW49VsdpvBmtcQqVWJB3Ttjs3vDUFLtr",
  "key2": "ZtmouNw6q7Nqdrj15KJ5zhUZvWSnX2dj1fAsvsMR3nfz4v8oNgf2TKHUfxB1cybE6EWbR9wqSHoZu3ZEPrw7yMj",
  "key3": "jTDnRfgg96JRYFMaLbi5yvadzR473MkaqCcMra1FRVDGZPtX9czYvFpk6KBAMADWbVPMSsPd4ivV6HYfaSTdeMf",
  "key4": "4g8hzuAhmbDayTeAKcnEYVttaNBnqbMdFk1tFsrpxPTczNomvVVLgW8iChkUXFR9eFQR8pZ1qSyMuLXKNpbZFwZD",
  "key5": "2G8sCo5xLiR5q9LMCQ4hbozduLRM52xe3dxuxmLu2McabQ7p58P7KgV66mAZZy7Qex4T9FeHKXnk2ACu6jxHovb3",
  "key6": "4xwGrsa19hHZvQCzz3iUu4DnmSianYAqsbXYfZbzxnaiQESAQr9b9fHARgawvAFA3xGCKEbobcnJuDNjKmoiSczo",
  "key7": "2UvaD7S5fNLsq2fhotB5DxuDvCr9FonzMzgJTTb7FQ6v6gZTW9BhbSoDAaZkUxXF3iuEYVQ861BmesCCUwbNVoKG",
  "key8": "4zXMSnC8BqLCxunsxqYLBcYwRWgK4W3NEPYsNaKtBdXr4hDKQrAurj9fhVXAyDgRrgRmSxz95suarbL4UKkDn8j6",
  "key9": "61UQnd9YisasQDzsHq4U4JNmu3nkCFpUZFExjDbYcAjtDT54ZS9Sebr2L7tqoGVnPArtPgUKJuGtTMdxfkz7vHZc",
  "key10": "4HSJsAjm1KieCGbXmk1WiDCmzBMDx9vGkowfz572X5ViCe53ViLmetWVrNwPUFT26sfLxoCt7oTVbyv6SyPADQjx",
  "key11": "344fLKrrfaPGQdyvrmumsCsf4CFfd7feXJEKs2qWJxiwWDUuhuJ5pNVNzYWeeFw6B9oW9qkxsbBWJBYUYmv88eAv",
  "key12": "2HNKF92AfTjboGiz7sfhtkvyEGPqYtGt5zhYvtb697EPJTuVN4v2BX6BpWEWCJHuNRWPGhxChsH4if6AnzZL2LtK",
  "key13": "3zTrRxW5uE8yNCMWQiAfFPtpfk6rXUNbqAFm25EswmwGZh4v1vxbY4gY3pjr1zoiVdEcM1vGrSXnSS93xg3NtNuf",
  "key14": "24UUpdJC3FYjxbgDMrtsSVo5DkiKaaaFo6pWwZQy5vNVCNnbapXXBsM2J5SWP1HsqM7oq6GFV8KJHGfz7kowXZC2",
  "key15": "2ppHGFcX6gLxgMthBNHX8QPEuZqNVZJUL2piko8yzdrjvuYcHKY5TeLcZq579daWiUxkMMQqWDiRVzm5NKcFZM6W",
  "key16": "2dGWzprsHL1uNAtkko3gDC4TbuzqhVksoWxpmSFQTzyPxWcuumAoZxVEiz5bRaDznVHmoEyfB6FoWWZSPxWn1JTx",
  "key17": "38WMVtgZ3usNVmE7Pwd8rsomxo9Sw4z3Uhv3qy4SbEiUETPHgHYrHiKLYSd8KETn9SSGvjQ4WQ4Ztk2C1h36RhvB",
  "key18": "66ygDP3BV8u93QhAxmdihhR1bnjvKbxQBptzo3WSCfCCdg243u5gEZnM77G5Nre32WakhbyNftkfbLFtDzf9wuK2",
  "key19": "5ek7toqzvE5w9GhfwTMbFfHnj6BcrHxbZLr17Y9G15XrDaQ2PW5MvHMcGT5cWFuTm6Frisui5sHxt38zNhCGzfyP",
  "key20": "2fKxWC7MDpv3vgCTLd2jzQFB2PwZ9S9PirV2NeQW9fhPgqdjqvdmN7bxAGRahz7MNYaBc5xzaL9BENL33ds8gw2W",
  "key21": "47J6rmAEjCiJPtMTvWnBLhkfCER5CrcWCF8njqfcfzK9NNMohPFiriLPJvLePqxB4fvAtAm4qNAp94QGyT24siDh",
  "key22": "on7ZN1GeKuMwg3AbJ92fAd5NaqDsmy4MuPTxBMdUC6YXzgybby3w5PMs8b8UJiwkZkJPs4wkQNYSppYtcZZ46bA",
  "key23": "3A2grszSJtwJzQZm7gTxk7gPadEchoRWm2YTKVtyzR6nVr2TtLFHvJzAapQtRu8musYySiVyn29DSheey91EQq9V",
  "key24": "7bgb4R9jmYGhDyVddZq7KapL99NccA66JECvAxYrzSrz74AADYn5Xey84Jn2rfSm4JybujLWe3oNPKShjEzNUj6",
  "key25": "3DrbYmTPW7g2yYWy4hNfcy7uiNezcNmjjX1eWehTShV9MhJoawbVivrgzb7oXSpA8NSuLaLHjj6ZipnBseKRQzxz",
  "key26": "36nf9xn2yS2UrEvk9knnVnqjF9oiY9Z2cvubCfESimzAeqXsg1AX5aD1BaaQTNSvFpY5bRBqWn72WxtA5bXXqUy3",
  "key27": "4dTBd2Zifn25EVtVjjQHn9UawLynWaCVJEh71XSQSzKitfGfxQByMxb8dbutgb4kGq5KpjvTJWGtYbLA2VkKSoNZ",
  "key28": "4BMQnZV7xHkyHC4D2gvL5BDpupyG7qvjRFWzoFWP8i4w5e9aAVqG3hBAW5e7TPpkdv7CmyyJRtxgqxUFjcDeKrn3",
  "key29": "3LvN8P328HcmGLPXncWvsUxoo9XK8wDKYxpuuvZ7opu3jRRHYi9e9CfFDiLoqoy8FNaWfwcoHSSfud3vsctG6QHw",
  "key30": "29qm7WMoztAWZ3v9GPUeMqtcJLyk4Lwwn9ptf2DWmyvgLqhtJ3TPaszYKKB9BkcaLSMBfLYAaYNEzmuJm77tucbP",
  "key31": "3742SM9eNQXPaKrjfZKSp9kNtJBw6c4dZWDiM5GgQb2uMroXMCgWjCoQst6iYSFeriKAcAFNmR445XDSR7LM8JHW",
  "key32": "wPddVRxMYTafSnujFQokB9pcqp51sh1rQcMWLLB51dR9eVZhBfCRLrLKsRKL7rwtXVQ6V7deyhxofhdtxavhnVF",
  "key33": "9XDSzJsEfU6fuWWFA615B8hvsncwCG3gKokc6jLmfaNzNpZemA4yuJZu99eWBVBR95t3cNDzjis1oUxasGSmNyh",
  "key34": "2RrvqwPxEduiNe6BasKAzPNrFpB5br8BY9f7apw7BEbxt9q1vxmYcWzEzgojjiME9PabEG6vyRTSoGaR37Vepjca",
  "key35": "yEcpkEk1oXeU7S9RmHymduyNpA5gL1apALUHrMeTP6Sd4Ay4KJpnrnRALUxfxduLQDw2AyidcvNdB8c5dDnrwvW",
  "key36": "414RPCaVdw2N5GobS8TWPHiyAauHbaPFtvh6YtT6YLp4YguxAqzc5U1jSfTjbzwaaD36ZgvV3NHmBkYdVz7Q6pso",
  "key37": "2NaVZz2jpmKbWLeMNXQhsvHxsGvtNNgZcLtwFt5sLiZZmSqTvAHqbkSzocxbFfQTX3n3pVFNHaCbu9WJprjqPGeJ",
  "key38": "4JaE1jENpyoh1cUFMi2pDJbn3CoKJsCZt2Fp2tyA18EWYMGUEzbv8EqiJmfpqBrqdHQnfEtQFz9SqSXwQaUbReiU",
  "key39": "3yL9Yrao7BADYiACogTsAdoaHuoJbKkkoRtQ8HCFJyBZzyDkeFBjtHW8oSm1T3J7DsLZYCVXAfEiwYF2prPiLq65",
  "key40": "5e87BskjiYwVSpxSUkfAByf9nmXhj7nWFRRtSWUcSvk5QenjiP8FKJ7UU7uQzqaffzrpVmTVqWhPp7HBEtNPFXu",
  "key41": "28fH595YSJrxwPyRfaHmtEZvVzRNHBpj1YHaEQQZsVk9ecYkZ3yBGhNwt8jhTTpkUvsBGxxEaAsv4HVBdSywmNJt",
  "key42": "4rYzBVxPm9SLXvu4wD5187AmkbfoQZVngcUX9SNfmCsaQcDiouw1nXs29r7EtpQszykJPJCL8Gz4AdnLEVzF8BVG",
  "key43": "23v1t9odM4zv1N4jzvSJnEgUDnqnPLsCZ2CSXxbEnVpHjtiSmdJ79r2rHeEyNzKVbQ7opG472aYstNBjM3WoxrER",
  "key44": "5qZxKdXacdVwYH2mUSVWHBRqBHzk53wshx3wxq36YnNJxnsDxvAq1ens9mynf8GgWfyDqEYiwu8tVzJ6BNWmTNzH",
  "key45": "3veRGkk4pjPSUpfJijvzJ2ye6kkRzC8FvYFaeXeSCq2o2VTupQqHrGbm3uZvAj8haekaH3gGZCkJvfmD4aQzyZhU",
  "key46": "3rG6rWtfpQ1WzBTAYSKj8g2wifath9nBKkhvt7Ggrf66wxthy5QvDGD5Kx87JPGZN79iBLVQ7eYUHFw5vDSFZzSx",
  "key47": "2om6m4xVj6gk9yGaxuVsemeDpKN91RkA8SrbwUpqbHEnbnr9oFL4bjUtMedMDbkWahNpN8knAiuPj6EP97JXNk5y"
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
