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
    "41B6YrtGcznuiMF72nCRAfhTACcYb7Cc1CjypDevCTAkNgA23QH8bkrxA2fJGzZrD8GerT7E4oznU8i5zkeNeYiu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VGAoquMM4MhSqf75aEADGCqiamsVJgHrWWUL5SzkPXozUGA3SCSdHCK5JC5GBwQRdYJNhns5PZQjHTfXyspPMTN",
  "key1": "5T8AynVY4FuyNBSrGGXXB64hcqAYEdMASpEdVBDVHxZGwfP9CxvJ8sCPFwmuujechVuh2dLB4HXL953yzEy1KS76",
  "key2": "58dZR3F7DRHkvmNH4FK2N9NPDXNqVxL8WvVSnPogsSQv4p4UNr4b8ZJtj6X5zAK9pW4f1egMAjWut3aKqHfwmEhy",
  "key3": "4j8R578GnJdNfUhze21Y1F2GRu1i5i3qspundrAcUTeVexjWJRZi9fZ8xtaQJnHeRjEDobaP23Sx8S6Xq9QXTC5f",
  "key4": "5WnwwEHiN67RWaufbcUTPt9eA7f1V8UeybaNdAUFoUjxkk4K69Xcp4yNNAnmPD6W4spin6yZKy7Z4DMr3GrHDAW2",
  "key5": "2MXmVb4zyaUw6fGWHmvRVGXJsm6WVhnBQRMh2nkvYx5LunFUNDBWa3jYyc6geaDqj159VuufmUh3jj2dPKDtD6gw",
  "key6": "2rY7dPXor2TZkUh5kG82ai17jTjH4X6TEhmKV2XWeWZ4PgZGhWHjdvi659bEzpVP3eBUmAFJj7VY1cARUUA3kGEG",
  "key7": "22Sqqjei6yEFjB4RSJ2w7Bfc7g2x7mxNLCM2TpTmfU5NqRmWyXZrWYRkB1Vu3XNKv9La5Tn6LkYTBpua75K4hTRV",
  "key8": "4B3fzCcgLJC7QJSCnW8JNQxKhNZsjXjbeq2ULotX3kd19hQvF1CtmuLBuqraETWjW8QXSany3BLc8x8n5DPosBcx",
  "key9": "qrgvziRkSTb6pKotUGpkPQZj8DV1yXNj2kXUJ1wanQaL4de8wdYibysLBj1hMGthMK83eembjYYFLmiYXCBuv88",
  "key10": "5BkdXDXU9UJHb21rtTWN3sLUb5PA8sLnZgb8Ts1qdPfoN4YavbBM3xnhpP3Jwbb6bFKzhnoxTtJZcHLj4srEwu9t",
  "key11": "3uqUdH3tgJ3UhmJoVXqLcDqbHqUSMw7DPXNK7u9Uy7nxLzwPg9WduJLrbjMMnHmxixdAwZHaAA5gHryjc4cmteBe",
  "key12": "3eGvJxnn1KctN1t17fPmDXE25j3QM14axbHdsiLVSuBUKJ7YJCohxF8JR8F6UYCrY8j9ARv8d64fftnnfmkAqKpo",
  "key13": "21nSmRKBP3A1GKK53eXKgnspwe2DcsZfc3Y9DT4cg75789EeCZi4WYDkgKxi7QDrX3hfrAeGMivYtgdjoUzfE1RE",
  "key14": "29VujR45yhKLK7BobbUBYyHH9YnGWZ5i6uiDqpw64aZsmgDaHjDDF8MJszsuFVXnbs7cnY5oXgaGE3mgEivQsRjF",
  "key15": "5wU65dVHH637VWqHx2MLKVfKnqsmPP56WFYmr6LPGXd77DoCSGPw5AWfHTHM7HWah4VBjKD4mFA9abS9qZSpaM4H",
  "key16": "74d1RcpfvzNwvA9fXpwUrfNBb2hRnAAijFTNNtisGZdYURDmstZieZLdckzwThdGJe3WFSbvqbNEGjahaxXgQgo",
  "key17": "3hVFjW9xUjHR2uRNNQ5J7SYkmYBna7ogy4ubmE529EXQW2REuafCKzL9ZyZDYivr9yzMAZTJUi3bzLJR3rq1nZkX",
  "key18": "5suNXE2SFzk4nxhawv2aD3CUVQGoP8Yh5GZu6s8SHkcVufy9R3FMPbyRKL7KUyi9Ttqs93FXuwbHM4vsiHymxHLp",
  "key19": "3Ydt9TtJQF9uwi7Dd26uwSRyDteDK44yKhByXHgtKrsvN3L6MnRkRmP7m7KXDvmTQe8saS5k2LnsPepRQSeJctLr",
  "key20": "3yotVK98prZQcJZi3XVRzTkbSsbQiXkHep1kjKBQcPkaCyPCpj2Jqm6Epew8sJq4M1mT7DnN2E6GbHTezGK8ZUmP",
  "key21": "47hWYY5dKfxLue7biv11hqFxWSBZsVDsSj1jeCGKvgt3KR6SsqFh6WBCnFKVCqNugSYEtUkVK3iax25oHX3HFkhP",
  "key22": "phEHjG4hBTy4cRJsmwX3Qkq7cJDoFWKpVT6d28zK6WUDY19iwSEgkp19nLGaBrY42DeUKTwUDmfKkrMCngdyrDZ",
  "key23": "2rnDyZJao5u9Bq9VFVc4ddFjMYgboXEWfPfbLV3rqVnppWiUJV17pFcxtHVQ9VQN2uytqpaDg1rkfRiYyjwrDsxo",
  "key24": "4THVs4T7Qb2LUcu65RyCM9EgrPCbDiUBnurLnM9asWVgpUTHv691RPMN3azch16ugKv74g8Cf4imYbuQpakXqV9G",
  "key25": "25jKFwbQLTwfsUaG1gvCWZtuK7c1Wx4Znne9i9z43ZHf476NgpjchdxwqtKTrvZmUWgUBkkVUQ5M6FwMVFZFko2G",
  "key26": "4M2g6DP9wufYpwQeiVfys3gjRu9qVNPT1xNVf83kRC3wNkJqa9YBvboPuz49jV7YeJ3m8vayaq9MKUByh5LGmcW1",
  "key27": "61MktpkL29bRHMgezb5WGUP4W9b1mZC6YbrbesaEKjHDobUwD7XqCvEzDBXamnZAbk9F7HzjSNV1AVdAEhDmFW7z",
  "key28": "5pnhRpieGHg6hcoKBbcCF2nN2NPbiGfSLqZdWC6h47kUZd9vXHXP5EKU3JzDo8w6PQV2Fff4D9H9miv8k3aZhujv",
  "key29": "3X3jcLAFnQYMmveueyS78gbHnMJyguqZmusdkqa9Wirpv2NtFudotWjT2p5ughwxfbybLmo6RfGnU7h7yMEK6kd9",
  "key30": "4F74a7SReiXjkYtrKFiXJheJhqvPcdH6SWXTAcXyaVVkav6gmFwt8sAwkx7p5godGHJXGhKX1HP2VD8C7rCzQsHs",
  "key31": "WSCJubjM45J4bkzNeEDS1gqnTZJT4D3ZQTcaFVfd9hofAHGcACbWGESeTkrXVEWW1z4JR9KfiQ7veyqwu1CL77b",
  "key32": "Fkpeq6SqiSaS4qUuRSkWa5jcqkyqfpgWSTVtiTZki4LaGDR8nTX7abVMDPn53wps75oPbkyVgVBfgFUZ46Ha7P5"
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
