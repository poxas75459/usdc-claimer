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
    "ZRJ9E5Ee1AQJGHLgoX2qrWySXjoK79aFKKmtkBg6eULd6FfCFXKbHmpspeJyX8EWRj8ioK9FcK7upTadwZhTYHD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LY4tRredySPhXWWpaZFfdtJqF1gkZZUuzCRXvPE1xK6rUZWxutU8tijsycVGtkTKCjVhAMrKbw6EKcoXEXF53Qu",
  "key1": "jSJ5x6cWGQizdcEdy5cFmFf9CSL5wMaS1iBMa176J43Kh2EvybKZqy4DhoZ5hPQP9t4yMKCBPqAu6kQoGUBpNeB",
  "key2": "4ysZMW1qxqLK8ZpEY6FdpPUs4rMerR1NaHjmUAADGjhtSHBU6VezJtwGMEqM1vvaxiaJKvfGcEJ9TRNgvae3eKvu",
  "key3": "3pzEs6yKjpSyM2RiuQPxoYd89gmqkvZ9Yc2ZF5ByPhqti8SBJRyyRaFbnAxSQ5DWtDc71WnSyUiwGSySt6CPJRqj",
  "key4": "29H9x3ifhc7ozvqMXGz3wcwUuVvgxqjFBBaeQkkadVDvzjcpzhqogupTV7tZwS3ZVSGKgWRdgpjirBmxuUjrGuXY",
  "key5": "2G6MBvpAjpcHG5JuGpJSN2MrXHCL4RkcwsaHZLp3fRTR1SzaxUtikmh1455WoSKceuZYvwp3cQM9yM2NDpkt1W3v",
  "key6": "5Aff4BU8i1XU81wP6GGhLLcvWL9z2tCx4aKjfZbo9hzZCUCJsPKYTR6LH3qt2QDc5zReHHhPzfWGGazCH8QJW69c",
  "key7": "3yVdDmP6MS8zQYhEnziUozhja1haeUKfUTXpaPQoDW5eyt8fcZGxkBmB1aNtyMMptYWvLqmrroM51Pq1K7pxRJoZ",
  "key8": "5pcctvUWFATF4CrXGxfTMBWkLcVwgaYzMEzUt6osLH6Gaxk4dW2Ko9nALrwFKNZuqL1BJCQzpqZnwfDztnkKzkka",
  "key9": "4TMaHBUvSzR1cweC6HeiKBs96vsTwLTozRWXQgt7F3o2sfn7jiFXKYGsbeEaLLBtNzz84TiW12BQ4EyqjhTiBRvn",
  "key10": "2HvVKAdD4aNZpxfwf7ubSYF4ES62fXbDZGG7Lj6JofDazvDscM9JRhYv5w5nccVFdy27rP8ga6HqEuZMvdQRJAR1",
  "key11": "5ziVL5ZBquJ5ddKBStxXExXngTT9z16uKtQxY5uJchSVTxkbVSZuMwFm3QkqDBmHoEHEYqMV31CvAbnz42VPMnDd",
  "key12": "5aZTAtsFWBPRW8NFKafbBZrpfw3QwrGLJxLsZm4mEmSgmxbEGczPBbT98m8i4jo9uoDKtdGm6KyJfyV4r9hK6kuD",
  "key13": "37ASc4QSiCWA7PDKLXR4N1aoqfF6SDAvfrHkyLWJ5MYzudAh3MmeSxn3dDiZDsjuSheCEYPB42cQx7kSdeuAxyJx",
  "key14": "2982FAkDPySFVRtcwMmF5QvCsZ9NfTBkXm5wbWwrVSEQXS1SfJeaM8e89f837DnAmaJSqiMUjpHaCwALN4ZB6sC1",
  "key15": "5ufbE1Ktm7oP4QcoEFZeb3YXxgciJTE1m4eP2T55bRY3jeJUSgnTedrktEbm9n51y2MZD3QusStpgKtJjVdzZnSP",
  "key16": "43MTHXWz64b2ZhtS1G9DfTaDj8GS3Gy9qBfEkkYbJTvKVBR6WzaWQi8qNjT9oryeUs8a8J7t84fojAaaoJanBXyr",
  "key17": "2s61MqvJuAfaRWpHAS9c9f7ZT332RcrQLX4nciHS7oWX6rDBYtzoibYRoc5541ghXTsyx2SADFaXoUDzvCev4BCF",
  "key18": "3UmwGAAzbGqtnvJnXwGm3e6HawaJ9bLTQ3DecBq7dQNtUgbJoVnJ3sbSzGW6QYaKE7VEaoHVe1QQ6Ef7DE888uvF",
  "key19": "2JCmnioon3BH64LWe9PLknyW55T1CYrrr4ikX5c4y4ExmRQX7274YZdWpuy4jDaGg7aKeZ3JQxxepqcXPhg53QsP",
  "key20": "3m4gMUTBLRPDFrDKq3e7hs6okgC8HFWzzgqECKBTF3AB6gXK7ffhCJtxhx96cZhbsDzPgRaqQEeBPYWY8qihJst1",
  "key21": "27uJd2Ft6R87QRWJSQCCLQvgRv3tixwRZjZTkzYL4yxYjfjLnjwtZbCB7pnCqVue4Zy8VTCT1JkZW3KFCnyeuxzq",
  "key22": "5uRz699uapujyfnnRqcu134JUamNn5NR6ogpsrcDLoMgjEqDpq32BySNeTiRNZSzoe4DUk8YpCLz84u5pNdXS3EY",
  "key23": "2EWqXuA4qSSAoR683P29NMDXMNST2xqr5UNF1JJe67qbMYECn9WLrxVSSvkQD6ySgTJKPhpPJdEXyfWJzGn3rk6J",
  "key24": "62T77ukCYkghiYQUEpp2bAf9Q1wh5mCTLTXJA876p9v3L69fX8WAR9vpevyN1efzTm4YFtfBAFAQNDgE9DcYACFm"
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
