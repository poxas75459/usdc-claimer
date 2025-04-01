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
    "4NYuSegaFMQxeutbfwStHtK27VBvsVpm9FC9s5zqiheLMqGUJ4WQqz9b6WJZhu1tGTWefeLa9bayYa1jUKXDDLcn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EmFvQPgthQ1wruvXKtkzchxHyAqA2gwmExqhanQDKTwiW3i2xv6W9sg7qTwM3niFSVYTsdZG5iLVQUimLeTQ8Lu",
  "key1": "3KJjFJP971Xhd5Ki2fnxhqdGxfQJAMAAi6oyUc8eGJUBcWJSb4Aa6PgKq5SJA7GzxRsGSysa5CKbxHsH5eDta2Rx",
  "key2": "2XTu5uUnnge72bV3W3mMbs7iJwoGwdJwTU6ejt3zgDz9Wr6YbsrJuHuCdZpzYMsmeQDxKzXcmRkjxpZZRKN8bJAK",
  "key3": "4NJZ986ZQwSSvdT3WPFQBBCTa2soMNu2LZUNGQ6sfkP2a3vWAzDcz3T5UcgUwQxtE1b8A9FjPVqtBL2z9mmvkamN",
  "key4": "4eRgtGo1hw6RB9wPiwGGpJvn6xbMeiDiPzwErz7oxn61sc47axTHv8CQMYEe7MXKn6tTMkz5at1KfZ34VT7MtvNt",
  "key5": "xNb4L3z4DuffuEYauU9G8qDncRonUNXwqayaARe3v6iLDEoJYmQV9c32BHtiehaRzUNvEHCU6rSW8z7XT4MitU2",
  "key6": "3q7hjqsnVu9oAgeszizEvLmro7cejtAHg54bKFQXsyexB1QVFaPAdfSrAz1o3CqdXG9WSt3YJQUcf3ajdNnsczoC",
  "key7": "2KEmP9BDabDacwFAzzARESG6Mn9yo8FE7HELxEv4psLKMLphyZgPW3Uhcrq9FzXHtZqq7dWcdaoCkkgz8WsdnXsn",
  "key8": "4dBxLxmL75agnjUaj2HbLY88Xe7wkeAjBHnk7ZCAwf2QoAKxwjrJVji4wyx1yc6bNUxcPbQuH92zBhJ2rE1mMgGj",
  "key9": "3eNpnDXXWdqxqnQcTndtXfTqmWTx4dce8tark3XJPxx3FzEUYTvczGAC17QgV64yzp2ZNJxqhUGSdRGjPptNfHHx",
  "key10": "3VBiTaaXKJWqoN36XEen92ACgRLjXrRGqEdn7XXxPWEn1kGfkbS2Hm4P3QYW2RV3vBXWNbunYtkRvesGwXqg7NRG",
  "key11": "g9kts2zvzSayWC5rvRyt6Mx1YV7zTczvdBEKCuKBcSZBbF1465V2GN9a9Tpzg1X8Ax9pRN9mZuScRALJhVaZv9B",
  "key12": "4GJ1FXtQR1aosujkXETYPiwMFxKMPMgzaNqx3xuajeS3tFXGnf3RwncdfU2vWpXQ9DzT9Aey2oZw6sbvr82BRsod",
  "key13": "4hEPytHgVfGc37emtjeMuxdMrGPN5GW1NMxQQw4mWm8oBeCpnwyAzQudgMRceKZDt59Q4YLgjoVdmmaJVzqzaGcC",
  "key14": "65AYd8Hp9K1iqVgihMv6v3XycBf7sWJMJw6f6Pv2yC3r6dBEHg44fqR6PpGgRFWiz8cwnuUhS9GVbUj8ZGtrAft6",
  "key15": "4MWsUUM4qp8ynGjeyySwdbyT6mnabMQMwHCjqCyNsjiFhQJDy1iV1B5HMFJRAfRsgypsHDCVfRvVobyXJieiUp5y",
  "key16": "3fGegoEicLThC6cpTV4fmZ5rVdDJom2pwDPJKzwn7EJXcvGQWCXC4fwV9oUFb7nT1KyszemdKEaozh74tcwM84Sm",
  "key17": "31bKTkMnCmSzVPa6y6vNak5SHxZB7wqxpmdTb2LWrT8UuwfPR6aDMNLywFt63MNjeUMC1SRkBkJBoX3porHuXY42",
  "key18": "fPYnhZdbqGYSr814sqPjFaSVrpRWpYPwuhPG9cmLqdTukDXgENwsPZhsyryKJejjSSMmwbp4Mz8NaNPMQRV5vPb",
  "key19": "3UaXKxjggosWA3X8eHTssfpY3DCHLWqzUR7JRh73cMudMqrgqoM93gKU39rrhYgqkBEZVabTVo4eW4Cyo7yeHehA",
  "key20": "5FfaNUqqi1u9Jkec377u1D2ALNaHGWPXQmEm5qKDmgf97BN3cNAomkvyUv1rJGczyzKHt9ocrEZiSzgSc4YaJUpu",
  "key21": "4JDha2yph47cpxLNE9kkh42YBufTBf9ervz1LdGdXsDD7Vp4S3WpgUWtBB7WPn5xjyjxRLi5mUZzXaTZrBb7HxR8",
  "key22": "S14rbGMRGH7L72fJjFBT6xLgEKXAErKbafnADTQqhXPYJ4tVfiDSk5Z1voXBa6iiMnKk6uw8uTsQs3LNeq9dQnR",
  "key23": "xDgbViBaFUy4fAWgE7Jp3a5qt6Qg6UtFZSrdJyzDjGXvVnJY5FJ6fR17j8B9sQrLrbL8oLAY2cf5L2XFe27J8Tq",
  "key24": "3apvAx1zD39gzuE96izgYBd1D6gqMybDZUsTKKsVdgSHVb6pucAmaesKnth1KghajckVDzh9rt3LFk6HzQgigbD3",
  "key25": "32TQJ7fvhqFgJ6iEUETX4pjJKjqYm3czFvXvoRwoqACQt3hN4S11YgMcjfoUgqFGyHqpm67sHnHRZw3P4BLysLwn",
  "key26": "4Ue9qYR23cEPY2AwjdGZqgMLJhVp4v3HfdfFt9aejSKUx3P9pHndokBj6zjsdwx7achpkD4fkGWNUppaxpqGVotw",
  "key27": "4Vn3Grd5qv8YBzgusJXDEKK4BcMQdhL3Ewrz5KZhV5sR9NqeoHEJAF1HhvrMBgcQZRWPiHdFToKbw41U89cW7tmU",
  "key28": "4Fh2JGRgU6p2UKjjQfXaN953bQFD8kpEgJudk5ktqrm8nDSWGFRceU71JAxwdNgQmn13GtpxwUPNoLvuSHUVLnF1",
  "key29": "4orwwFaMcrATXS2iiJDV1JMFt86Uf1j3MZXniiJQzcWX8egM7Ly3GiHmVbSXFCBLUGP392HfcTtQNoMad1csUUNv",
  "key30": "8Zr58qPtN5Hnh1c3Vhcb2JpWmFxpk5G1vqYEmygBozEHEZBLJducGE4goon1iLMtGDRbHRh6ezjpUYPhBPaGG95",
  "key31": "4JFNW1VyL6ybKQwaRPZvtCGvSmAdWaRtAGe8vbHqQyrFznjo5ZZsfXE4yrbfMdcFpQnjQbMqWNxrhuYJoyNntceY",
  "key32": "2ccGFbhuQVe4dNRnZLrqt67wbHyg9UUCERXTz7xi8yQ2bSt3KtubgSscWvDBkPgPBvBNLWJpp5XygrF2Q7C2Z26p",
  "key33": "2eDDL6yqjfE89H6m3w4rpSwZDV3jzni9skUuE5u2nP3Tkie17RxgGj1hkfuycnMUkbersHo97DPaWWsC8jYnzQPZ",
  "key34": "576Qh3pSGEPBVW1e95wFCywU6J9uDAkqoHYSKkuTrW7cqiv3FRUtkiH1pRkx1nTJfnepEJ1SG7UEpLNtqnYWTaUZ",
  "key35": "P1J8PKK7xPnnPWJgjNBNNrjKzGtwpq749wHarRhWtWLbSuJJetyGuzkkJhZ8URh9UTYCdQacx8rwbWsm93cXHth",
  "key36": "4XK8HgV8hMUkfeCj8pobd5QqRMoLpotAs81QRXUzB7DkQrrnWeNUZKvLctJKvSPheAepSYk1FMbDnfsf62vE5v8U"
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
