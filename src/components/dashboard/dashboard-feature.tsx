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
    "39L8Kgq7V7ibRfFwCCMGPdA8jK1o9k9uDmFaThm7S2y5M6bWccUbNGHNpvvZCGFvejKwC2YUmHVpQZXa1A65nWTf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37Nsr4ht3PgRYezzkrqEakd9ouwJjp87vvrALS2qMqbPzKmA6Vs2HZuw72L7rAPbiBiPi1sMjvwFcf4WQ7KTmzG3",
  "key1": "4p2WukxNEaZRUNWb8JqqdNzA7tpWSHJ5PhKH64emWiY256XLhSQnf8azzR4FwTnjnq1SohbUpkcQiRSivmcsQmVq",
  "key2": "2kuU4Bcge1cqpnpGaP67GWQRU86G7n3KKhuEt72RDXYVVb9knBjK6LhseTDRaYGrqzcFd3advoybAMribbgpGVFv",
  "key3": "4vB9mkRwxCUG5CJxfiLb5YhUrnjDhVkFwsgegBXTjiQ7vdeVruvKTqNmvQEBj8VMM7KPQYh3uSe3rVGrpanAYDki",
  "key4": "3nQekdd2PY9Ahw1ufn2XrJVAfn3tkPR2cAssnANGTcc1j1NAuRHNj7ip6XK9xGRocAFr2eFDzzoT3bJVZex3qMpT",
  "key5": "4JDhp7oRYbFaXqvZ2SJPvhnpAixjKoWaFqfFAfLyJJHsYXV3FvWG7JhQ2aPgwQzhvjJjEi5ffDRknCZJrum9jpfu",
  "key6": "3vgk578iSBS9eDQKqyooEEkUxcBJpwUuxNoMAA7e77hUcGx1zr4vqWqAaGcx7TTCqnZ8qA944FAbozNTFGWJ4mo",
  "key7": "4nHuaRMx592zA9ZyXKiuieznwGtcjzsTLvRXyqNTEiXvpaTU9q6GWUNWmAD7Jss8Jjz5mXxwgzC9vEQdGPGzQYXr",
  "key8": "3gkMtSdo646Qn7YqcF6WSMmdUENyzKPDb4ZpmBhocJ7RsiEFaSEmhneVjat72iL1t6Hp5CX1qvmtoBwCSCBRo334",
  "key9": "4NuquV5zNhaqDYqirmNJfbHLSm4B63RsUoNjQEus6ieVHcK6beftTBCsMNeqoycYuG36h4b5EkHZ8zhZ5fz2tBR4",
  "key10": "33cdfngM1LH5z52ke8waefWZUcgNKreDYUmKhvj95qeG5vLsrebxDFTinnnymBy18nnes9oEPS7iZmwJGYYjegM",
  "key11": "2cygiTxbizd8jqcmABMzhJMkbNWM7C3UbdWhGGbjYrGfqyqH2eWNsRrog67pGs6Z3Fb7p3xFkm31zpe3v1hcovQx",
  "key12": "4YJwmRRpskkrgSQ7xbR49ks3mScRbpRNYZ7xKMvUh49pB1BTopRoXKsPczMDdGgvjXr9zuvnPV2BAyNmwPw8JiN4",
  "key13": "3iPBPujuwwi21HKRGbv8eerhPRnkySQVwoCeZTjC6PSPFoLfz8DuxZErRV9XVacV3asCR5ZwuEuAtnoMVXsPDuEz",
  "key14": "5qMyvcXawwpNDkoYMMunq8bh2EvsTaUYmeBXtHmfaNXLtW6GD3cic4bAHmR9miravjDMwA9d4fMYkwdRwJVLb9pU",
  "key15": "3RobV5Aa12BQHLa3mTfyVaT6arXrTYVAR96ZwXh1MfvUqQFuGJSjyk2SkPLCPukN3PEJphrGu1ZfzAWtSxtmc6Ju",
  "key16": "4f4GcNV7VTAZxoUbAeoLwGMdBrZ6DPobRK697t7ud8taGq35N5nD2uWwyDJmoyTzC5gR1ocsUXS7Q9R6GdX5gegN",
  "key17": "4kRFiAXtz52X76MCaYfSKm3w59WEfptmiNWaXXxMJohyoAEmrM7RgEwnZEYYw8DBmPpVBrEwdqKsncDK77BNn5ws",
  "key18": "5MG3qY6Bd7CvsMyGwnyoQMHY8p3pBnkN7uf5pAc6qS4AeQQ52Xo7SzvC5U864uoLnvvSegcRgRTppbVYAVnNmTCz",
  "key19": "2KAwFE2AmE52ZXzp22nXmn6bAC2UJLjZpMX3pHE9DJzPvuPfjNpQrpmW8T7iC78Mnf1qyJhB7rpqYshcYq85jTin",
  "key20": "54NoJovn8WUNNhVNseNFc49bHFzpxz6BbXUABNXQWrRJGn9wSgRmUqRymoUT89Rz2jHaAHFdS6crcohQ5T8qd14j",
  "key21": "2vA4A3CJBDoQQge5MXUaJSn88EUakinFo35YF14tUbfjTXggVTtN2LUTpY1Wdt7Gr8zzKXw41kpRu44asT6Anak1",
  "key22": "zPrggv1dZxn1BriF2nDeqNyqoS1tDL4FFSH7zFofUmT3ZHkHhcBKGMSnFTKiRsRTLxBJGf8mQ3ThjA9SJyiiCZk",
  "key23": "2LUSdV2fS5XJsYG5qwhcURGum1kBhJqy2YZcBFFWs16aytaBAtW2md7wet4j5m5b3uGEiunzMvvNKcv5eEwzHHY7",
  "key24": "ddxCvLcQrauWv1sjvv1GHgpvQ4B6HADrhYVTpejxCLdHM8a4SGAeWMgpSaJ9BnR9jWTC14Tc9RzwDE9GoKpGwXd"
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
