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
    "JUo2fR3JGzqC1o6UdPiVBdHg9BNTPAPDkKJgEbtwZYsgKm3H984sjYTPB6ymYTqsWW47WercB7QPfaDepHgLzH3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q6emCxE6on2wi8iUSBQgFuxqVgzHFWF5nxjo5p2DKcvSKhLNSZj6JX86Bt9n7rWFgqvjvttF6EuxK5fBe7v8wkE",
  "key1": "38pYepoxfumkhnjYz4mhYTDQZcYDTrRfQnfAn9ztkoQ4vgugUDQgkAS6fegaTHxqr7Hts7wdxE34pbrQVAirLMHn",
  "key2": "2oj7QGaPDoTibwj7iCqNXMGPK4EFRbZZ2XPQRx8Py3WrnMZZ59iNRHzffhATUzDXegHhNjXsAKdiJd2zCF6jEgsE",
  "key3": "4t6EmxDRQ9Hgi3UU24sYhGj73AhFyj7GG4o94SkHsg4r7PRSuSNZpAJNVMRj7nAKnJZTfkbLpuk26VppWoZ67dED",
  "key4": "2tUGTckt21HMSbKxbpBygMPcVie5yM7x3rdGUkDTZb2zEURnnpuHMc7sRa3jchEBvCUCS82nYbKzKvziiDxLRyMQ",
  "key5": "6sTvN3vHBvc2QPC1XKy9K2T2nShDvgmS3KsRKjrDnxddiGiZMtmPG24Q4gNZVCVDQ9NSYURCd455gu6SsTLwxKD",
  "key6": "ynMfzaYYQU36PNGVjGeDMcRgs1NTHkuN5k6Y6bLvFPnEgysHiNgSsTpThNTKWTC4naHP44hSZgBkH2vyFKrL5XB",
  "key7": "127pG6cfemxhrEZSrJRttsNzHzgCvkCecMtdTg5hRqvBJGdMHsphaBzyrsniy3tUsEV8vRAKqpTrF4zyTP35if2L",
  "key8": "2jygUaPPWGdBvFm9e5TEJraaA4K6tweZxpopvBWGM6swyVPNpj1x6Mhy3mpRPoK2DLztm537SVC8zptkQet13cji",
  "key9": "4wBHFJphm6pmpFqBtmxXL7k8Md5VxoWNiXQegRi8LoUjZm7yBbfFC93QEae4hX6gyRbXMVsM4wRdF6zkrbNj2BsF",
  "key10": "3G1cGRyiJ35uh86j1yHEUHRB1WSNczbj1NfqYdxYMTRAjcZWBKYRusamzHtMGzaXQ5aCE9ohYvmquph9UPQtwMzX",
  "key11": "4jvtv5aJY3HLcFqrxo7cWsmPe8bkAbZvwsFJxzhnuskgQJUDK8FZq9gb355kM1mEqU1eNqQ4Zh2xS8HN2snqRjqd",
  "key12": "LYugbW6XPUYqLpCrGRfgoqrxKYxcDfGGDA8FAzNpUJcMidoTe969gWDASWp17YSGtpQ79XEract7XZowj6w7rGL",
  "key13": "xRrNEYyXEnFJYV75wimrEYARexJVg7jjtSX9uww7pQao9ZXbDFhrM6G68BfeJChA3oHcrAKxjpzubLhxusE7N7Y",
  "key14": "5yNHCYMMzRoSzxUSa98TNjPopUhAifHvtLftocrCRcAHENWsBsB8MvGzgg6vr9TGDWwqhSayfGbhqeCS7K8eT1mn",
  "key15": "4LbDZ59JDrccxBm4kJiEeZmpVHdJGCXgJicPkizPyhrAP3FSXUzxSWxEPU1Bf7jxnapRcyqVPXM37KBDKHh4erkL",
  "key16": "YtSzxx1dHYo6S1iEyDnzrZhT31uToLjS9ooPqj2CWpJtcwNgqLy9XymCyXUeUvxAbcmuLnMKjT3VpDGDn5mcbGL",
  "key17": "5ZGKBvoeWZQd9ML6BS6aGpoNxbWLkBoSK7gAksoXsPVMUucvFZV2x8M4uguhEaCwr8RyTV3BrnPMqm6n46fAPTt1",
  "key18": "49FKcVgS5Qv5Py9mEJvVVnWpxwRtp7TL8jLtcjvHNybD1BUps5n4YYR9EEMTqMmmQeK62fzgmu8hyFdWtoZ8T61e",
  "key19": "52Lm6A8q2A8kGDCYYBkSYsrx4oQgCPYWJbuTdN6n33wsmXFfw2TakhPzWskTKaxB1jtMmoSiS13Te76424BcAMXY",
  "key20": "57pAvxh64C265Se4XcRms5kZVqQFukUcpfEsypaTQqoqMJ29u5AwDqX3ykf8kLXztUQ7EnRu6ZEW7L4BRegLEBj5",
  "key21": "3gzCyKa9Fphrep2FyuT6Ggrrmrdd5hq1mMFBDBd81CVkWi3HMxDrLnsCX2YjSSMroNUJbPu5TcBRX6T1FaXEmXjN",
  "key22": "WfEjAGER3msFYUZHcM6yg8igsB8rgcqNSQdajZe1nfwYynMcekxPFTX8diVUMHM9y4z3uaH1cQUeJ1NMFyM57iL",
  "key23": "22DFaetfRoNqg2fYS9gT96VWa5qrZHe3GoYr173ygXYA7QpbvnAT9qXvcJ7uP4Y2Gb7kdjDzXWyymx3hCWMTvtSE",
  "key24": "4hqGztdGZi6dzTe2df2UKmHYkZgtL51q9C2cMMqgWspKgQFq9yX4NQHTXqCra3QW8ro66SKwMSGYgB5zkuRUxpcH",
  "key25": "2sYFEYRb5JqsbMpLz3GRc68GVCQ52Jut8ZLdFV33uBDypssz112Tgd2pUDqLTLLPjuFfqCLrJEpf6HBVjUu1qGgU",
  "key26": "2V6WQoGmcVj3ExJujSsTQF9Ws9YHHAkXUW5rDa7WxSX1k7jDz26sctQPkwFxEjh1qeqtGwu6BzCzTp5UQCfi91Xx",
  "key27": "w7o9j612oTC43177c98nkGWiaZPCDv1R7X3zbCot4bwBydMTduk5s4UcgBTjZyj1Ls8BEBm4cXVryHLzLmQWbGs",
  "key28": "3XDdpqi7XktkbrsSMima7a9VAWj9obZ686oDSKmwrmGoc7A2yok27qZH5ySoJvr5N3aHoWsTkGGqgs8YWnhVJZ2d",
  "key29": "4bhsxQx9jnpPTftDuVpKSvDvJV16idfEBJjpbmAEhxMLeVfsNoX9VAY4EvzSbKNEZeNVgieqTAWcKTDuHYNKvmkM",
  "key30": "61AApYiAZQL66Kw6QFFKAUtPvxDqguiCmf1eUW4KWp265doUYLEDo8Hh2fhmrxKmCyaSHUDQDxJSa7ABEs41P5hQ",
  "key31": "2yL1MGTweJHAc7zXvx5TND2zgcNTQMYN63UvjdRNtHC34dhQ7tCRm8SaWDEVu4VFe8u6QnU5mXyocW9wPTnsSgmH",
  "key32": "443PRKeg1iK6QyygHcfZD4uh8ZviwpSv5SACJkqCW83aK6K9TNnbV4StPbvxG3E5SoCx7FKLc2kXqxr1VMYcALZP",
  "key33": "21HjGuw1kA5K7wEyeDbSaYy2ARMN7zzwCugFzPqUAUTka73Bd2jJt5GRj7gtHKBnFsxvpixawwhwTbD7qDwhsE74",
  "key34": "giyiiAESECbe6LR9HoxWArgyMWv2NgYmT4eQZsBcmTnrVC623EUC4V4HPtLV1pRGqBb4pARXtfC22cx2s2acJij",
  "key35": "4rDBtm9xjqYLGHh3vffSjRTgpQGodipFHMKjST9wEnSMi4gyUSx7bt7Ya2st5gv3MwRPV7Mwie3JCSHoL7v1F5vP",
  "key36": "2hNHaLuHAvfoux6zMWbYJ4Eafdb3r8VS1i4AN5F4EAmb3BX3eux7u4CfgherPThzTLR9uFC1KrJej7eo8VxVqThG",
  "key37": "3JnUZ8o8a8zgb9zKLkWBZxjPYgpSSKKekej21CfmG9u4M322d9W5wnCoEJRtAAPoYYsrsRSDmEqu8Hh9ztrfu4tC",
  "key38": "22UqCLq2CujVN7Dz1dJAe1N58ZhnTZcNHtQLMwLGjEcQvZhFsVARcq2kWTjkoCYUaeDXJP8hTUvs2YdgpyshZLwh",
  "key39": "5fqFwzfKQmkZDSXFkosSqjJksfb42yH6H2Xq6FQ1bVDYhDG43C9dcmv3WiBkBDfeRsBT4dtKgR71C1rBGAXnV3Lp",
  "key40": "z2VtZfqY4jtwaG7zdKTV3FPT4s2m7RyEucPB6NbuvmhD1XfdWboHWfrrun5KjYeE1jFxBJe5VZXrTr3hLdcMwS6",
  "key41": "5tpaKTRaj8Rvo8CFGsFNahLtDaFC6qm6TSc8gFgYGnnqaLdrxDD4SsjDFKmzMA2hsG8NqiHcpfzMhez4vBMa69MH",
  "key42": "7cw5gwoCg1tYXpSEZoyKr81Y5NefvAK7cY1CFwansE4tJhVV7JQ6kwd6G6cY86rq6k9bU55Bvf1deiZLUDv8itR",
  "key43": "3h2mL8gbJLrEwiechGMj9JyoTFgbMciToJGYsX7y4oVD5MaMkJDN7WNUyjMYhwpBQSZNk3dKqZkntTADbHczNJLG",
  "key44": "4ipp6Aikajjyhe2CnZWzYGuCAJjczb35UMkXTuTx5QNw9ZPMpkwVMjbm21DHt2BxgQpEpKD2p82m8d3Qof5qd2uB",
  "key45": "n37GJMikoM7buX9VHn1A3yfu8bicS9jqwAdJxb12CkHFGQdgpqeee2zWSrZ97rCbpfNwym7tLPB316xswADcVpK",
  "key46": "3HxTqRU9P5PetAF8TLnVhN9FB71uBs5vxxUvkTM8r2Yqgse5uiG8axEotGvMbeQkXdsQjmM9fWqWFaHYzTYZ4LVF",
  "key47": "FsURuwWwdhG5gYFpuU2WkcHMBF3Xji9Rp9uRrbWu74XSi2KW2cL2LkwFGkweBn1wbafXob9CiLwCQPDy5H9CmmG",
  "key48": "2NhShJUJTawQJCkt8NE6NvKsT9AcuchNqUd1wbUoXUd7NLYu1fqV3gLz8jAZzqt5S7FMbbi9rNKqC5xgwS7dEwU8",
  "key49": "T21f8S2EdGvCNDVXXLtx1jSeTfPNreHemF7Bfxmm2AakFXn8eHfoFgc6q3GDWtutGCx48bziNKsPcrDa5GRbFwz"
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
