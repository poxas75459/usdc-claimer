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
    "3xa8Tir9pqDuGonN9ZPVAqWb1KX9o4U4ztstCNZBusDxSk7fQWqDbjeJWv34DT1xZhQM4RQuFd4FdVAGjKHLDEiV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LtfjmLrAw68dJcqijum7VkwEUCtop63JhFqouHo97uPeoJPApWFf35BcAkBuqdEBnBQXrAi7cKfSMzsUb82L8Tk",
  "key1": "5Ac96tpdJgtYXk4zp55TdKFieLmbr4hzXJ5BCqHWYxjmRLSvK8nRbL3Gi4epAoVijw6Jx9Ldj85r9UHW7F3BVbm7",
  "key2": "5csHsjYdBdc4tfZ66H1Xbwk8awb2JjtK4BGBcTNKRrUMrRsLcxUfGAmtC6y6xwYrGKYXmoUBo4Up12gdVUnkbe4c",
  "key3": "2p8UnUXn9rgGgmfF7gSGvJXiBX2kotKoKbkPpgu2J4NWz4p8Bkm14HzFTQCwKapFuJUPAhSJdx6sNRVjXPWnV2gR",
  "key4": "4wTH8rCR5NhXeeVH4fTKMP5oYvq1wZFfV2oPAo4rNRR8ZUEqgdreUBdtx87jrM1Tw45Joz96tgD6q9G7k2ZD2gNu",
  "key5": "HJZ9Fvjuz6uDyfhhWsr4Y5Kn9teHy6AGVzWFNTJZEEBLs21KY4nsPm4xDCqEc9CEb1bDuKoNiC7X4LH3qeB3o4p",
  "key6": "26PCTTr7EmiJYYgvYje6hVNQv7hrwDLpjxKasoeZWcvyDz6uRGCeKH5c7byRxQTjzR5NPdpiAzZBNPheG19pC3CS",
  "key7": "42BfpWeo4GfZAuEm1SBsyKgb4A3cdvqHZSnE8btQjhykjgg3P3No4VgNanSTVbBiN1gUrEvz8dDtyhi11ZnMneZg",
  "key8": "5nU52HFnTM2fHmMtu8dc5najDVMuaEvWhUe4PPTN6GiYDmm1qZbTV7s5c5mLfwM41v64vSzw9rKDetP2srm2qtuP",
  "key9": "2QWCVEPMXW9YST5Kjx6sPyHFhWhHWSZ4Ja6aot9bXL1sLrw1ZXSdAe9u5cww8kH7qxZNHeYTQKTJ4MhBMHGTyiud",
  "key10": "a53fbyGTEbr35eUbztVWSmLxAxFZscoPr2QFWzRkZF1Rx7fmGrVTTZjms4C8uDoPE7rbYVMZrWrpG3mvqkrJxVv",
  "key11": "4JCevtH5aT31Za7QQ7PxRkGjNd4EAB9X9CyeaCc9y1XmNfyoStovwAHjvE7bgL9eMa9Pg4VeB4ndJCrLaKbNX5mn",
  "key12": "46mdE6XoFrRyK8xGobzXPfPMoeCr6k1yzvudkKZqe2euvy3ruGzxMqrZ9FiF5XxBsGwQ9724q9MqfaMNsMpdQX77",
  "key13": "5YHRYCEdvkRg7hqm8N2rNMggdz1XtVCGdeHxNus8XaVNNGBNBWZvhWmzmbuqjL53apbRujAbrqbGuurRNTaBKjNG",
  "key14": "451NjYKtCTmdukbxZWzSEBAG1xmcNbRNppkNeqrGwUZLNgnoMYymKgftr1CTrDtVbEPp8zzzRfwxDNiZDAezd5hQ",
  "key15": "5doSYCRY8aX6z1T9cfHUE4LqjL2PG4vV6LAX5b8G4PqxYKhRYUXGsUwdTemnpAfpK6vPz97K7AivhQ5FydJdwbaC",
  "key16": "3ywvQjdnHTcYWtTXL2VQ128rfVqs3LM3VRppvWeSQPn5xvpnRmFp3P96fU3Q6pCzXBfRao7b7nrnyxfgYYtic3cS",
  "key17": "3tQCT7uBJNHVaE4KodjyUEtxCoAsTremNrkEqFYNM1ncsLTB188SjZV2zAF1LpoVaRzhtMUDBV287SMoYwmqBzfP",
  "key18": "41aagRW7DVjfW9sc4Bwoy9RkefiCqL19Cfrtgw1cbPJXFXpWNFype1U6WsJYb4xn77g77FejqWt5CXQQLGFHk3zH",
  "key19": "2VFwCKTFJ3wjTH68CZ3ftLC3qHc9kusWGULQT6gqoJtztqhoP68GqozfkJNP48rwDUshP5PYYoqJznkSU9KdowYX",
  "key20": "3gXvaWuTgDwpXMiYSzs3UpY9YywFkEmAmEpkVDsg782aH2oESpZFJeSaKGmXSDK8jLH1afXQVRWawLfjtvCXNybh",
  "key21": "3d97k3FN3zanYLBhdqPKjnmrcri3JzrVxQyPvH3eJTo88awC49kj1dLSjojB1k1Ahrzu57ku7Ff6uFGuZsifr7qV",
  "key22": "3xtTnuwzaXmh7QsBLPY4AFCsoC1N7GaF6RYebR7jYEYJYtmPPPQbcY6gUoh6S9NwsYRG64tZCWv8KFTNx72D4EWn",
  "key23": "5mj7aAefpAYYyAAxCyhUsm8FxMmKRf19ALKuRUZwLN4RLnvLnybMB8GLoVQTm8KGkQpXTUHNBJmL7CSbZXNep6uK",
  "key24": "3j73T7mse14QDcJPEm79Sjg3jYWJrWNydNDHhgakvmTwMcz3hMRnaTzqdaSXS3sFJVzdMpJU7j22LyLFyAaYF1sr",
  "key25": "FWBpA4pq6nQ62EZqqGzg5bKp2yevZ4QdvzNGUAXEE8M5xvKncx9VWGEtBc6P8tYAhh4h6akaNWFvcp6N9HRtaAc",
  "key26": "4kKiX5CXyLGmpoGinG9SxPGaT5fEDMVEfBQfGtyVoWrJJKdWvczLGDH9NKTuKEfe56xAoPZ8JoQ5ABooqSWnRMZz",
  "key27": "VzMWvPJ7Z4MrtS5FDxAoQYyL7T53PVK86nGtdLDoQdKHiTVRmTpntX1xLLJ8duoSVNTv5p1gicd99m196Yij8wd",
  "key28": "4xnckkWPQ45C3KUz9LUUY9gpLW4SeipWUskgp2jBN9RdiGqBAjLoGDfLgd5i3TojM7R617PWBqCyrsoFcdsWiEeP"
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
