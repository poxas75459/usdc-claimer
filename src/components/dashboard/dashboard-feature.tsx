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
    "3aqEQJZcH3HMmb7Hc2vXPjsg81EYyBe7bwXWJsELkQVmQFaFwb9WMZvDVD6JE4VC1gxtbp43MuSxU5HbHWSk6fR6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47jbCHHkKGHN4SVf9KnUT1QUVhAJpaMGBcs68w7PxdYzxenYEoaTyc31L3hB66HUBxsKJ8kx9guNeGRzFLgvupdS",
  "key1": "485zEcnkGCUPUmpgWYrJHh9TGRaVtvtRCvCz1ZmYwaozcrYwYWkdMRkPZpo6PtrhxJghr5g72JeCc7WAXYz22u1",
  "key2": "53qYPGUpgZxUZmyWJog1m2E9uB2RLspoZr6mhiLDmyYHp59azMM44FnNeWDyw7aQaMEXkjAftCLEQkqGu6MmCmDd",
  "key3": "55UBYaf3umabfv94EJhjfTimyZdT3oP7Jkz4vqZncqBWL3qfW2LF78wY633HDWnMcP66YatRVWsHX9UR2jBGgFdg",
  "key4": "9Lefu91y9bh4gJcPFTqYUTA4q9FwcB9TXN18LC7Rt78Cv1EpTrfwaAaoWD8o6V3D1YrxkpiCEqhGPPgLSvep6NC",
  "key5": "2dYQVnPgQENU34YfWnqb1SiHrwH3SNaVLLVpPdW9ahaMpKzC1f9us237Pc1N1wMMhbmfhffBtKc8DUujgsebQch3",
  "key6": "29phoKCrWurS4AzfUUyUoxdbv61Vja5oUsTdtfwhkPnmmgWDVFg3HBjxKJzD1ccwivvmxfMYmYZzPpV5euG82uE4",
  "key7": "RmbYUfeJbAwGZXGBnnFNWso2x5vWdzqz5gcEwsjT3pk8dLLhRLLhjz1k9uasCi2QSXrxpfZUQBMVPQW8BiPSVqB",
  "key8": "5eLM4qT8tttsia44gosqvkFJxHZCwnoUZRx6bmPYmhsahzgGEYLzp9CtCajXBJcHwjGVNMuuiBc3L47YSv2LwnNx",
  "key9": "3y6r7ThxFwnFi4hcLkQSVAKMLuxdMRcrp2UgaHycSzPDVU3dGJrnbcFj3bZ7Ybf46ch3fUSqQfNqhYiJy7gKrMLY",
  "key10": "csQr1DTHHF7856AwtzzA5gpwpuRVd9ARobSjD219quRbvva9VYXHEfAQuj94VpZ7754iCA3Kf9zJY9AHxpLHS58",
  "key11": "3fkEL5zbiqs6LtkdCQj1PMmx1G7AfiQj9xbHBJuB7mCf68oDKSChPQaWw6pQDQZGYBCndg96TGSaKLWNfUhdnyHj",
  "key12": "2DrQLZTzYDmBa2rZVfcDwD4e2Lv9qysK5H3xu6zEbsRBWveyvqiaPaU9caZp1LW6BmedvKRmkxJHucDrDeSFUzDw",
  "key13": "LfuQNJ6d4PRNLRth2WVb8e2hXiHYjmDqaqupQRGk1Kzo94h6FbjkNMzPACY7VFFEzC7HZSz352PMB2oELdNAG9H",
  "key14": "2XdeYn2kfPJaW19FrNrvesCWMMeZPrg2BZj3nANpDPinbFpuZfnM8AJMEHM7NcMVTB3PriXfy6hC8wwqcRmRcoRq",
  "key15": "48fHXy5feNdFHgwi5Brw3ayhKqQgzqgcW9ewU2i2epB2jY8EM6oUWynYgNRmcuf1CEN9Gx5vuGmNBx1SLBjvwzXh",
  "key16": "2ZHpiWjy5mLTERHT9mjcvp1MLJWJdL5WkmvS6ov8qLsSjmzqKVG9xUkivs21AdeyukPi5mX8vcH2g718YUQyrKHq",
  "key17": "AqKBoNWGwkWFLo5Bjttd4w72XY4CHmQB53JkhhRYDX57YNf84nsfcLhHMn2JNJDy2Q1kt2XXStyXDGvcDCLgdeh",
  "key18": "3CZ6AWY5LyFKsoyz8D4dsTcMMwaS7WMj4qz6Gh1Er3Z6dRoYSKKAfpDMS6UfrgDa5CCe1x8ZazP3cWjwqcRGouji",
  "key19": "2JJwLUDCxMkAcgs36yNVoVNgoXzNQMLSkhvy82C7np8CJkQMFjrnxXwmj6cZ4QH5QFWFKVRZwAXn18tSmMGftZYR",
  "key20": "5xDpLLf59QmmN4CtvNwbeZngjqDTCiN9RvPU6yphpe3yu95rQ4U6VJygK3KAqTS9YFwbjbSB9e1a5PgyMex7qiEn",
  "key21": "4NLBeLJHy19TSkXeAzVAXp7ZYvG1LoS8kbnLhHkKNUN7ca6LM7rU5f1ai3WwnaoKXsCZDsPdyq2m2aJt5TqjPeo5",
  "key22": "3HwA4MxCKQHQE1LPhoExYAPpJDNUVdDbH3eeMJ3s5xwWXfuKM3AJkZzuByc51Db32XE2anHpB21pcX8DUXHwbsPq",
  "key23": "5JXDSYjf6msPNwTRcnaGy6QgaPvsuHJZKRda1PXqGn7sq1Lj6sPQRb4BnRuDByv8wbkAkBmJYbSFvFT2MN2FHLLf",
  "key24": "3zDRrjXUv9f2ki66Vr99gwTTotMMdSY5rJHuxjWJMEVtrVRfo3zxEviUuasomXeAKyMe7qGg7LRn9eNgTBv7kGHH",
  "key25": "4UYrCNfD3nJukdpGFiM4kxvDRoAynaXpX6RBqhVjtEiJppEyVGiYdzdSrhPFMtc8qHaJQSQDxuCtfJMUgW51rDdz",
  "key26": "3tpSnUa9Pup2QgDq8jRJobfJKrdqBwuDznQ5q2AtR31FUf1WMync5hoWvpGYQA1SmXaQnaJvrQbJj6xtXmkyGuc8",
  "key27": "4qeuPhLVQMBstFBgzjD8Kyd15TTQTt81eGBnu4RQMJjWqdCfBEJueBD2WYNVFN6EJyPczygFtnxuUYBEy2VtDtm3",
  "key28": "5izLdGLh7RmGyUdw2yoTyPMVX75SXmEwhxVPXE33uaeSMJbeuWUbfpbgjX2otCsQ93BQfERJPCJiJwu8ccRToiSF",
  "key29": "2Pc1nTQm98cUhio6jVVoohCowxCwiysk5KvekSCKKDD5nrCURV3dMMv9hUUxJFBPd3KHNEUCB7bKFUXWWSsstvJS",
  "key30": "AwJQwEeiNc12RKbKfKBj7YgLQT38umRtFqJjStdgpm8LeHZeZYbGScPDDhQULJzP9zJkKQ2SXw89QLPnU3sUqZA",
  "key31": "3MVA8WFJzrgAjkp8XTMdcpvjWxa5CLYLN8AuJLb4uyAo4bhckdBF8sXdY67RfmqWGNFd4p9xsgTHHGHqXNdGSK7T",
  "key32": "4pSukFPVJrCJkMSe9wfN7msWtWacJDKHkMHncw8i4e6Ffn7Stx85hYMyTkWx7kcmN3wzfdrJsmdZ123p9dDPQ16r",
  "key33": "36bZVJgZJVJzBMRLmgjNrrs6mBXrsxhhWJTQBHcacSAUnuUUvTuYPwm6chhFonxddu6C95krBAenJSsMUGspAdKv",
  "key34": "K6WEgZyvg41WY9mYSWm4agFBUXWUcdBy9vzj8yFYGyqHC5YcHsHt8hMM139mjBiZPc3gsoVP3kcz5EufKjZJage",
  "key35": "2Dmbz85rZCD6pADFesWxgkYdYekFuGwGyRm6N4PQbUkMi6M5b5Q3qRFr38zpFL9mrdxLC5f7uccuQcuc3uUmYXeb"
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
