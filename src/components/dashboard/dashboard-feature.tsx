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
    "2LNpJn5bYLJr9ba2UU18VYTZjwYyXS1sbsABF8Y4hGWZ5QuXt1djP4rsxEEsUhTr8yTF21wNC56TTEtgH4B4owQg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VXWpafhwSzXA1kga1w86YNuX28ve8HpCXRqLaqoM6R9G8FX1WcYK1XcksdBjLDErTnvx5gbcrUp3m5oAAQMd73f",
  "key1": "5d7B4KpUKTtQX8BtG5EHBqbZkWxyTQLpdcsqRJHQPV7xi2MCMbb6xii7prke7GpDxUnnTX4jzTh5vw6DDpJ4Hciu",
  "key2": "8dPtiZy8neznriD1t4CR5xLAYfK2NVw7Dj18YM7jnZ1X11pNUjdwc36dp7HbyNx2trM4K5T3hSpW67dTrXQDRxk",
  "key3": "5h6ZohtJEZXu66DDKRmkw9hp6nuTV8wRLBeLH3jvAcAaVboeFrJBw8gqASaoKfXdvZsR6a51UmXq8XdHWw9us9PW",
  "key4": "4XQeuVFLBmpuiFW1n12GkR4hB8VdN5r3pZHieZLqNTusAjk5CvNMZCURFqnni15nNT6d3yjhLx1WLirpq2nKCAgD",
  "key5": "2X5pgfY1YoMKda7eZon3UuZs9NLhRwPyt8UaY1bxweFopWmBtRUkFMAvSQe9AuAGsTAHcmxPm6R597qZo4TbnJzp",
  "key6": "5n4qi99GXtzh52Cd9oYmhc4TGgPbz3EX23q5zvZpWs1Dvv9gVL5w1hVdWTNYhWoWTENM6AmhKDYftQHiPFDqXnef",
  "key7": "399L1Xdta9SM5DwnaGxtnXw7UzrXqUyXw6WELjp9VVU35vN66hmUqUQbDuC1SVGKbwy5LD81TB1TUExsfpwzGnps",
  "key8": "2SNAUFnVZoPLmNSzHwc9j6iuKS3SwhiUY5hAnzN6AhxzsZHEWQXguvKZuY5tRRP2dDmrA1FZgqZubesWvtggr48r",
  "key9": "2WWMJUrgj38mfwZuYRiCzCLVPkNjiWjkH4mf7cK9HkzDdh4zoyKzZqsi7nQudTBbomFUENYWmxFj6k7sPMg1Db7D",
  "key10": "3QprdRN4KskZQDJKPfsJ9ccfdh6fAocZciS68nK9pH3KsgLQ23FCaFyFfvXT74Q7ZvdvnW279UXWoTwQqsNJPpTg",
  "key11": "qQKR1z3svfoSg9xewkGEQ6havpmqDrEnmwKw5UdFpakWw33SWgXAqKoc1arBSaeyJLXCnRbwqTJhLGfAnYtKTd8",
  "key12": "3Udi8S8roBz8yBX27hedpgs8eCBbJkXKoGwNtuUDAMEgcsAozCyGb5ns7gfNTM4FsKSTiEyFwYk9VEWuj95DDxte",
  "key13": "4PT2UKaCtyhd8j4QNmprGD7vc9r62EvzebJ1dJ29iiv8dUujTo9DpPoWzj2Tmcdecw2WbnE3asyyjwKdrRwxDcW6",
  "key14": "2K9s87EpXEdg5EATtD9kDYvJ49vw2dao6NH4jUAfZtbajkdAhrvfyo4YK9nAe9nNv2nQsgp69Q84uXevfUa2FG7D",
  "key15": "3vaeveL3LBSpQd7sD1gpLpvbMeNTo2GxYCAWLeoeNr3zuNxRiMt3ZrWNr6xxd1mrLzeM2yLL5HNdm1FeLUVXZSos",
  "key16": "2bw2yUqF6E1nenUQPZpNx4NdnEfeQkoAMtz2qw5UZA3EaYZaVNfNRJRF4s4Sx3CFdWFJ4uNcqgHmEN6TwSMo6Bsi",
  "key17": "5dKzUWm16nNfibtWUkvhargMTZPVQNQJYhUx9BCCjbJE1rUxRSoqe5F8Ckz1QWogYBDS2vHr1WgwhBjcGyuiNxRk",
  "key18": "29rgNj7jyNvTr9uaw5UxAw6Mko1CwXyzBio8iNTFJ1HttsjnjhnVEty31gT1QTf8yDVZ9RmcG1UrQPg5AY46vbKD",
  "key19": "2ewCPdeRGchVjGF47hMWVL4KN8i8zCwC4cnDXmgdgbDJJFrtqZiq4zv9Uzgi53Qa3K92pTZKruCCLUnpZ5dXhe2D",
  "key20": "2VpeXvXLk61gLyDrH8f3MMWE1nx2TYkgzNw7gTyW5r7xmPPyLeu8JcYHPhtiA7pigoqwr953npb9UaV7JcYZNVEH",
  "key21": "5qzztfLukMCz8tvCwYh64DeDqDzXu9PCnnMKQ8xYV3iaXPdNNtCGSg1FAQ6xqTKgtjBkyRXnmgEoSKGzCnaN1b2c",
  "key22": "4YYsJ6BpryQ5onS88dhKrdYUvEopJqdeuXQzsqCa1EnuhMoXystJhxD6d4Rx5EFoMZXqMPqRtyTEb9UNF6Sd92kd",
  "key23": "2uwPTCTBPxZgeUBqBZ9CooWLjCSWS8Q5PFXLkCgatqexRpeSTYzEH3jcNsQ4Zqnrw4iJdFun4Rw9CM1yrd1atjN4",
  "key24": "2hgnyELvVYaC9MH6vs7jxZ2qKfz6JnZ1wtvjVdp8UUVKTmYzJrakAgvQYmRTgQWUminDetQF52R5NnjdqBQtEHKr",
  "key25": "92vKVXYZyRHEJWAxYKKzg9EWgCfXH3AUE7SPdK6RJF7XaYmGfUewjR7RAuCSubDV1ZbAazFxYysVyEMFNTYXDGo",
  "key26": "3QhdAGp23UzrKNuYNHUHEf6w96LZDYfSSDv6vXbGxZ362fdsAXGsfK3zJPmFpFYjweAMZrJ9nTV9cUC9bQVfgUC7",
  "key27": "3zTXf9AJ6CrYqi3QXu3a4jx1vzqTEbNaoNk4bJFJtZ3aDBTReVrbUfvVmW6ebR3iVsyzhs22xcRRwstPCzsAsTkF",
  "key28": "bwpYEbeMBdvAnGxg9ypQYLLx3ct1QyioBkigR9iyMA2uN6RZqfAETqu4LKHEGSy8Q3Gqd8Hos75Sv9c7F2H33vL",
  "key29": "4PkBUj8cGiMiseyBii2MwsjV7JxouN9C38rqtE3xtquSjPHJYcy8kFYxcAinFLY2PtwJeYv3W2ttEXiQtANjA5jT",
  "key30": "3wigRBzQvj3oD8LXCQD5PdLRXzZPkUSxMtMdQcMcpFymTyHMsm7rbhQHiPd7TAF3Na1ot5Fi8Gfui2E1ZWnrpNNd",
  "key31": "3meFSMmubefpHRVaCZyiuBhsWe6g7bxLJutja58HaEsL6ZfnHjRS8v9qCnRszryt9JEawQPg2vXaQ7yvUnNv5q3v",
  "key32": "5sPMddyAvadvEiH1QcHpWiUuhM9iH4hupG45D5mwnMNJqHfYyshf3cbWAK7GVHzD1SsYY2QGkXFcfR64Qntd2aVM",
  "key33": "4jxPWKHqhVLt9kWdfZJh3YhfsFBYAE3RXmrFxrZN1hTH2MWMgXSEocQR7Bky4qzPFELt6TYStNMvUDkxJJG67Qkz",
  "key34": "54uBh3kCC9WoHx3vivY7FZAgDxKrLWiLqCvEnUbpsWfwGfCJfQYMDx4U9qjAeKwsUYpbxessy1uqTDkA2A4gVdbd",
  "key35": "92thwhZpwDaMPbnTABaRnscD3Jzzaep37gisimtunpHmBaLQ2MFvwmCKn5yRZrKLKm7mgmBUw92SYAVRJxGioDL",
  "key36": "24nTMidpYQ9cvhK8GoRQ4oyotFmNEMPFvuG8idC74KRYvX2qXTxCRGbaq7uCxvSPHFLNBNLAp9UKjCRawMtLh7Dt",
  "key37": "4ELxyU2TynUnrnkCo41kqzCP5VdZU1NZf1hVYixqzQv4QMvnDuY54WMAVoeYvAUmExmSZ15EbsMrjsbrwBJ3tLx6"
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
