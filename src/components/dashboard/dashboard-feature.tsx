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
    "2T4BcqGLiPrbe31A3m8eGvMjxQ8XJrWA4raA84dFLLj2a6XJxNU3WFfyscBoaooSV4FjjGffNzm31a1dxm4iisu8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZNt5oKN4eCf9zUR6famnVDS7xphcqz9LAaLSRi3PC1f4MHsjqTrfw9xv9evKxNcgReB8jC7FzLTXxsUZhq5qNj8",
  "key1": "5NrV4xhFky1db1XVDeufceV8U6bFykLin1RXwQqtkf6foqUjXEvVdxsq97doD212z3FAMWF1ESESC8p2aBXAJVJC",
  "key2": "2Y2ND2MoZK7vU1ybPSt1DnfjXNqhTqwV6LmaYcQuX6EBaqb8YUSZg6ejvPiNZxPjZ1d9M7xSR8goKnmQ2Jmgeyev",
  "key3": "34MbigjfzzwGXAqPq8eeDBj6F2WcmSN3iuz7c4qX6QvH52Fxcvv1roTc94ogHSYaEqzz4LxLsK2YmPSbfoxmYmbz",
  "key4": "2votJ8urwUUFXQr2vFwEusscSi23r3rwsMaY8QCFU5D4KrAuqQwEDFxjkzxdFVGbsUsvNQ3EzpRdaY79mhW3RzSm",
  "key5": "5rZBe1rdQNx54nAdVpsrNaN8xhSZUxfeMoqEppht8Xcki533BkrDtso8JQ4X8svxe47VoSNzGDE44BgJfLoT5UES",
  "key6": "N9QbcSqKiyz7coCrPVnSrRtcPQE4pNjTUjNHsj4jiaMsfCK8BkD6hJzs23hh9knedqNNrnmZwvPC6euM76c5hu7",
  "key7": "4xJ52hTewsmQtxchrLooa5bw7oxF9nj75B359wMdjoowtQ7JpxZeafoxmmHWSjahp1bDiLe2bowrYfD8cWs6QrA",
  "key8": "2rXaQ6cGfHWZWjKBTmFTQxuPtptx6w9iqZhGwwHVjm7X2nnCJ6e9gKh7qKB397svUuKNTUpRCECwvHXb38aDMXMB",
  "key9": "4FH5SWEMg1cKPTRx7Namktpgpx5ArLsqZyzqrz6KR6yUmUigr26teYGunJnwvxk53jHqevXWmYcUQyJrHhCqmvxV",
  "key10": "3SMC1gSwwqsoDAWAjg66RFdFRrumBtQoJ1NYAXTuwX3oQsPt1Znu39iGT2zbMzydh18LjrChATqEJVCVbNEvZmiH",
  "key11": "7bvbBQVbEJ7eqgxzGG8fFz8gpzNTRQb5JBbpk3ZXB6f2qqwpzJLQ8NTfnHfh4bWb3dDXQxwAYPGj13GMSCLJ3db",
  "key12": "51BgVD9CFN3vbXL7niEnRK1C7EDkdegNXsR6ayaZY5wLdW7CyrkH6GJEaYJ9ASJzCQpfW8y7QKXvBpgHiA4J5T3d",
  "key13": "2gnh6kdZyMZDCAkWijgatEGE4VSqBrzzfZniYPM7T3MiFuPtdQtMPHc9m4ryZaBuUTLtDCcW5jfGARA14LnMJcAG",
  "key14": "dyr8HbcCf77f8zK9QRWnFsRpk9Mta9TvkX6wxeKnbBYPeS4vjx3DLvSAyHhYGdE6CpdAyMeR3WqUsX8YiBGQMkp",
  "key15": "5h8cTfqzpKjw9H6Sh9M1EsULZCVon7Rd87ducjKJf6BbNHNuM7j8cbyF4aRvWTiEh3LvdRDqrc89sHLeV6sog3Ug",
  "key16": "ijtEDUM9sX2ZUNDvrXhaHEQkU5oixVMDpEABmzacGqCwM2imwveo2W2Td1ov9Gepv6XYa6ngKGMnDRRqjDVSGAE",
  "key17": "2QLeXjZB4Gsqmqka3FtVBCdM2NY4tWMHYc9nPseVnzZzjTt94kMSQgYsXwDBUyCWVUUcLCjQLtLfwTztAMknK6pB",
  "key18": "555fx6c3ZbWZMY317zoGXJrgG8a9tG52DSf6ybA85F2kiPKqZ1Z81ZbiuuFVPqkGrUp2wk6wfQRkHsd33KjYmoEd",
  "key19": "3MZCTd8JFMCNRBNR6WFraXG2PdJRB6buoP5PwtzJ3gcWXkCTJmFUZuzu7JesMCUfLnZB4146hbVEF3ZTyVcQzJk8",
  "key20": "4ygTpzDt35QfK7akz2Q3omg1HA3aSz1eADRpLeLWGy2fEvDcKv5Gz6pger9ii5XGDE3X1Qsit9AKLT4pN6EyeVtK",
  "key21": "4DVuTC5xnS52nv14b5TJYMCg1FsbYkMoUgw7pPhpNQdUvdouWSBzMtqNNEWBvBXhNjzxMovnjMRJHZhRN7EokqmC",
  "key22": "2DRPVK3atZfBVAHndtV6vFe9EeeNtTPUJXt8DG8CKzbAWC8aB4LqN5mZPSy4Hp9BhRmigsxSX2YvkW1oN5yMfCFC",
  "key23": "5G2BFiowzoCgmsjymvGCGuANYb25tbDLih6yy6wpytyssyxaTpZDkuYPycgSK3MNMrBGG4idc8BTa7hHU2f1MYw4",
  "key24": "3i3D4VGABpPQPU7Feo2AS5wsggcSNK658XpyJiQq5E5U8KsCUvcR3akh5UVDXBwWBsuroy47hci7L2jXrYxpiM2J",
  "key25": "5PdqjrXC4WBFoC6CQ9mPw7rkcbFkeyDDGW4k5nKWc6GQHHVeveE7pqXvcSsm8wnpprt1WW811sKHUSnR1vQz1HB8",
  "key26": "4eQUxnuvPtzDBrWMmVYKLiZr9udnbaF3nUFQ4J1NvubMiTdFj4Ar3DDwg9qe3nJVpSpkexodCLzmHn1mRPsjF7M",
  "key27": "4X2xXJf3T5JjmUkmtDoGoefM7cyXc2BXyk6ktTvkdp3yNuwaBprDdxewvivmibki8HE7qqecWrRduQ9SPXPvJAJN",
  "key28": "WC1mqCpxtWN27w1Xbwegg7fRhrpg2S8z8d7f4fE1hP9eDCM1yzSR9wcTxpUUgSnybhkDJ8rxfXjPQBekbxBzNYm",
  "key29": "4pVgZP7szXJznvzvkwNacHN763Pe9zHnX2B3Tdy7VtErauMBLHFxcxaG7qAroLBeh21bLEfcpMXKvqdazaVZoHSn",
  "key30": "5eB6Jgum6iuohHjpCNfSKMs2sLFy9iRM9aeTuMk6UMRip4yxcFjSDSxEN3nuX12VqZzKYV6EuRWeK7mKBjR1QDsm",
  "key31": "5FttEp4zEZ8qgBv88pa7jay23wjEikR6M7os7AFKyDuipCv6Nnrnss4rf5oTD9YPoPVaye3NgEW4t6QiZgqo5PN3",
  "key32": "2bj4qFaq91gDqCfBeS683DjexCmUwzvobj4QvXwea526GENxAR7i2SaeQoopt5jxrazWxnYNc3MdfZu5yvDyVVXC",
  "key33": "5JUBhgrdkNp3buTaZfHD5YVRUCi6RqFceFyN3ZjcVcEKkXJCqJyaBrmZFrzey8pr7Dxeb7Jjd7rgNd59y3V22Vb1",
  "key34": "5FYARJgKg8G8o6qS8BZ67SDGRaHEjzZCEwroLwZ9QjkmRkjk13jg9EbdvvQ7VCEQksZtFccEiRoGZB7iSLinLDDb",
  "key35": "5R6nKoAxwaEMGfjS23rKmfYGoGrbL9Z2T9ENSPcL1CNwYKk91mzDM6unx9dShnXBS9gCyTEGnaZuG5AyQjbp6cBS",
  "key36": "5X6zx3o8X6pQ475JY7d5ic88tbuoFMhbWrUxrfy5gyoNAXbBUzJXEn54B3YXKBBHiTi3nNwXvcieyHQMoFfoARc3",
  "key37": "4EHqBaS5caiQLXHDnsUpKQDvGiAorqHhTHCxmvQVbtFMcGbcccGMmmSNo5kZ78e1cond6qppUQQoZ1qeza5VLGS5",
  "key38": "24qQVaZQGkX2jM892rMkE9BZHGqi4QYW8u7FfGcKBJrRoXYupRr3F25bJi2jpTESQfrZZR7CyVPbvjDWUED19vtq",
  "key39": "2wNzeCp1wRyKQFRaLf5odAoGMjki38FtpR2XsKSQfMaYcv7h6mrrPycResZtKZ85J2pG2f2Gd2pDmTe9dSn84LfB",
  "key40": "jwPNMpwPVKw7nyPRNUXSkJ1TcAcTSvro8rK3Fo6jMG12xpVZqytBcgF5v1phHn8qJWY5tJCzFHnWZgHxa9fpSDB",
  "key41": "58jHNZcM9UndXbiwoQfcYH6M49k3DFgAc3T4vnNGAjihDBu7kn2oPNuL1dQW5nUrp89PoqJk9Ra2ZNhGmGGApUzq",
  "key42": "4E6uFLZDDAaPD1oEVizyAerqfLQv9DqDdci7jhb2ecEe1G3frQW33i3N2k1JqKL296wqrFsjM99zAeBGAyvACiCs",
  "key43": "3rhqrTohPeaN2bXp9VYUmKYGG26pN8jgDxoPRengg4hnMpDSztQsAsswzjYp5GtKdtEMAPBcowpgUe8Hty1QukQV",
  "key44": "3iTXr4S8ofrRga13KE9Bn2PCDRzAcdAB8VxyFg2PqiNuKLv7bNzRSJEPzXKjt2iTmVWd4H24TNHZiRvnXV67v12N",
  "key45": "5u8aFxS4785cH5GhpcgfB9f5PeEjj2x3kZ7GVUbazxt2R5UMFahmXmtKtaeJJCxms354rKEancNSw6hkwN6hAMji",
  "key46": "4RhWJrcy63AdcEeKZCQhGvFPutR8CkYPB8t2HXFPRUcBajwH1wFhdJ54rzFes4Tpo1RNjA9CoM2AHsEsmnwAZQux",
  "key47": "3hkVffo1AcGvJKRwnEiuf6QPRhZjjDG8F2fMLxgKWQHUddQUVRK3rM25KpquapZgKYMeGXYM66XPLm7ruBvVUszf"
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
