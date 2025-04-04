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
    "4jpGqWR4A5H5XCL7NCM94e1aV6qedkwNrWX3oKJBq1KGMd9M56H5D8fvtW3oZhsTU33Nkkn6eyqS7JpTQjD3FaMv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29HDtWD2ziKPKaW2Lqx1zqEg22Nb1HqghqC8gmhtnXS3DFP4zRAVVVEFraUFBL5uDcC83dKKChya3XhYzT17FEFQ",
  "key1": "3cCoovgv3eATTjnv5VtFSKHZKhGaX5jknH1vEzZqnZhZegF7aeXvcmNUNBPhzmnbDfN8jLe6fg3qzpk2TAVUGpKf",
  "key2": "vJTNhqt34TYCbQzHWS58hHE1Nnir46HRKPu2R1SxnCkt9x6gXNpwj6cuBPc5pMnQbaccvVgz5iRoqV956bcjRZs",
  "key3": "3GzsuGMXSQTbxxwN57iFfbWV3UGK7JKLp3aAx8XrG7EbnSxrvaHEK4KmKVD7Q8mDo9JCpvsbKt5m1DPjX7zCeKap",
  "key4": "z26cauxGVgaUYkB5En7Lw2YgAnCPpLc5hqgzqkmJauWWfVDMk5ZFbtSQHUp41bZPmbGTsEGFnVY8nWtLtEd5YMz",
  "key5": "38NRRgZ7s6THgVXEMqPDmfkeP5Auv5KFSY382D1YUrek5VqRCaPpDN12inK5gbEracQM6H4Je7qv6W44p1LGqWRu",
  "key6": "LaDEToXRCbEyfehe34dQNTpkMW9V9RND2yuAARGDcLgcQSGYBgFYHQARjAkxqPHMUCsXYWftwyJ4EhAWvxu7HnR",
  "key7": "2dUWMi5LC1ykF7w1X93YUKNKXCen32baMsoYGRSncvzsssYu9VrmYBb4fHLfCn4ZPAAjwf7WkL7qXm2JKhusQmyN",
  "key8": "Eg2ZtruXPRhySnJWubqMjETuX2wojd38DBqWrNjnqBYVtpNGgksbD5xj2RUi4QkCeSNnuftNBCfzUuAbRNG3Djd",
  "key9": "2xNR8T8iFQ23puecdBWLDva3ycWNLCQxoqtitfxPdssqQgFrj5DiKfcTiiw8oRRHumqRVT7e7DeaNuXUwKcpQbyo",
  "key10": "3ErZjNFKYjHyyDQTmiNfEh7wqC44thqdfZrZcQnfphPZKDfFKUBAWtXbJ1LnuU4D1ssaegB7PZZskNn8YjVup7TQ",
  "key11": "2qoB6SabHPGAT6kGpvV5CPqZGHejz58VNGkrj6RrLMyjZg9udk9M7JwtmPpUZF68SiKdZZMksaRx8EFje4GMCXZr",
  "key12": "LEJfGkap5rHRU7u4ydMKxLutCoy8oi6TyrVw7org2ad89bKBxYW9e6hdkQK6pTCLVN8qQydNngwnUhKYTtabqe4",
  "key13": "5CBp4iN4UjiVtakMHmZj654RW8CJusS9bkrJ5L9UdQuxrtoHmFuWaftbBTSjtFarp7N6C1VGo6V3vf8DVyoccWgQ",
  "key14": "KNvC1jjRacbGj8n9T2B6545GmVVsRGFNstCeNkb9X6cS9cceL5DsMeLxwWcbMUp6bur3zy86Vke7RPemj1z3zMg",
  "key15": "2u8y6cYrVLynDnyntHEgP1SiYW65FqrR2C4rJnyuNhZf2Ci8Ak3mTUNvrow1GhsvNQBrYriedbWes4Hzjobk98XP",
  "key16": "4osoErYr79zA3HR24DigNQjwr861wcnZ3eUZEv9h4ztMv61RqVHX29pG4TWr6K7kMqAE2RV4FZiD94j833wtrJAa",
  "key17": "25agYhyN2sRwSyjUt4G48yFJK7VBvswgENTYtfa1u49qxBpQBm2Sk2sHLH6uZdtHMVnjzwi5Xvo5nFMFSCnN1uNt",
  "key18": "2EZwU5S9YHbiq25bh4wTTNSFaANtMfQL6b6nMhpofbH5WuXCQi4tTSEk2jj6CnLDj1PYfS4kufmhP5aCLctNwk32",
  "key19": "u721RBxcAJ3HoNHeSxpFMKS99H9vx9v8WrvfdXBJnpe8YRsALNtDSj3ZqSnawm33fjZZugvj4SCB6uy3WGk2qjz",
  "key20": "hWYpqVYJf2WAGKg3sfWwyvg9gfJxw3hYnZBLJyjgwy4qka8WgTQFRdET4P9kLWZC3ZcVubjPf2aBmP4EvCBxmiE",
  "key21": "5ZqX1YgBKWwpAFrqBEPxuqtN4Q7oseSrH2PX12sBSZ6mWuS9ecKY4PAwBndpufTRmMhRXcMif2UvmtH2wgEfjtdD",
  "key22": "4reVu5wXCRG37RuRExj5nNmftM4B6S4BFW676Z7QNL4r72g3NpWa7DGvvNQJh9PWDETGdcNBtMawEN8ZBGQqKKNe",
  "key23": "cyJqieRYe2Ph3SKd7zpza6xaZesMTYmt4XAjJ8iFSnyUFSNGViyuiDBEUaNXZZ5RpsaGm9eRMwtZrNUmmEieg5D",
  "key24": "2F5QeRdKjHo2wBKaMbCPJt2pMGpzy9csRQAD44SWtKQV5iRYVg3xXzQtAvZeUpnN6uz94d4mndpbqeEVtx9A1LH6",
  "key25": "3cfurw8HqRMPDMouTsJd5S8gK2ZXPMbeHPw2Ek4hL7KUmsVfKTagmpzBVyk6Ku9pEaJzpXCtxxHF6A1od36mfbbV",
  "key26": "5faeRSULynChMG8B1qw4RNBnM3xN5n12jx6zNe1scjpP689PoniQdGtVzA23udcZjfRD4WpeTu8TPRGVtDVnuZPU",
  "key27": "5K4pag8i5SeVYb7p1mXTwNwhGUmU4aVuYZqxqoYFtBhptC7p1dHZ16n9cTTZfHo3LVtFZhN75k9GSgMb4vi3C1MB",
  "key28": "3QivjVAjh8urnkxNsHU8JnrLo9v4j2kcye85LrCwuSqM7SfpWw75Bwo4cRFh8oyyZAiZY76KZstdaLqsJAQxQtQQ"
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
