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
    "MV6HhQsYcCTwYntN1P6t9eEcp1F2D3MwFLLkpik6MHcbPmnQTsGDusXyVzW5bsnnPnEM8b1W7SsqwCbMW2dGiQR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cSbiUSuKw5ZVCzba1ut36KasDZqh4WpvDE4JT7qfxTDk6kBSRQGyCAWuz4dmPdKEpU1pnAKArnBjSYVwbEkLjCM",
  "key1": "2AXV6uBhyoMcu2oLFQR1cSujwtWb6PjdguBZba7FwPzXPhWgA6KyQfwMAoYFNCkJxD2zGzrhJxa1xMREtwT3SsJ4",
  "key2": "3MzK2pQWmab8qJpvn1teSndAgkxp7Uq5UeDo2hNch4xQ6JSsVqyQoLY98trLbugX3FTgDsGLS4PEobP7oak2jFuC",
  "key3": "3T1UucYMfXEKWBu2XUAUhupaXSzCYis6Y3HacFLetxUioCXsqEdUSvuvPkyzVVSSMJYrXbMiDCH5cK8dPG1hPDfJ",
  "key4": "52eQ1FZrj5uAPW6PZLpkSuTyUDEyEJ35LFgCpoyg8qdqQANX1By333rtsTvmqV8Fcf2pwRk8Uk4JQU9zDQQT3bWY",
  "key5": "3RcA8yXBBmQeosVuq4kFbdVUuvc4Pm42nBBGom9iVyFUqGKRUQdQ8D98AFKVKz8jEzd7msRnj7RzmyTM2Bsawghk",
  "key6": "5TJEty4p6DMyWcJL4gdGeRDeczevi6ZKQFq8gNhaTqD8Zxkbdbp77fe9p25mvqWpJz6wpCZd6UByKQXvjZKA8Nk1",
  "key7": "VbNzPaoNdzyqjKuVmM5RMxdamdrZVXLZZiDpKTqWKX1FWKgfwGGZnBmoSVFe8Uj3tcCvaXxKGdzc2b2RuKkxZw1",
  "key8": "3XaF6dXnUwn9SNnDbPLKi1Pqqo2FQSEU7Dy8KJLQ2gzTBDMjps9Porap8HwJ7upFxvPMT9vARtz264Edo3SF92Kh",
  "key9": "3mZbJ9Y7dUoVgcTmU6v9HjaWxyT2iziVtiJDU6phtqhjf4AUm6SctcveSKgVVDk4FsmkXduYkGwN71mGLQWaxFiz",
  "key10": "2VXn9CgqKLGL822ipX7X14YLHwmt8SuJ3CVdSZMod8yhFqNkSGaqkT6CRpY7BZDBqz2WfPkUPrxv9Z7UvqsT4vCz",
  "key11": "5SmYSERvY7Nvymazuyw5edGLHekptL6K7s57FPJeBkBmKwy2zNS4iqqbRCiUbYAmBe5niJ6h7iV4JZgNTbqAjffk",
  "key12": "4iLhjXBSraCiDjcW5pz9ifga9Kqp8ooiFxdUVRcMNQQq9mLwBQw8fc9XDNVruEUCZwQQvZS2PQWBszSpxyNvoekm",
  "key13": "3EhiuPkT3FMH7Ggk3Ht6ywhxX7Co99esN9SyXgauqnB9NpbvcYJCgf3UsggRpAikb7CgSFcBXBJYCUnqXZV5Qfe4",
  "key14": "5TUeRb1RH7HkkFNHhLs6unrbhABBtRvwRvczk9j1CPA4SR4BUCukcQBfd1jLapeHRbHnbCsBUjRAnDES4QeTRmr2",
  "key15": "VCywHuZSCfhEfQD7sySgDbUusskKMMyHugwCHXw3XVLewYtQuBM4YNx2D2CGSdGqkWB3xibt7rbiiXsv8AGwrd4",
  "key16": "5rFEnhZ2ggqsoVRUjeSie2tbPNy2KbTirPaieVi6xZoNC3A7eULoFNhYGDcAC6Woc3DW69WfU1VUfXb7tUjWqgPU",
  "key17": "3bwLGrBNNWLd8opFmoiT3kdTvAKJrmVMSLWpSnaht4e8i6wDzSWCADgh73HFHq8B42CjWBMQfDdvDqvHo8o9qS8y",
  "key18": "2bewvhJqpvTDb2CvRLx7H8CHP6ABuxbUd8QVmcWVKj8etCi3puBzdNjYt47qf6QdnGVcGTuMAtddSfsAWLP2QLk1",
  "key19": "y29sgxNHt68hLBQJHMw8fFnWZGDTjQN2crgXJhk9n8yDEaRC1mscww1q2G3njTTe7nsxNkubVbg9mSCXT8cxsot",
  "key20": "4LqK54P27WE5ouSjQFGGEZSofA1Z7aB9JBDQYPN5nWMa2VjAYC2YoicTUbvGJHYXgntEbMN9jcJLstBGogDbeSvG",
  "key21": "2DvmFJqPG1j3fjYm8F7EUvd4sHszRWmtW7xGP1oZh9i3vETSjoiuczUX6bCMCteG1NXHrG38yxJNDC19vXBQKQzA",
  "key22": "2FsncpLhW7sSUFvBndpsoiDfGKv7YrDmjDzR2gdqqHLRvTj2e9Unr5v7NyiGMs85xYm26AMFpimvQ3yJBYgXivjz",
  "key23": "xYNdGvtz2GL6XxjLj5pnpMDbsT3FmdfuxfnrquaH7av1K5waWUEmU7ecDEa98WzyQXvcwmDCUeF1dBSet15dncA",
  "key24": "8E65doDFCbpKFen1T2gYJMHfD4JqrgXrcB85BiWyA1MH7Jok5HSBAqMZ7qjXCPz1Jbf2xsbLhdQVKkrrcw89mrM",
  "key25": "4hae7QEvxkGkTEUiaGCD83t5AXg5KyAxa2DBR4TkVe6hMtDcSG5Sz7pWyVkTAxMjgusbwEB83mmcVyXYGkTQh2VL",
  "key26": "3nTwXJhhFrXtzQKszuTkxuSqTx7BfJEu6WgPa8KPvpR3zBh5Dn3dNUX3hATaB1GaS3kKrM9e19LMJdVXsyViNAso",
  "key27": "ZtTeESnDTfSncusdxoANMTCg7QzYPqmVYPuXr6E6W9JJ8nfXseg4kpfRDgY1YAMLta32Ct8CZibC7dukkhzVCCr",
  "key28": "3Hk8b4VQCdpsMie8SVacAnB78nBDcJNEwbDXVqD3S3Z4kgrWyzJ6xK2UsaUQiwppZ5yoJroHdA9oZWDB3hsnn9UJ",
  "key29": "3tECQXyX4pVuqwJNP7kDVCLFY1CJFFHjS4QDnCLgRviVgmFBzU2wf59hm3XU6qj1PdDUxufyh9KPn6zBfMV1ypZ",
  "key30": "qCAaf8Hdx1gHu7hW6UpsjXZNZPAVZddRhfVbx3vVHKmvt5jvNJdUQ79ENG7LRDjJRJYKkyHymMRAX4oTTZpoPar"
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
