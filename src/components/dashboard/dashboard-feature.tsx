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
    "48AYNL3NHTwiiVYa87jnxy5JnYXWirbt85W25QEaiMLg2AE1PdWXFQiRqy754STM9waC67ZtiwbWf8k8ipdmu38b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s5NQsVmDm3nLTcDaNWsTzoyDikfBnGgohBSfLULB6kfkmr4eQ4JwA7c2WPVbfiGuxGJnvGXqJ3CSEg5L3se5YyA",
  "key1": "26u5Y5jcqproTAvsZWiDds4sue4GF2EEWgetbZyLU1Wkky7mRTbn6uPHPrMpfiJV5Q2iSgdmb3Q3XytMmcSM3Y1e",
  "key2": "2JJx27Hmc11czsAgduEZosAjJCnUimWjY5mbPVyd6wZpd5x2kZJW8qGSgsgeyUCLytncuh1GfqMo5huoES2JCypo",
  "key3": "2H7QGNNYJPhpB2QZ2Y4rsqosQfLWbhKTCTyMP8JobmaSU1MoHt7aXkHpsu56ix1MLiUoogaao9753LRuQbstHpMT",
  "key4": "3sNfQq5V6UhwVqEvwgJShDtTApunueT8JX5ForuswxRzqHjTQzqqSqypGsXJoQdHx87xqPKBjvVtYkcFNqvWk26Q",
  "key5": "5z4TKRRNFuHZ3K8ZmQ7dUDmkakxpd48DaYsUK6R36m48uuEjCmgGZmVnRe9h4KWKNCTTtVXYKpTmQyzruYLxtHLW",
  "key6": "3Vnp3gz3jSHwUgTMW9xSsRKFNKwUH6ujNFJFKntFYwDNzsesRvDj9miReiQvoQjBBvgoNqq4TuRRbNEC2adckDo6",
  "key7": "5zyMDNpiHFLXomVCHT6VyzKMyHVAjpBWzpENxPwLFLxU1yCKRdK1Td94jbMippmwfALxyfV2UzXWVWa8E5eSB17f",
  "key8": "81xi8YLVz2Rx7FYbCQLU1mzJZGWRCJ7ZKgXMm1MFJekAw1oFCF579yNFqhvbvtPyW8mUc2RvWekgEvQFa4iZRT1",
  "key9": "5LTewT7XFTye279VR6oTb65Eztv8ZYYnaasgqU8URNotmgdY8SSdCGdLmUkkSzaoo3JaFuoGCTvZLDgZ7Nd7XSSD",
  "key10": "2zV7XCLQ4MR7GVMCiWtVjtH299Fr9DTgMKY6Hn8W67drF1QZua3qMGYsqtzZWBJJ7yyD4NkBDv8aUhhdLk9zLZPM",
  "key11": "66ED7KDvr1dVAz39w9cYtEEtQNgiuUDxk6HtuyHZwASkZTaeHFbrxhKZPWzDfPaUqDb5uvDm2uyr8Aw82FoyAUBA",
  "key12": "2WjfoCB77xTMU9vkePSo5Dji8DRDmhjjVfYWkMb8uxEHjZHaGhYSxNtS17FgRYmKkhX98SnSujyTegpqeqLWdVmH",
  "key13": "3QnTdssgTdPS2gMApQyiqNG8t4D2R6qYjwGcD3AKkbRPNNdgCDsv9GSVAaFZMCt2Zvo3oaV9XNLeNVb8RptmRcp8",
  "key14": "26C9wGaww3betM9QoyLifdpnPqLAwDH2XUr3h4Qd6tUNHh9roDZpj46QmvrZWZoYCg4TyktkXXivtcnSZLxfqYFZ",
  "key15": "E7mStuHxi8RKjDj64abuSRv2Zv1XVzP6N5NT4f65pQLbNKaxJJDhEo6MaUdXYsK8c4BAUPnXELnrK9wkNfh3hkE",
  "key16": "3HcFgfxJGnSX7SNPEv7YsBYCBmjURtT5ns3eZZhjMpaZsGkmPv7KnEj4jEjSSwm3C2MNVndpJ5ty8HWEhWF2nqk8",
  "key17": "2jqKn77ne5UvwVYLxn6itGf5K5fVvdCdz94HujNrJJhnripBVPXFtqQJB8jBZWbUCDmCBpTbBxbUHP685nNmUJ4h",
  "key18": "hm19yQ55zEAtGBX6zYRY2n3jVe74fsDnuUXyP4aXTjShsm6h2bMtmahaDrbZS489REvR4haCsZZykNMmkW4VWL7",
  "key19": "5ptyUtFC4JzbxBruvUJyvCDEuPSuxCvugs7CfJgQZ1DkNrt72FT3rkDQkvVJXn4y1j4aw6qKjBMptZXFfMmuh2oj",
  "key20": "39kuQPUQVU6iBvuTHusfNrX3qoA3W8cF8uzS9LirvQBuAEtjGMmAo8LnPZyocYkQrBUFFvya431gzPcrHJifLGGe",
  "key21": "5C1aKd1g512SrTtBG4L1mxs2LrGNXNt8BYDCVBchMtaY48JeqqYv81ZfzVscFh2LiZ8vf634WVFKJoBhkpboPo33",
  "key22": "5myHYXNPXK7WTw5VtXg8kZtnwRfi5ZU5gXrquL4cHMAPYEuA9NCduTUmNSoeRwQzFLv7rcusX4ZpPc3TjmEE1cJw",
  "key23": "RqVEhoP71pQruYfmHzZ8cafbJSZrRT36QgZvG8DeGkYRv1qECroqTiYt5sSaMDRQH3ZxZrxbrK6yoqxeGc6ozxv",
  "key24": "26S3ogGvJ75gCosqUqvNS9gT9XQGWvwN9jF4wT7CvEnyKM8m4d4Q1vx7PcBg6aapRyMD15W59oitiGvUXxQydTke"
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
