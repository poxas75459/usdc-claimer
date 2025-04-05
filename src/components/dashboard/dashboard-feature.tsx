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
    "4fSRvtPPJa9LGUQd5FPYjJ1g1iT92qgaZxmx9xfWZ7xZHMjugUkJtX39f226d2Bscp91uyPrjjWn77PeHDyZCH5V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T69owx2kXZWcsQBATUygTamBFPE8MJDcSWgsSdboNYPrpr8zBKNRBNf52tqKmreguTp2fG22kc7zQZjvfbDwSCD",
  "key1": "3Rwt5RxkzR8mLrXHtbZwCB152UFmQ5cGEkYTQNAifMugv6ifkvbXicLDGoN4x18gxYX8Dz59jBanFzBHKT9hvn8B",
  "key2": "2TaqcAZK1D2K1xRFGa3bJCsiaw9wdRkLLtnszfZ2sn5oQs1LrDnXLM8FcMBupR3dnYxTu13JNdb2PHztcFwJ8hNG",
  "key3": "4hLfSHwQDR4tTf8CcS9zSPjhC6hi5GGXFYnJrbvfuSD7wEnPFC5gdWEgEceKrWbjnG5smj1WSCoxJKLbVm7ZeHd",
  "key4": "4W5WHnb5pzoMK4ZUoWEPHj3oP2cZjwYx7xJXVci8QHE676jfMZ2s2Q1pXELaVbc2WXPc9AdCgrdN2sw14xsV1tSG",
  "key5": "2rA3Buosv2h5gxs8soKebr4EtA7QDmNsEo7JJRoMVz5QYTN6ESxPu1ERbHvDMZm5HTox6isMZ4jrLhpPCEP9QYHV",
  "key6": "38npGA9a5Hg4tNFAtNsRr1EUvarUXzVhwwjKwiGHQo4zgcZRYuL15zUE7Yn5jZzvQEFcJgkjri1kUzyDopKfYA4h",
  "key7": "3TnUxRYLeBoxck3qhGu9MDMn63fPzwL6sdhLCsvWPaWAZ93aMmmXdbG6pca1zpcu7o79qp9Hk5YeES8zQJBCuhcn",
  "key8": "3g59JjD9A5voj4FJvEWbxVeWy1oXt794J3crAFbgmeTQ7FHk3TFangTF7vKNy627RhBZLYGFuXJUD1oGzMytXuAT",
  "key9": "5UQ5FuUdWiJsnvqY2USQo749aGxfvUJyHkk7LuXqxoxHSr68DesZpHDCcxZ3YgDtTc7vnxapaEtPJ78igE3moboC",
  "key10": "CMDCyZdTnpbQXNnSsWV1VomYkvSq3pDqoCKkAFmihLtJWwKLXCGacpH7if52wMXQbwusi9zonDPpDf3nCmMd5c5",
  "key11": "jxmaTmPBZjyYWYr19KNSYY7BZuBYo3HTyzDUtqYDQFwoHfD4cBNFiZeRRRoB75Cm1fguwDiunUXvwB3H4zENhxq",
  "key12": "KRrvSX1fr1bnzoqZTnCrayXwEhbqAtzZhrx6SM1qKFUfGYtFbPnC3NC6HafeoV9hAb1DhkEKafxuYXempFYVB6N",
  "key13": "dgRGmBDgQFaXLt4TUPDABvCMCLJByWNYrSyg8KH1uAeA2mHKVhHhMc19GRL5VBKUd9dZqUDC2g1Dw4kVmRrX7VT",
  "key14": "5kuswDixtGUm1iuRebUYuLTnFXEaS1KysihDBgX3h9sj6yqgUpbVDFLD7njhodEvQMYr3FbqzkkhUSVY9zvkDFiF",
  "key15": "4ghzMUygLSk1Sn2aS1JdMx9WLX8SaHkD5TFyM2FJpdvJBmLo8C65g1xV2ptvmHz3qXyfJ7yTT4Y4kHffC8QNmpzh",
  "key16": "C2M9rqDDNCjxBjmocKH3qZkbm36PYR7FZd2kHMdLUHt7M8nwznZCq1iLoYd6QF3minbtHGmzuyEGDCpYacFCouV",
  "key17": "2UrQKur8DQVN2RqxNqPB9cbioqZNKoyM1TxF7iR5SFVRes7tiShpScWw3HrM5T4UKXW9Y66S7HYAVhwm9c6Y8aKQ",
  "key18": "5ZumDXgvVt3QDsXYB2vP2g11q9TXCcw8p1UwT7FimoJMLzyt9mHchm7DxUMWLXYw6rvyoqSGuq1CGG5PARyFSxJn",
  "key19": "kyEPAoxbqvMYojpqgMqtDJjPaLHkd7xULhjUNUW38hiaCrSWBtLpVL22mggZFEF1vvFMDGDdFSdut9RcGK7voeG",
  "key20": "5mrFQA2KoFK3WeKki6uqEaRsvBJQu5SiUbKy621axxZjVHkan6NiKUnXMEiMC9vqttkLfZZika4cb1aGTVDMvCDr",
  "key21": "2tq15V2LiJZKwmXXwgAyxS5vzzJCYbrBV3eKUxUGF7ZtEcvCdjUWXdN8g4KSMxH6RyLC6hU4wqqRyi5mLFumf9jw",
  "key22": "3ixXJi5Jw8JhcG5d7L2s5YGXBEVzAUt2iYsDqtrwANYufGoTVmW5yCHfgbi29PexQUB3YnHjFxTAEkkwkVUmoYqg",
  "key23": "53e5pBzieWpiVGfiihXbvxwTfVT69yMzQ2uPdNuSkMEvJKZsqEZL9GVqDV9AcYNBfZVgE31ybmV2kMN3XDYWYQqh",
  "key24": "2kDHb1qnkMDRqTms24F8F1X9v1jvB6yS14xd9MmNUahHAPHKiZT4Edq7CpoWPZhfFcigzakiyGtRRgMpaJHg2JPt",
  "key25": "Li2MNhV6V4HTEgvJpsgVhxE2YqVVAGGHvhCuAosBiqjoxGAjbcVywUv314C8hRT6VrayaZx7BZeT51Po9sVEfzN",
  "key26": "4czUrmtXS2q3JbztvYQtCFQKLAF5uDQgFivPDmgADugmLvEEmCaqDDpqfn6rjnpbhiyd3Q3h9NGKJP546WRa5rYV",
  "key27": "647xt7PTBKczdW5j9aeonyr7RXw342Z2bSv6VQiPmhrH2J52KsBhkhCxFDE6Ep6XUvJJU22xGMSYnSNiqR2uPAZh"
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
