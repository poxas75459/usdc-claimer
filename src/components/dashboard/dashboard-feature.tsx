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
    "3q8q3AoaxLG7mKwKqG64ujKKXZmE2KUcfQA6wrbZDRBE5nxe5Qz2UK2mLK6wXA3NZd9uHBLQSZLBm8JnojAHp7sm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LhetrN32F5UvJAJuwKaGwhnoNLUH39Qt4ZVLG6VmWLdFYnFrHh6mDoLPiRaQeDXw1x1cyEeeS5rJMbdz7qTsX9x",
  "key1": "59fW9E7HB5i1WPCxTEkpZJfB7zs66JbgQhpoTXJPvs7H8EgASQDETKXmA6L21JKnLz9EnCCuMnWXDwDzEZ6mYEBK",
  "key2": "3YZfa7QUBNJk4FaJ6dPwgyewrkzyKE2aGbnNKSnUufLeZ4NkmAsVqtwvPY4dCEiLFaXQRJFicaZzZQCtafkjYXDZ",
  "key3": "3zpQZTmpmhJN3vK7NhnRphE7nBik1JogBsPivFVSPnJGMSTLuyfCsgRCtjqAJYK7qt8KAxqPwd5M1eDPZUThaHZc",
  "key4": "5gFfy2ky1MwkdaztLkG3FF9c6AcJxGzFcR2NzpWFAX8AzGVeAvBUNBrfsrbFvLvZZQHFEaGvxUar6ShtfovteAFG",
  "key5": "2TSN5MHhXkphbuSvCqfDRXsWaFB76Lh3y5W749WoPmEAvUzAEDjfUVhQKRfy22eubejTqgef5RmtzE2v7KGHsHt1",
  "key6": "3VWkqdbLF9iJgoZkBG2nP3x5jK7ZQvQD8jE11shkpe22FiA6SxaYaSRDWwUhs9gAofagt7QszUuGnw3UUCF5nLoL",
  "key7": "rJmH7ajzH62DXyTuEQHTvL76B1drTgqk5XkqVgF5aTfffnncUckdTUiefxMoHriv8pfKqTzRfp2cR2RYyWg1M9g",
  "key8": "8FujjEQRKc4cMqNEt5pkAH2QhyEpNeVmQutDbDWGdrxtcp8BoiaC9tKi1nUcG13tfn6NCNYR4wxwsivVh7sQq9t",
  "key9": "4vgLFpRFAzea5SCG1bZiciUH1Ee4NAyzTTLhmBEQQLF3aL7uDyMF3UziFdZzdgmbJiNvg6RzT2XibUgDe5AZXLzf",
  "key10": "3qhaXr1SuJjxxVxF6dRgrdek42kZXRxygNezBLjhLTJj3XzzoVMfDt9e3B31oqk6qHXHWV4UzCBUZ6rMAPcMhATe",
  "key11": "3JaYT1kwg86fCiKapuZEh3B6Aa4jfEoECeXpdPLfLQWkX87f1r3yTRkXUTe9AVRduRaTQbH83GwY2KDszNCV5M5F",
  "key12": "2DTh1i3xfskKJm6wTfbLKRBpq7ysJyHJoKPsHo1vkdjVie5tZpjQ8YgmrCGtU6P1aDsYeuXfescaZT7evENDRjbf",
  "key13": "2252qMQHEAgUqd2gHY3gsN6L1SXL6ePxjCU9X5u1Tv9m3W2ixyi3gTuPZY6ymtvRx5fH1Hi7ZEZJJ2jmSEzTWqFy",
  "key14": "22XBnAWLodf19exKsoue1PqX5k6yowSVzZRVcWNjk2oC2vdCXYtTqfYfXjf8emg2MHL96885srw8xCnJGRuvpfuj",
  "key15": "4k565N87bkeLKG2Tpr3ctwaJoMmxdzR4D2XBmoRLCsN9izQE5HE82gA4vDQ6V5hHoUqQCgQp4CPkYSjvZJTSsML",
  "key16": "22RAagtAoy6kFMnx4zbyyNTeEuv7afpXKNDANkmwqSsZ8QARMomkWW5EZcAHrScHZzT9zLaiEAHhsVnMuURijWs7",
  "key17": "2iFpeSNcBmtNpcLwQADT9yx6GYqposRWxAdrPjC8ivcBXf2R665pGXjjjNnZQgYximz4TaxSSo7K1CLyHMcdfDoq",
  "key18": "4bk4zhJVajJjzQ4sXyhHWfPx4DHSBNQsqdokTWXXnP5vEZZXLaU2Sh4zzCrDrvjuqde4EM9MgBxM9jbXHpoj7psb",
  "key19": "HiaWNWBkufpDbSBk6GsHLQnoVsoHeNdMnKsbnprh7JD877ENUWiABtxUqy1C7uLRFJ25jnpMwonWtcVGzz8bGTH",
  "key20": "4sJouQcNUPBmfHEqNTts22gZrq2RhxyF2W69nQ1WR1x4MVYu4WaJj885BfWJiVTf6QVNbh5EitsP7bBmF5vceRZ8",
  "key21": "fAsbCDecmPuBazzdAgHQnkS48X9zm82aaEr6oH5MGjcanyRzaDTYa76eqUWRuzT7Vv562c9kQiwJouWC6ziY4ap",
  "key22": "3E3YH3fmhj1igafjSXueday3XQizetyjY69MXW8axeEWUvBocdo9of46xA9GioA2qQ3TPpFAZyiwDayXaQyu3d5G",
  "key23": "2EMRb9p4LWHYYHe6Ktv3YGdNvGyPbqaj4QzVD6HsXaQwvDVFLK6epKUf3xfRYRpC1kBRfdFoE83Q7qAkSf7WY35d",
  "key24": "5m3HixgNqrMfLoUXrZPURrnnM8N16d1gLVucjEoAZPwZ6acRpXUQ9dwwwoyrvcZQxv7GXaeVGRCZNYdBoNMf8Wyy",
  "key25": "2xSmm2ikNUajvQf2eKgrHYecpX5nad5MzNg3qnVdKsW8wUgLruvGepvASNoeBP8mmriG3GNqpJXMfXhLd27fK3c3"
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
