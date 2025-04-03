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
    "2KjsU1qH1RVUgcyDVVcSr9WEoqhZobp2mNn7kXvARnBxV3HdqjH9MkZseWkmEvkLio7QNWWSiCwhJJpsaA1bpxFL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cfPpoCgMsZABwKKfWokAsyHpQ1dz7fTdXj4isvbPLf5sf7udGfdudbLuTWc6FGkzCETnFPjQ3ZT2pYQZzbpvYqh",
  "key1": "3byWg7uAiQdH4rJXGTR9Rd2NP9qBZPTLGyPGZajUJKhyeCqPX4KPnPbPawkkVqRbtvqMDnhoxk43fzUATznhbbWL",
  "key2": "5NrwZLevoZq26ZMT1trm1zNZigxu2rZSwK7K4DRti1HuEGVVzfwYr2mp3jwDqbNxoQnDtUe4NogFrjAdNSVx6xNV",
  "key3": "3tzwA42JuSCV4ZtpD1mtB8MHQxz5mZrCV1h1WEMFijsUPTseJjkDaBRVchZfcJLU1BN8nTty7rWadjtbEb7YuFEr",
  "key4": "5BDhPmveirb5U9BprDUq66XgvWctcryQnpwV5HTjtimnKqSAj91XaZkqCXGYixp5fTXSLmNXywWFbZdPxofsP9e9",
  "key5": "4ADQJVy8AQHHCCkK1GenPUjp9sPMAkDS7CT6dk7cKq5cAtuxFw6YjxEURrz2BxLagZHDY2Ehs3hLXovR7RhHNMCL",
  "key6": "NotxRvMYjrRLHRMBjh6R89n4Y6yA9p1BpB35neybTibqkxKwvLZh7HuGM37ATkK96PiRtjENow5Mb2VFYeRHK78",
  "key7": "EVMna8SjaWJFxQ4g8EbUCst3rCjjjgTBHRk6FQTbtP8HV4aA91HsADqy93xs33LhvBGQHYmxkZevK9zHovEzzZE",
  "key8": "3zYvyUEsdA8LbDkKdEiQyyoWwYzCPmYTLSf9U27paJfeA5e1ycLEbMcp9ZypFqof3Hcqd2Gy3hkZ2o8frru4nwGN",
  "key9": "f2mycdDbNTsZXUmTNWPcJJdV6ZrMrrrPRGC9p3aUbekx6ce5ivqRiruwo3T1TgjjDZKBydg4u1Pz54srVA3kKxX",
  "key10": "3M8BXy8fYZqjgZXMXGZj2n2kQJXoWy5cG5WqJSfTx2Md4GBmVcA4rwPyVC6tNGC8AMmuV9GckrWdGYSTvzvgD1qF",
  "key11": "3RahxxmGAirDDRbwB2f6yy8TJ62PMTpwh28pzBNZq5NBTfh5XPwuzQ4BQWkN8o1tnogZuxwwhb6TRkNjee84Yrmn",
  "key12": "5FEBzTqDcjc22YuiscfxtLmWsaGbS2CUMU7LvsUT75KSNUVYpHRyUJ8kG5arLQsrtTYf6sSMXwQn9jNwBgtvn38N",
  "key13": "63oC5QPEJXbh5N2JpDjaZno5gVeZgDtdFGbEm4enwq1BD3qoZ9qgrrTepscsSpEZZMzUeXadEPcDTq5WqETBEjTc",
  "key14": "wr5Qarnx9cR5sr2Auu4uoqoGkKYMCifmxLEJ3b5KotYLaRsSWPju2HLYueKVX8JiQin2BYudKrJevnJmg2yDE8t",
  "key15": "3KgA5sR6DfbtZ1pavtiesFMKZ1Deo4HoP2GtphgZ2KRcr8Pcy6nshHhuULY4k1wdaoJncsFrMW5sz15PshdTpnQw",
  "key16": "4KpHpB5CKosRM53U6K9aCYquFNMDVKVKYGi6eM9qDHbaXcEwnqALqrmu7LseWxtdFwKhYXGQQpb5oxGt2mTWUWbH",
  "key17": "2ram1SPeqvZHaBM8xa4TPAT5cqJAdt4bqv83eZALDnc4B5Yeu7sWgPZxXLg2pmjJVDUEakDtFFAiE8u9HUDNEPc2",
  "key18": "4kiyQWiExCGKz2QJmEJYeLvamxuzg4kUJ59nfJWqjS6A4ry4LXRVLXqFeF1XRFGWZZ1oVVuwL1iB3SV8seJGWkpr",
  "key19": "3ijTB5cFzzYFr3gyauLSf2LuKgWp234s9r6iWGfME14928k1WtWTqziTd9AZZhpMpFPha5NTo4yvDb8YhDamcT2W",
  "key20": "2wUH5Y2mg6eMf8bYK8Sr9RZgjPYt5VjC3K7VBjk3fYaDcPbgGokUNQpm75VsGvQAgrvowABX8YxcYE2M3mGg3tHW",
  "key21": "EHLyHymN9UB9fTvib92WtbrVwaFi773WzNchHVnBjNGuNnpUXyvyXffSnYQjRLYWXXZ1ypsBahHDM7Cegy5PwL6",
  "key22": "2upmX9y5vtfX7izcaWTd3S8WxXRn8ViuNDEbyQqLVcn7EX75LHzKfZTacrKKcqykQeRBPbUXiSF2HYJzA2wHHAEu",
  "key23": "5hoEfADFEfZVDTn6zmjKu5ApgmHjhN1JV6ra5Dt7KqDpUbfbcgeNZi4DjiEoYzFK67fR6r3wu9EBVXKNi6afKJNe",
  "key24": "3zSYsRdyJCZhDCAYDyryUtHhAr4cTdmKH7KKLc7WPmetH6xpQMYWmi3RbFtKMoLnnE4nkoesgjNd3NGnrUBcAruh",
  "key25": "5qbotrx7aT8Gxo9Azv3djHGmwbdLkpZnqbEy4bMLB58FM7P45KPySkKp6eWaYJGHqUKKQhsR3sWdA5aWZp22uAmQ",
  "key26": "2TJKgXmVByHLhWvodUAoL8WVQHQiuwPAVmZYatyg4goCTYMs54dHrw6mM5T1dXyXSn4g62A8JNNSx4BJqiT6EBdp",
  "key27": "Jhjk2TaMW7jnPCvqUrVRbL28M69PR232UcmFoB7MSuEbf3AS5t5iqDi3cJX92gNUV23c8LawRiagR2RafNqcVVs",
  "key28": "KhRxGCXATHqfMDnVtL46goqRLQfKa3u6BjQTA6UqCxnimoYpuYPWJsXANYCCWq8s4iAi9E6VLRNLGRk65iAC1sQ",
  "key29": "4GSindqSXTTb4i3FzWsNGbQHNQUd81guBaJf5Bcms7vVJ3M8RHW2nYUL82386NRVhrmukbcKhoVTPngQ5Ee5WXmj",
  "key30": "LCDgy1fZMHx9a7FksGDJxQ5mAcyYKTARmRA33yXDviym8quPconibLMHkTxZ32SD8scq6WVXdkk92xrAY7S1Pom",
  "key31": "4kq9UB1SSzqkdPuM1f8HUivJJpDQgP3AfDw93rrB4avy8zxW2BcNvAawXfnPHnyJN5WFZfs8yaQaudBpwpB8zdeV",
  "key32": "QVkiVwqvETgyGpy6ufu1E5evdTERh4VUAA6E1hjKfNBsTJXHrnoR3ErYaFg36cmawCKUV4rsJ7FzjcnKrYKGi4U",
  "key33": "2vU4fNoPTbvhVWr8hQLxamv9Y1DQULhTRp6iRdjLcbqiwtVxKVUourCt2rn2JE6Bu9B6vig4LnrsW9PchvgLCMpc",
  "key34": "4VKoVhqv4KggkPd4jpWvhumLs1b4YqCnsyZwcisPMuvaFSRTzFU5gQY413MCBPcDEfvKL9whF2ANFcCDZSA8G6Yo",
  "key35": "2B7tnDSUPdoe72CcLvwLTux8qWgXnzYA1Ni5oqsL4WJgZMbkYsy85ik5B5REMbbqNeWeMHMRdgfhhcQP6e3RFbn"
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
