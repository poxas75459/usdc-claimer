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
    "66ALk3jbRHCypk2mBpVdBfTXjyG8EKsaN9KvozaCGrPVTjYd5nJjHvkLy3QEU6JvjGAC5oyJYbC6y8rZLLtL7dva"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WtibvRgZdYkuhWgcjrg9CCB7mg1xX7MCvBRHyDtmMdm1q5kY9ZdiRyaTTrksoFbKHyxth7rUwr3AY4kx9p1poGG",
  "key1": "485GprFqa2TXn535Qe8JiM7ynXeiknHJUH67Kda5n7jsksMPgvpr8drZ3rDNEqocoKzZEThqGe5XaUKvngQTUopg",
  "key2": "qojXRohsC9sEMNy8JBuFJfifCzkyfQ3wDZyrEojpXbveV32r6xtHwi4yynycdxLeo38uum7Ww2s2V2i6Adji64D",
  "key3": "2JrZYWs7T5JT9DY25bBdsRuYcHjzsf3cdZ4ynXRS4xWnoayPihPt73CL3JZ3XHBKrQ3vUEbHbet7r8qBr5KgYATN",
  "key4": "31FBu88LSQuPM3j7f4JP4gwEeUqRM199e6zaL6jpix11XuTUac3i3qkDvnBQFpBdtRwhnoddvvgb6BBpNa1k2G4v",
  "key5": "LiWZbvA9bkZdHu13hd8EbpnAuRDgauRmNcQTZ2eHhf5SyxW8aMqgpc1BEfmVCKiyGumMwUREZMwa6k2uXt6U64R",
  "key6": "3DEaXm5prtkbjH6NaGwdvD4V6FpxKRntY377gvbpv59oSoiz9c3wXKgrL4m2urs8b7ftfBzqg6Naed7mg4Q3JxQa",
  "key7": "4w1D5v5i1XzRfcq22nMKqXV6ESVDfMSx9huppHPkwwPafJtkAUwUUFuCLbHkGCvJnx2uPQk6bJ1e3gPv4TggAaoU",
  "key8": "43yRzgcCuvPwwKjsEGEQJQCgJuMsqZps6829CvWeAMATSTmVeEazSy2ZewhiZDmc4Dnu4f4CJd2PM7ULViaecfhp",
  "key9": "5Y9JYqAw3KxBc1Snq9zoG3ZoxyC3X7wtRQRGCRDYwUhKjTsVLAhAPm5PiWjnD56e7EbNWYie9omeqXcBRXZk1cFm",
  "key10": "3L3BqXpNSVR53SDwWFLF2aEyeHGGGxd8uP6WLRtgmnAPMFqQdEg9ZMCEJNLcyme2jszgi1b2MxbdyhsL1SSLcgYB",
  "key11": "4Vzsn5yq95FdXv4fDz32eLPLHdgpgUTCBSXqd2Zzm86vcLZ8TgCxDNfsjXfFawHjHfBmZvxPyvx513uN5zpSZJ83",
  "key12": "5mjoNGik1HTFdD9x3rehq3uvGxVz3HPehEEyBq4ioEEnERmHme6a1iPfTCFTtPdnFxJP7n5hepxzynkpA5JUX8bG",
  "key13": "3KJt5CVcLv2Ph7Xgm3ba5JDu1uw9g3tx5jVNNkUyFnMM2CLGBjqr8qgw6iDmpbAjpaYS6JvWadQra7bNwkyMeKyB",
  "key14": "yftdRZrtaS7Y9rousA2erzQK6yS4mBoKkZVpk7MLQPFdsGYk3BkbAVt9NDdsGFGrW6Ld55dcADfJBuzxBu5nXAs",
  "key15": "5KY4ozzMyou1NpsfjbYWYFp2ScRgVLQ66JZtn2D1vh9ezy4ytqDps8FVTGFeKsPJphHhMi3gBoSfn6fomUgcZ7mD",
  "key16": "54SLNYuHZDvxHjRz5myv3o76g3EXP5LtgcV1f8D87H3KwzdkXBCJeCf865dv266apZvafB65pZi12TZPTH9AUXVQ",
  "key17": "2yA9Vx34iegKDR7E9w2eGzLuTiCWgGsZcAwJjQVoND7XaAtis91MxL8GbG4LbExn41wKsKXgJf7b2oJVuUqKskgb",
  "key18": "41nPSpYP9XJxbkWwaxpQyvTVXAa2r2EMXex4d8HugXaf2dDdFnyhmq4JoW6P8t9i8trPyiEZeJoDJzWErEKZyihc",
  "key19": "2EDHLaWQE39vzMpfPK69SxTCpnKaFZh5LHNFFCyCA45Fc3VH1zoBGX6B37owGKVv7WQws6WKL8LjmPCY3Gg24JXK",
  "key20": "5iU9fANP7o7kJZmDRQ7f2xqHw8UD63RUPJEBQ9T6sbGidhMQJ5wWBtN66TGThGy2Zuhy3tT7tQkHtKfnxPLorUg6",
  "key21": "5CppMPBdL2WyQ2H7r6B91ZHyo9WETHbhcdV7PPBdCfsnqikbUuE8nSN5KoguhdZ5m5gb4fDqtskkbZ9dKRMsrL5o",
  "key22": "6tQQ6b66ZsdgUbDMMHkKbcQ2kJTDHbp5ufG7PHrSeG4FmPbNxnQz1CqxyhoV6wqaWH2ZWALLCSJYKeKvLjuhaZW",
  "key23": "644Gy2FMo7puXjUkkqmgT66iaxXGLEYWcLfkYnjNCrgViedE1oyNmhg3USaLVkph2tXmMmRLWEKf8pvD2F3CfL5K",
  "key24": "XkjUKwstas3KcRqD1i8VWMDrdCekn9m7A3PL7XYjwc5xpuu1jR9vd1Wi5UoDcjFVE7x6tkG3VfVrM1wQ6y2ccXQ",
  "key25": "2dHTvf5HsKN7pxEtUYUXD23wbSKL8gZ93zpnysjtUGA4hn994PCevANGfQ5BtJxUW2yXz53vgMG5cpyr2HZRz2b9",
  "key26": "4UGqJDDDSyrcX83HoA9xBBQ4BGTeZ6r6quN1irKehAL3bqXAdZGmZTy7W28dRkqyA376ZZr2m3cpzco44VXd4GXo",
  "key27": "3SG4SiTTrmxjQbb1F2UT31mvHheTb1GkWgjR9uqHmH6GmNxdyRM1xuDuRiaW2SCmsUVHCuVEHPdGpXUAjWBkz6PP",
  "key28": "JfW2jzfETRkVgBs8aabVJe4Vc6N75GGseMyLUxLSkq3BACTgzM9fKa8Nwb4Sx7eSsuJ1xAVgQ89W4uxmj9AoPvH",
  "key29": "3YThYVbon57ZrQ3w7oUyrbYJhdhy2nqvn3qmBSthcLUF8Q25Wxcc2fKT5egvYh1wiezZwbD5rrMpFHAo9U6SXUEJ",
  "key30": "5vgQUZsvELYQZqcu5U6gawo1CuzKxZR4A7MMF9YwyEqrsdVni9fdGMTrjYhUUgkNgimHNaXYJk9oMwj7L7qosgnc",
  "key31": "c6rmyoG21L1vVXBaxbjHEHveSXhVsR94pgJS7oAvXQJ8HQNvPJ87UWyQLrN9nkjvHpSgsq6cdaPbk5dcDVz3Fg7",
  "key32": "5dScghKJFF3Mg5xFUP6bTcwsYSA9y1kuayh9fPnYy9RX5ZTLKNyH15ExdUyNiNDHpf3pxM36VgpdNPsczwRKRZ7f",
  "key33": "5XwnUmWN8KHnQhbCjP3ExEpd77GtzJ6UaWymjrCSPBEDxkXeaweBZiES9ykDnRZhkipCCL6gdGuNKR9VF6S7M1k9",
  "key34": "5v5rt2EysKmdLNuim7QaGXH3WCYBTvuCbFAjPoiDVcUmcxcNnbLqezXbo7oapMKFMnPYFuHyEHded1rNtsgfkrQT",
  "key35": "fpDngnfSPTZQs6wG9pnFfnHB7UWnyZQvNwAQu3wxymP5qviejq9ASusKT7tWxekdQhNhwUHuVHa3R985YBT3DGR",
  "key36": "2MHjRgtP55Tj29tFS2sc4y3ginMnjrxk2KAMMKVPj46LyxfusZeFojzHJyGeUwyem3kVhWXYiqh63Hoeqjmys2pu",
  "key37": "3qzL7Cs37SaM4TTGde2pXTeWpodsNNWebW6pizMNTA7dimBSc4W4LiTdxQx3F1vaarWe4dkcY9BWy8EN3FYpsPHQ",
  "key38": "5PVUbC9n73WEPoYQ3vycKsqs3YWELxJgdw9xYe2hv65c24QjXeJku6SwRutfg18gJ7SGqXpHks3bRBycy6FXa9AG",
  "key39": "5tugHK5TMVpCJUwLawCWCZdqnNgKsCCkEtbV3uGsoEpvzMzttcZR5eVdwEdrmAbwzyKHzLdpguVobRjtbSypLAXB",
  "key40": "48zAYgD9So5UJ9nu6XhHfMoYx5UMyPg2jVvhy9whYZwpEBoR2vSgxVL7qj7jMsUJB2eKQYaXqdRf25uWWr3iXNoB",
  "key41": "51MCsRNBfAQ4HriFaf5Xo8E3pjQXr6qi7e7yo15ZMzLPTsywwHEKSKYQCfM5aQjVY3utEoN2PdsPwpbeX4NpqDH4",
  "key42": "2rCPw7Q3CHprBySLcFELDnJkLp5t8veeY5U9sagnyxWUosyTrNRBPQEDep7KwdzgkpmiFNAXEruQRswqFzypTVoY",
  "key43": "34vg7XcjdZcbioRW3vsk64dMh3dDPabzSMc83QLFJy2FhYTN6qrinizvEgretd3SMFVvKpbmHtYZGmD3ywAeJfyG",
  "key44": "4t25ShnbYVHSg7oYqrxgN2MzMb55J1H2URoiz67SVRCvxP2FfEUvcAfbMyNj9SXQ8XKSkDJYHRcQNiaNSk4dRM1Z",
  "key45": "59cQbrz4pW9oZpwzeUvPeSUP8a4uqz3gBC3MEUedCa5kyAVs1RugsGcVZczvHKHB46oE6a7djJ2VRThj2qDPF9cf",
  "key46": "eCNs59CnU4Gx7xd43QncGVQ3qo9Z7Wrxo1Pk1tiobLk4w4F8AeQSGN5qhD7SYPNegiLv9hSa9HTtjwezAZA21u2",
  "key47": "3QN2CXdtqS5mBZ94NP7fZwiXxGFwHzH53TA1ftaFPQiEXX4SG38fcbyVdcBQGLJJSjGwLDEdPUkU8peCwgRgH26J"
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
