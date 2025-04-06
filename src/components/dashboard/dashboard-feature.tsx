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
    "4Q5jWk4RkCYs294hwKU2kRJ94FNWanQQDTejtEjBUfVqSrkCGjXfATbonqjH12j6GBYp3h3w59BJDokutAeFE4ZP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2et1YZNGDe7iVXiFtmAVyVA8BESc1chDLdie2xLgq8q6fmPba6Qn51akwtZJVWVXM7YjxFgLMnKizmAVq1TwVrNe",
  "key1": "3ZaAzJ1JvHvYc9T7FJGBa8MfZbysjSxvUMz1W3r6Zvhnoy7NqFVVmAUmGTb4vC3pBcaUhiH7fewCV5PgzDLe5fTj",
  "key2": "2d4k6oAD4ooAvdnjUeFPJXhUfPVS7qmSauzeTqekthZ9sbjs9zTZVMCKi2FfQ9ykhtaZkXpTjcE7W8xPbNFo7d2E",
  "key3": "2udqdUXnAXr4BBkg5ZSGA9T4fVjabLEjriexHVkPobD8SoF3oFm5CKVyCASEScSEi4GvENvGADVtNELRGseDFZNt",
  "key4": "2AkXLcFaHnkjVou1VdhwQMsxmcFH2Sc2My1CTiXM8sA2VNUN8br6Ns82U5SLXfafdcqQr8xUzq2M83kELbn9Y2RQ",
  "key5": "5JjNy4cwFfePxJBTQGRnAMsay43QYp5RLPyuL8Ljjw5FWZDU9cteRF7YGYkfG1VboQDV5qgRgcXNTNYnuU2LoEUM",
  "key6": "4Ucgo4gVsRNoCduq8v8Z5tgn59CGDgveb489U1CfWwZQKinRQqzZFU9rniJvuM7t2sPbpuivTPpYf2HT5xiMwkvy",
  "key7": "5msXBDKdtLfwGkWq3rAk8o8Gqe5oZjzfyfF1vvNZHNGz8juHwADjrnueUu5VewnCNygRMLZPVXz1bmKi8nSrMK8z",
  "key8": "2CTwq2NJ8Q4xDyf1VCcEqBr72MzAevkJUTfpwKPx4Wg9qU44VgLGKJFFzm5kUKFkaZXpAqVeTrZduD4wiJgn7eDz",
  "key9": "53a7aLRL2gigG8BfU7wq5RkueBX6NgR5L3BzMSfq3X6rQNxETmhXgQuA7hC2S81BfM5ur7FcrWF4QxUyRyhPgBLD",
  "key10": "5sRkV8A7tbjfATxFMM72KckRU15ywefyDVsAw79fnkAiyY8wwRbNwYTXgJ8RwVQPtHBGJSeK5gRdwLCipLmfL9kd",
  "key11": "S4z7ck78V5wpRMLCfzpLioQMxmv2jUp5jZdRLkNoz7NQmwHA1oxt4eFjMv9aXyZAqQVu29LBC7DwH3JuFN7xYGB",
  "key12": "fKqxZNGaZiQ3VLKqG48Ni6RvBE51cgLSzboeuqeG4QPDjQXXEei5KQfRWRqZL5vyi5Lx9UA32YNfZXJtCfz7Bqc",
  "key13": "36b7hJpWj963vTTG2xwaW1qr6wMbT9Qhjk729p9aAsFuEsB91tBgkKa9oo6KUymwKfgU416uhH3sP15juhSWQoF4",
  "key14": "3jmVXTxH5RRar3oJLShNY4oLWezrGmREafZ6HMQ6YEkiwjzZBbKtFVJ3E3L5jQwv9fTkoP6zTWBS6uSGRG3oVQgb",
  "key15": "4nLk3vUiEJunNP22xg7qoq5xJhxkGdq59LzJwtEU1zGjwf3HXTVBCXkoQKkSLJBrNXccFu7wSbSUjLm6g3EGigWX",
  "key16": "2uDn6n2othjfQhY3b7xwQpSc3eqhaYR39hB3J9kV86XRa6MgRNUqJuM8mWmCApaT2YVJSUevK4DKtmkdHyc1udDc",
  "key17": "2cuqY8JJoZ3NugdxUbcVcJFFVQBBCnUEBJd7ZypDZ3sBgpEUrYvLp37wKtBfeePmrSacFZq8ZWaE8aPmKfxDaiob",
  "key18": "5NySohJTqqf6ivLsSPUUgwJKGmg8cUd5xgMNTMNr9zgRT6jcMXrs9xKzdmuV5MHLQZY2dSzfT3CZ4RSdPiyWAgDh",
  "key19": "3B11ZM6A43o841K39WNnz2SHrbt4Xiqa5BLt9Sh7eXTkE5xqTfYxyHs5C2wfUhrwaQgxatVKyLmw6rEkCtmt5oiT",
  "key20": "LwgnZjwNARogpc71z43EYefCfRfkZxbdBgvNEj92SAdz49V6RRqFhbFuaRMeqxicHSj4fvfpqRDvpDKk9FeipaP",
  "key21": "5jvg84C9ep3oY4a7ibZJEWE2eR52zwjLn11gxJd3nXZN71YmHEEqhDsAFqB9g7C3g3G6mtyjYURY4jd239hqJEf2",
  "key22": "2U5nvhNxVBXs4ef26QdymCGsF7DQPEsPCj8si2j1uWh41wqy32bCEpbsaerbwc8uo68D8w6j2jVz7utgVX3T8pfU",
  "key23": "4Jtx1vQ2WfjugCNLniisUyk2BMVrPb5HFp87ZXR1ikhYo83469zFU1p8iZHTGQuZRBNLxPCoHoVE3ehhwU7o6QUV",
  "key24": "5hYo2xTuJC21ra2JSjvAQu54SGveiAjieLn5Me1fwdVw3WqnmDVwYPNspvgwmQ9Fb1bW8qSwfa69dRDEnDHMhhSH",
  "key25": "2Xy3anDk1NEuCMazigwVkZapjKMBNWeAne9sCHbYd25Bvd3xkwTF8vhSTzxWTJvESXESsCBPhVyCNo5DEwsiqXLX",
  "key26": "3XpJZeNiZiBwpPcBiBT15DiCrbGVUkyGpBfxWTv71K7e6i8YvNWjiZLoiSGggJWd6Q4Q3XoEajvzoHVjvE7jyoek",
  "key27": "5hVRQVMDXcVKv6SngwC7Q3VENDPA8EieLCNmqbRmg6Ak54wpkySded5bWJgQMeDY6KymLLzqgjWNakckJ5MdNmwx",
  "key28": "2cTCvpoidBh5qw98cCsyywVdUY2Yv2CvNooncXzdUZbFPgV3WCuS557aghkpKpqZWFqULsbgMHce1xQb49fLBgJY",
  "key29": "4CxU9pLYGSpbX37pdwCGPESYjdZky6qgB2hFZHqhqTeXcJYVZRrJtm7nu3FGjsugizRrpST6rVfB4ARcpMxZzRbA",
  "key30": "4UkvjoCAa46xNqM4GxaopHSSA5q1dz4kxyzfWxXXcLCdL5yAxApm46K5wShAGaqwjhDo6J1TDUn4LDZs6A65C31Y",
  "key31": "5sF8B4NcPsnubuLrrYaqzLY2pCRLcLbDraAgDfGzCqwGE9UXjKneLqq5LSGqki36ozvX4eGYa8FuqetgBWLSq6Qx",
  "key32": "SoyN3H2epCF3uoTfLCDReMUCTSQHzMekySHu5o6QCDzguVuVchA2d2onxWpN9Bym4cddRTLYjAcw41Sxjhw2Fpk",
  "key33": "nXmJeZstZK2MNy3z7Kgg4AF3aZTP2xaJUgd2B2Wdge4tvm5mPMxfXHqWucUCmStJuUoTPPRa2uUEtW8Fh32PdAM"
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
