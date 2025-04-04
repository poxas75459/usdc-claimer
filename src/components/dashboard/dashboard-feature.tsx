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
    "59m2RWgPzuF1JfAUnPTA9pWGMyWNnYHHw68RAJFzEQW2hfQ8zT3RnwQEwyxyZcdjKUTQkhXukvyTxTvt8i5duqj4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PazmUPL7rCyg17kACDPv1y2w7n1jiMnm9gwaHgbnmraxqaRratwffq1uzs9vvvn7JMWT6YVwAApAw1qkTUBAGVY",
  "key1": "4d4NRLB1Qd6DtXMdjnfskvUfVNxJni14f1q6BGRHG9d328s48EN1wRENVpQuzHAUL4t9BkNhuYYbBLTsvnKE33kR",
  "key2": "2327pWD5Z5iZBo5ch6BJRaLz62XHGs81f7LPQaPVsk7RqcnTQAQStusj8wH9iWq8Bku4UBNELcs4Kd2wgsY2jGGR",
  "key3": "475AVjwQN2hRzDcbStVdkFoYzNKWL2RdEkqt13fgtCaPQ5CTwDiMAj9SPHskzbwbDSnTxjnn7X15qevUjHJ253xA",
  "key4": "2p4gRCVVnCaxyz5jfh44nBPVjCyhqd8oRsgrQmqQoeLDDwvmbq3FjKjDxozWnGYQHJnXQt7ZYuXQFzFsB1hFA8MV",
  "key5": "57wuAPcjK2k4ELhhS68TtqXbyGtXPpwMZgNaXhez2SMgzr2irEmbzq3d7As56d9KwnfKr4SBZsajyPosVkvixMEJ",
  "key6": "6767caLJqweRUqo7VsCRwAzt94eYWz7kzN2P7y1uQkvGnjqz39h4kYn2QFdXwQfLDtDLhZDgakErf25RvNcT77TY",
  "key7": "4i5C8fkHz3moE2dYsjhwifwSE7EVbuU5d3syBNB64SJLz7HQNVw33fZ62eoxV2R5A4gJj4c9JdvST4KewVDxAESh",
  "key8": "3hpB1kX1NSmFHhDVRVQFysoHiHxzqcQwLDrPkf1Y73YKVfxSZbq9rF865oTn9pshLnmA5PrrQkTkJ8WisJYDTKpN",
  "key9": "3y7QwdzyHwqZa5MzFDVYkH5foRTfTANYtPzuF2JuWc8H9JXA9AJagGKHB7YtJ8pyYxN7NuF4e6NgtS3MmMxRq797",
  "key10": "41h8QdXRPgehxMdX5x6hypAfRcaLjih6D2wHzYDkZK6FTqTMcSeT3WFTdTWo1SpfEqPBRXZmkk4NRzCmbyXBnHMF",
  "key11": "32zAJZXvSS2Q4UvgmBcBrRRC1PpTpkrUQbPKCz9QNmxutQmeBkDhsWm7EhTTAnsLcioCinMzA9p2nxJdb9EvJSyn",
  "key12": "58WsCappXvr1Pw8XGBPHHizfNjSaVRKdoxDLSJmThyztY1aJo1Hik8QbopQCUujQACtj3BFqZV117sb2p3dm6xqS",
  "key13": "2k4RygqhCWtnMLYRVS2pUj4Efw1QbLGoythVqqv84J9zZwEn4JprdrtgwQC6LHgPeVEPxf5V4RNfPLd8w3j56KyH",
  "key14": "Ak5ysW8xLryegCukfDALCdyQWkG9fft3zqiof3nmKmJahQN5Cj2jQtjkiWF3pjmTfizZ2PpPhWRownjq7CJ5dEg",
  "key15": "2VhvfsBhH48D8FMxiEpTjSwB3FdjPNE5GkBviotPNsNqu2xqz8LjWRGe1FNaWhhUvVFmJLumLabiAzvUZKA4R332",
  "key16": "4hafqaXfJbpfeD9ib4bHk28JKFEcWgbMDx5xpaamkCsXbSnZFoQ2AyJDYfh97MjZeHeT4ksVgbxrwuv3VpWcLzLF",
  "key17": "3qnrJCDmbXUacxbxgroz4FvZ7chQPVSEzs4vgkaR8AxjjdAR8mGFF3fZq7EoNdA8kdKPzv7R1gp3N2HB9HTvop4w",
  "key18": "28FGoG6j6FkoGj9TDvXyArgL5b4e561BEthFENYqi3q3M4FjAvjYJ9ni1S7a94CTky2VBejzYd3YkUoecGC8dPY2",
  "key19": "4qmR5rGWKZL8cXKGycTzKNRgX27jiGcb8rnuoTAFSaQjiN3QEs583JNL8Sh9CcX5HQdJdJR5HViTLwuiBHxkYTSt",
  "key20": "5FYuLLv7i15qEmHNF2yyewBm5KjoeiT1Ms8L7xCJkCf28wb4MYoKQVcgtj96PzBqVG8NQ8TS7b6iUtyBTMNxFAZP",
  "key21": "58uprLM2LuaU6EzDGqGD8bRJdoCTrJBacmTZM5cBp7SEZfqabZKFtSeXtLDYTMhkfUk5qhqG2KwpccwY8xKWHNkS",
  "key22": "2VhNWU4BTKD1NEDGnhXUT8X6XoSJ3kY4bdMVpukgGTJhqgzmgJ6VSTfWbcyH3YG5GUmKsq1uPsqRnzfdHmU5bYpQ",
  "key23": "49tn9bqUzRSDfvDoWNwSjVechWTeJTkxYHM3RVGwHCFksmsYcSj22LzBwxjXKrUQxWWvti7wUxWdUW4NrxP8wDC",
  "key24": "54W6jvZx1XrkvTEJHs5j3Ka96wCp4DCjFjppwYECa3e6PBFyMdbeWJy7JCEpZXgi1unmwXJjXWAdrfTz9ggfi2eS",
  "key25": "2T5c2CAEKSvPPB8edF6RM2n4CgJt3qUQhDFyoS2owsRdJCny4LcaAVrUZEafNccAXWuPKTzFZZ86crHzzFKqb2Pb",
  "key26": "3wuyjRAUYQAVztcGNzCZbVm1Vt9jnDYweRB4oGqqeb7Pca1V8Xmz8sQcW4dVrD7bKDGWDDhB1R3RcEpmFxiWTanb",
  "key27": "598Waet1easm1EaZVbZGtaCRG7YLswhz7GnvQhVCjXWVooCbfsj5cJfftHj7SB7vkLhsM2ckndfyCRTdDMYKYDtV",
  "key28": "2RSPLu8aw9LndscDahVrzthMzw8aTgXc1M37ke8e47TXYpUj23pjUsDBUH53LXH4e2Xbn3iMiaWTB446aGxLucp4",
  "key29": "2Y3SpSuFQ9sN8VTdRxkjsyPWqUJ46G4B4HxL9hZUySuswTH28UKZzFSiRtDcvqSB3ZWsMhpJ2SuvCk3mqb7aadeD"
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
