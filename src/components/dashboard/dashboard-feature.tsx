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
    "4PJnkcLBNJMPpR13zmcPvaFfFFaZmud3DT8hrFTUSqKnfQ74ibLC2BDiwwHsw7iBEv3U9XZBjiMD9vA8FsAVgNTY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29gqugh4Mpo93vPCj4srmLxVQkCNsfWitx3GyNVoS74ChoszzBeeo62L4TtbED4E3P7Ccb5jkweA3e5ceNnerBMr",
  "key1": "3HmTwgLWC1ZSxN346DfgGmVtRGSF1x1RVLChVUZLRcsqnyGkeVfu4jaDEgSqfgZbs7jfhi7MXU2QCQRi2TvhsYGz",
  "key2": "QK7x4CWvMbq3MiehJv9gFsBpaYLVmcab1okrBjDRZeuz65bZokiBwpmNY8BivewsJQtkVb5h5YmxZvCKsfcFyhF",
  "key3": "2Z1cudF2FdrTsG81PL5QGEWmoQ7MsMyxMSb7ZivNRzbsKeME8DcoeLNzopq5bVuWDA6x9d1o9QTxHDJyy3Ks4e3v",
  "key4": "4EWz56dgEDTQ23T65TKyAB8CTGq6kH7kd2jwaqkJMS3iWV3NJVtAMhBLX3W3puwkXz7GGoh8jz9cJK2ZioXtLf3d",
  "key5": "5UdAjVfzKCBe5er4anLGRGxmkBbh1Uawyg5uTSivtUeaHd9j2XEHrJXQCvQL2MLbnBkUvs9gpN995vhbLTkJ4pJe",
  "key6": "5dmDdeaf6BmbJCcjdbPaV72ry7R5dg7NJXdvtS7cpqgxczSvAN3p7uSM3WiRQgLm8vCAXstRgMvD5oaEkNwDRbtn",
  "key7": "4jheaWeE4ebXnXzrHpCV7RupZ2t2DeUbvuY8E3H1aNnM4Ybe7i1svuetKLG6jApg5pEpEx9KqrfitY7NMAqknyB",
  "key8": "3ktL92MtW9ibm2bJmfybvVkMiWcprps28YHSbzpGfAc3qQMGAgUiKdR2y7FM5vJqxgLLadaTvBHy6362czUyUzWX",
  "key9": "2S9tk98tkZ7i4EbCgb35HW8DXPhRBvU17MwLqR1RFJzD9ndvTr8hWeDucHXYepyZXLP83TDmVLbBpWEYZafK7Teu",
  "key10": "HJcoVc6fXuRQhJ6RDYBLxYaiSaAjuNdXtNYYgAzQQ98ZkYYS4zDwaDttPgWarEXP1YisfHB2nKaGBZhaKjT2hD2",
  "key11": "2CZfq1VZAHk18uKsnF6J9evza3oXiP4fpFaPHcomLVn2oTF8JKZR5gMDZuf9MCUyPy45jF5pUnosvToBSpL5Xbez",
  "key12": "2moMyeZVjaGHCSfVXhu9m7A29g934U51Boec2WEmvRLgv1UfCutpQPbA566rrSGmM3HHWpWSWebCNmgtbmtkimQ4",
  "key13": "5qQfR7CWmhkSkuA2nwxe4wr3psYTUi6CfJn2PCkvpVdJyZVgkT1nXf71hgwt3emuKohLELijDkKkFZEnVe84fxfb",
  "key14": "e9vg1SC1EFwUsdT99bUoBVxu4Z7wxCU7RFDzoZx9xQsypQNYD52wGJub4TPfCYsKWZiKienvpVsvkHV8ijPFdGs",
  "key15": "63bSH5b4qmquhPE6ai9dgAFcofwtMPfHDL3CwnRW6BSFTKP7FfwWTAsyq5vF2KiMgP1MdNbr9c2j5EiEDeHccZXh",
  "key16": "3y6LzFX18KN93DcVHXoJEbCMxTZmmiKaABN2GVjZ7xRbkQjExALGLoywa9v555jYsjvMyPwkvR88zV68CYPpJjDr",
  "key17": "3iDwZBXPk2o3hc3kKSd9B9HvpEVxKQU1BaUgxSQjnQHyekSLP5FvRmKsoMW29yRMNTW9bBjV8hrULuUViovaKxUv",
  "key18": "5fhaqzBKSGabtPLZDEM4ewnyXMHdGtphgqeyedY6QLDpN1oeKn1bGs7DthLChW4DBk8yE5vo8fDao9pWoZAY2n1d",
  "key19": "Tm4sdTw7VKRsnDQVETpy6cRJJK5a3qriH2nSnDfvi9ACsoLwzfVAfSB2R5EE8Xncan3ZHRKtpGpmGGZZQ44hcJ5",
  "key20": "3qnznNr1Vq8cGakof1RiZwG4h5iqLCamMBDAnGbTsYLVBgRF8RR2DgaJXftPnWggy1WF8KW77pv4QnZqdLeJkXrf",
  "key21": "524CjPLk467PvpSvz9Wasta2RSiP9Ny4qGcpNvzoiCDA1egxGtVMWMYdi1tTLfV5Kp22g1pUem6Wcf8fxApCNVGm",
  "key22": "2MW4QebHra5ANGPsoXo2uQ7ys7UWax8CwqgdimPsCs6LiUUrMx14k12bxkSKo9sRq7mKSsdHLae4tkdb6ddasQ1J",
  "key23": "3Fkf7pRGjpsr2ZGxG5KkhiQArS34VdYoRWtYLHPVMLAzcmBi5vihzH3RJ6KKrVNNhua7XHuJ42a5XZmBNAChETVV",
  "key24": "5dWk4dx1NJNgDWjwHQtAbaNpDEdu8XBLLScaoiF1CihMyHtFdCejPVxMeukYaKSz5VYpnjeJUf4hrgrkSmXKzW5n",
  "key25": "bWKKVjTHjsZ65TPbYLpZ5ehPhRynpwH9uAvEg6zsGkNqxgNN2hGmSmAr131Cvq3w54dWMs7hxP47gHGgRUtuaQ5",
  "key26": "2ovsiT4kaL84aUdmTwg1K57CqX8XZrAa8131nkFEXMedE3gbfYLJsrftxvtCGgmMZbmvfnMq9mg3zsDXdQHH3WVn",
  "key27": "3VB6UAWLxEvH6UhVZPwMCyVnGpyzmPFFRirA7WLwSXRp9o3pA2ZtqgxxSRu2DPfcaWfGPLZDZydNTyhST1qrRkUi",
  "key28": "5itTn5VcgHFXz4fcpFEd5xV2X2ifAT6JBjcEtNZyS9PStCkikuiA5hnRkN9USU1PPPvFoHR3qz27ikpCM8LXCb8c",
  "key29": "21dsH8WMizbiwx5DVmP51Ch3MeeMhfHzoYtvPvv43EkqWbL67n5fEdzgHi5ZGZcMbqG4W8iqi6RLYjgAVbwwg5bx",
  "key30": "5mLoaUz6C6WhPphyzFAeLboFSQ71ixDKXjrSjYYnv9QYCi7iJdNSdfSckorsqWrRsXQEwCcUaYR6sB8kKLWKT3RF",
  "key31": "4C5NNkoebYSJm4MtrZZXCGR9BziGcvpRWPibFYLovsBRif8ffPmbZvCnVopjbtBbJu1UASeTrZvaqp3q23wg2FDN",
  "key32": "3yhwbyi8w6J9tAhpeB6a9AMxZFb7NHCikKSGGwvSa8cF29U4cTFQNSpD7PvDH1VoRJ16VZs6jtUMD2ta9K8wJh9q"
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
