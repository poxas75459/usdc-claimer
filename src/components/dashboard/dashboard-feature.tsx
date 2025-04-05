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
    "n5ZnAxxKidebJDFbejbAzvj7RRuMLXweC4bqaUSv5nGfz1SPJGgQwGJqoC9KoZfU5KPyaeYBwoMJV7osLEv27ti"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5asnAfJD2jkbnMWafxK8L66852PjfjxgsviHQhjxLZyPb5SP7rArK8wzK4d2p6CMi21Sfzv4iBviyyVntjoWrkWB",
  "key1": "55nw9bJJioLX2rTGX3znEdQeGc6P1YXnhc2nL6eqWHjCyepjWErujo9uMZJtfR6GELkXFsgPUQD9Q6a2ioh7u318",
  "key2": "4DHgd4A7d541cwcq7NqucxMFPoC4mVwUj71XAwE8AnjESjFUQT8rrGowKJyDZWXaaa4hey5Bo63A6BRYJ4gsubJG",
  "key3": "4cjhtWVgHeXBabn1EbagPVZdx1iQMzsazY4hBBcdNxm6sxddG7wKhxGzshi1wvyMPLh1VPvm2nZ7p2o9XjEjpALs",
  "key4": "4cptqjx8Gk8zexEp7HdeDevJKdyYzoJ5FppsU2hLfJkQMfvXKaaS7nzeaYhBGXs3y378gr3djsVFLKhd9Y8vh1FT",
  "key5": "63gMC2sSQRD85Vr3fdW8ev1vY8PVu46sS2xfmjSx6Ptaccunpwfhj6oKjzXi87ABkgg7e8wg4FuE8LBDxn1ghUzQ",
  "key6": "5NBgU6WYBRx27VHLkj4dMRnYMM4fn2mMqxQQJEFmfsdU4mbZgj7Zq8psEtqddYk8LXeEhvnEVPhmFFufeykjx6wv",
  "key7": "46NUGp1hBuuzuTA333sjeDx2C1xXser2gU5vXukhgqPFVMgTtWktiXnjftcRLcph7nbH158gW9TNzfH2HspTB6zJ",
  "key8": "JAPA4TjdK16SoVtQt5NjcT2S4LjgtwhfmYY4vm4hUvKoGzsTcNqkeyp2oMFcv8A4YCJ8mTkFsP9kzGZ5pRcjPEa",
  "key9": "5B4cvmUCSpZJhshHybHP2WugFebsHYBsJ1ff2akbDZhoEwxbnnZryYA5AhDFNj6yQTNTg3m65apj4iWNaeRfbuM1",
  "key10": "5tZFV7cZKhpKnYn5WtGeChjqgifXnugr17AmL3n45i4PHrBJozzDFYMeV51UTbD499tm4NhLroFrM3AHHyfYo4uH",
  "key11": "32LUNhtBY3DqzLtsjx29ttS1747oionn8M1QT44n7JmqSD9PrgVhUh3HoKyo8E553Pymh2AWoGozNTM48aS8rirf",
  "key12": "4ENf8BojPNpGzqMpZyf4pF6SCdujy53BDKyq7T942uWFkEzd1p8kt777n642HvPg6mATzN2Fpmjm6tNftmSd7h7T",
  "key13": "AQBMG5AYsA1axqFn3JB283bBx1wSDh1jUiSjRhyWnuxhSqcrytkvo3cpmAuDC38FbMpQsZcsviFA71cRk8h7PyU",
  "key14": "5Y5Wu1ArX4tfznMeaQabB9Rt7GYSz5azkfjFqSrZknRmQkMohrAEJ8TVgDtTc9XL7Nx4SzJG5oMpNNfQ9Q5LjtyK",
  "key15": "33Z644Wr5vEJbD49dW6DCHAw34FyHnqv3zqA7Nv7D5xGhBQ5imQLyB2ki5WkHYZWV2ZYgtUHx8FDArN2EK4sG73F",
  "key16": "46oBwGHwyYn71DhHf8mcQSPHwJwFsEtaLimyFs9ZUJLzGcjEpcgcyeMCr6HEcx6kaR5eboo6mkHz2n4ZW5XGUY1W",
  "key17": "3JooPYouGfmXoY4RRzzMobq3vHGgqbTLZ9pHi1GHqSW3YoDZRqGsRoUC3tWo288HRUPqom2E2vdUaiHAZpVLN6if",
  "key18": "2ZQrHXM56BJoSkE76FFEtkkvdVuzsn9HCNs6aQgGDABKQFTbteb5vi2WQfvQhzV2D8BPxFrA3LcX71iL7QrRNAS2",
  "key19": "4EPF4K89ymMsX5K95cZh895jmrG3YPB9p3NZCNre8Ft3QZfJ2AacWTgiUQzniBSUmHMyK2c3yJEAbMi995YL22Ge",
  "key20": "4dZRG4jqaQfc7nQzA5sv4V6Dhn1AMdx9oKGocmEEUimaYDFiF4755B7npv4ZbariksuXnUzASQ6Kd9kwxubm1vQs",
  "key21": "2JbJ5EAMNWZuueKqEn1pcdzvEecvP29uF1DqRteqgNhCurdh8hMazEHSrXh5TwL5ELMnie2akuJjnMVyGUUWNPGW",
  "key22": "4mZhFhWcwGRvWa1KqG1P6FSLNDrKeTq86SjdpeEkWoouqC9AMMh9Xyf1wc8TxPycFKgzU4iwASqFAAS1JfRynCqc",
  "key23": "2vwPEnuZYZqcu7Jr1B4tQMWz1pAABQugPgfzqniG4PR33d4FYp33zVQCFJGMwohnGg7rqL1Gh32jsrsX73axvMD",
  "key24": "g3pY3FXLB91pWC26MXU8HGs4fAP4A5ZwSVC9rEZhJ2VNzVVD9UU2Uy6nE7urL4d9niqGj5MLSkSFTBRtfkbg7kZ",
  "key25": "4EFJGoPiWJCbyeHgyGbnTbmrFWJJwJtyuwA6oLdmJho7kGHQs2MJxZ6inpKWVEXTgjEVREeSuJDNH1rg3Zv9W9jK",
  "key26": "3viWLEtyjqgQfxu7neTMqVtiqct6axWW57de3Xz5PwALCP1Y7FNtSFCaQQsKzqKiPWw3LTfKCnRG17jXwPVYf6UP",
  "key27": "5d9kFnEkuXB3eakh47Rs9ujVK2S1pzWJRxx8wer3wBtwfKUDfq4weYQP7wxuXnsVFm96fUb59VA7HLLXzdmybmMW",
  "key28": "3QYaWLzvNGFi9TxpDj4edP5TX2nyXumk46LmgujVnsXjrVy79BgJNGkyKyRUf731PaCaRvorkQDd8HR7kHHDTeVv",
  "key29": "4PgZADL1h526MKyyJp297ksZKcNTvMPJERgPzxcGE9LoYRd8157NE8cTEvZ2Qux5S2cyeUEx6ueAK6PKJitrjVii",
  "key30": "CgJpayYoV5RAGQU78awz8JwP6JLq3rE2ji6v3DsyZVNXRiefC1rCMQKV23tRtFh7FQ5XjohuQo5zCGMPvnfjrP5",
  "key31": "xEnc2NB8R8reBBtpZnA7sLEFDYvNJ2f91PcEvLu3ie6pAqmgLUgb6kmoS5FionB3gvugsyP3EZ7YySNFPYoCYWj",
  "key32": "4q8YyaKRYUJde7wFRLHhgfRBgy3skmtuzkQa3JqCawQqMtkmDBwHxwe7ZivZSfFFJNyVAhcKc6n1gruQ6WdFLTxN",
  "key33": "4CAxx1e1f4UBik4xbhnAY87azGaAYxPbqPBPnspYZ5r5D4MPhmvctJ6DzbLrzUnypLhNhn7eBMst1ZRvVAGhnM36",
  "key34": "5nRSrHhgJBNgp1KELL19qCuU1eEZFkfszpi4y641biTM9uRbZgpirmE7X9bVgReHxKA8GusZtve4MwDojqXEParj",
  "key35": "BQVV14zRknaEiPRJYfDvqfeFZsJqhHX2Q8B61oZLScmVjHutw2xom7RaXrr47EozZLiChkE6MKsbP6zsPdrq899",
  "key36": "3tFmLiPVMngA9QA1jVX5J4y3UJM6PDRKup671g1T48ZUnNejhzLmmnCwKCDh3xP5Wd6ypQT3CN6arDCvhwk4Uxkn",
  "key37": "2e5o8Nu1z37grTYE3WDqdqTEG5XE6S5dPKFEbNv3bf1aeUxUiMSnW1mGeRDokc8H6hTk3Bc3t4Ds8RnjVH3JN69R"
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
