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
    "5bETRwixNNCT42x9guJurxH4LYFDoSjk4cZGuE4ad1iwgLGLc4KAihhDUABkkG4ioNzNgAoYK36gT3c5EJJqmbbH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58JS4ocSGZ18qTv5jkH9RvrWFUfeoWWRLoUUW6TbstTpjT5LNRzZc19NT5MVgQ4KpKuccubpfkCHjjerBv5SShe9",
  "key1": "1jhnmB48TKbCLq8fB7bbdNzC7Ff42NJYDcweaTiLUv6mWdvb1enxFoETqufTrkjcYXgyCjtWJkGJy9bXE14jwhv",
  "key2": "2DHJjaJke8jyaZwooNn5rqYdLBTyJMB72hCyyA4CvyBHUnRDR2mxPUGbqvHQcDbWpQZLeyaXkCqTPAN5X55DhNiG",
  "key3": "2LFz6MNtdYwFCppiw4DYdzBoLYdofniLGs9NzPErUGGtaQ7crhkecgsr2ZHA8ThPUCcFWMBk8SLNTD4tPWgqjR91",
  "key4": "XgPubM7t62AL3zfbK3hn6uU1sN1X6BmUQAP6XRGk8wFmUmB3C4d8rn6PBmV4wbqKqp3Rv7mksjyCp3Hh442MiNo",
  "key5": "3pgMAfkGt647GvNtzMu8z1cPVcGS59ZVeoH9dba6pisuxiXUXW1aKTSiP2kDUsF7m4Dg3j2C5sCTYNWc9D5dv6yf",
  "key6": "5hbv3fgaht7ibjvMgvLfWSLdpzoDb47eyyv7zkZf7LoF4crbDCpP2UCc5cbPHtT74AVp5v76RkiMHKoqYy5JsrC4",
  "key7": "4qKPh8yj73AHvtbk6EZpUkT1SnYZ7NptWgiLV7YRftaJ4kwZBszAUEFK9vSYy7DiwNq8Y37D2F9kbo39UPwuGcMp",
  "key8": "3sSGWB5xm9vxQDYFAV5q5zXjqkLz5EqmFzs269PqyCrRoYxouQSZtZviwFoBCcfUBhQ34fmM6YE7GsqYdJGyBqjZ",
  "key9": "2KjCvL3TX2x4NwAazw9TnRiwZKVPJLTApwY8JDe1W6knPP7dQ5uQF2KfwjiPRKjeWZu4oBY7f6ZeM2qY4J15Nvwe",
  "key10": "5LYaJD4K1cZ1MTY7dF17fHf1zSGdBTf2eUhMTRmB9kpkUcafbSarTm8p2mny4yCLqDHSEe643732rWVmAxoYsxFq",
  "key11": "5pbrPdqY1M8X2AJmj2BCqzA89MMiVZwP4KLNyKRBWzo2LubmfHG1HVc1GP8AgzX8DKRm6xR6zzzAth1pARb2AKP5",
  "key12": "41HL4gH2KbmJMiQCbGTLjaYVkQdnTB9CAwu2KqfMWtnSPTDQZj6bGTkBttJ9h8YuEJKiot2F9wsArkXgBFGu2hh8",
  "key13": "2eDMS6w3U5mzygoctVFrqJDYdzznhZaVxkXuzTa6o9dYwcxSN9kRZdp6S3mtm8LDMY96jLG4EDtWo1WtxPL9zqGb",
  "key14": "4a8tKHUy87k4Y1eNmdX3oCZsJfMQzfWGexbPog8fBftmj1yPU94wkwukBRwzuD2Sb9SgKEkrcJpBzZ5vaSFqUgDe",
  "key15": "Fz6kSdyPcq9QSqEQn3qen2d65zXZEBgzo8jwCNAz9bC7H8jPpqrpD1dG1Wbx79938dNn7k8YKagpKBmwzi7hBor",
  "key16": "bNLiXaRVCr7GW9KdavZ71YwdYgoTdQuibcwXv9LFnGT2bFsPLS2bPtwdWJDCUuukCPTwtZ6m2maXcKnmZ1kd9MB",
  "key17": "3KGx1KZMzeMPHQJkxZdgJqpBBgv6hAHmQkjcJucRGsa98nMNoijBXcCg8sTnHv5v9SRiYKb3az9otcRwTTasxRKi",
  "key18": "2DUeTwWDGr67mwLciEms1KdcFmCinbvMw7AHmrRVoJs4vj8PaPtNXjH6GhcKfgNQANSNizRJ1cL1dcmdkSCxr3Ri",
  "key19": "23zErcPZBUGq4gP1ZK7q9bgwGL6dxP3rbubeDvMyioq2x1ex7pyyvX5Xmq49BxJ4e52nY1aRgKJ26FuUUD9eBrxm",
  "key20": "2aj32CMg1uvC4EHbN3ZV7QnKNjhAeXdbopYjzqmkcQLyJAwSUrP5pLVXmiLWpEfQgg6dLwHGtvgs9jRam1Sam6h2",
  "key21": "k8PzGD14WyEXxeC6xx7Ti6BmP7ufAW7Ezt1ese7bd7Y1qZYk3ySvt5kEGtrN6cgn6V7Nh48DkAvyQ4t2ZaUPzRt",
  "key22": "2sj6Y3RPUcqNoDMucG483hcP4Fx6F5JX3WGRD4531ZvF5haN983T3HsqFqh5K7GMSGSr22NGsoUUrudxWf8nH4Dt",
  "key23": "5gva2kkz87QaP5QiwfBzYWteFxJ13CXpZmmpuaMQ7E9DVmywnagkyzFbdDp56SkGfkGUYcy1CzZtoGk9E7VfEgNP",
  "key24": "2VyYePJJJmpCiPE6uo9rF1X25Sd5dmf3vtvCTvbo66dsS7EkALbMpNkup2Kbu1EWwLZChPBEPCSJqDAhKAp86oCL",
  "key25": "tGpA73L8KUosCAvhS1UdBBxNECB1U1Dmahnh3SmWPFHhDZUQygwZFmgRpEBUU6Dr34PfdzmaPx6y3bjP6HAncVg",
  "key26": "3HTca7J8oWreKunuBsYykjZ2DhJB8gUuqqo12d5TS1YF7Q33A3tgKeENzh4Ncx3aFLJ63tqGkiYGrVugsguZZn2S",
  "key27": "2gnkFt8KN9rYjH4jycePEjhLWVHKjEdKH2qYUMrA27wi6fw8QYLL1TC73YfHQR3NB5ayCedXcqJAWwyyXHoyTBZX",
  "key28": "26558f8zuMAmZTHzhCdMUAXgA8k5Qr3PTP8sN5eQ2LgNVA9HkoCKSEmQw3Ct6WWhz2ha33Z21z8JZyX6eZyCwjkm",
  "key29": "34C2WBmzp99MiX1KWjVjDBqjvFB8sBMCmAh9WUeaxEcHqd7BXKf1u8b4JLQRnMUQ6tqJTswh6TxHgCShrVuAb9Wh",
  "key30": "64CQ2FMGxa6Qb777huuDD4xowTLiL6VYDkuPTA7MEyTjkqntx2hMGuB7FWCnQiz6h57q62Dfykc7UkPpCPsD2zcc",
  "key31": "62F2hzfqGYPoNgB3QSCxmMLv9qm2NmxUZZpfdiS17A7cRSToMFKG9twNvvgSNr4SmtSwAYvrfG33BQvFe1bXv5nX",
  "key32": "tk6AbvFHTvsVC4MG7d26zDegAhbFB4HpZTSXqPfNHdjKKWqbF8w6MFDL5UeZo2LYfo4JT2bZMu6GnpEVdcJ1run",
  "key33": "4dnR9Q1nfd5h6pd9uXG4eEPHwDbTzaF3rvJGN9GM2c2urfjpat2Lamm6hstV9fQoddVmfL4FVJsNrEa33jbXRJ1m",
  "key34": "4WvHJpSLkXh4Mrp8kAcauhwfeCcPq6kGGzvLpCSXbX9pXDpKgZY5tr7tahreDDH2G1Rocv2E7oJToETCvfj2Fc61",
  "key35": "28vm8vAaQgR2RzqF21VXxbfv1H3L8tu4shvPbhZxLWV52mHzHwUxQEt5gNivzWQ4C7JY5zqxTb7ytaWhU3bsnp4r",
  "key36": "4x8u7Kv83cFrmL7r1SzUJSfNNqLc9guzrYVqtkCJixCfZuLgnuR44kFWvGzAQqkdJaWwfkRrrYHbbSYa8YhrLmBt",
  "key37": "5yGNQChXtRnCLDAwt7RQHjaG6kWw2nSjxdtNqrSXePG1v9hTvgd4rxuvx7UbSPyLUBAFW63X5dLvobiQprYAnupG",
  "key38": "wg8qzJcG9qshedBokYBkEKBzLLYjUoYp8iVskLPjsZjGtoeBogwCSN7Gbpr7ubggM7rSnc4PvSyX5wXqnueZnor",
  "key39": "3Bw9GtHtrmKFPsnqzZxw6atgi3JrRGqVUa7kc9jj12DXRkxULryWW8FKUPjBtDuXVWKLkJckAqbuq6Jf8kmtQnUz",
  "key40": "3D87fB1YhCoi91VqXDeuGVfhUeN4Yu9V1HNvz679MFU8mX4uBMeq34aoCQTB5opGkCHKqeqHu9BmdoW4bqCUjcqN",
  "key41": "4RoRdsXF22a1EZpWAGi1y1ZNdkyeXYVyiEcuMZgwEstw86gUervpTUHtP84xnbkNofvBjXHkayk1RchmyitEkbiP",
  "key42": "3142jZYViiUtN8QJy5GxHumxC27ShUT7kDmtFW8voMsB4zQNPdgraY4UAwypGdJmGiaDD1MnTmcNfkthCUM2BtfC",
  "key43": "2gtG9N7crTK7FmdM2GXKGGs8YEPWP6zbEqgjqjFhQcf7UCunWw9Lf3PjxemuGJL3CkeVENg9U9DhnWC8uV3YbB9P",
  "key44": "4D5sKrgjGSCgMKAJg8CeRzAv8uRC2YrY6vA33DjA2XoVjfMNqsSqRMZ1eUUwgVKMxYHgB74whtDoyarT4KThSPMe",
  "key45": "26wyVLHegDToYFPSuwX7ugPFh7cTVn5Fe5gSgjchrZQngaFkBVZcPek8RcpnowkrVvuEhVVxcGNidus3pmXxRpyo"
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
