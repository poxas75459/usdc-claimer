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
    "4Ga7rCXbdyB76X2LmM78uKQAh6DCEwymU7bpD8E6ZqY1yQTiGfr8PHiPrFSyEci4kZkkEWXqj8N9Ep4V3asqpSJX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RKEcRxNt65kB9zAM9G2Jn7F8gowUVQLcotFnxCJ6DmXGp5zVL7oCbMMbV2XhDTyZca9KgP4yrgyBYg51H43kBNJ",
  "key1": "2QPkokMTFE1vFbvhmY78sZjJLX7hTudiHhAgSy3TKspSfjdy5vazBZS8tsa9BRus423AcvG8nD922B1x52xyg8ps",
  "key2": "2qTSK33aV79g8gTdAWhiyEhy45WKspidKSA9mvLhivf7ESLtG8TmSdHBKCEMJDYseeQPCDk1TM7eJ3nRBvK2bgRp",
  "key3": "22rBveRhre2YWj9qbCzcRHp8BtjmWZM4RwSqBbAsqCurEuCwRj5Jpd94w25X6Qb6kFQ9ACN2sQXNvwXv5b16xQxx",
  "key4": "4AWahVk6MqoBxJt2HUdMp7LS1cjXKWARV8Ys8C3UbkFotLiqpyRbCmwyAu7ybfYVVyzgXG8dYQRAhAM8F7eYNhqz",
  "key5": "5BtxVftLAc3ak82PS7UoCG2jnYCFQkRhsAWTWVCmCaF46wULRGvhjbGvJqmSDCuK5MbzYPxnzVThjTyfFnxearBZ",
  "key6": "5WG2peeUocenwiBrcju1WWraXWTDoPeWTnNwi4Ts9e83vjDu1dxAjruBPQMcbndUh6qtn1a8dDzv8986DLZGVZ87",
  "key7": "52CVaXHodaKkh9k2XJkDgWu8v6XNgY5Le1CQdenfnL2Db3bybsGutDw8UmdF1V7TD3oz6Ts2ZYJu93LURer3Lfgf",
  "key8": "5S8xPPyTszVmuHnTfrLJtBtY7pwDGPudL1wJLbf7JsJRS6hU5LqxYmWK6cH3YT3GZs1Zb7JxR6d7CSDNEuHSRy8c",
  "key9": "5oKsb3F8WkzqtBQzwZdymdUHLFx2tMdWJtk2CF4AKTgXDmBgXqxwjpvKnxm87cJaFfyoVXo79bk2ZoUmgsWUGdSn",
  "key10": "4WVzc9dXh1Ui5EhvGD33BWZTc7JRod8CbUBA76Z6VFk6b5JwR3fLvF48G4LcanTuTr6SvCnYuYSH3qBb9PUAWKTx",
  "key11": "4Un4jzE4XpzW51hztJMGdfxBrZmgbWfmcwApMknioTbK8Xzuj7b78TAwiWtsCZoaepgHFunY3JukBr3qcZ8dXMo1",
  "key12": "xXURF5wi6Ey9BNNycmjMy4kwv2D6Foytvb9HTSy6yjWvcWNkXyL6ey4tcH4nqR3ciWBNdANkjsRCFBHDC2rNFFq",
  "key13": "2sjkRmKs6xDCppo2Qk1gVNNdQxHaDWbbNUjoNc5H842L3CYCVYvNsYNWEWBSqQj4mfVYmfzyaerHkmWfSeifehTG",
  "key14": "2XJwBk5GL2ezcK86pNXF5wotN9DGp4ATHgrdqD4KwNFB5NobT2zijJnA85dYKFYRfUBvSVov4uqcQnJ9VDjvg4Pc",
  "key15": "3msBLhpf1b3Zqhqw31ANwJhLXZia6p3qhgmfESkQo7FJ4f7nWmWT34mPHkkzmramQNTsu3CGVdnzt8VtmMbVj4Bc",
  "key16": "2iDDZZsDrfGdem74tU1aNtAJSuoVW8Ng9yqejRj2xxNJxytg8BzHYXnEYHYqVNB9z7TKLyYaEV8dfD3hbZCgNHkm",
  "key17": "5vGdEhdnF9mbFhfsjhpqQJHq2MEHeiQEqKh5UmdUAVdm5D8mjL9ngJFJ6SnfwHM9iYX6qr3bf4WEEJsSbexM2t3o",
  "key18": "5btCJM1cBcYS3w88biZg98Va2x2pA49aDmxgY7wtWhQNwXtLUSdfVcsSWZALTdRe3Eah9ExBq9DxgDCKgJKWtThc",
  "key19": "5RLohVAtkQUYeazYWZcJVWWs5ogF1uHnytpgKdtT7L9Jvcj3PR9xa32DedXEcq2Lix7B4BfPXjwD9osiwcxvNorT",
  "key20": "3vngmJbS2sLWQY8fmkhFwV3LL6PuQiowXNvSuBKtK5nVAeSRmvQFb2rLjPTky29ctP9tBGcDzwrAqocmQ9ngwjGk",
  "key21": "CwEXNerctT1BuoNzhG3jFoXYT8kQGumkzzthmAom2Hkb9ZhMMcTBteNYXb8t4cNutTZnnAdFEfgz2gBCqTkqCyf",
  "key22": "3cfKNSwMwQP97cFBffzB1iKjBUgmx55LpvzhX18XMDdgLWYgp7o1Fwj898nPQA8GNyZxguzWShbxMoFNBwbpbcD6",
  "key23": "2jd1oB1s77MyquWkKZu3DEFucpVreYEnxnf5qYbLRbP7k7jYbxvrpk6i4tL3C5J5Dk6JHEnxhiG8CLre8f7TKxUE",
  "key24": "2e3Qsx5ZGJjZcLhgRQbLJCRkx1ZGVhpuN9MWSmn1aVMUuCUnu1Vk6aTqHywgwav7nU3v5TeaHp8mtbN4qednKJD7",
  "key25": "hzFxYcQ9QcjXMm6hnteo4Fzuy6PPX19YwjLnYEPG5baPY8yrHES2SYfGQGpCnucoh1kuxCNoMXsXnv5tnKWdZHR",
  "key26": "6dTcuJXupxP2bhaEmbddof2J9YqvD6jw1UPt3jMT52NAj8Enx4qb8QGmzxv17YbooAcu57i5PwVoSBc1VJTZLLQ",
  "key27": "4s6z79ewJrMfnnjsrRrcvMwkDnVw4jXomfWoz1gyMHQPWSa2BeMYLSBhVMeTfDirbtxogBxeWVAaUShGe8rpPF8g",
  "key28": "fkechNSHmDTCbT2QTTpt1o83J5RqKH6832HZ8MYJUmgr4N98y61bMi16JH9t3yMfQ81R9jdEoNLZee6CrkY9CbP",
  "key29": "4prPiXYJPdNsVEwkhZXaPJdk6HUSqjpkeEzs8wMikbGQg11JVp2cz9F5oTFmftrD5DwC31iSVm4LMtJAB4BhEvwR",
  "key30": "3eM8urdXwkXnHvBdH1tra79rzkHkrBQ2Q2o8n7NLVQuZusRHX9UhQrPuWs4k1HmRGhPhCtktFpUKmVhX54vHSgYL",
  "key31": "3Ua1CXmfy6RE7Angwj6b29pY7SPSFNGGvBKrKH83a4LbRroc9NdB6VqmNdrnxkwQDp383UG37pE7mLHL2BdXzjj5",
  "key32": "46qS1bJdPH18p2EtdNiRwfC8Bv6qG2XnTGnZXBR3EbRy5ZJiuN6mCdkN9sammFEvqHPN7oHqVhK67pL7DJqeywF5",
  "key33": "dehYL7wYVt1jg1AGrRT7RciGi3VSARCYU3GCEaUgHedYfneGuohdzhMtMomPLXk45Kegh4JtYpXt3XY4dLJFTsG",
  "key34": "Ych1bFmV9djAtdCXc13ZpcvEWqHd9QFx7FoHxFDC9KMqzJMQbFPYcBKKbbLpsK8doBMPt8BSJmvNFLbyqnCcXM9",
  "key35": "5jDqJxR3JP16h8UK4eT1V3SiqvpVbFFuQns6jT2y3U34x3em5kzruehy5huReoP1M8jMBbgMjekQnybU8xmjQg7x",
  "key36": "rzGYVnd4efc2f5t9DF1wJXy4a5wYc8Un52RuRQdx2hfmeHRdDBTCP1pfPguF1co13eP5nusnNKUzPo8Chp9PUCF",
  "key37": "dwXR8rkKyBczG5NbdEjWnRRrfNvFhN3HKBZWbKjNrsE3EUSiyMf4ob4nwL3HmDSYfaCimyz32LSvh7DHxxYSNqN",
  "key38": "464KWJCY2Vc99o1ipeYTZbqPoVzpBQU5QqgtSbpuX6PsXKrwp42E3bj2p9QkmNup5tM2JNYLxkpwsHewy83EWA5o",
  "key39": "2F2ojHs4aAWVuibCRuwKURqDAK3U2mXjra7hgMzYesJViVTd93Pqi99RUMVV5M33QfKYvKCa5j7kw5CW7E5MmqeF"
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
