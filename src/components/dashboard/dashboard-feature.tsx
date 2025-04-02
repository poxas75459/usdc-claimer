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
    "2oDpnwu4ACw6G5VS4dnbf15bzwruxC36sLEhmkaYZ9a1uZPxpoC8xjrWFzgrHsxwWCGtxkaGmaTwneoNPNvCiovP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EyssiNpJmMSXxnE9dE2LwzXJzHpVMiQhxeUA9qeRC6GDKhNV4nV7YmaDPFbVxbP8278dRWUA3RNTWMnv7cuLbyK",
  "key1": "rnoufr8GDLFf2ag5ToiuNxsPiKRnBfaE2oyxgVR6wt23QV3MgUDrXTUGuXyy7YhVPc1nR7a5TEDMCnBZMsRvh3L",
  "key2": "2PUSdxFWFLsZ4HhwGVGifFikN8H34sE51xdUM3uEVxgEZfiRaGWemj21RYURnPJkLoo6mQJBM235kHynaVcX44Nd",
  "key3": "GxwdyuK7SBgrZVPjTxikoGAHpLBouwtePHHnJB3JWFmpvZgyWQ9RzeNqB519wuLW9X9fBscPYMXuYwXcvzpseyr",
  "key4": "36AhpDGRZh5MpipTyser3MSzL5U965RgNN2qYRugUTPciQbragoAi9qidVUpGUz5mj2vRUSqwHHwPmMxFKsVk8Ng",
  "key5": "5qgpDPB8qQ2wMQwdmwKeM2TvbU3Gh4PthnuWSewEvcZYo5doJgo4hM18SdL882LzhSnAFrUcc5x46UmNyPKmXAX",
  "key6": "5fbX3zRfcGHWLsX6RdsMdQn4QY3uMzbRAVyST8MNhTfXng4Fgf8RMPAD2KKfiUeo98ifLqYwSD9vL6AH9HW25cSb",
  "key7": "DrJu8Q5oivTyHSH1r4mjD6xaaoM45wp8cTXQrpdm48SgnohDnE2mcqaApPbsHb9t99QyZ2HHfWuw7NsGXWtousK",
  "key8": "66WZ7JUNs8L4pNTTAzP46y3pG34ibYXBUDYH7YYcmwE176zbmrojEYTK83mjGyGYNTGtzEeZ9iztxfky7ZKSZHGf",
  "key9": "5Wkxm8GyqTdLtLbNT8voJZtXRAPWsar4DhnUHcif13i2mfBeeMjctKsBZbJntYL8co5GpVw7ByR8LB3VxPcdQYCo",
  "key10": "5XFyWvKWJneXKDBheDfw2MWtMBcALaMYBYWvP6fpABny59WwUD1SxPhf8bfhgktWZWg3pgSmy9HxeCpRHtBt4age",
  "key11": "4ej3SzMDwwKyEe6q2KySzo1Q5g6wLHoyv2JQsFTZQPoeoSZ5y9TcimXYbhwHfRHURHjediQMUakrAnnzNPzFGTfr",
  "key12": "46GD1ZyczFvM2avMfoF81c3Vo3HVzz52DCuS2dbHKduHk3zY47RUUbF3VDAe4ftafw1KKBHAtrr1Bz56gt4N3xYe",
  "key13": "3cmdSMwnVhpuLNq1gynarumjfuHSsRYU4Nj1Zw239uxDDjqrviS5imZ3k7cuJFPH2PhfLcNbSRDPGWrQjeTjYQMu",
  "key14": "2GC4xSZvuEf3g5KAiGF2CQgt58ktoMDSCrgTHGnsNxaCMttWYsamxYGqqtGXFwPYCJX9JQz1xDpji43Pxq4QiGoc",
  "key15": "5x6D34qB36UkSdcjfCP2mRncWANwCyTxCpoC5iMzrZk7qfbfdcAbMjzXnkh6EEeFPkfhgH3Fv2Rr7os2GtonNkD2",
  "key16": "2YpNN8hTv4n4RZ4ecDkMHCJxdLK9XEvXfCvMmKUFNKeaWivuePKtb3wuQrA78fYa2rMHke6jXcXzL1ChqWKxZ2D9",
  "key17": "YiNEjm7gt622EXycrfXkCASQ5qqoR86rSbLUH9BtKgzs62CnqSPKy8VbsBr7v1FL6FCa6JswiCtU74NhoHreaTs",
  "key18": "2pFmz8Jvzwq7tJonN1T2HzFeyU59Dv2Lbbnnt6tEqCRD3fJ8q7jJKaDYxLJNfPiV7XFYeCfL3iHXxs9fmZRu7hHs",
  "key19": "5Z16XFiXZFmfPk1D5TPDNUxJggR7qX8cSwfHmHn5PJL4oPDVCdP3EK5V2oCUTPru8zJs8bwHWvpCz7RGrBK4Srkz",
  "key20": "2sExuAXbRtK83deRtbZ7YwdrArHE6AZKPHBE9G6oFbSfYuXC2KEJRVE8dKZumFofi214XWLxZ5pywzjE1AMvLKin",
  "key21": "2jroHXqRfcDPLukjpMsVNxmxgiLvuPkNwKmnbb8otXzawNUv2iVyjnizPrtPDkSCgkL9mnUW4JVDbhth4jAa4sVE",
  "key22": "4wnrm9fgnjB3C9aTQF9KbmW4Eu1zkyi7hyAT1L3sqWzEZd2BfEKQQUDwSUzzXNMbfZav1afWekPRaGQJhtD3aSW",
  "key23": "3CXR9r9sLmfqBmXY6kuJ7eVMUohkfz72gCqrdpTvbkPLnATXenSV2G2rhWdtsiDfMEkQBabe5vpnGP2j7jbNfxG",
  "key24": "2putBU5GvTDHezToRzMhhfsQHQVyuViomZRHqcoYqTCSxH5GbRfkXi4rW9i9ZhFxYFUVRWuiL948261whbH21ZtF",
  "key25": "62zViqywA6UqbAsjmaVEn1j2Tk9GmmmapSfDVbLEQzyThYTWqNf4N6m2Z5HxEGdbRJZefrBo3w3LBXE96pAuMoZX",
  "key26": "4Emq7UjR9iRYArhZxSQWfvyCvEz1C8V6fBNcNS5F9XaGvL92MDFY8x4oGKdvzPw5kYmWsYT64FsBAXmCtd5cLSXt",
  "key27": "2fi4ha6CUdk1CkuHNAvMbVbB8fjduQd5joBGbWRZ1WAcY56XgGPnN7ySKATBUA1MJLHMshGXUnCMPdkpCJ9g11u8",
  "key28": "2BuyZiNtAY2vAVyqRd3pKj3g9vfZGzihRUTSPysKbiDtScrnMn49QSFbB3cnRj1Toc23wWKuj8x5rfeUZXUoTNpv",
  "key29": "LscKKa8jY51khda7PKiAqfE9QjPeu47XpLTy62a6QQ2pLFFu4dFUvjPGEaBXEnZQfhVgLGPaSZGu9eMGCipGcrn",
  "key30": "5n5UUpWNfVtpNUpc7Q1MYsWu2rdvpdxUTqcNCZbLSJLGb4gEPG4ursGdff2STb9HhgXVZWPGA2HhW3thBfCeW2RL",
  "key31": "5CXwC1RL78uPti2rsJAWjT9LgBQaywSwo7qTaaTXb8mQ8Sd8eDYooUxPDpBRrusSSQGFw8ZSxSNTQ3QcJ1xDK5Km",
  "key32": "58juCfEaZ55KvHs2en8TEyoTM7Uhr5fuHUMFUhhihGXZyGHUTvzpxUwnCDomvrKCvNqjK5WKw1nMf6nBGCNjZ58L",
  "key33": "FMx6a5SRGgkPWLQ7x9oGtrmgwL8VJzj5qxGxDic8qfEP2uRQi7uWAkygeqEJDeujfCnqTd89zSrgvQSEaZR6GiF",
  "key34": "PEcDVcqsypAqwVSkXZao7UgH5yfu22RMYjw1F7X5AJHUqJzEQGhTcnYYr64wv6DFXAdmk9B4ag5y5ajUsVFo4zn",
  "key35": "47X4MCpJKJjVZQAi2DiUtM5LKCYQtdKqAP3EGH8UTTZpMvaHTnbv327GNnkTXt1YYRBGVPMcprZwqRP5ofP2XgbP",
  "key36": "3WiDC4jNdQ8X7bS3wSQvTKXJDpNFQXeDA9kKg333gxdSm6oxEKVFmgtbyWoqVJDkPHtE3e57uTobeU4VftSUjG53",
  "key37": "47nvpV5GPagYMiez1TMPFLwDU9Mje6JWpfWx8DyqpF3PTGBcFmpAuLnTqqQbXhKYHFbyKJyaMXHLei9zx5ojWpA6",
  "key38": "o2fyLUSdHQC5XcjXnZ7Wu6ba2ZDyDAVpSwYuM2RGQTTpKTvSnw7i73b2BfUWH28YSA29DfnCyHe8UTH9QDweZjB",
  "key39": "27uvK6D6ze6y5cvtSqSZ1NfGQimxfJryF2ACM9Nr4yuPHgX8YuVtRr9V95NG2DGfmjrfbT5jgzqwwTf6xkLJqHns",
  "key40": "3a6soiF9Lg1iFR5DRkTA1QLhtmjBoATuciBLAVYUnH6VBF4rJAb4wKMRbm3GRZsuZrhkzFQkdA6uWoSxKS8dfHZ4",
  "key41": "3xztKLuxX77dWrvSYottd8fEQLAVoNUCa4A8m7iXW1MgzHzGH7ScT1JusjTowdVoQvZDgQECCJQek6xEbw9VhJuJ",
  "key42": "5svL8jzXXDvUuVdqTnD3xaAziq3r2y3CYXVAmxvw1enryaPhJnLaC3LYp48qL7fE7zUr7WUxkSV5NVdmbUCm8rcg",
  "key43": "22wkxfuPDTiqnBd4WQnCRdR2J78rx2YR5QGvE2HLhGgw6Z2JdrqWdTvGYW4SJz67QhEdpNk2KjkUpzdVQFbfWkmi",
  "key44": "67VUDxYQFPxn4jt6hjS49GN1WyVWjW6EV7FPE6zZ4mHEVWjD5qWTvVXVnbGbSztf9FwpXj7v7gE7eXXz77eT5Z77"
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
