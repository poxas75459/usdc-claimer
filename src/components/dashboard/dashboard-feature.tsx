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
    "W6StodmgTXp3NjKVBWQEquhD8Qxzp4hVniQqdzhg9SyFkEHVb4YwSSodHoS5Ys7Nz6JUbDWBgkiHGAPe2UsWKGk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zRVkayXuCPow1xhd97d8zoZNEuMx14jDfqhnA5gfCENStvtfGee7fLhrmhu3PHkBitjQALDdc1KX8JWX21yJ97j",
  "key1": "5f9ASCP3142ei1xuLCerW3ynhBaqv8PKfMUXkAaVgkfpPrx47Eb6etGAnC5NHZEu3PyGbrTp7GMXz4SyqFFfzC7c",
  "key2": "2QKKnmfJGJ2jHMX7FHUKXHkWP2gPJgfPUwDg12RhP9MK8tTueEXdaK71eZ9CpvXBVtvbWHXPVvTYvupCRsvvS7dK",
  "key3": "oZgdWsQw21grFFBRiTtfTi49NeLjLEP3DkKKRWHqbZ4xcq7aNLN2gc3BiW5voo7xm98Qjwg6QA9z1K8qcVY9djg",
  "key4": "2xcbo597sg2JdSitLfk9ei4xkMYQwAiL2zogJijEi77n8z1ENowqWXQwVq4fGhVQuUKj9QsytbZ6nihq94bEXtVC",
  "key5": "59FPrQMmJQe9CKzjYPhH3yjdCWW9y688y8Gb69S543PndSS9wbEocti4QCkBXEEtQhgTmDsUiswyoud2VmzFweLE",
  "key6": "2JQwnh3CXNcu4fRAYTf7PZLLJCMUhAgvE3NFnYVstVf7MvhTfNKgkZa5SqaPG9ZBgPKdCo7vFqfxcRKY6XZU1xPr",
  "key7": "3jsUHaNs4jF3dC4yqrsy5sULaqkrxcyYR6iRYwiLFz2j9sLWGKqzGCAPvDbSBHyjp4bp1S4DWNCSBbcYAjw8yCRf",
  "key8": "2KanuNfBedx9KhjvjGSqESmJWPUEqwhg55TaGs69rwQRy8faYzNJtEbThpTfaZrFapSTJ3QU27eexnwLuL2f8siq",
  "key9": "RyfZW4yX5ndr6qqVKybzXztb4i4CfFiKYSXBkSPSHAgurX1EGxtU8B3bkX4EPwCJvGb7CsRyCQkMkDVSxUJb5hG",
  "key10": "49jLxQDu1wRFkSaB6ZmELe2eomtdWX1Eim8FtvdnxVRuGoGtz2DoNMZoCRgjxYGT9Xi8jWhFW2APWPx33XSbuqkT",
  "key11": "4pUnYcCUqegMAm5PerUW4zeGL1vn7y6CzmVqpNmRGA8KhTR3rR1CcFcwxSS2m1aJBBMxmi7osWhVex1xmBH3QR5Z",
  "key12": "2ujVtELHAjjUNLz8JeUEYmEBXYScdsaSW5iV2eN3qM3dhwohWqBAu4voMeYbxf5atSjJYVJGWmBR93TxH1CwaPwV",
  "key13": "2gdbfyTiNBoTvBwivkWNVWSpANY3dX7buaB8WTxpfRyWzDrQSkfCFk2RBeJP8tEEiwToWk7pN9WwPCjK3BdRiiLU",
  "key14": "4RrkLMbZRWMKYiMBWYDyeSaG1G2iQKZcMSqwM1XQPc1geEPCUDXULiFFe65par8K4DgSKtnjeyrpLGNnQNRMoSas",
  "key15": "4PxyDUdJsTVxLBkrkQJYg8UMvQBPo5qt6ERS5upzzj4qbjRDFbVeeZSDYmb55Jis864LaE7KL3suCreyxENHujtJ",
  "key16": "5N4BPXg86xdT2pK5nFHcYwynaxbVnS5tzN9szvScMaNauXqw3HsozcwGB5BHQ6u27fT7YzpgQ47TuqFeQxLCV8Am",
  "key17": "JBmv5hxcGQHQ4YdQyxXxDFKZryCNxyegLVDbWqcw2qTt3gvAj212mjeVGeRfyq5HVbuF66K77RABUDB8JcHFRXb",
  "key18": "PXqFxH3q5HtpEvRGFEE4mcg4LXvV6ug4KV8FWFsmwNDYTZwWX1sZPckftRJdn78cGXNwwmq8mR5GVMDVmJk8Dgi",
  "key19": "NHVoug3nzNXyBTFQtAgxfnmcKmi3vLd24ea46kKDNrca46gkjcWgtKJ1DeXnoiHyJavN8ESwo1gAFiLh15zvNbC",
  "key20": "5uuQ3vYigETjqsP9cLnEvZTPrbqJhrbjXSWti2qgC3DuZnp4pCR5iJpCJsKVZpwyE7DXNjNZR8ZvTcQ3mJVWzM8v",
  "key21": "RRvqJXg18EY9jSFSj5byH43sxRgKEaGP8vnrh6T1URqwucaKA8vkkd1Y1KvYmH1pdnJnQzFvMmEEpMjaF1Rukag",
  "key22": "eDg6ruf3HvbnKtrPHDLHTfed3sq2JgQc4mzTXjkRVCaksNyKE6rpeGA4Hkh9mvxxrigXKPtaSUsepH6tnEsBpJ6",
  "key23": "5ZpkTw7KMvpFYEXdx9kfCsH7V6mpA2d3VWqBiGdQvqgV8uXW1FqQoG8oxjo9cXbLztNRAUh8svaebFodKk1bSNsw",
  "key24": "3QVezKBzp44smHeQAVhDSjJFtQkR9fkiEmuH2QoJMewH2qWTy1Vv3UuMHV8bn9bHFXugq1Xe5BL5B9aW1cfmW5F8",
  "key25": "2sxjx9iSJSXzC3xcbQSrxRxWt629ogUp6sfSpbmhXvEUajEhLrwKLrzYX1dCT7uwc5FmrYGZCStHBUym5RvupfMD",
  "key26": "5pWVH7GtHzLXyDxar4J1gaqtrjZdrMjPdBRuQpfyygYQu7NDEcQuFgjztGQr7bVnQodPfZzb2hkrvC2u1nwd11mL"
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
