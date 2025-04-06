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
    "4qMUwFNUev6GTqCZ3uDRtUAbTqd2mvAArg21Sv1zWbJQdkgBJqb6N3umcDTQGYKEbGUbhgFihzYiuJnpQLsjj3kY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DRUspVMJTPhBRqydjTcVGFZwnhHPPh6cdftryfFeN1SPVnNNJHJb79w2aArdLR9hufXcTcqQ5Rx7uhfoATxtyFc",
  "key1": "4A7voP1EnVeiAXpNzCXyXe4NScFUdFrhjcwPDkwqiRUBNW8mpJ413xuHjES3YhdGg2hSTozKuiDdptEKVfbv18kA",
  "key2": "4EyPKRTRs8noi2qSU9ZXH7i3tupMEPFjZ7zbRWMV2WM3be9GunUZDoXTxVMSv8QxPP9yU3JctFUpVtpkVepi8NRG",
  "key3": "2oUiWnZMGg9GGeKWfrb4kum5wacK6LZNw8qvBRZE3xkLrsvwkGpr7PJCXJpdNiKRdXyaG3HpGKXGiafk2X2mTCcj",
  "key4": "vQKwE5dxncFoeLv7vG9F7jXLMgggcHAEYsXJRh6yPjyasD9gDW4WiogXrsjeH5ncopnNZ63u123YafRt1jH3F5V",
  "key5": "45hkCefVKFibaG4BMg49DKyariJj3fChZqCqfpyXspcZjMoktsuMJCRB17JCoonQjNTWMENMR95YVyJ4aiaF7C8H",
  "key6": "k9Ru5aSjxirSFhMfWHYya3UrfzRPYYLd4idTjvhvwRkp4VKjhC1EHJYvCvd4wdVaNuNwVJCaxzays66egTgS13U",
  "key7": "2wWHxYe8b4rcrk5d3Dk1wJL3xWZBjVMuwk14K48pE4dCZmXfFmf8B7w417bZX2QHUPmdo9T3ARobPkRyFVPpQhLs",
  "key8": "2jddBisoZBLCD6vhSzgGVSk1DWwPHbjpyYx9ub9cqXzcbRK3Lwrxmjm4hFVT1FaaB1bDybBxfz3Gh6Cyb4U33qGs",
  "key9": "5sppZsZ8qvS6J82Zk2aF5eQ5GYenuzRg3PqZi4a62nWut3zzGaB1sZfB9E6EQm8DKuTvgX2ZZCDtQYoS3yA3G4fj",
  "key10": "5VMo87DnSc9ovXau64x5xAjVb9KdXVQL8xd1hhHZEeV571iD2yoWHai7rNbvdD7zKJs53kXMR2z5UbjkQyPcE675",
  "key11": "1RPa9GyKFzVbvGh31Tgi6h8tQNcbqU6NZfG3j2V3qkv6NjPd3M3xkvoWoHhWj5kjTdpQwGLVQ8zo5HqwMkSW4so",
  "key12": "3GLSbXhTwdTKQt5pEgTe35deERjkxc1VZmfGtVaEQEzK3pUDT72TJkzkscC2f6BM1n79KwGngG3LXFNfUr5uZxgc",
  "key13": "3Vaj2mH1SzJN5vFWEiN9wqHCAEDH4PryDcauMJy2pJPEZxDzH7pbAPe2aidT8mZ9zEQ67VuZwEkVJrvFZMjbSBav",
  "key14": "B9Wk1AtKdBRkoCRKtru932SgQM71dm9CyepQyQkdTDj5dhqaDiDate2XdQiid3ukBEnZPu6giTXRf6KCTmnnz6J",
  "key15": "4QJgcScg8gX8k2VkX4t3a89nsyKyG2vc4oEqnZ3A4GPBCkLrPYyRATTWNHG42vgsDZsLpoby6nmWoHqrqoGoFKnb",
  "key16": "2yEFch6S9G3B8thxU4D7CEtiHFVYL3cw5gmJhUEJm3URfXfPxLYrihm26XHSFy2V4oXmsXrugGb5TwcaTb6N51bL",
  "key17": "2B9xRaJTJRWK43ftbtANrrodsMrueY6sse2MDgxnaYSxXf7VSeyxK5rXQsg3kktLFsw2o7SHPH3UE1CoSUu3wy8",
  "key18": "7NYxgaVyj2FCvmMr3PynaDP2vMoGAQQ7utZyuUJDWJbmoAPDQuMchSHCdLhNuZMZPqx9HCpPi6RtxDyKuhCQHGS",
  "key19": "5MXMPiXqFGuB9mjh1g8EcqRChS4eSFG9Z2aquUPQsV8zCcnLj1N8HanEiefWGt4qzH6GQpVaoayb7Zt5a2Xz2GRC",
  "key20": "3Ynj6yBz7BFn3EfkPivbYk4weJ7W7W5sE7c7sgzw7SKtW52z3XQ7NY3devph4CnUXwFogh5UcawPmpzcoRH9F5Tb",
  "key21": "2zras2FvjYupkZ9gJDi94wKNW8qDS5VAWc8Q33P7jB5GgpfGacwdU7mY3gZJKFK14VjzMEAN5khf4NDHdf5nRH2A",
  "key22": "3nY78tXN55SosHwzoG32yXhPieyqYkNq1pnoVg9AekQXS4cTsC1LSE27WJFMaP9kHNtSg58fbWhmsLKUMUscXBD6",
  "key23": "3CvNQF5zq3XTGujjYtu8tVsTFnWgqDaGpjpTv8SkLJ5KTGxrZceVmiVDaa59SVh2TNF3Mfsxqda8BX5HsLn8Kevx",
  "key24": "4Hd55jbpNAXY6hQoFZhfGNcM2ktZduByCFMYzsPvfmbQgL8Z8z1qthXhtpdjbC8wBDh2u6DHVQVHBZPqxVbD2kh7",
  "key25": "3TWBcLFyLJEGTSYvKirfwLm7PucDsCivDBaqpfKUwV1c4GZdzATTJMofWdpzNegJLaHaYuQgCzEJzjouzxJJdNCx",
  "key26": "5XYoTrpSSSbyAgo2bBbB7HEHTJmm1rTtaF3BGakgXjgDdXy2fc1hNKeNkXMRMrYPmnqJr9iq3kFyzZtBs6Bj8BcT",
  "key27": "QL1soKmLT2DzQs6vbLTETof6BZxALpHezUzpPaEPfpM5hVibEAjDA43RJCqiSmaqZeGiRUjHvLUVN6iU4XXvQyK",
  "key28": "2JtYBpYbe988UewjpyEZ7HsY7u4p7irtPnstGXAS7X6teP94NdmrvDtbRYCvtvu7gyZd7oWPiNBHUGEgWfnSB22Q",
  "key29": "4x89mnD8yQ9aQFngiJDoBZVHBUuoM3w1R2fbxX2SQ26MwEhaKqLQba3Rhiuy3vEZpDkVUoQ9rfUK7wnPBqvynXCt",
  "key30": "3eQLc2AwpcGSvg4UwZNouzzD6ZyPeXy6uGmLhGKhvtYmWtgbeM9azMa7b9sCWxKdrgJqMS2b4JJ5yJvtS4iT8d8m",
  "key31": "3rtxRTLxT1gArAEw78QJWwJXPpBShqsCh18hSqHoAu8UvUznoKzEuyWawDTEN4Anosq4G3GactCywbKPKrFxp8rZ",
  "key32": "h5bVcxjNi8F6dMimVueERGK6qrGNxrS6oKabjnvGcgvvRTFTLpY5Fa74CaEc3mEQBuotunPTMToDKMecRafuBPo",
  "key33": "XkEYEPFqWqNrQhW5e8siD9xBxhUCDtssxzDLtPK2RRNqjeU4WjvSRM4ZxmXWcLcENfmaHsRranfMzdWrnx6Gckt",
  "key34": "4fWc1wEJTvkWEwUB6B5cYHxZMRaXem9BzMQZoxb3P8F4RaEHWUmUpsMKsA1naAzEsmBTQtCPzqLoraqZvEDw13q9",
  "key35": "VDRVv6mqv8CDHM8inGvSChSPJSpwfKLtXn4f3jfB8y7xhQHbnMrMW4NACf5ibw1W3DK9oLnGN91hzBwehCN1GqF",
  "key36": "5bMgjJ6rG8DrudGJFWxYL3bAeYMj9d3wexVzz6J1SHDvs3b8PawQnVHMJWFL57BXzfhURsUmWDBbaxsj1gsnq4KH",
  "key37": "XpBnUhzCNGBsV3nV4KHsQXBGm5TMm3z24i8eom2vbaCpNg85USx7d4H5r1oweVejj1g1EpLDQJ9U7ykD9pcWhU7",
  "key38": "4TMbwxMmN9NbadZQifES5jde9V6Y6g6kwjzrDzDMXCEqf1YnTwKPY8YFdVqzKnjoRAe7zCXxxXT2ZJWZMs1yQe7V",
  "key39": "674UaFmASg7Y8QxWaxHmANKDE4Rq9kcrqjbAiwTqARBks5b3YoqSojiSfESgZYd3rFyWNrRgsBt9Lc2ms4XD7rtT",
  "key40": "2j2gZowtxV5jTPvoR5ZEqSQK3n46gHBr52CWKoYwZjUViXR2zWfMYu4SErZ6hhb9n6VvHCsAhb3pHBSu15RFjZj4",
  "key41": "42fPq49bUiNT9KwPemUCZGFiVUwxonenTfpkQE8hcEU8C7WGaSDy13pRd9h24h9nfBcei4tinnH28HM8myDxA6Af"
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
