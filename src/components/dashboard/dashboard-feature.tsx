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
    "2dKCNwxCCpKLiJ97PkAXPrHfNwGwQeghvetka9Z6c1nDFVoBbA2gMNP9h5aSyHy9p8LFipZWcQq6xuXiNTSo36M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ujnd7h2P8qLFZpqaMJuUNrkvosWsqE1vzwRjMNoLLUGgj83oqWjVtjdHmtG8uavZmKtTmcXa3oSb36DZ1m3JKM7",
  "key1": "4bhsAsNgbVDsU7P8GAgPCTdfzTz7WAKh822SUMLoCSGYLsLXai9c3AVhqCZbBSRqu8eBQ8ALVpcvFo8DAPjHerMe",
  "key2": "GprZMMMhNcHDreZnCv7QGMVCvo2DqjP22QKxs52u3FehVAeo2C93DPKdJs8odLjcKyLzB3d2ise7GFENZbpqToa",
  "key3": "5bQ3854NhsoPbvrKNYUw8k4fnZkv6ZRnXijrizXtciMJ6wARJ6RAcDbpSRZsoQpcAqZZa9HzZPY3WLHU2Vtb8ddW",
  "key4": "5LKbA7mAkkGr9s5BXrR4e2tgo7VokanrjzExfF3CjzfUhbJ1vnpUWg2HxW4uTdLoY7KkbJNfhJn68iY2VWX4uH1a",
  "key5": "UZpiBPT1G183P2MZdNg7AshS8q8y98wZwA4idDMSkHF16qLpxvnV1cvRJNHg4KBWBsq683QqA8Z5Mmy5E8WNjS5",
  "key6": "qf8UhAdQAiJA7pqUzcbj816kSawevcT191TNEUHh7FK34zSNqFcM6KPd8WoSqzob5dwpGECbMfJr7TNXvBbfHT7",
  "key7": "48JgtFMwMmTGmLmrXpXiVyETXWDryhCwfgDTQuqCp7KfwNKK81UZtqJJLxWjp5583X2cgAtdcKh7z2v5pLTbMfTq",
  "key8": "2py8HKAR7B9tov2Bou36PmBLjrBW9gGLeJYD9657gVvtV2EkQ1WxLviZ3Bc1oB3X2jtD8tvsFmhWpBquJRpue1wx",
  "key9": "2rzdbQJNH6wEPbFaPhvqnkejzEKMSxzY7aAaZjyj4DPzJxVrD2pvWwA1PVNAs1HHLcARRSXUAc5bqdntsdLTooGX",
  "key10": "Pwtr3nH5obhePLhe29Sabnqtx3z3EzG8EUvq9AS7pVHRkxH7mA9YRpqhHFSbqfaNqKg7AKWHcUEMdMzGuZodWrr",
  "key11": "2XVECsJnqLkesUW6AFL5wH7cB6xcCtwa2AgNjDYeBdNXDab3btwdv3nxe1PfxgW7hfckA5SR5FsgYgWdhr8idxPS",
  "key12": "3M3Wy3HpGojCC9YNUYK1WoQEi85L9xBU4kciuge2ydf8adYpyh9jLJMFqtJAPq62SSBmQRyCNys21MHZn8NXXN2A",
  "key13": "FeteHrHHMmaVSnuGd4FQLjyqeV2g9F85F6cDeSxNjhDjctajqKpRTEEwpyG7hx8UfVefzycii2ATM3wjnAm5YmA",
  "key14": "4wWf7PeHfpq3N1G23ynwwc23PG4BBmsh1MxmB749ciaJx2HcCsLXoM3tzsGY2XAMdDvpTnQTuyYD3Zj5cVd4mY6P",
  "key15": "5YvFkenvT52apWPJmTS12KcbekcDS3uoGLh1734vDsYdKBwY15HQQuFAXWxtydNhEgcuxagS27a185XExVvTSeBP",
  "key16": "5f5uHbXDeoM74EVcXP1YSTEA7qGBA2gbWXofUWAb3c5pkU3yEBvfJd3Fo9RTDiYuLRMViPKPBCLhfXBxK4FHZibW",
  "key17": "212rDYUqoijW53LCKHUTfDDkNVVaFKCoGH8JgWmdSxSkUaxubyxSw48mcZQbY6Jxt3UgChwxustC77LbShGmVKyw",
  "key18": "2kddyVif6f3AzPJVSH92ZygbgXnTupty2MPnt3Gv5GtQscbv5nxzSTKsukNgBk2Rhnb2v2F7uCKZhjahNJxHFWfM",
  "key19": "FSpAtz4SZRGcMH9o3ipEoTmfsg1k8867wQLGSMbBFgVDq1Ui9U1JAdvftPAkWJBPfrqM66FmNDr7htCou1FQcVS",
  "key20": "3SbgBi3ZrskeEXvZpti6p6ZTJkxmAD7Zvw2VAt1N3zj39cgVCX677q6on9eSSQGyWJ2UKJuT5VLBXWfe6EVazGa5",
  "key21": "53pqXv6yuzR91AAKF4mYr94YXrR9hcCKxoRJuo7vpZzFmsGPLwRKfxfm1mDPYD2N3NAze2GFhxehGyDRMQkiWuEB",
  "key22": "4VwHVSdYUQHTQsnARhfX1rX8TjcPvhpFwV4FAqVF81mdYdFPRvp75h8gGWcpg5Q1aXTXvv8d2mv5tJv7aEJyPh1",
  "key23": "5sNX1RBcwqqJQ2MjjksrGgfm31RcUQizudV6HnjzMzAspNShhy2usYm8egECdzUbxBmzbQZpfQBa9f3Lqpsm5Pbw",
  "key24": "C29UY4emQzHdYyof9eYYFDrDcX5hm1pxmurDzTAQjGKXecGqZmDoAfbgeWyuwLzz1CHjDr64mSud13ZRKwxSRrc",
  "key25": "84or9NUqcY2n8ckjHRnTsXHEEUbY29r9QE1Cm6i2kBh9VK7KUb5WREdZXXLgywkkWT8CCRjbqjTs8jPUYE8ponp",
  "key26": "XW4CvyUFwLWTjKhFmbwAZ5ZMSDEnYa1awYohDaCKUK7Ui5Aboyd1wVVLbm5tA1U9fG3fEGVqb8jZL8vFXF23H9c",
  "key27": "2jkgwYFShMm3svxrW784hxn7C3FupodbJYSEYbt4AygiJC5YqUC8xs9xWt4eoLnKEcJqgDqay7PR5RhSVwcxoc3m",
  "key28": "2wsPhHAfmwWWMasWhZ6NbYuHSjW4FAkUoSYbDDdp3sezXfZst8ZNc2x6Kz98byB8YUV3my4xa51qx6z53GnYKcNB",
  "key29": "56CferKqUL8Vy1mAqdfzRsrzeZsGsXKCsCn8fWzWduW6hDNdPswdg2jjQutgog7aiYy7zuNAwaQY3fD5NpTbon3F",
  "key30": "3Bnu2EYrZ43W8o4qVGtf8C17qbcvtZsXxYryDYHmc3tD242nTjEnFeqyvcHV3smt64DUATfwB31Txv4zqPFGddY9",
  "key31": "5z3t684mudk2V6CDLsKN2u6gyyfT1GBFRdUKn5h9WgP8roquQGH3SLKLdkPRtnuhzY2v37yERoA3UME3MQpowuzV",
  "key32": "3RoAG85cFEWcLN8xrVHezEGJYvVXbghgSFDJsNYn6gDTadk487LF7bys1Nexp9ktBKSwzLyTX8beKp4oxcigEKn5",
  "key33": "3uUqn3fK9vzK6rVoDZD7gCJd3PoDHgNP9tok8zPsZr4i96vYpgA3WpyanPa7AHorS2pSjYTmdkwh1AdfLoJrA2RP",
  "key34": "4sNQ82iPrs8gF9hXQChTD4GUx6rQu28mnsRMhX2yHvahgyC8Y7GKw2pkuqucZjoFoqh29wyoTbJh7twk1163ypEi",
  "key35": "3etphPZJPjkf6TAqFZcfhF2DV6PQ9dkPRqS16RsABm36a4NGyYgbF1eH5BfKiTyS9RkcdHbUC9LLjm4sHR4QbJJ6",
  "key36": "5wkcNb2DUqLXwzuzcXC91Rz4Z1Q3w9DCQR2JSdRdNM7YuGhtcjDAzFBEkSXhTP7k8mPkvsc4FG3E7eVHW5u1v1Ss",
  "key37": "4tckFqgZu9r4c9TpPiHPs6NXJ7zHR67VAZXyyhnN2N7iRSuNMqMKATVbZZmokQvkmxaW49kxFVQ9VByvpX52zzKn",
  "key38": "38Lxv3DQNS1LSzX2nDAv7JbqW1hPisu6ic681e3McHqWtNHqCMy8bwNugVZGi5wk3efME92P7hSpJ3AKB6DgMo3p",
  "key39": "2wLGY8hDiDdGL5BHXViqPEiZzLSzdEzHVLDW6oBnwyKAvPdN1dfCKCunEZmSG7Mo5KESLf63Y4XgdLZBybFhWcgs",
  "key40": "5JkXVtKXvNozpuZJjGEJKgEEK9dzDyQiqgXW2XduekXmCmuURK9WRpeBavhX6RsbvHViou4utpizZyr5smQ3mwzH",
  "key41": "3D9G2bsQDn6YW2u2wcJ9cXnCs6wt8ku8ju79f9pKUpDQSGV9GtAqU1Wam3spqG64TcKjbz2weFRxKuS9gQmGPCpF",
  "key42": "Fafu7HGmTHoKN4FqaZrRFQ31Wzps2VcrLGquTgLsP3WrMLY1TYEm8XcNhHYmmYYnXoAB5YYTRSXGy7ZoWbFa765",
  "key43": "5ALSQ76wvHan3zYouJ4seR2YcXd1BcgBZWr3RYV4hQFjuqGcxfX2mHWJESs3DfW4aYxbFb3yRqfWKPmkTb3cHJas"
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
