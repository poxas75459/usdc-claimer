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
    "5cdkmXQyReiDDnyUTWz34hh29ouKDrZ72hPgbjSyaj4Mo9H7WBJ7vy9v91FKoVhmeK3djAgrKBPqcEvkeuVHnsXi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "221J7hJ77GY2Uqu1qKoAyX65CaH8uAdD9JPnNntdTFtSfsfNcBn37dzo5BLBZXuSEZ3uaTmvRzKF4MBgiKPfcvYW",
  "key1": "4x2CchWTHs58xgWccRWQncZggCB8ubYcdJBZueLwAjDHoBbavMJGQf622kqdZGfdAWXWNS8hh5HEda1ZL9q1vieL",
  "key2": "LzUMSFghjaudLfToDTs2AKwPtbePsuFvnGrS2a6vfe2stGL716c2bXjtk7KVDRLGqhq7EuA5571Ta2PegViiBrt",
  "key3": "4ZqsXSjESLq8dPjripYPR57u9LgJ4jnpTstR5YH34hMCQATdbFFfzhqYXTuwjgfPZATeJPMrNjXpGz2BEaUf5jPc",
  "key4": "2kgPCdYkWuJjxPiat6t74dccnKK2g6Ymd6twBVgBfbhUV3cDgvY8z3EYdmXWPPue7mAbP6YJZZbL8hV9eFnAbESf",
  "key5": "5vTxfF6sLoSXrAyFo7NKHDLZeEuUhLJ4v99LgrP3g93W9r6CVSEw7jVtyqBguHok7AMDZDAZ3a1VVaRhTWi3Cgcc",
  "key6": "2oyf3RZL3fCySUkbE1yz1HNdSWGpe4Jv2fkGataVwgFHfwGbei8JU1ScFKvzbLN4UctSt6cFBnxCyzNUXchFbU5V",
  "key7": "4yeRXytTzMSStytt7vQveP5LURUWaD1GNZ3Lcycff6P8LcrLRgFsAdSX2WTkH2GSqeT2oqJcP3U2rb8DgGyToqGc",
  "key8": "3dm7hWvwf8yDFcu3WVYTEQEwX3btfVtYzSi3587RfnqdGEDkVnXHFigXFZzCK3aZLQCCDRSxpwb1eu2Ghq1u2WLw",
  "key9": "2pQKzZKm12X7MTqZzR6Wj1dXC5uxwWPhgzecYAFhWtg88pjA2ETEP3eLAM5Q5MRHf5MR4nwcdrtfXLQWM57E9wP3",
  "key10": "44mo3KDtaZJKH4BoUMsuS52XYb15zPxYDWTaN1p15onrt1GXszeYXVX6BFwDSjPo8xTxzbWkVcXNEj6wr2M8hbvy",
  "key11": "Bqobbr59ZFH2QHvWmG7ZvP8vxFKDtzC3Ms8mrhE1epyLiXp5Vy6UFkZqm6qcvGvWZbyDXbpR5nncXS4n4QnFcLJ",
  "key12": "54zbzsLsmdjjKx7GhEc4Vtcr9PGqJo1p9F2j1AErYYAeXtVkS8B3C5Lm1YJV7N9yvii1dSWRMjckqqzHKjvVKQat",
  "key13": "5bJmBf369R2WWc3Ei3YUJMhcmGJPPKWgV6pScvgL33dmkKf6MQ75Bc7Y7GXyMwgPaWj9d38S73B5zfJxHyi9iwEq",
  "key14": "5HFHsFzXVY7ED4ficqZ573LjqGeC1UChYoDvAvJ1ddVJ5Xeag1X56VbPLenHgju2KGTTK2WWuQRAzCMSQCcNAL3N",
  "key15": "3xoJjMQ4y8G5wnv7bsuNogNgUGXQYuVdChnUtDHe4YuHPND2oQoee4uko4YDissqTwEJxiMkKEkY3eFpLq8Gx3m7",
  "key16": "3Sz6qz4oNcieJV6sJfBxYiZpgJujwJQzCE2Hrx6ucdP9iGZLBHQGrF7bWNfMhbuf3JK7VjFB5tLnf31YH2aQfNzw",
  "key17": "2VCq8UhyvN1CaGp34qzz7PCqMDcJ6qJVGfM9Ei5uphhMAy97gdnDTLqKF3hirDFoHE4YEA8QZ8nnjk1FTEK1mGZR",
  "key18": "Q7QTpwRJ1UbSEA4Wz3v42vUxhqBu9hGUcrKVBCR51f8GgSnJjaZNd9aJw1g2horva8vuYxe4Rjs3Bd5x3YZVykM",
  "key19": "3xzfMKRStHK5XAuzQmYwHD5Nom1wDNFMPQKAEs8d2c3W1iockTpzuVLfWjt72y3WpJosZyn9TSHNBFNvxNvoCVt8",
  "key20": "2dj8w4VEuNfzYFWhLK98LfWovibTC5EL7HBnUgA7NFasWZwJnY1NX1pBnuMfGAdGL1Q454jmNDWYjY3EFqP6bVZw",
  "key21": "3QyioJpgoaYZhbNZmCyinWYLhPrRQhKVvcX5h2Y4Csh7LN1CXFDkKZgZdTAWxesMCMokPRnExi1D25oHDzu9gNpv",
  "key22": "SK6rPA7bRR3KTSZvNdVELCMR2XvHSDPzv1KJFvSpedEdJD6jFJwg44stnDymYQsoB5jiAKq7eKuC1AfbGSKqe1b",
  "key23": "3Mfz2Fq8yB5vZf1AZsTH1pYYFYHRrLef3SWBRcX3n4UvNmWWqi1XgUnvTirbP7PeFMM6ErJWS6wmaGUCkH5JcFYF",
  "key24": "4phaFpbyqg6ojpWXNoeW69XbKxjDzTvQ95DzuCD8YYm9opU2UgwBACaHdvAEoCNJva6UJnABz7Sb9vBJknPabB4p",
  "key25": "YzTSYjG9Jb8UGh8jHsSNZq8JLHCFr6MGroNYspVJRYdCNZBi4jh1QatNFQhpN4gQtjimVkftLcqpnMVo4i5xjUm",
  "key26": "3y4ytQUkNx99eVydmbHdEjiGJDrBuYbEw53EabBmQDrMNYu7rCs7HfA2KvAivXaXMoUCkseXpXxgKz1DmQdkXzwf",
  "key27": "59B59ZPSXpcdgoVzqC8Cn8aJFKohk7s8HjHbcAJgia39XSrCvVmCFbJiE8DsXTouB1ezTk6MFgjwruHhFLNYoeUJ",
  "key28": "HEYFDZgZvAq4APwgnhPAjZCAXmD36TLshkDkJ3SGaMTG3qQdm7SwuYKd8UzAz5Xw5smP15gJrCPsgHUKZV29JUL",
  "key29": "3z5N7iTANRknqih4BxVLQgMd5LMfErQZbDpC654izRPeYSbxBJ1gMPML778swFDgSQqctpFMXjsfJyd6pCzzMJCn",
  "key30": "zQV4MhU3bYVnVa47Q3HPNVnzJATwD4cBeKtLtnaVgkNRuqsk4uVXdNoTvH6141igqaeExp1Gnq623ZNJYNfWAhx",
  "key31": "4RwFGsqYdPbFB1gc6AvvfmprKq69iDdfX13ELK2EF9NXEQRsUXyAmVjwq7Kumt1LDZd67AbmrYDb2XfNDya7V6RW"
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
