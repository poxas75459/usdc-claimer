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
    "52bHLEpV3n1CvNHszA4Aa12P9Z8xUYe2SJnqqmTx4suAL6acu9LhUmYpi2o3MMDSPqQbBv4hU35tuT6RM3vqyLYD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FN3cELUr9sq9r8ZMCK4zdjvFaktFmegaPsnuHbrdDCh66mTtgZnVGcjEdBk6e1RELPeSXvYrLRVcGNU4h4hy4B2",
  "key1": "4ZV6YJBr1ACwZ7bNGTZJiLNotkoHfocDaKcrBZnxvXvUWyTCbKNXiQ42C6fwtTbfXTWrhPyUyVVbX9A5Ttswieof",
  "key2": "377wGrcXeSYn7unu6Q9R2v979C8tDUiD5oVFGeYfvuLM2C6UR1Jj6KDurMVeNxBpMGtfEqo1tPAtA7ssWSMYYU3x",
  "key3": "29TWzP8dyztcWSBxvfpQdt6g2KY845NdTowG92QAzYQfLCQ82E4aeVVEdurQDvXAYxnqKwq5JnTMpWmdcVSNK8Sc",
  "key4": "36oMGhrKAByzRBBKxE2QX9XwnZAtcKv2CjJc63fA7nQDHtiPfQcN9DtNruHtcMiug9bJTfpBWE7MKzJaAezmcNzk",
  "key5": "5ARR2bfmvQCHkn2qua7z5VvtK1v1ykvoyqnCC7DAbUpyzzTqXrTGp9DWDWDyon3ZdzHqe3mnNbCRctjECq2XTV5p",
  "key6": "5qkYpWpqCTT5pJv7cJRxU7jCfFEGadztZhmFdj65sPdpaYhZ6o2CUn8h1GKZ1NKKVfVgWTTnYsWs3srVdu8XC9C3",
  "key7": "5ZaVVnQpRcVGNMzuipHvRd5gnZxNRi92oyQn35uTtgNjknRtFCkH42t9fC9VeCtdKuNQhWwCyWcWM86bRAEyBiA7",
  "key8": "7re9dyi4ivukvnX1LkWUBh8eWPJr2dGbUS3tMnw7ayAkHnPKVBbQGoiTrpP1LLxE8hu5ahG4Uru8XRUZ1MArEBi",
  "key9": "5Y1D9EPU1v9Xp71Hnpnd8YAHTGfZ933RTb5zeLoNWNGeZygdkiwqasqnZ2FBRy4bkFjj93CAhFPNasRnFQeoLNA",
  "key10": "233VHEng8CG7Lbu1u4yAhtghWar4TzePSrSKXsjnPnudfqdpEAyYVHCeDobBkf5m4weh2P3bSfckZqSUj2UmcMwj",
  "key11": "5xdzN12VMzoWYjL1ZWr2LRjXJRzPXQoxWDcJZqjkT4Gmmk3DctwpVsVPVZK1qeT9sGMeiuziCAbLnSSfnC4NRbnv",
  "key12": "TuoadjSHGWkvRTwiVD5Q1GMauPCYcyYdwPNPy88ozpZ8bD8Ts8W3biWGQw1CP8bRdyREbnoBXGgRAQUoEbvGACB",
  "key13": "2J3fBRFSDnJDSQyvvFF3qfQTXiziGSnXwtkcTxRXwfXZnEkmk1vzQM3ARi4aSCLsRgkCwKRY68a7tY5oM4A4yk5v",
  "key14": "KENV197DYp6zD6B9bBgn6LCtwLxihpQJ9geocHeFrCTo4ULurvKdkWuDbRBNLKkBe8k2aAkZCAr7JdEa92sN62s",
  "key15": "3k8aaZf4nUVeLkHnZqQ1XxkuVQbZ2gQ9iM5NHWaCAWw11KK8MgxFPySAEczKN71kT4N4ssgJwSNvwwv8vWsJbbcQ",
  "key16": "JPQBrNTFfL1yuSqdgegpxo8MRjLsJexXKaU6EaWGMNeNP98Gc8xMTKXhGENTCNKLNPxgo79LZSgyYRRzLTBJeGM",
  "key17": "2CRFrxUYqb4o2ed2cMmUSWzZC82Ydc8A6jDMmPC2ZXe2WiBhqWQN8h4cRxJAdprjgBNoHxrUfVd1apV9tk3Xnjmm",
  "key18": "43pVywJn7FDagsKW6sJ1wzv3EtZBWqwxmiiDpnQGSZ1cnGkgJuqEspz5mWegXkWAKhJhnibpy6P5WnSgfQozfF86",
  "key19": "5mzSPPhZKGZG7FNhbiprUDnymJbgS88wyAwDfwxRiPKp4GhZjMhE9Bcp1Ncgzfp7yUAZLfbeAM6xAPV5Snjg5aHg",
  "key20": "NvnPzL2JC9tqzGBvPHQzA2MhMmR58gfFXpGoZBCdiPc5aTxiuHS8QKcQeG8z6GQh5fNgxgUPja2G2X476ZYhkYV",
  "key21": "z52WNoFtnbFx6mHL9cZx4GYyXnD3YdizSTHUs5Pnp2jv6aMXwQ4JjuyRCLjggi2WZFaPPX2h9zZTc5susn5E1WY",
  "key22": "38H1xtEi2z5SszjPaTcaNTYSz69F8DVJzUmcC33uiMBz5Hrq9foDENrC8ytGtokm6Cyw34JqgP4WbPtTVJzdNnXv",
  "key23": "3NYk3jd3Da3y7MYrkNMcjC9sXetUUfXfSKdJWc8exrUjXZfVbLwJbqrhoZXsFw47J6ZA8KFUcswoxh5uMC4MRrBW",
  "key24": "YjBgkk2dQ8qds8ofMN5HBHBVCDzwPWFQRxCSQf72qZc9HwqhKWrcU77JfvtY45Cr27uTfm5NXyAQd1QWU8CMsQH",
  "key25": "2tuuLs2RQnQPiKEqd2sqvKZF4XD2vBtei4wtmVpDPY6HRXosoKqk1uJPJ56deT8GuvV8Fev8dqaR7MjjAUPUTyPo",
  "key26": "2baQzfMM3CcAQAMMPQhoVd9mLqTiEq9zqLpaJqN3iemB9kfaoDfdjq1HKbA1ZM8Qqs1j4ERimwZ6Wc3ejAZ6tgM2",
  "key27": "5tzULw9Yp5mXiQWkqP8ZBQTbAogdppyotyoE72dLUrks9oR1Dc3qFPuiZBZEHKXz2CmznNUtChUwi9gnxdgLuKQK",
  "key28": "4nyiN8EbU55DYyvCEBL6KQJhbbRVJKJB9cPni57HTvQhxcBYeHsZAXRZtneDfVNL2mYR5QrRJgnMavVotqRUFksV",
  "key29": "3BUfMv8QBC8BCYQnak3apngDRe17GC6sArCSDvQtDo8PpJE2thQNfVfeYC82sfMV9UGgqVzzmCaVAe3kXCo9QUs",
  "key30": "kJQuA7aSsaiEekvYEpMbmGHbL7FE5jTgohPB1PWdnAxj1ruBHwsdfBPWDj9XS5ms9nfFKt3H32KwVkt3qSimYih",
  "key31": "3FELbubFqvqotkVh1meyqcyMg6U5TzWHhvvxVtt4j6ynt1ziizNB5J1MsJ2bqyAn1Apk9DmQnvg5Jc7npoWTKEKn",
  "key32": "36fNFoqpF3rRQ3ddjsQEU9AJMd7HmtgTuFvBRY2ZXz3SqxUSSJ4V6QwatUMnX7iUCJjsuPNZJoZwyXaDXBebWzzZ",
  "key33": "5v9f8nX4BjLg8wypCuhmvCP8EsFxsLGULHUo9Jzx65jqhCVTpkMMAns6ds1nmdcrhPi7eXhAjNxuWMjbTaeAv9Wj",
  "key34": "2RciykZtkV62KDvd1d3vCmr1Pz1LC9AKqJwkupxBDzRAhWmBLF5KDboMdTQ2qoT5WhNSkxgWMb5ss6Xxufdmto1P",
  "key35": "4rjofqSoDPDPQ6Va5nypJcCt9ghmuBQyAfU7orEXZ5Aibirusv8Ebbutk6xrXYuG2ez1GrjdYnq2mNGtNsppezTC",
  "key36": "5AnH5aqvc4LyapYVcwDNBnDoBjyxwf4NqWb66XWvSWxNun78ZzQEHHC4XgH73qJnvqwQWW8tTYvRgqnUEgGuWM6A",
  "key37": "36546oB7tDJMGB8g6jJaLTvTL5RnY3GpsizaxvgBLZuNtbRmZZ2jjpU1jcG37BFXMDixxVkY3RhjZijp1hgBfdsT",
  "key38": "4AT5eToQuiyNJ6jWq7pGFdv9CPtzedH8nduhCMNBbqzZvSGX5PE5zUYdE7QD41vPAKMEo55qqAUhhgm1r5uNC4o5",
  "key39": "64BEk1sfVWc29YEvcEeaAoBh4eSR2FmBWovmpqMeD8PE2VdYtZdfNdKdSyJYyr7MW7TDVC8xLEj298XiDgxJJnYo",
  "key40": "4Rd2cHrPobVLZ1WCwzNfqnp5rs9hLJKLgPKFbmo3Tau9mmi8RJoNckBybpdcDzCx2pN4YHYjFsLtKCV8e3bTP1TS",
  "key41": "5t5VarjhKx9zdQN5rPFtdzMjnCuQX4bwv4ysw2mEPZoJm5Hj6yBU5AAUiu2xNS3Ji7xjAtSYPx4gSJUgm9vi8r1C",
  "key42": "5WNm66jY575awkZbhNKwPHtj8xTeW84gHJ84BBN3qVyWwnzs9oG9vjZ5F57QFTpy21dwYLfmt2q1eAYTPYYM6MYw",
  "key43": "4sWVYzJqHe4RqVPmhY14A3G9aaPqtYyu6pHg2FHznG1ERg7Sw8mWYbwjPKbwgFwMPqTzLCiiaMi5XMdnpH7vDBfV",
  "key44": "5ehkpRVAakYDbq3X5YSSwuiHXzoX7YyWCYmHTPbvKjLkB8VY4u7i89HpwgJungJ33cBuunUtdzxENnuFRdWg4vVr",
  "key45": "m8VZeoBGS1MkCNBLgWk67VPrizzsRBCUxFthcL3CxRbFnWDz3FWZQMsE9roE4KnLkiPuUMxcazyvjkhyVoPvaG3"
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
