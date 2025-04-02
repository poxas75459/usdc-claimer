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
    "5qNZ7e1mt87kXio4iVreoMJFebUEtFH2WaHtGLXQ2QcLLGCsUZHtTJrXN6zK2jH7hPVSSKMs52obsLWhN2SaewrT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vT32dprgYstp3yEBM61qGuQKPYL3zcUyxpZyLcs4MyVVPDk4ohnwJZEVqomKga44sLB16sbv2Pxnh2qngMPJ7Q1",
  "key1": "42mj8LBsySAr1AqweYJbMKTDrQSCXbGVYt6bCKvmqtGXW3NDPEDiGQymdw4vr78zKwbkW8VtL4jk1vPZD5W7Naq4",
  "key2": "4vcwCREA8X8XSBtfax699DhqHvCrGv8f5YnQVD2e6mwTtEcbFi9Rrpe2xJi525VjCdCPT3mNS5kctaYWZaQFwZGM",
  "key3": "2zHEXfE1dvMohYPjMPfugJd3Xm8fTzSsvsH8mn8kSaHHDgLirrby6LrmzRY2pejUtxdpvgexYmMRsG8jjuiaFC2e",
  "key4": "M8UbFutwbPseX5FZqHXc5qzzcup9qfcBmB9E2AYmHYVyEyJoUHqRBZVLHmg78FrpLiE2GzD5ZvAtE7CxVDT6jS9",
  "key5": "23No3Mq3uw1U5fKxkdFySa1DXyrCGcPWNsU4kP9QnAoD8dHhpCWNWSNvqzmsPZTYEjAdTUc8QNKdGhkYZNqg6ZvY",
  "key6": "4UwUTqWynTGCvqV3GSvqbCQJxoPN2xFdfAo5KW34RCV3RoB5rJUCcDtHCDUkz7MzEbTK5AANxTKkxWYAPM6vwvZD",
  "key7": "4bi72eM4DoLPkn8jNjQkymsZd5NSeGpxQAXfz8Toj2kLai3X7dZYq15Kn5BbQqA5bZH4BijQmSfAedDUYneGLM4p",
  "key8": "4e8uevQ6xgjHK2RFBZY6DFojMUozWBvjXtevYq1kW967NA2bb2RDjqU66uiekKSPodgp5kz6KFafin2pXqC8isoo",
  "key9": "3CyX2EkR4BcAodVidr2Qny23S7a3spoATDW2Kkp6sDHwxVKBF28ApbKoaxwe4GHHeg421C6yToD5iwDTUW1fScJt",
  "key10": "5ock2Cr7petfJ4RChdRRdtDULUvv7JRrAWCGRPAY6rS97NA5ei8h1b6iev2yUdKUJUfacwerK8n8kVNSTwLFJumK",
  "key11": "3Y2JrZHrYyanqddtjjXdynSk6arcvrzgFnNS4sj6YxUVsjSjbMbKSxPjyPod3YLEqb3ibgigqzQDN6XZWUhnTH2o",
  "key12": "3V12PtJ769N5ryxTTJ1BrphVmmfguDXbPREdXTLNxXJSru9DPFQfAYVjc6exS1U2ARpHibQWdDMnynXiNsZ7H3yY",
  "key13": "26k3UibM3GdyTnpbHw1UJAs2hfPCGtvziHF1wqmBxHkRbxrCUQF3KScfR7r7EtuMrX4dMpt6DNG9P5TXt9cCCpZ2",
  "key14": "HdbGtidJBHd4Ds6guR6Qp3nNX2WJcCwGmYkzrJUk7oHQUo3hgVVq8aa9NvmJXB1QCUfB9ZsSm8NykZyQTkNAEsW",
  "key15": "3TrVaqmyvC6w67KS5NjythkC3qGNiS1aSaxJtf3dxNzRDFqQFnvDkcDoLYfhHRDbMpTuaT1uivk63y75UT58SSk1",
  "key16": "3URCycCwAQgi5X55opkXL3cyUZ8uXjanjRnhUj9JkCRdSrn3g3baxkmupcxV59H2FamGorMnZ3dVSF8fbWxWKWwv",
  "key17": "iKGwSbU7DhjyPcMk4Cz6uzSuaEopqG4fFyp2dwvW14jaTu889zF1SwkPXw88nbcDopntwVtgyF7HjJcsPpdjWmM",
  "key18": "3hbt9JsvH6iwofT4QmLXkZ2qmfycVcj9JKWMievdFkC2RnNUKHV2BRezDJwqW5AaEHPBMsJdaEmFgPRU3LE1zTBd",
  "key19": "434YHdj29RtF8sGRwMpMy3LqG9MnJQe9tFeMGMZc7sFVvmjtNucAQw4Nwbb6yPbYqi2DaVdoTQenYweKL7N6QEEb",
  "key20": "2cAZRCZdSnh6nafd2yW9dRT6isb9rCkQ8ksAy92q3KqksY5FL1ZZdTqTWe95cPfqHXnJG6x7f3fqE7p6atj9t57b",
  "key21": "ufCRqat2wBZE9YwAJydGugLK6m2Yj1YxnHYKTwgiCJ7XDredxA3RtaGhsLnEe37WMTxn2cHq5FyTr2zeq5N83sD",
  "key22": "61ski2Cbb3wMoG96YzGoa6rBhGiBRGMhAy1kvYtF6VGSskv4FUCBFkye1U1mzfWnSGEC5t6cHiSUNWys2mecj1JL",
  "key23": "5PaG9P53McovTSSGvTFJC1cRz4Gn85hCHVeJD6YFbB3C9eq6Hezcvbn84qy5duXF44cG7DXo16WR6MD7uMbMzfDB",
  "key24": "3dvc3G28V8yDSV8NHijHdPCQP2JnSCak6RKuz1s88dRfWWZcRDnXr92gk7ZJvovFRwxoY4Fdme7wFaCAvME3QwST",
  "key25": "3pkzLntdrDFJonAvMLdzPbxYzWDP8JKJiXboCJT3WYZR4uQgQF2jTAPkUdddYj8X13XcZpZ1t9po3zaR68uXDotL",
  "key26": "2qyagYbkzyW6D8QF7LofFa6MWkKGQ53Wo9ZBUKjPAa2ATqYzhsgTdrDvs8AmBjyy4kbVEcYDrD3XBBj9dL19PPDG",
  "key27": "2JvHzenoK2z7Eq2jKSBr2sW7uZrjytoZyvBjmEResjnjXMB6vWgGRT2pAQ5gKyhN9mJuMH1ovUTB996CkkkcuVj6",
  "key28": "MEmAKee9ac6RftsYJCp4KpTnfsGyE6bhvZeLnwK6Ey2LS6GRDY7ShPByZ7Rw6ThP6VuxddTaXGxDAz9ysCf6ZeP",
  "key29": "644585FNmUUyBdDTZVcHHud8suZdwpSjP4ZCKDsYRnZ1gYt2s3yfefpCBVAKN9JwZMudhQ6bYo47665oXrHmssbz",
  "key30": "ZhmnRnCQ2LYUxrU3eDWow9b7gXrnRtzpv5aPXPRu42FuuVbqQsB7V7ggZ77pgkF67DqRQwsoqE4DTdCtTiNVikc",
  "key31": "48UsBL8725Mg11aKd3UyAy4NMTujoumcu7LFxFob2PC8LMGZm8EnNkCN2e6R6S65kdAYXqoTJTiXDBBzvMQSWrP5"
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
