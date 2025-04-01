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
    "jp7brE2TTFYUFcTKR12S7WJ6LA48c1XExYYpPnYv9S8dxqEjQoKzeeJ4NxYMXvjQoNp8C66aRfwEC7jDLEi6dag"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MU7u5XiMGVzSHhQ61imaUHLg2yY89PSZRiXLuMZVMxXd7YxcLbKkyzqDD8czxE8ypESwhWBZVsRoSMeTHHonJfK",
  "key1": "v2q5kW4fCrsowHCqoNsLDL4EKHNt5LX2wgkHWrbFYdpjEJJAm5fB8cL8YZo6Dy7AM8XXjXZGCLZ6YfTSCw15Ry2",
  "key2": "4DFfS6pMSUi5vSfXkeqvG9gbDTMk7XxFHSAr8wgPxDCcvB1WwD2y9uQr4UoTGQ93tVabVMrsAVB3LwXxAHjYjUXC",
  "key3": "2E8Yd3BF4Z58BXYisdk9DBmiK9UWv72g68YZyqvsXsK745qBRd3orGrnh6YUVgGu7v1rCd8fwcGwFMMGRZrdZNqc",
  "key4": "eX9o7keJzqgs9nhMzbdEgcXtvsu123LTqCd4mW6d8ZSheMNdtep9Tf2uxxGV8xo6yon7dqAmuC5fdBT7u5DQATS",
  "key5": "3bSjfNAEP2AFUbfgH5ac5j3SMRi4ve5Jjth4scaWxFvgtPvqA3XHozoUP1hPyNvwFLVkB1AQdgVjZLZ2qx3J8tZ1",
  "key6": "5gY3LXbQbTJWMbAcnECNGEwBAMXzzuhd6jeyp6Afyj9AEYey9hEUaYG7nNRtwPB4R6XGL8EKEy4XwtPWo5wXBFeg",
  "key7": "44WLRX7eukHpnKTi88V3AH42oa3q3kHJgJtkuqP5188Xg5zM192hDq4uMQac84ApQCSSf7fREvyAWv4WAmXXCKgz",
  "key8": "4C1YS9DAAfEUZdHp3wNB9ye36buz4ih4o9CBf8tgwVcQLLSRiU1ffZcJSUMJuxVSdq4Lq4RQRqPaCPrLQ7X6RWjp",
  "key9": "42cLDERq4vL5n8AKj7LtdsiVgMPHNiMnWvD5yDUyTB95GfptSJbuKfGqWyYBtGkm9APxLwufA3jtQsjKkGrQ58JF",
  "key10": "3qTjTsWDmEbkGV4D1inY3r62TARgCUaQSwW323zSE7GAanBFxkVuoQ8axNYnAQFCtQVU3YCoz6ppLMRJG1QGx5Q5",
  "key11": "2vyqAxbVEMUqkBW7BXBMfLLeHUnatLWsKmd8eBZtXBcF2G6HhUhysxwiKv3MweZERW9HkKCaKcxTceXoQtVuV9pK",
  "key12": "2uuPXvHapYnAf5EWztPHL8V4v8ziR1E33kTBA9NyEteiWCvv7vZeC53m7hucfrW6e7u1dYQSk6ZUady7FjrZUYr3",
  "key13": "4QhcyGR3Ve7dMWUPPk5kNxumcL623yYJVhzdp8aWExbPtqsDFkU7YKzS2RzErMeQzJbTao6jx7rJ1jVJ4Gpg5GRu",
  "key14": "AcaYmXrT79fA1Z3ZNSRQXooCR75zKqPeA2Ky83s8a9ANnafc2BFpV68gS9UetVTfLHqtqTfnwDph4Dn1YM2iegG",
  "key15": "4jRD1obQvVgnTWPehY4VFKhDWFyfPVAQV2g1CvYSWv5pkMYhJTKRLe1iPJFwAdCkiQtp9h1CM3rfy3w5TKPvhgKj",
  "key16": "5KtdMnEjsWE9HypmXyqMoEhCb2AwhgPpkz7FeFSz1CrPRWQgMn5czXNcXm8eWPCRTKwQU9YPrpKxd17Jcp1SQcAz",
  "key17": "3NaEhSzpDd1w2TS8PpncKz8W1uwLD3dQXGe9Q9Nb9XYEt3fx1m3785js1Nin7UifeTmKKrmuxTiFuyoZXrNSb5pd",
  "key18": "4RBqAG7GzLG9rgUMrt8Th9yFGNmoQws4ZB9eZFgrKcPx9gkpb53bv5ntpAbsJSuc1vhcmCJo7tWBS6V1d8oQKjuY",
  "key19": "DZDZyKJ5urA5gWfMgggLj7EkGWjsztgC1y6PA8jBZGKx5EcvYcQHYiUqyH2APqTamBZ3LVGVu1RhhTaf1hYFU1h",
  "key20": "4D724cjGzZyRaLBWMVH1rzsWmGqYiyGCQs8bbLBV9V1Dq8MiEKt1ZqSeBMR1Kxh3EAW64qoLEFQ1NUZvsG7DGaBE",
  "key21": "2nqWsNoqqgqtmXwPHDdnDAMqgB28qBdPNB8N2JRzV3A6p3Ccoq7vQUY9AcMNWfoXcq3xP7nB1DS2w6yYdkv6xdoc",
  "key22": "34UpiEaZyx3XzL6jWb242YPcbfF57FE47u5dBLGqKzgDYTHbr4tFgoftPXshcS8455PJu3aG5iiYq69teucpi5RJ",
  "key23": "3TZ9iQc87rmvFAWdyKG2R3b7VVgtuhdaiUrdJbEsV8ZCkpHWELdhhopADwDsDDagC2qZuWF7R7ueNMN7mahcmE51",
  "key24": "3G2MVeZMTHmt65UiubXpJKF5EXVVu1FdvgvB44jo1Rt9BYAB2FW9UZKcDHTMr5wTZ1uxpbGZWBtmwSkHu2LjUK1v",
  "key25": "2rMLQHJB4mhFuYM7haMULConcU8kPP62Cp8odH49L3ZkVTstowPGHpjuX46eirF1ye6jm9kzSxoZc63aGFvKssFX",
  "key26": "41hTJBV3q2skEoNPFqNaXgvzAG9a2SoLep3Hgd9sqVY7qnhBdCSdVfWpN2gqBXTwEQ6gJJoFVAStBs2Rro5CDE1",
  "key27": "5DgvjxaS3uryMguGmyBBaqfMoK9qYvmZx9ETYusQoAZvdoosyDntTccyLwqQH6PXjdVr4sKanXb7AGf6pZb5XC5r",
  "key28": "63H1iQbdhFFP4FfcRJp9auDHRA37xHUa4sKNsXjc4vKoETLymKDXRSAPrPi2Wva9n3aZpQfLs3fyuuo9pUtMTpwS",
  "key29": "jwCgormT24ijxjQr6jRqq6nDab84EW2HcKc4U4afQJddFmTbBirjbWfLB3bjrRWqmrwfd2aWz1zmnXAQ6sogsqd",
  "key30": "5Yo24ENbFW6VxC6Y2wCBQs3LManQ4GuyPyFsVGbMu3QVYeRJGUnWATVhmj75bkEC9yR962CC8pHdaFZieyxjZNdW",
  "key31": "4oD5hbeAeG3ajaZXFeCAUUeEpNaFKe1nXKYh42Sr2KMW7idfv7cTgfMw3XiPnNWmWeYCHM5Xwzg3CSDLt3VSxF4H",
  "key32": "4mrJRpur4M4BZX1hudZaiqqAH5AE7oH5A9PthJVW33533j8cBs7Vc8ep8xPrUEBgB1EVTesNZdNy4GweePy5jcHb",
  "key33": "443JreHV319Mym7pLKHfbFZBXZeSpkM4EggSBYATy5EZRDhzAyCjj34PXLEthWojFuCVeTCfn1FxmqxZnZXtcDVP",
  "key34": "2Na8BN9cgogSV9LsP8cRhQUnQh4GQCbnMvfNugA3gZWenT7Hh4nssmCEd9osPu2vdhhZom1qV8mDXt2grKjveguH",
  "key35": "3U1F4k6BdZgYk6xVasErd7X48xxVqudhDr9zvbjUMJYqdTUw6uZYWxs2xRQRkzkYLPNvC2KfqPwx26NoYBjbvfm2",
  "key36": "2HTsLDQ3ph4xJRzZoKEta3tK1RowADKmGCAysvgZykPU4BjhCmUj6abbFsAFiVTyndhJxHEKVFvR7DbiAZmz9Mrk",
  "key37": "56MKeAL67GYcs9DkuCBEyXvf3Zu4dtmfgYozadDtA1uTFaXP3rDvnxR44ez6hJTZ2on3htom8oCwvbmgpWQSNmQe",
  "key38": "34yXagKbdRJrh8Ckd8MMBDFjJvLCnKToEkikZrG2tkvqPytxddrcFiPT3djQ51BksnNeqM8AxLSEXNRocRuDhPjy",
  "key39": "5hsiWJBX99U99apvWUqBPGQrj3fwcCg5EJkMLW9ZiSFivnyYS8L6bSvwASKigj9GHrDiMuywuUTVb3WUr8jXZMpL",
  "key40": "3zEuHt29FXQQjAEmwFTnxqxrAu13dVjy3zTbpbzfpyJ2K1BzaeXcGJJBK57FDjJQrLDAv87qH4xDjKSpEXg6sDLc",
  "key41": "2o5rsRPVjEiL3GgAKVHCSHHKKsrM73uwHXfUdVT7TBCnTNZ4PydCbCEmmVNLD8nMTyXXkLZiMaREVtDmkDTohCYD",
  "key42": "VRS6Hip9TatNJQiLygDhAU28EvkHwSaFpKRT4dYes4stCwYbdDPxFXz3CetRCVjjyQ3v2wkDB7LgVKN6jDgATpF",
  "key43": "3cezrSNKLsHJJDsWXfRW4Lde6gCnP8CLEUmDs3PJX2Aa9ThdVFJ1LiPpMNEqfHVav1urNf8oNnaYzFaLUv1WPh65",
  "key44": "dsvrX4ig85d7Xzt7f3msfg2SfsNLgSpsi2VcY5REFKwrqbiUkBoUrj19kJ44HZqAZYjvk3Ea21NFJTxXVdjskwQ",
  "key45": "DDkNbfM1mKKahWGnnaeT2EZHkkCAMUsyabBKBhpm2Wpb8Jtf2ePRV9cp3zXAFvo3sjQzPCQEGb3shToBKUjMyu1",
  "key46": "25xAmQrJz6eGrk9rk2sf2EMDj2DbqTANzFEe6HDVecGGz2buNkWwKtgsygLnb6ZUHAqHDTdM6zZ3sNyBwa8P23oP",
  "key47": "kjHopSog7nZv8XHdmsNoQr4h2KE7bzDbPmKFp4HkhYFjMr8NxVuj2uJqDh12csweGc1woxLCPNKhvsT7GR4xqZe",
  "key48": "3VPMi8JdvDtEC8coh9MSZqRd8xovxsvCPKtu3vnFd4f9SdEfcs6ntUzkPaEJBEg7wQuDPMkrk24NwhQsXRyhnLjX"
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
