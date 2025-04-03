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
    "5hVtcDnMzmSF9N8nZfkZwXn6k9qgzpVguuGqW6zMCxmt81GwgNwwnQdw49FZX9GiYLJ54CyLtw1cfdEhEZ7k683H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o34aRQMZ6V2dF68gLPvQA5bVYLantV6iBBsDpm4FEnQJzCw3MTYbTnDrr28YcuSxfE7PtPnXMNkEGAH431MExcH",
  "key1": "5SgLmD4VN6jwXSXpJ84T4JtqF6Ci2cjH5FboxuJaCK6uz6RFQLsPAYVLmWubpin6wVgBMNzjjoaoVrBmdpSxxTg3",
  "key2": "3xrFVsMUZXWvrcYWgXysRc6ZZePBLDD5czW7veQjbzs2RzwJpMs4fR1Phw8c6anAkFfHe6G7mHdXshsoNBLDtWPv",
  "key3": "33L4M52L1BZLuq8WDRVB1T7pz7tuqWHhXcfaavdVmxyem3ATcGh2nmwAcpwru915szNZp3yudw2qE193RzGoXL8u",
  "key4": "n5PSp2SpLz2Sk9aVne2VqTxNapxh1bGJayxhvoewrVpvymyivz4JxNXhx1TWUWoooYchTYYSM4W6pHUHcBUaZXK",
  "key5": "di2pwdLXJRnSKtJsTsj9LQa2oc6Y8FameRvuV5J9iqb9R1bkB8o43cHUnhdnVXpEmbcm1MJJyxKMJnsF837tRw4",
  "key6": "AzK3pf65w7x7Vqa1EAGE1if5eSL1xxrFoVqr9BvKuy9KV7qVFZe2wLhPGsCdp1m9N5mUNtghWTkJG1s1ZihtRNH",
  "key7": "3G3GZAKDDRkfioRLXXD3WUPSMZFyfndSp1snziv2vpVrAjsxUxWUCBcQcuDHJJkS2axLbJRUyrPzvoKdPiPePUVS",
  "key8": "4UUNLvKY4DPnEE1iKwi4a2HRLH4nVKyMXGqAQYEk2GjjUNKd1tFWKba2jqF2sCZbHhsVrS7q5tcUK3nHQntAN6Px",
  "key9": "5JMoJSEW4ArHct8fMFqkJbxQs4WkM3qUQodmCXXwKnkuX7dBRP1dottNgFtjRbxBFQCtL2rmERcFbAbjXCJk9Dni",
  "key10": "5D99CcdedMcm4xSqC5beGdjesELUzssvQioVytfLRc33rpz3VCeqq2gLukqgQ3SXrs8Se8n3pAcKtGYuQubYLUjB",
  "key11": "8XhGJYrPd8bmiAaWcrc55K3ghmxaDgfBqfg6dj9172XaaeFm5yFHhctDaXuEePmDVa9hPixGLJEwggNTpWjmJ1Z",
  "key12": "38DwcCn1kWsao3aUUTQULjYfzCLJwLWu7AA8mk6Q4nTZSJiuaZabANEnVVMmMuaXFreq3v8zpRJRFCFUtKuKoBKZ",
  "key13": "2jQestQvG87hT6HWL6JXF4uFu1HQGUqzwnq9Sz2wWT9Vfts95hrvixJX6t9ATxteArBA5DkJbqexTzmc7pebzNfB",
  "key14": "3G9rnAwtgrfSGVsYY8RscaECijEwJYGfH3uU3HXhUfUQmbnGUVG1vafjGstGRTq8h9srjPpatiq1Y9ZkcBYoyr9t",
  "key15": "jpfoKwQya54AVi5m7WuXPYHUJtNPR4TfvdqdQwthota4SFde2Sa37o1UQCmRU312bR1Z8oD4zpauVtk3V5jtH49",
  "key16": "2dbQGmKEeRn4o57bUif4cCzUDGZfhujtzS7Rw1uhfdd6LPn3iEXvFxzqQNgq4Er4tj71tCe7uL2eJ9qTsBoDHLui",
  "key17": "65Gc68JkNAMkJCVTxmbQCDhs7EiUTYUtQdef3EuDZPAEKJRNxe9vwDqVN9SYhpfAWVXiG1ejgyFXPQYqX8seSNbG",
  "key18": "3LLSg6ZkfoEpeMbdXt5y6U9imTVdo2JjjYVotQ7LWRNzxgV6kUWS4DZ3QKMTnB5G7EANH6qVx7XiRvdLfF2Wqrkc",
  "key19": "3UWwbp6a8fuqus6rHJeDSbbcJ1kqtzRQ6PhbiWoCm5HwKWKACLubcVT5285iuBe81CMsFWxkXbMGZJn8aSVmJxL2",
  "key20": "4qXdNEpdxVJoBpiQe9YYM8NpKPeyP9H1RfF7vEYgpYfsRhQND54r6cbB4mdMtrFM3zxs6fAVcQUjvRVDarNVdDs",
  "key21": "2LUrqvpo18Kx51tsAiYkENtKFUAAndDtotr8msfrFK9W9SSA4rozBNdXttsW1ooRQyvQSpHeMp5odVyBEktm8Tf7",
  "key22": "2BTY7aAjMDdcraN2NUPS2223SKztnfKdAuAnvYFYUY7wTgDhELSLoDiWvKASBH11RNGyLE9JLWni2oBBPBQyGbYr",
  "key23": "2GScLc1LeDe8DDvoncqr85ezoWnDeyFnXT7neCXSuwtevv9kPbo19LGZVNgTjpwvBpX7St3YHW4g8iT5GRy8KpEe",
  "key24": "5CMsRE46Uj77fCSe4iT2CCPBuwKds2569Ya6Jo2ooEv6kFoWHbAo3EJHsoz2wmiCu5pyJshunyFZyGNDuBG2aoQg",
  "key25": "4PwLjdJ9nUJG9KtVzNDZL2HquHswmjXS7wT7dn4oMZLEiuj8RhDHyFPgrkp7um1mX2sTUaeK19frnau31RT99Gyg",
  "key26": "bQR26jGzPUxJAGGSpyNC3EHLuTSp8zkLGaoiTj8mBNueBiSzER8QP8nNjhNdFyrPiRhfk5NhvMnNUHti5ipJahT",
  "key27": "5iBdAt4d295UZvAxqXdD4Y41ynDH5MyESLPdbz1wF2AU2BqisiYKK8oDYLyTLJ8eRQUK8krU8QSmvfFMbJC2HWxg",
  "key28": "48EnXqgX5KS7Eebk47CBq7Fv2gfRZLpDf7ToNVWp45hVfGWGCU9TRCutgcVkVoMu5aQoM1SpTrjPXNLQTdQDzPs6",
  "key29": "3ZGw4caP3QisEKQiwauSMjPzme14g5ScoeXuKq1k8Yxhymz3nff6M8BZrWpeTMA7U3CtVbawr8nzNQBrkqv5c2W1",
  "key30": "V44ep2PR9SfsxgGHxyPBMAbXKQNm3UZWGgFT3wrZwSgLGhjQehaara62AngQc7f3MumVWxihUr3XadUbTp7MvzH",
  "key31": "4k8edQe9B5Rmxf76BNFShnnnZt5J3NyHobt7gNn9Ra3KAWiGzMuVJgEdETWBXy6gvZPqeeMun6qnH55nt8VTsFbd",
  "key32": "3PUttJ4GJmz2SCKWHPD9tc1StLv5V8LhNARGfrqwu6LzAw5A5tAmvuYSsCMdbx9aX2Arh9iotjUVWbtrZSNZ7CZD",
  "key33": "4BTSpFQmeTfq4ay9Qy6cv66eoGkKE3suYq25fEHU7oYr42Lzcr6Le8PqErPvAyANo5U6zq6G77cmjGaFwCWCrDHF",
  "key34": "23hi3Sb1BNhckEmAXJCBWRNspR5nNsnCncPVoqvjpjh6RBdJnFJCNx6EKMtmvVyLdHXMzPU5fAZyvy1kR295M7kg",
  "key35": "2nB5cbcnKLiiu6RBKgKdsiBGnitwQLZ3xytpDcawiSpj5qDzMptTmesezmCeP2Z5T7n4TqU47P6hSRhAV8E5y3ba",
  "key36": "3ag8YYLcWKd2KjsncRziGEZGDZEK95wL1emGbFwPBxjiZTyyRwkbvquN9JLnVoRFdgwY3Dvo6T659RavuMzqjk9j",
  "key37": "4X1tGTXn2YJUVyFqEXqTbk8EET1drvb3WZoCLFWwZH7Y1wrcaBBGGq9WZnUoKNWddUJ3aMP4ik2Hod4HzKPudszi",
  "key38": "3qzwye75xHcy4BakGHmnLu8EzmRwJMjhsEoJdB1RVdovjoFVi85kzWWJr44x2HznWczJ5AiZaB9n5MqeJKmM8JL3",
  "key39": "5Mo493SSCvztZe7mYCSVTrj8Jx42fFcJri8ztuzGnxGKebsCVvXmzNgDDZV9pw9tWXvzrDrJjvR6aS7SBn934jrs",
  "key40": "4macGvornwXAhfUjnuQgkWdjh3MrJivnEUTFRGWmdNT3TCXZzhmveyjQZv4Q5H2ThABMNmMoz5E5PNUaCkfXdZF7"
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
