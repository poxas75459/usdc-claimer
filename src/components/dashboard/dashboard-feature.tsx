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
    "5dEmczZebT5AW9Tzzft1mcvJ3ND8X1vR62YPDrMt431pLFXYVzVXggTmiP6DCL4yjdTGYzKWu7VhAin4EvMELkAY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46gq2zQaVCwbGmhVE5uEazfmSbYFcTZZUExtCmGkc69HKSnyxAibRoARHfcyzZS9FS66VLTP5sRpkxJgopfZY5eg",
  "key1": "5QydEcpoC7KXoejiLAHsHVpnfmETpefC1t3YyXviQpPjZGPFyfWqppeET9WT7KUN7C6xgLYoei1FYYa6aQSEo4kT",
  "key2": "wiSa8Zh5ZSxY4AwHdnGRi1iMbYf23ZXrYTtyE4e1MZ2nEjavuqVfefdpQWbf23DY9fef6zY9bpmPNPRi7SMrji1",
  "key3": "5muhRPcPEPAS92ebdgoKFpbPdwjdM5YmhbZ1H7NWBYwo3QCnq5F5npyo5ej1CFpXci5Un1eFzE28hZnt3d9nh9NU",
  "key4": "319pQFxLbydchFJo6tTtnf8Y5kfhYbUBD3m1SmuvQFy2oJPTgGdy48rW2s7wBqAGGiYe8SPSt8sxrTibd76Vg4q2",
  "key5": "27N9Dkv8qP4tqeqY97bPx1CUnQFyvMMetiHD8fh6DPgFp5W82iqg3DmwTyfHfFcanbZSbUnsGvFfaLVpLDWuihRT",
  "key6": "dWG9Lw3ypL7qFpLxagKgSkEE4rePPfM1M9vDa63f8bfGMdirU3AE7Y4isDeoibDiufwLoz4ZMzpHRxwGUJseNc5",
  "key7": "3VuwsbfRRTyciHaTN2ncr42phqffnscAQ4GHtTyLtLDMqmtonmQum8tNZ1TXfE8jtrHR2suXcRHV6skmZquM4H93",
  "key8": "2q4pEfiyK9VFQ7JBnCeoheBtBsyvixUYJf91SmBSV3nn89BwbLMPuzYb7ZjaFgwKqfDtyXDBUggun4pdZEp5snrS",
  "key9": "25Km468hR85MQmPR4VsQ3NZd2y3BXy5dBwdVv4mR56oFnmun4f76ociUR3bhuLu8dp3CaLbDbDqMMrjrca4jaYuq",
  "key10": "UNagwNzhUgiX2nvGx2kf5ez6KN71d1twZbhYB4RL9p98XDd4yw8oM5kwjpDhMg1SxX7pFru8r3E7eusSS42KuZe",
  "key11": "3zhFaHxJM1W6nX6j4KLudnoPwntJoDmaMzCJbkYor2nER1Zy9aBHohBBu55JyjYYd5icttszaLSaw7TPe9ttUX5c",
  "key12": "2xVzhk8oaJGHBSMFWrWeGW6HXakag99k95SkQCsKqeXGuWpuwS6shLAd59wZoo9XtMZMYMyWHBd3mgswfmBysme3",
  "key13": "4ASuQWEVrmSuT4TPtcYAFAmcEfWDyRTMSWiPc5WL37kqAufXfQgcRyRVbNipHjDSpG2EqaDVxDp1na1wVfp4Bb9F",
  "key14": "QZ9kPmGa5HGcgDgkknP5LoBdREXsSs6v8XbVEJqYinVq85QGjgXBsvjdWiRpxpuf92g2g4L298UPtowVskSHZ1z",
  "key15": "4R38gFLVLxCKyJTm2pPaJh1k5cHBfZrWsxSzP8byNuEtGQ2SoZfUyjKgPkAtLA8RBR349x8iMHShnoQcMskhety8",
  "key16": "2dGPHCvSNL9ZqfJiQyXD6kpAjkFkJzrchqPu6b1zjtnpq39UMoWifxjBVMiH7pdqnFkKzunAhDZ9SiTTNo68iKSU",
  "key17": "3X1vHxMPmtfUc6HaayobKvnds9pfuYehDPhgydk4tZsVCrXacoVtSaTY9zois9hCEaVrtSfdRcFyBXBqbCoH14m4",
  "key18": "5VB29unkuBkE42mc8kEC7PX5eS9HLGcGCcuv1V3VVQNCaRTnj6GNcnjCUbcgpo2SioUU1hE9kq4x9eKc7awzooGG",
  "key19": "bC4Y9BrNpSMxWjW8jpaax81CfsMDUJ6MaL9THrf8dTFu28yqo73Wc1RP78gbesqPPSZCxBT23dLnZf1ko83Xasv",
  "key20": "32x34GToQ7gMZC3rw75aj2c5BZEh5Z5stSb5Dn9Sco6fzkQi8iHfdf1jThowrBmgbovUrWLqbaJVdjKwnKFKRVjv",
  "key21": "5636U45nFTEayYwjPKpe64MjwGmJDDxDGYKhzRkJJ3Jdw1cHsPs13xA5DZbyWzqdE3HYufXqwFWTuBJHmkU7zJLn",
  "key22": "qGsEYJJ3eL5rf8HpNouhtDsJy2yYp8XJB1QidhaDTWMspR6s2gMrLJtC1oU5XFd9HUQyzCbF6TpCvRanJAsTTeq",
  "key23": "3EN7bsc33NFK1GcchJss5qerGL8DNf794UqTAG6fqtDsjFBBeEGpHUCzo7kF45XKbcLS6Jvu6SF6TgA1PhP7Skbw",
  "key24": "3wgty6KXGjgv4xDq2B4pNqQASWg6rhJ1di9VcuUwhQo3tJUgGxEkGVvrg4YWYBd21CzAM2h4L3Qq4pixEj1y8aLQ",
  "key25": "bZnaBpDChGXdLM3TdCFNZKn6DPeAJmsPReJgT4RFZFvF2vwKkg8KEQ6jTHqRyFjXXb3ScYqVjzNA1mLQboV9caB"
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
