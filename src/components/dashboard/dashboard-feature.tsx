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
    "Xnk3yMdRxv9ayhxu1rN5wmBaDFdANa8ddE2AX5H7444uZmocnbkCo46cXENbpMrdWB9kJzn5mNpU59PSzhLw8PE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "384gSRRjset8mjRc4CqN1J4NyvfLUWEzjKQ1cQPrLMDDqTfLnq8k1bfNxQr4RtJ4sgQwxYd6bBxciy6HqMqPeGSq",
  "key1": "4Rjg3Av49uWGLiBAoBC9CVy1o4sqi836hf7yLpJyTn1W7gFGUru4eKG99vAhG8BmYrkwtzyMYW7UKjU1HwzfxrqY",
  "key2": "31gyWwyoFdtpDTgr6Kh4SxWAjDGVyNW2yKkg4JJ2oWWocJ7RzFeVqXgCHk1fZafmUiME4G5GSnQRd5Gvp4D4t2bq",
  "key3": "4T4fsYPNUTGLwbGaYP9e3pB4BMS9PGXcyhLuP2RNtYa4U7QMX2cHaeGNQ5L5BZa5ULYnCXKWw6hMB6GdZvYkKERA",
  "key4": "4rjjoqzCfurb2Hoc8yWiLYnnzsuAfuEtsDicT2CJMYbCt7PUUiyQQ2gtigBETrSokLF4oR7WAVzmLt6c9VugBEGE",
  "key5": "2EvoQhUcvckB7Pet9j38gFqdtNH8uvXPisfkmSNPQRPQjDwnSkoFhAXagbrBfwKJDdZpKB9q9mgD4ALSE7m3w1TQ",
  "key6": "5cpuRTcYQe98toFJKLGm5Avron4Ahr9A1466iVH5NrTfatqaZMcevhiQoMqAFgrxodyZ6dY39w3Yx9MkqpEtft9n",
  "key7": "5fU1G5QgJ4UFRWS823FPfmiZBL5Mcjmao3La2orZkoPujQiy3cBVVkPqCb39g7BoEKx2P33sFyMb9R4ZJhzvXDgL",
  "key8": "4aiNTYC4shLxMh4A8x4h4BfBHG43w6EayjESy4N9VXt9exMkGNw4uai26PjokPkCRKGx3iczw21vvtmNCnWTRuC2",
  "key9": "DzVNkwwmEutgGvhfTfP2sLjAsEwEuikWWQuTVLuGnK5twrtdycSeNXDEuy6xwMC48y3HWPwfThiv9LJCVucsgma",
  "key10": "58NYbWahBjw7W8ABC8myj2nwxMC4Ai4dVgjhAVvGj7gJ6fqXtp7eVvgDX2WKg9jiZ4BXusi7evrjJegUHySHKnfn",
  "key11": "2hA1HPozpGFsUCUuMM9Ms8hkheBs7Bx8EvPMJ4wo49Lybcv3hESwWDJm7A1Z6Cvpto2uKrPa8MagDTEqjPTGXU1x",
  "key12": "3ToDhHrSsTURNZP1da9Wz7hvxBxmGLahQgjvucH4m73gz9ycGRtzVpg364ZzaZMJmv8WGbykantwUS294wMcEjBB",
  "key13": "52SkecZ1AYVKiG36JasaSLX7KJ9fAezbbm1hx26eMW37WhVRqP1XwEQ3cjGbSLfNf5J7Kj6QuSvb9DFJxZVcTbHi",
  "key14": "i4HgAymiFcaFMMiJhPx8FQ4MfHZCFos5ricTupEEnqbrHWcjXH7Zsa3MnaBFyfvYrLyUchDMhLzcmMzGdQV25Sf",
  "key15": "4UnHQkCo2T1G2Gyizn8S1zBeUzewswrdvFD37dhC2TxSc67MRKD1Lp9BqTgH7u63n19iQ1GjtBDETsDLeyV5qQ2q",
  "key16": "VH7Mg3TgGtnPGaYdkg5QQ2dVhoKxYTVK8mA3uLWkQvALtQKgkT9wUStskejQjCsqTPX2hvo6X7zeQo2PHpeRX8V",
  "key17": "3oefUYJNz49A9BpNXPuDsJUj85T6ZSCTNPD8vsAGMSYtdMjA11UE1mzAjZPMQYi35UJPJtoDbwbDSFhUEGvfo1ZG",
  "key18": "3d818cf5DhjqCNyxCvjXUwkd2sWeUs9bCVbJeuUCox4qacSosBZnU6woREjUDTSHRwtkQgRRcGLcpVS2SCCpzeUM",
  "key19": "2JNTPvVb17dstmnJZziyfsfGsk7ZsFpD7iTdQMUDa7hJdQ47mW992U1wijMzE2cxC3CB819mr79oriy6n8dny84Z",
  "key20": "4WXPnnopZPmDZq9WxJo1LmZSxeqnp4G4yzNvoLQ4vM1S8dorjeT2Xe81UoAPeLTWYoyY3JV3W3isJp9EvjN9YKJc",
  "key21": "LhsEfxVAiHTAm5vLCjnEXkCZ3RKYGpdXGD9yRYVV2PNaHdnW91Hz1wvz77AAFd9pGHNiVrbdchVpAr8ugHn5joB",
  "key22": "5Hcgo7cvu24ytio7pQkzRVomqAC4yR7SdwvA26VMJ9gnUtLj7Pr1jNP4FvF8kfjZgVv5WFiUATd58YWkUPNyb9zx",
  "key23": "2yMpQTjEKhBe7UT2y51r92bJsheKYQdHWhtxiqaUfQd5NY841NyHewfQwxmxSWFg8DQUc2Y1dNRrWcGL2TRnwW3L",
  "key24": "vYkwNU6enzxg8CneincEhE4JHua1fHKu4xdhs1yx9g56nPjH7sy2S1LJy211KTBynkjgJqaGw883iPvX1Q3vMzK",
  "key25": "3B2FA8By6Xcr4dkKvL6hdgGq1tiVMtWDAPzEMSZEduLL6TNX6gG76d29KqWeRWTDRM9h75k8rWdxCtyvLzSK8bRT",
  "key26": "3D15PmZnt7HKatveeA79E46M4VnXT9R6YWrwRqde1dafJ7fEFV7uJiTvcKuiCcpw23ayWTRHN1V6c1XAkwggMLBz",
  "key27": "2yfcDhsKwZK2GiN3ACzKkUFnDQVtPVZUzzWthDexCbYtsDMB3UTRb747N3mH5R3Ue2qfEza2xg647prbckw4puJV",
  "key28": "4iaV5iE1bGn1PPcuXL2xzHAEVjVvUKBrAnhXDh4TP8Y6C83c5urS4Frqbw6VZTLrf96C3Zgp8hkFrgRZHTJTtFab",
  "key29": "2JrNnJL5RjsRZRbFoS5pi6T8UCzzEbZbn6PyJCEYjeiVAYTVpSW8Z3SaEYDNr5VVmVyveuKpUkt4cs3prUc7xUdd",
  "key30": "26ZzxaAiKeBK7Ew3HWJaoPDkNP3jSXo5PdEAvXuteUnmSbiwEmuy2R3pUtiqBxWiKBnYhJ2Ttdw9b8Fotp54sjiF",
  "key31": "2Ez4ovWZ2AULF8bvjTf2CCEX5J3ASLd2BYfvstbMMK6uFdZXfhucuKLS9vffXyfj2NxAqKB3KhiHh29FSxXiCN7N",
  "key32": "rqCH9LvwueUUZbtdesjvq2SLMxSrFCWFbbUNNSuTFXZVGFDJnjaEtF51apUorp4nBQGcB3NV2sey9QmxH9rh4vN",
  "key33": "66T7rAyLN9smao7m1KBMMS88YcJXYFqUqwW9PJ1pfN3VGU31aJAogBdZ8mA8qmwyvWMD8YvXAQZ7UsBC8WeEyet",
  "key34": "2PC7iz8qELW6MB8EDEkfCySgBG9mdJcXM2jFRmvoMrFfdQpYGF7rDUgdVH6M15Y63x8mmTiCRUhnFBoqACLaTnFw",
  "key35": "5fmtVa9FR4f1Q17gyXeGJQsWtWboBXP7Mtna5SggSAoPURiubpWsVgWmhDGRVojupGcw9ieSAaLUbXwEJR6gXzve",
  "key36": "2HmsTmuDVbvQVmnwWAvvF68JetwwW2py1Nhy3YKJsRhTuqWfdGzWKd2PniUATXvabgpTSmXNwzbNpfnnN31nCr2E",
  "key37": "5Agpn8KM2Voh3M2bgnjFxKW6MNtsWhCVnKQhNbm87bHSKZT5GQ4BdWJodXgvnJqdWz2cY6zEMUvQhEotoVT6QvV4",
  "key38": "5UgwW6w5Li5fPQfUSWnsCVixXxBgoCPEUcALAVXucJrroHzhw3EP95NSNLAFobR1FJD6Ez8CGaidfGmeCmLGfuZP",
  "key39": "3kokBXj1nJUT1nSEoacAjX1PyoADdPwo4vaAJ3gCDRpRDHwmvjrT443x4Sa6WTYt2j6fFCT4GapfmZ3HJPLpJPm9",
  "key40": "3y8jhRzZrCv9K4EsMPom5zVUgdN1sUgnPu5uH8u5TW83EHwsgwN8eJrA4PU3jVffiQJiJLUfcv9X6Gps1jkXxcdk",
  "key41": "2aBbKWeghJ2pBi6knirWn39NDrxze92FiGqKTW3RZPTAnRCT2iknxpiA1ovwcqcgZNps7tq8afMAGE18nAtJNPJA",
  "key42": "4CzuSY3dVeYjWKPUPFnpncZVDrb8Et2XgfEcfw2kU1AD2AS2LqX7RZrZ4u5PLxhQG2wC54EW32VwuvnGicWF2agp",
  "key43": "5yYTXJ49mjvraJJnEC68eJRAwaVtMMt9EfcBT2svhCt1JyFNU2eKfXQLEGRUdswsVWW5ceG9oNB6gAmy5GAih5Ji",
  "key44": "48TCiCERpy8KU9V1BpGmU8cRhgmBuDSuypLDJQPV9Jn9W9yVVRdfmEpkPRmBtYu9hRo48ssyb17kSeJgSAPhZ3ZH",
  "key45": "3ANVH3EXN6JUvw98rM3ReokWmURyDyKzLDEpxZDqFczahxPFDB2z8oGxGM6mfqFb8ZBc6Lxmo139t3LLfCjpxhBM",
  "key46": "2jaGL3TQ3jGgMtzFvnC91E38YP5xQeV6sfxiZaN2NgkauqPHUjfkkAMT1vPDEriuq22m9672fN8aNVUNR9ejbotQ",
  "key47": "DaNvmJkGAa5JR1ExtAd2LEPQsbWobq5XqfmW5bn3soN4GDoKkq7ixEZgZ4JGueEXtoNhTLemr6wYXJ27GuT83iD",
  "key48": "5DDsAEXstMSFVqeW8956x6qm7BBL3uqZV4h56TTi52hwJtrsBhSPBLfQHNXHpL2BZDPN6Ntekg1zm43TPvDoP43D"
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
