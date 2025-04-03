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
    "3aNtwCPuPp2CYP4nqroJnCby4na5XAbu6qBjuhxzjbGS4Mt2g5rayot32ScXdXjNqPu1uU9bGHckmZJtC4oHwpBC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65CooBCDRpJg3tWX1Bxmyt2XhgMbhzPJCrKHwwHibTqw7Are9deUkLNsSns2dYyCEYNfdsxXyYWk3gRaShiTtzeV",
  "key1": "3RoxZedytopPp3SCUs9qHqnjZa8Ynzpi7531yVvesmfesgy4kiNB862zJv6Jw63qhNdznhJLAFDTGcoNWPbkvJTx",
  "key2": "2RTfPsim27Nzt7weBUL3K4C1KwwmhXhFqXbdCycfRxgUS1zz2ssCFVAFJLkhYmofCYViHtrSnQbwKPa6yAAJg2MG",
  "key3": "5wWDeMESgzc1i4Lya7m1UbGzMVBJrARiwPgwKweGxTnm2oEm8xCebrJpEPfmPfoXs6nFwvqNSXHDCPdHfioRbLAk",
  "key4": "wGHGpRiWTrGpHCjkmDNV7x25Nss9VaoUWjUkNYX6vtrEdFLzke2PwVtrNpo1vd7kK16JwA9QXQtLGWmcfYoBTxf",
  "key5": "3SvSMRT1Sqt7jbWqCcsbecJvDWXuKNcCCr9iruYYU9eZBujAqJKCRC7JTmQKAUEtc1aotHu2G6WoLdbPNbGQLCeC",
  "key6": "4dqqtTAnubqH6GFie3qKW4LZykTkunWD42LsmzfJSrhk8ihCLKmsmW7oxWzhZsdBvVpvRrQ4iKCx3xLhj9h24a5g",
  "key7": "cjjh3KEUpajxHqL41Jt5EWZjrPyBuhKYJnCGeu1A4aqNDDwSa9yYKrV4ZMAJJDPuG31wDHtQmbBKU9nfj5FwRtJ",
  "key8": "3U5QnuxxWWz9ceiBUgiHCeaCaU9A9m1w14eHTHzGpSVgVFtKvukNsD3BWVbGPhQy6ALwvX9J3KszbJMmTPHhsqGk",
  "key9": "2EXJj3UEbizMXYPeQEyUQbqdZmtjWS6XyUY2ct1Bu4eSjxzG8ZjoaQa9BKY5tkbPFzc6WRg5AuG1kpFAP7yWpY7P",
  "key10": "4c7Vix864UvT26NSmhyNn22q9BFmqZpvs44qrw7cfyVoYU9sv3tHa7nANrfTwYkG8YbScaPbpj2akvAwXEbe2a6H",
  "key11": "5tbmwMWVbRuqayLoSMdYBj8uHaCTbUXjx7AGbuPpHrP2qkxM7agkHYmuYASRHgSxRV7K2LTkwt3QTt5kcb4fTiiu",
  "key12": "5f2sqRMJHe67UWZVMryDwz4CvodtaT8RzJUNz6EXHji4ednVxyBjj779xrhXKTLbmeeBp7AJt3ihLheJc8cjF5gu",
  "key13": "2Zr8rscbk3ok9Znss7RCBCvqMe4G5fTu5ubj7zRT2s84rt4kkkV8Ar5nbiwdP17SfYLKqhRtUU2yk8Rc7DwBm2mF",
  "key14": "2zjtCuyxtRLCZMjsiVvecZChABNApqzPcnnPeaYoVmeGF992uvNh2EcKFmEiAtTo7tRn5HgE8by4Q1R6TjDMFsXu",
  "key15": "5NQzYBB8XWhUgwHbz1WkwzFW1PADBTTeFC9935HtzwLgifMMaRxoKFrpCuGVstBmZ2W2ZY8yRRVJ3cf1pYTyen3i",
  "key16": "3tWdBSJdfo9Eoeds3jf2YrzPKqP1E3w95hAhvGfeJpp7Vub8r6FswyA6WbHGgi6gisWzAUkK3gZc4Nc6kAx53BPf",
  "key17": "MCAArYe1aEZffLvF7c64aXq75EanqkkmCm2QdWvF7oNDJXyrtaA5mHEfLPRQxNNAtVLvJ3N2pcQvu5wHcRsv46E",
  "key18": "4tiGaHyPz98edsLXu6R79ewLwduS1NTh9v9bhcpqj4FoFfWsrTcPERjNXyoiMMnP3N7ycuWLiZMYyB1f1RAAYvNY",
  "key19": "5JEqSMPHXdga6oBeun4VDs9qFpzDm45ianRcw5iQ1FdWhuRvHejVUNzFMthmWEE7uqMdZrY5fg9QXrnMKjHPfAgW",
  "key20": "5iJkNU6sS43fgVxqtWowoxJani8SfxajZWnJJwUxA7rK11uSU4Gcoux2uH1KXEHwUNa3MBsJDvAn9eWrpZ7AddWS",
  "key21": "3TsMx13PuVMFSz54mjNtZoJGoy3bubYR8zj51943mvRxipeJAxKVMPDEuNkYdzyYJknpmbY88dBqNeWkEqRZPESo",
  "key22": "43GYQrvZ17WfoF5ee9VMfNGfPTFWFg5NsRoEa2L4XbKdirwdmXZnZUMydBE6ZLczzNTceBBQV25ZZ7RpZjJEY2aC",
  "key23": "4dV9zcZj2BQL4upfMLr8QtoGEEmiqLdn6Esmvo2aQzh82gL6Eg7ruwCTRnGu9tNDqNZh28AbEQuCqUopcmMjpo4F",
  "key24": "5ZUWumzgSmDjapF2poakVoBwveDKxFpHsBdHLsVB6DbjXF5FnAVxpRcSTb6k8Qh1RoRNBs3HEY2CrjRHph8YKaDn",
  "key25": "4KD7mKZqMFjmSisvBHmYprpiVXvgJTdpuVBHr55F7JLdvjmRyCAr92apaAd46iYD5sinP9sWzy4dYzJ7C85wATkj",
  "key26": "4G4bLMH4AnnkM4ujNThYL8Dy69K5paQH5out27RuaywQopac8hEFDSXFmr8mq9w2bmQ2eMNWRM33fz7zjhBPrFaR",
  "key27": "2Y8mFfk8Q8fS1Gtc9hGWSx68JNVy7gFJnYnxBNozL9n1SqqPQppFQLgNQMAyBnJsnyLxaGpJSBQ44WLKjLeynvc",
  "key28": "3KTY9FLW45hZxcvrGKwTSa2dM9qgpkccmtSUF1wnExugaf6c7RvJqUNouR1hy11wPjxvWqJJ64eam6TF2S4KauDg",
  "key29": "2nw36GqPZybEaw5f2PkbfSEadV46zEqVsk5YjDcnkrnvETXcovCLyEG8BzMjPh76QHA3zqLFVcsJuadkHadQ9cdn",
  "key30": "4sDbwBhrwyifAG5Q9ZcvyL9cFyspLDLbMgqvBy4tLSw4KBr6X2dyQjU2HscawnDLbomFaQvohWmdYvP3wdfLpgTA",
  "key31": "3qb4KzYkRhgkzJP9Dn5q9mH8F9EBwscWtvn2iXWDmrSZg43nMB86q11RJY9kwerH6jzGczFSMzfJcxvotqu8Dz5L",
  "key32": "kHN3o8a1jRppqsv5B1Da7CffLfSQvPnRvP8ANRBk7MDV9oa22gPQKvUB8doWDwiMNesFWb8Jjon2U8KtG6NzzjY"
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
