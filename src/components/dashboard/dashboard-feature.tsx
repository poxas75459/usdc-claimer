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
    "5GxCuJMUPmFjdFCMTyLxc15vsf4nSKGhPZ2kZkKuhQXDNuqhqiRA3dYPKbU8p16CLtn6qHRy4HdPa8vRXkQGpVfp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Cy5y1XytUuXkmrsv6VKpMiDAm2EQWSoBSfeAKguM5dgSrAgvVsHq5QfzYe8mir6p8gJJ2Rhre5r9adw8WTKqdap",
  "key1": "5UnKMmmkEg4FPUmxc3ZH91yBaWTS3Drpi6tqrbPAtSsfHr4khVkLBEymtDC6ng4DRxnxFpUxJwyCe5ZBawfqk1HN",
  "key2": "2D9Xqu4aWHS3WHAXRCde2F37X75xh9V3gXq3dFXHVJbsTxb3oeTTyZj8KSTsSajYUXEBTmiw26zyypvVxNJWriK4",
  "key3": "52AdPTYcPHv1BktTfCvjRawYYJHYGHM2xSDepRi6MsPBH6ARnqAToFjLakS28q9eGfbrfdPdiUh9QXAGRRPLrt45",
  "key4": "FAa3pSJX16GTCVKGXJHua8Y5HQKrakXMS8Tmf7Uy9pogtKHSnuzi8xkyLYrU2QZzLbq7gjcwVgq2Y3kdiai9aSr",
  "key5": "2yp2PiMW1GVmG8zw9vBXc34jnMPvigMLKrbUAby4sGwGjKDhADDbcKQEfmRGpyAfgWLBjMS6bUU9TzEYJ4Wbtzhq",
  "key6": "3Vbx8WEGNuMfxEC1jaUM3CacBmtuPtf1Nh5SdNMuUo7nmbcaN65Nk89qHiDkSFk7zpQZ1pvKrf1gHhdUbdUfa4MB",
  "key7": "5FucSz6sqbzwqafHSJkAKGTeQ2d9Zjo6ukBGuHzgLAxb6SLi96qKZUNxteQn9DrzS23Yvp1baHbGnVR2LGXjFw5N",
  "key8": "3c4UMgg3g4YvbN81y9hGaoZPHbvKkWvVXcPmCszJcEXf4ay5YdNkA2TyAsVdo3kGyD9t8zLWRoj77yYCTs8FmpRA",
  "key9": "4QywyVf5DM3obSBcqTUy2oyBkeBwjcjSbfkQ97J3tvMBs1cPFDiAhfmirJCgDzyN46YvnKc8GXQCtQXugWgvYoRC",
  "key10": "65WNceLS1pew3Jp9Zg4D39BiAvHnxLuhj1fcGNhJXB58NbbpeATXyGNmgK9YKxQwRsfXyf6nYFCdDm9PhfoUU5vk",
  "key11": "3N9aFPKa7ba38CMB96vDzxMgnLG4JCMVgM2yDKWkBS8fJgP9e6i66rUWgpqvFJJhw6G9CMhnysRwSwUespVWXsYs",
  "key12": "4s9eGdryA5zGfsjPL6ug86yWcb8CX7m4AGCn5XUdnsCFeQfMNdEE7XvGUe8urnQLFePjo1bmZtk3yFsJYKBpNRGY",
  "key13": "4dp19bMuHrbBULMoPAb5scNVKL8q7tEnePWF2XDsL6d7UArGZGj1w51U84NFSvv9hDWDRJm1ujGkuvdhfy3jbt6h",
  "key14": "2FMZedqzq9SYLjxmH2TY2ucJ1Q9MC1xwD3DjVRmcnUmzUzpoTWDHzSP8mrQe142sJG89L3KTdh3WeL1H4uBXDeds",
  "key15": "3rPLjSaUAuj7TdDhgjeC1eRjBL1KT1wpFenqciKHuRrXQYUjy2Uw23qMNztLmPTRkH27hKXqaomniUMRiupanCMx",
  "key16": "5iYpaDFyGqALKpGPQT9YjUDQw6dDpoRyTzjw6ovH19qH7ckAm3u9iUFvaGDcsukNgLiz4BADMtru2PdqmzL3cyyG",
  "key17": "5FZd6Pb9BeWNkDYXftFb99c53TTeqr3NGDtdDmJxpHpx7eUnUgThpAS76jZ6YbWzs7YseBikjzokqziytFwHVtMt",
  "key18": "28RJnDyCPyux72V2nDWZmRFMXV4nZkhBnDCnKyj2fiorEugrmfoLU4nQyfxEXQWtoR1VX9BcsE4ZqkxVuTNcdZT9",
  "key19": "NfNJsXdfspTrvQNCS2DgDbzeDFQZ1f9bZcYjsrKp25ZW5oJhWoZReuzXrn9WcLwMo1gjQ9KEQTjLkkZK2GPSH7E",
  "key20": "3VuJCzJuBhZZiQKBtsLb2W31WCH6hyYkuVJ16yco2GW4RCnKdp5xiwy25ohaZicJeJmhsou1HgcXSK7jHYCuuMfV",
  "key21": "5zNYkdvDiBLcnBsvdbN6Prvx7wsFpikc86eH7Q3PGoRJcWUn9Jh4gKfm4GWoLZWEf32XYN8WhE8F8atVNbcxYsBX",
  "key22": "4jDD2SoHAuBnUCnCkutfLjQjBtNkCuCj2EKrCWf2d33jpfSu8QtTgtxJyUzkBbYRjWMfKePKa1jNBADJ5Rw2caWi",
  "key23": "4CWJL9Tr962ifxNSfepmfirgvdgobJBvqxCEssXYTCKPvMJxzgQQVZiPcGveJJ8EzRuas8FQoff3Gogb3mgz9fYZ",
  "key24": "v1BpDfkrzkqw8X3xFqQeByePpMEa8QCisVBpMyRf6o8UcZjDeEuEdcN9Dea7A9MVHDe92uPJrNa4sdp8qon5XoS",
  "key25": "4eAApiyC5apoNBmWQXLeJdrUewT9V66vcNqTr7gMzAnNYEwHLAXsMpEmhhfBZJZF1ECHffVDs6faSHKk9B7PwMr3",
  "key26": "4z3aorGanRZ9iykz4Z6HNG2TeaA18Q8TJYb7ioow8vkvEZNtT3V2TgcGq8nXbw7k2hBVuDmsLFRNYA9Sq6AVg1UP",
  "key27": "3vds2SKTHdbaqi2686UuQrrh8hSoydbYSkEiarjetGnvFg9MZ7r3G7zqUSYvMXgS9CrJZtsdATvatTnfooYaYyYx",
  "key28": "54WpiwHvoFPmFm8Aw7Q5xXX28v8iJW4RQzUMKKVk5cGAnCMET6JMpiiLoCe6ruXK2Bf7MVkLQHuA52LYREfKWxAh",
  "key29": "4dyLC49RrYVSzwteRVcbYGf7DFxd8BX48ckbQ4AyWPguMqRqkX7C7gPosgUxJfwhqGCZmE8TaCrKnefGRADmATaW",
  "key30": "2oA6aB69qbFhPJX1uUgQU5D3Zy6Vq4uXkuN6pXf4zdccAsm4iJ43PVgzL3DjWKM6JNvDrQSa2qcbTe1qm9sjQmuo",
  "key31": "soDE6zaDPkcJmdNvtEkuX7z8pcvKmEk4ruQVTsaM1NoHQ9fSqJKCVDk9X7y4sRHJpYJwm26AUyLkTctWJZ6HmR4",
  "key32": "5HdUaYXeM4njqfVNGPJBeAJ1EVc6gyXVcHrUGkfwVMVz5M6af7RjAKmmwHcQedJjjUvFVFHCarz2a4e85L1uHyyT",
  "key33": "2tySAGRUqmnifrtkZJUe2KHXNxjZYc7W65MTZ4JowWmWQHMie3r8WXza55G4X6f12JeRayeNXcuKYQ1nYXLEYa97",
  "key34": "LUQpExCD7RjL3UoyXcHCPZKpo9eesWpfPUXRn4Uz3gUmuUpJUrQFe3nceXXqXw1UGxCTmGMd4bHbR9TFZCgF58n",
  "key35": "2j5jdj3LEExsP37CJBwpXNpKqmKRwLJi7cPR37py3pFmADzxsqwgE87Z9oL9PHSTFSJERLXnGLfH2gWtSbVJQmwv",
  "key36": "4qqMXg3HfvrbwduQXB8goQY6Z6GaPcuBHC1hCurGnBG6cuxD7743q7vHhSkqBmLwfHqJrJQ4SFoT3ehQ1bi8CSqg",
  "key37": "5aqY5ih2m2j8S1BD5Kg2xHKW5uN8QNepJ5u6Z1JDrnu1n1xZbEt9EaAE4BDyD9Wi9onbQNkpXqFZ3xZAKYHKvBq7"
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
