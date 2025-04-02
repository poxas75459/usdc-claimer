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
    "pa3ubMBdGK7E1LbQusG8KyKNSrBYaHAxtbqpryxF3p6ri477AzJRRU26t7UYVfadSG62vLu7TKS8jawUf6Kgho3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S9LaPYujULanWmusB4x8FPwYXvDheX97sfBiYrvzFGVF3DXtLZejSBxeaqzQaFZpGaJa7kEfLYyyNQkvd3L6sRh",
  "key1": "4Mumgs6qEJwKnyrzTPcErBGYPDVjkSpmZGCgM8xTqr4JxP19i2X7hpw2g3d7t9TNewrpr9UfruZjydnf1AAKJQCN",
  "key2": "4AcpuPc385c5EPEUyfVxzUsBXcVmGJZqpk3Wr9hRrLT5ZMRHpTrSG9hpmJak14Hq6NuKXXMCLtjo4Xx3oDH6aA2g",
  "key3": "qbFq6CacnnChbP8cMVVajEt9tKJVy7Qpkd893UoA42kZ1jTDSezAz1eTWPFTpXScHvHcY7FVV4CQu6HuMcd7Qun",
  "key4": "Xz7EkRczEQnaNXrMGaDQdv1yLc92zFDZ9k77mAmWiKwwWFH2LhGxHMM3xWZtNRAEkqjJcaXfY2FsPNYiWnTS4Kd",
  "key5": "2J4uNZBNMUeWPgMrSBQeZtZxkEftpYpDhf49LadMRCnQuPfVwT5CE55R9mXk3oWoYjgGoWXr9j1pXdjuwiBbZ43V",
  "key6": "4awhLMmofojVvomnc21j9yYDavqeyNyigC9a137ezQ5Rni7Hwz8VQvToU7ABzjHUi8kxhidNDCb1m9fABWKPn6v2",
  "key7": "h4jxEpy2xsdsP1pVBenK4B1i7wusueYTezazQGa3pu4oFGgEbCz8vr6AqNvSSKTvXuf4uC1D1HQWUXAcziUcNw9",
  "key8": "bjoBLNQaxyxVPqkLEvJ2GHL4MG93RsfLAbVKvn4d1t26NifPGHuJnb4Nt21ozWtFniFSLYuqXrhc38cyogA4ScJ",
  "key9": "2D8ovAZLLEiPmRKDQuV2DmALJPiccWRWNQrdkqLB1dpf6EUyn6C6LRCYutmjv9AoxX2FnA3zizz6Pnghx4suZuCH",
  "key10": "48zYjmGCTq2AMMTQWhKaV99EruKck3mzopLJwyXeecSPLvSGSv842vHFnBHjjSYU82ELajgXV9gVTCenZtbNCvYb",
  "key11": "3wemeEgeC7T4FrSZmgpSwJkrm1vmxpy25MEyaxh8AiR1Vo4K4xvoxwAJthFmZCkTid39zmCWguobU5efdfREinqS",
  "key12": "3reURUw9mGSNmrBPGg9bCZV5vCea5BXqiqNYLV3CPjRmCPWH65d1Ryn8iv7bJP6QcQYjrdfB39uL2oFJgkBXfMFP",
  "key13": "5QH7nSPqjW3miFzy632BEyEvCoe2JimwojdRxp3oPPtxh5znVdZvzRcebHCMJu5Dfd8bHTTiwh7WQ6HWVrLi2zHB",
  "key14": "53KACs2tL83GVURAVjQzNzG9jDN1SPX5HQtKfJPjk3SnbXYN9bYtXDKZ85j8cXsZ9Y45WKxQ5UqQ8zbdA7Hb6pZZ",
  "key15": "5f7pJo9dywXGqXKTbjrGMUMgLfr9V9rW6if8LTzv39JBVoKiyf3Bfgdqgxm3ebpTLkQhSGdyJw6kAyNupiwni8HM",
  "key16": "3jUMDiDBZo1jEcsfiRPnKDxshzGU6h2r3YGxq7iCmx2M7LxWD5K5nvPisSqYJxTww5yyNE6kgATF6rLaxo67pKnq",
  "key17": "3XBZaRLMxSJxcu43uSrSWUPhkFX2y1ppf6gNaEGW6YqSS5kMrPQii8mfWc6yTfxm9RDA3kLSoyTRA3QDr5d9dHv8",
  "key18": "3AFo16LsTYdQqZgfBBjgxtAZRT87pyhJvTHySVs3ccEGDgfNCwrBSLH6NUG7iRfHacztJK5HM8M6exvLRkZ78aU8",
  "key19": "3UmF9HVpzMspX2nyxg1sHSVnP2xF3HtKgaejMWaP4TdiCzaSpTzJ4h21vy9AnMexB5D68z5pEmrqpLd2ijSU7Wqb",
  "key20": "3fZVdxB2rgUNkvbmYCWmB3wRMcbrRt2p1BjNFRADd9BEbQ9FwzMVBjcrj2vsHBwTqbcic17NmK7qyHaLT9QXs4g2",
  "key21": "4FeUGoZ6cCgMYS1XCGvq3vM79qbFQwjUicpwCBPURg8CyorvHnopfEpJm5npUXBbmcuC5vgBoKaRVf6RcTJgVzs3",
  "key22": "2beqU9nUFa1er8bx7tj1WayzZn9vtZwtFQjpngAmX64pzsQKLM28yxtz3FdHuHZ7Um1qzqnZBHosuepe9zhPCovG",
  "key23": "3DqVXnRzWzZAB8WtCNYFBnJvJwnAuVCKPrQ94f7iku8JYhcs3fDXuqCaz2AJfvap4csYVa7hKRj7A6Ra5CVUqLFx",
  "key24": "3vYTLyUaR7bDts9z2i53bfyKDrWd3Di9qBx6vAwHbYeKNaXgsAKySNDJHw84RhgpR7LtKBghZMb4jLrWsi93y3vX",
  "key25": "2UfyyEq3fwQkCsGyxWykP1UH8zvDLreLtkncZqeZVhn26y3Duv7k5BNPAZV6nhTucnwEwPtJi7uJQ56tqKN7mcfA",
  "key26": "4CD8P5iH8DPmzoESu9sVzy1GFzLETZpQ9sUxsZX5uVhyr3sQPe7rKPJrJ7qfRXvoCwYhNDJKTiToWeUSTPx4AAF3",
  "key27": "5Ua2i32aVAfcKty1SxwGgbyCTqCawNdtZGLUSTrHgPVX4hXc3H4gk57HSEhqX4yCiUZjAbNApVGeo9QXLZAdEfWZ",
  "key28": "tTNt9prBLbGaPXjNXtypzz6MRmP5ispV6Qtvk7tnDdGiyYANgnKELffW9xEsGx9ipS9pk3Sef8zKssU2hRX7EYv",
  "key29": "3oxPFy9GKY2Cbac989qrbv61kDGDkcghvoXEtuQwgCwW45SxrcxMGMyNXsAraDWYgRr2h1Uq7bDtmtbqRRqJhJmo",
  "key30": "4qVbkdhPSotCSxj985nkmRZWwpvJ6FPRMdALfG6fYn9DnMJSuTuP6Uuik5xtuEQKjbos2NTVUx3mAKDcxYD9j6C8",
  "key31": "4aHjSVpRxZYqc9FjcGXELGHEpQPNQF2B5LN8djoHospZrTGk2ihcXnW9H4kCTv9VhVXEnkztzNQrLrbrjr7MjwJB",
  "key32": "2gLcQHgDeiojiHJPqZejKxiYizMM5nJXG21B2WVncMFAdFYaPrziunGZ9pMs5Yv5X4DQdwZLbnVHBT7cdALTZXYh",
  "key33": "2feMjbbdkHFF7Cak2rtvCuc28H5JDKBKWH7D3NT4RijqGchhFFJm7GoLTWNuJZPdgniRHAuw9VfiaM3yTeD3eDto",
  "key34": "2rJhrRCZsXeKmLAz3HcwJeeWQY9iL9zA6XYdQvu2hNtBZPyak1EHLT8kkk1p4wihknHMinbLtakYih4RUJw9pdZj",
  "key35": "4VkXvzzbQHfqBxEkkHyasbqm4cpckxdU1rXEG1z5yZWtZU6JN3oTcCRmu6eVpxzQGBG8umcfyGEePZcNxfipWB1Y",
  "key36": "5C3Y5VQVQSutY1yNZS1GEsLAmjE5CSPJ3PRVoD778xyiJdvYPSzwt18xJMvAymi5i685TTdJUGEsVWBbxao6Cc6b",
  "key37": "3JbrWrgeWM1FZmPWWFAM5exgfjq4fmZwd7oZZZrqEdfjpffm9GK23Vmjb8nP7QQ6WTokh96xfDZ7V5bRK2ZHj1Eo",
  "key38": "3A1zvBvMYyrGa54by9V7cLmzSW7JS2wM57NJJVW4BJeLHBUAgZLfkoyRDzQPwoapY1aV3QvUiajvYksRYuppAUcE",
  "key39": "Jy7UwYvdYWXRLg98WsmubXysS7hanqQvsmc1a8g8w5d2X78WhAEZLTnCyB3dPvYDH8PLxMVgW72KfPuXdi51MPv",
  "key40": "3DYQiQDo2h7gmYbRu1jez2nibQqCgwLMyqAUXGarbuvT2dUfjZm2dLXvrmyqvn77vJXcqMdy4FwJ7UUFSdsqEmKs",
  "key41": "2bg6SsK2RxMejJ61y5r9KydyUpEgVqq7LaUHcpjohWPKFPKrogp8BU5rZtAupJ4do8KU6Guc6XeWZoWgyDDeaSzV",
  "key42": "4U1WzgdWJ7ExZ9bTFv5zWHgtNrXotKkcGFrBKnHDeEiaVJX76d1qRPKsnU8yEnwEYHaTddY4ocSotdTdckUGjL9J",
  "key43": "2UGipf697cHcsoAWH6Y7KQdjTteMjwZT4TK5U2CTwx1ABbbs7KdLkJD3wnNhWhmQ48TcTy7CeQXnGPFSWwBrTd2w",
  "key44": "2L3jseXtBAMMG9S53ZtBPCJHC8oJSsjiXkNsr2X8ko3ya1bpZDVWudozvSoj98MkgczqN6ACsAHk9keusiVTKaDX",
  "key45": "4KGz9Qgr8yYLvFQHnDWaDMtLX5qAvs3vxk1Q7tQfJNmCVvn6jXtWNDovG9hkZfhMGgKcpfDzi4czEBB1NkDLNvmS",
  "key46": "m3vUGv8G7UB9KLZxmbY9x5SY6f2b1Dva183QRUr5LK1PfZQ7Ynu4BZ6g1mLxLv2KutYL81GYFVT6KzBFya5mz9o",
  "key47": "3VzwjjYuVML4h8UEjhVLAcoyKfZFsRBtfWVgB3UK1vkPinhoBtebTX3WWusNrDnqatcabQ5sV39EkxVa9a78N8s1",
  "key48": "5Kj12Vsuso2ZTZqJ3MXpUiwoEwi6FCWFbzTQ5WNPthGPMBuScJGSim7pGRNChRhq1AmHnbhBuFbMXmEPV4cvo93x"
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
