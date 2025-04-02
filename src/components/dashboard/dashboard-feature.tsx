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
    "QTnpYLNoF9rVuPgJLD9JPCuVchU4wuqrmAkH5wtFetWXhZK5ofYV2kAJPPBP9fTxnM5orPShdTYu8MdoUs7ZE8V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ET58HHb3dd6ZziRGd26tWv8tEQULiVEqvDfk6qFtk3TKPjKeYUJ9uYtDF1oDXEZjnwEM7qL5SR2JeqwDUuM5Gjc",
  "key1": "5J7WggeWcPySEr9MdGe1rPfKLfX43DEJv2iBjtaGH9tZ8Fj2C2T1QYPeNty5Z1edc43goadPW9yh4d9p9eybFePB",
  "key2": "24azQgm1xfQzWhuSJMn82fnmpJy459gCGhWpvHZSmMQd9jLFdTj3HbVSxBhrdSnraHreYBCnYD4pNZ6UETzr2PsA",
  "key3": "Vhv6Leng1swuSy4TPYQvM95F7xYbZRDJAtY8ggiSakcJwsF8uE6FzutDnjVHZjJGByLgaFeXogHhK9KmeyZzFcV",
  "key4": "eV2YZfGxtoeadKHMn1qGVACLHKheLXS8Uf99XFmjM1WBY1EgKWz1DDYanGeyexBmCaYmEepJz6aGcKL5wyFkxUL",
  "key5": "2hGbVvHYzpANXoUkQXtb5vSFcE9BFcYGJL4KjM4f5vbgMC3s5rFDV84TvgqJNTe1wZjeQ46X5X3TmGT3equGwiHq",
  "key6": "5GWWwXF9hA8SNTQTu4pb4KBCiZLrHdXDDRj242PJE6xj76cNFLmNtuc9G4NCNTXDuTFHBmQRvWhG8AsT2UpDAu5g",
  "key7": "2QfPDrDAEJPQfdZ6jiwVK1aqyuJBMyFpnRHGsh8WXzC584eJzizjesURGZBLSMfC4mW2w8KjaL5RTupjwgtHbtRf",
  "key8": "iBbbMtHxWbxcztRJ9UooyPEr5Rog6xPAgz3oXEMbHLS53BmV2hihNW362QYUStHH75kvQPRpS35H3kUbcbDDdUw",
  "key9": "5BuemJRfbkKJHFStpecWqxgFhRzBUFnHNncZVT6CXkLf7GZHqG35iKz2NDUNSpxe9THPNGFTxGTVjiZvbLBmeq3V",
  "key10": "2pBYBc8xyZzh8PUETbSHYWhGQ1b5nUjrZEuDa4fafsPfe3HqtBB1itaDT5g6RdnpKk76w16x5GQbWyCcauCUErLn",
  "key11": "3tJNauGhJmLpgiBP38pLtxvuYfUSn21wACFi5pSRm9V2oqjjkKeGYyikshcoEEtSNdNBKR4h4KQmFDugMm2AwtDd",
  "key12": "62JYKZzfo3GVyCbhdNeyxjM6JZxBHZLQXJnVCoLWvRKwQcnfQQErB7r5DrmxQTFCj2vr4MJoomV8nPj65kxQ73D8",
  "key13": "39JuvCQZTHC6h4wZ27RzSxPhfv8VsZGA3V2JyTsWdoFUdWUHyF1tbxxmEeN4EN39MyVisVhqrSfD6bqserymNKJF",
  "key14": "4vRKScp7CN9taqhVfjUp3w4fxiJtSomtX6P2LoUEEV2XGZmjSAkgDBJgSdYDxx27bVx6tv88R9EdFbgci8Tfj9pe",
  "key15": "2xJzqBH4b5h9WPoxYbKxUR8T3G2EaaYEdfmVrsRZ9LgHVRkazFLUKkZCB5u5TjgzAivhMsGUYgiXwmRj7QocfphX",
  "key16": "2SiGDtJQEGsXeNaw9N81jfy5hw41wxEuR4MriC7DnkL4g8EwQxnnxmxS5NuuyVKMnJRRL2QUoxThK4RYi4gQZNqK",
  "key17": "22gGuKXarbft4wnxRA1FHkJebLPB2E86v3sMCfTBXGGYEt6UH7FMsyXLtWMRQgT3Wsd4DPh8ywLEGWiwhSJq5S9w",
  "key18": "v1AJwg2MUCxmLrMVymURoCa8jCiyC2ApGk9pL3SboFYzW92mhNv5xKkxAvSEBjfXXAFCG1CdoZf1bVQwihEVV6z",
  "key19": "3xabK2R97ZeNBVyvgkNTo7FEzrqg4Zvde1fuES628we3JPfWZ3KMKWEA2u153QxH3bSFzpdwscTgdYCBvLcGSGBw",
  "key20": "5ki5zLwemPWxjDaXK5HALVDGNNPmPdsGivYiKxo7BjqHRrqRQKi43wkodHFe9jkwC6PhZe1ikKaxBW4HDr1yCfvF",
  "key21": "4WpLBDVAQKSkUiSkp7doQQdSo3LPSJzrSrLYAJ6FQ7PwFERWRtrFKuCon6KH4Bn1doihVBGzucg8y1MbFyUAWW6g",
  "key22": "5cBREPKhiJUCne1cHnVHR2gkdLsYKTXzccBgJuusoi82adD6BLvUPr5xfEB7cWJ71SN9VFyfMsc4HuVeQi9xvTkL",
  "key23": "4XV2tZEzvRZdxXirfCRnuM18qDh44sQreHtNkCqd6Nfzh7yEeesoU6Nqve3eNKEMUEZFfybaEjSkcKB9iMt8oJiF",
  "key24": "3eEkP3TDfRXWqxeQu1FeK9wforhcUTP9uGi8nTDCBV9N6ff61dZ9GS4XhH7xSa8ts7sdJGV1FWBfTdsQEA8Ysbe5",
  "key25": "5EUkP6viAvxM8hE44tay9QtYZXzb8vTab2A4hr5v7T14wU9SSdspCrmWUafdoiKdDKVn4K8TdXcbbZ3HXQDTs2gW",
  "key26": "xnyLcS2FiD2kCStn8XWvngNAjNbGKVC4EEsa4enBKzT4DQJrnnjZpCwDVrfonmzpZtu66CZffcVKe6gZzr88YL4",
  "key27": "3UEKgNExn2cCBQcgSLjd5ekbGXWtjDvq6ZfEKh5TWxQLYPbhwT1mQcXP8RXrxu7rMvw3m8fDN8ZCVXgDVcuLKPsP",
  "key28": "4VTgWJPSdea42pod2uW2HYrYr7WxJKGHdcAKfu7Zxq87kHnPy4skm4nUgbCekazHCSTN5YNiSMUx95MvwZtu8Hcu",
  "key29": "5w2CWQeJRG7MJ5Q6PTMfYzeUcnvmoksgmZDrhiaeAVn492gRckFqKBQ7jcSMbpxJU8MnTziw922Gy1PhDV6iSGEx",
  "key30": "4QJRqbLx5pDWrnSVqiTs1DWJgxyRhs9TCmVnAS4cGuRj3jcBTmjwPTue4yn3tAqqNE8AUgUr8i9tVMWJ8naHN9Ee",
  "key31": "2YBMvmyNvcmn6hpYsiE3amzy9zWG3YZ4m7DBvmZGaT8EQqHyN9p3exqRee6fT4mQTLgJMH2n6LMrYEaNLp3936L4",
  "key32": "5eR2nJvUtmRvj3qCFwpmBD2v7VQJVkaqem5dBTTTJwoU7FYB97Ch7cMnHxJiE7TjdunkTYtPDPhNm3xHVj8RSGxZ",
  "key33": "4v2aZ11QwXbspFhzs1uN9ujBNB4nYjnwzJ7jEiMorZYJzaALNNDjX8C7J5v6HJtHsoWKMpedgEkTfLxKQ7c9Xrt2",
  "key34": "468kdkBryBi6yudBd23xfEMqm91EcuyKLHMYW43Ga2AkGS3dULR92SF9b9pjqkuwm6Q1DrbUoh4Z39Z3WThZV3yk",
  "key35": "4ea9HUAzFStjxf4AQvfHGYS9GVuWTpj7ZBQbkqLHcdjJDQqKXv3CvxmoiK2VBqDdfW9UxBGmdyM6YTePekXd8ibC",
  "key36": "YvVxu1CNNMwcB4ZpUzEGAznmyKKXeFh1Cq8mprHnuwXRZqcb4KKS2uBnbJ7Nhso6u58xjN41mC4LN9AsPQ6N1xC",
  "key37": "3yKtLnZT5MnCvPE6fkEVSgtSmCxGJDh7gY7YevNyC1EVFaM59XCYdrVsu5RFMwpGy9rQvaypsP4UyZG9jDMXFnh3"
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
