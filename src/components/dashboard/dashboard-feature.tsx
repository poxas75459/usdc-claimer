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
    "53tU5XK4uukr3khQPhdrcLoTFqiLbMjsYmH1auX6naxCBvWpAf2Dk7cKEXXFdLRafBy6fqpKvnCTa4VuoYF1aB3B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52nVJbwfD5a92FVrqCTCFEk14rPRrk8LcMFnvQi5Yj6WxT6dVWMJEuq9DQzWVSkYAxCH6e4gUweSP1EaN2xbMxzQ",
  "key1": "5wG3FLimXvSz8S6idgNFikxmmXayNrLoSkiqoHDWoqyrj9cznsMM2eX9v8EMc27jdVyj445j4qmY2ZaRMhnQxCjg",
  "key2": "5Pk1RLN7LuDqzP3Gq1wUhQLCZH4HDEPTjnjrrWWTHzp9PEGXcxnmvCMCZ5EnTpuYoFPx7GAR6x1KqX9sWqb1UVFR",
  "key3": "4affSyBHCWxQxwVag6oUhzUrs19Wj5hQDWiV5HESt5jzcSUcShDzQ5oDJdCgLbR4H5D4cZE78kUDM5yqRdHLgR99",
  "key4": "2bLsHSZyx8acSwEahMu33nBKVLUHmXYBML8zsjUkrdUgySYGauvV6RZtCyxfigED7TCRqmRYTDeihCvy5h8WYsw1",
  "key5": "3XZ7B4qySgjRXcXRcQydswrfbB2Jb4ETtDD5Tty2aSTZxG8uC1zLPnjQkFZbkLqv1pQiCDidSyTEiDFKUsU96ZCK",
  "key6": "4vKn1bUWKpTa4bCE9RSQCqkcmosZNr7MrQsJEB89xRf5Fhy8WpLSWj4PYpnivzYjnetCrBQSQBxkrmRY2LK8tBJZ",
  "key7": "59RKGK8QhQ4biz6N46oggfUnMm4CyecowQwip3zf52ujqEvqQNtPvtQkxuJyc2FxRGeTtuV9v61bMrjBB5zWcsDq",
  "key8": "3EbBWBpWuZsdLNg9QT8Knd8FN985jCWyc9KfMsM5NgjNdyXQ5AUBsiQxphsvW2s27a9sG3kPwcMmhTx1Mu9RB2sd",
  "key9": "3QHYb9vt92ofpiBDYUuM4568mTdiFEtTSvBb61LEb9USWNu4on3AATZ2RAtayfW74c9k2ACFhpWBcAAqFRW6tK59",
  "key10": "sF9ePpz7e4ErAEo3LtcS84nXRyhQff926z5uD5bK7UXuicqEUaQxH7LN6WyoUaw4ymdMSpD6UmT2wVXmdVrx7hn",
  "key11": "tsee6o1fw2keMKReDkNzMPjwN9ZWXwHunnRVhWMu5Y1tsZPsHZVv3DodhbMfhaKZNmYiqhcUtHeBc7TywKik5bk",
  "key12": "3rVHqo7x4Rt3ncsu5zefowjNU6MSZXa9d8AMT2JAdp5ffvsQZvCWP6VXKxwRzQGi5ksHSoLAKVLqAM1YByJtJP1J",
  "key13": "NAeUQBWafrA3VcPQvXY9Ha7XcKXQpjy2xpC6jTp1gnKQwryUUxbJ3u9jksXkrHDoC44rvYq7kDgwTrsSS6RvTFY",
  "key14": "3av5JxSFfV6q5BnyoHH1AcytmcCyqowKqex7jNaUZszsKcW6s9tuQpyh4P56b55idN8H1ZHdXvigasykiPHoH8ip",
  "key15": "5APZgcwsjaqJiExQYmFZiRQuZ5ome7nFGB4oZTfqY1FAHa3mjZHmY3Fgi8Kk73g1tKwPbkeUwAgW3YaYkbck7jra",
  "key16": "2sQRg8p2TEw8r7R2YygCE5thLaWKpR5YbhM6AZzdAU1e29qAwge2n9gP3PcmdGNDSDarVHPB1JLgJdmudtMZKdUa",
  "key17": "5GkWCPADGgRctfFQP2qh51vKVTzKYUSe7EuTYtYazYcpuUfiKRrVHYTF3W8Jrs6QHLR73vb2GvjzqfVtwNLoLWKh",
  "key18": "KQhHqKKYvvU6a3PmuEg8jJdsDmhjoQGBu71CfaJMriYeDwK9X3WvoRGXgiUyRgmFzodRVKYaX5cuNU1c18V4qkV",
  "key19": "623Duuk8iiCUbkpNa8K6YsTikNfNf4NoVo2DqiXoznxjdLsoyy2faTfNQqdwiNF35FRnXD7mvdMYq4tWr2dgehxi",
  "key20": "5Lpqs52b7yLmKerUGBVbigyHJyiUgWcrY5sU3XYLgEcir63FJ5rJA4QcgyuegrHCDAu42wGMuTjLkffziFjLPMDA",
  "key21": "4AnHGVHzF1Vg9EpLBJovKAdwk1MmiTNW8sjR5E52KCHPAxB79oWkUuStStqjZex3Awtr3Uhq267hMYksKHy1c5Kv",
  "key22": "3NuWksGgC6WY44NTHwUmVnE2Cp9meVqzSjeYygPdFwQ8Ls1Szq9XjxDm32hTDogUX8vPnvFxBnuyhB4Qo6TriEi5",
  "key23": "2wKJMCVH8dNc16Fb5WjRWy6urmNaJV26pAr3YmMwF4qF2C2f3eZLGhPTr7cRKX2xgmzfXAfm5MKzBLjy7FKb2XgA",
  "key24": "XUMm31QSz2fDihA9h7f7croQV4B7yqypTdzcd1gRFQxiSyfK7WUSvFevFeiedHoCZAV3YAQUWyjCy83FtycAQkK",
  "key25": "65HBvngL8kRANMhFWpdqx1zfZhdBAjzpE25HGiZyXoYe1dQ29UmVQHNsFeX3AobW8UtqGfshwpG8kQjCMn6ck55g",
  "key26": "2aGq49VdYf82fJxhvwyWsPfcFNDGRXpfQVnNgk6SNunq6QWxLjmdeHp5ETjZNxbewb4nhpsWZmAkVhKHGUwDTnuT",
  "key27": "64SifArSpUSXW8LPuD6ED57HoGtD2QrwPRweQTkY1ZY5ikRb7XmhJZjScDfpS1U1EFMmMEXJA87TeDz5XE6ekjEM",
  "key28": "5f2aFUyFyEjq5n7esfuRqG6YQncfP5UV2ZrkQ8BvCV8E3hJiCAMGHy8MJZ1mawUrNAKgxhGECeAednurQpRMthNs",
  "key29": "2nHHy2qvJKX5Aqiqb2k2eCNtwWEjE9kGsLBYzXjpfpXhuBaECeCHqZetNL8yS7eJmCS3ZZuQaYpmhKAam4QkVyNG",
  "key30": "2YoV8xCbjjHewtw4hcJCE4p9u6317eKSXxVDNjUd4uLzPG8YSYPkjSMDgtzbaU1or3Q8gBohQjHWPzZR2RPo5B89",
  "key31": "h4KgHDtwjqvJyZQ14xNvYVz3zRfjDRYDwoXw4Raie5KB4fyCGwDZzbhVHocwGnoQ1qxiy2NHNMtmb22CPt6TJjC",
  "key32": "5eNPrwbA35Ug1KwiTWEhrNvTLhtopefk9Jt4mgwgxKutzSiAgLqdN5HuMh6vDyu3fvXXV7zTX4T2JcTq4B2YYZVj",
  "key33": "jpGjFeX9wVim9KVi4ouDBtgDwADUKnKsSmjwQETERZ5aQKcvkHWKog1pgu1hWUrQq6ik5nBAPNt41kQEoAxgQSP",
  "key34": "BFHoHQVYjcXqiQCMmWEGn9Rk8AFz9TCQy8h53fQiVjKd6LUTorDf1tY9z1LjsYf1gmyGjJgm8sXQGCoJEyXHBRm",
  "key35": "2JUvBACo4eFTTMAzD4hABvERvdeZfrJUZjxMScw72ehRAFN1Ni48y4iUG15GfMsNUv8pTwY8zw6e3KkdN7GKKDA2",
  "key36": "5es57MFRbLAQ6Dp3pyaF2VsqKP31q1pJieyz9147kkF9pUkwiPMDkHRcvpo1CFkuB5mr8Ggpn3Zom4ncTS36tkq",
  "key37": "fwVyDXaJBtvZTEzRDJxQUtpKknNijj9QB5DGykSSSiadkxWoB6wAim53L9amk9KQG4W991tNZspJLV9Vc8FXesg",
  "key38": "3NJvtm4t153gdEGneEaVYwAWujzpccmZ3aHKAxPaDo5xd7DWzyHkAQekErsp13BetEks7bxb5WNrSXkvsoC9LWfh",
  "key39": "Y3G4BPfWtaXy7jB76eJaJChzUaUhvMawGEj6cjkfjy8QqGR6qXhLe2pNtuk1Lkys7E31SffJNLgPp8vja9B28bD",
  "key40": "5urnqmhr9Va28YuDTmAzvENQXbhGcnQxwWg1XPDjrCkrLbxm7GGc4YKoNUHVZEG1MJuv2eieH4mKnxfGpBsSS4qu",
  "key41": "5tnWKVrCxvTn2TL4gAN2hoZjv3rhmboD2xzzCtxvAuqMuZkQmAM752NGQjZQAeHrLecsuGaiST3jxHDpYWCGhTw5",
  "key42": "3v19UYHw6qQndaMm3f9jfMy9bjtrgyHcGNicxp3bGefEnjKNKL2pTQbfecgB2a2fsV9EYt6PBb9wEjEd3BhUNKAK",
  "key43": "41KE7WUHz8gTQFB7ACqPCz9Spd8H6D5veg9t3jbfEwPn2bDFKZvMbjRMp2EikYua6vzukXtt5UpxKyjDV4TkaV83",
  "key44": "sfd76qV6vrLTQzwQcuCYiCyRNweDwJdQpXxeXkasYwq4QJGAZ8tf399nwB1JHn3gSpWQ6tMorjXf5MeUgExXRhk",
  "key45": "28igYUFKiEWiaYdiZfcBaNHtxjyENxYYNsYV3175bxoF93FTudxJhiDRnwDNhPCB3N3MAi41GvpBj1jo8CZzUXTe",
  "key46": "5tYntFBKDmzLkTYvW19dtpXKzsoK59jzFkrUxa1G4MKr1Di6T96bzUrjzgin7QjR9zqZj14ofLMjZB7rasMn3Brg",
  "key47": "s1Mv1dR4unyUg1ormAuNCjuDa5gRo16n1TYiUHnKz6oRbHqcs4oA9iEcy4szN2m8hkwDvgwCuE88PG6tuBset87",
  "key48": "2NpqxWNb5A895cJavaSYZHbC1K7yg15xz3oxE2cMbcrLi99gCfJscPSGGke3ZWk3Ea8NMbCL5uY2ShgbbrnpV1ah"
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
