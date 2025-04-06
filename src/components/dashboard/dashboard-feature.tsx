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
    "4uFa5QvLqoUVMXW6zPm4zn9ezC3fSGUZYGrJRZr1wF1Y5Nn3jZPRyodBo3C6pmpudHxHTYKM21fGHuc4RnMk72BV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LTaQhZbccy4JojLcCp3ZCCPRkwffEAQgfqDvmWgSViMt6DRso6UJ6ruVis2i42fNPdrTuzqzaeKYLNycMzC2hKJ",
  "key1": "2mqmmmSUFiHQCueGZVGcw6rF6Ekp6Jc7s6torBk2oH4qXa2NhoB74EU6JeuMBBLcWPw3SBdsYXcfyfsVyTrzTWRs",
  "key2": "3Fp5AMYZTzaNM6iAEeJJDru71Z8CPdkPZZ5ryaospWYKSevvBMmUyZT41Sg6jenJUX4QTb5oY7ZMhGvF9ivVp4YK",
  "key3": "5icFpM8kCpyFYmFNTsJLgmLy7ygPbEGCoYLMB7PwsSAxY92FV8RASFkRSXgjxBvaSmGmD3Ep3XGcnaw457YEtVBK",
  "key4": "5GzMdpaC9iwmAHDbfBK5S79MrEcxHQCb1PN7vG1mXi3jqJGW2kSKtVfQS6bnA1sjgvcadisqF56mtqQv911mhH2i",
  "key5": "4Hq7F8zNXPQNAmeyMCmd6ZjYe7N1EaTHUmTj1EyuM36Px2b4WYyhna21mWdUQxmU2pjNAQEpGXFNew6CGqgAtqfT",
  "key6": "4Ph7d336ayEYktdx5WuQfsrvMC7Pee8LkKhhSqn8e2mVNBihv4mQqTccnuiWyjQbj8dtBCNqHrCdLKsaRXPEVRqj",
  "key7": "WDg7ihYhaqQhqtS1huoCNWWGSqFNTKkP7J1e8p8BEeYXBesUAdTpcwbe1SHzbTwHENEtS3bxkF7p1rNygVVE9AS",
  "key8": "3ovH9cfBi9VG5ZKf7qhAfL3nwDbY5p4z1D3TgJQTHGaWA5wggm7zH2jRynq4LcWhNMQhi63dRia4XQ1WUtsgQmDQ",
  "key9": "bFjqqQb8113apkfS1hEbUgEVWrJ8YhXiutaBLLgwannHo3Q2xPxPShbSysFVMNdkFSGH9FEZoruHcxS2qhJi7QJ",
  "key10": "E5QuSzrnhCZggr6DxHr5zg3ocfRUUBee2PszD4ivHeG5iR7aGSDsTCEvCfinKX6dz6qZRWGGTFXLLFTQuxdRrnA",
  "key11": "5nfKUTPDM1Xf9FFbhDG2iDVibkX6M666ANG76tS6NPtykeFGLPjRthjRdtAxPAsx3w6ZhHMkj4C1BhPTn9st7iyM",
  "key12": "5UTz3QCPRsQgHCX1qhHbsQ5CsHymhwq6jKJmzUBnx2JF1arY9juEWLa3R4RxktvRBJ7rXGhuyoJGy3eVUzajBpJ5",
  "key13": "2c5ho2oMLL7g825yK6cxiPQCJwdhGMztKV44MNziz12XHCE7pUGBxxKpwbeAjRriDeCNRLq2U3tebDTp5sYsiJ7s",
  "key14": "4S7KKpBYwXES1obFzTjK2gdgaXf8GS4e6f8s8dBugkBpKxGt3z8SVcoRvxNH8oUSGbHjQVHKP3A3j9FkTZuxLg9c",
  "key15": "3jXVerQocjnLRCyDhfdZySbpuNGaSATC8wmpXjB17x8BNwspWcGF6NykNZm9rggexhncsmfTEhfVoYrHs8BUn7Sc",
  "key16": "2RhbtX7jT6iPVxojR4yuzg7kt7TvJ9BoWaNTjrBPVNnkKg39ELzhZcLgdpmGotLofFty1FTRh4HWBobubQkeQNhR",
  "key17": "2J3DCJNqAYLkC48kaz2r4njbcZsHrWUB5ys5BJXjy39aeJdmjjUHemhARWLFm3nugnrswPL4aRnD4rbbhNttSX1Z",
  "key18": "49gHUvdgmN5YWCxAUEikYUZQ32UkcdxLPvwVCVunZWgLc4aFzy45LrgVXteJRH5Srrt1weJEytPGWkFANvUveXaG",
  "key19": "2k7DSCiz2a6S8T9MK74aEDCByuTfhw627E13nkQR1wWQmNGaniDAuhdmyDTvLCgzMwiNwKDpPfRDoHKQfWSo4gMj",
  "key20": "3SiboqCjtwpvQhxxifGjmT5NH6urjptaNNBzcwF8hvn2PyexdcHqsnw4h6jyebkee9FYar3jAMv5Zq2uwniVgFQt",
  "key21": "54sVa9MdBtPmjVvYJBhMGTmZnAhNEPC9k7H7fpXSUuTbxXX9L7cqH2YpeJuf7A5SSx9Q8FvDVv5M17XpeBQGdqPb",
  "key22": "3TG1C5V8vuae8dRPcjjaQxPDgJ2oQc1HGpVKwyxBdxQRrBKgsatGxytH2GDPsYGbYXUK87USZWvqsYU7j9oJKpqP",
  "key23": "4dHQhJF8uGdoZpzyCiX3wFJrQYVKnQByJBfazdaWufTCbwSGt4CeQjEPqtuKLFDABi7jy9KZtrYqp1MXXfjxSncZ",
  "key24": "5nsotfK7yP4KtUZ8RVhbR4aSYZgJ2spZH6XX63tHaQqonQq2cTqvVVDe9Vg8XS9u2BZW7kArcK3HaSSHozKKTc6e",
  "key25": "555jxggkLAnqcFk8hBdGXGgi4ZpnxtAC7WgSvE38u3THVaxjuWwbtBiWjiVT4YfszXSdBBfX5SSfY7heLAQiza7u",
  "key26": "kuamvAsv38EbjMYSkvkpv8SkhxSnWDqYvc4hDXf1gNPjuo8kByLm6Um8Pd2dWTRxAqRybYzxXEqFLRwT7scxrju",
  "key27": "3daz6eWCsef1Qu1BETBiThM3YtiauVwtoehAT5WhMPGi7Q6Suhy3wd3s3ZQkixKhJVXnuM6sYywPxca9YgGG5kgQ",
  "key28": "2xESMRFbMbhAjDqa7inveW7bZYe2VZbE99KZhdXGbe7yfbsWkAKdhGmcXPuPR2QmBeuRhKot1eXfH1TtKQ1Hq3pp",
  "key29": "37Xw3uUDuW5bvJJyq1Kge1UvSu3b1S963ENDSc6u6Tj1MkHFDS7gWetmmFk8azmYX5zRh9d6jyEz36URVoUpMKuQ",
  "key30": "5xSUPevDuH49HtQBaJ3JKtLUb998EwREycmEm5YwgCceVrmnoqiG3qPBCiipH7Ea1gq9vun5NomSZp7MLe7tnbHa",
  "key31": "2Lf9Ej9BiWDdTPgoSmWURuMYkF17DR6y5cVGKCoJkKTsEuEbzUNYuyinh7mEpBzZ4HmyRahMnbAapZ9Vud47w94g",
  "key32": "43vU6LSqhpQCenKNzCD1LkHojkfgGfhWNrtMEdH4QdnCRPqfeAqKmsW5LS6HZGEi9i29oVoWpMEfSvc2zxdfg3rS",
  "key33": "122ueid3ckrYfTk67MN53KAVnQy9REL1B3hyhPcPDdKyDrdxLsmfowcNVzLbu2YyeX4wJYgUe5wY9gyxXmS7wS1P",
  "key34": "2GrWQyfeMdgq4eQuqufUBpSH66WcQiYTDFSmoX8NW79qhH8jR32Esnptw6XQXWNYd4AGRSGoSU7fxZpvSTQA46Pj",
  "key35": "zKbz7mgUvhTjyXWt5ozCqAGMTJx6ye6R7aSaiF1PA72WKrRiniN6tUwcSXJNxJU9WYgcMQ9XU4htDGDU7HM7CpT",
  "key36": "5oy9xfEa2wwYT1PysyAHM8D65pop5HCjRED9HGv4muMZSybMLSecqbfSZPqS1zxU4rMYKhRYJ81uVm6SVrdCRtXP",
  "key37": "5dF97wR2ZXAhHv85dgiCFQrjgfSvtwKSG7qHUVzzteqkXpX81XJEL8sLC5tXFjgTSkWRRTkpCUfNrj1uJnmqQtpL",
  "key38": "wnoA1cmoEKHet4hBDMVXqmUdQ1cGhvYx4NnHbwiC6mSvcQReD7UwigDyMQLWAyoWs7FjAcp9LfQ1oQ23fkyw6uU",
  "key39": "3oZabhWqKN2VPiKR63MtSgDmV57WmTPUN56Z1FPzZrKyMu28g2KPtRXgAUU4ceXLRs1ejG3rGUrnGmZom9DX3Pj9",
  "key40": "4sDAeQE3BW99viGwZH9pdLLTeZz2Zk1Hg5Pmqxgi3FQZ47xn1bwCFF1eaNote5hMhuV468sYr6TvfeXYo6sD3nHs",
  "key41": "5yarHgJdWrQRfpsX2NKTwfHakb24C2zTazXbB1kLUYM9rnnaWPTrViCKwyxYrQ2w6rRRqLWwc4X8N7USG1KWqyFR"
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
