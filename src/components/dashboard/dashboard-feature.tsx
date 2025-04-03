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
    "D3Ei32SzZqHc54T1auSRz7y8ota3RQDK91E7xkkSyd8ikq3zZFtUcV7brRKU8u8gmJYGS5DkJjBRW8BCG3ZwnvR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dEX1LGUHwJmCtM61iWiVryeTfFq4nbgy4tidxeKmjJLjHAyNAHXgrB4ccjJ8zcgCtT8fiiRahP8igFAo6VGsGKD",
  "key1": "2pUCtrmo9NWYYt26HXgqJdk7AKzfSVMHT3wZ2Zos7HLEoKbXLwZHBjBH6t3H9tHxmXRkw2da3QDsNP7KkZMV2yN1",
  "key2": "39kVYo3TkzRTk3mQtVqpanYXByf7rSbvYr92FxdAMhMAPKtGHW8QJd3s5jnWbVoYtWG81HBX3vfovybgP5ase6BA",
  "key3": "4UGk4CjzaMPExDqihuFpeTTxfL6UbmtbsmmQxD87V12tCSNMGwnFNSSoiyyB9yjczP6avaz54ydNPHLVDcnrBPkA",
  "key4": "3sq3MVrMmyV8Lc74NwUeRvELyVeKpynKwVoJaKTBbFZ2LoPLsqdNkVGaXgoLSdcUYPDo5BfEJ69S8sx2uVm6nFf6",
  "key5": "2jnETJnAdnvXQrXVm7bBrUaCGW8XahHjDeuSUAT2Uhxpd1ttfjhLhPPLReB7Bmz8onauuZTw2XWtdSY6fxVqY1jX",
  "key6": "33okRer5RjKaWXaHVqqxjeT6MN9W5jgsP6Npo7wXR8fjA9QiMyJZuD6DJBXHY7VXSwSTJUH4VmMM32DHRwXkGBNF",
  "key7": "29nhxhUkiRpXwbJ8e3kJhxqwy4TkzwLcRUHtwAbEHEvFGA26nzHphX5LnR5N4LcxtRKXuarNomLFBgNcNVRhL5NN",
  "key8": "5rQXxDYFmrcMLnFjzpMbw7G51vQeGV8tKxGMrDfsC8E5bDFQSJAQc4wTVFJYCNpEnqs4WAqzg2MyiSnEHiBoqdrN",
  "key9": "dYWCYztczM1JjXgoY1fJJMrVsv56kn7u1Mtm8ht1YFhmKQZZ1aT7k1u9W15vEF6FKS97WMpdBo1ZUxUDEfKVrKb",
  "key10": "2fPPKq249uKTkMDcJMhu3oJ1ezW79HSEhpX7BAkbwkbmFWQDpNiD7eCEPBqU7UgNnGmeFrzLjpVv9mojtkc4cLT7",
  "key11": "PmVaKPU1M5diqaUajvgmMD7UcECLUkV9d2hBaZrUUb7M21GGSv5C47rnobejpphKQAoewg7iqTFW5Sk51pUzpe5",
  "key12": "5jPYZs7nUvB3svDTde5PAnnyNxGxyRTSQHYZ6indNJwFtYfK7CYCjP1i2UWARRyJxt8d2gZ557M1jgokgN2H285y",
  "key13": "29v4UHK6KyHAPwkBhDKiAS6BViz1aiMMRXkH4WU5MEAFfxd3gMcqFCPdB9mB5XDB8CxTMtEBKTSNF1y1qbm3J1ze",
  "key14": "5rFXcgyLMKVRLpyz6Kvre4ikhSGERsyTzQa4LF4PXnmnt8NorqzPELaAGkuiQp5WLyBHjFTckbt8g9SfcGGzdguT",
  "key15": "5mkuTPsraJPpEunrejHWHFzcY8xTTQCs6xDfvxGcwx763GV24RqTRwatxWKdGxocNTnxxunjM52MnSbP7UMAEwNU",
  "key16": "2iLbk3p4sFprSnF2Hwm7rivt2dubo3J8kfK34soA9EtgzF1C4XGAtMkg8jZzeX9ttgWWYBDSPCFXGA7xDzAnxqXc",
  "key17": "3jubLs2f4Lh4GeiW9PwhfGjfsLZk7KT37tEhqBXuitG8kE3EQYD7SKNS4A8HxRXzFH2K5BCKcE9roSbwrae5NEy1",
  "key18": "2UvR7U7gSSWbJ14XVdk68RUc9YZ3UN5rBVnkPyXppvBa3KcQCGdyQkb4r58iHST48ngSBAQQy9Jd7k4oJmPW69Dq",
  "key19": "3fZ4TjgJKEDfYwTC5DiQgdPpnkVQWvpzjhwLAJPXPnQ17MRTBFhXLA9WLLHczHecvUURx72AVoQQB8CZX292yv46",
  "key20": "4CyxH7uqLUnu91BRF9ffndEcEactJpZTVoZpsuMLWwK4QrwtYiSobpgRw7LF2AJWo6icyJrQbXP3gJSZt139eNQf",
  "key21": "28TARUYDkh6oQKLMkWHMeaXX4UK8fjtjkNky7okXC4epDK465bAsrjev4WC6csxZjEPSbuT9oQR8FwToEbbYxzYq",
  "key22": "4fJZ28g5ATj9N28G3pFcaavvQxy7djYsy7bFxxsx1HfPxrhy5CHqo7xP5rfcj679vv8MJka8xtxQoaK8sujKVuZR",
  "key23": "b96q2PUZ5vpTQZzYGdQFeujFh7ySm2NF4LX1xenLLpyUFmscGgBpRLTydKoXhg2BcC48i1iPixBCmREPL6MDj9n",
  "key24": "hcRgZUnyxZwLEqSfSRqrqfRpFAPfa5DAnsCXLa6WprjWPhDbx3s4wLPbhN1wNpVgbgU5s2dQAuSBQGdV8P3g5MK",
  "key25": "5T6BMXoerqu15o5zjEZi6wRnEomba7dazWo4HkRj8EbwPAhBeQtChkFH5y6rDtzQKnHeEUpDXnqi7pp3YG9zreLK",
  "key26": "8AE2qFGJe1VfJ6BEihLorJ99nhKfy9GBfSfpc4VDRagQEV49dEZK3dYVehbdg323iYvX8KyityKZXXMFZx9456E",
  "key27": "4hdDjZ5P6vKMKiWarwRVudu6FivdiioMT5kZSS82AkKQ6EA3RWeM9W3P4JPsCKHrDqMPWk5dxwGNyRW9fh6RBmNd",
  "key28": "5TPeG4NNFCND15GFMBh9wbcvkZvCvfcoXLGdbHEtwZ7hx16XLyXuuG1KaFAZ9rdCje7UKaiKRCY6QWG8mrmAyaFr",
  "key29": "2doGvyzowtYT9HezW6DcoHRvu3sfQqtcokB546eJXV16whCyy62NQFkxZWewJNyZjX5gPEuBUMoyDcZqmBhqb7Tw",
  "key30": "5vgofBxLKgJGgXuNW1JX3no94hp7ctbNLEEXBx95UQyLra7rQjiJpCm9wg6TSsG1itRzBGexBBnVo9QZiiLs897u",
  "key31": "3DTebKYVAxT5xm7m6ZNz5fUw3o4fYP62M35YU6wcu6y4AiuX8uC87hrAqS4hGbpm4DSNN6tJtVEZSAKZ57ha4z5w",
  "key32": "25bxFQbABm3ZM6AiLGYhSmP3S7Q1GwHsGSaQ2zrrbT2nufUGNHQsw4mPAhmb2bZoppp9gA791kXvmpUXq9QXS6HH",
  "key33": "gdsx11dyD3Dv7ZUDkmaYFD4uWcqvVR8fiEftawBfd1nhkF88uKdAN5FiaVQVXGAuc8EPNAhZWj7G8WriGd9KFJU",
  "key34": "4cHBKyMjZSVAHdzHctbQ4UwMPXd3akCXsxM4czrUTZFP4Jt2Cd2iUwVNyTvShqLfHfd9rrimAZhGD31ifbfSPPdV",
  "key35": "5uvyPfCRJMYoWynHoLnDrCXrkvDTHaSp4tQ5q6SD19g95sbZFfYBVJs1PoUGjA7HX5ghzoHY1qoLZXJfM7TvSzDK",
  "key36": "2kHg3BW9kU3dR3ss9yaM1pWyxj23W2gEnLYefoeixQmk7titC8EGg2NnMTZ8RhMaWLLkTiQjq1zez52eC1wEcJfM",
  "key37": "638FqQjYFq5JDmPeA7JG5vhXBbAHdFA9GQJfTKtbpwKGUiXUAJRT4jbwQHtBEah6WxZXZNLQUq1vWj1cvzjhZorW",
  "key38": "39CdyQRpYbbwvBMazBLLRwGQKnvopV9SxCXZH5oionBumFatUF86KoSFKJ9bGsSBSaPprkdij92pYkDRTAonCuxx",
  "key39": "7ZM3qKHRUU9xGVrqARBVq7MTiw3B1vXVCRbEHPfpeMQgWvTLjw5nicfEDXSuSq5JEdgZDUPzXHEVvs59otC4pea",
  "key40": "4Gdg1DZaAGxHeYhPYQXDnczk1ZmhEntomodNTAQVfMgxrxwBf4yiYMbHuCVnhADCEh7hbsFSKHZgU9pSMae3NksQ",
  "key41": "4PAaJb3ZZWM4JF8hyeLVEtYJM95NRPaNS2TkktDUDTmor6jZAcDeWPwzpekVevqCD57QPNR86upb2fciqrwNYRP4",
  "key42": "5sF8YqNjCBW2DgqZbUzwRwKENrSfBXxhN4sZz9T45JPkrazfuCVz48jNq219EMpnAofMEsLq9yDQJRaAu8nJhRC2",
  "key43": "4BhuD2ZEsfBReVEb8W2UQawyTnFJz5TM7W5wvkpd8fRVVGRikvd1VoiCqih4Si1pnPYcDGt7VZ4nEs5hTVwgbbYL"
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
