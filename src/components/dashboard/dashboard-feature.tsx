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
    "7pvZRWUyGynUz54muHfpjnGhTw7JVzHyVmQHjZi8AvcRKM86BixSCVapYgj9ivJ2HS2ideHf6vQZVwioqnCo4if"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iBFiympSSyQKRN1L65UrsvUTYhndVEvXVEW2fVM3nbURiRrt7AT1FoG9HEZtUSxHMXpP6UicaKbHjW6dhoi5WrB",
  "key1": "3n9i6nmfjDZyFVeQgCnAvSXrFG5jf9T3W1nVhPe4X2TBS3zikapfijoXJLwmy2G7NqPAgLZjhfUsLQv8wM4Wk9S3",
  "key2": "TKDhSt2ARwrmCWBrZ9T3Da2oDtamxFiKoEAo4TFdGdHCMQbd6cR5pj8WR9iApXE19CyFLJfCqeMazvXYQKMU7KN",
  "key3": "2GAR6UbvF8T7ruASk2RQ1iJpi6uS1kdJGHS9kgn9wf8vPAC2L83ULq5mFN55eGsaT6eAfNFpH7Xg8CvehfNe5YZv",
  "key4": "42rQhPENypWhSaVjcxdJqnd417obwem1hYecyBa4LRXEjVC1CqPi4RhAGhNjbWLj9pSVoUiHv2t8c7wCNLg7rMzp",
  "key5": "2ah9LxxsdsG1oQjva2RFY31VD93SRPmHLQvEVAxStr4BQJmHYrtooZqkwcBV3S2qwy6bhnn3oFBRMNL8BBcVRKAc",
  "key6": "57LwCKm3x5Apb3uTVEURnuFj2XEzMhTf6VtzWNNeowcBXcy6zQ67jYcQ4Rss1y2YAaDdL7BgNwiWqfL5GUFpfvRS",
  "key7": "415YnRjyo6H7xSRuSuGGx3VgK5jFgbqGH1h65HsZfEH4W8Xf3SJfae2PshnsNnvbAJEKuAJ49CWzYRiWJMpeCtnp",
  "key8": "4jbGRXuBNZLL94ra59WrU2HoJsmSHxdVNKN84oFdBsfMwPyhMFxxUa2S1T47e2eJTXiB896XnBD78qRah5E88feG",
  "key9": "4fFcmTay3bmct7Gg1uTNbdEEi7N4ESG3v2cdeaozsiTRiYBmWcgZAEEPnDfesArjqK3qKErAE2h2WGAJo7jfLvgw",
  "key10": "3n11oNqVAYCwX2h2X8GcbNjUzmHBxLaA1NV1ZeKqzYWQ4uWF9bLv2dZbXuQHrtNMzZ6apnUpcGSTKLuom85CnHCr",
  "key11": "5DdeWP9NNXMtsFhpcohViyKvkTX3wfWwqfPT1rKcsoYhPTtYHBdpRtRL9rQPzQ65zrkaDo8hkt6XPucZPTALqoqD",
  "key12": "2bZxe4Cz3AR5snsYjaLyzUnauS9JrTAfyJf9VJapjRdbdcRZKxnh8zjNsivLvM2WkJC1SUewFzQFL1mSFwJD9SUD",
  "key13": "5rxr5bpSBwa3VZSHCxUh9D8QKNkE3fm3CKDK82tADH6Tnc6zUcrRxueqvNUzPstEz7KUybsj5nbL379bd28oE6Um",
  "key14": "Ak9qpvh39YT29cTxtJWbYGCjd6PyBsQmFXdGFZwrEE36NFNuzNcxRYEtf8qr5dJuTkYnpCdc45mJsrE8AdFoxct",
  "key15": "3TrYfnx9XtLbx6Hn3xESSgQ3pKFoMXYmmRFgYJEmDvhU5MS7958HoHJoHeUcf2e42NqiEPK2GeFxLaNSLpPgvXyP",
  "key16": "tEybdWDqF3s3soYMee7oDoLQNbboekhpgsUebLyEPveP9ofAjmGk5uWpJv8F67J2a63XD8xH6Ur1voerFZUS83m",
  "key17": "2AfF5Eih6xt5zRu3EjrY1W5SJkaDn4D5jPVU96YHeT86yAt9zhA3cmasjybBogoTMFLs1ftRcZqMrgLAaoX8DG7t",
  "key18": "63ouws9aSdryHePoCC9MsrFgtHvba5FEnfxQrLQMwGqGobeRP4Ckjv2YyneqHTNawwhwNb1fD4U2dcdqk5e9XC1Z",
  "key19": "8vPWUEHiuD48rBSoDaijibR9ikSqBUpnFfKcZE1gnxD8vVsGw4EnAJ1a46di36YwAYWf1AXgFnqfZotiXzHNxD6",
  "key20": "4NmWraRq4kprTogFi9VVBWroB7BW7PcUvC7AagHHzMQ736NrqYHbKz2Y9ZbYXU7PvF9wVx4whE9gEuZ23VwdhYAe",
  "key21": "2KMbVNEBzNY7wQSa1LBwfSnaQUNKdseSgCk9kBxEg1JqWhpbxqTgsTSBW8reh27Kgacw1o1aiTufKm1ugnQEvQoK",
  "key22": "quyZ4aEXTH9X8DjTRb7uen3NfpeRBDxnqKBdGmpbwqbPEnZULs81rT3t6fpMzqmAQMYPWWuE9EbgsxaxWUj4Pat",
  "key23": "4ugTxKWjv45GMzVigTFYVMfs5zNpX4Mq3Vd78PMrKqBajwLsCEPT2mepsVD7kocAhXscKTDmbHr9MGiT1rQ1SQAK",
  "key24": "dP3ciZ5XNvaET5WrnhHqrY6c9PdvWyVxgVSbL2KViwYa6cb1JFrGV91gb1C6wY61HvmwMy6jLETbtHpFznKNcc5",
  "key25": "5AnSDZVjRk9SaquiNs9dDZqfCHWcfjRDaaxqGJAf5Q2mK5SHKvhgTEbuD9YPdt6zrS6K9KqNjhHcnPDmP7QwvVWX",
  "key26": "2Em1q32GBnV2rkKBj1A4S8NMoSu9SWseFCa4REgztYFZnRurZaGJUtARr6bVfkdKfRcsFSdwWVsUVQzzqfyr2duC",
  "key27": "3Mau7sUj83RiMLQEuTz2mTCu7ucgRr3AJs9waLGUDQVjsGfYJAUJuAszPHjQNMbcPsmfMPU814PvDSnVxx6TEmm1"
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
