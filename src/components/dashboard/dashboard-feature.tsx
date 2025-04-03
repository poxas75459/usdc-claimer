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
    "3KpgeAPN27LrweXnn4VWkJEhMkPaArjFjq48ZwQ4swhxHSrveMD2CAZqzh592BqsfhVRuNkEUnLvm8yRxw4JrXqq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Dm7bauWS2Cq4W6FCfuuTj4PqJzptfMSixzQDnqrVSs65WDKhnBmfNn3HVWMwf1EzF8oRNPQ22vsNWDLoiQU15Qy",
  "key1": "3gmPsgG13GBzBGn7PGzdznS4bhTHhteQhNoscbU9HF4ApwpNEB9d47Xu3ab5JdFGdfobigtjDbC3e38GDCZHrEu",
  "key2": "52sSC2C54sDqwEVrycaiUjzcZekdEfAd4EY6NH94v6PE8FBfimM935gMbVG7y9W4Pz44VGDvVXAZnnWtHqUxnj87",
  "key3": "TB4JHbVKCZDctC1yAcHSxXFZiKdjtEJe7QQy9fF9wCsMWKwYHLr7PrXSMycZ4qQfoBzsJfqzPjbXQ4BV7DBTDis",
  "key4": "4XnrKgqDirzt2AReeSfJAbYcdfxeLZyn4PnVv5b2txF4MsRGLkNXAQnMucnwMZ6Qb3xks4shb3edwNAhZ9Tz9LjH",
  "key5": "3Y2nMEPNvGkGhPxWcwMDdwQ2EFg9ut1Da6wsPELakbnBHV6Q36LtBHXZ48SXcWrenUC4uLuNL9sGvgV78PNyGWuU",
  "key6": "3XD6W8AECxjx66q8DqB69w2e6hd4erDNSPx9eowiPr88685FTeGxc3fhvKKEbBPbKn9GEv4Hb4jLoBFKbfyZ88xp",
  "key7": "33QTC2QxTRbd7iprnZmLJAD3R4NtDm62hfyt7pfzMhABGk6KYS86BKQgoL3raLPWvKyg9ESrFw1rcwMVowwpeUGx",
  "key8": "3jni5bQiTyaohhUgcBvrJtnbmyGHBdixdu33WPVU6P7NWLefg4uUvtSBqEe6SrQ7yHUGFiinCdKGza3sPmFwQkF3",
  "key9": "Tisk2NkkPqUCB3KvHjaBaKTjvqi6v2PgrPnWZR9aE7iLc4xJQiFSkFwgVx7t19FTpdF5cvC4TLu2Pis3U1nfYxX",
  "key10": "EPe6eg9EHLXbMLzQsL6kFns3knBcDjNzDksvk2rE3MNms5jT3tciB1T8j9z97Qs8XDYXCE5KmScrgurJ8f71Asi",
  "key11": "4kJmqXktZDaCQ4VFurdH8Edh2FcPikgfHaaHfHE4roEmZ289YV4XEKJhZweRmTYtivh3ptzEoAWYoUYbnJWnRPjY",
  "key12": "3tVCDjpRe1D7JTMp4M5pegFBoCdkax9nsSRYouLJJJZiP8TDzkR2cHLjT8bwu9GXNBk9Ahq6W6mtgoGAyD28Yg6p",
  "key13": "241Jr8mRKcXyuftKHdFCo65HZ4iBsY1JaJxDXApb9yUycyQhtC9q3oYMpa86EyhkW9fW7Y2TopnvzfU27pPCNgcx",
  "key14": "2z2iauEHiL8QboNnjwgvfTC2FCyG2efTj1mzxX2epQgmDiwVzZcR3HWj2kAkbGQ8ub4KccBxe9QsbQ1RM25es8kV",
  "key15": "4qLdkiwcow7tafvmkFAihLVAqdKwvRH8ciafEvcxxmJTDcLToxgbfwgoHkX5ZtfWhnjR8821Eu9NS3sB1ykBm2kF",
  "key16": "57aku58fmCCC8VpePrzAANBzPujtLmqZW6CuroWxiqPSQs3Wye8E93KiXCyPYzME5ZXzowsVQ3qU5cqRWhx8j35V",
  "key17": "44b8knJywULHaBAM1Fu6B11ftAsV73ogV6vdQfuin91Wgyb7JW7jn3PmGmKwEo8JFrWwXy2c1ReoP3C1bdbdX9Xn",
  "key18": "3GGEbVZuEc1fHkY29ZXYL8yQhAaVF8rx3LWWW6KufXRdFEDyaZvkRjS2kos5SKc5hZLa5HzAxwKzjEWu3yj3nZsz",
  "key19": "394UvfXZ5VSPjD8TnJPqnKB3UQFd3TNPRsSJVdxZr6X5eLTKmAByGyeigbQ88xfvgfcx4JH1yRkCctn5tWxCJSau",
  "key20": "4YJZQCZjX842xvLo9zvazg8L9esPY9TLGPzpsGwz3E1ubqeA3HBvUcR4KcKWALK6SJSrxYi1cjznbB4wNUSz3VCi",
  "key21": "2iR1gkhbhaUjugW3qXEqKGqkFQWjyVDn7VrpuKEfK4tfrok2YGkvsjhwnoyYafSkRR9DnSFvR1TaACD7DEDNpdic",
  "key22": "4CgaswUsvXB9rJhz5m3iQppF7FETcbfhmTkBhUYAmaB9ka8CDbUphdzhZ6953tDK6UaTx68oNf32FGGVXMEfeyXr",
  "key23": "43Nf8qJdcLqPYj2MvdRwpLofgv257Ui9HP8DRAtguJxv7ZYGydWcXVPVM171ruf1CxJsNkDScWaFHuoGobRAJMMP",
  "key24": "2MEmgfoVdZ8PTiADhU8BDhahcQJuL8KMEdD6XkyyjWj4rb6DscE6ZVunjwEKhJEiMMocxA6fVG8rgschN3VRxHcy"
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
