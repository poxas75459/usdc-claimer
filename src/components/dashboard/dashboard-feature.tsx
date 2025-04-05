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
    "5EkfJZviayPMGyAHb1efPUBgjp9h1bjeaDfYrNFPg6jCguBgTYCM3qpSkyKZaeNnXAEvPuYow1ShBdE9EBxbwrdw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hLDuhBomwJk4UkhV8aZWyJA4EeN7MrGdBoGzzv9eHnmvQspZJwxBkz9pWdkZ5fotvMWGMNgpvdVcKw1AAEQRsce",
  "key1": "54sgyyBqXL4YvP9UEFSPCdyknYyV2diPsSGMaycqcsvsiRARNumSUUN8wtdZ7HmT8j1uLLB6my4HpeGN2fMyYpzv",
  "key2": "3jGgxJF2YKhDq6rSjHEwnchVioRF4S8rBcMDvMb4fUAo3M5jdWVUDkj6oFDL2PTQHPivgcEFSTb2PqNLRajPQshi",
  "key3": "3VEU8cDF53zehd2StXqcWDzfbgBfZcsESkZ1c3L1785aSAq3Fw6pebbhD73w4eHP2LV5uyEQAZR6Xv9HsozfG12y",
  "key4": "4dLkLfuJPGvHsgMbGcqa3e5t4aLEVZVBwetnK4p5oLZHe6jrZSUdDWAZupsoBNBvpg4D9J1rdt6sXSBeDccXm7b8",
  "key5": "3TP3MoC8bD492TvBGDWVBGF9giyTuD1yFtXXqB82grP6FcMjGsfGdH4KiKsPRPBWV4CEEP74g57SDJyEnbhdmKQ5",
  "key6": "5EXhSiqSXj9m59sQyuEZ3dg4QBvGaTf2dTzU9WwCasrH63KJTzmpoJ1TvexRp9ScEnRfPMKquhN6zUKYPbFSRHco",
  "key7": "3KMxE1z9L8YYzYpCdkMFmoypj8G7VMbYfPCveTWQVPDBqdibxWoXP7nNs2EaFxEtPzovFHBMF6itvAXjpGTeK3HT",
  "key8": "4LuSqxwn3iGDwE85NKgMppAoFoeZjpQEQ9DJYxxpvsuPZA3d3ynQwQTLpXfmPWaMTPpbbdt2KwiSqSkoWuqZAMUa",
  "key9": "5ZZAwc5wyGf8auDkboxovS3ixN2B2twnL1CcDKyeXWWhPkgv8w9rdbU6MzBnTg4Vmq5CkjNae7DiQPgvu5vuScwT",
  "key10": "2Ds9HMqdPmPsRvZe2uMhLCWPkWFBnbDVZcLuKZFSYrMNch1NNFbkJ61x8K1gMxxhNE2BkyurfgayZARmEhmnx7By",
  "key11": "4XRQMRhqK7z7wR7r4XHmRHeqHNgj5g8wUmSmFiqjJ99ZvwU6ttD7Xdoos14aJZ7a5q5GmHHP4gMJ6CvUXBXjH7Sw",
  "key12": "tLygzim9KunAs8YgZ6ijoU4j99uvokMj9cUiYvozhs4vbWy8grmDGXw1rWtVo7hJs8uUFc6RKgWD1rHCqDBoanQ",
  "key13": "3CSPayot2Rsn6os2bUeRThAdrrDbjPFGd6qav6eK7vrESD1PuyxLDtoWvqqrcr9Z3SoHp6TXMLrXDwa4EP5WsaXW",
  "key14": "3Sv9bt5KHue5BztiwKYon2BpSjV8S9PyGQ5F7CXNZ2m73Rdia8LtavbZpRZHDychW6KjTKSHK7trLB5wEGT2Lyxu",
  "key15": "5hDhnPJ6eW2iRppR3HbbzrZfQozNMjQPx66xu7yYAq6XsiQk3FDcvMxwirv9xjAk7PBK78psziRp4tZUrxk4Qjn1",
  "key16": "2P7DG44tQ87cRL9gR984ZGRhh2mu1NtvTQ1gKZo767r7MJqRpayumEYGyG96f5hihHfoMTjoWnq6qgEkrMVWGwBv",
  "key17": "4zAhscSxiZaxVUbAfNzGHoGb54Pbnd2qDr3JA8prnHwtbc4yyUGyoqgqM8mG1WGjTN7G7PGuubacEM7e7fDJXmtd",
  "key18": "5uznqD4DEtzRYTZ2Ue36caugTpMBRRuJRf1KWqYw32xBCzguaTvzbHNAE8oGx1ScycFr4AYXn4c87UqCaAF4BRS",
  "key19": "4e4MVMiH1X3JHsmLnUkHdFiNkawYM7y94yUcsqVggZw3weKUzv6p5HYeVw2MyaQqr3CZYM2eXJczZCpcEFqtd9Ys",
  "key20": "5xqKqLXcxC7RszK8NQgLanciTJkdkXWLeSUd3m5pJKFuBpqkP3xrqjxTDCexRFqV78KKEfvHJEsZgD1VXtRCj5MU",
  "key21": "554HbSBWVf3mxe7rVvrLH7VjP4Gckkub4Yd9cXzTxAq3nqxEowbkbPgzZj9LCC5kx7vaHDaXeGgNrELuojdKFj44",
  "key22": "4UgCtarn84vzq4LUYkGXTPFKCFWQGNLDuymf1QGPCHvPTbEL9kRVAYBtwRYHx3u2Vvqf1KTF2jZDs1KcF1ejuVQy",
  "key23": "3ugjCHkC1FykK4MHs5PY1XMinsw6XBzjS88vZfXtjzyDduRZzWiWMsnryxr5R1rsE5v1EXAiqXzMfJ94cU1rmyNn",
  "key24": "26FZrXABR85CkuBZR17Gs4VkeLBDbYg8ukSm48C5c3FHZmupULCHTEFSBTd12jSZeUyVgeWcJbidqCJrdV9iuQ4C",
  "key25": "Yp77bRqsMJjjpyTtE2rQE1bqR2PjH1pDB5AhYKhuPHwCpmQvaVXLWhSfCanSr95WN46u5Yw1afiMJtrFzKCrUvk",
  "key26": "3qtVTxQ7HH4A7TVho8Wpwr8csxvdiaCVQmRSCd9TjSfTWfq2fCcmR6G51wcCY3HfQUzGs4CXfnzqqcAEdmeDWjbh",
  "key27": "5oY5PaGALqdAztMDNCc3hPJ7r4zgKfX6tmGkwLjWQuzbWKVTt1fo4XzGGttzmJPA8nL64BTwC14DyEDG7FpPzoLf"
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
