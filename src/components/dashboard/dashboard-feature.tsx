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
    "gi9oQCp1pQ2S9RTJGkyH1CMXFecxXxGuUZUZczT2MxgyzLqtSTUSWoKvn2Rgj3Yimrx3BMpMAJogM59RiVf6ijY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BmKDWQntPwcbxV1TG6oQ4vr8FTa7h8xiDXffiYUrKnfsfuRNUqp7k7t14BXREive6YvRNfzWK1RoaixQLrxafpq",
  "key1": "2fQysY7yAjvGWQaFSpZswW24UZyWqiUYVAEePnpvKMRkvSGkzJH9QyaqzWN66XfQgGfsHi9mK9CLuBM64qNUUJox",
  "key2": "2TAwrmCyk6VRqCeB98xPM2gNCPhUHRT8UqCLBSqwcC3P9cJkHbCkrJ8zEhV51xURG7tv2AhQLhT43HhWB8BQgG6Q",
  "key3": "3X7UuTM8HTdnd2e9qPxLvQsPSTodHd5BY76fBj3XHSk5XbBQGKoKV3Rnf3N1idy49Leqm1iE7nasWutKSyiD5Xdi",
  "key4": "3Ne7koPdHDCjnVtkzx7JNb4UdE68xho7cZnded2bc6MYrkV4y1PC4csTiiqkwTePAUe4RwbpsUMH7wfrmk42kQtp",
  "key5": "39vMA9EnSXfxv8kXoWGsjRAWzy3mCZvst9z6Vrifj8mgN4YnJdqAGRS4JR5Mvdbmx9FFuvxuoU6fN1kFpXW2oznZ",
  "key6": "3KftTEmXTsciJPMYmBnFTJDuQTJrA3TcBHPpMm9ge6NqS1NLqkDssWYAh1xXLXfuGjdQgLGrbmey8xinPKte7k68",
  "key7": "4NyRyavboX9DmAHmX7TiZBq4MCdy26PjQJdPC5uaR7G5wHTANm6qJavaGx2CyUnr7ZH1QgvpuzqyPbKGj7eu8kpp",
  "key8": "rEfuN3wjSLeGXHhG5kxpZRjRVRfxxcoWqsTrcfgZDLiqEyCaJUmPZQsbUospEYDzTYzT6uU6Ug7zatzLhcXTWBJ",
  "key9": "4jmTcuFKpDTPns7k1fWKeJxeKsMwzoushHMXvvEdQhSrqjZtew4cZS1cZGyQenv28A5SeXAUejKTKcF47ZfcuEj1",
  "key10": "3VCB1MfstcLjMcHjQAubfdyMugXufQdSGTRprw1jFeMwMqqBX2TrfQzCSdPibh1DM89zGYxTyKmCpdXr5FZijrxR",
  "key11": "4gQcLpH97STb75fG3G4UGkK2sqUX3Qee1U6NHXn9YzjjrcbuiJyJGqnA6GA4TPH6RTC7AWVTpgBsmMjfPH8qaRnw",
  "key12": "4krfHZuqEWjxpMaDuo8nk6Y9oCp4VG5bEsNCkCXvFVDmX6dUGDsbv7PKtYEoVjuHXiZJseuWvV6ZnY2k3LRFHWi9",
  "key13": "5ihhTwpZsB31s6BmEjgYZhSUnnjRadamyDU3JyhAnY2C47BgBepKFLLWd2LgpKbidW6dTcq9UZkGqodPRhbhKqij",
  "key14": "2VX2JR6Hmk2fnFuzKLE5fviUdjtz99Cg6RXbV8J4HoqZRkXNBwCEtRpJui2bUsb4XPwZA5wksUxsdzHvcgwu1a1q",
  "key15": "5Pu3Js4PQtNT6wPkToVp92pbQgyq2uogmihb4K85mjfQmHRKei6jSSp88K7GNXaye6SSnhoNTQRXkKP3c2evVcGk",
  "key16": "5NaVBEirHGWFCxDHxtkqZhq1Gj1sBdxLvbiHF4GL4A37gUTBEuG9Nx2Hk33TrVj5q5RQYHAfdz3PuviBHpNghHBF",
  "key17": "25yJgX7SqKNU9xjMgmKyyfVXWJNw2YSMn9uJYMMSaFf8XHvCkamRw48gQQ7HYFgDjiNLaPK9zACq4qe4Yq4D4ijo",
  "key18": "nc8GwUL24G1zmeMLE5rkdpSsS4eNJmiQfTjaNMUw7yRzTzmj8uKy7ZfzXLrHkJgu9yw99XrD1zp6JAzWT9fS98C",
  "key19": "5kGbKKdip6ZL4dwjxnXEsdvT1zAshdnaM3nC5qPeZBSnGHx6DPf5G3Da7XTfT44Vt2QtLamTtLK763p8DXpaYi4j",
  "key20": "9t3Lctb97qxx285NneKTDXkMUsAPwcpn4o97YVyPiG2aMY2K1GtXsEttN1zghWwdPVUPSQcu24aMGsg1BGe5zJy",
  "key21": "MeYyA4q2hkUBvi93U3WF8ZvkN3F67QyAcXEZSgexxfhHUbgTT2idbwZArKqMc3oUyKFEjAD44yEQP8ymNnUfDAo",
  "key22": "3XKVomazjERn1CtPZvN381dKPM85196iiW2Wbf77um8BAeeedqcqN4uCfrTZMgzsSohEXPRxYm7jzACXrkkSsd45",
  "key23": "3kp1EokNtC8byKpPaQnoYJo3LgCzzDTSAgGMBCoAV6GhCzUquG3N6MBcq3bcQsPwLite8RMrgsg8R67oTn4jpn4t",
  "key24": "5KedW4KrewHd2fdtJfXNnqs1hVAYP9FmNpvxvBDrnMsvSJG5RXQEVFiN9whQKFRWMRG7qLu4JMbz71kyckKswE4",
  "key25": "3V9PpnSLku2b7NPE5ci2Tr4EXLx1Ew7GhiJ32MqnUprVZPStUxBggtg6mJiye1Jrm82TGkZRudFrqBSSN35KhMsA",
  "key26": "5tC3o1s6RzFDaymHmb2gSJvM1dMYvKxDJjg2nXQGKoPA74ZVkxxd5Z6hsporkezgY9Xy5uKe2oDuymuUu6XMJgr5",
  "key27": "5QC7sHWHv2SyxFMXiKHpSZRThLQKDKboarzduNjtN5SGkXmuk3h2Akpm9WaL3VccvnPt8nxGYeGF9oSDMuGx7Z68",
  "key28": "zH4saRbWjo7Zb7qHKvFEYciGfnKzjm9sFN1ozZa8vwkLjSFQjxbibu2vx6sK61HJJ8JVVrkwZmW4uxJW2cPSa5B",
  "key29": "2H7M78CwNnEV2xym45mkduxajcXXrwdn96Shb3b8VWKUMmYyZe36LMvA6ZzmESGUg6NzVqZ96eGhGzSZ7C6CQdnr",
  "key30": "5tEmwpdtX57Wva6ebBuTThP7CcPUQDCa4XHuhwyLidL9SJN5gPmExztqurVvFkoXp93nqn4Rmqq5nnVsUKEJLWWT",
  "key31": "4RYLNnZf1y5yDaUYT7U7YuDzLpVKgWmZTEkHtPLBxkiXdBKXkjuJceJrkQ37WZ9dGXZU2VHJZNd4MnAfk5yujbTR",
  "key32": "4tuPwGTYtLSmM87TEhp5bATsim21esb4zUR7f8XdRx42V6NhpBdBZephQSx6jzqsKH72TbSd3tDu1926nBwCEuHj",
  "key33": "4AxTr3heBjExJ3xdHTPcDhj9XuRGztQXScE7WUc6QQFVpzpAhbyZmCrjwrAx18PiNby4FMdDkpw1WAThhC8AJ2iF",
  "key34": "4V3eSmE6dxkPoHfFufMMefg1UpKhAtgV1btJYs1YJedLdiKKUGAMSYoKexPpCfe6CmLXRipUKYQKp8s8xyYhWsdv",
  "key35": "2sMDTvRhZktk78DTNUFZVUjE6XK5qSbmgrFaqj1kwv21niA2NchcpJFeu6utYGGiYXiFgpYgH4yyBkmJNU86DH2n",
  "key36": "5AkH7hdRBW1Lxn3W6PshffLRq9hgeM3ePMV9JEBSZjiY7rLFLx3cspAr3GD4Xfdy7NcMr5abue42t217vVLYCRw1",
  "key37": "2LvhbfeAw1rpPSfqU47bEWta3sCafMZDHBV5QUemLJKv8Q6f18aN3QZAThosr5UV2MycVrEjQeHopQ9vHFkxXsTC",
  "key38": "4zHUs4u8C9SHUEk18mjezjKDRV9gVDxa59UGEPPDwGgbucpq2Fbch8eKFw8dXK51XwT6Twhtpt6aZ4a8H9kL4FEq",
  "key39": "4buhduZ7wb5jZQNiixVLkD9H53xZ9hNphFh4VXt2JTj5eLLLMqiJjxroUiJCCN2E2QjTMXF8C19JduwgBacLomHf",
  "key40": "3fTkuwsGiw5BqMUrBzbPkCYw52jwVaBggzZiiNVb2izGMk8pJrJ6RThcvZEeBDupMbgUC9Cdd9FnzzrMTcZjpjKL",
  "key41": "2WA5jivYtui36BQtfvSYpn3Z2FNr1ZMpGTAmLx7tTWJotxYQqPMXJnE2UHS4c9svmibox3kLs9cGKBaPZhsmqqT4",
  "key42": "CTEZjmuYktgFr9yMo9M9rGcKGbYnVR5hxdgnVTeViccZ8ApWSruPwHRkpEShqYH59n8swEGG8YDEvmrDGNHhcQS",
  "key43": "4NrTjbv4CmY1UAA89i5uyrnULP79jvt3SusxdgzNaCSL85WsJnM8v9bupUq7NuATSzMFiFYiSEyEjU2Z6jBGg2nu",
  "key44": "4tJFSqywDuTvza2Dg49UxH1YZSXneJRySU49YzkY1cAgysfpMTKQvHf8J3RE9rJdrfEmc7bbjohyAE38UGjn9EtZ",
  "key45": "5EcLZJaomibbu422BoVsA8XAjtYToEGmNLUHmHzMjpcnXPBLSmXMDLYC8rwP4k4ewYW4qzXRUvs4waqewvV7uRZK",
  "key46": "2eQgqPwAcm8DrVqoqZ4Rrp1M5CGerxgD84LwYodEoZBpxqvRvpaM1UCCB9vR8fmSw3qseocDuuSYBnZwXNXVS8kk",
  "key47": "JJfDf2gDeeCqEr5hKnk5yXju13Yvphk7Cp5iATSjSJMaG5QnwRhSQFBK46Fv32iqSNvWzFS6YMXfCST7utdjz54",
  "key48": "xBEZCTjFCAc3zeHCNA1eaigXLL1seMdXYoRukQKmnHUxYfSvUUvkh6qXQHiaWgiA9hRUYWwCS6RXsDxzP6GWUxV",
  "key49": "28osoHE1gBAqPtJiRcAav7eoDe3PZ5ZyN6U3kCj1e86ZZRrESXMAwdXQYVXNmyLYgeFhQ2ZgW4T8yhB2y8eaLwSu"
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
