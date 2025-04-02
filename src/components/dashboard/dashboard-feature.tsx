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
    "4eT7NhJ6eRDM35yc8p5DGdUp5Jc1WChZ8Pd2aWxrbsZLUPmrnjK9HgA9cA5ggxjY6vcFuvWwWVFWWu4HUmN4ggd6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53AqMVi4aBnP3vkw6nZktMcLN5wi1y2T1prmaFgEbAhCi78wCoVYQrjp2yfvmefnbcSCAgSCMPiaZkucRg1JnAUe",
  "key1": "WV8s9mV3m8LT8LQSczoUGjHCvDLU5TNcvxCVToQJJcZnmq7rYEiJxJ3aU5GVkGqDPYnRdhsYG15wh8kqsKm3ubH",
  "key2": "4mtbvPeS93Dp9hrZ6ydwpXFcfmCyBTSq7XgeHZK6bZyKVxU241tKuq8AtSeTo1xHuW6EVwf7CvaoHhHtLJzRAtPJ",
  "key3": "27EEJdSurUwLhdnCcnXanpkDo1mgYccLaGCQFNiRSmE9fACAtxTDyWKkmoCxhqL2Bg2tKckk899rZXa2fFDQktex",
  "key4": "5X1v4oZ4TySQLkoU88G2HWccoX3EWWkLLpZRCybnyx9jqQY5Vk7TeQrurK2AhpN4tF9QQA8UhG1x5eGNDv5J15ZU",
  "key5": "LWnyoBErin1Ti7io1EqxPAEocdUdPmW5tQw4cR1eMAJW1TdF6HD6v8y7vnL8vWaxuKVbmjnhQfaUijRu5sbiw3S",
  "key6": "43WjqrsrMiv2A8ifnvUrzAB4mo9dneW4z5n7EizV7wsszEfY1mJ7azF2B8rhd1VnukQ2oAyepHBgtU1svAVgAKUn",
  "key7": "3amwjBW1QA45ukSPMzCNGVE6uwoWozTqsWSaQjBtzGLjTsYJfe4QSUrpTdSTpfMfBUBRiY4PS5QrUC74PEuyrGBJ",
  "key8": "3ExCZWZQTHPmruoF569ggsPiK6qY1GcDFtGUKHWgAhfhkvt8hvJohunsxqAjo5r3p99ZWRC67EQeUvHLSqDgnDBh",
  "key9": "4cf9P2D9PaZLiWcHj7E6hW7pJ5igoE9sxsMxG35qBs1jPvP47utGFZToVo54CPn7cfy7iR5xCtMgoAoWSmniqTCq",
  "key10": "5Ngpo73aTrk7fuBKNMCvg23dZs8Grie2VUAcMimQmmFYgVPo9uBrkVj8P5KXv8caRzcwDpSez49fpEDKtFvp3kdP",
  "key11": "4LyJ55C7kZDxBDMueW24jm82cmo9Bx3zybqXqi7hwYBb6K4acnvEdQQ4xfrSnYEicSgPPkKFWuuuAoHpYWYVLAL2",
  "key12": "46EAh9Vh5N6EWT5GrtF7UgKYYjAyz1WyQqnRxKXuuVmCWLL8vF9moRfTbnKpCub8HQXGaTwrRVSmaxLUNn7MD2yA",
  "key13": "UbRTpSRyumVFcod5vVJXjXgzrFFiGpFJZ3gURs5eHC54GiA1qdggAH1hhiNUMKxbTXkocKcTgC3pkNqnhyusRY2",
  "key14": "2wYH9kpqMx5aQAvXkCRtieqjaaCT676Rd5CgcvoaG5p7qmK9N9EfPdqWbktiL5RbMLRe4grzJnD2EAsukRYoix1W",
  "key15": "4LD2oSrha4Z5hEp6YSvW9rtEfSvenv1A3NDypqLBvTtU4dGxoHdK1snnnoWvHfEfmx7qKq2RJFFWa4xdS2ihCL7a",
  "key16": "w1T25PLFsJc6unJhAfAhMAtoUaMcHtFL2xRCp5MqdegRVNUZdRhAKnCFDN1Y6iiDPCxoD8rcL5W67fAC8BdQP54",
  "key17": "43XAPgfmt5tbeGFRyphBd16Hk4RMy5b3uDLpwuMz2j9mriVx4rUzTo7RyamZd5p5Hc8ezZCi9awUa1cybxfN1FCb",
  "key18": "2PSxc7HQiJkRKJ9FKDEz2xiF6C9LzMQGDYV3xAWHgFquULn87b9YiADfZfru4dn2zpdFjcXsWYghoCju9fzTuy69",
  "key19": "fNecnbRmy5adVq539GJtW3AtggV1YJwRqjbXT2AjQWeMyafHVKciVp4mxyLDWNywxjSeN4R8zMAU91Gq2RRn1rR",
  "key20": "3wCtXwHKs9qK2RNy4qEVGozzB9R2hwZ2kjqf47o7M4JYbn6dvSXcn3wVLQLQ3zT8kBQURCbzFGBV6U3ebofDhpDH",
  "key21": "HMkXLiLado8h4LvjFEQZYp87XmWQxuDsaoMRr4w6J1da5fwhJ7V962gE3q8qrTsbzhvP5xnjmfvo2W1gJAGavUz",
  "key22": "4Fq2vXKpeoXmfpARq9eXdiRP1peCp5Pujwf3B1beEcnMMx4yXyQhzSNwgS9W9pEruuchPoLCifDJQfWbPaQanKn3",
  "key23": "4DKktLgBbuotX2PgAGAXZYbLHT2EeraVLdTCUhfUpeg9Y4FLJZpCEjoSu9KcCie7DVZgvkiwSF8TsFPiNmuJ1Jp",
  "key24": "3PBZja9UWb3KEpn6KcrBfRNYxug5PFfBcAwKCZg1Es76HXdgtjxEax8ZdMaPbVoBedPLu7bgMbk2JN2mpds5Ad5D",
  "key25": "unVFnP4FftsbTSvHxrMh8GgpTfoyvfo4kx8CV9Vhi1H1zU7ypSacNiLbBm4muoet23tgqaf5x1CBTjJTVj1ev67",
  "key26": "2T6fohGffcYHB1HuZGxPefc45AMHZnZK2Nw8pEoR6xmb1As2vSp8Zq5Pj5Jbk5DqeUZaMQUoZpEuJPZjrp7NMwWQ",
  "key27": "59JaWrLhAhQNFuGAL6WuBGELj6zSnsVdyb9TJH5UY3sPc4TiAk9Egs81GoToixmtZcdUvFJQxrzgNTgkixWpoypT",
  "key28": "59KrijSu6B6ugJrz5qv6K7tskS1u1dBDA7d9LiBJoCgceYLpvW58ZCRsmobmxg7mR4YimeFvQ9SWFKqqs1Ftkch8",
  "key29": "3bu8eSeAMBaxUE1DyHt7bwnrBDeCjFaZmFqn7xMEyzigh6RR4M91JBrh1Pfv4ompgUME8BBynyyPHnfApuBFFAFe",
  "key30": "4ojYAzKtfyMVB3nKhQyZvxrwgBLAVdBHLNvmapx498TqXyAovJhx1QBk7uan3CRLuxPZQrt62zN9C7oy5cGWXAF8",
  "key31": "2Jk7shuccoyMyB42G3umvkQwMuue2C79EjB76ZM1PSpXTMeuFMKZZLG8g3cmnrYWfVYykPpBCqnexRTXsDcxpNGK",
  "key32": "4b4QRmGMabHtFL6mwbk92Jh4zirWRauSkuAYEfwKKPeJhpJzfQDaw5Qkm1BJT6AYHhExJD8CTfvhWYKXJjbUFGx2",
  "key33": "LpzV9s4ZTYeEVR7yHXVx7H32DbMAstGdpMSR5uX2KxHNWPAsheKkzas2AqM1GcDCFTNGDfm9yPVzMjUfHzChsCA",
  "key34": "4yjjFpQPDk5Z9fens7u4Z2JPwMfXUWc7XHpZbpHRJPPj4ZexSzxGqhputhT4MnFnegSm6pdjsuh9RdVUjdWamkKC",
  "key35": "5jTyULesQfw9P4w62yfeqwJDCi1abQr62KKbz2xoijSHY7cTUmmtzqGne6uesYefaVyXcAam94esWT8to57Zqbos",
  "key36": "3P2DvVHeqyYpBBsdcrrwgt3ySMRfzHo7mgXWxD274sDhbkADPrdTeagK2qVo7KdDhMpktL4gN7b931P3cosWCJ5o",
  "key37": "5reH8P3wiE5eKzS8SFourGBhUgAZEGuqzuatLVQBMBCCrb8PjE5nUynGAVAFZTqbwYgvV33K8DMsWn75siFNMNX6",
  "key38": "iEkaL5H6eyfnzhiV45Jg6YRFMTT5jJcjTM9Gdc9EURdfC63kErfGs7EaoVKeD3a8AmBYoL3Gcsn3qU6asPhdRWm",
  "key39": "5dcEwf26wK72viksky1hmQ28pbDP7Ve14XihWs3gyQrav4CRteC7uydp1KpxXwkaBuVdRfNMJHyXeuQNo7fLGuLd",
  "key40": "fBEcTUCYiThNfzVYoDkSHohZvs91mctYz2YDuBtMpYqtoQajhSeMKhKbV1iBRuKHRKQvZL4DSwNcQH6Ezgvkoy2",
  "key41": "5jgD6sUsdR1GHFDzKXrmdzAZWokHKkcf2HZruet8Ufx2G7oxn6ws44xReSt3yJUchbxfgbxHUnHiGgHbUJmzC2wv",
  "key42": "44vfGeAYqDZ1wuM8wzfo4UaqEfafzVTKQjW8bgMu78tuX2oMr46CCdX8hu8sNf9vkmu4rrwPL5RTw4ftVwoUgyX2",
  "key43": "9nyy3GSmeRnqVCur1vtPcfar1uZHW9V3U3M8LLwgtUxpFAGD8K3YAEZ1hqqoEbpV627sDU8JzosYqYUbQXBz7jB"
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
