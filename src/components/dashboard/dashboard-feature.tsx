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
    "5aNinppPciwVBZP1PbZbMx76NBuQuY2t5xkbSeQgzm86dyWChStmF4GTmFAvhdCr9nk1zcdnQR8hwBMS9RzREdef"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DZjWipbJ6mkSX6HVpL37Kz4wZYQzKFBp3yoG4S1q7UQe8DD63sm1qPdBvhXLUwexeZAQdG51YZkvDeGYwbcZCvf",
  "key1": "4WDT3yZ8xUbRmac5LcHMZkjd5TsqAmjJcZ5Yqf7Q7YWR7P9g1eCwmm2xnDhanDtSfn4m4csCEKXHA8FGEA49HjLd",
  "key2": "54m98bPaLDLJt6zLfawtQqmMfJjukAHrhwbfYUmDBtchMtYbzDgu3oDbE5hBBtPNij8zES77HTMVYkC2b1KgEnRT",
  "key3": "2423gspZvCrRQExhr2rVwd45W2tq7cUzV4vpvvtUyJrW4wj9SSJYz2BPCk7zkeQJPFMwmZM3EdoXhTNTuD2pBWK6",
  "key4": "4yd1L5jh5KWzGPNgpFpPhvm5dLC2KLKwkmYwZPamK9x8GzRZ5QCHxhEmy3iTKcjQ8TXqMELH4hopdjW5BaQcuxXQ",
  "key5": "3KKt7M1tBTdyUt3EDuENrrCSPFynDFs4GqB39ciAyvpwzoBMAQjc59F5BQGDnh526BH5pVh7ptnCcgX4aRXDmDUy",
  "key6": "2uhAd52SBuT2p4GiXCSvigDgeQ1Fjm8MDVq84fmSQiEPzNzASAcbVN3vqzwdt8uEBUznSWw3hCgqExezgab6c22n",
  "key7": "4VCLSs9MigkbqCf1tRn4ED5uXeW9ugmPcEMn3QYTqmks3Pr5QX3ntwLNosYm2Yr927vxmr1xrZh19FqBajX5KUNj",
  "key8": "FVU4TCGj9rMiYmV71e6rU938jBmFPWEH5Z45Pk36GoGmSnFvT4Mtjbwb1gVXfaE5af6Zy87y1P4BoxU6WX8QheS",
  "key9": "EjnuTDyWpbvCeCc2f7JNLan8AxVSRc2iuaJur9fPzrgzZVrA9NCvvtBRQcuTXJ96YnHTG25xRsxezjApiWmcVVw",
  "key10": "5VEwoWhvQPSBZCA91QLmJN7q6uHEPEeDH8ss5wmCtQ5dXFFmGHdTS2TFz8pDmPwkBZeKmBEyWT6vzmXE2FbLsFNn",
  "key11": "2ViEEcMFuqU29h9oywqk7JUTNBewYiQdgBEB9xNeTngB3SHkGFp1V1Q3P63tErpZq313DtLjkyVvsHsGMBMHn7qD",
  "key12": "33HMZ6NEXaL2b8UZhoDQ1WVPSEZwN92ZQNVrLLCfJXp7j4iuSz3fAVxcU2bcFVT9xiahcRMAn262HaiSTzjznE46",
  "key13": "Z5EFswMRnvwXqwgs2gTDpVDFeSexaWfxURtd3VvwrrDoHjFvniyr2LPokysgzow8KchRpnr613XU7vpb7TDVXvj",
  "key14": "TjuVT2F27rgJ74CTnXT5FzAJAfSoQBy9nKbmgtTx4LRvA2fbaJVZ53YBcQQ2XjTR2SYTmuo8UZY9bTV5dWDH2SH",
  "key15": "2xUdjdJVp5amkLDupqrSov23huJATmKYWbNsjZdufNTgA5nue3BpvSo6STd4Dmpi83oXNs8bfzxF9yzusoUomrr9",
  "key16": "5n7csyrGGFQbZAcLA74cCKauuyMr3VV9gqThngovsUMMRgMXBZMNoV2QNEaLwdDkiHatoaEvnogQVWfFxPizWSdH",
  "key17": "5NkfbqyszKhg2SVXhjaaYnkZYVsQmDz6R4RHDkRV5Xj8HfFR3L3wjvQFPw2k2XEZWGpex6ET9B5zzCsjADSG97xm",
  "key18": "5DV3eWPANrPZLYWAB6bhd7yfJZygtwwq8xhAq3atwECiaDuhRSUzdyGyefvoEWg4aQp8uTtrfRggTDKTJfui7C3H",
  "key19": "3ae8Y42SjAR74YxzHc8b93CapZuQmE3cWUrR1L9PHBUwBHhuCvF93haaphsY7V83D4s97qNNvjt9AJWfxrhtESyk",
  "key20": "3xhweKX6sSB2pte6gTiWVfTb8gptKsHjYuK21CVUFTs4UE1DcE2kjfny3vmQd6psS9gMzk8XMm4u2xc6hFgfug7K",
  "key21": "4EijKgJ2r27pGy94pNozJ6srpEskKMgupX3SYJq2sdQSVB3YvaZ1qYAYpBX9R2PEgYDRcB6ozVpyqJRg1A2M8KhN",
  "key22": "4yZ6yrnuMparaBrdohqgnxEnePnyV2jL3wkKFKGajZGWZydhUJ1KwTWtBC6JeEJMBMu9zacCMCS1JuMbvSXCDk2P",
  "key23": "2EjtKpWLs5R9WHsGb735MjpgV5ybSaJottYb2aLotRorzQKzUZj9E8mG4ULSDTSUKk28M46854AupT5uPf1wVyhL",
  "key24": "2RrmLTWAiiRvqDc4wdwZt8Gd4v8NqiTqTRQChhKsWMkPHWTJAPYp2cGsnDn9aEdLkMhbkeM1gXPWoJ2gW77aqEZR",
  "key25": "5jLnz4gP8YHAQptZx2AXZAyThLDDDVURa8F5VPEarDKYudGVHQsude5dhVhhbKHPhYnZnRd2HxaK8RHG6pb8JXFF",
  "key26": "2Ahw8ytdr9dcrMiNks9TN5DLiCNhtfS71FbpG6s4PcYNuzshJXfKX9fUGACZeFWhCe5rV3cWz6EEt3KXQyA9j3oA"
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
