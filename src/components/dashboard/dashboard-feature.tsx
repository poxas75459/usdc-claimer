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
    "3bMP1sYyLNApmBUh7uRZkeYoLZaq1KVzfMHUrmLQydBznLXk3CNMgSQ2pUWaqWEimg7ahnDRAich1UkVEZZ99kSG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w1VsoadAULqeQUXJSKtRbLhAdSB9FnkajdHstqdt4zkLZ8SX13Kzvs3tVaQGh5jtsMUcYpMeC97zF2gPqCANMYf",
  "key1": "5z2JnAb9Ebyi8G1L21bBFLUWdkzEc77esQ2biYnnA39vE1XwWwd7fS7XgEKwHBMbfaXzYyWLXT3CuaGaRvwSzuCf",
  "key2": "5JnGpGMAXHBhj7jL3yKmYzL3hxLinNmYKupye14SJjD2Sucr4Hqza6QywBQYpbScUvWdyARBP4dj2wtoQoGp2uRD",
  "key3": "5pmdj7fv7KeDysUKia2ycBcdi9mD4AtrcrcmwBVbxU8xMDm2S6FkKQuvFPEFRxBsFUmFkMr1DLg2TmJfCKce2CPD",
  "key4": "YNEVWBEUW4r8YXo5ZyjDZiXsfqnYqMNAPb98fAjcbnRDYxa1wBBcSTVrcVVMonXVxdrZoYuFCZDN9mXXw4vABks",
  "key5": "67H58aJSiDhqL6LbHuN3sVpE5MnFgV1kt9RjTGyevUtQFcEAVQvrxXgJXSFFwpj1tmDVR5gLgp3fchRg4Vxw4jEU",
  "key6": "3HCSZzQsfxcVAXQ4YavYkUQCSGHigGCnwqRhk1TBGLQ9Kc2LMb5EZZiVxLR4roK7c7byQmHscYohTRe1cGjsVBvh",
  "key7": "4DAVzaHVLtRKGuj1r1Mi3PBpbw6buzVgvTiwhEhGrncXxnh3ix6ANjCnRByTykvj7kZKtkfqBJTEPXzWTRAS3mZQ",
  "key8": "5TQaEYr2JcQAUr3a4tf8T5wufVLyq5abHAEidNR61wkhteg56bLJvdLZKvLFwxA3gHg6HMZMdHCCvdvZfrfBsLmd",
  "key9": "5Ji5uK7JqwrrhtStDMmBt9bz7PAR9DbUxAYbVsnvUNVtCq7s7rCYe8tewG7fyDi3pjkjP9e1CinLJ7S56E5kVpYF",
  "key10": "5MYyHzLaffcdVmCAcNLYUHXYxB28nUzhaqFEij9XPh8PyXnZ2fCLR8HryVpXiho5i3nstkdqhaTxZet1uCCR1w3C",
  "key11": "kioL17qzv84Zyoxk13mXYi5gio3kJ4UMWiXZx1Ydmqk69YJFMHCnsLnSDMLJfQuHxPZ2zP3DEk6h2BwtLL8TQDQ",
  "key12": "2tENTBuLhure29emQLsXL6C1DBFD5ovDutXRX9tHJ3TwN551u3kbznGs5oXxP1tseM6itDowE1Zybt3gXJqn1pbg",
  "key13": "5mHERqQoAMXHwLSC69kQ9rK2yjt6xCjoGYfq29eCBiBANVux1LsJEMiv9sZM4Af4FZGQfAjoru6AQqa939nCCRaG",
  "key14": "2WJpC5xajVoQ5LNq8ger5sm9HLFzucvs7EkDbMBTvMsHUG3zkWN6aRyjh9RxEcsmM6or9aoXVxiWepW8Te7TSWqz",
  "key15": "54T5icupogSmjfa9d9vS2f9Re6FcvPsjBZZqF5doW8eg6QHShcVPM5UwJrc7rHwFBUdwGZvzdLVjw3DKYJZiEE2i",
  "key16": "268FtaUayJUQ8pXBJ97VNTYRTBWbsFuzTwzARYmmpfuGqbsXf1bHDUig5vQjgDGuK9VQebohiiaLfBRZWuTLsZfu",
  "key17": "2b6dLKHzQw71y3LVBE2anQPA7SiWmGfPzxdNYdPUCnKJMyD5hUBsgLFXYFMptRSmoxr9DYai4AwT63ULHBT3EuiY",
  "key18": "2L8d6WjaSEVhEePehBvA8p5c4ZYQGkMzb9WBfbadGovVANxkU31TEBajZZpxuDyr7bLhN5ZpZFWyGrYdaiiSKuJQ",
  "key19": "5Nmd1CvJBVza3nRks7v1uFpN5pFbiM4aiFsUB6mAiDt7MwoVhHkxbBVHdqU3EdCyEK1A96UfaJ5XxANRVijWgEFT",
  "key20": "2k6sbqDBPT6i7opF9bHAFXTmyDBv71ebXZiQYQQbpWP5jaA9CTPdp2LQbaYcTvv8cKTrcUNAZYVxhZmsV1FhkLZJ",
  "key21": "UoCwJjtC4C6P7aavbBTaZCNoA8P8Y5rUQc9USgnMKLrepwZLFdpduvZFbBUUQHUXdrDCwmPAdqJXVCtCkrhp7yK",
  "key22": "9EFK1uB6C3L6vjZeqDHAfdQAV2Bpnf69giRcURh8s6vXzmRGJW9BzpfnnHa7maBcJBRLqQbLtvxQ5sh4K7s11jw",
  "key23": "vqyNggYL4NXaJ1h3kpBjnKKHmk3WXAtYzhC6K48RM3rS7Lqf9PkATqBQx2775tY7fXJRJ5gjmVqJPbv4KD6AoBK",
  "key24": "5ZPSgFZTXwXqWAeUENrgmvYucyuEcKTabxbHEQewSQsrukhXnUf6gZcCPLKQqPkqoo1hoYqwHN9BoXjD2AjT1R8u"
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
