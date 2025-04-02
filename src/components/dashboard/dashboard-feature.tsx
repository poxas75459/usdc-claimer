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
    "44Fz2MayCFqngeu5bqeZ929DTeVGTxaTencN9XG4XFrHnZanV2qqYkUpYKPB5EwPobrWK52u8zjc3jtp7cDMVAvL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dtSJyCiWsaqonbGSqyCnkfGCYVb7Xi1oUMjZgW87ZtS3wdEuH8JQqjGnx33WwnSCB5mm3sAJGm7rwB2dWGhRrVV",
  "key1": "23cWuFWCKRDAmZPRmt3BrU4EXFhz6BG8fTW59pGAqHtMRnh4LJKsmf4bHRwDpF47MHpEhgPW9a9MU3zHtj3ki4N3",
  "key2": "5SB5GDVJf9eXRfRAT5Mkd1oqT4JQarAvubY4f69Q56DESXwGybsy5PbPKPRwr9nAhSrDKLn2xmo7MKMpRvshx3W9",
  "key3": "58ZZzf8c94JHnUDwuV2BFE9NjH6UKzQUpbAiBU6BMLky9AP3P3dGZaB88mywfPvdVVTpiQ27XfTHQj87MFAfFRjw",
  "key4": "4oe3or4TCXHxQv2wJ8nNWPySTqessP4wVtwQDpL5kUVcJuxjgNZQaa66WGx8AHBKdmRtihmWSi2xVrPTK7HTAvds",
  "key5": "3Nvc9vggFcSFB1VCpSBHcfpRy7dDNWhUnsHWHAGyygh3CbiRvXmsyMoVRQ2uDZa6m6V8BNWubg2twhojgNwnFLib",
  "key6": "3CcdxJWMARUMRVeF6ftfrwmsr4rQL6UVjRwEiT7r1feyVo26Xk4GKfrPTKNGFmoG6xEt2QT3gLZ3CTj7jZAGaKre",
  "key7": "5vMZvKJZ1SJdXoinVwPx7FA5VxmQZN68Eun2JTmD58DqTJy9UV3PH6QPQLRBFgSt3mqpbtQy9VH2a5VJ8m85sYBV",
  "key8": "5Cwvt6dN6ktf2MZT7nXyYBT3GumVc1J3sGUayt7Dwoua3KHCcArB342XsEr2SGUhjY12G4tWY9nGzAPC7h4CD1wa",
  "key9": "3RX2Wwo82nuJyFiFGCsvBmPwdJmwtSSGNsa9R2xALzG5eZY34t1oj46ExUy6wqoiw5KbDrEegEmess8yTCTQSp2e",
  "key10": "4BCRmwh2hQnQuQihgwdQ1zMg9kPtS87VC2z7BbH3ZzL37ZsiRV1fRZtNtXQkq3DYkdjDdnvHumN2eeEuT7i9FEtY",
  "key11": "4bycgx11tfNFVcE5tBaqtETz5JF1aTL5mNJasCfADATEBJViiokHqC9eZJGXWtpKuokEU8Z5WyVKBFVj1YBpyvhP",
  "key12": "5UJ9mPEBVdRFwDehzYYkuMKQLd395etMUk1qFaBAGL7UZm4KAM9vSbkb417Tmiqt1sySxzfTj44xDtxgormdnMg4",
  "key13": "4DoaobcaEPiKC52YYboZrmLWRZ173akEZsJaMF52hwbBuDNDk1d9EsqYHVyvkmcsfXhnpqEyYeY9koTH4TZM1EzY",
  "key14": "5YoyR3R4EcCbvsZwr2suLLMkPPRWKsYhJ5J1dxMXTtJs4B8TcPKMHQpva2cwu62PVCigFLk3gaBvF8BMbcgagZcC",
  "key15": "3hdgi8mDrV9Mj9iyPrvNdPTFKhmoYLCxWZjkEkgWBf2RcRnpLDTxNibe7TyXiz8ifgakbeDzB4jFjonPXYkhqKjr",
  "key16": "2wNUF3MrHEoz8hxHymqSy2geYkGsACfgEv8JxaRGkisRT5AnNszd9G1x72GBMHuKXzuL3HND49ciYfK5mHUcWY2t",
  "key17": "2jnDkM6hopNB8XXgtTWvCoefmMwPVR5HvV25zxZHYkzF4h6ZudS99izzSMEFS59p5YyAGb1Wb11MQ9z5pHdrQHAT",
  "key18": "2edmeU6qiuaGjErcemL4HD7G4VpG4Ats7BqkisxGghdzV4BE7xBxqUva3mvF8xBwttNiuo1astQynNUbBFTJoNPY",
  "key19": "5dfJBpixLuv9eiKLtkPahZqxgKYv9PZdYLQjbgfi6MLf2jpDnK3isLUDRyfT81LvkAGgG9acJnkRpgj7ESZLXpWP",
  "key20": "2XwBE88Dcz194Gkrv2fjtkhpjy6o4xqj85gHHRYk6wDmtosKypQdtvAuUZtAvZeqYWZz5awybmYxNWXEYV7Pfnx1",
  "key21": "5pR7yBYJ9AoiAtYjRZvWgwdahB8MforewE16V9UsuBXE18MGjxTURw25eisf6k3Mhjuw8sYrMBCkAfVkJcenpjym",
  "key22": "2PXyo8H84QREdFH6q99u7YUjmg9BEdZQUj1jq6VhY55VrmnMogqPSQysLYYShQcV11wMV4FRvDRVmom7eoHQS5uN",
  "key23": "39RzZc8fVxu5ae7JyMCpjPUQ8TiVrX4Hq4JKP3tyVtSny9cg38PxyQJKPtd8xgPe4J7PLhz16T3quNcYqXB898f4",
  "key24": "5LrErV35i1zETiWJKHq4YTmqDVKAwrr4amypRjLkchy6JvC92e3Ucv4vvCucNTTmVgvpT7xe3RhUNWJ5e1EPUMa7",
  "key25": "5LKkamPBZr5vGgYUs4cw6psatFLNnyq7razxdnMHGDcriPTYn7ms3ALW2yfbvppneWwBFASndNrUWubkJfRzDvv1",
  "key26": "3xT2d5wwUtH3RJEiNmGfkZRfJHgWoJ4awg7UuEA9MmkBdLvwntDtNXUGz7CD6jtUAKA1LodZXK6YSygcXkRs8b1J",
  "key27": "Mj8Dd4b8D4pKogDfwHT29MmsxXbsH5oXiDKkFYqbEgqMgsRsoQpidxYHsKEQkjA7NQNC1WkngxHNHqmppCvta5q",
  "key28": "21rVyYfJHsXUZHn3ipCQ3MsGpGEPNCeTBi58LzZE1PUmeAPJhhmCcNtvLFzqJYwcHrrUkhbhJ5jb3D6WahMCgPBn",
  "key29": "4ttn5mGkHRZRzEWxi5FbyrhCcqUhsiCgtubfZVueJ7Rm156qbrxK81NPdg7pR3MA8dkzsxSwcHRvsckJB275U9Ff",
  "key30": "BHx5NThTTYWvFGmw3MhB7jq5wG6A8wTDcVAja8eXHxhAaWafMnzCyKMt9F2YDuCm3NJGbXpqadofhk6SXxjQTqN",
  "key31": "397Uv7wrtC53rTi2AuJbG5Pmi1NDqdinCH5ihoD3atqxdh4v7nAFkz8TU2EYeFEdrNp8PT9wRRkLdDSbgQJQSa4c",
  "key32": "ZJZn4tQx98iEQbaajWLtSdWYCm6QyLr9sNrahhwsSJYXq4swLqm8qxgPGHwMnzpAh7js5dumc81QmMQz3Ym9Pr4",
  "key33": "4xyyadyauPYHhpR2bCErBpGrKjKZhB6RK7U6FG63briRx3cuGZYTqyHbFTr7PWW3ryJZyCEG1q58fsGfTKV8SnwE",
  "key34": "5f2s8nh2tJfVfqAyk28dt1bWQ7nPx7WkaLHBAoMqEMjiSFQFWwdD4KNh3MqkXZq3ZEFkQC97GosTHaMUMoj5XNpP",
  "key35": "2DuFFGRT9VdLrunXmyqL3UySB8o7cVQJagtSLtfKb9tAwhweVNzPktrWmDS8CBCwYFFYjSHBjU4pPGyxriyfbfS6",
  "key36": "bwKe6gx9Pv7GdJ6ERopzqd5RYj7yEgeiowTdvin6MzrVoq63bRMjnePao8YbbSzXPJy5zLyg7ZJPpiCbPwp3rCm",
  "key37": "44q9eRRrryL1QF7bfriQJ2u2xD1CtpFocoLPJKaBpp1PrNw2Fj7RhjNmWyWc9pM6DNHBMh8WiqctJkVqd3En8NV2",
  "key38": "cc5XE4VUg753ERhEtmzLnjGz16btcu23nTxuv9cbYLq6dx3WT2CdLebhXWx91DqFuvFmhotjSZM9gDKgLXFZPY5",
  "key39": "4JezBZGAM4S29GW8zwSaiivvYKpohLmnb15dusip89nhc9SgPgfV9U2Tka8PdzCEf8uwzSNWHhftKo54iCTZ7uRn",
  "key40": "5XT8p1YzMBrEaKwwnW2X7bMqh1YfAHtWcyHExHsqJezVuFvE9nc3d2ttRxFrSmSnan1b3Au5YashUW2Q2137RdSK",
  "key41": "2gXwCQZMtAHMfXHjPjPrziASvbkagsZ9McWpMpsfsU3n43oreW3KpxDEoNJaiEgGuR2kKRpopdtdU6FGHASAZZAx",
  "key42": "4Fwde2DEUhgcyPU9D5y3zjNvhWqAAuYiu2k2QsKuXuphhqpsSaDMf2hedNy64X3LsSypk615pcoTkUsp4KZo3waX",
  "key43": "9cdC7T9SXX3EfF2vfHBa5BBU47TSqiEfyJaZP4xu39VPyeHEWX14N5JnbB72zFkqDNM3FefXStVoDuZwwUis2Zo",
  "key44": "5jHtDfUxcLARfZRXU1HWaws9HEWja4bLAG8ZP582dRLe8Cdde9G8zrGmWyWh2GJaFXBvXCDeqTXa411p5iBU4pBa"
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
