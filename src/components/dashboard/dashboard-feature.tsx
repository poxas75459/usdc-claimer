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
    "3KbYBHBznypNMmeLd2NWHhhVhob693rnV7bLsTftbxzPqN2dgKBm9gbcJ8oyMdxg2Fx4DaZnCRpG5wrF4jmNRz77"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HuFsJ7KyaJusHekkMpNDkqq4RbQeHr4NQWEfCmmepsjauzuXRE1ExKdYvMJeQWwLn2rhyGBtwNJAtwNLCyqEqth",
  "key1": "ZQ2zDmcRVKCh18B5MuUEufkUjBq3x6qXZgjTqd1Q54knhwkpNxdT7MLmxiBPGUSUrPgqFSU1DvQEAxgMskRf7me",
  "key2": "34GRSzJwVEMiFRPuMaEyWYeebWGPoYFSdW9gTzx5Ta6fzpC87GPHt9YzNajgPn7MG93gwHbsLK5L32KNkkcj62tZ",
  "key3": "5mfXJT42drrQaTsL4uA1ruaaiHuV6yW3SetFotFXwZV9hU4J95V2LvmvmyUoGhvHGe1S9JAAF5yUcZ7hTTRjzCJV",
  "key4": "4tw4rj32CvLHBv3kuCUbjQ4gMbYAQWzpzzZbVLWykLTCE7huNzPjCpb7F7mQ2nnzEakL38jCWF4vd5vpU4pnirTP",
  "key5": "59fuHFGcpG2jkqS1i3AdA2KxABnmkRhGBgWfUFQ1mRMsB1o8gaYaHMRvibz2HUiYfPbXRLFDvThVgfDJVesi4dWc",
  "key6": "AvTzbr82XoMZxorTZjzRv1si5VncKwHdXQC4pPhuSd62zs4nZu5H9mSu6KNC2aWVyTape1pLoXUCqjPuEznw8dq",
  "key7": "3tpkn5X4PhTyU5pY1Hz2irkMxcVRow2jThtckM7byZ6TGWEtoa47mU1UVX7JGYP4UpXb6t7uwkAGoq9H5dEw3NNq",
  "key8": "55X195iPLiZa9umPkVPYztnPsTT4QL5pKHXi2EtoNJKPBBSpCUkEw47R6Z9U6vjme9pCeWxfssCGXYdtHNDsrRew",
  "key9": "4GyNYDi7DE79HN3AUrmUXu3wPEf9T1WXLCiTgEZ3i1uJXhrbYkvJE26DvZM62cnqs3EgHbx7yBrX22Mt2j4i8DWY",
  "key10": "2Aq1NLReWgMznRQxQgJ5JMnEzSsr2ScgVPPMXNN8Zcr81trZudhBa4xdv5RiMiDdaGfUfLLsNQgqHN3D1SjoPUwB",
  "key11": "2LksYazFBoiT5wEhXA3dgcZi8VNMSu8dbZ5ktgaq6WuwLQMsSLR8HosAbaYZkbrjMJXqJwVEogft8Bcpm59NbGp3",
  "key12": "54TTnhJmqSMYA5iAxVLtFPiDCeDMfpLy5o6Hmdm6oHbVU5to9pLVqeBAyXeAmUUL3nQzFXLGbZChE9WoNZ58zFuC",
  "key13": "61Z8p5dT1tGeLFcbDMo9vVe2U5zD11JWrjoUnQNuvVet5AaGQkJmpkGDcLoBhGLYfsUcxLUYNCdiCYdjymbHGdyU",
  "key14": "2kxxruQtWhhAyBTN4T4XTGRhDWTb7bZeG57WSoVYDhdzp7oy2q7i8ZqbVSdFmMqZhsfedrvkuE7L2D1TS65EbeWX",
  "key15": "cVgg1dAAfSD3wUnrKsQi9JMNsPhYBqcNtbe38sGHcskwPg4vs4jA5JHZ9d1mXurnE57Zaor6oquMs5qDMgdwbfs",
  "key16": "5cqsRGrF4xrogAZvxoxXLvQruv2Es96ZPdMVP7aihZEbXL1sx5ixJo7tBRAoQwPVCRmPZPoWhJ4Ny2JonrH2Rfan",
  "key17": "fQMjfemjGEeTV3Biy97q1tcWMJ89p5qh6cU9Pr6RhrAnDzUNJzP8ANsYf59fmekM9VkVbMPbS8FXsBUHpEJh3VG",
  "key18": "xKHpspC7Aejnpd32dQhEeBhiaz5UqtqzMFn2iTgWw72vSt225bX8EFKaKU4BJQ9RF2vC3bygnhuD6zcpzRX9v8o",
  "key19": "3VbzSgzdY2vUHuHTKnb8mPvt35cUMa1UoRfRje7SZGPpGGKHQLPtrccw4x97yuefD4RPkZsQLtYifWGeDPDFY6ai",
  "key20": "2iyMsR2c7V5G6tCYuj1CUTgtsXCBu1rXWuB8QSAFQv3tgukZmPq9cazYtYd4XxRUhVMVEq2oHcuihe6Jpp6RbkfN",
  "key21": "52VvJtVLohMZiBhJPTbfRB9P2Bn2MTvNWCKfUNkTHSGV3upTEb95nRMSZ1TabCtSpEpR1SZPu8VZ427v1fVQz12k",
  "key22": "ufCouhFbVVCQhkKxi3amhrywetzbzCjuv9qrbhLb6TicD1AR3uerMyeKNZStuug9VCarmhX6ofJqAvuHg9wPME1",
  "key23": "2Pf8PABrvH5H3yDZ31LLFQX2wqXDZdEjRzVrbQ6P6CFLwW3JuW6vrEjiJGtT24sPCTNXtYQmysjjMYhruts5Ez6s",
  "key24": "5UiZ1CT3bLc4fxy3oaMiEHBBpn2CNuqXQNz43fbmtd8VvDVSSN2Sp47HTDzgYMNL7dMHPLRCeNhD9UVfVcioENUb",
  "key25": "5qHKRZwQYqV6CFKMNm3zsK1Tj8B4ZTxyUepSoEHf71UzS7BUn1DoWsBx42ddogkPQEVpZa5bBzS2Nz5Vgy2RiUyn",
  "key26": "2j5yAK5pNu2naAhAqTjK4U1EHnA4k3YXdBXXeFntqvqo2Xhfi6pzFXLvyktqBKqwJpVBuc8F8RsrYLVArFz1frE1",
  "key27": "2qfnBRPBveY1GYoRMPwp8ALrufuWpiSQ2wsCcY649vsiG492WaTftpyeJXvXX8JGx4rsz9eesmc6eVrLsHR7Xpmu",
  "key28": "LJCipXTX2iQ24EYrGVU8LX3f6xsEdQPCgfN5GhXPZA7nGRa7CsfAUdmZ9SDCB4dyraQQSTp6cfWPXJYdFs2Twd7",
  "key29": "5HZ7obAz9ZsqRaVj8jFzEg8b6NCaVhS2c1eYfEbsrb6wM6wT4XYwz8gmjh26sCpwEq2JxjXcnGrgWeEGWi28vRW5",
  "key30": "47t838tBYx8zcH1kCVMj8bMciYafxjLPuGPKtwn63fRvweSsRirQUFbwHTnFn7Wh9i15zV35pjwAYAK8GpSXYHAR",
  "key31": "ojvtQs5aUNmUL5qsFBCgQhPQiEvSmACZkw6i9YyfoCTXG4SP7MENVMnScX3nvzdWd5u32SzqQ3ezp2CokPdWUUF",
  "key32": "3Se5B41y1uFSgQ6GUw3QpAMA9bcYLo2gzaFcSuLRULi3dACJtTgzLDYZHanEDYz9V93kFAtB3w1KFtFAZA79oVwk",
  "key33": "5uzG5oyTCWrLTsz8vC2Ag2Ae6JiWXs11FA9p1ss7qFXH9nLqUUfwrKtmbKJdaAzEeXiu9DB5qPEJFRuXKeawshV2",
  "key34": "ar75Q5LQZSQncGtXEymoUU6gcngD6LB1k1DMiWoYJa3Vf9GQzGXevaNAB3AXkSh8MkMv5tTGinrYvHQPC4Y4Jg7"
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
