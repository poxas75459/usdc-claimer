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
    "2Co3pCtQ6WgGCZEPy4Vs3SL7jCjM4YCFDxnR4jHWfhKXUfG1mYXynABpAfQctEuWC9jCfJs5AdDqYrgzCGiKqYVp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PMcNBqFAgRvQFm6DNyh1KEQekumFStTfrbqD2r5697asy1krBbqXbY8DcxBevXFSDjEDb3oRtDj1NVrsJE8Qo1H",
  "key1": "3TRVCKdLSFXyXZmF4ZqyUohXdGLWtuwWnsWQ7PxzB8MDCLa9UKEDMkiNwqfqr6QSbvUpgouPaMvmbbwX946gAQiW",
  "key2": "5ADGSoWLxeFBoLUc8PCSks5rQXbYWfdiEKnfa6oiQkSUiD24YRNftYnSA7joAnkFTzj4eEdhcN42YVq1qrEgqiHR",
  "key3": "SbrkALk7MKk6QHaSVid6hvPbqt8nhQRrkDgNhsQACfQVMzeVHr8oMhddQrRG2RbjNqPCqtVaEFZUNh32yfq6RSV",
  "key4": "4UD7tHDxttVRRBZnFDufF48PWRM2gow4JRjMxVDawR4Q6Md3cEMKdituEN9XG5WByUsqgfUPzNSA3BGKARPXHyHK",
  "key5": "64iPa4TaX3d8dCwuUfM2hsX26wXuNQRPbybic11wpYiggangovzLRAtbEHArSAnLhQy3XRA5h9t67jcNWxYwD1uG",
  "key6": "4Rj3RnJVtifRCCYAnDpFobYsWkpE69DQtbWqvun5Tj84RZGKckaHnquBbu7DaA4uEktMLFztjzi8MLKPyvVCGMYL",
  "key7": "3WxMJtAt5dkijTnNmvsyD9WimKWzAaJpCxapDfPePWQovPbLsZYRA3eNZBYKbPnMdmby8zHryJ3GV59YHBapMJX9",
  "key8": "3Sfx5gVsgedC4gfeMkRKkzWRQpRMuAqATrrdHZZ5oUeM7HxWBRmR1rdZgxvLrxCSZtWda355xje5oc694t6Shyru",
  "key9": "RyCEcq63gGhkRPQXNNUCFFZrvK4ss9cj8kBz5nKTFEbfDrMZiwJCx8WnxfHFA7jeX5DbHefikrpJbBiSxfZdQg6",
  "key10": "43qFkiC8UekXWJbvW1SFEGP87YZjQB9GzuAZxuh5upv2B75TbVYuMvTyZgnB7pZGVvEi5yUbtWUXs3HecDAJoSFd",
  "key11": "5zJVrFLttfUrfZVgqNyF9jyV5kg6QYbau2tMri6bm9xwm3HqZLescsT3FgqLL8sGDxZW4psEDC1ryNDMJ3p7opQB",
  "key12": "2tJNQD4KpGEy4dXo8FMdo4fd9ivKqeVmvRLNwE8PYJEaSNXf483guLEP7GsSaDUdDUTFKRQxTuTaaTL63hYdR9e",
  "key13": "3Ms57gmBwKsqTyJawCPzdKPmoT7Q5ss17rTut1U9kQY8PsM7itEP1enVsSHpsgyKkfQmGdx2xPA3Qo9njEUcqJgT",
  "key14": "2bD3HFGDzubwHe7anoF9nUoTUuRJXqGcTUniZ3YoVyCuCjfBNhp3tLs7eE5FubHLe2nHr8R2ky6BWiTPCb8BZ9CZ",
  "key15": "5f5C6Q3XNmhWmW5dJu8eYP94FYfSq3Q17B51iJFRM8VKBKXgg3T4U4ChQH3Lr4SdkZw5YhF6VFA1HKidtV5XPgY1",
  "key16": "4ni7U3rWttjwouveM6WurpBDSoAftZT7HTc3u1dJ4mUS3NHHNjAsCDbtv581gKhumNMZhnvMYrWorffhFbB5RyHn",
  "key17": "26Ht72vgHkuSzRtFbWxqPY5uWvMbTdqKZarr8LBgnLXkJ5XYE1ym11MQjQ72siNCTLXYtre8mzuZvcw6kPA7347h",
  "key18": "5jmTHbKwn6zN4XaXpB4Z29KAq66FZjABbakPtqNxCUE6XRdgkNHzUDuPtgavkJDMgpizwEaRaYrNrgsp3HZxnKeg",
  "key19": "32n9F7XrU7rEnnA4cDotAo5MSFa1z8feQpRPcrWJzQWVSj9AnqgM7mFDU5krB5Rs22dgxfd9ZdPNVXgZ6Yc3fe2T",
  "key20": "2UUUTtHf63XGTK4XFNzNbXr86CnHnZd1719uhEXtVnUEwwPF5qDmCWPx1kMBsgWQVCmFBvT29yUoTNVcndehDrDE",
  "key21": "4T6qXpqGSunoH4kcaf79CaPMu356qSHtH8ND14h1W9d8zQBuSb476ik2pWdazx9NL63u2f1SYkHwLxfMznycaGHm",
  "key22": "452dZm3gu5HWqqvztk9ZWoZW8QfSVTbApgp4ic4vF1WDffW9z3BsZmY7ka19wiwD64L8KLzsTBJnFfNcBhiPjtbb",
  "key23": "3bHYdt1YhmmUrgkPtzikAHSrHX5j774HrgWvib16EGZLuNDZDzouNYo8YQr7ENzgqVJnQs4q1DM9zLQfhxBy4mwM",
  "key24": "5yevrNK4EV1GhFMgWyUxurzn3fRer8FgXYZE9VSQ9Jmwg7oxFDJ4YNynJuqXYsA5trd8cRs1aYxZCuV96m8oamK1",
  "key25": "tPmX9zDE6idd3s4PQeHpPLrwVnyCiq9AYvS4VC1b7iTeUSD4PK7xE4aZjV5tfgjS1h1rZsr5MzWoGhy1KeysKVM",
  "key26": "CbPDKtn7BzbWVVYQiJVMU6xgzKNt7BuS7kshZnuAyTueMGH3wFo7NfdPh9m4MU4PEp95KwJNsqQMJpRBfeeYTq1",
  "key27": "4jHmZDwa4FpxY2fpnzBk8jeErUfs785KnXiLTgfvQ5Wp5t9aYSKeQiqMQhtwehQdyFKTaZfedpfVfBrz5BJT95FU",
  "key28": "2TR7B1YGwddjNW9cc8Vxv27SD2uiMJVgw2pjkTUAYDQwchXU9L3dSbNNCp855UvtMCo2ThnfhPhXSPtFz9YQpNSr",
  "key29": "4ZrqMQmPtspoF4sMtfK4JcteFvDx7ewnsMHEQDW4qgBMhnY4ECvPcgSs19yieR2mLHCmhJDn8sEGBdncLRudW2ZT",
  "key30": "34jx5cHihzuoeurfsdKRtipSdhFDtaKBuz2U2nxysez3t96Eg9YN9PLvhFqrzY5MfnHLeYVw8tL9cxB1fVFjDHpw",
  "key31": "5VBRZBzUSUJ9e56UCb7MHXacicJ55QwYpSyyVDVUcrCucU7y1v66ryFkw7C8rK4kEgsMAhLLprY4g2PQKbaAbNLg",
  "key32": "5eZFmyzymu452bmVycpKWcAvYh3PAHuGa4qojcaJEL5foBVzheqEvdmaoXEqCN2jCn8nZBLa8nq2ch8vSgyC7ER6",
  "key33": "2UQgXEA9SN8rNzYG8r4vpdMwXqwbvTvLdnLHo55anP4Qazzn9ucM3fZBo8PnvzLfxN7B9QFQy9tJuYRQ4L7S5Dee"
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
