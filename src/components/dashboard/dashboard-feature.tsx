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
    "nKyHohNGvCyFdPZVxgEdQpWbzh6XgE51TPyQTQtg4k1f9HFH9A7RpBYwnYE1w7EXrZzK2GkeX4He78wQtH4TaEe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eo6Vx24MWaZhfsqBdGMqbb3hS7NZzR5PjEEJ4jQv9VCgAXT5Qkmn2yPbSyK1zwZAyAARWmeX7x13tX5thVp5FsQ",
  "key1": "XnC3n3RnFVBGfHBFmA1GMnBDq9o64pHw3uuw3MMn9CGdZysTbqGty6F7pV19dEJMYgnn5JQDW7qAtcibipoTVFg",
  "key2": "BTZv3YD2edigYkxusaWQsK534Xi1pCsoDXKx54wh8szZXU2vsfEEYWJXckM2Pum664tR7H9AP7aMssFWLi2oY4W",
  "key3": "339YZMUNeGZBVamRUQAaGAmdmv43rhbAjeB5ADVCLRDNtMWV6ZRw5etm3A2WePrb88XxHq96eFijymRdZ7QGzhah",
  "key4": "2JhvhWVt8unRqf1pvVokRTAWrXTCJQ6mnLVphRzbhzpZcDZaLACT7F67uN1LmgYgJbHwmJY1ouErJbrjUqZMH4V2",
  "key5": "LZJYUMHKN7RpCu9wJo3T5sn3U1iujCAXrs4b2w8xKDgZG2cZfnBTFWwcS9eqETt8tFwkVp7BceTnEytWfoa1ztk",
  "key6": "2YuSYNrfBhZ79W5e2bQUMLynxKPxA5CcX5Bba5GsDa5nKYjv6a5JsXLcjvsoT4gHfUs7wU8zhvr1GJRjsmtrHvyH",
  "key7": "9ds4Md1jg1We1Zshxv1Ysp6wPAQePChbBApNgaQbgUaY7hbLMJbAJN49cQ9a6XW7q974oQAh9B3tLk9t65Y7h5b",
  "key8": "NXKjBvUgohJYjqvfB1SorKXvZpFgWaphHScXhPGTVnxB45p3Ce4KUehP9j8Ztshi17dLKytVp6g5mtp24y5kqPt",
  "key9": "3itQ6RrGZqtHXY7nbjDxRgydviYZvDtcZfhTmqh87xAzSgV3X5VcJyGeR6Ja8DMfjmDqahxaS8trVstNMgPD9MkB",
  "key10": "4EuevMdoC6g4wiCKahWzgGjoyckL4bJwwjj1vQzr5638jXoQZkoqArWgLsikNWk1R9RLLsR1QH2jfakv7hQb3wYo",
  "key11": "4nici6owBnqT9UEgJSk5tFY6ZUDfnXU4pmaih346iF71VJDxtCNLQpFzx3jWcwKkEaFjUDRfidGsPeQs9Sx2Xw5V",
  "key12": "5UCtwmuk92AntGVUVvhLPzAhtrqXSzwSpEgU37RCZoQCTMB8P92TUQKTbc8HacN3t2wJvtnTQP3zZ67jqxsAvhmY",
  "key13": "4P3yyXqw1S2PSw2D9Jgo41qa5jaXGTWM7TgrYBqUcrUdQo25rEAqSTgwLetdrvR9BJMMDPP1Fq55rvCtY9FdwHVv",
  "key14": "55nmkzmAxfsP9pfqodrhfEmqLsjeBSBXPSBdJpb7Y7JmbGLiJHxsUnQUdbMh27p39MqUhtDa1L6JbhJSSAyz7aGG",
  "key15": "iSQxKRc3iZwaeCkYV7y75nBCjD4mPyqr9yPbyRRMUHXnNgoxgKPM4pMRDW2sZGoCEoSoQkNvJt34swBWGMGU7xR",
  "key16": "51FzJiR8HSs45W6QS2cdQzw9kcfPnciYRbMDisnvxEEVUEajbWu1av5cxSLnpUr5cyAKhHSADCZZds4tiAUCXYS8",
  "key17": "293CdckAaEpM9n4AoNxgmNursLjkCxzM5JV5dhWjjUYJHDM7nB11g5nMo2Q8dipewZQg5CxJSuPMCHLZpEsjpCj6",
  "key18": "53U5eLv3WcJuEWpKNCmPBtWGFaDK3CiBQAwQepK4HRJtdo2SMqCUQfFDLKMxu58W5eH2bbWq1TbvKwbYD4Dfc6oA",
  "key19": "FdYfpuCoVbjSRxBJfPtxjXU2CPiTogitYhmkCzK1Zhz5qh812JpzRn2YPbgBxonUcgrvXxkcWYJUtpRKsDqL9UU",
  "key20": "3UghESAEsDvdf4tcfSp5hu4QY1qcHXTfvwEMNZjkjRiyiqWurocpELomWzXGYDk9T6fQXiJgU3RB5iP3ALbHaXp6",
  "key21": "551o1n5bfACPWZqZyWdHQ41wPMiCKc8ZGahCidTNZhREGb4JEKaxfPj6ctpj84zL4bzXrPdSZegZAUANkkuCtYdw",
  "key22": "3XtXBruUimuLV9y4QHpJHZEy3AciVrBA1kA3Neu7pF4mf6kXioDyqqpb8sVHNLFV7JKSE583CeaUcEHJGq6P5F6e",
  "key23": "3Ze7WkqdW2C92dvAPTmJzbUEZHh2B5ecqDdAAcYUEizg6SLTH4azDa2sHFqh63cexZJ7p1QvETneWCsQ6Zo2AuCo",
  "key24": "3aLVRffE7peR3aTYsU1XBaDkbJ3bFYa7bqWtba74bLJSpci2aFki62iqsHFZTJXc4Re5cuFHnAXwi8WsNTitGBnc",
  "key25": "64iKJatrd4o4FEwmMiXdCwMWW8CtXjrzZTNDccvAnAKvR7pFPo8UaYTgXjSCsXHWZ3hcNdSwLksJ4GEQ7pKNVQPx",
  "key26": "2LEmYpdd4sKzMrTvNAh9EMuMkx3ukvATYuzMb5qqNNntLjnZ6BiXoAgEXGkKvxHa6nuDRsSa9eLR8FNddJ6vHTwh",
  "key27": "4H58qyY4PXhdjZgy4xbGFkhQPCRc55FPi4amxrqpJeJkRy2tUfCRuSgUuThoxm2cKbsWHXNSTPP9rWmg4cvbs4rJ",
  "key28": "KMsFpusqqPWANP4ZFqT3g2Rv13h7GrW22rXqb8Use4U1LKVXK9iwca6X592Kgxkv11etHCqx5kzTuitsgpScC9A",
  "key29": "36L9iTyWv8f6A5y3Db1dYYe5rTk5ymnqdGYvUNPFjgG92berPkWbXDPd1vkRrLyUGTevHFDpLNqX1HMN3a35rSE1",
  "key30": "3uGmiEgM5BSkstNV5SdzocEirSwBEM5x8pGnxtEqSeMh7LERfNYFi6yj8jHB3HPpmgQgKsr6JoU3gx4nfLsULwu3",
  "key31": "4KuznzEqjGeqMbZXtyCQdqRWcgw7RjhpXtBqcxeGir5P5s6FS7FtNxhJcsppH8cz6vyzjrH7fqdHz6isXydcqyxM",
  "key32": "2p9DEAZAbJj1hkvjAcgp4RHiCaNyQD8yesbGDgZ1fkpouRn3488Hm6BzyawckQqSkahRVFg1FLbao9Di9spoiDqf",
  "key33": "4GaqygnY25v4AcYbrdFAi9qdBrUjvujZWMJKdYKr6a6gi3bEwGGVn5wKRerdyxPZU7zgnxVbnwwUUTdhrG75RG6u",
  "key34": "5bE7ap2wVn2KHGCdzhSdbnB281a9otu9rWwZMJK5mpkN79dCDPjg8Hoy4v1VQyNDzCUnSgXc695SfffJ8hiP4RsB",
  "key35": "4LK5xfuhM6NW1hTrMxK1r5emwXCHFnGigzzAkgKZajUUuTDSs5ZDVmuqWcUWj9aJ19XzVdwXpKsrycRKncMdTqBp",
  "key36": "3ZTsbbyGQpgqaDkHamYnXeXYSzdmYWJ7HQYGDDZ6m7JabdN1PhAd3e4swXD35iJhBucgCeQqkQbQuiacL5zJipLE",
  "key37": "47AGcz4oPuGZDS1eCs5pJgK9KLGmmRXomp8UhwPSAA3ZxqDJCrNhapTTCb5VHegtmYeohrPrZH91hBzMDDEDric8",
  "key38": "4ik1rMcWoauZy2kQ3fiRvWQhqanevyjF7B1S5qmJ6Pj8eHKCieTeUUPS7Gnc8jkii38PQeuK2rUatCENfrGi7E1F",
  "key39": "ZJzBoC6U3XKq5YA5nZEDGVzLzUs8AE9s2VWUC3fCgufXCDQC3cqpi1TxXkNPQL3MWEVe98p62JsmNYqzU5nMf2v"
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
