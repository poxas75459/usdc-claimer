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
    "2g4Np4FQwuvoMteao8Y7Tb82doEAhKc8rnnnKmGPDmCAah8cM28c9KmbkU777YpcD3kQFQRzjjgBY14MkVnQRjGt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K1iDGanPbGZbtJ6X86vfwp6s9cHQ9235HgUj8RkgVNgAAcAsiptroCwfNkKifY4KPVG872hTYxSPGSqdkP7Afk5",
  "key1": "2YJrtRvXZrij28C9bJBQs6pcvnyghdMz367DUGBv7FoisDz2c7uv35eTM928xnRwgWRkWhJvLDST4HAA6gTFTCQ7",
  "key2": "4mWk6jLRiV5WiyEgSpsALSTam1ssTscemjG4epdjsYf8MRVrh8WP9S3CcYf4hZBn2qiATZ1b3C1ecRGbhAtsscnt",
  "key3": "3dRzZAwQkXa4q5nhb7GcHoTJ5dxc8UBPEuABtKK4qa3WKj297pwMKVa8mTnJvK5B6JjD6h6TEikiZWv5Kz4oDmym",
  "key4": "366pSry6FVgJ59Ay7CY5o4SG6exCBKV1rQ3wncpGnANm4hzkyaxco8grtt3WtPFPem8MsW3sasLfScB85XeGBtcU",
  "key5": "QNWwsy8UTAYBCGMrw5FXR39pAQ3WRWSCKeZkn6D4JJGkG3VroZs2wQLjaCY2U2CNfgbedahYPfCaQDTBHb2T6iD",
  "key6": "51rc15TzvmSQmrNJUN3DeDfooRQjLZfGL28Y5ot753YN5PPqcUALqRKpMccDr4dwQMotWgeeULQFUgSBkofY7RHc",
  "key7": "5kRAH8YXEu2uhSWcVan3tL498ujEPNRV9ZeJco4ENsiDyiStMUas9WyobogZWsNYMatHVe9QQ5iSpBxyYd64JCfd",
  "key8": "2HfbN9iuYd9sQqMaLcb1nex3ho7orsaCN8z2XbBL6LXNULjjJiRD9kqqucFkWnJkLw3iZPcQA2Xr3rbnRdoJKRgG",
  "key9": "3bQrupSRSXtBqVCacjYpsVEuEbnzreWFyn8n8KhcSzcTMDp8jyCZB3ghd8Ng8fV7TRhd8a9KLthCwuvA8hBrbKH4",
  "key10": "58j2Sbvd4UgbYJ3MZaufAvSkgXQhRvoqzFQuknxstn4BPBpihkACLQB2QHfTqobXKusLJ4PT9EfHoXqoEgVzn19L",
  "key11": "5dzbYEjfLnKoyhMJMaL7ar4j8ZiuRohK7KzKsyboVEWaUW231usA7jTQ2QPnajuXu8JvTXEeGkiy6qKDnhazQF1q",
  "key12": "5SxhyJgBacymvwCVUesvnj7dMC3y9mim5efKzf5cX7uHyzTsHQ8wn1TJ5QYB1JoWf9d9vwQFfq85EDhXSULAnypM",
  "key13": "35RQMAkaQUySMaVdu8A4pfS4kQUmmDNKQTqrWZx59Q6MCpRMQvm3NJ34QjJjghsJitRvBv8RpGe52GQ7qYix5qo2",
  "key14": "3hC7RjxAZHrvSHJvtv4mFN1ZHsRCqxniAdCJFj6KpjhPdsaTg1rxay5CWrRc7Y3jCrbgXUSrq2NMUrSkggBGAHdr",
  "key15": "2tQfUmMZa5hEgRAbkvydMG4DZzmRy1TzpDpKAtaaRfdEwwHcsaYyibddh7mYzHE4Cpgq7pu8x8uNSobXidTh9oze",
  "key16": "2pHodSQnxngeAVxt9vub8t9cpHK7QkuUSLyqBYkjR2L2LKRvj88dWQ9KXhRCgnXnnjpTSpZ7X9EhRPTh8Zypvtcc",
  "key17": "3ZkWdWT45DCEPPAaSf8VSyJLdRWCFNoT5cTQdyxfeLcxqWPxTg5SZKGSS8LRLrEfJKDCWSQ1Aq4i9nPfhW8MKRM",
  "key18": "4sRAwFTv8po1Me6eNEVbLCZ6hUdaCJT9TSXAscDosCeLRQvbxK13tMNk7A5m7dC92JKPVRVjVagwbNcutku47xSu",
  "key19": "TUjAbAuFyPocsfyXjxdjwdmDh99dWDLDGUg3FcRCGYiFDCyFgTm2e3g25y8Ew7ALKxyUMpDddAS2MaxHUFyp37V",
  "key20": "45WcZ7h4RMFFzj4DnRKY6A7nDkuiwBAQEvMMkbeTSSdLu5EhyUuUMKJTZiDhap5fUN8JYhGd7CHSDJirsKJQ5t7C",
  "key21": "jjb13p3zJssLk4ZytMBYuDcFJXsmVLLDgw7kwnrfWoQpHgR6AvgptZ6PJDCbLE3xCD32YREXkkUud3cPt2eQRip",
  "key22": "3Q7xFFSNVUqDdUwWhrb3HuqyY6QaKB6LvnorTve4UeN3khRbJfGkh7KxmFnRdjzzrWBUtM1Ct8FA3L4dD7rXKt2q",
  "key23": "5F1dFUbXrEgvA1ts1n9M9Ynh3dbLuLdvZiiRrNMrxyER6NVUcVahJUzUfqmbRhShN6khPo7W85kFREfHUBicCK9w",
  "key24": "4FJBXaEHvDw8gGwTKgBdBbPBGaFtwAT8xacPzmZHygSEm9o1T9E2tdUpZTyKmjU6sCYxa1c8UfFkH7SPriNXzFSw",
  "key25": "2uionHmU2SzokJK9UaKTGqjaduPht18BdfoDim2tFENXnwpibdWNFhkDNCzWwmz7RHZK5oi1NjhhQUJxLoky8qnd"
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
