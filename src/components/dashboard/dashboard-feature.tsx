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
    "5tYyPEHEhsqkBV34wC5K8zuPqxTGdEbpS7YEMP7GdHDHK2j4YB6yt5nsvw6iXZCFYaHc7kH2gXDZP1qDNAQwfuXE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mMtMpTdPQEdgRkiHV76mbPiuE4T3fmiZCZREvkRNyATijQnL7o4j2cevuN7m8N3unCh9p6GKpKhdsi1i7jkeAKg",
  "key1": "s9YNchnNZBqXZGAfWKviuSphKac2FZyGWfGqm7smxgMzomZEXmjm7BBt4zV5VEt43LGrnbca3EUoz33Dg9bU67o",
  "key2": "2isybMee8oQA2toJg4wG2XZvVjDw3Td5jQR7S93PPEhS3XXdD5GvaK6aCSKXPydZfyTLcWrmsAg5wdR9hRCPdYNQ",
  "key3": "5sgeApik3wPUfKruGQ1RSADaszGBM8Nm4k7eJdusJJDTKdFJM6nkYdnxXKrYdsf6AE4PMmNKzDcy9jxwe2U5Qzxt",
  "key4": "Nrenobhi4n5EVxhDnk5Dvjbkq6JPrDC3S2maFoqMV4k6H2arHxYkSoVinbqjNARQJVnoarshnzamEus4eKPNtm3",
  "key5": "3MPjy4BhUj6TQ2SUdCQZCZb8eSgcYFbioo363KdGustrp1zs9jpTvisqxyZmNVPyxHkx4HQonVXJte5adLerNqDi",
  "key6": "q4YAMrfVN8RexLaMosNYJNcFeEbRfTsxZkSh5fQ1TXreiBcnEn9tsVA9vQqzbe8fiqVZSRa9vEVQA8duCbL6fsv",
  "key7": "4wFNfFfiHGi5bYeYj22ABSDUd2b95i6UBUYbzC5FtnB88v7WHe8UTfPPmDYJupPx5HsJMvUgBcNLXx8xFbPPqCsW",
  "key8": "5dXBWSsftyNk2UEyK6x4xyoDQSmia3ndkgQ93UPQySqbWXAwp7KfXSo1csU6aSdo6NjWhkaamrjeD7RwFnbT2E5U",
  "key9": "55L6CHwwXCJiDCVpRTTtzLUFqFPS7p87sbD22UE2vDWRMtzxZyXWSmxjTx2ByzrXVKf21zmMFxUr4cQLpLb647BN",
  "key10": "SNS4GALYySxNEx1N7XuN8QRd64cPkQtZmeCVZA57vdwze4jAXqqfWSc2aZ4Mr36szjE8xrsoRA9FU8L1F7Wod5x",
  "key11": "5vycZqQCCQuEQkzicC7zCdfEGYLwksuVjWgrx6riMeQbn5ocDwrhZ6zJqaFwD4jKSfqvCf5m88vMRmWcBiGCMxQB",
  "key12": "twhmgy6FLzvW53FqAGAnfuZuXozMq1HGi1rX1E7xhXgnTz2Vygd2QZDWUUGgYxnRtTrnMdcsbi2eHfrYU2tiaec",
  "key13": "3bfJGDpvVbveW6EGzk8eQ6oYgsH3oYbrnP5CoARbWQkL8fHqiHpSBonQa9JFfsLQ6t8AV8oFmRTr8GjYSEZT4U91",
  "key14": "4Dd9rodL3YTE9v1HSBqX836YWXviHNASGUywNxBJVzFWSB7azAX79TXx788C3rnQ1Dtf6AZyxemFt9PpnrhCacgm",
  "key15": "5FZA62P1FiDN6kGNvkcAvjpgoei31XysuHdF8UVMZsR24C58UsQUGL7Y3kcHyEA6gj8bxNiTy91w1WCrMYCPALZT",
  "key16": "4bQ7MkkWfuu35rBdoWRU2AwCHryUfAr4ZUX53GWQCPz8YYPMc81FKD1JaF15aLceYnvvCp4Cr4i236eMWbNFEQkt",
  "key17": "31RGbdMGeV1aECoDwst3PsnEnjxYoQiDgUuwBcBJbzYecugojRvG24yAg2K8kv12E4JURWazC1bnsvk1Wjmg38wK",
  "key18": "5qp9H9UAPYG5xD9iJfynsMrH9zwWwhq3f7AwUgu8jDqMZNCiaCNhspKrBL9XKShuWjzcXwuMZW2ddrnmnewhqWUK",
  "key19": "5Np9MFUYzsj8YycSrJyaR1B8bnSkidWCeuA22CwfknbbYYD5Zv2P1KM2sV4kZceY4vgUznkz9zBsUpA45ZpnBeM7",
  "key20": "QVYe3AaNnrFS8YR2dj6C3vL9DRgMfjYWidSJkM2sTA2eNzSX1KtY9dS5QkbR8wweiWR3XF3a1htuTLKjdX44sgR",
  "key21": "5f326dun2YarW1wbpnteybBAwVNQuYzjqQn4LYmJLeu7Jwd51zbCkVUYCdPmUNDoEETvaBbAH2AoBub4ppjuFzJr",
  "key22": "4GFApDaVzyW8UoKdv37iDAdtpPQES2oxRLJ3xY97uBHzE9JdNMX9wb97sLphmj731KZCZ6Zt2BE4EZNzC33NphnV",
  "key23": "2ASJbweRaBhqrrW84Ryn5qBHNc5itwwVfLEcv4JbQNzzqFBtb4RPnQYAY3Km9cCKrRzyHyuVkec8XUc2utV5thK2",
  "key24": "2FbxDrnrNnfwdgChrX5jaEupouBgHxa8MTkVziRAgHLaiFbajzLRFExw7jQDtgcfYuT47ngF9bandcFFCjLWUtbD",
  "key25": "2TpkiCTsGmXzr686wpfLNjzVkz7F8CFPJQPtW7n5SYTRrMnMvWejvEtdGhMuNRjuJMZMqvTR4KDjwigyF1G7vFjA",
  "key26": "wGZ4bA6xj58THW8cjFzdFbd9nezd5Ea8ScbqEvRMJ9byGXkMs2QTq3fibnhbNT8pp8Cx7tRm53tPXaT6c3Nw2RL",
  "key27": "36SUr2PmFWi3Eorz8czxDDm5w17pNe1m6aJ1YLjHTtGtov9nyNkdvdcH22xcoNyA4auXKCNUyzNXde4aCT8u4rpy",
  "key28": "5Uak7jZyJY2ftp2PfxkTPrb5XMrxheWw8i7PXGzuMuB43WqauEa9nQMpz8Be9PhPdrWPqNu9sQ1EPcX5oFYzHzR7",
  "key29": "4rCEm453wPVRtCxTncFCLJjr4zLfKPDNDcMSSBpDkLNVjP89pnHwYVf5max2WfmANhQV9MtYCbLLeuhajw7eHrTL",
  "key30": "4vtihAhV1QTrPExBQv7gA1WyfCNsDWj7pNBUrocwujx2NrP5a9i5NRAnx5ztwgNCJhEsuaijCjh13ZsC2f6xCwMh",
  "key31": "3kgn2GM2ccAEdrXD2qTGwz36tsegihZBjifyEAGiuoxNu5Swiii4V2fptjPw8htbbLKr7kamJ2fXV26Jc7BACTy2",
  "key32": "pUR4QroSWnrx4CZ12FDBnnMg8zyDvpYBkuF1eZCqFd34LPQXdjppjeLMMnLbUPFxq7Au8SSvnPeeaZhKtcrWK7n",
  "key33": "3sgrw1wY9B8g2HxehxYkWp26DG2pUNe1JawbWJFG31dtUqsuLGPPjh1vii9pTvMYKPmcJeW7SidBo9w3C87ZZyZh",
  "key34": "2TSxK6ULfWuAnTf9vsecHrfh7TGyfyLi7G8YToajaaCMSAYGzCyV2tppJ1n9yLFMJJcz6tjuLznzqs9ruMEb969v",
  "key35": "5uEtAwiey4kzpqPSDqRwPaARch6VSBbWcqTdiYzVCeQ8xbBVb3dLakyuUVCUMK3vYE1jfpEJNQ2VRNK96V2TKHNc",
  "key36": "5RjdQ5EDGMWj3kTzqf5kfgmPbGkptQrSHEz5LLQQS89j4cHcLhzrDhbToopoN9uxaHTCGWap4PAnF3RHFSMjdv5A",
  "key37": "2PHhzYig4CPmEe53wbsjSw1Fr8KuSu9koaNKJ9R5YoHPSFZNVJKhzhoRN7Si6jTDCYZ41wZaK7qvZbqNMjNCV356"
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
