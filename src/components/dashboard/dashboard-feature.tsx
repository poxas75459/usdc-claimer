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
    "uce8G5LCPD9FR7nbCWsYGfbLMWJSKZ6LV2ZkgUgiw6stGU4Sx4bXnwti2G9sR5y7yhk9aatgPyYwFLVXFhpviHi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AxdPYwCwQ54Chdc6h4LWgTJtFzpvPo6fUjiK3eK6w7UzhkXqBb6km8KWz3yP7wxr4jYGu9Pxt73FcisAx3Ya1UB",
  "key1": "5QByMBdvyEp3kSLJDGmLLGgqHZQsr2UPTsPdtwCUPQi8jNt2BRLz6CESFdvKqk1NHAsTSBAigzSZ86Y2SEUCRUR1",
  "key2": "yza4dKrTDcNqgPz3BmoqxLHoYzbfycasNpNR8RW5b483J8PTpvU9HHxkbV3Gf9FmLD9fnqyVjhkVxzfqDyWTgyt",
  "key3": "jqr9r2wFvi5uTBDJ9hftLWEVvTVTW5eyLW21VTZW2ENvb6QyuJ7TMAN3ojjWWNirJ4YH5N7gRpki3LkfL4jet4x",
  "key4": "5kCb67JRrhUEWrcz9GkYyE99qt4Xi3PSnri2ZtHsi8FPkpwTXqNJ6vCZ1ThRPVg8Aga2XivpjZnEXKtt9rPhEKW4",
  "key5": "2BACi5ZdhU7hXL38VdchaR8iQB56ojHrkNau41bUSJobqhXGdsWsXa5wzTMXghzUnDz2vvF1Mi1CKqAKNqasHbpB",
  "key6": "3cH4BxNfXgfo41ag43gZviDJGaRNwWyC2Hv83tyc2vuMnfjyyudHHoM3fZ1Lzp6HmL7TS7L1MypgKSAd3vnzpS1a",
  "key7": "2GoU1jNYbT6Aj2FXh467dErHNjA6EX942zzLNRYBwvuQwtmFxpFPfNHYWSd7h6AgmgeKNEXHZdTqoweb6iDiEJgn",
  "key8": "ECzgEk7prA41b2zyTeBKJqALWjaugmbDG4D2kzneCsucktgnLBFx4UMgUd1HwU6o7wKndeHM6KKRCgvoNFzh5hy",
  "key9": "HfCoxgbS9j1bcgu3YxE7p8VJkK9sCTaf89YKdjniFPbNokj8yj3QCEAX6zFCL4HstDfxZFe6UNzCSZyoN8h8wvc",
  "key10": "3rQjABCBVpYuHjZhBhGEzQsmZCb1qpQvz8sjn7zwo46GURs4sB17BHMmhiU2o6q5GSnceXSzwRA1W4wNJXxfXCpr",
  "key11": "3SHhEPyBTkrPceLP6e5MzeYZSCt2GtgVjdUsWs5RxUc5NPY8LKM9wwSGLarpLfp4xh2o2oxzNh7qDCZzRHvNm1Xg",
  "key12": "24etfj1orqnqqj2r9Le8pgETanPZwHNTg6asHSh8Sqhgv9vr5PqReKwvmRT5WgMuj1ZtcCCLxZkZeUgo8oSyKkSk",
  "key13": "5CfQtk5CvWgwrJP725zCLgdABQxfdjHz4DYp9HgRPg8PUsyTTG3dJJ9xQXv4QVCx3AuwWHrzFxMQhqPuUg9YVdTq",
  "key14": "5tSHAvyqsHJVbPiNdedPeA1VeTzgqrtZp1qLwB7ZqEGLYmb1csxtrLUCv5MgS1Ku8FdKQd6UR2qzigtynrPEgZ8M",
  "key15": "3EPAivESzDsqce7mzCF3fVHeCHZguKBfsHUYpBM6xvP2XR4mr52RseJx3HMTf114Dj7dXgtFY1HsbaMHUK8jpvhJ",
  "key16": "65MQ38PEgG4MabCt3NjHeKzmgJFS6jHZBGrU129zER7mSYPgQxpbJhWcV9ny6Vb3uuUVWw1pgPz6Vdbh6Vtpf4qR",
  "key17": "4B8TPM9qseZFnZzMnKob7oWcnV7Jfr6PBSaVxyBD7Ga3qoj3V6fkjthhFG1yisKptDefJ9ZcA98xGLJGHXhr5hJb",
  "key18": "2QkKnDq8vfyFk2ZaqFtQXfg37XPaWpjVzCQyKYfmaXCLb5wbpovHvhFCiTmSwgRxqPeCcWhyCELoKmbyN4gvBHdc",
  "key19": "2bmvyKGfCp8XJKV79NCq479uNLkXPs8ETPKZkrNMbLwFxh8SP6eao3Zui6vUJx28jgGvEnaWC9o1fQWWmzP5FWet",
  "key20": "5s2VWer3UBRjoidXXE4vJNSbdPMn9fQwCd79MmKP8newDxiqXd8bi7PQHKMVkQ8EdR839LT2Y9wF2w8vUVMvL1T1",
  "key21": "NEgSCBVwTU3g4UeV4CWgU9zDzpQQqvUki5WJfCCjxushGQ4JhFfWGG2P7VBzAARLttkYsCHfzKfaP3UCMy3YNXd",
  "key22": "5Go6FqLhpcUfCMhjr9eamnReMWT91JszZfn8XB2VboZ5n5ekTt4g63vZwuXwGN4Dz9uqahX54T4hkC1inF4YsqJe",
  "key23": "63F9MyH1u871kgJYiKoWjajKsnCocLjVVPjghyjWhmpfSVxaDw3Q8mLdMrFVj5W18WQSunaBYprhhudhxZcvSarx",
  "key24": "4X8fDN6z5stzhPsuxKWdQ8H2c7cE3rcNujXNWxKnjbNMvmPKchPYM9yT8U34ELwNEY4ZySrzD17NuaTkT5173v8o",
  "key25": "45MF3VEnknbZkJA1ZEf2fJAnXwGfbdoRUjdk2iSbiqZ53A2DXt63RqMPw3HQK8bVu8JtyJwre353MK4G7rNvFGhj",
  "key26": "3734xaAgHghf1rQxGUCo2RzKWepHSFmfCzjrezoJWUNsfCEreDhYjNRU37g4rWyAfTVaVB93Rdh69uBPupUeMzk1",
  "key27": "3baVFT25J7rBPfrhYamquX3xrmqM3X1w7NVUDYYqzZ9YuLHEFAkDWKqfrPZWbrxBiGgWSBbfP8yp8fQ6WLXAZj8c",
  "key28": "noduTo1hCy5Wm96fLqDtMwp8jFFX22Js3LgS9JSxK4YaPcwhahSTQ5C6ivYsYWe3k5B4dZPN1fcSsRvpRhnfDyx",
  "key29": "2zHFhKQUhby5sP6s9t3SYqsfGLTXiNH1zwGh7eMe2ZiLkts2wRDyxLTJbGrBexhSinEcVnvhoGzwMSAZYwCpWVWK",
  "key30": "kZMmbx7GrkP1bSePrtKgjNThKeybHZaWJbZGKxXBnyqvqmQggwkHwxv1DUYWXCG1D5DD44oqsemuYH3LgBvrTK3",
  "key31": "46or4Y9J8RCagcdsFbnrEvrENpZWkhVF3A8yGsRfqE7v2yBmXFvVqPHLHJhH6BH6XKDmtbjtE8M2V1wLsb1uCqmf",
  "key32": "cnTX5hFaa5gkY9mwFgHdmJ9TH1Uw44eEGxfqpVp8bHbYbEQxoFbd1whVpN1YdNEZEgXD4yuVrZT3NxxDbxJXo1y",
  "key33": "JF3qp8vPs6PgvvYpVuAD8xugfbkzHtMui5bxDoTb11Aer7p1wMDeXasWvWCP83o5NDEBupW89NGjHHD5Qj23ZW7",
  "key34": "4mhWJrmXdnGtWFhXtG5RG92cVeQfxxVCzc2Qbz2UgXGEBHcfQMY5xGrwRfqockUeC1fCZxuX5J5PdqQftFuiAqeW",
  "key35": "Vgeb4JZjog7ybkSWWRuveNpDeyHLSPBvLPhD8DzD38qnnW5y8nBiJ8GRKQDS35UZufdndwZhAb977ePAYQ5ejbR",
  "key36": "57GPiRSLoEtUv9L5TPiaiZaabvYBb7AhXqiZc4fAvqfxvrT25YToafeazQ3u1szyGxdjsc9uVwztaHLsYP5fpLx9",
  "key37": "3cgi5VHPTsbQkwA61U23CSwUVTF5yrv1ZFiNQf2hpharfmTzX7nqQHC9b8uhKdKr4HrAg49cVntRj3ffVYftAqjq",
  "key38": "wczKALxJFwqnuGNbQivGFU2nYw2DuxBEM8H14otAfcJY1kF4EyvyPafSQyCzEtPyBYqCYPKqA8Up6kPfBHE2Lwu",
  "key39": "8gXwC4v6rb6dKzv4A9qDXPdinu7o3sPboYSXrBkCmeAtqF57NPz8B1F9zsCuZWLTTxmcNrrLL5UBQ1n6SXfZhkP"
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
