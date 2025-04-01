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
    "2fYzwuK7jAGNincAkTgpvVeGwZXa7pL4t99rouLmBeCGWsKk1d9gWypcmn4ewEuMqwefrkS2SBdBMozSiTXfMVaY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XfqoEejMmCEJagW8D8G2BThpf4H1LqvkHTAQQmfyY54SGtDAo1McjDkGM2rYwmNhfiG9tjhsz1y4npKm1Y9dneM",
  "key1": "5fPKH5nQh5n4eDaAA2JwmK6ZaS7QrAYsGcNWwwBdaRa5XTQMyimY98QsmskJQmLcfEM2sFJxrJM3CnbmF6KZ9JQ6",
  "key2": "49CCvvwGbGUi5zsQQx6eZFvcBaTEXa3TUutFEeZKA7vGFQxe43nhYKSuP6wTuDd5XrSoR8vho74AyKhSF5ucFjUm",
  "key3": "4gzxCzfdzeGBvbbKUhu1XDixWVESz4Jbn9GW1ryPuTi5wioDxbMXD3XcY9DRMTJnN3sFTFvz2Kb9W9keLnhYHTRP",
  "key4": "594cabvD3s7NkUR89FRKVMDQWoz5JxSN3prxQuaN83t9jJnB4d3QX6mnfAqo7yUMWxJ42rj8cLdaPo6vxrDGPvYX",
  "key5": "5xTRJQDUgAgYcdtCZkusbJrmqgfBypQujr7UjyPPioYztoy7DVGaX814tj4Qczt2VP2vFnczYbyQggABKR2GJ8di",
  "key6": "2So4fqFLVYYRkFv8sGudbx9Q6LWpZJWy9Cv9c3zjZSfZWPFyiHmoJDuaiZLPAHagAjBYqJ2HF2TvMR3ZqaqLK9YP",
  "key7": "4QenuJ68t92BNtUgQk9buTc9ji6JkBtKBbgPbioCWdstSuCxWDY4wEB4dKg4wPLu2pUu74N6W2e5JLsn552JUFRs",
  "key8": "2RWzkjKPN9ytyMCXfjDux12J3HDmbMdiFJX1aAicw3JdnrMdJ2TfYxqqqcEBu5uMpCLiQdLje1GMgr4rjmvDHLGQ",
  "key9": "3uda7qyLAg4WRpYQM2M8mDcSVSaFCdp6ETuGJJa1rFSXxKyWMBguzxjoR9zNkJ5eXvn4uxYSVh8mFLKbu8GUE25o",
  "key10": "2gnEkV93AgAgfRgcoWHDfGB2DZYNUpfsJUs4JpxfANRj7W5UpVBjSG1x5nUJebKZtN2GpQ2dSt7DXSTLBTvB6s14",
  "key11": "4FG2FXePPrsnQe47J87yy4horXwJ39vqxqd61b7vq9fxYoherRSbSRWBp5E9AgHJSa1zNnycMYsNWy6D24ewyx9Q",
  "key12": "5rBS9P1Ln2wEgEAdf4djruKXY8nnu1VDNzYhwX9QjBTV64NceDPhgQw8BLt5DUuSQq1xmaaN9B2VLAHykc1Ggksu",
  "key13": "5msEzdpLTgH8HnL5C4gfKVNTyhN2eej3FEcmFgFCuiawyAHqxFKPA2q6PNAwgRwjQMFZWoovwGjCMjkLo8TKHF7Y",
  "key14": "qA4aHUm4rGa77fLWrpegMbE7fo7cYgraDba3FCVEXNELTZuHQX8JSxTA2KV9HeUkHqt93ZETRhBChZJtJ2fy215",
  "key15": "3Za5axBdzCrzxaZK8PTdbjv4wpMy4yu1djtGNJhXGxGDrHZR8TJBHugQncn7EXDFNyazDwoWZg8ECxsXDisvFZCV",
  "key16": "2BcKKe7acpp6UgqG3KoPePQpPKzVQMrNXw3Q4qGQmqyQhLKihjAEyLDbXdTGAgKSrSCKaVVGC4MWNs5j55MgFETF",
  "key17": "49VVx7eijUBdb5sotsCExs5bTJ86LU25bAWvLw1AvibGjauw5eVkfzSajPcg8JD95koJ7JcR8k5sLraFgqvXduEM",
  "key18": "3NouAEtByUgeBAzgfxRi294kS2eVpJwHEFsG6dNGTMdag1DRMBJcCZKqzJQ3xFJauHugZDxTuCuBmoDFEn4Z5xM2",
  "key19": "4VH6B1TaUoCdvMS4TTWB79hh64x9B8BZL1xLSTvHfB1T8vS6QE1oU3NDqYEfHWiESBpYXsZZxjuYkfQfrvKYDtE6",
  "key20": "3JE2Xm48UfRLVWyTqLjygmdzHs6JMg195bHMSjTyWJtnh9VFoMkc618Nja6JxNGrHExEnSyKSrbdg4SQuMgKM8Bw",
  "key21": "HuXoJGnNYTea8uHXMVEKkmUpXatuZT3owFQkKkG1EZ7jrPgmxQsG68s1LMM3S7ep81dUwQUH1tv7gkwnDDKFaUV",
  "key22": "4tr9AaYwxs3ytpKSGXqKgAXFqZkBMMohqo6A5REytQXkCpRD8zuTEKdvEydcTGbbxsbKWSF3rh9vi7fkSTmTYoVn",
  "key23": "2XkrFgu3HebdYwetsXXQn7tC5HKHUqcXkFWGev3e94DQEewU8CpLZNGvFwFjDosYqmbFrYMqUF1h8wdyJ4JjbfkG",
  "key24": "52F2y2xQPzuRULTv3fu4QhZKGmk4r6kpbh3DYbWyuM9LMHujTi49jPR6yUE7URjU6XCby1PsBvR9WDpXdw8QnAy",
  "key25": "3zPWEt3uDMDhjidxvcbbFjgrhWP1JrumNhVTVyNqh9ZcXo5pP7KpNsVnjD5Q6JYjKtgjcKQPBKCEQQW43sQmWCf1",
  "key26": "r8RJpPQyDcYFshR52MxRShaDysXwsM9eRGqVBcyAvUrTkpUQXBGP8feipqj289MKKXSTTKwk23SaVntvbfxstJm",
  "key27": "4ZWt3aZ2ANG9VucJLyRqCR9AmJH2Sz8X1Uu19gGQsTUaPgh6mgkcne1yL8rA8Dt6bP2QG9xTmc7Vrjx37rR2RAUh",
  "key28": "4qNw5jCAPgM32rKs9nXA6doBgsL3F9Eu1Hs1QtZuKYwY56wqRjVxDZxhQZcHv4Yf8x42swXEbZWxcEgU2ajGrPTJ",
  "key29": "46i2gzoPLCDA3FcTQV1rpjRNJ4x88SQFzCb9bWVDRRfn8Hadbvd55q5d1mWAbgZdTQt1KrG1cLwN9ZK5sXBxj5M7",
  "key30": "4nEczaiTxHhQ88j5gUp5D4LU4Wf2PTMNc6t6GrE8KgKkMQvWRVuQbqgyZoQx4mab4Q3hvvNia9BHqmQUXsmb5ZZW",
  "key31": "uu8rjE7fCaoMtZ9q4WWein8A3KdH1LF2ofPpFjKrTsxuF9ZWRXgMLUq68fVS6rubyP2GDtnFayBBZkXQP4P5rhJ",
  "key32": "UiC3weurDko3NEePtJ5XopNR8jNG44Y15r6tyCLMTFLeRUqcQuqHGzPmBFxSpqfuEEQM1fLdiX1TgDru4Xb8crq",
  "key33": "5yda9iqNGYJMavwWomjKELHAmaRPZk9rPsKs8AwkgZDo2mMJLMoUNhDihMgkiUZLxF6wGjgYL5SNcEdqAr5NHVTL",
  "key34": "3aDnL521YPcLTB6RYAnZubsACZvT2fmvDaLusZVsPqqKyP6gSbrAnGskYySx4qM2sap1VR9Wz5m5PVUjKtprgvhK",
  "key35": "44oRBCAnyZkSLhLXesxtxmpzaWGFZz3VyQii3V4zhdjmMwASVNq1FUTtHQyLvd6TZTgqTjVc4DUigtVGNMZWrUah",
  "key36": "44fviJhQLhXHMYVrr6gs3P4bNdutiM5vPdrzbzcGSspbA5qCWhBteTr4v6bCjswjxMy5ovYwquK6HW3LqayxNbg1",
  "key37": "66xE1kWLf9cZ1cNGHyr1A6jtq9xV8MkJqSbiBZb24uxGJVQYwg2WTzS5FTrAbYogSo2swexv2CTfVVLv9HnA7yMQ",
  "key38": "3RifcSRq1tsgGu3j7quhvmvXAozLKvf6hdEybLpQv9aQMw1qtDcg3zpBhyrvvZdgSUQg6P1dKkqGR9ZEn1J4KAVX",
  "key39": "2hjPpcSoYfZYK8JMWgi7df4rFQg2vK9CopJH3KQA8jVfKyot8ZjEZXHZ5NcDPy7MNMY8x4j6b8oLbpTaF3XiAJJL",
  "key40": "5y36AhUxaU6uSKxuiry8WPMCKUwB3JbjH61fho9dE43dN6k7tGgewmQs1Ewci1Y9aX73a3vxQ5Uom1SGETdGhqmr",
  "key41": "2URTT6KoTeqoy3gGnmpBL228khCBDGUnU6LMraL7xScYg65oA6jCP9mWE3zr8tZpJCdTx6RK2pvQvmWvN8hPsi7Z",
  "key42": "3FxEPqtJ2eDJpRUXWWxYyPp6p2QhZQRKhvcigiSrGbyTjDrVSxrDM8aifQBtZrUz2hpVNJcPU2yT6uNU87kzMPHK",
  "key43": "5gTAFFAKKdHa2EdiA2Uh98oWGoSKunQxzZph7uqu5j13rucz4gqdtm6wMtmaRgfVgQXWbVhUpn6UavZE9XtzA8T6",
  "key44": "3p7aEttYzXdMY5ataRmSzsU3ieYwXhfVJ5Rpi9vdyfvfasEygxTe9uGU6dDeVibP6Gg6KAu4rZo1ctjVWSuLUxj6",
  "key45": "5aw4LtWBkqp1Lfy8SnQNrMfbVRkzuZPAbc7ojvAPNW2vhyXv2xavF5RksZ2QsR2hRXG9CdQyR6Kh7i6DWPLhupR6",
  "key46": "36zgEQsyqZ7YAQDshjKdyqRiXeRm9Rru54obAgn8Wyz5J9bGy1LokQHR4kqeY9EWvJ8SAxG6m3WB49yYfs4HDS6R"
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
