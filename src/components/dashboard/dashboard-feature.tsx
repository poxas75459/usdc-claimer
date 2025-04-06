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
    "4rLbyg9bor9VBn5eEhXWRvcGbU7wnALwwW8nVyRGp53iPLgVc6veLiQa5e4NKRP5MKQiFqLy8NQDsHAhwzikpSp1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F9S9Mgj22dg8Q6bk6R9AEHTTJDifjEjST9Rapo6zDj9k8871KY4i16p29piWjNYmWUmzH1jUwiXabYryRbG3gKe",
  "key1": "53GKYbjMhocBABpaf8Z12Pr9ttftDF6EJUnaEuak36BoavqzTLHfJ3agEaEeAyzYNbCyktEczWcJ6hbYnTrcTC3C",
  "key2": "2fiw4xzKbVjKVAebearm845XmPkd8WENy5WPrWKBASiQ8VJRXnUPHGAQUmaKPj9yoFAu4aRzzdi7sZ4pMjcPfBwd",
  "key3": "59yEs9zmBqkEppkjee2Npczb5YFTJnsFP5DeLKAYDJhvv1xBjdUHp3CBrhBqy7nAuCrDVERHSKnA96WFdkFXKa9z",
  "key4": "NJNGehaYkevBL9bZjZYAEqu4EtkGvBcU3czqewodMrhNT8vyUPEqKNAvWxbnVqa7J74MGTR2P67Hy5jLBx2GCQ9",
  "key5": "5vccs8e9akiDRr3zSBPeMSD7x4EgTXBfPGD15cyRoP2jGMdWvve79Xrd1EtRrtCWXTGBTkhQWJrH4NGPTQJYfo7b",
  "key6": "35pYGZwxexnuSfrYa52Wc8qMfTUf52jPxnkf3AoHh4UYcZcziUVNDYHFFHMdbHc2ezthgDawkv5YDB4WfhBfSDvz",
  "key7": "3DUSjdbmp9wcPfuz3ZXYn5W7wSevME4VDRZH5nkaewQPe3E2pb8nfE9A2LrfjXL7cRPWeJf1DUf32JgNNCSCitp8",
  "key8": "39W5pSj9opDmymAfxHxQpivmDD9wVoHYH15yhijEMGRys83YkzEzF8pKAnEAvKqAqH4Mn3bhyQAM1axBPPNC5WYz",
  "key9": "gMXbCyNnfbfQiP8GVZJhuc51yij4VfnBUPk4MgZpwKhxCB97audDWfNxcaRgejnoGg6hDy4UdG3pwtoRYB1vUnN",
  "key10": "4KtC4oQVvLZQ89AqjesvN1t3JQhFnEgy6kfxWpRWxvSJo4fnvV7XXPAaixKvnmSD55Aobu1Ec3QZXQSQa1j4NHeC",
  "key11": "2oSCZjNs8adstH77iuxNmiRdungipntas4ZUPWRE3MbUboAXj8htpLfJosJMUnix6UDrGWmbMkPD3ynbKxWNdAYK",
  "key12": "382c6hLGfMGpiS5pAiRTZJng24RaFfQezC9vwE7y9NuhkWDoFWkvrxpXB3F7k9YrQTqxixhqqoi2ZsC7wX8QesDz",
  "key13": "XUj6mHWhewUbTc6pyRdEiimTaQDaX91xCqN3gmEEf9zTtitz8sijALdeY2YQHufNS4dKaCSe3AuKAaUsK6K2V8q",
  "key14": "4fsghkibTReSBdVefWJqF3NBEKkAhgvBM5zJaQn3BQtPxPhhbsGTUoBakdYwW2YPdsJNN4odhAJKtXhrT4g3zGZj",
  "key15": "3i4EznNTJ35y3xP7D48Cbg7GxcevE6aYfowhhSBL43rzNeo6zWa1jhrWANjQPCuBtrTtDSFpADaY8sBjNUcLGBxd",
  "key16": "5v3rSrT3Y9TFhHD37TGbKMnHRyH6owTJG49kQcc2UHBYoRydipc3U7j1rC45gYQG2C1D4Wcco5uhEwcZCrCASV1f",
  "key17": "2PfTzZLABcKN5HbF8sEtQPR3pmXVXM5ypXnQQNKFfV7KEGFwaVSgjvZRw2Rj9tKsasub4ZXJdbgEzNqXCQ4unQAv",
  "key18": "eJqPneTxJ4ms7TpNjr3xF1Y2sH8mF3Ha2WGmZAjg1rQvoTQterBMVELoRDAFY6xwUWSiGLdjwqmtZ3MLReeMyhp",
  "key19": "2hrUsFkgicnEmeBwzCc6aTCwczvjKuwsas7oDk5nnxAkmvfty1qHKmhxY2VEmGGR2bP4dQLHbQpFjxtusvvKbv4T",
  "key20": "5ghDNz4GmPW5tjE1L6yvXYXfJCh6iavZaXAmFJT4nWr1eHmYsTnp7C6XWtNwUo13cqAv6c2LrVd3MUEUBjE4H2yp",
  "key21": "3Jb1ciDNZY2nM9LrtpaANbgzUDWyWkUFqo2F3s9TMYT8ZKn1xg9e3jqoE1g2QN4LSL13X2YjUYgqgwnYHzZiD266",
  "key22": "36y6vsJep8UCK8fUK7HPAeCJu6G6cSbYkVcnvWqKCMJXpaD1e3G6NLinK84iRexSrhwvK4NNLg2MVw9TPWrYHgTK",
  "key23": "5GTvfsaUYaWnCYQt6AQ1wNykXNy9TPfpyRbK84ENQTCztSdUDKFXspNQBug8USNKCucrFRBNCwW5mHWkzeMCY5VP",
  "key24": "3gx4HBeYhynop3ycF22c2MNWdW42hq9vdppszfav1BdLXwNuwuWnByTY7VkENDVuYCPu9hoP2vxUnYpaLcZ4CXCF",
  "key25": "4Bvph68EhWJca7WPbueJGToNWATLvapSSxRqrGfLjZm3Cxxte2wL2zHmzvi7xSkfwftQsFB9UMDxoxzeirg5FY29",
  "key26": "5Ge1NJ1uwfhhvr7J4UX1ykNGesyzpuxJaQw7rmK1g7B8aVRyezPACMrU87NbnTJ15oJxkQMB7aJzP36uemftsaeo",
  "key27": "32kmiby4bjQRdRVinV3RH1W9FxyqnhZxn8JmHzjqJF8FjaUc1MhyfPqHvnihAfocEkwGCg7f4rNYL3ofEdtnkNue",
  "key28": "2b3MMHEtqhdSJC1RXv8oBXDqyP3k5HTmJnLugkSsX8QBXN9BBeHPPTSNbRXekYQbLKi7ivPWKaBv9qDxr2b4j873",
  "key29": "QGJxqTLdyDU8YqD71bZeb6sTbdLDhBTyrT6LYFFwGeqa1qUyzfxiJUoaegLnCGUuwJzS5euVgsadc1uN9C2KXEy",
  "key30": "2t9JpLsqDc1EV9ypMYzjv7QF3wSKZDcgZP9AyF8FDMq7abtjNJyHPdG58EksmdixDosy5akpJRDPgxtu5qEAtvCr",
  "key31": "5v7inWmqi84F2KF6GaTGwBCU91hyDjaMsg4WmWKMh6x6z3R4PRgehvKZynmRbmKkT2pJsi6xJPxwx57Rim3GbAZn",
  "key32": "2KdB1xa1FmvY2YN7pQLfL9McAa9T1vK77YEkWTeEJ73K54XrprdPMamiRqMSbxQpi8UzsQSxjpZ5XzQS1iWvnv4V",
  "key33": "3XQRK5QUi1L3rBqVS3pwLffqZXyoV2fq7dbjnxzMKaStG4rqvSfhd4ujh6S1Z94B6cWtHiEp3GheU8dNAKFTVEwi",
  "key34": "587m37xU3WgMAS1siNQZ5S4uJBnmFzCagtQ1L6YEZS8tNaqwWXr3rx4hmh4QhMCQnvn2aasQzGRTMNPo8WwxU2RK",
  "key35": "2nJDZu7uQA7jNB5TZejn2Rj3Acmi24ZL8fp1uUfVCAdqRVbapk4jHiv91o7V65vvJ9znFanw9ntkbhQMpNPZTnCN",
  "key36": "3y4xcKDoizWjf5b7qxqkxCShhzydmjWxZrYtdTAzuCNWNDZ3LL2XcWWtRTkvjDS3uvRRja9ArTevLfVCGk5F4fyz",
  "key37": "2rbGBNQcafXfVjGh5LaVwcANrfdjR24hQDxFSbKeTJzz3sL4qHJoQGEJqf23QGu55vygnWd4yKEhNDLgLVBQRAQe",
  "key38": "S1kUCicqNjzVLeuoLGTfs9yWsJxdBkkNr2spWF5iTTknHFecom7sEMc4pbwsh4ZmQnSp4MSpR8fKu773qmZzVet",
  "key39": "284DnUcbttK2mn8qrEwppZxJbDzJ26F6CbjyVUCtCm9WYo3QcLKHQ9MN2CnMYQbNug5N1Q32MWXxZmfNtKyfcNHS"
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
