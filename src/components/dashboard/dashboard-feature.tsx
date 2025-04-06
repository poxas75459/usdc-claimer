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
    "4neFM3TFpakBC8czrWvio8K2EPRivafq5449N4zo4o7bLeRfk2fNuvBrfo4scBgZUU18kEpUGhaCJcpTQZSKTgcP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2udFcxb12aPGAkBZF19i17XrmbuU2tuzK9n5eE3dbujg8rgrwxHWHSDDKzdDNDEUx1BLGiRaEe7kVAq3aFVnVFSb",
  "key1": "PVMXzDruJGerEsHHCSMGekqtBUaBWWw8TYm2KMmG4BVEHUgCbiABitd3NSoMuVD11D7wsmc9CyojMA2tMvgLuu7",
  "key2": "TZ2U2PAi98rPHE6uXseEZrcHy8bFoGMq8PNa7qWmyvnCerPCCUEvBhwjcWqxA3wAJ1paft7KWaZwT9zojnySHVX",
  "key3": "3bdGbWCDjDsKkogHB8EjqkCMpMnnUNZgZt1httdb3JP6GejmH1j92bj18JnTsQEd6DZ5BnpZd9Xj3cTKHk6TaxV4",
  "key4": "67ApU5RdAqqDK8idNdtm8HxzYQfteFMw1MTXBvWioGRfS1TWU9gLhc9VRFaxNbfcq3jB6596nRyqu9ej2m7rLAAy",
  "key5": "3CNaUvPNGcEtesuDG8Pcj3gjRMsVnwEmw1mQXijgerpJU9ZcjimoEcp6VAdfjwqGFTwNfERBVBrGRUrSeP7vb4QR",
  "key6": "2KjuepZXGh2xjNf61DVb3KTFMyVuAeS9SyTwaVFzhALW93sUFhGQpELUz6fy2SL64YxyyZ9ubHmyzx9QGm6DUDp6",
  "key7": "4ZxGLugZvLD951p6tbgGsWVcgszYcRkG2oixroqA4GHPKWtRputf445c7y2SaKSfQhLR3ncFxXNBtdZKtrmpfBZx",
  "key8": "fqxb9Th1kpq4BbycEg5y6ujsd8KncKkyccVYcgxo9G7G3SbsqdRybcZjuDK7viL7aQqhpkaN5VbPbi21csFXFa6",
  "key9": "5Z8KsM1uS2bwjLMZ8KHaLvAegmzKorhZi2NmA5k13LvX6syqTwvKhmutkZPbPaXZxJ7gyUYzcaEwHUtWLUdaXETU",
  "key10": "4Y5UZayPzhhZpTayDBX4pEmc5TNBf9NTmgnKq7dxeTnHYwzRXwC3JaQTdMk6cK9AYT1L64NoJdKzkKK7cv5T8gP",
  "key11": "32VQhJtEggscPLMBTzn86ir5xEXy9iuBBwLowkDZfyCspNdXGRQ9wjSAyihTscMuitNro19vXr8qm2b9Q94Cxfi7",
  "key12": "5FHTdMqJfnQivDzrLfKCp6kUa9W1dmVCuV7uWvZNLbuWaYxsALwTTR2Gktei1KAKLNQmoWAmyQLuqdttKMfwMoc3",
  "key13": "5K5pdNdPTZpmaQnYd6iZozHXpYi5T1HUngxkZmVMewR16E2KippJ9i3HJa4WrJdZMPicWg7MWhuMvS53aRp4sufd",
  "key14": "62Kpd7HVAVRkRvvwTkW7qMnYrPuoKx5ydAPPvbSbXTx3o3tXNXz4e9tC67P6oCoaS7Jc6UVYxQ2df6sTUZTrr78H",
  "key15": "5rkNcyarGAMPDrwQcuey1qEgU8nUAY8ZDrer8hDALYSRqMejZsYuGv9HBqE3epY43yUTkccioV4RFukjRKTZvemW",
  "key16": "41pvDyZsDEC1wvcUgakHHr6fsjJ3FX4ufcpRv11TgWKXWT5F3VHs5ifwDR8mTfSwLdb9ZxCfEeEofjjWJx5K91s5",
  "key17": "4b5CzqQoLCx6MqJqTHeNvX63v9Lhebt1RVWRQTQe4xw6twW8wfmM61WEoioD3uzFhvVpuk92BUtJ2KjWo7SeFnHw",
  "key18": "4Jtiieq3Jq1GG1DV1573ERVoAW3QgTXRS3Jbk24G8qisj7H4PfXiV6aeRx3cbTbpHatNidwzX7wxXTCjiqjq3Jr",
  "key19": "5VPVdtFGSH3KGy3VkSdhLXoNSqmvs3P7c5ecxpvviL4zrQS4iChF4RGA6bz9phFAtLCMCtJBC95MgGBmWGgynkbY",
  "key20": "2aLGwEE1jn6DqUC79YAut9wBZwESpigUxs9mdiN4U4KA33v3Q9BcUB3CaLMVrVWirKEckfb5SNDN3KEXomm8EyQg",
  "key21": "Be6nMLTMd2E5wCKwNA6xTv3tDQTHXUfbKcUdxDGQ1aHyhrMMpf86u1CpyQWZdXXtKSKWv8AwVddvBVwuUvxagki",
  "key22": "2GjJ9RvD5qBL9ekUP3nJpz4keFBFQuPztmR8RJXJ2LDoLVTwp9wWQ1uLcKPVqJgPBxwwV1VuBND5iS4TooNKXvkX",
  "key23": "3BRGKdPxD9vUJQqkVXp322MiKk6UyAvZKCxNY3oCuFdSugcsd2Ukb7TdK7ePFKLW2qEJhSSKyUHXYJrDTzrdcyvR",
  "key24": "QFuRCY8kfRezLYywyywbBdbov4ZHmwfc2AVmMnkQLQirRi3UyvV84NPXrvxaWhfF5RLm6bu5z6qvGh4v8hnoBFJ",
  "key25": "4Ub14GFwBiEKNkxVjwbeX5sQ2yzQ3FK9DKbkJ6MJAP7x9MZKTP3yzwcUnqiKNRjnw755Tx9RynAdG9tA7XQQhdJz",
  "key26": "4RcytJ6JLGBLDtK15sc55SPHNjFCKKrqwUtHYWLoXuM8gnszfAbdAHh9CvBApmSJCc87XzGErcMkHisEXLYSFcou",
  "key27": "5M5fQAyqqSBWMrrEWWD2CWDQrghayGsRxUpdtYTLVbHQ3o8whznUERLaFyJV2sa8qbjtsewWnZeEyyqJWergAdz1",
  "key28": "2Fm4oKgW2pVTnXntvbzbYFQ8JzXJDYnZLmXUUPLRw9MLZvZ3B1K595wJqnhvVH1ifgamrK65ByMvbxfwq5vgkuCs",
  "key29": "pzGdAQn8pG2knRdq4ZTsNKJJ76cnFn1Ny7LuC1q5rPpmt6LGYMN1yba5hfNSBj3aQ48GJw7ddGdnDribqnUCaqb",
  "key30": "3oFJichgE3pPt46WxquU3rahR4kgvsb7N4Fjt4XswXEtnXKpvo1CZvkB2HZPkMyXxxZBfsgVqw9ZbZr43dQTbuoj"
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
