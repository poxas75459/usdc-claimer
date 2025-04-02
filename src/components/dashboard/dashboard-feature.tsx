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
    "3Ci4w8wNJ93ci8rUeDqKnnJbLebycj29wJyBK1Mf1vZbJxDeW1CwMvsthVPo3p95Hei8Hvhzxx7f71sBJyikgabP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XUrrk7AB5qrXAMKx2eiyjCVGJwsVi9py9E85SrTqAavT8tQtxz31H7xnAULc898PdBgdjpA7SoFJEFZG8WeX5i",
  "key1": "2aQBNmadMhVGHZWwjyNnzyiSW71hfHp392wKM9XrAaNgdvt548Kuf6XULvg71xFZPwByvHirrds1Bzw5gWvRrjAR",
  "key2": "4TiTJEwxKn6qQeT3CPCqDEse2Umzmh176JdLR6WnRGDyBqPcxXQXz1F2ND7AmDwSZCR11nNfXEZMjCaEGJZXewWq",
  "key3": "Dy47z2miubgi6Mf2mcQAH475veHWFvDAQSLPVitV5tGNcmQRBmWyEfephiwhSLgaqthod4CSKn8nCz3tJcrnTx6",
  "key4": "3gsbDrJSGLn2c1khVYH55TLqQ86ugQUECVu7gcut7xUGxXdsesiNyKpgxZxRg7f1p5tNppwwCrHFVTnjm8NnVeYx",
  "key5": "5MpeRnRQJrE1xiyf7eWcA3bWg2iEyMijqyzepwLBMMSneyMmeQjFCg4C7kayLLFewVYhhkjYHjeyMz3coNCqPAy",
  "key6": "5wCwssBqtEjP7zo97JFcZoX6pvDeZGpHPj529ofguurfgnV5YNYAnBMbrxim5sYAbRjMXXvcEodDkWfawjQZ1mUG",
  "key7": "3furymwEhbc2jPyHsYRPXtoxVJ4tgWRJ2YQnoqHbEM7FvMh8kc3FezbV8Tcj9jxE39QGddPXqRgijTFWAUadPNFL",
  "key8": "2RDULGQJn5ufUWktBin1XLGg2w1F7Ttscmo1YmHUnk21CHQkfANqPKZotytCBmb7rUQqGCFEhRSptGff7yreHYVK",
  "key9": "4354zZBnd11jA3madsqsmtw8e3ryrM7GKHsrRfNKhHwPQEkonErYND4FjQUHEnDzczGaHYBciGKhbqG8apC3Ex2T",
  "key10": "3JbCZuoe4EWAfzToMypyfenS9VjYBVnsCEhKTCTPwt64uipPswR3iUUsFe8R2C1PeJ269hZCraxyyf3zANxhjbQJ",
  "key11": "2DkYPi49DJgPRwFV8TEaJ9sgbbk1Vdqr5MYHXL8k8eGx9uVtJfHEjgRuxUJ6DNedXxALeToGcrypfUi88gQog1op",
  "key12": "2Vh2CopagyHCfT1uQ5ssQkuyjB4Ts1Rhcdx9JgFb7Lvg3HZiz4vpEJDk5RVJeFE4ZQyyYGayktwfY7kt6GpC67K",
  "key13": "64yn2Q9SD3cfyiijkQKKuZ1S2ojuCbyXWWPuiheY3Fw2LRYwinMyr1ZUVmwNxjdMjHpq6mwru7c9PeEn6zVVMz6m",
  "key14": "2i6pu72uFYNqgKLXKVhZmD916NAHqjW1rSDuiwRkvyzRujL5KhrjcfWmjicwLxB6iqeqNhN3o1sDpLjmW58GKEi4",
  "key15": "2HRWnsgEBrUDB4CjoPzdd6kDCTA9Ji4wAeM2okQACAQA2mhMzFDLoSFCF9VEjHRfL1cj4Mj123UA9WmrYzbkJjfr",
  "key16": "2cyZmUVy6ir3mgG3PdfYgJ2HofABCz1DNrheQusyw2dEKCMWxHpFnvSrKF9rYoTUheEKNXWNKnjjemsBC4VTpUCR",
  "key17": "2ohvyDhZEB6AGKf7GsdQT4rqNy3BukFCTRTD9kPYsA68dxoCsaCMZchVqhZ856jRZWizUMWkjeuCZjNuSgZtqWVh",
  "key18": "5bfwMgshUDonja19kjdpEzvCskqVytwfYXUnbJmhD7aKgEdvfUEZyFfL4Rwh9e75qp1FjocT1EREu5C4NSb5sBfP",
  "key19": "3c5NQHwF2j8XidLoFwK4ratCWQWDXiBViy2j5gDvecgejnaZmeFVUAgADnSDGumzFoFxG1chfiKg1T5ZfHqQT8Bi",
  "key20": "2KMe3fQ63DsPzFj6SkNd4WzF6T23eUrpuTkBWhx513AbXKWRdBVa4rYjKLGkGZRAqGXxiaRcBEbYFrkckBqEN68g",
  "key21": "EwP57NF1eMTr9PLXRRDZgVmuLCgijGFJLYxEHSqWgVm1LwF78npW4LhuKvmugBWvhGtwRxSzBCqwShA9uoQfYdE",
  "key22": "5WmoK6aAjLg6QyFWHdJmpF6f3BiHMKFxFnksRyHHHKRKHmknjMr97ixv8qyphpx2GobuDnYJCbuL1z4Q7TaWm5MG",
  "key23": "5dYo3tAnjxc8bRCTuxUS7nG3ZjUF8HG3LL1v9LgYq1uEX2LbRR2uFrqDajCK9RmzAD8FqZ4tWQ3mmnT1g2Hpseqw",
  "key24": "3W9wgZXk5dKLfbzBkVM7MDFsSazux8BnqaiKyWxheGiYh58pCtMx2ETuaq8rNPE5ikxg5n6b1UjeTXoX42MaZ56F",
  "key25": "pSENqGdYybTs5Vcty2bUUCCB69gLZb2frSbchtBH6vLA7dMkMstENxVgLcjrB5rWdoWEVaCRLJGzENgcFE97GXU",
  "key26": "4dSvjzZwQpyKVZ5r6uB14TPkJbXKjevcH8TgqkneDjdekgeh9a4uXzkkS53WXkkWpw2mMYnEKyRLgSG7KZ8XkVTK",
  "key27": "35Y1scouohCdQKr9aiQVLqLhzKcVjpAU3DC6SmnBZno1ebudR7fDsZ1QPx9h13uXxgFfrjA3gsMWRbDFD9ByQ3ej",
  "key28": "2sJkRhM6CsRWHgwRVxJpmRjnpX2JvKseurCSctJbHM9eEbFaStrdhA5QHBHJQ8dRagyH3hrQJYVXmhQZs7go6kcH",
  "key29": "3iDUKsVJRbR727cCDpbLWyBvNJRhXgytgB16wkAWqiXpewL6CZA4ZNxYRjSrSAUjRjvcaJGzu4m984keWg3sG2Te",
  "key30": "4yLfAawZfGf1N8jJEodqJ7QJZEsThUUzWHzkTiU65iMUz1Tst3yC54TR838L2zAXrx7ZjahUq5u4y1nAJJSx7g58",
  "key31": "3YBmS5Yv2jVSSPVTHcn44XKMzrU4Z7uhKRCLDb25nY2vGoC3fUCHZ9wqB3RsssEBQYCpNt9qtNwMT1xDRz5wDu9q",
  "key32": "5Zz3gPY5ao25JKQpivJbbPoqPa4q2WmH1K1mWZfsEP1TQq1BJhHjY4JN6HA6qRAwLFPanYrcaKndWodhNG6dfRTw",
  "key33": "2YVdwutJsGrBJuG8YvZHSSBvoyYZ8nCAtXxeS2JUxTC2NozPiqDVAueChvvrabm8Ub9FKKf9pEc7LkbAoJtJR61Z",
  "key34": "M8LYUegqfh6iA13oZuZQGiVMLVMVDSMHm6whCxfisGZHYeurwfiJ6RrgZt3etmZhWvxwuLcB8qXBqbxf5tYWMup",
  "key35": "46tpVHqeenbgHh9fjsyetogy3GUjBWtSPCEb91VV6xBkHHCh3vhHucersHs3PNYiKx7NvoH8DMteE3iSzJhg4oFt",
  "key36": "5XHRC8VYPsKrmRzLEcUvMvRs5bWaYdaMzzsorKeMF4jy8iyyPvJeBCKFZUUWES2v3Wd5JxXEZbpPpCLwcZohHUQr",
  "key37": "7zcbAAktSmns6cPGgt61rtATDst3byTqmZBsBMAp1y4K7TB8gWmnzsvnbrXNaf6nrL13dhnFdxrzZcvMzfRD3DW",
  "key38": "521qJUvoGMjTbZaeJh3KyFSQQB4U1f7xxYqLgFeRr5zjiEqsMCAduhaqamvzsd6kqq873Js1rhrEftZq7PFZn15o",
  "key39": "3U84vFWs6kkpRcHcpBDHE4wbDviEaZj7B7McBgi5E9iuBYkZncG45WbsdEDPEjGiHXysVHvV2fx5o2K2Ki84pNcT",
  "key40": "5Nm2dSUxDyWSbEkiHzmipVQUQJhotUc5QjasBy4jpghH3mNjXefU6urfSGSpT5cC5JF3cyVJqXPERPrLv1mvwAJ4",
  "key41": "3PRyYH6VdSL6tqXLVPoKGXQQ2cd4yAeqHX4BYSiPsMyLPsQ9MSYFXkukxYWgCxieiy5rFsJ1xx13A1sNBCDtwHM6",
  "key42": "4dcos9PcV8ehAhseqsatv1L1tMS2kRD72tuVFCebKZXuFf758nza6tnA7B5YvJEVQgqP9agbUkHuhzha62E1i8Mz",
  "key43": "2FCm5r7xL9JCERMwjAKQ9nqoFdH3P2WxwNLBjUthtXjvzv9aNfQr2S62USZ3NkAmhXBtTVdiEr3mTBfGeRJ7HBX2"
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
