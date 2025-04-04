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
    "2EVmVjCi9ZnpyxUAR7BNaQx9KbkWKu2q5XM4VSeYC7MrKbpuVfergwBo4JjzMmSipLvQJ9voBudpv5esAwGgt7qj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9qPoVomEEBx8EetMy8oAFcRVymnZHegqim4WKr9d4byaRy8f3TRjHWLxbzkQizpkszDRMJGsDakN2pRLJveDgX2",
  "key1": "WgNVbWhzaenrM9nLAdBegYUiesDGXc3Pou1eqUHGPY9xWSUfnYJZKBEJh2HWukMhj1Z944ay6tqRAMRx1erpP7Y",
  "key2": "2J6Fa5YjBz2qpb8m449mfpr3DzN1aLSdGNBJX5eNwF26SeuqiBQggSZD4RfuKmYg6J4ZHc3Kt2WY9pwFwTnaCMzz",
  "key3": "5X9BojJDvQvZSqoYstgAP2L9Dy6mv9NLQJEBbubiUTxQKqY1yNgVyR64dercg7NESiJC6JFK1dw5w5DdBgNB68YH",
  "key4": "2E4Fxn5rickbdJ5gyd3oQLgXmFJeQdxYoCnvwLd8BPq6x9MCN2u8LU8RsVBYhK5RsyWTKHd3apDh8N9n8KRbo4Km",
  "key5": "64wte5hwmFp7ydqLsPhK4GTuBiQ8MpTbxANyAu7ox2WukND2ZzxHVXf332KjH2JshK89hrTWuJNQNeWrZTmPe3YT",
  "key6": "7T3hSdJx2cj5RZGgiAA9vJAjbPnkj2Cmm2Q2HpwFD3YspQUXdH2YdyjNLj88ACqi5gJRhZooXwhzPPVNzaVUfVp",
  "key7": "4VgWM9kCh38nSENgpK3joV7W6eqiiAo1MrDNM8Vg6HQVghHqa9zy1GGfWHzHAySoYrw3A9Rpmk8DNisPR8ZWLpgi",
  "key8": "67AewdvLLHnxpBhiEXLLFhKJbEnVGpBwVxDHXGtnQuDCZBDoY7xGacfYxQfDP2EGogSZms8A3aUXKccmSg89xDYa",
  "key9": "5zXPy9zrPaWpsPMgXQihoqo4evEeBSnQNzeDQACLgxhSCtEvAZfcRaUykT3m4naWtMi7k7KYkLwCzx8yDHGkZowQ",
  "key10": "ho1qLBfmBjdRThff939BqrzreCJwogs9Z6BijANzT6t1yYh6kjZsaP52wtweRxA3DN73dj546id5Skyahg8Kkgq",
  "key11": "3wiXF7JeXzaMAQvXUvE2fLaDpNh6WQC1TG5kUb6WX8b8YfSVmqYQFKxFPXgqcsFfGRFVLUMKn6ZiD7pVup8RevYh",
  "key12": "3Ba55GYUnuatgwFcc8vkucRVQnLmRTm6cbfgRAzN9jb3fRQRXA5JuUCC6rd6arsFuE2Vn7HNnZsgsEz5R8d1LFTa",
  "key13": "cdGGGHm3RtWfjn36igHwSWqLfsmWZTYFi5oNB7zDtATWWkAbHKCSzseX2gkSaQbVf2Jt2kbP4zcnK9fnWz8iiiA",
  "key14": "5H7m5NNWaQd4aXhETpkHZniWVoVhnneATcLrbF4PX4bk4EtfBeNsdT3JM5j5KCF2pxUDoahgpvpXmiL3bf3KuZX4",
  "key15": "3EoXiigiJ7eM2vYivz3m47iydwRQNBKDcpBT7B7kfw5HiNa9FEFfN4UGHFJLNLhKX1eSUBU3G21p6YdXEKJ5a3B5",
  "key16": "2sGCiqaED8gCxCdy1Fhb7qjceewyK2Wz8UQ3PAhJgX5KNZfFN3crniqaL3v6i3BQRVv26kJ8xmjoyez8h25aoP6t",
  "key17": "47HGvERCBPxcJUfpuHnmFQtv8q45YgFEKWhXeMGfSJprmsEHMhbcjDz2TEcKEQ4ebvC3KPTNGr2zwGjzmRqXkrhW",
  "key18": "3P2Hy233Sf2shBpWo1cpNK63B4xBRfSzwUyk3RkX3ZiyaoEhdKBJedftVp8HaVAKYMNfKvV88QkB29E1f8kegc6J",
  "key19": "618oh1zfpdQLYQ8WWWHKzRtb3U3siGDtXSZhkfmr2c5antyqhRhk25aA65EunsyBtDKLA2TSsPBNfwJsnmtqjsT8",
  "key20": "4szHAXcebwFWczyDEX2JS4RyM6yGwy2MgeERnS5UuaDBdZ3CheczsRGwi2USNiXdHJ8q39BHTYtCmmqWKtubdoXs",
  "key21": "5CFbbwk3mMjXq3DxhSPGFZeMh7nsAgnLYTuXidJcsGBkxieVicVg5SYqTRHtaGXL2fx8992L6iFaMyu3JoD6aZRc",
  "key22": "67ciGiczSdwyqNY1TReVk3yyg4egZPjemKmkp5KDmKd966ABV6MmYBGGMHEGLr7jpaMJm2Fei6RhUb7oBT6G5D2A",
  "key23": "mDJE6FZeRfnris2mmHz3J2zPDTovzZRBZseUqM1QkqCY1yU13JwnwcumBqmepGqh5RnZD2QRqvmKui7MLXH7yEP",
  "key24": "1kvroT1U1dru7RDATk4V5nZedMgtpKdr6BwHmUxQHpXMZWm8oZdcQA9V7Udg6JhA6RS6JaaLwgGoEygxer3CkSd",
  "key25": "5FpFTZeppRvpaboPHmaNuUdzvaVwpyQxhEUM7vDrZDnMVFZmkHf8SYeDcG9v7ZhZHYMHZfnKLPNQ7SsLFVJAY1e1",
  "key26": "4sCfWDW6pjRQkQahjM36pifVypRyovaaA4BnLXBTrRaaq5szQ41pcvzaARuaapMRUacw2Lu44YmLurak5PW3jPNH"
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
