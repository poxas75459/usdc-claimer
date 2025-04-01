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
    "4SswqpMNwe2gKTo2B5K7yAMkrWHk6zoREyamFzTvsNysFTM58EXc3iNSXSnznFqxLSj5zgnJFAQQpftUAv7FKyLN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zY9AVMsXtykCo6A9N1cJ8uQBnCMLnAEHgTMbpEFPXaojPu3okjeYuz6TQhkAep28f8xDTCRgGqQ1GyN5pJjuTXK",
  "key1": "3CWbzae6s6pjbK6D2VexhtY8QreaViy3Ai1xfwQwHYXUTvULffSwKv61ahhogvRWtvoNhBpYgdodr1Tgge2wuBqi",
  "key2": "3fBJFf9yswd3LArvvdkNeVMLHxh5Evf6QLj4QNYZLFUtdeJEG8JrGw1PzK9M8kEtBNXrCoz4iMgQoEaYruKK7hqY",
  "key3": "4oXeQsvysbJnFXGpm34Dwe8hLXuF8c5Mt2G5U7LcmcZPqnNE6jEq3ByKcxKNn1cSxAMky1Z3voyq5F41kC8pCT4H",
  "key4": "4vbCaTgwNzXzSX6SWLY7CnxowzgheNsC38X4fuejcNgwpwTGLCMBKZ758etkCHstRqwtu4NFNmSAKwxb5PFbcFkh",
  "key5": "2jttSz8rpJ128n4PMu2bejwUCXNMccs5R78AJ7BGkiR4XpuVLkR8sX3pNz2zn43ULgdKcuK7dmbNiqz2AdNHBpC9",
  "key6": "5fpHbSrCocv6toMZS3x2nCH2rqVfTynFdQyp1YevZ2haZSYoN1ktj5miUnPhC4AeiQM6b79itbkuXhT57PBNpBJW",
  "key7": "4Rj8iWJhTrDw5PKrKDHoRj7uhhUCTij1E8KuJybcgSLfVbDGit9W1UDQCcTc5aLYsEZkdmfFLcUi9ijLp5rmAMWm",
  "key8": "QLnpYZtq8zvWtsvuYGYg4BaDm1Ad2sQWYNCkZfRLd2duXHykcodMZnihAxJrZUJ9aZrCPnpyrURhiSUxmZGi8cp",
  "key9": "3wPuGXdtMiCSWZe1nPwU2bTQDKKEwpdWC3Ft9uQFis6xzetbotShRwdADHv3t8hta6XuYK88aZRSfkw7be6pA2CG",
  "key10": "2EpkAoAGJYdCpVjmBwQGfABhZs7gvmc4hsH4k2BqepJdujVhNgHG25EdRph65jK6SQM19RZdsvcMsznN3ERfrESr",
  "key11": "3GAjqxrRP4GsRaiZb1D636XKbvgWC6BQTy8MugYFujhUjViaE3sVaYq7QsvpypPhoM1DmzDobbziKAQLpnPcBPaN",
  "key12": "55m5ysp2mXrq8knAUm1c2RxcbK9VsEJPfZfjwzdR2LpjpMhZ5qRo4ioyngCrLa43rQPy66Vt8BPFq2EQUg9UDdJe",
  "key13": "5TToQLqG83cxY9s4H5EwUg3q6Eq2kNjDWycFGdYrryBKEm72HDmqD1JFGGzU8A4khxgBmgHpwyCm1SdNj3kz2WV7",
  "key14": "2t4k4MofSH6hZYkEKiVGrwS4k67MuWWvvzimBwtTo9R2o16us5ahxjjAPeZ5VqsTyqxcxVDcu1PBhn5n5eV3Wzqk",
  "key15": "1ijNh1ogQzZsEK57ZbRF6J9enVqvpomJE2WUJfMvqXbajQxLQd18Ff4tPjGC18hC3Urbrvu569SCNZGRoqiiwkM",
  "key16": "2medNqQax3bN6JP2d9Mxd7wFtw1EFNdVZcc3EQZBXycd6VTFgDb5THKwjX4iMFPqgKFaQjRWzzpJxkEiVGmqAuZj",
  "key17": "5X7Hpxv2MbKqfj3DvigWzHf7Phudz7o6sNWVESaAfrtRWuoqTAW1B6S5Wg2QwDWW8oKcwCX8UhtcQtrrL7Tcci6t",
  "key18": "49mZZyqz9ZGR1oQNBxxQo6uankccCGdekzUFB2PeZ9GambUtSWGiBKRFoVbE5yqRnniiVuuQ8qT5dui6zYsNCLxf",
  "key19": "BHsGgcuoW42eLFX95E4RVr9y8R5653iWrkhjmwGhnzsisSm2vrNcnmMQorNaTSMP1UNMtzW957KmpCn6WZUKriU",
  "key20": "2PaW36XWbm6i4VSBhtkTnPwZJ8hRMmLpEYvb4SjSFAKo84ygQ87KDTnioET6CFWEuXZds3uPRJ4fhxFW4vfVinWc",
  "key21": "3BxyGoBXcxMJJw4RYAZtFpfwEvarzrGFr3oc14YkpbY5NfmHzuTUQ1VPzUQGCV9N8kepQeuHpQ6HoKND7HSrtQ27",
  "key22": "84zGj5zouFsANZgL7MZnXyAN1oQCUv4Bin9hCQRb4vAfaxKCPdAxnFtRjHLA93o8Rj89xW5MV9ZD1nZjTt9RyZ4",
  "key23": "5xvsjepXoeBofAXR3fhpAdw6dHro9zpgZwzEGifP62inoeGznAtsAxdsGKWkudCLw6822hYZHCKx9D4P4MwivHh4",
  "key24": "2HFqEyrTakJpk9iwwxWPbtaTCfyd3Hj5JarwvzRW6ZuCDWbChyRkzDeBZgRiK84m16wQUkCHp6Tu1HpNKnwwUNAS",
  "key25": "3ommhc65uMLqYbTa72pSsd831Dv4dLZeXtVawE2MeaJyvqm1AYnbgZw7J6jD2pNoctMZsweoX9F6ukPT3ZA8onzm",
  "key26": "3VYivVbyFihoY4oKvm54rGorhGby9dLmJyNbWeGQY3NVVUNDCs4o8unsHypP46sLucZNiFPeLWTU7p664NB1B9gw",
  "key27": "4tPcXEckSuTq7gHE9SY6fCq2sZnLtnopqGvuFWVHGqY11gcttFzLHJZjjuD5GDmHNc3SFbdV3wg4NR9NW8sfeMn3",
  "key28": "3CB2F54qfTKQJyCDTqhnn5aMPuADgLEGwKXq6wpwUJfmevii91BMxXBAzg27VTtfWBDmBqJfKEgj1dSYy6AYRRn2",
  "key29": "52ARtUVw8pKLeHxaMAH8WY4RwbFHnMBeW99UFrijozmqLQh7yL9Y6VuGUbZoMF4BQBPX9ZzR9U9WozVqerYTtikm",
  "key30": "N92shXFnGaGr8FZZjRMLrYBmmN9GxMHumsdGDo1P4F1ns9eQBZ2mfhfqydyZGUtEwhqFCdyJ9YKYCnzcqxd32zH",
  "key31": "CDN7u5Epf3iB8c4VcCq447oRXGW4xMxMeXSDkbbtPntGGnKeRWhcsM3xLU1g5Gmn6d1crsecH18zZ88cnUMe2iD",
  "key32": "5zbB6gceR5QNHbhErRz4QrLC4waAnGwTNqp9JYNaXSeuSxELzutwsjB2NzvbA79uCeLirmepwB53amotS8oJ33Wu",
  "key33": "2XjRNERxoGGXT937Mmuyv13jebuDHCv7JPuHRpP4FFvgmuFigyxbVsjqdqUv6ems7Z4YuhcSPheNRuY2Hgx6NoEk",
  "key34": "3gKrV9V99VaxQDJn8vwo4iHj6T5teEut1eHAwRHzGfMgQkE8HZsNveFUVR6pCiwJ2AiYK2WFGFU9uV11hkBzJKxH",
  "key35": "52TwTkhcLWuWT5F773rVm9br4JNme9JRFpHdoonVeNRMvNgLvzUnmtUxSaTQ1NFgJ1yPHAXjDnfQAB3MfqQDG7VF",
  "key36": "Bwnz7AXpYcvtd2EPzviViC52vW3JRZVZTZu7QWeDwegf87yzARjnVS3NJcPhwNPd2PhAHk9ghnmcrQVvgtVeTDh",
  "key37": "2sshxMttET4kEwVPHzjhGm69NpksuWi3RNynHKAmT3WwjNxAax17CJxcJvXsVWDBVb6yVNPB7LqzMvQZuma9UqGz",
  "key38": "45CmDAFXAfXJS3FhW86Hm4wNKe3LzQ1JNWQ4uZEwwdanEqDr8BuFMqdbDo5T82XTTqnoFie4ASndVJMyMXpZ8f2w",
  "key39": "5SYb7Mym3gB9rk69XuquKDdhGeVkKRQKLBxmdc7h2fzX4JGi52sWqrNCZAWjeiGEjVJ6SZMr5sp1fXqM63YnkhYD",
  "key40": "2LBZ96px5dc3r3zfim2zAATagRqYAy6NW5wRQFRrF35K8ecY3qVQRkATwqHcuUJib5LPCsDRJVD1DaeuHgxtXqtk",
  "key41": "2Pom3uPLwSyJ6yJRgSGdWWc3aUYTuaQGZh1cpTfH5yAFX5CgXLnGJSi9U5nM3CpPovpM8Tn6K3KyaGKF4hEhp5jJ",
  "key42": "36wchYygHD5emWBG5TkS8SPGX7tdUnPYcSRHuMyDGFZK14G7ztdjpbm9q8XM94jrpGQa2gE9XDWynmhVgpBY42fc",
  "key43": "4TZ7n7bFcnJe7QCYrA1urbBqk13KxcLX7jwbUdNRDAthtsCmS8Gvcr9EfXeshqa6cYDsDi4dPQh5qp2MffDLTUco",
  "key44": "DDWw2ETWv2VFtD3LEvzaoyFvgakBwA2ap7DBw8hRM2GBVZvtA4TQNuscSLQM5hw9mwWFCoKmYJXxDG3cmHhGRBy",
  "key45": "5AvcZtAfWR71Qo7XMFiYQZ7Nx1oFtPkyvgoiEXw1r9GvjgZD1yfarBpnC3M4DJoexvuEN6Qo55v5HxbjJcf3BESn",
  "key46": "2yfwxjPWmWGg8bQJEXhchwuCj52Ny8VNEXzUD1uphkUDNYYwpgb4QSJvSAVA5MHfrQKFhsxLsk5BHnN9Td8DgsPj",
  "key47": "4t6e9awdqUWnBWWhHKfXP12caK3a4qhb8QnA1tW69xipxxyVJy7KdERxLxUgn4N4M36KWV5RJ1JGryfRqmDyrQdn",
  "key48": "58U2R67aBe1BEozdFABEmJXrgt68KdYMzwDACgVKAQR3fAHRgj23g24mrFuwNxWsaxPFvyyvFccpH8X2AcJzW7Nr"
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
