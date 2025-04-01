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
    "4A3myJqBvCaWQeDCq8WnZSetqfFoxtdaaEr3A1djZ9a8BwRPmCwe1aDyHuv812vQdaDWWTWDLJgwupgWVQKB2bdD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KcscAgHWs2LA7VSnTLLXPo49RYmd2uxRUEF8MfS61R8x7NMR9kRi758C364Z3bH2vRLc5D3Hk8K94faGA6m3PqS",
  "key1": "545YBmcdDfys44kTUbotr8ryrK32SJDAWy2svnHUmzdWNdqV8qVY3w6LzpwZm3nVRWUoApWWrkEcV9yhfbq9wDY5",
  "key2": "34LSCsYthUS6oYifGm4cNqdtqbRW5e65ToPw8JFeL3NkhJULALa2ikpnMZZS4DGuUYbgL6PRiJk7qngqcE9qLX7v",
  "key3": "2ma3vr4XGtRnApbedS3eK9ipd4CkP8XcexKZpbJJEvqbzrDNicAs6yWakg9D2aXDUPYHCPoHUxFGie3ZZguAUtik",
  "key4": "2MwQu4JAEWcSqk9NRxN8rkKXQ1jGN3eA7L77s4hJvd9NAYPpgvRGrtC5qeejpxNhdx5m7CEx46CfWmPdZu92gySB",
  "key5": "64mtiyFwZ5C2w9ctvSsjemuEapDPq9iQSSYozV6iuRoQAPuGWtZz1wjZWxW8JaNxMNY1JBj1e4GBzFSymjP8oLhH",
  "key6": "3criGHWL4JneJNEh3959dFw8KnLvwEChoWbWCE1GsQ26i5gi1MHab6j7wFvzt9kMECDweVJu38fzpuzgZmWVXhwo",
  "key7": "37km3jKNxX5H4mNNQZhNwRat2fFiJXnHrH5BXTajvTC2iYa6Ke5J7KcW4iSK4aeHgoCvWrKjdjohLsVajAYD9sEz",
  "key8": "5m2PwCfQDGhz69La6NX8T4fJUvKE71LUvUQSHK3TqU4fXxBtjPbhQfDhbw8D4ayX2rXqGhQvs3Q4JSbLA1qfB1pZ",
  "key9": "5WKXe9RrCX1shwh1Z4oEZ8V56zqcnCmBAg59v7bF9kqmbL1CpnYa8M7pb5piUWT7QryYeaqSqfQtx8fNwQ8bARow",
  "key10": "5EmDEU1gw8V4B11RFAV8KgqDaFBzwN8ECgDxiAUNX2vK1SdNRaHqPiLfg53hmr8ErYyErz6yBhiwsxCtBBvLn8Zs",
  "key11": "49GmvMbWJmS4H3rHPowc1ghg8Meiq1MDqqYZ9iTnb3BtMTqVdeRbPpLkkCtXz2xjFFsBxg7HWDKiU1q5s2uqAkeg",
  "key12": "29BaFCV4gJq4oqqszkspVBvyU4w6k8J3hsXkkoqywr6T3Q9Uso2HtWAHf4pSzvRWK3ZfRfJGxTKVAh7nfa4NV3Gw",
  "key13": "35kZy5bRau1EpHTaNMbzcaQLBmEPonp3p7eBNTSwY4T1KUDvNR3SKnPy83vvRp1pMePgWDQkKE9AM8ggev9fpBbz",
  "key14": "47N5kEzdu8Ka11HQz5LyHJbiSJzs1j4rsxLZrLX8i817hXZPwPjJ1SviJojpjPj4cY489KxgoVWMcQhuGWd4Gdct",
  "key15": "ZM8pCm9VPjfia5VzRL4YATu61amhC3UKBLmJfJ58Es3LoR952QBGF6hGMjtKxHSaCz1D5HttPwGNHbvyaM52eSA",
  "key16": "35E94PxXPhjxEfmmRGaWBcTu9Yy5LFqwPRbuB4gwTgRiXYVQa61rbMg1pfjTNVYe8Xcbz5sBE8pkUxdP4XtZhZTS",
  "key17": "x7VFzFav2PiovXoFvEmPhMy3AyUhyLD3qb2TtZh2gmUHFZsEmhKjAyK76iMkppcNaj7aZAbd4ctimmMiL6Z2v5C",
  "key18": "4qnK6xwsDJ1oD41etVGNPr576d49jsYvsKCxuhi9Awbsp68QYP2xqcNbEw6RcJzyLnN4AejqxeTrhRBn7fbFTvB",
  "key19": "2ro2rDpCRFoPiSsGFhuqK5SaaBYVqn2rDjQ7qju1MYYetMxPwEH7e9mCxfP1zFG8jQVgAsfYnTXtCs4Fq41YueG4",
  "key20": "4G7omnpgQQvT6rHiGXEbvRbUtPsH5AqbfpiS9HxRXLTcFfG1XJ8npSD9UiLNnKUiLUKQoUjdA9QSnqWgr5ZTtDQv",
  "key21": "2HqAbDS2vsvujXogCGUNdkUfYZymbjUkTvk6WstEZk5yS3bfsvrzFCyaUaNTiVPkS1tBbkzUdHzoYdiFqEDD2vZ8",
  "key22": "5rNFSCVRsGErYGFNfi1Qu9Kg2WRRyNDDrpP2Rs9q4W9q1pTMsV32TZVCYNAnHe4vYaWCdz1Dmz28QELo8UEhMLNi",
  "key23": "2aB6XECTuj3DG8nK363hDqgenfP5wWN4Aqv66zHoJGvuSnEJz8AtBpTF1TBZJnRbXjunq8vfT4rmyiuH4jieMLzz",
  "key24": "4eo63LzyBvxfM25oUCkEGS3oMMztjqyw7ayK2HuceqDSf4F4TVCA9wiGFU6GmRhfPfZZob5uvt5sFCcy1ieHCYTq",
  "key25": "3G8YSrxPaCfRJ9LifeB6ALn3ZJ6Df4gmwcqxPbahXGASia75njpYjWWTZtG5nWS6fDe1ouFx5JH3hZz4GrgEvhh",
  "key26": "4bQp9oWBjFskmz1iC7fi1LYbeZaDnXPRCB71ENe86FFULZ3KYGFAFSLtkDRBBobmP6p2NxghcLR2A2JoYAWW6hpR",
  "key27": "UWUXodrJioVg7uPfVPgm51i8WcUzZj5e7qcraWSfZEJCyVhJaUsBj7FMHmhQyN9ma64qhvYPE3GDNUwvASxo1cj",
  "key28": "2EXwYhDEHQCwckLFqHfukpegfZZUU7PRFzoiwDZe2DN9GEFSNoagLJZnwegQT3mswt2Dki6f85teuPij49jGWww9",
  "key29": "4kU61WeEntR6J4MSs9vaqCT2M4sLPn6wiBTWGCBDZqWPN9jMHq7CynhHiTM9eQUEPkdHsqjdgUUBcqNZkArBicY2",
  "key30": "4HSehVBYsmLY4jA5hqZBVBvZriTVK69NkjREgXsUEoYh81k5kGspDy1ZWotaaEuU9LKdmTxh8JxXtbaSxs9f4SPi",
  "key31": "4Zu58MSuoMwLcvtT9kXmYPxjK4WCYmUCBUzzogMsHbcykm3cauWwgS21CBMNn81RRRXRMPjEyaBb7kUD3T87AxRf",
  "key32": "4aiHpMYsvpcyCssD9xkm5VASGfxAXJyff5LdaogWHMGRkdGRM8AP79mWSygMDXGuRgTHcRzQsG9fE56wFEPdVAJH",
  "key33": "5JWWFBrPEdwSJNxRTd15qhC9saZmjHYs9y9jhFhvQ5GRYjxT6w6SBkBpqHeDeQ7UAhnrHBm4qsMDgmLQ9ST6VV2N",
  "key34": "5ccRgCCRBrXxhBJLCmumW4kDyt7croTkjw1USrmqeyKSDYZCu94mYtW4BLPXrqFRhBTM5kkTidhwcv5vZEnsadXY",
  "key35": "2jRWsyKYAFENr87w17e6U4Uri4iMQJH1hi25Eo3XyX7Wzii4DaEpMEYtPctKFE3555KUf2JQU9nKxMbV3oKCig4Z",
  "key36": "28ucdj6wYzFip43x2T82VNQFT1itJrTGtrfPWjexj5ZU48r9g2NPfAktjvmXAYaUBTuqvDTkBP5FqTpow3VYM2u4",
  "key37": "4dQnLHwRAhxARPxbxXsHEDJ4Fp4ec7yfLVFwW3fF8BV3irQCcoPSXCvyGk6sCPPeVU2mrg6bvJAqBsqv4iYiPegB",
  "key38": "wm4wLd2aV6BmJMmbWfAjNH1EGFamqPZqM1fJomKW517X5LTYu3DAGtMLpg167em94bphVsFazhgLLtDuXvckycb",
  "key39": "58sjuyiiPPHYHwZTcjEG1p76PNL8jVXvMhu6GFbRGvnftnBjmiMkbuWGBQZkthHRkurc6aDDEfYE5P1JkvVkL75P",
  "key40": "2SAJRkQJsnrj7aKfB3YRKznNqk2rrTbFrmCz5kMxa4rjyxmTkNeFRs17rB23uaeMXDeamKseNASDnUciUVXiWJbe"
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
