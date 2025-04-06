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
    "3UJ6Eu8chQHsMXucdH48sG5B9pnqCgz2ZMeHAmV7oaiW3FBAWCzGEg6X4Uv5adoWr5xUow31RT5H2CTtKTDUUEi8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57RozV7F2us88uEg8JywuaP2US5kEdTCME449Atnn5ZUUXneMvNboWuH42FGAHo9czqRYjnCp9EVBRdEoez2Tfih",
  "key1": "yYPpx34zP86pAnfc2hqSumK7ofqu3GvviBpkkU8BhpW2PB5Bcv4ghiHS2vKiVtZgBVx2XJW2N8EJLmGnXySGt6z",
  "key2": "65tit1nWVAcVRwsRNhiJHHBuT8MSkcSs8bwisiS9dUasdpWtHdgAQN7o5RmWBrcswuS9riLMZ6X3pZQ8GsMqPZfd",
  "key3": "3SZUFHWdZFtgw9zvyC9N59DiSUE24eNp91aBLKg2Sc1xpe5gY2cnV2RmDz75Kb76U3XuYUsyNc84ykPJtGkadrEg",
  "key4": "4km2mEY42dPV4UgfSdukzMAfjG7Mf1PnWNNT68nsPSBScQPpqEtEXCyZSzteQs9W9y6qk7VrAGxqjMP1XdWm8oK7",
  "key5": "ZmDTy3eZLwnysD8hyC7G1r7dqxRYBFvNKRLWMHWb82zAEVeaVHkRGi93ffhioMFAuj2kpw3dhWNZVMpifqd9XtU",
  "key6": "23hARnRzrZY5a4SHRPheQhZiUkUuZZyj4QmWEiNCfc8KsuSxdSJFdUT3C2W9dmJZWWD9BNG3q2APAkCXj681bCZ3",
  "key7": "5AKRkVtNrCaBvVjJLpUdrFG9UyVWDPRToYhzJA72RDDzYZyLgZj1GfWJcphWyuNU2eM7K4jxST9HUC926zUTHdDY",
  "key8": "42wRtrsBcW3PWoHZz3sfsLRZwunPAB3fwjcu6HKLaGpo7JPJPkRTfMhaHegkHYoPftRNbikjWMCvKCSqDCcoBosw",
  "key9": "YsjfKHdE17x6nwdKop7FRAfPFxc17Vu1srHosvLHnFdaC6asbVV2y4yb3JxKvyugZErKvfAv9fuYNKL8dk5KRoB",
  "key10": "21wqgcWjKNuc7FEjSghXUXzbMK9WfS94yPPnaBPUVGve8ovQdHFuPqdyiVUWJimJRAFNyEPC9X4eAxVcH3oJUVnP",
  "key11": "4r8ca9z8qqJhMQpJ5TfPYiojK7x5xWv3yYr9Zfka2Ww97tpsbyt77aFbBSsK6u3G75i9xsAJkPZD3eBHUhrhDdCG",
  "key12": "5VSpcHGtk6R96bhxoQMsxH1DftyjumPsLqLK6q4TmxbG936aQPauGmgjhTGQXB6Vo2dM7X2Amf4637Vg9TP4n81Z",
  "key13": "5ocS6kKXSJedfUL9RU8Amc8F3GByG1KPo7utPJgh6kpYv6uTS8BkJi1JQYJT4MmuBY27xpCdgKgxpPjk2NuNSHuW",
  "key14": "2Usb5H3CWpvX9BSVSWrRM1Pt6tKEv3rUkixpordAdWJNHMDNBciXyW4G11mmwLDTJLiouZy5oSyh8RuLUXE2dzJ3",
  "key15": "4qR8GEea6Bf4XNEA8S6wAhd74QHey7ePWGaUtkueE78yUbSYd2MdaGzPWmcan5o36GUNk1Le3ujEDn3kLD6XsCM5",
  "key16": "3vDF9C7UgpVkZW7isLM46yDLwYRkfEjaxYjKmbNReHDw5vKcty7vQUb7YXhdr6YKhhkhFxheGrrW8FmCEvGrpG4f",
  "key17": "2oGFygLkKBuDKvGocwokXeejGjo2295QAGxCrXaq7Moaik1vtuXZWXg22cKqyhpiqw6xkPxLLLexFURXvDFzFmu1",
  "key18": "2b5dZLdiAuhUa76APfy28jmwwZDPUaKyWjCvT661aw6BZTVgTF26zssx7MMm4KXdninBB1X8iYeA9G5yuKpjStXT",
  "key19": "2cf5EFXFp28epD4tiarfevj6fEtdpe13iRNNJ4ALE9LiQ78GkDXe47kf7jz7bhG8kTJg1TMkYfPEEZrcn4PMnTSc",
  "key20": "5YqUUsFhvkfCAsKzxhdjKGf1sGhf57uMvKmG3PoSSkfxM2ZhrPhoSgUwuUSz5c4S84xkPu5m5ioFcF9gfiCmgtHZ",
  "key21": "4Cx8dkbA7N3aucuKhCZrBKgGJximrVP6kSyBT9ei17DKHPAeuSR36zYubyr5JpbbsSvRiTGviTkdFpJ9Tx3dMreY",
  "key22": "4SyKanimJbxKeWcBEwsdQuwLkdGsRFhPMgmBhQbr2fjVHbcuJCszS1PQBbcypGs9TWqEBgFjdJxeCtNPhYdE1LAF",
  "key23": "5xDwAQMS7cZ7CiSRso65jJGp7CjgoPTqLmwqzsfx6SWMfU3KPWwUqZhVMQvbsfSFEmCcNEQgantYmfrfoX6kUaEj",
  "key24": "45s9hp4RkPJ9a35kQBmtmC8TLCvS9iqAfymzZLV4PTLHsM2YJA3z1g7MgcJ8v2GWDoraFmaSuTdg8tYBbYGbANUV",
  "key25": "2oU2LRWEXz25MztBUoLfDMPfq6Q8JAngKtPoyFSdBM8ZiWZAKq19JU8Hjgh99kKhiCB5uZ72egMr18yRqXuSp95U",
  "key26": "4bBMQcTT2WRJiJhUfX1NZkLZV7RfZT93M38JNJFXE2hkU8bwtGJ4GK8XtQ5HfNWJoUJMkhtAZSJLWQzDhB486Uqu",
  "key27": "3AZYN6xWtZDDFoomoVAXzeEfByRhoVxwkedAjJKQJ6rtyxhtQAsPQkCH9FjPvsfvt16hFRcw7vAVM4Hj644pYCVk",
  "key28": "wiazdQjGWiuo5DE8aTyjyUbFQUW8NN6uyo6EuU7MEQRkCJfvcPpHFEVcbNDH2ozqgJVeMDvEErHQCXesKS1RMr4",
  "key29": "32emyKfR4FVpnRa1rzPFb61rqmZqBWDBNxUJPic5kGuwBhqoqAWm94chkmJ2sFuYc6ZtaZTXs3Ta68U6NCenmWKH",
  "key30": "3kCejm6WaGiMKK625RXojHS6yoV54NLmTWfyXT2KTpbYCQzehTaUtAviF54xK39qL7k8Eahy1yM2rdeXpK7P9zdg",
  "key31": "4DTaJs3vywss7ovfHkyZQhrB8xRjEXXmnggjFXsjSKnC5kSzccGcvp7imnZKrBcuKTqc4mYkQUP6Uh8PR9mwmzaK",
  "key32": "gsSxGP9GLPAy23urJUKcvspw2QmWPRampNn13zwwwKLXEn1skZBMM5Rdb3kEwcyHt8oVaP8qiUdEKFTKCNXQc47",
  "key33": "3dFA4h4dB95WQdoF6iNS2rK44QGBzGTrLVaqRGuNU2FSaNEVgmyYX25zF2AGJp9K9pBPbwLLNpx6qwhsbwANPrrG",
  "key34": "3PsBNBY5fbuoeBvZhEirHatKqCj9CR4uheGZN4Y7WBZVJ4ZE2hLshp5Q84XKaBRq5qbGxoke6vP4nfVbZJMDwCuy",
  "key35": "2pLFAYR5oo5Mnfkd4u1zpYRwsNcVQhiMyjFhkDeVZThZjH1sDa35pCDxs92pZTtob8c1zphAE9q9h4w9bu58JbDg",
  "key36": "5UyFNRiqYCJDxbNsjKnNPJ529a6e7f4WYmsJ4es9TXZWLtKidf7uZxZEcFdLXb2Nxi4GieD2gvBkrfHXXmEoMrUJ",
  "key37": "5tRSs8E7g815peKvyedGb8d61t7QJ65UGHrGxnhmVMBzueR5as1MuwBZcDoN1SSAbj4wbdDxZXhxBUkTqj2S5yt1",
  "key38": "3vvCmTskeRTbrUSZdT2FFBoGUZqex9iJviDvf1k1GCMgvMrqrZBUf98UPuJ1io1fvPhZDz3gRGmwz3JYGkmQyxs2",
  "key39": "5vY5QM6urTNbBp36KFVMS4Q9QWnyPtiYebRpJiPTmjUibJd7wecMMeJSrXKXR8rEU1qgFrJKMfTRQ5FkPtqsDGsR",
  "key40": "3Y1wEPbF5oEUDJyyYG1sh74Jtuw8MddwVuBh8XzgLENCRuBe2Dc6Bt7GPz6MhxQgJCayYNaFZEK1RxBrWxJntqp",
  "key41": "5uNTL4gNC3EZLGLQoaUMjzEyBN19CTmKDf6L3Eo7nTfVN6RV64sB3Y2dD2zXbYuDzoD5mbCWLcBD2xXZhjYecxbD",
  "key42": "66doViMd6c7VdgwVXyhGuf9u1XiDZbtzTpG36VSjAUi9awvKSscyWK6r91n2yb9MDSyoVPVdqEtr2Ap8tysWiJJY",
  "key43": "32yygieEPpLYS8ghzcb3exBfQxH8jGth2Q6cEiPoi7J8dztdT5u87xetkHPYqZucp8Eant9QHtRyD78DSRPQj9xe",
  "key44": "2v6BTq4UYywUraGxGUmfdSfBTZwxdTJiycT4A7KtGVVEHDKFinUGXbpuJUnF4P8xa5d5Li5GEAcBoiu8MnsaFTt9",
  "key45": "35veG4V3UpnMDL4mnVa3K4bLx29pH5NWCRubimPxGdZm5vFtrUWLW6969fnCnHNBY9sfWRhNiJyVRefTAQtfViM6"
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
