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
    "2iryavhsLNa1reUWJks4hWd8jAWEKHtQVKNq7vwj8bEGroRjMzdoLX8hLMkyGxs69TmTRroqhP456KuHUjJuMvgE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fTFTUkBV82kJyzTbWcf837kWGJyuZuHgKquhguHrWhhxsQLDMytk3csAmknSRmifY8W9uGq4KVhhe9DQP2Z81NP",
  "key1": "34h5YvS96mVgMsvzk51FogX2SQhCHtKUHJ49SgpfHKAdKrXJ1xqnNQQmfD7zyu5KM72ra73ghJXeC2iukMh7WtzA",
  "key2": "5Hxst3WeQ3x4tNhRe1MAG7j5NkKDnZeMg8TNCmkNKhif1GGcBHZbj48AhDXE7qY9r31tWLwa2MALuUmAm19D5WS7",
  "key3": "5xXjYEBGQHEPZke1tw1PBMmeLn9NMcgauZjTHXcSW4QbDp9UJBboqwqCpJEx11NnYVWsMzmtYXAg2aqk7bD5TrBU",
  "key4": "5SManDKb5BdqzpCh3eizFgteX2Z6eRAymFbwV3TB4qQw6cidTT5PbjXtZWoA4TPmu5mouJ6CpULyWCTJnmAqk5iE",
  "key5": "3nCxzGR3GTSQrWMqBELg3MCBoh86ZZoTzTmQCzYYeUKJXTKcsbfBTZfp6DH6ChLiX41AJsLwnpXxXE13W2BVnhAx",
  "key6": "4vs2GRqnWXW2ikJV2tPaZkbx8WdaLmYJgvNpobroTAFUnhHFgsPA3pf7aihuBat4LtN6rwb6J4gsKy67oF8kq4AC",
  "key7": "3FPGTACKCJsNmKNbEeXGnNKiqq19GYzTrUAEmnhyEipHGGgnUXhVgnrzsdq5kt7heMPyaxorWvKk4a2U4hdZGVKz",
  "key8": "5W34nBxt9jGWqMmpDUaTB5ALrAp1cAfvt2QGgxC3XFzwtb3Lzzm4EB3jvs4JxgCw512jqnqeBMhjmoSsYNyPtSJ",
  "key9": "2okbkB5LLU65MJ6QciLABME2DuFWynqa8h7ZjhEuVfA1g1BkuzDfzcYXEJXsNTs5sCpWzHz3mw3NFUVWMNNnVpvP",
  "key10": "5Qeyfy3Z6YJN5UW4Z1XrChLVaE7hhPyS2cXBP8fgjAA3a9NRPyDX1WN1puUUWagYQXsf2c8YggnN7Y8mWTQ16Sdc",
  "key11": "55Mz4cTJL85q3srXmrm6hEKdFigKPWXY25XxtN67gQLCGrjiBMv5j6Z5p1ow4ysrwEEsC56MkLyvsChFyacGpBDr",
  "key12": "3W3LQeheFqzYz1vUnskH1GCigqQwfQazXrPfjTvY5C3wVNagYWU3q3J7w15Y1NhQRuFPNJLP24cvziehrmX5vmyV",
  "key13": "2EkqV5NyzaiMuazic7HsZdtNYzTdh86fuTugdeWv1XMqqTAwhRUX5V5Er6XAMxLkAEPDbrzXUNfYuAHfNrKHvYyM",
  "key14": "4F4ouBRmRZjqP7u84QHmCJwybFzFp3nq4MRJeiFy7PVv7RP4T3fC57HiezBgBnnsWRzSND58TMNer38JSKGQi2UG",
  "key15": "49NtCaP2B1eCQtXZikYD5nPAxdyb959B9QT25u2LJRpvrWHSir5nG9AdYnSRR25Zu55rtvVKuVJpPVVrtNPV6bz7",
  "key16": "5ikAMmXLSe1BnjNAAV87XfJEz3CpxnQkh4bTFkkdsJ72GsjtubLtfErdE7RwjkiREMNNRVeCmNKJojcEnbXg9fzz",
  "key17": "3oc24CyFMVp476uRGfR7Ujx7hfooFLg1L2x7CgwfyCS8jgvCNrYhsfnDbXZgEw7Wvh9yzdY89ggvnrXPbNF4BW9x",
  "key18": "3YoLJFswtkSaTBGASWhxwDYSi5foVezeV97y9btvSNT9BTiXjWeZvxUykqi3XRqMDDQsVFSHQSUNN1xPTFGAfRsc",
  "key19": "45WVeSBGHiY8BqnKCSr3v7h79s4hhSfHFosUa85nj5pFFG1pceXZctrEpU6MnaXA74REcGdh2iSWMLkfizxL12Mp",
  "key20": "5KEckjaVdcaV3XKVphC2csXQ3kN2AAjMQJnJbRSgjv8vsg569kjuEpELjPFqJ4f8R4cUZRhuLKTxSQkByBez21za",
  "key21": "25498DAEsfstayW1gNxaVHhtPDdohcUF4N3TDQGpFCpG9rc8yP6u2ZFgdP4oroQ4ft2A7FDWL6JREfEnjAh6oqCP",
  "key22": "4ESzBfSdDNP9LqXxj3FYH796DHhrKtZqf1ABPwxBkV2FZHtaHgz1BsLBPXCHJh4bXz53dboX3uhjMwPLES7Ui61r",
  "key23": "4M7ZifxwqPqJcuNf9hQ8VieygfTcFtZm6L2mvQLnfCAfQV5e3FnhqrmSXba7UsTKYA7AbnoGqG4bxGZE4wPumpMT",
  "key24": "46JG8z5qDDXra1a3npAxMrSxqgRMvndwdW9pvjW6zX6MsLNL55JuxpVgBnBxCWGyoY5rqZb3N1mBgy3jwpuZuu98",
  "key25": "2o94ooUapNuzUEjysaZtiEUh25KkSHwS2xWZAbd3W4sDLohiF7NH7xQDKqQBhfnVW9yZVgsahpYf2owipkA7Xbni",
  "key26": "5ynrW3TyzogL4QY9JZepW6mH1vBtQztoUnUEDJ6UV4iQuT54fxoT12He4mrhacetvVpZZ8HGtaYiWutLZSDavZ5Y",
  "key27": "22cxE2aBg75mLZsuErsU4ua62Ss5uKb28kpHQxbrU4Avzj7BMiej3ag7D8qv2tGzLDYhBHMCNcutKa2zLMeV8vx7",
  "key28": "5AM8nyDyB8s5x6pUS4C4XGHhuUCZbPNMubaPdAT3KnU9DVHVrbWo4QYvUdgtUYXKP6beHtNvoRd69tepgYkXEcUb",
  "key29": "5L7oiTkWiWviRaHj7zDJZKsLNtYR8uRBJ5R9rrCEoTmVpMcNJsXDnNiwPfrwH26rqdEJmDPX4v1fcwCgyXYpmoa1",
  "key30": "5PWS4AkEJ7qPSvTor1BgDzvrBuVqMsACE8y16sUEZLASTDRDgUtbEbEEHD5LDjhUqoTQjKxvWePXYnKdaZ16kwt2",
  "key31": "3qBexjfayj4YNjqSjcNzLtw5RH3Pk7Aj8Q5eHjBVD8CYYdw7mrhABHfphhr7oeFeRQgzCyDXU2Mzuvg1D5tbGUsc",
  "key32": "39QvfuLsZ6bXMEqf2jNED46h5cVHS1DGSFioAnAqLpT4zJQe3DiJCgvkJuyj5Sk4eD5zEWGobzcuoCmewVmD1nJ8",
  "key33": "2XK91WxbJEKi9wD24YZAddi6Ci5WYp3kB4kBfeMZdwvsQbhNiWwm7BPMyDPtaP3coNmZCfjHHUbWk7MZgwaMyW9H",
  "key34": "41vfCT6C6wqvNhDMxyBdt89nxtRDWV6opmpodtenC6zF8qGqVKxG1XLvFRxeHh7h37NLkwee3TkXvN5FJpHAAm6m",
  "key35": "4mKp3njesLyTw21yVHWbbpLuJe1QHPMbYiYheooxKvyQ73mmig4N4eYFvGFVNtmwsumBJdAFev3XQXv32LojPF6N",
  "key36": "5hXYxPd7YLz7bZSQT8U4ocoViLaBiESXmrLwTUG4QfX2ixdcM3MMfMEVfWgpKsCTrizV3VvYNMM3EFWfHJFiZTCD",
  "key37": "46ZP1Jn1FHUrszgPRkGMwkyS3qV9G94bHxGwK88T3xrDNwK68r3zSGxwSRxVKjQxo6gsPV9zqv1xE9FwHg8RWbfA",
  "key38": "2Pep8RyESz17gHc5z2jZN4Pr9eyyXp5ZzTGxspS8YG5LuBi8duVuBzWhhDwyKuH5ve61jePBsVdX8BpcBLeigpGb",
  "key39": "4BhtQfMjuVYhfHB9DpHWE9eiwFVv7c1F3KQU1q3vWLK1vAjsSSeYuE5BFGbtDqfFJY4oiRrdjmJMRG4fqWe1yqNj",
  "key40": "28fe2zHk5yFENAafknLJe51RpDHSaZZ99qiTT4Rc2JoJqvv1AAPAitBhxa8mfj6kG8twmeBFrPYpXGTwCQZBsw5B",
  "key41": "4JMvMZaAByLooTZKpBcxodZNp9kuUENcpQxDrgLckG4CTzxeHiongnmyjdfR6w4eoCMYSE7yug1uH39LiXzCGri4",
  "key42": "2KsjqgCXJCcLnWr9BvtWFZKtWbAoe3H41RfG8gTAwB9bT9G6nhZxLgrv86Fd95eWYDDvHbPKyMiyn6p8QWhHyrUf",
  "key43": "4DYvKo28APj2nMfDNxnDW536fj8yBnNPVxTfCbpispk7L59HSyyMU9HHHbcCY7fc3QxdbAfpocDyFZchFMKZ2mWf",
  "key44": "4ntEr2afp5KLEVg9BZeVFNUXPqhdm91tB6X5BPfsSK8Yx2282iqYRiKGKJTLCYE5MfPfGzwKwvBJdYt2QsFXoivN",
  "key45": "3HMH4JvR53NzmtJKrCDFvPG1Ptk5QWtzJzBpYksGaFmxU6DfXAHbLmadG22f87M428DhATQGYKzn9KXBow1uLrc7",
  "key46": "46s3sPW1rXp7mxAwVzUVjYwCRfNvpmW4gqF1GowRwP9Hbc5CRpyrJQy3My43yuUSSjZ3ZF3MGFNUPMnc7owHwjuc",
  "key47": "62aMEbB9V5k3xFqHcNV73K5erLQzoVnKxcAJwFfDcGGsXzk4Ps9LkDxCsmh6SUNvTspD8YMBG4i6aLESsY8KQvG",
  "key48": "5sGRjML9ptH94A1ULB9F3wYSt5bUbZqCzmSWzrc8q53M1uvSdDumupwBPvcwbcEMweMk77KLHDRB25n3i4oD919F",
  "key49": "3KmtiZDui31649mW4cB3HNu2a1d4BeAc2UT7jByFR3CFekseumgfAsRkAj13ihXnCNmjziuuVzZswYa1SVqWqKCE"
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
