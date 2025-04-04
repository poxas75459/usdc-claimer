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
    "5UXT6F5LS5N7EddX1D1t9V69pSoPJW4nYnJTU4gMepSzGMNCSByBZAdZoB6Zxuupunv8fQ1VF2wHzmBc1XmtkfB9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BKctFREKBMEks3md1Yddrb4wtUAQxWu3PKBkPhFo8ZKouChMz9spnGDP8C1tGUEubCCYJnYkcdEkPb3jaBkfPyN",
  "key1": "4LVNMDzrVGXFhDcWz6mTppB3a492Z2mDSoenqr43V89Feg5182GNMGoBjRmNFz64xbVaL82nSs2Ham1zPdTuiQsg",
  "key2": "gKrjsVJ9ttfQYPfu83rdF4eKdneYLooos2ZEJbAvnsmPRUPpCszFaaijKT39hGHfXFDGy4ugSD49SYURan2zR3d",
  "key3": "4BiSkKgiRkAZpe25wrgLAqc5xPrP5A34YyJd5H9L5qDfPQ3pZbDjJNt6Q4owUMHMAVv22P7mZ8EGLWjjmxGcvq6M",
  "key4": "2brvBfR2qyQnQEbhUNKCHf5mvME5rGNtxraD2vs7GGck9R8jvo5FabnT6cQZf8jy4BD4e2KJBCKQ78JKzN2Qk2pr",
  "key5": "2oEA7qtypvEaebcw2TE7AHMSSrjW4SZyEu91LDfgFD4j5CJmRon8M34wkMT6bWbUqTJaNE9ERqugWoqsKGciVd4a",
  "key6": "4w179nzCDVjBQYRbNwAw7UwLAvZpfMX8EQcQe8JfUvNjGJ8qGfgVb3HkCMM4x78fyYjoziZYGrQwizowtThJhaCv",
  "key7": "yqUrepZbL1uURJfhemoQtXJQQgJ3tSTR5dVu3XpSFxRWUX76iNKznCpWBHBkBmE7TTJ1WSbfadLHgxE2FegM7pF",
  "key8": "3y8V7goPAokXgapoiV7H4LNsuPah1Gc7QMqGE1CUYrCM2VEi6aV6EDxuWodRLWEK6hCW2jQFwLPK7tB15aDcMfoW",
  "key9": "3FAkVPa1kv1GFkgRrCi6CbKoYF9eb3MtTErWisHJ3wm5qsMbs3WHTZ1e378NqfdChbtbYRpUfu6LRvcyK1Ta22ep",
  "key10": "2L6jKZTGcCGe1eNPeswoS29bRR8RRggDd3DpbW9vuD3sJ3m3UJHdCWjCh3meHKCLZwYriHhPsBByG5uvyMrgtmRV",
  "key11": "48fktgs7DPV5ykdV68HY2tcbDN5CAHzVLU3CvqucUghx4PVr1FN9Mpo4TDTckbj3Tk9TPJJug3691Xjx3STkRGkd",
  "key12": "2ZKzkd5szgRvzi6A9wCunFVCE7Kswf6bDsSS41G6Ngc6Quyh3FtiutccvizvjPv3rR2CwUhTTE9FcDbjWKzDrfPg",
  "key13": "2rhj6DX6YVtRJQokj2bHEBP4WPFuHGpN2TCTgAfmYNMt1UMzqYCeye7SZ89fyg6TrP4g5MCJjToeuJZcvcRwc6FS",
  "key14": "ATnMiujgSRNU5iwexNJSMsGZyAinYozwNLrrkFKVMCRjNevLVsXWqxty8VYFn8yvFJqG6qgf6tkpWp9yRKSQcLq",
  "key15": "3UFXDCsPzAmazHBXXxQwnNhMRbo2Ftvv7DQxbcEGt7b4wHfnsmXpWaxrNw3eMfX2VgFbLmeu2q3of7jBZuQ9YkMy",
  "key16": "3FC7sJuZWQxA9RM1Y2vhnTVKUppjM2uAbCrf7AEMuJ7pwwXR7Y9Cboywcq3QKfGiPdU4G6w1pTmM3Nkx7FMxE6hz",
  "key17": "4xmgn823x3nHMmCe6cLd1SgkcEFdbALfMc7dHTX4gsNeLFdB5KuEND5GfNSMNVvz8if5NbdgfUAJ45cjSNBHmp2n",
  "key18": "tvPFV3Ji3adenJSiCT8CqxcbqWbqDe5HYauMyj7S5293R5gV3TpX5QM7SXaxY6dFc6K4sJrnBjDpWtyx11BhTvC",
  "key19": "4yYzBFobkmXewxVJN5yPUBSaKMNSTQ6kGxA851fKVrEjC5meNbaM5p23NPkMRiqpgUXby5VTEhKWcbL9tDgKatJv",
  "key20": "3iwnojHE4aQ6bsiho3jnMFef51LhStio3NLAn6uAevXgR6d8YAzbLfCPaNoccmqWcGTrHtLUnjEC7AVD5knNoEM9",
  "key21": "4R7dSVBxuPwFLmMRFB9ksXFBFeocSfxygevCQ9tD4kdHrwdzLTizMV33ruYDZZcHrzZXqP72uBkGodhEhpjhPLa2",
  "key22": "2FVXVh5gnPYDxftz6gG2noQRCNJDtacxmKAQmK6t3tuRHj8JkwpoDzcz67jjgJCMmzDrLjT7giqvxJcqBZ93abFn",
  "key23": "4rh18jwwAieSGBpEZWu7W8JoJ5Z9jaQr1KARTETiRomMN3X6jUijHtKQNrbZRVsZGvAXiP6djf8gYg3vnfrWVg3A",
  "key24": "4MegEuxpK1cJ1Re2m8VE74zeGYGEPSqkMVNiWkZgP9p62v2yEwowdpehcjhzEYhCXWZHyChTg9GpEsDh9oJzZruL",
  "key25": "NeKaf1uABEyDg3KWUcYX7sJfP3JdbE6R7d2CayEGSVDpciXFKuyP2nxPRB1LTQKugz9bszzUS91ZdPqKbFCBLA1",
  "key26": "2XTG6e1JsAU9cquZgYB69ShUCc9RWcikR1xYdw64HJ1dgxg91B2hPPTV5RyT7N5zemG98xLcHzaUerDcCfeHwjCT",
  "key27": "4fmLHbCBpKyZC8LgboEh74vzcgbDwGXyQw5GbpiNMvg2w7Mt5j61kcpDkNiydujfAhLWm3eqUiQfvse1Zbz4vnva",
  "key28": "4J4wDchgM1tYYjzB4i9ARAJ4eNkUYgHRPWhVPwCSy9XG9BgafMvsAPZ2WrmBZXKmiHQgRRmLAoJGSyTd8k12pV5Z",
  "key29": "3XhHxhGyyUeKBUFQ3yUfXUtnzHx7tojD42smzmNKJpeovVqHJsWwHjPtQes3e6Jy71tMD6ZHGZ6g7rTTLoubcpcZ",
  "key30": "5SNG75j5SDbbo14r8gYDA7Z5AFDSHgmZh8UiJAVTgyLTwa82BR65grASkbEnrojztBDyxrsNPycHzP9D3dLr3eA1",
  "key31": "3PvZBJVs8NWpMDjyMZYCKbTnazMGu1UDwiizuJYAqtABvbjjhd3wy6vE6Vt6fMk8sDsg7vRNUBKuVZRkbh3LaFyw",
  "key32": "5F8T5MvV3L55Zbs1GsBE2BRorpp56bcV9wpNMER5pTJEf5LVgg6Ym7fSxLandwZ8zkHkTdQ9y1D8bJh4oPUrdpU3",
  "key33": "3Xvphu2hNWR3hCkGsLyE5hjCtJNobqZ79qHuHPh5g9JpHpFhBpSQifsCS3GsqJzNw1jb9nPuksQHFaBmXdNPhCxd",
  "key34": "2MxQ8j2QqpzaYLJNZWHtLCUMYFN4bKtegdAXjTLiD1kwJEi2axnz7AJLacsJB8cwTUPzGmZnvMx9Ba2XkNRBxB9w",
  "key35": "5FtCsu6U27xhBWkfwufBirxJf7XSQafkhUQtYbWUeVnoJmfReJHuXDfkMYEzaRhiUVeBPPK4ZQh6gBJoCsB4hftN"
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
