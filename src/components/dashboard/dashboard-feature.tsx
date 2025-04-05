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
    "P98vyZaELvE6sNSoSQnUScbRJxWjJ38vNPz56zmnEzQiU2XPf5YaGrwLaf8TkVYeiNdfgDAh8Qu3Cu3DfTE9LuD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CTbyuRGkDCDAB3SXHX7zGH6MTPjvTWzWEDEKQfM3HpuzZ6XmmwimcgnkWSNcJoiQmJxtcJsKuYAkpj5m9jpkh9k",
  "key1": "3SNRa18t7HfX9PTkMx6t7zjnCiY7gUAF2Nx9JtrBYKVMvDrQ6vT9py7tgnGbxtfnJPJUTcF4hPLWi6hitDUakhpv",
  "key2": "koTKdSJkUtYx69aJf7hvWihDzVNcEcbTBKvHPabXXFzFw2eMEVo5CtaaMB3xMNzSMVf1cHVQp3oui3qf5jm5CeL",
  "key3": "4TRYwLJ1ihfuYGiqff3Ch9pzpMLssa3NG325GhZSHTTM2GbL7CYtEkiczogxTQENyC5j2n138JiJHAijtW8skM3z",
  "key4": "4wbTKknf3TBP85Asegh1QNkeThxiTAvcEUuvqyWRFA2v5dnSL1dyfeoYncZU2XrnhTJ9hPJNrtwLYqxF6oTvW57r",
  "key5": "3cZ8dahfmoZJdQasUVDZUQJZe6WohHiay8cHjBm6JnDBHWDuBKHZqo5cr9M6qUqr2AzqXuJqrXaEv4cMYv8dbAro",
  "key6": "5K4Saynw8Hw579k8jyMP2MM6PYqggTiJMzL3iswbUUKYaXJAzpQYs2oWVdfYnZdAtJsxm94xtAkoUbNNs5vpipH1",
  "key7": "4HJS5WbXQ9E5UR8AbaC5MK9EK1YryuQDD727uQPJg3y43rgHta6fCxwkJy4V4c8VqCq2bwFiYBWAaRinpdarGWzo",
  "key8": "3MyNmkW3SrMrEUkPQeuuxzZpLsy31pRMKhkiNXSq5zx6zmJt6DN36MR2586PVDHHCRJDihVLgqmUDDCiz8ErGKnk",
  "key9": "2JAkZpuWfm55R5mPda39zqvP4F3H9ACKmnnia3cfA2oPZaZTES57CPmtShBQPRTPVTHxFGS4ZRhEnLybbzyxmdts",
  "key10": "2XhsifBrQMGewrZyRjYu33cBahFW4ouFehrwKmxGrxCLQ3HLoRpz68ZGs16M51Ssm8JPKX8Z3QxjgpDLmqqRJMfX",
  "key11": "21qa8CZuCfT17cj45xYqCRzQQ5UwxoQfRMetVBSLgBjhDuXkUqcy3FzbbzprPabSoM1FYViFtgihckoxznzE8TSs",
  "key12": "2Jm4g9XtJuzVdzC7vMycTbugiSqBKb1kewsXUvKcuykHeajaUPCcWUSZ6YdgMNFvTHzZ8Ted4CEi9MvrAVGP8u3T",
  "key13": "5zv2iooaDgEF47ypJnz9Qp6PBzCJvvNHmvKkgSToa3jEQ5YHa91Qfok8RbKS3FzSdMfpJLeAekgsFBZaEBBqyBMv",
  "key14": "2da9cuXsmTMFJmHKGm1RCE5Rark7DSgCbegEHLQxdTrWndCdRScgNXZFKkKrXW92mk1i58YfS2APV7ruFBorNUwS",
  "key15": "526oNBxTe2GEbcFM2RY9hLaLViHQo6S8ig6AuoucrGc6vPTXQ29qR4fYYJ8rs4B3J6bEzfixRYNaW2htzgPkh5Qu",
  "key16": "5vgQxDuVUBkAUds6SDJeZJHVqxg3gh4FUfsUuB5Pyje2Yr2uXoB9bNBtcp1n2d7aJNEVUDzEMJjCbEt6Y9WTtprh",
  "key17": "47YTmzT38nJ7WjVBMDEAbk2KbKCWBfugpk6UV6irc7JSa5DiJwSPdX2X2F6yP81wircBU1zGKvyj5H8LDt8gVQic",
  "key18": "X1vjWprWL8BZkkAkyLfjPr5vc9NUjpSPogUqcgEKS1tH91vwYi1y9rvh9i741kfZQHkmxCNRot6ohhzY2kjdrdF",
  "key19": "4ucU92zb4oDTP191GJQjVMqRhrgdSq5JXWkNG9d3ZRrfC5Ccnqgw83227w15hja4cfk4AtGiGUnxvNTpWBc5wgJX",
  "key20": "3QDQHFAeQwo57Yd92c5dKNAkLvWpHcTstXf2VBELDPaT33wKrkzEKGo93y8bdeYuPSkKjw48gvTM9wxGeNinuoTQ",
  "key21": "sQQc5ZJD4WGzXv8QYWLhS8BgrfrHDzrHkqKkguzDWeVW1WU69iKMkWUt4RKCECrkxkga5BDAH5tei7wq4ScRu9J",
  "key22": "5Xwb9vqkkzY5JiLQ6zCxWXLwsZzw2nZA2oMKcBUkP5CxEW24R16stHhigPMrTpmjmFSU7JteRKMHGVqhrmqNfhxX",
  "key23": "3pgL6YENebKDFQbnKNvmN57oobd3ETNr9XbTXzzuCXxP8ZcgcrJ8ZgXZgkB1ugqpX9gyh3aRRmeHSqaYUzmALFuP",
  "key24": "4WUic1XWiKrYBsY2GmXj7nksurQaohueaQkKXnJ39V4ir7idQQVf56WZMQjy3jXjJfFotw2CE22sMHmoHmVJZzJF",
  "key25": "3jm5WuiQjC4kKfMUige4Xmdf8znu19FSf5pfPuudDM4SXby6kv6YmtKMEnTUpE1LG7i5optvSBryhbqH2b1YQoyE",
  "key26": "3GocNBi7tvMZPEyoYQXKeVagJyCp5gBvJmnri6aQvcpTWxkcwbQnbChBmUqDM69kdGuVikUbmYWu818M8htXKK5S",
  "key27": "5Vu8doQwtWzVA2JtmF9yULJ2MZuN4M3iLsG6Fs1zStDtPPUZFkX5r34wAQXMmuqTksRmZNMZ9ue638WskJbkvio",
  "key28": "37xxQFTGETmiVycWQLvbDPQvuma8gKrF9QQzYupSFGHekPmS8bN2iSv167f3vbK2KTRtV5VH4QGyAuk5c77onXzB",
  "key29": "riaYGsJdEVqyxB48sLkTPE29z9VcXq56EHP4y5d2nrHrjJM3xpbDBH3Luad1FWyMLjMqTK1p9dMpB8USwquPQNV",
  "key30": "egvCFE2Tw5YhSH1D5jzHdAD6fyF4yxk6UFfCHn3MmtiX7oTJBsBzkDF4u1QMRqJ1hNEc825sz3AEzgYRHt7BH4C",
  "key31": "5kC5qYXtxQ17FRQkuNR7dCNVdTXBQFQYLbdLrfVp8ehyLce1RBcaCJ4gDAgje5PXqPvcyRhoTN5VaiSd3XpogawS",
  "key32": "5ZEbMU4H8ycvi9KF8CB6di2vMohWgBLdy5xh5rV4m8NhgYddzz8azJEdETYpouqmFej2XCbU7GpDNLhFMNQCnBdS",
  "key33": "4MXiqASdVjrbRXzRQrp8kfj3n5hQXBsTNEWjjnf3kpS9S3Pi9NoMtDYNg7oLN5oEo2gsjkvssFJavZo7ry1QdgAQ",
  "key34": "4T7EEmbcTcvunXt8BAcRA79AjJyz89N6zJbmvGq7a46siu5RMEBnYZuuXXiHaBxyb27CokDCmAY53TVzxeq4tcka",
  "key35": "4LFyXFNmaXYi2R3an2x1GwBXDtZxMda6ydvRzfkQxv1jde3giZT3WiCcMmULP1G6T9hrXuA7gzQiDf7u7VdRKkqW",
  "key36": "59YSmGJoeHvJbdDULmzVfXUmzA1xniuqT9i5JarPbmwUPcs17vqZ37VUhCKSENuQnwmShPJQhvg6Vaa1UtFLKFM9",
  "key37": "2rmEshRhcX836r6bjFiutKntd1Bf53ibVYoRUHCCQyLFXWYys9KLJi4GfKm3rNv1TEMLa2XMKbPyfsdPUPhkXq59",
  "key38": "3eDqyAAxofzGubYvvGEsNpBKSA3bFCqFeyeMJy2YNrSWnQgz1QAxk4djG3Ti1ZgFnp5FTsujThg3SHA19Word53j",
  "key39": "3Sq8ah4WppX8fGXWx28Rjg3aHB2qXS1pjGMB8cHMtu58PkQriVJYAz1ctpq9AL6jTsji6uTB5pLXqrTRHsiwTiCA"
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
