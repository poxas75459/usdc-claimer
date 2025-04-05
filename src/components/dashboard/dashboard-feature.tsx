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
    "5ywQy7AAjkqDNWVu9aefAAazA7gMQdLFw9fKLf55nJ1J49KAXoJRLxo5aZD7DRu7mCMGEViuqP7kfnvKKMg3MzFX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DVw1wo6jeDQz5DRX7Tm8yShKr3oH8G2ngJiMg4zEagPzvF52wGYGcNhM1GAxGbtchVBd6Q3YKy2PXdRXga4Zm4p",
  "key1": "4ZEnvpd3usFQEuoEMLMiHw7FynKQAWqWsmsam91k8knNcCrZV2UBPwC5cAwV85W7WuRAfYywuaXNDDu1JRYd3XZs",
  "key2": "52EgfvDcZEtnQkTEkomQB1ZAnvhWgd3w9KpoyeJCmsfed3ECpCVB4pRkQb29vvsECZqWP9tRpz747Gb9yBtd6uiJ",
  "key3": "29dxFGeVmcSv9L2LwUtW62m1eQdktqKdUWYgiPi64XRTXV1Vf3EqfKP1CiusyWitqRm71xR16viShGbvyepSYMKZ",
  "key4": "vvTEDknanswwCJjsYQS6rz3vKs86EGdw4phUaTCadrCYBGzkm1HtkXmts6eYqMAc9UEZVZmJgzB8zF5ZqHMDuAS",
  "key5": "5tMCg7o5dnBvzf392Hg5TsM1ErSkJokkCakVHqviZxZjuV36wXhGEs8tUr8zZnuCEYVNchJdx6L9bMi9hCjeHje8",
  "key6": "Lm4EjrzDyxYVz5ivcwCryGpoEDj4WWWC9aJvMGyXQVPfHtLX5fYZvYL3XkirBZsR6shwo6exb8UV4URZSj7bTvp",
  "key7": "zwC5xPH7ud2cTNGFDFPByGriqEpfrjwY3EPQtedqQTahDdt4S9NzFWQ1RhvkNyb4uJxkLPrWm3uPyjMw4vdKmcR",
  "key8": "5bUxwJWpjMmjFxEDMiMtjjpXMAzMVvayCGejRXRSbSQtQBb13kiungNmBkix8eXqtcZ8PSpThBYixxnumuES2XRk",
  "key9": "5xRQq5XwCTW1fh8n3MWEQC1ajt91s39cmd8ZRe6mDnK3hfjhCkmGv6Hz6HppXZanegK33yTsRV6vgaNNL5BHXiay",
  "key10": "2UKPNndxYRpkbRDLrx93kusA3PE6tkCnXt2G7K1GGgrwrSVBbVUw1tPhzZairBC3Q4juhRnEUkCi5mHhrjJGXyxR",
  "key11": "4jnxVAMgU6P5XXwETVkpNjwaBq8D5rd4LL7bV9JX4k4XNC6EjidqNmR3XA3TGgQSn7YTXwY4j1sRMj75Uj3qViSC",
  "key12": "4HikPhFyethTv6ERbALpPpATSq4Tov6fdDF4YDrceKvdbtKeQZEiWbbyFpdbkEruiLTJX4CEZ1xqjNAvT6QSexYx",
  "key13": "4gcQWLBpkxNLGu1ZvAGiMuTox4Ns74Tt7WPj8tAhTMcEndeprKQnEgFj16pZUfu7Yd8C2hS1ETNgk2svd3p5hJFc",
  "key14": "64rFr6RaX4pYCaWT2rkBQK4ELwjjSfsqviUuYsqDmkaB1JBnnYbQ4QVALkrULVKHXsrNPSCeS9jYCVGqHKx1uDCS",
  "key15": "27mDezDnZExJPoemczypP6EgZYhMeZLkotDxsugwacHgbKBLMevqsb5rMwygFJfbghR4sU2m5D3NRLKNEBLZeTed",
  "key16": "mq9GM2663SXR5DGdaED9ADY5ph7JuLQMhNUiAmBGyJyojLiPNVEGWp62tHa4iZBMzTCC18a3ytNdbAUASRSRujD",
  "key17": "2PHE6rhpt3Ln5rLAPu2KTGcvbsPjjs2YKSvHKkrBfSySUybStS6U2q38U3kVAg3zeLsnnx7mRjP6ZZannYzyf7pt",
  "key18": "2SSt7861eQD89YK61H1kcr3DSy4Kv1Y3Z2nCdGV474ApVwDwcna4s8ihUP4HCf5gxLaTZfskAdk9SaYD6jUwQwvq",
  "key19": "84MocBELFKLuqG7d8T5eBRsK8Nn1sn76GMSbGDPzW98xmaDizCvHEoH2iEfZVKSmG1KpsCu9xKM7kAENihX5zRm",
  "key20": "5aRs5RtXAm5o7gZBkQXMqkREX27GeEs1W4nvJZ93S282fuQvXT1DXSe5UGxo7A5ZXeLkC37ggtvpzr3ksT4LmGc3",
  "key21": "wjEy3aTghDGBghn2nfsgA65nPWoCrYLXtudwbcptrLNwMa3oTnL2Lwj4kpbyK7ndxdtyV2eEwBN42HuS5HshDV4",
  "key22": "A8hxZcC1wvrCGPgwD6FagBW1WknFcWEm3eeqUKLEgNDt1DGeWxTm2qnUhsvxbkgmX1nL1rTvGjcmrW2vey88Xij",
  "key23": "56iRQzEQuBRLag4BsQjWEzji6p7ouDptn1fF86gzi3N62AYM1cpjdAJonw1wpJXoiqqNj2YHd5EZ8cJ44ivHGRmi",
  "key24": "26tXPEtYkxttL1EPnCuJQpmhDjsoRn9NvwQUKFgLiA4Gs4BdcwCH7qJHaANztr3PmMtmWr6awDhvEvF1CKMRqJid",
  "key25": "534nZhZHGgcTWyTmRgwGTXX28QhAMZNMX3DWFPbJ1SgLyiZc9xrroHxgQaKb9hEBUH6qe2oAHDL4pdvaAH1vtS6d",
  "key26": "2EhSgHzKmfD26eczuLC5kY4BCEC5JxXrTRSXFue6Kx4nMnJugqtj6Ab1A1ovxUpRMPZwCy7nwDUdyQWZMrK6rpwF",
  "key27": "3TejEn4AsFw8hMmWiZ9waTFKcMSaYuYhg4eaNN9oVUJp5FNGVZWyXKEFWrTR2eSi8WGQiX7MFrVjMiEPY2jvqBMP",
  "key28": "4tu3jqesnsuaYfxU3LYWy7woYG6MdiuXtfuXah6JWznWCnCaB55njLSPdGq32khLAT6WQzYuKHgv8P9oZquChbn1",
  "key29": "2KMqtFUFVMYA4Gka6jGkbGjLE7rwAvVdGfWdpdzotgU5qqv7zyXuWDTwjKpJjkStoNhrFGZqB2vDWF873L7Eekq4",
  "key30": "3iC17fGE59GVdz8P6ih3q8pvTUsiA2CJgppdL3imcvrhF59z7gCYTBg4PSx56iPi2tLhktB7hju3pZMy656fUJbj",
  "key31": "4hTWJF6VyboCphbo8tMMoKQA6ct2ewxnQUxEKxkVjxdkj4WbRzV3a4xkH5CxiJXDx3YwMYBtJkFAwXiy2wEzgQ26",
  "key32": "65YN7jMewVsxH1nwVFfGo1to93edReoonoqmEM53iaksQQBadZ4x5qGUoUq4XJQ6rwiuKe9VoQYPoYSUNSbAWzvA",
  "key33": "3FnKdHfQHoHgzsAinLZimpXjAUXwEmmJZrxexAae9U4D2AKSqJaYKecqVQUjBjmDZSKqqQpMzEKHqPLc4uMA3iJN",
  "key34": "62DLsyVB7DNAvkm1pQKHUb4TFdBZVBnEw65zv8zUWsiekCZJX5R1oFouhjo4qiHmJ5irhZQSAdiUmngz86YMypju",
  "key35": "dsWvvzEKzhYU5RfqaJCeWZM8E77A7Z1LZyfVmdErEqCRjHdozDaBzvLDJFSVW6VnymuvCMS9r5bKfWV73uKj2LW",
  "key36": "5CdJKfSBvZ9JpVdM6k2rUJD3XabyKAAtWgEQTBUMn7RJzCBAsBHN2nNR9biSArZgPyNDxa38VL4oFFBKtsUAgkXL",
  "key37": "hDgWCNWcqWQqPPQtyQxeV8XzUhEyM3mZJX8ow8HuFU4UW1amfmA65Y6r9ZZ3AXc9k3gRZFB4ihJ9eurHjShVdGG",
  "key38": "3Uo2aZ3j5Z2gNX9Qr35xU5UCmp6g4ycFFA2DnyZxLbrYbx7GkrA21SzCGhLdxdeVUNJznDx62Fc2MF3hEdprkFoc",
  "key39": "FA9kX2keVMEobnM4jfQZupEJjX9FFLR3owUvRdFVAzxqakJw7ocdP8EapByRZc1q9HrfqDevWyZthA96TzofMjj",
  "key40": "5MQy8HYawtyiTJ6wCXYBwfkom435DkQeTxYgEG3MJWP9Af3Y7Vqhn6zLC5pBYC9fHwPyyX1FVKmpWpaoB21Ud88V",
  "key41": "2PdqSmH3itzzRaawx3ptgTDJP8jWSGe6dUndzKBoXyVqoqMv1wVBtcUJ2hmMTTFbMz1UWJn6tySbuUWErPPz4ty8",
  "key42": "39emsLgwCNZEY9ZF3CZA4RV6ThwnU1P1qUpFWxnWVtda29kDmUkqogw6m3ecNHwzvWdL83zTMyjw8VKRg4TsKm7E",
  "key43": "5guSKxnTtEg6KwpNbEwFWWDyEE4VrCDnFJoAbnnsf4JH82ZfqTaK9xy9fTyraEQXdQqoCo2mXgkDW2T865TVhSug",
  "key44": "5pCMv73BiYyi8EheoKfLmgxXLMamPX4GmmTSY7TRYCBWur2gAV2JLKKpHgtB7CsVFu8dx6sYBneu7cgL2Uu4HARF",
  "key45": "5wSxcvoAQALFy3NuofSZoT93gKbbPhJMd4oQmDUzx4wcMVk2rtsrviacyB3GfDf6NTmhkEsBhZ6yBEWLhXXXeruo",
  "key46": "2HJ3zHxh15VR6nBALXHE3ghjEjH9JFahC7xi6egyA7MuDhupQ9HRHDWtprUs36CQTBAva1Gix5dV5HBfgSKhDbbA",
  "key47": "57jBvipXdvNck5r4JbLnfMds1g2rxq9jUtTCm9jYTNAZDwbAAN36Xx2L3z4Sen874sokg3SYsJEjLd7dy8E9w9fh",
  "key48": "51jY6U5AnkCdDEAjXwDMEzgCGnFto74FLTELCpRmhfivky2ifuNGW8e17oSJQ6AfQXDfLUd812E5EQ4XrPG65bau",
  "key49": "4JWLenQNLFyCVwWGUQmaAis7VzyGAf4F2FoFMpzNTzd1ch3VxFV1Yi4EQUiu8arb2nWkqsbGXfXykvF4JSKYwRa3"
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
