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
    "5TsQ13RWNVn4yGm96RipRWSYEKUozwcgc83cx2rJ6bq2xm79jvR5St3dQ5EGKd6FtfjFUNsn4sReX5Ma9GYQFKBb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A1k841zGggNX1CYx5fz36Yf1TQZtwjJDx59yQJV727EiuLqhyMJtyrD89reZTe3T16hUvKtXwkqVz99Te4iAnMT",
  "key1": "4PzQNkfgWEPeDpSLCWKoRcXZAjM7LHCVFg5H9ZC9N9szVMRokbEFortA9bqnXRaoKw3cG4wmCRKYHxQZ96z3BaYK",
  "key2": "5HnFnakjBoVgVLYckxM7DHX9BU9aMhkKkxjRWTB4RYstamAj94U8Am5knyVAST63Ry1LdYHaaTRdMhp8KBgTRMNm",
  "key3": "4m4c9ft2bHEQbVSz28FvB5n4w5hFPPxWHs4DBjv99KXDfo2ucTy6yL9apkHT7UcUWDou87XGzj3fWHeWS4ev3fhy",
  "key4": "4FZTwV1Nx5SNVrxL1qCpZyson9qGRkk2X5HhU5yjsGomQWdSWMaQyMe4DKHSYdjnLQVjsGAb4N3MwntxEqbK4FUN",
  "key5": "4MsitdgqqgCfrHBsAnuREWD3SLjPBkov9EuDtTVgARJyVnymYk3YT6Gdf6dPeddwmNEXnyQYoRKQpX1FkCYinVHM",
  "key6": "3rLnzCmH4E2cZYpxdcZw3jb9p5PxGkog6m9a3kXsoG29KFfYZAouJp9S9hhLU6yMEr3qBqtF5chzckbrekRKM6e7",
  "key7": "24axFGnAqezYZHGveTDVVJaQsvokN4EULgpJVyvQ5tBHsCwC93MSqkN2LnSMMA3peK42mw65o1rh9wc1gho445Km",
  "key8": "WdzFf7yZvKgqVfZGzvqxy5seCJcr7C9ZN3dbZxv3bi8MbQh7n4QVykRfx6bmCGyrmSRRTRcnq2fqSdoheP1R3Qb",
  "key9": "74SXTZAEfiEEgwLcSM5eqMPPNUVGRx38cjGMELPuER2upYG2Ru6yGrZeuE75f7Gqmuxmc6oy54gT5h5D9CKuE7D",
  "key10": "YMshk8r4BJEJZ8FbuV8bDBh5enrsMQLthzDmuiswVbgtTU3ZxTnHrnaHbS4NaAE2qyWyhjvRxs9KzQ8ogiSf65i",
  "key11": "3APyfE21GXuSkry59TKCPAq7fbQftdMiSnMx2Ny573N1J9QbRgdhMiv7GPJiVo8qCt8iESLVoT3VDUMTGHfmfdgp",
  "key12": "46DNRxfjUFCjs3Dp4GqPiGcJuuJ6mcQrky3rtHtVzVaukfSDfRN1xhAaa66C5h1Shz4pGdUph4tbsvU812aPX3Qp",
  "key13": "4m9rdkbCdGxRsrsLEcBGyjw22w3LetFjGo6deZvpj2BpxFQGDYYBAeLZxiSiZ8hDYLCUkDkfJHEhegWnVpexhxKk",
  "key14": "45q7vDKPhk3pKPgdnmktQWzLLBq9T8vcPrSDtPBnsx7MSnFapDjcJhXgeWtUAMEiWTML32rd4anwqBEwHquPu6zo",
  "key15": "2fX7j2W9DduaZ9xaG5NVA9wT8s4RdcnUK3vDgbe6VqJvURa4xmMuKYjzusjwtkKhW9d5DPHqpkcCUKMYVkWAUMiK",
  "key16": "3WS5GcPKVtJ7fgcL6wnEmHXh6ckXRswinmGfDJjzkkU78Q9HHZ7yJPpRT5K2TuzkRTTNa51pBTsFyQgDwgdDkg4e",
  "key17": "5U3ARyuvGzPQHD1FRtpjeqtnAbYyCrYFichXqu23TNyf1Z9aoS3n92geyLsSCJZ8L1hr8NSG1BFrePTK2MGjU8QJ",
  "key18": "jgB8yechz4VDRbSjUC46S15DkvxBL6W1WetA3yy4HiD6GieeABd53kgriqdpgiCV4e9zdtHDR1c8MbR9gPuyak9",
  "key19": "4GdaxtM6NKv4HyTFbbSYbuGH4aS71LpNCWbNGFXBPLz6iBZTK5pEHWoANu3PKtTRqjbE4zB1K6HafvBUmmkyuvCJ",
  "key20": "5Z7hU7m1L6WdjAadjn15WbowBVsUX4JRVdnbPERG6fwTb7uRauxvmpdBY7tMZuEbpoYp59fAT43pYerUFBuzADUS",
  "key21": "BMcJyNWtVXkMfbYKGupFmWtW2uyvg2wg3R2symmoLBcgqz4vPERp6HT5UXEix5o5MzBTzgJTDYEvT7aVYnV2bno",
  "key22": "5QMCWYiUThzU7dusEeNXkziP5oBoGqfRYjtEYqdVLretUjoTVcs8cjHppJtYxz1vrb24xPuEddNqqnHnoHEYKhxd",
  "key23": "3qJfjqU4bar4ovcC6fWngtGAPfXjpd7MXjSgpkEnD73CTUsUs3yGCuQB4Y6vSVpa5xcGTK79SH9fmSg74CwzhNNR",
  "key24": "5mKRp26KM74ePJuv5hEt8CMmtXai27oGK1h8pfzooSUYyqUeRQn9qUE8Yn6JX8wvPMKPAUWPRBH91WCXSszA8rTf",
  "key25": "2v87oJTfBASe6N8tNSFhZrftmbDEEGULWbSSH1QzTrWozqd2DakqiEcyhrraj4quU37nUaey3qUQr7kksRCAWZrK",
  "key26": "4iZAqvfvhK1rxBRW3kBbyq6WBYfd3w7W6q9814F7ApaXx2CJ473TnqeqT2f19WUBNBTfsvJwB1rzU5CN2pbxPJmG",
  "key27": "4vUHEsacQCLokYn1VWkrdybecs1fyi2zeMMwQ228vTJWQ96S4XNL4JBYZXZhc6RkNboD7ixUwfsWy8AvNHB1qc2n",
  "key28": "4CCwnm7hf3h9zKDhET26VAZeY6NnfFUjktSuy1MGFehKZYMLwXJyMt2YuMCTx34DakdzkPApwMTgyWeZouuvbju",
  "key29": "37HTPSLzuydHCFssvt1r8JQtqqKqVGNXAKbvipmSmkcvzwJ1cNfCKvPNqBGRG8zWGxukb4j3ZCEfAkqbMDs7r2cq",
  "key30": "4mhMUHEfHw5nytkDkPBxu11S79yCLrqUx3Emgc5D6dUh5eWWdYrz6hspZoUJaqFsXwGNz4DLSvUQ97zn7tGErcTb",
  "key31": "3QWUGu8rfkiXETyS6hQQzURDv7gMH5Uzaf4GQb2br3ySn3bmTMttKsSB4Z5xcbbyfpL5xq5hFYubK3LVAAEAP6VU",
  "key32": "2Y1nqrydjKe4ukTZQECMFr14wVgZ5oZruf4JRFwqnGJfPCudjXvfqxnLdrCCUadXRSVxEizGVscbQhxLfuG7P8fG"
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
