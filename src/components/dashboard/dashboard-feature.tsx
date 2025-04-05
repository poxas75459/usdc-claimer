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
    "47qmgC8nqVVoqEceTRpkCf1Skzr2VBa9vYHT2PWrGM3m1SzV1cfnLqdX3ui1aFJsWUP6utWMiQDL8DndFFRgVdMg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3seExV7TaGT3QmCdk53649Se1xYgQfad76NjPZQH6RhrdiJVCz2bvMe6ntpiE1DxMwwuv7sVDgLYxSfYfXpoKKwg",
  "key1": "38Uh7JvowRna9KGSQ1V5Q6UrPR4yyNTrzavaQhYA2swhxuVHsxzno2J6qrY65ep7u84RpTWjNBeDcnbpcTy9z8x7",
  "key2": "3kwEFsUwUSswmo7BiNjgadcQam39ag1rBeXjPWJnmDJbdtTZX6KW3Dy7xLo3DAZ91JuYrJd9FBGn86Z37mfzsk3Z",
  "key3": "nJh5LpPwus13ZbzAZuKUZg7pyx1qxgrPLDx4TYMwxPPAshUFeHGmjkFi2TPwRYgNeTiGPSTZ42VPsiP6QaiqaoM",
  "key4": "WcjnjUPEaMgL9XhGxuott4f996DCyenx2mZ2T3kmTt4MTZM9NE4o6NvMm4EnyQdkQYxc1L7pNXyszY1S4y8c7jh",
  "key5": "4m14JxooVNtE4dUn1e4Ri96Xko4GnkTLtVbcX5cMxtXwHZr7KyeaWPNtuRSgxzo1HmEKDDSiyjNCQezWmnfeLn94",
  "key6": "3znX5iCgfEN2QYEivr5uCZHMbMCocueQ1cLsSSJyqcbHjVDHAWLj9UbR7sLddjyi9caifkNFr1Dim2PLhmC38mZo",
  "key7": "4AwHSV9H3kqnd2p6qELuXFVfYPALAh9G3zJMTgSfJAsHewsWpvi34y6sPh79myDEdZwyMWnCFSCLpTee5v1GNfwh",
  "key8": "2hYwk9HeGLzczxh3AXDD1o65NQit4XuUCiodtn9JiHa8QArwEf8GASLANDjmsoz8zWQFAmY17LSUrkJ5rRuNfgdk",
  "key9": "3RPKNbMVhmJeN9e4LdiNquHmUPrLngAq1W4qWxSdbJg2NJCEQ63fx6THhmsiJZXeiiFq7ckgp7FH6Vwh3E6a5Sir",
  "key10": "CYv6XNzTp8YaAL6JKd7r7YY4XwKk7CU4awNpDmC1g2TCwp1ofw16QkH1YPZJC8z1GLe1prt9g8vUwB16HCXbyTn",
  "key11": "62ZBHvb1LPHmDb5yuvqD9mpzEEomoxUg9RaMPd6kKfGL8YyFe78YSr74KUoqw1aondzTAWn8DtwvE4mUHzyFp6pJ",
  "key12": "3wPX7WnybvRUGGYSUHrkoxv9xaptnSgjwbSMTbDsDMtcB7vHyjtQJW3EcAQrKQcYqsFnGtRT6jfb8tA7zGc5eeax",
  "key13": "4Ns2541CZMKoPBUsXsVZq3vH4Co6sBGNUh4ezcATrqUhfRCxzBzCkEHGtzC6S7gY8Ha7am2BkscM8iynxz8uxruQ",
  "key14": "jbUQYHXE3ReZg5diQKjLguHUoRkQmMby32Dwt8nzYhVMaXapXW6uUAE4wT681PjwedndE4KexaCDMQm6SRkAmrA",
  "key15": "2yFMBithE6Xum133wEimtKD3ujKzr77aTvFVTqPs89ZExAySQihWtUUEqMKjKr1UHZFxwfwLYdHyzqyXSJsvPuga",
  "key16": "46YyrcwUmRrCzQrF1Q8LLTh9CFgp3ZbSxaYtwmAyPz3wfqb7eU5LazZPP7VCcD7SjJkXzHVcCmEJbvQ4ofMyiQX6",
  "key17": "4MPsk6axFkd1uKtkbYVR2oBtQfnHRJk9LPmMAwfHxsEn3qPTw3hCXooTFYjtYXQs8Np9oJ8hhYXhYx3eR7Hiceuk",
  "key18": "2TKSUSJjzxYbjGpUtVRnCqTLsc8SxNWt99dvh81oUiETLSnc7GhrTgqQyB7erMLunzNDiybDyfZLXLvxbuJ67ojt",
  "key19": "4n4qf32y8pY58ryiBzDxzLckPoAgYBY2gmpYJbcCJ9XuBbkgdx7trtwYbRLUbEAWoJWck7vQ7eFHDVJiDYM6kQMi",
  "key20": "663HAcmcJ1gsKqWBcH7A8Qg2fVf357N3vizvJXATvkE9UDX5uG2YYVA7kbxXLNdcEtwp7Spe2nJ7EPUGDvNk213M",
  "key21": "3kmdMAKw9V3DcKN49tuaemZzYbzsustgxVpfaNqkV6vPbz9i8nSix7mhzcLxmMT434n1qF3V1nuKBNrAm5VCoax4",
  "key22": "52wzkNQJcDPG4GREXHWaKGynFYPQMhqCcKpbsxaBGwbPjyDPAXL7zjyhdSAwVvM4b7eZaw9MPWt4jog9iZtcnbZj",
  "key23": "4NAnaMvxh8TC6LD1ojFWfp7odDwb8MRYmUjoZmFm96StKJ9zq29J7yDmzXpzhy1hUxzzJDybJm6Qvs4oTn6zuDQR",
  "key24": "5c8772K1FacRUM9p6CNgJ63N2RuLzkmUMsDURDasQwpDoQ7thgmT7v4u9FPk9V6fP1TMwBJ4nuwoTPTjW6NZBgfB",
  "key25": "3ie5ptPR74GfxRBWUVbJjcjuuXccM6HwS6fftJ2bFY8Un3LejLbQfPCLWTj9dv7qKSKjbg7pYQ8WSWqnzCNULN3m",
  "key26": "35WFGjixkzxzcwfvqZZbG4icB9Ko29Jw5FXP1hy7CPPPCxSx8htzF5xQ7KMnnamsFUYX3uHjHeESWojyCCoN2s9e",
  "key27": "7BTaP5ARPDWiTuXMRTai9v83UTZhiNfsRBRoktMjV4NA4MNVRNGH9iKvStgbfKh9sHwuwZkK3WfkP6TMFkw21LU",
  "key28": "4ev4CpBj96zMFKHxvqR2MtnA9rXnwsFpcUi6o1vkU98s8wK2P3WuqkvWhxqeWBepvpF8whVFoquXcap6abW3wzrq",
  "key29": "2JdkmotrjmbBYHDwfEDL485rotRykTaUUR8wwm6ZQALuics4Kbh252fi1zynzhYNMjuJGMZjXZsWsvLExJyKsQeV",
  "key30": "Mnoe58UQSqf87QaTTZiHYZxgwiZDdqkuzL7iB15EtUFon7ZCPmMi1BoJYNAkLk1F6CiKUQVcoMHc1eKqKkiCQin",
  "key31": "434688H8NXXo4PxQ3SpU5WVLZU7cyFU3kxuSrB5cuGZeME1LBVaHKp6xtQ3ifYZsx1Rbe8Zu7EMjstprH7TshPzo",
  "key32": "4KziJrBCyFkYVyhWp5v6KybV7btUrfA9A7ZZo7QbucP8xjoX8R1v8PHVpTdso4i8wCxLH5x5L2nyNmYJrbQAHaLe",
  "key33": "52STvsBrunghs6JKU7yegZbquPN6Us9cxvmodVA1SAwMQdkZNqYbLYbvwyze8BZs3od2iqL2KcWv3MNT79b9Fd6n",
  "key34": "3oYqjZqmTQ5Xa8TTueyKbZ3EKmPq3aoxnQtaKmsr8KW5s5T71HnrcfhHLGRqU59446dycCfzb2nS5h3178WAzxfd",
  "key35": "5uTFWny8jA87Vycbd3eDCMWQkt81VEA1uNXA7N1UvddCFmh35LVTkpqoU9Shtmef2GqD1973wM4i1SyqZQpHnLXh",
  "key36": "5QRTNMiYiJxCjmhrWoDGp2UjjpFNHaj234HuQRNGT64Wx6MpHQNoaFwgCx7EbZKsLnw7jgPyWTVs3BLHwBesDosm",
  "key37": "61gdE3QfM9wc5ctyML8PYx1aM5L3SuDXgCL6BQmrcksfQkVoYLQ9fvzn474YRp3yUZxBam78S9e94frvFTrxwXc2",
  "key38": "2UkCiM63epP8gjkvQBmLtSsTHZ1VPcJck6iVDHg3orhyABZPcvq5b4rdCzo27c1i4eMRYMbagodqxwMaZhE8EFi",
  "key39": "2E2dcb5QT9fzq2aj8K5ZwwkGCR1dNXMzRD2fbiZSR2Rxt8vHUF4dmZcNKthBPciAfqajfa8fxba1sr8eKjEF19ej",
  "key40": "ggcFkeHiL3zF8vMNtGpakwgaPZ4tWsR1zsp52LdvrC7KFKwmrsCN833baw8yfQBS5YUgEFcPjshdCZcAqnLfQaM",
  "key41": "2Y8dy6DFdjxRGEE2oRCxx9ko8iNNzoud55bnSJ5Lf5ucpo7GCvZz5S5eHaAEXaXg36amSNkv4awG1Lod3ZwCyLjK",
  "key42": "2jZWCaVg181LpKUNwmsSQhswNbsizMugZMpFutET3g5NsckcUtq31dLwhZVwSGWLVUSHBRLVTAiHshUiWsTh2sC4",
  "key43": "VqSkxZJ7PzPPBh4CbzB51QnN9S6k4Zs2AzSVcRs4K6zXa71zpyaLGNr1CDvWZpaKdqPGCz5TtvG65ry9VoZY38B",
  "key44": "vbjodj4eVQD3Z6saNntZk2LPCAun5v6C6akpe8S6yhWdtmGAbfedXxH7oemGYnPvnfEuKoZBmzwFyJBCF82jcHP",
  "key45": "3aSgBXQjkKuwpJLkkPTB3AuSmnVrAxuYaW4hfP3CHJ2qQ6EWqsSfUK8timVcAzP6taCGb3prFxASxSb67w23EWug",
  "key46": "3iEWG1TDEzbF8FQjLzL3kya2bhPUBBDaBo9ifvq5auqBsTEJECM28wpYE2PBXhCdK7qykxbxaB8N4F4isPy6JsY5",
  "key47": "97tc8aum7XA6iR84WFndgwNyuFxCFXgTbc2StYLjf6c1fHxdXRQXZ9xoTrbbuRKyrhjMzsd4g2LrwNNncinBqQt",
  "key48": "4fvbLqVqYiTCahL6wfPZ4Lqf6HsFUmXuPSaYpaUzQRrQGS2AZpAivqGTPdkirxUuFRGk9oT5jGvockU48DsXuKMN",
  "key49": "2dXhDKtYEkKfE8UfDLcuKDicoT9J6hTBDEfLSYCD8D7DP3BGGbB3DsPnkHFzJRbSYg1DNTyMtsMSDXwvftFhgyqK"
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
