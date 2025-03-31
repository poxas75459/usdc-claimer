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
    "uUzuGx9yw3evWbUPZxMpQrTJGn4PsUTLX2dyu1suuAJBYK9pbcHAjhFYXFyWcocdwa6QF3yKPyChh3sn5y78RwT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oKMTTGWspXjUE25UMdEEYCt2PcnAb5XfVW38Nc3cwquNssVyGFfhfpbb1sW7Qy5ruAst9vrmgLg79kGYpSs5Hbg",
  "key1": "3yetqG7HmGr8miyhC8E8yYfFUeCXxJRbXN7kjKd72bQLpBCuZLgRpQv18tuGN1319m8AhGqCEkTW4r8RVckGbavW",
  "key2": "tWBaFngLoCuHqNtCQopUhZXse9sw5vrQ9m6A4q9oqhCJygk6BGq6QLAuh3ymYkpyFvDiMsHYszu2We4ujv8wcKm",
  "key3": "4obggMz8PNnKJuVUosXGfFQw82s1QkbvRCZM5JrkGCextZKUVHcHdy73uPQWuj4zrexNQCVbHFPnv644MUyynw5N",
  "key4": "2K3iRuA83v26ShRSnAZU4EybsHgvTzZSQjsCEWhcTGA3KyCg8XcxVumyHKeRm8UbzJ72BKdrhhWnwV1v3XP9kY9B",
  "key5": "5bPG6AZf7VTxYAUtsiGEwHLEQLd1tUXq8NhA1fhEoyeaMCKPoV6ej8WCVNJv4kcqukTjbDC6wvkt5vf3TFD3B8kS",
  "key6": "3cq88L8VbinwULwcW8bPujuPhoAURXAwj3DF7hNZcAywtLF3H4HQCpXkZM7mmY8HFnhUFt84RphfkYQ9Qznvj2RV",
  "key7": "3RKrZyy6jncUgRxSqsePtzKpcyUQoSgKpAqCt7TrhoYdWd8nFcAhZ6uKj9NWU7RkfSLJ1e6zrVrVLLWkFZygfaDw",
  "key8": "2ucRkV63iycSScP8FBXwDjjSfauP7h1ra4jHn4G93iSGRGFyXnSt7p4tLUA6hsxLJFhiUjmEZEdmjABP51wjLHHr",
  "key9": "4CksjsBbPWTqNhbEzg4dqsKtgTBNWFEckYJ4Q95bhPQ2bonUs4x1YZG5pSfJiabR9HW9hukPJw2BMyHer3xHBZgL",
  "key10": "5h3QvnLXWDf4Yc7eGd4ya86RfSSqNNKy1GDS9yh8HTtew3NRiRSrAMgt3qjNUfMBdxwfNmvegTcPLmAYh7PURFGH",
  "key11": "2HfUQbEdwtAKXc2JBYr16NWmky2w1nPfaP1uQNbagKsr4QN7gPkDPd4cxJisw78nojK58Pd9rai6hXKkEdw4MMfB",
  "key12": "4j5zp763pgBj2EtSW68Wxj9AnVPoVR6jqmUnUs2tQQNCcTZx8HqQudvCaLfug2qio17i2yK1C3mdrf4yZ7U5CMth",
  "key13": "5MG1x5fzQYKm6WvoTuAa6TPwBSx7uMA3YLut8LgjHGyVdYpFriWa6v89WkJ8wLyu1J4No6qf7Sez58SjvWE91FwS",
  "key14": "4HYM29VkDHSEC3fnutabhnoP4qs1j9HExWJVQjBuVYj1N3Yv9Dhtf3o6nUEYmCbGvWsMdHnERPVFTkHFArP1eirm",
  "key15": "mfRX3K7QJvSkh6EgjtLj5ygtaL8HDqzi9vbkD2v9soiAq7mPysX84nAk9iJayzruT7UNJf9x13TpaF82MfWE556",
  "key16": "5Y8gwZCaXHKt8RESzn1PGZyBd6eiQMN8NrvwLQcU35R4yuDWp4NEHqJQ2a7s6TmTRfjpPDCYhsW3wggCk9VEzRy1",
  "key17": "3NXMPB7q3b82BGQrvAi8u4W59xYQ1M5U7xCznRgRgaXtntMqSeazi8kSU3HLAaK2GCkRE8ZkzomgpKTCystKPP2Y",
  "key18": "4mhuMmx8UgCtWzZ58GhzorfHsJRRdD8F9otoZ7bbvU2Lmu2JyYCZYk6NKqsonZ7JcV2DwyuHdZhFp6cFGMfap3Kh",
  "key19": "5wLxbm3MZuvZiU9Ga95a3Ec5vxHesCjRT7zNjq13gardndyu1VRNqATnghWV6FHSrGTktRX7kKvVz15VwwMAJE85",
  "key20": "4z1SEJJEePVkrCgMUx97M42H6rDbwmnQCouAuQ2RZ5LRJwB2tWtE5GhbrsXwVYovFyVrZi5m1qez1GsPU2hEzyBs",
  "key21": "4wzYGQGEUUJSFSMXMd1DgFVHKvXguTTbCMWprb7QvRsWWc1cozwSXG9qSY65NNMpZjHneKihCF9Wmm89q8agrvCz",
  "key22": "5CgPv8MVPBze14kUFg4WQiDdp2M87zWRg7rRtQmPB5cDDEgbFYmysXi9mYgZZhrux9mFUCGk4Pvzjq4WFiRewoi2",
  "key23": "5gZSUAjUi53DTwRcqP2VrW2yRZZoVKdf3zR1EhkwF5BiHLCB3Dv5gfo7jCW43ECdUc3S46Zcx4Eu9usJcbgRMsjX",
  "key24": "3e9kFHtdpB6prSexwBsPPjTudZufKTuFxLZc28wuArJ9Gzdm3j2Rx8ZyZjyrBcZV39cF7gmhmqoqktTeqWHJgJhs",
  "key25": "4zPVhSmveN5D9ABphcwSt5kxM4g8dYV2kEbDL5qHNAkT49miiKRVGGhhYm8g3c5PG4G7JCUSm2QajTGHWEywJtwd",
  "key26": "5KhGiVvRcXsrLsbWgx12B2Gx9Mo5Dh5yLgUBavbjQSZVLTJG2Qq6G75WxARzSYASWGqWqo27LdRT51hVZU2qfjKC",
  "key27": "2CfbGqg5GvGMzbBzWdJFyU5D9S8hJLF7sjMy75mx7cVU7aMENhs5xf28NYpLhLmoQe47MGRiy6hHwrWyfhYedRnP",
  "key28": "67rbXG4PArCp3X9kwpv87Jp8cYgbCQRmM5TgZNAYr7JBhoT5rf6ci4vWRhxqd924JRsvpHRDtRm1fAKeKRKQyLww"
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
