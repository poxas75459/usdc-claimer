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
    "2vYMHqgYokSjQBjtxGVvCqWuPhXMAaJ1xTLLRk86DWa9TjFpmChPvLdkveeS7oysjJFLhQAXq1UVQPoA63C2hQbv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29rEDjtpqmMs5ZHsrm7SijL9EDGXynNM5tyjfrFsyoT38zk8bvD8YfDATWfvuWvgtRLMWwNjCLUz1Gwu2Ntvo65K",
  "key1": "3pKFxJvrnd2Hy51XnR86v6nz7eSi148bpQt5odQ14hDBZcYaJQJcfXhTH8nzrZrbGWbykwi9997YibNaPiK3hNhz",
  "key2": "3ws4Ww1XidmSkR8E9XDk9e3ghG7jHua718QsjcPRwY4xGfucVhR5gwaXzWuRuQ252wLbnNgitHYaGj86pDi92RHV",
  "key3": "64pXw9MaoFh6jM7ZqXhkMNScAFJU8L3DyAbpXb2Dm1qCLw3JoLp4F5YuFujiBm6C9UBpG9X3FSPytadTpHKF3dUH",
  "key4": "2SGjtDzBezP78kR7ZnYYEeNg9625Dv6xBNpBAPeDf7H6Lgfe92M4EiMWFMm3zR9QB2NfmShQUQHF9DrB598TAemt",
  "key5": "fssm6kqfNi2dP8GfSiLfvaf15SNPrMa3u1FsMdDMfZvjYPDKCtRzvgQ4U2ubdhqXQkK9v7xFguRJBtaSAaJWCd7",
  "key6": "42E48U1CvcWoF3mhSxDPhuSMcrB3ETHYecknNXwPsnCUHwDdr9mE8eGgF44dxdhQEHeCCkK4QNPTLUK9SuAqMESa",
  "key7": "2bHZfPb2YVtK59AH6UHcJV7Yk4Mb7kw51BeCG253qArScetAZF6aZtMUXfS95qLpvoNKUk8imNzk1TSZZXFTmDwN",
  "key8": "4iDedsmgYU6qJYMdNtmRZfLeCtV2WRGM1mUqr55p3AaYSkVqkUbpQc6o1MHor7oX3xqSqfemywCqpmysHSDfA3wZ",
  "key9": "3yK5sgcPCJiQtNoWfBFbjMTNfm6SnJz6ts4FSBot2e5EzUwTmtGiCZFwLkzk3HEKkfDN6qyVMq2vMAfKCxfJQBHu",
  "key10": "5qWEyg94syooKWbmNG1GTh8Aany7o331p7rie6MmUVWwwpNUMx9tqiwhxRqwev2RgczKqQY5RaK673ASJpwwsg4w",
  "key11": "xNjYLvdbAuoZ8UA3uVze4HZxEs6rB8bagEsYHfBfgP4RLygdyUe9VqdXp12cwvZrjd6KHvdaz9nQty9Avd3Mz8r",
  "key12": "5vdNZNoEMJPcTXtMGfefehRLRQ8w9MWUbTS4CFGjoWEXNQT1kii3SBbgnfqUrhK3X9eG4xGFKKBTUQoaT2gyjmQd",
  "key13": "7h3eckjs3AxTsvnB82YqRWzbCBwD6iNy8jvv2nRmpiYYApLHXiLypp5r3HvwsWxMnv4PaZVZWTbmXKVGyKgstBf",
  "key14": "63CwgKacvMV7QwGji4qmuxUrNJfo8t5z29seCBSKomyng3oyXp6z1hrtGsojTdUHG2G9jgEWRxX8B1ZzXQBohozt",
  "key15": "4oyfr7nipBq6tWXinXyQNWUHEcGunXrihdq6RUFirG7sbEk4tY989D6jWawQDTSvkqwKTmqmdfYXi58qjiztkV89",
  "key16": "3ddY4EmBKutykwR5HbFrEYTpHcBhgqPjjzTwHLRiPyDvyiptb4rHCHvWNT7Q8V6FVnZeP97XiggiCpzL8k25iMG7",
  "key17": "3eJAExzmCYw6ieP6daCTZPMUkmtQmTSUoiskYSijsGrJBEyKRdXEmcYVLk6ZhTJ58LX7Wi6uTwcun5BWKcn4SpLu",
  "key18": "4MaEXnsQm12PEN2jKuGvHUmpcDtLWzjDm7ERsA63PsdxZFzYZZwMgDQouHNkXXtZPKRcbEv6LdADSCUrBywRgest",
  "key19": "5ft8JwajLo59Yn9c9Bbvh3TJE4HyLmzFcxSGkyZ5DuEvnR4wEp4HF5qrbQLc4Bqu3GiG1q6jwxtpMvnkdHT6CPNH",
  "key20": "31uLSeFzoPJAQZcCKsRaTpfxzi4eTPmPNR9s6Csx7m4y1E9ca8H74kgJ32saweiheTQJexnaRjXbxAShnFYFJwiX",
  "key21": "4pTRbnRbjvesDwbJsB754Bo2UyybgGJWiBie5P1gzRPtUSj2byP6GUygdMoKEbkUCr2t8a92SGgpBxRtfzbPbzFt",
  "key22": "2aSdAP3bC6oAKzmzkmCYh291GgcYeTy6YPno3L4e5U5mgwdCwAgVNyoNmRxGLNa8Px4aHDziDHsFrr9n7zQ7BVir",
  "key23": "6RGUzjpBpEXzeEF2XtYrYbPMkijgCMxjAy92CKFporxkwqJGCzV28foy6R4MxkQkD5mnKip8f6YmEgxVBHHNq9R",
  "key24": "4S8VU2YHuzNpTaaZA1woT5dnmTv5hn3b4HtVAHHcRKKAtNzg9RyirFYLj154ycM628mahdydvmteo32S9EqtbPQs",
  "key25": "ag7SonX7Z2woxLuhdXxUGRAb6fepBrDLfXiXn3gR5UYc2ciUoTsBEnrfUDdfwKymdYW1iaBMkdnBfc2Nng56TTw",
  "key26": "5jXwWm5RgKAUwyiqkYksm6PL5yruhRUvBJHorU5ERxxFQb3bpPeKvxb2mx1qMhUMXyJxsdPeUARDKoW5VMxfdxpz",
  "key27": "bGuWux3xaW6ZAjmVYMGuvdaSChdtsDx2P4gnVyNQQQBpKLQufR1WfVi4YN7kCqH6JSR3DiUnVcmUmn4h2ALcJkf",
  "key28": "4boBiidbSponLKisbdEjrC1VGNjzjfH8pi2icFiMuNU9LoomudqSfcfgyhSEsiGnmFgq4cWwYdHXhQRii83tUXz3",
  "key29": "2vfJGmK8NiKoAxkMSnPukDkkRUFv13ekikpe84Ae7gx6cnJPJedQALdJhG3oeprg7MiuKxB6o3AsWGUcZfKmc8Z",
  "key30": "2eeoKhpizM3wC8fZzC8FT1oTrbju6KcUBWmfUnd96zzYkdEPJKHMtnJfJR8Ysd7ZPsQf4AJKT37oy6QUNrRcPBh3",
  "key31": "2xjYC6E1hSSPPnR7UxsaM1rU3tkmxpcWQWNEH89SR4hWj5CDW5EnfzCc1bk5PRnzwYqt1hhtViMCEGa1TAKxp8w4",
  "key32": "57ij2AYkeeUQMnSyfHaiA8uAGgQquZs1wYdAJhn9zF7YmCg9y7k9YCbeuj3YtcRAjKGPQRoKE4vZ88ConDKTPNgt",
  "key33": "be15idmu5oECtcueedjW1ZP8PGJUT5NygS64qLXKJjM8kJGd5PrJbyv53ahXgXU2yY9ZpbZSTWcf273GxVnY5KW",
  "key34": "QmMRZe1zkxArg7AtywuxTGc6s2KEMEHfZJdKTrLd4DBPSPtCWWt2sNWsaGenSWXQKXkagzMfiVSLhHndD8bwZkT",
  "key35": "Z6FFC8whDepXWF3GMPrAYeSx8tt87i3BdiAMuSCRS88pLPb4DzvifUpfskgcjCwbUBKDqGnf36rNy99R39gYr5b",
  "key36": "3mGpxTr7BUi3oBBgS823oWxXhEDRWmqqV7nwBwKCdyfaufm7CLFmrnUd6kLqn7HtekFvZnLy9wdHDVL928ZgsKy6",
  "key37": "3kBQWdd9M5fMgFFcXSvKfhk5MwXHZ9HsDR2yKc7hshGtCqspkv8CPDwg75iaHXfCUaapjpaDRSYxBDJr3zvHCiK3"
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
