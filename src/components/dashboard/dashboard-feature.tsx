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
    "3abkXTYwXsDGfTFbo17jH4p2FPtUrEFkVeMagCprez69yZx3VPzepzWHWpvhmwRQrjcwdu8Q9zNxHvqHYxb6nuk9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Fo2sL1QjER1rnq1LMfy5oyw3raoPHLj1dQ78QZCeiGtDT2eTrycFP3jHkp7cze8e78NvsBDnnbDz21f6uwGK1yB",
  "key1": "3L29DfrfTfBE5y66S8u7qaSx4jb1c9ogGgG6vU8a3pM7nuameFKH6UR1EnGSoTm4ZFCBmfqDLA2dc6cbPhQRp4ks",
  "key2": "3EB5Fdu9Xx74q2J4QNuGdbgt18AfmqETmTS833PUDxbFvzcPx41nfhxSKMhBZsbcsWGNc48rgATsZF1wwKuUVod1",
  "key3": "N7N5jQcczrtpgKfgH9Kbs2uRmq4ZtfCd7t5D8kQqUVzfZhBHbZ2pLwwrPFsScv6noXKigMAiiczi1dd5XfQ6Fa8",
  "key4": "5Q8oW4H4dZMdW4aA9JvmbuPTS8kaah6yAkCaURLMaLMVSoYyK6rq2z6ZU9kYmjixiraRAL3p1VfboeK5vsLBVeSz",
  "key5": "21Fy6ybSBpPumWhJmbo388qfewrPFuXiBRvNP9aBV3T8E2f1cq7ZfEyE7ypTYNU7z3ABd2gAaE8vVzsR2FYctgCw",
  "key6": "4FfuVL3snKi3TxEJcWGbGZb9tJcErjGAVrwRWPqXBSyAMTSAyHnyow1KQ46bKjuFgGwhrhuRLzfzio8HHdEuftwH",
  "key7": "3XNc9Y6M993xjTrqBTCHvuzAXPm7517E5hcSBbjByRPx2qpRZeSfL3uN3fZXxZXYfxghrWnR9zJauUQHbCgLd4dp",
  "key8": "4xXipanLTLgggmVpmZitURD9x8TN4Bk72htkGqnDeZHXXDNp3uKjfictMv8NU44fKBEEAB5JNkxfoYeLxEEqPkXd",
  "key9": "dnJ98zETbvtDTfgzFrPjfcwXVZuTbKXRPUu2rqH274QQsh4db129Nm8Vg2559aA9w887RRs4aJ5rtScGxhv3CQM",
  "key10": "5sFBmZnQwtXWHCa9fVwdC62R7R3Epk7CjiGypfWH7PRDFNteJpv1DHjSa1EPFnvX1FDFF1X9RiQr59U2MbQHF4bZ",
  "key11": "2SQDmHuogfKHshRQrSJTC5zuV9HB8q3wNQvmc9U5PWdnsWonCghys5eV9EwxwU4hZNa2tWrom6KhipVd9MULocRN",
  "key12": "4KnGTSdSghk6mMLsxd3CtJrhVaKiawDi4tGxv1He47YNH8THkBYLXzd3TRzSvSCdRAMALWYNvMPiv92UfdESkB49",
  "key13": "25BUt2GPqmEMpU5TLukuXYix33yJiWZo7JiyGwiT4ZMZgKinVemH3kLYNXwCYLP3RsFVoog7B87P55H9xnBDu9rT",
  "key14": "rCpB7U1KKtPJRt94RfYN2eKUwS5jhrpG6d4hkDooas1H8TCkjpcZGeXJ5VTdEGbPo1Dvohu9r5C7zyyWa6vohAz",
  "key15": "aQGEzxrbGgBk6UHJzB5zwULzkPBYtrNUm4eEn9xvPUhiasapNv5qG8y7udKwc1sd9BVyMZ35QNUuVB1n4AipLmJ",
  "key16": "3T1G7jTadBxcW1jJbieEGkKYVYKCLwxBWBnzVfu9MoiQaegC9182HUFBNus4RbeFcnUxtETELtui4aMN9E1Kbe5R",
  "key17": "p1VaR9SZLbtBG4WTikhvqJ2bPn4Q17haDJZQgKgQWZDCNifHBjJeb5P36DSx3ZRycBpFy9PHY17ju99jzgKJzy7",
  "key18": "2pRz6FodqSn3o8ioRY54xTWEdTCZaAM6RnRUR7vMRWDpWJMcDfDjuYL9axcoU5Bw9aaxLEkwavo6PnGsvqBGRZp7",
  "key19": "41LXQ12rhujKWUdnMBvWYhqhVCbajgcQ82QK53TtAyn1KtUhFpRxKVMCm9ECipiNQAWCxPxUo5MrnzFDKZ6QdaVD",
  "key20": "34ei9c5YozaLfMe6CXyxBqtLnJ8a69H2nxrwMgcRWmaDSyvBoequ6XmQKYJQWinAeuGM45E9DbeJFuWYQSQ7N8i6",
  "key21": "5dcJRXEtuPCgd7VMbTt9TD1DQaLXQGiTLNtyDPPMCxHGw8KHrrHW6YQfkj8vxoYwRB8Kd46MRRfiGsNsxVoqT7tC",
  "key22": "3RS21sFouaPcheJXLyNVV7SEhUHchxHHRjusnKjXBqnBa3zpxvGhZmGVifPRFfWihErWEQWHZYRqghvBTqq4sMXE",
  "key23": "ZhVbh2vpHUNsM7bhJ9tJhwtX4TaiToTZFcDbBjj9HUqA9YU5TEhrXKeotmqgqU8mDHVnPxGCkkXh3bWQohkuU7o",
  "key24": "pT7RVrrPhSsGkmsZaz6DqJS8XuFAqXHKViVHDbaG4BGwLD5y9i3hUNJV8zQ7kkrBbdXjomVir5VUj5dCvSYZ1GB",
  "key25": "m5URagBMykWbPeBQz3QhBvb5SbULDvhy7qAgnCA2dyXDFnN8joyzu4TbFq1ptpuCpS8e2aAhkJEKxALjxQyKq7Z",
  "key26": "2WmLngdQ5XVSXmBfmT46SRpQ5ENe5xZuwQA7jykmhqQeMLDQAgFbnVSTNqNAjQTPUBBKJKLJQA2RezMYqvn4ZT1S",
  "key27": "5vX9uyNY7FniaXt8ECHBvgL4AXjo1as7wWXQyNk3iaSfwp4mWzTUECMZ9wUCDscHQFLGtjodMdrrA2sPCViKfqeM",
  "key28": "2FhuQYAQ9p4uCjkYz6U8LxbkfE7naP5EfT9tXt8aga1wF7jsYwdP4p19yxLf6iNwKL2cmhPnwtSQ6nsym6FwxaDn"
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
