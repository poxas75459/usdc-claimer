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
    "3fP8CYTqTKNaKekScDa1SGsQ1q2Km3b1k7D9LVeAQvWsUmnopB563UC7TkNeATFUEr6dPgd7MfnJdPHaUUprnroD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jBbL8KikUC83jCdtcRxocuJXJmifJgFV7hVsiExJiaC66DFSrR2KLNi8AnztTHznVjShqQQbiC48nxmZNJvVRrs",
  "key1": "3HV8UsFxVk2jdFq9KDFme275wqLXtvSfGqXDsFGYLxjZvFpL2LS7qfYKEowc5CxFZrfUMSV4wUw9VnEuUTXHnHoy",
  "key2": "sgJaUVpDBAYeHxgpi4Dxhi5hyyAbpJfNU9T7FC2sLTtAZwr2VoQRJrjK7uNJ1UMQApDx4LZYK27XGKgFyMZYdZT",
  "key3": "76qaj47ZQXDGgRTRJbqdGRpad8CJQgrRnQ3DemVQskaWJvoTkoR11W8B7wRtmLBHBir5uEbuqYM2PqZB96RrJCz",
  "key4": "5impcESk66QeHcBkvpA7NbqUAJCoxLUQbs9LAGDD2GHrggYKT9efPmg3ZHp2HzPpCYAeCptdYRTLbHAEFw1QkRTd",
  "key5": "5kkp8eKnjrHitWiwMNdeTRwEsSND8uMHmk6XZjovN2iJj6CnX6jTP91ezA2sEHuJX6ij6LdGxWnFsvjUUnzCdon3",
  "key6": "5WpF2ftGQwDCuDD1k542x2jnCU5xHv1Sb7tifbqyw9pVLk6LabRqBcdkEyZaRKvh6CDfbNV6NMmLmfG6P1kt9hY",
  "key7": "4SBpLctjQU9kfKruMQCU3yEg1RjHzQFcqdaQziF6syPr11DBfxriRAR67eJYTFqSqGtcypXcKZZzf5yaUprKZcBn",
  "key8": "2pradJKVyETp43BUJSTYfX5QiNYaPj1xtjwkjfh4wZenB7vRtnUzJvpb8shBjgefiCnzSzWBHsHfkvoxYm61rzM1",
  "key9": "D43qhXjdKJ3c94tSiixxoaJVhANYTPTvv67CG1yiCAUfwdhz5deZ3P36ae8EfBw4FZM4YjsttHC91V4K8echfKx",
  "key10": "5MwybTqCk4qcnysoZiYiwTtvQvGjJyhbUn7x6oma3ogmYJgcP931bpcxWvUNnHAszYSiEgKTPcQwdw4ZXdaiZt4Y",
  "key11": "3v6u5JijVozNNCPFdmtE6xegmrvTUVj42SeshJJ5gehxJ5cnGymq8RGAhtEstUhoyg9MT2FkKBa4a9WLvY5Gsmt9",
  "key12": "5y9NKb6pd7UtKhqGJMsA9VJbpodzpuTVfGFpz8KNxhes8V77LcfMLW64w71CD5PSYvBTtGQrCL9tafK3Euw7kBv1",
  "key13": "2LduEKFU47yPwc5efyjUQ6sUCq7K1Z6QvgDMzANHwZeof8ciSFyQNQdCEfn2KhZXAQMfR3LCDb6e514tLw4cEz5c",
  "key14": "3VQ9mkAXB1fSBzRU7v4WoaL6A4kSJnL1ZNL7RhBTC9qsAQ2zsnP5QXkkes3KCFTchDACagSxtM3kgsbkwLAaVZVH",
  "key15": "qHq4z9AxrTqkY8xLnJgiVTqZuk6nMx3MUAmSQDkirMibmvK2iuiicFu66dKVeFzouKPyzvymPVC45gMYExDggcs",
  "key16": "2h9iZ6EehmfnEYefqwDdvab6iLCKADjwr3Y6eR1ZUstcAdBbMyMXGdTJC4JrznB6GHLXastNcbnazreX8jBWaTL4",
  "key17": "4TdLbCEXXoLQjWqhpv6q8pSKzfn5RccENKJUvrNX9u9TL7Aord5SSW24MWbn4qnFt6Arxx1e6tQWMF4wcgH51jtC",
  "key18": "5JX5GXghF6AfooCjdAkJC97htEkn8VkEJpQXNPvZBTUTW3t93QZDwDeoLLsFL6zfBPzbiFmonBFwC8HZBbdqMUta",
  "key19": "4bo6x6wNWNYjE2ujAE1CCEhE8mt8w2c86vhmGhsVaw2r95Xj4JDe4zvopFVF5WDJnBRXC9FJTG7BCHPpz3Nvxbj4",
  "key20": "3FGKpMKsxCdpJcS6QDDscENMWxxDiVEPTLXbrc9yCpyGaUf8cAHeitNkFSJoBPtB1KLNmGsTDeBzR9f97RdSx8ez",
  "key21": "5fPxrUvw86HRHr5Se4DXyVBDtggqDTGXFiRSQhsRAT8ZdWzdRFzgteD8raamGKkFmdsMjdBVb2CagkBMJVBmGjrY",
  "key22": "x4hMqsEPcwXy7xQ3EWNjzPijW6fuSmsF1HjBrLGFowP6NfyCdBzemMKRjEyf6rihTv3QxEG8ZQUMx7C61MCCAtu",
  "key23": "9w3KqvptFn6vTbwCPSU8pH5JSPrfF7P5F4pyTY3A5nFkLzVBw4C1zojNyUUz2n1QKcJohXw2nRFCd6te4j3voJd",
  "key24": "3PPPUeNwqn3RrDKFm3cESHt6RpiPxJu2c3vsLqUBdwvUdmJwRtzHkerzXGcAzr78FfMxRUDvxTPg2nHDXE9AhG4Y",
  "key25": "Np3CREVVUurUatFZwM9SZEv6H2jALF2mx4nSatNJRyesziRa4thx335XHwuooWzFFknAQHqChoXzEoL4ypsJ2G7",
  "key26": "2u63FQ6w1jSoU3uEaL1fQdSkiQtbhJcM8ouk4uCT89ku4ueY3CH8TvuNyDipeZRwMhDxHDxwm8pX2CND2Y6APQu9",
  "key27": "3xJNzmcwcuoWXqiK5ePZN7LAL4MghaUAq1oAGi8D7uyavqDLCXzpE4DW3q7c44LqHzwCbwc1ovZN2NZ9GkB1Xnmx",
  "key28": "4KiQMQuiTYeqnwdMFbULixMfvFmet2J5PdceaZS23WBTGqKew1ZmU3UwAZbedszerGdjVRJqEdGkCiGEo1NW4Dvp",
  "key29": "2NKwbs3hrYs3CRT5PGn58qU2Rk2hrwAjKSjhxGvkMrFmnuKLybb5MtZtrDi2nC8onMjUwsX6FRySJ42VFhH1A3Mq",
  "key30": "3qLiropQ7yncvjUR7JSRkmB9G5jRaTWSNCraRJ5ybPQTUwXZFeTXcwdjJYLYSpzJbuW5NVwdTAvMGZYU3CV2xt9j",
  "key31": "3SB9L8k3jBVqZsh7AW1zQe4F1qTKCFjVzmJQ1eP7ANdEh76DQnpucaXDGHU4cFbAiQ5NHZBbHVcNZEQtGb6jTF9T",
  "key32": "4oogWmHhFfHyv9zr2asosKZq8WB7RECBenhfJWaVT4VrqbaGuyDdyA23JynMAqRwZDSWNWwbtoNwoA1gF1GoHxtv",
  "key33": "4VCBj9jCJBCXJXVTn564SwsFmNWGasm3tL4693KMDQLe9vgdpXtpdKHDpB6LABipPx25CZhEAuc3A48noNtYaS8u",
  "key34": "2ErpTv541nhoNVihcEPaes3HWzx5t5SxcwdsmuRafGZeRtgo2gS7Gqt2Tsd9zLRKfd9uLLk2v68JzzGqToBnpSdn",
  "key35": "31CuVXNe764RZ3uADh9cXigDVo9tbbyqxHGoUqciduS69GVDWXZrmg62YbhjGZR5kDMRQxRWFBu8MfgKDj8kWk2m",
  "key36": "4XPmFjdSbKDfxgBKHAPNmst9kZLADT2r9geyEZFnyQLUrPpg8sgNCQNeexfWWLKM3nwnx8g1wZREQxhWZ2xQVeha",
  "key37": "63sVYcT5XuHyXYmREiNBqaeWAat9pUeyYuEbdYuzsE5v9pqocyKPkBoiz1Ya694tWCTuNDeirgCcG7QKgCYSgXid",
  "key38": "2QUj742t8vr2mKjFnbzroGrnXw6fvr3bzmDxHvZLTcDtAxvAJNiLApy33PVmYVCTebodwMoAeUmyST2dSkGXL5jg",
  "key39": "4WCHc91QXZEaq4s6mWcanim875Pf1uUYsvZginyq6dRT4mw23oA5Vi2L1f1Fu3PSCtx6phiiMZJFn7HC2v7rBGk7",
  "key40": "2gaxE5sRdN6gew84zS87oNrQnxXvXBTVC4eSfiJdBDzs596jAUxHeHQ5c9mFP44unvhuy7vMEnort4ens3DutWod",
  "key41": "5gu79cexLhrUXUg3Ph4Et1iSHGYi5WpchFZxryEV7KXmWkt66G2obS61SfRf1ch4AQTi5TAWCD6ENa51q65kqbD1",
  "key42": "3CzEzK5pvbG6P7HACajCNrpMAaHhoCMouP9TnvTiLYGeG8n15dLtsf7oL7W9S3LvfbVsketGJSkgo7vHRvnPuXYd",
  "key43": "3kM1tvwQrSi56Be7Wird4QY2Tg5LHHog3YDgWgLM59R1qVYguAtKvcBuqm3cVHcEyF2Rv86HEBHUXnsNBnoE9SBw",
  "key44": "4CvK1u4j7USGpHKDDjRDTUaRGrkwDSwoHJm2Va2q39CXayjb3mSJuceHJ8DimqEC5kXJrH4ZbbYVskptenwdoU9P",
  "key45": "4erUo9itDbYZ4VdBsJG4AN9TGHohUbScf9T7vEWPUrxtoxPjc9Rwpkud3h9LFWurkSYDirgTM6jsEN5x4r3An1P5",
  "key46": "4sKMGDkfEoZ4jF4Bcdd8c4Qwhv7SejgXgqoRDTB9Z92UvPJKSRBxW2PcCTwYP6a2HLosi5cf9FaaCpikGmvJzRCt",
  "key47": "34JpX74HMCnrb8D9AZzZdQ7wdW64iQxgND5obB8fqz45cQB1XbvPPuWjRfrqWEVeNbgTakuie13Ne9ebwhGFv6Yw",
  "key48": "5uWierF6ppxRcFFDdtGqmBn3EugV1kRJLvqoAYho68458NES9r5GnJPJQPtb9eCNHBFanDcWiyqyMKerf7SAeCcK"
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
