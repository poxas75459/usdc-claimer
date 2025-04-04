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
    "TdypR8hfBnwkU1UC8WhbEGs6Ptfcf8FMFhm4H51LsUktPPh7gPyykBfnmg2X7DPX8BK9x3EnJxM9vQXUYpU1TiY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33LWsCYjtTEoZLQNYRRTdPZNCWVWXTVZ3iUJsUic1weo5JEFxbLJNRLzWTku6BjvvQtGkHWAnsZSbxVrhYrSf6BA",
  "key1": "mKgN8XzpqSm3sDo5RtTK8Aac7XV28URh1KFZo4Q3Pe7i645KLuugJrzAn29qWn9iH7ALZGGQu6KDbZUkJTqHmZn",
  "key2": "5a6GhD8p9URiKDY63iX1HADv9MSHMFHPoFxKQTnoeejmDEoKRo7V3KPejj2KsJk4hUAApyUNGGTWGeY4fZHGsCCb",
  "key3": "42wCJ7bkSgdum1zACpMvGNM59C1gNDZmKHoiLrehsggHCR1npXHEwuMcvAiLTt3EjaKoJGHAtAyfaBaP7QpJ3rPK",
  "key4": "5AcTNd8RXVvbdhA2WpukFd71qBD65doTW4QEUETkFJBuaA8ozxGQwGuiYdk2t84PLN1dKHBSk3f29fSA9dWK5u5E",
  "key5": "5ppwyuuTStN1JCuS8AXvZNtvY7KZ2ejLYzFKgaLXJmEFrNBATgqF8KXZVdAv2u31vRX2ESqobKzsYGwC7Fajb5Ef",
  "key6": "5UabLuaeFP81b8rCohJXJnqHhYUwtcSnChQyrarmmsbnLzoD9qXewLQAjkmuU6whTyAYuXqK2LBvWanXgaXozdmP",
  "key7": "2Xdqr3kRN9xqL4LF4vBMXwMrU75mDqrfhAAhsz9jd6Kg9V4yzXTrEMpFvS6pZLSfFgDwzTx16cySaJohHkKFgnoW",
  "key8": "5A4aS6VRdgznLfAGDZozwS8iiQpA9nMMYHeEkP1FdSfcgQE1xuiAVTgDcPTtJqPSiM2KapHGipettjWvs8ULUntv",
  "key9": "28Jowc8RutX4yLyGkFKLrLcPSpPMSjSmnru8g2buHV7z99Dc5QSKWiPcKJZ5vod4xCXmLVDu8QPhdvUmMTwFB79T",
  "key10": "3am2m33Lzbxs5qsSjvtqQnd54KKyZp793oNddeDPfhQmoqVL3HSBLfpW1W4NrmLf8CAkmfTHdcXvd4bGRJTdo6Dr",
  "key11": "48fhozJkK9s1PjiXVWDppotNQdP5zMMLTtg9PJJPJQ7XD6mtLx6AgZSMqDN9t6mQ7KKuRDCpMLqM9arLL7XXZvHa",
  "key12": "ugkmCNECU28X2EBykTVj95tjgcSi8k7mfcnBGVTACYzYG2h9vatQdk5oPSGV3TCYQUsgavV4NoGb3hquxV3K29q",
  "key13": "3QHpPYHqwuSRSXFgLUXhQfTfRBzdoM3bKFzK28tgGumcc6m4kvgsAPqdM1Wjz4UEqmfdXnhBfiArPwgfuBXAcdPm",
  "key14": "3bZrL2P2V4QnhMWXJzh5bvQtU6D2j6LJUrLQDHQX2sve27V1Q36VHHBMcidzQJ5cPqSD9LL26rPyxWfzKp6nyUVn",
  "key15": "2HEDrdgwVthQhBXFR23Bt1Y1fzc219zv8BxerHF6tAi4cKPazsrzwAhUdgH6n9UrDwkz1xVDCCEkJE85xA8cJqzf",
  "key16": "4ZNGRbj8VreXt93uX1EqXcLJRcCi1umidmhBa47oxiz7UV3kiYJme9U4UQpQf8wsbcekSGB4V1kfJndgzGLM38sm",
  "key17": "5zsgT6kGHwZeZukX5Jtz7rUkkTfLKxFeqV1j1T1ZS5EdNY7SmN9QEc2en4f1jjT27UQ7Gqq49czpWJVSspzo9N6A",
  "key18": "2TVj8SRK17cDdNm52JnEXSrMdbKkWsRPZxUAxHBVUD5XKuqXxSEpcA4yZ2EnBwEAr6pMgJGB3SXyaY4uMHUZuMw3",
  "key19": "o6SrqEzPbdhbLLfSyCmUhwqf4ttkeLS359D9DQ2b51eRxWp9zqSt9Zb739VZ4ArV9ZLS3nVZND4N21z8DGGdoux",
  "key20": "3ABDpnSZDjAW26FcuedkaMZAKHQsvohvhEHi2ycyjmqEFmuMBLWtJo6A14hixe9274WsauBRjkqKq8MQ5eSfBFgB",
  "key21": "4MnXtP2h4z7dCk5umKP9eH5cAdxJqaaRcts7paPeLgemARsZUW3NDdvwGm1J9GgihyC6Z7EJHjN8jfdv3wb4sUGz",
  "key22": "347mtcViz6A6F6gHKLwvrQ3TnAH5XeSka3vU799vKyoXXxeuFi89HkXwNVLCHumvuTzESEn7guaZq897sCh4ZJ2b",
  "key23": "4Ke3EH7GP4vzBevRAnu6QJYaxkQR6GoRB9QA683Y3gopcJmoyTqv1TqSbeDh4wjvAVrAzxoYANt41fYK3B1Lhi44",
  "key24": "47HLEzrasxGSAbJXDTt3Q6LTJRgVNgLzQ8Fdb7B9h7VBup1aJxCmr1BQyvBRFJMJTz947dUAnFgsJAZuVToif3mf",
  "key25": "4UqbU8VjJxyUBCN44Sq2YyQizZoYizki2zaNfXMMMjG8Frp8Lx5E6nJixzBHfjS7Qs4ftiShfZg7f2UbQwEBJmb",
  "key26": "4VPQQCKJpAcmr72sHB5nBiyNGibSQEQsBe3zVcYHMnyUrazgD2DMH2X2vBfgB8NmQgFNPTVYT2eFAiGoAyyTymPC",
  "key27": "r44LGjD52cCe8Yy9fJDwiPpGdLZduXGCYCcL8rACfNBENi6VjBPbMRbvcbRZArd84B2Lw5ecj9xqLGoknzsWHtr",
  "key28": "g781tBSP54QtJvkqkbKsdGcGqSrDD2W9w2yn57JocBU6hwVLMzBDGj3BTXe8AcF3TktCiwRwxnKyJC4h59HZJph",
  "key29": "2uUS2XcrDNhgKcSsTXb6U4AKbs7WbmgFgy4Du4eYukzdVfHhiigZSuKibQEAahymjzCRLaALPqrhReMzpV91Xp6q",
  "key30": "2zQ82p6Zqd5TpaGbgQgC9E2LFRpDRtJA7KTpuUoH6LKmQz32k4kXyf4MjpsvFVSrjSn5yzxdvNS3CLxnxjd2UY61",
  "key31": "vJ1p5VayA44ani8zkF3J2R74CdC2YWs1Jgn8H1AKUh3xtoaVw3SF9X1ZLTeLeHCKCKsx9t8RbHZV6Sf5Mr7ch7E",
  "key32": "48yZjaUyT2jAF5groRwS6aCCgcGbQh2BDXxArnCf2z8Ksd49DXp9i7ficsV97FpesmrNQ9LPc9dYSJieHB2uvNy3",
  "key33": "5pQQDoFKaRqdmXBYLJswQtiahDKbS6CJnrhJDrzLnqJWcCd8nrTa2Y8q3JjZZCZMNJj11rHvKs9J1F4ZJJJaoRjw",
  "key34": "4vURvtJsydxtGp6gHXFZ2SS48L1CGVtgkaRjwA6vqsJb7qp7vJGspxAsi5CPWLRSrPCgmAwA6yFps7QTerW4WxaF",
  "key35": "4g68X3MTPL1nbEAhGMiAGNW7tozXampmiGbm8rbMvrWLzu9X7vSfyUnx4wsotKhGNfxDPhKDa45GoPSm5ZGVJ9R8",
  "key36": "3nNoDqYVGkWap7jgjAgSJ4YHmNjk736p7S9esUtLpBAFZQ3DHzp2Hh86hqam8WYkXxYkaQoF9YHUmcxeFXGyw7Gu",
  "key37": "5rkpH8phaAyXYtu8BffBGsVAmBukQkQVkD1J43XZXpWbGoNzWeAy2w9CnWCF7L74YcoVHPDC2Ddw2uZuJ3zHzBoC"
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
