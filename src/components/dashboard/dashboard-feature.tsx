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
    "5eJ2CiKtiTCZnXU6ZNTy4DyQyvAn8boDjCQPjbcCTo4vYfeSVrYUehEiXBRDNorsauJtEK4KFNRNaLsoR889r3rj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZJzqJxVhsmBKsTfT6yy5qURLGFWb5TXpq8W9ybfzRT5gvJBSe5LS5EcxLFLy2tZCE3EnxnnaCeYB2H6ExWztqcB",
  "key1": "41P2MkektGjeTmKW3vxGBbwbGbpw858DjXrPLyR5X2H1EbrAAAUZGVYjJyfHR2razWTVud3aMGy3W54LhrLK7pu1",
  "key2": "47aLU6b6FLPXpkWKHnNjFEcw1E1NiYnic9yUfCwFAY4wH2TvvtkQHEaNtFKKgmHusssTiYZ7nPQEefsybCDeb4GG",
  "key3": "5DNz7pbsdxQazYgnD2ZvLQCYuForF57SZBCm5vw657VSSKQhkCwudnHhiWNnN8fbc6YzJxx7mVgBwErUMmgGgcQw",
  "key4": "2puSh5zmzyYeNXE9VCSyWEpHBUWTyxHHt9SC9WRQhxwpbqvo3JboxcLyp1ssgiQWMuTn4qdyP1Ep9evBCfSvumHL",
  "key5": "43AWDWpkgqi6iXBk8EJbW9FUwq885aPncvndjqCP5Un46xFP2vL1LDMU1nmooivJrLenGRiZsbifHewVSCf4nnHm",
  "key6": "S48wCwmdvAS95v73oVTYpdfr95hWdrMGbBNXcG7xr2yJ7yXRJwdqaZJEaKtULYb32AnY7G7GKqWKvn9UUee8bi5",
  "key7": "3vKgbSqQNdA6EAhW2xDBheMuA22oMHGgm1c1B88M5RtVhcqHNGw4cRH5VbES2XiiEBsuqF8qoHKzeBopLLJe5SS3",
  "key8": "21wcamRzoLTLeWAQvLJscKBT2JYHmnPVKekewceWHQrcqV3Agr1wPSnv6nPxsmh3JtpmwEWoDpntd7MvAZrW4QPt",
  "key9": "4LLbaYAbx144ZpDifTzafC9AaHPZYG4o1FCiZBidVMGjbxbudY9aqnMAUcwBEKdtPcbyLaiGpmgwPipqeQ96nAy",
  "key10": "4Tz6w6uG7sdi1mygxAvhcxgAAv5TKHW4DgpTEyJUATJqCorMcpYs4hT9VkNMRJG1Rm4RLZ6Y6AyjFEWDL6N5Jxj7",
  "key11": "5kLCi4y3GA6chtTL1EmWmQss9spiRcU7cswDb6GUaBxAPg1G8LVFrA4yashVH6hBubWhnrrrTxdUSHQroPiZCP8s",
  "key12": "uKsW2TQKGJrQxYMYQUgQvdcnbbM1YR3fnBjF7rNK5pXWT7Vv6zVYC5gKMq8J1KaKAhtgRc63nHnHAVddGCSGpEf",
  "key13": "2SdMzwg6nthsUHnjT3FYAQPcVahEWNTXAtDqDe348h1wFw1S8pyAmbjuv1gfm9Vq4PSiXjeDZgVUjXjeVzyAowiU",
  "key14": "4cVBjxJbdP1aApKBzXvkNgik3JMSzf3kLNZRBxkSZSz2EDXNVAoF5SYomKDTh1zGejrcJbCPJdVzB3ZxgTTa7n6b",
  "key15": "5CK1dM2gDkL7mN1JadczLdAbMbEygyZ5BoKZeHZRzpQbtGFGsNAdPasR8kYg8gBjVDC8zE1LBLyVTD6x78FKeDBy",
  "key16": "42RekEpYep2M1giecs3cDgiv6t3dMqjrAnEBKVZ7DAFzaWAcpSkvxppwzQdqnFZJUbKP3xNeDppzRLybvBYYPWRj",
  "key17": "355Aocy247e3pUQ6K3CGNJUb4CT4zf1TioKZQzFFVScSEcSyhC4SiWoEUgNxPws8Q468ZQj4mN52dvQcjRgehfAc",
  "key18": "3ps7FZ9pgaqacdu7f3dQs241x1sHHAkMCgjAm863GwnYgSmA5ZjQUVmMdETk7ufUc1yFx5dCYnm8wBwY7wAyx1WM",
  "key19": "3qprkoxsDgvVY8qbEitf3zgyfYXy1TxGo54Kw84jTKG9UXjnwVKg2ZxBF3jjE8sGQhRJ6b2RGYq8NCNPqKAAEeD8",
  "key20": "3biqGxXMTB6jmVuxYPm8nxEhhp7Z9TEVd991qkf7BeH1Kr4HCnFL93QqVqvocKFwVJGUacYstUYZ4YU5e9BER3RQ",
  "key21": "2oK3qCvvSheKy3YwMMg4QbimzUwRnDfUdF3mRYrd61YcbePAbwFLA3EHewFrjipJe7RcJ8TZC5GLLX5B9NHE4Rny",
  "key22": "5HniwC9yk2TzBGg5ZAK2YcHdWLVSPeF5N4CfQsXAZJoFy31eHsY9tdt4Cw4dvEdLZeihLPj4XEtSqLWQKc2Q5wtE",
  "key23": "5k6CWNh1ygwbyfxVueC3ZzUh5u68mXXwJGfbcgputTgWds9ctgjGbHAKjmtEytaPMRbXpFJTKgXYp5qgG3rBD2X4",
  "key24": "5uKcJ2eK7MMXhFJBRBgHhqyLLPsTKFC6d6Gt49HkS4Grep8zXVeKYv6CmvNhHzPUkKCSXzTGMkZgfNdzkjbymyFy",
  "key25": "4RUYWN9DZWtn5EojUmxH5BtcmWKFhDdFWWeVAy7PDcLK4rFSovJPshvzH3EZEyi8FnqFzG6HjHkRSK2DA1Qtyjm2",
  "key26": "3UELpiDQXBJ2vCGpqz1opYdCdmeAYgTFHjKUGj5wnrXkr2KTmWbFD2Lk3QKX6gcYghHGPuo8sGnC2yBybvVWtAG2",
  "key27": "4pJmuaZrjSxi4jK4eaGDtKLxxYeHmbLjcLNQ85CSteVnkATw3BLN1i3yLYHwHrstDZhs1vffK8wf5prZbxRvX6x8",
  "key28": "3jhwqRJNvbKbwom7BmhLnZfNaWCPyTc4heWPbRnRsRGASG33ud41QvkTabGi7ypnAgMdUKeeyCb7ckUSD1UVjiPi"
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
