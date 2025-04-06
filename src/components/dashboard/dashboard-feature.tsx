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
    "4gZr7yp372pNXnhQiffG9RGs9SsXEs1QsmtjtHskgEkYYr78XmnPuJKqk5V7UFEzzwHkXhrRvDdAkEA7JL7oUALR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wiYniyneF5RjYo8Rh2KarcqQgDek7nDrDx6qhe4CRWg1fZv2zaUphbCZtoV9gsxfLF9PWq7D5zU2xKdL4TnUVfR",
  "key1": "2uwicRRMsCowye5uWV9YRLE87WsXAggacgxz1QPsgzhnuq22NQfBRRc4TxWbMnus9qocwjSUwwQTPy1MjxXz3NML",
  "key2": "31AsQJmrdRUrJkoKFp3M9bZ6eohs96NjPR2bjq15zFQzp61R3dbmdJPbhS8J4uoXSSJyseirs4Pzyne98NAmCqnz",
  "key3": "5Z4NeA7SoJaPUZKVmXwS152hyUszwv8Nxccg1HcjRSr6dkyeVT9ddNZXnoWzNgvajz8LbUhXX8nYxa6ucav7zWiA",
  "key4": "5WAWpBBukpF5yUnfECXuLXKbqwyZ9PyUGVTFHegTheU2wgiB5D4cB3KKM4PX1PGR5X59dgFq32iJMfhGceTHqMFd",
  "key5": "47H1uVD5BbH8v4jfPpfsDcgXZzDWwDZ5btcqXTrFL3Ds9gBscu7SRJQBcxANAQmY5G1sYG9cpn9aMYUs9B3VJdh6",
  "key6": "z52KFPCT9zjGJ59bp2ZAa4aZCYjgq1pG6fpABxEAgyuwSk2GUQJHTUiRVBkcVgqAN3mJVac8Roi9ejV9Z6TJStk",
  "key7": "2ttzqLRhe3P6HG8GqFsday5y9sgdoNazqX6aSh41HokN1BDpP6PsMpKEUucuaiBnuLiHAUiq2Bz9RULLrS9BSTL1",
  "key8": "rRqUGkst9LqwVXMUpnyhqd4916X6nja9witDfrAKMUK3xy88dUTHfAgphqyNuSZVqMbMjkQ7HdKVXxC7yeRn1eb",
  "key9": "3uKroQg7kA4b5xLU3pgZkzS652vkqXfrr6SfFNsJztxa3S13BpN6vdoqf9XK5GVYXpRohYQ8iXhCXC9eqhTt3Aps",
  "key10": "5CYzDvRgkJPcnK5LUmjit4dsBUKhyS4FoExSDhENa6i2qjqMCkkZxALJpPmBdYyVCvG8hF1m3XixaUxRBJfUGoq",
  "key11": "5mi8tNZYty9nF47dBJWVY4dVim6pgWncGPM8pw5HBEjLeYtTMTE4BvQ5NKCYAZ53i4rp1jwfiLDYF5N7BKRn1SZi",
  "key12": "2hoEiTWF32NKcrVwCDEa7Ypn31DpxQHBx4fTZ277wCHFCbWC9Qcav1kHVenRGw9QbiTkLkzgncbjbSFD78REQ8U4",
  "key13": "2vYkjKHyqt3FbMGfoxRN2wm3hooeKMHgrnyZCEkJxsVceFf2HWe4wwsEJXyM6AqDwCYiR82dnCYAJqaJTZgBmr9g",
  "key14": "5mRgxLHXfUrryueZ4DcpDexhEefgtwXBgvDQqUv6hprdrVaHwnjVXb825ihrGjkZyKL4gL7T6FeARaDuHNTXKb9E",
  "key15": "TTrexpqN4M4cosrKqkFUvbbH8pi9vwem5Dvp2pop4VafWpDp7SN5LjXTYyiTBnU5LLVByMJ5TcWCAzTF7eGaTpK",
  "key16": "394Ma9mzpfwLtRBZaaXoyhB6ghRLLmzAPSGKdWJYabfhV1MjPtJXjEifRLwtfaWXfpUpzrkAfHRFmpjwdaQ8Ay28",
  "key17": "3hQKGxXoak4Co4B3KCckeez6ZB7V9HALoYU1dtrjFyyDFayWykDEtSbsxibuWecszrdzrNe5ftbzuGXp6xCJsgx9",
  "key18": "29uhFnTjNPK5imWPBx8eXQQtiDW5xJvge9GUeKkXSigeo4ZQvWhXo4U2ZCGZEhsFm911uvcy1z88kLCm6yLSe1sU",
  "key19": "4Zbk9TesCeJMNfJaxvkkNSqWVT4QTizPNCGbVoHyttu411FzSeCqNCVJPXKVkEVQQcvVoxAty3Zpgq9ooWL7jngP",
  "key20": "4oCmQa4uU7gc9zrbRUXWEBM2WAx6nRJBty5XVbmdxJTVnsfJzfBSKGZWqE9VGzi2pzfpfTFN9svGMAfRhjPQVRAq",
  "key21": "48CFiZ4S8eQ9L9p9NdxiN1v3jmhUtWbZnkXjfxRNS1KkUcN9QC5fMMoxJyLsZydnDmbrUpW6z3FFZYSSuLHLEUaU",
  "key22": "37pGnHG3eY8L4FXoF95NfXzoNjNgxpXMPJemxP1hDnakpjeBrQyo1VbtTVvLmSVJzpCghLZbRZHjetfxXDMtXhd9",
  "key23": "1SCXN899JHkrtYsj8j8b2rjSwpbS3jcNbvBU1UwD55NJxWdUYj2rHK6nCb4ZddKZEmLUbkC1w14LUdNenrdixCg",
  "key24": "5Jn8LVwtRokskC3sXC1fxxjhTtEfY4BQ3jvvJxCP1vzyQS4jxEx6vxFGkMXuzNnGGSF8ZkcmrAyQzrxomgeQxVFz",
  "key25": "5h9cUH1UMy7nCu5b1VitXCKpsx594VvdtUuadEUsufe83MvNfnoQ79pqb7SCzCoUpirv8uGbDFFF4Z3hMoU8Dq19",
  "key26": "536eutPJ7D6EuE5BkxfAqZdkmexPhCq1ydHuQzoqFpLPcHasmWBwegvAovjHnjj2e2v6NzobwLdQi4XJ2yqV86k9",
  "key27": "TnGhPC5FXtsA9kAaqatPJWDfu5iRQ6zijTUkrQpwcQz6CuQkbwLcWydMusK5ww7T3bDzuUNSg3ihfXBs9PfyApF",
  "key28": "4bqXShfwyZFkvHGH9DsyFf2z2SVvVAzWz1TzS8oW1UXdeudWDSqWuHngzztjdf1GiauFBqXsVS8NAfsgoFZr9ptr",
  "key29": "3C1bDGuHik7UdxMrfvi5tBWfD98JkJn1VCsxhqdbJSzmMBN7tEBpK1AiKvendM87JBhWrQ5MfJNwP9qVaTKWf4U6",
  "key30": "3RhLR88QXjofXWExnZ2ZeAJSbKSasZ5EwDb4baGmdNchDXx3JAWpG5doiB34rtPMR74vWY9pyTh2QQdtLMxFrMkT",
  "key31": "61ojcxaFr8L7weeNWN5umH63qMG9uhptZPRcu3s8bo3YJSmycsB17QWn5juMmK9GPRW3PdMwVVGP6eDJBcxxK3Lw",
  "key32": "3xHiqFvDzWW1569hw5P5ECdQresA5TUMfAHJYHCK8v2PDvoSu4mFBtQxBPCTNY4YcG38HKCHCkitXoQJDfUYkxqr",
  "key33": "49NYVyc5mSvvmGvvXHAtnnvR8WVAsSgmeDkWosL4hifh5iUDpMVWMzQ4BQtD2ebha4VPyBdsbHQYekyuhQYMyMx5",
  "key34": "5rbNKrU2KNFWHpyvChrP2NSuLZqdtU74YdFE8dmSDAGSCuPvAuBbPNGrR1s3pVSYnwuxE9X47eikNA4XMzs8SF5i"
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
