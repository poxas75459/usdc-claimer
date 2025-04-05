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
    "5KxSRzSkptDjDV6Utvyhf9BRes1FsLU92y6ihHPXh43ACHDtjCodRFXrKq9EjivrqLTbyMi3dxUBjs9iMMehFiXk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qPZmqiTByteYfusvYsP7wa8SctDkv5LbxxoQqkCcnvPZRmnZL36cQqp97pmTkLusHGpTmLMMGxmwAY22Q3hi5xU",
  "key1": "rVdwKQ2bNaouGTxssQuSxxvKBSgrnih7hUreEqfJxfHZfX3Z19Tgp7zp6iS8ThEbgCDZhLGYzxtnBmKGzSuFaww",
  "key2": "2XCT9qF99Ns2vzMHWCf8hRn1SC6VgLiYLkhwxR97ZtMfry43jpx8TNtzN2cxHi8BfttfggxN6E7DSaL4miZBVjMm",
  "key3": "3KuzP9zzhVoShKEZMSoQiVWTT48gbYgMNTMNtzd88nwCGRRzfuuRyFgB5ZHTiDi316VDCywnkLcdvTq1eNRMvuD4",
  "key4": "3Yg6VmajSE9i516nwsbLe9zkfE1ye2sSQD3fsAKxDSrsMNa1soYQBmmWkAbpjMFo3gwWox1MKoFQWDkq8qghRdbu",
  "key5": "3P6kAoxka6V5KE2CgH6LiVm8gnG5WqxXRattqp7b8RV36QpPguzvvPqwotrre2PBKksfCZi1DH35mzSMcQgKEVpU",
  "key6": "4c4knpyTuY7iMWEcnyihateAsUbmThRFnWTJ17En21oq2u6HTmn6REd18sdrP3kFNoiLSs3Fisqq3crM7NENy4tv",
  "key7": "53kp13QuL3go5pRtoupFK9SuEZBrct4UZJVic5xhK1zyc4uKMvau6WznVjFDXa5XqMBaX6GSUoNyVETBrjETGm9E",
  "key8": "5zEBUwLbGjLCqsGzLirkvZRPazW1DTb4wikZUFrDx3TxRBXkKcx3c1kbicvbbPd2tuYRoJzGHMgbAb5hqiCgDpGH",
  "key9": "4pvJ46kgYEBBGCjHirLUm1JjVmRVaRLubHrhSNnnhkKeJxk3Go8QdpJuQFi2XaiYqnuRNqQK6DECEzbEUsuiWtUu",
  "key10": "3R6vUHEzPkQssDix9JkXkwZ6qBZMbVZtk93YX9hDi2owQXpjdP9bM3iWHdfTn6fzY7nCtFeBm2PVPPeBQbHu7m9x",
  "key11": "4TBqDdf89AFB9WV8LwfhkqePxG61FiTxW4SAjZXh6K63JZKVpxzjHxvijhN1y6i59A4y1r5VAGmKXHDaCq5hNKx4",
  "key12": "2o9EeC2z4iYp4VuinuN4J9NjEuuzB6WoANjaJ7fqWR9JAqM18t3MNZzxEaMSuXucstfTusZrgQdAg3dWFigkJ9ye",
  "key13": "3WkAx3NqZPSkbJWAf22XTJuFQ7fNmMHMMCxfq4uKQnHJSmfjJNquJdLiYGcphW9YyvVfEcA6hbKoNoPjg7LKPEn",
  "key14": "jynkVTDzssrdptcauseuoPfPtUicthpY1LjCFhgXeTofwzE9AyeQ7RLzeeaskcE9xBoaYhS8FcZkpFqSwHMVtJ6",
  "key15": "4VPKmwPbpVV2KEvostj9ps77nSVMCpuqcE6H4RXWBEvjUwQqNBE7ps7NrJnDj4rLrvM4T2s9QF2PXCTFBGZtG5Wq",
  "key16": "3hLW5r8XEtQb7kqyBH3hMmhJG1595xZWowm9F9TLtyVHP5e4xep1XvnJddgfY7APiE7RK7gVUVsXL7naEumBSNSk",
  "key17": "4rLn32TmfXJGv4PEUsD15iLJAecvNGqSNYgB5urCzKpS2ZcTq1aMkzSuEQ815288UrUA2cywpw9kD7hwRqD3udqS",
  "key18": "53fckZ1rQwCMGCa9HXejXQJD7H9KrUmiUPmBiGSqtHmYcEHjC74RgFabAuunG1HAkij5DUu64zFaG5NA3M6iKtRa",
  "key19": "2LG6tqiYdYsKfcNLxQgjKc4RSNwfrLsawH2QRYnXLkX66Z488zq9WA5LHFKSCXvLSoQiu6gWdVW4CFM9zH1Jnsoh",
  "key20": "3iWzrevsxmwBugZHYuhrQHim2xsBq16ve6DLZHqsWJFx6ePSpxkjqtcan1pghb7gyZUrJK3PEwzWfY8RLxvjoCgk",
  "key21": "2SeHhn617ZNwrkDZhftZqD2UugLSFAh6PS99BxocYhpzjhcT1vfUbKi7WrJSwKZQV66fH9bERsDd6hvLMrN33hrQ",
  "key22": "NcNpgttxb3rLZLEaaedehU8YftpnwjQJE1YuYzbSsXq34pDyxzvW4rMDk3HHSKhz8oBZEMr1PN9H3n8jHu7WJza",
  "key23": "4aWxEGnC3hFK2eUpp6SJSDpTArKzW1ZvG1rknNJDrBgo7tm81JjM6tvu8iSfXd5FLeVAyGuHuMghQhW6yUDJaDod",
  "key24": "44KLqKuW6fWZbz5Fcb6WECo4E4KQaMzQonFLVQMjkyaBWUAqfcrGghhguanQSDJjq1obzcZrGr4ViY9Sdqmnpe4L",
  "key25": "5DKZ53DXA569irGinJf9m3cyTYninMrs4iR7FhhTf4Y8AFzK5UX38UBofLAsQMap7N2J9HE4cP3Fvqj7sz2UxWzD",
  "key26": "VckAiDbL5ha3DfBCZxCufQ2N8rMDgXzDSL2U5sj8jeaszkP4D18anuBg45dVxeLvYPEmxB2chvfj1G2yq7qvKBY",
  "key27": "2NB7JXu2t7HH3z1BGXr5qJ8JPiELUQ7pScsxcgSDkC4No1UfpvirmTMRKJrbKqG3yyPBCXmPyvDwDRH3zGFu3BUV",
  "key28": "66dnu2TXaXtvYgj4F6YEXmeKuuhU22bzEvK9kQkdHa2er5SR17pfqAQfe47RSfgLqkdEwxCb8EZowBXbGiwusSYH",
  "key29": "mpaRce6P3sePAvNtG6V6H8gBnhVDvXugbVhLAkaEQRJqZth7f8v7FLbAh4fvouZ8K5Qfr8bApAgFWYx6Y81Yrt6",
  "key30": "t2GoKdR4SkhQnsyZ63aJbyZCCLquBbKQMng5E9paA6nesQvsveXjzG9nSmgtWLdqg1aLqYNRm39miv7BmbJETq4",
  "key31": "5Nxgn94DFP6HUoAv62jqUYR7DqDK2CdpJLg8UX2fsmY7S21tNCJ7xRArA4y7FRkWZTiyHtbp38cogsp7CXZgNHi1"
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
