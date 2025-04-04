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
    "2BDNgisrC4EBWRY7gU6hdFhAUKoJ6KCnSGY2EMGrKHo32zmLvzaKm7CFvLAXyqBja447RrkQbJxWUXQKSJtM122g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57toGqw9oeSTAK3VaemyiDHZiuA1HsmWbf1amvacg1TPW8vEjNehxUSdUwFyvY9AoqxJYRLDsegCbsgVDSjXzJuZ",
  "key1": "2nSNVShPJbani5atcm4Ux9mDqvVqjD28KF9JrWGQfopHpdK98Bgj3oW3rmkGDG4mv4FtnvjGzA3oXtR7uaTJbAk2",
  "key2": "25BUyFC1D2F98Roz1GqSwSd8vdohbVptxJS6yDzPre3cb3P2TggnoiAZvGUuUogRLNQt5chQZpC7K6GVaLX3CfNT",
  "key3": "2ZDv6yAtocjsYo41ETu487KsxFRzbzyLkHun1WBqBt12bmAJnycXdgpmJkTnJHo6Z3sbjiiYXcxZPdiiKHpvHoHN",
  "key4": "437FzS5VL3sTfvD93ZCpvfSAWd3y7KsuSZQX6rLyXhceMdrMaUTWkKaNLt9VLNxQFomo3X9VcjB3FjruN1X6EJpf",
  "key5": "5fk3DbixVnN51KUdvrj2XQR575EouzeT27rGy94W7HPD6xe3tFcNtcRTaRXaMMtZ5FtmZyW2MEGo1V9Xm8tpgYnp",
  "key6": "1bBv1BcsGx4XorDTEXc7TeYpCw4QFBY1HgivmRV9DLhPef6HfokPRRyzxUC9FaK3TLp9RmDpPjV3JkhudMjDviZ",
  "key7": "5s11s287kvfhsfvqvyfxMXM6juYeKTKQah2QYBZdi5zK2HbRmARenPMHBu1yom5L13KCc76jn2XyiM94N57DaLSU",
  "key8": "2XxyMn6M8WsmjV2UYfFyhmKZRauu1VKWmQft3DVLyz7jFGhxzycF6NumJ6Mjt6dzbkQALtdUE6z7r5EfqfCxxQBc",
  "key9": "55P1tWByz8Loc3dMbgj4CinWtYmjiamdqHoKn3uE2rVCAztVTJRWpezobwsEMoxxPivyjFP6ce6pN2KYnjrLtNDa",
  "key10": "5HfcYBPixH1DxyMk8vVj4vrVDp1kzEex2iq1DLv8SZfrh8V7EnBUUiS72LYZZwRkM5oQGtodAYE3HTRmLmiH4bgv",
  "key11": "4RVwpXenEBnF3CdFUcxb6NoTQCMxX3neFJUVXgtnnfGdKSJwL4ZofrcVEsuVZTBFEgXeVWDn5GjThHut5L3yJna8",
  "key12": "4Y4ckK7rrf4TuYgd9fdeTrqLHjBX1xMhbYtqP4CgfU8H7n5XkjiBDyRZ1qyyPx5EKaE8kZkyTKw8qvseSuST5Ewi",
  "key13": "5iAh4JG8hPyUCyLvC4zM5jehxuStBJ6xijCCKF8JPfNrJLSpTgAtvnUuXdqiSDH2X8a8gPfTmyDbYJiqWE5ycg3C",
  "key14": "s1SQfZBhJbRwpZXNLAsTgW5tpcYJTSbGuaLVHxewY6N8GW8d8SNr2NsgmzAZoGF9djPj7hxCDF1tvDcHDvYvA6R",
  "key15": "xKMGxZ1YuQX4EpjNYM9n8MF57D95ywTmZBudHzZCPC9BRsKeib3LCSogkxeEhmK6V3ZacQe9jr933iMRWwTX6ys",
  "key16": "4SKF6aYUeXpENqJmGPxD6nvRCwkE69GBz9AH8mmg5yoqRNEoMEFcAsPpgpJ4yBcbRwUCciMtSdnUPY2ubxLC7dTy",
  "key17": "71X2G7AHdQyLwdKh6eWDLibE9Yx8725k4vurJnX3HEDbhvL6Yti1ULzHAmKQLqJj9kWKthGd3axcFfBpefbQAbh",
  "key18": "4q6MfmsieqBVbnwz9m2VKDpetRJR1WWYwtHqsPS6jWR5mKenW4Luht6uEEfyenTV7Awfp33Xgs4cYzf19cBBPVfR",
  "key19": "49Ttp7aS9uvGAngoQMJobLSBvijvUpwtueKD7jt7TLpohU96AxFyTeCrguAGyCxWZiSssTByB1WZWVdYy9zC87Bq",
  "key20": "5re2Eqgfts5pxa3LBxW5FGEP4rMTQHSY68b7mJhVrX5z2N8muikMVKbLNnQzrR8okSmXctRXL4dWfvi8hLaTcLRt",
  "key21": "8w7wWw3oWPwmAEq7EZACnuvPRt2fWjAdPUqXKvGWWCDfMtcsw3vVGBaiRznaT6RUqdF2nCCswEhzf9xR9MKh76e",
  "key22": "64LJAM7ahozCsnSjWqjsJaiumdgQ4Yf2zeRbrkzq9QRky7EhaxpnyyBX4jdPB4HCsQXW2unSde9GG1bAiimj1HMF",
  "key23": "kXf3KJTMjtdr56Qxk35BSdQYNPpJGSAyEHDqxjYfwQ55Qn9TfAMzQsV4PsZuX9xMmuBVbm71K7f7t9soA2yDV5M",
  "key24": "3UYw6sapqeq8jPS4zWexZRXD7MSAHTXq62DRdH6zi4ocuSdHsw2p3ovSbsh1wffugfK51gQ3kEgchvtQHUZtFeCt",
  "key25": "5DTjMihXkXbmGVVjnibF5umtWnFzBzhNDkLfKviWfZKTLrdx6xmRZRgobSMHZHvLDek9miB9x8A53rTVDHtXt261",
  "key26": "4V95Ge2fmcQUgzJSwkkkKDtQARmpAJnLUJDM4AmgetvUUJMWMZh8p8n52RBm86mEtAANjUL4Wmv9yFMx4dA7HAHm",
  "key27": "5ckeWSidugL4xWAbtdSy5DyLmxRTahpNbPDadC1Ju5bHUd4uMJWibKdd3AgSesn7t2iwJeE2v36qxrmXFTVWS9K6",
  "key28": "49KM6jYVwDrMvGB66YyDomwhLoepYAESwxgQJbKbdm3YGh6Px35hMGLJZHsYYnE2DMPA3gXM5hdETyPLzWC4zw6e",
  "key29": "3gZMK9JTdRcKQNDXaBZF87mTf6kWYRw7MqR5ceDf69TESkW5RZ8SY885EdR298fM5Xw4W8mMN8iWbZi2oFekN9gz",
  "key30": "tvmv8pYhaVtVMinDtv5RWvkPZTMedJGR9XceJMsvdjTS7Vrxb9BAvcawbvCg5At1SabB86hcLQYwcAqbBmA6SeY",
  "key31": "4rpGimMFjP2GGdwoBqz7q6SM9b7xmo53tZBNoBnrAfuYUH8NwNRypymjtDyADhcz6T8x6sE16t9Z2KX6G3JPNP4N",
  "key32": "4GVY7BmdR1eokQUGWBUWexDyCjGmKj55mwAxmcRbvtHwuuVhUyWFELrHhYdXFsQo7kA1d11JsJRuuHkWReqShK1L",
  "key33": "xLLoejfLK1ovKJWMJzQvRL7JqymhRHzmXAEM7tNqiWSJeW21bZySZ5KXPKRHGA2ZZVzvMJKorFFYzVP7ZNGQ5XN",
  "key34": "3v8c7aCS6fknRnHnCdri3pqhkdnhatvCDyvm5c1sohw79iC6vdnNC5Z8RnaVygkaf7PkTrXPYTFPJbckucg3zgr3",
  "key35": "4WuYgetmHuiY7SiZ1jRzfAFxpBz6CKVcB1KpkT2dn6eze8acndvXSopKK8Cc8aR8DTAeHKAQJcQr7n86ecU1StkR",
  "key36": "35FFQcBwx8vrzzv23eCRVNTbH8xBKAhaz6YQJbpiAqNutczqx78DV4mjjXGdhzr68xmLWJReQLCxk8hEVz3HsUgh",
  "key37": "3kAm8RDcirApKpCgmEhdXjnxBksZaFxYH7XeSoPf6mwnYvgmkbCw1AYMMz5tvzDVoKJ6c8saWGWJYEN9s8StVX2j",
  "key38": "FajtFZsQ647nGBUAWyPeLQgxZUAr8uujFz3qXLPukzLgh8S3AipHKA8MrFCGrCL4KPpkF5JvVrupXzZ4G78reX1",
  "key39": "26nLqawQyK9QTmTGdW74BAQoxg5aQnfSjJmxALbcCQWs9sJ7poTXypGcfzggMqTXgXuwvggBBfT15iKtG7PKW7qr",
  "key40": "4Ghw7aFLBD5zTHSZMSgSmF5sos4D5pNfXUbcmM19eFHpxfS9ccaVE6x2SX9qEXX1BELsft4wttQjNizMbBsAhvni"
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
