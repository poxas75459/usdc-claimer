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
    "5ur1UPcB5FCyo28P6YiHhCyJhmrU7MMVuc597SzVfF57UsiaCfNZxH4GVipttMLTbAAsxtuMu9BxKumZtsPn9bni"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gGSmkKdL7SKTpPNxQKdB4LXQhjSga1PC9x6ik9DPZ5zmNiQsw24qbiePbS4fU7rpuEfUyDW5kCeF8C3QmVbeRQ8",
  "key1": "2wSWbu5BfZ4kKXN3qtiwvEgmKogYfrMCJffZXPNUaTRk9A7KHGMeksj7Tth61iJnQ1HfSRE1jAgHEJZ5wes3pEjj",
  "key2": "5QtqwCSnicxb3bDeNQ4Fn3tz4sXxrtcUYqUFcgsiJTkW96KRzvRBa2tDnABLctVm6Ee4KkqvseefjanCrxWPvaiN",
  "key3": "3juHxw9vNETWGgZj43ijumfwGwo8RjiGLcAc4V8ry8hK8uTyTs6reUPnsif7xzMgTLAtJgocLoAvu7WeDPtevpyt",
  "key4": "3Xt32qfY4Hd5HVBcGtwunPe4HbQYEGTKKm2tqbNc32N4uCdTJGKzrEqgN14o4VVHLrxjUUvDau222docMgQnVH4a",
  "key5": "qqPugzHc5ZCD12F6C6baCCiisHce92p6E1RdW7ALyhgJEQmAQx34FtoEgxgNAon6BRWsdKQaZMkmRRkQvpbgVw1",
  "key6": "3V3yPcsxKZ4zWnpu2XvYjD7Y1WWEtppCuxJBuJgMocvUMcEx5YpNabKAWzdJVrhi2gLA6YQR9WSh2JbwMt6saCuh",
  "key7": "4bEEn8Yx8oymQKXbpuDzg7WGDEeAAjr429BgkZr7eKwsxcrKTEgxfMU2pZhnL7uBSsonZYdAmriTzEsy2GbG4aFt",
  "key8": "jHNSWbTrgsQdDrQRigearF63uXcbp55UexeDJiQ34y11jMfPJtXUWMbyrfzt83vB4goSJdZGnSM24PA5nbYLKCp",
  "key9": "UdKiWbWSVPbRP7eitkwQiwtFh8ELgTaAXcrWkRn1k74W5ts7WCQiz1oS8D54nSS1PdRrvbG3G86q9jxBArJypSz",
  "key10": "2yigSNPByt38EksCtLXT9gvh19RJYqTbghsVtjbfDpma5R4kBckexp9rzmD1TjiTXYH9rjSUHauu4Wty4a3W4mRy",
  "key11": "2M8qk74PL3hsE1q6tXRcAUhKGpi47bAN6qLHoK4RMRXWh4kFGiqe4y7Yr6aAA7LKzu7enud12TrcojUSx5JGDKax",
  "key12": "5yj1Jbrniys6TYf1sCM4irt9g4Mm28mEeZYbkbYHA25Cdav7BduZkNwwHz24mwJCiEmzAcNWAFLN8ThkYTtcP1vE",
  "key13": "57p63tr8zu2xZw6t6UQjizqg6E56SeU1szKWztZDjCp7u59A8i5xece52Mu1MPi17V2jB7aH1AFyeqWaAApAzpLE",
  "key14": "3HH9PbjfNJvpUW3jHJRYSzN5PpD3WV71A5T5vAgnNxGiGGfVBaEteoyUeLmvAcihRM1gfReHDiJSAwq9foFTGrDz",
  "key15": "4AJY83wiVTfiH6iqQtEHTMr9fnV7pB6hkaSSAwnKp7tL772WMnjHKhWUpdiVhe4QHuFL7mvPVbo6kuxNPkN4F9AG",
  "key16": "4g8mTcEcKCDAeTW5jRozxVha2fG4UjXJLbasT8FWXhFB3x9viEeJ2gRCAdmH7ZmDHzSiKpNLyiCmiLSXEMtVvNjx",
  "key17": "4NwrQa8c6FUdyUjWYn1kZTv7M5E1MQo6mdW6HiRmwd2BsRauCRSRh9RMHndNhNgyEuuHnm53o8DsabyrxXnRSR9S",
  "key18": "4ozA8hJs9mxxzMtPa7XAp5bzEzdEhPereddPZGpuBHsTQZ22kBUBdF4GPkkviY4tapp3Ti57ezFZzYYpqZo6ZPTL",
  "key19": "3EPttC3FiCEGQRBNmXPDSRxfr45mdFsJ44k9HkKc2xvACLkKxaVSrBcucXVThHaqKMXvUTfGKZTD6mZWxnKFvZfi",
  "key20": "5Wq7k9xX5G3RFdk5soq76PNwjVFBimCWoKmh6j5GFNACqmeeQyVeYy2EYibM43rF32KB11WTTqoo7DScfKV8s78",
  "key21": "3QCcbKPjrXbEho6ua19po9yq6nd39ze2k2n8u1RCnHd2NYLUuVsZ1dJ9gWCnyRRAUehEmiNqA3wyEDiFCWzhgecY",
  "key22": "3mUdVhTMNcw4T2QAXPTmtxKUwUEMmg5eNEypsKnDU1boLNseEkfyyTyn1t4TrrxicMAXkBNsrDdhBLRajin32SAF",
  "key23": "ztU9APDrKc3w2VPDGHZWfDC41dF3oRq7cYbKkSiVTY8W9W8rejTfZ1ZQ9P2eKco7GDYjLuLhJuNBGPDQJsAQ6DK",
  "key24": "2WSNFAzQ9yCkRJgC44HWzGUZUcrD1tnbdHujVQ7h4YJCdDGijuoCZ1mjbEn2GUEGuWLvfKA5UgMjMheaffUrSUet",
  "key25": "3gP598fdzS4HQ6Z5ntKBdSj5m7VGuiuXfctRVyrDyasdKf6MPgebXieFskHJwjX7p2oBWNSg3Vuk6rUFbFGzLPie",
  "key26": "4xzgxcE512T5ff7ARK3ZHGkC1RXTmpzSa4sJW5Kwu7YdhW97hqpTu6zjNvznyzZdRwVT3eWKCWTjVNoo7JDxjGJk",
  "key27": "5Fch2u1i8PEQ3Fyykw2D5FdpBQ3A1zHDYUpWazWVtifjGmqMpnx2kS57x4SYYhVxDA3Yp5sa6LLxUnYEKX7QyYjF",
  "key28": "2pEjTw3u69doD6GSuZisRQWd4cyEbP7NZTZESytUz2kP426SJBKPmwpg8yzcPBN6we281dpLmSp6oWrHjFm48i9D",
  "key29": "4FScrVgpbcw9b3EakBpW8VHD3pJsCyKL8xwGSsGJv76Pe2Nu8M9LgBKxNVPG8s4yQucaiKJk62EFfZSAyUGPXj4e",
  "key30": "2b593dfcpcFUsyryoEWAmwGyFMcKbD536ike1KCpKMHKcxsyaiK9P4jxAfcX756qSiWbABrCNjFcjLyZbz5AogDL",
  "key31": "8M5Yvtjf93ZdChkTNAVuF9djVTBmxSX6EZzHR5ftkDtq3gty6VkgaXrsS4t43ytkHB5nAod6fKZoVMHnadTBTyx",
  "key32": "2t1T7UMW5yhr8iVfmiVjqKdZUvy3vniBtzbvt6XiYmC4e4rRP7KeXRfyZkzhAy2nS22bhZDzBTXir94zuLrtF8og",
  "key33": "2rwMRoKAuTqnKimr7M5mMVp2Bc5FHsaRKUesuWzHxXL4o6cgW7y4b2CzVLG7hj7ZV6dNvrnDsTZrP75ciBwLWg53",
  "key34": "38WzeWbyL4As4rp9SLesZcWcovGH3suSrQ1Kv3NVqYj32uU3s92nnYYpKXPcmoFe28Ld53tZuFJMRFTjX4Zayw77",
  "key35": "2sWqrRrTJJ9UVF24hfPq29kcx8N6Qow7ZrHh7GdjHgzMmoigPmVHBz14MB4hyMg6zrstPLe2NrAdkVC79ytQeNWK",
  "key36": "5qfD7UCTdsTNAMZxLLTB7fub4XPokd6qigqzw5GHo2FwDf9hjkNprbGwyJs54DnoqUrT7wJ2VEE5SjXPxPGXFQBJ",
  "key37": "U4XjuBzUryQtaTr6p8wTczzJeTVYY5VTR1ZzB9LcFwPZ4CJ3qkRcZNvkSXf3aDMmgscEXn258akCN2Hx6nNubAG",
  "key38": "2bt8zoTMnWMWjf2j5XxiwMnMb5oZdVAg2mPhd6UJtZeru55WgBjWiZui5DZKjb5eMcitkgxZX2EUuhSzYfECqdXZ",
  "key39": "46EbMNwYXc9w4MppxbWN3r5vnNokfHB6FpFDLBqHXhAbru3uzDmmramgDyFXQoEuGAhtbNLJg3Yrm5yxocQxGhUi"
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
