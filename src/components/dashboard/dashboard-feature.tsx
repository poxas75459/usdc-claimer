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
    "4GaZTgw6YsyKhbp1CuZn82nZj7p7GWzS6qBtYX7JUcXpgF8Kkxrv9JZMrohc66dHZNWMDKgPVLQZLB2vfpprCr8h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25mLneTmKJxwp5ruEYSKqjKPbyJttdXu8vPuSuAn3s2doAKHTZzCvvEU38jfBiA7kGeEX2TEcjyi4d4Erzx3adN6",
  "key1": "3gnmwsEok4uLBWwUuuuBhHMNnGgywbqHqFVTyc5AorP3zmHbWmo6LfHn4Q7S6ScCvThZt75ncKzSGAM63qAy9wxC",
  "key2": "2wjJeFLXjrLY5f7fzjwzKmw22agbB7wQVu5KZ9Kv2KaRZoThyajBiXXqCGgn6opABsRSSNJNuKiMN3vsqKrLVPcW",
  "key3": "2E7b1RRXekdg1ffZ9r3mDNjAdwHhHtTBdoNCw6YAJWj24XcsgkDjDAVKVyaSpdJbh3jVchTubmhRWEe6Vba2cCrE",
  "key4": "vQ6CVAniZWTgL9AQAkqzFHx94pADEJbKCjv9cQnvqX7NyVS8SMp2CQ5JRoUFJHxB7jjp6pTN41LXo9ugvyunYDM",
  "key5": "62omb8y56YvHUpWV3QU7cLaZwvVPHzu3AE4jGW5TEFZTdfHM8MwAeiL9Uiu7ZnWi5UVB5Rum7Wf345LxscB2BXds",
  "key6": "35AtfRhEH3eunuJsEqiKzDcyuYNxzzGucVkNi39VbjaGFFXnRojkwVwhit5mwYUAvxdLXDiGLrWTDTQwghaDmJxZ",
  "key7": "3cErEH53DaRzzRa8n2GMBK2mqKeUdpWn1f84MLXaxtwHd9xyGag9UXg1erxCWLNNMKMzpMtGD8CJD28hHKqWZRFN",
  "key8": "4NGysXiBHnZ832AaRca4GBMDyMeU336e4DPAPbAB8MMhuqFoDTgdb4TqaL7bBzA7esPVXgSmmMwkh6juYwZr9GiM",
  "key9": "uebXhMnWVmUqkxFJ2z8n5NNUP68nDMPrvYFE8g4tvFcgyV31EZoZQeTuyZy6bDaJwuijiUw2f2NwFLz5t86Nkrm",
  "key10": "hVN6WGu75tb1BGR8Sz93zKB5bbthsiEwhPMWeVDLtnYVwbJsy6TArwqdB3yDPkANvQDX4NrYaHmsj4fqhvbAaKf",
  "key11": "4RqsLJ8uLhRepbw94qNTkx87idm72CqQKgdee3rmBPfRsvCtSuoVFSthCmunbXvVe5AdknxfPuE147N78CeRbanJ",
  "key12": "3JeaKjsUMeJku8kAZBNDk93NZoY1m8EzMVqbr8DoxenMC1DYXgxPeAxDEtSbpenyxxYUjH2GwTUg4oV95aRBqVWT",
  "key13": "5eT1SJhCGRRNDRZUJTuD2DnsCBg8kjZAgpr8rHnjMBqXYoDSwEvad2FJVP5orzUhskKfJ4iXu7gGXZwmNbshT6wc",
  "key14": "3n2bmoUmWMYeDPGaQZX5cN2HEmxGWxq3JgkhmLWo83aGKgSUMWYBThcGpxqoZn8MXVsyB4Nuacq7CJ5rUPmSiWEL",
  "key15": "3k15w95B9MFWQx5HUqf9AnViAKDwwGBP8zJNpfRZvDnd76228U7fLFNinhyWJvNp7pqqbrrXLwvmnJ93YcYDSXq9",
  "key16": "3xNnKdqSqDGiz4Hqezw1JBmssV66a6wc87JTjrsdywCo7M6Y5TG44AKVnHJkgoT1P9NDNwG4AkveqGPiCp1xX8FH",
  "key17": "62fEgUbNvBGyeHRu7Pu3nsbBGJSXLfY3cyTfqe4XTg5KfhVKiToGeXKvfJ4YJ4Db5fAXh7rasrDVoQqALALCbXhT",
  "key18": "2A5JwYqanWeaR4P3hbdf11pVz7R8g4wh25auiMctMkZFK388x2QSrqdhDpgAVQ6v4o3QDP7vMCwDf2h1zaU82m8E",
  "key19": "27JQ1YGxsyo2JjoPHs59u4bFipRdWafH1yLCpr5zdwWKerqdU8Fwnw3kbpvEtQi5T9HpDGXLLduGseYHvKWpiy4F",
  "key20": "LktJ3Q9CkktLL54FfAYEXWLxpFh9gEDpw75bnM1syYRxfaDcQjKZrTDgJeaHrZhmn3uUSmgJ2KTHVmkpwk6F3Sm",
  "key21": "3yXy3QjNBJfwpZ3k2dVcTCKbV1gcPHkyiygWRxNLJnE5fK74r2AwuQnaoPbwtbCzEo6bjqMVAFL88jzyxe7qfNQL",
  "key22": "2dSzUr53DM4Rrk4YkAGtji9Jt2DkjGqhgYMJBAGdoDTvBG2VCfhuVWDJrW1Q3WgxMAmFnEAFy9U5VAzoTk3B7HZ7",
  "key23": "BF8MEGJRQcjuWtE8TFBvwcAoCqTfPuu5pCGJcPFsAMnzWDcLiR9HGaW4u4u89oh5EHrAf4YtmZJFtp9C6EqGhBx",
  "key24": "4teFwFHXM2EmyZ8795wUXSQQK6YA5WpQxDbBwK3r2SHmgzrttthgz6EcsSpVWTWbCopVxxQtjZi9fucLtsDkxtNw",
  "key25": "2t2VafNFRYnwwJeedW9htQ7dkNnbCQ2soe46D8Tj7U1KW6ruWFLrgcfd7PDTirP1KDKfsqtng3dXoSxmY26usQ1L",
  "key26": "4UG3MCRYjpGuHD6Mi9sGbBx3H6E2N9nbML9TcuH3n1yQpeUZHF3WnZUCNwUJGSWAVv3dHLEV6rrm8BavbhoAh4fA",
  "key27": "w4QMDM8u9dfwMDKuvjhknQ6Ch3amJMGoVy1BeCA73Knfn8BG9mFceoWExMJHR8jdijSQmGcWdRnBoAnjcgS4Uj6",
  "key28": "3iEGeptjCLwMfHRGTPevbst4P6j6tCQizE4PZoTboFXES7EGqx1ZrYE363ascMMkHSZES25Q9B4kHHFEhswvu5WK",
  "key29": "35yfK5k6LkSpWLUTqtASAB9Bu8w48ZXvM5eHC3ZevdTpHudBLcNnVmFdMRjPeGqAowoRHicJ6p8WLpV7Y3KXZMQu",
  "key30": "qmX4VCDCrGk3yVi4vthU1Q2dpQqooEKo3hBUHPknp8sPong6aGQKScHRfP1FMVSbpqAEPE3F9h9YFYJS34t9wgp",
  "key31": "2jUUpzBv9jJeeHQN4ofWcXkntLJwgn798Q6maRt8LP7SyEWSdMX7PBzfdowK5z842MQEZvyNoRm4Mexd1xWzHjkF",
  "key32": "1T6Ugpw1d9o1yeuX6aas2nVbGgvWsaVtb5bi9k6kTmvMBBFD5X5RexHKjBoQZiqk76Ar6QsjBLxwvKM6vnmNE3o",
  "key33": "ETcb6c94r1f1z4NiMMB1YdQGwNSU8WiAFQqh8B1iDp9et1HYK16eBGJWQiUMra7pqDqQtLCJ3ASUof7BQ1gyCE5",
  "key34": "3tVdUHM5BKzT3BKbn8Xxn62tRqzmD8YTd2Y5SXyr9nxmwDoSjveWyiQyCfkPxd6CTGkcXTJDAGYRM4B5LnQF2rLu",
  "key35": "to2ssQetU4dqK8E3Yzorsy3N4FtssUTkTcLFujHCDZF1CbCEvxkjZB5tLo8MvHvYJNtZ1wcgVkBr2gp42MMJX7a",
  "key36": "4CP8mHbWqLXd9Q9EMt5CnoMUcsFKe5ZZeYFijPN8HpRwZeHJpp2HZSEN9mmxsViuA5wEsrdaR36LuJGTHZVrTpfK",
  "key37": "3cgvyAdCF8QgVkcJsLLfA8CVYBkVqXiFL4SD8bM4RamKATmMDQgkmV8k13PpoAQ96q93yzDyiARzWNrvCeWskQUG",
  "key38": "2xEBfWuvRiu6xvV7dkw62SSkG1LfKDkqQho7gwV84wCeRxjYaLwhpbamuuxq7rzm5RSSy4SvCsZZ4htdCZ6GZezh",
  "key39": "3zAPVkMsU8M3nV8XKgKzBisBc7Mx3bQZBj7imXnQCrsudoKoUzB7zxsqo9QASjVesYLk2EPPNAFRJ8TmFkC17G2u",
  "key40": "5CMxg8V9tiNLkHzXbQ4TdZH55DuQYsfcdZJJYLG592zzseaeozjm3vHrXk7zbXefXXTQ3FnTwpfK8CDnhK1pZXkB",
  "key41": "2aAfe5H46mtEyxemq4hCUhb5zFpWnbQ67BqzWRkCafRddaaoPG3qgi1CMoHaGcz3X9K7G5JtEcxZXzViL1uUZPoT",
  "key42": "4zQ156FvGw4RA1G57UmSmBYsFgbkQZRsKweF9fGYdULBSkTqFdt6yabfRP6WGRzhF8ZFx8i4jdvu9ttx37chxnFD",
  "key43": "3Dxcy5SersDLkSWqVfmrSTyPqx9tha3GM6R2cKfDpKMG3qQGnyHdaTeE1dmxNm41aiDdt7RLbbyKKnWJLpdXMQmQ",
  "key44": "5tMf2Qe25mTEEKQp9xBAPnNAi9c81pzQ8Ys61iovfc81jtazx8HKY4UhYewxcb4pwNCwLyhGwwjPYwuqP2uvcfZE",
  "key45": "pyXfz5Ey6JGvEjbp5dqmexUB8FP3rJRj45yzeVk1Nh5Q7joFdRVbSX5x65Q7NtjyjkDW8Ytn7MSJuYq9N7EJkkv",
  "key46": "5qdCGKeWwSkUcbJAz2L2tHDsobS2w5UhFDdcsdXdbV5rbfDFojkofG2NZzrgTVMZzBBcv9tv7BFjY9P6PxtHjV2c"
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
