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
    "3aiFdF9B1TPPLysoPJSytwztCF4FQqtcwfgFMo9fvn6xYFPoCWBxdysNUriaNSkFDfyZkRSv4kbEJZtN3JBcbYq6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ke3Vq5rgQQY4ASincYNQUks2QUqWLdToijur1SPdUJJXapRQeVWWp51njevp7EJr4KFWghj37C65hy2cMGbNxVy",
  "key1": "62ZSqTpDwGQAJYncA4h6aUSx1hBn6XmKKRM6SvHLeR2UHeV9KYo4FS3J94qZKBe6LASkJvjWcGkqyQoxzq78CMMN",
  "key2": "5Bz4Zifs6BoZvqvAghNQ5htpUGuELFqnh1CUi2q2DQEPvthsrcDcnCPB68DkvQnxfZ3Er9YH7nEmqc3Yqxx3QhnT",
  "key3": "XdQzKPDwRnngvUNdJx9BEh9WfiKxneENWYgDKtggd3UK7ZX3vc42xLKzF2aPPp4WuHQ8TAu7fshzBK4g8A7ks9V",
  "key4": "3xoR4w6VowgU186mSwQTgzf56ov7z89j98GqbND7MCc7yXRkbtTLvkJcqjbif2rtxxT9LR7pxNnzraeriRQ5wFwb",
  "key5": "52Kyb5YTrcxpLjgwmzz2zf3fvFihxYC37kGFUsTSeD5vPa5Ts7eUkmamCh98kRx81Czn4i4JBKhYbHsafQjjrPW4",
  "key6": "4YTgCD4JAsZiT9iYvbqch8Lq7YvD6PcvJCa3m9kopKYq2k2NVE4N1Dz18b4LFDvopYb2ywGz1PUAdVtyZDEy5aq5",
  "key7": "e64wwDmZjvCCsvbFZ4ZLiaMawJNbnHGpcdx53jjHPbRcLBkfgEvkbt2yCPmbex6YFcFYCR9WL92zpZRJweGkkzW",
  "key8": "58wA3WXSycJzpj6585AKCZFme97g6LBpukUKpaj88eFj9YDoXNTnk7Lt4B4KRvHLoq761oRGcYnZLNNmnUZh6Gyg",
  "key9": "nzMLuTFXv9W8dDBywSqfoCkpZmGXSWsF3evCyPGzoAQAu9QFU6cKUXHuF1CeiVfkkGijkU87bbwGCxaz9TsrWpA",
  "key10": "2QYSayCxLjQvksvaNTzzvbTvKSu9xYsKvuct6waAjE9h1bLfiAaS2zwbzidxudTkcHSEpgfeWnbtHVoeksHT1m1j",
  "key11": "2eU6Q3jkHtBXsiAkv9W9wz6cNFFN5jvuGNyQHzFYSyZLbTEp2RWG5SqR6dh2rfrn7uX2j8Do35Cpax5WntYmEJFB",
  "key12": "5PtrZzjExfB2ZhqdSk4tG7Z6veVKRSK31xodud1dJEuAC65Yvu6us53tjXfnpU12UUJJG66zVsFbAyJtRJuzkaWS",
  "key13": "TE1cQRrWPCMpGjUx4cnNv2uDPQtwQVgQ3u88M5t2MLM6pYCNg7RBfzaxanastUuRcdcUMWjSPzYns2XWwRVpUkK",
  "key14": "47KPZZnhRbPK3UKxpdsLqSoU1wiUpxXqrJti1fv8NPLziaJ1wyYcdoc9bghsqP9zoF9LfTf4Nu9ZuRwsMZxRjGm2",
  "key15": "2yopM1XRhXPebyVrcZ9VSeSChc2GJNMTtqZWTvFqYXkbRrH8HyjLubtvizzGP5VhCS995Q76TkALNKPE2nTm9Ept",
  "key16": "63oidbmrvr8QnS4tbYqUyFnceb77J7Q3GhxyzYmL7FSNjunwDZQTgoGXDYQ28VyWCKk186tjTaSsanrEytFWVhCG",
  "key17": "5ACMW4TYxupj3HAUJDD1NSCLo3AthFEos7B4n8uHGBT779mJDcUvw5onAq6xnQzijS1wcvY6pxFh4QXjrT1q7WMn",
  "key18": "2RNeUHrT1Sufc6GoRCkSRvzDeywE6gec2SANC6mqAxLZe54imcoNfAoW87WK4GYauMdDqu2iH5buevh6ZBTsPufB",
  "key19": "5AhCcwREQJ3K54NwZavtp6ieJCssYBg8i5riLji4HQMabEo4J83ccRGPS22icA5w8iF1tMNVxJdhLnNVxoUGTZgg",
  "key20": "2BkQ91cKRtm4pPXjLuLY4ehpymZg8nK1yNxkp24B9j6fmJGEdy4ef4vLUiKniHJu2kM8UmRtqVMMDAsTyCkDJLoA",
  "key21": "4EnYn9X5TnPBeFGhrUk4gzx4RXrSsh2WYDA71bR3T77mDnrHpAgTxnusA4BXEBfKu6mP3dAD2ia7fUYRtyxXWU4i",
  "key22": "2WNFxayGBCNvfhibCAYRGTea2rbsbhPbjGNNaRW2QvbnBU1pBpfqkiDXj4J6jBcKxstrjabd4BMbvxrPHog9STj5",
  "key23": "dXNppAsihmLj29mWEpKB2iBcZVjbmq42HoxPux3S9wMpQqqRZfTVJm5LH285GtF98q3Dc8FEstwXcDz6QjqHBGz",
  "key24": "4pWVAqfwoBN1jJ1sKxvH2Srymq9ybcSipQQp7uxF8EiUocV7qHjXmkSbHacjzJNspNHbhrk9TVuPk3QAAdeBZd3E",
  "key25": "49Cg2eMyPLzquw1njYgJpsTZT6TMofA7Ho9dV5YX2itRyHKyxMejWiCKaz75y2wqePKugj5k7SToRAzxdrYcihyo",
  "key26": "4E9qZu3oDWSF79ab82Jn1njUqRVSKBatgzCj1L6jsjZDg9AeMAJofv6A7XFsgqqy1yk6XLypQfFA5Ej1S9GubPyz",
  "key27": "3u3GKuLPaj8BN9sH2AetNn9zE1jYiVYyimeeW8s1jvWxYmELfoXj6kFJ8VmxaNYum3d9BALm8QnD4sxm23j2gA4n",
  "key28": "2H8dp3TjEtkKuW9fQMb5L9zVTMnswshXRZAtGcyqCksVktRSTsUy34ehScfo4jLAfHeC3PTXzc16FDKYdsar1rz5",
  "key29": "3ZL23P6WWhgBDpxPxzXLduCDDx1ZiyZTZBBiRkfpzxqKB4dDLxsKFumj5VgGgASDveSvdhD6dyWXCJMfnCh6bwP2",
  "key30": "2o9fDVfDamKoMwA1gDJ8qhK6Si6cFV6foufSun9z2uWWDcYtXijwjNEPwWzXSEaQwHinNkEZVhXX5VDRWrRgJ99E"
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
