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
    "mMppyRwmpr8JoKkRG1vqeXeN1niWMiJVEAj2831VGoRTpCBTmWWM1Y228H2C4LwAAFvtYN2tv4WfVjaGrTRUptW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Riobj9MAAsW8y9n6iHd475hpsjqDRXkProR2VAjW31PPfW7e9ty3vcdGrBGsNhH1ts2n1V57z4oVrMn5gno4Vc1",
  "key1": "5xTZNXDTnphUr7chaZC5QDUa6G6Zxrbeh62htPtfjpaicc3bKHfFzXSubhm2AULoex44ShLBrqhMB3yHrw8Xdset",
  "key2": "4pHJTtbuNTucUrTSq7nq8BV1KrQmRPaDyjY2NiN2JguQEhr6ZJpxCVdKPuyvGLKbaSbHMgzEhqkdTcJnxi1jU2pn",
  "key3": "5a6Rdq6jxBB47fYNNmjnxJQuvGFDaaMwwA9uLAW8n3Bzk5PCvVSQbeHSVtsZsgmY46SiFH1uDVMgWeXwEo1qyHyX",
  "key4": "56pDibHx72DoqCP4s3DWyFKRqunPJNrwUy7ogF6JyKzCBxhiighxzWazZSGgL9c2pgChFYShc6bd3Fb3nYjKNcyP",
  "key5": "4KbCkTK9WUhcvjpKfFpv6Ecm7gDNeF3pfkg1HSTX5p6bSAs97nKVCndYWXYxhnKT7wRNVzWE49qqhhBePpQG369b",
  "key6": "5jPGZ6xfJBsbxhPD8kxWRjdPw5X3Xb9u3oKdYqCnESDoXri9PvnxAgrQbSZuXzHo7kFTUV3UVDAL9pXBXBSYvkDS",
  "key7": "42fCZEGZv356iNCrLzW9UyMLSTFfj6eEN5s34WbFGpM6N5YWX2LP5FJqUgTtFfoizVXwSYSxgnzQ9daxVtq2GyKW",
  "key8": "43Bw8smUtiCas337AcymjVNVf5o9k9NWc2x24Sq4WkRQbFdHLvu2ypx5n1rhcdFqQ6ghdmf3CDjS12nmoMBqNyTb",
  "key9": "5mABjHL8nE5SJ4Ea7dzJhJDzSiJpjyhEpAXaF52Bk9tcwApQVXJSQphuRWUSxj9wLXufNtRmNzAMfeWbrJZHJMvF",
  "key10": "2NB7PBvZMxre79sbiBsRgCVupUvUkhn5whruUuFwzmA5t8AquDQGiEHts2ZyFqAGmn5nLEH1TghZ17Me1NGiEbGp",
  "key11": "mhRgCf9RWsrXeNka1QckzmEd4jij929y5cPSYK3uVsRoLh9ybfefiwVFNv46QbiV5dvUzB17CN37aNvtU6mTc6A",
  "key12": "2uQu9aZsyVifKKVBRjW8z7HiRENf6KTDYRd6hUWz8pjh8B2Li71taPGjvcWqSeZmJE2VXzmnm4jn1uQzJ6x5V9c3",
  "key13": "5YeeUcBaVn7fTqB5yA1C8JVFGDXTCqUE1tzhx6nwJ9g4AvLjQ3bWjDkhgeNAWUJsub6ptidHF7vPhWdZMSQ6ygg3",
  "key14": "Aw2J1bYcg4LZyyHUJ6riLaq2XMecqfPCQFxyxrk2oYvVdADvi6fSKhXyR3ki7gG3StifdPotzdZQkeChRxubocQ",
  "key15": "4WnsU9L4zQ7menukpCnEDHA4BFWEaXWKL6gXs6Sm5zgUYdFciui3FgEAfwntAwZTDwjhnegqDCyg2KvJmx2nqmYc",
  "key16": "4ntMJ5uwXhwDorTimX7JQe5G6uJ8w43rzjVdgMfDNNJrJRcDugjnZa7W8G42YK5iDmUM6Dya8sTJmqhvbach3xNo",
  "key17": "4etPCXvDjp4BpDLP5oe6KGzjCFbLCSg7fzdLnGMcHXGooRoJ2oiAYZmDeo5U9hSGNi6cPrdC9g7Dkv2qpUYtAStw",
  "key18": "611eaboZQCJJNkaRhqWxs9ce8JMDBSZa1vE9jiZU7htYZyAphfQKC5YfpTPAyLbwsrMZLafsNQoxkWNMcEaRXTK4",
  "key19": "3MT1jfE1kLotSReydeyKBqx7Bjo9Lh2zL2ChwvpX6bjTurvLFqFiLd61ppvwpy3YAjx2hFtgJF8ppAgJqcC62F3b",
  "key20": "3bpA8nYwvAbSdkVakiufGjLqqgPRVpaLsQnapDBe8G9xVMcHGnnFCgC21WghzzgCy6sj2UFDk49JAH7hw2qZdxUF",
  "key21": "4wDeCGKK9j46DQSQQ4KFD1aneb53F8pzWwuDsPgHeQUo6qygErjQDqaE79mJUR2EFsopXtpz7Epf9aC1q9AQxq7V",
  "key22": "4ixjjNUTQ4VzeABMGPgi3nAogfwMBmoSj4v3RFuPh5FPbGthZdSomdZAiCSdDRyC3qnevZQyQBKLheoq6pjURD1Y",
  "key23": "3kMFSnyCx88pmGfQFUveH5QxKaNGJZheLqrSVcAQvHeAySUazmaXboiuawp7oawoErG8ifH49zzAQDW6W8HEDWyk",
  "key24": "2F2yh1fqvJZ7HbyV4eSbWhq2LXHfBxUp82Cou6BgCTHGVXe4tpaxcxPjFTwjhtQNKgVrLZamgn966Pd5QHb8djfV",
  "key25": "iqxv3DW2f1QEGCf5BNobbxWwMW7VmJiH9xAvY1XLr3YeBZ2ZqUH5xhcyXFFLnbNP9f4W4uZxTkycbSAt3Fsf72e",
  "key26": "4z27QkHfaSMxECSG3KM4JAoU76PSYzrJD7eSBJbRoyVjDuk87z4AjbF4uqY4R48fcSJNydUBnwtz2Wu7bpnJzRAS",
  "key27": "4ChDoLPNBDkyV4yYBckeUfNjFH9bgCYTUGB66iEpra7PHFbK8cGm9nPcBa4b9kCL6xWvjDz2RNk8XaVmXWZC7Cxw",
  "key28": "Ap1pAFfir5CXBrjhJy8BMrf5xLmBre2AocLtQkvYcmeTvgU7i6dXSM5mYqWZrmNc5Y19pdntjWnHV6siyFyTaGc",
  "key29": "2cm8DzadsrZQJu5bQUuyfcvnHjKHLEw4p3Qmf4nCDipSFCKGgiugjxa8vo7WMEN4mgX2zFpcHHgR6qJDRzsh9VUz",
  "key30": "4kKbx5Sp9jSR85CyMTJQQSNBchJyGCCze825gvQE5E8cqfd3aJCeAw2ciQfEcgS5YHxteHPytAGiUeVEFdwa1PbS",
  "key31": "5x1iuP6zM4mxoP1ErWSaPHj9vLdCTH31eqAgzmGqAowafsB279f5wcQJSyFygbpYTcRPeRaYv1xwTwYCdudPm6xY",
  "key32": "6531LykZ1bpNc5ixHtuzZCwDPgZbwChACua9TT1JeSQgCkmm2bfDuRm8nL19KKeQhFKX7w1QooSDUcKpRfeTGrri",
  "key33": "3psK1qzikFQPqVkmKroFbd8zgv3JE5kdjnUngWoBGo7jPJWhYrCuUvewfskZF8eYTjFzN94Z6XxN9foSeupsGd4t"
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
