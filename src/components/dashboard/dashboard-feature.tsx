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
    "38Rre1LGhZQqMZpid9zFYfBkeZfgC6daF4DnTzqWinJwYXnJxnDCvmEgB15fecYy8Y9QQipi8XH4funsThQwNTM7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PRaTiAw9k64UrRGJKFRvMujPprGcoAM7VrawoJxSGvHJGkCLMS2aGACsmaCpyN2mzoKBfVRzbYjadocxZdB1HBf",
  "key1": "4D1EaQuTaE7u6NizGhnuT1vdpH3aLWcBGyzUXFWkpjTbUje4sCmqhaa8nqMERZ6bUU6oGYjB6KPsL3YkZoBAc18o",
  "key2": "QXoYoGthwe7jxQTwV4ateLzcKhiYr7x6Hqe9qknTcDBkrtxiv6QvXRMSGJGxV3uAeb5KewYvRPXPRNbAsjDspZL",
  "key3": "52CoRAZg1X33XZjikNrmxkUiRovvcsDxySFM6ho6YY9Fyyprpw8hs9D5zwxwekyPufDi6HEVuUHsq613raBsj9zg",
  "key4": "EGQssfUPcpwLWzoQQbA4BQmYu4dLkgTJTYo2FiYuDLzkhVLkHN67EXFZFTQ2zMDiVCUDChyVhZRS3xt46WJTSed",
  "key5": "3NZWJcFSzyc7zHokYxg8abjqehKb7XAWP7D2gWHJfhQoqbkj8y1EqPad99xwhkB6y8qR82U8s6x49iQd6FjTWeSD",
  "key6": "4SLnuH94NQsD259UVagHkB6NEfRa48XYC4JrcRKps6R2MGXDVsW8KBTK22iErNKxepHwDj32kB7dYvDijzfr177W",
  "key7": "2K7JHpsLMMYmGrF7xcz6vFBafKXcGL4mJ46BDVnS3kbzAvsw2Fcrifuwq1h3tRGaGdnT6zitx213nTYTNXu5Zqdg",
  "key8": "4MszKq98pyXAWijPQnrJ7cYd7ctBYd2mLWCbh34Lpjk7TYqmcZKQE6Kwbsf75E7J7BogrWpMeUWZJHkStcPpUXJT",
  "key9": "NRLv9Cuyq3sczttm9jLvJ4LAHucMEDT8Uih8bTyNGUpi2N5cdZmCnWAasErswCy4zE629aD57DNzE8pDcEcSC2Q",
  "key10": "5XtEJ9EoGaLt6TtAuvjANceej97iQtQb3qLpBUwfXZutgTfUQ5m3hkpcoEWe5KLBZHBYdPuYpYgkdSJ7yqMT6ceV",
  "key11": "3LqjKYKWjV8LbWP67pyEPvojaFkJYNqbQ3tMHGXsDRzRsP4H8y7seUvaSq7CiD2qzYc9AMLkuBFFWqZSrZsFiuwu",
  "key12": "2YG8k1wSiuF68AtFS8WjDNpgdd2ynHAUbpDikLYbTfXhSwjjP6uffjXMQV4pB8Ezshv4nFjqV5KzkJnmr2v5ossm",
  "key13": "44d7cmF3yuzKnc52GyxCRiYfNYQD4NG3CwW4c4sEpxnKPPgszhKUvSLqfMcTq2Xp3abp3ZdpTCrx57dxEfi3PA39",
  "key14": "3qYmk6XbLc1BthqfoAYPAYoJJqMJj7aaWJkc5SeWEWhdC61AkN73DbAyJRso46xVbPo6VC1QMxEiS9ujn92HW3Jy",
  "key15": "4tssEg3kH2kDaADuBipkqnRurpH2vFNY7uknAUGRF76uZTgURK7RpPwuiQvgTrcX4CLWNW9tV1J1BSkySUtHsu8K",
  "key16": "43Yc63j3tnTDPdwXAXWxuqcomnzfmeQL75iwNeGgwhfwzbCTuMotrByPZKMdo2DoQh1h4xf6naivoGsvUd78X2iP",
  "key17": "AwM1cpepJ2JqUGwz3iXj5uhP7kPuE6FYTg8EYvUeuQTJUUZFV9VJvbGF99mUqy4fCmvphGkjd9vEid5AfTXwrnp",
  "key18": "4hm2CqZyZEgauuFpSkNBAgFYBTsAZVFtiCZRd5vXGYMEqGPVnSMFpoUHnuAK2j4KFuEgmNLecfjJN6Hi53w12jjz",
  "key19": "2AfN7JczCkp2uzGQSVRBVsyCS2AS4WF5fExH6B1FtB32xTnsBfc7EXfU3tgLzsdadwEN74jcVELPRUxKFt1HBvK5",
  "key20": "22oN6PyncaGF2cUbidYXSqwd428kK6phuEcxscKNBsaAz5SYw2WhSdsRqnVV24hpyoPW3v6wP9mswtBjwQ8VNb2u",
  "key21": "32SHBecWvaPpcEHhBzUEnmCxC522CGyzpJkJA4zMb7AoxTffHtcAvocVS4M9sTvs2irJhg9V8pFq1CtF6TbW7ChS",
  "key22": "22gC2g5aP1XaRRB2hKodYCHtw2M6fRvienFX8iehqt5WXBUkMeATC7gQ1uobmX9FPe5qxTK3249cipMkLF5BJQUk",
  "key23": "38G1rnnP9z5wnRgbLF9GYuk6c6jMR9n1tr6WiNSoiDpyqzmSbWU13VbqQwZNTGuwbbdi2yPrZTbNprEDV8fXv5n4",
  "key24": "95VTD11mdrktdmdSgqfwnWpKQaW2vtJQq9aKdntGRRq2MVrqw3pF7EMJDFVKRh16jDwgAixwDMezwDyfxjUfa6K",
  "key25": "41x5dXDa1CoNVtKYb4rhb8kHwfjRTRTthgUhgSqb1pCfYoyQWL4CF8cXsW3u1ESVHcz56DoEQeWJE2QmPVV2juFj",
  "key26": "5KJZGFE1C2pZHNZLwHL96kC2bMy3GzEaAXnruS2DyRzCmHS5v5CrmzjaahCpAESG7SwC4mEDCSfP7KkzcM1AoVW3",
  "key27": "4RPiREDke8tNKGjwxCrUBMzE88cvAEXiSs8Ebg38DwXe8EK3gK3f5XffRFnaWRdhnCWZ5xRoR1PqksKkmX7grTz",
  "key28": "3W6mRqEKhBH6EWgPBBHwgqYGFwxYxY2Q97L6YjMuDoqKJY9MyC4rmw79tT5juPVtuhGmcTjiu9rThYiRBsVE64xW",
  "key29": "3bvWmkASCEqYpmYxSMtGRxLBS2QzKcvSDKSRaK7Xh7pftJ54QvWHyPaWHyXcZCdmMvE23J6XYnZWogBFr5So25xR",
  "key30": "2hm8rSLLh2Aomk2u7ANjQnRQHjsTnan67WBqqQFewwMbin7mqxyUzogFuZtrX3zcdyGLdQ42aFgVzKUquGGFD5f3",
  "key31": "4xGb1REQniqACGj6ttUdzjGchK1HMgGUSE9u262rBTdxC7oy6hVMqRSBxw9DjFmeaHeqqiQeJYdadyFbZqx8VAZv",
  "key32": "5HttiBUfdePKMd4zA1gcWnybVos9SnFrSpwYevPt3pGNn7KLAXSvywF3mvCLhXo8TWajvmcWM9KTUxUZ82GRCcxR",
  "key33": "55DzgVXn6PKAmutEFmof9qYNH6CXCvPEomAojJQU2uCvM2MuGavbHADGZUGajj5rrHo5p4NK6fXQobpaTkYJ5fnQ",
  "key34": "3Uo7TUNqdnw4ZfeqehESfhabsR27QdyHzVsWFcMYcJSMi19notixBCgwjRGs4Bt5ELuzpVBs5ruYWP71aHhHBWvD",
  "key35": "4qn2FxVtZM9nXxaFmNsuqPbFLKmezoR8AEsVAMy6iMUtYfdEppYVvJpMjnRmLx2YXwctxgiwqTkvu3YPUf6Uyy5Y",
  "key36": "26UjP6Bad47ts1B2h9vLdmJYbYLAriTTX5YEooHH7AjXcVqswQc5psjWqUmDU68ftFxVM3w8FhGn8hJXSG2e5HrX",
  "key37": "jNsGu8TMWxsjTnN5aNoxVhr8cAXpjDa6p5b1gvDUmpE1yTGafxrX2PHknE2bLHCYiMYRZw4HJxsb5Szv1beRJZH",
  "key38": "28cMUDX8huR7CUm8rYrueTrRyT7TgkGodtVj4SANvLfb46kavGJo7MToW5wDjvoZHaLSd1HTaP6GsfMBQDhK6pEh",
  "key39": "ZTmcHLcGwW6Hy4Zt7Af7f3qUi2QiPwq2HjAg6D6TtSHqZyfER6Qpzm2vgMNHxfQoWJKfKFbCGqWwFzsHWMN5yHb",
  "key40": "3vFB8timBQNiTEVsUbKr18qqaHCVvErAaz4QMG82Ef8QtFeKHCc9RrYZMJukPWJjBRth3evrKqGHgUEsVth7DjfZ",
  "key41": "27qYSgXNg7VE86k5ysiQmoYEfrEnZkL1EnoVxLan2BMgCivBD1GKYhe91eYhJrsizBGoc2oeLLgs5XZg4tE6mzBn",
  "key42": "56Lgk5TzL9FxL36EvAvdZckBN8P5X621yinXBXVa6rSo2qdcj9vojUexfRvxdtnGa2RGitw19gDj7ncDZ5oqCNoj",
  "key43": "4RFhhmkxZQ72Tdu46qFkajMaN974N4y4GW6CsHjULaabHvRdVqveEWBfpsFMPGegyhRRrsaCK6zu6vcatDhUg6xh",
  "key44": "56sDUTz5La1GufESc4gGww1HUehXpybwHEznbjUuvcYbuVTA75zxwG8xzqLkmR1VRghz7zypJgPEkEhScRRyYyvF",
  "key45": "47ZEh9xFnham4d4chSm3mMM2KVEhEJ1uN42gR57iPDWnhXSmMvvxn7vsfwz2Ch32sf2NBeWiWA4a9riEMNP6WLBw",
  "key46": "3L4phtmtYtxd1TwGmZfYzMDUTyrJnvm6KEzbRZDbzHST7ommiEBs95wHoZo2BazUBvmrE792BDkBX3ApqcrDrXUc",
  "key47": "k2nascaoDSx199QTazkgx8AGeXokwByVPf3JLT7KhBoDPUWKdqJkkXWx6uqNjni66dSrM27FXEDFb4D6TbF7Tke",
  "key48": "5UR4SjAatwZGB11vRd12t81rJWopAHCgJVNHebDPzpnVDrrNhzafvza6AYmKWy9fs4HcxEEer5JSjiGVEwTKe5SN"
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
