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
    "6Vu7oKzX1dGi3Vi8ZQgrWa7yiJfugiQpETu9x2hCKnMDzqrYAS1qTpHNK4kTPNSyNMSXsFX3jkbZqspEiyyxd7e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ASy6NBSKjRkBkqgcS1LudZYq2kBK9DZ5YNbDUrtgkR2AyWPAkYxpjfb5jbBkRhcaa43Swm6f7ZWh6idDVupJkPz",
  "key1": "2dL4ZfZu4eY83z65EKcWxVEgfkzczbrDxW2yPUGoJVRPYmEGA4FFwCGTGDcoHiE2zCRJnRDpvoN2ZeiSX4sDQi7y",
  "key2": "5ZBvHPp7Ebjkk4KCdttHe7AojaBNSnqRpvsm148oQRKRCoRrYPDujvX7UV2XQ7Qk6AaKMJjAySVzyuWP4wDbva4o",
  "key3": "4uxoUzB1WUziPiSiEdXFc22G3XYekLQCTeAqTf5d4zD7oXrcUADLvWCPXHPe1cr6arGxUwa4ruUvRMFAeWL1e6oq",
  "key4": "62H3Ypqum33FHHtphFCewhMcngfaZygj5SsUKKu42VK97RiTvKFbmkykLgv4v89GWeg5DkregVBj7MDMH7dNdcdo",
  "key5": "2jVzSfHsRsGneNpPs5XPLYJ2RhgtY213XyVV8bAX9DSWdMGUoyqGQ3YmV2H7g58NQUyBPiX7oA7UzFsqkqbh8EXJ",
  "key6": "5JsZnso4GguEXnvCEzCMgar2YyftF1QXbH4KzsyEc9ekhRM7syFycAnHcZecEsBBQTQtRtLsfPACGzzNED8JxcxA",
  "key7": "rG1S3eKWKyu24rRtLZEgUUJouCardycutYVCE6aidoKpcsfnnaZSGq8QMLBCGxtzXt3A1Nes5vZg4ThFuMPmi8f",
  "key8": "hGvKmnhLUQ5Rec9k7iBWQDSCr1uvjYpRLfeH5FZqe4ujFM3P5iSJmUMrKjqkCNxCgk2dodY9p22nw24G9sXMCa2",
  "key9": "3phPkyYHTcjT3tyXVPuEhDKmWsPqBo8eGEBctp5cz1VxAhj79Me8VakDqz1Sibxnr5HLkXgmYEUa5HnVBC4i2i33",
  "key10": "3Pjy7Kk9KYFTeunGhPcBTHCAxR9WhTmU17gigTa1Vw8BnpyUwnEzhgXig5MrwCebpjyPbHucdburckcBJGT8v7pw",
  "key11": "3uMAns7eYPY2hKP1ai53aXvZHJragRmHc86cCDCW6jQnJaSqDuwUc5goRh7Ann9tJAyctKJ5XJJLqZSR6v2i29no",
  "key12": "5vrG45RrkEbWdjndXaWaN81DvuySDWezUPm9CsJfys4HFKTYcfU7ZMniNMoboFgeUNpT4MkmQXxgERMHSU1tAdt7",
  "key13": "5KnrH3dWvE1krMWeWdXYQ7ccdxGNronp1JXqRSy3uTwoTWt5GpfTZfcHbyKtJkdCtrYDEPWb7CBAu5yr9uXSfsjp",
  "key14": "24oKyiMkNi5KNDRznGxRxZAhMUtC33cw7nYqwd8Xnk8pcDcc7NvSeniLwro7JdU1Wgxxqg2MMnA57qDN7vZNGUuu",
  "key15": "4BRDWEBM9DhB8NEVzHEnXS2Cr5siChcpfpLxNKqe1ayFWvyrou9C596xN5cSLx3sBqy3zyJqqxUR1Y5Zc9hRqtgZ",
  "key16": "5xR9SA69hAac2PkQUp4jFoe6giNZa7AQi1h39RKnXr6sA4YRmwU21H7KJQRr4HnfXcavy9438gYkv6aUerVK9M4H",
  "key17": "3DpcJz2ZPF6eivMgnjjmBrRp8yJNnTz77y35uYbyrKzBKgj51JD2iAfW94NoJdYafjTgPkc1U3bG8Wn8vyEvhR87",
  "key18": "3NJYA8FXCoa5BWuQT1MNGfLfWQHpZqWPrwh2d89EZGgaxGQotyTMjiE79Sbxaxa6jFb7Z5Pa3ZK33XKMucz9cRzt",
  "key19": "5wPZNJrZKob6q88digusBd82Yc9ww4FtxmVhLiS6jMmjNQUFDimTV9wPoASmdLi3JGxsAx5Kva3cJQhwG4bMKzeh",
  "key20": "43iq324T1nuvhEdSNzUrnkTo83JBQq2mDPG6mx4WrCxY9JAR5bQRht1XsaesJGc8AazkQ6MM8UMqmKtZSFWxpSKg",
  "key21": "hdcEjjJF8JrZ4axWgQ8fMyG3vUTsD9SX2D1JSYUUyZAMZsur4bVjMTKc95Dxiw2JYXgCEBnVCsKLVdnqACPEEip",
  "key22": "dfJeN8NG3gwiWs9BiM9Bx8SLTCuTn5FVC1md9j5KGTwJfSyq7FxhLHkRQkBnjgx4pb2abTUoyBMUJ6rQCvD31a9",
  "key23": "4irnnBnMEoRGCsiFaDBgWCADCmoQQamiP2GTmMLzU8VwQDVTExUoV8KLAEYfm7swRiaKrnUMRN1afrb83EbEudsY",
  "key24": "2VaD7T3sMwwWCiTKc4rLXaMKmNneBfvrYegSPcAUbvSo4MqjHLeZWiFs9bukRBWY9cw984gFi5fRKGAfQyCyXi8K",
  "key25": "44Wpn2PgEazNZviq1vYvcPBUw7RPKxFz9KPSUiJV4TP8fS351BWcU374AkQDBsv5mEydrCxLqeMHBsQw5bTbtKtc",
  "key26": "FNCfwusFtH6rNrM8iUbqjieinDKRf9BzAb2TvANrex9KtcqKqSaUyMdBx6cWYF6BeuxZLmvk3dRVLAg46TCDh1g",
  "key27": "5BUFxnmBxPSEPGS3H7AkisZWTqsNFx24js8HJaSPzfRWnAcK7Wi8pHQadwPwXbioxKJge5E3G1bnt5C1nip7so9H",
  "key28": "3u5tbrVHF1UQzRchmMsfuGRvceJPyKBgMxPawAHmZW711quKExmbkGdnHGMab3Z6MmsqSe6bnv5FX7twmVNZMxMX"
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
