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
    "5quF3KnbjvGeqYrGWugdkSd2YncTxqMHpqPetHm3CQmLFbiDKMNZHhdUKkD5EetbSZtYWSEWu7Hmf46WsxTNNP55"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "256StbKr7w49A6tMVW1yrGy3VCGixrVWrYueWFzMRVJLSvqoo4UQtcE8PWmi8PGjfruGCauHGdqf2frmYvRvuN2z",
  "key1": "5pcuxXZZJVohm2uba158mwjArnzCvLv9HXBQLk3JokFvC3PaMQqADnrejBdQcsrbUfxCXXqUZ1uDQa7fzDn1tV1T",
  "key2": "4KbFtowHWNBCerRpXRcGazyu7yHo8dRuF7rDJnKKSXP6WL3fYWkaD8zBrR655JQfjDfyBUHomJf9xxm7vLivsgyw",
  "key3": "5MW9tUqKD8nnBb9JQAJUabZULnfmKrkCJDUAAtBvFnPJV1Q1P6LfN8eK2PkboZEY4vzsey2EV6bbdgf9bpKBsX4m",
  "key4": "4REwkNoXER58XDqB81NYGvkKmXKuiGP3ePrHdx5RXDH4pJKbc6EzVvsKLgRtgmqudaB5zuWXy1oFKDEy8QuX1xHK",
  "key5": "GXEcFp4LrVxir8ErYV5rj3Fvqy7zPcZb3m5Q3yGvWeGpZ4iurB51KotHMM3U8YxEnD4v83YnL4i2nphMBP6aSjb",
  "key6": "4ZX9scCo2QyvUrLQVZZV2gJtxEtZjvwMqvqabwya179JTAJHxyjHFdyyKBv6ZmCw6iWvtceEKrJ2h4JxE1BT7f6t",
  "key7": "4sG7rtU4YpUz9Cc2Af79Lm1YkrzShUncd6LqvP7E7tDZe2o2L4BWrFEGr55Hhwp1H7JqCmJErk8GzRY9d98q7t7e",
  "key8": "5vKX18BwPyiAcKAX9227xorSexCsbDiSzvzbC9cmDEE6DJXa68d9qSB2w1MkfrcT7PoeZQCvabLVsNXkpub4mwXw",
  "key9": "5vJqEwQFX4eAo7cCj2gfDiWunz3NF6TDB3KSeR3TURX96nvqSVuuF44kGkaphzP5e3yT5ZAn7LahL5ynuqHC95QE",
  "key10": "4t18vfwD85JpaWsTPTPE9yn8nGcUXbdab4Ti27DQCxQCS2ZGc7a38KVGKet1Yj1x9RFWPDibhBNre9uBD2tVTiJ",
  "key11": "EtN1ZCMdZUNCypdCt2aSTAVP3Vr43VEkTMv11Wf4EsUqCtc4WDfX9okXRE5nYQtsvSYc4KPqpMD99EmFUuehMVK",
  "key12": "PuR6GhT8R7cnCEsY36hwxUZwW8PKCfrv7fyxepn9VxVrvmtRg64s4sJXFCfhMC49K2TNu9zB6fLiwX3ocjjW2X4",
  "key13": "2pvsunWwwsBsU1k2f72ZjKAGPkpZj7LJ6bfxJjUxb2xYssSfYqytnpXdVvn38s2sGhfLdSxT3UtrkvQs6gB5DhzP",
  "key14": "2UCubV3uq6BEHgAZ9TaDDXhBx2yJV3g6Mu1BSs92QduFkzXrsF83xbtcHsgJnFahXFNmPXafGXKnzxW89kKgYsqJ",
  "key15": "xsWVWVmCFwwGed5mM9bKGSJYH2UZBPgvRuqZJoTx5T6DEAh9NrAmVTyjgtcU1anWeUkeXmuzyFxv4t3WSFXM4fG",
  "key16": "2LXGmCQasY4G8Fhf7B12YYj5vn5dbYMFCyzNZKk6tKvCp4cjf785jm6Yf21bK1LXTDmztaRp2Bzp18ZSzbWbWFH7",
  "key17": "61v51gCDEbLR9Q1xZbJmD2zJ11QgzSNmpraziqF1mot5j6rb8ZteP9qVB8JQ4Ynef3J6gD1YTn7gmwLktks7HfDt",
  "key18": "2JsNRzU7Pp2GNDo2wdbbGckf3AWJdiVGeEjLRqR91g7FzjEmxNNpksLWruDjGTGZYuDyTT2gwJ9FNYcvMFjxr1sd",
  "key19": "2LjxG32LZjXes31Mbqr22FRFBgGCfbYDoRCNe162vf4dcd4uJBbVQmDb47dvT6FAaVtGfGwyeTD6i6HWVR4EYHQj",
  "key20": "3EkFQP8Hogk93LcLZgCSmcSbna44pq1A8i3fHBz3AN9B2mbJfSA6on4SiR8m5brUgjVfh98RHSGBvZuLGLQpfbHS",
  "key21": "2LBbYQgtngAymhdy3U5vfedBEN9BZ5VYY1XsYnkexamjocGH1BjreoYNJcREKYLJs5E7LoSqn6XVGNPUDJAKSxDv",
  "key22": "2cGTvzyWeRTg1DJfEmNioWPfXdBviEczhUCXsD6n2B8zD1J2mmCZgtofaEBpRQ4NbrQXy1cjc3aLfEoDParscpBY",
  "key23": "5wUDmsBk4j7qDgLMvqmVD7PvuJFnUMMRch1cEdKWj2WjHCbw5grsY1zc7oBiEGgUHQx3Ps56kwXaY4VbyEAYEJJk",
  "key24": "5qpgzyu7BZgadcBJjoykPKpL8XNNjvmeTaN3Heft6sMKKrYcuUEJXUf58FEFECVk1tL7aYp3wYUd4TAEDWqkkXRM",
  "key25": "Msg5cuvbQuCViTiuXrM4m5VkfZ541L9CtzGFN3DHjrrWAr5zosimDTKRf7VW1vLhG6CY1kGj4tFzV2camvdCioc",
  "key26": "mpCvjQLfHQaAmTGv2eYMm9WGXLB4ZcGZHwag9WK3mQs92sQ7vLXFJMJeMwF8PC1Wcc21SFK657ASYC6UppP9NWb",
  "key27": "3FBu1g6eaAjqhXgTdTzV3fTtM6ebMLuAsy7GFfgoxB6q3bAia3192eKaA6zaWPM1Bicq1TYcD2p26ancFFKFfbT9",
  "key28": "4QpdsfFpDpWcfzyqohwUgLXr5GK9DDHZb2ZGo1rZxJF8F3oZHMVnwFjBDG4WmDF6zRmxL27DEEN9eAWf26DtjtCy",
  "key29": "ZMgYRZMFdgTDUQcL99j64dLDuKspNY9SNXdg26i2Vu53wLSoEwuq24iNLx4pVUHFdFRYzapAt6oDqs724aeCdag",
  "key30": "4GQRoJgD8YYG4ioGE2WJUTVRC8SNT2gJy2CdoqiTrcuG1nxFB6DgoSTMZFmh8SvBmT8FAdmwxMdG3e7qLF6csNHc",
  "key31": "25oxaLEiBkhvesw7G492kXawyWn9Xqg5y2sE8jo2CeUP6buDLqxL1ub6c9gdNzMDRL4CurxHMFRVeGdZ9TLmay9r",
  "key32": "3fJdGYbzLTwFsonMijKsGV6ur9hbuR8T4VdfhLRFnSHTVnyEsHWBEENByzTN6XpdoVNgWnBLdRiPNta2Skk96guX",
  "key33": "3BFZsNJ2EkFNz9TbiVjEiqjXdVvGqgTnQ5TFB7uuz4aKXLTEPZ5BTLnvYezReni7UsZSdJKL7kWL57MoP8M7nRdr"
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
