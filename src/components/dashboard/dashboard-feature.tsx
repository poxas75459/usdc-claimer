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
    "4hsaAMDzAC7V2rQmM7Y1u3c7jcanCoFmxjNEn75mdkiw1ccP4SvNRAdf5AZkcXm1NEerFfHANGytFRQAjrjYRjT9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tQ2DiheQbHV1Ugtm7p7NpSuy6mEtyxaE9V1rA42637kHJveJxZHqM5y2EbAyrGWPFpDjPTmLiTSKqxwjEpRMQyE",
  "key1": "5Kus7y1pQzAVRpgYBW8aExVM4iFu1bCWbKE9E9mLGSw7Fe9Z19W5RRZGqajFjhy2TE3qNDshoE18SwV44hTq4DsP",
  "key2": "NWmJoknYYBD2UtZs1Vm8TTUog1xYofF9p8LCvAKfQJNjVy8G8jT2FWwmjzvwYgo7pGx96KGH8xTe3HQmVX3eEsL",
  "key3": "4vfaHWVBbZysppLewsdMKtFBcW5YFkLzuZi7PB6xaTPX48e5MLLK2oTZZbvE87EqhP5Tm4f6qgCrgSrqmdwBjwmn",
  "key4": "5KhVZyvv2LYP2FgSec6Bodi4ivwxzebkxca5jVz8a6Di9gJsDd71sVjw7MFw8NyV7BmcUfDaE2Q7mr1cSkA3S9CN",
  "key5": "3X9w2FusdkP7Cw8sHvKaxdz3yZrXqPg4sdBfjcAkriruB2cJg9dTvdmdhMyV5qtK4QBZ8NnPvUkB8ZyhoDVrcyeb",
  "key6": "5jeRFw1H8WZHxv7DKvi8jQfPVntCK8Xe1tZX7vSQCJDFsLkEbQK5ntwa3CWZnfhMLKUjD2q4o16AjJfdgYK7oNvz",
  "key7": "2dCALxhydQ3kJNrGg8cbrJaoknADzjBDe7Amw8DXpWNymWhG4XyGsMzudHqXq3DJ3YuGBU8DUdbM8Q1Hm8Pi3sUs",
  "key8": "GTUk5N1wPWMsAkejozxycDYKZJv11KgwXWTABkbfPcBBF5myEytZwx2k87Kcjy42r5bfk99VB4KiZUiTMvWWdZT",
  "key9": "4EwhZFfo8nXzEDmBNYJArbjZMWZsogDxnGhJtdV2PA4dkrxmeUfdpwTNBot7RqcSAimBPHPMyT6v3zjunUWpdBgA",
  "key10": "3iM4poaRmZcLNyDK9gvKxWJckGGPokmjzMpe6D1VV8X1Lv5iCfKcvhpzcRytz8t68E4gB2h2bjdYkwLCPoW7Fdwd",
  "key11": "3eJ7H9ycaxyNEi3e3rYovXegiEsHZyeKowTG3QEk1qTscw2yXTATbCbMpD9WS5ZRoTgRBGx3CvHYbkXL4XwPrc32",
  "key12": "3HQY9h7S6b8GEnvtc2XFW5xPurgUGhN3rWLSR6Ta39rpK7LiZuF9nTx8TNSKGDoLRn4PAjoEznPXoUDZQEZJ1QY",
  "key13": "49CcvwDrtAdM5jgyQSGYMQboxx4n2eMbLjht4sht9Fnqxo41vGpXM1zzAXjdM8rsggFnR3fBMc58eecbTuH9Hcx9",
  "key14": "CyWCNdv3kDmapYyRuvY1fRTzXRAT77N1u1rvSgTxiw7AmggTqGtfgPffKWU4UmpK8SJQdPHbTXBhsePcMMNzQ22",
  "key15": "iAjBnmfmgzXAZXG5v9afub4bcDPwahuBef2MNPTV6UeSbZoa1Lx9Chpdb8gWJbYHKmHb8Ws1jQHEgRD3D7jw5jA",
  "key16": "4Rrg2rM8ZFdw2bdjgyeJ3w5VLz7dtrjuTU3DJ7rjHjh53Xztj7L1Z3Mw85EJaEMy4QvNwM12NFkMQSVK25bngyAo",
  "key17": "5VGdUdVKgqQxBzPwyhDmHbNjWUS4L4AEGu2MuMxVY4HPcZm8e2AF292hcPGAMBrZBY74rLqzF2bbhS537BCaQ4g9",
  "key18": "4NkQkz2AHG2dbNQpi7py2s5LVbPCS5pUG7Y9KyYYDckYVdU5Jxs5seJRGjomd3NmKNj1arzDFgVEwuzQtSrpxyZR",
  "key19": "4J3MuzDh32a2mzmbLEbSFrufc5stnC5Fj8qXKMo85PMhgtSd7RDcSiXwA8HDiGi3X4ugw5B3iSNC52zyfTJCqfze",
  "key20": "3cdDMAgWraNbmWvT5GXSM1NE7DzGbzMZdy5dfA1yfFBpGV3sYHU1mxsEnHKFytKz7WkUqjqoSDmA51o2VneJNLw8",
  "key21": "5fuU2GXHw1vbhgp7ws7P2fuGbmLrvyTXhTvAuSJnKp7cFsX79GuAg7ZmreCqn9Mtmpsrn6PmEcufTcWkAttHWtfV",
  "key22": "3fTrPUzJis8bRi4JCk9vjjWrBZoSDwDD42TsyJ7tLYSjUqYae12kXsyLgBbPrrByPYoEh9uxaG12G3fpaWxPiWaS",
  "key23": "43KzeXovbHDZ6Toxa5WCNTtpJ8xyopj8usf7tzsPXaWJgKqs7Z9T6EFgThQm5Tv7HgzawQzQQkqGDN3vecGHKrqw",
  "key24": "2Yd9vFnfrWvAqG23WHrFmGziJWjNnA3rs8AokZVBSC1rYoaqN5HX6HBad6XNGb7jcw19uhUhYWMTNgTAeVSHbUrK",
  "key25": "5AnM9S9UVKZshdYybvrJiJhn4SPDhvYh7k4oJeLVpbD6fEHxBTiV6GkuQGDBaR49Ac24eevtHmmiLZCjtppKLBvX",
  "key26": "3AxZB27tupZx1qi8soVRe4cVaupcrfDPJLz9K6YxsCKoFPaMyFUvW9Pu9wMpejrGztu4KaX5vr1SZJz17Jwbjtu1",
  "key27": "4jtPjaxUFSPRSgpNZoH6EfZeSq4tu7jpjDUw7G1hQbzCfJdCGYjgFJBPNY1zzdJoC9tc7tF4x6TR4FGn8hGjHZnX",
  "key28": "5m2G8n3KB2TtCpqFfHpV7ZaPKcnmSD9skv9nvUY92RYGgaDsAZCF4Zy4UoqJUd7Nf9Tz1FQFjKa9WePvyqh5abgM",
  "key29": "22YpE4j7jb6Sz4dYQPDXuk3UFSNVNw4oXqfaehf33aknLoQBLyt73jLgGdU3Np1vapiXY4wvaATQrfKfz5WgyUai",
  "key30": "Wpenrm1LY6itzeQwTJ13PPK983vuYp7NRqqrfHzu5pbsXXTFfwn37wXHXimjkEtNYmABCbANWYmmWaBsTdkYiS8",
  "key31": "5FVXfnvPfBRKzRmbKLpmn58xHgYwAJPLUmzQksHMLLTDEGmCybBtdd3TTQ2URf49ZGeg6KEdkcC7XPBqNjrs8Rat",
  "key32": "5hVTPMjwo41irpsPy2XBhi2ZKUZL7ZufxMq3yhTHijDtBqvz55Gox7PWQ4nc2Fy5mCq2fRwuzMHHBaVb1ofkokzM",
  "key33": "4pZ5i3CFZPumwRF5D8AzJDAXxXchJ9ccZU5ZpoTLfKuzyLWKRmdtgEpCTyLPqBhWB97Rqf1tVKvna5NXk2SnR1e2",
  "key34": "2QqG8uJJfum7yeFjYBGbQGEnLARDFdtbPqFgKr37syrxjBn5gPMdJgyuMjBm3HPu4wcQ5Cc17rGwgzZWFgfQMrhm",
  "key35": "5WeZsVw9opuvYpnD9GTgbaR5EqYXyeRVvrkStDxYwszieeyPPfvfbXmFF4cJBg11CQLCiySXLiVTGVLHTEojAEmg",
  "key36": "34fZA1V2Q1zbhDaq3Ems7SWqM7sWA3FfUxqSTySZVpPdwapZsT5RUk3VtqMovKopx5ULcmQ4aNYT2SjaCT6ugfUm",
  "key37": "5EgL8SSoqmLK4kCbXspYiyssWbixbTckECHYm7zaPW3chNgP6AueCisdkLoio9uQF3PG37pbJpUtmPLMU67Rrb11",
  "key38": "3Xr93hJNZzhF9xNWCr5YKvWsX29gj6oFWicGT7eRiEy9cAgmX1Fcr8cSjBdpxR6MUwYegX1vQmrkFS73v47y86Sz",
  "key39": "7peD4KLENBzX4CYHFsBAtdizJ1My5dNURotRtvkrKw2eWYdrtMfP32SNq6uhBw63UwoqVg3ZxMrov5ADBvMHh3H",
  "key40": "53HRspBGG4cwUfYMeGLNP1q5hbNAEhKczqRSNkDToK1nKXe5d5DdnEQnRMzFBzoRNWhBCiMikLSFUeTVHJFhbeiV",
  "key41": "35HpXd5TZG6cjGdEk186BgjwWAkQUgeRXG2RgQt6mv5WifDAAjM15PqzMdVL4S2ZqaMWW51ZAv36dEo5w7z4jGTS",
  "key42": "4JbBtdFA5J4GejJpiyafoBKLkWU83ewijjUqdAJVydz4qzSuwy42EPpgoMz5gZtECeP245KMsdEC7wNcEqjMbWUz",
  "key43": "2GxcRvZdB6FPGwenETY3GcARK53Um75p8CnD73Exe6tUZp4dSctCwh5SjEPgeePM1YFrAPW3UmDHznVBizmvrRnJ",
  "key44": "3pSkNcroZ3szCJjQepRfoYQ5FFWpPqnZ1iKCFhzPuH3jCtPjz3iXb6M83zfAYTBiw2RjDZwRJwXmNhHuhBh3JTQ2",
  "key45": "5qgBRWk99ATfyYZfuCNAt7jg9kpCYFSnV7ysn9WZ8B82NgvMhxqVmJJ6xkZpsmsmHjz4jG4vqNjPaNgH9yGaiXpr",
  "key46": "2jw9QT4uke9tQ9CJRrFp98bwhpubnnUC4rP8h1nh3xsGKdj2XggXaZUPReJBjpeteSwEBg8ZZQQiPWW1pZbWALQn"
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
