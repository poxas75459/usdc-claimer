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
    "2JwccFoFBpcimotVbTQALFMgGv92phYUTiQJ8KjdeRJbXHMBFxzdzAEpW8a2yadYkMTsjgK9FrRyj7RWXoBaNJLA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2977UqB6EiZgDCNGYn83LtrcktGtvyExjnr9ieiUdJD6LyZTyQLWHjQvWCo1pBS4NFuNJWyWtjMsqSTSGvdRj4S1",
  "key1": "3MPafZHWok1qA4rjjCWc1H7S3VqSZ1mgGysjwQYPVCtedKUdZUCMEashwGh2hZ8WbKV1rPY8JBMW883a7AetYP51",
  "key2": "4A5ZKLVVxFopG13u69BNg1vfGiBVwxVFAHRc91bcmQNhzfSBLMfDYsGvEDYiLjxRqXjZGAH1rQvHMdCTgLo1xbuU",
  "key3": "3Zc748xD5p5MgMZXxaAzJD3xPC4fZXNXq9UbxDUbb3vihfsJYmbZD9WkKnMkK7BvnSrXAnEnWYCeUDpfsmgWXKvh",
  "key4": "3WmBGyGL9cPkhgRNSM2fzgcGY8MhNMX1zdJPZP4xUYh6sHXa8ScTQrXTjDavSnKYyS5BMJkxVs6agRZnqqWxL78H",
  "key5": "4bZLQ5egK753CJohvdnCGWn5Kv2UeSvxbn1q2z7CvoaZjZ2D3wThmBfemEqhMMXAhJndP8uvNKiJ4RFiiyh1sbHA",
  "key6": "2nty2ZaZ3ejSFpH2u2hTp3EY2RPLPChq9ct9dB6p4pdrdhz1euNf3VnnFYZdu3kwdM54aco4WC8eQNiXoMqRQ21b",
  "key7": "3gGXSYEEQoANq2cACZVfYP5bzigjnSzpZnUuKh6PTXopn9eNEmy1g6HZ3okHyPGkCZXWWoCBTgoXXx1EiD4Q77Bu",
  "key8": "kyEWmZsosLVxY5RFKQ4U3GZYbEUmKmY9xz5YCLGS1YMxsicF8T1utxSAW1d9HWCHRtc7ixpoHPTNz24VoXFbtKp",
  "key9": "3w78F79zER5LwZf32yx4aKbZGMUSTzfxVBUvwF5JtomZDfo5kqujNGh4Qjv3ebaTrRyo14yXbWjDgz8xycwiwjyd",
  "key10": "2TLVkJZu5QxhqtGBv53wwQ8ez5Yu9LX7EyVBAyAJruNmdsc3YDRWZASADogkyen9Jiq8UjfvjPGY5MWDVBjBuXam",
  "key11": "3eP8wTTbbxtbXKKwWyjhdZrpSWgC2aFZffToBts3D9HfYaPF5y66D3X5SwpG2B75VGVjwBG2Rc2uqDDVbNdwjkof",
  "key12": "2ayW74JkJah8ZtXwN3yCzWbivaSsr4SfVkMdanF41tUxxMs7geGxnmMPSZWDpnfdTf1DEVpLRj6WUQNymQVyGpRp",
  "key13": "2Ku61GNZJavHdHibbfJ4R9CQwghGG3XfZnqc84DdCR5p6sUqHinwAc5EWw39C2Shbu1GZzNwhKZTsprs677Xzhdj",
  "key14": "2X5BrUtmFn76hwqsUGmiGE3BZGvdX48ANtxQHwWfy4b888r9NySGN1F3MCWSGjqkLfkFfBjX8Ko4cHYer6yDjT7p",
  "key15": "47P4NtTxnzGkdTRvKrSrAcsMR4AmDz9aD7sGAJPnWcSx55jcSSBYRJ4Qoj2x2aFa24HEkgkWcokAfh2KDqxDKVdo",
  "key16": "5xTiPtLta4sXZgsu2uCNb8nsVYXdhNaJgyBzRmKAQXzHkXQXUxKndzfRLp1G8fbCvyt4vBQ9oZrPT2FgLmnfmVGV",
  "key17": "4yL2eDCeMXnbWPxWhNJWd4crmSxRN7XYijRzfRJ13ebFKabgBv74rLFP9zwUZL9MHxDY1Q6PUvUKZSw5KNDhdep8",
  "key18": "4VtofjMVyaeN69cZzsHK3tz92yPdm47U7Ya8gV5TTt6L2uhnHg6YsJXAadNPXZC6JWRV3NdxEV4Ym9mrZ2HUnBXH",
  "key19": "5UFxve7S2bED573m4EF6JQrGLswi9ATvJSJneEiVJjxNZ7MX3GLcjyQFjQkVstKvZi3rv9RLojPgzUKB8rReaxvp",
  "key20": "2NmRaKHJhsKdAqH9o3CCQrFojpy1FMNNtKtVK3c74YUQL1745DcvBogj8Aq79V5xQ9uTDDBjuMxqN8zJb9a7Thef",
  "key21": "AzqG481oRerCPB46Pz2tsaNR7SDtGM78unhJ9KboVATgALbPKw6PzB818fFYSN7BRYuK2sT9yBDESfsFnTELc3J",
  "key22": "4JMV6hw2ERnqBrEDvDpia6dBhxVHvxaJDxDcSCnStmsuAvGQ9cbzaMkFaviXDxNVNyXFniaimc75EnhchmXRiMga",
  "key23": "2sj2Q4Kan9ZZzoWrBbpjzLDHrFq8wk37e7H1sVc1CW782nPAPTbceMr44yhFz37tuvcV8CBjShZDbjutzZfihw55",
  "key24": "2q8Gm2z1Aw7Ln5Yk6uBqMVSqqSXRJRG5Bw7vDRxpimq7RhGcGNdfeVGA5o2MVarzXr7rRhrCgoHQLKzWcPoqUD5v",
  "key25": "wWu4CGkhpYQja7Boq8HvCoNcnUFkuRSWZxME1fqmZ49DLK5adXJ9Vebov7HbYixn97MggeY8CLksGzvUHBWzixx",
  "key26": "CG7rJ9We7iUjBuq3qXjnVnz1DeLLWUjwCPrcTt9A8ji4TjFBbCdWvy9Q1cA7kCUujXPhQdi4JXesVqoxTzopt8U",
  "key27": "4teMi7Xds1Hp4qCqNGWDJwt2rMfXhdbBQfASxYmsv7sKGpJbLwMGJ6e8QVZUeoV58W3tRpX4HLP8HUxVpGQVyRR3",
  "key28": "2y7p5tRf3XD4szhKE1QnTvzYcEZLx8tUUVC9tnQEyMVeMMupGzoeKoV98dWQJxqGBgBv9wRAPZkumiaZ4VhhkTEd",
  "key29": "3dHe3H1idQo9h3dFybsvXkJw4BQCMnDnYMYdSvQ9Aw6taT1PmGTkJRxFRymySSjQvpYhPf68CyakCvwbQMvGuxJV",
  "key30": "pDsvNCtyCbvd1u1ULbXgkFMo4cNymdstLro2VMMhY7bkBvE1U8FDvjdR7eqcggAZsswwgNfEuXQamWuGRpRZMQb"
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
