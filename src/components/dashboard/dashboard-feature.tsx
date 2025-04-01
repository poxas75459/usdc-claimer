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
    "3EWX5PkEhwhcCtghhHWLFji2jAtkqhq3Zb5JLrdUBhtWwRRFo4hbW6UXgzpY4DSX7sy2SzzDNGD5tPcfNErZiGYh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rDbr6YjftBJhXBgKNR55ed4Rv2q42kFz7BrsLivxtFJjroGZg4bibo8s6nwuq3no9FvZsntkNGUTCGHkubRVAcC",
  "key1": "3q6fPGNCC5fzaJFWEG7eE3cNfx6Q7NDcVT7B5bzsLFWKM3mKTJcFRRtdzXPBW8tH8YK9c6rv5F1HfafbzVhaWoSv",
  "key2": "3vw7Shq9NvMrSq2AjQX38Yhvdheqk1iK8u3efLXCocHaL2pbdyJ9fUHPiREFDiQxhdqmGRHf4uXCGZU23quSW5Mu",
  "key3": "4EU5QhLrSF4X3PikPeaMmboNQCZtkvwxfv2njSt8FSrhnhzp5btT6ysajXaXNqo5XT5TRWBU6FJZ2SNUtYV5nFuQ",
  "key4": "ajFtDtC3GQztqaTtKY2dksWdp8jTLUJJ2hUnBZbujcGnqoe2Q8FRhnBASQwPLTZ5cRQCXXkgbGAJXf4hRzfc1ke",
  "key5": "5tuBB6hGsCh8bkJyy5pTGvxmijHzuCb2h9bNihvcUEpFMQakn5rEs9SRNkD4cfuBfhWM8D7mDzbJKfis2ezNwgdz",
  "key6": "2BgMxpJTMiF3n1iHru9iEXhijehvvyKCEv5VH8o6xeMNjuo2Zg9kUZ8Z8Qpco5VwxHTN3qpnAXHueuRNyFqHSAwQ",
  "key7": "4Aon2ZCkUnpu8y6mRvro7ExLAsXJ3Kud2SrtAvFLgDdzEY27hZ2dSEb77KzomSqc9gxngoMJnFqj2aPteCXvzAoh",
  "key8": "3Kfs45Av7MTMt4Xt5h5MawbAW2Kvf5EuHBhUHX7SrcWspgwXwjCm8tAuE1hqH9Fse5Gy2jbccpgmbi8Enb9Dd4BV",
  "key9": "SD1155qCoqXo7AxiQq2bs9njSwht6w9TqVzRgXmdUj2Czg48888t5hfX1mVETWJ76uUJRnygwijNb8rJbkauRE4",
  "key10": "2AmQbSADfdWGfx1wtBwZW3wm9oYrfgqp6fuHKmvi4Arv8amUo748nZPbC4rnGqBUGRP4E6dmLLnyTuU8w9mZVaUd",
  "key11": "2yn5cTrMkzbYkcZgVr68jsc8xXQvtdXUaUdYTZnS5u171T6h5NX93VzEsDHFDmwE6F1bEdJqQ4dN9LN1PupxqA11",
  "key12": "5RdDzJZjscJfJvAi7HVvhRQUfiC2EwkSzZQE3wpNFLLTBbtR5d9fXcD21pSmqAEpdvokBqutho6oLt6v9igaap7t",
  "key13": "py153ZcSMT3ymVbeksmMzwdgQTLWU7CkX6TYrg4qJMYAAnTkVCo4UYL38PucgXPbMaXZfp4xQuHKGhS1vLtsLzY",
  "key14": "2qqLpRufBDWEpZKvCvNAj3y4Xt2BHHyUVrYD3uKdi1E7W8beyo1vTKCdyL67qi2d3ni6bB5azETk6oNcJtaNNoPy",
  "key15": "5iEMfJmcnABstGiJjb2bMGPjfPQjp74twEBXrUtwzAcR7f6dRjXy7XhR2yGqq9JYnHKnhY5FeY4N2GvXyTJAJS98",
  "key16": "4x9rkKH9BVf6nnYHPcRYXXp8wG8XTYESM1wkNFsoRYEhhEjrgNgW7PzNdGMpxe2mU28QLC3C124XWHmaY1YjZXK2",
  "key17": "87vRM5gr8VYPUUmQ9crSDnHxzpA9tn9Mzt8cuPGaut2BywfTuSh9ZfCYvfXL5DN9VJbswJRn38DvHXMnFw5m43a",
  "key18": "mKBMVEUZREr1dKs9Mv528E3KLtRJrygoCkNe1fkNhXhgnXxbQvfkrRd4uTVBoBrHvMNAdRvr3hNgvAhBC3ZyY63",
  "key19": "3JtALXkmuA9hkiTMcJyM4rjj3FXvVqBVrCtdDpGae51pKp3Fz7uGdTWG5yekGu9YWxyTKLRxv2DeJonyqRPHtQCz",
  "key20": "2mNmUe4zF9sLbPA6nyLmLYKhVe2hrvGEQht9vQwPXxC4fy1Yude8Akwxy5CDsuExz8iXtFkRkNkuPYopkWaMUPip",
  "key21": "5Sv3V6G7neepRt7mrdJD5xqSEogJmhA8uZ4mSp6FrK6uPvELGRbpDY81iD55VeuGR78jWxxMqhHbSucguUh7eDr8",
  "key22": "SWrc2GJHieS5ordWiNTJ85C9QJe8tbrt6xvcxZRDE5LxxFfYtzyde1Ywuw8M7LdSG1X7Ns1uvev6fy3afiHBAis",
  "key23": "2VW5DJXAJrws7tBQcC2mVADLDWN7m68EvP6gVhavNpt2eBPMWTKPbjUADdsQRyfs4FjGgxKhJBk66tCd68Zu5ngK",
  "key24": "5ZhsceBK3RjfZPJC7XHLpCXJcTaFpx5cstBu1ReJbkDSLPx3vSbpYyVMEowKBtPbMs6wr6rEbhGayxDremz5TXcx"
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
