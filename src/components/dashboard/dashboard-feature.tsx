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
    "2jgAV8LStymqWsbdq2y2uxe2sG5T86s9U7yQrapbeByh2k1RyCQcDHU2vbASFLP6cCAxZtRxpXHK8azGdXngCcZu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "75SPjtsSSTQYNoW654i7DRMEra8Nnri88mjagHofGhG9bcG3j7zeggVo1GXPfEdttEtQPAhBpZ13cqwe5QZvWgb",
  "key1": "2H5bdVymeDFiKNTzHeUr154co3PdMCqBvHGvL6Njj6HnVQnoFmreUfWrAjf4niqUNxDNxYBTCSFJmAQfuSNUTBdX",
  "key2": "3L3g3VPrz3Vy2pDbtYncd3wagYr2L5tFGTc4uHAnBgtMNg5KSgeJs68z1PEDsig8CVs5mwBRp26FysdfKydnZCu",
  "key3": "K67vQdZszDTxHBwhAgS1akPZqfjKX242PzP3K1iPqSrGZkNaK3pTBbHGrgdGMbnQKSGEV6ydoF21NDziHjFnkA8",
  "key4": "5cprp7CvXzZXXskiL3eyXAb4MgmBiVLHCXkMPkQzXErCXUW65GYVxvRgm4tzBgkEcxFEE2NK5CddmaVgZqYTnBE",
  "key5": "36EqxvTyu6DBu128v8cy8KsR2Z7MAyThJabSzGmQJAD5ApkBNpRP9k5oPctq8EXzHz2ZbN3mg1YBH3dbjT5ivbqh",
  "key6": "UMp75xLmysfyfpPfN6j6DbsneGcebGSjGX69rbXyhTHrLcxhow1ETCHMK9cM4GSoECakCCC3ytEdjiMBtqgpUP8",
  "key7": "5dgVMXRUm2zUiVUbGx6TQ3EViQ2rEBQ6RJQZJmLEBWPUXEtAcV1HFZF5vN2tGtYU1kb7fz7M8hZupe7w26zcUTho",
  "key8": "5upjHrgbgKEZnALmA7PZucpcVp4d6NwbsJhG1bzfzLxFALKYYhS3JYJk3t7YNk9ZhLmkc6qbhLzGhKTGQ292jCa3",
  "key9": "Mde6dq6aEfVnMY6HEEmnrx51YP2UBHmrcrT4gGwQHzTLDXzXxmSojF12atPhTXrmcrL4h6afwUQvebSfFGYreUB",
  "key10": "4V99iQCgKDPWwe3kWYtrH5dAcJacnvmYwdXGVT5pV7nkyTDEuu6CaKntM3ab8xKmd4YkVZADmtkb5LMwKCkETgnr",
  "key11": "5Jrpiazcj8KnmpiNb616w2RCpTW6DrrVJZbXTWuTuTZCmpAJiQxT1Fdq2BfbXwc8azeR8txFhU1D4fJtvi3zxk23",
  "key12": "5rMoPCzM4M5AURG4GTHvgTMGACNMuYmvUBcQ1aWag1KtxnJYqbeTJKFuAh8N6v9U5EQ5qeXwTiZEvWdCxKiWcHKd",
  "key13": "5wC99M3RBQ4L6U7f68a4Rnt7pZ5ZoywmUfnoC8VxvGy1WL1h82WmnVsn2tASxFroMV8PYsUSKoMmPGkcW9zuVJv1",
  "key14": "5a2YtMD6onCZghkhh8FAwQoa7zQboWxPNiPVHA9AMm699H5N7KkK16y6vfXiGrro88HtdgVsb7E1PFFLYwniEdHY",
  "key15": "3fJLgbpuZ9NLdS9DaqQFCdc5o2XaKrvszadLtrnDBKxd2wUrXUMuq2c6PMWzvC6navUmjqzraSwHpr9uX61KfxwC",
  "key16": "5NYAZqkeuCZJ5uBUGdw1v4eZb7EeuYFTiyHTcd8Ud8fjGHFzACVgv2SPfM3ii119bdvLdK5o7vDYJ6thWMfSgV3y",
  "key17": "2eMKZ2YeGwrAneXQ95dFWSmYEqt2eS5YDYhShPxcwKMMy9JLwRzhpJQ1rpkfYwX4Cvi36HShQgEhz4gX7W9Nry2",
  "key18": "2WRZeSaRKitsjAmmGA8oCz6tRRty6Gg32PDi8vKQp6jg2uvMgxbct4BV1vuyTNphen6LMy9d4VsHYGyJcPSWjQ6p",
  "key19": "3FLLHNKCAiZQPXoVLkHNmswhqRgMjJKBLsmGbBAag91TJEbUgNa9ZZ1cpTwkABrZfbfpHLziEWNFKbnjWtukvkPs",
  "key20": "5hpNh1nPtFtQkyxcUEzoxX23NH5y68uLYt5yBuV2x5DaKEYUECStDxXBhWXNjWNpqtyTqW2ehnDtAPZa9qAZM1Rk",
  "key21": "4DY68VTLBac8x4bVxjko7MnghWq8Zprf1N2Ef5A7iwJ7Bchg1astQ3Ew4ZiRUowPQurBytqivRfcCiGFpQyrruzp",
  "key22": "5yKCFDaGCpc1GKDxEs9nveQU6RVxwcNNJnYcJkD4Q12qBme7VCr8L6quPW3hAF5MFR3V2tAgRTHfH7GSyAJD16L",
  "key23": "4WTvuWtGBSAN8E1MMkb15mKgtHbFKsKRsz9HTzpGChdwCLq7c1nRYarvoL4LLQmMAVGYpfMMKBg8XJrnRgjsdM8s",
  "key24": "2YTxL5fjxDFbFz4Zg7HrM3uHnzqaRTM8AZkbJg9JjCmXK1c7bQhYM3pdpdaeahVYzscCAtNJhMiAJmsMBMBnQQSF",
  "key25": "4irvtQ4n7VuqPqmGyCDUeeH6eVTcCv2GkvRTUCU1GNt2GKKEN3Xweurxx5M3v7hSbtGvcGURMQHSs4WS9N2h7hbh",
  "key26": "tJhVhxHoMUEGk7fax6fSmB1nPTKfkGmqqdtsSGw3ePNt2yebTX8y9XXWpMVwfX6R5BiyY6vhh93NF8RQokLcKTF",
  "key27": "5JNHAAC94WZtoQVXZziCRyV8DrvS7Ume4K5Za7Jkzr9X874p7BsYcTBDffpyBwUJHVnxsPZGrmymaeSsWfDVYpvp",
  "key28": "5wVrsJ3AZn95AUQ3ryrax7ZWBqfygWFXc7TdWVh59GU3DLaZz9ZgCVijHg8n1N6wrpp6RS4262U9QVu2tq1Us2XP",
  "key29": "3QH2S1tzvBbHqDzDyKY84X3r1xCu6QmggXhU8ULTuo4bau3aefwLDKU9WSsdvdoZCpxy64CozkZZD1M51L4heTC6",
  "key30": "5PHAhNBMRQgpSU5fSHtRSSGEAu7v8b5npHYRpfY4FbVXVepk1aLB8CLpY9m8siiKxgVgymuwMSkndteowfzGNs9c",
  "key31": "3U3JM1mGEt4HBS1V8UYoo4N3s9hU5ihKPtR96zT839Udrox1NQV3JVZXUVPvmj13HeKbXdKw8LUyuA9wWjhpzBuT",
  "key32": "ddynEw6y7ByYwaqTYtC9dCj7ZEGL8oMSrhovfXVRjCWgosqHa3HknJWdx8LFw2r7RfLbe5cRdfE8seR4epMg3qc",
  "key33": "3cNCkuc7GgEQK6Mcyh8yAsvQamfS6kyoJEGL3CHGKPmSZ24s6YoTPGfWV67yVepfXEXzdETTZwGGqTxe1aM67d34",
  "key34": "4rJfPxQe1M2xg8cjq7yMZoopmRuAsmsqb1mReHWeAfudPy734i6bJmnEPirDo7tbF8FtN5nSPrxmxtSCpzansU1H",
  "key35": "sEbjENPCPAieS2b1vmHpbeSEBdzU2koytqjrKi2MwYwFhU43aoqBHuSV63EWc866HdfEsGW2hcMFBYGwiwCNWev",
  "key36": "4YKcbJx9Th6BKa4xJVNDmShLEpcX9K1ivwbn55jbW7r4W9Mv3dV3GJb4iDiGoijoBPApAbhQdxFRYgddwpRWS8au"
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
