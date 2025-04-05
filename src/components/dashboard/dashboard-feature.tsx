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
    "3NqnAdCmvpiDWvdaibZtqvPaG6vkyGP5z3vCNpQpmX7JbBn4zcRtQPv12ucGMmJ4uUrc7h4fiHhuCLmpZkwnpLbv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mSXJ7hhnFaMATcuBj8kYS2GKGGe3z6ySgFbFUBvN5S9JeVmQChj2sWmrkPCzWgeV2Z8aWtKb6jj51rc6VzTq7X9",
  "key1": "XpcJXCao9uPCrYiCgUMUewGuyHiHDyvXLSrg5amRYBo2VUxh47qqskZeBUVDEYgodPcPVETuXT89c1B1w7Lnyk7",
  "key2": "49stRZEaE16VjWz7Vwi8MjRL8WSRBa1wYB39HhkniiP8tB1di7SD95ewaQvqB3R2nisoFoYBWfVgWZBw3wsijok7",
  "key3": "34fLTRN2wPn1ZexbsfBovh89xj2qgXeMhr1rsHf7quCDHPQBd72Efv7Pm5nMkCdzxeNf61Wo1rivvnmR8hsXkd2o",
  "key4": "5HDkrHhgGZdXsx3recPfGn5xzU6x24nCcfwAa35cSEB2F3MwmR59aVFBkdRmeCzK4erD8CArpMoNgajGfPGi7nmc",
  "key5": "4bXEWRUjZfpPnUAtsLHRnQ55qXUc3AdwSLMGS3LyXs2ZEgbfa6D4XrjSECYhEWzBNFX7AL5rmSHzRwRWtjHpZE3G",
  "key6": "5J6tcdH4uUTC56HppNj9ZvNLu1cmErTAdzMF6ZmSJBdunC1abDdQ73XxxDqDs4XzCjyi47C2MxYJG8gipMHYFPD5",
  "key7": "vDHCoD1Ng9tutN2y9Nfmx3QZwtMiTvsmwvorAty2RG7H9sydi9HPM6vWtXiz8HuiGYNSzaAoyvLZZ5B15u5m15b",
  "key8": "3W3JFRgCPk7yitr5kLVkGjJ3poABmjpHksAd7KEHCKRV9azDdf6t9CGaF14f1yh4easjuFihqZGWws5WHX7Wqdf9",
  "key9": "2oW4ZmZTY48Xgt2Eo6WcrVZ14VW3uyuXfbckbAANpZcxwwpiNuNoHskMa5hQ19gnrUF1kvgXXzPaNovTkABkJ1A7",
  "key10": "52jKX8QD1qSevwz9sGjyrFo75W4ExMGAerA6RTnaKbiTmtqRsXiR3U5o4Secxpn8J5tESjpcbKCsPqPNPyuzdAeu",
  "key11": "2J1ryfbxYK86tSb2jhuvNwovY8kKuXWgXaxtRydrRiXU5SQMEKXDg47jqYH2y8twWmqXJw41KbniUuVEDN2QmKza",
  "key12": "oqiqAQgD9ctRjjoQzYGsymTTPysrHPuTZ7zVUdQCHDc3GuNK7DrheYB1LQbyvWtmUZQ8MgDGPEotQ7FnFpvRod5",
  "key13": "3yijvwBg4J2VToqiGeFqc2VyHZRrgsameajX2JEhKT6zjfbMpJ7XbB7MzWFLbDgxnZWNAqCowYsGR46gT8e9omWc",
  "key14": "3z2cTktdPrVvrshYzN5NeWgLmD8x1qN8tWTxacKVFeEgyFieXomPz8e8NmMpYscoPwjbwuQzwVRtWtAr1b8EnNPf",
  "key15": "pG9c8iDsyBMwVv6KCCSc7wXpXppCCrQkx1nnPGYErgDxCJ6GtCkFTnwbPFX12ieB1bm89eyVznKN8NUHC1o8D1U",
  "key16": "22D6mmCEuMCaCRpERBRYqJ1zXcBRXH31NhMZDG6nLPdDQyS91cpv9ARmeJXiJFfBzuXcdasHvRNdA75dy4ywZzjc",
  "key17": "3Hc4sCWrPyRxg2DpWRaf64SCon1BrZSNfZXs422jgewiF7Jbj5o5RPsp6pBHckCTGMWJrexngdDG5cjxDyBKL6eq",
  "key18": "5exWpcrDvfYMaaV7K8TfKrWGcz2sXQhdhiyk4SUsXBvpnAPi5eRE758ZxkwDmNoeEH67FhgNMWNnv8iiavYxE752",
  "key19": "5Qz9HUzskAzbd48uXMJWUTfoC6WoZLexJKRq3ZAuEy775EmETL8f6HL28GosFCkofQRzW78BSvSo68ELXvhWNa8Q",
  "key20": "34QsYeKSJMwL3j96hXMzVDGB3auf7vwfHxU9Zm8gr2ijrtKtYagA7Li4nFdUrKNm9kLABCae3ssSr3jkuKkaNfLc",
  "key21": "2aZBg7cbbgcS2FG64xFEJr6DsnHa7QMxdhVcBNVeQxMovAJX5wXqf254spUTVR5ViVdPdYB9MLNBbbLYtfho7UHp",
  "key22": "64r3ZzYnVPAopAay2vkshLWZH3ccw38B7uxBZx5ARemtdiJ5enMEgRDK4sdZMhcSJ8gtcPFAJpuCYFwRX6fUU16L",
  "key23": "2ZCB9HZ6zAu7SAvSrE82Pob9SdwoUDC16upwmxB5agB4euouA4stG2bYmCd4Jkgp9VksUm2UwUr6pV1bWGW6WZHu",
  "key24": "63hS4EmFqofYkCh9h9uZuDKuLBfiMxr5Si9TmUGmkLcX4Z5xBi2dWUBkXuUWavomLHdCnQkj2MAUUWAivxnhztXw",
  "key25": "2TiAuuGKaGDGrkKtkk79zpu9QXArGbcgCCsqSNGdhjVNFkMMkEB9TXat1KWJNEQuCwL7LpNt7HUt3zWSin8WLeJp",
  "key26": "5haVg1mQFPprtGZHFiu7HwPzwBTayfQUW7399hvtvDrGuEburV5RatNtXRNzEfbSr36WfPfsNqugG6rAnoc2vmGH"
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
