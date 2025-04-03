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
    "45jX7TGED6t3stqXdQnqRYHBosaqC5DeMW4r51cMu4zCihKa3pUgn4cKzBu1Vp2L7pGqKa2AG1sAZLKWRxvLnuNa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Bzz5ykEAwR6eez4jUqPAp8hLSq1qUWqY6Ct5QagGskajCi1c3PGbNkeR29FMsN1LF2CB8ZMsd7PgMSy37BBAAe4",
  "key1": "31jKvwAnjcQRLovG5X5p6dAghZV7Ae7tNcwtzJrBbeYCCR7gugTeHFyDeLnfbNaDWx3J85YrU2fsECXVxTV2qm6k",
  "key2": "HGpBCYaDuCsjnrHFF2nYwSKVN6HNcU8C2LqCn6vt3S76kb71iR8Bkncvp4nbasBF1S2j2SZTF5SrYQtc5RfYGoJ",
  "key3": "CBcFPZMFJDV8tXNoRDRfR6tVGFXrmLsnix8xqKDuyWRng9VU2QQkyBfBoZxgSe1mth23TW7Ne13haTTnVvyfRBk",
  "key4": "2xs6cFmwJNVdE9wiP8KojXXhsfPWuez96esLatchj9dyvCfs728PKaS3bRRTHFu6rzihMraTSPNAKF7Vd1eGdddv",
  "key5": "32hkNqXad8MAUThVkyv2oXTApoEbHrZNmSQPj4yvsGn4Fm1fiy5FW4VjvgNjLZzmFL4v2uj3TWUyDhjpZ41fPiy1",
  "key6": "sDyd2UBvmoU3hZrUf5kE43V9ZZtAFcbnFgHJhxtJTpa5aZrYvRapvHw62nnez97XMz5m3SL6z6ZtpCS7R7Mz5DH",
  "key7": "DH6pT3LvEPKj24xwZ5wYKCTL2aoiPncsQyUD5w8muaUDqAM1Lqdd4ow9p1uodbhpmcnqAqp8t7qqevfQPqKqiz9",
  "key8": "4e6BpNtFwXNWStZsRJSmNtLyc8DtwqscbqTPsN9FL4dprYfHgw65JGW9AkVBXhD9VWrjHB1z7KamxdqdNHUvPcoW",
  "key9": "4PgCiQzuQc35gozibH1N4FHqc1a7ihKX6SpM5QdU5hXu1An2rj8aa3kfD739vpyaDwWzvMSXzoVbUmnGbwGb7A5p",
  "key10": "V7LNoHZu3ZhkChuAYFFWAW4Qr6dXDuY6QCrfokShZypvfesSXhdFbBSXX6gwnW4urMKGCGsKhgWVhMuxMDgZ4Ht",
  "key11": "2QEB9ihApGSRx952SmF5CiKaX6j3bufUW9jycJGU4fGPvaX8RLs96h1wqt3wmWPCeRPMN1z9wqGeXZuK9wJFw71e",
  "key12": "2aHyLgmFY2tYzmtKAzJUzBqq29k932GvSjxkdjN2hnYPeX7fwJ3DKgumxQ3R9RsGj1mw4KJVBeGVdBCXjkxVzmF8",
  "key13": "3KaA6G8kQcW3221qs779HRr4cjxn5D4qzt94jY8FigC3fqruqEa3kkcCqthuQeyDffRrtLLdKPzGBfuw41eg7dYU",
  "key14": "2MVbtpA1TT4FK2umtDTEnwr7NF8qN1AuwpV4yncFuZbwJcp4hbdmYTWx11shYvNE4nAAJcJYj5zXdjcsfEat66WS",
  "key15": "2ZSFLjy1pvnWHBL9HLhuAvVJHYUjmfABZ1wVdPuyJrxHP95xWSrczouraRdwFhWpbJmcgyUduwVFuxmc8dUfDNZF",
  "key16": "3PovCmZsXSrttNbNY98vgxKZ9vxUccnTmV9ihisWkRHzu3iD9VcSFktH2LymGnFxzLgqX37J5K4YA7GycdHZFo1a",
  "key17": "Aqtv2FBFffjXjeFMA93FWmYXHXwBzt4K1v1i5JHRrrQKoDwks1KkxkgoiFk98EXTQEf8gwEmrod8WBoV3CHCmaG",
  "key18": "5jUanZfE3hMCQCLaKDuqA8weHN8vhb83bbDTs1EPZZENLQf4zoQsyXK9q4EvLvv4uJtTv2MrExHCmCRm8tVwNdt1",
  "key19": "4P948hhSySo2XQ2KcDznU3278fMSjCzNtuu7GBX8HmUcRvGT3oZ42DLvDBkVNe6GzSuRQbrvpTqSJLbnbVkCGv8u",
  "key20": "51nHf1j5jaBFqUYGQPAuAsLdqBDq6FM1ZSeb3MXCo26JPP4A9SjGW3FnnMaXZJXokoXja7RETXnpGGJLKqmNr3Rr",
  "key21": "BUr9oeQwt6nvyqmMqRhdynu2ekzUVihfYYFfHPset3XxQrcYRWXrKjfYptB5h6tw5RV41dShsPiZdYvNEcZ6S1D",
  "key22": "2QfMnv2vaQxkBFiESAPV86K4xapcoow8YKRe6rdvgCtnnFUap7vmFujhkdPbj6vPpsUvBCJte9BL9dPfLwM2opQH",
  "key23": "2W569HLfx6ffd9pDyhgdfL1AuoHWMukRUYaWABDR17h4bDvowjHbWBtsb2FfthWDdJtpnBREtYzXNAZQLd2LC98d",
  "key24": "4wnTcxUwKA6E6XsiBwqV5BCXewpSizYwLwv34ZUng4ghjGo2MhWXupt6QJPM9CR4ssVEsvKJXYoFqEHXrLJEMrpn",
  "key25": "4wGNKLpUzxF5WVYu8ifgVYxMEc3pEe58jCwohm5sTpPthyHMkEX1aMZmLhW8x4kxUW2PmPnZgs8yc94vB9GwwPC1",
  "key26": "2Hrhzy6rumZEWGiTTbkYUinQhyRbXMmz6DA5gjnPVEweoAyJURXKVDfG9ocJuUecf3cswsc8KVJeoZ6KGW6zPtm4",
  "key27": "5FvUi64uNgq1YCkGyYJmaDD6i6TZtkv8AGWoxe2ngRgskis4gixW93FVd1WrhYcyidGc59yNhfnN8UChWrFwVNsC",
  "key28": "29JvqtVXUqzh7ybe99K3HKNDB9rRkPE9ACLCgrpQ1mFgqXrBuxsEDedhSBSpuFPuYmKhsRStHsn7osVqU7AjJtfw",
  "key29": "4w1U6Hq6e5XAXMBMX363Qb2dM8XrHejY1FwMmbCxaDQ4Rhd6NjMDQVD7cTSD3CX8jgfBdw3cpTLmTU5N8iVNZxEa",
  "key30": "4yWRmHUg3cGRhqfGF6Q6twFT4WqhftMdwpHyD6uy5NyTnCic3qnA3rCURwbYqDk2soPqVrXX4Y1tHRMW7S6wyLtK",
  "key31": "4Hhy69K1RRxLHBc9ZpM6csCZ5X5hxpmQhBkEs9qSnxzvQgKKFPffX4TAva8CpNBuMw1vdrALKh7R5mFhbgXUoXb7",
  "key32": "3ZgwxBRM1QbmHEiSxUEoWq3ypSVMMycFNPvCbACgHmTH5NScrpKYdf7bsRPN2KU5aZrRQm5Yjdn8PLBYoJsGQkaS",
  "key33": "4DnF8pWJmvUEkdajuh2VSwQCaW2AjqXAgNSVDJ7JfASx6ag7rtBaZ8gtcaVEAqEgR9uB1MNkpYv6fYTwZV23VZGm",
  "key34": "Tmw4UPL5ihcGMa8xgf9FoQaM6hYnz2NZCbZ4p2XswnkvteuGrXL94U2K49Q8D9XGArtqqPShppJhmLG7aF6m34Y",
  "key35": "32pqRNhtctmpLA2xRXS39vtKch7PRTBruj2cqQTNUbNoaMMLS654KNFP147TKHLTVdP6CknakgguyMnoDEvTwYvm",
  "key36": "51ajHWiJh1R7Pjvc4FyGZwhByoHH1e73XRkzLkeUTQtoxdAmCoWQ1w87Xr7AtoCqW4aJRq6JnMEP42geuucMHyPb",
  "key37": "5tqFZz8Rjg5iqTnSvKf7X6eq8fxput7dQ89h9hg9PgWtJTtmJb883KB72gjtwadm2EKuv3smLBEypYgg4tRwbnMB",
  "key38": "3s3A1sDaytgbKr1yyPkyzwA8Sm26Ps33AstsB4s1rwsPCFJkHa2BQewbPpVWDLzwXAFqjvEg1H6avxj5FrWzK6wR",
  "key39": "464ioEPh3E7SjzzZ9NTzHby8G1TFamu8p2ASFZtR2WsWUm73a3UpbUAiiwU98m8tUeb36mGp3Jg6DXmsucfMooBJ",
  "key40": "4wxW41ZvTKDTibScP4kyQ6y3PpLZjviGsua53u8vkirVfbbV3PyEr6YwDLHyzVGFmgTt564z7tk9ek7xH1S49BL2",
  "key41": "2siwu74uBE8A2Gd1E6N9mjt9occpY7QRmT1vU9JmaZ3ccaTevkLNvSoLuvdfF8pya9JePoJPBnTCDtMq4Hi24PJQ",
  "key42": "5CUfq3piGFXJu3XDyr94ZjozFg8CjnqGfdttf1kh3vKTdT7wG5EsyyavyRc3Rcy1M29UNjyxGLZ9DBm12FyWN8UK",
  "key43": "5VWRWuYHF7XCcscWuENb95oXvt3Zfa5jdSUbPEhhXawLrLF8T5Vb1kkkYw1hEGer6eKGeBKmsHAPi4nRpL4nQtRL",
  "key44": "2i9kyGUET9AoAo5ZH9GkU6MsvpbyoZnJ3zvUtCfg27yBscX3n9HeKQrpFiL5n8jgpgupty8BBRXY1yqmncBUrHTq",
  "key45": "5NP1nCWCoi9u6b5P9trnPZgnnQGai3msRVP48QJx9LWMp3UHKdPr4Fj1thcbGsCNbkpa3BjCdFLeskcrf16vnDM8",
  "key46": "axznep6rs2auXJSPvXobzA3BrPsNHoHP6fmmGHF8mkLvrMirtGg7ELCXCcCmbJixQZaRDWsJGMmf5aQ4nKKGjzw",
  "key47": "2sY7raW8ZjgK527puQz4tpax2wgnXyThbRmN2ugmpS2orih7kS1svmbuBwPHBXiSoxq5nJUEux1Na5a9Vv5Usos"
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
