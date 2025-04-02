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
    "4NUxj97NhWWP4HqSu1HWPAyurDE2mqUDbbkh8D6L5bKPWUxmQKk3fRp7cjoSwxTzM9PrCrfxbASCi8s5szHpEF5A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63dWs6HKxjAyqvFGo2tJELW1WUQ1MgTZthoN52AYw2CYUdWVpfmyUqZfW5AJ5i1VsCeNwaFkrjfSx8Xo3GRsnk3h",
  "key1": "39tKtrepf5BWeuWP3xe1hGZ7gBoQKQuszGu9hhBiZRwed5yovBfQEysEy3pjoEyZn8dwewhrXxzi4Cs6JbeZHNfD",
  "key2": "59vuSwgNd2MX6PSZnwghmHJX53TgcXuc8CT53LrKCFd3YH5EP2To661JjnuaJMkjVVapTdCYMRoHsRNweAWsqSCy",
  "key3": "2ivhrJNSR7vVQxNYQKvUZZnpYJoKvTLXKyPP1PD2rru91Xxm8ee1QPMiehQt8TR2HfvfMvfqXW272aFCeXZGk5gj",
  "key4": "2Gx414wRwahhf9NTUzKt5f2r16b23UgDgkChfbeoxjbEfkmekdroZ32jiu4bghWc8FqfTam82kwdRN6DVZ6nTs5U",
  "key5": "3bXTkhi932y6NomxypsUiHSHauRHAbsZnCRoDgzyhW7gHfAszV3izfTHEQruJfBNG8uioA8RQBtBDXUktr8ER3pz",
  "key6": "tubyqvyV9ecWuPADk5Pnv5kByipjY8FNHXmSJjcxt3TBkoUEUr9JxfFJQFx49aqKTiAizeP2cpoA1Zkmm6YuvoH",
  "key7": "498eg8i1GT11bjUzw4GR7ATJJREjFoR1Kv3dySE24sNmCZ2DvT3dMA9nfwXqbjuroyaY1QDxne3NfuubuHL5pw7y",
  "key8": "zAvSfdtvt8pFC2bj9hwxFdnLFHHoTuTUKYkCUhcN3AgEpe9Zcae3GGZY5RxoFDiwXtZoS5F1tP9bHRNiY2B1thE",
  "key9": "FNjhsyMrGa5tR5HpLNyTkpT7bi8e5sKFJwtyUTf6JDy3HN5mDYicNXpGJmQCxF4NuTWMKQuK7ED4XuzYoiG37Wx",
  "key10": "5FyFMMohnETWzy4MYM27CZbA3xbfBbrDR3KwfetSbDAAp85j3x7GsQscqNENeFwJoJkYhSn4D8nPYJbPss61wAju",
  "key11": "48QuJvCN7QbMNBWmWFSBqwQrk92YZCLcC1bQxTFJC9uwp6ej9dwPsZmYSMrme2xnimWyd6RZkWxqEmbR4MicxWkx",
  "key12": "2JgUD8KzrCMSWQowaqEifR2WjRWHztNsYwSncshPfqNUhmkpPAXjRcwqitPBvYmw5PT2WD5EnKpXceJfWLL3Y48E",
  "key13": "y7BryHrjyeXVa3fY8Vp2f5bRD4RVMYpuC99HA1L9T1eHzBELz7dADtVTjDCfnnQ5c9Jzc9X1VE7Tc3Dg3SfyTR4",
  "key14": "67p4VCU6xFVdz17jkthqc9uS7fw8GoLfNBCoetxaUWzTAsjyX3Q3wDaG6Pn5WqtDrpSPAvurrbbQVuo3ztXoNiiu",
  "key15": "62MThZJFkbm1YY4GD3gFW3Gu61e8Z6yLLyoW7NeMz9dGPWzGbhA4phcr7JtfJ3WwnZe5bkhh4onCAoANdBeotBKf",
  "key16": "3wk7VaX3pa2RdTaydrr4zDT2CjcCvNtxTFR6oGj2TZujj7WZK2VcRnaGphRoYoiRCTDJhTr1vZRmPVmDUZMeFFtC",
  "key17": "5EkFchnpotnB5BMeAUgztitheigbaE9iW7c3F7eCYKHwt2u5SsgBMnAVMSUfFVfUfFAxVfA2zJZn9BGVFH61dKYv",
  "key18": "2ajUspVfroPLZBT7g31kyvDhFh3BX4R3tWMkWeRHNzkoeCoWCwxa5n6SFzMf5LUPtW87qPtc5q2GnSWLaSARy2MY",
  "key19": "2xRVj6M8MULU4twZ65jMKF7Juhu5vctCqkeTH5EKL9qAgBK6he541Prt4fwiYXLfogJBG51VTGZMTmFsHiE3yr3n",
  "key20": "2nKnAtZHVCpnKtnSBJpk5Ypd9sVfxubxCm6F3JWRKzWivyYraEkK9uXKrG3MkkDDzH9e5kdADJGG5VJnYJDnQihX",
  "key21": "2wdTKqVf3DC4FPsSCsoSvqDbQN5Uyj5PrRTtN7kxE3mGEKKMpRCVumDbvLu5321KzaGjMdPiVHgVDuTLJyqdmbxt",
  "key22": "3SEqGMY84oaXzX1hsrtaDnRMXVFTjraPoHzP6yHFWBSi6u85R1vXrNC7XSubpisYzsMNXRcHsvRkJ6axc5QRdvha",
  "key23": "JNz3QYXe6oiRDSvUguUz7NJEb1n1LZJ1a4jUKLbvUDEyy48wcemG48fY73NFJr9tTQf9fMBD7yWVTnSzj1ZAuzu",
  "key24": "3N9e56yDuC3aA9arDuLyQoSm4sBruecSxZqNJ2PeMutAhHPqFfHnraBdfwxBRJVif1U9RjRRGJzFLnT22yyf9zqk",
  "key25": "2qRqVnDWR4tG54rrQK6T3Rjrv68mxRmuuyUonDsQpeSiQizwWBQtpyeBQvcJJUfd2RAC74UJaua2hwM9YcEnv7tZ",
  "key26": "4y6LUc37fd3DrDJ18xmHxuMk9Jog7CNgfLtepDbGBVjhcb3gBShSoiDtBJbeiDuf8Y2dc3WV8NYSMb5KXUyFfF1J",
  "key27": "5RZxzVckEFYEN8R9kDueXRPS3He4tDCze9VAu5EvwgPXz7zTkSoC1EqPPtgnmujpd7eKnft1iQ3LQY8LMh9u8pYz",
  "key28": "47bxtHRNjNuew6sgWx9EaaNCgpCBVoFpNh3hjogAPfxrsUgWusZsGxKXocHVAvhXnSMBT5nCYZua3jNfa8gJzLxV",
  "key29": "5X6jHhBuwoBgdF29jEKiu7fymQmkFocgFsWzVcczSA5w7ASMhdnJFmo85MvTvnUJGPTvnimYiBcNXTrw7FejByeY",
  "key30": "3CKCghAoifXQFRsmCgdAxhkhtb9qKPXrDbdgHBCLUfJ7R6KxwHrxDcDAwRA7uM76JU8V8jBdLbaA9wGRGL87u2NX"
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
