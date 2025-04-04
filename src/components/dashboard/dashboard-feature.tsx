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
    "3ED9e5Lo8SwRYPRe19xx8rzWTVPcZEHdQaEtWYWvcihX7HBwGpUXW37sTywNBhdasNemFkyYmwXnA8n3obLKW2Yh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4974L1raJrfJNRBKe1Sh2yLCgE2LWq4Uf3AcrbYgBtzwmJdVDNEJzbvsH8kG6E7JMKD6MibAn5wMgXna1sj2GD9L",
  "key1": "3AHZWWC5JGoiMQaiCuS3NrzF5t9Gmtb2LMMnDe89bL9nKKvUXsRTAJq5KTAWsCaWzwtxGyZ2foeYsJyJVAE62t5D",
  "key2": "122zQz18tRLJgGxrk7fzXV4Cuh2YwtoNpv5MqUAdHJ3AZYHDB9WKLdt1RSpkA5VxXMhnED6apZ6JjQorPmv8tQMe",
  "key3": "3qkbs1DBGogZPs68KKmFpvn3cRBiPk3kfXq6MUtvBxTFJYfqfa68MgKaxn1h9QD3siFc97kWf5LSp6va6VTd5z9m",
  "key4": "3peDqBYbX4av295X3GiQGHtMAXnTWR7t7qbd4JPRKcEmbY34bpDXq2ceGTyahhnMiQiRtRVNgR6Usx3DUkqMNnRh",
  "key5": "6wZZY31pUuf7q4HDeieBSYPFZ7fEEoAx3EN3u6nVwdMydZY8gsYBwPx8zXDGtzQeQWPk3Sg5XVV2Dr7x3wX5hox",
  "key6": "2mZmbzKrchHXMWP9BXBb4sxr5UxfnA9mfZyvrLNLNFALFBD1zPb6vyfSn3xmhKhYQyAAZK5HjmMFisvMmoLHKg1Q",
  "key7": "53N26ZVBFVQjXbvZDyUzfPnJQubm3QjDJVmjJchZ6EUknG6qhBKWyGx6gLQnkLerSZ2DtzjNiZvSkuPxNWEePpLN",
  "key8": "NqW4yFXB58hvtpGmhfP9teGt2PNyDWXgRHgAk9qDxbgawicLna4T4G73ERrcL2HPRcyiMEsptpMmVCojBMskrbN",
  "key9": "4Q9uMPznjxXeRdaL7b8uV8y4Md2TFuEtjY4xDfptPzFaYSTZhuXYV1NuWNvWVF5dhQS4vD4fRZYD6VufRV2TR11m",
  "key10": "3EMX54STZWHXTmjCYg9qZ5zpFvYzXEigbV1SAxDfWCqxptWQ3PdJMacr4B5c3soahWQiVH8wC1Z182vhWY5ReKen",
  "key11": "49UCxNow5u4Nv7bVEhHH5n3Tsej3jJrjKTSmPunV714j2Z3n7Yu4vYNSAMCaS1zZG78sLrkA8NCqSRMozcd3dkWj",
  "key12": "3nYH2fX1hbyfv1WXYnhi1NTYGGCpqErjdW6V9DZ2mjPUXYmNedP758ZadoUA8y6sobdgTo7DhLzjXrTPuYqyBxMA",
  "key13": "2rBkikP2mU6cUtwKEb6UTFcd8pT2PxD12HzUYiybBkxLmMdXNGcAfd1RczLmDoNMcQbmy2mCziX86ZXx2ZJscxf4",
  "key14": "2BK5A7XiF35aJetzEuDTu2km31BZb4pDUWuyHXDoRi2TQMU6KoSEszzYAb5PLuVTTmvKJcBvBFiESndnws9HMoKb",
  "key15": "53cTMveFQEiUVd8oN2DFgfcd7ZiwVWHEoiXyvpZCpp5akdzRiZRRqyCEpRNWR9NvS1QwFN5KXktNpyjZSCKSSzMu",
  "key16": "3xTNu68bxcsNMobX3nThMejgKAAPX8S9E4Q5hq4oWiroK94m6ZNjG19HPPB7NJTYdfVQ9ACfVfVJPG2vnaMDCnUZ",
  "key17": "4Y1yZ1rp8ni3tE5JPT2ioP1psoFWovUuCkKWGKgYpKx1nq7rReNCZMxEW65p9LyZ8MFgFNj9QE9KKCSxqg7VGgN5",
  "key18": "5Nw9LyUdR5kFQq1KMaGAtX5n7kW7bUYqFPVQPmXMYLm4vz6dZ3HKJQ6n6VSVDiAHCccc1uB5UNefZYWe4G6EXPfm",
  "key19": "2ZibMHVkR1Nyqvac4b8bWMKP8FuXG9bBD1bmxwaC3gX39v9UFb5UNWWd3ZXuUAmDbbp7YJuXhNPQMu6gkYdRyA7M",
  "key20": "47LNA2iqfBJ7rPZdeYGd5MAgjSg35YRvNpAf2XDC74XLGLD29MYJL6p4kMTP4XMZezuJLFhzvqU71Eecy5AvWZZm",
  "key21": "3uS8Kbh8ES7FzLFS5kcz1fiMHEuEgYNYhgX7YHcx4ZmGVMeJtwZ2G1neFP3jq2TPY8nHm7fPutLAgwdeKnvEY5VY",
  "key22": "2s2BN1U9ED1R9ckkVjUcCCWfYAxEiQAiPuhot6ccB6R4JuDegAw1vwuRK9KX9PvtmKr3bFiZRm1UdWHp13fBPF6c",
  "key23": "4WM4XQZhrwHd7TX3x1eTb4KX6fZ5dfmRxAKA2FgKUYoZYzQfuoAkSqpFRfJyFg8mXaftCJjf5aNqvVeFTyCVafGX",
  "key24": "3f8mwjKgQKR5PMKbHva979C63KkuMVXbmtoYKNyq31WGT2D5v5cCdtcdosoyDP5t2QqNDzRBZEK1W96BqzQXfjd8",
  "key25": "5GUM8yThEt4JPb97SZLsCKWN6nDjUAx7d9bfC1HNHMTEfh871aTqSYXHbVA9WsNhPaVKMFz7Gq6NDGWXPNWLZ2xa",
  "key26": "4JULeNzssJ8ahex5yK1WWFy4rnvD6xbiUHGNm2i1Vuibu3DHXvB82KVWbgYiGXxWNnPaH7jK8hxWyguwuF5gjvzc",
  "key27": "2We38uDWKsyEeJ1bFjDPCUSecAHVXj2wNkjQFstxj9MGiTgUKwHfuNe44hwHAfwctksSvyRMKJ3t5X87GrPMZPrt",
  "key28": "27iXGjCP2XwEY7c8hHsbXBYJFE8Y2mDJEVT34ftrGUC9j9jmcELUkesYNwJZXFJSUwZN54ustPLR8Yy4Xgx5KMjJ",
  "key29": "1qjrven4yfy6veYKjh1jNQp6EtcPQZfgKoNyQumUj3BSiFgiSmyeTMThZndTyEzpNCB1He6fwFD5hNKptJQyCbM",
  "key30": "erQEJodpjYZoTKXK5rDnRrmVwdr6rwsiBpyqgSFcWrP97PMdvWDTHiR2fGmqTReEyBWffgQFfRyK9UTh2SWuwUN",
  "key31": "4zJWYdw2AGPL6TBDv1LRpaQ6Utdtp9zU2Voc7VMAaQC9n6vzegKBpzmB7Duvyd4oiqdoBfeGNzzVn8diNQYRPyCx"
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
