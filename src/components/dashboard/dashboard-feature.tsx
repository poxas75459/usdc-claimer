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
    "44uzz6GuAfbx6JdfGPZgQtRQ2oFpKxCyYw638CQE1YQbJyDLV7CbbQHbUhBrdrDE2rqvkutHyTVxoyh51bkvuWmF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DcEjugSY6h9nZCvefWPd5MD6K4uFVT7RhB1GRDtoth6xzAob1w8uiy4VLZFy2cxEYB7xstDgbr8uZZqTFEQ7QQ3",
  "key1": "5et97dR2jh5ybSbVFyLhCnJgUPKESE1SGC9mWg4JHP6qt1rBxabGGvgABAQHmTJ718LcP75Pz9LGyAJ2j8qQhUML",
  "key2": "5JJ1Ldd8sbBbzRkK1CHasGqG5FwaSkxzv1DdnSDEMyjQcdAnoAKxdMWQAp2MTJKkLWEwXZzktoAdpnEvQMzRi3om",
  "key3": "53vZtJZLyNKxBEJEiMX5d3UJNHBERiHZyvo6uqHUKzpaMfrTVvqJF95nLFA8od4vt4wFajaScwuxcsiVZb1D45UX",
  "key4": "511X6SPHLkEb3gdkSepsbLHLQkAGDLA6HK7bFbbxqS9vmr7pwgAxz71JhkjvkKsPKTkRw3mjvMEDCsMVV2SaEmCX",
  "key5": "5bivZRZvGEio8Z45z4jcMNTKS2J3EAnUnwtJnYphbRLQqgKEq6JEFSgCzEz83uKZjX4fFR9nTeutPvKGiqwvKU7z",
  "key6": "2YSXhHdyBYjEXiLPTb8C6dhPWe2iUoYkZw4yoAZomaxg9F7kF9mAzNbyV6znsMMotFZxFo1vMoxtuAPm51G74sBS",
  "key7": "3fu6kvEGY33aKxjSpcsQuwebrWWaoYTUyt1FhjbrsR8awEunH3MW9TH9fuKBJcoWZu2ZhEBRMmAEdNturwVnEBTT",
  "key8": "5G7hN8hYPRXMcbX6LiDjqhw33uEkn5o7abYzJ4qYB9aHSmcS1e6NAMpyRPqwVPKBWznoMYoJQVfKwbmwTemXo8cU",
  "key9": "5La8kk6zriQW1EEq7eWrQLQGrp5bDPtRHWYH8odHyMDkx6eDyqxNgt3Ft29Wcf5oeCCEVUUBrsVBHopim2PDNm6h",
  "key10": "4HLqashiszwYrvVWX5f4aeJVn8XcS8zMTgVD2qTUvXMK1JaXVQvkMCMnDPQi2gv6FSZu2WR6dA5ihJEzee9uDnrp",
  "key11": "3zsG4jX1oZzz3Ge9U9L1ZWbbjv2PGt89t9niuvqMgd7B5A8DgVHcqSKJgW5odGJys81PFDb4Ypn1pFbzRy865hcb",
  "key12": "4p8jYE6jSk5VHPtFEMH8nVcM1KPzRYZ6MAgYjVnWVHuAAM3cFf1XGr7jyonZUyu1fHS3HfmRkPphC4uRzry2NFri",
  "key13": "UsDkeUcjyZH7CVJStAFuXGkCwBqNbW6febRvxh7Xj6ebdFDVAJRzxpeCHsyRrmgPfRB6nKXkGraGnP8yusi9f98",
  "key14": "2qz89YXD7BAgmKxVS6GkhDUtuag5w6xy6p8mohFfMwBAu4N4GbKD5SewM7DbbAzdawbj1FqCA67UrEKu778yjPxL",
  "key15": "23d9gdW6nYSzaL1iJfVxJ6kCQJUTUCg4rPUdZ9mEFmToT7hTvwhqeteTxo9wgRyGpee35DPuPgw4C69KPm97Hcfw",
  "key16": "g2UC4DHY9JP3yy1DDiecKBEzonX9T676Z1N7vTWWQPnyQYW5rdBnUfredw9F4nkUJvrddipuBa6cC82nGHrpgfa",
  "key17": "3QJiH2nuC2cmELDCcoHa2GTNmhobs5NaiCegWCWUmyMJPgret7yQHwSbTChV8ZMayLEncbs2n7dW59jrQUGHw5dT",
  "key18": "3aF4yhqjNs16CwSQ7mKbrmWYCQHHC1mZ85Do7THpx9fFsXhK9vTSnBQ33K6tD33iKghntCpXJ2DbSZZEvDCvckt8",
  "key19": "cFZLVyLjUe46d1Gb7SuLWgSVCr2xvNEBhd8kBd9E8THaJYNzgPuqFG49JEnRHnaWpdmZUm4jaMZcUb2Y4t3ZL3m",
  "key20": "KswPp8ib1pnErfbgPj1J3Vz9eKq5dKFJZM9WT5eJ8e1qVR9TX5tpGfzKU9kKjNGb4pEr8LX7jhZXJfhkixjhiVu",
  "key21": "2fGdHXdbmdCfhuGjAgaEMnnBna6SMSMR9AErLjW8jUS3d1PKsxoX4Yv7iLfjweEu9mkgC76UCgAp7CrLKczfKJRd",
  "key22": "4soQwVTC45VqJ56fFLGPXZJbBqTJBghgANg8ee3gKwnfYfVP84hz1Ar8Z5qivTrKTKAir9gx1DRnEnw13ySVDo1v",
  "key23": "rkuJ33WCLrZLALdtmNajhGyKTdYL37Tt7ceGgJb3zEdUVR2J7GCZRYcB52Gnw8mxB5z84Mzmfx24koUKRHbbe3t",
  "key24": "55Rf9UM44ou27XvZiXYF6hn8CekBvk7RwVFCca2EgqGCh26ToHakddrsx2FL8aSkQzg7wWGoCVhUoQR937JGQavv",
  "key25": "2vTGLa6XYJe7iCYzATwTggfxhiKcKpjfAgeNBFqPEk6foq3kkcNeZ1bKf6gXuSE5zVbQ3bnH1vJ6hF7qJMKttcVY",
  "key26": "3VGYuNyi8ccap8iTQ7RQGcAnxTad5jT4po8XLwjw4XoybhK1UjwsueVDackNLjWPe8e7PG4Ys5bCRmAELs65WGFj",
  "key27": "5XAiG9Ch2JY7o74VBBhsfZnbnZihKM24sTUCa3Z9hTEtUwP4VnpiuHmi8ypYQqX6YLNfRYdVp4ZPcGqpmFdH9KV7",
  "key28": "7rjHQBstmvYbKzRPLnGzGNtYk8JJe6GcAXPpz4U1ed8twAdxq2guuETYerfdGgdrinXi3BapKLQHf8GHeQKTQja",
  "key29": "43bbzKhDi8kNxrUetRU6qRu9BoTVMkiNCRjzUE34B8WLSokozXUP1Jh9GYhA9FvGjRSpRYe471sCpmhF7wr53kLe",
  "key30": "2eUQFbDLxn56KWHbADfjgfesnGigk6P2zM8RLunPBrTGMGMFrervS2d7vrD9BaQQ6sxgNxLx32w3rcMN2og6jPbz",
  "key31": "4vk9W3dcdedCcDtZzGjQRYu1zetahSXeij1KdGhjMbZ35CRw2MsVntKQHJk2E8K7uwJsbfnxZm4iVFZYebU2rqJ4",
  "key32": "214caZnZWTacLa8GsSB1ijAeMM83LY3acYKmttSJGwPDCYMyXKFdY3pa3FVdi7kwfqDt3QfLmqXvBuZ811JytmUT",
  "key33": "a9RGKx7No2osGWXZtFiTJ6DFmsr887gNF25W73CuDPfQ3iDDGSR2evnYiTCSKatwjEkFMF1Jx6z1ruyDePZNWds",
  "key34": "36PB6WBUb98cA313mCfBaFdd8pNpgXgyjaXM9Buo13VRRzGsv6U5NTiT1AKftvZvuY2P5a6Y9n26ihBFcsjQKEk2",
  "key35": "2b8cCVXeiNBfdG2KK2M2HigVRTDKR8jNHpKmemcEUu9FgxvuotT6CxH8xeaMc74rNNQy9Df5LgjYxSB1VdvmruD4",
  "key36": "52K8vimFWU3gVJxPcQKDLSJnUCCKaGPDpNncaLvJaZFdZH3mRBRrBYVRBWiPnzH2WASeV1c2b4BJfoPuVnBLBLBV",
  "key37": "3bRYg6R3btB2d29qKGgeRFT6rJzRwpiLqnXtvMryFA16y5PSokamf1YZEUEVAkF8ogFcb4ZucsrJi8DKh4qebdm",
  "key38": "66Vmm9euQf2RaBXGQuztkty27rPrLcRF6GG9civVxYiycXCdoS19ZdhGvB4ZQYu7aWRbcnymRMD7dkPx8iaUBDBK",
  "key39": "xK6xjjiXc4mh4qg4Zfexyxwmf2NRzNeGnpogSkpo4U4LfHJCbpgPACk95msbEXvqZCWbgzUqirDT5mLMpgZ5n2P",
  "key40": "PcxHm8q1htkpB9atf4VL2p5uFgjhuxC7X42RPEt17NoUMGfkG57yCw7jDJjFLxU9TpjrpB2uHSJQ6vfMzzkd5dz",
  "key41": "3pJxE7FC8ZHQ1RZxPk9d4DT49BTdjVB2pNrv1J9uXt48LLYADcKtNxsFjcm3ai72ihaMe1UjMUBKBuVV6LHsYhNM",
  "key42": "74TBERBRJB7RZ3KjGxzwCaTLdWXPUcXrtf44u2AJredUygQZ4v5qocDsZ2tkWGa47bukqf19uxqYkgrnB4Qm1WW",
  "key43": "5az2UhjHSBtAjgHmmGZFBuxfjU84ZBdYa1ff4pYELsqqSWo1MHjJVWNoyTYRbmtN3yX9dycngH3CBcc966pr2nAS",
  "key44": "8oHf5gQzF1XYGUNmWTAwBa8FBkTrkSr9Tznw7QoMitLYKtLJGmkcaNphT7sbE6tV82XFS1KnfrDemK5iVZyCZAT",
  "key45": "NEgyAs1FMuURHsVUCzhuRy8kj6Y43hWo6MuQVT11NTzLjMTnr4MTKZUwcjxBioimBgfXGmVXqxwesZHqzKsFJFL",
  "key46": "3wNt7v8y3BCZiiEMZbMH5w6ZywWMU2JvK616MGDLohWRSqqAhmWQ7FHFBKe5KkUe2xRZ2xAqMRSG4XXK934YsF6j",
  "key47": "65C82MsLiea6zUNgvNP7s1QyZtKKPN8aK3zQygSVVRuyrdGkAgiJzFH1pNMiLZK6jnaycGmFbzckJdtEARwT9MYh"
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
