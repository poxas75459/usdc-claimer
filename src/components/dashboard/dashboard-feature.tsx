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
    "2zsZ3K61STbU6MVoSX7V2GCdx6rSsyCH3GzCacpaDKX7pGnYg9XaKpAuqxb3YCEERHHT7cfbLMuMrj4ukNG9ym9T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dvi7dTGU925cDccKjvrYbxq88fH8hs9TEtJduVDTCD98zeFwqqCBUyBe5XyLhzLhyVJcPQFp1QFR1AE92h3jzce",
  "key1": "ySgZq7HUnPQtMQhLSXzeAkJEcWD5jT2jUSGmfig6HuGXDyBC6cGwfAUqXyCSLrMzziCXh16f58RfUojY3p7BsZL",
  "key2": "8rc6zBcwNiX8rSSWQhcC2XjLmvvNMYFDyRPPJfY6ePbFpiANEVQPzFxC4HfTtoexo3Mij488Z8ABXLJtdhVQ2Wh",
  "key3": "3X7ARyGgxFL64JSs4DmDjCiRuuCAtVAJZTKLQLKe3JXJhJ3CBwXbKVHPVGiba1NP5CCps1FiWN3uJx8Y4NUEAKDt",
  "key4": "2zWHjR4Xxd2xnUowW2uCqSrQjv47uu5wnfb4RTPh2aBagyP3PUq6tiibWkeNwe4JMq8nMFisxQLcM2taYG7rdjXt",
  "key5": "48rxcmwpg4xVjK2NUqc6jRzEn73q378ae4co8N1RoeSQeQc5V79aRGdXzW2kFqervPWPgLfcowTK7VTkZu1oUjMN",
  "key6": "2pzUFofbWanzFQF1dEALF7VYES7RMVwxceHEpCW9AA6i76ydMhPohkHYzV7fTLNMGPp1bbLtrQn7Ugxxz7n1LpF2",
  "key7": "2rdy289Rt4CX84zmgPd1gMzgPyswQxSuCpc3rFDwpn3NtHzbTbc4Qey3T4KmRH8NaV5sLhdusag6V2c7ZtKahGVr",
  "key8": "2FMZBVtX4eqr5Wj7WQEGJy12idshVzqTvWx1SJ1fhgUz8mqdA6jzHDMVvZj7QJDkJj2FtfkovNH1CMRZ9maXTChB",
  "key9": "4uD1YTmA7Lu4LYN8i8qGzmVUEPr4U7s9DzGRWLA4HNrK3Uaf3bUAuFizvZ7QimjdbLBtyAHWBeHHUQmSuwufQ83c",
  "key10": "2eY2gpVGGumbHSqjy2Fx9dacsrUQRw1zkS9DZjNSi87La7YsYXv7kgAbXoooDJa9bNV2xKbph8CKRchkZSAVxPKy",
  "key11": "26NS87rbrgbsMz6m2XLHC4PGonBwSw6cmea3cHgy2HPWLaw61x6JXotkJ9Howk4xTmsSVjX15YnsVUiwfC9AbWQ6",
  "key12": "2DsFFH79BzqCuQXaDmFmvmHymSMZumP9ZisrC2oZXsCq1jN1ynwRr8685ZgXeWoVgagUGQUjiHg2AJ5oyrooBQGT",
  "key13": "4N3iZY9rVQ1KRvXny1fMBUx4ggChPzxXnD8rKY5ewm3Bqq1cRgUHWqNimNP516k4N1cvdu3y3LikKLrbvjNKTdwZ",
  "key14": "4UZipgB11oQr6dv4EBoPxKKzp4oXkY4ru8SZR8Msq1yh1XpcXQ5in3EB4xxXsiLyhh8FTifQH7yZxeG46g1PgWDk",
  "key15": "2GMUYPzYGRddV2MdT8JP3x6DDwBTPtuhUXgSu89adsy7RrEomJwq2wJJmvQAEYMJJthVWpaGXNgGjabwprExryiN",
  "key16": "44AqrPS6h9SrQ9qwrSXvm7hZcRQofdx1EuE7Xpd9W58j3gcJmwkvChtvym8noXd6trSfeTpTEtHUjP3cu9MkfkWQ",
  "key17": "5KrPCjePqkS1x5shKrGvjTuXpkfU21ntKF8nqvjyNrL6iPxYuFi5RwjkjmrJrRDo1ReZjCTmws3acyexjjbHWrET",
  "key18": "2gci1o9Ef81nCcfh56Wb66URZNcFTuyz5QmbgVN7UC2RoPXfx99M7La45KnAVTUUHZiVxKbP3MSCyjjiURVzrQbn",
  "key19": "2wZAoGnBPRxF8JmbEcNRzFhJhhG5Sy8kQyZUaN6a9jRCHCNoKcmGcoo67KudyvA6UpG8yAHdFu3GhQ99Urnd5VhM",
  "key20": "3dCStuKtc22YvoJJDZMUp5HujJdyq6fNHjgKatzCk7Uvh9wtvyskW1iUr2u5gkD8fbAz7Zr1k17aDTJQF6ajkpWT",
  "key21": "8kohU4HLVvkc257VUWSfGZbPusrBYZ1ps3uwbdNt8cUhChhaCAWnbgPNAg5hkSQYW4o6iQ1UwYhPgbt2VQFe3WH",
  "key22": "5wLNUCC9TbGnGP5NTcypLKutocw8pESQw73xYxTNdgdG3D7U3VrT5CRUfDy8ADSaMFYL2kjgxqhTrDrrBiDjRuGK",
  "key23": "4SJrF2isYCrDFe5qZToL7MNF7qe6Y7g5Ug7PiTnatjt9jx8H4NMw9AQ8qbxkt5ppymhz4bqSYy2vnF9QFMfafRgv",
  "key24": "4JVyz5zKHXps8musLYQ3aGSxJ4cBMjuZwXw3MZAb4dUEu8SXfiF4vDUSRiRqAQN2mM75Vhgzumgs4UKn9Z9HyFj6",
  "key25": "d2pFeYFwACVT3veZ82KFixuUELXfaErmW2bXAfjzgrtRH1tBdaYzgub4SRbHEECyCjDnbuPzMwunTuG8ED5hpuF"
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
