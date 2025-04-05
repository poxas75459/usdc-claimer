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
    "4sRHLoVPM4wdL2bNaxqKkMsACxEQsGD29HgyFaWxubDyfkDsmentpcQPuCi2MpB3FTjy1dxJE95MxKswy5Q6r5dr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FNKK7DAjvy4jxRousvNYGzpm2JLTWrYWC8RRgJ6kuu3yV6Z88zjxM3Ce952q64bw6LtrgJzU5Nqgj5oyyPVJJ3F",
  "key1": "nME8MViPg6K221YZ6ReFbJaKBS2XFXcBtMRjz1PCv6PACMHrYP99mSLtkdBxdgBwsQKRkpTaXVUH7iEiWjXiP2b",
  "key2": "4mDdynyDiKXHZisbqCHsFxBzJGEjqo7NT8tV3LTup5beVAJc5QCaSCpAAcFD4urfmtCP8gLFx7LR5F32ZDJpjssJ",
  "key3": "3QbnNbDPcbJPF2TZT6kvoVKrrtpbrG1by2XMAPUro1bnWDT14QXHzDUDfe3QoeyBnoxHFStN1EWA26bdXKf5GfzD",
  "key4": "5LZW5KdEFoTWEisoGVeFEejpdeMujRb8N2n2wkGnqU8WKc4R3uU2iL5jb8ncwwPxNcye5So81dTJS4ABYbc7mALU",
  "key5": "4Z8Zc3Z93pYTiAnQYbtkdeAyV4RtArHtL2deDNc1zgiXivn1hwQXn2wmozkLUeR9cyagbjJSyCFgpcpzMvBEo8qC",
  "key6": "MdZkHLh4trEzmhZQTg2Evn1UwXu958QWLrLRaan3NRrF6HfUvjjdYtcqBHWHHTvbutaa4CfmhCh2bsjbgGqxSXf",
  "key7": "63h5v2JtYPa99Ht8KECrs7TPvVDp3AfR5pf7vxxqB6a6hb6gFf577Z538EExj2MBWLhc6UrLbMRkeWCeKbmCNSe8",
  "key8": "3Ke9HMuCpoGeh4b5bun8C5iU43NHtSQaN8w3yZumXP9tmwWrreTaVFW7jCRZvkxyLxQhfxNno2vNfLNQptZo5qNt",
  "key9": "4JKpwzC9J3Quoewp1FW7DyLByg6GHw1rxLgPrY4gWqaqKDQXuR7M8AeFnTe758QVCBASFAHtEw97sYwo4MKyFxbk",
  "key10": "5PD181VAkE25eSEtiUX4hVCpGQ7VNhmqY1W2ZSGFggShqPHbQ1CfG6cgnmpmKwZE6r8eRruvTRXMcE1hSwcbGUJU",
  "key11": "5EKu3QdZetXqW1e76SA4XkXvc2PCFjdCm31ojxvtfVK2DE58Lcou7AHaWf2apoWGdbSzzp8Pe9272iFXrjSo9SRW",
  "key12": "42g2q4BfP42gZjT3U4UWReDzktZL8nykEtFqAL3qMWGCdx6YbHCGbBNAEQR3PaguJHG4XqkyuAv7aAN4Na2nxSVp",
  "key13": "2DdRJu3TgCG6RfP2CXtYSGYCyXEscuVWYQsUDRnVFSoxMWZUWBfd9TNJUm7eyYXtsDEXtZcGQ45RmmU2NyoNtQvH",
  "key14": "35VNQHwsz1Qj8rCc7gaYrHQJY541Xob3La1Qthnmc79L8BEsHZ3vpTZmLNVTC73zsT85V94gbEATym9igGcd3wPH",
  "key15": "2xqKzdyTRrwGv7xjPy8doohWnZMwZg1AUU1gqfsq7vh6A4ss8sLJ8VCipFHe9f9KmRmFZVnYMTGkLhfL8oAdoTXN",
  "key16": "4Km5Jb2PRwKSMJMx7NkmRyxqhGr9uGpNdovoFaTLDxZuBHVb7XZFeWj3vQdCWuN2q612NB46qf8Ghxw9owsGhWKM",
  "key17": "5ZYeRHo4b6SwKZVn2jxaoV2Ryf8QTmJJrJRBPErGPDXq2gtiR2kfDqXkg68JwtMDmf3QdKZ6BcQKAUhNx9VfDJZs",
  "key18": "W5JxYzmTnFJxxDVTRLERJhNMuTjEKbnwtoUk9iA9XeHxiRxSoU7q3B5YqW1WPsptqYBXZhBjbfefz4bAVw8QN8A",
  "key19": "3VSd4xG6YzBhtWrTe13NezLwRf4R28dYHHyUKm54zYptwSfMbGrFLWyUNXo8KLv4nWZv9GXV9vqYtrAusBRYf19d",
  "key20": "4ro4iNhEkbY5qn1BNTsfrScBFt3vTYZExKzSa794wMJ6TL5v1H2CtQG5gCqfSujbvoMk6fgQmo788xKDp5a9nWMa",
  "key21": "2p26kGxRY9jrLEj9D51aj8JhW2rH6azuZq6CbQGD2QynA6J6mSUb5ty6zZ5PcSXYRUSVN6fXehsJtbM3YekqAufk",
  "key22": "2gav2TLUaHp4NrmhZKs6EQ1hA11eH8txtuoPCqimbtvm9CMmu4DJaJdtZA3ojmaVfTvNVs9ztjnfZDzvwhHnZNF1",
  "key23": "by8TXXJTYLpibgRCMmoFiRK5FtCJVfvjq2e5tKg5WS8uojV13PEobusintEMa61TxTavFir4AnDT3GLYqZPoSmb",
  "key24": "3S7rRsYb3HbqFYENgMHfxqF3SrypvYUT8qErMN7kBjrMXUjzHuX8tcyKpUMR6dTWa6tu2W1NWfVsgM6GLwavff7H",
  "key25": "2FzUveTyFJcTuK1Gskti5bc7881AxNtgm2U6gAFJ9NAuGMeqAawGDxzLkSb6XetXdGJA7VdX8BgaWimtQrHoNHHK",
  "key26": "2qwMfrKpds4Cw6DhZqiL7CiZFQ4CTXvRzHZ2uJfputbW48mYZU8HZzGb8th8UBnvKmQkUvJzYXjAd7RqpZZLpSW2",
  "key27": "2CP7eWSVT2FDBxxBpYMSKuZxGjaftBVwkV3KJKTpJW6VspnqVZrtFK5k7YfrtfYYaUYTBK41oiCsHosq1xFyF7CZ",
  "key28": "3177k61pv6DfUPKA1moJ3MaX1rDZ3DNZCiy9UBYdwtdi39NxLQbWcHVdcKxuivB6Rw4C2Q5536U9qQzsm18cEGCN",
  "key29": "3QZyV8jj4P3RzWq1sUn7iDuGbdqM1x2bSiw1BJy5KsEbDwsaebPqydw1nSEYtiPk8G22C9WzkgGUNtGD4GFNBwa7",
  "key30": "KzRo6v1FpVYTvZ65PtRWjiYST1cU9wtVMeYSzNp1os2syQBM4h9JRgGruVWZfneJ8QKXkNbtxvupnvouhNJBS2o",
  "key31": "4pfycUsRijHHH4kRDktPGS5HMd7u5TNgtCvXZ8bEH5TJS9soYn33J4CEiqpHUWbvu4dDJJr84SA9nXRpg87a1QKo",
  "key32": "5Eqt4PL96tWRViUDFhFmx9djNbtzqSthtGSfm4Zf8P5rq4AiehFfpiHZ5kP13uTZootdpzsgwREHWniv2hp2nZWb",
  "key33": "injQA4c3XFxjHybcK5j13xTaS4s2Au6dNH1WfRojbrspK9kiFNxbKrKBJCiUtdh4ZMVnqboiHGrZ1rycb1yFLTf",
  "key34": "374vJKxSdrHK1kq6gqC131EJpP2EC6dpukrSEtBXiBWW9cLF7At7t5MowhSA9N2mUv48wmfJnVw8HuEjik2pKgTR",
  "key35": "3QMgwFhooPZRpjpoJikTYt4US1fNWkkSNHhWJamrHQtqxWVekjTL3d9SPKKfprMade7BUt2WMzk11QUWoKS2aDNy",
  "key36": "5mXx7hEiEEoctmPBhZjzSawWhkhjMgNMoX2DNRpYomDWZPA4jPBDotqzx3Hu56mXbrMEkFP89NErfvLMmSJs4w3L",
  "key37": "26tfkSWTxAvNMPF6oXAYuUEUeoyMnPW7fF3Mt82mUhYN3gpNFyyrH4F1aRL3HFfb57GmaxCWgX1mq5yScnipUGV3",
  "key38": "3XDHbYKSS4hmRewdQ9y4x8NqDpQQ9Njw2rjxkjZKSEeCMZi7UW8d1nnzhP3f2itLHCQzsYhGs1aUCK4bVF3tQrwu",
  "key39": "5hYPtkxvQqFhv7RwTAXHzZ9cShE2aXnmqULhUteg2B7oUSLGHFFykCc2NQQEutpdU8A5CEtnJDMgKLnpfZnrbQvQ",
  "key40": "3NpTVcHXZ2FD788S5uJ5H2dMuf8sHbFqVB856p44V3ybrc8AnByDHSgetqBZzkxoJr2zryfUBfvBCjjSVtKKZCc4",
  "key41": "5r5MKZiArndWRTLzt2d5usuxgUFeCd1F9kSXSsdz4eZqgYFZtkY1MG7s23duGJEiAKoVAn6T8GL9xdmwyKdwutTX",
  "key42": "43gLAb2gyZqcheaBHAtheSk1X3qGFSsTKsTchTDAdzJG8J3xDqCYB39muVUzMhqifmssLY9EaTEeJMnquqDPyR95",
  "key43": "4ngAfDQn9UdEHTbr5BfpgVrGjtgmTZRDWLfztESy5wf4eMB2e2VNuPY6wg8uJJ6Sn2FoE3QNyoL9gcRoLNk5bdMo",
  "key44": "4tWagsMPckDwyUUxhuxwTbKZabf2FFoF9ysAJmhEeoav8NiSBUTcuamYiVh216LBZ6yesahxaawUDVr3t93dWT3B",
  "key45": "3wZA9xaRTJRiQBnYW9sjY9LKYzwajzFEYek52tFoRFW3zc7QFX1rqFZz3k5Dr1zjawMXzejPVwbbiGGQWQKaiiwS",
  "key46": "2jJm2PvakKAbhJnkWMQhr93CP3N1jPhtTTmXZafXXkPczh59G2YSsxSsN9bqi1oj5tyMCGxHzKtFAG8FU4rqRkdd"
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
