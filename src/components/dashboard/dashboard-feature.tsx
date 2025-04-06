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
    "K5sKA2iJGjk3EcD7jeaXmoLjM9fpND3yWKk4Vg35noWzsQobRTpM12snxme6sTfpSaJm7WYicb6U77Q5t8QwVj4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ar3ehr51SpAcm6kgViZyvFLrkktdk1aYWKUATt1TV2dUT9QzDa7QeAqC2xBWs39MGRw6UjTEwxBQcRqxiaDD8Tu",
  "key1": "48ofRCevP1x1VncezYHcCAE2nYA69TtgmcJqQsixCjrKZ7Av8MGRudmfXFELAXNmw3erEoXLqHRWBJaVgsmVi8iA",
  "key2": "4PMVwDT5qDtkBZL1D3cqB6mr6jqQirpzKJhacLozrUFFX7vLoUrjkbiNpUEDGim2DKhiart25oB3xWevCHQo5745",
  "key3": "5pD4UGQKWdkUqsmNBU7jxrB7vc1pkEYuJcnxQcsMcyfYmh9D1pEbwkkohBoZWgEGZ3XiWGb3KscednUd9SD65Kb6",
  "key4": "3ntdTWqUDjP6NbZAqzZeqMpcWmuxRaHYnH7FsPXJ3wTuw7wwaBeaqLYHZy3SsTSVT44TzTwnh5cgtCC56oN57udr",
  "key5": "pMW4DtwPWW6X64CtyXHqpPSR4cMkiL95RixWsGr9sFC26xASxPuzhozNiZyLWQQndB7Dm2YYN5jDMTHMURJc56i",
  "key6": "3T5zEx4Qe9ttTKEyMcUE8RF92eLuFgp36QEmN17yc6P2ZPoHPsU6D1yGVxuLKX4i2PRXeG4WrwNdZQjsewN3ufdy",
  "key7": "5d8QnqTgWK119Fop1rb1VsrofMJnN15ugKhAxwSUPkQaBZv1f23nanFg9G3AhASEY12FDhCFKLk8LDooe3Fkn9yX",
  "key8": "5RtjNx6A4s9yTPysBRTaCUdtjoZuzeugzwhYBuEZujnrzBADr2bd8xikyr45CA9mRyNixMMx4rCRTw1ZWd9Vvpm7",
  "key9": "49rkakNgjNwcnxz5yJ3ewK6Nd17YK6DfY8r3AowkBH5RzanK1k1c3i9FBeLavpkRMePAAsthz316xs1Ua9dh7abC",
  "key10": "v5bLG9VftykSkJR2Joot6WukWMHBzGVEdr7ENEALx2T2WQBTWF3b7SUGBZtLWqezVoDgG7Vo63cNbAUtNWxBLEE",
  "key11": "29M1P2buXBjPG998yHdPyDUtKLb3ysrgEDxkA6NQY4kDxeMnGS9pvALVXW7s3AKZo89kS25sH6ssj8LvaVH7rK4p",
  "key12": "3V9QSh7sQpLkBJgrEooGuahiLnLmXEg4YF4S3i5ZSR1HM2X3tWqj4N2GGC74oiNLE7Ufyg25moan1RzXgitkephT",
  "key13": "29rBxeBXNUPMrJDT5CQwyfauZjkqCJFryxV9DHie2QAiPLqbs85bLub5FLjnbEVQBtME6gqjKsztCnbhM1k5p7nK",
  "key14": "5kYSnwqv9c4URguz6ACroihVMkyZeNo9JdLYtVnWnPtxDavURMPWZp64PtkWTsdrsh65zngabVedSvZp96FgmDTk",
  "key15": "4HSDVj1HbNPztqPoKqmGQQaKZqk8TXGtMuuWwEGFCWHfoUu7m1NcCMuoCkeMGD6SWcEdJnQdQWYCoiiL84qHKc3x",
  "key16": "3pyw2AEkFSFX7H1qBskUWpAaM4YDLM3PG6DYRuybS4JY4DD2xbdbScq1qWV5yVN4ih5bm8fG8yNGdPLQFspCRdTJ",
  "key17": "4383iXuGSdZ13KcjWrEswtUELxFiDE8V3xVJ6GciX56ZUqTKg4eVTo6nstZtNk69cPeLVMZCgg2xSvX3Qw26XT55",
  "key18": "2AZm7rnHch9cEVQzg2BZGBwegdEtUdP8GrQGwCJreUaJbopgTxkEKS4cfCavfgpGt83idYPv9VocUThF2RmFJcNJ",
  "key19": "2153YNDZL4Wki44cPqLekRbnjL11gABVQ4n3GWP6U9QcWiznyZz4SybMsNn5CCcHUioqsxfgfKMsTuw4pikPEVkA",
  "key20": "5iBWVF9jb93AL7jhfxHUnCogf8jLGkgPCBqBYCF564gdTGaKDNjR8Q2caMHE5DpChXRdVtrUKcfMB95gsekPgdBM",
  "key21": "YDa16Ufj9hRfC2nnyvTQwbTk9qEHS3cFHQfMs337At4SwYj21fptkJcY1Pop9aaaaT2QTYCrvcgCqKrUCaYiBq5",
  "key22": "zCMioPNu76WyzHuF9Sdkp7yhB53rRaqBWmmWUCE357EAV2XYw5vVRvikfqoqSVLJZ2D3vYjWoFERaGoa9YPSMzt",
  "key23": "3EmmbDaKzWBivE1fQST6BFHYRk9nTx6PBQq8t4SRsP1vCkpnGTosoEJ8fZ67wckj6xTHDGP9eqsZzNHq3XTAF99A",
  "key24": "m81dzHSWPgozSxySqrUbggCMteAUezhu4uNGUJhcU6P2pP1yoySBNvjFcj9XGvDzy5zA9vE4zzdGESX364P5hXy",
  "key25": "729EGZXSMF8oaFBTiX3D2K9LuCNRmFosrcsxXd25vdefTpjhfrj5s61fipYpcNnvJ7VPUNYDXoLZWKdxFzFfLKW",
  "key26": "4f4X3Cek8eiwgTx8y6YqX3JdBPbMzm1PqWdCjkyWmfAncQcqn6qeM1pYHSe9q58tt7bkDbH6fH7TMtUheaB1CQA",
  "key27": "3ERt5HQmdWbhE3Uom7JJNiZg79SXtv8zea492SkWAJ7tbfPaRoHJgZyAJ3cbQ3sENRafcaQtMx8aKdDEeVJ2mmtC",
  "key28": "4Zc1vRJqw3GdUhgtEsknPs1ZKwNdLxUY6v3iffNiNxfH2RNHccsnnzJNLuq8UL6HR2p2eo4SqgG6GMTx4RWFxr8y",
  "key29": "3BmucGvMfjFZzKWf84x4VDaQq8JtJse7eNBnGjFs8V3GhkFsVvPvKJHtAFCd2c9krv8WE5hMvwfvYB4PZK8fX8rc",
  "key30": "zz8XdB7NCyNx2XDpSoeEdkxbVbMFXEJpTBzqsv64zcTtY5jKXF1WL8WgHFQBodEHfv3a6N3v5DomfEb41pofoXn",
  "key31": "5T2RzkchaBpZkzvNY6Qo8xbf7ygq35ZBZ7VkXmDYScG4ywivCtv7pWq43McnRqUm8KfFsYq5zuEUdEogHk3JxGuN"
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
