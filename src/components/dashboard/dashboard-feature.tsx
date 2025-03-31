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
    "58sRHeGXuqLegv5FrLP3MBUvSgd6iuN6DaCrqsNp9LkqPiJNVf9wqh9LmoTg1AprNZSHe3BNXbkdb5d7fqtitJMa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NrypswZH7uZSVzWZDnpvUwT2K2H5TNj4RW68uePbX8TiYTgyvxRexAH3ma8KPSh2Y31eMj5MKarGsnudUzE374d",
  "key1": "5Hymk2sscQst96tT8h96aMr5LS6qeC2K2Egc2EQqLDs94TjFi2mVjwN9cA6XmAdnZGCcbqKtW5L3c8A4MNEJ8Awk",
  "key2": "pdAopLDME2xjTPZjgZYe4cwLpZHMUs9jJ4aGxtCpVDaMtsWgesQbsH5wqtLfo63XV1PT2asWdtCFzB9s6LhnfmV",
  "key3": "2vyYgxpqQFBTYVaLAahTcsSFYf8KJVaNgC57brwmAEPcceYcbq2yFVteKwUEbfW7psQBmmn5hFMPnN8SaUreyEfh",
  "key4": "4fXEb3s3GAKD2dHDgjvhtiMPM4jSzeQur3WdG2Gbt1s2mLAeBiNzcLTsgaUTyGJ9cxWPNm8AW46znUYdpMFrSUmd",
  "key5": "DmBVVeETqH8ziwx6JLMnHvDpboi6rKkEMMGRv81YEG2uCR1J5cZW8xSAWUhwSPrNrGsGZD1pyjabD1VncTFdXaf",
  "key6": "57NQYwUgPBjQWKCPfXvCYsRyzRQhcfzVjoL2sSdqqTciDdExcXL3aSXQEGdragqAdLh9ebzQj3god6p65RgLwcAG",
  "key7": "5Zseh9aKBSWyUJPdXSgZUJAtcT6LSena7ZQvBnjPttF6cvh1nnKmp1NknGtTxscLhHZ8fpAg1dXdFbH8uEvGm5ev",
  "key8": "2RvhHFwJYgbD7mR6KpPy61gb6oYzgknQLCCEXUjgvQvC4V1S51iYNKmkAfmLNMWbzRS9f3WMAy5EACx9g2SdMsKm",
  "key9": "2qAPym1tb9D3Ms3qA5vEoNfhMijcQiRPkjd8JAAgky1sYWLpWP9nSHUmNCzYEjRqtjE4tuLsUtCUmY2Y4yTFMqSQ",
  "key10": "241NuzFN7LkENXfg4hDv3We3VArvkNoUvfUkdAA9DY7CGonYQDB2VyvVjgPHN34uA53sd3SeQConZCmGZwbMSqQb",
  "key11": "2P4sxD4Bw9CXNcVWYvUYhRdWrm4cx8KShvmA7hkNa666eDpvUiYsGiTfvmJJbR7g4Loojw1QAzdiq9BbYhGnQLhp",
  "key12": "3RMyBYhj1f1CwwPm7zzpxTjg7aGVvr74m5znLL43r4DzCKunBVpMffzWPenFbiL5pN2jxAHqNzsqbVnp964Ssphf",
  "key13": "5QQsEkV6QgkJh6D4EUynKyh6LQjzsahZtsuwtoGAkyHyAUWsLhZp5M41cSTgQLLzUVgd9tQLhtzpmsm8LvMapUma",
  "key14": "35BBmRZhRTq2RMN5wTs9XekPtnRYRnEuUeCcCG6Gvz1VkU3WPDmHPMgENoTXew6jTGC1ihh7tGxdYCvR1dp7Sxsp",
  "key15": "4BMcNk91MAgEx4vFFnNPLVBWQTNoq2u7GPGT4wcK8KYMHpEns7PyqQeJUMHQZD1Qr3LLjvtHbm2pGD8e4x5a5Fp4",
  "key16": "B6dUab4NXoCEX9BdNXgdEmt6UPeatDLdGbVHmxNTzZqkYj2rLuXALfSg5n3VrqzriKY8TMQ64TrZzhr7d227DSk",
  "key17": "4WLW2G1AXosJS4F116gFBGsMNwzdPamHDbWe22K7RMQMppP3tXBTeJHdCRonjKJ43jJgtX2dGm1z74Z3vEfA4ea7",
  "key18": "41HwbpNodX49qkPq5YWJUhXJKB4rRyKsBJjm2xjtpgRNAC6awjoqEncVX5XEMZRjJG1hWVSa81oXXWZCCEyV8r5E",
  "key19": "4R2bjJnXLxTkP4XFYAAFvdbfjXMmXw919bb6nDMd5AZdzs6g1uDpXHv1Ga4vzFws2DCJs92jmv1sQBHqz2sQkzxd",
  "key20": "4zy4KPgHc1yx7xE5G8CJbkuh4gjyKuyM3bcmuPYuASmp5Fs4135nvNEfSaqymBEFXvNRywqxAFJKtmujTXyoJ6Pm",
  "key21": "53mofQfH9QfFry9KA7bp2z5osZVr3abt1V15bv9oeNgEDX9uqVN87QrMrRBYuXiXEY6gKccij4ZWUhRHb3KLNVmE",
  "key22": "5Wu3TpLLL4CnuRgXdf8TaUcoHyXMGAD9swzSwYhZz23TE4kWWRGhFM4gwV1JwYqppHabW4i3a4xDt6BTqRmry3tu",
  "key23": "3Dia4tJ6bNjv2zvDFvRkH6XH7adMVqJYMfFieZveyAPWDPBxczcixgkdeEQa3iPEmJzdLUNo5m5i2boaQ3wVHMKM",
  "key24": "2uhcKvb6EgFV5RQpz39uBXLv7rcfestU2gVShfjag61MPciw7x2GdsrejdGx3NDQgA6KyGxCYiWsRbEJJFDvbv49",
  "key25": "5B994iwJ4gbpzdHhzxQ4FBky3hh3JSEiXhFkjPPWkVYJQdEuq5RaCLDNKD8LScMGQxwX3xiXpmZmn3UnpCNxbLZh",
  "key26": "P6uhWZqYMt4WhL9tzTyDoUgnbLQj1LLuBFKmecCjk6iGxWeL4w9XHPyj4nhtviAF5cqW1GK5j6ky9BRV3GgJkMN"
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
