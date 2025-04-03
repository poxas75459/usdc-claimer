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
    "4QyZhNdRV6bYcogyea4ZMeQAPFNff9gCLLTtuzWyJ3zCDQbFTBm7XLVHWFZvHiWhV77tHV4dR6CWmtTBW8u3rkqf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eEzjybdZWrxk9eUfBFuDqetjrEyBrQyLDRVG7NMW4SNZdXgJUrQaKheaDyhd6YJA8vKiacH876jC33dfWvqxRvM",
  "key1": "2aubystNe164tGTH5F7ScpNJ4nRsFHrxV6o9HhdxurkEBNVHH4Hz4NLaWmHcAe22CTz1QHqN67yCShJwfJzdHjpF",
  "key2": "3mimpeqTo4foVKowZgZi1LWEnd6KiMqMy5HjbdUKGH4qFAZUMiskPB5DpgLBXKQytUDiQKfSL8ac7Vki2issuW2d",
  "key3": "JMi2KyEEFTFvMaKHH1amuvKCiaX6cUUgG95wDCti8kufgTuAJVRHZ5hTyFGqUMRZZ19W5AQgnJnj9iap9phxSKP",
  "key4": "2dAeX8MKfHHNSi86hsdAi4DefdpnZ1fTNJhBpEQsw8BV6zexiK4oKyhuTzbjzx5e3dtK12J2BiqhNM3ysunL6Snj",
  "key5": "3BpasC9rZ6HWyFWNutHEcW7uFdQNUwaQTJYzuyHXRNemacB6nEW9DesPkbWWDWPgVxdVFrMopH48MUGG5aPcgdSQ",
  "key6": "4JB8rVLSfZBioq3mfKZ7MGgeKzAoHgEvKAuDNkwGFAk4B3Qiq52Y2Fg6ZpjUYpfeBjXVt2zwAfGCNcGZwkiKczP5",
  "key7": "2zFgGQ3sn4Cibo28H4481TGhuACDV618GqkCdmftJQJH6j46CVz8XSvqxJvAccuie9ZsNgyXANJetuQr3qWWDAr9",
  "key8": "hQchXvr8qQr7XATSb49CBrxa18C5ERmY8MFvDFxZyVNzGMPL1w9TX39qhso4zQsBTDS4jZQoLXYcDoYBQmLtRim",
  "key9": "4eTMC9qY1C8oADN5wmZ2VBQRxHrHmFvs93bmKdmqPCkynkDQomjXpB5nByYs6YoFtrLJKT7jAhjKYBXYh7Vj9n7K",
  "key10": "hPnmp7k7BE15UkDovKvRwj7rt7g86qDDsZmuKGmHoT2FprnpnqkcS3Yv8i1Rf9sTs7xK4fUoEu3sUgYvHyW1vBa",
  "key11": "3bbQm5snXwybHU3iqamU1FRUTredeQGKHV7q9u4ikPiQv2EP4HVguUkcuHGWk1UtcWn4Jq5ytK8HuAuiHwDZ5z63",
  "key12": "28MLZEYXVfdiPw3rLwg8RLAHFFRTsvBb6tnAJBeBZDqfpPiFoeRUBAPVJwcvBeaWgYfBnULPGvc2cnufnxHGQMPS",
  "key13": "4vKgd2R5QChv6AxfkwUfSBHX1Sb5CYa1PGsRmTsjsXauZPH4K5kX5WncTucCAWRywW6dibS3gdvtF7kEU56FmcAC",
  "key14": "2sHfkCnR1nvriRDoET7utHmfMZzsv344t4LiSGDVztp2L7kofGjkw4a12zpcymjv8xTkmuFj6WKMCKqkPrVdcQDu",
  "key15": "53g6gUb8DKUgDzJfyMvwfaGQDsphAn9MTUkEPHcmAoaTHzNtNG3DS5M3oRPQ7Y5jwr89yT1R349gn5cpuu81JDaC",
  "key16": "5CoLDHnzZT18BKUxFpXhtWPKfFGjTv6d8tV6io4V5i19c9Da3p49Z7f11UswRSkbhhw3NHTMsA2nbuf25JvZRyvY",
  "key17": "WGqEwSJhjTfzHBbiwkEBCeNa6Dpe3Yv5KhDNwqfVz9kW7vnuRNQdfmz8NRSnLBjQdffDH11Rwvf4isdBqmANPid",
  "key18": "2tBNLLomQYs1tGjppXMnzXV2vjnFA1vPXcWrK9RY1pmjMVYXArP3px7Cjn1wWTtVQQfbUtJaNfwDrKdjvDBvr49w",
  "key19": "4zjn34tqc4dxLXxVZQ8tJPGikMvgbufuYG6eBPTcf8hv6cPwqqggwqP7o13F8p7BVeHpuR133fUdkuTvhR2asFR7",
  "key20": "3owbRS1QWJvZXHST7kSLqw3pzrKPJeXkM5bFjtLTbrgccXWPhpYtTeE4ahjQEYpLbyGofdEUPAjviq2HbwJnR7ix",
  "key21": "5ti7szPAYgYge9zVf11cFJrZMVsB9X8YmRR7vn6jmb7FfnviCEujKZkd5eD2BCrL8tnU63wfQiAhetSKh81fEvpF",
  "key22": "Pfv9TWa5RyDpZVJZhwRPTWPFiHmE7XayJuCuRV6LKcA6RUpKUGKscPdBTQQXXAg2aLXsHD8RpAmDUViuBbz2P4z",
  "key23": "3wTXCqGRtPP29qhcEA5kjDiv38MsSyGJ6bQH5whQDKXNiZYjAxiCbSTmbDqYpmLyTnfgpc7AJnCaTH7CEmyCGwBF",
  "key24": "3MDVyTR68sENktEiviZVZdYXSBHFjJNAzLRzAsTvYTYPM8Wx2wS3dv4nzZRgRuZdVeefNBTWxzjkGZgK9L7ruQJV",
  "key25": "w745rThay3LPd1wSxtYHJVrTQhp896W58gaXJkRNoLd9wccRQ5rX7PrQfByqZzNQvmnpLwJaSdMNmR7LKYytoPE",
  "key26": "4Cbjjsi2Sx9duP8mFFB8UQ632Euhd2X2JpQaWimhvFRaDym8yRYt1qESLEreGLtVcekzfTwbwhfJju8uorrxM2fA",
  "key27": "bWXC616JhfStpg4Cabbh5cypasGNAWUA5igwTraLB1HwP9fRqhZgGuxifQLrEUdWX5QEfHkzksXbPwi6tokR2KW",
  "key28": "45tgc15GtUjcZbVTWEwMeGNsoUeir4wg1VBkXa5je1WTcUBSdwEW1pYqPy3U2nPwU9ydpJByZ7zcC4kRutzXx2LF",
  "key29": "4iphpkLbni8Dd67kkRLmeviYXo5gM2NLL8hgr8jbziUTWhRXJfnYWoeDNnzEXe3kYPGbwyh7T8UgmgnuobgzXQxu",
  "key30": "4SENkinkeYiYSqs2wPRn4VvZha9wHTkupK6s1y2bccpzk1dAXF843z5QA4td3kS5yZ1DBCrvNaiMNKhaZ5HJ1ram",
  "key31": "4BQRtDhBHfgN6VXkvYLyWCGmWjbRhXv59YRWnGsZV6YKZMAsqFAkjCKrkgYuZV9Ef7haGx2giKa2vxw428e3o5oU",
  "key32": "4zBAVZC45BrQeSRk516v1PXhhtGXT8VpfjJw8TPMNKJzVCAXVhX59v3XXqRy9pQNbdv8zYf2dWXdgGUMYCrZTdAR",
  "key33": "3k2jimHF5z6LvGP18mEnD5KqW6S1xfaQJFeE21C8xWjbL3TpYfnVnV7nCakhFZi9S39LZYJRGAsWcArXfv9RBA4N",
  "key34": "2WoxyadBBZH5tRvF1PUnaWEJ7gMTVsij6zwrQXbxayjXPYavFnLJxrm9XbkkgsZpNxEUaAHKrPX9dVwgSB2BddSM",
  "key35": "3jWWY3HJ4i4CDMN5TWKkry8rr7VsND4RpaDz4TuLFgvZtnRCi1mjgvYZpWn4oFvBupDyWMFbBnaCTRVhJRZYHjzo",
  "key36": "4BNiU6cAiGHHSWSWkwcjGLBr4Ztdoj1ySwTszSuaaFFtvC1xBAa5yf8xtpkyF1xY5SZ8XCfETjrDiRAU6rDBNsm6",
  "key37": "5ENsZ6TR3aKS9pXmKkLeyPaztzWMqJMVAPkFYEaGy5i9mx3JRHnLt3V4oFY2GdSQLuPAF1aG525LoHt1z2gk1ZaU",
  "key38": "678ggdTe4mDZiVyLdWB8BcDKH6NaZicAQvj2vBCJz4fR3z1B8uY5ucjEqfHFeVo3jDGmswHwPzZ1nuZQs6AzEQpX"
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
