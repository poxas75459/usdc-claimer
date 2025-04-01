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
    "rkCP2FWS6YqitBMu79K2yL4zL6E3LPecwCLe99YJT7cW5kcZfoGGG4XDKYkY1VrEodwvMrLyNA2jEF3j5cL4pHF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XEjwsN37SwuWJuvoj15DyK6q3g7p8tdPMa8jqXrox5JoNDFkFYN6a8JqSxL2zKie7pmyAac3YzTs24mMvNyPoRv",
  "key1": "gS3HWoREVdi9GjdzaSSDPHeCvUDL1QHhihVbtdovzYtpN5mpGKrtJYJtfhAmJuRBsVF2KTwGiQ6L4BMj1bT27v3",
  "key2": "24twWJnunPpDdHzFL5CART8dcbLcAZioWRcY32YKWKKYDUEKN4AwDuDHzMueiWrn7ZpnATAu3AW5ahdbvmX2YjvZ",
  "key3": "5jAwLz8bArSZPSiso9ZyMXiCCzP8F7KgX1oTYVTS2UJeDfAHxHRs58fiE9qTzYaEMRW347qVJcgtjyZ6Gc97JP76",
  "key4": "4UMtNMojz1E8MEnWQSwSxTFLFfjtLvTVUyZeiUJmZxXDCiJJqjYaYKWJDdPU1gLCfGkB5ynR5sj3L47SCB8QQSad",
  "key5": "5q5iNYuS1dZmkkM1oGbjK6E7QK7Eq9pdac5tvXLMsHa6hKCSPcfDYyWEkJyEF6F8DjUeyxByW35mrpDL8nAunUtK",
  "key6": "2qU2ATHk7saBZagmRiF1HGXJXEPzNf7iuzx4N6uGBansZQPbFWyY6XdNP7waqRTnEzjE36qa9MRevhCwpC6mm6N8",
  "key7": "N2Ca1o5V34ek3aL5UE6vhQBxVXXZH4eGtAiAKJnvwpURbXJ8WVbbcyjFp2JokWz1TqFYgpcUcy7yM2TWZ3y4r8v",
  "key8": "2dhY3VQQXoZYFKQ6P477cfcLbLksK3fTVTvv7nQAuMdTYuvgu9mGZG5P18Lbmwhe3Wh3DHdBg5cses28JwvRmhbA",
  "key9": "4B4arpvfKrcygnXvuGTqeSiQ5QssPZuUtpiGb5yFwz7dn2VCTtH656etcBa32PaFwoYaeV6Nfz8aBcAFqcHuifBF",
  "key10": "4adhWEqc7SARCxDwmHcPttagWPC2DtitihVx73pypeeWybo18bcTn6bJnxKcPPowoZVzdPebuxseMuD5H2xn1bhG",
  "key11": "3NzZ6xUMTKeh91HtVWRbydRsT96m61DSqCRjPk3oKiMGmQFbtAonWfbF7TVwaEgSdFscfocaT5mkw6oVjdpgmsMG",
  "key12": "4RzMofagQHuedYwaHGaPJ9ioF91Fz5qLiDu34KT8vQewGfrtpzFh3fYDc3a9jjV4NLLyzR7xcSJdbtju2q1Ao9iY",
  "key13": "4bHmV9AA1ZtGmy153cnWEnQQk153nYi7WQPUbCDCBoH6KovgUc39SnZuZVDpFTKX5PvtNyUN5jLT5x44rVXoy9pw",
  "key14": "5KVwqawNS47hEvXwXY9UN8TpEsKuohymSEoc3Re2MowLrETzResc48TNtqq2uht126SuxXf8wetddR7zSCbCBsiy",
  "key15": "5gHCi2VtgiHNUNAtKyVRXg71ZBMqEhMLVbj5CsjnNyr3osYL8xuUUBr8Fm42mcFGxGW4GHVCPovxUNtr7FX6ioXV",
  "key16": "GWnPvcpUrYQhqgx5Yr1Qfz2LvGCHQcix1mxGMSymiyEViYW9cKxsYeWsbdhDqi8h4Bz6rDJVhs3ExPBpFtgb4Jq",
  "key17": "AYndgkmK1z3tEdBDHfnXiumY1buRLhmYCi7nZ8xyNDS8gQpF4r8YbZr8uFPg4U4HkYmAidgdecSstAFPsoHYwHs",
  "key18": "2HxGEerF5XrxFZp9siE5LXJVzmtAzeMUAn1dwdx6WBfkyt9X9EiAnbg1V5bNwV1qGqMnpsptBugRzvNeP9SBiSH6",
  "key19": "3ucK5yon6jSLaFJTkMWLFMMy8XWCSUEXjBvCfQu82CHmGtZPJ4srAEPciPQtoCdJZT4SjvhuRVJk4PeSS9EYqYpf",
  "key20": "zUVajc9L49RnPgTUAQyFUZr3YMSNbpS8JuZqjSqddPmAGzNBStdftrs2GX6zYGR7uLgia2GZar4uWYwpkkK8uRn",
  "key21": "2c6FCiB44XKpf3ttN8rmnrKxykAEsQd6QWQ6cuoA7FqEjkgbPJrDhJrCTNnKVAqYiKD8XsReeqPAi84uQ7YDuKhr",
  "key22": "3LF4jAsoAhzTnTFRijLr4cdAE8aPhmBzHLMFQMAormjU9uZNHWpdjBrvbVtvn8mkaksDhBnW1MWNPXQHMeYJPVYR",
  "key23": "5BMh8GELVRzvM3yhkNXKejjMaZayi9H8WaJEzE4EmmrGXhJawEZpXkzcYDJsDf1YtYU9KJsFVso4ZJALwwcFYUqf",
  "key24": "3fLfdFJpDMkjxGnKNAv9f5313SsbD9CWPtz4syZviofzmbBksEgyyKpM8Zv6Jb5dNuVs5HQgdjmdtik1ywp2912k"
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
