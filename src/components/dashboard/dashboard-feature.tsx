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
    "3oxWdt8LW3JJ9xqoyCneg79Gjs2ejSVivona5F5vbjWdRXmmvB5iEsVfXeYhb2ByLNu285baUmqj6ZzUStDvq61Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7RRXBA9cVzc7ANp9Rco2gytETTYkmYoFu389DfyofhskjZYNPrjvAsathiSV3h47ykJTrT9bYbiLf12vijVzHtY",
  "key1": "u4PhmKhjBiFQfDw7SKRpzmWgH2Mki1kSQffd8BkBKYuoxWqfUmw5hQLtMYBM9bJTRZV5tMRpMpdUnpA39Z69Ad5",
  "key2": "hkKSMKw8mqQmhoJzS6Quvr8v1hxg79vRp92dBgsLCuQnecHyv9J7oZKPJKJutFJHqgmDhncuW86c81uoaN8W2Mz",
  "key3": "Ej4NUscshG22ft4Ew8wZTB3jDCpcb28LdzeoEbrjUmSVZxzpnRKmGGRD49J32aQK7iBpFHssSBAtEzDYKv19UHq",
  "key4": "4SnP7bqiibMvf5xRetLbot2rwQZLQt6BZmegsXG4D29Y2QJQHMoakzXugcqc93zgX1FcoirLtqXwgFAZMbSYqvcm",
  "key5": "5fvAMEuknPZg28HXSyiiwwVUQ8zLZWy3SrshRXg43wodVPnEMykdUKjajT5xQvPGHYK2BV67VUpzL6mFomobNrSQ",
  "key6": "3C9sWqAbX9XtkFEEiHgU7YuV7sTVwPrZUfsFFRHeq1rc8vWzW311jkVrZvskCP3BaCHiFixYL1BKBF34fLAn2yHy",
  "key7": "qq5ooMsjuq5x77JscA1mtmVCC8ykECaPCWTTnsMsThbkiDqPaWKmxnS3M3VQCFA5ckEReyBa8BLgDrYt7hYFCi5",
  "key8": "4ZmR2z3DAiVso1U38rLBT4pcngcik4sLLLXAYyjHHT8dF9NBkXBq41KPbhzYBrM6hsZtjdnTqNGi9nUchkUGuDLK",
  "key9": "2Ly1MRcjTffBqG7zT4kQh1Pzn51ycHb1WHGEvtG6n3KDMyWq55ghj6QUh8fxd6BKfR7bc1AMFNpcmCToNKN5xxJy",
  "key10": "pvxna5AjwDEKgiTnBTnBrqzBYVgJAHYziEuyPM9JtBR2JkGr9gr4ZSLg9p5UAcFiuo4FdHEbvCTqKwNuAGULFyJ",
  "key11": "2Emrc7pBhm2TnLz8Hdrb4aqYBJcHt3r9okrYSSRAJR86Tsb6bhMjNhsefUBpkzpEgYUHsn6DGqy6SBdw9kCUZuwb",
  "key12": "2wydzrEurKsyEFB2fJVCNaRvL4ZYCbBpa7tgWLT2NE79EVTTQ7AX5PeavqFJbBqL4B1L5FkVqffJaYmUWMWps6fX",
  "key13": "7KGvZwHLEPUTeLYcD2AYrcjQSbJ1ukfWnxkkhQgzVp2M5kUkN85VzbYw1AX8XVB4xqTHQUV8rdkdvkZLhCff3gn",
  "key14": "4zpJv8jUhxcwbQ89LayTfP2YuGkZHX4MjkeytbKv7jsQPpEqfCwVLieEsWUuE9mHTvKrrCXMkXDxEe3QhGjPRGnH",
  "key15": "4VBsyc82BnWkH5MhHDuqxWMpyYdeU1QYXKj57L3uBbyzdZfiXQfYpDxNcGDp7xgoRjZHk5iFztha3PwBAaQTYRQk",
  "key16": "t182qHJHZnpWvfxDFMLpyMskTvzH2tEjb89JGn46ozQ49cGpsfNn1fgyBzvwpfdBqMuPvzVvF4u5aZE6bERURWB",
  "key17": "2VD4E4fvJpwY9wVVgc78vndvw6xJE1rzLCSQYc3SfVwuqXc4Swwq1F7jpSRwcD4E7qNKXqWo3XeXBPvNfQefTxZ",
  "key18": "Qc4ZQ3g6TyJggRgLYqnW8m2kbR8ZPhwe6R9Ajetbjz5LR5fxgvYaKGfD5vWSZu21Zaf8HofSKREthHTJL5sr8y5",
  "key19": "46eSWjpMqJJjSGmYwA5T4L8JPwJArhHtQF2YrvhGzd6s65Dt6FCRAnXBngbfAscXfAXnqpxwiEfCYMgKQZhUnPuh",
  "key20": "3XWURaRucFR1kPahikFf2tUc8mSt2aXhXFN8oJd87nLYH6govHppMahsnv2pLDB5zRu9fqb7Vbag8s5oafEG43Qo",
  "key21": "2An8cVs2aC7bET7kpCcjGvhe939nL1opxwhuf7iCYZUxWj2dDRciGgmKvaW6DVZGLGPzmC1Akqrzw9xnzDH5T94e",
  "key22": "41gm6AWxPhLDXm1fPUn85zM9aSariusXw35carvB1LcdJySHAHTG2CeqG9HxaQRsX6S4LJL1EqSgkebKaLJgWaeQ",
  "key23": "d5iadNCgeAA3N1uoqS3QaSmNVm7hogzc6AAPe3bM9vdw6qMXiWqBspLsifihNAV2EdC65nTBVeU5yTVJHHXG4gJ",
  "key24": "7KMHxiVvp9KRPCxosv71YqEVG8DoQJ8jMWohjjQxQeheY6ahWab3x2V2DowfTpg13oPb35WpPxFUSbdEXPQLrdG",
  "key25": "4uNN3Vu3L3vqYZzZAtpub4cLcgTHuLBNvs1m5nAWLECFnKDw8iUZBi1M38yftVUFZPdYYpYitwSNaEeYZ54GqVjP",
  "key26": "2LvHBwyppV5mrEtkenzEawe8fncwqtdjng4BBqqB6mfmXgHry75vF95kFURnSRZTpMcBDfNe5s3PXRSZge1GyetG",
  "key27": "4kfq1udpDKbegB7Qv9xEWy45y8aCc8sy3Yvu7tnYyoiJEwGfYSGXNktJYsVgMpiAqDrqW2QFnG3YCbHpnRCPwDs1",
  "key28": "3kPKEtKAWtUmFidsMonzZBUCJvc7TpbV96ySxtpkMRiaUCN2ChXSRGedaxhPSKZxrMqnDaZh18pLHw5K7TVAmfc3",
  "key29": "5a4v9f4WURzgZSWt7qrcDVah9EVgHQArF2TTCPcaSq5CjW5JsmoNNcb82Djxz1qryceKrZFBeM6hsjjMWYhn1Ygj",
  "key30": "28g5EcrVmf9mV9wLpPieBNNvCG9hPG9yNxVzcXuc3aN8xgzWk7PkrPfaLcsim8wUaMaEg71X2zFna68xgDbpMo2T",
  "key31": "4wT6vx2YG1UqnEzaCfbsfKk2PZSbXjv2iMo586Ef2MVtyNSWRXCNZ34kAedwkh68fpmbKoBPe6w38wWnZHkDwk6g",
  "key32": "2bqojB2zGYNDmij6HcYZ4AVzGH7Vb25vyoZqMDWydJ8kGrPUxhqL3tjf59fgAwYZig146Hq7Z1KUJajMFyrUVMbb",
  "key33": "Qx8qkeZ3yoiHRQxQsGyBZ9J2dp2qFBbepevzFxsgYVWrPAT3KDqdH5dYM2y4e2bjJT1vsas9biTRMZxWZWm63Hh",
  "key34": "5N2qLN4N1v6afFVEcFBdWR8GTBcA5smG4ffsW6fUYQNuzvvZHaFk4Tb8p9Lzq84Mt1nLxJ1X1WG4ffQPcgLfNH5F",
  "key35": "5HptXzqRzensvUe5HYC2u2Y7Xv1T1yuu1RdrTYAURvAHEndEBYUS7Nnp2q9yYL8WSxs8GdnJCRomTuVce41d3m9T",
  "key36": "2hngurM1E7yDdEtF7cxbgWvCp9ui3hnqdqh5Ab9o9jE7HY2fXYYg9yU7oyJ5tPAnrkQYgzuvNwr4GTbYoFDvwdsM",
  "key37": "5Pg1nkVoCTmFGn6P83G5YKhiQ87ZGXGTr9qaw3VQc4k3VYJhSbiWEzhM1PzG97PbmkV1YcQ8QUevPCnjUT7ZDmch",
  "key38": "2KTJdbJ9Kuecb2XrRqWW3akMs9YbUFntoA4FH8cadYqJpsZJxWdxGptxyzbxmEG6Yvgg7BEpH4NHimCWtxxS2YxE"
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
