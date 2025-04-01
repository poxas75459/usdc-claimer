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
    "32QtGHPGktzTvmjCJ4hfrTgjWLfKY2jbP2jfMvSce93AhUdqqTHHzX2JqPum4E7yQMUM1a74haJZiKZGw6bdRanq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UKVPng8yzNzYSXF5cAgk67H2nxPsc2Y9ATEc5fbyTJ25C2FA54ZNzGmMFq7j8m922sEG3fwj7EMYWkhLvsQNbCm",
  "key1": "uHSSeJnfQYpCjHxoaocmMjokuh7e7CW7Vd6ebbjPV2nNtpL9KA4bvoSrFy8xrezrLgZ4rHGCFduBL7xHkgv6drL",
  "key2": "2DjX9uZkjeGZGotTRbXUoHwsmVtjkNXkqBoEvGQsdp5TfyTcozStwZMnk8U7G957myHWfrYBZMeZwTKbR6EC7jUg",
  "key3": "ECMEZQbwXNcM9F9dHMd84RQF6us5FXoCBXyCDM7yqyuDnJALrYiiQdwP1NRe21jRVe8A4xaHyE2Km89St6EQD8E",
  "key4": "2j77GCdDSKDbo9gdoqZKZH2dbr5KeCpNDU9Uc5p6MqfHvhY7zvd6JVvkjNnz2y8ZynfMPuXcYMaFkPoSxpm6TuD9",
  "key5": "Xw4HSNms7aXufKFWe8yX7QKZDw8CZhBuaPyU9Skqrtp8WLpmNPoxZ3LZ2ioaBA7t9suHuYCjpgvAEBqZr1dw8ua",
  "key6": "pQViQaatiPuuhtSruYZ1yZE3G4KLoSTHd6Y5hVWVt7PwyPWM9W8kotEoaVWnVJBGFFod6bX9gDnXcNimZD3MPcV",
  "key7": "4vfhkQQNQfXAbqPhSFpUaArkanfoEjMh4FVn1x34uQy66LUVjDD6E385wNMHT4H4vA4yKAazEuhwecFPTYUBPbh9",
  "key8": "3dz2pmaCXDzTqDERxSydy4fpHSsd6kzxMMpZZR3RsN38Kb2au12TCanVvdatNiFsEKjVXXqfaH58AD5MJuvnzahG",
  "key9": "zNS2JopgwyC7PTAea33sNzBsLnjJajT9x9f5p1YmrCPws747XSEkoNTUp3JyheRDPCunaZ5G3yiNGFszRGqSaAF",
  "key10": "2eGPCe9qRp4WJRvgn2zwB317gSMTFip6w9sUxyF9w6ED5c5NVoxPTxCzA5Ls28BrYk762EEGtup92DU4TAB9zQ4h",
  "key11": "2VidmTw4rSSyoPD967DmqahAtz2Q4EvqGvV47WWKM8C1KvTV8opVeaPFVddUdFhZ2au1icevQKLPoK8rN9QtQmny",
  "key12": "FVQ3NnM724Gacvz1KzTKq98jaKndLfbw5F2YVq5FwkvqqmfnRJZpQwAk7waAW8anDZgYmCJCtnX9wmsbmjTHuNu",
  "key13": "5STgT5NBeckpPW1b33ZsdDQPStQ18phfLEN38unoAuQSzQGoLAy91jHAPXSCA4Y3UJoDLzpwcxvTPiN6kH3uv4td",
  "key14": "3u35svxfX9rMRLWA4pX8keUkiVn5u9QNb3AYn9ZzoAHqRJ9RkMUyrC8nj7GteFbeuQR8WmZzY1NAJ3RTwMY1TTdo",
  "key15": "vE2ioixtjqwtJbpuH7BrDeCSTuURrxGn82KL9YeAuokdhEeTzNAXPpx1bkUh3izmtKC1m3YAGkwfi9WQP3G9R4t",
  "key16": "2KE2oXVN8Rhe9KBpepkKzMEucY2uPzFj6BCX14e15hEoVNyHVKveo3kaL8BfT4QqQ9p7hiqU8hxKMJTnfz35qf5X",
  "key17": "2cCH9LkRsSbpPPnRKPiQLCp99acnzXzyfumNYLxb63GnEqQcSWZamiHjUcLgsBpPiXKsdYYv3C7gPezrWqGz8yN8",
  "key18": "ze4iaNSRjPMkY38d9FvG6BFFkPc1H2fWu5PpWTVHtFkrV4pD6hVcU7MAkBdUZM44c9zvVQ7dPuovhnTesuc5PC5",
  "key19": "5j2ueK9ENnQpf3sPTVgiyKjdViGTkUrTWV8Za51H8V6H26TyphBv5hxxTvGfyJJJShZNeYkrj5q9KrR7rmue7nCJ",
  "key20": "5CmVRy8mZqpXicbh3KGD3bsE3XhP4pfsKNZpGoNGu8t1Mz3Kub6Arwopzq4zys3p9BQLw9aM4ZgayBZ4DyiBU1Wp",
  "key21": "w1SgX1ksdfjaS22v44QWmn8oi2u2ePUyabmpmf1UvWAiJZPmMiB7JMiQhdWmxgW5oYy2ztNgz7wzVRkYGzcnkWz",
  "key22": "4hx292dmZMem3Jtd7Dwe7qBehp9uQds8E4c9mVzohErFFcVQGLeRjv45XCapLtK3h6K8FCLCf9e4K2ifJHHwUxXL",
  "key23": "2c3VKeszKjxzbiZg9gYMeon7nEWyjFUbKtUMkKrjn3UCktCgDhVLX8rWGTZVpXzRad5RqYH2VLodoYLfq9o2cZ3A",
  "key24": "2SQtMvgVJRgo2AN16MRkGRsMvT1S5dn7TNtiwUQ43GNiLMZHjwdLZiqtKtDCiWXdr8YrFtFddcHUosS875VE5kkt",
  "key25": "5S5bEykkNe2h7vb5tvBy2DLiXNx6ZcY4VEvMYShpsNzXTtTfBRhevAePUj4rQVUktRW2r6uYvyiB5jPW4pSfdfRf",
  "key26": "SqANgnLG8vhHQjwYxUeKWbdAcHVGFuPH6H1nbhcLF9ukcZCi3V7t7kV18M5HegD6kkBpnFJ6cmeTPC9TqWwgkys",
  "key27": "ydqoB1v6ARVsU8THJKTigX5ytZNzyx3BQ8NSKkN69L2tza1Gxrt13hh2A629a78kXxCnMRic8D4Pcy9Bb5UPCZj",
  "key28": "5eh5NhWTGiiwtd1N7pwgiaB2LWEPs5C6gCBiPPqox913CWthLZtcUrXPCRmLekDhM6Zse2JVEnvwH81h8RhHhrFW",
  "key29": "5wnuXkrmHkfAnzRaKix75GGXadbzRrracQpeETtzoqp4uPGnWxvhtMkvNmmfyTqxyQJPXUHDU77KvF16UvqzQpvd",
  "key30": "5GnPeAgLa1A4sMNHspYGMkbbGkAdxsLECunCGmt9bKQQ5q5671xiUmcUKbUo2tXuWFDh5DK72itzSybXKXX3iznS",
  "key31": "vTpLcUrbaeAKMH69PazFV4ahADsLhVtWU6CR4jghr9WBBjuPwVQwGJYrr3tkNJDGB54xEocDP76N7Q5c8HbBkv8",
  "key32": "4KUS4oPmzd5YR8VUuh1U7sfMFj2GX3tGWRecXo2Af3BN7oQcwxa7y1QXd38VDbYkP2ut6T4ztCwn3Hnhfw7SsLFt",
  "key33": "gmh5jCM4NqbRi6XsRELyvGnPAzPMr914kWcMfBScFs7qFDSKJjDMbLfvUHXSN9vQYTrck9FhhWy85wDNHM2shty",
  "key34": "3gqp6JhA1T5HCNsACFy6xQ1S2NzT8mHAUfMib9ZeEnqKGYBVPrMA5Da7PkPKW7Rd6BGSJ7WWxjvzez2zna1dFzkq",
  "key35": "vXNsLGY769kTHih5jkXmNm6aAUpv36RhN7KCTNJ4iEahwmjPNZ3yw9eEVyjVoa69vgJs5fdMN1Uc9qDtPAh5tp7",
  "key36": "VMQStC2mCnSLemQmgzC5umKdvhxLAKvHgNmL9zWoCgNuu5BMwNWYWx8fJc8pgDRseVGCg7bR3hdsB1BpwWu5Kzp",
  "key37": "g3Juggum1o6AqNQQhhxZLiEuTQd2MqyJmiVKi8vyWBjN9YxsDGQ6YcKCQyCpPizgnV2B4jsboV83Yqo1nggXf6J",
  "key38": "52oYKu9GLBHBvfn6EWZ6d4x1YLAa1bU1P6WUUyVHieSc6H9C4dHSRkaZTBxeJnpb1FgJqtptvNbEr91EwEBnBCRc"
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
