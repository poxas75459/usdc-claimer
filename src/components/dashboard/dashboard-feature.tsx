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
    "4fM95HaXZWNnSbSELMG57JoUFK13ufCivBbzT8VgMkGukuxqqs7MmMfgsZxagRqy7KT4YkX4SahcLZiufVxQtnGK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u4qzz16jyj9Jn6iMmuf6NzhqKgyP2PZrncZyb6BGetQp7f6efs6StWzspEaLhR6iwarRUNCXsB2bqxGaAmBu6mo",
  "key1": "42vijzF3WJSKB85GqSpMAejpC6ymKocrfcNLjK4NrvUKfxL8fR7crZAUd5T4XijEtijkEpNm3w59UZ1zfXjtCCGz",
  "key2": "xFCsA7DzEAdaULrDA7z5mB5iAK6HxRJ79Qzuafs54mLQ9QrRyo2N55LtZ98dWtAFjHi9riuBRDSv8mNi4Mtbdqv",
  "key3": "3C4Qr8JniQYZ4civ69W812duoz2bvs8XSHg7S8QM4Nr2SjTm6EAEou1U41bo56c41a7w2UdbTV7R6v3AWaCtnhdV",
  "key4": "4ChyHuN2f2bKfSrwfMDTJH4EWJWaDLjBHR6BEnjbibBTzz5WzHbTq5zXARS51iB6fFeJsj8G2BteQpetaeNT9kDr",
  "key5": "5vt5y2ManYqFiXVz4X11aeSy4HMWKkTJHUY8GxkFEEADCZUYoVVWHpWZqqabEtNPcFm1gAmcVtU2vi4n3eWGKfd9",
  "key6": "5s11d91xwHdnEvt9GnyjdFzzHXy42C6hjm5YjwrcPp2q2CmqxjKfw19ftk4PFsM2CEGducemfVfu11uBdPnsg4Bm",
  "key7": "3gVBnnvJdkw95HtwTu7Bw5mZGs8UBQDV3LKkgYJg9auUiym4f4eMaYNqVi3oDVA6gj9qQAHPPcG3zosw6xpu67Z2",
  "key8": "9EsBfSM59beNpfjnAXcbUYUKXNdkqhMdniTHb1cVridYDzLCXn5rgQjwhPoAxqqEGL3a9LEg2ETKT3Jc1AUN4RW",
  "key9": "8v2RBz6Yh3jRhGWjhB8ZMZiaYr8vsZ1cnTy5ngnBCm3U5NUL3SKnykYMjbsJFcPgPW7QuckJZzYcN6pM9v41Po4",
  "key10": "4Y9g22g2WcvvvDskYbhZ7Dw2KsRdomZ6Mqz6PezFgz9iNDP8FRhcnHfYuNf2BsRgHwbMS45yMrQMZyp51km4j8qy",
  "key11": "25CYJ54pfParUi5a23fo2xLezJXQhXjYc7QGuB8BeCQEtbpLWVqgWy5NAM1pwU5kwJZsjDDcX5pBDeUUQFHs5xur",
  "key12": "4Xxf2GGWTGpqbGShpeGm7VVWpnaqd3X1EFN9RFdKrgSA4RShP6vdmZvbq4PbodMrMJCWQE8oR9gZxHSMjv3ARFwR",
  "key13": "3erVCoizXkQBnAv3Ttf4yDxnRXZ5ccjjNYnv8U6SLQsQrPLNncigyPVTpoazuRyRZHPsaDQdej3dpMEe7dAfcC7z",
  "key14": "5FJHfDDQV1YwWPUKqvNcqJqunEJSCXGt1PW5sqodr2i2mGqh11ZUyZPZpjtbYp9gLEc1TZbbuczdUZ1fEPCzLM1E",
  "key15": "5LHArc4YuEwPFNqNGuFpX9ruJx2hvTMn9A7peoYzjQ6NY1xj9fLWLSooKL2ALiJ3SwRivmHC4wvw14HuZ19unzCn",
  "key16": "3UH4YVPptWfcHXyF3fktxE2Ni7h4wCCWeWStH1Go395c9fzFmSoc9k4osThAQdSGVEGLio68c6TfERL6J3McGyb5",
  "key17": "39DCtfu6nhugw7NEmbnJqLNjPsa3g3LDHGCdjfACfL2Rerc3g14d1wp7HFLqTZTSejaLPhoQ3iKYoqKGjKwGtf9U",
  "key18": "4VPYXkrhiVaw5yHfNTLQDPEj56DQNiVAhraSXnT98wfz21rwzacMshKNJ7qudEjEVUYAoUsfEyGSozB3ziS8EeXD",
  "key19": "3aHNjbhLXE9yjufMaFkWy6RL3Q8myxiddzhUTzE93NLbzyHT8aUQJN54RSBpAvmbBWN7USJBro2HMLRyUdn1Jrd2",
  "key20": "2ujCRT2iCETYQe8nbLXrt4RBMC9F6kwJTsM5PSQ6S7T2nsBX6zSwfmqJZ7xWwLcmS8dxqwMaYJ8w3hLBp4Jcsm5j",
  "key21": "fmgir6ijzxCovpiLRUYXKn1qQYH35Xxuw8GvcXBQPzKHjSZVemLFZbBBDyoevL7ZbSEGm22c8YVVTEroFTCFEEo",
  "key22": "39FCHPDg5VH8bU9Wc3GXEtakVtZTL989PaJLuCiJBAgVgzGD1hhDCRbpZa6BRT1zKTgGG8P7XqQQngmkHJJjRfif",
  "key23": "4ZejkL9etttbToUvZAc7x2RUiLhfDwYcsh2axFNDMqwdrmHGFBemFDqNiyX7oA75JHyoJsxFHMZcH3xcDdGbXLrx",
  "key24": "67G2efNzvLGsSoJFM8kJaLS5JATKV7tgf9bQB1p9A6VxwwWEUDfFBA9q5tsKNtQ2NnJWR8RsXhqnuh5uJ637PAjN",
  "key25": "5UxxCvJjsTYxEuRCZdCPScSfGjNQe2XGj6YALwzbo374LwxEvBg2KXyv4UJhQWUa2Q5C4uhegyv1fyzdYoSfrcuj",
  "key26": "4PECsmj67rGgeXGG6YGFQZhR4U325bDeHbNzFDdRmyBuHrampZqM4xF6K6H93EznLaXYHCWLWm1fqPZstWRztyf",
  "key27": "HDKoN3udUdtz5ngNGBmLDpcDpww3c7j9jwtVHbzdSfu4Q5XD1VWns5RWA7ySHS2AKQSGMV7SK7euxLnEx6Cdk7m",
  "key28": "4Gdr6BPWQtL1uMy27HD6FNYvRwQn393yp4h6TmkHm3tQELG9cKe2c55Dp3efPi8BGkrJQzrNgg2BQGfwbvERycyN",
  "key29": "5hLGD2xesLnGaBoVrFjeuLtjxTuz2njCoh9b628vTVnqBJ4FE86NmPe3Lv3Z2ZMB4GjZVSdEmX2rZ3RR3NkBiEgs",
  "key30": "5sRk77rfmYFw4gvWz9CYCNgepq9QwKq86emzYt9EUdBE6NoDpW1XhDNJjLpwUYzBJy4PHTA79CYogkyD6x4vYjeT",
  "key31": "yUnxideaqubRxfq5Z92fSW1MzTv2DwxyLmg15388qveCLdCUu5kwP7ptqZwHfzCtqQxEmhpYf2vzJkviA21DDoR",
  "key32": "rVtGnG9Fgv2c2n1zHzyXAVqH8oYsjzzzGWFF2JbUusmUDyRxYSFWTkfuK7W7ipPsUQWr7EFnMEvwmKse2een9Np",
  "key33": "3HmEwhdAchFCSwBB93E5hHRHRAEmKAUaxBxmcC17FmvQ6ZoQyHukxmdBAiQHGbtFFWQiMm1XFu7zQvJF8fezhuqa",
  "key34": "2jtRNGmRyLq9uUhUc6j19cZneqZ21ZjHANWpHmzRAeywwpWXcMGhQTQcY65H73kyLxsrM355FyZb3RnPLoCF4Fvk",
  "key35": "2AvUrLG4CnwvyXu2RiNj4uYMLbbs1LQaU3qYXbtfDdcKxQ3Jr3KJjfDCZZnfW9UY5Kh4utXKuLzB1UbJ7FUATheu",
  "key36": "3PmZLAez73WpjFQRkt1YWTpokGZwPn2v3ayNpjuqP5V1Dxg2D5DMfZbrwAinnTCDP6RtJLa2FS9Ls1AU3kfqbQBS",
  "key37": "i2SxvAhyBwkiwdaXsvGUqihEaxc7R1nKgbZt6vccxk43RvHbwPXKvJMQKgsNqqJ6ASYwazG4f2JDT6mjNAYd9LM",
  "key38": "i8xyWTvCQebYep5fAcU9DHBBdi2Hen5iyRhg8UjxHgRiizD2P6exvFSdDdCQjRWGvsJegWv2a7TToJQPaqXLTSp",
  "key39": "5W2UdsSqLJVVikN3eRHzALSDCEwzkrAfm1M2s9LbrSX7x73Ue8ZgEFNGsLbhhwCCrk2FySufgvKH2Tq9YHsHeuKZ",
  "key40": "3d4HEnLHk5NkaFWwVJmW2SkdEknfV2mvzLcDoebDYr9uLcY3pvbTSzt4q9CCCb2EEKCUYFKuM7LNDCs28Qf8S4wA",
  "key41": "35B1MnDNZFjXpRv3XrBEgjgEP8ziFEgCXZts1WT84pnRaGRicAQcAqYRQVD9GUe2zcH5Bcd8g5rado7BKVY3geM8",
  "key42": "2vrwwqhJDqKRT5YqXPsygsXBUQ3BN82GgWAcHEKSfCNhTZv54zg3nHnuFWAxKJfBwWjgjAqxxWxYdjDRe2WyQB9i",
  "key43": "gKULvM7iTg82gQPQ7AgG9QFX2UMArdS9VSjncgsE1LQPrhwgTEdYP6Md48uptUBYU6zexm6EoBkXENLwFhtnaTy",
  "key44": "hKAxgsWeEZFt6YFkCMeWfPbtYtaFB8q3nByoBsDNLURyE3Nd3sJE8qzvx5rpewGKZKTEagJLSRgghG27XwRJAD3",
  "key45": "54BuYdrwLWP75DRJRxxpH7DxufR4QZYh417WvJ6xm9Cf2T1cgvyikwELLBGq7HUy8RekuAbdUm6eWP7LwhBFgTtv",
  "key46": "XLkBuyeS5RK7t12h3CfXYUnEZB9HPbVeF8ybCXEtQtV676VvV7amAwHdu4SkYwZdbABK3CzpncvAZBwA4TH1aqG"
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
