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
    "iWPKoSxVLLgEJNfUYZaDYL89NR4KSdFLMYnh83Rs4o3WntT7yU5r3RhBWERLQFFS7PEtpYFqMVgjycNFYbwAPy7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DpAxgsuKTWeJBi47f7JFoGmnBpyFUz1kvTKBeLrqHogawdjtghsuZ7KafPQFWWyd9KEa2zAVuCgsQzqmd4sNJQX",
  "key1": "9PFCjx8Kttcfr9QdjTK8K2peLS9aRUsvu5qbnPFLrd4ixYAUdLAh6u7sFvk53RL95stvSJif1QPwL8Le7kFdnkW",
  "key2": "3fdR2hWQouSPvbJMLY2XyyjbFGqT3dnVL8mfQr8DJduSQBtojtwZirSBb7vP1REK1UQwpHFcd5mwApF1MwPgVmSt",
  "key3": "4s6vaSMg7h83G11QGkQBd42z1upuopiMdPY4oBeyHPpvHWhNoPdEtjoPo5upPEfrQcnjazwR3NDbQPSxdEhfpnYN",
  "key4": "4YusRnJmrUDioq3Ke86QbsXMeTZPm3UzMF4AQLfr8qZE8HhqjosLSv7J4vzhLfRtMXvKpZw5t5FHfz7cwk8aqqQP",
  "key5": "4MyCvfeWxrmFE1U8Y2pRSyF5ZfknqvtGGcCG2hRJSxMsdcGL8AG4scaepN7RgKB9rXysFbUKeVW8QmDQPAfRuRZQ",
  "key6": "2mXJK8jpeN9rgeHUMqKvuiakX7HrPbh6Qr1eqh2HgpEfiYdGBqxewrBZAJUqSHZcUK8ZKzzNXLNqKNB8uYWmu9QP",
  "key7": "5PzCFP5YUCJjmVd9ASonCQ5yypr932gbjKkmk6ppkFW853Yg8Rz14o2jxDTUzNTePxmCx2MYFXwg7ZGJfkfkBrBF",
  "key8": "3isFZAwbkFumTB15EJuKfCEgZpnYvtGGCafUTpRFbsW1Eudg1BpfUfpDd1PaJmLQhrbdC6ojnzwQF7hQy3Au1wRU",
  "key9": "3bCKPuLLmLEoR1auxqWue5EJyB7APHphJBCL9MWjxxemzfn3kyEqEidAMuurZtwdhtgW5vEBoxPeUxNB527FUiBR",
  "key10": "5qhsyiCkofSP7bTw5yjF5wYEGCMsGsRLLUCGhkjiddu5xREM4wK33AFVamHZmLSwF9hMKBi8B38UtGB6U5P1E1BJ",
  "key11": "KiMtQ1M7G9mDEdf5wfq92MXYUvz5ss51L2yBj5HoVtieWbtHe5XgNpTAnyw5Y6D35DZqmNBrGDMtYKZEeuvb9HD",
  "key12": "3YhF6GCefhe1BjfLLm6gUYnWRDgKeTXQ7WbPeZHzPKb6rPum1e1nwLeD97G6y6YdP2feNa7r6wwbhzcrTAXnUQ6L",
  "key13": "3MDZWhzUtX5Jwa4PJumabXJ2u36twFCMKThrkoLB4jPireXkKSJ7sJWp79zd33R4Ay7k6x6HadzKpbNhhmf9rs7a",
  "key14": "57FcCpFZ39UmDGC5UJ9aVW54Dh4qN7enRukA1CfRF5RnTHDgw85K7rjXsgvWh5MpHXf3ZooFNQuGP3n85eSNRwBA",
  "key15": "4U77RPACpV54nmdLsRw3gozknmyQd2PuBpW9wRcbReBejUMnimViBtNmyMxgNy8A6JVYpXELsHSgnXJc5aErej2q",
  "key16": "2on2XR1oHpCH6zTDjtdmx7BhojTHVPxLv3sut7UQ19Q4yMq6NHf1x6DXCFiSSB2k8rcTaALFvqw7pfa8m6hmrdor",
  "key17": "3JE5ffUG9eBjCtp8VPckhH8i3sGsxP3zMntrxHpebECD67cWhuUQm7pajmC6wHXJ7pYdDc5zjDUM9kAZATRj1JFf",
  "key18": "3myrm1NJchyvz53LWDQcGesN2wZq3cozswcdPQBPuFfWv7SmhL2BRwAc2GAUn96H5J8eEyWyc9MpdvvnJjZpYSbC",
  "key19": "5XpqCR2QpXw3HV9ikxtU2jiTL8WEN9neUiH8BGXmMqXdsxACdp1B5rDhQTx2P5eFptT8HNRqre1KVxNWz1yKaHrR",
  "key20": "4PxU7LTfmTZk5vLgiBPFKYJPv2Ws1gtFR9Nosx2s6JdCTioTfexmFmxama7PfnciHcQ72DBLpJoYgR5b8wGbPEoY",
  "key21": "4pJMk8o8LgdeXBawaW7cTmrum5V8HkpTy3BB2JyJAS98zwhqbio4KdoNBd9oY9YvysDvH38WVmmeuWCocANWcCT9",
  "key22": "3zxCw4PkaHKdYonifJZquHN1k7TLVRtXnw2N6iAfW4rigE3RbNkBHyCSKfZTRNpMW2GzKCj6VW8zWLneXejh1tb",
  "key23": "5h7fPuRSA4ftRq7cee6uMa9LhSU5e3DBxVeqaMseksePFC2nJYJDfGnufTqNNbfpRhbRPDTLH2ybZK5iesAtRKny",
  "key24": "5maUHWi1KQgA571s9mGGo4EKLgL8LyLqYVmtWqdjTHBrsjmLcW3YSNMkRq3vWwsyMZJ9HCFjwDYveVNN3uBorAPG",
  "key25": "5acREcRZj5yqLMz2CgJ1N3sFbzU6JQgahqAD6Z7ca1dbTxfxhipPDvd9cETTV3grKXmtRxsaBwSfG8hFbgt1ZAPz",
  "key26": "HzQrC6KGhK4u76KWa4HQNScHmEz46ZmjyJ8Pqou1kFWF9CpsazYu7PgEjgJE3As79LLvMcq7e9uaQ4zwxonFSEM",
  "key27": "4jzwsMGT99te3k38N6fPBFGmeoZbhBKpwkpwZGWkJo6zAxPaox9Lq4DbVFTk6N8pgSAfkF6QfPuCzNUva5SYpJJq",
  "key28": "4bTbNgXErY9QMmVgckgt1o5y4LY2C12WELKwFK6UNbYJu5FA2tW5vRGnP2D4oHfd9pE9kXV75NabnjYXBsmucJcK",
  "key29": "3dF1Eki266TUkxPG7SgXhLS1DKKW2eV8vW2PD9f3wzUUocu5K14hP62s9ipirf65i5sETA5PiCKP8JRNcfPcdDa8",
  "key30": "38LgMjXMns2UXKEcaC5EEGNZgF1ZYXkFwWVP6gKVMLjWuVcEvagt159JVbm5DmNWyBhUvKXbspxo66vrcwtTXDzv",
  "key31": "27xnwYhnMypptUhVvdLi2aPTWArhUYv8gCNHUSTGvzCbR8cw7erJHHtpz9ksy3XtRmGWyVQm11aLoYfkG9zPg4Rq",
  "key32": "3vqV38dVua527fYe1WqiXcmwKg3GTirUBHxZ5Ph2a9EABrBjDVqjXUp7YkL3LD8RYbxMC7BH1EbH1ktD6eKcSQFT"
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
