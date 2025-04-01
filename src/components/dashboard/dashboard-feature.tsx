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
    "3VUwDBU4NbMPD6KqGWVA6SjH9xaaPiXgtiaGbmn71aHiZdqEYjVguWRZcAkpcM5P3xoaR4JQHbZesLT8gDfUapjZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Qswdw8wZ5DzYb7ajKqF7ryJAtbZAGwqCWTbqF5EM3mNFyEnZvT7bBttQP9VDVCgj6nxweJ7n2ojVeBXpbYVWuXm",
  "key1": "3Skdv35kH6tzwR1wpxPxxvRszYo2rFwmhJxtcBWVf4unss1TzS2vQeY8h7kmwJuQkSDnYpw961pU9YQS5TfRNhxm",
  "key2": "mYtS5uRh9xwQRVcUARms39otjFxYkEHjuxmjWQXYdvPdu8DMwLmjbJLRhEbKiJyo5aAfwrAqdoZva5k4uRAjQXN",
  "key3": "55JSvjASUBnwgjTiQfZRWmjCD2pWNrDvE4uzopWRo2YRCSNw3r6HaLUyH1yMCvSXHfgbVCLJkkjFhuYopSowumXb",
  "key4": "44ynYrXnLUjD43jFnQKCF2qdmipoMK7XhXTjg3dJrJ37kuu9XpbmcDna6nhUhQYjhL47vv4GV7zu6n86fuBqmim7",
  "key5": "2ERmckB8NgmaUtXRnGNwowrX4pvprxPuKUaA8h9GYwZU7NHJXrDE4FagV9VgwmBMWX5YjtGKhUo9PNTNBz9RYjoY",
  "key6": "3zdYwYhe2Z59qYshTgSkzJqHEKseeL8mmM7HmfKN2RikM3BKBGGTcM8amrbtN7UNwiGQt5WAZWujQLfJTJrmsC4o",
  "key7": "1GEMc2cNshGN21TMCP3LZDt4ZdkFB3tszGBNrdet4RMCrYZ6sp9ay1wLvJsYu2tCu3M3cCKzepLYBgky4z4ndJK",
  "key8": "5btiRk1DMoNKLxq7FbpmQ9SqbVwpQBCRF3updiHJNGTFdqKqfrEMVohVs6wmfvnADXeLSZiXcoZ7jye2GdTd2otD",
  "key9": "2S7MYbvwHEiqSw9x8Cth3Y1ujRb2WReNJZPztMEZ7AWScufBSnezmWP3k3wCmXu68RFs2m95339WDFZ3UfEc4c6L",
  "key10": "5MzMdSgVcuayPyATYjdXWpyBb48gJJeQQ13yoksyqziafeAr77ctxn5Bmfqinc3wn4LkEDJbvdVhR7nLNFpK96Qz",
  "key11": "5GvNktUrS6vbkRMEYRzvpS4epdneZLckvatAYFfBySQWD23rdbBTAVhdE3EPA1ezkw9re1uiVjvrm5xyJZ6xaao3",
  "key12": "2uZ4jEXcStypSBvrCKw8bB6g5bJGvhDqdZaMB7fYoi4jk6oHLoazH5d9rrLXRwscAwEd2MDr4RdHX8cfy4No9MBu",
  "key13": "24obuchftSjuMeeHcRDbE8QVb5aqQEBoSrMY36JXx4GkC8btX1g3Ao8KPcVjwUuZvestFpeAF48H5B8HxCWMe4Yf",
  "key14": "5JJAbejMxxQFSvR3kZLQ4c5akStB9YgZQaJfvmLauu4k78kmSh35kzNrhkQDPX1K8HjxtcRpcXdc6rdaiNsL3WuV",
  "key15": "4iHjEHBaQg79sAyUhTmaM96N6Vamo3LGnk1zwcRLnWMHNe2HWrwNe3kAtBojCnAnEoggQvUVoPdqkojBdXj5VWCx",
  "key16": "3Btga3ikWPckokuKmNab3xx76CWruPYZ3ssSmgPJw5jnoWeecAYKLz2PCJR5exen4WheLs9n3svVHLz5As8keLET",
  "key17": "3uS4FU7FRKZzGvD1nZt6SnknjXCf6tSb67hY3sZn3GpkoZ9X6RHXd5y9N7uG6EXGujFJneQ3Z4GYAdaCY4Lyyz7T",
  "key18": "qwP2nhMX3aBoHRjGMAn5e1wggQP85vLR5pVdhJWCe7q6hLJx1AjhNJh3KBeVPJotWSr58hs2kehbtcoP25A19nv",
  "key19": "4Jgp3BE8Pd2suvc5fC8aTQtMgembma8dtBf8kREj6o4P45MUthgCyW1PwqivjJmUrM6gsJRxNoVCs6XBiQzCRVpE",
  "key20": "5LqcNQB4Y6cNaYm4iF9faEtragNsa6QuUCR8Zky6vCzGQeFDdCszmU5y5eSb1uETyWEcBEghewdSjYExn5WR7hak",
  "key21": "2brYFgYSxB8QJUzcYBPGoEGuZKy5ma5pDrMteECtmNsWNSR1bmz6QeVqRmAQ7BS8BsYJnNouXqFpz9Xf778izxyi",
  "key22": "3e1iZKRq4Gzmz1De6g2JaDfrFNsP13k9Tipd75jt8bxE9T3D9s8R2N1VX45cVZYquSJ4Vsvzy5oTLgKSHRiAyjAL",
  "key23": "5UYCncSzr2e18BmDQh6dASSMo69cz6r7DA7ehdZLABHkcHYqkuKgoYtkotkbkMeqLhUBGWfVd7PYPDRhPZ1UWENK",
  "key24": "4Ur4KcLTBLSdSndgc6AE9SbVsA2E2swhb7NaFpHFGymVLNb7GhN73kNe91mmyKW9R5cHs3B4FrufQqTdYZExAiPN",
  "key25": "52a8kdrKbSSY6bZckJU62PBhk6WaDdwfeuYm7LygLacf2ZAiXaK7qzR9fiLvt8riyftP7p8ffgqLNb3DZRXze6pG",
  "key26": "518C8pjYV5ztZeXkeBJdht3UxoSHaLAr9a3Hg3iEkFLS9tbYtVFxHtmP3de5HrpXoPcaxru4wPgAV8jF1wTzHuGf",
  "key27": "32ddyhZsK789CfrLUCLs1yDieQjtUFq1821cUvzSVmG29PAZUNdomid55C8MsS2YWMzmFHDMiQgxCiUcqb7xjVVe",
  "key28": "5u6wFHuihxzCcsYPGxE6QbcWZEAz4oZkPkgVi6j1ymsihzaLYHZQADenQT1uLjdD1nSUEst2qxDVmK7XyCefES7F",
  "key29": "5CauXBuHjgHjTT9gJJTfi91cS5Uj42NKDBgLuco9PvSsaznG8X9P5FCBunuAouoGAqEmYVGD8Hxmg2CYGbdQ6ueD",
  "key30": "63AyPo3e4xXKrodqRkuvVw9Qc5U6tKE1ycDTt721EAXsAsmTFB2pBFJtUjydFZYakUN1yf2g2iyZcerTuidLi1Ea",
  "key31": "2Qki2wyeKYWhZcDoH4cjiYez7AmSbdbfxZanjyH3CGdzeyjNpNaVEqpqArZ4j8SBuadiwsTLuWXothZipEXEx2Y8",
  "key32": "4FdChHGGau7eFTo4GDbpe7mSRj1sHCtoR181JHDW7XEzWryELVHYULbzzqXKpSrKNt5VY1dwthTnndpKN4sX1jNm",
  "key33": "35KdBGnNcfxtk2Sy14ATkCYj1NYXm3rtWTi7igpQJjZmJcip4qE7nLZEqKqtjncRbC2H8giHfKJbQVq6qEE1kTuo",
  "key34": "LHPxUjfGGNgj25Z9NzRyVYxFzDCcDp6iGfiJEM3M83gAdbrtnnZyWUMkAn8s8NJsJ9KaSQmyjpfAETDi5f4F6nW",
  "key35": "2jtHnr7MJJT8RpVUKF5av8vsmfuMtwxMvuCafgEeGoHrGPNLC6QytkR7tDyju7CySbZC9sKBj3AZ7eNUCa83bCbc",
  "key36": "24sptJxutfRV7gNLryXbqYUfJkkycfLF7xd8mWUoRsxz9eQKHK7TDCQHWu7nWyvoesCrZnaAkGyStLhzmpgsnc7H",
  "key37": "ijabaeezV6gaFCCKLdHtePggkXL15owg7fXMnR2RwxGhyS69HPyBtWyeYmzKfyVsxsn2BxKemHu18a4tUy4q8ba",
  "key38": "2WSoCDLmwY3VCweR59GSc7314mhmSivd8LSKQ8JkYSfK4kasiAfBJCKXZ9QiwU9uvckp53PXkS2X9mdXSDyrrqhb",
  "key39": "1R7C7fe6RpfVcduPSeHpQ56t7WhA8uZpWHtpMrAhfn5xfSLMSCa8bM8kFowMjhYLAsnSWkqquhaMK5qVHMNCK9A",
  "key40": "4Hm5T6wnMKUSfXCYdpTjVRKTpYDwt2MxGm9ob7Zbr6GoJ9Gio3XP5G9c1Rrcr116oSxvpGCCTAYtYVNjMpPz4g5r",
  "key41": "4r8xZf7dXDpJAGmfcqLYDCNatbaZvsXNgzSvwSKr6rxuzfrNvYQjTuuGZqLNiiFtqKTsHrKGrBiHDw2QeLBxMkkU",
  "key42": "3Kr82JRfFTtp2zF2YGffTKiYmhFgG2LkwNgDDQhVeVjnZugsGX4VfPHnRRtWzqs3PqwBnP16AbdDS7VmYiqNRzMp"
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
