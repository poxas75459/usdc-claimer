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
    "415nb6aETETxYBpBuWYt5UmE5HkXaXUdQLwm6TwUXZn5r1VGNKU4BqbZse887iY5Aec5zDRLhKMx4f3WXFwKUVHu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CUfnDdm7hPhTsD8k25WLesNEPJC9Co67NjpB75zT9dXR78tRGKy5yi8wEcrXmYTdg6Q74ApqudEaV1YDust2YLo",
  "key1": "567tNR4itrY2ZD7zPTdVntA6Vesr9KAyZPMvYiNTA2Aa3r2bC7zWRXbDTKaJsxSW8onL5YXDwc3Nm41Np7TnU4wb",
  "key2": "23tYAbm9AcowBa4WHZWUHUAUTm9L8mRk7Typ37HHiunkCW9WUyFeghSkJe6hE8XE3YDRJPVKm2w4qmSkKdru1Xkh",
  "key3": "5dtVYEHyAWGLaPLfbpEPtyeRwgyL3QBQP33Lp5LWiAa683goQ24psf5U2DWeDxMt56ffXkgorpN93mUAkhV4FnkH",
  "key4": "5LRE1Czj6iYSvb7Xq9pA6hA5wT7eksMD4PuhTRjaVYXZ698CWKLenBHYyZEse97sE8VATjogBvWoH37drFLUD27k",
  "key5": "2b8pQLBukpyngyQQi17GHSAuRSq2D1fFyrqp5Urm3M5WyzJxK4bAZkHvzHuv7LW71C16tXJoeNM3CKXoQn13ZR5u",
  "key6": "44jq3QsH65ys7yuDez7Js9K7WmKFXno7VMehBjyD1FQXN16auGoijyQGFbRkEbWJdk5FjANRt8bmMUHnqsfAyi5a",
  "key7": "663jAnp3p6orso6PyEYETFci66WHmQdp6YpSi1iqvzSm7bB4YsFd8X22tp9BbM3zgLpY3BT3xhR5vLwnpehQgSJn",
  "key8": "2FUCSQ1Fuoi5DorAPXdqhs7APJpdRjwUK7NwDqqnaHwp3S4saoEyfU272wtv2qumM1RWnkanbkF48qszBbxLdG7E",
  "key9": "4MqBRrExmf8tCFuzWMq3pKoMi9DsD8SYPUgpPNBWjCqgU2tzqUCJSiggwQtafXfrQ8MpJQgv44xJUjiQnaZMw9ev",
  "key10": "2hBHkWccVgL5Dkbp7pVpiiFeXA1Be2rUbuMaGef5hB7ZQvGCLD5JntbwjwT4AnDHBkCqDj4E5SvwHDbAd6yULsZj",
  "key11": "4NihkTJbcUqLutx43HgmFziBHReBNjgFUxp2dYZKtjiPYWakhRdVFi15NignF6UGKbMsiLsKAN3jeAbcxuB1qD7q",
  "key12": "4zzucoM8JgCkM41PoHT3RxJuLv5H4CN1VNZhyBfUB2rEXoucuzjL5xfXm1Hw8GQCHBr7GDGXd7uhFj6CwYbB7mEz",
  "key13": "52ouaYyDdL2kHTZoG4zJHiAX5hZmWobdUoSEbCfP8B665DfseptuQrLthD5frnMF1KnM3tt5jv2NP1o8SrE5EFKs",
  "key14": "3SKWR5jnWGKC21nzgQHFysQdJw1Ld22MPUHHqREjt2jv928evuFDQKmUQFj6EFfAfNMjg3vdLQxUUkutNGPatcfz",
  "key15": "51joTt4K5ENraVJLcDdGF8k6BxFPb38rkVvTrtv6tSRcXTYkJ71bwJq8V1krusAWdGF3eeDh4snTvRugz9dozXnV",
  "key16": "3cJbpjhmJ93734eK3VqHTK5LtSkZJi5UgwVkFNPeaZ8Xid5Q5yCvnFuNz3kqMkCDsbDCgc94osMvdMEfBZY5rpBg",
  "key17": "3nuJkWxJXirsz38vwzLhs24DWE71vpSgqe3JLPAvns5ZgajhKgBfAZHj28bVXKaNga51eqRWLQALcuTh3SqSjydM",
  "key18": "23oLyGuPeiVAfUz3AWxpCGpESHARRNF6R2H1grp3Baia8BqBuuRTRkmCztFoVS9ui1YTUtovnTKMzXyZdCiLdm5B",
  "key19": "3JM5DwNJg2SBx3nz8BQE6FMJFYWxqrBSxUFYCy59RSQ7WpqeZLBfzeuvuhCJZ6zvF6XYyee6azVEeMoB9f3yTiU8",
  "key20": "51MZdZki9nGGqR5XSLa32cMQRDMiQ54R6HnLoGmGuxofdXosaoDRk9oWmZQx8gAkJxyAGBj1y1VPjwYyribPVjMw",
  "key21": "GBqSMJ6hC7pZ6NbjHQ7tx8xVjWvwQnnV18YUmEpR7SumejcxyM9xtoayFSEtbJEEc3VgpctiCRaqguGtskADaJg",
  "key22": "62ZpNRi7uCKG4vxJWcjUUpv7jCJeNXMixzbZ6YkArh3xb1VNdbZJYYqXqeEKzL185kasCGosskUFavMjbqgZqGvK",
  "key23": "3gUA59LWKxPDqdN4ZxdWwjoJ9MLdoxW9ANb4BxFdqwZeAqDg1wuESuE7YoQsmQGKZEL2xF8fPaPjXiDdk6JnpEcA",
  "key24": "2insK75ByxMAQ9cMoqNGZJ2vmQVA5QZTfXtBLfYqiTAQono5kZwrUZRNAvzptJaHXj9sv1XAk7SXecTe6Ev5m9Uk",
  "key25": "2xPX5xMxgdEdbRekbV1k7sNsic9VkeFCQf5nTvCp19dMgaL8GphWViTRQLHA9hqduPAxfHNPg6UNMwZBzaUndcub",
  "key26": "4qrJKBm5tuV1aLBWvpQNSaj3Rwsaco3wPzr6dDQx116AU3ymD8LTTx49kTHtFzxSJnkTx4NyKLw9WEXytAHjjDrP",
  "key27": "2KZ2rAWgTxruY9HLuxtkndWY58MPwRfwuteGxYJQeezZxFfKq8efKUSeaK8dP9BcKfxFq4cvAa3j9FW6wZEd8WWr",
  "key28": "2uykmXE8EPdTdLtJX6UwJxhtHuaacWTA4AQK5rL7n4E2kponyk2E14aJdfcLc5cUGY6MCtYc2nyuHQUptozLirEB",
  "key29": "25jo4wMQ8HnTq7R3cQ66SpNa7RPSDr764wB5Hq6WYq1u5pgyXsc1wkpSMsNaCfvprqn3wMcvrV7bePSZwi1SGn4P",
  "key30": "c7pis7jsqPijdJtCNDcJCAUYCKKb4qtUK5BCpEJqMMWonE2YiG8Tv2V2MGmzwQgFitWXur5LkstPC38hpQPdEdM",
  "key31": "4Z6XdjDL2etzSYzyDJdiKrGn5tgoVuxB9SMhQF1Dq7VHZY4HLmSXj67tJYF53Qm5mnrEwvxQotWPgwVqf5m6FmxM"
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
