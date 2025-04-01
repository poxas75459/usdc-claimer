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
    "2XVdsWQbVu9grc989r5c42BVUrMH1wVz6D7Kp1CkY1KSchvWf5mnC73oYgLtPDVVpSBPpgBwU9Y94t7uXAE4TsKw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DD7GqPCw2LaNEMVNBG4FxH8YCCdUFbpvdHyZxQznDDuPvVTcA7ev9gPwcj98DJRkYuQnTfe5oMeGti4AatfSJ7L",
  "key1": "4ZHmUG1EcJX1wCFjZ1pTUsHdVxqvVf9xFEMZNdus3xGDsF9TpvsZCHi3qrDnpFLu4EatufdFjMzzxemy54N3aUyh",
  "key2": "61HCnZWDk3492dyf4NtM5ci3ATvbsekpFL5pVWcT22bAJURS2sGuM9uddQqq88J2bAdbMKPnD2PX82WDVkoufWXg",
  "key3": "EyYqMkCmVc2hoY4LnrZ6HjZQYcts3xJNKHsLZyoqLzK7NHyMQKVLgcpYEwXzPWErGtguR7GJWS8kTEwzKYhe9Jx",
  "key4": "5epzu6hgaqcQMe95VW83GTcmQzPU5GaPbPFmneJctjgtJryNZjuLMdJn3mJN5Xhp7kBneBJ8Qetziey4gEypQCYB",
  "key5": "GqgNdzVeyit69UsXQmnrrPMfwmn71nv1mVMLS7wjGiTxoidP8agHC5ubVGyZbDLX1v7k7nQ9S4cCmT9fcgsYzyU",
  "key6": "5CmCapfQgrvGyW5k4dmP9XmaQGWkG9cG1iCP66BnnCCtaNLxxMNvT91YFru9tu28ND1G2ZPRpsPF75D2Fje3nrWo",
  "key7": "5rwUDYTRZkjLkBdQT49U3feJt8dR3ufLnw2wx3oexK4srS72RPxB43cSFhNLWdM8XH9ms96dtr85AZhGGZ85oXUS",
  "key8": "3Hsd9VZtFzbAEVkBZToC5VJF7Lp5Yk1T2reSdvC3zdjFkTJ7YTRtPD6PdJWaferxJATbDmVF68Wnqtj9uyYr2Dvv",
  "key9": "3xK6RnKbvyJo1m5VbQd63jHyJTk38DD7khTuX9RKUA2u8cZ4AqQfe75GYWidLfpGBs6a5ddswSkQtGCbe472hTBX",
  "key10": "5jGXsewMfGxcZ94s9aYvYWpBfJ8PMnUbNXMtzhHmbuheNDMURZZVYuLta9pRmWyh7T2ujFZimoqEh8t6BBQHuPRX",
  "key11": "oWmCbBKGu8eaJ2vfqhsJhmYQQTXSgUDUWxg2cEtmHc3Y8MZjjtbefuJGpufivgA6KpUoBvnfqupAwbLTyGW9tWg",
  "key12": "35PvWag8HUhaa8TH8kf16F5H5gdqEYdFAofpuunfaEZrdm5xFgaqE5MS94zpxcsw4cz8wiNby1rd4oSx9LfaxaeJ",
  "key13": "6BanE3HBWJGepeNYBU8z1ixtbaV5VfPdYAfKpnARJJc1d8c4S7gN3PaQNXyAwNhAeEVWCxGecQcyFAN7T1fDLuV",
  "key14": "2zyb5AHiRd8a84ZeiPZSfFsV5SHfeKexWaMwV5dQKe3TJGgegZpUmGkmredP3pPqcN7i5383syBcr1x4YdA8i5CE",
  "key15": "4kiQScEbqa7kDd7P5o2PcNkN6LSfTv9zeBDyaGruLrS5BwGZHQtBpzcFqtE56RZjG96Apy2wysDh253cpHVYLP3N",
  "key16": "4dVzFCZSYh64RxDVfqn453dtZT5cFPnxqNaKgVGR49XMjuGni44Da2qEbUEvTjScaeEbryRig76uJpoEDgrmYyNU",
  "key17": "2EB9ytrNhnpGbRsuChnYMYAscgfSRJ4DwgXKMheiUo48rV3JF8FhsRreDSzYtaexemq3YddgN45Buuoq3REETxn8",
  "key18": "DMaZa7khvfLcAuoXKqLfgE2h7gwWMyNdNkBgTxZXFrZpQTYciJLwDLNXSaxif2fwd5CJfW5s11HWMbnWWmTMQMv",
  "key19": "3nHDGJcdycpjKMzbXBfDRwHZqX3EoTc7V2chPwH7NbRxu6KML2z4BZzJP8vGnW6HrLqwyTgdeWtxd8oBLp9LSGfu",
  "key20": "3AVE47GTpUCx39q3JVSjVGZJmS2GRJDhD3NDpMFA7A1pqWTwErQNznsohY3JXhjewu3QNoTu9XHFBG7oS5k1QcCv",
  "key21": "2zkAkqaGbCr36g96Y5edjQ9Y1qVfJheDFpB6AjrkP1PupXTNvasJwnRnkffeezVi7V19WpswzMtaUVLxhtKPYWZy",
  "key22": "5vvtxGPC57pokRDTjXv5AnfrEeSEhur9Qmac3pKrbTrtPhvGBVnBWtcnFutZwr2oDfiqrZ9WfxC8G4wHfRpzkgkG",
  "key23": "2gQ5VZcTYh66kt8uuzTaPMhNwCfxLHT9wUVuTcBq78tymwrSyxPpdyEM5hGSQzNXYvbv4nAJphiCaPkPzvoAb1kK",
  "key24": "YuxfT3WKLJcr9BAJZXM6FmfJcnpLCRpM39mTH3sBdoghREMXM2WCcaA363SeprF1zQcNaydSogEYvw1VUUjKKL2",
  "key25": "4CysDMPcG4w4PzABAtNrYmrjUKAgkUKJxuniKDKNhgBZsbxNKHaE29SuB3m3EGLsScNif4UAemMSYVssGzip4dTL",
  "key26": "3GMRht4d2rVw8vpJMQtNyZfAibfCfC3uCuRVExkxsDn6Fdeyx7vCdEd66gTEhZUDa8CTwg8dUQ4MLpxHBA32BKax",
  "key27": "3YM6qkFjkYPVoqRkxcRhD3xHibEYdpynPSEZhfvRRcbEcvtxMkrk3MAY6xp4VKSrP7wwKhzBednQYMhkeEieprfH",
  "key28": "52RBuVPmVs6K7cBv9oB4K2hv4BGD5eoddvXYW9fT21ujNL3XjaeDc56MF1EAkT41dtJsrd98sZ7rARdDczZhFoVw",
  "key29": "4TgrYCXCRfcYFPq7b9B8ofLqZxJZGQqkqYcK3cG4W31Hzd68U9FBYUV6L2i5mfbLYa4b9bHxbZREmf98ZxkqmvJz",
  "key30": "5uQVA5PzAbwS2Ms6P6iw9FBcYa55B5Hb575d5kyqvPj9JZYvji1V2L1xTJFis6gEcLjEA4qM1JSsXxBLVuwJKdWe",
  "key31": "36nD4Ry9jmh6RHzqYNfxSuH4amjxx3eQw6GBD8BZpPec8yY822QMAadNaB5JkYbim8aShFX3Qw9LH7MWUYfSC8qo",
  "key32": "wjsEHwcCvRZ24kC4Rq4seThNa4h6or4g3uApvSk1KberV3fT1tFBac4hUq8QFe9i4TDQssu3YLhQ6kvmZjS2q9c",
  "key33": "3764Wwdj4vjZEtAMHy4SndptkkeE9dG8cjujiepYd5LhgEHWfAKBnSZkMwEcWC178D7qPDfEKvCr6E8ncDV2DShT",
  "key34": "63VYVxTSjyaAUM1ebnEuJKG8YxCXcCHbAhiwqWktKdjfbNgSkGkWkTEqB6XzQtyvhvNgjgNAX5oentoUWeu7Mne4",
  "key35": "2KAzpJMqMK9Pa46w18dTrgeYrWLigFDJjK6HG6U8eUhiWCoiqFDKxzWpzxD3Cus625UgPdK16ctCpH49pGMogga4",
  "key36": "3ZwA1wX69bpn1yqJ8rxQXWHep1JgwcMmoUbG46CNVd5DSRxEHTf2aJXo67V7JG1ZpCZxvLKFrnyjyQcNegVb6vvC",
  "key37": "5ToceSR13ebKqyqHACA3Zf3iicK3VeLfsWnGV79wSLfLjmpT6ZKQYjx4yfeAR1fLK3tpSGGeZEv1W6p8Sd3goXD8",
  "key38": "5x9N1XPKPjcgYDZgF6kLUA9F8yp1WXGujiRrS2PJNpV6LUzKmqgHJTMVD8MpZ8XK9sn3yVjAD8rWbPMZZ6xWehgf",
  "key39": "4zjvPPYwGnA6mkxd3ptk9Ey9fSrhg56NBsww4wQfBRbAXmTq12QxVBkxRzcoDJwsb1TXswWXDntpGWpS3Qx4LiJB",
  "key40": "3k2mwfoUihqjgPBa5yER4ut6BHSmpzojJkRsMP1UA26wRoq8gZfvCCEnNUThSEnCCTv4uaLgbdEhq2TBLAJPzGJy",
  "key41": "2NB9YRwiioqJjEr8y3wUbfCCRUELAMXWcNJGrvg82RuVuFrmSwZsmidaS2BjagHV7Z91HMiXmCFHxWU6NyaUesYE",
  "key42": "33nskC2pWK1AuGBX6SoCVYzF6GCZemeBLxvj4vEPFVArwqVNatBSH7wosffXJqYv5hK4S7uq35aEX5WTYmnyUpNo",
  "key43": "5tC8kjLsUyjrmUCy3vdEguCBZnwbyeEQqwsnyt1BG2Dp9n9tTThjKeqgdf54AUNiEoXGrsXXjrZPW7Uuafi6kQEv",
  "key44": "3QqA61eSHtG3REjCWsTMkLjD8QnnrTQbHvSuXbKcRrMS5J3Ay53NSLkSmeXmeyZyzzbTXnDf7EyKLDeLE2WCHvEZ",
  "key45": "2PjYcxLjDsDswXMh9dRGoxrgm9bv8aViqUknG7QYCrvMESK8FudgMEkWTTZ1Ed4XcR2G4JC8FRTcweuNkg364DKo",
  "key46": "4EYt6DBNaNJrNuU1zmUeCQiEpdnw1QNsH75jovJqh8cpJQfv1BrWwfGuyvBKvv5VUY6sL9e1g2fBfL2yCNXoWCGr"
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
