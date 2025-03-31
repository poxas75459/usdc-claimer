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
    "5s4pXabtY36LvV8psWivetsVrNaqLja28tKx7h8KsafGWM26svriMx8C5GerV8d8WGGhaK6fLhK7w4MPVjzQHACk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NqJrwip3M8FWkDGaxrq7VBtkqCzdLdLe5H12KfBGywNphSbPp55Ro2JUZAonkC9VUt15L8AUcMYGRuJW3ubuker",
  "key1": "5BnfA96g8S8DWvGbBj2euGL6py1rKaJgxRmKU2PdeJj3hccRUHqrxTDtQdSnrPvC8nmYaDUtsZkrPhh1yTEwbCC3",
  "key2": "5ehiZGNgJS35U4iRb1mjQGAqrGKEY2HgF8Vwvx4NtiehhQfpRbjyhCZgswcmfx57eR3fQbs2hdunEVX2yEa3BDBK",
  "key3": "2j8TKxfnjBbNTBdMuoDu7tCskKcgR5nQQC8PTpGiFiV8pAQkxYerq6F2gRSKkZsvz96acpBSaAFtZW1hypUSMj9x",
  "key4": "2mFsC92xAbgf2eWFWsxMuLiV1bZGrqJYJAvRdj5qELc89ipuff8uB2ohXGXU5uJ8PT4uHCazEUbG28wfy2RsJ5P",
  "key5": "dyZinxbYNqzydeqF4gYVCPo5rkQ2VzCfRAguv38cw51azYRLKJXebsZLcBLKUXLDrDrj2zntsMdojkudEgJ2Fqi",
  "key6": "RepZMgVPk8pSzpPNQx4LKDfRS5gv1ovwpHySHXHFeYWsiCLDH6iZNrXQ1onkaWbhnNRCNTvy71r5ZQyk9NYe572",
  "key7": "5BzvDdN65QQPiqBnvdzzxU1kRFRntqifwC4x36xFBFAtJTpmU6G5EP5X9tcPCEnRJFxEVconcLRQmRWEbLbuqFAx",
  "key8": "3taLJuoFGvQvgWuXijAKorcyjQvU4CVVtSNfk82oA9JUmAofNXJftF2vf9RYgqqGnEgjPSbtpXdkyeMHvxibiBg2",
  "key9": "5g9ez3DAFr7LuK3VAfbXQMJxD3v8KLYsjVeEqEr6LBZkWNcndQ9gsY5wAqv5NrXfpwfDicBENBpkDpF3JxXWekN9",
  "key10": "KXkNfFQFJDjm7NXtQQxGrMYeiFskGzRvagbN5bRZnEY81w94tPT9p9nza5oYTCo1ksj8QLyxMPDU8KqrrQq34gv",
  "key11": "xY82gztYuFw4f3CvgSU9RufZuZvHMqvZsj2viDhvsWsVwtxJkLG1vEjFWAtdhbiUXB1PrsKWS75iHWh6ohiTsyq",
  "key12": "3Pwtefa6qj86gWWUvKehMVbipwuLX5Cv18zM5Dq2DNuyt3pGP4wZu9khBpjco7b17X9U5VT7c6mytm5Sk8W4fTa6",
  "key13": "2rw8n2sFuEsWUaUqjJaXTDVJiWqKzSNDev1Nwcb7KJuTxeuvCmFzgArqAY49T6J2Jn76WhxWAmfFUsdJMrDhucss",
  "key14": "4qHwmmg46tvuL6B8CAoVuc43RKAr1cw6FH1d8TkopRPNmyVQnkpcoVeGR4eSxQMn58SXFHt7w8xzJBv4bfsmR2wk",
  "key15": "3gLXu1cQWQJtA7vkCiY1kSRvoRfYeX536PrJCuJEDCWFcUyZQLKB72Hf6iS4FLuBXbK28TBAd4QNqhL7T8RVsm3y",
  "key16": "xph7zd8mvQYVWw1rpkLE7CTgpS44SyXFai3LaLVtCHbG8FDdBFxEJCWUYRV7MrK1TkZFBXGC2mBCR3XCdqqwTGE",
  "key17": "5hoXV99WD4LnNZxjo7J8decqffesHCXQVDruq8ULcnnyyjG53U239tUakJVy2ip3ZKhvNvtYFep5dFJuGuTcmzDW",
  "key18": "45zyocJerLjjZPTt9i4yhDXXfKp8h9CsapyeXZ73s3MFeiDk1XgwjtcWy7xuCdZQFxFy4aEyNpGZHo67SmmkLCcu",
  "key19": "52Pidb3NJmCegxSDqvC117nYt8z9BDXzaKjuHhrZ43e5ZYTqBpkdbcKW2cWopP1V55xF4dDrRz1UCeLL1ug3L64r",
  "key20": "3XndTx68U1mCcWRX9pvXAk5GKpYCEsQLvianpAaXWnvfM12wJeRtjdJ8K9ZjMnV8LqMavFm5ACUhp8iLgbvnKTVE",
  "key21": "Wy9wWjq4KDsApiVMUKpc1c2Z86ab8iAtVPSurGE8T34zsoJtC7Nj12a1YQNHzyUthinMRtoqjXMMrTbJVdWvwbF",
  "key22": "5BG5NErPpMw7juTmqUZjHgh97oFrNbUiCUpTPK5B4Nj1L8r6S4z2RxmgxKJ9vnrXo1zqq1qfKjqqBqS3o4NVPHCv",
  "key23": "4FZUnV57zpd6FqjUyadcf5aobFwHCp7Y1Lfam8DiwTwdh2UzvG6QAMXKMuv3FYGMJpupRvRUqmRa43ZZ5curg64n",
  "key24": "3HudU6ra9znPi6752ssoy5wG7aQqNvMJEs3Bb2xafzKMWB6BDkE8A5gokazJg5rMdDud3kQNmqVkDHn14XbHSzwu",
  "key25": "5Zz9JhtvMqQTfRkG6TaB4CPb4DU13ijehJtpmFDRTzh1nZdUjdD1Aws7BTv4f4KzAHSTZk1JoBRi7cAyXSvUpXMn",
  "key26": "5QLbBohCNJXXAwifhY91MJWHSW17kp52eFXGWsoRJfVe2pod5pvZyQBKsRy746T1pg3rgufk5uerWDTqkiZRoPDe",
  "key27": "61DHfc2L1EF9NMsqTrnvXyok9TcodyYnyfxVNL52GAvDFZXqZDoKAMFZNfEJWC8BWqJigMBqXznkCEy7si2UrM7Q",
  "key28": "TQyNS5banWGzUidNAyMbXbE9uX9o7naqRrVrjaE5XKFFr3L8vHeoCuZZ7tG53N9bmk5MFGS5ucQ8u6euNYBX1hp",
  "key29": "4GYC5DiqohwG97JkdC57VZWZAx8jNw9Lo2Q4XupefxbjoV1YXFEZKdh8YjuFxSLk2eKjdXU3Kub13ipPy8pFm9vY"
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
