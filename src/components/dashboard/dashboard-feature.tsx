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
    "56ocGnee2ozjshSeM9FFSoEq3iBPu8anxnU29tC1hEiVmet2jvmu5TCW2c8vA1N9mexX2ZTmQPN4SAUpacqHVyjF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TaFQtgvbEVpgodtwQ4e4LxJ3jcDGs7uXmYF9HCuGgG6C42BmR2SEPWQ4pcSqirfC2n1x6wGzoY7BNsjL19hPwGw",
  "key1": "3ezL4kKxYzX6RjR8CG2F4VDZ6nbCgfg4jQS8JqsN6LsS7FJG5ZheSCV2g7dKk2ZB8nj9Fhicaa7XJcseHUumFn9e",
  "key2": "58tiHsLNQp7i56HhYEdotcUesQdpnnR3Aq97yuHK1U71HtaPcZ3YTsmEYG2eKJhbMPze3cVE5hUH4sCWW3QeAHmF",
  "key3": "MqVVbmye5VAcK6japRjR8fpeUoKE3SgHjfprDAHu3GchoekY88E11ogVrdGerb9To7AQN3R2B3jJM3uVgQXmCSW",
  "key4": "3HmwFhQJQFVUsk3rr6GucR5czmEH1Uo9FoxcL1BxbKE586zMMgDE2dcnjsBMkXKzGu2AadzL6bVH3WnBG1UeJiRs",
  "key5": "2Jws3UkfWpM2Qf4vPv8WeZTwfoCeL5Q2jWG3smz7FgBFPjdJAMwvq6jkmSoUjre72D2ojZ3y64yVseWRuK44LdK9",
  "key6": "2fpCUs8Xd72ARAMoXtZoKkQPb8QSS1svD2s4tEBsXZ3stLuhBk14ozUERNSiatMtYrtXX1BnxBLiujzBJmAwiMDX",
  "key7": "4RdWo36FmHwfS7kdPphfXixXHY4QArS59uQEBUYRZnQJPEzouBTffqSgbNkJF5CbV2PMpPDF2feNksagKXtTSVeL",
  "key8": "3tA2g7WzutZsvSb5sDX6LaBLnJHDosv8BworFBs6AcNGuWnganiirCVhUNRFXgD8KwPN4XPkUihgy7v15cixb4oe",
  "key9": "5HvUXARPkGjdzXh8YZ3SHzcrTyiatF32VLHJW5rBXVXzX8iNbk4sAyjZjd2JgFm4tgpwjtwqidb2FU89okambCaW",
  "key10": "5MRhH6y81E6AcdzSgj74x9EcQ1y9ZEaowE5P2y5oL8SeLxNqnCe4xga6o1Pf462CdLyTHozr6psjg9ngzKSh9WhR",
  "key11": "3WK5aePQdW6NrHYEsdT4VyEWKu57s8nJpfvfEczTxBVEFoUNQd2zLoMZTxv5ue4LsSDDSiQyVSD45gEQWhXY32nX",
  "key12": "4BoHYdhbwzjDV6B5LWmi8i1WwEhFtF9bSU3xUQpDqBWkg4V6nHccpMcrFChHKxvbGvnPMEFmtHpqwn9J8kp5XRML",
  "key13": "4RUYwj4kBbks4mQPYarPuzPZzRfgs4AFjvu6ZAgr9x6mAF9i55u9W92W1njzrbf5QKDKZHm8HQn1x6J5UHYf4iXb",
  "key14": "2KVGNEAE12KV6zpYWhLFtLTKKBiRW6AgEmmrqtmJ6mRWmdKfsiz8x7Ba656xMkmwsXVa5S5S1Yw2nX7WXk2z5gM1",
  "key15": "rVqCiF2fYFdkZ5XdrzcuZzsYmeJofLn1wjdLM4nYC6XV5uZz2XCZfpN3xLQ8KaWhS2hZsiaBjG6MgPYFi6kX5Dd",
  "key16": "4mPbcc7ZgXtkdryQDmxS4K4PBoqexfPxUBvfGvks9vGynMVW1UAwdSfiuxX2VeJ47FVXKTfHHsuQQ22B7RLPcjPB",
  "key17": "H44KXoBVa8z78WcFqbEZwmgmmju51zL6cftwUFHtawPp3k6y3piCD7XAsDjJwRVLwvs6jTPBLs4XBsDAQvzSbWu",
  "key18": "3Sg7PM2sj9H32kMSWse4wtDQtpV94oALQhzddqd2AGcQHHgZ5EM5kt4vZS2HbepGAoTHxMPCmkJzH765qtbEMgsF",
  "key19": "4bM9PBLHRNd7aNFy23aUDWCjLAHqu928XUMpdBCLFHiVebKBecne5r7XyQWEANXgiU3VTw2sfY98Y96QTMd41nk4",
  "key20": "2xP6vGcAMTFnfwsUqqeLeMx7pFaRWwrtrHQXkBn51qkaCWvj4omUci8Svg1nBBgiFV3tmRmbekhLZUZMzLLENGHB",
  "key21": "2oFfeDR2tg3tSkHomeVJCz5USnzw2wMv9NGKxseRsb5A73cY5JkyqG2D1QWPSCTQz1TKLcJwAnbg38rux8wwzvXs",
  "key22": "4cnhqw3k9fJWxEDfJAZMS5oqLV7prAQ8XbuxQxExnEhM58SE4fVNtyZZdjvrmwnzwnhsY9F4j9TWmQguznU5noES",
  "key23": "45aFBM26knjkD9gmL7gvLuL6eHchpnozFZgFr9msa3eevVY1hWHEt5Ntf52pMumFD2CSMyCBCHpBy3t4WLdFL29j",
  "key24": "52aEnNffPLqBqi74u2udBgNU4bh76GYLC1naZJsocsKRAL9xLC6mw7wHZmi1ecJgfr1r4ja7bADEQV7k425sHndm",
  "key25": "5LfFfPEfL5D5fyiu1xgJbwxosq3X6tCybZ7LnhedMzbcgqXNqsbEQFw3a9mcQQLByQDbu7auLPUePf2m6bY7UU1q",
  "key26": "2eVaGRGVeDYyiCXsKxsx6VsvJAxFBW6QVhSY2mWX32pju8voMZwUF2JvcRPquAc1eyfMNrauB8vtqBXdoZzQTLBn",
  "key27": "59xBCnZECHbEN7niEcRGezgXxFEtFS8jMdami9DcgYcRDDJvrmytk3Lb4QjhZeY3nFcWVrHoA8shXM14JZocsdW3",
  "key28": "49jUq7SUTDRo6YkZMdiYpob6YYorvBcRWNVa6PfXb4Cij4Y76uBf4mUZbCWux5wRqLXF8ZVjxdRUKR4oznZwqKTF",
  "key29": "4mv9Bw4Q4fMsqXQ5Xn7H4wVMhwrsGxRmYj24byWGJYPmoS29cQb68QaBGVd8w4X2gnh7wRqey3fnLYBvyrUGGFax",
  "key30": "E92nS6J9Kg7vsNS24S1BJ4RiSFoyRghKuD91yUWtJnFdpLAX9Hy6XnohwBNjsC3zcEyFM9iGW7XfMHMeqDWBeGR",
  "key31": "27JpoBj1Hw9cBPfoWMxtdwn8FJBqQie8RsH9QEihdyvStfdjxdxJPwq8XySrqnqeYBRwAfzp1ua7vFgKRSW1UcMg",
  "key32": "2fPNWHW1bYSnSffNCEekty48SfxJTbFKBvvghBrL3M8TLwG7ueS13EDNTNxTuF7MVw198aquiez2RChJsrJwSwYz",
  "key33": "3A8Zdiniz9wng6MR5x1We8yBkvwz1YiXWwNePLuFetqkuBZfbYwVqv5aenUhqM6eFtNcUpUMfnTbawjMrvS7dhNJ"
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
