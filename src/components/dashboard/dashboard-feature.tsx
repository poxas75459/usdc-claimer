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
    "3SFKxUV4Sb37qHQoRF3uaEVppiZuGRTC342xeyQ5fq9mJcPFBLNawYM87yzDqiiFEShi8j6qrFiE8jvKyCFM5mjh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HGKGeL2QioRoSHsRdFJF7VrfHoo2L9LTcsrQwuenPr7Uf7qNW8txXrgJq62NJAyo1YR4d6daR1cJ7XER6RH8RVz",
  "key1": "vv5qGGwv9qVLAxUG1obriv3o1ZpmjRfjQZpajLnvwzCPJwWxjYj9bUQN5DquKJ2hEeaqaP2MYJ2dieJERFP7Lrv",
  "key2": "3iVFXCXZt3zCN8A9C3cPvzEvfDAQ8r42pM9HJL6P1fmxTzGtJv5CwXkAQskFg9h1agp4NSRUMdEBnGMjpkgbE2BV",
  "key3": "5kFWQFcPRPfcWGjV4iZwRDWPUnz7pTSKjjEAqn5nYydtUvLqZfGSnJ7g89Lx5f7UqHkEDhGTAgzCP2EP1oQaFcjk",
  "key4": "bhvfFQSnKJQ9hmRNpJJheCQZTQD2vcgyWPnCtvQ2M9HMVherYqyExymi345mruaPYb5ZM6eQG6ZtRhVUhhsQjTi",
  "key5": "32cq9zs6ee3wQVvXG33U3GRVksxmbse1bXEHoa5GBhqPn9yMxGpCTSZf8eFkf24uGPrn4eRwvnbyi9VcrSgJCsy6",
  "key6": "5iZQkrvgVaPFYAj3M8gSUdtsWJmHH3LkmQhugduSmgYTyJ8bKGwR6ezbpmKbT2KcwiX6NjNGnSkyUGAUayuBLhJ9",
  "key7": "5aiNgZarQgFoA63o9SsiUEdtQnjJ1baS1LScKnPSLdaL7gvs6NMtH9cjy7KSMVCeqnG13WzKZUCek2cs11xjCKCz",
  "key8": "5jRoqVczzU7wzA7wunxxYeK6W29PnY27Rs9miueJmLr7cVF9FBGDFDHPviNrCB5oQzidrG2SKnZkYbBFmavWsRy5",
  "key9": "59fSfKibDjr1Upcvu3nYRFwBASPzxCjoZuRWWanEhVrg93ndvLPbT2xys7TAYZcbHvZtBeyWQdryRffUsf3fshGe",
  "key10": "42QeGHxAKmGuCMfVwxD1SBUFuhv6Bkz1qb5mHif1fKyadTAL5CZ6NsZCSFXwWZVwrkoVr51rAib3xXXTMWA9C5wH",
  "key11": "2vbszaBSTXBgPSck6ncq9WGRq7Sh914JUgS6ds3vprXG7A9UNhZUXNcS9hFx5WvAyhF7a56V3KubjUompzpgfXtR",
  "key12": "kQe71Z9pHkkpvKkXF2utqVEsC3enKBYEn3uPMXNuUpGHuExzN4xzzh19sRZtjptZCHwakD7MBcKm76JSfs92x4C",
  "key13": "2En5c2HSJFL2V8YmtBe9nwWwM5yvHxu9UJvzcLXWZsMBCAXHc6XJGUiqQrKVRhs6RttyVoLTjanRXEL1pByQh8YR",
  "key14": "4U4kgkFwGPgxc5qVucnfqND6swtWVxzzJtfgsBkhV5iJpU8R9VyyrnHG1tRu9yAX61yF71yGZwSmsGduVRnzQfPT",
  "key15": "23fZbTCwsExzZg5fEEmQp33YKcTasWgYkGjcJbDTZWz3N8YUrD2KooZ7J5a59K82Uh37ZQFofAD8t8aW8vSwsBLK",
  "key16": "4X9xzdzKi5hX8x9ECuTdVNbV81kGmyTT1cXufrTeWscsPpA8esNzSkcG5nPJ4JQcph72AypbEXJks9EFErdpxPyH",
  "key17": "UU27Uab5tA42Ke7oNMVymMz4HzABYd4HLGde24VKNFKmpSWw2fmJxXM358tRV6ebtdvecB3Nbc7pkpYTtVR4UQw",
  "key18": "cfq2SfBkAim6tueXVh1EDs5tFAA9iva5m5SnJVLtxYWTFNrghiJn4FXVBTde4i7GWHtxA2hFHRtX52nK5DkFkLf",
  "key19": "31PmGZXnqc9APfBN32ovoSZzph7S3S4kqSqYi3Gj4u3pqbqMeNfhtJgXaQW53H5M7PruqpzRBKBGxj2goNnDzpev",
  "key20": "3aX2254qkEteSQ3By559bU5kbSgwhMQK8XPk7dTfV8v47uWjidePUcZQnWwLoF6QGnww2pMe1oG4DMuxhEpp5yqS",
  "key21": "5YksCwK2KwZEV2uHAiFyrZKhZcQiQfGPvfP82nA6SVJHQzBbWysikFfpaYMxMhfg56vV6QhbqRfpucMUUwQJQs7X",
  "key22": "2tWpB6UfnXL7uWRhUKZKRpGyw6DrNPDJrcT4nxvBCoVCGhFadSAQg8iSbDXFzysn4zktwEeS5jFqY6ApDZbDTG1o",
  "key23": "2EZjYwFP26ygeKBZRwvCGFKeTc27mUMwGQrGUVBc7DECTY3wJGyuzR6HpGvWZbGEDpU7dpUPziQURyFHAmZrNBxJ",
  "key24": "G1qhDskbrsnKA3QQFqSZ9yyGFTmHms1g2S72EpMnaibHVhcGkNBm9PXRsvYoP32yyGPwDFCiE6MBiSTCf4H727B",
  "key25": "4KUEDzFU8qgerL5SsCzoEVPVhw9c4MorNrqcXziB1vDyET8fWCekaqYwv6xiYF5xFiUPAQdKJ8Pu9jthcvQLpfhM"
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
