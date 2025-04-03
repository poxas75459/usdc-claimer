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
    "4qWjNwD6u1nYW539PoSVTrmWpGacSEA8mV4uJc8V9oSeaLDc47yTJWeb9uYYccyEYNSY5f3ML8gAVQJ6e6CMad6V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JS2Wk3kULchLDybqPLAU8PheNeLAkJVk6FhmLffPc3DUmUE3kuHeFbifvxtLxguuHhdyae7K1fCYyoN6tJGvFDY",
  "key1": "5TTy6byo3nZPEUCAwiHnHuD7doMRw8x6zcmD4B8KB3kS87AzzuKr44M89YAPDFzk19chP1vYJVJFgQCbjAFC99PS",
  "key2": "38qDxhkBpNPwDyJVzvuD1kg3L5zhv9XNCT815nZBEcpxPveLoyQxDbA8Q4dQ8uzT3tQNeo443k4obB44LA9PKpFR",
  "key3": "5QHZRqft7CYe3mQBj4UDZf9aTqQK3LnJ4gzcFQUcBFEJqH6AyhwxTtzFUHRdxjMdZ4q6gDtppnemhh8ziUAQpKr1",
  "key4": "28jPn5ooFgsePBfqH2AxPgBfwT44GyCRZ2oPa3z1ADvVynrSDbrxqUZCQfdnqX3M7AziWDrvADn6mXMESg6GcFW1",
  "key5": "4w9SXjV9ET6MHYy37Mgd3fHG5V3zQZTwKggW4pQhEwiZLjgRdQgPSCPK4mtjrRtujFed1dke7KA3tYQAd5guxQBY",
  "key6": "2YKz3YVQX62CjyF4sxAewV9cTqYxsVMJ94MZXHiEmBc73VVoCHFGs29XmxjUvTVgDDNpyhZcKNoDTMQJBchE7fwk",
  "key7": "4qDUpRXmVdNDyEZyNemhm4U1MALv4ypQy55AKcY5FECdgFV67HR74ftsLYfhieUYpeU7toTkaPmFQ8XsU3azMygH",
  "key8": "8xy61VvEWrPoX5de26hvJ38vgCjdEyK9wv9xA59rgBu4nRGWyw6Zdhkj8p84fnVzKFk4Nim2NUs8pYuwinyLJJ2",
  "key9": "5YobNbPaFqYJYcsxpF974Fd8GpErTuNzXeYJerUD5LatT67ebZbtWNxBQcUVtbRsMu7vKVaREcNL7rPXbzEzBRyh",
  "key10": "29XFSGKjp86WayxdWd8SgFGrbWrKjWZs7mDdDoKL9o66ktxGv4rfgdKuSYffFJxQ1fgZRsv2Jv6g5CicAi6nCJDw",
  "key11": "2nv7K7UfHde1Qui8hkMTn4SEUyb8VEBuZou4A5jxq7pbTCytLgmMfmBVKk1qvvprVKnnAp8iEwtyZzfb4WnorNFQ",
  "key12": "5keYfjWKZhGyXwBTP4VMkXjJUh4J8aCDqFgXfYn4TVfNdQqr3dJ6g5vrxVNXkAWhfzLPATRrj9CCDKdsAEHwNoJ2",
  "key13": "p9JZpVcZFnDJHtdLxDbdwrdQJgBcb54Ycg5tTpfSuv3cpNEfbM28BZwaoCYcSyvSH7dgnPPRf1SUMxe8rdizrXY",
  "key14": "3snqjcZPggp5KE4tBySeccnnjJFfU8qyAQMjP8ixbTZmfqHkeVegNuAcDbqg5g1Dc4HtRrEubX9UAQ5BDQsqhfvs",
  "key15": "57hKAePTabA5j9cRiUkJKuGZyrj71gbf2bivVVjQALmo7fb3qgjxkFwAvNeeoP2Mth7nx3kVxruvPfRPyHfLgSPs",
  "key16": "2J6jAD4xFeyYvNXVQjkHKXbwN2NAGPo6eNxaVDqe11QhYNiZqaiZhAtk8Q8DZVvhmzBpyZVENEBoH7v38BtDLVRp",
  "key17": "5jF69ruZBBSw5nNGLgrgpYSVwfxJUbPa2aHGAdQFfi8sRnBjQXHwAit1dxWyjp4ZdnCZgPqg6DoPHJcXLgNtU6d7",
  "key18": "5UVUg5Aj3Z7JhmmAzNeMgUqbkX24HDbhvocefKGSqFNdn85K7ChSn5ptxA6AXxdeGih2tCuvpaH2tLhV8vaTJo9z",
  "key19": "243qWvStz8ohX52aVLQFTbkCwz4ShiaJ4RDp8KQVewZVjFmGMK49stL1Yck11SPPkxtUuoW8xSDbuH4gRb29ofZ3",
  "key20": "4hKxggEY4corbbS13XLwv64NXvTR1gze6DKX38FDv9ePdz3svxE3dhuqyUqfKQE7JVTEMjwEPvr8EF6PzChPQw6U",
  "key21": "2kxT93tNnnpXFZ791kEWKfh36d4mF4AVReCoZFc4U2fd2qvyFr5xXRaWXfFBQxYxL2UTVkKBbL7dK7u2xxURNGso",
  "key22": "5LMNQ2kMfrnNCUCz5XCqshDkZKFawUAcC2xGReGRtZ71WhPJscqtt1tebMScpCQJwm2jnrowwdnqD5X9jKkXtr1Z",
  "key23": "2aEBtbryzj9BRuNT12rYknsj6ZZatpBxsxvKrTMeAJdVZn8GB6YciKVFXFdXNyYvti8F4XU8VByGcd4Fr2mtjpNv",
  "key24": "5FCufD8DT4h2Sfz96sgUBejnrsGuHhZz8DdXaQnTxE52KHkB52dUHauDs86uWtufPJBZ632i7QDGnjUkhEis3eFJ",
  "key25": "62tLZCxGJNHiF7dBeTrw9byM43n3SGjYQLaJmuPfh5wjYJEhr2LZbzf2NjQZwUqZNPfxWv8gFaoFT3S6MBwywA9C",
  "key26": "4sm6AUDd3KRhCQy2arNeYrMeUULoaYB3GJG3XeHB3tF1tVLyFPy28ZKSc6u9mTbhqsCeKmwNzF8JqZRQQgHY1cru",
  "key27": "4XuYA3zMFEry5bFy4evqniU9WqWSucPCvrSdQZY8rQs5G5kquF7rPGFXCPEMyFUXuCYebLHLTmbP42W5zKoALp5o",
  "key28": "38mSRiZPj4e2H9BzeKwoNP4H9FmZjiYJ8CgNCqpDJzkpZrpQETYKJYi4w6jx8ksM44NhiC76bWXs3beGEZP6Dyq5",
  "key29": "5beLc1aii8LQcTdRmAVSWQqQBqQecKGP9vWzNKSgun4JkRUfnA8J9MCte7M19v1ZA2iEyMp9qtTGcTwr5NyhuLke",
  "key30": "5id8PgrM4y7ptPPYfjWR7M3ptwEyX4nn9hmA1ZSWSLoJ4YqYbQGqqeGvPfuYUsapneNunT53jLx7j1a6aYNCci6P",
  "key31": "43T3mybbibojzjG7bsVEaiqNB7BzHHSi9hvPBF8MLEN2PqjYNfb6HSFe9xGSMhR2Qv26rD6CmHWgb729jr4bMK36",
  "key32": "4RMir6cdYkA5yG6zgu8sognu9xJmbBoyYhHALxGh76oYvqPnCdZXwGHqkUk4je4Fc1Cr82eHPpkYANNXa7kjm85E",
  "key33": "5wGYjgFCuyyKMrRdW4V8sVcdcHF3MRcJNV5DVE3xFYQTVXxk69hgH4oenvJQvg2hwuYQ9wjZVf4KiihQYDEA3KUJ",
  "key34": "2yAxSGXbu6Bu7PriWtBYRoSqRGvyV3nmK6p7YMGJW2WZrCNQ7C7zn9LKGZqL2XxQsYv8wxSfKeqaZwtmgj3GJ9ee"
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
