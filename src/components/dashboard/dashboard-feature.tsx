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
    "dyEmZ7Jj7y7sYYbE1b21GfmqnwFKW5xSgBKBoVkzU7vkvxfAJNtw97QzsEGDpXucx8Kh61Qinoz3vZZANJnZ3d9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H4ytKR8KN5HQfHnJdD41aA4M4hTbjNYP3T4qshFoLEFBRGoCToteabPBeHkb14gL8LttMCE1vK9EmW2VefAMT5c",
  "key1": "dP8crQ4Xevsa43oqSq8kM5vtVGANBkahBVFjTmz5hMkr16ePvHpLqShGEPDhUmxgX7eyZTsC66ovB7bmZ6zz1oL",
  "key2": "4tTj38FFY1cSerJ2Sy1M5XHMe9M4ca1onR1k94TRCpGUhUpPKXb8mNQ14hvdp2tkjjg1DKLa5KExdAFijYWJNPEi",
  "key3": "3Zb3sEjeVoA6gzqNd2yWKZsv3bV1rKs7pvQcTh1mEaDSZuh9LAjYreMqkhi6RJW7QcqQNXdzQbVhFY6YGPiN9J3r",
  "key4": "4wQzq46MrMukJPXWY3U1fkqa63wgKxoD39T8TzTtU2DinnmniFkGkJgVGjCC3tSZHGJEmVQpPqqxzzcPzHK2QD6J",
  "key5": "TLYoygZ718ktptQGiDAt7Wmt5G36EHFoyWbprcoVBYPNNf5Yaf147dLFurLRvPQjPZapiLAzCwoGhFLFD2jHc5A",
  "key6": "562tdXFewJ6AVMdRheD1C9T3f7Q1EXXhZtNHJj37gGtQUHoKPskGJ79QDkaX8nSNKQagUf4qegPs5VihwvDUsTxF",
  "key7": "2gPiFwcNmuka6iEJpYKvRkUDupgND18TtcvXcRZ89Y1MYS4jPA9svTNJXtvkMPMrWVwvyp6PwwuK8jaxo5dAFSJx",
  "key8": "3SVM4Cz84PBmCLpt6KaNrCuX64PEDG8X7YpWn6bEeQMbw7i5BmYvqeFbZp8zkT61uqVoaR1weHxkgL6aFNGdvFei",
  "key9": "47LkudqTEZpCQtJmmt7bJ9m6Zs24bnXDjnbca6oUDnAGeTCFwZQntJQSHgjgXBVy51pDC28H7cWkUE1JNsSstjBD",
  "key10": "3aR82pF7C4N28FumabkGbiiNvekWt24KrrUSjt9GL5GDzBBTL9xh32VVmrqYMAcpUdbkhazf3i1FFPtXgXyPFzQm",
  "key11": "5hQ5YYTmXJuXJZAq2dm7tTkWbaKai4DZ8FXHML8jSt7ry4RVzGznEadBPPNm1hU8iSw7M5xjdw9SR3MyEeffKK67",
  "key12": "2XKAFEAm7YcBUgiuJ1Kav3CLt2BnykNcEsZGbbFNQkFrKZnLGCNByJ5eAnGPQxYQUrTdE8hjvXV4pMY2erb6VZx4",
  "key13": "hYCPY5xuF6uGNZWg8kGUZUnJuapKF9HNU4d4e7E3YnytDEDov5nDFNyYKVdR8GPxej7jZj4ZswnamKdP1u3BPX9",
  "key14": "5XxMhwpXVFHu3hcnsmLqtNmiXnDA8WwFJeNiZFmae82TWgFLkX6Z8cdhfqyR1bwxxRr2yXAsjBd4eqQMoG6cHyoM",
  "key15": "5M3BTsWHSFjDtcmcgVaxhMPmjHQbE4V5zpR4BRgH9NKnhPiFwYS7kNrvU2RugcP8dZdCFxbX2EPi2MVy6GHF5noY",
  "key16": "5WfPDLVdj8s8MjZLHBpSdbD8bdtx2PNchpKZSRR9WQvqfqirqGPjGywpdhyG7kMLASXjTruSeVj9KqGXwtpbW5F3",
  "key17": "46JLiC2ZTgfaTKFaJubQ6w9ysqNcEPk6e9fvsz9EMXvJ2ifDuPYyNFykuzMYcqxkvtxzvagHpvxa7GfSgo2MXA4Q",
  "key18": "3TRRsceJ7Ybyb3euWhpJbeEQ2RJf1MeYUA59GRWbZGr2exTyrLN1G673rzFnhugiB6cEKCPGqRMsLBWtLFXVsoWm",
  "key19": "49AbSbxG1mi67nSgiBW7tMAY2qZtHVa39suDbMKMCCK9qDRoSDSh72UYvdEu9kcwT6BTUFMw9efYMxik9gjKPhxM",
  "key20": "3CGEmDUDtPPSNZCzMFA6EXsRwJTzzBoadRfcbkAoopSTAhSKBxDJmrYTvoXaNjumBAkmpYSBMJ7kHwmpXg6StfvV",
  "key21": "3hXQaRo9omP6sufBbvgLkp6jChnXeWa8mYwRgdEwf3fA1oXB1Vvwxsy1XeEP95Wb9oaFD42sgfpTMaLvg3NPbScq",
  "key22": "4611VXKet2nSZ17ar8XgcBjNBW7FbSSXL7eEyU3iFmSrMz2Fx4CGrYZdydn5wG6T5o9LEE9kSYMh4JVqhHUrEAXe",
  "key23": "4U19i6s4VwBqpjZDVqZoYzw7coCy6EfEyJqUqLb7ma7tgVk3Tm6xxjx2HDCFwvWneQ3VkwNTwPaCtjsCDCgpXaq8",
  "key24": "37haFsxuUw2N2yJctaq8zRgRW6LDMaNK4Y6iVSqxuZUtX2m6BLCY99PPUHh8YDLJqNC94ghLyXkPZSQGN4sMBKje",
  "key25": "5RkXkYPWz7qPMuNpiqXAFButmz7kqMmqLMfQFt9cYywUM1zKKvawjYC3ZFybNMAQPv9JbMyGuFs84gPd3HMAnPsA",
  "key26": "63GqfsRhCbmitm2E2knRNG2s43m3boPYkbcd1fA9MxK4VSKuYSVpNeeKQB5HNfCKNgJHmirami4N3Jxb5fV9aQQh",
  "key27": "29QxSevDKBcT4fuSLQpzH9tAGRH1QTQH34w1gw6qdCdUp1iDkmUSE2VCzw3FTXWoya6imkUGXgh2GaCQqapaGkKU",
  "key28": "25LEaPpjNFxNG662N3qugLTHxc8nyigsi74FS9zfctpr3go66SsQ92APzPyKHXyy2kkXZUxhUsx1rxRfrcuDCDNK",
  "key29": "2t1FzprN79dFaNWzoxFokday9cqG9fECk74aKa2B511Jkt5dh58FLQpULWXy8phL6hHY7bvr325xe6uhRokFc6sD",
  "key30": "WzoQC3uWNnVC6eduVDTjB4LSzA1uA8BD9BQoxEhFf3gVx2edc66wcg1wGU93B9vAa3AYXu7WG2ADayKhuS84yQ1",
  "key31": "2XFyJ7EFzUdJtv6HVwfCKh6vdGM9npECDSd892JqXucLEitkDGMZRybhpDD8EXQE2suxV9CW5goiG67qdVvTXTqH",
  "key32": "5W1bh8yYgLHVfumNjTvqkSYhm4u1EqCGYYbiWurSqbBeWboQ5cTPGb9thoqUBLmJSsMGzjNj73ijpd8kusoemcfc",
  "key33": "27tdBk7pRRokPT4GVDHTFKTAMKk3FrtyYqrwwNkBM6EcRSjEjMpRgkrBMGJwBJdbF5RiSyM3Kqd5ahqX4QGSb7YM",
  "key34": "4rThtPpXbUF8sNLrwVcYxbsZ2dhtXPDLYxKuZH7MNpCBhvZ8uwExaD4UAdyuLiaq1ZWuZJXPqkqLU6NRcXhKu7Mw",
  "key35": "4nzXb46pvwRrmXkRKtFpTiWQ5tNPzyqiDKbbW4TtJZe4jALezKAAGsfrT4FXc5iQVZxVkv5KhDnk9gRScc4iVJpr",
  "key36": "42aEQpJvXfms6vfSRWqxhNzqAFXpMDkWzsExfrDqCMqn5vQkNdtjdWEk5ApvAEy1J4fYqDsuzZK8ywV2jY2Y29vq",
  "key37": "1eyPK9s8rbkBqTZ1a3uTuNEocAgXswPV3efs7anW3JU5N2vrYDBtoQWeD4JoULXtp3PV4wEFbGE5YuYLuspJKpY",
  "key38": "5cvcKvc69GBTeDqizErpBoUwH9WnToRnmZscxfajstaCTKpZNCwx5hqZqyx7QABmGLn5yNj4paEgEqCQ4EYNsHYU",
  "key39": "3K9uWcvNgXZNUrbXCeDUrCtD3hySB8hJviykSXR6VwpcJDm6vDBPXf6mqPEdbbv2ZAQioo2yo8UczxS4jZEeufnt",
  "key40": "24HAQh7krk2X4obqBVUqpUmw574GPoe1JwDLJzuWpYQtFHoZyX9JuNyxQv6DvCkLQHQi4c11TTLh6vaNtjPaHEKG",
  "key41": "21aGAb4p2MWqH6VAm7McUznmb6EGouMDiVSNddvRwaHuzi1neE39fJZ8AttbtkqVJcS2N9t8ubSis5tcLd2oYBXm",
  "key42": "3QPosxWZi4NxS38pjuGCAr5LYooUUGiKTpYLVVoZGC766dbHNWLGqi8Q5JzWq4atjAb6Ce6WH1RDgw8PsForWczu",
  "key43": "52fB2SP1TRRSPqYg4vUFJYFqt3bzuA9L14qwDo2AtgA1QRGicjVsVDAPRqESSSwFgsYYDVEb3FafGfZRFRrgUrN5",
  "key44": "63dZXVYNUHhi5Lm69FARKTobKCYCwLjSqazk4UTBtsSerQ3wqHdmnuZjaZnmYJjGyFxWFwBbKSj18e7LnXMor1P7",
  "key45": "3FPfPFEvARo44meqTFK5jDAGY7M3wopuzAHaTzvzgCFwseAbZGGGbHvwfAUKzkYVqCe2qZ2P5YH9GAErYBgqJZ6o",
  "key46": "4qG7yzy7V3VJQxtoYNRsL7S3ZAe88joy5CDKwZhYS5bxgUP63F3xoaUEf7xcKV4PgQwYX2dGJMeFBgv7nKrzxXdp",
  "key47": "4SePyQSR2b3MDa6gN3cZcirQbNGhfj8TE27jGTTZTwARrbsuubJKDxZNenvZR9EBGetp868UKCAJfJKkg7BsTuja"
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
