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
    "o52knBqYa7MZQUy7oWiy35z6pXqV7LAiLXAcnvpLik68sZKvTVGZxdDqjvAYcn7W5vR3M3Gv7nWTAzifFPMsoDe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53zAbuVgXY8B7rfcvaDCXKh4v8d46RFXSMp6dbSWEgvTXCX2X7rchAXc6YoRtWcLRB4NqeCumEWvYBW9rEjSgJ3F",
  "key1": "43DW2UHGvi3wjgSSu3NNkXrK5wWhazsPweUvwtYTGfvadz5oz2qLGfpvCcpqqHAWYeuEtfdHCQ12ZHiLSNCRqDTi",
  "key2": "24R6ZyYy1o4ekhEkS173MZhazDvqRcymDZ2udZK9FaRtqETnAJ5FKoFdNe7iGnkSXHft2qqwKiMwpQavPefBSHsT",
  "key3": "4tEaM5pSHSsnP51eu5By4TukAgZWCsZSNyWJRv4Ntq3xGFcrdmCSL4dB5AUX2jM4Q1t2kDQ9DjeJvW6HNiCBTMNR",
  "key4": "4Cg6z4XUMVqEfX1LNwMmBF4mBKa82btGLXMKFMU8FXvU1nZVsk3fvgGxjouqXVaVvR6FhZ9KdSKSCPurHdmNYGYe",
  "key5": "5nF8Q5FH2F2xrgzfhYcQfLxNuT9cfxsYF1KPpDNNtutcW9HK6Zg9sKupMDMG9K3Pziku5o8h5VkrWFGpwFQuMUcV",
  "key6": "2m3R8RGaPb1jSC3ageRn2zxcYom3J1pQzWYy4nJCrGwUC94HgMnt3zD3W4Wi1JN8LoFh9EtNzpHR79kELPKicGfJ",
  "key7": "4HxFhtMB7NBSZuTif475qjWWmeKiWpbDkkVPaUS1i3K7AGjZ8KLagAJjNQxb6K93P9XkPpafA6YqjdZP1kktgap4",
  "key8": "3AW723jBmKf1o1UsqcLZSY2RG7MSywy3YYieDTpwNunWxgRfMg4byNkD1J4tJPB8jrEfwD2Bk24S11hr6TzJQDTy",
  "key9": "LD7yqArgsCRJ9cLtyeBP4H5dmDuxHejry39KUKSmSDeTro3usbpUEqXAt1JtY42Mqb16RJ1VikYzZsFePWoUjz2",
  "key10": "4vDdfXJzwAGX6EpGfFjFupEHEV2zWYA1sPBBH1oaYJxbJcgESR8BCLy6H1jjYDwBsseup2NzBRfc3gQch4oFh2yz",
  "key11": "54xoyAoaHS6hbGMod3rGNTVs9L9sF2TAZuyQRsdn5kzjTZm1jFdbCPYn7r1YGDQ6acqs2DTQiZ4jL2hjfK64Dpaz",
  "key12": "4gML9dgQBwfj7iaHy7jUyn6NLhYe3GgSHGUWjQtJ7CaAV8JTyX4ajxSzN29fbGLh1Ud9xugbb4XT4qJz7FK8NY3Z",
  "key13": "3pj2gTuS9pS2i6odxRHtUV8G7LzKzoxAYzTXBLZgNpwJJT7f885wZDX6Y5cQ925ahYrj27nUForjjkgPaiNp7DxN",
  "key14": "4HJT3kFxJirKKFKGGrGvenVfW6sqyCBDFmeTxwDm8ynTfrni2bndFQkGV4dE1byVYgRGi7notyaRLUNGJzpYBpYN",
  "key15": "4ngUDxhkdxLpQVGRpVMhYUFtM5ZN6pabW9n75Tx1juTmfEHkxyHb96SC2BuwgbGR1G5o17WWBGjKJyvHaTZHhoLC",
  "key16": "53YzhHvX7aki2oSSwgdxFfvTWKD2XeuN8SRaXWniZYjxAhkfktxjMG2N66ahaCZNF7mb2LnERm6a3Y7Buo7re6D8",
  "key17": "3mjZxhBRvBFDUpqL1CbDu9p3ycRDmeajr2UtHWsNHi2qfActFzxBNpyjE5ucckM9z5re3jeyv1PVtdanDf4sT1JL",
  "key18": "2zugGz7GDy3nZ71jEVqjToNssFqnpktnX7A9pAC2XPUZUVtMaYAX3AqrTWRLhTnCHA1JPZ6bHZ1MfcpdiMsUU1uH",
  "key19": "3wDSxv4NCyRoTg985GdWbpvBYFsN9WJLttqjN1vGbaufj4jZj5sMwLZ58LJfweqxFYP1WKkz61dUqfYFmbTTd22L",
  "key20": "jXg1KWgZrMLAJd8osEtAqjgrr8d5GVULyLw8oJwsapBPeisxLTNWUDf3dsWXGXiS8jNwPZGwcC2TWekWBG4PQ2k",
  "key21": "2etacw34NKfHtzzNWFvvZfMagqhosp4bDWFhEQTTmf4wTUB2tvSGRbWQz7Z17iaebwqTuQqWUR7UjAj4oVAUiQiY",
  "key22": "5GhcSDMswfGUSD4PpaqXcriMMqjnB6VTKfDGPrHyHWudk3XqBMu4UAGXTNSMervGqx9fCbdP8TLBhpgJDjBuMP18",
  "key23": "3h7bQG1ydMRz4eUEbv59z93euWiJnsocxXsWH2g8HjEVQfYr5RneNAqJo6EFQwnDpAhF15ZoYQGixbKeZeY1GFnK",
  "key24": "LASFDimv5hgQQ2EdXCx8duiEU6HsZtzMEdwPtNz8rEW5xrL9f2s8bMTDi7JNTJot6PeRBEV85PxhTkR4TpTaGKP",
  "key25": "3uCodbirUtpqMFVLPNR3Qy14JvoyX13RRSWGtBEG2Ez6jozxJmNEipyKduXMX5zrbkjbvuEnNukYYdV2CpLFfCKW",
  "key26": "2cfgVkyxo53zUxozsWqRcYraraZ2Dhioa4dy1H2cGxQz8kdiX2fc5un9ygvA6qQcNx1fP4n7dVCeKmqpJKhj1GBf",
  "key27": "4LWj6qyxahpjtX2RKuT88Cx2wJo9RFmmrV5HS55ZEHb19qKNXsws8WLprmx4jUr1gtz3WscLeAHoQf3U2n56yN9A",
  "key28": "3FDuBz72EYCCkVYZixozyQXbQBBDG2D2PmD6DuTSQXvcxm1t28w9TM1ay4LHjxkrTCdSAV9j9ouCZqTp8xncRSHV",
  "key29": "8ixwrNNz5gMJo8EXZU8vcSGpRiVsbFms1LmSUsZChsswXAqsqiPe9z5wyW8o6AVT3mh88okgPUZ49Skv2uFmz1R",
  "key30": "5zGnPmGNd3Khv9ZokK3oHx5r3iajEu1chN147cNFiv2FKT4pidersmRidWhHE1Prt6VFNTo7SLHfbHVMvfYduJUa",
  "key31": "36jxmiCM6af9ibmaeyLJqvLNewfryvNrffFTs36p4kV8sT7eW8wQhNFYsuL6yw7BePFHpdWMvzpGeTD1L4aK1vFt",
  "key32": "3PpLeZZcGDDb8aCzAYKQhb4psmZ8iSrxeR9BRtTftSgRkrniAuLuP1njztgW8cK61bM8oT3wKWttF26ZyfZ2f2Cp",
  "key33": "5UZD2KtHBxo67GfNTck5DNdnjsU4HRixzB8nyG3ApdYc95jXc2KLperpH7e6zeJWLG1bEa3U5L1ERWErDUBAfzBG",
  "key34": "2esjearCM5AKtMjZr1VQU9FX9qMuLK418CXZBtPpSpT9z3Akza6Xp3DWNmVmg7ix4xs3LJoCCLzr9QVWqyfpaMSn",
  "key35": "5rHzTzbvrXMKhNfpy81JrM7qP9acSRjs7wkxrUjLDAax5Hew2JLNxFirq1KWF9pdvv1pVgnJBRG44vfE9SR7N2eA",
  "key36": "2ovLgLHpkzu75ghG9sUN5DCKjVktcFvZNHidHub2yJxjcbBfSiCMWwA2BaKt3NmVZ4EJJBYd4FcSXRB2yY4n5LVy",
  "key37": "5BBVBZdSS9a7eUVHukE3KzDYgKayTLijxyfmxocrPp97RCxrheSp7EP8bLydWWEvW3XD61T9NXQfYhqNdxs8yR6X",
  "key38": "23ZZ4Fd6JP9nVe8ZUuGnvvMSLu3GXqLQ3dyvHzkdcaeVa2nejEyPA4iEW6CjCraR2gXAs2Ev77WGGHHUBZCLjZ3t",
  "key39": "uGfwh3hDmLJ7449u4k2WF8rcfDKHiUEtRZXpgbVaGy7oqdQouU3S2x1HjP6c8i889kENtFw3MTKKuCRdJ5tZ4yC",
  "key40": "5kPEy6uo7QpR7HP94oK2Hzv2Q6djyjP1URxv9WaBKy9v7cksB33szpNHFB8Yf1cVDi3qkXrz68EvvRpGW4pLmhrQ",
  "key41": "3HBtFPQizXtinCKoyLFURb22AnSCEszZTQCzzu2vvkyzUKsDiU9QkuMjtKcAHhBQsaSq7x5tytyR6HuMw3AF9XNr",
  "key42": "66JjAbThHZDKAsYCkg47oyZoBMPNGKZ2L5FxgWG6p1QTAfixKTRsYQZ7KgkVexoF1wRujNaA5pyFiRhjvEmtVpLY",
  "key43": "55rJRuUL9jhNXxdHz4QWVyNPxDUG2QHrcAzHavNSPrpbYRfXh9hNSfMxm6zDY23McdVuhL9Vor4jwmo7m1aYFwK8",
  "key44": "4EhzsZHcajRiZyH9LQ8xJxwwFcxxyGY5hH99L88qPVZDpC32ypsX55RgUx6TD7dsxtFy82DTjGSrakmQPGShCAHe",
  "key45": "5pGXPEVmeR2ndCDW9xBhgnUgt2c7QRcgLW1Rb23Xw1VYnjeRUpYKBUZkNFxoCWQ5AEzNjqsrBfSB8eL9YLo9gcyu",
  "key46": "64G7C4SCCNbuSQ3pu3kF6ETREzPuBHfcLRjfJ6VvvvLAjXeEvUztrMGWVSwTFJaa6Q63qK7dQUgpGeEC7jtcDFqp",
  "key47": "GK1AttZHUnYW12eG8AHEs89c2WRYi17c65bCkGUBSaSXmwTknmfiEWF35HyDg164cfKjFnPRvuHjH2gmkbJBEDx",
  "key48": "2oujHhivk8JQbMHTZwWQT7YmqG4M2iNk9ViyAfbDByUcH82SQBWMuazbnT74pV7KuP1WGWMM1vVyAaupNTWx7u1S"
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
