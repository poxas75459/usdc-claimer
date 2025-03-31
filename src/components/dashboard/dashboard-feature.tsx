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
    "5gDjwYincg1sfvSgEtU9b1MsJzhLh2xBVpFFytpoEreh1czSDp9qY6Dt4NyyKbQm5zjBbHsr7ZFE6zMVDWYsxBJ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JgfGASkk9hGFY57Rw6YfvpAjcTW2GMDymjJNeqbRCyb5ZQLgp19SkTLwzkEGktgAuLYN68rnnyZhC8GaRS2Ucoi",
  "key1": "2YNw3eNXY6H3G9zsCEgkGSfgUEzboEkyPoxA6dLfRSooeqDKz1Vs11LstBMQNCkfbS8MPFvER7iMXvnSEMyU4NbG",
  "key2": "3yP65nEZ3USVY1xYc9ka3FrkYzvNVQ4JRwFD8t3wkVdi3V4YKZLjJceRgPoinMaDntF2LhqS1cUhu6cmKBvRtnij",
  "key3": "2C8YsWHYNbZ7nf1JcHFud4GwK39wX7nVUZ75Ps61Rq6JeYg6KMmHwRxkyE8475kWrmcF4gpsnPEteaaYVrfA3kc5",
  "key4": "5Bonb7xTCaK7Scy7bJDv2EN2DyKc5LuUdd1cXkgySnhsg4MLfkxBtNh4AA9xg4UbgC7hsGRCayM5kBxdkuw21QZ2",
  "key5": "5SkzgwKccXYZVyB9CuHnLE1dn64ZLxUDjEH7ZeMTkXKLV1JwTo7jtYJU4NNn8PAAwDUU3ap3rcffTD8yVAtdWcx",
  "key6": "2Auxnp3nAqHZnHA6hjZEqLXzMTKhTFVozZeS59UdCNBpGucU9tKEUCHFfK7iAaZuwWUnq2W54WmFyvqiwyAzvVHq",
  "key7": "2PFB1jcy9o9c7R1HG7CfR9Sagh4wbRj3LVTNTMwfwVeGnrB9ZkRpdUb1jEjmHhDQ64JJzQzYbLFnxfLCwn9uDvcx",
  "key8": "4qb1amfcyZyNz7u5bGWyy9bBcQftTBjCAW7rzSJZzWzG5V4ehrPXMt8ksTkTWcn7tkTh7KHTaa3JbaLQMf7ECE9u",
  "key9": "2NjY23fCqcdYAHcwwvG6A9mT8aQ9BEHSbUgaB9ikdqnWVj1aH4MQzdcmACpYcGUcVzMwaWywJCCMjqnTLBbmV5tK",
  "key10": "2Nhg3WiTFNMzRMtrCFTjirQ8h8V81iZcp9j24dmeh5n64pvTn4tTm3mskYZgk5mAVXD31kv4mnqggYQPsFGxpJN4",
  "key11": "4eb21zwPF9ASKRU6mmTb5hRvbvdrtVv34ddz9XNGnVujxXmu9HXBPpckKhiWsJ9V8K4wfie1LbqDdXhJMXyuE14j",
  "key12": "3YwfDeQhsJmadZbARDh6GAw8YfqJwDySRttEvT3DBB4a4WmkS7gik818YwemYAbibVaGbdToochyz2bpZcGAAhc3",
  "key13": "3yqdmJ5qVkLJdN3USXPymntXvAfHxkdo5mz9YxaQzC2eK2P3hB8foqHfL23NNUbWUUhC4YqxupMNzeef23wpZUpw",
  "key14": "5WpcmqKCeennGoQsxMUugJqLgn9mYNfr2PAyEgixTxR561Xqd9aSgcz7SjsxSyTVZNJDLSmqPhAEezD8T5jpZXsj",
  "key15": "3SmwwfKCGeXpKro3xAwHycEH7VmFyj4kWo2LC1dTsB5yDGrQG3CXG2qG8e9oovhCYpF3biLRYDvYn6evonov7Zf6",
  "key16": "2mLCY7Q7zjKvrS6mBPHTnH6oyS6Sm5kRkuqZLfHPqP7KVqciHTVnCJnJc8zcPXWfN57XkxZMfxn54kX7MnqZLEPa",
  "key17": "iNmdcYK9p18r5eJ4BzYqDziSkSg755uWypAirDY4gznfgcAmDgxRjXxp3ToA3kgwoKsKjcUcsV3nuu2LMPALnuL",
  "key18": "5rAoD16iruUMAnzCmkhBfRm57jEZVv4m1Fq9DGNRqpbbzVh5HXCEM5vDaJntW6m2a6nZtDLTMoM7wC8ibTGxAEnn",
  "key19": "ozYyDqykFWaYWvEPqCj2sUe3DAxa9SsQ1bF7HPUgVosH7JoXjKHAQBo7dVhjzPdGZoFVc5pLVADEwuN8mxSQMjE",
  "key20": "4heTwjKYiqHvmhZVsm7uypCLJq2dcu6b4nKLgohpWSSFTAAZjTKHJKV47v9U3rCZbr6qdJdg92j4hLASsrhbxbNr",
  "key21": "yStNabvddPW1b2iAbeizjUUVihoyyYQ49DdwWLr2pwrAC2htZyDkgL38pb5hi7gL2rNx2TQyaujD5m1nRyhq3Ly",
  "key22": "5cJTMTqosUmnF7FpN8ovU39d2CJRvwyGcJC1ijh5kqmNQpkBuLCvDf2x6zkQMAaQDxVyX3Q7ez7mmoQuvGUGvtyF",
  "key23": "5hrkjhyqdYqkRWtS4wtLguHkGsesvCYY288KZoRd7F9gKhp8RgBui4aAZT1dLiS5nt1PibgcuRDr7xynocc7dF9S",
  "key24": "5hTwXTQw2dyniqZVunMyQLJ6uV1GgECtdoF9FsVb3qxmKjutrh6cubZqmND3D5pWRw1xfY4fnD42Kxq1Hubtu1id",
  "key25": "2DRL85BMnHVQWSFSsXSpaL28v1dZYuigRZNx47wJYppbsShd3faEBkC8yqUBVfMqE3XmVgvyyfZifw1B4eYBwBKP",
  "key26": "AAXx1Zzvwj2BmJYm4AuYZvtCFdjT2fhVnc6n6GC94eFhTFBonEm1AvfQ21FJYD7YPnRC3RKAYn5KVmq7KP2o6h4",
  "key27": "33VsS4cAco8hRSKApRF8HWRXxMtG8k38TuLVDdZTsZWZLNyiv1zAuhrVsmJifHfFRozGEYfGjkS6tfGLtyJpa7Tj",
  "key28": "61RiSMc6c65aK1AjzDWrhvNUZbBk8GBcMua1BzsENdJPP59USV8H7aatgc5ikGy9ugUbMjYYfyB9ixsE61Ztj4bF",
  "key29": "5BCFWFKUyhgXdN92GvdQSngreiUu6qBiJSoDFRaLvtYev8S1cPiunoQmP2rSNs7awwxt4w3ZhT8qDmfd41zkkMvP",
  "key30": "3nbd4s97vgpcBiCjxnLcwHunU1jZCxsiBBN9UHEMZSi1ZjeqcrQi2dLEiY6mo4EwoRdxuCjqFz3pyi4pdv71U8WZ",
  "key31": "2LGDgqz7C6tiawra8BFFrMMMr4p9UbYskfkEFB7CBNSaFgwiWqh7En9M7Z8D7kryYGKpzMMJSXNTgMiwEpAYupdW",
  "key32": "3ynoA489LRpPGb9RQxHGtiozD6fhMcqqaxnWjknMiR9RdKRAoWbeM36fGwN1bzzNmXMkk8vhGMaYn5v6jDZwVkbb",
  "key33": "4oJZizzejVZSujpHoChgoqFmHA4pJZ5CEmx412e6KwDgJnX57owcjKc6aSvi39BtvWXqmVLFuxpLyhwtm7FaYH9Q",
  "key34": "3a2Jtwococ9bcJym3Hkv5sbhQkghQjqzZ2FiiXXhQH29uRj8xrYdYgrkKgZBHS2ik8ywHR8jY8cXWbE25XLLTLeE",
  "key35": "4khpJbrpT4791X4Cj1T3dapWuY26w2cEgd5iwAkN6C16MmpUdTBKUr7qWCu18pDZm535trkRxDEvKbC7etNyWZ32",
  "key36": "4uqRgpBoxpPUVzNU9AoYmhxnm84aGdnAgzGEMtpjTe8XQijzZzUKjSVtj2Qvzhd5iRv9ZqvTcvfWouXXaPfG7K6E",
  "key37": "3j5dFo2qTo93PzivGrdY78HPq515Zie27GAkF3PZTBC1JZeaKzkCZBpwYAxa9GwfwtB6dF9nyev2n1PbCzgxiPE9",
  "key38": "3g9rwXBSzHjmjnqX6WBmPqgZ1ggCLp6uzuWEcHYb6TAyyGhT4YKjnGzPiasHaRtkqMktaMq2nsEzBBB96f8FQREt",
  "key39": "4rMYeTkiX4TbQFTKH6AH1CbK3iKcPsSk2SM9eU3gHuYHn712DmyeNmUBazBa8fNosYAvDh6fWoiWP5BoVfKrCVe8"
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
