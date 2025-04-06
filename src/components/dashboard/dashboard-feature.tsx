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
    "39YhPXiydjvRhHMpPnJq4rkH3mVzCY9iXyq8npVeAiekNfukJx69EMroahp4tU5XibjqmzkSQ9NgCou8aeKTJYmG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qz6o1r8XuwKrUJi71kVNhVTCnsBmoQvzPc2RrxpBpNphaZo2q5eexk1UgXMiwfwzrmLrcBD8iRHnuAo3KUWisWT",
  "key1": "TYReNZaptKgKsWCpqvw5PSsYJAA9ECKTC8VKYNU9YNtyNFCQ5Dfc4KSJFvTmHScA89QHjKBmsKNsjcohrQxjiZ9",
  "key2": "tDybrFXF8Ac5zdqdru3vcPUof7Xdk1k2dHAhyz9RrGVDdEAzXZ3pF2Au5Nig5na2iQoLxg6rPFVKDQygaUDy4gn",
  "key3": "3g4VL4CvwWmUZMcwzx23wtQqzVLZrEC4YCdfr7B5G9bRccNTPyFwTvYqm2CHojbgRPnUFyitYyoKLk5cMeTPFuNt",
  "key4": "5tDXpu3ETZWjZYcZKH8hwvcrdYuowW7KG6VqEuGumgjijQSsdRQmi1WcDiu4R41qr89FMUEeeo1MJw769XiVJKcd",
  "key5": "5GGYms8GtXT9xguWPPcj46A543AXECEUqQMhqmu6vE7Ms1ZXA6NvQVynczV8YyknKc2vvd21yvFnphcaSSPkC9FN",
  "key6": "28GkBs78hyjAzx19o9SJCrn22APk953bopHaPDxKNXe3Gn4gJQ2SQYwbThCHmVAW3h5SxGFEcHWBay9qsjFzxeQH",
  "key7": "3F1bjTnT8if1SqTkt84Np3bnGh9Y6a2jJYqY2Lhg6MxNERJ3VgwMMRTGL59qiuXqygMu6DxJAKhYfMokQcfoek94",
  "key8": "DpkEUHS1PXi6C7MLckTEtYsXkhVNQfQRz791kh9k2Gte7zTeWSo63818mRxPF8nqCMUf1yviDnDtCpAwBJA4mTM",
  "key9": "5ijfaz3sT2Yd4PnQAbeSeMvp11PuykMWkSoMsubhyUNrBUbsCT4KB9ghR5fLP8FbN2wtm9BSNGi2gU7z8vCgZNeY",
  "key10": "5kAYUEMkejS6xTtrsfsoRdaSNJynLwM4BHCXTxPxchn8Axe6xAxS6MrnC6sUcmbKV47iw8CFiJoPfCokEgJJt4gp",
  "key11": "NGrFnbRGz4VQ5hiFNwtADrVxQhH2UdRWBy1tCQKg9hCN37R3iVQHoZ52csecSkLCgJmmiKA76EBJZqxmQexBBd8",
  "key12": "5ZCqy5gQ5Bu4hkz7FCn1RHmqdwgXXNZhX2DQYmRUjBxgoTN9DxQgViuFQXKXsYj6yPpxHU4YtW8SW5bfxgFVPEVp",
  "key13": "4XDMdn1FAnzyWpfbRY3znszxLXjWqh7ho34ZYvJj2fCshjprj7sjFey1aVfMKvRhJKGe2Lh67zTwq2n9SQKhrnr6",
  "key14": "29AzfL8aER7sJqnfKipJ5BraunhBt2gPwbui1BaUHgCSRBdZBpkN3oiBgSf4nJTSwwEdbrBHppUrPhYsPjZakZu9",
  "key15": "3UeCE1G4M6vGVWSALt2KKcFJyUaUnrjJvSGoHBwaRNFXz8sVhLH8ZGXozdNaGBJrcCmFf8HNqWjwDu3XLzGkN1n9",
  "key16": "57TWcHh3rb6C87ANdDBMVeU2zgrWFXDtGFnZop7NvF7dn6FjPFNPFGBrMFnqJz8xcd3uVdx563Mj9e7QgPzZn8x7",
  "key17": "44xhiBkUZLFnb8E5bAtjJmYhtrs4dZDH65XRN9gwg7RPsXaYsaYwiNz996D22n8ky2G3hgpDv3vBMuY6hLf4UbFw",
  "key18": "4PQGn1otZAiHXDi9zSb9WRrffLfZ5mKGd5f71Ya4DJiNm7sBPwrPMzFvWSqYdEiUWUVuhADvYscXTweYQ1nDoMbg",
  "key19": "42KyrLd774pRn7iZLixpba878imrVRs3Xoa27LjmoRsgULWsAzAb3MDKpS7cCZeKbrUbdd7pXefhHvXQsCujXU3B",
  "key20": "66Yf9ZKaEkLbFhCAzGAHAbj3wwRq7YXxHy6dgdvYMCCZd1nWS81WQD8YbkmjXoQo28akaAEPJBmNRDu27GP1u2Fc",
  "key21": "Wf3mP3cuTU315sXiyE8GWE2dyvq3diFDjKUy3dczVBrUsWKsuVkVg3BghVgzitee4eobN3bPwsNuFjYKjCxmV2V",
  "key22": "Gn178rGKmjUev2bQL9bgSAsBci7BL1QVqkTDQ34cyPFEEq6wup8VC5ZksvvAgVga62zw3bL32y6ETJsb5SFAdem",
  "key23": "5sM4CucrGWvuZroZNaZJ3kiu8aPhnqNyYVJc78FyZxbe9aEs5GVjctV8hLiBprEbTTsEfSyhHkGE7dzAPAgo36sP",
  "key24": "5gLPHEU65rDPtiTbRzJ9E8UfbsGfiz2hpAm2iVZaRTi3KiAygPs6TkhAGsMyg3WUo7r78VfBKaBy44r2nWtpyQWt",
  "key25": "4YbYLjZ2ughzYdgJcTRrsLbTHxYeKJC222uLrykKiQ5e7VYVBPExAFXgLftrPqoxeGXEPNZhmusKZ89M8xuraFqL",
  "key26": "28iPDJCkarnyPdpPdo2wtx79uUp4MqhB52MVxZLjvpDVtXraAhbePxDfyhk2TwvNREqD9Uv3kkZSDtVsgMqDMb2J",
  "key27": "5YrGoyBUVvrxv3LkHvCzB7ArW9rTemEA2rrZNuzUadH7BvxqFizhPsKAxUkGqAxWsUZv8KvKqG3zvuPHwwHiFAu9",
  "key28": "29niFT8brcp4TfAGeiApdT3CPUxhRvbSK9LzFDKtfqupoJF6puUsC8WpunWyHcC74sExdrYvXdVaikX73g1EmRF8",
  "key29": "43ssQbqdkHfsi5vgyeckYo6LTusSpGm2toYGDK1pgdFRct1nZfAqo37e62G8iMRyy9ST5Uqww3qjpphV7zfGypaT",
  "key30": "3NGXzPVPjWgopfjN1bCYZMkg6Cm6sNL5sgqnRH48nvfadcSnx2cH1TgUQ8TX6NF16LamHEkuSpvc9A1vZD1JZK8P",
  "key31": "3haEUHnPfWUVqXzP1iuxY4fDdZg2umDUcXcfLNAQLAbPSZ8iHkjHhUmqvp4wPWmk4p61Fvv7sGdS35C2JccQBWg2",
  "key32": "2zq5NGygcYUATozXo9Ntt8vPPqkzWUBcrgDcPswoJWcECe3rz689is5kbvBABmAwmE3t48aFfz5rKuN9ZVLxAUbb",
  "key33": "32JhFNBR5Ttovb7fTf9tNTXHtRowm37ZcsdQyaKRXfShLE4C3ss8Wvddr9pLSwYz7NWEgHTg1TAiMrLurzQ7qpJK"
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
