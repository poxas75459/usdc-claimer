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
    "2f9hDCwSbqwNeHpNBsvHwdU6GCi54tfpnHYsio73qNviBUu1XaUAroezJdbuEjUPP56qeiS4qqgQD2g871YiRWkY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dmrn7whTgnbpXshGS5Nu2y4dYwJZkEtTARiEWmmwSmhRfLcYedZcHrVW3rw5swzcZG3smy9DzZgRS5eLkqktRWW",
  "key1": "4D1FJCCGczqobV7n8cR6Mhs8SjrCgB4Hz9b8CTBFxt5BgZhZqPQkRcjZm51nyL8GkG9euAyRDwmnniDdzX6jXqBk",
  "key2": "3AuEnPmJzigU5zcstKBSUAm3Z2sYtkKBHpFX5Mp8rEvZzK1jpcJiu8ccgEhvjm7givy5XixDKtdhsqgtuHQVPugS",
  "key3": "2dMhBLfp1anzaRzC7tr6U22nMbreRqZsZPb2tjq3GDpLWZuMB5Sd76mi95YJymhYdNoTKwah1ou5jpNKFDyStjor",
  "key4": "4XWw5NbjQXvMpTS2Z8GFLVkjfeBSpELBQvtWnY3smuPMVbvXnT8jrSETSfkQsuHk3er8yeUYAuqSyAp9dGZASPtc",
  "key5": "4k3bEnMCTGqvac7hKDPpmNjFsKwpYXxnvpUd7PHUMMqrm7o62vG8kncd6fj3rdkV6CeuJsZUNCA64cEcKJoYbvHy",
  "key6": "eX8yxDD1ePhjw6iqLBsAwjzx3CSRASUEE7Dp747M6V8b8uoPGR5NNRXTapyQWpRqAhbhgFsnBBBi7VoLMXtuDoJ",
  "key7": "TczjhAdmTrZCvpCdnPbPd3WzJahHxB2f7R4aBxSVF4sNpimbk9CUUNu737UJY9HdLZYFwLrQ6Y1zeoxySjibk7c",
  "key8": "2AUogwwspcuu2qeisaoErE1Mv4FLmBQGD8bt3Biu8QiC1FH9AeWKPYd76ZYcLQwmpu1wqtaxe13W7s3PfzmvF9Uc",
  "key9": "3ui7KBLKcZoS389WfCAidPE535BXs2cdcs5wdRdL97iTEpf3mY6R94RTSmseVxj76JSHmAPGf1NtGM935vvJkodw",
  "key10": "uT6DADVmPiminSugH46bBpVDTHdMfQT4xUn1Lf3FdPtkUD3AkzxNfLPuQD19xNzq1z87QkBSpwsEpvkZdQhjmRJ",
  "key11": "3eXNNSiBwnGVi1fk9RWXWRNYi9vp614eyJkfZzJjBoz1jekNCk8G3hCqdxWWo4hHHgS9YbtDVVegbAJdyEf42iga",
  "key12": "216Z8kJAAXxQa3FGgbPQZU9vX3og7SvWVhA3TMECtNueR8oPR9vUhqT5FNVtRcteDSinyFcvPteZMfNKHWjErXbY",
  "key13": "5y8B2PQ6hsvuKxHzmrVhFXFNMH1RX3sqfcySamBoxEsAn15Af2G3xeWqDYVWoacNv1jCUsEKcfvuK7Hhd1wXseEz",
  "key14": "4mDuWxyiCA3e4eeKzBBWTjnHzixs8Fb9BZyiiDDYcbhDkQBJY7YoUyMU5pg5YdD41J2bE5x4JqWUb4B7B3fC4zN3",
  "key15": "3yq7F5PQ56Y9mbLnj9iBWhck9tk7jzVosT6qqXgivwm2GLyQhB35LSPUcyBMcvupbxdha5E95bPjjJT9VABuu6Hy",
  "key16": "3yBis2Mtgd6pBqLX9auKAubJwx4sSPbJ8PRkEt3EuADEsVh1Jf8KknesRcFxPxsrgBZvj1z1BFTtErAdr1uhxe55",
  "key17": "4B3BdUr53JjA8T1FxMYDrgXjdY4o1zUD6kxo2sSjyrc5XZK8YmEdqeQNEy5eNYcq4E8dp9VZNkM2uVFUEpxkFwVv",
  "key18": "62L2jU1a81JKF6yG4yVmq2gsccjhurjF2yi1nvbUbjpy2rAeqGQPQhEQEahGnUFnn9VbQAPe2HH91jvY8ypkMNa2",
  "key19": "3vSnFPQ9uVcufss9bm4fe2gTZvfXoc7CUNBwbvcHbb4fxSXh5HdM1t9v4izzgXtzTofKbGwGneX1NRyYKHj4vhpY",
  "key20": "2Xhiqz6Cjb7osFPEoqa35T8pVwNpnk95kTtmUd9xUzpyw2EwryV7UgmqEUWvcjGQTKHkkqmjAc4Y44H7ej1g8Xpw",
  "key21": "49F3V83wEfdWgA8FqwPgsrQ1Rvb6okLJu7LunQ2Ev2z4Qg8WrXdDkzgvBBUr3tTHf8xvmvuVBw2kDAAG7LKx5qP",
  "key22": "38vLnhfPKoZsS2X12ZzRMShBYNqmjxqtCCPe5K8JTDCuGBtVipxutLnwCftCKnnPb3YVdfrhL15vfxP4cB4Vu3p5",
  "key23": "3FfrqXPiQhjeH6aJvFkzNhaqRv26fRYHwPr7WYznCy362WoXqrer9b1PWAQPgt9EvE2AbrAXT5Sr7QeiEQAx2VEn",
  "key24": "47yikcCNu6ta9ZMaHajS5U2YtzGh8JjUGgeP5Z5aUdESQAtPKtB5Sc1iYUxnEoveBvk19weSz5PUmnKabo1oBjrR",
  "key25": "5fnk7NjGqEEi2KyH6XtkeGAtcKVTnGePovXEnVwywUKfspFUZf3uvxn8re1k9CSyk3QUjxdyZQaSgyRCRXNF3pcv",
  "key26": "fReQLVBdqcK6YdKapbdWo7XnFPkwhLpAxJrvn96MRWRg9ZC1ggWLgQXzxgSc4LKqc4wGhHbudjssRQ7WFUbRhww",
  "key27": "botfkxYJ8WXfxyoWY6Sye71ffJepfWVzYrnqdLYLTtufgJ6tA84ovBhV3onhnAbL8esCDHos7UQw6riKStZkJTn",
  "key28": "4Xe9WDHmuKrj3q7JyzbGtAwHyER9x4ouR2zkvkH4kXn6vyXNejdRLXqFCTye98CzHdQrbVfgF9EbseiUFCfZPQRE",
  "key29": "2wWXyU7Gi7e9P2aQQXzL4NpZ19vHkxdxbbx8wyxy5caXJEcST6SoyKMW5Bai3W7W7zuY7pkdfPYacUZ4rS9VKrPH",
  "key30": "4FNJbu6iW1Mhe4Q8GA6y1iS4NU7a3Y6M1TFJ911vP9fUwRxvkGs1uiYozRx8Stz4bXfbAqZCS5EvvZTop1LWbzEK",
  "key31": "2xpk9H5w4R19VsdNkFTqLSMDpubp7b7pPEo9k7rKXNhj5c9Mm9rQZmeEigcTAupfeThYoobBYkfA8ajLfiTsUSAh",
  "key32": "22pA5PUyLtYzDTKE9DwphhSmNKNPu9RD4BJt2zeMk5RZatMMKkrJ3vjo4JVMtqFJK41YewQWf9Usvnm49yxms7Tw",
  "key33": "q8NyxM3GUqqq7p4jNff3WPNrwzWbR3gERTUcZmcMUMUqzHnbpH1AXDbCXUkSNvevNnkN4UcVjEAqLKKyoKAEjwM",
  "key34": "2z3NWcZDSZLcR1zWtJFEuQUgdpdGj18XKqamzDrMHyUsFpanFSBWsnbyFxtAsS62bcYLbyHuW6dwLwfKzfsHqoDs",
  "key35": "5SBbft2ktLwBrirYCeskvtj2rF3zvooGEEMPecZ5P8FXgtT9hhxqU69n8ZLmWpWmqLJmh3zVJ4z2Xfjb3ndBH4U9",
  "key36": "2QssPNgWLDLtGJFEU4AAGywfEBFjjyHpkrD54zFm37ra2vwhiuuDkdEoP6qckF3QTdxGgD8Xekf2umCCeBbxi8uC",
  "key37": "ejETmg6qY7xSECSnALoh1x2hjSJFHBUJG369AaZAmNwAKRcrixpwD5vdjCVJsbeyH7wePDXtnedfaHG652UGd6v",
  "key38": "4TZQAkv4D6adpUeU2RsL1D6RiBuJkosuRV5upFwFwvhmQknwE15iHwYCME443jFB5ydohzfKdHMz8HvVVnxRfo3m",
  "key39": "55zgJdqzF5GvzGzcDKk12B1igoyB2YPYhsXSjN3vdUZmqEKMFE51WDdVAgbHjL7XbNMWzm72fMajFAWYuK562Z5z",
  "key40": "27phdZjAxsWZTm2ZKnYBMKr88kbonaaugvoZGviDACJnsCG9QwSLVTsZztGxE4LLUeFEaVQ83mxQStJV25PJRHz2",
  "key41": "4vidsT8NbBSuq92QfmxNacJwT3FxXma9UEYZmuwXCXPDYBaL4xXbuWH4bMiAGV3VyHHH1PjkiuojgrCCVVXUkhXQ",
  "key42": "2UwwgcSapFRSwCXYQZuJepW9dFSqUKm7wzcjuqy9VBmdWqJg8P7krGU1cnxKUbmYFo7NxAURgWxD9XxrW2WEvCTE",
  "key43": "44DVC63rLJ1yWiBJLgjdRjviqwCBgfmPHswux2rV6W73k5sTdfMJPAayPSv2MsL3qaQSRjksZgbpzCG4RkBgxuaT",
  "key44": "GYzDiQ1mnku47rwqkwa3G9BWJFarszQbVZUY9APEGWcXXuhgzL56LKw2zjhrWrwA32acMrdHEKMBXAkrECWBVG3",
  "key45": "2p6cNbTNXhhUqpceeJQxNYZkDcWqcf2HmNTRi7nyJQpbzkjFfFPHTs9LLkRyEcnbMwZZw7YQaxxDBnf8hcJ6nN11"
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
