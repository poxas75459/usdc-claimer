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
    "2pj2ZrinRV3HXaSWqJHuTHM2FNajDB7egqTB7dfUscqrmmPfD87GqEHpoxr7Jjw5DrsKHFeEnHUiP6vp1Q88XHfz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xjqAyjZvuVdpTZ61sBhLcp1HpLdGimFXJ2thB47XNYE8vRie6ew9qH4VB6ibaGyYShSNdx8jwjdY1sQCM6AcUkS",
  "key1": "5QvMhrZ9DTEZgnNrgEamSF7dk7nvhkpYtt7xiqLR32NsStD6bXa8x2ubpNGAt5nUXzYRbshhwjn8KshpCEafjsWW",
  "key2": "ag8SwTAU98ZxvunAVf68552EPmzoMoF84chEgAsYEpcvo2WLHzsRKAYUjuWs8BbAJYpUfyCojTotkoZQ5cubPNL",
  "key3": "2cJL7EsMvzbCcXTHLChcG3anKpT4UFJjR2NeyA36WR7LmZi2foVRDMq4463po7SNR1GWKrmnzQ5du9For3AaWD4s",
  "key4": "4baiX3CULMcXq8dtAbSUju4kPvV9S33G1JrxqaepMZCLxPknFsXjaEiV3CqM3MHLUf8uDXEXW222WSeV21WJBgRj",
  "key5": "59wKwPVSzDe95ya7AemWYggrAqhb3b6a13BTzha5Jx3jZxFfuvKoCi24sMkj6xfz6jBBmrJDv3XUCMquvQ6ja2DH",
  "key6": "2uUjpwaZRvadxK92m4RCVnb94Q6ktbLXnxUrSP4iuRKareUKc2F5tFGMx5vxoPXemdhnWvxpkY78NMj5RJhCjWtn",
  "key7": "5qL63hBBJbNKH8cgrTEDGj1SXMufXcFdYyf6Bsz1Jaopb1xpdW3Lu4mwCB7LcG4k59THT4iSpuZFjbuAts3hSHAr",
  "key8": "2WZ3RDK4yo7NurHUYXTrf7V8Yf6wt1DDt2GDbKPRyGt3D6E8wsEyeLkmZCsy5GqxJHdF9XxPPVQJBb9TcKEoocFn",
  "key9": "3SN2s51vFYvxt3rNdX4U4J4xfnkoKSwRxyAkj15wKqhkzvrxSqKZCGiKYxpwDiMGjf8V9Ntfuqx4gvmwN29m2dBd",
  "key10": "RocAMT3HrrY3rcsCZrUn8WDtbEzaUEGvj2dezVrugLcNSzYc4byyCeC94iZMfW8AJSH44tSJgr2BuXWPxnDcah1",
  "key11": "5FcJdRP7X9VAgUjZJzYVyhkyus6URkgr4cqmHmpC7AUqLSPdqcBG3V52AsyQpGDiJzs87NnCZwk1zK1okbBdoD7S",
  "key12": "3NQmAJMVTmXDYhdW4ebxkCjuvR5d1nJVB8pDnJYiUqdqVnkWhp21qDFTahAAoRWUSnzo2QS2dw2bSG6YUNH6tLpd",
  "key13": "2Ns2Rr2vmdRFYeAwh61LZUpJrwNPGL9EPDJmjexYAXa6Vu4FqptkBuctrJdKam5YHrCWD6Fj1dk3xAvQMTP8hs8f",
  "key14": "4MSZYZeL8MVHxPxUZ6xmWhpz1DoS5TMibZ1y4z812zMH2N9JFM1fE4sQr1eZ6abyZ5CaFdHbFceJveT56qKtakxa",
  "key15": "5wS9exzZpQShyqrJqVSwS2gd2zBrHF8Nwq8jsS2YB7kzQAC7hA1P5rdZopW2VzGBJtjP7edSfPH8wW9unBFPLDtc",
  "key16": "2gPE7WcC2BaN9a2uy1uW9udrHkhMGK6k1w7UaCH9Jiw12T3Z5zKFtvsfLZNvAnMFfCT3FpbFS3GWpxPRJqMvnbje",
  "key17": "678nZBwaRFJqTqXnPGVN3kAcmf2JSKRuzr2dXJMNQTFtHHR4yCejjmLXckDFoYf48h1jgS4uotwPJ7QwimALxa3V",
  "key18": "3xUxuQmN4BTLNgqLbA5oRLDnHXRfXaXESFAXKQ8yS7dXw9h6oufjcv9h2ayZbmLZ6jzW8rhGgECbw8CnHRJXHwwT",
  "key19": "5dZiqeGvti6zsi9iw8HoV6vd62Wn6fdfNqAdcWhEwX8SHHa46xSfU6yg6wVYqU9qX7GRUMsAEKNzxhdf8SBiNM9n",
  "key20": "5uBrzfpAN5eh2t2L5HG8JiFVVNxvWcv3ApeZGfqUSBurmjBVeChG2MUYQR69JUZnxa54P24MbkYRnXZZs7KMHVV",
  "key21": "4zxkkXdygtKpgmuywAecCr317SHQpeKZ32n8UjTbvfxbSwSy6qVFyh86FHVH244ZGdVygPT6xjENW43uDj3HRqY5",
  "key22": "4rkqWoZkAfK5XS813ZfFsAchGjwVW4CwpxmjYxZZKvvvmfUe8iipfxxPSVbrMGfNR6RReia6e6Z42jopuTCchzsC",
  "key23": "ozBp79cdWY3AMbiiNm6DkMsqTS3yYfE3itV1SnaxBTKWLtSERjbgLoJZHAeR2EduuK42Kbo7UUQ6qjhPGe4uJAX",
  "key24": "2q4PmPDRjkzSQVaSgA6VjqZ2ycAQ2rFzYtsobA6yaxNar2GY3gpEHYX7PjdubhGFX8J8LzuamssGXGS3LgAqk8WE",
  "key25": "2cLQZcRwhG3a92NCiPcxm6WiScPVfT7wraxk179kytaMYUhxwTgqPh6UWM6Ghveb6YRZXW7sNzGySACxH3RB23bk",
  "key26": "5o6jSjGzk74eJRBpqPbtYe3Y4QgZyjuMTvjTDNob1RhLTtMzw8DpeC52ELHwTcRiGH51DhCixRsUPhAZy3b8nUYn",
  "key27": "5sdCuJR71TdXid6WUJhGAX6W8pPF9aQQip1ojsbvmbMt1SXq2k6Ww58Hg8zUJhYPJc3gwAzHBYVUyoT8fK4aC72y",
  "key28": "3yQsyrT7hxCi6FtqhfKnT8ULSTbHr8Vg7dsFB9A3yF1gHUy5MAjyGaTkBwh8JvzKeVpnGtHu1jW5MwbzWDAzDVXq",
  "key29": "GDodmNvcy815RUWtTAySAkUSNq323VfyTjYWakdYWNzmGHcBnFtsKTZV9c85DZjRc1tVkXM4Gw5DZKopFRHLngR",
  "key30": "5NtDWyd4iLyxDnaTWy3CAZ2r4nvBBsJMksv7rhP8cSPQK8DvU4NDxPceQpeJJZdvuxundwwj2wS2Mc1UntT1Wnek",
  "key31": "2n5g3t5oLL3jH15ieeMprnDtQWfM4a6TKoYxUtWirhtKQycK3AUbGjwpg4MtoGwjAo39m1HLthSKd9W7DxCEqbnR",
  "key32": "4SH7UGEWzWS7Y82awgemzxR7yR4R1gEDnYZjPAikWf4aLak7JmhcgXVPjp2vRXqyRGgMeKaPV9THzhfsxiQFTGX4",
  "key33": "3t5y9L1iHZ4oZRXAnKQe4YmfbSDXPWZdWqkTk6LAbePaXrQ1Sye8m4tvHzJsapgE5ozdTwzzhq9UWSQJkhTmo79W",
  "key34": "5R5cJCmNb1HJzWGX1syqhys4ysJxbpwin32W5qjqbZvvazsHG5e4yJLZw9JbL1AZ2o95icnQ7tNog4dKARW9HqWY",
  "key35": "3oYFWC4gEZGiETghE3eN7uTnJkZeJcp4EJU2sBdMy56SeSem9JYRsXjGtBsywHbtN6qJP7RK7qgMqgrei8SUee9U",
  "key36": "5MdorR29gE9tUmp957gjZyAbjupj9f6JaNc4atRLkiCcjQxrUCwUUDHd8AEEFoL3fGo7PaSkGq2P19nRAMGeyZF1",
  "key37": "5b7Kb1uqhuufmFazwUk4h4hrmf8aYHw4KpA4UpNGUeazLJvcsXRHvC4L5gis9Fk9WeMR3k8pEkQVGmJqMPmSqGk3",
  "key38": "WGsDwdqxj27jcYEpNjxzZVZhiyNQX8MdZKvQm5nPDK6eV7Zy73E5dst4LGVkRNsFLQF1PaRNkYqrnRMmxeu45tV",
  "key39": "3uWzCF7dxguKDAE35de39TgkSWGDDem6vJ4tktFJoyR34u35kWQa2xBe5qJyqKfLZxqfQ2TzMrBPrfW3zgK8oyXj",
  "key40": "2HfEUfeiCJSBgi1cHrEJLArp2b3uzqE5MxutY3i6DQWm3AqUX4SikjHiUh7VCtvAL3W6KxhLEETQGBnHPWPskvfm",
  "key41": "2rJykjtZJBWrkRYFzjcYACS5jwtkZL6stJw69Ndk3d2xRvUL73xBtGJ7fai38cQoQNtmThUP2KJ168S6BdCq8HT4",
  "key42": "4rAognRtDonqfiqKyeUvoyPmhC81uJAeJic7zh6jvTGbEeLs9cwJ4BmAwxa5ChUFrid2cvVfodSYNu2PtxEZ6n9C",
  "key43": "fioiPNtc49SNiBuxsgZ7HgsnuN2wrzMwFyQ2LUgWngRWx6ZYY5Y2vaAkxt1CY9xHes6kLo3PVfy3Y859FRmgtqM",
  "key44": "3gYXvmwYmz1XSFNwQXUkRGtcKkpu5VXbqkoNAvyd2SisWXYUfkDuyYT872WFEhqfuPLaabCrP38AbWLaVgVAq1Gs",
  "key45": "4k1Dx6fH4oJWnC51pJFcbkBCMYn81WtjL4TbeonAxBg1Gmjmsax5VncNQGkzintcfonYjijY7cMx6wow124yu4bP",
  "key46": "2GaQZ1Q4Dpbu9PWxtkU2MJwkRVBw4kEHWSVCTMvDxNNbUx8y5CQkARhPmQ4FMox53TzSmUU7ctJmQWdkgH5RLCGu",
  "key47": "hUx6UvYSk6D9PoFpEZzN7PSoK67fKr8yTPBMoKE1BScXDhXNjDsBjRLjAcDWAt49dD7dVWGmGCHvWkvFNXYgjfq",
  "key48": "44MpGFxGgwDjf9MEvPsvMmSuBw2WPLhkrXnMGSErmz4ECxpLsC6YLb5cebFkH9jotUx2nUgRAybPH3viV34AqKss",
  "key49": "4j6wH7Ner8Zxg3AMaNirAg2k8g1SyrVwnz4iEnh4YqUwY7oNpr8W5HWKFBsoZnA2bVmjyip2yBmcbaqeLDAKVBsL"
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
