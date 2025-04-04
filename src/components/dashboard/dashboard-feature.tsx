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
    "2yDcKoa5LNhF1vCc3YMnJESAB8hjqys7LWJVrcjMpwhSUYSEyJDunDnCuafuTnhiCVGsi4qYv9DLtnEwdFLcfiDj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FgpfknFHvByucPgjqvEjShN4T5aeGx8QafTCYmRDWqaLAaS7BcSFsKEX71zUGcs3pYqgvgkM9iAmQ4gbGrZbtb6",
  "key1": "2SoFnSRWhgyKC5hMX1gJkobyQQohcQRLLUTuNsXEzPX6UG6EuTMV2GXZGshJtSrvr1p7zvGx7nEiG9gisQ8KuKNV",
  "key2": "5rgKiQnE48bxdN1y1ko5zjVFFTzjm1btH73evpVfiZoQUoy2w4twz2iC3AmHcBKjuEMgniuCmyoTMbBD16iGW2zR",
  "key3": "5NS1Xzb9k1HH46vAG8AnCZMDW6gcMeggdz4pr9ZNBcsxEvrk9qN21W12PbdgxoManc9Szm233s5HP1g6W3V71S7U",
  "key4": "3j7LyPWS9pWkeYcQQZR1syT3GqLQPye7FNb6c51tSgQaikJhVAAzNeVjfTYd8cXwQk8Ffg9yuRx7hHS6pCF4aeVe",
  "key5": "2sr8NhnbJjHHb6uUgQzp3pePFgfADsz7UQTzWPpYHzyvZ9MZMTs3SfWNTkqZsUDVsQUph1SRUwiP2FzeAdPuNzmT",
  "key6": "dZvZE6zCntP1Aj7MPKQKgRCW7BFRsSnenvfJh79TK8RrxjrW1AGvZSkMyfR7YKbrhE6M4Mhbp6jn6PfK9wkeaBz",
  "key7": "2MNSUzq8VeyXksJ7kC9r88ye1a5qYPwG84GVUvg4KP31Ao8qCTdzVXvwAYwz6cm8RnTg59mz9XgwGWbokehgUnMK",
  "key8": "4ADb3rpUa5LRMFNXnLZxBhked1XHMCMoWCR74wZ48najMy1QR1bnkEQLoaey32mZsfhutb3bkNif3wX1EuUBVyRz",
  "key9": "28yEbVeg9JiccLkSUCy2mxRsjnWR778BEeg9tRfaSJJJrwnQAajZZRu6NSnf1XyuBy2kd4twwf6PxLDbaUm6WH52",
  "key10": "4EJrcszkR4Hrb4vvMJZxFUCNmZHPq6BtyaLSXnQYFkDGGYjvmdDF56pPY3BrS9suGoDtDoKFZCKSsmkLmRPaT78B",
  "key11": "27MuyALhZc4fhf82X4yWamHDjnJ1pBacFtbKC5LLYDn8Cg1vVLUpYUN3wgC6X4EZBeVC2mZiR7FSbCGau3wTeePD",
  "key12": "4TsvhmsrA6xVEwab4L8stfZ6Q2mAhEkZYV6iKWfgdF1QBS6hmgEaxc7t49uy51RoMbZhTi7LkKNEvnpt7e8AHiaR",
  "key13": "h1S8xkTVtaj5ovGNQW4eCx422zq56APK3PVbZLjhRV9uvtGn13hRg4MQSXbSAZ1LdCP43NpqmvDuDCjG4PDU9FN",
  "key14": "2fbvqyuudqG4bZpypbzKhTFKUJdbD626yjA4mhTk2vwRcRNvcBRJinF2RtU7S1QoEUEYCTYgBB2DPEFQdt1hGJLk",
  "key15": "3jtWnyEeqH8cAY2rHKh9p3ancra8YGbrU2oiQnABFyzY8XfZkhCSvgHXbrFE6KRFsj7JvGcBNTQtHtJhBgkdo3Bb",
  "key16": "24NbZE7mWBSv7PNbALe3FpsGiQtPkTkcJ16bRan7UQyWAHZMEFgVopU2fPyc4KYTC72gWMdY2NXxUpKbds6YotwW",
  "key17": "hyipuzaTrLFvSSh919ZXfpsdV2wr8U1wP93Pk52GLnKAvX3DxvwzjephXvyWfmQqcjZoD2arzbk96eJ9Jj527dM",
  "key18": "3JnbuXB2aPSXJ4G4KM88vhEdjG88wduFDa1kNsLRFyquZrgH6K4PDFmhopwGdrTgsyRp4d6BEYN5m48JopbJPqza",
  "key19": "RhpmArFh1M1ifoaVZ7prd65czZyS3fWrqk2XbUvWWCDd46ysWQ2cFrznpHQjUJ2v7esRmvXRfL8HvdeCroLWkrW",
  "key20": "61ooAdxpN5Ttn3ezSqPeBW4uEfkDTKk1C43bLgk2ntjy65xq2QiJB1yZhqJSDkwMmigZhhriY9349sGyC88KjWxq",
  "key21": "4LA3R7CHrriiHiwycX3pXxTUpPPD3wGJvv48sQ3yJUYi15uJzjHimAQuN6EL4dr39JRr98wXZyFp78J1APGXsAHA",
  "key22": "2PwiyxxmAx3J4FSo7qwNZ8ZWzFGEP1MdfWP7VaxhgX7WxUQKmDpQC67bQw56aamX2NV7ueHjuYmSBwtrFtfU1Vcy",
  "key23": "2zGpG2rYRT7UAxqw728ufnKWgmbXkLAUqQUXDAm4VDNsfFrkMpioE9wwVA63XZPy8UzTwB4eBeqP8WhpwVceTjC4",
  "key24": "5brhf4aUYtbC9cfpY6yzoLRKpCbLpp2kDFtHVUpcitAgrSCuuZgwdb2Dk7H3X51e24p2yQCqmLNfEL7pqmAcfM4y",
  "key25": "hdJRxt1tvQAJzKvTFdgTbPCdb5FRhvAZ63bByqmd2LqmiJWKRLR96CQd2bXZktfhssCBrGGbs5bYcw2XPXA428e",
  "key26": "XEVMQ6v3RUdrQjL5H17apSE3k1DH1RSs6LjbCw68fX5EoPVN8WcxwujrHPUEdy8XGUMpkrAs7JxGbvD6DZUDCwQ",
  "key27": "57rxxCCiRYFpiKrgqzfkuedPoa2vLXQRQ2xXKMkzacfko6Xnw9k9vtDTvR8qBmC5LpXULJX5LLYJuLrFkBSGvP1h",
  "key28": "pxsB7bv8so1muKTA3yXeUeRA94wk9azsZLD5wG6LkCVxVu5dQnfBBGVBy5air1WDPMdPLCwsT7TUMiVKKSPDLGA",
  "key29": "46J3d8m47edkDNfnBvQEBeJkUMXyufygYKDEKzvmN82LrS4Bt5Nau2bEPV8r2kCSf53B9hboDcDAB9rEvwQ49ssY",
  "key30": "2B1cMb65djno2E4WtnGDnDuJux4iTmkcArjcfNofGLa8FLopNrQzB88pEmdU2oZfUExYAwt1nKptdWsmtp2X9Dt1",
  "key31": "4gREaUH5AbALTjvnry7c4wgjb7r8Dcb9E923iKgPcwfbomaZysydBAoLAsvEJmgZ3qeuTC7Y1ychgK9RWDyeMrp3",
  "key32": "CGjjPUnupUwK3m2Uir9hPCAW9gVo9jpu3FgiTzjdrUiAuA8kXqpHqZgTZxc6b9Z22UrkodmZtFLSi8SppUnz3JB",
  "key33": "5HZJ8TUfLBYD28Y9SmyZYKrAjRR5w6LT36du1Sbcym5F1EirGVpXEFd5y74AXwwHNurLHpHv9PFTyTFuGtbFFM3N",
  "key34": "3UD2f1E38GhPcro69LDHPWiTzWJ9JJVsL7kgKyPTQeRPNE3q7Hqs4y67h5imsoPvhV4J3R92KdiEqjPTBYPwayki",
  "key35": "4MKEi2bf9qrZgxRrbQHTKMFrw3dgn8EbjXbUuxKd3h17RQR5w6WdM9vS1G36AkdjbidSydhXiktKoENMJdYxKNph",
  "key36": "4UeqgCDF89dz2g23F51AgKVNrrdVDWxcq1psctuckg1U5LTYZdbMEbmjQr23W4RDHeKZgpHg5JyPMrMXhsWy4YBD",
  "key37": "5Cmvsk8hPnmmE8FCAeJ9LsaJf5HzU22GGcBNX57V4Wm5d45dZ62WJutd1F1wD7yrpMMgyhRxhKdxdMoxk6MfYmm1"
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
