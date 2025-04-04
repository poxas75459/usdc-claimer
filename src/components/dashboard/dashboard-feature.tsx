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
    "3LkQKQd6TYyLr1p2vVjT6hKYiVMnkWC1NbqBL93GSyFAhCbibFb8NK54X48nHggfweiAa4zU8TvZpqj7CsghnG5u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WLja54cr2K9jtD9aGtpYJFLYcjJK23AMMAWtmFArzn32ySaxwTGXRZqMZh6iTLUo5uzpzRHgLGBdZiQfN9YxLfw",
  "key1": "2BH8vMLf49NqaHQ61bftLMMsDx5qhwtjYkaodu2BpHkBGaFqbdpSf5nA4P3vZA7yzSCVMxuW41gDRYcFfjsZtdwP",
  "key2": "33Bt2Pt2xLmJvbuAoWGPCiV7BhXDzxTKzvhCS8Eja8kkSYh26WzwoiemUtMD7eYRxp8N6bEJbC2PG6q7C8CsrQA4",
  "key3": "24uHszGqGMALmz9YjFnbADbhWrqNgVZn6FdpD1E4qZuZfkqXA8JgdGkwnRw8cAxu482vbfPjiqCChNH7vAFzhYin",
  "key4": "4GNyqtK9ptp8etSxQ13Z41YQK5K6DUqwwN4PLzwGS2CcktGcsVeju2TGj23LcoiHDMq9KBDCN8vP3LMadjqcq11a",
  "key5": "4yWoNB6pQFknzpY4ipc2pvXPg1xSJfU6C8NcSJujyCfsJhujuAJrjFrYUZdUHeeQsLpKUKx81UuqPvNDakr9WAQV",
  "key6": "3tjqbfRx3FkitTWo9v8f37ZydMqNRNGEL2wE68pDR6UAgVghYXgY9h4cFhu8UzR545kQ9uFPAojnjFQSmjFgUk4Y",
  "key7": "5RAKoBBdsZkG4aRNa2yJUwQKVCmrktGi7FcxMSS2u6EpWbzMfxD1omekmTKmSKNnU7a4VsMs74ybb7VHT9zgohj2",
  "key8": "3TbsqRDozJ81gpL7rsvmMMSsaYrACmHfB2ByTYKPqfACaaDCRxscb9WJo3uDTWFDmwbvYzQy4rMju85fqTtxF8oo",
  "key9": "Rs3CbRckoMdVq7YXSSLq2q5A3p2rZnoURXcaetMzzgwKXKKE5UojuLjm945uU5XXhAny5Z22nzqbiodp5PieRCZ",
  "key10": "39QLZc9JPaRNuAkH1CiojMTU31PgGq6pPQ6Gv2WbVuFB9rmhFvS14RDca6ASn5rDebCdmFD2xCP2Bp1DxURLrEV3",
  "key11": "5Fb3Ux8CcYWeUzzakNYpdyighCppSuTPg6tWpPLUYPt8G6hsrpCVMgR6gX7azfBEAqJeSamRxp4ek39PEAxSYc9L",
  "key12": "LzN2ddD3X4Sjw7KadWEtTkj6gS8tF2gVba1j7RcRRqiBWx41vwAmPR3B2teftU4WHuvB3ZyNT8GgtqvnvJbEPpo",
  "key13": "5tjhgQarT7hoEeUZ34LuR3w5k9nFTtHkqQb2Ku9o1i6ZjKDbmenrs46sB8YSGkUhSAYfXXS7CiYxf1LXrNFY2HRt",
  "key14": "6LhuQtLYs2TsmLi4yjZGrmH2rF5XrsVaS5LrYP38wcBWoUwy3dJQTG93YfMnqCknKWEiQhy3UjQ8oB1GLTXtfEp",
  "key15": "3dXuYmquiJJdnCjN2TyeGhMP1d3vUSUSB54kmLp72j2bkkhKqZ8wprUgwgwtFMjzemp6CVeWti4tNhsDDiG5sxb6",
  "key16": "656xCUysWKvyoU5DZY4TACs3rNMT2VHm7z3C1fBHFBJe14JWeM9NHQej3QM3uj7nw1fB69e6AzfzPypSYjpZT8KX",
  "key17": "4gJcXpJ3nw4WWkzdrMubxCZhEa7Siop8rzLPmVpW77yTazf6MUHq9Vk9YEAjWqDvE4dGctGHVzC6bG4KLFTzVaH3",
  "key18": "4EmfTZHgpbrzDTrKBw1QuJQbrbXvN3JuCJwvqwZQoxymP1AHPNgDrZGFnUZTnrvGnqnczw8P6JJPt5zZ4FPV1KjM",
  "key19": "2uHu5ex6YJrynxEQTrt6brKHRdiZkDhK21n8FvVsNi8Nvu3ivuoGzB5FLtKV9XdF2T5eVCpHRCfo8cTHkXJ9eXGo",
  "key20": "4hvJFzGucpGYoApxtig3WKod1C362cVSMfChDpAMv8z6ASeCH6MkPWDQYukRdBPqF4dFF5FKzTvvjQiEQYZuQ27q",
  "key21": "uFU19gt2zeZUmJFwa5oCic4pCNQ8bKVHcuaWBLf76JPwEZCsfbKzufz8U7A51Uoobwee5FfPBFhsXgT5rKAx9qT",
  "key22": "3mvk2q7gVYo5G2LHrugFCMi2Yk924tX7QTruh7cJkwSD6nH5MCXfD6tmrhqVoGSiVfuBzkrJN3mjxgxqPGSsVRkL",
  "key23": "44EoJ9AJazdXK81TwcczdnemntcGrPzYvLToJHezhUzkGagePb4Y3P9ATpkA3W7EacENyecUiuphYetEzj53939s",
  "key24": "5L7CcusYUPJVoEh5YNzMyGFRwPtngXLnPdjosyLaTxD9UjUY1QiJb9kx7tPMog7WAaLRVhS6NnZwPaV5dEVSUkWY",
  "key25": "5Ti2ajigeFCEfQVLUQNMsHnjpEs2rXAuWdBZqq97ZipXsoQNkV73Fzumus8jT7A4UZV1wvagoSoB1EGqEoo59PYS",
  "key26": "51rzZdvjHYCb4mm6xnf6qcHpZSaXNyJnpys1JbF2LgmKyGvrGG2x3eTU8DoWZxhuMu3Q6KsQinxX65fK3AFVinhm",
  "key27": "3FG5BHhw8c4U5HaqvaL53yoVCwnEivcLSy4PQfpXooZx1Hsc3cismrHKuVvSRDNNFFMCUCQu12B3LgoqRqDSjkw4",
  "key28": "4Gh23WtmT6QGf9LQJQv4VW22L9ohq2rMkFkhGEKvaSBPGxZfUdSpZgWyELUA6TH7PgJinG4yJwQGbNqCJSBLGpSP",
  "key29": "JBXAJmR5mjRgQLHKJnsBZNDQF1MPhtBTavjza37g9j6eWAmsUT3i22mBZJudLeZn4WBZwFkspFyDbzBbWhuvf7s",
  "key30": "wRGQBdWpVwnj6kmgYhozRGoQmmQKvj9S4KxjgdcFxDyqGgSa6Quf6mVGn5Yucu4eCQsv5EFxpe6SJnToJXumx3R",
  "key31": "3d32fouWWAjZBKXrD7WWVMcH5ggwJqjjQF4tSSojzLGy1qkEXAwbqab8Fw3LxzsbJBY332wBkTcnRRiBMF4cJQNU",
  "key32": "5DsRvcvw7Q48doieYwtyAoGhWLUYQ6PXuJYSi9c245Ug7WpoXP2EyVcrEPCghD7S1ec7U8h82wPiruPniBLLy1iy",
  "key33": "2aDoCnXktMJ7MnSyWiwopTgwVZjMKKHT1ywdUDvu5YUs1X7MNip7WP4GcBZQ4M57hfFF1h9mGfCZVkPSzPtws4e2",
  "key34": "2fhRG2Ksuxp3qk182oA67c6ZmnZtTaTzxZMuxyxne1LAdnyc26bqpqsnanbJZG3tTgkVYF51CXysVjvaZebKEzQ8",
  "key35": "PZQNaiyxM4Jq6h1MKuyW7pvWCj1XxMqMkEYvWtHUhmk1qQ5317N4SZTHiHJucxDFrztKJ7amihFTyBeqXM6m8K7",
  "key36": "kbeZtBtzzHUTUe9P8zCXwBFAd7J4tcApJx9SE8s72xuX1C6XN9JzMVqPp6rQXgm2YAFsU5a7hdF5nipFeEqfvSZ",
  "key37": "3MAnEbfGXutLc8DubLcfDdab76NhDi4f3t7pvknSMuz2gGoxBMQRJzzg1dnCNVrz3j4sQdeZkF7iLemarbGKYknU",
  "key38": "EYWuTRtvPayQHgQFQfyvSFfM4KR6kbbe8nguyCguBT7cPgSsTmGkWXNKura4KkjPi9w3FRK95SWS4YMRDS1vui7",
  "key39": "niVrBScoeTrY2XyJp6WAUHp3zfDthAkddoRYoytX4LAwBNFSL7pJzdS3qySpjus9YUkvqcqusc56V1SQ4WEPLGt",
  "key40": "ESTAd5S66wzMVjg7GqeTzaMC4SxqLVyPaLXgG5JmcKRVpYE8rUmYsqvS47XrcNtuf8SC53k5a7ZWWzSiL4pxmwi",
  "key41": "4EUyBYYw2jv4FhGerXZSAi9W8EXbrcQGfst3BQyDk9gvzB4MKKXjW8QvsUNasxxZb3QiKE5GWd7r5eQRCUCv9nwF",
  "key42": "3WJHhrH18DCAExLM9WvuuL2o5d9AhcVUAAAmQYZvL9cahWtx1GXnd8agHkVcX5m3iqZH3VbuoWHA9gL59G7J62Nr",
  "key43": "2awuEQwreuEidtjHHNDY1Vg2TtVhYz7SSHJf4jzHrVjcirUSoiwNJd6DrBq4TgrWiX8URTcTTEQstnqVoYyjRqWT",
  "key44": "jDnzQv23wr2Q3aXCxTfP5oSPmxKeMDgk4eNRu2b25PbBoG7abByjmaAGMquZePBGTS6dqgtnzKYuvvAZtYAqnpv"
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
