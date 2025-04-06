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
    "5cnasjRzzryZ8yhtNw4uam2eQzFJtZv2BMeFsMuUPHkxAiNMM9SeQQLcCh2G4oQCs7rhWCTjJUvRL5ViphSgTxax"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oAmBXH7QDipC4QR7AEJe3cgF9ZtDy4i79fvBV741u2SfzdES437xctqp8E5cwFvrnG52t8a9sXWptHRUpo4GQY7",
  "key1": "2CZiU1RMbh9Q95f2fLXT6nDMwJNiKuXAv9uBk7DpQ8veLcaQhYW7Toi4nkK6DFMSfB513KNQH4PkFparc8ZWGrUM",
  "key2": "5Ye6HaAGTe2HqZytQjqeHAmuk46TujASJprfK1aGRXuJ5WrewBcnrSg2Nz5GwRCQxKH8Y79o44fGNG9FJWqaqGcw",
  "key3": "2ff7YMQxh64CuCiESYhHjjCeWyXbwjRJ4dXHuECwZxMWTp1wwHathR9A7EM7xGAQC5N4Lo3Yn9UzHfGr6yRKqdbF",
  "key4": "5JXn8VntDbjRH97bHeJyWqUBLbNUHJCe9ydmhYrrS866Nm6PTgFXQDmjDL2ARndKgrzvv7RZD1motnCzReyevxer",
  "key5": "3ky7w9emWkxPfu8pThpmze1yPU46ajS3tjHBM9ibR4UUEXmLGPnrTi2w5EsKSsQy8bNWowdyFPXbmnH7Wymw8KGh",
  "key6": "3yqHU8pW8eznkwvj3oJBt11YFHZFtTxbbvz81upBBESiFsRb7RyGrCng9oD5NmRsMPZdJhHM6vqLXMsCJrxFuGQ7",
  "key7": "49v2tGLsGivQfjTovJ4uEn3Fdgzf63GDRQTFKnUmXt6s7Kxc7PkhoPduigafs75HWENFKHgnYhsshS788G9tJXgD",
  "key8": "33MEgS11brnRSNxQaj9nuipyamB5ovEKVJyB2V5cmDM485vL6fhcaLYKDvA9ZBRLUR8Vj5EFtFLP1rPt1bDxhzue",
  "key9": "23CdH4KzJgcYdYLrxN6GfjcYogf6kHj69w59y6YgpAANQRjFqxNWMtX7qhRzqfofrznGV7ZjVBhoE9rZRSitx1yC",
  "key10": "3v8ZyVaQd7HGKnpyvjLKwBzfGPSDYC4dxNoJVCKDsQjt4AceNBqxvEjj6sNh4oGNr2iizeD4QJsCqpKPjRe1hd9K",
  "key11": "5CMuSMKo1a6oXHrV4eK5r2cqp7Gw2it2KbaUMKJKGm123nHE631xAfhvJtdYr69x5r9wR54HDai7RdbzcPXEFN4C",
  "key12": "2g6jurbG3Hf4PeLFNJgg114o75s8ifcntRVfEthCtdoqziv1DMhJTqs7qrh6fKoGCDm4SWWjr1RvZAfKefCqA1wa",
  "key13": "3wnKH7W3YC4gxDQRrmQsAxRPf9vSasDdGV2zZ2h43QjHNFfbg5XGk3FpY1sfQFpTUREgHKEGCkR89e51b79fnnh1",
  "key14": "3u7TzQyqMzLd1TrgeXevrCcvo1M6SgCBwv2GeVkpyJB8iAeUyfqtmPKT2L32SMuc8K5guGc1DKYy4RLgCrk4qae5",
  "key15": "3VNhBRyW26SkaeAVzRMv5YzJjvUSKf8xsuvqi7gNU4hqLG3GPyVpnLWjzwoLXfHQt1yw5oMDuGVJhjsAH5bD3A7a",
  "key16": "5kegVZfdB6wWzh7mJHxJev5GzpJsEZW9HSAKfK6QRtATeMgWDwR8kktwMYteka5n6G27cUsnfFnSciGC8bXpJYfj",
  "key17": "2t2jUfiD8SuvTwH6X8QVKVe8jPXaGiBTC4v8tJF4X3kBaRgFtw8f51xsXNvY4UBtPJgGE9BoHC3LkJGeYAZz2vRA",
  "key18": "1AzTnjH9P4RKLuCMBBsYwC4VpFGcRhxZ2kBrTLfgi3gZGjwdQgtEqeXN7Z6pLjnev495oF2Sutz12VdStbhMb7r",
  "key19": "iQyZxYx5dgDWyejKqkD7sr9aBcnQDMdvd1moY9eGfxF9huNcpuUfyGVUbJ4Vgv6GQDuKdauz5r4pPLQtDjsdHMu",
  "key20": "EDB7y9w8ofyqg1dC8rEKwVNGMxKAwGtKwgA3hdf9H3hWvsb6jdx7X62FERxQwrCKb5CcXGNtg81whmd9GHLQkaq",
  "key21": "2bueX2Q6Mme6cMs8yYpBXMFZkrho32M7YHXozzWCeJVVwjYeRzA5husc1mFUden31fbnEnc53Jwk6rM2WnpbYryS",
  "key22": "2MwMpPA9VCdSVUdf5j77CJ19Tcmct6ucAEQkTDL1mrhonHiJEP7smv1BpYxb49rLvKhAoyCXmNJpG15GDXxS7QDb",
  "key23": "3CrrXx8dE1d9pTRiHMKuEW7pf6i1LVYiZkNrNF7Ro1NNAaKMhAEsZLuPzpiywuP7S3ZCPQCW3dn3NUty7J7LdVpc",
  "key24": "idW9a3QV2ruQ31HZBY9BDeVAMZ9nxbTuh2d1gttdDSZWbwRjBQC4w3M2vgaZzrHrFtdo4qrdkY9ui9wGKHzpYDR",
  "key25": "YSdSjQiDeraY8qnH5hH9QjkatNQBGJNnnNDZdMETXQevhySdAazm4WppWgLzwoccMMix7tsY8imfFVHoHsYmSNc",
  "key26": "59fp3pHfDBUHYdbo8uCf8qx7Y65xgy3vwLMYtDWahTiTTPnBbLi4Ve9XzRQudUNJ5sdYXmxZffoUX9mntsyfqTik",
  "key27": "88pWDi3EaNftLzZpfS2jCRssi2RM7B4QSvi3RTpN9h4zhMNYLtcCCz2zr9sfFa8RWPUqiKkXyUXYgVBwDQpfQnB",
  "key28": "2JsXU1bu7FHYt5UjdDDXvg8LX6cpUdZ52bVcfEGJkf5fJ69G46kQkqFNvvMci2f8RG9y3MqMQS43kxXMSQr35YVf",
  "key29": "2hKL64FHGh5uxxXmeUoFjVcFxw6Y8GvTa1CGzyD4YiE1KQxzRH5SdSY52tA2rpjjmbtq7aNpYgHy6RfZ68KzErD3",
  "key30": "2eb6QyguX6H5pEkaivKuCZpXqVn1o6d5QWkaC1SjqDzifsxEBp1rDnaJb3Zv6YcqSJRLHzk2d1MeenaRZHYthQsr",
  "key31": "4YsjvwFQCVYri6Bc2UqWmiTVxppdcqbjaxuZmdshgSZekYFBUi6e9HdXQ3cFh1jBJ7eeeqochETSU5B68JdQ4fX3",
  "key32": "QU5mgybsyj5eThaNF7DmLW9mzcDKBMzUSw741DjbRY8fJVgaUaqUtwaa9HWAG5R4n5RH6ce6jZidGVnkJA1Mus5",
  "key33": "5MY7ffMwcFSQz1bFW1PDnS3vhQTonftN6MJDH3dGV2LACUXsTG1TK95KBAK11xb2fXz7xzsoHVv5jNU4CEyBqeDZ",
  "key34": "4kY1suQhRXzxC9YrdbY96QtGQRB6APMkJjdJ6uBQ9GpnCJmV4VFkVjTuKVPLT8Ct6u8X5haQD9iKykeBzekCTJrd",
  "key35": "5VekqoEXUwnqkW6xiLHoVRZKXkXign5viN9frSjowLntkYKSinNy9A43Zd9JP2tajqWwECMzLBJghJTDZDujDjAN",
  "key36": "2UHS31WN2ryuEYtw5w6SopiiS7bj4mz1Uot7Bebq6Rxub8H8pYaWGahqZuYqZGxjSiYKGzMejSn3se22urg3Xs3K",
  "key37": "32BeXeSKZW4mK5n8VAa65qTAW8U2rBSVjSBd9MR3JNR8mfXdogePLVCKmFSGT9PUmEqyE2geHsqsAnmUcDA3hAPQ"
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
