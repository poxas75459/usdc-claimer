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
    "GaHyv7xfzGZ4XD3YGEDCYpBZxURSTssnt95snivsEiK7WpQSzutygb1pCdM8g7xJaAZgQr82MsaKzM4toiHuTuj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pdrEnhN6cWs21ryxozEKhk5dtTK1qxXzi6ehKxgjNHWpZTgEqx91DVWc1cgbFDwv1s1aE7X9VTQLcvdeuYVam1o",
  "key1": "2j6pBFuFcP19omTch7gdH84jh1Nx7W9kuxJ79hM53FYzj1SMa1dgs6qp82MJ1WoyaASyouG4qjffPo3oqRUrTvpL",
  "key2": "2TndV493p1kD14foedp6siUrqjtTKsQh8iH2SR6veQ1K1fPF2tYutV6iZkhrtwJiucRVzJG8n1UeG4AZRsGs9Y59",
  "key3": "2ghDNJXzc6BreoypY5X3Wf9NwyKKX9aHarnJ3eM3gvKAHGPkSSZg6XwKTx6yGjEALuWrGVaKu53QzkjxcPFt8CWk",
  "key4": "3gbqoJcR5ypmWEZAaMpcArsP9rycsraRgLgPvbUeTfjvcZGrKZPbQoREWdadru1PLasVaW7Uc5w1wdS1tpfvetVh",
  "key5": "2nZKeN1XnGEeUSXUj81Yr4pKyz88qzhd3PmJE9yRH7oCjW4R1nwVcnT7TJxMLJDW9Rt2eJEEcfgyXGzKATNR5fqA",
  "key6": "5UquE1EP6aNQ1gUxLh59xbPKQpYHCcczgtou2wCa56nN7dKFdqLY6Gs8JBoDNjg7Qxiq56z86d2iUDSgXt9YB9Mz",
  "key7": "3gG9R9kqu4xB3sXicZg87kmnjpN68B1brkxtGsSSQLniYkukkdf7tCnBRwLqqeekUoGkV4jeGUaB5inFeKFCmVqJ",
  "key8": "2KzanRRjZ5EezGsp4YGEwMsaYRqrvWxkC353kYrwHi1EE6GyKM6PbbDzCJGjM8DpUtUQCQj1dSeRreGyZ8qSyeCK",
  "key9": "4B1XfApVU5PdBy2NCXfRdRDjTMnjxX7YqJBVfmd6KpG7SxsjBF5Xc6qZ8MKGfcEj1G9tE1RRFtwYsjrA4iPBwXMy",
  "key10": "3zShBkFJFwbwSELDetU2ov1J2SJGw7sAYxVFpt62DpgJJiQFSgupGtFtV1ZMKFi1WSRccugqsKu56beUYSMtiLkj",
  "key11": "ftWoKNzz2evhW1pSpFLWn9Bka6TtwB2QAK7gJ6F8kdFaGmFZ1E1KW7uoNwtJrSMq2PyEh3ReZHueVnkQNrABVR7",
  "key12": "4eYDoHm3of7qM5G1JNsft569YN2zC5AuFnPYRSqUxRJGCBHDVE6Fc5H2CdinFknqWerUH4VK7YWQr5nfcwNRVCxM",
  "key13": "5mu6qifNBtHjcxSwaxxFZfDV4LugaL9yFvMhdPygnyjayF1hNe6Sja39Xnqeug4EcVkKy1eJaQVybyHbsLjUobHa",
  "key14": "3tJnDGe2ifUq8HYu8e5GE7iMZEzJkjE38UjGmkZ6UfFTWPCXBefyktBLMWreCeYQLtPg6QUbiCSSncvUcf1LgBkw",
  "key15": "22KjDixqNfBFYFn7y99G92rtpuwvzvmSAcnAvExrTC28udhCh7RBwGYXUjWkSh12DezHf5FCH1M8RSmBcPKy4QYT",
  "key16": "4MaSzXs7zvRNTHKUmz3XvPriVjoEwdpBhGUP4r74UrN4ra8Q2HupCk31VmAMcABSDZ7m3eE4zsgFnmJ6GgJHykHr",
  "key17": "4Qma5v77DzTMRcWgANMnAexFLJTYLw7PTmenKT91DKQ46SFwFdUhrhDj9E5AWyCoPpWgCazdWdWHZ3LpEtvJLurC",
  "key18": "5MmpSo9LNimvfEpAuqt8wBcgi2PDdqWQv4SFY4SwDowvHvhHxY5HjJ7Hp2GPemDJU45pk9EhWBD2VnoUAsf53rDy",
  "key19": "J4Us638Jh5P3xkRsmdr5B5AGUjWqKMd6ks498swiwxkijoTb8TkuoMHkZQ3mF7H4AdUKf1P6aFrcaVfm6RsKmPK",
  "key20": "2T7ijxG5oGD1MMokHwzZmMSe7k2gbRnyqxSJGdS783mu4NafcEo1ym6xRZAMCs5XeA7PidVocqEvBevhc9CL6JHR",
  "key21": "2p1TZkkfZqjPaWTWk25bp2Y2roGGZX966xe7QS5JdJdDYY6uintpp5CCC4XqJ7y8EQMgh2Keat6xwBKiMv4TNiyx",
  "key22": "52v4NxnK1G6HbkTWJAzftfBwUesfJE2XzS3EKqxavHc5fvNbtLwGYSjkFPh8aU6xDkq12mS6WDiFqjz1o6jbMZE3",
  "key23": "toKBsDpqzzVjLm7nkW5WKeA6N5Ynq5pWS7m83dbCuwcL4hGhu5N4sCdGnYo45n4hi882NQw7bv4do4voLHiNZjT",
  "key24": "42A1hfPkdJefYgPA3BVk3Bh8GUhg3cEsgpwwuYgtgShbqFZrLcUHAhDB4h1HpnLAd41DeqWrGFYM3LmEAJ6nShU",
  "key25": "64TkgxUuX8Dd4e8tJTqa3kDjhzQvdzpEKUESma2s7ZWcygZstVYS3YfQxXqodBmjnvJAmw5wkNfsY5v7bEi5iubN",
  "key26": "3oK4nDR78bTYSmWUT9UgQGxkCmDD7CnSs7pkzBB5DxyeydcK73C9zeZ6HiqdJhdRqPAGANNwnvZdFt7f2DTCxRUj",
  "key27": "L2Jy9EHqLtJyuuYTmCrgo29ZQcq57oKP5wSt1KCv8yGYtQU8d9NSptwutW2wDXSedYL64rf556NJcxgsJQQiiqn",
  "key28": "3cDUUdShs4oeu48tymx3FaDqhiMXDuEWAsa7kNDxe4ZazdofThZx3FJgE6SvdoHUCvLBKRv59DFcoGKyN6HPDTbV",
  "key29": "5rBSxaMWPHzyuDKeRD1K57bhFiEir6rcPePGKqHD1foD7wrhdY4indTJ7XPrykYkFFwwBKm2UTKxJZ8Bfm4CaErb",
  "key30": "5QK3E6LTP977sGY6R7SMnbfXJrzEizKPYkZzzKVGpXRBnSkvsKyunzrtpZpQQpnDDJovihCR7vS5MGwoFu6HS1EU",
  "key31": "4VTcLU44An9YTayrAz2WwH4kzFmxFCQGUgcXYDMDh5R9Y7dzWozqYNvNqpmJTZUYLNAw1UjzrYLoTEAE9eMHUUAB",
  "key32": "4RxFVwLBjHudSJ1nwwb4G1o9ScVMbx2JgR1DHHMejYW2aszKwJwijpqDtpZRpstnMTFT8zcw5TuLmT4q2kUSsckd",
  "key33": "47hAN3pSaG5T7p988dztHaV7Tvim8xuMUbUqAv11HRpRtLmPL2ciBpEYt8cGdAYZ5Qacs3iJpNNM2YeYJahTW9cK",
  "key34": "zZF53VpkFkBKh6MM1358KtcHg58T96h927CuxBv5Lu5NbiZXgN8vvUeWtPDX1Pb5LtA91Xo6smcTznZDxVSqXDc",
  "key35": "5q4rK43NCyDxCdb1rye1YQ26dsmnqH2MVsdeDxcxbgvRrVSQ3AN2psBpyVjYwM2bpHCcd2Ay9rJHtJpWCBXRgk2m",
  "key36": "4B3vTpYYRK5c7d9v6383d5ikzJj3oRFkgE8kNmxnF5FPDJU2CuhEH5aRfJk4YvyF37gkoqGjVHEsNxNTVJ4LTikq",
  "key37": "5bcmr5Gz8wFC94nshcbELrmJc1EaYb6GdDAz4zE1hGP4LfbsgASpgGkWELyoZQdWSuSxv87iUvcfG9tfe9M6TRiZ",
  "key38": "25YTFcAqmabwvxeXJTEoU8No3Gz7BeXhPq1xLp7h9rJY592YFVignFm3gZ6cHkc49zL56kupfGkkGtKyVCfSVAsv",
  "key39": "wzXkfTWoQPBPxC1i3RiU8XRx6hvyDuo3umtoVTk8QU7SsF2aDBtorb941PPVxKhSXx95SxU9dRb3jYhHAKnUzbW"
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
