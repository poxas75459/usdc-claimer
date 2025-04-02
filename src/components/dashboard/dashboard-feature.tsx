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
    "4bT17JLizDfp8XJhB2HhxCd9UVQar3dEtX3U9B8yyGcJVkAYinCsH1318u8QBdhRv1d1LXWsSsV3GzpE9zempWcY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59ScSBMQj9VqaouKVJskL8KAoVHzGNKHcLRRKuY9iUFG9VMkHJr4S2pFong3oYjDzYCoiZXQYYZKErEVmYA7m4Tf",
  "key1": "44YgpoQbNGGHf2MZsS3eM4X1JDWomjnerXsyEHnxXdQB1kj6GcZbo5ipVfFgJ6HuNqroJBxJwKdYWD1Wu3WR4fKM",
  "key2": "4faDcyk8EMfpd36axRzUHYXEc75e61c6Cq2xk7joLTevWGic99aBWJR6zpikqDpJtXcASo6KQoJSYb7TpoSC3YEw",
  "key3": "zMZcarZai3CwktboiLNgQSWhHAgkhUmr46j6qjkVBKSq7LrdZzFsCi1ztGhNT6oH2CgmSswzqeKMgcu5UPa5uNp",
  "key4": "uTMtAHk3HyCN6ucYt9DBWzmW58AmdQDJNqq2j35KvGM1w3gG5CoH81wgaie7zKrgP8TwrA46XVAwWY1H1BFPRCj",
  "key5": "4Xy5rHCsrP6x6GsVcyLGCHbSKFddveobWSngmytpFfYtobtB3MNbnzENbQ1v5aexvEU65encZzfQAEM3BWsiVxUC",
  "key6": "5CYvk3A2T35WuFiDsbHW8tykakH4U5d79JKGwLNehqgyhhsYA1FFZKjZENDnC3qo5oyKpovrmajrbUJYLLX2Sv4J",
  "key7": "2b9bphgkKmmv4CzKXZYgUQN3vvazSn6ax3D7vzbUNe88wKw3iKQqsbhNRhMz76MhaQJojMYR3KoKCFkTM9G1MzKz",
  "key8": "3nCL3QKzhW6Nn1yan1VvZ4cvzxcczhFEFsHUHQrm8mF7BMkAjoRrdccCiPsuy9C6Q9hXpvgXLEGVDzqNatTSirpV",
  "key9": "3MHWPvK1wjSWv14auLshk2dqeZuoJpuFRieU6XhFniwYmxTBbgqzNE4iLnByKfh3YqmuBoczcvANsjRjYk3pAvc5",
  "key10": "5KEDbDEp7k6SYHWXUjxLuFy9aK8neKZNrRtazDgRCq5yRiPiZZHQaRaFzP8hyiDUJ9CyrV3Myb9jK2TM4ceguMa8",
  "key11": "3m6EDXntJYxmo3XYKhgFwUKX37b8rDcrLp6LY9JDo7FLwhyuwSoejPLJYy9UKEXCmmBGecex9xbxeeAygSzXx6FD",
  "key12": "4tRFyRJGzKyZeqFt4Qfv1rMe4JUo48EsCuvz9dy7pQF8ugBkL1tyKYphVHiJCbU5yKdyiNVh9RdoFz13VzgUZqC1",
  "key13": "3ipL1YbyxjUgBT6fsHmkpnN96PG8oDkrLDwk92MuMyikjHMSYqGV1JUjy8zwNcfgBMbaMAskkCAYjA3prb1AzKUa",
  "key14": "3cRimgybvUU8TrqtTfeYzvDzaQWNcvVLvAVt5dnYzNzPZZTccGbMaDWfat2XY2gveujDGykuPhae16Q3NC2y2NMa",
  "key15": "2RWq3y9vUrRg8PKqg8d2hYekA3k3NYsKfF1EKRWQF8Xg7rxuU2mfuyJX6pAJCKpYXcoWBpEqHjV6uPVrJCQTicBZ",
  "key16": "4WLmY9dg5vkP5s5hgN2emUw9n32pPL9xiU3gXiHzEyY9yWYsendVzoahJuCnXbZQayUZ5ZbW2d4CV6TnNgmbmm7x",
  "key17": "2Be5pjMMwaZtqqx5GVdgJEBZ8tQSCMNvXzdoPw3CUutJZLXhxysJs7sFYCDqchVbEuuWGb4xpTXTTcXs1wy3nNZu",
  "key18": "4efvJ6R8836KFmnz9RJYkLPNxaTHFMQ8YiSiUE9f3qnAebMN8h4TbiKtTJsdgEzx5cxKyoDreCVSKcZu24kTBHvG",
  "key19": "3JhSvkZNrfZ3ifRtKmGVy82FJ31iNZjx6WDjyk4Kn3hNFECV6QtxviumEQYcfFGWtQpdqZC2mWDFFHYiXgzotUtu",
  "key20": "3r3eLtmeTrNScFn7yvyG5jYMCuFjMNRCGtdQhR9bKCfPVA5Qc4RkatPvBiBkTo6u4ZSPNGHymtQ3ieKwAs62XxpQ",
  "key21": "2tDFWwFjQ9wefiocv3qxGSATt257ciZbwk1C5npMLGHMjsPqRn5cFbhndpEH1GiEVpKjuo4iUTydFKcUc83qeM5e",
  "key22": "5RPmN2cin3D9NShzwtyFWAnskspJBVsrSZTMCsAX5jZo9ZQ4aNrWoBaKB5z1RPvaaUmxn1zeHgW4L9FCxh54ECXy",
  "key23": "4u3PRLSC5qWt4GMXaSaQrBDmiUnwmNmTtEamT1mhHPFhH6H5ptzRuUYxmMZWAAnaSgSox3xGwAL6buQoSBwxrp7L",
  "key24": "3XP9kKKiUzPj9WBgAiXjKthJm8j5vUH7ShurJSm5RioVtzmYor7XfddA6QE7pEQ2oqfn65kUZ5q2iWXtydvE277W",
  "key25": "Rr2ojQGamAECQMnF2MKjT8943UUymze4qe2CJtWDiNR9qxcMQnoB5RbY5cJBo5cXKSTMQbrGPbZS48Z1gjxAKr2",
  "key26": "2hUngA8uqkCZGzKT7FXrEYfwKbvRSnqKzmbcifNbji9xWQcXZ4fJoCA3md4fTTCCypUskZbtVarmJXiyCfyFZQbh",
  "key27": "45yVL5nTr2oo8GhwRoWBYKjRFX25LMYxhj5DijcUfWLBGbzeebBU9hip5fn8DDm57sAG7R4uP2uXM18ej8L5BqdV",
  "key28": "5Eb7v1EhQURB4r1Cevxs8YPLjNJU6XpS1X57v22ZseqTsgTUV9h7EtCXJT2r14vqfsWbJmx4NXyQp6VFUkPdb4Jp",
  "key29": "XyhRaFGyH5qjxB39cp4KMvJvtggtkZGCr1TPQvqEMYmHt4ZigY4FSUgQeHt3XVw5TubLoKsc7qtMCg3zfuL4yzt",
  "key30": "4vg1K4fhTSDpeNyQYnc9FQEf51Ygv2UGYyrL3WWhKBHp7hS4EETYh3Lbat5ug7UDzqJK5CN4MnWifVCuLuL4T7Qu"
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
