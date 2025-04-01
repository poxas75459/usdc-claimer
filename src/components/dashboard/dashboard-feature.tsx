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
    "2kmgZBtRpSkDdVF7tBifubH2TzX2L3ALFepLXS9Cxfuw2uc4aojDYX9qFjmhCvcw3VGTBEYdKKvCBFGTFgD3749L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uynu2QcWVZzvutQ7oqSfMjTUqCHYE4gZvJNF1Pd5p1S72SaUNs3BNGJKhUDpw21saY2CxYXg9SFw6h7FiwbJh4j",
  "key1": "MNoqUUbnpVJpHSZN9dGihW615mQdegyw84NnNHtATNjiYSzyKqqZT6nFJwSJQSxN8TNy9v93BxXigrkJ22m6gJH",
  "key2": "389RWriUVfdH2MDeaNpiHde6u7JTBWTDDM1j5dk4HjfftWkMe9RKrf3tQFj4oUvkCE5vV3RqxK1DEfBBG9VwyRzN",
  "key3": "47w1wCBH3EpgK5cQTzFwuvCFpVR3ob2nQGMXUCGU9yvPxyY4C5UtYaYCE8qEqKwHY5z7AHgwZdGSeDwAq2eceX3s",
  "key4": "5LUQRuxu1fUHPZAcHUBma63dZ6u3cr9bAcqa1zDdhY6LPFMxgYpB2A9gcXjJx8iM6g5uL4tK3dx1qeQT3uHFRh4s",
  "key5": "2g3AxD62TMKBee2MSFmzUmjeessXmV1A1eNoedx44C6v5BYWVXD3mg48up3nVPGorwoNG4pSAVBYprmnrLQDCefb",
  "key6": "2qT7kSp2BAYZXdJ6z1sPKqcqfnLNMcAmScewQsFJ4Ej3orqFBbCAQ73h3kBGLjRzP2ogkYuUx97nGSYGK4MinXq8",
  "key7": "35TYLW3xaeLibutemjEHjJzq8cWpvfUU4m5dtWc4aaasWzc3QEAJRXnwG27CMEjxUkKpszTi2WNynsrQi7heUvKV",
  "key8": "5MJtKAFVLbVfQEgcB4gTcCmG7KWX1DsYfAXtAtfV3Sdbqs9f2poAJ8qoeqGqZdce3Epxq7khiTRVB9c1AcjEmtSr",
  "key9": "5RCpoUoyaKfdY9VqCPJKFRYz6Gm8Tqe2E4t9MUWwiJZQJBLj6dB1w8WWETcmfNW7Kik1Cvstc4vjz7pyuNL6TS8p",
  "key10": "5efwbbULh1crAp1f4scrL2XxLFTXwuuNocPKo7FS2QHoLhbvUcLynHZNQsqvNEW6dHnaqy3wXriJ3BiXu6uu6zGT",
  "key11": "4osrDeWttjwmC88Zkz1FrBWok61DwosZGV2cEyAaa9e3qFXTPuWxvZVqksxTpFoUTWYv9xP9W7SZKkY6i5QCjkvA",
  "key12": "5JZx1FRM6ExDTZJ1VPRXG8C3R2As7L5znBw3Tmpovrs95RYKBF6vcazApZGcEqikQA8GVBmSSjRgXt35Yw4GmhPZ",
  "key13": "2vcMSznAJBJQ2JXbdMXZ66f3yC47jsoUggADJPNd2QGRcK3tx8u42zH3aPPbY5XZEgPGGU26qTWHtNkEr8KqTFWd",
  "key14": "gzjB5kbm6no9JPzD6FsjKnhwJrirjFoTyQ4XMbnycCCEJ8PRjxd8jqPkF5mEnbTSSF6wMPxvjM21sbB6KcWMH7q",
  "key15": "hGt4YPnNPVHgK4j1T9uFWuCxS3cLZpXnBCdofhVTrVz6dmQPyog5uSusHY7Sd52Dy3XPh8pto5KaJjL2BS24bvh",
  "key16": "359hDetWZyjRq26sz7nEgtGvgNcmEW4Ch2x34rjgXKT5CA68hroYStMxPTwrx5uUDwfvQLL6yMub6sf4DHsJGkA8",
  "key17": "5onYFiBy9qpCZHPqyhqrvrPgrzZ6ePn1namReVM9BccpzvYDMzVt1ehXiUKQLEA9jnNpgRyGgmjzbyVZDmRkwFUf",
  "key18": "4ysiQyemLoTr347JXajkhVkZj4L3NuRJAYkNSxGhwzbZqoBU5PfCmN9ZLLECQkVDMwidbVNgew8KNYsahJziP7gF",
  "key19": "62RjS8bLMaGTny5RZu8PAyKuSJxRbNwn9AVuR7qhCEtnRjQ5BCM2kFZ2Ernz6o4KWmMyo8FPge41ujTkMxV8y7bg",
  "key20": "3YqXGyFHkDLqcDpS4K4b6HhKARSDxu7VFh2XDpbpC3FK34SUc6VmTaVVhnTQjKcfYURmU4sdW7CaaWvX6mt5QwFA",
  "key21": "e34rwCjpRQRddZde4cWcjLdp7Xy6uYYZJuqLiH7GLMVSBejRTADeLJ7ZRW6tLqX5Sqxu7b6Be6rWYvNDXEBKCMx",
  "key22": "497jvs7GPiCfxTaHFKP7iY1Q4oYxJTEKGVDZJ4Mim9eccTfBpBBjCMd7yxdDyLpCmrWbwGWXxsiFgQtUhy3f1eZT",
  "key23": "4DfPdeF1RMST4iJvBgG6F4urWzXovkK2T1LVwQFZ8xtxtXcCygAeQu9GdL27iufgiqnutH2psf9W78rX9513g9hY",
  "key24": "65vnZJ25myLz8m8t4JXEufUaZDpcyGvdafCYihEytdVLtutLMqKbvMMUtHUshBrjPPewmTLCrJ1RHLfzmTFhPTAo",
  "key25": "3ZewnW7BerTdRLe6S6wQ8gGD4s5rrVysZA6Mp8NY6r3yJ37GwLuQTp8sF88Z55Ugc6F2b4szuW2TmZFM1B5693My",
  "key26": "59whCE77prNW5sUS9Nuz76V8eGBfCxLpdU5qXZHHBBMevLYiEF7wNAdRpP13t2mNWh3rdw86mksTL3Mz29XG5Jri",
  "key27": "4uRTfvFF7bUfJSRpiNWvdvFcbaN69tQktGqzsZiSq9RScwmfA6Jky5d5us5TXu6T6i2UBnkanAe6YUAcHzW4X3xX",
  "key28": "5Jt3sKwnJBCmBvX3fKpSxhUbw68KBhU4X6K6KzvimH1FDpM1C8QmYyMsNnjxBcPiC4MB2KQuVZpZaxZRT5Cdypdn",
  "key29": "3WGQinvUKJUEwnVZnaQSuSPJs5EPQZAPQjUxcMSWhw1GfKTRCZFS7RYMg4MFSJfRbbfuHLHcTLUeja4YbnwNw2LW",
  "key30": "3DbisDc1bnFYkDtA6vSd9ZZUUoJxFTmfiMyB6gSLi3QfSFXdGxmKSb3y3FH1wijhax73F3eRJ7KVrjzZiLfYr4C1",
  "key31": "5ZECv3Ut9BFbDvBr3sM6n1c8t7xEF2h2WEzjdN9TgtatmmKJRPPwxiGKei7g1QgPTNSeM5xfBkDrYDpFrFjSfsUH"
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
