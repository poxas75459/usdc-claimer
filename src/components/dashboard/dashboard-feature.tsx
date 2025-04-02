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
    "3CqN7t5FirLv1yEP6WMAFcTxRXNMdAf6w8jGpq3etXP2hTfTCYaQqWh2saZMEjdWe5wS7C53869kKP4Wv6CxqFYB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UF9h2QGhtneXpcoEsrWrFyrbLjDFoT81YfjU2pmBpJRfWwpKA4nEue7ssnA6nZXwi4JEh3QSQLVWbEgGoK1CiEf",
  "key1": "5t3aoDup4NWd89AWdZx3ykt5tCWyq3KA5BfjTghopVT3Nhs6jJfypQzZ8gqyLia3P8LpEPHtLB6ta957BTk5qNWA",
  "key2": "3tBeqRcnYvbfQr1bJ6uzCnB3vT2mfGuBkQkDmJRmT1WevHgbxpQLVosnJm5H4JiXBVFWN12UTSk5qNhHqDdQt4fd",
  "key3": "48ifK8EDds6EtydBqMY8n85nNivbHsg95aDKPaDxGyHDNo8ybKUsidg89MCHYYNTs5kgMrFwFMTrW3XC4tFbs7c7",
  "key4": "2fFVwMG4mBSEoypfeNcAZwToUVNrob7B5ampZRnCxPs134ZE3WB1y3VK4cNHtPHhETZrEcwTBDiNix6tj4KcnRyD",
  "key5": "t7j3sAcjyt9YkTf8EDYhvpfDNfQTJSzYj2hU2sfHVGPHGcQHjyKfzQ6A7ekEMKzrMEW9ccF65JnftWHWFsAJqRG",
  "key6": "hiap9BjibJVpoVFqAjwhNyZ15hkXugGWt2vgV1qsNZHvPdXHTApgzzMfWcopYyzdY2Fi1ptQM72JvPEknwRYWzG",
  "key7": "3BDo97sFDT9vRcCUAdzbZxjEfNguMTpL8dJ4m8kDw6ygDkoSB8MgisyqbnEEXv8fvg5C3jZPeZ4kQET1cTHkqtSp",
  "key8": "5wSiYd8YTeeZ8zhDu832aHaCkNsjR2JubEeievUX8i8W2J7eH3HWzUvn3uXib416uVBQV8rH8KnhpJo7YqfyiAKP",
  "key9": "5w4g4ex5htb1P6pfm8cf54MZYbX13btFU972U4FFQHJMTKKcTnCB1jVCwDPbKi1wnGtE8DWJpJEMxmrwY8dVGnKp",
  "key10": "7dnrvDAWSNWB5Mh3T3WoaDUe7rLJvWmx354315iy7c8gSakRDAS8PhE8Wfad8DYjknj9rqMrSwQu8uUy3vdKeSy",
  "key11": "4oZcZ7uwn1Tv8zszdoCVEkd2GdAiSbRonXQZjwBmDRfRcsAALxvJESUZbVsYoWvNnn2x8Q5yKDLUAwj2dEVgFrN8",
  "key12": "5DoQGCLeTWjX8XqvYeZZ7RL7Jj982QjdWi1ANqhFquYJjyuMmvQYttvx1E7ybowvwgf1aFEY9bShqJ5d1bmxjrQ3",
  "key13": "233LGfzFdqN5YA1Jf1TDV5nRLRoot9puSpnWrUU5F1XWbye54CHHejp3TR8hNWm2RFBjnKVn7fvroJ1JjfZBzsDA",
  "key14": "UpAnQP53DgnpkNCAAh4gVfLUm1oorn1vKiBVE3dRyMFCfhEfc7ZyVtjDhED66eGTb9NwEHHzYQK9A4mQ8U8oFbA",
  "key15": "3YZVfD3QTX6puRzBrYDcxQQd8Nfqey1B6zeRojEqTn1SL1nZMXviCNvGgW14QQyVXkuhhpSn14QmSjoL1fHXZTLz",
  "key16": "ELoYovgeSMZXByNuemQ7W65tLUMHYFd51a96dcTLjChz2xYhBeDAZCqmTzPXqK31dj1WxwnfyvtzWsKJiesESLj",
  "key17": "38pZKbKfJgVXLCDUuPLB2FwQhp8QhZho5dhZ78fgwHSfwH3zK5L3CxXCrXEqV3nG7buWpumwJBufgqrFAFmVGFMc",
  "key18": "5WEBsMkLFbAAT6HyTKUkCwPo6QwoPNxRsp1KNVYkiBJ8LB111s2n1A7AwGXDMVspHXL7g83DSmCCYwRm9XEqKYJf",
  "key19": "4HVgQ2NA5fsLdbmsjGMUr3N2cRDAmHSDs4jkps4XjpD8YuEbP1j9xMwaxkESfTkCaadhhu3s4VHqyeBTRozsSayK",
  "key20": "4Z48aNrx2CjpastrnSpcZG2xoE54F8ZADE7si6BeoAXqbrNR7MsboCJyL9mUjCxXFBE3jPLsfMwp5UAsu4vakPB3",
  "key21": "2DLzcf91EMf6YVzx682o5RkKEMCuP7ww41ZshxnT8mLmxPGUAerveYCwWBHccygwAdiKA1ssaa41cNvEVLrjEhun",
  "key22": "5MRFVjDQJTxUEaCVMaiN7UCsXA4RYGaj1yAdR9aBaUKNYSuYrNjK1Wjqo1P9qAz6sXV9v4n8rgWXw3KffiyB6bza",
  "key23": "3DnzFd57aJFzrGKMpszotJf5w7mJZuWtrpPxJ32WetT5tzk4jZJHXJzvGkXJBNvrgTfp9q1tF21mwN21y2tJAbpM",
  "key24": "4xaL8ubdgjEKNCyo3krBqsQEnrgosofn14MkDkupdAYaXEKgapVJnq5U23zoriPC586xPeKYXbSFAa7ofEAFD3U7",
  "key25": "2xkDgzvELdFiF1T2pXxm1NqCNNvYcD29VFekefZENFrJV3BWUQK27RrGYFFwQpeG4BgRLghBMjruR2kS4wf1n2mw",
  "key26": "5vGbAWGbjAnimo9iEM1uUfz8Hevx7Ap9ZQyCAjTnhTPAghGYmZ5VgRsxv3iPqiSFDEp8NBRVJUkgMAGCxWWWqYbn",
  "key27": "4xfR14kP615P8Ygkxpm6H1szs5i16drJGrq5BMrXGh2nrH2Pcyd8B5o2GvgpwWD3oXSt73gWBgpJ8kiwhEpfHRXF",
  "key28": "3tP3PxsTCkkr3QPQRN7GZi8yWHVUgJT2Q9KLABpdPeyafNivBS22oya5EUQYKsbYmwdcf9DVr6JkKruy2WzS2n28",
  "key29": "XV2KKCeEdHJQE2BGRnNtBRNKLQVo8Zp2fKCEAP7GvRfaqA45mxZayGrVQjPk8WVCwsNKLhJGPjKmHVXvyRNvf8G",
  "key30": "wgn9UeQDxR6gq6MQf5CbP3U9hwcFbUvY4Eb9rG9rvnfZmog6i2jEZYdRtg5U44AA8L2EnjTRe2CPC6Sy3mjw2jH",
  "key31": "4TRCVz59FipcqjrkwP1jqRxdMS5x2CFUrrgBitCrXTVAPVMNS3NQui17xkHRBbY5kxfx4Kqwik2i8iHuibhv36WF",
  "key32": "61o7zdfvEpUZMRVGLr6ceTSCtLzfbQZc7oDRAwFJrXHsbw2CUVR59DR7k5fFqTypEzH1xZYKW8Mbv6Ump1DZBbKz",
  "key33": "4DTtbbKtwzWb8nCt6HvqkcGmaEg9FYLcXxZyHYwfDhQkf6b1nbbm2ouvxk33NT6UEtJc7q6rnAQXfoSSYELgQRMY",
  "key34": "Usfosey8C3bEj3jVFBi8HsGRU8z7yNQnCiho85CYBwc2oirA3Vseo54v63FpdveakKaeSir7Fftnq9rBTKRg38e",
  "key35": "4oDgxXj9gVgi2pmCr3sEUMwsBKkRxftyhGnSMCnqGTiCAEi7NuWzno1Zjwj34b17BvFgU4a6LdEkZjfmzQeBNx7R",
  "key36": "3ddSuMKvai9kWABXnvAKFkpQL4qWfWUVZuBTQrMW8hLAkc3Ay1RxGkLYW7UXyXYUoWzDS5razRqb1NHnVYkrPgoT",
  "key37": "5uXDoNCiZ6MWW34sxTacN1cbDMomJCzkg7Ff6KTGJaCmBd9EUdQiMTKryk2bwF2XQoBh9Mrp1jH771rHyTp4Hquy",
  "key38": "3RQDNiEbroTCxfvkR2bHMBT17yrJ6Gz2hpFvv27sNcouZzZvgRWQENK6p6MuDGvdSt3jZ1WZkNHuFVH3z56jp46v",
  "key39": "2NwJCXbXWhyV3ngotXrSKSEwbnTjWbjcmP41NnWuSUEWtztumcJ5THg94LMqWPvJebLMn8DnzZPZzGVeAsTy7m4N",
  "key40": "4Tnef7TiUHMriASagFPcYY4BjPxDNHMW1zLffLnfZJT4Rjae4TR5e2nGLAEHeb4Psrvwm9An8BbUyw6BGkSp5Dti",
  "key41": "22W7BhKkgktYzb5ZpVgo7uiYqDj5zw363cQkc2RzNQXjaidNPEaPqQcZxmQmPvSNWR2iND7bS4i8Qev9iVKvv3Lm"
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
