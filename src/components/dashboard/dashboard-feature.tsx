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
    "3CkpmnNM534YmXg7GnJv39CFTG6LShnZk3cp2LVqBWGFx2Vn428f5AduQbYdL97WLB4eFNqf2m5rZbGuwyvPvnuk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fsj7xYaVvibPR3biqqtwh8hUxyDctFRbP8DkjueEZVbUG5TL6neDyjQdMfAurafQ3JBRA6WpUEU22767jaCQHar",
  "key1": "5AE1eNLXTW5yD8kzp5RHcYk1XYtVgMgt18JzBEJxvFUmPpgzJr3tZDLP6Uh9CoufeGr9XuD1nCXQ2M9uFcX2WKtP",
  "key2": "4W1Lf9BwSJ5Zx2iqe2ohiLxBGM8HygffG3FXECABqncMx6nacXacqhFHPZDYrqBHabv8iuUUc1JvmKnjbS6Z3scK",
  "key3": "QTbrhnJtcmBCzDRnwzTS6VH6LgqprdtVy6ZP4pfVR1mqgdanQPPGaiH8ys735qdXPyZUFXzBqjzMpXfGi8o66KQ",
  "key4": "2kYvzGb8hf93Jrvkch9QrtiVJACHptYvkdqx5vU9TqGtAqZjcwSzxWouAcaozVmHtwXWrwUYqRzoe796u1VULCS7",
  "key5": "dBvVJ6Hbk17xtgPiKqsUhZGzhiDnDj21tWBGFsVha2D5qyfyaH5A8gENbw3obbBNqvcnQZipvdj2BQor2ib8Hi8",
  "key6": "nKrnSJc5z21AoDeiGHfj7HHRUPKKG3ZerVEgtQ65GrCjg8xKH5LUX9Q7Z9TifuccJgw4sm7c9hsuh96jGrszaVa",
  "key7": "2CNG8iodoWEzFtBi97nZhFuei1MnPpJbw8Fn68Xqg1HFzPCJQtwSPeG8qRSpCCgv9g1Rbp94JxtDRTVwmBz1r7fa",
  "key8": "5pu1qkNjMGa8gEav8sszbVqaQvjxfMvpy643KTrefxWeMkx3L9ipfs26yLwd7mDHuLTTiaKKstvq73GHjdXo8hgb",
  "key9": "3XYVidDNmH5uT9D1HgLoR2awDp1DMTFfMsidvwCiZxrLgJU3q6qaoL9WEshM85esJmfnqZtrFv8Rc73HXuhQ9Z2",
  "key10": "4wnnGy1P7zsXXLWxMfv1KEDFpmb6f8Acq7DyUQBrAK5odLcnqCfvpRrbfB44vPZCcoTRXaqfoKv6iNA7EGZKcVab",
  "key11": "2RgHcue7N4v9gnmSPUSiZNak4xuqsJCZWVLCGABF8C8qLpMhsjAcVWVgGTkRtEAx3PNg4ybzKktBcmEj2oW53XuY",
  "key12": "2umswuimSMyqgYu6Who7CQSLXcMznLeKpNXBXx62Tj57o6Xuw6rPs2hYYtPxGxjRkAHYvfppEBCDRanD8xJNmNWM",
  "key13": "puVBRdHnWtLu1NnsUHAG5Ko8emd9Ck1ndSjAQwdH8g1K3mVVWwoDvmCc9cQhva7ZHHJnvfZfDS2wyDQ7iuQeuzZ",
  "key14": "5KwBvRMctMN28TpGDew1sk9GKyJhh56RBE5LsJdiveKxKikreeMaomrUfLMUsUCZjjbM5V7TxUqhQWipJMfjwuK9",
  "key15": "YZGnShwfN4yYKYnsXs5hmZNixCf5y7w51d4xBBhfKLghwicqvhC9FrpbK2vsWcJX4hdJFvR23Es6efBDCtmXVRi",
  "key16": "3QkbKDpnhRuMs3PDcmpacRm6st47UzZWL9rBHrxVavSrf1GKNdL4gbAA6vD5yj9YCvU2ovFQTURcXHSumaMQBxb2",
  "key17": "5uJyP3t53iJSgfjoRWK9xQMarj2k7t1RbxdY5txiznDYLR8TBnJ2U1kw6JCihYNhMaLkwQr627GYsNoWznHY3tdT",
  "key18": "3kotxA7VCA84MUZPRs3SABAVB37PaVZVX7zcTaFCmVcjxAdCNFrHTftW2mRHpo2ygZVraccpWhKeejYF3nnc8FUu",
  "key19": "tQpLSiTrzWrXfsnYwwQS8nSAxNWJV1Q7YhM8u2aA7S1UGWDWUj3dBLnGc8y4yv7D7BMjc3JxraE2wkdbp5EXnsS",
  "key20": "33PvQDHLztquunTSgx7hpZmk59ik5qMVXTauPKgbwbZB2MFB63ATeey71b4nzJmdBC5wDGEXv9BoK3iPcJhC76N3",
  "key21": "4YiMmYrYSWLNKmicPHfrEdJRDrQKUeYXVGB39NmiScM5XwNoQm3gSkEbzp4gxEpvaP8E3tZnrwwPTfe9VoDjnkcz",
  "key22": "62bYp4ovoFaLNDaK5Ddt6tePAv21TVsFWHN5fxCLRTo8EwLbcNaAWCK31H8TVNQPwMkxsf4bovKL1ZmLHM16qHWJ",
  "key23": "2pVSxiRuP5pBWY9Frqs3mYmWNiSAc7ZakpeJfXX9hqPZLrFA8yWRXbxoh472ja1GVtaF7oVkBXmtL9488eLNE57g",
  "key24": "5iynXmFekLu1pTRvpkUQdtZdytWHWaYRpCckCquYHLDJN1aQab6mjXqcCta5gz3azJnr3sNHXyahSj7RyXTodnDK",
  "key25": "3LDrSnQ9FjAxYPrPHh8CHLxyifNKwRNKgvL8QprzTrYnWtpXajMovirYzvyKbNjeVbk5GntHvfqjtor1E7SxbCU",
  "key26": "4PibBHJN9BSrcScfT3S6AXGuvp46ZPMVucoFhAw4PVT2M8cdBqLBtUWFkErocsymVVZgSXu8Ky3dEr8o9V66Kq8T",
  "key27": "3qTecNunLMVMe7ZSdYHTMauBJj67PHhpWmCCikRiNdCwfF9zBcgfH9p65CNnyRYUL7RaPSjXnunTkWfMac38SeR1"
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
