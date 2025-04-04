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
    "4mo5sikFRasNoVZqk1MnFT1cgSx3vX4ULnsCRi2wHLGgbWFkQX8Kr8k5aU8FSstoe5QatYEt6dnAyt7XAXmggy4F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wV1HEn7xnE7YTMyPdA9zC54zCkDAMZFFwGN2n8VjUUprY6ifY9K8iJKrt6kRiEkSCT6yMpYpyiREoPLxP4EAjmf",
  "key1": "3mf6DEYGemSPVYh6so1GA1Y6V4CoGrh3dtcJLLTPuL8hUs92QTXzCmHpmxBvpnGozYercxFmDEGKvWToyz2UAfp9",
  "key2": "38wthmnducPMFSpHeTBXa9dwDoAbXGezy3YDDsjvTkRZQBzVMoXp8M6usRPrWjj8Bd8AuLjUG5zhBJAGXXvfE97F",
  "key3": "5Ugvo89RKAXzxebU6sF38eWkaiuo2a3Jbm6ZFgdwKY7qJeUgM1mhJMr8WEWc4Mnzo9ELFBEvX83gkiihhHaQemQe",
  "key4": "3V19tWs6UGkTymZTRnHEjUqoUAubsBzrNmzR1JvBqhsQWhY4ZSXXJnNDTrLUHEZpHo7BVDkxERmFA8gXxK9QtC4j",
  "key5": "65mS2rcG7YF33ki8kwfSGBCtsVqeFpAw9KezK6mWLfkb6vxHVQijkwFvsX13HjuMkwz6Cok9BP1oESkLHfrY8VqA",
  "key6": "5co75XFkP4mmMemPv2W89Vgr5WAWBk94kGAqx4JTTJaR2UxgKVQzdpXqtNHAybsqHUiVJgJgiW2C5ZxTsMBRYYeM",
  "key7": "26TkqBiTjQLFRWo38FV28L1ZPw3NbGdSeeNz18d9nNRfGv53Y4X6DVyBwt5qSjQqsMD9MP1vKWo23yKPWGAq5SSr",
  "key8": "5a3qvpjCqY7sbxRzJWPyspTz2eo9bDGX9NcxqN7QquJ3jV27BGbfnT9C8QtzfjZXQhZbHKTVDV9syJ2qoP3E2Nws",
  "key9": "56j8Y7wXkR1Ut8XzqC1VxVgF4cgAeoLCVZNjCsHirk94YQxALRMQGr9UgPR3FfghQUXsRusqj4fM22NABdYvbpu7",
  "key10": "3aU6CZnWoCTewbctjBMAWXcRTQRRMJTiZ7R8VhacC5v3x7EpKs8VqdvonRhns4FzSHFvVSDvGLdzCqr8YR3THT2T",
  "key11": "52c9xX8Su6v91Wqsf1s9LxBZZ6qiDpu2CDaVNg8sGv4svMgxRNpNTjqgPLvts2J77ULTSuqYTeA3FPYxFdJELqDn",
  "key12": "2J5RGyvMJEvjAHFPBkEnzHt5Y3cgr1yVVm6QHSSRsUdGuHM2LzZM3ucTCdssetntbpB6xt2f4zH74M2CLGxKheEB",
  "key13": "sFPYJYFKmrVv3rFpcBxVzr3SoA6s44LZgRTM8NHm3FMfAYZCab9r4XGpfA1VsYqW9Cwd56FWZxmiwtVeFyBW3oV",
  "key14": "6pAtSjPkGbXNZR1ZabkEhkea5ouLpbpFNjq6RK75KG4T9Hyb78zkebsN8PCbmjFHfPQaKEtKC1w6FiY2aFbRfYu",
  "key15": "MUwqqYSudaA2fPocB3BZKgYHPyiYWr9g7kFKgkNxNSzjiE4KhgutGaR7omwmfXyPvToo6W1xsdvZSNBVxBRPvyJ",
  "key16": "2939guwTgQVmN6HF3KzPinnGdgkrsY8YJ5joLCUAvTTuthSrWkYyoe9cjqg2t6b4vSYmhAdegYKewZSnGGZtMEMh",
  "key17": "52VZALvx5jSroVmdawmoKsoGS33z5yZRUHHR9DV7g13Bb37xCaLi5neAsYN8Dyi5knbvcusX5vYKc5n1Gb7aSvgE",
  "key18": "5qdua8kGxiDUPCgP9eiusUberQxv7xjuWtxA7QtGHN3FaUSW2tnM3HUU86Waakzc1CKgzWpnJVDAz6Y7Ln1P7iyu",
  "key19": "43t8ZanmmtZ1sZodZpZ3rJjnJRzv7VDB4sXbU9sfgvyTDDrmsP1x9TGVw5LRtMUQDAacojM8tHvEcguRMZSpouDQ",
  "key20": "3h9VZBZTxSeqYa2pnSqsiYvaZHAAcUyrrFCBeHAYhwK3RjfJawxSUqgdQpcL8gGYhr2qgt3kzzVkP1xt6Y39rp1p",
  "key21": "3QZayVqSworRos4uG2S8A7gbHzjdM8K3NQrQgAj6xjdJGwY5zwErsTTCeWicBUb8NpBbQfSaL3y97ZVq16m3fgCy",
  "key22": "2P6Njw1zx1xpuf9bE9qTFqiCm6uMpWr3D2gD7by21SfrXvp45cKTK1ENoyLRkin3maB7XDn4eN5aUifs8dwHtfU6",
  "key23": "5jzyVx5fGsepjXTnhwSVutRvZQmzLpXuV4necbEfobp6uhdXhBnsL6Lr7vs1EMCbrmj2L2kvZ75turawAJHTMhuM",
  "key24": "47Chu5XZbUim3Y3rmivtBgN9RijK7coADLu8XvhuiAtX5kpsJEYYo5gXkYQNCG9mV7d4gPSZoMvgVyRt8UzcurZm",
  "key25": "5JXMRwzs5fCCjjc1ZYktT6dp4GfkWJgoCsCKHotLZo4mw6LvnsoPE1kyoJZDaQVEyavd4KrG3GZHY1uzsCQk9JYg",
  "key26": "5TjAoTYWxszsceXMYM93Jvebq2vTRjfvzyoFzYSt4Y7vGWqc4fAFxeWpL9sskiMZa5926aQF1jCPKbuyLkVLHYv6",
  "key27": "kh3TjMsy6QPHzRNcnTvE3ZLa9Qi9yUvVZa8Qyf6dmStSVBJnFGrjsFhi1FktXT6D9BLtG8Vvzxya69GNVWo849f",
  "key28": "4NFrFVpnS5sidzuAJk8FKcZVX39p9wpW7R6yfPfKZfo8vkM6apDQAxiVDGBPC4KBtbhUcNcBjk8tJJ1Dt9SwQNPu",
  "key29": "4QFBpZC5MBq9Mx26w48TPcjj4TBJ79LmzHndY7QynMNvEqJsKHtm3YZU3mjUrfGwf8i1qaFdo3MSWDukXm1AW88S",
  "key30": "4nPV6QijKiaLFTm4X2btqqxAtMWgPPERwveFBnjinWyddspCWwHb86jmeoPeimpmsyUnhAn8QLSu4mgEZwkQzwYU",
  "key31": "2LkjufeGotUFxD5iuhQmmfoaK6imqzGgLJ5dUMUgZLogLfWvKAff1R7FAqy986HLegxTDiXF4Jq19WR1FGgnXCgX",
  "key32": "4uYj2HLDx3uWBKWA79moEx7b5x5dWRsaoRc3xr9c15vrN7opHYTFhCyzSaApEbBMZUFUU5KSDhAU2QoJcNPDizUi",
  "key33": "2khutrfagj8DMAuJXT9CBHmt4F6dMjeHMtDR4jXTtF4hszzNtQ5MCk8nPRHXmMpxvsg8aNR81aqbycKfYX5ancau",
  "key34": "KFoP8v55paqKocjMhbArghWF6QTgrDW5mbSmtwzMYsBxd7YmwmBQBjUMZEBwa8WfvZCU8DWCexWaMn9x5QUXAVc",
  "key35": "2R4TiHMSwtR6shPukaQ3qBoS2wheDoN7v67Lb67FaDCYpdovYVGT9cNhxM72qrwR1AgASv9hNGaqHZbeBUe8BcFW",
  "key36": "2iAWYfSJyNSYYAJUTeFcisiSkhyBDMyMmoEAkyE6TcQHq55To8jog42LJ45GHESYvHisBbPnqrLwf1sYZHTqXg8K"
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
