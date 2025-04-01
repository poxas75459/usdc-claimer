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
    "5QPgrXhfjbwJQ8e7dtNmLkSqqAvTYP5qEz24LnKnTHUqvQqoDcP8raTsPLcYgTa2wm9oood9tVyDvfmBvyM3EWno"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UwLdoD9F8DThz4BAJW6Q664tTbpmv37Ku712Ut2rK74TiQG7u2ZEmAJFEsHUwgEaUrurE3gGmPz6PQSRTjacmTD",
  "key1": "59GWmM9Ac5bqyyYHvECGDz8jmu8iaAkBa31ogMaMCJiZkmVWRxgqtUz9bkfjyt5tAHWjis6XF1tz7e11MyeArEbF",
  "key2": "5TNfrTKxG8BgExyK1rQx9WGx3c3sUqHbCs8z3gdeNJpfT8bkWCakiFUUKDzDUcHmTdh1XMJxZ2Bodi85NAkeyWHF",
  "key3": "zaatDGnn8J9i5nmzLZqJoywGcK1FcRERQ1MBnXPdR97ahXxF2N8SZddNduYBWYapujcC7FJjAZbsBdUz3kq9Zfo",
  "key4": "j4yfh8nKcJZWKKgHgJHQGueja1qBejuijeHGfVnAVUR3fxsdf1yMbhbw5jbHB4JbBH699c7RegH7qhMW2sYw4Ka",
  "key5": "5hMiWBctvAnVePT7sarGCFfVpusP2HLcNpweqGfCBkSNDcE1bPv4xPQWiSsgq4sqvBZ31nZF3Kb8ogxQMbQZeKsU",
  "key6": "5XFKmLfkgrLt2TUba43G6rN3nqXfxpzBK8PGRZLHkTtGVAtRAbEAMWLr6rybwNQp2taYWp2t9iBh4XkYMrPGPCQz",
  "key7": "EHo5U6YZ6LKRfoxfRhR9RyZDVyxNMX5FXw9i3s6EDoz14ZpdTJXCPZyH2WwKQrx3aa9g3KYx34qYmSGEuXjNwXE",
  "key8": "62sUwUMFHRqC72k43Nijw4wg5Y5VydoYbAux5eoSBTUsGXcnDGnSHinT5ALcpoUsoo73G9TsrCWJeTiHd2Vq7ub1",
  "key9": "2SE7MMjA1jdVuFCMxyx3PHBwE8GpgiZduUjSqvQvW8xZkmVUrsZPJAKUzWafEEZyGEPAS3Rab6ik4NHwd1s7KMXw",
  "key10": "5wK8pXnUcjtNkmdiZr5is13RRcBJiqLnWJb7HqAx3bd7wchcJjRnPrmhiynBtWbQ2bxduXV5bc9FdLEsxMyb4BFw",
  "key11": "2R82RWwr9SXH7w1G9wkcGfLEMimYZ6zsAqcMRCZqD1WxdLz9aGQLkkHPVTQnCeNwLTH9TSsHMfftA3iwkhTBxjF3",
  "key12": "3SmteRRPgNjwC6FdRPYsUYBea8fFc6Hw1PSaCDZ9NzxSE64jpEEbSKQgT5KK4TRYLX4QFtDhdx7cW5X22cFkLCsZ",
  "key13": "3faDXE6n6haLGPfQE5Y5VsuLXSF24GHoMNQsG8fDYdLZ5296ysiZZqvxXDkPrWpKRgrgFPLZMDf17XaUk8umUJPw",
  "key14": "5Nv26SN9ua3ibuk3PRBUV6hJ6hzCcmLX9G8dtMuKgsaPCTvPjvH54EgQpiq2Z6qu8znKjhQzc4tw8LpzTJ5Hepet",
  "key15": "446gR1wL3oDwsa6UR9hfFrx698ceGiEgBopBig44sungiZ7ZuoAAic4GndZcXnpRSfWtNfSQU4Xhrajtwtx7A3UA",
  "key16": "ddcDqoghb2FoXGXnjdXq6hfAeTqkmUKDeyF89Bd9A57scmNssuA5URNKfTeN1AQLfHvoyvmn4PzMLg7K6icXamB",
  "key17": "6Dx8EoyLyjqyE4R4jxmwUbEQEaEor5cF6PAwTQRp2Bqj9ghFzH4g5qjtRdpRq5nXBfpFP9PrPgC2DkvgAnDPm85",
  "key18": "5svFEgxN864TzYVtxdwkLsHaE78cJ2ArSd7VQGJnRtb5R7A4Zwr5RG6WVWqBXmVgveMy4x2qL6JJLUrsqARMkeUm",
  "key19": "jF3aUYVjuoWunXDJA8WKdjKmxb6qRxdevmEYm9b1CVCgy4FppDyy5h3S7Hxiuy26YkNEt2W2xDPGq8FwUCfcsii",
  "key20": "4Zr4D9jLcwmypgQhYoiE3a7AFWF7oqVBHFoCPA3vPWrkcV7TFHT1QtDjv8PRXyDWRZqJ1crSKmCsfhBVryD6GNTa",
  "key21": "2pL2yEi7TAj75omiWYkxqktgbHU3AW4x2SyqshSe39dbVEY5n2KWuW5B3d4igreUdgLb9VtdqXyLvaggynMU2o17",
  "key22": "3RF2hZySxcQ5EtQKF9nPjfxhCxk5x4zBNucGEg1LArqMKfqU17d63R9k3tcMpSYitt285zVrTN1bV39rHsynRvZh",
  "key23": "YQrcNe8eVxhv7ZQToiW2CFFfBcRSPESJcKX5fE4kQFQ6DTNPvh6PZPjdp3prAXtHWKGtpdehkmWeSiamkfg3pEg",
  "key24": "5pCGKJwGC3iZ44YQxV6o3UrCA5StqLVrm8RuJvgkBgXQ7n35ywVY8tUtyWVDv4EkfpPNso669mWcGxFbRz3DVbm8",
  "key25": "4dVBwBnYFqT2QBpzDGTLodvAQGAPQX3rsfqxSZByCrUGA7k2d3bapc1jjeTnvxakhv95Y7azCXWiXxpoSFQAder"
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
