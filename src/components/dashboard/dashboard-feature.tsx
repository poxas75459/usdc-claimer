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
    "41WBa1T3jzjzM6tC6mpi7oKbgCu7feELKQyPqfXGvvvqy34psU5NTdqV7frfELp22KzZQ6RHaDmRJH6oQ8snF4Lf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TQdzpeKa2cCkEaU8PSx6TrNePEVXAfzUTY5Q6gReSqKqySHiuaDfR47SVECoaChCQrRa7yb2j7Kv4PFWxYtQN81",
  "key1": "394a4ezKbdvo24JB598D3Ai722nShe5cWMYfaMvenz7zXpwRLxLYBKvcLvahVYgPQMHAFnjQwjbDiEaPubqa5w8z",
  "key2": "4wawTPSLe6ositFhS7nmZnDwrrsC2QJmNX4FFHec17ygu681GnZh6jwR6VZcQfKwpvm5c5qGHyrxceyWsFW4WoE4",
  "key3": "5NYpEKkXnHLnuranK2mxdX8rcPxQb3wq2GXzoqWRQUzVxccN1K1LCvJ3cQzipeAVgoyqgeQ3CG7eygKMjEyBD2n1",
  "key4": "3qKW3HMxsFimEH2R4mNmHCktcZF474SBWkuQ83nRBH2xGGkdvT1c6RD6ar2wXEhBvBKTUYH4JezFUgKZYxZC6612",
  "key5": "2ULhHmL2Rktmj9w9b92ca6eKq8i9M7ePMqK33iR5KZaaWnfi4sYkTM8szScxJhHBWd5PJQvbVvVhnJShKNDd38X",
  "key6": "5MfJxUn2AvJMbT5Y8LZqJWKVvShM458iyDT8m74DukRzfdqT6vLm2VAEEGcDdfDWuWUD4MStHxYwgkrwBszhwucX",
  "key7": "2DemAjs4c6ernfw2qcYm3j5wMVpsA9YK73yavw9xTWtwpMQwNoQxpKTgHkQNiHuBx7CVnqyd8xeAh6kgBzv4oXQS",
  "key8": "H6ETY7RSbLC3LwteLTGDq8CkbFApv2C1z7hxnoBDko7UejcL4916FSULzroL4F3LqdkJ4Bz8Vq1jZw4xT17dNv1",
  "key9": "hXpKw8m7DrqZybZ7y3Rybcf6xFAWwGxjUZPBPHGKaKLEoKsDRgj35EE3BC4S5mMU633uq7DZMRTrYoMuzPxVqNw",
  "key10": "4kYM8RfzGAHQUAk2vwGGEbsnrKRBDC68VtGQnFe95L8BM3NobWRFUcp6tTvq1qVJcMdGkTLZN3tuPtQedmykCsKK",
  "key11": "3i3SCcULZP97dhdcMzgBthM1T6ch1wYxuVgpRzbcAZsrvnLf8aCAeWXzBzQbLzDrxUsyq8wFiVWstVzfL2LqvM5b",
  "key12": "2HK9FKs1P2o34uU8pnN6SFsMzVM428roW3XEFM16GjSqo2T95LsVHArTXe5PUR8XSi7ft3SYhmoJaJa89MgnUwjZ",
  "key13": "ofzHDx1em9KtrFqh8tdoPz9BsU4FeJXKTbworgzBjCz3itoFty2Qtbt9hrwXXShAEBdVfgHaX3VHWQUzHvQRL9W",
  "key14": "4oa9Scs7gpxGKW7Eg9rUZAuLbK9kWSscuyqBgc8i7FphJFW93FNUT9G6WZrxFhzX5kmLdKTeYYpPkzQRXcQ8EL2P",
  "key15": "5V1FzJ2WacVadPiowfimg3v9dCiq1B7xrsRxxL9TNuENwHZtZHoPvnyV5Dix4ZmoCULb9dLkjLhakPYb6wPtsWGm",
  "key16": "5HBY8KPxDVdEk4RP3YbnJC3YVBU73zZPhTC3rrg4aoz12EUp1cU4UPrmsBjJJy83EUn8eiCMdXirWyBGRgeF9myX",
  "key17": "43msqGFs1tnPm4kTTRmweromt19wDq6pcaQ7b13ge72rTb57S5CPGz6eGmYQ3m73Q1A1wCm7GXAZDYPUVtHePQSf",
  "key18": "5esuh7yAGpBEgjLPz44hpc4N5BfxV2VNbn4J2JqGB4Z49otDZL3GD52eMtvL2k5evtdvCMiTSPRsiF1jXh3ZEhpp",
  "key19": "JpXu93Y32QMtNRBy7b4eWVqvSX5HJgM5zaBCYEk9qEFNqcmw6b2LtcCtmv4siYNRSBCTfkhuvwnDdoAmndF2bAM",
  "key20": "3cgKpnr3D4JA4wXnvTzywUM4STkXMcVJTLazoSeV9J2aYGE22XpoQtGrPcmJHXFBfNq6Pwqh4uWutBtm64vV5HRz",
  "key21": "dBJNG3TvTtXEcfwwn7CF3Nnh5EYrmtpEDRWhD2vPmfvnhqeUZbiVQnyf7MfLQ1oGJACNRPDUkjAGoat2G2jQTPq",
  "key22": "3kjbS6eR8svfHmaEAEZBPh46SNmGABPGtSSgfa13FT9LAo1bjMQAvVb5yJUeUC5gFc6mGUDacUm1LysExH7esFSY",
  "key23": "2tKZZJKhp2TYhZATFBRyBBuRi7xTztBPFxRbGqpF3yzMDPUQi421EuZoaXkkjcwhMtkU7FR8m1aBwp53df46h8LN",
  "key24": "5LA25Rj4c9oywSq9GTeBvcDHjBQ8Pok8xyn9UDxuZZL6yzsghM2RLB6vCwBCYLgD5oJFbdGQFZvNcYPUVanbc2W7",
  "key25": "N5KtZnqGkphc4pebwLAeQjZ14PfanHQXLjWanDuJc1fJdBeaLf211oYh8JPmpYXYfokp6vNkaoZ8jd7Frg4wETS"
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
