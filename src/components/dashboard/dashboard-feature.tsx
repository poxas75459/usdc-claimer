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
    "3ek4E5AcsUakmj6UAE39be8Zc9eu8KtV2xo8XPufm6aQQS9G4t4ceSF9pKouNz5efcJ5imR7mcgnJNSKmGZK9gfT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rD6NFPLmN2DMUBCzbQW2TejnGqq4zxCNuAspTC9nhspfC8EmgEJCWqqFUybiWfuhjS5R8MSocmsP9BCXZT99zx1",
  "key1": "56QYXzCTK7VoyPrjuqusftBJrczF5jXY7UtSveHZokjkfSePep6eJMHWNiKn3byC4Gno8wyoQJUJr6fihsy8Yhbg",
  "key2": "5zzXnSeGTPAsPmsbqNDcYTM12MCNtRwYFRnoRdSSCRHukHtybZZKdtCzhEEskxnK5oHPxdiYtGroF1w63zrqGn8W",
  "key3": "2CbGMYFqRL7YsDP7k7oSJe9voBpBaHaA6Ec1w2UNheE2ERVE6HYi8UZRMUSffamMNd2ghTffGTSKYm7XX2jkQCvs",
  "key4": "4Zir74ssyq7BnMesNDwZYjCsccLEAxjB7ct28uVQfLRiaguvi8otMh9VheLx2H3CkBfWc96uKRMVL67FwoFmXdmj",
  "key5": "4MzsS2gfyH1p9VtAAsUwNhmLJnZ7QkksVQccKtEmfUTgaeraL5iuPWrt8kcYUyiXzsXvTPzheRrrdqq1Hvrz9UsB",
  "key6": "1VKZpoCCeNjgmSXKyGLM598zLKPDwiY4XJoo1Y2AeBqiCDRLsmwqTRyvyKTz4gGj2QiMqEB2k5RXLWMWVoitKsq",
  "key7": "4je3FiehQnz8riCWDfZBArFCrXaEZdTwrXAcpybBajR4eViVNpXUVj2qYiXngCUHcheg6gsFsASQtiDzKoBTbxDR",
  "key8": "2ps3Yaiz3GXSrn9J2tGJKLmBcrB9ksNeoL4n4ThsoFmtRe2UKfGKVuawBnxHCLyVP92YS8G1CsCPLbjMDPRKTey1",
  "key9": "2249LjyKLA4fR2hrd7JteDiNEP1a2XfEADx6kFA78LgXdyn9Byh2YwwFNYub5MKUVVgPaANQpLtj9otPkmaFZDTJ",
  "key10": "3aNqLzNbJbRQZYYajoVoNybLgjW315XWpn26P8QGTDUUp6nkEueRu6JD4Qg4ZXzCUsTSLJ8TdxA82tf42v7PiKuh",
  "key11": "5Zxvfj4Z9EXe3xoUc2XqbwuDhmxQpTipsWChumpWKPHUTaggrmtPhBs6zF765o6TZ5om9hyZDRQEAdQGLSC5ZGps",
  "key12": "3JQArQ87v9U6NTsXPQ1tdS8KjX3pmjsib5kF5xtwT1ekffAJmGrXHKccHVreHd5G3EvitrD7zaXnMGzgQcMn2KL",
  "key13": "nPCJBVPyykiTwcwAvbJ51zHNNzAvQ35Zzd4WG8DT6rAzT91vm5teKtzX9MeStA4UEZnJ7DoNkPZYmcyJ8mfGWu1",
  "key14": "4e5bfpw69VTGoMMpDJzUzRrEy9m7QGqTzcBVebS1J2sZ77vC58Ye5LNwjdBAgp23BqSkBkZiLeGSHhXJ2ZiMy4zq",
  "key15": "3p1162WFpUAyHYSzZ7jnLiinRypi8bKdmhNeaqZbBzKysC5mxEo8cKbRB52BrbExT93YZiUp67fJu9QDfW1ZxZDq",
  "key16": "4UKRGNADM3r3kC3eEp1WVpjbaS8XFZt1oZfjeZJeD7pGsbKPvRX1an1LLsrkQKUatFFJ6jPQZ1Q1dWJfY6HTnUYo",
  "key17": "2iBWztCKqq5uh7XGiBVkWKks57bzpm6MhiPfQADpQFVoD7cv8b3xqadAUs9iXorB2M87HBpiuSMmEqVXtDPExKzg",
  "key18": "4EmvDsHSD6RfsfBvNj2dZ9jLyveR8kdyF77134adJTPYfX4UJ7W4uNZdJRf4mtz1EVLeUq9NjC9zNcZqdGu6wsPQ",
  "key19": "3szjy9fAhPVi5TTcRnyAgYBb42Z4M25uKxpAjjMEE35iM5Q12CkeKxm1JzWAxyc4tk614nmA9gdsuF26HUC6wbr9",
  "key20": "5k6ctnBhzHSE9rHT8RNwR2VCwzsMC8raBj5antPQ9M4JocHoxEgtxALeJafAwYdmBxJvm55ytoQ2mt2CX6aXuSm2",
  "key21": "5dYTups3jNq4oPzY5VK8p6WLJQzUqWKAho97ZY8Y9sdxUUSceHbxHqSyTUZagx3RmHw1UweDmRC6CbwnLDnkytS1",
  "key22": "DACNfFzXmzm3QH8D9XePx2HzYTQdrpHx59DC14C6MRDSxWUkND4CrguaMMUA9iNtMTJZy1tmCC4SJTvZz4829oa",
  "key23": "26Hdcz2i7hMw2UEk4yPaRm1ULkxurac4uWCeg8BLCsAY6SD4GYeNTmK2UmNEZ4d556C7VbjwWEfdDSZMc6ZHyzde",
  "key24": "5YjfCQN5og96pwHCCD7RWoe35JsJGAZSmkwjfBtUarNyjHZq5poLXL2gK1uynwCy7CRZNrpGmU1wgnHh9WJczGK4",
  "key25": "8wHzPxfnnZRAkSopSrE3NRAzN7SVPUgTg6zbjVYCYZoskNqAzVN4rF6PnCgAk6Efw2dHQP5uWoH67TSXHAqUweJ",
  "key26": "3xirYZ5KDsiAVLHW9DJCz7VgMLNJjm3ZHg6bFC92HPPZHd6L4mpEMUxXudgmqFNRhhxVUNnRhyQSwWTVQcNMDJVX",
  "key27": "3BjHQ8smYP3ju7fVSdDdur8jWbUsD2hxwXzt9ZEcQbxqWsCbFoPgCFKp3HXMcKXxNum1DfiDGaJQK7qnrbwNL8eT",
  "key28": "5cPmg1SaTb5ZXjF2ujVJBJ69ZhAsbWNYa8av6kEhLYYSuRwKSYKfq4gjMkmsMY7hjFiyxthRNczEnw4vDX63aE5S",
  "key29": "3nJcV2rTGaZSB4AdDJybgQdz3ZfzmEuzY6wHMryLyXHVf2ncia2GnmpLpLET17uqLGth9s3PSqHjbD4Lr6kxHS9B",
  "key30": "5V8UP8WAKQVC7vo9MRXmetES6cvmegMtJvLoGifBAa9NBiSEkdZ8UF8z9NXj3tLfQuTF1VzrPtnxBRoBM3rL5iyX",
  "key31": "gkCJGNtr6NXD7xeEVrA86KrVYkYBvfhnH7EDvevitYXGxPAJpLECUmxFoYwJ6nj9navYVkrL21C1PmW9TKAJxUt",
  "key32": "pSc1FTNEXFuKVB5i8WheiJrjFj6gqXeHU18mRDcCALpzNAwWTumrkZC35S1P5o1kZk87odjCDHZNm1my7RiH23s",
  "key33": "2BEb86hbTEapGQJquXD1D5qRVsxifY7dqEB1aS3eReWsFPAxTsJF6iXk2HCnBNJERmErqo5D8wwAmnEQpnxVkERp",
  "key34": "2EuXPquSaL1YsCCJKb7AGDdZmpSb6PAfqowZrRxAuqKqGPQviTB7CzMX6wH9N4WYjV4e2E34wFy7fikrJe8LLd1E",
  "key35": "44cACA2T5BDkvAgk1Jdb8C1W8NswrvWbmBjwUTKHphzSe5egYWfrXPZHkrGo5CqwNye1gownrsJQfyGDW3cbheMK",
  "key36": "4qYTBwr5ZAqqp8zPCCbY2uv78P2XBkrHSrXgd5HjmUjJ8oyTRdsHxMxFvpQqt4HgpxDAyu8b6M9bC8xiKwn8J61P",
  "key37": "2nNneJQQWrtRxDRcwqagmFa1F6BBzJDBV5R8X2M5yhyZJsSQmoM9dQZiWQkvDxxgWpvpcbqXffa2fpXZm4Qjv9ZQ",
  "key38": "53u39MNrBEuZhvJgTGQVdJAH9tugUc8xQT3xr52L9mVikzkj7mLrU1DEjEzTHV6Gd6Uds7SE3vR8Usc42YBr2J9a",
  "key39": "31QxnWV4WNvHsNaQXs8N1VH7pHq7rQMDAMAviQEy22gUCqCCun9jyosKdusZJ4djSmjdPdQQgc8eVt88F9LE7eVY",
  "key40": "2rffBQv5baXnMjqUWwjLzu5pzEVmJK7RvRW1rvYYoBSpWK5pH4CWFXVodYNHM6yfaasyZb2hMgzcmysy6i5SdDoB",
  "key41": "3Ldn8PfSTBYLaC61qYLP6qgpaKamAfX6ZVqCow68m1uzMndHMJjBgU73uAAiVB7o1XoJzuYRH6t5hTEVKY2HBsVy"
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
