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
    "RqA4k3VyYfCkbvNUpKgNrNrHZyszxHgJEB5GE9U8CqAra8QJJM1voXcQeeVxMJA5Kujrv3Gq4VTttC6nkXXv9MW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zuwLx5ybpcmzQsrARDJQzx6iq5qpvuTSHLM27YyGEbW6P77fEapucFy93rRVzcUrDaKLHikAfBQA95JwNPbP3nR",
  "key1": "4t9E55SyE4UypgcC6tt6E696PTPy92qTRYMwQnpRMvnkqqVuTdTFaX6ewWxYkyrGNsbfQUpWdHCpwH47259j9zcs",
  "key2": "3YA9fAUbdHcS3hpgFWk8zZstxr5aLt91rRwA7pDgfD62eqbVNY5Q9eVikfBtF1dxQ6mQg2BN3EnQRfyyeoXo3RZT",
  "key3": "5PrDZPskgmHTGc84oRojboAk3DpBLaKqe2yGe59Mt6JT4ZApmDgM36ey9PgjV1Ry1njPqBkmh9UxMkuzQP3h4Cnz",
  "key4": "2uuuUX8GxBJdD8NeQRhhygapECP2iD1XzqmovvCuH5Whfy9AgSbM5oZaU6TSNFxuiNF37MVVbTcnL72zVgpgKPQV",
  "key5": "2uuXTziAucAuMmLvFzHpaqaWfUWfcEno43dWHXUxwjWzkKn4pWmae9xfbYPmUTtXEnnFfSqhhA6dZnGfdTkRXb2b",
  "key6": "SqGcgZ3UDeJ1EDW7A62oW9rnJ6FqfYUVJkh2EDnGBk72gmZNP6nRbfT7f1n5SnfZsTHGyQrbBw3c96rjYNHW52u",
  "key7": "3BDVC1DRRXRyUMaPzHad4MysYLmoCwBkKgbcNtHR5nbdEXHShaVUPBQpByKEbDC69YiAcxJ4R9LgDaDRrQUCGbea",
  "key8": "261pmNTfkeZigtvVD66ufBT9K4Mhyb4RHHbGYFeSPXs9Cp76iVgydMtBY77x2U4NJnj8cY2mpP3RqWV8ahZjaYs1",
  "key9": "5HSfCvWJoj1oJN1ZsW4i14ZbG4TEZaGzCgFfhM6EHbcyzXM9ZA8eKQHTU2dweJqaU6xfgmV5LiUieossYMpMpzes",
  "key10": "63xSRaTaZSMLGEvnU1B2h8Xh1QMBCri2fGenyH8yea1TuXJwF1XRKEZcRmvFRts2RiDkjSNQndrybuuGsAdiVjRb",
  "key11": "29kgdknLpoSnzZR9fWDz32kkDYSGkXab21EpPLdJCgqz9E54HiV2H66xR53asZSeW4VVuRxutJxbDXdPQ49eoAJb",
  "key12": "5HSfXp4VW3kmvTV8Jo3P1WJruxAFaGhv5JJ2ydGun1C73GQ86MDc52wAR2NfeVEkUrmPtAgYcwGDP98nSVYUcqLT",
  "key13": "3RUT7sKrDdxH1biz34J4hsgcFGDVp5unixXaALDs7VjB6qPeNmiWWFSgsRapETRjkDJeg8wACKVwJEA3CUijdg8b",
  "key14": "2nMyaH3VeZr5Tij3FDdTq6jEZgqX44jreeyJC52uZKzZTW7iPfGKzmrBe34STCMJ8nhcQYo5ScnfeZoBdnG7T3uT",
  "key15": "4xKYyzgr7SpGJaTKo7cddDckoCYmYn3ejVxRnSFLWhNS5vwMtbkEHmbM51hDirqQpa8tGptpXb7m1jEZoMBocbrp",
  "key16": "4HKTjLKkr2KX1RhvDYC4qupPY5NMmFjmiRnPRYmQKeGwbq3cFuS5Q6x2qai9ikvksXW3LGsZGBP18M7atMfMtrTX",
  "key17": "2fQC2hkD5YE7epr67XBD5neA1eLEGo8GDNords33sBFnhtd8Mc6j1svWqYWD7fz8GNqK9tx8ADSPr8GcV2P8YXzW",
  "key18": "4GPvzb3nJRDpWV2jCrdR9n8qbzdEUauURFZH1k3LvV8NJGhyGM5AWFoYsJCfemWXMmD7kD1Bu6am3yodid8Ns48d",
  "key19": "2VbSi24otrUtEaAwpegv1LjcJpXgAi1jRL3WRVfWQ8ZoZ6aJYKYDRYL5k2dsXdajZN8acSpBsbx9BAbFu3gjxJum",
  "key20": "4WhTLLbxYG93Z6tm4CR4RacLRD66BdPPVA3KpE83NUDG3QuHPjm6VeBU3Cei5eGE4NrkKsXmrwomjvvAdB4DCYG2",
  "key21": "3UYaSao5atVHTn7CnfrTZC8Mp994zhCuCTZiKXr93Rz85zk7dDWDSek6aaWEAghJgQhSiZPqRE98KoQqKckY5SZN",
  "key22": "4u9L91TrarduALNQk4XhuDzwySJYYEj1i4XhnZpfj9rPU7SeatV3Z5ZJscAy8EQpoYRY5DoRUeUxVEs1UXR6bU2s",
  "key23": "4YgpjoN79nDzojr8pXqfzMxf8xf8b4bfcgSRpBjVscoTgmXaq6JVXS1N2fiSo8SopVWLqhatPYNi4ej4pdjeVmMc",
  "key24": "4BVgF7raykPg8TLDBi4GeUhAFn1bpGuqsqCtQkJkLyCd9GhPhwJqzUQNns8GdGz11F7rhcJupUu1FF37sgvrW518",
  "key25": "2E2fsCAoj7QUx2mHQM3GwgmpTziL2rSq5kjQSyGXvbeQyd7aT865FuSJ7tk3fDtWDiYZz7buq44pnEM55KXmc5k5",
  "key26": "6D5qLgyQhgXWCidav6NqLSNCRdq7rxo5gRFgNq74cDHzbfKQr4d2J4mJu8bEBQ1DFkEzcfkr2yygb5AiFpkT3yE",
  "key27": "2KDsZf95jk5VtR23rLknD1e1DLxxtZxvmEVmvMK11sdXj8igLPsTFh8xMZ8FghwB2SWa6yVjFY5YhM3TWi36Fdyq",
  "key28": "3mQt2jMdoVMUtAxSnYgoDmr8Pz2z6oSkiZ2L7r7oSeB2TRhBzA4CRFAcQcypcyC1gFnvWcsTa3fThyWZBVTKRtcb",
  "key29": "2LqNwrP5icz3bQrUFvQNhnzYadJCYJMSBndZVj1rdhVmmbNLizp9zFEKuTwtC4jWkACNyvjhEvJ7GL1Q9JVhr6eh",
  "key30": "2mph9FkegArM7Vdw1Ua9KaooZhGBX8TBut4wcrauEvFndYzEGKKJgDGBrwHRVvgyVXsPbzdaABzspE55zm9VmJ1q",
  "key31": "3pAfgEm3JmCtjLuqP7pq6M63uFuExDoKn4BVwaYHTZk56yUXQSnrKTVNXQ4ViPigtrTBDZC9PK2MDHVhMtRhatnR",
  "key32": "3CDf99ymc9rsvb72m5xY3N6585HHbrWwx2hRjWGs4t9CXL4d9bRLr2zjMJvnZdrDqcHb9fC6JcbEyDFVmEmSV7S9"
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
