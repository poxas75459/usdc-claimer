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
    "4MdCFmPZUuxc7wSbYNhXHz34cLJfskD8YJipicEyMrBrL5FFkofu89HfEAcCSg1gaLqkG6xA2Hsm4YZjXEidTQbn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VZojZVdkvQfZ4AeAQpD8QWL14qa4m1YPT2SNjnvRm4sCg8q6YzHcRjwhbYy7UYzRZPu9VuRMu41Yo32VfzyqdbU",
  "key1": "2LZRhcQtTZTstwJfdeJMmo6sGeMyx4iqsR714qmTMzUgJhCFMYRc9UtztDA1WsaYUgrXMfQLT5RedrSmYLkQk1Vd",
  "key2": "2ySZCaL7aqRJ2ykKA6U756d5DTnBBgzZqM11wTjTWH1VmvT4DEc7tZc3GWKs4kVxhyPETrEUA3RJbrjWtM18dQse",
  "key3": "2KMtMrW6yoCJjs6VFTwKRTVAbmZPgPBsyUeHprU3JoyMyinXytggge5TKvCUhLBMHvydYAZeBeshc7gjhAyCSvib",
  "key4": "3USLPQ5WwQR1FAuZnxNnWVbbbz3vrp7mfXvopxdundcSSPoJ14BZgtxRwVCEBis3v31ubzduZs7zjfHQANcZ6Giv",
  "key5": "5i3yXqhTy47JPLL2TYYk6WMF5vnJLUUaSjuzbvUc67KGPhp9SZuxa7xVWRudKmccV6kAhmMggVXnLyRSwq2WXwsD",
  "key6": "3gBXqWmGT64EoKBiJBRgcYk851f6HDm9ZGk8Q2QyC2PFV8QYq2Ps8gnzxfYLRUdeC86dfwpYva9z7vmb8bSuLsEV",
  "key7": "4VxHP8ieTV5h8rp6jRwKTmidj6r7LAJp6X3j2pdwbzLCoKs2BK25nGH6VHRT3uML4Qnmfy65ScUkeMb2mHAaRKut",
  "key8": "3PWgNMgtw2WKJpazpJ6AvCmurZzuseDFbDUtwvPok8p5rfYSLVFVHe23C57j2bkyNcnkGMTGo4JMmDph4wiVwYib",
  "key9": "3tdikayndwN7ouVLCEGy2Nh5aakJLzP5F6kVa7zjDEsKBgrEnmzFXecfYE99Zw9UicdwVjYSf5qZQSD4z8aqZ4ir",
  "key10": "4ANSwBA2x2GAyUjVWmVgMFegneRRWEufwoPwCXgrTeeYZD5xzHqbYxDteiT2APvHm7PnC8hE6s7Qabw7hVcYu7DJ",
  "key11": "5NyKqV7caFEbJ4BsGqLpNYY9TRfSAEJjKXCTkLnuz2QVUDQuuq9MZFF5vZzL79sSQ7ky72CV8cHkpGXgVfSsYapL",
  "key12": "64QRGnFi8tA3UtgZLbYMYeyT6rMw15YGFHoZtnyCCMoecyfJkJ2wVVtd1DNeF9HMseBdXixsUbPsixZb1CYTespc",
  "key13": "2Cun8vhWi9aoN3HfcRve4fb4SDhYeeWxs5s9V9Pt4Un8M8h9o9n8JucxXRSckBk59odVXKn4Bow9JQTz3HAH9yjw",
  "key14": "Mpr2qf9TMK8gijAG7Tvj5pHpbaRKtSs1FovrEnFyutXMEGZSiVJNcVNvuSkGZ3wD3sBETYSLYAuqMdp6oHHEGCi",
  "key15": "2UHtrRQo3utCt2cGxJz9EQd2hyMuFKdwLFT5ktn4xd2CDG8GcAfBej7GzgHLaVGpFZrJBy3Zr5XtT1Hb6MF5Gd4f",
  "key16": "4hRApZhD2jerBpLXT7bnj2ipJ3GARGc4xaahPbHAVGSa5gXnJHQt9i9B9YDcaasX9XNGYGqv8dw4HQYpyBZvqNSA",
  "key17": "38rSENTHhZ1NUAVcdi9cXeA6wAJTyDZ76moRY9G64Unn8oPLhtaPPJTwY4HfEvRav1bGgqxXwHYkww5qUBqTnExn",
  "key18": "4aWkvBY9oFdV7cTsk6jong7okVM5c7AUhGNdCeEVd5tvrYAGvtrCJjQpw6mBkcS54G12TEsuG8dZvyX8x7tjP2zu",
  "key19": "XNt9nZujsYkBcKg5BC9H738vLnp8EYwpUk7rkbJ6PSDKiTWGQenqKH6DJixAfVaJfPtFZcGZszvzsFoTSxn8thM",
  "key20": "3H8XpsYTqQigRNSgW2XBqfgrLEbVKkocst813DMoCgAj95Nv323P8YGmJpVnyTp82zhweaMCX48RxTK632A7ec8f",
  "key21": "BSCVZLmFVSJxvRPhyTq6WgbDKZ96QAcKZYFPA7kHBvBFNrKS2j6VKgk5vcA1GvzFp2UDFwggWxwFhF7md8bLs2B",
  "key22": "49DiywHpbJEyB3oxpSNUeWPPUjB5XLjBv3L3Lv496CfvQejNhhUpHnCyvmA7rPo6Yc63ULAxDtHWfKQVvMM3wxXL",
  "key23": "5F9K7wdBHUMQu8DB2zYgCN7FmnaEAGiaFB1YNX8tLPjyJV1Vgx1x753VqXgLpNMXvwKnpchsc2s1eyycLDzNuRbJ",
  "key24": "3fv8zNr5Z7p2ZEJwwjuunGnP6MyHiPwxHE75hdh3J1gWH16nU5E6SvEmwmJVRske8ybmewnheHDdzenBEAzYBjAd",
  "key25": "5ML1rMg6RsTv4pvGqtdzHqi5ubRPsNYF5dUHyoVGehjTG2tMRDvkx94NzxfPmaPR8gipyQBSeDVBABQFN5zJsEeh",
  "key26": "GFdc5LBm3UuP6t57Jpw9EbvAwsox5vQCSYTNe6LNHrkpC176ffiggXA6gtqG1N4hY88jZFc84iqfD5QDExgFAdv",
  "key27": "Fc8pnasR6zVGoJyQLnCpZr5Cfs4p6Nb62gyJxfRM7M8sWqmninoxP1DD5BQz1rvfVtwYG6R569iy1uP3RNCQ7fi",
  "key28": "5fgUDx5ibgVqzVuMhD5VMXSa7bHwg798XMwargX3ct1cJv1ZmKYDnZjy4L7XSDYU5UJ7cZehDozY1sogXuUZNWqE",
  "key29": "5HXy1nHExD5wfS3xEDmub3Uw1utKovks9716w9vWx6qqhyUAB6FYa8ixKnJAbzjT6CLEkpTJWq9AfrSSMHuJUTUy",
  "key30": "5rdzkVMptCzbhEckYc6YLxYvpS2qKsyTtJAvymi2HDY35jAq4HKgHncfVRJJGm1FQQasAbM4GzDgxLLpG8kU7uwx",
  "key31": "8961Zg8A8JaiF7g3MHbp3gWQsCeyQgfeUCsQKLGBAzt2ovuppeR6zbJ74Uyq3TyebC3jV26vmuRVPK7oSyeM1Ps",
  "key32": "uXMxuSxEozzQoZbPffjf5fpK2rdbecLULy1opD49vgxvEkN3Ey2GwxcCvRwqMx9JC7wY9D79zFJ4DXqi72niJAt"
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
