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
    "MDh22rf5SREaWMvHHNSptLkJgYXLP7bjiHa6Lm3QmAqHYrth7Tk24zeKj4mVk8SkTb6HnMu4me4amAZ9SYiWMP9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AcKSC243HBYnVsthKDjkzNCcefqWVQFex1xC9xmXjc4ZLzoFy5thebTmxhrVRRsnrdCcqshvPEyuvUCCPjuoqtC",
  "key1": "485Ui7EWcJAjEiRzKyQVY38py6SZYe45htLeFEdWemqyBt8AYoaEDgtS9BofsrLnLaJBksVBzDPZDzf73bHjdZ1",
  "key2": "3BzqTsfq3Wbi8MaYLJdWBvGWD7n4SW9UsJLX8p6zCWK72wAV7xBaqCtQogUUYT9kmAeswof8mW4yhs9vubbTVyL2",
  "key3": "1hJP9krX661Uq4p8m2c2efn49HV5r5pb85fussdjV3PVUYu2ZeVJPhQUeUPA44euX3Mq2XJzTgXKUrTfhatYyrq",
  "key4": "5zCS3VKRmUcZwEPy9dMXBbkqgyJD63KrGwrmTn77vbNxMhQFniBnDh5o28CkUmtSxdYV8rj2FUtUF3GeE2snUuQW",
  "key5": "nfohz9H89Esd1p2zUcKZLUfxudo9WmznE28HnNhypNvtPSFh2xnuyGGamPeXpY2ZpqwvwyRjBqwJ2oT6z2twjZs",
  "key6": "R43DzC2zKxxtyuC4SwExCnXNSW3kuKy1FcASLiWaRHi4MHDJFjix1TLzm1xu4BXTZMd29UZkz3d3XTS3HZwB9s4",
  "key7": "2UcE2CJZqeixuqiadW3datGSkVSRDwqNAKLKYjDpVyDcHK6E62KbCFm2zY8vvRSecxbGogXUBcDTZXxC2rgGLYb7",
  "key8": "33jXFtBJY6VMheBaqiGTJ3RJYSyA5gfZ8kkrAL3q7sHYX2H6wUFr7yuJsoHiKBpHj1xDxEXFUJYk5mfTQu3uaeB1",
  "key9": "5QcaXQGxuwCoAZDFz4gW95924qo51Dtuf5MneWBQoUCycth7zL4Ef73VBmFTXSaakc8wfGQgRZoQAYF872YWHcLn",
  "key10": "5MRhPJS3dRc6TU3WJ9L4gweRnbpTfhgY9HoMxqXGJY41PZK2YiwZPKZ3r2R72WDMzySQ4GB5sKQVdu9AhY2TsLWW",
  "key11": "37gS3Gn7UtNMXitXTis2hoomCYG216WGBhR9dCjcr4jwr4d731gKvSYMnaa8XmZPxK5buY1Y9UfH1kWpHp58oBpC",
  "key12": "aXbosQdahr3BY1ZnT8QLeeypGiHT5r9gtX7ofEajtcUyErv1gz4Y5f4L3rF6BgrXgd6HzFTVQUFB7Le1Cvn2Uqn",
  "key13": "XXXTVNBai99yTQy51SkDw8BJbr7y1Y7K4VR4DaZhoW5KRHJZvjAD4GzynupQX4NobVoEZv7XAZAdq9KFVKkiu56",
  "key14": "3LHm6NJCrdsPiVPLQ9RWSB4pHAwh1aaePYYNg4Tm45ahWEmGoqu9rj1PHaocxzEpA9pHCzLBmwejnCYCA56z57EE",
  "key15": "497ccACxnvvBM9kDcZybztrJpc5XrnHwW9fBcK6s33ZAJkntp7vrionscQQfV3t5jcrEuGgmNrHio8DX8sawsDLe",
  "key16": "2JTJKLdvdoBUUbzFzxSSfkimmoJXMNYHexfdLV8W8XGGkCcJBSGtDd6dyx8ca9831eXQjQhVd7Xn75Beck6Ytvbh",
  "key17": "S7oewFDBsE3fsr9VBnoHsYbBhRyuXLoADkHGo24XfV7DKTKg68z2ramPfNyQqvyTJPz75aJmcuEdQBS6yk7u9Mx",
  "key18": "27FJ3QYFZYiWojr6QY8hXkjDQULREtvnZazrv1PG3eDQxiFeM3xCqv8ssipacma1oPeWL8J5TkJoK5xaH2trv1oa",
  "key19": "8m3xoaUkBJrCVQLgEqxzc8HitfVnGvb8YZyXbmhFqiRfLZyrxXCNkBs3PCbGwZ9hnQLaMbTxqVqM4Kj2kSZir4Q",
  "key20": "3Q7WRuXo9nMvWec7BeW6qE7SJD7g46B53RM5fVu4HDcT7hZysqEg15a51LJng36UnNDDSaPY6y5q6N7s3UK5xAiK",
  "key21": "3xAjjKmTuKoAejkhzpdnePjuZa73ktQL4hTiHELhC2YDQ3t3opExupbsQ51MucpnHud5w4ogK1bmfuDFr9wfmX61",
  "key22": "2A49mmLRFxpG6pSs7VK2CcffEiQZZLBYMMBVMUX32WbTXV7FtRUYyGxMPLB8dXzBuXC2xWS2vFVPcgGhi5hunkZK",
  "key23": "2UGcZmspwRgfDQymbCMQQvNovUesdtuKDzgiBZP8WqWsgTxCYWg8uKAjmtn8V8Jvyb4XyXK4PLGnv7dGxH5TYMzC",
  "key24": "3oC1tDqNRQknhRhGvEPGjiSjghDyMmNZdDoy18HPdMD6RhZdJUdq9mLRB6EJfM83vrkjgkoQNAjAN9PcvpRQhu3e",
  "key25": "5GT1hp7GFVcHTFju9sXpRzXcR2Dv4X7h33nKijppj3rJS5D2S5YazyiDJHYhEm5vMmwBdhtu16tR4aa7ZZnbDFaP",
  "key26": "3wTi2GHCZd7MsKZHyJ9qif9riNp3LxwgyJYSSX6g1dM8QhLVKdYhns7U8G699TGmR3RSDm6nATGBkt6D6aKusW1w",
  "key27": "3syRtLajnwEQBP3z1snVe4cA8EjTrJaXvahtWbgRYxPv4jRsHT3avx2PhiYbaHJ5drmhAuUXN7gsKKNgYVcgdyCy",
  "key28": "2b67ZZZoB8KNNAZaZLGmzEFgfugn31VLGFozgk1L4sK5orM6g86kHViGFibmQ9RNUp2WdAT54ZNHWqqWBCL4pxkn",
  "key29": "3RWTB917zN6s1f1FQp5q9R9fwxQ2Jpb5R21rW7Y3N3n4Vf3JSwyBtQ7weMcFSXqHPv1py4V1SSa5LQLxqfSTwjMD",
  "key30": "2zye4BQy2txmFxCjzEvBSTVyiwo8LVSmBGzmsgH61nkiZCLKSCassbbynqqbCxqtLhVHmycr8FyHtoMdZBMYqiEy",
  "key31": "WRozRmVaVYUGZg2vrrvxjEns6PCE8ghztCjGxxpM71gvFHT8kH9fPAAxnGjFU98DUgJ3XLjN7pvYB4ryx8pT2i6",
  "key32": "MYvok4BH7UnEMsdwJyK1Qyg3tUHgXRkoGkVCHsKia4nXiEdr8vX88bCdfkMKJ9ansQEQe5n9jv7QyBnPN17KJiQ",
  "key33": "55HdHdpWW6x7FbVzixhgJYeUWTT19CFPC9KAZ1Hzo48BCDzn9SFsHSLNkwc5oK5G9uZJtNgEFiGmKtvH8sHQRQyN",
  "key34": "49dTtgSzhpNF6ouohJUkc9X9NzczbKa6WadTBkFSEewgnW4cL9MLuWwWpctJ62BTGuoMB7FjATnyyyNbAhhVMF3m",
  "key35": "22iM8H1FtTF1ckzceDxpGtmit237DNuQcPUV4i4xp8Ej8cx9BzkDVhm9nMB31BSfRAysQmCcNtspPTTf8PA58b4E",
  "key36": "nNmxKwxZ4598edJHb59poSuQv7uSw842rhvnp8MwCBm8zNPNCBbNSrU7762vG3uKKyAKUXFekeLjjDcMNjNtZwQ",
  "key37": "BtbtEhDpeEQJFXDkkbtdkbbT8puJwdJsHo9fQ4gngEL9832A7FAzPm9EULEcgQR6WSbWgqJC1uUinuRB6Jt4XUa",
  "key38": "5Ped4F68ZPng9JNJRMAdAf6Xg1vsEVqxhSvPD3w7UwaHh1SRbXLfiPDJg1ZzbfnyV2f8aU1xTtzYVLYu9U3uNw23",
  "key39": "2GmmzMa7XuEZxv1Wjx33nxNWgazduHiJXtFWXcLQTyW7Fq3Q1veDAByXoz3vxr4qUjfWKu1ifnge8o6USKm5x3KA",
  "key40": "c7tdEtHMibWQWANTepeWfQvutykpfDuFyfrLbeHgFxWApud2b4m3xZ5u8bAwvKcJM6ZiRtMkZW7Vn15FdW8YUE2",
  "key41": "CxzKQGUWRbs4D3GvD94qo12YdmX8dJkDXDQfTrgocQx2a32cNCmixGC738cUZ11jguEd6n2pjqTrrbZHijZ7zkp",
  "key42": "3axT4b1BWtXFBkTi44DP4Ct5owAqoQQZNSqVaDHKUvD3sQtAPvZEPPGgtieMzQ7xW9hg9znWuNU37X4uxsovVrcP",
  "key43": "643SWJnHvhea3M4jeCcaHVquYckZ4JwQzxqCzZ3rL1XAk3uPa5wWvWfqtHbBRQx1Pw5VVebksLAVRaqevf6aH7Tr",
  "key44": "3SFnYThYxrvLH8uJv7cUuK9M8qn6o8NYq8fTe56ntAE6k6SW33HwNAU8feh2X6Cb1AioWq57EPdN5GS1iGvXQcu2",
  "key45": "5hU3aXhdLimHvn3eqFLmkrGujrgrhpGwQeSLy8fNzJQnb5Cj8v5Sp51AeYTaz7yTbRW9CLwgUPMNScTDotNtS7GD",
  "key46": "6265xhFCW7nKUSNnnb7WcJcNevomZeZe4FCek91tg7JUmsrdBsAPHSuFw5o7TuBbT8fHbmmT9g58QCvG29j9PkFg"
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
