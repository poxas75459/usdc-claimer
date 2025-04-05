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
    "3c5udRSyHDaSaKmx95TNoYSaDkyXHUHVb5jnBx9TvHWFetBr4V2im1SASJgc2sZDe3ALx4dg1fatYaAKfJ8d1cFk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31a8sXCVdth4wy4JobE1V3VWnpKdrcNZeAkcLGaDEzWs8erFaj7x3HJBz6t3AcrqCdSsF4UJiw47MTY8e3zRBr2i",
  "key1": "XQqjn5oQGyWa1qLQxgY7RETxidUUYsdrkwi9ns5VW6rXeiwoG81xwfTtQdWYCybK92KnYh8Co53mENx4NbXLWbX",
  "key2": "4aptK85kJ5eYX5iiZ8qoFV2wMALdSpBVPFcEka1tuasR8E993Av2YpuDRaCnnSGYYxREiRjQLxrjiuJ1EZTjKbKe",
  "key3": "4GiMXPWW92xjoQHkW7vWKy4HaPAZPgGCJxZTMBaqyFPdZm1AXXGSqvWe5cQmggn9qzpbJRYZ927xHhsB8CvmFyvc",
  "key4": "572Srkc8CN5FnTzDVjeoyQxp29KjneXfa7XXjJogJhbFyxQr7jwxB8V3H9LMJngCAFFYQieSg9VAh5cQG1YN4xei",
  "key5": "2s88ncsMkXoiV4nwSwbXDMrBcLrPCodLaJCG9bqg5GHptmeKPrTn3WULJM6LQNM5ULEYXGUruwS8uZnfenkKcH2B",
  "key6": "5XcrWCDjeWD4eTfswudE3tKdJVobDGi5JyiAowHbx8A3wXaVW4GyvSYfySTAV73wP2xfL3HqwApxvMa2cF6gyD28",
  "key7": "5RwW9rmWPcFawYRUQg3pV4gMM5mK62mTp5mmG1WBLFLnpTcEtGERUqp9R5rpmytdCVRMB8mihLdDD9jg2qBnaLxb",
  "key8": "3YEGnoL5bkRpGsJQtVKGU23W5BmESGs6xhPr3wZ8Ct1ie7x5VkaaKa3s4tFYhQTR6WPMPMTVa5iRD2q1RxMbaTpC",
  "key9": "5upbo4QMVVbVZaaUzq1XmEak66Um9FNySKi3p6VvjcQCMT1mK98hqHqFb5Zd8QWLABbr384pyjqDAS6WSVyZRva6",
  "key10": "3uqQ1RsgS4eGyaZsRp67p6fkKRsKuKfEmqknprYbxQdA1bWJARe21xodrscSBJP4AXAisBbXVCyXQxskTyioXC6E",
  "key11": "4Rcbvewqojffu5VCFnoSRhxiNJaUForq84WsX8zb5BuTWakcXY4jDc7oMDsiZChyoixkfzwLtKJ7YYkcow4jgsDm",
  "key12": "218pcFFaWYXYRR9PVyMz3tNvQcYjTyLAphizwSyW7eSQmyDU9QxRcC75Kfx8Ptd1QhNvaTffyPXCWaTwFDwy5cdN",
  "key13": "3WYps7Ywudxfa6Dvy1B4vLaCqrX4vensNq4sRknrKHPd9MdWaPbtHKDjChv68gq7jdseLwpAe3dKhgqZTfT3ZKcD",
  "key14": "oPERLGivfTvBDbGZdS8zjYUNj8YYoMMcyQCEe2vcmS8ei6NZsaHSZ2qxxjhBjNGzHHA8H63CETdKCpkSuhBGdxy",
  "key15": "2WKbvqiqZ1ubUyR9PBUdRfD5wKVaEkMGt4iBf4coAw8A9b8FQwmg2ZZpQzLPPTryK6uLZFL8CZBU6rjx5sc5iF4G",
  "key16": "yGuaGH45BPnKeRiMPM2m7Z6NnC9LbM9jD3v2kyhcj5coVXwVgTqXUFwjNJUz3yuJguXc3SdxVaUb2odfb3ek8iS",
  "key17": "2LQmmYEsUZDF7jaRKCWwAN1AWJbnM4jVKHGLgKbx3icRQ1RAN9ik5gb48kPogditFGiWFrC95XyapP89jop9Rsyo",
  "key18": "2oQHvzPVRSkcWgibydaWQdeESKgJrz2xnSYA2Z41hQ95XpXQgMhV48voFgLotDzmM3W7h9Hqhume7gou6bU5fH3d",
  "key19": "3miNksygGz24nRj25ypxaVogaGZhq91ejEQ9Ta5rb9kTZFehPSez6aDAGLaWQPfgqKQeFocsCSGeH6Ri8rjUAw3H",
  "key20": "4gg7MMYo4uhsiq7tgm4FNYBiXQhhF8qqwcpzLYtTq6sGMupBSdRTuauPgxan31ggu8bHfSpvqA9SDcdXiFBfKQq7",
  "key21": "2NzUHKcCzGLVxuvF38JHkVEYtmSA8QyNfYJSrpuT7vUicaN2Swod9y3KmcrpvDb9tTkdyWux6REq9tznWKqparSd",
  "key22": "3qdszCQXs1Hu8sp6fUr6KmaSCJthNhVDrNBLESrEpVu9SGxvTsoYqi3HVpKGKLqRmTVRSBjDx5k3HJpyEMW2sQrY",
  "key23": "32twiPK5qsGM2wRFPUUci2jZmFwYHzxVtSuUVJ5T99PKqayFK9qU9LPk4biA4eEdif2yrbnAD3phfxZnt7A44LRb",
  "key24": "2eaUd1h4eAba9d7P9yK7VKH1VtmTtqsuUqQPndhj2sMNr7MrhNnRZJBMjkRx8azGDc5ANguASUXvSJgVVHgCKa9z",
  "key25": "2Ny1DqTM1ahkVSKD8QG1ditCGXdkgset6ZqoCfYTdoTpdJi7xSgsY2xrs2p7iTMPWAp5mRYr8ixsP3xpCQ2ndWc8",
  "key26": "2rbRgBjwKkQGfd8qn6U8mTQWbyiMPeuPk9Yb4YXaRevByv8DfgMJu9HeRMCGodX3tjBq6jUdxbowHU2Vcgh2FiF2",
  "key27": "2K5iwy6nbwnA5jaoz1yhCPgbSJDQbVvxy7eTgE4UkfiDkTHXk84S11H5DwsCDBiCWAAVkzutG8FYb97Ahq4K91rS",
  "key28": "3vxih82u6D3oP2zTwrZQssYvSbs8vQJdCcQcqDK8ozmg7Aj1bJiLXVh9rfstWUZEpQjM2KJoS16ZR735V2W38p6p",
  "key29": "qVeJaPZiaxehADhfKX45uUNgRnbXzorQaMBLGWW756gysdxseMYX2A4BHTWSX6gw7QzxkHfjv2Csvs94mkhJvHb",
  "key30": "5RjJEbKisSotwdQZbPuDspjpSvXdq2HXgSiU5ZzWC9RiX7uL4PdkB88CPFLxJBg3jF1r2H4ZiaafJg1rZXvTawSJ",
  "key31": "bxdsrHBvmuGv4E5coT5a2atAH5aaciJxFF47753KWsK8XyPprgakMkV8v4GpjZkxYfMuWX31N6q3MdYXCyLmJBL",
  "key32": "Cp5u2S171EXtfmUkJNfqAaXkQgQYd2RLKtyyfcgtNkKZrR5cWS3M8EWFkSThnQMDatrKnejg9aseqtW4KhYzpJG"
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
