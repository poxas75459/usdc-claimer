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
    "53LB2jjb98RJy775bbs679MmJD3RFfaUKYqZQyJhYc34ri5WVJNFPugSzCP6HRrnSuMdGs5T1pqvVMpDPWHgVmC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HuqaRazDgQVLf8XZdBTH3vBEzRjTTg5KKtxPME9eeSFuyoN1NphcH227su2geXJnqHqQzWhJU1iyQBvncvLt1kC",
  "key1": "kkCwHjwpqSXqpnPvKnbMUBzUxtGKRspAitcNk4Nwdg6Y5U5HvntmvZ4VVxTFN9RQDMwSviRf6tTdgCcf388NRWe",
  "key2": "3jrk4QH4T7cWbMdomaB6aN811gv63FwsjDd6Z3Yb1VzSMgnEjvW3s2NvFMmFRuw64F3cib1Pa685qg9YGuH1nnSA",
  "key3": "rriay6vwMzsBw8TY5oRFFoTAiqP56ckBZjKx8c6s4dyxpKRx5hCnTWFy7gBx862afabQj6F4wVUXQACUus9wcnF",
  "key4": "C9CUJkqiemSbrbJmKP4vsHKathgqC6uYKmUTJ9NoQr8yt2gRSoJ7Gtw35G6Bp1hhaqQVv4nhSHaE26CLiGpuH5k",
  "key5": "5RkXRFbbuWLHu6UYQhQVarLuqaRfHzLs96AAHiQidnShLPb4uXnoPJk9GgNQNgx2W5e7eMoMB6B8tPoQTRMJenTQ",
  "key6": "3xcHZWj8dAFR1pLQZFjCULTfktWr8cqcEwXhtmbut2kr7HPfULmgDkZhq8QApW52yCLT6ikQiQfTSXnPn6VtcWPK",
  "key7": "3hcbgvLfTibbJnYevoUweqZQ2DZtcK3sU9JLNQLdeUcFefWs37ewAo99a9aLFGuHyrPVCJN2bp2F7RbEYBPVvCyW",
  "key8": "3itBQucaT2PX2GN8hraU7mk2n5mL6M7cppM1d8Pn2HSMttL94B72TpoqKMWtZSHDcWiHVkKD9LDBSYRBN6SP9hpe",
  "key9": "5tqn4aQeVRbjKFRg5sLW1T5zkoPXmge6Sxyt4Brpm4xAyPVRWjC9uyZhvod8LwfjgqHSwPmoFJRiR7mDK9GipzXr",
  "key10": "5HC5DZw9rfSQET4fvteZzzi7N7s1MxjwhX1L4mjMNFXwUG55nRc5jcmpNkX5mu6tPftz2UXwcnzgqLgLt25VhGWv",
  "key11": "4zZ6gExtdHQA2QxA6wnm3DUs992fcFnTnrnWEbhAzjfgpdRBipntC33ZGgmTXoBoHtduZVdrUymPnwXY2LaydTBV",
  "key12": "3g4mUzLNJHEtZufqq5Bo9tTGptFRRD7gFiCs9aWGpXyLBEwiwaTpg2eMbpqHS5o5YDVVz4sV4bnEhWamAUmzLjqN",
  "key13": "5WAGxDhZ8nCMX18wwZAG5EXxL5a9uYN8TWNoWsQ65hVYcqjeYEyjhZ4g3c5PGKztR6FkG6YGYFhQnNDLUsj6jE1b",
  "key14": "5dd8kq6WFbjgPWEeJhqnZdrGBz4P2ESHkSDEPb24SHFZBeUcPUihLiGwNHUZLVokCyPuyLArN3yEq5ZjsxHd99JW",
  "key15": "2QsNhzPXPnFCC39c2QYUCWbcdPpWAR9g5GuWiS1EkaWPiK2B8CDefwhjzhJkU8oznDWZ47jyhHo8LsUbpzosNJdH",
  "key16": "qCodh4HU8C4RqVDpBiTaAtPp8zrc6beUwPSzGpSWLCWLWquvBkGK6WoR4FFdaPhHSGaCrNy41hY3rWKZb6VitPo",
  "key17": "4BfAV1LxVrjdjAF4cKNPfAPFcrmizF8WULUhf7Aowht2TQaHMzN5qm8CR9vEJJnt5XL74Grs3QWT1cmUBuszfMS9",
  "key18": "3FZPkbvZD8JBz9QcTRjzzgqRGoVTsNwhiDfLLS4Swc1YPmxCADMUytCBttBVk2FYCoVFb4FnanbYp1ebRrtbvC9C",
  "key19": "5gBY1eZcuarnxptA8axcPD4KzZuXYiZCwJDrqGEASTKoc2qS1CTPNYCCzK5iB7ZP2VMZ9F4je1uMrLveJLHHg49N",
  "key20": "2yDhwJxraFMqMK7PxpPg3WMNtAevjCLLScDYdNDrq3WfjrBmEKVp9kpwcjyUkzoN8kkRP5aTtmw1mZvyhjUG6516",
  "key21": "2u8DWTpmgNJZnWBWZ8Lhnmpu4AixoTcTT7XJ5F2s7iREX4yBWAakao5r8ni3fEuHfAiw1zb4cvRCuHwcNAueuHcb",
  "key22": "3X3NQuoJE8x6wpQEDWqCLZzEhFDG6CDkeoXUGdfVrB8dQJdupWQmkzVSAcSxPPCUN51iL6AVzc56iKdxT3eMWptJ",
  "key23": "2dYYZM8ihr6wcLkjS2Si48yza2572MnUR23EATE8m2vQxJXkFMHH2jjjj743ZvATrGbTrdYdB7uUCFsp7rzrjVD3",
  "key24": "65u8a724MMZ7NimzmXxxWRy273ornB6WssCgQ4vuGiHSeBsYLksv2TGKbssd7U1eZtrKHuvusDaaamaYa7dBZ2y6",
  "key25": "3UEhkido9WmMTMr3bYKjv9aK3dpaK4TbsVcyEiA8Mybrs1dPqQCMsUBiMJF4BR3WVuwVFfMSwMaQr1Cx8Hfo11b1",
  "key26": "5cP1h1aPmo17QFXL3v1PNo5fYiTbiSVzvLYvbxfqfBGGu71EsCxWz4HCKNSFDLoDPGctzQ8nxcV5okKNBB1EecPc",
  "key27": "5nVonaEiE4vLeX8cSv2Jf5uYS4ca5iu7B2aUqbCX7Z52eNbfwZX7WcCtaaL1hxDsvyAXaTTAaM63V65s1QzZDUvD",
  "key28": "3unNfNwPZFmKL7zrS89734w2JWduSqdHhTdbNWRF1thss87yK5Xuz3q2QqcHogAivVcW1iP5L6hCXYrfEvvPmWLQ",
  "key29": "64yBczg75hSSmS65MHk6nbRaKC8gH8s6QuK9bMDMvorqTxhnsGcBKgCz9NzLjYuSxutFcpxHw84WC6yBMBjfjxm4",
  "key30": "43NgWpDPDBDXQ9qMkfaSiWTG5yQB7vAeEWDvQDx9r8RcuqpJ3s2zhvqcBVDb787LbLeQ9VAYpLuj5uZkstoKrnQQ",
  "key31": "2UFCNZPyS5JC6VmkJfkbvEGry51c6NoDmggHWzmUAquHWfcbJVT9DpN671VjCrsMP1PZtAYBGYktce81EMBBTWMy",
  "key32": "3nd4DSa5QcmwHL9y3qJw8rKAtqFGFzuVr1quxA286jXTUYod2aPHZ1cdZ2aGpvmotd8Phwer36NDYX6N9ieRWCDr",
  "key33": "5EVKSeViVjGePf1bW8Qe4746b7uHweYBiXjrYXVpXkmCQfHCZ6WRoeuTvABNAUwv4pb2rq1cnYEq64pcLAUxp8Wo",
  "key34": "5Bd4aPa9CnMCSknjuvu7ZV2N6F4gvf7Y9dt916tHjuDxYdbJitRxZkP3jo8GRGokzA9JyVa9LBkwWtqqyiL2eAY3",
  "key35": "Vji5o8s3tBSe3UTaGFp1cw1VFvzmK2KfyKKxdCayXJ23T6mewpnzHmQtUSxfpLyKeCKBV1M7pbQ5eeT8gv9KeEg",
  "key36": "yAZxiDU7JGXGPhbVEundDdsWfdL3HjCUoWtE773FM47KSwPQkshVvd6DZMgxmueWNVexoUHrHkRcvW75z3uq8Pa"
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
