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
    "624p2KvuBGSiUuidbLZepauaRAqRAF82zGhv3fNQWf2HrQhZcydgQSiFnMzA2CQGornFMU5SoqxCXN819VBPHvZt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wM3zgoG6Umy7kY36F2jRMnwzoYKyVuQfdUynvc7gmJiCa4bGfimGShpkA6b1KUmbpLfVrppu88MoGUhhzUp25g4",
  "key1": "3fivRwRy5aTsAZCPA8gKcY7YjTxPJ8XDWL1C1iopnBiBPLbwVyDPzkiZVeC1DeDUUE4KP1zDjRubc6fpqcGPvkja",
  "key2": "2dATDJpjgsYDjkN5Es8kjPzVbQVdTw2XBqzVS3kHmyePZm4R2CMFBRTVensKjam4a3F1AtcnUWMtA48xTqvcAv1n",
  "key3": "dwJ5bRbQQW9jwJBRU5MgHHMskNyAbZPitiWMFJfTKd8QyD6jWtr8e52HwyDJeHwF6YxCepCbsUBa8UtTANZyheN",
  "key4": "2wu647pBrJLTU68veh2RfVXx3Cqe8r2iBRKBR383HZY2FQiieP7YAtBavdfZfLxPkXFyA1Ln1Q22RahSmFwXU9Ud",
  "key5": "4Ks5MoGc3Z9hcuCNX66imC4S9e4LweYe6UHjSPsYemUiRjfGJskUq4cDtfUDbQSLWxW6PQhWRiYQe24nvWaFwDtL",
  "key6": "5dwgWGAeMgALz3W7u12KhZrQc7durXjNZM61cEHi5Bv2xAmM9n7F8oSdPYwEapw7pR2Esa6G9vU2rLZS2SsqcDDg",
  "key7": "2bF42ff9Z5LmG1WzYwLKTorcPqTxEr8LHCwiwFS3yMpSrsSSpbbFk2nfUjs72M6NkjZexvG2mwCWiG3bxVcqLPCa",
  "key8": "32NCpQx2RHLeeVenyb2e2ZwGHyTv68JBoxCviUukitr6E5uFC2WZZR9nRH9sviHhD9Fq6gPM6oDFRCTunjSQiWDi",
  "key9": "42JSFNPw8cU9H6MhpHLsDJdB8FocR31wqLz3Y1ir6KNk9E85RhShGP8T2wyBCuKm3PCHtYZfe4vn3hn3CuKprPMQ",
  "key10": "668MyebtHpU5wQx9LTktngSYjxQooV2bckJB9LUH9RQ6r4P68ut1kfMToGFDseGN8JqroEpzAVyDDKxoZttAMWwd",
  "key11": "31ADYZwK4HA5kj2QZmnqp7KCNKErB4MJD7vN7tt6tb5uzJ2UWPdse43KCYztfLU453vhWSE8amXh4zrim6vUPtxA",
  "key12": "5Ecuuu4ZPXx9Ydeewv5E37vLFTBn6DwG3NyWL4ZEETY2bBxj5Y5ef67pJwwjj8qtietv6SFvyezcN7UdAvFdnAHh",
  "key13": "6obiQvd1cbN3q9E4GrymWh4dL5HbggL8T6RspAFmfb8pQHj6FXRhhbHU3qw1zGD1JntCuifBSbSY1Nkw17DodQ4",
  "key14": "2bfxZKnBMnj5Nk7KuWqDo2UuXiJJA78FyMa7RsXqUpuDm4x7ZP1Wo4zSxJtd77eU2FnP9wQdfuQXukMQ84VmDrPx",
  "key15": "4G4pez8jGUNjiZ4jDJzXY6keffkRjb3mdELxe7vaNkZ8rdstMEsaypuW8SMrV13WCyrYV62Fg1Tr2DwyEsF1PdmC",
  "key16": "2YZqNFA5uLwidM7C5CqWEo9UEiK9rmuE9gT7mYj5Qi3rwLjVUZ5WyZ6oMPFuiCRbPKUZttTTFb2ZqBjnpe4CNtDc",
  "key17": "5YhoBR5PNhUFRw4LazjSdmcZHjjr5W9GUXPcP3RqV9Rvf4DBHfascprsr6aB1ftemrSdanxa6CPyBh574KmrpeXk",
  "key18": "ZPrBrDMZWqDAQEiTrHnrcj7b4mvpzk7zvZpJzDsn9NtnJPkHKTMjM4MagxTBYbobHz7Mo5WhcJ84wTzSKQn7hw4",
  "key19": "4T1vATN9fJoXXPka9wSYvPh5E4zufddvZ6cuhmLDyXGvWumQxiPywwr5XUToXCg9eDzwU4si4MtiJNfMTTjRsJ6S",
  "key20": "2uPdzXyzRDaPLoW4c9SpRVsTY53k8Noy5rmcrQwf25RbfQWEK4z1EKTkCDVpodnLsrDFQdF591pJVaNxrxtwNs47",
  "key21": "2F1wXjuJUg9GKQodtRq7qVRpj9NJ2PY8mPyJu8xCdrouco8LZ8tRcEtMn3MGseB2GjaXLTxaXLsGai9MebQswrXw",
  "key22": "5Y47MsqbR4azSTuhvxnHY3xgUqYNJ3VxupozLXrVGZ84jNjzs82cfC1SU3U5PHjSCRst1vzLLERgAwzibC6extjt",
  "key23": "5TWw9YUVG1ezLtKG3gwVSRxzgz9YbBSrhwd8SpksjbHJ265idaU4Py9qxAHXrX7VNZopegdLuucjU35DqrNivX6Z",
  "key24": "xri8dMWRF6YpLNn6n1Ar6BCLhoYrGMiVibbQAxD1EkYDGo54oLjuboqo2AQu47jA5cK48VxrhKTmdv5gntcPdXJ",
  "key25": "5DuTEnGS3R1eiusHbP6MS2eBuVe8NZMeY3pLy8qcQqNJv2uc7SehGAaeaDyfHe47bkfX5xeYtM6cdkAAEfje365N",
  "key26": "3rQvmtjav5sBWHUysGCcueZcHEmAZxmkvH5B241jrBXNBEtz6F42RZP2bKdXXFd63ePP7FDQg4U68pdXzzLQRUeG",
  "key27": "2UYh7JpYLn9YWKk4Uoz2igHUgQcRt1BT7LyETe5YWopiGGQJ5DGhFpUWwofa1ewFnrgH5WoPsLJmruJZkovH22ba",
  "key28": "3xXwtHqkAwUFUUzCeisRouGFSvrndnqVSr6mSzC7aCcjLTdcAZZjqJjqm6Ag7w2qn2xxBqUMGqX7QApjkk9NKmek",
  "key29": "5QZsAdjaoopnLPkPyC44mEKrRV9ywXjFZknDv6bL9TH1paJM8pTNRgDeqqo5VHLMCcD8rTH3jH7qc93GoxFW1vSw",
  "key30": "3vnsxfaRnSfuA887KY1EvQv7rwXdAy9vMkrSDZs2Y6cYC5kASXa59Qj9n3pog9xddE663agNB1SrRZSYb7LUZHsg",
  "key31": "4jZY4sLhmMHS7kPKMtSH4qwnScVMVmVtrxdiYPUE5icCMpiVBwZiFVpUtJ2hJxbu3afyBYwoXKaNRSkVPT91j63D",
  "key32": "3hmicuz6pFV5eP5GkXtDeZsY68DxmvQ8sTL2uRQBndTtPknwCqs6XPtTjpFT7GcoQou92gTZCMMseRMuT4tCxJnS",
  "key33": "55QX2qRH1cuF3xH5aCzsaVwJZyVQXCRm3oaaMxruQLkbRVmkQtsu3KSi9KHr8qeGRGusncNdpiRPRP4ZSN5qgjmr",
  "key34": "3UWP8je4TioN1qzY3fpLrbqSFxxJMPVrxrf5DmKjUCqSJnkYP1YYKsQRQERrjqucmQFANSjF5DJZqqcwYDsgJHf3",
  "key35": "5fswDvQZqfPuLE3roJ5TH6MGPZc2t8NZEj62jZReqa9nj6xDvvjJUneAo7DmpE7h8jPRg9Q5uEVUP6phBDpYntcG",
  "key36": "sLQHLu6ncZsU2Zid8HXC9w41Nsr9RdYnJkGr9DY45448vsNyE17NKn26kmVjV7Vijt6yrw1wR4XwsRstiso7Bqb",
  "key37": "2heM2xtPWbWfwXHVjz4dKpcMhJdjkVziuv4gnSbESD5WP79WJnuX7DiYhJTG2ATczjm8oy5a9pANufoMT8ey5Fpd",
  "key38": "3A929djZYBZY7EBVsTH3jHaE9ggXN3VVhZ4vyuMHkfZMRTPrDpDSEP8kNkqKnzhdyXSx31iFBsz7AB8mHikLfHy7",
  "key39": "2hb6BUVQhWA35PBN5fdesWdrkAq4SXEJm3yHQBMCetn9644kwc2Xd8jafAXJ5coAPHYa8wTWkDZWMKoVBjxeE7gy",
  "key40": "3gueez4oVTMVH3gXnUveUkGZqvKWW1Doj8vCxChfg11SvS4QYQs82GZ44oDYQuUhDPCUoVDmffHXksYtkCv5BtMC",
  "key41": "3vjbCeEgyzXE4y8We66ttHXyxomeSp5WSPFNeqqUrY3j2beA3GnrF2zqQcdrFCYkAaxk9mAXGCRkCEh6o2GQUWtq",
  "key42": "4yUhWwUaN8W8D6Ma6a3YNkWPJ4twtTyqUXeZnnJW8waf7biEozHNCmGxZgRFYe25vMqYER9kjRspCLJPNh2Tgbck",
  "key43": "3yHyVqiMDUGK5w24G1cu5HQUvwgcr2EcWsYzAWgNabvnw6Fcw7WqVTcGJ1aeTUcG12mN8mjbVdqorjz54xJFRhAj",
  "key44": "49ZknpS2NXAm1sH5k9QeXbWz5gsnkJnoB8Pdu1JDhmbmfLzpLFXkMovJVoajVe6rHv71RoWQmtEYXYBZJQbTwiKn"
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
