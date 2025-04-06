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
    "3JhqJzYKqhaCTj9UP5MvjvinUVhqtXN5nGxx51jFiqr4wp2xfp2cFtcrjVtHzsejF2vcEfGZrmZ2NHx8BDZjv9yD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44DRh3JZc7cSCNA3DRbvEjz7VXuTiCDff449zZdS6Q5vUrA6PRRoMy119p58rpFDT6DH5n8GNXUd4aD8X879xrx3",
  "key1": "23XxUnfgt2bnoXyAv1yGuTSxM7oGyN8BZb1HXQAPkDBubQ2MrZZG6FzwxP5NBB2sebPzqm4Ca78Sq58qmjBycwuG",
  "key2": "4tECERzJbXPNh1Sxvnafg2ERY84pBNDFZPubNYGYgVudtPPewYw3vTt4P4VEfi4DKqo8SLa7cwzK37iRFwTcvwDY",
  "key3": "5Wt58rxUDRLRydivmd3KtkLyjtSu29U92mUbfTasEjUMhoeT6goEdQJe3Q9SqZeRVQBFc3eo6ijkQVBurEKKvbG5",
  "key4": "4p8XMGEmFc4UEaa9P3Dhtzgs7tk2fMrFNP9xFgh3BisTXbiuvk4rH1GWHgYyPn6857n3Tw944LhDnXS39nPAnsFh",
  "key5": "gdU9rUbMUDxhsHCPxTBs9ETW1nvuqdasL3yfNh7qscGJqsJ9pZN2BfPtRSvG73VqWVLVW1AAaqrMgszdgFVrCaY",
  "key6": "2avgwEnbzgHS7dhYJV31cBBywgwhtRd57BGS3UXpgojEhjDUsJ2pPh2GzpyZ84DKBkj3DHfSWDB6cWoXCb8RYV63",
  "key7": "2unp54XQExqggV9arwxXtSZc9sWChyAU8H6bhDwxcd86frfWhXRk4VF5dAUiTbHMoQf5QTto1e8MJZmHj3bzSRP6",
  "key8": "5C635kRfYdcZqzWd38MJEQx7h33H94xpobTC1xv7jWak9nL9ksfVh9jxyKiWWSL56924wPmHueQQjjePkPD4XVGj",
  "key9": "2ZcyEveg6LXbYxgnWWk195rEwfbLWuRG1CGBQZCbTWuS7z1oZ3km4Kh7za5aAoyb7k6jXmXgaiyHn8G4QHMmZ6Es",
  "key10": "2gTagFHbniWb5u95yASBTXYZDVKhWEJMXUPgTGwKUccVRLq2C3ztJ8MEHZ3PcPvt1DHUgKFMu9QaEksUcmJbmFhe",
  "key11": "5exsDssoNRrTrwtwfY1PwXw2fUtP9f1m9Vqr61XpYC3Tahht7cLhHmPmnAB6P5RNAyPzre7UCBdjk4kYUubFcDDv",
  "key12": "5ZN6d5PvMhHNtWv2Dpaex2HZnYCViJW3hZbX4CPmiHs3JePHbyUEhNCwYXpfhuvWzFF993YhFxCcRKLACEakfKEz",
  "key13": "xYV6URChFjVYVGK1Hb5sv77cfLzwU2bB8Uxk2s9zGp7u66KZCNM2QwNNDWVcpD6kgV8uzdpbacToWCDSCz9LeKw",
  "key14": "3YJmxhk2RyzqJJ21gjstCp7eY7vv9hJyz9BncC5rhcDWBQafugXmqnrkEkSKvnR64tHtie43KkJK2VBAvyxTzycU",
  "key15": "2c4PjxAB99mByacHZsaudWQ3tiNvSKVdTNP8He334dDBiaxkpnY9vTVXPnZRRx3vhkPnqDKF7ABtbEHYzX7wgEgo",
  "key16": "466pvLtgQ17gLA1Mh7FFrfcYdZQvM43xediJov3WAUMuzseULwBoiPdHP8QHVFu6ntL7BLhpcN8thYZq8ZqDeSRd",
  "key17": "5NjazY9yL1ummGtzLsbV5aQDf4jdv6oAdeuqbqkCpRbEat6qQfqKKbefDw6fSBmpL4K74HkL8MdXjGCyrAqzdHrf",
  "key18": "3P2w5BWHRefq7SvoXbw6JKZHkUpedcR1tWpKq5kFTZd9bM691Aqz2JuwKnLRR8k5ZZLPGKxsS8sE89KzVBYRjzuU",
  "key19": "rZ814B3Df3TCo4T4JmmyQso2e7hHorUPZVE6s4q5uLqdAk1GtbZuhFEh49tfFi44nVXrRtTqmrwfQ8EnGDJ4eD4",
  "key20": "3BneoTPLthRanxkp7vPjiPZBhiuaimoMMPG3QqfZN9ozRy32f2Kc9AvPsWu4sADNvrUiuMMw3C5zjs8eEwAdu78e",
  "key21": "5DpjwXPqFiAdrTG7awEeFRk4BRvk8yteNJw3nJ46pauGXTxC4xZaUHSNSsrje9w6wkWM97h5AZnQ8tC1YEfUG84W",
  "key22": "43b7RoqzHceya2CZPFJr6SXQXB81XoQUzkUKFpwuaYwLFSC5R5ePkE1X1Ubkp7cz5tchKvUG3sgWWwkW1c6XeKNY",
  "key23": "3xxmvzqGcUuxxt756b5ZrU2RyRaKucoV4U5j3TrkhUa538Z8CoJ2mxhXaqZx7PwmU6e3wmmXhJLqagkLHLKFXYYb",
  "key24": "FJGZRvDXBUrgNRWmyCMdQsxZriy5az36pa3akorG2vxFSwyJNEYoJewfgpM3GAWeT42MnBYxKFWRrSC8de4xMzJ",
  "key25": "qGDQKP82mvkftyJvFJHYhfMz4V5UsPedywezdDc9b4scb4jQnVTFA2bEH4ponbXky5LhGMFgym47mx1bhKXzHx1",
  "key26": "5h5pdgdYk3D2Zuvgb5wy3WuvgMW4KJ1FU3YY42RBScusRpiD4xUGMhu4MMniTp4LTahzgzUZuyybkD5SpqxNFcZP",
  "key27": "4fQxM6GheuNwEDNPwFw5wsquuzmPAcrJFQJ7qRqKSe6t7zBpJGj4GPzHKjrtG8TeLYSKJqgF67gh4aE6hoewhXnE",
  "key28": "RLzTRuHwei9zi6Uvcx6VFgoi3pvBFbiSiixZKQ45KHo17hjHcxaJ9x4kXW6ZbXeK6xs93HY8e8mSHx7p5F2WB4j",
  "key29": "2UCWu6YnoFuv9geMN5P2rBq7Sbkadn6a2XVsguVWXattxJ2K47GHt24syNajTidrpDcRCFQ1Z7ieYLk1nnpK8jmb",
  "key30": "5PgKbTnEX5Ws572CtX5ViUDrZADamb4YXe67hM8k5RqhSSRrzoCfyWQmEqwJu8dP6TCbBGqZhNU5ngRCkfgWRJ42",
  "key31": "4oTRtwC3p9yNfbdzRUmXPiAgqDnJfnV1gXSjF2i8opxzhgCF1fSUABhikf8uuFF2QBZySeusFdzj7sFcCyqtQ1LP",
  "key32": "57BS8M5ivUdtFjdD1VwhXrNYojVwm1Guq8uLq3woBCf7bVeuC9hJzRYzjbQnjgRPfQ9NgxCvZWe8RynVi2cBqsMq",
  "key33": "5XzwxrDztB4cd578PuVYqPSJ1qLtbwkpGaXJV3WoRt7MRNKGmyiX1oVCcWs1gkYC9gWdGAiqs34FVV7oP86RsDfv",
  "key34": "3aAmFqz8kcrTSo8Bzi2LLBtna96BFcRJQUXYn6maUacdC8XNdDQi3CfUQgaZeW1t86JSehp4VB7Kuwn8xTMCCTye",
  "key35": "5ANkCxbiXjtikuDNBBJu19eqJywGKoBJ9xF31cmQDWcciA6ShUmZHqMgMBr16ekn1y4u1pcJ6w9aaJ5XDwN1T2SC",
  "key36": "2czNTK3JrjcEPLHtkmtfAF4F1GG8WsiN8HQDcTv9mrzjZPd8QnNyVJfNf8n3rF4q27UGkpFhRTYudLz6FjfHpPSt",
  "key37": "37g947qt27Rog7N4hAdeCEGiLgPxkPjqjFSRwxfVLMfV4hjVyAaYB3GAA4o99RjuT63f3qmG6Tm3MjCi566UaXzg",
  "key38": "21CJYy7yaT1a7BGJK4cJSVRH9QR48GfVomzqqa3cUGxWb2sVcJ1JXnfWtCe3GLeRDMgu1TNHat1AncCSHh9Hsb8W",
  "key39": "5cuWXvHooPegHd24MWJdwkQcoVHLfwfF1h8B7D326bX5Lk9PVHZYP4aWrm5av1hwGBpjBwbQ6YBz32zCsdVthSmt",
  "key40": "1iHpm5DmgRzNmCMFKhQwU1UDLwsNqhUxJBmHE95nEEHL7KgSSccNG11TFEwYG4uaTHCEp5HxUx9sBuRs3vnKhtH",
  "key41": "3V2UKMncX6TZijuR6nMWos4zYkgYtZgQXHuS1ESncD77tUs2TQpqnvFa45sz5mUrD3QuXy68JZXkqhApykAJrTBs",
  "key42": "3wAzZgpEd5up9oz2BLsSUiwNtvz53Ve7SPBqkxBY24WMpST8dtcPWw8gLSffJAC9KkCS4f4Jzp9JDdCx43E5k7ZA",
  "key43": "Xqv5rGj3BRAEKRAgZrzGJ2rmUVtreHq328zvoEs4VSa3HLb4yPaRBpSjAKTL2zGWCfyEYN4oT6x5XWKfTN3TJPj",
  "key44": "56EpWeNWG29rrXt6LxZW6i452ibLY8y35thzkQNqkWs4mymS4UHSpa44PfSkAz5sxDzUUCzqej61obG9XNqPzEML",
  "key45": "5Mpc34zcVK6VYtUp881MRRepeanWoTwK4j3QowZAuUCszoqSbzZ85Wo44VEhjnDb8SQ4rbNVcwmEKQqWvfpfZKmJ",
  "key46": "3C1p1WFQG4HDKHeohVhdBVfbriyN2tmjuuHGKpNusBemxTwfa8qNHP7ejz3FQKdNQordQDXsQicUurk4AHC4izb9",
  "key47": "w1kfninaPVk5xD9bhsLV1zbDbBSjDHUJeivrm7aggzZhnwXus3fshYL49onqmmCdsqGVvJZkcF7YTmACsPjyofK"
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
