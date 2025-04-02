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
    "CvsADyDVkNzFe478qQjFAQCyNdsofbyPi91ZyZeHFK4vLTqmzHafCyze5MEYqMqdB3dmN2K4ZkrBT1uKfxke5qS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n9nbzMJxKoUoMx7dWWnfCVvJosQoUCvja7Kop9msNoQynFKfFf7K83zN6shzSDbyAoqxKgM4Ngyki6BEFHx5sCm",
  "key1": "34fvzr7qJFF2zwxiF7nYxJoAeh5aFyXm4HGNqiXP7yHtJsoUbcAHrACMPagC6kPgycwbugnTv9rfSFud5XFZsUP9",
  "key2": "53BHAunRRPKt8J5TeCU1WvS7UiLh6TLHYZ7XLUBJJC3ozDM3u71Me4bcRRrRG6TRALSEqVtmNTaWG5vFZLPnP4Ms",
  "key3": "57xU5gjbX4mrLiScemvmkmKkCwYV6WaX3RHTsVRSekjaTtZi2ashaJeRvSC4VZAJG4aRyhLekcVyA78b2JZPqk2c",
  "key4": "2gZmcYjGmzAxVu7jGUiDSe7AmVjwMGH29Vzco9uS6tPShZ3DjerzV3XUzM8FhPoQPXRyxi1sitx14TiaxF1TSJ92",
  "key5": "CZHdDnyFtKMKai4ddc9aMVSsKcEbjazUQ7JBLJC5iJ82vfTxu832BqMkLzA9fjQaaH7vias8DoQL9439brA3A1K",
  "key6": "2dbb9fPnCdudzqtwNVtWqpPpyckhnTv7EUregH6yNcui6p6ojp3pM13vQyeQdbxPVzUAQPqPNS68ufE6QhhUBHhH",
  "key7": "5QEe4PQLv5yCbJTQi5iAVWy3WVmquV5Jf6MLRSGfyRiFM2ADajZJybVem2jXerZQfk6w7Km3vJtMKMVr4QJaX7Pq",
  "key8": "PadkzT72xB83QL1wPbLWx1CWQrPvSBK5g5FEHxitr5fcqX9fTCA52isq6MiC3s2s61Q3ZU2rXrjv8JK3Wwqtrv6",
  "key9": "4zKABRy3KeA4TG2xdkd52CmpWPLXqqX27PrpfqVXBjgFb2zhkrxVKF8oaqHaxMtin3Ty4ACQkNJErvPRpXuqtvvi",
  "key10": "3xd357ETzZpi2SfVvP3uL9fGJQawmpCG1qBVQwzCnqVYSLRcGKxV9DNTsojSnoS9kTrNnDkc5wLQKYJsyZi3v3ch",
  "key11": "4HzMBc7gysGip68dn4orAhrtYFX7ZFEkodsdgpoWGktSiYTVXoKLgC2oWBBM6VvmZqvqv9EVTxd7X8LKMV3ZVmnR",
  "key12": "7gema4A2ieLLzDEzo5UoSRNGcnTN6e7KTLYrA8Zc1BJRpvuLX1ujuK6inbMEqifeNQ2o3fnCYLRB31xzcJoz2ey",
  "key13": "f2D6oFZHECWTHVNXUSFF8tCa5oXNMdF2eqPERg1BRd41zbhek7GCht6EQEwP2nAQrw4DcHujQfABZaY8g6J6K52",
  "key14": "619e4beGZzBL61NVQR8BiAiqzmDRRuuPNWnio1y9EWGX3koWhb5DECpvUYKAD415fvcxWuT8AU6A9dEdMioFp1iP",
  "key15": "EwjUVivCkwGPnCfAFJtyMT2H4hLXzcfb7FE1MNyzGmZqvaPg4asXGmyCbqeJ3iB9L6jiEMrsVGZnApmjGdsPgGp",
  "key16": "4yNWehjSwjMzdknZY8WBosP6j8knmKvuHr7PQSL7PBNYAeJxwfPutMgPgucMDoRHGAEZF4AbGu3naKSGzv3ALKeL",
  "key17": "5U2dk2XCr93YCA9od8ZxH8fYE5jFQzd2wAeKR1cEH9hGNHSS5TZwdPiNxBQ8xSqnMW5ybVXYTzKWRAwehDovB4b",
  "key18": "S2udCuJQzRjKo7mTJ85ruj8mKt7NeJgdLCVmjNwTMNfnEL3a2hb55tKo6oFvWfGQUmi9XXr98V7aqvaPUHCTPC4",
  "key19": "4Vqb7bf2RNdY4J54EtW9px5nS6PPdCPB9GHHBZu4n1ycYFGa3oM12mj6Lmaj55eEjT48A5PEJwv2ww5QGhgnv9UW",
  "key20": "4aJXCFLt6RMvBLTU2hzwDxxBZ82cVCJ6eCg71zxwFNgJxQkYM7jBr7MXYKiBFm44eUqERn5vyBixvgLieeXQSJya",
  "key21": "2jd2axZgY9xXGPHoDjwRyvwek5eyQGimg1MFN9e2uw9hox5mPRoDcJYeQpcQ2SKv1Kf5W5Ehpdc3CdSxou6jRH7G",
  "key22": "4mcFC4wAMtTFYiWnT6z979h7vnkE4KQakKDRhCj5eeaEvdU9az675EzaLB7bqyWwSQNSUFTxsRegQp1pQXp2c8BD",
  "key23": "4xXMLQcjJsidpZQL1jmqNqEU3LS65nd2KSe5cBveRo6DibWwm6kcetPr1cBqwhMVFkTwkw27DNbSndw6KpzxPLzz",
  "key24": "2uyTxYayo3yPvSR5cvvC8ADAoJdWL3LTBdCfL9BXZEBHDzdowkB3traM5h31SU6MrthkKNzJJkFsP5myqnfkV1zc",
  "key25": "2CTX5toaFCBiQYxctPNpbmfWjSLEh6bAX7MtJoCAynQyeHHtYdV8uw9n2hY4XfjzWyhGCL2s4ePxCHpiDW4syMuF",
  "key26": "2oUZotVhogAdb57YCNqsLW92TyyrTK7tRVvaStSZgb6YMhXUXezLmbo2b5AbRTqWim5zeuA2CGWHWsB7AZQTZ6hd",
  "key27": "3HaSTE4aiDMDEJxivquJqqVGpurKAQSEMsFTXEebQqpsCDwLgrEGFFu1L7hkfG64rMvxy9ioBaMsMQx9sPrDYwXo",
  "key28": "5xMvjYqzoaRfSwQvSjzmnLpNhmQX6Rfx8pFLyYaiw4sjH1dMD9qrQwhqvUujpLZ9Dzkr35kTdKPkoqztThbsoueS",
  "key29": "5Leq8F2samour9KFsACcuLcqSegfngyNAou7PZAjw1MFUqE74kxZs3YJYKxHEMU7K5wbGnPwZa94txDeGPtrG5yZ",
  "key30": "2QW7EdYccopbmCaZyezWdR7xkhYNkqg599yjWqLidgbduoooeLauUpmdaLSUamgV9jKXbkxvdjsVKiPZYFVRCu2u",
  "key31": "4v4dYodfdoAUDCJNak4uWiuA7J5dmCHSDcMhYJePWaU3XaDQNMPQGqURqXAeCjUi69ygB8Z8QoZK2nqbpjxjnrTJ",
  "key32": "5iPHQPQbirNRpoqVhnovBpgi8i9FUfeyJBaNWfrNZfJv7GinzD3uPrVR8riwcAibYxYu816AsCXuN1HrWMif3NyZ",
  "key33": "7FBZZTNRD24zHMDihS7SRmQrSBKDzU3bFsMKbjQfCg7eTi7EtL3kxrxP6VhfrGRjQp1GuXRta6QmFFP2AabD4Bm",
  "key34": "JDpnNLDvHRYGrifiBMdoJsw8ECZrvcVy311QXsVaV6hmoUVK65up7bMn8ZSVQ37rNVFJ71U9h62bHTNC5HZ1TzA",
  "key35": "4aLjuTRkUuM3DMxVHm2AgQXhY77Xk63UQG4pabWaDPvgL1zSJ2zQ7Bu63s6X9gprrvxWe8YCptk6fgsqKCdpigFt",
  "key36": "4mas3mZM3vr6dgqgJq5UGz3VggzdkBaVa99yYB1j1VpXGZyJJA4ae3LzciztQgUnigfHC4FWQ1RtesvSsqjmKV86",
  "key37": "3u22degjDHk7V9R4qTrm1kVAWRw8tQsTYGmozCr4yHf6xfpw25kGuk86vPoD9y7cHyBmqVsRBo6P6d9KGH93aYzK",
  "key38": "2XxDG7Kb9nCfcDLbAxRwLpJgjppb89Bn6EJmS2D7xWbmx6VPTRkr4M2HV7wRGe4edSyRbmjJnPhzCDoLU15ri23H",
  "key39": "3yWPpK6HQMN8XmsURKYxJfgBtPFUJ4V3zz5Y1knQHvKi74vj6Ts4eEBun3ThhZ3gHEBLxc7Do1AefoLYY64DV3NZ"
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
