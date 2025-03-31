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
    "66gBGpwrQQPAgWTjUkcKE9fZWGfYV9ckLM7GZfhsddmgegSjFRNiR3QqYSCZhTEoWp9kXWUTdGNZGkaGmHAqV11w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WESWHkabkX7DpTd7dJ1hksjwDPegWDJtUNyYsnoz5GaEmGao6SbLfawCGPQZ3sNVq4h8ysbfnC37vquepW2KVAa",
  "key1": "3ab4oL2XNDXqCSyRfYXV4qULy8e1JzaQFKiuEgyffwe8JXzcrhJsmpJJRiggeeDYjQ2myuMkzKe3BLdFrzxXQjGX",
  "key2": "3uCKgQBqyfnYCHzCrdYJufbdQWRFvetrcLQE7U6Rahi9H4qEKqPfZs25C6upKPGeErDnWBhpmCvn56wGYW6sm4tx",
  "key3": "ZpAkWcXWTPH9mXCa1GtWwPLgueCdA88LVdaFL1NXaU4Cd3TLLRD7xMgfTgEGwnfs6NZSBFykAMo3n8UodysT8Xr",
  "key4": "4ebgSSe6ws3nrkmZc99KBPwPT5kwjTcALdyCc3TLAkracP187abVLeCcmVVuHXM6iWeCNcYGxMvfvHw5jz22Rtmp",
  "key5": "2sNEzX1RA3yG45Wt3c6RHZ2xZg7hDKNbW5fgpdgWUV64x93ebpUfR9pBytC5HMKihyYRF53zMujMHR8adQVmUfXS",
  "key6": "ivH3mjRLsBbqncq1XUGxZntapzTmrsMMwiS6gnQfEFrCW2rSz7iExfhbgjHMsoQ6bjiuBjby6EYyhnttdqDA7V9",
  "key7": "21AcZ8gw1Lr6FFuyBQKWP2V3K4PzezbeP5aZpt5B3j7c4Y6XTS1vKMxhURAN3rRDUZiyfGyX6PFNgZFXD57Q5ghq",
  "key8": "2Xi8G62f385Dqvai84R4GzRjrLAyLBEXBUvg44kGBKrjE9do3RnF5c7bBu7ixC9RSAHtXaCCHTtNasfbd9TYNGvT",
  "key9": "43Y2xikp6DshyFJ7sWJ72roP9adDoo7wFCSkUB4zbogFb43ETWnnqARpbD3jDavZLXXo25jrjz2eze9ZjQR6hPBt",
  "key10": "5pqGDjBq1SAz6sH36fDGRyxT3bZwomnq76yGrspASTnTx5CURhjEVXb74d1vukuxXXdAuhR56U4DcpWuCHRh2VBX",
  "key11": "5oszBjy84ZL7V9MLXakNZDEiKrLfdeSJMCYtsBkTjH2NSuNf3oS9k4qxRnbyAgdTQJTAUGu1ng4e591waFw72kpM",
  "key12": "n1GVHCW24wBgqfdg6bB973Skgnqv4mzDYVrg7cy7M6XAao6654EtQ3dCmF4ALUDP16PzYNmX5tvaHWKBxgoqzMH",
  "key13": "5jMqSramuXLqUUyEHfQh88Gobxk5NpExdeKa3Q6rk5cuPx8bJkQKkajQxMAEBNX5bexF3hnCWmb5YKwqebZuXVGj",
  "key14": "3H4LMmENe1eisszrZMvjok8zad1SMe7dZaaSyEdZkLRoeqndoJNKC5nVft5MSJxkPE29Sykrbk8wm5K7nZTqFpHa",
  "key15": "VG92cabbe5Km1nc2NbtMMZG6txYiunFtasf8ctCT7qrAqB4orRxGj4spZSnMT7QFKjZJE53mhSowpAtRDuMeSTN",
  "key16": "5jyL7nwZ7zQWxiZrgkjyE8gYvsdXZV7TZZQXuM7FxDZ1gm6Kj8hPQhqkg2rbTWX8nRVubfvZZy14jUsRF62juhci",
  "key17": "4uFsWMY3gLSxnxGkN4zB4KbBe1aMJLUdUqLvHPN4tVKg5K6HStCrKQkcFvw7iaJiijKAgLxUjr9gpvCVPutkAyWZ",
  "key18": "3RB22hRuwF6bksNKZtDkpMZmEjXuS2jiDCKMJAbxDWbb6iM3MXgotE6stVasW9CpYUBwHLQHSjBgea6VBeYVTr7y",
  "key19": "4AQo1xRz8rygUz4PT3ADHS83pwEwujmxJhUc1oA1vrxcStxa8vCkPPf6FCP2X3SRdhG3fPAWqmLCvXNn1LK6wEJk",
  "key20": "4FhMxFLc8PKkcnrof6Wfc12xMFKCLdNSDdMsNiBNtSV4t8GkJGV7AUDbjBiTfzjn1dmBe4q1DsuvicCEhbQFLsH4",
  "key21": "3MfxiSGQAScxuJc9BnwUK4DBsD6pSENjNjuA8SYyeRMqfmjJhK37kfvSxcJG7LHX3xKgnKc74vZwppQg8cHK9sKp",
  "key22": "3hSMuyCCTRvww5r1u6QcpfdRXPx9UmkM7dbPpwsyxTfB2vaf1jMKjY2go6Bd2rDgBpL6RdH9AWVHG51cRR5fGngT",
  "key23": "59yaZvE1LzVJkqKCT6AAamcib5wcmEhPtyCg9ds4fy3gNQiBGiGK387pQC7nFNTQnJzCHGvqcvw8rbrY7Gqcc1NH",
  "key24": "5Y5xxSTXG4bBaE26xR2zJkxJkLwCGXcUDtsJe73PDFs5AiJAqFJnZot5tA7K8WVMNTGJR85Jb6n6xbyZf2Eg1ur2",
  "key25": "3K9dyUjsVsgtupmf59WEnVsGG3pViVjzGC416vLwPLAH695mViPdvj7Co6qwGkWyjq8jKVbZmgjW6cnDxyorPvWD",
  "key26": "3ZLQgP7Gr7NUYvVHVUbwX32s4hioqD85Kfqz8ZLNabtYKkF4cic1gXnPRjKY9HdfE549Hue93qBTVzVBPGeWbKMX",
  "key27": "26QoTBnCe7gMgijboM5bcccVfSN36w5fpnQTJEtDpZ3o46781yzChKkiEiQkzRwrSAH7pytp75NAbvwFBfNdLKbW",
  "key28": "2q3vC7QsL56n2D7K16uNQN64C39qSTXHhkQxaxFHJ5BVuaWAgydKboKLwQYAUQFyNDow7pdybn7fQqc6ZnFeaV7b",
  "key29": "qJNGJUP1XjpGkGfgyLW6SixoEECVQQYS8i8G31TVLKUF4cV8aUj4smJYRKCMQ3NTif9Dbk9vRoBN1J25EwMiXdG",
  "key30": "4bRCojzAPJ73ATEk6v5DSNzkAeMeZyTQQtS1YQMNbGRB23y6dfg61a8ZM28y76L2omrFUnqYwszjRNMEf99cgHsz",
  "key31": "2VbPNekvVWwpx3bZgsnP6bc8FVwDhQvAx6ohBhonuC2vkaNPkf89jPiSjM8NuVp2M1SNx2f8UmJyDv6jswoj8TTf",
  "key32": "22C9nnfKeaH1npVKmywENqnBWxw9JWombn4dJaSSFG1paMHsye7H8pxFJTzEsuvEZNdJfeGa6BpbmSAa5KWJNAJj",
  "key33": "2uxS9G55iLG2JXCePJHhWDagQtFfQhmNBDYevF4r6cVQTJr5tJMcDzcBZmwtDBdNpWxXzoTq1wyU8VZBC5QHJwEj",
  "key34": "5wPjvwennqVTEkrgBVbwRT7JzUje5GDhqPY4nU8EP6NsekX6Gb3N4W2wXyPuFHqVrrtKNg4eoveJugoPFHHvbqFh",
  "key35": "3SfApuF2Utoo7FGhf2X2KrXT44PYa4U83nBfwTBZWTiARUJykAJtWgyNhUst8usw9afiXiSPTrHo8tbda1roh4fm",
  "key36": "45dLZDqe9FEsjb8W3DCeQZuZUtYyujaNfYy6vpEK5kf6e8YQUzDWL87bC9xxEvWn7NUXwSXrdq6eJCDadxFRQkKS",
  "key37": "75wB1TNVsZc1CdQUoaLDpqFn8XfDXW5guz2PD599xwzJVw8viRCMY3aVwkQrqfNFH5YrzQY524SJZeHt9mDvigt",
  "key38": "4kaZpdEnTwYwpHhfAE4sCiWY4CKh6WQPrVoeRAaDAy3wjqiqaQ2PS4gCqG7E2R3CQzfVFJ72W2YhAGeVkSBFygeK",
  "key39": "4nkNg7dxofvwBv8ZeRtEdumKjLaJFrEMTo8HQPfMGYps9qdfGg31BLWFHQ6e1BcEGSbAXUQEphxXjkpJBiyoRAfS",
  "key40": "4uxAYZvj5LqZoDHx6uw7XeiyNhafFBfRuf9n7pLfTsuY63pTaPp338vT8d9LDN1fYbW55XC4xSoWhfrcBa1Jia1m",
  "key41": "2EN8v2sqKXjawsbKrt8KCu1Qc1VwxaHW4pZ1bgGCkuC4MkbxYDoWXCkTvKjAyBNkW9Y9bZ5fV918KbeKMtXK5VfN",
  "key42": "2vtBBVLMnyXcpvWvJvkoACUYE4woLjksqxCudQus7BKjKQM8tpF7bQM9LQSWmyFeJ1EEEMyYsxKXR8sT1Hoh1P4m",
  "key43": "4Qw9Jn7YA5wASrHbK9UoaLYVKWPvqBSAYBDZBsEgYUhgxXbDC9Rx32v1VLjPJ9ocSurg691LtZmaiDn1upiunBoN"
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
