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
    "3cbvX2eDXci6qRsAyLNVNDQNJ8Z1WQ4ioRMrwtSFJp3rJVPc2ooKC9KytvDyKu4x3BNHsB6NJNn8WW5GQqMNZ41K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jhbJxf4Y1amLxoDFGhYBSWoEsKByWiTpQbXVQ8vtQzAQJnVG3B6ymRQdzubcRoEu9p8fWcqgDiKF7fU4FSLj9jU",
  "key1": "4y8CWq9sXoctEr8RERQLChKBzFYxqG92PmZVibbzK3KqNuGTkuPSiKR63iDPXFqJj6oRYTeojsCTwpTHtex6shvQ",
  "key2": "4WamnADo5wfbnsySxRrSUoDoQB6znoMnMBk1XpQBSuz2Wp4zaZKG1mzyz7L9YXQwDc2zFKeB21NgQqf1vbPb2dys",
  "key3": "DCncJhT1mgmPWZ8BiB4Lk67xoT46zzym3NqiTa5j6MMeDqEsFpqeAzbLoMwoZUrbZgmH74mfJWRtgEaESukhex9",
  "key4": "5xE3AKYLVdLntc9XXEw9Sgsys4RVnmXmvVa2jDjbw1VaU7BAXB4Yq4eyGfeeKyqCHa4BEgUDqMd8ujuZcKbEHC4f",
  "key5": "EBKsZFwdVHSiqWnXvLaMLDGB5X1taAz8YJwyQNKbJn4Eb9sBeYAqEkRAQpd9BbLdekFdpMQwaQZ5CEtqTYE7tji",
  "key6": "25GtFXUKjn3AwYwwK112uTgqfmHTZThhbwojGKZqyqPRwBYqDN2PdTxNH993SWYk6tbBjLsC3tfMAYrPBvAxjmLv",
  "key7": "2MDBDqcU4kusYs5azsaAmgFXQ8Diy3pUrDoTZwtMmDyL1caL52tvVsQ2DWZxKUQqoMmuKvuCikwLx2mY68g3ZLMh",
  "key8": "51F9mi9UygZxZdCGL2Kp1XR4Xc14wZPskLGyZ6QsjfSH1qMvc3tQenDZkA2SaxDujTUn4iAxCY2sF6PaL5PpLwTT",
  "key9": "2r9UvKNPyG6NYgVqXqRPCL45mpnewaZroBp5ztiizMKqRhao63eFYqfzGikz32SCbhoexiSLz37SjgmzF3eqr76c",
  "key10": "LtBGGQbMXnE6Scwvu6P56z2UZvEoA1hkANNjEPEjFT9xfJxF61MiqYVwtEzVDVbxWButC9fMFKWmar4eGAC4gJa",
  "key11": "4AXbMGFxH4aVfvGjjJxHj1xSPrqDSogkqoGYeXhX8pmNRLYjmy9VAKAPERqXSNYyAXSE1coMH1t7rv6qi9dQakwq",
  "key12": "2f2p4xY7hRhcTkexFgQE3vQdxEQySgyBZAS3LCiLZzWHSs2myaGHaxWoXS3YDrcoPAjvdWHrbLUeogbtfcpdpxYc",
  "key13": "cbympWMtHHVPrJFJVyLM4aW9Sh6nLdg3W3Schn8otZWNTNQDhXB3bLhX95dWfZWCVGtgYxPTrdAAbHZnpFBq1TB",
  "key14": "33fxXEmaMoLNnBnfMWYSPNonWgGFRPBngUvk7JbunoPF7ZQCT28JCMWsrWyAPH8pYcKVqoggFbdHBEcKhK1XnTQi",
  "key15": "55neQkjmqMPhmb8DPNRKqhW5J2dCjtJ12zntc3792XH1TyjKYskuLcX5gLLWzvY46qrTJpgse1AKdfDxCK3T5yn3",
  "key16": "BuvDb1oueENPDmyqstFCaBmPa9NhWKH2KR3SPyYAnFmxYrfLZzgiFpToyV8cz39wbJfDU8cYSsDYZCrjGvLQ3Zd",
  "key17": "tgjTHztUsfK7mShggFKXN7WH4wv8eQm4zPhmhHN7YFBrUQKCThkMnejpt5WW2xBwx1YNMyReAfwW4A8x8C2oQC3",
  "key18": "3Z4Rg8MWU827qDtCrTqMk4xS6gNA38f1R4k65pSF6yo19aaSFxjn5o1R2y9dUWnN2UczsvWd6U5YDvtm6ZFJrBNf",
  "key19": "44wSkpFBjfMyj5nCVMvw96PMgDmwMBYEPwKBAdS38u9A6ZtciVta8hxz7RUuw6XSkv3LZoCSaHjP7mneN1YowqdC",
  "key20": "3kFGooVszGWotNRXxvcL7AZLVVETwVyo83uoJYdfb2n7qk1g6E5YeoPbgHqG48pg8tmUrcZRFHSc2LLyyrZNQ7TR",
  "key21": "5CVtQfspB1mnqz1fuNYYzBD4eGEN9V3xmHfutUUUddKGVdArB5KkimktRnQyhNW3u6ufHj9YspbVkxZKCak1HeC9",
  "key22": "5Gv5KJdbGzxWxTKo952f9xgWRHCAbXJiKYZJS1PaGhidvA64gYh4qR4PJ7j3CPG5r1NYPjUrAoPFTVdSTivAUkfW",
  "key23": "4XkyFtUhmtaCCyu5RhhmEsAeYp9eQih5whYFrojtQJgpSqoZBM1RAr8dJ83VYB1MLGqHdo4dcMh2NrAMnte1HPLF",
  "key24": "3xrmGmT4LvaAFrSPsW2EnngfknYZpTYYNaBpMvE6NDJUESEn6r8vGEtHnCqD4sYLvnBZog5CYtSXq7Q5HNExtX6k",
  "key25": "2LUxUUKcoreKFsxTMVPBEB59GtUng5b52hf8TqPPpEbQ6So2oKfSk1V6nsTwugxgNPMiLBJ6auc3CSsZk5mnZC5K",
  "key26": "5Tk2sRujtCGyCAN4dZ3yWnysjtyk4dMPVtjDFNo2ubZeFJgGmjpbhZDsqiSUKf8RG8wQVZCnQdPQFdLwdnePy475",
  "key27": "JTYZ7hhAZZwPS2iALAC1ggv9zrqapdFpZRS3w4HJjAcgnZfab3pvpbkCr4Y6m3hUug92tnKQRn1cXgEZbcYJKcL",
  "key28": "64dm7Q9c7a6V7SV2yaKyFRAPwSQPDWnSqNwqsFm9NVr16D36HiNiusositHyS4K3Q5XAe6iL7rj2j5ucmLWbMKx",
  "key29": "312Vceiut3MVZ5miD2L51QoXHvcZtuPgUEo5UU9tTd2SxCm8EsNA1KYZ2SAgZMatpMDeH1FW4epnt7rpPfec19Aa",
  "key30": "2FxGPx8sR2EDibcXWGCgEYEnaJUrL8D4D9ZpjGyaaWQhLVzWe2EnsfiUV4ExUaSpGixnFbcBQ2TbngLE2E1D9HsY",
  "key31": "3vWpdGnwiaRyA4HQh4dhBThLU1PVFiz6zZrb24Dz4H6aZMU4sUTsMVc4WUToEJrYJocWgqqFf1EYwRi2aMQykFBh",
  "key32": "2M6BmXqabvQZFTfhgRDwECLZiMmxUn91w4LqKufb5dccUAVz6t9MKzMYEQQJYQgFmPFGkY66QhTs5G647akUFam1"
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
