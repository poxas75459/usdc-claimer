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
    "2caNMHi8x4qJ6kB6uKZjcrH4K2Cdvigu2f8Um9NVdcsFS6DzY6S2PrDyaDwhM6pt5f32E5qvUKwWSr2bd4ifu6wA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gzsV4E7TYLsKijkS3RzLBCWde86SzVf8ZGUoFe5gqZvAsY1wHmJdB8WHgdtWkTRUPsgqTt4EUXYwTFPLHetEC5r",
  "key1": "izedQinxHSNE86hZJsz52aXHLHxQbvmMkGnJyAE4746a623Fu62RwnYg2aJnxXEnPBHDW6PkLzDEZr4qxEL7yGr",
  "key2": "2MDeGAyjYnfaPTUCy2m5Xr4szBdFvUDJQSsxFUee6M1z1VRbhmnEPvWknBERqgPgvuELcENMEWWYUqWQrB6B7dEZ",
  "key3": "jaAHjQa2jY9eK7yVWdVNRQQ6iyXneb8T9TwmiMe6c7dFWWZZAvmhJ3NQur7u7HPqopAy9mQbuVdnzbyNjqsmU9j",
  "key4": "2fUHk9yR7gp8DjSU7N8GnSWkQ1iC4eYqaGF6aHtVWiMxCZrNBGnWuND9wpiTpKgRV54mUgZ9zpx9UVbjvf295jb5",
  "key5": "3B85Fu8MWPKYRiSM1bobnNNdkzSdeVuESKdwCqoQayka8RbgHdnznhhX9zM14cfEgcuhzNT9JgXYRLh1PgkdTa6j",
  "key6": "4ZMAcJa6jeAHZdAFb1Ezk4Nv5VgDAQwZDMG8UEdshUJBwobAsJDL6Ssgk3feFsXUJ186Vp5VYDWYRaD1K25AitPN",
  "key7": "eSE6yF65a66ubejFDa5v9iGJRkRwVtMgJkRiCvo8BudrDcB7mUwpPhXwZ26CtzqdiQxEJ5BoN81AJMND19LouYt",
  "key8": "17WZisZuFPE54HDKEr7PRrtPmE7x4QvBvpiDYLH4M4Kc85fyEDMZgGDsqAvuybQCt76KDQi98DpGmsRLctqdAxW",
  "key9": "5L8GzJe7ekdJPZDtndkJqBpPqqiyHXwnPAHskJXpFs2bhmbDwTgWzLfj9BMA5f6mZhmcpjewBLKHtHdLHPRCHmrp",
  "key10": "3sGEnzmQjR9dLJMMvx1ukS67Ax9E6drP8aMKmiaNgRbFjMaXwBmw4kwcdJjLC82NSXQ9nxBvNusyZzXxb4AG6v61",
  "key11": "2FZscSnSYkxZqrgmg8VKU2N1t2adjpKhw5b7kuPviZZkfa7Ez986pw8kNym32E95V9fYAvWb3XugCD7B3mp2zqe",
  "key12": "LGp1d42jk796GbaZc33b7CfSX7fb8gJuqjZnQiEgTpfFEDMbfChYYwwU4gL6AYsA3DevTcaHiUjLeRvv1jikVh7",
  "key13": "2YiQ1koagpq2bEnxn6Ynxjun77HFz7tJqsQe4iLGrzYiQmJCdKJ9zDbqQ6o5fLgTs9jSocJYf1e5ZPZPGb9gDD4t",
  "key14": "3fk3PYSLUXRRG7eqhnCJyNw5UuErDY926Fxc8y5PXuFBPbhxd1M4JdVLhA6Yb7pQrxrT5yTxiLBYJug4Wq4w5qxj",
  "key15": "2A9ATqmgBgXXXX7Z9qKaK7GZKBH9zmrc3GS9FJxiGS6WYMRqVGAd7q7YmMMJzRTKgHrunJyx19peFbgP7JbvbCub",
  "key16": "mN6VU8GbRhaTa57v1RrAFdLDDCzb8V6dWkBoFggHkgvhnfMGJNToSNJRM5XZeAhwgh9VndA5ffkaiZLVpzPWmx4",
  "key17": "4dGHt9uw7nG2V63rRRZvHMFrH6t2bFEAbYAYxeew2QBQoNmZDBd92GTRFSCLz1MvbtVDJeN8VreYekmtWEYzcV3",
  "key18": "2s3UmJdPWRtUBRoFfGo7UHZUgjCFqtP1JiEARUSWVYfdbaBUnXrvXZv5tFZkxE2k8JhhfZdE6ayccDUsSQjvdsE2",
  "key19": "o6uqHQoKpTeEAS9JyYu4wNhoUeDypab9XSxC5wtRGAEySexzt1gA1Fksi72wVNfkSAbLf5cEzS8JL8Df2UTGDwy",
  "key20": "5MMQvCxREtR9e1ApM2G8S7FCrRacRm4ZKwaY26xLJbaToZByAyzSfy8NUTh1NFfeP49U23tf8trDgUm4JYXD78i9",
  "key21": "2QXajtNZCFDdFWd6Zv4FbbUmxqKbxjj3SBw3dB7L9ps3CEhw6y6LGXDXYjrVviKxHQ1H1F2Pauyf7JW6imrnD3kY",
  "key22": "3E1FDJRgjzpP5NHoDexYR8FDQYVNKs9YoqaE9Qdx2KjhFDVg6uFJQT5AMfmUt17sUAj335o15xmNJ5UrQ7fBZLvW",
  "key23": "5jjK1LXv1o33YNQe5Gd2NfnBEk1YkWP7ZQYBuYcAiuCf6ZhaQbyXBRCSx3Ytz1yo3JVqA98V7vD2Jn6cjy4pi1oo",
  "key24": "57ZCqdhGbqsoxrXgpeXDGn1FcC3qz5irXNMYaeMciVpDQFB8MF4vsUickPVN5TeWfRrfHs9riMipTJB66rW1eRXN",
  "key25": "2wxpQXKRSV9rGPXWquGdr3r1Es5ur19uH41McTDmRbAPpbXxMkQbHvCpUcwoJe7God6G5ubSvDkH3hX9FizeMUan",
  "key26": "bGoN2HNw4cYg2xp8ZmXoFjmHMWZYKBfUZGo8dRRv4EcWCMtQAaXFbG7rcid7Cb35TKWTfc1U46KPNGTPxaubBb1",
  "key27": "3RefEW7taigtqvkkjXpW6ZuiTfpRGPb5h5ySPHRUyEZNxTvJSphVqr2g4rdHxa4ZkxtrEhjH66yRRTE2Kg5hdT2B",
  "key28": "ENrhaNwpv3u1rvEdwpyDEC5NsyUaWjk6Q9Wc7MLfGXULwB1gCYRb36ECiiBHmYQN35cKGcYFVupmqq9tHKnYPNF",
  "key29": "4ygczqqYAjXRuUZbNqdm2KvHFm8dxCpKDPGfGBJxGTsftAeTMbnLgvh35A4y5gVTCQ88hfnrBMqXiw9tUb3XeTh7",
  "key30": "4BQA2b2dEZ9dMVc4HAQ8Vo9EcYc2bXj3mWyus1XPVPGm1TJHZa8E4RB1jSCo1wZ94bMyvW4ebwEccaMC8E9z75T9",
  "key31": "3AbHaUGgHvSNn1atwh3XuSp5vGCykHmLmCnQMhcaUvtMNg5h8xXxv8W9rBCPARjBQvTf8V4fYHEezXUd2JRWTZwU",
  "key32": "4gbnfikBDXzaspbqDGbVfYCoXpWPagtCdQNQB6itHKX8yLxhPmowXAs8AKocCLyoa6NzbqGJhTd4tSFN6t4QSrmA",
  "key33": "4vey92nymSHMJEk5yA5YJkurJx5Mp5K3FfZfh5dRRcbbdpxJQq2j32cY6CGk239NEmzhdmfSUXsc3T1HAQXoC7EL",
  "key34": "ruFPVriuPr3W6ZftGKz3LXu9CqhvrVNeJKZJBSfF1WmJaRcgrv6iTLofe66LDhXYGvTN9poMfpnMaRHEfpn4k21",
  "key35": "4ZTi4svcdYFx3eB43z66wy9xPn617TS7wtrcSN4RGQfkSKPrUSTFXhMzm9eXPrNC1spLG4w877z16vxJN63wzRqu",
  "key36": "5tjxzB1RnUoDvLDCDVm8KWdbUXYYTQmTpwLpTEj5GmEL554JUPMGt8DZdJi6gZAoHPQehLtEKWVwnYD7FSDyrgMk",
  "key37": "hah9Wtz88aNp1K3RDnMARYc88r5KUboGh8upuXEiALtqfNy3ps3GnyjEu7jFB9tpZqdTLdLtXmLmmWVotXaFZm8"
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
