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
    "4dnnfqK57YYBeDENdLVBKHRzjQ7yJ5nL678yMjrvgbVA8tDC51pamtHbm1eDkAcTwTpURWJNby2wRDBqJxQB7f9y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wW3PZQGUnEF3QyHd2WE7467NVLZos6WJReCPcvqqbEmroL9vJ2gVbLWjk8Dmcny5EbJvavQMsKrX8ikivszoYu6",
  "key1": "wEtUwewJ72Ur2VrGpXDmpDVjnBi561ibRFESd1zyj8XUVPYpVekWEjz5rVyAfG6cZ6DRQXcpYJiNNdw9gH8EEA6",
  "key2": "4zRgNCY7hvTU69Dq5SYbmM3XT6yzJY5TBytGt8bx3oTrkeKt4EEogW6VnHVS9dEe97z42QsfhS6b3Z69GWvvEfnM",
  "key3": "52yvw6bEqZrAJo8ebADLC36wv4ftr6YLRSca5oRkoCfZjKrK9uR8ePbxx2V1dcSd5L6XAtiJpaHrZb434zUimsci",
  "key4": "33RPAgNUEf1wZStVxC2EH1Yqo7URghKdNjJuhEnnb1YrcS5UmUjXQaHzJgdhfqhmUrt5dvasCo7yYhqGJoaBCMRZ",
  "key5": "2BtPPoHgSNy71DfeZoRrwB31bdS3VFAwVvD8reLB1ktEptuh2e7byZFUeE2CFgLiYKUaQo4KQmPaigDTxMmpnFL1",
  "key6": "2gXxyV5E6JcctcgemFdhNPZ8FvejdWRWvgLy4huycg6JFNTHHiDSX2gpCq49a4QiUa8YceJjsfPE1Zk3zeSTv4WM",
  "key7": "gnGmtVKzW5GnMNmoVwf4ke72EYe7RAXyqaVSKVjyrdNfSBtnzPH59JwhStwWeSUyXpSYVNNRSCypWS83RYRX4Xa",
  "key8": "3RK1JpWRz3KFfp97WpBsKZFd4iPSbGAezHttudGNmh3WUAeaUzxWVuQRke7nKhLtsQsYk62F8HycZQFvARszZgAJ",
  "key9": "4YwFEw4t8d35JTkN6AoqH898xWwcMEW1CZ9CAdM1duUfWTkuY5LHmiEAo2ZTVeofP3x3b6iv7EMJVorPcnBMcuBp",
  "key10": "29XVYtSWM56VjRZpPMJkA4KoDrJMGicCgWtdnPAHT2cgDty8zKf7G837JGPoMAhXLfLiBe7agpeGPYk7CfvWGpJm",
  "key11": "395rkQ3WXrGozNhwNiXbBnw4o473SBaddRnRoDcCrbNe1cEcP9kKb3YAc6MAGEcbzL3Tgsw4LKMLyWer2AH3BAe7",
  "key12": "4cSbQPJd6f7qSkJVTcpD2T9Bt1Cq38cgqFG2Zn2DqB3gHFKQy16RmE9QVvp6Mhuj1G9YCsPZXARcd3phoyge1URo",
  "key13": "26qSLxWiUb9dv1XkyTbyrLJeFe2cHMAkuCGiuSovf8EQhKiVd4ix6ueiakw3ZJuagXoq2s9CTpdjRYzwHCh7Y7TU",
  "key14": "2uJJxAGQKr48pFZ73v71p74sWPfJQxHUM8MQczmQ9UMnWGmfgFH3Qvoc2D5AbE9Dh4aT3jjTsGmTbpvbs98dDc9t",
  "key15": "3QYn4gHZ6kAy1jVXwxYb2BQL8UqZ6GV1tC1hfWvMn4byAhMreXHUPpaQuxsgD1PTcZbuyoZvRT2VFeLQ5NsdVqk5",
  "key16": "4aGTjh9J6gLVqmSyk8BWkCw75yL8EmwogvfQLm2rCSUPkNH8xE1XKW9SSv6NPNhEbtuxLKLnZxnS7vzkgswGhb52",
  "key17": "5cbndUoKi9Qka4Hs6Fav49ZtgBRu24jejrheHc7UYUSThBnFuS4SH9XdJqoeCMoESNBBLYm2mmAmZQeoF41ynSWE",
  "key18": "576PMm7zALpEAUcqLmfMvsdQdWo6qzv6XX3vGbf7QNqSqWmXCroMaA2MJAWbgjzfzx4EEWa37EB5f66fbQipMqE6",
  "key19": "3bWzR8byPbJdDxLuRxSEjc25v7x69KUrT8Ssc5ZKyFphqQubvWAeXHE87uZ1SF1HuBMcWnHYwawXBnntUYjWo6DQ",
  "key20": "2ASPXZ9b3F6z2c9fvBt682YCMtJLMxw85LRrUHzy3rFEYGWCGvdkV6kd53YRR7qw8MVaZT6EyPKNBXwwqoMJwauu",
  "key21": "xQGCWBFTr41o7MHQJX1gk48PwM48RKdKxizmjEcyp8Kc2XZX3g7XVin8cTfx3ggA8miq9J1RgFzrAkcE9gg46p6",
  "key22": "4MCUU3nzXRcJhTto1utKZWwqQT26itcGMdV3ZA4fLi2EiNcbE2EHfHsrGex9fUpqFFg7zSFRVmLJ91KbrZG5RsQm",
  "key23": "5KMBUHBMJccFYhAWN6CZiD5fWZzELAtaSu2HTJCzNpQShNNaSB78sqmXbZF8Hjf7pXyxvFiGEj9BGGYYgu9q7bAf",
  "key24": "2e1RhZfBCo8ut4mp43xr4yvwdQUeWnkfZGKAMf26YvmrGGyzdCxtxuMF9hiWER3XvQ6Ks9v7usPENzTKUnvSCasM",
  "key25": "2W34YrWbDJbZ2h4jzS47pTodPpXWtxNWh8jwKGagWWVoPmecmUbuPKs8oJTTPsGxidVasFUMVdDTMv5j3JucFrgq",
  "key26": "3fYX5iLw29yKqpKCGmi7B2Lf4TYxjtyteKJuTUChEjUSiYjs9ckuiR9TNSjLY6BcFXS4jFARa7LEdJ9htBRVuDLx",
  "key27": "5cKgj9bHPPRNJVUPhBSYtM5ZNuFSUbf7hsz65u5cDsJLQdBCJaD1ZxgQhtEZEv2S8HANp5NSj4FBNS2N34btp1TB",
  "key28": "3kzEGWhLon69RPLym9q1kgh7X3QBSiwNqXzMBR2drpPPaMqCnXRdr2McpAe4B2V11XGyc3gecmWA6LtHoVWPRjd9",
  "key29": "oPGc5q7n7gd4w4jp6xzbnh1bbU1RAkmwdEgVh8RJGgTHAzpSBvTGxdXSxfy5EQgrd3T2KGFVdWY2EkafC6gPes5",
  "key30": "9kirytzQWvctkCAJ3bDYhdkfhF1pSyWqt8LjX2xNkD8GK3xVkeK5qUWY1VB73CNLQ5zvqFANmqHqn5iVD4ncYED",
  "key31": "55TCR85MpWvvMQne2C2q28SziFcVw8JXy3yJ2kqtiXbHNfyF856JrfvTbuuWyddnjt497mKBLZzpTX2ZyfzZ2vTS",
  "key32": "41mkECuoHt4dcqFzby1DnUqbgoVrqLNNAoWcSNyCFAUyxntb4teDFdCDvFmnESCfvp611SFEgRLfw3bLM7BujCjk",
  "key33": "44ykn15wNfi8CLTxWX5Gtf3b3w1mhphrKJpEznPBFFcXo3JwXEdaqQtR7TjbLFWfDTE24fdoAjuACmDugXSQXshZ",
  "key34": "4z7Jv25XuNsx6C4AmKx4juNup5YQdnZ3PXwN1T4mfFANyGcTN28zEbw8u16whjGFGKfNFUVKwwqQUUxMJCxpbiKN",
  "key35": "4sKBRmaUGAjUE2wSGbvbLnaKXKftF3uzZuv6rXb9p1X1MCSsZQ6gTfiHKkMLKyTxPFwTV7ctZSeiS2KqnR4n9Uso",
  "key36": "3Y2yC814RxziPwAubME4Qx9GECcWNwAgQ66Z4GL2QFyQqrpo1gHEtzntv6woXohK75PWAXybySHEMj3nwSnwETdX",
  "key37": "4wdp55GDwi93eLFbt5YyaTeWGhhCBzh7enQFDKADyrTaQTkJ2PJ1sXop3HP25jin74dB1Q5Psn27p5d5NepdmhXE",
  "key38": "5dMSY3afNkQsD5TEv83H7C3aUqRnh3yNKTuw9gfffvWMCTx8ZzqqHUaW4TP78WW33yR4xYdFfBndjNzJgKEt5fz2",
  "key39": "3p1vJarVDnLEX3uaPfM7jHSvwqNUkr3hi6AYDTZCQW4Smkv2ZbSzrmzoypxgc3Z8cGU1JWykR7W9SBtN1iyWrrs7"
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
