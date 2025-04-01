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
    "2iswhLwrMc1s6NUE3JpoCnQ7ZibyM1aYPWvnkjBQBwJwavnJ2zJL7WgQGcs1NLPBhpu26ffb2zZWKYiSvu9Li6Zf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iPQwDL9KDfS6FCDyHcEwqyq88UWdUHJ7g1hGN8H6s9QPrbkssPa9mUR6GU2NUoqQpqk5c1t8R187ggjqKJHUjJs",
  "key1": "45pWQdT6Peu8YQ5z4bbFYwD4YJiYEbodyCJFvZ6BfJEsbLFKSCrbnFGQgsHjLWQr6VGfb27mqZdrbWrmBrRgHbso",
  "key2": "2Q47AeNt8CSGkDvrbQMB1DxKig6HU8rKktHKb7FiQvTM4qsU2dtmtSMqkUFaGoNHsed9eJFuGSK38zkscHpMRBer",
  "key3": "3UUfbRuzEaNMZ1pD3q8doiFxCvmqXVDfbyfzKAkQV5W2YctRt8frVtvoa67jVrSwoBrhjR6TnMTFQ4aX5xxZ52jJ",
  "key4": "Kx8v37VfWZLDDnLb2qEdvzyJV4C4yxuW8SLUVv82Jg4aqKBs92UMy8knxgnFEJdnsEpNAQmi4fpwKoo7SLfjSwh",
  "key5": "5VnuBi3SkQ18TzL4kRGQaQETkSxsgjAjWsAh7aQbS5aYn4aq8kxvYCfwNi3orfaYHmVBHV3J8FdE3egZNMkvH5Mr",
  "key6": "22JYGhEKhmjkoCnNE4EGrzd1Wom3V8m66xJwrmfxFhtKgXvVR55Fx7FQHAdmkii9m2553AqysEZXH6RTeh48LLMf",
  "key7": "2V5NcVPAFzQAXzCFrj9gvRsmq5gL7rLPf3hy6tW5AQRVDDcBs8buDpPvdCi1wEZCygwuoHrfNhao273Qfci8wqPD",
  "key8": "5Kerc6LMqivqeFGjX66HPNV5DzyiyGR64PBjmN6k6MkpcAofZKHb79HrTa5bJ4rJiBEobCEhPZCtyqtVmhzRua8R",
  "key9": "2jYnEUQbq5y7MiFS2s9LpF2nBZ5jbaj7xNuKQwY5JrXGRxU6NS5Kp2YEH5uXT55bYxJVtCqohLA3tphxwkgpxaz8",
  "key10": "5JBm3jv9vr66Hir7vAqJM6EZWstiJ77ceTFjfnMFmUMQWzPHWiJi5QyoT6L7stbU2wST6iwowGuYq5pSrGB3T5XT",
  "key11": "2oNgr6R5p7qQEiSW6M5U4qVGLh54c8oufdA4x5WyDsso23PzNhAYDuCpxuzxuLFgfhHJaecoLNCVLcG1dQvmE84e",
  "key12": "65sPao4idZg1BmMLiipqz1KrzxSZ9UJdEsVoYXtbhbB4xxp3h7G2T9KckhxrLy3Q31TLhWvoB8cwLsjmvcSmSaPS",
  "key13": "4Ta8sYWy1DzjuV5mn5uXmQqYsWUsP3H8YAzzVhYNjs9jE6DtXW38tsZTNvKTaNxu1g9TpU1Se2Ew8dApBY4BTXB",
  "key14": "4bPutmZQGaVWXDHfU5kWzEnVeMEnr9nimqkj7uFWJPs8A4Lr9ZN2qk9drzZqeSac5X2vksRtwok2SKxFZC7V7Yqk",
  "key15": "T8F6SF8ezcHpoxbLGbeeBrQ2CMrvLscJxC7aRA1hgMi5dBbTp3dGZBNsvTBcrtR8mtYVFUAu2NqrEEZkGHRGmBB",
  "key16": "5RCvzZDbbs3uqqVSyv6n91uoQfejXxTdULs3DLQbAZUcRZUQAbqhqN4vfruQhig4oZ6oN3xtxDP8cnRWnfhS54RA",
  "key17": "3PMrFpiVtFG1EjdTcvogQANry91diykmoZjtyMQSq5mo4VT524kmX4b7t6Dciynpg3XiRkMTX2ZELj16s3i6v84B",
  "key18": "3Hv9hCnUH3EbpD5LUwvKVBFCcFaNGx7bSyU7xnxHs85XkU2gWA6rQSxpy6HSyKDqrFGQfL99PnveFGRD4TFMvMKf",
  "key19": "2iijS9NYwuv3DB5kCo1y9EeF7DxqndPLhtGnxi6rGUMujNJea7BkxKafuBSApESpZ5Jv8dFXNoYdxFrvGo6cDsRW",
  "key20": "2VgfpMaA9j9NggZGkS7LbW64TqZU1rQaSLXYftyW1cHCCs4WigUFCXJSAX3NpomX3PAHLKiMGwjSRpdNcqjPA3v7",
  "key21": "5eyY6pgNrSnmRPLRgNVgb8YXGGWfdz92d4SuJ4TmsiQGYXSY5HEvYhEAfNRoVoc3umPyXfTfDvPtbDovipJm2WRV",
  "key22": "5b8La3JMurjjAT7jSuXBcEJYPZw2xFGnz7JYeq9e19z8VXg3TB1TZQMdVdMyHY6ZiZFW9pXVa8BzSZnMHqT6ushS",
  "key23": "46c1j4Dn24K8a4TBUA19XrQket6b14nfBhFPCrLC2LBf3Edk5H58BhkpurPPpm6a7kns5zSLLRtqMYS3E3uVTXKA",
  "key24": "26buqA7KEi55XVDEwzHRcjyZmSvnxnax4ZZ46zcVdo4zYQzhGpCt3MfbJp3oMU6NGL9B9Tnu7MZtoj2BQBVBmzf9",
  "key25": "2bW9B1kbzzXNmwG1FGc4neGPwqP5xd1WxQcLTqMmWFV1zgGCMpodC4fGTJbk9qA4XMvcyxqHn9xZR7Rjn5VFjiU2",
  "key26": "pXzkkmYR9VGAdHTwMzyGXzJU8ynSi4xP9PBMocJhaHpbw5jMzsktCFwc4UE12NejRaQBpj312wtoJr35giDNVxR",
  "key27": "hJGedXHgDB157pHXU5Zou9GivwSxWHLqdYp5WBUCKnkgzNovL3xvBcdVF9uZU3bXwMGtezhwZN5V3MNwnfji6fQ",
  "key28": "4JfKP1jZ8PQjhjSwR36TvhVGK4h1wasCWAssvZrgKf6D2xTuDiioKAh9S2t1ex5X3UdHKi9CpzMZ3tCDm4YCNPux",
  "key29": "3y3QTBNvPovr7yEjaYajaRQigR3gkQuCBfpTGBbTm5pHL69UJhRQPb14LA6teXjH1YjVmYT5bHXuW9qzBzGppX4A",
  "key30": "5owA9m5fNfyAFx4jvbDcATPEVM5DPcLgYEQ4cPdjJc3GRZvYcnjVGr1pZLCvK8HMR2uvLCnXztfB7AVYR7nSFfdq"
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
