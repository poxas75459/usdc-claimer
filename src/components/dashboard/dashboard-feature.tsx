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
    "3JvobjccqqfFvuT2dE5SuBGe28vuYK6NYBKVmnRf7jGXrCHLjgcpYMuKEUJQ9zMgn46S8QQCDctrmFPs2zhnRtq6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Vu6uPEVpFHMjtX5YupK1Lyrph4njpvQcVGfyQpZX6Z8xs2ke7VYdiMwMLMwQQ9cXsARZf2uDDixYm7tycFy2Ubw",
  "key1": "34QVgAMFSj5n6sFhBQ423PQSZQ22VFQ4vvmcWDErZgAEuwbCbRZxdnSjchd3tWkhieSWYWSXw6dyMAiqk4kw3TzU",
  "key2": "5XPNQ7YjD5oixQ9JzzpoNZVPBuXRoqmYzGoEsN5A6tvbQgwYhagujYPuX4vCT7yNA4iLS7SzRT1Bpmm8Qkx7aoF2",
  "key3": "23adnjNFEAF4zzbiCAN7pTBdudDDVXk1df4xMBQ46pCd1TNSBStzLEoeHZPS3UoD4TPGQ76uDhH3KhDhw9aeWs3V",
  "key4": "5ktGW68engDmRq7Ah4TPUQjw3JFxL92JJ9sM4U5RrJi7abX6SM33PrzPsN2oFyUGKANexEhRr7q8FBbpRm4r2ncr",
  "key5": "26S3kjgLePRo6RMEqhyB7MgxuHwwXXBRYRdbHEn67k4CdUnYrqeyCdY9KF96zFLV7ThuFL7XAx6S8G7YxTJ6eTmR",
  "key6": "JmgP4Sf32uF1eCFV66KozvcxnHemXQBagqtNiPyXffsMXQvxVVJ8oXXpYpDk8xrAYiDsowDvVpKpZGEHmCKRnVu",
  "key7": "2iTpqtC2jYc6c2yp4yG2DQJqhK5JrHLnxhWYuHBwonFQv7KafnazSmfNZNVznAKLR4uvzoUWitvhGNeCzQD7CiUa",
  "key8": "G6RNhhBxiz4s88M5hs85J4WbZ1UELRDmAhavs7MhergYaixRyVsM5tSVUNjHbYcpVgNFaAqzgYaugALyPN51gY6",
  "key9": "2Ri7aDsqaqC9UvDKhyaVg7358c35Db1ueeMp86HgxLueSGj751Z9nmQ85pHngeamLrPxEiTjA5tz6MqMMaGeeHcK",
  "key10": "4q9wC6SyW93ySVJtEiUqffzfi9PF2NZjm8ffTDSmSLoyrEURDMFaZKYxvj4byGWiTmk9CDTytB7JHv9WwMWeBFka",
  "key11": "53cta3dh3pj81Aw4NgSN799YNR1nHV4AEV9NdXWM75qQfQDJaT48iYPtJQJ1ThJDXGquiw9wbUrLBsnkotAWei9D",
  "key12": "4raTBx63V3YuKsDDzQKwv2RoGotWx6JA9RDv4v2GoZ4A8SW1Zi2AB8fY93Y9oFbo9B5vU5NrvfSGTQx5Fv8aHihn",
  "key13": "2BJDPfV6BUSpUkExDGVnWATyYyXnpkRnwV9eBn3UXghQzwzf68ha73WCE6rXBeAuTGrBSFgPL9qBjw1FFXq8dd2m",
  "key14": "3CTTqjpe9vtGNrs4147VwL46WLD9Fgir4YwKZkj9fSxZ7F9QfiKX5KznNcqM2fhEgd6nphEYaVu66SSF8F6uNrgY",
  "key15": "3vfPvW1v7jnXRuTJU6gxipsLkpHSAvz45N4XiNV83kjPVRvSvVnT6nJ79sNVjchociD7eD5R2hJDPM6S2Sw7Fbk5",
  "key16": "3nPsejfoS9qsesxuBNUEYLZkYzsnWTgq61N2Ss6SBT6KnA99Gy7oQq8ZuhfCQsZ4paf3ePXh15uGUFdy6Yip4aBq",
  "key17": "iB2aocoYcDZtQp38YzRPCgMjmq3Jahv8gwKRghANAJHT4Jj74fB1S38Zq2vPm5z5MQRRx4REuPJm32d6LHKzw7W",
  "key18": "5SrJFE5tjp7SmxAqnGMTBPDg4bfC6Gc1Wixr5PR82mvpibS1rwY1KNpkU96g165cnhXXXRb6eG3WbbJsRyc3zqfa",
  "key19": "67f5z6uLZkDFLjjxBbS69SLB5A2sptiiU2sHzy61CQEQQwXLJLqBUUCh7iMimeJLXWPjV4Vh8W9oX2VeQ1iWSwfT",
  "key20": "4mkorjfW5M8zesPPVzpEqq3Sgrn8EuSNzMZBNjrhqjBcq4edT1wmWGAmq4oehCYb1MBsnz3BfHHNVkfEgaXnVdBy",
  "key21": "4cfYJ6r9eF7QRrpRgDEyzzbfPFhn61pXzTYCFp74MksHgFUFxpA5CryjnNPURsMBiMjwQjEPyUpX7L8JCxcXAKHc",
  "key22": "4ioqtPygP46oF3m9hqD9SR4TRGTfwx6WdHLtATdefs3pmxJVN3Wea2oeqiuscuiLXv1K1H3hTHVm8CvzVKrcYmG4",
  "key23": "3uaj2UoRTQVX7Eu55JxuSzVC5Yu9JMhEugsCgcVd4j5y5iWiGJE3V9GXsyTno9HUnNV8f2P713nEV5qcCWqfrmuM",
  "key24": "5UzB5LUswqzVp3KewUH2MoZetB6CawU38KfFvmGePCNFGLzrRkv8HKn3WCgfZddcduRqv4fX4UdNCjzXQRU25yeC",
  "key25": "4p2ghWtb44G9uVN5zasf7AeUS4fbG85QhdzpZtzAGoJ1b1f2xUCrhwvCxFQX2WVSs4xuqhKXBcpsdHWb77tHLsS7",
  "key26": "12A2GWcW8rTPQwHutxLbZS62M2K2sMBsfAXqfyt2uNDhSAHmDDsXBLRYpCs5kEWU2ZquiW9ENujF9LGpY9QFFt5X",
  "key27": "2GcSTAWFgqY2iTCTvAR3QWm1UFTgkzRKVfarohoexzpAFjEm68E53EFHqAsr7uQfPyRFp5aojWgxbr9fDTzStvuA",
  "key28": "4xiM6zKvCQkQX4gY5JS7DzVWhE4EQQooL8xoxGogknb6SPpUuXiuf7erqrBXq51TTUCNSJGMpTa19hbwB6bn96mq",
  "key29": "2VDe8PdDPJMwnbxFqzPcBNAop2Sc485HhY3yCg2fxTKTC5QSYui9sQv7nX8bzBbiuTyitzbHSekDRZ7mG47wW68J",
  "key30": "47GndVBvNKyAzsinwBBTPoEfe6j9k3UA4Udvk3dfzt4rgJb5H63tjf9dpnY7Momt3Sh8wbgP4HZK6EiSueg4iLMS",
  "key31": "47mo26xn2uVNNwdfBfqdbhbnwkEz2ptxBgZdsrcQLyfBUAHjBn6UgxjcDEznB4Z5w2eKoaE1YLMWzHz8N8MXMKSH",
  "key32": "4n6VE8w3R8VH5GVq8xTjZWgNBraXcTmaeb6hXBePw2cxfuZM2QPhfVLRirQTYLDqbjTf5MeqdKyT1JGXeHrrAofQ",
  "key33": "5abY7MADCnyZNvSSKPp9RT3JrLqxGPmrBkh82jK74TaH5GzqazFfhFcgQHJusVwG5g9qLRMmGxU2whVsDdMM1mpp",
  "key34": "3t4RP87U2CQEVekr9RsfGG6ejKnUrx43g8nYdsVNzUgEaTh1T8zKd8g66Vf8qTKMmWHGCsSGLkE3EX2C4zfzfGHM",
  "key35": "2o7Q93EjkZqsSzRhrpn5FHtQDrEa62kw7Bt9mMG5k53Wp16vCsA1nVUZcnbLSFKxbqouPMC8Hg1t6n8eu6MDKara",
  "key36": "4H6xTX63VUNTyEEhmWBvn6ntW787MGnpNBcHqD8BsnDZfAJecZPUfFU3HBCFMEE8SopUshQWfVVwasvfaxyfPK9m",
  "key37": "5Z3dX2dovXZP82fcxZn52rrCMJX8qjMuanzW3od31NUu7BsP8VcDNJHPefhSqN4ASpwZRTWvy1hQH7MnmDUihiou",
  "key38": "5BkvtPqzLWmj3U1yUaWJPnX67cFL1iGfnCbRYaSGnyjiZU3FqGvZ89wgoQDn6RMaQXyDLzCnGKzcWgytky523wRQ",
  "key39": "3qxbQ9Fx2rzzfTnwaiZEzLNDTbQhLU7TPCzgHSNheWSDPshqM7nb7tgP5eTFeSLMy7iXBF9zQF94EcNFYAVGJTzH",
  "key40": "4Ho2YtGT6RCBZt535XixiaQdNZMvy4u4LWA8RWyuizYSJ6XhmJwcPbjJovkTykTJuPEv7orq9iEA3oH9zHKWYG6A",
  "key41": "4LqPDRnoZnF6it4ZUwBBx6jERm1riAcR7Y3eDAiwrBEFJdSWmYKQuaDrqso2h8fuKsrEHZ7zHEWvGcKS71W1SG3h",
  "key42": "5P89iuyvKPcp1iDQBn5m7U3oz4ZC9h8tykLq35WhUpad72cU86GKpUJ6UwmjaZ3zwm3EG1GkXqB2brKKtCG33pCm"
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
