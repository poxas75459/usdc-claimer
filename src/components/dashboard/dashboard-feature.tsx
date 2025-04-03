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
    "2gNRxZaobjqifYg93xzhBAjkkABRPdKv2mWmRKok58GVP66CpxNNqsVz2uLzYeHn8xyeyNtzaEJVTmMELzgDY4WK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v5NMJDyQHcwP6cdPAQfn84Sp3Z3GYvpF1J7it2HUqNoRRopBLQ91Afeduej2jsVd1D4v5pvHUyKSh7H3tTczkJ8",
  "key1": "3W1EdHz6VrK4meruEFRwZEKDcxgsc1YhTCdCMoKgF2N5wxMBtuDGgUNefn8vAtW59W7cncMn9fJgjjAoVDnurDqH",
  "key2": "2E5zitvM1foB7dzdJpRR8LmPN7JDTdYfuYJmiypSwcj9vcHSpeZxABtdbFztVF16ey1Suozx5vBwKff4Nz9LPCbj",
  "key3": "3sv5ET5WsP81dEfmGQaZJ1V7mSucSCyPxR4j8hKpTRQESytWdhQ9UWo7gQjx5EvK8huSq7CZK9YZYjqcZTFKN2WE",
  "key4": "325189hai5p4nsrf528eL8wVTUkfyk18mFFij9Q36qhGiHsHNg46QnYvBXPjQ7EQ718qzhk3k5XfBybgaHzzhj5t",
  "key5": "5wHB14C7yTaHg6c79sKsxF3SE2LCf1XL1uKtNDCXMDnU8AL1SUG7tm3ho3hCQRARbKXBiemDk4Nz4AKaQLUHoJUW",
  "key6": "3oyWNcDbFxWg46H8JRc3PY64eofizLiHeNJEPou7T5kDsufPR1a2dDcFGA6VCHKQ4n5QtE43ZXZss6WszQi6FXqM",
  "key7": "2bk7dDd92oNbr1hAapo1RUeDdctce42m6FBvmPvKStR8oic3veZc4YbSNhsHvt1hGrz7ZgriNnpo7tyu5MJnoRVz",
  "key8": "4Ua5oLsPhzbYNLdUzR4jBah35AvvAaLFUaJBW1emAyn7D7zFa1eS9rs284aYFgys3tC2mPpE4b1DMpfC777nAi3u",
  "key9": "XGnep1TFX3xRKaDJ8zfHfMYzjE1DvPKeytpX4yadeKnBcgyJdKf1nQPX1cPiHURdYYZVP2SQQxbFFhZL1DZHHGo",
  "key10": "4Yb2qToK6NZEU65u4agLPMpgtGnYx2hic7hG9qTPvntNYgPmXiF2ESXREuaw97rNqFohsXeQBs3S6SKT8j7Bb7Ss",
  "key11": "hYWZ9YLDDjCAMVhg453H1r4nQqqKdgLPccUqdv7MvAsXZdcBXnzYudQq83yegLWW3cSiffC7fVdenogyqjEHycj",
  "key12": "5UNNrzD9GoEfiEfMr8b8eEZfRTqpahh6Twi29VRjyqgifcfyyqD8HSRoqCPgTniyKHcHk7uH2pKjhdSLnmU8g6s2",
  "key13": "56rheakkGWQfgtozMvLtqpvNnuZiSKSAHCDoUrbPkSu2bYd8DBtmiMzRZzNgp7KY1cX2bUhvPKRqjtCeYA4MCZ5X",
  "key14": "46ekWWpr7UC31g9CBshodHS3JZPuqArAvRwq39BuWmAacVEWRAguwEEDfQXr3Ts8J914Z97Sasm7MxfmdYNYbSfg",
  "key15": "2h36Uw5VqNuW2tYxVcLg7vpyrCKy3osSVQxSqSAKKxWHGkHKQVH6VVyqGBgZNMHjrQp6zfLYWjSUipzC3erJUmNY",
  "key16": "2x5upDeapJYAXxwy7uwwzHtVY2izyAxs1CUCCo4QG8JPWatWJyvQRgL2AnhnJU78m5L2JQtQzoHHR7oJtXBU68EU",
  "key17": "4SehYYHC1KQRe9a58vRyq6P6CGY78Km2v4fJ7jfSRbwHFZwnxe6QHcwta42eHkGvMR5nQeXbkqCWCqvRco4ywhaF",
  "key18": "5DfJegLZVnteELCf9PKLnkUsymyqq96GzywXPeM1RqkH3bQLnKHMvCYmY6rWd1DHMNMmeJtTecdxa7b8XKFS8uDt",
  "key19": "3CZXC33j7VpX7dXgjo8dP9BMGhGKBaheJARJiMPBDnTbYoNsJB3eiR5chtMYHZvHJ2esw7GbUAeCYtTL4UghJVjb",
  "key20": "3Ex4zkZSyy4LKWxgRmKz26cKX2A4TCFCyYiTeS6dfZPnb9UbYZuLrKMNoM4N2SUWcbuJ3sp6tLzsJJxbPRfb8U5a",
  "key21": "5NC4sd9ZLLUqHHHgUbtXuwKHZbg8TAyhkiQF1pjRcMdUgidLkRudCLpcVegdZF8yz9NBkcKmQGfb8LPox4TSoUyc",
  "key22": "3GzPwiyFfJuQD7V46czzUgnWHEqnh2YzjCCHQm1VZRKU2bhDHiYBJ8mFNa1AqyKg93y6VLHBDYD9hRrEpPkKrHHg",
  "key23": "4KiXYr89PZdEPW75QnasiDfQXD2miPNwC2hCZ5ivbjNGisuHtfL8cZCgr6dyCVGEo8FixJaFGuFeC85eZGEncyPz",
  "key24": "4aij1c2QsFpTmUvv2ChrAjP5AHd3S7oX674XwUHJgSFpJ3cvuiJHkW35uUjbiJsCh942EdkPj4XdXVhTtTB5uSW8",
  "key25": "4E8YdttZrzxaE9BdRbENvzgWXDPUQJmecNMjnBj4Fy8BNsCLyvgBwWgo7NepAQedBafsX4Tzca8edfLVcKaFppfZ",
  "key26": "2cMWjEUcDdMtS6FBxiLghvkxGYSJdStpk5nQiHXRwTqQzp9bMa2Rg4645DkQNeV4r6umXpEvxNmdmxsjPhoXGoER",
  "key27": "SxvmiGMKqg5t7Z5xAEonaNr1Ga81tHcUwwvLUBeR7XVuoT5TbYaTtf4G3qxXziKQ33cXGiT5xS74xLAn2JELJJY",
  "key28": "4RfF4D3fmwvfQBpMp1hXHnWy3FoFTZsqWJSeuW3MQwG49nA6nfSjXPiqmHpkPQdChchDwTbNefb2LQEFvd1tew8B",
  "key29": "3rABvddXx2LG6i7tFJKafyztwxr89q4Gj7XuKTEvZQFfVAgfJcVMCgKBCD4Mu6vqABvzHNtu6KvMkQthJjJFQGEf",
  "key30": "4tPCbaYTbRpR5osLc5TZ6Cw7aonahrn5syc66hbLofJJpTTghwNAevb5aVQR7a1R6VzFuzRjFQsdfWpvumS8eKWD",
  "key31": "5mTS7QmagoJR1oT3RkXwHPu9DaXtnG7a9ySJF36th8EBFawiH1Q23MHaVGorXd6mBRWAtrpegCzMr86zojhviy38",
  "key32": "5wDP1gkh2K8JARAoETeu1cJLEo2wMBvMWAxBZ9CXJLUn5eB711YHrJ3gBDKAAQ4F7SDZAaGxjEv2fxbcVvRKg5Hp",
  "key33": "5xodPq4x5kufPCyQiBWaqaFxHJ4cbudzbX7QSV7RM67Yi4mBP4VsfaFDLxgi41D2McLRYwZpuhPH6pmdKtuu5Xor",
  "key34": "uqhvozCoRaP7KfbLodZZTDQvmK6qr1qRdvpayZXjobqSk7uzweDJYnkbzNXvhMKJKBynrCUxTfX9kPpCa5JuS9n"
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
