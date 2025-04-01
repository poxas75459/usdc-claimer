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
    "3dLQmbHA7G1MuDM1Hi3yZsdNvEg5g8sBf9uqeQdMFex42DrxGuFCVvZC9du8sxzEXZUJajumxFBUUqdvCqnyiSre"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Tv2nDLZCUWYbGhGnehmco5GGyJm4VgioVJG644YANj7aDa2wiAHqYfvYwpvNng4Nq2fvRVEPCfJ2R7G5KNKcG51",
  "key1": "4LwWFLHZgzh1AdSwg9aGB7KY76nFJCgakkWdtpjq7zwLmWKqe4vH9oHnn2Jw8GLCQLEbaswdFB7xMwHJaFzz7FRT",
  "key2": "5DCZWjyzihXxehuxH7X7bgE3kS1fBXvoka6CnQgE9EK7XyRVsf1iGRyVVNinH2KBTBjT7wk4govHtCi9zrtUEKjy",
  "key3": "37137dhUFhvGPZsE1Jfkzy6eGZ1WbsP9zszaLiEWGLNUXpaMCyBdfwbvxP8o2q4Bgtq2zqbE8z5JyDs1kZ3SVyEL",
  "key4": "5ryFvt8wuHB9L9f1GUWF1Vkgs93skURNQMo9s4XiMXS2vFt1eV2cjDRs2RE77zwZPgVLhnwuFASPZZRLjdx8GZnP",
  "key5": "EF2WCDu4fLLvxD88XMu1ZGLVTa5zShQxfNX1xFtBYApfiNNJLvsN7YvmC77oLzK9DEkCES5FsURBipUvFjgsji6",
  "key6": "33KyS9Ddj1zPxMuMJ8Mb6y6twqHouii8YAnLZCAREcZa1R9RTCkbj9zfLeUfjkNpHRFrUvo9FdfZkikKeHkuyteC",
  "key7": "5ZiX7S9RZa38XiFnoxfrq5U4v82pEDTqC5XkyjQKw96PUcpwXAEAz5YWYmcJBZ7RsicUZGnrgNUGoBC3w1Ag5Xaw",
  "key8": "3LHCBXzPfcqqsFUrqgcEQdsP8ChAuMnBv5ARFLvRfdfdGAARCWci1fLiXeE3Ejqn6qozhn9iaQ7411jxqyKZCaZr",
  "key9": "4q2yRMDuaucKvjkrFNFLeF18uE17z1bdKAio1Nqgy8yb8NQw16xMBBmeozTf5DZaExWPksSxw1rPM1maAuifyub7",
  "key10": "2GzhC3o4sunCGcojvnn8JkDJuXVwvSwzxwXMYjTomqbSWXqcWfsKEhgcYpFJ61cyqtjhEoTjYpqNT3pWeMWUWqJs",
  "key11": "5MG6ifuXzJ5Y7ne14DoGpVU1U1r18WehHwE2dKC5ATYVZ6QBqpiDr8b5Rquz3wxZRjJVgNcS1UyDZcYG2nWrSAhm",
  "key12": "2RHKa48QJnXeAW6uBaDbRMRhepspcBTTjbcqgC4bYh9ZSg3uuhaBrJA85aQgrLLpdkc6VuwAbJ5DHXLV2stPfz1o",
  "key13": "4cJCAG2a92YgKUNTf5ktFh1hBgU7e4mN8k9VF8kqf9XAFHpUq7YSaHe8FDpHQHXRJfW6xXWdcAEPia6UztdzDjiX",
  "key14": "2yScGieN6zevCfbrstm3dyu7JGwgAoY28jb8upTaPHJxpMtm5nqEjz1MoF84sFpqQ9n7CQ7eBMXegztFbGnmFeTE",
  "key15": "3e1TsJkrr9XuNMVekzzNutDqURYcupDiXfDruWFn46eDtQhrG6RvkvJ85gV6PUfU1XAGm58L7e1MEx7ubX4CCit5",
  "key16": "3ewoW1BnCzmbcQMv6ku8K75X5W18bPzdsfU4iiekaeh5Hi3RQBeFQwrqvxNVX13KQKDkT1bos1UnMeVZPzAqAvPr",
  "key17": "2cMiFFyMj1aW6B36Wh13VYz6qH9y541YhdJV8uexnKbGciHTyCaEVquxEX3gaiR7xaGsYQXVrcPq73eYHU2nSCZU",
  "key18": "4eqGRkkzSKDN3AJHYxdLUiUrVsFwtDPZHtBc54gPGTPwhhXRNwc5eKzqkHSitcSmyELLmhFr6gQx3s4zhTrZMAS9",
  "key19": "jBdnGqEy4rsMEWNERQEN6E1j7ya5y5NwKUsTDXoVhXy8pNpjVWcfrLCYXovfhGYevcVgqRJ1aY5iuaQ6cVHwkr9",
  "key20": "2sJLvnEpjgTmqo1de6zYdE6Lin5d7Cn49s4oaz8iAXqYUyqyF2iQUnpkuy1VGAmKuSmBanBD3qTnaxtR5aSLcXad",
  "key21": "3hk1rUqzRjrWSPUm6qJ2QHM8hLkfhoXxiKNrtReKVorUgB5qZLH7PTMsN6ah3kjhSKPkhh9EBdBARPnEGsiDDdqw",
  "key22": "3DKVuNM6Pu1zo5HpctxMwQXnHwBeWPaExK9AjrLsxvVpYc3cY5rfvg7rGRQ37JVycinFdLCQxtXxyhCNCd2qTPLb",
  "key23": "3Db5o1Zx1J3QfLPpsKY5vFPvXZJWcwv4wb2M7s652nEP7aKPWyaQz4d8P5vFJR5keiU3o9yMcjwz1DmQu9nFE2b3",
  "key24": "2UimrhaqBb3tziYk81GNPsMugdFDCwvgwsqkG2bbfFGaFpSPVXpJ4kQ7GRGyNrum8rsCWac7YwBae1UsgVsgvQqe",
  "key25": "4Wfwa6AnJk9mZBsKG6en5QYJX2Kbp4q4fmtgFahHcqs2W4n57xjQc553aNgPCPfxsCFju78dD6RwwnZNZjBdzeJj",
  "key26": "qjrQeAJQufSKLe5YGrEaU1nmMnDudXh4fb6G1fCzDH1fUH51tDSjfn4k9PzW9S8TftuHcr8BGjTfiumWA9AjYCd",
  "key27": "2xBZxbph4UCggX9gu1HBneokDhaLuqr1WNJxr5rHTV3BfbwWUVCph7egce3GRkRy2doRDZmtC7tQknLw7y4BnYEi",
  "key28": "PVhZhfFejZpvyqPAkkMdQCPkhN37HTgkdvnHatWLeXHjupVPp6gBie7pGyfuRPNJNM6DNaGHb3S8UXm6RdH78uw",
  "key29": "4Vd96Zyh35YVFjNBSvuSzMoCMZZJbFca1pgDhn31gspxNv8a8WThECXqWVED8hbNJKexSazmwNtAF8f239vicBfR",
  "key30": "2DG6wGjpbEA6ftCXaUFiSPYWJjE7uX2z23ePXSUo3Zst8S45Dr8QojqpFmDVoc3mdh3VCvbciuADzPhEx2J7J1q4",
  "key31": "65rZx7Q1WTfk6fvzNkCZV2EjPA8mCayYchK9QpxUhzPRpjo84MCtHApFgp8skc5G71Mmp76aERV98Fs3Y2yBqXt9",
  "key32": "61oz2g2jhN7aDv7fox5Y9opoaqeW5cE3ynXhK9B9PbyH5XGrHiHjb198ZUSBf4HhSZK95XaExaXk9BDtYNC4LFCB"
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
