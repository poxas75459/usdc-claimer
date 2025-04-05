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
    "KwaWQLjvEDoW4eTo5mhioy5qyUuFyqRFPQgNUzzGYJMH9eSCA5PrVBkDumUbBBKF8vSv98hvXTdAjr97tqomdx4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xrqW3rsKy5uo31tKp5GcsZLnJRyWMrvfbRZQ9tmCr4QkLEUVhzoLUv1Vud6qUGWyBSq8BCPhLXAjWUDF96NJCUz",
  "key1": "3niPAzJdqDwTsaoFy2hR7sjmrx8vG1tw6YPxuCE2W5HQNatimSVL1owwVX2i1vLnit8X7hMD1NyZhz7Qt5P5LRAq",
  "key2": "aFDmVUrsq36opcwiFUayG7UG4AGaWPzkBWkkJSZ3r6Cjq3uKwQMj1NiaGD2Vxa8LnGBsmVWYoJDAyNKW57FnxCy",
  "key3": "3xToyRUiVPJWpdukup7n1tR1AhNFt9goh6dCgPJbbG9q7pTJumdWmaatCe3tLaHZjgEP33m7KRbBQ2dtqW6hzFuA",
  "key4": "qWthGBN2Q3iLmCGbD2wbTF1q8ZvL5hMSH3EHEukiRgcN5f6ipP8CiRicSB2MNxue8qA9PRY2iK9DvuQnQGs9NCe",
  "key5": "3eXyT9McHfHS6MafJLkToV28pzEagdP5SgPYqcT5e9KGWYPeVPbGMKeLjUYLKLVqDNVWBMbAk1xo4bznZypUidkm",
  "key6": "3bboCh3eC6GJpp6BkyC1AxX3RPy7N4xYzJqduQ9RW5Z1qQa8Bnp4Zhc5oGD5Tr1esnKZ7QwndBWAAXGk69bKMMBU",
  "key7": "2UV394HntoMu1x86iCcfHfahUaTRkFkVGb6UvqUvzyaSXNNaFzQhCcTEmW5H2boeZJqVKcMVMHNDvChSkUnaLuqg",
  "key8": "2mJkvMj6Fm6eMX6ooVbpGuUfLahRjmSEbgPHUiPD9h9tcN9n9yXXzZ2JveR8hdfyQPp4L3vKeTmZxfiZbABEb4yW",
  "key9": "4dncXNx4ReMwHKmji2xYNaTwsB6FEwWGyJKQmWdJqQYrrYf5rqEW9YQAfunE2zj4YqNH2fE1gg2a6nYAH9j5gKXP",
  "key10": "3LpWTg5pR7UrYZYPdoNxzbhA1K3bJBMzzCgqLozhbSRvG2YESJX2MXJRsA2boqe9UvMCQwCVwjbL3TQytwmb6azA",
  "key11": "46sFcvQujnQhbnn4LfJPbZiGnV5VSTGT9WxbGgTZoNsJVDoTBkyVJnTzDCY4VfvqDHCVqvuKK2zpsqurs7SRmDGE",
  "key12": "8117RC4g49tDjLMfh8hvPnGjn5u1dMgcTjZ4c5yVY4Hv5wQH322C6S6JstmJfhVifhpjDLNWeMTJaT5E3MK815i",
  "key13": "38m8XfjvVwo6LhzHFFbnFSHnsGnA7RC5mYKJ8Sif2f7UTMF3seQcmYia14UV4T3sVY8JjD68UEMZkaat46SZTtZq",
  "key14": "2NJF7iHsW9V3f3zdnMGny2eWyfFQuxopmCcb9Dj5Q3RHTJbMHyh5azoDb5PLuuxLvTSLxr2bXbtNDrgv1RUCVDbE",
  "key15": "2Cwu4EmYRmZGBoayf84VNosdtcwTx7EJQD82xoAKWzMGNZaUX78DBioFMGfPdMNQMM72C6r6M6REdRPnd4KFtkPX",
  "key16": "5FjsbF4nAB177X7MczrARRbWM3nq8ANsTEyALMBUMSS9aJRmCigER38iufFoXSwiukrKLxMLgiASLL5GBwFHHyfC",
  "key17": "3UtGTMwr2sc1mnDdgU3wwHWGLYLrJvEUwvcy18q4XHR733QanwyGff4nT4cRwTwyBr1HvZTMhSh3518XbNubXTW6",
  "key18": "UZCLAV8xcKfQNN3nUGJYETW72e7JLpJiWCt6zKtjSF351RC112eCcDe8iQYdYxM8PzFVVLznjSJgN5YFHinxxZk",
  "key19": "zUN45DztdrBKkwGcPrfqVraGRxkdnKE6QURocNKEgUjJjapYbDU2iKzeqUuMkPMbwnMy4xcRjemwQa3aG1rB6Sf",
  "key20": "55j3C2HMoWJic4CQG566ur3abP77iA7BtPw29pT1QnrmydGJeCZCji8nyjPf9qL61pwbWWFeqR7oyaSzeXocu3jL",
  "key21": "nFSR6M2jZxVXurgiMVph5bKjuQecf7hMTDkCs1z6jZnzbndqE6HXKtaRSpXjhi66uDhDXz1Ksa9UYuvSJ6dCpKY",
  "key22": "29GeCz5HiF4yvsQU4Ywpv3stGRjUKDcY3JrixwD69E3rbos1v8qVGiAGrEJUQdisdApAoxHj73EaGfye9xm41iTc",
  "key23": "SMb3HgWnTELhAheHo4ux8JFMAGL8R3GFhMPg3CEYEVoNeXXQyzyJrxv8KLw7QiprNNS1HSR5VurP71rKNiBR25H",
  "key24": "3SuncSg6KkjuiMqNdF7cnQaqW2YR6vi43uW9YLsm43T5x3bbatc18xTwjzRktjsnFjbha51DiZBBzx3wYySgWzkT",
  "key25": "4UJKLVNFAz7kDTzaVHh1uPSLSHUBstrmYgSPHChJragsR7jx8zESWBRnm588NTYfmdp8bWu7VaYKK8MuRHPXSWCx",
  "key26": "3qCRifuqyQYULbGiwUhTztTYZtmevQrLaSSNLFULeWpKkaQCcAQEr92BdcKx631RMSyQQeFzWShhKsZJedb3wpyx",
  "key27": "3yvtyGaN5E56CakAZrhNk2DsF2LLV5ghtTYs7VdhchqSRsGMsM24gJ3AgBebfbaMDvrgeSAk1oB5GhKV1Fh7n2LK",
  "key28": "2zCPEegZ8wYNc9L9ywtCZs6Fgwt4vTmReCF1644QuJjFbGYqu9aNBZa8vNReZQDgRB3KBg2E6MbzjuJufXgZWAqt",
  "key29": "q1rb3dpTZn2QsqFwwaTsjZA4t8YHy7d1xGAtiEAbtXLKNhbiyTvCLPn36RNvt8euesCuAEF9cAsV3ZXRnQEXw1Y",
  "key30": "4ywXtHmCnxw8jGFkjDtK2QLAq1qizX7tdm1PwQ94v93dXjzz8b4YgC6Js64fanxHCQGmJ9yoFmYnAsKTqNxvbJ8S",
  "key31": "5ikWVaKuiegfr9Q3LtZ9g67ZiAUW2HSzDsk34vd4ejxDydjJutBC5kY8qk8RswtT3VVEQmXXHz66ZCbDtNtmwShR",
  "key32": "ug4H8YV4HeHo8h9e2989fmGH2XUjH5YJfR4YcdwtBmF78xTSTvNU49M1YvM3Th7XxPZnwrWTRSJ66Ww5KHQB3cf",
  "key33": "2KvsUFYufeC12p2RvoBkEE1dx2McFWWP2yZ4rC8mbcstwpP9sYe7qBsbTQQJUQ7gVvjh7QFmF5VxptUBmxi8bghH",
  "key34": "26ww18vkGDCDFEE3H15P49ZMKUkiM2JHDH8rhM6sgW4Fuc1RFugWJMU6Tencf5qSpxZt3BFqiMBURzV8eqasEdap",
  "key35": "5uKBLH7GKWygnqCnEbyw6AVH6jr8CVUFY6wrmscETFMeS1qQ7UsqS9ruYv4ir7zbLEd2j2THtM27DwJgMirVX7C1",
  "key36": "3ujTW2aT4Z6AtFfrrXaVowDVt7hJ7eUxWR6cn8QQPjsLF5KoqEm6YJVLz8w7wBSqdwEjH2hmy3FWo2jHb4hgvnSX",
  "key37": "dsTRCD24X6ufv6tmM3XzBMMVrS37d7U4bpJZtKsXeL5C2cibJxtd7JoCV8r8UGbkAAYG8bxVNoi9irAperXCw2h",
  "key38": "3DTYS6ieDmF9J6MCmHzWeRvwBUkLGpKPmqND7Ksa77yAD99HxG5GFNBe93tTP5hso6u2PocLecgVkJKEd6ZggKSU",
  "key39": "55EFdyBhxdJXTgn4PnPFYiFNJh37DjwhWin58rKafQwje4avkWG81dmh2gnRrhLw5R15ffM7nQNdQ81cM35pEmc3",
  "key40": "42nGifz9LDEMGCRdrtbJxE2F5UnSckB7fHRgC7oVAmzTsUQWE7rWwpTAiAMxSqJh9WBr9aDXxyV25hCjwPaC9pbh",
  "key41": "4NjhNQvv3ESecFxKZiien3p14BaryXgEVHgar8oac6ppyvrJSVNQ5gdph1mYJuk2rz8WVdWwA9utoCzKpRwEbyaU",
  "key42": "43MkkUoghXc4jk4z9WkEjumG25xYo7G5ktf3Yf1S4kka1pfmPahcA8T2P5otYUcHZpHkEEhSnJ4BVVt9FZrMQCFy",
  "key43": "2fx3MQRzgLuVcKjsxNktcW8fJ9u86m9kft5G46riz3NzQpUANpjvYb9L1XRsd9fDpvmwFS962i5SEtyGZe5Kc8As",
  "key44": "4JiHwoysEa25w7oTv6fcmPA5UqBQLvXhfygNNJ2yqPMtAkJsQi4HxWua1z3zCS2RZjKHBtnoGXMZxMED7B2faQQF",
  "key45": "wF2VQykFrEJai9ERGRx7xQ4Z3DNtvbp1htfLMqqozRQMPQF84hcdiKWEfy3fc2LZAQ8YfrpfBfQTJCTxAiz7t2o",
  "key46": "5z1Gq1oeJiS19PTGs5hg2BwZNiGo9qQoGGVqVVHxNYq6wzg8fJ4qDjweKeRoXTBqALKuA9V9AHLzDDcKjbbz9P2u",
  "key47": "3hE95i7DYTEZZXZvLqk5W8YgAEev3LvM8q4vy69NnPAP8KX7ajQa5LfjmvQWZhQeLakq6WrpiCzDzH14mMXiNcAt",
  "key48": "2USyUSQaf7jfuYnoCXQNrbL3apyiEms1TsY4ayAGJeSrdJxMGmStsM54RRpBYXFidttDaiUmtVoAzo2CbBgVKP5g",
  "key49": "4b5ViqcZN9sMegTwfZY7BTRn5HkjN1ymbBEduZ3rDtFKDTMhX83MKVrwmpWfFSbnLnKzZkCRMuuX8WoZysdWPbUp"
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
