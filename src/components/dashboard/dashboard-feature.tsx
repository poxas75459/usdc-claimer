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
    "ngZrqdMKZx3V42UhR7D4qMM6HH7eTRpBPduPKha27zRDMPxpcz8pmwW5JXCzZ7y16KD4CqpdEzNrPFGaFfScznK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52u5t6Ys4URVi6rMQmF6VS89uubHapk4wxhG6hT5iV7cMBoN2GDdrcfCxyuN4YYJd4n2qcs9bjUGnoQJf8jm84o9",
  "key1": "4zGL6fNeAaGCDDWS5oB9ktZytytsd2vx8CGq1Y3HNJMLJgiqWfneQJUUUYrKCerZmgcwwG7iVHxG49FHjV8t3pVF",
  "key2": "26R6CepPU1jL35Pas8av25TUorbUi9uj9nsRY54bL71ERATamG6epyxksKtLwhgGKtDAUBSjrzggmDFzEGHVVJeH",
  "key3": "5V8EoGdsqy1nrSYVR8J6RtWD45JuBWC1PG6R26c3gupBRxnbBha8iaSFQK8iGD79Bkg6oDcFbLwx4f2Cu51Wx9wU",
  "key4": "2Hu5CZ3QFfoUPq1bFN5cJm2v6zgVkne7jNbbaspCtfSQLPpZyHMXBYLKhqpXSzxXzWbrSHT6XbhtsTYR5aKvkxc3",
  "key5": "2dvbNQzdSTS7WNTAq4i4HF83E7McvLsPSweRbHne8U9MPeWzZh78VEqLrokVzxYxw6T8YTBLhSDatGWCe8oo9nqp",
  "key6": "2yL73dfskNMmnmk8VxgXLv9voKsWjeeQMCYSJndUC8e1zc9ezTkTnAgyUg8ALtmEC85vwnqvNwKRMjPbgM4XvqVu",
  "key7": "44GwPxD87bnzxMTRM6DDmouxQWK2hmjdxbPB7kz2VnHoxYvvax5mQzRAx7kJs5E3zKhjRusPCxeCDdTTDQaygZ4c",
  "key8": "2ZWBPpPsKuEkSiUNb8MCn74cs34jxkCrBRqd5gguemWB7PproNWyKaMgWfF7QJQrH2yNReghFsg9TuyR11rnWqVp",
  "key9": "3xGE9hTFjZYmm4Hx5uhDQraf4ioe9B8nB4ciHeVGy9KBV8XKkD4myUxSXSU2uPv64ykWiezsVRGu6PhR7vewpNzU",
  "key10": "gcLPJCXtqFuLBiksGjhzhqGns7JaVVUuaoMrp8u3px8GwdjkBc2F38ZfjEKpsWktkXfPaajK9w24vy5oRpcrSnk",
  "key11": "4AE46AN8X3fthpfMc4yyrnag51Hok5xq5aCVoaUBZwx9MKqvDk5YWA7CA7hWpQ2pqEngJcSTBR3ff6X8R3cbQGTP",
  "key12": "2sN8HVQLFz2HPPq424vRZAmHEJyyQbkB51AaGxAtarfhKAdLqpaU8vz11N5XLVYaYu6G28tq2LQbnkc68h6NryQ3",
  "key13": "5eL8xcHsB7TZiST6yMAFANoDHwzdzQFkgDVcNsfYTopqpQM3HackT9PGMhd1zcJ9NKpTmVhXKvQRA8x8SWTpshaF",
  "key14": "95VjNkevH42ZrRyFpWGvc5DjjQTkTgWUxiZuYJiFDo7L6W64DddjVnqZ82esFiL8dFCBHTP57tHJbodeVEqPdD2",
  "key15": "eR7AFGrpqX1mUimWe5Nc6QAJopwqGTD6o7Y1MGKupwvueNN9hRG6o6d6rNzoawEiHoq9NCfyDdWvjXyMLi7iFJQ",
  "key16": "324f2rzGZKftvArhFRisYWZhmUCt67ZfYiTaqygXznrELuEznTh2vTL9DCtHaCPMf2qg6o21qf3Zq7qWRRo6WuH7",
  "key17": "28KmoK1T5zmFd4XVzwrTUUisn179SU7HMKxuGjXZg18NSBaMnuoXBHybokCx1S7DARHyCm12sfaApS2gXHn7ngcq",
  "key18": "5dobJy4fQgQZxTDnkyQQ6WKPGgYh8vzy8g26RukqcWAJZxh8Wcg9FdH1noHtLtWT4gS9pQysZth7bSDaAaUNFYQF",
  "key19": "QTbMkCtn7Tnq2Uazi4Hk222W5PpuBoPi98HNtyDgSLYmkz5b2bGLidBDx853Grgtus3zUGbvBA1gxxAiYrWn4nV",
  "key20": "2vqUCiVivB3cbyh7KYp8rs95SsQdZ8BToYW3v8XQqutyQfF6bhgN53VqpTa7crwM3gNpqPeEHPsRFBAXQjgSqf4t",
  "key21": "4RjCDkWHAB1rGkQnP6BcuBzQqmoZR4n24ppbmNsxtTtro1CGKrGuGUBtpgWADbBEjTkNJS1BGYaqACptnbbWPbZj",
  "key22": "52Jd3jjmWvkVCa5ZxUD4ijPnVkVTpNKeJL98mqgvcKfy5BNiPT9k3E8zCspbU74RSdRN15DWyT7umqvfrMqs8eiQ",
  "key23": "4X99P1XuPRLpRd79Gny8EYwZXP4rmA3j61jRzLBsZGuhDwPBMfn6FvJpGGFBc7otYv2ZHLsJsXPmYG8gNXQcTUFk",
  "key24": "3spHRRG2kPfR1VSPeDbjBKg32gVTCN5gutMhDhQNyejwi5QZs9YoYrGbFuFYSDk9zjb4jmr6o3gjDZXpz4LVesFn",
  "key25": "4cuhLzH6wVmU4hQeVZiuc14tYch4Q46dS9ABuQJSAAv9G1MHtLvRbqzpRPsLQVQ8R8pqMk99C5kBMpynmNHniDw6",
  "key26": "2TwaEsgbuqpGf8ksmtiPfSckMU1jyT7t64LcfF1mVpTTcjo6nckpBM2qd65rVqdGZ5BCeBY2AU7BTpqGjWY7yp8M",
  "key27": "5vsuskQ1qKPvhmoAL52ckhaD2iq3nP27DyPkhqLwn2WDpZj2u8vrzEAsy4UQq3xpDjVXVV56c3AHkB1x6i4FcnXP",
  "key28": "2KcmE8mpmyt8ec9NZPf1wkeMwuJha5feoWZ6VUTxEcUpqrkkP63mJ7xXrX8Y5LdXsgP1JxPdy12wr2YyW8AyyexZ",
  "key29": "3UReT8r5WnD6ix7xpm18Up25Pn92J8oxGZSVdofysTBcWNW8yyY1BHa1dwpb15UzKb5s4kk67PLv4EfLz73TiSaL",
  "key30": "4eGwE2wVertELZNkYkjnntBNc6Fmxy36Qss2RdRfnsVHB7X8yHcyjPoV7PK7ekCmud8y5PTQfHs9m4sRRA6FFAPv",
  "key31": "4gCGS77ZB3M8oJmyYp2ziprrnXD67FYY2qSkhYkooE3Z94Ue1xFugn3mpwJixAQnLUYjCqed7zDxLzECrCRYG2AP",
  "key32": "UPyGhmSVB2UHJxqzYE3JaDsDpiYUuH2vxhAdDA7TZrPvzf55CT2j4XtnvfoLgiwg9d48AhLYHhxfL7uUWjzgYJV",
  "key33": "3siahBzBpFLFMZPMAbRWVzpLrYLFdStxef3BXFKczjgVmpeUHVQm3F4snBF3Kw4QbEnHyC1tbpTydr89EwuapSks",
  "key34": "5ENJynpoiN1iFpQfNh3gr5CtxcJkyxC8ZMWquot6DWRHuSHoJaa379h1qFCWYPiHmgJAAdr7nTFPWqApFfe7Cwsi",
  "key35": "h9uZqhj3XKa6AGjKujEXecWN58f3G7rmdjV9ng3CtjBzTcxvwJUR464uSf39xBxEjN51YtvGm8X2uoX2ZkJ4BpV",
  "key36": "4NN3S37ci8V1vcGu5dR3P27StXUsXaxsfVo49YfSjqodHpZz9wbjPFLtotAZ3dkG52m1dEBheyzYyhdV4KzXC22i",
  "key37": "3jbPNzsGmPJ5zEd5ez3cSQbbVefZvoCnChAC2rV5tdQk7X1fsRE6fs5CJpfQFQgtHJ4sw9Mz8iPnWkJQ7Kpn6fm4",
  "key38": "4HZLuon17rVexcyhNPW5wTspMUuouWSgtkbc3mixW1DSNz1Konmy4khqWFhJmECe7PSsp3cHSe8FPiAMH4a4AcwJ",
  "key39": "2FqeQLTtxF7a3EhaQaUpqw7f1jhEqTJ4ff4LYkF6anNTsUvGBYFafRwaxa1Ck6kSCn5ammyFDeiCK5JPgiMi5QfD",
  "key40": "25mAC6m8y7q2wcq1NSkro2kxsaa1wMA18TdVtv4tSv6AqsBHqVrWihhnZCzs2mYAudK67sSbfRaydyD9hcQTGHJA",
  "key41": "EsENayWoaJGnog9cjknptFXu3FWLBdygmSfSSCLyj25t4BNfvRs97UUMtCVssodoVgQE6r3MKey9t2F4L4nDBjy",
  "key42": "2y6RsynryV8TKkWsNMcmoeBjzCZu2ESMPSrS7Xh6D9taTzt58n3kd574WCo3kSkUKGyEuvqUzYCf7j8vds2GubFf",
  "key43": "imv9GBkQLfg2UkybyZSwctycba9a474zD1ZbQGodU4XbaScaFmnkYZu8tbqm5vBzgsn8HFYaTUzf8m2t9hWGYru",
  "key44": "52Te1pdc16bGkSB2EJtaPjCBT2z1Bv6mBQo27Q6tmm5B8ffhDUcMaM7ay1cEA5Ns7J28QJs6pYyR7CdPt1TEfEet"
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
