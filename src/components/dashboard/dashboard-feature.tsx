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
    "51R2uxP9mCeBUKcJBa8Lbs4L8darkxyHt4k6EBX5hNbsJQ7sTe5Sdfmodg3ELs8B6MVS8Cp3S6xkachX9BeruGpv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27iUoRiDg3jGyFF9s6d8Cc76jrCAtDTGwAGrtEdTrf4q3shYPWTctJtfburs2cwmvVM17dcj1riuBB71W1iXyzdG",
  "key1": "2HczDHRneNUwzB2w9NMwwqXKBMJBGVhcKScAuXbnPL9iNFmNG7cPagfQvu9dmrJ8Dj5sEYg6iHmJNdRdX7kPwFon",
  "key2": "5kA92emsk96pJ2Jw9dQJtJTSJ9tECVCodMM9m1rpu3n2ZsoFmMU3pctQCHi8YpjZe9eMF4q2ZCafSDopqd4NNY5t",
  "key3": "3DfaK41tsaWVEpPh91rgUXk2GHTr7k8iBnARHuo4MtaDXLyXFyjnWLwKsPSc5tNTXBSLyKZHeTLj5YWvuMBngGLS",
  "key4": "3cypwKV5h3h5UoCm5n6F397oYbYr5kxRgEQe6GdpoVFndMv1qqcoR1gYbTWApvfEj9s3AQA2w9BnSpNNU8HSmuGQ",
  "key5": "pcQx5nj2cRyGKuebFfk4TqzrNGWrEEfpBkWv9mHLAPyDZXpWVmzMoRbuMknfEG69vwcrhygQjWuxHvCuTQ3uKir",
  "key6": "5cyk7f3iiCKBtpXFPL9MqYxijDRySPWVjTBbrA6tPvEpzjViYr8ogfxno12JovuCtwmFguHctwbqSFLbqNBXwWQ8",
  "key7": "2TmQDugX7hfSJPvvyFu24pSsN13q8aRqD5ZErtecj98JVevJySU6uKe1VNskp21YHVvTKxC2QXfyS6U2H5CfY4mH",
  "key8": "4pYxGa4RNdteieeXcvawD9gH5G6oBWT3rMCU3Ky2ThQa26gZRuYZAS9VUVKCpXdFQ41BjFdywoiaZCVC34KftgsV",
  "key9": "3FmGPQhrchPCUzUSdG4GDzz4STL3d8fbi5DvCyovpseV4vqBXRPG2CHByJex773SrVoGfXbLYxxuZAsmmx6ozBtg",
  "key10": "5k7Temu9Wt4WRT28NNyedhLVJivxFtqH4Kc6UDdZBeA92z6N5CVKSMVZ83mjFshxQbysVaQBVuWCWoKxNxgHV7rd",
  "key11": "28wR5nULYvvAREw3vdgkozm8TxxMZHM9Tj1F8zNBhHqt3guf9NCFpcxjgynFSbFVXFUSq2dXMidhAMZpA7o4yPJ8",
  "key12": "t5JD1yRkCHdF6nGCGnLWHFfYWRsJGebwyV4qtrev3eU7RBwmYuU7D3HBRTbB4VtckXcbNt1h92zuEaJJQNFyNYS",
  "key13": "3KY3o3F4mmRYssc1o46sRKRbHRee6RkmrCU8gZPgZJQWVbAkbkbnkdArP7gLtehA9LwYnMD6r1ysc3MXtgwTnrF9",
  "key14": "5PadwUJCHBMh8uCui91GwG4zXLsR9N1yLrNUEHzNuBRy6GbAet2Q396e9g2nULqeapZwC4zeLS7oDxpN9K8Nu8Cs",
  "key15": "4GDdzqYWxwchG7wBt5AEYHvvcL71vJWz38LgF2ig9FW9gvbcnr5W4RqZS2y1oBHbrGqW9gyw2A35BUjFkRvv8jro",
  "key16": "UbXBdKJhyRfaLob1XE5BtbtZ8kvotrDdG8vZUTdmP5VZULivsT2hLNB3co6RCCR63RmRmkY75CosDFe47J2tUFN",
  "key17": "3nMvPA2F3MhHLaPnW17dC6Pt6JFEPAy33esCxFXYfqNSGbqnnPVmRsbooteA1GwmXdrQQdWfT1ZDpeJG1K2Xy9qx",
  "key18": "2VirhDpvzshh2sF8Mjmt1Cfn1t3nMwCtZWZYZiM6gm4ncsPYYPwYtBfYeSs4AbQ7SymiSgKH6Eoi6iLDHY9KBG4H",
  "key19": "2dQGBCPKfoXqjBjA4ki7TBcN1TGFYLt9g13CDY6Gun71P2DeNXUFVrqRJHyETzY3sNkYoiJiwAzGncWfQNVLdYmp",
  "key20": "5Xnv29EpGVzj9YvcAGemZkfesZK72sKTRotE9pxd729BZRYq4e6yfuovpmsSVbrwJt1vkQFHNHFJhmCcVFLkAAW",
  "key21": "4ZyYfeCq875wmHiTR4KnnTNzKyRtB3pT5RwknHRtgXbyanBS7YuDYwymvaMFtZenZjtFYhAnGJ5pnsGFDAynjEtj",
  "key22": "2bk2d9CWjdY9zYEpstL4W4HDQQq5CV4QN6SKF7mXGsdS2Ze56enAEdxroZXfhJC8XyNp1aSdFCWu3W11qL7KXX5C",
  "key23": "4SbfQ9KQ9cawupnK6wTaQ9oeiLCVPQEz5TudifiARzhuLfsXcGBKYaw5LkGFLRPyfyToNDzfXQfpmZQSv3Z9Sy3F",
  "key24": "3NKvTnKdpa6zUJ1BZbXAJKL9GqAVMJcCKSNtg1gPG7NUqj7HLCYukiPGfcRqxUMfBeBw3DyuPn6AAJMM4da1nzzx",
  "key25": "46p3e1Ey94mb37b2NesidrYhnHw8vgyr5Z78Pq9fK6PhYF1wU251rJDb88SwM1BXztfqKsYLtaEDzhsUES1HuPgn",
  "key26": "oyM4H8hi5nudP8RqrErokeTPngPzEQhssYxJ3F1sDSh3iMGAp22ZAxvcFKjfcfwBXqjT3eMs6PnPB7KMASocp1r",
  "key27": "RhSm16iE9SfraUGA5UfPjotUjCCcFXyw3vzCJ7ktfxBwg2dCWvC8o8PfZti7FCcnCSGiJsQw6H2AVeRmXjJV58Z",
  "key28": "2zqm6wqb9PEJH1JNdt7qbymdahJe9GnixSGWj7tdKaxerQmxjqkH7NsGsNJmoWXhGJ5p4PouCm8zHEFZHonbTPZ7",
  "key29": "2GgjnbiPZNyUgWEW6E3rLC57zJEA7uqxZEybnRKJKWr6LaXH7i4C2WPe1VYPcXP3xjryn8RwnHJL1djscG29LCGg",
  "key30": "4kuuRbQVkYmwRZneVykPhsyMgUNQvwVxcL5wj6mw66BrEFYYSsRT9pG3RuFjWZwobeLbdMbGyuZDY6W5fauRBuRA",
  "key31": "2V9PVS9P9hwyBSBW9oyPafhrWpB4QpntQDE34pB7q5Cc1y4H1X1V1DtBrV2nNHGAqUWiKE3eqxeKJF1vMZzNY3Rw",
  "key32": "5nn8vh5QUsasVc3tW3u6Gr8jX8wbU7PwZ42NnQsCbFnKdnNEw3SUETJjkhzv22Z5Gwqq5KDM385Nj7KmpvKsqDwJ",
  "key33": "2e8QbkLRVv9aVr3ZQ15eYwf76zii8W1Rgmdbm2AL4oTaFfGKrPbcHDZVQgsAV2s3Zdy6Wy4bAENA6amSP5oaNcvr",
  "key34": "2RRPUXhNGjChVMRa2oxbsNbpxTG2Dwaaphjt2AyMjm1f2pV7YJ2zvinU3PLZ7tmgZ3YYXkt3Z6yNBUppwvrmdgLT",
  "key35": "3cbZzRBaDgrnzyCwKovpGXf99DBfsjboqm9zk5yA6b24hxpZaZgaE8qmnGpAsCBtRCtebqGNPnruBy1sdpVLjgDX",
  "key36": "in1FNFS6BoTGp9GBFkWLG45SrCoDGQk1AcSxSogb5FfSMtnLvqH1XW4HXKPyJ3LSjhRLBsqrfwE1BjB5cHWcfpE",
  "key37": "2Njn6QcZvfesnhz7C7kJWhPC2YArKTpyM9PQBeTjmcEBAtiwjiaAghKJ15KD6tXqWd2gHdrfGz2y3Ytcs4V9HSer",
  "key38": "4VY6HAwxJkaaryQeW3fMpvkRqAY3aNNZGCS9GAmz5sMUpmCG9CzVTpRKCLHCnvJScUdsP2JD9gFdf3QEsi3HNCGB",
  "key39": "tj4DfDtVhC5QKAHZGL5AVhwJKH8EJPMuMjLSZD9tAKAeD5B8Lm9ZyGDC7zYeQKSgeSjxFJWHTbdwkxWXnzJkufJ",
  "key40": "5EoakaPK4o25YiUK9qo3yj91XcZfeWKg8SuLwYRR87hrzNTCHf3z7q2GFamU7TPfmcCU9h72mnbJR7jRFbNqfyZj",
  "key41": "3GX9HTat3tWzymgPWGKE9k9zgaHbf7skSAuhTCED7vV1FrR7nMSE7H8cLLt7WKmc2nA2r8hJaDV8xRpfq56ZbLV9",
  "key42": "5yVJX6qiqaWmFDd2GF6DDs9HVgVoHDuCTQqcquTFGRc89f4835uJ6bvxpuXmfRjfX7bAg9Jkir4Pq2CWQepCXoaR",
  "key43": "4CbmyR4RonnPibamepVV2t1VitL1vYjYZCvX4aBdPc3vijbEBsHU3xFsVSTPwztyNjjrh5Zp5WxVXqnhwPeMeg3H",
  "key44": "2uTmN4RzFEDF8nkySp7EABjMnPE1RWHNU6dg11m9pQB16MngE3ErXQEVB4twghe18Urghe6wCcetmNGokGSqLQyQ",
  "key45": "dS1Ywk6hbiX18mhYr8x6XFUmnhh7wX85DEKoq79YNdMBwqvrKfRk2EeLdBkFwN8ornR7emYs28GArFwjgX7Ufei",
  "key46": "5Lse5zgNXmKJCZxqYEyDSXunmMMoz9MDGcSxKWuHjv5wdVwA5ZZqGYxcGHNEUqB6gM4yzHErV9APJZff4saQp4zv",
  "key47": "TQ7xPJqmLBkdvskyehX8bSQSDDBKEjfiVS7bDRYN1cahYVpz39Dre3dNJjKpFGeNP6J2wV61kMpKj5o2LZq4XNo",
  "key48": "h2j1pCXuXc14aWSk4fNConLUGmHwqHNnmZeU9bww1BCT8KtG2HYYX2nwkfu6cBinKin8k6fLkwuQ3otZcoVS91S"
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
