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
    "vX7LPHPT2FuLRJm9WWkTfJKTeHBfVAi9EXu19tVpa2KmCDgmGUv55wjcMjDJVnkisLN2mBQQBJrZwWpQxtyCy68"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AonCKFbEDsxj8GKS1dwESaWfsQXKUsub57h3w2LizibYrkBJbL8zjFi9fHnWNpqG3U5sQT54QLXmuCRsTJGa3S4",
  "key1": "3BtSUSm9W4S9mtthVrcuYwHKS12y3JXuxpsUdKauSeT5EkMzPYDkrYgumpxHwYqXPNgU1vFBZKjdd4fQWqQmPCDP",
  "key2": "59KGFbPJHHFdrNKVTDppv8ToQWSSawLPF3hjZQYkzGqdRRa4716R648UMVxbGvMDCRvu74DC6mtV3AYdAqMMtpnX",
  "key3": "4rHojfMuyvUaeG8o3rRtdZkCQTehAETcfN2QZW3LDoG6pWzUxZNTLRxXrf1GJG4XK4s94rraiRPmNGPh5gazLauQ",
  "key4": "2gaPEKAgtaCiAF44mUrECGjXdf5smgfGD25mKBroonkaB5A54s7j5TH5XxemFU9kvZyuHoVtexwjRFbYuZwwMezy",
  "key5": "QuhpAdzS7RVL5saMSvQxv695ddoZzVyVvnxirfBaFjxrD4m8XwSS29ntDgZDqAvWaL33LrfUNDmRxbiGnxhpNyB",
  "key6": "KnL2ShTp7xJFgRWcYathRg3ho1L59d7ku9EnA8YnATacvZVeXyQHsoZrXRL16ELXdUECwjKqCTVko8GQYKAc9Ld",
  "key7": "31V46PrvWfJKATbRaococTagbwirHaE8rgdZNPQyw3mi2gmpdKRJ2tecQLboFZkAss9Rkj1h6s2oFivEw6LR5Y7H",
  "key8": "31YFa9VFeSvjg8TTQ82Xbz8bLxKjiv1EQVk9h8yD5nWqkcgKPKvSuvk618ADu9XXxpLUpBPYDeCzN4xagAbEYJbv",
  "key9": "5vzVMKMTYCDdac8JUya8THFFJxkUjMVz2URpfDYCFaY5vdu68dRNNu4EgK95mPZim6TiLJn8qair5RUPJDXyvkCY",
  "key10": "4tgqGwQsRZK26hJ21MnSS2zc2NmakLaRZfDGfiQxigPo3zhdZGkyHMHPyiRw1jCPrzLyNpqhCsz4UbABPd6Zz9uv",
  "key11": "4GZPE3LuD12EnZdkyZ2QNhRcPPirfvjQvNhT9pCby5LZdgSQ8kmKXamdYYTPgKgjvo8YZWEsfaxRr57i9qrRJgoT",
  "key12": "4DLXEG1RBudUJfZZG6YBDiwHf39dUZiBSBD3Y7y4jnfAD5rF2hevzHapyNFnDwxJiFLK6fUJKwttnkWdv9XSttaA",
  "key13": "3Wjuy5LcEe7X6u2Bhn8kTWaTorYHabGoBVHY9gTkFFXpy5JX8r3sQ73VEGfYTZztqLwbz8at4g3tx6UPxwVxfK5e",
  "key14": "4rs1tBaqLESgK1nNcjPodSXPPh17tXpQpdCSGGbKB8FiW1XaKd5K9q6bdiiLP4a35wkggrAFWxTV1MoZSgBopFBq",
  "key15": "4pGn5YCG3Neiftv1cN8SoqQiXN4ZTpwESk4qhgbv2oh2CRJ4TU4RChEw1M1eMy4mzHcXxXGHN4J57CTgc1VuPEE3",
  "key16": "4omMotuEjb2JDk45yEAHt5DcaD2CkTa9eMC4bBt5UEuZBvP6AGwm6zvpb6KKfC1S6NWScYpWLGs47VTwc1hVVrhU",
  "key17": "3WUyK46K7nxEUnz97sqiZUMApASTJo1xVbZMv9ZDMfV4WWLochYk1wF2vvjeQJjw6Dc6RD2sP69Y6zW9hDKPvM5f",
  "key18": "3ZYiV4gXGZruN1XYAL63rU9w1D8hSYx55K7zEwBSr3LvinooGWiXTVSkPpiBBqA6BP2b4wQbuNQwpNfWhwwvqXjv",
  "key19": "5m8i2SDHiy7S2URhcpQewjeZFpG1HXwjDB1G1rQaiW3XFpkLyWXBggQmsVWtPFMPaWGsPdwRHDhm1dmfv2vsP8yG",
  "key20": "3RG8urFH7EcRSYiFxs9BSRuVQuTkjQ1UmHZg7syKWjPQaHiKVYxK32Uqo6oCF9B7uk7DU8abosFeCwViqpkN9M3G",
  "key21": "2TQGxhcBDdSK5d7aRyELmKuR6DFZ1GwWQCiYLVmefP2PQck3djqXVSXCdLXScjvyEpEBvibkGoqbwecm1XFqXi6o",
  "key22": "4pXamLCJ5gpsi9Vh1FWo1TkGvMxCVLgvAqzeC8ND52zTrnSbexbrXCfAuATqd54EDyuUBjTyxNPfKthgmVpQ25Vw",
  "key23": "7uunfQok4hrCSTWTmbtrVCSNkLGcW8Q4ygEoe57SjvnoMYWFmSBXn6H2eeMUH8rqjo694NqBLfPLpaS8yLNixBP",
  "key24": "4k6MrnVbKNRQcvZ7eejuL8CaG5LURjaZyMyVnGCfVBsWNh2UDpNYN5xL8rQfSECQsVi4inmV7Q62uSgFqKhHobUS"
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
