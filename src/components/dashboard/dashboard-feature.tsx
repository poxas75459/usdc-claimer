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
    "4WkGVgLYRfRmjgxe9B2Pzbr5DKxQT1GvL46RmYD1xAM7YDFsh22M35LG7Y7kB7D3GK1MiVFJj4W7DDgecBF79DZk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ShTDU5tmaGTK6MgMsvkNTymPz7n4WAr3CWUmE6aY9gVGFpcbj4f5RCNwJ1nmoPKEzJVfjAWHDZvDHDQC7gRGgTu",
  "key1": "AEU9dQAbU9JFWdGtXYgCZPDV3wqnHt7a49UsPGJQL2GkUtw3Jn8xJhcrz7r3XBrd1DykyTUUUxPJSD1fq1FixLL",
  "key2": "3DXk8dFQjEzfwFWvCuCDVyuxuEQNTbwYi2xzhY2eESuvxF2SYfb2SCuvqDqPzEy9yZJnFbmuxc15vGB8YiWy4qTc",
  "key3": "5MsiEaz2dc91EfKuHiwhbEKPRdP3iuYcHL1Xkk6M5T1QCeQbEqhmHQJf6PybznpXLnrCeEnA1uTmoiB4uCTpVivj",
  "key4": "2hvfyw9S9Wi4fPA8vavCQ7iB26HcnzLcdow2chn245edkPsBDNYdBuE5iZDYwnrLxRWPDGz6xzBZmNKhCNVTSDuB",
  "key5": "DJmHx8MupyTXCWEP4hDVurjfYhruNWVzrqRvCCFyrVrPasCTcVW9zNTygMRtwmMdrrDZL1vp83KfSsQsHmsJpJi",
  "key6": "4WZdHAZp994tXwfrG3eL77D2WuZE9hGqyJNPssrMcMQNa565rq3ApPbnsbkStML4hjho8bBHoyHcZYUcF6wTZ5oE",
  "key7": "sW6fK8vm4HsA2E2d7EE8jxvoSbcHz4XtHmnyic3EVCgui7jHqhwnK61SdXDAQGLPDaztSpHL8SeMVVJjWXTzC6K",
  "key8": "4iFYToiycjBZ9Rv7SQEDGbYw91KBEAvEWbRNUdDPJNK9FA3qdtNFpjNTPTYj1A9yrkyh8QmNCe6KwpXju9VyArcq",
  "key9": "5ihEGgXori2gxDEX9UovLHuULjGa2jdL6pVDJ1tnv1PH6GvoxiByCcK36XN92fFrPqKHv7Gh5Vy6dfT1WNh3UrvW",
  "key10": "5mSeQYNZn94BURpmq7nV613hdE1DsAVwcc1gVZddUsZX2G3go4L7z5wrhHP5riimwSuBdPsSVTiezFqoC7oQgLKD",
  "key11": "3GZWiosUew5a2XvuRKjZ7ewPbMkKko5qSyyMVqViaoQRTAL5w4uZPvk6NmP2f2mWry9EwDXpRCNvbCYvjKujDp3V",
  "key12": "53FaQuLT6jh4bxqtNqDX6eyFaNAQBzWsKHRAJH7JdQLschA9NGmXRXTmktz8dzxdGVVEDSzj5XRCasi7wMPwDqK2",
  "key13": "2TaJKayjuujKiNaTF33ubb78RytYA8ft6DJa87Hdfq9uW6CyrLfXafeqUCUVHLBhWE5rAj9y51rxJZTiFRjpDub7",
  "key14": "5kc1rR1sKr1FScvdpRDTpnxxu1EHeQBbBdWg6wc2SbGdLpNmte3aD5n6E4WSSEAiMkHrjfS3YanKdEpbWJQvKCM4",
  "key15": "4NFSoB44gkxLrP2pdRjPkHHmk337oKpjy2ZASW7LMeBz82Mvkus6x2Z9AUawKHASjy3pLEGjNZ9FzPGBc6Nn8Ebe",
  "key16": "4zpDi6AgyrXWR93hMDmVk2W4gn6YfsqT1vQDdoWWBbGZbj8ByKiWNV96LqbwERRL5gzhJLbsCdwsZKkLb8XfAvyy",
  "key17": "26Jxo8reAkNFJp9kSdT7CkTp9aynPUGpAo8VpkoZoZ1VBt5KwyksphswfzNvzD1aP53W42F7e1Fb4RAC5WLU1e6Q",
  "key18": "GEw8We7BLKkif8dD2HrBHd6Wn2bFmHZnWec3kjmJdhrVmVcXwUXFiJcWBmQJc3DyQh1oxXA4DfnTfLZcDnueZWo",
  "key19": "3SNbYPDrXqkWrFwcR2jtJ36rTxbniBBC2ndaaCBEbFr4V8xPB7JmxtrfJS5q5jNZC5fB55rhJft1igckjdK4G5Jj",
  "key20": "AaBzr3nNaZKhqVt78RkQYcFVkHqRv9R8r3ouTU9Mg51p9HVcBRtyZ5XpFij4TSVDW9vGsks5cbGpTBnLkuHwrnS",
  "key21": "3nfrZ4RNMPymMy1Ghpy7k2L2GdA7d76PXsyZqeHeTnbj5NkGhmUJjZxAYW7LhabAjXCXMkJygbd9xX6DR9khZAQA",
  "key22": "4scbjU1bibPftMrGgYHLbV4YPKxMSUQaCmc6M37n4soYPEfU5zmg8FzUZbeHZH1zXoQPTdUZbExQF25f5enoEnJr",
  "key23": "3mKkJfDHbgkaTpATM3dgAjU4K42fSWjJ7AyrPNM4VTHhq7CFEc72efyhg5qWca1BCJMHZFnbMhddFeD6eCAckU2S",
  "key24": "4uCSf7F1ipoXdnQSEqqXYtrskxmAsKajPL2uqDcXZ3M37Akixx7z3b3vzBxfhJ8Gd5UCmf3XqDdchTsmk1w3t4Sp",
  "key25": "4voH45AAZeiL8n7SuYuSewRx7b3Z9nShpQK9mK9i7McMVi5iWkTcHFYMmqFjPX6dKziv4wPnGRBXNLgq64CgzPjr",
  "key26": "367wmQgEsaX1GHY3ZLzoqndqBSrR4oMVqMPtMxbueWomhjWwcNP5eAhoLtYAz6iw3vHo1MghhGdT4GYQiSzEVcMk",
  "key27": "SJ5Eix5o1LKvZsv6R6aom1sjoUpuz2bmFec6DNHn7MVQNBm9MCgToQEH5sUjnY727GHQvNcGcGt6AceFKk6ttrD",
  "key28": "SfZn3kxzWD4cMCZQik5u9oYpTKz6tYFeYirFHtdGqFMmobdctywsQ9WYjpGXo8RVRJbeLszJgKXpotrpXZYsSi3",
  "key29": "3ric7XEcugBTZCkCdmwNWaRFqFSypZbSLiHV3ZW938Gd4MCyh5PBuCQS9CyXfrMfi9SJyv7hx3yhwNtnFw6n16YA",
  "key30": "4MDkBUz891kVWv5ZAckU2hdGyYu2XVG8HKJHB3ewNRimDqD178REcxfpiDziuBAycfdCJVAFFZvnZYeETbNskWg"
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
