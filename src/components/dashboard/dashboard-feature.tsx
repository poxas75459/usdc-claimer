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
    "4rRQSYSzSX4CTjnsm2wNDrcARxGkXUEResSUSeUvih3rE5Z7sxTxMnyU6kWiy17Fo3ePKmUdJd2pVxAYdeGcZxZY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42e8uZ3UcqoAcfCbnb6SuvBWSTZeo3RmCdz6ogdunvTWTufL8Dg4ytddyHjcXDRAAuftvNDKRPtz9WrL4s8QCuLG",
  "key1": "3r4hEBYJjBwdPgk1XHbXfruY32N1vo442EZyCPgqHyfAWWdthuGYFDAgSho7Euh9tNiAYbY8qqpB86Jr8GQz3z7y",
  "key2": "5atZ1yrvTHLut81fdot7RDJt4xHZCRQkG3P1eZ3WjNrCs4VGXKn2eCr1ePg13T9b27hxQayuxRtFUwarD1eX8wbn",
  "key3": "4VU5jUvUZDyTf7KvGigcQufuiBGv5wASqbzD5qZ6exi2MVBbCo4B74NzuDrQgo4sNgNh56giQSD6LqHjL8siZXnw",
  "key4": "FtqdwukuSt68uLZZyeCKCVrX4j2BG3kv6untrSGaicqWAEve1mLPDUTLWU2M1N97pwC34u2gSVPVgrYE7h5GH4G",
  "key5": "5Qk9FDBM1ar3nAWrX1s2cEGdEVrVWqhm4z3X2gbx1exJ8C6vERsMsU7tMQQrTCeb2NQ1Eaa2DsjEtcuNwgu22uNk",
  "key6": "4Ti6rborgPkWyauTBEzfBwxdiVMAPPxnAMVw6kLNviaAoghmmCiFiq5Zi3CHnEvTx5KoCgQTNGbLpmKfd7eUSnhA",
  "key7": "3kr5mD6fq1G7wU4a81eE8wJntBu81aPfW3Y8M8vL3rHhSY5Urm8eq7BWpYm9B7FwwtAubT8F7B13SS3r8yHnUnHg",
  "key8": "5THUyEzenzmrqy1h9SkQQQGTNCNfBoEMoNbChuXuUK3UiYTAFmC7oCq9rTwrh16WrWv1X3wKcYUnJM2CcKj1Fnbq",
  "key9": "4gWHgFyGQ1jmGwUe1vKbBqKgB8ejMJHJQZQ2jDUS8NVTYv1ThSYdqKTVN5Li93B79nXS7AUSNaJVTYcy6pW4ePC6",
  "key10": "4L3hcnkn4EJG8m5Z51qe5sJpZeQCfrxFYecoio9cbain4eWA5nEj7R1eKZkgKRiURyG3gsLH3uNEep2iJvDVJepF",
  "key11": "3YdDR1CXSRqnN6krTvSWWJyRmxEFQyFV4cgAev7zyMSRZMjD8PoN1n3gcZBivm5RtoKeDC2RWakZKUEUyRqySXFU",
  "key12": "3nBYhu6hZXC9vSWYWhRewpzEwTt5ufTvHXWdQE3f6roEjL28THi4KdUVeDBYozZqnioR3cfeddnyaSBa1PigbbML",
  "key13": "5pKVnZ5wupCXPf2njdyVtQM1azp1niYGzH6k5DH7vfyXWeynFqLwZmm6ZC5QEreijteJiW6Y1CHvXUcS8BbJbwpB",
  "key14": "37FKMpwTnfS57i4cFQDvr3gR9vnGkHL2noXv6dEuUaPZrSrmpWeUbwrKAHNAzQE3QbEYdF8YWNj48gXenE21JMPW",
  "key15": "4C52Rgcun5v3UWhCdddwSbavKQ9NY5VgTJxMSyCgJ8ShmF8auRmi7Fv977JQuMmhdVKYoghRG8mfjwRwFTaND2Zr",
  "key16": "E1c5fYivsG2aYvhK4vdELTHnskhg9QN1npFDUeiRuuQ91WpeiT2jrUDXYUgmnxr3P5XiUSMnU8n3kqwmpWfg5WP",
  "key17": "27B1PPLNjfnuM6iwDunLRrhgUVqnUFfqg7FUhyDgTpA8YfWWpDNe8rTQhPjuTcv7ERBBSCuR9TqzHZXk9JpKmmTV",
  "key18": "5pKqMhQZGhzhsAT4SupB6obwB19vdCV2npSbfJZxoJqe74A4YpnZPBnQVpkRc3PYZCX5HfghQuTLkNjvGjiJFUMb",
  "key19": "5NVPHAgo8JpZ35V6Nwu7hQw3REX2mkdqMgGFjGSTATVcdBkTumr4y9pDxrnD95DbrEcRrFgxw9CSAVw2begtg673",
  "key20": "5bz7HRFuKj9aczZd5o7rAsGo2ApjNfCvSAkHgxSNx9qBkW5Nion8PDSntqoCaFxK6ZtdK5szq4obUWqTMuiRW2eJ",
  "key21": "31dg9SNyXMuLKUjY47QMEKeFZ4hjPDyfB9q5U9CgX8i2tZMWEuYXNFDD6oun7KoBq2CpHhc6cbD9vrh5XZuEAcSW",
  "key22": "3y3t5YoriJamBvPBTui3nymUBNPAsJYyzqvV7Em3RYdUuvwnPEuh9arZeg4WGBmkiYNbzhFNVihwVG3bcTuMVfAk",
  "key23": "dpp2ef4GxjXqHzALYpiQt4TWRXKecKSUzDJFR5EKoX4DMGtostWyRz9wJppxkvaFQeFhNHBwcDTQtNM65TcxVJd",
  "key24": "51tL6ZuJWvjHpEPzSwhSMKQkZ1qD8aW8esVuRiKm7i1P5TzHXScv3G1SavP7kGBLNkvixBHdh2Y3HriQS2a1bRQU",
  "key25": "5E4oRK4X9suFdtkgAM7Upc3KkRwtnTx79kMnxUUNKccQQirbT7Fg9cthASK6DnHds8tg9UqAGCgnMxKSpCGm5FnC",
  "key26": "3Mx7skGXNMpMJVTXzeWzamE6My5GoQA76UqsB48egHM736KVscRuJGtEJhemZ73KroXNc3VKUJgukWAPnG6A6Fcq",
  "key27": "5CK6NLUFZ7fzY2vCuhTvMK5i75K96qunUdUPPos731vEfRY3pTBgqp8YxKok4et4wmrXPPPsHDGMJfd9ezNFYoga",
  "key28": "aKfZ7Y7KwHJ4R4g3MNHJESYiu2ZCZuFCwjdu73uPS3izAbvcWqGdk15NhotMrMAjpxhiN5nra3gwTUQngys4E9w",
  "key29": "4GTsWbGzAnSEGDP3oJJXybr9JRBr9u4Vxavf6r3K51PLbMxDyQSaRoZMtSmfRTAZHQPn7TJf6RZJapsR4QpQGUps"
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
