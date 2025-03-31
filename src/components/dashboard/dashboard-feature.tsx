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
    "2q4yCjp2XS8oZg4bXMDV9X7PmYDMsXvuuwd2ocZCtF3XYSeeTAYyJy9uCTPfwKWQr7r1dENQJotDhjwAsU81bjJg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SwCaHr2SCEjWu7BZUATerzBLFoZEkhrYxjtxQReufbY6emjZG5hg8YqpdpCQ3ZU7h2sqLwR92yj1VZXieHMjmYf",
  "key1": "2sWF5GZQPtC2eFGurjeSgdmzYf4Wbh4he8we7tyjbC6keommftdRL6VNrydLBN9SaZJcubobK1mFFZhqqoiHpyWe",
  "key2": "3hRYqYiGF2BKquAYmBjdRZ9VafWioHxgRzSESMQF96WVGVbPSJYY2uiH9bgkoSwg64sRudJdPdikXi2Neu9JS69h",
  "key3": "3BPapcFtTPJo3LfNW5Yh5evvPQP1RZdfiDESV25d8CqCbYuwPeAUni8nxZz2CY2VagbgskA5VcVpzbvo7SQrw3dG",
  "key4": "5kFom6FAUPa9B7ijyD7aF2gjmXmcqXgUWYqMH6xtkMz9A538W1CQCcw6SX7YEV7wS6w3bHokQnVkMfawJ4Dm129f",
  "key5": "5r9KLc2sTeHngApe6UStAESqS7cJXKSR63ut5Kwd2XATES3CjjseC9cbSndHKaLDVc5xkRGBNnBSMiyCDnxg5xG",
  "key6": "5eGPEBLLWzBbUx3PhREtH87fcq2xydGvQSzwm5TuswaVrMxFsU5Bv1gDbYV1dmz6KHk3absY51zZ4Lx5LaBV768D",
  "key7": "3wEEx1y6gUrnMiHTY7fgZuaYWfaFhA59AyZjPYxgsh6v7ktiPwzYVkRZJzLVm4M7mPHgsGCBDT9qW3uhmz1YWpa9",
  "key8": "quQz9E4Adke7xngmgEby1bj6zsGaNBLAzu5g5ZSewZxhQsdnfofQLfP9PxiEN7y6xFwBaMh1EQZDfTaQYLSYMt4",
  "key9": "3B8vxg4DbMggBoe9Aja9BFVmPuG8EiTRF6qDeELxXiw5nr59a1h3tgeyYQiaRxJxgbkXtmFz68GnVLQJeo1CawJw",
  "key10": "5ihHQ64oMondpNJVAkvvbUDvjtwdYtHwtxNC4nzNaMih5CVi2Ps1jyzgzoqVumFuENefe9iPe2N7v8bgq3PUyA8j",
  "key11": "o4VPqTnYxQh2ghnqWgijv3fo1ihes6WTqewayPZiG47rWqftr2L4yJyip4Fon7zH4NX8NFHBqhLywQbmUwLRoA4",
  "key12": "rmB6Htwjw1VFUb7mWUDVHUXg4u2k6ssCzvpPMwH519BNruWdnxCXXjfQVYRDdS7XeWHGFaBkmVm8Nvb12EZ2cMt",
  "key13": "4kohpPdRwjcFXkSu1QmPvtM58tQFLVKTupLmfEujaEaAzu7iBtoQDvbUx7bLyPPL4xVDCkqfRvCwYo5iPtFFXB7Y",
  "key14": "5Ua8Z2Bik3RGxXAUthDKeevhHJoA5phvE1jXvs2RzbQuVj3Qm9d5UDzXPiEfjEpRwbZhy4axtjR4XBqDMeYXsRNQ",
  "key15": "4255zHmbug9nLcVL3fu7TPUG7N8z3hsnKCvEmUmN2FF3p1YUjrrtxVfLHqYvha4RKs4uF8EVs7Tn8x85YsFbAPkw",
  "key16": "5fXrhDrjR25HnszKrQ3RgnPYewSRXnvuvL4tCFgEDvTm2kYykEg563TnmKYL5sAGm7j5M5oH1XFSX7jGGcYA2767",
  "key17": "fuqDfgfEsa6HMCzjL9NkSwu4B2ZCGE7oDeHtrJFJGP1FAMgtUjMQPU263E6ve9nu2ZFrBs4PCZ2dKJjiNGTHypn",
  "key18": "3GbfroJUkmm7Q9LfMTQS86tMdCXigjNX2ibf95NWtfwYNffzc9tD9tjWi3xKcehnnfFMgy5bePKXHVkYMSX5NEAj",
  "key19": "49q8EQNGcoqFMyW4yhjgiZzMx2gY2T2n7mpzLU8NBJwP33u3fe9N3uPpZ6Esh8gQgAa5pcsGTcfz8BMGTsXfL9Fm",
  "key20": "4xEp2AQGswqDcr4oFNtPZKAZkViNGzvUqDZh7K2XQyjUH9MgwjEszRqnmerdYNMiBo9WDqdTz8GUrKyMHtMiRACz",
  "key21": "2W8KCSPuhsJHJjtypCAP8UzHuw1n5K468EEbAVnAyp6t2k2ku4puUhqZ5cEEGZ5trjyRwzgdis1mJjNYg8d3YBXN",
  "key22": "Nci9qWHrK2o4PDB8W91CHPqYjkoXHXovZVPpCixSm9qbwrXjkHLY2z7vS1HbuF2FzmSkiFycLfHShPjQHFXCSTG",
  "key23": "5uLYweFZ2e62CCsffaZMDfw6mU7FqMUmv3AfVu5BAhAf3ohVwAAUVwrAAT49R95k1jkUS653r95CcBgXa7Y4cEi6",
  "key24": "4WdCYFKSCYnc3WbN1192fK69Gkbj41wkfG8qAbqfyJosC6yxknnzNVw6pHaF8HvoQW38oPFRXNTnqGn8wEtwa2H9",
  "key25": "2JRzd3dAScBvmwohwuKYZGBDG461AiBndkAEYka2sRrDXsjrc6mp9miYrZfvpeUwirmhPxhU19GjX1qhCPBiJGXT",
  "key26": "3sQxhhWvaCVGvntBWE5XV9DjDoybMoEMuWx3AfCyzofeTvFhTcVfZmgK6ENgkkpTmkHCA1QTevrPQXhG6HimaD3R",
  "key27": "2CUvrxdHHRiDXNdDUVhznDXE74oBeviVw6xMoHyVrMBKwRR1UhSyTWpXj4tQTdFdWXPzih3s44Y4Jmge7Qg9DukY",
  "key28": "5LHRxdxbBSQXYa8jnXx3pm7g49fvR2jwndNWK1Kh269MHE4wL746hieopANQBUmy27XqqHzjizma5kBYbk2JQjHL",
  "key29": "2AoXfCR2AakJiigxProitDuksoxEAEEtKNvPyvXAka5jyvGNV2ADhRvf6UZhqVsqhQKWZKWYkJxYJ6aNZSwXSkJ4"
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
