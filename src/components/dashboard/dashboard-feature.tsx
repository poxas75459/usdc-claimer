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
    "5QiB5DSdeV46E5Tyt5hNX9mRT8KVBTDvpa1hy2afWNohX5ZNtdQJPQdtiSgx4puco2dALHLdBugT4ZtfU1C2NNsu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SiKMjYYCayb61fA8r8PFp8kfiQKhGxzAdVABm95YuerwVHsuApBQkNvz38bxM2KybpgJyPu9QNhgnYKuvq5WcCS",
  "key1": "45BJyxFayxQkTmja9MhcTTmtakYrUR1DWXcvvvYPAqZ3GDJSVnEVCZQGZD5nUgQs1VHvk3iB5ZU5VfBbiYNxct97",
  "key2": "57Ph2e1UTgWx8GQvKQdmgtvStJ2DdS48266rjgviAbrx9zUdUKdvm9xwCuowEViLnR4VR4QjoBpaXxYDpiNRpC9X",
  "key3": "4GMnxW15vLfbNm5DgaDnodpGchoUJiXxuDfvNzcR18kjN5JoTiB2ybcjztkKgQCJkZ63E9YpDoi8mwokqe4ccmHB",
  "key4": "P1vXjr9xkw9UfkvsPM3ywynnbQ2Mh7ShWqfxpqH8fdespNGzW2iTQNfvn1q5Vjbmi8rTJY4AkMiZDLP6xwLdMC6",
  "key5": "2RwAWLwp416duUtn5HRW3jLa9zYYMP1zhnG3nWCkPNpcLzZPmMfwpx4jkSspFoHUajWUaZKCg2RSXC8jkgnNvWGd",
  "key6": "4GSfUeUdaUQmgSLuM9UGXu7qfkrDqf57udVAExMeERAJvF2erp6yTJPS2XMSh8GSLKnitwNDxzoQTfE1Hnt7gSYB",
  "key7": "3a1iiGMvJvyHJCuNiPsB7N6hqMTmcB16aoaCF8CwAoQDYHq4u7ymBzCyZikoxm39PYWR9p164KwhE47kwsRAhSjM",
  "key8": "2jMHfTtv1ZMAbzMuedEFfpgiWqs2eCQbhtfdWa5BoXNXs6o66prKBkKUvm1DoNikWgwiLsh4iV1WYRhcy6YqNxDG",
  "key9": "5ZwzwqdujuML4We8zxBmEpqDtCCBJuzSc4PdKTZRgk4Tg5yZaHt1qiHW5bwzMfKsiYdNDRbuKwX4HK9RcA9SS7NK",
  "key10": "3CebQMxwuEf7276Uxy77cBBP1XahkBnbKH41jE2SXm4mbhZYJJqDSEUgpBuaT9QvSR5AswoQcidjnioFHr5YQBKt",
  "key11": "3KUNqyNMuQz8tqBZvZKQeqto5qvgkp5UGcUbQxQF7y3WhC3VUDNiJtPnhHKj6oXcLAYTXh8hg8321SFvRa7LAvck",
  "key12": "3ksbQpULaokiePizmPhetnFeDuwJvQNh1HuCztFkTqottUrxzs5cbKZg5MoyeVkzXzEBjH6wg3bJP8JGKDuecgJm",
  "key13": "3ve6ACexgghPGtN3AP4QC9JrBUAPRumJwwUpGPeS4ENqvFWB3o9atAyxV5MJZYCjfVzZQvdn8hmzNjpRiN4Q2cME",
  "key14": "57sc1yEktKeD3MjpMHxfJrCW9Covkz3FTobPKCHd348GxUdeySv43HJXTk1QeiFXjmqHD6NMLhPMcjaKUgtN6VV8",
  "key15": "1EW2XrRvjLQNbYk6QXZKAVQiWTqn3w95QcU4UAhiru5Se8dQvNFtgzW3QcqXe9RePVVoLZmPnyWk6Mttp52tB3d",
  "key16": "5LrQUFvh7wgn1HzLJTAnaokQpubnpc8G3H8dkvrjDp5eGvcjfoYARsWFuzAgtmDXnQVa4FLc2rhjm18fpYyPnb6x",
  "key17": "5Tz3xuAcVDZEE6LRn1uedNweKEPGkrYgXZJPt4yL8yUKoUMNSB6nMELbH4MyjY4LQP9TPSxZmRR9xbjjPjYDBDZw",
  "key18": "3hgF7osYAMT2kLsVxZPmF6pxHcx3z1z3CLjYC5ugHNdMhDGF5SSS1jhw6YaFaqpxv1vBnrJ4TkH864RAUB9PFQiW",
  "key19": "oURpsDqb2SNaohwUnssFiqo64DommgCFNZHg88Sne4nh3nMAYfPxDfoHm4dVzTHMS16g9kULDs5t6HU48BEqvxr",
  "key20": "dbBSU4CcwbVXvjuqEgDFAJkAy7nojeiztLZxSatvsJcsAarCmyyiQrPpoR7QS6un7cZfcPgejBUQngzKX6NBJUh",
  "key21": "fcpxYLYcBrtoAJmatDqUgLMi3LSW22Tqs91rUBb6Pvvdu1A1FtmkPMuYfPNBN3JZ1DpTCATt9RMV9UdZx8w8JeT",
  "key22": "2PX5Lptqw3BpzMeTW6sPEXMb1MPovCfTjFPGza5aShhzjkATF66xEaMUeB2RQChiK75TPmFU42C7Xg3xx39GvsTA",
  "key23": "s4fSJbC9ozUdtwtR7ZyGUtBU6dWDY3sjKYL9imodGqZBP1ZcWNdsqGKCmDAZWz4VnVcRWFTpXchPpSPqikZ7rMi",
  "key24": "38wZjN4qX87BTePC5t6p5fxpr2f9SHBafGaVZaZo4F27eyR59cGuiFKc2zdeMn2Qi7yA2EmU7K83pUCvyeDciUFK",
  "key25": "CF5Ygt5XEcUXMjcm9DEM22gtc73Ce7svpM5snU341JjCbmjry6PBgpzqyioPFKNzAmySJ7hBaJTsmt3stdVmNYy",
  "key26": "4pwF4ksrgUhHikB1UiBfdoLWs113fovNi9F7Ln5cmszMKYt6EEZBY1wrZmSNSfGeTyBrWuZYdMq7HDmqLmTVVhmF",
  "key27": "2y6fv1BcZjeiAZsfSDMv8c4X5kc2s6t3ZBeAfsmReRsvYx2qNd3kDCTQVNaJVt2zYiqhZr4VtFYQSqhBbC4jecqz",
  "key28": "4wMD3NHaBvUbiBGwRjKsJFHC1kRu2iCgCaQ92R4gLVHPgWD1rGPgoKboeirpZHpFZRW2kKNnGmb3zZN3Y6m5QBLB",
  "key29": "25sRXcrxQ2cfdtfzqhLvyupeiBRz8knv7oCh3TrC5fpgfE3yfYp8HwGUNVi6KXshrz1bLtDxxtv3Pwsbr4AuHGXG",
  "key30": "4rWUu76UbVaNBxCGihCu4qfrbrC6M1jtcVMSvSnhB2jyqyjkoBxS72hW3LFDb4Rn5EXRjRpRSdCEFeJBLwz2Maio"
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
