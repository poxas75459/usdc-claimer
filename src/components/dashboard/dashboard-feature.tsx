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
    "42aBdfocJEL68Cy8JCo5J77euo943NZ6W5YEnEhbtJ33ozZbx71rU4i2N5UDPmCKemyneewUhXTtkECLaCnmdT2Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w327KX5pyV3GrfuNgMJyJSfMrDbpEWxEE5kEaMZTKSg8LK7agJNFFpm73cmp5rTCiodEzXM2LskYsX9r6zhZvSQ",
  "key1": "3YtAprNVRvSN8uTmPKBhXxtEm8PEzjf1NGyqExKXT65B9LnviCJZN8ReBfJAVED2Gi5MadKvVrQeGhg4Qj1aij4J",
  "key2": "3h3Tw3ruxyzQELSTuNLfrzM4AbkELJ6oHxNpXLH5K9PCvUhjvCDaS9t4vuB2adH1Q15pRauCLpzQoaED6PTHNvUv",
  "key3": "2M7KtX6ndDyHF9LV6JMQJW231QFN3q7dAso4HXJnRsv7dk1QdBeZWpQhqZmZn4qxY7UGSbQZt6oE7V93VChBEspX",
  "key4": "5KFozscmQ3P6vGf3rfr4qmTin6vD59x2W6Bsy7iWPGSt3wnhYoy3fyVSbECzMQqBHFrH2jKQNNx8EdGBbRRFEFT2",
  "key5": "5GX1z6sZwY6K2PFU6iuaXAEkXGZ2tA6yFGWFkrm1g92SmHSCHmnsznx5KcHRurubfW1xkALSDgPYJNYKr5Vw2Lej",
  "key6": "x1eFWjE4eV4PqeSf3HjwgrFUDbwTfktfVQRghiMeNFiWfCYhgxRmioegdxT4C14fEdPh9rdQkbSuYpu9xmU6U8S",
  "key7": "4aFC13XuNFcbguFySVKduHzCwvqeo3SbzNaVD6UXPAF8w6e1EGzHaBo6bdUypTC196sXLQCehhequX9b2KH7knLa",
  "key8": "3XrxZ6JjKPcQJuYKoNA74owDw5BV3UN5qxYmWCSktodAy1ZPcHka1rctkL2ZsQmb3nqAf6TCFfs6ChQv7tqawCEY",
  "key9": "zh1F5T6q4WfJ2dS14rUMiPg5pxyjwyaCZ2SnJUvvqJ56pAFRxVdPEyeqJeSqL5iBAGT6Mqgs98GAukNQFK4ioHk",
  "key10": "37t2AVaxFb174uSXeYUU1uZcYUhLsZAXH4n4oNmfwJjQCSp7CJW7MDUtnAXZLLLd2FnawVe7jT5dgTde5Cz6wXi8",
  "key11": "5QKvifQphHo8LocLrwor4byxBJSeBaT6WUk7HjMk7fmciDk4MXSAxSXw7fVX4HvbkFyEUcvdFFyZ6TRBsQSUH3dV",
  "key12": "66s95dHRoEEDifwNYghQRfxVbuRkjAN8wLPfjfgedsnP7N2PqcbNrM3zEX5i6HweDD7irVYHV8FSZNj4eEvnQ1an",
  "key13": "2mJCBVyrUBcz32SaRZVrBFQA4mBazBgjBgk9RGvry6orN3f9YxatryJ1mCBLNZtzsKJcXxBizbzo57o5jfwhP5pg",
  "key14": "ggJ4wAsGeHkgeL2XAmKigzZJAnLwouCW48wMHKKH6h6fvzY8o3FCuKCGwLUwbrQaGuHbzMQuqRXkM21QVJnsHN1",
  "key15": "4MHcMgmYw9KKFcA2xAKPanXBoVCjqeDSYLiD7wg5pHvQ6iB7fhnrUyKmZ1Bfx9Tjcw8eUdohibiX3unkxCxLoBG9",
  "key16": "3vNp9raEqkogXvoFk1skKJATratbfi8ifogdxupvY6sXBKhsYkXqAvND5gEfZcvMKRCWnngy7suvQk5XA5gn6NZ7",
  "key17": "5yK532iy9DAgkRRtzR63AJVVL2fMZJYc8hSuHkUQKDZnErJVeaxSiiWHYpeuDfYphYtg9uTmgrCbVQDY1giRyuFa",
  "key18": "3P1MgE6KCNXAbUmze49PSSHwZDNZePjp2UpKv3APFBWeonXNtYDouxtzEY1xT7je3Tk1jhyWhF1m7CPBKnoTWZ9K",
  "key19": "3j4wSfbZAbNkoZCozSTN5MUEbQxdj8KZYiFVsCTjfHEQ3uSC5ohDSMHbetXzfZiMb5h6wzLpLYLUMLSpcramjmzw",
  "key20": "jUKaRisX4Z4YzB55WWZGMUPdLsgPTpZ2ivcfnpB6GuSWsXPHkNCnkhb8qJDS3Y2tSxt13sAzUSzNmeebc1sYv2H",
  "key21": "4aq57S8Z9XRZ9Cofx3EEHomnwjepX72QP1MEg4LNo7jVSv8KMc8SRA7ZogZJKc8Sbkrk1YyrB9SiyWeiJfEuS6vy",
  "key22": "2P7qDpqPWCbSxJjNbyieTk4EmA3aCkj7MXQg3MapNNDkFMtqRUeAxJ1KiZ8X1UF1j79NLbF2up2seNM5mgGxUbcF",
  "key23": "4U5b1wWGj4ncwnLNNm9fWe39AcuSTRRmHSMxqFgXws2w5zzYmVXkpx2veiSJMWW9XFhrwAYoZc64RTchN8mEvrN9",
  "key24": "42WCw8GyqbXR1bADxg2qoZkvr4uYFQJzkpExUx8SiGw4F25knAACnbEWFnBEjz73Fvh9CJ6yHEhmqCa5wzRXESJ5",
  "key25": "dXtWNeJsyBG2hh1zzejd52zT4hHCekDH7Kgr2L9x942kyV9NWdahJ9c7UHLAAT9wEZzpqjM7iXG2Zhzu3ov3MAH",
  "key26": "5fa5HQLAjTfgpjscG6SQiSE7NrotnhfJQ7Q39D5a2mxKNDoPntrP5jbM6JVpF6CzJoSdiDbgPYuHsrBf2EiV6yww",
  "key27": "23FrV3q1oe76mgMNHWS2AUUfyLYzz4GsHZvMEn9jFaWRwsqWBu1SnXp5GRZkXbzdhVxYcmpnfBWfjvoZp1cbku9R",
  "key28": "qzkbgtqfWcaUp6L4z1JNF65qXRYkPS3uWE8N6iyAaNZTMN2adKv3ZhmBnCtRRNEsPz8Y8MXyZQRnzTkdAPLphTF",
  "key29": "3pdU2nNnYG2c2L8PskrhA8D59izVZFJHae7pqD2CudpYM5PUt7yMe7UPe2bmFf8iKotcEDDqZj7m52ehG2iLnPUW",
  "key30": "414Bdpyc5BBRcJiwGKYa9UwWcedp8Y74BD2dw1yJ4QLpNJnCxWvrh7EHSGpqk3Nr6P19LjdssHKCWGo6kZ6EMt9e",
  "key31": "eidjuji6ucENDRfF3sFa3BfiizLUvTTVAHdQoXKmXDZe3uzLwZz2amErsRJQ6QmeVDHAxeKS5oqHLCAgxNmXPMU",
  "key32": "4kN1SYYSWSE7vEaEZkSts83k9iGv2wrXGwcdC3q7x3hLKkaNZoCrKGGavLC1x2VFJMwYNzgsaXy2xqMcPc3YfJrE"
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
