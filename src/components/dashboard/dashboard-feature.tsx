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
    "5dQzop12UKwdknqN3MqkEvvyXZA8EDGEK9DY39gjvTAZcZ9rtppBpSvRyiGD4gY8AdnbcittxDsqsvggEsXKZ6my"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XG69cddyAYeN6GPftwiCtkfFPG13woUHEh1eUweP7b1re68EuQq1VDqc2m9oxaPPzxhqVF76d5RXgNVrJL6R3A7",
  "key1": "Ljv1hZWk8pQu4N2YqcQjGwRWCMx4BMVukiji924hXDu1qdK5nZjVPPT7KCoGxcTx4mckz3XJfigS57wg4gUeqDu",
  "key2": "2f4iwGd1kyfikg2wYuH3A4QKqq5naFR5AzX1vQ4KNphoCLbD8twTV5K8SShUpuVGfGKFzV2jJJEkhFCWvZc3yX6F",
  "key3": "23u279VMMCLQhh7sTz2EMVWBvSgYCgke76hiE33jJ7EQCoCPmAMPBwNC4PPywdz9Y4sL8xfgjQasvjvo1FwiYVgo",
  "key4": "5HPRmFNXrrev85nYydco6mHkZg7c8Jw3FBUgjvW3RN3rGEBZRanY79viGZMRhrHt6qipVZcMUKD3UBS9WouDa21q",
  "key5": "i5Z2W2KNcc26fiGRrGHUQ1KFeaEUsrLd1UrywovgFKQAEo6rJCod2wfabXv8QNGzDgq1aBM2QS84yNninSSzRng",
  "key6": "36yAL64jRar1d83V6jGfsEmiUS6vMgHsFu4pJ43GveS6EUQxuh1XKvJC2SstWdyRDE9zm9UqLXSpFT3YfTF7GvL5",
  "key7": "HMEdhF5XZs7VC8D561Hm8ysfkHnhDXcafsbuXspTjpM8cjiw1UTBdvbNQQPdPn95qUsqCkSsUHmwU1wXPqmw1hH",
  "key8": "2FaPSga7ZGynNZoWUDEu1YhSz7yHvJXxgTk9V6GmBcckj5oPk1owt4yiaqcSeuyVg6nS9NdxBdtKwXGTq7UEzH8o",
  "key9": "2YfLseFQY3swwZzDXck9BkouZ4bRuiPByCsBj73uqxbys6HHfEZ4m6vSbMmm6oAJ83RFWdkrifJtFsu2yh7Wt8p9",
  "key10": "4JjymvTLsavxnxPXXm3B3L5q8dLrSXeGqijnkuSptHVG47SC6GBp2jgqQ7CAvYmACeQVg9o7gWgrdXyVa12CgHJV",
  "key11": "5TJbJRHHSEWfweSJS3cDLWcj6h2TzScREozrHcau65yHXFCgcyZBFA5kLcvpQNprGgYYCrd9XTF2ZF2e85rK9pJ7",
  "key12": "7jQVUVhcwQFDEZg5tTBhQ9veWAgWwXPBnHPQztHTpVopXg7SGu6m9Z45ss7N3ooGxs45YJse6V5x6VBxNZKJYnY",
  "key13": "123M9raakdHBYX6S3Hqh4nbBFMdaRJJva5ZvyMnrfRmCYZcds6DPBgsxP2BAe54pzvGiZeVge81cB5ejjQyzrkTN",
  "key14": "3DCHV5BRY2RVE7J4a2Q13NQmYnMRKCagnYAKev1hxnH38D4tpYjDhxHjJds8fWDqFUZhCu6r3ZGc15jDTGxx3s5D",
  "key15": "4YBwTYpktGntV8kwtpgYpGoyZWw6uCtRR1V3KGQ9v81tbo1k2G9aM6HniTphTc33xZ92wUsunAUApCmHLVin294K",
  "key16": "2t3fd57jcgvzcJ7MZ1miB92oqw22Bcwr3zHBy6rWnUoASc5ogB7vKHMtbQiycRwQApLNiLEsD28vJAzsR463NG6R",
  "key17": "4vE2XYWUzFtG6Gmuyts97DTPQVtfrPBfsvSt1mWB9ZHaan4r1zHhJ62Tq5qLq7kSPN69eCk7Yf1ug3hycuzdAeqP",
  "key18": "gXmVPkZ2BfLAPfw5D8i1wdS7KWhFoScEk4JTVtrs6k5bTGcTtwyUUhWLCwqaTMQqUGTrm1Zmc73nzQGr32U8STA",
  "key19": "37267iSx5VZ8ociWtrFeqkWibeEFfKa6xbbtH15saKNUL6oAEnntcEMgDeVQ32ssGhtc4fEhhCWhfNzJxvaxoUDB",
  "key20": "5ts3xc7hYLm1GCFvUQ15mpqyNcvJRkgBfJMx47Z8WntafkaqojRFmNf6jnNLVwRU4vsv4tLY43FKdL6goGh73ijp",
  "key21": "2YhNvoswH3s7yGGQ5xExFHNN7EZPxgWziJCMYJMwmLBMAcWDhFHLpDZffEzAxx3ikcaKb3UefDPtjFnDFSdQPqyh",
  "key22": "454TVHdGv6aKPLFYHwN26wZPuCxxHY9se6unAtV9VMNzBVeGP2Je1qVnDZXCRhdhc4CxcmRU5HxNDDD21btj9teZ",
  "key23": "2Yr4XFjKAi7xGfWMUHdcKBd86AejUpYfdvDgMVTXLiaEBnJ19Hmn76W8XtVt92u4VbvvZmAHwMVMiGiYT7zpehjd",
  "key24": "52cjghqvavkthAVjFaSQpvs2JMSMEurPsTVAWUigianuAJfNfLsejfr9NKigacfJtf51mPZtHgcjoNPuv7cBFcu6",
  "key25": "3x7HjeYqQQEo9grpC8Qb3fEvxb3hu4eRAN6rsPiVgDSeo38A7o63NCvFjQHEpRYACoC63UraxBUryyougMUkTwh3",
  "key26": "3ynWWQr2BqUjKiwjFZ4QzAH6MG9mK6g9ne6n6HXUsoqLKL9P2t19gZMfRyWNaeYTjCQTkBQmXrwyWF1vEEAk3nxd",
  "key27": "4FaNR2gybBcrmFaNPb6AiTZJ4BBEY1LnSopoeT7WwDHDPvZit37BMD39CWRkSWXQvjUszPFBde1V2oVrXssUoXAP",
  "key28": "2ntv7v5ven6MVEXTtSS4x2FJ6hVnpgvuFhHYoSuYj3Nxwb9DTDgGmFWWiRhZgk1GKiZZfdRGuiYTZpxwjjn5DNer"
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
