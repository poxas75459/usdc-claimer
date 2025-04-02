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
    "3nFbLE3prJXeDmr6LJ9Ggjmwu8ABJVZf18CSxNa1C3dmozt4MuRh2oFJbWumGjTqkxGvsDyTJSVp3ZjyY4gq9hM5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QxQZobd7i9UMfsKckbgrFD9gD7wTCC9Pxuihrerdnnn2cqZkUH2ULoFCgMgv6CemAPTZGNVxKnCWwGDvx6Hgh9d",
  "key1": "2HQQo3eMcvNo1prwaUfysNvfAiwZkoQRCvwQBjCBA4WX4hoDNS9ZU8mAeYpNALa5pssBE2HDP13zDYpZDQA71aHF",
  "key2": "3Xku1ATnahN4QLHJMorhVnhKy5evaFCAgMd4fqMmcHs8rLsWNw5ZQ5ivjDWcfqocHgzkhc14a1kk1BQiAS8aBeM5",
  "key3": "2L92riLYRCsPE8MJG53XVkGnHspxPKGBjmqY54h2ceZYSajEUtEA5fqk8V8ddubVtsviJz9X27w4rStHTMHQSGjC",
  "key4": "4oGGSmjKJmmq2xRKePu1JWxmDvRhL1Fxr7fpjsxZBQDqAakuNcrtsfUshiMxtxdbhM2EdiSfMkrhvBcJFoyD8zim",
  "key5": "5LsgxJR6a79dUkY1T4Tt63NiyfYW9jczRRZxjqVTo5XtPpG8Eap5X54hjHXUyJjZPWHkHHWz4XZ815kUhfj6uruS",
  "key6": "2zQGExxT63bkHyNp7XP49khSdRTtYuQj59XJ8cHv5b6tE4MEk3wPHh8GzqzBUvNSVvh98MNH785aLgHwwWUF1szZ",
  "key7": "3PwmkxWemMos8FC46x8nWDqgQRoi8fS9zRYrYuxDuy4ZuSzyRwUXMwF456aRyycBW6GDd9ZDgiDgYVxDzsfPinMU",
  "key8": "3vcCiqUZknCpq3F2bVizVzydnR3yq3pfWjsU7PMee2mBCLR1pQUPrTiCEXtNZV8MFq1ofZxjVyH2FaKceh2ePn5g",
  "key9": "2t84vMc95yNjZa2MmvDQvhcV2R64mZek2rXbVxtoWUfdxKW63YaVJWJUrshKStLJoUzexyT5iaC5pJyzoAvqCuiJ",
  "key10": "4awNUCtLg3VYDEEtmanLQiW2CFPiQxMYhYmbC8xaxbH51H8TuEq7CNtCjsTKg7gMcddZxz4Fnvc1PzwxTMuCzoZS",
  "key11": "2Qm7aHRjnyfxzvvbapKt2BN4hWBUXeVX2QnXgT8eSBEvPeTV3myF5cByaU8XyCq6NHe3mePxGXNwhKcGYt2wchCV",
  "key12": "ur9PYiGf7dtocYr6TouWiTHDg2ypuqswPTYvNsRG9mJNKNZke8YsSmfY81iGte1ter8dWfXLHryuDKntmJ2jCkE",
  "key13": "2vUDxdgfb7LSFcMKNZXE9sq1sV6AowyxrCAgimKsUcFaMBRGwh2wNgcnhhdG7PZXtHeC3zPZpwkhBMTdcMpqAwuk",
  "key14": "Af7rkDamJV8ThG9QWD1bSEG18LMyzXqaf6WDgUhsehvRUyoiE1LxzA5Sk3Zwhecv83ahdtmDRC4yHRwGWHSLT78",
  "key15": "5ShPbey6erwuhdso7GtppFwdifZU3kYWL1g66r5TJXhSG9ao1q2fG1i339YaFSmVhxiZB8HSoHrD8DKD9YxuP78U",
  "key16": "4K7JsQk7CfZMr8Qmek9rsUssreRec2CY2NaQyY6JQo3c3rpTsuUki7sZWeLrpgMzjwbqjEv6wKghBEnNZdLiigPF",
  "key17": "NGKsTEKKq9K1cNKzcjTtAYWoL6MVgcqAvEwfhxbCJndjSvS2qFiDoZygET5rwpM1rXzDkiTTSi3JzNvybHq79TP",
  "key18": "2CPuFCTQ7RvoMTrL54hE4uAeDQpqmpdQuk8YAqhqqJhx1sNBY4aSj1FD36uSJ3aRA6jS23DBJDf29tbgqnjBCk2Q",
  "key19": "4dxwZ7iUxymh9EC4ojjv3cZzGUfpcF8TuHgCDQPCQCHKiGeW6fcSJ5qqqKYzD4QvbdQhVrhpJQsvFV1Lz1BZQmRu",
  "key20": "2PJ8PfqzTVzKRjcUZYuMXkq585kB5hk1kdVBkZhisGkcZ2vQnSJJsoJK5uuPtuGx9LkBAUxGpgprKFSF4QDobVG5",
  "key21": "37edEyABiVD7Qm2U1ofwNgrkmtpdxz1mGEq5zh5txudp5GWpU8e4R7STm5auZN1BV8UkXtNWmfkvs9DFSyjm6TgV",
  "key22": "4BQ8b4ZzKdK1nPEtXaJ7h1r1DdVkWP3kUq7yET5JNDj6YFLCGrhB7u4H4AEDwteUcipKn9XYqGtZpXQf1x6qsxtW",
  "key23": "HrE1wWpoC8Pd7hXtjEHCRAsXSzM5MejFhSmYuQj8qDFbmCpRVnkuG6Mtrna2CovXHAWRSQmMPCLpcwx7PyaryGc",
  "key24": "4J44AdABzXhcuGMUyNMW7T4bN5MGwjXJHpCsT1LHmUtFmh9j37aDzVfGrEGL5pLP9TmYcKo3cb1fG9h4ECyQztxu",
  "key25": "3HHdB6Wt1xmzcwpdPViEur71xF9oE8EweeDoLqEobN4sufbm6piT3fPXBUuDZULUBa64gyPSmdZDyaQgGLwkKHDQ",
  "key26": "4x8L5fDDmkL3mxL7JKhYdbYNvCbzemwgVXgxaYz8bQcMazQYsg8QWm6QtjYbezV9SWBdhXgPDs6suyCFxfgGipej",
  "key27": "4KvWrgHkarWry9GU7mnVuVv5UJn29bqeb2LuoPAtW2ThuqZz3PPda4qLmt17c1QMNBr5bTuBBTZT46c7ymmJVc94",
  "key28": "66Vz4E6EvSbLFopLSVNEuCWHN3NPKSdHyVn56TVHP7ceM96mmc84WTxf1Hq2EpXeJP4YBjkKd1AzTJU7qLyb6eMS",
  "key29": "3rd3JdDKm8Kp8UsJqHrvYwH28REofkGji1JiCAyqKhT6Zh3y1UeKfpX3bsaRadW4A8f72hWr3CsZE7FVFTdspRFm",
  "key30": "EALTcoXbxQZp5q7jajeKg6QHMWhgwbmWfSvqSMBUR9ruA4fTeDpiCjQVwKLUKWM11rUwQxGRq5u8EQAwcTDmj4i"
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
