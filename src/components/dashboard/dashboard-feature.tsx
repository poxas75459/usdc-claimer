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
    "2hbtYLbGo47rKUmnx1undVjcPHEUaRK4RGs9x7XRyaWg3sYit6qx1bDtkd4EmCvNXSaxQL24VSMKh3k6961F5ss6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49zGcDn3e28p1rgFNLxyob6uYYG1mwpQFPSbMExL6DgKwaTVqz1TXFcCieaDfj7cWdHpwjGzaMeRozGJxLuPcUoS",
  "key1": "2AycpSMP7nRJtbHQQHjEHjPfbCV3762BEapvD6oHeEwPK1g5WzUwRRHCKxWVphtThFyZqr6REDyAEFPXqb6F1yHv",
  "key2": "5ZrB36K85XJTBZxfKcvvu57iykJfa2Gxw75zRpG1RAsnZ4Ur12fYScp5s3PdD6j2hHQSnEJEGj2yyetAsghhnZeP",
  "key3": "124gfFcFs2biYTfe5yPp8w1GyzBZyPW4RJvRjAUjjqEdW62MDxjX3Lk37jnoiAnkTSXmh7Dysi6LXdc77hb4LqcM",
  "key4": "BCywZzUeugNVgpnp1cdiubdaatApPHgrPgg7xuitZ3r7m6T3ZB5QoG1PMxpFUadkgsRmsdxJuJwNTDAKUCigaM3",
  "key5": "3sM21pr5rbUXBtsUkcu31ngqWtwxmEPFDk2GZLGgQiW2f1bCxnW9iJPtD54Z5rNh63uBuYCC1QTU9AeVqXDjVQ8u",
  "key6": "3rGyee4J9qBSKQjQu6J2xcVDT16o1bNSXzCAqQUNGobbfEXJb1dnLp9oNd29LoWMNgfKnDBad28EsK3MC4iF93FS",
  "key7": "3BZomkz8eWYTvKMN2gpc15txgPNsUHrM6WSQ7cezfdzQgDcE1V9jXTJrTsnetp6xQ46RQEH9hNm9BMVVNnPLWXQF",
  "key8": "3G7Tw2MQRDagRWzsEKNpiXATWhQLJJukhTaXpHRqG4ejmMAs82qtFd2hjQSjqBQxBAQU52F49xaaja6n6sZ7NLSX",
  "key9": "3HvN57yXAfCQBjKXnQ9mLiHu83S3wSDcgM8NCcsJbHVXsqDdQb7h1VuTQWAr9MN9aCDmQB8FELjh9vuofgNViBar",
  "key10": "4oSVbEw8P4roh6VDMFonK4mdk5Xxfipv3sQb6obo4iCmUscFASVXZssun4p5QM2iNP1qTn5nsPJGWREo9sV6on3P",
  "key11": "gs7y1TRh49uAbjGEkYi324bipGYpk7Vg2ctAqEfddEpGVpMRWEfth9PfGaiixk7j4TJvQePoPzwm46tYUdU9hJQ",
  "key12": "jYCfmJXfD6bAU5NoUMdx7D869zmHxqYbYYDWjgGUdjdWBLxUff82A4s5nn7CWV32jeRXrAt6zDsf6VgbSt9d8Ee",
  "key13": "2H3JyjPbSvHrncWmnCU3rTSJrv6E66qNoWw5c4HphqXMi6Jg3ySVrABYyMPYQ4XjDL1EdnSkVCN5jzjRw6TMoMnX",
  "key14": "t3Us27V5BJrJksvb7C2nnimbsRmx6c4SUtKHg9GQX4RqAtfSeFLCejydhhdh3uQ1vnPCU8HPyWKALqdT8AJLxrL",
  "key15": "5stQRSLY5rwEaRJ8ZuYEENPufXtQEZQq8BKei1FrgDXv7VyZHZBHC2LCRtjk4iehyFMz5S5nN7sFut3Udikq826i",
  "key16": "nUMtxc6X8JzcP4XhtmSApJ6pwAgQC2uo6FCPqmV36YpBGANpr55BuHUiVZmeFv4eJDjDGBjC1kc3aSp1eukmzDK",
  "key17": "GKWDLmVyJahDkLcCSv1kK9QYcxs7mJTqcLPZCTbxefJZq6JnKgGVqM8gT6qfwnftPTd5uiVoKL3yZh3dK29jTWu",
  "key18": "iTk27UDHPbVhUJ4XPm66B2iTV9VEY5Kk2ejTpSagS76XrR8ejjfHFzuEV6CeBUviFEsmVZQMrhQr2NePMuv9WQ4",
  "key19": "43onsFi5DK4GDyQQuw8Jav3FfSrR2pxPLvZGkB7ZZjzA7aKKBZzLCQGYbNSxzSf5QPKat8C8Urp8RQWesAx3NYPj",
  "key20": "4vNsUnSqcFCmF3Hn2xQZJhEtgXKSSzxKUPagYzqnfsGsvMaMwXtQ1XKLLRFxgxt3YNTZSGEtbBjUYm37Cu1u9ja4",
  "key21": "3zJtZMMVcWGyU4vgDr8WcsvL66kwLJWC8Z2ZD2beCjqkrEYf3iR5d1JsdphyGSHdnBb9irDmn8MDHFPnBJ3zTh2s",
  "key22": "48qLxYx668wdaF1z99NpVcdYoLXd2F2p4ZRaT7JPtNztLbP4AJ3iD3HK54ePK6vvW7pF9j8oGiKxGcnsDJQSzKTj",
  "key23": "124HgUkwywyTtoFV3L9smmxQ2GXDBSWnk6HUMJjowiAe1n5ZZtjjdPZdFbuNR7YBo392C5SXr4giQZUKrDdpCYRg",
  "key24": "5Tj2zZfJZHJsafrDdiPLtd38qdpd1ESXALx8MePjD3KX84zKjXDLsE1n7MeZkuQ5j8GZzVGDx2fQH5aWneBMFw4i"
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
