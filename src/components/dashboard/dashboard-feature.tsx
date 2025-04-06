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
    "5fgumQbAmHMcE2R11KxVUH5Qq7LFrpteW5yXxVqbBLnp2MkBeyeQffsiSNQ5rB4iYoX2oHSvNyVD1owaa113mWAA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gdghKaEuSCEYEynm5gcUTDi7dK3ptFnPBRn7MzCAoF8udZ5CpZGaBeyTT7vCZibTp79VnV5L8dnGwE1RdU6Nv33",
  "key1": "BRFRAkeyGy3LV7ikLLuje8ARD6iQ8DAedPAb34cs4pSysRgC65zLiQB75mcJbqqZMKYf9rfpu67sSGTQUVUfV9k",
  "key2": "4bo9QnyjWX9y6zHKxjdCiSrcozj1BYv8D8GMwttadQBA8qX9VpbPPX9uY8eHfVPTeuBYPME15S8fdSg96vhJs2u8",
  "key3": "dMVa3BviMCQCBxvCqCJ6RVxheBa4Lz1FqURjCJcMjAHjWWpFkFGGPSG1XvEs3GAsCFw3tB6cFpepgUdBsH6fn5J",
  "key4": "2x2ABBEDn2SGevaBgS7Att3D2CdyWgx4XUUgTZ7TVmT6bVmRiYSBJN3s3dZXEgwxhNUcdMdpCBsoZ6CwCyDY8BXa",
  "key5": "3WS7aaEaDjxSiDdb1TQuGMbwvnymgJDbdGpVFH1CZdgcqKM1baqm4WbfEJ7Uw9A7a5GHooj5egg5uEZ9e6os8aVL",
  "key6": "4q36CQc8HUgvpqDeZSSUQiS4qKZZs9ZDB3kYsXw7gKMcz8AwGD5e64j2fWMJAiqUeZrS2TanzrDSekK7hZFbjjUS",
  "key7": "2osFZs4vxr3AixEVCCcCPwP6ippo5af7iRC1oBaCsnCjp96gMZFa5rgkiKh2Vr5bfaA3dKx2fRyqDnWZDccHT9go",
  "key8": "213PTDuNjTBQRYcgUy9mTSrLH4cHzmLamyfhgJQTcEeEhyZHAezrBPa7161WjDuXz2zJY3S3Uej36rthPJBLquWA",
  "key9": "49Yp1MPjvpapczRDZ4kM7ju8wtkdG9CqzuKUL9ky1tMoSfKrKG8v84FXVK4hMzTzJaJHMYBDu9xw8NhRBbEgHrun",
  "key10": "7czRwqyMMA6vQz7aCWcqYLt3T7voD7tXAbtFwhsAZQPxx5V3ffGgjFuxoN3aM1woYgLzude3d8oL563ZY1NCMep",
  "key11": "sEnz7d7awMc1nerG58Aeu6eqBLiRqihTLrqF4eaHt9dqryxjdsgj7R5gpLhsBNe5CkADxMJZNmtxqffRMM5GRJY",
  "key12": "4KstYFPAt6rQFUAWfgvizpjy5fx8dw8dPpBGy9M6voDoWLvztbqs8FS6vPqK4ZRuAYXNYieZi4hzMMr4tw7uwjJx",
  "key13": "5oLQ9urcTBAmEb8gDUtd9KmZWjd1Uw98ogm8hug5ncCSkt4K5S7Et9NJdmYUK5QkyZv9e3zSht3fuv8KfnvLG6db",
  "key14": "5ZSnCUHMfNSqtGtXUPZph4Bi2w2p5u1ZyaP9ZyeZzeoip4bfb1WCLo8z3xHWhkyFKHp71YNqtp3GiSFwP36SPepe",
  "key15": "5gtcJekKTTmczEdco8QSqQNMM7w9D9pKBuMCNfXnNyhhrGGcMbjsz4fYKoQUTuyrdmp3yZcZK45xUtH3wQLQ7DGU",
  "key16": "bau4GmSSP5WqvYbLs9BKUbqVLPmTrvFJAawVbBD58V8fF47ATj1BUdmFJ1JwzzZZ7y8aFWDJQ9ZTVrrTJzx6Ph5",
  "key17": "3HjfiAJVT9ZCBK7B8nU2c9UBYciAT85VB1cHedjGLY4QB5PhTwqqEq3qYsJmyVRPv9Y5R165BN5acVWiWUiKZLHd",
  "key18": "2KadhJfxZQGvJ2txUgnZB1mmeaBX7kjBip2H93trZMMJQ7N7XQ7seU4aq1D54iW7qHCDpt3J4WpGhdCHREedjaa2",
  "key19": "5jwRBLtQ2b4CjrVkb219K7t4fZdFz5BP1ujt37CtmzYDkk7Fi9gUHjwy85qntiQsUfk3ppK61t5gXoYqn2riTJE8",
  "key20": "2PEr8xTT6YLqNDHrQ29tXKgdfdBAi5AAAREcGPBgMRyXtkTcEHeugaj5gyxM1iSbrKL2ZxACZkZinVWUVNRA99eh",
  "key21": "7rJC5ezW6uwNX3Eprn7uNa6yP9YBzjAjBfBUNyqQdHLVRLRycox8eooJPEQxvf8pWbLJsPSn78aDFLECPQVkv3Q",
  "key22": "sxHRqQJ9B7KmM9XwfgvqLpWRDjGDz616qgmpRpFWbWqBo6DnBv65qPpPuq7LJ7Aq7vutrSN6K49pD5yVZpYNtbZ",
  "key23": "2T4SN1EXBGQ831iCHwDcXqL3yiNiMEch7g9TYYKf9Fzf8nhsJkKBa8KvXXrUNfE6RprtU3X4XQsdCZRY74xGgyXM",
  "key24": "2W3TZaVU3KJkpaCPbdWHTzRKkjrXeYirb2Lz1CuRc3jhBCTRmPiikAf2hSTzahUPLYvcqnxzpPYoCNNbuZ7Y1EHC",
  "key25": "4djsrVUJ5hXtBEb79uLbXRE631mTGne57eJeVkgF28KJLkSyviBSv4NQeETxLtEpQUF5rhMV8ynDTESDkTUxJM8q",
  "key26": "2ek3kW1EGW7uFA2LdpNJfz8LXrZQrZHpENEUbEPHRQ6tZ3KHxLK32sbeotQeTv3DfWdJYUzq3TQuP1dQ9G9niR2j",
  "key27": "5aPD3reP5gUkmynj57FL84R1esUVkDRNX7vStTe1MnqUMdUzWjPkV5bDpoLWp8VSWgdYTAqxSuzmJkUxbpww632f",
  "key28": "3XNQgzW8uwdbMkATapPvYbKAhZBxbWXeLfpVVkbB1fSBUwB6wpjt5vWbVdStRBFnHTvH5DoLheWeFqbCwbEuJZtD",
  "key29": "4Yz2QmgZGzeJHhFxAJ8SN9c2gqF1Qc2nN2Zpxz2d2ih394d17XSNgjq5erH6CBPeCZNWGixwcRzzBDWPku7PxP7Q",
  "key30": "5rk5geMq3h4xuckFAYmR5zuK7cp95FYmEoWbR56Mpu3UHi1GxZsZpeHPm634zhFe7egBF4XBVuLJmvTszHKiDhcA",
  "key31": "4Uk6W1EhUyhWQrXxNv6yCLU6rkJJrj3soEzUSoafRJfcf8zdwtY5JTCcYF47neNcxFzcsyDHJtEkbHtEuZXSipqm",
  "key32": "jMf6tP5kghW8WcKitrycYaKA6ejpKPth1LnNvLH6A4UWtEy4vNaJPGYNsBeDmm9Rx17RWXfA4tVvyQV4fdRA2dq"
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
