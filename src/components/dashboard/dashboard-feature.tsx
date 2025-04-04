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
    "4yrbuP6C2s211tGNtTAF7pQ5hMRww2Byb6Z1dHSWw1ZmBMtu51eA9xmMmZPtjtU5zDuwUQvaWNx9VHsRGbZUDTNY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a2A4wS9y4D5dg8pEcTnCcskDWe4frLgDAJHe21GUsAUu44tNegjpFPszNFtopoTvisZ43iMirHQxNiHMhtsH7Qq",
  "key1": "uL1AtRTxG2MwWDbhVi79pX3WhtKcCfpyuYWbvorBFtxM6b3mTmKrgF1rc5cm9jiH1PLVnikqVDzVYA5STT9ZKsL",
  "key2": "iH4KhBbuVfPgRCD8Q3MHQ2PSJNa7KCMxpbPVaSwucvm6bpaqNjLMQ7DCrtx4rogHHDBQUdfzmuDKd81ddGMzwM1",
  "key3": "3YWVd9xKUzim8NMRvQKUXCJF7yUxVn4JtBELyUKLsvidhUNsgnYW9mNqxadwuETwAXuyjtbda35EqkBZvcsiyavY",
  "key4": "T5VnRsiVXGHE73aNUwi3HxjLg4S7qHNnDzo16nXsKnZFwGz6t3CJYJpbsNPBGoi7zKNSY2GonTGm554NpZs8oVR",
  "key5": "hmnZpzX2UEk7L9gKPxTKhviTxWjwQNewBUG5QoNiWxhyc9bWB5p7GmZ8FGcrdtbvsNyjJoJmp4XiK7jYsVa34Vh",
  "key6": "3uTmAiYYsYZnYrzaXyStQe9fyutP2AjV61JcFRqUPDdSRq4xPGLVE5Zpz3iKkzAKvYAKo9YiuPPLvNWbJNvJ6Z3o",
  "key7": "3hvFKHeJ9fUZy5tUV5bEC3463562cRncLsfpyQ4TNJQrHwtAhjamv7zrMghXZbyvxt1KMipeggqRy86Wrmy77Nvw",
  "key8": "dkxeXeXBDhX6vsCa7cKaULe6omM8WDF24wJZ8DS2QzVU1arWtL8HimMvkRK4huNgsGDwbXnkg9tCm9jrVz4jpZr",
  "key9": "3PZ9REHMfCgu9dwhHBneGGQ2BCa82HvmmiaXSyX7BypnxHDB6i6FtcNNK5sVY9qyE9GgTdjsmg1MGuULUEYzavVa",
  "key10": "438mErL7tfdmc2rZTSpWLBAvJTsBVDNWFSVudHJYYJM3cSkmMNdxP8vE8CePEiMWzkzam74YqZoRDrV71DRQTmby",
  "key11": "56mwErD4BbpSsoYRq6d8icXYz1diKvxYDwGt2XgEErXqLSajsfWFsm3HvaLwVrnEAic6ydL85JmdYSmmqFhLbQGd",
  "key12": "5Mvi79wQeBaKLgviAHTXVoUHYFzBb5ECeTMzN6FNvgjzeEh3AswfWY6yxb532kUdqBKvzDaaaoLzLQJKiJQ2aUxu",
  "key13": "3ACVxSFDagf9FUjZs89FMLnZtgWPdhUNTdYLDwMXZ7ccB1TnAfhkrtbF91pSFRPJx3WUSxVqV2ah175orxvzGPbr",
  "key14": "41DbR1bDxUL4tiqPKm5ECmYPPMBaLzuwZBqVs6FXkewxz3jc5yhLEJR8KbSxfa3sx2NRmej83XBePRJCt4VPoGfw",
  "key15": "3sqTCoq1XuHCXrZ9fqXwSZSTUQe5iTerbkpSASfvxYcHNupjXH7PbHpb8vsESGCZj3NrEKnYKyRcQGU1NzZ1YBx2",
  "key16": "5n8FFhGQBN6c9meQQouyJuoFxVPNFFu178CjYv7MZbBVigXCDJGTxUaw1gQ9BjV15wFkJqHzn4hz1r3cNFtesBMm",
  "key17": "3dUUd1ngd9JV5om28bV917cdbbefgr5zigwkTiuQ9w7fnqLJ1xDJeENwq4MSyN9Ny9oTEqA1sKzK34j1ijkgF1LA",
  "key18": "3nkTLF7JKAfqe1aXtpyXxmffLajDFbnWncL7kAUEarUpjp5JxfMpYsGUhgSQjufNVd9buaNnnnZ5iVUqvvrvX7wj",
  "key19": "3M1Kka9JYPUnt7hRSairSsEmHP61QtEEu8YHUsqnw6vxornRhQHwJ8nb84oZ834nZEAq8cB7kMibsY22e94zTiad",
  "key20": "4zrXuXzj7EsfJAydpvrbSgYU7yKH6fq9S1CPBFJwLjuafK3jRgJkzwjSsBLzb5FChDiN7K4Q2cJprqaqbforYk3B",
  "key21": "2UTYbxbJRZWptiKtcfVay7eFxFJeHRLtJFka8YKFhQj1hVdy9kMMrVN8b2hjUC5Mr8CSji7kJw1b8fvWPiJN71nx",
  "key22": "4TR2zQ3d5a123LNGDNqRQRYpBfDVHU6DESecGjKJLfMvjXVWReGKnfREMgFHVzHNLrBMF4fTSF2NC4eCUGf5A6U4",
  "key23": "E5q4ix5adsLndtJtV9wg4BCrnypvPPDUhQpAGwGvfPMmXyUqtTiUW76SBX5sq4qFdaGxgb7xBr5p2CdiahcN3Y7",
  "key24": "4weg8yKKkF6FPTvDN2XaMHEFsdsP2DRvKFzhEBHfxTbQgmAncrPcccTWnHgB4nnaeXkg8ph2MBxKyYxzdQ6uQjTr",
  "key25": "fAqrMGn8YkB8NUBQjnssvKAuKLRG5yNUsJpqUAGzNLcV59tNGBYTfa4t7kTuHenhkNwtLvxyi1qobooWDKEuDvi",
  "key26": "3iBAYrMj9VUk9tTvKgUPBAKMLXGvFUCFQWAAsnH9DGisA9R6fyM4Bn6CS2nhUqPLWFvQXcR51oDY27GrxfCWMXLe"
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
