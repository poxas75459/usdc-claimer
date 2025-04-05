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
    "35zoeYTM3Wbt1zYgQCfZyHmgaZVA317icMqvEPHALNXUzv5uaYLRQSn3j8oDj2cyxLTLovT27QAUdsrboyKKtNgC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U9oQKwb3dGSXNHAZ6otrKN5BXZceEiVBMKJaRCCswQ4pcA71RfEqSnzBufCW71zbfhaCzWwVPUi29Je2FmH37W7",
  "key1": "4anXHShUWaSPopmT25WKshEYLLuJu96KaJSUQ5MS2jrgntvPEyySuyffeZZF2BJxuTdNLVpYQVnFnfwTQe9WsQap",
  "key2": "5JH2FFkvqJFQU2C6LDQKrumLvfrDYdGwg1d4st1qbbyK22g8pMQg3xeVNwjooZTwunwafB7QFj2jg3mWM7BFtjp1",
  "key3": "2rzJuHwX52aQ2B2LMTbVjSRxmTnTFJn24Yy9fG6JT4cNxkt9EDF39ud9bKLQgeZYgrpQAXzsYXHwohYAtfgea8tN",
  "key4": "4DwwnBRSqLD1MCmxLBuscf9jam4ho4RSaaUDmxfV5U3SAQFLF1sfTVfeShimdXgP8g1CukND368cz2huCEsApaxp",
  "key5": "4KAfb7Eo3FfGcDnTuG89VLTyuCivx8NLgB1VphHdhxSzxPBSWsmj399sgF2s5RBzjfeS1tuFkeuk8ax438ZtSiYb",
  "key6": "3Cwn68YuJhnKT6By6LcJyjYz58fhG4GeQc1hZd6bAZfQct3zJgTkeKJMZHZAzPyXzh9CNTTD52c8NMXcL1DsY6kg",
  "key7": "4FrfoHms7NNVtaiywcy5mrFJ8PoJCfzAPXumobVDfbkJhmDchjc6epGD65DWhVs7pTkbBAHdDTKFGVAFwq57W638",
  "key8": "3ybAfn6ugFk6sHVMin8N21fUHr4u7W4sipNJEJCxAJohGdsLHqmmYjCY2Tt1Z8CNihpsj2mR4zo8TKRPsidH424N",
  "key9": "z5iwvyo9BXDWJ7KneCPvrfaDVZe1MtEu21ucRu9eXWh4U3aC8EndLjBgVRDftGMWpwdTg1WGCyDggxAugSnmwTB",
  "key10": "pFACwYtKgvXp7TTGU7z84K9ApV16Tpv6nkWd71L2BjJ35aCYzyMY5JxTk8Y2Ae9Bsse3fy7Zhhp8RgdLGTfex1w",
  "key11": "24t6czNNmrAY9bRJtaME94vkarjsXmtn3Xrz5PnpTer5BzMcjzfb2gjqrnGATHop9xZKrqNg9wx2i9bn8biM2ycN",
  "key12": "LHDsrwaqWnX6Wj7QzYeC5Bp12F1yqDUcWvzgMoRZdsKyqm8vnkGWzCaBAX6pWa6y1pRdpQePDtquNgPQPFZMvXt",
  "key13": "4VX7152RKiEXVxEE8zdmPQHbMTbz9a5sVcoeAN6bdL4SMmY4zqdHpGHxWpyZSkwPYTNR4SnXDHnmMrscCLSSfNE9",
  "key14": "4RS9CECHtTw3e8oQd4QjVSZiRMUHVwqR7RCzZg8nB4k18FbZkrTJnS2snV1Y35S4QxkuUyJHG2aXKukfncRiYeft",
  "key15": "622kNSNcwpATL5f43LBJzr9bt5ufZMhHmxcJx8W6Csq4sQ9SmpJVXMzaEQsuuaRHoKFeYxkKumoYcTdr4jKbC8EN",
  "key16": "48TS5ie3j72jdc9Y7jfgRx81FgAeWfAoX9Gt1HaLZWBKRSefX9cyMPhZLJE5kqHFy7kRWi2CJ1WvxejymrNUb73c",
  "key17": "5KR9Edj88RsLDBAGdSKrqzB5z2EuNuHhhZwdg71Ckq8Lq9V8CCXyh69r3c685XQqPj5tZZkAjyGitqvANwK8AHDg",
  "key18": "2KvXw7mEfYT8j6qxH7N1PFkXdPKULP6Z64nUHeoiX4ExLSVsEtxsREuQ9454Csorbc59ctBS2Ekyb8ZrvnsJKRK2",
  "key19": "5nH5vfe88NGxSNWvNLMrtuUAXMVtyEf7LBDoZW38Jmtc7vwc4nuYmWEW119JaLDMMbjsezjW3hEeL6JdjeRQiYAN",
  "key20": "4edaKt3iJtfyahC4gyES7xr5dFYQs8KNExrKbCBz1QpLDwsgWxFb3Am5E6kaWDA4xVxWkoEMkpXai9WYD3sK8amq",
  "key21": "3rqLwu2bkJdiwpoYW53cMSycoGcWMNoVWYoyMuhr2oMEFAUro59265gcBu14dsrybuU8x2TQyKPaBmGuEeZVHpYt",
  "key22": "5TqMB3p1xPXJSmHgBPydnKS9VBi3Zfcr5TKApDxMMbhhVT7Kf4qYu6C1FhRduJwqMTAkPsqxwrRu1UeHx9ckadDN",
  "key23": "4QWEZ2jbqKJoRFYZRMcnRmRzHVtuYK1gqe5gDZtErQuqZX1PmntKctfYGtx3ToYHMiP5rt7rsu21XxyZFxUQyM19",
  "key24": "3BozVmq3LHbNHvPWS6QwxainN9xCNfkHAe8h9KbWT73bWu1E5JZ9tHMa1ybVNiuMFPhghTR4EKkY983UKGm74PyP",
  "key25": "3ixpZmNw4HbipLx6zzhd9tbfFsUCWcSYYkdw3AoNj9JG1AvvZ2RdUUtTuPLcmgCGgJkWSVMk6x4LuNpwfExGoz7C",
  "key26": "4cJBmL5ZVNhirFnm9Bv4M4ZAEJnegVmksD6BFnTmLxyNK6b3KUZPpzWUk4RpMudiE7c4ozBCavGXRFN6fzHAYapm",
  "key27": "2qqozCcLQEP8nyhhjL41KyHdWnf5L8LrTEEbBKkgWb8vV3Q68GXfwUgVhJ5zE3aWzKfq2sWkL9NLsuk2XRQACxtV",
  "key28": "33HcrA9tNUrXRC7BG5jveGdKjE3RWdBGV9Jt2SUbm7P8MnDu8qoztwUvCTdPCpdZpqSwwSXmxvptXN2esksdXFXU",
  "key29": "3SmGeJYLqHwKXUXCHMbnezX5UfTepWirPdT5xo8Wsa4n9s2DJgUxmRcf34Y6zfxZbV5D4hhjqwcLw4mv91EV46rD",
  "key30": "5cyMM8J3F5pEa5Kw9ypMFJFVzHck1bB4zkeBig39h5qNfLGYyURa2eeMt5DqkQZ3xPPkQN9MxyCTf2dB5sqqUr3C",
  "key31": "cJniz9r5eD9wn1xCbvxYiQhZAPXxNbFW3SUbzAmmhoqevj9CkZHiYQuuKgk1wTUpeymAkrQTmPDMZUjAWjMhuWF",
  "key32": "2LygWHfJ8wjSWjWdpqzjfovoiMHXJaEwCEsTATw9ecwEC9pFrVstpaTZDVM7jiDYwxPrGxb6vYPQwpmU85fuq9aV",
  "key33": "48MUW95xNgStqkxbTnmFSvjRxN6prNMEU4ijHV851hBiK48JEabeGU7dVh43AEy6dDQwv7oYDYpGY8rLFrAc1GMd",
  "key34": "Lm2RmChVjgXS8ErGbqHdHUeV3m8yzbX8nVYzJHsXu9LTaUmaHwK2G6jW7K18tfV6PjcugnARvqQCXVaLE9MpxFo"
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
