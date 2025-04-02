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
    "3jgi4bjxRNxrXHKTUkmMYKqhtgFQNEjFWSjroNj4xjoRWVC7mFXMkveCMgPa9UirBzdxVNzKX9XxPCNc3QZDPHh1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fQmpnwfyfrDohhiLFj8YDLbj8H8bRF7aXedGKcvjKsQ8RZXgprjF8NYH1gURrcBAAfDN1ztNE8sN7nmoMvJTccL",
  "key1": "282AzmXkCRjPVmVnfg9s3vYMKS8zPERKtjmmtJ1E6kQuATKKvfwxWzTy5MeyjUKAYUYT9fPvRcwf1PZ6wSuHmjaQ",
  "key2": "3EQyLEJ6M5yejmKGN4vcPonhYh4cZLkqY169DRQbFX4DMeFY4mSFz32LWoPRjktKCvh1FThh3Tuo3Fpgw4auC31s",
  "key3": "5seXRKXMNHT78ZHW49KLhr2GUKJxtKiNYrZG3fRF4eok6XsD531zqWNvXbKqPfZY2B7EJ71SgV9fyBkHgm8iLz7Q",
  "key4": "4q9Sos3dACaa47dAVsjibGD7s7Lggu94pF1yP4tFvuDcxEg22szagSnmaQtGDG1dqh7mTZb4h1BLHkJ14DXfiYip",
  "key5": "5FcZgjfgaFrGMCpcFDygzMbdPTbXbBDoyKYSYuVRcviRE3gHZorBgKcQwrqWVX68YrRQhXKfPmi4tKrdtZNH7coV",
  "key6": "4aH5tsogvuRhBWA3DdLV9PTG6HpbzeNdk78UskepS8XYnvSRDQGEnedym3fQDEFGzW8JckgQ94QaTNdT2VnLoWN4",
  "key7": "4cMSTwXaebhhLTBKqC1KtACsc9h3wW72rGAYuLKQe5SnAW8wvSeBHW8VXTzrKqT6xSybeZDpFqL9oYH4fsF4krKZ",
  "key8": "Ly5De5nHRNwMTpWGop59HoLtimcf112QXM2R9SkVJQXqUJeZ674Wu5e9Cj4d2nPr8PiWDxyNMrZsRjAKKdBSdoM",
  "key9": "2ZWmf5NwLrLfJ3PbARYk7qsEb5NkVVojyqWjd3Ef1urnui4tB4DuyWbVpFUTcN5nvjT1gscpE2FVLCpVGSW4HvT3",
  "key10": "2yumbGSqfYoJ2iWCNf62XZLCYPkyAhy4J7sNX2b3KXFmrXZFMmY3SoqmwK61s9tQRdK9HsMmKwn3jqMRbvNToWvi",
  "key11": "5vCEeWsa6fAUx8Dut7UNA3dwfS1MrSu519cQUugQEyeYi7TeUu4jfYYcxmQf9FeKJoC5VzbPKZ4p3z1HL6w6XUfW",
  "key12": "5bAcDAhsrZYRwhj3e6YDDyJMsAn69kamWSC1hc31ixvTGs8LE7wwyQXZboBBeKGN3yrwAFM4s5YshMxwB3Jntkzw",
  "key13": "4YAR8hMURJXpjVn224NkHZS4anSvNK7CbRL9roHQ1rPQpkxtKVfb9YgztHmkM8U6LUSzvUhkXCHUgw1tn7Ep6yUk",
  "key14": "2akdZrPGgRwqHPtUNmMRUP65goPqYgUHTmDJJs7HDi6XLEgFCHSzkHsvH3vjCkdDk5Bk8NFoPymvBoLczzaqotnC",
  "key15": "5bqfbwEtqhUtdQd7KvKcxyCFazaSQAJJ28KvXAV8PnbaZYUgvLc7oj4PVbyWTU76QdaZeZSdmXxgVSQusKRUL7u9",
  "key16": "2pcG1iHHn2jJaxhawNTvevuLFAME1Vaw5EDAVCkb12P6xmjWQNJsWSYE2YXagqFJMBm4N3cPEviPnDz7u9ZWuGPK",
  "key17": "5yu1QTk8PsAnN1pCQKyEktm5HV8kpBuEjD1jvvEaJZ9aysGWH4R4xNFxcYBN2Mv9dumaXz3nXhD7L9hAhoVTe8mJ",
  "key18": "126ZaoihXSzV3KPJi2EGyakQjpPs9NiGz2QfJ8Yzw43YW9LFwL1EwgJP7pw59EB4pghD8NUrLUVm9KF71uJiiJ3v",
  "key19": "5nyFjY8FxD34iMe5DByvJXAgXb1mVrbWfuzd6ZDtytuzo1UX2VV1JFywpdqgYii2jfndYxfpTNhKprwvaRbg7HTd",
  "key20": "238TLdgVHYaTDdXTJ7HKcuq4acBrBtT5SXJBsZYpWiGchbJ2REaFtCDE6EqYvt7bEr3MtkfWaVfpRU4URfLeLpPW",
  "key21": "2GefexNx12QC3ZbfsdXzi2yj6PtgTFx61p8x3m7trfyYkzybRXXFcujYJaFTpvGMNUoXb525hWAh3wjx3NcJvL9p",
  "key22": "4rGejNJ9DP7bvqKfzzA5s4DYiok8ax7imKZ2LZfB9gPWDxo8wXz1pK1gaD5LE212mz1wmWnjSePqDzEs6XfRHJy7",
  "key23": "33ovNsmFZGttz7Ebu7yqweojB95K9xm4fejkXFLN3DLF2fPDiNfFFcsi5jmDESofyNizLWJwPe3Dvp6tLoxUR7j6",
  "key24": "2bMHpDmMRYMBx6sibH2m5sqpB9ZiRpaC3LECD1kYShJYGAkK6xnSMjjqtxynDMi23uv1RfwFjz65xu8UyiHh7dhS",
  "key25": "3sAXvBNiNqHPU1iDSy95LUqhqPA2xdARQPuZQuocZzvBpfhvicxyLNwtVvDvCYJHK6ryprQYK4qRTyVctNb6ow6P",
  "key26": "5YNVffZnunHZa6djU7QM3mvL3Ypcfng2TdkB1p7ig94DXRgU4Y4cmxbKqbZmhgQEodaLTR4XKuv2BWJD94ELzfM",
  "key27": "4EfonQM5N5cQCgGtci7RcVjNnuufEeUyk7Q6dE4hUnMP8ZC6EythXJ61Ae7DoXBMP5EQYZVxtkrL2U1koXovzeC3",
  "key28": "2Mzm8yPy2LsMhuMizrhzVD7px3Qkn8teamWKuJDPNYR6rEhQsVBLJy1NcJ4EzY1BGLinism2tHLpConqxkSKtfNV",
  "key29": "ky6aVwNTp6RNfankQBP8BuSE83LS7F139QWzhrfwndQLjNAmywzwqrYMKqqQ2SRHfvTkSotoVep3fQRiFfE29tt",
  "key30": "44V3K17oB8UJpBWX2CaeEFb8BXBQ2ZiLEEiRyqUphszVTWf8PUQPXKQ663uC24mN3Z6hyvNTPcrPNmAZS3zC1Gni"
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
