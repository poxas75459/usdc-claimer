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
    "3QikhyQQbXpUPXiymqbvK8H8EJhoFtBFi8YVLRebMbVXNL4tmhhJTE6FvJcm5mPtc7rxH3HGKnVBiWkdufY7XPeW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hKT628minWna9DcK34A2yWhV1goKn4iumdAvBCKB9ZDWcqGY4Qw8VC6MuT8ZsorQkixUcuVZ39hhHMkgPgVqxhE",
  "key1": "1hoczPWnudXeoKEPP3zQVwHMbeZ5jgrg3mtcRGWxeYnWf7J5GSryV9yb83i3MBgF39osJcHhvDvW7C2Jv8HmjWZ",
  "key2": "3h6qdA8HWCbQBF7z79d9fKUZdRGhGdcYahZHAZjkPFC7AcNoeTXCvTdLzGDAM5mCiNot5G8PVMSFwxNt4rRvphn4",
  "key3": "4iQnzgquTTUPiuLZMkWg6AWKUvUPtLin3ktAgUEDh7YWjA65pd9QHCePHEPweBExrsHRBAjf3u8Y9DvwYyXjtria",
  "key4": "3RYij49eA1dgSDcww65g9RExxsG9WVsDhNVywswaz3Dz1rGdwtXkMqjnNwTyg3F8j8aYnPqExpUrjRiWhvRUxys3",
  "key5": "3PqC6FiFxPTRiKYV24cHBpSwothNQUj1nyCs1VUjnUN8f7cbacov9391BF9wNm1en5BHsSRhAYxF2iMWGgj9mUVz",
  "key6": "5qaNAdEsnTgCr3dRYyiaU92ZZqejHMTR4tXBZr9rduam8WcGmQALKTjJiFr6GZAaZ6twq1nyj6LXTY51WegiMrHL",
  "key7": "vf2Dghr3YFjXZ7RcUCKZZ4Q6pgwTAmpof41KJoVutv7ffupGVGUBums421o7dTFHk1vfGDkMpisPY5m4Ggsrj4H",
  "key8": "2Sf3geH4S4RuN94EQ7u5vP7hyJqGbhoZGLU1kHboPRxJ8mrZgku7bA4N16osUqc8jxHggrWPX5hmg9u7Kr4Scxqp",
  "key9": "21cuyVa68fLm6QY55VfJ8tHMSseX4JBzJjLquPu4HSb1qj5CgtZgWwFvbWQKmx6r3TqA36QsjcEWHdf3F1jahmGZ",
  "key10": "tJcnevaZukwbfFSQEMUwZFFQGJLjmQqoi5Gxni3eZHi5q56Dy4PTiDw5LRbtJfMVA8rBd4AuwG1SZ3kjy5YT7Ta",
  "key11": "5WjCnZWhqnD7NEnGmz7TRxfk4Hr3TKmrPs2ekAmtu4gxyHNLYFL6ggHMDm6GC6iMBXA2EKbxFrS8XgjB8jRRjYvo",
  "key12": "5iUyM1vfsFjKhAuzp5P6FW4Kr2VRCKvr3moEdrvSzUwKPLbZ7r8uxqMUAamRFtg8zLPCQ1QkumnEdAttRVhWjcsx",
  "key13": "37a1pkr1wNdjEhZMaujx3AeXvVsdXzKV5zGGN2ut5Kzy8LnfWbrUgEcCiWWprdL16oMwVsHNcwbZXmxYgcu5c8V5",
  "key14": "WQHJWyQbdwjj9R5yRGfeTQ66H5AQh7JW7pdiUPTaAQGHg2GivRz5wViy6jmpeKr8tstav8UrPp83DxijWT15Lpn",
  "key15": "59UhKYKZsUBHo5h7RQy84cwpwzCVKJiSi7ns9JMVCfsDde1ZYAboKQKATGy1Tb4oNUrCmm5fyunuzNBcf89pF7dx",
  "key16": "45y6n9oLZogLTRronsDw77RP4eiKWq3v5mywnyq1FcbX8zjCdJMvHCM4BKGagYjMyS88BzjDben68brK7pSsTmWv",
  "key17": "2gFpuVH9d9L1E5LqT6i4B4jrc1dDWkTx1pjDvD1YXK24jTPCkVHruzuCJquuPPJq1S8exsA6itSWUF1YzRaruSjL",
  "key18": "5hWMT6WWDP5SKMttnsQX2GRmAbfs9qxEFhYkZozoSV7tBWCVBBQrNCZ3xriA8fUyfnNQjKBmntT5KacCdM8jbHE9",
  "key19": "2bPPbqmW8xFRVkufRe3Z6vh2PoFsqC2MdCDcV6F1UJ2DjZ3SmfHbQqhkvd3KMpwScSnSWLDh2BbNPqjuqigCzrzP",
  "key20": "2hbr6orwHwABmTAB1zYak5yWnnGU6H4VfAKAcTA3RULbvAdnen1sQroMQmGFvYoWBjFeZ3UVEzuswDSbBu3AWUWF",
  "key21": "krMg9C6nXsW311c5G6175rKKGvKmSweUf8YtjFpfcSwWAtPceKyAQrcBdJhzTVNmX7xfjQMRueSNKdpTgeAMaBA",
  "key22": "42k7WxB733dNhe5PWSeBjAHXG8FLMEYNUxLjdVJvd1SBA99cmopS8eadgXSf7pEr7U5VkehZ2EPPmvXPzzqUeyHd",
  "key23": "RmdgovY1QpfonPWDHvQHkgZ7ZFoPp2ArNhAk2Fi8tzNRd8phvJQ8zqzKk4sm8Hkx75S9k6anQUcfdNCpHrTx7H8",
  "key24": "5DiF66iDqw4yr42Vgae3mJDhZoaQif8VmCo4qmgmX9GAdgetYoFF52RneEdSs7pAygPN3gbVt1vuTjoDtibUmqeg",
  "key25": "4CtJfvp8jhwRoeCWoowxqvUBjEj3t9WMm4cbckzSGXV8geG3yEtihXa4AuNLCr18rk9bGzP5u1tKHBDJNJUQvbfg",
  "key26": "53CXsE7AqG6UjjvwSxUE9rJNAtKTpTYNVUgqDwSieN11cSoFdmFQdUfYgW7KtD2LfKCrCiTtLm9iFs4fJD5fDWbF",
  "key27": "5qgA4ZCEEkZjqcFHtxAViV4X8E6cGJUg2DUHu9Kybd7BXBqQ7fa8Y9epfqV8RA8PTjYGVx9NYYPEA4jxi1Z3x4xR",
  "key28": "24bnD5dFoyfZ3hfGSy62hnxq6udZoLNHC2pug9WoDFs2xGcAGjsYCkpDpZSxQdsT3Ke863tcc6A5uS7XYATmRM1Q",
  "key29": "9xG6SXgn8JEz3pBE56H6vx13qnCcEKyQMy85r1WQ7KmP5awXWSvPZLaKtg3iPFecSEbHAkQL3s7fPJrZnpkbiL9",
  "key30": "4a67MXsiu5Ah3RSSn6h3JTBPZZ437q3JoERF2ak8s2twykH2cuwPRyP2LNMxpVrQ11ekHgV5rt7kCQVMGCXhgSLF",
  "key31": "gf5Z24XnPBbNhgFz41n1RxcbbX9tcQjcNzTWeNVFmVjNQBSX18fxEYQPnoucdnaGKsyde4U5kCq9JYNK2xsJVXY"
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
