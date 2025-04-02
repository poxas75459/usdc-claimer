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
    "4fK2U6tBpKN9ismR69xd2gmMB21hfRmvRfEbFHyBpw3pEu4Ai4RfDVvxZZifcjjneWfisRmjFzjEMexEMyULJLzg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H18XikrAgFXTg2txKTkiwsenikgrfLfmKh3TBbp38x1Sy7hP7BoKcRqY1kPJRsKe8kmyoFmuxaTH5msoBQHgJWu",
  "key1": "23RBu19Cn85wW8LguQVnRX8ZtNa6FdL1ycEEBCwUawWBBv3LcShiUFbvDx9YdtCZyUss1jko7z9EwxC1g4wqf91Y",
  "key2": "e9CTAQJyrK1m3MNyyUxeWQYLSPoVwbrZjyLvn8FJZqK4TFxzWBujkiTeTdxPTDZYWbNMWK6yoGHGzVtjLYCmLwD",
  "key3": "3HQ7w4m6oEEHswf6XWYKmpQGSWvvpUcJyRGUfLboNyLWp2HpVgkJLhDkMSsvdHDGyMc4VpAHBg5g3HtgCRR7wsFj",
  "key4": "4tovtoi3eTc5WaKtYVmbhBH15Ww2qEXQqBhGYfwhkWCA7WTsoR4H1RxPN5YgncZQK1eyy2tqMFoRXt7iKGVec37c",
  "key5": "kY5PToHBXApQ3tCqMeDdEAF8svd9KxhXhr1fsarYniSrSzWtWiDNYUj1CGUwgktdWiovGipXB3EzGt4GdpkEHbF",
  "key6": "4Y6ggapfbK8WequgkSMb21Zf4oymMFFqyTuryLGBXigDpZu3q3Dt8JtTSJGpJ4sdyLRneG7xmHov3snnX9skRKBK",
  "key7": "2bqoaoZwR7KcCvLphFRnaETN5EneeuN77jdn1d3ofeAtK8HsdamRPgotXwZE3bTtZReVmHPqxf8jskSLwrjLoqsS",
  "key8": "3F81Dzd5PF2MzPzCMDL9rRm3oDAurLNUVLfmW1sSL5YxdNw9vrknf6o3VQggMSxURcsQzozQUdEGrBaKtT5u5vv3",
  "key9": "32Kum1MDWXvKJf2okgkWMm3Jmxtd8HmPNGx5KWcX9FvPKasUiVtcDTnBBcFsFs717niQZpavqnLfvFYntKmwN7PM",
  "key10": "2gLtZ2YhMfKfS8kVPP8aCmUp6FjFjpDQXd12HNEbWD1jtNyLYEvYyVz7isahL3FpSoiUGGwnsPntL5fRuHc2dP5s",
  "key11": "4fv1YaNzbzmCHXUrKp2Los6kpT8ZBPZ4iRUp9sMaGhCP1x11JrDd23FuD8qT6ewiCJigNGE1B2vqgwW4ew2uZb1q",
  "key12": "4PwrTDkWPeu75uxfeUMA2a4GA7mPxKfKNu2oS8DeCpohdJkD8y1c5EKRDTJkXhZD7jkr13Bf3TjhKTetSNEwJCMz",
  "key13": "zwgRDyEGA3HJyToSyQoUFwgjBGBJcgdd4vRpysY9ci455FsWj9uxBJio3A2h8rhLesyQNezZ9pS6W2Cz94M6cPX",
  "key14": "5RGTUBon87dwDPNH6512hHgWgtiD7MvpTEL5LNonP7D2dCHwcBifRCh1pXbrPK5bd576ZdnRp7AHhumo69xo4rjf",
  "key15": "2ctWD82M74YDATKrKP7hB54SYDFDpwdogYjq6Vw24vojpciKyU7sraiffQfgCAQyZ64tgMebJUQVMBhjWNZerHHf",
  "key16": "3hDEkbrDALZwAMmesniQEogPqUmK37a2yU91v9wj9Uz33fZqFVUNMV3yaGB5WXXnNPbtrk2aagPUemUnLrrccRMD",
  "key17": "3XmPq5Fkun2tNdbdYmfP64DftyUXQiibzpVwjwWemKLToMiimMaeufgaZbkFckvQNAge6cXWHs41NRi3JwcJ1qUQ",
  "key18": "264suS4bnhBbVrqcw84dC155wMyYrfwvEzJgKiCb5ZKPGSsWScHmzkkRGVckcmnoqGceFQ6sF1mVa7UMuihrSRNH",
  "key19": "1BvoUowEc1RnXPc8KT7t5m4b7vBneSNTGTuwwJhTWMmapxEniSKWmPKQHPXESn1anC5o1mXaYPVgmWK8w5WqStT",
  "key20": "4zaUKgvA9eGp8rrdHNvD1q9eVdUsdPMWSkqp5voNRWZHwiAk3nV6dweQU89HE43UbPwBvHsVYq4yQvkQ2R1AK8kU",
  "key21": "3LUNvkY7QEciDnT8j8yq9h7KUwmmYxuqygm4qo7wftawTFRiU8fiuvRLXr4mt4oSNtfc3Gq1JbopvZs7NxL3wHBR",
  "key22": "5mCQ5ryP3jT9D38YUoLioe2Dmcm4NzuDAZxPHKcNssYgF8oaisX9cjFAvrvAchiwePX8Mv16Tn6PfdD1Pi8wY4WK",
  "key23": "3ahexrEQPSHmNTpYBHWFAPVGvmaNX9giePY9J9MXE5RoNZUZB9nU6nM9crqiHDc9JHUJ5pAFvpckNZyT5aPbFCaA",
  "key24": "5indu1wdbbFfEwvcXVT5jELAD3d6dYNkf1HbMjEW4kPmp9e3WJwYm8zxqRiy575tUR7RCzKxE1skHGo3p6qwgWdN",
  "key25": "4MFQnctjw9jAGdgwZTRNcM8cQ6ox53vUKVvr8wA9UAd2EcJ2VVd4RHuk7RamtEEakRamLB4w6euWTcoqoi3BxS66",
  "key26": "5ywCXoGQnevxYzhGaZbJXmR1xeBPhpJnNJ8VH4duzgKKfw3NS64Jar4X5FJNj3hsESXniUtL9p9AZFyUrftytrQf",
  "key27": "5zV248ESUycPJ2NJ1UTSZnQ6FHg9S17ueajCWdaum5Hq65nM3XiyJvocdTpQ1pNDf4kJBjKhzN5YieV7zEvQz68R",
  "key28": "5DbksWMe7oBMUD6E8yXP4SwBCvVut4wU7HwAzvACqxfHHrFQ9aF1x2AHQqq3A8sYjCHXGQdrTSRkuKMz8eV1u6r3",
  "key29": "626PWXLpos2TRmhKqMpd7xEmKdmRmQJPo9NQy3dsTevQPUDCAdNk1JthAptFWSd2Qc5A8GStrBuJf6A5QznCx3FM",
  "key30": "3VQ5fgvwttydw46uGErYnv3Zy51Ku3oBcGwxivo3Q2cN7qTWApk7WXsX41URWdnq1h9YVXBACXAZS2yaMZExbnqV",
  "key31": "47NjWsTwQxACJpa3imPQ3eVKbS7kVx3iYMEZ9rkmwXY7y6i45cWmbMA1gUiETw3tyKsNzHymg9nBCRVKG8Tng3Pd",
  "key32": "RXUNGdy5ycVanEWt2w2HNVSduGBPacD7fLP7Ujfr3cMgK7AajoCAR4Q1x34W14Ct2o7KvfpwzMPqTUJ8NEcfMUV",
  "key33": "4EfAzZXY2hF6dyrU7ncWvnmZsohzR5A4tmfbY2WYeo8Y78QvSrX2KwZPfDjK137nX2Tmy1eMgn5kdNp7TfpnGx5W",
  "key34": "21boFD2wMFaLRP25y1fYniMXHq7voc2J5f6SAf9mVboMKLC2KXqy91Z4n5ohphayESGAeZBFKwRD2wiJAwBHqdL1",
  "key35": "2s5fhGYm5komazZoeHvprh6VkPxXm2yEgkwK2aB2k7L1rxY4tz8fg2f6QckHqV3YW2p83gXwMx3B9NjKw18PcvNb",
  "key36": "4bXCp9VUt5Qiv11AvBZmHyY14vrrkhiCvKA5bwa7qSYFE86hq4ZxvyBaGHfc6DepDz9DFo9QUcjJb9xmaPWBuzwi",
  "key37": "5mmGstNwkr5o844KnEgofXg4YTUiFrJEchspoKSCEpiLyUN1ThmAz3sbjLrdSh7Kus9gicRKxzoir3tPvGape4jW",
  "key38": "5G4CtYbHLVFHYKhFqHAguzpYVmZpzK5kJZCH25XZbxniFgNy1gqiiHPeriqB9VvtXHQqDJxjH4XxEPSxVU8EWzk9",
  "key39": "2Zae9HgdLGqNmdWSNVAYHhwtqXZmsSuB5JNNTJ5ixLftS4Z6JLjvRijwhLbXqmZnpaDEqW9AY8Mrmegw7mEtYMLT",
  "key40": "49uGrtGEHrAR8Q7wjYsmTmaPNvCRxoYY9C7H8yVfHVeBi5J7i1UHzP1XCnk5YyXFF6wvnj5qefgJeLJ4Luik5DQT"
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
