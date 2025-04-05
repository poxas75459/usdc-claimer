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
    "ZS3EuSWTMbtFgBbuZLjXdW3dbPJW7go6pyWb9g628eu6ePPcQwUB19EowPFfnPAPTguvutW5hR3NkLLUhu9VKvG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j6uws7JszKCUZDzYKCavnd4RKHWu9LEhrobt746invyzagbohGGy1Mbta43Ljgcovfmvts6wRYPL2Kiz8AZBv8b",
  "key1": "4debxVXTiVWPqaCbr9jSm289zaK93Ybtjkn5y7z3W9BB9faeFoABfQyMt9uemMRDJQAXgNASzvk7hGtfsQUwrcNb",
  "key2": "UFdMUy6KRACid6y5iyDxkcWRwJexfagkmz7BWFzmnummfZJMqmiZxyJMVHYTd6JRymKfHwCp4o3sJC6T5nhdD41",
  "key3": "43uWhfPLTNYnviMtWRSHs3914AHBaA6YGybsbrWspTHk7BJheRpUeGu7J7rGMVSaYf2VNdibuQH7QVuRasY45JEy",
  "key4": "anqE1tyBTotsnFhNFguNr8WvjhXBy2FyLJZHaaTtDstWYdqYCN1WXmAuFghYgMuKAorLfacs4pAFCw3DaB5vgsF",
  "key5": "26mN3C8ZECiiynPBNyhwjxgzxWXB23rHDoSn2X5cVtGPHnaMjtYPd9CeWduY45kFJ6s1KZTd7p8vj3dYVN4ktXi7",
  "key6": "4T9oBqumt52THrpUew5swNfFFrV3LVvx33s37f6dnvUtfbW4iY3qGLd1SoY7vafEk7HLX8mtK7raSJ2ddfyAHLT4",
  "key7": "2PtDJ5bHmHcW54UEQt7YdPZhd7h6wnmuHCzd859zZX8nLvoB6mbKMGG5eKsdZSh36BBmk4eMBPcXGNenHE4HvxuR",
  "key8": "3Tf4EeSeBTwBeVHMbmXVoocAYZWQU8VEQfg9qAjXcTyGVXseZ2SGB8hCENabuZba9dkM4AoiwdoAvEX14xP1S5vU",
  "key9": "5MaZXwdFo5a6M6ZDwdJg3M2ZFfDxm46puoKNh37mu5hr4Wc7hpLwHAFb5ctCZgy6S3ehc9okWfPXu3xTJeaqNe63",
  "key10": "62MKu8aFbqZDxBY6N3d9cnw8RaRezMU1CFURvctg7Xxp1xaG74nMhEqrLmXNG8h7yChCkWF4jvmGxYSGXjLSz7fj",
  "key11": "3533G4PkA2dRAmx1BMGwN9e73odBExWBPeXx7gioieWakjNdQTXqa6NTfVJVAc8MKjaPBxzk7MxMxPTEQiQ6hGna",
  "key12": "mFJJoGHb3QyqY2C7cvKHPXoaCRF97ecJsMxu3nxBqXoHHqANxTa8PhKVw6dHNsNwWWuNDZvPXqSHoqRAmxqdy59",
  "key13": "3gydwzmQzvp8SN3GRoEgkvgDPEbghma8FADKE6N3srkZQpQCW1B5nAucxsBgy5pFH2ELfLKU94PpGVU4LGW4CheM",
  "key14": "34n5Dt6hf9K5nnV7ChVmSLbHsyYYEXuGmhXQ85SpPw5VjHQrKxAYhA7Bqe7UCbBvv57Sp8erUXXAbUfas4oH2JFc",
  "key15": "3q4jx947v14xFRjLVGVk8vqN617PUEiCUrc5iSRkngCck9SbMD1AG7jsJgLfQozXfmVxw6xGgYtHQfQE3ApZZ5vc",
  "key16": "2bxGcQkETcjMt6yeEsz4JtjLS13fNm31rN59bUaXUfkaegerZaRhaN9JWGTmki1WDsPq5WWKgBJy48gJqD7MSb8V",
  "key17": "4EzUC6BrVyBhU4ZEEqVbKLLiYXXtWHaRAtyVjL3WPBMx2ZWqrqdARFBun987QA7fK6P9UJDSkEUjPoGhqPbyAdaG",
  "key18": "5N7XrtiBUM3Erw5GWnve6xsRzcDCVBmnLqCh66SvBK82SZWWDGsimWVnjqU9h3gUcRbagdR1de2XkcBnbJfKugxd",
  "key19": "5bYhY88yfiDZkjxZwKKamhyrbVfM9FxVEekviP3N1ey4pTkswP66K91TvTGfJk9hi9th2WK45K4ubwCUV3828dhX",
  "key20": "5AvTUqRBZqbJJ78Kphu1DRUS1cgxXHYHn8A7DN9qmMGoAnQCZnnYDaY23tAYdwYLQF5MayKNXijmoc1z9uy3zu78",
  "key21": "3wBhuZ8f1wutuVqaXPSxssG7bpZmJkm3zS1Lc55yAwJNnPmgCdswoSQccZodVccrJZKMa1J4GrZCZRNwxMYzjNgT",
  "key22": "LtH1LYdmZPK1qNREgKaAa5D186aoNauLyMVXmhQuwQP4Rst3JNCVbKEmsVDG9HgYhQYjqQrmxeCnzNAsqQUr4nA",
  "key23": "2amC2KTRVamqQbxMdYx6WQz8HECaSa8SpEnJKQPfZMGNYnWUCbcqMwhek86hjK5yecS3HJqMeYz4vJEKsK2jZCG3",
  "key24": "3zcdmqq1R6jevgAYLd6r4EFBXXST3yGPjimeoGi37ygDYLK3TBoecZ6bbJPnSuw4ngCko3cMP6SAdNfYdpiGUXLa",
  "key25": "4fwwjwQdshHTzi2PotvK1C8kPQJ3x3riBr3oB3RU6YTEU3uDkV2R4Q7RB8z5B8cZRForkMjStSF5CrSqC8wbF4xL",
  "key26": "3DhSQ6QWBCuGJWnrmDhwhHYh9w6EhNiYqxnRyVVcmiUc5miunBo9VNjESUrJwQsyf85MxKkjMUkh1nAPh4n1VEv1",
  "key27": "4vxzgdZA1YbURdNQqQpvhMcujApDJ7vufGHVFRahGyRLPF11pEBhuJcqAbmcFTCqEPwmj7GF8zgWEPAhHT52V87B",
  "key28": "4ymxT3qfbeJkpFXTAsoRbRr5vmbU6xMWajPpJ8hdABnoNC4FCKpo73XzDm1JQynB7sbG3YLcFsrF5Mv42Rx5TxDG",
  "key29": "5arSUtYUbLDiTyvDKVZ5zJnvR4wGAZVgtWSG4fJqQmbH3hFTLm1Mkhru1twDyF6HEchxU1V34d5dmvAxP6pAKLKM",
  "key30": "LyjxUy9t1sjDPWFF8RQezobGV6E8wQjPbSwfAkFXhchfUkxFASkb5giyv3168wAEYFj8FtvLLDMM5n2pvqPU4p3",
  "key31": "2YUyzQHgBkJLbuc14xb6JJJcDsyKuSpusV821vyriF35WcUTTaH6yMqRh4sVhF7ARG2f4jL5wWg2dAv23sNUaVD4",
  "key32": "4acYtKW5H1qQ2uBtmentFjXi6wi5ucxiHBwfEpCqgs5soUhAQ7voNXxQY4BZQCqotVBNA6AChapkAqhVsxFXZQFA",
  "key33": "WBviZu37hTiiZWXG4XUjWg8rPBPPTvmPxF3YupCkyeF1Kgyhq8SgTQz6G8AgDuf1fCcX5imHfU3VhmLF7ADJnVe",
  "key34": "Gtre35vXAwNa7gbf1WwzfVTHjqtaqwfBqXZqf1vzZeXiDXxPw3KT2SGUp5aKMMPRz1BB3XcDGtRDnfVUE1SMPTu",
  "key35": "ZdvPmCTEJm9b5YALGeTikk2h4hwTF7UqG73WYGVfE6hHCFPFUca8wtKkQe47qfAWppUd6YvBgBdiHeua2kZPtt6"
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
