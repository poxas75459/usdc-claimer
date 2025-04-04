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
    "23yhRVTCxxn2F8kpTaasnRnLTyVdEmqBf9Uurkiytu7rtkPjofibVPWWo6JtHgsFG7o5m3WWH4iZ1VfQawqs695i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HtEPixmjRRnFBX5QH8ciRzP7BFrLQiqCy7EvDyZAp4u3usu4MXQm4LPN4ng3bEsHRUuxy7kAeddCbba4bJXp3gB",
  "key1": "4F4xkBpLxqbh8mdCTV85tTx4QLPu7kshdrkoCwRxNARXga1docj7wCu4RWBpcmUmrZ5P3Jij1oH6EujmbjS2a4gD",
  "key2": "4dSE5GcL8pzdoLxAM4bg41dEf3shpHpYKgDgKMG5Jh212ZEJKwAM6XVx56ANwfbH16iZ6AFd8w6wJWBaWEpQigqp",
  "key3": "4DbHiSPa3Hqscx6zZz8jyRUFLT53jnSBuMTXQDq2G2YadzY7ezXVCcf6b58LjT5BPm5zLZzu7ko8egC53mGeExQ5",
  "key4": "4oVyTiqDhVzt5qSLdV9VTV3LLYWmeoomydSgXCZFrfDyDuoSg2BDfh954NUQtaCXhwbyGDYVbkNCh1ShvJJdf8a4",
  "key5": "2zU2NPTs6pEtDWRNs49HqoxC9VjqA4UGACNTYULyxWEU8nCrAr4vZkC77eQ59vWeDW4mERDVeXMrH5hNNVL8ocFp",
  "key6": "43ahW6RKeuddGjB29z6gpwH65QR5eVV5K5JxZnWYMotnNJkNx4yeHcr29cPFKuEMmcikE8AkLrVTXWsgHnEuuezF",
  "key7": "3FekeEr5ePnDGy8596aSy7jWJounruUVn4rRLnDgH4iXTQxwsUaeoNuRVUXCtoBqQDzqBTyDYKYVX2tNkwrL8wEa",
  "key8": "BPa1zzoU228cBQX7LhpSmYGK2tAPKKy5CBS3N3dsX12kgbJCFtukx7yVu1fQWW9tkK577GT5oVRsnnZBhJcRnSu",
  "key9": "4EarBgjS2QEkynQWgVrS1EV5v54estZc5ooQJySw9sK2yz77oUj57hUdf8GzyEm821jSxHTDNnUQ5g8fN2vAiU9F",
  "key10": "2K1AFSJCF7ws3FyZxwFEtXc2GizmFjx6dr1Wcetxn4iPyyxEWj51X57Cj988YGwyc6Xu82rVdaSerfutFfKe87XX",
  "key11": "4XqWUfbHUKRDqTFRUtzVG4hJ4vm6Q637fFSR9e7NaLzWWMzjd8eLk9TwespyqRe1fTu3ob7Rt7wG91Wvc9nssMZp",
  "key12": "2kdzNG6L2mCvAg5cqquMq2aWxC74cN9rzLfAinNsNB2BfLAWT6JxmY5vbhRA2JT9zkKTnyT6fCeC4Qaeo3FMXFmC",
  "key13": "5qvRUd7B2hHKhREEhSJcE3nF1AvfgCaQaBAgwR25mxJUyJy1GYUuAPMRTmdgZv5vUaNXs6iGDpcUPBA22M8ZnFx7",
  "key14": "55Spr2j4CdVqZ3dcPuskq8ngyTuLAWSgrRVPWbc1KDLMZeub9XYU5goJ9Bar3jfcx5qkDFXhbBsCWxfAui3hx3E6",
  "key15": "39NwxvPRVDdqmzo31tWnK7zeaqnzzdFsLcj9YD8PjxcCgGGButoByvRJZtBhBfbVYF2KidQzidYgW24a8CFFGQoz",
  "key16": "2vBrUcHgPMfcSnrHYeNHhDSLT34TXbDSiRFsKsbd6iC53yvphkqoNbsrmxLEBD2NpJ9uViDJ9XKXNv4jfRXpXiGQ",
  "key17": "5yWVPxv8BgUFPqZ24GCQoz7SRFSoUKd3Qm3VqDn5giTdqVqqaLNrFug4dTDjehzf17XZ47adE5kWzn4PsDsyCumA",
  "key18": "2H6nR14oHApRXGq339wGbUFvx88werPSCLwEUAtmDJucUje6ijMSt9NZkvmDN93eWfD2xPwrzeufqJvpDfnvCqGC",
  "key19": "KBf8tSLnXVHXRyBPTFYis9WL4YRk29W8wAdwepXZCrRUJws8cRYDS9w5fQYBU6hdYjRUwtXuQKvY1LPZUrjAbaJ",
  "key20": "4ErufkzyRyN9BWS1T9TsYewUm9ERT5y68F9E6i2hLzGVMfTzXAFr85t4cNgTcUP7uqEvGgNRygx895zF4ZEkBHQY",
  "key21": "2Tz8ewbsDag6wj51mKc13buAynBwM7DtjFmRA6rmVsCWhraRz7bdYogEUVzyePmoz3R3Xk3QY2wNC7zNYj46u8wz",
  "key22": "2NpaTPJPpFFarVU5uPtXMYBocP2TSsvGrTQ5rMVg2u61zrWgfj5L8M9CgPpt9hNXTebdXCwD1GWQ52udEWFQQe8j",
  "key23": "24seXbxTqig8swuSehiQ1CHDzhBeif1mbiixFJPrpNAWPL61r48ndZ73yRPxpsXdvQQy7U6KPzoFv89sUQuYGiPK",
  "key24": "4PNs9WTvLNZyq7koe72z63KN5KS5YeSDRuwaLEUM73xTivgvoT4iSYgkoQqGPg2FiNrXXG2iiBDjJu5eS6wQzRhQ",
  "key25": "3PxiHje5QfSpdJqU3PgLay7jVhZvtBS7MAgzkV96dvTjrmrfzs92ChmZ55hmZC74t5Mc5LaYt1se4G8r6mdTMTLh",
  "key26": "5w6SrTY6nezMgz7whUDPApEMLKXts9P8t7DjQprSKNPoDamwrC3cx2jHEV6nsErXiqFBSkJgoKi2XK2JzxYAfSjZ",
  "key27": "2QBrpH8fiY9o8Fi1jmL1jdBUX1kyBHz5yJEucQBHnFzy2j7wGzaGnXmrTuzYgVN6zftyRCCkMFYTzutrFYF9iKj8",
  "key28": "4Ec2LnS791ApPL1jsbpNVuN1oDnUTeAL1pHeBEhnuTfoMeo7p19bHef79mBeZwCenv4nmYQpK86qhffKLKJy1KCP",
  "key29": "2kE4EcJpNnRc1wG9vmEocvXiAczxeQmGJnNugXjMQJyVb1kpX2xLBhS7d2QNKodhVFs5eaMJWZW2yrb4NwbCwqKe",
  "key30": "2Be4px6ht59TmdZhQb4ej6Zq4Kz8TDncf6wDMXDrgfN8Xc7kEmgWqLrZXMzNidvyBV5q3BZw71nETDd55sAo2GUL",
  "key31": "5ZVYReAUpNpuWvPXm9o8QYNoSbyBvoc6hjGxspBB5VGE6kviZPKEt9NzTWiPH53g3UxvMEupWHQaT8wAmqp534Uc",
  "key32": "3BzRGQSVa9bZNwsoaqXAonpSnqjF5WNsTs2bg41gwAhr9pBC6BHGedzWWMngxHhCye9urTkesZVg25HdGwdHe5m5",
  "key33": "5E3r62T7E8Em7Vm6mpoDD2RNLYMMEeKcHYzKBwTP5CmQdmDF4fQJt1RdKPh2P2iNYo4eiv36CKFUvpu2CzZd47zM",
  "key34": "4ab98iRf1sXR1dNKUveSE1bbtdvcz269QSeMj4G7Ph9ZfBuuXnUJ7KHbBe1R4E9hAjNdsky6pbAZppgeGUudb1HD",
  "key35": "2u2R144tG6gWr7ncyaLU3CearJqh8s2mwBmqf1vYQCBx5tdsTW3uKAQiGStZhDWAYPihhYXoFhTL6V3wfs9vNBZV",
  "key36": "64ydy7ybNsjfoY4G1d4BwawgiZPzmZ1KwvvfPigiLX8a8t3NFcSte1bt7Ru5AS4nRYPxaXFhe9yx5ndYQBfcNsuE",
  "key37": "2qY8gNTveYmkishZTnTHZYyaC9Lckedumnff5Ttvw1mbkMpRxqFwiYciPSkwTk8ATpNsNX6dtoUMk6KqcDDGzToY",
  "key38": "5YVuSEdzvRjBBX11q6AgeHe5P1Pn5h4rJAY1V6VYeNaFcsGKxMbCPpZgsn2EfYKUTENUcCpFMNZA61YybywXSFsh",
  "key39": "7BR5dRfaw7UKE7c2eMMk3aeVyuyAabY49LCPBx8j4ct48XRVDifFLNc7M3cCrjTNTcR91GKBuo5coxvnD6UWtHs",
  "key40": "J7ZaxsXtwAyaRYMv3bJAoLbRxnQHVMjsQK2vAnk44J16bYhCCtBu5rdh5pPduYhbdpXedzSHwPEABUqyPi6xRgW",
  "key41": "3PoEuYZxdySbMjjhsSgCNkeAbFSWfAiZByLMgZ4b1msYPz6M5xqcABimV4J5HdcpC6GaxdjkY7k6LyEgEB9Mut87",
  "key42": "Pwackz7AM1pTSHKukXJhH5Fj62PAK8sFejoKE1ZXFbHNVzdNyJNn9Ku3WCns4X8U4mc5g2tHdhLnu6BruU3CSir",
  "key43": "XXCVjqtkxj9uw8rU6y8ND3Ko8sfJstmR1u2YWgRx8XMsAnMLoMeN2R2FaCPfqpK6au66PDnCAsYqbtanoS6PrG3",
  "key44": "8tSpjGwv1acgiFwaShvc4hHzPknDyWuV9fDkif4vcgpZB4Lqg3944AFagXkewvHcKhb3vvqhY2fBkB4kVta4z3S",
  "key45": "3wbHKPqKwiGhRKmL43kdir5RMiX8HKxNp4bbSwGRgoFX4TgXjyZfXgJ3dP2z8QcGTFAagtcGTizijkGVQzocteM1",
  "key46": "3NeiD5qFFuGt8a7LdFDjkNYrwHbwf4TpdhtWio7z9FcaMHBnkg1XmQsDWnxaNLwRnxYYgaTdevQnfe2HmzJY1su3",
  "key47": "38xYDZ61d7ETxa8nefJd4LMjHpx48FXGy6GsFRuBMDQLyzApULtAw6bN3u78q3Z7Dzg4wSpjKEoKnSBxZp1tb4yE"
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
