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
    "581c6dQ7P963jxo597FydAq1pEyame7N6PWpSYMv2jLtdk1V4fXFoBJjhLjWPRCGkm7AGa9MtugrnnLxAU594nQZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A54HMr19r6cSsrCTb9KNXcpFH9RC29gCeQdGfrC4MX1PPwPRk7gPBdgFcfxZtgf4jSPVPkStzUEbYAPLyaFZaKk",
  "key1": "4TefoNoaaw6WBz7UBisVdZedJFVDVAGngTU8upzRb1RawRbpqZztQ4j2euSufujeZczrYib96o7gR1z7rbaHjXdJ",
  "key2": "LWtYGDt2GMxFsKJae5H1JUPJCLHoW6jiNgdMEjyN2XhER87FS19kXGuPvu28PqnXDYdDLDWDAdGxy97jdQtefRb",
  "key3": "4M9LiVE1ANpmMekJTyfvG7oZJWnedS5sx1ZKJRmy2v4v5AyHX7pUGjswepk57UibtqR19keAdyM6Y6PKcV1w7hyt",
  "key4": "Y9goCytPk9Hwbmx4MjjX2KoKmQQd2gtB3hhNYkZQsZqcacBaBGtwxr28Y4ph6NmDRmLac5HZGKEu6eerQfNmN9m",
  "key5": "nLh4cnpxPJf2tq2H4TZmbqE1MMeKejuQM4ffvevcBsJTnkEX4BBdU33emfnDUHAerBJAHCyi9PSQMY81BcJWvBT",
  "key6": "2HLNJYXiGeXPMksw9rzNkbNj8DGhgGZCwL6UWpeHdpsqLNtRb99ZiNuT6hEbCGHpHb8jqPasAx9vPt23kKeRGLBx",
  "key7": "2c1nf918cnYYYdn7mDaN6kcwDTmsUNx52soDhk1aDFY9VrBPs7sLfKX1tA2bkfM4jdqzxnKiSKcqQEBvs8vRgKYs",
  "key8": "4pLM2SEMqe3FMRb9DbryYMYQq8ddXUgErEEEKP3woFeKQpFtPSSBEdRssDpjevKD3CvDi5ycH2cUCrwkdZPT81Ag",
  "key9": "2v3W4bbrKWarJPB3Aaz7Siu4SH2eQSN4Nb32Fk8moniotccEeTuZLDkH3LMDq1D1ndNn7NFv6UujDX2q6HxpcBer",
  "key10": "5iUuQaG6FgFSTGdzetv4jwpH6BDndhzv2VuZnYiAPujGMNHxUjzVEwXxTKWnJjVwk97RAVdP3GpNiUJqqUJtLToj",
  "key11": "3sx4uyH7qDXGTE3KDFuXAkrLQsUsHKNhg7kvQQ6Qhc2iiRxRkaNWGM2T252ViC7ikfuxGzUekzX1tVvi65Lzhm29",
  "key12": "5s3PcVvFPHGKzJbum6yFxLD6uAQGxtnpXu1VC3KQRE3Tyt19JrPqAQ55en1XNDf9yzm3CNguzibPggNcc5nVZa2Z",
  "key13": "3gyovfkTv8ez2fEmSW3CJaEPkkc4fewuEvYCmcJxcD8rCTUfxdoHacDDuNbLhjarb6AzuejW4T112akVYDeQ3v8r",
  "key14": "4LiKucJjQ3scuc1swBRZ4pVgSdxmVT99wpEHPipgNepF2ZmzaRXY9RxNxLGe3AtusCufwEtEvUtEzbXVFUxZujcW",
  "key15": "3pSicf2USaeNEbJUkjmBnWoBLwRW1hL1DjooFBB9ndSX467in8bWfv1MRZJBJdT4Rj9JJFH6sePJSiJECM9P3QJG",
  "key16": "4xuUe2fK6dd8AEBtA84WVmotyns51WvpPwKj4jn6A6399Z39nBtJf8F3ht9ZKSSnS7UprHo1EnWWqFhAuEPrLyMd",
  "key17": "2NDLbTtUSzvS7p75gkqaLiGcuvb5f3yvviVV6KdeJ3TuihaHAgvG8Q6Z75cdQST2654ZfLuhPW1Pq3p1NVWg1Lu",
  "key18": "5JcD3YUxrGf9jdKyXQVRCy58yiJJY9HamyfArMuK84Pdohy8Rpk6iAFdzGGeTcMpYA2Tffsbys3Pv15dNCtn4cjM",
  "key19": "4b136GeHeA7GkXxt3FeHNif1S5ji5MmhWsN4vtgKCTkfcj6Ucy2DPBt4QA2oiHfdxD6MU1QWbkG4appsAux5dFnw",
  "key20": "5GvRcZVjDPfjq1iLe7NgeNL5MjvsyXz1Vx6TPNSUVt8Q5g7zwsiFFHPAkYZ6FSMVDpLZPAfJEHMxcKCBzdqjxavE",
  "key21": "5pjJunTLtFezXTxsHdnGeMESiaZx89qEQ7KpPszDPckvwtvfyxYjjEE33r3vTdyYR6AMvzgALpBpPaFHxLVSrgwZ",
  "key22": "4CZhqUnzTGYYuAYwviWp9adWYzujXPTxDz55qYDtoq8wuVhZjj6LgvsqX6Z44tXxcJ8uDsY6sdeL6G54aLRrev3Q",
  "key23": "3C8NRniGoaNLoTBPwWE4ZT23gT69Jn3ew7ETYpfZ1DEUxpChKZQA96E4gEn7kDc6xfYaFWc8Sc2roDzmVBzuuX4f",
  "key24": "3t4dMSwQiAQB4mCpCVdDFNDxKaFXKcPZs6nmw5XZRryTSJ8zRcXwox2UMybDgCTyEtqZkFHKUhViUkwx4oU2TvwR",
  "key25": "5FUbQdCjYMfYHafTK4r8xbJN2AY3hQfsnMNLhDLziDSM6V5TUhKJ2kZEfxff6XXJMZ4fKGzgp2DZhNis74snHi1y",
  "key26": "2cVnCBqJqoeGoafvJc51t3n9eVNu1FFSFmFhRkd6H4pgRp7WLBwShcZgTfXwzH5T8DeK4QGvkQiH5Je19bKgyAmJ",
  "key27": "48EfUyzJzKBDHfr8A68WxRJGXge9hWN2mCigbkELVhKGhv7yy6f8CtKyyRjKorWbn4XjnRFcoEZQRVcPEWmkXzFF",
  "key28": "346CqCBvHeDSHF2t663uzUuBuRK9Rw2vnTB9FwaiPApzLDCQkUzDrSCi3BQ3mvztkyiG6dnJKMwK6iUbSwpiyKi3"
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
