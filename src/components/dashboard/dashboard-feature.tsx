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
    "2sc5s72j63dGf2yrnTkgcSWuRSKhWc1DExrcBPYtU9rZCW76xWoDxZtXbXnvnrh89q78kTAEWckAeAdavy1UzH2S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kZEq4oWrsERB51AM1JB35YpBwzebpnyF1W3BvaQq5YvnacXEmfE9hK9PL13njjo4NR3RBnKJRdSz3ZSR55bWb57",
  "key1": "2YfAQgU5ezz27MdGyPKrowrFKRw9CZaaXzUuBcmhf9FMRigsUsjARwLxESCjRQZPwdpzAikDTUJMQ2D91A7gsDPB",
  "key2": "65qr5GNL8VvLwhvNu4maDj7nw2enfRuwVpEoXUi1rfjMgpzqiG4WfCDuRKFVrRnG98qXBFBLnwduoWhR6x5sCsBr",
  "key3": "23R1JtHwcSBAMbmuvHSiow286c7v6Wa1KnXT5fnM8yiRxLKs82HZkGE8VLLH4tTyTDYqg1fMzT4u59twBarzy9tQ",
  "key4": "21555NwMEc5wAVzfw6LYEtkci7T6TRc8pmSjFBRRiCSyC42fqdRHagsGFAdpt8rNJitKjWivJTFFcN6FCvuYMnBj",
  "key5": "3JJLhdkap9uHpSTCMKsKmKyKAtSAgMVvvfenE8vda6kqGYnWozc1heRGuMFamshogfYK9EcFzMZkKEHX56f3CFU5",
  "key6": "5PiXmqe7fjsuEZ331tEGyF86H3A2gjirMK5HAZQpQpLdTLWKwDxPcGtbq8EADmacgqdN8FQrCeP9zHi6wkmZFu1x",
  "key7": "5y5UW2Pfv3MJSdejkdQaZYk1cMUuwiy2mhPZ1SmDKRiah4xZ5mBcyPDMebXSmwG14YzDzwTELueZ6xCjqvRpBt3f",
  "key8": "4qaTcxz9oiKJstp9wAeCaeDy5Zi2K9upyU2jEXoXvcPTGeq5qKc1G89mK72UPCbaGj6nGRST2py8SS2roStfAxfw",
  "key9": "42rabVYm3tFc7rPg44k5hBEEmeWEVgdWmkoWeWRsigiW9NDXBywVn1YuGoggzRrJxLG7gzXFYQ6ZUuDPtTm51iDY",
  "key10": "3U3h2QjxSctdEKToio2a8T9j6Dd1m9Z1SzMsWLJnQn3tJmUJGzzWZt8JCtJ2XkEDwqEYbrTQnQgyyTX68TviLpHo",
  "key11": "2VxwcZs8UspdWPqZpktrcX2sXJ2yDyd4t2AiL9ra28a3qyA8U5FvasrjcZsMzFYefMSeNwTkBUutzamcys7J8svo",
  "key12": "4xVHLaQRcGxeBidkg9q5KfWy9CdpzbqcZJXerFrXv3szyvwtzzVfYeieXLVNMX4NhnGeNcJ9WKhgh3i9z5zRUmPb",
  "key13": "5WFBRGNyQC79pgzPvAa4sXJXjubakxcM8HZ89Yc7WoCeAYbL2oGaNeQxoFVg9mGgLfEer35BU6XihQzVehvfqJuW",
  "key14": "29oWqrRtDKUz6UybcKztUSFap9HiNw5DBGS8JYLbrpgE8Wfq7TrvoMvsmdXMSDW11gY8x8fh4MvnR6da1vaEaEnS",
  "key15": "47AQT5CxkGkPtbJmaGaNo2TEMWTRNXYKs2tYfDJLZhMX6XkdJGYsEtjnrCScumWvxqgpHLRPYoDP8RF163uVYsak",
  "key16": "4cP6Vhi17zALAcKxKV69WvbZc5aAa1t5mZyxZsmijcspbKWGbfm2nDAuMAv2PUGpSHHcwWmik2eRmut1dHtP3C9g",
  "key17": "4Mt29E8hzywZG11ipPtiQavdu8btQSw1Dp8hnDn1QfZAJBkPhZcddXsUGF9njW7FJXXeeRNGkvPeeRbo3SF2EN4G",
  "key18": "4QZTeXaQ9AVwE1ddbY9YuwZedzMNjy3aJdRAvA2ujan8ZMY7z8WXtZumTbK2qA9fSZVDHM6zPEbuqtX8beVWLEj6",
  "key19": "38j7QXKr3FakEM1nniNAtoXGFjMYUuVNYEqzD5LumhuL8u4ZfNAnH8WsjqLVDboqczHPdVNefTdeZ9XgWKSVDUuJ",
  "key20": "4Q53EK3GD8nVRuRDqXogtpWNvo2seaWoVrgSnYeadAWN5TEh17SDmS5zxHW7dY1mwerqyw94eQJS5RnBCagfTjrT",
  "key21": "2Y6w5ARSj66dPdHEksNHcEsn2zoPf5JrTybug9aQxmCxLwgRzgZ13zbV4msRoMGAFanBWAwpBrZv2LFVuXtXRZ9j",
  "key22": "3PNGK5yep2UmZBpzAhRuhUq1PH6EUBR5AchrchxdtvQreb29bNUyTL5hGczekQoTfwHECF2djTA4n5uJofU1V9Pw",
  "key23": "24U6EzRwNHWkyuSHvU1jHYbsfd1MN14ygkWmwA6YeLxCvDXhhg9wTiLMvx8SYCQjPyMeGNx3H1SNuJRg8qRE92dv",
  "key24": "5r6hf9cuHM7aSMNd4juU44HShEnaQ1XTUqnyEyfdQW2Y1hvdJJg7uqJsPcWBp8wcsdtzZGLUK5ptaPVWgYFfyqU6",
  "key25": "3C9L3GRVegb4uFBNYHreYLSdde7X25LMpWkYVRYTja7dFzxTeyvX1w8rMBufcQAbF265RHvwKoPC1D6ruR1ovUrU",
  "key26": "4eyyKGh1K6wqAczjSRRR9pcvpPyg24s2vPftDgks1kHsgoMSdYSAkL5GxijUTvWbENLcNwJgdBsxgRDwYLxLo2eh",
  "key27": "4KrnsUbBN7GvbLq43kvFJTat3djkmLEWyP7qq6zzLjuMEp9b6UxT7JVFmBvBYu8LUVCfUvGQYwiN947H7X6ouB8g",
  "key28": "4HFteL1xD3T4jaTSKS31XvfbEa8uXk6Vska5LvH1Bug4iwi8zVcacMRdcNDrReht3TcKKut1fRhFgWwwWW7Uqh4F",
  "key29": "3Setyf6pe9VXfiy75BMRonSqhUBSktAft2WXPpyi6X47zF9iTtzfkP9RASDbB7vmNww6Xoek9hsyJf1oWpA5aQcj",
  "key30": "5up2uybmsC9J97jUdPW1gvd2DP86Jwcp4qijos18BmbswHuigt9gTogwUFKkZeNxLSDrk6X3fb4mFrkwXzaocSEP",
  "key31": "29DGDfYnUDRrFuQXGZ8nBQRVEBkGHTAAYWRA9hHAQi68bkJ41keEjrR7XDDwjKC85sAUdM9YvQ9EgpUbwD67xvY4",
  "key32": "55Vqd1kPLUa5cnQDpx5yZPjE7GGqsgLnYc1Et9d6ZFgSs7fUMmnBC8xJwcjoneVCKQ2xDkXnsMnxZwoh3Q4d45db",
  "key33": "3Qkjztokb7xy8Mec1GP1Bqx7khYWFv52k1b2nJZx2cwK6RdzfL128ZXuKhGHpKN9z2NTtsyNwSQMEhynajjTzWAB",
  "key34": "3KAawwUdHQJmJKeGLNg8DvnmzMhBRaQgJPamZE28ozVmxoqgQW8hiXRGu932yc95UQYmzPoZtamCnmHss5KjzL3b",
  "key35": "59sKTwovwTHEX92RttKaYdLhoBvQu9CBRJwPfaCB1t1wMNG3CTDUxwTCnCCM6B2zjveUT6dNYemZ4kCy9sCjFPLc",
  "key36": "5132CT727JcQZzspW3iXN8FhTh2fDKAsgJSHNe7cqN2JKU6Y32vwKDQZbXmQG9zxCJSp1SwPw1m1UzssGgqSKus2",
  "key37": "2usCoEAFHETcVGw6m4Qj78msn2hmF4U5cMLV6UJwAeBfKmmvrGu9XPvkBTJ6TXG4ZD3Em4Xp7bDDumLwmu64mhtH",
  "key38": "XuzSVKbAutgUzxr462shiMQCWSwAe8RgHNFCCpaC4qJEueGpDuwY329ZL4yVvvV5WgxUXRFtGJn1YneLF1tYYZQ",
  "key39": "3ABbaY1Cou74hBAWyC3oUKz9ScATftJUTrgKozjxveTbYykWG2yMYVGYWKd6AM8PVcaNxZ6AZw2KbjgYoZVJtj54",
  "key40": "241XTE1z2NHfCevmzeyVm6p9FiNvWCVhoYJo734qR64kqpBPp2QTNsQ3pHXrr8vfREcoX6HCpKQsn7RnBeFTc4Nt",
  "key41": "37BtdMkr8ecrmZYTSojijsCGRC3i8DH6DJ4ThUGGt2Q8dQEQaXLkDuSJ3d1texinGz1vR4vyDSxZfsYtm8m4sciw",
  "key42": "2a5zHQ12ZGZHUa9CmeKwT84MiGmGq2gwd453TMUBQa22poBvhcYTz3CG9qwaPeRAuTjfQ78BHpBm4UK23LeDo2w1",
  "key43": "33VQTH32d7poJZMReLZYMYh6mSU1aZYSVq7vDoFEzg25YBaWkdeSuTN8yKoXE31XQxNrBGAGpzTSBysM8UgByAwS",
  "key44": "VjxJQRs2nejVARiNJGyLfSLeTw9FUAmhhy4pfs2oNaM3SswgshvCvRoW9TSoiTuDaG8VLwwWmXf8srgjjnZPhLo",
  "key45": "2W5Ne3p56oPdbaESSAUSiDt25D4V3arim92ZyZay7J857gLnZkSNkWY75AxK5GaiLyag6pcLwvphksdyv2NfZd7w",
  "key46": "3A5gJ7oNshKyFTDnVKMatmCdoD7zAxkuVn5BhnwMXBbgiJ6zwd35m3KiaKyFqiJBPeTtJDWFsGrWJ8Tc9WtaFwUm",
  "key47": "5vQde2tMtNJniKvkwcoE7CUq6A6eAwGTQvXHuzpStXwQt4m2JcCkmACHwudQWSkC4QSnEeG2ra3Bdh1dfevbuhxS"
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
