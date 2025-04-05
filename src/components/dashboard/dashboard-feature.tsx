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
    "4u52ojHxeY7JCMPw9PMbEDKPKyECcNoM9baNGBLHsmHkTJE4E1WXuCCyjjpDNKVYdWFwYXqsP4ELVnZz9SBW1ZdV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R7mRZEYBjmVF2SfMb2RePtx1GDXra9z8saNQEHs4QDz73fiHxWS4vd7U4LzDt8RbUwJ2ZUXLXYP8SCheDJrMAF4",
  "key1": "3HXxJCLXY5ofWgoGTNYxJLusiAxP5b5C4EUnJyzbJdGH9nTcbisssa2DWR4Q2ytsciitv3RixHVyh44Mr8UvVExw",
  "key2": "2vMivLmLyFjucpTVv3PMKPh5mm8QWkKdg2N5GpnPE2KHxvHqRDDPALPmbGzRWQkqauptUjDDy7keBpzk7gMEZRAX",
  "key3": "2ww9W8S84rrUBjCTmDSBysLveib1guHvKyR5DLvzNrn1StzcYWnYSVGQK9oMWPGwsQxVMG3LVYX5sXppcRLYWeMJ",
  "key4": "4fQfnvq6p1m1gEnkMfZ7a1sabJPzPnVX8L48kpajkj1mWb5cRYqTUK1oedNd4AjRsiAq41wWc7ESX53dzTAnYzcq",
  "key5": "2oqFwDkqTk8PEN8fCViVUnvXb3YZrbWgne71gWsSCKDcM7Dp4NLXzXFNsZvQBz4DN82rNwm6eDZX1sCs2e1SStVX",
  "key6": "3KUfRcs84gJWmCZr7syV98T2rny3xkCaEwtpkSKQ5AtcgZDktedeC12gMdeH6hVQFMMBEFxZKQC5efXYvwRivwgg",
  "key7": "3xPNcmjHpDbd4XrxGzpMci2AVVPurGV8bkxHva6ykK3tAKc1xJDQZokQuSA2hkhcfi7axSgmrTokaCr97hLWRnJP",
  "key8": "36pxjD2EhbXCXNKiWRdYrQEizvh9PER99BSdjEAjwgxC2jMcyRShAgErmPV2f5duH9wwwE5Rd77UWJhgE4N5s63J",
  "key9": "5GXNWkcWWW6YAvSr1UGZdXYptnunxGMnJUm91VeuzNwDHF9xm82q4VzCCNoLjMhAhSaNdGr6PtkvEZTh1KGF2Dib",
  "key10": "5ZCgwXFo1poZPmBk5PQAN4ZzUwTEK24YLoTTBG3zrdnnXEmMtNkhqRTBJDGCKXU3Rtuk3k691hW5CjPo47xknQyF",
  "key11": "26b6waTJNgG8V8GsGZCuBQ18BKhxq1DFWEQbrEkecEW5K1xxZmsZSd35TQXifue8VEEtBtNGXm3ny9GxZafgM6Eo",
  "key12": "JbHzuagCEUnVMQPyoFE9RLERiuchSXRPpbFqd7tsA2CqfKi5A1DrUr5cSyp5c23jrFcNertbh4JPvxGAPi4wbAr",
  "key13": "4WTeytwcubtZcUzWGVttci6jW1RSLGetMBsxgYUkWRzWZ6WS3pfifMFXRvzwfhht4W8ynhPqDhSpSEPYkvrwD33g",
  "key14": "RyEE9YoCiG5VQ4fN1r9yYe8duS9kkfNdTtjBjSaaiViz16Ve21g1Hv6RDY9VGzh8ueRGYgPX5fiLVAh8Hokrt38",
  "key15": "4bECByqkyRzoZ653Mdg75aD4H9MftjSDRyGaZUFyh88eBs9ifTfkwW32zBLJFn5h5Pn2S4syVhVat1HGVqqjRuBt",
  "key16": "2DsDjJE5r5tmvbAFStDSMrWRcruTDd37Rrd9eCW5AXiM7XrChh15TjWqD5eGyB9qgqXQtnb66tVp1rB4FcwLcwfT",
  "key17": "2Y7aJTqQqjwDFBCAHYrriXHPtymoEnXmDdoHapdfp9ZtHBpBpAyKZp14qdUR58AN6ewqPHzLY5Xx8te7c8rNKP5s",
  "key18": "5PYYB1dZM3yStQKjCBFGpgSZR5VRL7jYZCai2uywxHY59om3SCNPj6nN7ciyiRgziB3tFy4rZDNVWTFTRxZCnd5A",
  "key19": "69JV7v5vUbrNhDsXgXBe8t3hynfj9cUcVdxZJQmpesNsh95WxrwJrgtSxSQi83UZNVDEgm3bfWtcbpcuh6KJCfw",
  "key20": "2peyrzX58mCxeUV9DTXL6KJpRQvw5Xfn5FnEqmNEYt7cH9bewkCn62rjUWFunbVesPXs24A8ez9T6J5vmfqzv4Qd",
  "key21": "5s1DomNPi78gmqmsfnEDftCKcZezi1o7uhnbygpB9uENoo8GotDC7FhXh6ty7ebL6NsFke3RXu2dX9jURyophar4",
  "key22": "5V58QPUZKbf7rnSWEGFQAMrHjeQ9kn4uTx7afzidXRfVJuVZ3i8s78q1wgFSgVZS5nabHifbhMCCnzTWAcDSQHXK",
  "key23": "rpf87nFRoUrdDTcRjoCzEG9Cv2tgeRXe1tUyx9an2NRWTU9pcwdK6BXfRTnVTVVLVFHaRWf4RfSCBh57B7FD2BY",
  "key24": "5FuFBHKWQ8HW1Z1jjG17QNhEyir2yNjynxipuSjiw5ccFkHWpQ8zkqBARDJsJLYhWaKuryoBcxsN4C4RLefg3Ufe",
  "key25": "5SEtaFRtMGK4fbVHScAXkc8bQ4gjPrrXZvtto9Ax3DX9t6jJBRxNpN5qX1i8eUAKKWuyLNFyxXmmZzFEB4LhLpgn",
  "key26": "4sqy73QDkotWBaPh2sHd2nJUZoDwoPdSHYFVqwAg72fej7CqYpuXrZFRPoVBfXVP2A2sBRFqvos2pgw6m9v18812",
  "key27": "35RaWHkqJ9vnxG1PAgfKBagZcVAgcmeLbeD8vKc8iQWj4gpduJ1WYxKwAQSSM2C8hQMa6Th92vJ8UPUTYyGEveob",
  "key28": "37KyD4susaHxWJ4Sc8tkt4mmQe89Yinic5oXiTQTe7YeTPkhQYy1fRGomHNpnhbmyEnm2CWAdtPbD5rMV5W9hRcS",
  "key29": "Bf1aMRjYqwPmBGNF2kQpmApFxYDH3T2z4k3Nn9MPhNhuFkHBFP8NjUdW23Sr7te94PVbUHHnxLGubjPQRtqJQaA",
  "key30": "5QNHhtghM6LJnXG43n5K82Xi5mDkArSrxfvkoZvC8GmFh36cnFePZavFszBsDbTt2biNXiVgwLVXjJcNLYnjhFNT",
  "key31": "5h7uWD95hue4ir3KJMtvaQyqjL37woZG5xahJBeUnij3DNfpp2rZiw2KsNUm8yZJxe6gojjycKmWkSMrSeTMcyaa",
  "key32": "3PJUMTuPo4uuEmqRECz79rySftvuWqtGJUY7TjAjVh8oeDH25fcX8Nk18kG4WChhuXQfNeDB2yFCHctiZHWXhuMo",
  "key33": "1DLBbE9PUEuAzUjP73jXtimmyW9s2QSCbYKa5cG5YLxeieeryuJUJhqQMCvKTPDyMDAQ2Z3V7PKgRnrUyentPaY",
  "key34": "2m7xDV9pVUWeHobyXfy1yhEnMayLYPpoB5ooFHGQ6c1nEvkbSnTAWWwxtzm9Hn6RTm3BvZb6nm5K3SvskEsCt6Fv",
  "key35": "Rupdd78tU3yoXW5totKboN3GP2o3G2hsUhkBkUQxd4BABYPgKLnEyDAeeiziZjNgqLBd9Z4SDSPBninjYVMXRvy",
  "key36": "5pdZRdo71bSGZp78XkS3JLAM49HmTEdu8YCAZWJg4o31ZpcTe3mHWF8cDzjAjypSVLnoUureKuM4Qqb2djzdf4ep",
  "key37": "3hJ5ENBaDuLeZLZYwnh979k3WnUFbb26MiybZveWvMgURLY7aK4seZSt7JKxtKAV3awzYP5NiH4g8nwA88EaU37B",
  "key38": "34X4EBjg4SX5pAXfZyu7cdKLWdXgALRTofmyag2yEhWPt38BijwujWpZUMk7reXxcZf7Cm8tTDde5VjhZ34j7Caf",
  "key39": "4vDDXWZdLt161SKCNZAaoZuH64irpzEq4c56oH7gd2mxfH58V2pKkNMWECYCxTWG2tNcL5dFECguffaTbnLqQSpF",
  "key40": "3y6Gq555p3H9nBbZVGr1EArVu2XqhmpfTncLEvCPSsBqh8m9QuPvkqSYz7hQaNj11gfVSpjzKPii5iVgjYZhMJph",
  "key41": "3LUEo5KBfAi3MkxgY7STpKHFciSVnRinnWpzvDWsPXzmNyt49D85ZKyHRnJUW3MVQ9FUpg427q2W1KnYsEVeLc9q",
  "key42": "QDVFqA8scSRSZECP2xfq1XkSXGEJzwnCDgaW8BpVWagz8EtDDvx45omFBXzDG34ScvGPbcJj7WVmvwWxZXQuPrR",
  "key43": "5B1DBx3XJHd5JHoJjYMkN9KNs49qLuXL8wEkiV5xfbiDTEMGRDuns5T9ax79c58Fyc3CEKADJrHXPmnuTq5qGztL",
  "key44": "2oNk2z8DWygXo9GkCxSHdCKrbRZmUmtXGteGA3cR59Zbxa14WgsSehDiUwVBJWeT5UTuiYza91NkDBQ9ouMzekgx",
  "key45": "2NPJPAYjaSJ5kTx9ExJZwBPfiWn7BMkFnXht7ouvvmztSN2VKgFyAqw9efV145LfDLetcpmTZb3hMA15Wu2r6epg",
  "key46": "42MtV6ug48B8GdYDNH1cV9SYR4eEiB1ajU6pAc8irELCPGxsu291XFMH2yPywoWRajtW9G5gB371tVUXc39PEL1A",
  "key47": "4w3nUwY9dBnRarufTkH6YAuekhGLK3G8NTqZ2QZboMYkoRbthefdmuPrw2STuK2q6JABody8TPnPakNSDPLjKAT7"
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
