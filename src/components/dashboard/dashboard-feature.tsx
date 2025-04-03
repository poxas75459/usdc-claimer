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
    "5N1EjZNzRSKWvhWPEeaZVcCaG9DVmmEGjRxsHjVNHmrug6dTJrBswdsN1aeQ6JH3e7ny8pMGkX9arwsunTGPuyC4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wAiJLfF2Yc6J8ez2LrkRumA1h9NuEsn9fM71BHme8hso8iwssFoEsXyCNivY6VcwFxcyeKgN9S7KPCnXPe58bUd",
  "key1": "2L9WAGgtbDzzeDzUdzqKHcYZ9PXLSszVfd134WbReHJgbCGAejpAgDxYag1XSmYUhdj9rySq3CoKuD4upDjXnXiW",
  "key2": "4JU1DjdNMW9mrpAuNSc5gAqCTEZxmUHeBYzdCsH7wannELy3VA1EwGxe5f8bc24tJ4H5xM94LU4J5ot7dshGqH8E",
  "key3": "2hEFv6sT5bb49mZb1LgwrkLUfuJHXrLhXfSgETZoDaVNAW26svvL9fDqc2GtLDs3mjtYxjETKNNUFjHcxKHasDrP",
  "key4": "3M9xb8mRNYeyLJUQE7wLfVUWYUbiZChLxgCGmoxULnnD6JQ5S3wLaLjf51hNNMgkoWdaX2JBW3gZQaH3BCJw6zF3",
  "key5": "4v4n55ffPZ6N3E6Tv85UWsK8z1Ytr3TuVg4wUKvG88wHdmYjP6ym3bX8BKtZL7hh5ouZujKcohu7P3kHabmxM7B6",
  "key6": "5ixQiXPDhUXQMArszqXVXrAEurFE2JkFbrHLh4ZBcYkgsFwz5dnT9noRGVya4eq89axbYFQSBUEVHN2cVdLnF4sa",
  "key7": "5nqrGzLHf6mLDwEMjLZYLBPFMqkzw7a577DQMGX3dQBbRMczBRV4wMgiJkpiXysPxt8XcYSuAWt17vQQmL5Pfqae",
  "key8": "4N6TY1FiT4jYVS9rZPJ2CfgtJGVXdRzFMcFKc7ayZnTa5zRsATJLK4Rm5x48Vk8Zce1vfbbQzJ9FUpfKh3Ti7YmG",
  "key9": "66mpxATRCacnEseURFnSgbVk8Kd75djQNyeP65Xp9ZKCJjcXd3pTVzSdKa7CN2io6PcpeJQmKDvhhbKGoBN4dGnu",
  "key10": "3akqHdhhCzgjw42YADFtHH1XhK8KrM2t1Dp3xTaysghMKSYNibabcg4R9Pk5SFG5NdgNxixqKESJUan25ZWro8nG",
  "key11": "4kpk8sU9FXmPBwxD5rkCgvFkQfaqyGm1eVHNqAAL2qG9hgLz2DgLxpa3vEAsYRZNk6HUjhzBcNDpfyPB34gsLnKe",
  "key12": "3BS7o7rxN4gdAWb8E858dSg5AXrNJtfzfVNJ2uiwLCr4KeJdTGew65JaEXrwZzJaPteBTEy3sWbzQSHGVDj1mUhp",
  "key13": "38hPR9xVQQLedQu76GtbP7Ywc2n2sSvuimuaN1obCHB6NZ4YRxKoa2hDmqrmrXrqWG9Gt3PUFospifw1YXm3rJQn",
  "key14": "3UBht19KJBe2Xmf4Npga3M6ZHwAfJ7jqSFQgVNsvwQa7QaQeLMa7fTHH5BmssUUWh9Yo3yVmSWrUk4VVnViwCKd5",
  "key15": "tVvTdAhGdx3MTKxxWMRkzF6FPnf7cyvTQBzTPneQycQqSYquTPKmXYLmGrwTBLjM9RkGSTEu9MJjSWuH6SMujeR",
  "key16": "3bZDcR6FxoEpGw9VPXCAS26VU87kQD9owc4PwUdJdFTeyfwNZ1jYk2g8aHWj5WmnArVtec4zigmZbhmDx7bofrQL",
  "key17": "4zFE9Vfs3RrTKaPK3jx6tEBt86PQaJWtvbLnrdVJZkPD6VwXd1CXHfWtgMJ6V6krTQSxThneJtgqMeXuAmNEiXhX",
  "key18": "3Sj4eYeA4reXcmS9BSyxNnZw46Pp8G3Zhzx69dwQLteLuSziTXjfvv9NCPhGwrvek4u9NFHi7vHhjEtHjfgQih6N",
  "key19": "4cSAMZufssEVXACEF8W65ceZnQS1TPiyxPCnNea3NrDVYxqnGgQ1yQTujfrQorn4jsHXH91whxAWq3Z8xQZFcBwp",
  "key20": "64Mk42bDiL4Ad9JkmhQrh8ZH2w2L89EaSNSGD86ZKnLtVDnshLUkVRPEyGWG6SgkfZ5B1S9gDLcwMXeBWUDCYDZv",
  "key21": "3aN3JEXzYibnNUUwNSEmU766sAafEFxqhPd1xWVuaf4VQGnFFPKLyiN564hKz1TcxFqTfvBPWmGwHa6CnwzYN2jZ",
  "key22": "4q2osUhoz7mfzeaGmr2ybJarGMLMVJV22BMhQhSSYtG5m7aorA71vE8zrQaD3YNZEvYC5HBuEh1HKGtNBVWekv7a",
  "key23": "mgVNYnY6FDazfg3b7umvmTY85ZZmnYSqoHij4c5m5F674NrpCqySmpAjtR1EjWXSD8RzFcMXRXpgReatystsgHt",
  "key24": "2sgu6u9yDQ41tmQ968Axq5mLtF7uKR5hxQ3URU5WiiHPfNLVUP7vFXtc5dozMiZjcHHTGF3UTx5zHuCPsumZhn5A",
  "key25": "4xAVNtYLU1pHLKT4whbRTdDjEyXhqHmm7NSV6WSPHiGfqPh7HkE5DJWECHQnkAarM8k4inej5NvXVkfuW2VetHnA",
  "key26": "4e1kg7gVcoB3bouq5M7G8TNMDKjLbzmP8X7iYAKsA3d2L2h56uuqzkT3bSyucLPGheEHbRBDeT2oWg6nr2FMgPHW",
  "key27": "41u6CzxbTB6mMgVAFgAWwLota6V4qzfdgxvhba166wS7dQ9nB1WnA1x3t7N3kwhTgnh2up4XXyoKAK2YnH1prwSS",
  "key28": "rUcecVoaXm88hCLgq8Z4cjW5Lhoph9eVy6a7Cm27U2b6UEH7Q1N8NZYFjerM7KHSt5zJ6b7rcvyoRnujkJ9Urbd",
  "key29": "2n1rGH4zYzcVPtnTavkXxwRXe8smzdd8EnLausnZiwWMwhdKAxc2BAVb5NkBgxAvudSDvph8x2bBXanJv62utCfj",
  "key30": "616mQL7MNbj2qxcuXkJ3bJctxobjiqvspzi17sSQqUTtJW7mf9m4nwJcc54TvQPTo4g4bEXfXh6qiAHKhPXM7FSy",
  "key31": "LyMWtC93yE5Z3uf4xUB2khtJ7BTLzcdPfsqRjqnArpQfJSwkdsK3FstoNMQR8fAkcDqwuAVXCt344HqdQ8rfyMK",
  "key32": "pNKpnFp3j2197roCSbDaA3DajzAzRV8is3G3dWTnFAsQpoyuck6zgy5frPLgC3LzP8V7fpAoVbLSTioHVoCiyfB",
  "key33": "62Q19biYCpyKr8GLoRZmtti4gSMjfn4ojAamMzm6aDBQ1CwaNZiDkqbdZKcSK3Br2y7NwFoYyb7mab9WN8HJWyWs",
  "key34": "312g6BwasNj8P2LwiAEoUx6bVEKEud2SmprK7Pj18aNgrDyxg6qVzhCUhqc5RpygwpEVzaqWn7pkyFzaT71EpAi6",
  "key35": "uwrVXuSJ2nVmrqRHkFJhyAu4qnWvEcTwNz7nKRFeLRjye7z6DaHPJqWMc5gvEmPc44tjvvgRaJ5yTR62Uvz853w",
  "key36": "63b5gJjezY71aDbcHRdEBgr31fgqadegMNukzF9KGvbX6yqkE6joWqHRtKMCBvqsnMMPLaSRAynThZ5a3ZYXFmqV",
  "key37": "3X2ZtwX3ZW6rhrmYjKUoKApKNeKoeJ2KYKVyZCdUEFLSiw9Qey1ufPtHVbUMtpmCk9M8V1ee7Q41wHbe3sgaosBu",
  "key38": "LeF4Rk7vDNcvqvjQgEUaz374FchBSMNmwGzs3cvUT8qHQf5wUghDaHRvXQePGq8kBVTASrht6ooSuaM6B1PNToL",
  "key39": "51WQxKGsTxDwGY36UW6GbpPZk5Hwso8dsxXHh44CaRTv1rskGUJYeWDiWaunrpKt6AXzDiR7h4deDnGTKDAR5sbm",
  "key40": "tu5aFutSSJmLDk7YgTrDDvN5Ut5LCv8iif1XXf6FYoTUe5dEoVK4NRvnkbLATnA4J5aY79ZvYCYEqXBykUbFMU9",
  "key41": "5FuVh6qCSdQDT6YHqtBQ5yDfJxSiVnBaGGr8wHVm8VZFGvk2FYi2ggQMg4NY1deSHTbkTqF8SyhJAbbXoQkBPZWp",
  "key42": "2EPw3uTUNBwnHc198eaEH6muuTVmmx2umUrcrU4aPnsYvvvKdPgsJWhpfAfSPys1wvGLKXw5JtkdyUpxtfEZ5ULR",
  "key43": "2CaLVyNzFrYQUpjNxUMJwDyJUZFWx3AVXNneh7wHNN9uawdhhLJa455MjvYqT7df7XjTEcRLaP1BN2ZtoPDgajVY",
  "key44": "5GsvJjV1qiirCMw3fzkL15h9ejU3zdfwqbt3FEFCFYfJGZtwZLDQgzG7Um8Jp1yNZVQQPoGkh2z5724qpa7pVGkd",
  "key45": "4TSw1Y4kH3mmpPsAKHBsqLxbezsVtXckcCouHCsBvgDCab9kVBp4JpBkzEwhXRSneyywQWXAFsVpkqfepS7Qnxeq",
  "key46": "3d1TXw8UYNPnL5o44nihCTMtU1JAtYFcDVQ2Qr3BKVGisBisNXiApg77aQ6SdW4C8hRRdLe6yaXRko7dzbnKwN22",
  "key47": "4TkeNp9aAcVJuZ5YXq93vhtZwsdgNEaG7iHmg7EonMbx9ZMWrmdc464oaZE2u9CUKxxJZG6gjDDfpAiL6Yvvae9B"
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
