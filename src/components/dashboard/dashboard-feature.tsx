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
    "4jTnBZJFHPmf8hr5j9fYYGmS7sy8kwMm9Ck5NwHS1tsr8LkFTTUtUNfDFE9D8p7paSusnQJvBARzfUAhh6LGVy25"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iXCGdhgUEa533EH4arNM3hZM8jjDtLgBq7DTFkqcRnePsLjxvQ3PRdcg8sJ5xWTVp5yy5JfFoYpu2Ron6jk89Jh",
  "key1": "38srR1FJXLRiqTMouwzdMsYAbcakdJVozZypbRE2gALkkrZ3rtpbJ8aDZCU2MSskqY7V6WmshwqAat9iPwpezuCk",
  "key2": "4ZRLBAmqQJEw9xwzYc5PStkSsTEmVrkk8M5rShsMmj4afUHPSsxtkbqj94LNQSRwbnMGS3Hakg641C1GBSkVqT9G",
  "key3": "3k9Cx8tP8hsuSWpxDWuKgUVSqtSnwP786LuziNF866UjL4gNUEqZ71AuhdGUDMg9mvCiWoFgMD1BAk5XHjARZwhq",
  "key4": "2FzvUh7yUphwi68orN98QGMcE3hqpXLFGz73zPmBNEsoKm5cmxxKdYgaQwLqGCuDNaU618zi8Pwx5sG3iJjY2bFu",
  "key5": "pWy66NjjPYtv8UuoHhMu5YbL8isdce5coxkoTM7aFJBBQguHoghWfnasWiQqvaED4sz5ztKcNgGGa4B6NwVYcCd",
  "key6": "eiV8p3JsyccRcuVtbc6yqaHmsT3C8bj4RftPuaA8D2DS4hYKM2CrraA7KAh1kTc7odkiudL6Ns1DAy84VxE2JfW",
  "key7": "5NBz5ib4KqWUJa2DxyScWxjpNwKEPQTaoNt9JWK9BXdam4F6yfDpLieC3B1MJtBQx74U7qUxA2Pc89VTQoqZtPz7",
  "key8": "9tpdwn83p754rUj47Fy862V8aqBhkC6dPLVDtdUUnYDbn7SuS3WfEQ6GKUNpFbogikuA8GitjD9CFuET3oRCu14",
  "key9": "2AzHB3Z53HpRhvfvuMYZTEbaZvsyrWHwv9684VDqoZvRmAueWsg4CfviESYSQ7aP7wJ9QmWPk7FQoGuhLq8w8UiL",
  "key10": "JntBoQg7kK3tGZnzjYHoMMU3kHdW1nAWGGVpdAUd8Kwuzbbf8YUvidHQ79ozw5MTZ8Uj8UEdCoR8WgygvDjA1Gk",
  "key11": "2vzrQKUcgBqtLK4w63R8eyiQXZ4ARMZqSXD4mbYaUsRgVP7LtmBt4b6dgF5pJKZG9hNMGJZXUZHrVdgdzwYqcD1W",
  "key12": "2bWSze83URyQsFr3APSvcrVWPo4ztts3GAj12ut4P4LsoKSX4eWMHVWRBosDWQ1buSeDNrFM47qBm54dN29y2fa9",
  "key13": "59fZc86JJj8ZtTBYdCwf7oJmew3352zdLP2mdafCdSqmXxCcsFqcqaozSkdnYTrChdpPL69S8CiCS9XQDhGenA83",
  "key14": "4h2yG55SRsb3zPm9rgDWQJX6ZuoAufdXyuFYpWhsem2xveHS3th3FtpLC3h7C6EyZt7uJdXfWK8k2VeUE7SbYxhV",
  "key15": "3dH5BVjXfxo8hsAaqUJxR3ahuzaEGV6RhTL51QCNPvmnE4GvV5H7dYsYJHy8am2iYak1TGx1F1LATtwWEoFJ2CnS",
  "key16": "56PNga9gCzMRJX79cM5M8yUwZJCuizo29SEPpaBGtCpvdYTBwt2rjro2V4quMFkwspVyHqNdCMpSMzfo1XYz7xFw",
  "key17": "5crgZmTBSqfzTTNM7YhTaSp4vLCNsGmC8UdU7qzYC4rdTsimKQ9Mkc8iqULnbczBRtKHMdUX9xTyKNuwKrWNXByb",
  "key18": "4dJgBWZDtWsRKU89gh4JFCMGkuVNNuoZ2BdMtL9Rt4zzLD2KR3JzV6VH7qxRoTwsSJjkjvE65YbzYwp8zdYr8Lf3",
  "key19": "yYsr7FMxgThNUqd7N7JzE9LvRQntjoawGKfNZ8gjjzsE5UCB3G8mkJKHnTwK1RY6WTjYTm4ADpB5Jh2jKLFse53",
  "key20": "37ukAZG23WAxGceijW6wnc4kYqJNr1apTA7xiDEBcCtWrV4GAk6H9GpC1kM4APD8z3887mWeg2ZeWLhz3uPcySZd",
  "key21": "2kNx5458eiTAEtSksXsANXAQ2EXoerGAt1XAFBNnFGkrWpweguP4wSPmYQurUjPwGK4P5huDbmJYLsxqLRiimVrN",
  "key22": "xoo5tgHyZaWBjdmuuHY4SuaHs3ChJzyshnFg6YexhHrbG19hd8FVx6BGb9CpW75gBEXTyfpqXsh2VN5zu6pnUA8",
  "key23": "67HoWYXjSDzzAZokDHjFHzCkwmMBKQcuC1UT41fnEeg2E9N5A3ge9UjKDXurvzBfAjCPmAiEnqS4s4JsNqcaXTHt",
  "key24": "BVpDV8foabB8kDK184YrBouXAR4PWdz8FGA3muVZjNc3PiMmeMPWCNyx62S3x8r2q3gdRo6maeDn6u3guRrR6iS",
  "key25": "4Sf8dGospr4L2Z2zQijDLfxvVyGeSU7efPvQJLMabUPhWYRuhHCaaNpTdxVcgPVo3WY6bJ6V1bcXbHaLD6KVGhHH",
  "key26": "5N5SiSwnMuuy4WdfNDU7hjmTg9HVM4FtEgsRCumJjGEiW9M8eGrd1mpLnXK6hFCFmN92U5ZGmjzqqhLq2usJGYLn",
  "key27": "Raexxuky9E9JCrhz8VVYB9ccM3iE8FteuVJMcratnLSUNRFdFRcvj4my4FNZP1Nr5SAAQr1eCJRa6hDQbqq9Tk6",
  "key28": "jKFo3pggMjhsTSLt9zRivbz5HPiFaQjXRLgwjswUtAVD8QVMHkYbJjqTtC4pHU3csTyv5YWRHByhyvJRVt2YYP2",
  "key29": "4evSiduv6QqHLf7cYFFpKhZxm25gadABvz7ddBZCmW7w9jqBs2uLPyWBpbQEmJYyaCbPQhN9HJKjJXULajzbA6sU",
  "key30": "coFVm28ETgHYTqtpfvgt5wyaaJkvxVxPJjAypby3zssVP2gLekaVAw4UhsCY6kavxrFRFJGzWjN5tf9SVksbs4E",
  "key31": "5jUiQfA6hatTadVnvbs1xE6xdTr9RJvb2jZ7hNtTX5qTFJGtFZcVR4NjQERkvHQ8esJomvqPBrFXGhSYqS6PTfWD",
  "key32": "8gBviQjmgKUShnUKpxpktAfkYi7kFvLPXB5qJzszLWHoJKsMoJ46g3rxLwTygpTjkEDLUtwwWdu2NBsAkegfJLa",
  "key33": "3hVxtou9e5XkJ6oKntAvjy6RVcnsSmZun8QFfMxGrFr4NTBkeSnHct3FWcWakCB26vrZjFggusBr2YZZ2Gej7kUz",
  "key34": "3pPtrwq1ewKk6qGAPLhAXVB3kbBgomyeaR28zH6hYsqx3qo442G4fhwU9iV8JXx6y31DAw1PpiaVXHZVWuqLnxxV"
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
