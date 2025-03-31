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
    "4TTmAw2HngAw52ngjXuMNR5c1FSTU7ybd3SguSRZzTAwXMiP85kJTQ8DLPoRZTqbLY3MrRgheuSrNKs5SzJqFScx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qtD38kmsRfyZcxJtJQPwk4mmmdXSH5iYJPRAqvQ1iyTSK1swvyYuqartTvvqdg9atBiLe1EHGicSbqyiYW1FWVt",
  "key1": "2edpmE6tkyCgKeb1pva4fidmJukPnczF9MSMH1dfyRUkvhRR3NYsVtgYC38cgtjxUZwSNrGERiznFFRpZMM3BWxc",
  "key2": "4XNM7QxhzshLUpadrbv74SFdwsJY829e67sBeSRH6P3MgDLYue8VhAokZzXuyRQfgLwtgRVwRGHBgV6X6ya3aLdk",
  "key3": "33YFcVXR1uutJ3ns5uFthcPvaWrFH7CK5Ug2Rg4zUjKCboj2hHvKeBR3zpW8b2esRfMuzSgSGXASwkXpCPQeaoHi",
  "key4": "33ZL2b8Qybx89u8mBN36TRuuXHojxQmJC13yo44BWvXs3fiYfDHXJhnudY8jkFfXMLi4VunpFeRYW71ovG3ELvVs",
  "key5": "4DhppaxZT8DLNhFEbB3biS6tmFBHo38jehfogvkmDmTQ8czqQSu9CESNjUegLXUh5j7XsTK8jViRtk9mfeURpQwL",
  "key6": "4df9gGmtHsBpdSUGv5hj7YK12wnWP8gHsPvWuoZix2BdGJje6YPFUFFdxBsZv9DZobnGWYVh9c4MhsyCy4cHsFPB",
  "key7": "aAg4b5PsbPTeqZkoYXakN6FrBkQh29okgy7kYKMkkpgLBZd9cRrGCKUmk2Vc3W7QqaxbBBP32byh9PR1xs8NdBn",
  "key8": "4Js85vMGbVcC4cEUpfXnaH4Z7qhu8W2vY6dNzXw5qRxwPoURimidNNWGPm2fem7c1sYnhNJfpYVs1CQV4AH98nhP",
  "key9": "msPNP6JkscSHSbgjQEV8BBRiWiLsexqPbWXowutekwaTxqBMgSVr6Bz23z4jQrVDAsyr8gymdxzbcddMMSoCHnB",
  "key10": "39oug57TVKgJzybSefQSwx4CPuWy37qW9SrrCcGEuFs4EYvNXQjZBJJW4FqDGqgQtdytG4FNrotuf1JdJhaFJC2D",
  "key11": "NkuRtyYb9qqXshRk2ouAqmkLwiTMSnSb4MsYSi7gCct1EgmFTz7YEqnn1FRW5PfptpkKoQ1UsoAGs27oamLXHP8",
  "key12": "4JTbWPtZ4x7PHnz7ZE17QoyDRB2zmzVYEDJ7mpUF4wVmuVVcNRELe5Ceiv68w2AUrpY3LhRhUtASmouHgQp4nhvc",
  "key13": "2Q1pAwX2x1uhA693Cuymfjf1BZPm4hcAZAYLNvgjCzQaDCrUijXxUbV7fUNsvFBCaHDqoJDeMWsAkXRjmYf6vK4",
  "key14": "22HrBatNbgGrCPJBzJFGoEVLG5Y1bXL6xSpLAFusrbJdwFLdW3p88dVMv2GKC5BgrHD7Bh2zSDrkoG8mngcVirZ9",
  "key15": "T6J2PQd26PnGMzUPQ34FsYTXaC64ma3jJm38MLNh2Dh3VoGPx5mMzwkQiNmfe7zyDnoDGSXcGbRNUbDCPDRSDr4",
  "key16": "678ezDThouqxThdU7z8JMxpSvaYBH7YCYQytoT6W7XNS6Pwo5srb9BG8PcpLkrg8Zia4Fd3AKQ6DG8Vm1AWpBcHP",
  "key17": "3dAfzAswujgVbZs11EAsdja2vokvL4YfJBingd85RiQkhgJqV9srxsYWx2EFdZwrTA9FdtETKa2F2gtPkuK3kyrH",
  "key18": "aqcMZ2XEQaWp6AnxWJyryCedL7j8WDfZK45JZk3MyXwpQpQGSsAxKGYTcgXDi8VTiFfF6q4LQ1P9oz6GMC2HiNv",
  "key19": "2JNFE7Qp5RztsLHj8ms6kXpWXABNbBHu5cyUYsWiq6zP84sWi2uHMpbw1n5NxZnkpHQRCuAHXbq7GXtcqwu5ks9r",
  "key20": "37edLfPSpcQMctWjKTmWAc7FbKEeXtHsdMvRaghAuK48diBzUpMs8P396vtzDCtKZcj5sWzFDdtBuwgYey4tFmiS",
  "key21": "2nqVAeNfGJpWCao2b6ipvKQiwbExmBRGfYkoP3WvvmQzTtnCUGoxDmEAu3X3in37QvUS4DYPfb5Q9V9jyz1aaSn6",
  "key22": "cpEA6Anhet3z7i42YaVduXvS53GHhVKY6cpGUjzHrsZt76vn3H9HFwZCuf77jX43oVjg8GHVPXwiXwE8h2j3dHh",
  "key23": "v9x53kAVSP3hbHH4KRMnYfE7rrgM87PPt2s3WL3knTeULkwm5uNwrQNEpbcAZ7S8LTrWuYJGhf1W2dPNXpwgCfr",
  "key24": "2er9wtgXwDspXAyvqfbgPfJRfb8mcgkrzfXFDSKaPUcFygfh5DWjfuJ2aMNGR9mqXWNYDz2r34qc1J1pBEQSntgp",
  "key25": "27iL9p3YFW1vk34piAks6NLSne5VbRvFhjnCimyMVmSgrLrtYPz7qE2WHwFYSHBYU6frKsLmRiaXh29B61hzR8Ph",
  "key26": "3EHmbuns76JrbU3atpdnacHMmmVxcZ1jezger2LwfZQQyxuzdNE8iyYqB7CVBSA22YXK5hDmoH9x8qUACHtkRp7g",
  "key27": "WYiurCyu3VgGPiwnBZfq6Z23FHBvQ3vuBvhpm8JYMbpuiDhfiTt1yeC6tNa2zQtBJDFMjC8317XL5168mouEdMt",
  "key28": "4siAQkCNhPWwyF7TuWRmL7h5VYxCRVMAPGi9xvhCAUCnJxVwrAeAhSYsKeN4cU8v7gDdBfUBETpfCwkYLvpnXJnG",
  "key29": "5kWPsuhpLsDdeXL4m1MnfGPWqERrVEjksfxv1owH4bpPbBeWTFeJxqAjwppEAUdXDbhFnAJ8VmhdiMm1x4wwCZUF",
  "key30": "CcqWq3c3yoe9KPHDEna1cWATu4Cc95cVjUGPEEupwKGJEiaqZmKDNtrzC4NfCARSxdFmy7PBGoe1U7HC2QEhfZe"
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
