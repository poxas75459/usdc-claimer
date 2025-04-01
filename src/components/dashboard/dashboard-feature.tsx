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
    "23tp3nZvb6pGoYKXRJ2dc32xTa5DuEuNWCN6iCL3MoYtem2j3XCyRGpP49nShDCE3T8Gvnp9WAq4f9Lsow4uL8B6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Xo7N4pdBk9xM7Mquk3344iKX7i89gBwtZrVjbnMU6mufakqVYvF5MzyoVCdph32cPYS3Fc9wsssYFfpsGkPcWHW",
  "key1": "4gBUX8dho7ZJwBBrcrzgrJXFY1uZ9hbmq8vdsTNGXFMnHXLH2NyXWh7x6VoYpgQ4kNHV61X8FHw5ruanvK9wcChd",
  "key2": "6cbWjmWmPAfmDxQyohYJsCMpyo8NsPo4t5vKyLDiV6uihLGLPG7TLUmsMcsm6G1ubXQojPzWJ3RD7nqdaUyGPHM",
  "key3": "5v2DHznJVcEdtDpa6dwzrJa1zAGFaTKJ9pdpdmtPzEPKy6RMiBkzZ8wA9pxFSXPrddukaSqkQvuWKcFK9nyJrrLf",
  "key4": "5MF7VtzSdeY9Pv8xP33FoN2j86nNai3zgEP3GBASQcKjfEZxPFcRWCA9AMhBP2exFHTMYvcD3rtQSDTVVN179Ez1",
  "key5": "5MAXefCPRu1V5vRa5TL76hWH1aXVHbCE9EJyqXZfSEdT7bJtiCsCsyQqUXN1ym1ByJTxCRexwiQmE4QCHPRBTx33",
  "key6": "3K7NpZsPzLpGgErQKuoDnBDYX21irhTjdBbzkgm8Qx3Xp65Je5BWK3qHvmpYkLF8BoHgrX8ZCNxQR2gr8iL2Jm6L",
  "key7": "5RLoGGULXMB31o5V3hLqp8ALcG2DueHBkwco2Z5MiPNdX12QURWGqGeaz7T7umAM9UoAyQFqkvKubBmUP1yHbDKM",
  "key8": "36XVYhw1e5ujAhYiuU8HjN4vLJ5Pq2ZbtqnhJpzyCfUK62Qv4cxby4NGv2xnigkeKZPeo2btueVzbT2Z2CtpzfSf",
  "key9": "Ja51DUpsgP8mJZsXBRWpcyLEZzUSZpe7HuM7bgG91JqSxs3rTBua5ZcL1pGDhz7YYL4HTpvdXD5GiaN2DXgaR1L",
  "key10": "HSDXxRWNE2TuLkGG8KWkVnAHTb2ABFe7LzZWyNcJxLXBaLVzpz5QuzEoh7wSZ1t96Fod48ciT9c3geunmAL7V31",
  "key11": "5r3qMoSiU7oPJp3jTWVEAJusKKa2M5fWPz9WwrcMp5r8q83skBT69C8GzKB1nTDSNiicaSUECTEx38UfQmErxQE",
  "key12": "56nkLQT5vs7SZbGNBjcZBqtEoT5kN6uWuxsSh43hHa1bjuq5rzjF69SVF96cRs1zCyvaew82rqXExgZdQP4oRVe",
  "key13": "42wdtqH8d6ixMtFCrSMU2fW1yF6AcirBapVpcDZPFa7WjVcr1oC2k885XpKZNB7gwDNpcskwA1S5UBogiYX67hyB",
  "key14": "55waraGPW42GbjdNq4BiyaG5MHB26KXWFQm3vfaU7PQg7KtHX4ATZf7XYcnp7nnzVnDKVm9Rm1pB5YZ1YW42Azbv",
  "key15": "4KwX7ipB3dFdDT8gEwA4zpdQTQq6tD4D9627AKPD9FVfBWGg3tVZ23sRs6AgPrGNRV1aGgrxjkSfwemDi6CnVNuw",
  "key16": "5M9ehCqkRpFGcuLQ2PERjeCjRameWWU69Cq2aS9frCqdkPTiNbkx5hC2XDLKdfpa2o9t3gX2zTki44c52aQDKtp8",
  "key17": "5CmxUXqRTzPVbEZm7cepHweyzcBQPfXW56YNUiYcju4CRNEfH57iCqR7VhtmbQ1yXVRtmq8XPYsfQfb4oaC31cdb",
  "key18": "5SngjcmeDCaL3qGkQy9Fz66Pyne5uQtpU5ay52244fzbfocnEJ96y4XhWkzbxa4EKJ1sNZ86jUzrqcW3nj2StX7A",
  "key19": "26omJYLg3VXmzKhTny2L624MuFQb6BCZ6NCo6sn7VMUYK4GmGKeMn2HJLNoXVzKGrTBxj8FGV7RFwt5CGkHDebem",
  "key20": "2DGCzTKQoyQQctLPqf4Cwk4zXfHeRtbNf2tk7XKUknNnE8Fhvo115BacQDijR73ptYBrDYZKkhREXJTmVSueHhob",
  "key21": "3Ac9aEPJA3uMazBKGvy69EHTtTjbVaNWKv9pyiCFRthZSpwc2dExGrHbca6YB8GRiF6xqemwvXrUxHdDPCwjUhwt",
  "key22": "52YmtxgSGx6wKZACMxc3QYQpDQepbXnKsAJZKAoyXvUF4gMWDshnrjsVzRJXpTVf9HZNpaAR46hPY4RgUBPGrzjb",
  "key23": "3CGxETv1mnNMih2ek9xo8QuNeiiGzaJEgJgXbYhDX8FttgtdLQpcc7vaepf1exJWLfd6VPsMDmDeDskwhYkFkxdz",
  "key24": "4jjCXSGExW8NLnzGzcLA9PJMuZA2tUnARNzbXuhg16GeHLFLmqGBa3HLUuxSQLQ5NDpZ9iGgKtpbWNbbeiS595pn",
  "key25": "2nphVPJkhuu2gHyetvtECdATGBiNkV3R5yQMZyL6UX5d13FkNo8STKPq7dWZip5iVgH2SmoeTwcbCT95P79YbcAT",
  "key26": "4EFVtr9o4CjBDK6egCAVhYQn57Gpi46qd9Jz5h3YZwpUnuYwGDfxwmiRE7PunwyVN4cSs8jhQ5iUjVHLFQ4suR9F",
  "key27": "27syP72X95hybcX8AyYicPFR1ottYcDtRAbwmtAkmvutW6XJH7GK3p9br42gTH5zmrbEC2qbMfjsC13YBTdDGZsf",
  "key28": "3DCcUfXNRk4etEjYZCTHAaezAZWHrsLFnjcYE7LJVziEykdShwoYewXJ5VwKKjC1eDZ3xybm6Z24w9zfdgpXPWZS",
  "key29": "u6tu7MZofpy19jq6FX1KhVq7YQuMm42CzTGQy15sSeh8H3SkG3ABJnYuAUR7bKDCsY9UX34oAswAGRTdykAX3MM",
  "key30": "2ckU232bQF3xvDCezq6aJ4P4BkUdf3uTzaZUzYg7AFQuaUZzhDa7pWT4URnVSQi9hZwQdy382Tdp3h9uTAbNyCuo",
  "key31": "2udANDpd3zBLoW5csDh5EDTn8aPpG2BWh4FHVSQWiXSsSDTh6QGu3mPzgSEah5nBaeNdJ7FdHqVDzH6bPDLxXCmk",
  "key32": "26mRwjN5zCg81ixbGvTqYjeL5rx1DfL4JuDyn3kDrBKxnGdxC6XDfMPfC5dN5SBJYPgw5DDKVkosTVFHRvoa9MBG",
  "key33": "4JovoSwKFXNNRiRayzxsv7gFAfDWsk88n6fVfS2C8ciy8hoLjS6JhTYSXiYJyEUSNE4DxmAAUc3L4EKa7hs96uJH",
  "key34": "2Uxxm2PZTDYeV1Zits9nVVCtZRGg1ySioTPBt4YXdyaaByunjmML1heFrjaZ264vNPa8dN4xP6QDCUrCaf1sVHaU",
  "key35": "4Wye8udRNTqATQ9FsYdZzvGCtTQuGEDKPxCjJdvirw5ee6YkXwzSuSS9utmNuTn9XftoS2dPbRX7DacNaSkhBqH8",
  "key36": "4Z5jTi1it3FKERPrcMPdavUDT5G6KokLuTYGCt1Z67Tyfe4x1JavJyZSNMFotiG9xQVc9fNpsMNiUiFjbhVRazvY",
  "key37": "59BXK2ayApxQpsALQN3ammYcEhsKTpoTs183ZMoFo11LwPpforri4jqxX24nTTgZQA6TYBFrPsE8jqvo9ZbWoEXz",
  "key38": "3pZiErdwUofpWgCWEhHbt6Ea8fuwPi66DeDpQUjR4JAiJvpsTB3e91EkRwDWGxoDFghAYewozy5QowXKjPfxedc4",
  "key39": "3XwNs1x1f7CNaspLUEfDWNcsPwYgPAZeCVdRiLjSUfXWWrSRTxTK1cEgiBa6vKta3RqP3vUMMoeXfKwZ13ZotXZf",
  "key40": "3geP5RBa16qC9fLZrHvkqQWweWiQ8Rd4B4AatNcHWrh3No8pvF148X4EEeYspv25go9LT4NFvP7HtgmmpHVasxPm",
  "key41": "2jmz451XAu5jGUrtFDLpm2z58WgRBxGnPkRQTMTwfnscLsPhkwzyKxqqmXcZjYpRCCxXqx727wBo1sVhJ8MRDw3w",
  "key42": "3FpsW56bJKe6tz8bqFS9mDeuwQ5CngdTWS2MAWXktdY6Kbcoj5u7S1bNUbJ3vyvALwHSgHrRcafJypcix3gQyEBk"
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
