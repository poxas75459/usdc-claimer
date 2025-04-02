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
    "5YgK8cQ8tayL7eroNXcRgZ8J3aEeWfVYBrKSZXHkVVX2mNu2JovUYCVMFMv2X1XbLkKkot7AJXHBFRjBzNVr5Zw1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PuxFcKSypKZqsRR4nJiUeDsua4uUsLtF3TxbFGDVBix6V8cd8J5TCgjBtRTGiNra4qCREZYcebEBzqpuY1d4nVe",
  "key1": "2Z7tEqKu5CKeagjxs6CMpNVpwJaLdhnuPfmkeb5na8wRQF7cUNFJ7ykYptwiHToi6pxzdx5sBuwByrabBrEULqZJ",
  "key2": "kEpUyUGqe66MUPPtxYRE7y84qE2YTCQuJkpVXn2iWMAuAVbH48imEsn4gKfFE7dX8TADKRMtYzzTow2CSbrKmJD",
  "key3": "jBtPAtwDVMBtgQLrco1K5k2NF1rWpzcBYULCA317TLEmLmWbGtC34cCRaj3tmN6easvZ1bWF22c9udMWeVoLdgm",
  "key4": "3hC5dRhFs2MLXz4ELRdpTiCojhtaPrirxjMHh7zxSjgACANmJutrZd6eZd4t2fUM5NCwKdQqrdTwUDkJrx6pHbiQ",
  "key5": "3mHWkaUm39NT7uDs1xzaUwND2UTtcJPuwd3sCQtZHzMCncikSDa53R4YwiYQ61mECfYbEMgX6bSSFdZ1a47ija1",
  "key6": "52XNHvuYGDLz3JzypRC8zZqmvPTaCCmnHVmboTkBG3JNxQF8B8zyAtzun1im1HmXaW2f88wHRPnmmEmKxdH8SA6t",
  "key7": "xd4w6CfJPtyKH8oVw41HKyGhQ2Zxg9F2x2ox4eZjMPymFyJ4iuRdnskRVG6F3MY39hYaVcy5FzvoY35agB6q7Qv",
  "key8": "4R2kNv5xL6Cemne7f2DWyE43qubRUCqx3hTxJ3N6sQXwUw79Mimwr5yp7BvxMmh5hbwhZXd1aS3Wm8xZ4RaMKhEv",
  "key9": "5Xcn1TKzygbFFreZvwaJEeup1U7yFt1LCXLNeJ3mZZ6jkCb52wXhXNXgLB7oSsTuCfpNak7uCyGMrsRVuGsHGLrD",
  "key10": "5Hd3WY2WwAcCE6Niz421EuVA9Mom9mfcyRaEmPrsvPuVbAq2ju5Yhcj9De1WKbvvTU9NTqaZsz8Z6uennrmvRday",
  "key11": "3wHAH2Tz79fuhuCwxgJ3XpmYBYXd8wrCrXAW6HgLKwi3a11diRWdvDQJs8F8hxxMVbLUsLZqYZmngqi5LFE1gEAF",
  "key12": "PB5Um1EBZizZptEsTREa1wtQSqLFfNSV9PHk53kug1AF6uNYtzX5GzqR8qPhihfkeg2tbKs67ish1Vw167PUhzn",
  "key13": "3oz7N3gubmWaFjo56PvqdQxkMwtx2CygAnzPhny5WfUTCjGvVNPqyWKtcbUmWZDoF3LJawCdDtoHmPpWNAJr2inP",
  "key14": "3Hu86ssNriYpSZwTeqzZXe6EZmorv2dqLWeLR2WyXLRze7pQKdzzDUk6xJFmPCPMzq2Bxq7g6khtrLU6qVPiKKtZ",
  "key15": "5TWF7cXNvXHdqwUsamZ7RSw2dNDhpqMmDCYwyzm1P8931Fp7LSbFVyzsr66zFKHTpPoSFGDgFypwSX6aeGJrNp2Q",
  "key16": "3gPUcpiZgxzRb1gNN7TiD4CGZMpiWKEAy7gvR8A3ZYHguBwJsTYYh1L5ZTvnyyxTcGKAkdRU5nPQGEkPyKQYgKC3",
  "key17": "3ZtQmw91bu2ymJX4XyRq46r9uNUEL9nwsZUhTd1AHFsmXAbXq6iVYHRmR6ngzzJuFLM7GVN4kzRD8xpXBYY8BY8h",
  "key18": "5HSizKuMQyfx3k4NZyY86VZhbthNuC1zVVAFgkXiYAf8qduZAdPfYWNrtL1ZLUqt3PgdJMYxin1A5g6xfHknFTMW",
  "key19": "5mm3Nx8VQDu7WTW81qyFyfxbBL5amu6V8YrLx1t9Sf3yTyoUyYgKoKM8pvCnmBpnuBcDFPVRBUUjQMUumSgiGKF4",
  "key20": "3WgeaZDbPQjNmqZ4GFnhawhtYrsrG1NdtEUJsTNvnBWETnW3PLADywPJWpf5RHUzMiHxk3VxzxHv78LGhxa7sZQ9",
  "key21": "Dtd8buoYFUTecgZE4fv63fS4sukbVUJaGww9fvSrjma3m89u9NH7MoEL2aTBr88G253ix582PVHHu8TYtwnLRVq",
  "key22": "39dcxrCK8k6CqMBibYJ6J5gPh1X2xZSBaBZW3fHVCkY9oj8bcDbccjwjpUDuFMjY7iy2YcQqL6iGrRM9RPpwsffz",
  "key23": "4PfKD3M9uLYdbGCGbtycK3PQWAXUjVL2TSrxh5MoKyx5Sc83JzAL85eNRqYcS4XNYuBY7KYb4HQZ1pRq6TxxiEFG",
  "key24": "3jj85G9p6pwY8TfxxXrrmmmGSnuZKrjA8KjpHDnRyZjjr7F5LQtCRDBZTrKSZp47ZtHkExnv8tyKmRQXTnTDu3zR",
  "key25": "55H9u8nHFCLEG8qsKao9MgZQRF614JPTf4VNZGcF1WiHnKyqZGZfhF4dKQNQtqNS6CQK7mNthRq3Lrc9ZiUSXegn",
  "key26": "2TYege2kyRcnVx3koTNnqCwM3MtVZcp16N8G1emgyhsm12WkYhfhDdr8Ejdjk43AqPvZNm7TfcSho7aQ7k4UXaLo",
  "key27": "5Yz1kbsD2GoAsexHXyukaRGLjSC4xTLtHZu46pE1CrVLbbKKa78S3bFVpPXJbjM4iYyHUPVvbKtb3pEdjm3sekkp",
  "key28": "PRQqK6jKKMPUEcMURAULeoZ3eH4n6eic1MQmhUijTQa1w33Z9TzUPNLdMHzJEKNovLj7gbey8iLvDdcZyS2mPUR",
  "key29": "vddzH4cBBqMyWGQMSk4fikgwBjLTRinp9W6CYRXsy8JgPsVcBaa7PvRRd7Cn11Y6pvyjcC7RfaKJErCWZF71HSz",
  "key30": "5ydVLY5uUmr1Rs48JPE7nqgzeMiHfq6mStMoAxWQcUre4yXr3c52gXDDLQdxseR4zEVFho5C7jzeT5mdCx5TBUKP",
  "key31": "2o4HVzV6a8XWTUVpqiF4g6xKrbsdpBaHv8xaKcmfqhm4MDvErv4GC63v4JPKgu6h7AAYo9SduM9NW5pupLhdKrK4",
  "key32": "3AosGRPyZdnp6ZjCUVovzzGjpi3P3aku8fngquQ3T4ZxUv1UEAybUXLt7BJ5XC84zoG2nmKJ1i1qUkTQQdYfwfrM",
  "key33": "4MZins6QTLj1ErvBkzcKAjRDAFDC85VsKo1zngJAFAGMRBVtoQZKKQkztrmbJ3rHTYgA4ufmLKY8d4j6Aj2hgpsT",
  "key34": "wMMw5VPhF6VaAQhksAL9Q9Uti9wZNv4U5Yw9MrBoRdtpcbj1wPv8xej9RRZYXhE3bkgbVkWidUAmByFUVRc5jsg",
  "key35": "4gkpACVzpDLsJwQiPippkQqtM653czpeFpeFeKQ1XTmKJiYGxXyYCDmgyx9FbT3wADHWUfddcZNmLB3ThTSvLQMD",
  "key36": "ikfVsfhxtQikD1rmq7RU5QzviaktG4KS4L9cpARyxAEtVVNyfnUQhzkpFCcMkwskHWURcbr5WfmYb9yug9kaqwQ",
  "key37": "4ReKSDHgbVPyxDhxXrbbuuF5hc7vCC3pU1fe4uz6Yr6tNLW1uKprAiNWYKKGZHnHniqEfgFf2vCvihBeu7bkpJ5M",
  "key38": "GLNpr2UkkR58bTZ8BcGbrK87KqjYPbSJtJ8GiGC6HiVXQKG8aweBjiSEVbHJVu5o3SiF6P86JxenM41Qyp2NfbS",
  "key39": "5H8wgEj59MHt6PgHUHJ34TJA7mKYvyeifR6ocF1As5hqxgn3ASN8CNMfkm1u1NydwGAbbdZhfCcEnNzbVYipHwEx",
  "key40": "2zoNW75f4rfFWrxJaVd5rgWgbhhr2YwLQ2uJaRofZ9AVCZWjiP7fnCotdHyFJ6PvbussfD6PWUfGj4Y2vRNpgSB1"
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
