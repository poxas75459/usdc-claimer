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
    "3UCzrHyU63nDYKdGtNjCrFBMoHv5KuSZisWYucNUPESdSDxMt8JvFTFDD3ZudPVebnbZWau1y5vbW5oFqYXkz2oP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TimiR7rmhfDVTMranS2PSrLegxAAa8p9NyeHhCrkpmv4edLfhqj2dvdiciMAR9GmGdL3eNpsNW2suhAsGtGQ4t4",
  "key1": "37TdHBZa4GpeQ64VPRk2HqMNFZfwJYftWu99nbmeQy8MxZ1Yh5ZwPm4ioYyCU9Qyhf8kbcgDXteRsE9wpLLfbZPf",
  "key2": "pdtiYyaoW9uh8Kesyrd9uoJGJAW78fXiXZdf2ZqgRcinJ6M2Zpsh5rmbjkuXjSFf6V9dwajH8WCBeTP6X4fhBJU",
  "key3": "2acenfDFu7F2N7uB7xVsXvEjhJbmaUMyw1DZDu52KcfKUaWzBnjNTssTLa6Mgm2gXwFcQ3UTAt4SvxLZfx4rJ3J5",
  "key4": "4i85qbTdbYqxRkCSyijGEjeH2DBtLvBFvsRH8NoaPtfrdsL8C1sorJy2f99YmN2x1wzX6zR81egwGvHAXpFDEy1t",
  "key5": "2np7fncTVc77GD7qtnAEYJkE963Wqk3oLPkKBtZ3P7AUMYtnpLZbfxF3bkADS5EqqWf4NzN33jisiPNXFrPS5qtu",
  "key6": "2haougsaipEc1xfGBdRmbbGES9wiMm8feMr5D4LCWohnV6kYWmaYrt7EkdReCm56pxxF9rQkTZAiaW3XeoB3qggN",
  "key7": "5iBqD8CEUziPqqHSWkRcwieWjQS8b9uALrFQUyiGgRrQZB9dNLUchLdKS3XwMD4HtU8VQAAk5Zi7F4epMe5CwwNJ",
  "key8": "3ytyPTnJMbe9q6RvBV3v8DtRneNQdJFmdVcjXkM4dbcJg42gFgU4dpi9hBYSPBSm5uUnzRCNRcVonb6rx22noEfn",
  "key9": "21o7yv4qSJVXxY2WL3rnXWXbeBdgPUjCiWQNaGgHRpWeixCznE5jmAd5Nhzptsrrukjq9WVwJoRxdauGHT9ZiMzu",
  "key10": "bgf77rqiUVdS7wpVpL8aHutoNnAGNV41hENHmRvcmRo97YDvjp1trLNk4YwdmybxGPnfrdyrqiGX4ytVDwQAhMr",
  "key11": "4W8fivJkmmbRqnsGvacSvpSXLKv2S5mpMzFE48uNXZqPX2gBqkVxr7EDS5gcPEkPav143aXjf9XMuf89x367G7Ez",
  "key12": "4JtUr4XrsxcQN75zYtNb3JW8KXwRYeUx4F94VHqGShjvUiZksoeicQfJ9KDqPp8jc3nU7Frk9jL3pYcyQvqSvuGp",
  "key13": "5r6jPFxmYAZDWR1gkpRvqZAm1vZvTeJnjhAuCZU9J9wDYeQHUZKkCFZrAhYt61sqkR1YQuuUaqWauCBEoq5mbToE",
  "key14": "4KD1k8dHsjiiXSvrNmmCJMQ3mbMbUY8F4uttnh7uLyioNxwbqfb4JGcbAxVrZi8i2MVq7mxVsdKbqWH8MkFEDLaQ",
  "key15": "X44ZxB9a3RhAgQzCsbnMPpgHi1VgdV5G6XCWLji3ouNyaovjGCJEVc1qh5UtXVknrCVimCFz8MDTjFiP3dXqCgy",
  "key16": "5pjjgHXKNYfPVHPbjqnvTChsX2nZphC16kopGQMrxGRVRkjqpBpsUpnJVnrqUVHqZnZAKdC3cTjtyubKso1tEVDK",
  "key17": "XMRqoWMtomJhK5oM8zdnDVyae17tAQdn7V5FzHirVY6u9jfwJXHaBJhFP7KCAewrxK5geUrxxr5X1A7d9Cdfqde",
  "key18": "29sgT3MqFX4wjG5d9Vp9br4bm1ayv3GwQiNi4kcM8XTAPuusVDRGxAiQXMiCD4AqMAWDQLC2Ssv4sw9jLC31HV88",
  "key19": "57wgx3rMUDi4FbFwWNbi9Sg6jW3UvC7kcsT7B3APZMDRqVJzkC5EEfpe87Yskq7RmHnZo2ukYwzwNcy343rxse8m",
  "key20": "5XDv3rTc4TT5wnQagorwRU6fiRKBU6AcnJdssayhrhcpp7zxaDt88JjrmDpwSwPPkc2q4eypBDsxdEkHzCYhoMdH",
  "key21": "4g72qgFzdWF4MzoPrjhAHfUZC9uTptdLtkZmSxD1XPRSSPLs64mgaLfj3mH6Du9Pw8m7sF3NkaDygijYJGDRsiDr",
  "key22": "F4jrBCpGoay7tzDGi4MuiPnxws8r9FbETBPmzSUw8JhUUZp3x8qQxV7hJhDbUiPe2wByNFzRqoj2C6p5fpB4bqj",
  "key23": "3NAJP19fcRhpS4tniVNU9WhXeR3uQ9hHjMc5esomrc2nM72iAEhUherVPTutPNMre5xohpQRTU6oaY6qSTATXyoC",
  "key24": "t1gpFfKMpsEBTPNj1YzJhTk4YrX5mEk5j88tFEwnUhHGzyU2TCjo5Fq9fF9QsLzfsP1pAfdRJDPeid4AU94zf5L"
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
