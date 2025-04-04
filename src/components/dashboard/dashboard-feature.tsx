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
    "4nUdmoQtL55TadtDjJsprJ6DYCRFAGchGTWStx28mNYmR5JPH82RnrW9kutbpdvvUWNHS1ALBP9vhC85WdfB3qU2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r8fDH1QQGLgxVJUQPcyv8MzyyBfHtVwVBTqrSXFZREi9QmquJsy4ciAeex7uUJnJ6MGwjGo6NxR1YqyN8sTZgFn",
  "key1": "2MnLt65uQhGaqpbkS1megN4XxQoDg7iUkANsUD4P4ET5PYaXpqAntqyx1WGKYctcZ5MJPpNt4R1euzXJsFxGStYF",
  "key2": "4vHcCqXecZiS9o8KiDkTjH9ZdQWAxqMuzVropLZNDgZunYBZdaZLQt3JdX9x9HpipRUNjJKHRN6yPHYNmtpiN7Uu",
  "key3": "4Wyp4sTG6WtMBJwdJ929YoH15ViP8i6dDGFuVinjsPgNJiwK6kWjerMaKJcnPAQyXz1GMqzmq92DLoQnHxoy6H4u",
  "key4": "516yKSEq2m7AXMuhFUdwkgbhse2tMZbyaRQX72CSNti718Hue5CnViaq4hC53MdSsUhjYLLeyUrzLuAFUWEPZeJN",
  "key5": "66SAaN8rYEYUjHbwHdmpvoPu9qCSqt5P19UbkRwoHZ3pXWoREBgSCZ2LrTQR9ZqtHNWiRtVNQjsJ2kmzKai293Wo",
  "key6": "4TqQUYRqEt4VSHmvWLoV2hXj3M6RDUnNtmktG5pK3BQDsyBpZidaRtPRq1GXC7SNSBxpDqXmcoqwts8vLEoBNxkS",
  "key7": "4KBgEVeTMijtheT2DKMpZjJkyb6dMz8RQJdX9syZackqk6qf1qndYGDZFWu1UXYjyG16X7c7HF8uZiw7W5B7Xkq",
  "key8": "3iX8mJVoNxBUqRrKsuBCS1iu4Jt4wdoJcz5gf7iQb9N2MJgUx6yacgfPNvTA7VKyRRJGEcyB7PrE21ccXpLZnjPe",
  "key9": "5ossEW1JdPPqPTYXQNnVM6tYU7d36S4fwwzLpGdJkrYAVtPZPihefUngzAwiGU3mGKXM3R6gxPzHjq5bJeZcDE5j",
  "key10": "746stfJQkCAbwSzjFdbEw3JeNF74zWtq8xGHuZtrJeAkFKjGMW5xJfDFRBH9qNrdMcm1wkjdvGac4BYiR5kdP2g",
  "key11": "2uZQZfpiLWaYxyp8efjRYgGw9piANE3bMA4RXCkCME3rbYPVhNYrq9hJVoLS4EmXin76RKTNiaaHe8Qxo88sYY3b",
  "key12": "4sH2mKWt1MrpwQenPHpypBTBW56sYDoYWq3m2YMQ8P2fWsmKv5wUpKyWA7fdH2iXLPbiHfu2JzR5SxLxpGzp3ecn",
  "key13": "3x8snHANFuThonAYaVSodSJt4VXQPj72dnFg4oCXpmKR6R6ec1gZ6GzA2hD4wZnVzcgcdYnovg7tKiCaqbb36ykV",
  "key14": "4MTQ5BpUSTXzVx8vMfiykhVadVXBRseEEAPRM2D1bXDsf281yGpfrgC5PriKzCZwotViauRNC9sjTpkqDHxufTzZ",
  "key15": "1TTmYSHm6uBgFERQuYgY7Ab8X7nakYZ5imMPeSGfCLXqPaMnBhD21U96RhBadqKvrLE67RAUecbdCtjnskmEiCE",
  "key16": "4H8bGTVotZySjmZLWxYUry9zBWN5MRctxUGD45jKqGXBjupX1ZZo7YyhAmXSK8tEyphFnjpgPRFreomG9tDvBqR1",
  "key17": "3ij8xBFLvfp9LVQw3jEKNZA369X5gafGTeJ2v2Lj48s7aWgLTTvekon6oLtLW8FqmzBQHYx5YvcqjsQmvxLYmQr2",
  "key18": "4prtPueJrgDMEVE6svsKjspsD4jq9PQMBYrqacn4qb9K9boXgP2KJz9YKMkgFQYqoS9zb9Bfn3caaK4WnqdiM58f",
  "key19": "3Ze8oidd2Fdnu3ZkXEBMD9FMLjuN9Nt7oGGS6DDVUWRavBgieg25VqYs8DN543Jpzx9NvqjDfYW67Vg1SJ2rumse",
  "key20": "5CtKyx86qPPpLGynhNbSrQm5vcJYB3VuP9sdpbFVjJRPd2n5CGogq2qtGDWLHb7jjhMyrK3NBjt8pVP5FEm39W47",
  "key21": "3y9A7NXwdc5kyzadQX9SpSstbsuMwQppo58R52iF5xpupEowGzQUvXKb6W8oyaEUH3cZnaBBRkuLhA97pwdwXoDf",
  "key22": "51AbVSHpprnUBYezza7vNsZXjP6HGh397Ns98qrSmHfmFGpWtk6zGbcFhi8ARNE5XXkVoSAMLmjQ54qhZpxypMG5",
  "key23": "zWxh9G927EPwzNPc4Ldn56Y4Rzu37o5CYgvPTB4UwirpnZamsNgc9Zkg3j24vgw2CbuXFLAeY7GuDmGyC7w6dMX",
  "key24": "5VHPEnn5xjPT7s6dYsuxkZDaGzaqnbCTouiSWacqWmuqVvcn72f5Z1xqLGCnhKLiyMFfnEbycEtAnGC858pKDhRt",
  "key25": "ayaWNQgEmpyefZudfzXjR4yroJiwiDRZt5csui8GpnKooyLnU1xBbvr5LNLDWSTDeM3ELEAxMoFbXcnBbskWYwa",
  "key26": "55ciprvH9yme3f6ZadKEgh7QGk23iqmur7QeyTK2nM9MBBa5X34hUZFL1vKsLzGiH7iXPvsqao2frMYqHQFzQpGi",
  "key27": "2Kp8bq6X4THJz2ExQ2LVGuy5WK4wVjPVtzXwgsscjZk1QV1DKWrUMBjR4nsMHGuJQcdZvaCCdhY3iE4fK4aMqn7j",
  "key28": "fMtYbozqSDYDfaFQjGT2N1gJfdU5XZCSoBrgyZ8byUeavGE58BkPMESmVLRRDsjiWDurMXcmsvbHzySC9Ukz6qf",
  "key29": "4rcd3mtMF79rUDPTcChy4ddeVP9P5fpZ64zGXKvnk3jmsxEdDDAVNuK1oHy9hpZ2oAbPPbUyahEi5SxnAhWNtn59",
  "key30": "3z8JZbfc4FecKVeuP3SGvatp4ZQ2c3kQ1fNm6YHmKjf6nLAiQt2LVRw7YnUhtnsEihnwYGWSKubugksM6JBUtboZ",
  "key31": "3pYhSNYiCwLSniNqzRAB3KSf4itw8HKhXMy3UbVRhkLPdTFLNz9keJZqXKkJZQ8dMLPgtEYazCHaAXZKtUkSAAzC",
  "key32": "61m7eHUGmvz8B6mL9Np8qaA62mFUqFhSoCyxquNCCrWg9eus3hKAt3CPAgBXKhvjyhakBmQ77KkD9kgwEHVQafRD",
  "key33": "5iBTZpRHxUWFMGQ1kN9C5ktoaoLRkBC19AvtzuXkEKofyJAPvfkydEDBYUQsXqfxVvjTttF3WePzHrteGk8jKPaQ",
  "key34": "5iVi6TfUm8fx6qD8Ak61ZcPuR2V8CL1ZR23LyCFsfHVn6DfgKmwhH2YrkLEjzdfLDasnSpjsCJjv3TxXiLspGKPH",
  "key35": "5WYxxvexPiorHMQvw5Tcubq7cs7CVCTouYjAhoWpyuj8ujhFKiz2xaqFgMErYM6GVxoMZFww2mqYWxbipZbKBEcm",
  "key36": "2j9UNLyYZrfte86Knz4NZscLRSn9yPQzxhtJKLbLZ7NFoE3maZG9j5hZkXVpQfXadx5uEcuTBHFc3PWJeUM9LwxH",
  "key37": "2jZrfF1jibBn3v32cYNnQneh4Md57TxpQorxqtgXxdwuDNe8Z7CBPfM7BrhnnxZyntVpQrkSXMmh2VMTE9urb4xg",
  "key38": "4uQ7bVKPivHxm8eaAyVbm51mtN2J62MTyTvCB47ABTj8sqLGdknmn89Zoz58hKeo1TYnqqeQn5qNsPFhAZi7SoR1",
  "key39": "2W5ju4Hkxssj4a4PGRrS5cX7vAhw9xDeoJPzvbmP8r9mfP8aJbWYMfSs53GBSiEWDJ35nfRJS4U49zZ8r6w5jfrF",
  "key40": "2GUswzsfdWX9S2uCXUVmNmC8gkWU9aZgjb7cPiVNve3wpSyW27S3ePAbea7fskEwAoJmuXTFG6Nbbb7BzMgrgSHT",
  "key41": "66mM8vpT9JRobP5q8iwr7UvxjH7Worjd3Pyez4GeAAhJeuqLK149fcER698vMhWe6U9jiQMze8y1MiZsrivZJgJK",
  "key42": "2qLF1XHrgopzMkTWsZowoqsysmPBNKiux4D1EAkZBUMomMj4vsd3Wqzy67FnmQqnRCwZ9mwRy4ecuER5RQXMt7Sm",
  "key43": "kKHkVcZHMV3XoZEg8y5qWvAygYLYVGbrDRoVmuwPZMRHiJaTd35D6xQVRuDZk3SwHGRwFBHFMbC7Ct1vpXvocoH",
  "key44": "5yHrxzt4skjVwyqbdPiqYov2V2xVVryXnzYWyN8BnPLiEJN5rDM8f4fbvPuWmxobgfCo2gGXKQxKSmH7cPSvt4yF",
  "key45": "55Dp1j824Rz3eeTuXDvgQVMJVUsWPxf4FDidGbEycuMmY7aJag4uT4qqSxaHgLBT5ZoYLrUmYjNrTiKnvhSWYu3w",
  "key46": "3wd4EyzZ3M6LUKDn5PFJf17UBCzVqULm7Zvf4hG5w8SYp9drgFMhtLyNTGUM2ss8kd5BFtDKk67xrK84zTwir8Cz",
  "key47": "33E8FoUVHi1PAEsNJC9RNaDKEVgmkkMxKxep54MHYwnym9vd8yvweszxtLvwGkim2RsHAN3vmGg4YLJxB1RL7cFr",
  "key48": "5fT7btirnp4hhJ1yYw99kJdYBY9Tswj59LZJLcovioVWTPyWbk4mjt9wbvNuyqBkx8imq3qy6fVYNpjABiqfuFCy"
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
