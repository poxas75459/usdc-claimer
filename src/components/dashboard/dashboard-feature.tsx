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
    "44RT5LQP8kSBGLZHJdMrHgSt3A37ys2xvaNWUUVwBU2vysF83oTysUMjbRejBtnEcbyxBNDb5pmZzeJHX9QWkTMV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DcM2BhwnVLYCQHd7u49CEoZ3Wmk8HP1aD2yL8g8p1PWw6ASun7wtywAQDtCUKFS1e2itueCTquRJTSutm9F6M7B",
  "key1": "rqLipbZA1NHj2NZVpWhngF17a3TTDDyDbF4HXqSKqu192opnkzgtgSTFNnQgdCidLkqmstcb6yzouhpX2SmUR69",
  "key2": "4AYKJwRjS46N95GzE8RY6i3MwmeXGRutfj92P8vcge5GuZyftV1m2cet58GJwJd4ShoYL9BkpWjcP59XtC1Q9MEK",
  "key3": "n4MoR5WiTFMVWcntyiL2YA3KYvGsUG6RasHMCoVRJ1tNsn1kcynvkK9EGbZM1jXwB7DmiQ3xPsjxqPM3PF4gWXG",
  "key4": "5pQqGExhZsNSF2oXzZhuJ4yCUB4QawAVa8zT2Rgz6tvPXaWYarvgpNDjq7h7fWAgX1N8jXjTNEwEfQ1XcyKCknTY",
  "key5": "GngKw9DcLqCS3582dYQsouqKpWcRW6DziAokJAA5GrDpfnzBuVFSoWKVGhS4hFnu3HrGhsQpPKfusJFov2ACGiE",
  "key6": "3CLVg6QoFQJMQm3pPKLJXPa3t9N22Qwnsyb8ttggw12yiihMrPsYyKSeVCf36mEosH1WBZhmQVMAiJ4ZHLLJBCY2",
  "key7": "4JuE7B6uMZ9otQ8HFtg5u3b7H6ov76uCNXT4iLzx7fAPkZhEEVrfn2RMga1GQ9ekuin579pN8BK5zFnWmppV2rcv",
  "key8": "5KHUxKmc2yREEBp258CyMvXe6wrVpj139QtdDKU4vBCtTyNcVrFSenF6TFfyRNz3iX1sRMUE8QB4YdbChn5ab5yG",
  "key9": "4e7wsSFXgc4WxJB7Vxy5bf5S4SLyCd3KvA1wHM2DZGqD1DXQE6CSu8w1KigHw9ie5RDFamNYzZ3vaZJeGBW7csAD",
  "key10": "4wM9CKvCaDKdDV9bqRrWxnUkNjAS8aNXuAib5ZU5u5yD8SPR3hdDhrDV5qmpq1CSxULoR1abRptVgsC6r91uYYmn",
  "key11": "2PWj6ZmveKPGqXswkSTZmG5NZa3WYVR8Msi556co8Lqy6cxWuXn5tPDJEPJDjMLBNhG3Cyx2A8BbE1KzV6EgsqhP",
  "key12": "4JyKj78iTSAHeUVbGaBVzFainarbR5VvTEnG3kjRfXUF7gYvso3GnDp9Coay5sLnuZVZ4D3QV3iRc6ZmWrDoQBUB",
  "key13": "3dq7pTnFMUhXuyo91AM59KoMP1BCCnNgXMMitWzCRmZH7xkJBefZCABFJkNu8orLUhbYsXwb25Mo274y7ESLMpAx",
  "key14": "3m2u36X9UxwmJTb5fDPcSNE6RvCfkrv2DBpcEyf5NTk9RAxCUi24K8Ks1ue1ECXuCcfKs77djU89XPq1CzJDv5Vj",
  "key15": "3FvYogV93NWDL4wSe4XaFn6HeGZqPJhqGFGRJdBDcKQscWyTs8EN4MB5jD95Y4TRNTbD2jvqARfMamjdHtXngvNH",
  "key16": "wYFp8f8C7dsC7csU6BYhV22k9YQiZ7vSJEoSPeLxp98GhGSvcoz48H1d1aahaDi5r5qmSD4jGkHNJqRuVeVfYfQ",
  "key17": "4BidcJhtQjKioQmw1sNR6ZGDvszYJBc3vaMkUnRAifuvA66LmRS2GepXJqczotZmvAQ1aDK68fT1frBEgzdLXjeu",
  "key18": "DbXmt99H66n9AfU6tALmjBHE5uuosasWU5AtLJych5oFCR2qYsLZfjM49thu449AoxcsTc6hXCpFuRobyRtaVR8",
  "key19": "3x9zkqKrWBFhgFNa4LBdbMDirSoP9RPkiTrhve89T8mZSCjtEZHWkE4eQmHkUyWMhcakhpruyS3eqi9582x3ECqe",
  "key20": "3wh79snLvEMUxyZyzAePNSeJzWYds4JHPq2DFsxLv7rLjG4R8y92KYqUnsSA6iSUwPo9drmoiD6Sxp4T5qfwQ3L9",
  "key21": "3AsvyE1v91JgmzmCwb4yTwDaWFMK4vKUQQLaPWmWs75q9hxA7cfso86zbfirQ4Yn4XVBcvp3DwkvT52rWp8fSrho",
  "key22": "3oqRKisujQT6hvwYEmktZgTU4PXGTQoYhD5LP1EKmXBoZg97YKNLuctGN4hJhWuQoEzSWPuFYQhHwcjfb3xCfExm",
  "key23": "NbKzU65BfS5uwLUQ3gNNRVguyUXxaceUgYbTDJGPBNz9fvcxgnSEJvPxZPpR96YzaZn1tqU5N98gX7kf1fMmcq9",
  "key24": "4fk9ySFiawi5sADf1taKD5Xko7ABfFjvNQn3UepSZ3hgGeS2xBgVAhGT5y8m6JrLvMLwJhWTzvFbhgBbKL3HVpgs",
  "key25": "5XTJ64asPyRcUjmjKEu7KAzCRvq82Qp5hehb5hZYt6aLSrRSjKmdK1YjY3gdQ61b3PyjREmmfeiihysbYvTRWT4E",
  "key26": "WiMVCzdUKiDeH5DnsRMnHNGw1X1nooPnnHzGFJbo6jGno5GonHhnYCNn4Vdhv8B1gQTYLTBNdunQSHBBYeCxYpE",
  "key27": "67M8x6NhSY7UuEuBV6hhuQFpbcmodFxVgo7aZoNpKVpYC4reghh88XMgMdoHrzVLQR7MWS8MSxsszHG1W8MoCUXy",
  "key28": "2ndb5iAeTKmvAZQNF54ErCvjLUXVfadDmVB2Yg89fR5mhPGhihhGkJnEFmUEaKHdzuwi2SriCYHzhz6Zsfm4Nhie",
  "key29": "5fbPWrTK2dCrVgCErQUQryJEcLcogQ6fccUkdpYbR8mZysCDcz6wtZd6f1Xbi81YzaTC8PVHzyE8ctoBbAY2FmSu",
  "key30": "4NKYbigur86fp2uXozZKnZURFD4Ht3Y7wQDb8SFENoY421kKwGXrKdasT4eKSohQWLFz1pexzidiRdNUQ52SW5io",
  "key31": "PNgXuX9qWQzqbcXU8FsEzVnY8VwEq1QHtM4z9oCF1JrwPtQrfj7xjMVv95Th5YLCk9f465ARFxw6Wu2kuoNSAbX"
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
