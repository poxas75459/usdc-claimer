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
    "51L1FsWf9TX2j5iyeHZz4DG6hbvMambfpufVStcMGGDQMjdkPjAdyKuub7naw8f3SR1kM4YDZ42GrDqc8vsFx1KR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FzPpEj5gWSUBCDAGntJBcmnNXNYLEoEYe8XSJNfC6gmeM95XcdxgH8h8ksotRVhEdaT5aUaQFyyQwAxQXXLB7aE",
  "key1": "KW8y8LnUhx5B1Up3QKLvE6XzxgkPJEHFbtB5LrqMHrpfWzxTzvd3acMwLMxnUcbQbUtiW588gMrxreixEeYpFCc",
  "key2": "3U4fFAWbHmPByCYUKdmd8jRgA1aGWBofQxVdQPBrL2Vw9e5evaQucBcFRDktfg5R2S1J4hT35GQYhCn8b8ixPM4a",
  "key3": "jRwwaBpS4q6XVxu7KVATAXK7XPotEiCmefWodmNptG81paDAyVC5fpgqZSu2dnKUQUt6DtgpX7gLo4yGzk6hUbV",
  "key4": "2yxtDXsK6ssjkYwMLgGcYXyJ6Jkzbude6Jso3VpgYFoLAWdggfM3HYwr9kEmjEVJwEfwQA9q1iPdk1hBX8Gs5tyw",
  "key5": "33uCRCaCB8bf7LV2SH87DM4cV5oxKEY9xkLBm3qogND7Df76GLV5r2ZmzxaRX2LrxNUUxHH6uk2Y19PxBWKuHHky",
  "key6": "W6YcskKsJq2B7ExA2W3etcWHSziuzj2aMc28A3Vs7jkCQ7ApoCxPTjGKPu7ps1KatcX9NGAHvcQkpzzGhBUVqXH",
  "key7": "rdxyA9FjHj1Cs8zm64YVmxAD68SnTxaG73N5soL3xgJxSQdLwFFHQ2kRMkkvUSVobY8TkaewAiEMQjjwPrZwtQ6",
  "key8": "3k2nzBwjEemeThzopMS1itUBMTKzWA2ZsAdiPwDcpHm8gTpc68ZeNQ247UgJdKpci8S8enfhJF98pn3DQhS1DeBs",
  "key9": "3Rbkj5ZaeaH3mPnyAwghByCTdNmjEhCdJMMBynQgWU4GFJfWET8Ufrt2gyVBYwqx6CBVUXkc8vfCG1qymPw9RfZ7",
  "key10": "VBKNqgZpcuKfGheBoMkZEtv4SvGDFiDZmw9NAyrbNiLwQu2ryrFBGnBSatV5xDGyE4nR5R2rfRerR9QvZXCeZwt",
  "key11": "4cuz5TXGN3YtsCKQdtpVKcxAYZo8wR1vdNxV6eBxwqyyE6rZKqhotp99GE8DaRLZSHExkv7ahvfKZPGS1PwDKByR",
  "key12": "2L8MvYkCzwhQHeuaHC2MC8xXAutVq9dU2GHtMChx32DJB6C5VVgwrMhL9w19QxsXRMuAWxGg9L8YdXXA3MNKmMkY",
  "key13": "3JinpE2TWox9PT3WV2GRPV8hxXmaWY9Rm8MCDCXBjiZLi3ZZbEHv5SWNcszcy2ZVnohkbpQkUn4BPg4HsxE2xhmH",
  "key14": "5cDtRx7HD2RaSFqKRpLuiVMXrG22oumqCoXA7PAybAqREKoKRanbyFtXH8eMSDfx9JV8U8MdmVCwWSvEC6KFuHPd",
  "key15": "3dtqSc9ULFA47SZYrWzb6sQoPapeHWteSSGbN15gUBsjTFJrdkNvvq7mXcKYuYMhwKJunNgTDvCYZ4CgiQpxjMxA",
  "key16": "22YoyWMvUdQggPXrLxK1JDTiEwougbNMESTVJSmVXHRV1iHqSrUaNYwsJYmSvNdLtiJJzLGgNCqRDHeJiQGJNFCC",
  "key17": "54u5985AHKEeZbKGUfUEdMP61ePG57Cm39LMKUYjhwspZUxwfsyYvLjPPrWdecZtMLEEtckfQYKkUgYdssxLRLDY",
  "key18": "5es8MZbgjsgeu15P5SawR56tZNuQq5G7cy8tXcWytQVQj5PdndyyiWP2M5UtNhALF6i5ZXcqRDX7ZmXuCk9oSQr5",
  "key19": "3ZRkMz5q5xpmm6a3a8itwLWx5M4ct9T5GW5hX4ZoAtY7yPFpVLVkWZsp7Vo5vDSWiXJGgsYreHrsvXVrpfmdGvf6",
  "key20": "3RGKC6EiDiwwwi1J89EHuJ9T7cqeRYL8e6Vvf4Uhsdu4fD7E57bsyp2bt5LaiKhWrkYTXvmNx76K4fpze8ki6BWa",
  "key21": "32Hs2UALKRmkUp68ADsT8BVkBq67rZRvoEByuCAFdWro3dEgDYH5rpcxKWJvbF1VnLUk61ZsEY2bBQcf7WeSZHkW",
  "key22": "BZ7Tnrdwn2jmqzfbfZuyYC78iA7ucaRKZrQwxx8FmhF9fG8rnCZoWnXySbCmkhay89KhWFAKCyP92ZiaWm17sFX",
  "key23": "52dn3deY2ptqYssXE6pEq3yjWqTDMHqgHxJsdjbbT4db7gHFFqeNNXJqb4vMaXQ5L6pT6yQD8yyzJ6pwKqCZFWXS",
  "key24": "3jP64CSWE4eGYYoCdP2Yk5oa1zeAwx7KGyJXHfZ1FdVXPTQCyJuwfh1ETLjy8fdYeSgZyQuomCwcZ8NuyDYngRDV",
  "key25": "eT6pY7vUD26HP3j2zVH1TsgNgktEEUVCbBsDbmpjsGzHD2PdaBQ8FUUpbjLWc2dZ7NZbJ75VgZMpLzyrdzwggxs"
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
