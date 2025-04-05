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
    "48WrD6giVrirFPKxuUpb4KApiQNGxY7eMuBG7p89hf1sXYgF43hAMTFmNQyDrao9j9Mg97FcMhw9LB4Gm3ZJRzuE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UWhTpgoDfdYeTcfuXdtghifXLGP2Zo2cKCvq5jKdtYheZxNKieAJRpqwmMKiaBUKzhCcXx5cPoDBREuxKf2Ti6Z",
  "key1": "2bVSpZwMQ9WuouBjQ86ZuMidcKqtmitcWY8nVwurR2RX7Jdz4ijULoMMtdt3EzhxVa9oMZmsGZaqnavrapqyAeC6",
  "key2": "3rYxyVYR2Vr1n5tGCifBLBtywRvf7ntJqHUCavvi2pwHza7Peje5gRTqgUrpkUTmRRwYWA1mDhDPMt7jv6DDHL2U",
  "key3": "2cnQ1N9VKDMy4VUpMfeMMyjwbGZnaQyv5KbENit2QcqkxLNriViKZuZwZ6LDNNbH4FhRSW5cCUJy2AVuSjnbHVsR",
  "key4": "AR6XfwxFwk2iihizEGNnNj7qdYoQ16eXxs4Vb2booucfw4doqziR9JCSbFpbpwdGaXRpb3ZtoAtyri4TrSMaTMm",
  "key5": "4j5yEXG8M7T8nGTqmLNoyuEp7hys3Z4atMJXf8dievTmp93QqBDGbNQj51hoUCCZxRmgW4RYsYh8yiUzq5JrErog",
  "key6": "2Tcc69wbwzXNdgSLZiiYZD2T9PNPHv54p9HSsXEbBBdiayXfozrEMJRL41EtUworcdrdX1RpW8BAZgfCw9HrNnNz",
  "key7": "4Ed7SFjCtJ1ixa4wxg3za6KmketZUSEPLQVPXd9KGjJtankxd3YJaWCxjkXdYJLqrpfVCtX4wJBYnNpwcyuP27tp",
  "key8": "ioBBynn5Dj8CyttzGkjYWG83eye6J7GVFLbxpEDntvcubpYt2AxAkj6C9HuqXKLxht8sSmp1ntdEziKCiiPN3Gw",
  "key9": "3RgjN8wpVtSsm8VvtcCtoEJJ6NwaXn6ULVYcjkJ1Zbz1aevhd49w6WMnqfQzceLu5E5Lm34CMxY2d4rJzpS6XtTM",
  "key10": "2NBYJamobqHoUrpZ8NdvCF7ZX6i8MwFuXRzpgqdX1xpWw4fffEK3rPAK5rk956tMje7HqjFbAqrp4rgocSfJUYhh",
  "key11": "4jkTUmMQs3jrSMDgbXDZaxFyfZKHJeUeswxnfJLdkRGdcnUHCzJmZwRoUa8sxtmrksB4i1bPE4DTXJBj2Xs9CXzi",
  "key12": "554XbPk6vyNkDgz4aqAchGLtkWoCoi3EKdETCCYruEFqRqAbnSE2ohhD5bhWSpJch27mwdE9JxyYTGGKdBHmVqDu",
  "key13": "zBYtW4GTsSNsMc5e1E9FRxJKZ2gZTUhz9sNbBqMEYHGqK62rFo4L9Wmu5w18M1P6ooVPebFYAGMjeUbyJNArgdn",
  "key14": "5sZB5svNaoqmszqpwHTF2XGL5jifs4BM2bzoea7TG9MF5hvQimmGEjdSwGQQyAsZSQ6FFtyZvXVCW2iYkbC8xpKp",
  "key15": "3pDhZH7hqprsYstEonPd4hw9ZeNwUSvwKn7CUJYocsgdxbEYeBLJxVa8YJ6GTXphVuWr5qWo9QW61wCde1QqG53k",
  "key16": "2pc88HPpVBzBaHLh6QcEEVu7JxgBCM2Ffc6KL3gyMFYM1B8r66sLAebNyn3n2zqRSFq617bmmEsDsQRyVqS2EEfz",
  "key17": "3HtCazbHh1GPq82N5G9ZwGzjYGcChYSvcrEGUoQXY365HN22dran9nPiJ3FfwFDvhYgFPoYWXjC7wMcnuvi92MeF",
  "key18": "3mjBZNAbBoqaiHVckq8N54RZpbWbhYt5EpXXZw6aVv4DmRDTA3SpW6apag9NAdCsjjjoNTUso8aCSeHBNXAn1AsE",
  "key19": "5uxZQA626T2CHCGM6a6jtaNSDJR7qCqcwWJmdaiyCyUzHsHMrD69xN8mBsYMDhhjoUbvBUZGTmuihW8d91hVitDF",
  "key20": "5eK6iG3TPBoBDtvWNNLomViYdgXbD7f7cbQNbhP3qUtcvZcuW7qBNHbQhwLyMaskKwyF5pqrasKugG7rw8WznuUK",
  "key21": "3HA6RH85SwKdt7x1RWBiZPTrn34Xu7DqYSLawRBtv41m4DgnD8mGSVvdT8DVfVbfCdow4kaCsiYmPxSU9WYViZY6",
  "key22": "37J2UqSxHS8nVU45XJN6tGmXtgPsoEwkHk3DkbQQyfs4kNAM4sHg9mvN9ydWRL6fG7LrTGJfNztcSdo47oLdYtVc",
  "key23": "39cjW7t6Dtq2xVQSx7uDgXrkiZRroV9CyMD5YHNuzjXfGuBfAtH5RtNGLBTkn64FifTRa75LjAVmPhJkiVy3qxEB",
  "key24": "5AYKPQxVgGSaKEQWovGzotjvz617fDDMTSPD5S1grnQFYax4veoxHcLWaLBvnAkhwThZNoc1KiEmKHuNAUXdQH4G",
  "key25": "4aHZ19afGyYFHZemfMyo4hPGz8MN1iTZVmEz2f3x46tpgrTyToH6VfxLsRrVZwgXiymf9D3mLH5CKkV6ryMbRnjR",
  "key26": "SHUeyeKNSYy88WtJwHkqYaM1G2Pzn1G6ZdJt3WE34SoL5GfvmRSdRvVfGkVsc8nY8fWHwccBiy4UX95krJZvmjQ",
  "key27": "55Bh33PsjGC6ZCAn5VcKY1zMJxCV6Cp72Rby4xh1MEJcxLEvmbXq2RtF2BbLRUkHQHoDGc3cCSNgtfaTCxMcdGY7",
  "key28": "4CpJBcqrGa2zjKA6wfdFpKCZc8uDyiTEV5B2MY4XBt3bknEvSxCnZjbkWJr6So4Y456TJyPPLxojCMzAszskb5Br",
  "key29": "3dX84L3eJnHz9Zi3LaLUZRK2vPfWNs9Gkd5xMpjV4fLq9J9bwMdL5zmP5NsgGmFpUzeZS7wyW88Ek1q8Dd5mZghG",
  "key30": "3a6hW6mVdmbtLpxd9HZNvN8HLnGUW2RtWqijxKZPZF8VihJB1yteHvG5JDuLfcChB4ZcFNFDsxbwYd5dXu55Mwi8"
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
