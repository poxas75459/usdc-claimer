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
    "4wttXQAX4YrZDZNnEvf1f4jsqdQLWoLehFZHJYPiKnNRsoiacJ262MSQSVYLCzqpEic9CsjNAeSE5KAFuJXLGbEW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GRQ6Pxk8waNf5BEfvq5ziP8WAnycwzJ94UzmA6kfN3NCcBsRdMZsyQ9QMXbvM3Q9boWYrNfv7DQ3NtfZXCSRi1p",
  "key1": "deAo3Ppb9vYSawh9zjPwWn2ZwPxhxPhCgEAx8yH9C5Bxpfbs2iivGAyuFrtsVe4FrQC1LJ7WdAX31msv32RRYGE",
  "key2": "HUeDaqdijgg6Dj4dhQZNzVBYmwKndkmQwVgkQ63neLUQsZRZ6KFsrPCGotywNupY4J8efvdj7JqVD5GmMvkV91e",
  "key3": "4UXMzy7BLikQ2SxnPhGJyovQkiTpJGhdz1ZFe5UehRXw8F2BSdVsxsaff1mKsoi5AykhFQpqRRZnjJzLA9556LUF",
  "key4": "5VKodvZo9FfNBctFFiERXXx4auLaPvyW434FfeXQHS69UaCoVvuQFiSfF1n5y4dXmeN17aZDMsbbe3wMQ5oaDwwb",
  "key5": "23gzjeYLw6e57NfCRvrtzqYBQRD8fGL3aarrt6vW45i1P3f7E89oRCDKUJ8cRTHuxkQc8ougUZ9aPfrDVu2rjyrA",
  "key6": "4o4sw9yiij6FtyC7t4Yg7LPD95Jdchd85EyMQV2kBxnV9UuHLqjPSMywKcWPsWcxfGVxMUh3iVP2bKZk4kH13eKS",
  "key7": "5ZBPzHGTdBqWhLAgTs15Tcexeuwprqr7f2B9uqQf1AnmXwwcEdkw77kpzGEP5S2ySdarVKVA37XcpGY3zp1fT2Dr",
  "key8": "3TvTGDVpryZ7Qxq6a3keNkShxkUrC3dEaCWQDF1ejgGEvkhDKxfmAj87pMe5iy2e8nqxF3P3EvwjByqfRrMZkfMe",
  "key9": "2yjDtjEtgCMLBCikJLjaXZgc7z66GfESTcgsURVy2B2xqATuNJ3H7DaTy7kKMn4uawXZWF8BYQkRF23vHtsLADaA",
  "key10": "dtj77RBZADhceiPFh1qdFfhRH59bNEPVdvaWzoVnqzQwqghAH15ykKBosjKd4dwB9a3rAE8BV2DroFpmhKNqV4u",
  "key11": "4eTrNQFQisEPzDbm7q1Q5Sa9uq53KvPVh872Z3s1P9i1mh8Bv9g3aRegvNPWyNZ7nSJu9ipwvEGkyUyq6dtL4zYo",
  "key12": "Xpiwb4Mg3Xds3opYZyML7Wix16oav8ajPdmtFZWKqsqcCasd8fQv2jiNZZnPmjRB2kpvVncHAyPWR35zPsb5vEz",
  "key13": "93zbLCxhEgLCvudwBbT9nMaotrYsFrKBC3P2EKo4ySp7nnQmKvrUiWQ6BmDT2GX4CUhj3vsYWcxmC643LAKp1v4",
  "key14": "3LHBL9sd3zPpyfdfQLaxbNnYZMeufPc4TcnnAhAbqT3sL62enyDo2gQcnQshkUUnPcggnACiMJBWBB9uZns2Tq4P",
  "key15": "Wxrp4x2XQ2GGW49Ro4wEyUHSGJGzZqMTLaR1T5oTvygJoSoih4wFJn5mdNueZHReJRRi13mR6aqDgbn6Kx1Pyuy",
  "key16": "41gSAH9MYVHdTBKU1TV7E2nh91GRjNEmHL8aFPChNKVn9X8q88d6acuwBmLYzJa71Bnjay1pwnmAsJsTWaCfzvXe",
  "key17": "JGn8bYRNBEpycmSsLmRWgfVayqGiFw5CwAmEwX9pzfaWwkhfYTwoA1t3GZg8UAKqakJbKVfr3HSVLmosuzKTDBc",
  "key18": "3vLExjCgzG5SgGFF8AhUTAq6msFYgEuXuDyYjMYVGW4F2Mx5VJJVgBwzSKcRx5HhdYZcePvpwnVM49CUphM4VSgM",
  "key19": "T2865tcPFFwQrcPY22foH3S5vjeWsSv8cW9BpLeCbxFcEZprpdNixVyRp5kWbQfTxF9qpDCPvkDgC8u8wzsMd3q",
  "key20": "4h4bwNz47TrFfzi1uax1XB9EBfx8C1duXmNtS46D7AxovtGA5n8fwK9yyRzgztsU7KbZCRgJJ43gcUiVfpNMudUN",
  "key21": "pRD3egBvgUKXN3hotXnPuxhtbJ67G8FqqeAGvrgkNcMRnt4vHihWcjGoKatMaDMpuTLkUry2kFLsFcGtbe5w69E",
  "key22": "2HUnCJHrtMmobFpznqqaVNKBZS7xKo3x1HY1bD1jiCir7gPHPMLD1wia6mEbTTQWbDf81kaxGdJdN5hGxtLhbwRX",
  "key23": "57nBK7A6Kci5A1m1Tg2VrpREekSyQbXXAP7cgToLsrESLuPanha5BaKzzrGSv7jCrTWKPT8wRdJAjYAXvGt24aDJ",
  "key24": "L4ZhgaWSmqMZpGoE3RJDKcwzehUSMeCsuRxXWZpVF9KVLoYuPYQs2EuYRgVQYfpFyh459uH9PpsHCfEVKQrCSXB",
  "key25": "5xBoSFy9VdDFtArAh9sPuyLFhSS2oViyxuyXtnXy9dhMFVJTGDcWp38XcASTngSqQicEePA2fpXP2TV7pyh6s26W",
  "key26": "3c3FQn6BLeACY9evz9fodR4S1zqdvVM19UUyen7jkss3hvLB9v1jGJoNXqto8f1avMUZwDFou7Gv4eMX21iL16C8",
  "key27": "2xut2Pqe3iTDfMQfGY5a7VuJMLLATUcZXYUTdmutwbnf8q3rRpdL7ZULeTDa6sdxXUeiDyi3rJZW5PHyUo6h4VyH",
  "key28": "AEKhz9P3zH5yM1WvoGkpv3pcCqGLdGc8pkegy5x4mZXRaqQNbGjLELhmsQ8MjatX7HgDAAByxuivwsaF4BtNaYf",
  "key29": "5LkKjRtWKM9gpiTRnCkjnbn7Ut7cC19nXkovv3VthaqhndJFZ4cTjzPQKwWpt1VQJSqtvmfMJw5kRuKZWncCMRw5",
  "key30": "5AEjSc5Mhb93t1Sm7qNC1skXGEHPJEu9GQW9zvjsXixy25C3GwDYfzuwHVDMbS3LnxGYXPWKLkeGBLJUWRvYqh2d",
  "key31": "5YiTgk1xRjyD94UTud6GGTDWbw2EVATWeZt3SHPizaHRxZFtf9fWFqdJ2AAb4jxUV8RMtXKBQbq5CNLZYjGrQnBF",
  "key32": "4c1q6uSLZG4yw8uRe61vr15J4xcxLjirk7jKYcFxKe1KnjUcPMHfJGa2Wtdym52QYWostf3A4eTgBrJAhhX1KxLM",
  "key33": "AqCV11tG9WnjtfpMwrq2GcQL9HB7otbenqjSrnGt3Nru5BHrXF2UhNCLAXWj8LCdHGexE8zm6kNbToofc3B66kV",
  "key34": "2WkCzCXmLRSRaniXJegjQv8cSabMA1cjSkrcq3Hr3eGZ9NGwvCESgqaq3LaRe3mEfcsQYP1pt23qQuzJFcqapBU7",
  "key35": "3VpR6dcDZktkNFzWyxjfuj2VkCaLpJw4yEewtKbeAgNe3xWL62YCVAhLHAKyiuRMAcFDDDyr3hG6ghbYTZ3E5Nmj",
  "key36": "3MoRAE6dj4aCWUCGrAgdNBvNwuY4AvRKtDFn1BMAbDq6HcCyVd9SNvadK9REEmdaBbm2WonwAcjo3AdDQCUnMHq4",
  "key37": "4mduBAej9ArnuiaECLfs1xK3pJiLmb6iYSRQCkDHnZwruhm4geHiTHLb8yXHt4aN99dr84J2VgWwEHDUq56bUmDf",
  "key38": "jJYJh1CPbKzZez6o1TQ189dLqkvoLwbovGdYeRogzs4kJBUQqkTvF5Us1LENF7n6p1Hk6Q48H66LY21CWhGXt52",
  "key39": "4S23CTGEESuwxVgRTXGzmJvjgA5KeducoH1Ad3fBtnZjTPRsf8XNeJ6T8KwF5mRDCr53dv8dv4tiFZpT5Ka9ViPp",
  "key40": "RpbQYjMPfyEeA4Mij9XqDd6LRLFQ81bTDmiX3WmwQjyxzowjcqJLmN2pihd3gca46eBcLaVRP1MuEuMSJZzbjNB",
  "key41": "QSPFe5pzFgYfWocLNBoYfyHixpDP2hjJ2FNqRVWKgKoteRAk6zsph7iExYzsQkjz3HxyD2F3UYE8CT7TaxeRmbh",
  "key42": "65Zr5yRNnsAHvaQDtXhCRLWSyivuLWSgNefEHGphYhhjLQNwRjTk3TmaQ7UMimCfgfZMyNv5oaURCBDH7AQEvFK",
  "key43": "5Tm8bx97z3Wwen3TcVwMWetr3BAgsGw1vC7iRMng9HrwuVJk8s8He2GcC82rreXVSJWbbNWeJtuqtFZxhHksGiZE",
  "key44": "51gLu7Rgb1KYiE3w2kGVV7jwZ2zCLP4Ju9kGVuNizKnDd7d19q5nnzbiCdSqhdTViKPG5r78KxkeaUzcgMCtTUAs"
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
