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
    "5z7jnDf6tNfsXmzN23iDAr7rBiGeTk8ndhy4ziEet4HQkzZYkQEXwiQBxgmYAgUBba8aa8hSPpjQAmi595m3baWJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "415rnE6tJ39HtzaCTHhjhQQw6ea9FjHPL2siAV3ugiB9uk2AnE9k3bwqbyMiiFiMipK2Gm7ZfhhG99rZEyC1RpNH",
  "key1": "WFFQqQCNz3frm3gR6xtaV5opZj6M5UQKejfozeiZVvvzthQuEgJufdbHHgZkHoU2WvQGUcyRqckpCRaBLRzNdAG",
  "key2": "5sHdRa1ngPSyjgTzMZHEZfSxhBMsbZD5RSwqrzaAoZ9rhs3mZEdVs86bRRA9m9RxwHxtwLf5oVjbLSzHtUwUSiUP",
  "key3": "jrZ4vpVhFYuKaHCfeTimrS8w8kW3TNs1ka1N6sShzSHW2p343qmWAuTs2w2joe74cbKXmcGkqvtA6pLmEMSgoiZ",
  "key4": "2qxnYG7agvxfDtZRRcaBBCptAibRW8X5rp2ghufUvfLXbo8yqfGi5gsutn2ipL9ZvjystPaBXq3swtff9zzJMpri",
  "key5": "5TEQbJRXMoBR2tKzqg6bwyvjUXDXPYkYjuqarpywL4wYhjMzpPmcLqZ4pJ248apGqj2kJqf4BdgPvY5YyXjVgh7Z",
  "key6": "3z2JiBPdtXVJpXhWpDTyPpRzFkSKzApm9vzPXExKH2NBkk3Wb359fvnXf2WdHJc4Fo3Ya9g7BGe7DZbUX5aDjMCW",
  "key7": "484NuUYxxzcPB1Xe3esgLgHxGcToTp9Hrbt9bX3pt8c1KJPHduTBmM5XC48G1iSYjYHpvYhFuVBr28H3FsvwAD3D",
  "key8": "4QENCzUbrgi1fF8eRkKo5YfC4QcUfyE54NuG9d7HXnmgRmtSqTuuXWLk7FTXHh4mFXTEn6PpMUxojSGjqWgzggsP",
  "key9": "4rwYAW34gbff5iFdSKBFqqpTp25Y6sCvuuTGe4cCt9hBMe4pqLaLmgj2yF1FNAiFfw43WjeJRkvmfLMg7wi5rjmx",
  "key10": "ttNFF5LcLCSMUQ7SCnqwmWHzhHBKYdvgxSeVud8Ph2cxW9Q7uPfdQLUgnia2YK249i3ne8LQ1XXCFwDjb6v8uuy",
  "key11": "4c26TyB5gkv2NK4d4AftqTCguydYvWxeKqPeiz2M4bt1feSCP1diwzsMRcEdaxXQYzMn9u1dPG3cVsvnM2gvaw92",
  "key12": "2P8kNx9rpvdMJnVYBxKqrmYz2WRvfr3FTo3KisfgvveV7RPcU7ECb3Acumi6sAi8jYCk8CtjbNGEZrpxbKw4hGzA",
  "key13": "2GSPek618FpV7uNL9VGvrf2vjD3ivdArXTVCCyuqfJVxksyD5M78LH6aCJUUirMJJfTtoVWRHKB3WGogpaBwkWAH",
  "key14": "4pUNsRKb7yku1EQzawAfbTG1nty7aSy1U4hVgK2rapyLTnCSdbiUNYXDfHfcPNeKWtGjhQHegDfGhwrGeViQ1gNB",
  "key15": "4BSRnGJec42BTi6KNNQsRzvT55amH6N5Bqdv9TtvyhAPW7ng9yFfMoWzoWr45oqffCfNGPCJCSnBdzvSvbCcSN93",
  "key16": "5GvRHLGmtKy4c131LugZGfiWQy4MwkyyxsnyYa6zYksYYLNhHmRkA8g6Q8sfmBJHpSnptRoJjMQQ8imTNvoMkopp",
  "key17": "5xQUgkCC6krVR4NBuiX7WNaz7MM1pm2xYPebUiqugGsPKHVtHoV87FRx25WnZEQzKmmJWDyqe48wJG1UXqwbZ4A2",
  "key18": "2Y1LrBcWqiuUpune7NXAgH9rwNckmXik9wbqifv1g2BFpkuHkVnNLTwsfunJcypGzcu29g1y1fC19fvRtewMVLPS",
  "key19": "yW82w7ANT7EaFMYaHy9zCe8NFU2jVALZPH8GW4xzjJrKJT8ay1y7QMZKpcoSfhAWTeKQ4JGFP33Li16La7mKP4r",
  "key20": "2Hkxr4c9CfLdtfeeZ61rdNjZPQpjUB98Katw1HVPA8Mb54VwvYQuYtKZrRvM8XX8MDSd5xcwa3p8NXBWPpvAvKfY",
  "key21": "uADxU41FBSGe1ZMzrc7SQRFEc2M7oACGpwCvhc2jUCRvxbjKUuX2snA6btHQuec46d4B51HNGUPAiWra8p4bAXo",
  "key22": "9XRLQGNmjuchXE1X4A4Csy27n2W8poxZ9tgaqxUE3ZZxTKzETHBjkYymAQLbrELuPCXT5grckddRCUgLoTEXFkb",
  "key23": "EYmWRepLcQ8AYwTGcofXj3zvLUPjn6s1Si7LFUugJwisjNkd51twNhH4nsQowc7tYBevSV5jpR3JPLD2WuMDCVG",
  "key24": "3o8MqWCFNtknPhcetnjBizqpBf9ciSz2HyTNU4kwSSxMr6FoBg1MoTMaEcDsqaoAzxP78R8UQvAQq58CzMKLXFkf",
  "key25": "457wzmqv1Lz5WPGFsgRPyEbLzzqjsjtmCYKYphQZJurER5ki1JrbMF6gNFy552xEMAMbgzSJr2tLtApanGB7Su8U",
  "key26": "3NVREEENfTDAaus9MgJJMkiTetLfZBzNpRJP8xDDnMMZfjXyBsn3dnQSxv9Z8zEYQ5mcNx3GUuQZvkz5YhLVJERG",
  "key27": "25XoxxM2ctRvH2MrwgaxVySuvWHVpjSmeKArUk2UKPZ2tgsAKh9JYfykTVx5PT7g6Hqx27ejMHqc2fwFWYGDsyzz",
  "key28": "3MpeerGGDnESAJPhRbCcCXB3S3XBDzsfNxBvcTwZzAsUQagRED8ukQGscsQPMXrZjabU9p6oKZZGP74PuhBHpTVc",
  "key29": "47PyjF2yvZmyDkMWRCPmm4mFrs9AJnfYxJX468R5zz9V3wYgVFhiPmhuXSZNyYNBBVuxAemeF1wGeRkMbBzg6SiC",
  "key30": "4TEj65yTm4n8i7KS7twi12dRu73sKYGXHUSrTbKibVCRd6y6wsB6oz1hydHT8LyBLHkWXCT2A5UKmMHs4c9ZrQkY",
  "key31": "2xp7qUa7nPxEJKd3shaWsM2x5LpeiAGtkb8WpUGu7huEdhS61nnwYqzUscF1u9qZThrqiyRM1apNVL2yFbtmGKbf",
  "key32": "KpQpveBv7CxYo1d2JsFN4MAWsgcVZNoQKsBc1zxH8ar8xZobYoA63GEnB4QSeD7yxPKkhMFaWPy9FjDNmJYWCXk",
  "key33": "4qTNzdX8WM1RjcyaaGmJQqfvs6TJZNFECC3SNGPCGnYC51n9EDb4SgViv9t8uXeDwcx9dn4Q2Zqx1frLBpJsBAz9"
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
