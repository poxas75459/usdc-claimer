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
    "RgjzP3EAfWHLwM87DaoTCpTKWrJKHGniGwU6AUQuiLMsME4FHWRRf8ku8JesWAVERdiK9PsUPGuPaXXTJFGJcug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bkQtogmpjp5PEHEjvZFyXkSG3hoWePZD1ckUBaMUixLyFjHepwnk4GHbYVbpgkJYMJ4AbM6eCbHJmPw6GtdYpYS",
  "key1": "5SfnQyVum5UDgowiR69WxjnCUhJS7LVKayUTnxKDfuz6axrgCdahzt2VZ4oov3hYRZURZHhxS8LgkPXNL43FXvQV",
  "key2": "3MmVgxMRNPgYKYPLjn1rSehRyB33zUeX3GMBs21pSuHhbVD6SzF11rxgDgo8bosGpNRVyBPA4g2x6QBk3QRnGHpq",
  "key3": "3YnrmChgH4x1S45DS21hPP92KpcHjYvxfv5JB69uuFgsgCuVbHbbqufdLEQTWqAVo7goa8iUGkr9UKRFPFzDF2o8",
  "key4": "5HTKKN5cRuXNAyhxvm5eUJuWZ8X7NCuiF8BoVbefbyQabt2JXiUhXoCZ2FpeMWDvb5ys2Cvdj8JcBM9bkVrvoB1a",
  "key5": "297WAWqYPkyCT458iaHsWLtE3XABjxP7ud7MyEXFk7f9LstwiUDCP6LC472TYnb4yoUJcXJWRt5S4ccxN6tZGP2z",
  "key6": "LFWpxEPrcfA8xT1ywezakLhUF1fpwRsU161XEVRLMPGogQKre3navpTZYLaf6aVdzRKzEsUhkrYbf9MubauEWFi",
  "key7": "DCmHAvhH8YqBDdWJskx9av5fLNa6sxv9vQE7wsraMZj2tQjm4m7Gn6X3tWqHYfp1ix2GGdFM9KEpzrR8wo1b5CD",
  "key8": "e3sw81eaiv9TAmH9oLMKYiNij9bFGvTi4tgW8Zvbp7xnRwjvbvtsPeSMvXBmZCZmZSACTvr79N4i7xf9E9E57SR",
  "key9": "Yii2sptvjeEFwHi6zsKCfcpezY6kUA8eZoWcLMmq75LEiNcfowuR1pHJtCYPijQpiAFMNZP85q6ccCbNWpGG2UX",
  "key10": "4cfeMA2QdLSsaWcGWaai7vhPaARUomBwHUNVfVzPZWYsTjJkEsJDwyakf8fjZpp783FkzHh9mbHqNC97RRvtAN5d",
  "key11": "2yHcsQCH2pJb5WywJ8qmZHht9K4M6dUj9sMhBBUwmv8A741asZSn4CsMA6fVJNuPAaf2EjYLHkkWuSin2hBPHkTL",
  "key12": "3pZG5Qe6HWWmNxjMQCPDWYUXhXEcVFBF2b9D4BRXDrkXbthtUt8Qy22PpGWj8kPtHdQaLVzdifeKsUc1q5Wh2nYy",
  "key13": "24SYTLZa28qHb7y8mHVPnJ6mHqjEPypaqZchfjx3Le8hwGR4yigdMnkR6pK5f9esPDm4n46ePqy8G528hQarYAhv",
  "key14": "4DAAZhhHtue2pgdeFuzK3HLkaAQpiTVovrcFB4BLgJuaT897BgvXomszrzarR4BcH3z7HdLB4sPS3ENBdv5YvWPe",
  "key15": "4g2j8yPjMmyCm32WfAgPq8JFcvQ9QWtZZMPXQRKx6URfu2GiLVPLz7Yn32Ss9tRYZtFvZSw6coie7tReoQaF7AzM",
  "key16": "5HsHgbi5CGmt7D7bn3uYeAvjrdGVeNkepPi5s5RYg7Ryq9UyoLL4mERei8cjwfMd3g6hqy7LjuY4VyhasycfbHpd",
  "key17": "5yaDXwrScbc5krMNXGjbDoDqUoedCL1jnDWRqvNfF1ygcQDJgoCfxeh7Db7PKvo3ZcBi5z8R6XSFsV6kFABosdi9",
  "key18": "2BLedTarakh11NYsZZPQEKG7fvZAXZYd9Jx6snf2oC8r1C7xhCJ5KaiUKKnsyhrSnBYiHSJqpGkPFSCSSk51b8jc",
  "key19": "3Kmumtg4gUs2KXkrspwYyaV5fFziPaUKvAJsbQ5cxkuWYHgZ8rhL9CBHwchevUJoZuLzxYbTcqHjfBLTqrJmGLUh",
  "key20": "5qmdV4BGVGYhL3yfXL2SCxFMwCi7AYLz7cjhLjFVGtf6v9i735eRZ9pDyMnZDBtvzoyLP8AeoCqobX6Ht3cHu214",
  "key21": "3vTdpWf1KHvXxoYfj4ffcBFp4A2Zvjydrig7V2hgAjJtavWroLema5TXcHEwWwtwBFFwmHAvwSt55PKXSsaYTYGB",
  "key22": "4rNJib64VGk6rpGPcT4aucqnCmz7WwPyouYkfnbQTKDcX3P82TLNTbLyaQTKBbar3JZKp3P8xPKbrg5uHRf8NvTs",
  "key23": "2bQ78t7xydy321CqQbZQAfrt5h8MuX2mVLEa3DjHi2KYtcBf6Nin31XNFRp4tA1Z9gmMcWySRS4nEreDziLPfPkj",
  "key24": "5J5JUmWxvKPeEzKcn6PAJ6EuFc5KkDuKhPagiD7ywSpNghpbZHn89h37yi1cQakn5QfC1sHmeJZqD4xqnLaiQ6Kc",
  "key25": "ij88xAZBwHR5KmfXTETFk8FWtU6q9iU62p79nVxtgK6i9xUvN6aFqibgxtryfSnDxbfENPj1NANwx2bJqr3zZpP",
  "key26": "4GpCXCG1BtNr88N6qZRdqbRdYSc92Mxb7qQ9iM5hfxDTgAhoqMro8NiKYdigo3sk2jw5cGoMBHN585GyVLjykrn"
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
