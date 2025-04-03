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
    "3NHH2ui7qifHEZMPMV6QMRFRF3FrRAgw2grcZnfY4AAdagabVCA7LhRysoTLsx2B1dDzHRjfxQP9nPVh5nexout4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S87sWhV5oaTYZzFRKDXzYrZ6JRsBUS1eZTFUEjbob8ntS39UQSjs54qTriNMD4eZRyQAyfHt2HHbb5aoHuDnQZE",
  "key1": "3npYKQiA1JV4q453AWMjoa6RiRV3f5uUZZCBaH7R3oGAuQWxsib6wbuX6GCk8UQhH9MSmi8Mq5V5cDGinMi8HXat",
  "key2": "2tPUrmoSci23htbAYkoezToXwRTgGhznRsfTRnTAcKqB9xcaQKJndqsWtCyMcZbr3FGx32Vy6YdotfAwKhECUNku",
  "key3": "3JqhGV9KNfqbPG6umi18AxCrzhT6M5jqkC9Thbb3gwu6z4jbM5v58QgQCgmmrwCaXvQxv36AqQATBKgqv98evinQ",
  "key4": "hgGjGjWqgL8hjmnMKBX4GvA48YXBrSPJLL6vG8uRJG1rPD5umZWTWnKf3eZ3UAfJwvztWFsoTHk3RHugoH6UN91",
  "key5": "5AKJPLyoW5MMXLiMp7xj4ThP7yqojyuRXEEMKJ6CxZzvdDvxLGP777J9fV61s7AjgAgUtH7fqngybnGQogDPrcyN",
  "key6": "2WS5FTWJYxxgmzpqqSfuGWtWvVKQzirXEafAuz2xGkRxTJU22kRhA4WsL1GbNKdJi77M1zmsAUbyQjtYLfRpjPAo",
  "key7": "FqLhKnJTm6v3PJivXGpJT3yTTdcgHXHFaXiwsC3CamERs8DWNbdVRNGCKo2eEQoXCqx4f2tEV3ZsiWjtvWag16d",
  "key8": "JGo1UkcK6ZAwA7fDd5HDN3UQ2Ece9E4VhkHkbRgJgpyNPpqQvcbVFS3XnVAtkxJ7r2t31CwqnzPrB3i1SGLsFyY",
  "key9": "4xjFFiX5BWZ8wdGeGNpWe3CWyTWHStghCUk1Qzd1Gky4epFGiHbtfYme1HYGo8hbbdjMVzepNZae5ts7fM6YrRK3",
  "key10": "266zzhkQwBsQbmb9nyESNEK3F5rTmK9tAd4U2p7fvq5jrukFTCYEA8Hs9MNSx8X3kJCShj1WpGDPS62q15TqkYqb",
  "key11": "3ZKbL13YjiRWZm7XJ1Mo5VQHF3WGHYih7P29Q85x5V4PUi8BZefczi11cTmo6AefuCkyYu7SA63CX82jxmQPULXg",
  "key12": "H4nhN3P1JHruPaVNFMqSeJsmKRACf2gbpSB5Y7oXQo6T3oH7XV36u8xLbb4Br98oZsX7u1xD8znjS31L3hh2Q3k",
  "key13": "3TapsFGqsHeCHt2z2KKJ8c9kLt5moHrSTUunvMzwxyS8sf9j2MEaBDXcJbvAfRdgFTcZdztprvDgE5yHw6CxeFJe",
  "key14": "2bGDmiqyWXnh6VnReJoikLV4595n82GJVEfXJhKmmU3ZdGtzrK35izRsgu1LrKPegj6K79e2jyK1yEid7pymDhMF",
  "key15": "zXCenFNBsHPXPV4QfbgbBHZLDF6W5MzLDkJbCqPto6hppQKrMKxhqktVg44kHHdoFPuXyQpWwoWnqtkw7HqiewF",
  "key16": "a4Sz94iJCmxnVwcQ8uqfXA1dWV7XrXiHGg2jBjJCooF97vxLmVNGNnzeHseabH7Kx2N4TGMtY3VB28ibsiRHCBG",
  "key17": "541ufXyEGftFCqRyEj9ggEZmJMPABhguDADeAu4ZXa5VBmbFqPWcTocPksvuGes3dcnoKZHFpdTjQ9nDd87ahcUb",
  "key18": "344aw19fwPRH6BZBnE5kX8JTVr12BpHD4UfbXHoj66KFUmV8pJFPGGdWHXvoE6ZDayV8mvVp8PtdoTbuv9hLnnhi",
  "key19": "3kpJSTg7rDQUkByGvHM9DEZZudXM7vFFaS5aHt4kfmsqtSVf4rXdStxYyZeVLN5MDf6VF1ctEBMBHafh9Ro67kws",
  "key20": "LNCo83s9ecnBqbdauRzVNr9aLLaqFjdsV748n6S1t7Ss7FAYPwszkmvZy3cErBshX78sa5ZHry2unbKL8ZGm7YX",
  "key21": "4i9my3bzWjwTRe2r3v8fFNH1FB7bPCuCrYFVCCnNrAMaq6vahaNwT1nTwEAekD7n2H29PrJoLzR1gZjwp6xeGgS2",
  "key22": "3TgCiGjr6TJdKiRVFdMUbVsqASr2xPyWDfG8716PZspuiop8d5W5BKuigVF9zmVcCtriEwJeHmgcAZzJp5TP4oi8",
  "key23": "3ktHyWzX47poMpacAJGoHAwyqz7LTAwN2DePwEXDyZWAQUuTK7RA4DiaeF5Ett93VGw1AzFjCbu6evRMTWuuQyuX",
  "key24": "4tysKWindzAT39KMXxQMHHJX6pcNRybFXEqZHQAhavVE4R5wpGQ234TaKRDC1gfUp91jmh2dir9AGNH56ne4G8vh",
  "key25": "2Y5SUzhhPKjcFQjH4XmfZ2D4g7Pfi5176VpUDm2bQf3yajcznCC7rxB8Pqn39c7rPhMMt7gaGCRTkf3cXvrrkVox",
  "key26": "4xLQkvgpAVHZHH8Fe5eFoMQdeMSXLoQ3dyYiWiVpmVZsHZGwsTK6TbNCxmmiRF8qXP1amuWRiqqFJU8HAFWNHmdg",
  "key27": "3TX8QPwmWAe3U49XUx5aW1Sv3iZVp9p9opHzsTJ6KB9gci8p4AQkyzQ1a7hi9dQHqJnQHWiqoXT5K4npvThCgNTk"
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
