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
    "5b23WKpP4E9Sd2wRtnbgMXRUTh2JdWJ4NdZGKdccp4i8ZBSHuHiLKnkxnXxQ7D5CoyGbYBuAMZkEvgzn1NGyQ2sc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GyumefmzPXaWJyqV4sGm8RswjFztG5AaqghQ1WV2D26qVaX7KMxCzRGphV7W8LKCRZaPkgGPLtuGsZaigJdxfX8",
  "key1": "66RLRdJKveiB9MiCF9fg6GjEgNWXD9YbfeuZykhRP9cdPeGRTFiJmt11SG2uHBnRDXJKY5HqvpMYFMcUBoqaxFDj",
  "key2": "5Q31itJWC3p12Nfk6TWVxNb6CEvXLiCpPDFYpoC54ZREuKJzVeNJLyibwEDR4gwGpAxVHE34DAeyFV9g5STKqt5u",
  "key3": "5MPRMuB2BRsVp2ivpvxUm9CBbNzJq84qAkPX2sK2hDFc3irHpjDgAYiUrPHLv1JJHDpNyBqqQ93Ej8LtUzGyoTzr",
  "key4": "3hQ8Qu2X3oQ3HkhiGcR62As2NSeQjH2JisrqFJD1Vqdng1kGCP2opLmeSUsk7ULYwRapZNSdP8DGTLS6dEPvhydp",
  "key5": "2soDwb94QU3vzT6QUiYxpArnjsZJHkHZ8reFpXrVbWdWvUwZzJiAYsKsB2w8Ytu55Qf2TSSHcEpR9TZrxKsN175W",
  "key6": "62fpJs9cMDHyz4tsStmj5yD9Ko4oU8ALdYDvLws5zhynUB79WGQUYe3ao2BjufPNHAy7tKnazfcxTFTwUKUyq4eR",
  "key7": "2dp3zv2XjdK6AydYCRaWW7ecSUyG7xF8FTfm8LjrsA6pYXWh7L8Z4m4vFWK4VQFrULW61x9fQRT42cEymgSPF4HB",
  "key8": "5YhE7r43CcmbMZtyFXGAdDRN5K1wsFyiDtuG1gJsPHDUFNK19D32HR914Q6vJjxSpcrWb7PXou9VbarcRqvjXxKV",
  "key9": "3po8ii6RhaVt3R21R9U7xvv8QxGErrdLBbGENPDmi5EbUr5mVj3aTjEHfLX1ecpb9jotXXwfLFs2FH9P6tJKz38R",
  "key10": "6oP9Lss35rzRfdnC9WuWxPCF9UxE5gwLwEHgnxjhe3NScuKC48eDrxpJHcd37KMkZ1dd3NgcEeRsWfW8WkhgEy2",
  "key11": "Cy7VTWDmbmPnoskLUver4zdnhQ13nBMKXFkqkpN66i94HXNWKn2W6jzbqNMFGP6KLkyobumkPyTrwcxn6ZZe9Vy",
  "key12": "97LaKnmjqR9WUQcPU5w9ckay3GviseKvCdeDoXtH2sFBLAtDfix6pWSt4uhm3KdJrgP7BvSTnB6Lfub7k1hCgjr",
  "key13": "2pXD2HqbnsbjRQKtpMjjd6X65JTbtKNrmhse2LyrXaGwraUMs73sjnmo7bC6k5rNHmB7prX8Wfr9bz8fDSNkRoB7",
  "key14": "qHJz1sRXyH2J2SMdEaWZ6383jY18pDJN32jXJLNFArAVVmkwa596rRKU23jAMSNy3jk24KCir7oxnE4jDn9hmBv",
  "key15": "5pPEv66XHaJ2ZJHYphcBxyuFGZX1tGZubGdY2pb3BXAhPktQoL5HnkqLDHcZ6EgCqedREUkoivhJrgMmtqAdDv5q",
  "key16": "3xsw442tKNPGisbzLTbQnmLayD9AGTUH13d2A1q4syhz7ovW74F6xtHtEc3j93m5TYYKrZByh1oTPiZukEHaokBx",
  "key17": "M9iqqD29Gu1Qvqkk9CJMGmxP529CXpSyBGzax7ajpergjZzCHzHQyaFknb5nX3o1opBaQpiDvEcm3bPjtFXxDjh",
  "key18": "61YVS7WpskT7PuyqcYufCZeLQ414L7LT8RdWVN1u9fGUj8SYTT8doh6p9FMoUFEiJugpCCJrdkLHMgR71LJUq6qx",
  "key19": "5Zq8iuykLsDWexk4BmMNRHCuDBzS7L1NewUSg2RD9rzHPWmTRfwjBU8EdYVr45HqmvEQoLanNEtQuasj3aGpKbnx",
  "key20": "2tQe7USgbhvW1Svr4XK86JFXpXcCtLg6tHH11R25DvCrd7HxQY2uBJg2Tb4PAepioDMPDdEdyoGnNgmJk4JUwsyE",
  "key21": "24M5ZsQCW8steaPpMfLNzzM9ggsyfoqnGaTvTecu5wFwj8afDuVR5sJAkgQRso2Pc2YmtHciKmZSMjAX8D9yHwyM",
  "key22": "rge5YQLWZHkgrPfwHJaJmP8p1Tpc3ykwNuUekjtWAT9tvgx8p7ciMGAvg24JkcpcQugoLQvkJsM7vCfyVWYBqav",
  "key23": "27MatJnWgLBwZzSuQUWg5AYWzscgpswqpKFKZwFrQQPC8YGoXBFXyAxvrChwQdZoNQESS3BEEpfL6qhnbsUTqLxW",
  "key24": "WdvgdS3HZPwX8XMLyknTfG5beTvki2xQCpDQShqmRhYE6B77MeNHVEBdGMv6YmuDdy74fTJSfhabAKrcYRJpTr3",
  "key25": "5376Y3UgCJKzh5dC3zN6Tk4yfgBzHARS3aTKsQvygexCzcTNnbt84cNA15BMsmGgf9yau9eoPjx5bPtGHte1uqG3",
  "key26": "GdK6iy3FZhZPpwtnyapNqn5EmDMs2udacNMdUyU5a7MS4JGjfvRnMETeSNofVZvSnRud4LnR7bXGjHwJZEHCRWr"
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
