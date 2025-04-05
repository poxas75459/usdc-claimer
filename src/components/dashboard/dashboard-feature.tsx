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
    "fRJp6ioyhH6CT7sdvjER7XZNUArkggK3avAH6FWF1goTpdztEPQepWpjEt1mHT1rkaRDJMsGjDL5B7arzgNw2S6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UWfwzFk9nHpoCw875p2AAyNheQPZsJieanjR9ekEWeZ4U3fhqTVcnXYkz352Cps3Av8Do7NBT4X8YFLMgUtz3Jx",
  "key1": "AYpuYwREywvsaSRTyVi4SLoT2qy283ekSzifh5QH3DLzEsDpagY6MpqfZ63qiKoYmSYGQ6wfBQjEZEXWoLYY2cP",
  "key2": "4CYPHYd1WzrF1MNn8dMpD84KCe3e4WraKUmTbJMKdmhKkuEA5xYfGNSHzuj5FDhvvnadi2JSgBv5DwVFrK87gwcB",
  "key3": "3Mg5GpVv76o9mzSpzzmfA3jqGMmrBvnaP3QpP1hZTtGnyu4YwHekDqDQ85hm8tQkbWk4VdRyjjvERy9sGe1DJMso",
  "key4": "2R9fY5muAjY6dZHsqpKhwyh1CCKt5mzCTRYRRnGHEWKxKGUrb7QmZMGKhJmknS1uKLkWifK7wqxjHveRfef2nL56",
  "key5": "67VXCKTKwCByWYisMw59uRvCLZ95oGxisHRDCvG9KeBkB1LARhrP9pWPHtDqixUESHUte5ooNEdeFQeAorHNkpMH",
  "key6": "kAXaqR3fmii2soboC2F8MARxzuk6LgwVRcjs2h32DZ2oobW2qNoUU2iv4oujCeoPo578Lir5CJErGSWg41KoCLP",
  "key7": "2stuNd8eczetZWrG52dfwJtRduDsaj6QAEUpXUzZJFKMKimVNaoENCaKa9m42Q8hPZpx8RXvVrnx1pTNC95doSJe",
  "key8": "KRq3prPL75ET7rfUMXDURbZ69jZdKBG1f7uLacap2J1CNhudfeszsKP6SXpcK3hrXjCR19ydfKVaFMk9HMT91BK",
  "key9": "5BdtNupMCsRwfiQ3rNaEym9a8fNzANPoq5mxNcmCPy4hE6sQy2Ve7pfuh3i277MFMWcxpcHKX3z9PBS8qoAHFhnR",
  "key10": "4Ac1h5i1mB7rEj4xwm36mFJLfAsvdXGntFNQKcPf1bHSAJD8TVna1ohnfw1PnNM6vqrFVpzPTcjjK1tU54pnVkNk",
  "key11": "2yx7XwxZz84ihoDBpJ3NEspsvQnAbUBb2XAdCEoJN1rFrTET2riE12Wr3SrsDab4wudmLJwdCsWkZWM26vV1LkU5",
  "key12": "8ZrHVt7tuqniNT8kKUBGDKe8sH25LhaQTgkusUU86ViK5o3EMyBYPXoZyzrYgw3BCCEaU7C1QERXHHUUyCRxKiw",
  "key13": "9UAvEDvy83AFcv1JVX2cqb2cdMLZ87CDyHaX4avB1MJ3PrzCKQcc2B9ZiWX7TiYjzCakZLbGDJnJRMxKGKygsAN",
  "key14": "2DkgZoTJCbhzf1VKDLPUrooaCDNaz1H3dcTouKcBvHU1TQq55RnhtBHLVaTyDvvDFRh3w9uWmGodAnmyvVban5PV",
  "key15": "3ghqGSYYHykoZRq7onTzxUdECfavAdTvEHXchaMkTHsp88nWvuLobRwTaUcmFVGTgUWaEKkaBwmyNb5m1Nk9w7xJ",
  "key16": "5b17AZ7omiACStWh8Ro7vRTHtYPrsLSGinhzexRtJQnMWfDXvHfZEfg2Pv2x1bjLvkLfSHWPdehB9TUy84X7C9ck",
  "key17": "3q3zwL92hKJiiTHymmLVMJtiNwxCcxxCrgomi3ob8GFAYcV9LBJ6Xz9G1eotAL2SyZrawnAZ6mYE8r7a5NCajvTy",
  "key18": "4FNFfoLpw5Jv2mSAYt3fjv2vLgCA1yvLDWyqpR7NoRjzPcRLpHRZZarVAaezrSJPydq2BURXCeWCXrTXgdGRJXNt",
  "key19": "DTqT43pAFFpHGf47YCsCLnxTwLw6MNLqzJpEDpfZEPEaXK6dDCe5jwrMBAQpxLCBNSJk5mmfhv7PrVpRaV91oCY",
  "key20": "3QGL4FexiVn4k1Pf2uc9xpyJU86ouzYhwwnY8aYtpBBf5Ac2f1djZkHWRVhf4aHxhu32yGL5jKgfYutx7sMKhhfK",
  "key21": "4fqjW6k89C3iaf2fSLzPBMbH3cqrpLi3MqRvzVQQxsjEmXPpAuHBcVhsJCnSrRjD43bTfXehwPb6Wsh4ipkZ5vGs",
  "key22": "3e3HSd6YSRi9kfnnCGeQE9aRSowZqvHGmy961cSj7npCk54Sx5FjuKcPhRreKoybMzth7VPtuzLxjCBDvjPBxxTi",
  "key23": "3tpgrovTbi1SjaWZWKtoC5SSweDeSjV5tRAMaGxURHazwRnR5KXGQ7T2bwhZMdByb96sbfoe7JBN44w5y9Nap1rx",
  "key24": "4XegkBGd5Ag2Jc1F4S5ue9gj7vYK8E3umWFqJf8SxJnVRv8mzNmHVMMa1TCo86JrDA2eMABa12RCRBV1T1nZjfPJ",
  "key25": "Qtd97XqLyUTGJdrANbkmj12qN1gCEMVph6ZxsvR2kGd5ni26zhCo6u6KdW2ueg32f9tQNhGY99oPxT4mdLfJzAz",
  "key26": "4XHWi2kvg1oqF11HGE4ybBJpeDH8LcjoHe5drDMyyU1jveqU43pAqFehQiBubokmdc6AwBp3F2zvdwbRBXGgdoWL",
  "key27": "3F2XP6u6iAhjD8dXdHoBUjXu83SN46xr975cdHqo9FX3fRk4tNLBPDyqNAQU4Zt4yY7He8SurZo7ac6vd5SNE3d5",
  "key28": "2to1gAVu5GQ4GHVzM4HhhiXZe4ourru3LMfqSRus5ewFaWg4bG41qWrvNvMwAx3mEyyWVgLn5uQYMgabfbTa5K9v",
  "key29": "2RmLGsoQ8VUhDXdSUWSnc1vX7Zf7Tpngm9mZ7D5Kt6S9tmADEYvNUktFzjCiYAmJnbjL38JWmGkzBRP13ouBpMqu"
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
