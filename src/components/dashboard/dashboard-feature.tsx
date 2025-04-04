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
    "4PJm3q9DjRLgNE4VUaKGpL5uoZjHT6X3yef4PH1a2vsYEmN17QPtBWNWq263sTXnP75u19Q6DSCjhpdCoEASUbFw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aQZAcP8zoNPk9KjsfGDwHFHxm772jswWmPUMvqefJ5A4B62ybEAHPynoin2UfwEaAhGQhQFnFaUWKGwYdrK3zMA",
  "key1": "5351kQD6JCu1bPfWCMqfvjmiByv7Xb7tdAhg3SVHgSbHfKfe3hgm1EqrEdrKjW7LF7jg7NcEwnLZRg7cBvEL1BtX",
  "key2": "2WocZGcShV17exR8MaFzh8J6Q4JTBKDvxfggxezhxgKGcPwn3xKfLbBrQ6DSy6g1mksj7fyYvHBfwwJWyXK8UzQP",
  "key3": "924qyDWUqRqupp5daq1gKCqm6JEM4Wx5fzWr7NWajt8ipz64sa6bFmpQ8w6ZSynUW6stc2ukDKwXtiggwth5pWY",
  "key4": "3h2XvKwCa5pQHTz7yCLtexU1QWR9iZQgtERB6CVnmiD5P6WswbUQrhNT9U2qcGMz9iTA8UC7Kaq7eSbCJbVsfaDP",
  "key5": "4a1GRUY9RTLGFyhNJ2Ve5uKq9FarhdSQ561qmK8hLCVyz5ATuSi1kJWNNEafTNGFvAAtsWz1DE7ihMUXHtHo4Jsg",
  "key6": "4e42thBFT7a7quRGRZAbEwBPnnVaGNkjdZgKNtcMtAEDNXrWTkFg7VaVohE78VNsShJ1NqiMyGhw87RBvKaGhHQ5",
  "key7": "5ic5aXccamZ2K4FzbebhPUwxttyr3ESAabNRtcx84jUxoez6jzxhtUidQtMAia6aJBFFSrE7uYwTbAx1nSNjsd76",
  "key8": "2y4HWuYqankJKsu2QTt9G9ZoMdAKTVYtSQL4WP3qNuTEuDjhmMKBDebqCiKRiyyPbJ2E4GYrXpeftrRsi3Q1ggZ7",
  "key9": "DBGGH6KnkNCGdvxuZaFzcmVawYU65TSwEEedaPRYrgSq21QL9XnqqMuVpgCsWyVRuJfJPX9z5MuE8vVSE5gcXwu",
  "key10": "JLqLNtn42NLdit5gRv9LZNfevRtgCh4yGDSVbydD9aPzovFSBbwf7sF467c6kwkc1uftgBzc5zWynpg9TxPH2b4",
  "key11": "29ENFchwhjKddKUwYPAMpAGue5fTbjGcA9vdQYTD8QW2MA6uWtHpMrtXLooWtRYSFN4Dg2VLxokieTZyVdciFDEm",
  "key12": "666EkugW6fwX8kS3dEN8aspisQwVZPemvr5Ki4y7Z71LUfZn6QWqUsTh64t6mjn1YgqScfKRQhgFNz4MA426Rase",
  "key13": "2GCXPPnYshHyJaEjxNzNnvJos4Ar86GU2sTPVQRTEM3qbRRAoFRHAHJDVeS9eTDWMyVLCvY6XRJr7KK6kVWoPCwu",
  "key14": "42F8oknmM4wgXHJE8iEwWbvK46uGHFjf87qaXpzPNKgooArWHmH2x36zCyeVEHRc8XbwzDdtBKUUe5RHzy6HHpra",
  "key15": "2BDVpaBka2NwhBCKatufvCtdTqvxXQU6yLa4zn6SXqQtymRfXyPaPbjTWbQyif98qFSQraTXkyeXZgJjjLfg7A6p",
  "key16": "prwqzsdJPSUxY4hTwKHN7EXpKZ8aJtCNtsP8zSULCG1mS6q2S1g2jGGgR4kN46xiwf7gmtwafq6sQftA1bV55oP",
  "key17": "62B63gDZqdQ6gCWu5xCEYb6aD9n6uVKLrfbfVEp65aRa7hdCmv3TxvKcCixviUYv7VqHF2kY6H1tckWR4gN8HEYc",
  "key18": "3kFAEk9uo26zGKLfc9vjjYKVSoH89e5eAw6NSdsf2DfDjNZtc2yv6aSCDs5q8brvPCZJ4a3Frfrd9RcdXxvzNZyf",
  "key19": "5BZttPfnrEP8ZMVvc1Yjhy5y6yoT67h9TfZ7LDXGgbkAsHTb9HejhurRNBaBUqBcfn4piG8AXFZJhjsM4Cx5iQK9",
  "key20": "sk544qCPc1E9pAMk5d72xHcgApCanNpnzpGx3WAJk4yGp5wAd6GNKVUqWvkikg3GBERRz99dcdkTND7eneibVhE",
  "key21": "2uBgQWkET5P8zoLofxymWceKiWQwiiX1BWHdrhgv2dxjMeKukaD1DLM8GqnMgNGF15TXH9TECigqDFzy3egnajJR",
  "key22": "5nCyvegc5JrQgxdgY8XSbpkzAHSbFDzso9hMEtJw43NcqkqjxSJ3PBEn6QGxSCZNgNatcczWX6DgydBZ6LmiQK4V",
  "key23": "32wnfJxL9tcvrVhQibZCsD4o7NMAxL4qRAcjTBBJfAUqHf6RJn5Xp16cacPY8nZuPfvsPpTp8Tg4cwcqdihYkWWX",
  "key24": "4CDZRyGRSxhPLFXTvxa7jfY3HLQJgJQwmp4c34GQnasWTRoQAtn2kaNYWcZpanb4u4u5n14JMNF8J1fNxp4oFniA",
  "key25": "3xxhyx2C8SfC3Dc6yZvBZXpuJ6rFru2wbb6TSBxLqGaJqojMYYzf9Md2MX17iVdBAExez3W3AEUmT5UFtsFZ4yU9",
  "key26": "3NCyS8rQJWGaKaxKA3oEcki4ig58GNpSD5qDSP8pUwsongGV4Jb17897tHWQaR68paSDMBrWyQyRDU6csgsUCtn"
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
