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
    "3f5ETfmiCb2p9jPcVBMJLi5MCEKpMggsAxRVqiSUJTb9HUVQDxnjo7oavbguerXcScQZ5bLfT2HGgkQYKxLnMLkU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eTx48wv7yCRDKCoLsWNhj25qHmfp1efQpidNURjCVjxJkR7eGyxeS1Wsd4fxquctyvVPb2nuM55U4MmhFz2Qi9Y",
  "key1": "1JyNNAXxsvYtZrc91Ldu6yN9xPhAd7aemx9V2Xr2bcwPXCzZTSe91jRZgx8rbbPPyzRj6KBMch2MMhd6j4Dm4Yz",
  "key2": "2tmNPQxUn1WMBNkFAqzx1JEZGdjHLH5bsccExWHBWF7h8q4Bh22asDDiwW6sBCDdnVgn4eyHdUPnKSMg3Xm4vPjX",
  "key3": "zGzE6otD2UYM1k4yW6aPnajK6H19es9dbTf5K3bE8tHVCAHD6sJ91NAf8V4JAxJ56QVMFLsAZcHPCh4RjYy1P9i",
  "key4": "3rcGcUVyBTfSifi3iEwomspJjHAGNcZKfnzdvRGkFrnGxyCuRhDs9dzaBffEk18EhLLWQMH5TRmkaAQ16zqCo9uZ",
  "key5": "4bBGxhbfntExFUF3X43v1zp1Jas3tLxXxAw1tXHabm2C4JKcv2K5HtCfS5KpVtyjkzKEAkYb6RkeG3k7z6cwjS2u",
  "key6": "5ubGqPQ2wLJPQGRcCv1X8G96mQQTiueregv7aETjLUkmtbPwqqx7QVsWHi4fv4jZ9YJM4pGNWGNAujNGFE5j6jye",
  "key7": "2YnmogSHfCtfqkMUGnTtXMQJyVFkTA12Gu3XQTJ6yuZVQGJ5cnJRi5G9Va8TEgRyYtgig4rRSdVEBA7VMpfstNe6",
  "key8": "7zjJp4ac8rzk8JtDVWrRXBHv7hr2ZkCE279fCnYbq9owaw2EjTUWx9Lt491QS8cvZTpuqqZUs6Kip2YCDsiN7qy",
  "key9": "62PkoWrNbnbcEB8X3k3HWuh4ZPGEwVP8tpearhDrAkRTvcd9VLFxL9sg6h2wYmz8wuTFdFfPQmvU2xjtar6PTGUX",
  "key10": "4MCKAp8edrZ7SkVjvAbpSDoFmYBCpPnieGPyFEwcGkHFVyf1gDMN1iESaiwe85dJrmPCNWXm9cHYBfgZNPDqGsxS",
  "key11": "5bR2EFuL7SDcGGRMN3pUL3GLsZM4RTN6SbvjGTZAZDof46N7jtHo5s2hEmL1R5poHsh1QLK2ZQjEYHPjm4tJGn3R",
  "key12": "5trSKjTdnr5wEUiPvyUZU5PxY8uwLVmREAiqCpu8bns2ccr42oxm4UuTQy8kHQx9tYFgpTgK18imQdHuc7Ma4USX",
  "key13": "2qwzGa6peiQ6MBNWpwerS5AsKRicC2uoJmiwbSnGguSgYveW4QHiPP9anN11VDEw6hxfrsxubHtJkJNYyCYKfk7Y",
  "key14": "2upPDfPkHBaQBzYEj8PDfzNpUge79K2CEBaFCTkAujjLJtooUbvo1WXbhkPCbacaA3oWYfM6JbQzKVKykXx1eixi",
  "key15": "5WmKD6WD3KjXpwFU4rZEFseaCXF3VaSvV7P9RG6ByJUbSeL8CXiFUGRUCEBbGAWfQAL4JWeMQVZ3qHJxdzr1QT6C",
  "key16": "59TpyetbKjmBbmDGiszWGHmmnUQsZKmULg58ed3GbdxxR5xdXCzuCNLjz8RQQ6SmQo8xqo5ocSNMuRCTMVcFaGY2",
  "key17": "5ocYLrDDtr64XtnXuHHdUhLP8boTt6yZzUwJKiAFVpaadLFky1BRJkLSdU6EcjKZwrD13u6ML3vP2X11VGcDLrqp",
  "key18": "2yDhSDgGCsoaHr1ZrEb7Szm4qTDUES3hbWbetEK61ckjGy1QsA6XA8rdMU4fygxpRNVsbUXpmfpSV56vJPmhNgNd",
  "key19": "4mkp8rRPxFMErxoDH33CRwHZmgMiaWhojmbEb61MkEbWg3TY4G8YktGSXGPMw4ohcQDQhZNJvDE2bm1hDPF61FJH",
  "key20": "4WZLa9dC2Q3RVTn7Lnc1Je2smviXAMRZJK9NDVdTpFSiwek7UFCrUD47sEhj9UAxtTtwWBuAh754DZWgqfJv9rnC",
  "key21": "67AfzeZnCBzhiZma8xyoqP7k1msHr2pPuPsWptioX4S28mTZfYE6smAoueNfLnd53jogwhwY8Tm3QxzZdjZpxSmh",
  "key22": "5XMjQ7i63HwLNQY6zrAM1X5vRmCCTndj72BfFF2DhYgw7ggHPmVwCV7uecP2VufQ4vEWZ6y6Aj7sNvzsuFgef77K",
  "key23": "2n4B1CZhWyKfiNj5Mhn9msZ2iY4kKAVaRPDMB1juuwETk7RJfJzFWCGf71KMnYTf2eATwP1jMcnLHYZVdvXRhYvc",
  "key24": "2ziSSKQF1aWvkVULNV6SQCHdgeQhVPrLqMdbqYHZLdjhbf5dmTc6YHC4Q6q151YrjUNooKKLVk2aYHfWWzbXmr3x",
  "key25": "qoAvMQotDp5AigLGUCpmeNxxaizQdas7gGTgMs6k4mYnWBQdKo5wCZa2pWdPZDZ8tvZa1tMBRccu2pNUmrKrHoQ",
  "key26": "27uSwsWjnsQwoUjj13HVZoeNEXfDR7zrNXPWSKNtk7qmzY8ncGPJTWPdYWrRUDg6Wv5SmeWDjaCpvNC3wFBV4WBM"
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
