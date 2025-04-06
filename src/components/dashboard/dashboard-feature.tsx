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
    "nJqhWmVcJwQFUohw1pcVJSKBkq4ktUQiRrpTcXtkrA4cMRcUNCT8Ee3o627kunfsGNS9j9qMYYHvJn3gGvzVDiZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JF8roDXKdZz9ve38KH75dLF5qS3NgoxgwtWNNLSSmTDA74w5riqsKzu7FAzWLgFT3q5eDkWX1sB7vizyPn63Y8c",
  "key1": "3DbVSYJd9EvEPWMbcAeQFc8jX71Ep35dKSEvpvj9UfVTh6nXsPCjnCTfj1Yb1kRE6dqnJQ2w5heEgm3eWPfajaqz",
  "key2": "23CR4rC4JPKEWZMW3k4jfFkSMrvi3StRcvhqu1KU2sCpuT7j4fDgGkDzCFXfg53Hy8frxUyUHjDCJdFJrPxMPKjM",
  "key3": "4edPufmRGFVHPUnz7KpvUezuapqDpdtDcrCe6spum9cZt44gPpX4hyk98XNFzag27G9GpY7pvidJknLQCgZC1m2k",
  "key4": "576tmAmxhsHPhrsCjN9qLUfLFMvHFovKegk6sXrmVc45WNjT4jHPBDctcJCyAvLrE1F54ozq5ejxHjC5MEem6aih",
  "key5": "eKURNCFijUYR7FCiv5vBqNpfFkE9Kzr28DFo8yqm1kKeaHhr6xepABJv3aZQ45yLWJbnynb8Ypde9TeQrEJvnAP",
  "key6": "6Fesi1WyphEXerzJBizUodtibz948iVFMdEtPX1E5jYht3pFq5jwJfokEZVGUtZVVfPehkiran7DiLcFP4mm4wD",
  "key7": "369t5XJoT1JKapkyGCvMdsD7xWDFyD5Fsx62B6nC1eqPmYjtckqr2APQVqUTsZAQNr2vHoc36DtFc8tDxP27FX9z",
  "key8": "3FBEsLstVac81SinNvmFf5LCsKzDRVjB3xYQ4eEDqk1Exhdgk2tGEtzFYy2THPpT2BrstTu4irxxX4FG38xtQLW2",
  "key9": "62KXra9PYAVQ5y1ybQFMcp7JHEG6bu4gHfqKVVcuAv3rBs1uFYiYR6aHXiX28WzkPcTr2kndHsAEkBLCTsd8ayc7",
  "key10": "4JcCj38BJiuPx1VfFhReoUXvFkpnDQETzWUzw4f2SHbjNacR9bVdhXFcycsSPWFZ1ZunEMxPD7DNdXkyX8bBCywJ",
  "key11": "3t3JMRYPJCAdxxApiGpszyU84jGYgPktNDGRYKp6wDSCfAzPiYNBDm9AN6ZJXeFoNKUMsXnK491k51wxaZFyzinF",
  "key12": "4cABmFAK3N9fAL2cb9rSfDqixnxaKDPARNNpDPPhF2sBqREzHWcTK7hsBGkeYtmwgkLZqiAnSZMdUAAnpAhhJv5B",
  "key13": "4eZG1kivPR3etjG1pCU6aDo9zcoAnvyord1z8GBsWE8pFJ8TUZWTDMNQwBsPWubBmejyqazqMKxpLD1bSAnW2EMX",
  "key14": "4qepPBCtEk2mdmPSDQeZoLak6C6kEN1E7aCYSEJ1fhjD5EPpp3XSGSxxG6QiTj468dyGmNVtQPv1wNoLwG6aZvn2",
  "key15": "25pmZegHRwGLwCgXHvenK84DpPPLz4SdpWzMJnVrYfEwP7AddZf24j9bhG7ZwvS2L7Jid2fzPc1unFuUGz14s5kq",
  "key16": "htAY6jLMUTSF7gYWMpQqtW6mAK8sgDuZ1KMu6qi9kvL2HCeNxFdvS36benEXsKrwYZ1SMf3kYXf4QSS8Q4HK8vy",
  "key17": "2TLEadQHrGmqwHbAWrbA1NwUNFDvWbqvqy7sDG6EZUuNr1NUhusmNDkjhTFagohyCkSY2VhGpGmxXTwPPJcmC9KP",
  "key18": "52BEAEF8U43SvhUuRkJJT8FfsTiUWgKXRjMXh6KayueHZ6RK3qV7vAmcnjYc6hc7QoyxmHq5s9ZUFGAkctYd2ZMU",
  "key19": "2Zp1ycL8D2iq3FcVgNDwUYwbqmSfGPZJ99gfs7EPiXd25x7fUnoc7eFa18HboW3fNukDLnyVniHePwyWLidKMAGt",
  "key20": "4gHEWSMLGVYYXJEHLQaRShMccDUAGoreK5iNt781RMcFnXaWKcQFhNLfQuAujtVeTH8ncawxtnZMFJYsFoZSoE1W",
  "key21": "2RgRqf72kBfmZB1y9GHFqtXCNN5dyv3vjUxfm9R1P6y5xV3zK5E8XQ7ybpaFckFxzYeMsNrQupNvxZvSuwdR5PUD",
  "key22": "488SbUk3WAV3FLxgszRzWKnbWKk37XN3PQeJ9EmAaj4BX27DVuJPVfMrY9y6oo2WZ2t9ZYfHdEXDfv2S6LhpJQaT",
  "key23": "3kQsuA3qo58p9jFnxERfvu6qyoKm7jxNvb8V1tfvF8kLt8n5C43YqPcTmxVTeV16TAmjgVm7Hbo21Vd1jFibvQMP",
  "key24": "2GwGnEh76f5wRygyXhC515N7XXHvbjjqKN8imnYRsSJsz1hW6kLphNxsgXEtvAhSt59HCYXMFjf2iFRBPLj2QPQv"
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
