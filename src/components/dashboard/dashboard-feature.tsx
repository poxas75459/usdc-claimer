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
    "4uHJNJ91o4ij8obfGeN9UUHYGzCj17c1vxm4HXa514GSF5aqxwFnRr9XrmQo3LPrDZuxsiikCS3GuHv4SBqLyyGy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VA5WRCmYD1TE4C2dgnMGY5qxRnyph8ngN2akT7tWdmJ48wuH9tyNQ4cKPR85hVJENeGDgckafTmdusZwE61RZXu",
  "key1": "4pizdfSoLNhC9XWJSZZZacscLRWJmmGWVak7rtfgYwhaxyeRXpNfij5pt8DnYCPYaiJFwam8nUf9iqnWGnV6VBTp",
  "key2": "53qaH9s7yHbgT6sBjy5XUBXg9qe3kheZwAEqAg3xyPPbJPDQRG6twWdVG6i2ym5tD7MRYzG8REVwWWKCXyCxe7WB",
  "key3": "4hoZGqcy3CBxmYWm1WN6hgPw5qTPVmGJ6sCPRSeUiFXcEoU9kt1GeiommKB3MnbJJJMUZz86goH85H8F9NfXquor",
  "key4": "5eoLENBK6HLtWhfSLrq38CcY9qYAH8XFRtGhC9yCY8jBzNDAHaDBsWLdBacSxqQbVHbGXzHbCj7wZoBhbKhZWnmU",
  "key5": "3nwtia8Wi1Hytq5DULP7dDdpR4Pj8bVADmL9Mz38HpB4NdhupbFyKbHkH3GYHYZD1h87Qi9JssVsKo6cW9zJxcAq",
  "key6": "2mwj7LFfvABdGeb8Drk6xRW6WkVyLP5fLZAh9PxH93Br7edDjQKfi4KtBRBntC4Hu589rb7Tr2znMB1ubwgDxh5P",
  "key7": "2YfNut79gnbvkrvnP14BG6azyMs46LLMSbf9SzbfzwnfpA5ZfR1P8k8dtWo9c2o2KkgcanCPWai46tSQX3WrUuJn",
  "key8": "2pDqMD6ebsRQjAF185khervdV5E6zHqQnKngoAw5PHZybtr1yC9bNWMqypJrEj9t6AfVobX8cKAJEMULuANhwwgF",
  "key9": "BsuSaosEaeRzLm2nssC31rrghnPTeQEbYy6RBnkixmQGRpTUzFQeBJu5WzBbUUtwwnws2Z6zjDftsrzwXhUeRa6",
  "key10": "4zmDhkiFqc24twZNvUgpVuKDa8uJpku7bJuFQ2FhGGgdP9zVPNXFbwMPNnePVMNvYUM46G7UQcR52psGg6SetbQQ",
  "key11": "3NxV3vh8kDxFAsPjSANM6z6Hkj2pNzJz1jLyafbEyb8wu6WBsDDUoCMEaoKMHwhKHXwp99CgaVNCM1QxZsAERXrx",
  "key12": "36vx9EhJxYfj3XxpVbEkizYUjSMBiyFhyZ1DdrRyubYAKEiDqrTGa1GLLKhNJDHj58mgdCBjbhzPzT914FHiKkLz",
  "key13": "kkHSqxQ9f1gtbyVq5v4vu8i4uK6YXSxZ69iiDQwn26EE4du99V4xumeizJCsxjH3yYF6Vw7PaiXvUVhiLakHRBi",
  "key14": "U2b7cgw3DAfB5v29CjhtpYrc55a1yvgbBKFDbnit477QNd89jg5suXuNW3vFyr7MkR3NYXBfuJQyjh3jdcexb7F",
  "key15": "5CuCY7cgQjDi3u43zUtH2MGPkbkCgKAn9McBP5zbgSeQWb3btEcbymiZr3qWujfYmpAniD3HL4FApbRjtc8pq7y1",
  "key16": "iHG2LYr9pMTzDgJdc4eToby8VDyE4VKvMLavMyt6zjEGkx92VdSwMRzk4Lp9id4C39GYGH1d5bu5EVghsjHEm2B",
  "key17": "5ogZVYi4AJF7JW4j9ekKkKiDMUcV1Z85KEzyzqXpigUrCa8F48qSKtecXFFoZYcCMpi4t9uNrhsKjQThKNAN7Rcu",
  "key18": "3HEgJ7EpBxLMqtwucJgeBJFCkhQ5E7pKYQfUWMeqqvK2P4tTntGz71asZgxogscUNXchoks8oDp5xbMA3RPyinCi",
  "key19": "5a6XAg7wvXKhqe5XSthr2DjSCMHeYRyG4z3c8pguXLNesdyEeGAtQuKe1u3KejdazMRLbwpZy78XF2ff1Zpt3oFm",
  "key20": "4qRZGMGsx3KeZcP38Na7VuHeAaW5j2Fr6Jfc5kKuNKRiUnk2wfUAhVoxpJEZuQtDFAcmM8Hm2AikxanohofmNSjv",
  "key21": "3cupSfvGYWzAyxuhe8eSYNPejN8RFaVg5L8afngNwgkYp5Ywyq67cpT1MTAc3rzsbUCK6X8WpwD4JhpV6NSfpvAY",
  "key22": "3jfKLtq1vpvYcNPMcv81SZGGVcrC6dPcD341NwxEUwYt8dPj8pyfCnLAnTydiqNfL6wevD93DvS1mVdj8gU1cgj5",
  "key23": "k8TWDKvrKCRBZPFUgwvuT68yrKaWrNC4QAo7LnjwR9M6uinTbVz7T9W9newFRiBdL3GCrGWfCmRRsaocL4LM8hy",
  "key24": "RJQ8xVSpLt6JK9Goxq6drKx9Ve8mpZDT9rBEKDt4MPF89WEecn8WKsB5rYMzfEdymYw2JdaJxcUD9LGzQpFSGqB",
  "key25": "2dVALVLAubrykinzGTwb7NdjvwAn5qq178hkkorev8raLQAetLMeNPaq1KVNpdKqJ3aUngAdWEew6bvqfUfyxgfm",
  "key26": "2HqRjQCEHcEqpUZSJzizKdyS5FgJq2XfRFUKZ62VAnV2pm3bGKzkGW4sSK6J5mKFuQpEeHjfcNWvprfoXeq3y1h5",
  "key27": "3wXo7R7z2pcJRTHu7bdNoGu2FWhko7S3U7pvCL5FNZbpw8EkSMxVATD8Bp5iiK4SGgn3HBP1nhX9zzUdzyjKU8aY",
  "key28": "4cRWuWrLwXa68fnvkAkRT4eNkhJYJfKDZVJwKwXb6q1Y7mPpSGHbbWPgDrUEAxRuaxe9Yd2hzVnyAFmurE9g3H3C",
  "key29": "n9PUNDoZUhys6iBN791t3MjYWK7yEV5iMUPnZsBcVSeJLqriwNZSN5AB5PFBkUh4ShkuCnzveDwykXWZsViJg15",
  "key30": "46ouLW2kh224uxDCc6oUpRA9XpYpmRgDSK4ZZfYdnwYthvD5K7rTCw2DghUSo6woWnTknA75HPQ16u2HuRRu1gv9",
  "key31": "anGhPTNN9cdGwJhaJZXva3N5BkHcH1WcDKovee5EWeKgnq7j7eJBJPisQ15s4nVaX8iPaRnHu1deVtVuzsgxJZz",
  "key32": "3XukjbCBe66z57nVCFLAiJmdtHUeNPegQUabFcZARb2q5n9yyUdUmzaNZnVL7sf8YbR1HoA4pGM9Gc4BLVeSLBAb",
  "key33": "o9eWHv7Bjdv5SRSrDZXdB3g2Wwu4MsLW6T33iEY49gfRiGZXuF4UmGktqgq8W6DdBTx3gthpKvm4oFHwyc7V5Dw",
  "key34": "317TKvB5S4ERoHwEg4kjjhLwTsuGw8naW4VBkvG832o97wrqRRSVogaZR2jVpM8ELPPGwVkbVueQdS3xANZRMojg"
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
