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
    "j1unxHG135XsqeJ2aoNo8mEX9poNcr4oBH3Tty3j6SUfJBj72aaE17bQu8y2Q7EJRmztRECjPYVDamu1EL7nQEn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P1827xgz2QkCzULp1BTCqZTd7RyTtY5QuBno1CPN96Cor5QEY27g4LN8HuNjpa1kC8RHwR27euw1NdeDGXUGct8",
  "key1": "4JhiypFYQykbKdZCQFhi2umHA3cZCzeQj1eu3U63HdGJrYV9rWhYzXcHtz9sM1RnfQq6TvDvRcby8gKzhhw1LHPy",
  "key2": "2MmkXJkHhVJN8kCthtj4JuyBeEzs6EWu9CuCVRSGeLHFjZXdktDTVXHD1cQc8BCQ1mg1c8oJUrqR5opqPKhEeNuc",
  "key3": "xAE61cL8fio92Jo7iXQ5K4nTFcdNwNAsnwpVz5jUoRNCNzWixZYFXP9SuESDoLih7491aLjWr13Zq7GYnVJDCJJ",
  "key4": "2rRX1HKTCejnrg7ZY1xboebw6kr7zkycro948vAkCX2NfD7N2Q7prYeUDQmUHXTAiRFJ3i6VHfb39yHv8FHy2Xzp",
  "key5": "3BrgbLQ6YbnbAvo3oe4eyGR4LzMangeZLr3hAFL37yczPtHgJxERK9kvwfJ1ywKAzpwZMXmownEwEmcXWzn153S",
  "key6": "5dgRHKC9qRCAEEMwFj7kRySnJzxaxuecGjfz7wF6hTBcWw249hKerEZKzwzfcW2SV7YLC86pkQRH4uxx7YLeoERJ",
  "key7": "4pb4CwFTGtj3TdKERWPbTLnvBEzcTMECVgsbZXGvhHQDieF8vHcoV23v4PXHzXpKuiAdwpkBoaosX6QL7eizobFo",
  "key8": "5YL8WCq8AC9u4tohsgatbcpVLZNSvKeDBV84fWW6G7tHZVr7swj6EyJqfaAReFt2daW5JxaEBr4HNqDad2Jo1tLf",
  "key9": "4wYF6PFKYMBj6x5My9kB3ab4mFg2wN9sdXqhKDeF5RhjBWu7aDXMmaeEHwx2Dd7vb3nzL2SkkFyU47pfPFHvKQAr",
  "key10": "3QoEuA6nTVJY1u5KoDA7V9zcmGRZqkzmmHF23fVN4Vb9bnXkAUA7oRdEPAH9HVPVa4QJmDpQZoP5D4sgJdHiLEyf",
  "key11": "1tyEJGtEfwbNLgQErUDrtpyAY8RVo7dbuRWZ9nJaubioG6RhPuP5rKe8vW35PKDMwwWE7k4tpCqKU33QQNgT2wv",
  "key12": "2hdWaVuiArST2sdVWPbZDZMdNRGsomsiN2L2A1uC4YPr4PrToFFDTWdgN4ocCzj8EbPWWr8Qo2ZJQ5fJS2UDC39M",
  "key13": "4WgYeUEG7UF28QgRWghhf3wFMSg4PQM9JgMNjAbSXAKTt4YJQ2ccwgH3cMaHa3R2x1GQkxbH2gt43EcF91zbzosa",
  "key14": "3ZHJa8cLH88HsZSGuvTbShF1ekbPBtY2tZRBsS8aEd7z1hNxRpTEKJQ4Bzamr48ePJsEb4CRXwoi5BeFMmmnUUSu",
  "key15": "sZtDZhVv6faX6SjPgMgSGy5DyPpes5MCJLw95LGELv2PLyDbXddhNcKHbSCeAQ7UMDkZhwn9aGfp155wVxaANBc",
  "key16": "3ogzDMLdG6pwZhNPfkSAuWDq53fnTPW4i9bgjgYbHys3vuvKfmL3dgBZ7HFAPQm1FREdCLAB2RLz8ajpaTXAdG2W",
  "key17": "2Ni9mWmPViXUysTtQG2hfqjEAzjSt9hPgdGHwMvuZRS7DYB5kA1M3ysBJ1Zbjnu6UD5N58ccZ2G1p1DRZrstA6xB",
  "key18": "2k3JC4uLhNHzmcg83p9e7ScgGH8SMWsQSwQzHXj6NZ6mYEvPcmewvKJvXHjTt64swTi17FLmzEvyxo4rcSLDN2yQ",
  "key19": "HHUgZebc3JFyhGGvXjfMaMp4KUq8KvsPh8gsaEYKAjWj1tS1Goi44GuWQ8WUnDxpRrFw9YNi1Xz6KYWfLcFyoAT",
  "key20": "4LTE57EPW7Bmc3Qm6bmRHk7Qa7r3SCa9LNPNnV2gJ5tPXoFa2p8tX2PErk7FxEGkJQEQMgSD9wEPN5wa64ZQesWC",
  "key21": "5AJk4djVgabMV5xwB3CUWNg7z9AhD19evfA3SCXGdSjpLmtY8Wiy1V1cpjUJW5gbqiFUQoNz99Lm1uBytmrJsGY",
  "key22": "48p2Hy1sFjLRPcGzHiQsiDwLAku8YRabDptVYatGwL6W8hKA8YJ6wdA4xG96Tjv7e1R2qiTPUfqeo9gSphPaYDXy",
  "key23": "G6Qqo2W2Ra58gfJB9VpxnY5aUDB48P9oHtAwmktng5pMrn7v548as5a92bjfPRAs8EqSXopAvZe5EwTtHpcikvG",
  "key24": "UkzR4H3f4KSW5FpEabas22FK1sn42q7eJywhKFsKdp4iuNR6WGYk1BBR88j3BSQVPT113MMKopX249TxEoL9Yyq"
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
