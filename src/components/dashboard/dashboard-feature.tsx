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
    "2CG7igAWPhx8AfUe8eqctyy54btYYvyFggd9AxDeh4JENim2JucF9hHmzSRbxJQHPL6Xrp3uLp5sGspLngqCzazd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dDmsd54AMiE9SEcK4y6ru8z2ZyKNWdnUV6hFY2zDVYzH23ZiL721TR5e1St4aBhLpv7ie3gwrGw5ztsvicfnS5h",
  "key1": "62JhUS3qH4VXB5szoRM6jQ8Q4Mh26Tvh41hBkfj5yxeJTH7BgknHUBvcrskddVqRdkRCh5TmQ4Ne5nvVnPXFeHZr",
  "key2": "22dwVYutvk9TAUGuYQvpRUQEBjs7vaotw18vAYzejhDuUZTXPMiurphfVo2mbF7HTQcr5YTLW9KNyUcuzrvU2ft3",
  "key3": "4AkMoHcMXZoQbM6xZd5FXsuKEcdPmiVriKEsXEZZue15bwsjAY8ec3W5Pt6xhjxPiFG8cRKQYWdwGCanrBtSgCBS",
  "key4": "64j5g3TEc8RsgeUDexDGEnLxTissJoAWLyQ4x1MxycEhRaUfxC7UgEYJRTFa4TZPuCA5DnYFT436R7nXVbteUbP",
  "key5": "5fUP6hJMbpoBjYj5RDpwuCfNyxh1NYQboLSYwf7oevTUaNrWiQx9vpXBT5mQyeEaiYxGqREM4Ji9ZgjUnpiiWDKi",
  "key6": "2sHMoYQYWJMVXV4NRTDY8gnoMD4qtphLBzsvcXh6RCc5Mi642BHEnYsJnb7buwkBrMqMJtJ9wnQx81YED7UZHDUG",
  "key7": "TfCux9zTYhL9uzs8fcoKmVMamCm3w2aLW3TuMXSJju9mKCBAX4zkAM84tkf5CqK7SvXs1UYHvtGjtEmP9eimJcU",
  "key8": "QJHgfxJNMcL5aJjHBc88KM5mVUSBvCGavxWfbny1ri9BMCyuzhU42yF5uy4k3tRGMPe1ziApqAtH6QgVJMvkkLy",
  "key9": "5ZkT5rawwcM8xo4LHojJLtANsHTtu16H3DUPYb6XxJ9QpkqZcVrzNa3QaXfE2m2wW4fUz9v5SVnkf1gcbaFkSoLg",
  "key10": "4qQfz4o4spsW9FE97DXR4VFNq38eMUqqP6VEG4EpdvrknjC3FReS5tpSwk8QNj1U1ePG9b1LTpozJPatoNsW5NaA",
  "key11": "aJkn1d8ip1EQV8MXKvpLvydbqPtErEUYbXS4Nuk6qQ4Tmr9QkxtiAeEzx7rPNVKtrD2z7hCANF5wNZFPxkwwU3t",
  "key12": "3BFBPVQWM5vJ5yt3EEZMe7ZcFnaza2GoJhKjcUgr5A9wqo63DKhBs5ygoBYaBbs7kt2HU452mC6GnCvs8mWj4KFy",
  "key13": "3EGeVVPWT1ioegQ3vqhdTUHq7Mg6ZZmsjFMDZ1vhJL7HmSmsKasJciiZaFMGUGDrLENkVjq5fT1GQ4iYHRJgLdZA",
  "key14": "34tPHvBcqoGT6wyRpBwb6dk4nS35GFXS5Dr4F9S1nkJVhyQR1r1MaCYA3ufc54M9D84PSQynNUSAepYUt3KziRWr",
  "key15": "5XYa43wbvgHAvNgiGTeWfryEvqeVt6oqdeChQpdDoJNTpGULxSB85vtVtwbeumsrqWt6KNtzNde71U8K4YLyRsFL",
  "key16": "2jk3FKJVmTTmV45c7MhPVBFUsabQi5X3DMADEenhNG2pvUSSYRjtGoTEZDH8NAPp4GcyeSHET4FHViSwextbcVHz",
  "key17": "B1MMCdPFjZ8R81CfqJ81nVojG46rtpxjuM557psLvoHcKF5wAoAXTT2AircBvA1WsGSKUyiBFwxWU6nD4S9kgYL",
  "key18": "4sSZXdqGu8kXS5VfN9MKDjkywjXQb8wgHbrHmiWgqvh8mo2usTLRLcRX8E6KxM5hrHGsZTAqc9V1gdrR1i22xZyN",
  "key19": "51WWW79b5A7YVJhG6AcAVUmHHWQnEp6TVKU5JpbDEJ4vkkQMFSjXjqf2DfHAgt4h7C7RQvUTKg2iDSHmzE9EXuKG",
  "key20": "2pYdh7ThVjWdYpkGd1ryJ7BFNFCybpwr6uRZhjfFERcW5Zf2x8DtApGQA2pzT7Utubdz2mBL6xrvWGRgkp2cF2Ty",
  "key21": "4qfX5Q9T6zvhynsH1rwn4vFy39eLbfwbPDHnjYEoQRLgtjbXz28Y164b5xAefE12rPrz5owSp4MxHHt56NdkYfJc",
  "key22": "2Sx5yKuNxwMaWdFx37Xj4zVmExNX7BQAxeKVc91UPqvkUKoZF9Vf8WZ8mHXLu8pAT1zMAwCKkMwwx4B6ysLLaiVM",
  "key23": "6KTGwctzXxiyPaQ7AmDz57yoo5Ne2BJN7KnKYpLjyiwNttN3iPw5GLNvEG3rR74HrWztLypg1vZJ9m18DnLdVVJ",
  "key24": "2GLvpZEnyYpCuBAnS1jgtK2bitVToa1bXZKzTvaJYUUjN7rm711kgPQJSY7dpk7Tbku8LTNH1tC4Sm3UvcxfjUQ9",
  "key25": "5GLje3YLYmjzxraYck3w1MjezDV4DmY5MB9Kh8gWKiy2rWhaKoPycN5S15Z8AC8ZyHdQWKNMLjukrAdivEst8cp3",
  "key26": "5gy3pJZDSqN6EjWbkzqsiNkxQeRnRxLQkvcVtvYEkb9TteYh23Wxq1dGNuWtCy2gCBmMJWMbU56V5pc5Sj3orKKq",
  "key27": "4Pm2aHqtbsuDMX1DY3y7NQBbXcArjnkHwvEiiAcA9t4ga5uRDeSq17ym5taMkNw8SDcyEaYaw5ARxTexYt42h8iR",
  "key28": "AJvWUjaJSwnNZZiX4w6jW8TF8M5bZtfTNzsCNLbdn3Csy6YiYVdu92LgVgvdaEHedF5igVQSZnCcMBEZSZz5g3f",
  "key29": "xtMyCaNUCVgGDYZJv1TyMh6fQnbrKt1UV8q4UC1ah2xcVthmxqELKiHMgpRN8LeBJoexsNKqfSoZTZmiLiAQDsC",
  "key30": "4YtVFimcKN9GHiRS3crDNi2xTkAERHyJthWxriX2r34aMjWoi1i1mbJfGqHdrELtFfah2cL6QXZ1c299PPh1dc9N",
  "key31": "5Xy74CUV1ZQZjbuyH1rwdVjmthkohYbSg78UBdSY9phg4nzWf6LeWzpCQUiGFmFxmpA7hzKvcn3szJbCAoS3jMjo",
  "key32": "2Fz6Rp7BzCrfAAZqu1yDjAmM7CWvoKDhZn7r4W2HSMi1qx81GeCiK4LYLZmweP9ToZ2ATkHkTEUP9QK4bygHS2VE",
  "key33": "437FrQkPN6ba8qH7aTKjL6w4By9mZi8gjs1hasSGyrbYzFAtrXFkxq9fBqRDmqdCWLM35kyn5uGwfpdv8bBTG4Ea",
  "key34": "4i8F3DVdxuwKi21dTUKu76grq2L2beqaWWxFxBwCxnBXaDsC3YaX9Qh33GqRhqDeTwaPJv4xy4kYmHmy38cxydT3",
  "key35": "5MVJkH1Rst1i9GjtPWpjaKdvageFXE2aN1ZVZzp8ykLi4qBVgJmuhrSVjNjhjQ1K7uk9wffKEUkGghVisajeJi9u",
  "key36": "26RFVRnWX2sYRnakpFgDsz3R1iDJSK4GH3NkTVW5DCL2ohuQATEtZQoqB6QyYkxCHicKkSbiiZPBwpJ42GLoxpNo",
  "key37": "2So1kdtmP9CWLBPcKxgC15CUnnHEuSP1vmCnAJUrEFBwTisLoMt9s1AQxrZtopvuLdc3GEiw7MEk56sMop11af2i",
  "key38": "4bLF2JVeswwuCqr2RmHki18nYNef5rWz4vAay1C4ZySGtoV57aQ9LEXipCNZ2pL1u3vVM5uVrZGwMoSH5f4dN6kY",
  "key39": "2vfYeW85ZpGbBbAGt2vHbcPYSusHboPVnBYyxLEAEfP3BMvLNdPsRSHwhRkWJdyh5JRwTprCKPhdQjhoqPVbAmUr",
  "key40": "3p5CUVTkECESd5KLsrNSAaxnAHmeZPqqG84bTLtyVe7wD8bUQcK63zSTSKbzUVDJZo17pxwL1BjoSJsLW5aBctTd",
  "key41": "5PrV7WZYURkn5rAX1ysC6CGBk8AomG7JycHj1c7M1CiQn88vcdR2518S4ee1sJASMWr3kyodWn8tgYZ6pMjCTYVA",
  "key42": "5bXqSoLH4VY46UQ3x56VW59meQSDrReD9JdrynE5uLLESvuXXacPzy5qeqUFQ8sSzk2MVNjpUm18o984PXwgDqFZ"
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
