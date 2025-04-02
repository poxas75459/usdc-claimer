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
    "57mpQoAHN4nY1fndyqMgZRL1VwQ8i1B7eBYv7ycyUQehAN3LJ4mfqnx65BPFUdHzw89LDegasWb8bEiRzQmpRTtA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xXDtQJVMbGRxhKuBnrtfcE8NfJXCKr4Q3FpKKCVj34FYM4769d16YoDtwCEnQLAYrUtP3pMXicFTsnKTWenwPwS",
  "key1": "68WUqPSMvwr5zbcb288wiMWj5uGya5Ki9kR73H4SRXusABaWBMRyoUMbU2jqueyGddXWcfRVgR8UVwAf1axAhqi",
  "key2": "zit4d6LXxMsMEcVCZApXoYrSnmgnvp6pUvC17XBWkxP3gmjXVheFKgGfwf1FouhU5vyzzv9tk1yLLB6G3UkAvSG",
  "key3": "YAq7zWBPAhEFEcqUxBige2r5ZBuekxEigndENkQ2CZ46TLjNzTX2snR6RXkThaYrJL6N8Fxb6Ejt3gyDa5Z8NsV",
  "key4": "3agubiprCGkr78uf1rEcYNhQ2trnfTooxzwpL5hgr7rT9mvBDBS5TAw46FpfrDChFWk3SRGb29TgbJhEAkWpxUM9",
  "key5": "2ZoNEqjJ9D76An8T1FaUjXcdep2k73F3nFdixbyT2H6F2WkBe59djVJb6TvAx1wwiWrsBzx3hS86xmbzxzNgGrUj",
  "key6": "46DGaRRzLXgR3gyUNGZUynaB4VWcfFCKAdXmJRrVh57nNrAzatwgVVvZFhZ7KYSoxYnuN7aY1pBfbJHPxRQ1UHPh",
  "key7": "Vo7q6jXZum4YRWDGGupMT6RVvg58M4rLmaB9AYZs3K9CDTwVtSHLJi2kjfy15zjaZved9Z5adfUNHtimXVDnMWs",
  "key8": "22j3vaGRcoRKjWnxDBC8j2MJByYddyzSAypBBxgLmbf2HJWwRnDNfC7Bjz2diQJxd7kZY7vGbN52rJz6dUu6XXJj",
  "key9": "3pSYFGFixHDyP2LGSaxNyXqexro6acC5nRx1ntK4NuCAqiNXWoYxQJXUYCcqjiibp15rQEn5E9M4fXxMP8b6bYCN",
  "key10": "46Q8SfKwaPi4nEjbnSjyFMrMVrNzg6yFXRJYSNU3xMY2z3n8nNpc6kRZjGfNGVdnWEnhvBiP4fkRDA7qdLKegvah",
  "key11": "QUETURbrxKzUQ3K1gg4eoQEyf1PTFjE3SoyaLRcwKtGh8VdPX6p1roGVLJe3ouZukhnNGidLJakTtAgMm6ejcBT",
  "key12": "5w7BCDWaCPTE4jkdcCvSRbnpDmTJwJoZvEUvw5aBWxfjK1VYiNUeW1ENYF3gzzwWdgHQWjmKytZ88CYb9kLgtKA7",
  "key13": "5moQiXiXSkFAT1TCBDymf2uw8LtsDQnJX5wostQJtj4q5fDWJyocjh1yeyFhBJcbVX5uGHKpVw1YEbri3mvYFpVq",
  "key14": "67bboGSNHiaaCX3T8X4ZhyLmmgf6hbtAPA5njaupPVnonTwDXEBpp69UPTAN7mydavDa2oSx4coVRR6F63WVHqVY",
  "key15": "4oRdGGcE3jPqu3YN1iPjCB2hEcMp1EuEQz9dx79Q3qtDxAC3eZgBfMQgvhyQ6bSkgpEFZiu9QHwXKeNtHgk2mhRU",
  "key16": "3sWUzXRDuHf985JiYhManHGR9jY231RLUaCJ7zr5Ymju3N3fMqAHJr79mYeK3L6VKCoSGkb1MFuoDEKuu2M4h1EF",
  "key17": "VQeECWWqoJ7SXaDMgxFVx8QsQpZPGfJWbZxRSSBqPWnyBCHnWRbg7rGoNFR9bmY948BCCnPSEdVMkmWZf78cMrQ",
  "key18": "7mLfP6r4c9fc8aJjXnHzczzmRm6oUoUfyc8HFhJFxMUcDBmG1c9DRLMGNv6Qc1bwa8B5BWNXWY4JQCsWQSf2kqh",
  "key19": "2NuKZpup5NQKFuv8r7wohZ5gUhA5bJAvj3zu33RxokjeuBCY8hW4upnQ6QmsgCZBP2j27hJh4SqLYC2udH4p2poQ",
  "key20": "2EYwn1Mo7E2ZyXgyAAUyXiNQnvEvdQjF7h289xwmopHVvPcN3amD3ueuCKDTuiVdoGrZeadp5KMq6vZXg4xmVaBj",
  "key21": "56kBMKEpqNerN76hnmg7agsuMyrWw3M8xcBPJu47SYGd55mXq8fY4J6pJ9Fu3TX7Yoj8UbjSNNDnk6f8wnHJ2iTC",
  "key22": "5Ax1LTNHgiE5x9bUxgZcSrKCVEs5RJoXgihTcZEGE9py43VDnjkncVY3WtL1VRtz47YSLZ2k1uQtgT4yeGT2HuVH",
  "key23": "66AmApaFaYLx2KaqziNXfnGRWsSdRTqmWSLtYb2nvUHFnBatEoubegPbLhBMFWsdZdC9M5gm3MVF9PJ2ZbCdcywC",
  "key24": "2Eanpe9VXFExFhcmPwHcdEeLp7XK35QmGZAbuydSuDaoyocPbPU8djjbT7fZCLur1DM21UQ8q3xRiw31PiFYmywo",
  "key25": "67ha7Z5PsZpUzoii2mPZCqJNwtT7nbTCqxja7DugpeqxYHNEkds1X3KseiKCMd1oTnBeat7biFVDGjc3YMk5uWTf",
  "key26": "5Kua1iwfEz4FGxbqtY5CQD2iRVsqzQiH8yWJfQTfAgCcSdzdwjdtKiQAcHLdDEbJWDqrQCKPGdJf5kovRc9bJq8K",
  "key27": "4g4LDGL2LVYAiERUSFyvcfE1c3VGNZcCoNrvs8bTdvA9pLmU8Yf8u1A3poGiSx7jfkyZR2T5FmcKmsPyrkmXWbVp",
  "key28": "3fFxTsoRdeKxT8pWv1odgegUPhAGKogSSVeQNL6eMV7gkmT4QmSd8k4x2CM1AVT4r66nYb9X8kDYcYv63d4p9v1N",
  "key29": "5xd6xdomRauhB8MUGvPHTDM93nLCCvKW6jNt4Yc1UiH1ddniEEgNDRMNHZ2yyCb6ey3tQRsq9DBt4v9XbxRkRmQx",
  "key30": "5SFdW89cZ9oQ1WW4mwSJHTkV8L7G2A4QWghvXG3gsZZVdspsrcMBj1EJQBJ1wCQTK1Jg91E2iuH9vtQ6NT1aZrnX",
  "key31": "SSpu8AvkiMv2iSTTf7wGT2GhfShZYjGZe8AVEr2Nf55rJ6cVq1EcYR8kVEj2f5NmBs38D8j4EzxFfP3rjBo7ifQ",
  "key32": "3V4jvkFMrCBdpjp1RWgSHGpd12BHcuNnrjG77NkS1CwyC3qvA4GcZoWXEptz8oUuhnmaqzgEQT95jAMge2jQEUyG",
  "key33": "548PpZf4PCZHsq2Uy1P3tyxkuLe8woa3WRaeAp1TUHufTBtWixSzXGotwnkVMGmTMneYkFPY1wH5ycATnmHKcvrx",
  "key34": "2CV1Gq3Lkqt8DL9PD6uWh5qAH3VrJbUVphtm6VE13D9xXPudkGA72vs6Sehbhw3zamhYyuih4yFBV4jS1esD8auw",
  "key35": "54Lf3KV1Bv5HijQMn4GeGfaY6ygw6T1GuLoFr4KP87Euesr4MPF7UV31JhtYrr63XSixXPS2Dbrzxxhmfu6yPPkL",
  "key36": "4gunwAptEup8PWzGdhHxsNnKFtF4kqdGT9dB2dJwirYf73ZJaGAT4Q13Uwjp2morgyGxBMTvDrqbVcX8KTtkLBEc",
  "key37": "vwjqUv1w6E1PZbWPr2kEmrj7sEYm3U83hNpcDwDsAJM5MaKJX3LUf68ECrrdQPPLThGSGzLcXHrQdkTSVPTx2FA",
  "key38": "4Tx3LiT7XM8LhyphrM1CKm2jC792V9svMBeap7DFDyJ8qUqhWmqVNEdSUAPFmnCjDFBY7xm1cx1mZwhbMsWATNtn",
  "key39": "3GvgPNTgbaPRbN4FPkxkPG4iiys4i2stfuz4B2armrrB2jNC6GFhzMkoRm6EDWTpUAmKA5wbh48N9FDyUPfjFrfr"
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
