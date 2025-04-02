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
    "5DJGgxcNUkWHWYURWare9ca95J73r87kQp7ektg7RTymaxvL9LagJi598adxzk5jr9jAiXNruCkcDK2uiUkYyAzT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5syZ5cafxRE5FpLxEyFaB5PvLmP7n2UGJzpJW1Y4RPnD3AtgYUUQvMULaxUAh6MZjxJY4fNZVreLpYeJc479J1wN",
  "key1": "48XZ5yEDvwsK6w7BXFvS95nAAonRERzt8AgxuLxeMBiYmhG8SFW8fobQ3hsgBS5mV3dik5Lcm48ZtQvmMLijWwc6",
  "key2": "57bqxZQ6b5NSEBhFRJQ1VhPdwSWq3tL7XLVb9vsgSX7nweZR9UUHvZPu6w5kUkHdECPuUVYFvhQcQGc9pwjLie8m",
  "key3": "2cNQLsaSbt8dRp2AHbxU1wnMCpg93o3XrNqy66san54bP1BDKipGEd9ejud9rJJjGN5fuBEaSzE4FSkoodo9hk2b",
  "key4": "3HucefG2YufSj7MDF2UpyRSUexSUpCkfv9yUAmbD8MuNSvzeBgLAua32qf2Rgccx8Pjy3utamnU1PcShpF9xag7s",
  "key5": "35yQMum5ER3Hz5aSviAZPnBhANn5RdBARUeBJoaoCKKzUNZNd6uqjnj3hQitrxD29wmHujYNCUK4HAi3zemVspgi",
  "key6": "34mNyABA2CcucQxmp7Z2BzT5XMZxjPhzucb3czWKJbXKoer6URqqAQkN42AqxzEKRwtUdDvJDXd1CmUyGWhLCK8Q",
  "key7": "2nUoaY8fRCjUZVBvttjuhhxzffwE1g5drPoJQ1J4MkfM6bn4D7aHuRhc5cnNR5G8uPESGGZPeTt5qQyzbMzmnNwC",
  "key8": "5DgMD45UTJDqd4Jfeq9HNT4P6C4bvX2B5DaK3vN6ziKEaMLRwKhFx2A78nshHTATpBsvQF9RKpbYSaMouxb2rzc8",
  "key9": "pvzjbPeuQAFvj4W72NzzvhgvaGCN7FsGYxoCMSgrPMoWk2H2XUMueR7SCTsBbVMti6XncbNy2zsTZB16K7uxKwJ",
  "key10": "3vi7EPaUe8hEDES4tVuwLRC3RqRKvzVHTpmBmobp4Esw51PCpVaYSqsFKHxWuFQmci4gk6j8pAYaJCJNuFG5TGBp",
  "key11": "2R1eXESMLpegZXjHagKHZEsvHJHpBnDzUBHvuLuhYagZnL9qPKqfq8seMzALQzTCnEEo7GP7yx1KZnLQATUAsWJM",
  "key12": "5XehxhGCD33zfmy7ZRpqX4nqxV43h4cZYsNkV5VhszgtT97AixbvURWWoGR42D6et5dqP8GraTUBEnHkD7M3bbsN",
  "key13": "3TKBcSuiXPJRxEyL6xSE2oXLueaywWEcCSQkuwdKsN6JcLQf7VPhoS9GzyXvcBAgHtUF4xAHwuWp2uX61pQujz7h",
  "key14": "5tomvtAt1tqjHaocNNh5LbiXPjp2XYTzaVQs1axuCbvtva7mnisRTrVbRuK3HBsTZDf5sPuTdA2eiVLBLpLmDUd6",
  "key15": "5m1wFUBuMp8ZEcSKPUKohJGJsbsdoCyVpwymogFnqNSvvgSp1PZDXBWwGwiXVVCRUEmpSKPARtvAtK9nvvkSGLtn",
  "key16": "5DWAFSTKGsiddLCBRJatuHk3AwE5jnfgqaw7KR9RzJ15tgDsmGXryoEMcrBcuLa2Ym5fGtuoZjxinNv5tkygdGBD",
  "key17": "3C9LP8dpuo7zrewhgaZ6oNnznmb2AM4kcuefM9jBBnFFYtRA6RcYmXtoQV9w4VvTWm9fyqRG1xAUNa2TiZKebXsg",
  "key18": "49HA8uWsXusTXoN6zKCrCDiTrKvk1uKrqk2Vy1NrffdkiS78g1rLHi8AXi9APJZbXM9j3LAGxQKd92wWWibb8mLD",
  "key19": "3U2FU9zVQQ78uhtabN5jFmpUdikL3a8vhKtQebyKsxAJtviZkLuf3KNQeYD1oFjE8sCX131yNV7FxQgwZZfisfgU",
  "key20": "55G6quCUoipFfNRZ451iwT7s7JsyKd6uQ41LUtt39dR7RifwK2Fgv988TEjz7rSTFeixkt3NKyGNFxeYAH7ia86p",
  "key21": "SxxXF1YNnZosVw9819q64CmX3M6vihPjwBs1mknKuy3va7KWYhoh5885owLToBWmc2sJaAyKgyEBzAp6qoGrdKz",
  "key22": "4C27ESvbnv4HrT42Mmbpj7GKCUXNGe2G1E4m4PQC8hBUkVZGe2hDVJ3hVQXKCQuXNH3AxWKmgarhBSTsKaFZTKxS",
  "key23": "5uoh4ccq2J2xSfGPGfrkix4FavFxaDcFza9644oMLUaPU1HVYdU5ZCxuej3NamHmMKBYDRERcQMLubYHnpuT9nmL",
  "key24": "61GQWytGWmSr3skTyCJwAqRwi75qozq8iCNnzMcaLpx6pQnLk8YDbRRhbN29TE6nR4N6Daxeci6GRyxCfnzNPdbx",
  "key25": "2d9NXsrKMBKNqoxvLkGJoKrLNgcYPZ8gfSheohnUjsLKUqu41uy65qfRd2JEQJBzBjPRA7B8eGfFrNRQdj3hmq57",
  "key26": "2kUuT8SiH4EYzMm9oJmVDQBNz6evdpPeb4bzpCp9anpJDTM9h8m9DfuefSvDpNKVKumTs92dRQjBHoWVpRBp8S6H",
  "key27": "4mKQCg3JY9s9CR3tM7AcgL2xVnasFdk22hNRvfHS47QFCHyGu1WzuCzp2nDPMRphLCQcG3JWiPR5TUWcEqn8Qphk",
  "key28": "2meAdWqY7AqyAXkaZFcq5WhzEBCXH13zDVtTjrn87ikiWapoHr8Jp2roSGkAiHr7uqDado83kom5pZdc2AbA6nCW",
  "key29": "4id3fQ21qPiezXX1akyFuvmfngm75pfhmy1s6ChvHXqeo6NBx3mUqsgwsANH9oFMHcDUWY5PjTvvHMjjLbfi6hN8"
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
