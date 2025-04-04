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
    "mMm8yjeR3joiDAMpJfhRqhunbB22AN4oCunsguVLsH5WQ3veVj4BRdJoXe5kq4Uq2WSY8fURLaiavwsdGC8bccY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3APM9Rz6ck8jkqBak9qTAYsw1jXmkPVvXocCAtj7hRP8sHSyyZpPibrdDhPuJ7SPo54W7MFCxML9ScmUVR1C4G1u",
  "key1": "2JUmmavxfbbvwGYPj7QtuWsuZ8vVM9SAuRwQnHqN9tuxr4imhAwnM39irRuevQVNAhk23T1xre3Z9QyGLBhdxAds",
  "key2": "5cB1Z3d2RLUueQmeBp9d7mgdZH1BqKht4r9vPJkXMy1xHPmnD9n8Cskv3LnEpnw9mzCCVG8BLJ7Ukp9GBxxVbeBv",
  "key3": "4eTuGJMXkU7CZFZKssAN6nc2v3DQxBwRGALqhvQm9LgyzJ2QxfbJKFe7nNgAupaucHrC2ttrDyn49AMjCtYH7cK5",
  "key4": "34p39rDP3iDQ3pErdkS6goJvJSZRNx5aJQoK4bVckxSTny25Hj1cd3AmhSFM4sWTbQjpTXMXF2Ua4DUCQjwVCEUW",
  "key5": "3wZYWFibXKyA2rRKmAMSKsEMFNTAqtWqZQY2MjXx1jknGWPiJhxnJLV5GJVJKx5PmGeMHwwq42ZcXgTmEW3CaUgJ",
  "key6": "BKC12baKR8dnN62Xpko9NMjMMJWRDjEm5THqW9GoGAK4ys6bryQGiGu8xEpHEWuGinqw9CihjE2J37ePCSXMqgh",
  "key7": "4AksZNCD3WPDkrtnESLdHmAQKfcZp9w5NvYDrkAbEUVp8dpnpHd316Pn4yS9UYWvJ3GCDoCS8rKzYheUt2iisJCz",
  "key8": "35FQLVPs2hUwa8zCKbXX1LBwcVVExuKAieq6p6CCWWrCfSh4PwABRnuseDB4LGodTDVyNT1ijXEUTsiTwbSypo3F",
  "key9": "2E4pF8TdEwcGroY7mQY1VMiYXSeHqdSbgcoMv6dvdRZDNDRu5p2jgoUwHa16LBvYRznV7VsaQtiQ7kJZeWGCGT4Y",
  "key10": "2CZy3RvwqMKXhX8Qf6uHjReZKtLg8wLne4soFzfmys388KTm5NmxMAHuQSrdCSpeWM99uYdUZxKC2JgXoAj53WVv",
  "key11": "5n2MWBRopXEnJHBpKQfonX3BJkLs1bCpGLyCu4wiUcJUL4iDEWbSMC89tLSngfJFNhS1gyeWffYu2wefu4SQMRmj",
  "key12": "wRyuVKRCadbsA4UpHXCtCKbJNY4nmfUVPntvqSQpAgiEWAZN983vFoHopGBr7GPDTjKbbkLCmvu29JUhYkwgcQ1",
  "key13": "4C5WWpeWr1ZavNmB2fnyXyA6Vr1E48B8uSneKGS7SqMaBus2zZM5H8XTtfZbocwMqNm67C1UHMw3LGmcd3RBx85Y",
  "key14": "5YPAM4A4S5MW8DD5iSzKMnvBVY4jXrcT1PtSXCsPmVkvXvpYeQZjUEj33xUi6LGrfmvt7D6CfNcnMKfHBs8XN4mN",
  "key15": "4mS4DAQDytGunuaV4sEGJMtiNu8R6huCdhMf6SrY6cr7pWVTXC9HpjCU6fLpLEzZPwbjuEL9wqyKuMANbM5RDLRv",
  "key16": "5X2d3NLA3SZ3SXjPcaqT63hKQpVhBeenB9itdKEBRC9eYvXwA1zt6pDoFyXCzHuWHuoNWo9kkKXXWZKovWQFHjLG",
  "key17": "2mS5Ehuedx8BXPfxsQBGdS1Crer2Kf7SvAhWWFB7asfBhUh9436SQ4fuy5dim5TuUN9XMTMaLvuj2zcrKVMhJRhS",
  "key18": "3ctyBzoMo4UL56VAbvrYFPSAmuXxx4GjerQsRjWpPdQm8dtXAvhgKtB4Wv3FdCWcWNCcNnBxXHDDygzU6EHgcQry",
  "key19": "5LKsk3kp5BNefEnsf7BAFjpKt8WzgYXtQTdwobELNhvT8wGLTeQMkafQoFuJrHDJP3h3zmqrCageAK8ruiNv2aNH",
  "key20": "36ES5Qm3abjUKFi2kQEuNKsrFQUsHyyGwENEpft9WDtZbXq9QXVSgZJAoJ75hFqUJC3bipoHyb7Wj5BFZuivUcER",
  "key21": "BUT6Eg33c9WJKWZqGokusq2xy8Nd6dPrxLXeBqqTUd9YPxQnimcJan7o8XY3xbdUUPJuSWiFYsVLLN9kmLu7Sm9",
  "key22": "2JV8wMXLcyogapS8qTcmiS8wpBqTFYo1c2UJe8bZpvdHkKBDMoQ2mochgk8iByJ7VCSqm8My9oLUKmfeWGsguLjb",
  "key23": "2pfiwVbGY9ZtzxS5g5L6aMZmrzA1ZVpTjDoad2WBbAmRt1or2maoLWeivMHzb4DPeHBUBvnNb6ScotpgxfRwMbMG",
  "key24": "2wwxM2rxy2VkRA9paFVPuGdFsYVvxromnnfUsR5GXjGUDtPeYa2M7t6dYgqKfz1VrYLkMNZFLyCJkrf1YLpkMQ4x",
  "key25": "7aYHbfm6LdoPwReRqK27Pfmp7o2VDC5aLGmEUz4HGouD5aLS9u28QqcnkxVVx4GdQxQzPyUTFF3bhkZZpqV2J3k",
  "key26": "4xhv4EyAUc578YHTxE2pFWXZwSUiWX2qjGdm3FjuCXrZyZXqJwYAxk9UefiW6Cb4d2B6HRPL1KtFKdXEpCeee2uN",
  "key27": "3upBvLSsqLfN3FQcV6g3u2CRqX2VFbLTuBEG21ThBCeV5LKZ2PZwMF4qt2Cmmmn6UTkjzUDQLUsXDHemoanrjncM",
  "key28": "EgwDy7Gp1kPhGLdgKqpLmQdkqKeHdCjJ54eXqvq6cQo8LSeSK1ozXtYirxuRBiWqU1mZTKgmBYLmvDw4U4WQCiM",
  "key29": "25ZGEdMkgEDtgtqwrom7hsNvLmcA8gmRggBaWHuWwNjrujNNzn8La97FxKxrGRMi34Vx2VMNBZnQNx3CbrWAB1pV",
  "key30": "3tGb1QpnQtF9bv9nDSAt4i7R61DqMobhxpRo2inzJ1hQfKBc6svtPZrdYfxL3QsMpfQxDvsvHrjd7DLonqrHTwef",
  "key31": "5scn4yx9qH4ipXksQaK1eZryoVvrDtEmdfwPUEZJjAYfJay27uMSSNWZEMrdTeA5wgE2PsbByhoAcB3p6kQeUSkQ",
  "key32": "2YhdiNvwmsGQUabdc3g2VwPwA3ch6JF8ii9CBdQNLebXywYFiTmsNGP47LXHpwe4aE1nzLPnwb2jjZG7jgUUHjW1",
  "key33": "5KnvTF3PiU6eSZWHBjFcEAjQi4tmV9RVK8ixwxHsTvamhmMpJxLWWq5XtjLbyk4tpLiqEvafQiM82HRFtQg7ukf2",
  "key34": "3R64qGKpoDkRAqKsHDREcEeewopGcDzyj8FwYDrp5m4M7dCohztdGZY4BS6R1EVoW36w1EtDu2cd6YebvkmdA34P",
  "key35": "4UBeuQnsG14bF9oths6upoPH8UobdXY2Z5fLGMtJUqau3ajxsntxM7S7tjHWUCChiTavwKxG1pE1HQzTtZb4qQ7H",
  "key36": "3phz14AhBvCuzeQwey6tEsmm7mupyXnXBM2KXWLbhoUeNsjX9Bo7dmE2BroADYWcvcJ92YsfWVhrLce3a3ocaCgB",
  "key37": "2nMGNVZvBQHcLQTcKsWAT1JyjaBLfzJSAnfDtB1BCBD1ZLScZNqq2LCLq17xQSgomSMYmVFMBSkyiPpESwZew61A",
  "key38": "5vA9zuJYbXgkmPjeQ9dqCna4HtC9K85PUpRMUmMcnpcHJKVBLsjmCcibrAmN36T7cozj1KzDJ7VWvS3PxVpHz7Vc",
  "key39": "2PLL61jYhcdn6oH96LgofMFcXqF9JpAQmE4bGwtcmTtkqLVuAGyJ2deKnTj3epxh9918TxwkS2U8d81ioYjBDAjG",
  "key40": "2QpZ8DbXbCRiBSfS5uRnW2wMsZuZ7FvgbNCe1La8NsRNzdBHuBeMfHsWbayPqsEu5bUcYYidf3c9U3UyBmiib79f",
  "key41": "2CtufRcFMDX23aEUqYR2taaHQqGVPga8wNrYzWxypBNU1pXsywe91TchUaqKA6HiDL2fRzWXgEtuKCBCFs1uEneM",
  "key42": "4ignjBpabkqYhMjDaoWWC5SaDpsNCeaYxz1bcdEJeE2RfgBP8WS4A1uKgNAAWc2HiLrpkqNQFLMhfEJ8hNZA52fE",
  "key43": "5dnS3WNffuWpwLKFs7ybxE3fSX44LbdvtznGAjftx1ee2VDPnSiX2YRhNMR9JRRjruQzRvUciXvXFVKTQ8wkJfdz",
  "key44": "d7Q8yMTenDqCZSo92pwprF9v1YHnDUiu2ysmvAoRjmtCnvEVF7tZB3W47KNray8vxW3ojqBPu3uuYRqYuc58Au6",
  "key45": "5xds6qfdMxsHQVMVSAYYtzrnPDfLA5ymkbuzpmUJwSmvtjDSJwtDk8FvDzpNdPGQRXLxcBHHCXPQ2qtAFNSBvZDE",
  "key46": "5EfTx4Zsa3X8b9c2wge7QXjSAEuYnmuLSFwvtiMKkhiarMiT1Upg2EUMZsfRFkDgy1e5paJ27LvEewpPvxKyxrfJ",
  "key47": "58PJWNJHS1Uty88KqRJQwFDeWc1DmmSBxQEGTkUznvQ2s8B8RJTxiLsu6FyEiLUbpzZ53d6pfSRxwHu6CHxHpNxc"
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
