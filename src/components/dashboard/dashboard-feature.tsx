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
    "2boBuPVN4AYS1aDr3rjJwtk5AWMZFCMQDXyqpPVcnvpXeRaufTosiLsDtHF47i2wvZVWorfnEXrRizpJFddV8e37"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vF3GV7X6PphGzb6BaCi7xjT5JftijxdqxrGj3R6eQzTpTxaenrGEmYuVDVE7WQ3TyqbgC9NGqSgoN38sKhi4mtd",
  "key1": "TipSzk55RpSTcPnWCf4vp8x5AbaVgQpH76U4ANZzU4AXEu1XQs9NbHdRVddkoMX84m22js3jPfqv5tjhhpxVztK",
  "key2": "2PQW1gfonNnGYsgDZ2LEt8F6pmMNGrHeBjdMiCrUf8geAsWJRFRFSGYYBK7W1aBaTnrmeJtLfU31HF4gSkAMRmop",
  "key3": "31hGpQuvoku5SoEVSNuMFfYMFUktRMHtALhwk94fiLNVwfNDJ751trMtEowcxb1wGmiJ1W8JjtYKPQTeCEnxoU6w",
  "key4": "4qaiaUiXfbUnB6nAYcyXyenEVk6Uqs3MFPUtQrQNRZ3EheQe2dEKPpms7aYzxugBDy2zVrD24JRkzmomdVSFGRLx",
  "key5": "5MbxZUiMrZkWBH47vtde8hipWrNXU2WDsANGgGbTdB5k7unep7y232aLmEFGLzeqQCE5EmS3nhbtty8D5C43ufhX",
  "key6": "2DEemcWCmm83gwqkyc7xuK1Pf96hLRbhKW3sJqRc1M5gAT9x3NNrkMSN8A14euM1ba8ZviPMp1qpmtHbRKAFHvoJ",
  "key7": "3iFNQCfGXsnVGXJ7aTPYbyzUbLhpooV4qzMfqxU9a3u1h6WSnBmQhYQ7NvhpuDVxJUnffKyfWT34nveaHmkNbPpZ",
  "key8": "4LTPN1iRfkTTkgFTEmYnD1TniBA3EfrGPqn2Dpia7sr9Hbyzu6eJiPpc5gD55bMsBpG4vrwiU886F7Q2MyrBnrZR",
  "key9": "3vD9ULGjsCTt5dATXHyQYc5F7q6subEn3f18WAzGvqM6gfLBFANV9uMixX3E2J6yX9sQhZGpTZwnBqd7e9fpJvya",
  "key10": "WXSgbyQXifkxj8FZwJUDRKeJW8n98DqdYcBeDgRjujs9XFCM72BiHUpe681bVkaTFS7Kt5pYcN8WArzEU5KDXM7",
  "key11": "2e1URKrVnHJTTFSvKxs7GVHmdorBK8YHbxuva7aMBzHPhAJpmQynjEnwrx995RBWQ7A1u3V17y4P9D8baqgdYSwU",
  "key12": "3pGhiBF3uLB8eH91w4hP5kPaW72pf75tWLgVEuJ9sjdwjk7JFQ9Dx31tNdEsfuHn3Ki8yQetXMweP443YLVNS358",
  "key13": "4eddYKcUAgWbRAvSVZaY266ysrVs64v59Am567xMri7iZZrXYrGVV8wMHPwjhT5icyRq1VvgVAhQifj8gESCBnGk",
  "key14": "2RLeJa7mwZx8FmBAYYSCLAJPdN51pKGWYCuAhrWvmmjDizax5uGP2PW5WFsZEP4KsQEJqvi6NuLfuiBqHXkmaVTN",
  "key15": "34qivgZyg2tQjWdcu9XCdnATYD5gqZ31vC6bwU8eRykamZp1qgzDdHqatiTxBcQRti3s7PrQpCRtwyGMkvvxhW5w",
  "key16": "tshR3btCauzA1ZEvZKmzUvBVLbb9VBEGUiyPFdS3pEiSod6C4MfEbugcUyVAYjV1eRZXNzWshPQHEVE44R9cTp5",
  "key17": "2K3nj4X1ZKyWDqtz1WKH53gu4a16jZkcgE9VZSMkQX1w6GZkhLvRL5VPrgrt5GRW15uMwEMFzFvkCtFKkvgcaGK2",
  "key18": "3BR8Zd8x1xvRHwKbZ52X2N1BANQztxGbMnztGu1j8KXeNhhJVwGWPNaySqN6CyLoeRkr9iue1dxExQ7KUedMhSgR",
  "key19": "4NiJVMFxdFLRyeZQhJJDFEKwNhVwvnY5ZaEpefVXksogEiumhhrFvdaccPzdXRYqNjG1viCd2pYSSLnUNMeoznCV",
  "key20": "56sM4CPxVKte8NUXjYmmZxSqgKnnyeaRkjcsNGRVjscCeA2wE5CVihejCiX7LRQAe2CFCgmYs4fdhSjV5uWFbsty",
  "key21": "8GVWb7EQTMxw2VniKJ2aNfzq7wyxi9TBy2yYJnkY7RHjxwSqV45i4ywF8nGjLkmawehhT88oSyaV7GR68yJW1ya",
  "key22": "2P3ZMiJrYEeZW1ysMHuq2ujqqbXeX9BPtDvD9qFRsXhBXGJYjjq4YbsftPyVLxAgoVPurZH3ADsNj8aVK7mFVSjD",
  "key23": "27Bn9M6kzWFPAym5gfJ117VJJEwQpdy5bJhY2wdQ9DB15csFQXHpiTK6ekCnBjKPnaG5cawLj4m7pkNGw6bAEFA6",
  "key24": "2j5Khkbdn2irT6sLToRXHcoQt3uzMZNdM9oqvEtQjAv1FxFxPKxrms9ogn8c2hDDCW55DSKntFEa2AsUN8wQLqow",
  "key25": "3G852qUTPe5eXXbhFKgT6FMt2WQ3eaiAaNMha3f77HBP6EmQVjAx1ttSNZoZqdg5X44cUADeQtNij4Z2Mgn2sW5P",
  "key26": "3bgZJMjoW28NDjfZAaiZ9FEMs5aGrNgYfAQfCRznR2HXmxEun3qNsBtdcVeXZhFDP77mAmLwq4NNY3x7sxJWK4FK",
  "key27": "2rxzAD1vzL7xSnZp1wCtbvF4u2wP6ZPnvMgRqmbDBTsgaDyWJ9eKYKZuvmRKwqU5AQivTmNrygnQo2zMegBj6rPz",
  "key28": "4zwcfPdP3G5ZFpvPFkkSbtFbXo3QsTdKiQx45zf9GQTkRqi5BebXPZRh8v1KFFevmgUd2oafLqFyGVXLG2Tgp4Lq",
  "key29": "29eaFAPZnTiuJtTHtvPEoDsktDzxSUprRyWZ95EPgDjoqycmdbpV3c7LZHaFFpmkK1noyCRwKKYgZbHgSCUyBYen",
  "key30": "23ehxbjmbUkXWhN4Cnnve1znY1WWavYDW8Pnu7sPdHcmEDddYTzY5FEn2c4MJychuRYwUCYDfH2Y7MAgVot9k53N",
  "key31": "4Ag5qrtKu97cYtyYj9UV5oncFD9ZQ6aC4ZY4UvyEFGceDnQgDqXaRGs4CvWixEHgrWJm1RRTsnhJEMWUjLg9dEun",
  "key32": "5R7BPwsnKpm59Vs4oxKxU6tHXSAHsLjBQhhXtNdmUd88q4QQMmMz7j2RjyxdJSbGT8fwq8Lr9dqXVHxEuqtvdc5N",
  "key33": "HyQk7X6WKEVqXJsnyXK73gnEKRReR7D8JhhRGsM4AzheEhGh261J4TkGmqwHEi8bLXCzYFY5SczcMALsQDQybbJ",
  "key34": "mYuWa4si1kWqgV8whwoD2okRpKyeRxfKcMuPR1idnbv5sswpYK6xrbbjDf99VMhvkJrVL2KFg3huivq2xdAhYUR",
  "key35": "3CRcPeWpLx4MmXoNgWDxFGJjLaAjeVpSC3zp1BbwVv86KkshMUEnMN1ygPtoQayAksVSvJqRjpEAW8EuiiGagbhs",
  "key36": "2GgRXRTFzTkx6bqQLe7JVivXtvArevmjTLdqh3FP54221bhYxTgtpWME4K1432wzHKeaNqrfrH7F3Z7J83XErAwH",
  "key37": "618gSfe9JXHDbjUUVfP4xiEtx2SjnmA7psMK17ACupurmzzLH81cfbAbZ9vmxRVYrzj5L438bx69oinRLCbDNXEa"
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
