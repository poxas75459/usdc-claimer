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
    "3TUCSEh1pGugG6RCHX6K4ZJoQYw4kiHo1f78zucmPLu8WKZgNxeDaLhy9iMJ8ASQ11RfQkTaenx2osag6XoCQt1R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SQEQHCXyBiT1THmhBHRmBvMFAqKAaiXhcfgzwqggAbxpnZUSfadZyeXQyw5Kv87Ai7LTUgeqdHXdAuDvZxHaeoS",
  "key1": "2pSAQQWFeKmw6CeEoWMYw8rr9i5XjT5u5WK23MYhBahkb8oC2agSH19GUGQZ6zWBe9S3vAY8p1jvkEf2kiMXQ1xc",
  "key2": "2VGGRHcAGGvJHVScfXsPyD9AvH7TWpfxXHLZDPv1XqyRYbBHjZxNtrS14BusMmdXZEf1ygw7EbzQeU7jPU2RTZ1w",
  "key3": "2npVJN3cvn3FmSmQ5UNzr4z2UQd3LPNMSXuxfCqFyZTAs4yeyaR4qy37hsp9WnBammGwekXCmBUWjYSj9r3rpPbh",
  "key4": "2Wx2EmW2SGawQiWC9exceT7qKqp8Appm4HAmVbtt7KzvRHUHy7fwK92H7ULKURkx73Y6hzg9nkaAptjpqdZSwCbC",
  "key5": "3FNaUkSX6uDdPr6Zgr2woC8aHFM23V6rSsn143biNgW2TK8g41Jc7VpbYycARbEqhKrpR54dovoBH8uxsMvUE5MU",
  "key6": "kf36HRG6N5yQAZb8myQZ3cRemYqSf3fZGNiibiti9RxnmEZShxvh3jaAHoWFKBYsUDMVojYkTgGLHpFK6mHS1eT",
  "key7": "2XTUscPwUQQ3DuifFHMHbp52bYRESDXzXwsAZYnzE2uS3kiT4MWcPSrZinh8hmDF3ijvGBiWsGk86anrDZtvqEbp",
  "key8": "2LHjkRmNDFSpgZGaRTLMngQqbftGeo46RZ1xztW2Tod1bb7GYkrmioUggKTenvXUWjyKz9FR5tyM4Kcix8PirAGk",
  "key9": "czmkRDhHDzYEfrWGCJiAKVqgVydpUrQ2XoiAq4wHLkp1M1j5SyH4NFbLGHJJz3nRp3C8PSshHg3TpGGqsEVk39Y",
  "key10": "2fV1GA9MCmuXhR2ziqDDp4fi7rw4nMBRq1teJKHF97X15G5g5VavPxuiQmty8sHSQWykwgDfLDrcoBM96PCPrxd",
  "key11": "2p5VkAdPWZKUJXUum4J5X1RZKaD2NrQzQxTiERew72V4uZc6Cjucs4RFVxR4xudmPc7raYrELwJBCyi8va1E8Kqh",
  "key12": "G6fjtUBXLo48UeMgfRayrgghVbwTxg4twh6BDTxttkdPdXJFcbNeJy51snBFeT4KGauFoSNHQDenZqPbmmoZhcD",
  "key13": "5Kx87WqY9whDzBWds5Uak2xqWFXZs4D2VyfGLMGTpW6CmzwCrk12UnpCGeHsxSkR6MCx5vftHwmUjPburgAVc1LE",
  "key14": "47i5TLbkn7shd4Aue3Fr3o1e6qXbUj1eab8epBjJuLt4fooNe4k3LnqX6gKEPQz1iy9zRpf4mAcETZmPkMXsqCPn",
  "key15": "4cpkxXm7KSDPxRK9FUbyYvZ6dYxoPbwXZZHJ64zVPu7QM5RXsNZMbxZHxrEx8TCa2ZPM2yuypUCV1dfiQXKmGReh",
  "key16": "5XwLoiP9FWtzfFrt7MayEi7k1pZbC92gfv91ngHxcXPtqEvLbtGoTZhrSEYj6QUErhLYT13tjru93vkPTMS1g2oz",
  "key17": "Wr77fWvAvvMPNMooTjMFxER514E3titFA1VrunCSFVhtVLTWc8VmJE6cFH6gjSPbzVeEcWfh9enXdKw2dJ7kzrq",
  "key18": "2VETywywD8Ding3BC5r9Zgq23TJWg94J8NBo4SxSY14JfftbdapJZTCKkVJaPcZ6NbjrnZUMwC7M6tq3a4RCS34V",
  "key19": "53XZej39Qy1dF1icPbGeVt6v4xgef7hxotrLAnzvz6NSHxQcgG96Xbk7qijLDbJkBhSCeLuAYX4zqTnd9LSrhNUF",
  "key20": "2eo9GxntvZhEDJwJJPUEE8jUiQfzgiqXdEcrqmNY9xHvrpLNKEYn2jsi2bA4fhMkeKMDQHLQL4VUw79RW59VEyny",
  "key21": "3Ru8FUUtV18zLC7cDsvcyMYL5VD7X5PT7n9MN4eHLM6D6cUJVdBaL2Yf6hRg244mTeaCMdCXSDxoG4MiTBWHWEon",
  "key22": "Jc8mC2LEgESYVH14if7xd9HHqKagzJPgok5gJuaYh3m3tzp42i4LP28JzuJGaA8JC52BPj27jstqVtvrj8QKz8S",
  "key23": "3gtL5bZx88uGKR2Yo73SJmnqZ8ePxaNiStiyHDFD8uRP6ZUpLVDfJgjAWQjhfx3ipPs4EUiK8VUResSFVdTk48qj",
  "key24": "zFSivHPcPBKCedMDDsJvNAtpQVhBiC6GPeB8ppLBPzaHHRLXzpMwbWjJ1akXHQNu8RbxTEUJE5U4MaFGtyRsphc",
  "key25": "cR89iW1jnavny177ko9QkydFXdUjQRYcknhCpWLq9E4cTmYb5rEB5t7f8vqxLPL5gT9VD7xahNqTP8dNR2eM9sa",
  "key26": "5Vq19VnnZ1yHhEXDU2JRXSZBcGpC1rWvCN4N1yu7gmGUtPrWmwWkHM36cYCSBJzX69eN9c96QSk8FFZ9cPucR6a6",
  "key27": "2p3kL6U7HtcPAVYUhpUUXetEZUhiaPYHvCFr5BCa47GpgSHLeoxBW9kFpJ1f1uJtooUyuhCTdAYKoZ2bfKbd3qr1",
  "key28": "291ohrV4FRtWBREZG1di2NmLWsxVPCfBieXsF3i6DiuWWRYhZhuHE9yuvR1wWsSKZMjdgQbbpSaDSEoCJUnhcc1f",
  "key29": "27JqCkQBtEwY2bJEfT1HChJrissTnMQ8kr2uzo5RtUYGnufuzQ6hXpgPQcCkXGthyky4PrVo78zDFi7dtdJdHcms",
  "key30": "Qo1aYU4tMzx9TXeRwB7PxU77dGyjzrLTavGwG4895eJz9eZBud2BoD3xnVYUScRuk5ikfhUZmN963tGMeRUf2fi",
  "key31": "5m4tVs6keuhZqFGKuMtRwe7GNxrdHqavw8WfxvVuYPdAiDLfArg12nZP7NC63jYwCKKXv9K9V45vunn47Cafj6og",
  "key32": "45gMSpwHn9MWXjsD6scHfbXqTVqru5L6jP37inYMt5VPiKDrwGqWxKL7UTy1nNMR1tw5kk1z3Ly2Wk6JQgFFrUMQ",
  "key33": "DJJF7xrCNQhHrbaxXWs6ngKrukhg6EPuTDuaw6aJbtA4AtTqUFF31AJzgUTw1eri3CpHkZaoWJHrATn8P2khuFw",
  "key34": "rHxY29uwUbMFNNLdfdR8VYaXbs7GJBGaoDS6yYFzVGAcpZzYd6jKSV4WBL4Z644WPG5c9HNnHhLF9TJnKuwk4aQ"
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
