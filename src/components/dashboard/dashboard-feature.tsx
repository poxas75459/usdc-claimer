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
    "2JDpcLR1Bi7b16Ysa9mWLo9MsGCsSXFNCkPPheZ6GYmNusrWj8RYzPWRH4ppBKhJjCJD7U4tz3ZbtwaPftP2oRb9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oBNZwcZK9aRH7NshVY4wt62kRaLdPWvGdJSYARQwTHQ25yY6mkyd1TQjxEyd41sYeYSVf4euh98Pbdv6DLamrQz",
  "key1": "24vFT79xK1URvYgeqQcvPn2voZ9uoiduYvCAGC5yHC5REwP4foBvZzSF26PaVSVnR5cw9HRawqYXGvNGDDhPQzdX",
  "key2": "2Qu4PbsSxCnApoyd1keLC5s36op18avwsMAYpfPasvFB2arNeVmDtWVpj1GbUa62t34oD62Vbd2zNJPr7Ms7gUji",
  "key3": "cuxhuwWg31HN4gJ5Vv6y9NotPTMKH8QCkcCG3TZZJ6vMPWSEdcZjSTr9UMGQRdqrepf2t9Mie1jBAxHY9Ed6r1s",
  "key4": "2JYTepBrqX1eksAvnLBj4FBWKB4J4BSg6nTNmN7sQdGF6f7ThJhDLjTwS23zvFuR1C4DsDxACkZWoQbucZLh9oVo",
  "key5": "ezDznrTB1d5FxnDPka8doGfjGXjYKE7nq1Pc3a5KtsYYX17QnJErr9Bc5Hg4xea9rD5fA2KCme9FmB3qLjce4Xr",
  "key6": "4vHG4z5RDFkLNBmYhtUnSUCvDeMRM3FfedPtSPeUnGYNvxFfs6qQ56UDS6jAA9SVuRBvePN3DytS2mroMLiM6jAQ",
  "key7": "5SHsiarrJTxcXxLLCz58WvAG252QUXxNmD3J67CLWPLYZu1cz7cDY2CSy66SoginUjXvymFwgo1sVFwoqz5RbTjE",
  "key8": "5RgpWWDaxcPQwDt4oeqJLoSqxE9RxyzsNuGLXJVepZGV9ASCz1pDBvZuv5LFmibJubRVLtBH6cJ6ugG8oaQHVzR1",
  "key9": "2rRNFxTE48Z4wtiU2XSU2V3swJN8Le3G3ZiKUKNUb1sUfcBkvrfLps619GDnXsADu4RYJtK7HWqbJPFnyNh8jDe5",
  "key10": "65GqudufujCnfw2imunaekzrCwsgb1oBZkRexj8iY6Fm7WfLg4sG5HbZsp4cFzHmpyJZQW8zaykUm9y6oaLduSzY",
  "key11": "4FfrqoozYEhSHVZAQtRrfKPuG4cUFNUvJawH7ctBAPfActf62B2L5PKFCyvwxefFW6Q383WA9gbbRQdVKbG3XEL9",
  "key12": "4zg8PcErX8tZFwqXifb3oRbcaWFq2YNgJkdhRGxpfjJiEoyZXLmzyvY9UaKwhb7qrEMkXqiwHdggQLSbD9uiYLAM",
  "key13": "5Z6rnrCtFpd7wPuHSTRrJuPk8C8U8Woufcjd892LipyCv56oaocXjQmsowB3HqgG8tdtnG2NxTLJGcNvPDecK9Fk",
  "key14": "5Uw2jobq1N3ud4aXXT1TiAbQmXS3tgeGjQ85hfuidDs6qHGH5KrTL7tVTBQNA6TgnvWGGavNvX4MFmSaPJY4AE9L",
  "key15": "2Dthrsbi3RW7RK3yS7nrfCzUoNjpGAPS85Myr1MJX7ZyYtHADacUcKeJMzsm3jgwtfTLPSf9BGYFp6NkaTPqcHtM",
  "key16": "4WuSAnqPuKk8aDeF7uaWQtSha1YsTQ3gUApchxZJJw3dkCFiqhyY8T9CVy7mwDZUSSMuFu4rkSbxhzX1GWcCazZ5",
  "key17": "3PsvJ7GtWMtvHdw9dVAHkGrKhvSNNSngDQTXb6vMUTWENE7ceNKAdUr4iWXkMsxQKkLWDCCKTSV6hKJb8YkGmqMC",
  "key18": "4WFQU86ZESx2gB1z4bX8j8MthwjX5mLWnThfKqgf2uejXp1Kq15WqszF5QvEP2keNxBG3TV6a9iJjDa8YxoQZGFi",
  "key19": "3J48DhUYCTcFjDojUaETRJVPKs29ZHCZanuiiUzdhoKpo1EzojMF1BwTchEzYyfrxqsdNhA2NsHju8KxivWYbNVc",
  "key20": "2r1jw23T6MtMe8f9Mtdg1jeWmNQvybxHYS53jAw1GnwFsv3e6NASZewUZ8DvddSasHGdxLH1MgnpHeVT8pjnwkbX",
  "key21": "28ineUvoC5sPUiYeBNhM1xVLsABafbXjwsHc1SKwwYaQ84yRkihEW3TU1TeiWTk6xCCRkTSwLEqtPwbDqthPKp5V",
  "key22": "34g8K8DBAqn7KUEWC27SXFKXVWv723tBFjjs9FU5x75xaofQ3ZS2aJU9zQcCrx4wFqGTp37kdDinqUrn2qcxWcuE",
  "key23": "4oL27bP8EgkE1rgz6bKu4XFyfnxNUkWnzYg8yjQ5JBRb5BxPrv9iFCqpqJ1E5rz4heLg6aAavwLRXW9e2L1NJB4c",
  "key24": "v4KAdmuYGGrr29kb8ABLpbGRHxLDzktHgs27SPGQPZHv1PPHGNYPzKdu3dUB3KMvap1anyVJTiUSPzLG4RRL71L"
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
