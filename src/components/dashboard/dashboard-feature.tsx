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
    "4ovuTumjH6jA5P4p84Ema3yvYAntgNmzMQc65edXta7aSouJtnBfcyrdCJpXjSAkp13BZitLnFUK9o9c5u6cNfeB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H1jFboB6FsTu6oPzLWv7VARMQWoqzAKECj6Lwh3WvkjEBcaA371rfcRdXHu9jXHBn1GP3M14VYNjxWE8XsirSNH",
  "key1": "2cJ3rhiVJ9ET6nKKF9T5nrEyp4dvo9UXxMZWiPuhZx6LpvA61gV3kUjqy2WZehnC6dBvcyRcKBF9reoHwVKfxe2k",
  "key2": "4AxtGdNobM6XGXjVC5VZQrb2NhNLnefGgaSKY4fBt2NSTaHpg2LdyTFHSg8er5Xhnu52akDrvbX32vWrbtFPxyE2",
  "key3": "2nrqYN2xiPwoo2WkvoKC9NzFqixTmtfMMGbS8Go1tUEd6mfiJhUCsmNvxtBexJhc1XRBuxKwcqofvofntnDnTAeE",
  "key4": "3Xy6EgfYhvzF4QziEi1vNmZeYk26CiEhTVevAoQ67KypUCnKfvLfLnbSZBAEDiQSUwijLxdvRy5uVGf5SHZHqpK5",
  "key5": "4bhih9zDiLWbwFmhJRNCtoq6SuNZPmArhV7YhMzrDbmDUe1UiGx6RZ7P9CQ9AEAR6Le7xSaYrXrsAUuGRVyEKqmq",
  "key6": "3teoK1JveXN6wTHZuAqsdGQKp8ox8H2LfbxAn1vpnmjtkpcFix3pJCrmBekTGav8Gb89tGtxhXaT2AE5KrdUdhUL",
  "key7": "32fFEZancKjnmT2fLRG7BB67b926ucYeXCxVyiUmKRAvvg7bUH579EkkVtDLw3SnbJ3F31fVyvK3MEbS15P4z9kg",
  "key8": "3EE3bs5FVeGgGpunAHTaUF3JSG7DiWRyeYbKfPYcetwmLHoFwDtVA4F3qq7uQeHkmHboaJwLKeCY8jV5arbpw4r9",
  "key9": "vATNy972tEyivEv7r4oJW8MMhePMTtj667QnGibmG5aBhaBRkrvhvafH62SvfQzephLzFwzv479Z79L9yNDf9db",
  "key10": "owLRHwr2ZLQmpv4N1KPVv5YmtHETR5r8vzE59FkVTKq28rMhUxpEa233pjfS8125xwTHGUWr7XDWX3d3aQzqyjd",
  "key11": "5dEQF3X9gkssy9CuUGUjvNZhFNsCmYyRSuKCzurqUsEAyk3VSzR19EouTHGiKGxm8S9aNDYh4crsqxVtZY26DSxP",
  "key12": "5aQJr77aSq94EgF1AmNqPjnKraXLdxwwt4iZuoHEZ939jS6T56z8JD2M7G8VcL1UrK5fCnXEpNSfbtybyGbKgrZa",
  "key13": "572FDkJuWMB49AmSBeVVNUTS7sP5mJa3Lroh3jC56YCuNEogYWoyrdAyS3nB674aeE7DsaJfHjr2GauE3F9Gk3WU",
  "key14": "3MBK9FxDwyUEAEm8RpNHFzSrNLGggpoFXQcvYyNXQnBoG1qE3BsP5WGPDDgNq5ikojf4ap4VFAvqM8atConrMtJ2",
  "key15": "24rRbh9nXdD4fNARTKjv1Gt1FA2uwgqHPun9Vf65Gm4rihYNbm7kVs9vHHhgS4TpeTch6s8qRj38VWL6AnjRjnTo",
  "key16": "3zX9bntnXL8mwgAs6zeFsngk4YiMoa58Jxf5CeLbNfhijLa3gK4VTuKAhQJqakRQtSM7RpK8JDT85vTRVMYB4WTi",
  "key17": "3HBowd8s8FkwB8SR4MmQccPsUp8FyBWPkb7hkjZ4czHuzjTmSKDtETcjiDdUGdweyGGFmbb4Eh5VNdrjz5Y9qgr5",
  "key18": "2kT8WNy7D5CMGnpf79PZD6hRAzUzmUCW13CkjtnBnzBSLeJ76q3iFRwrYTy8dge6vjFgMLEejQeyaXAW9uvpz72v",
  "key19": "Xjt94GdT3KkyKsSPFW9vYPLX8gn71gnhQoggDBWAWfDDw8SDusN2UfDjVGGturHkZPRvJQuDccKxTnfPGrseaLY",
  "key20": "MyPXAhw5yqCxY4L8kxB3ZckmtR2n6PQos9it3QXwaWXfYD3Sf6VhfJh9hSt7WCknSC1oSiwfpgQq6Wkjk3MTDXc",
  "key21": "21s45MgZuTNyitnBfLydQF8AxhGfySmXJGGQeAggT2uZtuga2qez1PFNFYjTgPST4qKM8mcWM9HatRrouboqusoi",
  "key22": "8vvvnXYtesyrsGL5hFGEE8xA8nBWSKEzsxXUqU8K85LsGFuUPe7ufmZtyHBykMiR4GJnec8yrsPELLx4adNGc6K",
  "key23": "5aEUbrquZ6sBGW2WtCJ4Myv53S1wn2o36mKogiUGUSynjbWrJj6RSwFboXbSWdaum8L5rV37pfmxP4RYy72xstYW",
  "key24": "28BPjxejJw7w9Rj38DHMtcp4KzXQvYrGBVZEjexrycV4Gtd83eQzHgD3LD6RcMFzJ4ADA1haoDvMxb4mQzniY9K7",
  "key25": "5B836CfJ8wj6P7FwoW6iasVNRtUsJYuKfETJigngx6oxj4VGXfvnBYdXGHenq41GteemjG4qGrwkw2v1hd4r7D4C",
  "key26": "3E3tXc79cGW1Tdbo2j3KSMyavCaiZnaHc8oQyyMaQjKqqkSezYqzCej32YqfGJeNssfPJyJPz9pnvfbXsqRqEq8T",
  "key27": "2fg81uiWaZEcTHh9dvy5AwJPvYnKfXyCoNMDPrjvttpc7KxwALTBAMqKfMDoXRTKXmwXGxwShfo2yNeWE8aCHV6Y",
  "key28": "4H59Z6JCQrTVeT9KDn8kpYHdSgXTBL5rXHu1R1CSqmqwnu271k9vgBtUahnrv2KsK22KgqMaEDCBw63B6i25Fs2r",
  "key29": "3gqNmXBQouvoGFMwcW7E737aCnJ2fUhyM8LYiQ9Q3ejAi3GP6rFz7XYRCAdXxW7HQmJvNrqQvJNezRuD9xH1cpbe",
  "key30": "2cPgQP8nLZRrAQpjEWY6Xcxp9tRVt8mP7DUamwmZv5gbSh685NKE4qcLXUGuJ2uAGbYdAFPgeM6ur14otyf8TPdM",
  "key31": "2qPC5ZVu5GgMni8jN1SgEL2YMdUTAiCyvc5eu5ymdftgRnSmouVmH9UbecPaqp5WRgQVqqgJQ4wykyjHkhFV1mxj",
  "key32": "2RHgKtZWJCmdcL6frhrbzMMBnWsKC8VDDPtmnbt7xQygXKLB5SeF2fhci26wLczVWwkcwWtQRMhgsK7Fzf9CsaJb",
  "key33": "5RbAhngnp1QRCt2wGcVX23PgsoSrrtSfjcNqdAJQr4BPZB6tX1spWKwvCD9B6tYNBrqaLN9meSSsVwycsQ3AwAek",
  "key34": "5rHmTo7rpnffYHoDpJsneXvyRhSt4mcjj64kDi5Y2MrG8UWzgFatqu9VHfxucETwfERydoM9My1bi6p9nKx7YLpJ",
  "key35": "4fRGKtaSN3KhSbNUKpDfEJo8CMmG3mVLi2nnXEEsomCyr2ePmCrs289RxjgEPB9rzZWiBKaAVzkCUqEAzjGHz7fe",
  "key36": "4L2VWxKjGhgoTfuEE2RGZfYw5jvg4McZrt3UUNK252VhvuVJUNYNShxwgMPBY4nVskrDNKtZLqkhApB91Jb2qJFB",
  "key37": "CKuT4FtMpJS56mDcCSW2j8nge5mHsz9wdtoCp2PKrWuGPoqpXkawecME51B41Y1Xws3RB1ej8Qkm9ADaeMH1oeL",
  "key38": "63LXfAuj7zrdaeeBqGMBfLAKxcG5fZeLKPuZeEBGifJNW815vn8LXE2isoCMAi6ymDdE7EyhFHt29cxa7D28xhGy",
  "key39": "5eLxgpXmUdrHQNV28wUZSNGbY7fBrwPSkTY3jHX4dck9AVqe5z6tTmvFh77z2C2EWbUAwThXrL35BTN2Hk7HBo7K",
  "key40": "4EaiLPnLWQEw4ZannrPwj4k75HiymL9MqdhxBMpAw3h2RQjvdH4vjiTakUN919Wa9vJmAfqkvuDrTnZBUPreMjMN"
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
