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
    "2VJo3WWXxTyCWXMiNo2ohFdvCTxoDUcUHYVfFWmWwAdb7BJyvvupmBgitQ9JTSB5jveHrjE1H1HrUoi1qsJjQaBc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YuMsWhLk8UYDsKaAZ1tEjBJfq3DjaQTXfM11yTbw3yQdcJPEz3xbNYaGJayg3Pe76bQansxymv5irZEBh8enZPw",
  "key1": "CcN7wtLKevShiCe4Q9bujuCJLznc9LRRzcFzteC3GYsg4YZmbLNYeCT2rJ9mKC1kRePUnxLAuKGL394YMW72zPX",
  "key2": "2dDBHk3vhWtfxMuo5eZWbyC2nVVdUE5f7sDvkPU6BBKdfobdy5oHH6i7qb1U35cZJH6imghdz95kYiC24fegTfba",
  "key3": "cF7joEqGHfLL7PSEx7tnCB3irKjSsMXhafPyMqMEdoBx9FK2wjxqYjK4PHBPpmK2HcekqtJoPmkgjUsauB2n1NF",
  "key4": "61e5Eo7qo3BoYqNNimUzsCCdGRmdAdcitBnZ7SJsy1XzjjA9AkuJnx18cN9zGkx28zuPi2yXfXNSmbhUDGPjaDGB",
  "key5": "4xbWnwMRq3Yf8ZqZMgkrHDQxQCu7XToxFSDgznqYjQfHxaSXbpNx1uCwH2wTHusf2x5fUbvQMWtLfKgkaeM8G7Tf",
  "key6": "X1RVAg6UVQXKyubmUCwPi4imFMXjcKXy1b1YCq9DSHmbwDSxxim5i5pBbCFx2Uwsa8ATFVZfSjjjFCNGMX3rYXd",
  "key7": "2b8NJQb8D7GPepnoq87BUjh7e4BbiWhAavqyPHgRQR3Jnt6GfejA2KrAnv7KrmoViQs5DEBNZnxMBnmDf2mShoQq",
  "key8": "5SiomU6iezBRaezmusFkPFjKDHHTUFyCQkfU2Pz5iFEbRxfBRFDsibpanqKaW3u9KJjsR7wSxGB7dXNrRYUEdkm7",
  "key9": "5XF8nTwWGCeYCjbBPhsvNqgCYV3bAZpQp63yuais1Hw4WCGbVQUPbcikDh7NrqQ6rWrri7Hu7cb1YPDvYShyNMqR",
  "key10": "57ohSC84kAabRmuVLEeSDZcdhRrjrwHr2NeEfc3sc8c4Q1Fs5HHdH5PpCczTTpAeb5f2uhx3RVw64d2DKP3eSFWe",
  "key11": "2f7vFWxKwBYMtNUYBY7T5bnsMkFAbP5V3sfziVCLjZFeQaEEDp2oWa5F95xH5xKpRZGmx3neeBJh5gr5PC2djfSR",
  "key12": "2s7Qh6FTp1NAPMudzsaCW5AQCraqQCmLCEHAT3Yu9dVygJxbQZ6KY8GLXDezT1M7gXP5rU8K67LrwGRukiWF7r59",
  "key13": "2qpp8qJhH1d2ZyRRaBGrPWghCNELzF1QSrjR8HQP8zKPdm3aUg4qtmid5B161S6BAFnsruZdptPLwjjmDhkNz68B",
  "key14": "3eNQAFsxcn31aKUTn2GzyzetJpsdtQzBc2aJR6iofwwRS9cTNwyFm8NXTpzKe4ueDLeCREVnF4Fx8JHYi1vL9Ge5",
  "key15": "3ihx9YJdL8Cbh7Gc8AQzbxEjYQ7k85kAwurMw6MP98D5xUX99W3843AgTEKDtLzu8pGehA94AKWExhKKrJgZnWWj",
  "key16": "5Z2knmh9XJdAfADkgXMMdYpesRxjTwqF22cy4xbmWPHoEkDCwWCf5juS7Rdg9qY5bgbPbXASiKeX3jbJj7hvkBLq",
  "key17": "418787kgE66ZTHqdhx9JcZtFTUZaFiTzmH6BJgwBhU2rP2g7kr5SWEeB7A5gz2Pgry1VHXKinEyeU43eCH1wHWof",
  "key18": "2YtuRxek4BHXtqf49uCUz3cGkpyBetdriNTVveHx91YTv64FcsoxpKYr3GDhYC22rcFAGeL3VLfowB8wmNaDeGtV",
  "key19": "t2yNMb6qtBmMfpjjzEczpLC5WU6fBxxPx8hPuSpyG67UMcBX3BmQ8Rq592GqEvj8uJQ4u7SYECwFkyYUEjVHVKJ",
  "key20": "4GiQJpECpG5CxY9i5jn316s9dKgEXsWUTZnrhVbBnko2Nkhv6n5hdPUhot8uSvR9ULmhuzjRFEVSHs1FfHNCTFrn",
  "key21": "5PSHNyjgZfynuNr2bg6Q8Xzkd7wmUCSaSsHRcXztVDeKN3HDDaxx1U8aEKsTK28ujt3Pi4nY9tcgB25yNnL7oNgZ",
  "key22": "3N8rSYLHy2yFXMKbt5szmTdnrmkeTnmf4aqquGRYS8NDQwXawcabThjDoR5Qbp7uKGu92EHGaNZid3ST19EF2Grb",
  "key23": "2zwBfyS3uUfnJYyQquWJEZejxgqF9XxnTfZBHXT9258GnwMb7wvRRukMENkfeDMTj88gSmnpyLvhRUmAsUeMGkEB",
  "key24": "2BFTDL3kqZFEQhHowyJXRM9FdbWabpKfVeczMeq5MRGaGrhg4iny4aEiYDQ2ZqN5G83Bb8uu5JDXAhiaYehJikqH",
  "key25": "3eqxeSGQPVeYzorFYRwb6JgeaBWzChYqPXbFK8c62WMy9Mr3xZm67G56Ef4apL2jaAJvKweFdA9CHW5hDrFzMWT2",
  "key26": "4HDBTQikEyLgtUyNv7XyPgLfysmtTb7zhB4dSvw1cxpWpu6vPStpwhBeUPgBCkpxVMogCwdvHUpoRboSPV6Bfomj",
  "key27": "5buoHDeHrpYZeEGZfxgtPFk4nWP4DzTkDosxeE4JzTAh6r9a5rNTNR6g6DyNu3moqLcgrN1uzhrCZReDwMMJ3vnC",
  "key28": "Ue15rs4Ev8cYdQKmeEzV2i1iQaoFpzd5LKBFFw1HspRMWsXw2xxwXWFcQec6j89GYprSBFkQZEhR9t3WsFxucXo",
  "key29": "61gKaVwEEsR3wetqAcKHHjaW2qfygq1jjn2M4yyqaSUEBGswwneGETZRM75xkLNndCqcRuMShFtP8sbEvySjzUWQ",
  "key30": "5Z4hxVMWx6XB7qmqCg5VyUXojhrFLuhEyi6pyZxqL4CEXxNuBzcE4TpVaQSXzifmPD84sNfkEVbKHeckz99wg6Yu",
  "key31": "4WZK74mEfJV282YaQkDYadhk4AmnFtcrx9WDyLr3NXhW3oWqzcEbdGxRreEfcMRB5UCWRoiL2WwrEqWQLWGVb6Tv",
  "key32": "5PF72LWDHAXJPFUMm1uq7zbqKTcS9FJcQ4F2i9s8NQr1DJf7XY9wivQ4jwn4oSJKDDbTatgy6VqscENBoW4VbfPE",
  "key33": "36P9q8ZG1DMXdmR4dX2yHd7Qr5sj63PsLuUj1ApknkbfVAcGLN8KCCSZZmVrwqCrG4zf9PjKvy86gysY3aeoQb85",
  "key34": "jKV11A2Tuoui2yV3fiPwMqz2JAQ7usaffagv96BnNhhWELyEUA8mwehjXMX1xfYAyftQKNM2Z8k27mG6qCWtqHC",
  "key35": "MhdKfkbRfarQToXAunWLZn2dppUZxu8YJYRda7dAwKmQiytWnickgvcpzpLDmaYhxCVB6p6E1CnxyBBEHqEeEC3",
  "key36": "2UnhdVj8bvrWxeZ23kQ8R3HReNQuo4sFmTVcYL5HUzK8n1cMhpx54soE2yWiWTVLuqr9ont9UQnumx6eUY5mBCAP",
  "key37": "5XaWqLHhUFgEQWMpiJJh8TFpPpGQh8CYwgNZrVyLGWYK7z9eDWHzHwwyjZJ6AHDDqE6D3ojtAedGFCxbfEjEiaTN",
  "key38": "2XDpuZjuE8HST6XeAC6gLaabPK8PecHnGEg6ekG18vtbRrkCt1XppW7efxvcczvA6L3JnNBckeZXwk4cnBngp5zN",
  "key39": "5r71i6g7RAM8C6JkR57QQ4aprcnhd16rYinrtuR8CcnXyQQjVCjF4w6cv8NusydEUT2dTYMiSWdAudGN6UYbkPRF",
  "key40": "38AdDYFGsnVoDx2ZptqTprZripwDHRR3XvhG8PsViZQtWHGufXPhAQbcZFwBoUKBNHXUxfah39Rng3ncAmx9hk21",
  "key41": "2fgt7obxDDNoXYYYgvE4bnHVZyFE3mi5FzB3EWVpYb5SomG26Uq3SRTTAHrEM6aC6hfno4K2kyQ6tkzXpqKkY2Bb"
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
