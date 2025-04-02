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
    "3EAtFxR6orwfLZbjuBA77mGZfBB3pcEp9RrFWbDaW9Hn6qDKB8aDRGHhQD2tuzmMPGVb3KJFv7ePCVUGcYWux2i8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zyRMZF9cv3EqL6mhMz1xdrn3PQEQ361d71nwEuaPhKikdq5K1YmWHTVa6v8M1nXZ5dJNp8jEvT4wVBn9DBnMLFv",
  "key1": "2PxR8z3qbhgGVjpYu7p8ZNZQfXi8zQehtTdcZKqYUUNHcDKL2GYuCXoCC8JjvHimfYxeY9dwbQeT47gKWo9u1iyC",
  "key2": "3w8ES2zGBL7ByGJuQugYxreUZMFtQS58ksgqCR8o6u8W4uE5Z9DXEHyUVUa9whD1Fs6AZRT1fmiwqCBnuFbjR8Zx",
  "key3": "3iNoPe1ghG5wnDGGUN2hqBEkE7XB1YLkXuEukR2RAe46ovQLWXGgF8ywCG2zUoCgXAU5MQ1LjKMPTK4tFTFgn9vM",
  "key4": "2AqfKmSMxwGXRzuT5ASTXD1PdLcaTXPKS2PhmyLBo1KkNazifwGWALzN54DgFGQD8SsXErUzU77G6UrhrQCcik9u",
  "key5": "2FPjbq4Y34pAsmkuZSgQoZUS6sSevMbkZoom8ov17Kjs8NE6R63PMAu5KTvbPnW4bNir8yz9SVBWncmJ2gxUaUAT",
  "key6": "2q1qEGPRebgk31YuEw54w49tx9dYqRaERGdW9sQFtZMfh4FZnpWQNenH25nAs8AcBf4hdrG3cG7Z98U9kgYGrtjN",
  "key7": "2a9sNA86vrNfKeC99GHmKC2cpjWjrepdPXcvDQ3ZDYMQ8u9jmssSHaq3Feu8ayAqDq4sDQZnzpstQKr9ECGVdURa",
  "key8": "2E4C2mcreoMxNkWwoJogwwU6yJd65TPcLKxwumbYnKZh1r1r4PdZnSiGiCfAFoNPhrnpGc9UzGdyZu4SM6uNmN9V",
  "key9": "21BjyL8dyqZi7BhQGW2jrbG3gfZzfo2MrZXAvQ1iGkHeNNipzHwxQ6aqH4FQb8BdK28hK4Czruhfz98LgwTxfHPP",
  "key10": "3MYeQzQ7iVw6csuVdDU2jatXQK6xjFLSATUNWBAHjK3bzPSXE5sojLh2ZY72FpmRctVTEpgfNxYBX5KVxd7gFy5A",
  "key11": "4KEcyXynDa12BXGJ2HJwpbXhaAgWMqbZpm2KyeonEge1kNTC4ry1cq6M3AKsfBVw2hC7zbLgrX5xyN9HKh4MwiEo",
  "key12": "2UCCrgGBqxM1khLJg4PbT2L3NafcAvbp8aRpBRm5yJ3C3KFu844kqptpczZcR1jmKi85wX7Rd2ovt8AXKxHyfz2P",
  "key13": "2CxaqSvFK6d7hTZHpGASve25GArA7zERJwwC6XNeZZpBWCLFV5GRYjWL2WAXZaqoVC8cUaWzPqADqHzWMdsZadZD",
  "key14": "4nrpWtV2WrTf6WsSUnWJ4Lj4C8eakeBxW3ACLyepGbgDN4dsA13yybWK9WLV8SQdES9GjyH6rYug16Xmcvk5LUeP",
  "key15": "3fevdYgCmL3UFVCYpe5DkHNeio3BQKB3xzEoD23BBj7wiGcsE2TxVqVTjEWVyyHquSboQwn6TbuAXBeSh3cLtcBd",
  "key16": "3xoWsuL39DdPGED9NLpgKcWByLaxRsp1Vqi8fVevCjv83aj7tWcdNzvTR4hFdVDq62sVQCzHj5NcWyDKEGFNf7dT",
  "key17": "4h1K9UURz8kRFhxFFSJ26QKTUgA95tPJPWNbmCZqHzyrB92JxWsh4otwBxRRXHcb2jBr93JJ91WcSv6gQfb5J4xF",
  "key18": "4U1sBbdtyvFj4YicwpxNcXZLRc3wXoERXLSCne3TuyfgtRvcGAMCP9nWvPkK3JKjgGa2vuJdKaoJAYprFPfJEsak",
  "key19": "xMTLF8kdBAMZdJTjnuEhRdASnpznBnnpg9SmjF7YUEeNVjZUJ2jFPuV7EMiRxrHGqguVEkt9swHZEUjgdHvGsgQ",
  "key20": "35GvSaynHVb4ZmsSfwXMrdE16pXvBvfpo3Y2hyY2xSgqxxVux199eUJX2KYNF1EMS9hdvwuPSZ3HTYtz5Jjh5Vur",
  "key21": "27VU71vPPwRKEAcLau1FFfseXjK2tF4VCXMUrXt7MZDe7SDbgt74jv5Zp3Afxd6tvLrneH87rBtM3iPR1iMavcHw",
  "key22": "5HSz84EgsrScGF3daP48aNJbTEVpTCScPnLXi623qLQgHAJEUdsBf4a8Y1Hxej8MhGh2N9cLK7Wwm4GkSThCJ7kt",
  "key23": "65F92AxrVxCxbqVvMftmH9JseFRfgTPeCERYm6Yeo8Uzix6KcxJjrT9mMKsQDPwsXXgHxZyQSmAxdy1vyTjqanbV",
  "key24": "2RaGn1MwyqfJgeUiPBCDyVKcdF5QHh7ZnQ5CWfAdi5edadmnbPd95DvH1MD7NCpHJMZh8reFf8eYqXvcY2TFLD2d",
  "key25": "5YeFEwr6D58U5BJU5qn32dE1a97LaCgQLiHQMZm84VbS9eGLKEwrsSL4fyGCCAyMgSt9g24sE1naUScvNgr1nVvW",
  "key26": "4wK3sxZtEFauZZYoxSU7jqc78aEHTfrN6jh4FVhaH2WFPGotB9v394kjNgR7H79iGUUVhiJPDAo1jaHcEEXoucX7",
  "key27": "3Nxa9KzUBE1M4NpwqswgDuWAZcLZ9RSEMGim8hi9tGVLMUPsGcvtcHttzc5VpYryXfTVhdzAJqzp8WEg3qzxhvot",
  "key28": "5Zgumuc1PFGbf4KQnk19mHEP1KrDMCxDM6ksvYrVVjsqX9Pq8qEgvSVFaasSAw9ANAY7paf56vcy66EvzeVehBN4",
  "key29": "3gAADpy8hnGoHR8G7uMdL7K4ESeBK7wMtv4a1LqKSLd7RcpGEXRAgKNZ16esyJnxiQhnAvKyGwCEXCMZa4RxJ7va",
  "key30": "5E1MtkrmQ8fADJUjorwb8P8cwCshhYA9QPBKnxdGDFF2qVsUmSMLN52A2Y7thk2LnMNmXLGpvTrcawUj6JKBNHxC",
  "key31": "5r1Kz3skU2RNHwrhXQ73Bb3PiBNrJFVRrtEf8ZKbJJ6RR44wAxJGWZqQXkT6auSeKyFoeLa1nmaZtZeFAWooQjEz",
  "key32": "5ChybznJfZKP8PDSCwuHo8ssBL9wXnLpqTkqdYK5ZRQjDxmpQahwwXCGUG1wXPfr6WLKgXdQBkjp4Wp1wNuZKEMV",
  "key33": "2uiPHL35YbyoeSCQSpVTueuF7uYi1sqJZP1i7K419ahwgnk4kJFYmUUtYnxSwX25gpwJxLLXhdFPty91yyb5f4mL",
  "key34": "45b5TPQ8CCzbZz6MuZUMCvNVYLyHapdsTmMartokc9R2vK64jhH8mtRquvghVN4gXL59nmTfwoydVavgUdkMnjyN",
  "key35": "Nfy8smmoYnHPsvM4XbUDb9cGhHJzi5nwsW989owi4Agq1kMEyyds2LwSPjN8fo1PBGPmsDpxAv66h1hUMNKcTfC",
  "key36": "2h7dN4KNsMPAcaE1jrVJYybNJrBQqhKModPosm5zPbpVV1e3PBxyTUjJSWJhwEGp2HPbknVAJbLE7BKMp1dRHGYu",
  "key37": "4MraSjiRhe1bYbJa3br9btvWD2A3prFDgGa5CcF7RtD9LztabCmkCSKzqiDoWHDAj6Bmy9BpJKmQyxM6p3rBiQea"
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
