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
    "2ByXHNS5Zn6mye7EpVihGug8kMEfAZEVPrUkv88bJrw6mZaJxfMpbK8HnKhu5YLVM6qfHKUchgKUhaXS375HCpXH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FT2RVEGWHuwCzSDf56oEDEyjuTfjiKu2umHnHuWASWEFR8dXWCRYCjURM1tL3So465ekZQTQZessMfV4naUhbV4",
  "key1": "3psVb6HrS27SEtSgY67G4o5b3Qg8C5XcnnevMaVX8XnwknJjMnEqFBsoYc9LK6qGnS88pGqy3qZqtEWwJSqNXULK",
  "key2": "3wBiPG99jWy5YMLZbZ92cEjTfYuVRN6uoMkAfAZ9k55KEqG7kEzHp2TRfXjCr4gcgHCKow3xBMwwpryymHyVUMsd",
  "key3": "48nJUE3KhmMvcmcQtGVjzxr6X1ss9JTNUMMfPQVQL6dcCQUGr2sM6bnnYuJLgrM61PrHnc7k2XcNrrEofMx7qf8F",
  "key4": "xM5spS3u4kLu9NfnnmEuLhg8cPCpHMrz8892WwQPDaMbz9Pk3eQDwptEmRo3r14sSBYoQmn9ZNT7feTtKsn3Zmo",
  "key5": "2PhPEz5jUx2vah1eBaXMP4ZChccjRUB5E1Enqf628DLV8WVouA6EsdcvVPwU5AtcNhN3WL9mriTwxiKA22Ppf55Y",
  "key6": "56mFFfgetaLXFzkKnsiCQEZga7LQE9QuzouuaraTtycMSx64Pr4MsbBH6yszWh9KfUyx532LtuUKEV762bgf2VgM",
  "key7": "28qAeMQcXig6eAwzsKctZCBrHifpYMH5zu833VqdMYMQJjsZXPZ5aWcfvVw6JiXKeCwujGdWzaDQBsVGuU16HBap",
  "key8": "2uG29J2y6E6TcBVFduPeFDbr3PsZsxV121PhLFPdgtv3ouK1MvYgVdsYUCrptfvMQyzyid3AjiwuHQtjGorE76Zq",
  "key9": "N6zfWWZhomaSQbp8a5kNLD7jmoYid4ShWm53uQkJL3tTeW6vsqzYAbA1LZ3TNxwwfkmWTnmiM4SwEmg7NLrZMdW",
  "key10": "2Px434KEyfHUPL35Y6SCfPX2vWPwiv9RzdgbhZb3oF6eQnar5gMRQnJJjFLKLxqLLqficTkfhDtJrADNyS8EgWcs",
  "key11": "5tmb5P4qrYRQ1cSobwGpBYUCJeKbaN64uwZUti9hnDD8WWCwagL8iTMGZiwepJ4rX2gpYsitTFUrTa5yWxbhWdrz",
  "key12": "2khBZ7BrQjpwaqPRvq3F7WPmAbW2ejckkuBvab2ckVYKWYcwiVsNGd92MUvPBTNXm4pWzMAmRD52Ux9KJzmtJvbi",
  "key13": "42DZ5jSYY39HwaR2i8SPeNVNf37qPgNoPsjA9iuvZ3VADeeZjVBCXSQYS8qpS8X5fkk6RHKAgp9HLt9h62ZNqcE8",
  "key14": "4cQCHXNjb3XdsfgkGVwj8xjhRW2VceR21Ky9NjZ1CNmFUACQqatqP84y9YTzbEntMCrtQAK6dV9uPrXMwuiuTzgn",
  "key15": "2vpNbb8soxZrGaE9MUnGFVgJY8wT79EKTwMzKWdPyx2r2mut1jV2Zew6ZHosHzjeKqPZBUoVJFPYC7xiCe65GGqh",
  "key16": "rd8dcVDB3QavUdLNcnbKgNaBwZLdZQT9PmSiHBc5LzuTKkRu5et2Afyhpv2UrZwBJZDSUgotYPyZKBR1XuUafe7",
  "key17": "4aNsi92tqKx9B7tsCEUCq7SSHLdNrAj723UyFarCX8NZfTufZR5rZJqjV5w6k6o5V3LK3XmxVCfFwE3W5xJdzquY",
  "key18": "49PoP7Heg6jkN1mAEXwKzLx6KRNC93pueHJN5TRj1JoHLn36Y34DZvsMvhcwfaHccN8Ru8koaQGCrirBy4qYmCpP",
  "key19": "66WSDJxDjuX1W7a2tAztq9ARYfZN5k2zooGn9ByoTr9bY8a6uujUbgh7MSh1MJCVdtphQzfRuqhTJXLY3dXtrNsU",
  "key20": "5W1xjG8hngBgVANMi5JGi9p7MCFJo6z74VyuqsJv1C1Mhn82VGqkEYziyYFxBHBGCH9v9pk7wzXeKUD3qhtDpHGF",
  "key21": "6AtmnvL7GrZyNrQZ2oDdjLoK2jG2v46Ve895Ts535EE8XpDsVPPsMp18qgF2VY4WM1TJGaV3oMAECR9jU7XhmcV",
  "key22": "21ukmJCA9D5j59DinvvLk7zGWDekMYcTEsBmcNc21YCXuuzDaEshDxTfFykN9f9QGJLAh6oQLLU57kDy7gqx7qvd",
  "key23": "4H6ARFqCq5dRknDrBUMa6G4s296dfYKSto4f2Zfrcmr4sm1MxtDiqZPsxUpGucsuEt4LqcoKzgPZ4NALJ6Xs9ZMW",
  "key24": "3CRrjUaMFnDuH3yAW37zYEjpV1WXAZsPQTsKWKFUGCWe46hjTTp4RQ5fUjihFbpq7dFvn1yqT8GT1JPh3yFQmwX3",
  "key25": "32ybB9wovQdwQKw85DrYDswLsPP6PQiyXZa6jSmYm9kXxaV28F83KB5tusqBgjrsgkjdc6B1G8Ccfu5t7yB36zwW",
  "key26": "W1c2obGcpVRnETE1xYope6SAQEr6cQYGvZHafzZCYbJmHionFLSQAorqjmf7q9mFrK3wTZe2P1v6EKoWAzELD6X",
  "key27": "31RiBRTkbK7qjBfnZ4dT7UP6C1txrJLv2qeVA8KmGkKXULEpyiGZ4j7tT6cXiJT8zfQC9ydLHLSFszYf7R6mtKH7",
  "key28": "jKVmdsU1KGo93o6RqAPQFsmdbSUgKdJGSQ1ZuAWz5gxp6vzx7b6yeL7syfsqvYaPtpeB2sTaDJjdzX453hWdVmZ",
  "key29": "4LJguHob6y6H49VB8v4KtHcSfAFtgqKQ8TFVHyTS8JxdyGsQzqkqNL9YZt2YfwvjYvS9e9gmW9PvFfL6wpzNssSE",
  "key30": "5zB2pHnyGP6yVENSuR67VooF3RHi2gTpekauRvY5EJww9ZziMC5MVegXcfHuPUUZp5xbmb4dMqZZi9UzcgphA7FB",
  "key31": "4DheBuSV2koo4qF1V3PoyBDT9ycuwJTDzm9k7kFbKDGKSA5r34PyC13Vah3Cd2DeGS1AfKtbSE54axKwR7BkPwAK",
  "key32": "4iH17cc8pKKzeCNtbpY7KgkU4rSNRFbTGUZJaLmPSDbF6TBLQTiY4upmoADps3NSitaikXqaeo5X3ZbZWXtLsSJg",
  "key33": "5aR7PPB7JD2UigiFBbdQQL5jxZnp7yQdbmSH6NTJB7XWMiwor3kQQMSpqaE8iF6MXGTpuCmmYTj5YAMKnqieircT",
  "key34": "5EhUxEtSyfCVCjH3M52AaKCVJy2GRTP9tojv3TTBURxXBoEgUwrJR3nrRvtTD34t8FgrMjovNmSrW6AQdCHQHzno",
  "key35": "4DUAi1GaiKXBzd8encAaSfc8GuoypdtbUndhD56zt74nAqK4s9mbANaF8BbdssyhAK6mj3MQcj77uk2ppMUZEQtQ",
  "key36": "4EYzfjAhTTTP527qKc9R4DppmvRfazRHmttGLC28BgMQQiePkQMN4tmJB8JJoG6yJbq6EyF7djjroyLehwsJps2c",
  "key37": "32pPDdmaUu2yf3PHCjKi5FUKD4bXBTcVcqEj9jkPminaoeGiaE6p5i4HvSPLMVKnvj788pKMBWNqeqg16ksBCKWv"
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
