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
    "QJ5Lq4XtBCFU2RrG1Jng9ndi6qrYEaseTSJxX1Zt1hw71X9PxwtwsJh1WZP3XetVbW23RX5KfPnyGJyYCAFxdpR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "669CsqMno73P4VKsKV34wnUXc46EzbFxyTMnowU3N7vbcH9AGogBCQoJKMQQ4iRnYpAy8QY8w83f56EPD9VYbbCA",
  "key1": "2aY8tZcFTtLx75PDFxE5WBw7gU5p1Y5qV9zoAKTe3gJr1Z3BsNkbg434U5fqnLwbiSobQgNx9ChgorWrQVbD3MrS",
  "key2": "2j6Ld6gCLh554muBStgvdWDCJXnAC2Uzx6MC5jTuknymLsjcDMk2ExXHYyv1hEqr8rAhS6ne5XVsAmLYQMnLcdzy",
  "key3": "4SrK6LkaSRoDxW4WTX5HeeBpb38KASrEDhtUTYnoS4WRYPoMrBDy1RL3nebKR85nGR5D4ALSwU1jw4bb1FSEm3pN",
  "key4": "Z4X1BuqdQQfqHuX7XM4egbR2hXqNGUtMWpe8jCpKjcuHuLqfwakFvuyyBSpfMmzuKrAsaSQrUq6AsSNfGca5Kkn",
  "key5": "5L1VwMWiXu1p5SkSfM49Kot19QGr3FC4HobU7MGmDAQGrgDN8V1xLVwYXt4uTM8CxKyWuUgKooYFDqLeZRkbDNbd",
  "key6": "3yVTNPPJi1KZ53Ky97S5gX7UP9j9d5xQiQWJqNoTQAthuiciE2gFd1rSzSPpwC5j4D9JiQjU3q759HoG4iFsxcEV",
  "key7": "5nPNSjc1bXx5m2r5uy25bU9o5zQtmCDJKpNLmhAeAQ7Vr13KFFe7By3dBpRhvF8MhvbZ2V5eru2JabrcA4f89FmG",
  "key8": "5a9wjVkh5NiNHEMvrwW83iF2tjm6To3d6Qg8w2zRepQ2NWg1AP3159QJ2hDS3rLxJLR3wKkjK5jQhhtpyHBadCHU",
  "key9": "3DSaFScP4Pq1tBf8dLtK8JohXUCLsBqef68gdfceKuE2FDU29zf9sRJ26WBuxQwjMfRUP2qKdokYB5qXGpNduwcT",
  "key10": "4KsECq8UC5fN9xrVpHcNFk8X5V8sDW32hovsUNj1JHf68Ju3YHN7UUsoDuGZfH4WihPSWfFTg2fGXoCC1DVsp3wL",
  "key11": "4WxE7bReGebgb5e9aEgdZbHMx7n239mc98mUGze2MPffxMkFGtLRVpMstTjHHGqxhwNpungvGZf1yjWvgGgnq884",
  "key12": "SUfBSN8HdTgGaBjdmLsPzwiVM3GHwYaQnMcbZWuTWXovUz4xWxMvZrkLWPuRz8S6gcPRsw2RcUYs3dA7RYPACk2",
  "key13": "3vGRrDibexNbLyFoyjqmgLpYQ8roBLz4xhHvxLU59EYSuyJgac2NVrsuJ6jsocUiBgABb5XbyDhmmreNfz75pwEG",
  "key14": "2tH8TfB5btyYB4MdhwMCsK5hocPHWJ9tUsh6iLPAvkcMWk2bZEKuhTCPZmVzXLMe411dS1U3Mw9ponyiNBT9anHq",
  "key15": "8eH7icKeF57yhSQfaRdWCG5hsAjvfBmWiaURmfiFfw7AhXGRALeBBuAWqkQUsE2PFJdu6c5QYLx1YfNQkeBA3ps",
  "key16": "k695doDJTth2mKyHzGtxRjhBKzHyTG4cd5KZMYfGMR2q9rUPBkM1EX8aqkxmZ2Vg4h7x9GvTNiSMcbigZJjCksD",
  "key17": "2FvAoYqsun1vMBura4Ny2Mn6G64G4GxpT5H2GR5GmFCck3vme2rnt3ELovgVK1kzwCdHrBXCR6Gd5v3gwpuYASbR",
  "key18": "3K5S28CQGKCq3NS8JjtRn1VRS8rSjtFMWRBAugNsszJc5WEN4zSSBa7W6QUeKwWi5smqMFFJMzNnamGoDYCgdFyK",
  "key19": "3m3AhsX7HvExog6yaaLuFmwvp3VQwMa2AYSCTJtQmDaFhAqA9rAxrcH9PWDXBjn9p5afpPS4HFmCN4StBuQr9yKR",
  "key20": "4YXq6r78jgbrAx9nbYEKVE4uqpyGZdTocUsBsRMn4jrTv8AmViUsMnfARHVHFA9ARsoq3F7mDYqHuonMdUcq8LoX",
  "key21": "2pRaaiHhfc6SS288MZh2qnGrBpo6npgYAY88YzH5WeyzdY8ZqVSZ6PGVvXojU5qdSjSM8piLkrj78KzuVUWyQgDo",
  "key22": "4tpbQpcbCU6htRLAU3RZuZJZowMUoPDDn64BvrT2VHuiC4vCAB1v5DchFtMfEC4zrvRh7HwhYMbW64sPw7TkwHeK",
  "key23": "44F7rXUubf2X2oEE53FZMrNDowrybZrtbvas1zXHGzjxVqSQJG43SdmPitpS8ffGGYk3XkdVpdi5SFGAh8cVt1hn",
  "key24": "5JQvJERBxLUSiQWN8SGF9dcDdnLNJePSpjSAk1drDcUwnebvFNN9YJNAmHoNzb3VfPCkh9pi5qTnXPF5ZZUVH5GF",
  "key25": "27DSPmj13iHr8nm3yfwDNTCbECN9Vqpb7Ce6sE3ExU3gM21aoXugk5zfg6v1jdps8PuqqjDjXw6oxQ3csDqKkuLR",
  "key26": "5EmYBkwuQoPfabwZNX1XWNt6U9BLopp8Dy4zBG5s9mmxgFAcsoTQwDy8hEYU5TUozhTKxdzA2Jog1wqZEZvXu3G",
  "key27": "44MiXnbhJUGfSNLiGygcws8vZAgP9kisN7SmS3b7WT3PEFvRGcVCrt6d8SzSmFoAoXx3SoW1wSVHDby9QMVpHNAD",
  "key28": "3xiWJpQWadMQg3gEHLEoG5kU3JFZbfRjy9ihHR7KSnAyd8x1PebzMXYV8aEPx9h4EU4nsobfMQguzJuMZ7VuNw6f",
  "key29": "3NTLaeG9tWsWJ7LHBw5yT2itWHwwgeUqH8JSxvqH6J7hzU4S8vdphjF62V8oxCx2TeBp74VG5wK3rMG5wpnYaQQG",
  "key30": "4hTibLD3o2urrb5jQUwQrxbAZ4R2rsRjneS74KZSv6U1G8QtMMF4AqyTBdtBhyawWxSM8hhbLP5P3SfAtMyafr8s",
  "key31": "4KNqvBWeDCV9NG5jZczvnsm1q2YVi2zFu7pK6187igj1vGBD8EUf2xdfu3Yj7YScf9KHiVPa1fXsdbJCa5JGaUEf",
  "key32": "2cbZsUdNZpvsznqC2vMa2nd5ip1UJBfQzj65oWHTLg8okosBgAFacdjbexGNhdNubr2rPe2eQN8F61RHFwxsDu1o",
  "key33": "2KSi9WcNf9gTqMJYDtjFrYEdP4XuWU3rqoAn6LB36BjYYnCFxVLJrSVaMagpyTeEV6Ay3gqxovBUakTcTvuUAcxr",
  "key34": "4CQfD6sTUusJhRJKXsfVjNfaJnhdnCtwDcMJMJuFzvkZvnw7JY9ChP1gFrtVJRxwcQxZkzmSrXnRZmj6vVNMqwaD",
  "key35": "4S7xz9gtSTxqa8fDRrCgr3LGV9Y3RTozWmkLrjeCh2msqes4fZ6qydYbQZ4aWoisRSPbH7pgVkUsxSJiyv6gPi5t"
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
