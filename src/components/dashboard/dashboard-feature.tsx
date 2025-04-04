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
    "5wCSbLNz92YNQfjdc4cuqBbPaUmJK5niKhGGvJ6m394sViAAQo2KHdK5MLHcwteYV8pcp8A2NW85w66YGqmQq8SR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GAcEpAmLzqy8yDr5qtPckkUxYXiCQoZfK4hFmiMykM12iCosiHvR1GKRcmqxYapoNM8SpcYUV8PHcqAvMeLjnXn",
  "key1": "27nhS93GZWdKA7VbBeha68XBqWoZTGJPRztNsBHVZqgvWkieS2iCyCAVSkhnff8YQ9tTmRpumWPBxx8podQwkAjJ",
  "key2": "3khKHm4jExSqLYm6k2wBRPRrSwLW5CFUUkne13xWgDELvoBdciav3m5sW766UFg6NruUndHFSHCCjLrzEj8cG3Et",
  "key3": "YbyKufERucBCTFwn5UurcR26AK9qgZwahfvSAG95xvCZviSCPHUYVuGsDLEspsm3DaRyH7iKP554ky5CsBFTTR4",
  "key4": "25Z98yUMrHcEhcTNQ5p7VAs9qjEGsmPer2sCbirYUpYTdezsnbXdxY5bg598scdRUR7SzyznPSTzULhWYJrSecML",
  "key5": "5kDqEpGq9gAY4inqjnERJ7Zcsugy4JizZ6bKFeNc2TkG7ZxQt2UudrPigaYeCHziBhxFGfvfuHwQ6P18rZ5TPdxC",
  "key6": "LVuis1Z3tkkBN9UYicm6csYsNuS2MrxXab6MsTcJiFgTZ1z1kn2DfTG3mwRLfVfJ4WyWYXCma9Z8dWnkm1YVLae",
  "key7": "XT3ERGVChnNyQEWBXAU4xKSAo6kesJ9FfyXbR5LxJkHqEuxHrhABEesfoRAVRAMaXHJBzSiyNSH4YfjiaKmVyHv",
  "key8": "3RHTUVHKNpvv7VsVRAR47yHVdenXT1hXjk9iNEwq2A6nbebemXedE7r98nyykSPcYXq6eRwr8zcaqGpVitvsLTwd",
  "key9": "zMZwaXywFDLNaFpw5bakstD3quwV3bCSKhFq2aJ8mbh8eiT1yRN55XjPzu7JbJX4BzN5M8PvJuadUeDQyNSNETQ",
  "key10": "4JZf434jMvDzPGs43aMN6KryBwi27tcPEPFDDdMVb5YxRbyaMa2mih75KhTnffp1nBqSqUeiK2HHn9YmLYAuvyjH",
  "key11": "2R8fbEk7xPdh3xJBkCdetitfgCgGC3aEW62kgxWiq6nvhFQ4HVhvvPAXEFJft8MetWnGcf7ynUmBZU6LuL9ECUvZ",
  "key12": "5DUDExx3fsttEZfv85Tq4wedNbJMrVuiGTdLfXRWnA5Qw4HVxvA9dDhQ6wgmyjcTsaQPdAHysEWxLrtSnsYktg4d",
  "key13": "GwzUhL7HjgHMqG4NY4umd9ZZC1eYBndiW4XSoLjv5MdMJGK6h4hhDzZSLqcpAvBhiK4bQpfdCr8i89ehP2kbzYv",
  "key14": "2Fd7e5xPZPi4VfJ2EsNXjMUYpKEAj9tU1oKEJTkB8KcHN9hyGfstYJ9Nw25Do3soaXPBZqQr8rspTgzzf1iJ27P9",
  "key15": "2Y1oaoPnzhiJiRAXh1aXAMyoQfP538P3mAhU8a7ZwVKuiv1psHEM8C4zhfmBjkjRzdniSk4yW3VEZiVwAvh2pGQz",
  "key16": "2X4eEfoLovNVCpHiYcoYohg9J3J8iGrmDJRw5Soi1c3tCqmQZfPy9EpfNAgVeLt4Dn7YhWJYTZAb4L5xWbE1yZpi",
  "key17": "26oqStURejEE6jVrwpm2pN2hY3c97EmAAeCdFuXFnQ5ULuZeRPBF3bMqpsVKvPmVRQuJmpEXpjNt5ht9D2byBnRH",
  "key18": "Zo3ikJV4UL4bmwKYctptsfSYFLCz1hkDVUunTFGix9mETDVqMXfvvSgsRJvPEzuGShB88dAnhsu6DtNdnbGGEnw",
  "key19": "4SycD45NEMe4wUfjJCfSAQKHehFK8XWosUknhf787KAvBSK6rtp8y9TymTRtUp3DoLydPz1vwhwjpVqCjfmskTHX",
  "key20": "yYbKZwhnhwU6n4UBWADwyRjFh9WzpXHoAfvMhcJT5t6xwsLdyZzB8ZkxWQVq1oKaNVuDg5PKBsDwgb8XR7gAMFz",
  "key21": "4XxAS81Kvn1xP42eMcgMXFMHyM88dVnfDiJw5ZScWjZmho5g58yLf3xnvv47XaZTGETXCAcQV8tN6B4HahtfiRoc",
  "key22": "HFh7awfwPa4teaXPMLbzVXarFWswewJPU1bbv7Dm4SbpTeeaHeQKJoy83ouhS496vnW5ZqWbVxdj5UUFxPFrTRK",
  "key23": "5DqtedvG95UNuFxUx6u64sPyDNN9oZBUzHQX9qiXn9q7qXGC7mCCoZTHQbkL6VemGpu6UCQsAtdsNfFRc7K2gzUZ",
  "key24": "pZafeoDMZkpAu8DYW1rSPvh7TQr8LDkLZfAr6SBEMcNG61nmN6dUxnRGzpdKQxhDfUSiZJXCdqBF1yFrrMV71MG"
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
