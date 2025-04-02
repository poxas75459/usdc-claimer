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
    "2EUgzwzbLsY4EtNHmBm6qS2mQ2ZBrpjqhf8haouzonffbTMmgUtm9MpuTakEvMGZwzDrGsD2FKKUwXGkXvxjkwRS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kE8eiTRh9Jdb32638xP38UqhweHVFjJVJEmuwzzwgUTvatAc6h48w8Ro4kMbMPso7k8e8HuJKV1ZXdQK2BGkzQE",
  "key1": "5hVnrKCuux2k2VXtSj8dTHpyKmQrFoeW6a542dDirDnSXkx1UBSTrvJFkdQuMZq7F6axpjWR4cbxRTzfyBkm5T58",
  "key2": "2DYza4j4KWReoQ3Q3LBXMAMpNnPpK1rWSJfTAE9rU4FkyCwjwtiSNbXWV43RizKZbfTgrM366V6ofHaowijPprWb",
  "key3": "5tuoRSKs92G8oQ9pfP6GxzocnHLCAiuMaY67WYADARQwivActWGckqd7o52XvCHx57vLpCPJabHx9UDaxdhqguZV",
  "key4": "2TSFRpx7dkfu4xKnwxcx34NSQJqC5unCcPiX6vAGin2FQgfXuhXRV5V28oHBHq5N7sjedS4VLAuodCwA7acsqDei",
  "key5": "3sNM2UxqbnG8ivrnvDjAzbb1pL3Pu2S8FTxRtU15P167voGEq7ox6MDCDDkPAYPNYVaEUvUzNDFEDrK4CoLbwzWr",
  "key6": "5ihohF74Bfz2sSHPro3U4aenYa5SxU9sjQUx8m8zvxFKwfodHkgqv531NGpbLhqiGmFrUFNTfdaQ7D6HFjV2YkG8",
  "key7": "gme2HEAs91qDK7EtZ9EExfPqeATNMT1sDDr2ysMyvGVYtuR1hSDc8danCHfUT9CXg144TTtTr8wPjmVcNMcZYr3",
  "key8": "2RNYcPTSfqHDsfmwyF2YLZPTXQMCNRspTFogcHJDTsx1ukk1pkrC494pemZ1qDiiYmf68J7DC3nmR2huZuuLxuSm",
  "key9": "4K9Qfty9WdzFcLivZ2WvgaHnnyTVX831dxuH9nawAvGJZf7EWpk5VMBkozQXVStY5yGEiw9cFU2qyoA2BGwBskN9",
  "key10": "4BSCH6tY5y7LkEd5RgQxUrk89Rn9NE89kw9iNF4xHH85kfSZbdnj2WcLxPcETfGtPxYM7iVuAiaJUYbi9Dnms2uv",
  "key11": "3chv2RbTkLjBbG4cNcvUJaAWTaxo2KXiQEf2QHY27JT3TnfqzAEkkraCJxye5gNZ9yWHSaapdJqvxGN2AK2WX8Wx",
  "key12": "52gc2MQS6C7oP4yrf2T9Dx9yULFJ5j9cf5Lp8i21eUGvbPp8kU2t77D4wxtvPDcxNMHwdYFqnnWSJTx8acbSgHYT",
  "key13": "4DrcqpFkoeX6jgxmKhiyu7N6U4sbq6RLAStR6jym1V3xRApbnoKrAh5JrHhDzbmpFfCSuzswuCQA7bH5byaTkRbz",
  "key14": "C3zSXU5E8A94N37snjo5wt41w51HjnAyvAsuZ728AhKBzEgRG7nianDPFtG1mzk3a6RhYutniKr4W1J2vf8p75v",
  "key15": "4mDLrxbXdLcxQ72rjmb1XCqtkFmxDrvp4mrrjTtfLa1J9nJJVG9u3dtQPSvfdMgzaAW5DtMNHjepCB8k4Ycd3r5m",
  "key16": "2G1sgbozZUijCFAhnNbGhs8FFXaPhpvPj1gRyFdTwd1MTvuZ2gaP7LvCeryuz1333xC34bYmMkenVBXYmnZNqqsq",
  "key17": "3atgDKLPS43JiePnUSFnqTM3DhbzM1RRxbRkcskzYDQFqCJqCWnQ8DPP76ZhpNoK8jDWygEZbwRCsY1nSsU8uS7X",
  "key18": "46WxcDeQe9ZcjaMbTMkEoCHpGbPCsTBdwzVYssPoZSKpLsHcWqipQcz2RMrjBAJCSAmD25W1bDEgqcUth6ifGmDR",
  "key19": "34Qk8LpQ76626RC5QvxAEcQPKE6sgxLd1sEf7HosamchZPoSWDMUyvx86ffXSBAdGi4KNqYQk6MpZow1izEVMtRu",
  "key20": "YQD9sS6w7XUhBLU6XUBQzYXrpC4d7zharsiRu8NR2FGaqeg6BEHNmKJ3z3DFJuhor1RYtUEgwdFiC6Po1wrYgt1",
  "key21": "4TRvoZK8GHj6QaVG68Ycg6Xe33RBHz9wB42J5ioBtZupvwaDxudva1WvU8Am9F11DPVtjYLVzE3QVZSsikWz6BM8",
  "key22": "k9wVoRHRGuQXYpecAkEUHfkabpsV1nGM9dpxRMVkB1jhp4tA3YPPWKTyPto3n1qwgqA7QyFG2xGyLXMh84BqRSX",
  "key23": "2iEuaYUedGi63pE47UoGQ8T15wQkT9Lxa4QtAfSQdmucTa52kXdn4AzBRfXshgfRkfU5HkHPPm2KwjHshk13iC95",
  "key24": "5H2NDc7xhRtbyn6R8oZbu4b5KBYcVQToHudrXtSkLUEG46wj4RGsSQQ5SXc4kzqSByoEigsaLyH34W5uFdYz8gnA",
  "key25": "2LinXNf5RnzQW3ztNQv79aqPXeUGvrVaEecCZ39Qyt4bNL8d33LF9ziLuox2FaRhaYoBEe9rRjVm4xzKT1YMPjbu",
  "key26": "4BMYGLCVTEs7iMu4PXt1borNkfXqsjtpa4wtkE4B2dpGqJyRFDAhnR6uPmugGtZMDsCKrWqfD5AtScEFobeyX1bi",
  "key27": "5UTAdyS4rTUbe3LyHpkQTZHnNqbwEwmR5j9qfJ9RPycc7chi7G81xACGQ9SNDo37HajYXR1XsH1VT8GFsK2yA7pV"
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
