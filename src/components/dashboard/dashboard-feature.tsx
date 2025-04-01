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
    "3xXWazxyoUYWnFAVvC1Bf3aabDv3XvCtQbQ4dwQR57LUXzeeSid8dWa2kAUZBfKwMZ9UqF7JTYMU2JofcWLfoF95"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V7VcUD7E76cbMF3HKqFxfXeHHPANoCZF9k6a6wGvd5BEebaxaaoR1sJ7sk1hAPaGTrvSC1LqQCRR47pJM28rEPk",
  "key1": "5x3hA6SmwBsy6DRYgYM2RPtBwtKkU8o4y2vUPtgnMGhHiizAao7Dh4sEttCoL3uTJZmGVXTXpqUv8NgYrvyZxSfF",
  "key2": "36Z4D7sHNTnaCuWvcvyCTNKAEARDXVNM6AMYFt3FgmH2k4UbwCuuST5vDeNHU9CukpYtRChZTzLxh3PNLYMVB5Ck",
  "key3": "i2j9s6GHz3TCYyfCRKU1LHGyedSDZFBoc5F5w7gUELzr4rbyhh3x6YHYG1auoSiLKXkp57tEReLostZB86pZ3az",
  "key4": "VogD8v9qdzTk37ETa65AsE9JwCo786fBsMbYi822w2hduMuqzWQDNDYrrCD8dpUTvTRBEyxh5g8KeDFYh5bCEJq",
  "key5": "34Jh7XAQrRXsiMS29ZSBUhMqyQ7zLa9mh6b5TtK2MMKFF6P41wTFKiScMGL1X2kH9A5Vdsn4AJHMT21Mfa5pMCLm",
  "key6": "2tF2gE4i6HR4sYFAgLk64fqgce1yvy7AdNydSjZ3DAgT9CtiHPyLefAptCDihHDSRKXek3m4cAXwitDC8K6dVpMG",
  "key7": "27Qfz3J3MncAd2xEyCLVue5iTHhUYuZBxwmYGenc7FeMSduAeeFLA3QtFxVQtKK8jpR5Fzz9QjocR5YYuXse7kWL",
  "key8": "3XcyU54obc9e7uHXZrp8WMcZ9BqQTSdKJsYMdQEynC6XA1xo8GpQyVExujd1Vnyfa1A1NdSLK52H4535WWvdc9Qz",
  "key9": "2C3szwaUykLCtReP4hHHeajc31Hdja4Uo8xN3ULref7VyXzNpL4DZ51Yw1VSqW54o1SoXqhaYASBPU9b6TZeXwYJ",
  "key10": "2LqsihHzz8bb965MU2cVDJxzoTQYAMNSsz5BWerEaFMBotLtaZRXu2tw1qnJQFq3q8pNY9vT9trgQA9VC8N24mq",
  "key11": "4hbLBFqkBkp5kuCpuudAkpTSsbA5hC6j9XWdfxYp49D26PKH3kf8bLQmyt8hXLHpVmzMAf1Aiix4v2rAcBgdhGSY",
  "key12": "3Cthm5Pd1mSNDYzEQrkf3P1bcdQoHN78s4YA8WosK6iwBdpAtkuUQmJQd6rMSaXsd4FRzMtnpMTKjFFcMFm71EK2",
  "key13": "65tRSYmbbi58jw6SEXwnXjcd5fbgmUFNJbkWv4j8qaL6e7aKgs83P7yCN1UrDgHEJZhSQWazZyuadAzGCgdw1oy9",
  "key14": "2hDXVYKexASbZke2DHkwGWFzwrnBTTvbqLjjucahMyhvc2NXCYTFzf4rSi7eYnyTgtBrJLKVL5BxgczFLD1gvPWP",
  "key15": "3e2e9bkKLquuxSgGPu8TJHTyMcB4k1iSECnSXwwJ22qaCXNkjqW2NK9jPrBWmH33nvBWxt5NRmhu79hfmAQXyC3C",
  "key16": "3a2whs3KPaXZ3kxMgZBvZjXEiMY77ohCJNxoKwQXjntiCdHQJm4eL7F51auKaEbdJcL9inLWxFbwgwaL2sfzgYet",
  "key17": "2k5nFAfsLx5Tyge9qinTqryyHRKypDqfc4d2mf5ufsRV3aATqzKuWWgUjDM8Qhy1QTNLRtzPGgj3eEiB9oBnCajE",
  "key18": "2zgrYBUnU5xcQt89urGUMVkY78oXK6DCFF7oqSaYXU1gHqGsJcC2sRzaWs9quykQ4HKVLTt7cGRGGgBBemfh9z8t",
  "key19": "3mbpqZyKAyu9NwAKbKwVXZ7UtxwvGzmymffAoKXrgJbh8hmVaGS2F2zqCnq1wGLRzZ475agmwPmdJcSCxgPCdJK5",
  "key20": "4QppuKGHj7cqd64Cp2WsejGk6RaqcT9cNnCAoY4wvwZNZSRuQA4Si7mDn45N8PraehPjo8zd8yeEvGsGP6GRgQMd",
  "key21": "67YYvoJy9Bcs3PwWXuSi95wdRKwbr6uA1YuXCh2hTmadrFc3J67FeBgDSXopJMUXfe6q8ssFkwEcVkZB8VG3Tswc",
  "key22": "3kgCSeh6gxi1wvr5PTLTRUckNUqMyM4RP1rMQ2iWT8ZoCC7xVgzjRQkLXrTpNYwSt9yizzpW7Kv9URSifmsSVbvk",
  "key23": "46My4iK3PLAVJ5woM5JjAQSb9kMAvpmHPkeeC2P3nephrEPcCzi7stVBG55FP9TWgBiyWdZg1XKf5AHE16epGy21",
  "key24": "2NsgY9FRtdnEUYGqcGh7cec7QNzgQbPzGxY2nCha4fLYk6Z2poGHUg9KChyczAuXDVrJqteKQ3SqJAuETgZZeuWU",
  "key25": "37Erj52HRxEUGwxHoQuQ6LpighYCXtN2uKfEZf1wtA3cktvcYvhCAZLjrTbXruQYV5vtycVoWEad5B9t8WpSoXRU"
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
