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
    "5GH1VfzeWvQEWAauFFaqpovVWoHJsJd7fR7xitxgx62z9MXW3ptPy3qbwwtQCp38BSF6YTFof5fAbjpAAg7uesy6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36BgY7LtgPFcMTNctSqFiDzD5e6QeSsuQVVdhsxQVqFJJYxNyX52YNLcwKq52MPSz4bR6H1JZqFAQ4aFMpybRe3N",
  "key1": "LNAUk9SRViW7mPMPPGXvogx3bDqRePdFuYRLdt97TGig5ASh2Z9T2qWTFaFujig69Bd1TSU4gPC31PUNBFjuQZ4",
  "key2": "4SJnQhdxRo2bTaKjzsS7uu4zFbpaBCWFpT37SbwcGH9GMBNuXsNfu5jYHJnuhTPmTA3uHW5KDuXeFRTKjS5VPBwR",
  "key3": "2iB2PAa4Hus7q4fwtYB5KHbzv4JqRU1xbpU8zVrTJDtqwCKUi9iXiwEpaeuvCd77F2S7KfRT2WrN3Cb353QWS5iz",
  "key4": "5atGyWJkbF9WMp6dJvacbBSt7iC7icH6Q4oQmvPN2Pwrgk5QZMkJ72RNWeTPReboSWEE1FpvcaA7SNTJJrV8VXPi",
  "key5": "38nNzZFUtCDgerbpRQBw5aAFNV1RkWUS91LNsqdpK6xnsstGKVh7vfUywzyzmX5My1F2DbQaBnjnMaP6uJwAdqCY",
  "key6": "haSt9vbT2fCzxuSqL3wU5EA6R9SUhob4DNwNXUxzvyi7TySB45esqVk7fGkdKFwMS5LYYvcahvr7aKNRdmM6j9j",
  "key7": "9UqcjVW2fmiVTuZjEFgTMPjFjyoyKEmz36qZ4r64p2hqf5oHD79SRqZAuVYGG2vYQUHwzqFN8235Xp95uhhktuD",
  "key8": "AGvZjGVHmYwJFsTNfbVUsMztnW6YUugKtQfa3DRFrM1eyPSz22HL1wFdjsC9iaNhWFpAz8mKgwbHJK2QRniDBfc",
  "key9": "4MktQNxmsacQev45Tyj2W1a6vYkwnLxvY4NYTVcta5YNMimqhGKPrT3WT61KDy9F1ZPKZjBUL8XPNCLHnkZy2kpv",
  "key10": "mQX3iXV6hbE3GYu74E8uC4Xt8FhExWg1PYHaMihibcjtSuiUs6FQHRam5ncPyVScrhhXgM2izC94CGgTABVxZCH",
  "key11": "2Q4tpiLHn7bXpS2zMBarKQ5mUSaKrSH8cArXBiL6MkJuRT14Q9nXLizn2jpLCUujtGEXTDsF6TdNoCKhm3d6zQ2U",
  "key12": "5y6UeJQTF4hjudYKPfHNK59jifqEybHY4rH6euHhTBpx8KptyNrwnWithwiccKcBs71eMhKEsyPxkGeq4c8dx1n5",
  "key13": "5nCit5Zyot4U248oE2LfdwUhm1nXiagPtSrX5qADr4xeDgssTu6aicVMtSY3MhozZhPfUGp183ksaiHeqLhqNbMt",
  "key14": "3vQpFA6FZQ5PHtxd4F8ThcrP6QNvxsZx16n2BLXYP7P6j3SihyXoTDpiy5R34cfpDXHZedEEY3YvrJan7VsuAbcS",
  "key15": "31Rmh1KXhoijQJrEZdkejQyC7mTvLzZhPrtpQVBLARZ3rJe7EjUHHre85oT26yxkGocJAzasjkgP7a6bqAQZKLQp",
  "key16": "2s4Xwajw4LzxL8EZChNMkXhxaSUhjd3QnZnng7EyJytM8JPCDK8PR13UANBpffWfG8RWntm5PqpzreNBMJuouHjq",
  "key17": "4JrFJKVxaV53ZjZvT4c5YqdeUgaMvUaeaaK6ffXHkLMJMwArkmMYggAfGyuy8Ac9yzLV7nwykQMZ9rYTL5K2GADK",
  "key18": "3cdfp7ZUrwBS1jCyio26pwDrTwbqysCGqdgh4Jp3td7J66h7eyUVni82j2jUMQ4h2rUtQJr113RgpYkjmG8ENUTx",
  "key19": "2q2higeybrzw6fTekdNL3Y2T9HEyWCjQsNAjB76WuU2oDWyF3ffkbx4tfh2L8nSUassqmL321DvMCwff77cYZNtn",
  "key20": "3ijvuVYHvt7AUwQcLbDf9BKL348B3FKMH1KYFb2KxFLAkb2kaH1juzyX8RFQ3Latd2Stci2UuT8aCYHGB1KSVTkx",
  "key21": "dhsSdJHTfeMd26xXs4E58WuLypdkghyCNwDzYR4j2Q5PqQs5HEfhkuEgAyLHUkuRCxBUAuTo7rWFJq6U7bmPVvE",
  "key22": "3eJgXkJ3RufDQ4SvNaCRp9EW7V4wte5wtPJUrn3M21LDm5uunzJFFtRUvLyXb86aq7LzASg326nxJCPsoEwTWDrt",
  "key23": "47t9L6D49ncc3cSQGbYLQEj5UuRE4VqhotNHrpCygEW9738z2jD9NUzvMtA6qyx9eRabM4RJYfgzPoDKUADyXNgf",
  "key24": "5Yr7unc22BuPtmDToFcaCLrUHZPkHfRaoMHE6cQj56DpB2sQtpfSLoc2v19wW9SsG16hb6SWtQQxEKGpocZxg1q4"
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
