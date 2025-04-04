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
    "4QRLvx9d6mfoVFebqPzm5nbZXpgu1X863HnvtKF7kSz5zGYBSNnvSXEf37PTHBCvrnP9rT875A1GFKXMGwGar26r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iASEsH7bBGBDabcTxwFbbKQBcFFJwFuzPhCqGGGzQyLqtwWL5ZSgpUta6jtYkW29DfxqEn7Ytjtjqv9g4MfjJpg",
  "key1": "dwabtsjuTAo2QqNV5qFJppRmeYGm1Bvp75fJU4YciY1VY1U4WutH7Uqz1eWAfySSQSmiHhAPUZfW9uh2goHPpvN",
  "key2": "4CxPe3ha2XRmztc4rm3owagUnMK5AKeBECTf6a4euDoerg2CMmt3S73XEGxoahFnk4tJUg9HDffHXkZKxJGptJXd",
  "key3": "33qUE6oYdmFjHva5YaziDwEiSrffutqiyYd9s7VBdv9D6ZXv6LPwgci2opUca4SvgHANeMQok2fUiMHn4bvGCUyt",
  "key4": "36pyUitXVskXAMKf51Hx6LWLQDT1RjVg8wqpyJ3HuuMQ1j6RtMuuvB2sK9GW9MC6Gx3HiddrLPGoh7WHcCH6Fjku",
  "key5": "5wC8R7AVmcUdvYkMiF3vwqEPP7UxHmEtpVwcAep47YXofwWvJr8hHW8eWQJkMsMHBEdMmwTRSgyFNULZYTbE41jz",
  "key6": "HW7K4J76VddzVVyq2dA2Ch6kAEXkMXcdHxm2fBXER5Knhpp8V157Bdr6cHpLXWSKYj3Np2GnKq41LHFc5haCToq",
  "key7": "4VGJfECjn3Y9gcLtotQ34JPfBLR6UXB1msZ6PE1hcDz5nHrRt2gtykyfSQnhbfw2ioBpLkk4p61zA2gCVMzz4wLf",
  "key8": "2yCpkc86JmUoCYAfuYeKHfb2qgCktpwpo3Dc3ZoQiV184LiSwnq9yY4soHmW6UBfVTMw1khFkFmSo9wKerrQGGmH",
  "key9": "2UMtVzPYwMkX4LW7qwQ53qS5g73orsUYdVrMZPdBtQzGH7PuXcT5h1zoH5npRHUA4bfoDexCGvEYrUFWoqQsqp9T",
  "key10": "3MCtTNr5QJJyyNDfuyxLrCNkH99h3zcNeMqS42eX6ipWFwPRU5C4ZSAUnkAJzAiZA6DeV4amh8cnnoRhmyjqNajd",
  "key11": "2JpiyK8wpJbnXTNM9PbVnx7m3bXHPMZu2f9pTBp4WJSDC5t2C7HapMoTNMSy3P2pcwEmVmuDRNr7bi2eLjg7SKi8",
  "key12": "2wWeCPQhUbAm4emGTr9qmJom7Hd5HzxrUhWT7SdrdBWbxMvdvfwEPPrzyTa58vV1hPP2nnHszCe9Lvw3gZJN4jb3",
  "key13": "49h2hTVpKjahCFD2h7NHWmp8PGDwaMTbr4eBDiCuMVN4cuCrusxR3gSuxHsq3J1bYDzLocaATWePoCeaMs4j1NHP",
  "key14": "2QjgXSNwE5cyHFhbrmoRSNKC8E2nc9kYA1FnD8b1Ekp5YryTDsvYZEV3NuRHSS5jvnAVMTtBow6KAj7kd2WbWoa8",
  "key15": "N1WP8gStdTpHKG1AxeFrsWBFqVFaQvf7GA1mgKgCxCFmUV3diDAjwYUrXJ3CgWBrymXatzKgcuXojYeQoE8dmt6",
  "key16": "HEnnXFgb9Ri9wXehQzGCtgQain9JoH4KV9WyXUsWGibi2dUcT17i7v26u93WnnV9rmDdfgJkhYWyf4DG1p6gU2g",
  "key17": "4LGYnHq1bBRYwV1qTiGZC1sJRBH5vZ3aBxqzdmqp82GmjBtMEqTNpV3uFQmvi3ny4Nfx4ew6Jz2Eptvdyis2ZWqZ",
  "key18": "2VZRT3jrzeW3qVH47QZyvN7addBtzQ4DpjH2FG5JhbwmUAFnqnDiMRkS2XMHMSmusT6hVZn6bRdQDrKkPMvbMjbm",
  "key19": "4hURmMUwia6vUGZbpx9Ls8HPFRXagvz3yTDTjssTbe9y8cqNVA9fdRMEAK1apg9KuPvbWB9g7frHSpgsHtRwxj14",
  "key20": "f9g6nowLxwAGwP4JyZGJ8zDQP483D2v62ji43Acwidmteunz97cEum6qC6baZC7KvpLCRQLp8ZapisBGbtLsmtD",
  "key21": "jF3BFRH7JF4cqauNY5d7GRFPzRZTUnLNT9V41P9GkQaFncQ6uEWarpUJiwW3yQEZZtRPLVGWAAuaJpVvmFGm8i8",
  "key22": "5sXaAWGt9TEvX5tcDTs9UhYW9AZrqeXidmCfWTTY5xTu8SVxqzPjyCGZTs2Ugsn9GAtEzsFN8AZvXCnRxDJa68Gf",
  "key23": "4LiCcZkuvJYgA6SCKpzd5sgeiK1ttAhDF4PoEEchrE7xPeFBH7zXonm8M7Vf8YM1AvtbqbDkw8iwCnfKjc1SsTwf",
  "key24": "42pWaBUWnEsa6JehLkyFf1vLpmE3PJqkUmA8rszXPuJZC8FjtrGPkV6YXVQx1hMFtfMfKzEr8a8qVdPcpn1aDcut",
  "key25": "3xWMwPw3qiqhoGzmHfNeHg3ABP7eBW9d61J6piaebfQfkFKLz7LyYHxLKEY2MZYvKSCbFtUDdSDkNiTR9qYTFk42"
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
