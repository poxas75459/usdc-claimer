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
    "5FfpQs9oDLxEdqWSHUuiBueq7eyNnN2p9Kees8wACt1YrymU4EG1TopxjsoiTPZnR2nLXBLqctAucpDpL2R3c9Dg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wMHTvm4V5bupipC3vQQmXhPNEGUQL4ws825Yg5YYthJYCMEmkByeWWpKbPsRY66v3MhtsXZFDmy5VVUCAoai2tX",
  "key1": "2qL6bipbynvPWS47ALXYXXjpxzgJnpHRMzVMUszadwxLBCrLA1FPCtQokgT7zxXwGSJMuztRW3F8aAgzTCs3unxM",
  "key2": "5wTNFfWXhpRXeHF7TvRCmKaoje3PPR7Xr55Pm35bXwDKvLrRfDekTBqqmjAgRirAgGEEmf78URvK2sxdxN8r6RCV",
  "key3": "3FiubsC6g3GSPXp2TTvgFefXautJhhwGpmy1gvvxF9LcLGZ6vLKPo919s5pCA9QnfXM1q7ChyH4nG4pckKe5aUdK",
  "key4": "5VYFEjrfBgazp25AtYaqwYsDmitUepvRp9XeHevnoxywYzdHyFo2xm5pwbZXLBCLNFdH3GXTzCSDreC2g8yLbkar",
  "key5": "3fYyaYZmFSbxXP9xzjkudfGTJ1P7J9n3ugSCU9s1NAyPrwBeS35DLTfcDFow6wg4a6CZ2LKcfX9bPaw3sn58uz6w",
  "key6": "4LmqbavQ1g7xYTxkus2bsJD5NZJf9zuTA2HHzRke5E1fmRzzKXg3URu8o1sUp28QN4NPWPBk4AihW6cr5TSYxCd7",
  "key7": "4nmcFPMop5ZEHiMdB1UdGC7L5xozbAe6Dz27rsn7QynvPYCayqEgKdt54BBzo5ti2PN4PV82hT9qM4QDVd6uUs4k",
  "key8": "5xTDEpoasnfd7zmHuE8VkpSfLqV1ekDcMJcT2FFfTf6o83WvHLfzV5yrLKvpk8D2wGVZUw15JV8ZCqrdFuFDJSt7",
  "key9": "3qzK5rZGdfEey8Lmso4qpHr9f3AQ3Ty5hkk1qymDVdDFSU5uZJLfU9cC6JNwS1gfDrBQk773JcBMCw81GzbzbHoL",
  "key10": "r1vb98TrFPxQxZKuFcTXvFuwWtzkFBFMBUmQ8P9iZxH1jRtbWpndJGpTZMyJxoobsSjiNVe6eApXdKhinenKKYb",
  "key11": "26rvYq9QQ3NMmdPaABthM74VDmJ5X6qTB77GMr49Vv17HvtDfv4bqT4hHXcUfmaqX7CCwjrx3HsFE9feaLMiio5u",
  "key12": "2hkqVN9QHTzEkVKruxYvVM4TkHojgLPoUpomvF9rwk9voDKou7n8jMZgT6Bhb26moD2B3rkjvNS3zaKJetNWnqWX",
  "key13": "2SyhJzhruTeJfwAwDrxY1yATmjLKBdJBBXhhodvjRuyoGTQNVpQ8fz67LDfwX8r3WUaZybr7p5sU9vg5nFMmLcYE",
  "key14": "3BmK9zfeq2ngUafXNZCD7JE6EaK4Q8KDzzvkNrUnKurU9hXskrrQ48VVHKHQz1mV7pXe5rvx8B8zm8XPovLwwvu1",
  "key15": "3uyaR4PvR3ov1ns9c919LgZhztwDBkTrav78coRT6mqoFjjPaUpBnWDoFZ6fkaAwucEjMW2b4LafHsBbjrcX14EK",
  "key16": "2Z8CSxJZ5APeP23ydHLbDEt1zRiAcL1Npao8XaBKfdnaWPAgEsAsAChBHvyR5ay9VHUo1jrQpfEDRvuuTAcPAqKZ",
  "key17": "Rz5LWzcEQC2Yz7W9H3SkbaSHSjeSq8UQxTK6dN5t72Uoo2zsoYRfdjvPXhnut4XfdHFnK9QaxeKzLgPbKFh7UMn",
  "key18": "Q5YYcWqnw87VfWwRkRa3PqzyupR9FiX8J1ux1U1aUSPGHGhzAGqJ5DoJVQaBXpBdEbR3HMweLpiTupZ3tiWL6wj",
  "key19": "2siL7E1FMr8oGGytWZzm1sCVnbUcPqV4yDJuot6JByDzef9Mv5ET17VFxpbrVKSUXvuhDqZqnKuqRKWe4FdLKAGx",
  "key20": "4iiJsT5RmnoAwUib8TjZZZZcXwzhdKH2qYz8tmSRpAJCZ7FxbFCM5awSWrLFtG351KVNXoHmGSdwb3MdBt6CjZaM",
  "key21": "4AYhmdNb6CkY2wCPJyUj4fPdWThi3d1qFFqvyx9ukmHt1WPXk2KkfNHjqPWQW7ufs3Vxgws6sGaW2B5cKacGFvXp",
  "key22": "2gidBQUyxB2k5JzdSGqSojAbiEjUpNyxTNE4PqZebgVt6U3tNP1bKcNAMAFCvXQMT77C7UtWH25QYFYoSnkEt6PA",
  "key23": "zTJmjYzytJrgiwXaQhZsjUgENZowNAt6vfPGb2YSXMi4bPTP4JhNwK4eXXckgHEsAHTinbQkeQNSudbMABfTDwq",
  "key24": "5Qga9ANj15SarGoSjvDUcj5XoUn4bfs9hwUVuUxB9DNEjtcRV9mw7iiFwt8U1TsY4VxSWy116Jmhh6gceRP9xN9",
  "key25": "55roY3m55Yk6kvWJqZViV3bED1KgYkmCmQnhgbCcLcCjfpy36pquqCnWqxDbcYimp5drcpewfQoGjNMsam2Hx7Pu",
  "key26": "3iLstukLxUzAh3yaRF6LnBowugM33gayC4R8FBgg4eeGShcRoHgHhyTrNFJhWMuCp8YDZTB2MxcSvCsoinKRRpdc",
  "key27": "ACf9mBKef6F96mfxdVaszgMc3TVnUSLCTKok4p5A4k1kK6FtGHuheCoa6wc391yKVnPDTC83NdxFZiu91vZvPFf",
  "key28": "3gSaMtE6zWeZF8g5DbB446rK8NS4Fnxrg4o3wAXepX3bhSXNR3a7CLfB5kKktPMqgFXvhaM1G6S3q3VoqdkANkQi",
  "key29": "66PbDNN8FizsAhMxppWGwHF8sYka7ahEaY3W5Mofo36NQYCie3K8cv5jYvLg2EJ6faJ88T6zKDHQBy8mKTzXTDwz",
  "key30": "629JWKGwM19HcJTYSHmNFaqF75PHrGVidG8SjZBQRVSQuduw5e279gTCpEwMtQyHtiSwfwCdNbCmEeoPDPdqPgYk",
  "key31": "2fkp78SWCTz7efpHrAEAjUBrU9qvbaaBD6T6BY4uRr1RRVPQA8AULQUQJEp2fh5SLLhMH6H2iexfcFV7pd8qmUTv",
  "key32": "2BGsM21YHUQUbjpB572mFyv9QMBHwnv6vsgP7YgnZHQeUViMKeTcwcXpz9pRSubJPRfBPMd1U2qKKhfKFX2ykqRZ",
  "key33": "3we12JY5D5Zy68WVENCfbuQqhcTBqBSDPYZV58EJdGr9kR1YkN49wjeMX2QDKseqhMBkHyNBsgxms7mMvrwdWmuM",
  "key34": "554R1x4LPE2rwNcHwAGGwC3xD3M2TEfbguSfEhThzRRJcEwX43BAyWYcwfv2AckeC4h1CkZLRGUAL6A1eWHtqrxs",
  "key35": "3M2AJKro5Q6diDqzeUebw4Qd5SySoKFUxw6TVZv6H1fsHjNk4BQkGbBWAZTgH3en68oDsiVhDjSdPKPnFLnfgB5A",
  "key36": "37yxUNFvNy8uvbtiG9xE1YLcaM2tJogFwE8G5S2hWsU8GzwBhbVwmgs4LU3dz6ssY6TWURAnHBecn2BnBWWessic",
  "key37": "5bvh9uEoSGcFS2CUq5GYD6ViVDCcYh3EMiTzpXYthrcjZpicngxiubdoUbZg8cpuf6EbEMacE9CXrsLCxsZBFu8w",
  "key38": "2wFEAmga2jhxEnMUX5dqfrmWfZbixcfYFqsLLrEfFaL5t42Pr9pb6BFkatM4CKaxBhwv1vwec4DdZRZoRNwHknmh",
  "key39": "2QHkvVEQ91PbWPMBj9PBJ6zH3orosCijaazoczWJBXRfQWkzsRd1wyhvHN4JvKvV5FQ37Ms2dXPHVtaQn8YMYSwH",
  "key40": "XEAKq54g2i6VWPNuL4gFazfxovYJwcB1aiT6VppvBQb4jcGgrBkVdj1G66NYvFSC8xHXrCd7P7xgW7mjEFQ1f3V"
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
