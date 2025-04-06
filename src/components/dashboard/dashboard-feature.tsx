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
    "5jBQhcQwm4K8vqSWRrzSZy3rrxv6Kzu7ky9LfqckrRDAJe3noWownnEzcPcjr2WRvYS7ebBJANCXKkc5SVReFF7p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y993tWemsZa5qFFxq5i8YU8Zbym4mdxcP9HkXPn8VT9Gs5JWK5sH2Wwy4EfhuVxDNGw3Ecr4HHButhbtzGbE3MJ",
  "key1": "GNmpi6hthayfN4fp4N1pUzT2fakDWf4HqqXHyjJqJ1xT3Gp6XpdDHAPNCCGY9BXqifN9SyoZuQrwXpLhLZPMTt5",
  "key2": "4E8HpnQa517fogdB2a9n9Z3auPVr2P8o7QRjzAA7Fhgep86gFcPDjSe7xom6EqoLXMyYN21mULCzVbJY7xxmYi5i",
  "key3": "5uTU83SbGR2pippLtaRtkSQjgHVUGineW1sX5rMKG9BK4sLdf9fqHQZUqcSDVNDNpCnqVx6KDW5JYsMxjKzmamsp",
  "key4": "ch22tbKBn8Ee6tfCAtbVhtM8uHxSq4VTHZSy5DALTAff4SMAhwvdbdCMRzxbDstNcYUSymCfrnBnpsTxepUfEv5",
  "key5": "5g7bCWPMt7kNN9LvLjXEduebKSQCtRHfKEYH97afxtN9kkKGJX45yasFWysRduRfWofuxHDBF6dQiJcy7iaxqWHo",
  "key6": "4oT9HE3MNQvtmj4u64ZzJ7RRvQXYKx9zM3AxtjnGDCRphkM2VuuAfXeCqwS5SVpxwYbuN77JEXEw2jmNDSJoRpQH",
  "key7": "4VRfMZEDeTpoKn7hVttRTNZRY9oRWgQyWEwCmnAxV9pbT97N6fTKjxctb2oSMKPdujUarmx5D6bTVbEJkqa349Dr",
  "key8": "5xXVXdic2dmdkg7oLKG74gdZ3oKJ5qgrxJzYyCF3UcjhQpauqDGqtfehBXC8dCsVAKP8fgLvXvb99dAFfX51Arbt",
  "key9": "3PmbKTiMaPXJr3scc3uxwfvihckb5ARKGNpkeR7NEPFxETKVZHi2osFxJ5NhaAB1PSmPVQmzrxC6issoHLsDPVL8",
  "key10": "53kCNnXMERDCoC42G91csreYEimatp31ZPhwKHKHc1fs829Qw7Q6vGWNZ4fHd9jqhtXp8ymWcsxQKcdFbpwP6bZF",
  "key11": "1vjrFEguwsjzCrqxWmTkudiduz1BtUAT5sZDi5nyH4LtuCuHeMdWU6m34RWiRnmyx2s4KEdfBdJQ6rKLceYcnHT",
  "key12": "5ScY3Rqmdehr8yCM5syVBd6hwzz65LtnXFjqqjEktRW6RcNAKTGL8MSViZwk7YnyK7ryzV21QhGeaodcVUwb1m9i",
  "key13": "2qSJNatz3P57Wfgdpukzi5aybjMdxuMLtvroGdGBwCb6owidkKGEfZCxPtP8YhHcFKmPK1T9bxNow1PQ6NYGj39K",
  "key14": "HpieQL7Kzb21YZLQb6UYNJSqjkq69QKSyW6eNtTiN1cXZhsgXt76bnQ92sBzrPHyeoZxxnoTqPU7Z6Ax3ECPvyK",
  "key15": "27TBV2mSVemZRUwsd7Uh4uaQwEBNp5h3CV496uVBQofqFw8nkDmCXAF2tVnQSkdY7ShPJXubmzF444AynjwcbMyc",
  "key16": "2DYAuBdRurdSVfbQxrTAmcVvGP55bJdpBrUhjzuxL6H2FpqUg9k3k9qnTdHNdVw5j9fJtDCd2bJcecaUwdfSFCuj",
  "key17": "4qS9edELhcn4H7ejMre1Wv516CZ7cjJyWPQEsjcUKc3AjouBWa2HLaz5pUR3j6Xg8FgtSurJJbrCyf3FsPKqhKyo",
  "key18": "58EyDPhfCxzLB63s22PKmWT4LRwXacDSXCKfKppUZDXtFp9DcKtQeKMPZPf3tFiGnNvD7eFENt7dK1hPHe8nLQbo",
  "key19": "4LWEiZQZJh1ysNUyxxEoa6AcfTxojpYdq4XFUNUs76gf7KHo1D7ZHtH412GjFP5QASaWj3YbDJQah58uYPGXHX9B",
  "key20": "34YAfK1SRohBdFomPiRLeQNUPJFHSmW4fssX8HustzNYwr6nUop8T17xBLGEi6E2sPFK5CyDsC3b6usCCKWk5uSa",
  "key21": "2mzhpeSGbDWPcEigayezjTxBpDnHajekAZmAcrBjdyKTL9o32ANwecLa1TcSKcdB2699AiyxxVx6bk5NL5kEY7uC",
  "key22": "2NzqWUBeWkDY6wcKDKonNxVXrWQBbRgXKE1uZabZtN5BXKB9zsT4WEuKvsLPrCedWM5qQV5x5yRpp4SCiJhNrrzh",
  "key23": "sx7mGG7RHRgvxPah6ohkBRL7D1G1K6g6Eg5qA3gKXLwtdodtFTXvbsUe9T2swXdxcjhgnwqYP9esQQ8Cm9LMpi5",
  "key24": "45o5NhviLDvwFXjABA1mifxpCk5AbY8aGwMYSwPaTVvVyvDdDN3Qkna3hRxa6rMqys3Ng52XQsk2YUn164V5tWMf",
  "key25": "VQPbp8R9BgdjPKMSP1Qrh69hFbsYZXqeLK6T6VKUQFRgBbLQh8sYicDVDMV8gYRoxH1EZiNgJcYxwkXcg9JbV1b",
  "key26": "3YX1Dsba115Wv7W9zZruPmoYRHfLbjrJheHNSkdGkkADHhPovC4EnJVE5jYoxWbFCtcuDWnrqXyGa6WJ8dmq9qGh",
  "key27": "xNPSKX6ShTF6svVDb1ehgodYwPAj5W24QqgbToefRpfWtPsou3J7X7NatwXqUHEbkagEaH1M8Mkw5pRg2g1o772",
  "key28": "5NzLLWMgXTnREKjFxqRFhdQ3ySXP2AkjUrWHqpfEoK5YEMC2QegFvfaK12qCSf2i9Xn8LJQVVn9TacM59zTjpYBX",
  "key29": "4idckhB5fZ5rbAcEvahFJzxpf8Nnqp5DXn8p7x12DQ4CpKMYH39vB5RC7QDaqQSokECCeiKpg5cZfiAZJME1Uah3",
  "key30": "2cqUSSSNWLNJk9QbKD1mQRen1yHuSeK47UCuUTm4ufgos9Xn238wyoVd98GEhoZmriUi4pFzQGEajnKaeXYNMXQm",
  "key31": "4NpxTrQtRUdaLCJkWbcve7QWaswsx7i8wmJTea64nPwuKAZPfAQ3GnS3e8W8ry6E8SJTy9zFn1zfDAjtmVS99Hoe",
  "key32": "5XeTZUYueyF3YDjTVzEhVt4b8vvX8CH7yvfBYL9KrSANoqsYKzM5oUi5HWAd2mi675o8WUopxirtjeEx9KiLZDuo",
  "key33": "3YzJvz8GxpRwPknX6rei5BuLwoGfqNYdQHBZMLFRUeM5SQzkKvVEhXqsP51tLcPt4ydpCjJRPS6yR8RaK9tVHKiS",
  "key34": "3Pk3EgGvAPfbkCHNw9TDHuEkwBuH2ecib2Pzd1hVtFdtFtZJarMtJND3dHDXHAwyvQGP4MgTyd1XMXmYU27bbiCr",
  "key35": "JJgQaMZeqb9GerqWkKQea2V9LyjXFKNNYQNNb85q7xemyb8rSTSqqE9cxbFQ427mh5ZnhukDkgMEbmZGp6ysxPZ",
  "key36": "3iGuroJPWriAwBopa3Ym1siQqYuiad6CUkojxUCZKdsrarLLjQ8W4WrJDSPSmCvMMeXbHNszjPXUm2N4K6XjwsNv",
  "key37": "4dPbevrZwgdwYHPjq4SmiH5Znibt3JwH55D7ZPbBNE6SgGz4wnsdrdQ5ANSk1d3ZFzf1jQeRuphvmdvuX6tnxx7m",
  "key38": "2ZFguSXq4f1VXaSKewhDgdzUK5rkmMgWnariwMpBvV7KX1xUTZjpPvNzx9pzZAByqyTX4nqWqFUEd9L7EgnUVyfk",
  "key39": "5bDd4acJLfFyC38Nfkmcscd8WrHemc6ChouTe6ivUvDRZFyHWbkJediSVnQeQB7i3Gn2qL4rDcHE2gVUdyCiPiZ8",
  "key40": "4HC5AzL29Upn9TJFX3wMx8HtMsUwTveCojw9h2K75GCDBsiSPA7zdJh3MAn5JzaN3efjUhoxyeyEsYMfoNmc53NJ",
  "key41": "3c34zRCm1b1X7ENVd6r4inzaCB4JPH8cxhH42HaX9SkTKE3Kw1S71jD4km7gSgkRvaYd5qmkUEeS75iBhsEEUQC7",
  "key42": "552oAQL49CdqUcnTeqnvKuT3FuhRM42euef7NHzpnhoL5DspgFzGqBDNQAJz6upabdTKSY2upybUctVTLnZJ1b69",
  "key43": "4UTSCCowUqn1oDRAoWh1XCxeqbm2mvgmsXkuYbKgTCUtBebADQjmSRVfRuc1UGxVrtGDxMgnHEKwR5Q1P9xSS96M",
  "key44": "YFLtasM1ne1aH84akGEnWdTZxCASBRvVBEVqDYw2ayuJ1T1JvNnfqMin22p3BTuMVW8eLHQhhYMfjDHH1qAuSoy",
  "key45": "4qx8N5o27zawx95ggsbkKsWtyYGpuGH9xyTGLEM6sV8TGMAdBzsU9EjckH1y55S4JhfqpLpchojFbysiCp2Rywns",
  "key46": "4GDC9vW3q4UoPKnuS3gaR2an83oC8NsZdN2tZEu1VqTQ26vxdA3sh6hsMgfdnWq3dznDsEac7E1pDALM54GMR8fQ",
  "key47": "5xfjRU7UHG2XKNAFBnAdMdA1fi8DxK9qEoQCZH4kbBqDzhNs59Y2H71S28HrWfqw5NxYmu4KJuGQUDRUCDhrAcAn",
  "key48": "4a5tBiEyZBjSrDaP9qjH5mpQkr5Hm2DRysQBpUbEkz2zfmGu3KFLbdmtkvhMPxjy7BbVC7SR8juT1SQtWPcUw4j2",
  "key49": "3W1nifcQp6BkryteAXScSm4JxTXCXXVVJcYTm4fpXRzCXeTELv8EzWHqH5FYh45XtgiWAvz5Xjn6VtFpJKTM3aj2"
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
