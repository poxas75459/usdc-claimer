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
    "4aUrRHtyaMcmoWkozmuyk4Z9y3rdZeiFa1RAmGgrujsEBrAKQGfz9zQBRFHEavKPSXb9bQcH16MgnR458j9K28s6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27qv8CeVWPtvwxf9UBYhbSD61QGEEfqmboUCj7BkvwukMkegLEuxTX3JwxssoJghA2Jk8EoKKJb8xs4mEJyUoD7q",
  "key1": "61Ueqi6B32VGK6bfkB7rnS42tmMo1AqtzyqYq5dzcpYtbGsxYLAqdRJMSvVHk41jrKkhzN1f8ixjikc4DZRp3NUE",
  "key2": "EfFUHboULMvoWVLD4XuRQrxSLeDzyzhhuEvZMGwJwBXDYKQaLNs1LcmzG83NorfMdPoBZzJifWisNrsLjmm3Exd",
  "key3": "Fq8ueXxEoRHk8G4pd56j6LpBB4VtBhrr2jWgWyDBpirzyrXAcNxbUWamHwdZPqiG5Cc1maQXLYaWXEuG9H33Nw8",
  "key4": "51xmppSE2nLYbTwRgaorHXdyTgJiwPfF6cokPavkzGAxbQ38Wti4RiFZTMrkXqBJUvtNjM2gEnQYcoXqBCvCkzTM",
  "key5": "2AR3waLHtzUf91jKX8gSo84f28agRtMqya4e91Gnk3faRbVo7GoPXnkX1UdwWhtqYNqDAECsBrFkPWT7dEAdRGZW",
  "key6": "3pnnRtowURWZUmYRJTUYSDrCpXMuPFCXGbPLzeHphCpEBgujxXi1iF1Hz7AkyG7JpvSK1W9fuV7uBeDNXdwqdVNN",
  "key7": "397B88NKvB4V6JPJksNGkL2FsP8UjnhBBW5nbTu35gwHgQaFuakpGZXwBpofeRHPrYLsKHaMheYtTRoe2vuvLoNq",
  "key8": "whZ5KTchNi8D5m32BZ7aaThrirBkanxzpvDDSRBzgHY95c7zhSFQtvqFwd3oN4yBeUzatRN1Faugo7kfV7uohba",
  "key9": "Xp7K5uB1ggabNn4iCheigYHnGNVDkRmTP3TJfr2yUtHJbEaKtBLUFw99wfKLxXcrbfVSLu5ZPd2gSpFcurGUHVy",
  "key10": "5MfspCsQfGyK47Rp9VU5aVzVin8KP4dKChURvFL84PiEnfgADtcwwL9w3Et5qbf8c7BngwyRh9Nz6Yvnz9cwQaZk",
  "key11": "5yLn99G9eB16twsFKES9GD4jYCbMjhBvaNmhA9GCtVuPKfjxeaGWvdx3HZXMuYJVnz5VWooB2118SpU6fXTqo6W6",
  "key12": "5FJzRMqk1WvTWBMs7kDRKRsy3bUGBFWv6mjE5WnjzZ3NcrEftPWqZeBvVbwsLtTFEL1eXYi5fxEDJ9qioz4udqX4",
  "key13": "5C3a5oPbF17QUUnPa7xuxfWGCC5pbJrbi5BS4gf8EZthdKngqGGr7jKMs6u2tvSQsAjv2PBS4dFWrttkxB6xeYA3",
  "key14": "2urDwRBDjuXqiepMJTBpzzF29gq9HgGRgaQUfB8NXctXYxd7r9pexd49Hu1w6bjufbQUHECKHWTKp3niRucnFpbe",
  "key15": "pkTSXzioLwjWUvsv3gNUjcUvLAxzEAWWybeJuA5rQtmR3dpctMPbqfKR8NJYJVpZT2KDWuoidGT1oENSCUHZe6R",
  "key16": "4ctLsUH5LozG57rYVuN3yg889gxtPCM2XuA2w5LpuhNkp3gnjFmSYyqkDsEup83AAi4ueMvhG9WodQ3VdSzftotu",
  "key17": "36uaaFi5oUQJRVEtJoCNZVewswNbbQ2eqcK1APoSVwFodJ7T8cJcyyZbRKBZB23RToRGZccjywGcVTBxvz2wvcum",
  "key18": "2Ao5q714Vz19YkwkkR9mXMSd7ECNazsMonDY7YV23mURgb89Awe6ao1U7rc59MRri16AN48wu62CVmg4Hqdd31ui",
  "key19": "37nWh4jCQZGdQYVUf8CmaLRsMPAjYfKGE3FC9nNZddhuWKdR1nfni2KxEt9ZooRi2qHVQk13g2VehZQ9oCBRoDce",
  "key20": "3rHpCCxhT4jUR4NxhbATApSNMwbxpZvqXMU9brZKH6kmNZqpKNZKwRsWZKcWkP3BPdxYPrZkCMagDqUUQm4RwE2N",
  "key21": "3GjnWV48VGeidakcKdymasVj1gp84iM76SVRyjF7i4kX9TXESPMoG8nsPdUXVgigowAWY1YvssdJGmpWUsRaLXzB",
  "key22": "hjfbtMxYr4VnTwVXqVvugheJxC8dVeg9cECN2yVjuDFN7U25bGS7JSuC9aUN3HnqtqL3xoDao4GhAwycjzT663b",
  "key23": "3MrELDimgvUbdhZsebmnasgyrA1xmuojExTu4SVNWLDnjJSKexZj9VXF4wmeUhACVKvhYXtCPAYHWCVjZBbszF8Z",
  "key24": "5o3Y1NQ5tREBBk93AuRkEKT3wi2CA3AiReybogRquMEMj8QjGKH52WhtDktYF1T17bQixnK3iNzo12kofGZVeDvD",
  "key25": "48vgUNLC5NnEJs71S9LBKKRkx6oEXtB6YQZSMT8rhwBVWkqoWWVuikhpBSnP4Hr6ZJVodwTQZ2gmTAHVYWAM3zKE",
  "key26": "2KmchR8bB3w2UJZuj8ADyrdp1tp9i9xXNAyuGmBKY76sMiERw4mSGiVCLpzRqJEmPPju4eP2CHghNgHHfAPm4udi"
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
