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
    "3tqQwRu4wZMGB9jHmAPRi9BY1UaQ2DNo2XCKMU6YebwGbgLmQezxRbnS8fzyoeg3c1XbqVwb5Fu3fMf8txMtAdQB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YLCHUk6jBQ7UH9AxXpudpgbFst915yKgiDvcodYFkg6kufSYwr4ixea3bewX5sXdPC2o32nKKpBRBN7v2geXxXi",
  "key1": "3ZuTp4stLFmYDmToEzJ2bfHs4zpuwCp1QStu2WoRNyBpAJumBTNQZBHsxArBgKqfDEmEibGaAXUt31QCKDyLTnk9",
  "key2": "o6TqoAvnAzTwVquhEVw8JcdN9gpZGXvaezsgxQQY7kqLBgHVLUzaFkzSMqVa9SJn8T9U83U8S2G52uCWeMb8cva",
  "key3": "3YcGw5Ni9zamhMxLteWRsJVxksodqX3xSzE1C9f1Z6QoqnUuDhgo3P2GJc64k8f7Px3KVAqu6bu7CYuLAkzPPNx1",
  "key4": "2H1UspHEsk114gLUvxDMNFx9oz3j9i6XP3amqS5MwiGQ6i7mie5hbJFwvb6mY1j7iN7Vup2x9vWxqfpAKWaS1B5x",
  "key5": "3EmY2MQA8uAAyJS3D7NkHCC7o5xPSPh1Zk7Nigzt7dQcssWpZfDPDxp6fTy2ZVhDNYbBC6aAc4ep6MsMBXhmfRHK",
  "key6": "s1yqpLRoqjAvvPTH4PsZ3fUTJZDn623JmwALXEkfy3QntSL2AvZekNfZnN1hAWVwpKhB4aMbLCghSgStnLig3ng",
  "key7": "5bmp1SnDCGPAvhSwSvmcVEgw6HLTopHUhck8pjW6WTdQtwPvnr2kLMpAi5MB8xTpatpqQgJ3h3XEVrG3oHVA6dYh",
  "key8": "5qvQ8BQnmAzZM6hoHpYZPxNSZDFAP61m1Eqwd5jFSv2ntyy2cTPY2FWpZc8wNgVjvDjMCSBe1EZfj6v9e4V3dDNz",
  "key9": "3fBX6e7B72nvobXEachr4zghRiAvfLSHh2rJ7sGGJNSdg1mGQvv3JGD36csa76zgYyVxcKifRL14Q7dQ16134od2",
  "key10": "5smZFhMVZ1adV3EEHkz9JXMgp32wLhZ7weYUsAg6n1mJn8HygcGypHNhjkXyVRutD9VUMbyAGvihLAeUDTXveLwY",
  "key11": "2ALdC9eodBofZH1pGuiKJECM9H1otaABfBBXitTXMCtcv67Ck6Mgc1aBzp4HxzgGJcTWLtHJVJuWahFwnTZCfvKV",
  "key12": "4JytnjNd8j6xQSsQBsTHVzFYDZSpm8afjvN19XCWdYwo12f4q947DMSZYZmtDdGT8xjeKm3rvgFPvxW25MZA8bHr",
  "key13": "389be8UpULXZDiuzeYigrEEzUfQWDArH1VXLQCmtrewPNTKkkDAFeeZwrEddc73eNLPbFSpv4Pk73Zmy6eKpRTiH",
  "key14": "5TG3m7br25ig5FbDsUQ95eC24Y5p3kHvUyKg4xq41exmkehHUVsN2H5Pguny9crQrP6dvbwSxpxJYZRgUs4AjB44",
  "key15": "zvubEF9p9ohjz4cCL2BxSUayyFkKXFMAf2upLoEDkk9i6YGvEkM4t9HLLLvw3sx1BYaTETFo6B5CnBRbxitfSey",
  "key16": "18tNpUHaoL6n2JwW72tcxBSmrzDJzhnqJNhTrRJgPxu594qp8us8yj99wvoWs3YuG2P2GCfP1sgeZHBBJkxtXyb",
  "key17": "23sBHxYzcZqrEAHavN2zEafT9zhuuPC6eGZPU9eu9u1741DjRN2oi5nZ2dSi4zbdtegQMRTuY5deYstnH5PUEPTx",
  "key18": "5isdwASJFrBtKfwVGwcCp72M5vd4vDEtjdJXAb9w9eaJnbH783sxJxhtxpULy8adHxW8SwZuQtV4LG85v83qh2YA",
  "key19": "3uG76wmW1vMDhCbG2dAoVBdVeWXn3WwAxDTSjri7YbinGiHdQbWTTnQfKLWenivZxk5tfB2DRtHgM3BpkqTbrCbq",
  "key20": "4cd1Bdsk8oH1DeYjPTxhKtHTeKVQXPAzbReQatwGGtR2yqBbkC8b4cy5pBnjRjkauaHP85aLT5NvymwYgn4fw8ne",
  "key21": "VA9eRpwXK9TGG8hGAvag9dShNbZjYGGZUYeqR3sJEEtEHK9UGgVvayqe4mf36hM8FE7G4kgwmdAXsrGFCJASPQd",
  "key22": "3JsZjEqGWUSJ6bGdWStgYvDnu3iSFVg6dV5eCw5LGzpyRdg8pqKkQFpJs2ggJC1hA6tX7ZfYRzFFoeY4mP5YddmM",
  "key23": "4A1CNfWS71gaqEcUuAzNYSztpbsbBLgiePztvJaAvLyZphmCzmrcvgi88xYMe23DC8neCtDGGhz5etJEAXW99Wam",
  "key24": "QjRSKQmvGfgxv2XQD3PJQXy7ueZD2wDMkDBPMKcbrxJ7sHMaBWu2aoHfmjnUtYDXNDgzbYVtZd2qWWBH4gp7BzL",
  "key25": "5yD79bGgzouoWSpdySDnUb5wtAAtp4czbUHfKJkNn6csWbRHA3QmUzwMFvqw7iGorqty1ft6g3gHHDjSUQXUQi1p",
  "key26": "2eitVedj1sQG3U2GZoCWYBGZEHhGTKF39QdH9F9sDWEJh9CwbUSGDusbddLpWycEBPyQMTkYTZUgvh3qzdVbBsPj",
  "key27": "2SDemCuNjfYt5NtQMtwjnDiCQWR6XfY2UQQgyQA5uNQCK73yNi8kRhb1Ui7FFLKeEBS9e6izFjG5UhZUUKiQTY3X",
  "key28": "5F2fX8XrdrQgWsLSrtLDmUoX7HrMhR1r4YurP4JbuB8Jdv1XvBhQAPHtW7pQyE8usAEQhWAm3tWZ9YjqSbxP6yS",
  "key29": "5qrA8mcw1KrZAzYQHSHmQLSbU2a7qWNs4Q9f9sibC5xTuqxcSB1V2rk6Hhn1LY2H58NRGVXQfopj7JTrrJXFznrT",
  "key30": "3rWEVDm5UBx7ghk49cygDYWe4TkHxLJvMHoBtVaFcAgy2KbEoCXqUdBXgNHneRTaA8koNUpDqmJKafTYoqtwdbkg",
  "key31": "3Gecy15f1RMmUKigS1zpGeEdS46bmALBzYGzbYtGuKMz6EDNLPDXQ6iiobhYFrmLCec1mCRYeuo18zCStLbQcgZt",
  "key32": "62AjMtMkuknNjhAU3T56Pb4aje6bWSyng2QD8kYJ9VthfwJNi4BhSVcHH7Q3PTzuGW871GFfMAHV4h91J1VE1vt6",
  "key33": "tBYQJZTBrKtcwcZTjtBeBfLNSGnPiqYNfyQuhj4gSVzwZsueUA3FvtpaYg1J7vG6C9zZZjQZzfLiSdjznqPyoYP"
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
