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
    "5UWXAEoq63xNPGGM8UGE4fRvpnTSaErwJpvnsXpvVruHTSiDQuGhDybhAo9Ch5dfWU7njkfgb57sWrDUXpfjfx4w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QWzYYpAvZ5JqumtAaqxqBjdDQCca6bpTKvJsbN8m71XEHv5skk2Kv4kYzTTtTxGo11GXEu2brxVc73KuisL1hm",
  "key1": "49kMGFfGn4QxkZPkPmyMAeN5qYLmW7UgzDw8o7AQYc8Ldf8qe11dZYceKNEtR4kyYF3pLdLRNkxZgxaFqwT9mmk6",
  "key2": "3PbfSWsrCGfkemYDvUgwRtkg7y4RWaQBRn5HEvMpENNRz6MA7hXwHNF8h63EbYJFV9k5KTfcodpcShNMdBuKUFhp",
  "key3": "58LxUJqvoD97bM5g1XisVHe3CGx4KE9UkzjftvxiPrs67WpvEsq3pV7RRQU1UU2bpSfprnJKTceyjPCUBer8DDsx",
  "key4": "2WsGrLJXCzynijqukdZ8meWfPaD536MZDHaZopX5TXnYSMETswAwedBPkZUByAfr3SG3ETMrvumchDcvt9pAbCrH",
  "key5": "3VZiZwgRrDTarZiU6Fxb3Fq4GVSYdFeSAGF3HHZCMrsHKcvUjFMYob9MrtMAgigSb9SvVNx2fsfpCy2FBrWTo9vf",
  "key6": "51XN8oVp9nZCZjyP72noqmES1mAZ9xR1BMmrUWC57JyaACH3hCAeUAag9gkcnrrnjnuo1MhhhsgxR55yQdNKtxGJ",
  "key7": "32wwyyoEZyW4JZ24S8aTVUiT6ADaHXmhJ5KGvon2Myt8G5rYDE5DpSvhi5MXeuyJE74KS1os3j6i7jPeJQ7eAJcg",
  "key8": "2e6i85mvcf4qigmgJ8tasRGo9TcSM3PdjkitgkZqkV2pgWj79pPSYBKy7iDnMB3jKpxAw1DR1FbZgPTuMwKMsxeH",
  "key9": "rVGf6FjMrAqpUi9KpD1HXJ9MBwzk5rda9qqNuvJtm8GxR5zNV18o1Esv7Qwz8HVLFcNZznPF2n8XvTh4KHLD7tW",
  "key10": "4CrZLxELTGzWGeLbtkSm78PpWQbhk6axTeZfE4rf1zTfXww1QUuHG4R7i3GeYCZ22XbhGrM2C5aRQK5VZtANJr5F",
  "key11": "rgTccyH42w9WGDqrSym8Aky1ETwWDsotRg96h62jJf6dbwyzyocUHiaCSFpvgrrjVUpXnsRWde9MjYhiLLvU5mA",
  "key12": "4omhd6DFaBKqBYthycvEMQujoTdNQLZ7bCrvekVvpKh1Yc38ceXqVFDs6n5tNqyFFTTmVJYuNcH4V35xBifLLmWb",
  "key13": "uJmAKRmtgGKF5xkVFK5EQG73o4SZBgWzjCYDd2gZ7W8iRoZAVCxQfcm8WZCSXDgxXhBN8FvbRShGEWfGZS3pRrC",
  "key14": "Y5N53SpyjzeSntSRF6WYvJJCP5cmVXYzjuad8iVFXH3vq9ePQPVaNAk16s8sZRq1jVnLnbU6jimT4tc9r6ca7QB",
  "key15": "2dgBxFP6n5QmwoGEEyJLM6hVdLngTzZNBub2MSg51bmPFacF7oAVriwrsSUSDScnHyhc5ZD9LaprLX8o7c3RA1Qu",
  "key16": "4o67sP1G7HT4HeEWRkcZrmatme3C2ARy3NmQsfZTaxPT4XMdCWwYpMJ5NyYN4qkbyeMshwxUXyxiMFWHMfXQgzvD",
  "key17": "2J5NbkCimHRtZ9WDB5j34txCQ4T99gNe2qsGpu6naujZ18g85xVZ3QmdmxVuYR5Ey9V1kw2bQo6w1iKft7YDB1hx",
  "key18": "2nNdnqkxaRCkYoXQp7g1sWd3N448psK1W19n7i7QFwhhr2KsPKi1CMaS9DkEM8K81yBsfSi7SchwD5VhRKWBwffb",
  "key19": "2SkRUsUTz83g6ByQefHiBSrJQDSsNeMaQrf5X42Mv7tGAnWvNaHT4VZDQHWMjfVncsCEur7DfQamo1cNVkuL4eG3",
  "key20": "ebSfdrQAsb9jHgGQB551QtzYGuKSLUdHtUL3VGUJseHMB8zWKS9RPTi9yW9XPZtYZn5qR9Kzxicv5ZEo2BcV7jY",
  "key21": "5Rc2b1ZeqDbaLiBK37q18Mr8RHJH6GZ9cSybsrwcYKGZx5T6V75Wk5PWxvpRBtCrKDSC7rg54QK6rygEAZXGp4EE",
  "key22": "2xzqauddUB6StfsKsgLKaiGEuCmaHt3f8ofK396WRiMduCR9Ui2AMW5XLmFNavmDr3E7JQoZ1FB79ZhoFoQyKMH8",
  "key23": "3stVvai18DXksrfLLq2tM6ixyEGoZsrqWCAkJ8YyjcANirn42rFj21hGWKY9SMtT3Kt8sJamKhN6HhXB9PspTLuz",
  "key24": "2yv5cx3xJZhQ3ASuVb5tE1353V1NqjbwwQh8nBzRUvqQKThZjh2i69EQ339Qvq9gd94LnuzksGx3JhrBGgm86eq",
  "key25": "3U9WSRBFXy14N4qkMXE6gKPKvoaRVytvLdQmeYXGPek68bEeKev9G6iMLHgrpzwns1yLWzbsHnJNbQpfdJ6dYAQx",
  "key26": "4RQZXW9F8Z2zJ14syzaCfbAL3JLuCGNBSkazHgEGXLVd7zMJ2M3VeBY9VYyrC7ErCJNigKD9cV4v4bj4eEEangmN",
  "key27": "55AsSbK1o3fU1eMPZPKpdxRCizATZVahFFJfWPQW8MLESnsDkXyvxPCTM1rgePzkrnDJf5GtqgDoFFrAn29i5Rj5",
  "key28": "3dazz4CXKDBmo3eWVS5XFU29VJkQa2eKpzPmqZQph9aWGATnJ4wnpPx2rqr7QBKxA7p7LhQtmVF8St3D1XxeRHWK",
  "key29": "5j8rRvmeokBzsJd1kB3Vj4mmKjjHVqSN1bFj3YY43diF6pFYmWorQsyk3x25AJi7PawuJ91otVkjbeEk64zhFnks",
  "key30": "4RDHHkQrk7V82PzNAgQ8nJt9gKkyvhtuZ1R19jjNHWq3K7MapsZvgL78nnoDZnnM88X46sSZwkGqGaeg14MQ7Ydj",
  "key31": "oRQA4n5PBh4V96y38kiHpgV5ERerLh7gXAiAxmeQhhJbnCB6kczeKVvME7wgbV2zNK9g7X8HLk2zKtRYYTjVBpk",
  "key32": "24kMZBBY2rYsfj5nARW76nZ5qyTxfsMPrYpvNSxiNaaL2NugernA2w8x7kcHLRhRLqE9xv61cWR1cj5HexwxeiJh",
  "key33": "PXhtDWfoHfoQTzPKzid7NmoAsQiSgmBuJUCAotwEs7kCrDgCjhBAm5sU5SsZA1NGPucRKyibEWnwkqsqcE5beGR",
  "key34": "4hvaJhvTMG3JCHzjLLsyhNdzZna2Dp8K4xKoZtjwcSTA19K7Hu9ixmuUGJ8AzfRA6cwE1CeMKLumJ8oXVckiMMdi",
  "key35": "2tU5L8zbjtpV2eL85aj7Rx7PNKymxobwK6RhPeWRmRXnbtzgVunEYGHpCcjLU5uTeS1Amzhwhc69wjkMefxGVdJv",
  "key36": "2GjRAJrqqHESX8xypvGgTHhtXuCp5FRM1B2pbtMYCBf46aTqivP9vUaFViNJpVgFuMnKMNtBhdb1tkz6JFJoGBnY",
  "key37": "5xKGXbreYgfNKjFFe4CWajnQRdQti6JqCVPCNxKWTTZDDGvtsPvm3ykS8GsuG3tt55eZU3F6oZHu1CpnERxmEmnU",
  "key38": "2e7gi9yDLYmUGBUJXTxRzPfUPhQvvCDfqeCrkhtKRaDjsvawetT8UNErx5yCJAazVrp5NoNgs7kEzndT2nfcGwC8",
  "key39": "2frmYawCuk1PuFh2PrKceNnGNkJpNEZUFSrBsXn5zAkU83gXbEmgr4CHcH4M6zojLv3xfeWzfPmaHfhX9p7dxKLy",
  "key40": "xhqGmE6kjtDVkiRAKJnBtMKixmthBFsqxDkuxUXHWGszKVXdGqPJbDs2iwxWzQgntmg3TQyBLFK6Brd9Ay9fduv",
  "key41": "5CRY5ZzNWPemUPjrnNkrCgnHj45cZae3MnrJiRiCZpLHS7JRoKgd9VN5zRaH34xb917Np1H8ez4Kz2CVRKwBBstA",
  "key42": "LZU6FDc9xXPvdRL4kfg8n8t5ty3r1DQb8iqp823aGDa4TAXj7UrRbFA1wU6pAj3qDuhPD7ptcFabhjmkk9ShUF3",
  "key43": "3xaKJ99anXz9hs6UAdvBpVyVyc2JRRK3PH6o89Mwo27yrT2ZkHSTCDXepZ3Yxm5EHyho6j9WRmdXzgBAJ5ZM3Xdv",
  "key44": "5giaAiCSb5dA3mVX3LZ4iwULvYuZ3LjYNHsJJnbJ2H9GHqx2UnotfMizycgYbRhEFvvxQwD5WntEB6gYtB1y2Yqq",
  "key45": "4oxTzV5tnsa4bAWSKhteukdXHqajZzwVvKiUaev39z8gwVXeRVSBeu3eMBsmFbmh1aKpwt8Q8TY6pRyBD8mDnkhQ",
  "key46": "5m56JKFijsjTpQ6e5jwsG13WoJbnEdWey8j8U73fPsUfKV2ya9hViYK6Lc9EQgUeyxNfw7cpL8GUWdgadvdzM3si",
  "key47": "4jdfYWpJJQLnbfFNANFpnQNfL2m16xaxjNsiFbvVDxy91fBGx7zU1ng54ALEY1o6h3UWcz5cjeZtaDxUtmEf6NbX",
  "key48": "4LHrBEhR4fxKjK8oMANHNVBttfpZJtajfef5UjsGLuvTBdfZsYamtMyyC6QqguVGz2V6wvxcwCjGsPHmcd3J4c13"
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
