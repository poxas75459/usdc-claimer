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
    "22vfaqNXziwxEtrorqmVXEjfpFX7fxfjj54JtSi76ALq1kww6zuq364PLJTMBPvwQQorhNweAJq5GdwZfTRj3EJg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R8k1r3ecfMefJjv1erZ2zZP1z8G85VcHVJXTpAMbzLCnnQPHPYrbfhRc7mxvC98eF2XsmpFf58P5NiTZLt6eDwx",
  "key1": "4QJEof9FT1ZNHiHZxHGPpAFKJGKFgMika6q3k2GZz26qg8zt7HtUrrPaRrnAL4HGPWeXYpVRNfAZnB448hLTrh1N",
  "key2": "9wLRUmUaG9P2r5kTZs8FxJsLuJon9BJWrmiC44nuAZFTpFfkWhCZ9DCaCvxFiQRJQzwpomGibcZ4p82M4gvGBFH",
  "key3": "4kHjBcPKpvX5PXPmY84msLMv2CJuJu9VoDDdfKEAUFYRuzDgKXePGPssSGfKPsg34b1iZe784UifpFnApJ93xK6k",
  "key4": "u4SVenpNkkdD2v3ReFcTxf96TGQEgg5rsFbqMJ2mDaMWKTmiRNeYyA4PGeVjFX9EPjUR7onze7LAGADibacktQL",
  "key5": "36MnhfTXFAvLkSBmAWsjsQxS3MjtgbnF4skEcNVF8fosnbyQqF735eoVKULbh3Dpw7EurCWLdx9xx9pQLbK5mNNG",
  "key6": "Rm2DcsVYfRtMJEzAtZbajK2aDzVMACPYvQU3MdweZtz9XFWggiDQ34sZzxNBXwdLVZGbNCDW6J3c92SqPhufQ1C",
  "key7": "3gAqCQShZZV5qroyoFXTHT3riQ6MuYnqgjYniDwqQgX4jXco1oSdkdvDFnVtSfnDSucS2AD9hgUUBBo9s3CzVjPw",
  "key8": "5pAft3rAgCBEqTxzadBASpgbbySo8qa6pTAsPF9FD5SBaXvhbLJq5X5DtnsqPRpL5jrzEcSdczFL8yMVeAxvPaAf",
  "key9": "5e2cmDXMtntBGnKtMRygcashokwE2wuWhFHiHoE8D5Wti9xNFNmkSyf2tsgH5njtgKbTjxZVaRjZVyPFFzy1HaY5",
  "key10": "46qDnRmHpjSCeHQ4NDsHwdE7eddegBtTeVtnMkSNWQg3gRrp2Yq3Aib85cW9XwR5AgNUHnAZuZ58X7jZDf1yUB3i",
  "key11": "YE2GPaeZ1NgWLecYX2C1W4Tr8Qf22oebXZWrZaiU6TDmXYREW2N76AwMhwqfAqkvT9Kbk8vtf9Waj6XUKg2qkh2",
  "key12": "2m8Y37pkP2TcBXf9Juu3CHHatVx4Azk2sbZqhvivzsmLUT2Yg1bp67vfPeLLsiHzuGoqUjkLpqoMZtpk4YfvWD4Q",
  "key13": "4vqjG5EA7qxo2pKZYDUGXkH6FRQWgRTHAjBWwqY7joJ99re9AwnznetxErFdagzN53frJsZixpDG71UUkXpPciKA",
  "key14": "zS6XCd5S7PADx14743UHkntDo3RGcg4wXCp1togNRPbn3ZA1s6M6gFXgkgZrzpTxbUoX9VrJ3fL7KmWNAjrqiHc",
  "key15": "2XhrQFuC3gxnsuVg3nrKGXQ9R6nGYWpwxgWF5YiKQLeQEhkrE9kvo6rmgb1bkv8MxG5PkxvKn5FfRQuSZ9o7D3wP",
  "key16": "34u4nBuy9LBLAkBB1hwaYhyjB1HVvL2xM746mSibtoY1uAqnZLhqBVFSUK4d4W3TtiQ2m23Q9shKsNNFiPn6zXVv",
  "key17": "4T51NLYJwGTaR4QjyZzoTNDabWDbWgurZ8CVKAd4ua9S9AMjqxahDkmyfVsjvDLn71xXpSNZCHho7NBKmdy2j7kD",
  "key18": "2GhfSqY8uJQsxPvcWVYnrAfVR7jStVigMRV916H6R5zD513nuTxaUMhURdfafqRtZPKudCjLGDtH5kmKbr8Zeb7T",
  "key19": "4K92K9xN3QvgnkowcugpNgWztyJQnQb8qrR6wpRCqvC4y33vNCAji8QwjkUmhH1wkddrhWY84n8tGJswFMK6tLj5",
  "key20": "2jqm6m5RXUbFRnH3qqKSHBTuE2h6g3KMgf3p33o4VUss68zjse7qxJafGuzJDGDMm2U4KuXehy8G9cxdPRrbskEB",
  "key21": "98hYx79eTuJkYLLjr48MogiD6TUAa7j3droKRyoEPHGZpjsEq5Qmp1LqbBckoY5DDhkxtbpceBcX8ce3THuWsd4",
  "key22": "4xRkoHb86QBjhQ37m8cFArYiFLFEuDmCnN3thG1bDi2rYeGTfiwjuAt5K6d9FZh8bYQrC8VgT6g9PFEDhuZUaSM9",
  "key23": "jy1Rrp4p1fgajxRfZyeD6gBBFrbDXN4w5b8aCCK28LBLoF3Kcmjgt2kWUpfVmXpCtbxRq6PVNy2yFEknNEgqkBr",
  "key24": "52cu8MaMs4rasoMxWgqpeHhMJ2wyukBQ1rJFzAktuFH1fEDjsbuivyQBNxShm8dynHZ1gqNqz76X5t221Cg3X6PH",
  "key25": "x6FrBEoFxxQsuj62tAwjD1zPknFCxweRvgwxpBcCFqAb3z1eNC4rXsMDZtcrdXFXFcrQg27FZb4LnGJWaQs3hea",
  "key26": "32d4pCwXBKjVvE4UPWj7R21sXpsyPJC1MA7XWv6fipBDP9RCebkdCq6tY6PqviN5Y1NeCxYunX5tnBHezhybK4mp",
  "key27": "2YLzZCM78YKDHh7fXSssbNJdM2FUopqPoZrZFVCDmVVkGUZgEEw3kNQzYAFxxmSQphjVhAjn9ukWSEf2PRBmeESg",
  "key28": "3DN5VKf2p1HEKTLEXM11Nj6HybGjENCCvs8D9CrheWZUf4rLmYNZuEH2DKtHKB2MmarfauwwhyEFSQaN9VoTxDjp",
  "key29": "oHnnbHQikKLp1u9SJoLSCmNHFMw26qqYVp5sY2rnF8BCvXSkvxpgGArSYBWwFEfAB8CRcifkZrw3yxiHnHXFsB7",
  "key30": "3i8jvdVuciaU9Sb35hMtSNfjAv5ZPh5WGQZ3Bi2pg8JJnCQuM7dyrVAJ4NBitSityp718a5HG8hMuAvZKyPpocFa",
  "key31": "5nRwNGRoHerkqYYiKKv61o95QTJEP9AqR6qE3rXrfeieVvvwXoA59FgGnQ6uY2ynrWdz4Wu9y9vKRsupj9gkeQZX",
  "key32": "4rENqPB6j7b7vhhtuqrhLsANidwiuusrhqLMTGcyGMrnAaGA8DfxDSTcfiUDdp1KRKQtzLfJ5AutbJKwoA2Us3rt",
  "key33": "2xauzimDsgCrLYt5hwGmHThAVUHnZNsynM22kLxn7Qs9pqwtcn6UrA9c2Bri2KtAsPiRXskvDGdNnTFLnZhr52hU",
  "key34": "3GKEvvLpwKAAbSuxbcG76cTRowzZU2HSVWBKHjTu2a65inRbQej2vTfs75Bmkds3LeumiTV5sZQNukhT5rC5RgE5",
  "key35": "1Wu5E9YzE7ZjBc1AeyHZRF52K6M2codpwa5E8XpQ9ZSmEe3RzNzLo9mntGhLKbsUzgtkjc7Ti5YwnRyoFLJo9Ed",
  "key36": "3xCmBzJuQXUzbuCLDDNi3FuqxeCwE6w4Kmshwj6gD65pSTHEXER2n8i5vaV4s86xr2i31WEdfCA2RQuvvhrDv4jn",
  "key37": "2rP8xqeVaEJGH5vewu2UGWgCwFiTFwWzWWXVbLeF7oFqNt3ZAod7coUkKX5QqJZxwjhxCnctVkxFqDSHmq1KC6jc",
  "key38": "4FEYyCsikp7XBWoLLSWR2oUMYb2tcu3rEUKdwFyFSMSdBfuo74u95LqqAT8rTah3zKaPf6XYFg37AcgQyXERsz8C",
  "key39": "5shePfGthppGe7wMw6dPFrGdPafSXLU9G6o1ibhhDBhkUsUWDVcwzovzpsSN56dMtHtUKoQAGGnfFkK9KZPQFgQa",
  "key40": "kb49bJ8WrunpDsLCVjSeCPQLN22G6ymeEhjbu3upNXZ2VSxb4tD9rCAYpJ1TuA6DE7RQonVFwshQkp2DGquMg5L",
  "key41": "5X93t1sTrAc9fHHHpnFzUewrgC7cKNGxYmu2Qy3fvw5bvhLT3QAoJ3q5363cjZdTtpE5U82sEPQaavniS91qjVfn",
  "key42": "LyUFiLzLx2EKMhLR7qdvSSXpB786XHiHX6VyU34ao3wuTdJ99B8bv1avfB3owVz5spJvSUvDLVRrBxsNjB3DZdK",
  "key43": "Y5MyXUxkBBxpt1Wvdaujfu8rxiDhdAbaePdgX8dK5zQVYoR7gB9qbhp64BK6SwC1oKuQpCnxFtqzuhtN36ziVmY",
  "key44": "489KiXwHBdZZttFRkLQEVAf9pEsPkANWA2M3Mt1FuK51vJTWx933YsFd2bEys2L64GsaZUWcVp7E7sFKPR2bjbUM",
  "key45": "2GCN6zYCZEzRZLX9cFZAadh6h1SSnxAKVEAAWPoPbmjrheX8ARgF1fuy5nuQTpzAYYFjUaMV2MKbji8HUUxJSLFC",
  "key46": "4NHvad9iigVPv2DzF59wv8wEPUgxNKXBkkQ56J4iw9psLYytBAQZU6fC97gLwyRSV8jYGz23fmGiMdv6vhDtBY9i",
  "key47": "61qq6zpTR8t6X5xXrmYcRFEbk1Fc9TLgZRgMUjAnkWgsHEQAPoaePdPhbQMo4utCDiyXcVNgmiPHFmehWGvjQ11H",
  "key48": "3mAfug9yjLLtDb6tLQeXk28af6EVYAStAA8kKja58ZQBZohcP8vrEsBdhsq4FB2GbnQgoieBApUbru3c94zgXGQj",
  "key49": "344dnPEcHp4UZXUPJMo4ksh7ugdoeBoyEamEpKbPdjdjXT8wkUMzqhs94B4PkxcPJSr5uhhdfrxSkVCzsaoXrcDa"
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
