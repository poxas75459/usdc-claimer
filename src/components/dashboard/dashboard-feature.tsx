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
    "3SdBNYdVtk35QENcJeeBCYqfdCmxnUsRgLELwvSrbFbaJAQCbYrRXsQYhR3PxsFMYtcdB8qSFT8TQRTm6NNz3XH6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qzcybbVakou78C8Et7JYhHtu8zWXQa2JSyg8wQ7G6o4t8QLVU71pcFxAQBKtQdCPuUF7h453wwWczXR2VirCYqu",
  "key1": "bU28mtUVRnJ4yV8nGvWweJuMBFZV7xq8sP8TwTnHMpnnn22YthSAR1BtJkwpryZvtCWnDZ2auSw7PaQQa1wChgm",
  "key2": "57zici6iD6cbaQ9WGFSny6BdzqrZ4grjAsH2bZRo3orHmLDUdef8TAFaTmaXYxUrTvTXPVqAhQjS9XR9VHxoCuZq",
  "key3": "2oazbJ3QubvpEiLcqHWES2wfSUvniQQKyrizhtWcJKwtRiYDaEU1Rttvn6snM69B98p8JSyWPtACXsjgbUxYXdY",
  "key4": "4cMHshkCkzu1hRuY7nfQmQJf7yQrBM5HbMXD4rYAaWg7wPrSrw66H6AXxKt2CtTdUn3h6bMt4wJb5nTimKE97xU1",
  "key5": "2s6QveKjAAmFRdn7ojg7fLQzZV8i8Mmh5drh55U3UvuF5SdrkHhSje5hbseBKSKjcN187td8tQqbC7ye6rA29Wif",
  "key6": "R8ddR9Ugxqyxxb17Y3wgAJ3kHqNu1hrKJ1x6QkJZzSjku7iaHXavqbm4ezo4VYNvvhWcXVEd1gMfHPvJoRJ2oNQ",
  "key7": "kDyFdrKvXVx1Tz68qb6r44xz8cmGj1srgrZXKEpCcjEVPR4EyUHfCEU9xQGkijHwKuS1m7cEcsttFbgoE1SdANR",
  "key8": "VSAWvE7DpqniimvyVz8TxgnAYLxn2RiaM6EvVX7sXLjRUBUbdhqz4ZXanpgsnzpJpwCkrPfAmS77oEyrE3L8rrT",
  "key9": "4Frxpphtu2g9mdXEttXHgG4Q57yf34iE7UgV9SYc8g38qiwVirFAoUYLEMEL7mgkT8pjJtD1HynRFxMsDyTrwaP6",
  "key10": "4WEEg3qdh62prozMK78Mjt17KCpS2EpBgN59vp9X9A4rjhwpzaTRJcwm1QHPoDcQBBGcj15sRaA6qm1NGQ1qr73D",
  "key11": "XRkzaf1j9BVb7CyvLXZcg7xtJZLWCRTyYrJpZE5gAckVZHfaSpLnSkcFrRFDaXWPtE2MQJskyhHwgv697LQGfGb",
  "key12": "22KrtF5GzchZp8BpAe7Zof1UY7b3MoewMyxiWt1aM5vTXyp7NqRsMhgXtAH5mtTqzGUMiwQpseM3HBYNoGJWfyvE",
  "key13": "6rsKFeporUapkH25MiDofjVFXkmQ6zyeCr1ySsN3VkjzLHrdBfMymvnF6UCMduECjqwZfdmkSHEUuMk7gvg7pNK",
  "key14": "uTusPdbg2wkhxHmz1Y3cFsCDqMYhiGxm5WhLvx3mmEaLnbsnVj65x5vm4CQ85penERNeiXYP8JcpK7vFkbFwEyf",
  "key15": "5FTzR1ieTuzGEQww3FPt7mJuSccG8mbxvRwQPEDE6hJs2HBcaR82A2FAcCffSqwWQ6Q5hfDJswxxVNehDxazgbDq",
  "key16": "3CssmboqJAzywky7JB6xWGu2fz6AR9rMWbf5AFXUFSuFUZFDkHYPNkbYPLcFbZJB1JJsybx1c4uKapL79r9FpHpV",
  "key17": "XTVwnph6qbgkWiXvk98NK6BrqK9N9tB7JKhPhHkCVX6QmTuwNAcPTyzN4njKqrWpcMoXyhAat52wgKQRtxY2EFb",
  "key18": "4MZ1Fs42ANi1KA4vieuavgMQ1UDzhq4hpbQuoAioWs8V2iLB7tAqFh8RQHwZjn6iis19z14hHn4f9wunCkxMBn43",
  "key19": "4d4pPhXuofJvCsb3F85dqr4YXwWckLqjBVKJzeoT5PsWW5yoYpWZRofKTDoZGamPHuXGFb1XfmhV7eqpahByP1zd",
  "key20": "4QgqpFVjLP9hJg1Fmu9ZUjes8KWonjnQv2SiRGaDn5VwcxCTLB9a83nZSKLg2aWTC2BgarT5AfuKUfYAeoEwsbbm",
  "key21": "5kXSdtmMaBd7z9KKNZrsvSCuX9jX1dHFDwZe2erMVmx38m5jeJcv6vJ4ic2VSa7HUE8t6wnG3wGB4MzdnVzUCRZe",
  "key22": "4x3Heijgs5Ns5oTy1oouXRJr6Kejfb2RVtLTpn4gsGC2KCVX98Gz76mjMgBxUooSyQYHaeZ2RmSkfgR2jMb7599t",
  "key23": "Qhe8bJ1HpGx2v6PdyyxAxbnrDA4nmrwgbshM4nGk5TmKRzAS4stk6FF4DmYYNFRhvsQYXt9cZSyDqGYpmk6QKVr",
  "key24": "2NzUHdogR1Erj6EDsSt3u641J4MirwLmLKxfkHehDxjtM5hoVaTQ54ctFUsgR9L4BZ9Krzd5Er5tcE3AzkZaHto6",
  "key25": "3bnuvNF33SGrS1aEedXRveu5h4YfCWyvtZsBWfACmXNcFHWsi38SVES48LRfnUSXxmMMYJzKXR788cRk1xzroURq",
  "key26": "5GjoKJ633stBZukfpAPjaajnjNncCd6kdhJSC2GsbA7kPFWiqFwDgjEPeBBmy4VpP64RhftTchpkRGHzYdbLjke7",
  "key27": "4HXYvJp2t3EPbUPggV9HexphwkX1kD48iJxRbkibr9AHG9pEGxGhe52HLXdWMYgoXmaUggQv5Cmm4KZHo21B2vFD",
  "key28": "5a6w5CxZm1diBv4TKmWtEDRVcbuHRm65YqTh3TnMQLhwcEEZsYo5BEynhqQwvFoGF6UL6kuU21CesbwK9P4qenyL",
  "key29": "3XxF1d1VTzd1kqXT3TE3FkFAR1bNWuLM1WDVvs4Ni5rh6ZMTtP56bLahCdxf7LE1f7qK5HBbTcjUUzzdNnpuuMhH",
  "key30": "4d2QSaDAoqNt79KjScqHuzNkbPukzPrvD9ocBZRSj8kHz5VYL4ZGN5gYUq13uJ2hazUgaKyPTUEPbkT3X4MhDpAL",
  "key31": "2Pwyx6UJF6HzruCxBo62NpXt37vsNMh7LX37ZBy288iEBy5qMwT3tjP35rSvnRAJNh5rAeb16ZLwUxwHCQfuMgoA",
  "key32": "4Jd44iqVkzcaVgdvK8pwD2Po76fEfBiCZ8XAnKnRS8xzQZjJMUp6g9Td48VacBWzGuWKiwwR6n2JMvNpfNguZebP",
  "key33": "5jrhV32eeVYzv6cDJJnmUtNy9GLwWau4YHtxjLTwgy1wEDefNxbDzb9cEf6ELsnUMZ8kar2ePjTG6dr4aEJq5u9M",
  "key34": "23mnwLmfsJWDyqtX6WiKz6uhjox41gb6kyJ3rqJhC1Muj6p4oLz5CnojFof98rz8SDqiihaEntu11FDpMWZUqJbX",
  "key35": "34noEKrGgztNS5DYSSBhTZh972aWZnvA9h16cfVoDkiAgcJDqQdjNhX9Cs8uuAZMUsVySQWcfY6EvJUPTU7c9rrJ",
  "key36": "2LCisKW1z5xAkUAi1sFXz1KRb4spRbA8VFxMk3xzvWNEQ79BMABXsKHFNDc5EPrxa2JFnv83aciSAi3uYxzF1FWP",
  "key37": "55DoccXouKKcQvj92vhS9AKy8kCSsfitx4c9W5ybQY81RwiqHmi2ttaaDBGcaT5WNtENw5QJdHw16jtivQH7TCTf",
  "key38": "5GFWSAfkZUvBx7z7Nyv8UPtdPcjdJwDgtwXFvmW4GGs26hsE5wYs5zdPDexnhCt67pTuVae4ArAUTCd1RnqZv5bt",
  "key39": "54aoowgwzJ3H92Z57gpbgDM6DMSixck38WEqCLrhVRet8BNhmX4XKgPvHw8HjC2MwefKxCvV82TdmyFL5vCFWinD",
  "key40": "3DuXovFr1X2Tp9txDhHvDUCAsSyZGjhmF9iMU3P4kBdWTNGjQtYGXenHiWBibuH23aTSeujajzWHiL5YVoWcgWek",
  "key41": "URRBTR3iKR9oH4ERJVM8eKD5UqeWnChqsw2YbM2nCP5BHWpHnWx2zxU7ajn7JK2vguWW44XWH1q2yuFpV4sYdPt",
  "key42": "32N2PDg5D4K6djYE5FLKXJXUj2obPmmEhGxLQ9yFMhSKmeXun5V4cjEjpTARaPKXMkAevESS4tYh9eYM6gXHLGdA",
  "key43": "2HV8mYnSLhcqTMnWNeCx6dJt55y6sRwSMVvNn3CMshFkXTCgZm6XKLKwnGvuxaeLEi48g3pMQezGHJCajFfWULz1"
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
