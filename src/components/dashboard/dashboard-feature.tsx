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
    "3mwoPi9wN19whANyAnR9wWZLShGPjGbgJYRPz3tn4fAmYAJ8VdENfMR6rDqGHEEeUZedKhgAvEZpU1X2h8vk1Z1m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SJLChwaFPau418xVwdw8CJYrKYRvBdNyVSGLVxBApSWXop5MxKVoJxxLDpjXwUKYogTDgzafsbuUYobqrhk3DKB",
  "key1": "bbRw9Kfk87hbyaNb8EZ9deH5hrwizAjoCxhqWfxGVADMRxq2uCaJa6Zmm9BS4vqea8mgf3acy9N2VPaHJFSNdiU",
  "key2": "544yJLqkNSJbgKYV2Xyhyi7EQyzwFNcGjho6dRU3xajbXATinYyfMQcfuYSYFmwQNStPLbrePXrioWQD59yQQm6c",
  "key3": "63UA2xVTgdZwS5xzRsP4wz8uUcE518ZNUaQD4WWMbmt4SnA6eHV7qZd3fPLB6XsuvP1ftzGpzDX6nr8BtWCdhcGY",
  "key4": "3cBby31SrsT516EMWXSrXXDL3F2PvFbKsp86WtYdSTdv2AyGcDXcjHfLCvnR3HZGQ7MNdh4YoX5fayQaLqCTcZBm",
  "key5": "zDtAhik8D9Q4zmE7wRTjeAVsetBjXUgnxCsxkzKZcL1GuQqNFvu8zLm6bh5jXD4KEzjTtYwab5LWzv3jYgzgos9",
  "key6": "7LHCDKSteaDmj7LgDyXDqB5q7nihqB2cyQ7BhKLgyh5TUWv384umZBEZszWemq1AySiobre1KFBjBRjsUoRV5ci",
  "key7": "2ahnX8UYqZUYDCZnnZJyaT9HCsos3MfvbLWJFV58UVPyLFLbw2aQLhKmqz54ysT5hgKS2PTrpDgNaNbvTsNpKmos",
  "key8": "2jVtwSxDgc6rMnMuS8RtkTcvbUoxUM6fs9s8zks78WQPU8ztHL3DveriEJ6iKJEHtwoPVEGKTgAxfDPuDdBzkrCP",
  "key9": "2KxC863Ea5RqyXbvahg3TQg95eFmPYAeeM43os8pJ6s2CUrzx6mPZ5nZmT8HPjWgUPUJS6pJZkpeVk49UMnUtrgu",
  "key10": "5fJUVg2xL6TWSY4bKdmL7vcDK6MoFQmoGavrUvyxBkg1pUUA2zbwXKWRcftB7rCWW27S2J7m1WEK2N6iJzJbJpBY",
  "key11": "2Fxf3Eyk96bpa2B5QH4DZCXZvKACbVKvySuyam4qjtSacEmCZ3EbgWLvWHTv6XrK72UrG5QBNGkMMnLG9sb9XRGW",
  "key12": "dnWb7XuxP6STnbZZ8zzsedotR51YEtM4QdAEcq7GUX43yRhujrP8Ha4SxTDzWhkDzRocLropo2Pe4VjMEpSwwMr",
  "key13": "5DVrnTDKtduQsqNM4Yxto8fwpRJLyFHiae6aen8Ead7LovJ5gtSgCQ4AtT73GiB6jFR4eqnE4NqhFS1ep7pssX5L",
  "key14": "WWGyvwHJqyjM6pYmPtyoBfNm1jxqzWBPyJahwcBdNosWHSnYDhhF25Fa9rCW3X7abtXKYm4wjtBHQHPhbGRNULC",
  "key15": "3P8PPMZmkR7KtshxmNP8FNhf1ezHTmkCoPqEd9LDiLyMNb7vE3M1MCuZD69TVMpWTVu3G3N6Un5SNyX4ZQC3UBG3",
  "key16": "N278gFezd1wWeyDvDFzxKJa4ELx8BVuLSBGSn6PiSGTiGwhjVE9jyRcYNwMGX7ZZvE2u8eToAonMKhDKHJYtoyz",
  "key17": "5zF6xFQ8s4rpNVnRWbGPysENGTK2AZsCYe6zpMMDALd7JykUgYdtSoi1usFgg7h5YtpyNMUoqhZuRRndSgQbRv7a",
  "key18": "uF8CDuCoQdXyEUd1Je6YxbmB4fgnHmKRXPx6Sr22AmYz7rW8mJBbAiWM3GNz1dZEhYCfq1Z1s4E9eDnCfyuoirX",
  "key19": "ZJnNEWmyahNqpPqbaobeyFnreedu3V5M75yUyQA5ZwSE11ZBDjxACt9LKdE2VFZ1q1sJ9t8wL3P3uGJdUWUKEui",
  "key20": "2oyrdECzFJ4KpKCEofFjVnqvk7RkUauw1vQvXcqWRbwsrUi5J6fYHbC7yaN8PRpzw8jHuf6HED32vB3wYY2VM47f",
  "key21": "WTzcdp9W4PxyJuy56uuTejtuXPCfZYmWJpW1xEXsuVCtrt1nFPjm9ED8AXdcCnQ3SbP4cZKkfDv8cguazeCHuiR",
  "key22": "48ytoomDAFhmCDTQXLSMET32phZwgdUcrZDcWABR1bH1YEXxPTbNhXPvyxvCbry5RGrxN17nWZE2xKcF8yzoF1KL",
  "key23": "61g4ZZyQQKurpPEUtoJooyKVYahhcviofDsfHQ2vmdBu1VCV7326b8AY8qjuJyYN1AX75zNmoEP9dq5S9pUMNnZa",
  "key24": "5fxs6wQGx4wuPMvoCLNvpDFqFqU12nquKkASWqE4fGi59XwRUd7nTBZXQaLbLXCxaiMtSX95AASnJXPyd5Y2R6iz",
  "key25": "jSsBmE3UKfEZXc1BasGZwYoge6qAE3QAcEDoCQJ6555N1tA6sWhizPhL4ABRjSpRLxvvtEkn3ukSVDSFy1kVNgT",
  "key26": "4HATo5bAEAt8ULaGxGCfyh1FtGntHoDhcH9LQWvPstYtwLaD5Zw95hjR26ezCfeLSYHAoRBR4jjEvoszPNntiVQp",
  "key27": "3ceJCBevDmyNWD1VV4cVXQnnaZememGptQJ1X6sqNkwDnfLjCyAPgeJ6S8JvCfAybWdUcGH9fw7rGK7AQJaxpCof",
  "key28": "5wzEungMu7vNPBJ4sk7SjecBX2UBTrMMy2rpk22eadrgQkCf9JmV7oWSKG8ceSTKZNx9Eh9H6Beq7TJoYbuM5QXb",
  "key29": "w3HDvB47KHo3VUmmtW1VUQ7FBi1K617jZJmcHdXUdcGZFwwAFbVhbepWjCojEL3QdRPJ8GmQos6SMGz8LQH7R9y"
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
