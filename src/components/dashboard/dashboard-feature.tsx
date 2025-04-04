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
    "2FykyfrMqULwKTPBPHsTfiFYwFgoa35qFdFW4QrTotburJ7PmisXDf1GuVX7Q1RAYkGSAu6qsva4fRrSLqUhz1A8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CPGLKTWNVQVixjHVwPcgDjrCRP8WYTC4HWPs42UUJnLGejTHjxf3xjHXeNowpsbdXCqiaBz8fkmZes5PJz8NLYW",
  "key1": "zfXAEQJdpHLHtqXw8hh15gbiuN3Etm8QebamgPjiR22vVaAb8cfYALrqb24AxeLvULRQr31hjzTv2dsBo1xbgdu",
  "key2": "5tLPUwSxexbCDoDpBptgCA7EMvKPfy5usm3aaFLXmiRnJ1DZ8hgRuXCiEJwvP4qChA9whbHLs37ij5A6GN2tAWP4",
  "key3": "MoMEgkePyGt8fkK2B6xxsGgCbdg9tjDnQskN68rtEV1qe4ASoDYES7RpvY6JboXtBqemp7Kx4Ar96SpcX9ugnH5",
  "key4": "42BNUs858m1Z9Ln3JVJRSDAQfQnbqRreQiSmznVD74f7hY31REz1jrxmVzKiRomhuC44T1x2M5PsQdGvQhSB2uWb",
  "key5": "3CMM1hbckJAz2spjURWsZJbCbxdkDhPQpm9w9piUaFSqtK8aR73YCeHUkwyNpHUcigxApBUi8XvywgS5Asz5dNJu",
  "key6": "44zreNasuPqkRX7M6nuNnRoiLoLdrhe1WmmWKD1ko9GSD5F8FsekGCrC3VJDwDFP7344SNJ9LTdibQNRAv3vHfCS",
  "key7": "2vLyJoG435R6Ar5vSQvNNcU8McQPYc7Dhof178aDTYaewkd2Ab8AWcFku9SEgKmHXsNX4tmAznzyp4VSetuYHixn",
  "key8": "foP3AZ9u6cPRfGcWZMotFAdovNdbSvH87ksJj5bSZbNX1eKG9Ykv8a3Sjy6uzfxXNn3M2Lnb1o2tAzPSvZyfTDt",
  "key9": "5S1veFNTP7Zf1hmbbEBvujv2Z2nX7du6TxNbAq9VesVfCMdFrabgaRkXQzkWTGMnG4fxQgngCwZ2kscr5ZrJN7kG",
  "key10": "3UNiCBqmeX2WDcKiSuP5NTiVs2Zg1Q2rnGwWQXKk2pbqFWZnsVLkdFjvXCMQk5d5kG3RrPRFZ9DJmSkLgBJBsc5W",
  "key11": "2koPLf2kUoRRQtmbfocAeBVr8D5g1QEDhkp2VGKqYQpKLd1nALsMvmYe7VKk717aoHD5MwLT1Xp5odiYRr6ivuYF",
  "key12": "6gwS5qfrgQEWMvwKf5axux4iKQmYNejcje4wYnkFTNnjfEWSsBwCZYS5mr1EYn9T6wvdxc6uTZEtb16bC7H14Gc",
  "key13": "4z6r7VsALMaR31YSCnsK1QGinC8UFXorYM259Fm7jtWxnFevVdt6fokdBKGdfZ7wNPWb3DnUzSdh8A71etLpZPkC",
  "key14": "4YoeoZsm9zQGTH2bQ5svxg4GwTRZW3Pie3mDnW1dxYTaBkBtQUUTSKnWXKjkaGZndUtRgcAySe95BFUzPJtmKgi8",
  "key15": "5D5hhUMZvDoroXQj9gMtyeVdYco2RHGV3fz1s37RGo5P5Pa7CpuxKLnBZxKvLxbcQNyqXuXmd48r2SVRcJMqTvLX",
  "key16": "5qVr2Doy5BuyQwAmfEgabVESDjYFziFbvm3xnUP6T5vSJyXYJCtNnxqvYFyKea3eakGTto8XC2pCvHXRGmP1xCTB",
  "key17": "4Q7iUnofEhiShkwuhSAPw98Vethq3Q7xhqEep4JRD1psLMWruwZTfsP8SRa2pZWBZsadYJKUQQr1sMkjVNWbTm3H",
  "key18": "4cTaf3SHZwXmLGPPnZ23UT6QY4ZkqErocKC1Zt8QpeE76wxECgpHy6tMnuk5yxcsLTteBR7P8DQYLu5LpKbosHm6",
  "key19": "47bZL7J7FGwr2RY9fEbKX3WTQfmukcRbu1sGs18T2xY9UyEMcJTXbuSBdGogAYdoFg36SwUXAUCV7g4pdwNAZvTQ",
  "key20": "2LAnp6rnCdVabN5cbVUXPovEF2fwRA1uiDCG8fAciCDZv6mLAtSfU8rEra9GJwE2sFKVkAM2xCcfyaifSjrkQi4H",
  "key21": "2b9s8Tbj94cWL9q782gLroTMNrvc5uu9GJH8RSVdMBay3bDn9xVaPcTc6gzmFN1gXTBmv48bwQw9QwQGsHw4hLvj",
  "key22": "5SkgJEp1pQydkQrC2QS4QSd1TpXKKoWFpUvFwVqszEwowso8oSza2GBLQfu1KVX2TWKJzfd4FrDbVduULDJ5Y1fb",
  "key23": "sBczuUZrt2u4rq6YWdxY83YQKYHY6v4EVETwTUu25qUW5Jfq3eBbSSQccwuBfNNzpn9UkXdSVFKaVzLHW9qJj8X",
  "key24": "mYUqHecnXbB6Eo5SfpqFspGb7D5eJGZs1BszfSzoobaFWLUGmVWVf5Gx6tCA6VrNYzxKKfjZ6tLzXQnaJBpeVcw",
  "key25": "gfyHAFB66nFjxzUA9jwp7ytZijw8czEMYYhv5VZhnsn4yp7Pw53w7K3HPiULtqZoM3wthLqACfWaW1ipfhmZTHd",
  "key26": "2RHtLruVQy56Cvsjrw2yFrYQTkZx8EwHQxiVnVrtibSfrs1VG3Ty9bzJFuywUJuP6R6QegpJf1dYH9vjzW3wnnBp",
  "key27": "64v5hD39qkuLn22ViCvjP47PAcKv4WY5xNZpv733HeoB44Wgzg5zmWVBPAsDQU9iGrPuinuwopT1xGeVHasbqza3",
  "key28": "3Lr8xirfBCBSPXL9iuPkVJZmabxLteRSEsBxcUYipHcBKPipSLxeeHXJncnDnWywN1akfVDaCJYfde1fqoN3cqdp",
  "key29": "27XyttwykvSwSHgF9LibZvDsXNQbBQxpHLkJt6QJa83FQp8ijBef45ED6Wk5DKjNx9sfZgg4LBj82KgQzJrzztzY",
  "key30": "4tJncLTBFmkK1Ux7YvZmeQw2GJNpEJbSGT1wdZWJT1bC5cLp7KYcnZgH4r1hFouAYhy78fks2cH73U2Fu9koJB6J",
  "key31": "2XdyyWWNHehZLDDgS4GaWxkVHPLTdjSLDAgGc1trNeT4mSK877cfCwWYBy5ZNrAzpzRfECGLYtmjSs7JAcmS29Sy"
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
