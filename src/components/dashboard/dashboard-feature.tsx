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
    "4hptbJkdfPE7GEzDoX4tEbuTUUpU26WBREfq61ioBmngYdgg6bAw2EM9SBd8AUfr6CHpx1diYumw1nHLRDirvSCS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hSgdjbW1nQDbr9Ch6W2sksMM7Ffi2TJTTNqiDtT85e2qtkNhDz78EP3fMsdmRicERdcMn21y4LPcghg9D5tHSq8",
  "key1": "3yw2tXQkGKUSQQzGprUJLNjGNXzxeU8BLANstvbGyz8yyrb1Enreg8E7NoioHLzq6bdd3p37cErXSb4wRJYrrcYR",
  "key2": "rxKggkrcesudRnSwsHrQHHcnBW3jLf19SdEFTPtuMiUm9LuLtbqjyzGUiMYvN8SXNxu7Uiybe2HPkNwEWLdtBFc",
  "key3": "2GNuRRhccEU9s8xx4D9hoDDn4zRdp7YmHrrkZw77ZspMpt4oFjv5p2aTK2CoTkFJiVcPDNKTqo4scZcebwJYKH1x",
  "key4": "4N7WdDLVZAuwKtgokJKB38E19Xyp1gdKPJNWL2MhV9LWVD1B4BzvdDkssDSpL45e2xTkXxY2CiRfsect69gp3MW",
  "key5": "3qrGzf8h5ikXyuLbe2DQM2cdmPczXnPRMKZyAuDWjCrUxZkAgz5LSeFySrryXHtSs2iPEr2RhDaUspYe1u8NX9S",
  "key6": "2iP65AChEX3xof5dRhz4S3CrUhz1kTdiKq9D65yixMKDXdV5EbmZL5TqjEiKaQhR4ge81SE3ouNMZVz6EfV51dMP",
  "key7": "4vL3naEtsho3UBiBRYukrWozgDofAPjC2PTaS5QfjPpBibvsRzVSXq6wRVbGXeEhFgdAeEUP9hQTaJG2NLeoFh2G",
  "key8": "58QZtfG99YLxh4tm5jpTehDmn4H9TCvXp2dNDFyzo4w665EkyjDpa4mH8fw71USH2iVy8JbxVPKCLp1Yradp86ED",
  "key9": "LQzoVaLgmCQmmtvHzynLA4e4bNU2NPX74iEKE4BBNXtLcrcbtMRXgYdNrj8saNs4R5uAKAZfCuYQyH8n5dFW61Y",
  "key10": "tyAV1k96X8DGF3zYcZiBh7ayaVdUyExmZon6XyjZYfvUuW6us1zeobrk4qT5Jd62YL1uhrfa7DyGfLbLQqhmmwp",
  "key11": "57MmourfvEJ1451erZHfbnGzt6FSSwuYsjWkF9co1sBUj2g7RAav2vMoJ1HEdpboU4CDR1NZ2JHLmmSNy6FpyrFE",
  "key12": "41JQGzPp55bpAig3sRSDMNuXdSEkcurnWnGoDRNsuinjrM3E9zS2yEFCwxByS318GiniWULggijcvn9fiYT4JWzd",
  "key13": "qVFEhJMcw1G2xQRH8JAhfGLsK9PJMixeyyLrzjbHdBPDHX8fs1jm5M8NHqSVkV46s1WhhPjw4rvdXiJx6jemoay",
  "key14": "4h4xpRysFPu4oHrTWEB7o2oYSA1X2JXtxTkQa15n6XMGCSta857ErakwPK8Ao2i1MHtu22eZzhQy74QjZ8foqTF6",
  "key15": "3d5me4BT8tPTJ3ee5Uwc5PSE8bDzNAaYfX3sYthMeSKASmrD7zMoBxmw5WyBi3iePN7eMJakZSSDwdZGpZ3ybMZk",
  "key16": "3USaRdQTwhsMk8GDUvLuJ3RBgVfyQZgEEfNgzm4ovhXXigRE6bESEQryhG5NUr4zpG9f8i6Gab5VCsSQZdTkyKX8",
  "key17": "4UQ6KfNCbjvB9E5GzghREv7XKpuhLFW9Y2X5tjN1tnk9Ymfw55K2GGJ4Siiuy6QPBVVkZ1QddhJYwFuzPV1FNuRJ",
  "key18": "4DanHpmMZADTsAiG4igP6Uj2uXpsZNrcXPbBjeuoJ5omPtZ91RqgBtfzg61BfwgzPsUdhfo4tHuH5JF61ZxBYqFM",
  "key19": "msv1A6Tm9iwozphupAek5P7S95GxT2TfvDmPePmNBpRMGCHQ29jowCJFw12zpv2KJQiqdXsejjmzr1eswWG4LoT",
  "key20": "PZfDvgCXzwVt2hT4bSFwnsGajrWWmcuJ1E1hca9smZ7oMk1BkQGeVqEU4LNx6YzenChAYmMaQXpGFM8EVhahY72",
  "key21": "5UqXpo5HF7sQhYcvx8Bczves7PWqC5zXZWcxny1PKxWLxL9QcbH7oWZWMabH2ye1ffWqjjieZoxs5pcwU37652zo",
  "key22": "5G178sstAu3Fmbr3JTTbco9RMzbYthReuuj77nBtWcMgLtMaw2Fmdzz9yXM9crEQTHobk8mPT4P9NJt9Y8FJaof",
  "key23": "w8xTP8SBBz2Hd72egCLdQKDLs62GYZRaYNMY4AmyUe1Ci1UPkByEX84Ae3iKVfkYvzibYpeNQidkH8LMgQx8JuP",
  "key24": "4ZGpF9S3XfMKSEemPAgVy275N2SAYfXzVCGxPBfDCn3GTU3exKjb6RKQqcLUWnwhh6ZQUwGidDoPPT6SeH3Q9k7E",
  "key25": "GFPebYvgcDRSuWp29rS94JzvG35euQ33SBoVyq3qNyYQtfqWs1SpNie5qxJ24RK2hWR3GvfMNSSD5pDFcKhifcv",
  "key26": "3KiMFSVUavoUEhCJiKNMnTLjXhJsYjc4b6oWWtezxDCZpUwWNJxHdvQfmG3341bKV3meNJN5q9byeb26c6VPADr8",
  "key27": "2hQj6o3CpcYijTmtdhy2VALipqTsqPQSHHZeYqLXKoQAj1EUFfcC6LRzrewUG4hCzzmB5BvSmgMxPSAsoQvdzsK7",
  "key28": "2gSpDYngxJBmUJnPhgARkJo83Ysq6mEeUZujpMbNHNkywC4bP55QL3qY633anhFe1jM1HupY8vPfhJ9ULdSBQUMR",
  "key29": "3CdAZLTbFxyeG1Jy9xbF9ciPn8bFvBZzbsu6oQ5zm1k1sKtYWZsDLdxGu8sG8xVDyg1tKEiNRGANZ7P3Yfp2pTr9",
  "key30": "3eEriQopo9YQtXypnL9rkN6odSmTXbRA8eidb394YZX3sXKER6UXnyBPPvGgmFM2Y3dYsPSMSWraAzK6Hv1iu6eS",
  "key31": "4EhgqfMmaUme8TjD1e5r1gWmyNFZMBWp5Kg4Yc8b7mZqSwX6tsYkcRmAnE9WUkJUgKMix5jmpUr3PKCGW4u6EDXE",
  "key32": "2dEkEfVxEdnx9DHH7Si23P3oWU7UcdTSt9WLD7vSGpcV5o6tjwyWhz4UJNFKag2mhJj4U9SxhE2YrcxhJJEc1bmz",
  "key33": "4XaJ4x1e2ztyhQUpUnKjKZAsr6Y1GA5EuVyeg7yS6z1T7JJn3oQjb1etmKAWcw1jnmVyKuaj2kz7mGwb646hYGic",
  "key34": "3iFFHHBARZ7NT4PprRcENn38ZR9PVbmaVvuBp4taLx1qtqCnBXKWWfzPNnvSpXbdkYdKUPzdGvN9fqMHjXRvmmVy",
  "key35": "42XMo8YUxPK4ukuszTwSBftGQg1rZhjpU7HyApVvqtzXzY1w9RED5x46EEgQWA1FsrPSCAS7aAhkDA55oa1gcRcH",
  "key36": "2HGAigeCoTWAtpKZAcnXSdVF5s9NeMLZQxy5BZK5sj3ysxxPje9zE6std2v9bSDhNWPiC1Nb6EDbQACDnq8Pr9AN",
  "key37": "kXPyCavohvZFce6759nWDk861fAFNp5ZXTvgWz4GNsdBmAC7QywW2JMgsznYjdQQk6AZcsFonYdfRTbK4SDxmXo",
  "key38": "4v94VujcKmmzxrnDdeWLBsVLVnnKoL3SGRN2VaaqYyA5zT2rWtFn9pCKAW5JrxrsoaXbQ8oWJwY7szmkbWjMt3gv",
  "key39": "2TZtg3AR3q15bQ5PMbU38DqQyAhikCduvoBBUNGj6hMpJN7Fc98Yf7U9KRGZFYfxGMN6ZRyvZg3xvXLHp7n48MmV",
  "key40": "3zSkqCeaZVuXDnchVzaxuXjsaKJiiS6zdAnUeSzWmisJayTWuQCX6mVwZrAxmDtQE5rnLa19N7urZPHSrYyoh8Jw",
  "key41": "5hZ3FT4fNkpG2Dgf9SYqBBrvAtSowAanVDpnZwHnA3NkJfVWhAcVWc4kyUHTpceEbzpkEn1CMbMqWvxNo63cUzfY",
  "key42": "x4tq6aQXWcqBjfrgrmZKXT2ZkLQgj8LeR8G1nGHQTbd4uDH665scNXSE9MTu9KDayFSeJu9CeojX8FFqLKTAytN",
  "key43": "GNnmwQ5bxqLpeW1WSXwBnUk3PDVSLwRQSRj8ho4Wos4YwjimgoJYrCb29vhyz59DPZVpjTrmneZviagpQdGPRSZ",
  "key44": "bwYW8HaSQ5UNmK38HJuByfb9rSDU8jCaQGVaoTwGuxJRo2bGTzmb1gn9ZaTFW5qdei2mt1ckt5wiJyqs62h6LmC",
  "key45": "3scvyzEqyysxuVXmDAc83VTD3EhMSL7uVJXNkjaw4TZUMMMP1ksxF6HMWjh4UP5rRn71BJC8uDhdXA4esHv6jWwd",
  "key46": "4WEueNP4GNBiUb2HGaaajumGWCmmZ5iWyRjkK4d7YqYBwvE5jythHLjhpz9ycqELC5epQemTuSWwuNkwJKg8Yahd"
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
