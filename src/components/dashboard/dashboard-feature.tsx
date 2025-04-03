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
    "31L6sDw7PokyNiX1FmyBfCBYZGWPB5VmQRsQXsZwNKHuPEwdD8AsVW7bMaxWLsy8vv8r1Y8FJeujFmD95MNXEnX1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57tzRNkgDQGy2RJvc1ExZCZH3BBZwVDwZ4p5sKyiYUKs8B6ukVRcrzdgv1i53JksP1KhUgtbEuEJT1yi6J4w2az1",
  "key1": "4n6xCCVuYJcDa74bzi2Vyd3bWsR2KmBb6wd9yMUs69uJ4rDEwDQk4QUgbauxHHuA6C6ocdyGwqtBimsV8YYEFSYj",
  "key2": "XMfRYNotakVJ9ng36o5CwfQv71LFsHyUoCRo1rebonsGVuwhBt3c8grdQpA1CVhJ8YU3JoRw2cUgKvD9BVWW3qc",
  "key3": "X4ogHuTaHdjLQpLjPDkKysTUYBsRZzSpodbZ4tQ4qZeQZ19MQQDxALS1KGKbK1CCprioiGxmaHuUi68ehUbwYPq",
  "key4": "UfRHZzANnh4GE38LJBrm7yFF9sTBtVsaZ9BjLgQS5WivFmoHP5uJaxVapgu4w8eT2W4WGVFpXeHgMXsVA89JbGf",
  "key5": "4QpJTzibqZ4tj2X6P6EpCfmzeLmyYfSg4kJRbocvwUpbz7yKp4WfUf8rdTApMrETDW56uuNZZANjmZ3tXuGKmSG6",
  "key6": "322xyKJyawrefbkAxkZexindhofXMG4DiqA19NkbCU8TWvrjdEfKh3yoyzZH6qYVKFpmE8Erzwzs2qYKtRT81WDj",
  "key7": "5yKNmLa6QCYCWuiLG7LoFF7gz5VBQop5aYjJ5J6UeE6F6p9x4AfBPDviBuNRqGtx21mQQdZkjgYJnLvz8FqAdwCJ",
  "key8": "5QXEfknNZK2FfK54AqYjjhfbp815jH4QvAb2ynwtcuVjnWHrhWGzeYxZf9jnx1epH5f1mBQdw8EgTgPVtt9u93E4",
  "key9": "wKBtGaYCzkeM6Vk8FNkahCAcYGbyPBtG9qSiPqvxYa7L4oQdxTPZmt5H8D1B6DvAKy4se4BjFyc6Q6QEs6aKnmz",
  "key10": "4msUC16tDdkbXd6QQsdK63TbUME6C8EdYkv9fSSytDEiWUZ7tXedknozR6EGpxKCNn6cTFz9BGYWVLGQtGDnzxGP",
  "key11": "2ki5nrThgaa1KtM5EYenSmy2eWejCugPEfbefQZ3JvoRHeR1ewvgP4TknNygkDun8Rvg361qgZADy4ShirfAmuCp",
  "key12": "5iE8aMErSsmXPN5xiTipPvu1GQCbZTxY6maZgTk38fBVSMumnTGowUEbdT2JhGNwHUabc54B9ghMaSNGYkz1L2oa",
  "key13": "4SeqtThekhjytHBYGdMSLPA7nC33SAyzjyicBKCLStUpai6BTkXHLn2iDJvGPx6GxGyf2Gmh4Coh9yMRwmXF2LQu",
  "key14": "3Uq2LepkrZCwjDFsi7r933QbCAdEDp6SNxEpJcxmRHEYm2z6MgNAp8TypVvjJ9HppiGFw49Afown9w5T8t91zcwj",
  "key15": "3ZszGLiwSErmPwb6bWrEy9zuKbN8Fc5t37LpkLGTsQZb9ZpcwqutPe4e3DeezaK1GNxQrwxVztSamBmjKpkD4XiY",
  "key16": "2V3KyKoxpg9PBE1Du6h6qhjYXGuMroWG2AYVB3iyeTPdJG65T7iPFoVS4w2bJkaxXKQ4Hiuh4cdsnGx9Wxiz541D",
  "key17": "25LYyTKmVoqp2uyA4JpSFmLdTubTUfZbgC66v3jGzepZu9gY5FpjnJCD5eNAEemms2aMBnJv5W2Uko9u6LYQZFwn",
  "key18": "4DF9yXLL5wKYSJikwFhYe3mVa9MAj3usLXfKRPf28NFy7QNtPrVeJBGVnmVQTMfxtJcRJoyTEcf3TxQxVCn9LPeq",
  "key19": "hZPMAwHJbyWc9tZbmxgdTK4S1i1YNxk6tcVZKnkjZzY6fJh7fDTrAdpkj94aWC6JoAd3xH4j7H1PBRnjPdDiVwA",
  "key20": "2iAGFowTJBkGjihEoGDyaJguVt1GpB65nTrqAwB6F8bJDEa7Ytw2GcZNS1GRGKEkECuhgE4ieyWF4qviRisCwudi",
  "key21": "5oLDPYHaMkSqLYXBFf8hu4u8jijdU9tP5FUMfVnMg78RQRmhWQucw5Eoc6wnCYPNQLHwpJSdFUVRPU4rwEmvMgSU",
  "key22": "eT556hxXEscU1wSvayeJnhKAFKNAt6kzJku5w16LuLAgyYSV52J89qqtAdTXTM27jHX4zE8m54hRuHLBhPrbpnB",
  "key23": "5Jatcsn5NZCEW42XFFqVS57th3XafdwgD8FbrTbsYoxGwQsAgpWYJ7sTBHP9ph9FpeZjVhKKkNTHUvDRg3e3K7vY",
  "key24": "21imhzDQxY1hZmVDBBMk3VHTXVcAiUQGng7DfuRYttbUcapAooUScrsRyi8adtLUCU7zPn5m2VCnDJ473rvQ6PNL",
  "key25": "BUMfc8S3Bgmwo7ZGS6cL5ckKa7sW9mKB3HoWZ8NRQSNYimjtbFzcg1Hh6NuvBFQ3gti4PPdSDhuXPuQr775yUfi",
  "key26": "2mhJcwTDRSb87fj7giJ4u85jAjoMbNuJ1VbADF3Q3hfRjjtybFzfhBVHCEkwDpip1yi4D5UQQa961fdsf1y5DSMs",
  "key27": "3EZDoH7YcfjjtCuEXqvoRv3WRq11bjWtddFJq6zLYb9266sx6TtRZPEtroHB1E2DYycvJmo1FBPyHB4wQPWujurW",
  "key28": "2SvSpKP23dtczH9cFMfhZDEZyA9sGqkXNRoCUahNNhBCeeQTv43rcykfgqUSG3YAevkJE3WTW567am7RNrM2i6zi",
  "key29": "3E4K9TmagbMUdduvC7MNktirR4jAsgyjLwcjw42MAF463yXLGvtxxFvhDoCo2hnVZjUAgMYUNLRDhnqwXuuUnzGo",
  "key30": "2Zy8zEUe8GNAs7EFNFrsawyEaBESttifPsUd7Vvj2RbLZZYw35897yDch86r96qKp8Jdvzx9sbb5T46hiFz7WPoB",
  "key31": "5bmywW85z8QB7jAGYrHh3KGTQVy3yjRKgbw6R8ub27x2Jgy6VZfCNTqcwdXxPJk918weGigAHhFZEUtPwp8rLA2A",
  "key32": "2gMc7oq4QDoWqLNxTf1i4iwkNE7Ae1DdnY5vNXhMPNtaNQ8qWp7SpVrTS7VKNdcfNTkxoeSDd2yES7N9M5WZ1ikX",
  "key33": "4qPomBPWft82tJQPQeKUht8waCt18LPGQy3VZY5XMxPJM975Wib9MFTUTiw8M25CpdXcgnjQYD68pCbwxUMivVZU",
  "key34": "JLsuFdneo4SCYZU1GzDUT9TEEFmnEmUF2qT7p5qC1Y8BG3NEumPb7aQLm6zC8JjDHDYm2cP1rZ6KKGCWF7hZgbX",
  "key35": "GvLUEAsj66Q4bc3JQ9NZmdEvAqUoZqjLoVXbRyzsKhjvZxfCPTuUiqx13DeetigA9Aqgj6knVappsfSW974ysR4"
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
