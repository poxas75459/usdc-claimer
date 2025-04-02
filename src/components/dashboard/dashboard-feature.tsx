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
    "62H3zuDSqb3ZhNdnf4AGhz8B5jsR4NSyUFfXb7zvWPPzNL5BUWHW8kynq5LRssW8WRqMT5Q61C7K46T9ir2x1UCR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HcBTb7oCj6dBX9KKZd6niqACPnMsew3HtsATfmkmcfabNdx2nQxtRGj4sv7HJLtMwBEsefJMfsTiHQC1SQVyfKK",
  "key1": "CkY2FAtjX2eT5NbZvvBKxq7hZPkMfBagpy4fato4jvnpuYRnPt5fxaEcQwt6GtFHJcMrLfJ8hWhk8pUS8tMgb1S",
  "key2": "cLSQNQMv5udWUBLwAvZXFNCeQWscLEepcpgu5siE1JN1puxsTWUJRxFxbyu6XFaEwdv48BpL6r7RJjLu3PdfNr1",
  "key3": "jsJiL81uw41ngazMi5JaGBUiSz736YMHXdHkJWoFYC972PJmippefSUm5594UZYkgaYbu3QMWiUjPP7y6fQ3EgW",
  "key4": "3tKWMb2dByuhkZGwZbym1sTrQWhzRz7rRj7eEzYU35fkujKUJ6yJ4oVaBuTnYY7mB9JDvym8Ue7DQUji78TPSAGL",
  "key5": "JMyQ2Pep4n4uG2Zmo3pJ75nfn1pr9bCr5GikGv3muxmwxeTvsNvd6NAT3eyoo8vH98heVErfWaLTK3izBS93R7E",
  "key6": "soW6YZmQcq2W9sS1gCFtx3p4kjYxckY3NsqRfJvusC16iNC3ShYwN1H9Fz3AeWmU9mGxAfus1JXWUgnr5PCWsd1",
  "key7": "3FAzVKRumUh9iUYzbwcQJhnX28K7X6pVPdh93VqozFAehm8YRmUC3ZZyV3KMRV8aJweuVuRqxixALvorKRWFJ9T1",
  "key8": "3GqovKRALvW21uZ7Ab9WShqMDjqtfjNBMTVPgwXpZ6588qYVaDhbtMRwujA4XQmqp2GvnHo34nL3mg3icdrREDGm",
  "key9": "2PGyszQjr4BgnpJowbN2Ds1hRTpVKaGWQvcheTgBbnBRVztggTXZU4FeRAZ3pPmpxEse5m7kTn4Z9CPHV4jpSqnb",
  "key10": "7ffTFmB2Q1hYRnChcYR2fgnZGqZBUpSmSVKSAXcE9J5Wiq3fTBnyBeDCsf66QLiwzcd98wJ6uPhA2YhnSw24FjV",
  "key11": "3HWEqYCepDJKoBJPhLMvrxMGA9EFGkqYW4JsYhgNwzE4RNLipz2LkVc4D19N3ktfhSzvbHcqJJ3dmpCM2MxDqyvE",
  "key12": "63nxK1LXBBeSjnTjE13k87P31uBfeMZuZhwwsAxhmsfPPqLfJbZtouoBJPENhxVnjJLKREA9nZA9dRAxuD9fBLa2",
  "key13": "VnWAbvzCgEQ9PmoNg8wyHcPeBMCfeuuAtHCrKPRbGbT1yscuGbvPMfQEW3gtwCmhZEPtbPDfSe5cZoSRGvG4wbK",
  "key14": "5LaoPecqqrjDX3fvtZWbdzdyJAP46tpdMXH3xbKWrKWdbLRLNS5jtYspxWUePAs49w3hLfA1hviRPtGGHFujDY1Q",
  "key15": "5NMb9hd3YqxetGiUnz2fwhWbVZKMiHKqdid7JpVHRYQGKyBDDX5fLavwBS5H6H7RfFgXLJ1VtT2KktbboorYRFsN",
  "key16": "2hdWmjDSDHoDu8febC8Xi3p1o7Yq5JzXDehJsumrTRWxECo8JthjoCJFuH8bdhJxR5XR6SVgtYja3NGYftPg5WJY",
  "key17": "2sYwFowbRDja2DmUq9J7qfHsqgf62qr6mLDwnzoHaTNPy9GvqjLY7BmjCqFRL7tsGoFFRG8wqdBEijPXGu7Mq4e5",
  "key18": "4sVdxFqJGVY7mVZTswsiYBUGdaWPiBdxEr3CJiHCBsxrs23PxEy4SYaDMLAHFzsCF1habZnL8eAnmAvFPAHXChMA",
  "key19": "3JhNxhi32Bmd6c28K6kZdy7JPsfqdHzi4yVqkZyvvAnT7FtcD4XuEFg97kyM5PHGJjCv6dmG9T4gDCaokoxyWfE",
  "key20": "5tvA7eLvjTSp8A6GqtGTSAS26PcUyovxSc6nRAfj2gdmprrMqgAgdNT4xjvuJuJV1z4pZE7Uggi5an2NtkNbbzzB",
  "key21": "5eZNpYT7Bz979gV5cz22N6Byo8yaiyg4DPHMjMVywRbh7xs62hduiRZZgocwAJWcKT2ko2EXn3edcCAGHszYEHwA",
  "key22": "4hVTjHNzNwqBvrvvhnJaZ9w4MnQ4zgXzNbRwhGQYdE3wXd7vCq4RcKYsJyZDkCpK5QjMWWaoQaVWHqUqrTqa77rZ",
  "key23": "3Bcv86HEspFd8nHRGRRvSZWKMkZ9wpHZ3x5t1kdB9M7fj9yVr6H6XtWop9jc6BFFPYftY3hLzRSbc97AvdvHvHFk",
  "key24": "4Sp6AHz6QKCjozeJbkCLXB5PsY1VfzDqtKv4SrD1dQXBnUcqaaqud8V2cnEbBTLzDZdT3urfekC2P8XRseBf7rsT",
  "key25": "62qhFnXxoAm8wuarApLprAFRkxMwE57QUdqrwMMnXdxwdvtqBE8toiJdhC4tGpsYB7oGShFkJTvGGtFFsr4cmMg5",
  "key26": "4HsRjbq111CgdtqVMDUnV7o6FKA6ooQrtfqt78hMBFNcUaohaYug3s7XC2n99ngyjhQrLCwXvmTxgoBCq2B5iyaW"
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
