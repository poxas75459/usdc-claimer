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
    "F12xwTDvmbcLgx6MpJL5UQEXT8fwJnX7Bh6WBd2d5bV4341LBMUnkQ1vX1drBfzKZJxbwoS5FE5dTGJELmQn1hm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fYJoL9vSwW6SakzRihWvzwUN5hRotJ7puJCmD5MP4qmbtG45SRBRb9sSKbbsyzuQDqAvqqQWzCXu2CM8r6QU5aA",
  "key1": "3WiJj4bhNMtfoVcjmRv6xwGjQ2z3UMqpJm5yCeA7XKpxNNjFQHvqmXTQWiTLL3i8LzN8bfz7wv7o1m5cRoTdUpMm",
  "key2": "r9cSLNegu6bqzyCZ7Ni7rm5QpaXDD25Fo99TxxdcwrgJLPPDuaf6c3cPgFMQXiCdQ6hFnRqQouN1oRK5qDAPZ2Y",
  "key3": "3qxqAjLdvV8G8b7ZWoLtJuuqA5yCFPxAjECPfcvK3ktbBS23eeWGTi3jHvdU75rrRKqEvCAUkkA444C9HTtQNe2B",
  "key4": "3Y8hwotv3y2pHVTtJ8SWZuDDgfbWmUpkNV7HpUPSQrKD8ovakKycmTRU7a9G75RK93JmZhhP9JW4eSweVdG4sTT4",
  "key5": "58VjyP4UWSdBAEk1n6DqBmvkHRGpDfRExNqeFka8ESoR67qnTAHXpuGGuSneXj7t2WYNy3DYky85pJT1VYeqkwew",
  "key6": "3VVxfrCLdFbGpFiRyFSg2X3KetssFFUrSKuFUr1oXACnBYvh3cxMBWQQyUp9aNdEh3GM8Bv6b2KSN2CmJqEExAYp",
  "key7": "62aY4EGHHouzFsHeCqc8QhcrZBojrE3dQKrzfN57XjXUSy6j4K6yo5Gi35UnauMhuG1t3R3BCPr3BETR5GcznrvJ",
  "key8": "QzA5v3PfXLqqPeHLnFh7etmkJ4qaqnYcuiHApDU58oNUzP2MPGM1RpMCDhArF4BRzvGSTz7MUPThf1Nga8ohK7C",
  "key9": "2g5Xg79F6B1y2aZVhJVx5TEKdBPyTxHCPM1RpwkhJJsi7DpYsM2pbebmXW21oGxZGqcLxT2VXJ9nD9pFdvvjHD3N",
  "key10": "3VYCmmDzrZEvRkHSc7ug5rwtstfMmNrcwzuvq7686j36dZbK4YrfknKhBpthrAZbxEiL2tmD4xTvvYBtMd5pb9EM",
  "key11": "5VnejGiG2faZCr9LL4rbzVfVPGTu3NGCwZvAdUJK8HWwytSaq5KZ1aQoogSPVrgEvHxLNkDgAUd8vfF9nKa3Nkhf",
  "key12": "mDwwisQ5o2obDs8khVrZcNqehcRLT9vxUjdGTRY4sCF8F8KC4DCzajYLdzkdMYDK4qCoptikfZspNAonnFPdgVL",
  "key13": "oKJuCBZfPi3dWwtYRamiUoefzrFLrAZ4eLGSXDx19Ak2DJ5vrM5eyFhZfdXYJZz14JnGvRXiuf5Pg4rN4Nc5ryZ",
  "key14": "58SWswVFoqgahfDEHxvhygZ4onCLBySu7QgPAPXmRSt2gRCRsMrnKqA5Ypqcur81Q63FbChY7upmSU1A6yw1bNPs",
  "key15": "sc17vJXBbkL1M1rKit2XF4NU1q5PQDWkGhzKiCtHyNsjjTZz7Anx5ZpN7jMnq8E1ngrZpy6xGZgne2kb7XjN8jt",
  "key16": "eVysWnjydf9SvJJm3PDRDum8ScK8e878XKzrpyzU95fPRVBEZAjQi5s6syCjuJiqQVcedcFmHwoSqFvVQt8U8B7",
  "key17": "4fkz7FWcixst9gGnmq12suL2yBSriNLxk7iFNGPMMCAKSH6Nd74gxx6fQwfuMVwZtVMbkdR26SKvvmxft58gx2Rg",
  "key18": "3E4PckT8C1gHagP2NwcaMn78FKhBZPCHSubF9ajcbYrbMy55RoBLuGi8NmWiPS7KtWZqSn5KbYjhRG3L6zFf4yqG",
  "key19": "FeTBZejFT36TL8XkYgqwpJRnzEid4BVVGskqb1aZSsywVzzctYmBNnWmZq6DRNCBYPMmm5tQg6ShN2wW8HFLRLn",
  "key20": "4V6ZWNPz5BijeWuZA89FytD1Kkip39NAQAKuVzNJcyEKK3KV9apgazXiFyupqgpRJdAggpm9kJdrVEnW1W1Q9oUK",
  "key21": "j7iuPWZUP82B5d1QS4To7hoYunMRSXgTzrJD2JZYtytNyit12SCYrQATEV5CBMaZP8jeJw2ANqtv92xEaSqxAmJ",
  "key22": "3jxQrgn56vZqZvqfFC9fFKFCtWTqR7K7dVzFAgX3JDznYg59P2CE7VKn1udpRehQ1qUm8Y1EdJEgQWiGVFKBBdo4",
  "key23": "5VqwYv5AuDfv8LodNKztszSJopcHuytH87pQVccjhydEqKgC4tdR1Mdm4SGzPv6cmPL9upvXxJugNPd897HCXsa6",
  "key24": "5tHWYZ7m7MdGwym7SoEDShyUEitTiEGWixjzmvdvF5APEfQWFSSUEKPU9x6LmNTv8dWQ7yN8LmnCg2MC8wWmRX5E",
  "key25": "7vqSrY86ZPmvdFK15p8WLiRNjdRL7gW8J3smjMiiLJpT9oZgKGjWYeQWDWbzwoQ1ma7zU9PtY4t8YGf1zpfudbZ",
  "key26": "3xoXSjjLwSMrsjyThTZ1TqyHmMXJ42YwLUSNx2vQChxXds29iewU8qgo8vkNBQXeqsw5hWpguyHX4nqaGLeUfmM9",
  "key27": "53XPi5gKV5qmUNiVtv1gx81BfEACh2eFdnJfe7H9cM684AgxFQHqL26NckcwZ1Pfufkpa69hgVq5XguWYRhtZrQi",
  "key28": "rZ7pzRyBP14iWN55Hx9xVfmnXtqEtUwZo3Ux6Ph5AK4X9LBzrBQaz7cCNKm5iNc5QrU5dKYqa5B41igkuahVMZ7",
  "key29": "cYmJBohhurWRPEhwAfcm2JfXJ3LMTE1Sx2LgPTPPF9h1rgAxHyCB5pqBFu1sVhV7pQjhtMLXNWffsxaY2dht3KH",
  "key30": "4KDsTwBXpZ7jxwN38tbByvvZXUNhjq2t7nYoFMGaFpYWMmc1TnCYvL2VkJe5cGjsDECAQkNZPn9i8GoqzstKgEpk",
  "key31": "4xxwm3BzaPpQWSPgbujWcwQsS3mZshCheeMmB3D8p7z429PmQfzUaZo4H69A4zFsNRBye1ktMDMpB46DcSLcuajs",
  "key32": "5mQoFdkWW62mdwuDn2y8pU3bXYSdQbq9wfGPcd2QXrLs4dXzduN5d34XXrA9s5tvY8qoGqaUJ2VTBguRgKDv8GNk",
  "key33": "5cu1RjF16M5qMqg8X1mgS62UMss7aBVZgVnGDZ3D7WsCb58mGrHaLrxXjMBH4UWpWbm4qzCmGo4Sn24bjZzFDzLv",
  "key34": "5TZL9jYCbx3KLmz5o8yyKmszTbNjoABoP9S3HU9v3Lv9eCGKrc83ds5zb7G6rDAnC9crfXwyLdcXeADfFzEDyA86",
  "key35": "5sh9ysJGcWstMvyfUdrh3ZbG6zuQL44QhqdPnZbAWFpvR6o7Jnd9G7fGRr8pMMoxZriET2Zaya6XzeMWSpyhdydU"
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
