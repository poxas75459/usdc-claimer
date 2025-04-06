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
    "3mYJL3ZKhPPTyXXAEYx9vqNWELuWmsPy5FzQTUwpxR8u77NUCsR6ECtXZkgm9iZfFgm4eCqDJ4XtiTWBS3dVhsRC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CW36jF2mC6U5HXZWaDBANmw5D7rvyrAf7sRYFJ9jkwAxSo4262mbSXhbf5pbWNcGEvh7qpqYhh8Y87heKmcJJX9",
  "key1": "4aHF1MCU8CKGZ2z9BDiU2AKHJMfptEDB9HCKJzebu5v71jDEW2RmMW5mheG61KHYqBoC26YwaK5yFcg9MKZWDpRD",
  "key2": "3FPTrxA735YU35TJLuKydkhzVQnN9MBG1WV4tcqnqZEjtKpdbtQm7S8v8HYHJGfbxGijzZtC1Z9BX5dYXsui3Rm5",
  "key3": "G3Jgqq5kxFnXyMJ6Rfx6UaQCz34or4h9RK9JMTeicXUvKa1vRWnsp8CorNJTEn3kgkrmtJ6h2XArK5Zbxhcw5Zi",
  "key4": "UEgUqyHsjp7cgnMSgeTdPx5jA3hj9hTJe9dphJvDvd5HcM8HrDquxnFfQt4rL1yi9wy9xmtzmz2Ajnk9VzHmzwR",
  "key5": "4potgnKauo3mYbzdqow2QtYK7zxmp6v8VsFbwURhGbfj2xm1WiR9d9ja67nn6cbuJgiwotnqBVLE8Dx6T9nWMeYP",
  "key6": "3ht9KxcdAUrbk6U1bDKyx2Gu6EpnQgT1sbomGPEAohozRKk1yXDNPTPqkpinP5utmTcAKbVntmiBH8HoE95mwD9e",
  "key7": "63z3zk9WTRLivw5uMoibg4b3YN59mtEaEsASqEYec4rMajnLJkTCyzujP5PFXU8KGX2iSsZVSBLeD6y9mcfPNWnB",
  "key8": "5KJChPub4a5qHE5sfe4h3wA8uLQXYmB8J6cfDteBujXYobhRpZEHortcUN2UP2e1FyRkv3sPnnxJyKME12uQEsWK",
  "key9": "44G7a1Ywx9MZ5j2HJ6Av3PDhL3GVUsHhrRUK6kVnBQK4d9pPQh3nVXj2nPQQf7jR6P91ck5zBnzvufvtDkt4k2xv",
  "key10": "2Wd2558J3B4M6TDcQTSLq5cpknweBFCPugBdeDt1KDusnGJYQUHHDUuSqFc8BZBRdfwhJvCoXPC7xiL49gimRRHB",
  "key11": "odEF9wcQ7HwzRfgs8BEg5kT72CtortofZHyfjnWdLMJs17Z1M3baZeR71DxHZKMMKpdXsKg8rBzDpnSQ4FSKijy",
  "key12": "2JEsYYerPXLG5HEgbLgEXoPdSKH2f5JDCWuhALgf5tyB5yxqKnoXLxduZA9sLRvr7Tw2CF4uW9NqiuDwUPkTAAt5",
  "key13": "4EiUorxWgTRRKLqNTsq8uMrhTvepq6rwpU3CVdPkeLaL4bMWfPXPPNsHF49RGMEjU43j2z3Mkaa5SbNtK5VxryKM",
  "key14": "2cULrAtUC8CJSfeZ7bPbcMvK1fUM5KG7qZKGLwqUKoigHhgyCZwrtxx7E3vZaq6PxFzufuqRuTz6iscftrr8tFCw",
  "key15": "53jnuLRei5igdQQjgw86RqgzqkF9ivuPWjzwB8Dp8DFJFTFqYFLKUJc4xRWZdXe8teck2Bb4X17c3VN3ujkGfUdv",
  "key16": "3hXtz3PG1JfQ5sWWeReCtqgJ56LvrUzpgLmL2y2KqDgGPE7fiYvaorKVUeTW5Cz1GjobPpVWMJuFXnsWt8VUYdXR",
  "key17": "3Nuj9Wa51GqJxq468mF23KbwZbehgB1yKMkEbHkJZxjn5KzFwjcEy6GPGN4RVfupbbcGjXtda1t9q6bfn5MBVuF4",
  "key18": "5ZQsS3s6EJxoXTZAzRvUuYGfdwXUcbDJrTCRnPLY47pdhH59rPmLhTgUaf7V8SnSY392HFt7YeZYSh6XhfM43Coq",
  "key19": "veN7jte2YVe6N5KkxLpQLvFiUBSCaM5NjTW7kwMk2wfbs8CCCP4m6SWdwtLCHGLs3RTGJdHhAXvydhLoEgHN1wy",
  "key20": "3FVagmYnGLefR5iQxaoqDEsq1csvndSmaoP6CkxWgrN58G2vXW9zQxpNviNf2MmR96npuXr8s9qUEuutjqzHEwrz",
  "key21": "2sDPDPGjMxRW5ztdX1Bx3UGWPpdYkS8nTqhwyhKufAJA4udfyveM74WogYFDrcbhJE6qUjN31TMjTGzC1nSg7pEK",
  "key22": "3z8GXTX4s1kfQovsR6E196xtUuxvR3vodkFZFHmTeuNyore2rbyhUD7CThV71VDGpJP3snr568UhxtbBn1QFazso",
  "key23": "WAFwvatnHNZrjEhVktXcpiGn1KfYn9wmNAhhQ3wYdPwBVkW2xxXWwjQWjqzUrXWiDkP71G1sNa9pSvxq2f3Dbxc",
  "key24": "5t41FB5aPg1GoUgSJev1oJEmRPYBAGCigoTjsMvEJwcKEBDNwTWz7e2kNEKh6b1QtCYEhtrBhnN5RRLoTT8iC5WU",
  "key25": "3UjmTDATP2ERtCHFBEnXeUMpuvqXivsdqyTJJi3JdSiDfPvcAFA6C8hR6E9exeBTbaQ5M1h873TraQG6fyuYqEFJ",
  "key26": "5UHbErtm42vGUKiKWJKxKbjcwx3uvAi5znsFv5uynyZaWMUzWihC2AiQkZoS76tVyxVpkL8VzMs4UYbbgmojAVVf",
  "key27": "4QhfzwQzSDdUouQ88o12MmQeRqDAC8VLjrhLSunSoFQBukiHbPPUXpEYhqRUe7SbP2rBQ3y3DXjGu8RBRDgqqo8a",
  "key28": "3GSgKAAvMuu7NwPSh9M71Tj7K6yUB4ErtvCHB78mSEczJbhUHcnZDRKDMBvw2DbrQnH41zh83GNBBSuW9PCZHHUh",
  "key29": "3ncirdFMmGefjor1j7xy4X2QrizUJbvQHidjeoCdLaNzHnMfbdXoQ1mKwHnjtuhcc6HEXh9TxWvEg4vV76d7ztjB",
  "key30": "3aP8YMPqCkcauqGMuUG2CpdLurCEFTqXtSTyrF2mjh492XeueLmseTNA2izVdwLTD2VAHxofVoVcHTZ3Tdq97wKN",
  "key31": "16fn5cQEYrnzhiUff1FWcoh9o4Kik1YM3AEnNcnikzm3DCiuPBR56DsSZBamRR1e2wqqQAqTTRo1pZ9uqX7d5RB",
  "key32": "y251WKtcMUb3qDrvVB6Tv524Shv2npvbS4faT9VTGcJgdsySA9XeiwdKL5KbrxhYqztAENc17z8jtDT4vNjxFGh",
  "key33": "3XRnR2LmG1N8s5WcV3wJoKZARKeJavNwMeu9Uj9Xz5ojpujYRRBAcvx9Dp5oMavPxRSBTXGw7tKAE22Km24sHqHp",
  "key34": "3Tbqw7i9zydGuiEuUEo7QphBSzWAaR2JtjnYaPAkWSDpj3ZVLdoZK1H2GrHYRqZKNyFuJzGTvYMDnKkHqYd5X6HD",
  "key35": "4Y7R4BT4fEVZSG6H2XLfeWCDYR2egYJxVTm1iHbMm8TFwL6eLDYQwAtxY9DqjhHuNVtxC7Hwfg2dfuB6wu82beME",
  "key36": "39zRyFpFmE6HA9XQUgq6sKuHnBUL5XoTfJ7317ih421YJRXMc4waS83jWuU3rps1aEJMRNg8HiVPF1rDSBSuwiM9",
  "key37": "3PNMf1C2DkZyxfRg3LzUBe6gLm2tUYuakW2r8zTz1jXZnpQPKenMBer16RdcayrBqH5gwyWKNjiUM6LVkU1RKF5m",
  "key38": "3B5xH59ij8376U1jxgZqUCV2ttPTVw2kbh29FzF46xQjKS424bvPws8LvRHDwS2YsiTnxtKrjKhMJofvc7Ei6ZiM",
  "key39": "3hw7Zx1M6wufoMcntJbVkA6gHkfM3aKLJjNbdSsRfg5wResFhUqa43kdAYsstzNNKHgcoqR379GTtaRBSiZ65J3K",
  "key40": "5SUKPskZtEBCBHzBdGtWdxWkibPbetAYCPyiGJi7699838e1T8TEXKKQBZvtpr6ZHjwZNL9vowgqhvREe9oXFRsD",
  "key41": "3pYuj6jepoC3bhHCbF35B8MW5TZJ2ahopLfA2mN7hKYRjMjrKrUYg9iXSPtDprk6R3j1tuydqmjqoTWLGbD2mfDc",
  "key42": "3tCZtxsexkLk51B7fTtyM1sc2BkdPJKHgonMgHsdtwagtW3XwhJjWc4grBRCu9Sx2egmkfBSvhBdNZnAHqMszGWh",
  "key43": "3RrrVLgoNkYxkRFNPYnTokVa4SgCh6fJ54uxGcHKbotqnsV42B5H3nZMYBidroRM19hNtG3kKF6BYcddupAWgVoc"
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
