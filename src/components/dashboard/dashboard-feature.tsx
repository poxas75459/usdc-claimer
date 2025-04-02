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
    "2jEERnYwtswzhco3qfvvEgPnPaDUeXUuZxUM82WQvfaiv576FQAcS6oFA2MK2j8xJPRuw741APCA3efYSjzbUM2c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EVQybXwK5FF2ttHwc2SHF9P6kpa4dTcVZbtfEozs46WcQCzbyS5czo3VeN4hocw7W7UW6q61vr493C53tjcAQ8W",
  "key1": "43Nfv2cKqnwvuQc2btXrfoeFBDzTT5LciLBEm7HMh5hJRjAtsiGPrNV8fPQAigMfGvP6YuRBy2Pcnp7vwpkVaAiB",
  "key2": "JiqrFmtPPbNTuJcj9h2Q6BRLW2YVsJjf4uhKMfRUAxEqd1E2FDnavH7mz2UFFwkzEs82hKXfTVK1AFd1DJU5kBC",
  "key3": "2EVHe7GwfgDpA9LX8PdmJX31r4sF6BCNugSqMmZrxZd8eAQXdCKN5XzQR2BwbQZ94YFGf5kiAkgYKkdXe1fxjMz9",
  "key4": "59b8617EefA1P1FtKJbQ6VKhjNPPqGCr23tKh3W87QDFhHSy5vzPhkv3rngeGebPvYhZnBK12x43cBpCU3GZ3hH7",
  "key5": "42WQ4awqQTu3qopcs2xiDU9EjTFKxcgrc5YjJWgWdEVyAiXoDdcxQKHasAR5Uei5CFWFMMjpCFmCZT6YbVkAUvvH",
  "key6": "3dXEPfuGzCZWmrVY3652p8FSQtAtpahA8vs5Q5yov7NJQGDVvkF6tMNApgebWJm4VnuvgiSqamGjEYNQ4kLP9J6E",
  "key7": "VybD7umX8r52wwyzxaRRE2BUTzbrMVoDgiq4pr4tZeuYHPP1zGvzj7HBhiPnzyYMVmQzvH8daTTmCFsDGdjfLwc",
  "key8": "5s2JPocTfuZC569Haxd8iWgvbLfLV85ST2LVsbqPc6JHahVhZyGTDoe4zJXWk6ZQDb7BpdESjSwv34e2zwGpWG52",
  "key9": "3FCm4iKT7uFk6VfparQxuyYSvTKyAaP6oJArbjfytYJ6X2VNhJKGkKEiztZw5bPDaMr5pxdQZ1uSdo7o6KJS5KGy",
  "key10": "4pBRp9gCz4xKXWPmjtGAXpcnpexaKqk83Gn7n3BNqLxdV1rUGJupkSRNb78c2YcNQFk5DjvpA9vA9kGwFZ2SP1qD",
  "key11": "522bLECn7NKKCThi9wW1pfKQpKMqsT6n5CeZoEbapje3FE8pdGJ2ekF1dEhnvmmvz2KytPxCf5Dztpuyr33nvA8H",
  "key12": "3TnHx8iHmf2b8HMMScLdFWCPp5JDDiMP3ozkjrQteZj1GvNrK9Dhhjn95J5tc4whQLFUzFect3D2g5B7pqZGzGmr",
  "key13": "5Z3G8rfPz7S5emgGuy654MPnRmRQnH6iDpTepHRpqcr7mE674N96sBh92sctH2ZrszpHNK284Zqe6hjztqPewqgg",
  "key14": "5T8ewAHXu8yDavDZ1chGoNGqDE3qCwL346FtWM13GnTifqYr1qBF6ufBdEoDhrGVuuDGR1Dn8vdiu4LBWdxn6Jhb",
  "key15": "63ZLfkCgGgzvfLGYHCHKJejHfuZ5i3fRS9aAsdEEEkBFgvVUVcsQjz8Xh3xgD9qzXx8mGhJXf1s5vd1fpdbREQsQ",
  "key16": "4VEtf9rr7QvkJ5vtbwEC21G1quJZmuR5hY4RWaGRvRSciw2UUnSp7qXY1Pxc1vmQRyrePYBojwnHAvvPBbgtvYyF",
  "key17": "5UBpaX76GZyBDEXZRpfT2iFS1G5QmCWsaWQp2C3MvF4sdQJxfWnBMuwr8DiFbqm9KUdHuWkZzPE8tWAM8zo2KE1L",
  "key18": "5HpwJLYzMyL7SFUd5zRtSyWCBjgjkDnqM8wJugmvsGA1Nod82f8NLc8WFTHB6nNhE1K6yXhpUvu3k9y7iVJa43EZ",
  "key19": "5f1UZsSy1c51cJ2BYrWQBFn6mpNkqQGPMAqFHaf2g869n15MB2DicMFAJJKMFZWNUTkCisiAozCmoe7WxUBNLmv8",
  "key20": "34GEaR9Z5xPbmjixVvCcJBisWMN6hyAVR9BJ2ByUNqJyLjqHrsRG8xRXKFaPhrw2ZYWWdXrjXKsnoaypeEdJwukV",
  "key21": "5Eo3j5AdX2eGx5tQPSaJWzWg1D6qKxwsJ2NcmJ3ztWHWQo65eawXgGNzTdLreJmdTgB4upXzAFMoS4WN8rT92deR",
  "key22": "5NZa9mr5cDDkJJU66SCQcGazUiye76XkZSt9pzYquruwbR16hQmU5P7keRWVAyvLXtvP635U56CJCJzWHpFW31C3",
  "key23": "3ypVvrBLypM8zw9n31htR9DGSSXFxA6xpRfgqLb3Xx6NEgs48T5X6xLkuCQuipEMqeWyX4NjpvpR8uUqwpsXZtQM",
  "key24": "2zqiu9bzozZqKvyut8RrioahYemRaCUqAhTXiK8jmHvCowt9qQdojG95TRPoj3BiKcHQUypJWSQTpbpNDTQmbkdg",
  "key25": "3P8bRPNgk8UgPfgGLtLkrVKTDxUd3b6aRU8nvnGZZEjYFNkfvqA4mZijREfRqvgRuXxwc2WX4FaXFgFJavwHimpw"
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
