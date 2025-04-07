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
    "5UkcF1bDfh5UvNNB3bXs3PKnAzPMc9naX1ooLfXoW4WSR4AfyPG9vMc4rdi3ni8VBpPB3yHSF8kWqpPgfhJ9w9qi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pkii465rRbGU6EQh3ZkmqqKAFqDqSYAotD8WtvK9mmbrvob5gHEvSLx1dkNkbqmV4V2J5XuLGRcbezqAkmtjiG3",
  "key1": "4gfuz5ex25zffZSh2XFxRXi8zFRZgRhf4EcvWMgnRcPucmQ2EBnyZWwYtPXuuRhrbX8fSRvSQzg2tkXmK9LELxfK",
  "key2": "4henE5UBpQR9NDVtGJPbGxzFeFDEkwXS9AJ7m8DweWzMQ8aGBWFD7FgHanaTQyR9faDakkXNaGv7WU4Ahv1sb9T1",
  "key3": "iHeXCptWykxTQXC6sRMQpcksWCosFUA5qvJb18GBvPMCJTUQHAiCaX4vhMdwTHmBWPkhuo39hThybHhF2jx6wWb",
  "key4": "2tRhVj9NeccuWwtLFw39xy2MgYZ18Vw5sPg988Q4UqLwhSgbJnRLdskHdYrmiwk6GaVkz8asT8sL3MbbHzM7Yba4",
  "key5": "4ckDWpk6J15dpAk5W26gVxANaJTihZDyrmKvNTeuejKe9dcbhXRai2KEKLoTpsBSXiqFRx3rTYBcyVSXoCST58ao",
  "key6": "55UHjFyu1rpC1dy4awQYqFCZbnBezviemroreqARe98Aj6z2tKunjGQrbzWyr5LN6C5ZG2xHYz43Y2HyEAU41dRT",
  "key7": "3acsQ7ZRSnRnrqyW5kfhQiLiupjtqqFvWuf5evTJPPeQLU1PcPQXTmEZEq83CmYSEY3nAmvoiZ7GjB85zPaj7akU",
  "key8": "3ZKPRuYyCNjkVNRinvSvnTMgLJhUw6UkEmVzwS1CCLRkRKG4P7KehCbNdmQ1c54QDeioBKnT6Xaq6wte7NwnNsBr",
  "key9": "4VrEPaSaCMFZr3xapZcqCCh4VhaS9Y5NUSwaY8vmHzBMBoGCm66sLvPJzYzZ1qPuUpnRhpEr1TtD5fJY2dSU6KjE",
  "key10": "5cJPPtgkFdJiWpenrvwYWWFDoKL4qpqKpARJbEndUhwYBEWMm1ooVwQA4dGMzPmNdXq4Zh5ieSkEJ4nJDMvjxwKx",
  "key11": "3juvXi8gYaQhNKFKW6E5zgwTKenJjPrH7rrgbDB5kJGF8aLFxKY1WRQzwiXX1UNnADg9tZzK6bLt2T4UKVz6vg8c",
  "key12": "5fwpAM5i6CUycDrn7vqu2iBvaUytNJ7PG1rfB81StiuBVT1t4LEnEuXcYuz98LreS8JXXyDj1WaJxhpUqR8tu86D",
  "key13": "4Vzubbp4NEpHokqhJMmM4UzUEJN9aw72JTogydxtqGcbR2aGRHtydNxEqxsf6pyK3W7qUvn4gYHjsaos2Bh6KLgj",
  "key14": "5fXiJrKwc94kAdiomDJR2gW4CwJU7BQdmcEchpbngTkrR1BvsfdH5U2pquXHJoRJ8iy5ehWZk1BKGgo6umKCddtM",
  "key15": "4W6kU4N278xEZiAwQstXbZy9EUHDg7TrpC7n2TPidWtRixdDiy1HYJkLtrJrtZwhLxuFdH9sdLyJJjcp9pREv9vt",
  "key16": "LJXZzS572TZSYE1n9njZhBxpDFxCg4s662YWtYaHvSziT2tJTYdu7D6BcggAK5Yo9HY74ic9NzM8Yn5S6rZHTxu",
  "key17": "44f3fN9c6ZF23dX16dmqCncri4WVniQRkqCd2d3EkwxpD1fdWZoLZbrguRCBwUNvgytzsYpH9ZUcQT9bhGHW8M3j",
  "key18": "4ym23pUKKYtdsMtwJqJTvoUZLGYKxdxm3ZYG2THVRPePZe8Xd9cwdQR8UXEC87JCinSurpRDQtj58JTm5jrtHspT",
  "key19": "4so8Bs4qEXNE4SFBmE51Q6MXREW8igdnmKz4iUy5qg4Dm5aY7NgkJQvfBkJv81biWihv8Rv6tTVtVhMbt8r6xRnh",
  "key20": "4iLcukGoN3ecXiuKrYs6JsnqxLMwqYRjSoqaW1J2a4nKaQdHEnLJz4KMNgfPZuUCCSsoZxDmGhTuLrRo61iX2BN5",
  "key21": "5m5rwvNCCeTLPypLtXHSVzAGiCde4Kr54Tk9KqjUzk7UBpegbgrKuRtvWw18Gti4wqdjjSMMceyvqRgeYpMMboge",
  "key22": "5D3bsYv2BoqCmYKRJ8xDtmNhm8AiK6XNiSKAxSJfTZHVunPRGVL8YFQggp5J2bCqnuXvXw9h2XtAdBvrWUkL87Mh",
  "key23": "5GSjbdG68wFeHgwENYMcKbz79vggCoEzQzd95AhuQSFVqUVRMgXMZrnJM3WLT6Ttsnc6oD4HCHaArP97iejMXTf7",
  "key24": "61zPKkfrwBEdrwC1gHEyZofHMVvQmrPfpUjUpsLWMuKjTgg28iseTBnitXikfD8fA4TWz8zDwD1Yk2VZkyHY42KK",
  "key25": "4MTAdzAioy7drxRmnZ4tbB3QM5bqvEVzZ3RF7qwmo1fwzNoWqgwEedxqVhKgwJXt3MqPGJc3DYpGqCJ7nKkVkaQf",
  "key26": "3DuEwnYzQGouLbr9kW56G9K8vpxSZfSarjsYv71hyt3h7cBiErKh6eDuxF1aXgttCfrETdY185Qk7AxZZR5Hw7zT",
  "key27": "2sAmtavN5wFJPP7vDAzyCqytDgj19w6voDEMjdwYw5M2SYA17ki1Ng2Lp4iJ6zcY24fCP2c5F5n75rw9F329c9Np",
  "key28": "4tp5xRiN1pYcqRN9XwxhbU9Bz2Ds7GndtZ3GbjWrBmzzSao1RQu9PTWerxTecWb4Z5ngdGhq7FwyYCqoZfLEDf8F",
  "key29": "38NBX8HpM9Yf9tTY6nnEUW5e2kh4sMSAS9HPJ9enc6ZxAjMmLHVXAhryHhwPGjmj9omWaqZTQPzv9Sdun7BzTPDH",
  "key30": "M2MpteWwbtD9U96y8MHY5cNBA1DKDAjcU1imeMie59xtzwDjgBveox7n6Mt9mpkf6EtGhu6WK1kvJYRNn2RgCrf",
  "key31": "3rbUhtHFN1kRwUCAjXUnLWCYpP4uoJMe1QpL3YeJW1MiHbxNqJ7WoKgVUN6AywXJDoygCx3ij2mFBkjrJ6CDXNWA",
  "key32": "5RkAbQn61Hsrw5HiWJTgHQd8vr2tNK5LxMyLJ6m3BqPWo3TioH1zY4cqBrBQYvHVGA6HYyzvb9AiMtZ9dRrDYcFh",
  "key33": "C12q3FJzsiXHuVBDFQUW6rRYcsZ37zvs7YJZq69Bp6s6MdcwYT2RYUWa92HW4pLWCQdVcbUHyVrcv2wbLeTj9Qo",
  "key34": "4YxuGJaRRN5nocZcWsKQvn8TbGGf5XvGLFWsAo6WF3gXmftBd8q2pHExyx81zpbxdSofx4K7PQ44SZ3ddebjeZPR",
  "key35": "yNZmW8Acus6Gdkf9fG6pGR2gGGb8FDANZGujNr8U9YEsEXUi8Paquw21YH6p12CYg5bowhSXuhjM7YeEjNyPaM7",
  "key36": "382XMWKY9tUnRoeEdRtPT8Mtd7HADuLdP1uQfXVeqZxWvsm3yQtYrCgKBvkLf6ogJTWV94vjhvZTqMUoQFzEekC1",
  "key37": "4zADRRXbAak6e4x8z9xJ5n1ZSRYnPET3749ofVUmnZMyZvpumWJXVFSEqM2bkpcSYusDTombMVi8VR9iMy23Rs8t",
  "key38": "413NH9CMt8cNUu18kwfbVtUehr2gsTsXjQVKFoCkZRKzQU8prh9BEvPkyPpkee8zKWfKXu25QHVooSZJ3bVXc1bf"
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
