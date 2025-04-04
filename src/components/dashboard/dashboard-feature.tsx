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
    "274FWi9rnbVq1f2npwujhdG3odXbSGqQE2arJJnCfSeSjPgS4sQFCQweqejwJjy46JJbQ8udg43EYc6nRLRRT6q7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56TSMmadrnfNL2MdFE77ximSJ36CBrDrjSoH5t9EKj96ADqtocK28ht58PVZMt6A11PRempxtq7WKGepmuJXBd46",
  "key1": "23evzCwtrZ4DgFfF7KZTbh6acW6R2m4t2gC4X7cnQTimYJY3ziN4MGdSunVaZMR5Vzg6bEvsnNF9mEPj2TbXYBwh",
  "key2": "5bcQjNewt5qkDkz4EuzxXhEQ88cTTrzT8r5nUrPqbs4edDnGHbtWXonhkMNwoGu1f9yVRe7rJjLaj6PqpU38ciHS",
  "key3": "3rQXFi6gFehGrRdpRzCP6EQrmHj9PrV9KZKspeojPwMsauVKCMJgYWjHLzbZ8BKh43EzSsk35pMN27EK3RTinXs9",
  "key4": "5vW9tU3v1HFi71ZaJGpqqDrpLNfpSvU6RHx8F3hpUocMXmAYvap2urpQZC18sacqpgsXPteGemwT2UBpoVB4EJWv",
  "key5": "fvqoXFmu6rfpPwQgrbZYaSPeoyNfAYoB3TwiMz3iy2wFhP5Msd6XuNUwp6SrDiqCmmqoFjvy4mRL7B7YnCHeyyo",
  "key6": "4KWuSPnb64czifYx1qjYgM1xQY2hj29fasWVJsVy9KwVkip9FAv9CPbP8ZNYde2veYhnmAuiEfCtTeBFzKWJ32GS",
  "key7": "3xHkgjTW8gZLDwxyu5okqWBYg3p3DJ9tZifh94YDTLoi2V2V82UaXJBQUPsRouhxMmx35H1R7CwCbuVQWraCm3t",
  "key8": "438uoKeNUmqkZ1kvzmsgam11ymwny9HqDGkKmNQJ2jVvS9nMkbSwDTCCU76UwPGv1QMNzJnep8vRZUWxHBGCpjps",
  "key9": "5aXNU7hZy5N5tUazSehWjirBYfF4ytFCsdahugP2cGZwqwNtkL7gaZ37nduFKaddD2iNBiyMaqLHDdi3FLGHNiQ1",
  "key10": "4CCsSziEX5Wbignp8QWc6zS64rhAvuBC2xSgntrd4vBimvB5bkqTDLRc5vKdfubLvxguWX1E4L9NGDeSoJRPooTg",
  "key11": "PvJhd3oUcCcg16iUahGBtixsgT2YWxEcd5ryuT5JyYvXS7p5YPFhfWVLgxgZuCptWws7yuL3LPjp8n9pc9yTSHU",
  "key12": "4JjpKVFCggdMuFKyhVfhEcWxMvyP4nfMgsnNWp5zdFT9syRXDtg6Rcz14SWUNPciWEWUZitR5DxxWahn6UCTnNVM",
  "key13": "4cyrG9P23yYxdwGb9o5GsFE6GMZzgR3mgTgQ6QrKiwEEbCvwmJZXarUsUBr4QSJwaDDPWftkpZD7yEnpdRZ4xTJt",
  "key14": "XYFnqPUNWharnwdrvk4pP5HNv9yWPDiXoHysMBrzpTq2oEqd6qhzPrpidcUcjfdZ1v77MuWK9mAZWgQp36UAU9J",
  "key15": "6Aa8vHK8UqDPgTtJkaWY7oB2JTBdUtpBjURMq7sPxGjyQim33G4zw71KfwXQAueqEtrh9wKjrTRD8Qw4eaXCPdj",
  "key16": "HXM4diw8vnEGMBvgWa55WdHbn1xCsCkYxuZLn1HvNR9D3nT7uQx5FbaD4SBYv72dh38RVkB5DRQgxP22TBYbV3E",
  "key17": "3etgFqDHUKPc4UTKayKdiaFpam7zN7Z8f24Y6S57PBDrpBT5zEPwRFtbKjmeAWvoC2TidLaSFpsHZmKepvUP573m",
  "key18": "38YPqJ2r4mPyMQFuDAb6Li2PmXbi83dBZDutRt9KJ6jzG4KuYEs3Hfq2bujYeTkmWziZQJZ1gNU2Scr6oVaHWLBi",
  "key19": "5TwLRuvUd7TKmyecfujuxsGU1ZWiGrZBo8fzqgfwKCdTyGiyNu8XYqSCmcF731ygz3VLqE1LYpaKetQ5FvmkjHvZ",
  "key20": "5joE3s41gSiiqA3dHbpZsGLEBG4TJSzURCrnzhtpsLGcWZv4hmtZ7A9bvaoYrSWRBqtUHaXUMZRu33oWVaALXwAp",
  "key21": "zWejdpb8RttDsmZ37HLtQYfBazNANXTK9TP1MFwnvQbP6UfydsizQeXSqCp7X8BKpEjauQg6tF48HJYwcQTrKhW",
  "key22": "5uPQ4WpdHBBwWaF2t2mt4K8g8mhfSQpxy27zaA4TqsyJRjFqrBnPYXTVkr8kFy8Wc51UtoeHYUKwckoVp71B2ZQV",
  "key23": "46dLmsJzZHx71Ae2bFAN6ecbDQz1N92F7WgrCdSzvU4YeMYC4pdYtftTjfu52JKDzVtdTvrWgdi4XdRZU1EWTCPr",
  "key24": "4it5agcNWMFsGuByex1v9z4mNa6dKQLQEMXGby7H8QWZbsMKGFNreaHyRfnWnw1EcHMcJQFnwcowj5T84BRmMcvj",
  "key25": "3fJbN83rTufh7JopQHJkPUJ1Wue28o3zSz8BM97cLkkFnsHRWr1BNv16wrub1WnNEMo7cLkaBu3bV9oauVxjCRF6",
  "key26": "3SCVDWuAsxJBCusSokZbxpqcXLSE4mHsAVdJ6jVvnU1HATFMbTCPawVFe9vfmNSctzv4wCodNb9coNisQw7z11v1",
  "key27": "3nJPiLq1XtoyxH6pLkH5hPjkhtLELBmEMviaXVUmnUy7uxnuHzEH41XNkFcGc3y5gwnYEwDPF4bSHX3LfaTuJA95",
  "key28": "27Y8ewRsBCebnTAQqTJjvy6fD4UMLFQ3UZkocjxktZiPELkLpQCBj6kNhRPhgrFUF5Mf3MPU3VDxAuzDbnUrdKE5",
  "key29": "4ZMyBiNcPL2hwkF1CVcsx3Hff4f4KFyg6mGrbiZsW6ZeCzz1697Yo1ZmuuedfqD7yFYi2XXj98ByDMJBffACy1sN",
  "key30": "5ijPShttsP4TYRLUj6Wsi4mSS2i28HXzUoGxbBE89tCqA3yX8eTYYGTfjzFMw6WHHRfY5cQZKGVw83xiDxxDA7F8",
  "key31": "5xWJ3gAexrNg74qC6MiDrp8DYSnKRaDvdTBfRYapzW3GuZKnkHBmYcz6QuBiZ9oVcEUTEoDKtkPp4HFGH29nSeSH",
  "key32": "2QDFF9QaL2RKtVsy2vpB2g39KGo4dRSZwQBFGKM48PJzxxcnpMaxQbQPrrA4azLEUGUm2ogh5RW3JF7uQDgEQc9h",
  "key33": "5nF24rWD6XcLtuqyJtPTqrXWsrvXeeC2iCnUW4CefQ6xoeYBZenRvuJRDndFU3VzJrTE3b75aWuo3L7biCWeyMJw",
  "key34": "23hT4CrdokdGGZiYP7MYG4DBXA4XdfF8Y58TJqvodyK5VT2bFuNBvPGHvUgEHVM5XtcDN8Ay4TzPxojTXz85i3iE",
  "key35": "3q7qZVdFgfF5tqyN3Ph2A7ybRtPcK341adXnMU3f57Hawu9osjKCp7m6YqFoTjrufbNTq1jzEPhzf1zXFBwKaQgN",
  "key36": "L2D8h9bgoUGtGDLdVcWM84wJajjuo1D7369UKs7pDnueQKj4pSLoi8f4qJV3h7tZQQn7qZgjtXZdZgrDNgzwjyj",
  "key37": "67SpEw72nrhwqbUTsBJBJotVFf9CpVfc2EFtnzzxFhDWTTHxboJufJU7StyA7mUB3LTo7s8ga9tt3vAtu7uyJ2t2",
  "key38": "4Pm28S44L5UK5GH39BTYL4EvF68qX6oQ5xqq6czgGNN71JzX6SQ3FBaGANVpXk7bgrEi1rRatTK31HZ7JUZQQKUz",
  "key39": "4GcCv9LWyXmtG8byifHvo9jVPDDN9YsvUXnK934qFQdak6cipQBMPbRdno9osajH3f5CQHbGtQwmg43ZkTSNn1xB",
  "key40": "594oeuw5eCM1K5ohsx2QoT5ewdTgLWEhEiGzECEvWB2eNHGfX1JQJjRS6ZZk1vnej3fHvBfB8Jrt85cf1fLfc711",
  "key41": "41BaaZ28BaPgQXjhknEkEG4iihmdHa3rDK25jMeqZ18SrzyhjxkunbkJpMwuM95vuUaF2XsonFzQgXsPpEoYaNp5",
  "key42": "3iv8kecbrYap9ywzY2hgxWVn8zvinSsijCNTi38PsVrcZajw6RZCKqMKfXULbkDr6HagvVc5Ya2xuzJTH4QQLC7x",
  "key43": "fQUrnyCjRCjf3nd518SdXqeD5txv16xWXne3hRiyi9iGi1YYAS2GBUd8uqChjnW1G4fEVggoKEDjxadjBbUyqGw"
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
