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
    "4e3mgdtqYRMNrY26XTwA7nq7dgqhUVTxdXjpJJAaPsYz9JgQ6bVdS3bf7sHKsL8rafVKTkDhwxruuaN7LzWrc5NZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F8fsAD7wUYQb8a17rPqQrq7he39SCboWgQ7nuiggkyVpmUP1RzhmfnczMCWjDiXScZDA2z2JFd863uZUstDJE2J",
  "key1": "5RMK9bKgYpHawjza3jCvnbuWTmQP8AnuHNwHD8Tagr7683gCCphJdv2ZHeV25hp9NzLtZjin7LWtsVvJJjtNscb7",
  "key2": "2aut7j5bSypF9pNSHEk3ENeAJGfRzQfA7XKbzdHzH2j6rgj2X71CyAQN9UYQbEX21aFcfVsfrQRDrPu71kgW7ZRK",
  "key3": "2PwYS9HasWvYSm3ztC47heVDuvoFWE19fVvmccWXwz6SSyXP5cLPwwZdcAwzLx9Rb2MkcxJ2QiYbNprifXYTqjCb",
  "key4": "2EmvtSWB94xboKThXE9xR6UEHuJsRhjgxzi6itFuy4cApoRyysivygcknzHq7dBeX1ooiFAr91aZTCHJtUEPaNXn",
  "key5": "2At6rC4Qi6aKukadg4bMB5fDb3FV6hqDbChF3v2Vt3EUvzT8kBHA5pCMXQ9hbvwbPn6J2nVBfJ9xGSbYKjscT6Jz",
  "key6": "2UpQ4JU7Zjd9r4zmN2iZRzPNVyeoamJEocEdNss1wyYrraGywgen3GcYTtKxwGrh7Qg88CZ5cAqk4Y9rMQewkTuR",
  "key7": "5A5JBQhPwJj94wfQiLXXRiiqdtod5QMTuLxzwHG1JrsvEDTtNEoJn2FMp7ptWRxzPKGCUAo31yMyS7YaeRfEYzaV",
  "key8": "pfP6ixQaVPaADSLeZSEMHmZFDNeYmaVvQzQERTvmkXWka3D5pHEweuL8bXcuRgb3zEcPRf3wqR4Z2asxLLzJSBP",
  "key9": "5rJN1fv2KPTTiM225oGf2aKXEnDobDz8sonQ3TmGiPRBFEYJn9k45u4P6GZdySJ113NRTS5sttgUBgsjJQS6Bduf",
  "key10": "4K5PXXbPdfmP6cDJjaFn2PBpvM4Qe6X9RWhcE66nAUPegbFaXsb2N9nFNEsfabADJ7zXzAReuoWiG6d3VBLfnxHa",
  "key11": "45Fx6CJdmkgAkAUgAkTUgUHzMUuAKufk16LadVDerWwWK6GaxMYCB29qRaQSv2F31FuKfkgeVSqa9yyUQ2X4KhPh",
  "key12": "3ywoWvECogw9iBD1eYgDo76NV3923RFvobU6DXx57fGsV98bdE8CrphPeBbRgR5eGaaoF3wRfCdtS8FPWZQe2KYi",
  "key13": "5aew5qcgH5wkf6c6oSsfbDidBfFVXUhwoAbrsRQye1F7RmwcNeqQZuFXGmRUGKpSKiG2KRTVWD3hkz1Y4AGb8q7r",
  "key14": "dJt7gtV1r9UNvp9VJ6uDZMoNA6knrnuUF7mYj8KUC71u7nq8USGWnm1MmhHzFYHqLvW1jdtpYWN7rgxX7QpYnvJ",
  "key15": "4AWDCRLy4fj4EnBSn5fMbPW1gjd2E7AbGkeD2Vwo9sqWg8VVRREieZHp8nrKdZCWrWZeajHVSnq3CwgZSoynThj5",
  "key16": "4qLWN7rkp5L4bJQanMjHaRZv61GMZgXDBARxcU9oFCMd2LvoYhDW5KRY7GvFyhBpb3fj34sBDDc7rzkcdgg1xAWK",
  "key17": "VNrhs3CKXbntZWf4Gsaon4Bia38ocPVz64iLtnpPRbCM9puEJvveAN5jyGatbnhhyFW7HVBNPUFLbjtxp61ZksR",
  "key18": "5EdobwVEwaA9nKLfq5PgeWiTCaWGmDJefGoLRB5zc63gANmZBLrK5GLH6HkVwrVyswcbVizBYowYMEzKt9LhXHTi",
  "key19": "3WYHgydQfk1ZkDMenid26a14zo8XryL7YkjAQQBPgXoHMR6mjGUVkJX58nE2TnRTdGfVHeRgg9z9rpVsPG5o5iJx",
  "key20": "66CrNbZ13LjD4N839D9QgitJLagY6tG1mbd4BwEHDwnBUyR7Zce3BR5qfhukMBSxT6mt1ko9QXJt4XPyeggNRxAS",
  "key21": "4FoTLqsgvhs5pXvme3KG34TwhnJvNepCZgXbbufazWjk31USn3Tfgfr5BrDEcU216kCHKZJ3meGq6qLtGFWCkEi9",
  "key22": "4VmV9nvm5ynm8ZdiDradM7JGnXTdyxtrdjZyXmBtYrkdv93bKz7PHAAMk9PSG4CNMneoxBW8VJQRERNhd4R9e7KF",
  "key23": "4voLBobhiSrhi3HtxFn65xrjFrdF1YYgFQVHRDbPtk4PBgbRw3VWy9S5u5nvapvK1dXcEyjMDnTJwd4R9FGdKxBt",
  "key24": "5y3cuWkFU9AYYxsPVzGMsetTfJvrjPSR71ppsyA7xu6RMsnqvtCved6ws2jXEHgjZ2FmqEEuah8ByQkQmoz9ixr",
  "key25": "2Evbamjc3jzMoizCwGHWfc69pKgoJM5YN1mxiga9vLQfbauYD7kdM9epvyJPXqqVK7oSncNzKaTKJwxxLEYBd1nv",
  "key26": "4fy31eYPC6aEY2etP4hE7443dBmsYUZqwnSuDnpQAbTTfxo8awdNYXWp9TravFWfWxiGhytAsN9A9bpYWuQyqqh1",
  "key27": "3Y5ec4G1MAzvkZzXcQty5Q3WsmUHqyHxKiXzoNXe2Hhs3zHzYKcBydiymvP7bN1onEwryiXvSTamqPagwpazKa7x",
  "key28": "2shx9yJnJyU3qNscXaSbh6MvUnQfdZEP182cfTddwq2mLVWREqNX5wpGwsaSYQFccfnz4PVA26ME1Mi5n4Hnaehg",
  "key29": "NHr1BYhgp3D3a5RMr1eDzfztKgkPEQGim46qejceG3kfmAvfBqo2AV5ShBhS9J3b2HyFDDMHfXmAXAsW6VdcRoP",
  "key30": "3ahq4ToZxaRtfzPEkDLBFQ5u28xAUuVqmpNZrj2u4oG3ec2yenbg4wfxXbXv3Z3tgRbSNb7PZ2a9GW27M5dmc5uH",
  "key31": "3wvBgHAwCtHzwdjSNUbZ54RbrjNLGf1K87by5V9qiR9pJhm4EaUtrkebFeSnUsDvLF5NEMxGjyPf4qYXmnMDsAMT",
  "key32": "5w5A6FgbwxLriQKk8eQ5DhNqBxvaWyfWkNoMpi3WFiP6HoaxyrD6TPab7o5JchsVsLdXH1uduTVNJmABW7dqxJVq",
  "key33": "5BaKHBPxAASA5hvsU92BewVS9naUjXuP2pNcroUWBecCRrAuizTKYhAkqwitQE1PMxsKZvvcehmk84H6efrmuzcF",
  "key34": "59PPbKkUWPxpS8jp7kPCZkcQmKYxEqV8WJB1ByTPvhi7scK6P7G8RWBLYxT9GndCrBHG6vF3Gf4g6EdHF9s7kjVC",
  "key35": "4goagDsW6vPDhrt9XEzEk4CmsRMqzKgdk5SmCPoJFmja6bAPps4G3kibDNtSb4juHe6NAdCfX5y8RVFx6KCJzETf",
  "key36": "22geQiJeuz8LmbPf9K925SaeBqeehgaoBPkbB1kABBc8eo8JL6CkbH7y6dimuRvzvjpnQPzqgrs8QVZF2wEVmx54",
  "key37": "8jnb75JbMQujTrXdd38cSiNmJfbfjFkU2MRwhDZwAS4ihnSLu6RsRxkv18KdeuRUTvstF7dgyQ23BNNBEcW9YXJ",
  "key38": "2E12HHfthbSWkWCtt2E9amAZaU1pPX4UrnHRtzBrbZhiQ7aWMneTLZZ3DmYfpc5v3eRsuA6qZQ6nNxKJV9euqaak",
  "key39": "XT6XaD1e8v2zjzpmfaUF5D3x84G7QXJwjHF8VBDsBeudyFVkAuAJR1ydYfoS8UcbQ7iv196ttsiQr7MBxjSQxvP",
  "key40": "5v1Y6ZSnrTq7eZni97uz82bmUddeGS22fe9GqCxyyqs7xkDSYC7SqP7kAFZJqP1XLNwooUUVkGu4o6pxjHcEcTiq",
  "key41": "2MdN5hzQeBMMxWXCih83TYCtQxTSEduMoQbuCzuHhjmBLiPwdpEwRTep8sAdTVQkaiWFtwurz2h5sdHZD3fGgj6b",
  "key42": "2unbjEGEwdKRDMEcac11wfigtZNn469pRhyZqJw7hD8PZgSWMY7BKJ5Rmkwg5EpnZzZMr7NrqhmhK74kuRcZUyEx",
  "key43": "2wTcpRFw4HfdyNSXBGDhzrU4wNgpdt8SDXZ9u8tgs8mLyMtAeHAZWfukGQgnhtVhyQZgk3KdTNAJyLV6xuChj88A",
  "key44": "ipaLKf4t7aPtrWxU86GfwaqDZPgYcmG7mvM1KgfVQDnonznLvrUg4PBwdmF94ocNAZcs9qyt3H99aYq4CMuqwmq"
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
