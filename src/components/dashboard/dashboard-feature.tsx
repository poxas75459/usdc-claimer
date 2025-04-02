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
    "5Y7JofJ8PcdEn2ohRyf5yZPnj6whymdwJg9SSBQeoW2ozqA8Bqw4M9qygXvPaCHt2NT9qKk5uEnubyuy8XkjQ2uU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x4duWohiJDmiRcaneNwGwTJSL8DNU5DurRVc1zBDQMMGwky95vesLxucRHZhyZRqpdBCN9uvKtiRrBvhHp8PwU6",
  "key1": "3ScLFaTYjtGgRRCpo9Gf7j8Cn2HZwr64xL5btfsMqzaK9xdZQWavV6SWwqUfGdF7ey6WtnVQgsYmtpkHGxpXK5TT",
  "key2": "wCUBTb1RN4Cs14oPcHwWxdY86xV62pB9zpYGFbaQxXbbtTgPtL2Q2UaaTPHHEX2wiskPg3TkNyuru4RNPh2r14A",
  "key3": "62q5FZPKVbjH5wAwrjBqLQrdcLnPMZr2D3gKtCTPSBAU1btVMYB97LFPimUibNqxrojvSfFSkuTUeuk8dZUbfWtU",
  "key4": "56hBqctBrqB9jQVXNeVbwiuK7J7P3MyxfPDtHmuLH2N2yrB4yvcx3uRRrPKEJNsjNkiRNDHsjeNyFDvpLyokTaVq",
  "key5": "124W5VRiN2F49mJ9NQ3K4Y3BmdYBaVgoCxVRqvni7gbWofJJMbXLjMx7MQZMc4JuAmbPpvDWLdKzf4fxDN341JHP",
  "key6": "3Lva4gv1fK4MNHbwEDfhG14bUCZCcqu6BWHsS9muz2F7bXTiH5cFNf6TpKsQH38sdWhMeUpA9But9wwg6R4VgokE",
  "key7": "4QcQAdFFgadjzs4SJLDEtvzNZUaTEDjYhEywKHYn4GDPEEzQQV9Yt9Um9FfeJCSs6Qsc5dxqfrfaCZ4Vsmia6NsP",
  "key8": "5mZAkEgH5fC9h3eADFh2qXyjsMjaw7BrWsGphendA6roR1JcRavRVMvAXieEduSHsSVemE9GEGtzMB4euU1ffu14",
  "key9": "yHaRKXu5uySfmSAk3WgZpeYG3S7a8RSm28phPuinRBGpr2RvJKTMBPtnLVLMY2g4Nkif2XQovmbdhN3mZee76G1",
  "key10": "35awU2pVfuQLNCqZpMGj8XyQRRweVrT2p9CQR9smC9KPWsTiTZRGNjdcXnbFLVToNRgQuU4gRqQY2cmJ6mHD7h5P",
  "key11": "oTsbSzypVpu3ucBt2D2HWpcGjmnXvauMXBaSdpsJTQBxiBrtpzo2TrmXQ4kTBmqh7mqdnoCtWu5jtXaZAG3oMpC",
  "key12": "53E7hXCQEUBGGmNHMDTQuv21bhfJkXC5uQWeavQkDwiyCiyg7wr3NHyNqpsRTQhPnt26bVHyaQC9NWgPtAzJFVEX",
  "key13": "4HErETnz3UhMMndwC5YXw17x7mJXeRPjUmR4U1CivFp6S8LCaNZUNoyzSdsAjBBkwbSZkUXJhpgqFxyd3tSL1QH",
  "key14": "TCdgvCRghdToTnduxXYmyPM31JwHE9M1rgByPNLkXnL4yRTS95wzLCBpvsF8NYkRoLb7nSSthAYzPss3sVugB4R",
  "key15": "32P4moL4BabJDfwnsy6wngR9rrSs3wyZNaMnyUZXtq5vAFmnRmgQQWugWomFYiLFt6fUeu768ejbabhkeuAZNJ7F",
  "key16": "4aJuUj94qcFeArvkhuMJPtuKjivyScrXh2kfcgyMPpGEWy3ELRTdxj8MjyTEmpT5LDpbbWXqjq4riV3JHt1qpTF8",
  "key17": "26ifYYAhX1Hxv7HFv3Cb9ktQA1E2ZMhrrMzPHFSxsGw1dfQnQGD1cAJC2eLfXQKJpZQUTBFQt5vsBD9iQkfhSmQg",
  "key18": "iPhwC8MAezFFWefpx6foq3DUMy2zCbe8bqrUSHyDWSPQVMNF2SpGM1sjodjhncjfLSP7jGAqrpeNX7RWMxRiitY",
  "key19": "4X5nwSe2NfhTpsAtivGw1hWVhaR55FMEcur2TDtyTvhuNzBzUTA87riepzLJTwcTZ8shybE2GYvMqfRZwxovdckN",
  "key20": "5Ub84YCgJXtaDzFbrSxbjVNisJhJQfCBXyTkRNZ7FhrsLbLBTHD94mQ3ZTsEtcfe3Va1QYmggijNHerP1heUou6f",
  "key21": "YyQpw9vFM4G4dWRZ22EctP9Qus182W8eefYTjPFyMgFMyTG8yN2cLkEeWXJ2DQA5KoTCN8tfy1EgdtVTdzg9RFT",
  "key22": "W37TAdrxiisCWt7R7i2Ah7ft5L9taiXJdosMchz4o1mYpRCr7KHtiEMqNF3yAPASyGpBFiDjh6abxo69LVhwfwU",
  "key23": "3PC3m6ktuyHyqR5VGVoDDn7buxM2FpEmyz1FukUQxhUDUhvEnPgxJSwyYhmhnYAAP595ncqozta19Ac4pERDJXuC",
  "key24": "5ETH1HjZmryGXrihes1Gs3Qkqhha5Wx5mnN1gmHy8QkQe8Hj98sWHthu9m13WfzNbntfjU79dsKPK7BYJ5zW5QmL",
  "key25": "35hyVfSh9DZUSVo1mZD4JW8a1RYCxGsQKYB7UNkwA4EhtxgFFmK8V6kJfckCFRPZ4kPLeHhh4SUuvJV7Wqjayw6s",
  "key26": "2AfXGQZoRHBK9vBPLLm8Myx5mRygP7nH7XHJbybooLdSMnT68q3Tw2bKZvUyM9DvsjF5WoN95tsKHMnoVVP9DbeH",
  "key27": "49Xv4DV9EABN8qySQR8vDKtLssq6yiuvRWqZvTcyhUPaQLTMK8njFoyDwsxjYoMiK4FQ4w9kySPq5RN93aFufsyL",
  "key28": "56EAHKK7M27B2aGhcmUrhjvB3PYPwJJH3oC3n4Ay2QtggRyfvB2G8yjEc4g4tjYiLjobJij9hsuneXizPeCHKmWg",
  "key29": "586Cyxt4H94bwypMDDB4Rf7AqEkfvoykDCp7NJUJv5ok7uTQLLpxJzr1tdFgJotPDfZzp8vPxU5p6PHwstRCb7Gu",
  "key30": "CQQm8nBcoTqcQJ1remkb62HebzVAjcBdM6DYBS6bNJh7CnJf6ir8mxiBKytKoRL5sTADocBUzV2P1SGyGKHsVQQ",
  "key31": "3gKuu7j5dcuL6KVonXq7zu5w4sfCjU8qUn2NJParbDLNQp6h21nGHU8yehCdCENyjaHUyBmuP575rvht2r1CUDTR",
  "key32": "2Jh4dXfaZadzD2gG8aTSrFL6ZrLYn7U7WdfTx1wm8D2vwHxWTPfMACYjqPiMP3NCYBX9pEgdxZzKDjLoCqR96zzW",
  "key33": "g5vSAYvDFFXkjqsdQ8fERdbbZtygYShGPN5DBPT8eyTiQ8hhRn4ppqccUGZpFMwZrssBNXoRwr54MYKFMQhAR8Z",
  "key34": "3oaKkz5tuAgHGMcHBX7i2R5TXwdnajk38Jx2dyWWY99vPWAPJNb9aH8EV4wezGRwFq5ASd6nU1pTAbyK6jSE8qyo",
  "key35": "4AF8XB5y6AjCdZyBCkcxL3muhJQ2zmLo7yjiiSXZmQWXKYJKuvqHJWrq1vEupVNw5cQbchsxp5uuyVAA9ACVhUDK",
  "key36": "5LaN1K9uCw84WVWk5masXGaptoDvUEmX5jXNZ3oTXUTypRd1zZP9GQKaZhQuyZQoFd46kWhDhsAk4NquxngdAK3S",
  "key37": "35tV8nWLGBd7FxQN6MySSyhp66A5tiN7w3rAhmPmRPMLVyNmfemUgeLUaeFMJgCQFm8kjLtpaj8cXyA7r24i6Zrv",
  "key38": "2wPzDHfJdEnhHNUwQGvNfqSHnqKZQoBUGxcyfQowMqSkuF5XjX7G3QNtut1gc7ddVF2b5wbbzAwg6zrHTNuPZMsa",
  "key39": "4KahLzW4t2y5x2CHZBajpbxpBgr8Q4ue2F5vxjxTP8Mi5rPi1ZH7Q4SajkWrFJBmNJxZp7SdnnaFj7WqU9wKBZxz",
  "key40": "Sy4BjKn9oJ2NQG7XYGnup5K5A9iBjsDg6SKHW1iCNGee5vqEtNEgAsxuQHK8S5Ufyrwny28f9sB4vtqqZ4HcAXw",
  "key41": "GsVsfhZq3He4UEL2SW2dbCtGGZjEyrzpCZSXCWdyd9WFCymgVJdXz6kstWWvvKX47NtzYXFcANzrjL1TCkTwicC",
  "key42": "2h1hyuAPwDDqbEbKAJZbv9Tsh9oxchWH9EHyyWwNUxLpxUEqszEmwnohZZyHiMRsXFFZHdry2sg8TmQtcfteHVEL",
  "key43": "3CPrFBc5qX92nfmjJ51cUpDN1AzNaFbHh11yjtyHn3dV94ysjubNhZzwywbzVsF5xApCuiV5FBRVk7447XrRHQJb",
  "key44": "2qb4PBpS3WLHwtMe9LBe4FNtqSAu7zFtU3teonqbwq6S22N9dmmkDRBv6UAr5HsVT3rLkqXU4PYNnA9JvxbfGNFc",
  "key45": "5fjo44u51MiUXNR4p4EbC88XcpUrtHhruisBRe7bTZbCU9e8ZNf5zY38xj8AuyTuWhK2qGyf3hQp6AMRoHU6SLMx",
  "key46": "495txgjPjDmvKECDt2C1JAenmJVhB16867YX76gEUMwGYr9PA6x9MGZWFVrVXszRxijwjKrGUtcsGP1g7dR7RxDk",
  "key47": "5kv9u2vf8t7VJjtqMuFd4LBnu3VHLtB12Qxee4H4wkausvNdGYZQF7QYPBQDrY9GQzmVm79KLefHPociBuFEU9K5"
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
