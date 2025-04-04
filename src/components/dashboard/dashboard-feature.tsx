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
    "49Du7afsD1HD71U4D56rtRdigh7JizS5S88A8aEacqZshUWB9rjGe9uUZwYJrMcLFsYcv5R4H823jd9CWG4uw9AM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FF92dCzQzfvqNY1yCF4MLktezrcnUFoYHcykrSZVgfkiW1FvWBPzQ8ppzRMB5D5a4RiR2z4aQSf99kHceQx9JRG",
  "key1": "2o5kJJgMUTcdNnFCT5PoKdGSGjZvC7HxpagVkfxWTLgHA7MdAJLkqCtvMYY2hsEb2UYfUjGuVWYpJrdFtmdke4kv",
  "key2": "3hwfvSfG2osXa4Y5uZSTWj3BWof1UszMeRCnPnuquEfvyFK6QBCiEjZeBGB2PVPnqVhbfsdPRSqTQrehckQg6y9r",
  "key3": "52sHAj5owCSJE59UaSdm3yvfp65dfvUyybkRRoiM1phMSBC79VFbvvzc7opHQPhymj5kstYvEDRJ97B4kYeTRGtM",
  "key4": "352sfVRx48j12Qj2VNoJCSYk1JjX7RndPMngVTLMqQapm7oaoFwjaR6b8KmFxQuonjQXWXANg3uCGPRBHb8hdKaK",
  "key5": "yd7797nPw5QwG161W5xFQpRyJ8qgVsiNMDGU88aCnmbqf6cL8t92rKM496i1Z2xn23nPvFTR3rRocDnr1VGCdKn",
  "key6": "3DEia7DXkmiXYbgsjpCBHdPLg3X7GkweJqgqUD4SAmx55mdnmY699aCwgkwmZBSmWnd8f2QwLcVj8vDdmvrWWZVQ",
  "key7": "2p19h6SEGHi6zgE8jpSpuxz8gRpcKyfRLbTbGMLNPkzWG7t5BWtvuNvFHBW7haCKgRSvy4JSovpXew8PuLtH17he",
  "key8": "2Z7MPwTgcEmWTaXcsXN4FgRjf3RDPoTr5qTAs6PZvfZ5XB58XUyESMJYo22P92rAMeu3WLLTZ4Q8W7badv5ABLdL",
  "key9": "t7DuM2sXXKqgTPtwUKkH5VrTQKSNxW3nrgb9Mdt3P4fBKXCyESTHVrAP12cWg6qVjGUXpMJ6v6P3zH4koAhpceB",
  "key10": "55onyaKm9tQhidbHxPEma8PDvD6LVphWkifN2AHzNGXaJXDbwBFEktYakmizT94bSRvZgEPkRmwGx9JPLE9EwvP3",
  "key11": "4BmZYpTE8nQ3T6zyDJG7hsGq23tiZGASRLf4uhe7W4DWAYURAxRqYR2CVfswLF6M2nKVWcEGo9k9ZCbPNL8q1yLb",
  "key12": "zWJCmvaR1Wom1rBqhjT3NEHGXgHejQpD9wBsnHCrk7aRWRBWNTsfiVza6PE8FWnYdeBfLfHV2BqniYSq9ZUBP4n",
  "key13": "3dnqVTdZNW6BYzUs8F1uSqobwy3fb5XCtr7Z2ZjTF7Gn4KJVZWoV8jrLtLn6Li5A1WtS1owkuFruMs15ST6feSwB",
  "key14": "4ifKj2gi7AD58T1MGxunMGUnyvb6G2bYD7ZvpBZWtJe1kFm9DrFe6Ht3NudHMARdTFrrtw9V69ZDaXtW5LumPcQi",
  "key15": "Yja6VKPNpgaEXkjzNYBBFKU64JmoHJY5e4EfVeWKzCWCRkJzkdGMdYQBYErUW4UQPQcSt7TU3niDkWpjhpyuQbS",
  "key16": "5Wg9a1hshvfdPSFUUBZ9kTrSAmPb7QTVq4B8APh9E4ZD7LUyUb3aZuwonLeVUzSg7Vdqc173V9C8yV1a9LtDHaGp",
  "key17": "5AXNycvQVXBELMzppeFfKouiE2hAgr6pDLiSLpMmw5PRqUuGztTPBmHBbQqB6wFQ96WBjnHQ1tzHvz5kVZBXL6B2",
  "key18": "3i4QxrvieT8o9eiSDF3G18Ruax49YTW2iKPeXg7xo4GiYJCZ1J3p9A5U4bmQ4VtxWjBkL5Fd5SxPhAneL2PmqaPf",
  "key19": "513UDGBt7m71ZjeSG2p1w8BTZGXj6E5PeZJb6T8SwESvCH9aomo4T7NeR8WcWw1qVM3iN4o4wuPLY6BP4DwsAscf",
  "key20": "5SjXEP7b5cqd4dfVtKesqptLyUzYfbrGsRJKNG89j9FEYi4Khah268dBGcHTHBbvi18uXvr9E4GSycHq1xxxPxvE",
  "key21": "3WiUaeYwBJeJFUbcvd6gPdBUu4Sw3R2uGwp1h67iq6Jcsa9jMUv3t8WD73QruQir4YqMxpfzzUUv72ZGhKvCzCvZ",
  "key22": "5J178LUtaLW8WoHsEvaRbpnWJtJjb8SjKdZJNU4pcsDnmLxynRuX6kiyKfadfrJYovYqWsZCBmXbYL3jniW3Fw4S",
  "key23": "3uyrN3V18WKyu48VDoBT44icSHGvZj1FABEuDw3vpHfNrPGQT2T7khukrfugfpzgdJtMzEFZkGTCHF6nT6DXXkuV",
  "key24": "3YWnydMXFwRw84Nko5UQnaKhAup3vCdz1bUGU13DxHZkvs6XbVuEXK3XAoTQKqAkwAuECWJHJznCWtNSBzw6ePAN",
  "key25": "3BoVqrAdbERyXQbRmrKbUX949E6rY5eEpNY7q7zWXprkyDNBfJjmjH1vHswBS3rwitYt4RMZYAXNosVtqL197wBL",
  "key26": "2wJiyjbXvGAP4BG8isCZBtn9DYp85KBzoygDk6wxu9jh6SLd73MhEYmiFiXWH7iAHRwyYQmUAx9jZjgKhUeugPiS",
  "key27": "5UQzFWk7wxxz4J8wsQqyE7RNtJnrv7pNtBFANtUHKrYZ2NWBHZjhmCmuNy9y93oJH2JB9Y4x1VZPkR9ezDQzKqeP",
  "key28": "36vLijTEe6aaNz8BnYpma5bR3JHtT3xv4Ee4uex6fmmXBnueA1RJxNQRUNqrdU6ySG52DXJJSvGPK9654UrzfCK3",
  "key29": "1275EVYnxMusZznsvzWoGSMH8rWaYSyy52wjjrdkzuhWti5cQqArgSwfevNzqZ4ZejzMrbyjGKbLmAy2uqiquCpg",
  "key30": "5puiMvfYHxqrL1Ju2sX7jiNk6CQer6MfADLVuNg3DQti95zWiSdWAd7cJJsdF4WpHS1BZkoPMP5444bp39AQryqA",
  "key31": "55B5SRshgWTuo2X5WRLxwg21DyXt7es3WkmX69HAcc5suJ5XhgbAy6SaFuwtQXgTHatnBhi1FbMiwKRyKMWRykCf",
  "key32": "3TvXoULjGBrpt1gXsfZHbCeQ6RAhM4opGChjHkG1qjy2Yt5u2uJQs7XVgCGU6gXeNr5ARc9uaVggfBSMkv6gQr45",
  "key33": "4i5MYkNQqZnuAxwCnm3jjDkKyNxTE1W3RGZNd6z9rQVG5FxD4ASc5y4WLCkAuo2sWMx8hNJHjV6mKuTCwCAdKDAe",
  "key34": "4VVdjab9ALF72L3512RZSPYDgarNFRB3TGSv1vbPrwHXKkr5hiNpftLvJRZsMxAiVzNV3VKWbXSg6RRSbeKBDwYA",
  "key35": "5Ngz7AA6wBR3CBtFM8R2xU7drzA1Y8R7aZ1me5V37njfVv1VARw8zRJ8wTAiFhzckM2Q2JAZ4sU4KjxoR8rPRXaB",
  "key36": "2SHqNv5Fd6rhZvqCyFsyLLnwLJA9YdXZWLU5UeediTftq7qL1u7zZ7PnpPjpN5TkkU7BnkNo93Jm2MWimLZvwB6c",
  "key37": "3JyaM257AoL7h7uySxYVf2a1CtdSaj9GT8cMQyEvouczw5PTT993P5SgYgTABkh5ztQNFaucuccHw31DNhX995X6",
  "key38": "aEtaTxKPhcZrzje5NVMyoxz25z54QzquhoyuBPmJYxsk6EGW6kuhzFDZYEoTFfqexqXRpegxGkaX7DvvUNtzMeb",
  "key39": "3v8ysUmrAzPMKAVRrR3AnkYTFeqxAsKcqtqwCqQgFyRbYGxpt8P6tJz5wN4XR9REuZUWJmzwEMSfsWCPApti99az",
  "key40": "4PiL8LxewWjrV11wLx2KRPZ5799M97Qfk971DN8mdfZcijjSGRk1216QgFJN3EnFcix6yxou3FKcm6HwePVgaonB"
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
