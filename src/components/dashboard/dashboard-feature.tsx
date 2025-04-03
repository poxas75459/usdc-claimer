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
    "33wNo8fm2xZBhUgfT4FxYS3gbdRgtfNd3DRKBUoKak9Mj23WFVRsGZ1MUmzwKthRLsBSwbpQpMoV31UwbZjhSVYF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rVYb4d1Z2KM3zn5rmtQ8KbQuPfcVGTNGDJi6MyqgeXCrqakXradnTakhmRbUvfap38bukaX1S6M7EwAkJdWjFKr",
  "key1": "nHP1SkizvFwSbB2pizgfFWWdboDeZcMW1QibJqn979LPZAEBK48t8QrvQaqM1PVbZBdLtZ45WkjrFFetUWNVyeV",
  "key2": "5iBwAgsatrYbzjGvWWBsBQnpma96fPx8UfC5AgGfQ6MPejJUUfJbXqdfq6BuesptSfwNuBjkhwmVwBTyYU96YKrv",
  "key3": "2J12EMdc5aEEJwhG6QgGUH3jXMhjuXp29RrWajWWgfRgAfpJAzHdJWWXqo886hSEZGFLahn2Kq1GZW7Qt6iYQLen",
  "key4": "2TondNhSyXoWNdyZn7Tshqu4c1cyjyiEDNCFMysvi8i1b6fVugvkmspmfC9FidsXx1CR9aMCLKPmRdHK14tXY2jL",
  "key5": "495JDYmZZwWSMeRodzSXR8qcwMXepbeyzVrL2koc16nAnNvb5MSJCA1Ah6Pu5oxDvwQCZxzvnYabJi9sF6veoU7Y",
  "key6": "5fd11Si3mKG2cUbrb6DaoZGSHvfmhZYKGaAtQm1gFxyTgTSLU8rpNTSpeYrD1TkeXdGt8vs8cvcCnAP8suJxdAN8",
  "key7": "5icfEr7XafNTQkKBuw1aFMQRB1vcvqgeKEqYe2Y1jd2eMh1xXxE6EpuSCqUHUsNzx2y4EdarKrQ49YcQvkh6iqid",
  "key8": "29TSQMeFp1S1xVJZhH5VqFY38hH44ZweLCsmGqkb7s5a7vukZJrSB71bbZH7XnmbcqdEAx5uAbJkAnuR1dz2pzDD",
  "key9": "DVkGnVjgnQh8Kr2YJxHR6QAQZqhmsiN6oRpP7W9Vy3sADqGXWCBohkFP1oELJrrnP9QB8mBhLrqUXCJZmsocPV9",
  "key10": "HyLZgGtHTJ87bgKK2HLdVZFZ8agSBe5vSedrDq5bGJJRwdpiyi1KKApYi5WA6tKQc9JTQGjaaKYUEF9xECKZeYP",
  "key11": "BsXq3GsPN3qCwRXmmSWivaf1EegCAPLvUueKbraTaEjs3Y6Dbd8yBFiYc147YasLiyEh5CrUzSxViAehRTGDvyV",
  "key12": "4PNc5aomviBmxPb8QmRvrhYrvbcYNcv2AeK394jFLHk8cH9PdN1H2PuXPsut5bRzfS98R33SSievtsnwwaDWPc7L",
  "key13": "2PBeisU3PbEYdpZBceQkjqJdiRQdpP3ZAhHjqWVH8TLURU8mnGtA3SgeuV8S69JMkfGoMc1A2amgFJ4uBjW7Nrkw",
  "key14": "35yEBT4BeSYVUHz8cf9RujkD9iiQsT4cDRFChLQLD9aDhPBrLhv7T2dsfSJbLaaSHFFQRueEisTJqyDeAQgaWQJF",
  "key15": "469E1iiHduYQPh3xBmtBTsUhhhRMWvdW6Sya9PREwysy4VDQgViGoU4MrAcYCfWiNrFzLHeV8pyBaFe7uhCqNmnb",
  "key16": "56djQ47CEmFG1ZrmpbocNbzwngJehnsb1FzMjsuJyQwpUJgrMhuWpKyBm7KYpgyBrhqqZMqgBzL9eYhGhMBLe2aw",
  "key17": "3hmAnERYyFe2ctpwEZUiPRfZfUmMAFmSo84jHwYayDTMyBHEZg9UGRsRH5upXn9JqJM2YtEN6dYd9TaWzJ9XKFgW",
  "key18": "5Hfa9C7hW6NM9Q9KELp8D1aEJCjjrwBdXkVx2tHncnmEMLvp4ubnfnGzvWjVWf2ekpremgBKcRDjDCD7PxiyaQoJ",
  "key19": "3UgQ8XyV43TfwFDEkrEFWFKvT5LfuRnj7Lt7wzztBFCtYSJ8HLkLN2Fkvc95LGW4CcKGcau27wNDQ1txzsu5n6Rf",
  "key20": "3ZDtW4pXyjm6aCBqGgMPRLb2XN1PC7ZAtsWcX7TQGYVJamgRUkAxFVG8e7wnef4hRmLko7LAkBhKyWcp5fVdxoX1",
  "key21": "2BsjyJQtJ6oWizHgFTkNaCtZnMZZgjBK9F2CpivUBpkweJTxVCpaR6gt3KvUrEryUYmiUgcXwiDRBqsHxbNHiUri",
  "key22": "Voy774TzrpLA2Fun8WwPqqkXG67Px6hxTM8LH96th6sNUFbHDY6ixNEPWtys4AdKCaydKeuEYytA2vhVVSwj8cn",
  "key23": "4iV4uE6TL3drUyfHVwze9mf39MUofYZkqsZzh1NsZ9zwyBmJC4yPcgUtHq6R1U2NdyGvRARpDjMNfrtgedy5RmJW",
  "key24": "2rcXMwzmkRV92fZr8F9XoU8UY39FaQ65kDWLJymK1a9sWoJ1dX96qNKFaG9i7aGN4sMaZHBgaqzbU9JrkW3CofiL",
  "key25": "2gUNFTHeAskFVVJfU2MFhF2HssoxvAvwfaLbSsphkpgR8VBgwtu94p6G3oDNxaybotkVogFhdJnVT2BxzwXF5ihG",
  "key26": "3rcyZtDzgN5dv3QE5MmYewnGuS7uuYz9oCQoFxyPFd6rh9LHgcWZUymXCwoRHNUgXJG6VkKTRNrQQuaq6C6LmXkp",
  "key27": "3QTqotsDH9ni8ZVGKGH4HzKTFRUTTgkrKyjkquo7F5otjVn1K8WE2d5naCZBJc6Vw1Kknz4zUrTsFFuDNX1mfjWD"
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
