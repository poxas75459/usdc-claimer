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
    "31bjpDyRS1QJCY8CALbqERbby8NxSaKoMcBAc5RTiXQ3epUxAMJHJRjEEmXCUVLr2sLuMbWyqgpoZ1hiWCy8J6GW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oByE591yAvfT7rG1ijpYGTKHZpFw4awoWkgExVnMhpRVQQfWzH95KoEiRXS4z6QvwEWkfr6GHsLGNTNF3zHhdfg",
  "key1": "39craiZh5gAfryGHpfGx4roxzby7LTXQHC1Uk1By65HDYyFLHPdHxuRUX2ASeVFWmmt57HWMHKYzgnwMpiNSvgg7",
  "key2": "5NSmzkeF9rctoFFueBeMxexxt14ccrEEcV6zjbF9goiJA4B37zaxapYEndZCjy4LFnHy2yP77197t1DLrbHpMMtp",
  "key3": "5qtWBmQ9FWUmRdHEDdaKYpiCXGHHJokZ7TNY1UqjKZNs13wwMSZszZo8j37sT1WyZ4DEEnRo7Q36NXS8bJS5UvsC",
  "key4": "ok5sqcb3pCqckxRVJFoEUfff8STNXomLsex4aWTM6SHRnBBBDUYfYr9g3zLMcbFBVtjaWbojKRDXnwqa1YLMt1Y",
  "key5": "4MZ6deWLf8QTTfv1vmNV8qfnfhv8qXB9ZLEbWXx9LGuM7rGZh8ED8rH71tCNibPhSCmsXoyJFxbSVWSxrRhhM2tW",
  "key6": "53DTK5rAdCTN1rMDvSsXojrUrsbDyKULFXoesC4QP7o3EWq7HZXrYC2n6C7LR4NZn8AA5G8BwSm3hJRiqZ9PqPGa",
  "key7": "4smsZxuthrf3C5Jnjk6qzoc7j7rkf94smBTzqQeBa11uM1RkyAUBjUJ5G9Pt5npq256mF8df6oH47v5r9Z2zwYjH",
  "key8": "5V5RuXJ3CCkfoLox8ymHwwvWBhW41hYUR21Mdkr1FiSfXr2FTRnzJ3eHuBoppces1zBDWZ97SmM73osckuvufSz",
  "key9": "4N27LmVaUxckaY3ZPbud41dy3GVqKPZZRV1zha2ut8jAzCygPK5FytdRoynStiDRjkfvqarskkiez6jW4GQXeSBb",
  "key10": "2rwtdmWYu8j2hioAL6EgprdLhfZ5idKAro9AcCYBcZL5yjcaaSenLtCwGssmcDrjFvdGV51u5wPdCy7gt4VPhxY5",
  "key11": "5m9ukPWfnK4FsMC4VHkWpcJqzz3yRZSJHegYqqyHRUL1jHqRh2Lmkwa1V8j5ZHp1EqJtBP3umh65LLC8D9WMEoLP",
  "key12": "yHmKEFbPFPH6YnZfQvhgBEdi3g8ctYCeew2u2cyKngq7QehLsm9piVC3HcbeG7ieEqWV87F71wME6reT5ghTZbP",
  "key13": "L9EbuP25Jp5rfHWhyEmargDmDaCNLkwEzr5AL6pyADRJxLPSSg94crAohEg89VTqZDAFUxq2wjXRZ9qaVenh9xg",
  "key14": "3MQFknpTrMeFjw4yGtQKcPu4eBUGqBpT1ySdpZMVz6usxCbvLrniBZQ7zvrLyNAqSTuPcDZ7PuhHwACzHoyRLqzY",
  "key15": "5KnxZmBe7MdxREWY2V4CTox2XWHZ78hiCALUj6nB9dsbWaoRHDpWr2JG6sMSMpQCwhTs9y9U4Z87pbUCGniwwXx1",
  "key16": "33wgb3FZzk9stA8Jh67ZNYWxGofAWa5UdrsroVQg2RgLRo6n9UYS4HyTuKuiM2DxPoNsaxTxt2wCukUbbwZVQ7MA",
  "key17": "4zL3rctaorWhw3SQhtYmy7ienoAYz4MU9jFyQmzSgPKzpgEtKkujumH7GizvpmC5xkTfSUC1T46eHFq473aJ5oW5",
  "key18": "ZqhpRVYE9YKnx13ay6jK8R4bmJsiEQo47PDLTtmJ8VPSHggZ6JAXUKGopUCPbMed8y28LPeZRsfTuJYxvmxShKs",
  "key19": "4QW9yA8BE769gJEh3FNDiD9h5ZKDd7NqLCKsQ1jfUAP2V3Ag7Skt6KM93N767VMBP7sT2xhxJfRWZ7469VnevfjN",
  "key20": "4Z2GKRK3frVCTXQ9D1CGXS4Sy9FVCyuzqsMhbXGYQe8ifgs2hxfxDvR2eResRxgR7prEiKmJAjpzQCfFM4MRe7Ei",
  "key21": "Bw8ZvE81s8VpMSWN5DBC7gb3hjCVR5uRmZmSFhRSmntphJB4jZcSvco9eGaE6T2DtFtSLvrY8teLXvULtfLuAke",
  "key22": "4SmFX6ATtp4N5VBTeQCT3zy3ebfpB3Botx6dYPEWoTJ43WBR8F54QdXhzz6NQPgY4wR3BqLWusNJQAhzgYq5mbFp",
  "key23": "5TEXztfNEf4SgDggFWA8g6uaNqBfWxjN4VAt1wNQguzG7sixQDwjwJ2x1dsGsEWNf3Aszh221vtM9USANx1F7pj3",
  "key24": "2okzxMPDYgp4eenTgz6i1SYLBSPiQyJybSXZ6zrQU2fF7zcD3jqCDsyaE6NhjJprX7oWBLBDQPQoiEvd7S3tNSMJ",
  "key25": "5paM1vB8uPQzYwEAYUx39qxk6V8Y6RwiyMJ6poSjm3foxfg4USWKEm2RzYxFz84iEqF8EkaqsiGHUuVNCL1hGLCy",
  "key26": "3uTMRWbPfpR1QPAwHs1fsp9B6w8fdM757tFzRdkZ1AEhb4poXaDBGYjAaSM156CPXehGPssKvmjpwpTWruoDZ5Gr",
  "key27": "2bWVPUYApgsZkWcDD9XcDX6odhmFUpXNAaCz9RgCVtisa8JBQkiYsosSqk83HgDtvHmycXbtuuBNnCsfsCMQcrpJ",
  "key28": "gPSJ66meJXpckgycSGowQNBoMGuZk97PGrQu77LsCvtaoD1erDwpmXHwc4BrQxh5nimgTPK4xvK4K1vjSH3xeE2",
  "key29": "3rsBHP76YifKjp9pnf8LstPqdadw7v9GdHvPEyQ9GB9aYto3iGN49VFFuqnCF2FBUE8eyQW7AZQ4ow7BCGtPjbpt",
  "key30": "2uAv82eBz4afzFJfu4i6qCZvZ9Ra9wkTMLBSvuHQxzZtdftXwf3Y1ofATw3RQBjFXt99xzirn816E5cAc5Jdmzqj",
  "key31": "4vMs9f8cdEdVh7jN7b3pMdn4EKoU8ARTVBWCWbobLqwRe4gWZxP6xAtEL4gT3vo27CtMcP7ugbGh8mziZJHc2dnn",
  "key32": "3rT8SVNYXP3R4p7tQzmUFJp8irYm3BfRHA6eVpmsHoVHzPXzfk83QcHpEcw1Sj91WRT3KvjAUHwqT54kZC6LThmm",
  "key33": "32sECBZ2W8vQgcnSthDTGx3tmWREAQNms4rKVcpBfZdNQoHzPDRUkmriZi8pzD1hidBxvmBbc5DP3XT8dsJoCQdc",
  "key34": "2DLd7Z8326FNU7cWisAWkjNHAnyrw2sqv8cvzY9dNH34VGJ71gnwrX9Q3aRBRB6HAesKjtDNWKYJydAFogP7HhAu"
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
