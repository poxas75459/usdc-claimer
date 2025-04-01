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
    "DgoVjCw6nbMReGfyMkvg8VnkyuDdq1fobNosZikLrZy8cEN9U2RRVjnuAYiakMWiFRCuyupTB9zg72ttELDJSXZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "356AoCNFsTFiezMgAZitkhVJziLxekcnQi5imEbHC3sqEGix1VmRhDA8GZbm5bgoiAQVBQw2zs9ZdFyKZvUg2K8C",
  "key1": "3R5dQfDbJRjWKPsqZh1NbvBcvwdqoHc5LyBXmK6ZSLKth5fb5pyLYfFfhfbwA6jouz1q5kgDj4XPtt85DkFWTjZT",
  "key2": "4AyRGFjZZDsuS2rFmq9GFVCxy9gjq4e41eXwQomPqeKM2x49fkTjHWAMkUveq3WEHfNks297vRVEB2uq2mpsGp3M",
  "key3": "3gd6bQZydwih5njcRRqis45JAfcN8jTyneJRP3SRD9ZDpStHsCWt8rzcK46emmu7wYYqz83gGtUdEAMszXbYQVUT",
  "key4": "5c3f9yuHiFNnf7rXM86qrbRz7es7jwMWQTxCrt2PX9YxpBmHb8GykX7aEZQRNQTvQ3yRWxHfVDCetjX1BSWKCzYj",
  "key5": "kwXUWS5aPbv3Bq7BdesCMXGifhhL2GbofZ6oqveaz9XKtBfUWWztYKifJP1CJHxcjocdvTmk4bAKXZdbUmxcAuU",
  "key6": "zDerqVn49zZ41ZWxLJajNChUkKsb1hWjm4QHMo37WkyEtdJsQhTSH6RTHHejHkeGTkp6gPga1KiePyvyreqDitt",
  "key7": "3CwyJdLjgg2B7Di5eRfefq8Ky49NDHEU7Pr6WsSJVi49JvN1GaWfFz9fdJaRJfYETA6PcDBawACrJPc5zg3hSArd",
  "key8": "64BuJssCyHLc31v6EjZBAeYtNZMB2VmEwkhaQhZRDGSd9rwNvBDSWSuVT9aj3GUFyFz9mUbJso4KLgmz7CC254jb",
  "key9": "41ukThDNF9sYPktzREZBUvGNeL4uK5btHrE882py2nX2UDzE3QNkV9ALPHjwSMk21pSd66zVxegbho9BDjVfRM1s",
  "key10": "5AvgQLkuuGGTGLjaJNifpr51NJU6G3jaWiGVyuEYRiPG677VfDRp6FRujU8NBrErCyaGC6ACAuJjZV5g18XrVcMi",
  "key11": "3MmPLP4ExqXhtsNwNAWrS1N4zr7HQvVSQG5GMYN2TTbwmeCsNhqTVXEvQMZntkwpYavT3WUr5129oFVHnBnhbSMK",
  "key12": "hzGYXgz6WXLbjkhVvJSy8SGdzEkcchQtGYxsr8eYd1KMaa8QY2deNmq56vePvTUToFUcLnKXWgJYYDa4XGHhM1D",
  "key13": "2Rn9M4UDKfq97wpjheZHs1Ms37b47trjk5sDPxcDxv7zapwuUiVGNWoPMp8nWNqUit8aerdZCqCMt2TWKz6YJBQW",
  "key14": "2r4cvJjRDtCAnjtHDEF8qYnG3Xuy2GEbj7zfDDb67wuPY8MMLUsstq3tHDdiP45Z9ftJn7SDAWKc9EMCqpbokqMB",
  "key15": "3TrLD1ZhdaEP6AnZ6rKNiYd9BraiJyiWNNWPzkwjWhjVbKtz7HBLdSenhPcomQ8ZjPLDg5Qqp84u8GSuDM6AihXV",
  "key16": "4KnTpwj8swwXnLFxC8bkqhQf9FoiM8BUGhwBmxUcDrgv8RBE1vPTaA9288q5tv5aXfAswBCM7F3ErZkp6hdcheK3",
  "key17": "Mo61QSNA5tnpg6QVtrWfRxgvtf8Wd7qAz2P4ghD7AvNec3m7dKvhJSSx3c9gvUoR18Ua399qKZyS7wDRnB64LDk",
  "key18": "3uh9Tn398brhKWvAJ9tBVZCVWtXFG2DaKMDZm5hEd2YgF3cjzeuqmfas3sMYCa6CwzAk55TsPUnDti6mqPdhENeS",
  "key19": "5Z79BNLH5vJnkbvhVpFeN1dyq9zTjWdtyXmf1n6ez4qvTpBFfHr8tnM4itsbtR1okwfhfmdinGSzACumjRKHtby9",
  "key20": "4fh3eCaVuy1xXdrKdauPAkkqYjEgCNAGmagP4eFjpkwtTGmEpmUqy3Q5xAk4GHzNnEe3y8Ggm2CzX8KnYZ8mx7my",
  "key21": "2Pb4yUmoUt8ZvEaHs6FhTsFNMD2zeTWe3JYk7i2w2YPV78o1EwbMxBLaB3swjK9UqNPARBc5ZksSrLwze3qP8XCk",
  "key22": "3P1wUUHsgwi24qCFdcfN26TsfFBKz4iXo4rGppu69cFcGsooYVWJKtNccCHyCPMLNaPEEHbgLVhut52aGBGrZwaY",
  "key23": "4462W1xxoyekMfrJBMvwZZ3oxH1KHsAVryuwE3NbQga8bgedxBvtyKbSMxJpAdxZ9M9MN5bDA22n8hGzVXdTsBFm",
  "key24": "53pULsDP35rKYXowqXrkXejsuDJFqiSZ4mBiqsJgMPGuQ8JtyHKPBeB1kCxRSokudAjnLGCiWbxQXM3Y3FswyPqL"
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
