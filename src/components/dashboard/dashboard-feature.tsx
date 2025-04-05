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
    "37dH1XNLnt6GJP8dbXopqL15c9JfTKMmRJoY6T8rSuGTxTqUA1p8fMtcao7q42knPjWSgUm7UEwK6De7WCTsow2H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oj5nofPCNNQCZdJUzPMWZ4MpBNaLnjmbokd6zV1vitNHQUGnbmeXreqy2ZCz5Fmy7fu216EPiqnkD12mxxrckFL",
  "key1": "4N2rTETL23hknndKrprMcx6Uok6ofsadgsUJLwYnFVibXG8EiHjkyccXsrtiGrgG6orgq8q4LgJWagDsp2fhXAS7",
  "key2": "58JvkmCig2S9Vsazzp7RmSYVrkCZ2f7nHyggBQoSJfJhkWuTSvtM1gDmqHwVxbe3TfHvNRcMsEMd5L7Z2yp4gwkY",
  "key3": "53x8UvPXcznFMTDfUBaE9aujpYLWdEuhjbsEbsKmnELpmy2bP9ktKUGtm4u8PKwNzHrJDWHzqTxzoz1V5GnjLVc",
  "key4": "4gPeUvadrtsCra1KtqfpeC3ph7o25UXd3NWpmf4cnxErjJq6CvMQz2jKiJmUZH1vddPciug6RCJzEq9Nai36gGJY",
  "key5": "25B3FcMXJPpisRsNShivq6QouGshr8SU3t6Yj8Ya8rhhtGfds6sk4YswtRPPaiEHwbiDk3PPJnozTKGagicpV2HV",
  "key6": "3r58xR6Ek2aMogjuKayaqZMN2ya3cKiMMKUv3wTH6bjWhDrw6bbSePMow6XSJF1Qr8GTTocJy6aGzspHn47HKhqU",
  "key7": "5WiCyvsaoMJKfZpUzPZ5iUP5t8gMoBCbKtEDocwLwFfQHzrzMJ9PSrp48hJchSkm7yPui5oUs3zQpEAriTfFGuho",
  "key8": "2XYt3pA7218ipoFmg3JxL5uhsmA9hfp3kHVbJUCAQuvq8KHUu5VWoEZJb5qb43K98KoEjvejob33ohJV1tQ258Kg",
  "key9": "4qv57kyf9dNBGBH39e9V9Yrt5UoSQsk5yntYRuUk79tXPPwRWgtu4qX7KNLQDLgHcxSwRWZ1Xn6Xsa69meszZD58",
  "key10": "5sKauJVBuF6kKyYfTtXA7HmfdVUZMBzM1YsiECkHjZd7Z8rWPLpMgjogR3x7HLi3D1Axv7QHC2XPPD3SAHUNpBmf",
  "key11": "2yPsLp2G1hLEN3GYfPvhXS2C43xHyY2S36ZpcNVL67WZQqDutNk2dWiSMv5NBN7aRkN6HRdrGMgruRyeQXW2pDtA",
  "key12": "4pXgbspxnfX5Ciw8HcuP9JV9LfiS9TRmSZz7NSbPKCf8RLbQsdCciSpxxHvpUwQxrc5w5DraDudasfVofGuD3HWz",
  "key13": "4E74CVpAC9CEi4JYbFezFuAJ1WaeUvdnn2qQZZBaPrQsDfhfEdcENj45MDspy2djWYLZQ1zgiyPzBJJqcnGAoyZC",
  "key14": "52NwC9Ryro95dz7nj7BqY9F2uEgojEgiuBh7Fshq7eSkCxgzQqhf8q9kqjCHq9ZK5iPNYqvGbF3vBU6YhPnCVoAD",
  "key15": "5sLgYgUVbNub7Wnbqpa27HR84bm29U3cHWA5xXV3B9uJ9snXETw6ttR8x1NEXP2fFcaok8DauGqL1wFDqZoPVp4f",
  "key16": "4dFWjxn6UFkmPdD8BeNhfM6Ui7ZyvXLS3cEL8buu1e2wDKphnRtXbvgEGBEb37NcBEUxoM72soSra115mZL8dMF7",
  "key17": "34eEFK2qM3EMYMADDKViqV6Mgf24Ycp2PZ9wgykHsKj8CbPKKpR1T5B1cjV4YBewKscbk2gNCX2z2m2AcbEA1Bgk",
  "key18": "3K6QDjajEP5fW1wgER5VK6r3cR5JvN1bLgMZZ7H9AXcKgApBbEp21oQYKSB2BCwt2GbLdHTmKYPV3SAtGZ5D9fK8",
  "key19": "JVkhYTJvFqaMg8aTBgciiL7QfEYsGG3NBJ8BUop7UHqUCemo5jxLqazH2PnxeTMz5oHyskPzqy9BAB9yawELCCm",
  "key20": "BCpA4iWKdygQZn114BEL5XaBeHzyNR7Fi8zCzW9G7z3wEKZVhMdn3xhZUEUYZAWeQmMTUFLrBu57c9qW2beHWWZ",
  "key21": "57MqFT5D55svXN3JbjQ5KxJimoj43NvTsMmizFpzRNmRzNX18YFcTc5zQhfamnVgHSBbssyZ1Qr1fgoBZ3MjEsVk",
  "key22": "62tAd6NsMgsAdXQVy6ibRfQ9vsXrbJw4hHZjy2JSBRWKXkAdAMjFXxN9ytDbhzKnNY2W8kWhCQVzxxFzV3JfYm1q",
  "key23": "5MwGbLA69MoiH7wjkd62r3xFFJgioegsJkBqQT2HN1nqN82iJxHSe7mcKN1PcR5mFD1hjsarYCcqLWsU6p6kbxAz",
  "key24": "3MNsxTX1eq1AFPD6fA97FgEMRJAVPJHrUMKhtKUgMdHN2SPXiMBmwcFjM12PvgRuyjQATLJQ79WYkKcdPxtMCV3m",
  "key25": "2HpPViXRwoVNH2AvMSe5kXr4J9vbnbXrUeAjBwxtkGzfpu9EqnSfxWZugqrzrtjUsRs8mLAa5ijfzJFbzbEG6kEV",
  "key26": "4wQaTh51BYEjCvxmCvhrz9KuZvQU4XUxvdoYY4sBZ6tiW4fTPfbDsPynKDjiQsK1oTEDtmjan8eavbhAyTu7eWbg",
  "key27": "2SRU7Wi1rQCNja2GPrdQLb5FsBzLdKnCzpGSGNBkuDV5w93esuATJUosiyHDvs23G4YTzLPGGB28GXfZCZT76nfk",
  "key28": "3vBz7LNhMUUxmEb8Nzgd3WYsCQgFe6QuhhbU7QYSPRvpPijvvPuh6mRK7VFqayGbcdsueKWsmt2WU7X7Fu6wWpY4"
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
