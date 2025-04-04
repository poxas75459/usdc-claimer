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
    "5baSrGoF5nMUQRByHDrD5tWx6ujKigzAjYwyK6GagwtVCsNm5dbNbrLNKYwMP9MBw9GrTe6vjGH43ME9tnWdcjV5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m4RSgmW8LwgrM11MLwCxExQzrP1YJciQuCNGQXeASV4ykVMgNgEexNhvEwsSAZjwXvicF6f2zoWwT8C7gfbg22t",
  "key1": "53Pj5rmYGrDMnSr4kVrujCpDCJG7B6BmNFoC6WSXinKcPue2fGv125ELNB5pwSMzk2RndFpwePgc7A3fyESJ6aqL",
  "key2": "3obUAuenJam6rNbCAcuMSJnP52iWmhXwnPB2PUzSxU6icWUQ3C7RK31ruZAiaU5WvrLAcsw9HUsq5cFpTN5pNdpP",
  "key3": "5iGZjbG7a6pt884nEGN32G2ubfqDvCpY5U7C3nG3Un79RGQS6Pez82CUA3hmgdAT9TpLRqnhvG2B2dnMZmJsVqXL",
  "key4": "3zdpL1jLPmSXBFiujHAMR8P31degCQ2gCZmhZYkmATpimvFfHFmGPhXkksKkiBJMRuoMSpPtNXTPZen5LhSZSV1a",
  "key5": "2iiZTzvxJyAKkzpEV8rz367nYrDtgEnYW5brUsxUJyTnpZDv6NbVbhDfNWHa5dvcFVTmuzgC6f2mudkSCqXfM2xy",
  "key6": "5gyFzuDUzd646JSHoGXjJbaEM7d96uda2yJdCT3zn6XiZHCnczWoqQxiHJRLepx3Uri1u6Pp1dpuLjfU399zKq2c",
  "key7": "5eDteSrih6eLJzkqKm2RY4GS6F3A6Vd544tEJXJNEv8iJk9baiczejVfc79hKZQ5f3fD9QzX3Z3bvMsMjcSwpXbP",
  "key8": "4nRjZvi7LJinb46ACn6VueGJc9yni7EZMuSpJUdMbYvZCAZXRtgh7dd8yhWhHTePTBuhWHjKpqUYM86z8PHu7SKd",
  "key9": "MAbVhFgXYpgLbPYajHbeJeDrxB3KNry7nLsub39XFTEVEycMWhGyRKybaaiqNA3ga7whtMRnt8BxLaNpWnjG2AY",
  "key10": "2MJW4tyUL2cujvLsjgPwNXtBzNDtSnFVLy7M2uoBNjvbEuDJeqQYj4ruizUpdgvya25RoZYXTN1bxFecBF8DvvR6",
  "key11": "2ooFmNQK5efAHxynu7XHUxWE9uEVRmZurTCAYVy1XykrNXhWFWzYZyTT7e4hHLDXreLxjtfnfkz2Knh97YFq4iLJ",
  "key12": "PB7qsutcH48QYLdz7yFHvHVBoHaHx5pKjoWzJc4wnL4Cj9aYC2AzDqRdGzh1feexRevvZqYEiSoosnMKUmtdmKx",
  "key13": "bQqWPPn8WYuT4PZSrRsdph5qPR1offtmqSX1kGMmPnb2hFsPcTTAKt777knhz9jFU4N12WR5dJ5XmhU2ZKZnhxP",
  "key14": "2GizWEgLR3rdty2XpLx8rtP8aTL4r5dy5UvreVELTee3EdCsYG9iHiGKcucGFsTSC9SHNsvUUz51FkSiCPB9zStA",
  "key15": "5G8qM4md4Kgg2uxmFiYPCgyL2x2rVB4FhBfSim6RHhefktJozB44LCNRCSbKR1CRVDKK4KrBo65cVeaBS5tZrMf",
  "key16": "ZihAJUHKMTnSF48UV9worWoerkHo4WV2w5UKF1mbHdAbrAXPgCUzD8YvfWKG3d1gbKpcs9uoPHJfVNep32n3bmq",
  "key17": "4xFfiySfXQ17PXwmptSESEmWmNNDBxBhTBe3ZxJo7kWcQ6mNyUxwEqzVcChsGU7AAT4bgF5Z5i3SCnWDABJYoUkH",
  "key18": "4V5UbqmB2oGTSk7E4nxUB5aXGAJDuKeT1JXwgjTpMkXGNQ5prssqWZv6NWxBbLLweG3yD3f5Z8BpCcVSoEvVz5Nr",
  "key19": "2aRSTS9hdkV8Wswms3zGvHrJ14314BBNck7u8BxtheDnp92SdnuFFr7xbwx1GBsuzL9s8EGT2iZo1dgA8bB8QMDn",
  "key20": "5CP8un8tsA4xEmotADTz728nat2uZtyTxavjyfwk9xbGKcdHYxtfQSxt1fT9fAsV9QK2P5TgLQbUShuVhULqt6No",
  "key21": "4w63ABnaq4KJTKvgVxcsmnLeLkFCUHP4HGJMAmma4Jrh6v4wFWSfbThLUHRn8jKTj8f1ZUTsGixUznDxmi22F52n",
  "key22": "3BRyAjMd2EffqkMHPBMKPS7WDDKj1uEBqXA9sGRYwWrXHFbpd4u8836PRCvDiy4bbvTg6tMTdnXGcHCV3zSSiGbm",
  "key23": "3qJxp7rrvksLFhTdF22YR2heth1diuUiZXj1PaUL4op48fhRNLVqRNt5uZWZmnHqBWo4TQ751juqAg61GZ7pYyCA",
  "key24": "648g9zzSrUSd8PbBPSEuRF31mzL4C59u13r5xk49iT1dKgskZckzznFb762AFC8r2v8NvAaRnHhBFg1QxQRmbNDh",
  "key25": "4gcJJEz5kohJMxpwZ2NaUjze3Zrf4FZ3gs4PxnoiaXar2z1JXDgZbVQpDpzkFScWjwfz9WrQak9UJtYk5AFL7tx5",
  "key26": "ZmNsrxD4zEZ2p4SYPDCjqPHGNbhy3PdFhvh4C9utpuZGiVVeby1VRgB26pfVMBGgrw8EwchEjSGCc4shAN5sXS1",
  "key27": "5Nasmev9a52d9uJyXP8T5CEXmjZg3Ued6R7oTZ4J7yL8mEDJAKipeb6vCQireuwb7EmdcoPYANkmY4LYUvrEVtsx",
  "key28": "4ZZm5LE3ReRhbCosnQ1RXdkiHCtVPZr5oEcRknPukL8mLyWJeAZxVnX8TW4bfK3mQAd25Fhfbqxa24Sy3LgmbP6Z",
  "key29": "4YfP2Y4tXAhY6gP4ynmmm2Zd9T4CRjji7TPdsXP9GgT5bvbzPCraQegbH75AWLLWGvVMB4XEU73uDi5MP2Up73xs",
  "key30": "5opzDvwVHzgZaSmf5CuUTfAvJKoQDru9nR7ScsfcAKvwFr6eLw8q7RX9tkCmwq3A1idjoii61XZvCtgMYLuRXj4W",
  "key31": "5cu17L71i7vXcWNs3TWxMQGg4RR85qsUVts2BwP5wjoKWEPM5nHxummH2Yb7mWtyM4sh95waVK4Y7ymmmAqKuPJb",
  "key32": "jRSHv1y4KS5SRGbiXvokzDFCeP8Zj2ixe9uk9V7XoEHEoJUNjVoJpntZ4QYKa9bgfznbfXktD8YfaTwz3qq5V6T",
  "key33": "4xdD17rpEw22YCu2E9BrBSJG2Fre9WbxmcoG9shcHrmwg22GGucCkq3W2bedf6hynB4ChzWcWwfG471Xd6Zfv18J",
  "key34": "3MWhyo2KhQfXahpyEJ9GWa7ZN7LMBks6yZfzMqkK7dDFFXHpvDQLTYnSXAeRU3HShUTSAeLgzFDZeULKwb1qHv8Y",
  "key35": "32EE9AHveYeriFxGozDzd7h6Xy6DRa6DUbWvpKA3DUgP4SAcAufkMdKxYWEaw36AsSzKKKXf6tzWW5Vg3i336Pv7",
  "key36": "4BcvmoixnLqQ1zZqaWMBeSwX9Pk1Hkvg9HdWdBrkbv9vtFj7DLf7PAWfwUqGeaTsZxZrBZHUkbZn9CBz4k7ZB3Kx",
  "key37": "4SgcFEYPkM4tc7f5BZMV8ddLNTu2CCu9yuohDuRabV4wC7RTeS7WTzgJifsBPnePHT1f2pa41MJsP3V44wtuNsK1",
  "key38": "zn8tT7UDGSPR7sRaLDdff6tiNQc4XEg2v32fYBFoGRh1x1oQVZ8XP1oapP1hGArtUVsb1qaf4gGbCT3Hj2GQAHj",
  "key39": "3G6GoNXsaWziP3TNbBcvWKTGKRp1G5bu76j6LJd9QQkwQR1qFPpRopWkyBuDSphFJ3UUVY61dv8L3ajhVBTMRhkU",
  "key40": "2FcfAfHbXq5FfGTFQJq8Hya68kWYsP95dWdKTncw6D5SrGsSJ1D7AUWuZV2eTaSiQHsafKLKhKanSSajRGuUCCDM",
  "key41": "3M8gmGmWBSg4rfqrbW7ytWUwAw9o7nHRpNvpwFEPwKH2SLDvp8LMYkD18E92vx2hAZnwE71q1xS4pCgs2dTDq7ZN",
  "key42": "4vtvytjcsAqXQLvqpJYd8pPoMK9ozYtracvU9D9tdjPB5UFwpWigvZLNxCt5uDuTnGD75yr2cHqd6nYcobPpj9Po"
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
