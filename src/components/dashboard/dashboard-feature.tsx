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
    "43yGzcsPQMUXYVtHiFAn44Vgkbwch2CiwjYa4i8ntMQii6Q1JcPQimaoUXoZwXno1y5EF9T3G3U6igq81Y9hPbsZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tBpd5B59nFRz1k6hgFJmfB2bNwWiZ8RvD3cqxQFypGh9TLmdXdJMc6fAPiYihKZ5GxZozuk59zaYYSzH6oQ3Lw2",
  "key1": "64YxLLcfnjDsEXgN4cp98i8bLs6F335fTEs85qn5xc1p7CcA1LEqohCZ9EMQbMMa1sVVffAhyKucGMuvoxL6xZCG",
  "key2": "2mJHdSRJVDQ2vsMY2Nw6VhwQXKN1NpGniD1qM1sQLUQK2ZPHEiiFTarfAkUeM6NcCP7TJ6d3imwKnhw3yNjLtNJB",
  "key3": "TMoRCAfuw7QfLiSuUu1R7DM8GTaENjKs7n1dhJVAZXdYbHpwusRn1bQjLsMMbaga5QsigfjS5C9jvpKNnGEagbz",
  "key4": "23VcpYKCPvFq2Nrng4wtP5bSTjda9DBjszNruZp5ysxJFFFvxQwyeYyJtXjJGHBiZcpE7TJphnfZGFLsLHb1Uc6m",
  "key5": "4jM1orHkZUyAVq7iPfJWZFB2QU67y2HFK6LuHVB3HEVboYyLVgnAMLcGe1h8xQDKCh4Rzw7edshjDpAZw8ZUSL7g",
  "key6": "5poz8EDQHVpEQ6Rrxov6XGX35heuA69QCZ7V5Q3Pd7mNZr5AYy4DXaGpHhPhLi1hDCghHHVK9XffH7zaPfUuffpS",
  "key7": "4JN2ziAk7v6xJvWq1qNu1gy5RZFtZjrvzSLBPifgJtFFGUsURdeEjiW3AGPCriRcS3b6pJEB3fb9KRS2e8T95ioL",
  "key8": "3qWF1ddqwAWDgiu8Dr7zLHPqboUCigdMfHH7W3J9RRG2votTeqwc4CRiwSFkmKeTX9kSz93opiKcBynNv6BHDx4d",
  "key9": "4u8AxEpj5qHYbiTmmRSFXWMczkr1Ew8NNd5p1b6hPX3YEZ8uHvR5vGQ9sPNa5LEH8SjNUDgKTjqpTrr9yzigqnKh",
  "key10": "2uKPUt3um7fRmBHVWr16HNLT9ybnRPmAxdMcjdVB18yC117Hsms6aHyuwnwhsG24pkffFCLciSuaVxmn4ZPLBp1a",
  "key11": "3vNXt16m4pCz6PP8wd74z9HkAYHuWcLZ1MVNv7keDkiv9vdhbJuQvfrayxfWAarXwPoYHWM5HfWPU8ASUPcBB1nb",
  "key12": "Ya8xPjdoQ9wPXBMG1ntnZwPLdWVQtA17htQhsGWKRVZ1zWQjb4y4paZr148c5hzoj31hvD7LxhZs4SkRnCDn9Pa",
  "key13": "4yGKYMeYFaYGPiG6H4AYgPfRaFUrKLkrbmwU42YfQ1m7DJvi1Yh5M7fFY3aJoNGPEi355hjGkgY5aGE5pzW1eT5Q",
  "key14": "4uBq4nmH8nxpzD9y6Wzm2BV7sHggPfRMZNnFweLRvUskyvVffsTtvRL1XcnsA23keTCo7omZaNUhabkrSjADvVk7",
  "key15": "65SBWQHa2vCdM8QmPJFUSwzY44HzaS7bZLVY5ua3hEgJVJ8ifBQYk7PTpP4YQ63FwhYpesg2u4Wtbo2NXGZk1C8S",
  "key16": "3sKbRLhn8zcJ8b1HB2Yqftac7qnLscMYrZpNmCEYjVU2gzYhAnNXTgeAqzWmDb4CdQCjSa17YH1XEV6CvJ5c5ARE",
  "key17": "D7FDTX2SKmJJoSWjiQGiUMW6Ugy459XgCdWhX2iWjbbTm2GGTxAauvmm4PX8c5qhbrJXY3k5vWmB7s5PSjQR7Jq",
  "key18": "3jEYS1hxGgUkSxmLGwizT2Gg2MsxMtXBux4SSWGiXUNCHaWSLqYee6tTXnWF4tLzNexTxGQSFRZAwTR6mHo7njR6",
  "key19": "3TL3JSLzUBZTMWULJ62ZVxmKXjadeCYx7XKD3ZetD3P4hjdXcqVeMtNV2F1AvqE7jFHe6BXhxeocL2WELfNiz3Le",
  "key20": "5eeKCVERwKxXB4TKBxqM9pNKUPn3eekLVnUkXrHrNqXEG3b7ruXEHGG18PKKMJwiimfStVqF6Ts3VauPt3b87XX7",
  "key21": "5wPDnG4yWWUfZLj11FGHxBcUXF16PRab3u7EjBGCccwMxbvPyNK5Z7hEeNccNDeapoGCnFobXLA82ucCw9TNeu7d",
  "key22": "2HfTVPunTNKu8mayuBbUybX6H13eCbmG4Ddw5rYHqHDtKTvUdTWRPqhpJYCteuvwpB9BqJRurrUDc4Cc7FFQBbsx",
  "key23": "2GVt4QiB7T1strpAxN79g7KiHuQBFmeP8Sut5CRoztThdz2DXzwRqgzeVJHfdtCJR2cvZwtMEtLeMqfh5TJtWBeW",
  "key24": "2dYFHArubsC6dyAGyrSDbDy6hE1TbewByEHoxnW9EnsXrBRKmx5yZRnEDyW5mjASrzsSCDq3oatdCdMY7DjhFtZU",
  "key25": "2Z2wxbGU69pX6QBT1Fpw27QsLb4r4aa6MDXwy9EHu4q2C6pN2DmDDwDschoeK2r4wgEUjRUwfq1Z1fjjXKh8ibjc",
  "key26": "5KvF7dSBJak9w5x8wB5kEEmoT8ZyEWZjrSFkH7rQNh7vDeZxXUVpHMdGxfsQtCmAXDEz237QwWmZKj2DcDif9fHZ",
  "key27": "2iexQJHcJiqx63xpcrXUVAybGRVm6djGCzHPQzbQS1AxA27afoAiSNFnYen5d1Q6sJBBSohrXeZ3MK2ww6MaFFEb",
  "key28": "5juBxzHZp7pLAwgMdTXr4zDMgf8EqFB3aqBZrm3vQDXN3YTCUjo6yuaVmZNReQdWWhPJWtc8XzKUBW1XeLaamuRt",
  "key29": "3FP2pX3xH8BHamvzXXh3AA3sY7Etecs422PdcC731CtsH4Kw4gh5GmyzvztXfxdCD2BZhxT9vyNmjmdcCTq9226A",
  "key30": "JcdKLZTcFDaVX8NtqVKKesZvF92S6ZUhCxZ59XWjUqWpUvyruAb15JhWnLCPriQy8b3MfeAu8jucPHcAu4poF7x",
  "key31": "3vt9jvwNbYZSLN8qtLTGpxwBvCih5yvVF5SNfcRhvj49zJJhcEkZCNDhbeGop89xqKZ7yyhp9znxxQYgJhP25vij",
  "key32": "hyh6Lw5Uy5sPmhyxAcpsACRdsjpYVKSpLUYxkLKFau8sXFjFsoWhjHMH1dwmjAgsDCWPqD3Vw1NKmQ1vkLf33hM",
  "key33": "4dpXn7jMRMi87CumHFs9ryz3XDrBYGSoMM5xksZHRiKpvQrc5j76dYfruTxo7qkoKzXz64d49JUGcd3Ga6WqTggC",
  "key34": "4qJtB5ku3WYcrqTC9Aaz2TsDDyGaR6VRETtsTb4SAtMZm7DE1kB2aDrxMSnrr7RQawwYw38HqBJPJeY9beXMxfrJ",
  "key35": "iwP1C5iLQtYrujXgSHQxguefKJXCdRN5B4DyzJMZtPJc5yqidzh4NKL1akjXuCBYdYx3ZcNJbDHhiYgbQJ4YiqU",
  "key36": "4pduY1cmH1HuyPh8tv996SytPQ6mysV6n1d3x7fYmbjewqGaEfGBxm1QDeYkyevKZ8xWjRovb571T84KK1Uj9jE",
  "key37": "4yizoYe7sRfJJqyHgXRuiZzyZgfLFx8cvqnx5nhW2uHsvEM8eXvXuwqMoHABSKvmPNzaSqGkJFwFS2D4A4hbT5Yh",
  "key38": "5Ho4oUB92TuDaVXT41pp5dcSLqr1DjgS314k8z7FMus99sNUsSTuNNacGLSXL2vYzjTH6rn6pSP5hciuX8oaVGo7",
  "key39": "5e9YSZuwcbf92CMmMS3qStQhuBuNfsB8YKr4Ssnd86ShJM1ytqWqEoED7S7ic2aHtikGoPoPx5czuL7w4riBcmDn",
  "key40": "3howeYNcnSq4CwgFewQsHzxThD24RDzXV1b4uWUdsbDbDsdvY8FNpW5Z65gQ8nrZk8T1syWL4YHgEAsmZaKt7CZk",
  "key41": "2MKC85XbPBS3w7ERA6FJVYZyznqMaiFx1ErRGTZMkN353bLT5z1HwX5WapuMctJVFGKf5onK6KvXj6erkYczMxse",
  "key42": "4q8giLCDfkezf6Aurj8QqHns19S7wuAWEtViERhDDGZg8hpViGLnkGYDBCeGHec7xbCvjtBpkZqxepbVZCoj36R4",
  "key43": "3eVe7VXHomNoNRqjyMQ2DybRSeZAhtLUuHEr84WzGHr3kb3FJC1FbPDYJ4HTowFtLaTBZG2Levz4yj3GRAncyENM",
  "key44": "eg5XCAFAzJ9Rp4FV9y64iQpwWcsPJFuJ6Tx1Qp5cq6uqy2X1kDYDoXamAhg3CnMRRTtj8YnBHSXbRMYMNs8zNqr",
  "key45": "wMKA4GF8ZFnCSAxDPiH54CdcnFF4ug2ZH4mypcoWFwGyqKSL7UzPei3EbRAJ3Vc8AvSrYoXLmByWLHwYXUVF2nE",
  "key46": "59X6NnwVFE6rGQNGC6NWwwZjzjahWU3HDSYFi95HX5DSRHcpyQtnL2qoEvp8ZYZMkzFqDK3EWMUj4Tqx9iv8suP7",
  "key47": "5UmMqTFXyodAZHNcHvwFGGTvN86YyEnzE9hiw4yyX432kg9b1arK9M4PURzdPRZj4axRUP23NPCzjNP9VhaSfWFD"
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
