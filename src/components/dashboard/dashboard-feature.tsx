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
    "5ePimumaZaQC1qDAGcCw2R3CUEKTt6JkYtbFxBAXw1XgMMVykVzxDGDPDdMrgg472JCYhr8LBivFrGzwnHbxysi4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PxAcD93S6x3Cb8hec6cfzHGSDxPMUvCmAZBamdaAUKnTMS4Rhja3i86baL8dG7Mh4j88sTYVr1xyhTXunRGhp71",
  "key1": "48LSnzX3jJ8eVetKM25R9ZBEZLUUgKo6sztVhJjwpzdZT92xVebHLvFZneMWodr4Fs1NJPp7WCbK7eZNfwRzbk1t",
  "key2": "LQkmwoLxAhWZKbQYBTLr3zdCDKVdy4q2dH2qN6zsySu5XqTRG8QssxCqmjUbTnEuTHXyZvUZM6r5XgaYzsHbhDg",
  "key3": "5vbsESJ6qQjMkfDJtixWjuFnsB91BcF1xrawA87CfLpm6SsHgjsPG6j2ZL4VEmiJBHmtKPXDw1h1kV7Auj3r8cmf",
  "key4": "55YSEUmLgKh3GmbaQHB5fRysB93jJS8HgLVaENgxAC3HxPv3brityPJqh3ctzcqACtrVtVNik379ahRSxEmuq7Pd",
  "key5": "5hXzP9KLBZUXp1A5hZ6tBvCjMRvcFP2x6Zpsza4GCWC9xQzhj1jqJeqRG86shbmFpVBYFgZ4tqvS36WuA1ybuqnM",
  "key6": "5jwH2LsbUzZLP1tUKxRstTSaeXNjxMV61tB7MnxaiYSUgdGuWPw7Kppf3YkxCfEu8VWCta8WVqgt3Y5dZMgS373j",
  "key7": "5R7Ryihv9R8vKzndZDSoon436o5daXi1crKpD4KfyDrRKXwcMye7w2tZKdix6e8AC1MkLqzT8A5RQiq26EoxVa8T",
  "key8": "eoF8aeEyWvCpPcqC9eu2636MMqg2e8wrEQH8dDxETjAeD3z8SYZdfN6UjdNssMqdaTvkCYzYYZxmGFNN4bSEKv6",
  "key9": "egecgiEcVDsuaR8DQfMpwhWvEzE957juXJHZ4HWT8qMjoq56UrVwDTXFys3898aMiYqR41MeiA13fz6CmZdhZYM",
  "key10": "3aFrGAJPNmgncgpE6X98gtsYipsiNZrCsJDcqFpPhPGfKQNn8YXYbCheyediEtedyxNxQ2SnP4GFhXdbgrwwDL7T",
  "key11": "2gPNi9TZ2PA1zRsFgYGVVpYTBk2VDeaTW4C3mPeFzbAGmGHPmzCnkjejPcnkq5ysyX4m1jiskMPYbe1bUixNRKbT",
  "key12": "4g6xZQ9ZBfdMA2NRxbP2c2FYQgfcxU4ufkgH2LHocxAJh5PWWTPVnGMjg2T7KnfQdekYGeGj4EZ5dRQh4T68FdXL",
  "key13": "9mVWEF79F81Lb6ABz8b65jVNY2pTXJeAqFN56PJPS3ZxyGqLwrr19k3nxbGUeVaMNNSUGTXJrM6TZjeWekL8bqa",
  "key14": "5gX884YbLtQD5Lx6qKoCYMxW7YCoXHboK58raagnB6QeddriaDQRs2GA652sRyN22Nkxs45GKBpFZ4yF8uWgiFKU",
  "key15": "5SpKhtb5thzRxW8HihZss3WhLT6RLRWPvpNM9aVfjKhEFPamvfZYPHNMnpd9k7ZsmxDAQR9D6FXxo6kxNAKvRxkU",
  "key16": "3ZSyE3UGTaPxwcoB5172bY4i5qGD8ujRKB9Yd7xBjYmUX1dBrjBbbSF4FcEkZDam8L63z2wK8DFLN8ewGTqSQXAU",
  "key17": "5u3dbdJwVFQtrFu4LoXNh8CdQ7d6TDKHEfzEBvMKUwD8H8X6fxRYv3QQfkJ5aeo7mARyBC8tUsBgZsx2aUxZTCJw",
  "key18": "iVYJELxke434fDbPP5CDyMbU1akPvQos9j61HshQ6kMN4eY7F1oa52GH3SQJSNkLJ3jvDxoDv1KonSPDW5c58Sz",
  "key19": "5KvBmiKRzgnUW6UN1PmQ2UMAuiLQvFEQAtjubhjMrBrUzTtYzajEQZs1u62Vve4vJFGybqKososivwkdrRq3voyq",
  "key20": "RzbQZZtih1qb235SjSaLDppwbvkpnDAkFies11pvtKEz8uV5j2fPi3LH4JtrCxaqBU7HoRREnQrwANnrPSrRVq7",
  "key21": "2AXtCvGNz9iyXjHMmJj5Ac6Dx1X1sdTxrAzQq7U81APL6zt5GndBAvZQodh8qCQ3rPYFfXvzetBTMmyR6vntHH6M",
  "key22": "3UohbYnPcFanUfMSjSTcVDHuG6Ug4oxD7gzZLADA4p8hWL21qX2FrfFjs6GkV9as2qFbou3UWdbm37WoLMWaNGYW",
  "key23": "3nSUYtQ3xV3WF3BRBZTf5rt16eAKhx342a2Br55GXLvcVvXMYk6rXHQCJJYZ24ymC4BhvkGZAM8XmFu5TEB8vSHD",
  "key24": "ZZsqWeu1JSHj7Je51yoJkQWsq1oJXNr6sozvXcBBMc1MemkEsEpbTa5wujJabXWQAf2qeqGWpZAxfWt42Hp7hap"
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
