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
    "5gZDUpCn92TvBSo9xrTHGDtiY48PTAikDToroWR5tWhLRXwsYd4jzyG4covVYrGhaZ3rzNyYN4qkvSH35DuXv1Qp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CbyqvrfmDYwL4FBMXPJEHj7CTvVTYuUqN9tZwT9Aqd2hN5grfApA5gJabqP7KG5kJuKhg7Eyggv9EN9K3wHSSSZ",
  "key1": "XT1PQ9GLvD5VZ2HdFUvudY3kXqsnyXUFU5793y7yBVaS89SYf2fr5C5cPignX33KVU2Gup85Sir2HcnCtZbohbK",
  "key2": "5D7mgCVaJJpeRTX6x44Uf2bpUkEG48akpvmHuo8g8iLnNdjETAXbkVCEqBBcKctm2QdFP9qPWHmkRjJhGczGgqDE",
  "key3": "3iyQYsnFu77TzAHLbsPMwvvqdW5otvoAHiYE7DpamX2rbxApCRCUb7zqbRCQrANNgbBm4UC9tF8VgCrET9daAQLe",
  "key4": "3rjUNx62hApwYWSN9oxNXrwq3VA4jWAMyY4Fwo1YGBJcvBk7oZGuENWVtGiSUHBE6S6YFFQDToNzsrSigFZEBsjw",
  "key5": "BqWYN612Ew7qC8dypfDMvLxW597dvEFQSYYHYzQLUSFyVJccZgKrF3NUxLJGiCdTpLGd7RTuu7zqqK8Nbciz9xK",
  "key6": "558E1tBhBTisCUXRmcnzoRWRz17FQHuzePwNRNpTy8oMkjZBPMFCvDoPizkUb3WWcBVL66hcbSPLbUcpmSvLzkfW",
  "key7": "5DpQncXa1bLQHUKEbrQawoYLqW3FY8ySovdsJTKnML6sHyz4e7wEXEEfJQii9WuJSN86wAPBZvCgrYTxacG3ycEF",
  "key8": "YbAq1fcgjNB7YUvT1RYiXARe9BMENP1QzgQypyJxV6N93ehh3MXJXAjYg8aZfW8UkGXxranCPn6jaCwa5Z3wx32",
  "key9": "4n6MNUAPmTwj6fUsmNfgMUKCxGP2xRRJYfqevBbVzxNM5LC8vjCUJ79GHoLXCCss2AstFx7SFrqgAbxTR5MsiM6V",
  "key10": "4ftMChuCcKbFW6TACCngJoxQgxpcdfff4mEw24mQCMXaharCPZtL9zT2XkEG5ZHnfsJf9C8LyQDjpzDRgC7VSKGN",
  "key11": "2gbHYU7jhP3sw8zBUuh4wKHEkuF8qEkAbNdnQ3o2HWxygidASdA1xkpRQHruQ2ua6hrawoof3niV3XHwwNZq65NU",
  "key12": "BCtNDSB5UQfvAL4UjuXym37DGzJLNNM93UEA4z46T7eXc62ZKgvdnZTjXL13DQU3XQ7rhaFzrSPri6RckCQ7kaJ",
  "key13": "4Db8vbaXd6ZixRunhphNBZbN2zTJsgcb1XLHjvjFZk8FQtwSjg5h1kTmT4dJ4p9jF6vz6EnpZtmNDmznRBF7Un7g",
  "key14": "5isdL3LytiquJEdLziyy9vsUkoxBJcmggyxbcUL56eb8HruzLRzqvxQth3UGbrnhCyuo9AEv7ApcuFefVhaN7uau",
  "key15": "4xtpRgRCAMN6BXgnb9u2RpYGsGRkzeN9tRxpPAdvEQN4jh4oMFy49PD6J2f5F3WGqzbgo7tRhtxtHw8PN35sy7P9",
  "key16": "32RiB4P3Ksb8wsfXUrKvmy66t3QJDuihXgJDWq5WyVHLgbxUZjdupCRwnVDvNtqcdCFxZqW5XYV2bpJdCPzbAquJ",
  "key17": "oxYL1X1ycR11GHTiKMEQoWV5hLCPijAghhHauij9xSHYMXqeTANjL5TJwwtzhGFqRdb9ba2DpnAw2z1NP3KUE1U",
  "key18": "4dLcRNVkRNjeownhYYXWzgHjXrRXt1TExGDHfQXK8SVZ1q7jvE8emd4sNyB296fq9go4t6wBHGhx916K4Edu4vh4",
  "key19": "48nVujfTuEanGz22FFKsRdcdRs2wFrtRpAmWzhWEjtJN69YyMNDsFYRtEgh1ktShV1BnCkR53a7rv8grrinNQ74e",
  "key20": "438xExrNz1jS2B9bE3qWC7NN9xFbQ6mRiffYMgGLiecs8VN7t5GjdkaZiAbumk8X1uhThpi2XaLJb1xUdC2eBBEZ",
  "key21": "2EA6A1xed54uN9XFeFn3zEB1aBXBMwbgnxV9iMXak8fGi8f5UFRLS4NYoUswL9HrgFNxsoefe32VHoCMtNcQi9Xb",
  "key22": "5GtSMap7MFR3DaQuHZ5h1S3e1dBfN2sYaWjbfZc4MYZnG8CqrDgG1bDGxLhJXuEV1Hi23bj61TpZA3L59w8tuoNr",
  "key23": "348ANQdxha6zH4Ywvk1o18a67Cg6g9xwmED4tLEUTDop5cBngrbK5F4geaYZLufjvc8LaPhmsYeQz5WqhNjMzfA2",
  "key24": "557MAdXBeBxvwQE6HKxpQQFWLN1WvEV2t4HbyxscpdKS59ZF9mpjM2BMrS3RRUj5CrbaiSW3VYbwphiAJTNCoCSd",
  "key25": "3gL5LFuWzCAAtd1Diqv6LGFMGcskDmnoWqisfUsUueS7Pi1ao32qxP1RUEYM5Qj5gqrCAGYQxcqqrDZdFyR3Rfck",
  "key26": "55DrrQ6yfCvaQcdAcpVbxLRVoaDracy6gumihwwTZagnRmxWXTYYTPJrkjvJd9AthYp4Zi5Ky3TUP7QcZDV52Bgj",
  "key27": "4r1gwAozdpfag7wf3hkyk54qPUJV7QbAvHJZhMcNHMfrg6yy2cQcBH8EdvCrr8pp5e1cLUbs5as3kBtg37rNQb1x",
  "key28": "RhJQxo8tvqKiiaE3vscA3AjjzcYokKzp6UgGwkB19Wer8CHc5W62q3U7fhP7kPJsEAqWXBoTy72UE6qSuXvFLWa",
  "key29": "3HeiUcFnnpw6qhMv4gA6oaa9DMQcPaZDHycCj67H2hYvyrcz4Ktp3nh8rtoFyEMrBsPunvJb9BUw2aLtnmYCJ222",
  "key30": "3JVYrBieQ8KKscuonEZJikFtxiBFPzqKJZyUEwPiJSUvkhnoARPE1GSebgL7deNE7pocj9dqzhWprS5JPBcmi2Rb",
  "key31": "3VbtASVrbC6eaZXAMihsRa3rTrUPLW1w1eMjHYnVgGpuyY5Eh3YFTs7bWG4M7hQNawE53wLsErS4AGocNx6cUf3t",
  "key32": "4XVfwP2T2Enz425TB3oJVL1w3iPPngxqzdvrWF2SUvJx1X8eF1A3eYGKSDVEZLxU56k53Ssn4iM25ndFZyQcrzQ8",
  "key33": "2iAYMh729Nqcjp4NbkYnA7WhtM1CPT2oeWxfaDjXwQxkgxcnjz2NgZBxFkt5c3tmT6zT4qaWfUbqW7iFmRbtHnvx",
  "key34": "2WcmZ5hD5RbecXsFcauVwCZL76gbHKCruJxj296kDGASrLa36pAEjRu6gZkXdQgudaLL48MRNNPgnYCuTjBjNBad",
  "key35": "5KdNCfCm8PX2bD5FH2rgQSWnPCNyCgkfgTiTP8YKEnarmsTspJJNVuAgyZdUBBBAtoVsqAoAArKWEWipDrpsRbN7",
  "key36": "2oa5vhMikxGfVzTbyT2BeaRnC1Ph8D4w5kN6LDEsvkM6gawuczTcQRAQFnGkXaVHboY5CF37UfoSWugMikhj7c5Y",
  "key37": "3mFb9YJ4KMrcQEArawSr2P5ZBoTdRMZH3BfdWgLf3TSqssUD52wEPz7QDa5qfE2E32u4cqYrGBBdHESu8jtYaMf2",
  "key38": "2qLntgqBr524srBRaCWjCvFHxKriWuev229igQ5CJ679komDfkuvk5vbPz6f7mYkWjS9kae1yAJ5463bLzXXw63Q"
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
