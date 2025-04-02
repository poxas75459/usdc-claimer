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
    "5Pd2RTQwyxmFZNQzzF9MTR798G21vZsQLfPTUgqY8tCEoT7BsXNzYmh6LjoNgtTNKncqtNSfPN2rcWUTRpvZYuTw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XhdndGteUJqXyQh7atFmBwZhxdQJk1mWASx8rnqUw2oVvFaEMkKCwADPxJVNM2nu6tkLwSNFDdzxyJ4zmR5Ly7A",
  "key1": "3gLDdFtEpffUaxR4YaS2qo8i4kTA5UpkN5PELxKLjojkrXWDYvJErP6Q46JREWzceqbMiiDmiy1A8Bbp38UpJ3qQ",
  "key2": "2mPJYLCyzuS5dR2SCP4u9DDwy6DTe3V9cgVZpxKWesDAB5jiteGyVHZpSyg5saLDi8aoAT51MLW4mrkcqJzXETrs",
  "key3": "4FkgjTw5vFUBAxSNLWdGyjgzweZhHcaB2dbyu6Pi552hVT4DnEqAie2nu6Wk9CcfPZUKBiW1hyTrY9tSA9vRbitW",
  "key4": "5HLGmCheaFZPgVTcVJXHsuRNHCGDYwWJhgqwQihmD7L95hMu6J7kAJC2prUMLV8gS1s7rbhEMc55aZ8yWUs9oeG3",
  "key5": "DGkWghEYC6sHmr84Uz3kaCe6MYYD7DZFzb9GBdU8g94b15mei1Ezd9kkUbLGZZMfADTDo2iJt4noMDmt8x8xFbi",
  "key6": "4qJq14xpKoB9ExMng2bvNDksdUpudicfrYYJaMjLybH9xDDAhEvk19u4d95pSDK5MYrjd9SAzPQJDEbaghbG5opL",
  "key7": "4XkVydy8mDhJvHALALv12FxiyJzQuAc96gLyQXr1AyirL99GFipLaEV3tVkyKHJZcgXF9ZbUt5svcovBACMejSTG",
  "key8": "3cro9sk5K6JPKFTmzLM8NRHbe711GVYZ5vgb8Nbs3ZBpgcX68SYuddJrayeNkvtQW7VbuFkmiU4vBbpEg9iNAw9E",
  "key9": "24gNL74SwDEca9tmcAKU5t98gKFUAUYEHiUXpySyptF4zmUbUY13RohuyYReS4TbEs9NDmDpkmnkahpJUDUzMnvS",
  "key10": "3X7u78CnN2DotjFcBq3RGEPzqcdJXaAo8XFxsmpzm5FANZueiuDEWF96XrDn63XbLo1Y1yaEANkp9jKphaSeSQfv",
  "key11": "58iJmMcDzSHVCqpaiosujzuyPB1dety9YgwmwhWZhLfwwiU84rSTtti9HuHhPP3QFGAvm9Vojv8UohL2X2wtE8ja",
  "key12": "2yXWimGUJGtyaM2azow4J7yTNnnaiHSdRPEEMWwgQvSfLn6xdnXVAZ2cpKkNeoJo7HBrVTY7unnTf5tqczZySBfJ",
  "key13": "3xkW7AnotFjb761NU5L6Tt5uuoRrS1aa6BBGf8dX835w7mcEujhw935DqLJJTMj5KcimAwNCMS4eLsNhk5nLMmuT",
  "key14": "5iSvFt1eTzZ6pxnnbrAktroXcV42eyaNFp5wGaDHfw8SDjHQKnKoZ73g2HqDt5ga7imQsPWnVcyJDFuqvUQ2LotY",
  "key15": "3scvANepff8RFoZegFsfxPqdYL2sRQq3QAja7X1vQV6cVHeEkgD8YW6kKBGADk9pkraZrAmFruGYEik2WBCMQ7xg",
  "key16": "3TbgdL76wx4b7SmahHmx8KL1Wp5FQTnnnL2KZSUZXxVkC47kGfRaQZ6zz8EQ98eFuxrxanc1Qad1bLMbXLtgLu5K",
  "key17": "4dcdX8Lm9WBgTpqb5pE7huDNVrpDwALWXY6JGwHicRJrDXs3UYVZXEfEpB3u43FK45bC2rHVVPAJp4NqXnwkhve6",
  "key18": "4AoYFGdP7iCHGrWxZrJNnHQrDSLjM5u43GKn6JhBp3nr4Bv5fhmSzRGKuT56HtV2MrKRExT1JBRQeot6U8xzaFQR",
  "key19": "YcAEAhHvNCgiyVnbJ7JpRRNq5wAFBMXg6xeGKaFtbQuHPwswRGaremF4JwXe2eLinimmP8WQsgzGRjvRaLPWGYh",
  "key20": "4mcSca1hMF8vz8ZEHnH6HScGpTPapGhdVw4CL2U41RnTyJTmhZZykwUfLXz1HErAqFLdtHuzoi4aDLYgrzrprGHZ",
  "key21": "51bsrXSVarnKaTPjC2Z31YJxAmjL4GwRDHzcN54pV1WoNbF5ZkeAWj1kU9fdkePnTs3LMHjeSBAvMufzQkyBrsAu",
  "key22": "4A1eU3STa7EjXmookqChRHVqJMCt7wN3n2uAVzZeKMjGcfdVjGfhmjWrYRzU3o2jEeLakS9wFdZAnyj86amhdqaw",
  "key23": "2BY1hAEGjRwnGMHY3K1Pw2LNFQo9J7orimVhSbfpXzYVkpVn1mzA9K88GxKvnPwSvQ9GV6K7YSoGfg8HCt53tnLS",
  "key24": "5eUumEs5hJnRYjkchkJ9Vv82hgGNtr3ek7ENAuRovNiQskp4EBqrWTN85rAiavwXq7wdE6iPKgwMnh4QEi54VdCi",
  "key25": "2YZnKZ81zFryctfqgZMFqRZFvwRnksaeUfykqGZaWmkRF3v52XusfZWkEnS87YTRqoG9Ery7DBTsfuS14zTz7Yao",
  "key26": "5FPvMEcBeRm5JHQoyuwEBethcdkPfnXWJGihsfawhjFE8ZjViq3wCY1BRQ7KQ1FvW2HjP6vdCVSYTcVtiFSQMqpg",
  "key27": "5L5ZEsdwCEAFMY4W37iZfhXNM5ELzJGx7KSoZiuBXw5g6YKc7FjJ6yhiBGjPMNtVcG4izaD9KmLPfjrVC74eh7PG",
  "key28": "38hnbq4nik9cqJx1HuQMDpAHzuXvX8jminiWMh6qU6J6mG4uxJkpxmpKvEHS11JM8QXdXEahMZKSqCcKYhXEhwpC",
  "key29": "5Z558Lvt9cxGGggWHAeSG5THsmhyKFLAMqNoxEXAME1gQJ8VstbaWCBVoADHiHoYp58i2ZC4FAWGSGL8Zbc9Hp8e",
  "key30": "4LrFeA2ewksJptwzhpe7xy4WJ6cz82nfexsooemdPCMJuMLqRTzrrwcAbAn14RqrSVo9WTiH8Smgrq76XNLdt6J",
  "key31": "5n5VU6KxTHMCyMbdhHnnLd2xLAgS8KnnVa12BCuR955XYBGhEBZmshuTQwHNmqTcutpH9e2iwYnkWdPrqqcBmo2L",
  "key32": "4Xqx5YTNZvTSgk7LNEHYx4X5rCEK5zCZi2vA7sqjiY5j2PznDmxJ1dVRyYkGcnjEXi4NsqjbHVE1BqaU1KBoz5ey",
  "key33": "5fwisQzyC2mbHgwzkJP1sm6TrnVoMRWuwKpptiVD2bbooNt8g9JRWBU4i22bdS8Gy7ksM8xPAZyAoPhRtGbB9qZk",
  "key34": "uBkjMa6JZotYYp1UjcbqauKk93zyZMcMsv3168PVHKUuHU24PBaEf6UQyvyRbH8evudxeZ8UsZBVeqViMM9MVwR",
  "key35": "3sWrWq5bJgHQKt3MBgbAHmaXnGbuJbZ15bD6Ty1YgVeJyBNpHZXuEfSTsTt4XkaWoMrbhYrGAKJ8TM94RRTnmy2d",
  "key36": "2P3fyNw3HWKVayXSReE6tMSdFZuuTHyKNnDq2hNUVeZqqQnzdsbPiukDDwKH1eApEDVtKL8jpQx7VvJYz5nAzMpH",
  "key37": "5gofvfnqLL4u2sN2gHKsTEL5D9QoLHzFuJ1Ss4jvBkqpTtS6SSttFgKwWk9tiAHNi9wVhQDuydWpqfprKz31dhiN",
  "key38": "5LtaFQwyGPuZmQNoBvUgQ7k6T4gVFaq7Z52ZCyL3dfPBqCDe3Gqr1CS6Rhwq1ThKKzZRasGwQf6FZ9DK4BoHFjds",
  "key39": "SpM53DsrnfhYqv8ZxybGgyFsvpDnLezikGU9KB17rt5xMtrXTAW6sYkVR6sVsJudndH7XaYgurNFoeDPsUuVssB",
  "key40": "37oYKp7RCpmrzTUzHbaBcFMNZFpNLEnGt4NuunYmjm5iPKThjpF9RdhdAyJZEgiis59dPw5eLXfWugirrpamyhjh",
  "key41": "464gB9PFpTzooHijeNQqcBVPMArjfR68aVBybr55MLeELmhrmtuZr5eLsjNLJaqMvRZTzhuvJekshUQ2WdKcJuJx",
  "key42": "32CYFGxZkqvNqwDY1hSjTc7Fo7pwFJb7eH2JLYS1exUrKb1YNJc1VK2q4VEzieHKi2TNzvLehmXx118WMFYbLozU",
  "key43": "4ww1jVNoZuDYSgNSfLSRw9mQcZixEC2yshbCAjTRKcL1jJrTDyuYsaTAdDdYKbcEXd6cL3z3Q9Hn1WHQYY7v6t59",
  "key44": "bEiYr18wSKYkgKn98mm3gf35tqpTFDNfzfEHkvnjn83BHro4CEj3F4HPNcgTE5bUx4P1PwDjvY85iH1BmQs9Mun",
  "key45": "4pAxVMq13g7ZsvV4yUjqmBP48hnbupNtZF9dPpCJ3x7JsDX8XZ9yuzhYk9nWEuTmd7m8J5bhunwPsHrNf58n9e58"
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
