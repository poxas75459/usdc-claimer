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
    "5ocCTXXwVufjschZC3pcLvzaAyGYNqYfYDQABmZacKQ7tjGYGNYme7iWPuY6GN7WK73GxfrBGDipke3AGkJDx8e4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Le4YNFEQP7REzRPh14oVp226p1DLZN7Kbsto2B2a2MKriotsnUgCrh833Q9r7xWapT5mf86sjtP1Q51svNA2V4y",
  "key1": "2RWfHWbUqkdqbzDcXoGEs4XDytDuw6LT1HZvJRv8pGsVF8aECNhjN69MXuoEDDCXDBknhrT2EYXQ9PHU8Lyy7UY8",
  "key2": "4Vz181qGzeBkzDw2vPTEzmC9tQXJff8XnWBmV68PxatKCkguf7TJQQUiAdWoWed34Kwyu1SCBueMv9N9MbNhnq7i",
  "key3": "31yCnKJ6dj9BWr86gb8fEUB3y1LN8oFHjCHrFNVFbfpmWgWxaSRejkPoCSVQp5BhRGktBnrmAJKZJ47VaQu2BL9D",
  "key4": "Xf9XCNdQddLaoYCuf1Vu8CepuoQnw8bVu3iNaMufyBgira9hSw8AkA3rVQQaYcdjHw7xcXdUbWmY6gT5S988DQe",
  "key5": "4rF7cpy5XqALPsvZZXa8rYYJzL7VPAN9D9iCb8JqSpySyMRGrwA9asgEn8eS3cwbemvj3EE3CchuB8EnC2zwMD6o",
  "key6": "5XPY9cTqVi6jWPe619xHAdPayrCXT9zfrpwExJeNTfEebrXSLQ4WfrqU6TbpoPRbXkaexKMGAnowgCs6bjm72ANo",
  "key7": "2egptZNoxBsWpg4aus6wPCg3aQzz74TCxiFTSWLfDgCRXYJKvLTAKcWzZFinwzSTcgqK7wFWUWHxEr5R88vVBMgY",
  "key8": "5t3v7v6KCBNXN95NxKg3Cx41J3m9KH3dpW5W8EAsLYofzRoCqy2njzStqScze3CxDjPEU5kEHW5mu93Er8ZDU6qr",
  "key9": "3vYjc7Po5upoqNWbr8tq2qCw2NxddKKL9wDgAaWWFswMtxx8QCR5A1nfHRzNwteJ1sFDK7Sdiy23nNCpRxEfXUpt",
  "key10": "2AepZ7DjqVGK7tDEiJr79rRPkKFTHVaQVNWHVumL7MibXGzqsaW3vu5BNpU5i5ZjvMvitPn9FwCMvzNMbAvjU3kS",
  "key11": "55serJc37hpmii7prfJ5MjwEx3RHoSMwEXD1Mrmc7kx6jHx2C22yocJfLbyGnBQygAhcKW7pRgnHfeqFdfsVGK1b",
  "key12": "2MyfVBst5oTGdpMMawyECuPnMeVAzyVaHw9ySGcCQWaCXcErLBpPF3bZJa2Hxpu5EX4LtQbSVoAD3Ui8MnpUrdEj",
  "key13": "2VFBRWe74tN3yU1W9ryuXDPH7CdoEQYTiBuJ9quEzB8NvNh8RWAZAczNYFpm96T1ru4CD9RTrHAouWBuakWeB5ih",
  "key14": "2FAFwwbLNZRfxyrwXNsh8opaZRdzpNqXHT2TEB5JmRitdm9MK592ZVxxCoSWoJ5kcFqsC25uZv5uRy5JPB4kxmha",
  "key15": "dGK6vpYZwr5tPjW2PPEtsyAAaRptwW3CcdE6gp1snEvfWMVmSqzq4tCtmh1tZB96WDa8h4BMCumdWp16yHFtDYj",
  "key16": "3aqd6eHLfEaPQj9detoUcbGq81oK6Bwdokq56g4mgcU2e219uqRgWhMQzXc1i1c7tziJ9ugcjJURfrZtJL1yKiNy",
  "key17": "38CYKPovJ1o1yPHU6Xx9NhLDmdycLYnZg91a9zSFMGVRe7HXaoNis955r7LGaXeSvDnwxPyaRBitGPaz6aM8ZQZd",
  "key18": "3CMjzW78jR8Tr8reouycPKsw8RPHXw5LnoKDGeo6QrvGsyex2ymUhZrBrJfs7sRTg69MGL5iLZHnNuJLg2UeCsDn",
  "key19": "56E2dWzAEocu5BWwhq7uPPNsR3zW4uwBdn9RQC5LQKcbz3jtrhizTwrck7xRuwHC8f3wmCMaKhfcYoGSRqtwyZsZ",
  "key20": "4rWWPTZ9H4RgRadEtfoiFEW1EQV4zojs7iLaW9HxCq9mFieV3HTtBaGE8vxtgzUTXSaLup2fi4j7EvpPDFcJAP8c",
  "key21": "5VkQZyRnkqXSq71cqMV1zPyagm8fgyUNxxd3MGLrb6HyUcQhxwoDifzusnahzC76gvtai4bww8fdnLFVcR1Fm4ub",
  "key22": "xbVb93xTyskzxTQhc4ZdzW8e5kSa7fGqCtYGAfJdmdRFND2ck9vozq6fuDTwX9NT6mBc5TtNTwjncE1MVENbsnF",
  "key23": "2XDBmjmBdVvKJxAdYdXXUVjij9A8KYvLckhpz7vvQW6zGvso4dwUeyhAGUUd4y1721DGeq9NT9Ub2Qr1SCxsUjqF",
  "key24": "5tmWDmDXCnP8a7we9XCYZcEuMvwQuuY5QVkGY2isaafjHZ4Yrz8cvn5vLk5DvZ3vbrd89hGFTCdFQVDEzj3Xhx9V"
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
