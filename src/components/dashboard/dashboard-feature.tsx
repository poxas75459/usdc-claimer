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
    "4vqTd5ekKNyh2E51Gs5hDevZ4xyVjd3EoqXnxNRyPkMdME9AT4hGKQN2eMBTMKqXtP87ZiAFX7SPNEgotEYbf7cV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JZQZDM1mj9ZCY1WETfY6DHUJ3mYbRq9WsVepJP4BMz99jnNJ18wrVcgcesUmAXis3nAEmkF1fY5swzwoJVubHEp",
  "key1": "4iHqXLrK9NxSiHefaFAqZxCp3nh1bNWbZNC93QcSymNASHr6gyy5jfvHReWN3nUm6NimEvmdVRdq8bovRzroWH2W",
  "key2": "3RCtu8JTXZ1yWcaUfpnxhUR7tA5TfujyszgdPcNR4fYw8BT3gLJDUNamWbSU8XVkiChaaxEis978kLQ838EUnxiE",
  "key3": "53jhViXCEef3syVyJ3WAx5eVKcy4CNKP3mUS1znebEsthmXf6v76oz5P7YSbRvQPN7a8dVPSqrgn6wDF2HQ6Hfv5",
  "key4": "5LeZJZUjc7bzNyDnk8CJ8kFWnwDY157Gqhd4EEnLvCHnoZU3Z51S7RpQ5U1DXu29UJKZUCPS9cbN72r5a3GSCk4g",
  "key5": "v2B67W98m4vW6bxFQSZhG3EGeahhiswGzZaABvZV1yNnqo9HJgRJGDHMC8VvKw9wSY8XLgun1ToKuWxQ4iJCqJ1",
  "key6": "2EtRbNLJp5Dvr4B9JDmywdKMFzc6r9yXGLR1GeyQUziP9yCi2zUsEc2y4FcfhCeFsWoABQa2a1dg94gDyZ2cppgr",
  "key7": "3RLmnZ9PhTLFSmWKpuW6PAxbbq5CJFi2KkpPsW5xjvdk5uQ6K1v6eorHeoPv1yWwUUFjxkgnpf2AhYAcBdxKks9k",
  "key8": "1Pzz77D32ZULKwmUTPiHt4YgkUe9Ua9WApEkb6SYnq9iCyMQvfLF9VsKiHHves2Jxu7Xk2QrDcS6i5krmZEEjsL",
  "key9": "eRZ6wggaUA8UQU3J8x6NwfNs5A6nJMcKq8Yd517qD3RAqzJhnoQbYMbcuHvPpv4Asx1i5nGzR4uAEDSsepHvhxC",
  "key10": "3aCub4AuXQAyiiU8kwNkW3NKYgvkrELiK5tRHTYJsj45trxsQDZMKZF3Mv3LZXiqRJQSYP6toZXMcCBVZgMq92SJ",
  "key11": "44eL2eT4nkNWskopeTvSLj1bV55n4cZXsUN4ibYSCRnmyunmRMQgpv4iunyoDZCt1MFB6p24vP38NKkwupoPwiFL",
  "key12": "24nbDLedtc7jzju4v4jLpuz2W1N7gZE6p5Q7V2XWYan9oMRYqSBP9YhvRnRUamdRG2wDfW9qL9DJDQ6UgxBEfDtv",
  "key13": "4y1HY9RRDm6w4fHRzTuDL5RPEHn43yq98xTxbJDUqmaEG66GGAb4scTJNfCMBQfdGn1MygKVFxu6sbaBgCaidNRe",
  "key14": "ozbqYzcagx88pbU2KrCSP8TR6jwxai5xfJ2RQAX9BGAfB18vgw6D3Vq8xAvWcazG6V5sNLYfLp3S84J6LyZjNhL",
  "key15": "5pUrEyhQLjZDsJkHdNtsgRGtfRLsrNiQicvm7pVbNo7u7bUugF9TWtbEVBnsx8dbUtm6u9pPxKzamgjEFoyJq2wE",
  "key16": "4NctEfxZCLKiN6qeT4hqtraeYqoEkaPZ6qTiTaYraUbj65rH2skn8vucdeU5KhRVkS1AtVVqbmh5bwKcfFkgtAxm",
  "key17": "mCwZpXTsyJiyKav8wKZiJ8R6Hp3QmniMCDmFr32wChj1STMWpVUZBYCswd6DcHLEsZem3vimhCbdPq8dTPCNFsg",
  "key18": "5xc4eHsneqSXvna83TFUGMnpHfkYWHfZkKSt5kW2tfNHSJGL1wUjvoY1eYkMaKWKKDu4Er2ZAjKjqvUhahPVQjsS",
  "key19": "DCfV53skv1MTcWmp2md7tdEXdQGQ3pjjKco88BFKH9nLjJ9NyJsH6FHTSvgYcx7cYj2E99G9rz9cBPUdK71Wkrz",
  "key20": "4dsy4fVncvp8ZKnqVGwfJSnhUR3VgXdcz5aUEVGJZvqXrQ9uK8h6fby8b4scxkqLQ5aTjL4qo4BRQsc36H242bcW",
  "key21": "4cfacHyBX6yNM3tU5muFsyD9tBBSrv3Td4qaSxFnacgBMe34mVqTimbiKA6qgFMx6NhAD53bWnz32ppLZa4LUPTF",
  "key22": "2Cve7tVgSyYvLb7nq419BjqLp1oEVZwpsqR4HomfqsRYrK4zuEPZZsX9QqjqyDWEdMoViWVocmBN548CiLJE9uAF",
  "key23": "bQTaGxavJyEvDJTeVoqDNTUk11Gr9K1kfuFGzTH5fhDwqC4qZQFzyYMgisU8AwuDP8LLG1VFzXFbN62LbZf5SwX",
  "key24": "2G9X9twhogCFDri9bQG2r6NKKG1odARocyGGvYkZfs9L2reUbsQFnMKrFmA7eZ8H6zK4wSBWi8ckAK2N6KjcBeCq",
  "key25": "45FWZXVgYL92RyWhXS77FDAPxzPAqWKfWuSJgGYRVdcRUou6hEYSBN3H9eHBsYryKV4oU8iFGD1uhtsaeSVy6cVB",
  "key26": "2fT6innN2UveC9bgAsbWmkMXkLdGiMKHtcjkDLB85dtw1NfEJ12egY6E2Z2UGP24b6AUAhqD8p3nR4G94CvntJ4T",
  "key27": "3uwqhDXJmZsoCuC7T2su8PJVSqMBtzbMWMr5nXjESjPNFWC5bAYRpie2DqSmMEqADYkaFWvvceq9vByAbUwHp5cF",
  "key28": "25rKygCQVnRS8srxVvnkqyAu8abBohAZay5vsMUnJXv1HtsaNu75NMhv81pAMvuzdhHiTXAke7nYoz5FWhwGaCSk",
  "key29": "JHgNoajqi1GuBo1xZXTTMd3AqDttu1DSQmtsjqHZzrhuAhPp36TQrpp8PjFFKJ9YoGDodsMrksJevtGzCF74DuD",
  "key30": "22pUeKEBTptFZcLMqcCsCW7eTHKSHWsGYc14vUV641qpkSc4qC7F9vLHgSz3qqD1Px6Mt1GE1u76YzND1KSPcjQa",
  "key31": "5bX11wMKSBxcHy97oV5CXxK1VtYPvbHSE6tSNFyDbeurGfEh5jRo31jNfbqrhh5JzXNzjJ2j5sD6VMLcdJmzG9EZ",
  "key32": "2pdv8Cb3tmUcgeDp2ncE4yQ953Uh2vCbEeak7RJY2zByTG6bTfun27UbSSejPxUSfbRnAdeSHhmzXrW1YfpWp2eV",
  "key33": "6451M5CTxKtSPxU6iauxaDPQ1T7hRFSV2noZ5fFLb51BAHJVV8qZfoXT9KWu25WbM9YSQisnzAs7TxCYsgi537PS",
  "key34": "eMggYCGEhE7ZiBZGNqCYfCXcsdPK5e2sp8fckXm1F4C8tpCgGaUxBscro1vQjeenkcgjTr9fvG9T1eUi3RXEjNM",
  "key35": "61S71hZaNW7bQsVjKUFQYB9WoqpQKuSuDCEcyiJPCGs8yDyPcN7gZkDUDKvzsrgdFNY1yM9FwDfJLk11PdXyHVqL",
  "key36": "xhZBqdsYNyegsiwEcjqtgzhVFZcSV57MMKgJ7daEPZTCT1hDQobAbzfM1CoptqNn9adGnX9hAEQGgUCKinRjpss",
  "key37": "3Z6rRj15AMi47SG4sfqknfzLv8RAoZiJdnE383K67Q8iATP2E56gLLkwoBTE4CY9Kc9qPKsAEa9Via1N25qdyXoj",
  "key38": "5wp8trEzHz4GJpMMYjnut6QJSPmzsGqGR4WUHDWSudaCkQwVd5MmHFZ5LJqbWehEogHMWUe9tkWBD7epco97o3D6",
  "key39": "3nVHGkUhwX6KrWt3NntC1UFtRRGBzKCnsFtUY2FUTHEyBqhLg1x25nX8JXBbVyadtcz2HXk4NEtXzY57zF9AJR42",
  "key40": "61rWy8PxZysRMMJ6XUf2xjZQherPchbXQdHgZGTRD8Nq5FkiFTEu9ALcB3r4pijiVwHSDpc7oZFVPrGGRXEgjUjd",
  "key41": "bKpyY19a9v9iGArUSFPTDsf2UfLM9YLXWibLz4cyiZTscrgnzsyqHqPJpbYtnYxH9W2GrzTrQp4SvZcHRQeFnxL"
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
