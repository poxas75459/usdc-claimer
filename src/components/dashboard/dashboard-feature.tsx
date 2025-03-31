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
    "yTpYJoiRsUa43RwzjvacTNBXMEXAcr49Vj1HtH5LbXUDLuY7XCfybnxSZnZGejMTeEFxhJofzx1trCjDDsPw5D6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wSmggaj54s315JWfhHkTdMdZHnMtvCkCT5WHQPf9GezhdMHi7GguS1QsRKAbpHNAEUzhJ6TrdUSbK5ii4Xq9NWi",
  "key1": "4uxS8qd7NGZyLqJoN6i5tzs5NdGyHRr9RodDQzNRhsNSm1esHENCr5WAaYx4D3Fq8McgWyRGqD6xv1XCf9ZVg2NG",
  "key2": "23SdMwhqGY2HZcmhRMBcH4bucan2jhEyiNEZABToNQDup7nCh3d7JDnbC1qt232REGmwceYQMJSxmpMAQxhh5fsE",
  "key3": "5SYskow4TTj3Mq3ATC6tvVp6QVWxoPR6h84f4gyymzE8f2ALwM471gcNJ3RZzEs95Dw38CH4JQhoAhCgJWkvKj4T",
  "key4": "5hxY4iRdBfmLuhw7AfhURxTfJQQvChJRwme8EfckXmxYC16aRAhDCNv9SPSqYZtfBsRUZbgUbyNggZ5jrwG2VtJQ",
  "key5": "4FbXc74qVkwf8SwTKDTP6be8EaaPASWrzAGc5wsZgbsE4EjQ4nBAPMN5Pyz2zmQfnhBD393LRJEuondeDuDd2Ww9",
  "key6": "5QESLyT1JeRCWsUmivtBVybPrsG4zBgiu3kBtPuPKxG4tAEmmamq4m5D4kjTo1BmjUttkXgfWwi1iAbsrkzZ7eie",
  "key7": "4G7nSYyvpC85FAJNS69voF9jLbBUS5qDqGQKQQPMvzcoPoXKBLJGNwdUk1z7mjeHyr139AzEfeBBvGdXHA1oBMbq",
  "key8": "bKkk2xphFsYrN7kajKr1JGZVfG8im9EDU5Vc7nv6UcszdmtFH9JKkRAnv1oRMcTfaooNVLm43b7qAp8YSHjTPcz",
  "key9": "5Cb5mhcRKXLPZXsS5FfRmZNDdZ25j42ZukLHQFQoGRYnEwLrfT5Ci8ABhHCZ8wSx17XU5d5wTAr2i1W42rLy6XJk",
  "key10": "5yxcjczLdGdP1hNtNEodVkfQACHx2DwKxvpnW6UAF9BhGbyxqAr9CjBDsW7ZqLFYvzP4zb1fzTVnbrUm5Wj4dPKH",
  "key11": "55cVhfDWiALwjh3qgZTYZx5Qcqs5Ub2iWrpFNoxRhfERxBisVSDDrPHr7MzdHLtqAVfuGCW9Yv3nfjNuwPZGobui",
  "key12": "246NwL3EPhMHNLZY2nmoUAD2LAqE4YavGs2AR2HJJzefE7SgpQCEh2Pvip712XqJYzTDZS1HJt97LD3wZqbJGt6A",
  "key13": "2UfEn8cUHA7D2MtXTScS9rdZA6rNVvDXodkQUxcDtJ8uh9VPZDAQPgejE1rBThWUzgWGgPUbqm8T5ZPUKv99FRrR",
  "key14": "4H3BcsQT5TuYfSeXAynqgS4LaRaezvqb2LaQfGF1U5PoUi4DCZpAerR4Lw7HpadvDZeZoACZfbd9jqaVMTX7fm2q",
  "key15": "4EizXGD7Rfmz4rjHedLG8mxZnvf91MeKzg4KxnsWdW9YAJUJKLQDqPtrz5YJrDkpNk1eGWS9ADLLi9VmaxSvkkzc",
  "key16": "4NWhL6XkjMNirsoHWmHKm7bh71dpMG4VGbZEehYGmHKkWs5r8FXJY52F4We5eVXorQ8nKvyfbXjpcwA8L7VaWifj",
  "key17": "2AiXD8jttbfhzHQFQ73iEQ6cNF3Qt4QMqNh6i5keBNpqjgGCHo3G2dAeJYccdvjTWM682qvZq53C51WkFGijapxP",
  "key18": "kP8vWC1TTpzovhwPGU1cBWnG6pq8bZ3NSpb7i4D4x6P5GHFPMCEFi5RjxzWdwobQoWaMKvy6ctAhEvdD1MHew66",
  "key19": "nYiKp7Aw6Up3YHdZuo6uY5YYjkQNZ3zk57WjMdBKmAZB4oHFSWkLdpTr2Jjrr6HSTajzmqXW68BeHok5ixZ7Vvx",
  "key20": "Mt2LaQRKsKoGfyJhbQ3X5Czcr3Pv2msN68mF7DcbT8x4yTzNjt5nSwcm1xYMBjgesX86fFRGVBB18ydUvxKPMqD",
  "key21": "4ofKojgiTrUQNwXtHNj7n4Xxno2t8k9FTWkLuirn6yQS3aH2UgUMPKku6kdb7yddZA2mLDdRkv2HCTrgUGX1G8xc",
  "key22": "23MGf2vkJ4mYthQLy1ygmfxaLH8oVbwkC4bfBSAfM6hkjWZQ9nqzUeyvv7MXQeYoR5VNw6bptZ1BD8L33jzFCVZi",
  "key23": "EUmtULnd7o9N2PTbRhHKYUpFHzgxb72S5YYGJtVPfkVE6vdYvhiqRRFnwgJwFcNjFg1DguPLR2uPYLcAF2N1tBU",
  "key24": "sND78igdiQGec7aMPAtp1TRag11H3L4owFcBXq7QBW1yMopbbYxoBm7j9y1SctV42KiVYzQL7ZqH63kWHDeBsWn",
  "key25": "3r8ZxwcAqqSghXNNoazQs5fjyGeKvkhxhzL1voptQ4i48UnW5FhQ1igL15nSpgx5sQ6m7N553Sb83Vx9qn7KXXc5"
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
