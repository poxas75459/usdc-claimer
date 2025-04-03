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
    "2NLeYtN5nK6LqtNFfth7pNgaCtZXPJaQ3ZF3zPLKqzaenY2YEBaMAZqALbnAZJRkznxyvDXvmQq3zvDKYip7smN5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v3mzFsEsxCmYVmmR7GzvxqSuCim4hbCd8jGS12xDddAHdc51GWxh4ma6SjZXXjG4dQrZ7UXEEDvpxec43nh3xiz",
  "key1": "65r1L8oE9Tn7qYiEp7oFJMbHDydhstSg8UcAY1xnPUQ5RvPMTbBG9iyz5Md4qUFAUmtMDA3ArXNJxEmk678eUgxE",
  "key2": "3KGiNMUWruVqhaRrK7JxFuhfhQbMTHNeeVa919EZByRjscuw8WsePtiT8556VQ974y6qziLYZSWWpuePDmMzQbg4",
  "key3": "4crn5V3jRV4fbQ9am9UcUQqcAYcmuPknRZGzRaCvDPrJUpcG2bDDmrjuCXqp9AXPQGA2odCSfm8kXchBxxRYJ1uw",
  "key4": "3ipDWMM83TVFUMf7v2TsfmS1jiXBUBSmFfPsg7YqRhCJy1U9KieJdLQBnvVpCkpxEkwT9GCwhL2vi5kocgsyFrtu",
  "key5": "4HohFGUhBV9gHeKLZv4RoZ4vKLnpDi2pgR7KPnadXchpu8rPivjArRfpPhykhwh7uvZZCXiTGjnNEW3sYpzvjpy3",
  "key6": "3t7vLTdH6HAGFWs5aVEBRCUaGxBi1ypC8nvSyfr84WURx5BixBqXJvH6uWRnfTx4p3nWsuzhfsh8uQKK9uneDoJV",
  "key7": "4eFicGZjr5Mac89atZPngg7s19j2FHj643tzNUnhrqAv7GB2G7dqHr16MXsn5B5G6WNEBi1MacRcoUUM8yYf8wMk",
  "key8": "26EAzttU5FcNHH6xSaFczQWYKhFhXJUeo9opq82bwqZ4ZykLGpyoKoiF6hhAqw4wEnBzszoyiwf1SLVdzCwCkQY4",
  "key9": "3dDckGGk4fqVVuidKkKmLpBZTw5tCgZuA4Yve7vffPsMq9YLMwTcyNApbXUzAo6G8cwehEU9gqFXCdDgxQZXZD8L",
  "key10": "5eCJVrG6XdSNaae7FZ5PNZBGzAvfCAabyB1uFA6JNW8F8nDCT64m8BYPPWuH6baiQHHWemRX8EkYWbNBkroPjY8U",
  "key11": "4rxU2H3ZGwN1pFqXEGPYLusbBDUbeao1CN5pYBGfWB3mWHXYUcGzWtX9oj127h4vfgcWUWj3mKFF843JqrozarZB",
  "key12": "65zYNrQDXCSFkxS6jbubrG2bhH55L5T7NQDNJfEDrnN27WFULKbBctwJGQ53ejcdNi3catSqxFBwGt7coPQPZQa5",
  "key13": "5dG3ZHCg2oyL2ip9X84LVnoGdWhGfbEzgWkzQp72rHSVQiXmeFVhPA5UyQRkkA1FSRgw2Njc5eR6kKEXVUxtN4tM",
  "key14": "oF8MP8DDWubykMMpu98iKiUqF8SgnMHSXgRhMs863RzwSZZPmYuu6emMZCACXcraeZ1qwYN9qKi1dt2v6V2EXUY",
  "key15": "3TG32GNPMtNaDnjV4MUzoNAHN1qaeKo1GnoCqRvMnrR6v5zqtzrdWFmvdfJEpeahnSvwJ4YmCKr2m4gPXhoW6vic",
  "key16": "49nr4GD26UEQZDxA2GUxupLyEAcrMsFGriGzCfBxRutd1aqpmKVQiBpZ67SQMmo9KuxyTNfttNRvYKvH3gcN9idz",
  "key17": "4DS9w1V9r4MpJbt3pgVFyZUCXB2RGwV8gUt2ATndj9oRNsoWaoYCeaSSX5JBe2FQ9sx8vdGs3cwdA6vt5YcfUiSB",
  "key18": "3JsB9hwciNXDQA3osffkzXeSfmjkvUAwpX2Y9VsVxJdVmQtjjfbCazvNBHGeU28aXBV95AU4AjxFwRPcEQs24iYD",
  "key19": "2D9TUaoNKEMrENGTP129kPmG8SuuKLGW9hZgmSEL3UPJTHWcnDzavMDE5RodFLBtrRzmgybokojUBNf9xjQdoi9h",
  "key20": "44J1R5V1n1C9YzKA7QXdQxbfU27LruNWMmqKtGfNZDyZa8Nkrc3XeA87rNbGisrbza3x45Di1k5W8LU4apY4Lnez",
  "key21": "XK8pxowP4eJBXXDresLtzNnUJn4SSdphP3gP7ELrzeDb9yePEM3UzeMUuR6rcP4zryNWuuQ953esWF6F17S86bY",
  "key22": "4G8bbGD45N8Eayxpwdxd4T697XZoWwgF6DvQUG8zVxkYRpRvsCPoGgVJqkmhh1sXvZEddRXJQW4RfdoGUxByij4",
  "key23": "63QfZfLS6bnLhsb6jynqigtV3xwy1qd4vFeqi3ra7dNtZ4iYK11pWKgvNJ9F7XeuLSoF6kvAYVPqEQUqRWamLqpC",
  "key24": "58eBQHXWXU55Tb32FHy9L1A8BF95Yqffb9hYbzdQX51faTDqaY8fUxZL8TeRaCTDmyerM1xGfkjgmvEUoeK5uVrw",
  "key25": "3K2fdYdwaF2BXmfRNAros5Mm1cRRLafnMG6JvVkzWge7mHZ1WL3i8nQCww5Uhp9eDmUpLgqsfNq3AzHuGLn2U9ME",
  "key26": "4DqQ8wf7xWFD8KVub1ttiMAxUJbtcegjjvXu4KqGrHSY9P8PsCPzcBV6d2YGGgksCSE9Haag2XW7FqmaBfP1GvdX",
  "key27": "5XpCMgWizY2bsbEeGmNsP1qEH58b92TxjTtfRK7eJkpYKRcQcnt5tkVMJLp7PHjqnRhv89XPUur2chtX1jZVg2Wg",
  "key28": "rhnxaX5n2Cy4BQQ26xRUUYVjnUKh1aY27id7c7KLAQdQLjbeoV1SMKvGQsumoR8jwjgR5QuikX7EKUdv9SZfYdY",
  "key29": "3DbDA6CbHKtYBmgJT3VPNPmMtvLdoNTRq5prH7GjLPQ9hhXMbfH9GMR7meirTNUvRhuszPaRAze9swePMSzZyjqH",
  "key30": "2amvnQmKjZUGd6RnictHcAGKGtcJkrDm3dMPYEuvHAoAf7GZoBWEXbXkmXGhDKc3XXSdjU5BfhNZq8xpPwWjhgjc",
  "key31": "4YyKRbRyvQ9sdNrQGJqEiVWHxdQjRgACoZoTp9Y8kGWeei3hESx7KRfpQbkTc4b6HSXiph1THygL9bzrrYH92mu5",
  "key32": "3RKpvUyfUe149Tcx1u6evXatsTBRK7iCe44yyH7xL3wuVmNYg4tQNDdoAQs9UpHZcNMN3zBos8NPcPATpi8u7oAT",
  "key33": "4SG4o9VGt5jsdMMtKaR6ngfAWYDzeLahpKYBnyXM1fAwHsEKYpqDoqHNo82YtspgARMDziZksXFHd8v6qv3szvHf",
  "key34": "4cZ9gJCQksiSTU8QsJ8CMyszqwpqRaxNrS5TNa2saiUjULZNUKA1nUfPqAAQa2zcV1MfNvG7ainuozteHdhBjg6e",
  "key35": "4tMWsmHVGVWfaJzZumvEPEnmwnok3XdaxMvdXpbZeHSZxwxE9K5jzT9vrL1N5tTnVJpGqcAbeANPzsnmeBiF9vgD",
  "key36": "3m8oW1uuw7NLffKuzwk9QoSsmiP5YeZobYwi1LhbjBZgnSAr1uSp7Vne3NJDhiTBABpMpxhRpMxTbQzXbmCBwJ8",
  "key37": "2bnFFU18Xtkz92DopvJ9wV77or5cesYDxNPSxSxP7eW4i3eYy19VvwuULb8AYAmyFDvEDK7KVnQCFjqzSrYwj8k2",
  "key38": "569Nd8dZ6p2xwgqHf4TTJFQ5k5XrdoqPbddPncz2Z5gnaQ73CiDLLTKvCE8C2PgbDE1FmwWE5MzB1AWXSXreUfRD"
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
