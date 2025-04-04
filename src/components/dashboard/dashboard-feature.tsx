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
    "3XhoJtVqzkGnjuAJxWZ9UK5yoMtCGBAex2MK3h149pFoBD441DNkyyc2BZHLpZALkNsbVcFfKUReoyrCsP5iBP1h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yQHdf2UcJvcYpaPFgcnBkfwFRbNg3U6dQXCEVS9c11vPhjDaiAcoykVFFjwjunr8p36TrL961Q136KY41K5xSjr",
  "key1": "5QmiiiHueZMpGUg6pmLG3j8Q5sn7PnKMMyH12HgeZ8BQeo6g4Ho7ioREgXqkSVLCqLciJGAZnUahKRcsXXXwMLf6",
  "key2": "DCtCBKNLZ8UDbUGQJobWBYQv7xVafYm48G8uX8gVGPvH311yb1mnB2A9ENwtcdytNnabM9x5met5M2SYiyv5otU",
  "key3": "4qwGJFrWUpASvE3Mp6WwYrzakRwbVaHbQD6EpFP6ixJGZK8wPRoaNYn6SfoTXBqBeTqqPmk5FZ5yQDs3HseEQuQd",
  "key4": "4HsD6WZ4s1t8sVHtTuuQP5u8rSnwnWz8JVvBQ7wv5xVhUDETBSXKhkHP9sqyNZmbqnzvywzjzQA1yEvrbmMYMDGQ",
  "key5": "4rx6YKNSCC3CeVvTsvFhvC3DwiFYk41WrQf7DLix4rfsvYMWLoFwR8XJxFsrC1FNtj5xwDTVgUztqYqgEWq49ijh",
  "key6": "32vktjkMqWbemNf83N6JpT4KWAeBEMkQhVW3Mjc9UZA4H6F64sEkpos4C4ep3BEVHksCT8VyExLp3fippzY7pShq",
  "key7": "4KXnVf6LPPVUigoYTi1JeyxnBgvERaqWty6djRykfsgycNi1Hsw2MjShkQxp8ByD1nPwEe5pKC5w1Zi2ysvk5CNu",
  "key8": "2BHQadXLzzz4ASEgZMxFEDdUcAzEKxFLDiiuvGx1mjaejJs4y38dHLG5wgzHdHZoHCJ5G4nKHuZoRynJMBoqnGJ1",
  "key9": "4DhizwZP1sYDVJY3dRQ6Z9EuGXCxzPivfLStgXGQ9DWSpUoF7ZgyQed6g687SaezZZetXGf9m2RWsDdgcuzD47wM",
  "key10": "3TZU6kaWHENEx3KBPfqkBUvkGieQJNfaX3huKXAhsQQnDWzAg3t5u6ZuztbzAhgWyKSnhCFR8KZqSgYxWqWocQnn",
  "key11": "99gAH7PzLNHzkS8DVqMo8G8qqoPAcxZzE7fVjev4XQacNTNYHSFx55box7xmcRiyo2rMe5F8cJkLkYjxA6ws3sW",
  "key12": "5rspR5xDcfbg1GG29h2n1oBM7qDgfNtvrKP6PQM1LRU1DZQYvS1q1pjgTdcmT1UHKV8nR2bMTz9NgGQguZ6meAJ4",
  "key13": "4FBnBjuN4sxrWaS7CVjW6nz5Yird4LtQA3rdrJSopDTW5DR69zjShKEmUaveJ9gAwED4JeaFqjzKv949uJDHPR5J",
  "key14": "4r7dtjvD7XD9Hu4jecpmm3KTJPpGT55unWc54sMDcD1mgjmaRTcWYQwcFBTYkvmcsKdxjCa3X7TYRUTHbgvNFU7t",
  "key15": "5zVjvdkHBMazYZbWL7w3MML9MKmzNBijH89K28GgYQBcnysno3RjXX4ABNSPtyDWtrRAJ4eGnLCBHdm8WJs5oWMS",
  "key16": "4eP4gTpoHuTxcMaHMq93sSQtgmKxU2wLnK86tuvcueGoZYQaGNwMRV6cGTQrrN13EkoWeKaNuV816kgdsmUH9W7v",
  "key17": "5ycwjKoucL6cdMutSzAGxrDHzZkKS8gbaEUwDLRyq5JWXShbMqtRAEZVZGbkwKPDgQs1xv7zmw2ZNs1SroYzUdiY",
  "key18": "4Cbu17q4QT1A58BuP2W6XjLCYfZN3Qm1vbWV93rCESPvjFVz6DLQyHi9Vm1YfnvAeDetFVUHz7orG8B8R99JGafF",
  "key19": "2BFrioYLcShrDWYDHkvLXZpW8YTnp6s3jTBoBZo6nMswt9sFLTbzvx63L1wDdpoZts2GcRPVLrkpE44Kb5njJ83y",
  "key20": "4ZmakvrFcBAgmu3itmt2XGnFthZoktCPHuro3mTqdsD44vRgNy9bCgUcyf6uUgcXGbtWQ4n2xHvEKn3q3MwH4Tb",
  "key21": "2DKQH5SbDqRPaJz3cBfUDPNZvn2y51cDphQCEg72xFXZ72a6ZNsrYo12FoQVP5KdogYHPFJcGfRenenaqyph6ace",
  "key22": "5i3oi496RdF7777Hqt1P6TBWm5wrvthFGggWL6amCdewBfAjw8KHCZJKSNeuZV11d9khiWiGyGpfacEik9dJq4Qy",
  "key23": "5UUcEjon6SiQayr8ADz5XYZscQBoW9tfhz5KsaVfTLJZGjr3p45iPR9AN7U4qkhFVmXjhh8ZsnpFaHisDjAPBp9G",
  "key24": "2T88fjGWKUXgjG8mUwjMaqVn3SCbDnitAsAyozeGXd8scc6aNtK6iTQdpUSCR4gPCXF8ah3N4K2EL6fRXuNaAtdv",
  "key25": "21NqpGRVkmGA8ucwJqR1NYczqaDwzezHVLPR52aPuqTvAx61D2QXpfdr7S78RJcoU7EihxnkyqL3r9oWh7sd7Z2c",
  "key26": "5nLjZndk9pd6rm6BweYPjT4BdPuoLbeRzxRXBWYJgZMNUJcDwjbBdVGdPdvsUnEGQJeVte9M3YBRrmmTt7pV7AW2",
  "key27": "4eRdhFzGBDrB7GKjcdM7XZowk3uWgkFwc2AoieEAfoaXpDUuELHnaxgFRHsRmRKRSDVb3hdMAXxJUexCisuAcYBe",
  "key28": "65AXcBi6fNKTHtyFUX6L1tCQGZtZzPu9LQ6HHudw3CxW3TYSPmi5xzY9puNTZq9PfH7L9YhjeXEJUnJb6Fbe7xxL"
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
