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
    "87cvKvYbwJCY1RuQ7HgDQe7et9Weng7MgSN1tWdWCbLVmjYuoRFmzWsiiFBXugGMTEyzU14j84BZZB42FZo6owY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Vzt9oC7s64L1gueg1LJH3rutQdTEYPvVDpGVKXyPPh3WaDBXYSmP1aahHZGw28B5YktJerNhSVYnRgJ93c2nPta",
  "key1": "2YZCJJxT1oXso7MAxqc7yG6pL16xtMcyx8gV7XQ6nyCL1d3bQeLQxPfZXGtvjQAxYBCvcnDDZNUX7gmaW9dTzLq8",
  "key2": "5HrQTquXAUWPbbhp6qUp2u5nmaxfKSbgBa9VL1kwAqB96jkK84Un9BqgrW5Kq7GTQxikwgHiTndHrjb7Whw6HdTN",
  "key3": "N3dLsPC9x11B98BcrYnU2a2PTqQ5vRCKyCpzLVasgGn5g3Kj5Zr2mQgGYzMir3rMnsCzd2QRgze2QNmsze2zHLi",
  "key4": "5U85fyQXHdTJNKsrpc9XHdeaUEWfk6sS5W97i9fEt7k6tgYi4K3VHaTp3Ak5PVuqXEg1hCUgV9Uw7wdUwy68s4ot",
  "key5": "fZvHHyHvkHx2Lb85a4PKm9ggZwv77hbPCCCaKBNuf6S99etc5YCucERvr9DJA45YgRycxQLrftYGziW59vN6Ero",
  "key6": "4wLqgX4S8MXytmJ53AnZsNxzpMNKJVo5NB7ATqHtDjXEUkCJYNSQvVC9pDvgvLJ8K9MqnbEh21rDgABMWzX71UaR",
  "key7": "3516NmF61m8Pp1qWgp9RwHDcQvsApNCRzfzPXESc93Y7KWJ6sUo3vBVTonAwdpzbqAPhKJsDrZUchhcE6wcwZrBB",
  "key8": "tTDPysJ8SkfekvmAcjQRfKx1E1chtbz34dw4Ch5pbn53nTs1yfgrDeswhnyqTJevuuadyETRcDmGh4CqwSK9EYq",
  "key9": "kRCfJLCXF2pvFQXqzWpSGDG4f7z8LtLFR3xE3f5MPfzJSM19owzE2FWut5xyNtM7BSfCn7v98owFcuBP2MrontF",
  "key10": "4jj5GCqQYQDWrE8CiuohZTweDCqJJLtZjAPh8zuQ2HmsaNTsD8DP9nFuZtqnSSMmVCKJe5TC8EFY8wZjA8bMP4bg",
  "key11": "4k3AKZGgzywfaq8xaSTuS3gekZtDHYSciB16GgJEV8kAGh38D13ZkbTicYEFkhRhqLUhadkg6uMJdsv1QqSpP1nJ",
  "key12": "5qo8Be7RwZ8eBQhRhhuPUSc2ZJmSG4KsLzC53EWjbo1Yu4jTax5sSDsaEjer24NqURE1ib7iPFiHiJY7YpcGPciR",
  "key13": "5XaePamX2dzvxxE3Gw5khhhFRJ2BM32TZxRsPtofwPPmE6gEBB6QR3dGkvYdNHBR8oukyqxY2wQdJcDxwjZX1XGD",
  "key14": "2nj18RaFym5Qrz4s53zzUtNhriwTn5Z7GkCywTH87C1NC5Lv4mGR9vy6DCqnJyRWxRRKz9rvrvAYtQRb63iMXaH4",
  "key15": "xivBRbKd9z7SY1Gv5kn1vtaVWoHFXS9EsLjRftxP7CmAPJgzUmWQC5B6zyD1WjDYFsvT3YrsWAbLYST6NAvetWh",
  "key16": "4kQqNkaoqTDNrjJ6py4Ks4fGsgZNLAZnVeDdT2AjxhYwxR5xrmkrAQp5FHbG9NjZTqYwoysChMfMLkW5bDBycLfo",
  "key17": "5xfPSnQv38TivRBk5ehbxw2F4pKY2S6r6mCxmYCQcKc7B58DqFw3xSZdoR25KbGTG5i1c4oB58r6P86YBSqMswFT",
  "key18": "2HLcz6vPQnrS3AabuKyyV3NFiWsTF227o2ffs4K28VHdebWt7dLLAnessWhm2eeGpSqqVaNDAdcqaddTmmt8dFmg",
  "key19": "5SmQXEbv5qofmyapwZnJs4bbMYZpM4Mf7c8wUFHrFeC7VngbYYbJzqi6j662m2j3BcMDUW1npnCWbKPsY1hajNYN",
  "key20": "5HFvkzA9KUDNnZZUiCRHKgyy8WqFwb7qSM7BC4wz2XvPuM1TZKTBoq5y6NsetCgs5stiqBYiKX3qhkSknqfVwH42",
  "key21": "mwaWMsJpMC6E1J7DhqeeChE2M3gk24RumnmwZdLS5uSyS1qdkjcCegSnSDgcyC8erMmK1tVzYHN9iVZQg1HFpTF",
  "key22": "wQ4GmTDARJkSV796UJ2KC1TZZw9zrQhtJWZp1qoMRsu7m1L1xc9KReHGhiHcCLYjgHxHfCFdLwExihRUSbxDG24",
  "key23": "4MaVcAaDKLgUTi4t9W5vTvNJhwNoqdwfg3h2RvN41SPEiyaqstG2H58Vak2efaXmfLirLkmjxtJjMFGykVMM1WEC",
  "key24": "yFAvMqa16P92xsvgbM4t7ZMrF5898mwsJGTZH2UKrM9ZBTqnQnbFSTcahjyuU8o3CkdkvdbfTJqmEUo7wP8h1Kv",
  "key25": "5spZb5s1SvEeCN3THyK3Cj2vfUY6RBZQwBS2eaZ9Jcjcrps3VSPvL9Tt1iRAqooLPX6xSV4Z3uTjc7icXx2ZRdXE",
  "key26": "61dYLverwQVe3SXQK7Jkd7k9EnZDYrePZ9zmFYNhVqmWwG4vyArdcCUnTKTgSULYruxoVp3uLrhpdosj77DFV8NF",
  "key27": "2WByHHPwhSyZysdvD8jgrTBVRMQhHT6rdB6vnWiGmPC8Faiyuo2Qfyrvd4XyKd6dQx9A3dDcyhveKwcMtHfFN1pm",
  "key28": "3bWD9nSEG77n2w26QU8AiyVzNSb99wM9ECp4koxuqbCo9ueCzUeabnua6xaGfzCT766fo2GCKE5woNMqK2vuDzGD",
  "key29": "RvDnAicADc2kay6hyWK8q9cGNc1pBPGXWcynJ8DrfvFThPSW5Ue6uTGKGm7wPz2rC4ZKhHu8HqNmo9ESwy7MZWv",
  "key30": "2vVYCxS7uPUueYRjEus6RvNfDPWq5W28sUKp3bQY1Tc6QJRfizzuhoS83GhvsXK7FQAnEFugVku6ceEKHdreHUVg",
  "key31": "DTS7qm6Pvi92A5XM7WYF5hjSU4PH9Xb8C2232gCTBjXaGwrNoB9nHNnFy8gLbuastiazh6baDNQPfXERgTDyU2G",
  "key32": "4iWt2ZHWR1iX2vAzYV5mq4t98sMKRhFvVNZj44aWmimtXmhPVYg5Wdos7uCWyS6uwwKoV5D5XvkEXZ5zBoMC72dW",
  "key33": "3MS4D8fDvXqwZf139oMKd9oUeWTDv9L2tUnNic1YsPVcAJkER6YayGynjqZLJSLbRWzRYkERR6gQxeeJ4Xdc2XZ7",
  "key34": "4Na652D2VZ9zEz5RF3PV1Z9XWSHY1w4rLbN6ddAYGkwsVHS8GV9GcVA1KPTXBfSwhw7bCL1Dc7URjzH95YXhAzJ3",
  "key35": "3eAaUU5PtGWn7mcng3tLywGi33885xr3Vw3AyR9KEhuBM6UsU2bmwH38vDmQ6iqvF65n8cYvRDBH6rL88KmGMixQ",
  "key36": "5Zq2QLHRN6uJ8rcS3T3iYSmY9j8z4ka3K4XKgVc8Hs2bnv34zNB4mQUhVXHk29RQU16Fzokm7EfqwSMz3Cy8yco8",
  "key37": "yzrnE8x8ooX3yG2G1s47Khay5Q4HMPMHFXYPFgKedRyEJSpUuu1fP3pf1D4ugLfuHMtbEvVJXDfNvVrmmRH5nNx",
  "key38": "44qihKXQLWqPRg3kLkzc1KHVWuq86qcVEZGsEHz9XeZQHmALgHZZceEy8EkTYTn2B9FsJvboXfhoB3HEfKSkDTZU",
  "key39": "4kmsmhm5Tvh3aid3SXkDAkaotQ8CHfRWvwZmswryk6PyxoEA4dJ6A5vpNuNWFykC3bAqxnxA5itevhgnEt28cTFc",
  "key40": "38jZ64KYPS3gfG5SorPrDqcK73i9Km9NVM9rRHQ6TJ9NM5zNouuyjzWwz9J4fjQcV1TY7PjA9oZ5yuiNhEWCQNrM",
  "key41": "CCBTQnR1Sc76qUPqPLCg87KpAj6kMT4oomkTVY3ZP37L3VQWBQFd93PrMGCJ4pNmqDbETmSiZ9jDjzkkLPJuqZs",
  "key42": "3eDBeAh2imwf2XF53q6G4pNeC8iK1S8Qwuco6vhyEvoLpPMuxD4uYnyUNtTuKJmD1sgvtteSiwQ79RdocBMvWGzK",
  "key43": "4WGyRvnAUw6rgfTzoDtL8Qum3j5hEZc7NxgbfhsBt1cm5rXiEWXvipfDByk1AMFNswokdnc9j8aWPXtTBCNyxc1g"
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
