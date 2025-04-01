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
    "3zcAKRcnSp5GswtEFzTNttMYKprcDHpb2s1c6EF78ni52d3YfGzWcpKkTRozJFTxkmd58zbbm1Au5Zs6c6gJwFGH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WVpaCXiag28nJ9iiKdYP9iMux7TCmbd4Nc8XjKbxNJWZtpZYKvcf88ce46VxpNjbRiefKJHQnVqjDvhjsao7m5d",
  "key1": "3AP7zE2JpAX7UnGJtMQ3WqHnW25WXWvr7NTubabLXBVATTRnBG6LjbNKePUa4cBujacdmzwiCBMDLrjRtskAVpTa",
  "key2": "47vtYqRBFAcK3r8De1SoCxneosSNunAa7BLGVVQig6DuYFnoXtTvnrtqRrQHmfhnvcXsTJTY1EG7wazV6dd28uVP",
  "key3": "586iFvypZGJg5qy7H9xR1ca7HAHri7ZQQMudxpeJtbMnSvoJCYdTv5VpUNRTmU5PqyTNf8MSyNAWxSTxKVHxG4zM",
  "key4": "2fypwvroLkDiQLoiVYWm3xMuaqFrTsCt5AxUTJZt152WAo1LtSuR8vnWfqoEKVdqo8WZ4mXgGLVSTMhrVfs4Wj6N",
  "key5": "Y1hgdFpab7oYBx1yctoMBHh735AWbW5feUrvcLUv1iBcfXhRp65FocPkhtNYMgYkDWabzHrGXVyY8q3YpQcnAf9",
  "key6": "3VHLCYSyRX6WXKNhH5LA46FYv9pGx1vHPTVkDviVvsW9hokijbeLF7CanxrcSKgUtws147Wb2zxXbwehBvW9myh8",
  "key7": "2qy4dzFKFnnrRsBcBtkfagcceynbVDuGHKCx6ECBfAAYdguWRLDYNaM6yLUBStZ625LCBYUnVSN2MKpbewifQqrw",
  "key8": "3Pfb3r4ABcJ7cqmPEKFxcN75VdEyon2FNiZDtBtknSCKQ5ddD6ZpHYtyN6Zjmi3dZioga7wauXe9EDEcXWzhdPHc",
  "key9": "3fCJvtQwNihPp6AAH8CNNMme4FyjhhfFTbv5hPqBF7on7NCk5qrW7UYrFvcWEeEDY3r6T1g5kgsEec6jkXAJcse4",
  "key10": "4NrDtia4rKKuuwN4kbA5gGDVQE31H6NjZSxHfacjfNGtMddKP9FVU4BMFPgnSSzuhhjis8fCs33DrE75tYwef9Sy",
  "key11": "37NPD1McKKRYDPY7ECMEt9Jxy5EH5y3bB2xSvh1fzkkVLBcKbKoWCUVbehPee11qoYN2bQaY4NKPJKRtxwc2YLrw",
  "key12": "3UVq7BaLxwDBmqKT1Ctdc2fGH3YhLd5UfWtLKgoNAybJHtQqdRoV6TMyP1vCdAUNPrHDXjbDGiHvwtj28cVx8a2Q",
  "key13": "3HeLQVga4H8BU6hy9LNZ6RY9kFaCgkWydZiPpqdAs3dshB46fiGWtCqz57pwrDSVauyP1FRNb8GVUyw9jyWpqPq4",
  "key14": "4eabVtoVBQJWivgFhwjjMaBCjdHc2QoZ1C6j7UmrvGPHdULrzeejT1TMLfWYprJLXseLpvvD9BPq2zk3BQdzZNeY",
  "key15": "2f5f5ECu2s69PjZw2LN2bqBoLaaREZaTcgkfTmc8PtPJ89t8rfRfjXxv4C44MFbhFoUzogtT3yLeTwBUZQNUnxNX",
  "key16": "35B5jusmLVp5vnvsVQE5mNmms36GNQc8oLV4yHACPzsYEqhE4ZEpZYfCzqGcYizVybXBQY5uXAdGVZczh76UCnPT",
  "key17": "bhFgjrVvWyxbMvCxK4Cs8yY99mxP7Sy1DjTMbCheCiUaJUNQbJhVL5X16GoMXBw4PdFzRTRMKQGWB9T52yEhir3",
  "key18": "38kBnbNGRCqwBK7nWTQTKifTQD3CzaxcRPPpc87HkqWVeWqSWo7cAsu73dsJbMZAi7E3Lj4ws3jzhzLrSWfoERMt",
  "key19": "382cqxn6Unzdec8aPDcgrJcsPhXXh8uVUNCqGE5podcSh1D1s6PsnYqFaZncqy6MSwbCuDwhgjQ65B5FsPYZwkB8",
  "key20": "56VKTxwFSWrKB3fvG2yBHHDXZqxVy1JKvdQku3h5usMuPX9pFuEkNjrDHeDEWqjMgRyXburBmXkbfBK5CYPqSWd",
  "key21": "5rwcLiiYvHrAwkH3q64QjW5Rvvi6X8iTr9og22my6xtDzR6Xe8NF95nGRaaq7U5puU9XKTvishBHrTghDrQBYFgr",
  "key22": "38DoSCV7gAbYrnRsg2XD5MkrzLtZP6pPZa6pFPt4CihBLjRX4Lw988554KSz51vBD7JtqEnYzYwcAehQGmMUj4L5",
  "key23": "39s82HTBYYgNjnNC8gBjRuMepzemwJHFG3PHiXY8bpsMbXy3UmdHYACLabCAkRkkFNaHQZ7YXMQFhLPMzb9kKVgK",
  "key24": "4fG3zTg66Bgu4xbtDEDJ5Bzhr9H3pXdJEDQuyaMAnjLjTPEPRkp6fqkKWJ4aaAn88x7vLdYDYoGhydzYrg72a3Lp",
  "key25": "4rzY6PgFj1fxm4Ueb6Y1KiZQ6RTTVEe4B2b6QG3Wa3vbN7pt4wJpJYR6N87PiwqeUenF33SE8je2rpyJofiSo211",
  "key26": "4v9fVE8jDdSrpTtCpRsQm8L8ZvPWz8ZMoQSi5H91kXT8bR21WAcY8izY2kXhur3mBnAarJ8oRYzcyBCwoimgETUG",
  "key27": "26HKXh9HYcMJDFmRwtqVAzHzn2pduJTrqqr2vXMhCyLAb5Tf8H4wWas1cEqjUm8bKFW2YuPnihUGte5GWV3AS5ES",
  "key28": "3pNkECy7d5pdAAcL3Qw8cMXrm787SZerwLXWTB74KqxKF4tig9W6WVN8trJUvpQhgq9axsKPCxKjRfQMX4RwD711",
  "key29": "3Y9tM3taUx1T9JCFxDj7LktPDpHKFzaJV6tL3EBXrtDSaSUyynDwfmhcSz8oyL5rmcsumcm4bLbCVqfUA4WYZh7Q",
  "key30": "5H4HoJNiGzhEUDz23Ux1rSqCoyrbfYJWjeGzyhCwT5TPAhyqwrUNgjYnu8uxTp9fJLTVqF2bhzFRLx8h8e1aLRZR"
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
