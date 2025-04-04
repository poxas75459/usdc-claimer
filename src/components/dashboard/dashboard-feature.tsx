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
    "3faMAF2wSCQs4hW5yvC1PhBPMGJnn7ffD4NMdjWdQQUsnXjnxdZPfcicyMgUDNHuduptiKX1AuupnY3x3vzAcs23"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wpXEGTVZwEiui1YvN3ij5nJTntH7DQJGnRzX3fnyzkrRvB9ujMekjhWzaRo9aoZzS2AbEBjxUpmQzzt41WQrJmr",
  "key1": "2HpB625EAiXL4WtnGko3WvnV9k8Qh7pvbbt3pN3575bbdhewWpbEtV64aEBPYFmMUg76zW7SYLigxZ7zr1Pcv3AP",
  "key2": "giqMiC5fwvmqsX7HxkUmhRUGv4mAZ4XXqS579JES56ZvaEkuyoU32bvwio1xhbvso8SUkwakNsuq3e6HaoEwDJa",
  "key3": "4cG56ZN68vwFnDUgppG6iNHQRRLG1iJuaNcvDUoe9LZKFntXgsgABPDTTstN7Uf71hshS25YMeCRRBbET1EgMoCA",
  "key4": "3stj5GELYaCqrv6hhByXefPt2iiMQ5zi1MHTmg4FrR7DFEvrigBgWJnoTGSmRdVwfD2e6uzb7E1SoVfD8qbN41hr",
  "key5": "5o2pvReXWTHEUwmq5QN9MQnE8SKe77VkeoDybG1tXj7cKcx7U5zBSKMEoZwyY6H694PQURtpTKSfp2NsnZQ2te7b",
  "key6": "39jfqrmFtzmCjx6qprJPZwoJkSWcJrnDwqpGCm8D1oGy4iEUARzN1Qw6F3FAEBcvpo1nKKcj8McV5JqXVKU8wSvF",
  "key7": "S3VxTTzhMbKpDE7QY19vKvE5W58W9r5NGR6jEx5qAQGpBzcCSahoL8ENtd3DoFUwSQtYbCoSAxcgDBBvss8H9vy",
  "key8": "2FBNfPVBemfscWYybF77xPqHdB8bx6MSEnzKMbJ2U5FiagrosbpzvhJsycuayzWQkC9Brfnj2jLgLrpWHTQqbNVs",
  "key9": "B2RSWrpaDvHpvK8ckooGi7qnVn6UwBEENRS599ZXhd8kDQrDJ7XN21hXUeQxqH1x3HXiUoDgb3uYuo2n8HqVPhG",
  "key10": "53wqHAVDtzrjAESrzNjcbXxfg1gHwWth5EFpmzkAoMxMrQ5DTKLbJiaKBSCNDN2pw7Nh1DDysjkfT4PmSuPbo3ah",
  "key11": "4GVddeUxTyR1wxSmYE6Bo62FYKq4od1vSfs9FU5epxLUon3p9anjyDBYdnh2kVY6PL2jPE6W6Xh7UfQMxsgd5WrA",
  "key12": "5ptVscArC4jzxThWU2FZ1x5fs4VgEowWFyEJNXx5aaD8CSQmyeakdcqfXXGfFqSxbEY7f382dVM72d67uEW4Mfk6",
  "key13": "3mPYdQMxFMASbxfZrofooJJT2mLYuY8U49uG7GRf3XvcY5Nxro8RLvyoUWLDx8fajv7PBQSon7oU8rbf1pAE2EZQ",
  "key14": "5TYDJ9UznbbbMvSVSh3asA7ZbcSRCSEo7yXkm7U9YZkyCMFXjWxYTxj3k2FvZPGyMgKk2Xna6i7P4KvQxqQKr8Jz",
  "key15": "23BKrHGMJ6ZbzL3B1t4CHnbCaUXGdDs4N1M2x9wKz5A4tZJJY8jWXc56G7BeqgA8K9X4aQnYagLPyUoXfD5yo9VM",
  "key16": "WK3B3cXeFtZCd7WK27i2KnYHczKBeGMLXwc4HFUydrdRd17NNC7sZYEkj2MJJtyDRmswYFh6iPCcLySeWDtvzF6",
  "key17": "58pnYK2vYUtNCwQBrAHKC2vUPs25GfM4yxj9NG51Y4PUaZRE7c13MPr29WLgsrsEMmnbkCtGHi9GbcpmKpLwoCJt",
  "key18": "3e7gKYXxwLMw1QeNaDyxD9tDz9CdLpW3ZCJxxCdww8uMehHxkYZ7BiuCSVNa3Wv8JVmmch54zRmTvJwRbozfHdTz",
  "key19": "2XNmSXxtFkwuUqzAJoJJjNQVmKDVJZ1qPGmiR13RwdJjDNHniyjDMZrTKcmuGTUfA7bgsmKqfi9JLo56WvTZk6sJ",
  "key20": "2dMWh48EPQ673koY9TF4JnRuke68NkBxMwE4GKrpj7Nop1QdSqaRvFPmHN5DEXpUJvCkowuNt7A1de6G13nx7vRA",
  "key21": "5496izWXv6hfnjfavX2EuvvefJwXwUjBtu9AhVhhc67sRQdwDJK34oaiwnzacSgcSE8AUWtsSV3Lno4SX9BxYD1U",
  "key22": "5TYQXwgXGbbSDpMZKFhTWZGqERPin7PaGWbtUeKdXUGsbfbYEu31vAWqk2jCJguhYQaY8DBTSmtm3nzHafVdz1mp",
  "key23": "oC5bCWgEuQcxMpjJGWxaQf6nSefaoftfFpX5GDAh5gZfYSCNJRCgHTrKnkX1f1ZF9LYJd4UigPfGPam9SPH7K2J",
  "key24": "4vAvBoczBHoSPyXZWyoQ3ynyv9sBRRuWNkX9Y1eUWA5wLotZK69Wdr8CDBsYXpK5dBVQzQ69zCe8YcH4iNHKh8Yb",
  "key25": "QMSbUx1YSDVJGawMQsijnTHNAAcxRAdpQfvVPgCfdnVv6vrKyWtF1fatMSCbLD2gRWqK5amUWGHRGrSCF5gJ9Qg",
  "key26": "FXm2fNicTAukqYdUkJiVt9eS4ZyigzcGcUhhjW66TEtNPfqVgdKnacL7vHYinqkqo2X2NTX6yxk4nAuQot5Y5pR",
  "key27": "tdMnUkodZDZYKKQYNLm4ZMi6kCvkVVizR7zWE1JTpjDifcVfuWfoos2z3DmtLDX3wwm3Gb9wNeHR4YFUYsa93zE",
  "key28": "2eQ6LFpQJGg1dE9P1UJsRCWMqHSwGUv15tPuYBUxTAAf3fSBgkYKz31r3BGZyvaVPq9qMovqjsrC4VXhnyXxKDKE",
  "key29": "2nR3GaxB2XMhKJTRLS4vVcv6C8w6uGwwdiUsoj2VBzQhcYyNmB5VUWWmTCBgDokgjiF9HJKxiR9PT2tMaXR5agX6",
  "key30": "5UHVhVQ4YEQi4vtJETJoPcrRYnbz7kEYXuRccAhAU1Pzc8t1S72djTCLb2FCTiaRRmpdntBYJ97esFCwQEqKcK1p",
  "key31": "qsy8DzCx1B737jp3GVHRkyPjMAL3AKVbavhEM5ZtVMcGuPq5Pzz6i9iU2NFHcX1SHSRJfuJfQi9rQZjeJum8AX4",
  "key32": "2ec3vNxsBLmq7xeoMArQH42ezTQVNbgQtcod8nx5N5Eq6YTTkTjfSmZQxtKcgnzqTCSKbCcNRnckBESaqgUfdREQ"
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
