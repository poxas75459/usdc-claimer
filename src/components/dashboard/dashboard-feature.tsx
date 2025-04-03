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
    "eMTk5JYUNnGCWMTS3X2fcsy7jorcNs4tTL6FzZELEgkJkkbNvUniweRSH6xQgmNZaYjgUByzAEwAbiMh7QsRXgX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "523wSAagDrpsSHh8jWKZcydCG7KmzZ3n6CerGFQLrYgfTyAz2rGKRU5mxU3ST2gMbF4CV8ijWDaWwhPHAqPqamtQ",
  "key1": "3m1Tvdt8KDsVxfzfyV73Cie4GRVfjWbVAM65maHrrqaFjHP7azenZ1NMXbQ8DMMdChDB4S7PmmrchBCaYJ8aWnSW",
  "key2": "4BJ1tmmC1GHgHuYyLMzpKfpKrEK7XnXkav6qRPkFbdog9igcGk7hy9PrPNQHAnWPzefR8AqjoumaUGHBDS4A6Ein",
  "key3": "qA81cGZ1aNB3P3QC7CpqD4DQez1nNnFvpYNDiMRPnZVwRWMdj8fXRQwe8MrBuxqCJn8EAyfWA3Bih9zxmBuzSwR",
  "key4": "2pXeZDPDKUFaFzgFjZk6b6fEgB25SeC2Cq8yrqsquKZCKXWm3hif2UunopbR2DMt9MGQ4q3JMocAQhZoFMj6kYoT",
  "key5": "3yP94nSsbmpgMM8fAkUUXm6YB1aMwBUp33bT9DriC3Upc7Xze7kirDg1sA5ZdXg4QWyU4DfeqKGpM9q6JNMdxcmP",
  "key6": "Mw3v8Z1GLofkiAEWPfspygPCxrTvGQipmANAbme3FQRnhy3ZwxyxZpwF6rdC7Qu5i3a9LmuqVBr1CWiBqADK8hU",
  "key7": "RzkbuxXvdcpYKTqx53VTGV4dQzayaJPTnGwLBYygxo1Y8EyXtdmMxtnqy4imYvKjpuFGvtxaRZrQeTCo1kpGR6G",
  "key8": "4juhG123kMUSx5mU2WTi8HnXbB4S77BaR5Mib6mcqFKg6MGFwpqGEUq4brDYXzvrYrLewWEms7bEPtDHWyhrfWm4",
  "key9": "5ybQCG26HL9SqU3Vy2KMxe7MefKHYKuxvRiHyetTLSJNDDNnE5PXSrMmLfGgFLy86Ca9dR8xTPCRtEKTrZFAsmSd",
  "key10": "2zP35psxpquyr3g8JLEvNwpLgJLqcvtFNVWNuneJERq4Jhym3ThY8RrDWV9MLRBndT1XT2AKZVZv3x6PVDwsWdpt",
  "key11": "2j2X9XH3EL3nQfzk8nZtAez5zpMHVjnUGRBmJV88M4PuvAx4Kvi3VLBfVyZYVpJQAywGe1HxwMrDmRrZkiq62B8c",
  "key12": "2e62PYZMG9Eq7VmZVp3bb552jemJionEhmJBJxMVNNshExdHKXgDmCcHHAyUR6aRfjJPBdaudqrhEKqVHd1KGmeh",
  "key13": "2egGgskQidL2ESheqaTPKXgq4YFM92AEDvH42vf5tLPS2ivzxwVMGPaqQg8bJPchHvcrJ2ydrMp88MGJRdzYXE6d",
  "key14": "2PeZCuwHoTFJqZzKMdeDD4pqG1Sgb3CxKMBU9DtR1MKAY6qEj7D98PniAGPBfSy5K1cZCuQJnsSKHvdaKaPouxzU",
  "key15": "2xMj5bR7pe7SqJvMLGggxNbQ6fjzkdncKiEhpoBTjbQUVN1Ezbb2iCNEtA9J6WKnfyKYZkgGP3avoAr73wJNtic5",
  "key16": "RTxrHeK5AEn26MiqyCyojpW68BbouY9nAvPsxfveEN3VctG1tRPpqAX9t3CPQMn7w4xWdPZJYKUZEPFWDGXrf27",
  "key17": "4ianzv7hGMRMm3sJcTaqRVdDVX59PJKajKFxTrygUCWCxbHZGfxmutT5PCF13eGuaiFUUgQPSGHVN9YbEXSFgwgz",
  "key18": "3m2ukym7ESFruAZJgV1nLetcwXiKPPhUs3QMxXp7RK2ighUjdtbXPcgDin68yJFMpDdnSSYn7AXktMC6ZuUTu7dA",
  "key19": "4d97dJrwfngFKgYBJs3yaHhMmV9u8kRwThiYNmSfUw4BAp8CposzUox8Ap2Ndd49hrsi61CdeNx4kMHaoNh7i8iX",
  "key20": "evNCv6nTHekxoHewZDS7T874FaM7Hd5Tbb9Tir15CSEWKLhhefXFwyjW4XWXvE3ifzDrDPigCm7RDjr9evs4NE3",
  "key21": "efdNGgtSvw11h1GU7yA6VUok9m1y7n4TNgJxzNpxuCcG9oyRAizCEogk6kTu94mMcCQhPvPuH7m5uR1s3YRtZAH",
  "key22": "2ahpA8eWw8RunaoFVb3iFDpoupRttC1iTf94QqTEnVrY4tHyz2ak2jantxruXuKQDJs6RXD6Fq624issjb98Z1Nc",
  "key23": "LZThVHFrRpoM6kK3hACkgreAcpLU5X1ydkEcnKZhHJx1sRBdohQBsb2oTpNRkHo6UsHA8TyVzUnaZotdDU9Vd9K",
  "key24": "5FfeRwY7vTjkc9Rq9RAsnKS35tDHT9BaCmoaVYe1Jufw9B4bKwBFkeSQGv7dwKsrS4uLt25ZUXZ55sFKZQrPQawY",
  "key25": "3ahUBoDNxh3hU9ngKjiPWiWRsrfbADTK8HRYGXNPFzLbNP98PMAb7f1CcRnk3ZkJjEB8VTjKhnoAdZNkaxSatC2q",
  "key26": "3V7X7r49yJft2RG6dZR9E5KPHYTeu3oToBkzmV9rFDiNtso5ZEMgKWxnGCVYuDJ9HUa1sVNwV47raeWBebqZJqyW",
  "key27": "3iLZSvjtcSrfDhQEmt7yktduv31sZtgMSJyubV3x4xpiBJhdawz1R79k7GsryHsubB1eDerJhbtRVhTYcbEHQSeJ",
  "key28": "5zxuEP2yLCJYcnfN6cuNCwan9Wd8iAzoHPbWeXsV63JBV4uonasWhRbQumk61pd859uDZC55JNoMM8iJriMKsbDW",
  "key29": "a1ay4euAZbGs8X2m7Qs6Zf5v663eexybXjaBaNXeQDctwEjgayCmWQVr1kSQuaBJdknQjKjtS7X6WcTciZeQoJ7",
  "key30": "3YvGyaMoQiA1MDcyLoyhovvn3zagL3VSqFV6hK9EZiWY8q2LqrSePMgDCuZ4wG8BJmBxXAxzhJPeVsooTiG2WBRD",
  "key31": "PovazxwNP8kHkhXkNzasdkCk3XS75qnonCWoupRp7sCH4fwArC672PxTteX32gc9j9ssK7zF1fccukSMwPYefTZ",
  "key32": "4cXFcSiGN4yvcPsDLMKhsLDG23AwdM2ffBbrwqEjx7kGB68Q4X6zGow2dduD9qLyqCwZU1SMssVpTPiYhFtXLnhE",
  "key33": "Gu9gjk8puBcgYjCgRXcdK6ffMkGitxYie7XVPySoun6xmtqYLEbUsWqheBBn3biu2o7UPmWXtPr5vTpLdWu1tpz",
  "key34": "E4p4VH2PFVZoUxMLNeJYYTxciT4KrZ5mJkgDxNDxZrTkYt4dtm4abQi6qydBffcwNSp7XR9z9ydSp2RGkibJkEa",
  "key35": "3ivWd1x14ZZK4UZ3bkjm2cZYNkveEvDKW1u5JfkFWHKF9aWKtf3RkWyQw4yHqMwK2nSZqj7Eb4Q3NB3wzawaKqEW",
  "key36": "2RLoVz7C6TmT1x3RmQE3TjD9VDTV6jm3UamE6EUfgGBZSjjzRBQfgAFTL5p4AigHiikQ5nDER9fxA85i6wS5wnYg",
  "key37": "tJBL6pzCmwHB1keZDBFDuZJVYX4krELn5E1VhzXXBY2bmjtLrQoQN6TSWBWKseE4EVcZFaXRtZZ6LH5uUJH5h6P",
  "key38": "2Mezo3LuEdxiWAB3aFgSfynQDMJq1TLjnNztqbrJGzp7RwQRi8KaBKwXCKpkQpdr1CL9zxXx1pz5BJNgwrcGqceV",
  "key39": "jVfKewo4PPSRftTxjxbzjphtyyod2L6yh1sF9SYGGgS8vcag9SeTDxXDuRJsyG6QJXCNvrvoJ5wrxQL5kEXgqfq"
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
