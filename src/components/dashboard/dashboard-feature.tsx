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
    "YrksR9JKvK8eMbeJ8pRdTdcqjwPwhPu9BQcmb4Ym9UvpUiAhBFT4ptGRCaLwzFHgSwDkGgYKSk6b88oByVAXNnW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AYrvWyv2zubNnYJcE8HnhP5nTg6uMhca8phHbG3gnj3mHtfSuB44hD2JzAE29NoYSme6Avcs87ocZKQXN7fG5As",
  "key1": "2oaJABuACmLkUwcEv9ZvMzL9z5v72c2mxJBLM7wz7MuMLeJBfUS8gKB7CzcY9FmWQwhcfJ6tfFB6VoPyqiwv1bYX",
  "key2": "5zyDHZtwp4kd66qLgXQy3v6Vk4PvaoUicY47FZY6pGDwTeo2Xmzj2bwnrsUqyBQZ1qqntiwtZ2xdFXh5XrZtVHbz",
  "key3": "2ZeCyFG8iEtnxPED6puM3577GfPpou2RPPrYUW656PWZAxVDmqkPygnZBhpkXNXwhNKmts39TCk9pLNQNEQ6Avio",
  "key4": "jtHe3FdQLcfpmmfBp2Amywr6xEL9x45kcsscCiJWFBM3NcoHkrLc2gWAM5jioioYnqX8MhnTP3NFxo3fF3H1h1u",
  "key5": "3yTUEYLgRtVKCEUGf61RuqLnc5UasgQZjxvkx8BF8UfozPtKYm9JxZE8XUDUiEwj4mwLhykj7ZrQExTfpuasfHYB",
  "key6": "3e7TpYjmg1v53yN8PN1bAA2ffkAswda9Ghr8fU5J7GeTY1gngubC6ZHgdZW2Q5Gyz1oSaEqmestyXDMmahN5TEJ3",
  "key7": "4FKP1rYU3LiED37j9m99oHVprRV2VChaKWZWkgU79EenZruPqtspA2TBsJ6prXGMULpfKKMaT4xauLVttHXMNJQQ",
  "key8": "67SUWbnH7ECoXDeTeTYybWQDvxti2oiCM7dNHfDyjRmy2Q59xfBFzKz1yfaB5entAiX9DyxwEHyfHc2gFhjhYpu5",
  "key9": "sgU3VvydJR6gHuhNBsBrdKAzWjjHRkw5nftKpFR4X71vDMXQTp59xWi6jR1Fbm25FXiFud9jyw1wfvarRz3gktG",
  "key10": "3SYfAWgV5XvuQea5AZBAdAb1KnptkC7cJLfGkas8JFnPaG7kHAXArq2Eg8GXo8bVM5PdSD5t67uDXFgA1pS1fBQU",
  "key11": "4wdH4EsxXRejNjWGT5tSceFwKhoAvKMUNtf1Vas3amWLnm39xgJcQgRf84ZPZ9tWbJtJFDCkRPmS6q2R41Y185fS",
  "key12": "QtLXg8mN5A9182U86KTjTkq3YHLCWnJE2JBvDYxXwGyd7Uitpok55a53fC6NyB2R5GuxJwLWrg7FGm6XftpHZht",
  "key13": "2zQ5cQSciPj1PSKfayt4zCXSz57DWoQjZeviehfYNDqGJeCusBdJHboVJnEmot1fM7pMkExdZqX47y1bsxUZYwC7",
  "key14": "pV5v4nVpULroinTK5U6j7iRDxFTmRPRso11WpwDshXvz8t32qsJhyrydiDGEpa49T3Z7qygHJaFtYUzAZjft6ZY",
  "key15": "4xRze54FH7H2LSv6bamsv9nRpHVea7GNiY95FaT9CBDU8KYn1P8xWpmuX8m7DoBispswTs7kkSt77ALx8ec9KYm6",
  "key16": "3XcZ4h2FNZYeYa2CFBs9NpT1hDyqaocAAYDQLWSvWEtm8rzmvQ3nNkZdpcVeYrqftJcKrBz4ULxYGthe9ttLAck6",
  "key17": "57MLDekVgzhpzQigtHerypPCM2HRb3xofe2ApvnJJj1tRWnRQigZedcBst19vi2mtqNi7YnipwdyMPg4r8gRC6GK",
  "key18": "4XHRCqWs2pionTgdShvMxNK6wJa5LYfLBFC1goNtAqLAzQqqabbaaVr1n9TAak2Us8eoMHi6z6fPbknVoR6MkjWr",
  "key19": "jLvZbR9sDABfMbTMGBYKfjVZ6MB2G1kpdKonLUErz6UPrMqHwAGspkxuQdYvriYXZGb3DM9wgAJguC6HRq3gtnK",
  "key20": "4zYtgU6atie61SJxQFQGkhy4ox4cUm6Y3YFbhTjAbCt1Euvnuz56bjXLzQURZ2fsxEP6U4w5tcqvsXsn52BGAQ7u",
  "key21": "4KvQPegPLSrR24BJ53nKMbQEDpzuvprsKqroUJYxHSpURQ1HEQDj5GE9QTk9xuPhAfGGuJmaKfyfm2GeX5bYnshL",
  "key22": "1pMMWuieirzJD3cVSEzRQZFVqPH3vW2M2y7byUfzYzES8cJSfN22X4Bc5h6PmLrmiacx1tTaJPEtMnN3crsqPys",
  "key23": "2sQrkWDfsKhppSfr1L8hukdghwmNGJ7fdrQ7XFqdQC9sfGm6jVT37NE3URETzmGeUBwBTFSRXaFgyAumd5W1cHmT",
  "key24": "4cmj3ok1Pio1k3FbvRcU43uPM7aNxLXhh6cNcryVUW7yXqJgav4jdoDjt8p3nYLjm3sBBpstRDkQpLZQFy4B89xq",
  "key25": "4PQaT8P12Nhn4BsBWjDqKX8y5CFfGSiZ7u7S6NUHQy4Zeatm3MbhpHs7Mjs6u5DBAuKMkfhMjntBsDGvztTDVYxw",
  "key26": "5rgjcA8dtHGxP9Br2aLDyCo8BCvQXhRtNLhsSGFAEYv9tWxReDSuPCVgCJqQGJAoaFDCPeT3HDMdi9hPco5Dywtx",
  "key27": "5PAwKXB7EatHKceH48EHAweaAb4aWEc56mfyJgmo38uVQZ3D2QyMMTRueDxi5qc6wVG2FQGD3ChHGrok4x7q6hTJ",
  "key28": "4zGmGMb2n6CbeQ8eNzfnydNGzLMHz6bKYMt6p2Gi3WHyJxTc2o4vRR6M2DF21AuzQYTwzHHYYxocC97dooZEh6r7",
  "key29": "4Qq1SL5cT4jLAKVoWHfEQqJ2VakZH4EuMcSSQdKJ3jGRrpLB8R1Uny74z2Mxu1yYFhi9bPjXziZy9ZBm1e9dgpnf",
  "key30": "2yYMTJDKEAtk6NMnXnGSoUdD2eZFbaXh9rq8w6FT5LfgtZYauz9BqFgGDBoEj4QnrPvzxTRKf2BBqWS375mo2TQn",
  "key31": "3EDEMpqVrVz4MK38xQUNE1oePkqzrmr4fuHgdrSrhgBb8CFsvWSTyqjwuSGbBbpZPAQhvckGAz2U7NxuxcpYCavm",
  "key32": "2PBgSnTKz2bV4dTiuusHY14m5mNp6yFuy29Kxn2xKtFgEPu8Q8y3TQz4z5gWWxFevjYwPJC2VaA9xjdb23HMvquZ",
  "key33": "z2tJ8fEjhXiY4cyPUHNfJXDmB64DTGhQUgsdTKkjQWzqqgSUh4QNPybNCoB42vJRjpZntnsgHVBSwsdRseeoJq2",
  "key34": "4GfHus9d6Y4CfZto1v1LxjbGmFXU8asDMc2ZvingEYBy43gKbBGp3jacoSUNKZkPoGDA7oPNMyj11ZCr85aTGcMF",
  "key35": "2ZNdRUtNghhpa2M1s6mFREb554eWKjeSoCEYoeJstuMpgAiTighgrxh4iBAetQLincHkZS6yPAWeKDnTRm5WSEnK"
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
