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
    "2f2JwYTNdSgmerFiaiAQjqEDzv8JHHmZA6qyYrL5ZN6UnxuvX5p5mRGv5X6j1cTUBCpQJj4sqCP7uSiHwP9zEyMj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SaKoEB7cXmTBCGGMmypiRRCJEyeKFgi6Yg6jqWwYDt9PGDfM2VjBA8KrzykcZSWxGxZeAaKGFcj7VmhhnBH8tNZ",
  "key1": "4wb5RQfNtoPVqFMKxCLE8aqvYJHZQGZswAm7mzY3XfaYUUQcCMYMuQ3mYT3QfbM6ooWoofQJreLWwRqhbA9iB36f",
  "key2": "qFNN8Dm2ay35maMuq81gsEUhBL8Co5YEEAtcQLcAqx98QwLB6VktV9MQecaXfm6yUHV8L6PfKhG1VsbUBvE1voL",
  "key3": "phhaJV24TAjthskrLP8VB2h54ZqNRWHUCgbncWedFJutiRC5tSNEXAfWJVsNCEnbfpb6vy4HZAdD8Ai98SBA7vh",
  "key4": "Shv7stoxJCqvdZBbam7MaVCbpTw361f6E2jXRKkbqT6qEwMdnp6aoPh5z1FiM3cYDuxBJWdRtD97Tpg3K2shXa1",
  "key5": "AtUZgaXPnkGxYMKVB8WkRztJCUGBERYHT4DqGq774psLE9kKbXJAH1Z8TN6zHztRavcqUKiUq2LBcYw9vx1TehY",
  "key6": "3okQhVso7s78maRonkppwSF8tQU68K33Xez2h6NL7pm55uP9L5RewaijKgAA5PkEKML2NjGaMP6AREHNaYzCqU8p",
  "key7": "4YigUGrAbuaxxWnknAp1S1FZXiXRGyzdi2gemQWrmRDqfQqrURNRR4wNs4nEejoFeykutZE9xXg6Rm51zu7jBYJN",
  "key8": "7pVAw8GJE34enRYyDihTqKtFBnSBvwzS55ftnbsCHbcSUddZhmxN6ZrxnZnpwEcyJf9VDokXYgZbCRQQTfD3NB5",
  "key9": "38syBRWkmRr4gub6ECnmBNVRk337kdSjV7EGiBhqYM6xGJJSqnxkMfuBP8Hx2Rox7e52TsGXmiproTbwTcMKjUa2",
  "key10": "3RMSRiZGQUDJ7rVRUaXrAQJoik7qq92wW9ZfwQUaHU8ABxCckuiYGSmk8i1CaeuLs7sGWhJbekCwJwCqVUABA1XV",
  "key11": "2dLFWTQiK4zkvsdEF2u3kTH2LarNrV4kAJLQQpnM9MjJeKmPkDTKvn1fTc1cLSttzwk1Bbad3XuyCMCkcMv5oBoH",
  "key12": "EXXkhXtdw3fnCGAx48mgjXZLhdTXxhWEe6nSYwekA5X3qPpaR4DPe8XWCKRLXBnuu5qqPqeyRpD77LbJZfBVJAd",
  "key13": "kjwYZT92nfXuQsqETxAyvQrSuFgyf1oZjzEJu2PMqMhV3MuHcRQkifCr6LHCaY7QPwbk8p8ecMvWsgbYnhQMrnw",
  "key14": "24sqf86v9vJ1wDQWFp26GqDaLD9pzut8Adj2h4EuHd6QTUhd4iA19UnuD9Bg6QYRzfmkK4XkGZ1N5s1DDGotE1qC",
  "key15": "4iR6veFmwZ8ZqTCuPtyNPgabD4Mr7uYBFZvj2uthKUPnfZqKAai2WsWmvPyTw57jmzhaMXCDwYLNigRTHCPRv2JD",
  "key16": "5mHnZscYTzEqq5sPvcC3PjBVy9rhte4B7s4cagdLBcw9EJs2eUCzbWUk1PzHqXMeZgdCif3ESjQvWTSb2Z25Scaj",
  "key17": "5YAADyMq6utXM9XJcDoZSkvugk3WHSAwmr2uDZPjbDyvVfr9LJ9vkZ9diCRp4zs5bzcj7r3PEgZGTNhUc84b5W81",
  "key18": "2WzqdnVTaDvsuATRncQv7YMNy9MLhYN7wa2zhxcEq4ZPTn5ywWGBU2mvdd33QbiNNf3vv71EnEv4N1cELTDCJesX",
  "key19": "23VkfNswjjAFGYtNLTUHDPmcFApTwTrHNSZ6UqgYkiVs5S3py6aN5eWCmLfyvWw6edfB5uDs32pomXWwjjEHiryx",
  "key20": "5siRrGWQsuG6bXZLqLDFkxTA9162iqLzthH9MjsZZcHSddsn2EnRgmsdHRjUr4R6qvVCQinK62Q5ddsN88cnySP",
  "key21": "42J3jM3rr8qQqmEjwTWmQR9RBQmse9dnDN7oiCTy17rf8EhnoL2arXzgmzubxviNKWXCRGCRqXr2gMVeS1RpfdAY",
  "key22": "4NF9dXQ7ZPSh4Ja6agXVxteRkXjR25ATePtCNhCanRVGwTJhD4TdAuGPm8SBFDGVYrPvYrxyA8nQHuFfuyiWhWHc",
  "key23": "wEnwfNid3pC15APJ3p934Y9LBGRyJR42WUrr3dnMjWxPyDXtdGdnEcYT8nH2PfW6yrnwfrhL1Y3FHN5TBmC55TP",
  "key24": "2fend9Jx5WQYXruWubgumowg6GpG53qSpuw46cuT6b7DXpwQkhYXEEaCi6UgQ8rw2bgtu1sBSJr2E2K6xFnVfac8",
  "key25": "2vy5jBVZpcbyFrZ5VeJB7rx25FX58Qy1ewa4XxGwPoAWUpmp2bHiywQuABQxyWzFSmu6BvAFGyHK88uqSmBWSfqE",
  "key26": "64rY2wvyMQethv4njrpnaiiqmQysiFimH77xstMNWDoN6w9bw62JP7HGFPKcLt46QtJgqXQxjBgdzvo2TuBCVv75"
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
