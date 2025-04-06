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
    "2aSybRk2kagKZHQog4odpDsWZoe1ZWwU9Vcgk2hdySmz4PjifYHRAQc9LFZNAXv72kFX7Gycu2b5UmpDjsWUdfP3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kveYEtj6PHaGLdL2UhBXpT2WFCfwCnRKr7NXdG4n1qk1SwZNyQCbuMQzj5CMQT6teYxdtjwT2JBd6F6pKfrC9B3",
  "key1": "2JFcrw25iWrN91kR7iEddaJuvp9VjA18S7a3ZGy1SPqBjEBCTX3RJvP2ddcy1NnLxMdHduA5BcoeZwJPbj1cY42E",
  "key2": "5VtZKZGouCk6w1sMwgowuYYkiYG8ooZjehWMQCY9CWYsu1KaqyH7guh7jfM6ViVQpaA1AnjjAgt8unSPq42go7pp",
  "key3": "TSPbSDmFHUZdvVLLMQqt7AgMDiLGTbb7LMbKRwj5JAj8rrNrnqhxq53mxb3rZ7B9RGj4cTUb62fxNUtSRLYLohb",
  "key4": "2qd2eJbG6mgB8cqGiyyQRetGjsrgWqHMitnz9HBgg7i6QMH81PiJtSG9qNcDGrmSSNAmz22Jo1F9D5jo4PqYXGjN",
  "key5": "4Ui6sjM2Nc7UzQvnbYzdUtm83WzMm1wa4t2ouWqEdSuEXfmrMrs2xpeWA6ngxYLEfVgUJvJ5VqfUUbSjVL2D1aQr",
  "key6": "2EJMcTCq3kWwu6fPJuRB3wzHoMgSGRXSLPX2fJja8h3E9WGqMJkeAYm3cqhrsqkFWvFEVoBJt9ULU1VxVtkiDHL2",
  "key7": "4kJBjY1obTjEouW96o6FY2KTsFdiwPr5VjgXF4eRJamdu5ktETBVrddeNdCdFc7oNxA5eogPDqTB3w8aaqQ3xM6v",
  "key8": "2RmXHteQdPHyqJyN1DpcCyz7QXhdRvhVVksMDA1drFiQwTgnqUrtfmBrdbKKgCxWGoetTKxE9ThbMeynERtQYpy3",
  "key9": "zmvmvYrVNhEf1S1d5AqR1Z27ZeBYwj2W8QpK9hfmmg4NPPMnBwz9Qvhkvj5iXvX5F7ryERUkFbE6mxbdqqfwzKL",
  "key10": "3zPd6d5h2sMnkWWSt2Rr4Ta4BUTZ54L3Gk6N14xCLFrRGLfuBC3CmV2eAoR9NVsJ93PZDx1uucto8MBqpbYT3aBh",
  "key11": "3V2FJDbbtRnUq9CNdTC4NovKnpvRms8uMaaT5XGRrpnbGZX3Yizuiqmo6nU2SKocSFh74ZYaANjb7Fs93RhzCFFj",
  "key12": "2SgxAUKZRwb4Pm1eKWhPMuD1QyG3KhHWHu8Y13TwHRPvXYo9iryjEoreuitJPGEzK5YKdNtZCTuBLrToZ8ReDYkF",
  "key13": "woGbmUXj77LGgvkRS6wHc2KiGxdq3SN5DWEPpUkq149Q8CNFYJEVL5Su6CQBmX4YWiQoBBKPEdNKgAQuemiByPo",
  "key14": "4W4Afw3n8UnJxqmRbkzj7Nz866FLFHVmYKyQM1erJMXh2oLMUR51GEb4ouvwgWniDaqX7wZqHxaaYbiVWoiG5JWZ",
  "key15": "2CVfXx5seYbDAbAaDFkcoQx5XG9QxdVnU9fuw2oGrjodv64qtiyZAEWuEuYC7aRDgmgUf24vRqMkUX1JX2oYzHNU",
  "key16": "qqapLXqU1H9Z9Fvtb5TRS7wXZ4NvDcTHoTpXZ1KEy4deWs3TYAGPjTvrFY47S91b5AYYsCA3kGV385yJ3fmmidd",
  "key17": "4NW5wCmvZ31LyMsyUeN5kSxNj5ubEbgJopWtXgayPkpbD83DvxqVuuYdxS3xLsFuHFwXHoVz2AwmoJP1tvy5giMz",
  "key18": "4JSkpaDV6nrWogNRwJ3j3Bs34Ec2zhyWVJdafbBP4YN1Ze1hCbWovEhsoVWwjLBSk28JN6M3SEu6NVJ11nzCrwGh",
  "key19": "5qCYLSZbTNtQU2z3Qoafo2gg7KLU4xWjF3ofMhxbj7cB8zg99o8CHuzSgnLDn82PFB5LWT9BRhCZMp4QwZ2B5vbu",
  "key20": "3VBtdhkrxbjfMaEUWXRVfo9X3KJRJkn7ZMi6d7UYRRKi2EU52Z9qoKzyC5fKRtCw3RJfxgxqZ4ZQrPayHF3ebZ7P",
  "key21": "BtfxqYQQc73vPHvuoAna5sRNRYKkrJjuVzAeY2nJzFstDFcxXK5zqq4qYTqVj4mYH1cTVtwR2TQKmfokZQoRMWy",
  "key22": "3pKBKbBwnsVj1EydLnX5gxdFU4jbgiRAUsBuvowsBrakATzEpg7NVY2CBYaKUcCFVc4mZVDRc9iSRgF7RdghtSD7",
  "key23": "4EbfvHbwghv6KRjtbFj5KkdhwL1YN7Vv1z8PAEgFYnbJD3dD8a1sR26GQWVPC46FsaBQqWL34H4y79KfeeK3LZXr",
  "key24": "2aHg2S7SyX53HSy5G2MtWre9prtYbMsoxMHJi4n62cUCdAasAnjuDPWfxNZuTFsWfds2UX3aK9LXx2JKpLZrXKQp",
  "key25": "j4k3hYN463H5FxouheVEuK7WoS5FNsCCVj3sPoBWw4jAR7QS7sg6D3bwyf8nMtFmwGsbt8oUoswkG7bQ7abFhDC",
  "key26": "AiRpVckJJABepykVaU7pgSfZsdpuN8vyqvsdg995g53VqXmCaxvm35Tm4V4XhWzWmVZVurCvvAiFoMainLiP2ef",
  "key27": "3rM5J1HUZZ6f1vTy96FEGCBiHWv2TtDqUqt7PcMVzdqsJ1fjwxDwERVWEr3nejhf4yo5UqMRZhy3SuJsLLqFZYvd",
  "key28": "37rJt4i3shgx9jG6ZPHxHXjBaZZeMjG5R58tFPHhPDj7c8m1Vpd9kv5cMVRXrAy9hxeWMAexMBN7wJCtradM9QqW",
  "key29": "3Qz4pZPXVVd2cDPBiGevAWZM43iCePivDusDEqzbjxh7V11t8EZ8M2tQpS3eeeJcSrNdjEWV5bxgpYroNKfTFCWP",
  "key30": "fcxg7TGbCXVDK4QCus7oyC793ySD3QzMEMQxY25b1JZ2RZpd5t968zxmxd7PqCcBq3T4RTo7weh4hqHhbhJYGdm"
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
