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
    "oA6mSFPxvFEds3pPn9ogXVKZANpZg1yUb1dGwEqF5PH627aJ9yrS4E19LJn4sM8MDZJDFqRotkiVKtpT6PDBSq4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22JMR5uLYjKdVa9BpsiCnzhpPZy2cvNvUDyZoTrs7oW95bGPCN82SEfRKWKVy1LEVaCBkJoNxQndEy5Xp4ruxUes",
  "key1": "2NYr1GgieeNtd6nzjoMLGAzi7zBYdGneVgubQeoY4SD9GS4igGha9HoipbS49BFjb9SS3HN33FPPjNbR7CPC5NLC",
  "key2": "23fzXWJH7h84cpLpBxa9rGqLzndYbs2AH44SgLnBnhCKr7ycpsLm3CzBLCeAxp4vRtuBTyBx2zusVpMr8h6DpVcY",
  "key3": "4etdjMv6qUDaDGffntsAfDEyQQ5NSc4JtiFhrQz3WU62L3gNkKuKepTC1iYmi4yTNuWUuDpVpVhHwdFsaquCwMP6",
  "key4": "5RfygQtPYfBmNydx3MguNraeTu2gpEDoEqRPaWaZWCTF875DUBLynYKypkgZqPX7sBRrq7sDhTypmqT1NgCUTfEp",
  "key5": "4Fz8YYqy9WsoBYJB9WCmrZHrwvT9NnY34fexYDdWworX6htF2anctHH2fHNskeV1PYWZFFnULjeKfkYHVcadBHm4",
  "key6": "3E2oCUuc9w6AwMxgK3aYgkzLT23ZmRbNxZvkHUtsEZdpLGe5EuD5VZjcdZcfrxECA8dmBvrZThh8LVC9fE7pv9W4",
  "key7": "4YRkoJZ8eAcZrjVFaSeXXVhXy99wvWrLpp8wxzjhDyStz9ZEvA6uYDveSx6zjfsyPofsjoFaeVTeGiDeVMFpTqmZ",
  "key8": "AvhGnc2BXnEfxd7ACEobQQn2qAFFbdzMfB8WVoiVK7sayLU7pM3cawPVAqqL65MYCqSDwRRSKrLcwYXPBgj6BKL",
  "key9": "2TqZFbM46r6k4AA88RA4613jBGjrQVe939uofsFL6iEqnTcxz7pMRNaoNteZA2WeEZauVw4Y3SE4CJcF6ky83PvX",
  "key10": "5JWnEMYBWSoWaRzv5mnZtAH9Hx5AbbGhvn3sPToWSHoEmQCEKt3oKJnv8cUAGxt4vmWaB6mYwkoCTRKNZfoi7Jn",
  "key11": "2GNGRWAZgCxxSCMrr367t3mAYodXjmRNmp8iCeBbmKtaeZt3D83bcJW2UvRenSgZPVnpaAx7Gn8vmYgowivP1hB1",
  "key12": "3AY9F1HFCJLqGqvrYUg19mK3qmwuY9EA5UKko7qyUgys48bH5LJHLAyjSbAyZAWg4haT22yjUgC76az4B3rq6kvS",
  "key13": "31nGsyyavBcx5ggWPmy4vpEHWC21fCw1iuk3A6CzquaCkPw2jR2pkLGBR3vAdrs5o3KsZwumpxH795cHvxauQ5A5",
  "key14": "2HFsge5KKpbh5F3LxY5xvvaFag52Xw4Wb2k5gFU2fmSnGkMxytFzLedwV16wHiToaWeC9rwNbCiBZ1jncUkFdNR5",
  "key15": "3m6MdEKMWqFTbSiPgCtHWBmcMx8FnttWzij6HBLeeMwVeWBhSdZZLjKdLk3PoUJkiNJ55AWijY1Dm3zCvMnzYJYm",
  "key16": "Mz1nTSm2G3t9reg2qgvy531N1KCQQW4FyKycEmx2Semivnee5tqK3JnbUHcwBQVjVXCcMvKHoZ49M9z26TFVeDw",
  "key17": "2YQYAPjVcYvtYySNrJs6xQYyy8GJCXzzgNKVHAu6bM1J61mWkj4uuWFn7MyMGftdWM1Dfo2Y6EkycXBvhU4edSHP",
  "key18": "5rAGZctD4GqKNhuZLcubNG6wnBqB9P3M4UTjFznyiDVtQtWEopDD93v5gvXE5XqmFt1adoMeQJFaQaphaBgmcUZU",
  "key19": "57yrAKc5g8Z2UtG8gBiAFbbKVkfUKeUqkyUUqbW6WCS4AcsArL1LwojZuE8rpV38MZDmL2dJLerNzLos11rujLF7",
  "key20": "3bZAqegYmgLLYycZ1gdB14uim2o6jUffMkDzogfW3inAAMbC1zgcUn2yD6wAiVpeZtJsrtM6RCvMBPSWGWJUonrt",
  "key21": "2UMoEgesG26dgy4VJDpXM7YdDf3cwTLEqoSvcbzTgGRvbfHKNp25JZhcJVfEktQxaox6FmyxXSGXV3EFb6EdQaqz",
  "key22": "2kdfWgdDoUhSmEMksDwTJ1Ye5WEgN6F3oE3AE3BxS8fCvyYbvJRScyLCioxkgtoG6R62urTPGr2GzuBEon6pYd8f",
  "key23": "5FiioddBfA6xWszaMVP9UwBaakUPt45ukvpiUFuHduDjMkuvMq7duN3ZiM5bcPVSvuGEbLLYUtZhqs3ZjrUjLceY",
  "key24": "3w2nz34MnDgjH8ZuSoAM9qVmZW7yyww6v9r3zUKQuVs3TXm1NPY9b2UHVCg7gE2WEQLJeaPAQDg5iggm6Ycmpy55",
  "key25": "5bu3o3M6CLDdZ1i7tMMgEuUELmCMBAjLoqXwzV955GzcdGp1s9RPUYZsCbz8bXKgA386Xyf5uVnHaS5uncZLGfaU",
  "key26": "2MFg8vr9FVdPMGminorSc96ybnbnJoShV13fdwt6jzhtRF3Qzo7TDxzbrnFzQLrdTA4MnnCkN1RQZr4nPmb2dY9q",
  "key27": "4BR4GZw4g5aYhf6tM5dWDp4ZsFJqVVMMqYRBeXa3E2CXTJAXfxph3w4o7VRRfrAhmqxmmWi9rx9waEjCHJ5Edyyg",
  "key28": "4X1HycsMq4inSrLGAiSpTMd7PmMmxXi9ehxaZM85aw1Mg4kMAr8hzdwdruJriRJXufKYxPdhNzKnmGcNyNHgcWUT",
  "key29": "571snjF3Dt7cA8DxT9MqCQgYoZqxZqWiFMBzTdy6WBUK5izXPh5jgM3R9xTQTVtdKcxj3QDkePFA4KCoCo9TEsKo",
  "key30": "2JgAkimuo7LTQAEgLFbKvU6c9GnZBRm1R76uutoX5tiKagH8Z8Q44nNGNAs6z89Pj5U5qdt6jVQ345MW1cSJRwnZ",
  "key31": "4ex2FZbximcupLSgEu6rBRp1jJfThemmRjbaDo6YrH5fScV2htUWR8sFTTBQyjT7nACfJMydpttAjFWva4shPkDr",
  "key32": "2LDTZE64TXbwPk4bMZPBWW4yrGRzmcRy3FTDtPRReNcxiajbWTictRPhxXKLBF4hmqoT6fRb9fAdgfDc4cfG7Fpo",
  "key33": "4KdUquAx8xpRBgXAUgowphXprqFv6rerh17JuFK52ozQx6EpmM5VmJwKvjz2d8mZgHToJnTiSbq5txXKmjM5aB9X",
  "key34": "5p7PQqcpjFkMaqogi6sp3YtgGdGPC14MyyboCQU79axKXAxC8cT3gSAXMVEADZDPGBeC7L9nVB7oeBovgDNscKLW",
  "key35": "5UmAFCF9qFVbtZaiuP2Gzr8QVf7dfcAiDxH73AvLGvGr7QrPvne5A1xAUZU3djW7hwNxLpfLj5zt8bdatJx2FFdF",
  "key36": "2HXys7vSgidB3z663ACBBpDxx4z4QRLzEFZKtPF8Bhz87rGtaHqUsqfcNpZdatSnGSuNZcSMR7NEhqa7K1vrb4tc",
  "key37": "3yg69RpPmzTCgiArwKBkV4TQHzEVi9TKnpiDLcD4fcaGP1jzaDy3zXLR19YrHvUNbpXT4H3ARGg9eyQWYJFuuhmn"
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
