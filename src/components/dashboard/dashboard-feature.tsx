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
    "2QdBNooEjPVWVrDPr25g23HTZR8znJaMfEfPAoBF7J9E38brumKgNJ14cN358Am1mES7jAqhPrQT5E4KwfMhiEjw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tQbEFSxGMjkXKKAH89fHhYuoogK2aKZzeLPGgCnRcAjiZZporXMgVKp9Riu69yPqxuNV5kSKxKWcbkRA75WuKHu",
  "key1": "XbY8bzbvD1WYTGsqkx2G4mLteWVAcKwpirq7VRyf4VhsEfvVJeaFuto6wq2yhdxdpxFX6MtpGyABAm4ujsXKLhE",
  "key2": "35XKA1iSPkgCixvqLKiFX6nY323evYCmitxfAycKJBsNP4JHSp4ZL7cu4jmnqUmVgTQ9FAZM1BEpPsRtw3QGJjy3",
  "key3": "98BNuLE1VwroEyhF7nq2vCpLrCfkbWTvzSbNmTQSUomsVaE8Uhm2GNxHQ9uabigWdmoZEe8eEYf9Ar8NLgdemq5",
  "key4": "6Gg5CUzAPE4QwHPkzeeE18jXGkP4ayQFEHdQ9htcvcGCfJV7WTm1STUWqQhiJaRxEChGjRByjiGgTTphXonioY3",
  "key5": "28VbDRP8iJdGW7tjFC63Ld1GkNCuTQSeLXX7oxYPjyWdh35rpNnMCeBMpfxdXdUxmnQai7K9y4GXvFfe48uaFEvB",
  "key6": "4JG8BDETgKfeC4LYZmATw1ZJQTWWCxx4XZyXx7smbPsb2xeixVVtadYfgSyYLDEdXLAizv1ihxyHW6TkZPNSQuha",
  "key7": "5zzUmjgwZFQjkhLwzrk5t98wVJFfiYc8nJzidjdx2k7hX4McCen3RkrzSnBK1SimUs8NNxagfTs5aqV3Lhby3MkV",
  "key8": "61WSiw7W3XywLTfvT5V3UGsLpoFuPBKMJ8rC3Q8k7sL7QipCBv5TiSaq66YiZUgTNXVpRCNmeWjtVm9jmo2rWomg",
  "key9": "25qc5sB28FzRxWE9fpVBoy9DfvnZ8rZh8DtH9FMT9SuihvhjLBL2csDfjpxMZAqb3mxBoZYHnA2Q3mHQpGXPNkHY",
  "key10": "4ydYXJhaFSQjdT5eFkNyY9LZ9FaGdaX91aoatNm4paULYjDt9pGzBmtZr6ASzEW3XV4svnuz1gi8VaRtoeDfLFBW",
  "key11": "3iyiZYtpoHGFze4mfxmu1RJB4CNWtr2HyyuCyoCZr7QnCZb31of9ThyjCy2vttREtbrmxebrkbGRCrLSXHcd1uso",
  "key12": "3HeRKEz83QbM8EqFVhmGptSfsUfGfaChv8NC6o6ruDuto1gLbegcn5bGTeU9oZGtta79JxQ1GWn8aSBCzMohadxu",
  "key13": "64VT3Yk6MFdXtE2jEqL6iDB4LSTXESb31RpUe5yjT6rfHBAdqGTUroDeQFNGH82wp5yjxo1yuixrAePUpY7NuX5s",
  "key14": "4E9LW2pDRa1iVbHtfXh8BKf9NkfZeGjkvfWoy2JKvtPuJ6ykj1T7NEmMNeAjovLqV3h1D7JDyePyBYN2ujPsj14w",
  "key15": "49Ru9ZQyESuJaZ5TnRit7NF8AjfttAa43upkmsZZfDFoodwTXjF5fD9Lb5s3cT8t9Ne6YUbBLtXUYKJnN1hpz67J",
  "key16": "4vJarY5NGcbHWnTjM9DYdX1zKjHUyX7L9V7GYuD2BURNRDdzeisDXS8R7krc5gqrdfY6vJmiWHrR3q1kLZ2NiKD2",
  "key17": "49xhYsNnUPG65pxNpaZ6T6BpfxBDe423FvCPNjgpMZcnsbo9VfL8dNmh3Yr1xcQHZ3f9YYjAjmaKXczCRse1hQsi",
  "key18": "3tEj8kogfuBgA93CQoZWwU1nkeUYxq5aJU7YDcjKctpe2MDTxT6gdUUSqVjnEHivvohqdtS1h5Cvt2rNfbrZZPfw",
  "key19": "2R71CsXqHTTunrpfS1RukwZRnNdVhiAV34UMGArB4wuLCc6QYGseMbJX72DtxnABvGXG8kLGaN6wGNc1uVHCTVi8",
  "key20": "3B6QD8Ddg2rqhYTTaVQ15r69BymD3hGGtNH4Rh4LmcN9ifi2hqCZmme9PoAX3NTq6RkEojyYKeEm4Vkefw44YQjt",
  "key21": "65dFQ1jKyxvAwCnsZGobu6RGWcaR2DTcTH9jw5mq23Efx9kRfs4ThUvQL1CuYL7ecoRpzGics76doQU4xdD6F4eX",
  "key22": "5rbSs7FXRLCYpjUwJhWmaYcZMvjvGXWAZTt8BHmjhmEg18TbNbMr5iNDYhBSsdemQ7v3MuLkNqENZunb3qzFHiQ",
  "key23": "3VpfENsmeo7uqexpTiP1irGbAZXkRgeyicgCKKexfMif3rsh4iLd87cf9MFFMrfxdohELymG97LqqhEAqBC6mVdK",
  "key24": "2ex8sHf7RwTVHE26v9JLxDHmtf4QD6wm4f7XzmkSUv7YKbUxSRDtj5Z88abLqeuaucAqMRyAtaTafwfjsZ3CPUTs",
  "key25": "GwFAoofpgxEYNDWgwSaXoteoCqbf2tURPSird8Q46gvFX87wLfPAQ2ShEfxxNyAFPGtvecnJBvfLk1G3UvuH6R8",
  "key26": "2Mj8eCnCock3GAF54DzufBqbdGaKEejgMYW1Sf3bfqMU4tP8Dwd6ia6nKuD5S8ETnmLfzZ5RNh7PL7KuPr9V9Rw2",
  "key27": "5W4LNn9ydqXeHNABv71pLciiExN1QJYysJ6pTTkFSzNmbyHJLjzuwcAoNipTkUTTo31fzfTxpK4T3p1t6dYQUrHu",
  "key28": "5W3iT2oQhgsjktk7cUBkK7tTDJpq6gKNYAACw8Wz7tywf7NuHquHSHe58udiabRr3yfvQpF3fntbMHoSxSeWDCYw",
  "key29": "5DGvR47kttLfCJtKY2PPFN4eu8Cfcj3iwPDqbg7fPviPpdchDsujtTG6kNEtvLZUVe88kJVQpRTBiKhCNtk3oAR1",
  "key30": "2RyKBS68A5bpMCrBi9ddfUAzHSybazM9bABzSiyucSxiAT7dsV3E6meLMK8UNM43X1qGT5LfrZ8eWRf1W8swnPeY",
  "key31": "gZLK5x2WVXZLYcVm6Fecyss3erMGPy4h84mDnSwFSjSaHCnoqsDikxCtCn1huMhS5EAo9nwzezAHfvyPeZKSo2Z",
  "key32": "QryLmPkfuEom9hS2RBPNsDkHtGMxSacSv5PjGWTic1iWYwzz1nxwwoYL5aKLoFJqBSQKgwDj2xR9EDAywqh25UN",
  "key33": "5GsArmebihvjg5PKT8rNAivrXrpiDLdaK8QcQ4ZA796c94Ucoj1WdEqnR3ERgYw2QzbEuEg58stXjugihCHNEbv2",
  "key34": "4DAxTi6VXmJunPx8vEknXUmJuzekgdHjmhLUYYPaWabtEPL4nsuakAV6M33DDefJ8NF8SEqYkXj4NhRp2XdpyVCh",
  "key35": "425sjxWoG9x5snZNv7rn3wojsBRjEovSyhGk8b2NmnH9UtUcqHcZFzs4BHozHpS3RdLEBPnq6Qkv5WDiyFJj9ZJy",
  "key36": "31WTaCoaEUVaRZTdruEDqgvT4kA6NLqCtq3Wz43ffbfB6DmkYA2aMDQdFAPKx78dK8r4VqFQ1mZkD8Ex5hV9EcSr",
  "key37": "3n2mjydqJNmQFzu8CPnnjd7D2dPPN2Y33YB2MhVt2F1BXRRmxggdYzqkfAsA212VAKqikw5XjZQaGtPcR4p9YHyW"
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
