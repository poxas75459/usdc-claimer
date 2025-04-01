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
    "3jXTj3VLnNjsxUz2zHQPo5UxfCmmC33zCoAWAR6jnm8iub3pY487NHazYXArZVmMyFBsvvN7bRXvvFEd8AgcxL6d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jqRu7EvZqS6RY52196MzCotHDL8NnFMKmXiRbtiKBykkvRvcsaPFQtPd7L2io5p2X5BptqyMY2D7pXzXFHm5TMJ",
  "key1": "3xq75ebAZbHeritUiSMcU7cFqK8bVME6KKB8hLwdGtWQKwkDNLBDAtpgY13okV3mFhtmMbaBEEVXCAYccV58ZTVD",
  "key2": "4BLwVKPn58GjR8XaNZ4NZ6nGJVcQdLw8SSLUcbtx4vkFftePaZkkVSAZWxfoQQdWvomcErcrAEpi2Baq93kLpjrX",
  "key3": "Re539CqffjpzuzGdkc7tFXFCYhCTsjxTdeLa4C2qEDCFZMtnK6kBQBTytwawFWJHwZTGFNWHSzjirpYPed32vDz",
  "key4": "9VmFeEjQcivgjDrExeHTKAV5RQxUoCRFJuUvAdx8W3rwD73fzmskq5Ej6E2xN3YLUGd3VCKXVFZBvSECc76GtjD",
  "key5": "4dKmeBJvuysPLwVowSofsTnoBgLeJDX1bhsuWdyjG6rt69b8J8YwwJWcGmAfm7jQLNGxD9yQ8CAkHvmFN67yP6Ko",
  "key6": "3Hyx8uH3tkXJv2PGDTaNe2zN9zAGiMDfySre68RspMsjyXvTRtcY3AwQgnCczeaTQeX3H2Rs249kc8kd1UVAgn1E",
  "key7": "ABK5uQjH3hhx2Sp8vi3AEYzqLHZ5s1vHfqUpANqvUGGkKsWsUh1n3jLaSRJd2qtHASBN9Ne5yzNDoqKq6f4DACH",
  "key8": "4vJCWpGvADiMZCnpgS1mgvAMsKj23F99hRm3vdKsZw9cRu7hBGzrboxRWooznARAQHfyZkYe7RpF37hE43t9EdfS",
  "key9": "3Xf6trXDSJ8tJWuq2VLqGzWbomYSGDsu3hF7KuhBfqr8W3utBAgqnv9vpGy2UsyngXbQFcBtbzLJAgUNBhhWjBtC",
  "key10": "4egpk3xj8B5aL2f4GEQvegBbG31PTutqeo4QgepPyxnu2T6sqSPe8aSWRpyHDhdmjoaX7QJ7XDczfABaxVpsyZFA",
  "key11": "bVxgTsaKa9C4Eo9CYSTcdS8i4fQauTXuLFNe5dy1pZMJptb1XpZV2Vc2QLNXPB1ofmHiY6sbjrvEtZ74fxcPFdv",
  "key12": "32Vqq6ELV5qXSLw9JQb2Z9nu2bqr4AqrQqBSc89nrEyY49JMGPqGz8HSqFkVZDqohuHM5DjUAmEg9uqBsdmtsvGp",
  "key13": "MD1W1HMdhBLkLBGbzUNRdgquT9c1RGtVL2tmEzfkTUgxNzo9gBxrKvfP5jRmdhMs1iuP6mXY51Dwds7Eve2umsq",
  "key14": "5SU54m9Rwo9aQTCwyiYrXiVJzwjzrd4CP5Gx8sGU8eR2rvpMkeYeByxG6uGKRCMKp8fvSJ1zQzyHZUX7ZXCMjfuy",
  "key15": "5RVfAboSAzRDsTxU7xmmuW2ZXXiE5hQguGhsnY3LttZ13G4zvwkMj6F1vfuV19CzhquSBHpcUqXLfVKiad89eVAS",
  "key16": "61PUTWgDb7xceeDQE8yjxh96eD8RLRf1ZcFNMo5oMxuAqReXWE7FoX38bQNtKKXbqMTuwwJFjqhmh9bKjSk7kyu5",
  "key17": "4UBDZcsVZwXnLWNrp7RWaj9ZZDURKP5GdgjfttgY2gPBSbsJvLMZpVxfKSvxQS7DNNCrBjEG5A5kE8NzV8dNnMYt",
  "key18": "w9wZfkUkw9MtQKAFzSQ5sB86PPmdpzwXGTh3HxzQJPQFkfW99PqztfPUoahvEJQ4GBPo7gn1iNjhMsWnNxBSxBD",
  "key19": "621PXtLWbW5GwuwxkM1zns8sMsHEpgRBMhTt87b273mtuh7k1LHPYbJL8RWZ6G8Gk9oAhwASCaxQEoJDWB1dMwBw",
  "key20": "5GmuxEYaLg21UWiBvHjriQ3EmBJX6HLJzULJChepK9UGgXvmQdtDWht5CrZxhyuGnsGxbjAwasjcA5eyNMdmmpXk",
  "key21": "3J2Bg8JtXPjvhzUFyiV7c7HbmB68NtVP2kjaQ7hbbe8PZbAKa6rjL3kG1HmfdMnXCvZTaiXniNdx9xwYEJNURcx6",
  "key22": "CSYQnjoiWQHXdoCwWpz3SVDqw95rfA7cxJQ1pJeCx3kNwCGvw1hZ27eF3eMLH6mGd1TEwBnE6c59cEB5fcaDyMR",
  "key23": "5KzaBrEDBuTPAcPRJ8AJomjyMKKdPt8KdA3ZgBrmiRih9jj8JjPJEQiaLkMbyEmZioCk3Q7VA6cEXiSdaGcZGPEb",
  "key24": "4qmpAnzjWAVTdWGCzMVqQYTCjvSydHPiPuzG3ixCew114WV4rHP8At1XkistTs5C9BBtLL66qHTKm6bjZdokM31g",
  "key25": "4xwP7AVGkdabFKArsbkz3qWyK2qxbMonHU5jKjGo9G9DYBCNQ5xQj58txKM5o3DpgWS3MjE7t9kbLDfpLwDVGWET",
  "key26": "64UGPZR7mtdxGtv7eyYKNuDYUEBr1XLhAdo2sKNSUYbZxZnxAmZFxEEdT8BE6nUYiZqhTHw48rCVKLzdGFxBQ4Qh",
  "key27": "2xeHYQ7BzaxgHbVftKVjX1NPhRSix7H7U47H4K541CvgJpWHUjeyRdNtkp8CKi6LSwzqTh9E5aRhHbCJuTuM6wLZ",
  "key28": "3552ar4WnxLhp69QiTsjXu2k7LWDmDbDYEaSx7SqXJMfbrBcqp7P9PWK3qYTw3CivRg3wzkrzFpZR2mLWSqs4Rri",
  "key29": "yyGeJ3DQAiW6tChXbq9q8GUNLascg5Xaf1aEzM4n7dFqkpFURJ1xVjqVLJUp2DPEHPprvHeRuxsSsSKumd6uG9h",
  "key30": "2XpaSjp1LJsmHVgBpZP8crSNVNqa7v5EpanbsibKkFSozEXASYs3jhML45x7VsGsV97Qzftj3ra8nyAFMsMowyDq",
  "key31": "4trGccQcVDYeiZeMGLj6CFvqYQAii9rQLej3fAvDiQz7be9MP49hfinr9DJ4ioEtsAnPJK42AcJmERZgLbpHZAHM",
  "key32": "J3QB3i4A12tXo4nAhtBv5hSB8ktaq7MtWj4hKMxGrqwPpdKQfBsnquvc8VgQkmFUmDEdn8n459u8AkQueHjKjbJ",
  "key33": "3c4VpmwSbgPYdw6k9RK5rBxbw7MXPUQdKKyr6UNvHnh34yQ9pu5WU7K1CXnhWyMfow98QKu2NTmZhHqunSNU62Ag",
  "key34": "2hdAQer4vsbMHMdCoMnRfMD5d3UXXtaTUnfkammgbDuCv3UnT8hhJv9buX6iTTMohxMG214gXNcjAX3HBG6b7ert",
  "key35": "2e1XyFGzDYdGnLhyir5DUUYfhpHzR2ywbmR6Xr9G91uGSupN6o4Z5at8LyA41g3wH1huddUXbSL9QX86p5tkS3aR",
  "key36": "4V5qiJSVFtne2TPdA5WTFFnT1THwTmAjpmmucUyYV4csmC4CTEBuWTmeiDtNoRByAxTx3Tm7szfGj2qXKqNWjjTW",
  "key37": "35Ts3QgTZwfExEG6ScvHP5kzbpnpTySBKspjj9Ge1D9KuU4Xt3mCsiWjg7iXmkoHBEF7YAhMK2FnBB8UK3PeSv4L",
  "key38": "2sqTgfXKsZ75WJesqsor6d4p3akJABgySLge7Lia1VvaPF3ZXtqeSBwUZuXeKMbnQcLC7MdvCFBK7THzvS6WM4Gz",
  "key39": "29m72apWFbfZ5j8TvUdRtNEq3JQVMAPvdyfTSnPz2JAANEm8fb6k15MBshzLbBJTcjHNY62pMt7WahuAp96LHBM6",
  "key40": "2JqjPqRmqmN95hdNWxjhSVWcH2b4BGoKVtwQ9dFPstYuPuTLfcPXL7bFkstxgYpF92iZ9BkTf1Gs5gZ4WJvaTYrH",
  "key41": "3Zdwpwj2eD3r54R9pdsyjS1zbSCNSydDK9X9VmDD6ffunzCKEszBGv3888FW9VSRa7MP6av3BieCwZ5ZjD4ETa66",
  "key42": "48HPTihBgwuQxBd67sLPnurotLThyy8Mbq9me5B7j7pdQ8GFngd9TDRVgnekdpgmiW7BnuaQ9Yi7LwToSdWA716x",
  "key43": "VryuzMvAn5CbVuYBHnma2toVPxQMsDTJFX26uQxpWRd2JTXybRjfnqsNLXyqpcPmdXJprLWAmz5PG1EZ7i7S1W7",
  "key44": "21vDjFP4WY52JoFadz41hN6MiAqJZJ375SGcgH8GQUUA1TD3R3b5citDugpSMyc7nGiepKiANRPAV8qQuDkAhzmr",
  "key45": "3UsdjMpjb43RpnPFfEP481UaXuD1F7RDNFmJ73VopWMfXJnqSiDyDpWQupHN73N6BjJDNsV7A866uaPhgL328i3B",
  "key46": "TWgfHqMD6vCUEhwhHqQtvH58D8qReWmuepdZLqAVS6DJ5xuSu79h1EHypVzVEN6Rksen1mBW9jt1x1zq95K3Q4j"
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
