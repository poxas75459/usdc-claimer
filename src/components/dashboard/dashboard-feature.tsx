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
    "2ZwVX8dGBaYuA2FaahVruDfHCHTsy2mZXUbUSWVEARDzNWkFKzHQHMexnXbE1pqTatEsCLFX9tytgoV1PHqUeZ5V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "624jcL2DCqsSNyYB1sGbcN1cVwDapiyc2TeCBY9HbacqnpSdTE8ECoeps4nV2ohehobB7fk8ZFApqi9uUHmJqFCG",
  "key1": "266xEizjsCMGLpDdtfLccTW4Pmbemku2KAZ1kLqdJxUPb7iukjD6oYWrtNZkdVpAEfqyfw5BrCxmd9T5e2BoMY4C",
  "key2": "Haw3nP9w9M2jWdzBG3jCERDpdmu8GHp8yA7LZsMKkUHu2WPdZnQ6trqSHb289xZaxttadbS6CkDmtYG5PiPEe2Q",
  "key3": "4WdaiHtyWLxPRVpDdiwMtHVsHidE74Yngk5FwbGsh9C4npTDtpZyW3r8uE9tkFU4fc8mvJQrNWoXDT8dJpw5aYB1",
  "key4": "ift5timzA4dkFbtmWpqyi2YzZC9Jp843FyLBintydDVXtxk6oWiScg18TTYSEzDonbK67gCj6DxMdS7w6BW3m3C",
  "key5": "4y8Zu5WjRzVcDi8L78SmkaRYnhtyvVJs3CqJ2rSHtpKDisMXPXnPVHKd5EKDtibBW6AaBL7wjWoWsXmRmKxgici4",
  "key6": "45GAASEKpqaBPghhBem5GafQ7yBK8HaWFPX7ASRREagMXKMRkQMihGQTMtqvpVrgY5YuqVfmotkbf9t1Gcd5QRVx",
  "key7": "5HSn2fBWamUzeotawhjH6uWuUXVPHyc1v1bUumioNM6FYUArw9VCqDArN4RDp7GWGxEYenxMSq6QJvofnjTmFcd9",
  "key8": "3urrw2bmCsUArRsGS8TUQLQqm7Yvoa4HVfa4P7gotr6Z3cyZAZfBAZbtxGzYo6BPTxcxtdB7XsHbEc7ZmtPGoZAj",
  "key9": "49oaXetFFN4UA4R2NAjXvowEaKANBwTuYTBDJMXfUjfsj7FCPxdHVxPNjrdKTHpHp7B7AniUZb16eXeWPQx3iKpJ",
  "key10": "31TTJZYUAUiJCJmypEUcnN6aJv96UUtxLYCf4nyyRVfky1JNk1mYN5mjJbPC1uhtToPNCSpTRSwKLyiAHcuDy8dq",
  "key11": "58YuND43g7foHtk9AZCEfo2aPC5sVMY1imErGc3Sqtpn6A4bNezptns9cexRJZbkH86JxgStXZgrixNk4mBBkmPh",
  "key12": "5rPHyuSoSNKXChMvJYCybJV1sfdp5qPkMmrW4qbscFW9un9pvWqkRyrvSDa8cA3tKNN1v4itJ1iqvu2PCNXUbPRp",
  "key13": "5CB7SJh6mAitoTT2EZTzfFN2mMMBCBbvNSuwbeBRmoySi72kTLBGmx71ipfKsLRr3AnqDmstWbtKJoPnQjW4dYoJ",
  "key14": "QzeYHWaQvo5bJY5NAbLoYJ48Sixp6aHBRzHmHKM3jCq3r64sf3sQUTiWbRtDtrdSwNMSGhtUt4Ljq2Jh42nykpk",
  "key15": "9uyFnbAVCPQ6PBYPkkRzrvAVY478umyjB5a5uKhqRWVVaQu6pcvJQdXLdhYuuhvvEzLsm3Szas8HFt25FpRGYh7",
  "key16": "4ZC6apKtt1tfoGzSS7SFxzuQ6Z9vVLFB3XDu6MYDuZo8761wUbkzC7PuUT7fJEPg7AsAfGfteErLePHcgno3Unb2",
  "key17": "5s9uN64NM6oMbYNgJiYnPCVeUySeogMusm4shQvhBJx9v1tVyPPRh5VLFtrGZMdV2uK6BAtZxvN43ZdvMGnMd2mM",
  "key18": "37KrBUipANSysU2ksKe5BVshiVV3Lus2zQgzoGAJmrCat6GdsMucmeL3oqnge8XkQWod4ns5N3R7T8EW8ydCimxa",
  "key19": "5Jc8LbXxMdYzGQfqq8Nj8eiEyDiaF2hQLNa3Nc6hyCaf66YmPx2fjQ54CYK2Lg6vCCMzyzT5rbnqNDdiSStLc713",
  "key20": "2xT1zJjPsEDV3x26DfDhuJxSaS9mAeHibr9AdPMSHXM8M5pgP1QXxSVsviacB2FMsg4aGsSUSB1Hcd45KoC5cQzi",
  "key21": "2yNN7ZMDkyAdkiTwo26d4i1Wc4gWhmg5CsSPu5eFmGSoTHaLgmR4tJGAxFhw4DT8sPb4861PESvNnQ1Wim5R7zKu",
  "key22": "3wqkFHZhh9sdkLRkcgQE4jKJ25aybhPGsCPYaW7jvvhDnHwnUJqhtzCPNKQR2no7FXbmsXyGce9H7XC4oSaB7dq9",
  "key23": "CdaJdBkYnaEpENxQSezkUntMXjSpop3k4uTR1TeppRVWNWyEWtXbrLv9F99NF1JMesqqkKUft4ZsJ1Pn2GsJ9XU",
  "key24": "CLEJLMrRCDB94w2xhtw9mJPDWxgxXpCHAqYrFxNFkKaf4pGELVX44DCuhL7cdZmXJcpCxCGj1dB9NsS17st1TgB",
  "key25": "44a1nFHizyyM9J86qAMfLpDwKV9iMSwTjcp4isAUrhg2UsqZQoTmXNLK3ibLMkqmiDzCDBstt9f16pZDSm7v7vmh",
  "key26": "4oBGW5L4dCbXhwXDMKdRWMDV5MQsAWdp6a5uRoGjw6SLVBQgyYf3toBip4oS6erH9ZWKLgc1XZuS19sujJf2XBb1",
  "key27": "GgzXgGJUz4hiFL3G24Bg65TSDnbfKyATES8DabB5EpzNLJMR8wVHCDF8QxdU8ZU3y5uguymofxR8EvaJhiLNgd6",
  "key28": "3CzFDg2yipBA92n2u6wo4NHN2LarMgD69eHk4MdJf45s1VNDuCyE3Mwd5LPvQgQT58PiTdpZAUATFdGYKc1iA58D",
  "key29": "5TguHMFVzoS5Ru1bbfcZgmASAcyiPBsV9apSAumvYj3Lv9e6NcPw7xgUL7EQKbz2TWjeP2bbJs2XJkVxijQ1r1dR",
  "key30": "55owWko7p2gb5iq9vcwvKCbJdfX3AaCPsgu41uwd5qf6tMAysdbr1xYmvomFEhx67z5pU7uU42Ngvw24gBvJY36T",
  "key31": "2QTPKDvnvc9iKC2rEJuHr5DmYsgCSAczjetYAjBwan37wbpH7nL57LVUxCXQZ2EKazaKpKDXiPifubZ5svNiV4Si",
  "key32": "5Q5tJbzsFkqFR5oHWM2gZ8cWvSNijTFzM6XiBJn2HrJApHqDwRawyPLztEt7PkW34EnF8yCzjj49zrimwhJMVika"
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
