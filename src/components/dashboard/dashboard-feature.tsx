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
    "5XPnvuHZpHmje9PxpLcVo75jQW3nx4jF34W9mKbtoPNVejWfdVnEvRxNtHCEVipJLXHhiTZaimJ5N1k76TN88WxE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nJ5mjVzdMns99t4AMD6QcVE5gEHk8AA49DEpxLoxjLdFwB4Ua4abhEWJrdmKUTC7KVMFYj8SmBoyrpnTXNnLYdZ",
  "key1": "24Bvbj7GDBb9peiTcGuYNzu5NSXn8yzWe4q72A2fxssDEmdmjgf3XdtKc579L5RVzXL66b8EVwMNdyJUQ836ewXz",
  "key2": "5oEi9jq44Ze2UqZ1TgwYxJdHcbBCht4orkBiU4sAG6Y11hxr1sABo1iFKgM7vJb7v5q8ypJjsxBCLMxTiaygG4eZ",
  "key3": "2dtbP5W4nToBt327ZdELWH1jidscjCngBpnhkm5ry6cuALCF9UGWooXxijjbbQaJ8bmiVZoSGMHusDSJLdDW3THU",
  "key4": "42EpV17MjqJ9qt5Fkjx6pT5sarmfrpV1cG2AGtvW5W79cgcmvWPscqr1i5hpaZRMFT2QxC9sjv3t91xtKgQhoUkH",
  "key5": "3CZzSuzjV7WFsc9dRqsWrEytzJQ5fTRSBiGQPoRbVkdhAYhzhEoVmUesutxecb8BmzWMe6FfakB6mgWT3wWYzVq1",
  "key6": "48AGsCANbQGUMYsFPcUEcRtJdBuTjmRiynu2jgqH4e23z2CsLDPmWN6ZAHoyC1NzA86wwFWSDHncdnf1ocr8Wjq7",
  "key7": "2mwdfN51mZCyrSfwyYutkaiXe2kJG5B3M5YPL9NstYjYgS9Aoz7F1p362GaJwRZ2bcrL49qYk3LokgCpP4geCoqD",
  "key8": "59TTRbjtKa9tUVNv41DYBF8mUadWL3S2ckapjzjA45145agbbNdhPQuQKqn9eyNAj5vgRaMPvUn7oQwX1q4zAeL9",
  "key9": "4tShPYjjuk6nMVdnTtw5PLSsfgEUqSX23E6zSAyuKab5Qop2huEX8cL862scAskGJ89VbVCwdsh4a4KzWL8LdSa3",
  "key10": "2G3YUbkZeXPpVAoakov3VaUzE2fQ5qjKXFQRjA9dtM8HBaDpSzYJmPfvwQSz4wonNNbVdQhoCpybwEeop8z75raq",
  "key11": "28bwhLJNgnNJ8UzwivL1LPu5xGum9yMHbW8QY3vah32SEWZ2JnYtSnPkXVQN2uoosCLtAaeauBAWCdd2qmVU5KpY",
  "key12": "2gD8Z5f4nkMaDZYSbDXMdNmr2TgxSd4PWmJVAiBQkk6JjWd1pPvRBQ1hq8asYjNiUvCake2uQjG85J36a4oWAuC9",
  "key13": "5TFg8JaPKwWiYr6tFtiuWgAnRfLpfPYyAK2dafqDND9VmBJrjuJcaJGy1HKHYBCjCSo1jSyHoxYFHhWLHrE5Ah3f",
  "key14": "4tyPNv6FFeMocoZ3MdUD1NqDgxdAZugTMt1V2UEXCVWoRwuUUJSUZXGNWXFxBghZ1TzsnahCD7ZSbpLFKSU2seNa",
  "key15": "CMsvYMpC2dDWnZSSdWdDUpy1epRdcgyoTP1QXMV48rZv6A3Q3X9DXXKJgydHtC39GwiduPoC1i5SwjytiEETEGW",
  "key16": "3ffopAxeHj3KT96K4v1vcCQeZAmG4k2DoVkFezk5Gm7Uzzkp24R8j6FMx9L8u4U8u1VY2BpfcHmixPh7Zau9ctWW",
  "key17": "5b3rXXT29pptbTtd2aLuVt82BxK7AEoTKUAThYj4taQSJQDgdEjP7Poc5ELytxfhJUD2w6oP9nt4dMFiu8QQkLdd",
  "key18": "3A1RXF3Xw5rpAej9pKM1rZDSzDhC8Uo46u4ecXUaGpsTQeHYG8QSp57JpKVqr1m3Sz55hTvpcD9zaxndtnNEjuis",
  "key19": "3sLH5rEkALjBRtuz9M8MBjD1fKX4pk1wfzpKTCCQ3eLwiSRVuhHgWoQvmfxGBHNqSoGM8ZhekS7kRLdBdCmxi9pY",
  "key20": "FS1GVa6bo2UKEJ24S93LYVxEipF2yvbmqHzVq2ruTFnN5RUmLSVfQXnNcsawA9JWUWAB6iYErPnrcVzTVednDrn",
  "key21": "4geopteJ7GZNqxcmW39pj2fL9gYM7WG2u8FKhMyUqfkRFVSxxHwUpRgiJg3CEYqdQuj7adQkSBoz1Qe5cwhP3C86",
  "key22": "3DMmCiAasgwvo1KDExNe7gbBypgMzHSWQ69XjWzqazp3VNj2FhPudde8xcwgFPhVomqYmdaZVreAhduVti8XqaW2",
  "key23": "1FAWJvpnNtDcUgPCymk4r2rGn8h1bpJLDQdzejGgT2yypxbmQX82uUtBm5bU9CKibSkrE4ywwqezspNdQ4y9JJg",
  "key24": "57wsUtpbVpychHZLhFSSndK4yf4EG15uZ3PvVJ1uoxYE2SSbTzvxF8YDarGUF6evDg1QftrFkX3eamDSde77iptr",
  "key25": "2EZLR48AvHiZQpn6PLZmYaahdqiAYpU9BGzse56aEaGD7T19WUFF8iwTwupWErrvCPQCH1HyNm99GvdQfkXSwu9C",
  "key26": "66aLj6XZGh8T1YqNpTGJceYp7oN4GBtpVSZY1UrtiYdvnVaykmm5TKKPQLfERhhPagrNGMyq5RXoE1YkGvUPMeEH",
  "key27": "3eoQBtTn9oDh2zH8F3TtFqZxoKWc1e3n5MiuLSszPbgfA3UuvSNRBfWjWwsMNcQUT9ZnRLXLBxuo2VYkyempxhs3",
  "key28": "52nwhuLqfvmQUh8iBTjsYpNWGUNUmWNdtaA5HF3NM2YyvTrJGMhd8nGgzgUmCs7DtGocygd8Ufa8j9eVRsZaEzMZ",
  "key29": "UfuR7eK3eYW3k3bHxYcMEzTbPPdVdKuu7ksXTvAxTsXLQEmQccWFRSideNVPtX2JR4gSz98ixtqXwhL73cs8iVu",
  "key30": "3R1RxqAD9TYvotNsupW8rJ5ZQc7tEUTWq5grSnHyBJYgzzLCBPBLuVWA43S4bSWe8Ahg6QLky4cGNm6xawMAo6Zb",
  "key31": "3RwVb9ukQMWBYtZRDVLXBcNzsAUUnpg9JdHTBhiPiyrNNQz2L46Ro1hRKAK7YcugD4UVNmgWAvSwBTmJwvbbBFnD",
  "key32": "4njUwd1EDDQyVCxXBarhYXthnBT6fMzZwUtVmyVM76EtVByNC6AooZs2WGVmQyR2Y4WWRfT2NpwPXv1uHBcqwBiR",
  "key33": "4TU64JLX6HNYmhbGNnSRtviguiUE3ke3wo4p1hkA9ASixoJ1Bim43df1ACLDiax6AoqhoYbG1u76a7n9umZsTrVa",
  "key34": "3dTY8DsPQNx5jxMNXKgTPGQ6LepQmgcfvzni93E5ZZkNRaPpjGRVn8Zxxf48Szu7zzTEVi9TVgVYiMFGtdSsoXVK",
  "key35": "5ZfFgFpbPeGpEjNLBt1n5egfAe6oxekJAgUrA5MJst5eytgacDrJtg79hFwyh1BDTL6TTAqr4Mw7X65HZA3Zv4W9",
  "key36": "2eeqtQdg9uJnBqXKaYUagNq6hQQ9gq6BiPfYHy1DKooa3qJLuMm74WZcgtibroMfZsyQY1ernaCLWCvRDwB4B9my",
  "key37": "4z81RDv6W6uFf6kzs37Bsf6MANPWADP7WUGCoc24WSFuXc15Q11cXQQPdoCnDxJtatBKj5c7HkRnsE2XT7iWMU78"
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
