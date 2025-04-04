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
    "3iS1ETJsjBFyy7PYqAFicnMGUgmuLQAbsxMJHUUTtt3ciNacjMPLkhw1rswGJcwdetq13kCbdNmP6xxEpQT1dTuy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Eb6EGBXJuNNwcG9d6qY36QTyEKwWcEd6VEKSRcGmB9ZrjxZUJzjAx78je6cFnCUiVbFTjRYR9FsbfqxsPsnM8ee",
  "key1": "4mj37yqAeTHYFCKtrgZjhZyfkVVfcKw8M9FKJVmjT2uwi9kAwPTqwj3q2FznR4d2RsWXwfwUecNjJLxipJCqXWC",
  "key2": "5tiH9qoGW2JZ8LRC1AAQCjNm3dcCwzgQXcptgF1LFmb5mymKjLpn2hfUfndfjhftPHoZg5ShnBDzyu4PQYJQitHJ",
  "key3": "5LSrrjVCP5Tu3wFCjwS2HJeqBtms8vdwamrN2MP41jdZJeLV6HfFtYMFXQCx5EQY5EyCodmzBpodMZ1d2BmfnDvf",
  "key4": "2KK8zrYD7xvFeF3jjtBRNymCqB3ZDdaagTK3x4bH6NBGyZAzdJhrDt8HS5SCNhBMsgSoSjtwdnYBGXw1bvDYUYeR",
  "key5": "Koe3S6PbXBSSdAkkeJ5pJKqESFM7rUSAYUGHNzKg6o6Dfi9SHJh31GmZX76onRfrxTCo4qq2jfpABovmbuP8b8Q",
  "key6": "5PnY49BRdgZq23Mdv9wSQYFvLFb8p23pJAcGU3VxfgiKXGBMLnHJjqxnfpGW5jYAmmMmw7HaxDVNmxVXsBkXXprF",
  "key7": "3UkwuvkZ7WATi3gmXYVG22L2xeXynv8YSce5z9ai1LtkydMszYnNHaSZwFx5mLLdFDtYwH9D87M27GXiptFufddE",
  "key8": "3ufvHTLNKt49T1Cd1uh7gxuu2rAJDuuTDgUSVUCZV4hJD8SAvHZ15PXkqE9bN2bU8L2VnEL837FKQKQR973juQsd",
  "key9": "2t9TsinUDy5UW6qkw2o2sKwLifCc3444ZGQTULnveEJr3JhbiivZuo3enqzQJcRtoJfSHTacHGWvpdwt2U9KHqYN",
  "key10": "nRD1EC8dZcYzc3yhSUTrEctxWYZptf2UchDpXHKjtT532GcADiWTg31gPSerJaiBWXhSARVzSuprHWpFzHt3rEa",
  "key11": "mWT6uR5YqA74j8dSj9qwEAWBW7QrnFHpwrtTxSUiyorwsWGP2P8owromX3dA6raAsW5gxsZ4oJNn6vXpxusYKqg",
  "key12": "2hYLJheTjv9SGuthxt3WHcrgVzWUsM9YwSZYXPnYSdSaXG3stgNytme8E73PcCLrhJNc496EZc9KVDXxLy9WLsT",
  "key13": "54mgQFmz6VufUcwV1wc8QTGKPYwMxZZS3kcCK5SFvF6TDL6JcRhvUX3TkfcZX4HSdGEHnSXmyBimks8kGHapJnsx",
  "key14": "31vhezVXeQ3fosEf7Cb376Kt1Vaz7yf9rWPJVjGzmB538tuJxtjwe1nx91DCa9wj3DEah6tq8Jxe9RKzyy1qS33A",
  "key15": "5NDi1ST6CA4RU7qc9wQxrZbvS49ni9cJCUzBT4mSSZy95KLmdULtqYBN8iUiJmgUJXErmx73yVQMudjezCGD3uiA",
  "key16": "2x1fveN8jsamd5KQyBBah7RZt4Wnex1rqtNhmeHM5QCvDwQZzDd7WT4oRvt65CvfRLDJg6DUmMLnanYVrwbxzCCk",
  "key17": "3yga2hLhwjD9NtYwS8WJwpv4NtbkXLWigJkPr1AMNhLGfr6s2u9aVnTWJcabQcvdFsFBFK9SWH5rVEByRUotRa63",
  "key18": "3YWWryYLQmmsHsNgtQoa94MjmqxZDn8jAK7R59KqaXatLYSGZVYCqk18GWKLAdXiT5PSUfpteG2eQQs3wpC3VFEo",
  "key19": "3iNBgyELfs1qFep9bgFp4gn8jp4o1Jyzjo51V2s9FrF7KYmM3xiBUgFyCxm3CnahBvNvtxRAnBrZy2Wva1Xiywt2",
  "key20": "5QJcUPPLXwfQEFptYti9MUDQreDkrW7VMjZ8dhR8oc85BatJ9KHYyfkRKG4b6Ln1myy9Km8PRmNMcYvQppPisXc7",
  "key21": "PxhEbh1K3bGbfYCu7gtHNAY5zP8Lo43VxLZazeaEnqbyghQ388cFZR8HmEPv8CweVjhgVW8NspBkbuFfAXVyLBE",
  "key22": "2SwEhypPJyvVUwZsUEJaioQwUHm6UWYRm9KxmK3ideHZ9PR447vjttFAHkENbgse56SFo6ofPo4DrUdc1BexPLAR",
  "key23": "5ySLJUVA3Y3XTpxDqGLbqQqrNpSGdTS7L4WCA9ewktRuAfEc9DtFvYTH3kpPMajx3nrfKABJFYELHGk8wQDrHpCK",
  "key24": "3R2w34nNzr2TFyX8yG7vPbrQRztbjz3meuPP5XdB2zwaM52pwrqxvSKQdnxoKwwT1xH18Et6P7CN2aJhEx5o11Fh",
  "key25": "4xExA9fDmfUFESeuGHXzC7m81PbiFJsjQ2UP7f4jiXPEm4DJKCbuiyzi8Aru3az4HP1KZrMJpbVrwfAsGQQtnJdf",
  "key26": "UuEiWx63zRs96mXeM7BC1w7xvaJpDiKmyZsCU1XSRG9dQKywzLDtxX2nyPqvumPq6HHbiBwQjXpQLbjCEs7aDd5",
  "key27": "2AaArWXRztcaqnzy43tG5BvGMr5qchT4K7YiMGuJKvg6vPwvFJAiQk24hbhaTkLYMP2R6ps5PLCUGSkiWz4YbbTk",
  "key28": "2C3Ve7c8JtPCKRFDynLdwkQmCyE4XpeDZevrGhhTLRDBpTwLBgUYyp3BSVGjka5XSp6JcucewfFc1gx7xLqW9LGN",
  "key29": "4k5kCHF9ZdhybjBQk4zekVgoeNroqg62hZDGQviqk3Gcz5BwE4eyhhuEDsMiyh6nVYREaGPDUN1v3hF6dLCznXXc",
  "key30": "32zsmRtReGQ8dbKpsLR5nQKHGKfKGxsVXqF6sb11NT6eqxwKhvbJGZZYJ3NSMvz55NNHSz7dLVqwfsZcwJXFhfa8",
  "key31": "31RZLFeQHqsTXb7qf2t5gcRAUES4Kn2LaQagtMCdyEkc2YJV6mwEGeF9ZFxs24At64KaXUPbaqGnb6mJLoGtfypC",
  "key32": "5MydLHYuZ4yGzBKu4GbsLswy57CDEuAU3cU5h69jfHXBQdYFa6Yh5e3GCunnXML5Q1eb39qxpr5cYPZGiVGeUJ5U",
  "key33": "2YAWuYkZNYgrHWcQP7yPsnojJNxRw9t8jcoPCC8xt7U2r1hNyXaBp6zwsexGqaChemci2WVBLifWBDCkGP4gpe4D",
  "key34": "63M1oegBv1QqWgKWBxwcWJR47K9nNHHfPqxLHZ5M5fSP9sFhyY4jWd3gLNQKW6K9Bq4usTpK97gRpPm2cBoUq7HZ",
  "key35": "5VCC7vdwVXVMiTP4YrMitbVorE6RtPT8i5RbV8b57cck5jymC5LeMiL5Tj8tbo1oEk5twbX1XmUaaGva5iVPxnAz",
  "key36": "2iVvGBydMeJuy6xmcnhGxU72p9KWVSCupmM3TsdUfKagDp2LTa6LGCxXxvs4m4k787sYSLQEked3sMZ4biF6M6Qk",
  "key37": "38gT2FeaL716K2vTqeoNyisqcV8HFtYub6ZQ5vwz9Fq4J42yGxpSFefDbS1Bc7PLTmjhUPxS1LnTMfrAoCKQ2CCJ",
  "key38": "3fpDusoygeT6X2RUj9bR4mqLSDMHBR9QDtgybasrHicMFX7GvzEeG9UhfTFt5VN2BZevbwZGJG2UrTd2fD9TtChP",
  "key39": "YVKBpqMUbFvMdXacAwJAkMCVz1Atur3uSKNQSC2ANpY9i6ek6a1v5UiySDG2dJpBnBoewMocwDtxmdVW56LkfQD",
  "key40": "2XHcfATv1drA1TDLW9oB3DHzDC5tGxXF3s3vDJKTxjWyQsuyYQPYJEw92gs1Gor6fMA7DcdyerNktMgGHJVHTb36",
  "key41": "5EH2GHsuwyjArTVGFx23W31veNdJ7pY1J7d9hUVoE8ipSvTsuDQrdkoT9DdUzy7LTKsHd68TmJqbVgap7RSbtVkE",
  "key42": "2ygscXvU7RKYkQpbhtjDCY7rSfYYgG7mQZh3kVP1wUWuftGz3LzufoZxejJx9GvLzjSuTVPm1hPZ3ZbF2igTErT4",
  "key43": "5zE9iJKs6vaxMQxvu4PDAqafA2BkVkp8iwdcoto1cqKKGhpj567KQ7UbMMg7WMZuodE96qeyB3MKWfn5jrGGwyHw",
  "key44": "zMzrtJ4sP8UYF84TL42ENWKR3Au98qVbYekQKUDhyswT6fM2MfV3oCCb3hWiQ98fcEMkGq2fisCeGiJSkAu1Cpe",
  "key45": "3JhfePsQ2zgzVPGEFVGWiQgCwhpUYKagT8gnxwT8sypnmth6T56A69Q8HiN57UHt4qx1YvZTDsLn1EBnm38aukmo",
  "key46": "5n2UxGCZRzY2VCFdyrngyUX491Wm12hfP6QmawsBpJJgpeU3JZvuxMEpvpdHBU5SHME2Sg1b2cjmrwf7ig2wTQBb"
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
