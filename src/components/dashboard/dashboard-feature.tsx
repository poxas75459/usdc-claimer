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
    "2fmzNW8GS5ip824iZebaqgU8RgRPYfMcRmP3BjnuFqXokgT475EDggXeP6NRowKvia3qGhyijp6GZBzurHZUdGjT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gR4sRWDvAFJfYTy45Sbd287qws7dbEfP4ke8F8PDKikLEWKCnnUUbSjAYS88c5i83YkxvydS474GF6LUsYxGJCJ",
  "key1": "2hpw1TR3R5vuSjNeRxdoCCnDCSCZEn3Qvxh5YihobZwpwAVpDTEv2HfDS9XQE9uW79uGUVbwgPhvmE7xbKFDUwbr",
  "key2": "5fZZfG5ArSvEMzPNCkTm7kS4BXSjSU1ZM4xLszszRZJ3d2A1GfJeTLecmnSanffvfa7kwPywhkqbmMAJoEvgLNcn",
  "key3": "4PFaihr8Zc9ckmvBz52DSWwJg197JnJxJSMFrhy4LgKxHgF8fXyZnhK5549JX58wWkGSiRq4pM764SDsKCmKSa2J",
  "key4": "5rXw1JXECXRGHXvcnJLtkhsmL8zec2ugZSc6CWFiyqDFVdBVWgzPXj7vBuEGuq16V3geic9kBhVTB6jGkTTmu3FJ",
  "key5": "JAkYmkSARX5t7oPBed8wSnB3k71q5h3WAgPPahVH8syj2EkcBCPkU1qvB3XCzUVDh8qDXtrbUw8kBRSc8W8qK24",
  "key6": "42L7qJeg9kVattanTeZZC6BnNFCYWF8556tW3uiJbvRgpJK3oc9d7PAUQLigF68aP5DqxN2ijbgVAzX1JZTF5oAs",
  "key7": "NTUNuZpn1ycQECMaia6HDLETD6GMWUaJbMBJjCyTG8UH3HFEdenJQDxSYKwcnt9F6QMtHLP2NspNvUM2GjsxFfm",
  "key8": "5oTKaHUAyGX5EwBk3cH9WnR6M2vhCNKTNDAFhjjAu9Wq4s2px8f5xu6bGWtDviRGSHM6yMMTcByyqvZ8RDrAWQDV",
  "key9": "2PSv6XmcXpewgHyeshBGU8VoC2opS6QbhQhxwU87xpH9FoGUGovZu4eT5cXJNarXWahHM6N3MBKmLJsNuBo5YUWf",
  "key10": "xszE29Ud1nftrycgZqYLSpCQ8byykLc2Xyqj6B38qAKTJHatj7WwoZVWpwjK6J2SDqquESg6BX8xmn5fxK9KDQa",
  "key11": "UynnDNZwLwWEYvVzWGiVn3vwAzLa7UEDa3hnrJqRXiCK2XkuJEsrcPYV5D5uUpuPc5bXtEn1W6Ynnn42vHkpNvi",
  "key12": "4PrP5bJvjwbajvGWxvGYgN66kkQs7Qdj7D4YVT6Q2PExnGDUipecnoMUtuzLEp2TXx5bs39ZWfqgc9v1QyKTDeQn",
  "key13": "3WKfhCShEdQFTTGQ5jKrfKBgSjrJn5UArQY19fiWu1yyppmNhjPVNAky7d62ZW5NBDHeTcZQ8JDZt1kyyWBU8Hg2",
  "key14": "61SKpboJdCf9TXadwxW9DE5cjgPrYkvvZMGvYUMtBjvRNsX1h9G5s7Lix5y3BzWRBEHiZ2qCZwwDxciYtZXaDTQa",
  "key15": "4C8QFZcfPa3UAnub9fDUx4YZoWSkjLygjhdgEMTgdF4QCZp7jjVFFQFmuJ82tL7p8joq1ErRSbqhuMPcHeM1qoDs",
  "key16": "u1nns7fr69fyTFpg4ZiVqcH1AsCmgcXbkw4XQX7MQWNktCKeVHn87jQPMps4TMY6onCJA1FN9vLwRqkUm397Rdc",
  "key17": "ofUuoZgkdnrKCqj2VPGjzFHJ4UUmEbFk4h7YU1J8ajQMj78S6e2Mj5EcaHsJrwhxer7M7LQT3RYwi8kJWb6zeHi",
  "key18": "3hDyiAC6kNnGAxapVFftQj7wjCQJoTLnLKfWm9Mchtpxtu4tavsGcmtzk6V11pQ2riC8Mc35rHumxXsKmwiYUMxT",
  "key19": "4EGZ2b7asHkxKf97suMsbNPbZegxYYz7XBKfGRwB7RbMavyRujcJwJtC9hBqMAvHHs7LjjVmLmYtrjzeSSFYB3Mu",
  "key20": "AnHncXVhVyUMd8ZQ4se9hY2qfVP14GSPm3FCXq8WtyxNuMmm2HLj5zTMRwstU5LqS3LXRHdP6MKaA9tY3rfdAwT",
  "key21": "Gm5osGHLTQVK2fkKnowXNetNsktgAScyq5rZMFVRQQxCh7CsEbdHdoqQoADhN14DqdtfF6YvX3ZUCLMPuoq53yM",
  "key22": "5AjfDNZizSVqfuCxkFfvcN7KZbTeK6ZU7Kr9GUu4scNBwepfzsT1ySy8fXHhCfw5Gq53G73jmeJcqHM4Sq3A3V4k",
  "key23": "Q4dZeJxEyxLXso43y3NB26fLFCo6ZdqGLrnEKvsbWY8AExAtkzm8BghvJ69Z5PiNe3mctMCc6tqP1VmjaEiGCM9",
  "key24": "2pThJPHRBHRSRWMqivyMAjdruKeqwR1yoChe48iY6uEGCaH2BrdEpLNBzahecnc7C7yVJgg2cXLgy35xoRQRU5RN"
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
