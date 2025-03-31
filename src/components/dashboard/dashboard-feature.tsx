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
    "4ffga8VCW2oYKJvdJe7nY4sU9pX2V1FAY7nZQdDJzH5Co8XZ1bDqTG9hTu9jovFzVjb1dvkQys7WXqocJb5eneWe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hT9nji5KX7GNuG7oX2ADYEqmQr2Eq6iKr91pXykCWrNbCPYkv3kvKuUpGTjnVGpZQm7v5UjXnJFm9zL5cDpaGmC",
  "key1": "5dGAxTuTXRrzvLndHvFdeBkBA1XueF9voYfHDdcBgZLWE9aFP6LrfWRYgE9EPV8o2sbkGGStUE7sduePUyiWoYah",
  "key2": "5y3Ei3rvcY5oRbopJJNhHA1P97sMeb8KmGuij5kuMt2Y4UhmEW8Njkvk3YVmeSR3LEUfAHgpUkSm6doC55PttSFw",
  "key3": "3j3JbNhMbf5w91dwpuEJeKREfRGUDaAJzCRgSuVWAoyJ6oBodjdZudfZXYW5S7seBeUiGEQX6QXkLezZnZt5tkLQ",
  "key4": "5M2LVipzXCfYu5wVT4sUJVz2A1WnjLTiNR8TsvXVaGcGwnyswjS3Y9Q8F157vRVX61hZto4ZvGx5q6VW7TsDJkVZ",
  "key5": "2cGQBR5iNCCH4hmes6C7nmkYJPp2LG76pmBEp42vDquKPJzmkhzVSRijAY6sPkvJXmyKuDhFYkGNjDtHSohMfn7s",
  "key6": "8aGRHTWym5DNnH7GtGHEm1Nxod6rYGr431w7h3eCX9ZbFfdTibaBztHwuNf8WWtYpmKDHtuykPXb1S4Nxi9pWsx",
  "key7": "rvV2ERNNHTFEU8hgW7SJjEvJD8DpPrqCaQeCUJ9mictUqnNb7BQ9jo4RknCvhX81h3D7ssYVKGLZjWWPqiw4JPg",
  "key8": "3Tqtus4BHPBZKkidYLA4ADYXmaU52pFFynk8K8ndhkRe6QCFqDz9P2rAf5wfmSeA5RdbvX9BXiRNr6nFoDgp1upR",
  "key9": "2jb4D2vPkP4jjCZxKihm9yZnhDrUSS2uDrbdnKyvQM38RTsyHNxn3VRwNCaJ8RrhMZZA5Z7bMXGWQ3Asr5MRPG64",
  "key10": "3oqtmPYuZpxCxwZgQW7cbt9K33L21Ncxd62sHGhNCgYfAosU8BKJPBrxfEXGJ5eCUNLUgcX1dSd3Dt75KSnGGLMe",
  "key11": "4dn67hPnnLtbhifsmcMRLAPEmks3a5N3MDWiByBMhPXcEjWxY4mfrs5Bz8w7Gg8YhvysawJAxQWmSYU5zBctyzcb",
  "key12": "47nmNP4d419BG1rzcdZcFnu3Gsn6K7cMLSj6pQ9fsaNthJ12EAAXE8ZgXkeLQZY7vhEnmJFxULHPxF8ywQdB9HTX",
  "key13": "4t9giYQnQWAxQFT94GdEG8XYGjzgbbUyLvAUobtbHAkUcqprUdfZRR88x1LJfXXZT7144UYhk8gMCosU8gUAL7vo",
  "key14": "2cLpqahYuL5AkgojAFSaG8cnU5uYJjM5kMkTVHUXJoVnuuknJGSkZ9G5mnFznDE91bjTyZCmLpgbCtuBNcdBJEEC",
  "key15": "5JKZX1tnRoq3PLoxHj2nCFPw4trQcgWmp1Lcfydqf3G4S35788KmRDu9KAMLAcZiCApkQG7YnbM6t1EcwpRDVR9f",
  "key16": "4MMywsb322UPwngH3uHq4shW8zArR3u2VtZJkVsqRejC6c3ihPSKKTPCtGV1w6Qiam4B3owguJJWpYku2urKBAzX",
  "key17": "3PeMTxaKAAATZSkjmRDAATKDNAe869mCdwLx1jLrBgu37yegFPiB9k8M5gvjHXjZk9KnjeGpFMrmKCTiYHQj2eQX",
  "key18": "2YUia7imo1mnM5ET33K9APd4rFRdsBJvs6RHxoZJKZUet91CCJ3pw4WdQ3DcwL8Ar1DTapouWGtR8AewRSq8gX5r",
  "key19": "4dr1PQrgHcQxCz5TaCXPXi8RojegmDoeohLj88YqXxvu2E5Q254KcVwGZi1rj92j4jaR5szvmEBTz2bQHx7N3owQ",
  "key20": "27UFvHMoBPVJAjJj5Q3v1F2g5GSoe1aU59nTYzxAHzxDJFSMJg1w69TaHQJs4Q4kyTg7UnJbyXyWhr9td8C75Y1M",
  "key21": "5QDHDb8HgPqBxMfy6pUWQcYTHRxKruCtHFG6YEibK1p3qJysSRSCXf5UyjSjELKQGBC6VcYwysR397tHuSg3iYrp",
  "key22": "3mRFDNvPfndhs1BVksJG8TNBJkYxNJJPGLsXE7FDRaY3M77ekQE4TN4QMvpX1s7TZjS6dT646bt1xgbmbuTrLEL6",
  "key23": "4d6PyuN8ddUNo1jo6FuNgheFjf32wR2mJqPze8c1FRrJeu4fc46K5nGxZMjt6T6GmQWngRFhirvd21VwoKyK2nMe",
  "key24": "4QmDHmJz9ePE4ScMXmmTtbFjxfuHJJBRMqNxA683okMtPXaSh8usAUBVXP9t2KAVZfkPWoD2WB2ewmXEtfzt9MSt",
  "key25": "pjhD2NRqS5CUQ64nJwQV7gmksDqQYQUR8nCF3ppHhiy729TuQxbyBCd5W59jfgeRGLHWWKZPSq6nDSe3jiR8PC5",
  "key26": "8aM4P1jv3ryagZZxHA25RT1Kv4PrY5mNpJScq7KE5JKv3546WZpzXh93A91aBUABoNd2xuT5dS3z7xW19Zt41YU",
  "key27": "4XSHLFDMvbNrnJjdXLy18s89hzYTjAhWvYKSCn1GoB1QrEGs6BwYHjkXnsKSmHqEXmFgqjnKVgAimkAK5Yeut8N6",
  "key28": "2UzothgCyt9kp7YnnsgXaGyepKJqRoUhNyXTFoW3JPoGRjVg83Qtz1tt5MwcpiAqtZtfRwxxekMFsaUwS3UZxtao",
  "key29": "345w28H8CcZxC8poKi6j42mJ9FFabfiKF9DuVEikYszESYPadcE8fxxo29jvjcgqWwvB7UZGyTU6vXagjRyEjGWr",
  "key30": "5rvWQYnNXPh1373x6PXrzQTixB6pxL5tb5gwaeeb3DvTJuzGnogzUbrboJJ4etu3LAgpGQxXvwmUMUTRKFiBDrpp",
  "key31": "3MYFz1pvpQo8hNGPk4bmUp8BBmF9uJaJDfLkttR7Jmh6pwLhF8U1SzTwrJYChBobofEyvGXjRwPUZVNwW5MmT4hM",
  "key32": "3Uu77YiHK92XDTiA94Z2ZXy9q6CdzsoY3584z5p4GEy7FXxs9JBJLDgg4PzgoW1uXQjsBRJ4iWWJmDVP6BWY4X13",
  "key33": "4Tfv9Q8RSooShMWWTo1DXyeh4Vb51pWBvDZgHisnoP66CFWeDSGmkwTesqovjcoQ6enm7n6ZD92TExiG7ccf8dCE",
  "key34": "4peaMARvqZEYRAE2gYhj3cWKK1offWd3MErEMv8dPuJibtP2mHYqPZosEpbGvkDZE7J1192wnGGoGLM4kwmbsdYX"
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
