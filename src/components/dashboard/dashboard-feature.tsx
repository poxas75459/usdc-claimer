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
    "2i9Bph2XfyNSnvAgZfJRuM5eHDL94Qv8kfyZyAJSnSoLSt9F5gGaKMphEwN3sFsCL1tDXSBpSL3mwjaB9Zs5Pz61"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BietZeCCPnvpbcHMDif1TqZWNaT35VNHS9s18dWmnGZ8TeeLUCmo3tMoBnU4EeFi2bPPQqoNJYHeahP1yetWaKy",
  "key1": "3dqnTSH8xfDQC8Qeva4pQWbijFBhLheE9SpyhqpxN568PM9EsUfdz44oXahEdhJzgmaKwCeE8DLAEDhAHU245tA4",
  "key2": "4uinoR99ZEtRMuk51wywB3MoJaAiq7HZqxMHhA6qg8ycd6NEptMJH1WqdNJyYn434z5geSUR3tsCX4n5jypFmx4r",
  "key3": "3doaVqAzKKy1RyXD9ppHoc8NLMQzry4Tfeu4S7Hc8Vxg7DmUtneu3HkNCAJU2aJQwjUWe7d15wfKy7DFdecNgAdL",
  "key4": "4XsxPbevtGAANyrpzhvnK98aGJMr7WxvgmvhS5NPPhP41Ph7QJ4STD3EwXvgWHuStf1VUNAaLjXUkXH6YbLvYGGk",
  "key5": "5TwAPE8NqfEs57FnM7bstNih3J5rvXof2JUpsqjFSF4D9dwwvE7Xtu7beG1aGwqNqZX2it5JRKrhavLzwx8VGm1s",
  "key6": "mxq4VT9msyKV2xUBe76aenCiLjKdRYjVYLfMZXgPcyHtbKBHqtu1ByyJryiintTdqc6eXdDviLXcSeRHn77RxkT",
  "key7": "9zgWcjgQxk2GfCzLFnMRQ2MnzH5zHMVkNcS5dD6yegQRAvhVGjMw9adE6hLRAWdJUKMGcffSaydDn7hHwicB3p3",
  "key8": "5aEavGaZU3Nnb5Tu1w3cBpE5pBU5PntSMbApfKdCAefVRkNanU8Ctqt5RWtQAT2jL1Sk1CbXXaK8EwTHiHvvFPcP",
  "key9": "4iJFghWiGpuLhwGdPZwR27xY7i8uasYYoWzHPzWUrpRZ1dFzG6AAerja3ap7yPHfuXmoXbnJuTK7bXv1BW4ozyJh",
  "key10": "5h8sxMukQQVb5WDkTtYJNwySeVHMp6TZMvJy32Y3qPLHwo14eni1p7MGxDH51BFK5Db5kFUszdU7m4xPtpAYFpEE",
  "key11": "62JerHbshEigd3fkeXh1CrnWC3uXC3YaWz841jBQniBx89dmhi9DNrej5ZvtHhT9sPytMxRAPevbm8AnkXkbkZgd",
  "key12": "XhgrZWGEGjUKBVkrd3b2bTD4CkQqHbMXEgkgExbmvvLetxWjM8JcvZN1j9mJ17KijiK59X7EWjV1eJcnScMgCbK",
  "key13": "BY28LGYb2MU7ynu8XzAYH7v9P7Z3188GjMScv3cVtmFen8mXHqaFL6v7odSgiEM9dUeDkxd1qy1ooocSsQgfkck",
  "key14": "4NPonPLrKbj9QgjTni1UDDq5otAEzbf45sDT5HC1LUM8T4rZs4WryLZtmzoaiDuX3FSNCaj4CUD7BrdxjDbHYK3A",
  "key15": "3wC8pjXhmbbZC9SnUATqJmL554VuuG6FjFGAoQTecoZWjFvFUka94u2Pt9iZSySVm8bF2B7mTUnXgXdVbQ4Ppyep",
  "key16": "588tzwuL3S8TjLcPSsiJr1xPd1noBY82YvSvyyAPz6gaUYEjLoJkZaeMhi2YWmfxGLm5bhdnGkM1xD3eRiLx8KH3",
  "key17": "qnNDK32GAkDHnT31QLzE8nfGfyZSNjmMX5cVsCrJxot9KbhMvztJRJcBqcvesX5s1UJrFueBx8VmAujXKf667ii",
  "key18": "3ckV1ZJCiUGDYEpKBhAStJkGcc9oZXXoGQ7aKpHXLtomsFh5x2ogCh2PoyRFhwVjWUiq6PAA9YFLfisEJtZDmDvH",
  "key19": "5WfqEQDLtp6Urd8xsoyjyWxCUrbrSzVMNHGw96d63kn6aTB7JyckjryWJDpQYvYE5LxNW8n7syDAYZrqfqYnyTWU",
  "key20": "oRz4m8PH1GbSHBPHHMMiCTR1L9ubLY5HyNe9Rgr19rDTCLbps44m1mezwm8vvmpRWx2bGRQ3d1fxNdhPTphkkgm",
  "key21": "1Ai1LRerNfohVmFwD9u9Ms6eZzBbZoZvMvC7An14GLu6mb9LQCdTuRLLqjxMp49kZmTUxH9UkKqhg7HXsMneXLx",
  "key22": "4qC6ycJGo23P6fjFK6iaK4iDa9ULraH2xGjDn2Fpw4KNvaYPHKX7DZ88kBPmsVj9goNdTC9AzEm8t65dAXajvF38",
  "key23": "5uWrcQ3yNuF42Zp9hpf2GE5iZiPGyUvxPtzHQzAjgJhrB2oYcpxzjyZzJotMyL35J9HRpyftR7qYqdZx6CfmVQRy",
  "key24": "5fh14a1a7mLeBx8gnGQsXnmy6AsxC1amNYnURx1EasYheNuJobq3GUgA28PA37T9yZajow7Jzr8aGyDvDtkK16sc",
  "key25": "vEKtjf1tZLhaCTPcoqm8qyBBcgjz4Hr2aoSQmA6DrfKGnpWxWehgxSsjc9fqGP2DJTz1c77tdV6LfVWjceoWDbt",
  "key26": "3SB9J8cY2JS3ovAQvMRQwHXvDsSSjDDu1UbyQf1cwT8N6kfQVVchej3vtH7skuaW2BpHki3vYD7UYGCsbarNrXBa",
  "key27": "5qp733bDPAtudMSiD6aLpLfvEUTjUD3eXE1CMkkT965syFDRML9yn86b8EZKi7hyV73Kk7rsiqsgXCHnG4z3Cpeq",
  "key28": "29sBJ5fMrf1CrGKMHTMsSb79gxpbTwPAm6crghEuhtcxTwfT9CKVaYhTcmhUP1PXecSuBWaaPJv6hrvBn3RWj97o",
  "key29": "4PVNTGAHDoAxku98vifPrhgZVY9qHrPYZxD5jntXMNXfrpeFbk5aELurQ8P9sbg5xA85n5Lv5e4Bi9643Uq7kSXB",
  "key30": "RimZR9g15kEGezHzAtbJLKJc4Adg2gpTSeTFKCbpoTrqXKrKbn24wXUFg3DrSq1A1jxhVJKCjT2LPR6Mm9Rygc2"
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
