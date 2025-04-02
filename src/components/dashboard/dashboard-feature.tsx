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
    "2t3JjgrfEjgTEpiVTnHBPWNCb3YWk5XRVLiopHEsXzPRW9T5sbVDL79wmG4oBpycv3p6AFHLBWcjz9erNvFrUHDN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52ePomikePVCFsZ8wpYq8SR6izMHpiCqUPr9fQ8CbTSfvs6bTB4gnbSF79U5mMMTS54eMb9vnrTD9jSQa9En9KjE",
  "key1": "giBQWf8yMZJ6C6jRg3XsGu7U337d1CZbibhUUfEHt3Ad1xbfvmyAH2b6ZSw3UYyNFtfH8UHLFi7ZeD3yPkuRZ9U",
  "key2": "4RZVqcYNDxhKA3Yy5NwXTdvgnhfT8E8Yzgpvo8xQSu8gdsRuH1Net9DUn6HhwzN4jGsoyYm4dpNRhAMtCCPbQnvV",
  "key3": "5uqScGovaurTFtspxG5C1vqEJkawqD2aSgFYSfxKvN2v98AmCqtRohD8vDfwHGNe2oKfbyPNXC2UNrpLJjuTNVAT",
  "key4": "3sGhJhzkZPrEJdpViFT896GpbcSTyKwW5DNe6DvvrBcrhgbfuykQC4TgMzymzR12YAuGfXLX7yxPsjAa6URJzk5W",
  "key5": "3EouXaaevRec31TuX6Kw65fdBBuiNXGSy2FcXdHhGsTPtkr3sNE9yYzRZjVnTkLac8H3txJ1agCAtaunDG78NipC",
  "key6": "2sX48pWSU9CQ4NyCkbGmdS1wcENAJUnwkhxXofnPhng1HSxBqqgcCyp4fPsSRkg9MchXCmaoZHhh3AAWe8QqWHue",
  "key7": "vWqfcmSHDk2cE891jHoAzxJSHWXooe1yjnxhVRixPZnUhJHWxiuLNK6UiqNwVNokUd4c4cQuYGorZfHHCLJKRm1",
  "key8": "2EM74e4m2vhuRhSMHr5x1s3Kc7tp7nnbdUz6ApsEjdXcJXJ5aTLsuwhDTnnM7bbFu9ip9DwsXYoD3behoZwwjLJ5",
  "key9": "21xD3rJ3QfHn34RvHwkMXZB8oJyP62LxxXthHLas99pGK3QD8Pc6XjTuMPMjd7eSMYm4c8je7LWtcxJe5CoHRcaz",
  "key10": "3abvqb2WiWXRrYnrwbjJE5taQPppBxDJAu5zm8x93nm3N5S2vmH52dNLfxwivxRNx2JES3Gv7kXDyPeH25LTbKZW",
  "key11": "5nf5mKdawxnL2Rn8jmgcj8z3qZmuoLYNrRUvWCLo8LUi1ck3sRpcCTfGYYaK2ny3YfySWqdyNggzTN2Ku7SLV1y1",
  "key12": "31TP4hDvTW5NoHQ7qKtpVgasDwy6qU5PGo6Jr3LfMLkYVzAhUnR4ZcT95SFR7kxpGgLFVeNAJ5oG3KExksqZTUoh",
  "key13": "XVZLm2Fqg2dZYYvFM4AUMhuYx9A8AotbemyLUvw8hzpRJdjPWuGnqUQJCjsCcnFGikqGDwjNbVR5PLx3Fzkh8PA",
  "key14": "xCcRx5dJX8dLwcpyzmWBTpfQcSG7tn5Ya1vjYYfRQWMLofhF21oQwPbTdeqptniFQCH5Yhxmb9oQ1wbNeufHe4q",
  "key15": "23aJg8Vt1hJpo5dSkcgH8iUzBvma4z4esqT2oMrM3LvsaxhctRQ4y1cqiKr2CDHudAqGeFc1Vrx3ZuLEUtsZ3oXk",
  "key16": "fSs5J5VmEov3izedx7hu1yuXGiDShA2CwdR7u7Ne1uN1cac93CXQH1DdspQ1CJoPr5Apjz7z7sJZTDEe7mAEykj",
  "key17": "2hhYvmiNb276sHHQxWTn6X2cucjZHUP456mDRjvAtBuWcuVvnwEXpauNTQj6eJMkrqYvkNeJH5nCaBhVbLktA4vs",
  "key18": "twt7VeZK11hFefymoAVFqraTBE58siQJfmRJa8N5APcnuaG8hi6wTjSmb8vcEedr8K2XzE68up7U69WFQuRk3di",
  "key19": "3Q6FEbsGHJD4Q9F8fd24Rg27WUt4hqDCeGyj1uzByzgkWBdzia7Grw9ztbWG4JFB477ZN9aBXbSgMUZKWzbgBK5E",
  "key20": "5CUx9fkeaYzuHf7ejT9LGFPFst9UVx24JvjRmW91UC6sCq968bwKGCzQnT4peptw7E5CkZgE3122mupddU7dY5ch",
  "key21": "4919r19TjrTCLACi3GDeeRXXW4vGQPhh4D3fgDn5FhCnoi4o8GiGqiar8TUU1c1apcVw7BW93HyxMUejHn9Sd5TJ",
  "key22": "4au3nnrMeNAaFprRnoN43HdjLUirnnMuQEEetV2GbZyfJoVZY1NhFQJW56jeStiayXuueKTVcmDLz1KvQTxXvqX8",
  "key23": "4siXm68PbW2gZav9x6hKQ1ZPAiEy26xfYpJNsejfJrJuaCwKBWLNj6rVra6AKtfZgBVdBr5Ef5114nxfw3EMAH34",
  "key24": "2sQStG93K6bkbYHjbsBpDTe1m4j9RhiC8dSnQ14ekz9yXyJYx2y3fr98qCbpXtgqM3tu8pzXBNtFE1bJpHKkFXDR",
  "key25": "5BsXGYk1jWKp8oay6FfGYvT28RevCRLh92UEqr9HBiNCJDhBe5deaiW1dk8GcsKTq6Z2fw2hXvYPRJg3gkzodm6X",
  "key26": "HHeCWAMer4HepF3YTcJGEHPtYciPp5P8mQkJqe2sJ5PbKntN9S6voP4aaRmXRJdtvVeF563yx4eadRLbEuX8ZoV",
  "key27": "3xvXfnvW4KKHYNCWd9CzBj3e1qBnq2tgigCZu4X6rR66kpmrFSJxyE31ASRTU9bZSxtRYv6TJsBo7ttRxvvQPg3s",
  "key28": "4eP83sB4T7rFGJ3x1U6UKhf5GEP3GecimSHtPH1ToCNasvDcyBEsLKYLv9HfV8PQNY3vnQs3iV8QzPvHxMvdwbkw",
  "key29": "5WQDysVmrB1o5eA3MQt3gg25zyDEnQv2iwx9agPrM3WuJgcJdZTixMKHK8bDydCrFnqofW6Uz8ZCnjgGBLF1sQ4F",
  "key30": "RJHzPwM18LYfeRsjThGhYQJQJyjUBnkXXKGm1u2zCWfcmQXsyppHAmoDpR97Efj1zySn1i2S9KNGpxUkNTa2ky8",
  "key31": "2wSy44bw5SuPThXuFTXNzWLxRYEqBpoaZ4JzEPRkHwAjK79NhqEq9hKvyrEmJXbmdRi3pFDwW1k2U2yU1JLjfrS6"
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
