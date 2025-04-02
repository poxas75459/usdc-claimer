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
    "4GjsVVHqtdx5v8HGmgTch6z8fKHXWCnBXe2YNxLDxLbDRWC3Fr6xAiqsdcKWSydkr6E9aNrEFnVmQU1urn8wxoB6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67VRFNL2rwFyXyowgdmq45Uh3K686er4PeJxDpBTT6LRCCMxjmPSksuV8HUAVQCYBRPa7uL5KtjjaMe9fouA1SR",
  "key1": "5GNnKgVdMifVqPGfDorDC3CBXqP11WJi9pGjHxzzLmT63zLR7yryh2stcrdoaZ7XVikyhLukGC97J2XBtdJ7tX1p",
  "key2": "5kCvV1GgrU3b6YjXooEKk7wU1gG2ddqQSJKYduTipBZnQzrJQraY2Uq2VmKkgspUiZTMXCBfvSR9dZ2AwUYqzufD",
  "key3": "47bbv8fdbeMusVxqxpCJofQQnkdNjq9jFZCBuNUX9wuDSjsCVQxcf7361DozMWRXt8HyUj2Ldca472dW9d16puHY",
  "key4": "3UBXos1vFXShwUh6pqiQh3kw7d8hwkz5c4w6kTiRqJPKB65YnS7maeX68bG3hNRZgk4EgrgZNryznFhGQyxWqMjT",
  "key5": "3791fyomAdnAsNNp2R2ym7ZK8YZACFAm9m5npP4JznisuEhTyu7pkmvT1MGJWxX6XQLoBxzhXyRG8QKe1iAjWbH8",
  "key6": "4MczCycF2ZCGW2j5dAk8g9TUKFDF3C44yJzhnfTBP5iuKNWbKRcVy6ykNvnyiBxdQREKfTfJZniPdUQRoN9jn9a7",
  "key7": "6v2gTjcRFpkVtP2r1XCESszg8PGr71kDPJo8MPf6tzwbWMyXgTSBQ3ZHDoh36TyCQVD1JjzR1nvD8wQDNJ9hqAn",
  "key8": "63VJQ2icP2ijyx3FndU5atKeKLJ41R5Qr1278L8VASxYnkEE6xnQ8hiVkVoWee52Qw7jkytHeipoxS4zzEKgGs42",
  "key9": "5fbSkSycGKjQaixt5xM42qjEffBUWt1c9gRwDqZQQ7mRpXs7n6UF1ibiU14fQC8TjYuW4WyGajALNPfy8dbq5cxC",
  "key10": "34qgC7dP3KT1hqAok2n1t1RXpSKA2SeKcuE7z46H9nL2LhpytdgwEAvARYs6L67r616tv2paq1vpVmNhJBWyZBpS",
  "key11": "2PuvZS77YFHtpmbCYW99tJWjeCnfo6kYiygHZBQzHVzuaQKk7WoA8wRdzTWKNEK8rLeqKTCovVNrdXx9B69Qi1am",
  "key12": "57pTib4U16J51cXfzwKP4quEztivi9SbPSn7pasY2GVdZLBTSbVn4ZzyZgm4R3TWUuERkHmc13yh5SPhL8TK3WGh",
  "key13": "2hK9QbKux5wP15xRz8KcBtkECGzJdtXrMfp4AMmWAAxcVHxLYnxqRyyPvCzQu2CrJHg4Z77YA9a83cjjbVJpGVWP",
  "key14": "4pBYC7jgp5RjBGpY2hx6AmEbr9RqPgyZQcqKZ1qv9j2BiPyqAhBohUFHv2WCcfx7oSkitRbhvbyKhviJxk6xBPUY",
  "key15": "5yVYkzHGWRs1YYuxpJ6UEtHzCZPE6fX2YaEQTqMQtuzHk7XP6rY48xb7wRGL6JB5gSmCmAqLqKozbWpSQjxSPVGr",
  "key16": "2M8gLuB4qoqRcYq6GYghnaJxMi2Eef97e3vUZMCdbs3mpiAY5C1KrPnTpRoaKrShBhHifrjLP5y9VzJ67x31NucR",
  "key17": "4thTXJFe7hGXcnJYEo1o3cBzynPoArSCtSpEsNkb4ZjQYA2pwLRX7je2sm8juKPoTB8zf8gXiQtm3KiFrTRDwgVq",
  "key18": "2yn7ZnGMuLsfoyLKa2edX2wsxDgjERixUX3nGvdzCSzAV2dgvYEyde9TfBAJXgy85whzeuonR4coUBqy5Soy4ojS",
  "key19": "4dtBBLoD8ze2qyNz7x9Ne6PPx5KBaKij2kQ7CNWpWeNKWv4okhVrRbbHAYzDN5uEhk9eyrQDWt8JfFqUxbd6jjL9",
  "key20": "mwMHum88XWC3FwS5HoXutDG4oCPrjQaockRGKf9Pe728MFMEs9PapVUR6nuT386TP2yyqEtJa8eDQKujDfvbXnW",
  "key21": "3noATKFD4PGv4SUZA4XTs56cHutLCEFMCcqcRyCNDXvVqY9kVTfcTTy7PYuzQjjrHGu1Gzj6TBWjHs2iLnJpiZEX",
  "key22": "AJipBQtF3UDtx4JQGHhNudA2xRQAqWZF5Syf5YsgmkvXwqM72JsFgpNkyXYqYK5qxVRvkLjLHKbtQn6mfpAdnNF",
  "key23": "4Pa45cMrGkM6E6KCsGDw3gb7XwzkH9jdcvCQky7SA1HFAqK4PqdgcWUM7hDfZfguPQ2kwqywaqS6AQLv9T9nRc2d",
  "key24": "47gMFUSTbDXFsM1Ufi8BksFYQyeYrCrnAsSb4GTfWxcnBX4S4dNb4bBYDdydZSUW3QdssJkvJG4gqiJvY1k6wyQi",
  "key25": "4dZre24uEzCQrqEPe29PeNavHXYz4UyE2SVQD9oU3VdkuXhPKEbpQotAFSZGYNhm8rSjad2WGxJpXRuKNq6zPuSX",
  "key26": "KTbQxVEXf4d6UhBrPy72S2Qchzex2C9JekmHaWiZPaos1Kj9Mij1EnR9PNUreVJQXdxo2cJHFWuB72jTGJdE1bM",
  "key27": "4GFL3hNQ81dQj5ZXMcXWzC6scnapid6bGoTF1P4ddKm62EeBSkw4wYLSyovBRzmaoFaH1LzZDUyBeSCu1mFsGsB",
  "key28": "5N7CzNzypwGRdPa6ZRXwuST3amkn9N14qSBQggUrN665Mk7QmovMwVxcnmuURnAd8qyQKWser9CygzpXr4dox7pB",
  "key29": "2aYzj4bScwAyQHW1MzdoBLhqfYQFRRC3bjYFJzZCaA45nhC39uWVpMwKwGvksC91HaSKhEVVNMLWTX6TcKf2PTFV"
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
