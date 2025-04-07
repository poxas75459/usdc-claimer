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
    "3qTgm5Dyu1sMYeD2hRN9vXsiCvdjZ9FTAUqANJd9TGKj1C8z82SWRb7n15wNRosLXWrpRR638btuHmU54kTEDNbY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DSBggw49pXmodJjo7kE3SEiYQa1bvbjxPxn7ztHKcbxPq1RJQuQqTaJ2cSsvRLNoU1MpyKhTr36GKuTgw3Jd8ja",
  "key1": "5sm8Cv7PhopEd2bB9wiCdFzYXm6L4SSr6cXiyMbeb2Tm7JjC8WT5VhxAxQfM7zDabogtsU5vQzgENSvQSeR5rgib",
  "key2": "2L54Hi4anyQGMmYpUQrE2ZbuZBeeFQcoT88rZ82yuQR6YstBXdEzqb8s7QfNPcBpGAPtRPeGERAppeXErom8fen2",
  "key3": "3GVdvN6UNHxcnQXGTj4ZuF5k5wWumBurhNqhFbyKxUXkMZjdYqGffBC1Z37LpzHqDP5G5Y54pfaRGqhR3jQQ5Nft",
  "key4": "3xxW2cUkdf4akPSEYdDxfW1Mt514guwTuupqro8JT3aCG2Veo86JPXYjdBt5JHSxhQAk5Qd17bkseaoeehw2cVJt",
  "key5": "33q65RTdwztJmk1KTkP3MogMejdSTkYJ6XMXqfin2HcEcLAqpVxqY4nnvgMdBg7R1JdW1oYEnkrzU9AhqSHtGqor",
  "key6": "3p5ff3JsinpzWfrHHdmtMirhG7Zdqve9VKECQDzUJJvdFtCzQDc7FTSSzWywxBjiQv1LKHxhzsBJdu5vyzxU8i2i",
  "key7": "2qb6oNBDD5tGTTdL5rtmVX1JEja79HTbmfU6X3yRBSBjX7TQd3rHX3cEKZAE2QofVpTySQQ6kjkTpFBiHeXpmA3b",
  "key8": "3tvWXetHVWPG3Wz98HLUYcZAQ3h5BzcDThbEMXyLAJu1R612NtLdGVsJozePzbEm79CznBR6EAE48RFLN6WkuXbQ",
  "key9": "3ZbLz5sTQDnMAxTZC3XL5gU3KY4nr624GbzPUddGQ3hchaHDeCDwGAHiUX6JkhKwwMKUXSzkazN7pF2eQiUREwf7",
  "key10": "qgWNgnmcvhkSJxd7R7mUt5rK2riehFBh13o5SrQNXh5eioJMifxZ4nqxfnyKS841TRmVKzWWDJnV7wmHKWYZEom",
  "key11": "5Sxe3hfi1C1mrLkbywV8UpxqXwcLsk1CyPLVyTqALzrocXnpcAzNo2RUF3EyUaWvQ815b78CdCvrVapzJHPY7mPs",
  "key12": "3tD7W2ztGbV9hqVWEYszv47kbVcoVG1sAQn7sg7brexBkjB3oEf3SkDtfVmSVCvqi1KfMpWM8DHMwxdq3eU4cjhG",
  "key13": "5VfTe3zpMs5sJ48KF4LNqDmi9oSGGw7bqPpnKpG5TjYVWj362aYB2KkSGX35egBJZMNTf5HvZCtyf5ircC8FwLsP",
  "key14": "Khgwqsg2duLASva9ApvhcCQUzzZB27Pt8UjJUyGpiQr6GeuA3bYBQcvZBaeVyooRptsE1cZ9nQzTj6gLQSYzWi6",
  "key15": "3Mwt7JcdjB43qigFFfmh7uBmrS71TvPxNDaLc11wToH36y9Na2SbLdeC6BPNeBr9CD74TUGTEdEKaLbiV4H61yNj",
  "key16": "5xTGQgkxVNqD7vspiy5XzvjmJ1T8Dp1GH8gZqMqmQg9g9hW1btvxPyrwDDjewdLdYQMbktSTfDeohasdeeEiPLrg",
  "key17": "2twJ2WRPnSqvgBRUR3QNgx4MrKQi3RkM7RKR8LTLMrgVaCXWm4FNnWhDd5YhZdYyi9BopEnQCK3T2u8qs8rjLSq6",
  "key18": "2SppHdQpt4EC1NFAZYfmy6eGfntAvGxGe8aaZ5Uwfc9GfK2gEpTUxoU8p7ogrWNoXiGJ8rjoxjnLnLRX6EEtq6i4",
  "key19": "4AGjM1RCaeKupoWWqqTV3oNThq8RTH196Y3Khux4rCKkiGhwgXnKpf9mPscWPZb73wDPjgtq9nQe3ZBknRmNdk3N",
  "key20": "3rTU6cN7m9kjW85EPwPjw1pCP72rue6EwTtW2afvYnfVUZtEhmFvBvWLWUy6H2oLKaX5JRkkaARn6dhT8K7FsXSC",
  "key21": "57iFbzT4Kg3zRPeFUXqwoz5Mn6PZb2oiiArWttYZgydFgNmAHkK2VbqMadCtS6EYVEHP5cDkXFLjMGfJBtnjZG6x",
  "key22": "4isAiHcSiGEZBCwKXqQsjduVFAdxDU4ig9H1BaVTkVPtMjKPXNAE5h6yTWFctqeM2pmhLr32yJhy2aqpQHH32Zx3",
  "key23": "49qg2n8U5gNaWQMPyXRy6JhpYkokvYCgJr9Enqg2fwUZAt2Ps2uFZVpchNg2bYWCdtMT8MttjwvYxeGLpa7upP8B",
  "key24": "3SQohr28PwfE4x2V3EQ5Yacud9FWXTotCwSd62aztTWVZho1hCFoyvY1zMrGQDx66G9FBaM2q6DnBYJXPJA1Zpb7",
  "key25": "4EjSsC2qGqnwwXMk931MKcEfiXou3unmtb4GAHqm3Gor4tTjwAQYSSwEJ2PpZJcroKaScYwFqUMkHsVFCoU6atri"
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
