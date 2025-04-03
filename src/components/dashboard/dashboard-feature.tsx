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
    "4tJMFNLEDBTxHuGvMEj5tGgCKzRu5q9a1gTKfEs8Gjw7rF8cr8RzuuyqYsxt4dKgFMPWr6zAV1Zrirr4T3qFiR4T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bBaJ14Qr1Z7HyZVqj9E6mALCcAH1W5Tm4R4XSvbSrmS7yCaqB6VTFMcVKBhFPPyEV1RhsbRe2Jy4ngqAWBsjDL",
  "key1": "3H1UCktZDWoo6MoHW1vFko2pqQGkqj4DgjAo3G1DmrVNNim9VDyELzHGf6NRx7iBsXsd4RZgyMzSAVSVKVuQ8nZJ",
  "key2": "55kTVLFbC8FFRowLfeDgQzEr1frhAN5KtD51CHiAd4Q6uVKVAcCQXPRCg6xUpymeGhLbuaDX1Qm9v9bFZKuJ1R6X",
  "key3": "DsPNwsts5QWraFxeCzaHfXbfYj5UkxfUboAiMMiV3MsFvyAQSLREewVn9cb2smRPEj83jCbUkWnvQmA1maP6A8z",
  "key4": "5hYRd5Mg5zeRULZ8v3EeRv8zwW5qrAUGAExUqkbqx8Hxz3LkX4nUsLzko7LGUK24Hr4xYztQoZ8CMESw6e9oMjn9",
  "key5": "5FH7ajSm2DFfj9qj9Bv9DSEaFTcYNpMSYJSZFZXdp31tKyDHNzdLF95h2KU2Eoyv3Rdz4gjJ7NZBN7tHbBh2VorR",
  "key6": "3nZTQqixujFWBcUSeM1FXnn2k7zUEm5JMjXnTXmXWW3SiN5bCR7xWeA7CjZxqnF89KY6WPcKjgsCdA9YXxKpENAR",
  "key7": "2Yf5gxPCQvxEHgUK9zhFCBqCzGcqhP9x9GnfBXsx6gk5jnqsgJzGSHs5d2ZR6GPbKCgU8sbNYK2fwZ8dJU2FYxBa",
  "key8": "XYaJHHCjkNCd7ZqxHU2Z89m7MQNMXVEgaZ4pM4yc87ySwCQVVcpa9KoTC2cjFWskF3Ya63AghDDfNdFTa5zKoPY",
  "key9": "5MLkUytSMv6F535jfUw5QjmWa9LT4LcYpdDChfDXuwQY3gAW2tDHPfspo34bxwtWpvfjy9ykhxYPgAdtztVDU9sF",
  "key10": "NDGUQtnF2JikFAeuakjTKPEYSwzXWNtsty3GeiugmU1ZbYLMA4q8T67EUSuSXft9j1pwMdy4BmTGMs4meaGPErJ",
  "key11": "47yQKDmjogr9tGJctSwwu8cpTLYyC1BxygpCysmW7seMaBdVumrG2TNamZMtK874u5pneYMHUGzgf5mEoNAfxkbm",
  "key12": "2SnbpX4Kduz6VFKL7sbuD39qe5VhABu2wDSuQ36n6JD5ycgkukxxBiXwAnvHsUJ4qRAf3fK4AAPjHnT2o69JtooJ",
  "key13": "4bo91SGf66enwrLG79J6hsr5VpRnymQfKsiVuPHHpj93pQDC4ATLNztspCRs4tC5wKpbPScuxkCNf7GhtdCj75gF",
  "key14": "2b1Wjj7JoFiWompwKDHPiqX5QLiXGfANZ2mhu2TefWRBRWJmnaueKFGgLepGDMK7pnQmZSJyK4hNkusmMDpMT3Pu",
  "key15": "2jnAXQr4kyXWMwyd8fJzPJeX6yi6gxN5tk8Grxw9fUAGUEUACnQMrfLNza29CoYRFj31FDy1Xm7tCED1bJ996zxz",
  "key16": "yKzJPCvXEv5HdmuyznN5QQjhqvb1xFwTP4L26T6KUdFJnqw38vMkcNpsQSbcM3wusuAVAvTsS4Wfe4T7xTveidT",
  "key17": "2pik7FSuiwG85xs45PocFqxbBogE2STNaA2XN5tp4daC4X5Egr8kwQbmTLCWxddcsqzcBPSK8xaJzD4F3f5nmPJ1",
  "key18": "5WjtpSMFNBZ4vz2i2VLht1HpXuahd4udaBVPp1gh1sPNDZDjkjqK1tpCy8vSNGtYyMWhzDt185MhWU9zr13Y7p9f",
  "key19": "5ZkmgvJcBWHWr1aJVyZfXtKAX5X2eJjtfDmaH5RFWeLdH41gF7DyfqgmNyoJYrLuFtZYctjrmHgHs7B6MHwYebaa",
  "key20": "WGR4RkmzfDxQR6UEJb65gRxHTVZF2imNqGBHDTF3KNDQYq9TWbZLumvPQ8uSh1TuQW53sLPNjpQDj3pitmRv1dr",
  "key21": "3Bg3NuXMZnpozsgAgucAq9w69ckg1DU8JuaF1Qo3STeznUQey5RS2yckR1UJG2EMKuDVya8DqHRdQg2ym7mKsNjk",
  "key22": "2ymo6dj1m6iQL9EMRBiDbc66PayLwmhYQhkSsN31pjUs8WT6BUtg4ABi4qpwhoJknUSx1MPkCWH3DS59NkAjP75v",
  "key23": "267CuTAzafAcddJXXocYpnmZ8WKsXC5MpkXUCVd3TtT16HUSLiiwEJs4FNGcYWyd5jh6Cd1eBZBVfJEyiNrb29e6",
  "key24": "5T4dk8XVqq2PELzu5dhdAKT2rdBj7ou71eRzmjK8VVYjNCxY8hX8rUQbLZNqU3F4W9CQcZQdM8tBxfare3VTc9eK",
  "key25": "67N1MUZ6jqnNNTGGmZ1TnsxzVTqUFKArhzCyjoYE3GeacfT5LBbLKbmVoo9b894V6NrXXsu1XZfKVEmNiiZ4JY86",
  "key26": "37iDzgGinxbYoc1wFgtBKv7NQobxMbjKJDAdEXRqg2sr8FxnEjgu8SJwrRXNTn5Bv5WFZdh3iMuEtPTYqa7RZpxC",
  "key27": "B3S4CUrJT7GtW4jviChyYWbfXck5VkpmG1XL1pEiVEUANine7qg9AsaXMGsXyBUSBuAM6PwUVHQcGH5nKmZEeC9"
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
