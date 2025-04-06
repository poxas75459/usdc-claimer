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
    "4XmgC7t3vHRetZwEMygJ5mmZSUVRiQGDNv38K9wzZyUiJfzcAMbtNRFNM2AdPeNngtBQZe935pcSGskLWtgvWF9m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zj6uj14sHGQHDrsHCYEiutWAryipSQVtfShyBDSwtPG4TmXErCK6dd4zDZuWNcBAdspRa7mJvswDqfJ2s1e75Ty",
  "key1": "A1xzXhMChMZef18Cjc1seViZSKBSFabFTp7bxA5YFNc4e4yR85Fr2xaMHgBQp6hSH8ivEbE3HLBMKg4UyVSZnX9",
  "key2": "5sBmdPM3zy1ugceykyt13p6bYqwnEzjW86TMqwG8i191jdot7Sv7wzBiFdCh15gnFMWkd7WgYT9kwr2JDcZP8TZ6",
  "key3": "2eAfSj42Vqju6y5MiGrJeLCVUX1N4q7yYC3Vq4GuZGtCBT6We3wkx7kuXcq21N88qfJAS9VnKLzLvBs36zMS29Y",
  "key4": "4oGKm6dhkKhQKufQZxh7X2ZeqsWd2qTETKhT5jwczAQVYyYkizjr6YbGmWbu9jRYo8ary9A1tSoek9H7e3x21f3q",
  "key5": "2VnzhbWw8K8bfdySq6gGrRnLw74fJjEz9oq5bMZJnB7XCDMoYYcv3r8vRKbRwmnNTE8krG7rbRuJrAYkYXvvV7qL",
  "key6": "sqvrQma4KB3xHzQ4JdShqMinEMF2gQxMVfA6BpvCvCoHEMCQbbeEa5gXgoXqSkrLcrxBeGq62hQb3T4RzPMjeEn",
  "key7": "52DpEBkQ4WCy4e4TCoiVTSrzk52pT9SvsWnBM81zqP6RW985SUUjRB3vDEqakXdFcC1gVPr6oZaPz2ZemQ3x1QJo",
  "key8": "3wKpJ6p8XevPgrmH2ePsa2StCC3yYMQ66DDUig56RZeh8mhy433mkTSjacM5tQXxesudEv61D1gqKXRBG9CXzdXz",
  "key9": "3WDH1QMpZMh4daxt2gaRLcMxQwHTPZ7b1NLHRUFKArs5varJmpZTogxHS7iLtgtCZY52UqXDBVjSQY6V6jPPrUbu",
  "key10": "3MQxvzytoDwxQXG75ZXFij7EBubvB3GFuUWfXe2TkesWDj9atJN8Gz6CWCzTW5ZCRbLHCoqizSEK8wYr3GMnKCsn",
  "key11": "2eieu5997vrnYNPnRRjnBbZvJrXEnrA9L7Rn993Hpp8cWQ597zk3pYf9udncoqCLEKjknbNPzBfLNgThCGVngFoM",
  "key12": "4u4r2FB7RAuNRhyG1sGYm3x428DuYeWRNxPm3xaHjCcPiqkS4DsF6JUARCDJwsHGPvQEopSRjoiuazjNz2njHosL",
  "key13": "2kTAoiTzsDAqMQapC9xvxQz6gDxU6wgKBBdJ2PBe6TLDd6oZT9HwZDynVceguyLMruDr7C8HikV7whTDYKoWMH1Q",
  "key14": "4ZHTQM9k7UEzAq4n4NN717Nrhn9ugkFLtEjXsPeWX27fwrhwJLdQcpNDWxu8PjduBF9Noy9JQHdr5BePFw77BvkK",
  "key15": "3WDQDhk4vdN6R4PccZBqknQKUVVwuSmEkfShYwpw3fXoQe8VZiZSS3MNvZwsKZmBvv94sx2n34FaropER3aq1yyB",
  "key16": "2KHTmDPLBpCNiVemK2mTJbiR1AWWDdWZkC6Bq1kPwkjiZkqQQ85a5GwUaotPmHrdN7tQ1hHr3PQKKQCz32GHUqdk",
  "key17": "3kd8UfUPw3N1m5uHatzrhLfBoKGud5FwkkA8ReVSz9qjkk1WUMCfmc2ZytwbC4yiH9F7GxsrMKLUtsEevARu3b2v",
  "key18": "3NH6TnxNVjsVutrjWKj3dG4vb5VTY2htJp1wKg3RupjXynLXDmNGqoEYf9ED1FnAT2LikjQRisMkBBnFK4D6DRys",
  "key19": "2VSKta6zSyEAAUoewwFzwmJC7H2NfCR28XhYvwW6xtw4Y9MNe2rNSXJABPnSnwsbEDP8yaJJLbBePh5cp96FmVMo",
  "key20": "2x1mzVKYpLz6JcTF9UjxjogvF9Pfd259nB3CsEcxWiAMoxR5xXknUvXuNELiRS9UhHGwommfRs8oaS62u3F5r622",
  "key21": "38YETb44fpBYHfZZybt5sRQnQ6TAZAN6ppVb86cafsHTisyvKahY257VAe4P6C3m3pSEupKQeFkBkvM8Buhuabdf",
  "key22": "5nc8TS7FPTyoik1sPqSmJDeH8iimm38vvkK9FoYKt8duDkt6FDmi2CM3r2psQBWo1FxEGaobZ5eheJTuKtGLMbRs",
  "key23": "pMVXYJb5Qb52RS41oyTSTZJLz79HJqLaMddoWv9s3trFdju4kanCPr3Lb5ooBwFNhrJMmzLR31JaxwvoF4TEL6M",
  "key24": "uZzn4aWLj7cK9caqA7TyKqmwV4sDDp7PSHxQqzkv6dz4gZxUpaxXYqKFwu3HTCSivahNXhVsvbGkcPH48JZtPTa",
  "key25": "5gBFPU54vuWLUHc1rvEqdfBgsXxjsKiUvLhxqrPi5kFqZvLcAL7n7U4CBqnBE5Cv4X1r4Kz1P3c9xhAb2Tj96AXk",
  "key26": "5y3LJsJ3KtXs8K4WgcHKq96dHwsb9GPZbBgBoABPKkFzRBjFkCD6Pnh1TQHp6cJ4a1kU2cWwk9ABC3jj9Bg1JvCT"
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
