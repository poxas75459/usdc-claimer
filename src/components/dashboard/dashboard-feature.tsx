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
    "2VYuzd6FCNZjq122WWBRquuMfEGCnKewWfiXAurcqJvyfewxuX5HsyuLjpEL9EMa5mB5p2w9M9N8sS8CHjrz8ucB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WHctGFfgrtZWVMDWaKR9EyWxB65NdsYMjpQa2u1eLBfCeqLWiY4aWLsz95K248qkLVwCsVehPRPYNLtw9nDqiJJ",
  "key1": "53a9aUxbgiHMxVb2JWP2qFeXSi8DWCA2V5kbytNPoD2Dx6vkrs2zgmkoucXJVo6zCNjdx4c3sMHufPka8BsL42z1",
  "key2": "2wZirvSXx8s3A5t75bKi5tDydZ2mUFRnk9yzqTXwKxxbYvsZFVt6UVpYXJCgHRZzpokRrnWq9ioGh8ZQutBXuKGy",
  "key3": "aimYeHEG4khj8hK8HzuE7Z2mo6GToKyZhYssZRvajV5LX9m5htEdRe3FugWYCa4yot3QXoxTkGy5jAy7oknXh4p",
  "key4": "2XJoFs6peK7NSgTx9K5cu9MQiedQB8f4y2CUtip1MmgTGAFRjr7JfoMcEjuiAgV2cXScZfXLUWnpMGRKEPgrhm2s",
  "key5": "44DNs5bCrnqNEo26G7EKMuQmV4WKH6TexF2J1PicGpqvJ7ovEtfHFLy1xwSYYDbBX1tLQrmHsPnR59L9bDiPXYCQ",
  "key6": "SddQh6MEQRdJrbD7HBBdATwj4hPpqidQ3JQGGkmCTySSmUw83Hvnkac8RZSrhDTtN96Rj37qLDyYpZ7rWbKaLbc",
  "key7": "4Y3dgoiZVv5jznpkuq5mRBfAb52STyNtmismnKz7kPrqsEbyVcR1fBLhXv1MDT9XP9BjbJBa3BSJREUzSejKsoJ",
  "key8": "55eheWf4mei8Fbde49g6MWZi2TxLEXTtURdeXCGJZpRjLKDjZCPYiqdPXjCzYDsbX5hQwLmV8LdZwzFfdGURZS4x",
  "key9": "4AvsGeJmYfvkxURsTrNbwRQrsk9XHGPuadsCbkvLSCb8kmT3VHsKzqAWv6Gvb79b716BtYcN5jySJ7226Ad1yczg",
  "key10": "4uxS6mWXekqcwFYxXhNSyvmViZ5uctZ19msyXmPrHymkyBghcyQL7tdehc9P3U7gk1MYSzkNiumo5V7nB5ebxj94",
  "key11": "2ARKX1cpj1KHneAg3MfSLW2Za5kwC85dAGY1BLXNd5KmFBXyFFRVTtxhVkymaT2Ud1gJ2hy9xugHwmzcRGmv2ks",
  "key12": "27pVuLu7bRw9rCMufMVFHMFZEnVKAq6tcVkcUfRXgbMUWYeKwTUy33e2eu4YtZxVYpPadJ6y1ffkBv99qB8Uq6uz",
  "key13": "zUM9RvPfmGBmceGkvZTN4qmXFsDfyBzmBCbgPr4ncrngYvv7TKbuBSAbeSDcTQXYKC3G6bTapJnSzBMS5v6EgxC",
  "key14": "AwDyTv5bqQX3eZxzNX5SPcRLTimrRcsGsRr33EzfhHnMtQ835HLKhxDGd1ve7kErUPqQh6ZqAQyGW5WYw66dNqG",
  "key15": "iX5zFDANqFAvyZhe79kSoByERVjfgibrYLYWn9uRowG7VTF6DhSj3xkbv8neCE9nLkqTmnsxNcT9Zoy27EbNxfR",
  "key16": "621qjThUfh4H13jaJaPRbr6P8BUvSUkJvvN7hMNMztvkYJE5iy1QScw3XLKBtwkgELHcQub5XeEXgFHtFoiD9VaS",
  "key17": "KNPFSQ9ppjYjWYnvRzAZ9BXyy1xeEYdWWt8eSGxCzosWybN1c2mbfAFsRUqYBphuWrnav8MKuyPk8fQUhpw55FN",
  "key18": "5pc1LHzYGXgcP7rdXa9pUyek1RqUvQxjCkzqScnQdk3vQEZq9vZj4KCkaiuBMXMMASSiqmYtvGBD4vNFYQAmq54n",
  "key19": "6gvgJsCcNQXffsNE4aFinrUJ8kptagV1jkxGoPMdTJGTQMTv4akjTQsreu44ehXUkov3Gu29RMZdGVZELvQW1Fn",
  "key20": "5jmWcnzmu4R3fK2VvfHaAc482EANo3s95pVSwgtV1tyeGskbVkWRFkfSLxAWocZobRQqUNAqsogQ6yaPktBH9mdo",
  "key21": "5GMd1yxDSPTQN8SBxSED3tXZDFUdwbBURUbqLD9riFaeWYtQiLX1H7SNdEnBKeeh9e9JmhV6nfWXUtiVL8YXMSUZ",
  "key22": "3ikNswKU8zLEKmd37fDWQtdCVZcTEait6s6Nz7yqDYmn9tXHHjyJqj2ouREaX1dgvYnHbRDiNhoo8vQYX6R4P8yY",
  "key23": "3rDbfVs3gfvLcfShrT5UiGD9Pi9G1ooyU8bkTcVgQPZVu2R5SWWGMHXmr59ex7NuLvBG8fiwEMNUhGjR3cLvg3UC",
  "key24": "38NAzfryc8JjSE1TeRH4R8Grfq7WqBWZfErskbGoLN41kWzwBavUsNLVVQL2zd6Pe74sUz4jAXTY76FgGVbuEAfu",
  "key25": "5DiukohbxuZWAyoo4zsKzyqRM8siZttABMtR8GT4Husa4DrDehdvqSswuPHMHYzJ2sWMZmmEFBNNeUxxeti7hdWc",
  "key26": "DuhJo1VmdUsZJWKU4Pijjw7UULPaYsfYwfj9aesuuqqaUre2rAfSAFc1SungdkkWAxEbLv43k7qTp1akNuc7AtJ",
  "key27": "PzcvTtyusGdVbZT7TMMLF2hmcuibfKQu3xFt6MPFZwZ7xEZ1VCccmN6424Gb4YPkGozbdW9yZFm9X6t9vSgnmGZ",
  "key28": "4dPSA1cdDvKhcmbUBxZXDQnaANAFsFdb5F91t4xeGRSSpxmaiAxu6RDBxLKv6RojQ8zPTdqvFcuH5pAnWy1iBA4a",
  "key29": "4u9iGZEhCJNdL4qt9saRdQQ76UFfVHprF9Z2iTGKXrjZUJsQfNzDbRSs2mK6G7EfSKXQFmSareGvKDMg7knQhRYy",
  "key30": "4MyDyhVbW53XTYfkugVqWwpT2VcJChpqAfT8sZGdV4DqjAfix2JS3g6Hxsepo3t5Nh9XPuL2za8KtLsytQ1bE7Ma",
  "key31": "2P26ZWhvaW4GyRaBc3uwesTjmjvyToz8DxBPDcCkYkZQviX7DuiDwPFVZvyQfSnxk9Bkw6HkPfcEPcKcRb9Dj6Nq",
  "key32": "4pizwo3k7ANogeReyxqULZPi1jGxubeNffyUta9EJLSL7qEqKisVRwUBZ76MsQpqVhGu2XmqT4ATo48YtohfECCx",
  "key33": "5unEDuyJcfrk2NZXEEPft8TsCHYFTEwnLo18EUCPoBzXuqxCZGx7LpDzzbSjNwhhL4ejhq7eF8zrvAqFKRPfUi1v",
  "key34": "3W7T75QGFX4puLfPp8MMMUeXTr9q5s7rgcUUWd2GrBVLtghjU71n4VTf1r9vRhwyZVftKwh2ykXTY4quvU1J11YR",
  "key35": "3qMeSUVianvMTXJNA6HarpZvUXnpK4VAGVsv9aSVQ318c4G93AXo1b7tWLuhucj28bL26JFrwQQzyLq7fp6JDGpZ",
  "key36": "3yT5bc2Si2uePNMG2ogiMVsu4jGojKdAPXCCRwZ9mkAAmsJqGtr5HaD6bBf8n47WAFatDWkkp4qPNjuTY98228Ks",
  "key37": "25ySHvmJq2WAGdogiphM3Ga3Yza98CrhiuRVFpLNBMa21CC2GhDiAgbbtHpoahbmbMCHR2FtisVvZL2iqgEqgmqH",
  "key38": "WrqERnEWn7ReT6Bo2B9MSKD52JtyEgUuBLbtQLeLxt28FGGuKFaDCdGRw9brSrmYn5fcsyrrwu2GtgGh41baxi9",
  "key39": "4dgNTs3RBLJNGXT65jJobg2wSh4EDhZkUVBPGwHwFfJmChf3y42uD1zdSW5LhL8V7Y3EwjMxSsrAd5caGGxZGwHy",
  "key40": "5ekgAYCptpDmZyc7rrWGL5qQRbHPbaqLkNeJLnqKyno4FTZLqvPv7Qyg3tNBfN2FY2BS9eoMWYvGyDQ6uZDYYN7X",
  "key41": "4FtAtZQLv3WtX9x7oYRSQN7mBhsiURiCAqpMhSgrydbfojBnpgaDWwrgSEzwM2g77RFDZUbsGwcBsZedgo16eNQJ",
  "key42": "4J4U1cogH3kXBT96ahB68VGqruFLvKRjCWrTCcJoEYgxtfMezoNqj81UbKxctqbVfRsAzuXuBczXMWttastqrbeB",
  "key43": "3V6RttnVtbYUhTVntq3VUZUTHQPqmQrivsjDHRPSkhPwA6b2DQpMr5G21ugyh4R4U4zx3WdJbHtRNjgxCTaKmzDc",
  "key44": "2scxeNKVPcN2wprfEY3oUDg2h5zBKMEFyiQ6dkyza53rG51Qvq12PYGxbqbhisEyAzLL2iM1QhT4i3mHnrFE9bYz",
  "key45": "3XBJBWgcuY4incuTBoEMcXLvUiy7ssPh7uY4fGZXBV5TruZw49zTn4ya5WezHJLDUu5tFUDt8PwKLUkfz6DjMUG9",
  "key46": "22KLV7sXXunytAseqxCv556CZEecivPcBiQeUiTzrTfuzQM1hqZzcXkji39VpEF4gJJCdgHCzDo3mrKiJ9ChXJBc",
  "key47": "ZWNtmAZpAxx8gqQhjVkJwVbYWjiw7MBRtUspxkcpdUGaTNhFbF4zUkisJkTZAWrmabJ2W2qLWLGQy6cjCXntSTd"
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
