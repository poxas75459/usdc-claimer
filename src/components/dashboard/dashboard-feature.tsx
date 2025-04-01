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
    "eHh54uQN45cUTGdY9vyoRQsxd6hdf7kdhbCf9rh5BzPojE5kS241L7dnRP1P4Rf8HEQMz89sH5AvYMLotttvQPz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WsUq2n4raYgnnrtaPbVmBiDZ8yQQxBcHXjDsrU5pVwqE2j3aL4Rq3AFvm1NeHsVyG9dSUjpHyeoHXuMak353jfz",
  "key1": "48JWUVhVVWniHMZpB9VxehwoffpTfUQyEcLAboqm72p9ymDVfiutP5LYWSWTVD7B9KSxpUfzDPfvzhN17nCQDP4h",
  "key2": "4skJAWkVZjmQZ6QVP4V5SWQvHcbTNPacZmA42ZZ4DjsEz1G2oCcCyZPScGb7pt8aWWNUG4kSPGiusSYksMC9gmNt",
  "key3": "U1U6GS1HkPP4ihPx5ZKEHsMC6uyzNeVM4jL9bYCyVGoQxHuDxPWpVLutkKVENtJmtTpVXUt1DFeiwEDJH3Pzj1z",
  "key4": "AWR5qjyqmkQEkgbuV5sBThT5GdjC4oV7SdHxSje9bLaVgT8tvhNSot9zJ9B9csxTw6dhFYucw1tkAYVqGooMsVL",
  "key5": "235RqCcHGFEMGjYMfCg4BickFcfeTqvMKwH5dmRFF6sXf2nh6Po9i4wApHqofjLcdTH7reaKmYji6nhTmDczuG8w",
  "key6": "3ip4CZXbaWPfttn5mDXqdh6tedsj9kXxPhEsKF9DstWGfTSGnLfh8Xmk88M8sKjsKz3xXmG3WrSjESYGowK9z8gu",
  "key7": "24f89DPn8JxJ5BhtMKeBWnLZ4WgS2A86baPnFUhfjMQobLz5zoa2e8FKKeyAxdYYjSyzJnGMCeypzpThvsL3dk3K",
  "key8": "mCEq65FxZoyEQCsboKy8nqjzowKACXhYgV5QxwXQgN6vJ5LLN1dLJjmgvswGL6xVhUyr9fA3wh84ANRoNFXaQyR",
  "key9": "4BDA6BhGYTcueXwUNtRp9gLb8SbNKjUm3r8mzf3xaFUDTSyB9b5gngULCW2HsvmDUngqWUfRRi3b1ZmfEzEkhz6A",
  "key10": "GVimge8pipsdmuKYSHqoKjN7prtitpqKm5P56dghTK5ph7AiGVJ3TfKqu6Hxyy9xq6CC5Fb4ndkMduo1jwoY9C3",
  "key11": "3MN6qzdGp8meZSurJaAcwUYLaHP493wD1KHpiZsLU6yWRpi9MfMENnnzPdbYdv9dksUeQ4Wdt8wG4QCCPFRmodoA",
  "key12": "4Tr3FZAaG1gGL6nebucSHYx7tGx7vazWeK6XXaPnCo4U92Ejnfzw8f9z938S7fwovftX3JUfZCdYaG9aXSNCqv3a",
  "key13": "4w4W3bAXbdTcQzj6XjCbzySWjBDRLDCJsGWJ6GCpkshHNZMPGUgq3rEEcFktoqZ9LHQGjn5uQyXtkj1Vv8uDQK92",
  "key14": "MTRaz17RvZbTxRsTZU4uXUrviP9o4QHnkQJ8BkvS9LPpXVM5icvEPK5vXwTTZspmbDoeT9DKFghHWj19iU4rUfR",
  "key15": "4ryFyKFEaGdk1b2VApzauCiskt9rE4C5wjyKHdU6iLGMi9gx2JNLASN1g6vpXAs1JyRQz8Ji5wgBoyYUoo69iy11",
  "key16": "bz9HoYeYnd9xYr1wWMh5qwPf7Wm93XSA7BEMmnGwyCmrpDcnC7mPf6PhnaigZnyzmDzZm2BrLun948aMG49twZG",
  "key17": "5Krn3e7E29R2YQJFUrCJ53xdWKyHRtqNAJEG8DhKz1KPWBLCH1SxaTnW4ABgBwPazcqvNwyw3cr924rzD9r4jXZ2",
  "key18": "54XJMwdQKdSy5wZYbCszpsAy72ftFYJqyebr1dTiPnt3btNjrTJ3ntdboYdUbLgfdHMz4SC6gm9RD9gmAHeGAcrd",
  "key19": "4Xe9VhLDmTNnWjxdx6mGdLK7vKU6Adw2vJgvcNMnxZEQS1tjuRpj8gsDeSzxw3KDFmQxchrxNtEbvHWAahAymSM",
  "key20": "2VGhexcfyy8cW1YNfjFreP4WJTHH3R5ArPeZareWEtmtfVhAi2zDiSGfXWrhsxbRJKr7qyJVdamc8Ab2hPRbQBv4",
  "key21": "63FkJ2t7W8hk97KhQPG1kAAqsdCWWQNm9QTZFJcPtL82FTxwrsktN7DrDrpvGcxHcshHMUfgT6f3xDu3iVt6NCoa",
  "key22": "3fBAJvRDGwexmu8hTSZh82HboQrkGWQZ8GqmVrB8wRs2duHicH54ZATuv78QT2fbxju9WojSmJMbcr3kY5bdHEXH",
  "key23": "4ovxXE3hmYwkk6bjPx9qkwRNBXAq2PNkNCfPBSjzvmYxZqjcgDCd6AXa4qFD9x2vB7RsrSeWF6HYSy9Y7Xpk2w4j",
  "key24": "7TXyKWPyTYwxfYYg9XcGb1giGaZkHjVdd5Ewb9mhxiUSXKDFL7XvNKFrCs86XktbebvFhL2v326skzH6JKavnBC",
  "key25": "5PWELsMyayrdnmSE9EgkG8eC32xzLdmcNwVBRjgS5jFq5wo3mqYmjcRw8Y93cStufxuCju3meo98o9Ly1TTA71xM",
  "key26": "4RVkFQsxFS86dFFHXpNNS11gBm8bArVxKaPmucdjTgaFoca7Be73fbaEMWGCBNihdx7nW1djsyHiJWMswXyZSveu",
  "key27": "2rkkLzTHcLnZnCueMMDpNSFvUQQnDJn4gGSuy7rZHUPMC3GBfq1Ni1VuapS7AS9Mdw8r52JMsteoiDT4WySCNSAV",
  "key28": "36r4WN2GJE3vgptNjLQqBj7hm8JUd7R3HHJH1Wo2RAmrQvmtrbSwwB7Vvm9Qxv3YaNr8whiCQWMmHoFFXV4eSPjc",
  "key29": "5kNYjyHFj6ziDWbn4wW38hg5nZHK3TropURTLrkmDKYm3vdKkC7WpyosnYyNBWMqcbYYh3WZBJxrFqrXAQovfJ4v",
  "key30": "3YKEpZ3w3rzryuNoxbtJP3dqitmynHzFYfKL1bx5Lz3g4geSEhb9DgvPNveMvMYeehHheFWS3C8i4shb1SPtN58j",
  "key31": "3ebMSHoRBAzfdP1Yq8TH2UYjyR8VaSYcjoPbHB1ZAQBj7rbg7182VGDosHrPemLaxaURUeA1NHm3xfmv1koJvB1n",
  "key32": "5g1T6VfVjXUj46uXWKCCLNwbDt2DvesZYvdG8pfGybQUnvT4Kbaok5LYUQNokByj2dBULXVvhUuasLwgRnU1vBZr",
  "key33": "4BnwQM8cnUfMxYGNRJbLyyYCRhXT4N5g2LCkHwrBagYe4QELAhumnjubP4NthU1GHBGp81Fz33YnWzZdtpLQbrK4",
  "key34": "2hjdgzBBhShcnQHLkBi9bbeTqZKJKR5EuiNhypsEEcJkMh9Wz74dLFxGkeD9uhXtuAmdGfm1gndmaKBWaXqWY9Ri",
  "key35": "3A8hc37KjtgnHiVTZXbvdkJi3aL398cj2cq2jAwwGKbZn6u5WPZQ88X2opab6W7uPMxecJ3bdFrRA6vLr1ue6kWC",
  "key36": "5FBTMUDytCnGFEzjNWSgjrKT3QJqTXbZthVHPocExaDxV1excCVjeMcyu4HN2UJW9ZqRjUKBQsvc1Rjtm28rV7Fn",
  "key37": "2EP12BzS1g9xS17c51h9Mt1BURXfEstTXk7sRtFhJyvHYkdAr56FVhxpnNoqdKFz8MLc95SRFmds2DC2jP7eWyiT",
  "key38": "4LmcCzynVtRANyFmAc14dTXjRev4MyhdN9GFo73fFskrkdqYagKw5QHR1dNbUHCngatscnA4JBUVYrVi3sBmM5Yz",
  "key39": "4spD7awJrxbFB9zQ4HzU2ZdC3cr1nZyJqcqEWxoNKMtBBft3YUaiyx2Qy9G63Vxx335mjYpsTv9KspAzWNbomign",
  "key40": "3kCS2a8u3EfbDG8ZRRtUuhP4K6eMY5opV8P2EMRxBdTqq1PMy3Xs1RYSHhd7d6MjyGy1fKT5ZF6VssTgJ1JHwo6Y",
  "key41": "5QekZpvL542Pt1iYTnLscguAo9Yk1rhDbVnWhh1Lvx33cQExJRbRo2jtVAUQggAu8amGnLD5w41bKjj5jZD7NiED",
  "key42": "293iiwXzBw7Ef4Tk6xM5ZA42ZQQzPg75nFvyCHKZiZLSHXquSVXEJUSbKAEVinPZMTxDTSHrTEpLD4jymTWqbguC"
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
