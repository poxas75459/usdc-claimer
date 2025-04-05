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
    "4BKVxw8gV2McnNVfkvDs8gCFtknaE6XR1L58wUBJpa2KzXwTyCZKGsj9TsrFP3UixMsQZS6PWTnq9LaupbDCPSxF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZrqFtUunXWEFoU8MLQrihnA3bcQH5gS6etJJ7kFcFBx6zo7CFP6pqbGCSB8iP6QxcfrsRuGqv7aTqoB24i1igKg",
  "key1": "4TXLfYSXwLxLnARv3okP7rFobwF6WVSndR39aEK8aBAx49yT2SZGvNduzzxwDVf3SKVDxjL4viUvZvHb8A7fgmdV",
  "key2": "3JAuarL8AmUC6v6PqUTrXuWUZukmfnp53j9D4SzFPXz4Qx6vqZescJdiiHCPkvazBnGmqhCnVh9V5MFvafpp6ySt",
  "key3": "4nhpsozSFdfK5jyPAcxXAhdyybNshnGximjZyjxwQDYPSyQQgRbRpR2HbmFdHXKgqWomNGKR2T6FZKYN4ySWihDZ",
  "key4": "4ZjvAqBMBA6eXzAicqds3EEqeMrgtqThHfCpsnFRrArppDcHNMgPPkEpDUPhet51f1By6juRwiix673uFN8RXfS4",
  "key5": "3oxSJKv2EgtC7CVVU4VKw6PKzByNMEJXwqdiLtfAjHuoboGQHY9KFtZuoQjisGqQ3CU1Rw7b7hfFiaSu8paKWBUK",
  "key6": "5cTFxjkq5DH7hqt3vcfWTfLmUwA49cXf2LDQrkXP79BXRRRnq6QNb2kmY6YB9uYMAdRyDUU1uEi6EUFx9JzdSxC5",
  "key7": "2stdgpx237RfHPBznJyvHqwztMRs8vzszXM2Xr12t3Wbdp44cUtzPyWDSHpoHJ8E7qQEqf5iikgY68GHJqCfiZom",
  "key8": "46MXHJFf7EYWt7GYkTUmwHJScD2P4K39y2wcApoTSt3pX8jiDL9ZvW6E7S5vUrBTiok1adjnjPJnJYeguMCkLT7k",
  "key9": "2D1QCocGxGQdq3AWavkGESmCUTVjiDHYqENQiWKUCmu95PqZ2S8pBtBf1VhA76KQYAn5RcrS16Wp16fjVAxYb3L4",
  "key10": "2SNPBrHQHDJishMBKdxSFjVDFBFGuWY93pNFcH8FpRGMBzWNRcJ2dUVkabbUrw14MNrxBJp99j9FZXQfsUm6SAUD",
  "key11": "5gr12AtsaddP1ojcYGMkZyzZpHvftr1UMhsj4KB1e3ABnUcn3HJWa8egq6DD9NH2B6UbqyHgVHvN66DuFGUUj6j2",
  "key12": "A8n9DptyVBkFvCeTMwUErnK87uBZwjuuW2eskHmtnpVeru5XUH8GAsJWSBcvvLutpAG1wpJKLetx6AzuCGr8jW9",
  "key13": "2xyWW7KhSUCFUHqbhPsRXKXYUnu2PaXWtvubynVo2kA64tSrUJwhbAJHJEfDAevHhn2oDjKq2VP3TBDCJ3wG8WN4",
  "key14": "4yM4PFa5FC3gkJDCMM7DsbgZvnZk1isyY7CQEs3gw5mmLv4rvQyMwwdX9RXuXUtPQ4V2k4P5BMywcWpqdHEhpTvF",
  "key15": "5YFDP5U3AMKpTXLyy2QpmQ3fudPA5KYSa13EX6YW4wpfNiABQvzoNRbJNvw2hQbFvpyLRpv17UeKq1Lcc3RgfRWd",
  "key16": "dBWg3Aa2eqPThaeBNs2XcqjQGRcVWGnNThhZ1vTEH6P8x2yEYZm5fY22HXfzXhUbaoJ8cWJdvUyHqxsxcJVdRxe",
  "key17": "4pJNSKTFYq2jFpKDwdK9JnFPBin9Wphz3rJZP2domeKe2ZcybiUXkngsm4F25YCP86bmunVS3MU1fB5eR4KvGAD9",
  "key18": "2a9LScNyr7VFW4N6EF5WDsDzTCXJCFqrxwNk1SsV6kPRCt2gGSEvDpk2wR3W31KfzfmSomyCQPd2K5sWppbGG36n",
  "key19": "3CFqPT4vAzUQzoFAo7yN9KWyNuFe691H3bQMsWUVDvYyEGV6STui3BmWYXDeF5LLxrgJj9zvewsxthfauYeefERC",
  "key20": "3QyWqAHUkH2n86yKQ76GFGkTbNpf8gGHUVbGd3JKQ3v2p2nxwcUVmouGmiZ6fzJ65nJJmCMkCjEHvGKZ1kQUerAg",
  "key21": "3xBQLtTs8zcrgHaFyUntPdXd3FotyWweMNwgjd3w1YuVoD39G5Z9U1VFhzXk6L7eHnarePmfCs5iPNDLPy8VR14P",
  "key22": "3ihcUBF7Aa5rUrEunvjusjdeosbzgF5o9vXEiXHz9PkwqUmXf9Mj9U7HzsxeAhXcU2LdV7ZL8cdevVo4v8ZrfX5u",
  "key23": "3u7PVyfkfRsYLut1ZJyU5HFDqmejcwugvdNzL4oZX8XQZGCeAJfcriBUwQ74c8xrkyBKsUsaCaRabu2WeyMym8L1",
  "key24": "4R8tjrmVg1Co3sXVxuvgCfn2A4MNzq1Wv2CcqoQPMGnqt786jb7mkC4BpCrrbwthrLoaDkc19ucbyGBQUfnhPAhq",
  "key25": "P7hyT1NrHLLv5egjwK2ntpxxLeqSZGCkeu1JmpM6wBPYofc6LJfSCgZ4awejgNxedUMTQjnegZZBL6aBjQEzx4D",
  "key26": "3uxJjS5DRP5Hjc37o99197fcRest793js1CK6mPdQ87HM87zT9rK4YQHpG29MMN6RFLeN13qbvbwXupSdMxuU68H",
  "key27": "42N3JtFVzSxPua19vvMQNx9Vkafz7JikJV7QJ7wEyaa2VVthJmF2EqwbYAonwuE7huRSmRyCTm3SzoEi4Jhs8b8p",
  "key28": "2PyeEKFAiSjo1eUoYAmtBPv9ogummfbBCD6xSnv4yBDmtiYqjpnKNw1dYjyhhrM1oYDpGTnPwtEASCZxFZs6R91E",
  "key29": "wuJ3YfcZFbwhxGKbi6qwrkx5499H8r2QDoH7jG8jfBNqgsafeiieEjkTPn6hrbbVqpoYjgYQxF9ujoXsQTER2Tf",
  "key30": "4YXc6Qq89C5r2XjVnVqLhXpTesbVXgZP2a2WjWkVi2ZPRXe4MUVX2L3NJzKAK5vYipCySPTvT4xKRyqK4fmDg4rd",
  "key31": "ZknZQSAd8XvCSVH4WeK2g3hpyUACWtBmsjoBYAuFAskfFwkwzGWuFwfbUwZsyKnNEmDTRM1YTSsUGmmdHMMxbUr",
  "key32": "oJAia4Zkp8oS4GZitEqnxd51RoEBj8kKte2TFXz8jKiXgjhz8Rw3jHupytHDLHa4BEJ3b9xBdgLyup63ssymnfc",
  "key33": "4hUM9eQ25neTCrZBu667goXCu8dAztYQuetkYcJ95zXcfkbsreCX4YXnMF232NqtkX98v8y1qx77xfwwu3kFFSxR",
  "key34": "5R8vRTXKxyx7ggaxabJfQK2YD3AfZ3ABrgZHVWNMEghm35mGHhcmCBCss9oWeJGb6eChqf4mdAzZz6TUK7bfCJuJ",
  "key35": "244juo3d1nFReVmfWD3sT7snLF87PSKT27YzHS7k1Tdn3vGqW4to5RYixwbEM2R33B9cYVRx7NgLYzukihknL9ve",
  "key36": "4ef448sceQtQX9PWD396pyYxM1yWB7bSHquYgNrSct4uxXhm7qqZZNqsbsvLeb7HXEdYQoDW4FveY7CoKGEAwzKb",
  "key37": "23pJ8yxYgB4EnQkCvSu74JqTt8qNxdRPrSxjyvygfzy4Ake9q24a3Z48RPQ7ppmZwuJhKA4sXKvxjwVnEpBSidzG",
  "key38": "MmLJj9jZK7GWpzdcqc6CfNUzjbgheBXZq137G5pRWSc6uVh1ZrAJ46jth24zRhpJfkakpUX5KkDR8vsrBD9qHvw",
  "key39": "4sWUvm6155PicDJ853Sbe87vbRJ1h268D4236qRgFGeCDHX9ntv1jYKqvjUqbwStWWkDsaHubUzSGxDiMnPAtZno",
  "key40": "4Fo94GfXkMkqsXTvGcMDuq8AcifyggR5iQPzhR47B9DYt9CykhxPkDV72X4GsADhdfMKRgSgn1go2hjkEDJZzpPB",
  "key41": "5f1DeHPQaDaVajoRNuyWSL2dmPy7VRJfPcMJZtyQ3G8rUWhfCUS8zQrAHR7c12p3XpP4CNgDbbgBY7tuh27UQR7s",
  "key42": "2TqBCBXgj16pYuMB1g612KEvWDNMaiJF8R5TnKDjCCeKwTEkKeseza6sauDfFLP4s4ESLne7ckrWXhSWUh8oDe5E"
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
