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
    "R45EsRnovC9gd6QybW4Cdv49d8wdkgrczZKn1rC6TtpJmJviL1jyf3cYW3rgdmeJUjTpbW5wa7BjmPBkx7aGsEp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u1V7Qu4LtZhcmpLVY9YbDs9RuLFLoQaWRzu1JRXi9dmgdEmTagH6dEM3ELsC8n9owLYK8iffonm8YM5mbDPQPNp",
  "key1": "U9cUvxaBeki4mBxsmP2i28LqkCbacntgKgpSCoxBaqum24eJHBEVxDJgSvev5v333CKpbw8AaUCkEA2zovzZNmH",
  "key2": "GJh5XxAQvXDHvaC3d23pnhmovhK4HtGQ34MoUaLYcMbHYpz8976fMTigCnFaV1EtAUeD3jJz2Grm4jNaVR2djvp",
  "key3": "5MSz4mUXkprewzUtyy4QXcjPw4Sr4kgNf7nZwUe4DfcnHYhwZBqJDP4h9aZ6eCabXFRKshTe5pZzuKZ22e3Tmbjq",
  "key4": "5xCPuUj2xy4qzgkkZfr3V8bZU8Sx62PWpknQ9aXgH2fonXScofhujceiXC9NeSk1yKyahQBrYZaipgPQwj8SdBk3",
  "key5": "33pGzPhbhRiPFyTtqPZ6RQrdYLSptmdXEwNGNNpzfnvHToVPk5Ktd6DwW8vF55uDWtkMVwQxg12n9gT4CUJoscJn",
  "key6": "4o7Z66bn8eVFH2UdchLrhdvQU1LLvjvAconZDZfEFkTeBjaUM5Bq75T2bMvrTzEAmDyh71tAbjWTB8Am12bFRqf2",
  "key7": "5bhVVMwedfNjTWcqzjbKRu5pwhKGW7UcqHQhh9oGyXrezTrYm9gcqM7LjVNdmj27FzeChcKTXdHchetbw6KxZnJw",
  "key8": "4yskXQvTrr7vJSoeVKEHkV5c1nG28AD93EBnXj5mvow5L4JWZTf8x2CKW3mktvc7KC4DUMNXffascDnu5EK2c2sC",
  "key9": "3xZGrp7ZiRWZjtVJNsdkLGureU5m5XLNVxo8SfnyGobfjtRU9VRfwVMLMupyCR7ns7bqR3taJVwTGqNTrTCrEevd",
  "key10": "5AfzWCq2pzG9DKRm7fYCSUCjtywyrNogwhkh4XejQhMrmc2AqRG1PYPzFApy2UHYx9TwX1EmmN2aemwKmL5o377F",
  "key11": "3smh24PEM3h4zPsMNJi5gkcicqtoeLMuCJnyiEwzAWRvh7H79UHpDExmeU6BeZYHSbZVKHjVrfP87hEhL6CC6kJY",
  "key12": "2yvY9VhdMea4C5HDMkzFoFJeAqt3UkTF13bkqzfx8dXnwhbB95x3DncCKbFNMwxr9K2PiADqHaAn2vFx5xHCPzTh",
  "key13": "3445128XMd6JPK9swMGiTTNRsNyK1NtezhkxHuWkX6ZcHeTEjzXTt2aDwAxyp2xMvRFDrRcixwppZaBNt3p8wHt6",
  "key14": "iBLZchJc99NCcDNoVAvDKBwgkJR9JedSfeQvzfJbke18Z7GnUtFNFChSdMtTopc1SApdqhepF2fh9i4dfzh8bGr",
  "key15": "5NJzUGGXUQiRzRR7F3jtPaVHzF6Zoz3xc61n9ynDpEMXmB5rZE35aFXSQEW93yTwB99DRwG8uyUFs4r3HbZa9ueV",
  "key16": "5kKmFgwD4B2bDWzc2P4pSqe3mBkhsBUHb4cMbsFHNwXph6yjxvtRxebjA7zoeVFF1fLqwQn1eZWZLLihtCq5DskV",
  "key17": "2ZpE5bJ11ndDsb5iqtFVJvmdT9mmmByus21948qpJgT6ix1YV1EQ8VPjTduPhj1QBAVgHntSJnvrdUjg4qVvoRfP",
  "key18": "3XiWo5pVEBXLtf8oHJMirajtqA4HeS75Xv6F4ytVvKKNB75VSgxF2FffgS3wgvFQZuMDH5BuwrtartkARuYMcnZK",
  "key19": "zC5hgpQCb1xTmge2gHLMGReLwYiN1RwX5BXgmuYCLHquzJe7anPhJ79ZJHwQScbjzrdUzTMokgPdmuTtVZH2s2E",
  "key20": "3gCHEY8wyjgPBiZzYd6ia2CKKyMYxiUzcUwhCsCb243eJt9d6h1Q4HYcmtDUQEpDeTQPzitsptRFNdZa1Hb9aNVd",
  "key21": "3PXhAgUrwrE4kiGbX2ZKcnH9kYLiLJcnJEkUJEMeBh4DZ1ZVqSDwVRGhLFJywp6EnjfDgKS6jokoKzhhCqLxsfn7",
  "key22": "2oBGSu94FbdF3SsTSHzZTB2LE6mV2R74N8KmSj1PKW8F1iAcFQSBaeXuDS7FWAaR6Pq3tixfmC8b1o4i1KwZPdBo",
  "key23": "4EJfKjn7KXr7dFwKuqwKvSikzurbkfdn2HPDZPsomwMFRs3WyF1VaBwwXUWuTo35VfMWY8w2u4eNYdBLb327QWze",
  "key24": "4DYbhrHSpDVTcagf7yd9UjmH8NtYyJ62mp5smb9C4hhJ6BShmRsx5XkMDGWzx1FtzCVgu8pGdotD3bzjo3HHQJtn"
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
