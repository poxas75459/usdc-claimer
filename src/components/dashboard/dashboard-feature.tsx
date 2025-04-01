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
    "3VVgsTQDWDuwGWDFC5beZ416fMXdTfdjJWEHYRPmrEWjjVB46H3a7uuwM6vjeNqAwTyefMyuWDmmKS6EYzpt2Dwn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LNUwDwNahVAgQVZ41cZ3xRZcNZo6nTDHDbdRgVP3JHMtRUsjNnKT5W13tJu2NPKYzjgbhyxsDdxeCpsVd1rsVra",
  "key1": "5zarkCFPnseChVjUmxiD2dq4Bn9zGiaEHH3ocdjU7PPoMswR1WMPXZsAznq5nRupxNcbGioGx87CVZv3sk383WH7",
  "key2": "2whxNwiE6aekVVcP3w3EwyAo8CueuB7uVnXLKX48CN6qJBPcgF5PnD5mMMjDL58FUTNLJaVXzxA1TxuczXVkL2Lq",
  "key3": "5Yq8bBkaHBtHfm2kEZuAjZvH1sRpf82TfbB6SZ2dbBnhfH6Ms4YJmF9LCEPiSQsFdXpY9ekZ2qYd6LPRQoYn4eEF",
  "key4": "5J2Y41X6omNqF6opWzadoo359EH8a3tLypmzXZmSrRFqqgonqc6Bdzu2fwGChBs2t5gYX8vbhbw76AGBEAS8Yh2s",
  "key5": "2xNMHqNFNY6kN57jd3MxgTR92om7EwadKPboo4X7HqfaGtrbCpUDnbi3aVMZePixHFyDv4BX8d4XxXySR5asWYEr",
  "key6": "3aSUseJJgmSAg8xL7brGm7ohVCrw33uXLEb4jiwjDkTswcW2evXA3iP9oAsWNVnPK9Zxvb8zi4hM2hnC71sj6SMu",
  "key7": "4ouSfPg47X67XT33X1HJvZrP6iGUgM12AL1BfDxJnokKyHn5F6nvxWCVEuZJWXGu6JF7soTCBza6EdYNUTkYFyn7",
  "key8": "5qjNc8zT2zSJBWwpsSZ1sV4spnJX32dc32Lxo4HjSXVM6YwcxHBSGDVLzRuLcyqJXgQHegjXqA4Yt9vpNWXr3t6M",
  "key9": "3qxSN3XyDBX1XYuFBnBNLGCsBY6rW8KYeJTqZcSpgDY3exgoehohtjKvh9EvZGCouQEpBokVTthEakHEGQ13bK77",
  "key10": "3ZXRrvyy5yzcH2Q2modEAZ83Fze5h2C9rzL1eWXVjN2b71ZvxwSrEbUpPYCVhmFC1atCZbR9tgmc4ZaKoAtYis5d",
  "key11": "5yFxSQf3A2UiXn74Ndnq2gYCCitWHdzUavDCyXc3wqdujgg29r1KskCedRZBkUpZo5nMJbMCw1fKmDopDyCFrMo",
  "key12": "irVjN1u2aDbYXU1tHggqf5aEBRGuuFmhJFXcWfWFyx8ktxn1ySSjdKBYiBiRPJ4jptvSgaAmsP19djEjqPJi3t6",
  "key13": "2FXq5rV9MTs9qnMiqmjCd5bbC4nDemcge5oUsX63q1p4HmX2AFqHvR7rSnxaPXh8i3F1xkkUiC3tFs8jFrgxWGEL",
  "key14": "2UkrUKcPdmL5pNxQGtMN6DwGXozkq74JxTWfPXFRSUozVCRfBoaViVBAB6gNU9Ln1MtM5VLBBNmU3jDfBuj5rr56",
  "key15": "Z77ivkS2bGHTJuDwGR8fFC9DaXqsgFMZRS9Vqb3GVMSR9HZs9fH5rdjtPuHKgTecHqPpRQxP1teBE39BHbPdWsi",
  "key16": "4dbiWE9mCBfiK7PCBDE5TQaQRUoFYHtoPkr19L8CnYzguhf68ugRzex5eASknqK9YcPsjfYrgnbmvVMswLQAAViu",
  "key17": "2vu5hFE4TkwBk9Tjhr3cv4hedYaGok2MRpFkgzo56zxc1jDypoB3kuqfcut88pZ3D1hseE39fnotgbAacZaEMkA3",
  "key18": "ZAiGb3PbDsLAXao7esmZUM72BKLV8HmTf196Gc3tmgzAPk7UJAmjXUv3c32e7tgpuRbZpWmkesHLiGGAXwAwdVN",
  "key19": "43ddiBNAmtzVs8D1ii2XSbafYSLPa6uUuVqThjUGgthM9wdPNuqkaGwktcF21eT2Kddh9AvS4Tmm6vTBwp5u6JSn",
  "key20": "4gasZKeRbL81WEBmjHcFx56VZD7mycQrSwLgqJwFhVYYHXNoXBeBic5BWKH76kFG74yf1sMKqWcCAWWFxuSn5HjQ",
  "key21": "2UxF48qyebVptUAgZWG32PcsHshuocv77w6hJLBqfqD5A5yXZZvrh7j6ytgBah24ZVhYDFaJtSgptvVWGmo7SLP5",
  "key22": "w24Dg6jBvxn9X4uhr4LscYUAuiVRCPd3sddSie1GanPwmEregU4Q52KpJjWsmD4K4WKKD75ejxVsVex3eHdBZqG",
  "key23": "52VYwQCnLxE7Tuv4VeZBc1gjbbQbKTPsmuDGFSSgzxAVMECJKNCHXkoEYWBpvraGfmZj6o4ZQyN7vLEpHqEfNtit",
  "key24": "5BWehob7zod2J8a49QoChfL8B43eJoS5LsovEd5bq8t4iDPpPdxA8wa2yzfsVWStgLSfS62qJNxxC98vXX1u2E6S",
  "key25": "5sLE6ueEsDwXLPhAbUW7HoYLoHzWzc9gghxTGh9quWEhNEhNUyT9QCin5Zpf6aE6Fg3B7uDsnyogobQ3moRDYRHX",
  "key26": "4PFebmMWewUFXit6MuFE23fomsQuAkjYpMkZDVsW6iVrv8KAfNesdiZ1uUSMfXvuj2xRsvTpQ3dEgnEzLFMsHuDy",
  "key27": "tjHtyBaNR95ao97gYLgf3SpRQbcCCu8UzUQjAL8Yu4HzrKahxipy3JbBCDxnwQau55jpG2fZ3syyZ8E5dmaLHqZ",
  "key28": "XfpA2uSo7zpCVtuFNrdXxZEajemKq7KQYdKRRDmwXEXiR1mnSvC6ePebb7PRWMdhqDyqUXbqkk7TkPa3FJvdfPM",
  "key29": "2gtcSWQqarJLBFqk59U5VUpth237ze6YzaFWN5gNYkpvEFZUpGNH3ecE3Jc7M5FqJMayULYviM6BTMEifiUGh2Ew",
  "key30": "54hKRr2CqcWNviTMFKdndLbuMC2sZB21VBdz3WdDa4d5fgL3SnxC1RAhjNS8htx7PMmcAjRpzRXz1LunVSzLfihV",
  "key31": "4FbnqS5rZ1dafjGrLY8P6ZXiskFWiPBEMjuRmqNZuvreZd6W9PGS2eeKF6EiSKcQwSHMuNh22MJRNsKU72LQgmp1"
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
