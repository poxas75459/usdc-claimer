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
    "yE4EARKTmXPa1ewAYGkEddNsuNKWuRFF7RPQNwBwHz5UqyrpqnWG9gVaqTxAiCFwdeK8EyK9kg1FELJAxrdtoyW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oWssA9vud9tWqa8DXY4NJdnLNCXFTDLdSXHgVvp81rPoFrPitZSrcQQn6SQtk9JQGsSiL5AnPoTDwixALEWqCgk",
  "key1": "4tbNV17ftiwDtxiUgtE6sWn7937mFdcjbfw2ThfZiWPwRaaGvVKFqddB5SadeKMDNA8KTEf34G68QHJ7rPJDRU6U",
  "key2": "2LX7csvNgr9r956AxJ4g61z9FsDySCs7zF1cuMhpuTyVDxdN7EZekUcGnv7Fto25zuxqh9iMdwJkejgXs5ne4gwm",
  "key3": "2J55m2XAZJP66QG5XKKwZUGyHmNbQA9BBceb4A8X9LszZic6cVUB9cAPjncxJSs3LdyenPwWWEWtmvG5Bnd3y7gm",
  "key4": "2F3tNA8baVx1z2A9ufPjNzeCYpNwcVDFfXEQysJZP1hRwoW4mgvN3jYLhTeZQTn3kCsShEyU8nkv6ACsjGbjxPzo",
  "key5": "wvregHv9yV5yczrpRreYHPx8UcRxzzBCHvh7o7fhPPKuEGTJgb3Nt5QyyHz3nKcUzd3PEJ1jV8XqeMfjXcKMqUx",
  "key6": "3nNZP1vUbt4XVAmgj5VdcsksNPsn4A9ZNT1XJNZwkz6Wf5i5ohUEr9HnGmVVKy8RQcs7RQxZP8PMH6mPCNiMTR7C",
  "key7": "5N97kyShEmm2bTxrVf5buqrxLn4vajrtNog54E8EHeeicwBR97aZFugh2HBCcAY2jCcg1ftPZsWxJLegYC3EoTs8",
  "key8": "56HEy4qSwVrhQW4i4F9JQ2DNkxdQmRk8hQzzNsGzGmYHxmStL3FkrmcfS3Dq43vT7CZ2KYcF17UYHFRGwb3d8Nho",
  "key9": "2oTBYwoTPC3Ym3sKLj4KcRHGUfL6H9kBhMRSub1yUTA97SUVB683Ps3g29NFZzpQwT9aqAMT3MLCvre3iZnhDiip",
  "key10": "2BP682mzCRVNV924rD94BiBy4VfGWXejoVT7P3AFXxb8LM9KXJ2vqwrddM7QQK2p2z5GxaA6zxBz44ErvzmWB8VW",
  "key11": "2bkv4pPhR5RbRN8GMQ81JarcA6D5TnxcoDtrCoEaSrUzmwUKca5r4L6BKPw6SYcUvzqvwhgZBmGN5fxGCjDHKo8a",
  "key12": "2L9mvhoQxQSYPvwkeikD83weqLmb2BHwFGPXWazTJmmnkyj3bLaVmayEH34VuEkWvq2tWdp65HabFHLk269BCwKu",
  "key13": "5b2HfCi5RAt13gtBjt51X9vDmf93qNHFsyuipU7wXnapUX42AmxpwLcx1ANvzrUnP9dDxU2816vpChmRnx2CxDHR",
  "key14": "2BZN2FcWjLYzVQtEnWc1bvKe8vBro5w5ZkNBDmcRuW9LRcZ3dMyUaERnaMWCtwbfpLcTiFJ98FmrVJhVRJGaJ2Er",
  "key15": "2bTpbQvNSqwwFNoQsRdzzvKUEVMa91ujQv3nR6fBezDwXCjH6Mmjdeoaric6GabWXFCkxb5rB6ghH87ZckSKCDgh",
  "key16": "3tPf9VGVKF3iDPyx7vjK2Z5XvoHbVWFGQquCJSWypB5W1ygF5EWsVJ8EYyK4a5Dn6CTqjHstvNbCD8Tpy2HXMgD",
  "key17": "2HEkb3uwPd3CVpNsFhQXjhLv4VJScLE1eUceptJTCL2FQbGT44LWCqBLHmDkARaTzuoTDDYgk89v8wzfoBRkB8p4",
  "key18": "2zHKJqF22UhhTt5DiFSseAj5Weq6zyuhpDrfqthNEPLLCMTuygQE8UEJ4YvsyzKFyNmKYNa42vcs6gJnL96qDbFk",
  "key19": "2qXo5yCZ62BWhYSS5KUn3jYbt7awkt2QUYwbWavPvk8qGu7A4KZD1xncHuiLWadLYk8von5qnQJ2D4YUPf6bSKjw",
  "key20": "3WxzBmExaRpmwvbjXBucFmokX52CZmssNx5DcTjsEGweuEEdfqyNN5VSZaKM5P7qzuBr7DCcaYmjAPGH4gcUDXiw",
  "key21": "Fa2huP6bAy7bCZDcc1cY31XrKttjbVyitgy4aixVSz2WDjM2DnNYBAYUyWh93dCe1Y67PUxzoUhSSZucU1r3cUn",
  "key22": "5Wm7BEA39bniaABouVrLAG6YRWNm2iykKJDyinSpYPBudfdvGn6NJVwEMur6g1FgkTyxz7GjV8zHryHTyTtKZvaw",
  "key23": "ZC3fiMaFKRBnKXqbZB9FEUMB3LMtVf63xDe9948nHFQfBxu346adZWGwr7njnty7Re6M3dgTQ3DDugUFG56rmuV",
  "key24": "2YrVrqQATCt2QrsM8yA5pu9kgYiogNJTRyaexfWN7vmRnFECd2dyi7NG9youkpbuL4sA5PMzpD9CuWTw6hcDiajc",
  "key25": "48pzxrf3FSrtCnToosRtULWyUZf3To7MszGWXWcC2byPCX42xBQzhwGM16LaZQme5bGr8ndz7CDbiGvyj4cjUZYz",
  "key26": "2qF9iemaGafXUXkFWRPjL1SFS79Zh1XPwaVeo5xKhsak5VWtQNz9rBVctK6MJ4GaL8JuhT4fvHzChw7LQaAd6SGi",
  "key27": "2YdSNhKBhcpgHQ6oSZqpb9g2EiaMH3iuaCgn23EQwtBL3SUuosmoQeHh8ZkxFbBexma21Kt7hdZcRRjGK7Y3uNTP",
  "key28": "DR9x4QPwQNd2vTV6ikgPzeSHR9XLx74DpsoyHxo9mZkGhb3c3AgNkEhEBH3XjVdsNK9H7UCfat3JeC2KP8bdsAk",
  "key29": "4acc2CBNcFumDF8ukyYdbdNWTV9891R127ZnjuLqN3z2aUVjp1XBn6cJNqxwG3UtijDzUHLyM78UyXS3LikMZqQX",
  "key30": "2AACAUTA5VFZRHrJ1a4GJbRxgwjtvGmVmWcoD74Smzbp5szpVdcg1RRMKpjXeNLFG3oQPj73RYaWHnU4sXq5YRoZ",
  "key31": "4o6qTN5JjthkX9GvUzJRieB6aG6xMMHgjkt96DtmZvT5F85TBR4y6bUNXhorst1rBRQnWsZgBHuifYNaHktTzEuR"
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
