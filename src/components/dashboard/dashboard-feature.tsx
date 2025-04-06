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
    "5fDMNYpmLpf6Gpt5XoX8vu2zES2vAC3pS7oXhgdekbj8hAVFR2NJq5C3sJkR2QPr5UkW8zKdpCtHYnb9Qa6FU7ji"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kcqw9wnBuNUpd6brw2hrmfdBjcYGK6tsx37VZuSkrEsNXAt8Y3vkQ7WNcJRtnv6WTf1Jmm4JVbSdHRe8vRBG6mF",
  "key1": "5jhSTG84JBaeamkooz9XN6iC2zB3STbvZFCdduCRNsbe3UtwmmEv1xzZdqCrNFiF4EeHwFiDQc3b2AgPGewuNjGa",
  "key2": "5PHMhdRW9gKZgXSHLcma14KbgbHGkqtEosGuooFeKydGj5VejQBRdjUCL44Aa43qpXrhzuTUpR21qaq3veLGHmBo",
  "key3": "3kdkPdxdoUoakGHMYTeSXDnSe1ccvVQ45G2LLXkUVW4kfs752kL6K1Tr6PEsNBHnN6x3kBukkwatERV2Z71KtJUX",
  "key4": "5ZFPcyWkaWqkBbu73mSorVkKJ2icoHjtEn8E6Qkp1nCpbA495eU1FnWN1fWqnyXMJuZNwL2wJS41xcAa3EvfPcyf",
  "key5": "4bEaQnca9yF5AsUQbGt7nZAM9bzDEAj1LknsQbKys1gtapKEMT2qvAvKULHKFw33k6ViXkNUMRdj4RDfTddkPqK2",
  "key6": "5V4wgc3xofmre4C19crUJvxEZJstGY37JrnHGa96LtoyAo9o3qqmACsfJATMZCeq2ogSfPaobfrZCMmx3XnqkjFG",
  "key7": "2hw6gGDS9GAu5q69y8kW7FTEXcC9D5xxNJWhudnodXiHuzbnmk5QJ8iHgRJa1AdbkobY4cscZTeASF1JaJchE7Z5",
  "key8": "4KkfiJTg82hREPJV3oybugdn4QSs1zbLBeJdp4KBCysonBTfeMiuvrPzwfxeDJovQfk9nSVXuTi4obRFvTyt4uDh",
  "key9": "fsDazhH5ZeLdHNo5ArsdnhtycFewGoTipHMBP4NptywY1LfeD83W7sGwfpRbDpWcfn7or8G4tjwriN2FRfhR89T",
  "key10": "4LUrZgDbVkn13d2pTqnLz7mVDLiAGeJ5fByd2pwSTFHhMCm4ZYoyymhT79H5es4SG2ZrkuXgbmG3oziEk8jhptvd",
  "key11": "3w1aTut4ko1AE2MUH5W6q75RNrT2LUr3w6gmTeXg8UkwWoTDhoZNVrUWVAa7VqYKdpw6yRpL3JAVZmNtvyn4CxZr",
  "key12": "3eJxX46GVoCYdhuNfPQnRcsA1Mi8V9EGnk5ZBVC2JNtnJ3jVmF2jo4kjdY6zHLoJnQE929SuAVrykjm3VmoK3sjh",
  "key13": "4PZUyktYAZ9ZLohGKG6huJtJNByhBF6mNvyUwDvCd8ibyygJjJky5ZNfyP9feNMsukmGRJbMDvHVgxrVXQ4xYW3T",
  "key14": "3TUkDf3rCWiXYq5p7M2KVbF6K5Tme98CM5nJYafR46mmBXxxdut5HhshBEdCF4LGpeM5C2LVmjKdf2jBakdsbdYw",
  "key15": "4wiLLhgAKLta4C8qVXxfEN1pZtVTqvLeMqj2SEXY9TocZwWb9kA14yJSHipMT71geg3WJTDjbMMAsGEbFo5oNbN6",
  "key16": "2y1XzPXVQ7iw3sbHxyQzFLh9bCc7aMpLQSdrTSmM71rWGju5tprUVPofVVnyhHtnFCYx7QvNVGmUjZKHdzGMKhVr",
  "key17": "3fE7SHtrbZhAnHgpUsGvfdtijbVrK8dghGAw89VbMqUHrvbcqbySsCdU59KWyC8xpBNFRi7cdMiijEQxjUApQTV9",
  "key18": "XuaU7GiE3CXPdnATfRms3n7g5xazTt1V6wR4Fvxk5kBqCZv9646h5YeDzhy1xuMPQpN6cd1ccgpfYgY5RPkNZZa",
  "key19": "5DsZDCJBvA9rkChhdKpp7Egh8HUYHF4q4X616WYaQAhNF5nPT3S2GZW5psfpdCCrWnzyYB5HCMBgfiBnEjdV9LC9",
  "key20": "LSMKeSPpLsjciPFPBp2guaxeNgWS7BjEY972n7KMXb9Si4CpnTVEZksxGw5Srukq1jdQToabokKLg983PfnG3WD",
  "key21": "5UXcjLsWmxiS4V5coW3LXTUaNFYaqHYy9vvitijRxPKhs2p7HV1QTSxFr65y1kXCGziywF2LHpTHdQXGyYT4ZDbB",
  "key22": "5SyNqzjJAZAT54cinpnA9oi3qyAs7TwQZNiJHifSMwihCGPkrVdZHY5YoWePBZwB3MzGH66Rf4FdM1FSZLGLHB9i",
  "key23": "4GPN2GSuNi5ZEw4Gu3DSDmdpUPPVBQMJMALzG2cbxd1QS66oaF3eF7eV6WpoDmV8NeMvZTghMKTms1rvporccN6g",
  "key24": "VdQnHUThQzMeeoeFQHtbG2NzE6bQGcaD1vor9rj4ZRFc5Bjpt7wULmKgiX29zaMVeNcRGnfsNPcjZvEvsAse29f",
  "key25": "5iqkQRJYi2EjLynn15ucq989vuTY3TKngceNYHw7kdahtatQbG1oV95kZruqx3dEpvLW6bid9kutbxw5D4SYquKD",
  "key26": "3AuB3M7S6kJtKxLcsgbfmQEz6i8LhWno2BRhqeRx3hZMQCyG22M5k7ctcuYe72YaCakmEGPiQX9rXMTWV9apNqwU",
  "key27": "3ShBmXjARgrMqPBNBE765hAhixNkPpRVcLe2wPD8dbty2g399ZrLSz81rqDLKcQpU9AEh3fWJXd4ppj69Rw1wu3R",
  "key28": "42mePrUNTFiMQ9vXw3132Cwsq7jVwXTu1batksQpCSA4xFnrSpuic8DrbyGRVsdfEKhvpekucvuQYpBry3JwMmeK",
  "key29": "5YcsxVMkiYczzBN2imcUEesHdpwv31ntjcyaLi6JPgM3VqUWqnvDvnZDFt79E4DZC3rshhjToefaQ6cumQxEt6jr",
  "key30": "3ZCjDfjhaqbBftinQ6n3QAYre6DveJvY8GxPVmMRKDcAJ32LM11vkseKmmiKvfjEeP1cqxrM75ZonxjBELDmEbpg",
  "key31": "3DqLpcXWvfteeNg8bzLC9trfHbjG9tkgVM7ShfqWepvMhSLj4tgLcAKFfQfnrQQCw26DzdgLFDMziK6MdoKhy193",
  "key32": "YT9dnfW6SDRkrEiuSwHrBv8kh2gegHKvuRphiy3h5Jye7RzKUoYmYeWRB3HiBhaKoJqx4X4GjyaxxGqUdCTi66M",
  "key33": "3QTZjyUxoF62wVm44MRQ16vxEq2zHBtYoxHNWZb2KveFFimQWBAiA6H3hfExPTfY3AisLQ4Fys8ei8EYVWc4sqSd",
  "key34": "j1oTAcaNtFa1G6dda5ftooZsbPpmJoufxro3Bmv8EdhfTPym8jUEAxjn8tLfEhVeqLsYbPZPaLnx8XdNK7DKgmV",
  "key35": "4UUNzSZpicwqjSoYHquup13x2s7Q9exmfF4QKpKyLFYsJDc32g3DmJ31zJvBnqshS3BVdCAmvVbkvpgaXwoGgMbs",
  "key36": "54tjd3TJxLYvsZcLVASh1FvB1bgEqRZejaojsHrvCRNcTu1tfDhk5DrSjPNR9zKeAtgTf5j1bLFyYyxzbyrtmiyP",
  "key37": "5jBuWe9ja7rxDfv1EHtAWqUbp7925ezDvnUHHkXoDnigYbqTYftrAF5vs2Hykzqby2nghz7yaN8MUeXdSDJw4PuH",
  "key38": "2SqhCfktDkijMwbpdzNJY2A89PSnR7ZHPUCwEMSoSfeqXnFS9JUrHnXerp6mYPr44SaU6DZXe1SohGJroD8hcro8"
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
