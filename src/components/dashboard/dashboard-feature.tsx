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
    "63t8Fevfx1GYFwQXWr7HDLo8GiFb7ZYMKKyaucdzGjsmePfeTDoTmoA5EDdQShXY6HRs4kU5JapY8gy3sD2knuRj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yVFbAMsvrcdC9pRmubDz84Mt6AC5WURCy5uEXxzfMzsthd1MrTd6MbTSqgWorbNWLh6YggpmbSHzC2FuaRz5cP1",
  "key1": "49FYWSdWV6u7tXNcQwWS8RLenr7gqFN2JuE3eJaHxhCaP42mZyphWAjXtZfEDFNZ393LcVrGM293QFUQDoerjoZt",
  "key2": "62KEV2z1U4RmDFabC4icJbFqXS75yo3XnCVgiwnwpuPvcyTzNFWaVJ7Q4HBJvGmYN2Eu7PKCy6RPpHQJBpUACPnJ",
  "key3": "3bNuQ2vnuc2r8DiSGxfMyGoNKfwseLjeG3CtXqofe4SB8HDu14Gud62LC31frLYLpFSfP3X8n19DQh8facBYtnkR",
  "key4": "39dkDG7kvow2ccnXi7LPKrrdqgVyBdBLx7Z4kqJf28i64nraUE439maPfSVaMFNsnW6wF9MqpRk2Utp8wvvKnr42",
  "key5": "EzAQ2rqhBKjKMY66zuFq8s3zdoJdZ8x3RrBttVX1RUcUZLJwhv9rz6HD9R2uVTwmiv4wWEwp5WeuECNGnHe5Lkn",
  "key6": "E3tbcUj8JpytCpJnwZ9vw2ibAbB41HTHyfEmJD1fezDUQr4XcSShZrEfkXF58TexDAVDygjwGvTewESDiqxTq2f",
  "key7": "YtddrX9ivPDJnJPX9auQ8dT3sM2drEgSYijqnGbcQR9HWSHQLaeaYguQom2E4BJqiP4t6Tma7hLdjnqjN5rqYXx",
  "key8": "43G6V9mAMrHJ3DPJ7VHFQg8WhkX1e7gLZf9b8NU4hMDgzmZCZASp2h8QUz6kWWz4dxAEC7HrcUk7xCa9w9ddpnAk",
  "key9": "677smq8b8rCCUebnuzKNaSYK637JS35CY5izsLpiGs4q17s4gKirdzD8UwYyKLKpY7nfjbLXMNDTXfAs7mQ4QKwR",
  "key10": "5XxUHrUgbFyXP9fJgMYABC5V22EjcdxVtCD2AAwXN619Mj82aCBZb8JnX9fCSzGf8iGiCWrkJoy4L9eoTS5mvrBq",
  "key11": "tipdG7ZaZEFAbYPxy2SA6oKwRNhmCczCQ9U7q2QJTWjCBeut9LrgPSLuWJRAKh2ip1a3b3ypBUzZ3qQ3Fz6y6sK",
  "key12": "2Rx8hKWCYUXvsfXWViyChsiJuKXsbB9oTHvjaNhzqsZDKxCygtBRfc8xQKbhxs3VRC5Ga4JTkrQThXH3YYESSLeK",
  "key13": "5Fah93P753cBFmKWkH3VTtX83eb4Jgjhq3hnak32q1uwkkpc9iZHRNnBFdzu39Jz3GMFKjMDFViZXoBv6SDrofks",
  "key14": "4eEA7xyapNmULXFmy9kzvWjUvFxSQ8oRd2SUiQH64cgzH2mdScLwUuSAn8ZoXmSXTrcpyfiHsB4vkrJQy1BUdES8",
  "key15": "3qB2GJsbX7kFRdP9X7JfaHGLQ842vqJYxZYg4fzsmNzMypfRZwPVauuxazwg12EcSaZn8bBKVHvdeXGM4XvhZyzH",
  "key16": "5vADPCDF8DwkbTTtZm6k3PSgfwBG7SVyCNKbnHokrF1T57Jr7CcYNjJE53rGrbdXEH2RCJC8488d9gMVezqumxek",
  "key17": "4PuVi53jbWoc8DzrEEiZxXySRU4BEMfkphV4vKABhenQPVLtT5JLou6ukpdbozYvs5VSRjstW1VPYFymTqcRfeoY",
  "key18": "2LSZFiwhgeb4ZBvkfQZThLGTsw1eAQMnG1RXShH3t6Tf2c3xnDRjVFMMmtUSzfGoBVHfzPC2HjQ6HvEeRFxGpw9w",
  "key19": "2QBr1YxMe471CywZ1CAHXqqDDCBKHkHyWc616XLQTpN9pwgtHWyerP5xv1mUMX1WWdGKc2kTBiqRMEeWReVNNX8q",
  "key20": "2xgeiyRiqMCp976vuT3T287H9LgKVZYzRDu5zn5Ly2NVsHnkSrnQMobaJZfjwvJyvKk3CGLianUfGrTGx7ucCxUs",
  "key21": "3hwLFtnepgFotLtUGPDzUbr6MRuDT1NkBW1NMEe67bmfVpLUfUM75GBHuvqDee9zLsBq8GbUGvBNagBYzg4qzjFq",
  "key22": "3ZXShD5Ai4qJwnZNSSaSSZBZ7Ezeb33GtZFCFrUeEQaW9s1zHh1zSju1A9yVKhtqPfLm42jXRBw6ohfBhGXi4EZE",
  "key23": "3MzY4knVC2BhKCr1Mq5NMjbWqx5dW5KCP135Noedw3oUumF5E7dL2ZtmUpE2dvk4j4kicRorEmBkB75eph1oDKHs",
  "key24": "2bzJwzRgYFLshprXxu3mTt6PbKNGx7MVHY1acNWvZZPstjTSmp1xHLepbpmJmHsa2Z9XmKEGZewqcedn34zcbddq",
  "key25": "4emRvCktQ2hZkA2QfGavGhjMugbuoPTGEaWAnxvyVrv3jLZiyt7N2PDZFe5aJcRbqadZAg69S7obrZZDHPSVdase",
  "key26": "4nfNit9WdoDJbyLzRxGdQQENuK6aALHfjXuXFAiNooKxcvzK9Dd6XystAdAX6unDxGmypTEcQJ8HUqCVuhmyQfZR",
  "key27": "4675LCyZJ6XMfC421GYx2KUtpzNaAzcG7pEEfjaFFivaCJU6Qe8a8LHo6SbBSSD5Krqrs1YMDYrW8b5YUcGLNFhq",
  "key28": "3GmUeEH1bfPnqtvJqdoesAeYafHSQKsAtadGxGY9sRpyrkR7VwfgouNyQCev7XR9wu9mfLeeiuQqakKnBh9j9MH9",
  "key29": "EuRh5meFFK2eSaKu6HL5gjVKBwt2BJeBBgq1Jy8U97wS42AZNEXpBRxvGjMgC8ANKyYbafkUKjFnNu1bxKZoEQG"
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
