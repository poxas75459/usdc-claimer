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
    "2cfec6xu6dp6tfXe51vabZPXrc1dtbnJ6M5X9vjVneHs6HQ7SGVFswa4A3PLRDLnYxBTMoTkENrqdzpAPGZqgfko"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z3zNTa14qLXYCcCn1ZUpTWgZeEEAKUhmrSuRVMEKN6njRoWUipbsaCDZPvgNtE225QS53RoizHQnxQRyo1scNvG",
  "key1": "4L6UcEa6i8G3djyAPmpnpueyUFbHeT3bmF6px7KSNhSACVMJfmtJxArdGVt26Lzi4yzQbxcR9EhwiQQXsaWu1ReG",
  "key2": "2CTpcD5uJUjsR9ay66pYEz7mXERQtxxa8wKDDJNW8hP9DLyzskiyh1e28dab2WhtS5AY1ChB4qBU8qruwD7MVJ3J",
  "key3": "4regFWKG7qSEX1mVqWAcYgopn5Qhyx7jE4DdtF8Ke4BssW6wwHR8ErbJh2HUUQHfTTyutiFquoXzgbNsw7f78WSC",
  "key4": "JzPV7mVxZ3zpJgqJKPByK38zX9oV8X2or38LXaRp4aqHfQJxsC36MnFdx4Bpf9Wuytjrw4XezEQn3ekJ4DMUJ8B",
  "key5": "VUZpD5bsiyn4KNqD1twiHATsK4Sv2f89uSmf2izS3YNEwJGusBd4m9JP9SVsnp7pQg8s4P2F3qH7zuZmHarKhF5",
  "key6": "2iohp1kQkkHyEwnFcqs83RsamiBMY1Mi9KbsuQ2HSzBMkWANFo19zPbhoscqmFqAtZ4KEthRXzsWdKfwSjwvti3A",
  "key7": "5FaATR9TLXEb5WYXQrtKYxtSGWuCGSfN1rmCVw2mjH2teZACjYGZ6r9rEpb3tNRM97X9XsauvAqjRMAqS9d5PV3x",
  "key8": "4TbyjTqhzGZck5gYVQLdDEBQr7f6Ze3DU9ua86sVPMYELnDwTSbzq2wjz9tHntLAnUP5ehXEGS5e2iSi71uH18Vq",
  "key9": "2zJikRkqEVQWvxAMzaafjL5cpaBNdaXHamLnaYaZzCfzKkmWRU9hVCtXDLYJp7SoSqjmwtrNdFpTbvdPzDreMLwS",
  "key10": "4Z9P1HXpScZrZN12EGZ9WDy3DeSUQi21CjP8bVz2sRVe6MrxG8UgKjDvAaZNA1wK3yyNNhvy9TNSq9QSmr4najxD",
  "key11": "4AW1S1vcj164rSqyM2J37Hy7aZs9utFoyfif78nfANDNLPKwMKvzX5DAxaZxBjSWjFUHeM3tb8RTMc7ffrt4Tmz5",
  "key12": "5e5Eznaf1GVx8aQdyXD67kPBAmNKWfAXTSjCWn7ADobDZw7PWzyamdY5fxSU1NGVSAga9HNgdhM2wvboLJY9AJPv",
  "key13": "4z2K9yFuyLbBE1ByZCQXanZ5U5fs6RkDHPmtoG6eeGHjAu3MmMDDtJxrsYeYcQ4SkyhgP7NJShwYeZfseTXsmnLg",
  "key14": "3sER8ZhmnoUMX9KqvvgVf91ZkoJT6a7XXcsKWXhodvCbRNXiTeMEMpAGpux1km7eC52fWe5cwQMEFcmxdNYUKP4u",
  "key15": "3Mgos6NuSgVifW7EKHUhwErFjGKNiqsXV64D5mcpxTwh3bYaMZNuvk5hUdXruqNCLuJMtEaqFhGJQBbcPnKN7XWf",
  "key16": "5Ckj2vkTHaY2KehHmiWoeeaXMCs6gXywGWPcKhagyoNvhSZXBuQdSng6HDViVTb9cJJrBaEg4qk51Tbi8JaUU2NW",
  "key17": "22pu9bXbsWnQzTLZwtczB9kchtyYNEhm272orrg2mnTo9hUJRxhjZby6cfb4vuWWuFDD651Rd1itnUiFyGWGzcDS",
  "key18": "3Gwb2FE4K9SQAgx4zBtyoQjfF9zWvTxKXx3CSWxtEuLENZeGbhp3MRQjE3gWLsFWWoA5gaJ5uJtWeZ67Jf5Ki1Qq",
  "key19": "58u9uz21EvYSkfzwrpxghephKVdJ9YJ2NTmWXNcZ6yhqJTPxaihz4sLMzMeSAFGvcAXKTVEhRVTTAG6Jahw6Z8J3",
  "key20": "4B4GNauNXn7ddomHdTfKMSubTnjWnN1TtkRBFPbejumt5JFLhEHVFkqppKvonYELqSgxWmof6W9MT1ZpK25CRajk",
  "key21": "3eeEBNzsQgVmbsBo7z17TMBkcok6e71ShRXd71TGy8dHM45WXzkmwJZv49W2Dxpof1rzYVagPYxxondZeEpghJ7k",
  "key22": "DJKGk7xMGazWmWXsY2KMDvxdcazomTffpocptft4rb1pqzUWUnbLjkeDhbzZXdyuvyyiBHejNNK5FoiBRm5jueV",
  "key23": "78UhBuqgzW6Aa625XXrnC5p98Yb5vx2xVnYPtrMFrBy2V2c7fs7x6tGvVzhJGzx2nXTikheYpV4eNPccswM55hS",
  "key24": "T8ohJU9eze3A6YZ3CicyXgTdn5DuvV5PokQ69CVArv5VXZqVaWkVQ5mLWw7Wp183SQr9EoA1h9R1xrMKtSjgrKm",
  "key25": "84bHDhkGtocMQvT62uAvNd92EonuXFtvgF8VcHn5Jbu6MLRVdKtpZyFmTdsJGfodcavbDYs61gmMKxWHbzjxDuB",
  "key26": "2nLy45Jvy8yvU7Za42hKQamLLs21ozLCsP7w6KNRCYxWvL9W57DMZZEBX9fVfLXe8MRTcaxw1zxLAdYp5ccpKGwK",
  "key27": "2iXKXiX66C29mSpsrNSHggHXKoFkM9gwMrRaX6z88M3RSvFDbHnZrLYaHoqJaZGjGW8iW98SYtx3nkFc6wc7Ekci",
  "key28": "5bu7nyGNyswdeajeZMmcmEsYufnsMD2PK7BSuYAd1dtSZQHL6c37GGNaFhUKVzssEmCp4TJiK45jX5x4xE6TgxDg",
  "key29": "28MfB8pjQHCMs7X1praPc7b89MG4tk5XDee2vLYHfAqhZekpCoWqwdfU7KcGFhg2Fn3vQj4NEMPv7mRTU1YiiTSG",
  "key30": "39B8KaoxJqfyp1ymuP84cUru2knuVnUkUaec1bYaYhgbcErw4PXTyvYPHq43miwgvSFBtQshaQTz1goAnsKD9V5n",
  "key31": "3aoXyRum6wm93rGuayDBpNtusAVALuCSYCCnfrEidQPy2guea2dhbRmE2S6s94YEk7eK51JPY9XigGnQtmXZskxE",
  "key32": "2Ut6rpvTfvrX3ZJ9cePfLSaTmpBKVW7qUe3j4jcFczVKTrSCySqRyhRqHH4VaYHcFvbuWHw3CqdZzp4AWHyJWqXF",
  "key33": "4wNBZN4NTdhqrCH43E2uLnKb8XQRSziUEh3ZJXva41FSoCXUsVjTca5qqkL5ckq1kZHccH2H8KADvGgfRLkcfEJ3",
  "key34": "4TrNFPAPksVnjLt2kJMJgUTNRS9722prDv8duyBrgGU5FDEU1n9dftRh75aw2UscvTyXgotNqdKvcNvCFothvSaH",
  "key35": "3cAL7WT5AWKEVDqfVnUr4mSHraz1mkC8dKAKRMbCysybbC5xthbAC7MfWhWM7V8eii3VYBM4SnxjBUwaw794JRR6",
  "key36": "48CQAwypF3a5m8bTpD4S1SZfucyo5DWZCUQgKkRzotUyzQezNasCRzGpcWXTiWaV1WVSSQvL8duvmRnykLztzEEi",
  "key37": "eiNs1w7t2LdUoofATrT81LZP9jMGo8G4maRZMDG9H63iKHffhjVZDsETcgdFfeQo1upZNeAh7UqxaC76R6XRi8a",
  "key38": "5TkhWmvc4qmAwxniZAEYm8Um4UGkqteaJj5ArU5geBLWh4vdaG6jz7dy4YwziZmBm3NuVmRgSSPyMK8kt4kBeGqj",
  "key39": "d6RJLMsnRALTFUMkrtRKFueUjWYtKgDmRPYQmW8npUiVmzRg2VVeTcWQBGgRzdBZCL4Mtx4WKg5vaQX9Mj2A5B1",
  "key40": "1y3w6P4cfqUWreAhCiUjC6o9yesoDMi6tUTfiJmEKqEHppKVmJ6CwubLAfpC9btVCTAtN57bojFWecD2v1WMwnv",
  "key41": "58ieYtfNnqumdeam55GwkD39dqebNJ4ac7d8fCPDvh5oqQcRttvjGTjVkCqHWTNkj45vpVGJf1tYPt5J7pP8UH4V"
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
