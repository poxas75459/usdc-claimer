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
    "3PVfWdExY3zyYx2kjZoeZFHj92MkZcCZr23SGqkfcuFDnr6eW9rWyHW8wt3G7s8RrJabRqQ3NTPyjC46CNs7hU9q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CBW4fMoFXSMX1xoG737Uhf8oByiCNiVmR6tmvR4aX5rFqw9zTRg3ahKrp3aWvftjZGMJQSXHozjwgoFqXyYdS4S",
  "key1": "33GMmb9RELHW5MGhWDx1a1U3F7xkjVLmoqFoQcgRyyYhncExNSuNmYqzgfT3VzcChUeyNDsfEWPWRmt3uAJS5kKK",
  "key2": "5iJqGey3dbkHJGkg2VxTdmwfymiZgTCXRgZRWmgALvpWnEmuCLt8QZDHspLoTKf64XG5QyfGK1KuzPYYdfbmVApv",
  "key3": "2VAHyTGJmdcdLcdDQf7WxuW9FB2FdShEVkP3GUGiaHZwKJiiFyZm6mMaHz37bm9mR182QfQNfbsxv7MXWgyLknAz",
  "key4": "4pSRhJdrYD31j615heHP6w5bfu8iheyTLFJwKPh1ddMxyzrQMVn14okRKGe6X5E2k21Btaq32BYPNHsWujh3LbxZ",
  "key5": "5qVUo3SpXDipt9xhWQTxciysX4mDyWLxaZjfr41nGUqHREh66UdK9n6dvCbkbQbTZCMiPEUZ2wJJEAR8ZvgtQcWs",
  "key6": "5QagPNsySwg6aupjVSsgGTgTho3NQD8k9XBwwxTjTbAc52eorWkRBZGaMSx3iY1phABbfxwL6EiWLp33zp1acdw4",
  "key7": "5LgME7EcgcgxcuVEqD4Vaq1rja2E53vMSdsbNR8BXrW3siuiw8qre7BCuqFdyxJTWBVG2A1BZkqe1oLqCHE2Fdum",
  "key8": "4pj7XUz6pJDkUrE4i8ZAxaURQuBLbFq7Fia6ZDD4zeU92xos43drpVq7N3UQazkx9vFMqE7HubFLwP1UERh3N2mc",
  "key9": "Fm5w7JUKbtG9F5P2qyExNRxFDRBYJXzggici1JL2hmZsXZA7fnqemp8YpN6ciL1MWCJV1jqiewAnNyh1MRrNb9A",
  "key10": "v3UnRiX31h4HY1JWYvwPg6epdhN4XvEckc5dRaGfatjQjvUd4MCHsMvBznHXdHSn21nQkb9ZQWUtUWMLxwtg8hX",
  "key11": "eF2T4B3nQSaxrsZ3G3EbwiGeyvEf3xFuD2U4AJ3Rkj2UHT8WDvtnwoQkSnMhFJT7CkCQP1iP6PKNdc9kvJd6bYf",
  "key12": "3errZvUj8NJdGWKsWSBHHw5ve7M4Mr6vHnvwKTvLf9nyjVQ3ph88LFLpA6du5yYGWQ5TQexFvwxERHjRMDBw6hbf",
  "key13": "66qhznkfm8bgFZuu4ij56sTwc3ynDQTp7SgpgntmZwXMb8AqPXHyemgYtpjf14e5dHjWPzuLZfDK4S31L2fVDFCr",
  "key14": "4hetFbfDJ1apfTNsoyDk1TnVtD3djhfWgqffwG3ezxKz7gykTju9fyKa1TRthBDzx82CJNrZuWCR9kjpivoj5tve",
  "key15": "GCVTx1Zi9yG1TAW4TNWJxXtngQr5fAtvSfeYeV378PPaLv4o4jLZHvwoPttEMDpcamdbfvPcKS8KNf26aatASA9",
  "key16": "2crrhcu9FsLS49ZC2G3Bb5WC3NtXq7XDLRE3TYQ98AoPywuE8CLqcf8px8enUGGbDM5yYW7R1fbkReDkFYcwkUQy",
  "key17": "3QuuSWPj5WKaR2mtYejx4DYGeu8cWPuWZ3aGMRx1PN5tzxkrfCppaeZSCCcQL4UMsXMBN8aunLpRNgpHEFPPaeUU",
  "key18": "2RnkfFJET26hncMMgg6hrVJzLgcrSRCU7PUM4Qaew8YpFg76yHxxLYamnQLzF2iRgx6RE4aQM75gwEXgfUtmEWE",
  "key19": "2x1hoDzvnsnH2FUp3ZSXnwD8cnR2pw5U8TQGKHa8BCdvUCEoDMPvzwHq1x3t8PEMo2GrksNZxqoobS2M7Jd2fhca",
  "key20": "5QUntK1sXmYULx9aYxHEihDXQwJpea6CHjHUUKe59sWkwYDcboejjPvF1N3toQQf4QYitpkKcD85NJ6mSF3WzBV8",
  "key21": "5hckDR5XnExc3wzwDgBTa8LnkXByrp4G7HR8XvswytCEqHtb3iywXE7WNnWjMtbZBqUHKSGt7cRuurQ6dbfSXNP9",
  "key22": "3FbRTp4F9GSHRTgrRvBu1SsecMpv2tgf4EaW7vG5FCXaJbbHHJAuRBG4QbrFoWWsJAwJyivXUnYvPXF3prSz2Y2a",
  "key23": "562JNsPpoMAmFJhzx1RDdhBcotz9Z3nc9m8ZuPeMmoLmu6qPwbJEPDDCnwpRaA5rGPjFvxdTceKY5ujgyPHHfmDC",
  "key24": "6wsMNPVNxSMb7NyFJNt82siacxeF3bVgE6w12sMpPnm2pWCeZjdJN1Yor5Zo4nysmuu6JKGDtoHBvj4UfkjaXdF",
  "key25": "5pqfuvubvow3jrimbTtzCLZbMVfkFBvXwiAhe74PBdNKSDqdubZSdFn7G8ZhRKBxJD8FoYQVnA2eWjoGqw4k9tyq",
  "key26": "5N3T6QTH7sUaubk8WJEEb4Pj6QUKSWijj9bQPmKSK3HfhD5pzWrqBeioLc1DaqGW7BpXACyR64Tk2uhvxiXVXZ3b",
  "key27": "2q6AEsa1jAgq6EAmQen6Qy7thqgiAmTnJhh1ajZw6phJYhuqXA369v85i95pS6hWBDbug42ZhwnopsoWAMVJwVYx",
  "key28": "5BeAXLud2R3THgugfhRzuNoADSERMAGrW3huS8rHdjCt4owQhNd4Z1PXfavF3yZw6rnZQqm8xysqyPjj7oiPdfZJ",
  "key29": "2QxeM31PgDt48sQJ5SSx916RFVjeBdPFVw8qdFq6T68zcwESVEVi6vaaMFqANKcPHn2ebL6xbmWuRUCbnm4mAUP6",
  "key30": "5EavHaqwWDk4au9gwzNKGDEo873AiybY5XjqPna3TK12nEcAvSKD1P6rz1PXip1eVJTZ5SS4xPt2hM6Ys8hgmMzb",
  "key31": "5KHkGUW69izZwbbrBRY487Y78xaV52C8YSu8H7rLKZa2MA8fmVGNhZGh1qkiQef4rD2Ef6HeaTsFD12xCpu6TB4J",
  "key32": "4L5CPCFDhP8kUns1dDe23eMaSn8v6nNbbgfDbu2jXpS9Pjsfe2ckLscxPpPJ64zQUrw2PUg5X3XKcz8uPdHh34DG",
  "key33": "45VWXD5a7VKstBGfdyCd33apwwq47YaFfm7X2pCaeNDSVY1fazf1GhVR7pd6X85Naog1DvBMuZRFtEvgRn4TXKyr",
  "key34": "4A722DbjjrsczsM1LTfnvsUJiYnX3gde1fhdbCE8xF9fyahKhYEZyca4u68VKGw3gMnMApvWtDhzJp3BbM3mvWz",
  "key35": "32fBpyjb941c9uf4VNLqeYrwSdLo3VvDB5UQkBAk3J4cMzaPq6N6QbnZqTz9QHs3kBwrTqYYdwHZkQdMSSv9WzwP",
  "key36": "5wCRBgLCJSvgcKEur9U9koPNvaxV57vKwcVH3M6rb8HXJ9r7ksTWY915X5EcwFZPjUcmsu7Kc9dMtAko1559bCB6",
  "key37": "EAfnUJrpQBDhpt8PNM385fAE1ihDXt9f3KthLK8xZFRosUnFP2MATCCec1SuHAzTLQV5NkfUyQvhJPjQh9YNpVv",
  "key38": "2DHgaWbuyuCerrQv1AnuzwQXLQ2KcC9i9C3btNnMXkFEMQt6BJrgpFYijguh9xb67Mr5NsuFubvkufvk3vTci5Q6",
  "key39": "23pjJs6aLf239t8afNboBPFpbga7seMvpPxGqANgy8rapikDWBjBgJrA2xWTCcfV3QjH8FsYAaxBqnUxtf2yJEf5",
  "key40": "2kWfeQBkZ1JzuHGW3YWwwjVXgPL4PVvSghsNHaCgaWK2ifBoDQDmK1JrX3ouj93CqRNzQP3PArBfYDpveenCdLd1",
  "key41": "3kQUe5Aysw4ViapTK1nZwYNGVbXkqkjjvUrbYjPSMEMMeMYPxZVtDRUQzqKLoqNG78NhD2ZtN4Nezu5cZhxVygRe",
  "key42": "3kUq44KwtV88U8gYZ2WhYAezBkMrYtcjP4dU85uGgs1fZeYHbtTxtjAUPCHLy5eBRCFNoEDV4yPoNw5XaRNNL2oB",
  "key43": "4fA7jPX14R9e9vhuXnNMmSRQRY62n538obErR7e9Y4h4n14Rt3u5Cqjcxc6bm2k8Z4TnXxr57yZSpT3ybvacWAmu",
  "key44": "4aVLpUcExFQ9NYfkLu2f9hmbLosRH5J8NMSrSueKNKrcrZcWF3tUU8ctY4BNxRTkocTjnvodYYt3WB6zm9C6kwpg",
  "key45": "518vfcQrBdXWfeB2fB54S3YaAzUwfPo9twUZ58Azwanb6MWkJfwKTRiTQ8tEjXPzwUowoepqWaevaC1ZZdUjbe4Z",
  "key46": "3AgSpQpUmKJMPAopDXeuZiuYG8oZaSFkFg1Aoc35SBTvnAgFLVaMDfX3hhdgPUZKgSZNYixwaCvdbTw6ikUXyTaq",
  "key47": "2HhLLGCMXZK1Q3rG8mHHodHjFfWvaMKX8taww4XT552coJnJZw2uM7bzqAQTQCxsnbUemHV9ANFxByrNkvxa4jfx",
  "key48": "2MfnuTeu7y95dAJjGgMow7mnKkbAajH5QT6tFmCVPXzmsJAf6ajaXUeWdkZJyq9EezQWcDtiZS2LTbZk6ZwZwyC1",
  "key49": "5p89K31RNmkQasmWFLZMD9JFsqamfU5zv6ZkZ7BwVSb1GbswFP5FCfpnwKNDHsBrrfPCMTS4e4JDSf79JphSQk8x"
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
