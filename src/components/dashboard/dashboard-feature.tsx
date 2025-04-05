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
    "3eMMQU8qJNYGZvDMRvWcZPvVHLQzBVkqRmX4CqQUXEUWL51tXsRTDinoBpbWWAYX3H2ToXWnDLfJxkHizScrJaW5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KRALgxtevFXdszHNEQDsijxN99f1Watmpix3YATpupUPnmU986tU2w8ZX6dmiGfiw1XA9hCcPwbeskA88L2yjZ7",
  "key1": "3h4SGtxsoVxGonqrhQBRW8H1B3yAqaZ7Yj2YHWAyh4SNQ6sHFLS6HbbFFFVZEwcMkEXWmDf2HFEfY2LfKtV6UJew",
  "key2": "2CtPF3JU5WZf2DvZJGA1zm612xXuNULo5HPcNx3ivqVGvLDnX5JDyCahxWGeisjaeGu3Ex5sdxxczMYw1bSrVZdu",
  "key3": "4mEDgHnESEuyRdfpJ51s9pmkx7p8JQfCt6dGCr2vv119dFE9ThepZBtsn1RttQqr6mXp1At3Jia5mYF5mBTHwRt7",
  "key4": "2s6gBpSPPKDUbAcMQHE7bMoYeY4ZoLnED7idbC9Er89NyUve29g3wH1W5cFrQZoKXsA635AUftJF8Hd4hJYc3so1",
  "key5": "57A3bEmKoP5MqgYKBCbHXhFWfb12XhMg2nsoEFMZK1Ui5whoVKPSyrRpWkMd6QPFU3Caaw443dEmpszXjTcW3MMM",
  "key6": "4YRUnswCKEoP6C8mo4nRd3uZ48txeJ7yLiMGUVUdcQogkiQswXkXYuHsRyFCiXerUrf2URwShbEZfTomBY1S6CnA",
  "key7": "4eBgeRN76XLepZiDZgTnXUd5TzK5n9Dd9V7SeAYWxFsv1He97ixpLaarJSaitHZftoY4WzfWYBPhBPDiwTHneQq3",
  "key8": "2oj9HDBf3aLne9EdBH5x13PhuDnKPEkmmknYUhanJkKfoxo2tMLQ49mLXvsA1UeujbHbEEJcahDfoX1YbuVV9R5c",
  "key9": "4GdwzU2xYaCzLE7vUbgQ4DFdxDQbB8Xrt8CnjmdhffejNVmiuBziTgGQYgEbuAwKkFmCkW5EREaSXuHLU22E5j7g",
  "key10": "5zVio529BZnGUMwUb5ZbtRf3Dgs5kANV3RM3D7PcTNyTNkMRmrnY8r4GkZsGhKzhJpfct2aV8Pj5ojJWXYYJpHgn",
  "key11": "4eeW7uxEvxGHPBJurfJTRJbEwvabm6AHKYycLp2XPLPRa7fXReTQe8dZ1iyThoRC47vGhoVDka9hxdxJRig4oiGk",
  "key12": "3x1Q2RmjYDQGvdxoJGvWoVY14xWhpbs8cda8SctVgmPMsN4RSPqpJdSSqknSse2csUsWSY9CWf2E3ciHueNdHLhc",
  "key13": "2D4QXdSJcr9Utcm5mDnpEbWX2VMtCSJjFQKPUwePfwUvj8ekYVZYKReK9X7a4Y5y7RqVE7MTS5ykWFyLHe77Q5FJ",
  "key14": "3VyS6DbnJZ8twwfQTiDhzrz6JkvsqgSYNEd37QKaN7VLMCdCvr19iBgSBPViEUQ8dvCtVzNXgBbuSvPzbe63XGgE",
  "key15": "3mETgddAMqcGyrmHPuj98QRGmCtNvYgKUaTcxf6X6khQvwoD39KzQjdX67xPZj1yu69aDiTujDLzcvmE9aoPXvXA",
  "key16": "2xwVQfq8pAtAL3neSJjmda77AdbquZYu1c5aH3LGE3EMsHdxqkHtMQy3LK8wrrGryT6wrC3prJwko5sCyruzMnPT",
  "key17": "5NXwVtF9juHaaqZdVT14MHi3hLqKki34V8z8aqn51RrDfUVpZqiMS9xmhaTsKM7aTgKTwk7LAC56xUfQgMqGQhgy",
  "key18": "65Tq8wZmnibnNZGV1y674kov3jAEiKRu7x5yPWUee3H2PiBVc8HAe27nBvXqiWrZKtL34wPEYKkSW6FXvf4XRQf7",
  "key19": "4YQan3b22DbyLY651tVGEGR4LEAEEVJpF9bdoiqz7zfEBVbm3vRvStkP2vurE7rvnnDb4uLQHYEM3oCTtCGw5kq5",
  "key20": "2eBZzNJ3MwErxhqs5PqfdDLoXaNEa2ZFDCaPnAsFHEZVRej6i7ma1ZACGbdLKpZ6vbB6FrH5Zo7yqfVdUg8MRz6c",
  "key21": "5PZtCskWuT7dDG8pyY5NvveZsXJeVC5wvgmtFzdizyWVR3cj5TTT6GwGrmbcRtBDo2anzet7qsjrJK2KEhFmCLUT",
  "key22": "3zgqFMHAFDvWbdAcD4g2iqHVMcwqkvrncaTxmSmotJpLgea9ez88KWwTDXKs5qkbahL21JkjReRXKEbjHkKT5P7M",
  "key23": "4sNoYpy45jrftVrXvrH2NC8vdHPc6gFFUUDw2Hk4fQYUAtxLeoK4TkazWJRpMgLT15P2GRi38DvtheQ3tebup9Hk",
  "key24": "2XQQqzeBbUFqmSdGTPmhRQzHnXfxzt9agFBZHqNSP3qYpmtPtFcDvE7JapS46VeQhjhwwJw8rf8ecKKEw6nAsDcL",
  "key25": "2WpAKGBGVbyGi6YPimRWHUPCqRR9mGJbJ7VnXFpgW9RqDvGziSnyuGpkAk9eWXpUEE9dYa5FcQeksPg9d2HpsFJF",
  "key26": "5KYJWwuWzG4PHjmRg1eSBesDQVu1Hk8fozDRG8G5tPFkKKwDzT4igS96rgLkojsAVuwAcGxQKsSfSG58zZAgGKAY"
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
