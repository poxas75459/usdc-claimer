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
    "2aJyu9dJxSxgZTqQbXdfV412M2egyC6ZFHoHDRTZGEnU9TJFTV1L5nxBjTHrT1FrFoPQXxqY4rRDxLUWoFV9tXT3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31P28oLfZLHnfKsp78J1pt7KfAFAMg4iExXKeHhF8Wa25sLdqxCySqkaUcTC1sMG7ZYj7Dsn142c2gzx7ibPLStN",
  "key1": "4PXrZRdD4qbyzfrUewRzUMgoZyviLgVpJkUF7qXUAaTC3BJBjkga9gvVEdPJJAREG24eCj6yRuqGvL4Wfe56JuXJ",
  "key2": "3NAimx4NmdDAGwDQFu4s5hb2wwyAjdsfbaodCxSpKYWEdF7Px4J9TsPWfGnYLeoipYZS1XyJejnyipV8XdowpAQ8",
  "key3": "2JqJrgsz55cayFCRWiqSUMsjFXRgXAbKWgrbmPgUU2qAvnVeNDtNmhFMT2nKtnnFCtHvne3WGm4o1B1WNDSYm3Rf",
  "key4": "47r6FeuC89t2CwyhAaFq6mdPALhJ5uzB9xMQP5jVNfuci7krDQJ53vQGtYXzRuwqwKVLwxFms3KA6muqkZfxbaeU",
  "key5": "3EyyvzoG3HZspuWx2px93WQu3bgCD9kha4zATaZk84xxvnh5KFTgYy2WQ4HF7JP55r2C6p2YQDGNEwS2j3RKhuGb",
  "key6": "2qArzT8FhqzCVeMfQLspL23AeFRyYanxa3jv2kn5MhcAqt55xy1k3CAn1MA94URWBkUuttBMfdJwS11vaTo2aNze",
  "key7": "q4VvFskPApW8jbzK2PieKYf7J4Cy1KmZVjmARrf7LL69nZ9vSxfb998T3kKC2R18cUcMBvbRto5jG1PZ6dXzm4Q",
  "key8": "uK5ThxvqnUDoPzwyR8kVMThWpiabVNC6Q4GD4fmWDG8NwDUkvmfauXm4Vqu3pFWL6KpyRY2D8mDzKW52ETRbBYg",
  "key9": "2ko4YmiGA9AtmKxHT7vCMVisy5FdEXR5MXsd6K9qUFRNXC19gbo94p2sPfbB52RKkiXwxRYP3TTgTD7cEb4kQ86W",
  "key10": "2DtXuEZ2p7QzLPiuKzeSxnhfpXsmJz8ZtTYhFS4PCN8SEW7y99zBT278PBQQwnrUzKPXAFCZK9bHatoHZ2s2RPrK",
  "key11": "5ycZ9iWx1tgcD71LdXhdLddkKWjoTaGeJ2XqN8xKozwu11mkDHSUynCyvpGUVENUi2EA9sJRqB1VFk7VdLPWfNZh",
  "key12": "2D62q1wUjgeeL7HuN6tuks6yANbyVH8gciXMW3T15rcoTQFvP5wFoZMZRD3zfTyMfWhVNqPnLfDuxvBxRAuCTe9H",
  "key13": "3w8QA5Xyvk2Z9XKw5VBEH4w2GkSct47RyRe9XpQFf8tDUfi93ijT32oA7GZfy5krHvp5voRjBh2AzQ4tA34Cd5t5",
  "key14": "2q1UxpRE6kQQLzimeZZJ1e3Qm5uPvwJg7Yt22dhHJw5EB9KrDhLGgaFgohwkgscAvJqqY87hcRYt1Ci4MYRf7sZM",
  "key15": "3MoRn6WxDiwwWZ8AfNJ1Yyr27Sp1TihywyEKW1LF3Dm3znffPLTS4YeitBqTT4QYhjxpCc4zcJk8ZzSJ1FTv7hiT",
  "key16": "5vFx8UsYBhSfq2wmdDoXkVowS1m9CXkh9zLUJUebndyH8rMaphrbhwow7CbHZj4yQFF29DKXGs4vYnsHHxGQmeYA",
  "key17": "3YM6JRUxHAD552r66tPfZ8KqtBai7koednG6V3GgfApd3CitRSyYMdDZLPmWxnBLWdoEoMg3VvEwhqrQnZCMZ6f9",
  "key18": "2KJ5nBStqnCe51NTBVan9XnyivCjjxZCTBGTc25dyLrFSmVZ57ASCDJGuNS2EP5d95CdeQ6MMZVEiGqyR2oRfWXn",
  "key19": "5pMrZKoyYnHEBJeSFLc5DCGzD5i4oV1d3R7f32ChSxny7RTUCdWCkqHu1ShYnJDaB924eFhH3a6ESw6fF9LoQyHg",
  "key20": "5LkixYq4ZhqMqx78jgWqz2zG3kZbVU9o1xUxCyKATiVrGbESkRRM58UBZPBQ8oCxEgexoG1wAKUGtaVZz1cyYarV",
  "key21": "59hSPcdf2mPDQWtwEkSa5jLgxNd9yyTXR2XW7JJHjpk7uG2fz34ifdkGUTijUEEERihKQ8eTgySAaer4atpVsWob",
  "key22": "2TsStaSEWwJSaMPPvCvKA2232rgWxM6JdxRhx3HZ9XeWvEWNxNBNSCA9cNt89wPbUMyCyHLutMckNPkTdM31btFG",
  "key23": "yQCFo6qkuXUFbpiJP3495JGtiTCxGqrAh68DFawJoVQLa2r4VjuLRwwNsBj1ptWe93Ln1akpXAbMcbKvSWqzivo",
  "key24": "5ucPcJcCjazBEBLzNyK5DUNU7VYvDRzfWncYaJVMn6nPHUPgbB4VrRjGCMskKdp9YhbGw5zcWL2bngUWEm7cPZ2L",
  "key25": "yFdTGVmoS4idKXMZZ659FDKA1ioLE1voTmsv6QcoScpiPSvgLAEwmAE9LPuAundzPiUDXmnDNYhsyjf8W4HG3uU",
  "key26": "5VVcKdEk4nD9KnRkEAXXcsauWCmhnrsNaUKm5vdyyUKsSLq2PWADr3NG4uURe2rS2DnQBbt5HfpQH42hTDicEhKr",
  "key27": "4nhdeHCKXUD1hpzszxg9Vt7QduEu4dDDWVDAdLcezuzQ3BCFfRMNBwon8ksWQsdVnCrvqMNRFe612KKM5c4jzHqb",
  "key28": "5koBFeR53hPyBUexaUU989UwNS5xkiTA285KmiZn5tpYHcep38V4TapDQy2A3T9XRNSgwyYQpMkDMi9EmHArSZB7",
  "key29": "hSmBadNZGTBbmN7MeRfqCVVhJbprqTjDFp22WtDRcBhWAhxgjpYeE6iE9MW34tghdDCdqpfH2KHrrWyrxZk9VUV",
  "key30": "FavB8LbQjFbXohkUge72ebbuh6UpRTpuTU72BKrKYyNiQti2dvnpUByYvo9rAcNXHzcqSQN9VkEsHBycqja8v8x",
  "key31": "3qqu7MzXMFhwbWAFp3gHxtXZxVpeCAhuJEqmUs91vGiSrooNTQxrY2VBf6KZbC7S1a434Eij8rt8BrgbW9aWfsNn",
  "key32": "5qc7hn6XT8VRyjebgs1L1x7RaTpu4VCuHp4ECtTkEmkVLLk51ypmbdhgwC5VYdndjNnkPemUAR22rQgaGYAHjNwL",
  "key33": "3UVFAwvjEW3pYDhfDREqdPcLabJC6rzCgmCShbMhjb4dCFkYXSoqFz2vcXPwoC58BqtFQA9PoZJpJESy2emjXsQB",
  "key34": "39wMhkfJVLKkC1EQGhqVeDGZAojhWwWChN7Vdvcfk4n8VXbyfCQsCvF7uUKETofK8pBf3AT5ij2woffcquFhwMcZ",
  "key35": "5N3SRp27Jvrgrv7HdBCTpddy8SpifXX9LX1UJCJnffTsa8uF5fhJonjcb87DabhVhGxudnvnN7M3d6476m8nTBVd",
  "key36": "3YmLv5RpaiyPWekztZwu4V5odDhXZYpaDH2QAEUBvV9JbUDt4LJ2ZzSbdgiBPQBRFoMxeX2Gv3PMPodn4DJxSGH5",
  "key37": "CezWCXjz2UeF5pgF8k6L67uQ2RhYpY1yEWW7f3cLWbsdHSrAxN2CJD8tTFpfGc4ZFEsZE14eJTzcha8FTSCiDUp",
  "key38": "3q5zxsg1MN2UnZzphwhVdwyQuXdUnQ1ADUB5apbswoAo4H1CQu43AMgBGfk9gom4sbNvqDDYX1Xz26bqMoyNNPa1",
  "key39": "s7QupgH5fa2u9wFTX8s4RWHKAeZLUebGZDLJix6HHmL6GYdNi9BxchupEQVQyTH1QDUuwV2nQvxtzFaPpEaRikt",
  "key40": "65Y5zK8a57XvEQVQaqM9nRJkVExGmy7uuoes5cHw8LvrEQSAqDspeTpFR3ctHtATFDEBdxGcie4NV4HpYZ2yUW29",
  "key41": "51E82pQPmgv7XZce4mrdmTSxGvVQzDowqrzRsu3eXo8RJyQz5iBQQeej9iFoGAXeZJFMcTMfAGjumDYr8g1DKHWt",
  "key42": "4uU1L9WFzLm8oYJg26QM3bCkpysx6qPHuZUQF5HKHVmP8FG8FL7PRWWQ1hCszEPf7B5ekZksXNRHDPZ465ZUvan3",
  "key43": "2j8Q8CdYDTQ5s6dEFeQ3RzVNzQ7GBLd1jsG6YSNaNDZVR2UeoZyX6mhcTMTY8gy1aK1T2PqwdqTmYVQdFsLQZNdd",
  "key44": "2kscwpB1T1PUoqJKkWB2ns5kkfU1SLaNVvxgzyBpdoavwzxKREf6pxH8TBsC3hA4ZuwLXM3Y4X5pNV6YJgyq9dZS",
  "key45": "5ZAawPPWMnYf8jFyczfHGfKTM3MUrixnZKL9BdZ959MudG6t6UafAiLyEkp1SmGN4jr1brRJuqLxYoTJBiqC7k3j",
  "key46": "5JXc3FcF5gtt7GAwA8TNAzatp9ZmAq9zZPuAVLgwBxXHsqk7Zv4hnRi9LEzU45DsUTKHXcLtJvMR1g1QTE1K1F9L",
  "key47": "3YQKEzV7gp8xidi5WGo7oJsVGNbRsTwJo6aUAZgCbwKk6G6sJs7ttm8jigXP96rjBUrfkWP8HkJTKtSHn6DYbhUF"
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
