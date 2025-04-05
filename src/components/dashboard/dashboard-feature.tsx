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
    "bRURf7FNuHt1xi24AkTYWAjsBjbBTPppRbtwX2MQBRki71XjoMALPA9DG5XixJgb8yEMgW4tmutVzwbN5cn4Aaf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V7rPnZeRD9B27K2N8UbCqLGAC5L37B9Y87obqtgdpzBXR63RH2EJkCs61SeqH2jXSPizF5EdrXHwm6J3yFgKVJh",
  "key1": "DrLEZYFFWA2iyaJY1xtDJc9x5koAeWVe7waLrxDw3QG4TxsXHDnLGAmpPonaHUKJ8gNSE7QWt1jTf2gtjs1K9x4",
  "key2": "5WaJLcQk5WvjsgpBEQvE44mGa5RRwhctWGb3iXmuGNY5DtfeLLaiKvBkwTTLKrNtdGAy6CvmxqVptWhqMytbyASm",
  "key3": "54Cgjm2ndYbLq3YYhJwSq4o5fHJr5EKJv6cQGm4beFXCrZa2rr96W6ruo19bD9g7Ft6Hab5ABURoEGUyDPmK9Vgu",
  "key4": "z4yFt8tgXL66zbmg5rF8d6ki2tiC8NXxjZK1Q9bSEBtfgT51ytVrCNxvc1ViNQCWprrHcGKjCjyREGcbgV4f9yD",
  "key5": "4TR3XYLRYMQSk8wigeRNm9rBiy9fzByfiz1S44Egpn9jCzUze3rw3WrHc7iYzCwccdnK1S4kJY36mF4gnkTTYT1u",
  "key6": "2ZQZNRDeTX1v3SpKBu5pTzArS7DwG6RZ5jpkLPU9Rth7qJMKHJ36mg7UAocDWJXZYCfKSC8LpYsw5iwTutyWtBbT",
  "key7": "5axFvtxVaYhCVK9mKqrsW4KVuTD5pt4tMcvASDwac8q8Guf9gaMwGK9pkgbTVLuPssYjSqbWuoSySb6vwBTX2bjx",
  "key8": "4oEKLEC5nVKRhLr4rPVE5q9XBJRCZFhoZtsUij4doxncZq28G6ucoKoECf2ZwTGLv6efWhGBrstbbdWeVnFoNLwD",
  "key9": "3f2ABBmCD9UFtT1kPev3okuncQru9Xdi8qbeRGgEA5tLZ4Xi3fuKt2gxEJdpXtecZkgTqpmK7z4JCmnqMLdgRPe8",
  "key10": "3BT5iUBBgcJ64apB9vicB5G95U7Kkj1a2SkejGU5kaqwxqXEuq2r1ECcAcjjeKMnbmyESmw6QtZzRUxmnw1JLTVL",
  "key11": "giLC9Z92XLbepGhHhFBwwEVNz4MjhzabBX4ZWR2dZc5E9StAYBFVH8g2twePe745w9gGAd8vnePZaT7Xrh6v7D4",
  "key12": "5SxVLdC5k2CyvQW1eNDLbGkSC6XLi5Lj3sUJQ7H6tU7vEzqrdRfnx9nYuBmAoiKjDGdtvyw4AZBah1CXJvDUP2f4",
  "key13": "PhaD7g5Y7x7vk3S8QmLhwuCCUN4VDUQEPsnXcBGAsz9iTAFepNyUEpuxmvt5QhXs2FaJBKEtpNaTiQ2DEHTBRTp",
  "key14": "22uzRHRMj3aWdHMNLnbT2JSNK4ZWyZ5YrRws5Sn9LTr59JkJ3zoHdtxwEFWnKJZNLL9Hvd1Yd5XrH5BjBhkEiYaP",
  "key15": "4aNWveivcuAjRs11nHGweBpSgzzfPS2Yo59J8Epztt9abqsMvPdsoVuv1KVzMTepdqNkYNKwtNMd411DhvjY8Gmn",
  "key16": "4X2Ke5PEKHC8gRuWVVPUEv1MWoSr4vpfa8A1UKujqLKXYB2ksgNiNot7iqwMqMQm92UZb7aMRs8bm3GQxMnt4Gd2",
  "key17": "5JdSwMiKN2i3M5bpJ61suLpumvLc89hNPvrRrfqUVVDdx8peDTgfntYn999FnQieCuxKRFxwSK7D2QynSWTwBcbn",
  "key18": "5UA2miVhC1EGxe8Fmpbsoehz6sp8h1HysxaCa4pt9uhvPoxLmk3wYPW9vBZqFEk3nDpxcYM9ianBTTijz2MBNzp5",
  "key19": "4khThBhrxHFnTptjXqS7LR1umgLQHerjUM9L9s1FiJWg1rUH1H3GwbkNpTTdQ7qjBNwdAHiRAejN8imRNE8G8ZW",
  "key20": "3pTi7YJzBo5ZzJML6ViGZnmNreUu82zPQqRzuDrB2eP4GFs4zeeVDDpifcqnKozWwepfQD9kKYDdp3GMxoFWW7kv",
  "key21": "3bu298hFNy2uGyNXXUohbUcYMkhw7L4ggq9cTfUgiKHKqC2poPb4aBph3585WoTv3vHguVPLYKGdTs8pepygdMv3",
  "key22": "4FLgKvHc22dTZ5Ym3Nuf6aVbwFmYMxiaLUGeW2H2UHpsbG2iimnkEWgSaY6SRXavpbnGvSCXvLAbfRCSfAffSfdc",
  "key23": "4x4Z6ztbQtpEuYjiMChA5BfPtV3PqANCZA8c6tNbzUhcWtRo2GXb6k4oPF51FSFzJgxt9aFF24ea4B1uwdTZwnAF",
  "key24": "53QePSL8DseyAkCaS7hkN5dnNMQ8rpuVa3Bykb6FtKQLpSm1XHrr1K5mrznkZup3adLBmWu8wPWP3HfGdxJJacAJ",
  "key25": "5z68Bk4TBHBdorYjt4BqwRmMMwcSVxUZryGdprr2gh2GeUa8C52xKVtoPT139FCMt5dpm3XXSch2nfKGmEXzQEZQ",
  "key26": "3Zcg7YaZtCWhz7o1W6jmEBrXh7j7rWmBkeb6F9run4rA2ZYLqL9iff8AnnEwKf8SM6GkzhUudS5CjVfpsB5NwrfM",
  "key27": "5JJWq2rbSLo3PdT8i58so3jdoRZ6xaBxh3uFoLjSULVNz6enBvxg6hvAzyp2wLaRhojFswXJX699ifJSa7LMi7DK",
  "key28": "3Kf2m9WXWdaCQh6prS2keNQx9iouUiTV8Uof7jvMnxSUdHtytZPVzoCYowyHhSoK1L2hBPtH8ZiwKMNaMJAmJ7MV",
  "key29": "GsncJ37Yag6UKUiU9Zyg5nJuiksgmMy26Eph5XTLVVAhcZBbZmHoZofVJsvV2rcbYRgrgZSrAKAmo3tS4d9JRmW",
  "key30": "ubSgWuvc2fSUpqSuQCNv5YwN1XZvfunW66bpPeGERjH4df8HndH8hMgfdZCikLQKTKPdh1YoHu6yXmnz6siqt6X",
  "key31": "45aCGurcr99FpFCfo3N94weMQHHv8GTs4cCzjEHs7Roq5uDvzT8mYRKh3sYuWdqRoV9MLFQxqjeQrH6zHsJZndBQ"
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
