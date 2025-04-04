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
    "4nL8pcPJgQDpcJE1Tgidn78y8DoaFrQwcXGQm1Pp1XDppqRJwbHdHNXTufx6ysKm4gWRdDgso4jQaBSEjprjJtsh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wx5R6c5V4fUmbvG6kxnvkvw6BfJbVd9CdMJJytPPwr9gscdLRqXR7jVAj3UoH15ZcdMVct6iPQsVDeUm5CibYT2",
  "key1": "44c4fhHBBRNwdrYbReDoVqwBkUnXghEraRVvCQMUgwNLrw5zVJN5LQG26Uv6XLx4juyDFXaz1qmLCWq9ce8HVdMW",
  "key2": "5CEvRfeGoaqJRfLXooGRHT26P1uHJib8ej5oXDEsj74v275VrRbf3XHm9L55AuuB9NtSukMkHyc6pxUJ3uwVKngo",
  "key3": "2izGA7uxMJ7iGnjmNVDDfUFFkwkm4aqSc7nixbTRPvgSpm2vUMzTjKrcsg9HyeAwq7ykBADZWcwt1havPWDsedk5",
  "key4": "5T7ANR92n9R4ihdoecogcvTPrVsrtZQbo8komR9woyzRtdXsTFvXTvveL8CapH1GfDH6hY8Ubi5ktbqddKX3Tp8y",
  "key5": "5ypPmfqBcTyfifBgZCmvRxopavABTJx42c1UshQGXWN3X3WXmdhaA2PBF87CMNVXLkkGT18xbcmEvr6rjUpv1WMB",
  "key6": "4PJj6S6DrowjrDiuF6d91VkszRydjodN4RJezT6Km7zT5h7Nghj4tYsmaSuniureqqxJZqYkRrEHv3S3pVHQZHFw",
  "key7": "4fYVE5EmvsWdLgX3HjEWdr4dQq1ZaUUPiHeEEHdu8VYhcmk1i39SWMGp8M33Fs8L4ESWBkH6iV8VGfUiQzn4xyud",
  "key8": "5ZBowF8JZR2uniqvrLFYhvDNaQ8MBsSGpQd5fJrqZ79KiySAyb94W5QjegcD9r1v6ink2KfbDK2zLXokfiW1Jg3W",
  "key9": "5ppMJ2TDiXBRVNEdWKiQHVeUvRehexhbJ4fpGksfxk2xnENMXQFDyDNb5zZho4v7kamwwxfUmBaoYdt8fGoHNpjs",
  "key10": "4nA8R4aHNu6GkGe2g65xUjKCNEdu1bb2QGuV8zJr6i92SZptydqCS99upsQ56yBvMxKSM37jACbPtEVt7ESvD3Sr",
  "key11": "5mVyJwEYJFtYPpXLcv9HU6ThnetugF1yNNNE76TExQqGUbS7rFFXTWveDzs8opWnPUBjPc7DBy3fNX6nJdXzesMQ",
  "key12": "3gKyrokpUbsfJBwZHLKKtg4BaLLjRjcfTy26Vyr9yzSebGETAyuAi82MjjhGpnt2Qkzt1J5AGYYzfGUX4YteC5kD",
  "key13": "3TjVZTcDEV5F81ew1X2B19Vr4nAa7PdbKqHgKh3KaB1TXRcqJJtCHRSmDPJmViK8VpWf3ruYtqFCZZ6oPVtuCQjT",
  "key14": "2PNUkfYEAzfnYZmnSRDecVRgJD3xbinpe8KRCbUXVKFozQX32MtH3htYVsA9qM7qQB9TaacitgFix5GZGCCDxzVq",
  "key15": "2cjBQfD5CxeLmNnNTficokqEHA55uUxoHVY1Rnc1zz2tz9bFoh7UJHSPeNHGjiQ4BBuHLtGyYTzwWnn4sBa6p67o",
  "key16": "3B3b4Uzzs5NKiZHZdHyw5xYCA5ZTdVCVtkjf2G2N57JpxSNJ6XXcWWrkNA5VJdj6tFVAr4piTDtb17uKKJQLtP4C",
  "key17": "3w1CYpH4EAxNLRevhSrMxHCc5L2TKnpf1sEm2FEFZX23Z5QwAunjZMszWaGy846w8frTC9vb29efVQ7KubGgHCbp",
  "key18": "3oUhvXDye8kC9vL973ho8nbH6qWnWo7SRnewjsV2n5xqU2EQfKrTK3yyBhsDY3AYdTCngkH3NyxjJDBFb6a9D6zj",
  "key19": "4ocLfSh3DAixTBAfPCb4UKxkMdrjRDmUHeJe48gfJhWitp7CmUJcdj4EZEw6q6qdqBikKAeies9km774XE2ghnwW",
  "key20": "3QG8GhJtHdKHz2nvcQY31K1Sh42kgQcY7WiQz7L2tnn9Gp9js5DkqGroXH2W3u3rtdvAGmRdKpGVZYPBj7KoWCGb",
  "key21": "3eScXoWxVbT3KwgPz5peumpjnJZFZoW6Yjizw1hkJ4kdna1a1J6Bq6jf6LHRsaaeVW5jdeY3sKgYFC7MyfDxEQE6",
  "key22": "tLLe7SUq6MkscwdAaT3YLfEnvfXm3Nkqk1qZF52pTUoRnnC7E34Xr3Arevut2UteNAdkmgEWkSP8YF48Bg4bkmp",
  "key23": "5w6MJyrQgsEXjk2JGYgCU7jpn8gGqCataj53qmRdgRSfra1LtfdpMfshmWbdcJQNMc9j592PMYYoyD9Tqa38SMue",
  "key24": "3S3eEBDWXbH7V8TcMb4ZJtsLCFVbwBjWwNHo69rMDPhR44rCa475CG9QAn89wvkvZ8vcDLpzdqhM7qcrCVDRHPwk",
  "key25": "3rHLBg15i26wPCRXbWVJBN8sFsXUpRfviAtGip7RtWDnZE3njm2ZeXUjeUGD8bSNLphWE1VwVAQLPAwn8s1tdmTb",
  "key26": "2Xp9YsE7QvLs2RyFodAh3ZDPX7BsfARhpwKj65bRxYsHK5r3izWen4wfeL2yrPdgvXSPoZsg9xHkVJKxgcp6jJx8"
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
