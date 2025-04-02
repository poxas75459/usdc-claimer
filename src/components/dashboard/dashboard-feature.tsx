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
    "3X5HpSSBsTEkSMAdqn5dYSrVaMccxpcW52M4HcE9qakC5qFLxbxxYRA5z9fdZFDnbn3QpEPaCEiGiWfyzbdnAwcg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LHoLjQkejjCwtXvG8UQNTY4z192CHQ1pUFP65Vup68WqwsTMuUZbMMeDVaR6aPsrVeEhnWSxA9nC8og9uoQAbUV",
  "key1": "4ypgpnvdFPXrd4DC7UXV3HLkYVoe1JjFjqzGUdGxj7KVJthPZr6YYhZ3Lmea5oURtZcDgHdryaTtppxHv7MC4AVw",
  "key2": "28Zzc5sidbBCgrS1Ccg74okxrFmSdxhRLiGqdVKMyt3zauCBtEN85WsEwkYHkWwjHfMUAHyZdbrq2SSufMBr7JTo",
  "key3": "5BkoNDTftE9UVESwxM7hm8qJKX3FEHnUUQZ889YPJUUoYm8qfFPFzmWEBREW6McNa6PRo1XEY5vTr7zvJ1oQFeo8",
  "key4": "5viiKmmdEiyLjPjomwi6oWXoRcuA5nJ67b5SrBCAaW56BKEwPEmERP7QRaEY5e2crVhJuyezBgj3jKRMXzeuiVos",
  "key5": "4p9BtYMkTdht5hye4GmegnBCniJKDngY6EGA7QiaXQpZzXYJccpm4kgRSuyH1UpYFSHR9KxPCVHtonNWmLqwQJfi",
  "key6": "5kABmAL2W2sxCv65VNHNUXJDNwCFaUQKaWnF3dKFWVPCE1YvQ9VQj9Y8bQSDrJJG3Sz9V5w3cZC7qkd8ed2AZmsN",
  "key7": "3MR1C2LaZvBYoD6yJne6sctrVtvaCaUuGXmKTRYnR4gKMC8BagikS9JKuzzFKyeT4CRuFNAZYZvR2RPSVtpjNBUD",
  "key8": "3hRtiZH1ne5vgPiq38HHigHvvkE7vUi5Cu61EUViHPtbPHyWtqeGiksut3uhhdGCj1DNvjSfNEB1rsVPvxEjHJDi",
  "key9": "318gDDRGB7MxmXBQAEFctRJvjWur1edUbz2mXrVK28vbqzFiYT6oFGXsvvok8YUYWnMKUKsxvfp5vzFMvX3Rk51o",
  "key10": "2mb3wtbbwnQAqgRfaG8VPS1qNgWUDNSzhATbuvfE76eFDR87Fz1nkFnUS1n8KBzmJa1FDDjXkNNo98dQYZ2Z6zPm",
  "key11": "2tvpCetNWPzdDjw6ntSSn6EhtsLVfx8BUP6d4YRtvb7ELd5X4SfRr453uqGDVdAHqmzkLx9P7uerWVzmhNenmT9e",
  "key12": "3p8mBa7g8UZGusG2UHZLJENAUHd3PXbXm463E9nNWC8DFxL1wvMYg8R4dU7YAXoTQS4Ng824ouqAYq5FF24CCnVe",
  "key13": "5qj7jotu2osV68YAHWXmpsUjfuM2y252zB2Hm12gEfiLc8tokgyCVT2Ntyg9pwgo3JZoEmVpYbBP1afVdeByXMzf",
  "key14": "3rDchhxJnzfr9PSkp2Fa3mzskk4EA7gdX4dCYRmRYrEtUiCe8hKPS7gFAY4sv6ksUaKzwAr2G14rgpwN2bFiZ7S7",
  "key15": "2aaV1Re6UEkMdqJAV8851sBm7Ceo76gpdnJWxUPhknbBeYaqgcWPxWTyJAtArNJjHvAtMffpKULzJgP8811chNA2",
  "key16": "2uvTW8EKPJuJCqwFurbd7eDxEmfEkYiNoNNiqhVgToRLdZSm9zxdrQeoh2ZKGFb5cafTUt5GBbhZosWBfjwAitCF",
  "key17": "M2385DKQ8vPokXrbZd9DFPDSUw3r9CKPnvKViehmgVVH9PWd8GT6BzNbpqrSYf2CWv3BbCTbN78nkiZBRBuhL8p",
  "key18": "4fqXgvr7rJ6p1rEG1ypDvKxPdN6uahdLZqUGyTgB1cDD7b44dqxzqRZvCckwixmBYNbpxptZ5mJo83uqQ35eg2rM",
  "key19": "5y54363KUVXG4sZkdPpeJD4oUHtzm9e57Av8aCFywy2Fou1CqrCsUpTURXdqJ7cmWQ6YiLetdhqkCfEqPcnqCXMM",
  "key20": "5HZGBr2i6XFXuYta6WbtS1d1hEj5pZJU2dVU4uVjeySccpYwZ6sZKjRbvB7u17Yg4uHYadkwuQcBPQUzCboxohtv",
  "key21": "4EFTUhLdGbS84jSUKfhmu5cSHyZ63UtC5J6dX4BZDAg7MhQYLZ5nLRzeyKGUmW7rFurAcBhuhYcUCBUcVx38FfAz",
  "key22": "yP7WM7XJ71aejPsj9LiyTKZN6kiiFTobKUKtcEjKoC2RzdgjEFcraKmaHhdMEwg2P7XJgJTDgX2XJcgASjXbNBn",
  "key23": "JgaAxctt4FdN9WRMnuH4gAsVaUxaF52pymhXfipun7kbectbnMge2SVGeMifWAX9vpgUYCt51H46GYNWKS2CaYP",
  "key24": "fb4vBwbaNx9vXkx3JYoos8dufz14h7YTzkdbfR6qPQKnXzKtAwjMHEDXaVsSVxx61fGU9srGmDnrA5JGY6G3NKQ"
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
