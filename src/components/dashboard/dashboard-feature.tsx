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
    "3kz2VmBFo1bGmkWLTcc4csuyUBZfAwTr1prs42yr3GRjFG4TRBNNXWUt2qmB4yUZ6JDWeQmf9X8vCzYxK73qoRXn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dakondFkMt1KF8Lw3eSoeJeLPQJ1wDgsCXStvR5xx8YckJXzF9Up9bJZcYCB1CnDAdpGjv7djrRB2yotmZJQGb6",
  "key1": "2JqeEFDvAB3w3DCvLnkejdoBGoCuzMmN5WR3wZ1r64kYD9Xifu8Fh7M67YjDC1U21tHwUNZU6Pmuin1V4o4UF81H",
  "key2": "5XPiTFJnMLR9wfNz34zpaTfDyzvYi7vbXsAYF7kfD58gS9EuK2CmofHHaEBVmnaKw7PQh8gLSj37KnQmgAtTNG76",
  "key3": "3uvQnFzsZdiUc2h3a4Eu9E68EJCfXLa34ZSno56LuMK435i836fnUbtJw3gf4gMAGqjQc2xk9vYB4SYUTozKiCZQ",
  "key4": "3dDThFY5SnhuNQV9ZbJ1Spzm4TtagyCQ2ySwmiEi34HSt1CXSBmwWpz7tu3r73AcDWS87b6aFTELUuFNjPMZKkVB",
  "key5": "3pufYBhquagPoPcv8JP1vpMJ5VD9bPUtGpzXtV4FkSwqsUSsQCzZ7QQyKvrWo7kYjA5XzV7u3gWEnhicWXnH4n4h",
  "key6": "37Fts8BZkGnRCgk2HCd9EoQmH6Ey4axTjv1VyiVqez9cSLgDeyNHodbUcHpaTUqsQyJ4stT6uVyymFRkspSRsL8v",
  "key7": "3S9T7Y26N7QVnQXTiqgC3NonH78fWtVLDxaX3RqoutrJVLrAqKi93EtSfwu9wuCbGPF3p3z1hoceWxVFmHsuHAvz",
  "key8": "124v3MY9PDBkVYaYXJ1eoTfgPQ7VepbcovybjDqHo3BEWq1PAbrWpHc2ztizmxiU5W37MFuXm52fMKkfUqgCUdiF",
  "key9": "3dqYCM7FoaWzirsCoAPiWz6qVFHXv8ewJz1pApXNqjLJbNNVMFPjFbPkfK79zz2c2yrUG7hu81Zv1xi4fNRG9epF",
  "key10": "5msW1Wzx6V4EidfnjU8xr9xsxVMjwFhSsyyUPt399N7hCh5U4Zw6nbiY3FxJq3iNzpwmHLu1zCaT6ajdkGghKrCz",
  "key11": "mMB6uSrLX9X4LB1AmgtqEGruk3A4Q4RLaX1eKMyjixzuAAdAunY3W6SH7YCc5m6T7SZGUax59bPymvEJb73epwT",
  "key12": "3wGLD8fJFUkYT843n5T27Zks1oxz1Le6N72AbiZDZuEeW3Q1gfxeUGrb9JSSrhFcoHgnhWohgAPGEsseK1PikMmB",
  "key13": "u7RrN7ZP8AqdAQ6To6iETsccBG3deESm2qFXG9S8rsP8juU2nQn5GoexRQiPEgqyKbgftoWkVatjBKgNNjmPTaM",
  "key14": "PfVxEdqBS2x3bn2mWaGz8TpE4WRJvbMkuCXKcUBkhW8KVWyJXQzcZF3VdCS65AoSQYj7P5RefCtPvt6aZFhzoES",
  "key15": "2XnNZYT2JuSWW6yoQ9s2MN7YByAHJKuPBJocCJ82j6mLVUAbtquw5iWU5ELiqpsf5xHZzWjDkZrmzi3w6rgSYQ5q",
  "key16": "4JfJwjfzMytUbgF8cDoQ3R7FpLZnozrS9EoTs7ncn6UusVtbW6FFwWzqc8tVdeRo2L7Cat2Tc13tQYBxfowyieB4",
  "key17": "2XadZUy1izShrcvgHGnZqMJRXBS9EE3rw4Vs39TNofCKftiQShjjdfUxXnmqkeTVWPrukNabb1eaWSfVS9APV89R",
  "key18": "5U5yLsyEs4EAgFr5DJetaQuCDcwgiYTGPB7Dy5HFatRps6yGR6NMj97PDSHiGTaMdWCL1kwdk9fkGqq7wZwQRxBX",
  "key19": "32b2etJuUzhAPgb4zJAUY74F5vT7QwX98tsLk2CXgAYjVcmBwneqtRJF9RpMADJyxG2k2wk7JbRGmrGn5uyrJ8iw",
  "key20": "6H5T9AcvHuAWQPaCyop6wMJLK7G9eQ7iS74S41PAoG4WSMtMvrxRSFRd5rq45ThvZtssqwAeWTfitv8T5kHPetg",
  "key21": "3XVfZbXJPcg46aY5mJ79xLEhNhRQJLprf71QpC4RbpEKqN6M5hS4cFd5b1JGjVj9FosYX8XKctFBGbv2BGmESath",
  "key22": "57wMyrjKKts7a4rHuHKFUT8Sepqrkvdw62GtMmxdxkFA5BxhHzX3V4KH1842PeydwqQEMTtRpVkPCdiAQgJmtRcQ",
  "key23": "5GKExziDrmdJxjgD8A2rqsPBBz6wj6S26pMTyzVUBgW6p91dyZCQVL113ApCy164zrBe9S32RAGKTmKj98oFP5hM",
  "key24": "5hMkMvAjnSpxG2U66AfM1fL9M2i6GL8g85GuHZ1DXatnhEdRBKoDBGo3cHqcD5uGjeLB1zNo9r3VAWdP9bsTQEVz",
  "key25": "5nPj3Jf2nQNSE2bF1H5W9eaX69FHDioGmxqnhXcL79mRrXjKkMzy5AGkn8bhtoYJQbWPtY1361gVcPTEZURuusY9",
  "key26": "4qtPcYew2R6kERCGpjBmbnQnM9unkJPrFHpVoDRPQfGxofgbD2dBurzRjEca7DwnrKExGMbY7pAUaunS5qdVdLaW",
  "key27": "nWSk9NzFN8R14eN69uSYeUpcvypHRqNREhrcWMExyBBMSbJNsqimvW1vBSNqFE6XefdfdcWNJApnJPzuY6R3a85",
  "key28": "5bDfMNXw6QMfF9XjoTUbudsXhJ3CGpUSqZXRt2eP2C9C1Tn2i8k9F4sVQwzo3SvPdSq5hMdyJH5G3wVJHf7aVf43",
  "key29": "5yCPSkeTafJ9hp1JqLbGCpHCPmf5CLhTKJCWRemdYyrkCrzjLNPmoCaj7hCRbFhudcoB2U9uemBJTitdMY9BSsQj",
  "key30": "2bbDXufLAqCpn5rjqDNsZrCG8w2bpqjbdrrEQJn2wK78PWUdfT3DJEvdjjaJk4Y73GC7pnEZsiPjSgrgeKVwLeti",
  "key31": "2cmbkWdamoyvr95MDnikhTaKxMSxh21xY2UMU1bVTNAo7sg68hwhvJeTV3sdXWu7ugfMWAru5EykAUjTTttwPCVt",
  "key32": "3VQeiYrWCUjuf6HXzChBJwCfbUxAz3k4JW3FK6CqqvHB4gRmRjunGyxA7Eyv5ngn99W14oBSQAM4VcLbLQYNsAxb",
  "key33": "4nW4WXHQc8nN6jTtcBeZabhRa9eVjbkADaMBKsmZaUNiH5ma3mWFtZiuyFE7PbRC6Lw6RCr7FyJJHtZp2rEGKxnA"
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
