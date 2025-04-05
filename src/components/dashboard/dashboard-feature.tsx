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
    "3HpWF8HyNtcwMaSjVkfaKrECoA97ktGkyCNrYRZ1syuWs5po8DH18jZQyTRhDa533m8onAzXtn3m6QyfeFptW1kV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HbncJCf4WcaPhQJvaK5viqs6gx1WKCHaqBVUex82xajAUYhvVCp3GvM7JSwp8YWntdgP73f2QGjizPJQXMBQFpj",
  "key1": "56DGnwYcCL5pUGp79M3uG81bfKiWFtkqMLFb5yUjKLM1GpK4K3Sn1eXNq8RzJCEw9ZWsDGd1qKss5nn7zPpgTp2X",
  "key2": "5GSgF8TYAq5ZPgQt8x51qJUCShhbWrkUVwQbmDpxzy3ZyA9SfVKVEm5nFm2PbkbQGvEX9vquD61Fb8f2Q8uqQ9JG",
  "key3": "5BpA4gm1821sGa3p8ZN9ZwpZKJkj4wNVn7KKpVx39zsT95pDN2GKmvscCdoG8p3zoL185TzpMuwbTAf5UDgKwS5m",
  "key4": "5kJcy6U3SSU8c6SHzMwSmYrxnLq97v1KmEtjxufyXitqVBVKpqwgGst5GqwvkoidNf6bgGxtPFyhtDi2uCzhrJff",
  "key5": "5fSpmWtnVnSDuRi6NsYwqdm7Vvz3w4rLk3bmUBbjiG8t44yY1AuW2qqqX4LqAQHAEb76eX9zzitNZD94Teo57nZJ",
  "key6": "zNZNUukfTLZCs3MtqESgigpgsPzYvJDXooQc5ChYaTA2S2HHMC85we1tbVcQYyVz7cvXtWiWNx4P3dxq2Ufsg3A",
  "key7": "TRAJFpDUEa6Q3AtYR6arUNowiQVMuxFBcAs31RcVXw9vSYxnQGtdtbc2jz3WQVmCMQ6Nq5LDHXYRmTqRVrCuRKT",
  "key8": "3Whz4PpLWJPdTJwSdo3CscdTsYA1enhqvC3t33V6jaL1Z8bKk9kxBwJBNkziZKZGfSBmYWWMrWzSi1XxdqrLGEKr",
  "key9": "2mf16PwsHMnbBkL8VChiJsAydNJ96PBntm8Nv6KKk7QmpiTtVRgWEFRmzyWHrAZxebga3okzt2K62WhJChSNxXAd",
  "key10": "2NC6ra65f42gQ6NDfVzaGx1qtJxVE3qNy9LyuTjDkFmgs6xtXUd89gbNQcDNRpGwgM325BGAwqX719rkxLYwYu4A",
  "key11": "4iLPB62g51tqkE9TwLrg8d5THQDhEcvyYb7WSAK5Jy9WPb3knEA2WLyAR8qxt5uaHqoG6NN7DKCBRVKssnn5ap31",
  "key12": "57CquzpDia438m6ced6c4h2DSUgCFc86Fy9WNsygMvzbTKNsz8GaqrSr5xrEtG8VQoZ6MJFkgqjDnrkf8aRgempo",
  "key13": "4TZTsRBUhNLuKkya8vq5TiZAz1dMdGjhPtfg3wdLjw7yqrPCc86giW2Ha371ZMWVtu7bAw34C9uGfUfBExNauhEK",
  "key14": "2d3KZfdqCSK9wB5a6sbmQ9HHQf7XCy3oH7HdyKZQUA8cMnV6jPXukfMX7gLEQAdMZYm9qVS7hpYyKuzZ6oC3tEV4",
  "key15": "3tPqiYKMrou4thKCJrrqv2MdL3X5UhqzT7sbBCBr4rzjiHzxHUcqRq1o7Dx9HQUv93dJ7tDcShqkciZuLEq5Q1Wk",
  "key16": "ydmFLnErqJ9nRE4RTvnsY9ktP9jr3ssyxnnZQxh7LU5qq5vUvmfDdMPPt1y8Uys1UKbPu34qTdwJHRPR53gAbiH",
  "key17": "3z66XiyUwrDqACTCEZL2esSe6JqNxER8oVVHGKb9DjTYM9cWhsN4jsEh2JU8XA1mq3CdWy5fjtLtu3RivCbdiGyr",
  "key18": "3isSKSfzMdHFromBqN4GkuJAkeLb8CSeMuyL3EVT37CdLoso1sPf9Gcnw6ihhCkDwTXJ6w9QvRyjodv5siQoAHqK",
  "key19": "3tLpoaoyVt4zCgsJbFmfWBkyGScqHWSpMbBKFgV4fhGtHb8NoHLfTXyxUPvWT9uHbAkWEyF4sBwZR5RLZpke1dyv",
  "key20": "4ofE4u4qmArribbqoTFX1sXZBKcaqSCZaKHYgqcnaMV23VGmKz9k4ULkH2S5BbqAxqmbK8RLNXo47DoM58sxWUWZ",
  "key21": "3cDMtQbTU2xESqo3Ybs14dXpYzte1eem7JpNZh3W5gzsKmFqYSBKfg4rmuN8aw76i6WBrgaXdazmRgcHCBQjhs8E",
  "key22": "KiJik2CbCcoYiDeoLE4LRmhAQED6oS3GMjRLX7p8ezwa8WGetoURzoViXhX5BVUTjEPPVbBgwZtPx7meQXyzdHd",
  "key23": "3STYv7rsRaCWTU3tAxAWuKsDfu7gaPqCBpqiwwvQeb4SvMecAR1vtamBFACwuEZ91YNgSXDiBYbuMYvDLo2qxBhn",
  "key24": "2NVssTfx1ovXQKCywrhy51fxTkkCS7AYWceuBXpJPydhdMG7vdBAW62osaF2pthEC8mLvxgz6yAsxagmk72QowUx",
  "key25": "3vEgk6HhFxYzq6DnFo2FU9PhTdvCcRp8bJRXNnkx7gRfs4w7DQLkm99728u6akfuRkEqZ8B9q8ccfroiCYNdDn2M",
  "key26": "AdYXiSi3wT83erGjqqWpVtWUKTQS6yfnUCjgbqwcWf92qN42Ex3grvrGa5QoAb7CqAzFXxWRJEnLdwy4bZFc9Mv",
  "key27": "3SA4Yqj9VV26wi4HYw4h4whruG8TKBrMGp4kYJxBB1bCHBBvjCiKpbygt4DGTTBp8fUw9A3XZQ8jRtQ31BUp4aP8",
  "key28": "3XPsaymmEmPemm66JL1uTgaR7ViMXQQBLwWNL3g8Skho9cujrQgtXww6vhucjr2jYNFBUmn2Wjh3fUHYp48Uo22H",
  "key29": "2VXAUxsw8SBB6gRfY6cjzzxXCuHSGrBQqVvzegWm1sDuTu9pizrnFUopP6uKkTeVGa3Z52XCshsDPMce5PPtKVav"
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
