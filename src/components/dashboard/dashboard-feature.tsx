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
    "3MopVoFqpok9DzJtoRafSge2uAXjf41rnPBgyYts2TsWYeQFWW4EEEkZLw3Yso5iv2DhwSXQ9tDNH3xEX3dnARHY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35DucVJiYQfBDpQC5TPpy5XKYZKdaQghWSfSyA57KugCxg49fC4P43MM36oRDtLki2Y4F2pupjYr8SdQr2hZusF7",
  "key1": "52ekmQvvJdj3mwfYWKutD1Z2Rht11fteJW86LDZj3GN58ayh8EQfg2wKfQzouSimuu2dkW5QMc51oAQxpw282kuR",
  "key2": "3AthsfdiuPox91TtiYDTxj4rEdjkgTykNrA7nWryatmRxzx1t4ZRWLyFYviRxQZC4grx5of5G4YszAjYR7FN6HAs",
  "key3": "46Sin84Zs5mcpwPoWRcchfz6aBqXWLcyxk4GmhLAwKfhcLcXtj6Cben9toqCiSCFwdkJDyxXvyJs2HeYxVwPUTLG",
  "key4": "mjMP2fZCrJH21AJWZQxm6jTftEWeqikCdVtA8ntHg4KgPuKkSE6QLGRdqY3nUgZq8LsQ9K54PKXfgeSasFg2JRN",
  "key5": "3mLYYpSai43Ko4NqLyBduPwb2wRFhdicDfrPWRWvXBCPohKcvBHsG28W2zGYeuRsRTuUAYRBi9CMd3gRVG8nQ4qL",
  "key6": "ipXR8yGQKRikvkJY93AQrFbUYnP9jPVtf5Y1c4hXagEHpH2ey6ZNKQcnmd2iUDePpGihN7UmcpY7eEJVvAWZKSx",
  "key7": "aQ3MYsjAnTQ7dadCgRamtGqPCdrjgUHH7z1ToDGfCdJ5Gb1aHMXh5MifYg9YPNkQ7meuXetQhUTByLTPoy9oDpE",
  "key8": "4tZdDT8mJpdBL4qq7B28AJudq1kChdLkV4LQND4qzmSkRRSaJQaW7bo4riaoWKyrtkaJo7M1VBLZfmwbtnE5SpHB",
  "key9": "3FYFh1SJ4nRSH4eTBGeuAzVw9sut5HKGiHE5XHN5xgDZg88StsW1UoR5K8VBNxMBbXG4c7nMFmdW3uoGTatyc1u5",
  "key10": "5ge1J1U4T4DrUNgJ8r7JVFESTLgMQ1FgLFxRtZvT7mELRsiHmsA4VQLdZMKFAyUsKUWboc4d5d371XGnT4b6VPVB",
  "key11": "48LMpo4wgen5e6pjao9n5Xv75xBP5FERVSeZJyR3oCeYDf1UfE8yeiTmKw89jE9QBAhyE9HaYoMJMD5bVYM7L34a",
  "key12": "2WZB8GEudUExT6FXomuv9KAVWBXf5ev8aSVvU5eF78dqKqmHTjKVv56yBcYHxtkwudBgF3DRxRV91r1NBwhpurwr",
  "key13": "sqFiz7bhADAcrmZbstnxpXfdUxtHJHCupFhJjA5tzMXUNzdcrddggG559zhdwBpquKWVB6UAHDzmubbrBePuq5Z",
  "key14": "29zuDKU6aqMXZi1pay3oN15Xc9uVBarcoewDYHGGAPJgJ88k2CZiCKPoLVttirdjK2x5xPecJ5vJhivbLF7FQiVG",
  "key15": "49MpneDtLDLHqgRc18c9Dwjk4bKUPpfDfWvi2iDbbbAKjci536XS9kNZM863DLSD5rM2Fwzha7XFbCBZ7Dhrj5Z7",
  "key16": "5Tct8gw5VFFd4Z42Jxu8Gto3YkUBpkJc6dQKzdmpsdsWmkHN98kXKyHBaJeG5tbqchxr1awVvss85Q4eBjdgC2ZW",
  "key17": "5knwyroGekte4SJKa5UGcPGi7dATurQziBBqt3Yy9scmEtKa7TgBF88xrpNDCQssbHsKPVRYDWMDKc4CSKZ6ZkqB",
  "key18": "3B8xntPhVkVEfEjMuCPjUgeFu5K6okfKiAQ1aV6eEuWwTNk1jxixsr2oGRnffyvvjkmCcApDKJXjQBYFJV1nTkYW",
  "key19": "4nmRzeW47wqwPd3SyLXXnsbazVrfNcJ5VaUjR69op3vjrBHF9v5T7GQurcXHG2QBitg9Wfc758YzCFQ35NvTeEdU",
  "key20": "3QD6erwvk34M8PYw7Cq1LrzxT1QmZ2LSLozJdnAT8WGHc46cwaDZGQYKV6ZqNazjWJVuYr51onJHZ79U6HHR88mE",
  "key21": "59VtKJhFRJuEn2EDzM3DLvTjpGSYZN7oUnkfzRXv2hFax6HgNCzaPcfwT3neWWWXhHgS2mURGhQ9e7E4jvVw5cXB",
  "key22": "3cCjz9dA84vPLFJTrdMt5FLCyByMAb1D96mbaPHUU8Ypctb8oZqcZ7Rbmif9KAAdtQBEMsAko88d9ERrTQjxv1H3",
  "key23": "5osFjie1zECU5TdUi91ZCgJvFj6MjDuCGq85GUFFs826tzHD2M6kMLBSpN5gbbw1VpZMcb36o5jgBtkpWDpYHdry",
  "key24": "3qURpX3TW8tn6dVByG5Ucmb6waen7k9Xt16BTAyXbxzNdC4yLSNKbtyG6P6to1453swtDhk8TeXiwkAX6fXZkVxC",
  "key25": "26A4v4MqxJRhLptKNXpL2hC24NuVTZs8QCsKNRrHWinFLFiXy9we6yFQtM1KycXRrsirneKnmtrk7KUVjLSPMKMw",
  "key26": "4BZ5qEecQv6sjCu8Qh3FSYkxTg49aoXwaT4wC8rDpSsxHpksSCYcanYkBS3ipbMxjckkZYTN5dPe6HnoANvcSScU",
  "key27": "4EcKGp8cxir2DjY7xiVnptgYAaFxYFUoVBBLb6z542hqaHX9HfUeBx8q98MBEd5Q85ZRrcHwcLzExfhnFBPPFpc3",
  "key28": "58v1D8fZ2J1WMcyP7hwnwjFZVzNaAgS9nyeixBrvQsfCfFxjyRTHs8NNQsAim1njM69U5XZZBXZfxyGPEnHzhwu",
  "key29": "5f4pYtxt3Pj7VRUsorHHV86hVwK7EksE2YV1yVJoLxCi6dGaCTVwjznPbkx4depwwKLx4tNPjYDQNeXZozdAPCe1",
  "key30": "5eTqRPbrbrD3PihmWCg51qPvq19mCwnYXKQUkhiumCb714K1UGWVP1qZJfiLGp4LUXaqrnxR9HT2mG6dKE9a4XFj",
  "key31": "H1QYitrhcys3qzPYayomfzVpLGjqKD9j8rgydgHzJasfmvnso1oqnz1bGHjGq9JztcwLoZaPtPMaUAftUUbCUGe",
  "key32": "39GVFNqVj3BM4HVcyNev9BQnxxAuf4AUN3c9LDuZkWJbEdhh5LWgzihztLFzENDJZ2LeZhskWq2o3Lv44PJtZokg",
  "key33": "2e4FUaPQY9Ucx5xrW2BTb2sx8yiHvLpV6xHb8pAyDRZX4NusfZd1nKxScWzZxS8WVq4uPUUibLmxM46GinkkUNiA",
  "key34": "5dHKpmaHcPhBahbnw8jULh8zsML6b98mogs8Y1vE8W8oUJc5FgSwBjFgiPY3SRKSCDzhV77EQUZLKCX6HLkfho8e"
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
