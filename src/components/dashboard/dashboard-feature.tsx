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
    "3ny7Wmuap4jxztwnidxJu15fFPfg5AzuZcErZnHHdzGsRnL1KGYFzr7Uzwyp8jkpB1oyRJLEDgLij75b7PgEteF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XXZwXGY96f7w6NJebkoPPnvpWvTFuwFLSTJPKF35JxCZjeeFVpCnEpzHZaU6Wb5N7bhfSYav1Fk7Yxpo5Xk4sqK",
  "key1": "2hSeQa1LLekahhnZ7VXT64T6vnkZZakpZchMLqJN4e46bJuGwzGLzKte1kk7aypRX4bCXd5HdGkwpKuRLa971CGR",
  "key2": "2JXY2xd5rkf7p6gUL8TB4xaPa27TngiYbexPZt3RMkxuTykoWvy4YdV9Kc7C8WxwP1LaoeD2bFPQjbmFVH14gJUw",
  "key3": "4gVZWNENgbthGAGS1FaZ9iAzbgJqmruTRpixM3rpbVcsE6dzfhKhaZYyp292JLZmgxZpYbUAAwcJGKLkLVFDkaoa",
  "key4": "3sPcGUf2EJUsASEk1pDgqGfZ5eubiXHkJhSkfF2Mp8iSicXyDNU2EinS1NKPdUZ6ZWMc7Edo1S5nvLZffYZsTL9U",
  "key5": "ZCXhyf2ocsahoLnUPqsrMZgm32R52HC7oAaNpnBQLB8uHp5J7yAnfwdQttEwDAdN2Cbhm4zbbyJnFKB4WcA77pg",
  "key6": "24pri59qjM9UiZMhzALVKRoRJfGHhEr8faE5m7PdMDigsocetHCuT66L3KVZC4yz7KpQ29Rvsy8DAg2dTj9uWUSt",
  "key7": "p215kSVwVHDpJmES1gy5EDNFPFXTCqUF1RYJnuPwUu5u59WBrxdskEYjLGamH2GRMPZMCgFDvhbuYU6jYZSWu8E",
  "key8": "PKpXC2pm3aTuc2k1CNPYEWmmZJ4LSzo5Z1AoebcD7dJNCTnh8aQwBjTSs1k7rkW1Zmh34q6NQFfveWAnUS2W63U",
  "key9": "7EkexDEvjm4aMN29aX1MHYDY1G1iEZBv6YJ7kzcWXzwZHBckQac2kDhRzFHejsLcEaeZdt5uCsib8G1YHxC1rTa",
  "key10": "c3kbpo3r8jcRGXRaKPRCikQ1k2NP5d7razvYHkqzbfQioDbDr3BjQ8it6nwJyamb6QSJrL6C3v6xfdS75bsMLmt",
  "key11": "2jGMw593R51PL9V9mhCq2EdE6rbUpANopxQZxpPAk6uaLUUKsWBokw4WcQWuaUj74fxQHr3jCh82asMi9JZ3CbUr",
  "key12": "26PKqFhbBrtR3C88EDECyTjPTuqh1eJ2ygtuEQYtqh44vWNLb82w2xrJLEFb56HRgq6Ag3hArmCH2W4JF4FDbosc",
  "key13": "5ZTzi1a9Z3KqM67bmesKqm4UPuqUamFvCJ5T5p9Fu6AV9zE8wjAxFVFJiNCEvEE8aFE58wVLc192YzdJzpZCyFxc",
  "key14": "2XfYLoLFpMueXVrZz2JaXNHc17zcAcS4QKUxuFyYF5GQ8v4npucLECMQkjmdF5T1732UVcWEG8Cm2ttt9Bfzf6K3",
  "key15": "65GGfR1TLs15JQbPaWtGirXnYKQ5RMZ3Gbbf9NYvfWVDaqM2HtNBNyZbVetfmuARfJQEVsjpCXbGUdCB1p9CysTc",
  "key16": "2P71pTQXMYnHDH2DevbfYBkggo3nwgVmJvjcxVELrPkTaA7Szay6fiZWaBWSYtXMm9Q72L2QoYYBqNyd9XYpjURy",
  "key17": "2bqvt1nK3oAr8z51abqcSfbzQA8gM98QoR9E8XkHfNPKmWzpT6Wm2Xuc1BB4dafiy56pkJhTwYMapDYnSHJyMr9z",
  "key18": "478DvugDbeWgzpMDoejj4Y2GwKRtjJyNqw4ukrUHxChz3j9sPZzpSLP3hJZ6DTLyTY7Wuh8TQWEd8MoH1oXhcjpw",
  "key19": "5DnW6tZ1LRpRrzghVwr2VmFv8X3Hyhgjs7zFep27poRSxQF3wxfUEbwHWxR8ymMDH6jvV5KyH9MYRt1TnAy8zgvv",
  "key20": "5Ez3kTBEfjJDaS33HMGjY5PuoKVdSFL6Cp5Luhoa3VqsqufRWpBxuKvfy7priQ7bfvvL6A5955W4hot1Um5rkUgM",
  "key21": "28WYTx6mMsxTCuAAGjoUsx34Qdms3B6MtSu8bzJZxRShocTPZNagF58pAXDdrDazqTVHBLNyywq2it8F8en9g9mG",
  "key22": "4BCWW3i2pc45de1d9LyUSqfZWHoWTsAGgyLFXzuWsgFozHffpbmYAkET9Ba1Su61d2WpASHHa4mYKpZidGc1TPSB",
  "key23": "3bjEoXu7qF971CNExVANdV2Kz5AKhySR8C8JntahHVLx77pRM3w9PWZJcNaR4oeCHffyvdcykbAGkUdQHEziiuR7",
  "key24": "4Fia8jtrRLUe4NGKuKjWBEmY9ixPbMuV8kkrsZ5VmD6bX5h3iPnCS1Bzd94WgkzTUc5aWAknQfAiPxgNxhmWeYbH",
  "key25": "31hnY7EaFx18AtSYX7qLbPRgTvYYQdjehe89zyosd1GFH2vBccvXE72qW8VUWza8MJ4vWQBkWuDpMUgSBu12pXfu",
  "key26": "tZKeX1MXEnbuPmDMUpqMiX8BgH2mVsFRZn8gC9r6kVWXqMSiG31YsNqdKq4Ls27he3asZC9cHTrAVvACQuS4pra",
  "key27": "4UxTFeSwf9U8GutoRBJFGe4kJCAMVvYLUaUGSkQtJaAxYED7nTTUUT4ukSg9xQbQQ1g4f7jUMq3UBLLoejCzQMEX"
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
