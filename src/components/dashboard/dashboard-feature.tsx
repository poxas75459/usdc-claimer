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
    "ukoRvDfPGiXNWT82MLqo2pq19p3vDCSgcPzJNB7uhJ936wkvX3AMUoFsBVfHXbsT7anVUwWUtiK9VJu5uZDrqLc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SP2Dx5JgyZsKdpCWNu1u1nNaZ5jd2nMcgkfCsCMRAW31sowcv26C491mFbefjKg2PgfGYKWUC5nQ5j72Pyb59pV",
  "key1": "pmdyApgom98Bf8fMQxMMxCfoMUfh6Neu2c3QpTpA8m9ah2h4tGB32mtv2x7z1snLzpDGmDtoGCLDH1rtSL3j3UQ",
  "key2": "4MT17husoRkRVvsttURjS5nLTNbYxzj7BfkBADfvMwrsyBrTWB6HNEUFJ85ToJDxJ7n1ubCkcSzp3PyamSfx1Eam",
  "key3": "5zn2q2f8aVEdWksixC7PARuKEpJdAbM7zNXEa565q2B6rmbcQzZWFVCpoRopXCNjqJTEyjpxA6GKQGxr7DM5Wkvy",
  "key4": "61Bg82oTsdgb9nLJJ77cabXArctXrg5fr4T5xU8PC5k6zRDhJaQbbYZ7MceFZrT3d13jP2v9oaFsw5FqhWm2ofMt",
  "key5": "2QZtjZVBYniE1D3AuD6YFfcWgteZX5D7uDKjr54diTASPKcgKYyhvTfqZyLhBqSoCp2b6yEeE8tBsYgQSWVSogos",
  "key6": "EVFvHm3TaHkeq1V93CsyMEf3feekYggHprVFkzwyAH4EMPwPtZVjdx85AhAHUGwQphVA7xkCVLftkXfVXSGJSXS",
  "key7": "refZwTojGkh4L4wXJUM2o7PTmKoSyGXe9D2KXmcLjZkjFxieGtWJnpMjeihuZi9AP6BPZnJY8zpcwqNU8xiCsNt",
  "key8": "5Wmb52FHsa8HVLwtUaYz5DoDE99qyLxaSgw2R24ipB4prDZcGxPWPoY4uXdEaQXuZ2bFxEa4qTSMGExZMM55AFUr",
  "key9": "3zmVEp5BfPg7kvcEXGf6uuSs4ytHhLdwbRhG7JhcxoQJmdYgFRCHReuAAgXTXHzfcdhLKz8pnp64tbjKEpyXntNP",
  "key10": "2etHD3s8zZmc3y2uajVBhahM4SNm5n9TJZxm6Lvqd2nc1LYp3Yb99msV7b4PAFgbzz9cHBSxjUreJgEq6wWsTGxc",
  "key11": "5Li6BL51WzjRJEq4kk9QDEpmwwUSy5p5orY42ohFmziVkcAZME57faR1uX5f1z8eZubXzpufSYPUoEfcjuZbgyN8",
  "key12": "4EUeJarn6QVdMuNTYvmnbvfDadzzJeNDXFrcePXT99wE6ZLuFDy8YwZ8eno7L5k7WUDHT73njTbZZMxKQLXq3e9J",
  "key13": "354qxYtJtENcg7BHa6uqgQXeLgWFKjDprXt5bL8hFR6m8LcsxLYxJLU2cY6hJBtsLrK6jGHntVEwo5Vnxu76DKBn",
  "key14": "2T4Zt2R4sSbEeR57GL2CUmNoCc8RmyQ4xBRRadEdT3Zw9JhzF4EWchefseZiUQjubNg6Yxwqbp8BNWqqgyAK8YtM",
  "key15": "4Ck4HHoePWaHiW68qPC7RsDcpYvwDpSqXzPpqan9FPNM9ag2fBtwNzNx43AwdgPxdnej9RTfzDNVQUjVTSUUR8r8",
  "key16": "3PQX8TDErU4VdUqViSujKn21WG4CHiQgiERGqvpTrvqYKrJhzwuoM7wuXpFEGScE2n8DdFXwKsB3UFQTqUCkGwPx",
  "key17": "pndrbhthLGbbuukoYBXef7YaJHqrK79hLyRjnxLaD4PfQL3XmQ8FHYsW3aX398C24D539W9gZR7XWQuyM1hddTD",
  "key18": "5gwHp9cHaAfbib8HhECn9smbp5Aspffg1oZVWsnSkmyMpb3Y75ZUQGYegNXKS4yFpv9zYz6ghgxTFgMsk83cXH7Y",
  "key19": "5XHF1zEBXLVVFXMNpWSCm761HHt1CXTxbUYz3snEvfMXUpyiuXtjoeLoHrFRmL79n6oj9BdDuKhgqeXoRmnSfJCj",
  "key20": "2pgfxDqu69GhnzFAhZ2tL7suraiLGWdBpVnxBh1GAKj73wFGLgPiHfeesYxVS5FqWBF3rje84xEX7LsHc2rEzTu3",
  "key21": "XkDQULS3nCwpUGHCFEZwBGE1Q9GoC8VqSaNJVzp1Ptm9Qs3pTKjzimHjSTfjAhNACRyjPLJaBFiRr1FFe5SdJ6J",
  "key22": "5DqPpgeGtsjdE9egxXUbuTzPFhnuEMrEv3y1LccLdzWGQYTLgkBYvm198cokVzCBWjbWfhpSNgomBvmkdgUm3rBn",
  "key23": "6Nqq7DZjmE7ShcQt9VmtaDxT8EGAgT4hMjZATps2tCKe54MU4S2rn3ft9oNR8EYK8HLu4hGMnEsky1WcjinTj1F",
  "key24": "34bhb82VbASAh9tEY3SEjJemDYBqLyJ3XtXYaoe8zmF2FVQkwUx7fRWNoh4G5aZxhKCU1PXFNRdXzosfm2cSdVob",
  "key25": "3nTQ1eAA25Sf4oKXDR1Ca7r1C8odiKDyhLiMZHc745MYuAmcRcDCzDuKLKTxScosgJxNUrCjt2RcSUkxoLHrveSN",
  "key26": "4pbidWNMW97tCzATNuJdynJWAeiJCksxZDEyuu64NsYn3WnhaBnvAMYWRtTUzLSJU6566iMt8TbaESBq59nL9UFC"
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
