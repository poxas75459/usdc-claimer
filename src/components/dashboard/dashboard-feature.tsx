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
    "4iUsq7p9WXJYs4pBXvk7Hg7kdqZyQ49LPvstKsqe6mXuCV1YNfpn1vB9pSRoMkPhx4JX8qSrQ92MyZeTG3u9zJox"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24XdanXETy69eb2qnK8xDSEqEjVeD7eiLCLdavCQZWwxgRQWYWNwVnBZWkUvbV5fVyp7aKRrEy5tzqy4253kF7M8",
  "key1": "3kJD5TadvpnMvKYkHPe1Q7vdzdRsp1GpxdBoZVSixKjiYXRWgAcxkZ6j4a1EzjBNmnZUL4AA7tAZPFySHK2xzAS7",
  "key2": "4h27t3xAJpkJkTveXKyzR54WRbZ11i28UHvApU7iXWvFJkj6k3zUKj3Z5HuLLnnfkbxV5CW1tHh1ez1WZLeMheZg",
  "key3": "36QkAQ41uriq1QRER8g3fwTW516p9jHxhSFXhEBGee3yLnT5ax3kopXW8JFuTF2ZGFfvJTS75VNQnUUGSsng6cMK",
  "key4": "ui81kJxL4PCaFLeVL8NLjU9LSNqtDbUeUJYQF3yHJ65FmmFxZkHmtUPp2FPK47vGZQ9SVJKZg4mMvoXLoSCZBSB",
  "key5": "BsXRJqpNzr5eYTLBGAuTeAa4idRQj2ZtmwkZ9isDSTpcbgwB9VG5sLLWgPLWUBCinYyjXdir89P1o6hLCkWt2jH",
  "key6": "hzA1dMno6e4W3dq1BDhv5FFH82iKPouWCLuaKFhXx8Wg8X1mkyCKvSSUERWMzdmuKaRcpVfef5NVKSCJ8G8x8xh",
  "key7": "2pekvLH86fqHzdxNkfqZQLdAX17mksuJ7dFbHbpRzS2Ci4GJZC7eBkR19M8Vk3jy8K91s8zgQqMiVTxUUoCLizDu",
  "key8": "3znf75EZ3XU8EWWZhmT24qMRc9GS5qjRB1B8Druc75DDGGSCong4fRRmuSy4xGr38Q9X8G57MzJN5aXVwDcYuUVP",
  "key9": "2aruvT5ZwCkqfDrSe57F4fJ6C1x4MdC4CT1SrLMpG5ia8v1g1ombVtjsjerKYq4iLTLdwPJHoZiZerrGxRReYaW6",
  "key10": "4extoafy83YnD86fEkcAJTv1gyFAwP455n2Tb6fY3uW3jSAY6uNRvKBbQErczei5di7w9SCwkLyQpnpcdav5eu2T",
  "key11": "DPoLExeqSZCpn6PSyXiiYvDGKGU65b4NaEMfEVYDymFRxRfzL3mujUzQAaf8Rqj64YUpwXd6GAZsLYEescawaeG",
  "key12": "26Kzsgfbz6sU15QfEKPndr3XRbBCibUzsnEsPU4R8EoSG3p66pYnWmVdzvkbHUTdE19uV4WnNL5wxFBWaES2d59m",
  "key13": "2osny1PUees14QxNWt7NE9ULKfYGGyUFP23hfHCtDsb6up4fidxtrP6iq6fFBirBFJgL7oi3HrdCV3ND9HSZqP3K",
  "key14": "4CUHeBtVn6mHrqbtdTbBJ6mMFFk5b119XQCu4qnPjBLgz6oK8SgN3UuzDuj3oZEPowAMcDMzxGBS1PLWdMbW23Cf",
  "key15": "4Wez9A9rv41uiY7WvWrECW1v98CrusBnvEHrJicq1Qxq3Kryk6a6UK7dzvkCxFMNdDSrmw5wkF3LTGSZYVbH9mxX",
  "key16": "61vsh35R5FBXsR6EivEankSv1KD1NDcV3ozc1A5WrDK4T2uVW3HY86xvkMJyujHeUo76iSa1NrDorPjuY7HJidnw",
  "key17": "vhGsnrX8rDXoZYCPhiQeQSFgGx3MVHtA7XnSsN2ASZ4sgQS7RvYtUDfQxyxJfqwhtcKbDhmy8t6HFMhh9veHk73",
  "key18": "3ZFYhd4CqgMWr4dCoHRPBoZ7iguMdBk9iChuVjWaPo9aq3Pjr6uLU6CfmEabiPPRgAGALWYFRNdvPvMaLiYp7TUx",
  "key19": "4pPQCvYjy5A72vpVQjE6pAjJL5yviEk7QJuLAJrmCAqL4cdqdeK1pCKA9g8ck1fW4EpPJShgLgX38A6JGWv6FVfX",
  "key20": "3TPKDmcugEa2rzKL7MTF9fjh8g2tEJXNfXiVxzYKpzY4XMzWEuZpKU1djtMqoXUF821NA6r32XsZ2Hro9dd17fQw",
  "key21": "4tiKEczptB7jP98N5GNzBkmMyg4TqVT76nbhkoFeC3e2Eu9k4W8YC2jfoqaCbBVWedPW7xG1NP15m6bGkjmSavCL",
  "key22": "33ikB5jpdCGDsUeBSFasdE4E8Wt1xt6rfpb8duwvzKTpNWdKACqkBJJtR5Gu8Lepbs8jfejYS9oUzPWh6pgcHKkJ",
  "key23": "4JShBiWn2KVpx7NtT6jx2CBhi6EqhuNGocG4Wdpkwwgvn1KSCn4TLFP5XjovMt9D8WeTe5vB1akQC2keEhMnL4Hx",
  "key24": "2aQqBCvjzN4PZqhnU3gjN2y6YECaKYdrFYa6nVCv9dvao3NSEkPUjMXjjZWPxQdUB86boML9GxSvDB3MaGy4VTME",
  "key25": "2dY6sgCFRDreQxGuJwe4MZfaSkyRxV8WasYLXzTx58mJaiCmL75hZoFBmPZWuc9NXQ9RG6GcEDgg4wS81Pm1VBSG",
  "key26": "ZK5jRsDZjmDdgnYhusFx7JQSan8jmvjcim6LzxHzDXLgMBcDQJGNTZEmKgu1MNKLA9N5yqp3E6Zfb5GDPXuai3d",
  "key27": "MUsnZgv2T9mBzD874ctYHDRVCHkdc2oWkZ5A1T6GtxJyCPH5AR4qmRjUx19R6zjk6j3yAcLRu4guGMDY6tevRRP",
  "key28": "3Kixnji6scZCV9LJx5S5ju9BnF5dAcqCeWTVSiGPM1VAamDEUFu14ZeswWHuwhaEdq6KQq6dQcdzeTk5sd5PthRf",
  "key29": "4pPxuafBMribgws9NoTW1D3gvGtmX4HyKbpjUky3JfhoPXcjCoRLGvBp2EEYVGtv78k6qrgyP8waZRX93o41UQnp",
  "key30": "2tt3AjhZnxMEZaexzuv94DtNXCkCYKyQoqVtL24Roq4NQu7ipQfjdq78zcUi87ndFQDC79dP2nd9Cda7ziy1PgMj",
  "key31": "RPSYWPKy18WLqukW21RBqs6KmFNHA2RKAUkCHwwiTygiM3cR8KDsvsmntj2xbph59HMypKBokAfqnBNk1ga6bvP"
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
