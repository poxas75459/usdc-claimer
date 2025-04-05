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
    "3ErviaR6VX2yhMPnCCCZAW7hGTNMT4KCRfpGXFVXSgTubR8tkVHKpx3zMZAt6CJmtw9UGfUhoLJVKkV5jEAQ96FT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AtpE58BJUm5oq2PUax3icigUR6Gb4jz4m7oushyw3gTRySPLBQTapWDa5DdzDGj4oGHkrFB7YQTJnCJ2ksQfMke",
  "key1": "5G6M4y1ydG1aFrehJD92cVTZqHS3R9YqZvC57Gg22bu5KukrqVPe7Xof6Chx1udgKUH7AhwphaaTM5o5buzP5LLE",
  "key2": "2rqLYDCGURY5ZbunExG3mE4dhCJy2hMvZ9BcU89Cg5sFsP89WZKxCqGoeEfiuJEm67R6QJu1jm7WzjvR8ccv23oT",
  "key3": "5zLHNJ5UpLuVFfeTFMQ6hcnNyH9RAAzbp2XT2Jd9v1d42z38NCrhczbaD4hcUfLYsU4EyUapnjC1QwQDaGn1Q8C",
  "key4": "3BjbfrSTMeUsB1QDGq8LqSkScbsEpxPAh2joVrj94xRmALmF6QKaBtsxi8oY3jxAWHPhhzuvkNUGsyaKkohDZ3RW",
  "key5": "5tkgkZYM2KJ3SCJNfVBXM7Abcge5k51FmkqeXsYz9kzKxgdqy9MzKuqaBEB7V5fxEpPPsAp6hUGtcakNXuRokyqC",
  "key6": "2jW1envbw7fS9dRZAwWcTvtWAaK4NighU2uuKfDsbTECr3iSZkNu3e6ZLPV3N9NrGCRtAAYnTBAcXnBAP16kn73J",
  "key7": "3ShMciWvuDnc75WivEn1AT8Du3F773QH1Vdh2rMnUqC6YKYAsGesVwgjbK6B1gq2o6288HvNB3ovWJ8jn17ocEAX",
  "key8": "9GSd4LPhprijxdA8hkyXaJGHHTXWu69UVcb9nNJdc4Sftqrhsxgopgkxxarju8bRrEm45e2tpXDJbTBfmDvgWnx",
  "key9": "5wZah7MjSo8p4gGQsRCDAH55e4p3P8RpTV66uyDQK6E5y2BEvBuSGSfpgTrrcTgHHSD43zSoRBvRXiu31BDu7FRx",
  "key10": "5eXLxJkx7gTWnRFnyTbXfFLmoFKUjE54yzVLjxdS3ZtR9sUeYpHq59avDb91UcUaPPQDAgKiY1JLs866swC3nNpX",
  "key11": "2zYvbEucPZdhZtfej6cZZbNbKPSFRVfx3DgbTuMu35r9ooD4JURQrM6o5QmVzCYp3yfd6jxiG6nrAh8Kpu7AKRZH",
  "key12": "4WGB1CGqnGqZfoL6W3BfujHH5uAAUpuRgDcS6aEDkWAVXciRk3HeFFiNrKM72CSrp7fL434Nk9iRTYWXcDYTTepj",
  "key13": "3FouuudANBW4sx7uMDURcfr9k8Dja3KkW8z3axUqF3cBmfcgp26nykTJLtZzNcRRsXRNoy28tueyFYxnJqUjpDHN",
  "key14": "5VeMbQXy7pX1RJP3ivqeKuTUudZw1qXgVNpfNY8wEUsJuN747sD6yEnQuzRAsGd6kS7nXUhYdJW5HBMWXhGCmUKC",
  "key15": "3oaLkYdeiuV7cZ9DsF8sdYjBe4822Dh34jascDoMUDf6e5S7t396J2ZBtSVZXzESp8gbUnGuwFYDN4dyK8Tpwtz",
  "key16": "5QHfsMWF9SUrrFwWUgQc91ZNkkxeq3yuNJF1A8oehzTtnGUFwJRWrDBPiEdnJYbF1AxMAJpSsGrFhzWJtmVftQVk",
  "key17": "2KtVfMkyYShk22JF9hXJ7cN9kAXeKE2r7iFuR9cRSepvWMmVJ1uZ58U59x4WzomTnH1MBKDM3DCho6SNwZYFyXoj",
  "key18": "4uoF2PrNjSNRPW42pjRJP9t3i4eVreCa1JcSM1k5FnFZfq8MCyMk4VsTs8QUrdLyPaZaRvrkwqjN5FF4TLzmhP2G",
  "key19": "4yGs6EHQXYdGKdA5WQ5Zyatfeae46gwT9W7vM8ADm9rhizd6NGkCmYf8snYB5yUZXaxwYvcjRh3dHZuJSSjpfCM3",
  "key20": "JdWdnrFSXw2qiW4ydjTxVkYvQuB3vMJJ2fs4amj6ugRbmrvnP2QmERj2utB7dxuLTySszeUMx96aiJ7L2oJ3DXD",
  "key21": "2iJZgtWx3eqdjbE3VxEyNQnmqibS7zgCEeo69ho1fLMDMGiVon5a4gLz9i1CgrDnyvKm1d4XRELnkmCbGt4trJyV",
  "key22": "52rA9kTsrAxkn8WbfruJuprrHuFA9R57CjTvUMLccRhNJ6JLChrrfFxPZWrdrx2C8EZM6hQdS4sKujP7AMhXuCoY",
  "key23": "57znXqYsXdcDATmjexzSAy8YdxQQ5y27Gx2c7HSGzWqk4afaLgfs25gy6DQKj77siFvQ9Fw4YpqTStL9fTFF4kGe",
  "key24": "4qejy9DwoFYXfdKXQ8RQkur2CP8aerZLg6pbJaWyMX26pMuhdqm8buLpXWAxkBYtngqhbrtyzSrrmTVHCPtSkyHF",
  "key25": "4UnFk3Jcp1mraiJJJTDiiuK4NRswt3fNL7tKijzakXfPuzDqZj5bH4gi19RpDmy7YzVQdGEo5BbAmacXEA3rBAHj",
  "key26": "3YJ8PrdTKKkeHAga4d9AXZcWNSrco81NcPDGHzoFcZbVLAbj2cuYXHrxRC5fLGJESic86KLym3CHQQBnWn51fHW2",
  "key27": "5AudDkNi5551yWLWokZT38aGNVaM3gnrS3begzTtjfLmDmbZftAHw7YLtUNkXy4PBMabVvjNBB9LcsnzCnUk1mtJ",
  "key28": "56aVhZXk6GceCbni3Jb4ke4Mn99EUZyLw36ezQY4hDNHJrLNgyJY1KJHtv8wURrzRKUyjtqMwHT7VaLgE5NZvD9a",
  "key29": "5MwLWpYstB5dzaDdms798LpgFsYdX6ZVBvtD5eDGxzmVN67k4nb11PNtEVkqEgADPQmPQ6mwpFwtL1Faj6XLAtpf",
  "key30": "5Y3RaaMvL4yJMYvDDYrNZ7frX1cXca9LkKDbU4DzhiP8UBoKagmingBDapHF5tBa5YKPhzCxWV8xXRxkPqdTc6Ax",
  "key31": "5DgF4LyUgDSF8y7ZyggR6jPmHPoPoRCkEho2Q6AFYwQgnnruNvKEKDuqyQwGeAyfc39BWQxECdJWtace6SsNrqNa",
  "key32": "3FbFDr91w69r8rbGuDYdGxv9nuVDi3iVb6W4GceCK5LggAQt8CaC5DFvG3iu95ZnJSLRACvBrPzvVUuvDU29X9kN",
  "key33": "3aaLGhaEWDRLC9xcr855d4ccjDjhe1NFqV36Yzn4ZqK3BodmdqCpim43AKChzpsJivKcbmng1eQzdeqHY6SiwXRz",
  "key34": "3DE9ATqiMjsZdaM5k9gffBosX5ngsH6ejTp22GPCf5dno6Ddqhx4AhdtsqjNdLeVjSGd1iia9GR88rQMzsYLjh1g",
  "key35": "5QejWwD8oors2PLRWqZ4j2G164mYQHSYxyLQjQ7xLi3QThxNxKrhxkX4No6Z49NUr4cdujea3cYiPTrE4KvmocBo",
  "key36": "SB3hdkpwmcHbKN5s9DZsLdMGjSLf4f2Tw8uBX6s23Mbo8bCrczp8w81iHuHWUW6C3meftuZFo9FxTgb8hTLfDQJ",
  "key37": "5WMoYzvFrKD9LbtNavDinj8wKPYWYNwcQESjwG2WvyrFmRNKN2eQLefnoWPGMTHXPWaE87q7qpNBMSsV2CjxSrXh",
  "key38": "4G6VqUjSXD7JqSYn9bkTirwidsRvMAev3ag5X6h1XnJgbMqXTo1pnubVGkbfC1QxcZRyU4WPBBmpfQFseESSeeVV",
  "key39": "h81t6jMmKzHF9r7cjZEeXhNJjVeezpwSc6wdCNNgpxbdsQ4Ct4UdpRcNwCZ9MYjYY8BeKPqPheKMp9epBGcKBQp",
  "key40": "2fxeMVS3cPBvCXEWKVVSQdio8m3NPH4FSySf1z3tHnBCsySNAFVsYcuTEZ5jdXXrZqzfi53P9ijDTwgYdBJCYyA8",
  "key41": "2ucUjNYgohqnUBz5fwUd4gAYCcjeNUaf7d9Mf1Xk2LXkKKfQ9BEcwiJ6eirqgqeP57DJhk1DLd8gWkVU5efCJwiE",
  "key42": "2Q5ajXkpY2uSEBrjFokfENzuth1joPoWi2NrP3LJGRBnc4KpNXZfq2B1qsPAnvoZqkaz7nnXUYxhscSBuAXB2GCc"
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
