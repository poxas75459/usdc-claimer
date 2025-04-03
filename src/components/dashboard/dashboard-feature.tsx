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
    "4UhdtHwAqQsQr2HSAfxtyStt3NGmxs6Wr9sRAnadkHh3r76ojLEKLtKJiauBmfTuNURykb1gXcqkJfgw8tUEuncw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5puU3EYHBTU1vSRchW3PMS16ZdsLatdUhghrgmyZVxKzSX5pWrfCJCbAGgAPNRbgL9Lq5TNCywxKasvcB2N6wyEX",
  "key1": "2VAdjehBfQQy4rrAjhjgwEhgEdGYYuPtVhqj3mEvKyC1T5JxTxfY8CNzWH7cx8sFfP3UCEAg2yMfHq1TY2FJ4REo",
  "key2": "5XT79YzQnQssRRcXgg74Kk8Bzizx9vwqmyhgnQvwQT1kg7siofBaXJuHqPcXY1MUduXmZFsB8s4P4d72qqLUyqpo",
  "key3": "3FVnAkaL6RbeJP8iM4o8uU2ejYfP37WuZ99AemRG3irkzJHsod4X2JrJTjEsR4D4cYw3ZDXFvQnuLVM8V1nDNDnA",
  "key4": "4FDEeqJj6K3LUpaqxPQKdYMA9JW9ELPrQdokKKqisZnTh1xem9DskpSoWBuKj1QW1iunBXrfLVvErX2fZshD2yho",
  "key5": "diTMnf7HHkeDje2PAb4qGgAiiQ8KizcYjnLtrBRZpn6LBeFJSbuDJECEVKJrgh6DqSEDg8aq7xVPT5vUCbqwtpV",
  "key6": "m9GJqU6ozxhXNptDfgBTDe66MBvJSoZtVk6E3XxbLdUQVWV7rAKbskkMXpmceSdmE5sjsWYedGzkmwvSVDGsMEG",
  "key7": "3Scs1hb4sS7PXhcCYM1k731JfiQ2TVNZzovoEPygUkTK7MTtMG6Pr7r2FJWpmQ3ebXLALbw7WGULmeWGnrSf6eoC",
  "key8": "3uRLDDQXa7ptaTrZrWD4vxmekpNFENc7iJYSsz6SDCgnDVxdPrnsbH95bG6LzNDAerj4bxQpAo867U3Geqp8fNRs",
  "key9": "4SKgPazJoxfBSLxcUjf36WAErxaoVgFbv4FiKakh4eqjMRrHvE4oGjpdhPwGDpAQkgRwHBJEHtx7cPKERms1vrVq",
  "key10": "24ojfLkyQGvGNkUEVt7bTunCUkVyXuCx47Z4CpokHenNvU4N2oybS5bpvFijbRL1beTLgrKbYpyNRDyZHa3DrMV6",
  "key11": "3gbEkD6ViCZbErzYYUaWRL4QueAPX5BtUYGAUBXSHWwGivwAQvn7UWCi95zdq8Upc9YhDKdG1Jd7iUwsVvSPQqc1",
  "key12": "2NJCSeMC9i7B1hZfA3qqqSXJMyN5WYShoizMsSvaftCraSiunFFq9t8ddVCw37CFKoXXFS2Xk8Rsfs2L7rqdfKLp",
  "key13": "4Na1pUaRAuvCmD9S7hvKYedqct7K22cDJb6wNuWy8GH5en8SZn8ob4uD4ZDh7hHeNiFv6ipoNkc5yLSyAbToEai",
  "key14": "31TXUEwL9NSu1AKsWoFsfuofqi35CY94wUXGwaC5qPVEYDhSw1yUcxj3hdMGdwB2xZe5ZmhCmSfTvLdvMgZUoqV3",
  "key15": "42JwekbZCC8dQZQJw92AnaTJmMYLxs3kM9zXHbdCfNvSVydbGXLutcH9XGZburnq4WfsDcw5yX7acjqt1nJMp6QW",
  "key16": "3hEf8HeHeM4LMa9B8Dacy9UQPG2dqdjijMBpsA1Y1C74P3xtkRvToBeMDTRNLHvcqW574E3gtGkKRBioF3wwvjaA",
  "key17": "4Tb3TPaStPtZDAgZCf67zGRzJMgcZUGDp8MgHzx96oUQM5ScNc31GrXut7cJA6FsnUGvHwsxHmfiMAKYJYE39voY",
  "key18": "3skRiPq3HFGCvbQ3yTwNdGZfwJ9WRYa9PsZ4m8Abkd9JkanEb1tYFeTsQPsw2Z1WkUPQ8jo96eodozfvvCHTUhcy",
  "key19": "3W2FmhkSGzfR489Mo33dMThMamPWRbTMXG7ARWFtGTxxHgNnPgpSLX8DcJWVduA1n1ArNgxU8dG5JFPuDUwDWYxR",
  "key20": "5pNSSVW7YLpTjWML1CznLWRA7cKiki3y5YyiWKH32UtUXj19teDGfGTBg7jTQd9EXSEDJcZz6ZiwmNY1xt528ePv",
  "key21": "2wrZsHkuxZ3uhSpPDp5MwePD8VXcr6PQh77TpzSTJk7E9YxBbTxFuvZKLrzrNYcMRqo2BqVCVba4DcMB4no7wo5p",
  "key22": "dszvhQ2Khx5heyURhMx1hcR58mfjxvzy1zLHtp4TTRmyM7wFCGZD963zEPe1DGLt6GCUymYMWCSWWYk8y6hBpmP",
  "key23": "3fb5cL39VBwZ5zaR5EtCaKoFj8khdeT1jb6X9PHs5u3carJZuTWTVQQ9aY9fY8BnxgQ29RjGPAKCv2XnmDp3cfSp",
  "key24": "EUCXHGNhE48b9FxUafYAX7TuNfL1duiZjjMJR2iVazTUgVnj8pZ1esLwvukQgJrjLqLiuKF29Ub2vY6sguWewNn",
  "key25": "Fspeq86BmhmtmoQYVbKE6J47D4ChXE9wubgApjVUhJ4nZQHByYmyEKX8v1wHEDDTBMLAnhZGfqyq3kwxTdTe1HV",
  "key26": "4EkCGZnGEHt33f2PBNBqVsuXtDrceZDswCGXCnM3bRUrc6zeMGSFat9HSkGGHV3WiBiF5ma5aHd41CndgF2xVEEi",
  "key27": "4phiAwxFujeCgdVTvK2ujjHNV52iMCfpaFVU977Qbzsk4B1RJjyn5YdCBhK9XqbNAV3jbfZPXcwjfrWwNXHw7q72"
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
