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
    "4ZDmY7HYZKPtmfCD71YrYCTEDokTojkKwSdu52f1jQMYV78w5fSZjQDskYofo6bnYef43BmbhDb9xAVED7KKyXL5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YvpY1mVoTGFMHFp66iJXahiAeNxjKRzHK9iB5V4u77Qb2syKvcfYZ4McmMjJ7PK81bPJarztZbaRvyiHCfhYFEj",
  "key1": "2ZwFfLv6qNmnYtVHrpQ4ZNQ7cn9FNEMBf2CpP8beDNoLe2ai67VVHX6Jy1HSeXgrB5uhuuE9tZrD8F2TNeG9cJz4",
  "key2": "5oY8yMbA56ExeQ6u2gbHphTtEYsHdJiQ8SPoBxCoHRvtaGUGocD7X1BE4Hcg2eJKKbzogxusNnMvZU6UwiCdQyra",
  "key3": "48dG7dR3ziaYhL2wmu37ksvxTAEjmiKhEotvvCPK5kBsNn51mTY7oDt63n4gyP3G33xB1idBASJcJ4qkXmJ3upPC",
  "key4": "GNEgpvuJjrEzLwKi7JC24pF4fak9QJMZiFM3LHpUjuJVuQYQKK3Xdu1M7cze3RkWfFu3g7pA1DnjYHTucCDTjw2",
  "key5": "4V9MH7cWJbwRAx4Tu93qkDHC9rYSqovy5g9egvhyBUDMyKi19MU1YtUzi7bkixmc5UJsAFaN89GHQSeYYbcjgaJH",
  "key6": "5W16GRdo5nD6w2uCFWidNydSSuF4Cc5mGD1pFmnrffGPSTJRHMuFN1Hpj645Lmk4CPqNJSiZqvjFfdYq9jWHZunh",
  "key7": "3VZTiSGqemvwNGGtKnvZiPvkSDfMYzknYDnCvjh8SDJmfUi6cKx4X63A3JXZBgS96qtVjriMVM4BxNMoCTg8xgZF",
  "key8": "gWWDouUQPShUGvrFVxkJd1mQpMEFP3K3rs48qhs9p6hvXtNvJt6TqiBUFkmoyZ3PKDeT55mX8CATiuZhWgy8RGT",
  "key9": "3QpXyEEh9eMRWcbCJmJVBneNoS7oPDa86cqmXJcJPThWcKXWEC3ymfddDtHveMoVcUgqqXM4pLMYADniijMeVvEA",
  "key10": "2vLYDrhk7ccE5hDDJZMoEtrCjVVdZFJpdDqsFcepjBP8RMZtPaRFWiX687eEVNxoFkSchcsDGUgynDvwwxHjvYc3",
  "key11": "675jFzS7gi24Ex7HuA5pm5hsdE7RWpBCX2wgMY6WvPy7Ab6kwc5GeQCgZcUUYFAxGjskkKsxB9MeCiMaLah59Dte",
  "key12": "d56aEYY15yCGvKVCWQnqQBVgFMgDvF4HfQEbe7oSJ3ihTWBwAeAhcJCUody5dp96hn9oSdrX7SJzQdRkxxAF3DB",
  "key13": "2YQcC7h2LvTPUyGXeBiywMw5mg2roqp4JZRVpwUN2R7gVbLNCjsyKoqWncmCtxwbdw6YQZ9iMXXYgVXr6Q6bMEHq",
  "key14": "63oUaeUmJRH546uGrPcWj5aPnxqfGogkTP7FmrwHC59V2nbtXnQK7GQscKUs3NWJwB5cNBvapVYLRGtz1kn5kAi9",
  "key15": "3qyxUAbfP3EfFfwHVvEtDJ9zo8k6PTZDTfzy9DoPbKhM2XCRWjW9FXfbvMrCADyP1n9pTa67S2tYpkumVMZims1B",
  "key16": "21BGcoDp3WdgvBoZ5xrAtdQ8GfFM9ddUS7WpDmSw4FVeMs6TFsHk5gwTuchBJ9mXa3GzrFYR8m9tK3GgMgCyEwdL",
  "key17": "4RY2UEKAtkwicH5ArP91PiK4ExBJ2Tz4RyGs3iSN6n77mmHoZGZC8m9s2cnjayrd7eQrKhQMKoCsuHMyFEFf4Kwy",
  "key18": "5iTfqjPDHUEVZvmUw4wxizuusGHZ1HwLRRsWbGJAuzbXTrBp1DYf6uJqNQsmF66TXUonTXWWydBWnT7RYWr4FSPq",
  "key19": "5bZ84eAGRT2GvkDiFc6L2rUxX7qWw2anJS59nDPB3FqSM4p71t5WxbG1gx4xuS7h4h9bEENJq6hHhzaRH6QFmJmZ",
  "key20": "5qC3oTG4YUYX7uE4kv6uQpbJTUH2QAUoqNSE8GvEvjjWZMH8RLo6941nHqwLZ3qy1yGydNV3ZaMwaU7uto1BWJVd",
  "key21": "5vQWqK8fQifSSLyiD4WYrMZPLTZdxiyPVYDzc4EEhe1cjrTBjeASiAMy2zywu27L2d9uvv71v545r3vhSY4gohmn",
  "key22": "AHTssmdnPqBAVFawH9xLq4Gimg789CVMGREc23Dy9FgDdZ1Us2bbLi9mB1xa4moyAChS71i1ARhjc3hhqR13428",
  "key23": "5oLhrFMCio3ZqGSNitqhvBpifqZv3i8hkMovdkhKjbowbfnjoc8xhyzK8hcereA8mjwfMMFgYToDEf3o2tH2XqBd",
  "key24": "2T8ufwdrrTdjrhwMC1UWo3tP3YgkbyvkjqoCjmVUiRNgSd6tgX7GfquLNBdpN9BkYXsKKrreJuaJVqKBu8dQYKhe",
  "key25": "4obFFFTAaB74hmEZCPk93Kwi9pJJzqmXckHK8c3GrJh5LF4k16RQdZKZfQc1JguYhdn3UK31iGqcN7KFjfx5nYBP"
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
