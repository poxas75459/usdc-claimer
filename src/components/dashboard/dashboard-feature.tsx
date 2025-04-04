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
    "5Y53XYve4yE4Uc3swm7dcAgV997pxmsBEuWsW1g1PwcupD5NysVD4rmXGN3JLxr9pNR5ohbwpzyTBBZ5KnVQq7vL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SyAfuRSsqGhToRum53Xg3x3g1LdgxrDFPXZQ5hwgh6WnGhtHPhhBkkrxWeRHJS6e9tQz892cfteBkDzt4L3Ky5W",
  "key1": "2iFrWhc7r3JvwzFYNcsGsAhKZsebyJSUPRPLmF8BRrQ5mNcAEGMEMavuRC6dSvxYPZCbsqiFdYE34eqr4SQJniey",
  "key2": "21pMP9eUpoTWVPmqBMLyHZy69wD7siB6Q7TmoStLPbsqbieDYhwqngwBKpBfSj7jDWyzEucDfyUYzS238Qo3TwLq",
  "key3": "WzgdKJQrML6ihShxtjUcDiu1aBGHWZMtiuxkGR35JGEaE5ZGcdVKZuFzQmNQyYsGu7THBjY7TG2caEnhZKNr7Ki",
  "key4": "3VxCnKn7xjCFWkuxYNS1CLchh92pSorzdGGQKksH75Qat26nJycwpR5tAY2EjGbDTNoiZJVdy9BBmokf3bBhAkSE",
  "key5": "4SsuzVvDt42QRPYLjDBjwHhLcnTfCwsTr91Qmvaou7F4nLFq2M8dKZb7F5NgamFxDN9VvvH1qksjQx3dTAk5LmPF",
  "key6": "1wxXhL1i34zBhFsnCuVjkezdjW8Ai8DzwSFho6gNwopjTJ5Pa3pVMz48gEennmbqoZdSVvh3TMA3VhW5cWX3SYM",
  "key7": "31aiVHZsiG2UsNwZgVKxA52ppgfxBVPGai4YiQvHMFUYEMkwfu1Yh8nB8VRehPMa2xhV7mNZLEF5rPMsLmotmZEu",
  "key8": "2xx8en5wQDTdXz9JQQaHJzdCLAJRAfeF58qrUwBvF9wnePyWRxsizew7995Um26BamFYQxcBfVcWAWtYtsuL6BhA",
  "key9": "2XZMSp8AQrYyP6YkSNswmkchEfBEpuMqpkyy43bL4AUgX5MwVAMHTu6RLGzAtFXrAnGhAN7BWXUUbe78trqrbo8i",
  "key10": "mHFZJCvSjy4ruqwocSHE7EeBx1gNuJBzY9XJX6XwSnFsZEZx5ubwZ7q1rNWen1SjR3BSifVyMsmp5RRkQCdfnSG",
  "key11": "2PRkwLq7r1mHSoagw17ias8NBNDy6wf4BUEHtPxGV3aJPFpVLFfvTKNtSE9fkQBPHAjPeLUYWFeqB8FUcotRXUEm",
  "key12": "3xC5mn1bfczHF4funfWX6t6SYtnszwQjMdBs5GB8hdojQzYG5f9K1yhsyCyajxwuv4FV3AeLR78cM2Kn1y8VCwpf",
  "key13": "5JEZjvQe6wWjwUB23WNRDcsKe1uY6onbkU7qTChkU2rE43x1QuV5uGLQCrAZ4Eyk3TTmgHJHKcKxGQAPeSTDHd2r",
  "key14": "2sTjppLkZ3975WZodqZaFyJ7zRvECaNGbF41ptsQMEDg5QmUVusxzHu5wCouxKtmsBxF6TyVBjBoWcv2R4pR3AAD",
  "key15": "3E3dUMh7jRsHZw9ftd7tXAH3M5QVJzTchtZhaQwx7eGfb8ktzSg4MFQv7sUcFWRJYczT4fYo6D3XG2QWVf4CcC82",
  "key16": "5qd3cyiG5VtnUGX17vSSqQzWEhC3cBuaLEB67PandkUjxnUAPv9jXCQQeroPWrDrD9DguMoSvu618Yhihazc5kDp",
  "key17": "tD51d5kEHzeP6X3nMQsmpkiQTX3oQdMoAN4RAtw7fBHYLFDiPupMx1yiMyV92ABvJLcHi91svvDuVfNmQHXFPqp",
  "key18": "5beFu8RpTYXYGnAFFpQnh95bAKwNoHPC7nRcUuGdLPnUxbgGhjsZSWchgg55sB5LXqL2CA2TS2S88No8HJFJAXa4",
  "key19": "FTwWvNkjsuA4KtaGSJUMueaNT9tTJJ4NnZMan2Ngo8NwVvTiK16QgB9XjxKhpVSZC6kpiKCt51aaLmvparE7Egv",
  "key20": "4GpjwWVUJFihtWLy9umPF431Nhw3GHzzxRVx3FDnKeMQs5KSULnBVQ3hVJbgdCqiDNwTJSC5YTa3rvwVLyxW1DBv",
  "key21": "3TyYbJU5B7HXuJaE89wYHfeeacJgTU4BMyCN1QKxNWcbk9SEFCeb8VBUjiJxeSbabispU6Yc9kTNsGTDXPPRDP3n",
  "key22": "2PrVzpNUiR2AvaNjKGXK2eLNSN7Meu4YPEs2QAH7Uq3gCTEbGoYNMMbvYcgQku631iw6mzEysbu3Ss5wJ71myWwJ",
  "key23": "2ysJkDkWnCYPgieJfuUysjdfM8KiqDZ8L1aPDXSBJFdQAVXQNUq23m5HVPp9nfb7MmxatS8UErqZfXcMYHThXa2p",
  "key24": "3Lfbc2HEqSZtawppkXeVu8ZR8WHuGCJCHpZH8Ns5EtupMHW9RqL9b18jeHevMwcXRpyydbKDJG4xL2WEoZWsKtfE",
  "key25": "BUfTRzyev9VG6cNm48GKoa7exnUEB5VRFHvU8FwSVdftEfrX7aSrrBdUQWeVjqikF67N9jq3ARmbn8aws6tnKJY"
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
