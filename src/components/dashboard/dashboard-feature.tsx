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
    "4zQBFaw7NhfsK4Yw2d5SxaJc2AXEebnuyNMjnQEoX1s5iQhg5fnYnHcqe52oFbPxpmGsjFNh2kimN9KReUMt2Xmq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d1hEg4jDn1YD1NKaWz99sfKp1Skp53ts5F9PQ1VcHFxN19VrUrJf6jC7k22eVR2xWKCBqUBDLkovbaQ2AMLkNwP",
  "key1": "fs3RNRPFhMxTzKPb48CsMvZc3xZwPVLyKTRF3BdBCYg9mMWL17BC8S6kifaZLrTsXVcdrnZTAhKL4Mub9HEBH94",
  "key2": "5s85KDwcqMTe9zvCksuiXwb7VNLQuePSzQEhPnK6BNSnH17zzsXxHJFVC76jKKuL1jep537maVE4fGp9gd638cn9",
  "key3": "2iBzJ5EhS673GT6RMmz7FBxpFniy1BcYK7zdzc37tQiANyC8ifDTGDib4E7C11Tj3zCNzDT7gr9VJ1PQnS4UFugq",
  "key4": "6ESybSUdjpMHArH3whDZK2UUsscqectXp3Sj771SqxoqNFiYQczyGKMoHPuaDqCN8YxJ1kfsCjrDVHgrAtL9mx5",
  "key5": "34fNyd4bwHGEg7vLoG99sMr6jWr63hcoH1og5SSvjS32BAQyvdCTwxpRiSPAeWQVrburBBNWHyrSm1ZFFoYu2dst",
  "key6": "25DPHnnBh1VBe7Mj9jWcDmjLRKaHzDZ9gjfTv7AiM5Du1cjyw6zKgtzfDKi3n2n4DZYkZGFpLe3GiKmA4t5FHHJ3",
  "key7": "5YYU2XkN6i1NeDdJCbRMhvhPKbDDkTAEQtE9pBDBrf1RFVsDLxz1gPZYtdz1wm7iexwBjNjr4mfenPmq9kyN3pQk",
  "key8": "2jgsvrX9dg5YLraLcbDitesfTyXm6nHdQsRAsvnX571ymjcYa4wyqXJDxTjNFWUwQqGgyoBZ1jHWJq3pQXejfvQQ",
  "key9": "5zXCwP3b8ZYDsXnUSAmVaZLUkaYmM9uN23GRmmRmuwA86ubYT4PmEudnFdSDWrqm89RfTn9N1ZLQFFSEB5a5uh4G",
  "key10": "3hFKzYppSnxdwxod4YVCqm3piaomq8UHpjexTQjP6GxaQaerj99gqrScwmshjiKSaxViRsimKyczFoRftgd5dc8u",
  "key11": "21ySrVNyCtPv86uMvD3DmqDKLRN4u8TymnYe5HFN6z1uGhR9pL6j1ZFPtzYQbQJApuyRAdu43Y8WHAY83mNqKxqP",
  "key12": "2KUG4UcVbK15YJnMyLe4vJe2Kj6x7BUbLGVhf81wyF35oAZ8XYXGiziVwa5ry9KGq7sutALyTU7FU1Hfj4zaKWm7",
  "key13": "2drqmoQwNrUrjwcUCQi1oGu6rPH9HznZfqJQyXPGoEaUMM1TiTajJFhQZys2424NByuUuPz4VRdudYeeeLKMDdgE",
  "key14": "5qyNg8zLpWnSVSGDR2oz1N4iLX2YYexUVLtWpDsXed21gkHcnsAAd6Vj1U9ki3DyMYWAxyAv8ZBURxX1XzFVRa68",
  "key15": "4LGCChTX2dXvR8F8GBG2whfcwav273ZazTReiS3Z7rGoc1C1ZzNigb3fjEwoQJUej4fBtvLAScexcUT793PkkiRk",
  "key16": "39H27FFmgufk3HFW8199pLuKJ9LpT5kYxaqnoskwvSJTvz2T7CScj99AowAzUQbrissbWc366zV4khDxQSZF7DxH",
  "key17": "57pi4FojL36f5pEvSLuKazhSTeSkw8uhNZ96jP32yKw8oS42Cm13XbwqMYcbMJRuAwRxZ9cZgWwSiYVdSNXBiC6v",
  "key18": "v8XPeroQiBnZn6TwBnPSVePrYQyBQYrJVYAhkvgXzBJkAaCP1ffW8fmzvVkXZbNfZwrdAhGhX9nktWLKNRUo9HL",
  "key19": "4wbCCmYvdZyRr2prihAAg4Mdx9UbjvSi3Jv4WYULYY4RayxeuUqsu5Pmv5mda61oN3WUK2Y1AL8aThG6RbXMND8t",
  "key20": "49uRkUqp4n7DqAbN2M1ZjpMfDejJsbMfCwzSdMepJng2uz93MRxepAV9qh7J2LTN3FTX3bbjvos4J154C1pvUihT",
  "key21": "3pxhJyfE1c4P3M3KLYq361nquyhzKWFMhVujbG75mppSvkbR6HqntossrBNLVPTBHqFbzdLRxY431ujcVMQfSUEK",
  "key22": "3g7kKdSExkMsc27DyfzM2DZvaFVeTMn4rm72WC1Kva7c7WC7pjunyXPEXa3hqfgck7edS4GEsZh4UbRmD8Se1mHp",
  "key23": "5sRDaB2dWyH7D3Ja1shLZcqeYwnnLxLTJXGFXgeiw5g2SDKpFpKkb36eqAckpCcPZ8wSJzGKPz8AXQETdUPbU1dx",
  "key24": "HKceLj5FYsA9neiEUNuLqaw84ERoizFKQKqkUYKPVJd12i4rk1Axqr3M1UqHowhb8VNAmrfA93tUdkniEc91CM3",
  "key25": "5xqMyvJaqRjHSaNApaKYMMQB4fCZHJVyNuu8WzwVKL1v9ZZqtrYUZkKiSVLGJsixS9irf7TAAA3g5DQZGfh7CGet",
  "key26": "5n5aNWhoumSjgJRBHqJbDdJttgQqjH7iBXKpGgyk4gfBvBqFvSoR1fuvKSJegipHygtY2YF2ar6cfbr5MSciBqbV",
  "key27": "3i7dZLQH7AaF2CvkuFQXTqvo5TzosPcq4T4FMe1Y2SakSx3QubCckU9kR7WvGwVc66h9sGuKLJmnwdL5e5U8rhhV",
  "key28": "HMiAVHrQhCHv4gFyAG4asJuooGhwQ6ZrGfLYJZCtWPqcdDbq9xohRGPpi3KX3QLX4wmQf4VK3L8b64D3hinjqw7",
  "key29": "4AqJmpdooT116oWUVek1VEVdu8tREnFSbsZ78ghLsrCUghrMUDKgs3c4zY8uDhN92tbnpxCXEpYwXr6bi3F5sUw6",
  "key30": "4Mzo3yEnVLrimpkgf6NYA7ZiQmdjSvyDDAaScb2cbEz9RDMAEuFBgYSniHAPLHvpPpugRwMpaAHASbsfKJRCBTSo",
  "key31": "2PGsRdbTczNZPtZKSRtfKNk154xqedNdAUZH2vYHnvZ2xxSQKotxYX9mBCJ2mmZoDLu915oU8QwymhhSnktNnmB9",
  "key32": "2NUQvPCGmLue9rKw7V2sPous1SmMVc58p19d8aPosEDzCmhcuDPPLYGqVLynHfnmcqMtcT1UtC5twfLuVkGXPDvM",
  "key33": "qU9jQMqm5v8EmdLRQZJ9AAB4FHaNDnrJHBdu3Y36dKNB9hdQV4LfpPEM4UYxJqSJQUqzGf9hBvwnrDsXUYXWipM",
  "key34": "3y3eok2PjKHi2pT3efxCcfbbCZoi6qmxn462mJ7rHWFrEnDiuaCSaY2KfvDeiJ6f6EDtVx83MJHvL3tQKWNzzbu4",
  "key35": "4gk8Vwxoue14FiSBwiLAuMUJ7xZfsC4ALvTjCtHp3oPBzzS9Xc4QuyUCfMvcZQ5unUteFChEu2QnHxTDiS8yQHQo"
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
