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
    "KTixXimhJd3xJGDyQd8XTMHCUeeEajnnaVpgE5SWUyobg4x5K6P7nz4YxFpbdif5FG5vBk8h1oUYvga9WxMEdMi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PUY2whHidyY2edxd1xZxMZkrzTfwqkxmjDQA2dxDBZ4L85APtCGJFEeNBPAcQWTgbN1RkLzpKr4dJ664rfdyd5x",
  "key1": "4h47G3ido2Xx4ABWMojwMre5nd2h1En6YCA8A3Mk4x4iPtJqbHF5Rg1TQCqeQqCzPdfQ9G57MDV5XDrzwE4RVhMU",
  "key2": "4CytpenGkCefoco6DfUEJFBJape5CVvQeqyiqYDwvGKaJ157grQSLzxzDCj1A4Ftx7Vx7JFNMePKZaMaWwC1kPgD",
  "key3": "4g4P4m4mq2dKvgZVaeXgRYurkTKnS1qLwMrsyFX9FKfH5RZ3ih216m9iR4EBkQNHrkjEzb7RrJfPnRBoJNTifXb5",
  "key4": "2uMH99wjRaQ7zCfPEjV9YXX9xbsHaQQvjM3QKXLkj1fNg3DFAsRnftE1VUAQo6j62wh5P83yvFnqpoAMEi28DXYL",
  "key5": "4UMSz7oD4ufQFi4VJVZuYtfktEvocktkQx8ZRRgMLFZmjNDhUNikaPBvup1MDsU5cDAPHtpVokTXUEx2xuxVL1ef",
  "key6": "5MrYnjYFBVkb7JkSwuRBE3aLqnc4oDNKHgUivouPGerKtRxW9Vj7Eaxs2PiDKQfg6hXvJVM5aKWcwQDgGx9tHoBW",
  "key7": "5AV2rL7EC2G3dRVQEEh85dDnbszKL7AU64RYY6cb6cr8FUrPqvXan2SaU8Hk4xKmeKQAoYHDRaj6AypYPzqd1KMp",
  "key8": "4G8kHjAdzEf2JQQPc88Yi2jZDTm8S7wc98tmFFUhjH3HZxA2vGoaV18T92CVry4UBiFXy8bBc1gJWVRMQu9cDBcw",
  "key9": "cA5TGQb8s3ba8YVdjAE2f1oZDF1Bg2rhLXKj2ELd3d8n4XUkMmAb8n6d2f1c1t86Q5F99bok41jcZ2nTzThybDg",
  "key10": "3qDsgRuE4NvFE3goKUMnJmD6osUyw6nzjkDtJPMHPTvVL3myJo48UsJsuff3jhEYEfLfDF2DmgW8zaTGnV6DumpN",
  "key11": "33VdTxhCKauuFRCf4j9MqxhCyzWHuMG8fTv6LtdTuaYGCx1U5qfndoXipKyMoiXAZwvZ5Gu67UQvA3JW1w9q5PA3",
  "key12": "3DhY5Zdf13fyDgs9zBT42JFFANxnsHpEapYDycdz2uKHJF5pSapHYWrnvchaAnSzJj99wpgiMCqcmEBAtzqRD3Rk",
  "key13": "3suA3yHT38Xe8U6PkSge64NQLRJJ9QyUs3gBpjDuinVTkaR6DcohfoS4PZUR2bWRX3bgWkBfUXfistyoJNpqBfmP",
  "key14": "b8TENSwuSauZCssfa3rUs1ht52c9HvmCFYw2R7dJmWm12BkX6bdwor89vR6JTpYbubJqcKu7WUXyzJHFTgyKm7H",
  "key15": "5mh35QuZs2oCeYRQgXnztMZiqM1S1JkSZ9ZaYU5VchHbFkDEdYV2xd7YytbnXBpHqDuzDeRpPR15zCdpqu74ZZBo",
  "key16": "5tTEsyWMSwTa7oDjQ9e2jv5b5T5qkL9g49uBjfhB9uKjbQzL9T6YfEtJrmJgDPZH2dY88GYe43F5GaFSgg9hSSEA",
  "key17": "5FFAHfBn2JXR7pxdMwL9tsP6hfCuYq3p4wXyiMinPLKKzjWVgq7vEbqQW5R6ss2jWVdpSjL4Wio1kHH67ifHSwbS",
  "key18": "TAcRoYWyyPXQxFVN2KifWtrYCkvqNxEde2P19HC879yjBf5gjTGStnq76NmUB1yKCiokF3QdxdjakaD6VZzjyKu",
  "key19": "2bvWXr73bjZLmhzZicAGd6fTBivZrV9CC46WirDi2XZPdvE8KaXD15RvYVuThDdxd5vq1RWPN2Ec5756oB7mbZBS",
  "key20": "4oUDsPtztMUpe3jXsKj48CVbxVU5xT8vUCfn4QxqD8XPjC671356peXHDoKGHYhy1ojTTQsR9WeiRP9bjEuSzjke",
  "key21": "2L7JZiomyNX9FzPhE6XxQ7CL47QXzz4or6VuFZAKDhgRhHqDM5pYfrC1ZVLvW396WUfNmidaucERfnVgpFb86nCF",
  "key22": "2pxDjBN5xDotk7nGQSVGVjnsFdgPHHHiS4j6cybyjWBJxqJfPnSpAwf13JC1chCRmgvNfNCw7mCK31L9ibrm69pt",
  "key23": "4izrXnApBALJNptZCFpcLTfw6sja1Dt3NPsGrGsZuDwjduSh3zGjmybyWo3geiaha8ExbNxPxExseYiMX3WwYKMT",
  "key24": "2ka1JM9LgyGy5sBu7RrM9V7Ffffhk5q86JdfYmS3ceQsRsyCYfdW8fJcbfbz86eWagFZpnFZShajyzGbLjdFZP7J",
  "key25": "2AF7XrmXL1wi73thegKW4vQHR1oMRehL8GmYohQr3M1WxAxYkHDLfujWVn5dPdYteqMBimoPWTZFp36TXYwwFHzn",
  "key26": "3Hk7fYqqKb98BzbNDT5y7ptPMy4cGh2v6vropoaxPAtG9byUGnM1SCkFxepzKLvAd5bL787yWetoGsutPBGnfAw1",
  "key27": "yw9LRLJjx1pjwuDC2BVSKAucnoFKzRfZ6ZVQWhtuhErmawNGa3dTc7KuKpXVYRKp1HbhLaCaLrHJuTyyUkLtFh7",
  "key28": "3zGKNxhVLeRkqHc5yDN6e5ThmHM2UkoUdQjmKrGn9JpBXvf9PKMwhpZraHPXUqJr7tgRtMi3Gm4ZAC1fvkJzy2Qo",
  "key29": "2dVZ5uT1Qe5aazrL9ggqQKoFGjxyvfDKwDdDmPfrL1t2efV9BtmmgKG1MVs1mmgf1c8Pk8aY2uQSEeHSiyPS1ZTQ",
  "key30": "4ohYLgYJAD4zXoBXX4vMg423QU6TVYeFEtoTnVoavMjAh1NR22pJepJGCRB1LErPrLLFBaPvn2oAUedcPqaQgeqX",
  "key31": "3yT4aWtMWsystkyZpRGZKdbh83eMJpeqHCXxsSPej8TWSaDPjuTJyu6bg3U5x8qWgiSuycYJye9niHp8akdGR6dv",
  "key32": "4pavT8yMRs2c3uENhForRH9aEPyM7GLTh7DdHEqjHSgKEUAsumTLCk74uKVxoHx88mn3cDhEZgLkzMDuV9yCUjnk",
  "key33": "4xaFuAuu5BhRVpvA4Kkt42Viegik6vrM9yQYQJWiMyPfbmwUiGeuGB5LZaM83FQMSn4esCWz2Po2x9BPonz9Bfdt",
  "key34": "oxVZPrJFVfQBmqUqWeekEuSs3TN2NkBGacm6fUK1hxrPVoEGWLFuywaxWYE6GfoHE1XnwkV3ER15NYfmLyBrDWS",
  "key35": "4X6fFSax6PZkPdwXK42xQuVjq5dkQvDHsgsrZ3qirwK1MaZf3ovznNBGaHvh1wCgba6KteY9XQ5LnoqzCS8seoGk",
  "key36": "3iEXUQaHDp9PixaipaqVMVCJUuBMFjd7DK3tWWh6s1rf6PoQDXKkDmpE52UdrvReUaqjvroc1ZfAPPNWd3hVRUqw",
  "key37": "2UbSFcb56szxYpt621giWxsFLvVJuQhAkfywNRaQFZQBgXe2rwCj9DHxrYPB6UhNpHTQP6QLN446FqmdYBpNdwwy",
  "key38": "ckxBZzfZqKDFwvDnkHLSu2ybx5Qkad3fx6qJExD9AgTBKwoJCByDCAtJXSdBuPUStNNbw9UC69cKLqTPJW1oUff",
  "key39": "4a6zwjZCqzcBngkvgKFNtuYHWxaN9dXEKiWWhPK3xZCg5tTdPv6wddxGwJGr1tDaoEtQawfV1HT5zAMpm3xk6cze",
  "key40": "mQHwghVVYJgURcqXS9UNxpnbg8H6WKjc5hM1r3uRk6V5Rash4yYW71Qx7b8KgjnYCwznHMTtf2Sx5SruLPAkt7g"
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
