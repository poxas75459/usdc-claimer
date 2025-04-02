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
    "2L9oA1qJf4KPM1dR37tcWsFMh7DrzBbp74fPmJczpZE5umwnHy9ABmZrQiACzPjiTx66BrRA3fQ2Bz7U8hWRx8pa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KUNoJjvxResUxaik8muQiYdYPrVtz3PgP9tdjAoxSBZs3SLaew9MWwcwbZGyUGuedM2zBtAN7sARGwjPDmtzqaq",
  "key1": "tU3UBUYoLXTs2q6YadVGeUQC8DYBA2v36tAYdPCeu1D5QtGg43NUUPAXcE5nR3FmfijiRADs5B7rDVrRkd1P1av",
  "key2": "1UMKbv9mcLqc2oQYUhxBjLQBAia5rcSMLydsfFL3Zix1T1QGFeri9gEJwZtmEbqaLHY3ACrQuEn9QNYpxPtqRLZ",
  "key3": "kCBVuGMtBXYjH2GHynj7HN9yBTnLy8Rcp36skuQTcxttwfR9Z9uiMMcFQYyNDKMLUJzdhqcPCwRFnjdmoReSJXX",
  "key4": "2RjSS4rxrSx8Vd2AFL1c8P1uY7MTk6aPK9QhkiiJouKEL4E24YfBVw5zqkWDfsz6XtmVTAq8SR3rqMoLudNVvEty",
  "key5": "4EYcdv7vBgTWj5NWNzFf7UqPNe9N3oRMwJ2rFY6aYxmXD94j2H3YhaBe1mZDXRnf8LPgKiDsuaPXqdDxZRPUL7wD",
  "key6": "584RwyA5pae9CLjvPE5wRYda2Gn8XGVMKPRYqf3HozcuYBY6etG4EuPTiUkRNGY3xPXdnJzw1g6oXtdmSmi7dqjB",
  "key7": "uaJQTWpp9UXw9WNE89MegG159mBhADnCCC4NF5CSpyzdxRm5RJPYqziy6uc9UKN9hNRiKfPS3Bo9Wjth9DA7ReK",
  "key8": "5yszWY8xQfaS4vTVwFG2XbMuYEUFR483qneq51k9X9EPg8n6VxaXr2dz96VnZ3W9qMatbPLVGDzLiBZWgFe7AfGQ",
  "key9": "57rBYXTgHpVUfEyx3nQsxHovqhELnVY3mftzSmhmitQvLVtSyJX8qUtYNZBEk2cZWdB7UhboE7Qr6PeSEAj6Yz1X",
  "key10": "5mFC8xt1fzJy2F7jgbtywv1nZKa916u3gq73em7snGw9b8mRERRTpRT1ixTxmHi3vFSG4hWggsZbXCBsgPGtzG2Q",
  "key11": "4aXM2H1Uqz2GHWyaGFnm9vJ1E67LKKZ8CSZzGiD762n5RxQc5xWn5RZc1FSPGvU9jie2B1MmUXnLyJkVmnBRC2dH",
  "key12": "4DGMJbkF3U4Mh4M4CRsz3FaaHSqSZqvahVBnLLwCze9paDMPMEqsrBY7iJtGGGmWkw1DWQPfooVUufeWW6YCpe6Z",
  "key13": "3HTF2346MUtWdsAEw3MG1WyLQh2Z5VsqHEUdtjDFmyTvkix55Y7ebc3pu5qyH4GMc2BgPS8Pvkfb9zMsnvHQ39BY",
  "key14": "5MqB7NNM2r14z63q5PztNy9pJEpDgzPJuj2d8Ny1u8NmRmHxzphm1ptJHDoKYGn5yS8jf9tUGvbh3wbhcPwAa1Kh",
  "key15": "7cBV4V1vqwrSiiXnwCHoxPzm6i9vWb3RSko5tz83xibQJUzpRYgpd385vS6hMt3gAHfMbqVeXfVpNBwyWtgTdHY",
  "key16": "4bKYhMzppK6ynqa2RzxNWhfa37XK8Wvui5KE1fesQZw9j3dEKTBRacjZ8VjKWs8H4ekviEQGVvbfWSRTYAJiLzdo",
  "key17": "5ZE5tPAKR4Aw9aXSE7srfFd42FN3mjntuLxTxrR8WBLDueNnF9fudhCJfTpCnKd5mJ14KgJH5cDxT3i9og7Z1K4C",
  "key18": "577Cr1MgsJdHq7dPgpXGVuytFk1Gd4Qtk4ihXMKymhshMb7JkjPZjMQBKQrFuGtHN8HPBv5BxhznZbJ7UEMUaxqH",
  "key19": "3cfmSnMvQutgJaSDqXmMohYZMD2nFXf366rYk9uK2LvKyZdfa7b8hcA3rxpoiVV9RQfHe7bUcu2uaByFYFkfMfuk",
  "key20": "4qBsSncAM2BMcNxrg4yCCD8fmLuEaanzpwXWwvByTfeJmJxfbHGwgVtpkKdueCHzDKrra2v3nuVAw8zJGcHnHaj",
  "key21": "3Un4iQisVApegt76TyZk9cvqsNVGTCPRWa5o582ZXo5yPT6fFW8ch9LafD18Vs8UrmiK5zkPjyQaUBedNYkNJE9C",
  "key22": "2sBAykZLGoVDDdKTxVfXADCW66cD8dh44Nb2diFSqy7tPdpkhY2iPY9Bh7awJs3mZBt4zxYPSze8QvrbZk1ukZ59",
  "key23": "33CwTodbDoEE5eovEJMnYHWWqj3AbeKSs5ajcYJYGY2cMskQFdAZwxeGczLMdrNkPYwxcJ1B2cRwunnQJkDrCzwL",
  "key24": "2LSWJEsEudrJbHUjRAgLCMZ1yKvkeiw8UxUaWKY4SJcoFcegR5c26FRJBjQS46qdoMb1E7rR8U3SwLwXg4dhW4zf",
  "key25": "3UaAmMiMrp1rn1mEqdahaKZareyTLthbi28DFYwXFW3SfkvLYknEhrHFkZvVUdYQRxFjg2qZpdSmPfSbWyrTStcW",
  "key26": "5hCjhCws46sGpAip3uLuQRsE7dVjLzceDAA5XvmfKvMiQcc3aKHmzfLvAvgHCyCoe8N6fQoG2Cmd6YSrzwsc7vmj",
  "key27": "5NT1eKQ5Y8TZ2xiJbXvuZjdQrhWRT13ceadRu6M3wYLmjSKjasBzb22GgKGfbhzGJxkrb19EVdojxnSKg2KZjeBM"
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
