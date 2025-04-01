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
    "eG6zpMF8BWJUoDWNod238bdFGKT6cXxSaWfyCiGUWU3nPsG3Ln95qg1JJWULALXUoDN8aSCTsgDUTtzrUxbL3kp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jFpowthCcz9P7EwhTi9PXSvMGmNNMH7bi1j798bGgasQ621uKZeoMVHjpPi6L2fGXSKnZSPgvXfnFWWqBaDHNyc",
  "key1": "4p1qHBA2jSKrdnzHDRiQVcUVm4ZpHhtQy1L831169QACwzfqtFKS56A43BBGMB8otttE6Z19oAnuMNZmCC51NeTp",
  "key2": "2Zn5X2zvenrRazyK8rgpNcqB5FKK2o86rGCEZvsCSyg1pwdh8sKFraupRZXo2xhUhhJoWnTCQJ6VmJnf6x5T4x8c",
  "key3": "2dYadcFfhervKrwQeMPJK5fT6uuPkuzM6DRyFDzV2R2YiTToAAu3CwgCLiTprXB6wdaMA4vpVMFWPccSqPgJJJUD",
  "key4": "48yUvFnUUh3qM3GHbA4qrN5Z55GcjnmnFJ3iCPmvvAyHcNVxDncXNcbMTraCfrFe6QbuvVStoFjae3BT1zW8DkL9",
  "key5": "hzgvAuQLzv8TbDKEsvTFCEBovVC5R6Ga6hZzCYgPShbR1nSgV5F8rq2FodaCxiXddnWZRwx2ieArJVZQ8jwD6Z5",
  "key6": "5aCxg9PgWV8BYr6aJ65ENRB74gq2a6nWrpdVUUaJHH9eg6nM122TwmKSE6KWPTaBJ2L3dca32LBehSg6tjZWjUjg",
  "key7": "33FQ3qHUT2ajQHr997vyM6A7Ja3spGvjPQLmf4qB5STTqz7iXC4MsyzET1i1iVvtDapXir6uQ326JnyPf5f74gdk",
  "key8": "p5tGQujPw8SmiCwM3rBxShZSi1SMkB5Uxb8kweJgDvtgQLQVijfTzfYGRXLA4rLyU9AWUHPKycTRwiasSobkT4c",
  "key9": "BaqwsLbuxkQzBCUUFZXsuQia1rASKYaJDS3tZyZTThs4Cuvgvok8mBJybMwrqsFa1ZBQxEbXz4wAbo5h16mAryn",
  "key10": "wNJauFkhC87kNE4pWLZXWtHNBegXxh2ZUfzkqrbZHAsabj2J6Gy9hWe6dBvTbc7gTe8iZ1jSt2jquiUmJaSWtz4",
  "key11": "4VabA89P7wqVtdDWs1jLJeuujjmWPC2zCppHwYtFM26SgvnggNWv98fpiAcy4vAmBYXsaC23FvFykLvuqNChs8pj",
  "key12": "3Aevihfx5782bKUdFzNJV37EdVSxb2vP5mZfpbdiUXKL62m4uhxVS9n4m7WKV1xE7J2oMnrKkXQdNSGtB1Ld4MT8",
  "key13": "ZJwG7RMUP18jjnQqdJdyMDroy6tCwkNGPgzcNJcLFfC8jCZuw2eRNFeD4uV8BRjN4M5KUNDh7NgoxU5NjuEWw9c",
  "key14": "5C1gb52WkZiMdYCmesjhYVZQjXQG13hWTstZKGr36izJ4hKwgSE4JG3NBpG2RAYqxVo4WKUp2dQKNvdsACTfgFDJ",
  "key15": "QHfJ74SbNW8fEWP6Psq2Bi8N99WzywVttmvS5AJC4HEGa2otqYwoB1W1NLM9hwAUyx6pXSwXX4sgLk8uQQ1q4dj",
  "key16": "5ENFydUP7oeUnarALUYTh4DrrFx9dmkgV3KU89wpebuYqgmdb2buULPeTMVbHhVdKLRdq2yU1vnuU7pHEyYR6Kfm",
  "key17": "37ocy5enSj8ppafPrZpXgsz2beYwyA32FHGGnK5sq5poDGvGqua948vAHF6vygGsgHhEn6t929heKgAESmiXRqMR",
  "key18": "huS5wbaevomKiaN12vg77DTHJdrfzost4LN7HXYv3VdxbmSAwmUwpsQou7pkxBrsYu1A3bpHArS68e91pXvmVuj",
  "key19": "3JQQHzsRsg1YqqJxxa8cUdnKHek76EiDB6w5jovtVKdmTwn67fDgJirypKYd9meG8KVFPggczTqend71Vg6FHwo1",
  "key20": "2JYboUkMz2AxdZHBEfd9soCXFMYPLsYPGnEcgsEmd2Spn7Nhywo2KxeRTfEg6PKhc4q4ncTqG1Jv9iJvkXe2pfka",
  "key21": "3G8PH15BzM1oR6Yeg2L6HqGMQs58fM8hEGHeMiZZUbrEKEZvdyHPPhbqJE2m2rUW6f7kPu2FrAdNaKdK9QFLF7xd",
  "key22": "3K9Xf33tny3qQn19n6YHcbSjix3fRSph3ZHeLWofuzfR6xFCf7E7pGuFPBN8iG6RNu9GDMc12u1hGwsVoEHR1LM5",
  "key23": "44w7XBf8NmJyJjExSUFD7GeJWNjnqbewT9M7s4B9tZb6gf16H4SfAfuhfUMzqqPLB1XH4zwY5vVCwpBqrYPmqwmM",
  "key24": "5NECcwUZWBu9rgy8UYXKdDGh5ciRSCEdTQ1YNjxk9w8jQ6dmMhNifQUR5i6vYfpckHicmLsUkErpsHyHurwQkdRG",
  "key25": "5U7KXqgGb3SJ4RMbnhW1Bm14nNxAefSFjavoQZugDDfaUEti2enwDXQBidWffxAJnEbKeNarvuUzq1jvACBpmDxA",
  "key26": "5k9XrhK2AQfy7ap8rtgCP6xfXGcEQJSvnbkefi3XN4jea64UZVjPrVTAH9ZTPtkuVKyAcBwixx5WDxLj68dQcvmd",
  "key27": "82Pn61UgLiDGFqgsgFiFZK8FQLPss6hqRshi8WXv27DtHQdeN6ACmvinvj4XUQ14uYmibCpFGAvgEV87pS8geu9",
  "key28": "2LstnSt2z2igNLLbVrQAt8oiMeAGb8bcyAQkPQ9E1346TLGhFKEsRudoE5T9FotPNv59pKLjysh8Ldeixqz1J2eV",
  "key29": "5ZAjVmarzBEaobNr7V6fqRaBCDbEam2tC76W9J18D9kXBNdSd48dkfaKCVDB3dP7r9cBLRxrKgidbp8RWPQrMDao"
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
