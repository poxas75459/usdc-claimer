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
    "4WLy8ts8KXRGL14rMwDHbhhd6KdWtFoDrrkrpyEjpJyTAd8BFtHfULrDZRvM7kuKhkv1utV9YUmHQARQekmaBAgj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kLWgWy4j8CAzVveVZpGzfJpggD9CGFZTfzc1SomwD6wThMNY3TByQYsAoPVkFLR6sfvvJinGVY8Jw8EbR4CeDJd",
  "key1": "2R7N7XwkkrERuV19Yw4LFrcAsptqeWZAbQgWLXBTLFKLf8EuoS6Gt24MErvyNbCbyaRcu1UJFu59KutDBLVWx9VC",
  "key2": "5v3hhYTnW6cjmHmA6hMkW7ncwgVuSdtNEw1ggNaMM8uEgQNSTaRnejz5HZ2mdiqweqqPEsoXVSaF7mV3hAvTyuKU",
  "key3": "E8cyXtrvyjam54j78acxF5SwbXsijnpv6yCVHS38SGuN6RHN8yscmD1Xtpk2arxcSriqKFpenoTabuqC6EpyZpm",
  "key4": "2xnhPxYPDufW6g6vz57XoBN36rwzfjxPKNh2tEtZBPWmYx6K4cpxVQacjrmnbcATSybwWdgLbEMXw7TqzLubR7b5",
  "key5": "3z6VkTHVVWN16f5doUj1ALUwy2Mi7him81Cr3bJ79CnV1qfuFgCsmViifuZa5HoXidY7guVGCeVT4zCB21wivSX2",
  "key6": "5VD3T4E1sxoZYnGgJku4qjKorvsMgj3zipSHiNQd6RRNGhbqY7rmmP5dWPaMoFhhE9joGMMiPNFdur2QGDN3z6uf",
  "key7": "2UA5XuUvxHacgaF6c5WSR2xjtdq2S4aocRVGEhVqumrdQA5E6qNQXNnab9R4eaLnTMjNttUY9wrFvS5ZbBiTyKxE",
  "key8": "5pagGn2i4ngoUMcYZ31BNeG91URBjoNyQFVC44kMGpskt9L2za2Jsf5U4NVyCPUs3fSEsNw5sW1pofVaWyHPRJuk",
  "key9": "5rFPbdrsx7xfLcovVErkNCfaFXBu9cHaC59hRydHEkGNjTNUJHfsdkYTNUd2qhCAx1UhUzpSULc6bNjSpQSi8SoF",
  "key10": "2Jhm2GJ51HHJJ74AFPEwiFpmmqobEM9c8CoJrcuNHah7abjM8D2LWaMqr5dMo6q2ZCfG5Dr5Uvw8TiQJGwMDUxBK",
  "key11": "46rShzW32U9LGUf6vAA8oZBEJFpNWwF1PKrZmvnhLbB74tWmyazhsvuqoXV4zvWEy5TKdzdWk7sjeNUSkmHoVvUL",
  "key12": "41tgjpdUUHnRrvNSCyQuEtNFd1L81NKDkhMgiYq5Kkcn7Tbf2Q4akSRFNRAyiZKBuvPeUoMbnEpReuALkifh3m6a",
  "key13": "3v4As476HJE9M2BJf4XCHWMqZYmUJpWnctbLjnCiV5gDivwwV38nSYjFMniTSA8hHpJWhc5fJtNKYALctBJt79Jv",
  "key14": "5EAn8kWtfRnLGaD9C4yx1tDz5Qs5WYeYtnkXVv7FE35ZK95sYjTVosRkn7WEY6o67tXoLDwjasDnAcPLkZrZ6qzk",
  "key15": "4AngX5kkCq9LsVuN48vao9VJue3TDxG59PQHQjwaj5buFkJw2XQPNePTKkQDx9KK4KjyaCDK1iAAG1GR89wSHHr4",
  "key16": "4Rvw1CWx7usaGFC9EEuZUFRXFSSsXwxiRtdHbPzqTgkyHpj4cRjZ6bdF5V7Uh3DUxpqux5RHE3gMpdsWre3QHDbh",
  "key17": "4JkFWPm4eeVomhx8q5yV9sKv9GnCXd3bK5pwfVHz4DUG5tdS3DxVmENEM9C1MsMK77gGPrLHjDEsKvCMg5KiTAzm",
  "key18": "47Mbq6VxeCJkfeTwWRzKHq3GRnEd2TTk4a7qoEmj2VtQd8HvNVaP5ZLmeUQzRQfidPWUj7HLNLpDMzu1hqNMvaeA",
  "key19": "bgPfH3hWocqJY5DBC4HT73LAtraUSfsbUi6m4dqXuohaLTjpUUCDQwQQ12n8JvunmViPLuvNA1579uJQoB8EY3c",
  "key20": "4ePH8oMdGXQKxRXVEbQDAP8W3HPP7S2z8eQT1oiySAqWS3BZLBN8wHNYecwM5Vne9gB4npMcRx1ezrcutAAjB1gw",
  "key21": "q7Zbrcv5HKD37iqRM34tyFEfwASy5hyVRg2mNhb5eGrrdkQfiLetdD87bohmxoTihfY1hEVrc6Z4A56yWn192vN",
  "key22": "4u9JkFXmBBBpN2UNq3hzHaADN31XSe6oJ7VwQwnkNh7Xr2PfWhGFC5HFRn2u934T2KAF5bRQ9AJrMHCkk1UqMHAA",
  "key23": "3UwjkRseSAaKmwaaNRuSKiRcaX3BKJXUTFR85BsLnqqBv1HWPy3egLhZX1baYkUGXP5Qz8piv8yr22G8L7MPnuYz",
  "key24": "8eJRwKsr5dpGCfQa9Dpwarghdh6EPyyjDXbxnNBdqLH54Q5YN48waewyXqN5a4ZphMR8GGDPm3pp6uj1a6E7TSs",
  "key25": "3pr89o52oix93rC4W15YXWVRWSAdfyrdcQcdfVymidKKFQcxg9Y6taxxXXo1t64GfM3SLCj42tsDc1J542Zwwehn",
  "key26": "4s9sgqiYRfbpehCPd8amMWsX2YGUoT9XTZq8MTRuu6NnAaGRb93VYsVowAcg9JSU1igczaLCma4aJ31RyhuEBeTq",
  "key27": "7iYS4VzH2guF5k5JNc4kWTiqbh9QLJbDqrFzb3B4KPq4Znj9jwvqSexAWDLqZuji2Jvb8A9UVPmDidLhPXhZjnP",
  "key28": "rhdpn5b12qeKfSe6UNbomxUZuJc1JSt2wb1xJVJytt43xwaw7PDKCW3TZYmVBRH2XnWFoFcEM8c7uiGrxuNxHNv",
  "key29": "2g2YYTQm5HsT7rxDApRti9u2zLc3xc6VxVMVZo3CnYc39j7ekGvUz9vVqvtE5thpHKfvaXXCD9iq4qXAccweytrH",
  "key30": "3SrsNnaePMXxz7R2L3MXZAaCBTJp1SYURNMYNFMQMQ3epRYezvi6LLi59aasWUM7eJCVCdd9FVnkZbgso96vLhre",
  "key31": "2yuq3YLmyQE8KxGG6CaBUhqAUqyehH6c5QvXNJewxpxUfRpyMzmgk9fnTgKy14KpgWaFMtYnqoEeq8fo1ZU8bttV",
  "key32": "5C5wStpaXx2mjKx77AGcVs1Ur68EpSJ7hfDqXMdGJUPqDwmvzCtDZs1r6v9xzfvT5rr8U2KnxuGWHQN8LRTbzAb7",
  "key33": "1sDDYfpT4QaXDrtKHZSZ51VbnvJbA14iZ8hHnkEZvdwGapQkAbzmuSCgp256EMiPw8He2cgNYJaUXtut3rwR6DG",
  "key34": "3BnB3T78kkv1E9DGki4cq3ajCHW9ZPTPLcBexiBi5Z8jGsfyDTu27B9NRrTrEekVSbQDau8gazs5EyQu5wfsUgSR",
  "key35": "5ZaMV4QnZwzPmwVqzbZXGxSb3jw6Y44oi8cLvFSpxDoT834o9SEymgfiSsZZRntckHZG1yhtBrWUgxobe7A5ZKno",
  "key36": "4uhKewEkLSfv33cH3fxTdrgL11maqn3gnJfsi7k2wXkKVpzLP2fkk98qudMMzicGGiyGF32kQMSfjiwjmopzUxaB",
  "key37": "pJuNGwH4v8j8Zn2ARuzWtn19L5RBatE879J7mEKYWWSFLH3i9cKRGnts3iDAerNgJgrFikKvh5QzaVKVhtSGynj",
  "key38": "3dN9goew8WdFczrYHuacsFZzk3sCLsdQZs5TS2sh8YmBcjQoAwUdwE7wzWEgLUyubdBaVyiPSU95QaGFSAKTJ9SW",
  "key39": "3eJW3SrkLactmvXBuitUmtB2pSgcPQipwgqW7a6f5mBtQNkJQKLVUCEeze9T33Ar4bDnJR5d6hKycu297AwxaEVJ",
  "key40": "2nEV9fa8jCZnW6Y7aN9eBk3yCAzYfnq9abBpupgVYyChhHfvdsmSbwMm85hjzhpu18DCqPHToc5kbWUYAEmUrSKp",
  "key41": "2h7EiesWLqWv1xuQCLke9dH7PZmGTXy8YyBkrmF881muXTC3cpN3773tLkyn2BFZJvnBbwKKi7Ne2kbyLQaBznhD",
  "key42": "29YHSJt12KoewPw98dHBXvjTYxDPBy3eAG6CfmZkAb4So6MUBBe6RxG8fTLDncEDfWEEvg9RTwEyPo9ifAopEYD5",
  "key43": "2ePYFpnJA6es4TuqtTrQTjeXkqx5J73WFtcFQQ4aWnatx7qNRS5mNYQBoWAL8pqQkqT3hfqwzuP6ijSsFq7LjE42",
  "key44": "54mbvJuUCaZLFxARJSJs2EdhG615c2MmUevwVAHnGrfq8TCAfRFQesqavpsGoTZh6Fu2h8gqBEj4GB6zWHzTjnWS"
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
