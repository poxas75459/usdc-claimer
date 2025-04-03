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
    "SsxyFDLieHxA9JueEA1tNZZcVE9ADof1B2zLgHcYfNQVSizuZeKW8nS66YifKE5BEnf3DpxsuEyD6BTJbe9h6fU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BUYbUpvLFtzWVmMqU9Hma7f5pLsbGB4T18zG8MjQy1iA37oXz8WWkFgBL2Q4gbCbHfb7fb1RqqGPS1P7gmqtYzY",
  "key1": "4F5ukMjJ3huLgeZmq1vdmcszptYCSY4pmZPuacze9Tky3UY5x5WZtEhq65sUdKowXmEcv5N84TdXoWNCfHdzw8wA",
  "key2": "3xfB25hqk1RtcQrRVHVsEYmpEs4yDUQCjc9rsz3Q3StfZrwJGanb6TRU3nreRytJzpsXwD6PWoorZbUoN5LNgnV8",
  "key3": "awf8gAebGbhidKkg6mWxvVXbXFPTuPiRCCwxk9s9oFk35os3ybqomc2X76XocTNT8JJbgTzRfhwjVxyDx6Y3rQo",
  "key4": "2pLb1AnCLywtREgPezdp3Y4Mbk9EMu1URrgB8qJVwNG9hjiCoVSD6QqyMXM6RbpTNq7jUisC1fJQCgUBcf9QzjFD",
  "key5": "hjoYd6hh7iWrt3X51rc9eBzVPWL9TheMKjgZknL83ZPaXxpKd7eNJ4yR5qtx8gbTxygoVdtCDbA7qx1nGbo8yHy",
  "key6": "4KfL2X3CyNEEhmDX8ZajBjFc6KCx2jSq5xM8B88QdEd3wQbsiXcu7qUJ36DwN746JHgvnAwWdMYSGnGLFvypYwKx",
  "key7": "2pPsJ61dYQHn1TkxsT771SSVS38FTt7xVRrRxAvtt43z9VD8ATmJDYe3uX9uHczUonX5iZ9RkA26aTr9ohZFKVRt",
  "key8": "52HF7FzHvaMYNS7Uz1n8oTisoGse7Di91JwdekLJbfBY1cLsbXzPx7g1gw7FiombRWEKAYPATZSGtiC4kxTsWCAd",
  "key9": "2vfxf7QjFYP9sgb51wzmvUWEUkqcgTJHgsPYUJ7vfvbnndsMXcXjB1CusuaR8qzmPPnfhiWBjmtgsa5bGa7cME1o",
  "key10": "5snVMyMkRS2FeaJa5FZcCP4wYmmfkKzRnzJWnGj3F2BjANU9ydsFwzkrZCQj5NhkigCXT8Fx8L9Un9U8fSxPNhxY",
  "key11": "3pRzcVWtDucsCMoT4eqUc55iv2GKnu6bv2nVRxA9sToUPV19kgPG1odaD7AtWA4NKvWs5wd9BcyENn6QqUsUbtCw",
  "key12": "2FWGFiV6Nsg3vLxL2xF4z3CNGveEfATTumRB61FxmKTua6Egn7mhaJ8zX6uoPC5tsAU1dLqyeczSnJL6tU5um4KW",
  "key13": "7ZJ3DBujYJ7LS3yncCfQiHJuEPPhz6R5H6BbK1Vna8CvvqmMiqMZoTh1PQxLHs4PoGWtDqM1cbNaYWVtraygJEJ",
  "key14": "5W6MWdzwKm15jqhBdqXteoLSxep5wBgGrW7C7d7R9VKYGL37eQGRJJQ5smuingpZL2E1U7WGf4MLvsWvswgPx7XS",
  "key15": "3WvQ7GkPu7P3dvv5RV3FHnBmspjaeJhrQRppmwjgGAzeJKcxqPqbm2AsckmXjmjhFYcLE9tK99v7ZW6TWRdDd1N7",
  "key16": "i46wuxJWbmhJAVu1nDyrV4jatQVXSfpdUuLZRtN5bU1XemwPCiBTew8z7pVcyxnnRKUbHHdpVH8pRjsJpAMN8qd",
  "key17": "22MbMHUP9UepgymevVRQqocjUSVwmNvKD7zs2iCKSaB17ixvyEjd23gGqE9it6qUf5phcZahzU82eB7pgayKPkzY",
  "key18": "Y9DjwxaSegFwb1pKi6opXMte7Su9neZSuL26ppX8r9jpWV1VYSGXzvw8W3ExT187tmeH9KUzmA7FTZi9amnpGyD",
  "key19": "N5XQRHy7YzhntPwopUroWHXsUeiuQwWBYnidouYFZ4beoPjLupCSGxnRvVueasybjuUqPZFdNWbxuKVrz1DSxtn",
  "key20": "5isbdC6TdtgaqtyQSScnGMPqb4H9TSnGLikfgTqZ8brN1HG2Q6H1cmpzrkHfpkcqQfutwAE1EBRk34MMo7BdZS3",
  "key21": "59nox9YZD7zboxCnBHCstHXtg8oedWk68jCnxq5T4ZqGis7Xc78aR44TKoQNfbqVigm8daSdrtFVvBRcTM4VVJ8M",
  "key22": "4t5ahSwbdGc9mZNsVJgaqZQske8SmzGgpGwEhn4aijaPZJjSbrGMqCo4PQMvEaP4brf2sKtXgSeQ4ii4pJZf8rqa",
  "key23": "3j8Gm9xrGkHRxXMc3RmBHRCJ7aSxvrRNLWt5rbAUy5w9smF4CdN4VPRi5KDVkx9ccYTHPnc8wjT2SYhLSSvKffXe",
  "key24": "5XipB361JC4GK7F7LQhwfDbiLegyd59V3PgCizJygpUPUH2y68WhGJJbb9NTCs68J5a8FmsRvjzP9Z7mfxcTjnBY",
  "key25": "46pjrGtCwc314d82KXYAdhoLynCM3ebrznJnDFNowB13U3pmACmq4ATB7imKhsdV3vnFQEAf9ssV5kcmFJ289auh",
  "key26": "3oFugLkVgsSuSC9R7dSbJud5WZKAscx1Am51t974nACRZBS352M1DCeQo2CfF6azu65aruH1fhK1QSntRmHxaN1x",
  "key27": "1tZa5VyprCmTS5esPS6p6EvYoJZu46Gm4qgecsRPReasn4738XAB9Bt16xymrXWHRHmJsvWEsia5fFFrUeEENpT",
  "key28": "3Y4sq7mHfkCfq45mHTWHY6p8gDgxSAf64rx6DyNtrcfBZ57EWvWbmn25KTo1z24Wr1D7iyQq4BLkCcu86ip3XugX",
  "key29": "2vNBGkkohrBk1BNpgzWWBejUW7Q149zbjmV1azwfvKoqgVCSjcexosJDhREWK3AW7gUghQjtxrzPWYBCYPUfKswp",
  "key30": "4CGfB2seEVkVXjbK5PnXR4nLThxPmQ9JzDaFF77aB2TYw9hWKbgxs6mj47uPR8U9g68P1Qz2dkGbdJEScRDdRyB6",
  "key31": "4zoGAQ9BaDHa9shv6n53F7QFYr1eviS8PaNuQdVp1wVgjNdPjNrQGRVtDzizji3S34aY3GcUB8BEGF7oYLCHUmsA",
  "key32": "ww6ytPPTougC1jhVBnJypJaKt3PfbREKz6dEQSKwb1K2hXwzRZvLFp9Hq4mZeiyL6KNCnCY9F192jfNR1DeRRXJ",
  "key33": "HZ2bYzhrqFFjzrV7oehQMXtfZpZinTHobujQByxew5xBwcrzQanXf4MQCsS8wS12DktXEKHqgPpa83azNZzMewV",
  "key34": "5AJ5CXjQXSCELgLXMDxXxAoyE1sgCAiNY3kWCkx4si7g18sZD7GHQDNkTqnCDZpnUSNeqm7q1WGpUu6DHFoAftLn",
  "key35": "3CLQeED7xSKaLQju64v4C59XWHBoY2Q49zZnNmLfMcGXDfgxJ6TwQ1vWMMZb42bwwDdJf9MyHFZXUxj4mfydd5yn",
  "key36": "5sR2BAUWiTG1tcrfqpVKJDeQA9pnaPemG5CMGTX4kd8n9qYxuXkp7xZ69HAWjuRMNdQTbrRz57z6MdQuRcgU4tdQ",
  "key37": "2JVsv6FWwvzB1cZzNQzsvU3YkhLtEGncrEwhNP9q22MicdBThfNKmUE8icJ2YQLricf6goXCuvNwhLUfZYFJGTvM",
  "key38": "Yvxunnj8nQ9ct9FpsGEaibyS7ztvfP5G2VbBuPXAqVnjXSnKXThdrG8QBaiB7y6igoSkVfooySPFRstWYfhqm7y",
  "key39": "47ehMPaLzRMPeT3PwCfMX6nT6FYQ3ptEijzWcNdkNY9J3GfDAJkQmXKWV64T7T6sUoyyFSTcPZxJd2dLdk3qqZFh",
  "key40": "57qe7VJTG4ciJQ5ndLnBxXhhUk2ibSHjdydnXZ347A7aGAJnRhbzXgLRxFy9WeAr8BkyLQ3aVdrbJHXr8WMXHbfM",
  "key41": "22rmu4S4c2jpXtDedmt1TELFTHnPwxeHSNXfu9CehG9KhSpLP1DGSgktSYdEpsyrCEmwf6hXaNsu5jaFrbZG58qQ",
  "key42": "3b6JVHYAdcdZYdHr1u9TtEPK4GrmvG9fsjXv9e2o95TRMewqXFL5FdnX8bq1gtK9Ckzu1ebVmCwmiSowopWwXohZ",
  "key43": "iE6maDVdE8FjWzGo6kqX8CX5g4BE6p7V7sw5S5sT2KXtBhAdahtPxVUEufLdrVHPuNRDLqRjd3dGr52GqYyQzJd"
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
