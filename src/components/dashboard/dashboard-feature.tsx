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
    "3ggSkUtoatfCgNP9RPdyVfSUqrpMLs7AQt2LrQE5YwfaGukkXvnaGxhyDk8SnEb1kd36ZgiYZugZngw7y9bcSon3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58ZACwM9wVoTQYe4FVqd6XV12B7zVwUzc11QjozeeB9Ted6ne8nRtSmPJ2XJVyrD43bTVHspk916YoS39gjrq5s4",
  "key1": "27M7HYLqaRRoNu3xTxgBHqHizutd8f5WqQ9FHNvqXDL6zsu38AZyNVyLj3gapfn5DMEKAjwThmXBDxo1Z7Q8L8kL",
  "key2": "557FkwGqZ5j9EMeGBrP8YjyHzQvLUh7exBdozkNiYjskJH23HsBfZGPpsWLgxvLfed4kjiEfgWEtotk56M6ZDBuE",
  "key3": "23YopTPopoLGbAL6TMnaWtfiPeweqpod5UQDdH4fnVfD1B4peRzhd8gexrGixB8qpVoeGYkZf1iYEnyAnXKHeTaE",
  "key4": "4STfsHQy4zt3BG3o6HzSe8n1gdgir4YhJRkjX8sHPS6avU4KrdzEoLk7ehY4peKM77yKpFrf5YGZo1rZizKafeQ5",
  "key5": "3NrxMUqkvjnqehTQYASAKT5YPWb92f42LdLfyRDgLVGWjDjLPBPyxS3pNXDwY1Bp7gAD3eKaaLbBpXu5q9utugGR",
  "key6": "5vzsXCtAxSzVcGnWhH6e9GA9sQn7bu77fkibYj49zNGbu7vY1ZAEehPwsy7B4vPr4BMpeSykX54WmCUym59naHx7",
  "key7": "5P96MAVQRo3A2nBsg6cD9xTfkvJfaZv8UtgNEyVqandkkd1CdCpaYyXwQCP1dxokgDsyyK21NYABjfh2oimWPQj3",
  "key8": "5HChHW3FN5vdzYjDVFb5MuahMPhpepn5Kxe5AVmyAdHoRiU2wai7V6Fw92WZ5EUfGSJFSrdqy6Tvosk4gVQnHE6S",
  "key9": "3TBX98447j8vY9Fa8VkkdGJQjqMYUQmaZtimu6dGLKQit87KfrZFTDmXfJhr5mQX2ZgV38FiW7TjreF897hdYyF9",
  "key10": "5LWmvrttFjGxDMeTxq9S2KAAuQx6rnF4UH7kVmVeSiTmtCyS8nVY3HVZ4cQBv9sNPt5QQ3MUDgHaPGHQWfkqsp7c",
  "key11": "35M4BrhuwUpJCBZouu9zN9RTKfReo8V3kWis44xCkrg6TPB8Jg6u5n3GVBPWfgAdEzgQXXxwgzUTtDw7FgkGJm4J",
  "key12": "2ma5EbpMaxjrRinNkYRcPq93n9biGgVdMUKC3vY37TUPBm7sEE4ECBhSznGWbUUijbL6qnH1HG2Ytg4WMXmxQrry",
  "key13": "4pqzeNBBkFAmTEiKqUuK18rMuRjrtokJVM5h7nxUkaEDaLPDdQWsova8fPWygrKNzQNCzJot2KUywHtrzCE8uiXC",
  "key14": "2uNEEaVJcpJw1PeMfLnf4QpK7BzWPA6KmeW4PGbK9FBCwcmZfeaFGzvnMGgT1q7YkmsWLwmyuDL1dUm2cyGAov3i",
  "key15": "3wPTYd3VaKKw5TZXXhAbVMprrLHwxUk34Z92PJbSUJTTxr6dAwkKsw19Kv6J8c68hLP7qJuaC2Gw1X6TtKGNQosR",
  "key16": "5ZY81Yv87MKsWnCM3TSxQzUET5Q2CNFSiWcdYAhYyb256Ly7rn2HJ1XbfkQqDmwUuuB6hRFkzWiGM1mBWV85SSWy",
  "key17": "4VtZgRAiAmDpnx53Z4iFuuRywrnBRVfHM5BCbP7DC1HDvFR9bdsm2i8nSFe7YUsqG23fJdDE4XWXe18Ko6bQKsQf",
  "key18": "quzFoWEHZaGqzSP5hiMuTgu576dXmrW4iwK2qwAGXqFVWv3uetithNNTh3WSCZZ6k2TSEVNJJ48ZoT68z4URfxX",
  "key19": "2q6tj7LYqsp6nCfhjJHo8QzAbLBfDbArUhaw2VJBKwzzuncff1oJuYR2EDmWzq4cDdnW3Wnuai5ptzsa7xYceocQ",
  "key20": "59G58tGXk49LiUrjMJeBoqDtHSLxu94kZqDci6cyc6pcctJRyA5LLtt4zT9vmZTqve9nvdrdYEumKETu7R8DW8ah",
  "key21": "5cpqRh7PGXmE5ZzpoishRVZ4VqKcLo6dng7YBeAWVHVM34r5hCKnbQCwGYvKRUN1DCCVQfG6Bi7RyyWHKERUhgn2",
  "key22": "36qhSRavU39WmhtbrJF9A8gcWm9wyqfKc5iZVuiV2u1xinhiWhSHcQj4GQKtfNabzu1ZUfEoihoQXjzo195b2HMC",
  "key23": "pjcy8gC3YtWCSFLZVYe6UwvynXWdLTMj4GfdpSWoM1cL3aMk7eVGutd9AEhFVUrza4se58R9t4pnRvoynNFymkc",
  "key24": "4xXiVKMkybdcEVkh4XUx8F22DhV6ToZXY7t2bMAdnfJrTnSFFxr49y35kepRSn3SEJPN1yMgfR1kFMCzji3oDvUK",
  "key25": "36VS4LWa6WGbL5enzBcZDZnev18owbyi3D6BMF6vkdbm2o2xqe9FDVBDGe6Pa7JVGjPrMeSwt985VHUrBmTeMATi",
  "key26": "SrA8B39SKpYue1zZTpXFW7CbFyDW7cnWvexjA7XTDzz5Tb82smer6Aq1sLaq4YYQH6McaXn5Pp1wEzDDrA1qCND",
  "key27": "xcsXeUwbJjoiCr8wwykxTncXdjo47856VsvxVt1HxFn83qNvnSVT8MFfyjhe9XyJGBHmRR3KBhqVe8nG2KAfCKu",
  "key28": "3nyMJ78dcDKuxJj5K2oQua76ChJ3996k5qkph6HoFmQxnFYpodRFmnBuZ41WmarsAj88uBxNWDEWVAHYZHXN78XS",
  "key29": "7XkeB85K2BYZc4C5YJorZ3URzfQc49A2hbmFjcekPhCPyUKVhSg9U568GFxAKS4zuwSyFZSHDpjmQYcdYYJQQeM",
  "key30": "5oNedxJN6iZJ5q6UNJtou3YA1LtshcnhQMNQxmhyd43LZx7MzR94PL6Zf3TjdXa3NFrWPJuFgFqGf6rruLJEZyGp",
  "key31": "5yjWfTntZ7oJoXMZhPfamDQ7sqgEXC53pnP3oXLeJhNjTprnYiE7NxXVwC55vHwM5fvFnM6qU1SNPfkXXG9riVh3",
  "key32": "63f1phajzY7jEuqqKPsVBAXrQfacCvymSSuyby7UwTR9DNASDXNfBmDxbjiU6tJNJBRA1dArMmgSdvzwtTAEo51k",
  "key33": "3JnzWTcyXnQr8Zt1EATU5m1j7pTbJ7YxwRNsHQRG5wrb6zFFyT6wtbgcbwjDszvkAng9MAGox1aGbQ8e6m21FK4m",
  "key34": "4da6epP5PgdgCLo7eAhNcLzjPdeXtgGEtURLob3WacKkeLuTNRiMu3eG6PMLRhhcvUQ1imUgYDiTddfUCBbbwjeq"
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
