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
    "2RzwGBmkFTtzHLhgy39QcWwuxwMjDSsGtmoAvg5u17FYdmkc5Qt4GTdYGfLCCKgQS9CdjKPoN8unKsLQv22wn7dp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62Zqfzj95Prqhm5byopwaDpHck1tt3Ne2HhXMjfuCMpykgkWH4LQpS9ju5SzXTCYDz4NoLBoA8YFRHwuCgT9iAzk",
  "key1": "32r7vaWKUkwS92rb7SDnCE9nk1p9BKywvQb66HeGqD2AKE6P81izU4Dkbh6SZGb1u6hAePoh9XBL5jH5n6pBJnVe",
  "key2": "3dU8bSMpJDUt8x6GWnAcg42EjYWDpxsLA7ygeRtggwaQ92WsPJifo9PnnRSZFANj6R6yRG48B7Lt3DvQ8CHPCK15",
  "key3": "5Z8KVfqsCTGzscdxWxpgy9MNQJigCBvrULt3jyxUbbC7rK3wGjFw1n3pwYb34aWiMk8iG7j9bgfP7MaxA6vVxJXB",
  "key4": "3dsJoXtKiYqHd2shpk3KcNpXk8ynGXCdej1CHrCMSvEEnio9RQA12ts8sGJYHqwdZCQxYcEctvGjjAZzcSqmj4o7",
  "key5": "D88AXhPyiC5cw7XyMTAoyJfXyaC924gC8EervzKysoocuz782xF5kqVE5esjkqVC5Fas9sMbKsoHq4ascQrZsHM",
  "key6": "2Ry97hC8GxaUkiMqMySdfC6xFCCKoKVd6iPXtBEukWMkwjHQLH8dLoaEWBAQVdSmuxMJ34g5osBCy7LvpqbiNgdC",
  "key7": "2JGaYXgRGaLEZUqhbh714F3RtAU63QRBTrJVHTvMQ83fL3u7ddvYAqvgGJQtczX6KxnzdbxTQLWiGVqzw4woyoDb",
  "key8": "HaQJAjgz7jsUqGGYJSmjWJtZcR7xSbJe1iyCNHNBD4vBD54bQY6EtuGnKRgoUnfSaEbFkNagTQztrexsyCSDHUH",
  "key9": "5ehbiujUQY5Szj1h66Sc7C3zYxbzgZy7DJbS6C5xDf9UkEU5TtjxjNzmAiVGSdfGAkjn1KGgvyaTqqoQiDAK2F4t",
  "key10": "5dRTb8wcwnpfRmo1RGKRoTU2bct8Mnd6JXgBXrxbHh8gD3TAjByeQVHd4FFQx5TbH6UhVnHQo9z9KpExMWcKSMHc",
  "key11": "656jsNP3HXLSeQEU6Sm4Vz88x9GLL8skknpXbnCecUSiVFzchsLq1UXfgcidHJssSXG5LfxWSxiMqJDxU7JijVct",
  "key12": "24mn37nv2hcJUjYNhi7VdZFAJ95jYEaN6mFPUNPofA3aLvdXNPE92K8xiVC4Wc3uYMRc46U8tbogibZQgcWR6q5y",
  "key13": "5cf5hegZeExzaGHa9kGWk6WPqkh6seRq7faXNDvQvWrg3LHfRC42Rdy8nEaMD3aV677mpjLncwSZrS9YHWaegwGt",
  "key14": "2wgJdnD8E3nTSWb27WZwGsCrcf2BKvYpKTLstWkjx9a43xdy52Z8Gcp9LVGPMt8u47nyteDwH7CsprM3ErFvH3ey",
  "key15": "2eWiFMkfrtdutJPqvJdLtd6ufaoTSUXjeEinMaBH91uJdiuuTaSivjy6CNkCHNJLV42SUri85Khqqmha2uTP6Uma",
  "key16": "4vemUsMJq9GcU1L6MLqrZsVM8eC9Prjh33KU1jibwwbJGnZf8ATadJzyvByq5uxhrFeRu1Ckr9RAjmT82JThU6y4",
  "key17": "26Y8okCezjgUhSW9h2Nyt6kzPNWJw3RXS5wnFVWVtaT1QDefVnKwBHm6e9fitGqHUqvhcSieEDr8qNETiBCnKT9E",
  "key18": "2S5kJhNZLGZxivoncQzFEdR3Epm9zEsM2ATHQTrz6NuQzMkpdRWHtn6KShv3Sgu2TRFvCayhzuy3oVcUyLEbPbCG",
  "key19": "HsTQP6d4JmMBLfa8EmLhaAhU3TvKhEVxNMdUVWQwwiTJC9zaHWSVsRU3vkSP9SMaeWadymtzdpznDE1USTAZJhi",
  "key20": "3uDUXJxXeWLWr7cFGjv5heGHW6E9wsMyKFG94eBDawZ4Fkzaj2pUsnDmwDoy5p8eGP31cVdPzvLHhFHEsrPKmvs6",
  "key21": "3h14JNEAQ2CBb7GGEsG392hV2mby4NYohE98b1qa5jh3owjMthSyULSzbvkgG8i9HS3rSut4q1oA1QbrDvZyyt2r",
  "key22": "4d8jW2s6An9eWhxr6RmiVUSf7mVQf7XArJHBcGr57DnyyXX4e9LiyQGYdmve3eEJNThB3invnFQ6GLXUWtxDQTyD",
  "key23": "8Cx3vxRWxEYEZFP7F39qBT7t1gx7ufGDg9VrC6uonK3hGrToWtihjERTg9Tz6EwHv7mbEwX2hmDyRj3RKLGrfbk",
  "key24": "5kvceyNfanAqadZ6PPujZJ8552WipbyaDf6oQbxjfv7KqR2N1NQFi3Bg9rS1rQsr5897xwppRiw77jdk6WeQVzhb"
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
