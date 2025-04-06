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
    "2CWsbiFPDJet1mkiNQCW2zECEDEkSMYJPoSz8H6m5ufqXQSXMkrNXiXevb3GZzC1GkBxk77oRKG2TRBPEYW1FsF4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AoipurTHRy31UKMGkQXE3kRKhLSYjaFzndenprzarj3pSwFc5fgyJRkoy5BxHJ5LQQkYsRpHqLPZ4UAtid5GPiU",
  "key1": "5TEsYve9wxBb9nJESojqYdbQPhUcfmRzukh6AaUwwqdca17oAMfwW9QPgQgZxaoZS6wfVwtXY119nWHG5yU6yLkb",
  "key2": "3b7SCjjgKsC7Pyw2HbH1aHGZTrqZMERujAjFGNfQDTZQKC4ggnpjXxnYqSTLDPwNPC3sfJ6WpnyFqKzZxibrfsmq",
  "key3": "eRPq2FT6gUXSx8soNaqCi8XBz7hauVnMxUfmnRYX74vLCSACj2uGScu1M6YZXcEnYaNFJgrcvkKJGBP3L5YiQUM",
  "key4": "4Lbm4Hd9RWWe4aaGCy9JbgPPDbwFjv2JkvB9CBLu1NEbxryxMJ3MH4mWk7L5k6TkShrZTBVgKZgQrFrabkq5atpK",
  "key5": "36ryYdTuee4svJoC8LmK37stAHugrkYcopaLomsxpShueHbGsG2ufU2zcNhx32WDz5Tb7rwbjgGzihFMeiP8hHkj",
  "key6": "59pDzQ2tFGiq9fWYu8TiAsctv1KpMxtCwPWdCQ5kyYLnjdK6pj2JTc6tcyMTW7fp3CboxP83KuiM6eBqmGnNLPHo",
  "key7": "4hzkiWUA36WCn1aUpgax1JLacmoPpCL9eE1YVYfWPMhnJJAnjdoeHJ1EsSYU6kn3jvKR3EWkqNf3UY26GaVp2NLf",
  "key8": "3DiCNZ24eCF554HQAf7uAknDD5mEBjeaQvch2Lxp6HYCtazqLejqpoBsnfdsXGf1jvo3wGAXLGi1xsmkXEhujJdj",
  "key9": "5hjpeGabL8M1R8iX6fxyARK6aRAfwz4o2JfXVeS3a8LuAB4Yxu6Kh97y7KMzXaJg3hjR1taJpWrsvFmD9jkkAT7i",
  "key10": "4X8rh6pn4BGgKLYWT7D5cHFmfX6mRZgyxUrRfAVfx8AUJA4URNFq5vqVG7oYoauD55iTyKsZMT6QVCgRgXs6tyWf",
  "key11": "4BGtCvV5cfiNycvZ6V3G3okYXe6eKeTCC5zTkgu3w9G3iEJVSXxoHnNKCmBKQiV3RkzEzeokPnfE9K7WRRCKZr44",
  "key12": "zRrJSvveJjo2MuLzY8ZSUutVDRT7jK574ds8WE4XGdhvCDacFZBtoznckofeBhZgwJPiN2JVw27RKqgBweLCRD7",
  "key13": "4aoN7uWR5Es8kWBXAo8RSSzQ2JjjFTVBh9QkkhZyTZbFjAvzJGA9qvozcnB64pmpkiCawMmZwaqPV3khJpNfFbwx",
  "key14": "63skmpoHzEnBNYFPpd8pJozg8t2TpTGhEa17uMickmNLQk63ap4f1swHXGd7vLwnGcZAxfQLQVbYPkUBw1mBosJu",
  "key15": "4ZvFTAPVwsGhYcyeNq1s17a458ErLTERF1Mg2h6emof8b8DNJzaYpdeSyBynV7gEWtxngnDqQQNA5Q46HHFmpu3S",
  "key16": "ZoBAHG1SjEPTaRLFt4gwSsVsUDkcBoCd8RVhDRwqf4pV9ee749rCwwnZhtfG765aRizvYYBKc1BmqaqPzor1Y3E",
  "key17": "5KZBN9boLDTE5ByRdqgTcN9dtnDNqbf3YtkGtVFuQK5r7X1uwks32xS9YnsSpfXBSD7Gws6fun3kXZL7RJLhRYkd",
  "key18": "4WXdVxEQLkyxnmBBzce3EbLFPAboEZjTNp2MgrBcHEtcEEZatRjkZjKz7Vr2AZH8cfhME87NbokgoPDGHty2v4ei",
  "key19": "3CXqq6qYqQnDetyY1ksH5YK9JVdA6iPiK4u4jMiaXzLBHRA8QLgQyqEbsEBh9kCerf7hCssMwArrcns5V4YLRcVC",
  "key20": "5v4pPc6VVrF2zuRat5buu7i7itmwDfzeP8cpwtPnDFv9TZ2RXFFkdkubW11CuXHxcB4pKXbx82BAxdpKs8fGhgGQ",
  "key21": "4dKcRLacmsHR4LSnCqhXAcN7D5uesxDRPouomqcSowDvv7xZEVsUemwUbKHQj7hpbbmvBCoKreipVSPbuzD7eaLY",
  "key22": "5VN79cbWKbd2YMy1X95kN5fMePoptYUp6pEGsaeKzDHCpqPKwHWCcmyGaWVdXT9aKXMv1PLmUh6EyDCywcyvFFg",
  "key23": "3E4rhDd22e7w5aL8yMK18XSW1bb5TYbjWE81abvauK4LvrqP65f6q2C1zkVvEaqdKmtJLvh4DiQb3DySnxp7KBH2",
  "key24": "4DXsbqP326X4zMPiwWmdKgku1QgpfyfvqjjhRzDPsWXV1YmMhaxhNc2fWFkpBf834Bf9GQwcvetx5NWKVM9tpNME",
  "key25": "2bFCewskhuCAeksq1Tv8gwBGxD1Lpq8sYs8PyFaqEc3z2VBPz4A6j9i7KK7myHp3xByEg5Nu5M6oj4NVTTvkhSkr",
  "key26": "2C99istpBeAUH2Vg91LVhRGJNztA8R7zamepGAffCBPiHpL17RFZGtS3hkh8Zs1JM1Lff9XBpoMBMhDUKW1od9x7",
  "key27": "4wN1J34N47fdV15jCu9CKXn1bS7U6opwdceccL2WixCiZTNrYGDHCjSJuHqvkMiQPfQ59rxvZ9gspBNb8dPQmJ4c"
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
