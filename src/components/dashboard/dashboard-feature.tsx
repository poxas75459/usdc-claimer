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
    "rbQ32TGNLM69NcK79sDzMA6qtW1wwdZqHx3zA4HrB1hMxxGnL9x5mKBnovz7E4DAJ3TPtjbpopQHAXwLjreDi3c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "auGXxEEj9vmrnZYFcFnycGQSRe3bLXuaN1hwoHbETB5sxm84iZYsbtSPfzJkpsyvPsRtVFuBkUgjsVcippbwZhN",
  "key1": "2433GGd3XP3RSzAvTWWntH6wNFxYpi8WrKkJeAtpmb7ztT56ykbLvQn1r61ApQK5gsMh4Vij55H2f18DyKpfvgZG",
  "key2": "rc9Bia59jgLQyGAXdLXtj8KMSL2RPRPEbEA3JFyh7MKkGg78Tu5VYUjXiYVkZffJdnSFXe5KokQURxckne8rvzJ",
  "key3": "2MJEJqCgcoxcvPxYnGcrDnW4ByHPDLAL1zFERtVfYMvHTYiTpoiSVj3uYRSp34gahzYReji1JJEzqHmXPQXKL25v",
  "key4": "2yhnmfTa6UnxJHESZYFTcbTQDix3NDvQZw5hGQ66cFNpXD27Ms6MFJnvPEQXCevN9XrYm1eWAJKur29ARDDQQuyR",
  "key5": "48K6DxsZ9X4yE4DUyQUAjJ29uRbCmzJsw4myR8DhDi4aRyEH9HSRG7mKhrwfvsL5tUheNPXr5HRe53tYvuKqyXFs",
  "key6": "3dfX7NL5zfYw1rwpJG6XAUXHzwC8unoAVY1Qqt5dejmAfpgptbxc4qgf8LWW4eFtjnhPP2zLbqFxnPtk6YFvVhyL",
  "key7": "3E9kq879DqtVZuTQ9Mktidqdywd7ieFHebC2RqcGzrn3uRoCf3urff98eDU7LzD6ZYaRpydFLHMa78eR6YV5ZvDh",
  "key8": "1gnnfckVqv5SwpQzNTUspwdwCWhq22qY9a6G3r4boph5XHRQ2S1WR17sEv6Xzzpfo2jCsWnqqMv2V6yWfGRgnWQ",
  "key9": "UCDuVtyXrBHTY4Rr9EGo1KjCNWhKT9ozvvA1L471ETW4bWsh5G2LA2TWkNc7krCyKqTTUXBEnGwRt5T4HNqeiHj",
  "key10": "4JBJdosFEDb5bWLYVtSK1QJqeZzCyVG3msrSaTbT1rVc79wNyqVRNMZG9g6xysLy6DA9peKwpWhBhBzXgLBnWpHB",
  "key11": "2Dca7kWUKvoagyiTbTb4dvwXkSG3kRefptKmYqu59pJmEmvdw2EHXcdg2hegbDnnAT5fuBM7ACHFyDV2pJYkV4ux",
  "key12": "5pdNniurfqYAdHEgLB4PqyQKbumHRms986y7Z9bqPKV8464LVBV4Vu6B3pbZPtViDeqFZ7G7E5CBKvysZQsFN9vH",
  "key13": "3qmeZeye9AVC6Qpx3kXFvqEB6LHEis6oEeVEb22u4k1NfmCD7WvGaAK6T1EU86iXULozvZvhLKgfZz3aEkzRttmE",
  "key14": "4Sk4KNApFfPtzMKwcJ6RY4bXc9GRvGD9ZSuiNDspHDFENXPhrq1dM9ndyfCuD8tY25PiRMQ1abBtfFyaYRbQxaKc",
  "key15": "53kgwEjnW9rMCLE5ssxZJkYuZswQYnXozispCcbaT4HFGfPP86YpkmvyRSEGWTZpYf7YRguRxuhmkmu6stdma8Lm",
  "key16": "122pWEEZkvuwUSsM4vZ8Dg5xwjRNhjmvHi3BdBW6cQpPUrS2kBY5g5tBpPLVxhfegkwpnQiLtYcbbHQRHBNkBJN6",
  "key17": "5DXv9RorAc6ywBqNsXHt151nxu2PdTLE8FHdm7c3u7k7kq5N5wKPg76u6LadMpXDc25R1fmDMwnVQYvAfuseZT2H",
  "key18": "4kCiRoJAAu29cUUCjJxPPEz1P8QwtMvxQCLP6a2UHAsy9GZyYXFrs1MQ6a9gJUHg4UyT3AmC7JkyxNgEts6LniMX",
  "key19": "122hUrN69x9mDdMkyAwXNseNnkE6jhjhKcjXJ1uod6aVs9sBz8qWVnNtKzUmSATZkvreGKS5tsC5W1aL8KmXYeM5",
  "key20": "2ibgXNXSSVh6L48UDE3sF4Xxv5WZzWkj9ne5vqtJqzKMnBcZCS4ii4HL36NJBaxAQKn5CjcyV9pZdfugnh7r6xJs",
  "key21": "2kknhPKHG2fkKVD4hVyNLgf9DvSdzrg9FDX4BaUVZKQ4fATv6iAoS8MWFD2dCut4oChMucChmE3BUe6NCMH2Qcip",
  "key22": "4rMgzkgaWvwzURAz46FGMydqt1VcCo7sfLogXehAwYqaxXxH2mTWtfMdezaidjmxa3qHMx4bk9DvJ7VWQKT2U25N",
  "key23": "jRGbsKKJyPXXxGGE329ZEsuiBZm4PbqsvG5c15NnHyarJkpF5rG8ctXPu9Nuao8YUv1nm9KvSxuRMAMh2cUEBot",
  "key24": "5766CftX2R1hkpDa3FfVz2sMpJTDKNrBMGUhDQqPVZmqWVHh2okRR8KgnbbgdsNBYK58YMMWMakdk94JkGSAfPA",
  "key25": "4GJhfMbVi8Cbzj7MXmpPFrTYKni1Q1FZCyfBSTvqfNsNwC9GqNQEbgJyvohPSxt2kuCeExAvakisuov2EtW1gpfC",
  "key26": "4Fv7QMBNWxfynzKbM2b8Ucg31YuQbVgpEMPjvqtYFzNXDs7uw6h36vAkVfmRvy7UvH43F4CHergohgYsZpscfGPe",
  "key27": "2dt92FpdN3sH19sYeAyRVDCGFJPq1mU94qgo29xEc3d7pNABL1SKxDMyHHdmodqGehfzwAKgvqgYewAs9bCBLHaD",
  "key28": "4eNZmNUPegxT1GTV2nzG7zJiVE1Fqc2FDqX31LoMVnH43FDCyw3wRT5tEu5g4Jj2k7TLMnh8iCLSqUjqkXTKLHxe",
  "key29": "5b1aCf64jmqK8t6yrUfKL5YnMcVcC17To6m5hE2HGw4eYGZ4VTaAX64x4h5KEksRHTrA9xPGmmEYujeTitD2gDT2",
  "key30": "cJzW4qCQz5tYm1PYkdskRCaB7c38Ud2kB4zSwnEt5cD8aedzRvFpjPVgooS46A3LJ9Q2eQU49vRXrjUDmT3PbCG",
  "key31": "23osMNRGq2Qhbj4ycNUixGekwgRP38TqXUEBYhyWdWt4SGoBADT5dU71cDo2cGfWekx4HJnEzPhAWVoQz2aEi2an",
  "key32": "5FgWtwgpC2YUWHUunBQinVPGPXvpHgFJh4Xw7wXNC4uN7X8nBabrThqyv61rXnPyabQ5c2mUkCHbDogR1q2A6TwQ",
  "key33": "2N7EvMpRKFa8QGyX4VjpMdJZxNygik3DWieAytdqBrqmdYnHpiN684DJBi6vGW5bSGopFCjWbjX59DYBBVpPVyA3",
  "key34": "YcPiDtCn8ckMuBwd8Hd7n61JkHoC5NwfVFAxxZTf9mBRRrRgr5kQTLUcqDHoCo3ayTF8uwBHeBjiEV25HxSTgYa",
  "key35": "51AyhN8rveooRN7KiXAKtbX3Ctg3BXF2d3FySR5gYjRqSGvCAnXuNu9r65N7fNRvNrgJFHG7RRZGdK1CELrXnK7B",
  "key36": "54XZi5EFxpKuw6PdkvTkijbKZcX58geLF9kkXpqXCNLhdFm97UREwvUgH9eBeX4wV63BM9A9ZmLUhQneHj82QPBi"
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
