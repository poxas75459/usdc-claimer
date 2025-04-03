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
    "i4NUZF1hsYWZ7KnAV86u5B4DTuV2pp1qjJJ78pkHeUDsXxYR4fC3BY9cW19W4LyYjPqBdgR3nsfN4cnQtPEzLxr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ckzu2w3yrbPivbcCixEcXfbxxfjNSLe5farGR4ab8YAua39dzXyDeWzeebQ1t8uN9cGiRGjkKxB1MFq7coZ8wWD",
  "key1": "MXP49r3P1huuoeZzSceaqQMpBXQ5kk93hm238Yp7rqJey5xWWFMQj4HUBpdDXB9m28F8YaMuaDQUFfs8xwSMzGC",
  "key2": "4s9deDwGnBtcKmCsMnz1rs4PWWP6vhUFT24cvUb8ocUaCiN8K6Cts8Hk9pwtFps95TEKJxmiFpoa3FtQ9pp3yzSh",
  "key3": "HZAPCLHZrQNuxBXCQSDJe13tjhx4YyWtFR26ykvMDbFQQUQWQiqwsWwBqV1UuhiMi9EpdnyHTwr81u6LtxDFxtc",
  "key4": "77KQqn7o5ujRMDTHSZcUcH3Qs9qzXHEqAL8Gjr2vCrWrEiiLosSdViBSuYrxRjZWe4qrp3xQXcTj8cpVype2XNL",
  "key5": "45qqJm4yvc8TsYtKHjz18nHCFSKwKFtkFDPgd6oaEDViuz9T4bJGuswvPPLmGfqu4WyghQbYjKex9bJ2BZL8WWU",
  "key6": "KXshHPWfSpu2UNhgGud4bdhyafxZYPTQEvyZxhedJRysHhngmbF4KBbf4AGPfyih6m15gH5yu6VQ5sM12Xq8111",
  "key7": "4kPtyJLtSKMJcnFcztisAgnRuhN4hus5eFMLFn5c8VPMbdEd8dJsqTAiKkeaeANaBhbUzeBU3aYU3A8Fqws6CBAB",
  "key8": "LAnneSA25PZZ2qVqbAM5Tf3FGmL43cApJgXbnzGz1TqjnnTWwES1rNQa6sZoGwyRn48PntnEV3qLdz5epJHRmXu",
  "key9": "3xyhvWjkQ61MoXMn9RiGNLPdoDbpqcZojTHPGmHkjhhX4iRqeUBX3gGL7G6RvefDq3Eq3r1PEMyEcqegDYrSiMY7",
  "key10": "5HxygLhZnhaXe5DKu82Yc7RmsTTFMcj6UGdSTwGTKfjYJ3fq9T45eLHTia7Mo7u9kdVduS8KDwuZ6JjHea8Vd2j2",
  "key11": "pdc7PCwvCtmiDR2VWdCtQT61JzyBmoydvCYWrTN7rTsU2jXQPW5ccxu9kX295sUfaj38myE8xuHmLFF1W1nbSMe",
  "key12": "8jerRMrX7r21XjVDqvSSXRYHweLtgqMXsYDqWtFXMsvKynojR91f9Mf21Aj43XVKLpmnvAU9yiabqJg1S4YYDWh",
  "key13": "4KKQQUpD3qk5g7eUX7rLF1q8hWFAzdBayXB1qrffDN1NcfpKD3SDFVv2eQqidADHEqmKZ8hxCPEkAzYmdnfD89tR",
  "key14": "mQxqKL4QbNPzuFEiMW8oemWgpoWPWDoes5ZMCZiahtAphgHwKpcar3RoHaeAmyHdj7ynxRuChkmC3hsbQiFRLGy",
  "key15": "5wASbyjoaoGUPKVBH8TXGaXFXWnsSioo7xS1c8FfJspAEKNjeWnG4grRukx8udMywpyk1SSLpgjqbMtCjXN3S5bh",
  "key16": "2GCWxcFWx8UtMFdncTCAFrBKswNjGNjJsedjGjSxbqwgrTm7Qv8W4NVbsC1SZLsfnFG56SJnzmk2zLuaZAkqkpY3",
  "key17": "3cdejKK8ECUD8wXwwtBym7Di8DnAwLqNmp293LgDsWxcjoLHTDNi7LGrSf18H8KScyRumc15qKyFf297FGYtL7nt",
  "key18": "4LUwWDMPBE2Uyge8NG3S6DZe9CrSshUWV5ciBAPAdRAWA7RTDAiravp6UGJxKJoYCnohcMF7kfAkCfV8rGFupaME",
  "key19": "3FsFL1rKNbKTCtHKMo3pqgrGF73Rj7YASuS2zDNL7Rkmo46mUi3Zavfmy4YnSuimc1KyTJD9pvXoVFtptn8V6aNh",
  "key20": "2HUj84xRbSqRFaBqGXCQVxHMDZcqf8cn8jMKV3NJs5MuY7YERHjvGooNH2spT21m1CGktWp3mrT52Wmd3pNDaqDv",
  "key21": "43XEe5QvkdNMa4H5LzMEL2HGyTo1XrjKk6kA4nP36L8sJmqcYw75m6prEyTKrnWNiphBFq9kzyupwz7mFWvP8SdH",
  "key22": "3o3Deu3YXpcLR6eY5sgxb2hxaoDxaVn4mJu7tUbU3UsAhbQMEmwX7mWLGAgkgm65quvEckvEfB4JPnirovnzA5wS",
  "key23": "rkuPH4U3Qtj78B29wZiaypJUgRYW8Ra5uSEffwrRHTFMAXDVLGfyhrDYDfpF8AxK1vBJSvkCzHYsDXu91UFF9ki",
  "key24": "4T2bEbWBurZPrLuuKpGXRwL4wK53nEuMQdLVNrkUxntpzfZAZBhBX5HrFbEX1KFbfx4qCX9ZmCzn1RfeP3p2Q5jg",
  "key25": "2rTxW3v8XxDktwTDvR33yb2k1GcVRB4mQGywsJ8D3rDbsdg1XnmpS9DJ45KUff5QoQa9kcUuRQ1B7ZHCu42Cjztw",
  "key26": "2o7rjsfm6jPE7cxPpQRedPn6sYek84GATmcPEeGJoW6R8R2uAnppzFaj5A4FURMoCYmD7u9yMsA45wQpAXEhs5Em",
  "key27": "6QCGxrx27JinuZUbCxPNQ7DtTiMquqrTsj5ENrgP8d6T9RYm8LquVQkhoKcidDaz9fr1J7oQdZ3hszXqo4xdfPj",
  "key28": "TR21nFyfn6mfTQjZ9fwJ5WruxVYsN1YcV36Y1JZ8wkWwLDGYKi3ASEoWsNisDrDzDnQoGejBXBLDxpYBqfr52Wq",
  "key29": "1QCsxaVqT3u41XR37DmQs3B8R1tPyhziUNoe5rDVf2fo9QBfFdUFrrcJkuaUJryQwqz9wMeTy2J6UVteQ8ES1Cn",
  "key30": "2hq1hKfxnr8NveeXhZ6hJhmcQacvRfkkPveNNkvQ98UpWZAdMT32F8hffWTv1SKXCcoihiXS4oWx29ohPUDAtTBZ",
  "key31": "34fLiAScsPFPZY8P3VYMNMtnbJ4SwNALQRjeoEEFtemZMfrDigyyCZ7JcFiPG6sJCqdS4KVRswJCSbF6qt1NKnbQ",
  "key32": "dBbd5ruvzz3mXNYKLgpKvYdwpAgwqMDEJo32upo9PpdvVw2RR2L2DbgEj1Jd5AniWmTk7vMBzCfRBtVcc4M8iUf",
  "key33": "4iKWdpHtf12Uer8SGrmmE1TjhuLW1KEKJy9HhdVysNFXtzNRGnJTdp8UMB7LxoGVFN9oYXcSrte9YoYFcM4jrX6g",
  "key34": "iHw9Q7DKHRCPi7VXQydCNpsKakigN462QEcxjcNaaJ2Z2JA2ECjJVKncjV9Pgzm6cLPCa4uGEvnk1ahCKs8YaSL",
  "key35": "46pnBkkXuSR2rtcRddd9FChasXnYzvhrMV9wCkg7oS8FoA8TEyUAAteD7hfuHdjrUmcCVLkewrQ2Pe8AqRESdooD",
  "key36": "6764oxGGn525SwFEwwQDNhM4CRRLmtRQMdFNYaXXYHyBspnkEHz4L4qvWw11sE6stCfQbyZs134gTMRDoTakja5S",
  "key37": "2Y8JFF7tav5W8FzD6rwp7hyb6bdPvSkkG5WndyiwhUvoXRjCGu1G1n9asxovxuKR25QKEU7MjWkfWAPeiXo4GXeg",
  "key38": "nZJB4iFZTohGQaJhuDqRohmsxL1gSJEKvnoC2m5GdATsRxKoM3vmR3uaBggFNQ3ZuET5zbZQmTkbMEXzq1mXpf5",
  "key39": "4bjRvSM3wHDg94NDdUhUEx9TBjs6ZrLonFc2E9zDwXC15DnWLWaXxx3btqP6iw9C9qEKGxE62WMzdVRbQiwnkLFL",
  "key40": "3zjtC2zGmoW9ZPFx26iKoQUSTBVyaqHExPmgFDDi1g9Ahk66Do2iM5C3RP93JVzMrk6yBD1izzoAF1k5JuBxoN8A",
  "key41": "2hTgEtbm2H2B5RZeLRPz9Qm979CSBjxbmTzmu75jgkDh3Ym7Y5Afm9qAqzmcJo2NeoWrWnQrrCqzLiLbd4TL9P9W",
  "key42": "brDzmEBjBosZr4Dj2sz8eTd3wYdgZhhgFtg5JycTp1oLYgeNKmo1QqQsgq6qyeWmUnxtCW1aKTppEtm5qK2uQQd",
  "key43": "2MkGubbrUxRvcb6YwaGPocMv3cx5kJLc9A8MLFqhQiHG9jGQpBb3Y2NqCxC2LsHjPkSzdgjYcxBfcSzjdNe22X5z",
  "key44": "KxemeXja8NXfAkoXL3Us93bKqnvUWPD9osKSfP4XoGSCoiX8Zm4LHj9AibEXgTLd56T9tLdY2QqrqLuetXFHifq",
  "key45": "3czszKc1tVrsF4La5eHug9VYz98G69GjAqcMRbAsgEn5HZoSGR8jMaxM2BCW7ayXPbnVu7M2a26g42r1QqqZDqzq",
  "key46": "3j1tUUCstBfuxXCfJd6GtHZneEt9a6XzpXrJirKk5QDpKqXwUC3erAaciBfTQaEQtSeX7Tec11kLuArwewna2G9S",
  "key47": "YBuU4veZ9zmVwstmTNxNFwtKHtRSSsWe8M8tE213CqAcpm9tyvPkCVyHXYAKe8Fbzc8mkPpzfxMG43tz6uQQxUd",
  "key48": "2pxmPHs6hfWvjMi1QF8JB3ssWTbeMetBVaAyQVP4h3vvTF8nmGT4sq7TKka7YajXxz8qqebdi5yRXKV3La9TC6ud"
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
