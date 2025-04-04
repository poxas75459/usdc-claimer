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
    "2X217epCxVD1ajCuheGDdLZ4HmuzwjV8E8T1LB35qya5V9Kcb1Bxwzx6CqTALvGVagZPypTw77kJkVWnh5wUU2B5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pRFMJBWRwnsAzmyM9Y9Mi8CswawXnWPaL2kMFiWi7ATDhBUCncm84gAUAfDoNGu5CYbdTSSaXLgcVg4pevkB76R",
  "key1": "2dCJPWDT1MrKXjvwnDuWvBcWt17xvAoNoARwaFg7vSJzLYVJ44Rg1SiUGdouxbrXRG28QSDFitxZcscgs2ZS9iWs",
  "key2": "4x92iG1TehVpkMX151MAsQu963j8kgpssdRTtJwGb3UUNtsx8TeiCo6g1F94YPyMbugtMiaLADcBv1GyEfxEaWRB",
  "key3": "2gFeZbgfv8SzNjYLoy6ntACpUqXbKdmou22rr8BL4eRyENDbr8W8A23fJT6YE63gn3HfEhjLqGgZczYwmD59F4pV",
  "key4": "64bVBbkfUxRcfXcX2iBzqEaPnkeQU2LKMUb3rs7C2dMQicFi1amB53tXXV6dU4mENpLxTfksU76NrvzypVqAt2sd",
  "key5": "2nNBGDyjF1h4df6gya2AsmczwaChaFRGtSSUL6PNqiMaoXY4ug64uGdauCozr75tkaDN6JqZ3uXbreWmDfsUyRMV",
  "key6": "G1vaYwm6shT1EpvFctzFdEt7ymSqKsqYW3Bf2UdYPtHAL2vDjMZGmzk961i7VjchB3SHgcdcrFntEpjq7vW9Duf",
  "key7": "3QoDN3XMAGYbZEk9zNuGcxKHamobMRCq2oEwa4MePYBAzPyn4GvWxfXtc6gNqUt3gmfoVuWxoY6FNidNq6kKHegv",
  "key8": "tYogbuFJLtMjQEQ4XJ7TzmnyAqcxCewhz5DMZE2L4HWgNeyq77St12pJfxzjt6Ltp6NsRUeL7E3mCgyNeXFM7iG",
  "key9": "yupL3HDMz5qM9nn11kHSGvY2uR1zWoxTGaLWECFHgXgediFQkrsKUHgiFkqKvQkKNz9mh8fGaK9m5zPDPzg285o",
  "key10": "3LHg7DpZZv9FUvgQ6kRXcARhM12bPg5mYZip2kWj6WUcGdNvTChsPCA1X8fGVtq7tB2SUYMRrPQsnqVqJNBa2miC",
  "key11": "3wF7mhqYsfEJvHFDK9s5NT49MoiCi8GasaKnierZeXdpYBhFTYTwAHnAtgWhAxn5JwvTtAT75zbokob3RoePEfjx",
  "key12": "5ZEj6AMLABAMKrq51g3odDutrt5uSMUsRQLM1BZWjTfcGC1oG5e3jZkkTFGMfrkLccxkqEfqcytsTtJNqMHnRzZm",
  "key13": "2v4unyawknjzzJrQKEu3zBhJuWYcWqaQ62nZmpPk3bSdFxeZ9WJsG7D9t7CF2mQBoNpAqNAvvWbDTq2vooPTaxHH",
  "key14": "4USrr8WjTYtpoNobqvU44aKfuCEBnL21XXuCexNLUpjwxhBrPZeejmDSt8WHmV486LdtfUdHJDpF5Vkn5bBfVAzY",
  "key15": "J4XeKiZbmVAzx2XYKejuwmYSUutPTq2eBJbZRcEvtCyMB5QSfddfUbZg5bwYsQ5zsbfS3rLANXvDwCWcW4KugN4",
  "key16": "nuBNKmH6KfUn2WMd5iHcq4eCwTek3K2exm9iSA5VerHD5dM9XWBrz5j7kKvLE8Y8MrQXGf8pgzBW7n5jX1T17is",
  "key17": "2uK46MCf7mX2kw7sqU9QNmmyrnJ75wX9Ls6FTjYWdu3b8gExh2cB6fKTXbe59m4HbYhebVQk3X4zDFmDStk1t1cs",
  "key18": "2HeE8TWg8Z7jkCcXVcQu6vJNDy2Ssbdtoos3wXc8YjUF1jjXhNuqPTTAuHbpULMFvgCTuoh4435awLeb9Aa1MUEL",
  "key19": "TrhMcWVGLbcQHBWnujy4qxNywkLCCxBMapeGgFVhKQd6iEWikc5sVHqtdNPEFgVn6vLWQGE9P9k71G16VQQELmU",
  "key20": "2WvwZigt1iBPHqdyBfzh9c7H1ymUZeipeu5uDsawtFxY34zDkGzdwKQide5zPhWjhSX8iNUYL31xhum7pAq7v3M2",
  "key21": "5YhSQRsRTGQgi28VntuY4hKu38gyi4kFLVNbHXK6geMWp4c7d6WBDfMbu3VoNSCajGKjzJ2Zp9gjBXSLEmp1w2vV",
  "key22": "2mCa5TCnvTprk1HeefJKoQcvNTarNLBtS2o5ynRWRsVuDKQuYuNh5o5mi2vTVyEE1uWFzQrsibXDkWpT5eoShq5J",
  "key23": "2R28rhpqjEgK51zusLZx2TfRnDA6xLgueWJgPbTDzABvUKysyYiV8kNZWm9dbB8DNYc68BLAVLpi9As3TgnYdTFp",
  "key24": "4oae1LAtySQvzMyJRAYLjnHmP7KmNp2d1GRSsW1ird7K5QhP3ydV3EAgETNsWdXYURXCceeenLsZxDSg7eqySYQ7",
  "key25": "26xQNM2fyrjdm85KGST1Bovq2xq2QnWvFgNujfcjtQu4MkhgjvxScQrFtzj9DMcU2uqFGFDMfBubFcLf13uYARWA",
  "key26": "2uLi336Ezq8MQwgdD4JEmBhsFWnbyFGGu68ddfatKJg77wnyMVrUqQZQyFV3JynFcJBB2gTPaMDv8aj4nJjmn8BG",
  "key27": "62nutY49x1CWTqyXJVLv2ihEskKPRRLMAgQNZsPnV1eXofTREMWLujeobtY1uXF2gW1AjjEukyFHWMZiNb5Rz7BD",
  "key28": "2guRN3tiqJiKNAEeLx9xpVGbjdMM5sgyphy2mAXL1N9viRbNTPTYjqz9o2idpw4CmjykpEnkkc4dfJGLhGJpnbhw",
  "key29": "3LJzSyhXjeCJmNV7RVn6RG896JeP7qk1xDemfL2JyCk8wPUT3Xk1CV8Ybdn8t1ix4bw1rjBp5d3M1eqWCMfd6WY",
  "key30": "3LJ6WtXnMXEYSj9o8GW65LZpaWedoWkzZ4RR1WC9U7YY5xfnfQHQLFjecvSFAtJbKGpAx5kBKejBE2Dym3BAsbb8",
  "key31": "29VG2cM2zwQq6M4gz9YKutysBh6JSKisRHGvV1TRxFCurHEG2CbRtBKvRf4dz2ij22VycPbqmZiSCt56wXMSbyPj",
  "key32": "4Zfe7EJUAhh9JdS5WgNsYzMbHvmbeSv3mUvUhHQZPZdX8P1WrHA2w5CERoVFsap8bGzBE3939XNVJJunabPELjGm",
  "key33": "4QCQ8TZRx5aL2hNrqpn5uzwbQNoQiurRdPRPTAk2HjMeyvJq59WLCssPk9zymCrhZUQTtHApy7uZBkkiytH32prb",
  "key34": "CaAM5uV4AKQPC628GvNuxmX5S8NrdjVN1LtAkRqiPLQVgZcMxCeoTA9KhsmDzt2S1mbDUn2JawK1o4Z7hHT79wE",
  "key35": "4kY5UfkMb8d46ExLTvHwNHZhXNhjiFSdCDcP2sdThV19qH79aFj323tix4qjUpMgX59RrnyNYJyLA8xrCzMjDZfm"
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
