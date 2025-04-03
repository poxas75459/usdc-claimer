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
    "5765wC6yBFMuQHswBPwJcj9T776fpwB275PHPuSsde6jcuTqehgHmXvXMvqFfAQhM4GkZ9xXpUE5pyaTBvwKqFwq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mLiLVKB1KNAWv9J8YRgnVcwKXYTCZPXWkyYRDsk2Ld5TESupzqWhF87N8tq7evF11kf7UQxbN8QKFWYh4mruoVc",
  "key1": "3YFFnc9MBe1s6NAZ39KM56ARCVH9Lcw5fCncXsonxifpfAzcG4bYjra1sz9dPa8msWP94RmmL78J26vHzD3wjWHz",
  "key2": "2hYd8jsnXe7VKKLY25V4rnVrptpcT7xCUz8gv2BNXa9oYWSQGpQzdC6F3w29kd3iB1jbrTGLNgAczAzVfDQFfhPF",
  "key3": "n1eojQuUgd38DtgFNzx974q1CqMcxc3sqTjk2MWH6THCZvx9TdE3Rns2gkUggi3kW2F3ei8WJa4EkmLa1iuKm8e",
  "key4": "4y4cgh6izExp7qTHLkZ3G6W1nqELyz5xzGHBhsdkUrrqmPW3b5kgdRV4cnM1TCgqn12naf1gPL7z64RN2uVfjgbj",
  "key5": "3dGDvs4FZAMqx91qBEnWAQaYALZZ6sQvdAW6zZxrANYhVJNvQsDQjojDFUzC1AW4VJDqxNXUyxoibPTvKbobg5bJ",
  "key6": "63fzBDknFqq7kGyBebJghpRiSUbfhomehLEbPxpR1L5EGDYkgjFSiFLcN3QA15AF2R5vbScMUX2zoFQDgRStfGjg",
  "key7": "5mHB5frpm9NyCz86rpDpETD5f492PGYqvjsae9y4wfxvA2URZFYGq4hYhkHHJzhLTJ8Lcw2KBAxYMwWf9HzeuJoS",
  "key8": "553DGLfJaPkMMEPNdwqkHNiwV7H9D8GN44HnXWPRr7hp44r45A2uufWZeCGx9Bpv4A25243ExTUKeekzMP9z1yqY",
  "key9": "2KVRUB5PE9T9SAQzTrvY2NKX1WaE6fd5NKxPrXCR6PjWNmf2bg1dRMRWgF8zzYUb4HmCSPgpqtnYpytRiYDwoJSP",
  "key10": "2AZtLjDKmsXovUUjhyiA5AbF9pnD2xwwDHBZ2Cu8BYGoKycZAh5PQ7rkw5cGaUwn397ThqGbKjFjaTvu8xdHrcqU",
  "key11": "3UzQk6cqHcsWd8Si77CiRe9BRY8N2RDqUL6LmxoSLUzoheGPddNeAUNbYse6HhcE7jHS6g8fjXTYmcTrcJfoFJKT",
  "key12": "53bNnpYodJ3f1xhYTuDi8GpmnAiHDKm5LD5ZWFJ5pceqymhyS9C5k6QwSppS2AgQkjhJDZzHREsqUvmMz4yn43y3",
  "key13": "5c2ZduYHeNVGqB75pBYBJFTzzzpvLRNE3qu7fZbMzFcQApcKdPZZcXM7waezVSCheTzuuCF4ib7rdUrviwWi4DF7",
  "key14": "3XUunTmCVn51gfMJQS4E6NuEJvY6bk7j6uqATkDNNkhzVLic864nxYkJ3wakBXyPLFCqxJ2oANMFXBewAGPkrwJk",
  "key15": "2kpJjxe3LWW8ccywamDUkm3qYneGJWf1uWtN4HkhwgLvog8XS2BusGK4VqXV7aizAo4LH4S8SoLLawnjs2WMVpRA",
  "key16": "56bv6xVDKuznwPkR1BP2kkzv1JQSV8ruXD7uMTCzFS83iqdFj5BNzoF6L4uFH4mXNJpjrpBBq5C4GThh1HWDHZ5C",
  "key17": "eMDb9tRCpLMVbniT2n3reaoRuafGQ8szfDsmL4Fho5LwM1VoWwSUaXrSXXk3q6H7tvicrtW9kKMbopbZSUAHAEA",
  "key18": "5i1423UWJuKAFui5FEUbWYEUz41DFTmKghhHh6AKfLeaYapYfhfMWRkHxc9ikBq13ffP7rw9UocLywFTZXJJrZne",
  "key19": "2QvvBz2q57n1FyWqvwYy5DVgiNm5rnfo8CC9sQzzd97RxCfkHrLZWit2KSxJZYJcMcf1A1oHKb3x6c3fkkjToJey",
  "key20": "guiksaGPb8XUEPkvQFR4qaNvs45YTHJp9vZNFRXdh5TBTdU37oXGNScFHjZ9Hvf5v68vjFPvSRe3yNEGuzqXxxN",
  "key21": "3zHgMSAn3XXSbT3histgm4VCxYuCspFrsZCq7TVTQVA6Crs3iBPB1rME9SYieHTCX8drnnPk2hgaDpHt4SaAmHKJ",
  "key22": "2uig8LJtHwdkwBvz7LTJztbg7jkUpcULMJwmXf3mZXgNRztL738zv6Ukj5WUQi6R7cbfmfaPxdAgQxRA2fVq6yuo",
  "key23": "3nR248cRBch6ucnmcNKF1nHwhjsfpjpBAijnj72rupiow6nJqHUoqfJdPsjZfm68guzZmuqM1rudeTMGr2XrB8Ra",
  "key24": "5F4HFixmNdtWqAxxqXfHdZpcNmtLPLStuePqpzLwzJCUdDbfdsC67pRUY3WJxavHYcRtwGUQAm1HckAC7rFt9E6E",
  "key25": "4Mkibf1EvRLw4YaXKB18HW6GehRVBW4CgMGRiNE326AoaB7E4QJUeUpf7CUtWCGgn23X9DVj36dRiMxcKJvJ4F1U",
  "key26": "dN7LKh4YMjwQi7cRx7fhYdtUMioAr7k9c7vXan3Epo6LqhA8Z3SZNCdqKWxnYNjBxD8u8YRimi6rmuhha4eFfFx",
  "key27": "2yET3J6G8HqwmmUyoGU3KFDr877VtHDTpD5ug4T8YUQu3YHwmxzQ2gyQLtz8aW3y4dSXCCkMcYFP6snqCiEgQ7tF",
  "key28": "5XTaUt1tHASrUkMFt6QF1yvaKJADj7PGwsaAnfDT5jrgVB2hPFnJZPUcwzrwAzAeTqLiPVzVGHsq2ZqNWbyirMzU",
  "key29": "3iUdv9dQ6Djw1f7EfmSxGa5YYj5KoRji1HsYyVwbuch5urmH1CsVwJuZiTSUxse3DrfaL9wvdzYr41RjvNgoLZ4U",
  "key30": "4foGChps8Xm3tqZCfGcq7kLQDYbArh7gDqjqYiDATzZUN1xLCMchBMwjVsvbhqof3wA3pU6hgCf2SXd8eS7ZmKaa",
  "key31": "2d4kcTcJFUVkd7T4Bpry1FmS8hLHWUyjz8PwFhcojcDVppnnH5WwKnDqmpXDhHrMPQfgNfv6No9oQ3toPHAv5nVy",
  "key32": "44soPPMjHNRTf8np1At9Ch6u7ixKyRjV2s85HyQc6vjQ2ut6xgz6P3bMSFqCnayJWM5yEtx61QdWbx6YpNr265ZH",
  "key33": "646FyEJGpP7dG8yZ6LdJS7AQ9uhxrJRGgi61yRTYjLBZsjykjUTJSbaPgJUWCERJXcFzDpP7jWBJ24rbV6pepisR",
  "key34": "2y76evyFpis5FZwV7Jva1LnkA2pc5ZZbrqeHB3RTTL3dhMEzQSCnT3fBehA6wm159wyiNHkyFEGwtg32nxE6ixud",
  "key35": "3qJ9TqgDUuPZrGBh8TE1WbpSbDrH7dR6HKkhPWA4orDQwE7p6x7DtpsE1c6BkxxxYBH48WwLamN3najJ1NNB3c6G",
  "key36": "5dWMrkfZrHkBL4z9YNzfZKS6HJs21DsqLBdmFo1pzDp3P9tYzbN3yXWZqZFDt89QD7WSHg5bfV2MbWppnmXrdZJ9",
  "key37": "25vCYBAfemFYMGQg4Vr3vuNZnDyNG5Jer3s8ttvYDSSUyjs8ngtXrY1zFFjqkvWZ6b4BKrNrXhDhyQHBA1YCCRdh"
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
