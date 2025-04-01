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
    "5hpadn74jsT8JXMTgMnz1efZvNnbqUurQaH9Wq9pnv61NpYMiRLmQboxehaWD4Uyv34h2tzqsap67zbv2hTLWhfg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AwjGnSnHo8UJxLvgL8sK9j9tHUmGdjVW8W9owFsAjT1KWpD5qhvJhZZnfX6M8HuQHSNaxxFeYkWApAkCSSygFci",
  "key1": "4Toizr2TDzAn5hzGhqKJEhWYEW7Bs58Xsi3iHrSFiANH5wMQbYRANUAcwg3HNwXyXDJNEK1qBAb59iMMTodzPQcf",
  "key2": "5ifKVwvxDZKWYifcmx3Lozc5eE4528gdMxUMiyi8jNbkhhZ9HrSzn57AmtPHsHYk4A1GjjKUQa9bVkUJAB4R1jpE",
  "key3": "451XjJfiX6AbuXKsNqfjQVYUtUwZ3NBFuoV2rhELMq2e3ic5jYAwpPwVA5hEkP3haUAAUeTrFZWznoxW2jw15ePS",
  "key4": "3TuJc3PobT3Xwnkc932dd2RATme2UjcqgWRngrKX9AZcg3pij2CbDKxRjeSbdi6zCcSdjwq6ZJEUoZipERUiXLoA",
  "key5": "2FZMNh64fCsSKQuREyd3PxyhevSdzzJXJDfLBdL7EsdgKrSDqpk8Aq4Z7sdwEv61VCUuEXSXFLDqYpbfZW7TwqtT",
  "key6": "3ERcvW41MXKGSThm235YLuuTmRzVcSxQdB4gcRA3AzsWRniR51qWiM86SQjBzybrmPhEkHsVopaYTmhpHodmUTVv",
  "key7": "5c92n3A6dW4zzZ11JfC6LxqSwJuRVtGvf4uQUzXXTxmPQ8jhQmYp5bSRRb5hutKyhzduJYGz6bLNrZDWva9TG4i8",
  "key8": "2ahywsVMXtfKCvmPJfAG4do5gigdP5Z12kEJBofNFs4XQmu6QB2V4butifn4mX6UveU9em56o66gBZHDkk2qxxR4",
  "key9": "4RW2oRk9NfNB3W2icZPNV1jjL2snnq8fVgDMGZNJuCR7PkdHyLUZXDk2AFdK6f5pKeRMYniLM1YPyZye4pFpGDkG",
  "key10": "R7ShStaaxgWRrF1htNigtTV7CzkQyXfkEbB3JGCJ7wSYDxGos9jESfFHNNTH24ZsXDe2xCfmNq2VL8brEKaYsJ7",
  "key11": "4f6K55X86wEqYPthkbHf6nXCX8RdRt7Z4jWMjNXsPZtN9EDi3AoaC267d97ts9TRYPE2jMawwo9aGyXodcFbVm7f",
  "key12": "5hFaqrJCK4ucs966aAjLJwGKxjH7mLG3pMqioBnm12F2KXicJ1XGsgk1roVkitqZyjqVd6osumCytAwKJrMtWow4",
  "key13": "9GPEGfurUWDMycf2A8B4twTg5Fe8y2ocNdhxXGEHA8mhGfvmDvXEZfF3U1Nj7rHAncxDWSYoatgHE1vojpaL4XY",
  "key14": "5hEYK9RN1H3nxVY3ucK2MSLqZbhqP3yiuGr5yUQgAvGMuyUV31Ljx5exBtcmWjUTGZvUr35m1PqKqe2CK6R6jBSK",
  "key15": "4AAvBSgnsiiL6krenfBF6g3YegueNR7f9U55L3puWAwbJP9YsRw51Xd3RUf2qTBa4p8LLrr6xYGnN9ihfCiHEHhG",
  "key16": "4tz7ad7v1qGbiAEm36DApnZhQi5j8taqMjuasXErtdccypw842gdB8Rb8Z4FkFjaoV2o3C7NEWJG373ZT75H4MRh",
  "key17": "371yg2yo44ALvJAZyR2fBQXskLxRTR4ZHNGD9474f7efA63X2SyGX7yw9srwjLHurfHkProM3sCqHD1F4oaLXH1Y",
  "key18": "AKXKcLVGLqj8g9n4NxztFS4eqEGxRzWeLKcJpwqgcGi8zuxJK5Ppepb2ctvBFkZ5fNWQhQmPjb7rP2fyFjX7siQ",
  "key19": "56bprLZ4uB49WHj4kFCijMnbKKUzG2AReypLY8Gge7vpeEGnLqtkKsMrH5GuRJRTV6xTsAYo574anXfCqnr4qCqD",
  "key20": "4HYM8PbHZaWoQmQrEmRHBXvZnFqVUd9cNPS3FuMFmPebL1LsQs9T8rq5cvvvCYU66wLBM5dqP1X68ZUXjDqxC88K",
  "key21": "3eXtVSZQSJpYVi4a7WqKzkW5Lk85hmimAsbaGAoF55VcgnS9oResDsE4ERSHAxBnJiHCJsce8xRotXUwd3NxRJmi",
  "key22": "66fh7qidbfjqKbBcQTpMrK25SbFVJwB4R9r8tSH9ZrAqFUybaY67iGjPdZmWjDd2hD8xnJN2oKXcDtMGuQE4sLRd",
  "key23": "2VTzD4BvyGSreqULZk8SRfUJZqonAjDsvywgnAF55g9HJQb7TK33E19Xr5s7nWwNFbfd3q1T57xE5dxKGaLhu7ae",
  "key24": "2aHqk4GshPp9ZRTaWgdZx3914RMsUb7oUQUW5Vw9PxeSVFAMfbxZWQDv2MAVm1bnXgNcpbwf5TCeVftMkeGyhR8a",
  "key25": "3GJT9SoMokSaSt4hpqS598xn3qds6ouoDCzHaRtz598ABhbK5dB13Cu3K3EfY6yhXh99HFXcEHei3qfvkVwrrR69",
  "key26": "7aa1UNcZvVZGwht9we9N8U1PaLcDM1bJN6JFH39z1K1He59FtRcP1hbxAFmLNswT1JoRjqvZyYvooBFosPtuZf7",
  "key27": "2eECGsXLVRba2bxFNUXzq2QVa18Q9vTX7pebgjDPuUkwbRapJDviz3cDDhMaTRkguofwi1v6Qk1DUmVVygxeMR6U",
  "key28": "3BgFJqjKZTUa8XVFecmZMVZBK798xK4fxCRWXtU5dJbjrCW41k9HsMVewkwPN17BK6CqWwo59n57Fv25xmpaiPD5",
  "key29": "Lnpxm1nerQG7bQbAK7YCKpqEm8NZaSD3h9jR9uQvyLSc7ommUbeREnW7W1bHcHh6M8JJP9fgGhbskpPdJT9ZgxV",
  "key30": "3gDRcb9mqUnjvB2CLV4trGoJwPB1fTXb3tWKWEPhd5Wowk1SqLZ4h4oiUU7f4X1KJnPqwDhLszAvEtXNJsEM9yWT",
  "key31": "4p4mCNFRQG665PgXv6HPoZkV4pMqvi9BF1gmKvrtShpqhD5X9mW5ihqMWkwjWSZUf3PBMsvgHcHLgFnvZcidNgj8",
  "key32": "4tc3UxZsb45utq3tZajHn6Dy6eJyn7tfXiXZ6ivkQ1CKhaTzY6RaJiaDxoswoQg7xNLycxdfGAu4R2msoWTBsXzW",
  "key33": "4yUogtDA78nEb2phG34NAtfb4otY5uM2AMdTRpp4kqVYikRgGzEjyKprYNwqzvF886NnNDXEPYpMuaDpvXpXR11Q",
  "key34": "2QyJMgh4FAgj73wdJhx7QUrZgzn3DzGH5fqgTmLcnLhAtx9bsyK6mq1gb95ppoKy9DaJSiC3hAJmWi9pDr4XX4JW",
  "key35": "5RX4ZaoHHg6KRaL9ERWqBSdBUxHu4Zzch4tRb32apzTdV4WZgab8reXPNdjGS29RZ7ZDtuZonwDMBn3zEwk9nLAR",
  "key36": "ZNxsDK33B2X4AGBQpjP8xUJfief5ErS3awVi1xbVBFZVEuKuNRhoE8U3sWWDFVGoktPK7NG6yPfXfQ522cxdGMt",
  "key37": "5WEUKTBok4vWAtnfCTxZeBjm3nvcGZLPqPvnvfqCGwqtCGvdUHRxn5wkR2GM4pn3oRYkoWgo8fpz1ceAf1k7Fyon",
  "key38": "3idkEnU1LhDEMoQdb6ft34gociauwrzqrLwDgTCkWpZUapCV9ybCV8e4TFqCxVfYxX55edHpe8qp1YDUnDAVFFpt",
  "key39": "29gu6WNhkZpq6ER8eNdQz7mLVqc5tiAHFmmfXkQwkquTUwBs3UFz7AZd662HH9MEkqrBSKF753FzF2Lm1tWp2Why",
  "key40": "27fAcLa1gByNVDgBLkXra6UqrmPhyptxhb3n5ykoiQhvRL422TffQcEx2vKiL5VufQLjMCFvvy1yyayMp3LrFVP9",
  "key41": "5FUE4nx7S4W6q7VxBy4TnfXAYyHWDgpNokNCxG2MHeXNbrsdE5Joqh8CWFHx8d1SVqva95CrfoGtiHkdKCUCPjyM",
  "key42": "2fPUz598A9d89qFFXovphP1EkiUDsfjViuUWQTvirT5zw1pRvmyVdRqm7F1xd61broYVmaPQccFqe9ryJT4Mcin1",
  "key43": "5MBrqh8s1Cu9tHMKvBBMv2QoKW9sFY7k4YTkBQhjnccPk4b2rh1EZwCfcTEYkRyxQGzzkZNjLXDFb2bya7cGUZH5"
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
