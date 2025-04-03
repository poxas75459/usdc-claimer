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
    "4MSWZBjW2nGtx7w8TKoCorzMfa88PgHfyMNPTNPDosHCP4vVoLdwoeu5ryp5ivMqHxjMynRyYXFpqKS4dGtEhYHe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pcFs3sfcTXptFTiurUM96bRiG5GmBT5WuBGAPBXgWn46nSa6sdt4jZ9P57Btt2c2bSkcdvsGvGJG7GSUxHmNcwx",
  "key1": "WnpN2Q9EzAQup2GyVavKuGBfiLF3rdBQxKqvcGUJ7zaCHtGqp7Yq56nT6PbZHzy4bF6QJjfLzPJSBvmndLEkWvJ",
  "key2": "Q9y1UWDd4Uty8sEYoBX3EZW37nUf2TDSZHmGSCaepjfajjz2P9aciCoa1vccfdtw9dMPkAtnvczShZNFfW9DToq",
  "key3": "cbd2y7U3gE5TUS1TVfajy927Rjp1QQ5bT7rjet17jjuDXpRt253niQqNpGUFkqmyT2WQUSSD4vSVtFxfkU9y4Wx",
  "key4": "uVZ2UNje5C3Kas3uWE2JbvUFJhKNQav2kSZUQmuSkZ4CeqtkYV2RUtEtFZB2vhYj1g7vPRdVQtMAiY6ubxv2mCZ",
  "key5": "3ZF4EcNu8Ed2Vcfdc6cPJ1ZekrbE3DQFN1NCDdK1Y5Yczkt1fYRuBfDq88c48XMRDLvkW3Cp9sLcpD3cUgn5qs3o",
  "key6": "5sv1HsbwEjd2vu5cK3xvxG32TRaA34EdAUdVUxJJ5aBNkepaKpU7BL5qE8sKD8W7TrjkPfpikYaTsMdhfsP6xM8y",
  "key7": "2DCHuEfWXUvoJikKjpmSePVWD2pCTFYuBprp2VmE5fXF9chd5Ck3knvDC36r7VNPeCUhsiGLeHqVePm9ihtYxTVt",
  "key8": "4VvC3g6oksxSYVff5fBX7R6cEP6o6pYcQf3TonTxDgYijz2cWxN3SQsB8XrrchgSE4RGsHyy6GxGp5DGg23MeByL",
  "key9": "8rWKffzqnXWiMixoCwpaCtbfniyJKbYdQTanATebAZ8c8bRWkNuRgDJqhiyXZfkKNXhd1g4i2GuSHHd68fdDqht",
  "key10": "4Kno2boABwXjesyZxHHbptrbah2hbyMwZ2NNsEMf8LVw2n5iStt3ddxLXw3t82ry4nTmtXKcJRXGtyQZRQ3E1NWM",
  "key11": "3tzdczzGeTq2yXMETAADLvUrWDm17PnDz8G5tJChB3QcAkBa7vospTRhz2qE4JuqncbNoSR7huYCdhuvUjMGxATV",
  "key12": "2gLrjrpCutEKp39HL8zeNSUnETC9CUpRgFdpny5NYiEYYNw2gNVoVmZoJbzfAFsmcg8fXoHEC46UkVXCPR23j2KE",
  "key13": "3yWW6GhjwRWe1bViAitXT7cb5GhyVNgNJn3koKpagCRBHLNs8i5XKosCVXzxTx1aK1efQeTmsKskMn76at9QnjJ9",
  "key14": "3cx5AXSMgBitxbZuqDUuzhX9xtHa9BPAiqrJVPvkHsbqUzfpKmkYHFgkf1QyT9U2btq271h2iUAwrfEttGxyFjUC",
  "key15": "35ZhCg1U78wX7vQRdnTZXE2yCS5GZCC8r9Tp2rBEndaMbwutyukvpjhXnmYVNEuEyYG3t6Vft9Mth2WoDW5BpkAm",
  "key16": "duCUM7z51WLKfXU9Ffe3EG5enL2tu7MSoUh5yerc5farubXXkHAo7aH7YBchAPxdVnjKsbVKP1HXkFbVqDj18EV",
  "key17": "AXe6y6fTah2s3mBHouTmoTHPCCrE1JrVs4ZtsTqKHskobQ4fd1xtpXaTbQEsr34WJbbt3uecJ4Xe2KBPdqXRup2",
  "key18": "52J3G6KPnudfyyBgsWywCXU2NF8gL7NxJvxuQfKHYZdHEViXokUheVYjEhzWhPkqFBDvmqHSCwLqmMXSrLWbttrL",
  "key19": "5kVQPkC1QS9stdtQGcsmzDnvapg333EG621mWJY57od8wS3U9aBgiSnBconbjvQnmLWi7fwr4WyhPkV9KbfJTpem",
  "key20": "55u314tDvDVNRz6KfSpaWRJnq4eghmWSZMHRzMiBStDNCR7JLSgouMGVV7SexqX7x6Ji29s9g4bSSNpzF8uVg6fP",
  "key21": "EmHj3mkJtT7WcBStLKtrHXxca23tLQGJmo9HSUpw2ckvVXPNjqzvPXFRHkeRy9FGqSti3NvLcqTdxwS6pYXvqXX",
  "key22": "47pY1kLSdctGML7SAy9wYchibDPETAjfJn9AubQn547UWFD6sq6HKFj8vFRR2ZSpemZGQ7vRDUXgjACY2TiwfV6G",
  "key23": "3Vwa2WDLJ5g3rNkdoTr7AYFWhMuAiHuNucdEwBwyu5n3HaJPZ2D1sxRkJJpky4rnfPev9yT8AgGQRhdWif9fSerS",
  "key24": "pgonK4fR9fVoayLvrH5XpExRxRLZtCFmpvqkargXDjov86w6tzUaxKVfbRkZsaizWTSb8zxGDQRDtr748Ptmi3y",
  "key25": "ZEcEAWJzyFGYWtC6cfyMPirWKecEWqjxTc2EJtdy4G5jcNA7SmZ3R6UDwLxFPsXe3szfrS4yKWjiMz3vwG8QGuj",
  "key26": "4fN6qSJeCd7YGoKPHkg2ATLc94TGthQG2koC5VDYMpNWX2JdYQpdDn2ZBGhVjDaMiai8kUtKaucg2ACnFn1jKqwz",
  "key27": "3TDiGEnPw8KtMoeg56SYU91n3htBYNXTY6riRQC2xGj6U6LpepiJ2v1spQu3J8E3BuQrVW75zCn2iDAkZTm9cvfU",
  "key28": "aSbQmjup6T4uen4NcXestJjyBPFtVxXkygYeSZzHf2GWt2gJGrBxZ2yHR95ZLXZ9NNRTdfTj5zYB1HTBDmzJfTz",
  "key29": "3SAeethzA6xJ1rX1WeBK6sxHbRT4cgDvN5qLfsaRo6ngqvqf53tfEWbgq4A6zaLrBqKggnUNpPaV6owhDr2KiXjg",
  "key30": "5biZ85BKavmMk5XJ4Y6HD8WsDgqhapcUYzg7fjFiBjw6xC82JbXPZHusWvwLjPpsTY4qzjNp4WuEgaQpitDjdis8",
  "key31": "5pFk3Neg7qKgimtt4UdDNj5cFNcpGYU8ccT35XNKybGovJYKWb4yJjvvgt2v7LDa4WFmFpZi84Ub1KpH8eTve4Bx",
  "key32": "4jdTUJVwRz5Du4PfmzjcCJoV1PcDJVhV4L5MWZp7FTm2d4Nrnv2SzhDATKoQhfwVtW93Qv7WYTCcY1Jyb8baJon7"
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
