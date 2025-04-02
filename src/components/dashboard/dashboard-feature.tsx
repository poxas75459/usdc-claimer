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
    "xQHYMrZ9bper699oRTAJaEh7LUWZ3PyuXEuQiQFS2vX1e9gsAiZ3ax7qMqg9WiCqAYgsgEGLhkkw3T3sHNt5vGT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2igFfovkdFfBLwUSv1M8AXYgojNVFAWjQw6zYZu5WiyMesWdSyKggXn65Bo5gcTrqewjTDNR6medQ6rbbKpVS1eH",
  "key1": "462cJUdk3CczXVkfgSBRt6eyWhFfjGzcUnJ5PAoyK4RgChMJ3do1iAS2qvsMuo7SBmUkpEvAhcWGqsfpg7pzseNE",
  "key2": "EGmuW1531QfCjgNCEHsKoarZNBUthPp78NEFqMi1hregxA7Q3qx3BT58fHc5fHFiGeUk39Fr5Yinpn7TD6ZPdvw",
  "key3": "5LRgZ7pPA2cynw9wwTm5mHp7uZeDqcVeBTuk1rqNJY1AwLYJXCim4c2tx4sRVXr482YJBEKBXShrCWuoSdZrJGUv",
  "key4": "2bxRKcPvUNFcFZd38QrPrsVhaSenC49iyf6gEAxcRgZ3bgr8vCUA4jCYco6W3yKQVjYrjHzpNWZaWpgXP7cDcLyt",
  "key5": "3mSCqLSPw4UBtV9WRxhgPnZ9uVSVfcGbbiMCf2mBnkTZ4LjLaKgPBVusUwgrbFqwQsgjCaxkUmAuhB2XvcGE7S4y",
  "key6": "46QwJWKhzNuzMyzu8dTPgiLecGNVfw7QpY911QPdK9pEYta3k7qxX61ASDvq2PxbdGUe8QHywcrDXDjQ5JFVCUoy",
  "key7": "UBJaM5oW4hskHmCKxfnhxrfZZJ1DQvPgsxgNwCPRL6dyazjiUF84QZoVb8dJPCW4QPAuKN3wcxjFmq58D5UT6Bw",
  "key8": "43VxWekpwzBKfaY2AcaGdSwVMtp1cCVmR3foegVyi9yTrjhp6Zmp1Fbb2EYrbXq6SfRPujqU3g7nS6prYp7ke3Q1",
  "key9": "3cZcP2KPuCwUfQWX35GrDcXLfkRGux3btgZgcDjtn5n1qfQVJuwF7aWpX3TRND8V5LuEaa1Pmm4k2buh3fvL2han",
  "key10": "3PxmXobRrUzfBT1EVzVzYD6SEixQQWXjQnknH2KsxjExU7guBRybPy7jD3y5Wn8g1SE8ZSwwkBLwbbAENgw91cXc",
  "key11": "26PFDvbMmZ9PbTcpuE4eNw6hPJdWNpELdJgVLhD3z1RzB5DZKWSHtXZs75NU3iaibqhXE2KSqKraqgn1d7Bcocq2",
  "key12": "3fu9iUMFfpcHzMnZPkkXjwpMFHrbmy3dSXKm1VkTFTJxP2J3NL6veCtWoP22j4WpjvkLx4z4spmzV4pZjge5TZqY",
  "key13": "5d8ERWUKwcR4aAPgPPaevpU45DnghNRg8jNy2G3uMGTsqhFADvjHHfAFZsLBEzNeypcV64pbmVktpXsfPKCAwuhY",
  "key14": "2zfUTrPPG6exnuh4mWZjtKb7v9CKkYerjNp55hnMWDwm5ASAKgZ2rqVjQ5zTkV7AVGFXRwtt6x9bDbobtefjm3Uy",
  "key15": "41PNcykkkhzYgidypZCHPTpX43khBTnmwhBUJXtW8wAFtG9cHaAMy4JRHntYhdY1eGAHCnqQ7qcbsmuoQNZo3eaj",
  "key16": "2NnAQS6TuWrkFAn82StWSUy4gSXzHRUHAT5PJs8qN4KmxGUAEFB2rkRyaghAtvDEYrqi6qXGrSTNUBDFJqAuA9EZ",
  "key17": "tHgokUkMv7g6oNaSc9skSGM5S95JFvvFXQZQN2H8qwDgmh9xUvMfVmhTbFGWSFEFCAvnnCLgmAXVqkvW84PqmoX",
  "key18": "5EjzbxVQCqRABDfcshe8GpUdRLbuHnBo7mPgbsgsevnmTB1Pq7cyn6c4QDYmj7y6jnzrjpJPegVWeoVpkccVJLD5",
  "key19": "3LRZGaWe1sqv21zBcja2B3dZ8WVM2tARYQdzHnkmAMetmM95iqMApbiUESQzHurv68zhiUuJ9B3xE36hS2bMhZQh",
  "key20": "3L5QpvLyp3xcF1z9xhzQ4okpx68ggNhZKfdLoZvrY6jcrdLRMUgSK4PXnSD4pdnL6NdRqJCGGUHsrC5L2T7LHE1M",
  "key21": "sSrhLX6J2tV4q5YxDzLcq8eVoCLzN9AuMtdmTw6YbqZqdqSokhkBENFBJTfvKNuZEEnqgBn3sErQRGF7rs76Vc9",
  "key22": "4heyQUJa2Lktmwk5HU9LwXBpsESFhknvvyD99VJBFULTYEZf2h7aksDkjfbVnovFkABmNi6cFaddX45e7dKfqk7J",
  "key23": "4WYWWwHQbH5BMPLnHBkPm9k7KezdidbhkiLKHovZBUEHVS18Pz2KdPAPrjhQKb1vnHE5YTimUu5uxTSHfPKHfgeK",
  "key24": "27MLa5F4gK9qKMbC7Y2WqMcAUCr3vuApDD4aDL7jx3C3rt6zj4HVSgUa86pWBSAJioJF3mJ7JxNXSg8aSVGGyqie",
  "key25": "5gm8yW6LiLPm771bjfwiRtTwswT2kyoAn3HoLuPBfF13YCejjgjWeRAEBbecrM4yF176i9Rk3A4ZC6yb9drTi8Vt"
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
