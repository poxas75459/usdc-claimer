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
    "3sxNSBqNCzKW8PKVNkRjwMJRXR7yQ1AenfjL2eGc6cTK2DDntyNQANkisHdoBd4b8UpZ314MVpcA7Toimrw5PGXP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qppNBV5YNy7WtsJznnf9qxekieVUYQX8zj8ZVe4cKB1MB7xfp7wUv3zf66HGxNiPhXritvnerEteFmECRf1Euo5",
  "key1": "4z9mYWMuCmKNSbQAKDjpb362dvWL3RcRpP346dEUgTNd2exp11eezyW3DysyJS8byFQCocKUSR2XhSAq9MDjp5Bv",
  "key2": "5GLXDvtSDZtD3oTpcnJ3Ja56QEeyxtHVrUjc35iVyo8ERYf3FAcZPf6ExzciM5pWgmLxg7wx9wtseNoSkzEku5go",
  "key3": "bRqhFZpynNuLKQXtFkCWL3VecgDizwgAX8M4xhTKmhQW5kRTpzCPxpPeMSSkcwBZdvRr6S5wURc2QTtJLF7QzPD",
  "key4": "599v8kEYH4gVfTbyvuRWEWPukir7PD6f3qnNTPNmsjhisktjS5XdJWCLLdHafdmqWPTAYLhQ8QCh7eRc4T9GM4wn",
  "key5": "311jdaygb66eyxtzoEAnrQ7fP4wvi4mKBpgXibrykzTpmWZ2WxX44aPvDj9uWFHTyKSjvkBkC2MogVaP3hGbcG5R",
  "key6": "61KVJuMhMSvBU9rmQXAdHViFEaKB1Fh5NHd2gybmNsZPzBT7miF6rKusHqUR4PmjMc3HJnnR5CyrAMDTK6pZ8QtF",
  "key7": "5rrwaLLh24jazWp1UbzQt9DRU4QgoU6fQ17GEfSeJ6jxcw2xtB1mUvPaRobYw9iVXhrQ6SxQUYCRzsRVyHeL2iXN",
  "key8": "5jEW64aZBRFSoCCf2J5vwEbJHyx7FY35V5dUynFZLjKrYruVPqZqh2UVJanXPVXrqZTPAeBcTB4DBWGodAwbb8dz",
  "key9": "5wsWRPwfDzoLnvEkFeq35nngC3rCVfpnBSP2XTrSG1PjqozEkdma9uaszBswDk64bFdvwq5JLZ94qCXeWYttZ6DD",
  "key10": "5hgQDdgsVo8fcKNpm4DWoFbrAZWnLhop3mn6AiosmMgtE14JqvwDiozpXz1eCx7LyGqHCtmFqmKGYvP3ZCrzZhkH",
  "key11": "3CapDB9JZ6TSpJpr35wXQR7eyeUJGXWGemjfZ5iXVJsxbhdJxNm7nhDH1UvAXabodTnpSpWtc4muYbAQKSLnQVsL",
  "key12": "675wM3E1pSp7P5BqyNVqxnsYRF1Cov78hGu1uteSsTinjqGVr7DJzArkewT1PgHHB8gtZsfGzAUWTiNKXR35wD7W",
  "key13": "3QWuxmrrhKxxc5WPgQRbYvkSJu64hFeUBqBMJKimQBhg1L6xXxs5xDtJMkHezwzCnYp5cH6eT67Z4pfkQhq3DHxy",
  "key14": "CgqVbXxQNRAUAcYWKjcRjsQjvpsSQvYentfhgQLBjoF8DyyQefRqjFjyVcAsZdjRhEJrNDYjQAz7zdTQQLaKA1s",
  "key15": "5PUbUmA19gmCVUU7pQoergBJRR3WF6fJL41qjsA6yUfLMqLkDvF7j63Nnsw3P4ZkcCYUAy6N1igxDnGAyUcrXfhS",
  "key16": "cjkE49o5XJPLVcpYrHeKvynNMfZVBu4t1akXmcFrusqtPKP1NEnXCGgKNCchA9TpsaNgKsmnnutGMm2qSZW3uS7",
  "key17": "57VM1riSnpbCfyk57uYKMKy6FkCe59ak7gY5N8w8mSjRY6GSxcnFREDG9BGScuKTuiFYMoLVGJSr35HoAXMt1gKB",
  "key18": "5vYz2sfcENjheRwNPFRN9zpwFEAxNQV5e8tW3JMuoydGfb4BefqxHqDU1uuFVR8XQvxBxgoPy6qEewjzyo7q51qi",
  "key19": "5QkqBTNfFrhVm3tvR2eeE5SphzVgeJGBaaxUorktX9gXLdit6s3QwXao8LwgTR9tLds2kxii8YaCsSYwuvjf4Yap",
  "key20": "29kWzEUiUM76wpwGkMT3uibzAksyZ2bfpBYDNNDNVC5M3jpuXr1967uFy7vFdT3gN5NYMPPvQnkptvzEDyfbM6hp",
  "key21": "3DDhsTQjn9a2obuWZMNyw1gcz6goMAD8gAWqNB8FqenPWKLj7fjBECiafSD2wFRGEuMsLNKF6EcwdShYwoZB8r4C",
  "key22": "53ciYdgyDSXJWTMVXVKZBivqQNVakSpRM3sBtu7EArxb3pEXMqHRTASQMhzWWze5cmbXoy8hgfpm3PF7k5NVVQu3",
  "key23": "5bvKsmPRGPmfWJQb393rJWWHmEcSwx8L6LxrhkDGGjGqudekspn1pRiAjnhVBAAcwyNyNXDtuPBJuBCgrF826mWB",
  "key24": "mx8LAMGCJnkGwN8y4H66yuLqmzinVvxbqo9NczSURuAk1EW2aDt3VCev2C2SSdsLi7NvhBkG89XqFcFpnr8eL9b",
  "key25": "3PTBpJ4VWGiJvurdCZKbtQvktMjFb3exYMfTi191gPbsQRxEBjbGGTjbiWbo4NZ7YJj1GVAqFskKFRpbbR5aS9tL",
  "key26": "NdTyc19A2bUJzAd9wZAmQypR2chqD2djoYiEm8roEJVovpugfAmDm8pGnh6fmzM3NNbAMwNQXCGDXrgKaBg1z73",
  "key27": "41HGeUew3SkzV1vusi2Ngmi9hseu7AhomRoz3qquDxd3ucszkyk6ZqqZptzvZoPJyYwvQ6VCoMM5LoJctUDRknm6",
  "key28": "y9H7jK9mtAmdkCX1vBvHRt7e7ETgRunD8k8UuxwQr5f7R7Fbz8fSdyeXnnXNZVo2NtStcKGj2YFU4sH2vMBq8HP",
  "key29": "5vCgUJyyDMmDuRxFroPQQ7PYHTu3nZPqRmXFvB1QzW3PofkvkCyfXn5WSVEjsaua7dm3hqjicrx5LcSSh2q1ZThk",
  "key30": "4CPi7FsrTFgrVw1BXyPgc2Jr8q6GaXn6rL7GpwwdwTBXom3S9UTd83LKpuswnL2iU4gdnepSzxskZ6ULkLiEEqSt",
  "key31": "F4jCsaocYnUXaorAc6UC874LNMrTkbwy6urPKx7HVwWNMKcVwACKy8ENJT59Kbk6wTeA1SxLTs66ushHF3S7fN4",
  "key32": "2qd1WGFVbs4RePkPcdELGXD9yDPWRKwWCpKi8eeLf2WQBTtx89q3GBHrwa9k7788Sa93sgPQ2fwZmxikAKQXc5J9",
  "key33": "dtRsFFKo5UonEJHPwba3nVSip16bLBSG8t57zNdaG1PFsYutjAuez9zEsE59P5jt7xe9FNLdEqiawCsU1tNM5J4",
  "key34": "3GUmpt1hnFNXqk3rsnAV1n6XbvGe2yHi99zqMRvZP741mkzhmdDQKWv4MRGAyVyLjqej7MNqM4nLEkzb7WVXdXik",
  "key35": "24qMPuQpyGc8dgFJVGniwK7t1qF71QZYv7irQdoUQAetgZkvvkTxpTcc6bQ2tDW4UQyZ92ZDnz9vAFmaP7BYxD25"
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
