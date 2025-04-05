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
    "2j29vrZ1kMrwBrSSxYg2UG4jecUavLo557ctijE45NtCBF6KMVPZxMevmswBdPsrfjtA4syoYGEBtphVtPVgkub5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ErnB5wyfrX4V9vBpEvMor7fGjkvhzub938jxRZTFXBGoH9VV5BMDbePy957Hwgi8WRX6LAUw6P3egHD5gJfRh93",
  "key1": "2pTsyQdFY12i5dB88gc915ZGgAkFR8Uxfzc6u9HWctycpeWgrqj2YoVmjpYpX5ELnCoyrJYLheoTNHqNGy1VQ7uU",
  "key2": "2qPAfW63j915NBCZ7m5m4i7xxB5czoK481A18EHii5ZpWrWk1zGYYWuJ63EKijFSYaJ6PFg1r7eF4knXtjN5TXAg",
  "key3": "2jCqcpgZDaw7MTgris6VCfMGsPzye9XsHxmwEP3TakKHEwUEsSMXqhZJ4TH7X9gG7S3bbLwDR5ESWHomXuhvi5d8",
  "key4": "NrKo1x8eirkuweMV8cKo7x59CUaTotWDse9n5actDMqcc6wK2k6NDATkXpdZ3KPHm7AAuVrEo1itKgQHN2yZwyW",
  "key5": "jTLSUz5RDtQnjwgceSaqenS8x1NGYV6mvoeC2V6HqvCWFAc9AfLPGXsiMTUnN6VYadBo5LEMCcC8GA4h1BGNduE",
  "key6": "3HmR6Vz6n3WdTPBXMAZ2TKd5giAn4BfbJjjzgf5AtkuokpPnrY9XTowpS6Gkh83F6pbocBLvbz2QyvsZYS2CiXyq",
  "key7": "4W9zNEoKJQeSJ4kBv18PhoxxB42Z3AVroSsjkAG4cDFk6x3uqviJfxuxYvkqGauYr5d9PZT6Ce4Uu73jS3YEQFoU",
  "key8": "2e6mZVDtfsPkjaGBNfu7yFKBKpVxsz4i5gVeg5PQmC4rYrz2ADDbuCF3HFCjbHy3xpYf4NA4NFX1LsnmjznW3jod",
  "key9": "4Tci6XSDzp62cCC7x3933ryq1z8TZ7tDkJDwgRtsEXhWu7esJVRSv4vC5Xk5UkujJuPVf4fm1ecsySPghoiMFHYj",
  "key10": "5KDzGFQdyyToqtgcKuURBMvBssiS73bB9P7bqoXYwteRAsg3MiNBVuHEjSJFXtnutkGJPuxAVdfcuMCjWYV5sJ3M",
  "key11": "4PQZ2u4Seb1mtihY3v4EFj7XcN3pTDedc6qorPtDzpbnxLhU1TfJo2Fgq8Dg8JRzQNRiSxs9Stz5pWjm1f6tAbQL",
  "key12": "peJbdBAAxPzVfZFQKmAmwEmRAkpXY9VHpe74C21wYHHgihzgc7sUvCPKctqyKeJcyxA7LQtnGhjiXvhDCX3ddaZ",
  "key13": "2r69FKSmz3ycVsUJUQhU8WjPJvuG4ahHYwaDg6rexBsUnozx9GCgQpqNNzWoyZzkunJAGcQg1chD3ccZo31MAffn",
  "key14": "55E5Y2MNiF1svdY5pYqQ7qVpY3tz6Vy5KrQdnbs4unK2z2iJip1wshwj6f5XxdJPN4XupxPZHDAqXtqakcNzxrQi",
  "key15": "5RvYWTd2RfXm5ARxBsCGSQAki8EMmMakvA1ZEEkdn5jGs6ESjemJPKULa1WMu31oWSqG8np6K5oF3TWYEmyc9fsb",
  "key16": "16nTCvaKcuQKxP5BsnM4CiLsc2s64cnuTKvh1VuRFeAynSoifr8yHxFDG9vfsQjvi2nx7vjnNKsHV2EQwfRBC1G",
  "key17": "4Vyj8Vvq7vw6JJaHew1ZBzc85snJujEWMq7h4nhu6PwVxzVoHuodEPX9WBaM4uLfuyUKzkbpype3sFS1RdkvK9MX",
  "key18": "3rZduRBALKRtV7zwye12yCkAJXCMNMGPbkZ92heum1oSQTSz1cPXCmFmomzHpmr6QDwjaTHXbiP2jjXtS2JsQvDk",
  "key19": "5KGKjbLs1SgRTrSsjffdBr2i7nqTBEvKBZLn1rqRAWeWnroVPu7T7VaAUPRjMtBZjcqwuq9SJ6b7JBv8CSr6pMVD",
  "key20": "4ZQWF7c9wawxP7k1tmVTxGj6KitKexy9ifbWYQ9aRi5jHjELTSQtvhcdH6xTEzTnpYpjupp6ugW64uLuoREHpRXX",
  "key21": "f1ydqwz6y4w8jQmvm6ENyh9okxK5uLHDfy6abrLWJLq9LQXPQ9R7N4Ey5qDU413S3tZaTpWKRTdCfoBfEDECGfW",
  "key22": "2j7wbpRLyrY4PLKHFSq7bB9cccXejbeoUxdERTk3B5GMs4RTHLDTBWu5nJVaNNsBzmhWKg81ek68PpusuhiUprxN",
  "key23": "5MfNY4ptMYNocV1uJM6CRYWoz8wSPDv4rpTRVFrU5MyTiuHo7ahHpSTHjvpW1WAjQFPcMugt6BU4bGDehpHifAZJ",
  "key24": "37SSZao3f5SYPJpcZ6Kp2HMH69ShgERMQpVVMDzUP93ZtBzyjPvbHKhkQxrmGpeM5PZPGhp7iWFQMSdeNaA1vvz3",
  "key25": "3yGAtqtkCT6TAjtuHujaJ9anNMLgwifaTVgHeEy2Ef2WRND5UL9vUqvJ3jgr3o2S3BFWx8EYZiBff8QhC5fXJQvz",
  "key26": "Gw5DJQNfymDCJsFc4yRJYqdcb7XEnuGJecsZUew4gMQHYqjxme5A2rWFRJd98xUDovzznmoaW4MV6PmC8WP24b3",
  "key27": "23Szmy9bM9CzKbJ46eMztNCKCiC1AXpP2KzC3htFdSrW5cGDbDyt96VP5J3hJfyboKexHms4HGmmJurdsCNQh3hv",
  "key28": "5pjYQTwDkpvant6dVcRuS7w8gRbn1QudHoocSmELrigBt5wXbifVFgHGUei26QXonxn2bJfQSu5Y76qvV2S1Cxfj",
  "key29": "4vi15kdhYz8x6FepNyQWfDfToQYSx2SFGtqvjBJemsziVf5tJdiQzbmu7GH5BTtHpoFwGiHnRqLdofJD3zujeoMM",
  "key30": "2ezHuG1dHhNucYNkRbnWGBF7UWbD1mcC7cMLFGRTKAp5ymAUjDTNPsTiCJgwP5dmyHp2CGzo17Uv4qJ6WzNbLAA4",
  "key31": "3giJs1ogfwdNtopCL2AnruHh2zLE58xGskfQgpcYy8oZWgjXbmsZ4aUmCohoRDGoVQkQgLK2iPpi63eK7Hzjv7cX"
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
