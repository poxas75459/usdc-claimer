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
    "3kLXzsDdgx2WcWRcSK8JGsWoaAUdN5WGM3nLTE7uUhHoXrtffEzee18AUAtATUwPCpUxhwwYrEiTDwvJqmkQMoDn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FhVDGy1qDhxhV91y2rteic9czWiDaKcfu1XPfDapZ8VV9LceYZ8zPwvfBCJ1f7r75p6UtyLSDwa6gDa5BQ75B4A",
  "key1": "2De7Hrd9pj1hozfKdLKqxXutaxYSvqYGULrir6r8mTD3Z9m4abKhMQ4P4rqH5jtgyqe16umGD3kHnJXvMfF21YKd",
  "key2": "4fZEKuCbM4MiQfaQ1uU4R6GqcjKNDXnCuFwhxQDUTFvbKcKGSxeJqatA3TvFW59heipkmXNRHcNqFNNAxNaVrght",
  "key3": "3sjixfpoi6jqgxGfm1RdutyJww9L7HCirEtFWkYZjsuhby8MwJj5sAUnn6tE2Ufs2nk5wpZK5DcCWfMtYcgGS79v",
  "key4": "3zKK9aM4DN9Rn2ZrarcwnsVBpStLor3XZcCfCeHMqRzCfLoRJsU9Mk7ucz13PiSNM9YXECricSSc96Q8Yf1odBPj",
  "key5": "4v9DjBV8BM8T1TJH96pokVpDeFHUzUpYJzENufUSFwYUgDR15QdtP8E1U7fRDkArvZkRpduaNtMdPSRiW47L9ikx",
  "key6": "3iGV3qjjLqxUZ7VCaY62HmPrEdvjhcsSSS3w8bYAzYJf97A48UrACWW6dV9chLi45SDch5GxnTrb3YTFhzRZYerv",
  "key7": "3YDAwTuF6hGHkZosDLjWyrjE8SdzAfH7VAiRpsarveTxo6mtuAg4tnVVoyM6jcVhr5WwJpYztYqwjmd4zmyyZmiN",
  "key8": "3ECuPLoRDhFnYRZDKBxsGqkKz5QEVF52NoCavsWM42c15nFqCw3mXAQpBakYjGBBEVe9bHiu6SvBtR3jXvwUxLk2",
  "key9": "kuo5XanEEA6uwGoa3tKZDc1M1F5ej4HVUtUNzdGCA33NqfjuwU5FKYtb8H4LYGgrPpyTL1ys9Eis6FKVe3c2DjH",
  "key10": "2K4efw7e4WPwLnUTwzdzw3LZXRWsxiavNCcPyLF2yUj29JNDHbD5azxNr2PxgK29rhSMyfbNyatoQy3wrNH9WFWs",
  "key11": "46tGEsTt9486KrXdWQFcJJNmVxnCWZiJWHdBbFu6vPq1BEUXfVdbEr3GPNexyoef1pDryCkop1UWqkbasncs6e4",
  "key12": "4pyLnQYnYbZHvSUD8mWuKVqotHcxxUjBVhPjovqsbgATU94GjWdDA9Askh9rSZxRfL84BmAx4ic9PQ77uhMXXu5h",
  "key13": "4ABgAksmoUbK6FdPruM8r4tu68Bmmwo55jVRyXShFJSpPMVphxjqe6xw6PsUWcq3DbN4RxheHvfRJh9jAyAXbumM",
  "key14": "5BRDkY3YMJj6m2GzfxCXjshYDLKS5DuLGTDFnM3tiLZXJcmFApyhEt6RbmU6ZgvzisUC8Zf4k4R7SZJSva2Vbwsz",
  "key15": "95G4CEZzWPpR9yjMq3e4WBbwbrapbLLv7fz6jPEuz14k9y44jp8x7ZJn7zLkKXjZmYMTEJYehR19ch6c2WzyYTE",
  "key16": "5FWjtomH4zvXeRZdPL5Rm6yirtZBqwWuGqaDawghnK9bebW5v34EdLgMQHaJmZwgPZZzpDLde49WAoyyr1zbhuBB",
  "key17": "4XEx5LLbDYgWC3SH84395TuuYKumZVHXjqp6E5mCsv5SvCyUqFUzWETmoERwAppmMrYMkb9XNhENDHU8K4NkpUjt",
  "key18": "4czqHJEfYjdysGr7M6o8cM37AzyFxLwgknTNn7Gio9AEnKknZXT3wdrsiVGY3nAe25WL2a5nYgFfpSbRWQhaviWq",
  "key19": "4qShNhVXaUdUv6FD5ESkADtqqwMnMaHVzJv5bnitF47y5SmBc64NhGXQpJJgNdSDph7hs9Hx2mMgg5T7hyN3UfXz",
  "key20": "4jmVKLNdpnEBWXQkU9VguLzyzBrXJe4gdgQ8iCt17RnYrAnbrJLSY1MQgjNZhachLFCoATGwVR5Txxhi7kdU9NQc",
  "key21": "3Xu72q5FtHN5TvaeawbayH1m4fKrHjgiuzmQRDrK5FyiNb9HBx9FvKJsFwGqdpAqQSpEuu4eBVd7cmjm6TRbAxGR",
  "key22": "2FVZNM61y2gq8YyGv8dfY4V9ErBpMeLLBUrSjssjG3ppszMJbwZ7stUuEQ6JdFu9qNhhjM43EYvB5Y52szaGZEDU",
  "key23": "2Ln6uyc93u9fBZZTnXdVv1j1ZQXD4vKoEGkCzqq1Ad2R6HaxLVZQTtm415dbMX6vW8i9CghxZCLsRdyHbjTiAL3X",
  "key24": "35pSmHeGHWTjzJtcDktr9p6Z5naKiduyWLsLLD72JGCD2gUUV1fDRKLFT3F47DUUSi4em6Pz7F8mNufdTP9kopao",
  "key25": "5y42hWxnkYKo2bH8RJwTBpSyZz2CyBG5ey5hojSfA525UbEnU2kWbLdkZi3iRawnnUbQ2YkSTAch2kGkG9xxSa88",
  "key26": "4gg9b2Zm8uUrxMpUxmb2ueBa85iQayqmsKnxevTjwWG4SBkv3KCLAs2MLDosKrvATVsxwW6HAZ193pdaVMEP3keQ",
  "key27": "21GaDbg88pJS6Q1yjdYC2wZhKxVZFdZFHfA5i3jmqz3VvfuTcZraGCM6Rsp7Zn8NQwm7UPhBHYoG25SjH8DmvZL8",
  "key28": "XhMsqDCEsEvvNXcWYaevJzpKePXn8mgpy7gkXL5haMuP43XR9CKWVjheDX9TuLM5omQf948oSV7zafiLCzYFwPC",
  "key29": "3wMfXXputiaDa6DjkjWqvMb9RLSb1cXcKwmT3VpvyPnRKPnPWKK8kaBqPP5TfEdAHfmXLPN8T8ofvWAmkUuaYeHY",
  "key30": "39gArCiMKg7fY4vJVjSsMaaJwWbEbge4mVKWe3g4iSL7J6a7rBLVDKLFveJxkChHeRf31FxUzzWWD1Z9FZdnST9g",
  "key31": "5QTXnNoeyfo9As9Kuo7hzeAWJGQNuZEVzT78YQWGG6JLNUyGCmMUjWof9nHZrLmPJ8D1YqeY8hwuBwLoQYtuf9vp",
  "key32": "4ACCURPba2pFdRUAvtXx1XH72saYzaAynrsq4dKAY92ZMAysLjCAZPXuNsZ34L1jU4RBwDxShXdnf4aWYr97dXJ6",
  "key33": "3GJFDhPZQZwKGy55YofDyKkLcbAQ7HLVrP3fsZV14QTXJchgBAvXF9x5BfcECrruLHS6AwJr9qPgu8gk8BCjp3SS",
  "key34": "3DymFWe7m2MTrYdK9RT5PRSAyEUMqXV7rC2veXXZmxmEswBMuZfRXRtFEaarM8bS3WESj16ro5eq9QaknhTTXZwi",
  "key35": "9JuYZsCfT9raFKVBpbf59Usr5QpNKgP5fp7zXBZKXQWdDSd32udzTNtVGoV2dj22hWbzxPdoQ8fnyHxR3XJnYub",
  "key36": "2Y2PiHds4EUmfCjNwxmgA51iT6ZuA3xdH4yxZVoECGLUTiorgRuDTfqCGwjRGcDLhAvnzudX8sUc8gm4geynqisC",
  "key37": "5Zp7gh43SUpvjCaU6ihv8bergvic9wK5qmmB5BX2pdVpaYe1y3dn2uppTPFNMmWgEVxJGck5J5PCyu5UAC84o4N9",
  "key38": "2bfayeySXaRDzeffsYq6HNNYxDSW4ZrxuYArhq274DMppkLCif4b9hbjbtYq8rXgMcRW8woktPXkga2EcDeXCiEt",
  "key39": "1XDhkyoxXkv8nM54KDXJMGBYALKEMJn4t59XkE1Qjz3yZHpeZdCgACQKC95JZS3di7pesK6mcCh7ZEs7mDraqVT",
  "key40": "3ntytWKgcce5aVfYJyYCmip5cySTe5ZVZugaEcigUbjiaLfsjMkF6yBkpJxeBLHsGTiVTiRe52eCzVjbcepe3onp",
  "key41": "65j6C2LAizhvwjsaDYuuSnBx9QNSr3oSjgZesZVChVHuJC9tWaydzAHwLcohfv4A1MAVe7tS7xx3XUdiyubQHh4U",
  "key42": "4LnMm6A9THdXnnM5PQqpCeZBYtD6PymxeVH5esUoEX6PqfeHU8pKZpMaJ4Jnxrbk1PKAA6H8sDt85R8MwWXTzHkR",
  "key43": "5ouBuDM1wi6LK9S3cQpMYoUSY9kCQRVJoA9ZwxHQqJutX3AHhRbsVm4zEb8b7h6nVf1y62XCTex5dHPs9HdX8FSH",
  "key44": "3npbAQohRLFwUycZ5cbERnYr29V5jP8XuDVxTxrqbxZnHANhuWw5VHU5xJBGJgTTBire6VQ1FYwSZ8BQL2Lq8eqg",
  "key45": "59MbCJRrhQj3njs41HFbB5AWMD8MwnuXzNV6TVa1Tx8hDMy6C8FZbkQUp1rVUBzvjV73dfJ8PW9PEtX4H1kuKrzo",
  "key46": "3rXXxm7BogdyRxzLNKpd1J2ARoVSftTsNc7QV89cyybSWwJWdpufudoAt6K38t1JJU7SfNczGwwSMURkXXpLteUR",
  "key47": "3eeFUG3GCCkQdzvtmLS9xzKvcseXNgZq7S39EtDtwuZq5o4Cy9WPVGfQLf6Np1LtMmrTzzc42JEQpj4V3UvvVAXY",
  "key48": "f9uBgZy5peVEPBfacMsj3x7UfetjCDVxfUqfneWmj8fHcRsCWXCfbPq1AkXwwJJEsdCfYCEt4Z2KoYZ6v7SggUH"
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
