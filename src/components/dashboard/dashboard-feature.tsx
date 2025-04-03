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
    "5phvt1gwdmJEms4Lu7aYtdoBJQ2uFwhtDzKsZzah6zDyA8TrZkZh7uSa73aq3TRvkCyYkkepxduU3ZpCHj2A2q45"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23eBPBTKPq5p4xkaa48SpVuT3AmYzn84bwUwJoue9NrKMVeiFvKuJ1kFoeM4GKAu4QDrfmRrKtBdShwFKw86ZuP8",
  "key1": "5reNJjVWhWaao7fY59ut77asQfiTuFBaN5NHgaMaAC36Xw1zMd3GhvB8Dj76wDQRbTnmhmfGaATbWHGi7pF84gvy",
  "key2": "4fDFx2ugWS2iAV3Vve1VRoHJWWgqb7uWn47mGiUTSpzw12NL6n5EzSTmDcNiMYio5hywVfefjt5vhy8uwL9qReK4",
  "key3": "2KtejMCZY9rNfGQ5v2n7vawc6ybBhUr8LtEtZmZQJcfTYtA7kpSt84SYNppMTJfqriuwvZo3kKDnntdzhodbUpfw",
  "key4": "2d4P5ETsdiuYDcmhce7HHkJDRH49DBSbjgEzSxsijJGbDJV3QUygoJW7iHGodcUX4x2eGSTqSu9m4BNwXdgPHoyA",
  "key5": "2YUzZppGyKX8rUXrZnP4sWyDa7sBdDYLYxPG2TP5qTvDvufW75X1GG5YbokcT9fgg9yRkRnqg2uRDXX27gULx23H",
  "key6": "3y7GFrD1TQUhUMoKx6KKo4Kr5YtneKGW4GQLn2bwYyAHxZXCqx1Ka6iTbMZi81Bdp7FzSGnaXRz5BLRAwySGhNNJ",
  "key7": "5285Pfadz1nXhFB5Upo5ApC3zFV3WGBgAvvwGjdG5DTfFhavBRVowcTXWgK67hdsg8MJeGGwbZqoiRuH7ayng4zH",
  "key8": "Wbr2brkb2JpE2n8oosR4zX6kthfSmYo12Y84qhdgMjAszA5XXvEVCWALNVdgxGaodB34yg6M16hAuXmwRarZtca",
  "key9": "4dUrgfpAopYqLkw4HpR7r8cSbHQ3J6TqqVb62zD53j2CJUZwYthNJy4EfvjNafn1ZCXxAYzAm9PKmKi79S8htx1R",
  "key10": "2sXpZGgV1sCXqqkZcFRRNym4TynzSCkJbGUyCtwgT6BuUwZwTaKVQdDXXyyJEfymZsgLXGSghGis4E57Dco6YWYz",
  "key11": "5sna2QKa3LrMHPd7X45uTRJgfkc9n9wKqh5N2Kgf8gHqc6B14SyHvy4Ci465UxTWzfLEzTXSnbPKRsVwYCJwyVFA",
  "key12": "imiNAK4z4eb6hPp26eDHFy9utfgQHwbuFemLMwAhc74BzDRRSX4LvtPkWFaNFCpaGd2nuAp4NswcPrrhQREgGdx",
  "key13": "4qSKxASSeEeHGYEthXfRPx5AayVgBroFTKENCr6SHvbs6dCjcC2Wgx92cK6FwVgSiKg3uNaKNV21CJ9XdUHdYFBL",
  "key14": "2N9rSxJK6JXsdHYwEaT3PqsDyoaZoeaGFq479GKgvj39ZoTJuLMEoCt9ZL98yg9HsrzNAswGMJ3ShmgUjTBZ1iCk",
  "key15": "2MZKCcELQ6KFdXy1wkND1L6he8UPLSB5opaJfeeJYaKxdXw5AnM4PPz42KXH6Snt37zQMrardnLGibX9yabZMSEP",
  "key16": "6HSFMQC4yCL2rxRxbhBuXKVRMnzMaSmosiTcyj6UANemxtHFCtkRPbJfyWP7gwLSXde6am6z52Pj7gA7eb4BoDx",
  "key17": "36FEznvoKNKYi9dwHr43trtJNMcFEJ7DUYreznCsqUvpzewVqpHsdvVwr9FWbiZgYXSGA2LVNiBgSPoWDyuYReTf",
  "key18": "4APu52K74qZH8R9KggwdNkZt9ukfynfGojTALFY6PN35SaVkAUyfv2KYhifT15yLeDjpjnstK6cJGqaZKTjokp4Q",
  "key19": "2t3V2JFY753M6Apo8nM7RKwQ6FHWLPMbCiffNZfj33U7maEzLVKLiX6CHUs9h9JsX2rVSJsXVyCncKMTarCeDwFU",
  "key20": "5S8fXpcUmSEJeB9ZJ82gVsaeHsxXRKx6vLj1sNG2t9x3yE1ihepp6WgEKTscGJyyApHdawBZk74BeHtNsFahQY6T",
  "key21": "5aKAVCgAv2u9BPYMNTTPUuwMQydpL2nEMC77dBkBHUHkTjCeAX6VzqxvxeAcJDuBfjfBgbeCJNNEPAz1Q2WfUJWs",
  "key22": "5z1vLgs18fXNj1JYboN5EyvKy9bkGRvpaEShkpXhVTMEZdXVMNw2jQeuzrDRtk12nsmYaoq2tc3qe1F7fJo176hr",
  "key23": "3mssKbfsRYRwsW16CQZBDJYm4cL8ASf2k2mthnV5HDsusatk3SU5yUMRRnZm9ZXxRnb6ZB1M3fZP5nAPpZTwZEyG",
  "key24": "61hKgibNqgeUUuPcFuGQRw8s1qGpVZztEsE3zzMh5F3FioJ37xqYyP5rzXGWXEDZJqhmpW5DzQSQJehv8TfsLLoq",
  "key25": "333JUg5mNdbTCCgaiqsFbWmAz5wiPSNp342UpmzTs8TaoFw5JqNStk3W3iqsSZE3zCSuNBXhC7BsaZAq69fobVRG",
  "key26": "2kpND77Bp6zArJs8RqB44EsFyDb7MECYLEF1rB2UGHuJGn8ksGxF2hFHZtDZnGR3tUDd94rPwteku3UdnEsmgxRy",
  "key27": "5CRmUcCKc2jJkYogXCQgqD9pXMitjuCQVijnx62xM9awSUPNy6UgNMw7yZ47EYgtpZJMX34RqjVUaEnPocfpHtH4",
  "key28": "hMWTPuoyPfLYA4Z9Kj6nyZdYw97g7nAWMbpthSYF4DAz4Tghto3WhSjGSxAvKJptnJzAFfFrTDyh3ms2WjY9mES",
  "key29": "5AYF6PWQbbj4pQS9KpA6D2Pwbk4WL5qBZUxGJDknAMR6UnMPfcsk2eKooc4tmi79HcTEChhFFp64DfjzVuj5XuGn",
  "key30": "ykdMdcjBLX1vTc3teL7bRnwkpj2YokByXshnEXLPeaxnN3R4iPSMWzxd9j7PAz4iVH5h38Q7biBV7m9DZrBx6PV",
  "key31": "39di9JNRtgXKSoF916AyjRXnQRn43GsyYeQTgYSzb6mQ1t9VqZbTDz8DCYdRKMib7qYLZG2XP8xx81eNoCYUMf9d"
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
