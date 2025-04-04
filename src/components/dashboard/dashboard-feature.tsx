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
    "5DL6rZbihXYB3LpF1KwxXq3BjZxMdBBt1r7Z1kERWLdCoA1z6eTBHRU1UrY5MC3ZVayNMH9J82UrdQu69z9DfHLH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WHg1F5gUotXd17ZFXte4B5nfibK7Bjh9KnVq7pH7WLSRLAPQZjJHT4NfnLV8moXd7st4XzWxbm7ms1X8Fiey7Ef",
  "key1": "61TdwrJ5LV249rBtwoE8wq4Hx7Tqeo4Do1KSHG6Ljh1Sq7PyWvSGSupTUyAFJ3AnWJ7gK1NVTSASTiyByKHWcmZw",
  "key2": "AoW9cy9P1itQWu9VugckQTCg8SQvQqRNSVw8mqwsQ97Nn7EubBE8tnUCtefxTfUhmZoK1ZPkWWAh1Apw6ok32fq",
  "key3": "4TSKKtPuWvsJc5jG6hiVLnoNCyHqSuYDKR7Tda8cL8E19PGm3Y2zexFWBGHbwk6KSJtcwDd1TtMU2X7h1qQ7vG5c",
  "key4": "WthyVMSASyGyWkCmGMczFTeAAivhfskCesRVwt1s3pecPsA8Dz1DaoJ4jjFsJTGVsEBqBtqve4NznqpdBRcC5To",
  "key5": "UD1igiAvwNSXH5x3sSiCm4mGXnQi9aEhTa9w8FBg73rdvz7AWq6jqKr1h8LC3JHt8k23gXUCj72kGkK4MvzccpA",
  "key6": "2xDvEabb75nmXE8NLTCkf1P8UMnYygffAga3cicpHFoUQ62Vo557wnvuvS7SJgmXVaP8KVA7f8z1yEJwFTcJBoxg",
  "key7": "3cuY212TPRxts8mdcszdKwV78M8hnt9fa3FN7AJTspQe8N79mWLFeNtmNX32q3X9g3KVccWfNRcR98jELEspafSp",
  "key8": "2CXymZCU3T6JxdsWdcreHgf1yghPJxrvjbGXomEf6JC2dYBL3j8CSSxNE36R2P2ARumYjgYJgyp61kJV4jd7uv8U",
  "key9": "5BdhWG6rebm9bNfmk3Hb5qctVfujPBXLquhSZcX3rbG6kRPTmDqDvMSmj39GRKPRvNf3fuJMB7L3g8fFtnGnKQcq",
  "key10": "3TJqvWW61iWMo7CKxtpm3RLF8mi4uxMgJR5JSeDLzMRb11thfPFeSrdDhzH29WKyRUxPp15jkxbATGtg5N5G7oRB",
  "key11": "5otBzSdbHdEd1tidGh1cydCHbxZdRSDfkrLMPWz66y9A1p5XW372eGZpXrLHbRHc3ToGcN3Pt6gignYWg8iqZnjj",
  "key12": "5exy5pzXwP7ZiRMskdbk7SYdSN76sFkU8HgSx4u67gNLHmbXcRLRXxi2M55NnQFUJLwBphBUvJ8VMs5qExTTgfSi",
  "key13": "3CPmQbVgjxgUhH3dqc3YU7x4dijrfNTAHfjaCsb8LKeFjMqguA3H524uBJcK8xr6DqjquviNRDBUN4qqY2DQRLS1",
  "key14": "48EcJjr4hGJhjPH2Bon4LmLDYAEQBZbGQewhK2Cy4xQqCeVj3TP7NsBB8RofWwXAGSXDJbTmKkV2Dvp1ht1YJW2P",
  "key15": "31Lrp2LdqCwjtCy8MtpcghyS3CrzYkbHpQjafykyZS7126f8vh37Z9fHqYZ2399Vvr29ujiqgs2nfhn18ikXt36Z",
  "key16": "25Xiz1ZAmVK1Zd2sXTrJciHiidCA28DBXrqZryJNAP5rga5GBg7wY4cAS13EaTiWr7NbAKTRfeaPFi4EZ2QZekTz",
  "key17": "npDiXiWtFuJwfiptspDdGFfbtza37nivM7kuvsZT2YDxEV92PFUefAeKgsG45c3ouHurgE7G1BgB6dS25DYKvgC",
  "key18": "63CfWi7bUdRu7P8re5KkGqKAJDk4gS3ixWgiQ2xsmAo3MrbpnjRUXCeFS5SzkDWMJ9EEF6rqxUQ2QyswbkpiztJc",
  "key19": "2F729aYaeV9xY1p7WvmLbD1HBAjcpPxKxJcySRz7d91y8jSthCnGPg85CVekdBqsWMbQYPcAUv6Q4cgb9hNVGJFy",
  "key20": "5id8wx8HWkUYBcorWSUUWgmLYQTyc5Ns1QWFMrZm6gvTE1ZNc4iNEV77374eEkWhZ6ykQx25rtGkaK7j3iPa1FWZ",
  "key21": "28gpbowprYaHiSfPkpjZxitbh52WyVFCiyHi59pZRVfYzuqysJG7FyhoKUmukmSqiPf3hkSt95jcuWPymw4WHbtr",
  "key22": "mt5fdyAw4ijdQX3CDoW2i4V4mzQrzMBPwDtZN2dHWm9v1MHbX2fJPhWPUp8pDu6m9XNeLMceB6CNMy9Wah8vsYb",
  "key23": "4FiDV6jX3Q7hsC4hsBpHWAwYxGu7YYmsQFboKxhrZ1FdELseYK9sbi8wmXTrRhHhJb7kPdTgfTQh3gsdJKkAQErz",
  "key24": "Mkp5v9AgNfMXBD4p3AyPd4R5XshmaquwnRz8XmKZMqHj1MdBiDvr8pEL99ATUpuVjvPhRmKodYocL6x8z41dL8U",
  "key25": "2zCRebvprPknKKyWX7mtEuEUQCeKhj3ybHitZNt6uMZSk4ymCpZMLXYrQWcuHCGeznGm67Er2NpDcubwPup5c1wQ",
  "key26": "52cs1pe8KnwrBuW2LG7u6tRQLhRAwSViSyDC7u1kxjxiq55SYf1Bf1eniaMSL1NNszob6jLnHxjE72kDwopuf1ac",
  "key27": "2xFeYamDaoUe3rsYXnidi8Jbyiv3sgoquJ4kjxqJVfYqfrmEsi841w7YvE5GnhTYjSuTU5snKxheKVEmKoPfXZsH",
  "key28": "Waavy4GLLdTvacHxGSGkkDu9Tp8GuY6yPv1RQoyLt1wCPT4DzAE2KM5pfnNS68AcXx2cWj8UWT39RnFLnH3cEsB",
  "key29": "624EkoPaXP5UYihHtk4zFFBxr7xa1otSyo2nexpQQ4Fmw1BLbqEGSxRF3xN7GqVJvFqZ1juzdspXeHwz2EHKbyxc",
  "key30": "TcQYaVZXYfgpajbr7iMeXD3yRz5EdWZd6LT3sJteudqd53DGXFtMstUcFkPRVoa3Dq3ENwsRY7A2ATiH8TAA9sU"
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
