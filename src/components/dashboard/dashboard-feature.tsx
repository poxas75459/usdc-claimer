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
    "LS8v4C8HEKQ5xzD9dSgREB8RktrxkUASGTViCyehgNKrqjmhfTFnsTcZmQKr8YoY5HvpEJz9pxqDDCAxcq6NRjZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sPddsFhchTkayrChCeLE5k11BKCrdUC7JYeQsBRGM17GkbJcULUjTKBgJiH1mNsuPvTnKJrCnqUTFPZjo2htT9b",
  "key1": "2MAPRS5ujjQpKH1G4z9Qwk2zDrhPJTfqMHXvatUfVE3qTYu1id9BKScgQpvn4ipbLtZ9nBgd37rvrc9H6qt4oTWs",
  "key2": "3pV2UHmzAinxPihV8m4CA33fHAaNehLUqtMtt4uqbKLCYDNQkYCrDBWjsehMjp7T4L7VkhZhzKhcNJVsidasaQ9D",
  "key3": "3GZ515mAbUGEgsGTBKhLwnqXtHmBQAwZD3yBB8r7fLPNurqLhYhT6DwcXkFPEWDTPRahJvV7537MQPpEWA4VaADe",
  "key4": "4YatZkRSCatEE9gZKXhRu6YAAvkVPnRR4DAzaSccemXh3hdphgeXBew5gomzUTLeaJ4dKeWfTNeBvXEyjsr1EWJh",
  "key5": "4tfDL9Dszn3UiwSUP484gnz4DuVToqEscpKvQ3mViL4Y8k6NCyepXWf9xd8aKjokKD4ViUKVtSBYp1N9RjNN4L8n",
  "key6": "67pYsw6Maw8bCsFcExvzqEiSHpgBvosoCrJXcs4pkueZjeh7A3YFTaSkk9cjBQ1cHR3EC1g5pKNaZZ3PxHJprsSj",
  "key7": "3uZzJCB4XLkXQj6gd2syaatjTwRSqwmeWhcNoXuUvPmMZyfCAcBJW9NkJipJzVcqdrdVb7DmyrKK1Kpw5Sprvn7P",
  "key8": "42Yqkyk2zhZRhi7KGvjYXZbhYLjBuLGcwYSoK6bFq3av1dwru7Ne7jiyY5PMyL6QbrRxBpgCsPE8J1KrN8yoxWSw",
  "key9": "DjLNffVF8xVjzsgqFnKRTCDB697RYQyeMYReQqyJjNVXLqubhkm4rzEvVs5ufQoFX8a55X18fBo9zEiKicEzL3a",
  "key10": "37YFiE4GHtAP3hgq8REgSFNyxQHu2NM22vBqTiA4Ahj7ZgMu4Nf1n83FxEaaz1UcXTcpiQCYWFcqwUPmfsbPwYfX",
  "key11": "3eXb7ewxQMCjgGpEQVSaPPPqF5hRQwGVqYRdzGmzpXtF4TLUvXgLpV9sEsir9Bkyfs1yqbW51vyLwLzHJngQnQt",
  "key12": "4GVxnuvzsceS1AgVfVdhc97BqLftp5spzkrqHHCGuYwZPvaxxcH37ANMX3mM33wj2wUMCnwPH2TkA2wUTVaLqj5H",
  "key13": "5LdCyRX73kjBHMqmDzTph7ek5VM4L4beGFJ9uNjuNG8QNGmuDtbYZnNbP4XXvLqSKKZJFuXB3Wz7CokyttPt2kWU",
  "key14": "3pGbiizQL1ohn2FJLiG8PBa7tb8He2PgXvfk49wfyftt8hyNoLKuckmzRyUxU8LhkbTmad2HrYhk57JTPDEdCGzW",
  "key15": "31EUmKHfMEfHVBXaiYKW66g6Vih5XhwfA5NNZmeqhaxbeUu7YZFCa9Jkon2ebDLwLDaoyTBycfUnPHWXVwj1b4yK",
  "key16": "61tNeQoYHQekHncKoEXNWbwWsqUW42aVLMiDx3kMYqkoaXYpFPKvr98AUr4TkTNcouxxa69zd8q3GjKtTVFZMe3Q",
  "key17": "3MdGvjqMSzn36nrcJDMti9ohWd9s4EKHU7WWdoXRBDNZrEzVcohJmaJhzp5nqJP5gtHZSku8vfmTKW65KAweKWrf",
  "key18": "2664yg5uWcBNjMYctHAJEqdybzKdKXKhsvaur7hxcjKXjD2JgmKyP6uS3orzRgMP5CiTiDFof4yeMEYjGwV69FQf",
  "key19": "4YD53xN6VCvN84CLEWLgJhVqjJrsF1vnJxfkBh88VxzqTVzCTdwAGLPLKUrfvvKBc3Z7zgWiJre8DovSM4CNA92J",
  "key20": "5EMo8Vv55kkm2qfFR4LkayL5Js62Z7WxAunh4MrGQTutTAoTqj4rUjFz7NpsQbsPUfudwjtokBxBfez7G2rwFXG8",
  "key21": "5xPrQoXiJ25gT5FrVp5SFSE7vcZ7P9UemQBQUcK2APHucNXDxAWcJV8tQ7tHQk6vzb1sHTXi5rsMmPw5HpUpzM3K",
  "key22": "2ZiUgNx7gdxYC5zQ7Q15egbVjS6GaHQHfjFArRu4R1663kD2mp5WgNbVXR4vcbFQzu7YAU1Xm6kXwUtVvPYvL8Lz",
  "key23": "2PcHTaymMdG89ndbxXPu4UZ75UvnNu6Co2LiEiJAqZxDBMZxYX6wZvEoe2wccYLY6MiAzTvAKuC91hVsMm3XMpjv",
  "key24": "4CzmmiJEFh9kTHk11gQSPabJW8yCGJTbCb5uG8ZL5QCc68q1dka4m5kdUBjSdF32CxXmWG1oubi1eF8De95KsjLH",
  "key25": "XxyuBBJxxwh6JZzkrZpUsFkvfLbBYyFbdY8MSxpLQetD54M8sGhimhc7pMeT3G2N5VhqW3S9nzBwL1dCjWU2vua",
  "key26": "4GJTSR7svQko9YUSBfnoKTZE643xjbxoTjftaxDLz9iirxrrq9w2EJL1WP2RdJXHiCQ4ybkKQaoHX4GohzfDZVTY",
  "key27": "4Wkz9XnaYdMmFW6MNNiviGbjvsSfUKtsYdhVqRKnuKaLkCMS7rKLEgpbYe9PAN42aH6TUXzTZwDXNGM5gwLgeLhe",
  "key28": "5hdTvvv35o2GTc8aYHxoWFYzMLrxvEtV9y5JeWKjxctDdteAjYZm5MhSAzU56BGMU6WhtCXa1RkJbk4uK2tiLP3X",
  "key29": "4QZejggauvLZvTiL3jQHHryEh9vD66XiAca91XTqbsgbeq8SHamxw39AA1noTiAmkqUgE5pKFbJ7mzVjNUyvUW9K",
  "key30": "3bKT1PMDH2DhXZqdNWyATpmsJU6kHBoWcEuUvft3ZnFFkye79UWAYj63BD3x53V7xaFEHLCwkyDuTQqKfK2NaSc2",
  "key31": "4Y8qr6wurD6JpcByFfTMHNSScnGD7MZazHdKqZ7t87wC1oVMwPurFqMsBBhYSeP5G82t9mCNz9dPGCnBtEJCtb61",
  "key32": "4tb9BemkkQgdYJnpcFanjCgpMH8ont6Zx8oN7D9t5M3CRmMtWkEpYiZxsbz6TWkH1CWzcFKC5d6vFAynmKsL3WKd",
  "key33": "3DPKaJRtSGE82Lo1EPcB72DLFxy4V9H1Tivkj42byqndaj4HMUWi7ptta171tdJxbWAoqowK1zRX3vRddw7oCcFi",
  "key34": "5H1ZpuWQnnFu24ckryr72ZtGGtzmxUo6bbCZheyXbFm2iQWqFSDVL21z6VCKwD51taYexcxniTZL2hMawyJdrc82",
  "key35": "35tSMqVGJoz6dJJE2BpPpy4v7oenJkzGQ3Q6PSFZY4xJ41VkA2c1vfQswh3oESEZ3vahQiy84siAXQAfYARo5w4K"
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
