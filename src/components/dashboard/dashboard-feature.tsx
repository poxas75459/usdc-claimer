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
    "5HyH7r7gAWXHNrgzK1uPXBcxNu9Mu2FneQ527EGzuiAkXBzPxQ1NFbRrdJPYzcigAMNfjyUAQCb2e4qgvtqmAahw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ptAd5PWGiT5CxBzf68EpFbDt9bhAbBqFamfjCbXvSu1BJT5WFHMMvdaBibP3CHW9DoEpKG3eqC884573PYmUSCt",
  "key1": "5msYLvYq7gbbumxMcBcFQjf26DChBY5JU8C1jhMAZmnWndNXz5rWn7n28iXNVsF4P4vTmyibDQUVTy9Hgvc6KRHd",
  "key2": "5GQTbUS89nsqceZ7wdNGKiqJqYP3mGaQKG7e5W8AtDCDtQNFkLW7LHydENrk9v4MrVjz9GNhE7WebmUCxRGSuf1b",
  "key3": "ZToQex2vdpvcex5fTFeqNycc3yf7MnWasEhJ3gjWYHfyuPk2gCN74a2PfRDFCxLDEHpx67TeiCGxeHTbMqf58vr",
  "key4": "2wFEkzag9PKnzZcxyogsDEnwTStSGxXd33yLAfoJSYzxi18RjSCwghzsK2xi1kBC4pgHNQDcsBQcrAaEcVK54bpL",
  "key5": "9P4tTfhQf7RVtAWPNMR4RHCKqUPczebdoZbA1nvgFgkU4LmyPayWb5AaSC7Ey5xe72mwPA1DrfaeNvsLAxmKk1b",
  "key6": "3NkkW1BDEmayu9qVARkQngV5uUp6NDRWaDAXbWycBPU9w4p3UkawACCcYGRQ77yWTFvVrRLeYMNxqH26PUK7P2fL",
  "key7": "3LgTNxvmq3Mq1aLJbs7Xi6CNMo2g6Vaf9bZitEjxLkDSPtRvK2ph374YJWBkKZqMY28tKCFvEain6hkjXHaQB3DY",
  "key8": "ipSRMJsgc5ZTTxb1fTiex1eCDvUS6VVtkP3y1qpsZBqAkLYxRsfReskcDBdGwxV7yDe1gFSqTjJsRtbUzUwoEy9",
  "key9": "4nU2iiL58o4BFZGjkD6phP6yCXQjZgQT6dMRexf28JcdwwiQsDmmWc9AyHCsN1Jt9yVoD7VMyZn6u8iEjiqPBKUr",
  "key10": "3i14bMSNmZSVJMKrJEy5xUfiVsBuYwBomVjWSXKsfjWEtsSb2rmerJuW9vqsdaxaiUhNZMGbUpKUeMw8znSxfJKr",
  "key11": "4dnLPMFSEgqFBejTf5GhMHoZq3R2B2981KXCFNz3qngeN99AzXb9CfpSDcCsLBeS7vKVntcyNiK6ALwDbdcZTzwW",
  "key12": "XeQBLNuryZVot4KrWq3gdM8nmzTzGwSkhGQThuGtHV5itYMbt51YUJFM95M4PePUe4evvd3c41Jo2SKPhnkSZNa",
  "key13": "Bb24qD1bUUvfceqFVKPjfWJgkTyqg2NETj4Vw9nD1KTHrsqkGeV5xJ8LDE2Na8ZyBwmbRHQdrtUjQoZjQmK7gaE",
  "key14": "3aiCzZxXzdnN6S2opFk8Bv8bRNQEwhWbExHUShLoYE6Ruf1L5PgcPBZeLyae9dienQoN9d6URmQ1BoaWJhtMz9S1",
  "key15": "4vUv4tqUPQFTz2PFnoYvMiYFE67J3FavT2D5AuTVs9KiE91jvzDXJoMNrtwdT6ZwmVnPpGnS7Fq4TXnu226RcPHZ",
  "key16": "4JoSy8poqHG7m644phm5pWMFe9wf2zo4DbNPQzZrRLTdbw1kAGFLFJtqV9iCMgtnbQCnkAZjsx1MRzZFWzJvvYBH",
  "key17": "4x5mn4Q9Co2Gf8yVst4ue5go8DuwuXXkwTTwQuwReff86zwLzFqq4f5eeHpMgkbFcEeP7NsDgUoBfok8YNyXHVo5",
  "key18": "NhRJj6SQPzEFzkPmg4oWHq46C4rrdScquyQvyRZfZx1NWgLhNN1kzuRRcpnkNANfjRLXHxg7cvaviUDGaYVFvER",
  "key19": "46Y2uKsqrAjaMERXXFkt2c45tEwxZEqUot97fAGLqkak5voJkuwX72hKCg5GF8Wr5dwFg82AHFZhXhDSZWAcpBHf",
  "key20": "5KQMfNjQrMPFXuavFsBXtz839Pbw6W7N1iGj54EDHtc3zNyn5Fjq7WWGLmDCjyTbTjjHeQhkN9S5zgggeiCH2wrf",
  "key21": "2HGb369DSvT92MZBXvoAs7uptBfRTmPLv2kAfHuzxzZ7KEfWT8m6V6i7dFa2JsvSCfdCCMZRppLF9K4phvmgoSpe",
  "key22": "4oGvqM1qmxjKe1iCws3fuxG1svoJ5WXNAmNzXu3HZRedMXXneGVR1zwLVVH3qrTuxaBDwvXbsroDnwXuwkEyKbUP",
  "key23": "4aAjPqYvMvXU3d6UY25q8vJQn7V8eZ9RtXTeksXmDLAKcPRQv6vgT1WVPDfocgb4s2xcLLLDqrPG6EZZwmgk4kxm",
  "key24": "2u8uWC42PYLaYaWKA21FXZnWDfpkjkWu6HSBPRTVhkZeE8gQyojbdbFEbd5BsLwYwK5wm5tdh5fLHiR4KxpwC4Ef",
  "key25": "ShJ8T1H9r5Y1QH9Eh13RJuXHUVU9a1To2gyoWJeotmiYUdhzD62w4mu3RhAkqSWTnefvNfki9gkKnkC3C7Qy8WV",
  "key26": "MDXv3ZHghcapKracPkxCDhzzYh9emV425Q5nNs8E82D72V6MEsMWNfrDYi6iX8UcNs1tF6J9ktPMdFNyi2BzLB6",
  "key27": "3izhxcPPH1cHWqyGeemLsPN8cZkRVEWDBG83B3n5vuaPPoCu4xYnMTjPP7BmZic287WWhes7ome1SSyGCa8SxA9L",
  "key28": "4sACYrj7DqMhrneJBj2dtmb29KySz1bhAHRwt3cF9a6T9r1JZQ1tVWvpiDQiE25df6i7PpN8D13XnCyG1jJb7TAS",
  "key29": "sPn5FGb67T1JUTQDbEGaufvLww1DRsUfAKZdpLTZeZrZF7iQitDTcobcadFGJjyFLrDWyZQB4XeP69qV1rga5ZE",
  "key30": "2QQNJXv4AMLNYfDm4oy2NaN5reehVSbTvH3iY4EW199a9LgNhfaESEqFqGGnLvsAog9dahUWJMwT2ghB8C5yTobz",
  "key31": "2NaKS1XgvTfGLtr4qVDJregr4ngWPEciSt8TB7qUgrUvHNkhApXAEX15eb5oLiAhpvDX3tfTGqeew4GZAkp365Kg",
  "key32": "5p4E6MQhY5uLwbrPBQgnUcdKX7t8GXybPiWfBPSz2MARAAndAdZjjyS7cqGDtzk5C7YAuGJ83czLjxxv4y6B5GgL",
  "key33": "3X1S4Dt4dCBJmvjz5MRomRFrCCgedxeUS8a7eVssS65HyxewxT2weczNQoDEvYoP1QYRWrkMqEQwC1vZjL2uGp9m",
  "key34": "3m4jAmBhaNvPGydRiKZZPuvXdXeUPYH1ZJ6Dzs64g2ojxtia24Zdbh3AS4TkibCWZqZrHgPRHa2eastpo92Dpjpa",
  "key35": "SgFnuCqNYJ1FQQALjPTdcnQCAEXDFQdEUMH1jN7As7BiHNx4iZTTKevFDHK8vG7uh5c9LZewuphNCJZizzVp74Q",
  "key36": "2xz5bDfbusuEEoG99pVaUwDgN1ip1pTCwPEWbrKJtyMfSGamhFaBej7ifGg6hDWHUH9Ly25iy6ke3oU7r2PyuzCv",
  "key37": "2oidDFFTP2qxSkZrq51psZSAZaLKe63rdkK44rZPu9acKJ5ner4gH26ETC2bfzKZyiVTs2AMrSZ5hHWN9DmWiZQD",
  "key38": "5mDfAGbWZkvevd24WfqbrZ8otYioihbwHkyWDvMJPaH1pCMJrA286XfvpHKUHkgEXbQ3eYwcaNuaGgZLLcZSpBhC",
  "key39": "5U54gLRPpLBezsHuKnF1nvhYcVXGYcXvK8QSf9U5N9z4Npxr5CBQeYQMnCjqrigha8QqBJXNUJER5kETrigTQVhD",
  "key40": "5UKBCxXvK7o2cq1PU16AnzXrS4FZj5LtXyaqUdkT2uaMUAcXFwU9D52UptGdhESowq8DGoFQCoLiS66uqfMHs4h1",
  "key41": "3V3apC5a7V3VSFtSe2kFLGVim3igQaTBLtRyhiUmS3tRoHUErGaxPDrXV3Dz2WGr9g3p5R5mRtMuiwfrvCtA5xb8"
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
