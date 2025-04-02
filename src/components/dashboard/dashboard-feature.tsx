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
    "3m4TusCxVhdk4iNnksQ1EEMbsvxSkh1HZaCA4y5QQgpT9vBU8y2MAYCZws5DDejwkttsTHvHYXHqSEEDRvNqxsMa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oqRahW36z1qZnW6WqDpX2PgZY2km9X7vwbBFvwEmsnHms4kF3kjkwtBhrm7YMy5ijzGYAL8rMVKDd59J8Wm3CnT",
  "key1": "wXWwcEm5CbiGYPXu3H2XDMVUfbdZvh5hcpuVSWxSra6SeGKXnH6rcg37B7kHFyt7PcMfTj2cXyWMYQZfax4ApC5",
  "key2": "2x9mqqtLxAMCMHVaW3y7UC4dn8845DRQhDmnwJkg1CfEpvRks47W2haiHZJP8FjkeqDLTqahFVGGbG6bZLx1HEB1",
  "key3": "4xuixJNECXk4JTVetbRnZyCTFKeaTZqs4QoafUL8Z4bHmgb3QwoLuychaH62qswurEfBQ9AKgaV1onRyucYyW1tJ",
  "key4": "LB2FFM51fzNFW1ewajQumq15JjgKjPoCAzUvta16tpC8tU7PqEuxhMDGdJRJvhRxraSxj7Q3h6ez8tT6F2B7JzY",
  "key5": "3iRSS8F1xgdbqhpZL8QXVcap4gprHJvMdfMkainGnyvc9HpVvXPfuUiizqwB4CVCU4b6aFntc1rzxmbXFBWrQUmS",
  "key6": "3nw5Q8xumHRQo1LiVxdDV5aBsFU1K93E3pPe7ofWwbH4591y8BEMvxwvLF13Ng5NgY6jRdVhQtQZJzynsD54jVuh",
  "key7": "37WPuJnSzNbfaJmainAyWBgZGfz25T6t2LjjwgXB5ubSK6TwcUC3BpgDH41S2wQJ9auBqnvyqSX2fdPU2f6wbthL",
  "key8": "3djGYfvCsPzGCs2tLtAy9RizvVqJNq3sYzud4bvJ4HUajdNaBzQuY6o2MLQS5yVieD1TYKb17nv5zmxScPaaLxYA",
  "key9": "4BvFRXLyqBNefwwbH5rqc1LByHsdtYoxLDwD1p8KA7HCEockvCQv8nfHnpRW6ZAFhUnAZE9Y5H8gD3qngwmxAc7q",
  "key10": "2HYfg1Ui45rBLFTYNK5xjWSRvXGy6fDg3oCQjBCNgQafpWNejEZMPsG16uYchUVmVDy1jvZj4dhx9USkSgpjLowu",
  "key11": "avx4bep8KdKJwyHu6AFNevM6NoZD3XXftVRJm4dS8rxdGUR5PKmge3CwT6xE7E3hwoEpRJVq7EVNwGZQ8cMNgRq",
  "key12": "qa6GQuJniBiHFTn7MXdLYuMvoeoeVLevvg4xQdY5dUuMyqVWb6fJXE8x8JG31Qe8WgAeDewjmrfLHCHzTcfYh9d",
  "key13": "4nG32hdCb4FTn57DwB1wdPYTGnZmpRf5YQBbfjNHRVVQneidLGBEijCW81cMA2KzbrqmwoBC4qsxgkq2iKPy6DG2",
  "key14": "5nXRZKZgPvzvhdfREcqnFzJSM49t5NpXe4ncsSqYuTR6N7ZAm6yWXSY5ZEcVGi9AwoVBnuMPVgZ64rm957tRBSrM",
  "key15": "5CDwLRMtamY5EmcWX5jiRony4fD9ytx8EyESZy7tjBiCxwtk7oX6AiwXBfWGWpB2pnbPvmxYCvBnzhbcMrTYFoFM",
  "key16": "2MzpE83SGtKBHsYNpLm4Sjy9gqyyjcjJxkPuHRRrEnpYQw5K1b7RKZYE1fLQh2QnVFLtR9soiD8wVs4sHamm54vA",
  "key17": "2pGzKVdsdpHkCfUrkoK7a1WKBbVtcxeRZFfmuhzEs1xTqHgsoiYxhEEA5qfEGxygfKQr5nKGVgXGHerS3ahmqi47",
  "key18": "WxHMtBKRMCZ6rpVEWyvSjHhcdeaxH5o7abWSzQon9gzwNcoXjEVR2RwTiyHq9V2Zajht9oyLfG47Y8mPa3VJc1J",
  "key19": "2aFMbQvAZXgDG5VqsCMjU2G4abJRZTN6rT15ReupBRVtCBZTAigy7g8gHn7Yad2mTzZoKmjnNFpkLvB3LVqriksJ",
  "key20": "YEKXr9JtFAJUFAMcbntMo3vcaL7YokxDLwYpGrHuyegJsm6aaogb5YgDMvqN6CKZyqn4sFYbK338jkcxVpSqcYp",
  "key21": "2X1LvV3LsRVg1x7HQAuPaaaPTVZeQ4fFjDbyy9bHxVEmjsfSWCzMBfCHGmkAdMbAkFmNJssZTLxDi9umWC1mms2y",
  "key22": "3trtuH33enPpB9LuA4HA72C34Shrj9Jz3rGehaNfZNFTh5UBNy5CaZNcg3VD5UheQcyM4a497CJqdnXMfMreiLgP",
  "key23": "2swRyKv2F34kv2VzFmJ7ejA9eFT3Fw6ZZZHtSQdreuEfkZSwjhEWqS1i4Ywym8NMqREvnA8CNhT6PTjV7joHHBDi",
  "key24": "423TE3AGzRgHe8xm5qfUey4dk8h7S8LZaYV1YVVVb5ue1rABa52rWWof1G8CQ5LzhStCN4K6Dk5TBVsgr1X3qJHY",
  "key25": "3LZL1cmZs1bPPLBZBJF5D5DcMpMWNDAu73MVkFdrM4LVQhaYBzrdV68HU3C9m6dFMComJKLi8x5hratSBQVrVubC",
  "key26": "4JnLCenJbV5ZokZYfrF6VrjRFew82vjyjRhqEkaeoRfu5pZZDBKY7ZezAqXAwAzTQzcVMfXYaC31SrApvnJEN7YA",
  "key27": "2JQrEDzj7EhuFUNr6FJa7WhfKQZQzudgFLq1Z1WHLrr2JhJitug2hgZPexXpSF5HsuZkERJUzjx9Q1CkddrGyPRu",
  "key28": "2s5ZciAFezoAUyGupkcEragEb2ynHPAoAwAij72d7ZjKcw3wU12u1yo1wfy8u944r7zLzhitJiDmJxZKZb877CVg",
  "key29": "5mk9dKzbTG8qednkQYT4bLJBSHV33qBa5obWzCJ4Z58sKAaR3KyjaE4vo18LVHZAepwkn98ypE1XGoViyQuK9GzC",
  "key30": "3CyNaiagMvSjRTDHKd6xb4s6NP5UAzNmNcsV7DB1Jd4v5kTw629WGQY4vRdW9Pf27qgB8RuRd5xRLUQb3PRZiL6V",
  "key31": "2Q8rEGtpNcdWmrLTDFQDqDdk2gX93w741tY6UW376L7aMau85XSTwRQkS7fav8fjvZAa6PLdcRgX4TkfAyYrYUDF",
  "key32": "57x8j3KEcHgX3f6JsFELaihqsMZxRnnhaFyBGYDkTxyDXHjSZE15FusEFLhCskhBMU1iVppryA9vHjefwS6zQBN4",
  "key33": "4ZYbWZg6NT971jEbsv3RP8Q464vpbBBok3ePVBV3v9tqThZTw1rCQB8qesisJFRm9xcnniCaKUnUYLK5sRAJoSAb",
  "key34": "4s4MtvW7Jb67vFrxiwkKkBzcEzUJZ58Z6iG7CufhFTiBFvFSJU7TuHMZh7jLQm8Vchmru7k8fJY8KRJBbTz2v5pV",
  "key35": "qLjy3cK3H2qbV9bCYDREsZn1DLr72Q7r3pKyakGbkNCYMifMpTCyjo6TW7VyzeV4Ztezp64wMDFfUcPnKpJVDvy",
  "key36": "5byxLnsRDFjVpNLre497zX558FaqniVT8L8A9f7kQsUnEYJcCpDWcukxr8BrRUwwLD9epjkc1KKKhDeR85fuSYwT",
  "key37": "bRHAj21Ji96JCuvjHwGaHRSimBVsfkDk87vicT9ohCWQozbiaSjoyfFDnn75mKnpZdEq42hdGrhuF9Toa4sopUB",
  "key38": "33iaT7DpBfns3VZ3R1EtYpVxdFtn4fMGbXWgWcFxUhDH6oVwEPa5yPsHGLG17LbFh68cBmEbRQyVNRkWpJmrEKjy",
  "key39": "55FLcuUaWSpnhCAhtxGJeqkqT7jQhD5QkSzGncEhYmbFX9wVMb75RyvG1bbWBYCYfPgmvukYqE1Agm2pnEdsQ5ot",
  "key40": "kenW956wNFxD89MBhKVyRq14fRqSf8zK3WiXXjCBDKnsNvvinnqxMG4jtavNSkQk9z6CU4DaCHMP3m6UVy7w6C1"
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
