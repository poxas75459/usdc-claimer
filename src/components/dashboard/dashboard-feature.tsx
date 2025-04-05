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
    "3qZYqFAWrzPA5Wmvpd5njdhSCNvJV9maLP2ezTs6rQ9FtNzTVYJ553XBm8ikevLHCxw8LcL6tLgLN7V27tVD6UbU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cUEfjZ242T11MCuPWQ8YjJYeFwyAk44WowRNdydqCzYrGCWHGFGr6oBnk38t4fmBJqW6dTKhu2kpU4KLGDnbxmX",
  "key1": "2g6zUQ3TLcbN6z9fwVm3T6s3bnqvNDoANrPFNcC42tuPkvZxo3mAm55ghabDwxxHpRKRjezg7Ve8wpHbM2u5hqqM",
  "key2": "5L6keAPeDjdnToMCE78KmMnoLnxGZVnNSrPXsA9ZY2uoAXCZBh2snL1oCDEC15y64qjKVyG8PYkxwh2XroNeEkeB",
  "key3": "23XXQGSZv3uyR4ipCDprE5ZarEEECTrCpvuHXfRb2KbMd5Q44JD9bNFUt5mXNm2gSLiDbhfmFTpdff4XnNA1YxmQ",
  "key4": "4gigYzxJUixM6PB14ejesgWuPeZxJj8zx4MQU6jHB6Suvrs29QhCnocT99tAoMgYZMzLTcjaFJpEjzmDGQKKNqVB",
  "key5": "5m2XMYjGaodE4DicUzNtjzdE2nbsqmbQEfiqSqJ63Bt6g8gBUQi2E1VJ71Ht24svdEZTp3hQwYd9azD928UW1X5i",
  "key6": "2pRu2NbAar2LzUKNvNVESx9hAqFXYf9BNA19uU2Bpptpfw9wGLAsqRUBnQv5TeGFpJoiN9A92dqEmLEYK8fuXZDw",
  "key7": "5fw4a2mEKEy8W1QQCHLVPZoNWZf67JAEvMWaN2PSWkJQcTxiHV9oxJWdGqL3rP1MuMNH3EZqyYihf4sSM1piZEEx",
  "key8": "5KbEm5AkGVnhtGALjxM9q1CNRe4J3zsJbHR8X3qmg1X5JnWVe4v2pncpDxWrPvMuVopf98FKi43Pyx7eaSS18x8r",
  "key9": "3NC6Qg78X9ySPjhs8ycMc7Jw9XBjSNYuQ4gv2vfpphrpqbbbZsLWZ95YBYWJsfqPHCqMWuReHRaVTKZCxpt3BWaj",
  "key10": "5xZCAyTYGg8pqfneDGt5oC7sRTsUxdbS5orh2pBNVrBaXafXnuWRwo2Aey8rVUrd9gdpXLgkaY96rwQf5GEhDQKD",
  "key11": "gnwtvKzhKYofbjo9zJq2e5rymBi7b44govj1JSS2u28tjKqRaWWqEbDomcX98ymiktWZg8tD1yeZKo9HFuqwMJg",
  "key12": "5sHKaxf7UsX88nmFdhpKMZ3ko2AojZkk4RGCwjX8XL2p1paLPW4gGqUzztsK2rgQ1abRo7Nnb2CwZNU6SSYMaTgw",
  "key13": "3vzPpGJsfodigxbgvF8F2SLjSCijbmy8LM6xYbubbeZu2NEMchygHNKht4JATqyhqhUVesL5mtDKLP1TbcYgFNaV",
  "key14": "41hggpEiaF9EPx6LfzzzYbVENxceEpmiZJVYfGg4fiWhm8JyCi4hv4es4oepmLmwK69AzAD9F7XVX5tCUERGtRRo",
  "key15": "4LVzwxw9m2VSaynT4WSP1U9o9iMpT1JpHvHvuRrB68ict5psEFodpjSAqN54fiR2XHbA7h4dGHzK4Jca1dbmA9fj",
  "key16": "5ngGbg1GyoBioiH6Pes4QCZJuijUpDTq8SAnBF3CgdPsaSM5QmYwAAF1myz3Cta96arkbo98VtDiaGWu8W8xcjn2",
  "key17": "2i84EsdULAsucAvhnm4hGtpig3dns4HQ27qJVx9EXtH6aDix9SmsbdX4SuRdX1KaBTVG6qDMNFFnS9RmgjDj6DRs",
  "key18": "3N77GHPmHvGt3aXHP4TmR8koy33Rj9299YGZ6tBEvGmrxSRFab6j56bUz5YTVUZuBiJf2HxFEr6qJTLWgJrwy4EZ",
  "key19": "2uxuHBpdkyCw9QLa9kxn97KwWzMpnToeWfcUsjHbHoc3D5PqxYr8mSjLn7NeQ75LmgYJtJ8NKcn723Rp7rakYWvs",
  "key20": "3AMBJEU5QT7ChYKrQmUaJh9nNzxWaa9fu4nzj2GTM5BkXgVW8iFcv5DjEgy9C8z1KosaqCAtjXrSMbUgrFbsQFsG",
  "key21": "3xDmxncfFX7mWMvzCMLZCcrfp81BKF8RvRftZnhbbG5SLF3v29UmPxMpvkvwkgs9zUi8pHpjLsfyV5dK2jeSttN5",
  "key22": "gtKzKMKLFCseNbJ267VULBvqjDqhu7FGSJ1p3ncwScm1oSuKqXxCgFK5HoU8fbhVaeg1LkaywuGhBxiiPG3pGzx",
  "key23": "bXKzS9YVLRSUhKePk2k2PbQBUMHGMCKDehJmDqsCe37V33HGHpvBvCheT3MnKHKQGfhcJVCpdgoGXAsfPWnzGsx",
  "key24": "e32ee8k2dNLXQwcnCsFdGoQfMtVncbbMJSfszKMEa8eVQfSbXJjRs7uzGvuhBpzXQWrMpLZ1KbmytpWA4it98YH",
  "key25": "4H1SeSH1NCxASziLxYHg8Z9f2SkmENiKKpo4FeMTdMqMw6CF1atNd67nanius27NfqoL1SggMnrznb4qGZ73R815",
  "key26": "2yFFjgCyeGFW6s6uVhhZT56p4z8ChAuiBjukSPEgXFsBL2JFEbUJpfL92PGLu5MUXZft4kZwmK6Z6FcuxP5W8eiB",
  "key27": "3ijRsx2odnJydTUeqhuy9UX3drHBnZ6ttYzdaTUaDGuk1yeuqxw5QqzC65owg8ZvhpG1ApGgQw9fJCaxRcR8JWtM",
  "key28": "36YawCB7u9Z9LtWHXzgvptJsKLExpXWErRnP3eb97pauYYWm5NfXXE7et2Ph2g5yAMo7J1p2cZkFwKnncEcAZFEC",
  "key29": "2RyoRH9F2VNYBu9EJPY3ypgpN3EL71zQQue68eSUXcd2cReihkQdVp2uwuyhSdKWbGxDqn3WVqgVoLDFGjSmmLjD",
  "key30": "3UM5RvNSNWJTs7Yz9He21SHTwakYgNZqqhQK3WFGPkm4WVLmptQiX2zdC9Ascqw8Q5rg5EPu93eXrNLecqfB6iQc",
  "key31": "3aquPL35D9fnJvQYcTw2EFqwAv14s43wd2CpKL7xgEMQPF6m2mPYzDvAkjUR5ZdmtuozE8iUkGTuLymmr7uMtQ7D",
  "key32": "45XyAYJjdS8QmtgafiUuzc1afZhDwyNijwmpEmhoGehrCaMxximRC7dcLt65gvCMAUtLZHwBYWTAL6RmSgMDYjCH",
  "key33": "32mCYqGauDGPP8u3V1EczWxmZQvUmi9exX71f2V4xnUJEma3vNFjVNY4s9pUo1D7LN4iwtUfeV946A2Mts6UABni",
  "key34": "2ehzuBtSoAQprWycmNU4yuh2jaMJsVVQT1irCe2TLhnxqhnhkpmmmiJctmACHvkcdbq742a2NiGY437qAVZHbstj",
  "key35": "61qRKbGo1Ba7PVT9HoQHcbBPJKn6syWdWhtEknCkf7ckWgshj3XKBUEoF2T1nYACz94JfVKMb4WZAAo4wahJF3BQ",
  "key36": "3TxVPrZswnW4rddNvG6ScrTKQhzv2soDrRgv1SuuuSm4QHGzTntyY6JLuU1ntrjT5RKzBJurw5ek1bdDBZ6D7h7g",
  "key37": "3UHcZEtvzDPYxxjp668CFcmWEYK7PVFPJMru1JbpKa4pTxREmkrLygEbsNbkCiy83WEkJnJaCeHoajQr8EE8fV85",
  "key38": "JzV2gGX7Qx1a3rsJhYfWgCrgYBozkqPEMCFN9Wvzag1UmNQvLuUwhrgiHwCfcTyVLLefFSQmHBEgz6DUPSYWmCf",
  "key39": "3TGcPDJNERk8pqB4n6zLoH1x8ZgFfayupdsLXzrw3zq3p4ec9THQ7vUrM4mCChT4xLYm2VhtzaXw2EaWAC5xS2Vd",
  "key40": "5tfeH24vHDAYoZvxuVLjAShACjVAfuEPUbBuQr4XcstYa8CCLw21SBmNWuQ6YudNHKvcpViByP4W3dn2ixWe9yPB",
  "key41": "3iXcPDy8hjXsuJYzZfa2RFTw9iKEESDV6gN9ZFCA2KUbpQGPsZ5TDh6MjSSnkYxrW4yFnfESaT9BnLJaKwPzaxWn",
  "key42": "36w2KhBNEarY4VEPV9DHz718qBAkEEYzo6gkvh87txDXtJrNg2C7rJBF8oznYH8fVtNWLBhhRzMfgF1mjACyJDDv",
  "key43": "248BUJd5nEYYxNHWmTsZhDJEDyud1gBF87sws4a2sK7gAhQ3BuLgQprUdVhBGD89bkYTmCCcqR58VJfmUsMFuZME",
  "key44": "64EjSa5TZH2CAc6vGG38VFLcJKi8ygo1wG1H3oiPaiaPFLQ7nMUQ55yw2ATRikdYLPzTjdUQTVDZk5cpX5D9VbU4",
  "key45": "5nv6jP7RZJW4EY6ug8MuCneo5YSHcxiXeUaot7xUbagqG4wzBtxQQooQtmLr4VGNBRUH5ibqyGezuMK8ixXKhBnD",
  "key46": "2QJYnSGBpWtYhtjWi397pcisryU5LXAfmJmnmSgy1odTztZG7Qp7Qx7SQSY6GF9qDrhb8jtwNVCFcJKs2KSZrkn2",
  "key47": "3ec9JcEpAjpzSarXV2U8ZuxH2ugnFuD78wzWFGPoMrdLnZqkSn2e2Aq1o4SmJk93jWBXQrui1bkphzMfeS9NkC3P"
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
