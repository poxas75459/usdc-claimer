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
    "2vwwS86Hsg8iVsEvZDgQNEouVQ7uALGm42nvSe62XxZaREYwiiUSEJxopd7rL4dYGU6ysrkrMJDDqAibBVw1kqww"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G8AG4mbBn2Ymrbcvg9WhpMc6CFGXizvnU2jaaSeZH6b5KEpPdifFvezW9VLw7agBxKQgjqQvC9qApQP6eHbb8cS",
  "key1": "5vTreJd9WV5VQKYwS9xdwfARzme1ya2gjTW6gifU7ACTvAMrVe6Gt5dPgB7TqhQZineet6cJobi2euEVDKUyQM9L",
  "key2": "5CBvWu3NsKvB7x3Bnbqz7K8vsV6SM3FYgriKundxcLereaD2zS4eVQxMV6ynsfs8zowBMZnKZRDFMH9C2HGBJQ6G",
  "key3": "47dwqoZdAf2SS98xTBDtKcwh6Gmyb98KaTk68fyadobBbDbPWvz8u5Ewj4EBVKjxJPGvEY4sTdq6SXp1vxHB1Q2v",
  "key4": "uWEpJTiTrgetWyVGmT7Excq7xYJ7vZzeyR3yNYCbpG6BWfQv22iP6o8uET4xM2XgCfLt1NhUHBsTte6uFwW2HHV",
  "key5": "24XEBAndf7sGqwAayoetYPB8a7QJKaLxxeApioek6AHAdfmTG25et4ExixWAHrp1SoNptLAu54jtKjxS7e97rdV9",
  "key6": "4YZV432K828eFEHPgymcxURT5akz4BDfD1oHZHzg9SFc3Z6idU7Ndehe7TJ5SMUqM2sL8CdAJWbv4rAys8CijTXc",
  "key7": "3BYSwpNwD7FCZNqABwBjCfWyW5TWBPmmhVA7x1W4HDhbpva6spEVyzhfcA9njKECFLZ5PXtDMo3FnprqBBhDjC8U",
  "key8": "3d473fsRji45VApr1nHa5GGH6N6FYseeLdN9QpEZ8Mtpa1D2wUk5tAwxHHP6HKxjDztGcURdTa1pLeYBZGJ48QDr",
  "key9": "ze3vXvjRxX4mh4srVjj2qyGyoiFjJbYpE37QigjF2LyzGiG2C6AiDFpndWJNjEZyJLjRVZa6yKvmL6L5Q2VQuLg",
  "key10": "4BVuiaqUEiTptZAQg56VZPw8mGeRdHZgdThFikiVAVZVVqnRGLkZKK49XpxpvHGh4rnMXg2uV25oarQmdrcMavdg",
  "key11": "2JvLmk2pyhejdatptDSK6uhNZFMCr9hDg5Ht6DMGgME1AcGkZwsuqYbVvw5ZTK4fQVkPqnDg4TfGokHTwx9knQoQ",
  "key12": "u6vVVvgo961wck1CciMTHUDL4sTu823ssA3qzRdr1kT6SJXcKNSXCAAro2Rwwqb5DL68K5W4G4tC1AJ2R68UpDL",
  "key13": "2pQpVv5MRfiSNpUH2HDpQDmfSqsx7EQYwLeHcEo3qk97aDLJexk4FXfyZEZ7rUg98BwM4paRoMLkANLaBpgt84FR",
  "key14": "65efHwzTCeBWEKPtmq5mMQ44vneN2Sfeg5yVudYbzQvB5xhpqj926rXZqQQvqWMz73MQg1w7amrEscoRBq4WZ6ND",
  "key15": "sxUtDCLF4pSzVgEY5mwafmKN9kZChdHWx2pu4D2bo1iz1VFSrZngEU7cMA1mHfBSxQHjUgD65wy1VtPaTgUgSmf",
  "key16": "5ibbMgbnnoNuQn7vaPPzZkA22oprFha1QsNwVyz3DwxEXVcYZFU4apDXRm8aicjgeKskSPzGGKaVUdY7WBwMgtDY",
  "key17": "5SrLZp7kg8wV2gjXxGVn9Fx55xFb2aRPKA1Qsyg1ZbR6W8zJs11N2ar3DqZYG6aibVbKDCRmqEvQGBWo54LsCU1K",
  "key18": "3WjJQgPgKss5NMWTL816eeF7Eh7NxYQAmJiKz98hGT7wnkwFVpgY2krnimWAkMpm1qapwyTgeCsj38UMJbVxZ7Xh",
  "key19": "e5AfhHzxuD6RDzFQSebFcp2rAUEv9TqBWVFurLMB9h8NaKYT2tKA4aJ5eKAA82SRuhQH44LsGumaharFkYti3As",
  "key20": "ro9eAmoyLS8cQKfqq1i2r5jjhDMjDWYGfzcSwYEmMj8fWHEBMwUMRhyW3NaMk8MQHDcuAfZksNbxhZdrBJoBSGY",
  "key21": "53GsfWbcN1SAtwDrdFbJJz61FFNvrRMizMXtgt6pcAb7Z9wktjERx9yTBPntaeWM1KY1ojSKeKYt4DovTGgmxFsi",
  "key22": "4hBXEoSCoRPFvKLBzUPfsMvKU3Zf4hbXymLtrXSs6zndWQ9EyPxc76GBt9ckh16ioiCPu5DJrPPcCAkEoeomPLnr",
  "key23": "3xMFwYgZJ9tjSRFUTfiR8XSkEFNjNdtFiMksk6ZD9o58iNYc5UbanJRYm7cw5K45dATA65rZYTCrjxKJj9D3kqVh",
  "key24": "yhaoGN1zjcrvB78CLf3Y5nLiZAVkZLeLc2T8GDiE6BQ6qh2EMKvuV2apohGa4idUENcpT1J9DB6wTvqQarpmXZ6",
  "key25": "3y79reBTN3fYrhNXrhSRt8bhimZsY9N1TCBFNMX487iGxi35LrBkMDAo7x1qR2qiKCGzvWZMxXTi2BSKHiX56CbY",
  "key26": "vyKapU3Yc9tQL8XtY3aRxVBDxkbcgRjogPz9TmsBVbEZuNN6sSEWaXJkDN8XvUXzq2B35Mo1jTQjj3qSUfSwsx4",
  "key27": "59pjijTSNVduCSr8mz2n2mMVhCj9eNEAvV4zSzTBWM7pA3WBWC6XE7u9QjZCDMKhUvBpQgoZLnwpaUnuaJy95Evo",
  "key28": "2dxpv4hSAVLXwokexaLEEAa9vMd1jSjpHBavs9ZuLdajC5DYhpNNjyzPdiqhAmwUYs8q83oseQ86k7a81VtyRegH",
  "key29": "5ggrRiXWt5MUPKURkaFiaXjHeZc5MAieyKomubyoDDULHebrBs7mhUDyLw9GDHYRu917MZtzkZGjCMVbM24K3Qnk",
  "key30": "4dtyCJbQHhxNHdtmxiVS1Wr6jzrSTaxYUhYzatbQVe4Ff6RsBLTXxmZu1mt3ftHwNBjkerSZhrkGprvGbiZyFJ2Q",
  "key31": "4JzpWvHwkeivnrC3bX4msY9mRoFr48K6ccq5AecTy95yK2iHeQmZBQXYw2eiRiwq4NsR7PGdVLGJcLe63KE98kcs",
  "key32": "2Ut8qh9AtPXsctTpCFKWHERt5CNA3kDosPUgqcY1P2in8R3HHxCBd8dFVPfdMRUMMU3sxvBVfj7s8HEDK3RMgxt9",
  "key33": "2xSHYbcX6YanysQrSgZcjitBet57q3ehsLPDLhBF3GpNG5hSgL5qddVge6iB8tQX7THALdeVTVV8hkn4UQH9CkGE",
  "key34": "n8uGCWuFYtwBHMoZthQJDr7Bvp9NbtgbbJiU6otkbSaF8NGTYzLt66GAtPxWDdk5N5pNpoprstimBojE2hFMLZc",
  "key35": "2UhoZWbZidVFoUosZYVViahTyfQP7gwgG1GW4Wopg2nW4Fn9fSb88aV6nGfF4HKgzjo1r5PvVFcpLAGH7aM5NeCX",
  "key36": "3paja9bSJRv9w1xAnKCxduKbM8vtTicc7cSyMgWJ9fbK53Ak7EQFM9xwrgQX8BjzGqo3jnLy6s6wgqJmjYauj45Q",
  "key37": "4VDLH5wNf6ZnJGhouQyVDcQJnr14iLDXScgxu42WRApeJG8V13jX1xmzLwnfhztAxpUVMrScEAJc9gU8k3XmVyif",
  "key38": "5cUFQNa2HcC7pqYDWRZHSbn3vXUtpJKbeRgD4qZh5Kf1VXXxRZZx3pTnWUVetrPan8dP5eoBJBPxvudXGH9se373",
  "key39": "ZyhuZHHmCUam8EgtY9Pa5foSc6fbCYF3HcwsoJ5M9kcByXUC7YwJTG8ZusUFHQM9Xp4w9dPV8omT943ZbATgY1K"
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
