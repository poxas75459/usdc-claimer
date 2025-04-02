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
    "2GVKTmBJuZgQa3Yk7dcU28eSux22BLD5GpbvVBm5Rg2NSx9eYbx62aXXRxsEXjX77W7QhJ6NvTRnstmRoJEkaWdv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e32Hb3XhfzVJmPoDR7o2bYoVn7f6E7smmX2rxeEigE76zADQQbDTNR4xWYhRbUZmH1R6xM2vD84ZPhifTjVX3Lf",
  "key1": "4C8hjj5uREyTFrFoVRz8ni4RGJuKU3WLtFSxzc5P1G6hBQnDEW73CcKPiVW69cAFpTRewHNrhxJ45u61qzvTmzP6",
  "key2": "9qbYDsSXRQEGezNvwbkZ1z3NFCHt9v4aytfNphDrAs2qs9r1a9J94AvtpDmKk4yiamTpL3GTC5mDJJKmaCKRJoF",
  "key3": "HPniJxf4Ww7bm9xkkyVH1itgP6LifADBVPxHPEGpaZw1AVrGKxgSMP1CLNoRkw8L3oASkiG27zZpZstehEgjUQ4",
  "key4": "2KZ2LK1s4VPo6GHzNkWUpfsNRTjo6qJenNxhGTWPKwZb2bLdmKHdEQDePQDjGfBxcoLdTkajTzTgvW7kf1booMWd",
  "key5": "xnvS6pKi5hkJi2UumGa6wrrNd3FkSDgZ7BNg2BnuSe1sMG95vjgA2xA58d9SkLbf89kLFq4kiDxiy5wBTpYz4rr",
  "key6": "5EmmtcPLz2rFwS4eAW5Y1vyUtdY3oXX6KiN8bd5RDSse6uikzcaVKgsXNva47jpxnyLuj4zPvG8tdiwqGKuNZouE",
  "key7": "rjFK5Je4k2DxDEtkrBPfchKawuzHkXKXW97BhhXk7wqffJozCfwetBgyuVaQ6ekWL9MVFJu9GRDvgmLNpt2Cdnv",
  "key8": "2koVcpprMtQw5wQZbxj4Md3tbpt1m3DXXoN46zGpqJoQhfDKvudReceZkiUxq3FDD35t2iXKbJZXhuPgdwq9SXpZ",
  "key9": "3PFPqx41syCNK62Jy4e82Cn2as9rwD4jYg1MobEVkUXY23u1BDG9Q32YL8sxWK6uPyVRdSQax4fVBNB2g4yfH4g9",
  "key10": "4jzNpjTo5kJesmSj2rZXfz8ozATLqPzDtLR4jR5BobEG73uxwTzzJodK7oSoy4WQ5sBzAxxLK9s4M2snKwitQTta",
  "key11": "RN4uodvXPQTVV2RsVWAsEy6cwvXxT7pVptgY8hQbCnb5AGGbTeh1zzHKaW4Bvd19L982AFjNtynfaVxr8eAcfzt",
  "key12": "3EwRZEF9nCMLszxFMk5gJUhzwjNb4eCHKuconTRFL2ayA2K8H6f6vaEUTnX5PnsAcrjofUtFRbY8dT1BmXTEJXmG",
  "key13": "4qbRfPb7L3WTZYFCNibLKmweQN6WFWuLW8oPdf3zbgpAR4x7wfm36TAUT6dBkzHZGfmuRc1aDqqtq2Em89vpPPVg",
  "key14": "4fKqbyQ6SwQTSNZChcBjsvR5EmywMGSND2WuKHRohM83WvbsvzLt5ou9DfbfReodvvcnXnBZ22dhNiL4omXPr6Nv",
  "key15": "2B2CvsS6WtQHgX6pJWcZuTWU437vtX5vSFhs2cGK7VX3QhdUgpY3JWvXWwBMBBx5nxMW6YhKuaZMeZUwWoNjnZEZ",
  "key16": "3ewtgoqEZEDuPwN76iy3R8FAY1FVFsvAQSMPScvkNnsJfg12QPDaAQ72muWRXbHhgmBhTPK7u3Pn6emmtvJrVyut",
  "key17": "5oWBbZfFTQRiAZ4SEordn2pqb5tViJMZBFWEQ7Xbd7TLvdEneXuWVJxuyfB398KHWU7DCuycTDmUMzAJm5PzmrPs",
  "key18": "5hHtD5knaQ8DN9baDGEA2VwXXNvzatAUzWFPqfYTTu92vdpT7NWGz8pbi31krPqyVMNe6SfUBBGnnW3mrAUwVMGG",
  "key19": "3zXgRSoZALa97eWyT7zQkr4Wz9U2pQfN2RT6Z8xrLfZWD2iGSVp84aKifHX2hRX8da3QMnr97m86qAs2sC7jX7Py",
  "key20": "2FcwBz3DkSMqC3jZKKmtPa7PQJA2foQnSsszVKZadbsTeChMzqJDbNfuYCFLvxsm7HjpgL4RrF6P3GbZdRqYLsDs",
  "key21": "2qMwF9ciUFvQBDZTzdtYpYaRrrqMoUhHTa56zEV3F8PyXo1AA6Z7keRe5TNt9a3gVR3jn3mBbDAx7cdHfHLm4G61",
  "key22": "3W2ixV8s62dBUqUSpM5RHgEzLzHJvaaP4z1uuhoUSF5cVdS8gsdmiZ6XXGXybnLYgnGcwABv7516o2VmKetoWzms",
  "key23": "43gXRZWuYFrokgggLyCkzhutyxFH3T1EWEY1nFSwQR6Tno2vo23omBRbw6t2gt7q8exoZUjtKU3twJ6cuy47wkn2",
  "key24": "2at6dKLBQ9uvdCejMNXaZhHvdoagM4yeKKWCegfAqrRG3CgvG4tEmpixdzpKEyodWhBBLW3Mpc8YEUHW5anGjEmH",
  "key25": "4gm9wW12H1UVXaLL9yQXjCYNmQjkuRpVtSvRxwdVLwpn6VUNZ9xbGJHuiCBj9PoyrHQC81sBdT4X8xji94PHsmGo",
  "key26": "5ALu2HBrid4pW4K96EbQqJguJkrXfTZKdr9YXdUE1nhTkEX9FMYrG9KV7J1oUhvuoVEehkn7YFLh6q2pn8iS6w66",
  "key27": "2keVNuBRMqmRRKGXCwAEX93gLgAafEn9D1w6hTewaDgDqMx2emg5yDwN2ufdCjdDp2chBH4LpWdNjLc5EpFX9TLf",
  "key28": "dihz3cDr4w5PNw2bVfjfoFtjRavyrTPS5mHQGB6j76zaaQ3SyS1woJtWF2LXTbryLDGp8MwqNn86VFzRYNn1GRw",
  "key29": "49GUyAJJPvMfAmfgRGHYVNDGJxHwmCWmWUPKVZM6YoHzRXbVkqDK4xXk8Php72r1jhxM8iSUNVTfDGvXUkjC2oyb",
  "key30": "4VFxpXo2px74VRREwyxQnurSKC7RZXFqYtWtSjNAm46G8q7Zq3G72KFjzSbPXNumroimve9sqkKwJpPXk8ivPGbK",
  "key31": "4Tg8UUsoqxMmwZ4vNV8ngvwg3hqWYuD79YkcXA3PoGDYYrA5osDM5mGwXaTSYa7RCyF3goYmM4J5sdCFKsYYFjSx"
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
