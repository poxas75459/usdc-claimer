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
    "4QiL5g5w9wjuGbwpD1kTTNybufrbw1yYaCQy3PBcWtR8wRToZ8itr8oWaFDPntx72SmSP3bZmsWeZSHshhKiPft9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B82jdAqdmcpSLpzRVdsh4vPd9A9k44rtxKbNBcv8MgMcEp2yRTTNDWDmC1faC3DWb9g8EiYKGJhfX1acAi8ftNo",
  "key1": "22MdV3bpnvm5ntZEq1MAQKxEyFLaJp2eDgb8pkTbS7YhWKeZYU7M8MM71Zdsj42XVvvZdeS9GbtngLLhfA2nF1Si",
  "key2": "27xeYoK7boCiE7jp1VzVLAjzy25BGuoPiSEdAC2A76hgKnXh8d78D26FV6JjQqDVhRxFuuf2v1hgVYEoPcZiyenY",
  "key3": "3dwKEdUUjFCG3SchtnXqE38aKT5AjBaBCAm1oBVhWFRjyrGGvctmS91HtHG6KbmSx3SVVWoWqKEdZoDAsQUCG5iE",
  "key4": "4evso2U8yu4iGja6Bk3rNJJ11nsGPmNnnYtvnqZcqY2vhqzQZfvoyv9cLxHaMndfUCnqRURMeJRsxhFr8d1cyQBz",
  "key5": "5hfwWXetiPWyeAwv2zmTaUH1LkWCoCK3qQ9Y7ns1dtVMiMg3Q8KXtSEYRvjZ3xuvkjDCrohgBxufq61WkfLY6o7q",
  "key6": "YJ3HLkDVsZVzti72d2opph1YHwYHrJ7TeKibm2oLm64xWbn5EpBjwA6fBZh3w3tq6omEdAryASaXPYAYiSSznSy",
  "key7": "2FgwM4S6sWRj51wJCPhwfdFDvYEbS98eaaZJhwaxujkt5HNM2tdSj53H38rHbL93R1p1x3JsLUo5miyXncebaZxU",
  "key8": "46Pu162WyWbfuQ82iKmD77NPEoz5jJ8QDKPHeEuVHyh9DoRs6Mn1XgkAWihqRwHESpij1JfH4idFTbZkovYkqA6C",
  "key9": "58nciZzWbnmAynhpCEjZKwk1W9r8sJBpLpVsA1U21RMnxe1Wy61zcjSyNnTP9AAdyUevJ9pSh129A61VdSpZHHLT",
  "key10": "5ttgWR4w1i3JSha4hDLGtJX2UMV6e1e2m8sQ5ULtGRLiGzhx3y9yAzZM42h34gej4KgrWpqiWJZtqfTtbzVdMsH7",
  "key11": "3wscCXyJRoAYjqcZX3WLbintq9Znb46tiSbeMTp7JDgL2ynJoYW88Av7cPLUQVDXpAm9jpgbBmEziXeWGPqbcVca",
  "key12": "51bJGYyqtsQKg3tE3c2zFYk57wtzRus7m5GgXNvsx7T8QnA1xe4dB9HksXeR1UPye9iXaUG8dQ7YKGqs9Sc2rzrw",
  "key13": "45qaEgm8NucHMBNN8PhfYkfKEH7a4exy4yWdTnKQAZ2r13TU4Kpw8YDwkE443PtPRcc8GtKxrMssckr2bRNXKaqM",
  "key14": "4E62hsAa8SqnYKTP9Wb52pqWzvwyV1DT6nZ3kFDNUBLV7kFPj5FNedSR7TZGhAXKtyusJUrwmed3MrFJBDug18aU",
  "key15": "2ABybGNK4vhG4mN8dZvYWzBnBRbyLk74Bhzmn6aRhQQkAAyGhHE5ZZP4xiPJSNbthtjFjAQR8rik6k21oTvcCac1",
  "key16": "4FHxKJxpBKMQxm5jZEggibs7PU3dK8PHndcvDARuaukyR51EgFLecHJ7dghrZNbmr55914mMhxvkgXSF3HbReR17",
  "key17": "dqhFgAxf5mYuip3gLnm2qpSPj9U7Hy87Pt2AYFDjwrY7aNiDDV4G5GCRdvg9KD8jGG2DJfK7g7nwNuKxqd4B7tj",
  "key18": "3fwnH2ZDTo1EQo8n14VfmjQ9zeBD1NvUAhHRwmfwY2KbAbiTUtkUbiXKpxUC5LHPTKxoUvieSHZXN4RepHKtfxQ9",
  "key19": "3kUkmNc9UigUQHWFTjEEP8ccvwXYY5ti5XR1RS8UMHNayRhnbKBhB2rUpPibVQnx1zesE4Df1indNxiDbBq2UYQT",
  "key20": "56bzBjDAVvGZBocT3BF25S5Hjh4P4zaTL5t8TZJRZoZJAXynpPezehD3urzsV2Yg1TBdBPVqf4g5hrNcPaFAhfcs",
  "key21": "2QBAsk1xPJAv1DfjmRRR6HzXbCuMyMmPfDkUwePWcuwGHkkgcdQ1ntN7jGsmh2bnofCkMR4jrHAQoL2KZLNpxT22",
  "key22": "5FYDDQwREy6ZDRTvizZafqVEZpWikmgs6ZNN7zg12CLk3qLHgqiwyf8fxmS3YFDKMuwCqBB1ysfi9pRsrxmH5dWX",
  "key23": "5Rh8JEgNtDoQFxLQ3humQp7W3VJym4jyfUp7mDEBsGPR1PyaeM1Ee1C3owZkwJPxDH8wqGcKugQwpfxcHjSvddkZ",
  "key24": "1277aVrZQmw25nrHkbA3ScFWfn9D2TsEfrJjYGQQvBAtkKZAT5Yb72mKiruzEKWJCCdaBWMDBUDiUQoEzp4GqZfW",
  "key25": "3ow1AfmUu91sBjaF2qG3QG1fpyETF2BKfc7gUvJbAPL9FtWJxHtfex5To4UCGVWERRMQHKTMYLNxWDL52o8sUv9g",
  "key26": "3gVE6UrDfH3R4VW6N34tXz9Rfqh6TNhz3fTov8Me4jtE6kc51v5QzmTf7C6z87AUDiUExtbW2rR2MJSkGzvTr7EP",
  "key27": "LzYb9D5Ftp8GzFL8rS3PjCnpmCLELvjPH1TkPb36tT4sDj3jEiBJ1DRZDX6UE1YpkLnx5cBM71PsSQ1hEjR37qq",
  "key28": "3eYmGDyqhPhRUEjrhfttX644omMZFyKYixm1ojZnCJZirqPgTj35czZi1iTSVpXnvLh9UetBH5mptyiA85FeMqFk",
  "key29": "2VGTUbQk5deTtNt3TmriGRXnNZRWq5EJpJnu7qUTSEBNTgDhRYhMfgfHDmmbDLaNNjve5qRry1e5RAWHL4cFBHWQ",
  "key30": "2b2KGH2hGKiWstFi4SW11ruJLaSf6na1oV6G7aQMRTcLRmMjoJNsZfimBqjw4otV5MSQprirXxYer1puVhr82MTy",
  "key31": "2qexdVAJv4N66i4rctNVQdxteDNguNrdRpae5n6nNni3CA9Uz2xFsFwvjxzr446owxSPUgV7Mp8PtF6t4JcpFGfs",
  "key32": "5nTfucNA2sHvrpyYEW9dcz9pij6oUqFojDvWjEwudNdxrCmmnWjNdUxntysUJnQvXrjLGptcc1SGFbHD4NNmSjSL",
  "key33": "3FxAuyMijD3TAN9KEayonCBoPG7HoG68T7Y7FFPzHbKr4kb8tT86oTUe3sTrKfwNPUen2X6G4a7BME2mpTdQuHWW",
  "key34": "6vbu7fXx9TDHqJUYhy2dK1vyE9BBRCGvmwvS1C4jPTsKS2x8PshxxzhutK5G6B7JiecfwCibzywzPp3umFvG5ku",
  "key35": "4asaegEQa1roC1haTzN5rbsoPUkbC4hLNreW9LHARtNCqqWz5cMuh1XLhEqc3fsoMoktkyxGgc859YiZroADJJGY",
  "key36": "2DKhYFzdpJn9AUgVerH26zfpNBnds6T65EyvUx5qyQyp3ScyoJD1zR1N2twdfju5YjNEWyXfV8fuvBgEEmKtdrQj",
  "key37": "3FVTmCbgX5yTqrQKkzekQtfmTSNyKrWBaBynSFzdTA9ZRkUqqd4TAQFN8zZZMpwE3ciBr8s7kyZwm42EAsEXEa1T",
  "key38": "q9nKZptjtKrTyznSaK3qKNeUftAf174uJruM3eyDSpF164LB2bpxWNu6jXXHQTx2FyWZQN2LM5FGegnpjWqFnro",
  "key39": "5PEEANzFQTKRfLyV72YW8aeogXFLEQa9NeqHSftCerT8tJ1ob9sA8yiAH3WFZuhK4jthHT2EKJnnPJNcibDjJPpw",
  "key40": "5Kto3cmCzL1SUjDxtwjbZBYuc5PHZz9TzenGBtwqPCMJNcbr3C1JEwmoV7yhkzrxVfqiDMa4yNsjMJZzP7FRi5o4",
  "key41": "5brrvE26WqVZ9YajXemLZFa64V93hTY1fC34UmJmoQzg5gFfRpsE5SjBtsYWU7NTJbnPby3xZjjT2WJT4BEm5n99",
  "key42": "RFJ3WiYUu7iVQNamwVB5DBrKx19q2UJKRt2o93sX56uBdU8ijmDwnx67EA9qSobVHUK8Q9wCr7odUKW8mjisQbF",
  "key43": "4d236bUXkvaBHKFdBw5bYBMeJtqeFQiwgBL982Y7qRM3RQsnsrSnKFDCeCg5tGUjPrr6M3nJtfDv5m8g4nVWbFrh",
  "key44": "2SsASZ69FWwgZCNA81SV7G9MKZrZSbaFW6twXFHfGvJ7M5PB4sDJ15sB9PGNBLSCYbHqExKB9JVrSyss7wf3mczk",
  "key45": "4un1ZFN5VnP8mGHUdU7gy1GeLyoB4wrzk37Jab7mLS4KhK3cu69GcLPrNqBNwBScbRaVnpKny8PF9vwmPQw4sVCB"
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
