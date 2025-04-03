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
    "nQKJMn8uR511hHgCAbsyo2cdNVaYJ912M29nCP5Dg8H6tkvHRbizCvaXNSjQYin7StmAKc4QuMN9TXUJ2tPNd18"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JeVQDWGpyZrr8QQQP6nkWZFij9aYVgv35bbCwhRARmSfLsVu6DxX8HMmng5ASQ1eVcDePyp18psNL7U68k2r8mo",
  "key1": "4Qp3L4aSeBQ3br627PbHzgM6kjWwXuik6hSppNMFuVDAiciHicKR1syGcMkTdHkMAdgoS3ie2W2DhsFecUsTNsfN",
  "key2": "5ffx8MRpGEsUatvPEQ1PSy26WXN76j7naHezXdMDyDVeL1p4CvvezfXLgjYhw4JqrR1PeRtxAfvq4Ck1jhYBjnqj",
  "key3": "2ShojEKEQ26cM7jahJAU3Q3mP9VeRar5ErK4RuKwhztZ3s4GpKHtQfjsh6c7W1ACinywLDH5FBddLTNzPZLHZHYJ",
  "key4": "5FBe5s3en7i4QKt1paHMAAct9a86EqaNgewgYq8oj8pqgPq5imtdHiUq7hwJNUAfwXfRmbjdSSMJJp7NW27fKX8d",
  "key5": "3Yvz86UtyQWyjTY8Qr1Z4C3vM33rWZdiyWJ6XLD8gDKZS1wXRdmNJznshAvWwxUNsWPGMY96phVsCVGCSU4ZVmXX",
  "key6": "RdcmsNkM45BkjsZyWbRL8yXHhxUy5iEAygpvSUKbhHU3fqdMuwS9xFMCuSVTiPd5LJu96cHtPYXDNwAKrf5rt8Q",
  "key7": "5GrT9DaErzaws8ZZmjjFg9DdJBQGryWCVzmP4BkGJno6jQthUu5dcH16AsGAvqVET9ix9Fqr8VgGDcCtfQGHL7Cw",
  "key8": "4NP6FSgnSm1zzeJhWshEkBmGfWBoFnYiJpJmY68BFCJFuHdcwqNufZLCGx5HQVhKk97GLJFJreQuf76PhuFX3G1m",
  "key9": "2PYXPdGud5Zkg9arcUXWpTkuLBhRyQF2TMCFcDAV7MDNzp6AUs24jJK7ruMGmni4JbqxERctLiufjr4tqWWeKNtp",
  "key10": "2eTq5keBELCiEfWWd3trBHp5FcKxqpRGTQRBuz5Eh18cf7gPYJ7VCvkwXMUrv8Wdb6bXouhfCPCGVG9DALjfxMEk",
  "key11": "4GpukxWKiqMtV9kzXUveTM1q1g1eufK2dxRRUCGUisEp6cJp47m6X288yMcwvwDd2JinoJfR1c3XkuvGkxLyDwsk",
  "key12": "5pyEvkEy4PdimfszZAu2vz51CuoJx8EjJDJeE3NFrdXod5ZKRqKUqL9pvLNgHq3qCfzE9dQi53jDwJwpszutVxiL",
  "key13": "ZCRZyrr1xUJdixywFEcjKmuhbjf4ygiWbpJTQeT42MSurEM8o9QfcpnyUfJv4HfXYF8Etwy4wzq2wLybwMcSHmS",
  "key14": "3fxLwMdVLVDChQ458dSkTFHv3tk7TiqpMqrJYq7zVZs622SZo11S5C2dz5ZnEcxNaAE3foEP63kQSRbcUh7MPSeC",
  "key15": "4PjGUS8AMqFXjpC8q6bkJRHbEJmavqYW3FjF91dRFG3SDx2KFiekEV8fR8mMFtjaCX1dWEjR7iw6pS3zScc1VYV9",
  "key16": "5DHQ217n8bE1Vbqpms11wVwQxg2C2N4pngfsQhoF21eNgk6QdLDFkYoCRq7bXMPtPKyAz3FnYhybsK5p7z9NNXEY",
  "key17": "2YmkGLJHXxMTmsnUV4hppQEqCBKeiXnGUqy4J8jiAXBkkuV4LcQU9HKm94xBGQ5vwmakmcyynaJD8W4hmMEUQPoS",
  "key18": "3XVc7fxiaepWVgosom17FzzirStqZDP7saKmTqzvuvdYTUEs4cdQivzMVrSPdVCwbJcoeAPTZXwURXSQtjdvSarV",
  "key19": "3d1g6XD9EfWPtzyZVuTQtzYruafU2YbdU1zfWRDLjcgSd5bZ4GaNnt9EAiD5B2hqkNmCDsdEo8kZdefb2gs2HvFv",
  "key20": "32oRxHBFgQt5oCM8W26Qjjknrr2gNe8GFHWNQwJ4estYPxTTPTHZyX35ajknKwct6zVeakbf6QCU8Kv29LYVa7mK",
  "key21": "2L8MQhKY3kWAgumTWDy11c1a1bQh63X2KVavDMsH2JfGxqP68dCQPW1eMj9mPMSZuMsPi1SkbQKShkrDdoMBtiMF",
  "key22": "2wL6nYDt5EUMFMWWjuXXt1F2Ufr6YrUfaGTqkNDJqe5P67z9QJAL5TuHYajWZAcjiM4Vuv5bBFaUEXp7uSEAPzMz",
  "key23": "5FrJNpr4v7rSk4kbY8E6c9321K5Fj7ikdiesL2U5bA4iyAgkKWzGi7Ps5NNYnYa1gi2yDP6wZSkdfnmsDMSZFJ3o",
  "key24": "ZCWmLznzzdCgbEkFj5NcTdcYufnEbLc7azv9tqC1vv58r2ru1UeJ1sJEppqX63JoLepqwe5JRgkwZZ2w7qAG6rQ",
  "key25": "62ei9My3CMu2cahXmubWVP58dMzUCJNJiw3kAzF4uDZqtGPvkfdpUF9CMcXa4vxdqmteaqB15XxrNbpbY39drd4r",
  "key26": "3TRqeHhBk4SFsNJ11D9XkhAXMQD5ysJpkw9UZWV8uQb8h9QkAGpFRzrt5qu6cCEMN5wpojyKUMPzw5QgevfgV2Hf",
  "key27": "49kJTvGR7nBGxAhmaxjMvpTY7eWyzuqwktRbn1d4HyHDEtZthEGcR9KGbVaXcqkJ9jfTNc7BebHsdK1rHiHwCHZS"
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
