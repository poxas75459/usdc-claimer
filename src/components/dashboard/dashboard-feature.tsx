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
    "EE2FXJsfzSnnT6fvTpqKEQhiVR1HMtL3CjAaaXB9cQQoMEubJMuMoR7qKg3KC6WDUikEb3X79ZRvBjrdhvVg71W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RyiKVtpFiNnM8Yft95hwVC4DtYp5vPNyF11XxEpvGpzCrNuDo8GCU1DpUbeNpkgfaUzzqjqSCep5v5hpZWAGNbX",
  "key1": "5uxvGZFW7qV9iot2uuNirRyMt5RbFYAww6KmfHhKEZVwiFE7FkYwRbs6KLDPr3MWmHfekc53iQHKYzFJ3CaPy6S3",
  "key2": "215ocwN8EEh4QdhioTD73JrujLkWqfPW94Er8u6fNGMsrPe6NQxa5ReUp8Y6yHczNDYezHp5Hngu1DzY65C2hDDi",
  "key3": "5NYMNat4VXmoH5JHGHUCTKZaeTt1kpJThE6mGY7kR9rhgeBATg2c6HaNJFUUDAfGj3Rv8T83aqWWzn38kw5NQ4AT",
  "key4": "2kQG7fe7ai9Bjm6vZ9yyRzZjkUxkkuGYcckkPL1jfky4gH1ezbPtwy9qk1mAfbQudwvVFVBayXLzpgoA3kbUbKHY",
  "key5": "2p8wzrJhnSTcqh6D16FC731kyrUbhwzEAbPCYyviNUwRmNqiq7rKeSwxmCuybEmgWUCdVrhRm7R9uC3MEJXCez38",
  "key6": "2cif2rEasHFQ5uWvM3WsCaxgMLusEvi9EiAdn4JNY4VUW356e8XkJ8hyBpC5YuuF81ujstB9Qtx1cK6JWmH2PrqB",
  "key7": "wg1vK8B2cAR1a9WNaQGxi5uzye63mJZWoVFqr6wzJjGjTiM174rWSP8NAar87VQf4e2m7YX4TbTGk1mkcDCtJ95",
  "key8": "5Bt8y58wVNXbSHDeUjXYQ4YVtzVWowA1zFZbbiB14dRZVVikRrirwbE1ZacDMvvQD57fQ88atA2GkbxeZxVBShRw",
  "key9": "4Eu6r6Lz322EYvbjQfANTqEQtixRTGrGmPowiCYug1LP78149U3PW5haZ22H3nDS2RGkxiKCYN9Xp9AXMhnGGxsk",
  "key10": "2EBMqY3sYbgTCrww55jPn3Cp35a1HCjA2PdrE826ZVonvDsUPNcczLAfhWtDsn3UYcCu2oLwDBHN5ZAYmeskuDv7",
  "key11": "3UGRreJB947ihftG1HEC59rBNHsKFAm2cnyNSo9GcZsPQWReHdBp5t289gUfeEVfNsia3Ec5jpXaEWJrqyBDrdBB",
  "key12": "3paBN3QAtApZHJFSHT3zWyjTCr4Fzf4ms9WnQj6RpCXoqrLt2hpmKXRd4CYSe1UNrGZdZtsfS6PUVxHgjc8hYCKw",
  "key13": "aVtaQpwBGfZvLxLUU3UsbzzpCfuU5NX65CWk448QrWcxsYh2tkzkUvHk87iuKEJvqNCP6wHyFRBYZXnrAT6oJbM",
  "key14": "5gTvwMiFTdiTGWejf6JcArUCqiGT6Su9VtArrEPMPQr4Nvh6R2KRugC5WzCVJbaEXd19sQ5Bj4vsyPoggiPamAWL",
  "key15": "5rSGDKTYHnj8nQLBKYQmrSmbLDhJ32PxTyoz6mZ6gGw44k3hD4ntFWWQCkc8kLP9kjyqWH6oKwFr2sukevJHfuAD",
  "key16": "53TYtDgsLJM83wLVUrzxnPonKtkxmah3hRnJGUiTxHSsQV4b1QJHfSb2nCtWigzF5WWnZihNvwZPtYQ9BFuLcjJ1",
  "key17": "5oMc6g134t9y1Vn3KGjzairhwQHe8JdvEH6TZAMRD87GfumeKHHxjfmip9u7K8acAu8vVR89Hfstb2NnfGZfe79r",
  "key18": "2YPpKAZqkuhK7HZuDy6zZwKeW2k5BcmNuVfcC34hMadHYe2DCfYQF6twXF9h1NaaE4UaH2VrGew9mvWnHT8A3KrC",
  "key19": "5r24kk9XL1VdeQFHDJAZjGpnSYQHSuAg2hYtS1yXEFaTxLrFcnULZi3CWSMJn4HEmK3kqdJAEFuxyx6RNhT6U55u",
  "key20": "54TYZav9vhXyUWvjUNUMC61mrChKwsKVtHDzTVUx4U5Pi3YoSDbis1ua9PFEfFJsYxHx1d3R2bdB7jqTg1otoX4J",
  "key21": "593KXuxu9C3xE62hjFAcZUZ3UH6HxAh975H13V7HeSxe2Un7T7fMAJ5v3wiDzBSETo12qNeqXTFZ8KrA95nsfyHV",
  "key22": "2wP9ekQzxatweUYbuAdXde6bALZHoThjnNS1gsMBQfFYeQR8BE9BHns5DQ8mjdiVTzczDaLGdLsVxF59HLDofCxt",
  "key23": "3B27Fp9KaVLoJxmj7uJKb6idJ9Vd4X8DfBa8EPdQBe6rLKJhKFnAnz733bz89Xe53drECNq7Y5vPvyiBmh34wXaJ",
  "key24": "38sHkBDjnP3xGpckS94xPJBzr9UdDdVHwvZwQCoY4rxWpLRQWcKMgZHQupRGErVjMCaAhvqMkdex1erSnzYXJZo7",
  "key25": "5YEgDgYe2fCGwL4Jz69yS9hh4wJgSvVWQ8JUzhKgqdjZua3GCYpeZ2PLMafGdNLPYxR7cw8CgE8XfZuZo5Ex9d8M",
  "key26": "65Far9ek8rmcGzEBMK65snZn8dbwuKpSoV4Vd6PowRkQAWWdhCvjr8Wj7BsY9XmCqLhmJjhvc4tXcEvVE6sFtyYa",
  "key27": "2eX9mcUB95bQgGE2sUqYVn1AioBezy4XAEDyy3ktAFnhraxUr9VVyvD1TYRYFVRPRK8XyLS1bR9qSuvYoLwVcdc8",
  "key28": "5GZrMDM3YZ1UJ9bygssPjsfnq5oRNLk4rJGDgNKUnRaouGC1BzAtVB98sB7wmM8GPP3secYGeK651YAk1aMcouhW",
  "key29": "2UYTQEt7GK6Pn2NU6QM87T5LRcdXXsXMPLbmwPFUuZU1BvhfJxfiQSf5m1ptFvpGHuXm9PuUaWGbx1FzEGF61agw",
  "key30": "3mAKbAvYWCzsBbY1Dm1Srve6bVJhQeqgNJrwW8DN5AixQB33qn8c4NeamkzLQjUebPy8Dqaycqiq5eLscsaUxRAS",
  "key31": "3QmFgacs7BSCWTUQ3QKk72JM3RNNcGf92ZSTEz22V2FPcPAEymspADJt8nKUEhZHAeaZiDMRfAeLe3WFjoe3iL3B",
  "key32": "25Sgtwf9UGzmg3uR8z1CvDJJtue52AxxDfQwbn9BYwMh51HZe7xWqZCDg7v5ZAJsRZqPvY6opcTodtvaTzuV52hQ",
  "key33": "31T11TbwUPRnc5iSHbVN7Lv7kj1uLF1cickjoxqmv1FwsVtHweX6p9CqHjhYmxEQPo8DrQmyFHbcneiu5Ca2QxQ8",
  "key34": "5AcYs4M9kiTgMmjLzU6QbBFCEMpAkBhn8E2SQzs3KC3nV1NaxGQaToaAAh55vxzSwUsvAQE9FgrNvqHdeEEGC6p4",
  "key35": "4RJQ86KKJVToSsHP17U8wBmqgZW3iPj5ThzzHAjrTjSEvnWUQqLL1FAA4Jo3ck35P2MF6mCfnwZ3q5dD9275ysCv",
  "key36": "637TseGy2AA9EzDfkQuqXdArBgB95jcn2h4ekNHX4GxgvwYRR2edVLSfKHqKs3bf5GRtf3naDf5DGJuazqNER9vW",
  "key37": "3SPKCDQaNo79s8n933zvB4o3nAbm1miEU5oi9vJeTYFHSCNWvGvSRCSpbFg59T9PqR26TGw5ZNq2gm4UBPhUwRbg",
  "key38": "2PQWqe1pyXYHhUh5rmx2AsqdotphkM5iaJSYcdNaCo5KRHrQmCp9pNRPa2CgR4MazMs5fvZ3wkcg9JBMXU6Q1VUw",
  "key39": "43B5EJwC54AGDi2Lnq9s7DZ2PL3Q75VpH5RhzcQTc5b4mqwBVBCvm4FSFxdNxt5VdTpVqLbkMUyx5nchNdm4q6eo",
  "key40": "RsXDrSJnaiskXp4oxeuN2kEmkwtLzvqfNGDZQKqWvGfkCcdJZYsg8AGWUEvTWKyvCrmfEpv21Ak4bUQpjbYNZNd",
  "key41": "5CgGzW8ogZW3Ur1sbW8iLpt49QQ6eAJeFJo3LpzLF3utF856vPK1FkQg5UC4jE5pD9MftAs7u7BuDcf8HxkexE8i",
  "key42": "63uoyBrtt3UAFjSFH63fi982cqd8VmrDP6YaB55dRLfd7hE9sLGhNBa3HWK48XDh9p9NhEVNjChWRwhhbrSU2ngz"
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
