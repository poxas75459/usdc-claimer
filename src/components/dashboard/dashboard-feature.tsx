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
    "2EYJjUeS9p2ApG3ewRRZzz4LFyrNaixpkfPPaaYy3TAuVCXicLXx1cEiji4d5UgJ7MNPApBvYxixmRUApbA6fDE1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gFqdzAVBcoStzCph7unVBgtpWajEoP9dQKkEkh952iCf5cVDSE9kRn8aCnUHSF2nmEvi1nc1Bast434MPoWfuds",
  "key1": "F2zhTSVEYwnBjjv5NLL1FnenjrZLQqiZbza34xRcHFDgy88aGsq92YxLEsU3M8qqo94tKDpGdZe7PRv4PHdoN6z",
  "key2": "4w57aB5BJPxSVinCsWYKt4RL3Z8Bg1J9ZqYuRtcajMbgQmU6rGo1XdkiZeB9NiBKHKGZFJY8uNyktJCqmBvvpgpX",
  "key3": "2mDfdH8nLdbJSwUwWeoKNzg8vCdFVNCpWPP5tKU5P1gfg1YjAJ97GNSGH8VT2j5cPnW35qRrwkSRibfiR2V2pFfd",
  "key4": "2UFZ48L6Vc9yAdk3x15aY5pcWJ6jKM5sYV99KYBUHRmit97qgFdUmiDJGtH9p5N6XV4qdX35pYLikYvcUfQkYVz",
  "key5": "4bd6HFuAihMetGfnFwhPGWj2NLWm9zbNdGBLKHX8C1xhhoMfp5s14PqihMCX4xi2wgwMEQXztvfuqoZfth9sknSj",
  "key6": "57dmiuWiG8DVxuAak5gz54JMTkTHxAroTcTuD6rYBjKL2xx1buHvA6Q7Y1uuRUURhRQYbYPMr3VCDbs9EUDWmiKu",
  "key7": "2J5RDHC4UCAb4KH1svYgtDG5j8akMq6rEzCXEmZwBzGfzrTr5QMh2qBD5epuGNKTeXGRy4jeKhJdV7k6taxkMvQt",
  "key8": "3PssD6Se99pZmBYuwbZM6he8fKXhX88JALu2B1E927btR1PzGUocNsjHdARRkxhqFMHnkxNJfF83ZT6cUPJCpmhQ",
  "key9": "4qDNsgd34unDYQMqmRaYCgdGNQ3hHfHFCREyjoYKa6j2TCV8Vq88VuWbug8wKxXQ25AKGzRyqkviF4Qd9NZcoaMY",
  "key10": "47bQtzG8dZJv5Zv3YjQWmfHgY9fk7r8xVKcsxPcqkKmPiDnzpM4GRsNLqp83AjBj31YJycwU7ZCgpi7PZze96XX2",
  "key11": "5UA6xWgkSvwwgXst7nBFtgUkHjhMRaktWo3p16Dc6X1mYp9vovGSZJnoWpCMJRiycDVan8dTobCEHYC67eDU5R17",
  "key12": "5ii8Gn5zwZgtavsPQCgJ5pAFusfRHujfMaZeVD99QUkWKSsNmxwStbmh2RH6xM64QvBbXLR2opLNrJXFMdA4kzJn",
  "key13": "Wi5jBJ1U26mRjG5UXtc4vpJNW8SWQ9MGEKbzkn3HM6dADokcv5vL2NWwa47yMHjbWQ8xPUaE9HWkiorCT2ytHS2",
  "key14": "5UNEDm2jbk1zwGsJCzy7dg5uEgNJHZtWP3eKSwW1WC8dbM3kd2XLVNKhMCKnGNaptFAEgGZbDxm4QkxKpaKw28jD",
  "key15": "5JGgo4jeVuYYidy9xzDFc5KKuuLQ1MjBydhvJ7WGhPZwzampVATwvY4QqmzPthb6f1CDrqLvqiLNuLK64ocTGr6A",
  "key16": "Q9ZnCiwi7cejnxewgQRQCsmTHP5URzxE5wWHq3H139RpyTrgFwQ65JqAtyeoFDgxpKkHnriHD7MdQeXQ2eTKM3M",
  "key17": "LAhsgWMnUxjPbrpeFj2gPt8i9LYhBdvAEbi8d7rGiDLS4B3JPgfW3JogyxUuBk821DLiZddDuTDhcXS6YjLb5ao",
  "key18": "i3yjRyGK1yHcVXNYR6G9jjF6XdwpJPC4QcDiBzxuLnTJf3XDWtBaQ2u6H3PDD3mT8b3j97AR9cxyH3ky6f6wwka",
  "key19": "3y4tMXPJgVPAoy2epHdJ4F5vjm6tgrmGwAxzLmSdmsVkiNaSmjoiMu6WAaBcaMLHVp2MTo2L2GivCq4QLnrnPisn",
  "key20": "3jrTPSWo5uUEYMduxZMKocULJv1RbE1ap12S93de6PehgeNJvpuNnfdHBpDfrVmvGfCeZhtJCugzoguDcK7TBwhg",
  "key21": "fnPHG8GcGLNu65Bp19naH7uYYG1uY9gS8LMfViScW3miwVzMLENQZk7E9oEi6Wq3VVxRGHkzrmCrdfGzX38Ng6D",
  "key22": "AgVEdkwuAZcLYN8cXKtvK9zw6nZDAj9zddDbU8MCtcLrcQZ911N8a5v1bo1E8Bk6AYWkVaDhWpmTDEKHFzQEsVm",
  "key23": "3mX43TbWuESYNL6USY5mFbCjrTBtiPWNWP48BWu2xBSvCnFNq6Ua2WdV5RoiDSWpeWwYmvMnzYa7rkm8hDMWBDBp",
  "key24": "3uXuHEcC8xeJPefUGvc9d3eyR922MEooL2mdWgGsPjBc5oorANE6tDSrWez3vyKb9Q1S98RKMRC1sE2ZqBsmxv6k",
  "key25": "Z2hgcsuWnSJuLT7Ff3UCeNiv773CoNK6EEsLSPC428ST7bpFCHS3m2sziEL3ErexWFB2GBpWaKwCG569eJEsRCF"
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
