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
    "5UmET6KJJH6445cfswCCib8P5mQSeN5XeZdwHVkCDP7Htq37QUrMWKzrrENznQVPSjnTk946KdRhf447TJ2ykSuL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dLCWVifqjhT1quv9vDyWim7SXxwpnAyHUheFtrbksjVtGAp6iCfjMty154FPmYWujC3vM4ZQig4gabsw9mX5Yuz",
  "key1": "3YeeTbVFEtZ3dUyJLHNCbK6EeXmhxbsEE9gvVinaNFA6zCah2SoUiyVA5dRukj9DL6ftV5wVfUkFgV1SoNWEsd1v",
  "key2": "3hb2PKqWmeorgpvCnxRNHdhMoJPcfBc1VnacAXXRoodxiamcjo5DTkYyYo9coqrbiuk4DpBwHBctJxExgrHP6uMC",
  "key3": "3p91zHzsk6Cy1ossoXs1dikj3Juho74deyjn29ZSzozuFjhxw1NNpRv6rJgkUpDAKRzgcFLnDTgUtHPDRhLVV8NC",
  "key4": "2q4FjgdYxMYD1nogEB8ozKheZZyzDV6wX6hSQCfGdzcCPNAETGtRMCL4GpEFSiHmTLdUiwRwBUY1Y2hCwJfpF8M9",
  "key5": "3YwYepiPxiFGwgRhrXgHSTX3AGBtLH4EugyHDgRUrywwtcmJQ3z6TMAoV92yqAoGXfVsbwUgEab3eEhuMgc5zMmZ",
  "key6": "rE373NQSEZ8ZoU27CT3s2MzdwTV2XoAzVDcLEkFDFP4t6fuYjDdGJBYzTSfRP3VWvjcuzCztKmaZBVHxDJ45BZm",
  "key7": "4ptyTi2SVoFZdJfBRBucyMzPwrMQBpTafREnofZjXWuDbz3c78RgEAsWLKpxgwpFkxB2ViNUcSi4t1xoUnYJPG3L",
  "key8": "26Uiyc2HuyAWKZBGXUAqqUdQNzpsVDcCCQXyAZEJ1tyjFZ1Adc422ihrQAkoG1HYucRL1QwzVP5LUqoq4ornz4sD",
  "key9": "u6rZZCsthKNdsmWyxqUcD4bizTQDikHUghoLvVKvXJgLwx4nrBtWZKC3pVeqb4A4NjNRMvH5PynzoGijtdMH94Y",
  "key10": "379LAJL1dmQVGWTau7jdgMbTD612dTZCTkTYyN77cwUY5F3VjrsR1ybZ9iS6cVWyfxSRbW5TDq1kX4wE663iswJA",
  "key11": "37uT5gK7tGKB1fBDbywFpw5wpPgGGLMZzukQR8YNxbhHWV4X1LMjEv9BTPUHZNihSeS86EB9e6vqQL8Bxkr1WqCn",
  "key12": "4P8pskPAv6B7TpPT4VELjdJen1rhaEW1PA5asN74vLD46NPcGiEzpWSeHbTE5SUb1Y52PnSngd2vYdWP9n1eecsS",
  "key13": "44jqtW4sy7KfMjYtfaREkkzhEHEz2aMypdyZp3rJcMDMtygJw9cVnXN6bKfgg5QbmCfq9V279oLcK6YzKwStPuvA",
  "key14": "669NaGszkdUSceL7rMQVB4EnRk2UMbhH2KUZMJKmWdHUJq2M58U7ZvLkRCyHeWBkGVKwCXQSA66qB6BeTX7Ut6zh",
  "key15": "5RpYQ8cSMc6jHj13EpChLHpWufJRugofYekgUXz5J8RXPUzSMmu5wFaFqTMLgokLWaBx64BmUDCPEv2FXYGuNN5T",
  "key16": "2FThAgsLBSFjZ91VFHWmMPhVfSNbaxfDovk7XCXHzEs1SBQSbg5GhKSubev4vn7QbDR2y9ApKA6VTsQ6zEZ7XV1d",
  "key17": "36oYyMaDdMPvyjCP881VLUURq78sjVXeYccBR2NWuD7XhmzN7D4JmG3EAsaKZPkVLeUgwWPJHCg2AgKAbMTsbJFE",
  "key18": "5hEHwtuzNwu5BtP9SWgcBjhzRQRj1CrJTZQbBVUsc9A6yEc4WiHGXVHtHpw2MSMvoBfvDAX7BYXQoaqc27EoGZyV",
  "key19": "2WYAwCEAVnpQLcWGDAgUAFi98GB611eRGJ2dZ4Gy3FEaiEo6Bn2hrDtnPeAkjnWyLRCUTLDYFycza5TR5hvyThyS",
  "key20": "2yAfbAzf8ACddsxqBe2BGGVWojD3ZTToLVdVRPnidHzosoHZNpjkJXzAa2eKTCAPjPXR7oRU9kXknMX5XWqgVKSm",
  "key21": "NR8g1Rp741PYWoZm2PVpU1APmZ2FHau4amjPKrDyQ5sbx2jowrGQPy5YsKeutuLJfPjTdnnwzLJXdeiqJQaGfbs",
  "key22": "5ce48ahJ95FGhio3MqdFYmZT8DcAVpX6V6VfBW7dg6usLuKSpqpCMBuNJKLWUa5DH1yE2GWrz2Ugwuho7PgdUGPN",
  "key23": "3Jp2Brk3wdkibH3xAg9d1rU4QWHdLo5KaEotCHMfoyn4JV2VwBGSMWyQQBEhmAvvEMuRad199netEqnGJxXGJayH",
  "key24": "4gJMjuGwfj84rVf5mmrFJRRngLc9x8qmXBeYJhQzS1jjbrsWFuEArkhSnsCghAMyPyRmo5FvGe3WyntKAGPTtcqA",
  "key25": "5aYH1f4ynYZaKv4Ez45DzBzkcdSQVCr69c1tRnUuZ1EyF1XPZjsz5bVoRLxcQAx1AiZfSzTTRtbwM97RohvE2P4K",
  "key26": "2uB7Kj2fy2t2W6rZEb22rByj63GXXs96vQvE8pH3oqgHM88A6z4BuTNmg36ZaZZ5bFHbRgCvF2VLjDwAGi69s9gV",
  "key27": "5BEvH8XBBaxbwf81onTtgZQZzsUcTW9SonEsQGS9qYLwWqMJq4zt2HJ5NE7wNbfdHE88J8TLBYbNehQmZ6Hyswdc",
  "key28": "5f91PeYmMGfisgqUtYZ8Yn6kZ7gSxz3hEqQRtMFXGDXgr8pH7Yowd78Z5LG23G14oqPthiP5mXc8rwW6pfMLrGc2",
  "key29": "5yTMH16ekxmkrTikeajZxtvqkCS6ncGZpBsG2R41Ui8RAkD2okN9dijECd1EEpFY3DMprx3Pu7M9QAFNigqFQBNB",
  "key30": "FAbsZZ8mdCvL9MKx8gK16r7D86Fmkdr7T7WEPzAJEhtMegLWnX812vkpkgMS3o87k4UjZzidtEcegK4DWuGpEc2",
  "key31": "5TANg4xPhhMQDoJk3e6BvJwjXa3VDGy7RhH8zA42T6fyvFxTmEGyhYxG5NztiSyksg516oiaJhyZrFoeq42PuUBM",
  "key32": "1cSbSXTbxAWDyzgvUK68jnWdLYsqsf9py5yyJ2cKYCPd8FTXHY8mvYUdbJCqTiSN92qAkr4Sv6LaJXENwn9bPHU",
  "key33": "5P6EWnfRyagk5wv1SRHd159GkJpdnmmQzNfpvsq96tmZEBf5rowbv8eWGdj99Y7CtafoRX43hSokf516t6s2dCpr",
  "key34": "5bsBD8UhBeRXLRc8WRP5dTHGCNCKhqFMZWRyCLM9cDcyRx8cf47g2WYrFyQ8DYoXga1cEv5fGxFwCxdqVfTmeG9B",
  "key35": "3V3n1VJEKJLqMBZGPeZM6ndN1ymup4VYaZCFTQad8k23tWQZtpkBRLVTwdAoabUa2DN8bhcbWo4fdKJjDqhWa3vh",
  "key36": "4WHy4KZvj5mciSvcJ99aaVdQgvhfeR33V4WDRWPiERMws46x6ivPD2wGXhfu3k3rz2sBFVER3f4uTLP4ecoviNQQ",
  "key37": "2TKnqRcWcaq9f5bMaiadnCGFGuhBBYLvhFRgmxTXzUjRSmD6yvVeJG2nSDsJBx76mAS1vDEMGEPf16dKBVmfXfJS",
  "key38": "wis3f52ream8dKfaEHa2FZagP2vfZebnFNRjLhciYJeHkkzKETYxzmn8tRsJs9G9kMJYX5Mt3xiHtDJxjGg7dBf",
  "key39": "4tjbabDAeDRXpXKNejQZ1Zb2BewCZzfbbUm5azFtoQC3fG6688efA7nGCtCSjaUwbBpGv3XztKkN6TLYgUF8GTkv"
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
