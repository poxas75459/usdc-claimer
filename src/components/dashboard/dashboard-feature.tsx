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
    "3GnPRHT5oct4ixdpEUoHVrncRczzgcVMdw4VM6WGvFJrnzvF5SJTLfUkpQ2KXnCfCv4Lzw2byQcUia996uG18Yw3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hC6JoRGXFoHT4jtpaEHskZsCWimPXpkfzRfr5DqsfFpeiogo6TQMxSp9QBxed1pA6GGwEAC18Gcje4i4XbwWWZo",
  "key1": "3UUX1B58XCVVGdp1ZF91k2d5aNvM8C3QhgdTWPacRKjk6u7P2Pkz56wxFogFe2f7QTESjxASguNHNSBTBBfysV1W",
  "key2": "67ELQSw4XyS9NRLr33PmzeeSuZhGXy4vGYCghuLVthuJ9gaZpxpJYCtfaye2aj7fcMp3Z7BK7FZuA5igxqJdh1Hv",
  "key3": "3mQySPvyVQQfTtvBnzSomD2urSG5R7C1kVzgyRpjmHmsWyP7VQQgiUDqXmoEAER4FNTjMZVpRcwcjAzMsNLwJ7xJ",
  "key4": "2vQuYgBWig4foubicGgZBaBLtNwxvZCZR3GfkQEhPaVKuKgmRPbR3AegDxtJitHfagpipEc45zPaLaEkL6942uqo",
  "key5": "2gcxSsgJ3NEkd24z49PEEaR5yFEnaXRwiD63KR3LPae9fyZrYRHFRiwdTgmjqaYvCgQtGUV2HPmL3QCvYMZkesj8",
  "key6": "5rwsVghR5nwFvSfWxLsUHCdZEtmd3iTje2ZnjhNXVhHWpAVQiHWN9ddPJmyReJwU4VMiju4Uk5T2NJcrXdYthAuT",
  "key7": "3BnBw5MPF6hMtiMDsCWKWEojULc1z91wrha7orwhH2mFixTPFpsxA9DJH3fSrD51F9TtLFL1wDhNsg5ZdthQKwUB",
  "key8": "4unkVyj5pqheYJjuDno3cnCD9Mx55RaH5Z8efSSvLRr6zihLSVWmSGbMZgZaj3GM3SWkgZjBHMi62sMK9KJrZzze",
  "key9": "4SLDboYjQHRv3dymZBdTaYbGcCn4d3HqpTjFRaaF9BiNKEpmZEJDEpHmQ26Yh4PSN6RXjnFXAxmJwTipKxcZgo5f",
  "key10": "3SMBBrqsfhqcE2pGayb7fgbZ6NaNQ6Nn8M3dRnVMCZShpsz7MJt6QMa97B57CdZ7WsP3Vw2n9tZwfqrbua5juQqQ",
  "key11": "59zGsx4PePq5aSYAto5ENCmqe1ypv8mLCxmjTZef6it5gLX6zBw7H5cgPMknDyZSePN2wdkBsWVHtsWn9MbkYKgh",
  "key12": "4cXWtNJQKfY5WpF2U44e31zeNDsQepsf14zme2hqUKU6SZqfgPvzDZtGwPNkDsP3WT1nGACZN8rr5sDkxD8o2Lkm",
  "key13": "RMAmkfyZLoE9Z6Aobi1cVABjxxcWX9pi2AukgddPVLVqdzpoqKuQLd6mzneasQeKVgZNkknyZAKgmbhUxmcT6Na",
  "key14": "3fpgNsXaBUrGzDSuXQCUS9mzzZDB2xrUzMCMumvhnJmJy6jMo8fKAGEQUPFbup4G2jecsawUoDW9khuWV1Ve1cpp",
  "key15": "MhKq4SU2rLBunx37n5t4sfgiX7BVVQ4gVoKdpA6LRZ4GHH9qkVctP6suusz4HsLjQRooVXG25QaxmKR7rz7M3gw",
  "key16": "3W4dfAFuPLqdvt4VfJRvCRaVd1w11sJwuV684ryNeXPRVafCmtPFxNCSqmuqmoPADNZwPk4fnDitF1rZdsJcYSC3",
  "key17": "4tGyRzVV7zbCsQyShA4RB26uaYbfDrfv4Xp7cPcb8jVd2DUPXtqkTypN6VxgvhbbxjhGA5Rk13AZNWDuhn4xsgFG",
  "key18": "5RV9vWqeVdsohMKHFMvxHBft6pJfew5ENReAhkv18o46zg2aTYvyzN2RErNKtrmPd5Nq71FPYsNQ863PBAgKTYbZ",
  "key19": "4jKNeM4JFrWc4ckPh9UQaAzdsYTQ4g9VC6sNoG7fBTrtU3fu5s5TERyiBt2aS3tYCjeTeseSa4oZfZWCwkxNodgZ",
  "key20": "jQ3EgK1YdB13hZmJv6V69HWy57vDdVMBMPafRvwfrQvtA9V9A4g99d8uki9mup4D5Y7B7xyGw5GbHwXGtxZ7ZPz",
  "key21": "2KNDm75jS8PkyY3z73fBwxpy1yCG6vGi5PDa31mn9SsRraxEL5oCM6Efrfo6YxuRL4uk76WvmYaP2gr7vG3kD5Hs",
  "key22": "2yYXXm8oexUkUN61u3sDcSYoZHndrYR7NN9o9q2iBqv4Bj4PxhE3nJnJpHjVSSkfkDwAwuCRnxNDxdqTCKA1xmWt",
  "key23": "3VAiSHBhGsciuwzTHqd9jwMsB1C51eupV813XczV2193kqCbhXhTBu7Cw2V4DC9QBwLxivb8mqmniGoypVAY6UAM",
  "key24": "5ZSkAssjUZbqR6MYDeC4rEFpfProht2Tko5SvgpLdFQ4SiCiU6a4MmADhPU169TxRZ3nUWsjtureMnL9RUFEzmUF",
  "key25": "4sZFKQRQPc9AU4NSK4NxeWBDioNx83boNfAECL3T79BSeE6Bomqt5tb3knT8SnAN9ZuLyrxF9qNyhhRKRYHdZrmE",
  "key26": "5BXPYZY9t5apBnHs7EFWcJxd883P7K5KM6ATMjMByFASqqiRALiR6Cc9XaX8ZYGNPDw6jL9pNC2tRtJu5G2LaSaV",
  "key27": "54uRXBM7AWTceNgveie1VMtzV1W3GtwNvfv9MkpV8yVB7eW6pG6D12WWStaT375MkYxTch1P5H7ydPrWEDwugZMF",
  "key28": "2k1eab5VNvsv7CcY7VWJfipn6cGk9J9S7j3nWmrLic9ksTAWzriN5uYCJYzcr2TATvZBJr9SrPEjznbggWwRjW3z",
  "key29": "3WKfz8wX8J7ux3SD54BC2wGdNcXpLwvZCvWS4JQQhFNHw2Fdyye3h3nfgq6ioJ9u8yKUs6qe2aDrAYNjxy8UQ3xX",
  "key30": "2ydk4TfRfZPfpfKv7uu1pf1uKjTAdihdayMFqQDL8HdnqSa4rFcvNVicJKk6ayw5ks7kx5xC7mAUXWNixWNj4zEj",
  "key31": "5QDFrhYYCuDMMmpnrQvrgQcntoYbwQQaZjkWWaSMuyXsSGkksrj8LwxqSB6wAL1Hn74wWuLFND9HWLYTTfQHPE77",
  "key32": "5ihJjBDytamhbEVnndpcCcuKZSfSDnz26C7AEwVKfSUGu7DozWVoBYRLRbVQjAbdaQzkXyqks8tzf9AY8gLrTsjc",
  "key33": "2z5e57WU9s2rNpMgQ5wZeedhMymWPzg5fjgq4t3XgDDrjwuvrrRWRt4kvQMCH2K6PG5sSPjCKNfJEDZDjcB4paug",
  "key34": "5q4Q9gm8ihTMHWq9spL9kai1pAQd1MxFR99NfcdWy4vSnHBrGmwJD6VM1S3xnfEV9wurnQPALTFEpJgbY2RQ9kxD",
  "key35": "4XTGKtahURgHgaNJNa6WPEbfQbXPk27Wv87ahC84yCFq6A5y3VM4N9eK5NckJApLMfARVr7SzKptJfKiR6XAXtpS",
  "key36": "2pyFYvYP6DjwvkF4EDNwTDKoyfct6enP8QyuUrAoj2JWnL2Z18wzQ9K5avEnFDUW4mQjsDBuUN3LxQ2yerJkBSjS",
  "key37": "R7fHbY5v9pkv42XC3d5Xc538NoDEnTv6qspuUJq9EGYLgCAdTFTaJ41yjMK1ieL63cxmzvhkzX69gD1uKG8d1C3",
  "key38": "5bjQkydh3BatocyrgpepSEQhNtZoc5nwZH4GyjfN6EQgxCW2sMZhTgpz3bjJmeeoS8bhSwCoD1EJsUbbqUMVN4qU",
  "key39": "3xSJAzmJKJ2PQrdFASPRyASQJkWjVjFsLAuQwJxrUriwTibhJ8wfz73FeUsSdxzzCtZKHQqD6r4HtY23v7LZVPcL",
  "key40": "4vQUuUGxjZxfgsb7YE4tNiFaSsyPcRVMUifu7zmyYFUr5vG7f6Z5v8puD6gfEXVZiNexBCbe4Jn3mFCbduzYAVXR",
  "key41": "2m61wrjR7dahFh2qoDMJxTV3LtsTDhiXDRJqJXqEYtNmZ7YNotTD7w1VNbBZ6Y3TMsPFs7VyY7yzz8pr96m1n1LP",
  "key42": "H1VNvrcCeQA5dGJjpnXPrv5Nvn8Cv9SontgvDKgr5axRhtabQVqECT2aNdVABREqqu7Pa6FZKoq9FWKBQHZ4ZjZ",
  "key43": "5dDEk7h1wpHmnYQtFEmb3UPCvzvCVMuvDAEHGH1E3tr91r5CSRk9qXh4ULkBVyn3oVvDAbpAp23ENrXSjxReUoPJ",
  "key44": "2A2g33Cqn7B45aUqBn5zeHRmgor4v5Fv66f94PnJcpoSKmTAGfEKzpXBqUFRtAVrJ5msnDZUtBbB5HkJpjfhwnRT",
  "key45": "EmkZihnjnSPd3qeyb9dunZ4Vrm9JF6kDmyNe3yQyExfkKhDRsJ5dH4ZCLTjC24j7zDuJPpAtqcsrR2ZLokQQ4jS",
  "key46": "2r4cqhdkYgfYp5htkyKehxowr1gxdE46bXezUqrXXctvRSeJ2g4rEss2soDagkbyTLY8iFKsudiSnzE2wvdZq34P",
  "key47": "3PhXg1RZw7LjZLN1mp2mus8KWYBneSSSjMAyjNG8iwXkzsgfMqnPX8mpF7tMfzd26byuxWCWonP9k9kPDmaEMVxa",
  "key48": "2Lssduj5tQCPM1FGjYXj7N3YjGhtSXp18pGztxFuYwSrkcNsqXFspRvKiJGYPTVs4QFZoC7PUkm4EcW5g5EGfeFP",
  "key49": "5KXE1SJZk2SmY7R9qdrXtB72EFxoe6GqLidQYadXhqcUWr2JHHXF4X9oGhecgv7zdhe3MnCqnF8Z9ajwQV8pgEty"
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
