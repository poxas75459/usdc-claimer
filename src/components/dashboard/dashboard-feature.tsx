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
    "3URTUnun6hy6LtuhVmQVfBqMekeFg3m9RXHPzU4yk12wKi3912DvieV1C2irwLuLD2tWxn5W6hxvbsRodVcQfc7e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DnhyWGJW9gFt71wZYm7rMmBgKoEDUVYGcv2d9pk1kSw8qzzWARyWoqfHk5bTNUEf13FhxBNpHR6twXkfAZbV3xZ",
  "key1": "3XXnsByGLuJSHFUPR2HJsdfhYu6fVCUFo6FM5dpJQ6nKDnrrmk8YdWtM2QhpGyyVHF6CTzyShRnYP8jZA5Dt36K4",
  "key2": "3zDvaJTqoGhVX54TjAKHMoNcpDmbvSWGs2KgD4yMzxYzxk8csLMbaBAuW8pPgLaEssYXRmdsfwSzJKJZHN1vjoPQ",
  "key3": "5frqGmoVtwZAjqKhfX1QDmght8oJt4nQPHkqPL1BSoHH4yZxsJya8gvbLCibAF9SgAaCT68fAW5af2okYQe6zbi4",
  "key4": "2QgXTkjpxo3XBKMBWxHM2bpQXMafUBiJ9hhwqeCMYDwcYAVskhseeBD5yVMQ3SMijsQXTQvLJXqByKDfZ7Mhtdp7",
  "key5": "cM9VpdYVegiwQpfcHeGkourjd3x4qiME9sEUXwgztQXjtA5XUXP7rEMAnK1eYcyHHpQE1BygbGCzeykJQCCLFVu",
  "key6": "3NLVgrXPwSe6X7bofsc2HjsfRp5EPKsWMPDT6qTcTKvFrwM494P97d7G3TY9VLBqSR1tpzU2uuCGNmPxCnQax3iq",
  "key7": "kLZ3K5LEkY4XFt5vj6DE4PkpJpsksRn6teM9G6UjXqMaGCPwx62ihNKJRsMVguKp8C2MsiB1A7WpDR33jriDUsV",
  "key8": "5jmUoAZtXpYaVpuryP5jH3vVLsHU8JvPoeYUeuiEuBRahFWLU6brKvcFBZnEzNHwQEMV4HSG29GK7DU1TRu9XsfX",
  "key9": "n7pFYmtj92axodifLY5eJfXjxo6Mq21t28C6wgianjTTe2LzafBtjkmWdnW2Lj263NYyGDUJa94gfq5Lb6pPkBP",
  "key10": "3no44dJnjqPqQjRdKWy3SqjAQH7FbozWwwZsTzD8L1inHGKXJRZcgJfURHUbo8aUn8XuL5EZUd1mKGRMAStoHPJe",
  "key11": "2runwG94Y114Mww8sgscHrQu9hHzSEdHAhX5jtu3N2jLSYLEvaoU6ueqvaM5uBoHZJX8Y4YLkaHiRFS2pdfqoaFL",
  "key12": "5b5Mk28x4nWYCw48yvhsHgEVCPVykAz3M8jZT2tWz6oQAYe9tvHnR4AmsZa1ZjtWEhECqYnwyZxBoparNevkpT6v",
  "key13": "7G6Wj5KSuAASWTM1srHCBbSJFYkscbcXX67YXkdHVLj2QSGVY9m99551wYvLLtTRwGWh3qYtC4k3243RufAaj7J",
  "key14": "3b9iYTTFG1aiWAgopSBSLK4MG3kRyrZM8yv2hA7GDEQNuXT1uByctEuiuvhnocVmp9ztNPNdHZsNqbhtRvF2gypE",
  "key15": "53MuUtL9KrRaa3L1pfc5FMGtfXgTMjZT9gZ8bFAJrZhkvcFKdgs6PkAAkhZtLuBCK12CirezdpdRWywDxzHL8VtV",
  "key16": "4hDjwPv9S27Y3hSsZ6PHa4syzxXk1ZXQqb5q4mSBwmpSryr7ndzeo9kdtqFbBFaG5VQwpryzMiv5X2ikWL4zLiNA",
  "key17": "4CVdGwexWSsG8zg4d9Hu79nTgct93XHKN2b8EqaHcFjWviNsN6Yr3Caz8aLPPhrxHj1wtS3Dofe6sp8tZckxbdZx",
  "key18": "2CbMbGhW31zv3kti7QVgGBi7AdTs5wKj6q3ppopgA6iMgj1pkvXrzmJ3Vrg2NzfYSNbkRamZuYyykfFQ7TJRYs8",
  "key19": "D8i32a2up97RFGNvrEQjNYFCq1kt2mvTavz6vcK5j3BGa2vwh9m3opjSjHaryjL55Mqbh28sLzYacEywDYBCGHe",
  "key20": "JEx5r4xD7NJJCcThjBbMUG6zoViSq761pCvE5giaxJe9iZErpofTtvkbFPBXE95DV3HamFinUUt51L3AvNVoECA",
  "key21": "ej7Up4E16xEjmo9hPCsAtAWMQRdLmqWqppkjoJjtQwj9cBQsqwgXQj9KbPbGuU16gU9szs2QZGiJRah5NtcK4YL",
  "key22": "4B7HhmGhFTNLKcWZY9os1MSShJ38sooVhAsJZSfZwx1SsTdHXvHtXt26ynfNfghVgm2wu8U2LKg3YoGS24aCEZNW",
  "key23": "65geC5Dan8RjeFm9Txs6wytgWSxShypL6rSqXhipNbezeqFiHGDkvF7WnXodxzZ5brrvysJhT6xcCfEWkHxxiWCk",
  "key24": "34CnnEUQPdvcKrpnGkDTUFa1ZAubtNZwoPrHZVy6wg9pVza39d7pxGBgUFPEmFFtuEXjjzFrBDNmDNbYGTbuPugu",
  "key25": "5Uri85FrbV6rJC7dQsRnnq7JTV9KTZWxqGEMF94YtzV7S4AcsBeVF23S2AoWEQRJqXDzwhYC64ivBvnTUCGNbVWk",
  "key26": "3XJukvxcsPeSaq4yj8v5QNBbRW4qFJyyh3Adybc4uN5RvAiyocGSQF9VkfMkirH8fSHZQb4nP7hn3QFyDnPo6z3R",
  "key27": "3YEwtyT3ZDJtXjTwG38RX8Z6aM3QrkQoPSZbHYBCHPoWNvLiP3Es72v7VJum8HhjHNKVvdPtrEocCBUB16PuCCJy",
  "key28": "2UPm8ZMKv8hBBmShC1Vc5YEkUU3HX6wDkG9NFrMHEDKbuvuXqHPiLEm2xkGUijYQaNSRPTELLZaLzbqMwohqc922",
  "key29": "AFNeuGGoogBWeJh2J9421Jdc6wjrUM24YsvJTkTQoiUe3zGsMT6M5CFr4iuwDLHkbWNyayh6FLo66bot5TpQgz6",
  "key30": "5DnjVr9zMcN7J9DJEbo4tgKn6QGcvPB54b4Uwq8kCiSDLQfKeNqxAAf5o7SHxyAnFTwYrg8UTM7w6L5vdqwRAbek",
  "key31": "2Pv8kPgQoECnXqxKD6E8ubvcoscqNQ2JYCTgAqgb5oRyxt9WXH2hdGgwo3e8KwdxBNsbfeKKTRpEPicaqwsAYQKv",
  "key32": "3zkyy3hiC6RTcbUycfpv7BssirJyZMTGmyToPvH2qAXVtwf3nL1Ws8sKxeuDRFtXRrM89xfC85Gy2omDHnKfhyLU",
  "key33": "2XaJo8jSeASc26AG7HAhKhGmfTg9x9sogdckcWqzYN91tXSYHw7MkTstchocshdxewnWPiBiKwp6Pg2ywf6scxLA",
  "key34": "5qs27N2HXE2ZFWxCqpiW8m8n7SmhpUeiAKsYMUCVDLmFZnyMeakAd3xsKVGdJbXgej4gYBBAQnF9kea6iu9ZiAeg",
  "key35": "2VkkD6D1cJNfqnSgEPNt8rXQtVF18PaDzcVkq9gbr5MiHJPUYqFvpvRNDEdEJXQtyAHyhqi2kBSbgfKcak6b22XK",
  "key36": "48WJL8giAb2C5tcwWAJSkfV3pD5NabTbHFNeitvDDppgJyY2myJ42ewStd26GVCuJ8p1dXV4TRmXXqYZEw7ARDzp",
  "key37": "4Uq7v6K2CejVPmJFJn2wdSJz9tzwAeo27fcbm9KN9rV9RUGerquQddMb2e7Maf4eAqxDw7LPZToFQgkjmJgbk7Jt",
  "key38": "5UfTSUebnQk4Hnmeoq15irGFydUJ5CmDzbfYgAPUw1cqQev77iDVJzbAFetkm3cBr3Pe2gE1WL97YwQ7Hzw93bya",
  "key39": "2pcFamxc4JvaMKaLVAQj3UXfT2Q3Ms7FW5NnZWepmBt9YMFJA9NcdqhHxJtM1RKatdKRSB7aTaa4GFTBpT6GJfNK",
  "key40": "31PeHTQv2PcdgL1TL3uFo4A1UUKh8SEmAoeWUYWBtAQC3dDstDEEUPk2kv2DPDrVdb4L9PFqDpKdQi9uADF3HbbK",
  "key41": "tXpkB5YbMrBvFGPSucRiZkjsvM9ZzaHkzS2Cq5UkVCwH7Rv9ynUWLRLU2JXUdaCXgFH6WR8ngLdJcUG2Ab29hP2"
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
