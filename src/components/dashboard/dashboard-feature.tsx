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
    "bMRB1kpH7VWUs4WvftALrYrKcPWhAXrQJ9LvJbQjqdeJDyiyRxnWAKke78Q3VUYCSHMjPLwtfpXaGWF5b9i9Yae"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "356fpQMzACS5DRUD2CERNmGFinUWzwxUBxGfVXxrFjiX4gXMBhF4AEwcw4oT4nJLxWXAtAxUVK5cZ51oLbuD9Z9C",
  "key1": "4KgFiY3rb9oxjwRZ4fm55ytHNR3TYPt3twdiZfBKCD8Rq296QJBzg34JCL9iGjNvqJM7SYKMQiC7kPQ2pjBmJbd6",
  "key2": "54cMYNCcHv8RYAQoNuZ6DGJzL3gxQuBTmLJxXNdJihiP1bSFctUkBdUT4ZvzrCax79jnRRjT8oaCm3dsrsHNLyxx",
  "key3": "wmTuVzHvRDhncvxUwDKg8GvdDwCUUus9gv7nwgbq6fsiPTiV5jV6hxcXY8mrKEBPTKp3Cczii7hgUmmSpee3roE",
  "key4": "43U9vNvNCknxzovtjyCmQ6BaqTc1jnTxp29dCDPiih8rv4L1yjX37kiaDrieXgwgLKRa6Ne7Bq92USB8Bkc6kYD1",
  "key5": "5hGWJqFpFbVKFLNtMxNoUJ7viicDuPvuGiRDmjjyRNTAmrtL1uiJ2x6xNVDqAjirjwJxM3MV6qAQ8pJqhRmLtd7j",
  "key6": "2zHorGiGDCPHq2TLsyKmDyoG7Cb5jrCe9qzdWPrciPKvRSBLHksav36ynhtmnhhStNbDWs3YhXkEn7sL8PTscnFu",
  "key7": "uiwcXMBSjcLAsNfMpaDb3viJ7cf6ExRmaqQ6NNVrodXwCY3pVCpUsiubreFA14ULSXf4DDisD7hc8xM8psNrWJx",
  "key8": "2uvshM4cPqBiathTsGeN695wtpE1gHvy6w3DodkRm2Chn2FEywjC3Deyd8KkcJAaxNq9sgedQAPfAzzEKegUWUKu",
  "key9": "4xucvDc54QxQM7ToPLDWF31s4RDZPsswypoTiEBEkH3fr15cnTHYZ31JNMR3t1oukVFk2idVabBSPWniY6RMjMCU",
  "key10": "3aN743W43w9SEibhLKqKBdnC6tHjHT7g7a7fCBRmHNkQJwupA4aYMmCRaKuowoSMk4yvW2kWz5sQmuG28pUaGufq",
  "key11": "34p1VMdNVzUZ6thQ5DyqikEeZWXrmtbaASfsH9mam6EN2NvFknCUEfdN2kp7T9eHuDxUSTW961SbQ6yqWyoxMtH1",
  "key12": "hQXdsqP2tRxASjMB6MGoYaNMaqszy7LB1s7L3aHLhSbPDYnyTBWKsUPmKfDM6zndp8UHUHVvEm2rz2PDeBahABa",
  "key13": "3Mka9nQBXHSM6keQWDYHA1ic2YC7aQAX4ZzJ1qq6yws6kwLUjKogsBEHHfKkyetQKJmbtNKyvHCqaPGJWcQxQCTS",
  "key14": "gA5tCwrnDFxJZiUainffHwvmSNa867rppEgzExYjxDfTghN4ote8F3axezzLWRRx9u7V7G6kDcFs9hZ2yJQFnPY",
  "key15": "vSkrggta6hqu5RYU8C2juK7Ef1qSmJVCvWynh3xN46vNzgw1vxsVc4HE6t5g2kkBdR9ZxvkpEZJMwLcE9aAmahS",
  "key16": "3REp5KPW6JebBtDSGEq2jw9pmvMYwMEkj1mVuf3r9QYhbSZzdSCLYvgZTfvDwChzLo1cA66Z8FHsbN4w2r5b72vv",
  "key17": "3eePTUSGBo1oAjpuLUSDe5J62NGYAhzBXRYqyo12ZHfHEBsLuZxjzPiSZzteAkoXPHUbsqFpko6nwoWZUBN9riCb",
  "key18": "2kNi5GYUmHjcJWStCkEo4r2x7iftBZSdvduuar8AdFCMC2D87DwntxTNFSgZpRsWTXKYbhtxk1dHcvsvvyxxr9pM",
  "key19": "49dW7bEsrxiHb5uyLAZejuYZe1YHb3gV1r4wby5MMfbagDwfsEAwLMUkfgEqrqY4E546Lbud9qpvnDQaT8XwTSNC",
  "key20": "56tvQ3fAxzZUvGpGtkXVqBk1qaEoc9LcVWYanoAab8ckSmATjR546xRsoQahkTsPnLQGUfK872U2ZcpjUQ8kYCLz",
  "key21": "3hV4miEpsn5c4GUJt6FzG3dQ7VfQHX6KqJakide8Cjb5mS2MVFV74nCL9Gxs8JVUeshc6jb253cw99Xqj6shadLe",
  "key22": "5UhLxB8zJVBM1VA4aNAf1Q9XUwPY6oRwRw2L2PgmFzbvjc9rbMp66KWdkTiCQuGp8bnqtpbgfpLekYi83cKcQHfM",
  "key23": "2cxK8EY3gxvHQDCdS96eoqv7J9Cx6xHbxoN8YSAxmMVGj3CNhFDnGjuC9WvrqK1fwzZYfV3uLZftXhzxzoQndwge",
  "key24": "cc4V6gwWgm7L9Wu6C31CqZTFQBPcEQzN97PSK3MNMSjyZKCTY2T9gLNM2CjVxB286EEVoQCmCMzWUWhaHxUQjht",
  "key25": "5kBtMugg2fjNzRz1BAP99gCpiLiqEQAcvKpoaAYfW2eFjD8vzswKdXaRFwgaAFMeHBBG1YpW5tKf9Wqo3J63jdWi",
  "key26": "5yp8peH8qBJqcPorzKnsNQUfjPFY4dpWJ9kH8ebbmvVXQJyX6NRpCnwWGpuVPQVfx7cqG1RyC6cVGMArGAgAhWuS",
  "key27": "4HPsgb4kiWgJUYbDSLdfj7whFeAccBZfM2LitT2BojraT3w1aPTGw2X6xzyBUg4dQWUkejVpDYbHQsPtwigx38kP",
  "key28": "2T1jSUe98u75oHcbptS9rGMBJSZpLzspy1VWgVVQgvyPtGxYCtKDLaFg77mvWdyRsdarp1dFdi2VNmbxukMvWDk5",
  "key29": "gdSSK2YkTSJt4EVTERa4Vv6EpuW6bcASnH8A5d4LP7uXJWK6pvCxSVVqM8oiigdv7MGDypfWc4gpipsTcfNsM7P",
  "key30": "4VRr7RtmfGiqkMtgsZfQrsCctbABzYk3rzph6keC8uetheQYGFRCJQQSfcJwDYdBciwv7hMHFPgNqgoe6igCFHMM",
  "key31": "4R6n7DyWrmZ8aHJviZMyv3W3kTinMF1foczxhAHvLcdAkVte1C9mYa28fVVrAgw3PCRzXQFBZfKRkstC9R3gVmww",
  "key32": "3DymYVsXGAvHKWibJNxnrGD6ybowSNHW76HPZf1XDsgMG5FLihNkAstMbK4kwTkTdLjRbacLvU4a3Kr5SjRuR6y1",
  "key33": "64C8fMH6UjMgUrx1Vq6PDkgW61HScFSzUyfF32LjTVDwVz3ak2EM7wDLVBZwzP5JRheoPsDEmXjYLmuirr5wYYkE",
  "key34": "3EXZV9BQVQcboRxwVgmYz3iA98ma3xPvsHyRkuCbcvsFwLAcgSC4YxjedLAbipY9hvKRu4EAkri7yU8HY5e3nmgZ",
  "key35": "4iwFvnAM8Eoj19N7ES5ir9W9b78jy4hTAyn6oUyy1R2sdrpnpfJUVUtpWV98HKemvMDym9MRksPX7BJC2qLsortL",
  "key36": "5s6EyYzbGVUUhh5kVNW494wLd3ok4F7HcvthYYUEiihC8jkk7iCZrFvj1zqQV47nSsV1kaE9iKyjkDp5pAGJvGXv"
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
