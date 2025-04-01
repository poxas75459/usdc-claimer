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
    "3AkeYZb3XEfpBLZx5m6zTvuK5LPMra8QpoUKc5Uh93ZWwrLAwPXJkGtsxfMdStt3hJRNpGLwuTEhP97Zwg7d334H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WxHKhUrzm73R2iymhzrLUD3vgCHuU1WGTNmSBi2EcdNgDKNgxGaFuZYuejUTXNqdpFzYTapowoMh6EvyiaQvVsv",
  "key1": "D7EeUZr7Sm2bgfXpprD6svYFW5XXsw7rD5pGkGPZPqwowKMbAE6DuAsdSZjFFqqifULxLpZmxPASUGCJ8rrHfL8",
  "key2": "5rdct9CoxELu53LcL2wrRS3sp3jaUdsotYsNp98coKNFTr4m8JqcNJ4srAXpoL9pMubSPnGrKpHXoUtoeAdqrC6",
  "key3": "3FyupXpE73z8XPGvM2jMmpWSnf84G97qWXUFHXcaJuL4BaGA9tsiAcgMnv1TYgwz9iRLDL1AHj3akBHULXW1WB7E",
  "key4": "5EFXvuXmQ3woZa8t6yvPePEfPTxiS1Cs9pdwnpGkpYs2JiCofU2oa3TLACNxeV6KB6cwjMsdEjUy5oGvsX6oHw9o",
  "key5": "4wKffyqCCXgrqUZEvSMzwuXjvzY4c8Gyg5g2JE8jsSvcwazvaQYY9E6fLktRCbkNRnewjCesD3o54hz3J3Ny52EU",
  "key6": "5Vz9xyW6iEt4JASXqXikZ2XDj3oieZTxuuEmBqbcf2cWRjKw7ApdJ8pxQnQBsiLGbRUArrEb3oVpKQRx5RANjcsD",
  "key7": "SE4XYwbu8w7gRXpa8zPbzpjZ9VvRke9WzrvFnKSEFZH5boPajydkeyNF9UuUFrNBCyb3wbUqSBPKM3Qc7cghGzt",
  "key8": "FfUpo1rAkhYPdjn3QS8NMieGBs3UAEkP1Uz5QMFv2FkjH8SHGLngQVtmhTPwfHbcNT21uGnUoNQDkYWNc795rF7",
  "key9": "koqFecWt4GnYQu8ap8eZSzeRpR6X8sLM2h5ooFK2MtyAeTGtWgjuofza5pLYVAX3BJxwDs7YPhMdziWrEo5F286",
  "key10": "65E6xn3DEouTerWkvmi1NkxECnqJ5n19YjNfmgoTrVLg1NRtotRtD8YUtEXDyf8qLxg5bVT6DG5KdEFoCrb24C2L",
  "key11": "2z7V99qwPTveVJxPScayfFsYcHoB9Dnk7YvqAi22KsD7VpxWgc3DoQVEBeEKfMpuAbaJFVfmi8Pdw4i32PjCScGp",
  "key12": "2YmXFwTPhdJpN5UZBDPV73RAP7xi13Qk4mVnMywNuMD32KzTDbxAeET3TsQgUjWNKgChLB67Tp1bt2Cge4uZufGu",
  "key13": "4FzBhRFBiwgnjB9wQEqmQViakCQbMiXaaT82CEQSYQmQj134pxTDXCrPx6GP3pXLMdfAeK9GfQ4ud7KLufiEe6TQ",
  "key14": "5c4KodmPXaPxBZAT2btG9RuCKC6eiYYXJqqx7eiRbxJwqgRDoG7W3yPyrraNAahSULzSboGm1mB43Kyg6kirMtPF",
  "key15": "24PvDUtfMSZyKgS8wMR5UicUqkHXboFst216FPqutW835YVETDp41PN7sUJWNqkNU3TTYzxKJyPeyXx5GwLSg189",
  "key16": "2soNse7eFa2eUMJTSE2G94GvM4QMCppMC3eSU3dKDS8McRhFAL2jeZfQnbtARksHJGiLNVKo1DPRewqnqtgSQEd8",
  "key17": "59WMgntkEj1ZMW51QAW2od7BhhfFU3rqaFLQ5NVZRsDmwLta2PQW5gpDSnjq9WH7g7GPQoG8yf5xbFVxHFnoEkv8",
  "key18": "59vksb4TzgVggfvd6SFdc2HhjxNzLoUwAbzAhnViWnpos4hhtNEHueECxCh5Sa5e2m5wjjpLWMpduiQNJvxFf7GA",
  "key19": "47WJg8rDVsdFVnoniAHLrnZvNwc9TsXcgX52mtZVDgozNUbStaNuQLtLM62EK5x3crs7uXYdpwWHdTxdzpfTf4CE",
  "key20": "37RUsawSzqxRSi9s1qVqK2wM1Aj5xBqNDtLBQg4kUJHQrT8sdkFwy4GLAtcD8DHyficXVzBoxZ5T4hMY8YCTFhu3",
  "key21": "52i7f38wHR7Ca9iYw9sJW2otHcrc14F1LzK7JanZGpdTTreFxmRJwaNC8hueW7ZwQEQDXoAmJ5w7ZnEbKCiHWxYA",
  "key22": "4mzq6BEX81ycRVW8KuoEJPgLZhrkKiKGdAAxwKwzeCGA2ZLiBinswFqp71E1aFt341cMiHnSeygE2aqSHpc239F1",
  "key23": "5eHPixbTyGcFUztUSsA9UzByF2GX6UtFFfkc89CVuFy2bViD3zR8xsnSc5H9AUrYzrQskhRDRySZzxv6ffHFAXoC",
  "key24": "2xQ4em1sWxDr7PKHL194bR5Yxw45qS4g6aMDWgQtznh3QCvPW9SWS3YieWjtwmh3NuDsC8sDA9K5G8AbqiCDCMRj",
  "key25": "3g98FUg8ifxvLA8RT56ud2tvAEwaKrJyVeLUi49aW1B3dyVrqtYYt5aG235ziZdTFWv2RsTiq4DzQwRg4MDxYWKZ"
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
