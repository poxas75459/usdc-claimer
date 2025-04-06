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
    "22QJJsX7Vj29HwJT52yD2j6NyRf9eXrUgNg6jBS45jA7gZmAXv6qpSLy8xesms2EhJZ2mCTBZQwumB2PJFXHasuz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B5UeLBEApJjWZhAo3N8fgh3RJjVo4d36j2nGy5iJ6JQ2C5bfDobo7DMH7vA1cjVXX4RApexig6BRpTAnBpnehvh",
  "key1": "55wpBop8YAhbPE3B28VgRMBYAgejNKDiLiNhXVLSZMiahv7nbjzYn7QGxCLab97ou6d2a4x45rWFzQcHAYs9eXkf",
  "key2": "p9PHxwiuNMpDjpkPtem4ciBhLqaK9n4cr95Ku7Wp9bqJRnR6gS4jkjhCtGxqUMpdT4Nnct12NJ1DgNigUZ2DcnD",
  "key3": "3553m3LRcfKJm1BfcVkfWVHVNWaxDFLfdAneSiKiwXgMqM1zC6W2xMdF7r9Qi8gkSmX1nErU2XccbS1Ca3ZHJBxp",
  "key4": "J8YnUPBHKdThBwS38PuM6FV2DyXXBdQcBYJG3vFsWdiZJvHKfb3SPfdHLDyZognJ4NcBtwhTXU6SAri1EkhKuqF",
  "key5": "2XZAmETMnuBWd6m67eT9drNrRSjD1BR5rG7huMCDDm5BLvkgPrR9GP4c3PAbgnSLVpRmtzKzqb5FTYhjzAQEyBj2",
  "key6": "4TkdG1FZy9jM2ZhtLJEVgtEokKGoACSbEKVXbQxomFAjJ2UKrnH6ipWTsxiMENPvyZJJJue3pNX3DeX4dteJA9bv",
  "key7": "4M6tpHyGDmRPKDCziDYGzjs5HQWi8xc4mFugy35C8BSkEAwg1BF1PTru5F32wGRGX3ATCJTKBYQib6NpiW9uakx7",
  "key8": "aE39EP21zyuywMAJNyjAf7svS3AJb3aaKq7W7vr46uJihkCXnHxP44A5ErmjVrt4uiSRwzUJRi535Jpgs1hM2Z7",
  "key9": "5nGjJzVnypgzF24DPFAuGpopCHTw8PUmBqV2KcTyuqvZspBoLSctKfdm9oob29NiPabvw6mvyhCtmBnGAExSuJQz",
  "key10": "5M45mezq43jB7rub6VtteK19CZ8oPBTkoCQjqdcj1WoHfW8eESvYLsBn9o98z9KPpFTq6knXJ5X6UYP5UW8t5jcy",
  "key11": "3tep6stCRwpEb3QgJZ8u9aGW4WGENYKWCAHBh36oAmnQufZdwC8e5R9Nvnaks8cHprvNXAoSg9ZzZtwcwHTy1nbS",
  "key12": "4DUQmpBAk5tqY6SP1JsmQWaq93XZnA7k3zcEDcNGYGpqUve1EodPG8kZKL8YGPz8ccxnWTqJCnhVGssiGsrFsMsb",
  "key13": "4wdmvjnMZR6d6fDmwWJ1K5JCgaJZ4tu4F2N1zpxrhTyWKagFLErjzE6UGkKvgbJYnuEqaxCeqmtPLjAXnz9Yn1tf",
  "key14": "5LwhyHYxZ8GHr16gAExcJiDRzYh1oadYwetukjXeEfFigvBXWNtRrfs8o4s8rgfJ48Dc4Hi7h6mHNJVa94BsLgGm",
  "key15": "3GoPVzmqer6N5tx8JMrYvBuXhf6BQYg3Z8o5M7j4SwaH4fRMu2eiNd1RvYw2ZaPbC6S2qJHTDD2umip5kaiHBTd9",
  "key16": "ixLCa37AAFR4zhKThUTZzNWw1LS2nAN67AitUvbYQY8eWxre8ZZn4pxeJRYX17prMH2Q7h6mabTayWgLPUCmR54",
  "key17": "5P7FdpcHHbrZ67Djj72wh3r29LvWBjQHcikAPrAH7g8fuStYL4T1DBA9PMjQzu5GJfHaha6HsVZXtopg5CTzzWmX",
  "key18": "3YXLQtAJnBnGS6YvcukpGNQadiyLGpFVpXAqQpTEbDN6robvku1ewRWG4X9gTWstmpLms2ERhBBxf92NgKbxPiD9",
  "key19": "5us97QtFxeQYP9vnKp5KczegoZyDeMoqZBn8Tx32SikyE462EG6zDiQ6Nm4xRKrWWEQyKgtEy66PHHgCAXgzsu2B",
  "key20": "4uVezyKgbZFhqunUsq3XQ2BEELSo8s7b9Yj6c1XkrEDwdKmscDEpwYzMtZt7WgRcJc9NyZDx5RE5EkvbB2pcPyPp",
  "key21": "437rrHhJ8jCiyogT3NLNKbDEBbietx3uZCjYQrsa2a7ptrpf65xeu5tTca6Zo3MEPN9AyJTKtNdLxEZRyfM6CX5D",
  "key22": "24CUhPHpvyHWR66d8Ttqv8bVKHaZ5TSu3J3WmZPL2rZnfj4GZWHRKsC6JgiPx5MpceusKiVQgbDJyUue8bCzfTLJ",
  "key23": "5oN2c4hSD2cU9nU2mFjk9zUc46q6AF3fZmiTNBGXWHL6vEWSucjXRLRXqdFPXCUcQfpXSo3xkuRcq1vokSVjMJmH",
  "key24": "4Lfieh21pY2BzEsA2HN9w387JEpHKDmuhazgzwq34TRGJxgDSCdahxeXfqYToy1TDVZSNPSN5cCt14nNy6ooFwGF",
  "key25": "5ubMHGrDu1nXKZMHCGhB98Y18WEEQpPPRQx9EpttpVMxLXfsQduaMnPtEUMk66hy5nTwazYJ3qjYEmm87yz6ktZQ",
  "key26": "3AAQVgPZVU1gQied7VL4w3H3RJKgSSQaFeZJtAHDafRfGFtSsZeTHHiRNWu4pvN9b7y3eoidwbYDVpQrM8i4RZxj",
  "key27": "nesWWkw5HxGz7UsHt6yg2QGdwcBPiUyzekpfbxMK58s7G2J6PCMKaTWwRGdabZrLVJk54194rS6zWuEKk1wMNeD",
  "key28": "2N7fXyWMDTGSC5FQY9aYS9HQmauntvnpf5VsDztYAMrmfaUu3s9jD4yGoNQpuuBmtPJnGUcddzfpjQic5NY7Esj8"
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
