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
    "4K6r44yy3cNVkCBnv8sPSVgGcDiTvs4K47cXcTEct3Wuc5CAwUjMaLkFPPMqD9dpZzSzvWY6SaAtFzrcCW4yRdyq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PziPb7Q94vtA523AMCmF9psdAmXt98rqHCd8GQDPVfCHrqusEmMqqZmmRqCHKDdq5srN6UyZuJKnmyHg5gAwZNS",
  "key1": "2VfSxt4pAjHgC5Ro6cAs5HhLG6qG3wh6NGwC3Emoz5cdgivDF3DvQtLQAv6APdjWmk3Bv8sc6EbuiR7EFYEAntT",
  "key2": "2ChG3DXEbb81ndVc8EFLFyR68MBf7MbkUpfYCGM45n1PC63UmXLHyzah7knwgCcev48wazSos8yQeLcL3sgNkVUG",
  "key3": "2fPpUubMToqcscTS1upLdcNVGL8X5ycvNZqSTyYoy2egn7RYnhVfh9qSgJmX5jaqQiyxghHWkGcFF6CKXpkL7bQD",
  "key4": "3J5cXgc9QNHTzEdpvEjvDVtFHowMJS1K8ZrCJ22Kup3y9cQvspEvyj2T4FR43ofSBLGCLgTroCbXkVsaLijGRDKe",
  "key5": "3a8nQsXvhdmZPcao92siqjDJVVGSt6NvrDa1KMZQvAUDqmu92M6GKX9nze3Y7NPdgZWJmP5yzej5WTrVo9isck4B",
  "key6": "2NAoN5Ed3SUm3NtWBwoMryBD9sdE2un4HYMec3cup74ss9XLvDpki2QQHsLniBxt6kXHhZ3cH4UccMqUuQD2QCBQ",
  "key7": "4QfLDt5L8PZEvGeAw9KP52GsAuvJ3e6hktDNmkGk6bKJc4XcvKbH4siybLAzds2VJCqCUTQXKimxVDTHkV59KYCt",
  "key8": "3RY1ChfXtvJeTqpK52KNi2FJ3wvx7jnFoVoHNmgNkyd2uE8Ro4Ff5Ftnj9Pt4Gosqm2bv3jjyJRux5hb6i9e4BU1",
  "key9": "2v7t8HCNY1bFKaKmtehYWnc2yJtVhLZksL7HSKhq1HkpDBKkzppm7DR95iSoZop5GJ55HxoFkLAM7QZTy6chzu62",
  "key10": "53pa8xL6maWmXsb5V5HRPVZ6pbi7fDhrWoSYP73RX5i28nJAweHxq4P8UaCnv2KicUNrxtcKNBYYEoWoNHRAhjFW",
  "key11": "5LGeghmJjTs9BWbftBD1rL93Wka2XDnAyPnTd3Q9A417zawxfKCcRptXaanc83pD7CkJntXcFGisGTQEsnZLZCjb",
  "key12": "4DYLhUEgDpYYCat4kryzqELLbtLdNKnhzLGFD6kJULsVTxw4EWcMLTmSwsgtwssKPKHJpVd9WawEKDDReX35aq8r",
  "key13": "4az3N4okJKj31yF6fGk2Yif3zt8qjbtdZTis3sLENZ456cguy3ixxREQShys2wN7MC6Cmkd7cMBNBceeorDxwpWQ",
  "key14": "4HnQdcyDWKNoZH6aKGXUh7JErT4mY7LBJgtGgA1oV9E4YXLbMVbXWmLdAPxt5erctaK8QQDrNTfYRg12kyz4Puga",
  "key15": "5NN4fHTLaQYBKSjdTq1JMFDiLPMPng9rpg9DxHk1gg72xyMsAqyGNim6phhBbiRFA37SkcbcAQBUrFpu4TApMFGa",
  "key16": "3CpKetqm2T9r1YPjT7zf6eTTKYwuT9cGT1HnN3xKLq1Dqw1vBM8qvZEK7AdppJYWsLz42VaxKEwGnDMDkbsHyvsu",
  "key17": "2GFgtdgTnSTsAWDhVKipyvaRdt1NkR7wPSpLvs5c95dw7VWyi7AqoDDXRRFGjm33zSbnYnW1RSwVxbLBtfLNeJRY",
  "key18": "2eaFtT5hjA2agkwmszXm1s3Qyoro6MxYyAQ2Dkp8wrBLNxoeviGj4cX3J7HhXX7EUKxYdfpwdijZn1oYKRHYm9dM",
  "key19": "4xVUmYuEGhfd32oCCj39BMkFK6ZdG8zd4YCgiWnUpDh1BuQHFsnvhpp2V7JwRXZwMCd43hiJkvyoktX2RV5AtzTZ",
  "key20": "5gRziKPpayVqWN9kEhjcnoaxci8tgJh8hHEAygmaABGoYdp2gDGuqzDKmFXSQ1rsjAXrEHaXjEWDAabb1jiwv61M",
  "key21": "3EqioBehDLEZJRUGV5RdLVq3KcJ8jMt75yzTngy465f4ZF515yZH9J4tCbagc1QiZAfKTS7ACfCmp5L22fKhtXGF",
  "key22": "2ZFHkW9NoarBuwPU5kUQbEEFeRotm38kRdfhWkJC6KgdHnAg7M4wEHLKJyFxRTDJtD2ikP5FiZQvxehe5ixX9X7Q",
  "key23": "m3gVpmb2M39khK769udo2FvroLaa1ut8A9PWZaW1heDQX6w4br899q1KTaccjfbcw9BS94tbXuTMirTddfSifKA",
  "key24": "tYNaNPsAp13mGZbSefivXs8NJWqCouika6bxssLubbMFujnViFY9ZUNzt82CEYdcfH71KrE8hU8Xr75GkVyvVZG",
  "key25": "2EG743MWsA6CLqwzy61dk4z8UQjPF7Vw9wF85fkoSE1vVj7YPeHLBfWFpuyxube2mtdcxvzfSJZTWBsiJwqDRSL1",
  "key26": "3sF8fJGMBLD1ghWXqWPar73f4MzxyZTMTSFNmi8HNoiheGAeVXkKd7GSUBRK8no67JX2wgoQpSo87bRrzezcBKyf"
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
