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
    "5usU282R7bGnEj4cXLz7o9oQVrUpd7172ZEATt2HcsPJw64iSPgPykXJimZsJSgWV18nCQHyyd94XV3skWfFCRFE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SU8FHcU6hvr2thgiWzfG37dAbFivJdhSGKSrZLgdNWqVTnqCjpD5P2VVX9rYPNKf6WfzwajKmxdtzQACW16rWXf",
  "key1": "FfdeKnghAFtACmvL5y1oSHuc3QtKbHfKZGNj4HS72GAgy11sSN7zqWPLNwPceU8tUnz7eHwcrNaeCSP1geMMhHm",
  "key2": "3sQFYctgHjAAuEsvpaUTvME3NYLMRqg1EFHLkVvAQe1kJ355xfkdqz73e9xS9Qg7ngmPLDh2VEGX5riGoXZJN6tA",
  "key3": "5iyxj7fCiKimHh4T5eHmk83NicTktm9k5gfphCF9G9KJ6A3p5JHdor4qpL2MpXzzoewAHKw8BBKjgEjMZvbUM7kC",
  "key4": "4fvaDPgigH1RjruZAbujb5mNNs6jWBUsWqUZ3MzKziZrQL7tUS3wzVdzJ74qN8xdYri1sqPD3YivmDKtJyd5Vjtg",
  "key5": "2kDhLexV3JqHSTLDTGGGgdypDPTiLKBkysGjZ5zK6r4QJ653LVz6voJPWnYCzMnEoYeCn4RfvYoMDdCW6y2bcE23",
  "key6": "4tS229hTfrx1YDUaFRDUbayThHsXcy8nJqG6gmhYJdH21tJvDXuVtxJj92yp1i1qFbPLanuSr8VpW9tknmW6MvdG",
  "key7": "5EaGLSKs3csqJqEcqPR7B1Uy4UJrCDxieJS49ZLaAkDXETdGtaa5fTMaZKaoUaeg8vap8STSJ4cg4r71zAR5LVD",
  "key8": "41DdevuodK8nmz5Fm68YH1BmZciShsqYrKknM9a34hpfJ9pxAiZNGotGY8BcciTXG63ahuyw5kZMSbZHc9cDCoiE",
  "key9": "mZ4LM4ewTqUSwzzxRqcMgDbjKRVpfi8sLkfj2VpH5GX1KiPsQ5aqJ74srhMaB4NsdUB8itwNWuuDASbYo4ctqey",
  "key10": "3kLWQtcuCL8Jt24tRUi5nyyWdCFeXFweAmiXYfq4UjKNmYVuxUUt3LGasnZj2WmTp13P3sEdRSaKgDLWze9odZUh",
  "key11": "2pBWubDWmDqFPefzqf53CKcEjdFtNXiaDoW6o4TAVLPeFKihRystG56ViojJprvg8JpFKNzyLRsTfZzEJEcJf9pE",
  "key12": "3wfNNBMwxdMJXFew5q1qcweJLC2B4ZjLrg8yfGBfsTsnEGpfcdT7jbBQKqFSTxjGadacZps79WUrspY3AzCkKood",
  "key13": "46zDANSKp8ydG9gVJic2R3iXpEyMSZRBQET1iC8XTY7oi17TGg1hZ5WVuZLF5Nv5Rtk5UshnU2bffFuwSXVcdR4C",
  "key14": "U54xdgVAAesH5aYq4eCRE9m976sKythhkgfoB73tdnwidqzrD9VdUX8dw7iaX1pV6g5ysrsNLhENygizuosenqg",
  "key15": "M2wuL66ZF9Veeo8LQUW7NkUCkSi3iAWjoxkiAc9HcYYPfURAPgzsLRBg3R492J1y8u9gKzkACcQFwFKMhQ2C1eY",
  "key16": "493pU11r4wFqXwp6FsE1ffZ7rrw8pUaVjUEQFdRa24pHx2aBmAGAuYcZmC9VLS4vnNLSr9c9GmLotwhZiiugroK3",
  "key17": "353L3S27Ty8QWxhZWSrnuqT99WVNiJ585X9FPVsNHbpcPUrsvecWSzwmsu1Gaa1XSsVVmWN7u8UsHu4uTKx6dkKC",
  "key18": "w8MTbxiymbDYPbsVqd9UorpsfiDGnG9zSbcPA5TUuES2y2A7ubKdNo5xZuspWax3SmNq8Naz3ySixj6ZyaRTJAW",
  "key19": "5NHA33o5m5mdLBKNRx7a7HrkAt4TrVtFTBospUutbbcNBMQiKj2u63YfS3h63o3wCuaGH2FRKJsbED5eYT19YKWd",
  "key20": "vh3PRZVnyC642xbrWhwWSgLqrLwG6qaP3TNaxWSP9rFMpYiW6hcBYoCyQePrfDvwnvqUZW8xoMkEn6uihijeedp",
  "key21": "HA6b76ArsDsZNtwbPq4LKv6UVpe84ds8WnW1jDnoD8qsCTS9mxsD4RVKLt7YBo15xTvNcKYsbrV7ecCaV6kU6SZ",
  "key22": "3ERRevtLapcM3DNCVH4jQzbspDPkvSTNs17YjSEvwUrkJmJVGLzAFxuEbhfrbCTpBao2GXEvnFhsShbgSTjJam1v",
  "key23": "5UrAEcBSwLj9sJjM5CybE8D6JTTvcFjYiVj5REA1LC678irsUx9aiXQYEBWgSgTyyZ1yYqvRvXeSJjyuTaWXKeLX",
  "key24": "2NmETh358MDp3a477jQM6Bjf7G1wZjKSjcwUbxEcJUcETuCspAEC8mDM8pGxHbPSYz4kynk92c98UtGdN1Z2vFy4",
  "key25": "2ZPTxgfpXwSGsrKgPh1y3gBBVdaPRTqxdbwohqwLjXVxt5dopC4rYuTg9UEVNkSWeoLyF2beNQdEYeReHdD5937F",
  "key26": "3QbeGwvQSc7RqAepecu3KQvv4T1QAFJmqyf6hca1PVpJZv5YDKM8WeGMWPxa78Jrgq27ZPCq4XWVG2FkJj5sa2Ny",
  "key27": "2GUtaRxw5ZKLcpkyDN2QFG92jHimnqSP4aSsKutb3D6bEuZcAW2msvqXNHUuH2SnCQYQ16J5WMohuo66BvfstChS",
  "key28": "4SMc4wReo4yq81oUDL6jjnV6bdPQTdrJ4Y69qUGypbBwV98bcsUkojU1iWuERxYT7vbKyUWrc89LdUnzrSc3oUKt",
  "key29": "5SsVZMT28yD2mneofpioxrb1bEvbYZgfxaKZakqsW2aYFKWSjwmn9xEAQuGE2kfPTmJPa7aXseN83TxAW4GeHq6u",
  "key30": "3pAi7figL9BD12aFsezNUht1dM5voPSVyNkd4bxNsmFKadU3Achj21o9VSqrrR75ntDjMfp3qZvdRTm4P1reviep",
  "key31": "5FFRcmDoPgdjtdiAmXd2RUkdeSFYgkgCNftvG9h91NDpiVdPm9rwYmx1ZrUUq8kj7oACQT5x3AhnziuQySX426JT",
  "key32": "G5RKK328hXHfKndQaon6u9j5m9TFGfWNUWcpyypvQa76euTXkqWvqCpbb5BMhHgegvkEnhxqBWDw6wRP2w2bN4K",
  "key33": "4jn2nUjaKfXi3UPu31fC7BtLKmSu1c7pkuJYoZSFTrC34WegSzuL7GiJPtbT2WXwVWGxDsBkh4ytZJH3x77kf3rZ",
  "key34": "2gn9g2z24L5PLUDHqmUg3kwgKd3AbwyaitPsufLZ8ygHQ4UopQGiz4qRB4w8RaLKZuDydgfwvmhNb1sgDcNDABGH",
  "key35": "5KVLTgcH3AogcniZeXm4AbhotofTAVuUPwFzi1xDL743KUdxnoygJFkRGsNGjRarizYYndqJARnW3MJsMhPmUEx2",
  "key36": "yRB6PxQhN62Z7orGNe9E9E9j2Eqwr1boSVDfidrdmDDUkgWSUsERdjH5pfDE7xeXFq6p47PPebH8iHPkDkR4yxE",
  "key37": "NBgckF6sCgGGjLppM86jSiAKMDpWkcJRCAGC4Gu4aKic4BjgMLYGvFtuAygTfmzYhJ1MoukqRURQwQzRxWreH4E",
  "key38": "AKYfzeGbmo9mJAhjvshuxMiHy7s21hQ6DzbesEo14AGYk1DgEWDGfdzskCk1obMFAenQ5m8JjTNrNLXUcpEri1z",
  "key39": "HHVo491sz1zBmN9LDsXfnnzZoag7REKVqcopJoqYV22VFY3GXc6gunZMQyjU4CLi59kPncmDZEMsHGGNWCMA9V7",
  "key40": "2HLk41V5GW8QqCSp6XUsyNUsTDfkVZsG6J4d8cxAkJ65GFxu8TqLpF5EXeYvAkYZDZB7kFVXnBiwN7HAwgK5kQPm",
  "key41": "5Xv95qoCn6mu9piXBztotJMRRtv2wFTGAFvg1wpcJZ3QTtfFY2smpSn1tWinAC1WNxLMBUWh9yCmuK8uhSCjtKfx",
  "key42": "5Cn923urde2TVa8RsgQipMaJUadP5ojxUwsuDwxssxqSx8oZyQQ4afkD1i4UPNX7URJa9BaArdnH8RxmEsq3vsiv",
  "key43": "22qdfvajWKqNpeGDSNW1h5GvvZ7iqE8Nn4m8kHonbkVS1btib5ToSbm3x3LCxyYLa2n3r3qJMznjXyczBr6CRwAK",
  "key44": "4bTNkp2t86U9RAQSysbLh4bVMgV2hLTCzPsaZUzqgN8jurYC3ZRkNjvt6QDe1sBYPuiTtvLXhWeLB9XNvAnQTeEd",
  "key45": "4VNL5p3Kf3D58di74UturhsXmFU1UUd1ArBS4BRPGgJmPW4YbZUnNVN62TSsHdC3ZHs14thhLWE6hBnqyN68imx1"
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
