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
    "5CMgkaABgRBh6dL8WNPLgPnhWV1qraQEikeSpqWUm8kR3xrpePTg9f5oAjeQRU5FMLTT3WZPFGainPsZrrKjpGxv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SQ9UohNphSrYnajx7Mi59RUTipEDkDZzEsRmmbZGQNouTmErDsGPHxfHFhpmtRy46pouE237V9mYMtvVperJ4cJ",
  "key1": "vZDzoiidsQv2PiebJwVWXKkhwSPWWX3U37Y8LppSpsxoRL257r3yo5cQMNSWMoYpZrGWGjLxhSb8T3RAnPWonSu",
  "key2": "3ShxPr7xtiajyoR9n8YC4YGXa537Hc5TRzrW6gJ39KZKP7GLEbdrYiGFir1vdHKLsTGsiaA77XheUVbD69QU2k1z",
  "key3": "66bbWChVGzuAhBidanuPceuiGPPqfwCx2LXWwazLnkwiREgVQ8HqwFG2MZBo2dvQWUEiR29Xtrk9eieRfu6GRzWu",
  "key4": "4uZBrtWvZvU9L6duPHZYihNrSKr2r7AN8TmSktLBQfBvwtBxJUVRENnb1PCtgMUHJmQ2m9hmoyRgA2NP1vk9XmaU",
  "key5": "3Mx3qNMBNXscbZAucBqwyJP3QYS7q3mzZe3A5EJHfwZ3bV2VDv8zyUskcdmKBhuhtodYJwjgePivna5DWSRHsVZD",
  "key6": "3i3nwFbiUx2Ur9hzrfx9TbTszE498bGdvpe4sAKcSq7d46ytBYd7wrqeUwEcabyVhP9co5VsQ3YSGdpvYW17tcQd",
  "key7": "3pYvqYVW698xJL6QkVp7pT8WwsR3pX1RQPWsRhP4zQAVfD2HgbHtj26nHayZPd8iUsCfatQ4ZiE51q2XUn6UkHTH",
  "key8": "41Kd8mpceBcH4ie8aFFE4q6hf1z2B93aHPmthqtiE5eotBcWoELg4rRowRxCh3xhFbsfBnBzsmVZCrfVxQDvx3k",
  "key9": "3mNvayddVYmg9unCh4FpUEk3DWhqXdt41faZz4P9yUjsN4yaKK1TjT4pdnkCabC1D62MM85jfHc7RGcbgKV1Fkvc",
  "key10": "3Qkgp9j3imJocmo6gcLjhiCaBRm5KmqmMaAgSF3K5Gn2QgAv3E8gmrruF46NbFsgKrpXPWjzeRyK3LXPS5u6nQDP",
  "key11": "4WDJ3kEoi2Nn3ZPTQz3GSg58HtqY7e1Vh5p3RUHLzaNQXMprVvshDtHts1wLCTRPacSn3MEKpY8A235DmE3fixTx",
  "key12": "5QcxvyMLLJ5EmJDSNVqCTxnQYV7yc8hVEKTBtq6CPHGF1gWb1yiiqqdVFcTd4kKePgvKv6oHVtpLyyVa5x97FiPw",
  "key13": "5SxbMXfPZhNMHSKk7i7EAu7swRLk7VEvpnDGkjNZZKKv4CD4hyXggN3v1ZXFe2i4Uj4ZT6P4UZtUBtcJK6hAwAf4",
  "key14": "5CxzueJ5H453qdv8sqeiZErnuWPwUPpA5QCoM4WTgcfKrdcX2nGMMb73RYtwZtdcaZ9KCHNQypqrQvoKrta68YvZ",
  "key15": "Bvn6aaNBbNfYVWdcCBWnNwydfLH4VMGqjPB9EAeDrBvu8yF3M239Bgdj4wYewigqMbwqNQNVPQ4uVsVaw9dMVfN",
  "key16": "2rEmmsqBwtG7niMkw7eUg6R9XmuMRLd1j3YTXabW39Gt4DRR3FF5pSDzvriNs5AuGz22hTHR2U2Ev4zD6Jqfvk6i",
  "key17": "3vFCzzztKvc8ieAf7c3G99SjcgEodoerJv6HxJPnXHQhYfpNHYiYPiTtpdicBo7bM7xWwvhLTmM3Aih1vqaKKshz",
  "key18": "426HNXUbZDsgdPZ8xtTXb7Rs5KGj4xrumGGCgtaQqD8cauAmxRKMiaY5uYS1LVfkZosTBeuunLnRgNNTPfQNHUr4",
  "key19": "48AAwqRkpunzRQ9h728CzaJpPeAMhEbxgs2T3gpDE1gcY9JzPDwKFdEkVjeEedoGqxF1UocPD5SJZsTbq7S4YAe8",
  "key20": "4KuvQAELoyUUYb3zGCMg7f1qUJ56G8NBPqEB2RaDuALyZadSwrXDy3Sfj2MShSHM198D19ygNy58JLY1JqT2p9TA",
  "key21": "3MLpQXqapjJ7QpBvGbSVGSgYrvBJEpMRNk5cEKhfLXzL1sx7AZd4yp8kMS4r1uMm4UL1cKxUj48ttNTj4BxHYH12",
  "key22": "1qDyBhJo2W1iEH6w5LJ2KPmZiNEGCGTX43BhtXK8URAjq6mrJCDuBHE75F7iamsDCGuGHXyR8f1Z9MByyJ2QHuu",
  "key23": "5GF9uCzbw6A8365zF95gAwRJxoXBVeM8jRCvuZAEspYvYn1NSJJFdXvH4AtJEuumxVEXpM7ZmvhGZNJkfyAHQ1V5",
  "key24": "4dJpvmAphRYns2aFZncAcGDqigX66ieyoo1sX65uir9Nwymgd1nLJUpdSVWd5VuPeFcbbtQrMWW7XdFF3vGEjqCD",
  "key25": "5MAsp5x6fNB7K2faTQrtrEm7KDLG5onHW6zAsZorkqKvaDGTNa68eMAcrrjCTZkyEFhz2MzcGL2s7cDdvvU9Eay"
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
