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
    "3SfZ6uvunmmomna1AAGJcaKLyVRvxURkyouyB1KRHMZ7QMruL7Weg3zNVCxmr1LAJdni1YKW4P4DiGd8DKkaTBdK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36AknYMPnKqGbYUsazXTNYdxre1VD8CM2pvXWcM2tfdatYkaF8xi2wZq3p5E98FPoUsMqn2a47aYu52rPmyTkSR2",
  "key1": "4jcVDQep5va9q6BXhTSm6aCGpU3MxXSEKjRMUSFjg5zutSpY8DpYR43kCKLEPaHSfaSoYjuffSwna1fSCQyMdVDU",
  "key2": "4ryn8mCVvoCWkeC1k2WxEQT7PXgEzdmvFwuDZgsGVit4EMr8W9xxej1BAnoL2HYN45i7v3tTLoC7H4HN7xatETJd",
  "key3": "2oNHQm2fjfLYHAnPGwvosPrxnxtBRdHVbXmey2pCUTrwLK5B37Z6Gqk9Ny1tDW7puswKzasaCHKk4BtbByMtQ3T7",
  "key4": "3vVxdJYAkXuxpBuKHuJ7ubXe8xtksayvRDfvGkRW5V9ye9T5F1CAp8vhXPRiGEo74Nn61q44KAvewPJeEYDyxud7",
  "key5": "4tQjRQtUQk1cyMRVZpyTod555hYL5QoiRR2zK2Quzc3LaqC8TiAYuDWPRkficaWRG7Bs5ua5hmpWpVNDQ8ac8fe",
  "key6": "pKFsigyZHPcythVQYUPZspSccGeT7mCDJ734pXCUi5v4nZJaxJnVNN5dHfDCbFwzhMZKzdRd1xsLJhpuoANMfGe",
  "key7": "3fR5FADs2KY7DDaKY5uy1vY2kZGyGS6dnrW1c7aBcBHXvf9ANnwyDpeuqs8yL5tNG2wWR7DDsiNhaHrUtp22nKfL",
  "key8": "5EqSF28rFwLWhbKXupBirmehM3sGk3Yaw63EHNYVSFGkZb7wvLtNe32iVPaNGBnb9x9v6qErkKttR8Pfbduyausf",
  "key9": "5471aybRqTii9ne8X7uBPmXNXKJgqgRdDDtMGqhk3gQ43QWguMHZqzco4WEYuxgKSdPpejNqnYRuAnyyY9FAyNKQ",
  "key10": "P1kFN755eDovqJFzufnQT1oz89nAFyA5YybnxvF1269wrvcXpEfn3cVMSonokRgqbx7KueYUXaKv7aU8z2PJRAT",
  "key11": "2n6H8tbpoNCqJwmwfFB6gbeYupC3RxBXC5LLUhNiC8qTM28yXFggTwmrdppDYCMe4cf7CvHgQkRT7qQggdP2nkxe",
  "key12": "3VuJCQjdhBZeSZD5iVthkTkHiqhXYKEfNBeyTYf8UUKaiPWJk9tF4Lh8TN5TwQacAsine9TeRKcV3sJ7k88KjYM4",
  "key13": "5qzawVpX1sMVcHBC4r18GyRmsNstVtPx3CF5XuEsHTKDYoZPfRt71QZ16b7d3XE6vd3HQ5esdTuTg4m4wPMaegbd",
  "key14": "5tExetJR3Q4MERUzvDieudBLsuvv1T4Cv2CXCeZCNGscJG8aHooHDmczw9mxS4pjRGKcSZq5UhzszpPTNC8t4EFa",
  "key15": "2wr6NW6nN2U6ZwJR6a3J3WovFTYtVUjy4D9rvxZPDKNawJ6ZpS46Yx1vZuJLBQc6NowHsyuQKVGKGTadifJDQsbz",
  "key16": "2FFtXt15E5wDYVaXJhwgQNkxrPX6NLFkmr1Pb87GSDFdZTydQSnxyS7CaThVazrpyqE76Dn5qaWZu6GfEK97MSj6",
  "key17": "XTNL4nhJG3EBzrjsjDnojcGvA2EEhuzfuDMJuf4TnfZ17DDY61GvrETP773dnZrK88ckSMRccTDzBr9x8RuwCfV",
  "key18": "24oufsXAmQQcmAzq3viGjE8nYohEBuXw65HfPLCtP5wvVUpwV2icAR3nSzmpZifPNNiLqZvPoHdMgVGR7MvWgCym",
  "key19": "TPZgXQS91RSSqCTmXwaYQv8mPfFhX4FVQzX5mmGP5rEBpqMPDov7GGNbBQ2gUAcXNrGELYbb6J8nTzTZamGU4uS",
  "key20": "5SXEA8pairfjS3gTnPQ8DwQq28r2yAnGUzBeFiB9zqaC1ujmSqJp3sQj1y6ps12csvLLUKn7MVAu5fxvTD88mzkS",
  "key21": "67H1PdKAf4hXimbgi5FzfEHkPMTeQnqRH8CZuTxXfLDDz11w6Rar49iNWLmSkPCdmNUMPQDQa4SpiUX4BEzuFqZF",
  "key22": "4ZZskFnkqcuEhkREq6gcWPCHLsDq7mTTUHYQ64vgNEew6eVAswRbJnBLKJHyc9pNUL8JxKUZnNyHbWouJYcb9HS5",
  "key23": "4wXbCkJ1dKBKuSQoSzhBfyyJQ4o6AiiPcSqRyu3YbGhp9MoetJxrxYoh1jsFncVzxy8irgM7CRviDm9P19PnsmiC",
  "key24": "2jyHc3RcAZna13ttMsFcdmbLjRKqyEkwxAfv4BRkgde7H7zXRcBMh7VXtesH9eXZFx4FaiH3vSTYDLPgB2fQUZwP",
  "key25": "nJ96pZizB9JzPjPPKy7Lij8SC48K8dGZ996s1PbWTpLfaimpKnFyAarGgToPmXSPotSh6gus2WqHUYqo9Hj9abc",
  "key26": "4DnrkqM8eVuX18JHc5jRZ1kqJJrzpUnStJjN6UHo3r4mbDPgNZ49LaBZyeiprwso2GW3rsTmS9s4HjdyZBPWsZLe",
  "key27": "5UD7qy3RXQsJHNUyzxH26FwmuDAy8VDnehTPUP2BfVt7M1hVG9oWfSN3oHJXiQq2QWjYuBuicUVMCfY2U5TXJ3Jm",
  "key28": "bGMu5MHV92GUXqMRa7VRarPuM4QqdtxDaznmUW2JDYx6ibcswqirfy6dKRCNE6CD2qhHJYDb32HfXg39tfSM321",
  "key29": "2ZXxXcaUsHurvi6GpuZMfNrXyQPt6sCzz2Cvv7u9gzpfjwvt8FLhXK2hxaRijazy1H67H9TMctkB9R8Ju7EruyoS",
  "key30": "3Dr2hrQvEurgmTuTsqJ4eoEkhV9bu3VLXYbfreeeLWkXfpsv8iZnqEJnzJT5U4icDxWagkNyoyZaP5YoynbPLpcB",
  "key31": "EuZQPS29QnytvguAJcQgfmRhniPQixgvwCxSLM74m3XEtAuzgi1kwemZ5n4ix6pHB3bKN5zSqH1G5JTHiQo6f2C",
  "key32": "4ztmQVrNsU1miGQte4CsAfQpCMjEMm2jWk1DjRk9Pp3dirfcQFTH7fZ6Q1EVhTVcd15cBuhSw3ByRJWxm6q77UbD",
  "key33": "5bq8WWJe668htnp1WN5QeLqNoxbwVG9fhS5bdXXJ1AJ8iJXNMQpkRR61GSKWPZKGevLKz7uKwVQc4t4MAQh6zqb2",
  "key34": "2HtCDAQEbpmNV6KM661q7VvHaU5YEg27rZqjP53ZwqerLaYzYJTFND8tmA5fpfJMe6U3QQr1Dq66VhPPyGZSxGym",
  "key35": "4Q3ziQjmvNGfhPXaeraoYbufaT7yQGXTfsLYnkpEtCHdBpLza1zngEjFSWvckcGrkYPwZTo6CoKhrurCD5NGeXMb",
  "key36": "4ENfUweTQZhp9SBBzHVAkPDD8Jw5eoqVUwhsvmkFTzoCMUJ2gweK53XjFXK4g5yNgFEcgc6SCwRCDTQQHWtZnfgR",
  "key37": "5sPHDAAUgZzhMArcipYw4fmwau48vpvyuYq1TQuhrppMbryXH3FUdPEvJLgfTJLqKHR6hPPTBuYgMiz7CZv9vV6v",
  "key38": "4dJxYEaFBXY1WJgJHygVK7HYGxj9Ck2zFFgSvMqDi7g966s5hhVvCJ7kGVePjj1Q1GzVdedtBi7vyyzqvaVjajbw",
  "key39": "2xs8cqo2tzfWbHa4d51dzihPsJf44BZE3Buf3TpDFTSjRPEZzitwue4mjyLqYY5dqKHyxn7CE39tVK1qi45E2sJq",
  "key40": "5yUWkYpRb1GFUTetEssD93cgp45KNo6MsV8snVGfyvyXd29UF12WBs2JjYwBg5uPz7jCdutRwuRzrCrDPm18sTR4"
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
