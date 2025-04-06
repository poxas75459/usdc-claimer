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
    "5sX5qwg3fgEi5oBD5jKQYaytg8T54pxvHksk2za8QJSAunF1bWDUQG8Ab5nen69TNnbtQ83haJaL2rNgcqwvUyEm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63GD9syJucixahLyL8M5bgmqfQKZZHDUEraE1gcdoxaAQWWFNFdeay5WkyU7qhTiihPpdKRsy7ygaRTseEw5moRo",
  "key1": "3QU5EMwJNB9EqGEJS3vvxMaZowXq5y8YiuYCRFHGXdf3NAjcD8zKLow6E2Kf7fUgD5KwJFf1Zy6Cx3chQMkxTaWB",
  "key2": "2SQ6MRTYer27GbuzPVkctzVTTS8Ln4k8FJGXhufP4E1hMeeAAP65iwKgR9fo45Ni4Z65grwhebmx6chrwpbCSDTo",
  "key3": "47XDihxSs9psm54A4VjfZHDz6hVUBSHZSUtzyL1dMwVvzxPVKW3ySmyqdCHDrXB5vmVLb38nHYBGv6jLFQ6aFrm4",
  "key4": "2oj4umndm8XR29aqaexEqbknNBZdLLPDufHEnzc9LKmhEg9TynP5gAwqwS1g3NmfXbRLQbuTSMFfaeKjp4MGGehb",
  "key5": "3V7UKNFiVpwCKDYX99uJrrUgEoUMz7WtsjGDJzY7C7ro1UBjbMfybFpZnZRnMTkZmxifWtJypK742xcFH77KtSTT",
  "key6": "4DajDXrRR2HLHKQSAxzcKoQSvHPh8bbuSrrZzhptcvoNthEM5CMpr8wwB3akGAC64WUnGKV7t2qp7NgBG5cMFcGf",
  "key7": "2FgwZFENVDY2yzwf83kRQUCxS7aAgFEXLGSBe3NHWUsTn9kcP3aJjsMQ1vWDpe7uBaCYD4zxsa6xd8uUQ1L9iUa2",
  "key8": "4AkA8hC3kw62Vhh8tx7E5kz5VDLuFW5D2z4r7iXEvYdKsaQNRG57WAZofPYPKK4KbdfKhRmcVxxCuzpsFBZnoFqu",
  "key9": "26HdCzM9QoEPkvvnHbERVm5U9HMr3NR8ReUGyfDB9LCT5R62CW5RkeRaCxwDW8k9CARvHA5A72nc4D2uSBRKhcbC",
  "key10": "2fJ6URR85Exx3tSvkDUWg6oYs1xscXFVtbXxyxZYWtsUmnEYiintsvabx3zNWCVAuqgiDdwbNaYwJHtp8RSv8psg",
  "key11": "rNnCugPiYokcErHWpP1UjNBU8Tgf5vFz2HtvVV3KBzByCyQNaNYvFKZmLTWucnwYHZNZwPSxLmeWihZhXQLzQp8",
  "key12": "MhD4Fxpn2FNsXusDMkiEdehtLX7qKgzh7HHs7G7S8LRXHAtUFjdavjvFw5K4QxJmABmRgibKaSixT6urYPVatKV",
  "key13": "5T6P2zdoH177boDCZqJrYF54vbYLDXReTFZk7tetDGHv2u2DdUW1KaGhtzcnbuMArhV4Wbfd59mAc2tC7GHEqaFX",
  "key14": "2PbThs6A8wfoQpyeDaJnaQPyqkUVdDKRiVHqNG3b2xkkMHWJrDtoi3a7TaghtyFgB5qkJtJnsawaxoLY1bfx8VPS",
  "key15": "3VBEPP5jbiuyLqVCVVo5drE47XTRjXtLfhmLh5avCNiEi1arRNK9pwzpLsFZwnYCKc7WBoYFAs7R8ae3v1gsXV8k",
  "key16": "4VFoDnpKJUEwbPLUsy17z2JEaJeQ7NbyczMKz4kGEFqQab1VbQe7vRjqCjrmQRcL2HLhZ4jmuy6xtKMJFaTMUsur",
  "key17": "2aNUCzz6SJS3FnKnL886zLRm9QnTqdrnrNB9fcWaqrAnmu3LBKeW5qnS3oNwVBs19Vb1DAMS2Rysxq6buLFgBhuL",
  "key18": "4N5eE6ZcovepeQpHHmPBqoVsEwUhcB39f1s2uLNtLTrwSLoxUdMaDSQ2DAek8mWTcNiR9Ge87HYmkvGkmBQRkmLT",
  "key19": "94MpsGpLK1E2kYFtjcBg1LgcZbWwv31Qz7DDD2e4uA4g1L1Huxzs9Tej7rJXZebrcUPd2hscxWvncfXV58ZvJRQ",
  "key20": "4ZeMSDDKE8rCN8k9GvpBZGdC6hMVP6oeMCL684G1QB5ffNkgnbmr3EmrGc7VHFrKaMKEGU56V9sVKAfTK1iMrP3p",
  "key21": "VXP4kT3WQ5BTAyyqyK3FJc8eJVNA7ots3Txv2digHZW3ueoevzUSQQQDEymdLNjfUL55ZzFSqXAYtCozyc9TtwT",
  "key22": "4hmkTDdyEPr9RG381i5gxWSDAv92pbP4D8pppid9T4Kr7KCFpVWXebT2w7b5BzviXCv7Yvsj3MemgsJirhP6sELG",
  "key23": "3CA77GvyCjer38bCf25KL7PNMibuHP8p5Tfz73sNN2JX1afUURnGZL6rbqsZw6SoybfLAcpQhCYon2RbX1B9RmYr",
  "key24": "49nzGo9N9ekm4PZXJbTjP9jVuuvk991q62bSGhJc1HCeAQzPYrp27D1vwqBsLj2BjZMt3ppuDD3WvAXcNgJ7erug",
  "key25": "49FmyXCC8LrSLwXEWZ7Q7s1qS7wjvK5W936iYJbyHkEhEuWceFVjarAnnofX9tKw65ksoF2PjJEyeES4eoBgr6u8",
  "key26": "4vvZrKajn3aoiGWXwt2Wn7MqLfA67rgDZaqHo6AwFMhYG2qrFBZgN1d6pmUHSK1zyJXTkrUEB9ecy6HkYTNi6EDx",
  "key27": "3WTpRaCKzqTfzEkYJVPfP3ABBoWJx6rMs43Yh23krcdHgRttQnVQeurJpDDvFJBqBNL5ek6cNvC5MUzyevxYk4dH",
  "key28": "5M4wQ6WPsKojT6F1EHhuV56qMxQaQSt2dEoojirgPetRKsKeeJjicvgQADnXobGLP1ZNKn7cQTuSqww4YaFwSN6T",
  "key29": "qVb7YaJ4UKipT7F4qoBnCuQoHQLyvL2Fd3Uga5ZvPB7zPNy2MycRqgUvC3njSycgJUBUm8TWhjW55NpMDcDYxLw",
  "key30": "3QdZYEdnGd4efPdGyDgHKAZhyRudpGx6eEmVtph8J5qwTMZMdRThHzJ3vxCX8Vy3965TzpwZcGQ5wwf1iWByJo51"
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
