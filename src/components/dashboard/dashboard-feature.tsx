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
    "zsegKGNCcFb3kZ9XNvsQaehzbs91pCmFa7C2w51Ucw9iQEbeqPU2yoHHe2SZRmdC5ZehAWSh1eSTTBJL3MMCu1v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pjFhVWohqRAdRDGhF4wPFENXBuaTdY5ztbUMSo9jksTxUPhn1GKDm3ztKHaxR8uWkqzGepnkDk8vWoc2PWu3mJ9",
  "key1": "31buwEXHWYXfXL11xVRPjt6bM7oMbHf8PtrUKjFvcqKZNKTJh6U6FopgHoJNJN59buZFZJNKymaRsxHnhg2oG3LP",
  "key2": "4csFZLGUPEqY55QKCbqAJPyxQkUzkbqZHzt9RqZMFi2zeNMM3Jn43GYvbR8AusPPfjk26qMKLziAXsXL4bVSNika",
  "key3": "MFXSVtjWKPbuLTxPyddTdpuGkN1fn6Q7gXss5BmQhisA8avGVY7PE2ARwKiZ4w87spDs3fh3FF8MocT1AbEGN5f",
  "key4": "3WeEFz8okjrapRKxHu2gpvAbWzoP96qrPKThDhJSmNfiPzeiagdyfmGvganTGEQEvDeNWLEbYH2yw1QaNVDZ1gju",
  "key5": "S78FpFSeecUs8kPN7zvxQggZ4hivF6iumLJW9k59Phw1w73tUBMNKLmnfewKQkVDgZJLYYoLXjgBSoWWtHa6FxC",
  "key6": "3PsNVor8GTy9W5GtrYk7nf23qswgkriERVbCBnXj1b9UHSdALXTZMi8kTFZZtJ1nQyp3nzmZVQ8TkbJVfTTEwW9",
  "key7": "2yGBjiJSr2XDNzVNnF3kALDGQQ82DmLMCpDAhzTq7Vn89dhTdRv8qpsSyGwvCv4jpGr7oNX4saRGftPVoCqmfca3",
  "key8": "hZ5Uz7ZCz9YGxhAZfRnxULmuYJq66CnEwz9nCKcrmaD76GNnvphjwGLaVVxiWA1q7ei94SnSzMg5zqb32KUWrNx",
  "key9": "By12Gq5ENDi4mZqtctzwvbRiKmTHjHnsYLrPMiBrHjKySuFQdDLPPGb5fmvVwc5q1ZWmQcp1PTddoqikic29UWz",
  "key10": "hJCMhw9SzEPbDwYFgSrjdmiT7Pt1YT6hcaGwBzUsgSD6RsUMvKWPWtGVwXCmTVWMRra5dc9ifujTYJX3Wyd9a5W",
  "key11": "43KiZ7a8vS91csfBibfMsSGcRyDHtem4yU8NpWrEiyobCogVXZeT9sL4UhmLpsdsG3ZSBA8483ziUoTQHKrzbjpU",
  "key12": "5VDV8kXELh3QMyv3gebQSB8QM3J33NEApvrryNsnqbZ9UDPgFQGjWhyfnqkCB68d1FcrSDQenQG7dY4FQrdvxt1p",
  "key13": "5pFrCQTGFhm7nrJLkqCQjNQG4AHnXR6dUHnABQmAT4tgCwFibYUfoP5SgHpoRovRqA1yVT1bLZ7Z4SjFSQNxEDtx",
  "key14": "2JMan6YgpChTXrWNZPRJDd32aXemZfBQLYGJR7AMoffCnbU9NagJGxC33Pe47ABErffjz4sVuxZC1hcTVf13QtPQ",
  "key15": "zze4grEaUdqi3xx4QsEWCqmxneVWKdr4rr7aUsGYfrVYSTaceeAQpuVBHzV46SsKLavW7KZShk2V6YrDoA8KK4R",
  "key16": "3miiuUhnZWugXMQikuEMLU59ixZ8o2gNj7C7ve8RRC68sfajMYTetbiPhLu9xTAbtAbMQtjeJuACHRZqhNN59RUv",
  "key17": "66CRMTdXfU6PdAchVHAuvFA37MdsRFVt7exf3pjbUgev9LyqJVxZ5ENnYHXfjLPUFEDQoA29HoVsmEYJp8qA4yUC",
  "key18": "4UgkNGmJd2RsyX8qzxKzSH9g5kh9FmLsfXkYdt1f3QtSwGBZDBhBz4BCp7yRoAqACrH2eJpJPRAiEWBcvMfWN4VR",
  "key19": "352DfgPBYFGqo45ifaJEfzuPdrJoFZ4yeYkgeR5eSD3sypKehuW4irQuegaBB1j46MqhRcbiG1Sf9USq8nkU7RhX",
  "key20": "2KGjRrRu4HKCi254XZDM3AmcuFFEXjFMd1APCL7BWHQSSCBhd6Gj6kijw77UD7G93JiQhbXUq2s4ydLJiJ4YUmcS",
  "key21": "3wEKjeeKof3QVmJ2a8Ne7VPfMAx4s2NJz7j63tVP9FCsnDY2vV6z8KtxNSC6hzJchzMjuWSgo7MZQaKPQ21pK7F1",
  "key22": "4q1W2T6mvPXJWzirgSwfqyiwryfAkdHF62j7KAfFHzeu8TYDm18p24afpj3WAcQSERPhR9D3LKhxsg7vkYNbJcam",
  "key23": "3vbGjDBLbhw4zXPWsisBqsaSoqxgq3gDLyJtbdPT2TxVZ4s7zDaAXrb2LgHUr5wJjuJa3Cd3d2VAHzCJtR3wMgZ",
  "key24": "4b4rnw5bjWzktCJCzfbztZe7akypjxrwGGL4eADgLctqT7MDigMc9f1tesEYHKjxEmufxDwSqy16WFaXPfQ8bVyj",
  "key25": "3KPxPqfcLkywEC8P3NWUNpuHqTM9JHT4bwDHzHRgaJSCQED43jZLaYky4Gq2xsHoBEE1WcUo3Fryge7YnbgxuAmg"
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
