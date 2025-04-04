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
    "3MKALxz2x5ZJER2ZZ5ApChJqgAaDgj6BFbEvXftKp157xTJfUkcGRAmu5ZPZDVZj1EcTGSBJhjYrbpYdHfrUGQam"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o5U5GV2qxBy9rVvMAdFPA3HiQP2VRBvyDdXjS2pQ33T7zzCnS68TCc159eVhVUCMxYVm1BVhtLVYPHfhbPkX1dp",
  "key1": "3EchGsUc1h6sHJXMPRw6wN3ypq4NDSJ4zPWAzvBpEzEev7194bUbWLrvMj91cdNhhz3bRQ41oyBH8ucY9tZZmfMw",
  "key2": "28DM6F8AdX5ZcrS6d7bgAjF1mAnaUCpeLPdq2uFRL54rHdcwdPBTVhg1LhpFCrBLXuos9XtVAvWooVTq6CFFKrCi",
  "key3": "49wnJTVKSda3wCETPZP4VhEQqGJDUC7xSfbxBJikb2iTfbJKyQzCSB6wYnAxP2SwAb8BAJfvxu4Gnpu7iMkrZtC6",
  "key4": "AwaRaSHicWcFiRnXwvqSZsx198mqb7xzU68dZ5YBvMVMSsLaXYu9wyLRrTWv5ucj8wrnsHwkj8J7qfZ4rVsjaqF",
  "key5": "4kEtAS5nnemY8qgurvbkX9ZmVXmQLHuXyFjstcCQ5Try4dghg66BfiVfDWvFwPHxWEw7xKshQ6gp6kmnnVQ7pMNW",
  "key6": "4ugg9kU86A4kepCHjNwDsYCkVKc7a7gTb5rFaiobSxMUmYjAEyPuz5nr5oUXfLgdYbQGiGMmLsKrMVkvVdv7QF9J",
  "key7": "3tZ8bYmqHsJhmxx36tGKkDYeWzkt3hVwe25fMaVKrY5FzA1ZH8sBF4WWXANT28U2ZzLRvYpNG5bpXLrqaB4kEQNb",
  "key8": "47TiutxfGoZx14GxfMFHpGefpDqvVVxh3WWa23pxjqYVMqKs9dzcwSBFH5pKcoPiz1kArxeXy1g2Da6ovYM1FhWY",
  "key9": "3WVAtp6KnYCEU8hV4WoGAUnCHdb2x58pb3Z7Ahw4wqfzq13HJnkArujCRYJTwk2hRkircx6kpmLQzR6DwsURyTHN",
  "key10": "5b4dvW8iWERR3ssGYuhzDAEKCRV7CSdX3Jmzb8jLMqo8Gh5nW8iVAWGjXjpToG9k8i5CCLLiBW6H8Rc85Yey4Cn2",
  "key11": "5Rm8KS16UqHfEJcnmqkhVp4a8x3AoUGmTNTq6SeLXCNLrmEkQzhhVyR5AbRNfv1N89LyHSbpte9xaneVJuN2mRQs",
  "key12": "31tLpeTfjX5gdopNbcTWyBP8CxY1UGC9C5P1QfM4YBrE8CT7m7ck8NZryTCWat5pffaH75ZiE4ithb3W74G7ptvo",
  "key13": "RjsHPrHt4z9wGEeyZq6CvpAtPujY5hdEtMg7PLY8Tysr9MzrwniBMzXnRDYtq4EWuiw5YBazv2EUvXua6kGn3o5",
  "key14": "633iZ8PURK9ooRim6Efo55CusP76kmUahiDxPzeiD1wm5AMTYZhLppBdVxohWodZnMzr4fQkd7PPtM1W2USoxgG5",
  "key15": "4nxbPeda2xz8UGELZW2ePjZxx4hZr591Mwond1oo7a8UAWzVvo2KAAZXeDgiVtdBQBBYcZBNWe3iJyAnxiGHY3wt",
  "key16": "3nEBr33NeDkRXWhZKWmJMLf2DxfuQ1tS3eZH76WNSuzveZNBxcDzpzzWiKvtYzVgY9vfPqnaiJ4uB5aGLiFFp5TM",
  "key17": "53YAYT9b8686QpHtyziNgideLgBDgfKB21MiwNEinmu1Rr4azvAraij9qefk2WqgMFJQ2mxW9iaszPTM9LFNZ3yB",
  "key18": "4tzJsTLhhbxfHb8JuTVqeAYPbViyvaR2Po8WLVrGS6rCLRBuv8RoL16xS7qRCLUBMGvzfnt9Awa8bSTCZEnzErLi",
  "key19": "4rQJUdZhHqeMiQdyJSJcPHHPkYY315oPSwBb9hSb5LeeNoxVBC2naaidFrhkrd3x4CajMa4e8PX3G21CcfFd1k5v",
  "key20": "36uYuGLoNpTVEnNBsgwedLSDRsU3pg3phaCbXH6rFtBCyzy6JK4bnMoMBth2uaEJ62RGaHYEc2RBiin4Fyz8GYRJ",
  "key21": "2myibuDEMzZe9i1cPxsEyVzB9oW47d6g3sF5yBsinUy7MAyeMqkGcYXL3fivohV7JdtXefejWh6EKjMqed6C7XTG",
  "key22": "2dLjjppvzSDFxhYtSeBB2P2PtJrvk4b3Yi8ShyAFKUqyqfVSfEDo8r6yk5KFea1ZyYBz6gzHhjUhzqHjdZAF6WNW",
  "key23": "3T91czXbMu6V1rnqqiMuznEd1JtkDk3wHUBdKSoPi1YDJztHwHCx54nA7XAQF9BZgGczjsV8wk6kN6QRzibgyTFA",
  "key24": "3rHo5QGVjdt1jXPyZayun1nzF7WsDFp63oBpierX1oJfno2wtSMgsNSg9kZNQnSdG1owzp9okex1gKKLd5heKGrM",
  "key25": "35RhgRs6wpw5gL8BybzEMfx6o8ytTs2T778BFYsiK3MQj7Dw1Uj9paq1gwfRShXMFXyzHtNzgK8HDDQaKhKDgiww",
  "key26": "2qa4PmAFopVdsuNSxnQ9934DjTXfn7pHq6WVNJtJaQuuvy6iZZoxp32f93KZnRJru43nRFEzo3HwbqmMiFsoTN59",
  "key27": "3DWr6CunEHAiePbNo5owcsEPviijvNsPyfbgnfy5TeoNskwRwjXm1KQmEV9hL1RpRTcSTtCZhGH3b9xrBNyTACwY",
  "key28": "4pedm3ogH6UYFBRUQnXWpx9GA8qjHetRzAeZUd5hATo3TarW4wBxW7RdKVrr6EhsEaoLQ5w4mo7aSi7eTXwHC4dL",
  "key29": "3iFbA33afVYjapDS2n1e6Ykr7pEys2Ax7BaECU6NRQiAiPA9bLYLczRpZWeGz41ZVRotujKMpgqAWyXjku9MfQv4",
  "key30": "2WYHtAfub9a61SbWKj5yDtcFGodsqEqUUeeqJEHNhHSGsHUbeY5YqCjXAVahf1WMx4ob9f2dot4fPmgzvmWFtFzf",
  "key31": "3DEy2kXTazKYTbuyfVJce6FJA6XdUvbGxApQz2zn7XMMwxSF7PecgAMZDkbYrR7Rr1zPUe3oZ6NyPzqLt1E23FnA",
  "key32": "3Pz7Uu4gPZSrpZq1WL1PpMAY5a7iF8sDsj3XStAxPgyS89xPL5kvZCCurfoSQJauwvYPBm7zHHCKWsLG4abgBocj",
  "key33": "ouey8WRqMd3J3LiSRDAodDjhm3DJ989bAiSM6fFsV4wqkraPs9fe4m3wg5qYEQKdToUzGfVW2A2Q4By7bmmWuon",
  "key34": "4MaX2uzny138bECXoovAjZiD3qgo5ofJmQoUPKvPcKMikNKQ2TY8yqx5iwUNLNVDyUSfjDoxz6azNj41S8sBXBeU",
  "key35": "4o67xWtA1Ukxt4BNDXqDkBj9p2hheHSrg1XHRxtnNEeHDrCDeURJSXVXtjPSZM5D9ZDb82da2CitgeUpaPwVMuQ3",
  "key36": "5PeMVZXxsCsb5CHwGZkY6THB1yQzW7JpndLs1y6Qkz2zdC8kUT7ximQ3AAJWvQmB995MnSwc9ytF25madteJ26uZ",
  "key37": "52MJo2tuh7ULk5wR9Hnat7BU9wNGxuZoz4jeLNN1C1hNLu8PkGSZvbCQHmWqu3KSvUucRzGwvD58wKk2EzPH2GSk",
  "key38": "5UjuTgSWU255qr5a7XCKz6eyjRiKEhdVgudJHnoxVDEUZWpF5tqDCmj3ZGmFb1AyxtSMAjtL84oxpqb6gLVWjrRw",
  "key39": "2AF8fZYvZa91GytfiV3k4CJjKcr9Wctf46dogFQjkM7rNpJEgJYDnk2C9mgdNgvKBwNbK4yWrdtEaPf3EPv1XZ2V",
  "key40": "5GeZBFE1btqcgFqCJ5CMfQdg6h2TsbBC3mpVuifJCb7k1bWTL3gzF9V5JVhdqxw45Bsza39yoeeLDTfr64ce4MJ3",
  "key41": "7s3inN3pXoNPdrYiyPdNCmSXuPkX46BdJxZUaSD629YMQJ2Kkg1VhCTrBLKxLmuer6xdmaDsyx52MibdTcuENb9",
  "key42": "5dPqT6fHFpE3fRMJfKnU1cJrnmqKnRJEHAo8wDXFFBiPic3SG2HvoeDUrNCxGt4dej2RFncnbFnePJJ3UHD2tVKA",
  "key43": "31kftjTt4YuViAXUqDdqqNso4VAzLRDbqHLZ96PCJ8h9fMm1iricKWGaZLpiwbLzKvQrSnVi6DCxCFa6vT1gWEcU",
  "key44": "3LFwpbpF5WSBod8WoWELxfy6yYohMuYErrZgFqQgzZKRxqyse17QppzxPypEmaCtbdKCanwzuDe1DLeJqbUAwzMX",
  "key45": "5GwfbiVsE6wjcDYRGBmUbi12KCpYZCz42H1T3uxVfZYpty2Rg8Dr4ecjAQeWHUmPymJGTnPnPKhv1T1VV6dYVUTs",
  "key46": "5JmVwdwRxTYo17L5cezhstdUDQuhpwdhxcVvoG8Sv4JoZvnDojzrVu4Ua7WgBVfeZPDha1SUstJTUwMBJKZAcqe8",
  "key47": "4zRuVqHDcJWtjkzSKGG3KWvH9hojBDjtiHBykkDiqk4h9LsFBcs9GLoTT7Jej35oDqveZgesrZuoSHQRtHdvTkK5"
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
