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
    "356DXcaLyW66SWqQspUSE8nhkw6W7bkaLXRBEVN6BXumyQzuKBvdhzHoKKCmNBkdDeuunmx9bqBEoSBARa5ubsLV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HQjMxP5EN5thmtfsodhJjKqsPrHM2zfU5ya95kkCq5ZghX6GXHo99mmpxcrPq7itA8rdkAJX36hg681GvAetssH",
  "key1": "2zUs8YY8Gy3ZoPUHpoh7ELmTHad6oq9fKD9i5qZgwf21C6uKdUKbNnLYF9uYcYySxsCfu5ZD98NTmySaDe2Wi7QN",
  "key2": "4yUYxMC2idsVMtW1eAXuxpxeYz7JLWQyUpRgRP9dYb8v9WSaeuERkcL61sjCbgF8JDGoFRTNeY1XMHAng3AGvggS",
  "key3": "3KG6d1dU49FbFUH8oncaTgvvaRKziMq2pDoSmigshTJKWeqYxPG3p1M48ECCqyN2FW82ZctDSAnBL4Fq2MWjXrPb",
  "key4": "4b5P1wxHkWJWFke2jikQzG7L21q59jUF3mVy3onZ4ttrNEcSZuJujH6BCJYemhJZk7hqRu4KXaPovuqjwusHGR36",
  "key5": "3aovZhiUBHQJQRNFbp6KPoHumx8DSRh7wkdDGeia7q9HtUNvzP5YDBnhcttYsVFvwGdoQs4MYJvEovk2N38p1f2y",
  "key6": "3vaoXTcAK7vhN9NnU4DpnR2rfBUGx6iDKKS2Gkqz5sBN67sMToHpwmjFDausCYNdpU5Uz4HthyVGQmKUSn5gvWTw",
  "key7": "489x34yXhKrY1F7QUTg5qiZxE4BeGu6Aq1pbZSyE4L7Uy9dwQkBuMntRDC3DCxD43XGeDGUGmbhB4vFjAyZ6srcJ",
  "key8": "27RduW2N7b8dbtF4taa2V1KY7Kc4w8je6ntuHZcbexS2ZoPkntBQf5qKLE1Muresa7WbYfbRqF6fgUf6BQA4EDfB",
  "key9": "vZJK17it6Xb2zRCdxidmkB39Y1CCA84APJpVZBcBGnuYFyHuY1hpa93egYECRgq2NTz4by5xGtkKznTHhFts7c8",
  "key10": "5iwtdNVLYWfVbmz4cqfsqb4gJqshHi3HatSDhC1gKc8AmFX2auF4RM4eMJaTNv3a28d8fwik3R1Rq2Y638RLZei8",
  "key11": "3VT18Rz7idZeMyifnvNCbowSp16qeQjEwJaUiHw8rvhc5nC9SqtDg9L8tZBFYS5Tu8on32TbvrVfWZ9sCmbkRdek",
  "key12": "44TxE8k8CvXj4C34zigy39SAymRDsPgsXr8wqXhHB59n3UVw8MJKt4TV5Amo7RT7LWZUCSsvFhSayeqewP4YUuGC",
  "key13": "z7SLcUBxtkcYerJUAizuQ8tUXT3zBjqwxvSSWz2eBxuZL17rSx1UMhoJTuM4GWDPRb3q8bapUnwz455StEwmvKp",
  "key14": "2CdqdXvhUCPYJP9SrA9HMpxcLuBQSV7ntKoi4W2nSNnabkJTttLgF1mL7UV4fDZHZ4TPyTsir4Ah9yMd9p9wafC3",
  "key15": "3LkmEGpnMXNG7tsQaNGWW64ss85CrNjtvsJgzwuU8cJcsBRF9mzyb6hEJZqoMKabYGpgnmg6PFN2nDds9LaTPstz",
  "key16": "5ZwUa6ee542rgm3wRYed6d5BZrGoSGp7hBn2UmxvmKRABQjWC8nof2fC2rVUM1PBaGQXUVQUqceNstwVAJQGkUHh",
  "key17": "66Nd25e1KcL1AH2pTN9Ly3Q54JZ7XfnqoPdvRoojb4Liv1nT7yvcMDhXZJisvc5B6rPcAWGjAA2we5Vsm5gM5wAJ",
  "key18": "21bc6ZLqEQFYn68g6NoXNJudRc1vuueo5UEFPqDgf6DLY5KCck8SkccKKfuAGvfHjFsQWVqkp14oBUA1VMoyvtLd",
  "key19": "5282QyxBa9YxP4D4haHvsd77rF9XK13hSXX8exXf4obZwmYjKJgS1a7aZHV4AWX2mBzinkGVwv5VDvogto61BCAe",
  "key20": "2ZXbLsaXvkgTuvasjTmYyP6ma1ANaPh3PRtYN2ghJYdVMMU97T83QWC9npZfgewhbXZbX22J8kitWHRDeAn36JyG",
  "key21": "35MdvmWnqkH2DngYenAuk5P5Z8bU231GnVs3h9b6bmbB5KcNMpVtkg1ptm2dPs5fbXUFjr9j2JfMvKdxZRAoDj7B",
  "key22": "3YC9R6HDa3vgh22JZpA8C95bha57KvrifPKUZZb4BFYHEboK1viqGD9iDMFkbHGSARoceuhu7Yp3uNP2Mq9N4uhN",
  "key23": "2JGxx24eNSgS5cqWiADtz8NzT4ACR8qYs8Th1tBx8wzZZJB6HqmQYLkQeHjBMoYbKJYxtiVGSEoUoMiV11GzRxm5",
  "key24": "4ja8tQGKv99YCNpVQ2Ftf5WqorwzcMt3vrwZ2DjkkcYAfahX6A7zaskLCiYLNE9BLjiB3yoNxiJEZgkc3xJkDCkt",
  "key25": "3Ymqb3C6rpwEx4Lc4Rp65QT3BTW1NdjMuzq4UM3S7aUNe8gvkFshVwJL9P3psD9tyC18XKLJYQUtHhfmXJ6ns3zt",
  "key26": "5U3YxtV3eJuQ1yeJBEkJQzR6sN76eyCXXaMSndk9E91tgtKjr4avb9y4AW1oqrHiGQ9KSTyiA6smHda3GniTo1GS",
  "key27": "2dwuS5KVxjj6UAyFZuLNUoaBsPaGb7Umv3JhTruoUjdzQFvCzHwMWs9ikcKbH4R4MnJYqb5PjmyugTXdcsRVfyjF",
  "key28": "3yaPg7tE4V2eVHvLffboahZuhxrbgpWNJ355Rqk94KCuGoBXoLHFzeLSFV9tmZtLj1ci3oknvsQqRwkaTcNWWwmP",
  "key29": "HjV51t66TMnFwt7SaSx7GtBx9kiCfJJDmSgvuPu5UuwDCYWVDwKtYkVKQVg96YEtg48pP9s6iKJ8cVhDj7wbqBH",
  "key30": "44N1wdaCi9k1i2JhinGFWjFJX6JoTv2N9FQumnLVERvb7N55GmEyRxd1pRV75da7URkkcHKp87Cx6Nn1CtGRg1cx",
  "key31": "4RrFjdxvaGQwVaWsiC4Zk14YGEGmSCCZcnQG7pkHSfePNbEHEGZ55XfHErn4vLyg67wt5T5okBoFUSVEUjtLr6hM",
  "key32": "2qgJfmHBeejLtmfnCsHfcxoA88UK9kdzR5nXu2VMqPs8ugrfyPgvbgi2mA61GtMxon6xxeaEtp6z2DhcYRMYr5fT",
  "key33": "R9J85JhVp1nQhnGqP51e5LVEZgjKJfNUPoZAVEbpQy5PLUFhcjnTwBjzp6eLfbUpMTxhfVzggBAnSUA2x4aSsiT",
  "key34": "24Lq6rgvLz6qkciykaz5VSm5cNUSgZSJ3T1hBhe7dZnsHALGyrcxsvdhc7ZoRJ7wdZLmvTYAgZbFZHq9enCoW7U9",
  "key35": "3QNVro9LdehdJMnegdwGjgaY8YMNGPKD2ZLrcwSVPzcXNPwjWNkAkEq16axdS6cjAA2Zpwc7Lf2MPf4wpYdL6DaV",
  "key36": "4n9LrEzRcb6JTZL7B8nF41E1pxbfHA8T36TQZtNeDCEgKNPqZAHRfWhCEcNp9SqXFPJxgS6thmNf1o11sqM2EXo8",
  "key37": "fiZirDCeQHtGhLEusxGQ1dEstB1oKtbajPMJYmgVhYNazubk8vWwRJr3PxymfScWMUPgEu5gZiFKQ7AitH9ZJFc",
  "key38": "2dirnrkEbw5y8q1gcmXL55P5bQUf5cUmpgvS4emx67AuMLcgkquL2KZP5zSugkPxitAmBGpgWdMWDmG7wGVK6M8q",
  "key39": "5qkqeBGuMiUpHAfLrkjXWf66BUuf5DH7b79W5L6Xu3eRZ1YAi19eYDiYCuouvGwiV3kZvTFXh83NsQ84P2UqRP5k",
  "key40": "3qFYypfLDVWrzazRWGU78zYow2CcXU3aAebYqCGU6q6jRa29bUDkundPiM5HiLD3uaxGHQwVgGSYobAE7kiSvuky",
  "key41": "4mdWxLcbjrmByC4sntZgTzE4WJXpSYFeSxTErTxDA4GRZTLJMJe6b2CCraYbqhDkeZygmnJ1WAuKh9t8swbvVaAb",
  "key42": "3W7WPzxMKV2oF1DnLrBvbYN6ppDtBjBtaHmq1TaZDrsGdAB8LhJVcb1JVMxqAcKwpBa1ZJ1PQw6yUoU1BTVJi7XT",
  "key43": "3s9RbkMXNgsVNydjbTp3ttSEeqAZiDNHyMAihemm5CUvG9cmVNzvzNwYz9cnfHFWc7GKxQijY3fJUPEXnCsSfu34",
  "key44": "rn614WWnDRgnpZW3KNG8T9BRHHzJsUbjpQFe55zB1bMuTVwxMMkzn3zvsjnAWu2tYMDXHK28yPCie8jMAM6mFAL"
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
