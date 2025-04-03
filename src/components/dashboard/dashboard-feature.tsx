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
    "3s7vZH9XLWz7hvL7MoJwLjjRtyq5QwDmB7q1ZYwdp9KJxwZEpU3k7BVi9USwA3QEAAb953MCZ87QCBQH8szt71Ni"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tLBdY2n5ziC1GiTG63b6Zfh7GXxSVToRyPNMyJb7ezEB3vYEiMWC3PgM2SZjJa83tUSk3QLcWkQvPVfJ363Kfjm",
  "key1": "2sYCDCMbJya92RadFhnq4XetTKtEyci3twdka7u1bMTybKjeHw8MaKe94BRADWvGhPxWZevPFyHhRuyBmbJLrNEp",
  "key2": "2zJDWKMKYnam7fRNBEtyYt68nrQKjSaac6VvntWd94tahYEnjgaFhUWk8Y6Ks8jwZ2PVt14yv1hzJcDis4db7u2X",
  "key3": "3R1YCtsV3KXmKi7ngkEt1J39VNLGkdtrvCDwXUH2ppr9sCaAV3sRhXWugsqZZ3MXukchaCPJiSwgKnHvHWn4qCzj",
  "key4": "2gKdqyMWqvkMhNzHNgaGJu6dxYeaCWQpvB6D7gU6529nKE4T5w8XR8GExz3SFBGD7f4fUaNumPxE3vPprHaEHtcj",
  "key5": "aT14JsjaFjAAyLByXrM1WajfwoWJVGmCiRBEf9rqsTmbzqEg1S5AZhvfFs8iKbjZcJohHE8sQtpfaWKj1FTyUoP",
  "key6": "3pDYn992GFSxZFWgrrpbexygLe8Hg4TWAo3wFqcCMK5gVc41QLRTuBDMjxRuekNdfJHSGGZhsAgpuVmDne8jusCC",
  "key7": "gkhjeB1inJoFR8Mk213To3WiE7sombMGiZeBVv9KfmykF1ChAJgFgosFNzFadwfhQQrxKvfGLB6mxrAH9fxgNc8",
  "key8": "3xy71CqWtYdzDL37oTgsZKsfuxnsFvpJStyRXqkxK9F1krZULcgpKPFnQB6a2LdRoaKSFS23ZcLHkPkoAWmypnNs",
  "key9": "2dhrdepzYfXdUZhYFH5hcfHjmkpDY2vhemgsMHfFJ2er8HDQUSeMNM8imbZwqbzYn9tcn6JFCA8Yw2FfZXSaMjcY",
  "key10": "3DC5xthX5gsPR7pSvJBeTZmPc76ZY2t2G3utJnp6HTj6Eh9itbprkxZkjarmM9Ue6jJU6rZC5r8WewPZocv18q8t",
  "key11": "3DVcLW3j6rQuJduCNvxfcM1UyCYhvoMyngi5YPiMwBNtbyFb1hiYY1vXNAmDP5T9kGgNoh8jybY4XzKax2h4Q1wr",
  "key12": "5pKVtqNwcbPSi2TzEkvDvDd9nhCPDgQMELBLZ9tuRaSWnwdkanXqsWmStrgBogs6rUYE9Jjuyprc4WQ8EYAMM6d9",
  "key13": "zUontidBXQ5UMg4Uk7shQh3a3q5bWeDPo2GZyfMkmm9NryGMqhH2duoUhdNGH7bVBpehHu8bEdfLmTBjqVLXV3L",
  "key14": "5MWWkccpM5zC4q76sB67b35WzKCCEPCMTQVHoWziSVTwebHq4B6cRbGKu1nzzmvTRsFhezkmJDdZV7Zk3krTCxyU",
  "key15": "3APpDEbCuY6BKdZ5zjsJyRaUmNZN6AmtyJai2eGmA62nEYqoKWhPMHfhBS1otK4LH5F8Sr82uUpdNmFsddRxPz7z",
  "key16": "4bytGX1RdNzLLq4Ad7d9pJGFTMjUCwGsa6XMjyuXPDNkuKeLdUDd3hFthQFSJiquu7fURTkKvjopkqmHn9fD2YKt",
  "key17": "4w4RQMmFNftqC547fXHqLKvJXhz6UzVYAbMUz2ptmUq2XxYLoPpayVaj5Ta4yzRSzW7eS8KVQzgqpr1WX1L4zcLy",
  "key18": "5KSyQi6Kt2SMeDF3BYwxgamcVZqDxeR4aigkhCyuzyDJzqSj7wHhmx6RU1oD3Yyx2aDt5JYp7qaoUsRbe9w9nGtf",
  "key19": "3Rib6hrepK5oL1tP9DTpS9mJc3FP4ZgoJEfffqHkDuc6M76Tq2yMY3XWLv4rEqh1LLpSzXumxLdYdADpJWHS7Ehh",
  "key20": "vFEzjpqpiJdSAXJ4K2JYDgRorhYYmoG7ZZyT7sFUoudAdQx3rUjdYume32XDArMPCnLeAechjaRKGvYY4jNTdZY",
  "key21": "bowXWeCSkg69QuhWNr6hz7cQ92kM1tLJD3ex98tB6bpyGuR3q7YBudXYVzVq9wJHScaf5xt4RcQwHRn4R7Lurae",
  "key22": "5bFZwQ2xwd2VSjzt1cboWhWxZNbZaBH5ijw4NvXQFvPAiZZsF3Kse9mpDmFXkPUi32PoNnLQPE5C1uqDqZcd3RaW",
  "key23": "21m78yZViDAvG6ao4ndQZjB45RAz7nFDuYGauU55CBu2y973mfQFdTuU8iueKwZ4yheoabGVp13G7bnFc4NQ3MKq",
  "key24": "CWkyQ9VMECFcfHk4srfx13PhPBuKdsyEUsa8mck9SCE935iyPnQzU6j3koWzizJf7ppiiRazWWx744bgBAm9L3y",
  "key25": "4AzDmek9iRB2BZ974xcatw7p3Bz6W98MLz1RJnZ2FZYpoJcKNagx9af8U22wSAnWvUkHtTkxTSHTWRZ8Qri1aBs6",
  "key26": "2iELcaLqm7C5mhSwqcFw4mmffcBtZoahMqLSvrdbd863A5pyT8j9vpWut2x7XgHyiugdmLmMBTqeYiZf9N5yqjip",
  "key27": "4VSZZq1AZcE5nUisA8C9zhjNKAvSF1V52aNufQgRc73kyX82zjrxKbYnyuWwVt1vQouKhsEkm1U8YbzjSL2tjFVZ",
  "key28": "5BWn1aKLLGpoat1SaM9TeWWacHrAAEJnLJnEX7LJJRQ7vnHr62PmPKcTJnzXeMATjxxGHichNR7uLWR6dpbwYLXm",
  "key29": "2AU2UcNXZiiezghWkL8zUWfk7GPhyGm9fxk4WQxrLcCE8nt4n4iE8ASjNSjiEr2e8SBr8PhRYZrvfxxd9ipwyXff",
  "key30": "AUGnbhWjJLNe2bXeKw1MVtcpEiDJq5VLiikmEbeUUe34ZNyTeMdPgyvqaYAoHaMPShYi9U6KVWm8tBa6cVDCaGo",
  "key31": "3LpbpAd3hTjSa3CXKtVKyyt6utYZnhGGDzbzsZhv23Q3EAE7Q8phg5WWVmmXwjQHjrJ6Hky1a1u8WTAL3fYSYH12",
  "key32": "2zGKAn9U3cpDNj5zzMEmcQP9RsJSWh1XxeJzxbeQHN3fMDKyJGCSNacd3woq5xS6YXD9ktudraGHc8rGYY5StHFh",
  "key33": "4cyGYFinBNAAFVEYB4xAvLbzPoJdzuKmvSg7sRqZ7bNT6Z6M5PbTitxC3STuaKPdgBJmFJHgoX5i6crJjUuSaz9a",
  "key34": "4fMw4iH3NE376BNpTDo8tTg1o3Z4VUtsiQqQzCaFqwwLLECYHB7mmRG7AZyEoMfmwkGdGvuC2BNdEwEj57NassBo",
  "key35": "4jg7XFDrZc1ZFESRivowrQsiygG1KofUKFegYSjKSvoRZ9xnvLavPXextZLDrSHNUHhAaPyfs1UfTToU7kgbmAqt",
  "key36": "61mj7PYd5hqJ4KURmLw2aAUsPP1TLkR95VCvMuHWBkC2F3Ww3Y4UwGNvKMC4QoNQgmjJM8jNpCffiUbtPzjvUZdH",
  "key37": "5m4JroKT6TtyxKchnxNgksjrJMDYyBhMWRD4srHohcmsHxuiDWfWqj5VEU51TC4UJ2VkXvsYCdg8rDFyK9fXozmr",
  "key38": "5bfsgWQhaSA1ctDSLeXH369RoHMbxF6bdgJp5QFJcjc3cEdWRz5PcMvcA9ZkUgGC9tr7ihFipCsNp64bH6YBAMg6",
  "key39": "4arjc5qDvgsyGB6YZSp6vfGudrqndtRxp3iwUAhNM5XUK1pTrpSfP2Ww6kpGLq1Di9NeQxkWE8knfv9g1CJZwKtx",
  "key40": "4ffkFDnw3s2jkRhgKS3bfaaAwnj842B7W5cZdDuMCTGM2Nuz3AF2CtX2QVLp5CgvtY4LhuJNHXC3kacvLLVhvYNz",
  "key41": "26tvtxkdRmYkLXCHgkbHTpxsydDHu18B4uPmmgNjiU86grtMczLfg4hV25AeXGKQhfB3m3LW5TvJbyye2p4kSEgs"
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
