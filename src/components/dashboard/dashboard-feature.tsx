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
    "2EscjT1ryZEtbZhByo8Uc8J7xEoqrRKXeB7ZKhGc2aEjjom8UfYQjWg3dKXZFhbZWGsKCjRbH852dzB8R4ZnFnoP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zrbW1ctA5kkk4J64GzRHwE2JQJWuorjySt6qVS94t1M2g2vX8enQXdmm2H3QvRZWyzMDL3NhuEYYVH7w6QVqBJY",
  "key1": "3GvMSm6EYgP9SZafZWnnDa1eYqz7u6aBgLgnhuJBDRoLM9Aojryi3hMJQy5WyHXoXj3otdqFNzPUBa2hwnwauhY8",
  "key2": "4hcoSUFDsK6jMt731KYz1qGcfGNiWrnNgynCYGZr3HxQTZ859GSNTU1gDFQwjQag5CLAoXyCPzxZ4u9j1xLm564D",
  "key3": "4XmMgLh6aNtvj7zg3SwTvtCPqPhK8WaNKc4qTDgeMrKSqkYmkoqZtwZRBkvrJmy9vqnwKHpwJkj443xCtjY4cXmq",
  "key4": "2vBThDqrTcjSG4Gr7XqNdVYToimRPCuunw8kdFseUrR86NzC6Jp2fk6xZdebrTku7jwjMFCqvATvV4FYRVAt6GZ8",
  "key5": "2qdEfg2AM33qv7xmhEpZ3DE2YjzN6paLdvfHjW1Uro7bHaxrwxxSWoLPHgn9YzSU4gJfTmybUmWow2koBpeRnqD8",
  "key6": "4fL8TEGU6WD1YwasfuiAF7m6Tqww8PVttx8XWMTwucoyg43whVfoMsbHxWDyqbio2R7rgee1NZUEcZtACYYURWs8",
  "key7": "543rXjjJYRc8tttxCaKuMJiuUB9EPuHaB8N9NMSBuNrxStFWmmhT5kLaUSRAmE6Y7TixkkgCKFSMGtFTgiPkbkQK",
  "key8": "YQQ735pnGc8aoQuvQ4cdRZfBUZ5dLi2Ad61JPmp91NWXLBsVmpJwnddoMdvrt21yq6x51CEog96Z2mPxQsUjGC4",
  "key9": "5Q11ik63uNx8Catkjay8ij74phxXfk2FcUo94NwAAwjK7eTwrEXiGtY7wHyL4jx3iAgik5csk3MNxN3txBEL2wyM",
  "key10": "24uRp299jYwWscu8R1HSRtsXrBwqv4JfNZPCwgQuphHMcfK2RXdDrJeXyj32RDBpLnwYxfkpiVo6tkFuThr2GYDg",
  "key11": "rakVGAp7g2ueo2cYZ2mGML8zfqaj6QTRHRwRmg2fMuEHXhxSBWwTm5smbrvCHTfAAgbELBjwZmTsAJtBqGRZPQk",
  "key12": "34xCXSMfFYQVSdpvHAVRkBK6FwtFkAY8Zk3tMRjEQyVnds4JKpFaAUB9n2LFCXCpjMEZLdb3m4famJBKTwwA6F4S",
  "key13": "24ni6jRxVJjc6zHj5K9ESGaMQYNhg8DATms686wajrYSi2TppuVjHfToAkUN8E6YgoKkrGXugw2TQPm9dZ5cjcrZ",
  "key14": "3AXM4FGcunyMtPkL693gGEscCVXdzaHc8w4a9cL56kpSsXyKXdFbkoQMEHeAqQhHppf3QNegfUBWHbpjeHW7arBW",
  "key15": "3spcQN3w1DjbEF7effX2JWXG8sRHcSJ4ZW5NVZ7CkshTcFxHBaBLU8mXwyskquLdLontAewBwcsFNTtHoRB89Msn",
  "key16": "43m2J4i5zmoknTgHEdPT1EpqXKburiWVEneg13TNisJXXhqM8NSoeNSTDPGj27mhVA7P4e7Kq95DtuZtHef536sx",
  "key17": "5gLPMhRc1DYtzGcLJ3Y8S6UH2ArfzYW2viC8kefrrErmA2PxRrdKxLx8iUje1KC6XrgYzQpweqaM7z132wDVbgKX",
  "key18": "2idn6Km8z5QpYdh24pgdarG1qb9HT79V17xWYhUyd2W6Lxcwuj79SRRiQt6k7JZRszk7fKoWpTCfaPRjXagVZAdR",
  "key19": "379u7MEEiyUHZj2YiSm9exyv8R8fj9KwgdsWjs3vXXhkUpkpyc7TEe47eaUiVWum5QVw1hQkpReuwk6Gk9RBMZH5",
  "key20": "2doHQ2CcgJSvVHyp64P37RPEW9uzx1wfmsCdmRQjsrcaBDSTvxGVPrsJy8Vcx57n4Aah6eiZqR2fc9ewMDTTHRgS",
  "key21": "4bd8eB898Ny2bqKNxyZPkAffXw2mBvcCuwiMyoW4Wjd4dpMAbn9rVEfPa8A6fAWuTonSTrmJDihzfJ97BxpvZq6E",
  "key22": "595dR2AY8YPoCFiYUkDMCqBepEDZUUMqZSZLQS2L6ifVcwRqBjqh3yjxdMUFs3kYQSoKmzeygQkapwApYm5c9WfX",
  "key23": "2hvTzsv4Nh8nJYEjdzhEyAkjuPphPspJCBSqf7cxNwuYEk3PsQixN8t5QHJyqXHTwSgrs5KmCSx9rWCRvYQNMWP",
  "key24": "2SnCHaivgyBenAtKcmToVbupspKBEgy9CTn8mFLR3mM1t222K7cLobnVKpRMiemxYW52hJLMBde9hcQrz7Gr67oA",
  "key25": "3yBZj9BtGkkhoViRcjXoXEKhKRjVWzHbfoEj69XZiGTJZfUiniCCzPBHANADtHU5kHc2c8AJQYP6ox7MAM3vwfQn",
  "key26": "8Krwg3LewvhPBoNWSLhbWWDoy6f1pvqVP74ZXgwLob5i3LqFy8xZKQdyWssWsvR8r55CG8zLb2eLbRhsbjVauow",
  "key27": "2pk2KF96WWBWji2HhAktdC7zTKGKZvfPbsqm1ENeJDJwdFBStmy7yCr3T6sLN2ZFnJkoyvQtyuQsV2BWPinayLBG",
  "key28": "Xv3W8WQSUypgeYLDffhNUpb8LKjdZXpFpiBTS3JDWCmFJqnjyM6TAUAo6QFEoFeEdVkfh9Ui12V65GchPmtYqs3",
  "key29": "3dNohpEbm8C8wx6w6id7fzNyfEFmdApy14SYoxLS7HKt4YEB69LXRoMEQ44PN3VktERV5kQuA4TJams89X1PmiPP",
  "key30": "255D5JjJd3Xjg2GcAwTcv493tYeXyo8Xp7wCt3V7BYn7zjKDAETKv8Brp8zBvq68GhK2uHZSFC6DRwhoyYwxLrRd",
  "key31": "4gwmqsywCt5ebF4BSotAGAKuhqMWCkU9t8DeCLZVMxcsdZ6L8S5GXJ56LM8opatpGQXqgVn4j13WrJJi46rwkAmg",
  "key32": "2BemPRTy5iZGPK37RjpN1NVP4rkdYLk19o521NCXr3WVaZejnAyXdLEcKtR9eQbxBuQB35TbbjLQhewiYJwQN4aF",
  "key33": "4hHtpJAHE2e9nTma4QWeZJ5cAqD3XiEv4J8TWDX9XuduBCCzPiCEvtck3AVAcun44aoMrgqUoepZ4Re5DSdU9x46"
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
