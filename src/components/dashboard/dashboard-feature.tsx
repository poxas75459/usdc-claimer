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
    "3Vqd9xjWvVZvgdhm227wcpUNk8PjgqMmokyAnniphcSVXsvfwB4D6RXdVmqQkmofCHwp4Myr3uA7Q2gSh7nVGiFP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sxoFXPCuaGgtRnh7gr7LffptmMbN5XsKJyKGXqZTy8ihHch4nQLopZ7ZEY5afZLPsLJqCXS9khSM8FFdqg1oqas",
  "key1": "5DCnJELjnBkfKDitLFT8tk2WBC4fn7YoRXJsE2bMd4JE8d2LV9rQuV8KkVHXNsYjYC83beQvFeYQJ6N9McWN8D67",
  "key2": "YwMWqH2PztLMNDCLhFqYft7iKxupHt5yWsg9dgu4ZvC12eFbFznaRF25KU55CU1vR3xzeWgJrd5B1j1QPtQzsmj",
  "key3": "4S9AjabmEtVfw1VfhGVChXAgCHuLBbtHybbJvPFT4KjknQSdaehgqcXDTX7hBLBRnnuWyDCDDmgVxUXmwe4611Pj",
  "key4": "3QRaBobqSjcjUDNNHLwi3TcDxi67S1MjcR6nqwf2m9S1kCSG7bozhNU1v5FqXKtoCrCptwYZz8FGqcqFZzepoVps",
  "key5": "4UEiKRrfnTRmoMNsWTyAeYTMaSnSU4w1ztW9k2oRtsZrRYde4Q1o8kHYFnC8XCpyFuFVWiaCK9oYULc9MQbHaNmf",
  "key6": "4WvacXYhKSSyN5tkHS9S7aRDrL7Wkxj4YFXdYyAGzTeaMAgEBuW6MCQ3AXrodBCxFU5xmHLrAtH1Mvfd1Q1cPx3r",
  "key7": "4si76xGhfVZm4A3M1jgATbuYLNA3uEPRXu7M4WS7sCgR7sCx6duKQ6pAVbFffVE6RikjbTuZE4yCEwFqPXjJPRf8",
  "key8": "43PKzcW5q5y5PV3t3oVFJThWkhTPg4UKXpjBgHy1EJRzN8Mn7EhJLyyPGQA46o7Sh1HDhAvZUnPzwoXr88gvpfTD",
  "key9": "4gkEAreGqdGrWky8b9GUMr5dddn9Q5cUEsujdxsegPE9SWNW9zuSgF2ZrALWh9KbZJgHD39WvNoWpfgCdi9wdMvM",
  "key10": "2xtRVFGUWEeEEwRjh9AMTsX81GN4UjgjA8Bpmw2ydKNErqJmMapg6S8XbvEVMsRGxkUGBFMWun5GMXy3dHpFKsTj",
  "key11": "4EdYG2vooC7mR9wuv2QTfYQ13B2Pj9KFRVp2yz12aQiiCBCb81pE5ZD74L4wYjgMGNT5DJvHCNyRdyCKRGB4R33Z",
  "key12": "2yWAq2G2q2itBL2Jb5uz3YQJ8DYLHYhJ2tAWL9rsTJpoZ3EngTSnmTNfXASdspp5MLgQVt3zJjLdFTqidsfcueAs",
  "key13": "RYdtZg6qorA5GC8skW73cMj5517BYAhfJKGUXinjt1m9hGCzJuJ5beG4D6qUb55RdCG2tWLTLQE5ScW5LsF9gZb",
  "key14": "2HjvXYe2rQ7jq7yCEhWd18gr28iYkMovEg6HVkryskhk8es5t6UymRzh22pc7P8RmV2GUWdej3kkN5drNQsQF6tP",
  "key15": "HstnYcieFin61mKhJZ2Gfe92L4W5mi5XH5t1GMfcG9PRWGrjR4Wi6TZi1BPszDnEXY9cU8hA6W6sQUG1qMw7pVm",
  "key16": "2uwRvnoE1ENccB8uQJAVS5rZzSN7DUpac8e4Mrie7BuiMSVEJT7w2KkZLHPxTEZTsVFbHp7raYTjhWQhneKbnUjN",
  "key17": "4eTV8jod6XRwXGSxvNmRYxbhcByGUH7gczxCGH99j1iCco4W4hNMUkJG4FDNa5V38doQnrq5K8PT1X1UadeM2Dnn",
  "key18": "2ojRSXVxeZSUft45gFZADbsJVhJbMGG13jdkgZFXpxwGsGRMVy3JQFYb3xiesUwXvyNGtxAya15953c4DgHRMScM",
  "key19": "4JWC7SogJ1ebe3fLBDsbRwmBeCpBMJnpEdoYMYSM4sNccHnERD7jgNyJtLzKFF2WZQxiU9Fcc48jU6RejUC57HVL",
  "key20": "r5PLmUQbX4QX7G34GL8DXb4V4EDsJPUjaM9UmJ6hqucpsGsnn4EVPkTR47Hgtd5Fivd5FTs3Bz4hJengDvhR1HB",
  "key21": "5ddMQ1SpiQwFX2XfFkZ7WwQHTsQCw7gxxRNfovhJdCMxWr9LkcGQ1PJ8oKbSKwj18DV1Q1WCRaKWzAAhMUde4opK",
  "key22": "3cEzcKBxYbW5uaEzALFo45NaYGfR4Zr8J3BcRuC7PvbWuGYBN3opw8Fxz7QUZVtHCVQ9Cmb8F9k63qfscTYfNCCZ",
  "key23": "3sHMhgoL1DE8dGNzH4cLmq8dYZ8k6PVygDx6hGbjgErZ5VhJrqouDBcTqAJWLJUiNgvv8Xv11jPa6WPAtU9Lazgj",
  "key24": "3CgzChsH5wyPSEhGpFsXMc5qLDb6UBGXAKHkcSHoMnc8kwPt7qfVn35ZJuhVteH9PoA2t6sRwpsuLofz3X4Bg4Cv",
  "key25": "58wG6F8Bu67fq7PeUVggaxM9DBJrbnVf669mbWVSAkCaJU5aJuSYEcjh9iRU4SEiF8Y3tfFx6t7iCFQAmFChnxKr",
  "key26": "5MpaWFfqjYc3FGVbZyfVVwULpdrYUQq8E2amjqE8FV34ECXWQmdYj8MHsPTDtMh9jqgVV47FC6irJxyLVKjnt2Gu",
  "key27": "sMNULDM6AxKm8rG1gUdvjoBMW3HXtuqZz6H2kHWy6vMecNBjxy693yLmB3KkxUJdzBSZrNGr8ifwFp3Ts7m3mom"
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
