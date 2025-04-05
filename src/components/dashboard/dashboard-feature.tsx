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
    "5wELCsph6oAvY5jncj3T3tnnQJcKT9gDgpxcuhtwT4PFhgsmD5bHYfpugy44Loxr4hs24fevKL7AHQkQCYg3qYDA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f8ii9yYDXVJPkzDHBnDED2aTW5kai4E8VG19ua22XMidJEXuXd32wmQ3qzWbk2Ya6isjbauhTQSWVhNN7K9YnPo",
  "key1": "2TH99R1W7ENLsaFbZLwtBBG3G8Y9ULX8Tb6SKDxKdsS2cpaCM9tqnbSuBxEGgxm4p9DzmmXnB7JWGEvnz4a1m8z",
  "key2": "S9A94NLLbAWBZqRYVX3ABjr8VU893Mev313gB9fkKhHzbRqNt2QPw1prNKVYJ1zx2Pp5EaEdRPX3yTe3L5nmTBg",
  "key3": "3nfPo6mxAzbTbrjFcd9hCcehAABqpXbCcuUCZsHuU5C8EdtSM66A79aCTXcc9WxZtNisPrR2aDMGoKzZmGiKNDs5",
  "key4": "2EfQjuMmYvyVNFcHbzhhbgsYkKcKu2dSVaBRKMwQmRdNLvACw2rKiWiCoQSnpDwwKQp5EDLgBsu7RzRYPLQXkbd3",
  "key5": "5qSRzpg52TytwK9sPtY9C4rR5zUrfcSFCTPT6CtZr2Tm6cnGXokmnAGZYjAN4XMkPKsVHzEe6FfJrPMFZsKXRgDH",
  "key6": "2HnGbEVa139G5gjuJ4WGaUjNGbN1EjYTKrupFyLM8pPjy1hPdVpjgaBiar3knv9KEb4rnEdc9mMPCZeP3N43tsk9",
  "key7": "5JL6tC1NgUuuPjZz9ytt2ijxEfqBvzm22e8jPPxVYhGkMGWLP5ZtDQMqvvchY5K8qbBRuJYtPa2TFFa2Nj1wwB47",
  "key8": "4NBtZXt5UtcVvR6roiRsSx5mVFddQ1P2UywmeCcqaCkbWMyUEwj49ptS7MQSZBYxWcWUayNwG7G19sc3sabFZGN1",
  "key9": "buoYnknU9zg64izPW1h3jqnkaXW4uvs6PGqELi15wBH1jvVTH12YxqTbjdZH7AcvPbJQPKLfG5TGpzwpQ5A3jcN",
  "key10": "3NVLS2JALfkLGjunrGRxJ5LntZ5CMrjRJUpkC3mCDdKMVfZDesajVXoSprU2m4NwfHWXr5MeA87LgvAbt4upGdqs",
  "key11": "2dAiix4GD3omGXtjj82zEBRoTZq7YXB8XPuYGqbwBrvvnVvpPLwPRee3kYe2pWbuMEMPN4sR8uyfgYDUHrtXzvZT",
  "key12": "2vLQ9XpVEW17LZiXPsqjcBwgX6YjaaCQbjzp5s77xApsgStSetUk627eTNPwigw3HoP9T7cHwdQyuPbPdZLiopqZ",
  "key13": "54i2SeLcgh8ZqmUCUdqwMr59G4b4Vg3WxbumzoBw9YHSnCHnChAKdFCPfbodhLvH6sVNoLNhodE1iXxV2JvuK2xg",
  "key14": "4KYuKa3RRGu55iNJa8Zc45PzVutJnTmdNjULjrNhqkzNkYg1m92cn7V7sBMNr56GmUVzZeHFWLQrGdTXrQxPbUHT",
  "key15": "5YysFWLoXuBJxmWLtRSCJZmBabGXEHGeLT11EPgoVMGhsTauJ84ocpUCNYT1pVw7kh54Bu4ejVg3d8s5TYveGfYF",
  "key16": "4DRFUj2dXVmKpZsgf8vG3o24g9QyicVY2qk26V1ZffZkQYKaQXy5vTr1zNrx4iqYWMUvnuc9hss75RsD1eFRh7Fj",
  "key17": "h6StvQ5ZbYnAWMSGdWQmwUVuQCspTzxmTaaNKq4dSnoCE2kXUBCh3NsZWG87md6Zt1ibJiZ9jq2wJmuZ4pb7gWd",
  "key18": "5YWeYjAEtJ31MmYUqJoyHmnt1zpHscvanpxvvDZ6STJUwNX5KujCuAuV3z1o8A1JjqvP71R8My4rQv9SNLWGMXXg",
  "key19": "3Pyxc4oXaegVhKKnN8BXXytJwtFV8puc5FoToHDMVvVG7yWak185L9YB29Vgdm7JCmm4wWBRAFkyb9nNFHMm9rJx",
  "key20": "4owaPrtSHb9zVoQw4vM6KQ9sGAUhCGgusgrprLkBYrf8c421b95hBmPnEyDcPPj7XNYC6egPemHu5uFCrPPxyE5x",
  "key21": "2HyhHC47BdK3LHMvsQjJUG7S7Z2AznAqgmdRKMp2fM26mCAhRBu9us8eDhYYys5YwX2R48ab9NwYKpaHZQm8k4e6",
  "key22": "2of6pGhaKfYAJrrSYAHBBQ9jntmAKr32fFRXJFKbMgXk5Skjh2Xrn38o27jLBLiuUe7H5w1pM6VsUgaESGEkj3BY",
  "key23": "2tHQhDgTzuEFhGoTqnkuNY2ZomJdvzkF52inhnRX5wdHkTopdWXsXhbJxMV8ptJQ4gqA57hu72hLeHnNadWuBXPd",
  "key24": "3hmeDRXzA7WFG7cyASuKSjxrHcJDs9p7xbotF4xfG1agCseZpYLWT15d9mWq5SsyucyWnYTSVUGho1yRwcuhbkN7",
  "key25": "5P2WrzAKVfenayT8FpjRAy8npTgvs4GzvYjb1rcU6tcLkyzKCuJGDqNWCbtVSqbkb7aia4BoxsBbAEwxFh61TBCV",
  "key26": "5DDghvSGt8LGCinMoPseMXy51sXHWWefyF7JSfVoZRjrRPPbL9ZRubQBXg4gBMJSLhaSeCz8SFA4TxbsT9NGzAUn",
  "key27": "3E75wRFQFE3hQ8pVXtMCarQmYvQVnxR55zkqNpJed8P8kbTetEJGBkYsU4HDiegdGVMAD3WYR6BpyxSwoEkGrGeY",
  "key28": "2rFRoJta4XuBC8kd3bVcjqH4BPSvwxfJcG3TuNsZCedLhbhVZ78PmfAWc9mbRrn5DjmDmUq371RKvUjRoqUc2Jfh",
  "key29": "4tYAUiokLfLgky5U9pTnMz45QifoUCqM88otmSbr8Y6s5P8uDzDboiyrbp6hkFJRQv3KeKEpxB6qkcsiN1Z6ENft",
  "key30": "9eZUGFHKkZH6cRDADZM2kyds9SWdQHrkWD6oC61svxrCNrL79hdJQCCXNiFZTgmT1XyE65WKEGXa1FmJYQHnQKC",
  "key31": "5jeQgsNMpTzzMU2MQsZ7zNHGjGZSWWQNXDqQDJLazyagzSj1NoHdLJo5fFa6QSXWW8ho9ou9Av45smgs7fDeSWcH",
  "key32": "Lcue36s7VvMfc4CEpATy2jwEX2cN8Ey9KVmWexdxFidmaZoVFQmJtZGoP6UQrL2tL6Ga9DP8pGHCXGof8mn8R3E",
  "key33": "oV2mVmGK8tcr4zzmhjybq8wnuMbzJNYjTpEZV5Rx9KQPc138W4vb2tKy2KHnxXgyYhioTAV9RukorXdmK6jHgAi"
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
