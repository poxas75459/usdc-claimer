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
    "49rELwEF6KgNsU76hQrGeSntMDojozPSP9fBzuVo4aCBJaudwxSchofyRVQLhoebG6PyZHSeZPu78JHzM4mRMXMa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TgmTF6ZCvY6tULc4fEFpSDYhJvCbv2Vc2u73DpsgfbH5P6ENzZE8f2zkNeaEFQRdxpkB3keNRgL6YggLipqCNek",
  "key1": "6353Hfe9hHdHbLMMrKA88Rp4vctqgXwoJ4Dup6z2rfALZGRiWRgi6kKgs8kHanMqmS66XgbfLkDfiBxyuJqZQfb2",
  "key2": "23QF4AzqEbAQpa1iJVgQjPbuTQaPoUZvAr7eFTy6AWwSSayctUuS59reYneQJDmCduCiBLbh6H42gbDGaGkxSk34",
  "key3": "2vE3hw9AsvyhJEpm9P4TcrWkdprxkkGe5Mexn5AyZ413kvrdBTRRpNPfqfF32sQZMmwPdMnEauhmE3NrYLUux5Ho",
  "key4": "3xjXWj2yiEwHmRQQsAGDryHVuhy8o7SNr12cLsnAKj6ToJbZ3pSJ8JWxAHcihy1xBCdpkhe6v3yEidicE2fMk5VC",
  "key5": "3rLqwBdmRZUmwMiPJ1FaapsEKeYdMXvKHgoVswpNnikJE4WbkQN9rgWZF7d8vCvWujnUqDRFuDf94czPT3tP1gPB",
  "key6": "4bx4aRaQhieNyRCftfdrVBAz6odf5cMxn2u1H7hqyuH8n1QsNnsin4aTSpz5C9oVC4BCTvCXsX73WXbeuPnC8a16",
  "key7": "4KBXeyr1PUt1soDCaAA665sw9t9Ht6EKyTnbUZ3EFDcZoriDAPynNWkcV3U1iHAxYpPoCPgf9XopemgCnoLpVvGv",
  "key8": "3ifyzvnMmnfxuy6uSY4a5xw9si5zb2yhqK56dNFUJz8Ukw3yJe5Y4cYjHZL6z7JiBo5NTxqqFJtghgBde9Fc3vuT",
  "key9": "4yQzSbvUNXjENGY283aUuAukd5DDN8RbhYrKAFwnQcUugpZs82hW7FVt8xT583CDsEmxLngMpVnEuyHNP32ozCvf",
  "key10": "5YASAG8PzabDrWFgFpo4xREJ1tW6do1UkLgKHQrmB2KAabMEaLPDae9nbjncTyHM8vtJBBKLgtNaghnaiVX5QeKB",
  "key11": "3oJ6xhLMD7uoiTef4bgTnNB6zCUgfwR1Z3utnbnDY5Wmz8iEqjVo89uyeML6RpS6wp23uF8RbYKr3FwchyjETnUw",
  "key12": "uHiWCfErEAeasRFAZxMXF1oiyFgaaszu36YLCVwvw5CfRhvviPmVyiu6kwU8wNGfUKmAB6okHwCeXz2r3A6qR2X",
  "key13": "3oCYdpEAcmEtv2D6YnQ4LWabemX72zuKdFA9EAUwUjUSUxNQsGoNjMQNq4Qg4E5DbXzGp7PKBzEuv8TZCAjoBy8X",
  "key14": "5FKz3F6vkLvZqUYPpVBef7LYJw3uzBz7JW1GvgiusRaG7AWtoM3L8jqj4zBzqfi7uA8fJ5o1jVo8eSzCTtRkQxE2",
  "key15": "2EDidNdNmxPAXkiD7NGkdoA9BdpBvF596QpBb8b8rR23ra4ndakKBatq6Lrft8j6uneGmvEKx4btYYf5R7bJJ6ci",
  "key16": "5cLYRP4i3kf79LcMEUmSFex3LBvvzvHkZEs8UL6XZw6MsFxySDJLWwaXr9EE25K3rEoEPvCzYF2N9EzigpSdEHbV",
  "key17": "2JB79xfTunaxzxs9C6R4VhghD74RtE8NQHuvUM5sF2aJLx3eiHvs3gz38kBw7gdg1keK9xWSiv9wAZorPUJVkaXy",
  "key18": "3L4Lzdr6RmgWG2BNn5GEaRiPKFeUiBo3A5KqaFzg7BRWHwh6xLesMZkLGnR5uMYz5X3Ka6MLbNrgeUEP1JsnPMe1",
  "key19": "5vM2uk9bjvQTaaJQMMrzNwyryxRTqUx4j7b7FCFHQ4UBvnfpd2qf2LBqVxN4ghhrUR4pHdGubAQDATyDPAkcx8c7",
  "key20": "3Cqs5Uu813FQbDpAKExxe1m4ZAfDdNLDVbwSb2XfkbmQWJcYyz6hZpYCKnRstRJQDtnR94UHqbFy82hdKjMbFoSg",
  "key21": "4j8JtZnA7bLazqDfvVZLP3YQeQEhyULrGEX3MWtt56GYLHMmpZgNQUGfixXkoBQR9hu4cr8e4BqeKP7Lo2mskzjX",
  "key22": "5JdeuRw5bU1eNLd1Fz2Kzg5r4fxZFZPHW1soLzqPq3tz6HFGTmzKpNkBLV1JytSxQghwiKuY8dWTVxptG98VdMQZ",
  "key23": "2PZHufRHv4J78AkCC4L9ZYynfr4j1W2asDyk6fCarvY5pj2cK1nbaz2nWXez3NGR5JnNwn5Sjy9hbfeLZtXrUxyS",
  "key24": "N89mTtPAqMqqq5FBpUxeP4Ud6A4qHaqcxmP9R7oZPM3vMZiZCV7qE6Y9bT46VcKzykYJokXhtN5JeHMX1X8iY28",
  "key25": "ZKNzhM2RMFTBSNUUagAAj4bi8iiuPZATp2AeXLim77L3EXEPbwTtKH8Ny66gg6oBWkHABQCbzdXuwqQzkEQGAfp",
  "key26": "59LtPqGBQ3vn3DvhxA8ZQZh7NWvYz4ZC8fC19dVNQXdy64Tc7kECVx1c7am1idmELUT6pxTZ8YAYAYJsQmPEd1Ss",
  "key27": "2QQV4NjnL1bdihtPCSnB2gGnGzPa1hrfXJcQQHMokUgiUdxwsRRyba2ykBGtA9YL5HD1cBdcNJCWYddP39URWpA8",
  "key28": "2RErjbWZkv1gPXY3wDR3N43TbVBsCQCxwgybzPgToFgYcAPna54RQ2t8jhTykWnG2xfZmTLV4ZzA7jbnzNMF4PPB",
  "key29": "47hKR6GgaQjtYKoSbTmE78CsnrDThBg8rkVHU5wCHteZNaNfHCcciT8Zu9ZHhq1FEPG398vaZ9hBoCuvaUAZ5PEd",
  "key30": "3Y6h2CXiG475qfAyfpjKJoEtHvcVSzZnemeq1gpH2ngAtJj1zYm65obNdxcB7qtadtZiN9mvQKaNYtjp55Gy154r",
  "key31": "5nLRtg3roPiaLkkvf6V1SPr7cW8C7s9msn8SBdeCteneqMDhTeMpte49ccjsawMh5shCHp6oZtcbpUSeyos7WPoR",
  "key32": "EbXgfCSJqDouJJ6RknriZFHCyGVbS8sgVv7Sqhf9353RxxDYDVaKExQVXhZCbUtoD54opK2tVaFGWxtuUJ3jjkM",
  "key33": "K3V1zsSjVV5fVyXw66ZM3Du8gYiRSiKLMBsMKpFZSFDSDfchBZRQ677USAk4t8M12F14gUhdZAopy9UkCMDRHZk",
  "key34": "GCrw2UX7dfW8P6ueoZ1wATn7TSvzfuLZmsbiU4FP9YHaFUx75DdxqxG1fGpkwWBHw5nrzVkYdM1f8uDBvWMTKQG",
  "key35": "63iwrtLQ5ymWoBZXXmaMNckeztf1Y7ZqrZtkmnLVLyrei2Tvy1yAU6R9fbf8nxiJYJkC3zDzdVBYo5pDVgX7c8eq",
  "key36": "4jEiSbGdnfauCDHLFcJXEhKxWTffPUBP9dE92jUZSQaWsmUSfsmsHCtfwGRhVciw3RbVrzY2gPS4eZuih4JEwW4f",
  "key37": "39iMNZd7vLifePXYvJuqifXh2T2bvxrUZHEfHFaXgqaR18Y9Rp9WjE11R67YURbva483sRsK1hAYQJxgaVg1fgv3",
  "key38": "EjcQaA2aqTPiF7D3YUV1qUz8TANpcBEYDdAgkMXp8MuboqroNzgYLWnrb4qeCWdYxfnC4rEVL6BWGv1PdFYPTyj",
  "key39": "2HZHoKS7xL4c4nnyu3m3hFbQ4GLBnHExHFPLkBLcXWcR7wJhNH2nWKB1sxdKsz9WyAoCcz5dDAv9S64hRjDoBoYb",
  "key40": "39jooYZ7WZHZ6cBCZguFsoViTZfgdY7kaBdvif5DrTY4xqxkti121UZWRQ4m4KbRVMkbupjf4NhYtFbobYvkeHDE",
  "key41": "2BJHuomXy51kev4ce7hQq4XVL9WTz83wcV1vbraSR2CiqUGeALqdDgRfZkNddUkk5cd3VwBSvUUhESrekxhxGnFb",
  "key42": "4rgmqz6aXrcymnDD8uNCUbvFRQvJTaRcjs5BpwcryfxgHZ7cKXLy3LPhH5t4y3bYLckKaC3HUknoRYCdmHmPPTc",
  "key43": "5MQzZFZ8eqkFd6hqk1c2i96Vk6LfNMxrqvcSWvndyg9ocoLgXSFmA1PVLEhD8aVU1zTmiBVk3qaEB2VwjTE5ug28"
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
