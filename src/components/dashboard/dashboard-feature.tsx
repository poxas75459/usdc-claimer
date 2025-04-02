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
    "31VQckS5eUKPvfVgN7VoT7SnSgxyur8RVV53t3ik4Puod5NGuKyM2ZsMgKvHdu7QrvFbKApB46b3wSQgeBRYHg7v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NKKrZrAB6tgPnQRSBkGEMsS1MuWbGCu1gKBBQGX7ReqF2H8KqcKCKihAgPVMgsCGaaJGNwCYXFvE9CUnH6Fbogb",
  "key1": "5QUT3RhbnfnLSPBqYNjMtS7FppPQe64RH1go2pBimxB4RFCdywDdF3NjmP4Up7WVTHTAcg3emy7rApLi5gsQZo2p",
  "key2": "9W4BDWNQkKWvNN922991sdx5ZpifKqijhKvufK5pDpbbPir2Gje2Vi46rmQYxaLXf3qsY1d38tp4MwoQr4gJuRM",
  "key3": "4sXzqven58ZPXyQ5i9Go2gE2xPVqUiXfHRrEW5Ha7XtgC8sDSVfjWr7idUnXDvsBq1Lf6BQyKrF4DENh6eyrKyss",
  "key4": "2x7c72ovJ1hYDd22Ju2papQvKnXXkZJvRtiGumKXcfNgmV9XF7aMF87oFbo9mQuXioS4H1F47tZW4NybmuT4bVP5",
  "key5": "26MXGUrQaQZM4QtYPaUhPiRXqeB39Keye7qcDfwp3Lt8Rzfz1NkcyHgietkyeac3cYaYrHFPo868RXmPYeAEjB3B",
  "key6": "3Dakz7ABCzA1azaT1m7AWe5LozF4EjQAYWANvXjT7Dh5beea9Wg4BNPVgcnoYpnwr7FdywugU5EP2gWfvv2bn9z5",
  "key7": "33PtgKndzts2MiQGxq3Hy7PMEeiWk94vvSwdDjLKJN6EoKUzY5DcY9X7g5TPQn3D8eBfiXV1nfkBKM4giHNsvdn3",
  "key8": "h1Y54J8CReNZF6iothqQDWVATAFwaVoHzChEQCw2kYkg3bNkkLAe7GZXX1mSH5LHA317dQAFA2Z6ciFi6F2WSwF",
  "key9": "375Gda2fTfmR9mULgp26SSNeUyzzY1iQKM6tmkv3Wy7JvGEGZCu5xsUxwx4MhUmLtMqWKTsYazgnGfKKokbRV6p3",
  "key10": "3Py5L9FaqgqBiE744oez4FqdbNg3uEK7ePuUhDw4HCJF51FueVZdnhKHGwPKQC8EXYLo43koieVZTR1ScKtDPvp9",
  "key11": "3yzkMT7QBbsYgmJsorgmxP4QeN1a2h6EBCNWGtgwMC5vMw5RyAZNVnAtG8nvMzbg7SVoqbtkB1a9FAfiG4U2SQ7",
  "key12": "3qfTHN6wTwfVQZ9oErtdgeEVyzh3PgZwH2nqVN6FtQ3g8vRb1RRLxtJbWWTfNQN5PMrQTrrPzsDF53kj1t1gh512",
  "key13": "5id1ry758R6q9WxiTb266JvjowyDmzk3d1LCjtAWR5BfjtNxTGR3dXPcrEWHSWSdbCCW747UuZdLpsoiNat5PrYp",
  "key14": "RiLSLX4Myj5n9NHRpUZm9ecwiv1iPeddEWFgyENx6Z4hsutHa3aKbjsnq2oLAxyu2qZHNgewJqj6CaBXc35bQH5",
  "key15": "5XgnYZtHvjxroATrteXV5QwNsFpexsioq1wM9GfeoXrqmzrhEUCNnvkqtmk2TQkXT4hgyqSApemwzjpHFCxmDA7u",
  "key16": "5Lc6emaUd4w8wEnd6jXaPt3niDG8R8HnQLqo9nu71DJVw3oCQ7xufCwUkkifjUvGaWv6jMfPFiEYJp7x4HF9gPL",
  "key17": "4FDr4RAQmEXTSuLp2Ywu7UrDrVy5jwrSaSy7GjewM3z5te1zjmQSVxQHyoQWxUwbDJLY27vkqoWbQBYiQS2QyZGJ",
  "key18": "2smard1KEsyXrNm1Y5kYog9vqzusaSjFu34tDFoxWgfYbDXNL7UcxTdmbRbBbVxUKE4EBuYjA2yHyhJoPFYYwxFm",
  "key19": "2hri8Ct2DgWqEuyaAxRoD8CYd4KyQ7SDFG9my3WrPi84UZcPxN5hAu8SLpjFRCv7bpDTBaE4tEg1h1NStvWNoPQy",
  "key20": "4mnnC8LUkbgLS5c6pFi1NiEUg9Bbyk8KrihvHT9hJsgk67i5cfHK3KVGRL2xGs2t6b5i3964jbBwBMsrTUyCJAKM",
  "key21": "5UwpEsashSEBDC4uEPJ8aF5Jw4r9NqsFKHcoqNWHkJ2hKsjvsnHPwH2WYmMEWjqoiHa2DXUXsBx3yU3i6mtAUszC",
  "key22": "xsxbvsU4bVx7nNCAnJJ67RMw98ef5twhaAjVWcVHCcLGBFUhsfMYmt9iShkXM4F96zNGbXtnKKWDTRiJrjQBNeL",
  "key23": "5E82rXchVJbdPpV7FzaBnuGpPtn2FyuXowADeG4ZJyF5La9iChQ4RjpJ6w7KfFw6o3VcLdz8RZgMrGGkA2xnYcAf",
  "key24": "3noCqkuFfsytrrcbMEBGAK33JnZhd4Q9wxnwsmCLpcZNKNGBm8cRd7nY3GcFtdDNPEw7BKZJrERfXTn499TkDXkR",
  "key25": "2MtoZhYy6c9w9kGiDBca6s5nMRAAjVdkvHNa79TvGWdYU1LKNNnzwFocjeXLSHYfhf2pXa67xbkvsUhEfiyDMNvG",
  "key26": "XJ7o5YoH8a8cAmo8LhEQRvM7cX1kUNnzZecFgCiLabAhx1VBup3BMwHenWANVRjTuTyQ28V2oA5WCX3LKRtYqhU",
  "key27": "2fbp2AT3d712fZMhQwnv5ZcHHMiM9h5gr8vygyrUe5qCTM54wtn4cLKoy2KBnBQPb56gobrdTKReoj96jDTdjqvS"
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
