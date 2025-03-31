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
    "ezMw3AEYvWuKtwVp53gQaDWrq6gWaedG3FSaqXc25CKo5TGAre3ceMUxcncAkUTrneWpfxUVkbmR2UiVxvDhdhw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33D5qFzgkA53N2hATdnmow4k3kgcVHkYVDupiddXCWuceRsFhmQcN7E7uxpoHDqgQUXM3hxhAgBHECCVEGQzzJW1",
  "key1": "XNARSZgHb5eGdgcqY8CcpvoxazJdaKaZCCDEgpbaqjpwUkek86dsrPdhpKvwiQ7obi9pom4Z9gSzQZbSN8sGF3n",
  "key2": "4LWCeaQtSeVQuZp11611ZuLzWjEwjvvrYuvAE26rquiteg8pELHPEYnp5Pcn4ueF6yC5h6nXtYU8YL5GHi1oAJpS",
  "key3": "4YEHRUBipzDnnNmkQtcsZzhP8hSsFdrAUjh3gSvBP71njXKPsbW1QWjecYoopY5J5yZutwJNXT3y9DSfYPr4xvHQ",
  "key4": "339ru6ZixRKJmokpcrUknCJmyJQFpbYfZ8pnM9MpSCT6KL8i5ZApfumyyi4bhM3HXM37u4pEzRyRuLSyw3cp8eSe",
  "key5": "4jG7fFfYYmAQrCTbASteqCqPr5EFRM4gKALwQSjjd26coC4HuUCFvuDPPXyZooZe2qDCd8oVRTVkRyu2SaQKHQHL",
  "key6": "282SxPSnTuyKZMC5grfH79wQ5wFhbYeurT3DQxArmCoPuJhix3pRxGGbPYEhg9zEVPq2nmVHdbjXVMJVsZx8SbsY",
  "key7": "3nMij5vKz81yFpYWbk58JSUeFRLSKafJaRGQbpbNGnaHAtet7FuKGd1VL4w5D5vXM2xLaLyoNLV9edWTrSyDm9WH",
  "key8": "2zUw5TB8YswnkbGzQD2Gc8rWMbxiBqTK3hyR83nM7keLswwXtwFbAwxn26MBv7GmxCRj8Sq5zSyosNzAYJooo7eS",
  "key9": "24htmNbq73G5fEUxNvqoFxGXCnwo67t2nXiRcUZAu89aKX1EKrzUaGQ9PJr5rqJvpomdVsqTUSFYw4JZD84Q2Ks2",
  "key10": "2QT2BAGF7C7xXjSkGhcdagobKJiaEJUkxvA2M5Gw7GucPnEv9ozWKyotULbyALQwPrpNHWmURV7Pty3dvmuAMGkU",
  "key11": "4L9cn9B5sBaiC4KDHfQSLRDmrYymjaMJHrXGbdpK6mKCfh9cn844gxVScmmSZ1TbWwcAvtkvKgM5srDPk53H3KZ3",
  "key12": "5PZH1kmcZvzu8vKtPDiitAs9bA1rNwQpnRcCtojbXnhfi5icJ18Y6cEdHXa1SmgxNSu7Mdmb5yGyWQSRoLx6x86q",
  "key13": "C4Vj4gA51yQdCbovS4ZwpywdNEK6GUDcXBNHSfHUk1PUS6Y9ahc5Cu6Ky9toRLUNV9275jwK7LaVjZMTDSFDYFj",
  "key14": "3Ptey5tdEUiENKN3fu9VWVx94ekDoznFh3jTfPE2tHXANsLvXRksUsZm44SKSofN3eXzwi9p5fmyULLPUvCzbuUH",
  "key15": "RLPgMg3PCLYN2bwVAgRevjC4wLyhjuepru5aRsWj2gbqTqrC7cfQ9iAhwGir2SjdqoNYScekFPiA1wEWsNwhp1i",
  "key16": "3Vc2477ET5o7sPeAMUYS4jZHDYNs2x6n77hfVbVuwqpScEkMXBtDKEWKsABbZZRTs4sVejnJffjkm98ijyBBHpwL",
  "key17": "5995UxevqCuxQeya2WHZSHw96igqx6NP5mu3K1SeFLSBp9xYDiYodgcpmqgxD8kLHfAK1aS1SLJ6ymAAwrCCa1GX",
  "key18": "M7wzayRbNWXsvRcR5RaPCSeVSija8941rrS8J3DWfcmorKXj9hSQuZj7eQVx3CJvr8AaoHwacP1rkCoNA1S37Qv",
  "key19": "5tjbgqGxUEwMNFR2Zn55K6uaoNgXmErzEZXNHCCwwgkY6772EkooJTQMA6EB5SGTfp7Q4pQqcbMWVzoRM8fxRiQ5",
  "key20": "31hg3x6SoabFwudGfyFnuxeh7rvLDQmKVw6N7jH5ao1Lw8vwBQoEocgqFGA5Kmr5wawSF92gcTuRExPjchz6XVuJ",
  "key21": "59pNYQse5NqgHEhGycvCZ69o743kTbxjwEByep6y2gK9aL85nyD6WuF3vQ891JxK3u5qfEJD1R3niJvUCMKPfmna",
  "key22": "5Wu3DSkP1vPZ4Efsc4fTgusG4AZfcPoPFc757nbbpHjjf7DAX3jaNFNRBPDaUN2tzYM3PLmu5F2AL9UaS4xQraon",
  "key23": "3bPrpjX1Mztw8Yzv6xX22s2uCtqurMAHUfJFWbzWobE1hocGyuzEB7iK52Q8qnf3a4nspyEytLbQuQDx1jYtHPC9",
  "key24": "4rTi594QdQhxpvWuWCYhY6G2UNToV54u2x3Yf5soZAgKvK2LBYPSAxKV7ovhcCfpUt6ZV2rFSHbAabg33VFqC6K5",
  "key25": "4sicRHKsEkMnm9xaHcKDnuAdUes1beuAtQKBdzZZY9Xujdf5KSGPraayow4V5scbkiSjAeerNp9D4u8L5aH5Pk4Z",
  "key26": "buHfhoxxsVjef1qfjgpb5bE6Msi28TzxFQ1BCwQVCoCLauAnNDZt2LGnT2ZyWuHAJRMGpDwXoZqovxu8TuVpai4",
  "key27": "Qfv9e6E9a6hkQReiqQEEmSScrX3RCuduw9vAkhxwU1ob86nDvP3o4S2v3eTsy6jQEZPxC4jwrB7FHadL4Sg1739",
  "key28": "3P8sz5su4n2AWkF4Ueapsn1na1gu2yswFyDYRwyQ5TBso3SZmXSfEFbqg5nBVnTSPvvRU8w1QN66WCWaYqZo1rSz",
  "key29": "25h5cYCvmovDY9vms6PECGeJKCjhrexMYyrmreFdBtMuvFkrLXZNLZku2axQXVDsEzaZU6nKxh7eYwQQHw2usPoi",
  "key30": "46mMbPxzoimQ5vwvWFt7JQsDmRhNWiCVWUdeQ1YBdYAJbGsjXWM1RR9gVCFiC9MN3t7ng7iAGHQVGDGqGS3bpGhi",
  "key31": "5GC6Jx5TwK3KQaYJ5rs1hWxVBjjU3eozDjqXiHZnGXR3vQKuPBtTPCjtWMWrs7aaoZN97QHSpNy6nDLCssqyJ59L",
  "key32": "3Wz1Q1YNDT9ethMTD5ChoVYk9Gq4S6pVR5hPSunBoZsWu8bmvc9fdwEJqY7AjGp8Azhf4zpCmDFXi7Zyy36SYNXb",
  "key33": "5Zf2ZaTf2gaHYcNPSUGHCB8Y7bp7UymR1ew8LKK2bKVSwEdXXzXtXZWM3EGcqfftFJJwe4fPUFJPn5m2fLNj69zc",
  "key34": "4oD7HkmGtBssGCVabGU7p16FXqTc6XNV2mKdzQFfC4NMhLrMboopsoK3wChxBqyiGgXtTsRfKpiFadDyaHf7Qrws",
  "key35": "5zqNxoA6aFjTuvMHq2y49seSQ4yRSwPZ9ZwYZRk6vsEZMVN2E7WAvXXchwgBqDHRQYdPAPGBcTu4nD49Xj8s2Wff",
  "key36": "4EyKXbPcets9F4FWXJ2V9QnFb1chXSM3YEtTUdmRpXUXACHoh6WAmUiv5PHgHCUcc1ByXyZ4hgycZPrhjM4e3ZKF",
  "key37": "2LTK6V9BzxYD59Yq1Jpwvq4kUeiE8pKkKMatpgpmoBRMshmRTnd2xnzKfN49n7D4cpGgdMbr8MjmBjDKDKFTFUmw",
  "key38": "5EYgTRN8SWsUPzyzYRetXPq8yPB4Y4E6hdvaPZwSiXxwU28nshBdKc3643ytZDbmfoVYLLsWBtJoi11wgcL6FR9s",
  "key39": "5NuKzVvR1ooJcX6s2gzeuEyJKitSjjsaQHgC27iYADFXALcD686tFdD5CNkyPiNbPRpQKzXyQNUJK7mBUMfRFqWm",
  "key40": "56nkhx5hmTuacVNStE7kFMLax1gY6MwLx8P6nkPLo3rMetWMdzB8ATQCPW8MLci1QUtr5upAZMBsESRnpctEPaMy",
  "key41": "3qbTqkPaGrYas8wkTEFhBYyuqTJ4TBSisEwGrAVMmA2PUjkUZiz5WHQ8oaXKyCYd9UNULqiSAaXB2FQfzWaRbwYF",
  "key42": "wMXsDNUfVPgbfqnQxRuJiAh1HebbqfFRiQ5m3HfsP4TJcAqfaHLFQfh1KTmBqBz9QjHRYQQw4QJJfcWQQHnNTJQ",
  "key43": "5J7ub48Hgkw1EgCnrfAh5crAc5y11sKHcfRbo8bPFkjrMnPiZ1QkaTq4gnrUwvZ1nsYDbiVpFd6bovHxGyHLyVwL",
  "key44": "4YMTGvwfHEReeMTkXJyVCEqucKptSM19xJGaoDvSRRmRpT3TrQYQBMum7GTF3ZWkKhTq6svgbKm7kK9Fq1VJvPSf",
  "key45": "3kd4dEP2raV6bQoZ9VAvS4MfDBZ2P3SJQojMZygLfoi7Zr5GzUMJZFLMBDY7x6YzLb7xjP7k7h5X6VDB22LcCnQ1",
  "key46": "2S2pJMiPWVEsK8aG28i4CT1NeKviTBBZmtpLWTgDijRs4n8qnTt1hHbPaRf5vp5UUvkNyM8DqbFDYLbrhGsHaj6H",
  "key47": "4D8T8Vcct3vWfoXLqtuBYgUPVDW9Sfdig3EXpCDTYCvvYueXvYRZRwF7Zdufi3XkKfa4wJJKZSDxuTfB1qtJFin3",
  "key48": "3QMBFw8SorfaLnxxB9irtDRkDBFRYVtuKdcNrXe7pTcpdSe9FtjhQDTmxG6X4852hdaiqCeBCHJ4e6JTXQY5WcyU",
  "key49": "3t3NvcQFkkh4i4XRaiDTLSVUr8jSp8tFxgXS8FRUv3LuCoxbtXBtE2yS7CSe4oJUfGFDFVA3jdKaXhLuqwyaQrY1"
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
