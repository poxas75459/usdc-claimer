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
    "9JiqbXPT9LDZdsqyF215PLw7BCxcBSY2BksDrc3AzZRrE7G8p55f6aQdcz25T69uQq99YnRFH2PHbMGxo5U2CP3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uzHrqq3BzcgxV2iVsn6mdNApkVYPFtVL1NvSYVdnY84Ng2uhq1G4BYdTQrC8bqfjt2SYL6R9KP5pCDvPzQppWNr",
  "key1": "56P7xNjQNx6DP9ka2V57McMhfbUXkQmgyyDdbh2kyowsgGC1otrGzK5jAtXvhF7LBeo1CyqyFty6J2eedUKt7fb9",
  "key2": "dcXAUEUZk4cquEt8L4VtxxvmjGq1c4PmwzjaAtzbbuCzeQrY4m6Zxg3PpV83EvGGGMf5SB6mw48RiCDkHbqhEyT",
  "key3": "4ygN5QYr96rCRe9cTMHrLrZTEGehqpP79SXSj9Pm6XfqvkmZ3QyKhtXX6rar3VSdpn3HrxDr2VokXzkfAxQ8ZbP6",
  "key4": "4Xep2oAPpnHDYvY8fSHeJPoYCY7j438WgrNMHRRQDZd4iGR2hC2NukRQCcdhMAk6VkCHVdM277BdJfDUnUuPhqrp",
  "key5": "4Q6EFv8LbgAHbT6ZiCPin9bxPL5UyVza2nvLMFTWk6Egx1iwFxEzjmvm92RtjWTxo9rC18XCwDm4SfijAfxHWrLk",
  "key6": "4jF2zUTc4RaDN3c4CqHUKjQNxR3jRnmzoC8EUsgUCpqXYDUUPwiQPfAe9j5ozUP7E6DbMzD4kLLPCwXEwHjdnYUY",
  "key7": "4ZQZdwQFnoxcoygvKG3usrWAUjnQ43oEKAxYq7TSbPqqh5ctPCsAaaCA5EP1E7LjVzf8KhDrjHpcTtm4BbxBaj1V",
  "key8": "28xrqtSeRpQLs6YdLPhMhzCrTa9ht2tdF1WgtbTd8X4i7J74KmVXQxaSF6S8YHWmN5gbXHV3ZbWDuNaJa5NVBMAK",
  "key9": "46PAxBynDFHoATEhuRcYfiGSJ3WYsXrSwDxRYGEUmGdbWbJc4NSAnX8UR8Qvy32dFSqsoNUEH2WP4mZfAp1hmPeB",
  "key10": "2aiUoMUobkXa8zNH6VC1e9ezMPBGQVtSpZnvmzBwtfvSBuBBT6WV1tcsvrXbvuA8xQbQuRWu5CGhPKGE88vw35hG",
  "key11": "3tLmGJ3vhE651bjs6pYvxbVV7cwPLFR5NH1WCyjDi8KszPTcHBkVz6foJv8Abc5DCi3YSsGz4azCPqNFfg9UPpkg",
  "key12": "5N7Lx6QYH24Lx2Xehzx6nBXAFoWCVfVWq6CxdRKpbhgD3gtMfJJsTeGhyz8gNiqVspHAGjcayTEPbiwsLpGkuA5R",
  "key13": "913i4rfzD6MvTRhJgeyt5u1QjHMRHwhUcUfYVLMvgbZSTaj5fnLarxL2QNfXp8aUW9youiUMpReFd89vNEXVDkq",
  "key14": "BWK6QsPgmWWBcyrk4E669LpaLFkWpB2Fe3Fw4DfJo1PRJjLAa8rqecw59BZqvUy71JbyG4d6biqRckVq6DVjgG2",
  "key15": "2a6cint2ZmyxCKqtVfJcsjrPynb7aXmdJbEmFTjXHd4kLEgUMEXKBLDLA6x2swrnUJuSNMnS6NwhYsjjRHijtt5Q",
  "key16": "2euFDVnseFf5owtRFa8QVjA9VVZ8jgbQrGCXRMipCXJhduFCoysKGdWBaxWfroke2FZcuu283p5fhPNj1Bdpo7eS",
  "key17": "37VM9L2n2GzqhtDJokVFsfLFk2SAdYtjw1xHjApKKzeVaAn7ZY5QKNYgrfxLhCUhLxKmFbL5dECx4hYC1JMvxBWQ",
  "key18": "DNs43BZYraNeX5r4J9CKRVLTU2te656SYkU1DDsMDpt1aAVYSbHQzi1J2WMxda1PJm13nGwCnmG9g9L2iV6KhSh",
  "key19": "5Lq86EKBshqqi2Q1FTXJzMsUC2n2tvNmaQGRGQCZMNAxe2wpa9iT4nga1AMCbEbkgL1KktsDc2HLx5G9ajVi3EmY",
  "key20": "kSBQQHtcxNPdGa79npgtAPUTVAqHnjq9NFJbp5QL59dW7HGbJuUovPLceNPX4Dh3kqMtq9NScmnZ1BkzMyqyDNa",
  "key21": "24QNjumL5qxSqtTFWJQrmDbicUacNPo3TSSDV3BizdCxMuqemsubQQ27xgE2fgSAcyZNdmN2hbTZ1m5DpKBGdhEv",
  "key22": "3JQiRc6Gi1JiGmTD6VVMRSA2GWJ2R2YAVkvphmCHWRripNfa17Un6rhGpbgbvGuo5YCeErdYgzvue5LaaB4BUSVZ",
  "key23": "45NRycwBjLeh9Q8TejViWxoreMxhovmCYoVHXQA5ZZQBLFPoY62WhAjewQK29kyyPKiKdXFTDLz1xJkrGYxJtczP",
  "key24": "4s7k3gunwNUE6xAQRkvkrAri1ko4BjW3JSUzUxW2wbQvt1wXKTrXovUEBiP3hDVmmF758Z2DpP4Apa5JsuByzuTH",
  "key25": "4EqaZSUC1BSC9uRg3NYGuYUdoVq4FdgxocQzELQgFd777UmfTjHTi9xaERjJMsYhcZPwCUx9dggbvB17WzwSLgtm",
  "key26": "Copx8nL33SzM4c5h1F19XUBkrQzUBaJqY44iEAdrfhsBJU4dpRzhb2o1Lzyn7eooRcnSx3Uw9VFMXS3nsM3Cbgh",
  "key27": "3Mb4BYv3sxiwt922nsW1wpepFancVw3JZKR1MyEvgQRvCJqFSesH7LKZKJfyK61mUxQrNCgXSuXFWXbPMJyif6wn",
  "key28": "5P1nuBNehbrRXRDVFWqYk1fqHCxEvSjgTRFmW6igyPCwGFGctP5XoKXiaNdMknJaVzQhAN76guipJbYxpFKzU5Ro",
  "key29": "4wUxXX1XBpoZ91Gbi9zSGmduFBadwDKZawPhM1AhB44vHUyyZZmzEeSHvhRWHpfdS7rbTSALxYgrWz65N492oZPN",
  "key30": "3Wj6mHRNW7YRX51wfbpuRs9ynacutr6jDGHqnUC9V5sXK7TxPjxDRFvBwsGmU8B7ugKrbpg4RLhzVf42rTes62iJ"
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
