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
    "CMjSZv7oXF6pj3bZetgV7syPBBQdbDageFmpBuQkZAb8k97JhSijKXR4rd5bB93iUSUc5xnXKyyompUNqL7U8Be"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62Efba3GhR3gwUMDSJBBYYE9ge72D7YkD44m9u7WN4YtWvqZeaksrWJ9PxsH6dgvafCe2uLU2F7s5V732SmNKRHt",
  "key1": "3jBV7rgNudGqebZyD8r5YV5UF8MNt15eoLhzp9x3w9y3AYjT3qSXXtWoHEiVRMnRWsm9dNoUvsuUZGEuWF2cJ3gf",
  "key2": "5yGQgBAWP2aoYWnJCjqFhDJFBa46QAi1bicNSyUycu41CtxpkDtQHS4PjEGcCB5MA7UBKUJX8Mr6Xd1D4YZGierL",
  "key3": "3L87ugTCQCvXPkFPnAvhvDgvjtD5Z1h4X1pi2sH2bmJEZeQXbmQ568cXeoozjfUc3jVrwm7vpfkzjMeyyLqyS5PA",
  "key4": "3Py9yw5dJkAkuaLRirsDizxwhj923mNCBRb69QNkijMEUMEdVcnWEysXVntbwPSQ3tcaipuX7y2Z6VYLZ8t6mUoj",
  "key5": "3XsPMTwKqLW1omt753AJPfVMcf56UNgTrQ6dx9pfNjCTouv5tAfUc7H7VdAg1bu2PLtTrS7YXdhc8YNNnDJxYB51",
  "key6": "4aU6bM849ZLBWjsTif29yK8hygto7jbETJaUcWeutGsuFZCMtTUCNchgtGnmsLbAYhZvh5YDPQVjCn4SjLRNjgYB",
  "key7": "B4VqNFmBrk4qHe8FmhMwQSgGciLdVGUpRYh73VRUEXjSriL4nHHoz3i872VUeKKBjW2H2TuSa996hQFPHJbRomm",
  "key8": "3XmQY9qHJGXRhwq4PBbcJnFdrtUGhwbLkAcPnMNSs95C1MEnsY3N3GnkUg1nuWFWfkQ3G3L5XE382rjUt5EGsSjV",
  "key9": "2Z8YYFyAfQ51ve78koxrSuDGMcd2UCdQ3Tu3otgeZoVKnJFokwtTAF4CVZ9E3tteaEq3bN91HED5SUs8mKNB42Uf",
  "key10": "3NPFTBi4H2Ng4e5ivuUTnP3unrGjUJLXhAEBJnHvachov3H3J1hBjsoN7YpfzN2GCWzsu1NBVV9BYi8AEYoTEDdE",
  "key11": "3HWK1XjqxhjymtZPb3sGHeJyGaD2pfEQ26HkaU5XPAV4Kv6Gy797PEppNRAeYH84vyD8zySjdCxV1nV5zGiRFPU",
  "key12": "3EKVHFZCpb1iJmq5DAH2j6Dwj59PvTLKrrSvnFHMG5StH66raELigt7bcWWv18D9h37DqWq2w4TAQqwWAN75df3M",
  "key13": "5UUkqBRBoHs1stk3YQNkC7cLpBj7CaHrZGMQSqUBVUW8GuTK78UbeJgj8bpLwxeUMRNn91GDKUPQ4PPFNp3z8C2L",
  "key14": "5hWKisnpQrWYjVwCq5gsvFhKJNMtndM5Shr2MKrGYu2ycgJxKFJBu1arQSf3QD8LeCvEMvhthBKEXTWFas6DtnPv",
  "key15": "fWx7BevgZLjvoV6dayJyFxDxV5DbvFEaAb8tqPSme72Rw8qhqYpkQJVvHLFJXpuuKo3xqYk9CA4Pi6tfAFUiNpY",
  "key16": "4Ake6VNnPfSfq3cMJ9TBZjrjuobcjnaMnwiXZ2RvF12rLFvLofRqY8dAypWrpWV84tnp9UbNsCe3hPJRvQkfqyaG",
  "key17": "4merApqMqFk5HTa9pKu5DvdbB7zCxDHmivtB3DTj6hgUoQPC7oPFex9f2J9xNfpeTo9fwwzNY1r7GMEWDzkKC2kv",
  "key18": "5R2YUkxJPzxeCed9dned3SrXT7ST96qweHUPm8xZPhXNa7nJooewocDNud4Utu3q9QsyKAfP7E878SujmvuJaR5W",
  "key19": "3o3Yv9c4yM8fZgQJKgjCduDPGraRCnC5Hckv95qT9mS5A8QvSF1jG5qUtW3aovuK7ZGoSEScD1ax9x8JtubyQE7A",
  "key20": "3kUfMxBm9yKXzMcfNXwmEKknmZGJA25kGS7JRb5BzwKfJGvggrfyT1hscj2od2PqkdKruVCGrfGBVTyPvK8NhxYz",
  "key21": "4USTaBk776yvB8wc9mFhmtgCN22oStvUubYhfvMM1YyejA8sJsMa4Rf6iRzvhDX8dY1kx9q6h7TZ2BGWComAJtZJ",
  "key22": "8ohTTs2xhho5GHWHh11Q9aFARvLW7HkJBWiUEXAV36WNaghBiAkipxfpayFLJSLu5B9ufsEHqbMzmbFaQqLrgVL",
  "key23": "4qXEeSdjym25MpXGBV18yckM6n4QFocMHbRdrL9q8YtwE6Arspcu6aFkhrSbVss9xJnHmRAQATbQfb668SzkwC38",
  "key24": "4EzKiGSRC9BA2ruXCKHFj999wCbiM5pZbJ9aDSPtqsMKNbNFnCfUKrMakHZNZR9i71HJVRCgWk7oXBAgmG86MaUt",
  "key25": "2SSWKg8t6yTdZTZDnVWiXS9jAePnJD2xvXX6T4vKQzpTYyo4Unrdj8VuyGvMVFBRYrmJidLZp283QNLCoYussYdb",
  "key26": "3cQmwuSC4qEoFQm3mSaRMJjGY8D9MZGQ6VnjjGbj7Ymg4bSnZoi3pTuPEAJY9czNbmGd6VtZHMT9F5FNdvb1sLtZ",
  "key27": "63DD7ycNWdxuMjN92tpoRK286QeU61hwPcMmh3tnxwYTmyUcKLVq79qguU5qvw437cur3cyo73wCVVxbr4MZ1yU5",
  "key28": "4sdkhC53TYN97PMPbdhaogWtC6jpnLg7Gw1pYyPdNGCQfNkozzDMRZnjpHd3U49ZbiFYX5Pf4SLV2MTBgvghZy5w"
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
