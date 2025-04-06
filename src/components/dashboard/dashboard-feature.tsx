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
    "47bk4GsRiFW9DuoRwE65B7WQ8xAzYwR4PH2Hd4eg9ohEKYBmNaeYuWsFNZUuNzkNPPrZMeP7tHsgvtcdyMATLsHM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hZbLuZbVjhPKb49uuv9sRnaQpQgCDa5LSqbHu7sovQbT2WbgRMgBrhPjqavysTch8Xh4LiMGRJTa23TtApYLjNY",
  "key1": "5RK4uL1w1S5RqEevB46XZ3XaVLrsf4x5uxXuMQRPou3DFkuLXSZVhDUyzmxpGrKQA8PMjzMoJ7M3cYjHAaX1JBet",
  "key2": "SJCevDskNdR4UVQuSLQ74R5DHHWGPDXtMHQ25s4fB2Vz6iWtjXip1G4C7d48e3DQMVdK5KCWVnDWiQQKqMvsqCs",
  "key3": "G6ZgidUD3ggDpDNiRXtiy8YYrqxWjQYz27P5yigijpTfBKcsc8zsbUZLrjiVF4FBts5wjLbbgm8YA4x8kJit7z3",
  "key4": "3X2zoMEGen9L69jyApwTbatxeitX66x1B4pEDayn8VMdBPocWmmBtV8xD98sfS2tb6e3LB7X22KfX1bcbqNTeke1",
  "key5": "3mCkbpnJeRYTF3ZpDS87VNzRE3EGCBxzUwkKicuNAa11Nf963mbNBFkckfzsKAty9T6KTdVfuQJumBmbQaKXDKEb",
  "key6": "323ijKT7se396V8pWnPWJGhLQDeZdwqnx2J9iWixwCLJ7N9ZqqJAvHSg6MSFbdm5D3z7hwpRcaZ3sXBvn7fW42SH",
  "key7": "Jkksr41XicuDFWg8XsS18aCh6CoHU13j3gAi4LXpS2yYgkXXnYAugauzMwSSZE5n5F5J1LL9H67cxdfed2aA4mz",
  "key8": "ofWRiVMA1UhrtUcEBd4JZS5NZZDo5NLsbPXDMiZ3HUfzuFsrsLWPv1sq355YPi9Y9Nt32AfAzdSRFtRLB8rhLmX",
  "key9": "24dwHQuQ56upLMENJCTcHrrmoaHA66s5obCxkXeg4g16tGc9FjXdEdY5RNMzGjbHhhBk3XChDDyvDD1B2gUEk73g",
  "key10": "5o3rhTi4VFwYb7B6CX3aGAtYqCwr97zBCMU55zVDVNnFmARBZqt6c3EcMLv1ppHPayCH4a8KenycoBn2RT92suZc",
  "key11": "2NeB3vUCkrw14Bgzqq7U6CVGwpPgdKU8gkrJabjgVQYfdVRVjUjff4D4PjoVhFpsNyzeR75sZV2fb29FTa11wVuQ",
  "key12": "2o8eMjaJhTBmGCRjq6PpJ1MtJ8W1FTQn4j9VJwfGhMU47KMXhHm9bgucNixqWAjGUrjSBMdqHGcc9joj24xcgzuN",
  "key13": "4BqB7HGr1aygU13YmkNA6iQXCCkpnnk2RaZYuVWd9v2ekWx12yAy4xMJwU3sGv9763N9FnP6k8u1WkwTtdkymvMe",
  "key14": "2pAwDzqTXHCMoPc5sVRdSgVpdA1q6Ckz5nTDzKqpiUJ4URC2EUXmoZc9gWTqQBTGm4K2pkvVhcfraL6bTj1rQU26",
  "key15": "4mkffgESsS2pbvEJqBPGcH5Ti3dQyb2ypMApdrrEZ39PA8oqVXmSRXm8cV7mdBFsC3Ljbjw1A8xDruKuhof1b5v9",
  "key16": "4TLXDk3TVVPDCUsa6dfZW8ULFbDk7R4VZf1C6EYbRVSAdjjCbHj3XWTbsA59sn3ybn3cY8dTUQjN4Rkx3D7KDWbU",
  "key17": "2dfWMtED1fee1g7TxEgYUWmB6ohQWBNXS54uUpZzBVEcYSXgpJFBtsigrUdq9oosie2BGmeHXSuoAxvVVW5fYDsY",
  "key18": "4Fbkf11rBmViFAMLRvtSEduthbCBzv5nVpbgUnL953iMh24tWspbqsYNEnJja2zvY5njHAzuqfEMHvNSwrd2eYvF",
  "key19": "5RXkyfQ7LyLmAPx8PbM46jMNJ3mSteioMKwyudkUVXMZtAJXMyFXxYyhYaGmB8ffVuz1Gq2EueYZRmxx3fiGTry3",
  "key20": "3sZA44C8DYZwMaF8QJbHvKyfzjMKBtDCaHiH9Vv6xH42HaDJcnywFggASkmDK3vc5outyE3ZDbiBVLhih42ie7Rc",
  "key21": "4kFZdHeGLGRAxabgPiJRDJCoyotnr9ViiGFZGfwd4hbmLVPH9ZsCgGCeLntmFks1grwMLBMq99S6kphVxoNAMXLw",
  "key22": "Qq5tq89iN78p9VehJWX6wSd2jLXoWS33PchkHEu45NcAHdivy6x6EYptAuj7hCZHLsvi85CNr6v2TryeY9YD6ac",
  "key23": "3irnh9iyNUKMSAqfwAAmRDN5c31dE5SLvqaD5VHywmTsJhSf2wQsmKp9kAbJfdNYVamC16wYr3kPnpRwf1zysuis",
  "key24": "F3uBEv5VJPsDtWV3ou3e5vFPzM4sy6c2G2eXsCT11pZPeb3XS6QwVpzzhohbruXTsxKnxG1DNGakLzv35jrjLBt",
  "key25": "2gVs7xCCqtfdXrobV85d2wroagWpA7fmmhGgB8AN324YF1fEDQnK4UPmDTdcg3j2Wdbe2ZGg677QXhxStSh1riUt",
  "key26": "3grSLoH73XYJoh1DtVT5tNoTcrwXBPGEjna62rNYabrxF4G7Sz2j1qnLrYXPtdwYmbeVVUuosdDRjk127WaBRigK",
  "key27": "5LMHMxtfQ5eFXkMT5hMiKvju1gJWfqXkUvJhpbFLSsqdFdpSNpBLZg2jLW7Pc69rS1W6wX7P9pgcuMmntRKBNSbj",
  "key28": "n3rWZLoaNM4y7sbdoqSV3GhBEF9g6qBxDSHtWW8J9NrKmjpPnLRu7k5Pmm3KNqRcDmJZHEC5JhVfgGrDWF8stQ2",
  "key29": "4WbKWCDRpLtBeAfrXjDas1UdBcAHCc4CseC6zYcjeBYZJS7ucJ7wQxB8z3k149BBkvWpmNM1w1eXqLgqCAPdsT1g",
  "key30": "3G5Da5pCzecqAqqgapDUdiDVZ9UhW3xrMhW5GEbzifzswivcgE8gMEujKTS4dZfp3hxRRrh8SUnXGt4G9r7HZXA2",
  "key31": "3si8Zh79xW2uBMSj34rNutZfhZ6YKWgqciy7oVRRAjJpNWX2WYFERDyfmb2R6mo5cgc6Mj6dZmMBMgt1tfsJbTVU",
  "key32": "5nNMmJvGAdhsg5H8xRkmGakZSCNXKjBBoULDkgqnkJY7px4a8x7kYgnHaZn7nkH1M5fkasjsi8HEeppXq9RRfWo3",
  "key33": "2uZzwZUNpCCWpw7g5GwunJftNzSVRVbU1fJCyA97YbT78uf6n8chDtH6XFvyPnJFaNJVR8ic5o6xXtA1QjHyUUUN",
  "key34": "4sRNNTgA1uhS8dqq1yFTJZeLaRePNi5UkFLKgUeBqKNQ4dVcbWBkvWCseNFvKmmpUQTvQfcFGiArvYJB6bQ7XKmH",
  "key35": "FMeK1C9MMpRqgHWTc1qPeuf3KKYiGkAaoZ6Y7xTPoa8zvktWU5rfzJty7urTT3R32sfAJyppXjQYPFwJtECo5wu",
  "key36": "5QMjj2ZGyGekMbER5tpRxLop1z5jm5k9NwSufgkFuC7bBiuex9S8mzkE6SU2nZdbRX6aaHQWQW1JgCmRXpUiix2B",
  "key37": "3Ro9LmXpJvt6vch9CBqG6wfSmg8UvT1jA2VWRS4dxE9Ho8qw3dheb15N5qBmyh9qMcqDSBPTFV5ixieVozoxunYe"
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
