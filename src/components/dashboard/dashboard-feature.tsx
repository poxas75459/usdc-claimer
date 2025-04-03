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
    "3N7p25BmtyT6jLc9ZYHfpP6eptQfaSqSTa1TcKbSWx26FE84wKerwPYCqbntFXZzTcHMuEg4PLTe94F1NDo23r9T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q4VyLH3qbMreM7B8myfsa21kHPzSGbWxEwKyR2CLjLXrKoBYYN7sntuD9Ue8uZivBUtdPUxnmKiPNfSGbxymrSS",
  "key1": "2Cy4gdAw1dEjvkTnUycKogrY6ExHMBUap9STSWdkPHLkmsYhpKyGvEnFXJZkwpENUsrpzGd1QbCLBUeaPYZefFEr",
  "key2": "4TT2y5X2mKuvfaDesp7NAuLt9PyqDW9ReVhsCXnN6qMLCa9Jbfub9mxXWF47XABa58Hvg1oNhcP8Agr1Uor9rRoP",
  "key3": "3hJGmaUUjWyAteC9FAmXtvJyefaTB1mQyJJAoNggTsYLvMEVsuwwfVgN2FVo5DnNkJQbkgEuSP8VXvxRYBvmpcND",
  "key4": "5Y3wVMLRUT5UWc1kLTMojbvTjwSQQjhDNR4WB5Gs91t53EmjSE2DWxXH1BhuFuF9HmuDewYgsjCrTzQzRiChdg4R",
  "key5": "2hPb56y2C2xL7xbPLvKVQCLPydch9zbTNTf1rWWmwJ9SXAVovdFgUfaQ9xdeonz4xWuMqgBpM2RSoZ1ULcf8ZPUP",
  "key6": "4CC8bCaRbEgpwBe22WbdMv1gCRrocSfaKMeCiUE6FptwCbQLPsRhTB3ojybPKSVHwShimhy7fJuJmyZ2NibXc7Uk",
  "key7": "23HAvJ54intg7TjdDtqhTL5f4AJ9PRFvbeMZGFD2sSKgwcoPKdS9HWnoszcswPzDADT7cYnehqgex7buMyD7xV82",
  "key8": "3xN1ypzcQ4m2jVMPUsN46bGvr52183cxJS7LroHo3rkVZCpDn2fNWMtHjiEr721zzX5iDg9yKscMJaeybciq98sW",
  "key9": "4hqLvy7kWLMSey7JfacArMeXwoTWTXU1xcGi8273rK4dpEmrAozvfjM6F7mwVHJjb7sgY2eW3gg9s5uewRBPscbT",
  "key10": "2tVeXXZaT8EQbJkNmtWhuSeB1AsTgZHfU1iMjUUGw73BEzkSFX2bDGEU9XF2fBcv66Q2po8WPSU9YHiwdYK7zCqA",
  "key11": "4bvGEnPRnEXUMtDo7G2KrTurJGXz5ebW4AfDSgT4JhnJkSAURyoLLHGH27bNGbDNRAcqnSeRfyAevqYb1ysHXBpd",
  "key12": "J2qzHVmz1K3phEuqqt7y4hoYgvBNHt5bHqKTmU65EdKyQhfiBLakzY5Fi2VsVxWfaqBwfuhzhkroKr34Qz7VkS4",
  "key13": "3y2anXen9vk6dFXi3EtExx33MHLZL1LNAZARuzV2JYzLD66z7bznETkvHQZwcr2GCyxtdMmLyovemqNsWZwZMj41",
  "key14": "GNskioTzms2PhLCUNBAMhb9EgUpETHsyThSLMSnaG7bG9GgxSSXHU9YZH3MEhRk3xRfU1EDhuzYJmPNBRdZhg4q",
  "key15": "GXC1F8giRqGbN47XSdPxvt8oGjmT6RUY7XWACZ51WGtULMfZiMaqCmuXZ2CG5px1YHKuJWGGzEM1NzYgXefmsGt",
  "key16": "4H3JgEurEvZTeLb2qBBiXsH6oGjzuj7KxaR1fhsCjhfmZtD69JuJ63kjpqMYKVr2ETckRk3GB6ga4x41QLK5YPT6",
  "key17": "2ao6mkhfFvkssyLHRUEgieGmRZ4AoZy5BjhXsQXst4pAKEUYpB1znsDMhzvY6vvqbdYvCGvkRXyt7Tkp9Ki4TdkA",
  "key18": "3uLGDXbGtfNnbNqDTD1mPjQHcDpJWW3Mmn5jaGqt9chRxqog6fC2iZDYvWoGMgLqY4rEGba4uT8HyBgX9NCTXhn8",
  "key19": "51Fnk1S7bZXgo1Y6yj3HQnqMZuzuhQZ5iLDVqEkqym5KaDeVixrmdi4p2fyNF9bJ4GQXxCDAXAQGABzmSnmM5oBe",
  "key20": "5GorYcyC1qoC3VtQDbCADeNpjTWm3x8BmPJkrZTPuVbLvK9JsiXs5THmTLg3pcTMuqcvanrGMWaVuuVetpfGQNiR",
  "key21": "5t9JRanvFSXHoy9tkef3192FoGyR8yk6ZmzSsWteufE2pdxxc4KPn1Dd2X64M2FWCtZuJ4uG5S4zjAWd3RgqqAR4",
  "key22": "4kn1XmycuXYcALqHtdNjbhNupS7vUfhNiw2qq9oebhRK49P8yAyfkkcxzZ65Y9SEcVh6v1WvPrBNxkjjyDTkfpkH",
  "key23": "5fN6iq2ywZ8MPb7aG5nGpAhg6PuAerAGFgutq9ExTsM76zThKRmtraTeq2mJdYiVsRjw2Q9z3Mr3HkJTvDhHh64u",
  "key24": "3qpe9DeFAGjKuYnD6Deq2Motg8snQhoUjgGZ45yXEQdAqVx1YPhNGEnJs9QVZ55NH1MoutfSMYLjymYpoaUCTAXP",
  "key25": "2o3S8mApVv5bgPNw3vdSiNaLSMQs2RuMzZZ3XUmxag27LShBPkjQ4j548ng62j33QxSbSfs1k5jMoMKRtkJ3Ng42",
  "key26": "5CAzjot98CDxAy47CoQGbJGa775ZuYxqAWgTXVyBJcn6s6PkhcEGyRGkMhpSGAg9R93PChX4ftMys2Cx416j6fY5",
  "key27": "2w68FuMzK7jfEymn1hZcMVjvs7WLSjDm4cbzqxHB3hNnYi3diup1Ho7EKn1eBwdwi3w1jqWq3KDurqfcBJB2tAut",
  "key28": "3eqqnghPGQDX4AaKpk9Ux2ZBcoL4Nocopic85DXeoZrmTjR795K45YJquEZ7UgDcM7icRy6d1sQe7ZJ38FgUFnVA",
  "key29": "5Lx5BxEYxE8VZXtNML8EfDzXpVaSunvCtUjGCtPY5rEnDQ98AoyPFsmFc5tFdiR9Qe6S4HQXCRgUnEvHfFKbf35D",
  "key30": "4WqNBzUv8ABpUtajmQadiqesA9KXvh6EjsB8kuL4mR24h3jhFM1RhFPLeAXpzpnqtexW2b3d1hL8kp8FZJSVuJSP",
  "key31": "3znunYF8XHavS8WFxXDeZYJMLjb1GTsAECCJFg63cfU4Bye2znJrYfC9jQ2A7egjDWXwG7ukzBbKbFj1j6u7j6dE",
  "key32": "JDFkeqNumreuKB8aKeFeamwMicP6W2Qi5G4ti71P61zqSSvV16FHFhXFUNa7xwZXCmbnjoufG2XFkckCQbSgocm",
  "key33": "3Jg9UnMNXDWBfdD6zrbQFaaVxdwRXSfHbt5ocvMN9z9EaCd5QP3aaL6rLSTMkGbnw8W1p3UPYW6br4A5ituokKNz",
  "key34": "3NCRFYun2RqVEkMUpXtUmfHsPqgggPHHXWKQtdP2a7fD9G4G9RYC1GQbMX3A71Qv5ry1tTitJFXqkCVwJezBcrhb",
  "key35": "iWg4TW1svkHMVwVFcF7NryqsSZ67aFBRGGxp6ZK55QWRp38VRBMw9ydwbQU7RLAHSQFNKNYv5YiVA3XLb8Cek6N",
  "key36": "3JV7xeQNKbYMcyxuXNzLRhcnBDwLpe2oXDb7JayC3BWu59ERsNc5xkgbqLkKDDtwnZDiLznLxgP3S8QxEwkEEgBD",
  "key37": "4oqQP4KUEFpXhRcRug2bZzuFqCsqBjCujKeP4DfWtgxGDKbwTYsVFy8WVZvDHuMneSu6Fx64HFv4jxnoeEN62FuQ",
  "key38": "5b1FC9ivZroXqSzVh6MqPPXKMpw5juRjKyPKUYBCy4aPZZPuUaLNdi9fk1orN6Bx9LCWKP8RvwAWpuLdabiwhUAF",
  "key39": "29SX72iJzadKFTbHjUrg4eKLBe8DzFdfQsTBYsaHARKvCiYTgFhzabdkh5YXKEsgUT1sd9b5bQHVEeJxiisqxBiD",
  "key40": "5ru19gCV1rrGsrVZsAFcBJpMQaapXVL5mhhboZoxb9d6eYov8gcAZjsQeGK2Zr4eSGYfqLaQRQn3kZkZsoZhhHj",
  "key41": "2qXSJtoNWYreEJWpfQVfYVjdWokEHUPdjmJj9rFbmQnwA7gFvrtF8L4gbzF5LQzz14JjcwNmG5gwSrs3iZSbTppy",
  "key42": "VTK37TCQjBrv1dRy4FmvUciD1n9u86Rfv9WXVjwivjxYxCUGkD2yqtNbCb2gpREyTFgtapcvL9Jpho6pxFBA7UA",
  "key43": "2BwHgeCYyKxihoF3SbhdisrhykMJsZHpwCbjPeLPgU4iceQgnb6qw23Ko3FKhra3Dfz8zuYND3C4bpeUBL3Q2KTK",
  "key44": "5t2JyQUoErmQftPbMGPFNAM5cXz71Z7QK61kRuR4e5XQwXRKBRFwtVtiD2Mxent34szivifrWyE7XBdvHPsV8G5r",
  "key45": "4NZnKgsSpo2hmZZReUwghjjpTkgk8zi5XC4fLYM2mcLtRjvpbb9ZxVhJoabUa3TVg3XM2v89V9TKhrpuedSqRDu5",
  "key46": "5YsAZfLKeQLGUcU3p9kH1CK53DDfVqxR44BBfa3zQgnmMD3o8qMY9dg7Lhemn89BfSuU2WV8SRBp9DeXRbeJ3yjb",
  "key47": "39D8wkXmW6QXfkeUWKZBjU9M26i7BGCtUhxc2kaUmbuRRpjXLmqsoVmXFX2hpiSveRm6QA6Bd5TwXAwCSVffMirV",
  "key48": "28ejtdNtbP6FQJ1TvUHpVQmQCGFAneDharXVJHx4ysQGc5FPry3iHSsp1inCqNEFivzzAcFWCsj2qpNQ63Fkmib7"
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
