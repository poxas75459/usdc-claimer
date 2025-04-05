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
    "4QiQzDKJbEbEysHgL3JJrnRUBGzHPxb7Eii6KyQap8nMgb64DrH1gFdVyMq9mU4fNhtAoWfA1ci1UCXYqLynRRJ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25n3FLuDNRroYykGu49ehc7jeYxYyMKHQXgcQCrUyJuC2wuJ7jWUoVwoabQPDwG2t4y45x7LG3ig7LZm32R5kSYt",
  "key1": "4vRgWVEjrWnJNC6aNCSvsJCQEGjjjNB4wvBada1E2hiMeJtd3TZwni9uQDJEwAoMEiSD2ovnpSm42DzxQ1svYGLP",
  "key2": "4sf1Ca6XkBNdEn5vzYVABDBbL4pSTwYuUnKymEmWAy1ckd25qtp5NWEdEimtkGnk1gM3jMTMg2UoJnYoqDXdfyTa",
  "key3": "43UTkCjSpA3hDd1Z9UQtZX6riy7FhRNKhew93FmccTrynwUDV67ozc1zmLQqBzorp91AAcrsn42x5FEfS2dUgQaT",
  "key4": "5xTUwbkjRFXiNqWwnLpzoaYKmN9XSvo9tnHTsXQwC51tSUJjhvhpLw3VQp2UnLFD2Ta6AskRgaA7BxEjj7a6JcX9",
  "key5": "61u6yWfVpPkbRiAgKBVBbE1uQmGhrYMLjyERgMiWsWQbgR6mAugazXnQPWPkbvCbSA1QzNFcxSebnAkz5NSoM37t",
  "key6": "Ahov7Tdc1RWnLG2KdW8hnJVXmW1KrB5PsiPiVz6EqRuHciDqkneikWi8JdeaQujddgYddWaZyMqWbkNLWim2pSx",
  "key7": "26fgdpSjU3nUXWf7dWF3YNzDP7kK5FVy4CRU9gRmnVXg9AdCqK6WKPVEEP2enyLUJkAthv562ruAs96JELXev6hM",
  "key8": "CxQenyVuWewnucStXuGW3qFWEViz4JMRpjKgsanKRb2LDypbNosG5dMtEE6xdVXZiMQMgAWBWsYwv8hbTpdLE4K",
  "key9": "3euThcE9pqbwkfJqk9oAKi82XA1KvqaADeus1z5SiRu1KYRsC61txTFBffwgkM4qMxNoC4Cm7cb42qF5mNNCfis6",
  "key10": "AqsuGbZiYggR29DW8QQ2pAaybjPhM3SufDpRkCniwTQEvoMrkHkp3WT4o8VpQuq8E8ERky2r9Yny7eX3Z7eXoKU",
  "key11": "3DJMJjuaSygDZskHjhpU5UJR6cUKGJDHSbaFG1czp7ycKCvMuhpLeZVVQDiXHoNfuG68xC4ipQQxNMtyVWxaFs5J",
  "key12": "2RRjVXMjyqQmCv69kWW7HCqKwNKoELEc7CQepG7smxzpp2axjaNr7P5JgbW8BEM1uWzbpauc2216UNp39EqLFjoh",
  "key13": "VGjedHD2BYXNaXiuhfee5qsqHFciP6L929EFevW5t1b8m56fxQWm5aHJwmaggXRcKsf4Az8U3t7aCHWzrgrE2En",
  "key14": "5TfkPDV5sigP44Hdk9nUxGUwGQbwYXZP4CvFpRkR2eKQTaU9byMhLuWpVjiBzygwp3dSdPAAkxifsujtm3jvsL1E",
  "key15": "FwQU6jDwUDHoxCHpEcc8beLFqJkQLymcHixv6Zu7eVL3Yhvp4iaQVGAQHEHXEczjMmxdq5xkpqVrcoNsKLXbuZ9",
  "key16": "5G3kB5oG5md2MDEqDoW5YTWiGNBApVZZgMxVhf7iJT56bqCaLYRoUbmC9viv3SdVNGsjWirGfSsDFUMvLfGPTTMY",
  "key17": "2hj1GrL8XL7V35tQvvAnVVDUYpaWrAAgRimXibv719ev3sD4R3miN2hmJ1mzE6Hs5tHFVxUzhD1sbin2dxd8PTGf",
  "key18": "v5NmkyzFbmh3iXWbWUZ8EnwqVPtxvz1rQFYumYYBtXFamqZwMgpkU4VyhFcDyR88jPFC9hcyxFeMpWP9kwyvuQb",
  "key19": "2MPUEXf7jDLi2tBd3Up6DKt2326LEwoJXfEkAe3cUKRr1Es16BYnh34aErpBv1zrtwiEH3MX9mhuQkrwnG1fj8nM",
  "key20": "3YjBejATAE33H12y8FnMwTecKJqTSi1JvnRDVrmHtfVrQey3edTxBd8aLmWNw3XzMvJPFGjnKimwzBYhvymUr8G3",
  "key21": "5iBGUVtDCrE48x2qnRMWgTMDzhH2VAnB59SsPYH9fWQi9kSHyDc4tgg8vgxMBiqLXXkXJGdaEg9tza2z1U37Ycu5",
  "key22": "49nz2YKzZxcC1Fx61o74MTh6q6V7k49iA4aosYgHZzhNH4fJbN3B27PjK6PehEYEKZbk6xEKR41NPqRymrzomRB7",
  "key23": "2FApVeMsdvLfYQhFv48uk39fnT83Xppg73GdYEswYu8Mh4A5g6Fyqc3yV9hxPsJunYeRJQd4tETYSw993sUseQYT",
  "key24": "46Wo5xsSDtusBPmqpMfsRVxZkjQfZzZkNjtjAZraYrYa2aZUcLJTeC1ULyqDUumXUwKmkDu9qRy7BUf8UWr2dpMW",
  "key25": "3t82BGeArvgU8sHPHBbfRsE4MSKG8eicxMruXLDowU3McMwAfCcqqf6RRcaLDYiGemwzdRKgZb3jS4jEBWsxfp7b",
  "key26": "5rezHXkTYX8cC9UMfpz2gdYJH49qz5A7DPwgRaLX5BsYpzRJmaLTvzhojFt5a61DDpKtmq4Afoup35PNWfryi8Zc",
  "key27": "5Fx6o4YxZveJSD5Mvij4sHyzD22AjrkrvN2D9ss2j8UwJCcWBwcaQefJsmFvm7f9wukMg6WUQDCzxvC6T3H6gdQT",
  "key28": "52W1HVkuFqvyotX1f7HEc4dr9wFkensz4fMStpNJng7WCrXD9HHi5uBJaxUFzJCJEyabjqRoqTLbCJAyyHy5DbYU",
  "key29": "3APPHJgKSXgcgEV63FZW8ZSBXuEwFRXDFEpHPjHBvpNNQhv9NkXWYbfBzhhkyzhuzZu4XWr55SRReHLniWkGZwaf"
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
