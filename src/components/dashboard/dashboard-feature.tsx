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
    "5teyGMdUMufKNSu3pmknYwFT1AhwVNpMAKX1EnTGJTFRiNr3YAFC6GygrFL1Pnft2TAjsN3AMmeK9eQshBLAcEKh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UGXe8XAVtuTNUKNW5HQbR4qu5jCts35hnhbHENpfCDE1ZksDJBtGjNxfWxLtj911w7KNk2QYh1sKfJj7fxX4BHc",
  "key1": "3hidnG1zLMiRBLrLJ2wbLPt9iuNF1hTVvvoExkwpzbHhgoCKR2cVPFF3jjW2VMXvxD4RpFcQcdHLm2stvBA5J5Mh",
  "key2": "JDELUrv9Q81UNABvu8aWLid4FjXLS2fi3X2Cav726uiokaqe8GEEZRtiBpqoruzVjLdfEtkw1RYobcZP7zpeTF7",
  "key3": "2DdZemYPU5ko7JxdcNTTxY89TsgVs59ETQeN8McrmLHdSnPFMjNCrT3MAdof8CKt58iLjDHoJfDTLcaeqfcrHQsq",
  "key4": "rxMvMs41nQwwHqgmWkZ4DSN5vSk12dMgMZ5yPoHByWcyXdS6pA1vqLDS4zwWUdWambFz3zLM8ZCYdfyag8ygqXD",
  "key5": "3Y7HY15k5cuzeF2uUfMKm8u5odjY4noqEM5GqVGWVjX85GRBRRymrTYzozm1ozcwMYC3KEqYMG5EfHwzaQPra1Vc",
  "key6": "3C8u35SeaFBvLmRBJNQYid914xPZWr43YvLh4kFmD2mTPH3A5RjxSy31jF9U7ov97ttuvN2WKVEJALLp7PKPedoD",
  "key7": "n5RwtLZMiE7wtLX2FUYEmXTUAjrmnwsu4jgS5mQRhoK2Gwqh4Xip8G3S8FwHuzTWgCvpxRgB7jBy1MunP44XPWc",
  "key8": "5WjmXkvj4a5oCqnWfAN3KWD2iogD23hStuiz7TmrU25VgW5oCg4mH1KXGDJ82nmnuBdns2Ra63YQ22JoLrNEkmi4",
  "key9": "qwi4zZAgqoeT4mQcqEpQaPH1DjPmzpBpG3XWk3LLEuwBDb1xiPYwgjSfwj9sZzNCbEzbGgV2f9SLMJRATwFpA3x",
  "key10": "4u7r2JJBruFC8ytVLzV6VNfVpyUU5QQAE1cqMdBTBVdZLbuvw9pGGhDv5KR46FkWYPDyjhZpioX6uQku8HTtHXxD",
  "key11": "5wnFn4cwN23zm6steugdwSUSqXekFBqeMPpBrnjw2K8qtuU47qkDmsYfsvYmkWZkTmet86TYmokyq8gNBtmEsWtd",
  "key12": "56BygCAvJDRPRQgDyu1j5ZWzKNPMpi36mYdzNUuoPDgLjTuuc4cTQCkHSZfs6Sob23TF5rKKUoNpeNP6E8bTj4Hc",
  "key13": "5iCYLAJPs1WxZbJ8iTboKtTDLMi6cyNau4LKkRvCSo5ZHKQWGsQjWjr8dm2yWdT9HH1AnR3A7WBxiqNNvgSLD4nm",
  "key14": "4vqE77b9V9JhjNXXbhuFusSYrozmiEMzM3T38qRBQ3Cm26k3PPkAi7zbtXwuJroxfMYzrZ9ZPMKpqjWFHNXhSeEU",
  "key15": "3s6HDfogdDF3fmGiXoSjygSRGzoPAQ2C2SUyC9egdbXi7fv3Y62nbk19LYsYgTkfR6tFTJUAAK32hMHKjVPhUkrG",
  "key16": "2v2N7g2ijtibbeVMo3SMSyb8uTUrhvPmvnrh93xeRUEigudqNgDQYVuUiuczYF1gkYbQoL4QCF2bNLDXTRjoCv7M",
  "key17": "4etBCyhVSwD92qhe4n678RMqPGqNvAoMjL5n62BXMHL8dq6QgQfwomYg6LJMLuA8NUUv8Lxgng6Az19CrE1zuC7M",
  "key18": "55doLNuYDTtry99yBEtY5nhppewbbDSYmNQ8n3iNoAm62XcoFQ9AXKpMKHi8JHDfcYn6bNj9VD7zgRB2GKrka4S3",
  "key19": "61hPyrpcKYCC3iyLR33a5bqnBxFiPkwCHsxnXxShEaGi8RULpKKm8ovRMaQD9gb28wUYCL7sk5ZbkrXEs9nqairF",
  "key20": "128HNQ67WPaLUmpCxYorkcASeAztWo2qFLMzNAdgM2Gtnx5qTA7SegKqAF5mNEkDpd54vCYZCe3jLr3PRRN6NspD",
  "key21": "kLEAyzwpfZTFa3VqPxgxvGiWzXvaW3rWLVVwf1DobpDe2Fi6LkqoHHTLDRS8NyAbBq3treijF6TvVjkZAJfbyJa",
  "key22": "3yQS7Mr8YFvE5VnsFxiqggdnvpdKN5vnByCvcZ5iqZwmXhnUp65Ls2U3YWVoGxzb58rEZ5m3tHDJnMB5HztUvcEh",
  "key23": "4uWLu2xYuY4JeNyXsd4o9mMZh2eJZ3juKtSz7G745WoptyuUadY9KeWQARFv5yFqoSSxf1UQKcsa7FhMP1BgWDT2",
  "key24": "2bPkD3J4dUjxmfb4qTgU9d8gzXijFQYtmCiSkJiaZ5aewToWHm7Lb8yH7Y9stzfScFPuomQtcAWKLdut2UiJ7wj7",
  "key25": "5kDCtmjZaxERg2wVYqqMVDwtKnvrMoAmXuxAYt2C3woCdYuA98H3F3iifD8bBddtJaYbFd5kHYMgsyq9XF5ntJp7",
  "key26": "3p1CZwEcgnqpw7ss6RMUNM8ZhDruVjnWaY7QJQsxu6wvApT3i7mCsmgCx2pRaDxgfPTFe7PfSLs7gLCLzk1Xt3RA",
  "key27": "8Bx7mEPg87n2wLaTR2FKAqSr1oe8iS3YBszQ7p6SmEwgrwuEhVLbDd51Xp28ewT7it5R6MgostZrNKgkTrNwxoC",
  "key28": "3cURWQTNXwooSnpjxPjrrkFHqBTsEgFs6djzVm1KyRB9fRupNhDT3X8ik9MU6GGgdJCu1DrL1FU3iVT4DRSkA62x",
  "key29": "4qqjb4CQUqYapX6bgnhBz18SUy5U1QHxk5wnXJ8jJxwGj83Zay8WvdDzNUkW4n55jqCDDprVfGUJ1TJ33mvVuYVL",
  "key30": "3aaTVFNomthGyBM2bZvuXnvYjgCPviN1N47Qdtsebq5JYcd1dov2CuzuNS1h58pKLahAX8SQ4Q44ZJgX4dnNQ7D8"
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
