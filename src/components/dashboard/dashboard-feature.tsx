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
    "31vmKEs8Rg6u6D7CMsNu5kumx8JJ1Hc3pyys3D8zQ4dx1mMPZZdsEpjYfycaQejDEsQ9d8wYhPRf4jz8fYKZgGUJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g34Lm7jrqcGyrKnuLFzZBxBWx8VCqWxsTtaW2ATmZK6Lcd4AmjySK84uuU2TYTt6VKrEy3Vmbp6RWDaEkU1rSvL",
  "key1": "XJGC3ee2KQ1RrTmTTuzuMoa2DGj1k3wHz9WP8azNJKTM7Zez8fVjwJ641V5bTfjQ3TZmvpDN2db5cesxtyqGF49",
  "key2": "43rGwmDRnvgeVBFKcixEioTBwrNsMHavxN9Q4j8TVnxwxVhD9qKSoerZtHgpvXcncsFMZ6PhzdbFLum31ixs8NfS",
  "key3": "2BP9cgub4B5WicMywEtjo54ckv1pUQe6Es99FZS13Kuk8SV2sRJ8YJkh3tbMf15Kk38wHMRz1WinWuLgcy8WU63u",
  "key4": "2mozHCt564zscZuVBNotG7dH6tMNr3ZZQxGBkwNWwYSMu1NWZPwrfqoevzDpnF2XHnNWnrFKMMXPu8hbthzvKrnf",
  "key5": "3MEdtLysmRsWq7uH5V87hKpeGsyLFYJf5NrDSdcMsZydTJn88TYPkacSbRyMCYoBXY2fBCdYSAijYAKbKHdxsuGd",
  "key6": "3j4LdKorFc8BG93EVSxR2tCS1G3mzMFh5ZPiMjWYi9VczfMA9NytSciUYcepFjXryzN8Ly4rjHzWtpiQmotr2kcy",
  "key7": "3g9NowPwANZn9QkcNWBQsAquzif6CJMyd1GHMSS4NUPr1TyCGpmSoMy6NMp5Xd9acFoBgVVpaQtddR6fUMakL78Q",
  "key8": "5xQM3epofRdogd1dGGZHfGvsyeZcsxJiG7Sx1VD7tgeM7SCuQGsXrzF8FfR6fAnML5hTLCZrNVxXL2ECvMzpMXAx",
  "key9": "3UmfthAHwERzfaNxWJ1bEeEMYC39GhxpQ68AQFmYhM8bNQhdznvePvZnsNGK51V5HYwkTVTcAVdzxjpiaSza1Kvh",
  "key10": "3asRPrkAmsowjQAQeUaPqoPoqLgSPFgrSry2FmHDaGedLawKkBFXgh4t1SnvJreDFm92sVoy11HPHV4bpaw3AsUc",
  "key11": "4q9UWLRqsFhfNWcBR5hiRvto1xUNJAcAhx68LoEajWcr791d5bb79X8Rd2PP1xgm3zwV7Ld9KZGo4odHxJ4Yr7cE",
  "key12": "TPaq3qfj2WxLoP8Wm5BJEWKYZgoQBpCL9x1SWxxE9TJqYLggajoMoxFteTN5AsZNDpExjdwGm4tMi4qxH3hAzvJ",
  "key13": "4W23G9FVqNZBi2kqTqNFhUx7xUiLSSisuXhfqYEGmhRhREUC269ET9teJsyy4wZsqpmPNunyCSCpcztKEKHSKgrv",
  "key14": "oPiaa4AyqL5T34NNVNGgAUB8FgoM6Z5MwyW1RerHCtC7PYXbjJieupCzjqMcM3hn257gt5YQUPRASGooKvg29yr",
  "key15": "2bbUk6Sh9dhmxNkfhbPezej7M3F5SYFD9GeXbBFbziUevCEVS5LamuUWgDRHXYnq7896bEx4PYRz6QMkgQEP6Xqm",
  "key16": "2vgYtfZndCX2G6FrX9srxBsMbHh4p6bCH2QASSHt1SayKEZLUK9QAnmw7yUrB2nPzhKKYnyjwSXuyFbnhHRkipy9",
  "key17": "4WuWPUqsounJUXEVp2Kwtr5sEy7E6eo4TW8XBbtnAWzCfkpcEdViVxbV29wfiPXNx7e4yaSCXNrMbFNovzDocnuz",
  "key18": "RQQhFkz7zZ9dRT9tqLtiEx2LKdy4GyiBnMmWsBQN7nbso82PYvkD9VSGtBVucURi7tjeTPdVQnLp5wLuv97zdEw",
  "key19": "2LRN5dEW2nPrzgaCf7DVV7rQKCBMdq1cj4BKca3R1KDSLihPkj3rog5xtemXiTWZpx7dF1VNo42j8YtCLnXsFosW",
  "key20": "4QXRft6MEUYi2kjWZST6q4tgx2xdEz1WUBAEDwx14vR4QmV7wtfnm4SNB4begKpJqAah1yBJRwUjspTnrqg5gKd",
  "key21": "2uqMvnCWsLsEPXKheawAhZqu5MzEMC5JdEFRuSCk3ibkk4y1RJ6GAYoTPW5noWH2ZLXUVp2hxTfDeLHXziyeeH7U",
  "key22": "3hJJDsK3tKFJLETNthxsQbiwJseBDSUDWnvfFd2s3BZ491HHLdaALnjQyuS9ETptSSjLUbNRBfFsXHxrdRLDSdip",
  "key23": "LMP5NkXpsksFMJ2nYD5qfW21nfpgMM3GUwkjPpfBekp4DB3MmRRMQ7VBFiVLk27ssbRL1z2CUmUg2sodn3yFZ7S",
  "key24": "2Jp3cMS6FUAe87JZQ7hJiRBkC47wLhEiZz9FtpSTquZnBgSSuMMbuv6LTuc1AdkZCB6xDVgwG6fjEh5MZ16rnDGe",
  "key25": "5X6YNkY4beFG7QuMRLVKMP3Hb9BM4eYpEhwxVe6mAvEBjuZRLBmV8n3ZUQAsAVAaxJJZKccVe1UPoLw6vLhVZWUg",
  "key26": "3Juie3oZpgkCXf37zjEHRc7bL9qbCPTzhL9jWMpxwdsDRnpQL2sbqnEPmvGgKVXbFt1TZK2BCavF6rJTHaK3fTnJ",
  "key27": "2dat28goVUCmn99K4w44w9Y8V2Q3Mdy7yhLtTsujdtMScuTkywSmfppXrvPYJf6zCp6jHfGgFnYgX56JLuLZRuor",
  "key28": "4W2YERqRgPLdFFyHZoszyqfxvKDNsNcfhJzFL6UL7qyTF8aiiDAMfxCudtjuQrNgZ83eudJSaYwfzQyc7ffZs7f4",
  "key29": "5YSPze5EWQpRAmjFckcJ6TCBxFRJqvrv46qCwGnZYcXj69zXuSRt7DFPLBRkAKF9jkGwADSJD4Bd2omj2tZAVCRn",
  "key30": "3aN5wKGHbVpXsj96uELbG6hUhMWD8er2ZSh22gC5197feNwh43q8FvgL9kFEDwog7E1cfKdhJFdUkZrtKiuqnr5J",
  "key31": "4CP6Kx8r6PVmeT5LHDE7uMTHRwBKD9HRgYQrkqzRPXcqqXCMeg7bgY4w93eWEBwxypn1JHt61fZhLhjUkHGQQMCm",
  "key32": "5zXGqSLwMCAFV88oXVbg79ZcMUyEp4ePEh1FCoUxCHV5da6KCfH5GncBftYAPGCoANcJsF33VSGTJhtmjnqLQ1rZ",
  "key33": "FwPsVNwQWAYZ9KNcPRGPpcoWNKB55iobvxN7f3jzYb2x6n9vY7iYiCK1RcNBq8CZgcbN1BoEoAQ9hNDK2tBGEoX",
  "key34": "2M9ciH9G1eahT2Hn7cEZCdLMjjFtQrXVLasJntu61bmrbuCiRgW2GZjGawD1LxuZUh9VNG8XNvTMUc8n1Bpvyqtq"
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
