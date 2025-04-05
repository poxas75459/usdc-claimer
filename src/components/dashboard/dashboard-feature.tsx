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
    "471L72TqgUMYDSBZaLR5KdJgndhnVBXZ6HeNaSQ6AraKukHq1GzPfei1HiTxwLjat9mjqgs7jgheJFrNS3ub6WFx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VCJ4JPjoqexN8Lba1RcmKrAXjqGDwzMRQU3L6UydDvAsSTqiAo3NbzQkCG1e2UcHrLPCLpj5SaGugnHUEzcUX33",
  "key1": "3aYNkKdazAo4nExLYLkkb7nLdjMTEtcMNA9beTii1t5Yi83ExpecD7UGXmCm7Z1Mas7NoovSzpDwhJ2qrKE8ereN",
  "key2": "3GQdGaHzzdBxnnUBiiWmrshLyRfB9WgwJhDad87cczyhNG7A896FyyRw3LLyJnfN1VTN8YQ9P2SE5R9yzohqqqzr",
  "key3": "5Stj4ggkKAk6wV2vbDFzPy4h3US5WYZhAcxbThxMwJZVUQW4Wyx4Sb5nQA68HZ7eCgNxEPxtjqFFJcvewLMmmsGc",
  "key4": "2A9Kph9yD4mWiHb3kLPEZaV3w4t1iMvDdS4toCdG8weytUcdJE1NosXi21jRddUenyr5AUBhnKcRAU2wwprmy2UD",
  "key5": "5WQywu8JvB9mkCcCdy4dcLG4KQPHKVbnzEFahvKW5eQ5cYnc1NjXwLXbThqw1SmBcJ6NBVB4LiDR9GrcN4inXVgi",
  "key6": "4ZitZxANjHukwFpZJA4oao7mGCELLHgWPyCSHWSqCyT6W8UYjZ8JmAt1cf4HYQ1kWAEurjP6h3joYroNmrUpddkF",
  "key7": "ets9ua5y8KYRVnRsHZdURCPnbJd2JRmwdBTrp1MGWy1wfuPuXqcQGfjo9rD5r4WUahosThD2gcaXfL4C6oZsv1C",
  "key8": "2uD8QCdvcxVEy8RUNBiLGmM9A4YPuXLYTWb7be8VUvrgXafp6uduvTr3ajGVeJCjR7z1MNRXtCezYbpmJGFVuBwZ",
  "key9": "HiTRehuteKXM97Hv3wHc9AkQMHa9YF9tC5zwvfubJCYSpcWrwzFMm15xHerNsrTrWr1T1bgNFWBjnShXpZqT6zL",
  "key10": "3sc5vSiqchco7FDctyNThn4BTxp41V2rYRCiWi2sFhTXkrM5vRYi21dVPqTvKKQLMPqj6KLHrRCwGZGGqShvDd4n",
  "key11": "5QxAG6QFFXsnLn8F7ToShzmCoY1iHDq5YaKrhNaVAR8L6iwYyCmkHTsuLiHh4n83iU9xpZ9iSoo58ERx2QdFdzwo",
  "key12": "H1npXfx1SBD2uy7r9znLFXCSs6jwsYESUWrsWZBsbrVxYgT29iLiEv9vWvfcEGbrLYbd7FK2Sn9v6hBtnu8WWFT",
  "key13": "5K6GiTmSLnQj4zHvxjCbdfg5HgfsqADDPM43eH1MAUe6c8CALhksfvTguM6CSorTo4rwSH2zEJgyniZGRefwwEWP",
  "key14": "nV9BJCzQXGtHhHnkaM5yrF6TRF3BViRUJS3EXMw772xXDux7tSoVGefYY3dzcvdaCAz6j9qYmtEfDm7kXzFHJst",
  "key15": "5z1QL7sH5t7Yb2urnHYfo66GTa2DnU1TKmMuN55c3WNLe48igFfTLze21axHiVBBpnxvRgMaN2woRdodxUSfb5vs",
  "key16": "42KfbeR7reRjRxWx31RUuiEp5jM99xd8U2pyRRBuG4EFtZW79quDvosL3T35jyGvVHK21uhqe1UccoDQLsdd8EPe",
  "key17": "t3fAT7Bok4JHL3CPHmQ3rby7dxZPMxuCWFZMcoNgESc5oAoU2Wb7Y8aEPEkzTMXwMm9a2uSpAjw12hTLiak8KTP",
  "key18": "3jZw5PL1whVCSDhTziGDZqty6VThj7xiUqkFY5mxZZVoWHoevN83uY4YXVW9BSs73UJSssTvDvWdNCnpQiYWfFiU",
  "key19": "3yaf1SH7qmoPsbbSmTBfq8AeJEwLkUqn3Lwj6bV4XaGhhTXYHNkJzB7ZfPuoR43x9Hj5xQDbWwBaDVB46X1MXmg3",
  "key20": "2ejGBYJnQMJ5Vousc5AoyAHtr5pTtn8ejVgbNsPaWKxJaEyh1DKnYehLzFzg47HoD7BUpJ3v2K4jVGZGpbnCWyhW",
  "key21": "5f9GeHd8uz2jQ1yVpHXg3j4MFHMjoEVb71n5EHa7h2FnxAR6EzSKHMEaYQdimPPVzzWZgYdXBBXyddKXkcbD5Uyz",
  "key22": "VgYSpGp27jTLsyVoDsb33kKLTy7whbfunjEA3ieNBycj2SismZ64f7BbSCjwaFwSsu1GRSeMvCHsVhc3BSZHoQi",
  "key23": "479tJhxT4xiiA7C4ejRaJLVE9ESbKtTAowFTsjPBiXbaonMPmpTX9iZ5A8axjecTEmkT6BoVoEvTB8CS5WqeqA3P",
  "key24": "3kA2aKt4bAkHoLmbJo7RWeS5krUHvFRbnoErNDmD5kFZKWhLaV2btgDFN6sYQKeEfoXZvxRXFu5PNpdNmiaEnP7Y",
  "key25": "2zW65FxWbrrrUCEWaV8MsJCdtG5mFVvb4scG9udmULnFtJXJsUnrELEFBR9X8zTtqEins7XEWAzK76BcBgrzWsYw",
  "key26": "2VM6KLq9Si32QGMyBawE3geffN178DHFh5eB7r5K32tVDAjtFFUQB3QT5DqB7XxwdF4XZAgrRjYjMG568LQ1ureQ",
  "key27": "3MK8KbEHiA4eqmYsaTebJLX1s9PS9oZdxeVZVWBg6wcFwA1brtbNCvWivSX2FkuisfjDFr73DBfkg2HoweCtjiiD",
  "key28": "578FRgHGpAZmAe9uaqbqgVmPqk4RxV9noCweNuHeP4Upc7mxTHqoX8GiJ5Tm5mhrxx1nmFPznkZwDCtdw9YccZZF",
  "key29": "2hv6hwqECzQKkpSq1W5M7FoVNPKPcwsQ93ocWMr5xGBztfWQs1A3dSQVU5nqs1sNo8FNQk5iNvd5Ap21Z8uAniNX",
  "key30": "2LxGhkTYFkuKbJMx4Cf1Ei5kntoDpkYRyLG7wPqnoGS44xDGdL6G3rez1VxoegwpYWA4srhkadaLAuEHu62DDL33",
  "key31": "33nAsK7mP9TEU635oPggy3r5vq7kjqygeRNBjd2v1Jq8Z4qMGePrm18xiJDRkxt4yQV3K8sXDsiTBBoYomHc9A5a",
  "key32": "4U1fQraojvTBsa2dgKvEFHkSRCSgQJwVBfY8ZcsiGkVwTctU1Jm7dU1RmuvLhmPtpKaKgdvC2TfbMTygALPF5kXT",
  "key33": "s46HeT5QThon8UBFEWQN47VeU6H6BuAngU2oZndJSBjYn5C6iVFMKzuQoaUc2M9yDAFQZAbCmandgvpRD651buo",
  "key34": "4WbDu6Uc8xXE2frK8KFfVmiQpEH6ANpDwBsA5MNjxiFSjayAo9mXjpwrgGe9ndHSNVMvXruZBJcqvgLAwLgcTk5U",
  "key35": "5BYQo6KPhqKybZqq6u2JaYwxmQf21dtXx7izRsYqZwwMUovTRcuA1n4bX2aYMPAP6ybbFcn5WV1hQjTiuhmmBZ5P",
  "key36": "4jhtLd1mXMBuaEndJ8jJDWD57Fz8MVq4AfpNqB3TPDH4KJ6P7MdCYRrCki6Umq4isqaa9WaRZvB9cQBqGbP8HHMD",
  "key37": "2XHhH1bkG8Sxcpv2qsdWQnb16cZB8otjXqhHcGcyVBpbb8tBK6xgKcM1diBwv7gQVvvKVDY55XabUMhD8ZjCFfgh"
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
