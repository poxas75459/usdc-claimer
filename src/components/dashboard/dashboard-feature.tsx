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
    "245pdLatADHCvT9NZ1EB5cJ5HB3EE9hedSvHhqNwa8zo8pGyaVHujdaQ4TDMQ8NXGSaMYReGm6vMdCC2KJqkHBge"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FJyxSDhP3A7d9ruNpfsMzGRy46doUf9cEBzkWwj2APpXu1AF6qZ7MBQBCV6mBuNNighoSi3E5SHoGn1kFveNHNr",
  "key1": "4um2tqHF1vfGi5HUMULxKpX4Ym6WtKYB9MxXAdiF1uj8y2wrVP4LZMtGmy4CmNEiszUFdadq8TibgFYesmPqhQjw",
  "key2": "2C2pJNUkXses2HmUeQwcXTGY68JhYDBgF8gtMcX3WWKr28LnUH8eQhuWhh1BX9K8HvmddhmzPxx1X3Wh85daAMmV",
  "key3": "3WQmYN8poVVnT13U8CeqTgKA2sFhiM9wGhFHNuVMxuMfRNY629peArrHNJgDZFDDG3Wvzg6ujkBgSSobTJ1w6gap",
  "key4": "2QzDXEWepc59Rs9Z5DMF9YyavGn3YKquKna5V6xAN4YQYcWjXvAWZpr1BEx1QSL4iuv9vsQHYX6HXNgKu84yKcUr",
  "key5": "2PnNam2zwL43BtdnvYfRF1YjpbZWxEX4qYgX8orypdmhSYdtXcdAoYezoUx2r5tnBEDYPmBtLbJvLJeUuabkmDWy",
  "key6": "FgsveZUxytzQycwtxTsPaW3S3RocayinEy2UhcMhCx4vQAewpVMV8WGLn3MahxQFTyE93gZiLDzP7w6FebYEkGd",
  "key7": "4QQDXjxMTRMcvztnwjeFBcnEA2UojpnC8mzJJcf7VjmGvBimGqx2dSSrr5THNs6hnNjn3eyrtoF2V1nWUmZkW539",
  "key8": "49EUpVeLaXf63i7WtytLhwg9izrATfsjTVKUUUvzRQFSnYzQRVPNPK2HYtaJcMgzhgqWiPuGmqYhaH7QM8C39ztn",
  "key9": "5b7yFiuMcVMa1r1YBqNoRGi4UpUMvxSAkooBCitBozsgU86YEA736jo1AJ2MqjZkyMiZ5qgpLJprd6MtKJJTo6sc",
  "key10": "3gm2ghMq2nq3DZ32eoRiBAHfr62rgHmJzHWCtgcttpdS6H7reiLChcho2gacbsqiSwybwir8jKugzUsr3DGpXHE3",
  "key11": "3fF9HFkxnyS9FMAv7DSnJrjJvHtHVQkgFC8xFjzzsjsJgdY3QysEU3askK63WUdQ6XFCEaD7Up6E64GHkG9EujVd",
  "key12": "63QKsowJQWENuE4Ehdkc82cUmXPkSQZFhk2qXqGrrWxuAeEjznCPRdk7q7oo4CfwYni9p4XbNRPACjWPEvuLEYiX",
  "key13": "2ueBuAqrPn8c2nYsq12RF2ArewUtCCwFkMW3uafFUZMsjgEN1We6ptUQ8sTvepYA9TvCvgcfD1PiZPkKJXjAUwTr",
  "key14": "4BF1t1vjHNpA17MouQbS2WZPe6LEsdeXFdZSdJdGZyRc9i2XXQwARtUWMkkRpCyCy8cALDPQXU4vMvp9pPU849pf",
  "key15": "2NANVCKB5bdA9u8FWRA6LgW5UP2M3SZ8is9ZpFvVzKZcQWUzCT7USgKKN57MVFpY4FZiBRfhq9aB7M4qh3X8kesE",
  "key16": "7uMgJq5uuYRUsT4fbMHBwNfsUCGMPM2GRfgGwM2RiiiJWbuotozRw4Bz3sq6ufNoYqivKbpFhYbuPkwbJb1HnGb",
  "key17": "5i47vnhYLQhCPqLtfHcDEX1fycsbmdbNt5KEerLVVHZciofKaCV1oRofw5sYnfhuJWUEoK3dg579CCGsJAPJftmr",
  "key18": "4rhJzesgEXiMQtGDnyaVpXLYxHkFJmdzuxctbcTnwUHp8eFcThBaMvovQs6FQt9goD3wgASo6FD4J2YKErQgznAz",
  "key19": "aSogc2GtPTGchmyAJnek3Rr9Dvo6bYkgS5cEFyXf8838DyPyUSXB3nB6g2EdBEHaGYqBbKK5KKPR4zwXyLxDBTX",
  "key20": "2F7beviBBC2QPQqxDXaNo6AmwZCuMJ4hmLbwnzC7zMoodgnuPsNJuyf7ocgMw8G3nwyMw6XYrDRHYgSEGTYXXBtK",
  "key21": "3krE9FvetkK5hvskrgspAmazLY8ZkvMEnDYbGwpaC5BQ5jdvE1akcReKkm76yKX8MVjm91FbMBAdbagDEXaj2kCz",
  "key22": "2cWk94aK741CZaU8mcgQiev6jYeu1Wiw3hTM71XJDRWDnFK92Zm7JWDEK7RUk4TE4yqN3o1EMBkPBXJJ4arWgSZp",
  "key23": "634QjcEUk6fcZU6DycgUy1h9LuLTDK5qvvfVjGAEo31FCLhqyE19n4JHWS5ash1fJe7qmXaJwDXLj3ovNf6Xkih1",
  "key24": "3KGJ8QGMbfkjDo3cF6itBvZSREFYXjE8x3scrnk5c6huHhDmCRZ25pL5VmzataNMZGdHxnYn2WzJEWK96byx7JMY",
  "key25": "2bswcZn1AUZXKRoDiX6PdVfWDcwUradETBmPvHxP5vYErxGV2TGEGGD3wWa8aVcBD5Rijd2ycv7q5UHY3efurtix",
  "key26": "oKD13MPUSCHedJ2PZfS7yDrB89tYtVR9ks5nKZ4BKiKwKX3fMaaeVd9VzYk5wAVD944yQAoTzUaMBttF2tXi6ki",
  "key27": "2H292DYUY9xnPCBQ4uKzLttFi8MNfLkT3nGtJSXzZGTEPoLHC3WW82shFHNAs4L2sCH6DaYXQz8qnboxj79js5Td",
  "key28": "5RqgvuUhDSYqqVS9sbdYVuZ5e69hMDe6BUDTfBgA4UL3Frhm2rAz1NCfLTp2wSxdhU8zQ5QE2oeJSKVFZfbZpeoy",
  "key29": "49se6GJAow31kaTMmP2VR7hYWa31nanQwUe3mvd6kJ3ZYiq1mV63yjLt4qNN7dF5Kvp2fDhfXEZCUdDDpgwPbwyN",
  "key30": "3YT61gTkwtsnTMeWriZGfcrtnRQKKBJMD36PT6RWSC1cx8QTYkE1z46VqYR2cruQu8j4A6FbFUQe9f6QY2p3EytZ",
  "key31": "bCtB5Xu7UTBFyATiybj42LMfnsH4uHydC45JU1r5uewsovURYzPGBAoAHPqmnaHKmCokSk1FcqTLVKYmK8j3Wbc",
  "key32": "58zgYdqP16AxgMjhqLUhkEitDzrHndR4fBeYSqySGAchWrZEsr9Kmp6wcEuvwh3SQQyQBtkQch8WZRtUJ5dNg511",
  "key33": "teexjVVhknfjBbQgpiWvDLN37nxVdqLzi2fPYtFBkDR5etmjb9Bg43ixrHRwCnarpuGdyp35Ls338CrncqQzPFh",
  "key34": "3BftVPsXGWxbiddzCsLBZURjbFK7rQhqMVzkMEvxjpvGbXbVdMmnmfo8ysPs9NJktbcMfFtdvJq6x4vrfzKZzVH7",
  "key35": "2iKrde1gAovSknKDyhmBz7P85WWcw9jF7maHSi9Q8d4meoY5pAk7Th94Y8jgAtkp6C3Haxy9HHqaTAiNHau9bAz1",
  "key36": "4oy9o5d9YPpKNXmb5h8fTiADVibjr8QgyVS4DAdBwarzZTyirVHNmsDZzff99WDnP5esSsCeoTX9Notv1czrYYzd",
  "key37": "3cVRt2Ts8gFw4LKrYD7cXpmEtWmxBVZ655VnRsN8T7b7JiykJe315nYzb74GVas5jnDA3ZP9aLW3mXtBkjQbhJrV",
  "key38": "5tYpJYwh93WHnnoQdACCA9wvhtc8jyJWuzbPRZy2fw2LjJVXJuhqx7ybZsHPhn2uZy883jiEv4foa5YNRBkjzERR",
  "key39": "2FPLJojTWbqHZe7ndUFdfZYatacKZUK8i8ZmLtqmSSfxL18kUF9Ng1RdnqmvkdEAuTXXnyfDpJKz1kQsHfdPk8g1",
  "key40": "2dJDq2C7mHx1QP4mzQP3KeQ76oWkuQNxdeVbwaALXrPA1orVVbicNB8jLTjXZaF1jPKtRLy8QkzW6d38XNec9HeH",
  "key41": "2d5MjcNFXHCfZ9tebTBX4n1yu3eit73CoujtS7Dtg1jLhfEajpchiY5bL33ZNtN6aVQ85aYJxxaMPq1zFyV8NgzK",
  "key42": "s4fPerpGjG5rmcq49rKLBe4Q6XD4Kx9sQLrmPQZxFzRcAL7A72wasWGBcsqRa138YMhrfQn1HJgi92YHBSbG7cX"
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
