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
    "2VksuHHZ4eTqShkshvqbJRD69ugTzk44HGA7k49CBVsir9wdyiapLXr1CmwevgFo1gZgncx37CsAUk1cHto6cYM8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VRmu2DR3v3SgPhM8LC8A6BKvscn7AmPXSbpmSQGH55bPbAU3VDjCWF3PVZ2dLSYgyxtKiky9kTGQ1yNGhPsHm2A",
  "key1": "2pWArH8WqZnWJZLSkeMeHC3Mw9DLNdrDA88PKLRPJ9dWcNsyFNBsdnMwehRyuWkPvQ53b1ogVnUpgKdeJWJK5mKV",
  "key2": "2sHvS9kh2z53ZkpGrB84JY7mkFeby9Uxx6ij2hsx9xquSax1J7AcCjUnyj1WjhkSmVTGi3KPvmMT1yhsn89Zx9Xt",
  "key3": "5FsQt5uMNSVCVi3uGRWJnaonQbQbBBfMkYLymg16BHh965kdxo1q5WJBCUMQd6SQZnrh3HW1YHguV3Sk3SbMPcre",
  "key4": "Xeip5gySQYPsnJVijjvvMQKBKr33qvpU2oHptm2tBN722fScB1QjPJYqvorLJCJLKYZoZGpqU3t2KGdMDXrnLfK",
  "key5": "4PyEtwy2zzXh7L7fXQN18zWbVGiYgSBenpFQ7dzfSAEVpQC55tF45mLu1hvigCdvUKeKuN1MiiPwNL4uEXkFoqk5",
  "key6": "4D62sdYPha1B2fmjh9JGcG3hn336VogusHhgBabwb8DPtmGibPxCH1PfT6UmpfyVSfPXw5pCwB2A1JNW2GotaX9G",
  "key7": "4jBsEBm5uu3nr1cyYeLJqdRPeShf5qPJnLcCQscEiYmCPzYLctYHorwTo6Tm94mGG8b2gLED4qejypUPn6n6gu2w",
  "key8": "2XEpvaFCY7ShjmmWeKctzWLRtknTsg9K3jCNXUF7LBWFtYfguCBPQzVcDoaPCzTeA9Xexh1Af3ASbRasQmAWnaWM",
  "key9": "eMhhYurEUULmNU9y2M85h6N1M4kkyrrAz7SNi2S1eVCMRbWcYKxkskjdQfKrqqnK6yUxY6PrLdbPvUu4HpBSceM",
  "key10": "3WRd85NgLQ4LhaYzbT49i7QiSpbY623w8N3fyLFUnp8DVntjHWK6WicVPHwi9kFGznqRx6oDrje5RX6GGnAfkNmd",
  "key11": "3VtdN4k9Nmq5AvL5PfZYoqkrpYmPh9MKKML9G4QCSgb6WrKe5kJ2Ywq7QqoPrN4KETYuBSZQ1D3c5U1uwFdUW2Z2",
  "key12": "UspoZq3RT8CkYksYhxqiouHxw29QAEsyjxaehbbrAHfQJFUV9ZnLdHQgqYnDTuzqUkVa6fsZG7hkZXpMKcZnbQR",
  "key13": "hmH4Firgpf8bth75UVEjKPtTBDGjuiihTFXADyWLY3Xqphcbx5eUDFobeHCGPSYF5LWqoS6xto4eDzE58HDakez",
  "key14": "ekHEadRRRyABxRBoE9tdVSD3MgNWK1J9SVuuyze4RH9R42yvNW2SLQBfx3tGFo9gzCPCrhn5mtSnYn37kMVsVyd",
  "key15": "4PW5v7PmKuYhvELwooDLtsSDucDP8qsg3im1GQj5fPFr7c2BPvNpPLZjkCVHwv5cm5GTi2ApxFgw14uJNo3JPrwu",
  "key16": "5n1GiVuHgFaoNp4q8Pbqy7tDQ6qtpVRcL9g2qkoyigTdnpazQB5XvxUBxuJduZivSxLLoUR1ucVCX46qbR3xES2R",
  "key17": "3qPuVcyBuHG5RQD9UP4Kus3AD2WQm9cAiuqEm7aGD95U9mCoGhP87ZddRuayiW8Mkt95FD12gz7excTRDwHxnBbe",
  "key18": "M8Z7r6P37rxwEbwX2f1LTKsteMBJiuDQH4Pe2rHTu9qGonMWmKHfzTDsAJYXk5U4QGTWhdh3TN4hhTnQ4QTVXwG",
  "key19": "AiSo61M1k67uXBGTzjBNZTuhR11stCoEdqCqwgUQ9qu1M5FpSeXvf3knsMczabgH58DjTLWa13GfWdn7ERrsRiG",
  "key20": "28Kq5RLUPCcy4YfNNtVvGrwipTpcAnGPHPEnkx5Luq36PtK5Qye8nD24fBeTSRCbJzh63rhb8BvgUEeWfFafc1HY",
  "key21": "2gih9zLXZuDRe4chSR6SFcLfoxyEzWjTzoGGT9iouBeFTYZnHvRSu7R4sG6B2frLb7XRP2QuBUPuAwgWi5M2gjmg",
  "key22": "65tuNMfAp37haPSCnE1fvzUgbMvn6prs1m9FVgnkQsRrkP3E35ejXVa5zfvdm3YdsQzL19xDqRSdGGSQMkNbjcz5",
  "key23": "34ExjBR5uKYjz1d1makqgMbewKtj9E9mrLf79j6GnTYYntktqeRZVTTmJtV7PQwvj2v9Bf9W9QusPBtWMuapy4CV",
  "key24": "5X7RvxDecYW6NyX21H1PbJGKBEVudXKQjRoJjDyiy9D1q8TfRDyPpCeQBdVu4tJGeiTqJwQpGnAU4JxrD5UGqTT5",
  "key25": "2Ex5zcwTmcsftmyVPrYvzjJrbEhx1T3qEGsF8VTZ5o4AixL1GX199uiHapLTxc1sJwJThrMp5C7Suyicoj3tnL4Q",
  "key26": "3TnyduMd7Bg2KSybXNTvSMB8bjpjTDAadviaoR85V2NdJRrndT321uYFZF6cWPXCspQ95d2VL4AWqxvZbEXEei4x",
  "key27": "2hvGuxxfkh3ztmcAr3CepJbXVE1Q88La2GcujAr5MM47K2ncFQF93WkX73fP9DXzigd2EXP5aa7LrJwcTmWybso6",
  "key28": "VvQCAffss2oeC1ubUJ4CSy3JkrUxTDYsUWd74mkfbs6RDMpyKCN1wFRxyAwYv4Hb8M6brWvoDGLPqgjsG2j2GQX",
  "key29": "2xodyRLX73AFDD5whq3KwNHQ27waoyd72uizA1dxJbdEKBeVi2vnTizxtLqCXu7XXbUJE9njxxVtMgM62jbSVAMb",
  "key30": "4oQbgP82Aq5emvRD2ZUy9yv9VXQEM969mJuxXkFrVAbRsa5do6Z4t6JhcSFDN7BWj7t5pNUwJp9kYsHYoTMDASZy",
  "key31": "5Lz3Pyjy9oBhaZ87M1LPaiSPeH7iYScCRzJRxz4pqTbrpTj5qXg1JYS1iF2JZVvV1L8fGtnBAtbDw5h3wwRJ5Bgj",
  "key32": "3ttNHZHgaVqAEmUeiTyuSAjHyjA1qPMHF4svxW7CV2gRdATkEMoxAqAvVbgzB9hMat2LBoC8saJmT76Aw5WNSWur"
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
