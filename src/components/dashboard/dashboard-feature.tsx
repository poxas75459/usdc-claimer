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
    "5WDx4UUvDWBeB35D2dRPFDnv7vcCocYcpgH25wDuxB35hFg2PwXyNSPUAHrtW4kMmLbwHMdDMDtHZCA1XvpV3b9H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4icJxg8DSATmfY8gfnZk1QUzewtuqVUyTEae8XHZxWphxtSKiAYpnqD4isXeVeFJXhUQ3yg16YvoeaUzkfhJDrTm",
  "key1": "4bKkvPM2HXzqnxp8QQ22pMguZsAuZ4GxrrGqhREPZgLzFiVb4rgBgpu2gmKDJC4UpJwkvryrTynKLDUrkRGxnjxT",
  "key2": "3bKUeyJRhMXfveSPHepJrG2dZ4P3AxGTPj9EAkB3dkB6aPT6ATWdRrwRmc5yYG5zUSUaz6LB1aQyGZGWbzPDBKKc",
  "key3": "5DqCsPC6GpMPr2XJXdpXoC9un6CvC3V4DBA1GHiQWkdGsUZPNjn2urD6o4dEypba3qHTtVXHWVH7VNMdQrXG6gHa",
  "key4": "AYRak1Xtg2uAiCUxk6HXhEFKNh5t4RywYBAXjtWhRzsxTjPZtaCYmgijXoThH6qEiPmZsmiVn3KhbBsovS8MidH",
  "key5": "2FsFgVmrHU5W5eeNqwZHfqiEm6MwkHj9QWu44qgZfZC1LHw8gZ51zxQTUWrW1iFC2dV5fMTBzebEsRQkS4AYrPm2",
  "key6": "2U3mCuZMGx3XX7NQeRLNWq3njrm66F2XxAHrkHpKU111fgJZAEcWse8tRqcLt7oorwvGb4K75o7CGnJ6d99ouFF8",
  "key7": "2Sbh6Rn1ESRyQmSjUCkEFfv8DFwG231GVa2rawQsDQnscsY4dAixAKXkwTCrLiW7qUuYcKTo6nUTRH2vWdUgJRFr",
  "key8": "5biNKrWXW42UNysusiKTZmSAcTZ1DhAVSxAcdhXGHbpK77fXQa9k1NCxhkKbicZwRJuydrRxtx7igDmn1AvKu2rA",
  "key9": "3yQv4K4KYJup6EZXfSDAdFgwr32SHnLaWKmguiGjZ5SsM8Y46mqPM8mzgiRNZeiXVvJpECkvX9vqDCiauUihtbsn",
  "key10": "5U6XESQnHiVYjjfFVKeND4ExtYNzjKxibw351EFkjcDLizDTheLJL1mRx3Ug15BmwvVm7wSycMJGXe47DN2foa7Z",
  "key11": "czyF8JjxtxFmtoQoGwjcEKDsB9a8Kf3h6QduC3hz4Xqmq7Ahis8GYmBQFWNM8U1cKCFh3CwjRNHBjpb7KG7tRbC",
  "key12": "5B8F47y3FdojEUfwctATbrBavVAHGtUc27VaYk9PRbDSCKEzVnJ1WqcSzgqUbdbaMhM3qrnzjjbnq5QecAuMWYhG",
  "key13": "2Rnchthh3VbWqLicZxHc34USWkfPoGRKMvPRJpHdHfiu2DvGie8mbmMQJ8iEXHN6whHNtBHqXsF49h2FVWei33hu",
  "key14": "2fAENGzAXfgrM58CC1ef2Vrbdaxu8Z9nbjxksM77BevWBz28zdRcpDZD86Gd8Bxqw3FxKEPfb8USouRL9hM5HSX3",
  "key15": "62HVNFobsmE8MWuuSTtcVhu38tL6Q6vBs12APCgWxhQZvBzebqUtWKHvJ7gDRzBMgJ3DWyuKMUqV8nigXu7EagmF",
  "key16": "2Stimey3hfh6XX7KeH9MgtrqGYZojvmKhYbCFHJJFp5CUehyJrt834BAsQUXbrbQQhxA1A6eUQeYVRJtQ2Qv2Jm8",
  "key17": "4V9Q1xL7t4gRPsb7WhiSVfL9DnJuicPpPoaoTCJiB99WWsCZUpRjHzCFGqrc9gqNW1UUAP5QPce1jYmmXViz7JMb",
  "key18": "62XajFi3WAwvhzHUNisTSZXu7zYQDwrjweTjPUCKorgbH28kyMS3mHHW9rhv5VLK5PFGPcNWgertfcnpFYYiC6Nb",
  "key19": "4uB5DkSdT7YhPSKKPwcbWYpLofoYFiACyLM4xrnmBeg9it1m4HC1WFFc32BQ9sHXy6EtPf1sZ4tjJvMjwXUVpob",
  "key20": "3DqV1id8ArdXoTtFMbMSxxoYTBHWSEbhiQibojG1a5LpcBaDGVvzHWpc9AQqkyYvtRDrTt75jzeFLZ4gYjmV9hUu",
  "key21": "3iU4Ea8tc21rUq9HyaUSSfAWnRuTvXgq7aZ1w6GA7mfJ385rUrQAwW4FJqPVzDiyipiizxtdjUeGBnByV5g8XEqM",
  "key22": "3MPUki8XYE1q35Mb6D9Ad7nuYBGCpv73tka57wMQK9P77KsgTr2NY5HTVXkJ7VnSVUdyYYhpo7toSC3JiXVT9pVj",
  "key23": "5nSmjNCoXVuAj7VSFuU4Dar5ym24puuCsggVMaKiqBZmdkYCjubveqJTQ9kbpohTbzJnoyBHhZe1od7Xv8SCwXAa",
  "key24": "3qd8gFFqXzJFRQnacjdLsxDodSNBmXkvE6VALWoBgGjftccZ4HNmk2HPX4Fb8TAHr7sJG7XPyFBMH5VJduoxswTR",
  "key25": "4FnxguYsVDP1UE9e5HtpHixEuyvBEPRnDdiALd69q1UwLF7C1NMpkhqWBNy816GBrN81WAf8a8yVDbDyfijccx9b",
  "key26": "3QbiP8166qPpkZqQ87T1sePphLkuRQvVpKTexTWCjRQFhNvrRtmGev5LrqA8Qncv6xHCXAWNfJuRzKTBfAMygJVh",
  "key27": "614cBsVAWtsy1dpb4YN6X4rknYmAcW2XEeHieqHUnJv7kh8erM9zuqDVTALwDtGxskLTxWUUmx4fovMmyt4pK8wV",
  "key28": "483XCoMj4K3gpffLSw4h5K6VFNvikpvbmVncpMUf7ePjr67wtc1xBWVxB4rSsNT2PsmFPcmdBFzayo5EH3eNkmnD",
  "key29": "2tzZUvzn5yoiyXUfbtB4SiC1vSv53WdPQERwCx4ARoAE1wTBVfezi3Y2n7YHjSq8Ghtb62NcT1KtrQqfckJdbHXu",
  "key30": "2mfQhZYuw95AxNxwKdstRgrrYgqUYQa1XNkRjitvGgU9PwfSxY1ycoGfSMRGvdPtwXra1NRwiPqwtSmaqKaWXQhX",
  "key31": "5oQAgkz3Q4J5AcKFXrcGs2bHeZu6s4qjvBgaZ5sLezSWGX3nyNtxkarDKs6jA4EXAoDqyxsWBJCZe6Tqv9vWa9dZ",
  "key32": "33Kk11G3hZ9jtmHtFdg31AqswLfZoqy59no6RmReoX6b3MaCCB1s5DGfq51tcnkaCFtdpdQ8TsSQE6dWyV549ppq"
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
