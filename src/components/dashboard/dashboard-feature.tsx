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
    "56uKSnBd2n4QzeyEq1icR2foZw3Q4KxDd8W5gi8QiEuV8TAgMxnCVAy3pihGA2oGLPshWShprjafYbtZcYyU4X2g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37ikZF7UUJvNFvEcQD6cstM56BvtjagC6kTvVDeJ2UUWdcDZAc2amY5acPzyAmwMbso62mkLrtWV1uWgr7jfQM8N",
  "key1": "36z7phfcD8VtBunVzjD1qKciFLHfCsPpnwTXv54nR4PHjTEvyFH9mgCdvrq1NsKsPqecmGUwfJtFob4UKwamXoWm",
  "key2": "vTidpWwsd1AUDbgsXg4WaMisvbEvaXJPFJihiZjZyBo4chzJKSdD3vEBPYUgiDanLc5s2igSsivQdKdmE7GUC6c",
  "key3": "5unNpL2FWqGVqPzofHAetQA3yR1dkfRcdy72cdJuGLc9JNe1cgS2DVhmLYkiDoUAUJT75acyiXhWy8JPqZYYDjAT",
  "key4": "2bEQBU8frPeXxHrgxmW8sbESk5TND9SEtssCXnbVGDBcDsJ3DoB3gsQFwuG53TtdYDyENjMwXYiFRadb1HfCvKzR",
  "key5": "3jppQvDtQRTwP5LNfKdX1Q3gg8ox8m2d5VcbgK8dchqdAWnqEodmq7Y672Z4svjxoUwBUH1KGxRvkyYQKgo79Jom",
  "key6": "2CsF2vgxbfj3tKjmcnMdb4BMD7XQijW9CMvKaD3WSVNzhc1gQ4mA655FVfGRj3ez77EHqTXATNgUtDVn9sjer8fc",
  "key7": "2LFUK71jnhqMCe5fz8MTv7gU9HhMdPrEg41D4FuntA66kRDA8Ssm5j3nzyekdsRNVEC3CoPpYUHQomFrVnVyjp6j",
  "key8": "sSMqM75VBSDvqqMwvsLGW3QnEszzJecLLcFSFkQyipyn7mf8DQjgKVV65fNcztmXu19CMbrEUGUhi4hBANSJHus",
  "key9": "z5X3WkFJirM9Tpf9hYkNGk8F3s89BzbQCojWydenM7ydwTf6AWcKkwKzMrf9XsHP6CUhGfUyZ8QK2Dmof3t8AbV",
  "key10": "3bYDMVQ8KovpqPYusAzgXhpbG5eeBKqf1xrGAcpeEStnX38FaFzFXbmMy2hGhftiHuB4ddmZ6aeaNmnUgEzFJqNz",
  "key11": "3xU9AswuHWzPateiM8wrfYFrTrGtv17qrYQ7otDUf2ttVVSDQgLLJf5s7925qRHdDkRBnVf5qCHNH3p8acrqzr2K",
  "key12": "43tdD53Xrgiks4WM5niSHF4Dm7uTpEszcWLWW9ETHeHSPhZ5bHR867ePKuoa7cYnLSvyfL8rmdUoKyR9BojZHMtq",
  "key13": "2eKNetYb3nApFXhTXmh8JhztHX1pHfLrxvgWNgrbuwPfmsdVVLWi25KZkARfZo7Y3gThfTqrkQgMscMUEjw2HPuS",
  "key14": "2Z6uHgTVvuiwcc9zFd2kGESP3ffX5B4QTA4fXJkPGVid4MEbmSRdC321qyA3bTpQ1GoQAPFcPo3zEgatyFL6zVxX",
  "key15": "4eqegEEYwt75Sk8VHoqfF5YGBt6mMjAogn2UsCreNTKY9X7tnMthje61JoHaWD5LgPFAZd5BdGeNgw3SLWtvKMy6",
  "key16": "4ruLaAB7NgvL1ceyqeGGQhi9KRtrresQphCKkbmZLc2cLTBJdkcZhssWPCp1zujAUfKMh9femB114csfqhkGkjm3",
  "key17": "5f4T5vPuFnip67Y6H6ooXf5N22qgZtmymsFVgicVR6NHyaujrPL55etRvXWBEhja7Vh5WhNi2u9mSiw7waMqWpRW",
  "key18": "3hdnUXdgap9Ek66vN3tYavYAQ89ToMSUZMdRUmah2hjomQftfJnPjZUDexvXAtjV2AdfoLkxZJiKAAzGXLvZxU9L",
  "key19": "59BbqXbx3NWho3JbS67jyLbzTheq1A2NgEpnAKgtPWgMXfmhJec52p3x1cDVg1BvALtRzAUzaSAFemmSgS5Eek7z",
  "key20": "4zAAfeJxGA7ht75VnKR1oYBRvEa2rRPhhbVCmgCLtEyHCRwKuCtKeUAux45QTiRGP8TuyV4onWFSTTyBsDVHJcP8",
  "key21": "4TeDjm4co7avrPKXzxhr1Kn2hK4dTrnYWg51dGqXLopq6o5Wju2NcjXx28VbPhtyii2jd9jmcVuKdicAxUCuHE5u",
  "key22": "5ycKwm5bWG6RKo634eZNMXvMwsCg1VNoebWnC7PE1GftNWVvQoPggdXGMocPbLKUTJMpefUAQuMuGzNcL5X93kDs",
  "key23": "3pyaPGSyZKqS7GbAA6uLBGSsLPYWorijNdx8wci4aboAeb2sNm1ZtJAX7ymHouoD6G4QGWT7ChFGtJKqWwmzUsfd",
  "key24": "4DgRnVmG1ypCn5fTPciaYtcvFgVaxiTah1kqc9bufGsT1T7LJWp4DHhhbqYXVig8nw8wYAoQLqwdLXFBafQaj1rY",
  "key25": "3xAhwb99rFcsz7xLEBA8UqHh8LTr5QrEV8Y2StaaqqDihRiHUGdc1erEsMpHuzmJmwswFZvqfr3udiUEgsqKo1sv",
  "key26": "5crH1aenYZZJaZEaiYJMsp5xtb2sDiGmp5mastWRhnXDvnobbWTA12sbWu771gHfhwTkgwjRYQJGGBquhV8UqwT9",
  "key27": "cBJZ6bLrGicYmhAqEFrrU9dGNgnd4rXxY6jjsGNuL2bnV46ow4KrvRZHR5acgTG7WcyFCPg5Qkhym2hRLaYBRUe",
  "key28": "Vhhmbr3FFAa4teJ9h7GfENMHrFJTPAvmJvLmP4hURrt9Q6Xm2amxmWce97Y5CtZ2DBWfqgp8iM6LSTRtHZjgwAj",
  "key29": "66t7gHkdMzUBkGVZtfeEq58GXBpYkDe9gLeLmSo1T1q3oMXdSu1c9FszLtqAmosHN89wdAnUZaEtki1rMVf3jPob",
  "key30": "j4c5ByeneGx4HM9FKxUVaWMW7zN7RvzQMi3FdA4snbmGMe658EcjbjyqhnBbmL3n7Z6rBpxVcLju6VAiv5qfgLE",
  "key31": "39PVKjsscsfErW8AZeiTRDASKpPN5D5Hp3kiHyTMEy8AZaVZgrfEGUoNBZ29xpxQL4Qmm6gEhWJByWKbfTmqhTFi",
  "key32": "3N6j1Mco4MNqvGTVziKzcSRi2YVQyyLR2N15XufTBYDnspf77hoT6pJsKpcBKhGyQtondu4MZMBkrHAEQTjeEujJ",
  "key33": "2fKBgEegK13uamWEiBrpeeNhE8RUs6rGbjaBog49dTB7aWS2ngNVg8yvcnw79gvwcTv9dNWYxamy8ZHX4nXWrjkm",
  "key34": "5sjbrDaL4vhQYNNKwBYwmy5SMjovhZy6X3uCns1FptC1mm82bqWRdVKr2B6nkgLcGTH5zWrhm9GjCZy3AhvhwvNQ",
  "key35": "3r5vMCX8eVJKZxtWkeQMUpR6Eb5Bz7R9NaTbUqxHikPKgCdhYxDHZ3wAd6cVdkcwoQ8VsTry4MdYsNdvKs5Tc3Wq",
  "key36": "4Awqm4nxvcjKVQmqMdLNL2nLEc7ZZEDg6fUaEP1EwEBNFsbDqfadyzzdcykwwxyQQMqEvHZw4EdA5eHmHQriWFAe",
  "key37": "2ppwasUqD8rDgnd9rh8FebU5X8m2TEJzLjhsKm1G9KRavJEKcsVVXpivbysV4tWdcmxiybu796yXF6fHzAreZrhs",
  "key38": "4NJMkTLA5rhK7jji1ud9wbUstZbRSd5e3GMN9FdZq1Uk1PwPVkMXNEWSik6jgR7JJ5AvS5q5EGUNv4fWHiqVAVpN",
  "key39": "tq5sPpk67oTFyCSCCYG2DHxtj2uVUZSmnbqpiEL5TyrMuVWjqr6fQNVuZZ2Uv54hN9x6Wsy3jzADVZSn1R76a6C"
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
