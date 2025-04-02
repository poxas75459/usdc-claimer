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
    "KKmh9TwMGKLFP9agYu9TtBpwENAZW47uKm5yzLwbSUgeA4bkwqKTNWTACfa44fQ4k735XNEooRAQ3oBErVSmsi9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "THH9c5p1hxMh5WMYgE4i2P9XhmJsQhCeyjTnPM1XfNUX5TstbQ2EBrmniRdfJBi52PYasB25Rugi2DPr7o7zQmz",
  "key1": "4A6ruKMYmGG4uR3DdxYKSqfBTS2epSwJhbD4XdSUzAbZEwa2eXvPYabokxMbMVg57aiUhTUxjVMLeHVYDb75J2Dh",
  "key2": "5hxtQqE32DLqpQZAWYtXwjL1tTGTgwFN3AR2zq2TShLt92Ca2d4ZLMmGC9W9ZDBX7wHuzE34WDS8Zk8qdqza3sVm",
  "key3": "2X18rH6XuGN6Www4dc1a9QbMRdJLXHE68R8L28QFQj851xs9VCdjuYtjVHXUp1ctRa76wTJUF8LrhNFdpJxU6WeG",
  "key4": "5Wh5Bv4VoWhcfDLpxbihHbF968VdvZjjgFLEpgTSD6gFvDvwnKafGj5NXWEgcSkzpYGo3hzCiRr6qFnACovptLgu",
  "key5": "1V1VgbhCWrEtGGtaY584AcUoH766QrguGZ3VbtaXkvdLAktQBregNgr8CeSaTeJ5vRMheJ7pf2aKtApZLoCD5sN",
  "key6": "5uE1FEYKP8kS5Ppz84HA4DA2xLe1KRbcTnGPLp3Cb6jKu9cAXNXSYih8fyDgmS2DXcDPW6ANEUdcyLTmq9YpWgMd",
  "key7": "4dT38ynTDcLXSWob8ytgZfcrLacoR7fasAgfbnFpy1UvadRFF7wPHBm7WXkD1HejsZnNzLUdMncWL1JeXJa9n9XM",
  "key8": "VVciP7DujxdqM7LK8CkZxze9etJxMFmXtZzemiU9Csy1TqFdznKm1Rf4ogLAJ9Ums9YFnLy2PGhYmHn9mvYTEFR",
  "key9": "2e5x9GMzd3L5duhB7f2AsEecwYGCW7ZR7d17vDTtgrjt53cutMcFyo2xkNC2QkJt8kgBSeJCLR2FmtGn2Dne2XTk",
  "key10": "5fKB6D2Bw3gS9UkgmNAtdyYCGue8osZgrwKuj43FmbhJ1Au9WQH4XNc2WcRWmvngojq7CEBhLjyciuVhvVCheR69",
  "key11": "2Xs4WAKrSJTaqJJV3RgJMG5VMbtfjTpDAwAhPBwo69Co6yattJAppw2ZuqSuJQqteGRSUuwsTxtxsK1GUUTpSATs",
  "key12": "2kdPr6inqnd8jkUPJoTU4eqHaom3LMkPDRZMv3SmpV55VKArtkQnoo7z74HMCaT44BLkvjNw2MhfututKEtWf1Xw",
  "key13": "p15AajJKwZQaBrLSUNTJYpvQNNw97vrida96umSQSoAKu6LbMSPY2M3vhXfLY54obcZpHRKYogUWRxDqdTdiVkd",
  "key14": "2kGftSbEyt6TgmRjjLKHq5jQcuVehTXBPgAXTHsr8pWGfXsG76LbSibeYDFxxUiCR3rULxVx7tXaWj9ZU3H1jEHS",
  "key15": "2KkgBfLdNXRtDb4EtyuF8TiYrsvGZghaeobSy6Kf2dx4X1P1LMFd6QcMveM2rrVngagCYLwGEQtnovv82FaXpkKZ",
  "key16": "3pyRU7y1QuGgwZEwVdKMBSLcCWv7JkbrMhjV5uv3aFecEdPQTd1uqQDZzASyrnkn3nHYcyRxRs6qF7vzXiCe14rf",
  "key17": "2yTX81WxnL6u2M2ynJUjfXsHNAgseVP2y2b1V4hJAWfefwZaQ74GARt8TbY2QXZLUjqH1qEj1FD2K8s6V9r3dzA4",
  "key18": "22AnXDWFzFPWnCfYqxUg2ddT2wweTDu8HB4eBdBrRYXLPU3c7bi5e5tuotcm5UMBv67wMFnaRXzLyMPoqqYnZhsf",
  "key19": "4kbsD8JFSfdc97ZYHR7AK3bmRHHVsQGVwCxUzwk5sMq1pFuVpmAPaNBD7bWri744xfbW6f5nXSumBmb8hKgZuBxB",
  "key20": "ThXkMUmQJRNcvXTQ94rsCwZVDFraq2iY11JTLjDQknL6NWiNSYMULbUjRBUKnkGVh9JrdQF4Wk7h2jPdJiHHunt",
  "key21": "oPsJZSa9TUpFkbNJFAxrS6S556UZA7SGFXYE7uuhpJRU8hsxoacWrFYGeozTswGY3rvcph7GAgxNjx5gLkSwiaa",
  "key22": "2ve1hUBXS2FTzaDMHctgbAvheNPDoFabHMv9yNinTXNP46BUrZ5yW34RBvzeGvjV22f1XfrWMV3LFKK3sEEoziXY",
  "key23": "5GArM59bSNk7BNpmABfz4CX4ZNrb7BSFSD3kqHGjbZcaLXEgcQ2v6qfHxKyizkKckALChgzPnNnTd6rL9CaaG1cq",
  "key24": "rLahEitj4g7D2Fd78q6AD6zwuCU1TZoTzgsNKzbwg9Bi5267Hnav383WpT8P7Po91e5VmqhNgsvgwUkco1hULXD",
  "key25": "5mNwPyUU6uhP4HKMNZY8PcMG7dXUzNYYsCXjthK3amA2Augw6jTzpb1Q4p3XJu9rBjP176B7gz7kUBnvSV7iRbDn",
  "key26": "3UaudbLMx9pJ2PWH8JFtob2miHgLYVuSiEj3eboFWUwJr3qzvFhcSAvYd2NCwtPrCFhkSrSusQWeuNhftFGKVXwx",
  "key27": "2UnLz88SbJc8SVX9ZrDJNrb5YfpWQ6bkieUd86t3A4NiQ1nuHXz76LAHjeLmNoJdSz63d8b3FmdF4KVuhhEhu4Kb",
  "key28": "3cJFsaRpTqDf4KyRF59Gsr8VG6Jve4Rg6hByrmnSMqmfSok36WEipv38riNreq3Gaumombn2Nk7sGobjEANoF9Z5",
  "key29": "3EC9H5vUYE3w2hgShDPLGgvTPzNebp8A5DC1V8oq5uYjFCT3HjVEXPYGFGCdGq9tbJ2RMALD8nonELcz54eEmxKj",
  "key30": "2VCCNBtWKKXfsWpAhiwepCFeTcYtAXY1FTWV8F4Hzm3CzPJLNp5VZbi4oFhpQEvQEfkrmZQPQJGxGxmfRwgAFfXS",
  "key31": "2tJzXaPTQgxrRcoD9JR5ZUWFHctnxvmmMfWnjrTYqv7DjkRBExCApeUFJZqi7FofnmaXWJx6Dy8YadU7G3vKTqgV"
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
