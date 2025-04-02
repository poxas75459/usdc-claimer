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
    "4cRXxiDn8UixS9tdurVqcpPAvuDcbSoZ52bkgCN7WpoM3euLAbak2JUhZrWHteqMGJffy33kpMWe6Xpqm7qq2pRr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Drbqrw4FBpS5k3fGQTJV7XF4aTcp2hUCN5VBBQ5dWTt5bDDWd2Fnz6LWj4dBSwfD3yyfuydEkqHtRUrrDMwqnmp",
  "key1": "4cG9zHnkK2n8dyCJxHEKHSVXmYwquvdJHfaEMjKJzUE5MpBzyNv3qJ8FgqcvCZvoLYAPeMj5WBP5JuLSanYuovCw",
  "key2": "vn4QParZ9T8e9aVjVXsEEP6eeyFjBxtgGso856WCsbNLjJehwvaSrakTnMqfgTdnb6jScoyHasfz4NqRxJBHnvR",
  "key3": "3sKPRJ37RwKQwEZqL8earKQaPaBegtWETfDbSbcBhigDpYURb13doJsKEkAci37CFVGoSTTu33tM6YMbFVX99hFB",
  "key4": "2XQhd1Gq8oNJzzDUmfKf6hRZ6jvG9ds7yYvNH5t3qxgPQxWKpTYyoauCLDTxiavAnMTArgz3Xz3ires24hSZ2SyJ",
  "key5": "gWDoqYY5KpZNNj9jJTSYCghrYVvWCbxPCt1TY3Z1EG9K3aGzHigmEasi3BoGV5Y4VSBpkcHR867WWSzWTAuXiey",
  "key6": "2KtXLhxW9QcwncPmgqKmXHbKsXDTALLiJqNzpay7gj84t4E8k1uSqHVtg8CxVuvvyirXAJMhxF8TZSfMDFFozJh9",
  "key7": "2VfAHHNcns9PNCKzCSe9soX2HfAQJdFpdgRnS98upEwmATK2aKrB5ckfiaiWZVfEMh7udE1hi5YA1VDmHfut6Hbn",
  "key8": "28GBtuzxTXsTtorJL1CUDpwEKbVDQUhd3aovXnrdQT6ZncMKxenFp5PXsRJnzoVq7prKTapatxGmQpj2aGdARqnK",
  "key9": "33BppptSokGcrcTPDmyw8KYTaHNE2iJgFc1317Mv31eieVM5GX6eVKapc1nTNbVZFkNbNzwYThGQ1becsWpWDbpp",
  "key10": "XhqLSv5kE8rhpWQmNgmvVQaQvbrEQ3bMUXxUciRJGZhjPm6My2cD5SgM8aQkr5sdC1sdeTbJSu3mAUuJ8TTYsLJ",
  "key11": "2tL5HqSER3csYHMzP22sgTtFQH8CWFMzbqshsXDXSenybj7gN4AP5TmUDy5rabou7AsKprsiCPJ8wpdYJz2Ggmpb",
  "key12": "dDZ3LaPjtGZvzN4SuehX4G3oPcfHA36AnMA6J9GeA9tsDtzyJHXkaEJ8xcVSvGU79A7sN3a3d2ctv6BcmCfxtc2",
  "key13": "LB2KrXwgqA2fVT8RyNYKvyv8q1gqSvUKxmejT2fNCccmKSJoKHDbmYJNRqNMXZLzkidXjoR5dKsKWruuV7NdDdG",
  "key14": "2LCv5FZs45RTqkTQfsUTa2Ai2pdA1x4pNBPc1VSbBGkDDL5nxVoRXK3qd9s1FpDuHZowP877ChfzTcbWgQPYsJRG",
  "key15": "2TCLsZeGBPrfGTLrJhjwsyJktt7RjvcdNeZ15ahc27k3qbe8CtivrSmytsCNgCsbarbnQyZtdQ6csRZVGZju7wiv",
  "key16": "2nYajHwpeygWuEFbB51yxMoVHixQJif1NPT2tUHFX6J2Wqzzb8WoXiqDNdQXpbAdgW9amnHRmy2Gj91AUdpk8uK2",
  "key17": "54MrkhepaRoYfC9vRAapSJi9RWpjJStf6j2MHb95LTzLFrya44UaAhoe2EStvxrn8PrStfQch1NDmRxrBBAguxeZ",
  "key18": "5UpBLe5dGyB6RDFsPwEn44UGKxqjE91RRx3zxf5xKFXX4kdeEaJSN5Uq6gxdMqLtVGf97iny2UY8wTEcdnpD9nYV",
  "key19": "5HnxtFRTeBcctyrt9uKBUdW2Ri1Z9ts1pDP9F4ZMVGz9BV4zVpHckRS8AFEJ2dKgyFBnFb66PdFn7VLhPE9uCj1Z",
  "key20": "5m8ytk88phbiWeggdRfRWQWgt8XpFyfr2Yrch8jBWu35dLKDYaorwfcbFbN2HDeRKoHrGY6H1njtDZq5JsMqR7y1",
  "key21": "2sFS3THGtgbHxeqxp7HJUCbmVfM8TzKrhsYhLW44qSP1Ln23NYS2Fb2f2JDMnm6uakogU5M9Lp3BECbGEkNK6icY",
  "key22": "42RLMgrPmDTmSkMMZ12MYoSX9tWRXB4iJZzV1PJJS5QttxENxXgfh85vD1pr4ZvZUoUkx4aEFXcndtzj12xCxRQm",
  "key23": "daWrRcSVU796XhiC6Jd7Q5dMqmnX2Tb9UCGGNdYyC2qjvzPjKujRRoUD2wyEiQ6765Q9zUA1Kp8KsTBNJR5Ta51",
  "key24": "2i3SGG62ub9qpZU1ui3NLecxeKqYBHB4zw1gvNaciN2oKaEoDuQFLoxJyq7QgPZvEMqCKW8etnxpSfZPUNfybhfv",
  "key25": "2P4CxdJNp9gS6bpxo6jPWesDhXVh177rHf1gSp445Ug4J79sG4X5d9BLXs4fWxgREXGLfoNZWAmC7ZU83SVTB278",
  "key26": "4wqt66Qd6xBZvWeojQQz8zYV4XjqaTFoV1TZERQrRvgsoPrNESiDY3Tduvsk2CPkuNrWCjCrAUrUwbJJNK3GF25C",
  "key27": "5p2b17s4NYZVfT3PmfqhZ8jyCyiVfYKxWZwYxq5xjMKBkj4bkMbn4kL3oCBGUAXDn1Jrz5qsgWF4EVnRduNWgSRW",
  "key28": "2rPu4DstyXgfAXSdXiFPYGJSKPndnY2VapeSSfJPMT8wjRgzKBRPkrhHXDwBYEFVsuhxp5nE7X78qX3wYDf3hsTx",
  "key29": "2KoZRhsLAgLeyAMZKyFhBQaq8C3zRHX5izrM9AnZ5ZRGcLy1nG5MAY92vmH9dZH59qgGzvXJVP7mt57UvCzAowLz",
  "key30": "525x8PnZexWdAA3HkYE8BByZyZp4LEvtKW27AkoHyDeTEXjm23pRd1VTAAfJwpcqLRhHHP3KCSqfGQ1GWmvAAhia"
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
