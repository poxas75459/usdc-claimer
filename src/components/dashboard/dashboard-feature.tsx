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
    "2dpFqihm9QrRaEQEpRrjogoomixL6b9nteFpy6UTwh23snzwZ1w7Ld69RswNveQDkYZzCFU7snnBgPvDgvfLfpgE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oWBG345H5CFyVQEQCQuVP3aUUEGVm6HC89ExbQHN4WD17rQcN3L11ypeNqjfCtSsSZaP2ZXBNaFA2jzoJAXziNH",
  "key1": "nYA5NA36LaGBzKyL5Yav5BTdQScrJYEbJqiWgDUG7u7FeRbY3UBHN1qErGtwF74Q3pCpdmy6uc3dWtqzQSkFgBu",
  "key2": "48dvZ9zveF6rHzquPNPikMuGYrQZ499A9mXvGnNrq5hqC7hCdq5Ds2QacdZLQ8bMNTVpCM4zgpznS6R2FE4CGCwX",
  "key3": "PDEoKWnXry6554HdUJnFKGCnBZjiiYevr5jdpgJCDY5cqDANnPAMos1gTAyNKbNmaZcc5YmWykNVPmemDV5czRt",
  "key4": "9sAkxQ6nuPXdvaG5CSwzpEKxaejBZ84C9cZrgPsbdS43Aj1ciiMuZGwRcx4KzzR8koAH62cAj2rqX6X4t27u2cs",
  "key5": "64DsdBh6tG1RhAszXfWBWACR7BKfsSzh4QKkRP3t2ns9Hnf624J8hyZQstdS8rFCoPNPhJYsGmkoyC9KbbR7rivP",
  "key6": "5HRBBya616S87Vacg7r9QVdKZBAonNy1GWwDbs53aFGPMuALKVv42R89n3EzgL2a5Vviptv9ktToBXoFsgGUCuXx",
  "key7": "5yuxGqdCzwi8nJV4bgE5xTchax1gY2rWUCnsSxVEvH5U9mhL7V2UU4vfU2HLpB7pn6399S4DfYCXrPc2MMfHLb9v",
  "key8": "3LJcgwPcktx7Htz294QtMudaV3eL9DJ7FQWXis8WBmN6y9dhTYPb7T4oLWozZChD4EYhmzcbYac7VDVCb1LSuWqm",
  "key9": "38iZxmCsAV3tWPtfBjjwByM34JW5shQFugnWahkRHJywAg8xZsojRpNV1NTSBtAP9xusZ4pL9CF9UL9DRSxQDDp4",
  "key10": "K39KnuGbmYUHwYnsLrrrnsKinWPyk21rNehcuM4oHng2M4Tp21JCRkHfqaQUr32CAMbdHNXCJPw46yZCZgLMWgz",
  "key11": "s8rNEp5vKrFvdDxAD2WcEhXkCC875gc4yPh2QvAPti942wxcW7CqMrLnRA77LoswG6wsXJVDo2M2mNNdbu1M1CD",
  "key12": "d1AcEAv4QSgp8KcyapDiVUXoWmLv5jumqTWt7mCmRhgAaa7AAjNFTcG5gi61cWSAkxWgHVsyQbb6HHzsnQwP9Q3",
  "key13": "2PNhPp2ES8uTt8iMrcUh4wEirgxjqdGhQjmGzxxRZTqpKEFDpMaqJpSZGcqJd225ULSjsNRJi2oYd73V88fMjotD",
  "key14": "5J1vjJMv8QaNaP7m6RTk3KYBYFCdTYvjigJ7qpmt6MAJFdCHnbXduxUxGYwfJWo6g3m657vFJJCYUV7qEVGh6pop",
  "key15": "3ezEJ9svy8bnK9v6WwvTHmwX7QYWF4Vyv13P7tgAWeKARiagPXVd2AhXAKhUAtbtzbQCLytjhwiuiUUjYneAzHeX",
  "key16": "48hzz2Msuf3ZDNYmLoitGxo4b166d3CRPBVij7wc1HaJb16Bn695t4sLcdWApLXZrXn9fdSwATQdXXGAdCrwxpAW",
  "key17": "3AkSSHC29fVgD5N4wJQY9breAdoS6qpphkMmeg4K579Q6spYLJULBCGhP29koGi4yrKD6t3z8knPq8XN8kaaViuX",
  "key18": "43A3okJ6zk8MzwshJyTEexwEWYufe91Z79RgHahuDNKhPSM8RaHQqop71XQUQsCyaQtnXscdaQtiQZJHTiUk8Avr",
  "key19": "4Dpo2dts7EefGAbfZrR7HcqG7Ss1bM3tudWtg5xDSuFxawaxvtRxp29wHdZcEBdpekkafthfDwEP75tNkb6aiSeJ",
  "key20": "2SC66eCWVtjZF2iHt57bxoYJKtNjRSCwjL9XrZG3n14ukoTaFAko51bLqj4pd77oEhAs2i4Q9JU89JWiJKLszojg",
  "key21": "36GPAG62huJdSywu5seW1DkjHNT4MTSSQZcED4xgLUxaK1Rbs8ybVftwqA4uMoL8pQB1Y5fV393VUbdaWRtiJKrX",
  "key22": "Gb98MJJyW2oYExRsjZrcaXmb4XKT5r18PGjstaztijoFsAvZWe98aS3NqeKKnyCEThebVTN2gDKfNyEchLu2a5E",
  "key23": "4iu9K6R8yGTS67myRs9BcBBY1eoZTBwgNqdNi4poA2iNZWXp2FwwfkfiMAJsAgBfvtezVQ4vtn2wxnyCAenfekBk",
  "key24": "iLSmU1hhho57gGoU4CZxj8U53FaPdCf2aNiqFyjkpj9nrtgpAWC72UjvTEzcLMSQXaDYCSgQyYRfGfk6f2U3JHK",
  "key25": "2TTHydvYW4EC35mR9fppXe8fK15WhzfhHH9jNjoWARgxQNL1w8SXVaJteinexj5YPgmZCwEEccoqyRyAnroJEhZG",
  "key26": "3Pn7KfQV2A93JwdbUwtkXPjyyms3gEj1PiY1SVZmjsvmGw3v1MQdtuvGpjwYF4VJjaQEmkNXiSMvw2G63FPhXJbd",
  "key27": "VUXMY6XBLqHVFua4dQUFd21iWvZnZxoVcCJtG8G9tCK9kW3yytqYXQEtTzghyze7uMKzCMqqf8gWXVS2UpQ1GD5",
  "key28": "3jHGpnWaWxgULtTRjgQbyuNRCrqYeupSgjxkQYFYuyVpMuVw1WN1Ltpt67okJpNgUj7zJFs8SafuYWHKeU5QiQ8h",
  "key29": "5mPUvW6jgV5vtcD8eEbrZrpg6dR9hmau8nx9rHkcXXj5kZCgvS28DrbLdNmDqVA6DX99Wm4iVCkBb7y2roifnnkr",
  "key30": "398DR8izUa3XUpwQYPYJ4sWCHPkdKcQSQnSrub4e4CGH2bjwPoQGpDHbJBcwfVWPGsKHhaqXoKWNun8UokEnt8BD",
  "key31": "4kT7WcDjLUfy6c1b2QRkUmbyuDdrRGoUmBLs896wRY8g87RNr5jrn39eV7dgZvj2yqEeUav43DR4BowaMgD5uTvG",
  "key32": "9e8wZMBpJEcfbd1wvBgZV3NMrznLLUpgRAunJ44NcxTorC9KFtd5KFeG66HgKnDvXvkeQkCYGTq38dRHCd8bk7y",
  "key33": "3dkuJUyjNUTSeNCfuGJQ68LcgzeX4ZLFdYumKWEULbKhtN67RiWCmkGbRUcQLBZoeJPzNekKiCxdx2TdJcG2KexA",
  "key34": "51AQc5kYAf9bKdp2Eo3EYkBXobS7s1SRx4LDKXrWTFh1zi61VXD9uJVbV8SW6nWH93nHAKaHKzT7jWriRBRuTuzD",
  "key35": "24HhThya4eSEQMbThfei6x4VWrRo6NepUGYVaeVeJouS8dYcEc5bWm5wdUVvrL1zneD44jKpJoub1ZGvoCJKgN38",
  "key36": "3BQJytYgrspFwZRrsQYBwRAhfmLJZiU4mMaJN2YdZSGGRwCWaYCw831GZaHG6ivMTkvVLzeGyQWzYYtsona1sKnV",
  "key37": "2KjdxFqDv5YHBGMwYrMKAhnuqw8gxVtRiX7T7TtYnMnZLKhXLnZxf5kbw9d18cNKznZs5sZ7SArt53SThr982gVp",
  "key38": "2Qyz6n8v1hTAsFeWEqiA73drqLK9fotkZKyntptWp6v1qVhNzPD4t6HDUf3q11uMPvM8Whrxm8VMTj3iTe4GE5Tx",
  "key39": "3XFmGDDuUW6ZTUtGxeskZdxyf7T9tx761xyRtYUtfYwTv3bEpqSuCZ2rYCdkuhFx7t3hcgLsM2nKmhzhCP6bPWq6",
  "key40": "2mBMbrVeUP1rWgojLku4VPGv8RWT5GNeuERKmRyLtNEfBNZJi3KxCCKMJrA1eywFHimSbTJEN74rLextzGiG1n1h",
  "key41": "3K7d4LAxk9GPVt3dBU4cg48Tq8iQunXEQ2q7xQ86FxeFXGWjR3cdP5K2B6ZdVk69VcbJW8tFkHFZPrWVpSdp7tnz",
  "key42": "2ZfUtVtUkExrCdzxQXBMR3NSqWd3tAejPLEM58Qcjcf57JvLYCZYXo1MBTQ5jAsvxYiigShEEJAQr8idUbDiDgZV"
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
