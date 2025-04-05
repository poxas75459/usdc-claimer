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
    "g8veib1GxScTHfv1Hz6fz7uDyWZNkZHGBztTnrQYuLRGYqKX7jLukCrJZQKZdcxKP2hYYEVrB4KuZ9r3YfsN49d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UEy9YZF6TcNHSn6PmcxNatPvy7CndN1fy4Um82CAVQTciwMV7SarMToVZA64PRnWqjckrB3jv6ZaXuAPoGaPUz7",
  "key1": "FZyffLe49z3GMXRedtqWRjHLcsafaSmib4caUtPWPkaTEaThg6qNUhMSVQwVy6fYdw8V3RPXP43s1F95Cz2BkSi",
  "key2": "32va9m1uCyBsP8pSrTiPWXfdKjwnp94Mzph41pTpyV9TQcu4tzRKbd24YRDZYsw1NTs7qyWTn9WBEECZpovNbkyZ",
  "key3": "2BwM58c1KSu7NLKFfz6db31ThZiarSGFK8WD2NYPYGguRTMcWDzNpAfkZmXk9DvxzQoTwJUh2HFiKaiWUhzNBRS7",
  "key4": "55f1zqMzGTkZEoKsbifjhhLtoxWtdKnPtEFSUTzTKXgFnPiQ3jBkZQWsNmN4hBu4GGdDP8PgXiQuBPx3XtjnmCTw",
  "key5": "4tJAvWezqYGYitWsrKUVxJUntwJ8wsp95D5ymQL7dgKPmm8z34BpU6x6183w9hpwBRY2a2gsvnFoup1MpegRhkDx",
  "key6": "5pKwqBNSovfTTAKhwCQZpXMM5cFpeuVkULgDxTbmXumMKHZ4QzSxBVcTyrLdKNUjFRmEPaXvZZVcYHSyJUxSZoBv",
  "key7": "65gNWDzB1NZSkDCbrYdUW99d4EdxBGYauLDhSALHp4FZbZtehmUyEgo37zjngHvMAJYgRGnyVjS7zh9LHAbcmHUU",
  "key8": "65TEP9DVhkdmtr7N7eobiGVSeLeVf8HJZ7V3RQscVHDGS7CLSb1iMe4XtjQwfBDARSeXRAg5FjpMuWctuWbijcFq",
  "key9": "3XeA6CwAT61zKnYmwbk4YRouscEsKBKDag8PmNTUDRSs9GDjQLG5hGgtCr3AgrUKcAYqxmCA9XUqdmLTHBB5TgAH",
  "key10": "CAMj5sQwVKfMF289CETPtr4hfwGZgDE8PGmTGRaUGGd2PVsHPZyKuvaagw5J4zGXq155MeveLkkRNP5WSohrXbL",
  "key11": "A8Rabdx2iq8e6LvNrTaepR8hBAmXzniKZjPjgnJrVktuu2KrbzMyS4ZJNZCM3HxaxLHqWwGZZSKJjxEgGk4v7oD",
  "key12": "3n4hjAJ6ugb1KJJmT37ydrQmTZeuiVFEziCSSZ2nEM4L3N2Z1t4fFJKegFyPfmCUz36kzvM4ddpXknMtJfZ3WPK1",
  "key13": "2EdNtBZYKbXxPfkQrTLa6bV7Jjn53PQqHb6PRCsGBS83GM9TN3xdLzui9YuWiURtkeAyEvPPoywpbsc4Uq8wrN79",
  "key14": "3XbvpzYCK8wMTHUyhUJCMWvCouu9RTWry3SjUhHH3yhCGXNR3aZxPqSZT1BUGfjcHrcJRaa8S7bM3DT5DBKXkWwg",
  "key15": "TdXRn2kn9oC1ytuoL8B4yY9ro5aLwS5rf3sgtyRYDH39imrt9MvtYEj7eGWpyyQjcTjHVQ7H2KFvDTsVzciMEjR",
  "key16": "VEpQ8aQ4aHdQx7AzNtUvqDtfSAsCVHwesxaKdyGoNx17oZSs7W6cmqzAHbccYszCepZCCDUcSs916BkW6Jc3p1h",
  "key17": "5aJo685Pt3AbfeUPHmPLJ8ivYyzqRaQuJEkQJKm1CikTGVQmnQBVkPRnqBQ5ZjkDgjYjDRyunjtBXpG2h9CMihp9",
  "key18": "2KN9YTAr3hUBPs9Mpx2GBgbf56pEQxFobMV7eGXUr7p47DuzLEqD5RANJjBFShZVmDiUbgEkBfUsjr7nGCaqeecg",
  "key19": "4x5yJywYjQe4NwTHRMi1LSP9cXb7ey4aG3CkwMaW2cTEXxr1S3bbDxw1Tg68ykYt47ET9DPmbZzz6C5mhwZzfrWd",
  "key20": "2ACQWQiUKzmtNR4QVRsYGEy43Vqb6TYUwddgRKpm2edGNHYfFxoKK8k2GBwqweGZ6vQKoACVR9hWgFp4P3GkZv5Q",
  "key21": "2MiGLsRKWSKANxrtPPRdLCVJ669U1BY9H8kkCEzCDzw7XFsV17ywvxbeWnkkjLi2z9Ac4QbgHsHTCWy5dbLTJTg",
  "key22": "Lub3kFhZsTXbDgrm5npeoKg91eXTgTzzbJeDmzFN8SfH93kQ8H3tqT67Nig6eoUchHXAe542zUH8WhRfaJjJWL6",
  "key23": "8amAW871etPXxukhPyUzVRvvvhP61TmfT5rLAo5C5tEGqjjvf1jNFMUFouLVRUY48E1EDkToE2die8U9dYJYf9P",
  "key24": "2sgKz2HzUhV5RHydxnJZyBgT45f1hiGLZ8JoVbEs3Pz3Ndfoc3PM4gnusCoeBdDVTDN67MmHVzjEo8fNbFPZgatq",
  "key25": "3RxuztbpBiGWppNZbuCMq9Ww312fvGdgxTiKPnXZGoVxk6MwAwcjccZxG9bSX3TNuCHxocWeoFsvLMfwNmZKMn9S",
  "key26": "44cfDuJr9q2vATNmTPD19bDbPmU5TZKYaGnBuJKsbFQ1yo5gA8HTQTKAwi6p8xLp6v6RQf2yKiYwQ7NuHGRPVfJr",
  "key27": "ygdgXnM2LkXRL8WHEsZMUp2sXdam8cjnDU5ZwyFMgHuj5PNaxAysX1segjtemMRAKprsXuyENVBMAjomNKiFY8S",
  "key28": "3W6yRikBDyUpX3hphqX2Q8x68VUC95ekAcHLAgtTfps61B9YVjHdfU3NXHmdR7TnjNMuPM21KybQFqhiqfkZow6r"
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
