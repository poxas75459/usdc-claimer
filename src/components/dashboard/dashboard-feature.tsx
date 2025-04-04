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
    "3HQZXBNAYFGHamg8c1jmoR5NVUR9xN4vbUD8pBNhVKsQ6K7647gPTBiaN87LasHKJHEQtSjoieo3eNgTiEMjxb2w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cjejmwnnmXFyKQnZtcfH8CD1DiQ9idrm8AkhYXqt7geL1QhLHG23E28D1eAVu2jvnANRHdo64wdwqRMsFqPvXME",
  "key1": "2ozW49Yd9ZSLMKfDWGuxuPKzPwd624ag2rHSGmJC12tXPUh9vfCJNGgZ4oCznFBgiQySiCRvu6gixKD5FEQJEQkd",
  "key2": "2LFTBzBaMLgrpk9Hoc4hfDFUjm2b4FZnFrVLkd4ETwC8RKBsSsEY2ubZG21wPaQUet1oNHqWXULJc5GnUZqJxkU",
  "key3": "61gGz8zvKMfK5sTNaQLmDTEuFUYFQ8KPnhvqiBbdmVgFxZm8qbdmj53ptMSRzCEF8fZMpd97CYWTXqYvuF4EFMVt",
  "key4": "4uRD1Kgirhgx8MADVCiWi6WoSwQZQ52VVTnckKwh9UXwAWok4XE64xLsheciYxX24Ffxxm3r8gvUHYdvPmPPopQf",
  "key5": "5m16kuzQoJpSKhWMuwcUfj5GqnkjsP1musHDgTKxapKTnChggdw33eZCJx3VBuukCfX7mDy6oSw3YF8xtCXqHJhq",
  "key6": "3ejzvVgatxC2Rc54izyUxrXf8xrLjGuC5VBaCiHNRTL6dKMj31zxoBgQ8nab9NJezNiwnNpFxxfNsnA3aaJEtUxY",
  "key7": "4kZMpeiQkJ4X5MpcWkbUUsNfdy2QMGEjHYAJfyBtr6DFp4pDyAJ98cKzafEmyug6dsRnjizeBnYqPXW9B3FWA4dk",
  "key8": "2S9QY1bzRqseWJpWcF16purnFymz4NeNao3hutt8rNLupm1hnyaEJemeFhxBHntNureTBxS9KX7vbKNnkiAngcKN",
  "key9": "4AGix2ReQRLEQuJWTNFt1vcj9iE6zDKAVK646ipqVAvYoX5t1XawQ8bLJtGDJ1E98oooAdjSbAmTrh7C1Q8ekL5n",
  "key10": "2uREaHVvdhpcqpRCvN8JRqeny5ArLnv9mxyXkofH5G8sZHMJq4Tk3McZAep3y6pR1Xx85gcsqxeweZVueMa2JJZ1",
  "key11": "3DV25yP1XRAE5hRcqBHdJZiGWzc9icy2DbPRjGwWwtNGugeaaZVn8zoi7qGYahADpXgRMpk6382rg1X7qYE9evkg",
  "key12": "5WyD8UqurFL6rgWsFVBFKVHuw8vAdwmH9uAQ8zXjzVKCKL6bUPyYLsFRYd9YXkwJxuDY5BjgvuZcnYTtedG7cBke",
  "key13": "2KxZxfrrVsMqfLHsc8HmFa8bnwi9okV2YzE2QRpBnSpg14x1w4t4rxK8azcB2Yxhnz5d1eBLu5i1uLyByL4MaJ4s",
  "key14": "4WyVefHP8so1wZpyVUfY9fS6pxpT3maq89tz1dZoRjBEPBhBzQ2ru61Jguo6MtowmtpfoV1g4itcZ7m8y2JAtct8",
  "key15": "3YnWpgffkrer8Snf6baq9SQzLqcy4vpzXrfeLV3boy24YCRUvF2U2izGsJKHrFk8UdH42x27s5VkUpwdfrzMSjmz",
  "key16": "2GrBUXgC5tryNo2KSBkNAwk6WYuNHtqbT3M267TK6XuxKi8HyCGLx9reqFvQqdMCG9ucbbZVmgMjGbd24TJigBX4",
  "key17": "TtPVeN1b37bCBkX4KqfLNZu6tMiXZ4ujnJ1dCrTe9D7zuzdXbkXLqmBvCmACq7TpPF3Fv5kk2h33A75g2T4gkhG",
  "key18": "59DSEKL9XW8ksRCzP5svo4oyW6RXR8Gsgkh4gu4CRDyPp4TupuWSJRCFTtsU9hdtomnatLzwnx3mL8V59kTRQupq",
  "key19": "Cfb4JAyN6uVm8y6RvLHnBZtaxo3o5EY3eNt4Zi8PginffDfsSNmtoBQaccC31LFAAzDTxCg1KoFqBcZY99mgBca",
  "key20": "42VKKyX8YZw9vHwJjbtQwAWMtFZejgs93L12uXXBEgcDH1nyUHWMsfoVZq1nrzDwJQHWMHEoP1PoYaTq5WsVtKNU",
  "key21": "2qG44cNzJnEDL2zRqvXTCytCGGGWvo6ohmxpH54a2Fz3iBRN7mp4CbAvTCD2p9ZMg3XHgNEqgvhGYWrBgtP9yt2G",
  "key22": "2o26uFZn13HAuvyqkDDrarJaGPWVKWYdmdAkC9bteuwYUaRACjwVEyLj8XuLrQZfzMFBq5AssEiBWj9MPMNZTHpA",
  "key23": "29Z7q1cNzt1Ygf9KaZPQf4bew3MqtpBSH8fZWM4mhDUB6C4BKPywDzbJxkVeGw8fWUEiBiSD7aUXXikRYRTXWJMZ",
  "key24": "45385vEgRBvfeU4AZTKwKmtqZf93LdUC594wyaV5RmUDGfdo25zDtVRy4VhNKjK6wpeFTdWzHEkJdwybzEQcQm3s",
  "key25": "VQRTxB3de32T1PJ2QDPW3dq6bmZBtd2Z4Y3GajorfgkmEDhnc8W4L5pgaENXj5rJ58MZaRWhEVpVwujBguPFUo9",
  "key26": "4hpj4fPjdLo2iHsmjWxbH1cfobs3rqbpUoACPSDqNbV8wYbmZXQQ94HSXjh5f4TMsp1cLqpYEf8xX1JT4X7w1QTU",
  "key27": "2kx5ARkyYiRaM6kUsHDK8HdkBnynWDdWp4svVtiN7pncyDsyPzW8zCoZ1BnDwXdvrLvgv63HbgBSa2ojDbEXTXMN",
  "key28": "HJMpFanDCw9tP1TcMajwPcSo7ReZYXsuWLvw3fXTVWvd8qnybKu9vZf2j9wZcZS5iZScoHKXkuMypxbUk7SrgeF",
  "key29": "5F2YA3QvjfQ7eZt4ze74nB1ebYiQPQgvqx7aRQQ7bbdg8Zu1TkBTEb2KXixPxFnXod1kNwMfP9zQZFaf15wcKKGP",
  "key30": "2F2ciMCgTRDhXq2zR8jDdxcJN6X7SZUNXfaFzL9ErgCnkqN3G8DThG8wnLcZspajPs9NGhKixQPXY8abkHJsNVg4",
  "key31": "5tyo4uNVFovctK7JbxQSB2Fab6AVfjYPH3sJmb5DnokGVzVTMz6AKuYYMtACpht5ZY9vGntrM3d7FNkuQPRdw4n3",
  "key32": "5PM1ogA2aX1WWKKfzGZvYaoQvhuhHJsmfR5mHWTVnuoiVS5QChSnoBrPeQcbm78QsLWo8c8nT6jTjcZJcBMhNA7G",
  "key33": "5ZDXzybbgRWpn2ogRLQEryTq9ZC9vgjG5ohFyTuwzVuA4eMXJYW5d2jc7u4qnvSA2CZ3xCnUF3U44fn8gF982uHm",
  "key34": "tiNVxV5BzRWvgWSbobpektjkAVfokYTwRWvZSv3Kznud9v8HgPqbz3Yb7YfL96fy5JMivpj6JShcBzVRofdtYaZ",
  "key35": "3RUi2Atyo2jPDuSHqfgh3GUEP6CRjfKz2cZubpAzMyLBUpP68qif26L8UAL9pNhcPqJwFs3BeyodEfg1UtC1ir8i",
  "key36": "2AeqMeiis6UwJn7LhkcMqwYJstUkD7mKHzLLgmBo2gBnMqwvvNjbBGg5mVrbzhTDtCLj36wZBUsF1WvhATmdK5RM",
  "key37": "VEN3NSnfMhqwymSNrC3eFRULhA2h9iDptEiNVJoEHod3zpZr53ZG5tpmn9u3kgUDBZKacw3jSvY1ZA1LFnUar8j",
  "key38": "36UWrVpGfk5dEKZLZtQRSA1iKb77KwgF5jywGxbiAoyWRtvecNxkU6wdqcmcessxyiDsEwnPsB2kcd8YTmj9iV35",
  "key39": "kxWuTG329oS4k9pY36iX2e62MviGEyZx1dUWTBG2NQ7mjCPrQf2rxhGPnUXTeVUD76btqoonEW6LPRNpofs6rWx",
  "key40": "43g9ABkSjuwwAMQCyGq9nZw3T2guMQdWVJEg3VL9PZzQf2EyLYNapu439d2SisMeWCB1VgvKgueLganuKB9pF6BK",
  "key41": "2n2nMKRWzbVzFshrVmxzNP2mqQKfSQ8b98JTSrFJsUohaSZfjH8824XTdAK36mjk1RPvBcnBbanCCD5RbWXXTY3T"
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
