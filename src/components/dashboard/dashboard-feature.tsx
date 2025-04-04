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
    "5ba5Q9iNvz1fQLkwBf7sAApP88dKXDM5HcR24baDAmUgKrzcaTdiF6hTLBkh9AdJL6DKJKzZ1kGoyo1pbNFW4j6Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ihasBAy9XUFT8yi9FUQNjZn2Dz7vWJPG9wWJ7qS8D794dcQKY7ybr1fa64jxAGJGLqz1oPoipFxYZU6GMDb87Kw",
  "key1": "4ZASxEYut7LZ87YfRCT54kE23zKNiioNaconvSNW12G1NjQ1Bgs1NC97waUc7YtJrrpByWbySW2QEfVc7LLHRK5Z",
  "key2": "5tpGz5nKiazNG62jtfxMEDMgtw5is8umxzBNYTucmTN4xLP1roZ6UuZJN1CQNbur5rYt4RUGMev5T38RztYCsp24",
  "key3": "4ijbQj7WNZCrfL4PGStUtmPD89oH8RpYDmHyQSWgLVTVqYV7EjcoSENL23KQu4EEmCLYTF5p6HnHB3FRyc33iod4",
  "key4": "stDV8Q7xCHarHpETgWFwfifkNL2DnTw4adeJWDhHPrKm6wVZoJY14gcAA4WpAJfYCnRsYG3jNpmZsZAkEGgJPge",
  "key5": "5hVfKTJu2PjSa84A1gcJiPRTL5GndJX8kL5auKibKbx2s7iURsxLdydKpreeEAHNbqD5bUc4gyUSGPevJbm61pTN",
  "key6": "5TGmgT5zquoRBLeXEiqqQwo4gHptsrEX2BtRvEZMxNjGg8NRi6WmPnbgGVnrLz7x4b8ZPjFxLFTbFhtgcHtzEHp7",
  "key7": "tAyJSMgg3igWKJhJ8EH6vxg6t9LMEWkdRuLGHmZeTbHtkLntgzpq4TWQmqppd8KG5CnZZRiuR2qWXCgjynpMnMD",
  "key8": "25T4U9121sVEYqjMPZZJuAbQuXGKyPEaXSmKwJbWD6JwgtcJLUryLSvFQgsRR7mVeiLNT8fJWJY3HUVaQoh2GsGX",
  "key9": "wtouEvQnFrnz4e87JGSrRpjfmtjXadpP3J1DbjtU5hRotsKnZzSjmwB54Z3QgSSfTPzfoVCH4A9ZVprzN1Lmtey",
  "key10": "3F8kMVBFjZNxXAML8LxEnviF83bWhfEHbwWG1YDtNfXMfNWDrS9soBBvBrCvf1ZuZySyhrt8xzAeraUTWew9Zn8Y",
  "key11": "4Hy5tFqZvdrJmBHi3qBW62GfR4Bg5UC1x5HmgqMCr6AhPHagqb5G6KLKruuWKMxuGGzfeYBdDHaEvVaFBzHTvr4a",
  "key12": "3di9QxSq6KM61RvXiUzx2zV6ekqHxg6tUUJMvgy42Y2TRh5g1L3SvyURWEgGRd99zYt9zMEKL2BPEFeSrGKuHcDM",
  "key13": "pitr33YdjcusZtfqkgBdykWDyRLv6PP66sYndGcfnQ2rMPcMM1r7K3iT5u8FEtjwmW1UHWzxvjfWWJrCXCT8wrz",
  "key14": "5121YtHSZ4bKCeaKieB4HVZ7ac9qF4ynX4j5zFZJwjoAgu3vwrs4oj23vSLeEmFWgkQFGcijuVFB3e22buf2ACzw",
  "key15": "4dc1zdiaX9AyFZgaKUSpJBuk96rMbMB6n7ADULSDDBdRKyry6xsnJ8vD4Kin9hKrkT7qgwmusrLhQVQNwBuzVqDt",
  "key16": "54PbkqnP5fMqvxb3WgVcQYSkVeY3FUxauyPEsrh9mGiTNYb7xZW3VTJEoXF3YbtKvqpJyHfvvtjY1qtc5Ypzg8dQ",
  "key17": "2RaSUoBTCXby3qjvGddmTxN3EUKxBhbgSh7hcXtA2GYkXG2Hh6sfirFXma9anDDWdn7Uqax2iiLWCFdA9yJ51sum",
  "key18": "efYQgMnG1HED4yDb8hNRfrmwGRNNsrrhqawafGEEin6tPzEP2FuD72mNb7N67TLViLQTenFxx1Uzt8DqNu1s1C3",
  "key19": "3bYfxiBFpiuEtaFXCRk1MdVvCGxbUg6p2toMwtuvc4DUm3KXgwT68y7G8wD9A7c1ps4CwKPGr8VtGdw72eMgQLqZ",
  "key20": "3WpGHzMScbG3GJSzeD99k3FE27f85r4PB3Hpjkx9BrjPEp9VXUufTtEKYJSq1Zh78sN6Mff6YriLu81ispXUXRxq",
  "key21": "5inzYZxR7SdNxN5q4Mv5596zQST3YhtbX4pqCsbdft6BJ1Az4N5TnDNf8PdNkLZ3R92edekaV4NGFea9Zeh6HNUC",
  "key22": "e8JBTRfsgHi8QMdJRDQtpy6bHWbt2GLH1Kvqd8AR78TDRwXXaMyQup5cJhFAFcsj2wSKebFzPocrd9HYX3sDRad",
  "key23": "4kg7cEQxLGBUkvLyM3i4intosMRPvUHikSSDL3i3jpD5LVJG473vfYMGDKS71oiuoMCjcoKGe2vw6vjWqiMaCjUZ",
  "key24": "31zLKEp41RrT3bKDYFUC1k9rBzt1uaPxxLRrwebBpjeKBYUnHbCAFjTsYJjEv1MY42Y6XjdnRyDGQyRBFaqNUueD",
  "key25": "5eHtmCsQT7aGdeMozuw56aHdiRHcWv3DpbMtThMAuMJkXrtAZwcrao1JuMSqrN3xPKNvB4YTLM5uy26NxwU58ExU",
  "key26": "wBaiqxd5ppruh2TtwZBpJYUbuR6Qpuy4qaFP3f2YqLWcNVzDJARpZTHoPjiv9CNXT9DirkSgiQUBBAgJnmAVFo3",
  "key27": "3qWTu9cqfbHL9whKEjGuPyJcS6J2Y2nFudVEqzcXtFveSgRi97DDTozUqAYiFzRtaNNAK6d64BB87qhFND52uLxE",
  "key28": "2zCemzotq1uboYGJtpvrsePZwNV6gqmfDvMWC6prrAfDnntPDYPvmXUWtpEP4Wb4pU6wcWw9VAhVwtKsEVrg8qZ1",
  "key29": "2dn3QXjwWKQFiPywZdAoWVtvbWR2Fiaygy9mn773ee42xyq9pur1QrSnB6qFZ2bTwWBmVHWigU6qUWqb5HXYUK8H",
  "key30": "2E1dmGoBSiuJqDpQHFAUVVenddqMLWVTW57MAdwLPo9BSYPGqtkJwZUG24iRJVqboKeaYL7QEVUdZ8MWSUMm91Rp",
  "key31": "3y8q8xi8GN818vhWgvQsMJvAnBL2XYt6zotijerzKpTTtEYLzSsXVPufd85LLiT2XAbyR4rwMGrUoGVWA9qsnuv4",
  "key32": "2vwzmJz5ujmHdzWZ4jiE7euASbkcFRuZ3L9wcCKDshu1sMB1bp6oLsZRW4qqQ4nmasMnH3B73zaTvigAspJCWwY1",
  "key33": "4TYvvSb9CXNcME6FFJnVR4GLzyzn5ko52nGicmD1NU2XXFm2mwvLakuWWAz7ZwLZqLgkX4PUh7THTUD1VPVKS2a8",
  "key34": "2uKGuqr228kJtDN1bu7zhqF5ERtScQZkcvMj2nZRvKqtnWY8einXa7b3aYotSPJc5mCxv64t11C2AUQ4yo9Vbrvx",
  "key35": "4Up4zajSQaABzqLcbTXMUp5yzvnorfPLatUGG17CJgBNivuLeJrncsUWUs62sfhgbkBHd7G2tvRE8RwR5ifyh6Rd",
  "key36": "882PcR4ff2SzJVWQAprvqE56obsTtSe51vAS8cbL44VPdTWHCKJG5T8ydPEvyNF1jrMgH59igy9uWjqGT9iaYsy",
  "key37": "2y7P1UKC3aqhd4wBjEj62PS4W7qhSL3jvhpzEnfY7jZKqYw5ACRuRgedqFG9DUDwj7m5d1TbwVta9xS3JNTPCAxV",
  "key38": "4DtPhcmPDU1VHyWADBfFjLuoghzQVxJ5xcB8vRzRbbQRoWE3xiUdvZvaUHCvDU5YiFeoqoQZhtmUsn1rjrQfY2pN",
  "key39": "4aymHJ3jjdpmtK6wsAMmw1k84SRr1tw8dwd2YJUGf7USbXYPrZK93RZqRFTJ2eCqv2sW57XDrg8XpkBNv7u2uUuC",
  "key40": "2ZCjnQRifEGR57MNhbQQQpWARnaXs4s27QsGAwAJwGkgxjJ6LfvDHoQuS3xzLiu5RyADvHYXN6vZWLiVkdw1okmp",
  "key41": "8q9Hr7SjtR7ho6aZvoqNRTtkMBZGWkAi3fcJy8MkMwgNB5o7sQhkCJGYXppuS6G84gNM4LuhDcDgsKNsjZor1D2",
  "key42": "5WKqgBPbFc9VeHeyWmGmWwSqGHb5XpmzRZh21zDmrPVrm2YJFf9DayYRx2V13Xw6YAJZ8hisof55ccJ9rPhU4YiF"
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
