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
    "5ovvggxhxx6x1Z37YEVFAw1XATLZX5qbH8dtuhDPjfGjJeFNx7TutfQ17nP1pWfdom21UV3gqLkE4DLnNGDET5So"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v4bPsUarzzmHBCirCG1Acv3fvs5z9zsqDEY4gXAdAKaxrJ7a3igS1hzLopfuaJ4z9oQpXwJhGEAp28fpyZfGDss",
  "key1": "5uBCHJSaoTmhKKyQwct84peoa2qQAPtZ3Tf678K4Dwzj5nYez7X2BUYURR8gQXj45dEXkbYtG1nNeEL1BJTzhBLE",
  "key2": "5bAPxmqkp4mKmHZpARNL8N9qiPbXyZDEy3YjnENx1b9xoUa82mHCkiEvMf9CXYjQ2xs1TTG42Hjouw9SFFgRDque",
  "key3": "3iJVwrDGUx2o3vz6KqFqYZyJ8bjgB7bbnku71XASNewwAbV31aLuYyeUw4Ni6u4euFRszQ6345P3bMLGicL5ZasV",
  "key4": "3Z9h3iv6dFT5keDZaxifLgVBd7hBsNoN4vHRmJ8dxsdFADqv3k59CaiJFemoBG8iEgnfMnVPvZiUWC6o6nnTsYm",
  "key5": "3F1dmeoCxDwSq9hDtiNUxTdjXMvqeDhTko3QWz6J9RUMzRDvcXG63TB9fEh1WNVS8fAEwcrUTjuPi7WsnKXRj7fr",
  "key6": "2NTu3p2gx4NZQuBM4YTWeHH9fo8ATpF8s6CSVns1PrapBjpQovtFRQESG6xB8NPDTYNGKrnnutmLojbmKNh7tE33",
  "key7": "4Vq9uv49HeepBtotfdG24t2Aq38Q8zM19QYAqCNSe6gr7BRJUAyBHwBoHy5agTHQ5QMLESBR1AE19uBTKo5wMrnK",
  "key8": "3f8GRZaDaERSXxaX56L7PbkLerwGZknSu5Wcp6JH87JzTfEyUU9rAoh1FXyo5CqgwfP7kddRHwREJTeFPamcn7e2",
  "key9": "3bVDqM3BD7aUP3jHRcKcQYgayS5Eo4ykSaoYXtoUMWsek1H2sXE5ktBTzTSfU8945zHc4H3Y3HjQyWv2uqvYuw7M",
  "key10": "3GxCkDhznircNE5qrFR5vantjtnVQkzqHty2b6PFL1qNuzu5H4g7U9cHrHCd2551pjbqeJzC2MJ7vyxokvLtJPkk",
  "key11": "yPaYHsux85vxoDFUXvBHSREB4kYWusCSC6Rz9nU6rt8MnofGtjgMwEkZjbCv7vQfdkSxmXxhSyQWTd9JQwhzu2X",
  "key12": "2wZhMvtEaaggfTCHfje4vUR86dsBGgKfPDmgygrCyavdF4osJUTgiJuoPtLUQYnpT49zAzJHD2XT87dngjU7wn2f",
  "key13": "5ixWDTgBqWBqfecpkGdQDHrCUJ7gc6r1jzoR7m99irEjTMjucQNEJMaPj4FrsR4jg5fmo8HSAsWzRFtB539JSs9W",
  "key14": "3xrM7vbPm1phkWnMPxDSxmrMb2xQAVwJfsJUDBQsoiTNqWvHoSRf93UZrdnkTZ2SCaPZoyjS3KGAko5FxBfwNMoF",
  "key15": "3hap3LCvpHXsCCgGY7qEhBNTeW1w5tjd27mJsRuNxbA4v5scAmzvc6xNhncPhZd7U1WGY9jjqeajs9qzCJ5ZBMk9",
  "key16": "2wNHAnQSSjr1cJ5mWPZKxbbfG5U7RpsBgenGc9nyL9ev6KQ3oV2fziCtLgoAmbQQJdc2HHbvbQoHWmZmgiY1uJA4",
  "key17": "4DkAohu9A9GKfAjPFdYKfVMRNu9z2xg7Nk28UYvSoaYZdTWF3Ws1xtKARdooS4eMWUEitXFXgy96TDWoepUe4G8b",
  "key18": "31Ysp8eE7Zh7yN3sFe4eeSNWeGMrg9NvmjxBLSXVFX1qG4wNNxr7jdiSVwe8i3x8Rb22t1tCmowmK9Pnvq7Jyhiv",
  "key19": "535T5yyw8fpSZRm6birygWagCsiMNgr5mXxLpLtp7DM2Djqq5XcUPBuG3oAyE2zB9mTGfZBw2DENa6A1cyWoRqv1",
  "key20": "4mMgDCPNsYNBRt9hKtmULa4GzxwKN5KtjbGP3oivgbF83DGz9TD6YMTHHWwL6PR4b9sNuaoQQHCBRAB5tA7r1kDN",
  "key21": "b3mGY5qWyEQ1oyjcZVRyxb7HSgCWYUN2gzfopshSr58GjiqmBrChzrmS6fT2bvk3evFhxTQH94YsxFzXRn8uVnk",
  "key22": "2ht7eUHD7Ao61cpmZwaec2Sf55ofcGCgPRwmVRsUGnFkd5y7sNN12AAD97wnHbRn5Aak9H9gJ4MQwFQVFoDXX1Gc",
  "key23": "4cckrm7PqNYHPebnrFPeqJHCDJtCeg8hYgJFTpfbj2tD2BtdENxcUN7tyv7zR94YBxeMNT8c2diVKiTh5axjHeku",
  "key24": "4oArdGnPEyzPKnNbCZ4V5NakM8sQ7Vd1Ko26QKAbidjzu3SjgvmVZDfCwvToEr4pycMAoVJoC5C5QE3RJwZfQ87n",
  "key25": "QfFxTPtFinAAbgLMYF4khj7TCtQVCocRnbUTZmpX8F68uUcQFhTCSoWQoyDazxsZGKwCCcco2MnXfPWz54XGvRQ",
  "key26": "3PmC8MTQ6BVrqdBLS3Vh7fVUEnXETcUeonCQNt2c2pLyY74Pu9GyN9LLPZH7JtbiW5r31L5pnEcmRkV4hA7LeSba",
  "key27": "3asLwb2UzKtvrq63bUkMHvr2frcxC7YNnthY9ZsSwwaVnSc9BQKhjW5auCYf6TWXPS6RLXn76tr3Ke7tmKCEqSdv",
  "key28": "51QJZWNqJ4kSvm2bmWurRJgj7nySmKfEC6J3Wd4QbgCBm9rg7dg2zpjR1nom4HppvRV9sEycFn7X5a5tT6kf2qsx"
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
