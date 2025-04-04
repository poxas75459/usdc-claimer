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
    "4tt7XPLcDrEVYZhKGqsHtMD7b5nkomx3HzrKBzhKf58uhd1qcHQEC6C2G8C43YshCZWCNTY7cNUHmd4xUv3iMiL1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tTVLvCFFeLKJYqdneqd9MyM5ZHoTVaZEGgYcobNazh48SvvuVrmgDqpvf8DZi9yuJJx2aGnkKqMnknCxJJfdCvN",
  "key1": "2N9J7D4hRhEhS19Qow9EN6UNyEjRaNVa1zyoDCVbUP3UDbCxuqvNm89hoTebAhgVJwVicbVwg6tMrwWvCzVoXuas",
  "key2": "2Z9EAce2tw3jjZdLDGNgVYjcVq7sVb2DiyqtbiFkk5AqDKJMaHKTRkmKSquEyKqY6EXyacv9Z1ZU9n9Sapumqwms",
  "key3": "h5huUPpBb738zgPvVwSAWJc28xEroJCimZD628q2sMJJ8sgEa5x689KGxJziTXehyC9bzacifCEiTprDBxB6dU7",
  "key4": "615XimyGPMNjq6hanWHKUnXb4SsRddU1qb7SiQcjs6t5Y6cwQ8zXTBRgLrj64WVqpMR5WDPYh5RdUMZ9UEuJ2Q2t",
  "key5": "4q3vsoi54htEsSRXUw5e1s6npMVuW81QHoDsfYcJczZdZ9q7F8mKi5xNHByydunmFD1WK3b3CnP3EhSkVD3Dyf9d",
  "key6": "2bhw24a315qg1FRZAw3oCG9hhnW32mXw2W9KMMVf4dLee3ob8tfeMAcBSbTCje8SAXCa25AtVkB5L218m9L5W2QW",
  "key7": "2PcS9dng5fkEDMMZxxpS3xaf4JuroPcFQovLnNYfscAM7NdAoJwzvuvPwE34jK8rD7xeBKmjCDFV1ddtKTvX8qod",
  "key8": "3SLTRgUc2pz5uGvkECRrfYoP1YRbXkBxpPLMt5uxsBCt9v4U43kT3bqw3VmnzMpP2Pja8psGDV3BqhwomZbmsdGS",
  "key9": "59NbRmBwCgidMPEJ51bZAzW9UKpEqUxToiNkJiUpWSam2u8RJKAAv8bTDuiuFFtwX8kRzfC15YvztNxGuvbcPwVh",
  "key10": "4EvxSCxUN46r7VRYSgQh6eeLdi2ShrYKEQ5RVaEGtic5L6VTbw4o8hjQiRXYs66qe95UPE5p6JnnroE6TQdQ34Qe",
  "key11": "48awR5ASZ5oWewUVovxF2jr8evoFNZojr56TJFoszDpJwhZvHBa4m5DAkE5S5UnuaFXe9dqmknvTpWfU2DEAxUJf",
  "key12": "3q5rHPFKvZVrECic7EfCBBz2DNeFgaLuLARpfxTaBfoncT627yeFgddxve8LVjQHjpkcZ7KPMA7MyuYgQoo5a58u",
  "key13": "2k6wm6uref896SgwhptbV4gCn7ypiGW6bYvqbxo13FNWZz3Za7nhzjVxvesEKgomG5JBd9bEmJjBvnX6yUNuhn92",
  "key14": "h78bACeptsupDosUBEaf2tad8uoksSSjtkh1azqi39BgZFFwFcLswcQWtkNjiLypj6wbs1F6kkxuR6K9S1Dfz5c",
  "key15": "4WT6UkRriQ2Mdso6aPEfAeC9UwweQwKKz55Fx1NuHsk9Ksxj238gzLLwYGFp9Mp3Hp2uUMd4EWvipirXuD3qWGpy",
  "key16": "63t2chBoGGhWd9CCHmXaGVe4ZyhDiB3x627YAwV15NDjkEmyGDtzZVD8s7rZANRqBkQJqhYVn1hgKnJvM4wQf8GT",
  "key17": "4tPpwpgAchVkMgmVBL1gVSJJn45RkgMgV4jyDZaYiemDFV4gEnSAR2PVMakvzfWqe3UKGBnJjYDp7hvgqyJUhZiX",
  "key18": "5mZiE6XJP18RcHAkAnUgsjEjYC78BqNzN695AK7cBh7AwcSKWuE52xuoxyv9QTskrQ5DmQivvqzxJpXcM9fMfSZE",
  "key19": "maVbB5vDhWJTnFXq1yQTSwZhz5CbPEGLDmGnbHmAFccQwNrATtAMwck6NwAd52cMZfB3Cis2AXQtSSwBU677Kb1",
  "key20": "5kRnA6CKkjL5o5vBdHPJ8D1hxrgMNNK3kM3GSg5y6eVjzVnWGiU4J9mgX7hVZMik8PRaYnp8LKSE8TzbyXMREeWj",
  "key21": "5Ntairw9t3k6Cw4g19mAF29fwNzNxPALy6723c3m6Ru4KSSwYaW8QRBWczPMnfJHbwZWwNhAgQv1T1A6qHbALkW9",
  "key22": "2KiRCfFv2waU7LZLXofXoSdFsa8WnfWFqNnXBmB3j2wx9zUQDityV4NEs7jqMaf7czFYEm5aKQHFT3dLmrQewfya",
  "key23": "2Jf9vZR2BuDNg5DY4A7G2LoVktZouidurBkjxwYruyTt2phi684zciXVYKXzS78Y7146cdozzPZSzhn648adyWVG",
  "key24": "2G1H4PP9dCbocmfvgHdoRQiDsaPRAZCMRz9hUtr4CzqUxcMJpNJUsZ1dBkY7risjzEmFBqL8FbNDy9HsXN5sSYmT",
  "key25": "Z9d6Y4zn3zZaEn7atrSmpJPv5rR5PpbswZV812s7UG84uK7z56SfKcbnwCcQ9RVVz9KQqkpawuNv9z3QCzLPDE2",
  "key26": "kGEkeTTDkxZ3spXM2Q9LM3wKgN5wRtGXrW45ke35rZT2yiEsWWdqZZp3ETdP3PTdCUMpBgrorAjPi1hj9pjqYWq",
  "key27": "3JVPNjKoLBd3xzcLoVmZCX89FrqNeYt6UhcCEqaHaZrjycJsxmnZM13eD8U9UYL1muJQRK6qUZRuJo1SFpvRTXaU"
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
