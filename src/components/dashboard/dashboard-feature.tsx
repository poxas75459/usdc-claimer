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
    "43SjgTbmRQVQE41LkSfia4UuA27A8QRQXXFpJhXznKHacUwBR9njkQN3ZuvFxr9za6bPvY4R9MSGtVKua9yatRz9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VV6pVTkQeEmShrfv5edHMA6QLZJsQ2fksVoQqNPLn6Hn7ATf19jCuUnBMJaetPR1Wfd1KQeGCerC7N2z5NX8ehX",
  "key1": "4YH6dztGGfHZXa6M2kyToFnpzfP94JcBtjWXLRcRwoC8kDpvCfyeQBW37ZkBVTcQ4QMoDhH78e7Y2gQT3kk9jvTP",
  "key2": "4mFL28YvLoapfRMEVGQLmLiVuSret3rfuZ2by2K9GyKCH3sMh91zHFxXnVdqWXDnipWfLFyBNsyb8cqYFxPgQX9j",
  "key3": "41mYMbEjLKefYhvgEoS7UhTgwr2em2Xg9iDfjWL2ibRh8Brh1aD1s9Ppygu8LuKYrxyu9btnez1EF5gSginAkEq8",
  "key4": "4ube8i3Xo81p5obK2QwARCjaoCTJdgKqgXC6zobdXoysmAocbig2rr8CvaGK2zjn42WDQuZeAGC3meRSkCa7XXzY",
  "key5": "3tA7PgkfcAYMTh8fCmbX29fdhnu3eRN2dm7EErw5f8VJYzTDKh4GH7DPDfD522yXvsJV4y7JhXD2LJpvZF4sXKg6",
  "key6": "cAcbPgKVJW8prBDNS8xMieq6rqLwDyY3RgfSuHdxD84f5XFdY2GCNa4AgVQcPJKkERAGr9qk2Tf9W4EQU5aNZrR",
  "key7": "37ChzLYW9497SguJxHCZur1xVErEo6JmF5ef8zJR2JXxRYXzdzqb2PZKgDojoPdqMpF9vD72nyesWnRrAidPrJiq",
  "key8": "3c4CstL2LXyYvT8rPcHvcmikufbMFzcQYYxmnKbsH3gW6ZP732hovM3Wr6GrP9Zo7udw9Uy56zz94nUQofmjsBiP",
  "key9": "3xExKaE5Cmny4KeWNNQyGoHv617GYv5YzzFUuAiP7eqqVQTWFikvdMwNUbAVHVShD9ve8CVHgArNke7Xk8Gqr4SL",
  "key10": "66DFEMnZHm1vZ1mHeApCVeQKX9mVwJmwUpVJuHDDvFsdSEz6qA9tWRHrZ8Rw8YnqvG5FPcf77AcmdiW2u5vVR8FP",
  "key11": "FzE8RVSnME9nNjB6dRN5RFdwWmh863RDY2xBMVNHUJJRdRM2Zwo4SgaaLqRqGUPSrTGeqFrraZnSqefv6LTkZbR",
  "key12": "4cXEQRs4DBMJDKB5JpRPK5tu9QsthkFUY2bftJukmmqCPPSk5yjw8LZXLuMYq5Y1T34KiQQ4VRYLfQMNUFK4tYJE",
  "key13": "3judsA1NQnp1yps5QhJ2QchAW3Dh1a2tbG69RSBx1GTphxXYk7Ku5mJmRVd2auM1gVZrfR2B1WH89ujcQf5PrZjH",
  "key14": "4jD1yaRWJpoBQbdSLsJjgdKpMtNn7gRofZs46VuRPuqmSAcXPg5eWJLFsnqQMPkVs4ve3LfoGoHKr7u581ixa3Qt",
  "key15": "4sppnTA2w8sQ2VPgnHFSuYkkRLcxMP4vsZgeMLr39vZwQxEv8PVuZdUHTNshkFp7rN7bGrcNu8AuKphcaup4ocPt",
  "key16": "3HH9nR5TC2bBkrAVw52itkUdLKhqwbGsw2EcHT3LDS1pcgVX1rTgXfE7VG7KSbkaGMz2DkCdiFpMMKaVGX4dWYZJ",
  "key17": "59j6hzALs7ZmXjuAFw4SETp9ZQiAr5TkCcyoVVN3oG3yofdH4gVYFDcscBxr7B7KDUsGUH15B4kSFXBmQ8AuZ254",
  "key18": "2A7KwMUM7Hq9BW5WvcyyT4pNNGMLympyNHuKcrq9t9652EtEzMNCfUs4uvthSvAHRHVdUBLidZKGQ4J9KRdtPTYS",
  "key19": "3966Q4zNf24TYSHHLR3ZbCp17wPaWdFCytLpmYVhX7XfSbzVTfcLUkhHMEfFWtR6rHnPyYmoxucN6vZNGqc8YaHM",
  "key20": "3tWY4YEhwnTUm5i4E1eYeGbJhmJQFYd3xVQjHjxWYikyk1aKNraBWs14HX2PXzgdavpcpsKFWf7TLa1ZxGaaUtHL",
  "key21": "KEEaah34nrf2JaJ18AyrUF35kNzQ3G1Pi8gQdaKuXofkQKUJfsG746FvEUaw7ika6wY5QSgT69ftuQK2npahNhH",
  "key22": "676n6fduRNVEqX7G7EZBzCHQsTq5imqBSBf9xbACj8o9FpUH2Cv7poe4TSTTpDiboTtj3s1VHEeSfRfXxg6UHUYb",
  "key23": "2CZywzCydUsCtsvrXS58AngBmuQZGn6zXXXn6APx5mcEE5RT2EXKbbhEb9DNn5a3oJhfWa13VeCFuuBo1ZfDmegN",
  "key24": "5wDvseVaSYdQqgKWTxqPp9ha9in3fDwYZXrrWx5Nzzy17W5HzH7bjv5xxnvuxkJuyxLsjmzRpxMEUCgDXdQr6tYa",
  "key25": "3jRNvk53Aq7GnzBHKfrtUKky2tZD43Cu18dxfjpiDKLUZWDGbVgymPPEZRAzcGTh7EFyNsiqujWHczHkSen7WQaE"
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
