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
    "5utQ5kjf8xagJ8tEcjmTWvXRwQZG5sK9WK2BWaQnxfzpfbeNS3aar4SPgjpvEPUMxzGxvg9cyj66gXUMidhFvU5u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24VFseWMrTHM9FUjWPQmJCVSmYoWkqbaSkg895RH7amj9522ZwHMoEfbyFv5FevcjeS9mEv5BqA6SABqjXW1E8jK",
  "key1": "41MCxjwXSb52ZKHC9RHPyqBdLXg16zsnXBJQU2SwmicSUvqYKmQ2dgm8REqJgZwBkiag9Rog7DuB577DzbPYYzsh",
  "key2": "4VVka16tca7XBL2TohzxZN5ZAJEc2rBHZPTQWHtWT6SpSPwQ8baBW1ePMozH4hPrCZ6mT11frPARZdxDbDw9esKd",
  "key3": "3PW8jqkK8yTevooEkoH8qyk4SSL46NM5j86rtYxDRLVcEjT9NFqZVwUwFCH8NMUk7bs4YwoF7RCiaQjj3PMhGFY6",
  "key4": "3joQT3fcZCkH7ApxXkA2NhwznmHh8b8vaeSmpZa5niv3zGxpYksSR3fvpyMjEqvpnhAfaecaxfJ5b9gmKWK9duyc",
  "key5": "8xi9xt2phzeTm4KeG8B6PcUdLkfhtbxpKWVxoLT7QaMMp2MWWCCtVA8FHdzmTzvnX3FUYFS1uWrXkhtjX9FMmmU",
  "key6": "QAFBK7KVGNP3wyucFCH18cQNrtkTGA6y973VHfjtyb8zLJGf3RzzJUMv1wccKKM8ZngTmbgd3nyQPECgEoo4rGM",
  "key7": "2BpQqKtHc8jakcvufJtPdCjrYZihizbLYJcWvfc9fD3txcKJQAFKegoqFvUdgKCQV2ajEzqSUrq9zUDF4eRewT3L",
  "key8": "3okHh1XfPMe2LyR5Gd7Myjf52W2E7o8XhGWqQeS5NCXHDEYpmMUB8sMYhTEsU3ADcsbBtxEPkg5ue5hunA94pLpn",
  "key9": "238TXMoCUAdy8ZPzC5fWi6ZoCzi3dXqBnv2Prpo4Pnt4TRjkvYK6vNxeoiHuB25F8XopWbGBgEZcuxStxH8QmM9Z",
  "key10": "JueLRk7fQSHsAc2SnKfpwwbcs7pJHVkxmtxfxz1pcVcQXXbcin6aNWcqtp4qBypire1G8aSmHfCPGoQhzMTyNmF",
  "key11": "Rxn46e558m8Dv4e2WWT5UeGHNa9j2HvqCsuD1byJSLsjgsRwG28N1EahvtLWWvZKuozpU8Uech77291j8wUWhcN",
  "key12": "2YiAAhEYYnsSGvS25uMv1mwcYxGKNwNzeNfeQdcTfrSCuV2nCMHdoRnLFBrwAFG1BizTf9KTRUeZJGxqZbDApszT",
  "key13": "5gVsSF8QkZmyFgnJ7QRFeeGVA5V9FKo6WSFR14jFupuGiPz8xgdsXjr4wMDKgdyzXGEkadCdeT8w2XNvTy46M4Qx",
  "key14": "3d3oRmAPAsaQHHZ5zTr3StfKYAxWQsKvmSvb53P3cYRuaLBA9PPGphntVxTQJ2cDSRnp8gnMRCYX1YP9kwa3hvqm",
  "key15": "3BNwcRpZp9Qyc3KD2bvszMxthJV5x6fm4PGDXs73YyKzLvNVdZACTp6tABqNU2LwKeceCQe2sdfqcVoMyKHQNGtV",
  "key16": "2Vc3nkUfXCRrTQSTUFuEHMNRptLAggcX7M85Su421FFAppHUK7g6oe5o1GxtrRjeWSAfCaU1RaVciXnXUYF158oY",
  "key17": "Ux1m4XZGb6mtrgfiMmW9htcQn1Ne3FJU5NzzJ9u7Qx1vd3TYBA7a2P6xo5JzCZQLAWc6hXtYs834G7B3TGqTDZB",
  "key18": "5WFtvTXwrXakHBZjb8Wnv6YqDofXXy8FcinenkuN9K3i2X9YkUExCUeV26wrNqLKHJvxrwCpvW2D6uhrH4BKjHDu",
  "key19": "3xLWddfWC4g5TEcPYxarmfrZXN2CdkqhAiMgPFJA69Jeb1UuxobzKMf4A7jQpMNAsgQ9VZ5JzFcGxxAVEKXxFu4G",
  "key20": "3NJiUtX98vWzgtPi19vcU7RZVh8FPQ72HHurvrMuP1XR3nZeYvo6QgkFbeH1n8WsqFdFEpm4VCMYnMbkMjmds2v3",
  "key21": "39LAe78BGkTq6Tt7ufYYU8Ac2Yi1tokyeSfMunbRZDwfCPRUfyQjFPkmcicCpP38ZvGdmJ3tJh3EMhB97WtPmCmJ",
  "key22": "2LxJvt3NeVBfo6rV3uDAFLUUboroTatE8xfc2R2Gffpe85uRUBWQrKQMXjGEX53Gjgd9wQ3bLoL4sMqTD8LZqBEm",
  "key23": "2B2XtXvFWjHtxiaN5DpEWaJKSxC7E99dfJssvxpsSgVCqPt3AcXGWQWnmPKrPQmhQLCrVgEgpEmgYAeDTtAv8x2A",
  "key24": "533ke5pwRa3p8StZadFJqcjSy8yJHGz9XPMsPegYEzx8gc1ci5JTDs8dE6czcHu8iVpovh8VkjxqT8LFZ8GcvMaT",
  "key25": "38fkuEpPxvjuQhMYmMbBym5JRvxSVgS1c93ECj1VVTBrKErDv2yLFbkxPVEm9LqvHjnfiNPBd9wnBgqyD8PkexHf",
  "key26": "3o4c57KqYMfvHiPyyCasUjCGMbgmUhirJ8uoJoHJMZhowVRMj9SxvUXwTzRHHinEcDB9jew8Kux6qrvTVc87B6BJ",
  "key27": "oAgq9NYDCjQkfxu1hxkoeJenxnvcd3kQrW16xgdrBgfNZSaAFcVsTLX6nRUhqwVNiQqSSDaq7yMhBvoQN4na9dU",
  "key28": "36ark2EziRwDAnUGQ4UWJjkEEbPJCxZkTrCfP6wjBeFUki9tAKrVCCnqV97NYWG2CzgEsVaWDfUEzTxXkahJqhwv",
  "key29": "5CJ9XCuDKB9hbsLUA4sz47Sq7LtS3HkqDCWke7ptYwTncB1MjaCQs7L2Dc7adnJymj6eBtVAmN3jJRkug8rMByfQ",
  "key30": "4q6UaRiSfLYMLnwWrBna8RZkfcDV35AaZAYhbgJSxGPgt1sEm1xJkFopjx6gxXmoXxrm3Ns8GeBjmaY2MRZ5VUmX",
  "key31": "5kf8W4FmVF44CQCtutfPjxMdRh6LeFir7ZH3AsgoTm5i99NzvhuN8VhD7VSe41nRUH2525JqJUV3dweU4jggZovf",
  "key32": "5eWXzUA25SDk8hbW7tSBTsCJDFXwxU5sJi5jb6sd2LJxWHzwBQYUz7B7528N5zKwrV8xjynGytPtY1MgT7FS36tK",
  "key33": "EZ8nAAmEsnUyYg4vXFLnxCCMRExpQ6qws4ahAYLKehSDJjmQsfaoUaFzdu5ViNzqhQEHbZCfhE3weFyfpiUVJKZ",
  "key34": "3A77UpCNdFaXvVcsKofRxg9VcEpwvEo3Zak9RTnDuktciYcMowTL4KH5w7NpM9kPi4VnqH95M25wPH3VdwkoCbug",
  "key35": "2aCRsSkibJXmFoa2hdGaYLoBkcd7bhPawwuMUyBccPfKAQ2PCGuszDmshfvG8dBLwHLrzFcvKHDs6DytDGEJ6ZW8",
  "key36": "5q1uzNt6yrfXdKEJWKJ61Qm6RSA7bX2JDmpHydTTGrk4BVVTBfjG8yRkk18JoGhTR7VhEPsB9vELp39s9fKHauDs",
  "key37": "3Px1tW4eq4yTzcMRWbRz9EofbETDQuJy48WN2QViTWDrC2F1FYpGzRFv39H4yUdb1xdNaGkWmPdirmEfxryK6k1v",
  "key38": "MTkWx4iWrNcRkG4S7AMmCwsBTQHL97mmkStofqry5X53ArwP34FeECmsaMKdyYAszxqttcgtv4eJDtBUCUH8pd4",
  "key39": "3rePsb3iJLpgnrTaFKRXYJAMCR2iKVKXaFNyhRaR8XDGGjV6sxmoKfBBhcZx6LRpYFnwXVXSgJqjv4emX9yP4vNw"
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
