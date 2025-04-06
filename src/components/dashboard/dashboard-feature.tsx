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
    "4aLX5qr4bYGNSRPCsEbown3TjnrWVdArRPPdEViNJHjRP7wZmi82fSwBm94AaZfcViqhygDSvci5CjW7ntM9wg2M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AQDpA2Y3sPQngyvu8prBPoQGNANMfz62RRwy8exKzFrd9t44Nj4BJ6v2mMWvBCynPJ2BT85Lw4k9eQQeovKhHjS",
  "key1": "3QnjgsnMKBdz6vUWNsrwDnLHsnbuC5PKZLE3TgLifyi5YnzoYg3QL9MHHTQMBgsZHCx8FVNHNizfoFqdGctnyBG9",
  "key2": "31foF7wWcGLN7cXDmK93diYAtUgzzZsoVephDH6XNymYKzT7HDVJjZo2DZHgmoLJATfr4Rxj9N7yTmgDp86PFPcA",
  "key3": "5BncYzZfMwPjWouR38rvMKoCCQBJjYxHBbmUzwa41MRvEK5Zch89wvxxDBDzC7jLnG9EStjL25493KEQcC449etL",
  "key4": "JENUUpeBhb1V3RuMRJi7pNgvuAB1Z5PQUjN2RVHBGWt2bCFk8bk6hUh6ee1FRmiLW4jete1szKmQ5dvT5SKhSbA",
  "key5": "3o3YPJE1UnNwPivSGWXEDMzmgUnGAzRPyCjGoYq2oueDh8FptHSsEp1gCHTuj9iyMG2CPnsTWn2cBXEHFs2LTNBe",
  "key6": "3eSCffhwuVk4sG3m91HHe8JTrCoBSNxVUU8JXCXEhRXaEeSCYCgmMw6e2diFWpAq514JfpHkznTdNDZaXxgvRAPK",
  "key7": "2gZRPzdJDrqUYYtEGbkYsuzQfx3vZz8aWcGXcimrL5q9imCb5P7o6kFH6koqMnK3zbfGRJP983NDhmtd9vNrLse2",
  "key8": "2LC7zrbcgD2GPmGs4uXdcTusN7jALqp2snGD7H65CTHLTZnsiubyPW7au2AA6KUzhaM3GjNKCrWYJQ7E2soZyNgQ",
  "key9": "5mnW6G1c2TuuLjKfbUxcCKhUq8N3tRdcVepBbZjvYHzGP63H6HwxLtF6BkUDN5aZwnTDkeAgUUGSPYRM5sYYTuHj",
  "key10": "Ys9XsbpLZipTaus4cExJWsVFyRvicMPt2LR5NNeBMse1VW2ZfDWmKjfwCiuhf6a1U6RBycYMYBWCA6dEzrojtWx",
  "key11": "4jNYdTHUanB2DhSMsMb2XGqVyUxuBPtbRaMVyYAQ3XMyHGfCtUiyAfyUCTTioHKmwopxzT2kFjc42hvPckShuihz",
  "key12": "2puwq3iMHHv88sFfxZaDc1P3dRAVp1y4QjBpmtN7vyM6c8JrnEMmDzPW8bk9apCVG4BwGcceq7cJsbfM14rbgvkd",
  "key13": "5TMz4nbmaCqRQwVZskRNKQpPUsTzCr8vaGA9tEL1iqfSNcTLy5cRVY5rbjFSkTpyFmjbAPRaYhaGoNsPSkJi7tLB",
  "key14": "FA8J6ADWUvR5pg8xtVFDeiTq5Y71G3E7Jk32eQeC62UMkwLgNZLuoBKRnQr9rBnb4FukJxg2um3TwtR4Kc9ubgo",
  "key15": "3CXAQEm2eduYVMUkuJTp9UTHwgPHcjpJi9RgbnAT2oKkV5LbeWh6jCGQHxWphJPDwzsgk9YG52og8qftdLdfLcAk",
  "key16": "4jVGnJyyaKfdpQsNX88Bv9NNB1eThLajSPFdXzJe9uHdej9rPDvRGpZkBUbVDH7miWNJbCfajLQhPtUQvG4FL2NJ",
  "key17": "5RA8HVCNWRR3tiiHbaiAH8o48psbpYKUwftHyWJPqrDMQkjvDnFdt3ASR6z91gptknkCA9mJw1qt76ZMj8za8ZKz",
  "key18": "5CNdF7NW1BKM1GVh1mwaDgfsnS6ddTSNWnBKU74Zqy4QJf7JaDWMN7MFBBUcpxxtxR3Qs1zZsJPDpc4VCyhADGwu",
  "key19": "jcRWmN2NggxBW8ZGUwKQc5ahnNgTSDCv2Va35LisumKwiFBxHzRQVmVYaXRNexGQUkzR4KkPpQLbPBnEWDMYfov",
  "key20": "bQ4Ne3mdPhPkNVgRqdDZRmDk9D133qufcyAFsBa3JveVP4Lgw7zGjp2117hiTVo8mQGjSGWjLYG9hLviU9UfUP6",
  "key21": "4zxzgPy9L8sJhc5mhUU4Wow246Cy8pDdn56s97HatTkQLhvBsd4JkuarzjV1trFTdzDFayj7AV9aUELGfwy2KV99",
  "key22": "3j5NKnN3qFp83rXM5n98cx2ptt79ndHH3jpmrxS8vU8JjJc3tKvajMKCyuUv49juYc9xE4NteQUsSEDzqW7GNs9N",
  "key23": "4HpfNTQ5ksNWUP7ZKY5NjFjrRY6JK94S5zFjBSxmseK3JLF8WAPeAMw1crAn6LC9cchCExoqdnBT6VW43t3zUZd2",
  "key24": "3axpXBGT5CDyLL111vpsBoJhXXUCbxMnxpVUTJXWH51KMPJSbpgDigFL7uThhaKZRYXzjpBqgm1rWwUtjc17qcf9",
  "key25": "uN3iJHDP6E44YHQhzLCqr6qbm2ATT6SZs1CpqiiXjwfNbzwBC3gaL1aQuojyKc3fnbuD9ABJzmUqtuk2egP8L2o",
  "key26": "4BdCrmZLsrxSzLcJTVnLZVoznZhXqjbPBWXakj3pDenoPdwSmsdHaUoEugSADDTpZqJESvBesY91rfPaGCB4grVg"
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
