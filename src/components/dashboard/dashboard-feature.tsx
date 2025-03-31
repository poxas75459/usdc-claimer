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
    "5KQ6LuUtbzEzoWH5GrTKJ6MTfbvsZFQ6S6mvUYRD9aS2v5dFSe6ntfzZaeK1pBRDBrGeG2g53d5ZbiG3FTnjbk8D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BfShn2ze3oQMX5617bCRWrHNPuuHx67kkYUUo3ASLRGaCrGgJ7xjTRZXSmVfhwBNajAEMZQ7WxtBTXN9tYKZZhJ",
  "key1": "39wRADUmsWr4wmsxez9XNQSsktTaJ5CLmcaEu1y6UTd5iQePbgA8FJcj4SnJPZWY63v64sAjtfUeUAqnKd3Pnbdy",
  "key2": "4f2RYC5N2RUeeYfii3i4Y8uPuDT7RCbZS3tgiYZ9CrVN9MhtQPAPQkNArbEj67KRfwDkfVmnN7ZWRnoiDEyM8aGp",
  "key3": "6267BKHJPZbzXXNJpn6pjNkFx9ddNCSWeF2URNtsVefHbL97VXiMAkuoBVsoY2QNaQ1UpkqRCSBdqBVzJ6vBS6mg",
  "key4": "2MYiJKRJZseEK5vuMDmZ3j2xKyfWxo5wpC7QCQVRoysjy4XuUod7f7C9GMCmHbtgWEB9LMNyoEhCSNyWhgBuF6PG",
  "key5": "4KzKthiPMmA992rjQkFbTrbTgmQKC5fzMC1jNHynVqfZT1itPtLU13ictsSswwPtKiRKJPyHYru8DkBBGTp82QGq",
  "key6": "2uHQGvrsC8JaTVzN8SYCssuP9cgGH7bQKoatHeFdFhJg1GAFG26pQsSEcG7dGTjrZsksaHntWVaZtBbtmTydNMkw",
  "key7": "4qTFcmxfEpaKuSAWsTTRcVnnb2WebRfxzpToZHSNdPBfP873BqurMpmJkEmzF84EcqQuhpoWRsRs5XGsXMkhwvat",
  "key8": "3CzpsDEzcSmLv16UeuztgQrqk23kJ7vNy3xyWH7BZrA9uFyvBYrzSDCWnMAuAk2Y4N4HkLoYyyxN4nZvuvQawNyz",
  "key9": "3x8W9WWAqFuU97SocmBii4iLH5rrrq9Ytno3cDmg4JvsLwqByHmFZQtQE1k4nrVGsnPbvvu2y8YTNamDjgZQgkYQ",
  "key10": "VqaeNMg33MLAdd1P4j34iV41BHTvaD4bdzzptq2hrfDk4yQe71kXSkBniMFqndWVr8exVaUoH2CFo54dqdLr38H",
  "key11": "4C8fw1YBMAK4fzfdeDSE9V6gLWHYLb1RVCLF8KnwwuLZYA7Tgc7TayCKF7N9nHRfGtufqWwhoGsUzpt4mUWme9EG",
  "key12": "3oAQBorqt1dA2JAR5Lyzobf7u3kXZdTxiax3bRLDwvie4A5hQPZ7jz1uikRxxD8EpxXKige43CR8ApTFBj6Taz8U",
  "key13": "4TM2CwGLJXTBiTHunFme9pimYTCsEiPHDuiY6t6PavJjFjTRPnCBXz5FVhtyiTG3o9WRrq4m877jHHFo4eLftwRE",
  "key14": "3uZrvBkk1QZyNjENEBgst4XT8apNqjuyphEin7cUfF3v5iUrPhF8NJUNABc8xZH5dq2kWJCbgnpVs252fLELA1gH",
  "key15": "3tUoijzwTmpNE7sk3hEmby49VYf6V55ZpPUpRGd4yL7w4ZNiCDBGXH3K8trmiaFBzaexvNL7nbiYUpaRfD2vbvsW",
  "key16": "QDtZiZkds92XSViYf2Hv7BkuEfnR6xjh1EEJS9pZymJyfYRFNVstENwKcr2L6hfS89vAcKTvZ5439WuPaA2CyfC",
  "key17": "2e5SdrJseuyxjcvAkvWjLkDTACdis73hfgFWQQHxXi9VWeDm35XKq6RU58zpdhxgvDauUXnYxsbTNbaWjpNQTkpd",
  "key18": "5BVDcwdfu2TfURy1Qyoz9eF5imXbhbFD12fKoTHVyoiVX32MMoKGjnm6ZSs1V9YWMQStcHnNjcx47sYemJe9yQeQ",
  "key19": "3zLW7swNt7ogu2otzJjbQUV9g9uRJpf491m1HjyVsRDLQruRvXAP4pUNwSFMBPvmPH8ft77LugHPaXKioPD1Mpuf",
  "key20": "5vrF1u66weSy62KRiJzsXSmvmaeqWgh4k8sd9MfWN55CRVu3B3z9fohovPuk5NYFHqhN1cEYV9Xr12192aHe1UDc",
  "key21": "2B74FUj1qmeu5NRhhYCsUdSbVB3pyxPcPCJz6XYySVSEeDcRUbzXiNa8nUXkGhoJKmfXoXR7o1aqorJWgXsGy2CH",
  "key22": "27JZgNi2nxpmRN3kZxQKru9QXe4KpYgeEDJGy3rdHdz4QUux5znCKLM7NyEQQfcGuk3xBQjTAXZU5DtLW14pXkQY",
  "key23": "2ra9KacpFUFs43XVpUs9UToA2PqdoM1mRadFMSbPj7cUvWcaPkrZ3jgKNrpoyzuvUnkL7EY9ANhfsF3oKnj4ZweP",
  "key24": "2a7ByZXuyj95H2CMBh3sZDMeDWvyK7An63wb2yUnn5xq61bbrdmuXrpteM8B6Md8QZybjFiLJaTP3V1obqeSn3fo",
  "key25": "5KNShDxRCDXimvqY6QYXQnvZhZzw2Zicdw1o66LsyWf1Ti7MxdG8oj9djm9RnC9xUr56FV7fGXhJcprT63uVNQdo",
  "key26": "4iM4Em8B7Hvvd9cZ1MfbpZz8bYuiuc1yVxCEKD1VWf8JgX15nniCkUkr3buFycdEzdHg6FLtMfKtUUf1tZdyccbk"
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
