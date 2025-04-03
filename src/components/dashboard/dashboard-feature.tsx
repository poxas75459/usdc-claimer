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
    "sR8sgcYeKJwf8Yd3ahU4AasLdcmbSTmdGQ8fAdqKMRXAUuXz6T6R1d9vV9dfPRVQGgSbd9yWF8uNX1NT2Amh6kf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ldafi4FaK1dAAzBEceddDohuY2nnhcEua6L543Gtb83YC5yjfciaybb1UD5KrmyxoyJFuPUCJYhHbYaCmQ1moBw",
  "key1": "21z847Py6DpqM81TkrNSNkAfLLnXewyo13WCLnQFmz4HUpHomkGchY13Qa5Y64yLrchGJPWq3DeE1MdX31XoJ5To",
  "key2": "123FCCbMHPmiz3kwjWqFEzepDXKFvR2L4TzmUNexEGtreQysWMRYqYvZe9CF5ucLYC2ZNMK58AdvDQCmjxp1sgCV",
  "key3": "3H28Uw1zL9YQERo4exHa5qVWYrENfHHPWePz1WKJymr8sHHQiX43MxDZZWt1f75ULmtgQH124wz13Qvt2dQ6ZRtr",
  "key4": "4ugVYLp3gYVn4gNzidR8cMXzb7FjKJNjbLFtWhbKPZtFTSQYmXGxn7xGLDFZfkEResYaSPyWHvsXzV9XHMBnDWNh",
  "key5": "3XDRPqsar4RE2paZFbZEymdGdNCQjXzutfctNq55WuGXUF4Mar2cQ7qu3GKvkfN5FW54eyKpUkuz2MK7GS13aAS1",
  "key6": "2hkxuyijeBR8bHY493grdTrLYBRpTDP2CZXU4yvuji82z4ibKNqU1wYBQ92aqvW6jQBPcZMPphDVe93sTChS1ups",
  "key7": "2PCuuCGQidUTyFbMPyRQh19dvjwv6tvpiZJADWmq1v5TdDYxt5N4WssX1pqiu79AeeZGEBxjrgGfjreMrkV3Y2Sp",
  "key8": "Yv22UA7kcdAdoC8joMzGYrue9NHnC4RRaM4MV8tN2g6hSdLMWYKn4BpwMLNEmviyuervSRPXULoCw2zRoqWF1Zh",
  "key9": "3bjp2b6da7SUtqbkwdECfUJTREVgSd21tb1R9xw3cmaSVVXAnGWEZfB7S8WK9zftbRAX5jSVGy8ngqTsX2BwzAsn",
  "key10": "4rdUpRyM5oRiuyUUsPkTMgYMjh61t3oSyUvLzQVskXfEMhpDhmYfqm9Qc6maQ33nBKs3X9D5NgYStvRsbxu769KL",
  "key11": "2DPjx3owAURFpvFcHqEGRxsE1QjcbNgcLCFaULJN8G2ks4ELzfXNC1fGXZDYyWinGC5quEPeRSp5HkKVjVj9rDND",
  "key12": "22DXdCso3j7NBpPz6JwWjnuKtCJTc6uqjpwaUUUydcqcFefyBq9xpqBSRzrpNycRM31gtZCMfvV9Trt7bQ7N4iQq",
  "key13": "sjgmnATGWRSJ6X4kKrAKMdXiCgAeryB2MBGwJBanxzfsqKQSH1moeQL5coTQwi2oHcWMRuoiNJmM3VAVQB6SKrg",
  "key14": "2o2buLsAZPse2BAdv2Dre8VLih1dxeYsLFDcerL2KJwFgymH1EUDfzFSvAFNX7xHGCwN7xkd27vPoQJHK14Cv5E3",
  "key15": "63bBHbH88fu3LTZKNw2id495XLCGfrHk4Feu3M6dE1eAueQqKCTPw6favSViezybWhFzMUaSmoZR3XAwFxXqFV4P",
  "key16": "43i7ri57jAhufYJwpPRsANFA814jB8vmaYnuFBAXz4Ptitts845sYLXJ5cCwXcVkKZwcdwG9pUDp7HF89r8qruqe",
  "key17": "3ydBAAGdVg5Uk4FfgCNxU3dK3jhQJgWkVV35WbgL4EE4F7MTWRzydSCy4xEkH7g2EadjoqPqU99zo7ufYqCZMQJN",
  "key18": "iy8imRqwngsbn79AKvPh4FGrcoxUzWhw8gG3Xok77KsBYkpfFGLYw1tcgGaFXkAK2SNjQyEEB8WoR1kQkBTNo38",
  "key19": "6r4NdmmVC7C8Mk9uCYbLxoxkTW5FBuLPhgq73dcgqbLcCy9zHwWCvkVBwKWFRf3oF9jZsQXCnRSYo9eMmCaT2pU",
  "key20": "3mbSXfGQurvEjkDtykxiWWgqohrhyXU2NUdu9yaKhUFmarxpxG7mjUoNCxqfburBGXfVRsWSdnKSmK49AHoiXfMR",
  "key21": "5bwuy1vjmTEhvbmdaoB67FAhASK38zDTqHa62mVLtjm4fJbE2i3YAGfRBwWfMtfKLTWqy4XF4QbaC2DiMZATSwaz",
  "key22": "3UbXn6wQ5nxUfZb1p2Ch1iDgbBrzdEGi2gTLrRrkAo1htsPwxTudpceFcwgN9Q5RRgya7VJVfyQEGoJ7QiqW2sqn",
  "key23": "28hayzuCZuMJpYCEF9QYkqFGrgjsKZZR3KZVEf2rANcZr6hC8UBkF9G7b6PLqAK1mqmyPJcRTf8Q5VKqGvETp9xh",
  "key24": "wLPGRVwJJoibt2LQKTGUTejmC8GBxPZ8EH4YTNbWmVYtah63EifmfmaDMMQugqUVvf9C6Uzw9PFTnDUmFkLKMAx",
  "key25": "4PYJkfbaxv9dYMunh1sGEEj8FwtA44XUNqbYmmtRaQcXc2NygE49SW73J3Z6VRRMy4Du61RedgpZLr3vpmVhtEBe",
  "key26": "4qgrjex2TDTd1UWxfAKsDn3RoVqgaxoEiHWxRMWWdeAzRd8dkN2BMtiQ1n5wAX7k3kcbncDPwftbz72dJ328KKHZ",
  "key27": "54xr9K8s428Hpaa7AoXq9g1vGgBvenzKQ8cZEa3tVcwTjirJ3sjXAaTmpidu9ShAFmhFwxjmXrJsHSyu2sniqhqo",
  "key28": "4MrzSuhwVNM9Nx32dJ7iawkX6j6rNPkUMAuMgBgNSyukVrYSBSstfnkHDbFHwNsnJqijDpGdPFsVfTskv9q3mcCJ",
  "key29": "2x6rm9ECoL3LPorzRqYPc7QA6cAYJuuYAMPqq8fGLNeLVfiWja5P7RPSTdNhnik5cY6iCMjstMsnuZFp7cdnpoNv",
  "key30": "cNMDTAasL1NTT8vL1ocnvSbCQsLKDhnpkQQfBS1eDjwfqifpMNFqcjgH6wM2ZdVbrH7wEzygtpYco53dRS8uJ3p"
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
