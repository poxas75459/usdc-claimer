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
    "22yZWWqo2AY7i3om56jQx1mB3VAt7VZeLi5PyZKJf41Q5wHhptMjXW56CjLSzGEpvu7BPW7ptPCi6LJe5Ktgkf5j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ixK6hrJ24jJwDhfS52yWSc8RKnh3jX6axvsxGZCaS1fdMXaTyxWqLVqryLohWH4aPs41tUPVWGfZQdsbFWrfwmZ",
  "key1": "2AkKBkLMutuv6Q5sYSeScKCW5cSwpscaLuYJUAkimfHQadMfJz9BUDC48AbJX8HSWAijR69XHxg2Hn91effUYXeh",
  "key2": "474exqfQbBTgHi8j7NoqCQwD6XWQ4Kq2rtCpH8od2VcgfknyZWL9dVPfpBMxK5rXpH5f14Dma9PRBLE68VHHFzor",
  "key3": "2XMYGsSUFCv2SRBm5kADUYM5tQCeseuomnJt8QmcF5i29LvTVmz26mWyFx9yqhnQmSgwfyVZPZH79hpgC5iZpWZS",
  "key4": "3gkcKm8JsKhpqu3i9vFrgS2jN7Wuh2XFb8uXMu5q2uDPAfFbUeZp1AG8vucy6U6qM2McWxavdX6enB1pfqdWJCt",
  "key5": "2ucQtNymCGqzLxKP7js8X13MMGnMmQUmCkAAcG7v2bkMP2DHxG5Sbg7LhJjWpvQ58LHpG3hsKk2F1JdKzeLeNk5m",
  "key6": "5NeeoZYT47Vf36BmCXQU9vya9T6RoSXD8atsuns4eFGR15Smq3vcFdFntMNvx7QYFHJQmUZXf8fcddtZgXuhHzhB",
  "key7": "4unjNhKTiZe544vRSDvJHidLW6GZkWBbv69GvsRMNWeBjipvjT7occRyFQuYHkj3yUTV5iFcn14KUMeLuZ5mDsfa",
  "key8": "irGN43MNSaB27pbCRv71gDqNuZYNqRiRDEGBtP2k1MqrZrSLKNtag9TWSpRHeEyuFNPusPGVet6nPac7bY6YZPT",
  "key9": "5gLSyhLWFwHUvcgm4JiphoKUbTs8Yswy8HqiSFKfWKrYVUxtUAcLKgxJBwJseXiDMUFZf8s4WjhAonD7SRAXw7KT",
  "key10": "2qBRmJFTRKhqmCf8MYdZjULgFG7ZtjXrLfv7Qa5GZiHuyXfpafiD1MEJiG5VVHMCPhrdSpc2S6yTZ1yQdLfZCeqV",
  "key11": "3FjPifE78D4nJFRwAXPTyLumsAv64r5VCMy32MKdRimGcXHRxyeG6N92groA535WWcHprc9deastDk5FFKkVhh8a",
  "key12": "4reeyumSokixGZKkVjxkir1eGbCpEEk4oTEEjXD71184vqQ3qnCpMybqnbjAfPwdi8zpSBx4hPgx7LvUrjXe1icX",
  "key13": "XNHQ7bwTBwEnY23jDQ9Z27B4L4YZyUhfVrfzv9jfCwi4TKWiMH1LNc2YhZkSTXepxhSpXVsXHScnYZpyngTXjzh",
  "key14": "3y4yLPBnbH2haEygowWPWW6yFw4oJrrctH7cFy5EFNGGQszik5d2MQM5txoDEgT4FaufdECbToLaDwuDuPUJninq",
  "key15": "2HbfgRBruZTtxfMCVk3S6f5zpkWFsNXC7mUeLxCinGvCqRSn2KYb78sExCsXprCHrH1rKH6nnVe6Scvq4NEUXuHa",
  "key16": "2xh9XT1mFJCsrhBb2CFf85xjMV2rWXcZAFSkwvPEs2U1i2h8KKqTLhB9DxYeCowHYP5vW5GQwViAaXK3WxGZ4XLx",
  "key17": "3TeWFYS428vLREG59yCyQ4xGknbvsdaZ6cZ2e3KGhMoS7WqPAvRGR8AzRSa3QgqJLV79oe75VJKUW8ggukAF3byB",
  "key18": "52HRKFBJ248sStym52cFLT8pZijgntm3LcKXpgcGwzkBYYCimvpDcUDPYYrYuxuD9SNPtzGkoN93BnxhufXVpJwG",
  "key19": "3pgiaDjrVVkU7p5pho5nZ9zHpfMgGYEeiigymPuZ6VriwdxhS2X8jch9GMBtcmXEb8n1s211et2xX5oFKQUFCjyw",
  "key20": "4Bz5sNREueLNC1QWfgo9Givfkn2drAS1hBVLu3brPGCvgaHvqdPZWSmEUN39q15PLC5SZqbnR5nRrGdyb4vp5dKh",
  "key21": "2eQ62h6dEWnYKpoBb8NsaQC86oBWAtLUCGes7h65bAAHL652chyE74Qn2aUfe3ruvJafvwzHxLLNv6TpYTVg5Z17",
  "key22": "3MXU7tWHCWK6qYF6Zp3YKWLUNFxTvxG6mQkWt4CG2RVTmnsABCLSExtN2NvY3qPwiJDi2NVCwVPh8WzDbBDunwbo",
  "key23": "ske6T2mgvfSS9yJh56jCCRNdniiCmqmGLDHcM5PjygchYbGHnXiFL6se2AbJDwr2kYiS6TLp7mn3dPvnRhnqwnT",
  "key24": "ELVR6n4zggfyLgozR6S1YHRr2AcxefVtgBfyvUmNMri52QdivCzKQi7jWDvhtWPf9NvQEZXxSsTCuNWp5uAJKgP"
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
