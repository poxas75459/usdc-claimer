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
    "2Hr4mbFKeB4ayqvJii3n5SKuuQzEkr7V8pQQTxHERCyLQ4z5kArZc4AK4XCviLwJhrdq6bEGv6ZrfcazJxsD9pFB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BFdezW1xMB4uvEjcmCLjST5G3MLt6U6fvJPyY6Wc6tdHQz9PusbKVCBRw8AQ8GcmPub5kMEaAPBDvPYEW4a9yEh",
  "key1": "3XsMAVqfk2u1NivnSrPXzceDRNrQ8xGPmLCFQzG8hGusgY291pZeahcnLrReUzgx9nTDX2LFz9tqYNi86sGf6BwP",
  "key2": "5Cwkcu8WiJos6Nxf5RDuxK726ANCaNxbqKMHraADjtj1bPRY8PwBAdXWh5feNbek2XejcGNt8huBRTmJtujwUYSC",
  "key3": "52jTER9TbbyJpwfpEu2JzpZXBuWwXe2bAwL1AWoeU1Pm2apyLLR2Ap8LaJrxFQa5S5j7yicDFW9Rw6vMdfgQ7Ggj",
  "key4": "3LqSYWopnhgLREszyj2BixLTVGg5Z3cg1qeJdv7WXKBpSmGwSuMjoMn3pBSF7gik7srEAwGbZtYyH261ZVc8Qfjc",
  "key5": "2xE6VktuWxsJuypqidXehUnfQD89oNLxc4BKDgibqdPXEVvsqkciAyXGanFTgZaVQenzJAfu7RJ93XdKa6BnWLcv",
  "key6": "3JuwKumjbSzbuWL7KmaddVyJ82m7q5a9Y2SthjabdRRY5skUeZDaPuvtEzY2CKU3eGAWP7AFSc7ydnGsSUsK5mEw",
  "key7": "2crpgnyANxzTZexWwgXoALFmwXcSuz5atYSSK4FEsC43NcSAVrD31kHFYCxn4FTSQB9wgCDZPwYLjLGJFHiyZ4kM",
  "key8": "cCw1hZueashRWm6wZoA4zzVwPWbHWRza8wsLQdQpQTvoeT9LchrhbfNF1TEhN9cCesWNJchs5j8ugfgHKoTqYr5",
  "key9": "2AsKaCzPtWpmToMU9HnERmF53Bf3jGHWJBrTESzxz2u7jfLG94VTCXSonxvgnjQCS1HzvmYWK7fXSXVduURtCRc5",
  "key10": "3u3acuTejCRCt6CF6s7MAxoW4QquM8TjLy8ofLxuwGLUb2Q2Jr8nxkzQDeow1NUDHtWqLiqsfbvsXGayUDkVA935",
  "key11": "yCnsUYfTwwDyRG8R5nBwMHxeMCmU1fKuvwoyqpsfSUuVGLt7TmSXbXwLYC74UG2Edv8HxKToG9bFVAKCw747uMc",
  "key12": "245ejZQNPsrDfqLKDq9h8eeuxDDUZMBXDoiqmofcCFpiHiRzSzDLohSvY3HPsVYtuPj1viY2Wria6XTmj1h3xWCd",
  "key13": "2tB16o6kyMpBDBoxDjTaRvMmkvpfTdUdfZsTAZmufy6jREifjmNTpebBYn6QfLu4kxQ6KQcC1dKPBZeNv6KrLfqR",
  "key14": "4913cHKfb5zio8onn6HFNgXUZ7SMkma3MzBLnyjk34B45hWH5hntVDbwzWtCQjNzZRbaHh6vVK1q93cK2WdNrkMF",
  "key15": "2HUJER1FVvgXugkTSNQ6bkpsR25y9hdo6zcKrff8mY1itJiP1wCVCbXc2MfdycvEdyfYNHtaQ4kPzVWb9khzXn8p",
  "key16": "zPRXMfxqERzTkue7aLXhtrLS6LvcJV92EXC7Uasetogq6RpPUS24NfzY5evJCSkzfvHHNMeM5BXDFtc7syR4j4N",
  "key17": "5XmM7RrTbsR5g2hCsitdNDoeW4gU4sSbBq6Brp91kbHxMVMXCxDd7PhpZxEnLGPtz3Q9JeYDcjbASqB4fKDxg9E8",
  "key18": "5DSfCtzBu6YZ9CySMDagGAV6gZDRXni5z94khC7N8NSUJZ5m8my4GN6UynmXazUBPcWirEthZjM1LxPLVa7BhW9B",
  "key19": "dMGq4bp4K6TLvVy3BJRkGW7Hze1h6e1iSnSYCwHn52gmNhBj6dr3acLRfgh6yDUxG169PCgUmvqSmjzYuyDhPfT",
  "key20": "5tY2weqrdr6bLnyFSHiDEiorWvvYCbT8nMjhYnaa2AaGovk91Ys7G1a4RiCzkPQQbEfUiScR79th1aN5SXttcqmf",
  "key21": "4g979nzz4nvFoWyKyucVdzWWCM2rWFzJeFn4PRnVJfa5PpgFDd9CsxShFqz2eWa46WcjHu5vvnRGxHn4dswebeFB",
  "key22": "21yrUtXr8SdNtHgEQoqdTfAMBTpH6BFFrNZcswWLH5zTRm59f5sYXtSeHdM7rzVQEn4RYAiMKScameRhdBk1KwZG",
  "key23": "3DJmkzdoqMq7GHYRx2EffhFLxU7hyjT5DCQiHu2TkJo5uVkANqK4vCC2B9P6DoXkRD5ghKQE4hcB4hbhQ7Cj7pax",
  "key24": "53CLSmBbUcR92kRpzHFF9r8e1Y6NuDSQzXZNw2GnJDNieQ5uZrg2ecjnVmNiEiEjtKKYgaThxczE4dFhmugzzxcm",
  "key25": "4rC49nYynYpuBXZWbNWub3qjhfA8zY78dQ6EAyrFj2PAFfFHoeYL53X6p83iDTt89dmvqzwRcXfWW6xQszi8z9H4",
  "key26": "3vB5gqQrMWWQJySUMh7QQZtXgQUTBt3aYTfHfwfrRQWAMB2qVsa6c55Lo3YhwRQNNfCjyCaQEjSDZ63j5VjSRcvU",
  "key27": "4opYRCMGtToXG8hsUehYo5TNjaoDLU4TSEwy5nTCJW5ZcBAmF3wMZFLqQh96WSC52r3N8CAZocPzaZKPsMDz3e8r"
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
