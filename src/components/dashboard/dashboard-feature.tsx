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
    "2rBgPDvVGC3fm3HNDgde26ipuLeK1pfW8ZrdnLTCsKU823Tu5acnRd3HjGRZVJfSkHPKqErCUBSHXEDwSe8BgPAK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "251mfMekwM8r77DSU3wJcp3rFWQQHvDWVi7uTtLQvsmvhvH7qGkmc598QPG7mbsyZUmowRBrfgoHNRiCpGYrZZ95",
  "key1": "4WegqV2but4zS14N858m6AFnbgsB7KGMEEQ2B5kVuDz8R5Eskr8XVLuj2ahAUWY4AXLX1ndGc77WzdD9CGrregYd",
  "key2": "2mYQA1fFV8fYkctuFFPfQQ9YhxiMhsuHH4pcvzNXmzc6wVqEg8sZukQjKFsF3FsAzxtjgvvpdfL972kz1mraCkG4",
  "key3": "4YSx9XADTAj9FBjRjUq1nxpGCmQktdSPGspwGgU1hYecihXjrnUrfQ6AzG2BPX5hWw4JUNG3wMmCsKGxxKdsK6Z1",
  "key4": "4S1ebJDgY1pFhoTKyP5u6bekHbssQwA55YWUbYoDarUYr8ztdKzp3FMw3WPo55AEbzgZiiNsU85w74SePB5Lrpxk",
  "key5": "shwPkhaBuq9vwRZDcrYs3PhokFCTFiXKrmDiu7Q9eDLPd5xXyu8qgf5sFCpGLEP4ekJYdbMJQAG4juKw8SGCjNJ",
  "key6": "4ghQhpKJc4dwwRs8FzjKLVatLxQGUBUhKZF8G3QwNm9DC9bPEcbf69z7nocrW7Hm2K2iKh1ePxZaBH2aYmxaDi9j",
  "key7": "3Fwn1DsnAt2gvwnajAoswx9X9hxuqG4p2EjuEYgQVnMZbbCQcvCpsxnCzThVhwwxdTH6VterAEJxjftNpatSNgiX",
  "key8": "4v18HHYdrdm8Dv5gfSzQ8dqx93jd649KynnXRovDAeXt8DZsqBkQVmg2mSACgm4m7qALZxkfCwmeaiaqsejy9jgd",
  "key9": "GXAp6o1U2nTgwv5FhJiYdv4UA6LuptWS5waXFvk11uvCj7jU3rGPGiFD2WMw7zNDNbbxz3eEzmvmjUfGP3p6tbL",
  "key10": "9V2LWGbkmbt9xFUeRvFLvRuKJDnNikTp4i7oPL35MUfH3sgQEGCYGbDAp5GzLVZYt1yxZvA99mvVhFKbghBdDKg",
  "key11": "2GvGP913XFfgnq1nR1m6ZfC8ih4Zu8xT4TTkoqyHSSx22vgzqcdiQAdX16dQcM8usX3BAtnHS1Grxi8LJYRqm7en",
  "key12": "2zkDTqiEwqReAb1uvJXv1kQUc21BfZB7UA8aWTLdMCxZmDyUspjfnWhhTLeXxWcpgooeCoeBCXb4PE4ijPQciSie",
  "key13": "44ZfYLAUB9zsgEhRaswDNcyVQJSJLM4rB31r47BSShUZyT45omcfxCFiiHzmnpU4kfGgeER9PvgDMr6SxbBahUdj",
  "key14": "22YVrQNFgS6pVDnsqSC4HkEp4pFxBfnFMSpzkvCVeqP6kpaByh5VPVF4Nv49X1rdf5zhpxgiko4WZvFHoASyhEoD",
  "key15": "5NKueLQ6ojY24CyZPewhEcYvaa3udZgzKCcrkekGffrQCkYyZhvoppqcuRnrzGoCVTEAY2R9ZTRUULxvQ5hssp1s",
  "key16": "5e226xo2vB1uojT7bhSC3qAUUnhQEAqdobbyF7AAJcsHcCaU6uvy4BaH7HD1bZb4wei6PUKwKfxJ1hc8VzsXbeym",
  "key17": "4qLB9m1jRRQvrdvKz7LcdtW9e5tTB2fkKjZ8NDG2TffG4ZZJ3HPiJuJXJLVdsEjnfmFF8NpUo8yYtLNkgX6ZG6eY",
  "key18": "2eCtYuH7aaE5ZMR3R9oDy7vYBD7HKXWQf5gSTeZaVJxDhMDmNAcGAWD2PEKrs9fF7jucsvMo9AAZxRLEZREuquBP",
  "key19": "3rcXpbYas4fP94a4fbq45PXwhozYTbwGvqUm1mTS3xDZYiHtairY5cimBttW9CWAqVgFbh43aYfjSLNzfGvx2iX",
  "key20": "LpUSvUnszpmw1TT5sgy8G1n2avo88e14eY4Skwk93oTYGyoiE7E1sqPPJRmANzpgA2hXUn6jHeWSe2bfbbjSJHY",
  "key21": "4Hi4xnCMb3pHAuZ9MMgh1J2tuCM7ENphqa6ZM7fFTHFrzjQurP4h3bb1ysxupWtSFtUSiSJTRv6NKwAnif4gPpe6",
  "key22": "NCAoiLAVaQjUbubCbHg2sWgFxLfD7Y3ckj478oJdAYXpbqMoLnkbSAwK3tjeraWHu5RvJhXZdVQuiMWbGRpJ1qp",
  "key23": "3v4Vxn28xDQbFAGKwH8gyUphDA6kxonExJLERwsk1EGNKh2QuxFeacCvcT6YiK1JaaAFVUu1Des4bRvK9FJdUfW6",
  "key24": "2oyb7z7TdkC5HEVd82xHATpu8mBcLJKS5xfq6BTQXiEA4KYm2KXHDjyw5v2sWc3qeFiBmnDNBoMJwrBVrATL45yf",
  "key25": "5FPgXFAidq3Txn5QjSbT4cYuVVj7ASZEjVR5TzgVn1xY6gahWLJN9sE5NiYox4C2zHBp6PeHhYeW2vuktCe5ypFM",
  "key26": "4PVEcbywDEjWJtjKjCUs8izkfmZJAHiY8ogmQiTiRCiFbKoxRkLwq47ayrhcGSF96gTHe1QhNsahBuLpXPaSDSxn",
  "key27": "3PUhaZM4ELLNauhjDD7n8XhFnf1s5kiXJ4GhgmZpBcx7i1j4vCXnpREWrYswfpBX8o879eXPEDKTYrKTteP2fNZm",
  "key28": "3qwW6DJsooJ3WxBWxkazyeCVoSH7tJ9JnW75BrawLxrKp6pu5bqyJved4UQkxLLmAAjrKdKnfuvYLDAkCoChkgYF",
  "key29": "4TnYB86KfJZdR9FrMoQFDXxtbMj4VLBFEKU7RMQfi2as6PCipCTaENReByZmozmth92wZLKPQr4VhmYLqck6YA8e",
  "key30": "2oDJoxKvpEBQo2N1cCc7PXLU1VR37hBQRwwMXRtKeE6HbSZeevg2wXGCGKkbDcqJ2at5TUwJFFuEqxoxV3DMeQ16",
  "key31": "46BMDCCveCHV8pjiB5zwLwJC2RLhQFVMzHRkRStmeBfshiKcwQLhBeHHJd21zaikVnrkWosksqWxEqMicSAxLkqJ",
  "key32": "26mdnD4KF5B4yNtkSYTs25qJ9D4zBQHi345FawESoqyxAdg2CCz8wqGciKD5F2MVbgLcDUvhjAShDT9YeQzfVNDT",
  "key33": "55bimkoLTBwL42JNM8zXmfKpgjTiSM6FH9WQc3aCtR5pLiGrqZbzxPH1cF7gneWKXt4iuxefRt1rkeSRuYqrwUqv",
  "key34": "4xxHuG1SMHPzGPfTFSmaGSgJ92oD8Yvt211iRa1SwKRBZZ3JvFFpYQUsypPutQJGcVeC4JJJACjVTwrPSjp9Vb16",
  "key35": "395nLQoZe8aFR7XMs3SGDvCGv1TFWHnbHSCyJH7hG2i97HRajuxzt6F5AJJ7XENmBF5HUnKbdEVNAzmmqjzGphSA"
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
