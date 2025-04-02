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
    "5owF36eSH8yqwdSKE6tDscuQAvSgY2B3PxMWpsmg1BctAp7Nh8yZKdYDr4g1LbTUwXoQsyFKErCsMeP8kkRzdhnb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ic7vSwYktRcMgUE4wrm5asjeocJsustss6qjYU3a64bYqXXPiNq1TmrVRAqJnhDyUjQ8YmQp5Kx15C92DGP1fHa",
  "key1": "3c67cvk37CvR9yXAf3NLtK2KTyCVhRQB24efAGmioV5RW2NKzBRfDqGBANXxU5BCLAE1URsYhKFQLG612XhnAFUh",
  "key2": "2bnpXgNhwysRx92MMYAAVyN6582McCXMrYxe3v1uS2cBN3PeQFnbh8WTBSqHKBWkqQem5e69DsH6ijoLTXcYfN6w",
  "key3": "2ueokDc148atCjt6kkvPvbYEgJQgBKXwk6HrL7Tyu67MReoFtkntn8BjApnPHyFSudCsgnPuANWiUurXCbKcGPf9",
  "key4": "33WDK2Y6a9RxPVswQUpdcQgU4s8fUNzSgSUAb29AqnLLbcBdvfnHVr4g6PaeYJgC3hUTmQx6yiBvz5JhjUEbahS6",
  "key5": "45qdrTE3ZHxjjtaWyB6dYvJ19VGgkVAc6QmJjeqc636mXxFL3FHy4SfRT8U9oCSZHuLgpZ6uWCxKN5m8KSpZDkRq",
  "key6": "uEiR9RPHeNxKigTeUgj1c2EP9xhrP8QLTThA1w84oQhxEyA86jCug3N8WkhmNfDJ1yQsa3364Q3h2r84HefBtdW",
  "key7": "41BvZoEKphPq6Ks82GDt3UfDmqwQkL2xyXEujkNCY7cP2MTsdxrv61ku4BKYxbs4QMxciP2f5XFxPSyt7eLJ3T4d",
  "key8": "2uxqKSEYHMQ6FyVBkSm2gMvLbmkCCQs5z9csUUywxBvW6pto46WsxZivPk7ext4ecFiGHSERodLmsoMvtPE4fwhU",
  "key9": "2EQKqx6FmnnWDvVnzsDXhgDjDZqPNpQ4FohADEiR9Tr4CpPB6Qn94SKcDc7RpFcxbiGXb9mAm48BNpqgZSNfTdBR",
  "key10": "2LBwgVguN1vKSbUJSVQEUvt4ghny5VY4K9367Q7HYUBqTnpMqXb8Wus8QTLnwpkkVynD8tz7P8BuQTCwLGTM1da6",
  "key11": "4WnR9Jbmxb9tDQh9WAKUVzkHitqoyJfeRKk4pubgxWcLARA2UNAtZwcGUE9YhN5MkxDc33ZMFvYz9rTYRcazKhf8",
  "key12": "DTfHY8h4ugJqkqYP2xQDbRSBo8cUyEg87qsUCvtNg3L6SkcPat4pvY2L3qmV2Vdaew5TYP1ohJ6uPDXb8BiBDXc",
  "key13": "rcLL7KSUX9eoYmedAbuBtXTX1T7nbyBJevq5K7TTpTq7bQEYf3bFZCFvqhho13uhX14GrUWnU11MJxzfGafQaNL",
  "key14": "3bi5HK9SeCj7kDLwXqp8M4otHBtZwzdUkFzbbZf4TPHWTGRADHiMWya7c3PiGgKErH48tDjCQBZwgmMHFc4JXea7",
  "key15": "4fNB1n4J81UuVAnXHtjHGgRn9doooeRQ4GaDJzvnXSjCfGijFLE2HmkHnGLN6xGZcpmS6NUZ99XkpYgfJwQHXsLU",
  "key16": "37XoxmSzk7h7cAnokD2BYTgKAwtqT25YSG4qugKGd8ALk5qYJY72Q2KpZbVTDMJUTaxoEN1dFCwJPWkRTiR257Vt",
  "key17": "2qTZoCyP6Lo4xNDeagzCWF9ysPTQGj6hfUVfaH74DsGWSXAqrh3ew37kJPkwRNVquwkH87vwhwTW4iQBNum4RKKi",
  "key18": "xLq5x41JjgRvsPiT6JUffnoLi8SZLsBFDY9tDegftJsiTuqkomfa7vgssLqXhHkB1hk5XY39mxrcjhiYmcAfPNY",
  "key19": "WHF14eH76hPBLb6DdYeXURkyDmHrvZ4gMNvfYM63Ha8wCPnfJ4UKHYm1joXxm8K4y75wqbUgeTfELE2mgLYwozb",
  "key20": "4GfGx3GqsK7zxxKSz4o1BcT3MXAZXnXYdDk12pa64k6tzPpuUp9gnPG1ebkn1eyFnNyQiYVvm6iw1NhaVDQ2rkv3",
  "key21": "omdadawRWePAmEDq9TyQnK5hMQBw39oUzMoJXP3SdD6yRXYufdVjVdegVY5i1DZG4MvVEY9RJQ3uaha4PHKQ4e8",
  "key22": "54EZiV8HrwrwNHBmgY9toksYPb8jdH81MkXijMRBB3S1tmsrsN6pDsfYJBC4Jvd3KqUFYXGWVDtSVsksn1QTaY5N",
  "key23": "4znQwx8qrFW5gHqT3Jpad8UQqTmdoVQYeqTpPXvtRsoHAESsyDvjgoe1ZumtTf1JakCzpzDUN5ZXyHAYEgV5iBSW",
  "key24": "31AAAaMnciDGMsUdtrxx34VrbtLcCdSCTrYqsYuyt7jAwWuVKBc7UbiTe4DGQZfcpHfbtnrQQf5wcd8ENe1R5pT9",
  "key25": "5RBAT2DYpmFP8wfzx5HFskK2dM6PB2k5AZauZ6Am2vcnd3MTkucUFCUdppmw1KParTixjdxP3HYDhFUsxwuWsboK",
  "key26": "47b2ELuXdBUTBMZLV115MJwWisnurEVbMNGumgnwdGd4FXaF538NNeP5jcYGDpUEdwBxAmyeF5bLCJeBSmcCavTd",
  "key27": "W8ZY8XEHREjU79YFj6oE8cqnoPpnjFoG9SnZtJCYhP6FgbreJtwc1G7McpuDDSXmbBP7fnRWBExU5R9H2bUCcf3",
  "key28": "5Up7UCYbn4aDspGiHV9jcK8F9H7RSQ7iBeKw994b6q724cK9rFAUH95dmh1TtUVFYVxfNQFzqTExDC1XKacZtPUH",
  "key29": "4nKt7RYaTYKxwMzDLGLZMoQQDgihXDoUFALnGBQv61KGhSKqiEtgcr1YNC7pcKz8URRVZTfjQdtRXRyEyxzJU4Nr",
  "key30": "5BmwJC2VvJHEeKCWfh8xMfzsb3Bgdn9JphoJDmRy3v5CzVGardhqFdpueiRFVX1794pBqDE5TZiCv48xoLz954D1",
  "key31": "5Kha3mYNtdDjEgY6SDJeJ5G1Hf1FmocFmSzYMhZ2axZxpm5BMGVVeFSZhApq7fnj8U37dXvbH25AJwr3DmeGAtbY",
  "key32": "3avEwgqp1fPELyjomTU4BnRn2Fd8dgz3HSA1kzLbqJnxvTrPLZ4KKm6P7KTqyksrajcuJap1hRRPRCKfYBeopvhj",
  "key33": "3aijKXisJmfDUcuqehC79cZeG1UGvgpTM8SsH3UFpLWnVs5oXrnkfJxWpuYfN3o89JkuEPBydhyyvP8noaTSUe5A",
  "key34": "Y5Lnc1ydjLQtGeh92CpMts2RqP1wouvSUD5p28QM4Y6prfB7N37JMEpoDLpvekeA9faxwgen4DNqVPqYRGmNGbc",
  "key35": "XJnMDGstmxFbfppF573msJBRkdW1hmxjeM5pWtt2H5bRTgLvknK439tmnTdks3x6FqU5rwyUTJGhMjcVpQUuth7",
  "key36": "4Xcf5vaqWxVHiiw7uAVrg6ssu4wo7BUg7gBhoyxHx2As8ATLecpUB7V6m6dKPbWkcpUxuP5Zm5QGMbaTrky3ppmh",
  "key37": "58kXTyLgy2mR8jb9uRjWP3naqWfPNcL8Ndnh4qKi8q6aykJ7WN9akErCVDWBTt1LsT5p23Ufw6wTMC5EnTgP62hQ"
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
