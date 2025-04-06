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
    "BY1wbGwJ48GQiBa9wND42SKrSgU4yDvGH2vUwQKKorq3YRCiMuwLhaTtFu1PShks3T1YgTvCNmBwDNhFZ7wfDxX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2319ZijWF4uybuRwarYPie72jwr9K1LKVdoohyAMR1L5UREkDxRbxtPeWjqNEpyMxgeRUbEBYKXjqMDFafiUrEcD",
  "key1": "2hUwxUeRNvMVib83ubUnNzy1A7zGZM1XhcGaeWJ8P8cr9NaiNwA9cexfW5u54fHUZ6GwrnHLgBr3jxSUDRoQCCvD",
  "key2": "t5BzJn1rKaYDP2BUaCi9ZCP6DVVt2V9dS1dapiQaKeX7Gbf3q9euc9naRytdgFcyXRaj64m4SCQQqN3sRZsnZiv",
  "key3": "2vYM9XVvuT5qSrkaPKZP3zws3dMm6tXpGx8NH5pCA2HSN5S8Td1gbNcfuoZdigoJwRMF59nuqQ4KQCr7aBbGmH1u",
  "key4": "22AgFJncpYyKHqW7DVLVJD9MCtMokeZsqgjcYfSNvbVbmxqHaSgrTk4mZjfv5mqSGTPHN5WSywWdiPQBDa281BWi",
  "key5": "5N514NQfDJXmfqFzZ6fcr77A9UbUiszp1GNMxwyKA3TyBjoLKvCRCsM1arLyvq1CNEqAZcWg4r3CQ8RgaHwgzoFn",
  "key6": "5ntK6gKXJxzjYniXSPRL4TS2XFQ2rgW5AmP6E8pPx3XkVys4jCKJhYcrPUBnwLzrYXFuFNa5vZZu1CU3uqdnZ3Cp",
  "key7": "2zQPjPkqbcFYpwfTqeqNbW7NdcUnwVuVJ4AqqSMzErNGzbRyH8qcREUZg6uyq7kURKiKLXqZQkN5W5npWB2mY5E",
  "key8": "Co5tAUyJf1HExRJyMPbjUtM84a4TCtWRjQmxWiBHrdDs1HCjKzBTfoa1VrEgGRLU4YyMtSa8vmM4xhxHSHzNqkA",
  "key9": "VQ6ZeSaND3mbUVdDfwzwS7UfUBeZoY8Eba3coN6wFtfgZgjypY8T94CzPa4DC25sNDBTaURNrj2pxntjnpPD68F",
  "key10": "3sCRwzuARSDmhVi7uf5mCXMktonPJBycJQrG6oz4wfssMnBLdj95WFcxcX911BDT3oykRzzozXvnKjNznroCuys8",
  "key11": "4nLUdpeqEXNSh14Y6U9ysS1xKW9Yvei3NXBo7uigwWfss4oTEoszNVQwUSRaTMTbbHWnSuVfUnwnLXJeT4bmUSij",
  "key12": "2hdzUNMMeaHmmCdoNyAhpXukjVnWDr7qCiNTkNt5LV7rsTBRQ74UJVHdn9tzRUNPCGiw4EuHWTMBdgMX7wi94Lkr",
  "key13": "2pdpEsZs4ux1iAZRmQUvjGbezq1LzwxVS1o6iJXFQgN5YG6MDygMfAXQGdUaPUpUoLDXiQs6rDKCjSt3Q2u1wcmc",
  "key14": "hoFHe2QChUCoae1WDVErckSc58GZVvePVq7tmdyetkBijAJhuT9DpcoByZJRbLiuxCFiC1FSUTswjz85nBz9UmD",
  "key15": "hcuM8TNyp1AKxo8uPsxNxyyHwh7CE71RJZWitRgSoxYJgxAfqnKD6gai145RRR6cTsCEp5jQzdespUf7kLhkkd7",
  "key16": "59EaRu9vteUhs7N6uqm5SZdMSwFUdVYSdWTjVwuHhMaUkHvevfT2u82QgBUZffxLQB1k5MeVpRWrLJJfm4aPFvp2",
  "key17": "58yhaSY1RLtZshuTkjFasGbAe3JyHPov1B65J32TTy5pcdQu45gbxKs3QUa9UwGs6rinaDPzyEfdAGq2jYye8brT",
  "key18": "GKCbLLZLPrEFCw57sBKctqcwp94PeDKZPKATaPGyAr3sGsudQNsF9qzHgiVWAAN77xYCVHEo1C9cZPL6fg3c8pj",
  "key19": "pa4TQCx1JaRV6vhk7Pro7jKx54TfxyDX8dj9JQFzambiySPKvupS3hKP1YBzRnMfxbeXbDnq1UNtRsnCqMM5Cs6",
  "key20": "5BEE1aafKQsaebzAdfQMgorKZtKTuaMGxFfkUsZjLaFPV9CKk7hAGnu67brJg89j73d7adJTHTQHJGFLXJQr4UwV",
  "key21": "2JgNwxeTHSacjPU7TbLF8XHfrEsgAJxJyusPSAXnsxQPDwav9aEZJyWpGzJcGqGoruvXt4qNWTMttt1CEHjjWaZM",
  "key22": "WnxSGzimRUu4DKMCnFn6m2Rmrus3APo4ePUAkycf7rPgUJfVPADha5GghBbstSf1hfDSw8Vw1apMS5fqNggkfW8",
  "key23": "5Dszzn29V6Dp37JXEXVrsJWDFGSMzhWr4QgiF3EHE3sdX6HBSTTLe4Lb7CtEvNb2pm7ufywSmJBNmn96DgcjyNW6",
  "key24": "3AD1RrAXZu2q3PfNWmDJXybKcWVXfCkYvmoHEQgeUyrRBv13mSds9B8ZEJuqK7MqgHisMQwURmYtZ9ZQHCP9a8kD",
  "key25": "4L1EYo5mChW46nEJE6Kvd7gk6F77VpHo8UzCGi56enaCVxFBynsGFEijcXu5P8bvo2AaWz6nLcjboFXHMrPCWjkM"
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
