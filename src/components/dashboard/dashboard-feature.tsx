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
    "4nnXQsbkRcVZHoC4R4ZHqwE9H7oQAM4c5SbXUTgxXUBKTvwJAXPdyMV9ezq8DCtiLtoxwHJ8xf4bDBjCvjrxcyqv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KvqUgSidFiDzbJ1QLyCB1oQwuB8TeDHF5H9LJJ5f3K6Y8DxVrhe5njLoL6QAgQposytHiBURfoREWAREwBo6Pxz",
  "key1": "D6ugxJpAhJpP2HonVLY7XkVPr4A5Bot9DX3cm74wN95GRZAn1XjUvE47uPTXLuJAPCLcihgC5nVHq1Cdi2d32KL",
  "key2": "2GSBbYuKW8TzyTkkL5BaqWf3VtE5xdKPzYXeKupuPqGgCqi5sKhE7WcwRwGNtpEEWbxTdK1V35cEAvFvtjwtGhwy",
  "key3": "5HwWbbWyTreETbX1fmMMz6L1dzts4KHeeVG8FyB3sv84jP3MEhFfE4UZjzsUqkMeS7etNRcWJJEK1eidoPHBxshz",
  "key4": "4FtttJrbb8vUWTw8Jq6g9JuT4g8gahhMAPnuFN84SA2RAK26ZK5XtGhV9ZcLhcY6EhDp4gTPawNTvWBrdCjprzDi",
  "key5": "3LfJLLgqyG1BF4bsi4ERaKCoTnCeWKirdNh21S8GeSHs2AxYP9MevxBzJ56cFnPNEzgqeLd8C2LHK1SN82JhmC5G",
  "key6": "54LJEf23T7h8Rf5tzwhBeKpCgVWJSVst1w7MbL3La2yBZVJQc1QsqSpAJg2ajDzKAvutYg7UEhBzYnQb2vekuPAP",
  "key7": "2RFjnygvp1ju75eJarc6wrSrhWh8Y84Fk7dL5aUxQG3GhwGJWRTLPYCbyPREKU3m3Y638SgFt6KBVt6AT1u1fHuU",
  "key8": "YGhnfxsgJjTCp2LY1cJuLSPMH9iEc33iUgWtg3ZHDBQ9vCtvQP228mNNiEsENRQbAEm2iizkwLztVfZnYv9jx9n",
  "key9": "4Tx4zcgDwSJTW2bav6MKpJee6e9V6EYmMYY5PMcvKLcgxfhgXJJGNTQWVrmSeKr947nyH2EUUxUZmajrEWgFL8o4",
  "key10": "4rixsRfvsdSnT4u5PDf5XX2DBjpCaUjG6NCjXCygy7GqeEoHKCVuzD4s6QLWxpjL5LdfnkNi2hrPzSUVTpr7QqW1",
  "key11": "5GSTfY7xykfpDwyocxM28sLfbsGnxTmswrn7wb3bsGrsZRY1Zx4XxZGTM3ayCfhs7CE3h1KjeM8acP7qhRptuTS7",
  "key12": "3vujeBAXT4yABFDaZabtHTAowhFcAHuGLtfrSKDwM1JThJ9UJbAcs7HUJrGA7wyBAXQxiVpbcU4T4WcUib1BhuBD",
  "key13": "3Scd4PYaoTKHLeQZd4XchkJZwCrULfunTPYSwzDY1LW5PYt3sHYX3DaRK6t5M1ooCWYemC7xjrMdKcaRP1dL36cP",
  "key14": "5WLPm2cquhgYui8apQkYaktkc5N1uwBNyCWW8rEs9zkVQU7bkfqVGpYEUhguvdnNhbc17US7x6DY3EUUzuRpr1jr",
  "key15": "5wFBf4XB7oPEYcfsg36PvS4YJ6dy9YaHR6BVmNwW89Xzo8dwaTM5ZWfa1tRxwqKrLjcjdSGM8R3gEQFHACJCMPHp",
  "key16": "5oUaMww9HCLNMXfa3DhqJfCDSEJ8rsLHVSVpW8pEAtjJrqHL1sf39jVx1kobufYSRXkV12s8nuoHgVjRaPwnQtcw",
  "key17": "5kuj2Xt8Ayu7TFHg79wgY2fqz1F2Jhq3wWeRX343SCqHpPRW9tra1xJSnqL5tA2STnv93C8ivjM1e7p1FaN2WACL",
  "key18": "4QNday4Px92B7EdVeyAFKBXbNqUppRHXZktYiDMSWZxtnAhapuLrHSGHV5Ai7EBy2YLy4iePo5h1edEVkmg13fj7",
  "key19": "2qcQfCfPFjnsAjm4EeD647HvQW3A7iGuuLa6K8vspoXT2JBUF5373k8fcW6J4P48zZVsjPSjHivcL6UNFfG8eQu9",
  "key20": "3PvBnRXrWCGNV883C16pWC2wEBFnxWwnCC3EPHvn2BNWyiVC3xThghejjXCddLnTC4gyf6PmVuqZe3zxPEWdJdUv",
  "key21": "34cHm1tZ5oZc7yJEq3qs1XZ1Ub5g7wV39iJYGq6y1bqBfm4ZMy5PMAch5XsGeNf7rCRecLWr7kjJJ7ybQuBPaQx",
  "key22": "TTSTC4bpxCZPVkvCSWRtVnrqmkgZ5xHhPxJurgNDFVtNJApAGtDwcpbX6yhCkAupxoZUBUPMCsMefvGWceDFKfW",
  "key23": "5AkrpR56wi88gZ8rzmTpeEhHhP1d71eitZJU7ZYVkZRXKTpG6jxPgnRQsXPPX1quZdHSGoup29ZVaEn6AkZ1mayD",
  "key24": "nagJjRbNamFPpXPhqseKNxS4DJVUhwS8kj5h2T9XALch4BHXSTgqDTmJeap5ktj1u8thNtBUcrmn7Dmq5dvsLAQ",
  "key25": "4edmTaqgrE963aZ5psm7yMKFfs79suKYpUSgzdzXGS5YAsgeufhVMDY4ggDheRoZVYoLAo7D1fNBt4QsPnG7s1iD",
  "key26": "3eTNRtJFaXYb9gGp4yiYVJNH2y6aCzBprFWqtXThxa85W4gQKjhQ8rT8zQG7Z4akkVdnZMGzU9ihbz9qeouEZUQK",
  "key27": "4t37YppdhYugRfeRpHJDrzX295gv8SavjPDtqTFyVxJqqsZjC61cH3o43ZqbzkQpaYG4WQcYdvmpvZuc27mDZoRQ"
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
