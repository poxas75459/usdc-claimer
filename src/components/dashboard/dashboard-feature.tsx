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
    "4XRKhWWopBhEtwB3q9rjB3cJU4CCkyJFMcjPFAppERkWDPXfkNECK6sbAoPtusg5zPbUgAbcedLemyYBLAvre28e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3haKqbFQiyN22Y4EvqpBpEEnjct29RbwCUjctWTXGYsCWoXfiXdpYz5beqZMwYsn8dp8G35yWBA8uUrrefdgHTk1",
  "key1": "38UciZCB1Bh2x3G3WzxPJJuqtN5akwd9std21qZsMteG2GgmSveEiqNscBoYHgvDN31o9dMdJSm2H38Zop3n9LSv",
  "key2": "y8uKERjrpGVX2zZBS7stSP7eEnjWzfzezwMZ1QyhmaKV5VeMqXMEyhxLA3Ti2ekAPvGuNNykgPGomFatVerVTbE",
  "key3": "4u1BnhyBVcfQQSWXMsaPznNFUDP3E5oYiSKC7bb5pkWP3DHG4rr96bxymzDaFZ3hpC8QAPP5EpoFWRH8rV4wywnX",
  "key4": "N6khZM72A8LrGZobrCvWrnVcxYAnKkM4GGWQgAQ5bbeUSV43ZBnhUnWKDcxGGewQkqfJ6LXQv9onT35bMzDGUj1",
  "key5": "3Uy3Hp9Q5xoVQMbVsJrDu7y9xoU1ioGY5frb1o3FnrxwKPfm9k2Hxg2Cd5tFHEWVFPcLWxwy32mBWFSHuwC2iQY7",
  "key6": "3Jegri5WQHPbz7mJLwjoTixytbSgSvW3zz8jzXUw62wVQaqXh35AAcbgycyXg8pYo5J2ivZ278BWGYWMUvt3Fi23",
  "key7": "37EHeMWenFmhDJW7s1c56DoJ5qrCVW4iJ3oN5sXfbj6fCpu6SLKDJYw4reX82hjxmbZgAhz5zcgD6SAJiHVvhn53",
  "key8": "5Mw4Fg3x8hLaCSjcdVoKK5n5YWXAB6UNj688gvHv5fuLUciUHkEZd89rFndyRcgYKq8Squ5VtMYZqpEgDqpHQq4U",
  "key9": "k6z5ve3SmNG46ErnJrTdc9rDiD4rgG5uc9nwSHoqixhoqUUsXDffV7zEZq8Ljfrv2cWYr7hjq1AApJ2vVB8fyYq",
  "key10": "3kiXKfuLGuiKUtwVW6SurkbqiKyQUatnceNiGATjHRpu3azwLKUN2wGL6HxP1QkQBwyzKxesDPxfeLrQht2SqrWU",
  "key11": "5J612rQewhzU3H31nwvoof6Q8MZbru9NpJ8pYBsr6MzaKYMkisyqGoDK2FKXbw8AaMMwksZi4nfbscojzbzgBUAs",
  "key12": "3EDZDWRBVnp266CcduBRTWRBXuYfnL2n5XZYVdsdEaYuYiP7gqvYcY2vsxqzjGHkYDYHAoF8QnNpZfn6wrADadUf",
  "key13": "2bGXRnQzK8E2WHf6VH6Y2cnSTwg32cfXYByGC68BRRBYEoYjCrrpgW8dUjFih83L2JwKGGFyqQsKGQmSDQc8oQay",
  "key14": "2CCvd1DYuisfNwHmQTS8kE1CRmCf1y1nvwyN4GjCYf5BcXUaW4a5Dre5MryXUexwCWMJXFAi6rfgrxpJ44dHZDR7",
  "key15": "2EHdYaWXCqHUfMnn6rcphZvwx4on1medgn4Ct8TSuShzdzBZBiNKtYv5SET31hgQ8f8WNof4sM9QJwz2W5pfKSv9",
  "key16": "2xXBZa9du6brT73fuGDcReKkNhCBui3MiqRfXeDm45ySZCBPEDAHQ6pmwwrPwo2REfgH7MSMKCcw9TJdwvyKhUQB",
  "key17": "37EwkAkhq4awvCb54tZtxgCgVF2ZJrT9MqPk3EZJg8XLoH23zjmmFAFzpgudzgRnHQ6L7awzVmf9NaCCgATpfoVg",
  "key18": "Ra8gL1NJUi44TnZoHVZW8SXoEVGuN8znJBLShk8Mzigfs8PQ3ifgEjontY6PMn6G7d93Vbfb8hS8e5Dy56M1f63",
  "key19": "3Xc9MiugR6DzsKYejoeEnzRer6z2LJZLQrmZMZFC14iSZTpEB9nhQs3TYEo1pT7yY7tSEpQWjFmEvNoDSMTJQKgF",
  "key20": "5xyE7cTeRerfcRfQnsq7HJjAob1jzQwb7ytMQu982qgxNdxQZP5cMZFDAXKgpaKSW5zoUZ6Zyf8LR89zUgafNGX5",
  "key21": "26XEDNoQUYEEWasWVYYPvKS4jXnKjBxaDdYUSoPpsaXqZWXf3SF55PtND7NGPr71LGHe2Wb4iy7fE2hbikK2BFKr",
  "key22": "61qCrZZ2the9JVWedEg5iiv2uEu6YZ91bYzKmtNrb2tqzBjdisvamT5vuJHW91UjWfGnAiiNxGDRV8vsYXSwSzPt",
  "key23": "W6xMkBFfp2wL2C7E1hpfpsSAsTzhXy98Wj7g4sgKST9FhZYNYFVgEKf4P6SEYSvQTKc72wxLU3FjaSKzGbGVD3h",
  "key24": "3obUVyGo2CjSUb79JoejT76aaub1gr9NzNBMM13opt852XBXQQHZkmuEbGyd7wjj51RVoCkwYThocDeQjP9J5RGz",
  "key25": "a6cFsq1tMBYiXuXx4JLBURscm86YCdvacenJKiKMftTJD4wj8Voz4tqPQGQvKM2GfqyXxmfwYtwkQCRMD5QjCkB",
  "key26": "5XqGiFpdtGrZGtBTeySNYJsbKk2x3gDFBEnXBhU1XMvKuDwHtsgeAn6VKQt4HrwfGVctDNbHyCZ8PUdDYKZaAUM2",
  "key27": "2eDvEfZUU9L14r8SF8F7ygKgrDw43JwcUHasc7QTmsJRKT6j2msf63DLQ4f7GKqSKh9kAfT9tCJfaekaWSoxBWYg",
  "key28": "3KTKF5D6C2ompbaTYvT1xeVK5frdB3maswD8EhLNb7L7GzvHtNi6gidA1SdDvoWC1aQKfBsMbGrYfQakJh5Gboj9",
  "key29": "2tLZcKjYmcBAq9z5c3Ax8cz99wqPpdL3te8qizQaVASYjXuRPgchaLeeBSuNJzZeTE7s6umwCYCs76NiUGU8HWoS",
  "key30": "4iu2kna3LHKUG2uhuWXTrYeQphwuF4g44gaGbUrofSXDyt6JY5enWmTvVXA6jH57BuCird71QUzNtL3Vb3etmuN7",
  "key31": "Pf5u6ApB5aUQBrmTTsjaXqYYPTRRkJpzqsJPShvAeA8kozuSvcE1tmMWpto6aE6QkTKtgvW8HgHrnyUaPwiuhqF",
  "key32": "2naVH3SoXLgMk3iTWyYqYxmmxH3HsxH7fYiTVwRqTwqkCJA4j7W9Xz7BNrW6kKzaa8AjroN5Tg6uBA4SExZ2Xuef",
  "key33": "4NuVNAD4hmcBBFAF5NRB11kwAC1dtL2maXQJoqm9cGJE7yhXqtYD9J32cyUKX9vu4QyyeND3nuRsu8FzvxQyE1Si",
  "key34": "2KMq3MLsg9AS3bbXVDksSyn8YgBGadrR4GAiwEsAE35dyFd1Kq8Z6EEjkZdLBZEbsjgETAM5r3b8KfuoTQtx1ZRs",
  "key35": "3tFvHVHK9xcK9Pan3S6RH8Uxs8Q35RHoBJC6qBFuFAu7rk1wqJjWrcBNnUo2YPMQgYWeq5ZD2XUGHsD7z5wNDGFg",
  "key36": "LKiNjc34RsxYUxaDQMCXPqxiAjavithVxpMCcS6eLFRkU6kP3abtp6HkFFTVxZVnMfVKgry75qz6M2jfF761JgP",
  "key37": "5cwum6pFiPVMuygQ5KM2SnhLa6p36zSaS4xFo499ALeZCa8LwW9Rv3VgUawgr4LEcQ2gSTTT8d7TWVUVShXntTN1",
  "key38": "5vMJ6BiK9vEC93BKUPa18kQKSFyau3AUzPTd3mkCtEJ3xFTut2mn1xHyobmJS7oLacCJK4RpjZzqwKNtPT8NCNBD",
  "key39": "36dq1sj6Lh1tTBaetcu8hgsJDoKLXsjtXhk8Xt34LnY8zJRbvtG1j3PKt8dyzRwPQdnvuka8HegByaDzAkTQ2dDW",
  "key40": "2ZtfKUkDk89mYbV17BvBPXk9WWiU7DFMNMV27dLf2s2GRWVkqqpsh8qpz2d4hct7Lp4LmBx4UgsYP1FUghf5RWYh",
  "key41": "3qLwM9Pmk8QKNxNZ6GjTTdSwzsLXxw5Cv1WGDu8ei1zY564vusbZrkkz9pJd9wcayMsvdYXmiuQjbeXBmwodU9yz",
  "key42": "2kgeAqPsGViYMj6P5MEWAT9x5QtEehRZZ1BAX5Df1xJbE3XonT9ETZyStz5eFHzUo6SQkGCySMCho79ycgZfXtdp"
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
