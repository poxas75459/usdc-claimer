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
    "3JSvfwpEcjnCY8mq3a8jkVZCVxedcoS3o6fc9MteNojeWVNhAZbyAB8A8bXCNAKj8LKWaSHQsuX8yGqbVoubf7TC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "69BHcr5VTZt4CsgSJVEkcx9KDsDD8RcqHBqQWt1SahAkt33g3ED84ZCiGFq1oKxXECdsEQ3Ry1RREuDtswSkabE",
  "key1": "4atvXRAj3wszS8rZwx79LyjVKGyCiPqWTLkuVNXK4B6yMUTxMv2vThN5BfMoKptu5yVzCB75EfTRswyXiikuQsDc",
  "key2": "41k3pBxxHr576RzAu1QQ8e4PXaYFHuX9ohWPGu2i4xKoEc4kHTDUChmiV36wqdgG8cx67FfZcnwS7qRaECkzF2qi",
  "key3": "4hNiHmYS9uGrUNzXbxs2ghazDWtnXExijVfBYiDp4eVbyNuAokcXe8K5yQeTjJQKyBXQX6owSoE6jLQob4EsB54c",
  "key4": "4v9BVwTLCf8oQivdFnCFd1cvkwcAJ9VjPM9unGBbhszQq6iYBfzRoHX73rnLxYuz5VbGkP4ZD4MYhYfmSqva5j6t",
  "key5": "BVSWPDzFamV44RajXcBRgK29vuiNvrqpFashCALXybFxFvBqve6hQjN9BokvkUzs8BcMj537dDiV3mYBypN5uYF",
  "key6": "2p61gKJuxUCaDP6wrmy4XDmGbcPfKEFgTGTsrs7UnvDRZkUCCo63MKedBsCwxcJyZ99XEvnF89e5i6kbgsC3SPAV",
  "key7": "5h59F2NMy1n8TtCn3ogcB3Fx3zZDc6KTUar1AfJ7iSKYtJRDM642XtVUghHcDqCHxrxJhRutnNXpYmJVwieZmpsS",
  "key8": "4tvhB8YSC6ocUi8sj769qrQCkNsttXnTZNm8AQ1jEQ3VhCAPBaB4c1AixxuexCBFsYAfavks93cRpXEZLWn8w6sR",
  "key9": "43g9VRpqDKFVcqXKt8UjdGrYHotXGakqdo1SvBpKTjZ3zHV1MxoWVKZMMmVX9aB4uCTLxfGXWYbfwwYqbXG3UYbr",
  "key10": "5DrhEdxdAjP3h5FC3WiV4YWpYVToujkcCvNrxonjJNBbRE3tc1x4RijYtCE8YkTWPwXMeDNHeM7mZUa4WsDeL65h",
  "key11": "4vXTxogqNhZRow5DJThTsYFTxhwaV9ma3XJ9W1mopVvjgGbvE2AVdYrhMw8ic5uWzk9hwcxj4NAVheiRcq3gMoMW",
  "key12": "4MVgEYVFqiN7jfTGtcc4aTJqfXMXMiEJJdNJkNkZLU7SF1FqsgeA8pBjW4tWTmN4YmHb3qgLPnSVw8AZyQr88dCT",
  "key13": "5mdYyu4Djj3J5Nj8qNaw663uY7ZHjKCt24qhmExbDk2JAYSawxgrxdKDewcMFefUzYSRe3Lvu4JrWN3ddvpPKwYq",
  "key14": "3dzUffgcG62xH3kPdk4M3eiz236VmDhqpqvRfQ9gvFXrDEud5WWGGBEVeTHLbVrSYgjuiYe4W51xYpYThPJbZPmb",
  "key15": "63H7qxj8pwD9rygGc2BUeUJc3UB6KrBpQtqQHHM7tBvnN2wCyD5qmH7nTenTRVsFTjnpb49EUTiRxate6WhBGi4j",
  "key16": "4zBGo89DT51g17Hx29UXnCvvGMhhkiEUgTB5ZrFUJCotghZ4U2npja4xrrmLtqmK1ionmM7f7UsRVRkWoGSe1JTQ",
  "key17": "zRTSfnYDPv6n6xPd896WHvQnYjndE2fiwg94VqTQLVLPWN2UtFs7yPt9C57wUaaSz4cy4UHryUYaiasLLThqaK4",
  "key18": "TbYUU54a4bbKs6Xg8rSGpZtQg2jPtPg8pyca3BkRtEt521Ec1jRRcb1HfcKFX6vDMDH74SvmMuTCgPwepFufbRW",
  "key19": "v33sYH4AZ5tRHhT3jfNWtzjvej7ubHKg2y4WwJyB8QMj8Z5fzgN4EDAnULQrLLczVXcjqEXo9fP7hSLGsMSfXtK",
  "key20": "4RXRRzfqZ9SMjLBAYAMPv3cevPfjrdc4AuKD2YfM6TBsqNeHkX6eKLy2kUVWaG9HjLMjzcwHLUATiarAEAUaWW6Z",
  "key21": "4WWMdJ34b2VZkEV1TKeQh4KMbJhJgjqwroao4mqEU6bzz5daxUR3fbBJyc346RcfCqwpVAmGZUpgiA8PoiPzggEM",
  "key22": "4tiK78k4rV1KqdEvA1D1HK21Jh3dKwVm6ew2mEgZbFCFRo8FxLvWsysZMesQnqRL9VK58dWzjaxBN53TdczoDdGH",
  "key23": "55pe159JQwtChB82WdBvLLsSWYAaQMF7JbJ69sCpZHpzuuZWLKJUjtY7Dn8pniEDJc8D51e3TXXFzMnJHFwcdmL7",
  "key24": "4XdnVE2N5V49JFBLziW7ybLQaDf6xbvC5Yd4mx939hTy1iB8QAzGmTi3oQ4DFBT2WhP2o42pEdKC2Qdemp4F7ULs",
  "key25": "uPeKLEyNb3fF3VLzsWJfWzszeAYsAywFgM7Y4zSiCQ4otQZMP8PjNh8Fod4Wko3BCk9E6mhuN2Xz7CVoafjEcd7",
  "key26": "5WgYiVybNXHrunwD4DhpFQNbWHEwLnk6BxjLPuG8NZ9DokMowbsBbsCmuAA5v8buX1yQdMa7wiapeA6b1RhepaPY",
  "key27": "4GEAX2fX5nLojXkVfErxFMU5HNqza3KoWuGFPvXySvFpLNzfwYHxmEpY3MoyGExqiYyxxEwAQy5QbLskSY1BJxKk",
  "key28": "27myrR78Qhjdys7w5Cj25ZvCiXqUCyJXY8u5DXHDdLCp6vUH1iHoCzGbiASo9Q7SdCE9gY3jXFYVzFdgFAHNjZDa",
  "key29": "33ZvoDjp2FBUBxAXeAPu9ymdrYKaaNo8bQpL1reAx1WPJsd3v9CD13VHDNvgXv9vRAqPmV9r52keKbPM6ewjN7mj",
  "key30": "zfxUxbPanJ5mLAHrZ1TAoa5vJs2WRpZejbV9PoK8PBDrrjYAae5nninXBw7xEY7UAXYSBciZD2nNAJXrDUKV7xQ",
  "key31": "5LVZLQfPFqcvfz3MKWcn3FEfvE1QmzerpsvMDNCAcaXxHX4FNK7wsHr54r3pW8DtbTDVZuKSK1S1LVWVGeWNJ9U7",
  "key32": "3XyAqWV12GY89YzXSp43MqdemejCyqitqwy6fJHBupe29mp5spSxBFXVscX6oiZvr4MuLjMZfLvmkUzg5hy3xC82",
  "key33": "5Zfrx7dMAuKsYuPr5Jeyx6MigLvHYbdqnne9E5LffxoSHn5Yy2Gjhod8jtPZ7zrSH6omKEqreYWABM2i5Vo1ZV5Z",
  "key34": "2A5SZywm36TyturHXe6wb7aZCsatEKFhrCn7FQyFzeHRndH2pYw1pQpfGECoMGiAkEaMTPN1aFskRxz1zT3Z1d8y",
  "key35": "4JWytFnsG4KzLAQvyD8vK2XnKw75MHP96SwQ5WRcSC1gRF6bs4XTdyJcGuiE5V3NGUrGahpvmKcfjHYnnfhC8gZJ",
  "key36": "3Suv7zTJnidMVPmZrj2RPhiZzAKu7kcNYy5KMWG1P7eXSEoVPViqQMyxATxEPEzKG1QjgEXof2gEEmRiLK6aJfcW",
  "key37": "22o73uRrrAJPimC2YauzVYQzXLioD5eSs1V1oBTqUxHL8QJCT5fYMFcpkTBS75LqyRFHkKmDWJiwWJxZabvsV5wE",
  "key38": "2kMfSSXteLG8VA9GiiAzJU4omF2k2mqnjJ5D7YasdSwueWWwvoENDXjMtdcTQ9seLBhYfuZt7Sac2wfGsokhxxyE",
  "key39": "5qxFFzx5yJAwGFP5z8GkGvG42jgV4XdR1HSGEQPSnvYgmW3VW83bnLgQXt8e7nmue3WhmPiV1vEfxQPhe86JKYGL",
  "key40": "3UVKJV4EEkXtvcwTkonWfDvrcQJUZkdxpQDnjjdP7GL7jksL9XLoc4KunxKySWpi9m9EqNKtvonUet5yphS1Si3E",
  "key41": "56Rh64taFNr48oU4kfoBJ3eXD1yMQpwPcrtftr1J3es3UNH2WZFtFRNjBjo6qTKfzPiVXpJbpyyV3jd8q5qwp3ab",
  "key42": "2U4srFmXGVtAVukPB4f17S2v7B6RBC5JSjFXUuYBSDoquQwofVBQ53N481BD6o6GogRGb5uAwuYhsL51bfnoTa5A",
  "key43": "313xqmX5vuChHvBuxjJUBnzAZmPWfPCTz2w8HTumqLdLnfASyHPqwGYkWbFnoheXxwpd48uEtmRhiNk9zPMdsfU2",
  "key44": "2dXiRmkGAD3fwYRCdmq2jd4ot1mJdZWXTMMG51qWCRT2Uhvf5GHUxt72dgH1MCRL2GT2doN3c1HEjh1Rbpopru9t",
  "key45": "4DJG6KVY2BDeVn5X776SxxWM47787wwcvy69KdWidDh3duDRTLTmtniHtoB1XmcbxVNnAiq69xprRcn6MZQPqn6o",
  "key46": "47NHbeB23HKU4hz7HG48JRjXjqD35pn9Jw4ASEz2HPvdVVK1CZ9dJtNVM5Qua5BbcDUDDh2H1WfL8oKSo32CnQrj",
  "key47": "wfogXVaSLHYmWu1sPxKHWXqLRgpa8dog5UPUoTH3VEXsLgwmxwTCZ2pfdpNrmGVFUkRGmSLGuuy7kusfKVsazJ2",
  "key48": "2DVShTKTCxVBjEArdrsa3g4K1RFVtgfrT4LayKe2xWDUHX8UMUziy1kzDrLGqjaFVWsLfgT2ArBtohsZhVXp8ZF6"
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
