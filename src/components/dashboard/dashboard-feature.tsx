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
    "2xJbe3hNoRjer7QbNL7wbpSjjiYrPdNjV6Ho84YpwbQ2A66ZJ5SnVjRYX1ZbXKs7H8orZAvzsGpNwp2hX51WTndq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H5xt2MHX8nAvRz863eMnq1mmu7RmrcPy4JKN5mPA8xNjnuwcmfQ3yC4PL9xHugWY4TzBjHCgemYXAZEXXBK57Et",
  "key1": "5hgf42SN2cS3iiGwyZStYJ45dLqUomWXVZGbS2EnJyLPUnzYPM18syNeqzBQCvwkJB4WJxC42FX3Ufnt8vXsY6F4",
  "key2": "2Efyr7tYxzDuUzMpiUFs92s3bQJLWdkxmH5GEVpTz9xTyFRZBgoXzsUpxdvQbiaMF8NjobTt53dLt6ynifG72dyL",
  "key3": "2fuDEqVcKQ15HVsW77E9BJrza2f7jpqQS9s8DPAQp4Qi4w8ESzssZVGbUuE9ZDo8Qanv5LGW1Cqvw4YWwfSG2YNA",
  "key4": "22D3QK1iP6cB2irkpXkcWeDcoRttP6pJRaxNG1R98x7pyih743tGzhD7Ne1Rw43Xu9rH6jVA6CEM6ZbbTpkc1gvy",
  "key5": "3mxrHsEUMoMmmC83YuaPP5ULnRwwmQZ1VS4cuDjUoz52dRgfGhib53ufT2Nr9Do5ccf842hRhabAnKp4QSUhtuYE",
  "key6": "3TtDjxi6nqNiZU3eGrGeJADGmeKHkBqxh18PYFp37rv4Khi4n4avWLAkVxYWLdagYoLNCx7UKYbqtEdqY8CR5VPH",
  "key7": "4TZwdoksyiLAJYpeXuAfY3k1vXkUHNnYzDG3HDefPq3CWTK5CQenmwEXvmEQQFkGg5LiFBYfdHMXXpGD6n7R1z8Y",
  "key8": "5KTtFj1XNnZnt6GWgEmdnrhA8az5kdyxxHkppaS7karVsYTL5G7Pj1sBHiPyNPU6hgeWkezhvPLihDsWfKCw14q5",
  "key9": "fBkLPiMjCWn1dhteAgMDTAHjhM11pw9hVmFiqk1DHoM94i5j6Zf7nrhmEoZ17ziAiL42UAEk6uUKchU7ub6YyXZ",
  "key10": "5ozKGBk6CmSQVvxkHj5JPpMeCgh8FjujTggQwTYZnE6nqdetS4JxSU85WYCUhPDuMkLUbE83QAabeUweqPdsC1ek",
  "key11": "4jyefWMyM35ePWZ1rFMR5zpnCksZAArEBkq2uoQHPtxQp1TNdg8eHdM2rqxQvcz9QXD1T7z4auHXcrdWFQdLuFne",
  "key12": "2czkR15MdyzSz83ebr8pgL7CUNDUi9nDCH3Mbs235GsYPwEmGYF1dyHyNbPFs4tHBvWiDpUt1VqZc8NV6jnudeUK",
  "key13": "5dfmmcqYehnAyXTidaVfRXYJwZHJnUsv6SB9sg4LgowZAJuEUUb2ZDyuRR4MqMAGXZVbhTF5gFPuQ2Fvzjp134n",
  "key14": "3zazywxCRfFU9P9SsBxndJUVR56kBSGStAbxc8snWF2zf4SHtWVvseM2w7pqvg86BDvwY3y6YmDQnztUe1p1Rtfr",
  "key15": "5eKGwdvksuWrMf9ivnRcY8JkHinSqrmjgCuiWm3W46uphNtTmmrWFcHoFYAaR7mhtnsVFR6FzkqQ2dokFpCtFVRJ",
  "key16": "64WcufkMVehdGqkz9cNuNz1eraHKgmiPbcDd8SQ4fMnyU5D5ZSs5MZM6twtwDSjBodMLLakVTj9mWBbUXbNxQaYs",
  "key17": "LguVg2KuchQS5y9hmG2ez4mY8ChgqKwh51ta5RVy4TfpXEU1DQByoewDW6WrvhAU1BJqS946rEPYfW2Zw1hvpRp",
  "key18": "28kEf4qkV5QkPspRV5rrBknyd6vYRCavVUkw1GULw9nws1yM4o1PM5Qr9MFWPBbrUvs8kd2NbYmhvnpMmXjY5jf1",
  "key19": "5Y1iW4NG6ThYA6ULc8W1KJmXViqCAEfjNY9eHcZGruSgCvfve6AXtEA8GfgKv7RgY7SXNujVPPePp8ejegdNL5Te",
  "key20": "MoUoaYzd41PbxEYJQDme7AMGrBkdDNfgv3pRiaeSJ22tbX1zM5NcHtJM8wDWHnXPGhkt11kz2bFkLbqpRaQaiGM",
  "key21": "3HELBoWjY92myRDERgLUDLvpiUTKuqyjUKRGBGQHGm7LZBi4XEgCsxagULgmrXt9hnM9zLc7kLtjV4Ya45LkPEs4",
  "key22": "GHqe8zuNUYMZkzhLKFvqEhZpoHUWtHKBLEAXzFMFNzFwFmwx8uMTKXB2v2kDCXpphUPoaB6DTmURD2qa5bZ6JCQ",
  "key23": "4j5k4FS6SPdsNEgv1ZcCn98xy4SNASgeWobLetD1cYBkD6GVXyndnSCn5yjVSt3cRgC5aVEQdCyKHwzXxJWfD45",
  "key24": "2YVKqwTDRMUoj3xzai5mCcJ3YLKw9ECTvHz7p42vRn2SFfxTBNuX7yAbPrcPrZzutw62V18Q3daMqSDyqJqC3RE2",
  "key25": "2VkZNquhyzpHQcUHfrGDKqJ7TGFFuNp99WDoeiBisFWyDFN8ofuZPEAyzmkJZN8rpQKDx7fe4LKbfJaSUq7doxh5",
  "key26": "4ngcaB84W4Z4U3FMj9AVG4twqiSncmt4LDYjw2mwRwnnAXd85jpn8bouBfhPipckuKMXp2CdgUb49wgegoHVJquu",
  "key27": "3EK2H7AYoVuTfTLYtdSJBPneLUt3QSgVYhz8jZs7fqTXo8rC8qpBWpCUCyqBBdNRHsrDmjW1iRc7zGTucpPimtYJ",
  "key28": "3YQssd6SP9LDEKHWSGaurwMSvP15DyUK4hyp9UUruEEeuMW7ejuqTMxjtt6QTRYm5WCDDBtnALFBQWiXzDcZY9nJ",
  "key29": "4KQA113b4T11KQ1niiV88M34QSRnoyxw267RGPUcG7hhsfuVv1ATErsdJ5W6p4V8Tn52oenZCHCaNeWDjcUd9LkE",
  "key30": "2qFzmG3rqeU5Vbq7zVj3D8bPeLDQ1AZ5Gi1M2S76NwspJDxQgxhwCJLWMgMgMed3pHvm5umtzRPMQngMun96o6vD",
  "key31": "3iNw5pfzR3gEhVwWmADKT45r7zHrLPqdDuArfnsnM9Kj4pcA5cqPmc8Wapvzeu7SwsCmVLzSbkW7H7zJfuzYdzwx",
  "key32": "416zJZQ1VgvgKGX3ajRxsC6tZPrmjqTfjRUGcV8QLc3iN6jWJkB8sF7k6eTQxMCyhdVf4N86TsSgfNPauNZMsXyK",
  "key33": "5TTxoraNgBK7Rv9fAkdDJSkotMeXQEwCDqndgu2Zzf6do8k4iLUsDPR5aaahoyUKGhFkJe3NvQh892mzggQYfC2c",
  "key34": "4PYQRb7DUgc5bZ8DeEHQvtuTEmoSrqByqHGeZGdV2B6JbQfDRgbrZ3S2eouZ12FB3r5SrVf1hgNQ466GKFzsWKD6"
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
