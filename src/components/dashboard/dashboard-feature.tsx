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
    "4F7HB4kdUJJgZtNKcd8YJKmFgTZqTrMsVrJ48fxTJgKqXfCLng6DS7VAp3Xg8FRmo8EMJVFbtNF4y9mPMMQiZ8oQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26a9JpGMN61yBcJxVcipnpt1k6XiYhfS6CNiX2QA7YsRx6fBrbqyzT9LkkQiw8LxZc9NTVb47bKCqgoWeEsoJMxx",
  "key1": "4b2RY6jWyABdVGhtF6KAt7nvGSR2iGGbgXJW1Kkg9BFhzkmDJn4iR1MXnsY7YXSh6WM2d8GqYgyPNpLxGKMxExeF",
  "key2": "2xDChEN6dWVpnpsb1HkW4bTei9ALRJBe1Wszbr2D7PwZngBprfs1x5EPZATTYa4QZZ2TYxPFy8w6i91Qs41VVpLB",
  "key3": "2avsRphSMrXaq9gGJr5uJ1qYUtM5Mo1jaJftPBTXNTeC4T2HuY116i2TnmSZKe7X19T9opJJDJdoQjNesgkLWCoY",
  "key4": "CLDGwpmDJ9tAwDmJbs4ig14wbs7p6c3oPGL3U41ZHbWHMtYR8Ln18svuCbXqQvgZHVxpSnCFfWMFUGZYw3dTAMi",
  "key5": "3kJyiaKugaLue9XxsyZAP8kPk4PN92RPAgk1M5t3CuLFUCPqmPFvHKnt1tpASPmPoFhxaXZUckMV9Ap2nHqkkkji",
  "key6": "51NFhoJAMRL8hwjqHRFZAVftfnmJ6JCxQ4YqzjEBt5LLd8rWxgYTT8WM5YS5SBWtfzCK9tS1BxHjQrTBPV5Dcmpn",
  "key7": "BqMaRtSdNiAWyMHSxyGrAWcSXwPn9nknFEtvX148uso31WNppQmqwhoYk7qWiU1QYjET744Y1iSRNwouFXahgZT",
  "key8": "5ojUu9fWKQ5g6SWbHMkB9J6UxRhC1GYx5vco3WvApEpzNg9Ng1ZMS3uWytmB5X65u3WiQ9yNt24xBPNhgT1kyNKg",
  "key9": "4XBZ9CPy9mNkrLMCJ3TZiEL6ThBn2H6jj9ZRo9LcbXED61RWvWyu4nMBcijExggQMGG51vaZfWgpFt4hJ2W6VDBz",
  "key10": "4D6GFqVqSuy6odhBUQWjHGQzpNN8Pi4PoBqLbXBgdP6322YRZUuCmaUiirgfpZpJ2Xipj7oynpBBrTVdUuKCkRnJ",
  "key11": "2RwTAgu484jSADcWzNoDuEkhkjAuUpVkxp2fZwzRpd7khRbFNXpumMjbn36xdEmzcevhTvqshfTEG9wKDmoGj4M6",
  "key12": "5xV67okC9uYxvLMTAroFt1u9eF9kNiUr2sdKmURcQJMEJ5c1M7ASdUn1bbGAsS947uzttcNusmqxEYW55V6Tbpe9",
  "key13": "64bdKXUVqjEkSs5NQv93WMD6H9aB2PTAhm5BpWAQr1dGwmfLCymw6QbLg8Jej3krL2PZj7YbGMftiwcBdVESRpbW",
  "key14": "3WUkqdvZZ2aqvkEKm3LZ3ozJtcAuywkUDrbxa1eprp1higG4qS2hYNeyVVri1CyMqtDYM9KoYMtMLQF7oFQsqmLu",
  "key15": "MFAiemGgMEa5eoZVWnh9ExWv8QbL3eRdPwmx1o5Z595xWm2ESZ4vDVmeWEG7i6UgYvWLMa8v9zywPq8qghjahQx",
  "key16": "5SXL5c9rYi67TD95idakWuSR7sYoNMLmVhgjZfTtxSzND7kavCwwQBE1N9ACadmxLjtbxAihN6Jy1x5bNEzvYWLX",
  "key17": "5ssWBTRdBKpcuoe5tP6igvNGCofFqgpE61NtNjBD7CKXWETkDKroh29nNfVnSJMiE4Vpt6j51AHiNmBi95tet5Bh",
  "key18": "3ZKfyPScKBpKt6fDeXopMZHfA4YqszXoLMzehXu4xXYngonGzomAt7s4xKwrDN9VmDh2SG2k86aFq16itB6pCTNL",
  "key19": "3xwEa9HiZ64ZavDZ8agSQiESvwCiwtPSX9BCQhAaw371CKbYPxhmxWkPRJpbyY8P5QxMjyZWvRibvFfSgBWeRjNR",
  "key20": "39vuBQLJSrDaXgBH5frNAU1LivJZbAZzFsniU1erkXSPqYD9BsnXSZvAkr2sFebo32bGKx5C2Pdr7Kb6ZsqkmMqP",
  "key21": "4zhjsbsXFvoHnXkQt3n4s8XHtZuc4J1AhbP8qENFidphgpUGkqpuJ1YCC4XdSkqroG9DHpA5ky8SM5JtuN5Qe5R8",
  "key22": "5jVwLBhfEisBZbdpjZ5jn6zigpLbXKTdv99x59GUYD24kdAHCvFwApf3FTBBsqamBGiuzrbyGT4f1GGJHoyLbwhL",
  "key23": "4DFnp7JtyqkdmEcEBHkhR65dGXwLEveZhE83RSqKThorzc1SWbPVGiGin7bkr5c6s4DsBWtL1UEvxk8nJRL2LVAK",
  "key24": "5QECXRzDmM8j35VzNs25Hqqyj1rxVZQznp6QtBe3MSVGnMKmc8JGHrDJymWjVdtzjEXV8MVSmoJUrjvh9in8Se6q",
  "key25": "5AsQve6dojwUCgWwGyyAFKg7WvXQR4eYtV2tVvNREVH28Eg2DEoe69viAnFvQL2sHEW9GzRmvQMHGpC6M62i1G9B",
  "key26": "kCkjJqGa9jfmyC78PqGjFp6hgAm5T6Yx4AmKrPChB3ooqUJDjooHVy8mWXCR3YuYPxyHzUdVLuEAVM7g1RZ9onu",
  "key27": "5QS9jkiijobp6QhGWG8ZugWerPBusMSdrNFEViZnk7oes4AiRaQb1qMB9pddG6e4mDDtGyBurEFRzcGf8MbBb9fJ",
  "key28": "2q6vc6pAGifbjP8C5fncTd7YttFWRosrQACYGgTn6u9PUnaWpf2HkRkmE27xVU5ZV375NSq2GKZbpgMPSpk4sk9m",
  "key29": "54eRwaS9zd2awwoRVJD1yqit4v1R4wtzBWs3GHWT6aKfSnVbez6VCqmwwRbZoLmNgWhb5MitEfaFiUtebZ2CcTUN",
  "key30": "5jqjWcnb7sxorhm7ZckEouzxAoc4d1GfBLvMfMmtwZx3KA4w4YHNwyCj48Rbqp6gUNBKxNCH7c36co49r5eYjxaF",
  "key31": "3VmDtWge8mDe95YVMSYrLtaj9k79ft5zVi4i16sc6DP61zabX4V34f5fMfoEhGnNWVc4wS6MNnv7UMBU9C6ovwEp",
  "key32": "442cgM8agPrYqGWVSd6AsKHfzrwG3du1orSuAZ89CUWxxG5gWm5vRLsc9uTLHsFNz7rZ6hdGJbNH5oVQ4jMuqQsC",
  "key33": "5kxCGpfthdKu5dKnkmsrunDa3g7xiEgMrLsBo2sungdxxPSXETKLiD1zSVeviGY8NZeEY2nPfmKcCQyjjqcEGPhj",
  "key34": "3YeMvTSfYryEJh9FqPL3eny9UsdWzpbroEhku9JvjGfp6pavZxuMXq6XqKv9WpjffhvkGZt9sfHwnKWgJu6Se743",
  "key35": "2Lvq7vDLJFFHQ5AG7ruhYEeApN7taAHyZ4cigkwR3bLKqN8ZDhyojizAc4TvrqWhWdHiRRaM3fko9Lo6qWcUrtqW",
  "key36": "Bzxux1rfFpnUuoeVg9X7SefjjsRqDNMQta7oBqSYqTzCXiELXFayDyLETeTXmJnc4cxdeK1nNLa17BqzuiHLDjx"
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
