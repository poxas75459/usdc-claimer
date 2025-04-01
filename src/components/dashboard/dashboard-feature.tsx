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
    "5FPxU7cfBBjUoCf7EQHfLVx4skZ8PTaoRpAD7SfbR7Bjeuf9bcsoiS5CxvCrkNP4ATP1qAVGjEMdqgBaVD2xPvtM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FKWq9vhzNpWvjSknsfNeHYkvGc6gWdYMkcc8GHXXKAXuuwssaTdomdF4V8BX8bUshnh1umEyYJfMZvB7JVPpDqS",
  "key1": "5bjJgD3Zr9FBLcG1EChqLTkujqg5DLE8nCXBMdW5AycWhcc1GpwYMWjcBjVoeTWro7niFCcNZDSw8ZwfzVtbgBzX",
  "key2": "FMyHwZaJgtST6sfNFQNH5tXDjBm4bAnaLKVPvdfpta4uTrmwa4okFrcL4AMLDsRTNQMmq2puRXTqrEb3ZzP5qkb",
  "key3": "65oJUKUXdP2HTUqcKgsWdh5R1oLNi9V6bq9zpwM4Z9Um253Rm1De6zAF8Ny87Mo6P8iFEoh9ZYetfT5ahvkxrEMP",
  "key4": "4voJGc7fLmaQvR6ccWefrq8v2rzWa64EwBkkcTudCxFQ48ss3a4x2v26fTWgH3MQ4YiDu7UjuwLtQDfgGgTQGygZ",
  "key5": "kXEBWnnisDAxWNRG78C9FUQfH6Z6Et1b2ugcty3NECo5PwBB81KFemaR41t9Ws4FhaAUULdyBicAvDYgUvW4xV4",
  "key6": "5B4wUX8oZY8TfCEZxr5V3treEhAtoKL4vKk4ggi1bRLtuhmF23YAutvEarj8yjvjgRaqsxQNHDmT66GTpd193XEE",
  "key7": "3cVnw1N2w7w7LGzQgUJTK6Z1DRqcutBNYN7RWDM9ZU3kbWcXyaxQW45fcGnYceQAqkEWN7sPsv4xtHpo8cGkMpL7",
  "key8": "2V9ZPTFEU8DV1bbyBg9AeNwYToidMUkzfmrQ8taASuik814cHzuPb54P1KzTPxpmHnJKuvgT5TPLPKN3PEXxd7h",
  "key9": "2pfZSDe2XRRYDJjWsnkVFdamnXhpAssj5pqriVk4kKGZkch4Q3brJUAvzY2LkdEggfHHkLad6XrsfRD2HHXdE7b7",
  "key10": "2zBny8aD3rgsoCthCodGPSnsMkx3FGT57ZnGRsMcvMEZH3S8wdjS6BZYffsRZHL4z5rJG4pCB5uGPvwDdimH1GgN",
  "key11": "9ekYjq6zfeebhUNoyMkSzaTuo6WmcLqg4eTpm414fLSypHvgYBSq2RBn4sEz7MEXPecPhNkZL4qdjuNvfabH63h",
  "key12": "MBLdzdi7DdpGNhLqz8arunWqdcS6EpUgLzMkQYfhEMKNAmYwYvxTbf2VXudzAvoUg6gCj3xvMoLhwwxhPRcgDYv",
  "key13": "2MxKSj3XixG4Xo7t1Bg59fuH9giztpjs6YThU1NWMP2hfqmTpyrcaZ7VwFzJKNQg7TMypvSLUBLv28rxGXgHa7nM",
  "key14": "wwJ3m2FQZ1WyPdRfFPvrV1S24M2yhhgq8LHTz69pQudx953EcScvtzL64CGfuTQEpt66w7AkhMyW8dsCysd31G8",
  "key15": "4Z7WFfwzyZHm6ZYWoEMSjLRCgoaN9pf9Xzz7gguc51pFZzYzkH8Mqspey83Ppx7vJdG8WAmYaKRCaeyrmjyU2tvJ",
  "key16": "5MoK8QVwdEAiUGD9kQ7u17c4PjwXAnw9oXcpkvLZnUcLgeCSTDMgqtrPnoy4RMA8mNqeVK9iS53qfAnDoMGXuHMf",
  "key17": "55wWt8k4rn6KDXCLehH2DJB8EgZHuJGxShC28rfzN6su4p8NqP5TChFeLhAc8ewuPEhxUZo6XC4B3RLuivMwEMe1",
  "key18": "5oz5AuDujWJQs2yBXwUu71jB6dpZKohpiQi8tZdL1PXxwoQjVyddFE2JZNJC7Nj2EBkoLFsMWaWXWDnAqPH3bjB7",
  "key19": "31aKBZxinTPVJ2k4QCmS4TwxX3sZv1mED9hQQroWEaMXMddKJNrXiNbtjm7ar2T5oMN3uDB1jubuCLx5ShdNtTq",
  "key20": "2xCLBXCEUVKWYSJ9i6yJp3PFuDLKnNDeTEDKUxmuMdESri2H5tToejP6Qt43BEUjbeLH8PHxCNik9hpsDdZehheQ",
  "key21": "5yRfwuXahrApfn5LyGnMuXsWM12Sh1x6fFq91js2oWWMgAxEk3vaFvJQjEvsfmncotrCeKboYzJ4EYzGpSSKrbAz",
  "key22": "2LY9XJmcjChdfKsjQiV3pNLfzNiFr6VyNt7euwBK27CAu4bD7rDf8Jq4hNQU5Bnxg2vxnX5yPhVZceQPXR258UUn",
  "key23": "5eLThczCki68hkYTThhe4pfGMiAQovyM6HXzxDeaXzFgjoorUv2S3EMS1zC37ApnGkqtNo3xvc8ZcomzavY3H39x",
  "key24": "2hHgeMEADGyL5VE8my6gjxuNjzRLPi7mfic5ou3SzSj6wGN1oB3hm25cxUv9Cwm3ipShoBXERLcdYz9d8wTxCMac",
  "key25": "2dVq3t8ga5vUPdi1FkgZqg5P3XDcgvhHjrv5cowQ48AiTh7QvgzLBUmgcQLKdToy1cGCfV3ohb4baX2AJqhvHVvn",
  "key26": "29xT2sFHDizcxjbiXudjFANXFKTvNR9rBnMHUQn3qxcfzX5D1itGWmrnBCx18jUynEBMwewTz3nAHz8rGeu6L18c",
  "key27": "oBtgBGWHWs88KSuroHYTeKc3nGMnmshh2mr4obBBQvdLjUPFS2yFRAB9UR2sFULsozHMYG7nTA9yMsrjHWdLBhm",
  "key28": "5e3PoYUMXrhTcUyYP2H8qHymJzUDfr9zkC2rc4F5hBoVj9vrK85yFYVPrRV6MHPHgW6p8kvHWTHDvEP3jK7Vy33w",
  "key29": "3b9zDsXFp2jrANAae13csAzq5Y9H5kc7Vv8nccSHJf9QkhaX8kymz2By8fstYz86XA6iY7kKB6UfRrBaFbW5hmJf",
  "key30": "XyYTRm3PerR67EuKDR6398rgWmmYWppPXfV5vaVQ9FR2YuSBSUqktz3GBgCRWCSWaudfj9za5cs11SCTFzoukKo",
  "key31": "4vdhQaVmaJfSQzMYRzQ5GBkQy9omnZzqMS5CxYaqwsnpKrF2u1uCXWr19oZ1Un3DU7cQQnXRj46z7wgvo6JtcP6W",
  "key32": "5SVwWWgCGqeZ9RFMGmbStDXDVtA5HujFPNNd9eiC1e7mHm5Kr8Cxk2SwAo1G4GVd7YarZcU7mqA1pCeUHNs54Umf",
  "key33": "4EtDEAUSXGMbayc9WYXKUQXQCERKpRcHU3judj4zWBHtqyK4zMbF2kUuz7FV13jz9ukBBz1HFnKLMv6czQXQnYaj",
  "key34": "5H2kVchTEzv8F1om65sJvRCWBafMarCYqFry7Z6rvdLxajW7V9LeZigryYGWM2y7FxihuRLUKPgZ2irTN65xvyCh",
  "key35": "2fH5P489Fs47oxs4LLdwczbCtSjWWo3xzLsXSGjdS9Q54sY6TNnNnLTinhwoJZyYqjvDbtiDaVtbx94VaD5zEo37",
  "key36": "QnJDfS27G5mEA4938xeuWnhW1RCsyBxAfCU81TP6YRHasJTNew24JRiCg9vc6BB3zdmxtxZsXxMmhXvpsFhduJq",
  "key37": "24vmsyf8QJkDnKTaGisdSArTB6cubYuDRyDWGg1FkuutgMqAZtyLpav2AKH4Hd2THQ1mmw7UTWWbVyijupFnG8A2",
  "key38": "qCYRTMkcuFXmfjSreAdaxcPV9rBbWTvNGonGPN56PsWk1WkDX7kJM2n2QkiELEzXtGyhYLQotKGD8MKzjiEA8Cq",
  "key39": "MRshGsov4jxyoNMMX8QWLhr17NuiAXAQuFeEZFpke6fSv5ZTTsm4DJ6sxZr2ZRxAzC9oSof1tycQ4zBnd5Jp8ZN",
  "key40": "2SGRgQZTvkDraaQ2Nwv5TbStoJJJVw5ka2aa4UsxCrZWmXTtFtMk2UvGt3NrTK5YX5HvdPnY658YVbQ3tni1wb7p",
  "key41": "vwfgfnAXuRycXizwEfCHkWBeDpodwpBfJofaM75XsAkHqegBjUWdd8RVmKMdF8La9usMEHWXMAMFUGKucSYjUpg",
  "key42": "5Q4nGyoGaM9UuemsJGuNDw7SRtnGpvpGzbFBJU7UxBpKtkwFXxqxusymt42yCjU3imxLMXC6FRpmyhEgmJ8zSpNB",
  "key43": "2cuUbbk8arCdJMRD7kBHpNefKPzmEZSLYCr5oZ7XqGwpyoj4za2WR91WKXWZ5HeGVeC5J3AWCN2YkG6DyEvzeUMT",
  "key44": "5heq3SZEokNerEhJdg6UpNSXB47n4GJo1Me3QLQhnXndLkT8VZVF9syQ4vPDijZeD4G7QNyVqqXjKTW8yMKQUAE7",
  "key45": "2ZWDeZ7rVMK7b9eFxByTkcQVvcKar8EKeyXm8MKPd1GisGDFxdsyyrEgaUChWRi6tsxvNfo6ZBhP53ipXQ96UNXB",
  "key46": "3HxUyJuWEaVuvZwfr8rXzTkYHqjpQTXomQaQtYXwKJpAZrNQNiwEAi4Nxt32wJzUgdoDYQZdJDAJoQYm7FnyUwWN",
  "key47": "3wdBah8fGjzBy6Ls4RtxeMuUBXeVxyccL6QtXCiJ8omhzYZE7oStPpnkTtvXzmnectogkDJSassCBYgjaR6c5aRc",
  "key48": "31ksNE62zVv16nMt4LxUNtGuM8TcTMZhwKvHcpc4vt5wmr8Cc5PcicaRBU82CCw2wGxhk89u7hJdbGmWLctsZCcQ"
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
