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
    "66zcYyBxWMECf8mh3NEc1D3EJuirZoVww6HBzpveXHjmWFunNacFcNrbPTxGJTQfnKT2QfeSdLn9eLvrCMM9mR9o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3soXmxCkA2xaGMM9eZAo6XNwprHsH6sxTesvPXJqfEbACBAPr1qe8ZiYethd3Z961gnT14b7p4hE4SD3gEPWe35C",
  "key1": "5zfJVyhG8zspoU9MF25Y51KCbsuFj6p6kZMPLPrruSDRicmbujyNRGHFpzVVPpqJwqims1sS4T1He3TwwhfyesFT",
  "key2": "46zKQoCd4MYdKAd5TxmLu1GCVNiHoe5ExRMwSuJEKA4aiDfhrZ7kDo2ZvjXwmuQi2yBewUsERLC2RKoRpg7hFYjM",
  "key3": "4DP7cuSqoxbsU3SeKdYZeM581CASG9kBWdkmmzpsJFb9d4Hk5TGv154sccrApsbPrLZTMysyFRwNFvqVSAbxMh9t",
  "key4": "gRRcPNntf1erJoC8QENujdySKbzWsysohmuesG5e7EHctmMZJxk4yUAZoec6JNRZXYD7Ra57TJzdWfgoYaZSohr",
  "key5": "4uF2XyQJxYnazBDWKysMgnQFBMY8JaEXQXfrhZLuswLxK9GjjoL4KupSGshjhmuLxNTx8u11LsiXNtzXANLuxMts",
  "key6": "5hJwZL2nXsjCgasrtyTefAYSp1jMxBrWjg1kzN8Ti3HHyNA8vVTSvQ9bs9TZn76FNDkjzzVQABJbsidKWim1b6p9",
  "key7": "45Dt1Drahd7iFmGwiJcU3nDogtQtVkm62GDRyUsNtkbbc9gfHKBXdcZJ3tpBn3G6RkTAWii5ZBPghna8swHoNimS",
  "key8": "4XN5tXf2HcmBUFvTLuRKoah5Bz2MzTtZ7aPRCxZCYhcw7bcvr3TNp7xsh3Kmfh9hkQe4iQV3KjGaPbcEUaHspTak",
  "key9": "3ymsfmMnnxw16JdpziEqofir8uBfHKXWzEGcgcsT1wZCE5oEWEosuBqXAco7AtLTmjDJCGjSGJmAsuhBivRWMfRq",
  "key10": "414YZXRAugm8fR9Rtg1eYfAd31TSRDAS5sUycaYwhpgG2XS15aTs5dVS8WB5sZBLmVMm4qTXmRxx4j2uK5HNiWPR",
  "key11": "9jJCrf9BqZEKaYJkMHeJ3uWW4H6TpN9V4w26HMmvCA6oUs96XjKnYN7hGnPPFNspMmGZgs6uSddLeJUd9rbJuzp",
  "key12": "3AjubgXmev1bRwoiYHz4LPkYxDr6bMyGpzgkhP6dHdMJYVwtYPfh8qyYgAew3NruiXnoHJmTxcYfHWytUSErakPR",
  "key13": "rJdt9j3Qgh4mufXo9qEHVhJmpC4sAypjRx74HFSD26dEH5L44z4f6kj1hDbLjso9LtLE1sP1NL7gpxoaAZwFnYT",
  "key14": "5m4dh2EAKLxkFFBTubaTNDM98UthM1X8ZBC2rWkEpjimqKJ5nk24LSEGpqW67on9VoBtoJC3pRg7WA3uvyEtW6Qk",
  "key15": "YgxxUfLhUJS92EmkHsMvE7X2FBESjdFg6M5RYgit2gqYXF78278N3zYdSbtpaYXtKm4JtjyNiv4PrJyFA4WFm9M",
  "key16": "5SHQwVqipbRiyF7c4XHuQCwPQEMRjY5a482WDhECTFUE3NCfAd1inE9BHqjapP9cuVEvbCxKFosssRa9gVkoMsTM",
  "key17": "5YFUrW11jxDox7VtzEEvFmVnTpJwsfEwWcwbHCMJenLf6BWXBbNLkNgPNeaGBQEyL4omN4ixR36Gq7Lc2FZicQDr",
  "key18": "44i7vbUJ2fWgDAxJeECNemixkSxkTdaV8nCGEDM5GmdSGdz1CTMPqpUiRsm5f12iNtUuwTGRVqh3nSvuKaKTF7qS",
  "key19": "4YouAyepYBMLemALPW1891n6XYVE4yaEgRijfiS4m5ncet5LgE3f1p5RyZNMMwrq3QRmvbJyRnNomtn8AD3E2htJ",
  "key20": "pXdXNRUZeice38K5mEVYWCRik3o6evsnwAkxhy3qjzQjcNJEAHLdS8fjvN76K19siv99CiavPsiPFrHq33f8ZZC",
  "key21": "MPM2z97yyghFZ9pCoV9mVWcFGDqSD67X8T2duMbT3eJKKR6Fke2TVhjeA7W7DBzsjFc1mQysZqZDHhv314kNCEa",
  "key22": "3BqVKNuT5zsPEBZuh6FDku7o3yoe4LNihaM5ZWnmbmQmPWYonGNyRmVc4CLPqAjMmfANiPgW7aCdtff9bjNU4oVm",
  "key23": "4Ks87fAHk5whwh26dngAqiyzx6Qaprm5yvFZ6n4Q9ZELxB25sBdHHMLe6Yjk3advJ7TvPZghxmeydKF8mdT8evMj",
  "key24": "3dgyN1raYqzDspSUutrwjVfJVVxA25qdVoMqDcHaGqi3Sztqjusb7JsEbVTwcWGDPVXzfZV6tVhh637CQSz74r7J",
  "key25": "5dYxSdthB85KHjY65AbJbeepp4FyUayVuqa9nPDcSpa6r9Sqob46HQ8CoivQ34c5feJjWmCCT9mB3DABtaSVCvhS",
  "key26": "5QxBgiAjiGrPUv3ZWSGjHAYR6z6jJHUG4JMgqjys9kYMQqZ5BoRgzRNWkvnCqXjoyu84sjowiA65P8wxCmrMdKXz",
  "key27": "2TUo1ETkg7Fn9X7pVSNyF2PaEGf7nTQTYJyrVjuvr3pFZMZPiFLCkR4hs3keKeTczvEn1vQY1BSv7WTneJWCLAh2",
  "key28": "5TDmdo8iS69voLKsXN3DFmj3ZmJb75xcX2mgEgP9Eev7SesPwWYDDuQPQ9qZDmQKqMq8S9vBDsded69A9S5cxcNe",
  "key29": "2u7ssvnr12VvD1XLFg9trWfWNseWGc9WgV9v1HPfVJ5MWHv9E4LUHAXEfuSUpxfHSN4rCUwF8qZiN7sQikKP7pAg",
  "key30": "3rzfyzRGSNYDdGcjT1kVxCxyaa9CirAfS74yQJtgZRXwEezA8tB4pRCGWaSeNHCg5qXsLY9pkNPdTyfy8tGQ4rs3",
  "key31": "hTDqDd8aRn65Sma9VZHGHhqWWdjjwdqi8dej1NPngMt8QPzMZkZ7hETmrpS92SkCnanZv3zzD4wkRXehmXeeGEF"
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
