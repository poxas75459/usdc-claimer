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
    "4WTHxJyrtqD4eZJMqgQutZ5KoSQuaaVUHyAAtzyJUQeFiLiJTYq37vkVUyTowxJXZdvbow7ThfkdyaK4n7c8dnrL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qXreCqDzCae7nCPnjo8Rai3rYegc7K988V2nh3XD9ZSQJm9QjdFKPxX2f4VvZpTjtcGGF12nATWPYCyN45UuDE8",
  "key1": "4t6a9ESVVUiEaUgLMThayy392saBXRsdvU1enW9sBXHYBCXm5oETp8b5gABHZ8AkwTcusZPwdBULvxykZt3B1mfz",
  "key2": "2GZUW1oFyrrrQYmv7ZpYZT5tCPdpumN65WExxqtzQBYw275C1CgyumWcQF6Y3CHrqE69zFE1HzTkiA3G1RqinDYS",
  "key3": "3s56zCh4w7DyH7ysRTybWhU88jNJugznNaJiFuRT6yVzZWArQLJfceKvDJiPJ4a1mDw92YDKGsSEuVM2ynB4CGEW",
  "key4": "2RTZVTuwKAuZyGVyUFT4vop2bzCSQMcUv55NvupDACRuWCKhs5sfSv3qmr1zwaHjFhcQgH91kDThjV8SGC9vsq5Y",
  "key5": "5wzHytw84EMAikBchhgk9nP4ErEofsiDpUnF7WT3NL9cfzvvvp6ZaSVyzP1xrkH2ppFSSoDmxbd6egV1bSiGHF6S",
  "key6": "LcuZoHuT4Z4pRhPkHjPp89iUq1V21Xp4NKpnCkxPRs6B9BoBguK69NDwoC2KdkoBuJYeBGqgc4H37VzuSbigd3k",
  "key7": "222jySihuSnStxck6ZzCVEEUC4fMuqQ81eTbHqsbxhxZCpd55Qo9KCGyw3SfnBwd9a1YkvoDxVi1TEjRhRwHEgJS",
  "key8": "52sMAwwhd22LN5KMbkKwsZoAGGQ8Ugg1hZCMbdbD4tUC8SQcejdG5CTYegSBb8VPGhtu4eM8wKvNNejwiZ2itvT8",
  "key9": "UyZ5E156dnBm6s4p81YvhrHYU9PBnKGwnhtpSTAACshpgLu4eJdxauHbezdSq75zUjJfb12ZYenW7Wva2vwATcd",
  "key10": "2hc9MvRky3TXG9m1vDgYUa9ARfPUVcxifVPA2XNJcVZ4Y2tccZ9ZKvhqXRxYccBgHma9gBpja25Fkd12DcUdPeYY",
  "key11": "5rfUcmtpWSXkiDHY3c9KjDbZXzcVLPbaYXHKe6ZP6SH1ayvzTpED4w465S5FYR6NG1qTh1QRWhgFPW8dL6imynR5",
  "key12": "YV93kV5dxKsLVL82veMbW94bUWtRVtNCcCp2vQCo5XwohQpG2ZDeSkVyaBHdvfA98jxytg5iQycartqAAzBVDd7",
  "key13": "25LSEvd3rvTWVLM1kRgAfEQqWxg8payy72uioq6eFVmZNVBNGf96Wh87H1YZ9Rtb6joaC37jo91u4m5agBi3fjRS",
  "key14": "3fj1kSfKSZWwiTTbFiPvKyWoABucvB1NmezX3PWBBQSoHF6tKCPcdhX9HiW1yxFVQNxCbyveiNm8pb5r433QFgnV",
  "key15": "2fWBETh737ck17zNAa3wr6NdzvsGGwDAU5oES85bYnydyXXSN5MetnpStnmMtXeiAnNMhgvXYvhuCsfdafQHeKRU",
  "key16": "eDiyE9n6r2PsGxyTsruJmPMUyDeW4g7M7oNfnMhUPswAYKkdfEpsrUHPqNecxk68xUsiLPDRThmVf72LwxdzDUc",
  "key17": "3TgVwS2ToGFQvrCHHb8yMjoWNNnvQpDyeJ9QXiD14AyFcCpEdcYCW1yaV7mhTfwNYa73z3kvAWpvCArHDKpdC3Gr",
  "key18": "29EJg8QJGxohkFW4Ps56DqJEBxwUqGTSrykBmorHfaPVH7ehM33pRPrWpPaVYdijNSBsdVARvZtU5Cw5TFh6cR69",
  "key19": "3deM31jfXCVy2V5sNJCeEJpszLa6cPk6uBfLcvjaj5aWta1vPsXBnH1YiTbmqjun6xn5vTQc9yAg84P7qtorthTj",
  "key20": "5zpvowJ4x1sgRF8fHQRod4duhcp9KBMK8rYhpAXJPgCet61AkaXGH4KYHmVVzN5oqoze5azGNhCpP5rDbUfjJZfk",
  "key21": "8hovf8CFSjXz1LXaaXLUwoiaCuc8HwXrnzG7kVgqgra1C5j7nmABBkLdApc13ijAFzD1heBSw6fivRJMdqgDbZu",
  "key22": "2o7J1jQtVaPbyvkPyyLdRmCZVvYdpbSF6QS1z2FVCuQ4cKEniDqbHQJLx5XWvHt96YyPMUkUdDbB9iqTHTijkPTf",
  "key23": "Sn3d4aDLQYv963dYS8ZVPJqdePgnNDNTW7bUK54Rfwg4jABTFTM23zYz42dBC77jhMrdvDNsLHj7zKDnUtGPv6X",
  "key24": "54UfmFVW87huaCzxUYyXTLCYNGGT1so16UjJt7JeV5u6X4iYoSNkBiYNpJPUydPN2Q6DrdLeuoqWiJHRk22kbG7G",
  "key25": "4g2ACVZd3hgckHgdxoxjBTxiWtqB7MJcaZ6BaztaRx6HXzp8buRMQpW6KmBxfcMi8o6yTXWFTqeR7mpyyKSeP9TT",
  "key26": "3XwhP4zi9wHDivbTYG6C5Eb6rvS47HMiR4jkQWaxc1RFwT8cwwPtXHhznUdJWB1RJTaaLC97GTE9o1kYpjWkW37o",
  "key27": "4gs7Lrb2MguTrjJTce6ZW31aBMdcYWRF1xf2hfYxFXAqajHqqaN4f7o6ECYViiBVaypdvBnm7998aGSgbDZQnpFS",
  "key28": "AT2vjSxpHJW98wEc3pAAsjmiUMSZYJeqRrthTwHX4915Cgcgw2KWt5USrYJR46CHB5RhriA56kmfLSM3aYZ1vek",
  "key29": "5yPk24BzSeAFoCeCBphwkxgYkNL21fCQFhrdREYLSFTHJfSgPZYJeoAAWiaKApUSqZTMCy15Bb3PbGFcfoc5aA56",
  "key30": "3uiwncgfXfvbkVPUBpDgxmySe5N8jGXNBG9iA9UEm3YPt58MaBXvgGfQxwpAPMBoRgsJibdEWxA77hetNQEDysY3",
  "key31": "3yVTpPg32cKnU5WJsp9nke8iUxro42PAoyojbKSYQeRDoJ5aQrMHCXfn1X5sV2S42vWgJLUpwu7VYDqieUwFhr8J",
  "key32": "3PkYwBbPdxfZDEzBwGvjXchFEQTLddrSHUiCq6gFvQajwd1ossYdp1zjcK6coyuYSni96ziSEqUrZy141UpoX54k",
  "key33": "4nKVHWUWEAfrrwEvpCunSgEd8ZJXL64N8qSWcBQX9eaMPoRgLDZtkZ8L5VTZSnS237bvM7yBve1sqzNpXQSWZ4ee",
  "key34": "389HKEomFXyNecMQwWMtq3h8Skx1fSdRdQNXeWiSAGFazzcRTULMTFcrkKZzpTRTZjCMfzy77VEjvM9wWzP9zUB4",
  "key35": "4xjiR3GB557WbKhb1fCAn3k8LmjUQk51VGkQyyBNcdYB5vzFMz2GEPKrRVjMPxDNeSQ54ZCNDKo9YZN57b3GAn6v",
  "key36": "FhY7frqash25YF4DNVZxzYK8kxT4zM3iYV5e4YP33SNtk4daTSY9ji6Wqg1Juo9PYB2Umi3mXSwaWpUsYVXuBhD",
  "key37": "39cQzSHUNfar5MKQFk45tNiVKeZJsdxxaeLbwpcUSGbiipgB4yvU7nNURxkWUTJeN21o3T3DYaw75dqZ78vjKKBV",
  "key38": "2gRxNTkhGSFCyEHzb6nyb3h4dKknnkHdcsVRBgmWSTrSXssawTgwHyLFmZbKYVXHeJXxff2EKGHndUdvijS8aAkn",
  "key39": "2WS1Bkc9aAfXmdD5rwnmvQp5pFpZ3NiTME8cSUKhNax3MzNLhMrTgAfUFR2kTx2kfCBZBnPznv45D7fuRXK9UGhE"
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
