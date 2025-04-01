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
    "5kjyUy2X5g5kH2WxLjhq9GYSXzjxrHN5crPf7SPHtwKQ4GkG6qDbvaRnjvPhQLZMfkq7eRDu2AdESJZDi7kqX5YQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kFMekdaZrmnAnAzkdfsZr2zmwQmJPfPszE6T7VURPRo9C4pTmqDgmBBRPWM5T53q5gXdKGd8Dvynd88CRsNR4Mv",
  "key1": "2h3QAGw8oErFsuDUjEC5XgkyS5v5XZzfKtrquzMcEbmPa1hUnRyATzUmtahaAtYso9wygujEbu5qR1L2hbkf7J1o",
  "key2": "THFYhRWHWX6G94GUhuAAwNAQ9TgCWmqtZpodLfHUiPBTXw57ViodjCwwyY7Ja5pndNspeVrx3tCwBfDtXT27i4H",
  "key3": "DyGpucixfGTVBxtkaiWoRoFaix2dEjMPNgvePDF9zGGH6R7ame6qzG9Hb7k1J6MkmzeMjip5xCJD9dWa2RYWNTu",
  "key4": "EiWZMmhJy4zCYvX8MfUTX2to1uMnSZyB8hjQGtgKoVpkhRqL3MJWerRDEemfN4dvufHNSL2JbKmVYQdhiBformR",
  "key5": "46KLwQcAbKhcpNCnvHt1MaZ2cpED4dK4AGg1W6joBoNnBsvdg98ztKKwMCGbShx6LwvokYLATKKL5fAJPeovugtR",
  "key6": "65Ewz6HUc2YBjMS1qjdGbTVQscxVi8fvmssa2bQgUTtgPdQyTNYnBcnwBGZRGidqZCh42C9PLLs3bGE6JmDPuKUy",
  "key7": "5Rw5ua4Pioj6scYVQU2VNvb43CPW3zVh6YyPnsd72oDtGaCnwWmkZj45kAYFngqVcVYmZ2wjxUhrq3GKUHVUFBSX",
  "key8": "5YNWWLLL6e2A2HFzHXDZScZ3tQntFHRfqUdyFn485oxrdUVnQM6Y63oW3PiGh621smiJ2HAgrBX1sHM9cY9CotEW",
  "key9": "5sJnrQS1pv9aGTNQQMx3hZSnmqmVDnwdMwSJbn8gCQj6LhK34QENATN63TMFpsGRn41xjFA9UB6jpRJnaZWS4pGd",
  "key10": "2aKqo39ta4qRiu2usKE62cT4f6TkFAmVezMDGb88zE6U9nLZxsN5YPTdXELxUvwVfK6UvCDmTnSNg9CBDf47UPme",
  "key11": "5Uje8T7UQxubuJ9Ndb2643DhFKG6Y1AewtA3f39zjLkoKPokieU3TZraR2WezLyWRNHY3PZxCQrKPq6hAav67t8e",
  "key12": "2BmhxcNYaLUYke98AfwfUqcVEU6e8ib7LrYBHYBVA1oWE6AgKmskALvEia2q72WbSJv1gq5sWsTptoDhN9M7JVPX",
  "key13": "3UHnkT17MVjxHA9XJ4g7oKCyk9V5ERTzBfoMrS2ixfYjFzmgVRBrAnZnuuTmwgVk5zw7ccKjZXBVfy9E8f8An7UE",
  "key14": "2eLXx9XnsmuBaak5PAVCepE9jac4NVtQs4Dm6woQagY6Gj3fL2sCxKuncELUFYetgHSb8HNqnDdWS7C9nBZAZWxU",
  "key15": "4XrN5uwbh1bD5Y8HywggvoK7WuLwQ5j7hbowE9r2rY6YYER2HqYphHR7YERW9aJDgyCWx72L4XKEVbSWZJxX4uni",
  "key16": "3xXdmZLY7hXFc7iWXjhKfcnFJfDGUxBmhbB46JRezJWzt23g3EDTmiMvqv2xeifU4DkB2QVL1zq5sqxkcmfZWbvs",
  "key17": "5QzGX2xke23JHD3rjXQLE3H7y5rgn47nNCW4Vu5DS78wNAqpVb4P5Phv4ZLHo6CjrZoJnPEUTDo9nHCaXzQmTibR",
  "key18": "3C6ib91ZmDgJSEroLK9DeesXoWbPoBTDAXxkxGQrsPpGQnJ71iTQidY3CCkqgeBw5DCtaBct8qRdp3YXC86AC7eo",
  "key19": "c3TaBzaTehAiMg5eX5qo6dmGPitct3ZiCAQRyyDcAg8iQFihgP1r43rN69LVaCDQPa2KMB4DJmtBKAJzQDBiSpL",
  "key20": "2UuzNaWepgchSCpbpZy2du7V2BMXgWuBENUKxYPzVvtGyCXebiyWuSF1h2JtvcujCDr5puobdy564DpMSq7efpv9",
  "key21": "36Q5XUs2krLiMdMeJTwXfSZKsznywKUJt5uVabamAD6f6N7pPfDqmGwzKBxckQLfikBbGnTd7uwe47QdRq63dowW",
  "key22": "4NtkxANMNx9g6WD3rmTrcq4NBKwTP9FaX7DSjrW6eg9XVFt2jB4fw4SZayJ1LRTcMXSDPfBMm5RLanLoGbNk9Xt9",
  "key23": "3pX8Q7YHnQizn15MhS5YxP8WALXzq9ECpcW7p7ZBcHLgfHPkSbgxvtw1cCJawN1sr1NLQdeTdWZvAGxGKbkPFHfQ",
  "key24": "4qhmdXYCAMh3gyz7bpCnS8dge1HeF92Mi6fyRGEfaQZbpH2YbdCd4zYfsCK6HZSTHRa13jDkHkt2EZcfmBm9tbQW",
  "key25": "4WovgSC8rYX3Lg7fJ7c7wXk8EcujXvrAVa7D8SnFqB19zwsAkevMBvhNtHAQYg6HG52Wp8BpoPXj8SGVunuoDkcy",
  "key26": "5BtHSrkUzeeCY8AvT4xjr2w9jqukiFupx3ibAxqWGVPus9uN5JVJ3GSBcqdAEj2DQ872Zjh8zLfR9PgwW35y6k1W",
  "key27": "4vzwqoMtthoKU7bVZt3BxtD1qE2KhxovDjJerRsYSmsvNsYj4pDRCGwEHNdq7EXotojKh3qPAVooQiiTKzHzwgkg",
  "key28": "W9T8AFADVT7RJHEXRZPWhMZCu5qsKxjkeSBkG1kgJpn3Nxvzw5tN8S5Z4vJ9bjH6H2LMgCQrTaeE7XC27H94KWV",
  "key29": "2prZGsvmb6AUgtXS4UNFvxB8fEjgzoUwxL47f6ybiozRe6ptFjjMjwP1tGnLmpmtFtdC3UvWv5kvfkPc4jLLcHm2",
  "key30": "5ZRB7kM1nvZGjYRGuE78XXHZThoYjwdBjaMHKwBKn7MKTdVLAx4idn8RMWuM3D8vKcRFeqReGv96Fc9C1JQPeyLQ",
  "key31": "5Kf8hJEzikYxnSHuEC9o65NdHb2rijBsP8q8tYAzy3W8WiGhx4PXjYmg27411sSX3e9cySREh4HakKKYyg3bUjAi",
  "key32": "2ormRgMcQ7ELBjwabfGnfojUG4edwjbCqCjoGVMk323TefwbKZU2LX2Bz1b8JubrdoMez3sEgV7i8M7orLWPokMz",
  "key33": "2xrsuy7UX6P9PjJW4WiLrkxPywBNsBaj2x52HYiH1JakYiRcYSvkaeCM2taTYG8f9iFeuw3zk7ZvuW8WVLDtkodh",
  "key34": "4zTmdercYLtiVPwRS5CXfoH37oLcTKZEDmuLCTUGcSvr7vmAino6yXEkXg2MxjM14t4S7vhLyVw5sCvSWH9GZZkv",
  "key35": "5mSCA2CkFaVeSR7pbjGsgFGcWgZg9tz3cNh4ESLWGD3ihmBHkD7zwQYHsbdaJiuXBejZovSj3sYCu3Mhig8P9Uj9",
  "key36": "4YwE246Z4uMkVeRABHiE9m1yXZx4NV4yGCzUJncVLN8LUNshwyrJmpe4dL3RPE7kFyjN1VFoGXNnESiBvx9shfrC"
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
