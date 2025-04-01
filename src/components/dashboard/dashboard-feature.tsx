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
    "3ihU3AegA9NsbrgCX1XvqdoW75XkUebv2spj6UaivzBLgfZLfnRqSZ79djYgwEHiHon9XKxktHfXTShLhq3TNdU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DHpD4JZCRJB8GGTbwMnXkr9g6nazMVPqKw3LJVafmP48Hj8Wng6pUBMhhVzUoAwASzp7ThfKN7sD3sX8hDCRbtx",
  "key1": "2LKUuzGCG5164NFMFFVvMkCADfJnjgWsJ1TGqkwwB5fG9LC4LvYNVecfKb9mFkYFqWNy8x11i871Rozhq8KtZgNr",
  "key2": "4JcsrKPPB92bsSNPrvdcWg35B4bd4bugCHTkNJ8GnxoYni5oDuuJ1mtRjSraXbQeBTnuhtxB2PyKM3KVJGjngjZX",
  "key3": "ZVQgHmTsC9XthaDNVGAhmX5PGmD4CG6WMZmYmyxdJSeWN4cP3PrHrwQJPmRYhfaShs59ysQw56txttbEz8nXPRe",
  "key4": "3WnduR8ajzHApGE43edHUNRw5o73Qp6SCRuCPCLJ2LTx9rNBYHQiXTCxD48ttPt6nVWFe1tBofz28QUB9iZ8WAHj",
  "key5": "65D2Ej8VLyYeYdLHKURCKAtkvpoAzbYTCWDmor9pcsi9mWGwap1gnEcY6fkDTrqP97mTB2BPxpRWd6D4mmcUxmC6",
  "key6": "57BqGsko7Uy2aE7X1jaWMpe3ZjiC71sFHaoeCZjUh1KMPoBrvVoTuwMXFD1p4obbtGeqw4rEXGhw3PvsvyZgESsL",
  "key7": "4wJxPDgvWLJ8pQD3fidas8rX7WygG1xhDc9vEeDp8T1SzhRwGfpdTzRemQiMwsi29YfwTvXq1ufhUTF1vh7nnXZ4",
  "key8": "ypU8VFmUfMLmWM9LrSiAJeqvpjMQjhcHQiRRM3Px36xDfS8kdER6rAxMrC9sVtLYaT71ydAJDUr6SYoyySpo11t",
  "key9": "4zW3y3hdrCqMUL9SabXcR7syewbXdF6MrJeux7bFNyzjbsCSmG7hN25C1pimycLjbgVBXU9P4W4ap2VoUKE22x1X",
  "key10": "2m5dGAiY4NuUvSJ7nQKp4M8tKSufwyRZKThT8exm7w5MH6fck5iDkNPKWEh6QpXG549Ym5KjMDLJowNrhcUJcmGL",
  "key11": "SyG4fpwvG5wGtAU9tLmp14SH24M2FE5XMjz5U8eGjbDp6j6zb1xsNwqrbBibQGDBZ2ZajwRJ18c1bmPR1pbHQrs",
  "key12": "2UHfrAFrPWAjTpP1X1MNcTawzMiV7EPSogSxHGxJsD8Tvst7faaSKgCs6frbA36NUM3n9yW4vAF4DMKpCwMmJDQV",
  "key13": "4jLxaHZbcAvqpLXt3Xcgy9x9iruPMYn9FJ9dJknr3dWfzsEnC9nx412NnbDRgYwvG2G659rJAgRL951tefkwCbs1",
  "key14": "Ld5WLvkWvtabfH439MizMJ9xoFT243MSgXrY4krfomVazLwKX7SQDiuXgkznwc8rtnR4ttGr71WE65cdCUJe48W",
  "key15": "5jM4J6g2hZVQBU1njLUkib2NkVzZK1LVFMrQwfnZ3kJDHwvRLX35bB2vdN8UKmP8eJbAbpoAEGcz28dWG2pdmKok",
  "key16": "zE3k92aDSKXQzvKiiWo8Ch8bJ1q7MiKotSGCZqcoP8w6QxSfdqZDWt1BryzDP3fgXJT5XRyixovWNuKGEyx9McV",
  "key17": "3oQmRWdfBRBeQVSJN4u6VgqzH41qJsFYeWkksQy1rPdA5bv3SCoAnk22ZtmAknstSucbiKyS3zpnizGQEUUnMfgs",
  "key18": "3boptj1rM6DdCBRG1jRar91nc39e7Euxjzsj5Q2tWsVRNy3xWgFZBFM9eVL9rKXDMwEBpGAeCsA7mLzaodbYQdfA",
  "key19": "28vp5tcCMbFWwKNggVxwqXJtB3YHBjuPg6gU7GNJePqELFug4CH3pgyjHtEHfahrbR2tRMbPpyxeRmkBccsARUfm",
  "key20": "4etwfFrTecRHMBCLKtX42VQ7JVSc444Q6ZahJtVe8rPFdmqywupGXeegtkxb4U1cVdGrovXZ8AJwBTY6253manXL",
  "key21": "5KRs8TVSXhBy922HrGCSce3KXz99iWw8xEpupTtkuH4M4dKXoPv951wEJERzvD3p4CD8oPp5LxVdukgRiNhYSNJq",
  "key22": "52v7qp9VBsXJZCSB7LiZi9DEscE35xnGgYH5kJBoku9kMYhANPHCnT1YXV1cWAXcqtX2jAdMPdjhAAxbA7mQgXG5",
  "key23": "2ZsjDZGtprhxw9ZDNFbycDAxPLMBpxLe7QgCu5dGSC9TExyCao2j2opSjgb4ddMWXKNu8pVcW9bPVG4R7D47YLxS",
  "key24": "44Bvkgi1gTBasmXTcBDFhM6ctbdiNq1ankaYqes7VfYf1uwffTYDiKA6asKunTgGX6uWAa4RFyynYEWwrXm73Djq",
  "key25": "28bRq6zXYjsCsHtcKrnpiCeaKkbPYkNPhM5fbBVf1jFhdpMTpSVvASXtHhBDXsWvLva6fHawnTf1Xzv4ybUE5Dka",
  "key26": "3QkqmWnuU3moLLei35B9PAM2dJYeyVNCk2mjFbfKcfvkCCfr8mhFw8FUihyqsRdkKzFuvZSnwsgDhQCdYJMSKwtM",
  "key27": "2FtmMZGY6h66Pot1qSkYNe2wRWKrZJAgSrSRBTnL87ZWcRf3i1vVgMk22JkpXAzHbVZ8bpFRqHypdFvQvLJa9X3R",
  "key28": "3jQp3CWp4DmUonRcRsVZKwGPCvvDqjesaF7mvAXo9Q3UH5578j39iBJTKXvXjkTTz9joJxiEaBbCdSem8SdaB2Wg",
  "key29": "kKduxka8Hq544Hwbf6UD7tnEazNBLYEVn6bjSGFWjbD8iekrv4mX7aUXegxcexazXE6iveHDc2BR2mQ78qWEN8s",
  "key30": "2BWvoQizxd4q2xws1fd3SnaNj6NtKuEvgGn4u31aqzMzavzvcJfPe3kqYn2DKZv9Q3om4gw3LxgnbhLD3itDhrkA",
  "key31": "62UjL3UTRhfs6DJ3LaaMGRsbFxM1CQ3pp4eHatpJkiFWPCwcjpnCXQuEWBAnE6esKsgRYUepyhHA2PRvSNQuweW1",
  "key32": "2dzDb27A3c1jYJ2gXAdNFedvwKefjXpS949PvPWqZp3pGaqShhARxgXqKQbo5smr5Goz2jb2Et44tdcwvAiMjRkU",
  "key33": "492Yy4kFu9Mm567Ty58bBoz25H7pV33M7BygCHhB1gnbky4ByL8UcL8QDGLBF3QF6qYvB5JeGiVRdbe155GvkWKu",
  "key34": "7qaBV2fKpSa26Z3bKL4AkfQCfanxrmj6N3emVjJYnaZmMnuxc2W7zjzzwwm8urZckYz3Nj78No2VVAbxU6RJ4GT"
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
