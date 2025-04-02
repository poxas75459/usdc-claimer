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
    "iL9ha4BknvsWVVPsgp2sjdosctLPmGfsnTCXqAZ8v7WsmyiUPKTooGP9SiY34ggrkWn7rxn7hTBWEwVRppn9dfL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "erDAvH6Eo1FvUeKMYKUmeJPKDZvnqsWwyvc8w1CR6czs1wKMFFm3KzsaXc9Fo52gHsATZB6Erb6Pkbn5h2q4B9n",
  "key1": "2aMYmcU6dkCu3xD5i7mKiAtx31UQ2HU7uGp1ZM62trEcraNcUcVZjeGYREun3ofCovq47YtMbq8VzzHAsdHyK3jy",
  "key2": "35yyg224GeYbmhnKVz1ZubBKhZfJ5XxS4M5FXJBuxdfb8ht2SAHKBf9uXB7qwUy5XJU6Vg9zze4dGYPFwNgDNs3N",
  "key3": "4wtkdwoB2PF7BCGSptnGKKYmLzEGmknct2b2S8B2xU9stVYq6kvDCMXcppkMT4FcXsA81UHdbGfc5EcxUjP1MeT2",
  "key4": "59Ay2a6Vcrn8jiX3ahQ4fZoXyZT74JBXuZifTaDB2UzkhU3ggbhn6f5WL1JFk8RVnAgUWazRw59pCi4VZGCNuYLP",
  "key5": "NV5ZqMJjerQf1ef8cTZRnTry2GptHZe9AwenzUmZULRGZysvz5JXMrfi1DnAfw6vxkXDv5hjG4LvqponPKnbbjp",
  "key6": "4cR6BGkW1GzyPsEfq8qM92T17HjKY5kTPpTEEtjT688A1vNzebYv5gwrz65PteRzuxBAeU5rbTJFLzHodRefmfmb",
  "key7": "3cad5fGs6ScCSh39gXhJK8txZo6tMG4SzY8Pjwd8MudNGsYouvfaJZ63BJJzbwVegP1PpFb6H8KEqrKPgm9yrmGa",
  "key8": "4RbbJu9u1gHVi7X6HFrtSzoAL7HTQYigPfDSBqy8ct2dU1AFHyhCddqM2Xym3q7v24iT2Lyc2np84vWHqTfDnVbn",
  "key9": "3r8NEdiQxrMmcKDfvmZWzxewsuJZddkUdNnbENLQHyMzig8XFAuuJ3ZpcnV7HDA24kZ4UsbWMMhx6R9J8XKgU8FM",
  "key10": "nGkGTZ6rx6U9BgDCHFZ9YyStCZKQWdGYKzES3DhtUTMLccW4GC53KEpWX7dnX6DqRbJy5hW9ntVdGnfYU898cY9",
  "key11": "41mExPMEWsRXkNGSXe7StbmLZ1DELsZb1Swp9AueqvzctvxxyXm7vgDN7amoZSW8QTusRGxQKzqYbdxSsa2WJAWR",
  "key12": "5UFUAyzcWUCgWAjx66Vjz9nuEabAPAvnBxP84whnhmbrzNT8Zupq8JfZ8y94CRTVh28PKdkL7S7QbRdiec2vRvCS",
  "key13": "2LoS8mGU4fgpX5pJVvYt1zj5uq1pS9bkXAXbHJjBPtCcJGUxS5WgDvzVDR9h6XkkeRGiWReNvMzMBG8apdcmfY9X",
  "key14": "3opaB53KNRGAcbNWndr9TVjqnGQnkfATAKq2tpEAA8oT6G3qiASAZv6QDc974meRgQbiM9dKybpddCfFDqjrZ3uz",
  "key15": "rJuKnSsDSSdPD7UoyeDWdzrKqX9oxnvZXf1Zz329EGJMBKGPzcBqTchBHnu4DsDAKPxan1n9XXAVVNeJd4uGQy2",
  "key16": "XiyHPMgwxRGABxiwkgSoPrRXebktKkAspeWEKHNX9L9ExUYJQfJ6szA8XqBfd1oQWrqJhFmokDyt53kfNnKqj5W",
  "key17": "43RnoXd9zE2chWh8EHZXpM1yEMpZHBETS7n37Rop2284y4o3S1NxeM8JSEi4Roxakt5mZezLjNc2bEQSsFkeK5h3",
  "key18": "MX6DeuNYDoD96aHWhQgXon33DEDB4BQBF7PY3YuCNJ42vDU239pHnUThfzucnxhdNLQmiejaC5GNTzucMUmpX7n",
  "key19": "9TMJWJKbSyeWRguPfkHR2JrJVgxWL79K6ZVRyepvxcMDaxMWgPnHdF5QfHxpK82yHjT2nzXkvRuaXFSk9QwehtB",
  "key20": "3tik2TfDwAAvVXA7636Fd137wYJCfeNLktqrjSoPazaHw3pBTaDKNAzudCFtKeVzMzW3oBPdZo3DPCvaUNPXV3Lu",
  "key21": "2KJ15vkxj59smQTFC35Botk8TDJHaCYH2sKVRC2ezXkTmzCvV7Q9woFqVatY5oqDxH2jJvzGA9XQSyLhjdYx3jJm",
  "key22": "5cRuZ8pmDBGEba26rrmPzJh8YgZSsSdAYMe96ktM1tJo1dXBNrM7LdmTycA4AQtE4eLaXLdNHsFnxfY6FuFRBBoK",
  "key23": "57kg3TBbh81wWVFjmsLtrsErvkAhvj2i9QZNoM9pNxA4yrK1Vm4fJgioxz9r7y6iBLoCvssQq7WZhpQMnEY4mfzb",
  "key24": "2yTgX1vbyjzPmpvSYmLcc11xUEWF7dJeCViSZmrz9Mj6QJ3pgQHm7Gn89omdJiEVZTm2Jxah6Gtyy88C9YmkBY4y",
  "key25": "7AWUhXt3sJ1WGFZcwtj6aKvZLnUZGDfGnwWjsiknXFkZMR9pQKxDFnFda5Ma6Y68B6cpWz1HjMT6uiwHcdHaPdL",
  "key26": "5QBTePijjkaufN3ivGdEAspYnty9rhcSaANq5XHT5YuVmj14Cb41hQpqicD3bH37KhLnFBoqhWMpz7hnJgHwBRwT",
  "key27": "5Tv7YGfrCeW3U4vyzvHvPLTRFY5h1ep19xPQxW6QSHYXBJAeE5YqyLgWMG7rw1oRXfvgurFP1ZKAXnYUrBiiYzn4",
  "key28": "4ykv6aDa9qch6pFM5NkuvcWh2bwGfcrFLusuJGMTPKDumjDGBoxLDXZw8Fjfqt4Tue3rkRJTXkBfRpVLPFVUmz33",
  "key29": "5jTsCeMomRaT2c2jQXtYWwR3KVU4UCm1QPKMcunqxZ3Wgy7eWGQVhkQ6SeaTvN6mvgc7YF2pFR4LPRyuRJDdeHdF",
  "key30": "2m1SJw4GUgPpDHngvpyzw8J6pHnJdkYH6nFu5iyPq57sBf5EyJwhTSHJwD3p42ZXz9wAx5FD5vsnmP1jBzpxsH4u",
  "key31": "4owXJFCbBSrmhYWzt5dctBfHwL9sCjmkrvuz9UV87NbT9NV71ZAQFPy2A6HcfYmmv75kxomsUaXkpT65NZHyzBt7",
  "key32": "4eaXkpk4W7VXjSdJvcxB9i8njSJ5cLSRDNy1hzXS9NJaKJAjbf9BNu8PjQR6PHQjggDGuFGGmjyhCDAod7tNMu5Q",
  "key33": "5EKJpqY6x1EjrrmmcsUAX4Ptq97WxV2TqG1CGAruH9VisV55ykFJxQBU8HBiboDtnWRGEHVRDq7UZy829a5wCeeU",
  "key34": "5yokcqnkaB1wxqJMiSQUJeM9PWkJw19E3v6JybNi1MQPE9SBUpcRrkzPqvX9uurQPFSqXgZPv1ihgg8kxdabtdze",
  "key35": "5KoFek58CeBtij79zaq54mn5NSwVWxewyqaCSg64QPDc6ibspHhpKoNACzj8vjTJGiRNPTKVM4GKHWguFuwUAJV1",
  "key36": "3gbtZLFwdpZCz3CAE5y67yPpUr467v1taqNNNCF9GJka869rNkp7begdaLnEDq8GXvsgtTjnQCS1ogfhXeDa6J9i",
  "key37": "5uYMQzygX4y8coFwND3nvsqu5bod1XnxHwa5JddTiHPUv6ixaQq7BmFXwc1iESXKCLtjJvGeXfy2q4GTFtmBtt3F",
  "key38": "5cNuQyuJyn34L8L2zUg43Qixi9wLubn3fLQpfuhTLrxoU3zftW177za7L22woPLvrCeDCvmj3hL4zFLU7rvXCdtx",
  "key39": "dgtpei6o9gJcjVVewNRa1NSbNr8YmUTZAUTTAruThJndAimy5YzikQfFsSu83fCjSkVJCquU9WXjRcdKnPQdgQj",
  "key40": "36pVnaLKXrmWSM1y3NLvmNNSzUESjrzb5prBZ59Vt6WZBQnNFtrRJbK7EWhDZX3jL8gzDBdVUyadkGJKookQKBrD",
  "key41": "oJBwvQ4SmPZDwP9dgoRF6LrViCbCjxpVQmvqoKBbDBjACKc6WbrE7sVGgr1WirFLpfbdDr5PVHvFfFNZqCBHxYG",
  "key42": "3Ee9QS3rYn6XFkcP3vcbcJ9JaVnyzyDhWpcnCKm2RExeqQfU5TVQzEcu1qqVByjqeE57UhtxwBt8ZKMQtE8qckCA",
  "key43": "3LsrMX1cyrphq6zX692ewWjzWSLoWoTwLayyWfVBQT7CPc86c3sBKnvMmmdBsM2og3cJ2LsPJm1oJ4j73VJoCgCV",
  "key44": "4a4roUivo7B3crBzRP5EH5yB42C3jVBt5YG87bcx8qwj3oQ4dqFVAVb4TrrDM6hrWst3fciVEo9WDVrv2a1hYXRW",
  "key45": "XG7QhagtvCxQu6Nycw5gvQJ11QYbEZkiVcKERWKyW22e7EJiJC5hCjes1cbf2cwUFAa4JWbXGaUjECHWSM2k6ht",
  "key46": "25CNxjhJ6ZWfs8YicoPNwwWAqNtBX3ErxdVFxcF6yrs5L97A9XoNFHV59vsdQK4joyw664JdWPWQCmAweG3ysGKa",
  "key47": "3NiYhDStLiNJe4ZQFn4H78GyvLPUAHB3JYiAf7ckD5vAzksnBdiMeu8fKCkPg9EL5paK8Chgo2K85gntXcHGFDPz"
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
