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
    "k9UFBtZSweN8No8c6RAK3EcJEKJSfVhk3dffSrjXMwbPuj6GYWoPCzi6CP2pCm7MH8Ki1WKRVQ7TxbjZpsRMs8x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pNpAZ67aqFaNNGbfg39fJdnvPW6daJxFtGun95LHMx1Jz3EmiMpT218PXtkPU1TSgTxshF1NNpvmwsaawyEzdLh",
  "key1": "2GG1EuGqfiKpU7eASxhFqHHkwfM8zrFHT4CT3yCKRQ3wg6wTgVA1Ur5RUNE3Waw4A5LzrgjYzCY3gGJVAC9UBnmX",
  "key2": "NYzFMo1yAdT4NobAXHrtyaWvj6UvR8heF7vHDfov594DpPMhYDHEL4uPRd5SbYmhyYvTCyuRtDfeJZSdXQ6vktU",
  "key3": "5bf4uKHVZcTQGZiXSqbkggZ9qdVUBTWYp6zLx8jF2KdUgPs7RTRGGwMPaqTk24vaJiMtQwvKQ7q4qJx9g7G5EJjY",
  "key4": "3bQYwYcrUsnnsVYsRae9bAvU26uK2eMAZBahbXBGAGbs6HQt1ZFfQsaR3ZWggiFSUrD4Vuw2fr9fpbYqCt3LqmkP",
  "key5": "5ThZK3goAmNxp2rNmvbfT64WGGsT5ehCtQqNoFLc8V3scCW6XEdSjfG1mLYW1XWV17ee2ZBAv8PsgsUKxc313gVZ",
  "key6": "4ztPjxvEcSthER7qVFn8qwFnnTJYyy635bdHsTzhjEJoUegxNwTmUje38AyXUms7sDpPEgEM1kssMCes6abxgtXs",
  "key7": "3z9xPrEHCvjSuECoURHuwjYGUDUfUyfYqpBBbnhCj1P6HvUqqsEDo5D8sBWyWX2yChZgA5A3PNnCkckPXEyZpXVL",
  "key8": "42FMWbQ9MM2hy4Jqt6hFefShSQpN4AvprwwBGbNY1ZoF2jGL78qxzDExa8pDDm91UQhS9PrkaawiShS2boShNdyy",
  "key9": "JgMSygEeZQgGSXSufCMf88JqzDbURfK6urHVq8zWqyTJKNr2zJ8LZAW8swg87xN1UULyqZgnatVW181yVt2Je3n",
  "key10": "ssybYf64oYMdJ6VTM94rGCqGJk7sNL38ZXyUamVKvWsugCRhwNDA4Hm3gXQBuNn4KA65ykyea7XvZPNL8REAbhE",
  "key11": "4bSm4XpndW5p9og3xffKpHmfLxovfqa2VKsFHMQh8BKKmsodMFoV1fDz1GnHKrKbMaAQn5SU97QYgZaaZGuuBdU8",
  "key12": "5dHm84jCmu6KMHTGR4tZLDVBDdrrkE4b3EUyCAiCf91P5nn4gTfz5Jps8oRdQGpLKxv31GJj9eQbz86U6Gep74cd",
  "key13": "5iVDD1Bvvg25wQovbPJeznP1bxXhkpL5fcQWnt4r28vNExqYYAjnuqpUSDZJixbbPRcR61nhgBDvBfbh2bmZ5E44",
  "key14": "2UDRgv8EC5kqiQbwGva1f257T17HZkm5sAPCzBheydjpgPjnhhPi55LDaf6KYo2ZWgf2T56U1aviLCvzQq5zGH29",
  "key15": "WtDTq3eLcZami1aiHy25bttk8xKYc7YgFHHT6Xi8zW8mtxTJpAKDREePjhnDmWTs49vaVBkGDAZQzsBxTdRmu6L",
  "key16": "4dTpPDVQeCbLYcy6xdCG5BcjmAcBZhTWjquHdZdqcfS8nxvCSVPkgxUaaN3yCh8CnvgT7tuyN1fre7v6WHjzMqzu",
  "key17": "4y9E6ChcTaTaqM5XY1m9zrx9J9A2MhqC8CdfXCxzwFsbYXX6aCSiXMhxS59rSBG68xE2rAL39V3B1brextE5gESP",
  "key18": "379StdaAmiPSYcyyJStHn3MHVoQifbmRCaFT2W59sUx2LKxMEijoNN6FQczohGLykCWk1YPePCmxNQrksTc2orUu",
  "key19": "wWPcRci4UMZrWsDtv33hQQsagNpbrPP53tLevNMFyfT5MyW1LJCr9ZyQT71mWxGmCmSXD9QvsvnhX94XkkNso3x",
  "key20": "ec9kZYhfUbzAzytzReDc2Qk7vuJ2SfbvzfmPxLd8a6uU1JAzeFaWuTZqDapMnGjS5WN8sxzMm9FryrSmFxmaKHJ",
  "key21": "2Be43FR2sPDquTfEB3BFcqtmXZkn8WpQTRDCW9qkJeTJnpfHxE8zB9L3oiMma2peQLifG3uvYYtTmz3mL4dNHFJb",
  "key22": "FiN56btyLdHWTHsq1RZHaVLWPx1drL9oDAbLk9LkkgdKp1rLP4YeBipPp9GmiamxoR9PMxiTvgdQqK2hKyWwW6H",
  "key23": "3T9uK9VcTHKvbxTMb7CRbC3zHL5sFCjm95DRQ4UQ5VB4H8zgj7SSKnEWyaDyTMsLmxEeKX6XefPr94JdvSKUUu7j",
  "key24": "3EZGD5GFNZvjdL5vPf6Vyv1bDU9Rm3buEfBUS518B3HLDt4q4JJhRcouKNSgcxyTyCk9NNReXTt7Tqn9WtdEj2WQ",
  "key25": "UcY2yX9fPEYPKDXUxMMYmKget41tdBpdw2jY2WrzKn3ZgK3KuK5u6a2WwrsiUBzY6vr3faVc3MLuHZfhFc6tz4U",
  "key26": "V1ZNXFKvvD4R77godJp5Qkwc8ShpCNqiNsXZb4H8TQcPz8ac5tU1ZqZYYugLKDxYuykA4Dr436cxecpoRwAXLiU",
  "key27": "4XxdEvrfz88yqihQ2rnMqVWdcbMdrKDNqMntEDsXkMTEAr3pUgG1XrM35vCjstC8rbZsmybCeBTR96NzmFJP3rQh",
  "key28": "5y8TJe9FKYjNrkT5P7ZysGMTBt82ARYtCx8xi1yBafQUmcFFCSrwm2qveTyaR8r1zrJHy7NC5cco8QexPkCcsgfM",
  "key29": "5AtBCezHF4m5DDHApntwjMppULtma8RzjPWgfjQhJx4uMjh9e1Fe7CCs6nDqhMawvsuhtxwLAoR1rZEd5gnAfFCa",
  "key30": "5Jyn3oukJdD2G2ang7qwda4FrsDwApRysFL1Pxm2bCifL9kyz28tkd1detyFcX8AaSuforyXFFRY3kpZQaofc83x",
  "key31": "2ivfcCGigHbYfboJQnASu9oCfZCLv6FmSS6dMxVpfUQ8CeSBJy9HxmRjFsgJ6bwBrhHzDVV84U9UBDgzsLQddmL1",
  "key32": "2nvRaZMKpj7MmCPtCSADKh1GrTn5w19K7Xs3JHnWPTsGAJgv1LGkej3dHzqHpttEpo4unJS4kYhYXrq3Yv7je7VA",
  "key33": "3KyXBrdXRrqG2fh7RfPcQ5e4ZDD6msfgvF8zwKxxH7fa9DmNhWVusq2Q7Z4XktsJzqh61eaHhcCczAzzEZwzwhi",
  "key34": "61QxwwiZDyDZYJpdSHJPF9Fop36aGpZ9gySUgQTCUuEv9GsNNshkoyf8q1tM2FjqjJtGeJ5QD7Ud5Mcwt7vHh9sh",
  "key35": "4fjpFkWreAVfbMgV9CGFjtLNWnbjaeSYi3M1s9rKrxkoxDvmfNpCofo5moYv9FHxm446VDPRvJUeSLwpUW4hXt6n",
  "key36": "24kGAKc5ELN9UoKWeaKpKCNyM1QRfn96NNipSQqDc7eStBZnhbRBNYJre8d468PauYo6JoGd18bjRESaHzzWzTpH",
  "key37": "duZThvp6Dvu6ByS49XDWzvHiA3xXhhcKme1mR4cZ7ArScR7CHA1LgYzaFtT8oFLoHg1DyJEJSUFeF9jCrNxMDGp",
  "key38": "4XYiC3qh1BMkSNNiHg4FFidZpYe26LK1HBhJQTefYJayLSzxCcFZdUujLKxogb5McMirGC3MJ9sNRPPLQDxXvh83",
  "key39": "2oVzVA1guJNWFH6Wk1QLtNoSwpqj9gsoWm8XNGS2PnrnLstE1SvjnRYUmad2a5giKcUwQ8Jax3YT7Y9ogUJ1sJaF",
  "key40": "4Fs58BhgpbqTt5fTEEKTLxvwACZPPGqpMc5BXn8m6z9eQwtsrWAbbLSUGRaqdUpQfCuzD1rs1cExsG6USAbELzYY",
  "key41": "3hEDdEyAMd6sBea43fpDUKnF9AnpgK5dBbDgwC6uYTUatCaT5KkGqzMo8yjNLCSYW6qcZvxKYpjdkEJoGrBdPn52",
  "key42": "4vykuhBVMG1W9eCRntBpJ7VdAErhAHaVDMbt1eRYWM57zek8qzHFziP5y53AXnkNQ7GPA5Fv5hwsT3BshSvevH3z",
  "key43": "2a4NnjJiKjvYUjwTDNBzHYqPNu5ePb7Rn4VjJj8ze66xYJHKNGGAqEAEvHeGC1RJNikz9MsQHeapnCSCpHepLjVT",
  "key44": "t3MiATpjoZkPepLr5Gt2kgTD8fftWeRKDSVFZdvCvDPW1PGvUdnCsMM3bCYS9Pe6knkjoon2JKGfQV1fWiiV77N",
  "key45": "5ycy3TmmjE7LUXbXFW6zZ6pyEQeLVixdapAMt4Er99iqF7XQu3q9fpWLfHx3ZGX1d37TocQMjNXvuXJDLoPkaqr5",
  "key46": "4adtg3rGW8BAaoTPV7dx2nyzR6Cv3KePcLFjXeMiB7GneXs7vWDPHcszgGp3QDPXE5j1owucJLDxaLFYnzzMhnkM"
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
