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
    "5crgeSQi8vJCWnZGZCM2LNSuBjSgwP7kijqXRWkSpNZYVkrpoQZHQ6PDSmRYzLLFRrbZdLsvtD6WLTD86VJUxpTY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rjwjBcchM6N9PW5cFBpzayPwxsiCehQ3TT2TU98x43M9NgPaH3CaVmFRiXFUDhsfToxjaaNvbfdTUoofoAziBWk",
  "key1": "2noy5Er8S63HY4zNDz3Lv4Sb4n6UdBq1JFrxBKn64Wsr9VkXmv79FSYSPMGNpu4wLPBbht5RYDUTpCsczk7qURAN",
  "key2": "j7wUUed3otpw3ENnnDBpisHPMhL1BeXrw8EBhhPX7CRsjaPvhy6pHPixsNhsf4nb6gcPqx8T2dszE3PF83ABEA7",
  "key3": "5orKezY6s6BDmJ6crZpiA22o9daov8CiEyzmFPP2B5q7aafC9cuiVYT8wCaLyJtRUqgn2TKJSBMP9ZihzrAuN2tG",
  "key4": "3uRxm7TBP8yEJrGTrDPoMuv19yc1gkkUAULw7ayafAcbymt9RSt4Qi1tFhjj6NGptMd6WEtRAeSrypj4xhuNdxdg",
  "key5": "22ioK1hVyiRta5D6jPt96Daav1tnqJwLVTyvHvDLnwjRxaS1QTExpiBV8AxQVuLFont3rYTU9ceKyEEAikF3risE",
  "key6": "28C54eVUbyddPeA4jDqNfS9YE31PB67GuJJs9ZD7M2JEyeASc8XJEvZv9pBehUPiz5P7r9A4GG7Gahdr8PXame56",
  "key7": "2KEWDtAE7vFKM9cZPrxii1bS9mKU8r6ZN12eC91JU9Y6oMoevQ8WDwxMNn4EZTbRAmCaoxtDv5ms53Aj4XN7Tbsc",
  "key8": "2qYYgZHt8wLivTQBtbjvXY9MJz7GXyUJiQrbAWMGi2UU3CdAjBe58KHSpwZHt9fvKksBMrGYtMWQEzBDhpBur2V4",
  "key9": "23TV7tZ7jC81jCERso3hpUsHeAVM7ao6DCSZKqzMjstpnaCsDqWDzFPkiPTCyGPXvfccYHFoNPbxQgsYZTABK6jd",
  "key10": "2qoyDCvBstmvuN62P3WQx558iaJYm54kNVs3H5Dbyqg8BDfQYh2GDzhadU5KtbV96yYM3fxe8yaNuzU7DVL18EeH",
  "key11": "3m6kziFhBbNX6TD51C7s1PqKqUP8iJPrzDA8u5swJKhEa43WUtBNYpg9eAvXNRkxFBznNbjj4BK6Hb12EsVBU37R",
  "key12": "2Y647K99GiZ9x86ZR1mkHGDX2ZpvxtnFtBpYELV5hBX76JnehxsB27YaJWjCmVCLatEecuZrsFVQu6stEDRhhs2H",
  "key13": "2TXgwnnGpQeujoXhgHyibhkHVyK9wu4G6Zu996i63AoWLwWAkEwwuKDZY1kVEQFdSPjFifvnf1Mmv1Aw6QYYkfMU",
  "key14": "3Pv9zuSJwo9UqYu8zjJydtnbFh5BRbmTv9A193eiB4FWF5seZYjDE389rRtw2eTn1AnvpfJJS2UrwkqyLBxuVW61",
  "key15": "4NWbsY63oLiSch1xgMJFGZBNXCjheD1p1YwZmf6mmaFzPY5HYCQv7N5SMPrKjEFwtucJ7CF3pPBr4bVXKWzJLiDT",
  "key16": "3pq4VtvM32Q9JPVErXqVN8WR7nefi5yLDmbYKkWghdTatexEZsKrPN6925tKn6AjprPxa8PB839QEm4Scwdp7b3n",
  "key17": "2XcQH2io7mbFwGpi4qsmdB5aXnM6XzjLv5T1mtGK6La11ewUSZPw494zypkUe6beU2gmKV79KRZsXbtAd7NU1MY8",
  "key18": "4LqiQrA3UkNGe4wzrZU3HCwsSSu6P8R9TarmBH66DAkJLnFuTBYJFpRBsrxm3nHzoiiPHPKW2ABecoVoX9yqF7rZ",
  "key19": "2nXyqERJA5SRH1P5b8HiRDxy3NJmpzP9YJHcMUqw6L45CbZyyRk2J2Nu3uj5mqf96A7wjvAs4fC2ypem12cL1csu",
  "key20": "j19piCpTk1EHGR8ugBSj78TjpNs54YSRDv6yyNTsb61yifqLTxuoJvWcs2B9gVH1e8VJvSpgrvakGPFeDGJhYbt",
  "key21": "2PmLtvWjP9LPQLt1oJJffGfh7fYyZLxeTrpVXrXN8tS4XtJ9CgJ2M7mkvPoaSjeHyydb2s6XodZ4dd17sKNymuCL",
  "key22": "3QyGyLyy3682p9qavYCGKhE9RBH9bzDChVRSYoiSZTfGRoD3CqGc5qUvdHesAKT2jm2T53sGjoyLk8rCAamPUqkk",
  "key23": "NVH8nno46tadZ9Wb9iCLvrY3G2kuFTiKN4VVhAemPDmAN7c3d1gLzUDybkkEasrA99ooaGnAVgv41v6xBT2shu4",
  "key24": "52pReawvTmJtSTYSxbSzreCTxexoqLJF2aqZgNmGSnhjPzg33DyQCeyhakaX2Zg4TNt67CQ5GtTjMChySnWB8MDi"
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
