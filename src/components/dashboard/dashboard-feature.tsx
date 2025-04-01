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
    "2Fu2TK1RppUwpSuBcP2ekvYWUuoMw8XAs7Lt1SwmG17PRkGnLS98PRCH4jEAx2ANEAD64PQ3qwgX91g5CyppyrkC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BtiZzqDTq1Dsyz6LtqCUmhx5q6rHP79PvbC8Tz5bbk3e7cz837sfM487mGKAbJ3wEobC3CAhg4dfA284hqyLPr7",
  "key1": "9arDNWqGcsrsWiYqncnvfckdSqfUgT3PCSZeys6Jn2zmWhkS1P36Q6WFgWNUtV7owENTK89v9SDZJKqnm5Xa5gN",
  "key2": "3ro8TVEQAmdF9ELxTLfingbaUiRtpQkzYApA8ctntLFzttyVCFVhJuc5tqDZdZXbXieSF6EFfFU1UkDPzndHf643",
  "key3": "2xEmWZCGL1WNhgDeBaHYUD3vsZxsPbbkzefKXCST46gymMTnEv8eEbqRqVxNKe5HRgHzP7zBSf2PEs1SBLTz6puY",
  "key4": "5YS2MMn8TfmGo5ENV3Zgczdnzfai9EEZ7e6b26R6aKAbvrhYQAkRqFyrCdW3RDxJzYHUwUX5GciyLfmyRYbkdnXr",
  "key5": "3vqKt5tTkRe5fSz9s2p9Vj11bPYXDrNwod2ghWarq4R9sxB7N4EuQjmdzvMQe7dxtHkGjmPHpd2T7Cyu21wG7919",
  "key6": "48B9aGM5dEczGuuGTaJzPCPssXQm9QrHx9mvbTL25ubL5GYfNdfC44Ta1cSB78e9mgyiFAoTi8rBpW1cYKCH4kQa",
  "key7": "5SgSaBp7HV4A1WYkiGNeaJBVrB1mkHDGMy99BgqpgmgZrGFainCm6szigwFjJnSXJwkjKgTuLLN1BegctXmLvZ1i",
  "key8": "4k2onFuqemYUoMMMvEiSGxbtbDAn84JVsk1pnKtcUSAqhz3K9t3kdukb5z26uPuhXiNX4FgyyY4E5VWHrVcvMyix",
  "key9": "4ogw2w1RtrXa8Vq5RpicV64ezvfrrX8CvJityN2MAHGKKerCvk8TnSERC17NzUPXZ6Qw7HWx8CZDy34u2TAsGwJL",
  "key10": "5JzZZnPUzmuggEiZ7d9968FqV3eiaK8PiqBg9aFPdbZSmGCRwEzqBcvqcWNEQyNHKUPRSEYzwjgoaqzVPQUSKzsx",
  "key11": "2koZVRZia2Jk15TiKtKQ5vUMxCaPFARGrYUgdocMnpD8SF35D9C1xfv39hhURCbxbWi9LqsEc2YyeWgvNPP9Cnj6",
  "key12": "5jL5jt6KE8wnJixmmnKh5JE44cfac9vK8qRycMnit6PSbXgt2b8m6V7KdNhT5d7VeaGzw7teaaRmp22k2EP7Cfwh",
  "key13": "5BhCp3WV1bhxFxtqGXLQZXw11JK25s8TbnQjckVj6595J1HW6T2PJPw6GSU3txQgxKXM9yADKbMerxieZZy9HHH4",
  "key14": "59S4vAN6NsHrtWuvec9hTWRGqdF1vuoudoJoPW9ktmZb3ak4smhiWeRCM4w9zM5okuHYxP1JD18YrrRofDUnFpXV",
  "key15": "5ag9z8bFJHsjxPoycUb8S7VAkhS1XUGB2qcKMydqKem1n8pMLQmbu7XDJGoZw383aqDufs1Qtp2xEeYEjLtyn3hT",
  "key16": "5RaQxtMvUZWcFYJEwgDdUMZ9UKbAkecgtwSk5titxCYBMysJJAEkLDb99Mq2EEa3SbtVb77TbDnfv3nD6k6xNREB",
  "key17": "BKMc88ye4CZKJeRHBvjPYPbZDgW4hZgPyuW2JvFhQaKtji6oUMcD6YTHDQExm5GLXLspT44UD7qvHFeDgbUSN8T",
  "key18": "LBu51Y5dTqnqz7bYQkegQCizss24XFsJLqMmgVYDjfp2xLbaZojU5fmXigwvexdhKM2bN1Vc4fSnYhPNRmxuxTZ",
  "key19": "5XrikZFiaVFTUxrwf2MA3xFQJ7Pwt1USXgM87R5XiUocMAJorz3KEQht1cu5GnNJPA4WWvtm2SRayxzPTzAfPoaR",
  "key20": "GghYBmH4Vh5g6WB2JdJsXchuN34VTnYiUaPP2hWuTpwGYCDzN2EFvASz1QViNLJVWRZgUozi2HwhboQPb8WcKFW",
  "key21": "49qbPSBPk1r3e5pqHP65BvidR5EWBCzXJYJX8e8DQnHVKwQa9cmkHEZUBY1QRYkdTx3KQnLRm5jD7BpSJwFed5qY",
  "key22": "4JoZRgS5jxZu9yAgJBP43E1XqCH51zvbXfeiDAb6BUFQbta37dtwRnpbuW9xTjkEEvecyQvGwgmVC9VacmD2oz6o",
  "key23": "5PPrqg7T7Pcxh5NyRkYAASkaawM1DiYWcYxdkhYGmSGcnvNzSJs1NX3UGzZZJXb98BtCKECYAxzq2zDAb7JLtKKM",
  "key24": "3RHPDWAftLc1acg8zMRAGvdopXnpf3irzcqHNDyGc3XJGRkdJg7jYqeFpsU875vyR3Jp7HmtmwaWBmh8UcdHny9A",
  "key25": "4DYwAWPBqzMwsue4NHuPXkActn4MMrhYhsi6PnjnzdaPc4bXUF1x9ryUnZEv14oZSAT98mM1niK8HJEA6SsctJ2A",
  "key26": "5D8UKwgzP5A8hfaR9RViHsWnqrn2YMzFvFWuuCSCCX8dPFmAL6DaUvvfNoqszNVRsNHbkqFtQqCscGDTT1qP4GAr",
  "key27": "3SstG3dSQ8VwsdYfCGiNNhhpv2ffRvgpUWjkLKgjx7ekJK3w9pTFtEvLQs9MTyE5TYGavjcMfSWgGzddoRxyV9kr",
  "key28": "2QcrUviSTvrWMB6cZV3bMQcX67yn4BoQkma9tjEbXS1K145tKfQ5s2KMczbUku8R2HmCjMVWogQGYYgSdHecBg2G",
  "key29": "4ub7GvAEAZXW3pLc9ci6dDcJENkgw591xLaeAPAaGKubYH8s2DpAHXrSQZe4h98PJnRX8pMa1QwhTBwtPShCUCRH",
  "key30": "4f7dYTyp8N79VPZ4TxNKrV4QmrkHzqgpBgsjW7DhiUmoWhjHVd8XEqjRxDYC6APXRtcWJYeeJ394GwjtjAuKcXsU",
  "key31": "4x3aXehSJehPVfqLYRZWLVgv4ZZS3eXSUWcheAbg4qNKASZoFkVL3YhGnydmsn3ZLHr1GQYQrASCQrYYvUd8pMQ3",
  "key32": "4qESNxgfqQyQKUFnvh4vcmVMFXRyFa56ku1KU1CwH7RxqTTpq6ZNANiefp36EbbQGwxuoo87B2vb1f49D63eGBW3"
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
