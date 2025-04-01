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
    "bFRZg4RPvJwLYEo9pYVYBth9ugALJmespJpGMf566EfaSAVumyMxAH3wyj4DLYfzhNzTAibK2aFSHouFejpLAka"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vNcwL5i7d9E3ZpdMczyHTPy1q9CpRCA6cYP2Pz2KkFchs8swnU73RHcYafZE822MGxYF2uq1VBNayBWaP6ZXbaU",
  "key1": "5UeyTnSuzt9hrYkdE6AD1uf7DKia548rMJtrtqUBz85T3Ld6mHmqL4Da14c9zLitkU36tQhkiEs41wsdzLJguKcX",
  "key2": "3Ur4y5knSC9ESeep2QTpSYtgBUjb1jvR3PhwrbMngQV1atWJprNCkdzRPmAt6YwFhLgmSJLNRJ3aT681zxPmoAg4",
  "key3": "2bi5MDFuuCYvcbUKc7nm3BDCvjiFzBAqPjpNYrzXeoUYf2EtjfUSy4B9mBmjY5DE4zvGF23MVi212ECLTxYu44ez",
  "key4": "rDDQ468sDnTWaPSCk5h3pAuk3vJv3be65gN4e6d5PWsjN9e7iyvVfx3rXm4P7ibqpoDcuNxeFChyFv7B7uqGLU7",
  "key5": "2HQeUxaq6kktcfAEBxC2Kta56Ff6gD3voUR43mt4bhh3BKCwg1o9S8ioPZE1imYsbK7VU6tnPsBc4SgtDtqAmVhR",
  "key6": "3TpWgMWABEesAMaY9AZpdRnqensiYyJHtjzR1nPo4HKcUsyPGKo2CAphSzrR6jXYjzT8YDvtVc1Qem2YFSVnHNdx",
  "key7": "51XBbmEV1gjathDHZoQNo7tbRT1VDFtHHGAtiP6Rjy2grjgAGKythv21C9GM1a8knjqQ1fMqwZ8fof98tJnGRoda",
  "key8": "3YJxzGXHGPds7XPj54NoXfv3rxATyzj5vsyLmUNmDJMGVgpTPckxwvYEbJd3q4ymCMpnEnFMBRK5i9tX9xiFjoRQ",
  "key9": "3SLvtgsrtAWF98dwtVpaP8NdnZHcUJbQV7Xh1MR78z82tS21AM8ao2aEK5QesU2kftBJ9MetpB3rJh9wfs8EKE1w",
  "key10": "5RrEWdGsuCYmLUi91iX1kYTwn4Bb19yLtuHVNESdW4caQkDBKXEC1YnQvKeKZ6EjdcH3N9PZfnVXuykJBjhbK63r",
  "key11": "32sp9AYdinKdGA5T2fWSfJsWExE1RKEHY3fBsGC3CrWPkQsf89uTcbKwcdWQGNfC3HL7NdCQzNvdgek1XMZmohv",
  "key12": "1CXrBgx72u1Ampdf2SMiQuEQku9UbhpwfBtDYSYNxVun39xj6EL1nTL3Tsb68oif5jQ8444SpcXWFemmPv7i8EU",
  "key13": "52RUxbMzM52e87dQaLdRFhEZBLj6HiQ2Mj2q12trqMM65BzZWS6JYadQcTGqGw637DhtoNtmbzwVqXUuYpiAn2cL",
  "key14": "2PoBNHVNHQja17bLV6jxyDuqr1kUsw88o2NtV1wpBYC6EmbszrKkmrvQdbXNYPRoJ2iLrDEjK1J78qSrJvm8GKNX",
  "key15": "5CYnbZfWu2esBjKzWZpmUF11tsFxYFmwfXPFwmsWd9gkeqobXaLqoe5FTAovpcoAQcfdYEppqKEaMu174h2Bfyqg",
  "key16": "uuKy2VgsN7hSNrd4ZEGa8LqpmmDEM5DDy32ux98UD2nggU1LqLMyWtQpRScrfqEBfr2hgzV66u6KMDvtShKV5ub",
  "key17": "24PJ1wPPety4EHM6Vt49C88jCHXUhNTufBLcQm47Gea7T35Xccd5N7EoepVMCsLQKS5VYv5jiRSgvzj5mkwUcncb",
  "key18": "3aosjqVDHP9w46tiTuj7rsiyHe7y4htFhvASYbaoQbh3wJdJrF969UXLhS8s3PQ2JtuGQ5e7rgqurGoydcGWtYoE",
  "key19": "5u5E9Rz3yLGLiZTxxb9GZuJbEChbHAv413s22LLacGxJGoj3jjKD19rkw1p9mKgTzgkegU67sqVqLAA2U8Ym3uz7",
  "key20": "3doTknQ5MnKeKiFNXWkgJRorBSjhkgjUxBL3Qo9tXt4qmbxcdaBjw2fAbY5mtYouRx36Ly72meHDjrB7JxjUUEj1",
  "key21": "3S5b8emEhHtrvi7g7kJ8AJnkxAwQEDdiy2JvyT8rk34VEZoSVMhXT3v6t7KxXiSTNQRuE8p4CzjeXNLkFZnVW4Zr",
  "key22": "2QZRjG4YhcNHZ7yPoSdY9qrPpdWxgvHC2tQzQEQYeeC6nfokgkv56tJQKv5zrotYj3W9BRgUog4DWZbDSkWzCV5r",
  "key23": "5CphcKaPk7ZdNrSqeQL2NHzG3eGye4McmnFZzgXh2YhtXv7gG3pc1rpS9wxYPEuJ3g64tpKMrrZRbJUVBVfTBqZU",
  "key24": "MDiAg3tgR2g1qq7wjsorxNuVt3c8nC46raPdCP1kKYX3bjaD73s4HqUYLBgh3LgLTZyf8qUDvUmMQczSeVWpGCy",
  "key25": "3QYHAP1UAne4wvg3Cs78kFVrruN2aA8ox7bi6v4bMPMGo6AEZQpnHQTaeKgvo1q4qhakb2kQWxRjgtZXJdo3DF2p",
  "key26": "3c3ea6QgYnoz5zTL9NugZrShRLBKECuZegTZN942UophAJrzdYUVaoQWZdLeYdNCCiNYBYpkNCPLSsEbZFR6PSfu",
  "key27": "2AKtCnpJ5zHVfsZBWuEPCT3DY3i72KRRWvWVh765yWLgn3rv3H8WLq7GBa91k9RxNg1EdrBrwwHCsBVvmyzygQ1B",
  "key28": "5kL5qHPzaUhRQpMMQEhWRZmRoERGngZfyqedKPa1ygHT9uSb4feF1JGoDLKKduugcKPpwM4ahi4raQ9sakZtvy8K"
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
