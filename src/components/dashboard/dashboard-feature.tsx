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
    "2u61VFT8KmwYA8BN64gfCSzAcrVEbj3Q12PLhBWFwnoNZmcHYH9YSL9e2P7yAmU5moprQNwXP5ydqgQEtYkx6awd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KAbfSYui5yjjbgNGueyGzefcFvoubjStBXf2cCUoxcHxkghNuLtxk2Q2j2nCwGZ58ib6LEKfTQhtzydCXSbx9pA",
  "key1": "49Gc3qie7gSDB4HwCN9yFhNVbzJkzrFsBAsVV2HsCLxFzVNZiovkaKWLGdceYKpN2WEnp3wtZHCTBanFZ7kcZCmW",
  "key2": "2apNGaiHPcGt2pQpEpyrZ3tMGSU4mm5hRNg8sbCinApG5AGUPKHwL5imFaHmSfkvWWAB8z8yju5jPyLeHie3PjGf",
  "key3": "4XtqyXCTvt8x7ZXxqhsYyLrYdmvD3dX8dmH6awfiYrvg6sJAATbEKRXCk5bUPP3pfBZj6wfeyZEbTeiHypXitomT",
  "key4": "62ECjtkcbCVwVkDBPuAMLD61yn2otZkuL38zivdibkV4xoMoheNVvT1wae196Ri9HkyMgPrASPxkq6Kq2RfRyEhk",
  "key5": "2XHSdgMzEmGM281UD4nWuCHWRw4TiAHpRsbvPmS543x4NKV51ovweRgoLEJSUFsaqkDcfdhVJf6pX66eJp4VqtWc",
  "key6": "5cwkaBzevi1y7GfSw7GkfRnqyRkhct6WhML9c3uEaQ8ZRy2ZV1n6ey8zhq6PTskNVyKJcTGaqCmMxXmvSBtdWndq",
  "key7": "4Ls2qWnKp5ewPgV9emBzVFb1XsCa6L7uFeqCUBoeryNf8PfRBRNv9XY1pXAQZA8fvid3sDdJkGxhmUbFbAnqoEGa",
  "key8": "3zxJ9jarhtPsc33JVSJDomkmyx2wAjukWmo167ms45jGfPvQF77ZwWYUhHPew7LXJroXZ2w3KKTyET8q2RKYbTwQ",
  "key9": "2UFiZ4LMJSLUi5RuEyGSLimZ6s6f5y4RiBvgSnXmuKiJuzrqd2z4qqVeBqM9R23pkWCnFV5QqSpttKFrMeswGXwg",
  "key10": "3GGoWT1RPM2XprcVmapXBcmKdUjdcHkcbcTX9qPTeJ2DbZUisiZw2siLVpABrVYyuhQxN6tJPjYcm9mDA2ePcKsM",
  "key11": "2cZ9Vaeg3tpaCnmdryLUTkw9aXUjSeaWSgnTyLGkSvw7QRnMsqk8ba5jaN65uj2kB1MNtEhCVVfuDQLnSMbzWUZ",
  "key12": "5nNtNxJFE1ZjGAcXt62c8RydK2GEP71oNYYjLrjA45DosZbBQ88VvnqJ7neEqt6KfJ7GyUd3zZ91cnwZiEasJDHM",
  "key13": "4i6E3fVYBXuqy58npg4g5SXabwGvoavYStCa9FZktbiA36gLu4SpKKbyY6bhHjBMYAhmBVxrpPojs4foqW2SF1qc",
  "key14": "XbuzQs3RS7NP9LXsJ9gijqCgPJS5Ho3FwkREKV55R61MHbzfz6E5rDEcwEvvwio8x4YXuTA2cmUW4j2rFWYVF2x",
  "key15": "3gPKagaKk5r3QKrHZUoTFMjtJ6qUzhQmAPbeR5mHwWqAJ7V3T9d1cHqRBnBC8K9LFD3JPkFMKYmEZaQn18zjx5xi",
  "key16": "2Gfr7YHoXzJEY9bn4HUXt8dsJyWAtfd3VNBqYFsQMjLyGy88PMuSrhwF8MB9sxtakD8vg7nbJnMajHeiRT9iohj2",
  "key17": "2fkTzrvthJ4S3wyPvt7FbbF7DxCZrNFaKyZf2UBrogtnonZsNE9vzyCUrNqmA9fL7v2DWczq7jFBKKL8HXS4wW2G",
  "key18": "3GoXPiL1AC14mdZhagFMjQLKoZbCA7MhcGh7gU87uzuTuhJMcFV7Ei9YGJziYxadukAfjohQQh8NV9AXCi5pWpVC",
  "key19": "NNu1CR2aL5V9RdVQfRkHZ2V5pHiqv5VkGqZdgJ3yBstXm6Cu5zX3QtH4BgqGE9D88oH92Yknohdj3VoPVNSc4VZ",
  "key20": "4CffFgF3ikYrC37cNdQ8xkW6CtzJqYiKrUgpe6iisqDib7ERDoAgwPAFm2Mpv7n98HN8Pmp2ZbfY2kmvUK2uJR4q",
  "key21": "4tDiUapEaaJpQojExdqmfQULrJ2vdg699CL3nbXPwTKbD182XmMy7rRwAKESLSCQZSpHzrdSeCM55Qu5EWPNma8b",
  "key22": "3D7D5iVmHS5SGb478cxN9xg1NuZpeehawP92ycmADoopRaZaqsSD6zuTXKph89covmCWNKdMdFsHGhSr8SePJsPS",
  "key23": "2J1FVssyw7ZRWws53jfUTfaoDn8y1uUJptraVGecmRLV5AMoSqQe2t9Me4QSV7izYvXDSjZBbrfug67v38XhTAaq",
  "key24": "BHiSbyKvo3tA7RGoFpLnZtV6WVMRAHGkwZfUSTfynahkHttojN7i7UUh9T2pAKZ2Vo8qjGVnFkjwMgBV8LNU3gL",
  "key25": "dsqWmz1FFrxQ97Nib1hzhgDrnudA5rWVDJ3MnZGjDb4sfLAn9BjaJQu9gxcbnxrf1i8pjNSad5UGRghRtuTxmeV",
  "key26": "2DxXAxicWBk8PCEfAB4EtXFn8pqETtV8p1GqvWpjRqoWgD8LXevafNT5MDfq7jES2QrBNbkJc2252nEV7Pw9skZs",
  "key27": "3P3BvVaYQp2MgPkFVKxaMtGeCLvWuUg5b1YZyUJBuEqsQqBSoySrCdxk441bcir4pQU6Y2AWvqaSNXYzkBsAJnJr",
  "key28": "2uNR5KR3xaYcfDGjCiZZgxGmC6WSSi49RzqYeJKHXNPAPXekcKrgWTcikWRM7hNNe1cTdnwEQuLTUaQ1FDsPF6zD",
  "key29": "5BeKmEfMfJ5SuqzxBZQpUT9EN9iHswjST8s5BcH4QWEeqcRve2LEW3tYt8xVd9bPPFn5FkeFBRxQ9HZ36Ac4vv9Q",
  "key30": "5rBWgmXcLWLoH6q6LLH59SLLD2h4TFp2NSC6HEiYe2axga8wgpnUysyMSyFoqvTZe3osfy6Nz3So7Nfyvs6kvgs3",
  "key31": "3hhTqdgwWytBhNoYbiiQFFQthrceaR2smLncnAiHHtfoLjfiGLKrXveP16wfUdCt41bcoWpkGpEBahp6LEJ8sjp5",
  "key32": "3wYrXHqvs2fpEn11zR494RcKP8ve36zEWLPQqVwddsFayDYztN6MhsPSsyx3J42pKzfUNJj64zXcPXP9uueDwEGf",
  "key33": "4oRpANnv9wYQoRrmkNgBgk2sARto9CA6MKdx83EaksufRJRN6b9CQbaYpNr9X6HBd6GJGdpPuAshAEkvXnySxi1v",
  "key34": "2PZ9ywXbiRJ9VwbwbfwBoUcEL7HXduUknVzaLrSUMNMF8UAniXRVXYknJU48ZoU1orvM1aHMZ4gWL6SXRWMyhPft",
  "key35": "4sKdpfGbo2tqTT4XhgZoEBhC8T2ZLjaspyqRDKpE1JvX9MDSLJQSgfxxL27HHUuEUBD8HCrS69zErVBxUapVvVR",
  "key36": "WatTrTR21jWrmCiemGnmssGSmzedXjMe8z6EEwXc2W6tu4xTuV3mqv1AEvb99YuM8XMVzVzgV3F714CmyjsKmJE",
  "key37": "4redvb5B7aChzZ6krKZpMwSZ3Mv8WQrjk8YLNMH4ELZUN821aZC5GfFisUDvf9kr9V5EDAdkcqJ6WuARzGkkjVPZ",
  "key38": "4dQKvdm3hti88dLTzT27ijqdRgRLAa7rRJuvtzdZNirJs6uoBri6ZYnSpfNePrSCrvz619154mTUwEPVh9K7bqsz",
  "key39": "3sYhyaENgEQNWAsuU34adCq3pgvgHtsSiQ1jmXcJcJ3GjPKm9Sjgkq3UFFkFH7Y65pMysYKzV1P2iTJy9NSd37sr",
  "key40": "38x8wLyJojQp1PAk53DzA2bwNWryx7SQhAd3RpgQXiaWdkva1cqstfFNqfNKouLJdxyHtZ5F7cY74rbEbXzW828x",
  "key41": "2MVnatBBai5FF1N1SoupXqWiYqAbNvf4JJrQ29Dgxu7t8zeKPPeytwLZJzBGGEZv3Et8K7woH4YkTiLd9Z9nHWaA",
  "key42": "UvTKmaQ6C4BxMCNwhiHmhEUmKtVnGk6KQg48qdqb8pLZgK1dhgacSiQBsuAxieZWuuFS2rtu3QGBAgC2KfpCCeA",
  "key43": "398toDyQPoXx8oPzKBcttc61Mh5YLpLG2YHww8AGjj5Jh1itRoeioY7XAsEjBZUaQTE93sJpRH7xG2swWEbEQ9c9",
  "key44": "22WLj3CSn3M5GPvv7FP3me3uPEh5QoASV8WVS4JYdiWrinFdTepFmqm19SYBnNU1D2LLDH5doBdFzs6PUcKU3Ko7"
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
