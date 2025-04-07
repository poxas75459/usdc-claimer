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
    "2bNDx3TbvxDDbFJcNQKCmjJU9HnPKxEWiJUWjQqq4k5SqZSt997Xas7msJYrYBNr3PUu3CmPHp9QCkr3twadTsP6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "271MeL2hVmPMdYjwuZhnUeyxpa6E4TVnrtTbys6zYg9EmBpNxR4jnaWg415CM27GWLwYfGejt1dcCxmBCq3cqKKN",
  "key1": "4LC2h1qBaCLWQDPheTBevuAsC8T5jzYtouDi2MhVchDEftELbkpnMnP6bHR1AmtvL9zqsueuHtsS6WvHmQVVmjaL",
  "key2": "2Prh2TzoAu9PnSzpy2hYP5MFj5xDesGeqCVaRiiKsozF8Rvzct4gMNWR5PWwKKJRGWRCBNMaw6ZPDyC6UtizLbV3",
  "key3": "4Wtuz8cAFrjwop89MYLTx2UMnyyYKi2Lp3EkFn9BQapRxVuoibiTkkUn9Hia66MmmY7hToyyY9pp1SFY4zss2NRP",
  "key4": "5bv2qYLxwuwevKF9obHDtLmddCFTuYYnxA9Z5Kf62DXBMZbSpVu5BeQqNMvs95mEieu3Wi9gdwZvAS3nknvVzrP8",
  "key5": "4Vft7rqVcQ6gPXwxNns33WFc9CmFiBRsLku3UHFVzkViURJVBdAuvFxJ3cndfVPZs9UBbiAJxKGtTTfRsTCggosF",
  "key6": "3wrLTsuuMN7ttLWoNEf4CB7AigX9wVFe5hF6tanwTobQ3dLF2Cixi7qxGMWQR2EZJruM2t3foqVqGD8k6gsEEbKw",
  "key7": "4TXVEe59m4sqz2GRN7fHtsk4mvCpfx5PEd1cRxQt8AfnrdyckZtFFZiFtYPCHteJvJFufCvzaE94wSWcHprjBW45",
  "key8": "8B9VY2LHDwrwhdfxgvU28UMko15zf1VKgJEJ9ewe35iqGVPLA2S31PgpewWUbj6g8BHi2HBL3ytRRF6mr8zFWp7",
  "key9": "4ijCnm9mQgwUJVRCXLPhBR8FbMKypC1ZpwC3NLRTTYzEcPJu5Q4RScdJP35ayG5dhefuKgosCTtvNETrboX1SPYN",
  "key10": "YwTqgTao22zBL53iYYqCKHVLUa2UJjbZ5u4npdieVnYVDY1w72iJgVp4sUNQLU5ZvnRSjUm9256bMa7F4TFYHfT",
  "key11": "4n6gFhEa59WdMtTiy4TwhQFsK27T4LCw26fXGmo3s7i3zb7hUxSdsCAKPsvhdj2ZrZ9ytNQHUs2fkCRyCWwihgyP",
  "key12": "ySYzgnR2vHehbD3EYfbTPcH9CvQFBJEr1eaJ6vVgFA3J4wLTL94orY6antc29wJYw75NcDsRaUPzBkoi96puBae",
  "key13": "3iw26rGCV66ukJ2ZE4UbxSKNNTw9odSjAnNPLqJ7EtmGjceGBUfoa1FN78MsMMaPhbmBX87nET76AJp2ZQmGm3js",
  "key14": "2oknL6jXMSqy78LnAzorGhyKkT56REqJuAq4eE4wXRRgsUAQ56CAPbKSizZssukv2W9CrhzNr9xjsXXEPn3jEZkj",
  "key15": "2rJRS6LZFDPLQd7kBt3ygSYCng3bgikZwNFPQmyt4C32mD1eTm1aDSDvTTThzgCG8JtvmvQ5YQWeebphJCPxePMk",
  "key16": "2qc61Qew92V9uGGk3c1hKq252u1azY2zQfBMBJR257shpTAFKDP7M5hVUdWCqThb4JkL6LUiRyYe9JybPJD5AuaR",
  "key17": "66ph5iTBgJoBNLU72C87H2rZ25TzR4oy56LXv9xHLoBWatAQgQ3r9w9CN5V4qRxNp91GQUXM5VRCSbbTZMk1kCr6",
  "key18": "2DmSb5WegAwMbwBVBm8yRHDj5VAVAbRNnQWbNTfzFDH8X4KUwQZraQdnuPq2RREzv4neMvVh3M7UXMizMYoM4g4j",
  "key19": "37Ar4kKFKupWKbsUfshGGqq2TSCLZN1ERiEMyxS4enXac8EA2wWYbRThTy4BzpevRcWcpgVyJUNgE3utkSSJrGiP",
  "key20": "4ac6S3TFZbhSv6wK8yHc1LUFHc4Kf6sXfuNYDKUR5mByKevzgZpC9JEdBu4xQtuvW2Qpte9DG19PDvd3vfrXd89J",
  "key21": "5J71TP29ps6WaKeutUNcdXawSFXbjEh3NBXjr14ri7a8mieDY441LvAUoD7ChZitRRj1BxFm4bq7pWAu7s3PHcXV",
  "key22": "47MsbLL42Kin2sRBjhkdXxPukymmgtqpBMXabhpDRqQ8Y6Rq8DqtKi8keQuNa7E44nYVwTQEfYf2z9R14WwaqZ2m",
  "key23": "2onA8KUwhFHzQzy6hXjDDfRewqxpX5kwhqaqbLZnaTLB5apQbVT1QroANpi1CLGpoor8hTcCLUZriZ35tR2SXkKb",
  "key24": "4ztWMZnbW2zYocbacXTdLopc7hbnLfRDGdY6gD5FP1TuQYhc8BoM9UzgFUVwqPFnwJuLFatqAQ9Pi9gTv47SFZcY",
  "key25": "5ZPh3muv6xRAmoHz2BLhYRefWUHZoQ6Z1yZSbZzk2SSDccHkSFV62QiUEQ89aFN1Zez4eLFWHHiTxzg6nAESEVRM"
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
