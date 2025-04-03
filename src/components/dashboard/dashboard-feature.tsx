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
    "5QMhaTJ97uZjJ1WZysPJRTB5WtfD8bNziPkEruJwGHGGu5va6PvUGqR7w5Xyae7QPVwJkV9JTK2ZKha56KbMUdxA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43nxR5aDYLe5PW4Q2E2uE8mucjSRGMmSWMQV8VEV75vBNWgd9QxV4LBs2BUifVWkTFQhutZVQcG1rJoY7M4gvzwA",
  "key1": "2Bi6h31AjC1jQqyTWqcuMtrHw4gkSkc4KYBCFu2qVmoYbpXQfSCSJVGsxtMbx3qbXCjJ8kSjNLXBfiaBBTMr2znK",
  "key2": "223MVa8zJJw3fvDL4HPZSLpveETXjVXqVnyeHssCoBbHCxjXVWeZCELXVNeLu54iHCnqA1DsomLiuWuBU4MF7Hr1",
  "key3": "4JhYty93M9Zvh4nQ746otQXe3aHaALwoRNg43kZs9fyfKHZygEwh8KmS1rkUswVVvxbqVuc4fGsnrLRyLqYknmdv",
  "key4": "AhhryGjD1H8pdEyqnTPNY2Hjeza5hoBzB6rnfj9rDbdXyB9F4YpGZqQMhXFjxNj9K9Y82WywtdqA5cNx8bimk4J",
  "key5": "61XaF9Q3svpzfxQmnwEaz295CqxqhjbGjkSCgdAL43GoaJGBnsJTGgZQZ1Yb67zm1Nk5EUxvN6sPkUCkDGKyzMek",
  "key6": "5C8yuV1XssJChbJxoEcEwcP3P9av8PyZCjkcpPKDU7NtjjepuZdGWnJqprEDVe7LThTWKGxADup9vc1swd8XLMXY",
  "key7": "vrxdCo6egx7GftvPWTEVyJDcrTkJFGcPzkkv4eV1DCSeE1zrijdjqZgRBcNybGb4GpQ8pKufxN34ZE9ae5zDsJK",
  "key8": "5aJLxGD8DjEPAH7ViTwHQDprFEZyz7SHzpqWhUF1qfsGAWg6EJiNnZ71qpPARHgzyiuF8jpLQnTgFvF72wff9Jvk",
  "key9": "64Lofhp9UULukjLRMxpGEhEfHUvS2cBgE9iZzUpthP7JdmaVverrhhg9X4QUKmVp1PNnVEjU1tmDSkjQVyRUUUuz",
  "key10": "3surugik8mNYuXXw3mrBADQuZHLtjsMBZerZmq7QpNZtw4mqZAqrv4snPfiiCW7DaVWTtf7ebYRLC3jit2VMs32Q",
  "key11": "4AoYifi3WxENodgDT9FDz8fxWhmHyD35SXUzjmF283B7kMLX1o8pGLqQnboLfJkkbxBzacMfHX2khxKy6m1d8PyX",
  "key12": "3J8j5W6UfdQCkAht9pn8jgL3QGve7vVD9gv6RBC2CmxCvdciaTtWBsmKxoyWVoMhyRBGvpuipbTT4SpkXdokgbPw",
  "key13": "NkFWv5UYpGAy9W4fCkyVZ7eYnzYja6149uCGp6x179t5wsqQkARmrCqcmyHTnjbd9swHr7VfWcubLrzyrse62e8",
  "key14": "5LFDs9EqeqVFdmyFJuvAUZRwTu7SLiiTsD5VYvkLNTQxCLmKwhnQ8PQQ5SdYp1KTjuNEPybYRHYijh7Hmxw9PGWF",
  "key15": "2yB48nqLSVSeKqhqiGZpWmLjnxuHTKRrQ2WQJNBe7pbmtfSqk8Gpns6nXFCyND9nZdo3RbR5wk3SfTp21YavsPs9",
  "key16": "oMpc5cJi8dpZLHEepKDBMTa1ffkw2wUSjVdyweFEmwz9wYvjSYimQaKGfHYyRTv52gVnVBuUwF1X9ab6bya5zqj",
  "key17": "fACZYJyBf22wiugxgJnT7BKmCEeoEVECtfoQEAGP1g4brVTXXj9nuzpUwN581b9JxBXK57UNBL3o5mvkcEyj6Yg",
  "key18": "3Xyu14zxhor889VAaREVuLzjFBC4LqgXBFxVmk8PxjuYBNQU5oR2XR3jeeBB85zruaDLmVLHbVikbhHF5uJfCrGA",
  "key19": "5FJCaiKnCRDpn8R7cxaGhaT6fz57HaqeckNfubpC3kyXkhmJeHcQPmpiayLsJh8LMPSPrrfE3zLBFvNEVv83JiKi",
  "key20": "dtWrt7Brh8NEpGfcYNiWV5HS1p1pTY9veweyRRF3xEERr77LUutMq1AfbXCBrq4xs6aYFaEPjrx5Xg8VodiBgTC",
  "key21": "DWr82EfD8GPEpu2DbJfG5DSuvuZxrxSq6vX6uFS8C8znH8kWiR2fULeGmRPW8viE9eYemjcMMrqkPBwwPovSXp2",
  "key22": "4SuhQsjbJ6vatLo9CqjYMDVkf2KpGaBbMWkVzTTbPxLYKfi6W3ZYud3mzXYFpx7Xcgs6uQymewTWgea5UkXDkczL",
  "key23": "2szopBmiiXiPgDY6d8YXbTnBe5UFXPdswy8MeNBqfjHg1HdDZMCFAEvg74MPSFRQd6GMG2XKG2r7qkUYCMzygjGb",
  "key24": "XahL4KX7MrwYnNsYpyz3yVZehcNxkZPk8BQE8Um3xjDz89teeujbXQFK7HtwRoHg5UN3W8KGoJyHuhzJzw5LyRH"
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
