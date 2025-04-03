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
    "57iEyqEyz2HiZoN3y2KCgrKHAt6Kxan3JLkVNdtEhGCbJds58sRGMZcPykBNpBQAGurzr2D12FjtEicAmiWEMtva"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zHuzA6d7nVGmbN4xdBMGeE91JX6mbChbmoEJAFWouUfNgSQj1MHEWgZvdJww83iQXN1qaQGkHYnTADZ9siavs24",
  "key1": "5YFLTZx196zGPoRjPgRzuYdbzEUB9vPJtL72rQ4xvgssYnQDTMNCbCBvDDhwz2UGwQRfk7m28judKtpS59zZfjvo",
  "key2": "xaA4pjcW6B3WLLqUdE8HXELFN9X6Xzh9RQBmNhADjYYPwUQR2vYBFVxpwiU2jSdYd6xWwo5KjiLDqe9xCGxvw3G",
  "key3": "2Q5iMULy6kQutiFoBgxaK7aobrA24EjSeTQyXLxFUCDSt9sRgZUqqv2pYY3UtJ27zKko3KHrxx39RipkVz28ZLwc",
  "key4": "xyg9c3VVKYTq97a3j5uWBEKmoYrPmAa95YU4mMvF484NQMpULA2YM4rA8PNHJpSJR1x2R5utcNFd4kSi4fVox1Q",
  "key5": "i3vqA63W8T1B1a9SeToy5F2pDYrrSq6FUrEmvtMme5dZgSv8ur4fULndDCgVeANYeE44dFWrtH5Efhwe8LPgbYF",
  "key6": "4Npri96df4HHEw9YR6y9P1JQpVTcy6W3vBk6ro6Rnyqa5wNwTTQGUUJsDZ3uVbuvi67dM4U1oB22QA5YjJ6MBdCL",
  "key7": "9MmxryTU998RuCGgSb9Uaibs5AobLyGLwNkqyD5BhLWwe7kRAvPMFdG6sf43KycMH1sa5Wb1oYLCUYwaya92qx1",
  "key8": "3D2BhqQhEqAHHC3ijHLBnyjZEP5wCmFrYFYkttMabGR5YN3UQk8gxfJjZWByBd71j4AzHZzWW6E1G9DN7sEYnmN8",
  "key9": "yW5T2FkQvNhkPwCJZeEa9eVM51zY8bnvLhhyUCzcwRsnF6QX9ncMa9GQNWT9WmktYDPNuK6msovvXNt8vx84Jkx",
  "key10": "4uD9bgfUzAruPHFHn9srPECSHxMBX1uicMUAakYfJxEjiCvwKP1YYEEvskrvBE3xq2qzWzFAczckWSPxxztBUPPU",
  "key11": "36Dowy9dmf7TuamBCC1tZDDfZNpzJveLjazXURpSQPwQrHoaXcXrP8AcqZ3z3k4S7S5ZkM51nkz4TYBsLz6PGTDe",
  "key12": "4134U71GaGGzPZfjojRqhAzaXui1dWWa1FjcKkB7KgNawASJosUp7XTa3mqWy9QzCVHJjZ1XxXE2boR43gZ71UK1",
  "key13": "3t6VMQYKcYSqGiTASBUWmLBoZpvena9yNxWGWFTTCfn5JcUDTnAej4BMSSWTrvpqV1VnX8rjPF8vpfVtpxGsucor",
  "key14": "2548rzFD6k7eRiWTUDexBhpkwWirbZWtvQ5cdmtC7T3EiQCyqiScABG9SB6s53qaKszAkaE5tmPaSePKiFkwBwe2",
  "key15": "uNyxmtbB5gyyNEEajvu6kz2yZTuGzAskvagMP1i6nzMNwjxtFTL159V6TC7NAMef6B3MLqUDkfuDnmr2cBWD4WL",
  "key16": "4TwciN5UiS3K82rtPcebSHjrYiWrWbgmXyHKPKFuoyH8d2hd9stGUb8NkKkdgkKrdVFcSaKdY1TQyGCT89g5S6G5",
  "key17": "2wp37HdB4emqTQc2UjiJrpD7n4WxAtxKdoiqgiRSzuCZqxrNfFL6vG5a91483uqyXYJnTZnMxXfomFninJNcjcvu",
  "key18": "2bU2kCLjivvxXc7LWuVyt76iBGdFuYY4Q2sKChemSxRNMAiBJ5kSZwjmcb2XZq6FxJNRQfjVcraPxJ22aALhizHj",
  "key19": "4jj9GVHerFgp4XmZdnnCJ7qwPXy9n4bhNz49fcjrDEWxCGADHWqsEYgWjw2GALTNppGc9WDvii21tpDN81bv5N6m",
  "key20": "2mksHXXyBMQDCVU7F7YriDUbhxHtq1jBxSsAo3NigFJPiYeK6C1ywUzfAYD4Pez1cZSpLbq1j1A6b69PnC1g2Hxq",
  "key21": "57HSvTevLaVKfxWkij5fHffewLNe5ZLBgC7bMSPgff9zyyg9GN5qHeXuUerAw8dq4nPSmafNCpydeYs63dvokvqB",
  "key22": "2wJ5Ph4WizpLvLXHKPUJPY88WRSWW8YnVJdLQuPL38SSVn345p7DHNpVyJsK624n55Zk7xBxUgi5yuTnjbLHesFE",
  "key23": "4BcmQCm94ZEnB77TDUuBCeRAjY8F3Uh54UJxSMyrDYs9AaHxUCQbtUDaC1MipxgHsAnS8jrZ2vk1TPHMDf6Zu1n7",
  "key24": "2iZX8iGcVv1H2AqjCWHs89Jae5MLjexRgzeG7wRSgAsEsqFJbKYW1DZTY62DTMF7edGuzoEndQHzBMtq1L4MRWxR",
  "key25": "4STVSuxJD5zwjJnoQRM4iZJSmLZhrRX5fzwp1yfjjhVLb4umhynY33E6caFkcxH9eM1hLd8vqbELoCbQa4CNeT5d",
  "key26": "4JKr9R72qa1w1w8313DL6vez3fSZoaRuKDQpu3KCJN7fhi94wodRZsTUT1A9Bu1K3PdgwBT8ggMYWoxhtcZjtGKx",
  "key27": "3KJDAKj9W6gA4Hgud3V8oNbRUx9PcLn3A6h1y6bUgRjxAeUPTpwRcw7vjHgX3MjG4qAex7kM1nSs6BDcBoDkuv2",
  "key28": "3MRntsAeJyJxFjt8RnDHv1cb9oNFswrxURjn6avvbrv19cKgvuzo7NK8KNhyWzQziX33bNkM39byRbv2agu3CjFW",
  "key29": "5S588v4sQrR5PstXbYmP1hhazmKQwv6pkzkij4sjGa8gxaJELv4zMvCjusD318bNXEEWd3pNwMJkgaAbkwizZThx",
  "key30": "5WsWLXzpW9eVkkTvdSKzvhoEhYpPt6PsTJrCELbUthLd3w991vp2zTh1H26rSyXgjq151VmS1QsXEHM1gX1FZvt4",
  "key31": "T8znN4s7CStn2pTxAHe17M6eohbXLmgMYKtsJwi8GunmdsLb3W1Unkt1LMPGq3Nxxxb6c8unALRqqrYnHSFBpeq",
  "key32": "3bdf7QfBDZ5aX9NHBSwDRdzwHFLHNtxQYNNPvyeo9TKv9CR8Q24kHtabvntZZLogW8VZYXmyHr29JA4STDHygrr2",
  "key33": "56tb8Q868hRzRvn7qbd6hPzg5k6nuzdY6EuLBZB5cZqf3QZyxUNT4yabiDwH6zwX9wpT5U8Zo5Y16NaVDFZqpAFw",
  "key34": "YpHtJU7C2BZ8ENvipzY7Adbgnu3ZFRS7yPQDDxSznPNkt9kYAaKEJMLmPxSeMFNn5y528gfYSgpKh2CzQX8oQkw",
  "key35": "WbuTbn7BH2rnGjGuF8f15CZigWJjuGXvUkr39AbJ18fN993uZ8f2vpBX67iV7cJPQt6Vhez8VAusYaXAZcdQHxk",
  "key36": "2TStVzfAYDGemM3Tgqs21JbJ1C75sbbMmqSwn3Qo8vuYgUkMQuLg25nBMsKNbvhu6tWyDNTfb4kQDeBcBBjRdTrA",
  "key37": "4nTU7BUXxUgZ7PwyrpDNdhadJDHf8uvEJWi5i6AExndWcMEmHTn3mgM2BJbRkJJcigHfs1CsKeRaW8kERhkqWC9X",
  "key38": "5c1akUrZTKP4kmVLKgwxH7DRrzFaXNYfrMU85H3PqvjAitUEAtBraHHJbEea3Fca7TWteiGQyVm2QL3kMN5Lv51v",
  "key39": "5drh7Ud37dKda2TVQVWs31Bb3ePNKATVFcsJh5TXPc91XAdnYPLHbogUf1dMiqZM4nJc9HVnijKut8jBtkQXZtGN",
  "key40": "2HHQ7oXJzLvxJsPkfk3LJbqvSGu8J3GFF7zvVomrPwtLpxhbtfbwgp1vBqrpKxvvxzgDkv5qmrLfHCWDg9beWp5N",
  "key41": "3w7PQgPrfis42sysBER5mdHud7tuu7k4hTVUbWstnnAhx7FUkbCXQt5sYSePuduZgi3f88zR3WiN7oM635DJ1es9",
  "key42": "Tw6WwbcCMK1C96kdMHfDXEa5QZRikPSUkp61B1Nsf9Wg7UHEEAsa9ZfBnNzCuUPJJiaoFNZm1zTc22puLzSuq2U",
  "key43": "AZuS3apLAepdKYXq78N5SG3pPTpMaZyjPiFjFomfRQWUV6bb3wPbtDtRfwapLhHzcgjdhmkpQz7CLnWmSSYnZXR",
  "key44": "2FZW9MZdJHLbeMjhmYWidWXtev3zhYHuofSPB8vUyUL9bejXfvZPwHJwmQCkcWphSBr6vwPqtsa6woPu4fzc8cWs",
  "key45": "3enMF19KJJe5ncZBQ9vbtpXYQoUuKYQTxecpkbhEMzCs1ou9tJ2ottVVMRiKfkTAJxLaLMnfhVKkxmpQZYSXyuuH",
  "key46": "26LXzkeapi6hvSJjiqNP49a6bS2woEpDkLpdKErWEt3WtZGCnXnVjZ43bkF9FvAw33kUCeTGfhQeDEw9AVzCbQb6",
  "key47": "2C8RNVYzynvaRYequRG89ug5YeETY78LJfeCfEuo5eWsnyv83RPgkyW8Dt33wr2B7S1VSWX7sMzEEy3bjJJLt9bn"
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
