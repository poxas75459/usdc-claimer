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
    "4DFEefM7oGcDjs2h5XudUGefHtZbHDwqJ689ALBEM7VqFAbRxYBeNAaK4ypDvyr5wr3xZvpbfrEGe4Qf7TVnETv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PDbGkVwqLm78feNShyNhnSfhMMmq3Coi6LyWxzhXnMpPz4BXk4QikiXGAyThZnadUwgMofnaZnH1gg6T8e7qNPY",
  "key1": "4a9d9EVixDv6Ep1KiqNAhBVEmtJSCP1L5mU3hyG145FhbJ1cfLkW5k7aiAcjkU3PLtDqTabrbGyK9o5FAtdPvAKa",
  "key2": "4achqfqwuZiAGVvaNx28ySosYJ6qgbrHfcSNGKpmCPKdSjMgrEw3WNFtuqVUvxPjJYuJeAubL1hbyHmU1SwXonpR",
  "key3": "5J1rorPabxFKiHmBercSCg1cc2TqXNHzqfJ8wzjAzscmcSeBHKe8fFxJAEC5zoiKW1kZ3MEYMmcqxhr6gYkfHxyc",
  "key4": "2r4GeuerHFUcuUgV29ZbwcNCuaRDjMYmK4jcC9rpuAAiv9jkPGVua5GpvsMaBXKuZhA7Xv1KWW6ZyTfZJzofPBu3",
  "key5": "3w9phu1wzGd5v3KgRtRrTAVcjWstTVwFU6jxXzaM6iBuVsur5QwpyhMoJKfPgBHyJ5a6cb4nnkiRivZoqTtaBGhZ",
  "key6": "2BgrFupDTjvYBqcoz6SVkzjmYd9n7vk5KhMmnFsuYVp61pqUfyvyExADfDbYixajcqw8jjWMNJdeGMAuSJKDSB1u",
  "key7": "3JFvHrq2RhtWrPXEVhCS8zrCM85CLdvkmSUP4sHmFFYiEZPGBFXwGYzdepP62nyPVWg9GfwLKR6AEQJStGrNzAKn",
  "key8": "4UrxMSJxgiM6XUnLozrpyULvdNKrynwuFEQWQRFLjgv14GWTgNekqNyj6VuwsUs1wjxzBm4sr6bFvVZGnQrydYQ4",
  "key9": "5WVvukhAB9sTXdeizV51qCW2wnsa4udHGmrfs2k396PirSRcPK5YyJn9y3WYx7MRTJjVzSz3H3P7cxtKZww6nwqf",
  "key10": "2bV2Cs2aCgMK2i1Xa5Qic4ioMhFrszHbHeGBiMUkm1umX12bi2tVJNXDi8zka9VckYpBEd2U65uP6QYLNWDNb4pY",
  "key11": "58iwtFiDUjxxvahtttnuAXNBgL3xnnMcoEY1MwVWumzRa96h2SLpBwtVsK7tovARWYe8ydqku3ed3ahGzo4bE7k3",
  "key12": "3k3Ltt84nXrQCGido3ZdEaXt18wT4da9NeXTnQeXiB4YBGs5nQfg3hbdmJYyitxps6tXjdxie1uTrQzoksu7mwns",
  "key13": "5hfRqfd5yLiWQum9RPtbBuenepPafFGJrbFKhkA1j31JtrYqiKD7z9fK9zatxaWjZ47svBiXZC1hGwzDw2PDpYze",
  "key14": "57dCMf2orXWCnwZMiNWB7a1PKZKbRpj9Q18pdKgQ5Di7mBtGCfj2BHNgibQ8dy3FDEzgZ9RCzVVgmGjjQav9mpeE",
  "key15": "3ojgeafkuMR8DECkmhSJwgGGNP8Yb8p9ufChTXRz8nkvTcJRfghrMZ19LhwcZ8bcFWUCWUZwFD23MStFPJr43GXd",
  "key16": "37qKVmioELTuBY9jKeBX4T97oti1o1hWxaoS6zUbepHVb78d13jUGiWk1rgczYuJPG2sjWCJWnzqi5AVUciYFgfA",
  "key17": "2eQq468qpdGjMPsdQhNqD2rqWVe2z7RDtuXULrZwHVDZTdTiBP8W7mfmJmJzeTofQatFYyvbtgAxWqmGqqvZ9xtg",
  "key18": "F4zk7BWgLdC4ocR85Cc8SWRMYjjdn2sHtNqw9Rj4mbfw5wknS88zh6EVFDtciUC6pPoWVyVom3vSoPENKYCvwdG",
  "key19": "2TYHNmA3YYkYrUxT5pCdX9Y4548yL4ZaHBFDdupGLzJKwdRSySZ4w9uXCqbRjAPD4p7RizEDscRHk83LYgiY3KGB",
  "key20": "5d2Pp3a6qhMyXyKZ9rsr7NcxpnctuYcfsaSBZiBt3X15HodNhCkWwFuU4zLJ9bbKWYD4kp52axciXGHNiaTFhLH9",
  "key21": "5rKawq37S4mgA14qpUhhE9BQXEE6DzJvzK7ntQj5B7XQHkZBSpu5XKKkGbdRL4WT43f1MNiYCyEtHTdrNSQdND1h",
  "key22": "3VnzK6iUinyWwg67vQTjxCeXHa9GMEGpcQJNz4MTw5uQP18y8ts6RKPUEDSRHKVdBgwWPUGxaoWSJzKGVSvGHnVh",
  "key23": "5e5vPcRWpYzCFNxUGcbUe5uKX1xnVqs6Dtua8SzvQUMH9rCnGWMNdzpVX2rwLZAC52ub95GgEPUSUebEUkRwZ7Sm",
  "key24": "2M9Q886hkz6qUdQajqjsbxnPKX1s51qesfVmajUwYArDL85PW66HXhustvERfaEpty47fG2tGvcJMgy2LadRtu5w",
  "key25": "5D5AZgdiMDNmN41NBBz4nFXWoeaJSCDe265BbbApgB7m9Dxt2VekbZa7XLHMMvpYkHXB7HK8rR18RHgHFSAqkxAy",
  "key26": "2SzEBpXcPSZ6KSLdXNRgFBSVYD17dEmJWKx1XcqxNXgmACoMi7HsFNo4XehwAfaNVwVnC2TpYVdVr8dVASYJD6oR",
  "key27": "yqkgBm1v1xjw69JoAuSBPSsySx1yHQLSoyAbSgzTnLzduQeLN9dDmCzQFSWNKg8XPGXDKDwt5xUpjGToXHjwBAm",
  "key28": "2HqJaT6YNeU8qakP6z46nkBGiZEk47EBxRg9JX55U6fqpEkBNEkbueLBDor6uHqwGjfkRdGHVaZFnzmjXcFxbT51",
  "key29": "4qZ6tp9MnEMFPuKSbTbDcMxpe7GcEMcWLv9szNefk7UgAmJ27wpK1j79tZz1qmayw4FL5eiAoNBG2GmdjKNPJ3k",
  "key30": "4Jkajj3S2VtwrDMdV63pjcRCknWVNJTSPdAQ5nFRuz5tQndh3R55JGD4mi3UdTMLwHdSmfzM6oXACy27hcr79sRk",
  "key31": "27GmtJg5xa2VWgzskr9372rwHBGa6eWCNERofG3AimVdBUFACFdiwyg52VHjRCwMxZkZ7ZjNGNdiLzVMsP5zwTQV",
  "key32": "5oKZL4inLa5eM1sjHuMyU9tPGQC2PCCN2TPjsps8B85NpLCCjrcpBDFKYALg6qeSKHVaoJZhyKnKGE12n8rbZgdE",
  "key33": "5pNk8sGpqWYSxMPuBguDMWQsZVM5DGzVCJRTnG3UxSaM9txZFjZtaHCKhkfyKbRM4FyxcgXzopxHZnT7giw1CKQ9",
  "key34": "4SG2jwahg3NkBs9cMEYFHd2qF4BDoZG3fckbPfiCEU15LMToXNurd7bE39qvpHCwQ4V5SgM115bnNTrTzk8vPX7e",
  "key35": "4ne1mkUcX4hLGGy9qUZDGare6Psttoq7xJ8fzVfHvMuKy7gzXf3JCDLpymzuvM6GBqZMu2xtSBhCbZH6et5Mt2Qu",
  "key36": "xd71B1WLibAbjK8WVcGUwn3M78h3B16sAS871BP5xBXN7JnLCLbA5QjrToBqZ3JmW8TTmzSWTnLnQFp69b6pkxQ",
  "key37": "4nH7F8BAqVBomCuVT3j6SEVRTjKwN3TF3qATDNPguFXVdkLdKVoSWjx1SSqwr4VKiEACWWE4sz5Nbuk4vmwHYU1m",
  "key38": "2hhK4pwpWKxyGdfZJ9QwQXReV4PbSjKpw6JoWBDEGgW7JYb6jX2fp4CpfTgK8i4X2325HrJHgsquEUT3uPG6MAQN",
  "key39": "2UoyCZqFvqfwPK4PF9qhT5BYfo1pZJuh3X7EYG5N37R5oLu6J3fF4o52QndjQhCC8Y3rnzgZ1gJkuqq5TLg11M1o",
  "key40": "5aJDCUnUXjgNPKroBPx3T7QQgLmbJNfXgktzsBsJQDckULE6DpMTV9A6fFa5fP6EWRMUx8K5f3WMwYGXTUKWP8gQ",
  "key41": "4QoZ7MJzyqjJcJ5CdXSux3qGN5xhiGEdzJbo6EQTwj7pV3gT9bZQwzXEScrhmybi9UvqB23F7w7T8DUBFoFJqcne",
  "key42": "5sBjLri2Lk2XCFc66Powwy21SRWC1G7XJ3zsntFvpvGbihNCPTmn3H38xQu2PKv5yoeN8wYNEEtZkWdUE7MifB1",
  "key43": "5JR6VMmPtaGudroDr2d3hVwh9kcgAGDhz7cv9No3VHC9vhpwRq5r96JyZQDjBQHKkVDn66XhpZduS2YCU3oSZJ3p"
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
