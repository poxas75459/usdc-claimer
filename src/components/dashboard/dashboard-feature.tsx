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
    "5StgTkVEj6GLTNQzPgUgu6h6vKrQ7GxME1egbPBysYi8GUbgFhLevUkh8mPTFi7a9T8Kx4gdjGd6NCFktn9Rz7hX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DZrK6wdAjLGvnoqihpyoer2EBJkAUuXYbcfsv9VmG47i5EbiFLo719D5gjxrrSv2KQzdPZv1m3PQD7kE9fTkz2R",
  "key1": "2PDUQi7yQEqAMzJ5DGn6ocA3rbdqgqZ6ANK8LwT9BQr1iUF6Vdete4Z12N8z7fXvgwbS9Fj1memq8mWAgc78xACD",
  "key2": "4neYU8NyNmE5i2ex6STsmjg42DcnYatLK3gXFqcfzeLawU64QV6ADB5uhyh2oEhK3mpmQNB5Xif1Ht2LPuihj9GS",
  "key3": "4SL9yxW8eGX5whxBtsZQVfmtV7Pa6Qzav1MXWk1bbsc6KxLeLPStEGbS4gHdjwaanDbDnPPhd9RPNQ7JArEdD3oh",
  "key4": "5c612mjaLQpucMs7hbHCchrAmUFurU4vFQk1ErNBD88BrFAzpcEn3Ecf2cn1Dh2boMVsASZn9tQXSvuCD3hNoGb5",
  "key5": "5Fxf5vAhxjh8KGbUx2s4dgxjvwyce7khgMxRCeEainNeRi7wcQrChC6rKLDSXWT6H4xp9Daecg5US2KsmrV8XwAw",
  "key6": "5hbMEB4aJgotd78E2pY7WphmhpoYsjskbQFumSRJBb55pFrfSHMk8KMoQjYnntnnTyuVz3CNXhQy5EG3xhEE11Zz",
  "key7": "2x4PAQJsi82wwJG5zxvdxz5kSh2tD1QQ3uJ3711aSUJcazCk8vUxUMqT1ZDmbTRWXSKLaPk9FAVfm7GEuGXWNBzF",
  "key8": "37G7mVTrexQgunTVXAhey5FRjqoTfZDUu1w5pPgHQy6M6ZZ9H9pHd1LMP7Vu4xDCXvd5amGDfd9f5eJmkxNC36QB",
  "key9": "4m2T4eNs7SHGwzUq7JF5wSK8oiM8qFHFQR2hEyB9AAQKXajVpTZzycVgf5ZoS5ukKTLBoe8zoqxQD951RC8EH6pb",
  "key10": "3zXRm1MVtGpwt15QmhhiohusFCpmGoUYy1fLhhFtXQNjBoY1mLPmrwSQeDSSj6DRLn5oRkfcza3gJwsbDr4zcvzZ",
  "key11": "3vZoSjTyjkBiSgd4UYdhcLmvdstHPvgvR8W7xhgYt8Li87KKe55Byew9dk6DRkJd9EBQQFNbZQcYmnuGtTZQghhL",
  "key12": "2Qx218NBzksPB99aPePeAw7L9KqNXHQMFYQia1HzrTyVAzDoXvSEs9PniPGMhybPaeE68Cnh4CYV5cof8dJfshEL",
  "key13": "Z6TwDtVMV2K3rZZb6uVqNeVVXkd72vHpuGvh1M2FKM7WnYfAoqbFHPMuSWMyCZJ1ya9r6tbAy2GpabahueNqwoM",
  "key14": "gNmWm82QpLA3UPGz7JJ4ZwqaSKwtJxFFBBRA4aAAfQ414Js6udhCtVtkuGsPD8SM5uKZ2b7JUhQni1eozLeBhMu",
  "key15": "gBfRXEHeE2oNKMG9hTLkQrYY29CzEFqh8VUntudUg6bZ1MtmbzS8AVamfwqxm7RbqFw5w9FZcwdnRAqC7p3UEe9",
  "key16": "4XGLuvfGXE28WQiPjdz1TphHEtSZwJ9WVz7JiiTdj6esKHBa3uoDkuqKWKhFwPFacGeWSDDs3A9oeorEWXXpWfVM",
  "key17": "2PytmZuvqBj6QJHoXRTowpGcSBBc7Sn5LPHmicS9sE96PW7M9aFU6jcLzDNAAKxt7GhPd2zqixFCnpkU9PgEE7VP",
  "key18": "2iL6nJT7wLjBn4rQbd14rQSiWxp26om6eBZQiXoNkCt88BW9iNZCX8GMDqNvBLY421y9qsD7nZ6L4edkrSdZJh8z",
  "key19": "3bCYYPL6bJtiWkAuDL24jkmyJL5gvDePxtabRED5KMZy8fo2kqQvFMKATtjZbutkK73i2FjkDPC624Gs33v4CS5e",
  "key20": "kv51qnKWhWUiLgBKMi648qSa9dzXkrpVUYrbD1ASVr1GPgRq8M7CEy5HC24w7bjRgq2qk3BbEcfJxmY86isXgR1",
  "key21": "2gotCRcni4g8aReazgZYsH5MuwUjC8g7Vjr4m2nnd8Vc8M9eo9HUZ9vRZcZjaAEYwDdSZXcDq5k4rv2rMy2fFcWU",
  "key22": "3eFE44waSoDJiXf59yToUzuN4Y7c3K35kUokdg3gvAV3bhj2UzMBNfdHWnktjHCzrcDtuP3rAq35a1Bs7goNe4HC",
  "key23": "5JVdFQUDTTEDSBoWKTYAepgb5YUDXtRzYCZLeQXFjURWHHHmepRbvkNzjnXQz2cXrxkc8P5jwjakgkUGRj7aJnrp",
  "key24": "35cuaiMBUTkJBe4VfFMb6sRZHNyvRr9PV9Mzk26duvMjUwoSw63oJiYauybvUVBNZitgDEt7DbW5AqHsPcFEyEP8",
  "key25": "3d4voN7ZGWG7sHaBt4LgVmTxR3V4nFKiwZ4Uc7GVK15F1BjEFopc6B55E6XTXdogpfaZ2d34yT9gjPYsgv3C4Sbb",
  "key26": "49RTunydtkaweNz1MZNTq3jzR8o6WViY1k7rUdLMkEiju6VJ8jzKrSVRwxuk6p3MoPzmjaK19diWpKe2E5UqK1Xh",
  "key27": "2o1THjwmf9bH7KM4VNMBrv5nxv221LGFpo5B7N1xe1KdNhX6EhfHCCg4oz8CuAk5u95wHySG8Cwx58HH2V9pYkdt",
  "key28": "58haNrXjabiAbPrJvFTpuQHkPgteY5zqc9s7SVeiezRjL9XwbgeqztYXUTTWjziDXQgiVXzBVyY6aS8uTT4Q7MQt",
  "key29": "3y94Wo7BRgDobTNYKcjuMa6ZiFE79QCgLS24KzgpaR6rsPoow77xZ17outVowFt25MUHKXMw2r1wppAMuthqr68p",
  "key30": "4QJoN3aJK64qxoKEYo3R8BNnMrxHyz4bRcWYciK2vm2Tmqy2ySefWX62MUWb5pwpxbXfYG5cuUUmyZs8vPhS96fh",
  "key31": "2WGvvTSQU9EfyUnQsYFEYd6LTGdKTDdKoyv2KaXCTE29jrTLsnKcb5qV2LPDYwRgNKzjZkJZMksGiSc6Tyccf3Qr",
  "key32": "4zCKsuyPnYb2B5y2CcmSyPzG8zAGd2pne8KhZKd59RejzrseEJv4mq8BCMvhV1PFUnkmUjVFQJhp8Sjs92vubQBL",
  "key33": "2dpcBpz7DfpqDtzdWb2Rvj7fFNzZcYpCSDXKVbn9E6ciWsRjSWZLQByPouJTqeXn5YhzT1YSG9MnYHqSW5QjvnAY",
  "key34": "4Kz9qkfRAceeCcPgbUC9RMe76rVRQfoUhVvNkUKpMTdzFxMPKE1YBoE6StpfRqPUeQxJdfea4LbZovkovtK5fgDF",
  "key35": "2c7AtiBPqq2EiTCvYysLsyrFeNCZJfC8kDXkiLqzkUnhThY4cdkh6YENM2zHofopkQmKumbU6SU4cbPUGdoTEWSC",
  "key36": "2ysL263G6EGjX2t1ic4bFAtv38ZqcZGg7dGHRmbzWsEfad2eqrzFVGZUy9RDYvzKCWfngyGa81pgfsiCMsJED62S",
  "key37": "4p9m8SSjeSVXo9ChSrWAs5aFE5jLMZpBs9L9K9frCesvRHWpLqpBszNJmFR28uDBdv8EkjXQrggKwz8ZCDm5DaZo",
  "key38": "2JSc8GX8hQBR6ZCRrRrn8vyGDLCfAcfZ6dvg8NXLuVBVg96i7ywobwNZn2fp5ZGcdkVaV4JzuYSihdW8Ts4bJWK9",
  "key39": "4HRRAYULT2zXFwSRWfuvPhji1YdP4W5STeddwQU4Sj5K8ZfMWYG3d2YynQfVhF9kd4AjkhZp1hLEDG5FpZD11Z7L",
  "key40": "4BF9rZUuZeguDCKaQAcYZFtrXupV4MsxoTA3gVvkuAdgok7eW3iEkZbw29CnYVYM9ecvaFrRyfybDT2UVrT4TMXN",
  "key41": "3Z6nYscQvM48v3SCXznGVNkciv7N3GuM2QwuWM4xGsvhJX9nRyjLEMzEWNrHNJoXT7mLCTrff8kV2HHoVakj13AT",
  "key42": "5Jj6aU19tnWaHoTmtSnYAH9NqrmGSvDAbfEXvGWgiTmcw2eu2dCV9zMPjwW7ntwa9cYtHmrvEkJo7RAL7jbxHgKR",
  "key43": "564YtrBsQSusT6pPEvskGUViZPCZ27iqrFxoNVHi8DabSmSi6L93Z9ALSnbouZQHZ7hYz5SuKt2Gbh3QLCioeX3M",
  "key44": "c6mnnkqrNqqcPqLEJQKfCHdNfVvwi2m4jGaw3vt98iocrJY1KZFW3o6nxHFNB3B9H3X1A9TrKdrfvp9M37qGbnp",
  "key45": "iw5cMSy6L6m2iBkKn91YGX5SsSPRQ6MVFxb1wTpL9DnyLJFLEWzSwqzLc17zJfaaCVKnc7eXPshQ9BztMsShyXh"
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
