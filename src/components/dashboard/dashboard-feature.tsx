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
    "giHFsiAh9X7ZSHyeAZHpyYMHBgyjZA3DmZhGQbhcx2o3vTHKzexWE1ZSUxp8PcvnKTLQQqfK3ntc6jUUqbKYN2b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RZfLEMGzprGAcoA4ZRuyyBAa1cLZauL8hirJYwa6SWNJ6mDF5R766dS45SGDrAUCJoinMro7uJCdqmjBDZ5qrtF",
  "key1": "5YgcS5MoXnNaLafCUu5Zobgg2eywYHQBzWx2f8E1ajM1JG2ruZZ4EKY7ZBHLZsksaNhfc7ZbcoE3RwsA7rE25CYG",
  "key2": "65dnsxHcbUbHxNmpXd9QXbFTGyHSTAjG6eZThP3EjpGFrmWcTjESJdk9VN84U3LomKiSPZSWUK6oo6y59njRXXKq",
  "key3": "5vGyyNk5N2ei9ZDErwWvBR29kEdHwAaokDQ9Z6h887DzHF6K7hBVUpAsJmk3TrhAvc5Dj2d2sN5J3dz4CjEFmK5V",
  "key4": "58nyYSpAVZ5X4BRvHSEZLexFho5mrdQ2zwWW3uFji1HnQbvtk9p99CBEbokavxVdLCy2RhdGc2JNX37JY957zN89",
  "key5": "28mbcfnhm7cS1zAjjWPuc5Eki575Fu4W69txWpNjCt1NYuk6AYFVbTEg6MMPpUZS7cSaWGhYfM469M5fpG7zHQSC",
  "key6": "5XCaQax6x35fvna13kjbdSdKLDoGmP4CqcPG74TXeU2ELG38nVUTWLnvtmVSR6wKVEGHBjUYPqQxKKAzvsLZ7ZUP",
  "key7": "Je38Br4ZZXLG95SpWoF98iLp2DczWDiNPnq3HCfJFivBNXJ7HiDtLGMyMdYykFNuUiLobWc8MvuJgcncD2wo9wg",
  "key8": "4ZzoVr9rPAguXJRvaNQfvcTBdAtJsFygUzzeSW2892GZuS3MVbmyp1PLFgtsswHvGyM7Jgv6YxwnrRvR1uUB7rvx",
  "key9": "3cg1NLmKjCGiYMiwG4kBgJbtWV4tD6wjnbLdbinDxY96DtiFqBwpAbWUE6eDkrkkviQvn3xdBYuaWrWBvmcADJYb",
  "key10": "XUubVnDZcfcFsN34nVWRWrsSFC69fiHCAbixn3dTy3BnANbmBPcFXV1Pzp8PVmMhoxBPDibjAZDiRrog5WxL2c4",
  "key11": "XLs1x9tpRfr4e2iPg5nFt1xYHB4FMkALE54kAFrVaKBudsDRrrRpGSEgghifDaQHKRKoqMksSrreCxTVqS5PLhi",
  "key12": "3kkDM698hWAnUK8bLmAbHTAEysrFGt4MFRWYLTaSt4q2voHdr5ASYcgweutj8K9FkLsxhTLpFQN8ocefHH81nTMw",
  "key13": "364Wof2dYdj4wB7vbrifytuvrpGwNHW61jxP6xf3Fc1Hr3sP51YC5ffa3gH7M9SjxHD7cwkaEe9zn4kYYBs7jdkb",
  "key14": "2CvcMW53goJ18TBKQED2rMuZLUYR7PyY1q26J86gqH3U9buvBQ2hZdNAgop2ZrU4S9MFdVsNUMi8DqNj96sXF4RU",
  "key15": "5FDBD2gt2Rsm5EKLaKwKm1LxJxGSoecY9hYeXh6wSGvuXYYgs8vgZw9wvfQCERbrnDx3x6Su27NE97L66H4TtLqY",
  "key16": "3qULV3qhNisY7piJm29aANBh2AAqm6xaCbWaiKaJrnrNDpRmbeKLwfcsuaWancRtj3UXJVsm2T9To3352FvfMJ4D",
  "key17": "5Tui9NQJ2UKutgoqUZwECNLidhvtM5xGHC916HbquL2FpreBamFGza44NGN2ZGyiXyJDLjZdvD2LxcFH1dqHyVkn",
  "key18": "99C4jaHfaXiEZo4MdHwkuhjDFZLe4fLvrG1s2JJUxbrQ73kxX6WigoApatkDgDMktVAWgwCD7daatcr5kDc7rog",
  "key19": "5oCWvVPdDGfm3oiZEgst8qVL9xq4peQXC1jSwxB9rcEJssRkRThS4HCfqzraRPrqArn4vshdznkBpyXaG8HYpaF3",
  "key20": "4vaWc6DkN8veRZEvFHRJjsncqoD79kuVTEM1fPez2QDpiHwpmgQo7c7yDeTJpV1RzF8Y3QweW6i2EK5sEpZ8pSuR",
  "key21": "2q4UCPqPR9o4GgDuDt6qmfNHg5PsnJkyoeRiNkPwPhT4JAWWcmK6apREJTnLPq38srp6ZVAM8NYmQQRqeGciEpwY",
  "key22": "22sSq5bKArLGVEffb2x1HM8naJK9mhSfCSs6v3ofDkf8gkhp4f1ht4dW7XJtrV5Kd6FrDYY4oVsxWyVEUqjAtrCW",
  "key23": "5cdnnETXwPLNj5rXYQbthcEZ8rFBPfZoPuLvkiUbd4NqRV9yRdgTGHBfuwPx6NrsSW18fCzAeVqoUboWhoGVaZHV",
  "key24": "5Y7C6R7Va6FkzNgrWWpSG62r81kbGqbNbMgLD5rhkvMuoczHFn3T9mH9FGoDyPAs61VrSd28WoYGwzuFXoh1u6ix",
  "key25": "2YJwUgUTLRXrCtrsELXk5sNQPKUfHryzE1efPkwE77dNaumt5e6zyvkurzcAABRgzshXCQSvaWYcr3JzVohCzEPm",
  "key26": "2CWEb4Ctyk953YWHbGyagW1i39aFVeaX1AYtGRZuWk9BfipTXbrGtTQTCvBAJT2qUNv1ZZksNhXZCeho7s1fd1sP",
  "key27": "5AHLJqxUipGn17cHyeGYDCLLRCEcHtFGoPMVGLR2okU2Li8WyaMbjJfsP9YkuSD8egnXa4qzJpT9jcuSa8L67quq",
  "key28": "27zxbzQwr4SXbt1fbDL432d8SGSpERwTJu9gHNQiciixWy3qnE1mLcrpLsumudhSGjpoNsKH8ck67nQdoJ24a7xs",
  "key29": "S7SUSBZitfHxzAgr6w36WBARyii67W367htPVsAGzbARffyTCyKupUaNEWQCWCbKZzZZZFio5ScjayBzswUkqKh",
  "key30": "29k72BxaAS21kGQnK5NnKLVMRVip29csacBHuXJcLftHyfUb49ndFk1e13szzNJ4w7TqmmCvX4baqSre6pUMfWgX"
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
