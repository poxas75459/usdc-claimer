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
    "63faJPiEbodsnsGPdCywBKghgzcBoBHPS4jHRRdsUPECkKgZvre6HprQuji5iXmm6m2QayKdXVszTNRSMcgVbgSW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YUB67xYvgR7bF9GDvwPeXUrSui3VMHqXgAv7diXQncknmnNbDaw4xJUUixCDj28p7NbakAjkGQq3HaAZixYHUNr",
  "key1": "DB9VnyM94Bq7Hq5bo3wXK6j9ynmupnkGPCYDdVpGepTM2pJ6gBWaour8QvS3fhZJ6W99tv2ubZfbZhmY4JEpnwJ",
  "key2": "3KVENxrtqL3ausMWUXhf33QA2RG9kcPo2mNviYsEnhZgNeh54wg9AbPh44Fis5VKKx3mgeiWAgAJooRromqgDW3v",
  "key3": "3DTpegD62NBZGqW4GPcbyd79WPAAM2UhLpYUcs4veemRaV3FuN26RByKNT1WdB7tekUhYgNrjohwMjYPyezTDqg3",
  "key4": "3SM3UDxUyvMbBLM516gvL1JsKHXR42yYTGVorMfHHF5mPVb7Hy8UCHQHDKRLwHb2kWAjwCNGyCkCCQtTiALz1U94",
  "key5": "URKYS31MDEBDxJD6mnVSPn4kQ4SV2gXpxbC9QsKc6RARegir2KvLXy7mxZKp23jDSoTqphCWCpxsVopfXeEuRtd",
  "key6": "eT3uJQmxv4vPQH7wXbtMjZSEegjg7B55jVCPJtTAgDQptYoGMmsTGouULZXPMppxjrbvCvGNgYMr7JRfHxbTZbc",
  "key7": "5ySWyePwmKoeryyHnpoyk3qgmCxgzzK19rR4nUvrc6V1RgeDKLkE6GoJegp5d7M4qUBpXBY65FoHK7P7ny3p54GS",
  "key8": "ZKa7qARLL5wCsQZmveFmAKR2Fhiqr6UoMwPkRgsdFL57y3tZhZfFyuh5C6rDsyzoHBV9Lt6mZxrekg4p2gFxsDK",
  "key9": "2oL9D3ztopZfcaBGgYkige1knfbaG7KVo5vfvADZWvF6yZ3BwTrSmmLZFWLgdLkkGtH9pXYUz6SpY7beVXhow8er",
  "key10": "GJqYY1ZayYZsoauu1pSd8envkdp3GkenhXyLsWdHwSjMCuxcsZHeffje3969eX83VeHFcr9cSyZthJcfk12AQzQ",
  "key11": "4GN6sENtW8dVnQyoKkN3ePJ4eUx3vP3M9oBTiRojQBczoPzgy7q3Le1Ukmg3MnN7NrNrHmYNqw7RB4BRiaUxq3f9",
  "key12": "3cQ77s1MM69SN9YumbY26BhFMsKKguu9MwbM2KEEcnE5VuGaigqf7Nq9a419yPK5k7H5cAJe3D7sLcpchJumqhL4",
  "key13": "AsDEodtDWN7yn1Tom7w32W4cjYRgVDqePPAZfhvsGdsqEqTVbKPkvbH8mqGAQ4ZyC6SSEdeHwHzcB9dfhE2UHMG",
  "key14": "2dvfNrvKwryEbsaeukoiRdCbu5maFj8ocXCXGfkgtGiQzc1xZxjccSZtDh3i8VeLfYFyfuq4tzY9cMFdYCVgYtLA",
  "key15": "4HnXU1fUk7m2qt1T84b2jNMcFqiAxjsLNuX5KsfiG34TXGSmngfVQdyYULTLVdtfFRFY93fUwSHiz9Ay7YA27zHB",
  "key16": "23mwnnCLVLd6bAX2wH241xqS4QUJQ744wmtwY3uuzpX3L53KCCjZ44sgtT7Jonby8AEhJ8bpuxAkvVzxhbYwwerk",
  "key17": "Ree2gXfxwpWcvF9AYJwD6PRnPE5cuEjPpckHudSxg6UDRAhsNsTyQnCTE4q3hUvMnzVVipJteLQ6iNVE4G8xH9y",
  "key18": "3FP5oKw5aUxNpQNmN4AFNxegtHUhiE3LeTysPTdZ1V1oEiZ5BhEDN1Cvtk1cktSA8AgzgJvEnaXMGfbREFqbU3eH",
  "key19": "5y1UTpCfrfVmuz4UB4Nss4su7XrpEo99iqNxPmFp99RLo3uLPCdAjDk5J3TvbLytYDkmjfRiY7FGLUP48PU8vg6d",
  "key20": "3bP9iYNqexUxU5oTwYENWpGiu9KBh5ZixPiFsLBk1kKBQL83UcMfFN74uxTXgCosTrojVd4UJApG1zmUJMPPFjBo",
  "key21": "5xgRarGw66MgLcy54qF6u8sZgkXULuhxtvQP5MzysjuMnDB8FFGFsqusqDqyGuCewAVpLS3gp1xggSXFYEeqgjYp",
  "key22": "27AfhZgJxYLgFhXhrw8CYLbVCTyZ2ux7jP9dShmHfReo4fNx8bCJ8z16ZmxX6Xz9Z2FhnaPpwx7a1QKA5zRkyu8B",
  "key23": "5a7W4UfKP8sa52nsSPPHAbk6feG17fNbPMbTZmuvZWgb8ig9wNZPufXRVsFak5k733XyPSxjbYv7ZVXsWcb9Srnx",
  "key24": "gXSZ3b85d4nQhYPBiUEMMMumMzDaQVJjb8BPwL8WdcGa6GraW6exHdojnkg7W4ownfYQtBr9hhD9SCxf41bL8U9",
  "key25": "2uAdwyepCj9GpLmUbCNLSdeNNSb1b1ow4KfvSyqvyLPDDQNLCn5ZYLt8x4PHqXz5X38E1LWb4RrM8ZMFVrqzzRwD",
  "key26": "67jdjr2mZGh77wqZURwXdyiw4JVjud5oQWfakEbcjE7r1x6BXpRuE8uPkBHLTHZtiUW6ntpfDGGCT2tMUXBvJ4Lj",
  "key27": "3ysmmVti1E3w1auBQ6U1o4oMP4Abbi27fMneL31egiqXGs9bsxs4Y7Uqzjr7dxcW35ubYZKFFAXkFzKA5n35jNq5",
  "key28": "uzzEH4MaH3EwPBfZxTYLeVNi31Lgq9XJP6vQdSjcN2BsE4qXvs8ZGDHHpvhKgra8y8eypyNyH8x7cui6HA2pGwa",
  "key29": "Nt4JJ5ZCXSmDP6VRx1Zc4o14vuBfvo32dER6FLpn5fzcMW2u8FPGGkVdS7xgP8S38C4cbf8QDN8ADtAQdeL21Ci",
  "key30": "3YbojnUKwqJH5WaJGbUWQH4MnRqSpvmD8UYKcqv3e9hByudViEXQcSj3ZQHWLrNjofeqECD6dKCKHnZpuUEFi6bJ",
  "key31": "3SCiaytDozXBgAvqdxRy39UTTrHXCWBtzVAGr6kaPhQkZ6as6aj2abmKxfmk1UurmV6SHWZKiVxB8Jukgm32h5gZ",
  "key32": "5VZzVFLfancgkwYnqgujp6fq25cpRUjqdjizBwvL6bTeGETxmPeFznj3nVvSmPiqBKvyGXKvi2vEi4rxwi3DQLji",
  "key33": "4XSeTQHh9L4RFdSjvd8ZSidjtstQqBMK6PfHwvpBzcwMFiyGxRzBYpGtEpzV2DgBr6HxiMB3R7acfajf8BLJzHXV",
  "key34": "5B5Nu1NR5Eihd726nWDNsVgEKNBbXRYwxMG1GTGZDZipLAiJadm9cUhm2wsSFWd3miqwfBuwvFSqdLrQtStHd5Ab",
  "key35": "2kDUXDytdbJqMEEzkp8739Wty1x33yjF8qhgrZD9yYTo5KJ6tBNt8yHZn1gq89ZzcDGjgPU4KfZGhSxyDw5DhWm7",
  "key36": "rqa9boPsUUppaEiQkCdh45yENep4mJ4RVqitQBBvSqg54qEAKnftF735YLiAkwFQUEAViohSjp5t19tKigWDcte",
  "key37": "2NmmB5ya4Bkiq3MLFSXiuuBGNUZSPvNFE3P3FNCvsc9rfYSVw2BNLAGH2GSEsHpW2E4fSPEdNryK3sSqNDrxSguS",
  "key38": "EoWJyRLDVvQBYEtsApj83nk6xgC1YYFvMW2D28MMj2474MKVQDWz7DRTnxYEzWVzDE5kgA3PVsk3Tegc9MBBkEd",
  "key39": "2zvKsuV44VWSzcdJcdBhEyc3Zrb4U9PzJXcWRhfpqciA5Gi68zZCnFBfePDdMTw8EYmrYhr8a44eQFMY1ZgyZSvK",
  "key40": "5wh7meTJ62nmZVAwpeB4xZHWcr2EGH5BwczWrcqMAaRrv5WUjckcNkGtiBfqmho22rHaqNzWmsttYAyzGmubbeHU",
  "key41": "5NHrSxohXX9wyJDNVAxLUUsvgp124GbDXT2uANsf1ZSVPG9s3Dsr3PzmMkDkEmQhSS45hUq3joee5ybTbFp9z6MQ",
  "key42": "22SwwSXbdZptJX8aQZZjhnbC2MWXKVXtVAB9b1hRfaSPL6UPrCxUEBR4jm78bWkshbNSDVEEJkfsDjzyaruqxk2t",
  "key43": "eyQ7BaL7aikrLi4LWMAq3atViU32kaHpLvhsLUf1VPaE5ibbKYoTCHijafHzHPBNBYiW2gVNfUtbfj6hpaZJduU",
  "key44": "3WgBVSFsHvTt8X7MZRfLCyJT5UW1zFpihfNo22jpsukKUtHWwVyUip3tt8jzsLrPXakGMWwCPNcqTL6ug1Vp4Dc1",
  "key45": "4ryrLtoDCpF4DyoxFLTaHPF8GKYCXPo5e58q57w3HAu21XDBneeCXdBwDKkXcy6upyVrEnMvyJP3aad5GPGS8Za"
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
