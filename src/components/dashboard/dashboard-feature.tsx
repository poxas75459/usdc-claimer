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
    "YwGnMkrQU4eaPk6y1b5sK86FpSyTwkruHoicu8DYoHgx4SQ2VnNBqstZo7QXiXk4ahTpi1HfC5kY3geY6KDt1gs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k9DCFQxogFWx1oBAz7J6YaUiqWSsLH4w9RF3z591PYiRNw61Qn6aK5zP3GdiYXH1v7u6EHVeiW3WpJMWtGZpjEq",
  "key1": "5urhSaHPryPWgmv7z1zp6eM95XdAUGQuBufxevvoxTh3yKarYzKShESpm7btRGreyEggpFWwEPdwctHLBAQtDtvX",
  "key2": "4o3t19N9zczg5Z83mLLjBBspfCdtyDipzBuRpu56CJ1Bdv731k3j4azs7kQnV5en9dLyDCZtosyRLLfifkqoWhEL",
  "key3": "3HGFXcJ5dayxCffieaDJ7ZUNqTcqhGVA6buEK9mAcxKSLbwdxgSb3vo7xje3wFZbUjaS4vJk9ba79KJbAHPvYsBM",
  "key4": "4SpXjRgv2vVqUiT5faabr3MW4ehacpp4Jos59cRPTpV1sWKRpFk4KM2gCnhhViJGUu6ko1trDmCzvZfZDXaWcfUF",
  "key5": "2Z6uxCKww3Eimyr1Ma8BAmWXiHrJckCNAQcxUN6WGLcx3Xd6SToNXhBso3Qz2ngs8Xav2Bzo8MXJ7oFGZ7qH5ScN",
  "key6": "nBRrXB9znPs937mu7qRemHJ9odms4xyxPACfw4uBqQiqX1KLpivpYktsSHG4fxZooRxKUhm5V5XkcA7j5VaTA28",
  "key7": "4Qz8FJhtT8KYujKuLAjAoHfYbdizuc7yLpq2GYtEKbpGPwKdwNndsYCbZ5GB44CGTbnyshPVwShnKppaR2epsftU",
  "key8": "4w1EskXphhvwx6L9epMnJfmat4SzP8qc6K5YkWPsFoLu3oi4rYuL7DQW9RrbJY22u7bvMXwq4M8XS94RF9xft8uM",
  "key9": "499LMp6CSgyRszf56AE2V5AAQCsdUivJWcaEHfzg4bxj6U54urCauGmfABkRxQRPpZeZFTQAAH92B2TcKTdgD8w3",
  "key10": "2kQvNASfEzDnEmuDEdWFHBB2QGGChvxLstYN3gkRgbsKueGwkgmNmrHmcjJeSiZj8gDsoqRTRgf4TpPPWrwBBx9C",
  "key11": "4QmK1sPMqqu8kQqkeU3fNiroSsFA74PQhiae96afSRvYYSr69MPAs5GD1NQkCjExf34gizus1BcdZPZrnAJR3GrA",
  "key12": "67ATfLkSMxUo8H5kWyo8eBcdXXnq1nTa6M7fWq23SsQBsUywAoG82TKezntTYW3MhmSokp47SHHCf8LG74rk9Hj",
  "key13": "4qsTH8bybeLVxgivDuAgHr4eeTJygVxNWP1dpPnyuH4S5tSYB6Z86Q4iui8Rp4eNibf7F3roqU8a6qJT7PAB68AG",
  "key14": "4MqiQbJ6n6NfFQujWKTBgZWWUQEgyPVVjzraarvFRZPkXKCyPRB4vUXX2URtKeXFbpGqUZETW3RGVXsha5gLE4m8",
  "key15": "4gP7uo6TWpUfrZam6xpTAiHaQhsfZzewLiq3WS8Ly2gUGHedRUQTSrXhGzLGB762BeA3WCG5pcdgdUkez7LiywQ5",
  "key16": "2PbQH7RCbEHzMDzh4Q3YcFrJ3o6KHk5CYDARQsEzj6U5d9rdq5U3XiJi5HmDtQB93C7CbhGRswrHJuR8WXJG4fYe",
  "key17": "3JKo8scNztVqimjYiwnir8vmGRzGF3r3opJhjV1BnS2SRUFyyPVPj2Y7wTuEEz5m449K79iAX3EzHHu5bie5dj9H",
  "key18": "39RF4uRHBP6ffga2hkCMdiiCcoBXXXjNEihfY6Yibd8LW8hF8mhcsxVSb3FBNoSYURLJSaru9jh7WEPmGc2NBeXm",
  "key19": "5pFzUsCeFxq7yZNpQjHfFQbmP1NAgiYxNcX4jATgnKcbqENH1ufFagmSEyv7Z8d2nn7iJQBU4519rFKBXa9S1Sgz",
  "key20": "3fyyAssaKav9RpQcSDXwC6rjSFN2DTzjHMqCwKbpwUYRu4xEpQQUhsXAySLE7MNA9NYesV5zWcYfCiTG6k5nYLhE",
  "key21": "5Tu8yRSWduBGXvPi65F2qw73PydreXpH8yvCLPUqN8NjkAqn5Kf6s3WQFSxjgdS8MxVvdkZKFP3T3UCUbVjGfgp4",
  "key22": "4FjXFoZatKyTf6bujwVh6ZGZzAMngqnB6kx9XUsYNbAHUrHMmh2qZFeWL9CX31GbfwYnsQwzXJzMSDJ1FWyz9yR8",
  "key23": "2SrQC9erhn6P1SrU7GAJSi9X3WmGiT4Fe8AgEhjowNFVauYe56oomR3UJufyKcXeZ58fP4Gr9NFU4V9vX6d5Kq8P",
  "key24": "3VYzSyab7JuWjcJwbFybdsBWxbiMFdsBRfiqqy2hWyfCGK7Niq8qbugLcAfH9LLZYU5cgofv9EDToyUrcby3e8M6",
  "key25": "4CAeuNJ3UVg7GmvDyEoS41C5ryPaWDKtoWS12Lc44GP3B82VYMMGqRpv3XJqgdbpaSe2viGD9xgzK71jocCAMquu",
  "key26": "fE2UZXvq1Pu8Ss4aKv1L4a7WaaPisyAise5kGsXsCM6KSEoAkp58rFDcM9z3Vg7opJATBXu1cbcvYEpm1yeo2jG",
  "key27": "hYgX8f5cBcZeoQUy4pov3AgcaJe2S5khdA2hPKdK92v3yp75rk17hadMxhxrY1G1e5H5ss93MuRiAAJvaAh8M3F",
  "key28": "4jgZBh7cFF1JxzjCKic2WraoY8GcaLKgVKPJgatFbo6EqmoP1RRbuuX97ZVS3JGrTRJNnhcUGcqBzzdaEaLAnMD2",
  "key29": "28KbFYTvUMf96exfcbsC6333j7LZN1Cn2CbqLsk5NkktYf2CBJp8eLt22RsqcpL8Wj4QSGVnQL7Wf3zDybveBhAK",
  "key30": "4Gt9YoKPL4Lh2k5Cp4SYRtu7iZdQ18NXfC8YggJq1of9tbFyTSzmTqzNfFwek9oan2nxfDFcJZsSPXZnMStLvecy",
  "key31": "5qwNW1tj3xLUntta4wPck46p7CxyprLnqhSPESybkqQfo61qNuBJuu59UniD7PFDGtn8ZzfjJcZejnFYZhAzLbeR",
  "key32": "5AysHPDnFXyX51AVDqkoqM6uXaqzvmwCHc3WJ9Fx1v5SkGTwcvoSKcqQKkLN7LiaKASSWkFrnHzpSJXkAEoZCFDR",
  "key33": "3bAQkLRTCbzfkQRrMRS6DpNTXkPqJBefLbY4kco5dkBdJGT4g5ifSsTVYi7M93k4N8F24EXvTFYQeXxFXsxzdsEf",
  "key34": "2hn41toaJaAHQp4XywULAsP4ADrg7C8MCjtfdizmiPmDBJ5eTiuHKg5nsomkHYYCEVCe61BhXAFENBepwc6QY3Q4",
  "key35": "ieosN2oW6bRE2NZG52DA5jGi7nRZ3am1fHzfNrTufzDCmQDqjGmHSfXuYxvsC1FC3PbUSimHP15gCNDgmq5j4Y3",
  "key36": "UEg7qFn1nZPkEhMeTfz76pkpy7euVTwsw2MRWo2RCHqzLZYd15qSSEH1NdcbFPYfiKbGQAjQdyNGFR3rCKQDNXz",
  "key37": "qADYBFYSZ5w3JYKbXqQM6c18Z85JKeSvDrDfSHhPQtvo1sMKriwJTGGCBUrw5QAqQuTPpFQfaNQcWj9xJCYfqKX",
  "key38": "5TUv1QKFaTKwunNkmkL661y4QdPgis51bSmxXfS2q4DbwEtZNRnSddYWxfFsFUHz31LPDXDipfRNAABCm1dBv9Ze",
  "key39": "5wmqPkwNXcJSBpQsYL6Usz7TaMt1zFJNAxtvL7HL91MrgiEyK94MqsJkjqTURzZSh8UZPTaSZAaEtFfgCeP6nPaL",
  "key40": "64oo8JmZXAtNbCeizoVeN78D6emdxC9PJ7X7GkwbHjZsYAzMge5AP8ujiMMMY3QpAG9gesgS2KEQeDrg1yehvNrL",
  "key41": "45JTANayp163d9vhbUjrJPh4aAn9xmMLm7frmvc1s2emJ2Es1UgJiRUQnhBJQgPG9iBk5r8RpsFwhsQnMTRo4LgK",
  "key42": "56F2HEFBbULa1PnC5vqqrWkfrSnssTKGDsx3p5weMmRftsg1mhYBU7rX2ExiS2bkKJL2QoGLpXrWWNu8UmdbCKVM",
  "key43": "56yzf54bV64chhLKjARqtbg7DtvUyu5AMAnu9iMFhMDiNQ3bj3FHPE2aMcTvjMp4YyRkJ69VnKvmDYM542AzK3Pf",
  "key44": "37BqXGNnLyazzTMvmQEGzdoiHdJ4XuMhopqmU66Kd73z6jqWc1NXTimWmWYwXuXEWbXacp1qnCCjckVZ8ZuQr89d",
  "key45": "2NtN8NSHioLo7zYPgwcTtTmgtUEBY6xe74aJbLUQfXBcRG2ebkUAshHxutLUxZyJjisdvhgzvqtxny9BXLMLYYn",
  "key46": "4ifL8Hx4qRdjdcC4mRACvFeLxCuc7ecNdqQrAMCeiNTiSgrzhFjvHjzLRcKKZCDU1AihiCdhHjjxP6kLrQJDTeM",
  "key47": "4sSWES7APDxtDmJnmVM6YY1MC82ELyqxaLGBTkN9EaxoctD711TqAg5mCsvQFQE9o87z74cc9Qc12ccfQjzCsn2u"
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
