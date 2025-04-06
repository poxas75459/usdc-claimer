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
    "62aTrDBfwoG33MpapoHPpmcHV7PapkFYagGagV7czxbeRnBWcyk3Tb753TsmcoFjSFZoNgy9V8EtMfPDPjCTEU6r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oiViF8hwsUKjqKQVvbitapjg4WpoGN3ttvrpUoYLsEyTLwYMaRV3FB6YoBwcp9NVMRsZFJSnTKgPDEuLPY4MwmW",
  "key1": "48REdVGj6ah8Q8kofftwkBj7pxqpF7vMEAbcqDjgYJyxerUbKyuQqKdT3Hs2qreki8zWErVWoJ8z5VZ86wiQ5W5o",
  "key2": "45u3nY7dnMPsr28nzb6HTzUE4xpjTtU875McaJKaJUP35FzVf9unJAsjEpugqKKndWnUZskGtgfG1otmgffT3UUb",
  "key3": "4L1Kv2n3ZXDRmbkX5NgL5pZXRWQa8zmRGuwvjk3v2e32MLNfeeX84B7GHBncWojPNFy3EhvHr8NAQtc7okVo9L5B",
  "key4": "3Ag5N44iuBMCjVk6wrJmGmXwWCd2ThSvMmyCDqnAqHZjsaaRecKyq5WWwRYH7qiEZPr2HPdhSoGB2F9MrmwsoY5R",
  "key5": "4XdRdgDuWEwhtakhcaBXbVNabK75VTJGagc19Q3oBntFVhiRbKqdQf6pc18cnewusDKacCCruhh95Z21F2yYBEwZ",
  "key6": "2MmEj7AZ7RiVgc8dyKfQv2gNQV6zTwsJM6PBaUn21P7J5vp95UtPGdNDZTxteiCNwcWfbC2axm5t48WFNHJYVFNM",
  "key7": "5Seq9SCWYSHckCheaA8FgP1RtovEJyQ7vdX1kjjYC5rLD6BSzJTMzdzWmJnJccsXutW1DRwAoM6ynPna4AkLL1z",
  "key8": "28TbN1sUWxt2UdPuHoXcjGMsku3b1g5QFX7PuHDoojf6XSAMs5XS4NMJ6zwUyZgwhq4XpdwAuyChY57nTbbWmRpN",
  "key9": "4Hrc9sDmhTSo33gRwTssEtW1cujeMmt1c7dUMJchoN4QnepVKWihCp1V2Nb1PLaeL5Ukn8W6ZhNkENJhTPbiJFqu",
  "key10": "4EhiY5gRzKWfyCk7pmnXSLBn3gzCjHa8VnTt2SzNRFXsbeFdSwhKEMhnZu3ZRWRPzkDbC9XiUfEDR2R4TuAYNm8M",
  "key11": "29CCFZqZ2nXYAhhwToNy5wQabRKvbfm98Am1T9jdY6MzfWgGeetP2HxHiBfJerdcZ2wZtGcySRD4KB16vsbn5heo",
  "key12": "3ba9PARXxVqDewyPpsDCJrkEqW1fe4ieN7ejarYSg1VZqhcSqDCnnwSi9neFmW7uz7RCyPDFfBfQApcWunBv2cqC",
  "key13": "3TQuXNd8bJ4DiqkjMfYKGZ1sy8NAmeec7G7DyUtHssoeZEyubXhCcVpk9FMifRMhgK4oRTxKRuogVSZuM3jUHSs5",
  "key14": "29TEFjfUmucMARyJQKeUdnTueWQppUVcuJ4MTWmreZdJshXHL1YKWSZPkz7vZG1zQC1RBTrCvjN9CUsgkfScFWBz",
  "key15": "4NPaqE4mjHez9bFY1Nzgj6x1eQHDxaf5KK8BucaAVGKnRjNpY4PdAa8qVn2i6UWp6KuhcFgVGB2KCzwczRFZTvgQ",
  "key16": "3aTvQmnQAwGiqa3Fu92Ye2rkJWoVyL8pyzvfe2LNGL2XqJRgS9tpyEaULoxWe6w9Su3MJeufpZY4cBPvRTEy51PC",
  "key17": "66B7m2PBM424obEBG3xAJAhmZi68YVUJc58kVwTv2GxGYTBGVE35fYcm5DmEcTA6chJ3f44jEueTxnf5X4C1xbL2",
  "key18": "4NTpEcQca68MPnhv4o6g86BHoiSxYWT7tkVyBCq61qispsPkvrCsFhjtsayoY1R9bWii1AtqjBrchjd9bmtg2FXa",
  "key19": "4n8tFTEpqKuQy7P1LxDziYicTpHH8MSzZjWRUad6iUxMWQvrcynmmXjPdobDuzjpEH7mvjALGYUS4NLpWo3aGuEb",
  "key20": "427KusCJCdvcXhcTv9s9DR6c49NBqVH3kFPqMGT669JybwAjJuGQh5i9F9pjrEeVLWsFMTgkRMzyTGXtDKS81oBq",
  "key21": "4TJphkPy9g4Xs5kV8dpe7jdLHKR9mrsytPeevm7XnPdjma4SE4exNtePNXy88xR9fhoVsBZWnc8BCdioHczRrkph",
  "key22": "5SzKHbqb6RD8959C9ca1WtmmSrz1hYXzrW6iGkdyFwFPdM81sixkWRDpDwEX9ofmNGHu2zq1JFB98tFHFL2BcQEE",
  "key23": "ovMiHsj8aT5dKJkQNXhpMeBjR25fhuWuR63xH2aZVJpbhFBHCa32YknPXtXCbMrTxcs7qCrGwUD4MShL5mjqUhP",
  "key24": "3kNndLaPCfBdP9VgfvdusFLH1f1wWYjMWB3a3p4D19iDsGPFcQeZn3PAHcJLhdR2i8Eu2FhqNiUetv1E9sSfVXFT",
  "key25": "5tY9XvmbxDSiz2cHBZqXeH3GZyHKJxv2oP77mp3hZUhacbh25fTFvMJwVtvVfUxcwmEatp2rDRPvpugDhrYULpjW",
  "key26": "2vLWnv22eoinN7v6Ltho3JmwTfVGeWTFP6sdPcUjd9qtjoBh9ACciujqGPt1dgWjQSqrrcd3bVB59neAwYyNWeJi",
  "key27": "3jTdaVrFyLZuxCrYu9Vp2LA25sDC369mXzRmHKEZFB29Z5YZ2PxzqsAXotwv9aEuPnEU74Fggsx2xW8BTgydDGrk"
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
