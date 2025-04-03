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
    "iVWAvGbNJVAuMkHi2G7rwkauWJS5i1XMwZtCSW7K7XscmBdjTYSBaPPL2V1N6ypaCgpQXEFWh8YxYFoFd77r5Uv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ph3TwmFLXbS3VdfSax6piSitbFyr2h5VMGUkiswEwSCuU7csGykAsV3DhNzkmhng3vqqiDQHw6Te9BjycxwtYUc",
  "key1": "Lht5gGL38ur7vukrCHyXXqcW9EDjCDA74tBfek8r4Pbc1igKENH84ZLG5RALvJQWvLXdHcbjnhYDj43us1XuUUv",
  "key2": "3rBR7y9qohAiYjCGnsrUDpEX9zAJHTLLuUTe9Sqzp4QgQPgCQC5o1hoc4XV37U3VkSAXYcUHAMgysFKSPZZXMS7T",
  "key3": "5HfhHjCEn9h3BHEvZbHHBFNTGo35tj9njoidBDzeMPBEp11pkKg9W8djKpQ7Pns7xkrHPwMWpWJ4NcoVSAsLmKQP",
  "key4": "4vLVaX21e7xxvgUCDeF1gXJ8jMmS6QpRvZ7T5s1MUHMB8g93gVMiUmfFM37oKf7X6QWpk8dhGQ4VvcZ2A9qd9r6s",
  "key5": "Nbf7j4MfXUZDjm2c3dm2NRfmwaGdxnGYXJZAompv99F3KJL6cxzpFkA1N1wHcoPU2eg1S23CTBBQffCoYbN9gzk",
  "key6": "iCkDQbjR7ij1uYNSD7bC7X7na3JBT4oSE8KeoKLc6a1JWAp9EJtxDjLN48qN3ECE2ngTmdwr57odXWyF61icwzX",
  "key7": "67XGPVmRQaAjMTxs1GFsmM9xWhn3a6xgnz9nYGGteYMt5uaygATw47wtZ3gxwT9yYAn9nJ79VmEZH4wbdL2s772N",
  "key8": "2B1WJULNgR7Jg8dBTxQH21Dj1utRnWxgCvScpKXHqGnf6Tk7Jr1UwyHCfhm5gzxdLkwEUVyX7fAqntBvSxzCkJG6",
  "key9": "253aYFwyhNZj7GohKsDTKtFQRQKPahb48BbM9kqpX1cpL718RFGEX4ZrL3q49S1XKHvQjxgjT38YyYbqY4QaayFe",
  "key10": "2JUSBjx2oNb6FhAH3uZqucVwjAZKixs79evaCiPDB3dRnhnt6F1Ck1rCPfSQbTH9q7uzpehWb41dNUCwya1MprX6",
  "key11": "3cApe4c4GN1zjjzhmn8DqKXgbaiApd4iDFhcaRWD7d6norWLtzk9581xecB8yZCBXbFodAvUuRq4zwe5tmw2rRE1",
  "key12": "2wVLMY3JZSXfLd4c3T6v1uGcxurJ5UGEmqEg91n6Ten2Ty8bPydmJrEem5WV4PyyAQpN8AkPuHQsUg94tweunXdx",
  "key13": "GjBFg4TWUXFYwKCFmAdNLoVzepFMSDtooEuhtbgZWHzyeDKYowBhwtMyFFuY6D37AvfomErzyo1WgwuU3W2FRmZ",
  "key14": "34hKpA22mFPCQLbGfyMh8PwcaG8hjmWbUMoG9PsKqpkv3LHwRQcJJ8Uvr5avg4A7LpQpGcuasVXk44rJ15GSdwAr",
  "key15": "A6qvFsACHzwE2L84pV5AHg1V1s6EgrLcrEfSEunuX9zheVx9fNrkYxEPZrikPjdgSaC4x35b2jvv1qVe4MzVgWJ",
  "key16": "2oNi6nDfiCzmSUusF1ZkPqjLP4WfVecfBba93Te1H2X1Yai8X99p6vUFqSVwyjFBZSQbDYzsAV8Byt5Pse4LTx4S",
  "key17": "5G8wCfnchDi6Ghhm3B8b59diCNtSUuhSnXWmEaFHmL9wSiUTpcRJtGKjHRGDhZ1MZVYPtkzeXwf7YsbEMFWBawvh",
  "key18": "RDMgsWT3k7zWXj7KGzbuDg638mjbbucrzj3rRexqsNUDog1kSNjX2zQfe6RJmZGp24vYYjjS2snYWKA6dWggr33",
  "key19": "2a3h4poKZPDxF9iUwHJgUh4D4Px9MVUiwX8otCgNSdg6d3qBYi8Mb8ARAjdRsCAwXiDbGRUpdVHsLwcYv4tM6JtJ",
  "key20": "RruHStALspx7qzXR3uTRDoBeF1kEngUrcf7fwndMJV34ADFLN2tJiDiJVaFFhVXYFDFAqdtivZXQvD6KJc7Y3Xb",
  "key21": "5a3MHRZUKwuztdXQpKBwaKZaebuVNFEBW9HwQ7JW2FTQnexEdZGQBmx13baGYPxwKH1K5rPxukhybVzP25bqUYh2",
  "key22": "4Rwkz8bfG6bh9LKsTYBE1xPsAaXyhgCywqzVNvnHeesaANrwKsYVi4FgSW8ruaYfHosvdk3593GBeZZM1KoPvChd",
  "key23": "2Qhzh17WiRyeLNk4vW2K7sQMijLzC4YMHhd6d9LUdQco2ftkLy1p6ojuwxR6Bvi5DYV8q6XJvt6bqaTK1zApU5wz",
  "key24": "2HdY5bQNRjrYtB2ZJc8WG7DKETZ2nYCUhuip2Pzm5DuMSHGxbwRJXuwzkpTvVnrkpqfwmKgY8rRi4joeH6dcx7CQ",
  "key25": "9Tojk326R3yp73a3LCtGymAukng9PgRAzEkxxUaN3iZAnAF24zQxEi4w3oa3HMVr8GgGDRQiAehLY1VnoZSG249",
  "key26": "51Err42yAyvrMRC7g5yif11u4YiLc7dm2WYAWYa7SZTy8jbyjcSWgN1vv2CFutm9dKzn4i82o3beW9E2VbL2xWBt",
  "key27": "CTHoAYojBSKpVqpGseiLH5p6DqT3XjBUxKx4EjJHKhXgcuyXJVNyHZPoV55NuUbmbrhQMoHLEyMqGh3oxULsQtT",
  "key28": "BZ4vJZVngGoBvspJf3DrdE8e98Skbs433Mg4KvGaR3pRpNbwTy2Z49p3PXXKqb4KH31ESSgRjijsgi6suoQchqU",
  "key29": "7Tw356dQSRZaFTiKzLccMS7TZddn2sfgSazFFx7eqmuEBx7SB2oKkZ3GwK6dUmHpDiV9NPnN93YdCfq9w8GYT9i",
  "key30": "3mE2KoVzJ3dRvR25gbGhhjGULK7j1fQ2WzDTjhYhbhjY8etQb9aTvg5QxXQhCXg3RBpW9JQqK8akd121SfaJ5GDa",
  "key31": "4UhozayHDDATAazRGpiAJAJKmHmT7MsagecvUaSQbVqBzywi5RXAknVRLCjr1MWivFmgmDk6SkrcJJAFi5vUHDVG",
  "key32": "2YbQC9cDYgv3XFscKgRcwdG3kdXzd5hq9ASTNndszGte98BT4zWXPHC6M7pjqnTJKeuRYK8Sz7zFEFWinWo1M1ZF",
  "key33": "5R4MThtv79qyhQQZ7FwAmRPo85s1EkH8Td1JCFzpPCzUeaNy3PEaJDHhVrGwLv3miRcmnCrW9MKsLvAUzPr2QphE",
  "key34": "5NMP8RmHPYZ8hjv5BHhoM7reUrTrBSTjzvZnAEDnaBNLH8TsyyHCiZAowtRLcTNkSDhHKvjd45prbRFhEvco2hCy",
  "key35": "3uqjwvu8sMXuqohKLf7u94C4xY1b3pcAamhTmo2svSxxe3kp1HKMBiDRMUyVHagxWxjivp7uD2p6kqoGLfvug5k9"
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
