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
    "5cKzqSeQ3VEdWyGDMj3M9Reb2hzdGoF8XLdmBxX5BaC3hB9QFg3zp6pzE8gq42ShbL4Dc91nBNdj2ePsFqPADKMF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aU7MUpC6NNosHm6wo7FwwzNmtH8Hiem2dM5rMTFbSeuJQxEGSyxX4Jywzui8gJG5BkAvWxSDqZjN1hDowKCszsw",
  "key1": "2HmhCuLQmSvrE9gyrcamK6S5NmxpSUCnGWv2vLNDmVbsAYLCRu1jmxSmWpKVBjaEDydXZXHxDtbJapb5PADNSR1M",
  "key2": "2JcGDQs48equ34pqomSgioenWEKSEVNjFX2GhmMVYrgBveqKv5nyTct6JdA6XYeDTd7zwBd1y6y4i1pSwANQQnYr",
  "key3": "5RcZdEmUM34YgypZq6uHaNv6sf7wCN52nR785wn1ncsYmzFfdiJJZGH9W3GCTbBTWvvRs6pgnmHxETqJBJTEWEE",
  "key4": "5xbQyZ3Y4V1HmFMEtTZa7WpxLR5G7ahHEkyaghd8mkkyXMuUs7QmGEEfT8DhywoEzV7nPK78KrUHNY3xpappa1QY",
  "key5": "DkNVxcESgSXZqk9iTXPJY8N6rt35zRDEJKRQjcJUppUpSV1KCAyGSpPm4kNDxH9xLpnvro3R7tEHP3AVLnKUXKF",
  "key6": "riBYwBMMW19w7Xz5jEH85US8qH4iBgEydJSuDt2W4BH5j96NZBGWuCeHXD5ZeKPcZWpEqqRFS8mT5P5boSezKEj",
  "key7": "3Nv8tbnfkZ8iwiXfaK9epYd2ToaZpS3m8NTgATXSs97hHfDSgCkkmv2FuCSKK74S7UusPYa4LNPmfbvUSsBVuuLf",
  "key8": "3YAqTBXduSRmz1HtuSTvho6Dp9sK8ynmCWfr9s3X59iM8eT6TzzXrGKMqKzRTXCrbVEXqs57HDmJfVhE2RbKe6Rg",
  "key9": "51VP5vRspESRKypU2tAmSFkge2EcRwppVdPJZyrUdobT37rkFsQpirg3Z5gzJSzCb4D6iBUJgMz6NNAiaWpgd88b",
  "key10": "3eues1p1x4G2dfGm538WawexowhzA7Ap1TqJAs5Rjf1avRNa8M5XfyCxR3KPGdL4JyhKVi7NE669DwnqPsotBn6C",
  "key11": "A6LSWgTCMWgy2VYj1iqsmdRZ9tJgxy3viferfrLrVPWN6NX1e4mcRWxz2gsiFjVXXcHkaY6wnAVn1pWm9nuutKD",
  "key12": "3esacLCHMSBNVrQvy6oUnGUDHmmuMBDg2yxp9niZiYxrtYcXLfqMAjrn21u8RcjCF3sWtjt3EXkyobCdYR4y1uYm",
  "key13": "2pLWakzAtt9QuiNkZWUKGVnZWzP6xG1y7CEUt1XCg3am4fntCXVYn6ZpZ3DPCDa7HLCHuf3v4hhh9s8t3Sw2dPmh",
  "key14": "4jUhaKMBeRp6agz4L6VGnQPzJDxBHWQH94eXhb1GBXUfw16xUyJiVxKiTTN8z18c7uwvSTbsPhHKDqzWcHfKkWKU",
  "key15": "4MdfQnWEqDKQq1eUdCYoWvcWpt6VVZct7ERkWivhNjsJ14STWCDkLjnB3dX18xz6yRDCw9e29FqDa34wEzbHgcHr",
  "key16": "4qjz9EJPQVCqMNiRBbj9xtjSv9uVcsb5anGfxznwyb6X2JywhvgLiLry6AHHbQ9zAoMMZePVXXpoUmfg3boN2rXD",
  "key17": "4uuyzpm7daB49R869NyLMHk9nhQaDG3H4g2h5jZW5PAcBFASmwYx8UtoXCvMrCuQf7Efdf6fFi5hy7m14EkXq4BJ",
  "key18": "2xLNb6Xs9rH4dGyKi9FyRmA3K6FFrP79SF25v62UfTYMyadk9QQixw57aPGvqDho6jn9gbDxgn2QwmUHsrHrpdmK",
  "key19": "3k3JcTfhFP6kTFyFaC1RLu1CGcKavkgYpwBXuaAqwtP5xFSmjjAoPCmLMgz6r2KeWswQfKs9Nx7hq3DsjdhmSWuv",
  "key20": "67haZH44wyxjdWRqVgBtKpfiysDRHrQuDZSvq4e9ZYGXX8vgXanmUtjc21tVSRri3s7h1ouSEN3u55QrvZYqJDux",
  "key21": "38uczCYa7UDB9ZT8XX8WJkLtxhX1C9VfCpu3Y29dvL7crojeEKZZvJQtKcfMX7BETRPUTe3sGgraQtVEQN2xiNrW",
  "key22": "nJquiAWukqfXZ8vk8m3MDsoQpAiuNnCXwZPSxMdZJBWHGe1XSxNANf8qHKskx57qFutxz357MkAMjwq2JXoBSbv",
  "key23": "3yMo1GgdbWjmi2mvD2AZSpYzWzxKWZRwt1r9Y4cTnbVKwECy5d8ytYF5NTpHHriQzRZWeE33ZpSbvig41QbYbfqo",
  "key24": "5ekdC3FFP1s7wSNZL1jMBp4TXBqwH9x9N9JKxJWWb9zsWinbSpe9gPtQVCM3yeonrmu8YQWHwkAvGtQdVD9jhhcn",
  "key25": "3kJVVypnyuWw5DhWrhaxpTbeZP5YuVaacUhxSryG8JTpHtQxe2vofk47qXYd4s5PzUysDW7VkPf4xwPMVUSUdDF9",
  "key26": "5kj9vy7rAKrCeZbvh9S89SD6swarEZFeBj6bdGPNnQFYhfjj3LFWtUGo2cSWwPsLWgwYEeojtodS8H7pd59kw2YC",
  "key27": "5ZvE9C9svJrvwPk48bs2i7ixXFHDwMGqTiMaci7334Pp5nYXu2c6KhsbGNWJ5vJMCJXeJBWj5YMqRcHCdnk1k7Dy",
  "key28": "4cdCxjSCq3miAnws8Qpbm3o79t9RXeKbjMoUF3c6WAtTu6UKCz5E6RJC7qUgWV8AyLyccUJArqekn8DVN67tLmcz",
  "key29": "5FN9RKTMJo7ZyC3qixeKMDLLHqKsvXatmXEKgaDFPeaVNA6nF562UdiRdK9RnRxL8HsHSatZkcnefAnEDQJHyaXg"
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
