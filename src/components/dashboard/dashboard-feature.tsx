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
    "s5yz9Fhe3HSFUd7Vby9JWvC3TSQjLaGUgcSPEC8zbEq69Ab5NUZFrWJzEzFEJeHko4s5DiVNb8GTvb5pjEQEHdU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m1zbS6k8vodgdGbs5EsYw2DK1XWxdimv3cdB5XavoZc92e6DG5g8m1aCsobyXr8M1E2i73bv4UKWVsP1UkUU5ck",
  "key1": "1Y3oQzKwEv3as7f4qXGUePJL72A9nfp2yB9VgGMyXebVNSL1g4Xs1DKqyjP9kQZ2UYQdseLQz5jVw1oV3vAppgu",
  "key2": "qo94KPLDRWs6LfFfA85bAehHTth6N6FYcDJT6zBzCfYSZ6KB7UGsv9vJWnaBWDZy7mN69bC35bDpN7U2hW78aZE",
  "key3": "3ywUKySdfU2xVvwd3TBz3AhfSGFx53uhp4mVgiWbmrVMGiButMmNEytgv8GYzZVw8kr6WD1xwo6ZnGVmAxPSDAgw",
  "key4": "2AWrDfQdt8rM8Hp6Hf2WdKeQLFmigy58AMw6UzevWhQVc6Q9GRRGDCUaDFeeqKbgTwjajsVvK6zCc6YHJZPJ5DiF",
  "key5": "toHuEEb1HhQvW7REf87EsjLNPAUBsK8Whvetz9nh5Bj4eR6QvyLtVnTS6T9QtpmngYmidKAmBtTvsqUK1DE4ZS7",
  "key6": "5GdQXZ2WdquCpqB5sTbrpDPh5Yss5ybjH1Yg7E2T1i5EcFkS5Qa5Xsk3og5k5Uo4sbgCMDaJp3626gwzxxbyWSwG",
  "key7": "2YhuG95FPCNHeFoEn9qVd8wDFEEkZ1ndzJ9TyrQT4BUwGroNCPgRgoM7UJ5pYiG6TatVsYxznkfv3ZWex8VGoBMA",
  "key8": "4ZHf6o8spP2kHusd3UhEqzcrmLsi7VzRJQAKadfx63AgL5CfdN5NrrgYcwrN3hf91nGcfcSDsNpr9Yrrr5wC68aP",
  "key9": "3vjcL6QLvtCLdNBbx1VajWaDHcQxX4WWJ53vnq7CAGFocRiJ8DscsB1y2uXGckTXpr1os3S7gjYtG4XxS4JrDnC5",
  "key10": "551uwU3FDriDxHt9QK6FLwRTHCZHSvZ5c75h46wiVbfF27NZPhqwrAtJXiv98Xc59x7uUmKDe2xwBJw97cUX5nt7",
  "key11": "5zL88vB4CfEcLLagibS9Fmp64goyfpLxX6sumcD4Joc5TwiDaVmd4NfKoZqv6TgNhDAwjpw1Zgq42tNthMqheJju",
  "key12": "56dDorRHg7LKuPFncEu9CAE6yqeQUxFnm9fhRXdu9f4x3UDPgUpnoe35b9LiDVTzSvufXepWL67vuotLg2Wixb7G",
  "key13": "5tuAXobKqpiyDdQe4FaZ2F9EhAsouASXvW3oBQKWZh7Y9VZMWpaVA7rS6PukwosyxcfdZbcFxHS9FChXtNNZxNPL",
  "key14": "4eeBc7Ex2fveGc8Ne3j3a7ESE9R9rnge3cpaSry5bTyBbmgfjnnTtuUr8ikERU2zdfi4bjB2wC4aXfzC39VRjPks",
  "key15": "4d4jgEFBbLbkPb5oWQ91ydLe9QcWzkW52XA1v3q3XaJfpGXcrHRu3eRmA8JMAifPXx5thB7XeRHM99Upi3wgtmHt",
  "key16": "4EKDby5cvttHFLpcFDnCpvWxnAA3fnX27Hgt8UZZBsFEKRGhAGsxFE4XrfGsXu3RgfHGMm6iYHireUk3xrdRCnsP",
  "key17": "GtCgXWFBfqxJqownVVykWAyvw9pyfEEFu8jaGukq5hb6YgeFHjUbcR3FMQ9PSK6Cpj4XGUfbD1b3ZfrXo8aFxry",
  "key18": "4CKfcGDt6dizjp92x6qRHL7zeoeQMji2oCReMVt6rMRfEh2J3p2k4LHPGFYMu6Beg2vA1AJPU4sDipRe6r2UoE6t",
  "key19": "4jPPfw9kqJvYvbe7w6KV6qZsn7uFHoTzy5emVdjHT1C2ZZDaphSEAbLyTjmmVr36tDwau9Ta2DeZuCGNBk2asmMD",
  "key20": "5cHNBUzG1WS6LKEUp9ioifkUJQYRyb9fYbX4hihhwQxTdivZeXZpbF57YKvsVFmPqMW9bPCJKoXaCXQM4rVVQjLY",
  "key21": "yv365NtXneKXQdi1UmbNrRBKK1mBL7ydVWdEVSuRtYGZ6WTynuEjv7hjTE9DhPM2nnZZsTXNTgoEexUoHf6PvRc",
  "key22": "3bWq6CLL1uzn9Mcrbw727vR1vqbXRBWyWb57SX2uA6KGArHgBwBgwz1yLuT6bk1J4dJTNpiGbCYJKvW9dyiaeMG",
  "key23": "3FEvbV3BfnbUfE94yaauQqoBrBxYKFX8yDqXuDvjnZGWpFtEQwFznoQmbELbgdtVUYhukCQrGa5MzbPpjqQbRUaR",
  "key24": "2FddxjTNCqRGJ7D1huJXM28Xo41TYdJ2Qrz7wcgk6Fqv88xsJCBvpiJrEs8dyorxq5958DpyNr9o4cRWMFGqHY8N",
  "key25": "48A2uf8z5Yww4MVoHsxTURTogt8ToasnapWNTSBmW6woVF9VgdbhCsr88WqeDkw2HTKH1sgUvKVxe8AS51DCwtAa",
  "key26": "4SZoe1zpYpmzSKiamDv6eV6Y3HrSH1LR4kLZunTNVTvjVahskVnoByro7DTfi1RDfXe8KMJwRfksFmFAYYL7nqPz",
  "key27": "rzxKCnRsWyAbwdFMtdhpY8U3AaZA1M1NsgKyngjW6KZCSyCvzzdR3gUGVaXk1L2e3QtB5e94VuM8pph6vfywg6d"
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
