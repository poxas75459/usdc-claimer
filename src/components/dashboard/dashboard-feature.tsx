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
    "4dhxt3uG57fgHWpAzmr1ENVqtVgvwP3t8zPtatWu5Vr5go6YHgPus49Skwq9GyJNz2PyoNiScdgPvMWCB7UUmq5W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4czi7YSZLDmCQ7qcov1nAuAjtE63MR7U8uUa1MZJpeGiZsiGjhodEDJQ7Y5wcAMuuzT4uVVKgZWeSbx39j1Y8NYN",
  "key1": "2o4o5KXFUwnwPjd6suJQ8eW5vvLbrDGi9kgDiPFF1f2UhALpR2GHPCVDrmajvaZFQeLD4HNtjW2HsYg6DG73gwFg",
  "key2": "63tnBp9f6XJXR4gZUYP16jtbQdZb2AjCJjedtEevyKza2Urby7bWRXVhBTPYBZELLpNNFVRt7D3MJgdskPF2fZTN",
  "key3": "rWEyJjbvELmvsX7TQnwLhYDkYhqx5cgzqDVrvcRSSgbWv1dCThbn4UtbgBaaueDbYDZBT8LAYPW4XPgFmhtCpQ6",
  "key4": "4rhknzixWXv3TGrKytMRd85cM9B1qfQjE5J1Fbpxcnho1L2SW5Y5BZnbas1bqCZiY4powtK5uQLLTh71dmVpbto9",
  "key5": "STWzUgPDJeVChSKwhPEWMNQqFfzAoUeRGjiYtGsnZbxhVxvRb18tYrtt864nudu4TvLCXjcv47RaE58jv1MzGGE",
  "key6": "adxyA85marDSH57tVNKAvkDcvhZjctonjZgMWZAv6KoChVs1STZb78XryaqjSRtGvjpaMcv5dGpMJvmBmFeCYdb",
  "key7": "2tM26D6wpRSdbfpMPZYoMjeW9ty9V1DDke96QdbL4mkwoBFkMbKpTtSt8FdtYokhZjanQ4MVEkoAzjxZBYb5KwWP",
  "key8": "5aqcSMWBN3bbXipXkHEMorX5V68ZksiNRbV8RHBSwzreqv26oNWV5huC5K4Xc12tkL4DNjhfgaD5cfYsDrndfQwQ",
  "key9": "426jnzLz7fZYggxDE5Sdv9UJcvmETW6mCtmsuZUgKXDy8sBphXMa3qXyDgxQx6Jfy8v6cmkce67k4oq4Kfjr8dto",
  "key10": "ergn4fYNuDhxSFEHbmmYiS2Z1jdKswsuiHwvbKRsYuoHyRxnPsoaLznYiE5Z2bij7neo1Cuu4hTTXttLF4N1WRC",
  "key11": "4yKerfBNZ7343A7dqfK6NtrGDBJYBMG7Ah1EWUhMDJyfwfqGa749CkZ1ug9aVPFYkRWSbqiWUqf899C4A6GKGXtt",
  "key12": "47SJerbMLT1ZpFveiSfCgchjhEzcfGyJHXxZkpCe5Fn3EdEjLFUKJ1NfWpugkKDxGYw6Aj6ur5uBRsT4EwSoQ1ps",
  "key13": "so36rwqp8sqmu3jZbvkkLWuA4aUFkq8k3JRxVGP4jxaXP31qnurAGvrYHYWb7cNZPrnffJsCVsB94gjkP5hs7t6",
  "key14": "5nDxV6jTnwF5vSkRQmSeGBtYN5SsG9j7r1HMepwLyWB6Ms95aRCrsc6p9kcez1kzBbC2eGEmmiHQcVFyam51rdpf",
  "key15": "5oEv6wUTQirMa2JnP9Cu26bXmdEkYS7r5WxDYxh5Lhqzo1LkUb4K1xDCspsa3Y2W469B11JcsX2sMnVdBfbUAJdY",
  "key16": "2vRk32vGtmuQxvW9MDVYBg2wcABUT4ekD1xVTdLPSgRiATcyYVZYhPc8cQzYrWXhBpCi1KifpfTMgW8Anch8QYZT",
  "key17": "3H4cNEtPA4xA1EHtPRdS5BCkSBm6cAEYBBFLkoq5AMrPwiUaeBDxFS8dDxHFyNcfZf2gjphTRJRMYgaG5zQLBnek",
  "key18": "YLzGu3BwZUPF2AJy5dGnoVyoccXo3kQCTkRWKCx4Gu9QQYuHpE15BvZYZu6sCGM4zCujreZr2AZ2WyYHAYMV2Ab",
  "key19": "4pe7KasekRw829U7HvaAwwYzQuLU2kcM29aDbefVb7zzyzSNkDEoidTvhMwWRsDqCGNPhbZmfBw4fdukyPahMiWZ",
  "key20": "5A3nodfRMnZ48GkR6zSYgZQHbwGfwZHtGtV6J29zDiVC241qxpRgowxxPMvShYQTDZY1rGeoH6Jpx56uieuG2Tvv",
  "key21": "22GMv3NjQBcrN1KSP6XVNx5gvHVhipL4K4xedZk4A5VzNTcKaPPAbFaDd9pPv8x4tkqxRH1U7nHwe2HZBEanMNgz",
  "key22": "5XLLbBXaD9ehNwV6kiXuVttmJzaTCLiZwTniKtMKUxwhhHrRPSvkDZ9DoojcAWDWVwNdZJ94EuSXKmmxzUYm1sNH",
  "key23": "DJZoU2BDLCrHUUEst9ABw8SKFicruFUgGoH2idMRricgndeRjxgx8YPw1XH4MevXRPyBkYGGFRUpFVWTJRTC3f8",
  "key24": "5r8XbPuP6WMcQWvNiDkWmA2b5knp57CoHngvQhEuv4Qy22pMXicfycYJCYAYof6pH3jTL228ShK133HSoTgbC8S9",
  "key25": "UkBHbStzzjgX21hM3LxQjTzGFm4ihfjaNPsVmaLDWnXbcE11qYTmaHCSmxJ4cHzhoAbKrFZJHyhcvGGYDqWSnGi",
  "key26": "3AM5rWE3EoM5eioqGWLFBPj7BsQKuk9nWXQVVruBMeUqWZWLkx9enwF3i4NxfuVYezZryttNBCaDgcqr3CxcdJzg",
  "key27": "4zQY2xCzUBTYuyZSj9udQih6EXc4xDwzJAUeiTfhU6QYz3eaiV5Dp8nxEXRaeMNdTXLuR1ps5HD5pd25QVNfHfhx",
  "key28": "67ANx8Ngcvri9BULgoEWxc3cTfHs8PPhL4rHJ3TDG67oDqpcH8HJrAcT7fcQHVWHZSR2AiHNmrSpzC91DyumzBqi",
  "key29": "2G16ciMoFGL5b6q9FowpjeAG5Lt6MyMNY2wyhYodQzjUZ83yH3yGZerCnXP73BqWM1xTLK84DKCfPgJXu43dQi6R",
  "key30": "5nQBTfjk6MEXzFjXM1GB2NciVCUNRCR2i9fg2N43Wxm6jorq5CAm4JsBwk2yomaKxbUcHXj6hrufxQSphXayuhsq",
  "key31": "3dYFaFAfeQLmkYuksQ1yHqm6XYRnPed5mB4RqM2SiLYEjhyUFx3giqEnCSYqAmJLHmPbyN7D2eWvxJK1vTUfRQib",
  "key32": "CkfBLEjmGdamL5uf9McVfuqFiRfCzAHaHELM6VzjDGSAMRKoaPPm5R8GGESmauJCnb4uGUtDwdMHfj3N5Scpy12",
  "key33": "Ea4xJu6euVXQ9JW9hNuxNVpqvpPadLajb8nV49K4rMEXhX2Rqh9gXwMyc1Fhou7SNFX3GUcz6f1P5ThcZJjhTgg",
  "key34": "sfRYpGceMZXwSkb3zzpopAXwgjKyMNFCJ562TYDVSp69nEGXszhMZHzw8RS7bBXDvUgwxD3MGxhv2yeymqxsM8i",
  "key35": "5zvLMWrFubn4FyHZZrqxqhDd48EpQwEA85eXayyhrBp8YwLo3wieYY3PdWzaoM9uKqxt2hPvnbdaQKxDptHeFsu8",
  "key36": "3YFXyYKx2FK7Zsfd6ckX9ruxRh2XotQC5E3vSwCgK15svgVj4j3RSCobHK43DPTVaBs6R6YmAyHUV2qSpMJmHhx9",
  "key37": "4EVRZfwkc2dX8FtpW6miY8d1YFDpN3txpZYeCbDeofAvUuHyfRFZgmpokNiUyhmvPrMAtYCH84eu4Vf8VrMPptzt"
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
