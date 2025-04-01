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
    "4ZZ8q2gc4W3m8upsQKagxPvF5Ccaq4CS17CGh6v7k3WRe6VBV6eZQGme2iT73fy77PWr66XsiRgH62nDnP9zkRXn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kiBa178fWb64FHnqB7DFyBvYhY58CWtMFmq8HT7T3FgaUvNnURczghJCvx4A1WuWQxwL4CMsxPTqTSUjxrvpawx",
  "key1": "583DWf45BjnKp8NRFi4LZwRfc1X4NQRFZLoydKEi3fDjXbgnSuvJQGrczAjwZhhzrEQQ9AHekB2XjUhTZpsG9XTN",
  "key2": "4NWQqsDFSPxUzCMvQjcJeZ12SPtr92wQ6Vn1JxxpFNnmkrHQnaVSokpgno5WeWFvad1f56oYauuUHj3ViWGjMVhA",
  "key3": "wiW1ASAPnvgMocc7VrsbUaTsPGAw9iexwaLT8k2CEurthaEGLVvCXmS84mFH3DJr45fYBfDRJ4JBZyCuBfqw1Zk",
  "key4": "XXGZzSwuL3CwCwm1iB6vqmokTtMbVZVHsLXjcw223NvYLj2Zc45mEWWfvKFAZrVPE9dLNMvCBP7q3E1umv7Cb8t",
  "key5": "5e79txoZKYb6TEG1dM3wfFbXqjoNiazzEriAapV9uEd72Vo9VVHTEpoibW23rDtRsKnndEQt1QykUayYg2hBdPWH",
  "key6": "5quJSyRUTjrv714sadzGQvyUivVNDSi9vmzcKcshzJEFDUQ2icZQoLmLRre36A5cD7BW91JCRGSrA9djvvfgPhWp",
  "key7": "4M7W4N8zFxtv7UC5s6s9Kj3HAEBh5h1MSmSf3MFkTqS1GrgVT1KLfZpWEYWpiFt16N5Vj87YNTBM9uRbY7rx6neu",
  "key8": "5x7B9HThyMzfmEmq3efjgmMbzaYkBjSRsgVXGoVcKaMKUCT7oin5svSCGA8QVQM6JueSZRMgVrXKtJmHxGVSup7A",
  "key9": "63ohYHc8Drd7KH2gmWQyX5BkswuU5RmwksAKSFsbkV2CYd2orstuwdVbkzFVQc4LxQFTNChAJxk7snMtzyBLJrJS",
  "key10": "5KT5y7USkYMZDbLNne8pPYvi4FiD6M9psq1Gi8i4hL61CVWcbNfTMXWpkoJ3QAAJ2tjHdSnvqS7ybJ1ti35xJWDU",
  "key11": "2Zk3JmA8mKzkEHs3rqkJkP1PUBsRU3vvhqd9Qeiif5ziuGMLHNRvLh4hZ9wc9t8wueHs3rZTCvt9AHo4ghcmy1yW",
  "key12": "2qd8u8wRh23Nfk9KSzUb18Dg6n2XzM3Cyhes6u7UBM7XezrYVT5uvr8f3DbcckCymc8ACjfhq4UzRZH95Zb3AB9B",
  "key13": "64HxxkKD2Dw844EFtBRao5wZuphGYjwGAr7NzUFZggmzKfU9HLJXHXfRveVNmmuDvTZf6w1G3tfYRQxMZLgNn6ei",
  "key14": "cVUWHDBCgu32RD7RnYnE8wMstJoPHpdaiPWr386TpzmGRAcB2rfA2Nii2Yrus2Lw7cFm2TCWbN8xXjfBACmkcXC",
  "key15": "8Yw9BVuS81k5zRNXzrkK81cpNcYhXLaqtB9yLsdb4fzE5J72mWutAri8VTmARRbcLQ4QpG7BgdCZgVMGW2tUTUN",
  "key16": "3LF7TaQmpbvhLKkmd6LZcrvF2zy7rtcmrxsDSzJCc94PfoqimyHA9A9eq9go8jftHxFc7FUPF94HQgi8tR5CxAFW",
  "key17": "36v1t51s4CYtx5CT3FVzSjz582xaqZYJ98gDkFWEKNgMVSjowAK9BhPwgaMELafdGo16BsdnLEjH9TdsV53ULrRe",
  "key18": "4YyeKztz4aoYE9m6waqY6tQV4CcTrkn2b988Kv7QFaVgQqvhV3y2rPhJJkuFMEtegkGyyGbY4jEw2BNaMd1v18mR",
  "key19": "2qstAt75wSZyWLAaekRYEzkQDV1T388x6yegRY5rspLghnCb3WtE57dczzkmyocubdUPbb36dkvtFaTx4w7EUcEr",
  "key20": "TTR86YoaAWWaiFTmgUcLZFuB7pfdKvcB37uoW9F5ZUjSHwpSQqYui3Dy1oUJAxK12Nx2QRjPMUNnNkpxXS3rNCw",
  "key21": "2Fqh8yhpUJTAjirDBXsUMWusVMxg4gb6gt44KzsC4VjwxXrBNcZ5xRqTUJLPtS46cz7hwNfMZdn4C5AjQrZZs8e2",
  "key22": "4QdszYSsnSiaynxyVY7VvH5bbCTAk3ATjFnLgiygfXitSkYt5iwWVxso9LGF9fu941g7Yy8grj22gUwNdqPV8pmw",
  "key23": "4Fa4ExqcjbFro9FNs9VYV6s8h2MjeMXcBjn5KADVFEydeUV17Vi1rpfofDVuew7nBaE8UchqXsRGDMi1KZpfUtAr",
  "key24": "2W6DQnL2VW5vNeCAXUE7FitR1NmdHqo6sCctjKAne4jvLZTpuLQt8U546CMWKDKLPGUgrGiHzdJus7EBU3AQLgsD",
  "key25": "SHgvt6EHDEM92Jzk9tPxiAVKTLwAzS9dPJXoYj92nfMyP12TD8ryE63r6W4x9oR1mkFzVJmcMQkytdrfCyiXiXB",
  "key26": "5hBdSaiV5me94rLfkEsookg677bbCTAienDa3cqnqHsjLqMnPvvahsJxon2ANeGQm9Pf9E8Muk5vTMwFx6bZji9R",
  "key27": "2NfE4wY3dcYrFkvoysmX7ka6MTqmUkFjsN4PCAYGsEbMEB9P54fhVV5Xefnq7N1h7tTo2V5u9NiEn8dSRvkm5EHd",
  "key28": "2AVTqXyCW9uJYk7fKEJnNwCRue2qrkZMakheS4vFDHsBS3t2dDs4odtfFZpfSFYNdHfkSfs1eH9jarymPpj36Qc3",
  "key29": "2zhWTHD9jRcZqoU3tAuMzvwqWV6zeFBQNDyRQk27j3KKag9UJw2iUsL6bqV7MTmbFgxeGGCkGJ2GrTHki36QNUam",
  "key30": "FqiHqs1MzfDXkxVnaLbwERiq6GjqDbCQEJubp3a8L2pQkbuoPtu4WdfFTGmPbXmbxThrGuxGRZxwHyGF4CsNha2",
  "key31": "TZhFRZtXJW5qHXccLaHzLDiicWBVjijp2BDjEmEo8Qv7KPXYMwzHM3xGn2fbJEAjP7ttzzupeKiUhzBQ3XR2e8L",
  "key32": "5iTupVqF9FP78dKfKZJwYFeRgALGJ4JNRqtqBkgqLgjgtuMetBRPukB1JFKVPsNRZz4ixYErHUba7Pve7zLG3SjC",
  "key33": "i4ZF7JNJxMsos5Hc2aNrRn14E2Pf9ReZfSBVNrUV7MyHihPAEoBVf8QFLDuEW4t8R6W35chH6sXaAiofS5PSMmQ",
  "key34": "2ppmzSkmSP72wkCk7LaHApiZSR847i9B95nUMCpHEBRRgbUkPgo6FCAMkbDVUyH8Ayf9hrgTFNSv5f3xpuYKUFY1",
  "key35": "4vkEA4eMpmA9AGNrFTP3Gg4QQe2x6Zn2QEfC55JS8ANGVa2nosSJFXKNds7WmjajeoSVHa2oH7k8jcxBb6ZP8Ue",
  "key36": "27kMmEZcq4dhPJ57KuYbKiodT7JyVyhxSpuB6UreZv49HFLGZezDrz8GkntLUkB7bWvXFTc3zY6LzB5R1iuBaPJs",
  "key37": "2fkMXueuGYL7eF2w3gB8vgA9xwh2NQ3QiopfqdeVu4ghaGVzQKTSNBZx1etJkDbFXn3FGKzE1Xb789uBcMjBjmVC",
  "key38": "2QziurzkteDhwkPbGR1RbXnCj19YVQjdZN15FioPtAavMSeQKVaGZcgByVy1Vk4CZpi351W3ufHstFZzJSG21Znu",
  "key39": "2W2pHLRx6cGrEXC4pnKXrCfSk7BGqXYACYs2jydUrsJfic2wvdCKn6GM3TCt73TSVuW2E32whfJz9iwhZ9K1U5nM",
  "key40": "3jFFdHka2SjZYg4yadwDYbVRbJBZTn9pQYzGQRPA3b7NUfyHKLrYA71vuoT8ZwTTjbe4iMTU3LojiYaSP6WXsCLZ",
  "key41": "4pUJwKRTFTGmEcTkdNDeD9SAca4ka9Xkg4xMS9zNz5D31YThB8581NWG2K2zwDJmmqw8xJNALSRx9bpt3d7V9rLK"
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
