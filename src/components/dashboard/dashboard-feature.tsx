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
    "ZVmttvTyTGoK5kXXtU3KtCqh2MWK4gP1WSLzGNXwB5xq1HZFo39rVbALYrhxeLbz6749TkYfwoFJjutLdj193Md"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PiMji1N9keXMizrHLhJTbrPZJES3WZPDyHEty38ML4Lk5CE38zjCRB6PD1ZPRgarsr8RtMMneyJbsVdQ1HGEk6c",
  "key1": "5KUQgXjKzQCon94VEi3m8XLNBWvMSK4YiBq3TXxx7tfok53ewozfkn5PDUrbTcoTcEF2sYjrRtfGRteMzdGVpbJH",
  "key2": "5MsA9Xjw1oNU1KqAfNquuXHZzYgQ4vhM8jCv9PcZ7zm9u46xtx3ukL9YUCR6d8H5E5Fz8TRRuGi2NDgUwkBeGzrA",
  "key3": "4FrMchg7LmeShsyqUan3rggByFk7Qo1FJ4nT5jr5Zuv6qto8EMHuxiPTELNxqPvHBZMPwyRAWbTREF4JwFdS17d1",
  "key4": "2qvbkRMsAq6tG53cDgqrxRjE4NU4MxQsuefDpbJDRenDdDERT9e2XgECVHGLqT1nViaEXHNqArmJ1PqbBhoyBfzy",
  "key5": "28ZPVNsmUnDSzoBwsCDSBAXqaLKdPvE57YJgH5zWVPampnQ6MCiddk9zaec7Za8oJEuw1SwTZBDpvNHT8Km3rEb1",
  "key6": "MJgQrEKg8JJdtVN5NoRJ5PYNZEvqhTPQtYrKinGcJJjzeuirGLpZSNDMTW7MawmeXj4QWjMrhiTr5nrtC1PU4Sa",
  "key7": "4HB86ZCNji7X8B4xjTXzhhMrtyiycq1V7vJFuUwvVECqmfQeEwm4PDUzia4yy2GDy8CaJVUSHHh8dbQPUQjiuFwP",
  "key8": "5TChfhT5g8hAu3GJETubvVjNNmCCmCiQfUcf7xRqk7SE1mejLPkyBj3mgoRC2v1xfnHV2EVB3Z5xF1E2c5y9qQ3H",
  "key9": "2zF8QyGq9fA3AoqZHvEbt3TDDJRSHb79Zt5CLJv1rgEzJcxSLvtgnDTAaud7DcA3Ezqquk7QxQuVEX28sSash5zb",
  "key10": "w5RdMwArwfH4TmRmq5qZ8htHnkyrZd9cB2z1VMGZmQud5tybwhHGgbEaA4jfA5GaHY9HC1U2yabJy8hUYmc2snE",
  "key11": "2iCKihemqcHSpWgQv2LhCqFwEYcfXHVS6zQzvuCXruNGyqrbFDexNbmW9GP6V37X971SCbfpnbxQvDj4Q6D1Mz1d",
  "key12": "52ekD46NzPVbvYbEkhmPiGmwQaY6BCmm4LMG8g8ktQHZQrZLYAkeosRtQX84oTC9NPH1fKdfmGJhMRnXj4gWUavV",
  "key13": "5fEvWfybE7irALv2Kb6qSorUHLg8vLvrxgVEgTjviJFcEDiiCSNXjDdBmChmPAnoCMYtxiTTVBwwafJ9R94rDqn7",
  "key14": "5fRNE199FPfrpbKf4TDU4HN2fafSZktGeRNqTY8WLK7iE7514wRfgKg2E2dnu6Jdt69iZX1Rm7K7DCh23vCpeMG8",
  "key15": "gkGBUj42NWRe59btGjdLuJUi1EtiAjs3xcTmvqV5kWGcfjfJn3xHNDbKiBjgTyZVYNR1Q2NRPVPsf4J5Sx7ud2N",
  "key16": "2EFxo2HW77Y61Vcjr8S9qEw4odaSZLucAWGM2qN1KzRJUpo1cRpzNcwgbjzFa1CDHbTw1iwoFRyx9upTUNtPRnxP",
  "key17": "5ayqKgNhku1ReMGKAuX4QUDJQiYN6Re8bcXkKmREN4Fgfk25482niittLQFm7FFVxdSGNw6XEkHKVbqGbSAXWUnA",
  "key18": "29Vuceo3djEqq7FGstTsYaSQnkfLK858i2ynntECeZjLBRDTsxymbj4ud8CCrx2f6sM4tTezdPssH35eHh4LDbPc",
  "key19": "5X5hgusmeLZ9WF42UP9X4BrNogHyRcpeVAubdfwAFRTU4dqebLvSB3951kAbggGFy8sKTWMEJE4xf2qodUxBT8YP",
  "key20": "2DhNHPWprECNsCk41ocjU4SA8mKhbmfzkHsgHX6Ee5FqDTBnyyqnFWNnw1ojsxDaz2eqWhikFqtoaRscNfTXrY5D",
  "key21": "2roeLfYA7rdK9Gx1wCX3PYroG9qZi2SUhwySTyGdpSXQquBR7TcFJT8iRA4WhJA7Rx1qTinvUt9pXm7GpetuofDH",
  "key22": "33eWr5T6eUrKgY69AQsmvy7TDy1P2Rd6xyAaVVqGLApX6KT3m92sfTLthey1JWpw7H9yM6aaABkDqr1NpAaUS6Yy",
  "key23": "37pSW2syLuPA1tVWWqHC2AVVQnucUVFFJvndjKHK3RWdTBRgf6A9v8Y577r5BBoREAfBehJuGWTncrtFfVopQ6q",
  "key24": "4RU7yL85uYtGgbBCohJMnmJvYb1ACVJ1Kps651c3pdwwstLp9nohATDdDbpzGQUy1XWGAoidHqYHvNucMh9bYQKA",
  "key25": "3tjtaK9qe2FKjmxjdQyvVP2Zic79j3kynv5Ts69zwnTLEpS8pFhzoQvLux5T8tKPsAvDtSook9TvUKVJZfbErkUg",
  "key26": "57RJRPPXCLietjQ6R48XpLv35XVXYU5Z6cF4qhi7xfUUw9CrKp63HmNSn4Teb9KWEXr3MviNMt94bZc7qQtU5ssZ",
  "key27": "5HSaTVEbJ9PjGFucGj9P2rKRsyUrs1nP8jDAqEJN4EEfypkHnYEdzyJYeVjnCfaVYNGyis5LBViXuVBNeapsViZN",
  "key28": "5Ndtcb1Dc1cqZNTbxzLu9nsKgL6eSa5GxBcmXe4JovqfH1GUnGazcfxZ7ExsMG6abju9shN4HJrfYzPDjEGGu2d6",
  "key29": "2Yiu6GLcbsGUangz5h8SiyCsZ4FX8TSffcruD7dNttp47D783jLFbN3jv2KtHaAu9CbmZgtVSpvmnf2gUYoe96ir",
  "key30": "21eJB8dyTDWXGGFKHnkHAi82pqg8j7pDumSDFk6fvW99DZmzXB2SUF4E9UxJvvNoBwdpdLAafuDUTetFpVh9dSYL",
  "key31": "2osYmW8kaLZ3RvMfWsayQZ5QRddBUGyDqGddYMnaHamtn9t4rotnvfS38XdQpszi2SKonxHgXKecbPVqQeNeQFKX",
  "key32": "LUkjed36dE8EjMqJYCHGu35UJQYqiRQABN7LYT6nsyKAnH1PrBrQXrVynewL9LNjLkdsXUichMgawzqZgyrUcyg",
  "key33": "46wuP6ocWjYDC5yNWrsZ3zHr4e98o89mpX79GncSP2Ke53UCkVkEg6Sh69ysfWZeb8zZ7P4MAXKCXbaEp4UZTZ4G",
  "key34": "46papGCwL9Sufx8tS6DEtPaMA2y5hzF5MvybtBqopfs7tvfaDdqiNY8k77KX9yRsyD1mjiQoy9r2ZvJruFR4J4B5",
  "key35": "55Gqr6czo6e1hCdjwYAQ2ugc637qxjD1cUTouk3VqZCsbA2VrcHRokEMLtF8dvq2KVVBK8mosixfkwyWubf64CCV",
  "key36": "2mwuB3ehKmupwSxQYciV5NhxmcC64Eikwp5TwLoY1hwfmDap1QzdXewesHzf1YHWSAhNuqMjuKr8qYuxHj9qFo12",
  "key37": "4BSdmqbQAsCA1i1vrArjinGbxwL7PxhfhsPWnNcX7AzV59mr5s7NwzcmzQfmsMZpDtdDEZLJQGg1CMuwM3BRgse5",
  "key38": "3MxEB4cShckJHRgVHVJ5XfprEbKVxfTcLxNXvCP3gk3UYAe2bGmgoC5XuCTntM8xNo6rWKFCTTjLTU6HoAbGE3nM",
  "key39": "5HF7LePWCYvsqHH1KgoYgoAfFzq5tCXR8UT7X2zJgRQA5wXq92XzxKvmuVm2e42T4Xa9sUdTV7BxVKUoE7v2yEVo",
  "key40": "34owVX28i2atv7YnLiqK7w4BhS4QZEo197mGUPLSn4PBkpC1q2pfDp3n8zGnDytdV8cYtdBrojYb8DZNQsqKxktB",
  "key41": "TYBsEgLsNa1VY2eo7MUFdn6PyhiRfAoHQUCjy4EXBY7B3L5af593EoazB5gS3spxXKFGti8c1ZC7CjFaRW8SZD2",
  "key42": "5wQo1u1f5KQXkasqgy6DqnZVmeqvXobL2TBhLNPtUs25aLzwB9XiB44ZCAhsfZuD5A6L8d5WUrJ6WVSP8vbkPDsr",
  "key43": "8LFxX7oPHyMMQNr7hrYf5b5GgazGsQr2TyXh2R3kRvj6vr9kP1npUayHb3Rz5LNfRG8CPYszWzo1z3MwavZvTUx",
  "key44": "HqUYFnCUmkxKt4V85JZPBY8Cj1Vtj45Zyhf1iQokKAM97cLGbQdTrvypmH4MFznZN1sDLdgAdokc9rUrFrHX2qn"
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
