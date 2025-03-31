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
    "4cTtZNoLqhsscJSEm4k8vQ6MJWAX5hBvvngmCbS4UrQ1nBrSZEA1TKQMVo8w5k5EPqhcpJwWUwzHvQc4CWbVk4KW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28Sot68JWPeuso6eAi3eRheLuSJGhraFnkRADp4DDnpYgNxeUESw8urBiD8hN2x9uSb59fCTyFbkq9HssUSzFWXZ",
  "key1": "4KhyW6ZRWmAUMkHja6bYuMZ3H5sn7x2iAadgC7ZWc5aZCJmB6trtU1bhYzdGWQivqBcK9H15Pytji5DJT4Bo9bK3",
  "key2": "5yks26RYw8GAaRXKSCjX3iufWRN5c7q21a2nRYWf8z6AxJvvCHUuCncLBisPLUr9kVpvbE9QoeydMvKH3z7zHdCZ",
  "key3": "2DM9M2rcFw1JbhbPGJHDN3GH31Do81LNXJchhVh7c7g6BMK2eqVTAdB57dMVLHZzCQZBUp6XvBEVnjuvh8MgSjDa",
  "key4": "BirLb2zArenwBgdXjQzrNpLFkYUD7u6osV1cd3Bx7KjgtecwjKfFdJYXJxjWexLRdBywNEUu99J5CT15s2CB81A",
  "key5": "4cMbEG7n8YZtLZBBwUMf5hBRJbg7MuX7rKC9EfpVMTynEp729uafGex8nJoutzbo68bdD15eaCBqCe4ZBCsaEx7S",
  "key6": "DhFai2YrB8rhNmnRX9ZVc4SZ8Bwg1ZAETSB2w3T8bNWPWEvu9TCzSfvRzhP11cJgfVjkdsU2r5GRKDAZruPcQg3",
  "key7": "5pAoieyoKZ5RoSY6EvZqqzFDbgfRANSA9LxutaxFRcZiQVNvmRZCyS62sNtjrnMvdzKQQChmtzRE1zEArMgmHMh1",
  "key8": "2CugC87j1nznxoQtoKfkesbZM5UkKfbXi2CFNndBvFVm79YthEDJavNxkmgtXsTbFGUQW6HacHSRUkeC4WueYXUX",
  "key9": "2pQeNRW2kwa7ViZToUBxuJrFpUGygukd6ASKMqvTjpynW1ua3Ae4ZZd3iQdp5cAQvXfQRnhP3fkgvGk9anTZKN37",
  "key10": "4JzTYHQBLLZXHgEQzKgaZ2c4BD2HquCe9KghsFmYUWD4eURcQ9VQYRAvdFBo4Fvcj9rCabQnnqPTwchwtL6HNRYQ",
  "key11": "58756Nb6xQ7j7cUfNWrD7DvL5iWSDT2nRaJUBXDmEU31o5GfPEG2ExJz5A3aukUcgfw4haFdyTgyXBqwTi83ZFdb",
  "key12": "342oJd5wrtQrNMVRsg64kbkNHEmos1sHe18QVYYVPHpYgVSQAGsy17kJFcLoYsGWG7pLAocB3CBJ7XEVHWSMCRsY",
  "key13": "36wtwzh7uoVKc8VV5LZZo3MaLZkQA8a8CLHj2mEV2ChSq7e3azCwTppeBYtNsEKK2dkVSqevdpnqwasQkg8XBcFn",
  "key14": "3d2kyy8fSy4X3WCSb7pu84vvQvUhX9daQ3NWSHNvnLpecaVirT9TKWyuwM639gYbywWp5AohnoniFzJkA4dMQwKD",
  "key15": "2UkmPt5JEAMD8NkruPeD7GKGc1y8ApuYQLEoAywbVacqx8nygUwv2aatCRJNiLYp1jfjVz55CJRFJTFw3Wosy4zY",
  "key16": "5KQ6Pgia1HR5Ex73Yp7hfSJmxpc8yewiUf14HN3NL9hu5DJAY9KZXiycXMoQeUpSbDHi3Gg6jQ64V8E4JXUbnckE",
  "key17": "kWTrKeSswccAwEhkBJ5oMXg5cuLYJfcddc6ggjYZCQQVX5oAhh7NNUiKAateYGVifGSSrU5HehktoAXu4udFiw5",
  "key18": "5vgLr4MJMmibxESFBdc7mGgcP92Msdx4hqnNW6v6THh4HnFDRd8TWmBR64Xackn4sQ9NWu1eNzEFK6CX5WeL2FMR",
  "key19": "5k4Ev6AszUBEM8Xxfwf4496KUs9q7QmvrAx6EZeuZgTdpXHdTAGP1G3TYqUEKxjMXZ4uwYC84vRpjLNbJvKBQLX4",
  "key20": "4XAPQS8zC1AfKWWksa4ZwJGs7ZMUywHEMUNNFXNeJzK5LXFBaXQssHmmqFPv4VGAnxxAKR2kCrepd6JpDrykFvTq",
  "key21": "4n8vLwgYGFk6ZvnyXEFc7jLpZs1yiSUHEBA3yXnDraEj3taZJLZDDWZx6J6AfiWZsgiSdf4kRmk73tLM5WSQiHUN",
  "key22": "3j4hnWnYk2EHZgc4SPSfAuKqDyTGAcpmfEVgxu9hHMJV5s5Nvp9J5m2iSJf8sNJ8bUJD3iNQpK28tzfPMhEPPo1D",
  "key23": "2EwYV4c3YovcoWfTnoFZLTsz1JxBKtn4rWU3sP8VedfN59BAG7K7cxbgv8KNibQvR7GQt5Kz9KquvSiiGLBveNo8",
  "key24": "3viLtmrz7r7VmoVLHqUuLyrjA5K9jUjuFPGRBCmfK3jx4zPV1NcCy2vstLUvL955A3Vsp92uaDiU9JUNYTJJyffq",
  "key25": "4tUZqPe6v8Q9GbXcLSuTgknE6HYzXnJwWNzU2rHFW8z3VZvFitKJYLAQSGH69SbrSgAMubVyMcSE3p3ngmvjyuey",
  "key26": "CSNubhCeBrfo9XyRf7mssJD875QhVZaecgw5VtoZPVpPQji7WxVNsjKaBCa9LfxCGnTNeMK931CqB7fiGL3ntpC",
  "key27": "5tete4hqrDevwRe4fFq65yk6K9ik7c3K2drYyavysbQfWWjyaaQRDjwMoEypwjk99aVz8qjwYsV4uEXA2d52x2j2",
  "key28": "2rSULpmXiCBjR75G3ALdQoUqMEYdSp4tX1qiPR935Pr3am5XuP75XPoexDqYQa7NbKdxqHsewz2BTgutLKvS7rNf",
  "key29": "56vUfmdxZzDox2nBY8QxkV874wzaUF7KrFe6WdM5wchZC482b8hQyQtPgd4wwiCJMmFZni4Gv8ML6bDpfZa3b3yN",
  "key30": "2s54HYk3dJUw3KohfH1Rs2XYmpLPYCtAow6imYFpj3wQXWbaBAaZWkCAVfqQ6naEYrruecqCLtdzKE8ZiCeduWDi",
  "key31": "27GFs64bsZRwABpUBGa6uKeaF7s461atsykMvZbrYsqaJwKVWbyS4Rk29X8vXgsEYM82Nr3zKuWa6Di4p8Bvrxk8",
  "key32": "2XWB2FvK5Sm6ck3t38H9s8kA8ignmGp4mU671RQf8YCs2NYcJePqMtcywzUb486Ds6DAFRje4HativLp2SaM5B5Z",
  "key33": "5QsY3mZxSJn2wZHSXiaNcYBMoQF1FkhXvHJytsx6rf6rNNRnn3bAVze6T2g11r8Lj32rtabyiXyEdEvDJXfxqwSV",
  "key34": "2oM3gotYuEKptbexagvArYd9a6UPMfaE6Arih5uAMYC9tKQ6NzVmRRU5hkdQJTUEw9gLCqogCZGgTY7sWqjcnzpf",
  "key35": "5KeknRv16CJFrcAmMnTQ1UPn5wvhcu5He8U5mWQjBUUvYq7MB5z7B2JMab4KiJTEKsQ7mSSw5Z7Ga7fXsHNAYUzD",
  "key36": "3iPMKMN4sUFRhXXawPyiwsYCtvgCvuWKzynVeBbggD54fHEytfx3zHJpXR19sYFjTriCensXTR4K6HFEvu1sTjys",
  "key37": "45QDtFthCRqtxXPsstYrU7MW99F8W2zWJnzdYdr3NVWzS7VxqVNJgkUdTsyztz8vPSHdjasBkuGw8uBkBfhDoy1Y",
  "key38": "5F5NYWGefCtSXTdux6JMZ5NwEB7dFcC1Wh841CeN4ginWMf2obEM9RjWaT1TaPxLD4X4QvXqAk2EuQNqPCcDmdvp",
  "key39": "4FCn3dFBAydRZTBowaWPn31wjXQRDP8SXYKoqwJbfzhkGVTyEDK2WdSBCWgkSC4q8hJk4bRPqs8ZVtEvch5kLcmg",
  "key40": "2ED6bueeD4ttZ4YWP1W82Wfn2xxY3zuAeuYnQqKXnebpqHCXhgzz79FrUdudGtMT71HMMVxtLE8hw3ZcmJNYtR1n",
  "key41": "5L8Ln915gadtV2f8rKgCXq7uwM7gYiHi4fzYLwXoszHMz1HQVDhrhfU2fWEEXipVRwNTJT2BZr1tgZfSXjPMkLqd",
  "key42": "59ZAkEYWFBXaF4Kw521PpA3UCA9sc48c5Whk34XeM6V3H5AjvqwK3st4nwExBorzfoGD1azbRzuWmqPJDyweDPBz",
  "key43": "5i1kPLz9VxAVkcFXPsmn9M1aLprxFt94UL5e3EniGa5mWRyznnPhf3eUrhE3ygBwJbXNyRKeS4e1mJj6Dp9uMqig",
  "key44": "2nnP2MJNEEh5hD4eW767dchZGmfqvpQ6gnF7GsX5hkVg334vTiqum4h3Qsjq65ymWMUpnJTopkGDuuuPDmtLrZiF",
  "key45": "3eM8GeFM5bTZAdCMcicgNCy4bmScgqyXYPN5CG4kqNGJfB9fJD1REqM5mab4Nu3iwSXjAnbAhLFs5NieerqGkpDm",
  "key46": "4PGyQUbcstcgUxNYDYWAbmWLuVWcJF7Z1U9KVAvnGegPPewtPKuWUHwRQTZqmZm4heujfJaH4xidtZraKgw3BCJ7"
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
