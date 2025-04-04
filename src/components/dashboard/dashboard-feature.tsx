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
    "3DMyMhiBr3zMj4wujLuqMeRSseUYaSJWGap3rcuLxBG1CGmvjjMFoSv4oP7d6Ns6E9Rce6KbhaSp7c6NZdMEuqoE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aepCrDdYiKbwwZtz5C9mG4FbwphBnK5Y2kCgr6nGXADFs8JFGhw53esp7TiXEz2QUXh5SB1h48iTRYKuJmWTpwc",
  "key1": "5pFk8xZ2KLSbfQbB8kLviSYq5MzmggCfen315RS9RbQ8TXePdDHhJCU2hbzw2xsghuZCDxmSNgk5erETbUJsV4TS",
  "key2": "3PymcdM19bqp4aUC6zuDRgsaqfyZ6bP7YpNmVwVHWPjf4e7Nepg6UfVW78hUigMMvED5D3v2mUKZfm85zvadFA4A",
  "key3": "4NyWNzzaAr2uz5EKqBVAQCYZRHMhMdeMowuLrEN8RYBVuh48rDuwXA762QyGp7W18imfNbwmbyqpEWfXWBo958P7",
  "key4": "2HkWryHc5C86UhwH1cMQNEgGbgNic6CMe3nQSD1FcA1eMtPJ3fjnKs5jyn1Qz99emAMiZD5x6kZaCSmQRkovpgkd",
  "key5": "44gGnQqjQnhZMUHfA4wan5EccUFLzu13H6N6URw9P6D8fSBENkP75iy5x6xeP1L1nZ46bWpKBuDvzpYBbc7xvKky",
  "key6": "5pWA4Kc8T9LfLQmWkasHMFPrMAkPth1Dgy1oVNGdFB5r2BWBCgWuGwSB6H15YPpXN7PQUekzYpjqPfjdfKHcJvY4",
  "key7": "4ZmuDUzzXkgGhDDYy6QG9LpVPR2enYjWPnC6yA3A96PDvESKbj8NKfd4R6ZLS4WBhcYQQJAudi9AWXtY7BynnBQj",
  "key8": "2aXpvsUsiWoiZkN54UPN1YZnZQEZYqErg4dag3xiea9aaRXQLDrdfGXYkfK9yf9MfrydA1LTVGofqC6Qx1DM7Vnc",
  "key9": "54kU4RxxYu6Y61omuB6LVYMd3h4rRGT7Xwi1ixHHXF5MJ2soyxjjQQjXAaSrDXh7Rtjd7CVWfGfLDUh2HaER6Ah3",
  "key10": "5b7jXWiCNt2GmXwDMX6mLRMt81nD3pwBGjbhsny71w3ABgUjbJ5H5TMviaskuyH1Adit8vrhYWyZwosUWXrAaU7Q",
  "key11": "5eQEjMXHbEuuVrCD7ADpwjDDpitWLixQuDdPamr7enUnoLLY8RAoMSnhNDrZwF37g8QjjFhsf3uJtjt2evawJpNc",
  "key12": "4uKtjqtoSauZnKxg9FiaVywNjueCQFe9zjguQdzqHxU84ha7rPQmR9PHwM4ZzNkRvRKhX8iwnBaknpJzwpAW2eS6",
  "key13": "PHoXdiQWiLCMYngYE6dmcZo84BKSyTytJAxHoGVkmE2dXFurCJBM6rfF5fRAkpwUoPKwgRvkwZCWbEjgbQFXGm9",
  "key14": "3ywRxzbwo6p2QF54dW1FHyiYzyppUjGCAxiSsg2gy7LwVDsbDfJsHe3K9heMxmKu62T5QzqSy29W3Y2N3wkqn3wM",
  "key15": "2wh3iaLpHj4tNHEzBaJSA49LLeoouX9MmL7dxhMyMgkimt7rgjpZXq8FNcjP4baFyBSLC7pqQaQebX4xKiCfJb1g",
  "key16": "3MjEZcMrYmT5KfXQd7qVdmJmPoyhjfNnWaLAj6AeioEUzvUE81i3sNZi4JTDTiiXbzhA9bZXxWBLwztqEWoeqzHu",
  "key17": "5bn2WQdhAHWoENdeJthdxB9CZJLukmi1wqKxVxZtiKpSfyQEPumr1nxXCWbSME6oGSLx88GLFWgiPGhYwQMi5YVL",
  "key18": "52X2JnDreWk7U3nJR11BJEVMfSef2EWqbrpkaYQYuHZa2RaM7aGHU5cTomMwow6FKFajudUUkwqPNELkTNaCgUR2",
  "key19": "4z4kzstAhoR61MgUHYrB34kN22q4JKLNqwAArMDvnfbMGkTNeC5CxfzMucEC5VkbiYv1qTsJmrGCp9ncKjr312Pi",
  "key20": "57LYcEBCLaHPv244Df5BeYnWnEHSZVQx1g8oeq9YBbKXyS8k3L1RWjDUBbAWWQuopuAL9YsnFAU2BdjmER8XXhRg",
  "key21": "45EeK96gdNmTSrW4CNWHfRvT55VDbZfVLEKg2f9HCfRxq5qJwxdgiGpfGsEig1MoH4sRtvskJV2sHbHcZvmhqm53",
  "key22": "o4cPqXsfGuX5qpmFEoPYWGprmPYPJ5CJ88uSDKXzpJFPA3MoFziEGz613zJRqBtSmGtFWmTi8FFzdKL4qhT4oZY",
  "key23": "2QavcymuPm9nifW4v4KhBFqMjAuWS1yAKaTJjTuFmngg64wsAizRocNRkfGvTMswRh6DszAynLmkmbeKXcQaHfuW",
  "key24": "3t32w3JNsRro1gyW4Trn4i1fizsiYN6j93N483ufxCvTfCVS5W8UAvmeTdNErXjYy5yqpJgcZ4a7porThTCd3d4Q",
  "key25": "47S9dgWfEgMhu77P7jrYvPS5oSWTy6jyBvHatC3PPTKnQ9hTZtuqVrYp8XbNc6Ta6ckukhpFmUWUyrF5qeyBTHK8",
  "key26": "3fEJipC7c9Auha4BvAtV9zm4CiVSVzrzKN97jiH7F2D4KaXdh7RfvRJuEVaHqku7FoPnQ3gSijcv88escCyQ4Jot"
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
