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
    "41VDZamyNNzBEScbVuFCZMtNiZBPT7iht66oe31o6YyxjCVAEKpPhUszkpYrz4REPt98pX7B5uvj2nnknjEztFUw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63cN9872J2iYEMLUw19UZ2WnQchdtd7tLVN4ctEXA5k1TwrGJeh9pygpEexKX4bfUGjmzoiXYCFB3ENGv9K67TwE",
  "key1": "62kdXirEYotHjXDaKrC3FWp71tiX4B7j3Ga4n496HoEA3e8wcb6NK2G3dLE1gfUkoAVBWmkvEqKkbCpkN6yJnoSi",
  "key2": "5JgF2cPoPehNpF1CfRy2BEevCzgboRjpDJcUFHVBoqr2gRFX4ynV6xe1mD54HC56wGWfqXtmUQd52z1318ZhCr3d",
  "key3": "4nNoN97ycCkKfEWyvofmtArqsrDKy5gNEdBao74HusypRMK9P4y1ze7MNnj552JZgbewktzKJWdDho3mNe9YHqiZ",
  "key4": "2pJZKngWVL1t981uyjkDyHi73pZh1Xr1dyQjbGjNhruKekVV3Lnkxs3T1VZPVKSxJe4qUVk3DxAgq7W2AiShdKqS",
  "key5": "3XBUxNhTb3azBLTGjGDEDHzW54Hu6NMgrE5b5o3QkdUJHrknY4DwAvy3Qpug2Z7GbNhL4FzA5CZYaJMzQFhkhGeE",
  "key6": "5xv2gWNrFmxpc89QKmCXJZiacvmGuwRCNwmYMcRSP2JfjYkJJMhapRR9d21uxBY1SZMFmWwsGmg6MMJJtLHHi8sz",
  "key7": "5g8yoNCxyKXDpmFSNAsxDsw9mLMEpsc5Pbz3GwQpUN8cSFSRLvqtn8Hq1LkdJcBPQX3cqkqGe384MBZvjg2bnjuw",
  "key8": "2yXwku2AMhE3opMLaQrB78EpSD9S8KmpK1PwMCuh2emCWQPq6rmCmm7sbqi9Ucsm3r3UCYVS8a5js521PkiftJrP",
  "key9": "5R58sCQVwfdhcGrTkoVTQLW5uhWt6nEM7mcDnRCXiQL4mdAaRxx14Fsr5fVwY8x19SRswG8Ke4non7fmWk6SrZma",
  "key10": "5CifztNVsfJcwb8EVxxGFBMh3d9V7Qn2ksf5J1WMotrb8txVNsmJAwRpgMjf8JqQJ6pcZTAuxZSZ3rRsBmQZNax2",
  "key11": "4t4b3qs8MJnJtSNh3TsQAfwmswAaHnUZPiEVFAzTo1yDM1v4o8pHPrmmqPXD4g1mGHiy6Q2tMU2aaVuVtMnnojUx",
  "key12": "2YwxsZwYEvi8R5oTmUDP1kptyCRWsSFd1Nry1ZaLM3Ug8YLKL6s27MZuicqyj9SFKvQUvwR2BjiwAtNwrwygWrfW",
  "key13": "XoPfabuB46Ba3mPbvpwnqFpk8sXDad1ySfwJ5cVuUJ3iCGvwgsk3cGTm61wb1DSvJKrfDmaFsbK55sivtkaQEhX",
  "key14": "4jiMEyiJYbdRZjD4DVzcrSiN3Pt1JYttzrD1ubADdT54gG7oDm1qa945EN5jvsxHLEvDBKTT8nT7PcE2orLugSL4",
  "key15": "363a9W8b2ABkubGfqrubkJgjWVgDPt2TGjaddmWAk1NHTcciTc3mgEsXX3Ft8fC7N3Kjvfpq4buVWhwhdcMyYohk",
  "key16": "3JGjb5PBtLk4t1oydfiNjze5jiuan7CCe7faB5Du86EaZRxtpqhn4yG82hRvv67kq49H5vv6T5VNLb1PnCBcRMtf",
  "key17": "5tuzMKs3jY5ZomThr7VgKzugwebJpK6EDZi6XUKgfifXCYcNqRFn3ipRnmii8MSHZpScA7qbwDSdcPF2mkHGhsw6",
  "key18": "4bdsLgpaeBvVtc4a7RSRARSQW1qTo3DibJwiNx35jpmer4x5Mj1NkJtZhdb7z4qMmsS6BL3SCfY7syDJDsxdQi3y",
  "key19": "4kbvKracJHZvXUjagoWoKVRvQxBgYeScdVp7YQG9d8zQ4sE2BJMg1BoiW6h6U4kHG9GDuZ8MMY2romGVmu13SAwY",
  "key20": "5PJx7rdsEy57GpTdjgzCka9XAW2qyzMGeR2k2j5W4DnmgcXNA81nV9qc7gxQJHSYTY5qZW6uSkWPwXA75JRqTC3j",
  "key21": "2s2cuATZpKYaw3hgpBk18twhdB6YFfz5viW33g4VaRCYjbFPhDehndprHy6eshYqiQegiZChM8cgt7AU5rb9uVz8",
  "key22": "2Dgpom6b9j2UgUQJCywm5sS4jmc83D7KwEkKYPFLpUhsSyjFezzE9Mrd6PFwe5fyCKKNVZz4xkx4nKtJmBvLyi7u",
  "key23": "414fmTApFqV2tN9VRm3emcSvA8YVFU1xhQ5zYWMescBrE6UmtdusWAxAhagzkHJkELxsDVe6oM2rk2qwrBSrmMH7",
  "key24": "4kD8PwdpdgieRJSipv8DvgufGpttMm6eETKUVW2YYBwRSyvmNTnMDWhC2JWWEp1mGDUyMwWrLjsfnTvhbKrzxj2v",
  "key25": "4vHN5ShEi4b5Z2gmfb1pPCjL2Tkf2na7D6ds9Mtd4gkR7hxw1kpwZerAkuyDmpUSBwg6kTcrPUQZiS9wmej7Za11",
  "key26": "3y4gGBoxNgjRZivnP1hRsxPXAQ3UavLxhWEFKZqGNUUMQy5s5okWDBXZksVozwBohX8GPZ9hcP2wHduP1rCjuL4N",
  "key27": "3Pg1CQnBoXtNR7CWBM6vmC1zGisUC3hUWxK65VTk3HaxewhmwgzkFtpnd4MaQ3FZkoGKLSGy23ezVRxCrpVfgqms",
  "key28": "5hMcKTDN6XkJXAF4t1JEeU96Wq78XG9R2sgrmpKqjoKs1mZwUJkZXvTk3UQ8TbJo1BSbwCPiidF2mJWD8CvJGdGm",
  "key29": "49oAYuJgQD92fVaW4zdApTLMRCMSGmcCKKX84U4Hi8xPPyVRuJaJCSqaZjNpi2y9vSrptSoSjdGQY757rqgeXoE8",
  "key30": "5uxDmBPWr63Rs31BBnwKuVJ6eSThzdycrHigNW1uch7UY3gfsa5PqgQTpp5mmoXUoumc7EtSssFKqH1em8oiYQZ5",
  "key31": "3uQPLE5w6cmqiapqortXc51tJzxNtF2EUUh3DM7faFQUPg6BZ52BYQVifiX6uHBJfKmpWKXCLfLH271cXWZD9uY2",
  "key32": "2zoVsh8k8szrkTjD75QL9FULoqiYiCgw6tYAjY3FmVtchkWV5X7SdKHrAJSsnhrmfuDm7XjANif1zmfi2qMiEA4b",
  "key33": "4XwzwM7ZjcYhfcCRvZiWYyB6eFFM93aDPCzENBdxfqb6ycLuaNSLuu2Z86LA4LS2tereKVRW2UJT3UEA8Gy58aR3"
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
