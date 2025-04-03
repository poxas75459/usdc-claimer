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
    "5ePzsntGUkeAX1bY5y3QC7vyudMKKuKEPiec4bMB23swQopFzosx7hKdEbwCBvvKkcsZdYGbMBBd6s4H2Hij2emx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5izvBdLi3mzHy2ZKT55sdzGwNVHLTq4RbXZvFjYa8AxByHAxzpd7hEAbdNxZJqXJzYP828kEiKrsF8bvoJX8ZaAx",
  "key1": "UfsjLdLFVLkBaUSiPzHxyR74q5ExEiTUWYWy1GiwwHbZyrN6NiNx1q6sUUH59fsaC9YvveDSPnD1wqeBT1Cv5pS",
  "key2": "3M8aVEmRqAj2Bm5uDnZkPTmtq46aoxvpYE4Vid64EtDvRNxSoteiVepoZBKCUWcATWRRjgxA2PaCkB3uPV1iHhkW",
  "key3": "43grkYzWXwRTYxh6GSWPAxAKbJZtnVVQmF3WdRiTe3R6YSaNYsuyWu68Ny2BWrMCG5w6M3RzMfPd1KBbGk3SuhxU",
  "key4": "32qFikdihPq7yC9Zb8nW6Wq3bUP71TVDLkuWVqNs8Ee6H2KTgcfYV3bUqJgUCRk59KPLqCV78BCKXQy2EvobAw1X",
  "key5": "33yVytPaRxabufUdLgysdnZ4SSTpae9w67Gsr68wPL1VYG1ex7TLn4gxe3xc4KWtfoZmkx5zY4gRor7Aw1646NMH",
  "key6": "BN9GnEhKZKZ6GnGqsB5MVPuYStEYim59MbwyUEnWpUHfKbwTRowjpBtszW5j4zTAV2LfMXotqUmjAGv395hzwdN",
  "key7": "4FtonEgGVYhD6wo3qicedcvYtwSdE9QufHc7V1vNhsGUK4cYkVA6WM6z1MhhoixYPAf6ukyjffCQjsVMgCrnyMrd",
  "key8": "PisxCqpmaicwuTn9UuEoJLQn6G1a7UuqQgS77yBtyefiM4puSWQK2J6PNuVx8i2EsuAEYjGCbfyGkyXsKbQyxnk",
  "key9": "3gCmrhcciK1b5jsBY6s6qfUjWUD8K25oaAmbiobW9DTwdHRdapEbQjm5fRjJfSXJzSUCXj3wPXNmd6MJkMedp8th",
  "key10": "5UrA7jgKc5RyQH9YzzCqBeTNPPnsnjRM6qCgYFCKh1Sx1Vnh7oXTaFhyAnqbCvki8oUfLHPtYY96cXKry5NGSEpK",
  "key11": "CChZG1f3tj6AbNduUpFB7cnXp7XPUP4Dcij2C1qmN6aeZUBRqkmvdCLHtkdt6d86yMuCMTqz7YWnUms1JBE11qZ",
  "key12": "38drBuL2PY5zPEkzGRmQnNTcycqLQxH2wdiP3kw9TrhENRBMnrmupwzhDtpaGob17ZpLsYGsQHrfGCkeQFrmGg3r",
  "key13": "2GLmQYeJgpz7v64HvkHyDeWrW1b7gHeEfKZaEVPqCZa4vBcBC5xbp6Jjm7XyhqM9DhThqym3mtTvkBK6hVby8vgz",
  "key14": "F9GvAvmqhsP2vk8FKDCNyNzt4XQtvVvQiTZMncaeM2ds9d3mvXknUqCmfGiej5R9jieymnUfDCSu4UnCfVzmVcK",
  "key15": "ANXjDruEowXpYK3s4rKwci1FYUj29pVx3Mp48Q843Aodv65mTUYVjWe1gsZdPniQ78iQ1cedZMFZdk46okzXxHP",
  "key16": "3C6xFmyyLojxcCsNehs12ZwodHedicVzHQ4RbGup3wrM5rzmUV3aVh12fEvG8YDq9xj6EpqiVwRWFBr8o5Uzafnv",
  "key17": "2Xric7DtRwLQRZmp7XhhAp1amQqwyhuUgW7dW29nFFg9AVQQBHjifNPQNnrFTYjKJu1uV91MhFJt72QcrH68ep8U",
  "key18": "2MVWjMecfHg8vJ4RdApfYp4M81NQW7nV8CGn9atTmMJX7KiwjPbgsdEYVCc6z3xhVntLuDtXEcqejiT4Jad7seaW",
  "key19": "3K7NvM7SYFsxxawYCfwJde9mtXUiZaPoyWuLHp5qY1FHJ3pYFU7juzZthY9wEAtKxc5PyqnCNtQHaDcfcUr4xDeG",
  "key20": "3BacKryck3MYBscYiNk6fATypzMV2brdAVQg84Ycezo35DLsK42vaxCKsmM6Z99j2pVe8wdh3wn5naSuqnUUCzSe",
  "key21": "3dt4HTtg5RR97V18iAa1tEe7LphQjP9kiqb8hddD3ch6cHgFTqHfRdsJZX65NmP3i97fgxSP9vDbPbGzJmfihyFA",
  "key22": "4LY9jRo6eJB5mmALpq55Fax6oGXZXxGdDMRGZYJDaCzoyeB58kTsjpdceYx8wQH4CEn44wvor7uFTQ97xaXasHzb",
  "key23": "CLuKAej81KLcqRkNvz637oqLYzLNiaKJ9mxzLs1un7gPrMLvYzt2xFVKPvQfU8WwjBJeRGKmV2kar4qScfCTXxi",
  "key24": "4EJQhwHVBoXTRFaVKaWydJzwKUWx4pEcoashU9mQuwCaYuf31xwD6Lumznx2EbMVnfCuUdPrJiqa8cZpGiJ6daHV",
  "key25": "2pfEeJk9bj6JTBNGgCZWMThzQSN8GvtvLCtLT7ADdgyDbecgdwYUJqcjRgDaepvVgezzxdzQsM7DNfsUW3iX7REW",
  "key26": "3sUG1sk6SWd8FCS3T52x6LocVvaAfErZmxrTj65FrgoNUf9ZL1ppeSKK6frn3FNsq4hejc6XiEyfiRdFdF6NUdCY",
  "key27": "uBSS7DvRFF5es2KQMVfsqHtESiAWGijLy6X5bULX7yH1iYkC9VJJPQCP6MyrjZP1f3Eh68VbWppzXheWe4voT28",
  "key28": "3r143Ngk3ykE8zvizfpP4NZr5251yCnsF5D7Tgv2mM6obGcVCz2arw5cTaZcTZXraiJQ7S59weiNZ3ie65tg8r8o",
  "key29": "ijt96cJmyJ2WQ5erfeUSGk5xx94nW5UcaT92q8jdCqiv2xS214T5etrcXHoo8x2oG8mpqwcP5cQC6E1BotMxKQh",
  "key30": "3FaAzgnrmTppX96qFKFZHgC2kzceuRP25aykh13R5GYmXQ55rbAJEcdbnBsKan5AKAJCtR2B3vho9qXxTZXiW7rW",
  "key31": "CZsgJmoo3NcA1EbpAUihFJPmET9Stf4x4cnsXXGRhY8kRVSaNDBXt3hP9xSCTivgenKLsRuBd62M2BoEc5Br1gM",
  "key32": "2nj7AujRDVQLHfhA12LXTry1xi8J6rPo6gvCDR68fkc99NjNCTKnBGx4hYdpEkWKe122mDQMhPcDSbSeHpRSHzTH",
  "key33": "4cJ664cjGpcjHL1hMh3mRjaPRdhjMFJ7zaEA3o6NKWiuyWMpNjdYsXP9K8zhQMCu69qASxPhC8aUbPhBmA1oVUp3",
  "key34": "2fCyiJXoeiSTK6EuBNiyitX8jzH9Te7syZfi85xex9n5Lhs1BLcKNFBwEMK9rUkZPAoYEpdNvFehCeMe7J78G9Ew",
  "key35": "5zKZwRBwXePD6tYzSupPVUCsneEtcY9YPfoG6DuhqGyECA5N6GupUHTLHNDixKKcDsYUPnhNd2jEpJjiWR41KUtt",
  "key36": "3r1ktK2GHzKonH2MYcTs5CFPsBCjUdKc5YGVQ3QFJZjEeRvr3pctp43rbqeTafVYLY5ooiK1n8pro3BdkmaeAjPu",
  "key37": "WAmjziZgXSb7ZRqvDc9Zqp6DSq8QdUJ77WxRfZy846uV96WwqS3DXFmXoKr45i77vqNRSzbPbGtaivmNHPCWURS",
  "key38": "62GBy11vhpovTdTegJR4kqCuVScN8TZfzRhWSTqg1b1mEqqHNSCaPKhUKmPVKcEY6h85i6orF89K9HWPHW8bcfH6",
  "key39": "4K4ziwkVvPgxvSaexcdjYxX7VYfSenWFbdV6SXLWS4aDZGUM3ckfcTLCzK5UhjUhR6Wb4bCVdmR2jGN9EFDUNKof",
  "key40": "3hccJhewwxZHsKrDxPUXy2yVADxXDRXZ4Kw82Lk5CLwurVTLcjcpKWeF28UuuyuWH536sr1PBSD8zRubA1PBDn9q",
  "key41": "5tSTXvhweejQ3Ab5CzZRBsKM6pPaVCH2WMYGNg4J2hi3eiTNYjkiPsTzv5iHNytkebxZdZoXbfVsx3oiFRbNF5Eb",
  "key42": "4V5fyu2Mfp43oZK4mH1uPHVjLT9Kh3aJ8KSWZWz17rjDytU4vBvqY2T4sgM4DkYf1RPUV76T6JxQA1YcFWqJs9Qa",
  "key43": "3gz56GxouFkZWeY6HdtukowQPmGGkfQCQyGJeVd6cGJ4C2YjoszpVzWbjMnVG5GpUkNouC6dV7itrvgA3BeRhKxr",
  "key44": "2zZ1a4XQCQHotuHFrRuxFaJjc9BeP7rDR6NvUYFu6XhrqBLMm6aMFJZmuXJsP2vsrS9ZodpCbhgC7gHyDFEPtFSU",
  "key45": "4NkW2gn7je2oohQFiNBRUg3o1gMQS79dTddcA2rPBTYXVUS3NymDVhyrbfQq9CSWxZ2xsJK38qbnkr67sMutJewt",
  "key46": "4baPEhPq8TpR3R9DeuoCyFkkZsanHExfZKQFLng8x16FZeW6EHAKtn2fHm4yNNbW24vxXZhBK2u9mprmi9W2FFfx",
  "key47": "3RGDmUuT5uh9pdKVV64tUuSzy8ocUkFunjABwHdj8GKQwDVH9dGvTFfN48Yg8MMimZGYeAx2Ykt7L99ZCMfRJT5S",
  "key48": "Xi4X9YyMfrQgWdXMWa7ZSAJ3z6iWkvYpqMm3sSQn6e7QM2vFxMztptJwjhEFqYgjfWMQWMDVFoQDQ3LdbSgN28b",
  "key49": "5Z8wK63SARcmcCX8LM58eps2KpJAGJ5nrUrayDxhy56eZcVSmqGAQU5b1dBLvoCmyVmNto8yHbjsaiNf6dasaeL7"
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
