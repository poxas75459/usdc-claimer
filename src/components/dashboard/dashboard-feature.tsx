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
    "5waXvGDpjMKe1gWZfySFnHL2pEmbSPVn79etUohVzVrVGPKNcrMqZ7YvG6iQWieMPcYSYyhrrs17e1cautku24Gk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R5cPHMJKYxt5A12ja1jf8xxpRGDgLFuvwft4uBiu8XMVCFh4aykg1MKwxHcV5M86nHviFCB5FVsbV8KtpAkyqxc",
  "key1": "4woGVESKukMFoQUtWsGVusmPk5fSazzhzHvaW1VF2qia7b6siyZ3US2z3GoD26E5x5ULH4YUtN6N46ongvihDb45",
  "key2": "TYPSn4Yn5bcgVbmjZz6m6TKxhsTaM5FDTxa7xYgFWeMbW5ZWNPgAyZDvMxhfVyVGB9wJBFQsmHtk7wtJaBHsSwP",
  "key3": "4sAtvxLRmv52TSGRfaWmNJpvLJjo183yWbqUNsvr22dS9BKzyBrjL3MpiABXKruebw6QiFCTqXhfshH4Ag5GFVeZ",
  "key4": "5sVeEiUjKGqpRcXCncHQeRmkiyYAGHEGTm57M9eNZTKUfsf1z4fKH51LdTziMScWaKR1VgDnCXcKsHQq6pZNrR3C",
  "key5": "kcj1UVaq9uKmGSfYtASSsebvisdiDjBzXcSHVaJZCz8H3HZXjMP75YAurCfubZiFPeKXo75uyR2STy7eJT5RSDx",
  "key6": "4Zr1E9vSWpRa2iZp2GcEQ9wzXgNPNC3jQ8dPmUHcsbDkkEQvwcoFNaiX7mThp6sQDAyb7t8R57RJPu9nUJK4Q4SD",
  "key7": "3eBY2Y4mJE8oaUk8Zbxai2mHNnsuxENgJqKFKzvUtRefW583NN5p51a9rAQ3VUFrQ6GL5n7TfpZz1svieoKwbmMo",
  "key8": "2imFeCk9kwbHC1MnNNBpG68BzifaQdknBo9GF1w38Zbe1LUgKcnKLhAGVMkVgri7Cqzwj6Q2Bnm7WNDvYWicTCLi",
  "key9": "37r2ccaexEBycmfA8czByoXCBAR5E6MvsujAKnjmk9eApDWGHp2vCC1zuCawP7CaeemMXuvntPuZnh4w6dajwTHs",
  "key10": "4J9ighpjdAMdyuoMnsEiHeDmG7nNVAUbURBiEfGhr1D1cAUUbB365dMBAWJXFcz3N5E8Hqsje2JZvGybE2h1VVJD",
  "key11": "4Ab14rm4q6JowJEkZpWcF2VQvU5GHiUJJXwKKPmXDXQWp6nQKUJ6GzpWKNS1hAAdE72ZxzeZPFWVNEyEzS56SCkF",
  "key12": "2Wg26jmTWN5F8QGG14JTiXgz1cK3Q6R6rr2WpVg3skNo8Vkm3jWmHopxRkej5nF2avnCYoftG56H72Sz3XfRcRWY",
  "key13": "aM8iYw3Wn599CbFcs9UUi4PpDuN5noTj6JPg4ZLEhDpNB8QCTkEu8dgB3Ka7GKat5ggmWLyMkHGKzS37P7kpB1X",
  "key14": "4BMkNj3iJf4JLHADP8DKGjd1fcFGzNC8YuTTYEsNhtferbWSD882pUE8C9XL4JySkJNhD4wtk4Uua3ekpyW2JbxU",
  "key15": "4d2rZapzQtevQpvr2JyPVLAhK57oDMR3VNPhxCuGM2718ALXHkZj654TrN1RL5XETRz6FuoyYJ42zypxMQzFnSqN",
  "key16": "3YC45wLaZF7jEEHPJfqu3U9mZFRaV8YAxUon6sW2FTXMm1Ug9c7qpZhkQ6aMUjdoQ3yXKi6YmobWXmjYvSkFnfmv",
  "key17": "57MDAXYXgpXDH4vZQYzoS8tz2CX41jQMakd2T9ngNcr14mrU5bJoFcT5cywLnKPK448kJent7n7VVPdQfzGh3xdo",
  "key18": "3TNTsYM8baYqh34p9KcFU3NQM2sy78SbA6PK8Rbrv35grPFS6BQvUTZ5D5HFYLngWd1B9oK1DcjwDiEvb98DXZSg",
  "key19": "2F7GaqYQuzdyxUydzLNuotSf3zDsTZeeL4XrY7XzQuVYSZWdBLTa6cNnSq9AzkxWFx29rprdtvRv9QN8xovLrdKT",
  "key20": "5oxkoSEvC8ZS6rfMsbCyFjMJizRb1K3xB22FDx5H9aT8hksQhPphTzXXB8dvCExknS9MEzsHvkKGPVBhpoM8bFAw",
  "key21": "5R2wmxt5dwJXWuDezutrPZbMgjy52g1fbPTp2Yp2oMgeXWw1vtoAAMZENxvfoSYt3uQ7Dhhxvk6ry9zmoNxDAwXR",
  "key22": "3NG7wwaD5X854yuMFDfyZUVkfP3GpteM4SLbxxdp1DotHXiyvgDYMVzBW4WJ5CWeGZzFnr7F8yNZ1ZenReKMDYVZ",
  "key23": "4LAhEZjpzqHUoWCsu8RHwwGmNssV7TKTM6VX5vw6sNuMSZiExGFuMZ5HiCs5j9Ec2z5pLsatTkZB8UngNoYA2JPZ",
  "key24": "2Lfxh5YHutvs9WKQXXcSQdnpz4UnWhdeHpm39Fy8siDtRg7m57icgTDub8U4gSAuhgd3AFHSF8R22pDQ267kgMvD",
  "key25": "4e4gL96bcTtnmSQT4ekmVzeHXnosiNAon1AniTQdsZmfoLKwcHN7iERvL1Xemgo558HgZs6B5ayd4ozAZH96tbR5",
  "key26": "4Zucw5DXaSQtKr45trnybaYFyqpxh7ebfQYu6fRRF9v1Sv3Z7ExD3oEhumy76Jmho5KMRUunm7guLuJFSAspgYdQ",
  "key27": "ABNPRym9i2JQGzX1xSrHoJBXNsZ3vxPQCUQGf5ejmFZLMMX68M5vF2uQ4boYZHXLLYjNfvQCSmnFQgdZE6hgBt6",
  "key28": "3j38CQZg4cUcMTVf6bGRnVtGYddCmqm8FCJpVK85qbki6hzdmJcgqHdg9rfJs69Je48Jpw9KMNyNbn7MzFQ6rwuh",
  "key29": "5XaaQ63HoRsaCLYfC6JvvE4iStUUdMkMsegMKrJPiMnaBBendoTJuLCs345us4m2hC2ymwouDYHK5nfqJkzuHGHv",
  "key30": "jR9tg8LkZTTop7iEfvmtVHFWUutrZiZsbdBgGzwNqYaaDeHQFLiUUDJc1P7xjJXNsWnuedQMK8kNTwb1iFEHG6i",
  "key31": "cjs5u993vjPfmn7NuXgexKFMgLowvWMnAJ8DQEf5bb1MikLp2fTcfzczk4q8nBWo3fW2WVLf5ivS5VUnJQjW77z",
  "key32": "2gQC4qGym8udH2P4R5hnoMEG6ZjPqr9KktwNST8xyfj3cEYTuUU7NnKHGwtzxjbcEojnsJEo1KCqPdhS5ruWtoeM",
  "key33": "3QW6XrjxUT7RXekLTtHq914gBKDsVp9xegaxVpcUptueG242421fLrF1oKBQRe1rh5YvVNpg4youkAg7c6Ws9Aiw",
  "key34": "29P9HpowiCwARvuDnE1H8mL2iQh7CKVR8vkm53XquLNvP1WcVENXmBBPLwTps8MiB2gvYFtVeu443F7uJTmCo1p9",
  "key35": "4BTskG2uxumDPMSX3zLSaheH3afhwbhYwtVSKbFdUA4rUNXskV1LNo7Mf3mPxzAJ7kWHshkqSYTAJSpvtGdiBnf",
  "key36": "mepyn23FcyXwRT8YRYFmz4YpSfqGtsFWFZx7bgs8kVkDMS8mbu1HVGBvzXhHCKEEw9fGd6rzZpv2Ts2janczc54",
  "key37": "2JFaUfZ4juB3BSxQuxDfKRC1vQd8UBvrJr3eQatgXyjsTt9cD25RZMAtkStj3aryJQeMPgyN98kq6gYkJqRMBMUV",
  "key38": "ziPKqBbDLc3cwivLX8sPh3DCt5SWKfqfx7TCTun7weYDQjEDiZHabT8PbRBjyTq95zhdfdcsnAgTT1jWi7Y9wUF",
  "key39": "3fSmehBA12fSFGSWLxmK1sdrT9LLqQ4XMN1MQCikVK4ad95GuFzvrJa59PRiLEWnw4wzfYKHQZXNFyNo1ERrxfCt",
  "key40": "46qPHoVsVbnMV5axTf9yMnRaSy3yYsHpwCq6QYPJBesdhSh3ogNR7ZHXTCRLd2bCY9doKcCgTWUcrGANP5rNybnh",
  "key41": "3yXZWbrkQxj41YDPt5ATiaxMSykUanCR3EQTi2oxKYrzdPR7Kab7Do9DQavJNbuKREG67AUhRMwGQA9wXcQgjPvP"
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
