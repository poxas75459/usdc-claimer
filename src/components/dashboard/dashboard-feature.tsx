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
    "67EpbSjrytc5PXfaKhFkGqz66Cz2iNyZpC9QVtq9oY6psvT7hLvzm9CBGXkqjkiNqqgETmbazCkBj7q7EaFSBFyi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Mxfjt93nHb7ebNA9zJohceny4zqJrDnZozkWCn4Fy3vu2KBbh1iwsKtm5DbVodood8qprBd1h7WUsm5dhnAjrAf",
  "key1": "61fakFByXyW4y84JpjGJEaZaLVfbWh6M1y1MmoG5cKQKhyXn87KgbrJD9qT9BpJfNHrafZWHZ3SxJdrEY5q26YAP",
  "key2": "3jdEBChxaR4yr9w3Vix4BFCcfvxvKDy8dneToLmbuRH8FK1ruRjrkG6mXCNUduCH5nb9u6cqcJy9BgbbeJWyZyBK",
  "key3": "FexxK46VtCoAKy9ET1Ng8d79PpmhhXMknToAmUdX3ScrdFyZV7bxUmu27SkbnnhmDo4qaZ72XUkmeYp72FfrDCj",
  "key4": "4zHUmH7rSQ1cAGqhbrHsYGgLvuY22SZB2JQvLfHHPQnwGykLi9VEPYFu8EXQhmz6wPip6P5o2sur7VTKjxjEc4gF",
  "key5": "3AeYiKxT8bHrebq3tEZthANB2nyz61n1hG5PnAVua54mzcE5ez7NDC2qkv2kPPSUmFiv8ZoyTGjRMUDvbNA5Wwz3",
  "key6": "3u4i6SMRH1cPnbMB3rHKhoiSGJL9TYXe6s2aHogwfDFzGe5QvYGyoTyVXGo21Fo4qVtUES2N7NrxapiKep94PHZY",
  "key7": "2gfEDXmzfUb84VgEArzmsg9XfttJA3Pjb1QA9sr1a9y7eyuxLeWJzPFP9h96YeYshthtJTGuCadnDYq296X5bhH5",
  "key8": "4mryh1EytjYtsB1ogVUBA9zRyYuREDKHkMDJx3ziv63jt8x87A3i2trU3XtamqPUWLy6u5WFVg7mdPuRB2reM7Np",
  "key9": "2qtR84o85NcFh6PbcBrzwFdMwoKe3VqgRSnyemVPxouBwuYcuujtM315VSB6TmrwLzeYLKVE3AHUK3p3yKRzWJc5",
  "key10": "3NNgCFwco2k3c3yhXrX1ZSR8VEC5QnGdEirSMZvCdN9pL48KjKsD74bnryjVhhYMfHsTKuu3EWVrBVG3SjjUrRiE",
  "key11": "3wmmPnp3wL27JYWmpFXcmDtYEszKSXhpmt1CTywQuVVUAMUvETwd78KJW2MTqtuj6CJxdrHujJ3t7Xocfy8UF2k3",
  "key12": "659BxrgknRgQAs42y5y5YJZzGiyYTSVeTWM6G7XWgzCdHu76Kidz7zTso8aBKutKqBPZRakT6NdMqKmDmADK54GJ",
  "key13": "bmXgpseSGr1MyFxdPThj9fJ4FTVf6FF5kwfe2in23XqVXqWMAt19kJFUTjXYYfnp1GEyMhjeQUFTn8cSzAjV3Bp",
  "key14": "4XMhJmQAPQqFHjq4UyuKYRsvM2jxSaYRCCLUBd4FHB2NhDRv5LoRUDmKZ4GrbdtuiiqQ2T9at6zE6EQj7QwkdedJ",
  "key15": "2njYuXApdtckQzcnLVKgMufnv7W9vKtyoHDj5GgdAkDvTx5sCeCALFq47awxSWwk4KMs56TXmXVk1Ra7pQQxNrXE",
  "key16": "F6BdCetVRWvR3jUFGovoskCRSUEAhMzwdwNvwsa52Y9dEjHRdSD93ZWpJLJ34kW8CsU7e7ya4LyGiTkn8Dq5zGm",
  "key17": "2LPZoeQcKwxwhyEpNzqPqmtGL7WKNNTfu6o561g7pzh6WqCdVF8ucmMtKVdmBKXBxP8WtT3Lu3PtyeEe3DFUH3sG",
  "key18": "NtoWdL8P2zPPnSJiiGoctiYw8jrr6V85YtWhTMsGjhy1L1NqBkD8RRy957mS3DYopAEJWgnHAMW5iHS2sxS8ik2",
  "key19": "28do7TY7oXJGnWJ3Y2xhfisR9pAx8ExbjsZRtbmtfoRx9c6z5sK9GoWRQTtd7szEatiw8xtCMYBP4UzUFAcGEjih",
  "key20": "unWm2qiLhGHCnTeH6wJKtLTn5tnKhpSjZpeLZG5Qmwu3QYGSbJ6Cf2LdmUG1nY93o61wM7d81qzFDpe2F2Tbykm",
  "key21": "4BHGaKnQhysgWdfXwu6ULLx7iHxyt62xP1WEE5vE1FztZxuYHzUjVUN55gQzNWU6nRPUhzVZmm8VTdPo7R2dbyMD",
  "key22": "59aVkBMhC5pvrxPnvfU9jebfdzighC9RGEsVp5ijRhsmuT4ea8fKuGVroirXKyep4pCERfUS9VER6kcVnnuSUzJr",
  "key23": "4LYfhXvGtkJhjavounCU7HveZWecHsYYyuJYWYfC28UK7Yng1358o5oPs5fqCjrR4kKUyWNhGz26vtTV835QEnSX",
  "key24": "5Samb5bjSkpfEPEr2PxF7a4hoh8o1vkwBGtzKhJKCM3Ziuey9WzwJ11FLsgx2BKE1Gya3Y862n1vez42zHacWjGW",
  "key25": "fkqQuEPvpvxp5DsfryyaPgCRdXfKDCDKSRx5kvtV7zwgmsrxYsuwrSh4WzxVNNdcJZNxkH6YeYrhsZ2WsjutGoB",
  "key26": "4MsbCaAW9ZfUKubDfUbD6aPeN9G1nxuYPpW6Dy1zMwknBPfoNMqnMLUifaEREjmTGfjfumhd1dHaJnbkg95RNwh3",
  "key27": "21pxWKhoZawAaR4bJvryMBeVD7dTWpU4QKXeVjFgpkvFXYDeCUoSoFx99FXbN2NvdkYpx7mfaJ6obuEhAQbRdvG4",
  "key28": "4wypVg7kZgbEsvBh4KHjReJRtSVnAUinivNRTbuqVed1x2LTWfv2HmuxB8kY9KunfAqHS42MBVwo14R1537EZfmx"
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
