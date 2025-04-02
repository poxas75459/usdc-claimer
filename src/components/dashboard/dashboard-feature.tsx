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
    "3dKcxwaxQXLHYRMoxdsEFiRJ8w5hXyEDvN2J6MHE7BapgRBRbP8S11c3x9NT4rFEkXvKJ55dvHQcKDBXXWHH7MUp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qdB4hDC2nCPnoU4Q3KJcru7xkSi1k4icJsTLqEBNV394PChJSFPsc337mhREWa6bWBViCg5qJDGgvz5eX2CtUAr",
  "key1": "4jFkzgy4k3NKVPgqbHczKat3PU45QrcBwqYiTZJMfYk1G13RYyn16UjMBmZLiHc9UEQV1FNphQZzwtbTLa35ozf6",
  "key2": "znZEM17unQa2r183VMGg8LFzCeku3h3p86Db3vrg7tnwmBhjZJoCj3voH7XWTqmo3fxwqu4cSLb511XtfzBMYZj",
  "key3": "3XfVp4RqeDQxrbcnFQzRSqFzBicpK97z7piakvSFLWeimnUAraR1cCJHLmAxXmStfVCQFzKFhuxtXvsrQNbDB8nh",
  "key4": "3GSEeTKX7rpEWCDhS9nrRPxgYjTZ4Yi5YiJ9bhSqri9APoUtiCePXUvaRuQ4wMqeN45ekeRfoyLbnw579P34vzGr",
  "key5": "5ZvcqCP7StjmyNa5dgwxyrn5KSd5Aq2YaKygZdpvZxMbUiqnqbsyk6nRKojQ4zKpezfK9XaiZeZ6hM8b9mkN7oKY",
  "key6": "2uiTSR5KBFgEKnfzZLAWYSfXhcJV2FbweEhzwRQPP26d2CUtZqy4v35ynaNdkj4tGqDq2aK2GTAVq1AusrKurNbP",
  "key7": "5X2bo9rhqXhnPfkS4k7n2ttB2CZcJtkP91HAv3WuH935o9zrQqhNb87vsjd9PmaJsyCRt3514RFxadE8W2tjvQ3T",
  "key8": "3YMVeNj9VFD1qk1nrimDRu72nyueMcwtjxPnt4La4n8k4kDr3qQYH3ey64EpdRr7wsnh9vhkgDt9hVs9J4L9m3X7",
  "key9": "44DdMLHd1fyrejgTNfqiLm8tK9DeSQ5hVGhXbckdprrrruC2M3xE34HzaKKQXebpKrws1ou1M4cjqu4NxbstmVVh",
  "key10": "2m68gSRWoNyJW4ZCMN6UyQHFY7nHuNWFymd175ZbMwi9EHyDkLczZBXWZ3Rpzw1Yt1noniN8JoU7ArfvsQASf5pN",
  "key11": "rgnzpkPnrfFDHrWUfERXzooYz9dxmEkiRSLAdnyagbmukZRXQTnHc4KarVQdwmBnJ1MxyVWnajsxCzyDZnxZ7SC",
  "key12": "3y7cR5fSdYsV3C7yoeY68vS2RmKK7G8AxupdmQ2ioy2sWNih2bJQh4B1MdsvnCuUTPgYybU4RDBkNDQGpLWz7aQH",
  "key13": "C4h5GRBkuCiW7wY81fSGwwYbmQfW86po14Jk6VmjRroJ4D8xZmL5neZgxnWz6s7c3VggoXS9PbDmccT2kSsjhgE",
  "key14": "649K59dSfYbVJTbuc33kENpJmAUJU3hYw1JckENxJudBgWgoRigaWYSLhGhfQZcqc6GjFicoRjiAGMZL2XdJEDuX",
  "key15": "5zRS3Lfqndbr4tTJhnFj4BRzQBoxiApoAgezZURhmhpLzeowEZkhsUfXYUNt5QCWqcdbSzf6owaZQcGVWJtNhz3W",
  "key16": "4N8bJ2sj9vNFxoQz3DwMgZkeAexcVwbcT7X1xsJ89rgYboRT4oTCXMxLghTF3qpkMtCxoHfwwcNUxbDGCHqiHYWC",
  "key17": "2DANjGJLrKYzMtUa5NahJgHXbJHtFUSsQN33St9UBuh6Weqk3Zgtzj9iCxmVt128ZQYsohLX4swDgpE3XAuVHb6H",
  "key18": "67p7X9ZmxtPkK8RvGZxNK5NFxzMVTJ1UkWb6af6a3RXmBJXMpQk6dWUUwifmmZQ54F6sC4hsqbk5nDdZh74Xzz5R",
  "key19": "27Db7sdhvEwQJsbAqNTt8LbtoF5Q3QuNE1Y6cTa5tj1f3agtgUzUEUXFN26HiE4RGN4HUkMpz5nD3iaHqiUqy6Hr",
  "key20": "5z71VpXmAXCbCnMgw8VeopQesq8ffKGrKbfgXctyKrdVhK1dgRXy2tdcgRxRZVxVjDkFqJtzXLGyfmctmrPjJarA",
  "key21": "5mEq9UVtwiLBZchfdCcQxDujEKUfkBwtBTxfPZKxjUvkfpJeTGH1d8piggbbBK1wvPuh6NZAdhhx6TkVy2H7BFa3",
  "key22": "4HMnoLN89Dqsn4pfvkvWUYnkYmJSdkDFVYBNCXaD82wcScL3z31qy5pDz8CMAwX1qRpME6LhzExWvjpTjupkbJdv",
  "key23": "3wcVvJVN4BLui9x8vhae8tiJPfo5uVQJ3TM3qY7QzsxQn8PgixXoKEN3V7n4aZgraXTUdEE9XHFVBmuDefXbSV3v",
  "key24": "5ZtPrtgrAP7dbAJEB3Lui5iDZK4hTqT5xS5ZJuJEr7aGvcTY9p6praxLq39ubiCvsq5cGXFgiZpyNR2kKs13BrMk",
  "key25": "2zVsiNKP2Bah1fYnYtRDE8PXJcqeUqNZ2SVfTVDkMwwraDeAAL173FSfUZJLHhgfJtVCHWTPUXM8MydFPHodsVWF",
  "key26": "zjt7pfA3D93TLXFwB5nS3mxJGZ9ppKUo8m6VAqmXUYN7EF636RvxgpenqZRyNLPrLSH6NwRm4voNBSu2LnCQxfe",
  "key27": "3ssgRR3AHbqPV3We8Sp5TcmPvytdwMNM1b7XwDtRR7J9NJpBefjCCu1B5BJimoUmAexDTr5ZHSQguw34eZnbQG9V",
  "key28": "3oLPecgDMWd4PXddqhhnXRiYKTbY4qyfG9cQhmHSmqTrnDDVMZFfHF6cR3EjnES2H7SPSpc7tVwG7zFGSUGPsK9L",
  "key29": "4JmCeAjNhKkZbdDJdmq6WyMnbndi44dRn4Yxz1LS8WhB1q8DmcKjGanosRvnDjKbPtf56Hx6oGW3tg1UiNPXu2u5",
  "key30": "2Xd3AHzWP1s51b1imvcJp5A8TqrqcSwDuAXrwSnQgi8HaeVCRZsfBTeSboZczdPmrjYeEQgykPz6buzSUR5iRPnA",
  "key31": "55jZL8ZnNoUxuQXxcpk9PzHTFKDR98xpnmRA5TN4SgSU6zcHQCVJzqHEJhizahB97XToyy4NMfW1TTL3kdc52i3u",
  "key32": "36qnhRnEnXKFLfiUN87MAKEjBpHJJ7yob1JQkEUkF7bFgnUVyVrSwMDtBH2XzkmstwKbEXVVmBB54yq54sEM9Xw",
  "key33": "5okf29HwqtKVcr6Jp8mEDt45ReNRc6nXe9SfbNTpkaZjb24L8k5KpVHPKkRxgE1aA75anHd49xVHMc4piFBs9Y2x",
  "key34": "3wVf9p2zr4wJrk7baDE7G3c28zqjM2nn8HaGdtmmX1uYzpCLpVsz8phsRZJZajCXTLjDXWDh8cQ5aszNbp8MEC18"
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
