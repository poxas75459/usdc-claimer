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
    "3DpGSyajhAPisdRXUXChLwG8YLx777oTRMko3kao74AYCh1P57yE7A2tNZdBbC91ArrM3PCgm3dfRZkuY76HGKFy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NBP2EtAyr7xAaCLtTan7geerYCon7k5hvwthbyidnXEg7LcRoT7gejTvmox1CM4ersGss4pbAdUrhK2PMexPDZD",
  "key1": "4jZfJNgWHYYcHTB6ajoMWAV4hDvd9DZFA9fCraTPiCT1f8BKC6ib54ze5dP9AqNn4DFuKyHeWy2P25LssN2TLicS",
  "key2": "48vWVVMhiZPCFCobMYmAeEoB7FvAkKaSrUKEBcAg4Rcu674yVdHX1dFYu77frfbenP5RP91s51doihkcRPprhyZR",
  "key3": "3jYERqLdBw8ZQyizNrMN9gi4m79wdJWgQSGXvNmD1PbBBgKcAUKcjpsRUGVepnEnNvmoFBRd6mbXdxhd6o61eBMA",
  "key4": "2m8KZ3vW2L8H9hquoXmURnuFEQe8aacmyXE5unn5L5ja4PSSFBNtQkMxGjtoAE4YHfF4JK38sePGfn3UrAW3TQbR",
  "key5": "2KFcqaD7E3vu8CcR2Vz1hfmfMzkBpu3sNcCbDAvSgqaRTv387sW4wFnDFyfgF8vYuAksakdGKXwNwHZcW619G1f2",
  "key6": "3tiHZaFRSAEAqpFM37Vt8kVxWaJGLjjUcJ8z3866vpJYZ4T6HgpoUsv3QJ44DZisiUJZna6SW3BRpcy4pcm4rh93",
  "key7": "35WYBi6FP5MFu57kfc1P4hoQ5DXZRFvWH1UMMKegJcEtPgej9jSEC5SEYyPHS7o7eVzWUL3uftQ3HpEoGEUa8CR",
  "key8": "2ErpXJ7qhkYVmFAEVNveBYCDVPbGVpbmmgxxnMnDZ3QyZc28jiT772nN62LynmRMJnGwK1oN7dq293STrFRz7fvy",
  "key9": "zsz86uNT68KzHSKdGAY9gNYVrjb84vDPDJ9z3oJ2sfXvk2VDbhDifirtpxBCVy6ZZR75gcJNA9FKS714YEWpZhR",
  "key10": "2pzEDit5TduXEPRpCQaia9hRm9FNyLv9cbbdWWahE6RTDwMd52jdpvgqMrGrsDLJah31A9HR6SuCTFE2WHPy1wLC",
  "key11": "2YXQWALDmyH3JkJThY8gN3exeo7znYGceNipuZicR1zyh15TPAYGUr2KCfJVY815vy8RZeW16n9aUJEmfBLxERYW",
  "key12": "2vghuTR7v5zNbcXSZQUyFf6wj3cMmhU5dfCysmKTnEMrF6mC5Yg23GopFmbxeJ7yqEdiSBGvSsJALkcaMmiJyCeE",
  "key13": "2KvEu7d4gkctpa8wXzsdL2erQgEyKwQmBs3zMQYVbNfxAvtsRZrSVxnTxR5UYUeanu2moK2xWyFsoCgRsngRereF",
  "key14": "2NgPTp1gqXw48M5PcoZBvrkUNNnjvsxwTsRKHq3GdyxgBMgCGNP2n5uVJQXC6c8bHMb9nvt4Z1PYKp6kJpuP7u6k",
  "key15": "jXCwHwg99XyABMcbNFvJEZRzVdDL8Lku3TPDYsAemzeAApvL1zjjjH5b1X54XjkoDaSDKTntoNXrNkekh4NmH2o",
  "key16": "dVwVti8WU8nigm6GbyJvYQieeKbQDCwscZm83gXZ63xG7ztqs5AEg7taGFnSTx6cm7gRSYVffk7ZYdTxtQzNVYm",
  "key17": "3L9qwV6D3JGdgwYZAbob6NqQE38vKD3Bu732iEdhADwFz7MNj4A9mHw2jiEmurmca3D5EM1VerP4hT9RE18hebsu",
  "key18": "4JbDq3BLJAPoo5eXKyjcGHbR1QzCAAG234SJg5qqVJrdTo2bmypkEH2QHAf3cdNJEVBawUHgyVfDHnPjCsGPNkVq",
  "key19": "24rfq1AymSAULzrT2MPms4FJi9ZG7duUc7mskzPAVnLoUAWtNvCcTavJKxCoWvfnXnCdKmorYVknHQcvH5512HMY",
  "key20": "Nqgv5gceWHtL4k9j59YfYj3kWRD7ML4P5nmV5Wt9MQtXaAk47v9PephLgZoyTDSpBW9HfFyE5LgtQ5HwvPw1JZB",
  "key21": "3SkbGXSJtPoDgqLmb6BtkD1m3B379Ca8KbE4xcpoi6Gje6rGLgPvuYzK9qMtn7QmaML2wsXkcLhTri3d2DL9rkwx",
  "key22": "3wKSACkhB7AtHXhWeP5qcte954ueqNDGMczEJiFeVNuKrqvrx1kNdcahB8JTawAko29KaAeQibbfaK1prdvk8o1P",
  "key23": "3sWSuergEGfduuehZtr8U3nufFn2BWAmT69LsfvKd6ZhSEb88L4jaa3xEjgGjkKAFFzGBRgE2G6pThPna7fz4Xvg",
  "key24": "2fGS27zsruF2Zh57cCeQRXkFkMUfWvcZLnzXATRqtsqAyfSnNUan6UM4M8sL7Tsyxfky4dy8WsFwNWniHTe7SH3a",
  "key25": "3LHX8uHHkQLKVNsEzScmpDWjzMCkb5CGaEVm4o4mMcLng7eqVELi2HCtSWjYELbM5C9bctuGmB5bdhqyDjQxEwyU",
  "key26": "2xEdbbsjJSCeUieAwh6yMKGNDGWaSm6GeA3Ga9Ny9PaXJ8zCNqSqZSLAv9P5VdbWhL4xsz1xJr2fJtCKnpUs7DZ3",
  "key27": "35Q8cwWFFN6uYQBNjLDwqzdJ6wD44uaCnBLTT5xkWeLVUKVwG17XvPjE9YXMju4T7jSJ43b1MvnH2Er2uyNYMcG1",
  "key28": "4ou6dyZd6xJ7aur1CFEXEMXexD5fi9qKF9i3JuoCsefuJFE5e74Np3JQ9vubvm1n3BqvZyxDc64QuT1z9mBtTzYE",
  "key29": "ZjBjm38Xz6C5ECt8YgNquUAqw3QD3QvjebQshT5yTZ98pkJygtToDPHjjG7YxAkunV32R8fTtcDXri2CtKKzp7P",
  "key30": "4UXUMrcoiKKqUgKXYK1otyTMJNxKi84EdejT1sGY4KFnAU55rtZ7fqgLkaHnvAnes2pAzTdL9znJuiajfX9kG6Nk",
  "key31": "5ZN3NRPWzH1cjwoR2PwwfXmxus2EW5ui7kXDT1LbfavEaoMnQ512bdsyVqCfENvEAatyybZswB7NDgcZ9aSdSM4J",
  "key32": "2a7otceJQcdeB46P3qmGeHrepW4ZCCsx8cG8m9jaMrpaKmLzVwDnrWQSGALagqH1o4ZuHwJjiEWpXc7F6ybxveUL",
  "key33": "5tGkdBc4W4CCXB4ziQdE66uA5aDhnfBniNfJu2j3Yd8gxpUnufcLnigQ6w4Cyb58pZbvnkAJ21bz3uRZ1TzhQHvo",
  "key34": "5HVAns32BrAvWLm4DAQvfHN9r74oPNmBNYkg2bGXcRCsEtyfaamuf88hj6NaNPk2Z3u4GJa8vtSa4rN5kcU9qSf",
  "key35": "uTn3Y8k87kQK133dLQmBhEQacEPHyTbAKHpxVXGLKaoKrQ4HasifNm19yTcUbHGp4vgqutTZjMeS9FBV6gjsxgq",
  "key36": "4GCBLV6z8kQXMYSkcY9ZSjKqjZ1ninxtmqhAi2DrsVJeDsmRUnktQUQud6fhJo1mQ7FKftWMdxjYeidtrLXqkEhb",
  "key37": "4UsGNBJwRnxTMWC6mVzcy152nkqQUjCmKWC8zsSPFKzuPk8Srj4qLpFpS5fmjUjmeVmbdXRLzu2kHNK6FadY7cYS",
  "key38": "55Kzd5YYsNdyrKue7PXhNBwAv18MfugXfWQsuGD2kBAbBsww1KVToMW5r5MkXkuvvxyQ9vBr5SH4Q6D1fK99eGA6",
  "key39": "2VjrHrYqrH2awwRGQWVdGrketi1NxgGkq12QLwp6owbjXhWdjaKZP7ThBSUMCW5u6dMCoEb5RGbKNJ9xK3RHw47K",
  "key40": "3AFSmaE6HFkWqeMP1BVVgA57igovEgdQccJMSc8hYunitUX8rj9qcfLCvAmMY1e35guRFmihnGrD4TeUfvGWPEda",
  "key41": "4Mkw6yxKBD9EahEubCKSHwcyX9LRATfsEX1m1kMWkdRWX7JpESsPNxau36wa9Mmj26Uo9DyN63P3uFBLYYQVqHTQ",
  "key42": "4TmmiLuWqaDSvnaVKxg7NTD3MAH9fpq2fSFb9VDcPR2WR1Dyvv4QCrmSRGPJoN4vSEJ3uAkGC9iBuG8ZQhrKzLfw",
  "key43": "4wznDDv1P2N1KrboC1ebhrMbMEHLYLHYoL3M3o6STboiMwGgMgtRwUwiodZ5Esd4BTih8tx8Xr59MLbwT8o6k7bn",
  "key44": "n1oWWkxsWvWpLdqj5uEDTeaaXGUVuimKwVbyUXf8JJbyPQEaxEntyhh2u4NFQfmSTtRiuNdZ77xXSieEzcnGezq",
  "key45": "3mJjXMSqFstASGDuYyiyfcNKoEPNRHErPJsiAhUvGKF8zrcGfqV81uyrVDVFCzn4KorAgSUJygVEPJA86enGzm1Y"
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
