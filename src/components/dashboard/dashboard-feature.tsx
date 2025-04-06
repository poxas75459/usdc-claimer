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
    "3YSMYqDK86fye9gLcfZda3hxAvx3vdSinMWiajyfyG8EC3pd4RjaVC4rjQbHjiZ7pZeD9cN7RYjfybWEvXgCq9bZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Pdaf8NezVPaCHmRtY4mpjT2uHSCRQbDaA35yGfrdTfRHvnUew6SFk3qrHVegS6YTU2xth53HTh4u9zC2ZXsS1ua",
  "key1": "5evPFJ2iwDAzPRCYPURJDH5x4nR9Zp4WNsZT3HFo8fdePbA37tmKRD1N1DKmZixg44sDgAhDVwM9KxzVvQJYVUL1",
  "key2": "KrG7V4oLUAgndHPPx1EckjHNv9NbHs8tsmFStGrtQnnywi2qCx98NFUo313CtXmswgEeheypD6wNQmYmeDfRKwH",
  "key3": "2nnfFERD8JDhg1y3AzyLEG21Av6Y89bQNt5MbnKTL6ULdmQhX8uvaUr9Z4BYadNeHP4gaTRw4fJM9JhbTyQMqeG8",
  "key4": "4mei52Wx6Jja1bHMp7oGzCtqmKtrH3aKc5poLzBeBbaVupaNmgQhQ6b794ND6xSpCzRW6eEtydZvFRkoyH9kQtCt",
  "key5": "386aPFoqkhNhsqPUeq6cXZTfomSm2asL6vZLs6LzCiqSQZkemXupQG1cRwMtsnwkSkEXcj92pQP6x2jTQnZSMD7N",
  "key6": "2MvP6fctGpa4HEd8vqtM2JxsTvGoX56pCs71fzT4NJePrn8yZ4vpvyYfeiNsYmqxAVDue7TK17NBxSM8vd1qhdfD",
  "key7": "5dpWfQADFv5BhWTnUrbhg3KojfgV42HjUppQkmcid7tfwyP4iFoVQ5tuaYyyyG3cvZJo5hFuDdfzjWCxhkQyScZ7",
  "key8": "4BgC8phifAsAFoVBxTtyRu3TPtmTNfJAo3qx2GfdFFAi5RDfkxcmm6SSpenb4HghTBGNVhoqzBsxYUwEBAFvdpFY",
  "key9": "UgJgt7TRqKsuB8mdWHRPVvQhQSdewf2gZjyB7rfrxvXWTdhkBDficnVw2Szx5BYdhRGDushLLWji5e9JFRGjxBK",
  "key10": "2Z673FRikFNdcbr8GpRjgJZJKCf1A9jiajak1FyyU9riuGwHpKFRw4oLJuCrwQjPXhQ8v8V8QB8SpLGuJWuLwR9R",
  "key11": "5uUimAsfGGsWyZhQAgtuuFZAf4Ski3pKS6dgA78pacJHk4QASmEajkTm9fuhMgTCdLdnsHrnG69mwAgdNhCaJHAS",
  "key12": "5ckm6g2KiADzZqY1r4CnnjhhzjpP4FyWR1dgBarCa1i9ikKMfYKFFqGmeYTpwAQxL5SahsD6dzHjGH5i546xCV8W",
  "key13": "77iVm5bgBzgJWM2xvqKwek3PEWxLifHEvySoBnSPFPPfudqeNMpAzYRrkMFpQwiVzswao7i6VruHsDi1DTSHHRZ",
  "key14": "fezf1MsnGd7iNhcup1eD72AaNGA2u17zwUE8QkBZ5PBBmirbYG6uonwV48guuWz87UssEdAMbTg97784CSu1uDT",
  "key15": "2bLH71Zvh8qtwghCKC2nX6GNL1CbauPkUEvPgeJDr3DNJU1J8zXT3VMgNM68RgUTam2xA2R42WVErvoJHohS863X",
  "key16": "ccb1oiYRiXEjMNeueVhYxRcYKXrvW9nnQq6ag1Th7AX4wqxqJezvWbPQoa3cwF9XpAw1Uu4iNbWipMUtEewGVVy",
  "key17": "5fczpi1VswDHKav496wsc7E48Zz7zzezNNBLbfcHoUKr1PkFkL4p1uGxN55fj5wPfRDvsJJgDagMDo6raBHNYPaD",
  "key18": "PzoHWfehhmNcuSGhhU9Z7Eev3DQyqzyMjuG8cMK78bKqb8YWau6TbHvPjm8w86UvTHzj3NC86R4u99BRiRJAGvE",
  "key19": "3BR9JnwHnkXLtdaydSGBnbyEFc35AyNLpnugSctNoDPcXqXE9tNiopEAfizKRLGCzunVbfh8UoQtRKz1UQXxYvp9",
  "key20": "4WvDnVyLqtVKCjC6iNfHoNK2Q4VmBYCB6ptKiweN3YZEqVViLaLXHCpfgJQXRYmHZeVjTwooEqn7euXyApdHdt5M",
  "key21": "4sB2HwzHcMT7f8HJXP2g64sMYZae8kdQ12jgMg7koXZPpUMx4mGXEmwFuwoEMEt4K44nw49epM5acPACT1UPksM3",
  "key22": "4mX8vdPT4NmeHvrQcXZqjHWqsyRcGFvfeS5YdGGEdvEaxi8D8Eqng6NF3FPHBrxiwWuSTLD45HGHEChUrZynbKD3",
  "key23": "5HuxenVa9gau8L5znWaJa7yj3ryLm9nCbiXH9Uo5LehnwjAzVdu1zh7ExtxmdSUooJkjHMQC3pxnfFS96XyTJf4L",
  "key24": "48KdwNb9p1a7Wf9Qrw3M8JopAKwrpM9SDz9xcZXxnkDpNt4FRbsvyx59GFZfhBy9fQVaRFn1f5KHdVJa69oaNtTx",
  "key25": "5g72iuUy6QZqcqBUP8KSV79S8rRMUQzc3s2VsxLykBp7kc57o299uReMB4LapaL7n5MmTfLmGcJiPmPr8wd9tfrD",
  "key26": "4vjQoUauhXh14cFTV3vHFdeC8gHR6dAJbX8akEcXiYozXrNHkgW3PjyiiA35erNHQdBuz5QD7UNzgX9uTDkUAy4i",
  "key27": "3uNYYq3jkx3JGNJeQCb4gqBCMqkXUg17yP6oVkQbaW9CZyFFgzcpBfytgrkb8TV9ALTCJWcFJGHjVZr5Q7PJLXq4",
  "key28": "5EVF7wz5iayZjY8irjLSNRJxi6aXwadwv7L1VRJ4kr4VwbXuP4DpppokEDUomyBd8YLtAoZXeq6X49r9ZVZN6Vu6",
  "key29": "5NMve5LqamL2VNBa7kki5ydvAfg6haN4WXA7Dhf8MgeBQsm38eiG4mmboxcPgEaD1GCtEzHUd6fa2godvUWGBfTu"
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
