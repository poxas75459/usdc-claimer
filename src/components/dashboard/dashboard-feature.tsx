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
    "JDrk7NTS7MZELkPf1YmhakMARAgHbL2jmfzYVErsv9YbjmpqE9bXY76Gc5ybkUuAo9p6AnVr92P7ZLqVPVaVW2t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eqa2KFhzKsyvKNXzvhb7Uwyjmcv3MJ5Bf9cgGMBBk9rCUSF349APbdFQYqcP5kzmnAUcdaVFP8bBWUq18f4h8g7",
  "key1": "sHdfyZXkkoMWckX91pXqhQwgTNNoETqQFhoDHnYrk2vbBKNZcCRyeXXqjEaZYHnd3r16MTMgW1m4k5Hv8V6Cj15",
  "key2": "4N1zF4MD8V6XPNrAJN7T63miM2pQHyZHTT1q5aitWPMvtaX9YY2DuS1cKghnBgmS3PooukQXv6YmbQ697BV1uNdC",
  "key3": "3qEXV3cvYY5FwS62T2FmS9yvbeCXsQSAkU3Y5ZCLMUgEp9iwf2eaoQD26uBT5gTa6tAgkJJVMJmvPK4ME4igf65T",
  "key4": "2DJC2yHNDgY5erGX7sxnkLTUf5Z3LQ2DMcd3c3DF4qateSLtAL85VAuLp9qrX7iqy1Qhs8KAaSVNRbCJ9mvpS9YY",
  "key5": "524JYVLocVfWp5bSRYQHZyoAPNhxNgbDFXLW62wU3sq6VSvqWmE6qFyS5yYZSDtT3YKpT9U5qt9gsQSDJRxJuEss",
  "key6": "5XmkqJhzcoiGivzqF4QcRX6jDfLuxzPF8N5qj2MthjCnxgGdv5D594URM8e4EtKcHaDjYR6SU1jCX1LBvnoj76mK",
  "key7": "E845r7Mc1ZGG3ZtukLTMz2gK5HrurASnyz41ao624vpwhHZK4WFW1MtSGNR6BRKBqkSTMo3t6rWHLZ2iNFoR72Q",
  "key8": "4VCoVQhiMdiLk4FM6EGTgRiPwDEmiuhDUe8KyByc82peywMGKbnKaCPPhZYVmCA5jU2TJYWoSigMMmqHp215vcVU",
  "key9": "DLfLpjYdPpsSvWLne7XH1YXbRhmyyiHvF9Ruz2DKm67YTwGWo1b4A5NuQqn5wdv2YCdiubn2eitAAzLadZA7pfs",
  "key10": "3588EmhcFEgXDqhi4hy3Bi864VbbQEd8uS9ZmfKQgaXou5PCSxcpCv9pDmUWXe8ofNHC9xMZdg826sUuQtzDozo3",
  "key11": "3hALHfWf3VUxMiqFYUKfpWP5oBGGQ4FU5SEsrdstYybM9zaSAvuQDtHw1WBpPf1VsG3RcuaWMW5Q5VaoVbME63QS",
  "key12": "3sCRroY49Ez8cWxCGHVyrzfzYxr21eA4HixcZpwwPWuJxkzR7hQ7v5X5rcG7NnijYMkxNcP4r8a8p1G6h1WnTxAt",
  "key13": "2x18Z3DFVbQDE6C7SaVzVGS3Q83tMbF6WRfjFoCQk4PaFXhAXmLfy4SQuZd3kPjvRSCXYMey6tHzgHvrL5kY7zxy",
  "key14": "64n28unvLeGDDafXE6RPooxjJSMtb7q2wmTbHBMZiVBdyELzcgzca37pYvVBgmurdm8mERoo7JH89wRpY6q8ZrQM",
  "key15": "sbCqEqLbjtQVK5f9y8xJbmusyYpurMKdn4axJvB64ciKdvxYLGd4YCAbznCi51TeU1NWpdd9fDkNnfoBKKsGDn1",
  "key16": "5Pn8cLjEYjSypjM8unSPwrJ51LvaJUK3BwC9ipME9yjxoi8vgky4dYc4ijsfFjNvXido1spUQMT5eV9kCr3VRUsu",
  "key17": "5o93QBjwzq1Sn25nEvPwrppMXoNBfcdtGD4cdanne17VcG5tu9om41thu5VRRXSZJmcU3oxb5H3s5Vo5xXx7NHrG",
  "key18": "5FKTzSmpWvTwzTr1LqvvaKLRTNVdPZtpoHdmJRaq2U477EcET8gY2KLrc7rCeFTGD1MgvwXkNYMsGKNeaPju2Ji5",
  "key19": "hhznwxxxh4m5FNr1EgV1dnpnDMnYKM9sicHNfMBUndxxhWPz8G7V4kqR4Nh3oU731SqKDrUjJKNd1HaXtLd9udx",
  "key20": "43oNw7tfWBgXn8Ro2YXAGGG1UTYGh4rsqwEqBftxTbwJ3ayysjtZVGrv4q89ZuhqQKtzWpuq8ChJQ7adnkvddJbq",
  "key21": "27x95E3R3k35PveQkPkpokFeue2xxPBdGoaBLoVFLddoHGqF7thDKxQLCnptgPqP7orK3vMLXrG7rPkUXyb5QzHw",
  "key22": "2XwvSpfZiq4dPL1qX5kn4GPctVfH2a82RrnTkBg27bMfFFUDadruobuQaVqDLwMc2zHnMTKbq3pXb1kVmxj4fpbx",
  "key23": "3eqxeUGvQbBkyRVPwLmD6Dke1HoHVwSn5mxMwJ8JcGai1VvBUzVFXTgXSyZP17yR1PukLeGzzkXuhMNvGhyD1WiW",
  "key24": "2hbNZ6jvvSNQK1SXEcCZz5Agdkn5QibSfnbAw1Scb4yBxC9hG1dSJaXZzDhNG7usKyoXRr5L7dyZZMgbX7otuwKs",
  "key25": "2YRHPJM2n7Gdui4i4MeQZBjLHxCwMq49Nf9PiDqPpvmF8ox3fRm2Ss1vv7NrLEveA2riksJFAKfp6TYTXr6jmBGN",
  "key26": "4gqDiC13cDUonvRPXvrFLQUyiwCs1QrknvDF4NswGGSM4jAJe6LE8YqG8canG5o7E2icHUUMn6GetKVFJCjvXVpd",
  "key27": "26txv8Fpj8ZZiJ9F7bbPLncHfBPt4nCxuipi4frjpR54FtAbsKEZQhBirkF6tMp6ceU4Cm5FTeLVzH2NKNFvakJo",
  "key28": "LmU47WwBGRU6pzhyb6FJqUQzmNZouBTNtY6fNX73reZk26iufxmWj2tRnRaye1SR724LhPzzYTSgn2zd4pqvAKy",
  "key29": "3J6FJuEuivqKHBAqq95CPR4ZRA5sanxrkZTgA88WtYTrt2hqBgz2ygQC97iheym9gMs4q9KZSWFNJxDa8mEno7fq",
  "key30": "5koyyTuGp352VKs62qt77Ly1VxJAegD4UUoCCtnX8cmJGqE37cDEnPYia5eUhAqtGgyq1YyhrixXaWhcjxrQEyxN",
  "key31": "4GP2RgMdQNojEir8JH4V9WM4iLNZSRh3gcavM1mDrk68DQpRku7NmFLzM2DGzu3XjsSy9kVproavyk2Gs6mzkz1c",
  "key32": "4Wry6nT2Aem8QA5AzUDMVgnp6c4xKMieoEhBceeVty1hUi8Zfhyf5nkTcZejc6U2FVYExGQQVaJMzGQNWNsCpTZz",
  "key33": "2mvLfxz5GjT8JcpEmvttKbzjwgWAihApiTnHaVERg837KT13g9RqVQFXAztT8SZbxcYsHerKXKf9rB4MTwjG49e3",
  "key34": "3XcYqcDU19woNP9pvzkxqrUA3Vjd17ihjGjLeu6qrCtZxZRXdbBfEjJeY55NK2eaKoQhv22md3UEKWDLbHfGJzY6",
  "key35": "JhaNS4XrXVwe4Zr9ovMFU1VwdRhAeHJ55Ga791sizea5csGnRAUwME4yGVUEBg563g5RY1KUCb6SBrfH6unWKY3",
  "key36": "4peuEtN9zGh5Zo1pTTwv7GVteFU4YqxNCBRvgfdY2iCdxaWRmHr5C9GtKE1EVM4fF96VqWdmrV5kW5iyskcgrpwW",
  "key37": "2gQQ2d38h7VHktEo8icmVtCBBmPdGStquqAins6ESm1dZ18dVCz1pVz5rQzA8aM7SFNvJapWwLPVFQnTdFLdm2hE",
  "key38": "9UuoV9JXfvru7KugjL47FnhZhjbBSSfkR2YLNqThcNN4ttUs4zWy9cuKmGWnNrA6MyMAkiHtgdZsfeUVHuGjZoU",
  "key39": "4fQUm8hfHXdohhnihEZevM2sNwmtQXoa6b4bx46r52xWm8aVMDPsjA9cjnMmAyWQKvaEEZPj4ZWudTmFDkZEVbka",
  "key40": "2KEKLXAsaE7ZzSdYEUAvbnRwTdpL1YkTfK6nx9Uk5LSfsNSd8MYofH259gXt95bL3684UEKUbCbCppqV2c1SL8jW",
  "key41": "4qPA2AdsHrWd5iptNtZ8Mdkzj9ydddQ2eZvDzpeCYZ3woDQEtk2tcCPmAo3m5UyP2GJndLziqbGWK8tUZ2UkFQBV",
  "key42": "53yLtVQ5UGCm5FrPkP9zJR5kAngiyZ8S1NKTMBUZMQLnZTARC8HeSeDTk9RUGM1W8CPNMPbQjshKLYr5iR4Nc2Ga",
  "key43": "2tiKqhWgmZs1X1uU5CbhRcKioKs9V47KNCERKQcAZmTcZWdayiG5WhSWprqE1cZBJoq3Gzi65LJfGv6aa9UNC6MG",
  "key44": "63GYWSxByZ4x2haBy6c2UASWhCF7gg4JFUbTh9qBFZg3iHb3oHUrR3CT3zed5pk55Q6Qq8A1AzPaTtds4pRDMPxT",
  "key45": "3xb6cWDaAwgSi2sBG9nk2z1hb43iE7yg3qxMtqvfA9n8ii6iU4PQ9rt5ZRewcVYjVg5RXCE1wf8N3oAgiCvoKFd5",
  "key46": "5eUc3aowYsM83bnZEUcuhohTo44Bu6hmaDTPM43tU4sAxwmfxQjuSzb1bvAdw61VXmgiurTE5oaB77AFL4GWcCeV",
  "key47": "3jyj7BpSEZqp9BvFVjcjtk2MkWMBazEBegFtiH1JPyoWnSrNQr4tEDx5fTmD6zL9ahs1McKt8XpbhD2iyz53Phtz",
  "key48": "4WjB2VqB3PQ3c9bdfAjVm15f7sQnR3GM8Xe4FsCvZMFhtQMogxj6unWyaLD5k9XL5okcLzV3mYXi8GVUb62VRdcJ"
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
