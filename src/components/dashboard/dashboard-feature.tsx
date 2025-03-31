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
    "3sk5LmckijbGoAkf2hxpUiYwggcFX2CV69rXXHLTrxxraeToEtW7c43yEXjpdrtincy1wzAztEPsMxeU3HXFiDHg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dtsG4Y6JX5dRM2aeyy6gxpeP1Dxx4SrkVE6rghLfDdPqjs98nUGQ5S86nW9Ns2qwVGqWgapu8Dz5aarDSgRNYU4",
  "key1": "538dRDLYSKnbDdnfieeSwzY5mUtvqXwUYLzaFNNypNGPbyxLpc6X2tWUcAtrMFCovp1vK5PNxYPkMbMSyispu4Zb",
  "key2": "2GdBEpywafbbkLMnYVwULYP967hS4zF3kyhbcKa4Kbn8DBPrpDnbQjcLwSJ8XYVVkoew1N5orMndAJRs9okipdYp",
  "key3": "4FmskuMVhSDAY9YKjboswsVkzvK7urDjP337FQsEGa24GTGiQMwKWweJhWBuEyX9sy5q4oQBuV24Zay9LK4nvDUp",
  "key4": "43AH3EFS7xAtgscXH9LZVpV29L95K69qiNHsHL1ZueYvKepQFjaoYkWhJ1qfidPRJ37HctFWtQ5SHStwo3vsyrga",
  "key5": "3zXGZsuXoLycGY9EHcvZ7HKEGvXFbeK8xUDv9sGaenynffvBixArTgv2K2JjYBr7nXQNS6Lmq5T9wZyD2Dpd68ug",
  "key6": "5cWkpBftFKwAKmZYcskkrhHoq3B6Pg2jKszakB6p24u1e3LwN4L3uK71tTUnk9uortJPixUEA3JE8GprswR8jPd6",
  "key7": "5XrJY8kLnPDgjRsj4QhpkbcUHQtiaEQJYXMqHAeKcduhQqSc54ZKaCGu9tWZUHXoWvc6sjSmPz7faFGKin6opBFA",
  "key8": "2apYWuYUz4vaXnWBV7nA6eNePwRGjQEnAwHbHTtJn57HdFpNiDSKmutwLTvSq7zdL2W1cVMamGy7QTWiUvg2XKZV",
  "key9": "67few9PsuPLfEzdwADtpuLuV4ttwfCsuvqnC1oEkB62MZqa6qjdQERM8FepTAgMhKLmLbGEyz7bRzgWjLWKp3hvh",
  "key10": "4J1aSNYNe3TEH9Kqw7z7graNG32imWA17F5eikLcoA6pjsMy9EW1s8U9ASS5sLkwmi4gznSnBB7B5D289MCbkj9k",
  "key11": "4NR66V5KwNLXarAUDwPM7CTeAzr1xmbVEnMqGpPzGTr8b7UoxsKcPuaPNJdBxJn13PsWfZSFvGujTKvVV6F92tfh",
  "key12": "46nUpkum2FRodeE8cQ7CMPVtEGtqWeyoGZkJkX2ritqJ8Wsn1m4oWwvLru1dCTYWbvFKFWWvAhHSasZz24CWbacW",
  "key13": "546ACWHWsDjcL6K7FBXRBc1U9frKDUeBDFvkHSCgtoZ2JAQQrzSyaF7Y1FK1FdmmKTc2vY7AjmJULxcTEwc8YnyU",
  "key14": "5uWeThdPq5v6hcYsGA6e8tvzzc6PqWjjUW7gvZQNbMgWyPyjHg5sqr7i2sniHscPpUbfzSkjmHif19aDoZMpi1sZ",
  "key15": "2ipeFX9bSPGamp1NE6mjskXBaSmMXFM7G4wpVaQH9gjBRZxoWcQqdQHwPPvpCi16J4K7CBZHWRZFenzxrcTXaG27",
  "key16": "4XtrFqSPmENub38wTXao2kSoey1ZWyNBoYUL66NWmbJxCX642tTGZcwijPZxqdys8RcB9vDRDPVuv6YdCh6JbPoU",
  "key17": "5DtYyFpsHUZXbybiyAHVoYEZVtMn5GnKA66ia5AJuW74cgYPw4rGgdox7XhiW7bxrV7qPAbJkK2LkwV8iu78Dx6v",
  "key18": "53PCJfDayFuQLxp8FEowqRF65eT2CjYqDGu5moyuSFWbA8a2ij6fXkTNbaHyDr3gGwvNtSC8Cwn2ws2wNU6dStAe",
  "key19": "mNaCfvCFJ1PPNgZNRtEfdZetRkMx69qQZkTgGvZUcknz6W56sFHHcrNiWduLhDRbuEiHPK8XR2M4ui2RABRvPKD",
  "key20": "2gwYr176b6nwv7kQ5aww5vGRryiM8v9pZDy6EwrYkvV3nXWCWjcofRgQCVaXBtbEmah3vaeU331Z6GJ441w9r6bK",
  "key21": "28CkGFbtuw9ggerSznByA4TNtvQjVmRSLiv4gL4KieN6WnTokmBr9dzB6TDNxG4tov7C3JB2DukiXkAiGnbGzXM2",
  "key22": "nFH2EMhA9xF2fB3qv3TriEfD3NSZJx8i5VFz2DWwMcj1sQL2Z8XoL7aWwtcE5Kwf7D5Q6yBQ8yKBbzYKe7at4ps",
  "key23": "RzRT7HKGwnTYXLJumGfW4VHK8pJQjjLrgdnZaABAsyRCyap7UhXuPGEFvJrUn4DC1eUdQb2CzdjG5hpfjetK4p5",
  "key24": "3Uqr6JMtVB3owruRHShJvAd1K57efwM2sxmzqLbcT97G1gmaveNuRM1igC8EwwoQES41oz5N9thH7QYPXhVDDovL",
  "key25": "3nr1kXbD61gEmg7aX75QeyQVHZgxEqN4TXNrHzUvfrNrDUtPRveqVSanmJLy1LgqJQzSYzaH9rsCfqBc1kQiBrF9",
  "key26": "2pUU6TaBN876M4sm3Ua7rkiz5DeE9NfE7Fszs5toRVAZMUGjAZoZoAjjgoEKWKVhCkQV2fNidS32wZNZ3eiN3tmB",
  "key27": "4JuBiRZeB3uuQXbwm3YweedvJixkFSaufbmjzBd14Uroat8LaMzaTHRX4FgiJvCV4hqUPiF5eF1gzD7fqLaL23hm",
  "key28": "2P5MKSfUvKJVZNxfsZdjgBb62bhwsgKEvWZ9Gth879Mveu4rMSQHbVt3aumbuGYGgXYDajqNLJKrdbBrdt7Fgt5L",
  "key29": "5UBskQEnshJnFb7gYiHDx9ZWwKZFnMH2RFidWMESuL7uhyrxDrRpUUwzctDVKJwzgFUV4H5xJQW57156ZiJRH8SL",
  "key30": "3SSDnDgmigCzPM5FPBGC9qwRW8Z9nNuXw983L8xezoXoK4ETnPpYU9KHUpzsRorkEyh3isBDUvRZq96wCYr2AeNb",
  "key31": "29WnGBZo1r4qSPLtu3CYYsWTTj61ypP5WgraF3GnpCwhPWN8YnHzV4FFEvNPkXTUTMnbmZqSY7VHEiVWrKt2F78D",
  "key32": "2rFNCnZEQtSe5YmGvdYnZHCyPC2RKwwaPYF2KPGp79n2AzofMCuMVwuT4B3H5sC5wckwc1RC828JfrXQnZaKEK7g",
  "key33": "5jis68w16URmeSWAJb5LhEdsF7G82a8oyZCxpgwQbbNrqcSrf7pifMZG8nYMve6bXQtG41RBfWXhPJGZVfVd2gjd",
  "key34": "2v8RhzjxRuxCUy9BjMBzC2FUHDCDymKqDpYT6ESPRjVbmKxiejWC7eLzo8iM2aEctbBcosmT32cHNN8AKHvvbzSh",
  "key35": "2qGyyqsQ9aCWYNzN1szNYnYyzx3jGRTWJ1Q9SmDqE6Rm2cU4GBtyyZh3QExGTd6oWFLoeBWMLwCbNUWF7zZNsGQa",
  "key36": "4ySzaoz2bM3NgVe5nCLc8iCKf7QabxB4T6j1jERcjMc8y5Dv1Jbcy6P1esujMVRTXJK4u1pM9rLEbzfTSBagAxTe",
  "key37": "drYqZs5AB9pq54amvfq5b3a7w919aFUwbrtr1D67P2cEC2P1aDhBoS8gCbJN5dovGEbJ6LsaPbcAHteysR6Sfvu",
  "key38": "65FTquEBqGZrGmtdZHSvfnsnKPyMBB6UD4gJ7fo5kHDZjGYSEDFaREJFz2BKfEQMfbYRic7jLC3mG8oS37WtsJtA",
  "key39": "hpmHmADoKYAUKfrRLHfy7UEmFuaG5ZCAme7QzYNHf2ntBLzvHJW1NiGLHBuLyfBviuqmtramMGZVQyRzqagpxhu",
  "key40": "37ogMnCj9zjQ4ggbcoeCTCjpoRtc9PdsopjtbmVKRsT1gfKEVV6nuV4x6bzL4mwTawn45T3cLrfHaXHgTPAq6XTC"
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
