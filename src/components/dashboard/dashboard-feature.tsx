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
    "3BpTi7euSV8hSpGu5v6Sxmzeg7jgJWiXzYG7wgfGGpRcoFughnHCzmx5N8ujqiVmDMgUWwqXPsfYXBPHUYh7PEyf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52tPg9TxQmmt7WjUV1SGPa4p3FxqtdgLaeXB1XGMs5HHqJ4z3C9SC9Yfarobn3hoh4uNZ5sefk8Tg4JUTqLP1w2f",
  "key1": "21L7qowHG8pK5A8yExko8wEngVMaMteRnkjMEevbJNXxziBDuoNkrpgvdsbrLCmTEE1MeZcqj3CWAPyrxY15cskR",
  "key2": "4h1fabRVgthSDdH16Gznwu8HJHbEPDZTvRT93bfVfWhErRiVz1SZTUngpDMYdXbXVmf4JpVLJsU2oDmqiBejxNGg",
  "key3": "4Yiedsarcb2VFmZfzsERsCYUugErhQUhv7CLX4U9J3t6mDETQp7WxmfrRNBJkBLajafMT86yGspZsWEQZxeuJ4H2",
  "key4": "yjRFFy7c6LGBAfSFTwqK1cJoXPxcWRwJhF9WRj7TdY8qyfXRxBxYpzXMCd6pML32SpzLNSXwu7AugTGZ48EmtgH",
  "key5": "4CnKUttvoMCwcVCAA8M1b9oHwRK9KmSnTTdWPD5znux7qkZ7JP3Do9YL1HEphYRmdeVfDMmrZcrnnWpqJ1FDJZmM",
  "key6": "3ckeJ4BZM5687BrYQcrKVgM6X3a1YybRXEYwCMcQ9HaX3hA3ct2feyg9wXW6htzAADKsc38WiaAjKCjdrKHWo5Ha",
  "key7": "4bUT1zgU7ftsKewjX1rnnncJ45rXsxDjCFqv2YLnnWopkgJsReCxED2aivxBfVFszBiYx37GC1fyZLsgHwmDxGJE",
  "key8": "3Xn7JUN9kF32nAA9DUjkqtM6VsZf8Pxykx4zCiAj6eVYKP3QNqYn4y8ep2omyHqdTHSmbrAPQmbxCTw3MiaXchgS",
  "key9": "5itcJkMHBp4ExVhp2zKB5QPcufQKdPcXkVPyZe7sZ6ddZo8LUfYbzEus814R6h1kyixhpPN9DuhpwadHrRNn2DWm",
  "key10": "hyVuhA9PMPDPVxWBL9fN7QXzVga5PRwbkgBoMyEMi2NttU3fP5MY3RSTiUG2iQzYZtLhdYwmFYbwwW4fy4sqTAw",
  "key11": "4zG6r7WQFbd7gaZhpDVs6KKYfLio1fdB9b1P1Y4u8skZWN4sdJeTzsgWGTvAKn4bDGEtNAUfpAgrLGfNuh1ZoRrC",
  "key12": "4tDMDky6xqzRgpyC51XgAsD4Tp3xqhHVRa8JF6ZNuat7ebj1YGobysXRWpKAjwhnNFa9jPhLpTnoiXiTZThW6vM1",
  "key13": "3p8jy5WUbdjua2DBjBTcdZRCHE9TqEcUE5CqkKUCZmfuJwpZEgmDrcXTqex8eHjYwTCNsDiz4KNrnuUffQ5XBjNU",
  "key14": "4BBqhmu2uVHVUegFzCUPWVT7Dx8KmmRHvf2HcXuK45YdyN4PM3R5U4HK4KEKP7PWajK2xwCYaKhjcrNGsygy28MW",
  "key15": "rznjKCeutkexitPpyp7ctZk1njPSwFWoNtHU2BMqbFyhRgwSipHifAZzqtuWKdJgL57rfM8wYxpB7cSaT9mAFsn",
  "key16": "5G215ScaHVNHtUJtPJhtfKCJF1yX5RPiFKJGZao3TjpvXqfZ4oKWVWRsF6Nww7wfL5UsiMCztBsb2xgxaRshsBjb",
  "key17": "5Rz7gejDqQZo5hXx5VNRT6C8nYWKmvf8Lo9EEykzwbXwhXuFUvJBzxsxQ2sGhrHj7rguaHczK528KnFayKQgcj7X",
  "key18": "2ftbBNu1kgqwRStos8hRmajV3iANWh98QRKnCVBLzLyFUN3TTr7JW2ZXoXrt3by6KqYmRfDeuBYHEReXg6jsz9o8",
  "key19": "5WYVeGiLYjDCvSiFyBP2UcdrvmQJ2wuDkAjuYiQYnCpFXRKL1D8Ea7Qu264zEZNH6n6BazbM77B9QyzHfcqtE47a",
  "key20": "5GYoH9G7WDfLfj565Pkxv1FRQnecs1w6oeniQv4RoVJpaSFZMtrV24T6U3HzgMkGZSRTB4jkw8xjKbi5GMDVEo2Q",
  "key21": "2pQ62idzvma7F9Ygit9X6dWA4HqaVe4vwpbuV3UEAk6zx8CGaPrX3rCReyTo89wgeLPuLipCZzUbhSYSujUK5ZcN",
  "key22": "MYCNNVV6ski4F7Y145NrTFRgVZyydRDrgi1X742pdFh5KP8K5TZE8bxN3zmEbk3Ye8kHDKSUmNyssTvfUHtNBxk",
  "key23": "5Xv8gxGiDJnLpzVrLXPmhi5VKPAShfozF5ut1xV1iFCPw1qjQyqaJ8C1i7f3Dvg86itxV7u9wJoTFYYZVSSd8nE5",
  "key24": "4xE4A72NiV2C5yhprwsTraxywgRsBMYMYoCt2GepkwisKs1ZTTU3571d9Ap4nia2aMvzYdLA6KxgCgGo4paY1vbA",
  "key25": "3wfPmPFEGjc5NRLnTfqfn6nGGvgupm6vsiCEAwYSzTxe6xsqdwYkDTinMzaCgc67SBxi5q3QvGoyCX5CQ4F4w7wJ",
  "key26": "2U7ah5RZXFMC5nUtPkdWxMjK26VEnGVP6jyuMFsniaWDtRfGdxTA1xBtd56wwLd8QcnNYFh8tK9D7tyTxtX6ppRM",
  "key27": "3Bx3oaHY3zU9B2bkDeMjoax5qND2i87APqxu3aZBcjdMckQiAbyp9wcogCCCwF6tJkXqCdoG2SrUGndhf7Eg6sAH",
  "key28": "4YWRZpxQaG6tCGD9y324E4hnBvQDPTPs9oqBQ6UTdVUCzyXD13xuNLBhRvbYVR48me7eroX73tfN5GjNngY62BGJ",
  "key29": "2QNHUdjH8kBAar31YvnLd8CeW3LnMhejrFv7nmMwxvBeWxt1NLPbVYnYnezD27xqrt4U1iN4kh8YDEedRsH31sGE",
  "key30": "3KtPUc3CyXjd1E94PRQ7vkxKrzjasWMgbkEaq6y5sWQL2y3HoBSUDaRmsqYhkEYUwBvvjunhjVgkQNe1W8xQpBUc",
  "key31": "xeZkv7fd979KY2dK3KnxAQxoGJfstYn3HhYZmLKNjekLnK5cQ5oWf48SXnc3UATTr9M9wNrMDH2U9njGmZTRQoo",
  "key32": "4ukDSM1oVWwsNoBWgAhrB7NeyJVsEmS2ANXZgeZErhndSh3V8zpS5bRs135DBfcCTh32FXgDJN1EPLcRcy3sF5Tf",
  "key33": "3dgeYDvDRnxqMCtQ2dwuK2gyB3V8H4RuNd4SdXAogTDa6nnvBvPQj2aZKgy99bX7CatrAkXP26RFxmForXWCyy4y",
  "key34": "uYvDWaN8JWzWSsAVH4C5Ad5ZumVi2TyX3uAid9HwG7JTEGgGwLHEuwgGGhQoSGHUySMvoFZeMFsFcCLfreuyJdw",
  "key35": "54r1bKWLXaRVTCXdGRzczYvwDLgWEtB43BQxr7fMDRwZ5cLdQwiLDnqxuBuECy3Nuw4VoqfkiTFRsEVfsoQWYcv1",
  "key36": "4tJA1odn5ay3femUjyVgVRiVToyP1pC8zLhjvS9LzwHMJm7AN6GHBV8UYVZFghM7QE9uDc4EQBCBY1TMCWmmj1Gm",
  "key37": "3LQhK3c4tkkkh8ywwpV1Bc15CnyryF9WRJCjqKVwHg4TK7totK7r23hH7nLkGtuzPTcWnyZ8YXvCQ5rUiKQYwBpg",
  "key38": "5NVSuJiFZLYtwPtenpCRbxy6xTyLHYHMUWFZR4xJDTD3b44eCFQSxL352Mq1vXpsXSdLjx8eCJMHYUHmLgWbXMrB",
  "key39": "2LNMmcStypxMaeoDk7jWxd2rkTpTDgkj4693NC3sHdZskAWUg8k2spWhrpFMKn9EasfRN64fL3d2ACorhruXqZRg",
  "key40": "3Deva6UCWK7shXzrnV1Y2ujGpk3zGzDQXUy2BpL6i69WW4wJNq1Y3RDnqfJJeJWrP5mfXUtpYdtMMm1RFK9arL3V"
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
