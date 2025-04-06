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
    "2fKaG61CbpMJohVCZSFjYCKVsz8CcFMCMWei1sDGtZHWGrUijXe6p5XmpXTUjuHagksBzLxC4U3j1q8f5X1PqTgU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p7UWJXVTkHUehKNpWu3wa1AEUzTLJWGY6dPYT2fgN7WhRcr1xz8ScaxndJ3oMZ4GtKjnFkqdnw7N87pUGmgt1Ts",
  "key1": "4MQ7TE6UkThKW7qsyHWPEWcgzJzA8eDgDUpKbHPf1e7zGyZcMRemGn9qTBuML5d7gRyQrPatAHpL6Dn4nUUwEzB8",
  "key2": "2caH2qujLiMDh7YHSXoHPRF7srJt4pRz4FTTtpufqSjA8n9qyhobQzinL5W5XwgECwq3UKB627dyyhhc1MraFoq6",
  "key3": "5gpjU3N1mcM6QwFqHes8mLseCkTYFZVerw3wqxE7pueuV43qyX573rtD2rfzYHgtcbZ1cvGTX3GDLWgiSwJzysm6",
  "key4": "4Dz6pGmCDQskxtz5WQboVhhsmszT1eyNN4qMeJ98wqBDvMuJBzbrDL7GMMgxisF89FNt9AQu9UcV3rZiHFqvb8VM",
  "key5": "2pYS4UqRgDsDkfYNn8U5yyHHUXfzXootr77WXpaRnc4NsJ4oLCwph5cPMcfFjhJWf8mStoiSoqyA56mbKGKp1bwM",
  "key6": "3sSXZT2Aw5n8yooCoeDJ9roTpuYdvH8nmE9Sm778hYwJUnJqxNBJpBEpV94vpHtuhvdot7iDL1dmqw8zC3d44mLc",
  "key7": "4pmWMmqm1DevaQHomparMaEQFqnJ6PMugiaprxWjXmrpH8imD4aLN1E6SXKyqjzMHbXyD5msionjbu9zkZRZedyL",
  "key8": "26rDf1Yj5pckcQd567uNdoBRUeyXNHoBCPiQtVC6HLgzvmUk1993ro7eKv4miCU8juQBJNcjUriCKp4srQFn33WK",
  "key9": "5xNSC4F4suq73NVbqGMWTQRV6SN4kFFTB5yfA2vmSPm1DqYgWSAwEj4cRWVAAX9fSnqWPYp58y1RPUXLA2oUcwkZ",
  "key10": "2XxGJzogrYsnpa3JCgDmGztd25bq4PysUQpqQUGtUmLJ4xhPjmfAjwXZgqTt8dyjSNPYw5Q6PSZhagk4SxcqzRa5",
  "key11": "23NQC6AsTS5a2EgE234o4jT3dWm44ViWDLtEasLcvRmDRGUFwXoiZaYY2YzPVWfQjTeEwoHMj8PqYfVPNNhyZsSv",
  "key12": "36VRTndYV1Webgu3dvLNyaX3mtnbu1DBmVuJejNocvdCQ5A1UPAqikkgFjXRswZQ4DbW4HvcsCYfLJGTxYoVPsyh",
  "key13": "387Qr9phRLsXC51sE5gRHphGUKnpkne5aRSu6bURdg5ntXgzijELRW3ebFMoWHVMpa7usoJDuTaMh9znJ8qzCAw1",
  "key14": "42zvZrRE5VHFJdzRvfqov4JSWNokpsW8zHCw7gK19TPX8aD7qvAmaWWbJaSj7pykPXDeDPbE8wPgt13VXEkvaPiy",
  "key15": "1SYKjZdEh1oaUJGw7hgZCMfeFSNqBRjKb5yfERYL7AMjAhZoZViZww7wbxz1QcU7hxF1CHkFu5nT43LXV5aFfSY",
  "key16": "533VgXpWBkvs2jerPqHDFaSG6RnXpT5Qb5qL6G8YbhMkLyDgzCC1FahhAAd2LiehyiaJWtC9PHy3NxFMbaZvnpxa",
  "key17": "uHr4Eb2r1b4vLc6TD72GUxBYJcCX9wRYdKcokw37A67HTpeWXZ45EjzJDfp5LCxUa36qo99wbGaza6tmPNQZA47",
  "key18": "3kdYzc833jkeVdxUdcposRM4a93mpLwxTizRWxZX1HDwroxX9P7jtHKkkzZtTsCRU6EQ95rLDDfhCb5uMSBNTcoy",
  "key19": "2B4Z8BduiZ3AyTaK6DBPV1MgSQQa3TGEDxtepYRmQqZHH8qesspAKCu23kAuoCWttpcUmYPbT2H3ZCFSR6rpCy35",
  "key20": "2ozWu8TZaAuShZZJ94cL756Ko3VCyGrfALUk9WL4MQAppWP5U435nrgNcdgSNNPPSoGe3Z1eSR69TeD9mKyBPMcg",
  "key21": "4nee6WrhWjEJNjcrNRRFaU9D9tbkkaUCvM3unvG25joWxPt8kDoAgVjJysxz57BC3jPFogrh4mH9iDH7hdaQBvpL",
  "key22": "5qqbSb8VBpkRrYWqWZffGMLMpzxtxMX5nFNHjXE2pcKx5QFd4v73snK1a9RLLcFmxj1LwaHxBHv3ESNMajuFNp2F",
  "key23": "DGxC6rF4MPjk4ggQk16ZouYKGtXQQsshYBLyVT8Erh6zapX6PCTd9T2TrTr7r67McTUs79KdHytxZT2xWn7cQ4y",
  "key24": "JKxqrRGVHnuGhc32bsn5aVF6nKc6dPJsTbXZrDdiZe6QWD8rrvuG2WSSxjDe5WniJuyDJmgrRWwCXMfJDsygDbq",
  "key25": "33UvF8AV8pq1GtSp1FdEf2dXAV2wnsrrHuf8dSUB95ufdzCJFH5fCpYbkNWg58h955epVMMcZnS979bM7s8TTUyh",
  "key26": "2iin9GL5FmkZbZzmTaX5SYrXxzj1rphRVBztdiXRmacxCMauqZ78zz7VegehUHV8UBSqMVepRS3D2LRsD4hiNYFe",
  "key27": "3YCnMSBgdZ3x2DhHqZWySctQVRFbKzUsxJtuy1Pjkba28VK6or6ES4WBCXXQkLgPjZcSEvT8K9rSnMFg5ZHcNEEP"
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
