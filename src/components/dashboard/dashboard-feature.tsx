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
    "3rUnZ14dSN3JuJKgCdHQHYmeUdQaES5gXiaGyJ7bABBEH3VJUZUA4fYUzA5nkVhXwHpejk8eFDKoPEGpsk8Mdrfk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ka84YMzMC76pwaXdnTt7ELJVwi1hEcucrhHQjWxHQdLZ4qW45bsAAdp1nJcpUaW4cRo6CJ9rNTVAGNrpLdWSTPK",
  "key1": "5fcBdLUsxHXpuB3qSNCBMfEV6idpKZcwPdT9nrGhvg7uEXX8ZZUiXKrUHUskN751VPB5NF69FBgGDv2s38W7u9VC",
  "key2": "3H52snbM1ZS5wTeK2UKhWmYJYrMBjjKHJdiYQqQn1FLbDSgwzreUVdjki7AmmyoDryCVXnwfNfDzt2RyNZSLQa4h",
  "key3": "59sutdpUkmH7No6nafYiHBBjk9QVzdDyQKEo35GZpyh1cZwW2rtL1bshqGK2AbP1b8gAf9tvc7rTiB6Wdf6WYv4W",
  "key4": "R42qecaPhdR8MttU9wsVcVkucDQZGz4me4Sw5q9Lp3jbhnMucPWENuq9rbWmuD9HnZLfrkyDpDwXeNZPoG3FZkV",
  "key5": "3ZLPCbmnsa98tGE6APf9K39fRmbAXsLJRE5NmhRVzC5NrKTcL1biuoWPeFpnxfNyfzAqTeVsSsTuc8wQJBpcN78Z",
  "key6": "iPsHjw87jgnUm6xRAdpADxsHVqpe8PgucxQHwSWoWEs9g5AXFweywbxKSeDVWnhpGzD5A45XCwjzbbZ7otkN6Aa",
  "key7": "2A7RzMFWgAdrKqHBL1k74vDQ6AujqYaAHhDojigDrD7enUJGNqe7qcGFU5berU12NbC1bbrHqgY5i5bk2DiQsytp",
  "key8": "4XXUznitXoK4a41avA5Zs1WxFrhckiTuHZyjw5if9n3z5Bf2bTCqwhLVhTaiA7y668swzpdKmnRcFhubd2b3mG82",
  "key9": "2xXyYZJHJY6JjUExVxwhDw57jm6P7icSNsgRB1rsT871ARGyJ9ezs8tuqXPEvT13u6EpwEgsUqxWCaLAjmashe9U",
  "key10": "6532cJ87rSz32NSuugFznaUdLzrTR2cU3cnMqEUGpSP3ehsNoDTDGPrSHBrzG6XDPYxLWDrm5FaB7Q9F1oQHuMbf",
  "key11": "4HrbKPkTB2z28pkAdWjdwgrfTub7swxCfLF87szdp8rU4KEUYna4zdCWXJAxxqKNzw3j1QcEcNZYF1BGSEwiazmo",
  "key12": "3DbJYK2fhHeQc6iRWPY4XZMeDV5ZpuYTD756Gipz7jX55d9RNFZ5zR6hdo3kKT1MrR473DmhhiyRocGVWifmNYZu",
  "key13": "3ZPkxyWANMMWLPBfgzYt3hJ5bG66zi2NTWby4SpMkG1ZBgYeibWNwUaZUedvS3XCxx5SQ4xcijwPA9YaEzpbUaTB",
  "key14": "3iM4S7evti2rHzweDziPGu9Bak7fPrJeiYwzQH5oZYFroK5kQWzFFstNmsN5wRQ7YjqEkTrYiH2M1tAEohM7SFpK",
  "key15": "mP35rv5tZKyNu8xdAvro3xpRi1MqRbvN36QomGsHSbdJWCzJzc4n8NcJxjbrjX5FtCK9e96DVXzqR7QrDfmsTaA",
  "key16": "5YB4aqGnoFQthKgZrqGBFyWG3WmpW1RyYXBwSmucjFV9uEZgUB8bw9iVZneQQZd6ja2LbUdwEWAVRGtGt4gkEnDB",
  "key17": "5hs8VgFGMTiRFqLNfqCrhAu2wACjUrEAASWoSLLgv9mWto2QHD216nXAVJoHWicsxgFuhEpmyYosQeHNM3kd3NnT",
  "key18": "4HSwTaF2Nszco5pzT52uPgyHs8d1Qd2o4UY4pxYNxJboRWoFdahrwdumqnt1mZFnh7njZrVLphPRtZ9Q43dS5X8d",
  "key19": "3DnUCh2dXR2dRpWusi7gfWxUPnsgkf4UV5SwVBedgi3qBhZEP7CtfiY32nQ4fsBxyuNgtKkgZJWi9FXk4d6YoKuS",
  "key20": "2MgmGLcfvmc5Z8gE63QCFLLeAM657ocskNYTgSFoUhnDjdnjVGmcth9diZkKJ5B6riGhZuzGy5Y3QPXarW5bHuTm",
  "key21": "2KoxvyxGCb1ny2V9Mc2xLtLiW8miztor7by1KC2xGaD3fuN6wttsBxMGWMsx3aodPGLvNTSHc2FX95iP8dkjWQoz",
  "key22": "vL8iuoCpGhw5NEzAqPU9jmEbgfNkMhN2ocwojCrNdoz6DiiNbKn4UK8aHo8hhEzRMXQFeQB5V7j9bHXFQYEw1hp",
  "key23": "7AvCdvykddxCjLNh9XMg6iCdvgQy8TvB3QgWtLVKE8Uszoe5avWJorCJ2yJb7XbQueh7yQiqUGUjsqkFwurnkzU",
  "key24": "5WW6sA9q42ad5u4EEGUMy9xpAW9PaQf5FhaakBuiBC9LaavxBbRBbng3UsqBne8HDSsPQr1GK9eGMUZVa7WSHJma",
  "key25": "5yMH8FzvQiZY7a6gVndqmw1cZ527btebk4ZU2b3X11ScwcYaT2ChX13pF38U7uQahmMp74VERWHdWCcnRzvGC7ae",
  "key26": "4bqayPhSpjptpPgeB46RWk7dLuRbRaJ5Focfqc9Zu399nqkrDV382sVWUYvGkYg5gvDpbu3E3NbQN7RYgNPNXg9v",
  "key27": "3NLScRHJhfyZMi3mLBiNxhtar1amxYTXTd9L4CJBMhvgtiAnf8YprQEEgpzDJd1Tz7suLMa7UDZTGfZ81CzmzbZm",
  "key28": "3NqkaaYbVZBtS9kAkcN5QYkVSAVBgofpPVNS5FixMygcYV5sJk7VfiBE7HPTBJWXgqQrnnywoWy2rGMSexpFmQpi",
  "key29": "5yGEH51KQL1qqbTn4Mq2s69WciGkaocU2pU4ngKofogGCAXUnaqi6z9fkRRRhFRcQ5QjepdBfairReirUwcxZBxm",
  "key30": "4GfoZS9j833kCvqVWVrkiQnzXMFzHjyimtotiALFfPQARSYRUVYHeE1j7qA2LTDHQtXhqBfxskLW7RjWqTVJe11D",
  "key31": "46XvFSzFHcwGqVFtXSJiTedKTbgZ6aPc2hjXQb9evfU6V8MYRwDKyGdfbsf7TwBCGTq1oX1djofnTbHyueGnKLaK",
  "key32": "3hpq3q8ffTUvsSBCephCoZ2YFJ4iJD3b5PYu9EpvzjhUzPn9akXv1rHKMddBEJ8CqHWJKmxmRPJXjRJUX3wDxmux",
  "key33": "FcGJcnVg5LuFdEp3Bc4UxxuLvMRREjUz1hCtHiMqeBwoMCAvqHBoWjS6h1r6RafZJYmDUFbuzf6mQSHcCNZtDKW",
  "key34": "2ggunbJHxSj7gUc7bEfpBfi8XShSi19ghzbkk4ij4ha498Yt9LruW11V4a7iexnAFJ12zQ14kLcUciSLBH1xXJw6",
  "key35": "3cYKvCBxTnM2cFq8uSPy122Y8UrWzLGxTJXgE3K3uPqyPCZ6NYkRoRb7rgb6vejygNZA6GC141iQg9QzWKRinsBW"
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
