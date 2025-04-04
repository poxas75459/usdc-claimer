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
    "4XUjKzTMj2Fcfgp2gUxT4hJ6vqwGLejNw14G6sgio8mCfdX3jNGaTFn32qsmoYMQJjT7eQzCxTpReufxdVFXwDTZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NXvNQ2nybVWh9E9nTTDb6vYC2C8JFHS3xpBnDxTqEKeoPmwCAotNBkEjctFtuPNZv38fLEw8D7Dix1nzk2hUN7S",
  "key1": "3xZv8Rfh9SfKwVarS718aWJBn1x9s8R5G2PK8JbV3ieYsf3YsM4kPPDYCvZqvWaYkzsixkiEzRKs6K1U4XWXybfy",
  "key2": "mE39PsmzRR7UKR726x5Kus1g2SA2qwAhQZbrd2z26X6FEY2o8TKxSAsc27YnYG8UBuh1CGpRDUuBPXHJ9JxQzcu",
  "key3": "3HB9XFm4KkiQPPyxJKbYydMP1jPV5x3xGiAkgQSRJb1WjCJsujDtT4Pqq9UnkV39SiEE6C7KCjvcUwR6czufcBVH",
  "key4": "UnbThy9wZaJbYRRqYpFk8QtZ9T7EWF8PQmRZxUks621fomRPghY1q4dzpeXNJvm1SMUknNpCZv2oThZ7hf7Tsem",
  "key5": "ETcMbKYxvBxi9VEh2fW2SochJi68XNzWTYZE9Brx3jqPdVQzxwvPVZNx4tP5RVeVZjXbHTnsfKn6SHPWB7zCAHv",
  "key6": "29nok3ZNXwYsggnp1WCtQpSQqQxuQXBwzYZ7kCA43SFyk3yEhDT8YK2gVvjQmyHbcqgpmDqqcWuv2YhjS1BFAS9j",
  "key7": "41XB3SpCGr91SJmy3VhyQA1r5euydNmdXh82jT7d9bJWUy3ZL68WuqABNDn5jKczvb4AxwnmwZo5VUV8W2FFdWhR",
  "key8": "3bq382bVRwiwKXc42oX5D2Zxhy5urNtLABTeUXzWSrwbdAo5fDpHDGjbqfbZqMqrNGc9pYH9RNdQhL9gdrVnDDPf",
  "key9": "3suywZ5iwgjcRNwg7PM9rBVF27HJdsKHzzbwtVEQHQL2WPNzGFE9yPRKePgcsDWCfmN12YRiePDzHUBdkVbpM8St",
  "key10": "2CteDubYToGAc2ku4QvpTdWiwwmWbXajwy4YPr6rzXpDbgXsWBAcHiWvGwepPYshjPPviGokn21pX7oASv118TYy",
  "key11": "3NrDkysatB8o6aZezUFP9qLEWA9RFN12Uuh9mLViGryCRsEmUZibZNhtzt8PusC3XeH8UsRXa2AnUYzsmAB9bviF",
  "key12": "2wzp6wPVcHsFa7LH6CWAh7SZSwh5gj5G1zv1xmcdkvBHBKmkKdHYiPTQDLCgXejLehsFAjxX549DEWz7eW4m7Cmo",
  "key13": "3o9BMd3SjJxKL5D1JjX4C6EsacRXXQcQkG1t4WG1Hvfcfcet1BKU4esZ5AKKFVi8LGL2C9Hn9oQz5HkQJGjFajBj",
  "key14": "51EhNhWDcNdRpqRfeurTLNJHKgYQiJBTYCBEXTxSJm6tR6nvdVKYBVhTdiiY7i7ceE8R9ZbZpVwx1dJ5yAvj7N1D",
  "key15": "5tLdezRtP84qADWZ6Ud5TPoCnnkQwryDfTLL7We7fyjRHd9LgiJKsEd9EUppJgQKCgxFrMMx7TXpLGLMu7kiPzwK",
  "key16": "ssJ96vyza8Eb7jDRSXc2EaCTenBpbtNw43AvQH5ndMBmt8dEEcRoYbKbdBWDUCaqdNeqvcpKZqFMWXiczyPjcEG",
  "key17": "58u54xFEavUfHsmuKVzwAhojN7jrUrkourWtrQqTaeUwgzvzz4nrdPUJUmULai43JzuDg3NnNXnUjcTXU5wS2KSn",
  "key18": "3Q9SkSxeWBBmCSJdNFTkc19GtKDwofqtA2bYzCWucYxgVGJ3FeJZBoGS3kjWyCySyLi1GKriwZBSr91TNnL72JnV",
  "key19": "3prHxH1f5LrAohW2TCxsSca45jNTp2QJqezXze4LJoTXKpUHKsY5SUQ3v5EjB34xNaJpNt2usUppbJhYfm39ESNu",
  "key20": "5kcmTa5KVKnK1bR11774FGsYfF3tzd3oLWGTPM7v5am1JEGvGz6AmPtppGvfkTjNcuo4ttYMZGJnFyEeuFhfzJzp",
  "key21": "5PpW8JRrg4t38chjNoQDwwYqdV8ff3A37vqEizpKbuz9akGhjVrxKPNGqD9N2LLuk71X2LW7As35ZMgqTWiLDkcz",
  "key22": "3KgQVw749XkjV5ZJoinoLgMRh8bgNGMErbTUsLheSyG3JGY25W9TQVzCfAcNom21KnE6ufLsbBcxoAxnMBr5zvUs",
  "key23": "3LddURL9TktmmXvQ6hgFRqwJTJvy2qxvJQXUy3h9sHaP9Qgn4Gx8TFS6vr91xBemjTQyDXrAXXQnn9mRHc2w1eRa",
  "key24": "437JkoAkBqqjEU2fSMwXXaYX2VHWJqH3eVwpeMw4YiNNJ8fwghqDzATqXesczcX41cTPV8QUoPaNEqrb6Pmv72rZ",
  "key25": "QXvFWi8cWvTV5mopdEETuJC2gy9TEguoaLhrGTNKMRTAEbcgXzFmkZCaLVLdTgLnpfz4pRbwNfLXhL75W9DxE2Q",
  "key26": "586q1SYQwHp5HLcWJLS7E2DgajQojMDHiZxBB8GApvvXy7w2teRh3xe5CSAQHiu6PScSRLR26NsKpkYhmCt8y5m5",
  "key27": "41S4K7ZErukdMgbp5w69y5ytda7jktQSmwqnMhWGG8rRbWSKKDbAzT3X8DmeXSPgKkZbeLTEAvN2ERampJttpdT8",
  "key28": "3QowzPSqAktfiCj8HhhKrxEdjfzjX37BKvZiWM1RYehFJHyPvJQSttyFF8MhUyQ2TMvZbi424qPDWjD8jn7Dw7y4",
  "key29": "48JdWAujuu3Mym4a9ECvbacB2Rm45q2a71fv9EtRgUJb3EeNnSCAmqe4EQ6dqATKL7yZiBNGFKujuQDiyz28xab4",
  "key30": "33Djpq2xz4YD9DfW9553s4Pr1L8Jg76yNFLTAWuwpXFZExtRSDqsR8MVoUXQEAABGguDjczuManWfNGbz8Q6YrQh"
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
