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
    "6kBRQxKRDUyowwjWj6CUQx1yQ1HN3WQ946B6hRZpivFBAdvaus9PBzc8E3bBb3U6NEmZM8o4RSN4d48cHmLSwEi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wwuzBxWUKFW7hzH4XURUSbqf76qSsvNVQx2RusbEvJZw7SqG1xmQwji9B2wPRNXJ6ek6CHBnbMB2QXvYuP2VVPK",
  "key1": "43ZvC8rBv6HAK6odpmKE5XkkahUb63XKcGZ9BhEHp8KnamzMHDu9RNBZbn3Yj9oAeXhbttw371wm7FK2Kp36Jipz",
  "key2": "3bk7J3hYSCZrBYUc6ki77Xm8Nvruz3YcmX3WvhvnVGPkFeaBQJhzr5SAf7fP7A7STq7dPCoxmbcpY6HJDr2FQrSo",
  "key3": "WQq1fsfsYbJQfj1B8PgkWLMbLVZ68hhBa9toYHrFvsgU3s1G66VwXXR7PDCWP663S7ub2PQp5sBFVe8QT2NWh5V",
  "key4": "2MMW61JjjxF3MLr4C1pAV7gFXTbwCUppu5MDcUfKdyMWxAawUmfoUcwpDRytTp1AobX9nWNYuzV5JkheK95w82Uk",
  "key5": "3G1k7qSXkbqonVvC1epdiddkft5jjFyZgkj2mwt1B26HQm7ad1NZbmqm4XE575TqFfuAFB8ttYAZ2LnirwugoW9f",
  "key6": "2JMRajHLHQeieBDwrr2AdP5M53dvkkTm1Fq7nfxz8f1BABB7dyBGUaBKCasv8Um1ou6feftcLBzouMJjWxPdi5A5",
  "key7": "2d5f3UytxMvXR75xvf31x45diKPBS41wFKa6m7EQGPjcbeXTvtrYyqeeZhqWRAujCJW1JxwsQNA1s4dkcUYqtg5e",
  "key8": "ASi65xWYxzk1BG15bfhiockFgQizio5UJ4Mvo17ZCUGQPsbhYpj4v7xSXWYxi1K7MZtf1zGyH8dj9UvxZfyccUi",
  "key9": "3Asq2gPzdMrqh68MN8fnrNueqowaP7Yo6jmma6cxJkuQ1mdQyjoJs4L83by8pd2WhXS37bCb1t7cvYRCsBm5zR7j",
  "key10": "3Vk8VoT5QDDt7NWUJnnEcS1mBKYopvQ2cMc2ysBnDSbC2DRoRtpR11C1suMT5sE2ANJR4N1RFc3EgE9qzDm3Cdo3",
  "key11": "cAcJSQ3RUBPySXewGDq49s5DCLHrxiizCNXxpCXcruJ85LJaxRoxbesxvKa5mkmJtAS3dksFJLpPFLRNEBijgJv",
  "key12": "1fp4QNnYWEXxPCMk6HGXJiaGEtNCPJTJ9mtz4BSb1rKLWsZS6bG4MbmYrdE1n9Zk5aehF5NpdTWh33oEiQKKNrN",
  "key13": "2tw68DiPdhd9g2nYNDqPie2hQEgm2ovUe3qZcG448U7WwBSqJyvyfxyhfWyM78rwVyFMdb2ZjeCDjCbWgwGEqc41",
  "key14": "3ENKZQQWBjtPt5bk3JJWi8BErVojJvRVpJ8sryZ3u6q7D4StXwF88gUuAkXFXS1ZwH1DLTyKiJVjqqEzGFBwkdgC",
  "key15": "3iLhdkG9eLEfvXJmQfV89HHg8QUcLL2fAWwmCsYvfLJ5a75otLqkr61kxr2E7BxKpMszGQncWw343FVaQ7krG8qZ",
  "key16": "4P89MceegNnuiXZkDVgNysmvvfrC5dYZhesppxeJHfuFXgJ3SpTheWosi1aSrb2zgvqZ4U7qgvu14wvzVRNbEYmu",
  "key17": "2V97hrEaYyBzMbjArR8DT8fhhH46ApxHwpx9hPCLzp1QtNtkSAjSkAQsdPF7WRgfioTZAJK1KxzN4d2FX3GX5FoY",
  "key18": "63f2xaDeihSJQD25eUjUZzZfCTr6YZghcyQ5TgFbBwNprSA2dofp7mTZ36fQAi114yqYFzACL2wMSv28qSck72RM",
  "key19": "2YEKdLQJL6kYyZyxBPsnXhqe7ChEuFguA6i7MfHbmS1kdJq2jtfrPJ4SVBnvJ8NjDUm2s2sy5Q1Yd26ycJnyztdG",
  "key20": "5y1zvvvi7DuN88GGhSJF2v4sAB87zND8apMWk3PckByrJYisTSVXLVA4ZkGLnnnYf3T9ZJ9SJkMsdguzM2bmJHt2",
  "key21": "5jem1VV66JVR1wR7iSn5sKcvNKDyaxJTpdSZykWJWHJ7DZzbgKDMmB22quDH5y4qyW7Gwjd5wjbBngXrCbAJfs9u",
  "key22": "3WB3yCBNWL2V92iJpsuzC36eeUTidTLk4iSQKgTwGvg7LfxDbrsiERmayi9HySmxtKb18NBF7jiSFzXghCdsQRfp",
  "key23": "2uWDV2EWHPfWCLBknrLUh5NQ8Z6bFZB2EwkhWY3d6drSwvpFurH2jmqcm1ngF55yYRyYKkTxY7tCxgdL7qxEPBp8",
  "key24": "4s6g7rvVPEA1ngmW2qW6skFvDhv6WaPXvZ2fNRkhDPnLUPb8crKaFy55r83dFcAzzRgbxqgnpmT7YoWZA19N3r2K",
  "key25": "5Hy6Ww9J4xJuGd3ZgjMjwEewig4RwHystPQrxbt5NaBbZzudYgxmY6NPM8bjGZfFZmskdb2XxsRJ8NGbJ3NuEcku",
  "key26": "2QNAMvUC1pqnJgjDLgiBTUhM9obrH5q9ZpDppBLtaWjZ6766bW4q25maboCAbVBANznGVVFvsvtYZr5SbADcz3gj",
  "key27": "5XdRb1veeQvWijotmksK5n9oUo8TccyKyWan423TXbygB5wcUYKtBofoTRZrWadMMcsqCS7JmdzKX8cHPjQgLDAe",
  "key28": "2t6crDYZBFHpF9VseevDfnV5gczat5o2ERLgyXMGjjZHzuX3QKRamuCUZBT24FhsAThXBgVSq4Yp6fqsrRvqQvjq",
  "key29": "3rXQSAKBK3QSP4dN81PvdCu4exCsyB7wU9C4tzVL95iVfJifVd3rv4LBa1RhuSDwfDuPpvHt7Ap4zEdyZPcSNqku",
  "key30": "27VWbpHjdtaPb1zxoRAvtr3tKuF8RFKBSGKs9JzjLxXWFKhjjMLj7tSmQhQChgDkjdsYZGNjMA5FAGPHGFGULnPH",
  "key31": "5EACCmHXQCzpRGxiooV6sqtAnuZxYU6CpLUeK9KaDH4wimucmMj9kMMdum7ifyi8sN8ABL2juGKAwQKHvcYWz4DB",
  "key32": "126oWzMdbUDDAB8XaNKXFkwnsaq71gV2KH1GUSquNuLis1uTLi8k3hCtqDXf4bmGSngbwh5xa9KnQ3kGgR61S74X"
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
