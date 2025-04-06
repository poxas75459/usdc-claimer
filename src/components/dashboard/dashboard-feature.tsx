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
    "2uSj94BsQLV3Wt44kXsgAJQyvfPhGaBrgX25pTUmiJmSxQcS578bLtCNNyeojJyvG8Joq3TLEmiWgU1vVA9RzoqA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Uo33qDoPByEv79iTXii5aKcJUYEPnomJcUQzHYaff2WGic1GtFthvvyEF1mkEY4MdLJ919hfJ6zn1UEsxcsvxgn",
  "key1": "3z6f9To1QLUU3tnbaysb2w52HS7PUTYodzZtSHcMKez8sE8o3nxhSZCL9YN2TrHx4nWZtbEGuLWcX9rt1tE5xaMN",
  "key2": "5y2zsYkAxKQJTxYKstX3jEXq49LwHF61mXA1F637twgJHffHn3BnC3YBVUuqLPaNvfTDpJnraPRh8vczeBkWyo54",
  "key3": "2YmjpdAPtD6c1XBTpmsJ5X3TrWPqj6fWurbHb1VGFHqs8HXSkMCGkW9Tim8zcutsYfRQa92vtRn9tmcNCk6E1psj",
  "key4": "3ihBa3i1sRXpYtR3uQUZHKnNuhTGRW7tBNveL867Ev9zaJNV88ZhvwDBhXaTSEgJ3ug1CcQjTBvHuSL5yBkLRnuZ",
  "key5": "3uG46L2wgZgov16fvWvxSYRDSpb5jq4zxxMZ92TtJHDyos8jDKxZ26MMfRThjubzXQKTUP4xtGfNPrmQeZKPRXoz",
  "key6": "5feHQ7ywEaHYnBbHn4JCyKDDHbehS73gRht6f5SXx2xEQQayr97AdDP1tusDCmQaqZPLAqAoQ5KjToAqf5EgLYaK",
  "key7": "2iC8Hs4bN9rso3w2Q1ARNXiesZ7hqFhit7UPYJWDS31pg7aXwtyoLk2DAJxrLCkZEUQd6yriuPX8uTmixAHAuapd",
  "key8": "4UsMUJD4zhMoAy53ngKWZdZNUhJe9w4wgk9oWSGKdqY4WZ7Q9ytthRAVV4DdLvWaaZqc5f8WFcPEBrHcpLxCZFEw",
  "key9": "Did3UpthPEasq2dYM7V7tU4qt6iGR6mP1wRCNrtKBLUdL68KVjgrbzXiJAHTFsbhPwva3QwwyFdTeVvVMcryZ6M",
  "key10": "2hX4pPPapCprUKBNXRnytrrLo9fEjkqDodSEp9QDcyt1SvJEGrQU5Ajf1HivPwhzpyEbQ27XknKhri2kKmM5RgC5",
  "key11": "5YtoSvX7kL6PCFTUhu4EXyUeCJL3ZM3PcL74tztM4a5X5uPkLLbSN9i8HEj4jsznQH67jBtRVrWnfoHFJxVGgsw",
  "key12": "3M4XWMTDrT9VSGdJJPmMWKTW5ap2SfZScCpLKYhpYGwrFM9EHDqCsLHZwQXWXsZhSrtytTYMaYZiBqYisqrT7SxF",
  "key13": "4Dq2Jwmk2jzSsBYPmtsFEMbZcLQkGBuRiSynaYvGgp3tMqrqfvcDMXmb3NkotTeNNhjCk3Jp4CkhZBibS1HQEkEZ",
  "key14": "qCnVCjp9rD62D8fnNnzbPg1auXDpfiRBfZNRJXEzRMpz87r5C9cnHQtPGTomEoJgQUf9gN5q9nLiz7otUq1HaS1",
  "key15": "42enEM9odm7YFfd5zByXDoQ7XbACKdTFoV93qqfg1WGhbDZr7mM76xM6eMhjrrHa4iUXy5u3KBKiY8qBsX4qkLNo",
  "key16": "8djFnyiMNMqbVjhe4XgVm9EPk6mfH4swj8sCCpzv1aKCxdZQRj7YcViRfvs6rhrRwye526MFD4pShwb3kZvKpbW",
  "key17": "5iDN7q28v737DZALEscVQgrLGWDxxX5539MHKrcH2PQbq6Ms4NPVox7DneQhknMfkQtT1CxRXXWeXiF9ZvArzYak",
  "key18": "4qBi31CvgyvWJjGUFCtsd172r4jScP4htisccqHijVq9pAQunypofXPsjukS2mHJ9LFtUfjN146YZTJYgfKbwit6",
  "key19": "4xKdgkadVJArf5ZGK6srw7NGZy5N1VQsZaNevjnQGPc7zkCZSoiPow9gbCzuUYeeHw68qaC4ewM6YLUU24Z87AaA",
  "key20": "2euJJVXSuDNS2tZrRcrnQBCGDthdUXqk9r8T8HewZor7t9LWuP6biehJERzedq7xApFAcovF7QC17ybb34t8CezJ",
  "key21": "514MusiM7d7LkgH41fPdsMKVmVormR25cdYoPGGRMuJb3f8GK6sFqphrwEV5mGLr6HnjBbiTSo2JG9VMK5VpRaF4",
  "key22": "wAS7KGzt4S3B7XbgEFHnmRX9ietsN9HdM16uY4vH6M4cFYqm7KqzQjQp9mU3mQNLcJuasUcF5MxnkRS2YMMpTT9",
  "key23": "39ob2dSU4q1nyLwQ4VQpwypVnUpF7d2fm7pJcqEZsQnrRBxS1w5YL6qM6fyKyBFXDt3ofcbdsLEitGHCw7t12JPy",
  "key24": "59ceovCBry18X1toE66rigByNkhhyJgNCeXXjt4FgNXy4sdXRjJYUR9Wc5bYEutYtBzjicG7jpcsaEbxSyqnkwy8",
  "key25": "2Yp9sBGHRK2SdHpmctEbvDnddEViBpKJjgqsmGqYDu5qCTDBh8Q9iM8SpNXbFsMMJYxv8JbKJcdy8qEwTZYut7qk",
  "key26": "2fyeM1B5b2D5WKPheA3275m5KrQAJFxebAETz6d89LhFCcYCyhjejrggKm7moyrJ5QDYVxmt4aM79QTrt9kUnfHH",
  "key27": "3fj5mLSyUF16XEDH2N6vx2TwttBvDYZEdiG6g5ui2qBUEzhSeRp92rdoN8xyjfoCXGHxmU5dJxgQX4hZaZ5nvwLs",
  "key28": "35TaF4gJ75ceM5pdPTBv6zkWmANTkDM4m17FAE7Jmox462qMg8ad9SPgbtPgQi8EnfA76WDSfSfp5ExwGJGqTjfz",
  "key29": "2wWJ6Aj5SmZqqmnktqu7onJUQaRRkuJBKuHhtDbaUPReBy7u8Ya2cBtk75mTHbGUR3SFeoxNsbvmCtcZTHvYiCD2",
  "key30": "22us5iE75ac9pHTS7WxybkZGPddy7kW7gDRVbgQhLLW9gyZWorvaspWzcbyHj4RyDLco866mTFA9R5pyzUgmqr58",
  "key31": "5UkBFTrRpAgEXbkM9WKwiRFWFkaVR6VLRG4aCNrR7UHbmygcDppUMjfLRK2akzdhob1RS4XqURqZmaS4dYFh6zEM",
  "key32": "4dW4JkGJa3cEv4MeAL7h6oU5eWVZaPg2v2FEvTPaJC4uatjfJ5YyQr3PTuVKfdFDYMgdUCT9pJ23yuVE8tQ6o4ac",
  "key33": "32trm8WgZsCn3E76ZRXeyWGageCZPNmrEwXUAaKVZ4c98v3DAQqCLc82UW4kfebGiBaDg87Zu6n4BgEhgQW84Mst",
  "key34": "AFobyjXGj5yc2uUP4W91uqHJFynArQMWhRJsUNGSBh3XEoUyAu29gGvyYbXj5RAAZ8Td6HLyPog4StiY4BLNFDL",
  "key35": "4cDEzUH3if7zQuiie93s2j75wQMzhVub8ighKgJMJFfv9nPPF5xC8D7PvaeMggRBAUJq6WZh9WPmV5zvqwXRjF49",
  "key36": "2efA1jYzAiuqhWvkw4fgaAps8gK3fvGM7176URypC9hNtsFHBhxMNxC2S8HfhmVEQESC4nTRV1BxCqWWoG2X22ab",
  "key37": "4CMfydhz29BMFuz3dJ7NKEkDGhLxNhMV9GBr5yeQYiSHp9KnDszCkadoz67iYh1uYV2tmb6pBEQkQxkEdK9uWAEi",
  "key38": "4t4uYaTmQmuXSHhpvKHhd4QdaZcGocRVPNs5kGKQPDoooq5Brz2vQtGSqzs7Zv3tM8Uy1C4uHqykBXQ5uTUH6p9R",
  "key39": "2nmhnz3XoniAVnBJexE9kP46bferG2L9zEPZdJ2qNg38pi77yePWHwaZfKQ4vQr2bq2E6THzd7mdBxiQJ8q36kEx",
  "key40": "2PdEAX4RzE2aidcwfr3Smi7wr9iwtJaRrRecTb2gmxmLRi4VmG4P1iYeSEzQMdw4qy9G9RytY7nB65oFpxcJn9a7",
  "key41": "5uqetGhLgAqgTpoy7W537qJePLxeoMpcRfrY2BhuHWkVc2pjShd7TXGsrwRqRdKiw3qJoZ1DrT49wcbbXfnb44sm",
  "key42": "5i5TZGREEtnHULSvNGTwGKDdh4FcMT1342omjVo9eQjLgpYGLfs1UU1jBEfWGZ2UnegfaPGPDvu3aFL2BnF5pfw3",
  "key43": "51JsLB3AqujSFbharHrUmdVDYgbTjmLR2D4xbanAahEoLYJap97KQtFxmkHZz5wwrgwMAPsjDxWY4nPtRTLsuey8",
  "key44": "2YkZnxRMLJhPF3o9ve6mzyu99NuAJFLPXSDVqWBYwVcaxhn7DwptTTy93JLXQftfj4QrKHfWdFEjVpvHJM2u5ZRC"
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
