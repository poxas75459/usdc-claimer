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
    "5VTXRKYFp88kFWNcZKeenNprVbXeu5SRE6mCqku5GesT2oSpT9zqAhaUvLNrhhr61AuWrd7RqbxaV8KoVxVPqAXC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S6bvjjhakAChY74hWF5nKURWW5LhyX7atKzPonBWzFZPHH7XzcewNLExosLQxG7EQQTpWxxkHbVxoJAyQLkbR8J",
  "key1": "4viMdAbijsKdoqtq3gJkEvxYc8bSpESoA1ma1psKpPw5wypPmZMejzdXg5zaGRrrBGTv4eXhKuRSJHxcwnxX2S8e",
  "key2": "37iq8iobFS45M5JcFvbFnVeAeMGTS5WpjwTJuTvRyPEmme2XygWL8FyygJtEVBc8Z25tUxXupPKHwqJZJqhQh2sd",
  "key3": "2vk6cS94PzTyLMqWacvtVxwpfqsTY5C5ta2roWN6SVUsWwEWuNB8C1nP8zRKaqos8FtziffMLkhKZTRHg3AfcP4Q",
  "key4": "35pEnfr5LgvQjyJru89HQCkRdDCDoDYYBu2GXA461RS9U6PCPfxQ8WJafFn3vjEciS1X5vAqNeLzkoBKwd7AtfD9",
  "key5": "22QBFCjgT3nnMVdb775dh6QA7nqhgdNp7MSxnzvwKLngQMvWwRq5uiqKZRM1vUH9wCsbN1iPYWqKQ16yFCRFiLWC",
  "key6": "37KuMddhUQYwiEiWEfavumP3fUzUh2WcPZFpFtefSC7DXdz35wcrWYqJtTUmXuGVyx9KTPwTk3zDGpsiwR3gNVXH",
  "key7": "573dPYbbs4jTagq2JThEtsSCM8ixgd6bb4yGCWbxDi6JqNCLewHhx3KodFsy5iggxWMr8Y5dgVjb71nSiSHAakn",
  "key8": "2BHorjui92af3d9BWFBkhYKJ9RBkkjK5R5QA8ruSf337KmYiygb6oEGhHMrJcE2T9ZfduhtNUTFDFmWxuyrRisAB",
  "key9": "46CmKiHNvnmApCLEyrdVpCadeGQxVSdfJ6HsoKQVFnEPABW3EcEV9CTPmwASqrMwzh3mQjaxy9KUvbfaj7PgT2sB",
  "key10": "2huGqVbSsJrKfxyiHrh4GL6ZnZm4RGTTvMFWgTTa1A8Mgz88cTpDtmk2irMUTjewt3MxL86Q2NccYfb9Suz5dPZw",
  "key11": "1hikUJNQrY8jGR4LMRvfEnuAdtcgjbJbALhi9BXbGLbHo7X88pqTukyhEwXtbT2WsiqpTMj7oLupWwTAEn5JfNX",
  "key12": "4rbkZPXHpd2Etu44vMWVeukZ6zaRXDSvvhV6XrKVd1B29RpNpuKkWFEmcrw1mFNhfjd49YtzrTAhqVriSkNtfbFP",
  "key13": "3rAkGkdMLoSN5VNYsT6zG5EEmUmyFyZTcS5i7TsQ9F4CZ7b1t5spwdnTfYSbEvZbBQE48tf9r7GJuXb42s8YwPPN",
  "key14": "4wosxjeXqcTVBvqVQdUq1v6jBFxBzns49DBqrt3Bb6owjmxoPj46fxbiNyNAg7horsxn7df5CwrAxHpy5PpWcgeK",
  "key15": "2oXxQVv1zqJCkF2qU6piU1iHV7FVaEr9v3o17HN6PkuARMcpiMGUQn4jxpYwP9TVk7kGxJzcDhYkLp5fGYJJhmQo",
  "key16": "4dsmj516j8d2TqV14qdJfW3TRFjKC9SJz1KKigPp3dNxqxY2AZ9qdn9qBQVSDAMeiGhsdBN1CAorsRhdpA42uqQc",
  "key17": "3gfaA2wX6ZHJcscmJXs4NofAqmLvXe148bdve7aFuCLp9iSowxzKCbzycDy6RmnPmHRb578VUYPNt6zEe5fbKbhj",
  "key18": "4U41aHL2mKaK8QvX6rQ9aMRKCjELwMqUcYQuruW6Atp9Au8i5GnvYYidAv3GutzNUfZ3RgixXnjfm8yy1Hw95nR",
  "key19": "3m8ucEm2GqsBh2jJmu7w8GTNpxmy65gPTA4uPBjFwuPtqQnrbqbc56CSxeUUbjLHAPzXjcNc2w6YfQEWQexYt4BY",
  "key20": "5uUypGQ8xK6rJt5oMfGSgZkhCahJbLedDPYg5vHhCZ4kN5v9rPZT8RmiwPgHpQ57rc97A8uvSC8dAZcpWNURdS6F",
  "key21": "MjpHTMqZ4Jj9Gt5UBHdsm34QjrqeAFGKBfVGafKuKjCwHoUhr2ZXEJuWF7QdmJND4XfWUFFetTMjpiav7ZaXXbr",
  "key22": "kqGfCV9c22zFKbVBjNWm61gpxqQipFj9G82Tr8fM8oj7419cF1PvT3JWRZSAHMrV6z7kuewQYZLpZ62wVFtUBK8",
  "key23": "2EZGqAYcKdMjfbeb7gFLMKhSQNATBbL8MotonxDYSKJtKwKMmkrvyYzPP9TGUyHsNew1FUe1LcDBsAmZ2zGFqYaC",
  "key24": "3VBMPDtGaaHhDHA6T2ika7erPNA7Up1tw59nzXKPJWCzvHFzPNQkPyGQ4sKKvaX4i9uDFmnFGv5YnVpdWhHSTcoM",
  "key25": "2G4UQGw93mPWE3KqefvzXQ6kqpZ1BYaVigz1GYDmPAPMhHgkSLjNHvKLKi98FjokV6mBjcepwvY2fEjJG1pAtiWf",
  "key26": "5YuQ1Bu3gmZ5Guy6FPgLwN6qh3sv94xqpjCfHWiVu6mHjDvKLuAHnNVow7YbTJuRKwonoUZW5QwtxahyU5ydnLm8",
  "key27": "4fo1L3UQxZfxinmqBsXpiN4uTswDvndCEBUnPhpFJaaSJt4nCTCP136pVfEaMCTP49gLNMa5as7J7u3TcyirrRbq"
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
