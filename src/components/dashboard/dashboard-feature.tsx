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
    "3tyiBvksFJBUNzHkxkpd3cwiNEE9sETSAMGweiEPHeG6xFCztW6G22iyAU4HdaBe4F4NGJTTH2JVLdd3JvMZ4Fvx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64K5GT2VvYPaDhNG6RHvgB5nGhkLrXmjfyj1nJWqSAjVaaaAoysijW1BdKitjo95kHSeP46KYuppUAyHfHmbAR42",
  "key1": "LEGVHWCjmHfxzvQgZ36ecCuUzRCzxYGeddoNLZ3JoBHNteFUjvxdzNCSfwqBuwDsTz8E32W2siyEC33jwR2vnks",
  "key2": "bq3VmeEDoaGfNqEMnbBhFUP7KpzWmLMLwUQgJsrVjpjD2NaricpSEuVf5md9b19BnHXvYUAZgv3xdw8tMVRNEmA",
  "key3": "3id8capXpKVAsp4x64qApHcqefhdzC6XVLK2KFjHDWZubtvQ2mqEcxXRFAztT9nnWftEVVKiKNNWkVYVNd6Tnkp3",
  "key4": "LF9EYSV95UnWm543E7KWnoXNeaHnHmSCqVELrUwDYwjcFoEQ6RJCLx1qXVq88R9D3sfCrGFZG7eoA7hdhdqrZtr",
  "key5": "2QojF7wBhCLtdMau4b7yKw7E8G7Mm96ofSb1HisZDuhRYDPU5wqBG9BeAUFM1Qitp7JdMH2mmXLvDAZjkkRm4G45",
  "key6": "5g8m5jyuwT1SMWSLKp163AKDVn7RpAV4XaU9dqFz6KrG1i7dWo6yC6v72swZ236gy4M6KZb2bvnYMzoZHNjW4mLp",
  "key7": "3XZ9GyYueTkqnVgsir97tkYNJYURccfFFTvonPjwe3sQ1tMbk6878dJfs9uWoWJoRFtYWaom5Hamhp18iRceSx3r",
  "key8": "2k2sw7rDdZegC7Y6oKcMKM5MencsQPytzF64wAeMuxmrXekaDNpanxw6SwTDYgPqMtdw6U3nhw1gaANfNkfPnmgi",
  "key9": "2y6pBFbqdnjGkA8HDWMkN4cffC5qUVNyi2Jh1XqmUrA2B5JAhceJwB6eX4dR4m8NQctpjfhB84L8CwHKqg6faqDX",
  "key10": "4X4Qud9BHebQ2W4UwsCMhhTjAKsBGGVdQY9W9K9WbNHLBTBnShYK5rH9sJACyzn8uXRPwrA49YmHRXY3sfw8vBse",
  "key11": "5FuRRveQXehDKixjy6Can5hwES4mF3JepYAVKDUaZeo3dTHSEAu2c35eEn6vR1XDZQNEdxnFaAKGF6Ss9jJmB8BT",
  "key12": "3V9kCLyNudgpzMBL8cUYfKg8EJGWH4JHdfyZgnqUtBrZyzko6f8c5LPSqgEK9FTTZzBD5B4abAN4QfDbJ6buMdCi",
  "key13": "rtf5DpfrwWZxke4mTfwK5grLQrCGa2Q24rUGKmU8TqUPXhhUPdR1NkRqGYmpw2KjSJMuWnn4fdi8iDcyRoQ5gQz",
  "key14": "5nP4KH5fRbjBR2SGw4D6K9CgpYGpkGXCJvV8CFQ7xiNHuMuoB761kWgecufKQ44PQLYdAhtnVFJFhCxtx4aJb2w8",
  "key15": "4kNj3qhpr3aidoETyHtEaQwoe8PhudhsBgnJrogZvMhdsnBeDE6Nutnprt1PGNyG53Wf6BtjaGWEiv9xQ6ZHRjtd",
  "key16": "3zwSyD7kTZzy4bxXpqD9d8SxcTNqShX8WB1yK2Ji5qxs6CrvEyMC2N5cCh9Eue84r6dGHNzbuU14H4R7JLxLkCgS",
  "key17": "4jtQe4ajWSzkat2YUaPJm7gDu9qzc34NoGtT8TjMvWub1mUwgSPV1HHXMMyCkPcGwBxzg15xqzM6Z71vwfTSkiVX",
  "key18": "RR6up8ogDFonteDrikjemD5ucP9NKAdY4JYzjsxoXKUcqeKmrtL1MdbuEsnJPtMMnUqZmAiLev4ugJSrags3TGj",
  "key19": "5oNq6HM2Azn1SbNMrPW4dMxHyE3X9Uc87SX1izUDbE2YYyWV2KSEeSujcAazs1FWMf7H6xakeX7xKVfCBxAqypt5",
  "key20": "3C3ru6EJtP84U1TW4pjJWh4qSkGs3QHUeQWQjUfpopwuXXXbQiiqnqrb8mCdSNiJvTe7CAjvQXbZMnwqtmyysrcn",
  "key21": "4sxsWJz2EqmeTsjv1bvi3pjiaxv11mK2h9HE2nJdzXTwusrNgy5ECwfPF8mTEwYNmSjrSpA17SgHwb3WXkY85wjN",
  "key22": "3BdGQyroZRZqQ7dj53LNBksEBQKfPnmciFfU62ZwFVXEDkvRLq2BRMPXNr36pAS1iyg7wqZkJ9MFno2iDKGXjBkV",
  "key23": "38z8HRR2cCUHQnF7zEq12S8RraPsCUK4JZVPnXUFLpypyyKQeLX5cx1QYK5vhxSiWFBdToLzWmkA6nz6hEcc7KPJ",
  "key24": "5HPAbDP23QfniqSi4iaCsZ7FixUmjBYtofYyRo6V9kmWauSr7r1wBW6HEmrX86e3Rd66B2D3vVsxp6ScKRk6pXSq",
  "key25": "4XFHggswAUihFmvWvm8p7EE2qrLp268FbrEBWLjAnKg9RKgWLfGfrJvPCUDEuL1oPBVhJjY5P9UaPFoWchFDZ4eS",
  "key26": "XcecfQX28P4ecEG5xNdrP2XpZshUrRWQKDKf8SMyQLcKLFK4k12Eqg7ippyfdjFUG9kHokF18UkDYbj8SYeeLGz",
  "key27": "4cavWFfBNKWxL2E3MWnKYtxry8qDfLbeHe2ePahF9S91swD8ZoxtrMwboTfFMJZSgT3H95RK2PqsNgPcmv5NT5hn",
  "key28": "2YtUpJqyQ36kX5wz3VL11sTmzEyihndVtEVo1sFhNuzMWQiGftQNFywzVstJhX9ZgamykkW1GhocD9sRNeDnX3CZ",
  "key29": "3wy5TZSpCDywPCm8675HTVYzSwarzwK8Qu7mToywuAfDJJE5eX1JRmSMP3U28nrywkB7aDYS1t7wegxNnU2wvFKZ",
  "key30": "5RQ4HF28nPFX8pHmwUkduPYuuL3ojB69c8oG29qFtBnkFFfBNghzotmxEQwg6ev34q8VLzp66Y6zwPDCbDEcmoX8",
  "key31": "32xaMEGcvZGDD89G1SBzoCq1iif7H7oFUyTtye3jX1Yx2J4GhLTzKsWauAtXTUqQV3e1WvxuefvEWpowwd119BVi"
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
