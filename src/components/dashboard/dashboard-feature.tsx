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
    "6kkvg9gKRyfJhpmVtED5oB2hueMPB8YyNEEbQ3dsG3p3V4ryWcFErCvWWPofkxNHKAkB7JzGkQj4gqcncCPV7Po"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uAeR1YgD4dZfwLBv2oESM2XwpYcpg5vL6MJq5ryUJYcsYGt1y77beJM3on9DPxJv3H9job7vMijgQan3S2Rs2SJ",
  "key1": "iNvMJsTFRaxnyLHCGberRxJKNXW7yEotSxs39ruseydQh5XVbrX7no45SYUSRHfitWm1CJSKGByiup6PX4SZ1sV",
  "key2": "5XYgHusFUMxd5jovZDstwbzsKMA8o69bqs4yg7DSNbx9yLhDdpLjYWstbxRnjH8wQtQFYM6mJybedMZJnoLKDiDb",
  "key3": "2pScxTWga37aey5WyX6E5eyKQwez1rSvMFn4VoLgokXgjuc3SKdQNzDB2GKDZ6yMLya1JPjH1c28KUAiAvSC62rM",
  "key4": "3HCrWuQaTdHLkYDHVmE1NqkMe5oFboAvy9S5UUhMGbHLTTwCK7sBidta2zS3wn8rqGFxAE9HiYiTFiq455nqrZcH",
  "key5": "2Yi49x9oEmbHfiKpQej4FiDxw2a1M6GpvUi924jAhr1hG87rcZeZZjD2i42Se8ARfZPegUqGhR9eoQrbPCKuxAas",
  "key6": "4rWYnptCnXWpnDC3nfWbrUZjfwj5yvgq2nXsRiurD9poF8rTm1ycHbqeXchXRpZRjtCQiDbKSYrPDTVeFgnz9vav",
  "key7": "zXPsuanMuna9D9ghvrXB7bSh7HuRpqNsQMVB2nB4GDAPJRdEkXXaqyk54FzRc6vYAvZvrUD41pb1db75Bvxgyxs",
  "key8": "3mKN2stkYSYzEcXzYdDpYr754vgY1Pq2d1wNNRxaBFdEG3Y4cNd3vwWbaqzwnd3NssmjaPNvTCBJUSMng8SE7zyZ",
  "key9": "X1aStDdn5Px8XETvAex8er63NWxdVUuPmwAxARYm8eWjjFXcvFWxkX37nDXnaaPS9LbeW6XUxQFMeDKp3uGEXMi",
  "key10": "hRBT5jdmXsTPLcGzhQT6PoVAHTgo2bMqKNvcTPsUzE8ySkf6z2yASn7eZWB97tUNtzqSu9qMwHg7MuREE4LvubA",
  "key11": "3wU9tP5Mwza2L1Bz5ZJ4bwgTQguPcemLqWrDs6tYSVN3Nz82WL1hGctWVeJy4zqHqb8bsqPMHkCdeeNNkoLrnT6z",
  "key12": "5vQ9ci3gXbpkgjfk8TMbWMMykU5y2Aq3thYGWJrnEyePjHTeu8UYReEvMmnJbacm73EMYjCFut3kEdFaQjtK7djV",
  "key13": "4ZY8tcyNwm9AdrgvBs39dUGZFj9gDJdcu4XVsVVpLFVGR5TR2otWWbzYWH1fYT5avmMsifQ4pTmSJ3znyiyM5uR4",
  "key14": "4JCKN3TBWZ42AbRYqHnvbs1Mwr6j7enLcqKasLRBnNZyCJyJkvrLzJYS5J6vbgxTGkDLT3ymKG7jRq2TSmzhTMfo",
  "key15": "tjAPLoyBwVvczj3xo3XFLYJZ98ZFX2N8tUiVdxetYvqTTDG3gUdYBr81s1i22vwGfsrEBgSmLs7guZxmJkm2eAQ",
  "key16": "2Ff6F2EyvbVJ244fbSdWVoqGnvPcXNh2yrddJj4RHBHcgXiuvvnv4LqXf5uiNJTyyEu2WJ8nKW7YEKZav1RZtNbb",
  "key17": "58v7qc2jNSyhUAY9BVNYZBMdqyBTBpL2U8Xb2m9BqwDPU8eTQetrvauis8yjhTx21jHTK5gG2sk4agRucxc9QZso",
  "key18": "cAUsY1eSXQ2KiqQzhX4jrnd6XPHZMgyqzGFBj1ja3bprPueiwo2QCsrNDWAmL68bc84oMjGtVLTwrE4bddALHLX",
  "key19": "3mhaMEW3KrvYqiVDtYUtVGesCDRSQwdRLowxe8kpNBkiMD51nT2mvHfgcXjr9JPaf9eNzxmhEjUKRXgSsFkRun4z",
  "key20": "59hULFzyURZgMo6zWwx1zT2Cm1bUSDCwByUnNSLSxKtTbKazjoTEXGvPTtvezTHTbGWeGpK2i9joE7jxjVFgTjPH",
  "key21": "2yEMy48m6XAnMwwnWV4GNDHmfUrYPCWKV1V5pjiiSojEUYo6HLErS2pa11sWzX3KdNmicPrGqqkSKnbrfvX5mfsD",
  "key22": "2A71QvkogX73wQ4jc7usGargDAnGbHvQ27hq2LefKvaTJJDWLbGvHuXj7qryxbKYNyZ3g5SkACvLUCobQueywZyA",
  "key23": "3M5rA2yitRYJoh7k6E1QYo8qP5qSMAW7Q3YwAHA4ocab5yuks6z2CAzgpYxDoTLAGqf8x5sdSNueY7fhw9igRKC4",
  "key24": "Yw4zpFaYXJES9Nve3aeZMbMsk7JD68Y4T5wy5fnRZYZtS76WYc6rW1KbScsGRoRzx58S7ydYFzQsfEr8Bm8w26V",
  "key25": "3vZwvEngMEPK4i3Yvrk78nfDgHaK7UAWDyH9U3WNduDo17UUh1MLZ79Z7iYq8cXNo3jkeyfssT8xjxnYwu6qfeZu",
  "key26": "5fHHqhWXMKJbHanQZYt1YzpmzGckCPN3C7hpApWEEDhevGxpkYKEna18fpTTzVBgjua1HugEhaa8tcFNc3YfSWwR",
  "key27": "4eEVkvVfiJ6UPgpp8g36MMdYWJ1doMxNzRGThiBQiD2qJL1wYEupHk3ookhjpYgXKqooN1SohNqfMuCKp2a1NpQt",
  "key28": "bLhxmrhpYphtApx27qXpfmMUBYYKdkLcWcEGhQ6jMuod7oq9roo1Kmo1Avpn3fPTTYjwRzBjnqPo2cp77GbLuYq",
  "key29": "4SsUwqNGvj5GHgEY6JKFuejxMcbvMNsdekAvNdvJQxAPy9UPxoPgg4AYFkXWTHuWtLgVBeezzHPfobjnHF8ykk5i"
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
