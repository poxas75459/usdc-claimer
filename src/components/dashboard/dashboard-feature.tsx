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
    "RNMntPg3cfuqMkDSPNh3b6z2ZLu3ARLmfKc5Ctc4pLy9UE5qxU59Ho7dyJ8mPW5YA8J7cTaoa6nvi1SpKW9q2Bq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gx2MhB7R8GbEpmPLJBJkUFDZf3MMKzuAejTw4Y618vMXmfbGJZLYjt87QNLxzWfYj861RShLM8hMNhb4UCySLbW",
  "key1": "3mQsDtpA18QPpWTsFMSkSV7aesmHgxA2gXd7HeATJ6NRJxGxKigiPqpcchETEm4GoBqq6hSkpPF9EdL17VniqQiA",
  "key2": "2FWnrfTJDjrT7yzCdCRBbDQw7gBJz7BFym9oM9BfXdJEBVGjdo9ToN9a5YjasnM8bCobheaSjFNotV8eWBXsoDXF",
  "key3": "mpo1mx43TtrAbWp85nxgz8zNZDburwf9GhWJyc3himFR1sVze57UHcPAjpAdsZJoMNDJ8vgwadboqUgfaZ8Q5qE",
  "key4": "WJGGcDh9mqu3kCNW8Jj2MhorhWfMpchnJktJ6EgRyCW8Lktws1bLXCGVTtVuosuNZsMUsyjqDfbJCAEiSJmgt1E",
  "key5": "5RLabX3UGugn8fhSDbSc39yFmzfDtRBtiZ9buJphLkJT7bcDuqUhJidb4ss1r8tEn2FEAc41Gqq3QSE39peu25Py",
  "key6": "39o3mvehSqhK2gpiosSUapPbbfyNMxFyrtq4o7CmvEom5iTFquo7QhhHL64jgfNih1F9Qj24qCkpDM3riJp7G1cq",
  "key7": "4QrvZ1oEsmZ3WoUGzmGUapSUV6outZ6VGh5xawh2TUQYWGRxrCTjZPzs1KNAyGQd4QMjzr3qrpqzFo3s3MAKmPe2",
  "key8": "5EwuLNBn8Tz3At6S5DCjKJYgaThrbUNcToStgjZEwrCZrMP9sLD53aoQvkUvNdagr3RtFAqbEUDu8EtECc72GVzE",
  "key9": "3rgFSiCpAQW6k6HeXsqDVgkrgMFmARVrFghwFXawnNvkQCtt4eVQXkRBqin7vQDNd8jPuSttwAJz8oLb6HVFUFLG",
  "key10": "3Yfi43Ct6WTNC2sEhdrSKAsFCxUbUkgY7CKn7zdirMzwfCsNH33HHYWzFb8wwZdWxGtgHuobbGCUYrVaSENzBb8Q",
  "key11": "3xdnvfuuFGNZL8vvr7eELovx3yc5JsDnDggf4MHTcGEUtyAYr4kLEGqZjMxwrPabBbZ46CaXLNB9nue3V7NAR6WF",
  "key12": "5kmkRcMKPUMUbVSEA144EJzpuqyRY353LdgWr7c7nFhGpdRq5iEfEZCPw8SqNSUzztySswkW5P2F5sX7GxYSNiPA",
  "key13": "43TQYb1m7PjjT245Bx8QaEMYKhwJtqN54tSk7Bg18v54DAPaffB9Y6zCQtAz4TPG6Fjph6yTkFNNM2bJwGoz7mb5",
  "key14": "649ottBStpfCSxuzQvRJKQfVWZdZw9jWLmj95yGGysPGeZWGXnDgBSK3uFKRHPvYEdbWGHvdyRUnGtJqbQ5qA6wo",
  "key15": "41DLMvYukzw8HKx2XRHtshBmwcAccYpAFafkKpZ4r91twiVUArLhEnqSeo5KDy6qRwHRyDWAY1MgmmAmUkXSzCkH",
  "key16": "ryqUVM3YfH7xtKbabQ1Suz7YzUcthB3FmpkwGvsChiT6MYTY1Fs9VSw4QXENAi6o1o3F8zjW59DMPtoB3TghxkA",
  "key17": "2B7xSTSeBWZj6f6rifjYnaeewTiJMD85t9L8hWpkCmFf7QVzMXy7X2g4K84Xcnm4mT1Vn6XzKt9EQS6FhGfS8Ybn",
  "key18": "31wB12RXiieeC4YiueujUrEse2e9zJSrrx7b3orrL4RxB1gbuS4cvhfYjR8mtqAx8EHSXoEdCg1uze4UQurN1Usd",
  "key19": "5ZDJKHZBdDirjbGvxcAZMnXpLVGUNgjYxssv9fDpZbjFxKyFHfAxDxcUFe5W1aD196niwQVyqzhTaAoQbdEYEmGC",
  "key20": "2qf2nufUwCczJfep3rjo4oiRWEwFbcXXA6Pg17rT4zimmbpm42GV99KVn4E7ymp8hndJDnTsG3aekw8WVEhLKmBz",
  "key21": "3y1jz41CrRApCPrhF9DYjbQwSdh1aka8atK7hyUg4EmeRAnNjsVRSeGwBsp9hdMbFCEYQqDbDxxNmR1o4K2bGxkW",
  "key22": "3Hg5cnkFC6RPUVjn56W8mxQ5aYzBLZW5CDmFzaZhi5cxFdFVcRmhoMjNQAs9V6JskP2J4VWXbt6Vme1FJmaAMbYE",
  "key23": "3JtLryprDqemA83Ma39qPhS4a4GYcbmqcNCoqiS1UKrJS45M5EB3Kwg6s4Jo7LmaAwX2MaCYHytXcyyty9cuwiZp",
  "key24": "4dhdd3JX686CTBwiEBci7ko2V4tXx18LCmPj3XxbSjYjnZuXU9iULjgoj2dsngwDY3zc6bbpwwuuBhr4keSEyhLj",
  "key25": "5CeF1nA8o2tGE2UoGVeLgHVMLF1rEdigyTW8ELVeZum5NCD2H1Zg73Z1XGhNB143BipYKFfxoiKZ96sXLzf9RTRs",
  "key26": "2ri3eoyPMNyUDGFiVSV1qPjftTiuL9xjbyiUCmqXZ8o6BP5ffyDQXBFb478KektvWtJpRLB4ceqx5EBD6DCvBJMG",
  "key27": "59WakpaStEUmzBDNKq62cmicvF7CmqYc7q97YCdtzfcretsa8Bm9tfzUwPZWinG3Mj7ZuWYxVsXpEygGeAx7KY7t",
  "key28": "5xXDmHTMV8G6BcS4GmC7Q6eMuYBRMG1tUy5kuFxDyyvV8J9RdPjp6X1Q8vZiF4TXTDoUYhQX9eXUdrcZ1hZX3Ctd",
  "key29": "4D2ksRHaXfmpcokgTXSbhiZHZnjDwfbY8LFUbJLKaqbxqGWVjBWLsHkJJzt6pzkVGNHFtAMtwDZ4DdQ1rETPV9jb",
  "key30": "33iNrA9c6GevFESNyfj8ieaedNZWQAsuxvjv4h4stqm2rQEwjK7dhh6zDC7muYqtfJaytnwHWChoS7UsPCTBh5Ku",
  "key31": "2Fh1dBHdxwsnQY4uR3X1VJ2qpUdFMzoF2KASmrZE2LB3XrnVog9m8jriw6FxreDNtdHQBAeJThopqY8c2iC1cHRT",
  "key32": "23BVRnrkDtRcyEhxPvMwES3VrX3NGFBAezCFAEH3HWeFb3xHM8deHg9PaUHbyJ3RCKFmG4SUTU8UfodFm83RKAh8",
  "key33": "4U4RhNuuLVSE1JoSyfuewt6zBUhYdNg836uzmXg825Y11vA81sfSYLwyQ1fWwYkQ84224HTxm5uYuScfCEa66Zw6",
  "key34": "5LSHDxqd2rsJ9uQgAU3W2dWVHCXCdLoLfTuRkjgSSr9GXFoyAgirn2Y7RfeJEESpdW3WNML2tPewnrTJnHd52Vj4",
  "key35": "3k6fDY7jmUG3NpgfLmjt47hAvYtEoWHbdqKvucZVrjBGXpsDLErhSULd8UN65nmJL82Q3PHfwgEYVMtAMDCmk7go",
  "key36": "4uoKqqnx5kkGSA8UcRbn6jY33jAmqcWrjaSp7DN7eBgvNrLVm7kGdA5r2NMbehRWdvEVtWj8eCNDTvvERGFM9muA",
  "key37": "5cUvWYGfKfgPkYuoofD9h96HMuUqiKL4jxmDoW7moHiEWWbG7beFmunZSJJJnijbN4MjAtzNud4w8sWKjnrKgUpo",
  "key38": "47SNkPsP7TgLiE41HphQneHiM7q93srs7Emx3AwtMfmtwc7Qado7SNziPo5MErGHyHXcyhjDyQSEbuzQEwQcKf2z"
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
