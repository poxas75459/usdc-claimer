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
    "3SuLRFAoSspmmSLhiXNB6qMXAboTukRCKz9u8K5QTANzLuTaxjHYmExtcEmQUrJukMipWuhx7GpH6kAdV56pvB4q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pQNLxPXJ9aAEBVWrp8keHHT4qFJYNY6sim9S4ugPALBAuwADxmRZ8WteZdBNpJNK8GgMyTSisojrKy1jMKKtKaH",
  "key1": "5qTfvSmCQBnrYKCWNgcEjEkKWJh8xMyMVEKM2S2FS2S8xJRr8gz2hmoJ6YGKHLAp5tWcbBJSaDJhcKuJDSQ4Xb5",
  "key2": "BWzjqfcbb86gcm8bGVP34c7iVn4YVbknEkmNFEkHwUVH4JQ3LEf2DHTKzAW1soCDZ3mdLhARiyUvZiFHNGb5Gi8",
  "key3": "fwMdm946ZLrHegiSC9TkiNVQeLyXCP5Va3QF8F6YhjWkH5GpEBqP6TwSTCpwMiTubq1bqBJbi5jJbsaVhzkng5B",
  "key4": "5cGcnjC2yDQVkiXL4KLWXqpEihfrXKubAv5UGfzed92fri4fDmspzLiCKr7vj7dZtA4bWiiQhfG9T4j4a7Gigaym",
  "key5": "2iDVy9KfoszY6eTDErXEYNh1JHAWSFfNVi35BJBmJVcfWeAz13ityPBp1bbqsd8PTEUqZdYJ6WcZXEYk3ai3jxoc",
  "key6": "5uW8DkhNsJzRrK3QYF4u43aZBJ6mxtXDQsLahFUvkVzTeztnn2535Di3ujSZoowXTWDRajbSXCi12veaYVbgYc7q",
  "key7": "PxCf5rpbs3PoPuFd29uSuVhRvaURyTJ82KZbdjrmbirm5gukVkxx1v9Ht8AAxr2LtR2xeMPzRQVodscuSdUWc7b",
  "key8": "3cEtB8KXhCzPuXQRkDcphRHWYosZfVqaxivjHFX7SbttG5TmniLGRVN8pmkBKsTms2spDumtPzWkRbvSK6xoHpv8",
  "key9": "cJA6Fm9McoDhBafDxSgw83namZ8EvtHfFsNKGhNQgRaZudgkMWFqTTLGKkYzNbdsAgfJ1bVQNSGsnqipSbJADJh",
  "key10": "4aVKGYFHDMbcPaj95pGwT7PbckshyLa6qeRWcmXfGzibzhtAvciMUs2YCB2reUJAFe9UXpBR26NsReohW6Vqp1rE",
  "key11": "3Mm1NoyuszsnMNPHWM5t3Hhi4wT1fcRV8sXNWUEd7MBk658mu6wNvCxBKLjQ7tpkCNKCzCP1uUuNioyzDF9n9D5M",
  "key12": "21mbScZE71deXUwUpKmdXVXcujvBeAb758Ng5J7fGkyi3xdd427scLQzW4xAeNjbVgzSFwW7szMYLxMPNVw6LHgV",
  "key13": "3b6Toe9iHKUgPXVfFey1EZPUN1r3zLPqcuTeAEmr9qQHrusc6FaSE2hpdXaNVXDzPQ1Ent3QMC8Bmg38TAVTeUgZ",
  "key14": "2bEGCXhdu3qkbYgtgg7RThdpTNgxhbxL3redAaJWWGTuas7kAtRwJmf3v4iwLP5sMD1yTHLwYRSFSWFjJSqPG1oV",
  "key15": "2TT7jLqBZs2qC8FpVJaf58RfMANeeij4YBhwWSCFXGB9nNQKFn3cDyK232xewNUJSbUhGVvt2PoodnHmy6bdWf6m",
  "key16": "23L1CRH4UdEcJUspfwsUxpgvxUDSoVuHGnZtDyZhwwMMAbbUPkj8ehX7V6C7NhzHqHmfw3WsJLbjJTJuYftvcubY",
  "key17": "5yW9m9goNQCqLJpbEA23WhEK9f6spP9Z3f5DDnfLVRQjh4p5kmTe8V5CBaBWgECkCHxLyjKnAdkGjH63VdoGYHRK",
  "key18": "3gMibAJRxpU4r4VMVzV9g5owpKyLLaHAX4QHGTua41UbuBcG2hxe9fkdcNQuqL9P3ptASBqfP1Kurdus8x6TSiEf",
  "key19": "4qB7bRRoVFGmY2e71AWs1X2dD6nDRTpAKY23iUJosk9ZzeRFhQ9Mt93iprrbFrN95ZuWfwixccKingsCLCJC5Sw9",
  "key20": "25i1wr3RtP3inPWJzFqpxSHNNxD54eyJ7nFZYJrJaM1qq3kAW6oFk6xJbDVD3vDHbGoVS8bx7kwdthvcRu6CM9hN",
  "key21": "5k3YAyeagjne2o9WdHA15seV6N989Zd2iNtaijba6Mg8T9WqEMEE5h9xBTyYb8Ef94pkyCFzooX9esukxcXDQ4px",
  "key22": "2cFd4tWyf7LongKEYFRm6PW344LxsjYyh68vp9xwJ8YrWjbWukAW3sZrWhbsYVsR3BY2kGtsDLgSTbBmGRvxUHaa",
  "key23": "5jBmh7HK993UsrYooJQ7YTuMwoLKsANSbipyDqGkvCJnrXDLA1QkaNM5uUhu398LFFtgbaHhyBvaDGFbTLzUonic",
  "key24": "2iasQa42zUi2B2HTr2hvjyYddS7gN4EBUzkrXaATdd1YNzneEC4wADUTiZ69nUiMGKFNNgBdE21kWsgPdg6dDD26",
  "key25": "5uCioDhDmejpqBeBTTjRGYHXWiUnmifpBjJkfEqZwAxy27a64PQTu2YxXmsUKsLsVR5ocNK4QPLH9b2NJ6fNcSRe",
  "key26": "5hmwVFtwnXxa8vBMzyhBdCvs6AutbRZRt1c2vkE4VSBpHiZU6ETrRGxZkCVKXWZP7oSUipnBG2sXHFhhWc7peyxX",
  "key27": "3TsSroDuzLkQZ9gpo8gCxrxjqRPNkSE9rSkhK9dzBrZ1917WCPJcvZu1zx2YKAmZVs4rcUN1foi7hSz3FLCdzMKi",
  "key28": "hM2F149UsQ4AaFxZ85qdH5RoFCaiVNhRvPaxTfcUutSF8YfQSCsdrAJesb2aK6kiPMeU5oPvyueLeYX2MW3X6E4",
  "key29": "5KTXeF5mSLBQhVdV87qhNVo2aQByLaaxbSKeumzSRzxsiJSkXngEibUcarpK1orZemWM1byRDYPiEyNxDieJaR2M",
  "key30": "Fs2FyQbVjnEneNCfavaY8kc343zvyseAMCXnhRnTzZeD8HKQrnD95roJBKAtYBxE7pRyvtnuiu4m5wVFQ2DXxJf",
  "key31": "5SiKbCafeiHtBVdGUBWfR1YB3o21TF9cET2GDDre2SKEYFFXM5bxdyZqAEM5yQbB8KR3fpjHqZnQWPA2YwYYMENx",
  "key32": "5yJNCtJSvjBrnAo9Zz49NPJvnNvapncFes7fjEjGUGGYLaELwrqs7Xb4z564bgco9mCVu7VrL8FYQp4pfWe1f78w",
  "key33": "3YjtvBdt14zkgQqKmPAxYGgXzXvw7jQ7JJ81xk4WgHQCyVWBe1yWBNCE3aNsrHrGfu1bJdro5rk9VEoSjN3ykzHK",
  "key34": "3szboQuwU5KhtvJ3XEVrFym4MM8ZLSGAwKvXm922S194hKeXxBiRR7EfRnvfJzYxEQyNSGH3v5cUBEcRPhZPtSwU",
  "key35": "ZLSGrk1aZ5FVyiRvBKCVpH6osDs7LgGHHTdsaPPUUERMPuvKQ1QTrZn97eCu1Pq7U3Ln4guoEyjMsvoeZ2no5BJ",
  "key36": "3fTWRu2vSkjbkpxstKc9PUaTTxWc3FUZxr6DCK6q5n6S6DonXG7wRZ7zc1HTCfQgMEp9HyxksNYpTxHpmSGaMKtr"
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
