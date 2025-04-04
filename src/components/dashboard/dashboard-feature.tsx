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
    "5yXkLbFGxXhkEjWvfD2NMd41pZu5WBsB5fBMJSbjum3yNusJ9G2kcKtV5dehtnjkuCLwXr6Y5MfUUdjhoTe59eWk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sHwtzKxe8XN9wJak9SPkDdDJA56U4Xhjnwda3eJFa6X9rFNpSaVmKsRY2SpDTfubb2jpvuqJPbFPRaACR7kE87d",
  "key1": "ZZ6wTpRxjH7R4EpJUKjRKz4mJf9kNbpAQGsuXahseXfCVLW4wgNwWPFcnbrubvZxFyeTHNyxwZ8PpuvMT2AuZKL",
  "key2": "3bszxDkeDYo2TvhkM7Z4A5Hi3WMrmq4m5MoG7YxdWcYyhQqbbbsvwX2m1cf5gPTXkoPqz1tRReHJHCjtBUdH6gRt",
  "key3": "4Eq3BDpAZFd4VRAqXhivQTpvbrgcwJQdxZsdnkwyFuiU29rTDZiCURvVCBprqoQ5X89n1vP6ZZTG8SPbj4SLGV3Q",
  "key4": "3hr9NYvZ64MVPnNL72KC54BYwkZN4hR5hXhDoj373sTuuyEowB6MKwHNKVy8Uq16o6J1AV7kacxwkNdNBoVTNNqu",
  "key5": "3DndLchiXr2ai8DmYLjTYQpLdP9y2Qd6ANDykXdoXd7X4CzPRPZk53bRZtEBJ5yP8JEoJMG8mcrEsWm8uSAMEhB5",
  "key6": "5nEnv6FeRVKbVvMcMRH2dTeAACMn7m9cqACwSQANorHGFcNsMKPFEepnriT3zHXtVVJVtAs9RQzBGUHkYii3mQcS",
  "key7": "3ZhpkYNMUqdGc7WF9S7kcexfWPVfYf9Q6pLr2R9oWEy48yYmy5CepnfwsqpFurRPvQL4Wuv6BTAUuLC4HGAdzQw6",
  "key8": "W6f95a7zscZaJsHugS2DvtBn1i3d5TdHXhwznF6rMz4RaU82sn65ycGaZsRHo6Uh1fcbJFMUrsXSEWXYpo6J3gQ",
  "key9": "4G2VVADuy3VcBsreH6JWA9uA3QEkJsjZTNLJvSVkyGFZgw4eaGywF8R7yWXW3eTFTcrWNtJuvFWXz3nfHV2GmeHV",
  "key10": "5z5BN4P6zdWfXwnrU4nhXmz1D1Vc2GdN678qLttRLyhRExWLvikPqTMvRdAaVKDjCzhAgUJFmpApeNZepzqXDtoz",
  "key11": "4ofYL5Nyn7cWst8LQdVxxgjx73Q1VC2SwNEEKtGhz6LTnjJ574k7r5C3XFxkEsDTBvuaq2jVZ1GxRtApsBnFkcd8",
  "key12": "3mGgAhcfTom8EKzcRG9HDzLpkq3S4H1WYhHDjDbRWvUd1nDF4pVYGSmfLXYvZanRQNhTcySGWJ8zEoFbiuwfK4Lw",
  "key13": "4taPfHUnbxTPXm4tMFYRvTsyP6bCAKb6a7Wv8snfGvWzwNUCebduxS7oQtBTgWPwT3zxyp3TyA5xt5Whq5vPBGNv",
  "key14": "2VdySRzvUVJNYtY8qajMPUmBtZ2ov1T7wVwuWXGkbP2yuQsbAS1j9c5h1MfqtMJUjWG1a4FNsvTKKziCt7TLw6z3",
  "key15": "L4Mm36KrhFkq6k6StV7uYjgVYdn2pb9VfPgMdaJEgtFcSSZTsT5nm4pNX3PZUp1RtGYrsxwg3YowFYCpcDHTxkb",
  "key16": "2a98YJ98YoVVxDxFZd1ECFHdHcFfTBjFCpmdCmrykAJhpdULVmD4vVxkh4RbAKv9Dev3zpoxvscUvzzt3GGjuz5a",
  "key17": "3pbA2VQC3eJJHre8xUU3Hzf9heHekej5UPsxcUyXqoXKZp1aXpwt4yTvStdKQZ1uNY6qhhS6k5Qynq5yq7Qf7R1X",
  "key18": "4GkYjDZ1ceniC1ECkXNniM679DXe4KZhGRpNF4ZN76apJusJkar6QTHVEaBYoSTpPNSBdNgY6q5JAFQ6puK8MZTX",
  "key19": "5JUbikwP7uGQwrve8JtCb9vaymFj1XjfyUx2gu661g3NBoMrr3RzYcC6FVTxPhUwNDNCKE7x4v5X7JHonko5Kcnq",
  "key20": "2PTHVUhwhrH2CodvuwE3fEKijHDGQSndPJretyVBryFx6bfeyWLXti3Rxcn1ts8nm5yPdurd52pMt3ti7HTmdeG8",
  "key21": "4aD5ZgUPWuRiee54S9g3znc7bRM9ssVP1Ux4vH7DuJXPSamRVpVKo5sLKyJnZRPbvkW2orAueUdKGM8v3GGATnLd",
  "key22": "5BFwC2X873chSV6qNmD2hw4j2qVNPPSgFXLxbuPeM7VsV54ynuxHJNumkFreXj2Tbo4qbrwQFabK6q2eywH1Necr",
  "key23": "33KV5MrMLD7ycuMCBsFJbvVmB7WigjTcED5oxPSfmHviHQoWmhSV6Mf5o5HSCv4Mx2RzjsFbvqyDnFS1uS3iVUdU",
  "key24": "2gEUnwfkJdbXM6KEangHzUmgkdxsBoJb7EHfgaKFqEchpRd1E62v8DNGrSZEuvrD1TANQxBVE9m3i1C9KMEtXBqE",
  "key25": "3SPtKmZUsEZFpnEgniMdDsZN8sY8djN6cSUAR89YpDxmQYB3XDN6fPmoevnTtJL3pCvnJ2J9KjT8jkYgtvoyyiB7",
  "key26": "4mW3zhyYKgfLNo8DnUyCPcLy2FcjDbFLGYN5mfYzn72WtVdz3DssezgwjSf3fzccYoDHLq3TGBqwugRMf5gsR41Y",
  "key27": "2NSpnD3AeCtYPX5Vfhi8aFzRMMHGm5FCQHHVZEv4rtTcf9iaX51tjk9LLiL9HcjRDhLfVLTmaLHiEuNpUw4gWLn8",
  "key28": "rpkWEinVCxFYqxpvw31aKZJAZcycNmTD29YMwx4V75suSCSKZhMMeCFrvMZTec5DPnSbAwp1DiiW33FU5TuN7oB",
  "key29": "33QpY4hqi7GMRLgq66sGsYMJES72nhNpuo9w9J8AKxPNEpbAWBhpsZAz2b4QjoqUZshbKjLF8criWdDGtDNT7Ybt",
  "key30": "4YNFh71dcrSSsMxaHayyRPZWC4pbUgWCiWqGHfRQ3R2jbi3atPq7RjMzp8qA1B2523P7rkpfVWtrVCCUZybBdXBG",
  "key31": "4a9fQ1oQfM5HPgHcW77vkG4BLWhmKRoknzAzKXMc2Ki2Mfq5Y8p6drD15eYzwzZveGRnhfTVjQv3k9wSumYvYJP",
  "key32": "2fhhTxewoRF1Rs8UYjCYfvZhA2JTCcDvYSktczhSHzNGxMd7NYBLfsLq4Lmp1duBow6qMGDsCVsZN7AEG4wc7jUp",
  "key33": "22FoBuTDdTZTStBbhiMDgLUR151BoKdZxZ5UN4g9Lhsy85mU3ztjbxG96kQECQ6i381h9fpJjGdQ1xiEuDTJTQVc",
  "key34": "3M1SeFY2bqxGztTTUw3Fu72gDjbxiombFXVqvtHsxrNyCRH3ymtz5d7gfZ3efhymPHNS3ufwtSdwLEiu1SK2N3mr",
  "key35": "51hBxPuq3SUYjRyZi1Hh7HpTvMCftLCmN1w1znmAYAwkyikJtKxVGFQxHqAYt9hmi1DEKkSd2t38FR612ejqTzYS",
  "key36": "4Fxkmad6HJNKNi5PRpSQGteTJ67HpoHe6h57k8NLPsPGTiVJ9TpeRBxCzYA2DRPBxpazfc7khWLCZiqKu3zRTw9X",
  "key37": "4iH6cEARJJZxumJa3Hpyv3PHs4V3fczjGdthZpNW9jF4HYgarr8v5J9vBVA1N4b4cnPBBkBVuv8vupd5EEUsHE84",
  "key38": "MGcbspBU5x8TXEGxi7tJqVfEzACQq42bd1vGhaivXyoanWcjHaqmDXXUVV1fF8ZC6uxApgXysQupJhYwz33BgJz",
  "key39": "4JUViDYkp4udCvhpdwincjkrV4pamB8N2ikCg4Hf7WsBGo8y7rMHBzgfFyV7ssLN6cyYMf7pvhjd3RkHYSLaZDQZ",
  "key40": "3gyveUgmyujczDAJQDGD8cw1K6VZTT1NG8CqHiZGZX43qLshQmKjcFpcB8WB4WsefAyEfh6hs9vY6RZLifbPptRv",
  "key41": "s4zpZc71qaJE46WddH8yMg6nKmwemUd1m6G411YEtZWs4WXKypiQrSv6i3qCTwt55fbv8d1f91jwZwxLkSrbgBB",
  "key42": "RGwfCLD7k2bSGJjhuv5QhMn663XGi5eH4uBSoi8hQeB9GrR8ficNGCp85DLx17yHLcLLh4yE1FJcRkgcq8Z1VZs",
  "key43": "3fUUwucFgdQ1PGvqPJYan84bwPz9ASgESM39SmVkSXmyYaNV1qZhXvFoTrrS1rKpxgkTCpAEFV283Trc7ojtZDiw"
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
