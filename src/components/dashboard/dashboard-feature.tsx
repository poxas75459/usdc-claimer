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
    "3AXcnUP3VbXWkbjbasCEUKELz9i7DQsxaX9Xw9ojwSUriEeWWMYHEzMG9YgD1ud4rUVGy9nAoZu9cybsn6p66wTP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RH5puDSiq7ZDcB1PNa1VJQZP4UmguGceRTG2NombShHkmYBcDeJ8mhs1eBWN172ANaj6WtwyUixRMPJowFDbNzu",
  "key1": "5SCm5Eh3dgLDRejgDDW98J3yCJZe7JMmmoZu9v2vjZZtpejJFBXNhNouzRpEdyvb7p6Kevt98verh41kqdaJYenM",
  "key2": "5DKWXykPFve1b5ZZByyWDVvfm35hb5g2fbX86YZmgN8FhjoczqsfCVSKXfFcnYqmAjLXc3Rp3jcSmC6QGLxyde4t",
  "key3": "2EQz3P2KW9brotEQgJmDBDDmXzCtTo3BV7HPKDZ4CQa7ERft25gb5qSxhqe6WmhKGmsJzyftnswPUY6gk9qsRYvZ",
  "key4": "hksr2qRpk2KP5sWz2okuRuMw6rg5uigHP7kv9iHtDHA39yWTbRbpb72JQjZSW7Hvfwv7D2GBbVBrLdrpCzN4Hvd",
  "key5": "522Nqpk6yMW8Ru45Yg1pbtqAB78Db2CDPMTEoGCWVvachCMvptsygmA8v4H2YR85hkhFZc8YcY5kgPSTA3fJTpb6",
  "key6": "58wi5g7zaCgEaJNTR7E7NintY3kfeufx8cyyHH1pfUz3Hjn5pkfXWFetPt4mWAL1LWkg6C8hftYQ4wiHH36xUYUF",
  "key7": "39gCM55NBT5FkaXEvV6MA4xYjLC9UEGPysrsHF2SPHLdx58Rma4d91PhgwtbsFPa84XKCvaFe82QCLXCVLJc4Htw",
  "key8": "2cJuJmKT7t4DHWQMwDKkv4C9ekn4qNSeJAbXWziqp2PsT1wyNwiSef8Bgu19FsudsCvfftj8sYqLXXY7JT7z69Ek",
  "key9": "4pBHCKotqcJZZHLNb4pASLabZy3pRitVbGEAF63fCFZXvFS2VrvFVy8Vvs9mw8tqtgyFpXAfQtFLfAPt37ntqe98",
  "key10": "2ozV3b9UtAidgGMS8NEAwgmyMBm8CKVvCEHKA4SoeiWSQf26RGaniXXMbHv1zvdz38Fd6cAL7gxP4828oiBGvdYu",
  "key11": "3EnyFxWZXqWR3FUBrs2zre4kbEWhePccmb4fcHxH41yCjGWvMD7iucTLypS9VYiAeH8VtXBdQSHP5nrm5hms8Qi4",
  "key12": "z3Hj2LeV23txojzcmHjiZpp3H9pUuopEJUk36hHYgouY3fGLe5tPWSbLjTjaM3vA1JaGHjAyq2UVZeYHXreStVY",
  "key13": "3S1fsnQYbigCZa2ZcvWAxygij61cvcHFYiNKvMB2L6q4oci8eQUKxj9cHfyAdqg7CxYN9ucDBdLCfKZK4QQnCQ87",
  "key14": "4v9ez1wHhaWZiwdTfF5J4mhTnyHQRkKtuhg8tdDjp1qCqfx5N8d2dsxp6njBUikKbGUy2Co4xFJ91ALBpKgqXZJe",
  "key15": "2gUBk51SW82w9JkR8KnXWda7xHh3cbmfNidtxRgvGfBowDAQCUfhU8B9EaiY37K5Loys6kHSfjF4qRR1fMcuQTs1",
  "key16": "3f1dCTqjTSroR6qpsB91bPwWty5U21d3hb5QdazCfab9xXUBGMHLpFiSgT6jyxgGeCEqe23mjpGcpHREbtfb51pm",
  "key17": "2QfwcfZ3Hk2pvfDLL4DFLg7wVUjoxbZuoabDaSfuDNpWp1JfYcGi1kjgijFgCZKZxAKW3tVaXLojK4yTu2XwNLp2",
  "key18": "UnxqhatBBqMdKucUJDHJMnZGb9cnbfq5DmyvUCdPjXJFFzUzNHys4DXwcFvVmZxuyT6H6n32ZzfZnW9dRkuhR63",
  "key19": "4yRT95DyLcfeVX5Kvv5iiSS4biuu5k4TnQ3ZXVf9XRFeiBqpH1MKsBuBnwqrubeS4ehS1wCC8AqMtLospPjeqkk4",
  "key20": "UzrNQ4Fz56nPXs8UudG68CPst5wDYQfDS4WifDUeqWZiHBHHSVGAgJZpRjrtM1C1Mtmcu7Kuc62MEwdqd56Gofr",
  "key21": "3iNjcmLUTptLaFn68BGnJpzx1pgJMb8AaFZ7m2gtgaoFaK8DTR71QXtv18gc23tB8nDF8QL3GwRSRKSjn2F4n7qK",
  "key22": "2pjmbJ5CuonQ7yi8u9aYmWJLKKAfP8PQAJBNUtCZnpTRpLpPnKAVeeooXhcLqymyAR138kDBQmVWrd9xuhMRSrxh",
  "key23": "28o1ez43BC47mPXfYwLhyNnEjbreWKMvgQUjHB5nLFdKsExdjxHAof7NR9YdHFAy6M4DVBWuNtZBjuv5PJVuwT1h",
  "key24": "2se3E6csnmqsqrenfoH29fciejMuaQwFAxisFnhbZELJdm3TrJdD4AgMN5QT1qnmRjwkxPNk3nQR1FxY42TQE7jT",
  "key25": "2eXQrQeiigB4qhVMafWeRvKVuYsJ9aKNitPrh7oPAPGnk57zkb3NjHCEghS6R8NqLWbH5FkXPB4c969xLwsoCHgo",
  "key26": "3gNx1Z4s2aBm55UfQNjq6hwKLvZQTEcS6UPuCh6YzUiqF17B8Uw4Wy4tkTt8W6eBS79SKVtB6BTpyrnrpM21DcYk",
  "key27": "F5rrECDFdUjFMsmacjTnCpv8rZfyNxjtAMe8z5Qc7H6diCuXQEdgqDJtSaSQURiQqoJpLYrL7V7UdhsjUik5Jj1",
  "key28": "FAHjoqYVANt2AtE2yfHsG81fsjwhCTRXqaSM2rsYAW4PhyhAs3Mh274WG5L3i8sZCQxWK7xd7qgqwSz9ejj7paD",
  "key29": "QPjBjDPW5muRZa2CbUCM5SS8aBjBbvruzX3NLWkwc7qMsVpHtH114FQazqAwKxouY3NCDgPK6313C9XTMEuXtGg",
  "key30": "4Rpb83Y4TozJRks8Mz1Hk7Xn3h1qYiK9ouUEdAHfW9jJC7noB1uYZDMmAyJShwtcfGvBbHzQhYhPs7r6AK7dbMVK",
  "key31": "23tPqiALsiHTqYanwRmCQPzUPmjo49Uw39jMwXWdypqQguMMUfNN1cehDX9vq4HDZqARbr1LKuWuNavMzYE7hZEM",
  "key32": "2HC2MBKhhZTpsugqFXjjDJKgC1xpxbk7Hgdccn2MssW6FASDnpo2KzRV4oyEkjTMDJeNsWge1yx2AmbfstuBNafW",
  "key33": "31xYfL2iFAp2mP6a14cLKeveqLNu6itkkmE4mZmTeYxiL2ixSSr57xn76VnxRxWDtLFUyhPakKMeZvG8i7ipKWgG",
  "key34": "3MM7LKac37UsRNp4cMY89SqXfZMhFKY11g5PtR5teqerra1nD9eSMM3T8fVodirC84RgyyuAq9w3VeRQ6rduKYor",
  "key35": "4jPMbZ62a9NJAc5Dee3GRLnsihGD9B2EAYDzHJwBy1KMyLCWF9tZy4fxcyc687yv2vSuSagBuBfvo4jcfmSni1xB",
  "key36": "3ByuAXivaCN1pQqUZrLuewBfX2wEcCM6osSL598qpW7yKtnjP3JqwJYPjzhdLWYBu5QPntkqcdKmvcBKzGWo6p6N",
  "key37": "3KWayb7eLwxgBfynWY5qP4fYdiJfVLVdNP9KTMZwKGAbomWLXfAzUHwkzgcvcxH2CEf9jTi2ePnsJ61KEnndGoWM",
  "key38": "2TxkymcczJMenFZJQU1mpshSiUWfBbxX2jcuDKHRcoRqs6f3YJKrYjNbAimnperV97QkiA62JopVKchCAP82WeDV",
  "key39": "tjhCJEHreqoe52C3AKKdVfLKKxFGg2sJTGxT9Zz8my19XZCXWRSVvG9weZLk8ETeNdQ5anzf1joXMxR7MCkNb5z",
  "key40": "2gnGznL1Ebgojutkmq39BMLYDevme8WsYHnnvX3xdQoPQ3ZmwL2SDAP527ubJqZVXzbbdeCurKbaeEJZcUrYQAKj",
  "key41": "3ZpzT4gfYB29rpVtt3i7JZuUTcGsPCYLaF7roacrJgWNLm8qK5NBcqQsGMM5RpR5wsmq6pSUxh2taFnQmnwEon4K",
  "key42": "4XHrZWcaU82yoASpezYTwQhyKruitkNG8N1Kq78KBFvBfTqS7cRZCnA1FdLQVFLGNALwkVBFj2kERJVBtCevpwFW"
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
