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
    "4SutykB7uqozmJasBcjCyanTMoPYJSbwPaHA9ySTVHuWUXr92W5c8863VDGfiQdyfQyXpMgDJA8CfSJ7sr4TLd1C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XXQjr2wo5wRc5JZTGKgARKD1aC728fJ8XYQiespeX5kFw4ENR7RgfnHAkXZuNjLDEN5iuyDPkZzExZ66HKsn9sS",
  "key1": "5yKK3nxCBBahYMbZBRvvWvnYyRsjRvzSNph9D99FNhZ14rfXdrxKVugZqQZipGwQnVdrgJPZrjmSt1cr8aTYQfHN",
  "key2": "4AjNt6gj4SvdZX9Hn4rTm1GuTYD7AdkQgEAfLPQ7WermPSBXk12xAuwJ3gS7VTn5WcAesXpxJycHSRNxGxiAFYSc",
  "key3": "5VhUszFf37tQZcK7XhbsirQcoRof5FBSJVLKQSG36Kr4RGPyQXKyh2MFCEhCLPQxBRLQRe6qyD1rAx1yuPzpviCf",
  "key4": "FPWqWPFe1dR1Q3twupHqAMvo1vndwjBrYp2g1SqZ85WQ35yKMhBaktqUKsQBCkZWDHCuPd17aLVuVZLbs1mPBfY",
  "key5": "3mmWW1nu6zJcaNo3kRtf11jY7kDD5HyhenNFZCirKLTxXRPL3huhe4J495Xs1B4KtjeXd5i38C238XgHzaU9tfhS",
  "key6": "3yTQofaLnifsi1sqj2jyTvUEErJYQtYxwKatoFQwXgHpKLnPGG5Y6ca9Zrm9wxxQg5ZtpA6zS21uQi3ibsXzGH1f",
  "key7": "2WyZTedYifi6Cmj3S4Lugv9gMCZEnsV8PMFWF6ycLeiw7grdot5jGzCh61UeXto41aiEEeGaTfdq1JHmZpvsRyNq",
  "key8": "5GNHEzdCEoTz9VpXYC8emovEG4Mi3QnAJy7U5neu7HnkogzcVLowqmFWZpe14wLu2UHQNQjuJ4N6napjdDr4FUKc",
  "key9": "5Gi4h4kQsKCmvE3nCSWHuFuT53Tzs1mXjYUfucUK35yYYbSMM4PrY2viXbcyd4oPnmbt21keT4g5MsqMQuUciozZ",
  "key10": "tXR2mAdAMhTXpXcraiRiCdMY6DtQFRjnGwhqVJ5JnHFSXVizKeiBxbjwrvDfZL5fRkC61SCf3TJ1HzVjHoELmLp",
  "key11": "4WZrf9SrXUxBu8LpgDNisFLxceem5RtewTYCXDobGXkdyyUuR2R8jvxC8yd93M4bjc2QeNRFHPJShNhHTbfUogGf",
  "key12": "4eNdBVxXALW5jRAnCojnmSuUfopGfmxRVxPMLcpjExecLWgX8WU2a9SGdcg4gWUb2wLpJ9r1DqA8jZHYxPCA5wbx",
  "key13": "288KHUxQvWgeUZWRSLuRYTsg9iw887h84YQf6JZwqZnZdXH1JszfQc4z8853rb4VtEnkNWCwSd1bwU8S36YHMrAK",
  "key14": "fJLUCEKfXv9eLL5r3Ts5CbxcE5DXQk9AVuNhobQmnjFMG9udDmja5GSRXDM3sFQENHr1jNpNkmPQ945JpV7vSTc",
  "key15": "4NEhvTDfozkUrb3b5HMVxATkCCEXC8mS3RaU4LeMpHUEwbbZeNWRy2u3pBcnggfVSyG48MbCxBRDhpKc7tBPAzFf",
  "key16": "3PCXmgd3TuKXb5HsAqCmM71F5N3k7ATs9RVd2X3uVXrm5q6onbKusihuEJXroK9uPuRNsExiPoJggJZnELnjLVf4",
  "key17": "4MkrF2oBeR7wdCCRwpH5ZHmheX9dmuoasKHi8xYRUufUK5c8eYoidETrpYGmXLw4QjmWqLeftm5WprrKj8QkHZ8J",
  "key18": "44UCeHoWRzjAmvcqqfHmp5gpqp3JniSSDYdz8MLT1Cxn5Ua6pmMqyNYgdiQ4Dvhdu8wKm1zcxcGrdbacHBmGHn3p",
  "key19": "4GLswrZAbZ3TjkKwd2kzEqW9CZux2ZXnBk7cKYY9UAnvKqiYbBe5RzKuRwo4X4eM7TTKtBpiphBS7S95mxpN191z",
  "key20": "41tzPh4DuE6nBrQzYH3oHdPQtiYqdAdd5KstMh1iYxaygouCg61YN1pMUD3sLBGv3HDYpyujwBpfu544A8VM6rcE",
  "key21": "5PcA6mgcTMkr6rkduUHMRbn3UjaY7xi9LoETLiwTpMkHcSwUUvqnQUrp5SpLnJxp1aRawHUrUiz5yMrDYE93R4oM",
  "key22": "4ccykyUBNChQaWztvhXC7s48hBY7RrEXYpHzz6cn1g5aFnSm6YgnX1172jMQGr27QUuHR3Cd65A2UDVSFPCx7WtF",
  "key23": "3hgzZKgZpDicKjxQzLx87F2sBKEs6CTYGUgbXSW5Jt4P5Zj9qeC82iEuwxqSA4Cxfgs5TBLzwbXZ7WBeZ9AELrss",
  "key24": "5UZXq7Q4YLrusuHh8LHVdVuhkxDPEBFWz7Nfk1Y2Z7sFZeQLEwoxQjx2zDJeMubuFw2Ty5knLXYAJK1fx1Ki3ruP",
  "key25": "5kRiTX1RBUQoMyE6mKZGP9WJA3DwAN64k2PPi8R44Si6zAJPZC8Ry4CvGfeiFmzZK78Zkj3cDMeAg8fEJeJVnASF",
  "key26": "51UMBoekneDVsJ5L52GkwVn1yoSFEibWNh43mLpL16DFSE6oXo3hetEtyLfd2swyj7gJ7NUMSaMxUTkpvai2sjMD",
  "key27": "VFFAEGE5ofcbCWP6zQx9DHHTYb6Boc7T8RKAze8MWnguvJg3D148TpKkT7AGw3YLgNvPg7o8sR3hiWCDwMvP5eB"
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
