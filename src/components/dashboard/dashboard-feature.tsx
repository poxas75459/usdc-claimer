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
    "45SbXBHRTR3JARm2vnePLeQNCxaKHxoy9p8hobFGiFAPYyVNgs1fokwuhk29PqGumKdGqnXRpERf29AXg38qhqc7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a7vawtBqTurmv9wMSAC78aG4FBDSxv6DW3sP1ASqR2tMWECQyo8JFB7W9H6bknFiRFQDbWH1E32wk5RHMonubyS",
  "key1": "5G6yzM9jrt4GnfTUF71qb3FsWfVR2c4gDZcr8cKQZLU6XZEvhstgNNFwmADP5BiHPAEustYbXf8pNS55bx6LQSHr",
  "key2": "wkn761t4gnuzjtVQP86YmFKDjNXjAQbdNQnNp3wCWdCt13qXCCtchW9KLNLH8yxHtVGZ58NzPDkasxKRyMdxZMh",
  "key3": "26VvycP9oXWJ2uFZhXQ9pECp7a1FmucCVCXFzm1CGanJVdpxxcdvnHsTX9ZfokZ4Xqr2VWYbibiudNUwnn2G8uBP",
  "key4": "54i27cBJxv8AtE9BPty7sVmokmoMsGAce4Ko1dAAmLgaL4zsXzWcxnYf2tQ5fZjcC5RW7jBUn2v3bGzLYddZGkTF",
  "key5": "5LG1ce6yQ8nDjD4eaU9tvrLa1NsJZEM4gV5Wab2rMZg3tzcwgiuD4cFrpXTLKdvFjCyg7oWX4DHvNq6YnYwA6oit",
  "key6": "2r6wZHgVFAe7TD1zffKxzeciHeU6RNuKL3uFNcE9sfp2PMWy2g5SRAkbYS9eiK4gHg29NNEPXzYwSa3fDkcb7aRc",
  "key7": "3vCN88iZ3fdJ7rKyMx1Xt76XAeY3no7sbYR2x5JGfVzUb4qgpgLohiNuL53SLpsD4jN4mAAcpEfWRsUruuR5vctd",
  "key8": "PhXu8m6Ma3jCjJE45kspUwCBF9bMZgnRYgqT13yWynpQEUQwLx43ZHMMQHAaz5Hm8HkKkB5HrYuvbAqZs8RLKMU",
  "key9": "4HV1oLy1Q5Yyfs9PCxT83SjsPRw3FZ8q5jM7o6PBhvunTgADUbERoeJfixAKpyixMZEdnNeMPbzkPv88c2oReWVZ",
  "key10": "5ikcbntT7WbWtbiM3um3UZHzfJGZzM2m4o8SLxxMDmeaZcxcFnJPUE9sdgGW8KStw8FqkLpMArF9EPiCZh9kAXo3",
  "key11": "2YUpWKsKgmgjgkf7jnBWfvBxcF8FFpEG3BduYZmiR85AnbUvsGSnrLhuLG8XZmGnabYnpEyxH9a8KERvfGaJLocD",
  "key12": "5uEFJR9yRHp9Eri6dQe8PcH34BzSgUP9Eziw8DzkY1wfHYfQ2V9SmaMbpPVipfhzg1CPsq4cWPk1wWiQY4Jm1Yh1",
  "key13": "66vw3HuFCpYDQSxMiPc193Za71ZBVDVVZPBjovz55jzGJufiR3KVajap3A4NK4d2VxBsSEe5Ea9ow4mSMuJCLpGA",
  "key14": "44UZTaaBjY5mcBbB58WspVAjQAQt4uzyWq9bCkpoBdT5Jw24zeijvC6vNXrViqyTtnkHwvYeVVx3NRa1uxLEc637",
  "key15": "gwW1yVKm8rapCBprddCxg9p8WZDKCYmqo8esZNFR8mVTF3eyRBhgBp4jRDpT2fdaydpEeJiZo8Z1FFxwijboxeq",
  "key16": "61PhQkuZvAk3ZmTB8eo4m8hCvj3pf1zAQMpDfu5Z48VPbAoiN4n2dPC5xXGZnZv4WiCNn245xjZ8tWozCWGELm29",
  "key17": "3A91Srcp3Pky6r9xHy5zzjQtUauNubW1d1LZVbnfU7pPcYRxLhhxzaqzXNSJqo1VzqVeZsCRPFVBreFqCous7SD3",
  "key18": "3pyYC3RWnWbu9Sd9WpoS8ffHD83pLVGF2LkDzoGXATtvpC6PQrxq7v9M7XeqUZSxsrdseDQKDA7swE5zgH9mAAdy",
  "key19": "2LQTvmnbQDtTLmgdzVzbnScZd1J1svzriZnzfNrYytF7dbx7tvEw67hdbwZ5Gzt1uXbCpNCdknirkBxYwy2R1PR3",
  "key20": "5vGzfoKRyWLcKEfs8Kona1Q1cMFZ4KxfkshByvevDDQFfFfTJgkFMVB8be9Jum6S1UFXV8EM4Bj1FS23kqBjA74Z",
  "key21": "4Jn9Zci6QdajN9djkakYa7xFUREvXKK7FNtgGgnqv63ZkNe8GfcP1xtdfNVTjMB5UN3e8W3L5ggmCh65KHt21uJq",
  "key22": "4hcf2UcJNCFaDv5wNUXHycL6F4rYXA7zZRLioBJPhRCUer6bpopAPSfv2oaFVcshARebp8rSFQksS4tCWxXzerjP",
  "key23": "2nUdKRWFQX6cNbg7FMoKhgvu3mjeGoioVGani6Gop4FW9CieQSMV1B2mBrXNC3u2Vwr2gTQmFa1QCDP4TZHqK1cc",
  "key24": "54Gm2h54TfJQCenwbGHqp5kZqaSvBunCSpTfBq2QH9pQL8KF3VfxDJqeZhgbUpPHyhKgd7ji8fQBP6b539DJTqNk",
  "key25": "Kce3TPxqMxch4eQQ6xd34H2X3psHpmRjD8HAdga7LvfgN2T7FZm7kBJnND1ugDHohxCqmGsUDQ7PoPT2S46yTbS",
  "key26": "5fD288EQfX26mH3GbDfigWJjNQG5PuWzuLH3sUoJioyDMi7fKhvpeebXaNUvVXmMMLeXcmUt6pTYCQDLGRU461ms",
  "key27": "Abvz6VLi7bucvMoPmCUUQwt7TqPTSZcZRgkWG71R3gXpoAb376MkbrYG9Vxidi65zdbxFaN1Z3mp3iNXtr2rCiF",
  "key28": "26r7PQNKwATUiiRUnhAsH5A8oRyEsz9gM6jHTdFe3c5kCfneU8FWDvWbkPam1ikRubxqEupMz85U8AghmHo3bD86",
  "key29": "54kVhYtJxiW3PNQmWTWUg5qJ9ehj6ukj1LLggpEuc5A5oUL8z9p8vQ2TjLZG6jT8KMuRRPXaFW9q2w1LtXxjsMaT",
  "key30": "34mv8ZYtHhoB8eXt1WNXUNBE6ERdJqnq45WE5Mf9yiyzaeqmBv5VXeuFod4S8h1Bk7Dw6x9aKDgEMikRgaHyEzkK",
  "key31": "3wLgmvEbN2GtZJUMGXVZSr3HNTvfTE2SCt65gbephSu8SKvaKFjiJZoMce89HgTF5Xpb7LcFgF51ZC1VPg2JB3px",
  "key32": "wqhpPcPNyRJdJvjSGvPDBsgjHV4X2UZcWGBZzno8eDRBgJDo7q3DWSkM263zdEPMB61xK4VpnFYopyg84vLfxAg",
  "key33": "61GPeQ6BNhpqGn915NyXhwQoSa3qzgCsYKnAxxmEcndNjRYtYyy1JJRTr3FHAr3M4RMyCxLbBAwQAo4JgpuXLobd"
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
