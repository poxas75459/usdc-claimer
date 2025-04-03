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
    "2mH8z81g8Swn8A1tdk2W5eQbJuh1gVGb2JJLDNuWR12f1AdMn8soHdWLxDoFp3N9Hq9GZn7GgQd5Vv4sBSHNWvAG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y3Nzw8yTggk6H7C7YDVxpLaGqkLxWsMDZxaMUoKT1q4pSdYZKvSckBeYdahP8Nsp6GjtG9YfjYxbQGFt1kjsstj",
  "key1": "3GFMNoizrLhTxppHsFyuQM8JPbNqkQWVH54h13v2xxNnKTXhAvuL6AFzjDTcKgjCRvsQMZfHe26nVrJKmzGEg5XJ",
  "key2": "2ACt7Dw9wiLS3q6eYFtM1zJsJqaCZv1YXJF7Lmuh8iPSeV1BTTgsqZuPDRBNbusYXEZVTkuSCQGRw3T2XADXBvVg",
  "key3": "4qKscHuZc5hvP3jcNdPZv9jkCUYBeY1HUHbLi5R4frAghjTLZ9uTsvBeWmYKrbKxXFzwxqJbDygEDodUY41ydvYi",
  "key4": "3TnsywLgMeAFqMmGjAN85jAJqTE42bU9Vc6h536QaHgvZ9zXvLcth1crr62n11CUvi8h2fnNq67fZuX5saRqEgNS",
  "key5": "24j6giV4XQPyQxUkN37NGBgk2ujEPwJRH5ExAHj8muJ8m3Rtwa3JEW6coC611cTJgC5DpcxPREyFpnh314NcV1V3",
  "key6": "WnigWxTNvuiVioGffgSFcCaLHpsimZKnqCGH3qUCMebN23q9SAx4enCh6efxPjbJwfodPsELiM3jSjM53uwHjYP",
  "key7": "3iDFVvHrJvXmKzLXtZ8jr6WYRZnUsWhSi3F5NWPLX7hBnwaXeFQWn1tyNLHAgQxEv7gx9rA8JSjoPB6afAZDGD7f",
  "key8": "5y4ShYTU5Wx3EnBohBtLqhf3DcsyAq5SuJRExbksW1d1XzPc73U6sYpRpUyaEF3f1v8oUsuP96kqHM77MMvUYnpy",
  "key9": "4N7bqy93dfZpqZsEwUHaHYJiQTJGDuBcM4NA425JUrherodki7zAwVNpaSQfXiWMqQzNUYKTmBZvHXnKs6D8u67B",
  "key10": "33oKZS7poJjAwYPRpANBsjk9rQPr3zSeqYuAaNp4R5Q31DiX9tdHapgCKEcqw6FyhbusEnZQd24PeYzLP9aC4Fts",
  "key11": "2b1jf299kmKaz7JTDhVQukCDq5fEmqSHtYt6VLHAprFAfMQ5NuTjTTwpHPmC24A8KuT5HHdz18BxxmgMhTUye6Bo",
  "key12": "4E2xAqJuF3kJYieqHwV7BFE4jGvLAyZvA68Yc4aSzPU4Ehkb9nKBEHCmSG7rRv969b3PnCLLyQjkvgSru8bkp9qm",
  "key13": "4w6azPk69MaWMamqvEUjwXzaEUzu3dHx8GLVxtYvBgrsvLbZfhyzZcMsKqPJK7sZJS4ExDKepvkikddg1sbrAPPK",
  "key14": "NZ5yTHNMz2k9cMETBNbksVjYAPkWQEwr8ZTTdcuFzhPqfxJeeWZVwxEQTQQTqADuZfPn2c9D7YHyxbUfP5bsWoo",
  "key15": "2NtyC9ED6eYaRctzsKoz8joFQzCPSmaiYMb3XZNkYi2gwcbKUP5nym3e6mEgemTDEXPxceDjuJZVm5qaCmhGyuPU",
  "key16": "35tFrLe1fCV4TzMaiENPGanmsV9k2VdJn971eQbbMBDF1U2kSGjrmGaSLETpDLdhTDHob1yRR5MJPVthVbVsM6E4",
  "key17": "5MipmP2UtP5ZKveFjdrMhghu7mKt6SR8NZ7VKFz99ZWRMdL7xaZ5T9PJNjjrJc1CbHPWPD3aQ1KQD21kFwZNThtN",
  "key18": "W9uojv8xipHQ7wxkizpwL7SaQyGkNVhadPfHjA9PGoCJb95y3M1x51t68KjY1BifDYjb4wzDpJyKUQmRM7G58Gx",
  "key19": "5mDJuVfR34F5SYyNVM3Uz2X6yYY2MwVmCG4GwpuVLbyb3CADopQEAXnGTux7XSKSqQb3Tn8UEWjPCCEndb63NvSS",
  "key20": "QHk8qtgYnkbmiFtXJdWvakX3ZsEjJ762Xy9FqH26jzUu392TiG7EEVJeCUt4kvRyqwbNTFbdB2qBrdgYd6wyehj",
  "key21": "3ATuXRPS9p6VNJLt4yL18RdbsSsrAK6fingNrbiPxZ8oU9rjz1Hbr74zgr1aWnfCqvMXWadsEoM8GSYHrzS4zhnq",
  "key22": "3JjnSWc63RA27hdyg1z44B7A3vTmiq45V13onjLwUsHD6suM7xSeKWp7h8Vzx1HAA4sefFJr8Jcs3dUPCDFiZuLm",
  "key23": "4t1wQm9NKJjiADnoFvMjSkP8vWnAwegfkYSVBNZuZJpXn2uiawgAibmbii3oAABQgz6H9jy5LcUWZn154sxh6KZe",
  "key24": "47X7tXDvj8JBteJRRyfASMDb7riYebPjiMXAyqYsV9KiMyQUZoLdeH8CnmCiWPEKDNKag9LoezmywmdXEjzTmhL4",
  "key25": "3HgLfddLk4UWhqEhMZSBkQnVNTC75bGcHN3C8esEBPY394yWzrhBP2m1Nu776DATxDvPU1dLPXFxHSTa6jnTcUEU",
  "key26": "2SNfbg5yrrbuf3VHAHwYonPNMuHcHXTwD6874hqGCPEaesw3HnUPRiqBzSuqDZRNLdube9weg4jE9aXvgGzCaBW8",
  "key27": "38ecxJuDev1Bm9gaVTTdazRLE4Voto9RNJmvGF4UQjyr6e5iBHsSPcJZwqSonWCkbaSh9yAbMpe19QmWwpiZKNMz",
  "key28": "5kG4dg3oMcbe6J7pfDty8tEF8L5rYjttSuGu5HaT3q5A1QcZ6aXdysPZZD3xkRa2pRGbycJjrvnDU9f2B1Wut7Yr",
  "key29": "3zNncAKApYUbEDQBsz4MQ3diXAoRXfigaPtE4wn69Na55CdE9B194cYfyEpmXVdXfjWHw9KTzjih17brX6MZEbWZ",
  "key30": "4z2Zcrqo2PKVaLrJ1SRVnE3jpsW6ffqHVpG5acxAd8sMZvMDfCka39v9DbtyU3dBNeZYUARq22zirh2ahvhjV6Hi",
  "key31": "3HCztN4dgh3uaNnd3DjWfo8LucpGdziromHC3mkVRM7nP3HAvkxJUCzfSs79EfreTWv373KXJjCA7ecvKQDC91Xa",
  "key32": "C37CY3Bvjaz8MHbfvzPe3KMzd8gHRzLDFhHQzJtVj73dLCgwAJj1sCpDdqJgPzXR5dmzCnLMuYr3kxcDAZS5sJD",
  "key33": "5x383WSEe1a17zugwbWBJGidMM5wFWoh6wHN73pcPqDgyKUzeo373QN9Y3yFeBEVE2by29vtkgp4Zz5FCyPx9ExT",
  "key34": "5HkFjUdo4TPe5vZrKVeurNLJh1DkEiXsnCr51QaeXdTgCehv6mjQ1BJBrvrbfgRjNaKbNGRTHUdBuszaUhnMTLgg",
  "key35": "3U2RZG8QYRVtKEt77ryq5xn8GEaLNjAE5rS1SEefbGPaUurQhTG92GhZ9WsydCJtXCzQhzVJJ71tAmGUBkbBB19B"
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
