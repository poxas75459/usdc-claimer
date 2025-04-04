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
    "4LGWabYbdQYmeB2USzBvxRMheuGxsSZ9fm554s5DtuNX72tYc5wAnkvA9XTpicJUxHH1qoFayFjw2BxyuD7bbMsM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5957bxx5y9hXv1BBmVzptppAWukEnBknrSey4pVk7N1ocZ2Tj6EdHJ3Ncd8fPCnhkcFrHSennriUZEmzzR8y1aX2",
  "key1": "5YxQvvoiKgSS7ATc6ffWwtFBpNtHi7DyMVE6zFyq1Psgn6eA3s83zqmqdAMuKBLssVNhQR4qEetovYzn9tqPGcBz",
  "key2": "dQugXuAo9pjfGaGpZhy1QMg92qMXYiunvJdbdciXR6R3b9cXgm8jQRSLBMQVewA65yncjmPfVmVnSvNtCKTwkcx",
  "key3": "4VKz89T9h3vwS59DC8RrxWeCFYWLKzP1f98HpbUhTXP53EEBP4sq3mJEczgXmQoDg8PDFw515se7S5DaEupN94q5",
  "key4": "4ffHq8GGKmTvZATr4dsPdRsVpwvBkXG6CgWb7WTjSoetiYxeqXX1yUuvFsJydmFaWZP3yJ9c39NouVdwDmv2AFDk",
  "key5": "tsRcUqWwNajFSi9aLEydCEGdfcKDVJKmFos7Nc5uMaLDzz5ry9HYMJa26i5rBtmUayAa7XouzhP5tGqxLu8VUXt",
  "key6": "24NwrCpFXQatGhF98RrRheU4yhM1ThySWTGftTUxZ4JkcZ31ZTvDzBBHyScaUHWpizYZMkL1V6aGeRsbtCGGk463",
  "key7": "64PSca9yGx4UU3pSiUnvwR9oDbb1UxuG81s2RWdaZkMqqCWRNLMMvJNuBNFshhniBm7FvxhdajKMNDdxjruTabsV",
  "key8": "3JPa1wDjDQ6KhdzUZCSPXCrsgTVLDaXB2MVjuynqisvMYeiJumRTDStuhQvcGmiacVphyZohYg934uBn77EkTL8H",
  "key9": "4rSUvqL7rPzL8FAvB4wfTGjNNWL6LrDK4Cjcy4eczWpCRHYhSdK3gxYgQNzqsQYDHtWTQmj7fkLs5UKmN3AusQCS",
  "key10": "4UF83PGxxctPmH7MPsQcuBsHZDd8DfbY45vh81QmiuTCYDARtmA1QUVmYmmFU4yfg6ii7jzAvnjPk7v4LpT16M7F",
  "key11": "5sQRmGkeFhDFf2kTJ62s74FvM5SZ5wQnEHXFstX4U71mD9o9BxuejhPPL8giDKBF5JC6is6X6ccNk9L8ge6bmf9C",
  "key12": "5EJGuSKA5j12KGXXeUCD9HezZvfyiXrPjUkr97Xy559ZeU9mcXLSShZYJXkKHzBik2VmtnFegWP76gfjA61NDe7H",
  "key13": "4szsFqYTW9nNfMTcBJcFauXDS8Q4mGV1KyGx37KxCjoxWK7WUaRJaAXwwaGmTXStGedrwiASA6mEePUi3MYsyzmb",
  "key14": "5bccFd8pQiKJQS7AwwbbReeN7sq3eFQDKBSUX9RJvr9PbThAZ2uat4mgxyvM5cm6YdtKupJUr9HmrBGwTcFqSmuv",
  "key15": "3w9v5syBL4XPjFKCXsPnGXyXpv16ivjaetLtYVyWkAfEj96hdiimdhTULK82hUEUkAf7zPbCW5LwzdhjgvCyxpjM",
  "key16": "2xyzj3HSr4V2XRMPd6nzBPWWcDMFeJvdTCeA2dB7oWXeLpqtqtv5sMXv8rHksmdsHcd4hcXkZ4Sj1E9PirvjJGPg",
  "key17": "41keLCaKyceFgkozmHwQyUPMPbYKMCtn2pgr9pj3fmz2BHs58wCmv8gUgn8kV2RExckgj4481yDw78c5ajDgo1xp",
  "key18": "4LjaNBPcAZ8Cwh9RWgsG5S1dLEjWdpEoxpA3ez6bjhiFvSZSDBZDBkbyhcTQvTvtuq79ro2Vs68ZiTVD7CVKNfgo",
  "key19": "2vcworV5m75PriedVjFyQLi6nELGGypxRJNQ5vBFGyUh3m2f2YyRMavtZFazcPtQgHxV9i95GHTMSAuTfjwDRdH3",
  "key20": "4THGgdZNAzidNEtZCXPxdnC9MQ23eK1X8RfMTpztuqDD4eKmymyKqpCmsD1vGuNC2n3oUusnR6UkepFEsdkTgyNq",
  "key21": "3WjWGqmd4rr7Nm5zd1R7d8HtGMTwGJ3aEMTScwmbkpgRtrPDioiJ1ux5njiLnESNZQUV22YAd1ivtEx1US3T9DdA",
  "key22": "NbEFyXfLea31Q2rQpyYWEwEtteLVY7SbB41dk3hn3GjwSturTYY9jB7BMFZ9kSfdcRdTUnXWZ44og44bubcXw7e",
  "key23": "VjtvFmVy1DGqZs92DGURMeGNaGnd3UmyUfdnXkoT13fFbDSp5wGrtbkP92pbUd1v8aPxsYJ87PYWD7qyuenwoW2",
  "key24": "6632suH453Q2opULuQTiDT3ym5Do55VsjHr41XVyFCYipjRgUHqwqy6BHeWQ9GvWETkedxYwfMsqKSAqjsSDTkP3",
  "key25": "4GSUP1qhwYbCvsWG7UFjMmfevZ9wxDYRZ3SSwnUtaJ8saucmt3pwVGodH33FF7T6EPDGKDzPNCHiBet5tH2NUn3w",
  "key26": "381js27jRfySGSCLkvNEjqmSb3yjUZAH3Y92VNGaHZxaAmQJrxaryLdMoAoQPYg5Eyn3zgMtWWuQkXhSxNsnjdBJ"
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
