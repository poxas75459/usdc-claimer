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
    "2Zj94ML4ric8cR4zsrVHEkS1VodfDHS7Gi9ijZzoLUBg2GkjUrAapYYJDi4yiYKXUEEVcLC6q1xXwJz5hggxGUKY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R1j1BgXa7FuCCNcnmGmJj16JgqpLQKY2p3FEyGC67JsCds8DngJ3rdH2NwnzuxnQi9pp6DN7PcgqSLRy5aBiiRF",
  "key1": "4eZ8SiUsV1jKLt4V8xJ7uJp4rAGy6dWD2foh1WmqYUqrEQUPryAK8bConKXV4DZke1E2xyf4w55x6ER6SR7RL2qe",
  "key2": "3eWn6Kb6b4vpnzSejkJc6rR6BdqhQd9KoiKRs17SqJxzEPujoPYk31xFe7tPm1ifxS8gcTmiWxrpwvcm59DLAXcD",
  "key3": "5sxLdSz5XPgL9gGvm7FTeGPCEwmFaAhQ5Qvrp2bcooNx4iW2LmaWFSR7dhYiazhYhXDHdbAAsuPXZ2TXvE64tGBj",
  "key4": "33979WKdRRcc3dVAeE2QEJAcFVsd6KeUCzGoFeYTGMtpL21HuY1uiPQPtcYeyoG2vXnVpeXkDpB3aXgfjBs1YaA4",
  "key5": "Y8cXcWNBhAfzPwHWLkwv9jWmSU22A8miA73ZbNq63Pf2RttSWR3LY5E6NjchK8brRBZcmhwHcRLdLfJHgZvH12g",
  "key6": "26Zd5XXzqRiE4azJYKRU17rPaCzydpta65UD2HbSwNGsxWGMS6CakfzGhEmWU4YXfvjdMUVvCj7yoHJVrjkqJeJD",
  "key7": "28ZoPcQrV7D4LUKjyMv2iw8QwxAkAFtjrtewugzErHAjtpBrxPAtqkXciRxKixxe6z2Uwf9EHVYtaa41qeiKACX7",
  "key8": "5woQx9J42gkgrEa7SURegCZBLMDdS7kKbsb7frtAPQpkfdVq4gARq4n3BRBS59aYHw8FxrTtyayExDy29pEJ7f1R",
  "key9": "5vWJ95JW3kRgNHtcDGzVVuuStwWNRDGNyHeq9gAJVWeSToAbXpZCzCErUACbCCZUhE75G65NDWuti5xvB1gKmeve",
  "key10": "4yB8tiXsosx4vCRrhA1Ggch6XPZeQKW5SZGeHEeU9KiFkLY7W9G1TRaupBKAJoPZ7f2rCviskte4HJ3ymAUhfq7x",
  "key11": "5Eb52J1du1tJh9GCR2zXCFxDeVG18aPZBfQgyuvpQ8gVhbY8G4XdyUS1Unmq7boNDe7NqM8RzLKfcCEpL1JJCDyf",
  "key12": "22fBp4waKwZ4uNwppQFTruwbFundaoA7NDhwDmnNfpAHa3gWuSbGP8rcegHRswfyyVfZhF88AiMkpvam11UifLJS",
  "key13": "5m92wxC6oNDQeELyhmDo9ZyeazQLmBmtaHsZCSHizyCk3QsQZuJAZ1mZ8fZEK5C8HkoSigjKRgerUWfVwMiRnsYF",
  "key14": "2jh56L5X67h8RH9dVHTzdmuotqxMr5ouC2taFvRJ1HsNkUtfVxYnXb5EknX52zYL92G54Azho835FPx13txHmdbr",
  "key15": "4R5uNpCSbQqsQHHWqh78JFBA5dGnz6qdTurPW36dPfXmuCBQqZgm39nLJy8oQoK1zL4FaYHTYcXeUXSnYtDnCb5X",
  "key16": "4J9Gi8Ru9RVSs5hE9zWb2Hxz4ErnaLseH1tAXS1WYKwScnPEKBoMN9oBaA1HeS9SDwBb6EwX19xqMjv5LawzC3aD",
  "key17": "yi2rodYTfSgQ7TTCqc8cZkP8htAZP9bersGwWk77pmDZpc1SWnqXjWiTDVrddhPuuVwN1hK8VHaGapo6z54KHeB",
  "key18": "5zFMQHEUxuA6jTsUnZa9fP3yE1KHE7Lkbsk7QpQeJkCGbWuriTC3g2dQEgSiLHJL6xDpVPke6J7v25ThD414TseD",
  "key19": "MMMfG9LVKrqnNx3JJZdVPT4s5G1y9JdLefzw8NjbT2YvE9yUuWefPAxetrpyTzmQaCtPCwG462GKzp4qr2aZAZw",
  "key20": "8AmzQc6vcjUAkivtgCKk75kCetrzNQHmz1BTRedERyS3w8d17A7ZiEWn13H8fF7ogZLUNmEqQCnS2pngrrxf8W2",
  "key21": "5TC3MNb1dTKdLn1mP1N2AAo31GLdn1krDDUg1snXkdF2M62KzUJ6ykdA6onqu4jKzYyq7EcTZFAJDhQoJ1ea7Med",
  "key22": "4BJvLg3gRtzKzMq5xERwVwM5Jzvuyg51jpQ37p36tAR7rsGhG4bakwgbauVLs9nsw6z3vBSMwJzQmRg3PrXDP7W5",
  "key23": "5XVxjg3jkzbzF6zGvobw3jcxQzroNHhbG7uGyrtNrHBvbXme9QjgLhqLeV897DUD1dW7bEfAdvgojYM23o9jVmRR",
  "key24": "8sdv8dvqhtBpiuiwpaMf7nA4siFZEQaMwK9vSFh2iGehaPfFQa9bzHvUKWkBnt8PGbZcHrMhYTW7DvX9QUu9FQx",
  "key25": "4mwW4JXsXnLcjXkpmQDkLCrMVPzCatC886mL7RYWW8WXNKukCLYoziwbUtFmyTuT48y7XSvVec6E2Am2orZ7ivTk",
  "key26": "44XYNT9MZjEprJHyChsMDYPbrHVv9QBSw19xbmszQxtAcsPAFd5Qe7cDXSWMunUmLm8qXGPZQyfpTfokWqqWFGLE",
  "key27": "srhUi9gQHWDmAoGSp3aEnkn68sQkuCH6KoRrQGJn4LvQne6F8iGG5nhXTpU98LjN56p4o9rijJSoEBowrf3yvgq",
  "key28": "4BSVPmVipnyxyeGg4oHQSFWBy846T6KnkLCwzYgEvvjMn2bnttuhZCfpYdvLNZr2QCfUrYxhBjgaHKzMWfmzpe87",
  "key29": "5CajsX8Hx398iJo6B2Rfq1aunia3XJkjeDHbcLKzwr78TL4HKHZhURYkh5t1xYQhrUUgmC4cdBvxSoPTqQW4T9Rh",
  "key30": "Ewb4D9wjBGS9wi1r1TcYABmfgL4usLQ4nTUHUsYRqb26Hcyq65Do3dq34Js6DWhYCzUNpzqhqESVPXgKdhc8vEP",
  "key31": "4u99T8YTogB48ozNLaSu52iYsXs5LHXY9DPgkaYBaPtiMjYHYpHRjJzHLCyXFEnpTSa6gCbhNrTV4jUTYu8ipwVk",
  "key32": "4tFfpNnJwoXRv1u7smUGhncRsrZoy2P4Xm4JZA6GA7mWuYqJbB4gAbPpuPsntvRt7gUjZ3ER2dovyePqYKzKVWRe",
  "key33": "24efEp4imCK3oS7johXgqhL5qh4SjLhi2DSGex1Xv1o4V5Ny1mK8vgKM9YaFN3mYqRvGpeiXcF9LGXJx7AJ8mwAQ",
  "key34": "Z5u7voUH4YXagXDFCPnegQEk2Xt8448o9E4ot5BEVknkN1zcMmbGfJzGuGrQ7uiupyW1aZbaojdcBWvpZou2S2n",
  "key35": "NJTpfUxjqtL8qANTbiuoP4YQ4tFgCVBPseg7z68L3v8aFpUagmc1gnpggYhuakLTWyD9oDSySDyw5TRhCA6mhKh",
  "key36": "4m16ZCrr78t6Y5heGcvXNDu2CPGZy6FRUQRSvK8RjFbHseTD3HSgsFkXN8GjWX9RQ83hwxtbfvhukk3eiDbHy5pg",
  "key37": "2QgJQroYKW3pjAh2yPuwMUFT8n3e2KDAjS4Lmwf7tVNQWV8CkJUTfjzDtkhU11WY3UwBLXaCdYgP3kGAmewoMFz5",
  "key38": "sgHsXzXc3Xe9MhwWoYdTprgL7zQSw9UnMmethku8s5dQkrnhBeZBbsXNVM67uBJyYyzKQ7tJFDc1AUWRxfRgaYo",
  "key39": "36WZCQG2yzvvNLF5zPUfogMyffsEpEiuFDJnktVzxfPjbdq6BdQdHBApj2iMktSkLDJjdxxRkjjguYjgyhxQxfwa"
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
