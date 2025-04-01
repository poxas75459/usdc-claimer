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
    "2aXJ3Fam8b4JMU2TnEgXMt64rFJ5MvviCw4NWtsoQEuSLBTiNTfPYDS7Cq9jzyneJpiKKYxNxH4cNDRfHwMYwos6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35aTLTUUWc8Mozavj3KcBScuMKfr2gAXvu83FwCVr2DmQGYiEZ5mSkVq4aDwdgjvv7QQRegKgzjiq7nhTYJVpcEN",
  "key1": "45jSYBGVrkUCCweJ7kHaYwFJsHezesEFEghfVzZFbbnKzA21iymeUNXaWMgrfXyLg2g9BWjcWJiNhKxYmXZKu6in",
  "key2": "5kPS91NxDCMUFK2r4xToUTqmaurEo1XpwPhvHYNtDg79jNgUaAiBkSwjtmb9L5JQdYNL3VRDW1nxTqyXjTi4Tf5g",
  "key3": "2G5UPQ6n6v2wk5yrdgfwh1H5aST3RFkdZPSDAvgK7zZ8jfNrAW4m2Kam6RGzKMurPDXPUSzzh9nfNG2RzdcCTgy3",
  "key4": "idRdRCzbvAgrpFMZGj1vDZG7Fzrd7ujaXVGEPn3wJFNyFpNiPqbqWnywqGc79Z5i4QnRDVGAHNyQzmbi7ySn5FJ",
  "key5": "5bzUSqaTmWx19etKGmDwytvzpCyW8akqgUoAAsvDUuwawwmjXWo9gH3stqn3EMMgMeuQT2ixQ2gjmhWnRA9jXEHC",
  "key6": "dmpJ9t7Wnunf9GGBFFE2Dj8szVP5HZoDXrTam11VfHiA7kSVZ9KbQwwXcmRcKsxLdn6VNeW9kvYnLKrvsQyqASD",
  "key7": "5uTBqASALReuJbRbSTkNmCp6ZwAnJJBZmwH7UJvEmPiQ8Dbh8PnP9t1L86Za99ArUQmW7egeCexYWPsnd4CVEoNf",
  "key8": "4Jqp6Su2BiBWLcGYAaHJnMXE2qXgBGqVoPeqPzn532gkiiPdj8iF1ZN2rKMxs41tA9CAgUHgBq6M6PhE6AZPmFMF",
  "key9": "45movLWbziJDZ6MJNZbfk3gXF3isM1SgJoL4wGsxZUWRPt3SchmNn4vZvMdms28mufENkgwE5z1RUA7iPNZQftPd",
  "key10": "2hmMhnfYBw2Y3B6UbCTuPALBE7yicdoEjS9Jx7biSpoq4jcwKZXoCpn7j71V9q6QDdW3rKNj8ddhV6QvJLy8c7Tz",
  "key11": "3bXdY69VPbK3KMrCFm3yh9YhkcLpKxk8aNCK39unHcsi6MqS2qz9sxmGmeENg4mGiwns1Tmcee1aMvBXTeLWS4fr",
  "key12": "5syfuvicQRrFSv88ThwMSDirGwa9w5xjdzyNouzsghceRKuwTDmgdpujyyJJNAfpxMsLQ7on6vZhLHcn4L6jgCZZ",
  "key13": "4xUpgCYvgzjeBa3xw2dnmpUrsTduM8LruWykURUuVXx4qXCp1YLr4WQQZ7CaSo6nYX91afBeVJcB6fgFK8xFezx4",
  "key14": "2fBcDwRnoiYRxyYrG7NQvHhqPdek2VPVYX48cE9tQbWSntFswNDADu62RhnYjofGuUTB2s5BnvpFeLF7AvNaSVCT",
  "key15": "3CA1RZexTqtjEdXyzsRfwnERLQGouQyHzRYJLEZWhSxTvmn7Cq8BwgqWykdyC8jqivna1qZbziqwTaguZf2KLkfC",
  "key16": "5HFn5p2WP3oi7bUoDfiRJ6cbXBqFM2FyrTWzT9tBhJo18kd8yvXTeWHQrafx5s84xn2wgaMxzK2M947b1hcqz8Vo",
  "key17": "zFZHcEvPURWopTmcMKZkCs2kKpsxJtSW8fzZ49XCXf5TiLSH2Psqq3sAiQXPJPqMHLPfHx5TcYUYgUg6rrGagc9",
  "key18": "4peJDEEDKPRN8tsURjzoDscxinsvJR45kfmGgbZFAdSfp8q5k9DAcx6rKPk2c1HnAX39sUV5nvL8ygarAWavLhJc",
  "key19": "4vk2SZNLMWS3S3cKoo7rskvmnq8RcQDU5bx7fuBAdx7JBSgnvF6Gayp5xt5WpEds7rXya9inp57Ls1JU4AFNWkxY",
  "key20": "3PzHV6FCVchZnRCR7zb6Zx9HdxFtEEeRn1s24y9oha7BFEAH6ocfBhCM9CZFL2Aeu2TvrLU5ry7zu2hkRA2otias",
  "key21": "2He8hWcPvGGnKocX42sBzc1kji91LnKmWSTszd2usuTuiXbz8hupYYp1dFvn4GaxtbJbVjY9hr7yKj1HvFa7mMxk",
  "key22": "5sYSdchuJiGe2kJa7apcpL49nEymJCbMP7VnaALutXnr86n4kMBMtRS9FMMkvyrHur2WLRrgj8F7moA1ce2ztnRm",
  "key23": "TP1LABPL5yUn2yNpmEFLp61LCxQdQgwBbFCtHUrMcpP8heiTmdgBPz76CEmT9mhftLSinWeaXuuxE8ctyBxMcLF",
  "key24": "3pbYRenE6RmPpjAd7ecs9Qgwmgv72qrLnBnmNtTvYrZ8asFLwciMR39snWPmJBWHFZCvkafomaza332vSKinPvnc",
  "key25": "3EDVaAkCdp3okVVgacDmZAxu8obDW6B4iSvFGxoHTY8U7TFr4gtmt1YD5W5K72ernW8r5Kdod6kEHPyT5Q9x6beF",
  "key26": "3nvLPQYESr5Axmren4W8CvvEWyZXuPAVctLRrx4yydhRzaZBgaq8KyH5ND7rcGdnmVM3MfpBrJmd53FQo3oUoRpu",
  "key27": "RZGpfmALrrnmi4SdzDpBFrZXXPJxbrmX9p5whLYrmx8nL2Ys3ysPuqcJnpeFccvFdegx57JpLKbqSyAfLDm7cAv",
  "key28": "5w7zmLjzaY4koEz6A6FDNCzY8s1mN56hcfqtqA6tVzxsd5EXpETpCqzXcL667H2kcTQXqCPeVq2eWmDY2pVT1rag",
  "key29": "3t33wbJgHBtRKhsFxDED3gQ6T6QXCqGnSM6bbYwzY5dXDToWXcRNrLSfBryeizgsj4KtVz1nvxAPtXJ4pAgjEWim",
  "key30": "5N85LLJdYw4nAYhYqS5XF2KcUpBTUasQAbfwjQr4pbrr5AVLbEMFQXtMQkJKTf9HkJKhGQHSKzfn8kZwrBTYRZ4Q",
  "key31": "2fWMHJxG3NThJp8nLZhRAeRyVw4eHk8WJqbTQELLGRANm2tQnFs4PTjFVUinHCYt45kKYUtMx6fkoUG9vtEcWvuW",
  "key32": "5LfWthxL5FZm1NrvJoQgUViQ2cAq4Gh1nUJpRuZFB1GmJ7Cr8JvL17LJWZBgwhNjTfCSXGvvxhcRVHCKdQxoCe8Y",
  "key33": "2fZLmogtehbzmoQDiRwrNEpR4NuKZNpBepXxNxSPq7o9fSer4FRYsX2yB76Kt3g2WsvddYbYeTmsYYzWuhtC7vpL",
  "key34": "45gsT3jLSgUs74rwvvhTJAvm1taFBqWcZVni7G21nPHgHWMEkLKmJhteb83cNDMZThTpp7u3MWynhT33LBrRmvzy",
  "key35": "36MGtMjyGR7ajdUBMKvaofPk2qVzamekYyxRL81CmdtVeTTdnBEVcxxuYAZsu8G3LdAo7pmecPKDGo7XqaQoZaDg",
  "key36": "5eL5heWA7Tb1VKYYVNdbXgXzUt6hQyDtmDwn44am8a7AApZDrfvxgchqkyXH319NJDmwhewoYGmkiGWTS9gQ2Kq3",
  "key37": "5aiSYzKQRqBRuXn1b9QQGR2arV1tPjnhQEYD4b31YE5zkccSu711WfSZcpA9ttVW9TQ8UriWDujXRGYfVicw47KY",
  "key38": "4FK87NifPwZ5qNJSWYvqvGgZX5TiDF5GabrMdS4pGYRDd3kCyXsMaHBmHnGdYQxvUkUBscDzE1UZX5kXyp7c4Nak",
  "key39": "56ytk2WCuWzyFBnMCFS5raEYjF3id3psQaSBHiGnTRdo6V56Pmsg8Mp4dEWCqKkmC5oR5dKHpNMFUWc8HCgaQz5N",
  "key40": "4BjEtMASZAZbzrkZ3UgMAx4ob6tiRnQX7HhJocCEQRVgSFnUEMTJMhwGYcgSkbmy5wo8TgPUtEHiD8Kx82LGSzrk",
  "key41": "3iJX88WHHfAgMZoNvnNvJpcVxWwdAUPwD7iUDzhLdrzoReRLCCvf7gTE4rwU85RXHC6NucdwexJdjkuyGrBYvW6s",
  "key42": "598v3Feq9cWTYrqDdeCCGpcMSXoBcL6PfMbAGd3jestGyhP3HEHN55Jp88BC5id42tmn9YDCpTc8oP7EPEM5azzq",
  "key43": "2Y4jEy1aVtsTHj98VPG4YTj2Jc8QrnJQN6o514YNB3T3b4TAmPN87JFjpNWy91zxoH8od8bQXg9SHpCgVQtBYBqm",
  "key44": "446uWva33Z1NH3pnvaMuuu9SFsQ1q9CyTXCwY6NpGLi2CTCexWtYfGV12PuKVkyt9Kuoc7iAr1gX4HMbSREhxHXK"
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
