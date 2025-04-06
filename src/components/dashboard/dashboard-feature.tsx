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
    "5TsY26Lmbx9iyQFZbZ8KjWZ3j51sd2yPpVoCLVDgw4Dccr4rA8oxcm7LDFaFkqbXgoNoEooXAqKcnTpKk2c6VJrc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3riTiGYQZKtUPRyAVAi989BPc9JQLr7MNv7j58Ayv2uN2JTXRxYvnHBXQKQECWWf132GtrRx979vPfKYrbAMYKns",
  "key1": "2NNr74RKGHEGJ3A2zKXqXjnhkzTHJ3gy2QSUmeo3S5BCBFenW9WEFUW4NXQ6fn1713bEH6MoouAe1WGGENDqwwWW",
  "key2": "3mVevXvX1NwFv98GXQKgGG9ZUcdHqDre39oCtykwu5ru6zwpAwzUsqCnp7FAWaraGkJBdcPfs7T3JPazTH2xED5K",
  "key3": "3uvYvMFGf3VwqPUCBgDGpWD4XYPXoFftp8GCWazKUj112cUBdLSu7ktHo4qRp7Uo7MDcYub2LLVMSh4iwMH7eJtR",
  "key4": "A9xENQHt85ZYjQP7JL3HQ69SrtVuWSGhaETJ2yb7a8gu5dxwL7ZsNz79EAv6sqo2FmaEGyP9X4RD4USNMSKnfSD",
  "key5": "u9bNRG6fErcgk74fh61epsLqdKJ5BcSLfh3nySafpwsoTKfLuhRwMR89yH1CWeLzbjGKLcRpdHUZKjFMaMAzqM6",
  "key6": "H5e88suvQv6ERCcz2gDq81D9ALKTyRuGHDEMxnH7PCHpZQjXVuyTyKWZCGQvoCtv2qjbGwT1xAtNj4QfDALS9Sp",
  "key7": "2BJxWJVkUwmy9j6j3Q4Mf14ACkdAAu2J4iRKmjBHDBmMeNDdRYLgjDyv4ZJJLFVQLto5RTvzDcapB2FDTJatngGN",
  "key8": "5LHExVqTDSHMAmTakVdFmUPhJ8zdBifzjF3WAsYdSRAwFGLW7Ys6SQwBLWufiAv5VRLM2SK35GB4jDBDNrgDU8yU",
  "key9": "5Pp2S848an5j6ta3Ai8gY3XFUamLbsUBTrE3nwTpsob6vkFrpGRFoaPvwfwqbXwPFvfMQwHx62y2d5hqSowY6gU5",
  "key10": "4dnCoia79MstmMrwY6cQ4ujka6d17Uyisqw2WfCHApSYvYhD29uUhiCihKAxML1ZxFTDxiQF8KUnMxQ4oasNqqKU",
  "key11": "5mRqVPh27F5AooQftkErVGo7SdvHFf9oxMwd2ALkrSqWHNoN2v9W4Bc7YoGvfJ3tMLfQAho7nMNnuLevjaSrhVSt",
  "key12": "2kEBQW1zTVtoxSUZD6aZoeBCV7Z3ZaXJYGRGQ91kjV7EMeShTKbwSsivt74x4w2xEqZx24NgJiaPMG6nafc65bCA",
  "key13": "3YrwrXw5WTrVbsjQkSoWiHmNouvzvg9xuEDRoTo3b2WqrngzNEEgdLcCbYZyW3UPcduFLdjKvhPMDFEBi5k1yaK6",
  "key14": "51KbofR4GA3F6hc8tm8K8vDnrF2jAAB2aNRy3Xoedd7bNmQVnSEeMbejTF9UcVSzyFEATE997jCE9NTgdkctz7Qi",
  "key15": "4hPKFzeq72WvQugrFVkBkHNs6iW1AQ9x6cwRSzU8FxZn4yxYqayQqbuck9gzZYfyRbExTnaGKUbpb4RMRejNzk3k",
  "key16": "3XD4K3WPiBVTaVR2FnhqYGYJiuPsx1RFACXjNckfzuZ2ZESM5a8qKFJiFHQVdBnwyhBtCWbmkCyrVDb2qRtGtVcg",
  "key17": "2xYQbD6vWSmvgGQcirtjRCK8eCgbj62roASVkC8Kjrim4ndVxYmhrDceFGNjCEDy5j7YdNwfgPPAFnHJSMtB9FBQ",
  "key18": "367TANukpcYhU14MDWpzEMi4yHNcXztiwq45YiRMVpMHz6FiEJ2cppU6EdQxP7twsTXK5SrkVdMAfAFHDPCZX82i",
  "key19": "3GU4MiPDBeGFDFmkDoRatNgVAKaN3MugcKySRsRsPW4PZTzznVFavW5Zt2QxjY2YGzTLSwduyYbxHTbAwgxzno9C",
  "key20": "vmxTHTfi3FRm6S9rs2pyej4zBmvvL9iLMbNSJmtB5rm6LJdhPW7NLK5k7ADmMh1uw87PviNFMFg22f8Vb9Sjbcf",
  "key21": "4hc9v1UKLufTZdNV5yfZ82gC9w5mMJNC16KRJFCwAxB2BmaoGJBognDfcNwRM8UDghaUxmBc5qJc9H2uXvjRjKTw",
  "key22": "2TtTb83uvWFJNtXdwTW1qoD9jVtnEXrfq7YY3WE1v4M6GADjAnbMnK81kMLHVpsnnMPMgt67MttWpcx6kE9pTchU",
  "key23": "4R31kE4ZPyPs13ScTvKd932nubo2m7L1mDZkErrb4ZYMDKgxCxZSmSn3T2pjrUfT11TpkgGbV3qq5N6fUDKBvNYx",
  "key24": "2wxvp5SZRKUFkEWHfNDnCC7HBGYPYXHw4e2oiQf3mShhm4dMRrYDFQ1CmtFLdRfiCQgpbaMfAhAgzmzoofAQ9XBQ",
  "key25": "33kdGqWQSbnaJrknY3bHQ5fVg1xinDAmBdS8d8aGKB34Kgvng7JFzG4JgTCHaeXL7rMJmQ2nsKWm1b1iDg5LB9Xg",
  "key26": "5Tr3nAhSB2g8yVXHnDAtnCG4sqAe64LUwNa9ua9bCjQutpv95haXSuDmuW2ERmSvo3Wu9dkU7Qcr5zar4EnVohhg",
  "key27": "47hGqZyX5JDNwfjbxWxNqELk6BRwbPiENePAEo6y9jKWCbjuTNAv2UCBPDW2ozCpJQig1Et2mKS8aZ8gdJaNsZVg",
  "key28": "5tfKxUimTZEZHZS14PVYZzWYkcgT1AK39QTQkFsZ3Nci9pKFNUsCDvsc36MRBQT23csn7EFFS75MnLYhRKaztwCJ",
  "key29": "ESRwXshr6quqUX8m3sX5MisH5XbNipcjnwY8yxQBnauoBdn9xCk1v6oSHgmQ2Kk8JAWjU4EX18mvugvXcMjJGTp",
  "key30": "4NQjHqPzBZzZ9f6hTEewoHwso3nB9tLsdSR1MYFaP2odj4WAyboWjfZj8SrBazyh4PbHMRS7QAXrM9kbgooHfZaa",
  "key31": "3kLaFPJhM2xPrRRTJghGV9mzAStoLgUatkUXJdjA8SgaJhmrpNbfziwXYEEzwWg8KBSdwyVozxQSPkycs7cSiN3g",
  "key32": "5Xm1ZRnbcEDHy6if9SVLMzwrzqpeZfPfiEgkAGocPG59YYUDf8y6xBAYDSMRrjqLmt18zo4JM7991xmN4KkZPzjq",
  "key33": "65R3ZKpGv6AtaWqNYrhpsMo5RswHJNMGTGPcP8ddX6bPqDR8rPS9jj8V7ag1P2mUykLUhUTsuPy6emEmPTdcXdKY",
  "key34": "xpu43FTxpRyz5VybXQ71UR7nuBmeX8rmuSvKbmuzLYNEUmMuFxGYvUWBZHs3bRX1wqnUrbV5sGwfY76yB48RaN3",
  "key35": "4w3ksWTmvxP17cG6jNX66RbgoTuCFpEmojq3E6fsF3uE2R9To5i7KoYztRGvFbYo3YYfJEcAgnBFZdXCoopaH2Hq",
  "key36": "22saH2Jjq1zRGLHmaJQK8zQroEseEe4SebADnwQ1vwRDaMfLaVJAiB5wX1tSrteuv4ouBscayot6EF9YkbBWBiGR",
  "key37": "5q8KUAGzgxAVNBaQ6HtM5VWLTS1Le4oCz2NPWiGa2UVTCdGpS5pugWbWgL64djsS4b6fZmcjCZrvRsDFrXR7jAUz",
  "key38": "3rYWVW1LgZc7Sw6dTct9Amqnwrd1ZzViLCuSHHkA41gUz3kWk9nquHrDhunDbhmBvg6GGYH1pkQuBRQKY27F23rm",
  "key39": "3ZsWDPuYo5PJmtx8BrA4bYBoHUp3tsJ9knaUDsEr8FivWcADtcLcrTRFepPmYu8pmMh34M1DekyBWtomY8Uf9cC6",
  "key40": "5u4MXnyWrej9fi8F8gF5ydkFdsEvM4we5d6jA1LSQtaeC5svCRfQdUCRdqXTYcSGLniakxQ5dLYKyYKrxy5yxhW8",
  "key41": "AH5k4Bm5RYsfiNtHcETiFtFoacJvS29j9VA9ZcWWWixzM2sERLmvLtAWnVpbFvqTQa5cDZ3CyCdKnw5sQcsWaCr",
  "key42": "GbkELnYF9GQ3FU6LWLPU5q3Rv46Kdks2iFxHAmqeomDyvuYQFTz5w2AckwwjExAm85MJKAi95TW58oqxeCSP95p",
  "key43": "38aVXRNznQHnphrWEe25kvjWKYfZ3FFTGwUx9PNS4waidti3NQzmfUxE45HAMx3vkRPFehZEmUdu9TNvC3ikecBS"
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
