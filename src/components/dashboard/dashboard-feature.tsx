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
    "5tYbv3rabXHZ55vrynT9oCqn6SM6r4ev1F5negpnFYwhu9MBL6Q5AbbZAAY8emq94kGT8Jyw2i6TMN8p6sGZUHEM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Hqm9RsgCEcEqGgyFQVtW5VRMTiVvoPjMCDoUWnPatNQXkdN4M7qFuNFqkKSDs12XXqUmknoCdu9EEAdySWxZNou",
  "key1": "2njbG3GKJH7Yo7Ph3NAyJmUjWg6Ras7GYVg2649dB4AEW3qf5UVcT68EtL5YEFh6fJKF1WPgANG72N616aD6NZz7",
  "key2": "PP7m4P6btBDDjsDYDv1D4ARuX59NmRCaJrhEJ4Tkt8BcxYgPFrphYS6uG12HfxcXo7BUVfHVAZjjdruFgataFEr",
  "key3": "4C5Cv36Y7wewfGTDDhQVTmTQXXqN1X9zgxh4D4vqR3EzoaX2ZT3iGsgUmUfQ64EGw4fLNgAePBFgqmHv1sPJQkDi",
  "key4": "24Knm6MJhfMRyj2az5VJ34kxqAR4Uh4TBrVMzFruXjXFHQqN8Ag8PCrm2p12Ly7hLnXjLcKuqfDMi3GuEc9y2eMf",
  "key5": "5gtPh83HPshEaMMBV2RMukz67AGMPfjy4u4PDGbmtAVCiQDoRaDteHX41eDVuaHe8WMxe7FVwnQTz73PemcLSxwd",
  "key6": "397K73SKwyHNyRPriHGoUSZgZRsePNmiSMHAZ5bTRxPQoV8adP2tr11hDQE9iDyW8i3CDmXUPo2VX1gSKbN61nG1",
  "key7": "2ma17Le3YPVMC4NhvJ22SWJvLgwNCUEMCjaABAqUyJzx2s3XeUg1hf8L3Y1ENNGUR7xKfhQxcBkp2zAE5xEF2HuG",
  "key8": "5TGj1UX7wkkyPtbVjsJVtrARbNRZWTPFNf5d2f2HdekPu627GM89oPvMm3BXCjgmEk8VY7KTW4J344kwGiXMwrLp",
  "key9": "CcZEVWKbAFV4jy2KDZoCG3K6HNxEng2J1icRduJgynZ1bz1S1nDrpKQdHj2fohZXoHJJHG588dN7rYwKFpmhC3v",
  "key10": "2THvPSB54FLs5JK9DogtwaGUYrp17tX2iAE2uqGMRvG8R1RV22puJjdAE98oc6B366xxNfY6tDqEcBPyocqA32Np",
  "key11": "4dvhpjtDmYNFsSLu4VFqwYY5ay56b9o64PpuW1T2ViPSfo9qyAkHybJV8JT99j7WvA3bWdraUpg6BtQSGBB3w7xx",
  "key12": "3EaT9jMQUjAkDnjmuRedyydRczde7jg2mF85TpFXGCBG4TS7AoTHicwFP17SGyYPWF6Xgr46bJbsAkCBzDATUU4F",
  "key13": "3tpXR34Wbqt1hy62MS9icKWkvwBrqY6Zsi75DdMDvyuE2CfVqEmQSgLvaXuzJnNpfsRdipxfkZ5BBWitXfTrvycU",
  "key14": "2gdaWhn2MWQakoemoHXyYkbWu6YuTZAnjZnuwHsxHpXdBCcJTUFsjeLb2dBBPjT2yUziqxafsKVcCi9KWmtFmUcj",
  "key15": "2yWJynbVaXfwoAXnQB297JSuzYmeNTkDKRizAGVyqcEgFsM2PuvxSyQws8dJtuyFCP3o9ceuSTKWZyk2RvdxzxWV",
  "key16": "22i2esm17qxd6zCXiTmGwSutLG8wzykx9T64CgDUbARwtVm2NJzv3nw7tSK2p5SpWLatMve23czCUe9kwozgKYHn",
  "key17": "2GdoazTUdh8PJY6uQUDGgeZryhaF8EYS654qHtGcoHhGHxFiyoy6yicVbs1nJTRK8nj7gHsnkbQ6uHx13KKDb34c",
  "key18": "3suPjSteAmV4bh5zepic1xmpq3NfDu6NdkvVJ3Xi1xkg5i1AYnpccjfZu3UMas1Z7PfWmrFy1J4f2h8VBooQN4mr",
  "key19": "5VSL8FWBn1aXxHy43D42bZrTZeN379WMcL5YfnW51QQS2xqRUB8S5KgRLLxnFTSC6wjsHQsZAP3yXDYSCR2E9d5B",
  "key20": "5JPmHk6VTqX1DEHRzzaWnvME8uM5Jnmu7rvRuZWnRcyuiEH3xJvSjr5h193KYEzibBbWTrk4ze35339ELoRq9Dhk",
  "key21": "5yrDnpP4WLNvaXfLt3amiRrVeF98JUUbrNdkaiELhv97Zb3zCt4rKDNPQeEyaygoqBxsWS4GAb5nB97pZ3yQpNwU",
  "key22": "5cMhiDxNcM5xXpVEvFseJqL6SmwmEh1PphxUqMsiuHtPxpZAGiy5qtnvmJLSgBNTMrdjesjfBegfCcbcAJvAbZ9Y",
  "key23": "4CbKVDiM5rq7uWokqqZ5TsExZvQnPBLXLWXiPhje81F9fWGStKKDPsxEkDAVJitYd95MwYsAtavdYbdpQLNpbDo9",
  "key24": "4FQYciaeo8Z3nJ5rPvJwwoAPqSMgu6JyoQwQEBLAfCTBU4pJWB4EiRYpyFHkWZ2cVdZF5TtZWw98jrKXgUwdoDpz",
  "key25": "jrCMi3JLmjbwdA6dBtVcNzh1CbB2Azoeyom2q2meQ6RYn32vqrg3cmfEBQZ7dSnCkeLaFpCecdQFBsGNtdL5Vvo",
  "key26": "43CN6BjEpx72DKqbULLLuuD5YuxFC67ksYaeyRwV3cbsCDyidatcx8qwEwDVwayXzkQg5Sm1Hs2t7edGxjP9KPFx",
  "key27": "49wR3Q1FADoqRDKmBiBnDu8EroxPLocsnYMLpfZLVhqos4YZT41XTwXtbiaz6otsKzBcFtRbcsjb8KzPuvwTd5pM",
  "key28": "5koZJtPiTzKFWCbJ9suXBw9quREPnwE3q9jpWrkfL9FPiBEheH87sJ2brCQ8gjJqRqRmGU1KmTmCkwRwVtRPR9Ev",
  "key29": "3ipSh7ev5i5bfG2z1wnWiPnWvHJRmqQpRVu9bcSGaRQd7X9Y8ki1KQiceKewQdH5d7xauimQbxbgLA6SUbxAdAMx",
  "key30": "CaGc9DFULLi91SRmGWY5viycjesN39MpyE97LjnVvCqBhZZhxEX7ADsLMEorEUskotBB48nxx7yEPWs9DvHuhGb",
  "key31": "5S3cRqs9UgQcZSiq6vrt6q3xEF4phsUbW1xnbXtk2r6xkQRVcL55T51d9X1ecbD7rRc6oupJv9CG74stte35tKfG",
  "key32": "2wjUdKaTE7GCxux8oqPMFtJJhPqdFmsMzcdHC3ge74nvnZWxHNxePwRmjqpiN7eyY5yyRXbUxxPv2zcTFmncTXLS",
  "key33": "3KZLVhJ2Rja3yLh5VTEsnZ8D4hgnunRDf7LGJ4GjHYj4G22zWvpsk55nJWkKVM3Aj3rL97NcGENyb2GL7rRZz4kB",
  "key34": "4AcsoX1NAwD7F8arnVQ6PZZjvg5V1n8LdLT8eHxXHRY44mHLjnVC2XwvLbrwBydM1Dsy5T8AwLwvszGsdnbH3cBZ",
  "key35": "2HQUiTuo3cmaZEgZLtCvVbQWtJbXokJLjvEA8TwvtmZzuxAvh3wtLmgiz9rC7HTJZSEovkbPLuEp7ZcEzoj4nLrd",
  "key36": "5nBYop3CBeVd2F7v93URYRFeEiX8ePt4A1n66gXtQgsr2p64ay2nRs9owVmawXZFYRSTb5eGAmxAJ18B1r1akHsj"
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
