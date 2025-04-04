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
    "2WePuVUNzYAgnjesKVhvshTKqucjDJUk9GShJW2qjBWe74r5ZKPSbwB4ofxZK4paqzUBQy7TfcMTpwa8rNiHGTvu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47U3BCGKB9kkGAV8Md8UZwcw6Yn29QACSuiaemPV482FheafwpNmajajfuiw48atfTF4E6SrQbtgrJMrpkSSspZk",
  "key1": "3rUeEhsUeLCS9G8aKWX5XSfRFFVw6XfLUZvcHD2EtRuk9gXp6E6QeKEC3zN6xKGrTbYTBnJKZkkLi6RW2bz9WWyw",
  "key2": "66v2AaUWE7KzVqHHirBfh2bXSskj46VDJvrsrN56WN49ZQMJ2jGtUgwaUdETfChuXcn1gi49Sjq4N1qr5mW3KvtR",
  "key3": "Fuabsz7QGbXbDmtJj3n6uPV9s5qyZKDmS7xU4zGFi3ACLCjwTtrJMt7AD3fDrvGMmFEX34LVYSJ6AqauWvWUzmc",
  "key4": "5U2UhK7jpCHCSvmcrGxFhcgZDtY8RyVWTNJEngyvPV3E7JHXk7bc732nZX8RWuhaUz8J5S2GjJmwJ5WLWhVXwCy6",
  "key5": "4dWZtvgd53KGWcyD4NRrjzLRa1ncCF8dxLydV7GJ2fzFTuCgwbGQiZdcVTsh8hKv3uADXFXxgNYhMC8mFcB4cHPq",
  "key6": "gdxj1WxCWEPg7EZNHWBT25UEqzyr3LCZvwP8CYraJyKWfBppK2sL6aafHfgAPb6dfVa9Y1k8iEsHHDRCG6cMAAj",
  "key7": "mWsiPNV9CE892BjMBNix7WF2LLy3rfBhuWPgERYgoKU4DFyaxptJzZAYvRPTcuGwkGWDfw1nSUNERLuSccJ35z3",
  "key8": "2ahxfQLKDxnyf7EXuSFdLHCC2JFxviz748oDNWaBB84Dp5MU4pNbXxJBQBrJCmqMktevkSKyRAninLTesamuCoun",
  "key9": "3Xzun6H3qmBzosXXVcugiHraQTUMZaxucxCxGVbbJTaVWgXFcG7h7oT7yFHGtmGioisquUa8DSjaP53FeqLwYeYT",
  "key10": "2uHB8j3BJopmM5fyQcuJ3fQLbhUXmRZqCdZ8bUdwBBmzcLy3m5ARnhfYSBR8QzCMsNsxTTckg3FQp23rFf9U8gY",
  "key11": "m8yXH8hodyLs2futx6u1mfkh8zFCHBLQF2ntXpBAnNkbCNh9AT4XufsjY8bXTaKvM9f7zPXmuiGL3agbnGEgvuV",
  "key12": "63cJVvKPHY9kaUqNr7QF17iCeBh4MPEfgefC5pgoGMA8m8VgJr2UrLPMRkprS7aoGzHBj141wGVNHKJLmARbZVs7",
  "key13": "3T1Bm4bg9LZ8YgjNz3unV8XnrJxfrpcU6NJJszqHpJV7rMR5kGfBak9eyiEwVKSogYFoUpcajKy3tmHsmVcGNTiU",
  "key14": "UDA9xuEinTA9hjdXPnWgWzZtVj2jU1zUUtPwigxfPd67nH9KUwwc9niLotNCZFrVoBS7DneFLbefhq5MgJeBQ66",
  "key15": "48Dby9KQ8P7oGa3a5zNvg7tXAaQumsZ1KswkjgffcRu6928FrXxn6VDQvF6rP2HbNP46X92HoMWU79oVF23PcCZg",
  "key16": "PZL2p6NQn6HATH2CQkUKNinETtwyyDJEKaVh9iCw9Ah1sqtqGQZWUjbELXgiGtssQ9hsWBp98i3aZbvhW3qLctH",
  "key17": "4NReXTDhmBqjBwrX2F9yCHi1jYF6BwqR8SKrq7LYDKrxYk6bjXppDjhXfCzUjfgLi8ag6QVVFuyfRPmbZjUvZgiD",
  "key18": "5HdhsHYebafcaN9GC9BWbm82Jvehbp5o9JEn9Xns9DsNwudoKh2YJipyvhZrN669wfZREqnq2tWLXrVWpbxmteEe",
  "key19": "3vyRCBMSKPvTaAqy2uLN6vAn3zax6B8ksySi9a3vmGh36UGcThVpX4HjA3FmHVmZUEbUm22kXbAbSQGr16FKaZAF",
  "key20": "43vNSB53nWHyqWXsLyT4wCEU5Y6H4TCHe52nWUaNMYfqq4PioQiY524PJL3rSq3nWaJyoS68MXShY9Mv4KPvjU8S",
  "key21": "3imSs39ccKoX16bivbWBMpqe72715busyiTSRtzxEXvdvcF4XipqXZiMSTuQLNnayfpCPjCH7wbbEG937ygPge7z",
  "key22": "FhjP4967VvcoPvPwSXbQwzcLiMfBUN9sEvxKdXToZMrcg6vxu67eG7MYPmjxAfLeGSjbJFUAzCgZtPLguFNopy6",
  "key23": "5M5p7J79nwWj1qqnVR3wTMvv9j8JA6cHxXXA2Gt87AaL3Qs89VuudwmKw2skxSCLYTmRdnMPuUNQAFZgibvfjN6u",
  "key24": "5qjyba9qhcePJUrgNJWRC5wQgh7XcddjhBm8yYJJecCPesyHj2QPRma7UCtoajo3yUq6kvULQWvVTWiARcCwoRDw",
  "key25": "3RxxomFrPpDcFPiFvRyNkaYCYqYXfgbZcJVBSKJS4m7EHhrxPGCx59jpGrkephGin6KZzXr72V7aFLkdFeCLJxNp",
  "key26": "54qrWTLRdEg85W5bGQDRMGTsX8R33Wb8uXjToJ17rP34UQrnvdk4N1SVvR78LyYNxu6Rq8WAmMc96u341wFJ493g",
  "key27": "4WBxUKTBgyJjMMjjWRRFrCBY7LAWiVio76toJhYowq4BcH5wZA1udFjCLSqRpdeNWBVuoN2P6cRnDDZMsZmppn9i",
  "key28": "54o1kVYNRbmBMDBUzzDDvEfaQq4UYniDpoC4VUyzL75xTJKCUZK8HEZD47KcEeuw254R27PoGg7HTdApih82dNEL",
  "key29": "3Xn6wtV7qxMGWGEScsSxHJshdMKK3Hmqzmw4wBW4EisSJk6XESYGHwjd1i63iZjv5Wv3LGHd851waKsGEqabNv65",
  "key30": "5X3CS6uZBxhV1FWfC7kSi7mxq3otfUPgQEosT4N3RLi8McQeS4RQPjKThohUAvpQWba3NdJWaZNr7Wc6wfhkhFAs",
  "key31": "2MuARj6t9Nw9v7RRMWcakJLcr49HnuUDCkxmpu6LbvCZbeXKj8QivtQi7uc5Uzaz3TxMxYvnCmYhvLBUvqWZv71F",
  "key32": "4AnrW8rhpxyFZ1cpiaqtFuZy4RCUwdFxCifDN1BHMkntn2JBimAroMjGfWMUuhJCCnhba12cgAj7NUcMWgQMXv7s",
  "key33": "2Pb8QG2CFRuU6r7UwFJgG8eEfrbrgjDMQcJFssMpZ3WB7oRHx918n4LuL4UZs5pWNVy5ErtsdEg6mWNh6sWg83Vn",
  "key34": "y6jt17Rse4DUrJwoi1AAXSGCN6quD2911HDtS6DBtGTFG4k4KST6KqWEn3p1Wf5ESfb3fiPSVYHBxXDP9oW11gr",
  "key35": "K6iVwReXL8RyBAzPzxkrV6rkiv379xCDQqcizzJ1dnQ8Ap6nqidmnH3bf5ZwAazyUpUKTXwtKgMNbQbTAppbWtn",
  "key36": "5qjmaPR7W1pw6qozaYxydP29Ximpqu453kNGsqjnj7WC4ReVC8CXurHJZGgNFLJ6kiJXv5Jkg55fTFec9E6awfL2",
  "key37": "43zKamEao71vEe6bYxi1raoQeYkpUmp6jdqqdg3v6Q49H9UTbNC5PyRDjWdQ3sP6E6t7SYRevedKUYfjwmGSUa9g",
  "key38": "2nagfGdnsVjeGjHa7Z15xBhrvSWVXLNFNEYkLrfBK7pdamzrW4rfmVQ1rFnxWiopSx2gxdVNk8QAL9XJeNCKfPTZ"
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
