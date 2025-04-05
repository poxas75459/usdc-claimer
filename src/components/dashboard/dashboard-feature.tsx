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
    "3Z4yGJ82NsDjdBKy6Css9eysG8chXTriCm53YvFxwP4vZfpGdp8o4xDcsFCAZvDLv7kGonnWxRe8cbr2TiKawrEX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DrzWEgBP9xBysExDyYguuoUscTcSPPppY6RBmnLSyYCMyKKk6HWaDghsMu2xWgVrTqwxJk2uhdKwotmDkTny74U",
  "key1": "mFaqvqfDbg37X5n7Rd5jYdZaygX2r7K5GSDQEDHZeyor4AywRncjmo28M4ybt21KLBpKsv4Hdvy4H52H2DBV6uu",
  "key2": "5cpaPSKStC1c7qxQsGnar1AwppTiiNadUYrc84FWbwxtGoZbQSMxfPuMxaqdi9E149eKq7CK3JGccFDdwPcCBmLR",
  "key3": "515e9YZTmyaUvmxtUiGYNbEbsN87EFcHMF2cCYxhgRwygZgEX6yrgrPeoTg4fdw885S58hW2mAURa2RpCNmx6CSd",
  "key4": "2x3FGSiHXHFCfXHWJeg5xqUWZvCuUFa4n77kdYDM1wMgBNFbb7LKKy79a8Yg1xF8K6c1eNmiNr6PmPgnFB6aDLo1",
  "key5": "4SHByDczMaDa9Aqp96cqsRjPt97i1zYYTE5HcMKauYxTbvHhHdKDixqs2aWY4wwSRx6oCwPGrfcE2oKHZyedjfre",
  "key6": "43zna8vxJWkVbP4B3hy1Y5TVw3rziUiJyvQSg5mZpQciTcb8WZNQH3mcng8NfJZGkrkNDAZSC4j7WBs4CYmZWxo2",
  "key7": "5sg2WkbrkhxUY85yXoQL4kLAecd9CuD43ofSGY2FyiQoiTE4XdgWMgNEjkRQPiMYfugx4CxRL1FxZSKJTriyecrg",
  "key8": "4RE53vc96Z3sXJ1EJKV2xVbHz32q5s92PchmDC6tEuNxgsyKiuQvHq4M8WVUoEy7fMgKLkqywFW19UFu1NPZ3Rpv",
  "key9": "3MZmKz94Dby6cgBD8SBG1dDmT8q3v5xuAuEDZwgLBPnJqk5E4rGmAvPkRmmsrhQ35SRkr33NVkFAZqVq3e89AYff",
  "key10": "4CzwC9zfk6MmDGfTLYGQeqyBJfKHxcVnGrmHivVYa1c1wEZTKmzkqMfttv3ha1sTsw5W5YotEMHtdKSf1qhWujkh",
  "key11": "5y1YSy8wvej9v1ET5RhVzvR1DwxCyo1Ai8PTAX3HX8SNKgBNuBVgvFoJxuVvrdazpjMv7oUxUagneLWYuiBr1bri",
  "key12": "2auzhPrhwfEUYdD9emiv3u6xG5Yj3B8RsYyg3z3h4pSMBrUFKYzpeEP2QEzYpDYmwdFDJFTrP97jRT8jQxzcE3b",
  "key13": "3cWX19kb8W1VATfbXAK1mUXkzEi1nQrh1MyATssqFyCDNBEzYezJAKnUTXkpTuL8k9pjSmTFYzDBnHoPZp4WFosP",
  "key14": "5NghUxW3viH1wLESEo33XufvmHTWpo6GMaawhRSaVMprzcn5p3GPGJBnbNb7PoL2QPDPPBGooY65Eh2VdQRtatsE",
  "key15": "5qBFXMxkHmd9K39MsZNPknxbXoo48J8V2yZGKWo9cUGxy8PthgSpoWMkS35a43Mhz2RSPgPMviW2pwgsyuncgDNZ",
  "key16": "48vQRrBijAmrCtzje9gpWdgKy8pHCwpLAEJFW5rMRMAZyhseqgZ9tZSbeYjHEdFyQVAvAB3gbRygov6t5TYmPKr1",
  "key17": "291VD6MHahoZfpY7ecnRi2hf5foMBREEgivzBN6XjpQuZdeYRpwwhUc1QnZnc3Pym6p1GoyyhG8agnKNNMitz6tc",
  "key18": "4dgXAWNUnZVVubKr9Da3WbiDscxM1reULLDbyadEJP9RnmU6xGYb4tvKYjJGTEYZuboSfKAfSXzM5w65PJYvvsaD",
  "key19": "8dRaSQKBUk1T41J8i7NDJRii19CxMVg7sux7ibjZgdNtEZGjjrENdejVwS6fjYDVpsLCtQRX4pPNoXe9FXi2AWr",
  "key20": "4krVfDgYXRDBeVTwZdQTfxpQp33qoBBTJyJrMr7jZEWcG9FYceof9kL5YK1jRf4vGd53n2zZ7BLyt4HpAc2mwfi7",
  "key21": "2SPbGVeZctVQBzfUvCsrChfCPXUg22PALbWfxHK9gDai3JfQgQYfnYswL9WJBA5h2wcgHHVZNrmq1HjmJMv14mAp",
  "key22": "64DHktxwWTw4acAo8dc1XMaHL6QDDRDh7R8y3JzfAhW6RRiqxRvyh1xLC3qHBAaee7pTnGvCWtmbtYEd8KDQZD1r",
  "key23": "2e6gvsZdVHL5wgdyqh6F6EPqvwC6ANXKWXJ9kBMFzEbdksmQB1vKNr4D2kuVaSCj7i8v9n5svwnKZvLT78MJoFWE",
  "key24": "3PZ2K2iqRnzXMC5Xj74G1HzAtKFKnWAVdHZvxEJvrnijkSt2Kiz2ZvDWoSWrByRDZuA8LfBxkX8ckx111FBJPsMc",
  "key25": "eFW9ubDP7umnuiG5jvDWUfHaK4heApxau8eEDDw1ifknfN5KxpA4a7LhmTzHzfZsWJ1SchRiRAwQU7YuMTY2tHh",
  "key26": "4HohGGA9SurJNfXazHu2GpRay2zTCRf632GR4PmWXXW8r1vjarPNVBMFNGfoVpQsCwEbjmmdYM9r5qxzkmJKJV7Q",
  "key27": "57JvqxSTJ9mvM6qN2QiYFK7MycqwDuFt6nDY81UwpLnfyvc61cJ2gB5RjfyJqPqjm3E3AG8xh78PEWWimrPUr9ye",
  "key28": "jhfyA1vxEYy745wWMSBezvSjn2eYh8QAQpCs8QC1NCqjSTfTcxx3d5UNhgC94ZCU3Hkn3KYiPv25B6VyhUybU46",
  "key29": "23nwunYfFmDeqnN7mwRd1DrKgFFFHcpJmYt9QNtTJHusMRriHjZNWEJMBuAj59S3ReH5CoLee3SEVHtGNYyDkeva"
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
