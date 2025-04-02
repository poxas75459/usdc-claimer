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
    "2EMk8cqgdCdvBUjCVav7XPQjinuzgWwZ2d4JPsns3ZgUotyydpjNtA5fjBDo3TN2A6X8gFJBnQCjk3T7wxiY3uEG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pEvD4P2DnFHZEZ2LiRxkyYtmNnBpZn128QJrUoB53to48Bga1yeopH7V2iQLer6yppZUmw5BhKfbbbGfYpHKvkP",
  "key1": "5mf4UjzrvP3RcRTQvFUBZFRdtKpgXytXoGGoPzJcu1UqP3e4AmBJ1Q8SPMw8jBKzNCyCeAuFV5kTwqw6XxSQSzG5",
  "key2": "2kExHVqiTmYcSdvFgPJaddz3JbRu6xFyk8sdGTaUWv9cYbjxEimf5K5o8tNZFzixL2LkAhB9jZjoxbedtBckYoz3",
  "key3": "4UvFGPc5MWZv9Wp7CELwxXeCDyhUKNejVJq9GXijjg5xN5xVYk9CKStmm8FMbnpn3xkmVGkL1T98W6c8pxTUWmhQ",
  "key4": "39ERrLVFwiWyao4WSUxKzZceH5ophuQFS3dwjLbFCV5TAQBCwLwPqKSC4QavLwAiZRBzrNLo8ntBwnvUKwBquLb5",
  "key5": "2BwAgVJoUKxxoqXfZtVMqcpfx1LHftojJW4XCWKYxEJHLY76iiPgywHdaEQdPcwWDPwpRk8stFkcJW9C3P9AEwCN",
  "key6": "2h87SDJyWoRxQoy2kSXrAe3HSHnJ7cvUhBUmjYWWyt48X44emTK6gYBALSeBjJADaUZM2f7jUVVB6KH4wUYh8rbX",
  "key7": "33fbGX7biYLfTh8t7VmaHQfNVHsiuVMn6b4rsNEGUxinCS9yXpqwypn8nZ5DRiLPUypN8utMucLpDGMaeC4oYzyo",
  "key8": "3uHBwdcNw7C1G6oYgZHap8QZEYSeojANaTSrH476a3F4aumQcJfqRnuX7Noz1n629U8qQqQZPnm4m76tY1TFj8Yv",
  "key9": "29VGARmhrpVjc9crM8WZBUC7BNpoz3gBfXrDY9LbehK4p6eswytCDk3AiLXanGLne7xx8aRFaaynkYkRVhxNmvSX",
  "key10": "uCKAuLRwZv7GTX6XfxXt8XEpdEwZHPQyhdEqHQ3rw4eTaosgKkp3WQk4GEdJgEFPcwok9msXAxZDaUxHYUpFmJY",
  "key11": "p33ws6Qsu3dc9sJHQztS9V3c6nbedmDzFEYdrCdz9GjKrfX9K3g7NzjKxPYCukuTaGCpR8t1cvddCczG6DikhPx",
  "key12": "48x5vQ8usmaLWopYgYS1uUpDoTrDUS9f8tB8Pub1cfinQtzWj5PmjY1a34ESR8Bi2gaxdxSxZuTVhX6MV5CF6BUy",
  "key13": "67XA4LXWU9hkdSQdarsq9cfpyvSW35fKCW9oa7QQM1Ldc3EuFL9CB1Mvoznqivo3dXjqDsj6sqCXWyitDx8dQ9xb",
  "key14": "4Lqry2HU8xPp9yJp1HbV1E2s6mkjt76DJQxQEJK4sKGCaDqRqSyPgUqSaZLNj6WHtsy4mAMN3BnYHxDR5c6prRY9",
  "key15": "3kwgw5MPzdp5o78TNSe7NbUUjF1honqppqGWCjk1q92gcDQ1kz6JaN9o1MC5UTDQGossSPhvD1A4QAhswS3nKNJ9",
  "key16": "2LM1W1kmK6v5gQNW4RW7csD7CTUtGiBx3dDNbJ14U5t39KqPx8rfJRZ9wF3oeQa3TSPu9XF8gnGreyuF1xUYkgHa",
  "key17": "GfyGsv7hekg5oTCkZh6DJVrSUS1tXviFmrNDqgobc2Vpz4qJe8P6byfShtQLgDJFpUH5enjTidXR2TzgHUbaLrJ",
  "key18": "5WfsWzkaZiNEHwB3JgewpTmRKq6fMMSW3c6PdLFD4UVwS42rWmHYfmkTLCcDrEKRuE1HTLBBVnRJfF8YZbAcs73P",
  "key19": "2z7MdGLT94Xm2KfCCTjyZbcFjBfoiugbKET58viw9jy5JHW35q72Ms3kxT38iBQDm1CMBnkcHe4KhPtvH6Rych5T",
  "key20": "imXNBwdCifxexYBvoM8gsj8FCfsqeyUDXqnARxYXvEyf7TwekVk7EcrduC1HwALpZAmsV8ZVAKjLUqqXCYp6yJQ",
  "key21": "2EWZmvPgVErjHbmoUb292t9MPBEXTAepb9VX3uvrBApUeFXDjiDfHM9GJv5Cu2KQqrnc4tyFTfXCk5zTCRBp8xem",
  "key22": "4K8CkEgfU53v9ikfF1MA1tdoqxKPJk3bbBSwf7f5aeqLWNjLGgnKrJJDow58ZzJUZ7PKWDjZuDmAS7SCYZ4vFfBz",
  "key23": "3t1SB2TZL1nBNC9cqR8gQrP3cnjCK18kojm2Xrs8garZAjjLz7XF2SbPCShV6itB9VzNqv93VqNgyXNyMhRdthHt",
  "key24": "4fRoSJRxxVPy2JJEnS1PUT71AtuegWaoVjasrqGXn6mmKpTTm1cCoRJWYoND5VuqFS43NCxZU8MiW1JWuTNx8ut7",
  "key25": "4xu5fK3smgfyFmWbx262pzGtBpmNVrK9xnbKTCAXbwLicnsfnW8yB2dq7RMFM3y2RNyBnwJQTY6gEt5DamKJYqVZ",
  "key26": "1fN4SinnaHyerDScyb83XhPL8FeMLKfX2eJbhqam9qjGua3oyScbuBUr6v79xeCNDQtUsVjJ78Ci4bfKLh1osYh",
  "key27": "5CuyPFh2QYthio1sfgDbND1WCc48ePYCB4yYUnqNi98TRAGFymXnWqhKHhiVbQNREsA5Ukg8sPE7T4cGkbu2g4RQ",
  "key28": "5xvd93Vsi8KLPQo24JDScDotaWLYc65EKpatRGA2ngHvcVqzy8bmYUFTHudp1KzH7xbZNxrbS25gGgmxyWgGbd4Y",
  "key29": "2acEnTMfkzmiGaPQJzbyDKnEFjQrMCz34xwQCcLjLPjcDprQauaM8s1XQPRxYhQLpzPCii8Uan12kpbdsTZYb6Uo",
  "key30": "5jTtHhfvQtkJ7nicWDkzg8oNCfmijzNSaA8ZvkzDKW6WUjRkdnk5HJtULnUtbx4MTSHAH1p9J1iuQPhw26HNYQ6U",
  "key31": "4uXzwYwar6a8kbPbQQLU7LdJarK2ZqX8m9sVmFyzBkmzm7PtqXRTsdJVkwr6onGsvqZafyPMKknQNvFtDeaB8mPT",
  "key32": "49HepwdwpBFctk5PougpzGMRn2yYHXcKvcqvGRYwhfDmRV4ajq4rCkcSQ916Qv4csFcLiY7osi9ceEqmSQgJZP52",
  "key33": "691ortGoj1JnEiQC1bQFW9BQNjPKVYJwPskgmLC9mprZkfX29roVZaozFV7v2RUMYr7ofiCRmXH8okJPVzEjVHn",
  "key34": "2bAf7L2ZJx5ZV1Z8kk5ar9Zahh5pWPNAnxVvuLe1aGoe7K7dDgNszcEka99uU47tpVqjSVg9RpiqT9jyG681b2Lo",
  "key35": "3DafxLxubpTQ8bDgZzHnC79yWHh1C9U92xmDg9nvUZPX58sicxYCAfuw5q1uNeU3M9Rcag4NWae6GHMpDZQzCJfu",
  "key36": "zcaHkUU8XFW2as1d3jwTLW3CJGkWPP2xyerVhoHijqBGQC5tjtp9K7op6qHJLJjdjLQbdXe7cikEVbwKaYzvvxn",
  "key37": "5ideTkzAyaNB2TETxc9cagQMddw51RVQynUECop6wwKfQFRZ6zPaHvH6X6BnWq6PaoKPJdYordwKq4B2i1kPg93L",
  "key38": "5VTHd3NETbZs75Hi93NLahBcTrE1oT46v3wTHeEDXwvooq67VEPFfFsV9EdToXfzNCW21fchdStqpQ4yymUrf8Fx",
  "key39": "3ropDVYB4YYbo6SAtPjSEMcuiMpSa6SZdt3RhFd3ki9axyyupqXYKMD8PLmNcXu9CiR6r6q7v4rrhQrWnz6D78QT",
  "key40": "2NxVEroMwZhYyyJ1MBfmY5fGimiJJ4FAkXG4cxuc13vkLzoX4Y1Bpv2bCiCu9hpYWLH2rYAGVHScHMHi6hq3p3bo",
  "key41": "3rgqZdLHvfygZCWhD3pWnxZMDn8g4C8c65BAavJzS2JbJC1NJg8QkjvwtaXG6o5y5EYn3bzAuxerKHHjJF2F6B3S",
  "key42": "3GCz645RUYosVvFNxMKvn7HCXWB6jwv6vcjs79NZAYMqbQgGPFyPegBKCLmTzyjX27WT9tcaLetVrFz8kvLiRTs5",
  "key43": "UAeD57VYb4eomxc289wugHkZvUY5aASTW3qQeYgB7XWwGLjLNkgsf9tLqLQ4Je9HLCvciuZUQfeduCPcCG86wTV",
  "key44": "5UzM78coT26UDCE7spiLHpkYWVj9RBFi6Qa5HR8QoPBu4KrYgqVrGyqmxntwH9UixxgMUTFa6oMhrd1gVT7bD9CK"
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
