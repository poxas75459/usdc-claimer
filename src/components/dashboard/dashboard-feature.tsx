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
    "2b2fC32XWK9ELMwTsCog72X6S6W8FTfa5mFphhG2vh3L47wm3wukcyeckvxZgnxvjbascFLXyyGbEkYyKEvwtPBR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LB8g49o6onB4ZrivohNZ2uSgF3gJ1tWoxxUMAHms4rrasjSnoDTTuiJzgkY2yTnDbsKKKr4n1H3aQWsF5UsywzR",
  "key1": "BSt2NduBMqHAwFrhBqwxrc95jn5Wy8CPvnq2VXxrP8FHrQDpzpBzceXiAP2rgusjkPSioFf114vC1BHCgzu9AoF",
  "key2": "5vokNfhpnwgvVvSSLykY1kqDFrZpuVWWZ1kRAtixUwWmrEhNyYFnvcP6AmYDQREUNKThAiLgsYR7Yir6PFs6bVwn",
  "key3": "5epzJ2nrj7rfgX643QM1fTmcQoLVTXgfPEFEPBVxQFPQHReWQwjZyCW6CuzjFBhvqUDhMzPVAstkbFWzkZGzs1DB",
  "key4": "4xeYbDyA4ZB3LDxkK6eMDJ92TEkQ2g6XYWk8WcNimc1HbmQ28ABCW2yb1NxfxiNY7VK6T1rTi8hB6DS2KDPfuJRk",
  "key5": "2toJSJnZ8jMG3UMQoBDb2YNYr1RGCuQk1UnmAocQJ37piRMHR34KSbua7YC4ezGmmCDNLRyLVXvWX5P5ocDDtvXf",
  "key6": "2vdvZaLTu6RJctLS57fGLcoyGcdq8p9268GAj5cuGGFGqmoN9d4RunrvfHtC3tUzqV8LMmVzNSueUTkuTBStosSD",
  "key7": "2VDyAURv7WshNYqaZBa5ph1Web7Xo64dqRL8yS7ds6mWzwzRvAHDPwPnzbvLro4cUmJBEvviGnt1bTZTE1wVc4AA",
  "key8": "5D7xXqtd2isXj2YujeegEg568L47qFXicSUWTCmUe4QTz3HSC3yRvRzVExAJYVtvGdJhZ9VbjKp1KnACeVbpwVeh",
  "key9": "4TJEWz1N19ykQPM8A5Xj2sNDj8wRAByhgNfz3RFipHhAKrwuvgLGqkGPNBkcMrP8ZJRaNrtXANUuSqWgeGZ8YwbL",
  "key10": "n1Yue2NeeThRpTVbCVWA5x5StZKYuRBPjN1WyHhGLU1uDb77BojkZaG7CrEimzVS8KhGBMjHDdLQMCGEHhvwWtc",
  "key11": "XzBMM1xJBivxHdSbyMmmrccy6VsUSCjtEWGV54itoTd5fYL3vmMvuMm1T9kqBWcTo4pRaHJbpeiokhBpS5atXpz",
  "key12": "4mgHeGCKyvRrkcxJpP8cGpYxiZY9npzTRNxGswSTrPBC4Zcdz82a6ViK2qb9BknKpKYmaN3c4LUUYSa6nS6ceoa9",
  "key13": "5XCm6GGLEyZK7AySGbjjLwujapX3nFYNKL1H1mi789e6n9dZyMRUhRP1PED1UAvaPtRA62iPJNebjf928GbiqRCq",
  "key14": "2KjAmfCNBS8aECZgowuZAybfKhRXkDcWQVgUNBekgA6hzBVkbZ2DZrKz5AvnjSWmRhVMXbQV2ggyjqXjSNpwZvhe",
  "key15": "42Nix8YfT8DhxgkiyoqVxXttTTievH8pwNmtiDTyQs8cc1yrKzqaQf2jPRY57MDsAQJvMfdJqp9DMXMkpv98WoXj",
  "key16": "5Fuxtuy8BG4XkhtRqdPKdNaiHYiBoib7pfN47Yhbq23aiY8Rzgw3W4LW9FCZtV7yX5tFHggfeTfMfiD4yWJHwBTn",
  "key17": "66QiS386ix6MLyvBeheWqhQWGEd7cbyFeWoNS9J6iCa2HSBnzbvtgqGLdkYoeRvBMntRVggTG97PbsqpmiQVuNLh",
  "key18": "3Dv78FTUcSz4dpLfccG1bNz5Am15XjUJGwFSSHxiwRZVDgpP2oUXNw9QQD3vfFWQuRekErqDEZPTEhA1Mn8keKsW",
  "key19": "5VHzZM2G9VF91mFu33rFwqPxdaWaHfLgNhMmcGRAU2vCgh93bLGS1PbvXN1Mo1XpktMVXrYXZ4LfEtRtexH6jDdZ",
  "key20": "2crwrc6E8ixQn2ZYnqKDr54TR7PDdUPfLnbsFvrQM6DWvnPU6LzkZjqBf7m7rdTQb4JKPrddCY1VgZmSAqJoPDKQ",
  "key21": "3MoWQKA5psKtudXcwkAi3JjNXdV1TRThmdgAFW2N3aKDxTmjMM2E7H77mmkScyqhhttJXbAu8iH6rn9JtYfqTP7Q",
  "key22": "3VFHTKDMRu3K5h5k4zpwThk9Li1PjRV4j23J4FyJnVPdoBshEcNVTyVG5Jvg1NJzDj8zR4MDEBpT8wzLLTJrpw18",
  "key23": "3kze9Krxasa2edCQnJbvqhjnTgNGWgVjzSofccLrq7W6DsTB513tk1PXvDws2sZ7YWfiyJjW5iSzmnPZVcWC1aDt",
  "key24": "gzEYSzs7yhHAiYwZmcxHrarzYKvCwLhcSRdj1ggAHb65FhCrCTE18aWihCP1mxQ4Wj78246VpK2NE4nbY3uJUbU",
  "key25": "2m814Ezemh5AHoRVXN2tTTMLbHeQDSPqgXqoYQPXfJP27VT1TCh9UEAX19YJ6GVKSR4EhpBsfpFpuxZYNkCXdaNa",
  "key26": "4mtQSLimYw9rozerZJAagzPMBmFrd2GgmALUrB8injMAQEt6zqxXt3cZ6odqyBzJsALUK92a31AbaDjHtB4R4aiY",
  "key27": "SR9SixqHri3jQVK2s65CB7SKU14eGBRqpDs3uo4jy9fvT6r5QQ2TbBkQDrYFZzohTL87Ztk2jpfSs9VvzKvsw2F",
  "key28": "4LY1iDd5c3xFvy2juc1NM6Qg8y1bpGHdtynx7jBK6wttR2J6wLMJCRg1eXJBLkwtVCePHRsCfdmwmBBp3CbDT24A",
  "key29": "2TBHhXRyZNQURQ5NGVcqeU2e7GoGDMcM2vVi4Vf6SaLHjFANTrdJk65abRzzqCQdPsnhAkXqCpDYRaMk1PnNzCXt",
  "key30": "5iD6bGDTxFeV4qZoU55G8NW9UWRGFRtvot6zvAYph18EGLGfNxssDzouoKxyrS1o9oMXp4jcEFxwk1Ht8euPsYFn",
  "key31": "36djt9zHqK4sSXmfSTB65x1RokmUk4VhVADchE9biQar2PykMF6du4XSqceABixSiejaCnSwij8zgT7FG7f3wnE6",
  "key32": "4xFB4B976oERCqRxChb3CefnnDM7VZeEsqW7BNtHHMz2oeJEuEPXrBbCunidZeQ6ZvPfkwA2wd5F58YVqz9PJb6V",
  "key33": "XDTCKyY7nonGWN3XsLR5gputnNduhG7T86N3y2WcRgcCfp2EMVLbHPRRUE6TwM8Hdb8RJCGz3Bn6je38YTDLEFq",
  "key34": "P9CxXso83LC4m5TE6XLSszQNToERFWuEwjRydmA9n58SJaw3Asb51Kq19XWyHZAHT3gSkLAPRTTBeMsD9vXQ8La",
  "key35": "3WpRJVhoPmGuGDn8Yj2RCbui6HhhXPkkw14vsoLUEs27nWsNGb1HiH5BYzeAUVsv4xZTUVZGRniQAJZaNkVnFaWC",
  "key36": "3RdVK9NmWkwgheURBSxUnN1JPGeBa5rmCpAV8E57EogKVtLU6MQD3fFHoHX4fEr4K12Q7t7Jcz1tdbjGp87onQoM",
  "key37": "5xd6Uw5HuBcZETRBgT3mTEPiJobXk6mCwVRdzbcchp1VYf7Qns97irqD3haa2fVxw3WfNd3kKzXbgWqr8nXaoov7",
  "key38": "2keJFbKtdn1kSjP4TuMbr4on93K6KgRg6uwhemJpNKX7YxSyHXXKBvSbmWkijtpJC1PxFuE9u2gWjY99fbvW6mp6",
  "key39": "4FEAPSscmSMSxgUzH5hHCWitjPE42K5e2XQHSdocQv86uddAMZbF4Q8RvctUwppThXS2LQc7YY9AkPBGfpb4hGjG",
  "key40": "EdToty842Bhz6oTnw5g6MvdHMW64WAkQqfuZ947xjEsNaXtrZTh3Xa8RdHPoRqFEjRHWY36aU7ESifHoDTWaCg3",
  "key41": "4VKVVABtEB7WtVDhzBfMykvFNtAzYms7pjNtw7knDe32QwV7RCYhDFXJaAu9zzKJSheTCdgJMS5xi9svrSV1UJSd"
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
