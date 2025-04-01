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
    "67pbxwNeiMf9BRcBgoM58iFCV3V348H7SiGhUbFAqTUedGCzQyEB7zz3PTkvA83wvZPvq7rFrhzfKHEXEuxwPQy1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xzG3PW3VASueuGrCPqFQZdrDgywNHPzCjECzHzfiyh8b1ojUnhwgYvijocbZU4WNPrB6ar982V7KSbrPonAGFfu",
  "key1": "sb9oJoNmzYEhSWQ14ELCQuoG4nkFkiKj2kuxQayEHRb92aLE3S8Ai62XyrkmY5TfsTjfhEgDaaVamjZfct7YPGj",
  "key2": "27t8EcfHsVExiUs2RfkojKgXR9rBaYTbBsUWELz5gJinAj8HdoMdsyowyVLKdcVzMcw8vDwTqRwvRsQ1n8D3nfpw",
  "key3": "4rUcAiHQqzm2kJf8bvY6Fqb8RV6zavFWXnwtdTeTnRXeFQmSERqDXLfAsf2tK2qe2snKo5FVUUKM6JcdtY9QQf5n",
  "key4": "31T5c5NXZ4pZxduTcX1oAxwrabG2eB1V473Mm9v1N7vfB28agMynNGmGuUFvTLa1sXNnpd6456aPwnY7R2oLxsZj",
  "key5": "2KXwo5heo2NaHfSUg43qfVqENY7B4V2sY5bewGXKvhTJSDTa9y39ZFFJXoSo96BLebGmxY41YpqDwUyqj5XKXJZy",
  "key6": "4HVG1JSA6o2vVuMrJsNT53JxiRKXSkSFW7Vn36Ax3YFJwRN3AVaJ7LNKc9rw9vNiJQaBSdG7WWfbPsPX9FJYuHeN",
  "key7": "3Wg3Vxi7eWq6WfY9ATQhSE8Sve1YGFy9iRgcEaqEiZ2Zy4Wtc7BgJw3GF8YubBk39sKFEqLLM2GRPiEVgDQS2STz",
  "key8": "bAoMxZVfEjtKVqtMMW9fb5DtoWjsy6k1n23JUF5YgBtDxBiiKrHCuATiiaGd19DfMALGs22VsqmTG6kuAr55qQR",
  "key9": "LArnC7pFhzCe28iWoDkCB6WtnkdPPJ1nZEh61eNJB6yX7HkS6Dg9moBKzUWgQSFtPZbVMEKcXHPPgd9QbViTvGz",
  "key10": "67Rxz9maa4gaTN3HCBrkxeCXf4GNqxpyC7JTL6c3HsZRd6rkJjcJHRPJqo7BbktGKVBJgWAuvdedrVJ14deJA7U3",
  "key11": "2c9pkYyiWWvsR8zEycqz7Ub39VnjR19PjpNHbiDjvqwwfa6CduiCageVynUYfVgCPzBGBriZPF35D1KDzLFebhN2",
  "key12": "32C6u2mQgDkjqKXw8cKMRjgPhURUmtQfW3XTPzjvmPLN25VDfMGNCrqecUvsPbMDQBR7KZYMkLSMnYG61aK5QSNv",
  "key13": "HfwjPM9ZHZ62Bb7RqbjYUie42yLikj7s4q2pMKwBPQS3KZHYZqQrmf2a5RrkH5MjFT99AT26Kp6njAUANpPf3ke",
  "key14": "3QkkoW1EuSHVVbAeSroxCcbnM459qS4c6UEYj3N7XxVnufcFuAg89U9v9THpv7pf3z1qFiHChCrKowjff94wA7tz",
  "key15": "pypATWT5DP4KWJWEcaJ5sJa4BBr9xHUeXbNdBejWYXe4NSr6ahwGTKkQVkG4VEekLzrqsYFYKw3scwmFi3UQTuA",
  "key16": "5C24h5zbqTrV8v1YYdEoUm46SkHh9UXL4hNzyYkRnuovzWGiSeP3pqfvGC62JtSw88DdAGgUSz852HZv7r6SPrhb",
  "key17": "2kEcXNffX9BgDjejF1Y3wwVx4EC56FWK3hrEpWcvv7NSPZZyFxaYSxHoGFKE94MLiWpYrcMSDs27kgKUstgvMvHE",
  "key18": "2kPaTPUznVRWeUXcC3vxFqA5Pa1RavCMQWfvFWHwURuatgw87jMsqpnFXFgaWpMmBXbSyrJjmJ4JTt3CCS3L9FsS",
  "key19": "VJgqDcAHAbrHNpvaajhbMNo45sS5srnxSBJS5zmCmTM185Ewy3qU5C1DfE11ZcGxVo53DS66aSyDqnTEYbCjKKv",
  "key20": "2SXh6Zioo8uYRBLtof8Wp3WsJskkqjiGeNkAcekYkigqXAWUWoQeZJeAtcPELg4XmRmEipYb2VbAsUrQv7CyHcg4",
  "key21": "RPjnnotoxnRjkfP5e8APsMy3QFLgg66JYzAwutrPUXX2HU53kwrE2ySoYwdZ8ZDpg9s6aW57dFy3KHfeSK5eyrz",
  "key22": "2dSopd4sMySHcJXtVQTZztYbz8BnW2J4Nj8iSNAmS6jTUGosnn2jm7W5CW1ywmUcFeK325oQxgfFzmqkBBWW7WEL",
  "key23": "62f5wvHEudLhBSUVEiwsFhXUjZocr6DK2YKziZ1SGPTtCnvrvPBikvZvJZQspz2WhP3svdftqbonMuofhrYVA1AW",
  "key24": "2xniSo5onGC2DL3qTURQCWECWqKrVXKqQcXtE66DuVfbJFQm3tVenfioiHBQsC3bETRj7Ep6MBH6ps9Pq2iUmHkd",
  "key25": "41NFdtZR9dxxxrPZaquju3oHHPYFAmu3KbyxWsrUPi3HHseMbd1LPZpPe5MGbxeyy2SeKqXuu7dfKTyfdDNuw5Xf"
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
