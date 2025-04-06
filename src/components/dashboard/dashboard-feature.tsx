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
    "33ojqq26pRMBNhvVyGUJVtzjGrVxN92Xf9CEsLnAUtmeCdJ3ieKW3r5BYgN4G8BK1soeWXmVnjR5AMt3YsPwfD3r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LSUjFJ6hXcLnhWoW34UMWcpV9aqFZ3Y6Y1GkDkohX3xa82NPQf2cJmqo6aystDYNco1hvcpeshYg4uHwZXdw8Cf",
  "key1": "4EESSaGQeV7qnBZaVpqGxWAXiGVcpCD4HeUZbu8AdB8bJ19G5Wc7caECtMAi1G9yAeZrFt9jKKZveCvLzCzRi6Hx",
  "key2": "p5AanxW4SVYnCiUBZAdwR3PwbpLSAyUgtPGzqkAoVxQoeRetfyTRwBtQaaSHek1hr6qL64YeB3Z74Y8xTvGXPqr",
  "key3": "3V1Mn9CUK2D6hbAWdun3CeH9txaQS7sB4ygq5XY2fuJWxeBEx4shzAjGsbdThxU5D9einz6DhnhBXVHX4Ad27R8e",
  "key4": "2bEgAMtwr4bKo7Sj97kDvteKK5Mnuve17AtNruuKARhYRiCf97QUrByMLNiktiNSKjjbqRVucjMA67g7fVULWay7",
  "key5": "3Ritis816YnWmse3n7aNbEwtdsvqNZHdXAicVPV7BRB2tPvJkYtz2VjLPmwrLZV9MVXQ7bTFqCPRvN7t9ZWNzwXu",
  "key6": "5gmMHVPEcvneoA63zG62FcF9zdJwwTmTgs3tt2SW4aN46VTidZv1qTrYt8HLaVMNk8trAm3PF3ybkHxba3No9jZs",
  "key7": "4eMcaz1RG9WoebTngN9Vk5jwTE9hvTj5Ys4caqncCMisCTpmRdhzcFSSGSPZYjvXF4qEACRj6TcJsQkHZ233HgcM",
  "key8": "2b5RRwGfkEXnxf9RNZUmvEMWueF7yESLbSAjoqrKaQGAjQCX4ykZeGQvy5N2hHKFcAwrdWumBotaBbYSSzJ7GgAf",
  "key9": "gjRTYDsCDoZj4R187cNh7uAYgyrmTmZMfnDfYiLD2t9RaVAQrAYFZJACPkr8MMDjYs2YEfp4GjYSuekUR4SgNnQ",
  "key10": "3kTkYci5RCnJacN6hDuk7bPitnbsF362f2f9f3v7KcohsnMGRKQPysXK3kH3PQcXRoFHCj6A1yStmQ1oz34ps6VB",
  "key11": "5Hh3joJvHn8nm9hjPZjPPq1QxsgBEG2jTcH4BGFbX3iKgxvLw55x8RSynZABw2ff4FuciKk732amYJYtKKv4PNfX",
  "key12": "3bxdwYfJThvy154jE2Mvgi7Euco4nY7YurWT3wmEwNzWwYvQ7tEh3DQ7s4ee6qxKysCnHCVg8UqvkZKnMt9Jo51b",
  "key13": "4wFufCDe5cvbnWkfPba2B41EyorQ3xxj56BQRLQ3o6FKj5Zf6SSxqKF1mXJwpWJ2UtsHoJRREe6FKiZe5ggVoxhV",
  "key14": "XfXxPieASZVtfgxwJcL5nbo4RsFdSqzQ2AWdt1Mg6FSvCKMUJPkYgD2KJSCiRtcUj3SwtR88CrVygTXyNxDv1TW",
  "key15": "2Ei2mnyd6GQ65uXDAH27bsMZyM9mCGD7QHpJUAhR1cmsuvE8zNyWGNE9Zq7iPqbuoQiiAZsNwaN8DDyfH11TXJp6",
  "key16": "5F8wofnYzLaahEXTCWbXxFiB3992mvexy3rPzn2deBoKYAr2f49P2eB24eMs9U4dV1HG45MTrSccDvUKZJeEFiZK",
  "key17": "34FtDAvxfutq21h55jtkKQJfMeairiVbXAAdhgza8HEHTR38ZtZomEqcAy8dVwMa1DZGQUFn2CRgWJcik3FpAyNs",
  "key18": "2jJr1fckKwAzYnMU8snV5TnKDaXRFA8a1yGPo4UfaG4TanGVXiz3kZAD1gyEexibztRwqWFbTyK4BSvmKLAjDZnR",
  "key19": "3TcVh5Ea9d8jubfoq4bh2Cbc3Q25fyFeBwbLWNPM8vsA7RvzjCkyFUtdjM5MqPkVhSg5nfcoGanmSgD59VS9EqQd",
  "key20": "JvHP8Cc5NDRvhcAtr9p8RMLH2B3gvv9wxevJNAaNGU1cLr4n7J6nhAVqwgPmpwKdWxF675opmohBpw2igYhyC1z",
  "key21": "2Ns3uvzpyhFZsbCV8rZjKffLJw1X5tb5G5eXBLXWxMpKbSDHfatHbfaeWmkHAx21Tp9mhn8w3mt77f2tFG8Uytxn",
  "key22": "3J1piovxDZQzctSC77dkTKaR8zwY7rQcUNYeuPG8FpCP8Wo6cmh7qHjEfkcbwkV2X29cHoo95H1MwEsw2VwEugZY",
  "key23": "62fheAomwshrDuNf232Baht8GtkfpLy2Sxhg2nmaXiS35Yz2iHycajR9UVy7CYnxQEUPyXcm6ZHDV5Ni9Rh5dMw2",
  "key24": "45nzybBbkcqV2ssAiGeDqXWW4UimC52WfV8DTcn7HJcQnMnrmpnU27Krng73zJNtDSZtwCxXyXcdUWG9Z6BLp8yW",
  "key25": "3fydznh3s78f3bJRzVXZTr1bpc9irbf9DiH4MNuFEdERzJPaMjG69Hq4gQwT34e5bw3xkpNMkYHCPR75CAAdiagJ"
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
