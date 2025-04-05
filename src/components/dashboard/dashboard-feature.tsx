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
    "2yxp2mBFK9iM9TTcmJmD7fGidLaJqMqh9BmswPoGUPqpwLu1AYzusAxX1ZkqqLXCiJ6a1PqC12xauZDNpUkh1n84"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66sJVw7sdNuPVG6um5g14nsztriq5K3adyqhSPDMkny2kseVA6kNN49cLbGqJEbfS45J8vtn1mD1Xx3NGENSczHU",
  "key1": "2PL4oxGHWd6nhy27PMy19o2HSi72ieUBT58W5NRnaJ2YnqztBKCvDZLyr61EVXScqKXqRyPsPjXni2d8pw9KkQ8u",
  "key2": "5WbnjvE9PJwyEeR4NYyN78jFKD1JaZF9fSY6vGezBMsBZiFUWFK63bm6mrY5hv9vYJEspbkBQaC5CLBGkL8otRzv",
  "key3": "5njCQTfTnSo5ZvhV55mkrJDnh3rj8zS8G3FFaskJS54Bs9Law2hBWPTGgQARLC6CcpANJ92d89AKKuYXfFcGPyJw",
  "key4": "5LcJ37erNZzx5utPkBs8hCjCpQoW1GmoY4U3NdLYg5z53hH58HJg9hjByvVw8osRLPuSpAT18RZRTStSeN3c29mp",
  "key5": "4XHPW3NPhx9rRZ6aQqHyvpYAVUz9fc21RQ2j8wmAxTaxHLCSuJyZc8Co4pCLdgaqVi35CTavNfv5fp4VDcjLCkGw",
  "key6": "2siUWoMYv4G7M74VswvRemHZphUWQDHBHjxNHGBiUH6cqv4SPjB8aEGfoDMg9x6UkkCLbDzqoGSSYkN2LJETV2Re",
  "key7": "zp1bLntYZTZij5wu7aE78NtxVSUgihtBQ6ePVMenG68tMNSh27aZWHnhiE68L74oC81yjGJAdjrcAXPtEpbAM1G",
  "key8": "3RWXhX9Nb1kYF9KquQWLxzWb1uX6zvQBzy6nCjkM3Q4cBwTRUUrKJBALSHvge4qBAJtZgqWPcuFdnWAN1PU2M2PU",
  "key9": "4oNj5uBUg4Xpv7jSDBtazXb9bCU9VrdSky6gWg6MyKEu3VAMMYdERzaVXe8uMnuTHhzAxDzbqxGK4BWsWkU2hZsW",
  "key10": "3VnLHXvGJMbsxNHUCSgTqQLmojKh4q5Npz8JZ5xwGP1Qun1rJLBFEJcBfCCC1yMmWwNG7pSP5etkHLqx26xVjFCt",
  "key11": "5VLLmZmkVNWtvKzAcyGcRChrYPzRQ9BD1h15rMdvSbs1WpLNKyUB1FE6U2uWB8PGKnzr8i8ibn2sbdJGiCKzU4hr",
  "key12": "2GDf9McJhfnh2czmiDf3cb3eZWzYmsuSq7D3DCk4jfvK7ugPFxirvE1e8FrYTmdkBsEEGBJNfmh6ycEiwrPoj7E",
  "key13": "3f5bsoZXJvxLxsMAKy59mMRRA12RBNBJapehED3bMa2unJTxjyPUDnGvtafyhLiz3Jo9pxCDoV5KYjw6KtmodcfU",
  "key14": "32pKpc7iAgFjLP9QUKsxr79t1CaKhsPTXau5MTDZ9ebr9h1Xo2gsHf4ePyCnr9ft4ivth2Wyis3YxaLM4vNsA2mE",
  "key15": "5umqAcvxZhUTHpkwnWweL5vhv9EyrgYbE5y5M6UEq6vuosi2X67zmcGcxNQ5jjSGThGKqgJP92JCkmjnyXpVJjSm",
  "key16": "2zPMEo9UcUDRGcwqHpVnsxxQZu7xQMyJjFwTnGfTtGqpGfKGdPCbeUMt1N7cWZTa8vMNatUVtpgfst3zuk86PbNf",
  "key17": "3nhoVqGCMARUPYFoMbdgLJpaSxWV6UEWqA9MdauaifQatqN13gdhzngr2BVUovg5vGzmJTgWjtKEZQQaNtZmHcdN",
  "key18": "34RL3GbpYhs3ERps2didFpLQss1UTxzSeQGufXRE6U6AzR7QJFt27nzB8T3aAN36MsF5z6DcH8GTJXmcM4SvQLYU",
  "key19": "2k3HoxfzREBJRzFZeoja2dix8qXJhkuq21JKPfwjsn6MSFuDbPo8mQKmFo2djhgGrYJhDos6pc4x1h9tp8cbxzPu",
  "key20": "58XB4fs5qiPBabsHzQbvKj96wg2nWQoAKSBG6HCd9my5MNRg6QopwgSWkSwk1Q59y2haLkxqzSgF7ZiuwLJMrtEG",
  "key21": "5vxAqgn1ZaNRPdy5HjjjzHrgwh8HuqT1fwco5fZNcWEAYRQ2TH2pJiSJaBm32gVvN23WX6S25dqxBuSxfwH5CtmA",
  "key22": "tTqXkqdfwSFexJVzRACGyrcpuNgz1P5s6MhZE6vTJSzETYwAn7R9dg66p4ZLUnT97zkDpbcCGKDGc1WG7DSLR7B",
  "key23": "5G7RXw7F2smB64HNrLnNjxoMPsTvvFxDAdPqGz4Be1rhV96AkgoShuTbkBCrLN74vRMMdsiycX63QvwShV6Zf6PS",
  "key24": "5CeQfVXzLYXuThGHKaXLvrCGz9FznuD1WdDWCFFaLoxXezeE7cV47BFULehzMovL3rePyAyrW4NjbzX2BnYpTRZQ",
  "key25": "4Fa9T8VRN3HjFb53Ts6wpxT3PeowfecA8c7hVC9wgPW6YycrNfdc4ouYrEWUox2x48kYEARw7WtvmCPLamQxK6fJ",
  "key26": "5KrwYJ6sZQHe9zhkmYXp6Yff65xb3dDzQ5CTGmwEUnjPrK12JuQQKqnQkRbviK3rjq9DNAj5q3iWz37e8qAxigjz",
  "key27": "4RMrqkNx5DyKfVM4cNEuzFXjM2x56Lx2yAoyrXF8JQft8egzsatBDqYzKyC9LW2bVLYEDVfYWUjRvGPgg436StH5",
  "key28": "2MqxuU7oTTR4EHrXoH3rao4TjU4vvzfoHiQHMgZ3W5Ayag4XnbSwUfwpgfhZYfQzxzDC34RDvy1WhA2X8esA59Ne",
  "key29": "543F5h7fWAjo4dgKAEH2AxKjGiiFYS8P8w77DYwxkVXgWXof9hVT9X4Umbf78UhgpRkGCNHGZGd67g4KWeDYdP1h",
  "key30": "3c898ys1M14a4NEKCCcfh6zpCXUtkQYpfYNnfDSgxfcNctE81ZSt1CJJzZw88xVBDegkENAF23sf3LtxWGayYnRA",
  "key31": "JHpvwA49t2CnuBpDA5icJUbchzk9CiC567E8x7aS26wXF8QHXwxrAGCA69f8JaPfdgYdrpnqALT4vujAJBGDVBv",
  "key32": "3MrAs1XjrL7f8FrtSe7cJUqvYMoyaNrEfB1maqZMJmmL4AYrdwjELGhYXHeMUt12JQfKbEwYVGP4NLzuLE8QTnsQ",
  "key33": "4TKYAFiz1KZBpLFyJFUKPqMTX7hQotgzHBzWHwYG1w7rvDh7yrWtv95eDSUuK89EKsB7wyGq7FLN2rdBoXqBzFJG",
  "key34": "5JH8vy6FeG6LEAiCrE15cmx4W5sfCsuCskVkcoLjRCB3eGTtVTLkD52gbKhrVQCbDNTxvVbXuenP8EGDcywWRUuu",
  "key35": "FBGNwSXtMEUeadam9GxCETeBScULfsxmvVySLjUe89YPgd8jWcDSGk2ZhijPyHtv3DE9qUdQKMy1GBFaDbrxwWc",
  "key36": "dkwmuqpggRG2Y8HRLrxK5okE8vfhzpqa18LreuTiTN1UrSaQs8VEiyh2SfBA7Ar4XpSGjeF5MNT1arW14ZkYcte",
  "key37": "nvQPJbFwz4dmq1G2rQENA3NwURcXQrmmZJ5zyFRwvQiT4YDjn1kEyapWVzhQUX5pqKpcgptdwksgTRgVrQwwVsh",
  "key38": "SGwbyXLbAqMUweQ3F2oFzUTPBdzUhpxVkgCt5X9RhYc7BxqqTzUgxEzrP2fU6YB2QwQT3TsJ9uynN29u7R9g9xP",
  "key39": "2MV2bSE8J9JKVTqi3jKcNvsTAw2AmwnWrCJixz5uHK4nMMjV7GS31YTef9YQsDo5s7debauAQkngvvkyXjNdsi6K",
  "key40": "3yvgfdoGhhnYno83b9zwHDEzbDAZqSEDNYi7pZB9T3k9q6zEzp68oJ6TdWRdAsk6pwwhmTMUs8ZLDP2xHZnKVmGK",
  "key41": "2HmEUD9oNfryXimDYbD4BFjAq8cyNatJZsoiMioQ36yPc1u75TwX5meizEKTdJZaGaLCV1yMFHdDnAooySKMmGvR",
  "key42": "5kHTS8nNCgeAWaEwYLYWjVJJHbKhyxGjMwNZJgUHnCLjAmWfiYKXpb6ybgEfgcYQaZBuQmXRf7dq77PkB2aTvwa2",
  "key43": "4DuVa41cQUpb26168wBY6t3rVk5hMp3CNAzShXNT2Z52uraKbCvJV2qJWKhvfDtsiEFavhJnkZsyYjGbeHVN3DLG",
  "key44": "3fhbQ7DpeK4RbsPe5zDdqB23mr1GayJ8Xkn9C24BnefNtZ64Z8voayBkKA3XS4PCeLW3D6BxjTWL34sWtxff46TU",
  "key45": "2fYcYY9ccyuKJqSy65DMMhTAAL7cEh7Cokczo8mE1LV2ShrjzmarHgSbbgpWKW4ZWeHwnLPyiLcCSe6dTqsARsP2"
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
