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
    "5p8SF2USmMuu57ixFZvQYhAZe5ZbUSL8tgYA5vNxtQpnBBPpDqtxX9rQr7d37kt33bTQkemqJFK4yLsNUQ1zNyVV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FCeR2g1CcNBZhn9nc6yJpnGvsMzwUqJbbbwv1whuaFd8QiXaeRNF83TiXpqSBQZucTPSVE2kUxuEDBsBFYCh8dH",
  "key1": "4vqeCsmzLGaQBXEdSN1Y5GmihQuVwGwVab8cTiPuyT7guSJkDTSwzhL2QpJvLHekcYfus2v5NYQJ2hS6zjHapSr8",
  "key2": "MVVaEhdz8zGoz15hWt5kQ54Q2utu2DqgReEh9VURKb4TPCHRWzfNk7PVsowQzqqQNmoqk2Fs2HABPmUaQqoQJSg",
  "key3": "5uextZJhRkeF7onbAQNLCn7UgQCjpiqGTUEWasUzr7JwDpLPWSBy4q37BKNkS35C3ZFoBzJyHiDgrVSSf26yHrXm",
  "key4": "4aMgKpzsRyZGUXvx3JKWDX3pz8z1WaXafhXsKALKcVxwb2PznfMYmxScT7N3MGRQZHCBzqu9JGWU8Lcoy3UD68N",
  "key5": "4KYRiQibasCUNzfZ6b95ESwvyGWaptMXqcYgfPJm1dV5Mvzkp2oGbJJVVEV6SpBwKWEMv52meiWNB5YtVtY24Yat",
  "key6": "3Da6sCim6qGJoR8LQNfa5ogMqPeBMRPKTWhy9T8tnBScnFnLxZaXUCW8QsRGDAWNhry4EZTLcsFPy9UoASuDj8WN",
  "key7": "3YJaxG7okrrsuaggwHHC1LhYWDK335sUMpLctfbwRmR8EfCQgAdakeWyszjFMcsceJepYdiBZ3M3kAHXzanqwuhz",
  "key8": "pheHgC7kLDC6rfiT57CYBVWkgDiwAbh3ioAohuJR4Zictk1wYaSdX1BG54tKpJFCmyzsJS9dYCF923P1Dyr6QJ3",
  "key9": "4uGovnsaNkHPo8x5hCr4hFus2zLxgkcwEwHiojrRDffvKPKYYux9bJXaS9QF5vctxURzvKid6iDTytnGeVneNjdD",
  "key10": "5Ux9sevxrTED79XDhuTVYpbpDurHWZhuUHKiRP4Dupz6ejXnXDXgQvBwkqpHm47jsS5SBDKe3t4Zdbpud3tVDdoa",
  "key11": "gXEs4YGiSqa2wToWUC4RCpDUL63JYwJMkZRVLFx37zgtJxMcZ8ZRtSU6czft41u3Fgudu4rzXEJWLFLGQGu8Kyn",
  "key12": "4BYHKrLAh1k44s6CuT8MfCsk3KfFypKiqKr4D2NLXwEQwfyqMfp9eCtUKqyLEmsw7F5QbaUumpGD1wpXwPk7oPP7",
  "key13": "4H2cCXVLRvRZhAZ2vK3eg6GKE1yySWbd6yXfn4ootriUWZRaPWQkjWSFRWitMRMHVg5Bb6HKREMDcvjc7npHMWdh",
  "key14": "4HFZWdeg28XMj5aEamHWLd778aVPhegBAN78pLZUqDZsdGUJfLRYBVaYyuydPt4EM18WozwWYRpASnHDBKFBfLx",
  "key15": "3fExSGmub1qTSWYeYpoiZ7arRJF2kxigRkjmeW9eTb9DpWF5XqbYW9LqTfmeYDFbhUJqfKV7WxdyP9GjceDxbL44",
  "key16": "38KLeZrGUVix5t8Tjeto8eXpfUBs5gbTPbpbDLszQXUU4vvC3a8AbQQW1ZPphgo9oPdcZPUbykR7mCwB2G5HE3oS",
  "key17": "4W2b24zGGskkfQPTmAaRtvvyPFyyMFCnXGdqz1ME5Axwf6KEjLgnxmR3KZK3P6yCbjckDBgTEmYmT7hV6R7NLW92",
  "key18": "26dwSd4tKJMWnjxANyhq7xxrkNavVKB2a3YZH4qRcCdHgdMZSobAr2v2CZWryBW6W7UXKoBFXYCrecgQRFs6EmFG",
  "key19": "u1fmh2296SBbRtrDFhJ2Wt7vKJodTRA14BdEvxK4FfVQB9fZqwUwgoQS9BFzYDiwLg77N54xAwLzhsLkn1PTmVF",
  "key20": "kJ9UVzB9EoP4oBS9nL7T36UkRuqwdVrERUk1r3KTkouzPdxqYDn6MghCFpn9MbfSG1EfXksRmDCg5J5ACx3SmRH",
  "key21": "37R4Znf34kWQkb7PJ7Rhn89ha4cQbmoGe4BGcLh92neoN4shVZiBT7CRQojymAqqdduiFEvfPq1XR3NdrHuzyYWo",
  "key22": "3H6wN1ye6uF7JTQNoomBesVkqjxPT6CfuXtmVJDgeBszk5iQCLmxLHzPUBCGU8RmUx1gHWDpJqWiJ2WXG6ux83v9",
  "key23": "3pmZ5mrjWKViftDL1onjnz5MSsMozLRgkKBv1oYuyTLTZZubciVJdXLX6HUsmFnDpPumW313pXHrueKTkX7mw5AM",
  "key24": "4uJXhTAZCnsKWaT7raRdxb9pWF4ZUBk5eUgQMr5xsQ8Kor5B5uXaGpqqYqY5eanp8Liao4Ubr98QtTdZDkJhfJxo",
  "key25": "cvEFtujLQtNKRdQkCHc86EiG9YWP7eNtGfUvSNCqXatBzEYqXNp7n2YbbzGLH5XBiebYDHHXcsJT9tvx6sofr2d",
  "key26": "25AZkdrVkVJrEkhSNdC1MJuJaByvA3KfCkdRanFoyvouNwZ4Eqj8jhfqifeU5FJd286hzLbtdidbtsGdzhYBapQs"
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
