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
    "3mDzpzzkgKJgqDw8NiMoUpUQ7QDf3Prn82ts9c4Lu1ZdUAVZaiJHjShjvPPk5GvYRmYQ53QPkq948jScKg2PPq2g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NUgTYdsa1sR4SAnNtnYrMBCKi6nfcTxpe4MGhaHBpnHEnQbpuCkavWauSoaZ5R5YLrHomYmikvxziSjdCHQYC5i",
  "key1": "3kV6ZqbNrj3M89ccRbqQaEuUCRabeEvrJ8zrkzgx3Bhz5XmniJPeAwYs1BQVYCixN1XCShfH4xK2MtMbLgDikkpL",
  "key2": "3YprVybCZn1U7RWULkEq6RjQqgcvNmYfWXWu2JYGSQ1kQyiiFBi9fRFG3zQEU8v36zMsS96dmdQ2Gpgktqw2vbjp",
  "key3": "3Hc2mJiNMX7ER42h4V7MNyxWCDFqpkrBJ7YTPCYd1bJNqKaXjT3pJH2VHAgoCM5o8qrGhMvuQmcLHn9c8kthHV1o",
  "key4": "4baadGG11rvgVfMZxMF8LqDYsjG5GGHe8D9X7NQMdJYDanJcHdSjms2DmhUgQzXGVJqm8EryXEWKcqeeKjjy9ZWg",
  "key5": "4xkpufNJpBFH3XDjYypuVjMd8bRWz1jGN2YPatvn1AHwrMwdXjC2No8BW7XSneGv5WiKZJocppUFjHYf24N3kWW3",
  "key6": "2KEFsQJBubzdMbzaVzpyGt1rTMmzooxnaNXPCeir1utFgFY4AoQ1tNUUQ4QMS1LpTZTdcejnkJagQTGhz6MwCvKJ",
  "key7": "3bNQ57o4w9DnSf7JK5NMJ2fQ21e7PE5tv6hmxhbpK8RFLw4QDbDMHyfdnRLT5832aDFiUBXrPchtu2XNCJR8Zbrz",
  "key8": "21KbxwQciccark7CzcPXtiKFSFTTqcLLuY8F5fJZYXKtgyAZSLdV1MGThHWJRBBqsaA3KFHpw1ThX2bbn8m7KqQ9",
  "key9": "4oYkYskz5u7j5Bg64FQSbN8KGb53MBWAKszgT3k7RpgU4cU5JndPv5XfWhvUFNZefeedF6PhVJnzUGgW27p5ZqaV",
  "key10": "5mEmWozSoam64reCLGv1mzpwQCYucyvaBUksg7BWW6WEkkyAZabArWn2MyJepzP3Xa3QWoazbEnkvVPUJPnKgvBs",
  "key11": "3wVTG5TgEhXHfTugTwASuDvkpfrWHALPTHXFqdTP94iZrcS3sgLdYzxPKXVkEbTWLD9KcfZjUPkM4eoBzAstJskM",
  "key12": "2djECXct3axHpFjyeAUB1ngG1kyBzGwM6VXNWfKcimwHAGvQ9CdbVeTiQDDzRDFEwBG5moim3oLoN1vSaivanfbV",
  "key13": "2oMYUDxCuQ7pA6i5jN93HFB17gaNAeSMqQgtYqsDDEwzimccPK5Uwia2RkFWrct7EhDWGAYm659xdqCTrNNpM4GQ",
  "key14": "45mafkknxizYkSZxSsdCvsa7siTYQELbMTU8NKCUJTR4ukjMz7ZNBRU9Tek1wmF8bpxheH1k3DT5az8koWR4mbxN",
  "key15": "4XJZqP8B2d8yfGyGRsbxKQtz33pGigGgZBt8tMk5DAQcwN44gNe32nBkWkeCL78zcwg5FXCfYkNm6MCLEXYZpsMP",
  "key16": "4e1Ve6hRy93TePyyYXxqLdgMmQMHVzPQaKiPugfgE2u7vNxZD8NyZKdiNrVwm3U2rUeD9yt5azkynWMs4agcemy4",
  "key17": "39kYfKjCfqXQgo3EicUYCKzQ7XCX6E3D5mFTtvBE8tA73Qugp6BsouUaV3WZPyLLxgiX7KT2gZsHtgPxkCvvEKCi",
  "key18": "54EbLykus4dUq2xg8F3LHyqsd9uwMyL1jizc1pgJhaP3TgsaVSdBWoNr6V7JkFrG2L7wTrZigSsbwtAriuhZNSG1",
  "key19": "euoyxrmyQoMybH2HNdgYZXMb2apXeyzcRVXp2q9xxmQNExRuKhzAKtWUMPZWkAp6YKYGQWcepiNsGq1MPsCyqdR",
  "key20": "3CADswHsg4JVcbiBhmdMkQBGvJiqzyVtV2wAdeBXpQUJ1HFWLyNaeH3HgxLaAchdGT5JUKcs2SwCdmAGwc3mvqfg",
  "key21": "4KLbLbMSVLcaVMLxXpG6iWAacyxwEHsAxv8SeeUDfex6jMN9SHdqNFcHA2eNg8ZQ7cFeDov98uaEUZKGD1T4tJTz",
  "key22": "5GRwNogEuJnCevk4mBLgPebQ3X9qpvdDFQHzuM3f1tHCHaASZUK1uf8ZsYKrkKCjUaaCkwpKSVVGfxR7EY2oU8Xv",
  "key23": "2VuiGpGCBDKRjZSwVcpL55Q6mySU87ja5CAoQqPM8hUxMuaB13WEH4uJH7TWXpTfM6WfHXbw69fRDw2HiBAXJD7m",
  "key24": "S9B3ELJMorP1YLEAXxwcLYz3bomGEWBSbwhqak2dZsEaeEDUYPSKQxXxx2mXXo2DC5MnvohjF5MNA465MaSKPCh",
  "key25": "2h1LRtKuz47KSRfrKVa84dXU9Xs6ZKEhqmE1ZRPms7Hcp5Vh53fXZcNeRkhybmNqGk5ansR2Em1ZjhjY5XDEVYHn",
  "key26": "2mtFpDFqLJLhYomaiBRo4RfkfJADgijNXBw7nUGa916XiQemteAf8ufWmbY99iFQ5eprDCzP5opU4kwcUcgyjmNH",
  "key27": "2yTrCCvkXZPnFBi1ECERs6q5PWVDH1WNDhd8nULwnqvnXNtzNJJBZdkTBYFfo7xEFyRjCANdbSed2VAYYND3ikZA",
  "key28": "5aAWRbCZj4k72FBLXRQJrYrhApHsnndepRtHAoyaeZv4ccKcQsNyhAHsu8B543MME52caiYefr3chCSP7MoENhqy",
  "key29": "4FLtztCoHVUNRtVwWDjGKce6RFRq4jJgnGS8xaquHzC2oRmuTySibzUE4ppWQ9C7wrYGg2LoB3ihqz54hRW6NCzA",
  "key30": "349XzJ1tnobQvV7F9Bd6Erq1B1vZ3yBUnwE7CPXCh8viAPcKqh5X7atrFXLwphCDJiHY2GnfiULGS3UPYg5xjCDb",
  "key31": "4MwBVPnG96qj7qU3upsFtHQUzLK4VudYE4iBWVbtzq4uj5bixTeEBHu8fZLMSvwdaak1pEBdo3zfCvxz42xit4Nh",
  "key32": "4Ece8g55P4sFnnxi4XJnhJghRKse5VTkNZ3BBZCwy2i1cC6VZiQhqGKtDfEsTJVgziZgqLPQVRK9jxWNDoM5BRM",
  "key33": "5o7GLkKXxRz4zcsieHdQmq3LND55jmqeHGXAA9r1uFDjXPvsbr23gYuL1BPG1aKgwjAJ9diy9E8jwWnfXA6N7txJ",
  "key34": "YjVdg7ACuYmrfiZTJ1h2KxUmogSuM2JEPANUoSoShLu2nF436FsfRSvH8VsZrYYYPi1SeXxn6mEzYoABrExStoN",
  "key35": "2py9U6zisjt2ef1kpRw6jukxLUtAgUSZpe2Yba15itAC2BEHyt5FRxkYD5eRtHviaznWa1yiuQ6yomMXFxjR68C4",
  "key36": "2xgXMiqBUmCk3FaGcdakewezdxhQmnKbjA1JgNTJ3EvR2P1Shm1QvJnic9g1WLoDM1AVkZbthH3WkzSZULD5UssH",
  "key37": "4uQWLFU5rcgUweFNbLHCbRJkiYpdjchCD61TMB6cbU3KCJndhB4BThYGQDFwgP28i7uf6v4N18Ny22WRNPVBhY3r",
  "key38": "2zQ1fbRubPaW6ZJoJuz47CGPLAvviyG5VDU9EgYTMFG9Nyd3Z7AmHae7EnS6VAP3chF96xZYqM7WqrDRu5j71b6E",
  "key39": "ZAPDasJqLrUeGFpzMVEsacXPepmcRqKNyht3LDn89DJMpikGomAyrZYCCV8MNayUej6sDQrBQdYcQ2ivDy6TVE7"
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
