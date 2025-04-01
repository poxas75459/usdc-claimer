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
    "4S2HyjgrMpvknh1ychLpBjWLwdcswtrkYMAQu9WwFjvCz818Fn4wdFYzi3QmEu15tBrc6QWPjX422XiKoYVtqs3x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bpVSdeixadc6NVdt6bsDwURB25tNi7VxwWGNqCMBke9gCmqJ8tvrEj5Xhzb4VfoQW81P6iDjgERWpC5EMqWKjES",
  "key1": "3QBd6jxuKwZpkyVpE6W7F8vXqeV6iabLD3eG7Z8GTZEnq8udZihCqmG4hRPF6LEYkRQyixynwT5tzbrcDsE4HnaF",
  "key2": "477LbCZzv7gyje3ejMF8WmM1SAGJkRWGKh8EUEHe1W5vx9imDDbNgJLnM3Le7a3aJATJ5iwgeF76Jk3AnTBx2xTk",
  "key3": "4ByK7UxhwuC11Sg3hx4DaTLrmcMfhQLqSUtAVvWtQqAYgcf7UppDApKVuxVz4fpowzzcTeWv7jDne8saBvwsrfD6",
  "key4": "yq767nfXJ7KgoxhWcEYwRVsb9UXsV9YWMXed4zY91Lm4hFgtF6Ga3yMEYjU2XbJ4vKonP2QeWfRzjZWbt93tQXB",
  "key5": "3qXcRyf2gPKgUP9426zdhrEFuMr2Z52JBakSEGL9d7maphxmDGoSDchW9FjK8A95cZr3sYuacwCpCzfnE3BhX25Z",
  "key6": "5GHiHbGR8tHn4tssenFcenmr2cLCzi1QR4JfESuWX9B4uwGPrCVHDNYv7Eu5Xkh1c9kupyvE2LLUpA1qRjELJXu",
  "key7": "2LrA4cD3oyWLLo2kyYpeu65siK92zcVo9k8fRdijMsXo2fgWS9aMdyPNLYV9P2nG2a13PbzoV7NhoYyskAMg1pfj",
  "key8": "2HoiHUVibhTByrdEcKYERmq4qGZoU92sKkCSPyccF6efF47AJoLEfd8gntsRAxUAT8JdPmj3xiR73oWHi13645Ee",
  "key9": "5YsCjwGwhBGPbRCN1k6UoiDiqak7YD8arUHtQVun5FpeeFXSJPFom1VNNWiDu7B8xoEJedKy3xv6DiyLkeJ5HbKa",
  "key10": "2uyfMXYCDVAAEFZNQMNezppuibbG4E8zf8DRbtXWPUm6Uz5S3AfWfPhfQSa3jdb8yBrpJCr77sNUBKujNJhLfHEH",
  "key11": "2BEpsBSL1q1o4jyqdHtPQKW69FjkUktXMCvB8qpqSJw6NdyorSMtmibp3YBbvigMLkJTqcGXuXcpmUjfj3i3KopE",
  "key12": "N92imQfJK64iq81rVfLJUDkE5UozzkB9J6EMc6ToAt2cuvQYXEgdwARmgkdx5sMUgmuhpa9GXRpqVPFodRyiYmJ",
  "key13": "4HqCsBHjtQMPQRJ3gdv8qWYpAagBaHCykb5UTisiVFpdYbCuSdb9ZMtZeRfmx2hqcyxwSaGwbKPc9UZLNuMBhJts",
  "key14": "Vgz9uArozajicnnDHD3dtra1z3QcU1yMWJXMWnovVxdBFpCMNfJ95MQZVszpXskVRWVDqHPPzCL12sibixjnyN1",
  "key15": "EfRpqLmwHvBoWPhpMPYLu1ecED9xYnMRTWfiajG2LMdd5oqXLghSEZ7w4DnYYsbLzKwbHqjHVKtMfGfKhEmkdnd",
  "key16": "5jSMXaE3jCkaaZtUmBUnYaxJDYhkZcJAP7Pou47whmHbSwT2v9M7hZ5ymwpxSShL1k5j9eLTXdfCZdnmS88diCut",
  "key17": "FphKArk1oo3SKeBZqs8wE35dcCs9Tu3W8PRSoPGMRVSU3X3B6HXjenCtL47SXcffKG4Zxuaqqutf2Hy5tJ6iR1E",
  "key18": "QPM1WGixBqgaZAm3ppL9GFRfNNnhkmGBLkyS3iihBRdbCgc4aZBuyVxsw9tmPk6kVV3gAp5RLF411phNAKBxNAo",
  "key19": "4RFFZqvVqhW7mH6MT8g5yZNgvviYJodwxK7tfoajFccUwP9xSgSLCyGymTBSFaE2g4mwUamMS4fWXHyiCUBnwr27",
  "key20": "5vnj4XJbStb8yw4kaxtFM9FAhWo1tLGuKJDZxgsXv43LuWjGbHQkScqjWDNk7RfZB5r2fWLNtXEwed2n6wGu6gkT",
  "key21": "6661miYoXPQTmEWSuhdEMHDZrMi7v8gFrXqtcJtW9dtDmpA13vEsKGMnMK64w4A2rDavRtSwAzLxuK6LUKGWrWuF",
  "key22": "L7NdvttLc9E9FyqDuMQBGp5QA3CnJywGD9BU6SefrB29tRWLR1k1xgKK7mhJHxC7c1mWfMMvpSYEvSrEn5yhavq",
  "key23": "2xnHWVnU7pvioprG9RFr5mR9EpUBFTX8AHyNrduRjrrhjSRx7idQ4buS1t8BZJBRGC1NDYJGvKLWf2QCK3e5vwDU",
  "key24": "5UL5AaMEeVNXYJV8pqC5vy2CCUAHJSx5GFVaJufozkrL82t93nRnxfJgTFXo61gakUTGccH3ZKfcmhj72W9eoW7T",
  "key25": "3GTnpQY1odu9an8MruDptN5nYy3YLRW6ANSQhff6Ng6wg4QeBiAFb1e8ayHfcc2nMQRP9JVdekopdk7nY75LKmiu",
  "key26": "61k27kv6brAyfcZmLqDTiwprAbsRf9oQ6ksHe8QCyLFckNeBZjdGkVxvXm2u7t4ykQWbaWkUF2NTpaVr577pbRRj",
  "key27": "VJ5j4xZLzSMGZvcuKGjGwHjS81im8vEs8KPP8GxPARDa3w1d7wsVvYntK6CBYkStNJ6dJoxkrgnMzgZrWZHe6Ms",
  "key28": "66aZALewYRpmdBwz8mkDEWm4efxXu6w2Q54hgnyXyMzXQ6dcYLPjMzGJ7qUQcQq5KHwF1HKN4fKoMUC35hxKavjk"
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
