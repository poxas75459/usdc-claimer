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
    "4AkuV8GotzH1PjYGHXJGJRH6hAyXgh3eX4SX2T5kKwC1uCyypd8noAosbwTXSq9z3gzFuCgRNhQpU5zjqVpax34A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pye5bs9v2RefPTQMr2JsaqtyrbFR9zMpUA63rv3WbyCs2bGmr6NSCFaUqpaA3XPtQ4pFnZSFVvtnnrp4oAtTGwA",
  "key1": "4PYBPiiUMaBaYCJjxBaXvNXibex9eWccgMXPsotajY5RhnSn1qUPZ9HtWGPbqSfR1bM1Hk4YkXqQHHtt9zE9rFG2",
  "key2": "DRVLhcyrzrw1oMVkdccbDEDqGYGcBK9QMLwF7sfW5H7PHqBC9maPfhkQHYrJqF9uK4RgqYSwtunsFpsWvSGmrCE",
  "key3": "4HGvpnD4xR5ecCn5DZNvojqPTqsV5Ku3in4nGD38Nm8Pkcewhe5VhtxmHTbfNVQqJ6JTP2AYkioPhMuGqTYkhRhY",
  "key4": "2aBCqcSmprTrSqEYxUod3vfwYFVtUSBVo4cEbJcGmq2ofC36nVUZdCfHU9w3fwWCpcfcRMozCsYfKd6UyT55EYsy",
  "key5": "vy2up7yDCvgdHeMAsaCHMiot1F1aPs4zA5askFxq9Cikj1sTxpDeoauJrP6UngLv4sskYssvH2UHy9XTcUB91ex",
  "key6": "48zsX6J44LSsfPgY5emi1eXhMyR56cwPHdBEGxcHQ86iYrD8NNTLHsinndPVGBVZgM6RBW73mGVhAUxqiiJA8A75",
  "key7": "bkrRrgYDPLrLFmBuC1u66ijwZqSXPKfMGZZ7mZjgUWfgpkTFEJ57pDa7o844gWVFSh3ECPKJ2jP6XpuHsKekucL",
  "key8": "3scTjsVpDsjtAMBmGkPkTejrCfJEp5i4Ffhcq9oasehDqgHNZG2jzNJsxbbcMYpa4i7FoBMESf3AuwbJDH5hWiMe",
  "key9": "49kCstz8zSFRbBrRcZgs4cB1YLRVE38SrYtZrRyVmBg3XjQGUhHAPzw4Y4pTRhQ6QjQADBskwD3YH47HHbiGphgL",
  "key10": "V5J39gE2Mt9sLexu4R6fjC4Dh4PWXJ35J34CicuKo8oqWHHw2QmsV59n8UY8WYm2X2PDuqNKpHtsfPBQUMUkW97",
  "key11": "3iYr6WREeX6MjmuYAPBHHMheT1meYrxdXFwBZKvhjx99pGPaJafygy8GvLgp3qMDasubS4XK9SuiXpWupeXf4ipZ",
  "key12": "662MXMZ15bYwSY5ixXvEnJ7S4BatCRu4kk4aMCYtMXFUyV8PWL95JFFfo2DPhVTbc9SX8EfcYCZGi928LHuGNn91",
  "key13": "4yYB1KgKHHwQpqj1ZzrfXCK9QZ31x52P7Ge7MrHPbsUB4mi6LTYMWUgxUGswD8aWQNvmkidcAvW4CkyitqvfmQAL",
  "key14": "59EJF5b3W33Cemkumv2CW7gfEPr6wicPLhxzSCi9WaXBNtFBfrwskU27vkgur1KJHYtCYMW7nDdxTc9kB5k4jpNU",
  "key15": "4mv2GhGvuewbPgNLc4kUKQPHfAbVvUEzd1p3ub3pVcWT1Rd7nSzHpNKqwhqR7x18eiXs5jH5x49WPtTUK5hd1yya",
  "key16": "kmTANEkKbaiurorXEHCjhF95tx31NWNSV59AgqQH32zt4XvhtFHryUy7X6qkooeUpYND7UcSuzu9Lf4VCdjcS57",
  "key17": "hANJL8z6n5nKW7KC2bPVCsbviN3zoHVE9grYJ7DDzi53n9JWSTk86XYm9TCFg3p9XvswcpNM8eNdwy5dMsFfG4j",
  "key18": "5AF7yUGtHKuKjuAynk83yhEorm9o5WApY2P1ciSynMxu4knTaHXK2R7yRB7RdfhhMczViUHWcYAensXkecs7d5sh",
  "key19": "21gpuQrPLKnCK8Xca4CGSnVe6RjJSayBApzY63YaJJdTVkvbEkVDVnUwqHcaDbzqBptMhfRT2N3zraGm6Dguc3DS",
  "key20": "4ddBJyLFZCZHi5Rs4tJKrVufnBPSXAb7XGxZ72CVXoH6g7S5MS63AdgvwRER1NYWm8yweu8LemVtBUTSWTAVnWt8",
  "key21": "48uiHsAdbeTbgF1jEjdGYqEMmp1qptYyCn9wX7R8BSuM33782FRpGMheLfwPV41Vb9QZZA84vjnX39duathSp3Z4",
  "key22": "64FofqjxTdjkMSed66my8r9JydYubiFNkxoxuYP9WQF9PD81P128oyq12dveEYTu3v7BX1YNjbVoU6ib4YDtQjMP",
  "key23": "4dZKeB3AXSrSwBH4RAbByeANan2PqRAM73ftqUVsN3rZRowmdSQ8r6Hic8N5QX929cM8HHpcwkALyDTMwnjzTefs",
  "key24": "387QsCB6jgGpnJ2EPFb4fGJWh3oJxaYYdEAEk11n5y8oSQozebwKYSmCutGEPudc4GVndNeWJ9sGBpBTD8YLzyf4",
  "key25": "5SmmHfTU5y3aH6dt2aQok1XdYcC7sFghkojqYAALxSf8tMKXuAsmhuzk1Uy8NYRvyCQcdXumLgqknmaJGHUCZ4aL",
  "key26": "4L3UFHGYzDvuW7zbrgXpj7btRbSd32VKLY3gHKo1x4hqWxkg6pXo19v28jtEKmJ8YbkdLKRkF5jHzzqfkv1Ydvq5",
  "key27": "PePsFt9TccxqM7uTJHJotkudo2bXPYr3gpb9uCwEadj2tXgSwtnNXz9Wq3TsHzzT4CgKrzoa9fpYV1G3i83sRoD",
  "key28": "44WEomddpNfKWdwr7oUA8wizY9EbKQW347dGFMBFRcsPX8r7iCYtuaT18PhoBwdMCj9sxwKdZzLZ4krLsZFJWJcU",
  "key29": "emjSjh7NNUbA5qoABHPRGt2Cd3UopqgUTkRbyBDpEqdzTeRZg3zpZNV55nPnJJC5vWNCsbNDM5kyEwK42zZoU4R",
  "key30": "3wGpsK6d4Q95TpgZ8YPLG7GgKdVr7LAevuSwsThgbSopEk2eKAjcUfYDLv3ysGzAbxHMvbdv4785MWM7jtGFMPUZ"
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
