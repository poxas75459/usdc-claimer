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
    "3NusJWfFYRKhJRnKMRA53XXdPVrEbJpYsjVrSMLY7DpvgxNYx5xyBsysDw9eCoARKmzfwp96QHLFpwKkoV3hPeg4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44c2TDn6rosBSqEmSxJyEHKhGgt8V1G3NXg9DDXhLniSiw9BfdRgr243qwuS8s2EXPikFRYcAaSJYAVeze5KPYt5",
  "key1": "4JyUMCezKHgoNQdy1xYc5QtMdBvrX2dnYxPdQCC4GLLwXnjdgAr3RQedXBWeWsrxKu7Z6ERD6HJvJkgkypTgwkx6",
  "key2": "2u1SGkH5TCgYCgZdJgf11GFHoyapnWrQ1joXW8Fhxr7siTRgs5BFKUv5E2pTQfRa3fTYR3MWRpJyCCieuHtWpG1g",
  "key3": "4Te5p7QjaNH19JQvacx2yP1DVi8Y7S3GUf5ZZK9CdEY69HKD3pjwxL4GiWSS7LQZJnkZpQNgA4BCCMZnLtDaGozM",
  "key4": "28WzeU7wphpgRWgtFZzKyYftkNuguZ3U1eu5YqBP7vZU3St3CbjcNKY2MYDncSpR7HwgZNBTWFBA4scUoNdVDadp",
  "key5": "5JaseBYcY1DtgKyVUV11wYQGgn4wKdzmv4bJc6iT8UmNFmWedNrjWSef4R2zrvBYtnayRK4J14Bq2gSAyBSw7p8H",
  "key6": "3HTp8ZMQB3pPkcYv42gx2KAgxjeoFqLemgSWnt5mhP67oU78mqSaMGx7n7Cd13XXibPZRuEWa5TUgyPZt6vQFTk9",
  "key7": "2R4HWkizF1prUT9j7YzrgaZeCsMihvFBZq34FnBWGejbyN1b6c4K1rs4U6dYBEGWGB6Q1G3NU8XCzoMivBJ3Tygx",
  "key8": "2kcYGbRs3uNcWxXKiB7RAnA8kjTvRU2M6cNLzkVD6M91E4xXxV4kdfSenNF8dpWgqFt21yAJpkUVCrE3ygW3hhjw",
  "key9": "5qAtF5meum4GLQSY3jr657eGFCXU8cC6rg8zXJWHFatDMbQ3jKaCrSnxiRaC79d5C4Qnqm6rvbNL1hBizfHNDRqd",
  "key10": "51qY9jcgdN3pL7AD2hKjK65tpAo8iTUkA23T9So3L7BQbv7HvoLZT3sWatqGCtBq4iabfz3rX2y6MXYnvZR3nRpR",
  "key11": "2XdbGmDU5zcNLU1YWaSpGpgN9yYVHKpjHnCgirdAvaYsrMaMV4fphuPsxyHLrvskWC6KU6QGCQrbTZ9bUgGGRaVH",
  "key12": "KEEK6mFHs5fQpRyNzqvjVfcjbFHb7Ubd2xGWSGpLNSBrvTKSYr5oEXqCFvu831AAZspWfU3yg4Y2uFMjqUqJ3hm",
  "key13": "2jmjzywh4PibuKsrnag1rW4MeTBNWwEVXHMdB7FMEvVQYNbJS5JdN8AFYSRfCS9wSdbjHyJFv7drbiNcGqt7DKNq",
  "key14": "47gBVJc6Lo85FJPAFtH4n7JbkpG2AQx8fPo2PSQArvRUxaWUFYqcS9ij6yABrFpsUVoMDYm4gNn7rPEJgBtbw17D",
  "key15": "2NNcmCa9HJWFtHc4xBRqubxCDHniLUxXscyqfjzhhBVopoRWuSAAJoY2sJpwvZBqPXnps2j88uwfu5KsE3z1zBFW",
  "key16": "5JxvktGHZVLTzudaZ87GURFDXLW9ByDycfPrjCJMpRu4n3sQ2V8Nj5ujGLhp6e9oV8MMf2j6pFoxMyuvRTLvTAbt",
  "key17": "5dsKeL1rjpCnicPaT6gSpjQqT61Qdyq4ti8msed6WwqZBriWXsQjuM3rHWqdjFEjQRQ9b6itkKJ6ZcEK9gNA3Y3z",
  "key18": "3nQcfBj9Un2tcine9g1RXYArWwqh2btoTp1MA3dt4p1RaXvQ6ykQw319HBsBLwqSL5BBvmhkeQZXv55i8dvFnuKJ",
  "key19": "64KEjKcWzKCkPdi8nwsPSmMi9HZ8me4PeEEKL4ZzYRabd2ZMvqRzqNvCMaZuNNdMV8Sg67P6czK9ULTLWTqiF3jj",
  "key20": "Y2VfHUo8V8WXthFS7EsUsBFn5j1Uk3oQeCqQ3efdwzu5AGEvZZez53GtEfhBVVzfSeB6577pyDV41UTXBX6ieUN",
  "key21": "ndUtChRiMqMMA7X1ueeBQgoBSpuTsXxqV1QfaDCyNRrKQ6BWzh412LddqWcwWLAWd2gktgJopxXwH5QZcPv2drC",
  "key22": "375DwgnEN7G7fcTRXqyzsfeH8up8VPSMji5yYgPMpoyk8w4kfV7tGZjjuYPxkHzcg72m12RB934mWrFNh5r2tivV",
  "key23": "5SfwnSMK3kaePcPkeFtYCkEAP7aBRwXV33kikbEiBpwffLs58VV16yEXT4XBvie62CXxB9BZKzHv8DvhCVqfHr5D",
  "key24": "479JDs3n9D7QirttMBAjCqPmq4oEYGXN3rqzpN8LF4cGGpoGoiP5TDm5GMAkMdaVBzMw3tYmuE3VhAonErufsXVN",
  "key25": "3KWJQLZU3icTp1axxvFDCT6i4NXbjvE4QrSfsFpmGJyXybnTzNQkNAiabTauUmqkiEDtGMwRnfCaanMxLrHEaHNj",
  "key26": "Vx6UQgLYnfsbgZ79PZSeZPcEhD3822zDwNCu33X4dPwcwqYzNoaGCNsGR5BEf9aXD26mHNjWCEcqxXZm7zopysc",
  "key27": "26H4cERNaYqpq4TqSg39639FKKNGfe4jGCmNJxta5SEPZuKFEnV8ggkUUeUUrs5wvmiTsh5G9opaDfviZRdDFRx4",
  "key28": "4MQbcYiarrp77MGVQPmoEKJCf3X1Q9yrNXbMnMvZWWYg2h9ceWtuBWahZUVaVKxx57sCdMVuiUQ3CPYSWKZatnu",
  "key29": "4VoPd7Zs8LAt5RzaezYhPjxrVjQHg7WuTPQzfTAec3y37KHAsQfAAXX3S5zgG6yFT7nT2uy1KBFqFi5Phhkhp8oz",
  "key30": "42G3bh3dMZarAWdxdepnoYPvZdfWNuBscD5o8SE3wuUB29GcUemJmXsc61CQMcKtTBp4S2ii6ANMyMw6ku4MsW4b"
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
