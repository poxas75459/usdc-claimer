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
    "5JCYJWETsZicptJBwNu9dgTNyyD9DnFpHUwiqbobrNPSxAmrdimvMd5n4LV5cvo6AYhUeVNSGrjM1JMRpCS6KePy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YDV5pyzds4ThBjKtG1XtvRqwj3Afwkw4sG3C3u7PqpkuEpurMtyUPZXuyCsnCVy2bnNTgGUiKzWzmV5jyTbyvAB",
  "key1": "GAFMwVcATjVdKwsfHruFWmqUbMomErxL2TN2vidpaZJWFiAmnnWU7bdQESVCs6wZmxxgjTR58s2mEk2hZNKAc23",
  "key2": "EttYZcyTQoFHVECZ9Kwnx3ViGjMPWb5H6GdrqZP7gXBxPzM4JYAz7W9boCxeYc5oL3rHz8kaWffHw2h7Sax93K4",
  "key3": "46bi4rjas6ssbpAMy8dhM9oC9KwhkrWpU86QaXMGQbiW7ZXC6Nf1eccZGgZoxa47rdXaGSBc9V3vgGJ5wQ1jfYqJ",
  "key4": "5z12SMf6SbhgXkqrN2AEZ6Na1VMCjDXv2DN4RNm8Ecoeb1gsGrgLQpHKDrDSWeoiUv5GBJvZZcEjY6N2F7wLs38S",
  "key5": "3GYqeJdK6bScpdDZowYT5Ka1KdvJkb9CN8o92VT3tLku7UqxZURCJBe4qjqmFqZSAhyho5nWc3jDkvSjKcAZ48xg",
  "key6": "HiPmuyYb1dXV6vm2whq47ytEe2kpx7cq1KMDi5ekf9NLgSMV3JiEpDLfeNjF98njgMSyH16UBCMCdnEDuA112Hr",
  "key7": "2qAb6cEA9zm9PjbCn9wPKivdeD4g9tEpkruuXoDFwD56tf6WTjnbXcG1RdHFdKFz18seAQtfvZnWXmMdCNJHTgUR",
  "key8": "4Wu5NLmr7pHwfD9cr6rFXtmvzXfLf3STsWhWpUzHSVkgQULTa9P5b9pzgDtsgM343cTxVwvBsmRNE4wXhav4JRkQ",
  "key9": "58By87hrSRfwJ7p7CQWXE35QVCD7xPqRsbMon9aiLaG7ayyxCNH93BCL3jQCdjQJs1Gybs96GYwAQuauATcKeBSC",
  "key10": "fKTK9odPUPJSmrS8qmftPyopxAJBJqkNmybDuBPK4Q5R6phbkqURyDE5Q1Br9Hm6cxjRKsWMiyKtBJqnX1rPNxa",
  "key11": "5Mq9RQcDbLTMtpG8t1r1Xynrzi5K766KQ5PwdwPGff9whALekam65rqCohVzMRZ6Q1fouDSZBXWQiDJEmUbQWyYL",
  "key12": "4ZqeurXz4M1iyXgBn6gA2NAHQYsrdgNLZkjMEPNhjZFAwJ7gGvwJQWBTVkaqCbAfRDnQ2QG7KRr3h1cGcBY92gPh",
  "key13": "47oxZgUHbTtsUTaLE2Set4jTYpqrCRn4s8zfcWrtzQBftfCKRTT55nGGv1HV3ZGAmqUpNKPRegUDa8kdV886gAg3",
  "key14": "2hR8twUV1KRFjR4EeSKXyAgvSzS4XysuUMycDKezfvzNWQpqbQotz3m4qAe5EytuAeexLSTsdiFF57PnMmzkCQbb",
  "key15": "5MBg4tJENtMA6t5HxdYz4dhyrRmLbMqFkMuzXxruenoVssPUHYHNL7TLY7bCTSBjQi4pZXzp4Q5jCzbTgiC3FFvg",
  "key16": "5eLZk5gKgoGkqnjbecFyuNjRinCPWJxVEGgEyZrysZ58RrF8AjLLnMU7LBATf2GKynNgQCPXaL492n6tEsTCGm63",
  "key17": "27q5pjF43rcgNTe1FpSXCz79kCJyPt2YbX6vgDP8FsKtXEUfcpnd58divSoFFDNCXUqRczsbpH1aSncbMTjECCcH",
  "key18": "45DTVoVKNeQJpYnyWNjv1VSd6kGvwFbcEaqkrrPFUDE51Lhpg5743ywdURqz38sxN9tYxh8mYsUziYBaF47zdRgT",
  "key19": "2o99uJ1GQ9fUcjXT9swbCDY4TAwd9pH2zqa3QaBR4wGqcdQbkQQH2NReDFiXhgfFZfuWPfrRA8QpPK1XXb2D8Tmi",
  "key20": "QKKujffVjtGGFRgSF5GZSQMiWW2y82u7XLrS1tsCivWSaUtsSy8QbW9ZJiP7nVVuxB3rTzBLoFmvoT4sGh3ricL",
  "key21": "4Aan4TEsMfxD3TVCoR5EoWAJ5r6dEJu4Fs9M4G8NK4Gq4uq1uEK2R25Ln5pTfGPVnjhEQxvCqCFCpYQfEYpqsUdT",
  "key22": "3BeqphXEooBnTapWuH6NdWMHPuMZufsWTMVKWFFXEzyY3MFuDGaiGVzPK2PxnmwjzXUBaXUP2KJQD8uoZPtuEZvH",
  "key23": "5KVCGndxbNmTSBSvLC9f6m46xJn74gg4eemsYdPwL3vdLZYbYzjae7cwDbyR1b6fEJBHzCyezrLAUDn79Qj7jK2A",
  "key24": "2oC7qsMSkcuMNypLfN1ovgXDZKqXZGe3FUT13LL2HfXZWD44AfFvoacCLsPYHyXMMEToLNfg8KJmcuYetSNyKFn7",
  "key25": "3fAeQRgADCXu3bMUL9uCbfAM7rUpVcrGs3rNVbZ1wnjnd3doz6dJLsgH7DDrDL9UqnqwwNBGM2Wr3Z5pjLwuW51j",
  "key26": "NqpFW6dB4uHKYx9KApGn2jqUjrCy9Gv1mG3kZKh9VpoaXrGPNLA4hcUq8ahZeecyRzmaKPavEXHQgf6tTY2b8ae",
  "key27": "2zudgxH1pRpAViN7PAx4uU1V5Z9NYnsVvHBAGuo6mePLnA1N4So3DEAVGCa421fQqnQqS1UdqLSep5UPTUKEzaXA",
  "key28": "6NLFZ41QZdPic3nYANKWtxLVZtwPsLsrLA6FhE787ZMCF293NpXuC6p8grfRJMsxznNzttSLsrfa4HxvPjuHRvs",
  "key29": "38TDYsdd2ppbeUEFF4pbNoDyGNNGrPZBp9xPcaMvd2Gwm1vYSLA7TfGZJBrCdGv6P7Qt4RascBjLBFnTSZqRrdiU",
  "key30": "2QQvroGRgT34z8txymWskBqPCzPAW5J4kv22zduBpYxMqx3akADShJZPmHyUAJskZimS2HuqbNnT9EnAQL6Wezvk",
  "key31": "2hERFMgbsFpt9yY8f2PwnTsmrAKrFFPzUEY9DcKb4chY2JCpvTPXkJUM9e79xcKSNBpNWAtzED7DB9F58tpjWZ3W",
  "key32": "v5Lca8iNt1LMZMAPZJLm8QZkvZeYzJemEyidg7nnpJNJxfqbkQgrDfg1L7oQsad5NB1mu3w2sprqs7zgP18cJ4J",
  "key33": "5J84tGJLvxaQHgT1kBMQVTgRDekLTi3wxkPNH13N1rwU3fLjUyNScChPFj862t5kQQG5fKpLiWqs6u1JkxYqbaBi",
  "key34": "59AGyzWzJ8Rwh73EW9WFzNBHWAUuJd5iYKim5vPdDWMn5Yc7qQWbUeJ6eD8TJaumxBN4SCM2unRVyrfitWm5yvtu",
  "key35": "5n8Jhz4zYz5buyyr3burGPwoVnwqhiG4zYDRXkWFHRXZCik2Auaz8gn3xnmJkaX3Y2kv3SbUy5f4awWGSe5LT8YK",
  "key36": "2Cjv9h4u73FECx9zkyzxT5ULcd51cr4Af2wRBZYnRJNDeTMh6kesGckihUXGLm4fpvrtvKvaCoQ8G55SyKJLkd9T",
  "key37": "5m8ux1xo6UfZWbV12ECj8ZWvqwr5ogEJrM83qdXftCLwKtJMqb6Sqa8sMLSp8zJRmxYaCDm8HdHw3KYnKrbayMJD",
  "key38": "4kjYFqQ4tGgYgyS5wTTnNxHE6xKD3vxXWLjiJcfyJCASRVjKawf3ER5vXCPZirifx1ZAyxMPqiNyZXSPQijPzYTq",
  "key39": "4x7CeekQuGUtjF8RvoyKPMwfS3v4ucmAgxjTLf5vuUaaThzWEXKLhLmZy4uMHiGkLPQHvax3TkM8sfyeKYwxFmvA",
  "key40": "2ctMskzUPWpGsAX5V4gMMcRpfngFiNyLJuWLY7BZp3Kdv9omS5U95fC6Cj9c78bXuT9UYFCRSy86k94LdBVZGNeS",
  "key41": "4KXsMB8djRikwj3o97s53mwJvYHgz1XsSt2nSv1zf68UMnnQzxG6TXd6Mr9waAQ4RVAao7SnkkZUX1DsSoYH34Uh",
  "key42": "3w5xGJtDQsuhafxjYzrFptWKmP49iTu7EJWbLNNMbRsdzHDKWVD4yzBZeq6grAaESDB5HvdHXdYPGbmqrM4nyXsj",
  "key43": "Z5AQsaC86jdQ8uJpB3fghSKgVgwrmUmqXnaPXtzANpn5LTyceDSTrFSVvHyAX8AnLbXPv5VxHk1aZBpBwanvPsx",
  "key44": "zx4ne1czVg6eRf44DHnMJ5FAmbiKGbb9ZjASRoXzdN5Rutc97LSDEFejJyFkVPkZexyBD84od3wk3LknU1HjJZP"
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
