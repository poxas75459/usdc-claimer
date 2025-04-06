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
    "56vDQDAuZcMfLzWkphnBZqxxQrD1n33fXxL1epvwSDHHUkqxVJDFxVrwyzYVsMKzCTvgJ9hE35NzonvSkBQCs8X2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52BU2oC9hA3JmmTtV9CSi3VTr9nTQafkT2kt2ucanoejNpJP3c5tguuHezXHi4PAtqmvA8w5UJ1g9FnJVWZhNLhR",
  "key1": "5iKQYtBj5Vo53AaKSSsmy8FkmxCjDe6fZQQPr4ncfGmJVBxPsBCriSSizc3Hw9YZLJ41xD6jb3M9oC4PsqxFvNC3",
  "key2": "2E3t6gvfQkpKnVqNkc5Un95VXEPawH5veuTvN1cAJx1LBi4T9HHL8Fn6SrXAq4ypd8m3nGjeqcHDaoHGbnQQK8gi",
  "key3": "7nXYVFMv9KpR2ptFyKsC9KtsoQqmFxU1dJKqZY7v8JYkKHN7JZmsJ4U2NE1FsvwcMNhNPBtcHmANgja9mj3akmH",
  "key4": "ohuE1wFN4ExRzpspXM2onWhwtNcFk36W8j5hvrdSqkE7o44yScLyYUCMc3beLQvqP6NugQZFcSYtbrCTrDSyEZU",
  "key5": "mLPgodUDMKHjHR8qnQZZ8PtFz6eFQ3sJ3USGyK1WUNjttg1toMFEcuSGnEevMDZSBrQpho6fCotGr2T8aC1PVZ7",
  "key6": "4rEHsDoHLnvmtU9dtbhiRmq8ni6zQssc1Fb16kd95pxAJFX5bEXXSJAX6MMpmoe1Vi2PpzRCbxebr3zY5KUTwgcs",
  "key7": "3uCk7XGvFpD7xpayWG7uxBUGgn9UfhtyiboNRDJSjD6s8LKvmeyogE8UxSvF1CakmEpwWvzd8xP66rTdJqMuHeay",
  "key8": "9VFiUnPK8EhbJpAL1rpQLM9igfWNiRj4PADSPcRo6RMT3wKKUxP3eUZ7zqfznnqrJLWpCErYYaETk4E3gpgvoBT",
  "key9": "2JB2wcc8jzmZFvtapRJbHrohfxs95b6xGVKsyRZfnvMRrwHGpjb5kvKheR1zJo4XUFp5XChb9NzPo82dygqQRxUi",
  "key10": "5QL9smgTfts7iave7t8XteivKFEfyRkYHfm4wBpDvqUkHapJty4KqTQRhPp7KYCbKPLVhXcKTWYkdz4fU8GiMsjn",
  "key11": "64Smrwbdy4wvy5RC7LaypFjyi3LEhkWQurpYRv3AForar9zRwnE5CfoWFRoS8Rrzbh35YRbJ4srJwUGSp9uh7E7d",
  "key12": "dN4ssqaKmrW53NY8eWcEvt6AVv284TP4mtFqbY9ZjvKxMBKNbmEuTW2MtV3vhmuRpW1e7TDTHYgV84gXF2HeeaK",
  "key13": "5c6MEiudAFgV3D8teCferU8uaAdkyXDhA63T34iFCjBnbfib3hpSMAgDwEunjntz2pUipWVxyJGPZ6jxzZwHDXPU",
  "key14": "4g2VqcU6DqD33mnCDFxZgtLAXNH4UPxVhrrk7fbnVHqhiPbk2hiCX6dLGXasnuC8irSmV4wK8FUatEM4C5mbDXPM",
  "key15": "23acsN7eAemTRZ9mxMzJohYo1i4KQbzEvQwEiw76ccw2rXh2VsM5bycbQXXLWWn89SeTdhXbe2ZZWMGo47jwYTXn",
  "key16": "4yDcb3m2ht8friZ6ohq88qYNLorFi52PWJ6tPdSRVyk1pYxTi8FCRwR7dVKLB5wnVMFcpFJreFeQFrvpciaLoCtC",
  "key17": "5FMTSEKzzo24PRFwfFKJkYNRCD98E4W1Df7wVU6BPEs9kpPn6tir5b9rCoJjdNyY7jekQCXVWeX1JYsXTgZ2bRER",
  "key18": "5C7MLMhDvgipsCuEcEaEshABHtAmfkYGnHXZLKKzZALpFQvTBf88zqSCqP53XYNHG5HSJFAxjc4LMZpQhkkfQH4r",
  "key19": "4UC5RbApXXcbD6t6gthXNkEPdtqmkb1M7DxeEXoL1GRhEHVFsdUwgGkxTbWyR5jbXGYTzMRiqwbF89gDivDmsEHy",
  "key20": "5FadMYnskL6ydJatwL7ZEAMA9oPyV5AHHnsXTED1BE4dPdD1Mg4mqQESzaanrh5rLKLoUpqTuHDUzQYAh32jjo7R",
  "key21": "5Uf2Gbe3yRM7q7ZHfbGYzxTcqHFFeVsZib45Hf2ENycs14kaSYjRLibQdHzv3n9W95cNCamE4XFikipQf5xrKLv4",
  "key22": "2TWPAbTXsoXbeU7FKLjeQExDRBDc4bE6a53a7vfjTWvsJ89zRxRtujKfrmdXKJZSxgyWTbq6RFcf4cvBVJ5J79ht",
  "key23": "5xouZpe3CQTaUDdu3muEKPtcX3NZZS8VqhdnfcK93dByoBVKwKfDgGs278aiCv9DYb8NRkjrtUY2WMwyvCu9cUZT",
  "key24": "3gu6WzwxutffgZPJb71GNnq4LJtwStve421B4rAJJY9NvWaNE2exEZatfCKbnHGdb14QhDBqw6eebonyB21x5N5z",
  "key25": "5XygcqoeR3iqQpeeVJzXveuUnxjQfAKqEhM9poG7TD55X7iEy9vSiJbuPuPi6ufjB6uHuaxmUfyMttosbQtfJscp",
  "key26": "3g7sC5V1xDah1SsGT9THhZrJc2k73Ri2xN3uw34a2KWn1ZeH1RfehV9VBLeevpzuGgHinLS4GtUvCjz7aLQffogk",
  "key27": "58BgmrMujwg7j9L1WKD44Rn8CWGX9TZvM1VMNZW5pigFrJM5ddadJ5vTam4tCg9pYonu2JJLC5itSjMPTaZYmYD7",
  "key28": "PWitdthC7sGjkwHj3hhDEALG1dck9PCC62s6Ww9nEfwsaVDyi2SyjSXVh4wAcz3ftZWSEw9pw1HU1a9SpeXE9r1",
  "key29": "3SNit3mWtYF7WVBdfWgv9kzsF4dKrLws1C3YJzh8wwZJ3trDQU7Sf6HmuBXA87LJdUUaA7Rx5zdGpjQp5uAcGX7w",
  "key30": "4SYFMSGsWtSpa4BrTAapdrnJGNsKaSow1FHR7NWxxFhXZe3DPWjn9cJCzqUnPckucWkbruFaHSHVpyGLXpmFb1jW",
  "key31": "2EMmVdUF2EpsdzmnAejc3iCRtT2Gji4HAQzWhmjZgpoEpqq87re7asD3zTZHSrRtLkYTAwRNtwSAusKctUq7XKSg",
  "key32": "2AtBc3ADCv5yHgoS3UMbanreUQY9iEyeRhQ7jdHEJxaqicPZViEVE6fsfvpSrpUGC4Yr7H5wfLT9UqXcDG6ghGA1",
  "key33": "4bQvqs7sNUrd7AdDdEDhbLPJULkGx1pRpjXypFLjgT2H9So83oEeguQmJfoAbSPxabhntKVVvftptgB4tBem5xDj",
  "key34": "2kj2tjkEFTU9c2WScabViUwULBfYM9xwVTJBp7LksbAFZ8UyGjXE6ra97a6h6EWUe1wds29BR6qQv7iae39bQFwU",
  "key35": "2iHFwkHk2BockadCdAovjYGGbb6YzN2ewFhQSTYj3xqQKQmCtbW8H6DBbmVdJ9TPj6ks6WJ9fEgaseLxNR9RnnZW",
  "key36": "36B8VgjnqRY7dw8hLJbQi3h9KuK7R4pHgoj5t7NNnTfcuptBxuUadBpGgiaDeRvhUt2zsk1jJLekXZLZDQhyiRKp",
  "key37": "312UceagRBTREW7BmLTZmGaJZv7wbBr5eproNkAiaJtj2c6fsvqowXsexAVkLK8GSkwJpVNRaEhvHtEBdGBAF6D",
  "key38": "afBtwBxLGtXSoDz8sRvW9mBmw9iqpeVrC6MqSR7vZmU33WQ3MPcNRv2uYbkdxaYJBJ8JG3rRb3JnLvyFMocgf66",
  "key39": "vgJ4K3KjtDMryYeUc2vRWQmWfYVtMF6SsbZU6ddycHdk373MRCcqeaajaoggiX44BgCQTuxn1nWvoLzVg84wPmR",
  "key40": "UvD24iVPPTuzePseP4omAAMyZGwq7KEmgYVA2exXFE8FSMJWyY6Y1UGu3zZwj2CD4nWAeLP6a8CoDQTt38x5EgU",
  "key41": "5ivh9bSoRpYafVho3XsbMpJ1HnJzMzLEZwLufyfvVij29AhJGzLyAAvwwaYdbDLpf63XMxuR2V7GkMxAwSNbiosA",
  "key42": "5C7LKDTgxnVo6sBePKv1skb3cWc4CfbYWWX7KsjewZ3xF6ScmZMha8b6jgCyHghksLLy7uSbd9Y6G2jU5wGFFfA3",
  "key43": "4h2bw3TEk1U7NsN2B5kpPJcxswXW6aqzCsrE37GpJgxCi3iGta8jfNQBgn7yMkZc5KQQCmLo68yifhGt6ePP6zqQ"
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
