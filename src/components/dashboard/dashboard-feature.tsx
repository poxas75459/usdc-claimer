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
    "4Z6W5Tc27AL5JpC3AWSbPK9xjynQtoyJDV6HG26VhUzMkKDmUC2Lr3PuYt2tvp6tXaxtS8iQCVzmQW6HgJjdvBTj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rfJ7yDbR7i1agXHSQCErpLbZxFnw3np1kTwmnYWnqsPLuxmF3pXtSyrvf72nBbsCeWWKomha5oRqgu9aL3RcYpB",
  "key1": "5qvEMzLt6WoXMiE8iAQWEKaJmreyR1a2g92WRaKYWEupkpm8aB8PmpcuN6EHQfgcBsrYJc4YYBi61EY3MVnXsgrR",
  "key2": "nHdCk9J52ESgfnJ8JgsbjDka9b2zXcjDaSwmpXB2hjZTWysZcBHtnescXAfSctSTmP18UZCUvWTY86UXyCykXGg",
  "key3": "29QZeCcusCK76wP1SH8Cp7KWqDJ2RpMKCnT8G2eAQmbKVkPAReVQQSNVC9BsRt38ZASiF55PuB8nEPTw2BsP8X2B",
  "key4": "3XA8uU4a1bQiTqD26PLucRuyZLC4dgPhPgm9PDD58DYXHDfME4q4jn6wBHgyDLtB3kvRLvTq1Q6UitKQmor4WGJd",
  "key5": "2DKtaGDKG7UbPGJ6KiWvU86DdfKFh76UfuaipuvW6Nn2cXXtmwGviGAnjQXk7ujezNwLbrtaxK9C29ZxMjya62Fv",
  "key6": "32bnjNwWhxAeReSZEhashKHvHiuN2BFBhjzWWEMYMmKsfqiCykggPrv7oCyCKkw47E3nxcsLYS8PrGDiGdRco9DE",
  "key7": "AmD3hqs8MJTdQd6jt4T6kvZr7VSSuubraDinH9ZVUKyGtNgV9WKRpayrZAJb5JWKpfsqoCBm7LeneBtstHAk8og",
  "key8": "35evqhQiYxS2npa881Hd5JHAkpsG41uLayh3Z3aPWo2Tu2v4QzJJ2uXVJnwFeWAh3oYt8ssVEiryF7QK2YRFSc8s",
  "key9": "ArAxmwLTqKxac2c7SLNQssj2ebkvjbKkUJGC2KcAqqDNmCC9j5p6Q1YQqup1DbX8vJHDi6rnYdFShQR2r2q6jJu",
  "key10": "3gmpB3fkYLiDbRcFzbKEfi6sqtmX6tNqng1cc7wcWuUortoJZQc48KsNGSdZf4TsrPqbFGQNaSVYxqHFzTyuXMPi",
  "key11": "3TNHopd3XU47VoXqgQ3gggReGuFFCxehKuZu7ia9nfDe6R8RfveiMtvM3T9rePtRP1y6Wncfr4pT4tDXPvy3B5Ls",
  "key12": "2PrqdbraR3JAGe9n27yH2pkGP1prcsf9eiBBtk5z5FEZzXZ5BCurpMcdMdXfaeSjpvV5rUr3L7Bpe2JcP48QULar",
  "key13": "euMTrGmf1m1GHSS8k4TvbiaHLELEUviXUNWsKgPZmhUD1E78Jbk4Fntsbcw9Ak61ExT1BYdDg7SYrWeqoSSLgrG",
  "key14": "3VPQgumGxe28MUmwXeF3fJkbPjJyfcUvQq6S35PinJ25s7tJewfPVDkbcLadb6XaBiqC3aaxQ3F8A3BvK2DmCq4M",
  "key15": "2f5o4EWjNprBZmDfm8Ui9whhA46VGKDb4sW5xcoNvynBTVgtoy78Va1C8Cz4fRW5Wm1aHchZEWHD8fad6mRZCb8p",
  "key16": "5ZEygAytxZRxPwZUHtSffreK3ZGeiVseio8k7NKqKjxDhcBnUF4DQNzwottTMk1LaJ1kXhNXUqHgypQPpeJpuSCi",
  "key17": "4qP7WbVwn2fatcJpzMdQAKLUYkTSrUz85WNrMeFAkct6qBmWAWMyPWZpMj63ARXTZ2UANQVyMYcjWjybWi7T1wLB",
  "key18": "26kShRxaGb8dwuSLD9iYC6eFcKmSNHC7jbvZKrP19WvuzfRKJREctec6ZCnbNACq7xjo6ND2AJ21KovfjSRQKbms",
  "key19": "5mtkeRasgPv2vxXAkan3XTDjC1u8Zc11meuT85GtkBqQjhg5YUA1FN9BYWVzfPVyjE2MTAaXtmCd57m4Z7Un18V",
  "key20": "5KgwtN8LxebHJvc9sKpjuDu1ybz9X6uEaQeFwp5pUf9HJYuiY3abQQMRU7BqnLCXkAvYrM5mGQKGhsnd4J7SoxqA",
  "key21": "52KHgXPcCHDmTjPpvQBnpMCNo1L413DwxgpJdLoRiTdaoLqWvmZrau4GtZQn9yHxrm4HC6ncuseSKVKTyK5XwCuX",
  "key22": "3SsUVZiG3SAL27v7vsEHFqHfTbSCgxbgMpVQz7asJ83ZnT6y4EFxFVuVifdQZPnkQz4LmpX9TkXgPZdMTQS59KFq",
  "key23": "2DEjntfZdatxTBqWfR3sHz8PZCERnHTLmyN1JABdA41y35VXBC8AwWX3V2Jzx2T38F121QQSE8UTNJB3EwwjkRhK",
  "key24": "5KfdCSdHwF1s3VPnRN6JE4tSojq8m82erRWnoLcfE13YxU5AdA7WchPF3TYY3BZjxabphkrRfC4Mt2h1X3pqJMuV"
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
