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
    "5fySKGGSKq4GAgMj1aPHBpALcMVm7cbKA5QPKssng6F5bWsw75CmA6co1meRu8f1Q51ri7onJvHF97XH9JojAWYh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cva2ywW89A7Mdk4mCgojcj4p3FMEmBDLVYuWrXBYx42knywMCFSqA7BbBP9YzNkUtzA1JfUv8u4M7qebRup4Gwe",
  "key1": "5T3Ywx6b6pDP3bj7QXj5ydsqcFVoBJA6vtkM9Lr19ig53uxXk7VoEvNzM2Gky8q73NSSjFpTZV3dPWypucUmLpZH",
  "key2": "5pAyseydAGvjgMrGgSYguktY9shKkd7cPM1RSfQ3ucySZQDoziHj9k1fhiejoMVUFKRAhhBAAPVLxBVfMPaRHt97",
  "key3": "2mWcgwHXgupZY7uzAkTcud7SVLWkXkPhC48MfXGeia7kab2p2m7T3KEJiVGkMRGhA1EYecqPf9fftt6a8Ps35poJ",
  "key4": "36X1K6VbTAzY4kqQXTowhSBCBy4aWvCn5eTa6qNExGNHg1BrjoYa2f143AB5pXMoBu5RmAVW6WZo8tjv4jg9v8pz",
  "key5": "2L97CBuRf6dq3bqKJRJyMh9VQAbRttnvaM3wHXiRLhc9m16FjNs3bY5dPKsEoctpFP3ziV1SLoGBCwiCKYPoLFdM",
  "key6": "rqjatEUtb8dmCXe97eUh42hRXxQAQQiifbjv5ejymf24PHxr9W6aEDyXsGPnTHRW3nb8JTPC2TivNCy4VGq5RbE",
  "key7": "5uznEuJybfNJKEBLAxZgYKkcePFufKKMd7QPeF735x4ruMWcMzuKcufEKcn8fqNNjZANCTHnDUXaQjTV2gcEAwLF",
  "key8": "3z2i6QTQ2Vqr4Jc7aShRY8xm52cEACbXkVvFaixSKxkLmJ5gVM4SXxHYUzvQNAL2Gs87FZSxo5uTQv9ErP17XQYv",
  "key9": "42qygFh6dqE7BCtFpKRK9r4oDPLbyiA9oyDUiGkbaM6Nuz7e8Lzc5DPNAPnF6VDocGj7HHN8ksbbrMGyGwidVZaj",
  "key10": "54gnWkXXViUd4SYS3AFWMVahYgaw9XTdLhTTJ3KH3nzc4SMpxWPkzn1BUifMLW1WcrnLgWzcsf7s6qFuLjLWmLr",
  "key11": "3gfbu7gqu3K9CzagBbvHobeHCdkeL5V34c4vq4pGEfJQQZts4MiHqCDvKWP2EKCVEorGpPTZWBvCQktULw3qmNaQ",
  "key12": "34Zg4Fpj2zZMiqisFxfZNrvBRhykWRtss2Lm4xbFidDiuaeJdEjsBTjrCSPrApyZBqGZVZeBcVhYZCbvMo3dws65",
  "key13": "2uQmbHBu2XhWLkdmB9yHKnkjMADa3HtWtfpRXgW9qUtv4JdbpDq8WGcRyHPK7S5Q7oopDajvtkzkNvB134cHqxWP",
  "key14": "X1qKgh8AEDVy7gW2se5r4boarBUSPnU5QoNVMrkkGQ5serdkvxcLVKRt2eDcKF3yoSNYk4wHXwMzyftrByjwtVN",
  "key15": "wswtQs5ga3BnmGcCYFhvKrzJCtsRSfdvMrQqH7SN8kk4aPSXXcVdAUzrSTZoQMDAYd3mFvJGQsuwhjErTBQDtGY",
  "key16": "3cPvC3yz1XrpBARnAbDW3AnWxr8JLJvMsmE3KnvxgXqYP3QFL6CoRtoHxQsCR11Lvfw46GenWTngjDWVN3RbQcw2",
  "key17": "3s4dSTFYNjfcEWGX2gxh86wxmt4U96ZtQHoic2YERR1WTcz3LRh48USsyqxs4mdyJwJBkC2jNKRk1TTS4Cnvqg3h",
  "key18": "25NFhVFSb4nfDMBDWvTWFziLjRqPRJ1u3TYGdvwT8VqBjoMVB9JqiZ1wdJjdJ7PWimM4D9cAFR34LP1WUqWTMWn9",
  "key19": "264YCfwvbjmUEGyXD4XzzhBw1gQXdpd3ASVpoj3tX4wEw4mPVeuHm6233PxiEan5XJabdR9rn3myzDxcJiTjSPpg",
  "key20": "3UmvSn43gwwRJShZSWzRnFRmd38eHX8DiQwAvym8LmxFWkYwVRdmErsZqqWoEen1BVmQ7kWpZqwAtsxHpcHtJnU9",
  "key21": "5SFddhmUBfBaa2hhT36r4LJNCPGdPNqstNZE617RiB7ExSkRr9Pt3F4Yz8mgu1cQxLu9inESwEVr4QNGJCwqQ41M",
  "key22": "4HVrP8tSpUv94V8aXpaekkJkM6XsxrQxzHeA1iAyQavjGi5o5sPJvoMmSjntc3CiCUWN7ndEBhMmBrLQB9etpQFz",
  "key23": "4htW1V9BfR9awzuW8DvW6cwviYrbpNwqz7477WBxmZgrgQ1rJyCF3PpYbuTN1xHZpHKrAEuyPzi9HwrPQEUNxGQv",
  "key24": "2hz6jTQLK9XEripwjjzYrAh8Ea6ZWur7sV84D1jdk63xh516zzMjffPWXy2jSq6NdKi9MfWzcyyWGPUXHs7r1Awc",
  "key25": "5WmhYtz3rEC8u8RCcc9A15g1ufq2JyEAN3dFBYJ1XqvUa9A5cbUFfAffgFgRs7p4krJwigMze4cAVNxYXW7WVeKw",
  "key26": "5Ns3C6yWMU4jexY2VdDg3WHpqhL8wXVxh22BX9Pyi1UfK7EiKjErLMbM5a2aKpqrcb57ZpfKMoXBQNLyDgArnpKC"
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
