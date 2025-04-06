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
    "5wRhyCzMUD1chjUA85jVDjRXog3rTwqA83yxpyYvE48s3XTmDoiQHk64W7SbisHoCtgwTJuj4nxvDJCXVKcoWJHt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wpZ5RoFPJjzbnKuoiAPrgzE3QhaekAYFDfA89EiYs6L3J4ZSQe5gEHS65pAFnj2YFDotxfLB5qncMBgfM2w5rUj",
  "key1": "ttk8bnACbw6BXUqoDUYG3fUD3DujwzS7orpL6sttKkDxNXvKKnsYVz5RqLmoqiozWHBEHD5LGvU6ntow1t4JqUL",
  "key2": "5g8mZnVvVr1eoaDUxgKxryRtfy6vpz2QwzLeU6weMotaiWqdwq68e8TA4pBTqtSSSKGVhVbuUziNm1xQ3fo8wuXq",
  "key3": "5p6255Wtcd1vxZVuXvrKmphFok4fooJ3ETE1wgAVv6WAKP6nB4mvhtD2trNj8JaAeP1SsUQAv9itjmFoTEoVsrhh",
  "key4": "2BA3HVRExEeyz6qoStJRimbDfETdSoyZCBqfRjpaqzoKVNzpnhwh1VjkNHowDKxqs9SFBYWXd1YbGAQqttaLSTQa",
  "key5": "53ZJ43GAFDwQ6jrApcgU8DCwnLL29y11NtwiY6Wgr5QyqAFBEqD2Zr7sodqg3NS8FXKtW1N1eERGcWrUfNuQat6E",
  "key6": "2zsyESVvHhxzKQJovH7kU8AKwfef9RZNUXqxGYVcG25BZ1X254FXEzX8LizsBAshKbi6ykncUv8AgtkvEReXiH9",
  "key7": "5g2LG3uqWMBVQJ9K93hD1yGeXAm4ZufuqKFcwRNgSj8YnwxtTpEZbhsNMRSw9KAPdkVt4TDk7ULnmjQsG7xrwdqa",
  "key8": "3NZ7AceywuEiiMP7WUYri6eaCk3PFnhFfYywzn1AtXvvuymsFbErpL3GuKdVf2gR5g5ii7cEePkmgse4Xe3EVCsd",
  "key9": "4ma56YToFkxBKVze9RbgBnRXJzHs4W6MWT9nUUp3ZTSwwpmY6yuNV1kzJHPC5fQq5ZqoaVH9BAxWBqyJKqwmr4Yj",
  "key10": "52YgHh7B9MDxfgBrS63aHf6C6yuVguJTLZtjz9S5EGLL93WjR9SpGG3xaSTrnvV25GF6xCnxef4p4yzPCvRwbCSV",
  "key11": "3SHTUL9SkjWk5L8SS83UsPyH9znRJegFsgeqF5t1R5qyNkaZ3qELMU6dKo92sR7Yna9KZ3JQrN6uoc3nRTyz7Bao",
  "key12": "XSy8YYJvmWcLwx4zdokydCrYDUQkyjYBSyGqgKgWWa9qkxXVBitv3zcFbF59ACSJL2hWG4BenXJLEtqzeXxQSak",
  "key13": "2GZ6NNatrmEtHjC2rC2GEPactsST9sQAAjNmSvpjha8ymnhWGM7k2QKx4SnYMuLV6srpg5wkh2vUmvjYbAaMTPRV",
  "key14": "4sRyRGLN1SecszQJJaNQPJbHUrMWkjr4mzFbr88PDV5a1UQn8xkNXRRE6qdrbtTwWkGWZAvaq6Ek9Jb98FvwVG9T",
  "key15": "2d7c9KPhhVYDs5Ham4HCBL1P8gEWNTmBACEn9TtPfrg1bU3kvkzPiisDuDeJvAVJkYStMgr9Q9N7rZ6rLyWu85Qi",
  "key16": "5MJ97Vz3sizHkvb6xN8ZC6dYmAyARNQoRSLM6NwhmBs5uSQTiVfDCSt5mL57pNTvchDBafLjkUp3mr7213KhXbGS",
  "key17": "4g4JwEsWCLTwgZkmPyq4LXgS3qBnxn9Pmny7XYm5Yi6YYKEAARKBnskeQp8WyZMmwVmoaRWZXLSuG7zrVZsywhpA",
  "key18": "2d5w6dhUmF1aMHDvYLQ1bAKXWMyAWPsFW9se7LQW8nNQiKyqbXHY5SHzNykwwgPFu5GwScSGLwKcCKbxXj7288Z7",
  "key19": "51ZxWbnLnNCddHLdQ4UhVYu8f75o7ARHvGc6YBEErWNnUtFe7up7jBiK5u9i2DtoqXFTMXUjBBaXq4MKLo2ekzPw",
  "key20": "3NtGHSGwmtzACwsVoU9GR6qvUPz2p7NS2sif6BPftvjtqEcHJRWSMxeRFC5eikfsitVgEksDwyWzqr9h2844uQPq",
  "key21": "36hiFGYiU4FqJJ1C4igzXyUZXL6zjC1E1TgnZd85R4yKeKX1SbCBqWRytJrUAvVJWLfP2d4ak7N9o4d3URapravB",
  "key22": "4ZSyqLycsa1MqdNfiBgdDASMYsHnN3r1bi6zCHSrxn3vSiEUGa2sgR3UphPuL5CtyKcdi98L3PFvsCaBnKmzPbLF",
  "key23": "5SpgL97NHHtBF7s59rR1SzTjp3WZdD774SEZJYNm1b3uDDrj5x9mpeHoDAcNVfCCkPtC5uFjEqUjgF5bd5Kn4sDw",
  "key24": "3KcNjzz5p1VzkjQm1UqnqNGCCC2SELqoRPxpSjGoSLhPPsCNtCHik8kT5bdXchtXmdMnCvx4LggG4HTWNAP9rzr1",
  "key25": "5H7ofSRzNTt4L7wDN3WVTVpNoAk8zSuDxo8SSu3epWieg6mQaBYuyP1MYM462ZTCDXPZJiYnonVv2Yg3DVxL4J1g",
  "key26": "5pq3Q9Z8figU2Jc1rHhHGBPkMvvgZjMHLWHEcuN2V8JKVVB8EYBKubcZk1beDSnYCL787o7RexJPqGepHnjYNNwY",
  "key27": "5b8jC4kenXzx6FcG5C3Pijgo8ND8zsqUSY5XDqEuJUqNHVJ72wCT2rhTWfvpmCyCP3Tw5VHJ1g1k6AsYxcX7NQmQ",
  "key28": "5BKwEvqFuHmm2Y3ArWBhbmbxG6nHCf1r8Q5Yr4tqBTpDE33RUziqMnJcpHXYhQZ3cZ3Nauqzv1UoVjyXnUY5ZMX6",
  "key29": "5TsASdjRb75QSa45vTpYmrSrynw5gHjCyxaUvt3szwa2gyopqJtsK5wDqkAuhBFtf95JfhW1zJ1R7yq6YP9q6STN",
  "key30": "3S1cvGNgZPyGTwECvMNDDWcRBzKCLgRYe3xSzdTstUwsyDLMcxFYTPHQ6jTHUxGxFCG5CUBaQoym6raePKd26zS6",
  "key31": "2LsfEeQMapnqZer1qLNQZBRRKfrv1r7PTqe4UDhfPTTj1tdYuJdJvCQXTScwPdGDUdTtms3F3kfSKH7GyGVc4pZZ",
  "key32": "3U2KvB63xwoLUEq7GXcSY4tkmZHzE8qb9YM5S4dQjdd4fthvkC5SAkUobDmGmFGW7Vtys1SZkMpUmoFrFygiFSHU",
  "key33": "5UuTGWgbfe2sBLKHRrYGPJq6CqRQxMartM85VAAaVDDGreMUjGmmb2WgfDn2q6FrScPYufLBDpgoyYLTu6sormXJ"
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
