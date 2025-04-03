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
    "4s1Q3KWa8AdVTLEE6wSGsjD76bEVB3CigeqszvxC4tbSvxVgnfGiGHQUj81etgLtLxz7FZ33gRmFMSE8wdPAXeKF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LYjYETPXzafakbN5d4SJEjBCzUJ6VRSUVnJ5XziXnxHe1LrKSu6jFBpJs97hfAHq4ZH3th5dobKhoCxC7PeyDa5",
  "key1": "3MsbG11T5XRLW76gjzXnpk4GE1YCUXYoB2K1c6KgHL7Aa2VK8afshtKrdxYnL3TeymtbRWwdekkfa5z9a3J4r43B",
  "key2": "4wpHZS7cMFc342zQQ2upXWZkJN5dZgLGEbswkZuGStWsUx3JAGpv369JZPsRecboaKqCB61tRmRLd8svQQ8xQkeJ",
  "key3": "124qUdbZKUsBd2Q8mEu3BoAyavDMQcnpqyBbkcnTZ2DDgvySDUB2dEw4XKAV5Fuw6jmGS1o49sqnLkKDeMmictee",
  "key4": "2gaNyLJyEuu75ZvsRAVNjiiQf7fE2A2B1dn49ADETb5fBFENy96JDCNUMxGrxbN7GymYhnFaLSUECB6Kn8UQVL6D",
  "key5": "4FaAVgFNVfSmYeP69q8izaUtQmHxtsCYpvZjrZ22vtBT7EMm1QAyYfNBULrfJzh3YtEi51e4tmCaK6RnFdpyGstL",
  "key6": "32CB3rRhiY37qoVa8VzywkEghjXLmCbhr89kzSffya9ZJNwsqAdUYQuamSZeZb7a2q4s2mNEkcg83SuAjxAbwtGe",
  "key7": "4EHVaWKxKBPZR6UwvEBPTjUaDJvmSzuxvnCBw1Q3ur9kXvTydq5o4xRiD1KAkLgqJ4641pf4WRreWe8gN6aEoyNz",
  "key8": "2RhszbMBjBMNV8ALigQnDXMgnGJTwkAUPGu4J3iddL21iTHSSLdZve8whznrk5r8wakXZSs8h78Tpwuvj5ZRRr9o",
  "key9": "3RckDivE8AFgb1emLTy2r3y7iwx8g8FHeKYFPYuCfSiK25S7SWyMLvdgi8j9yXqZW2rmNZFyXbzDHqPqJ6GJpZgm",
  "key10": "DQcKiEi1zbJCzJBS3kzVYS4Q2R9c5PfodB9MLpcbEqrTVxddpCVcL1x7QeeQxM4w9USQP3YknhUL4HVAKNt4erb",
  "key11": "3WzkHpmt7KDGGyMfNtfd1zjkJ2Lbps8bQMxpL3XTQziPirvE2QVGD5xrh4nB3Srz8UiwT78SnmbD6hFsxYrjsygb",
  "key12": "21yRxiADXndqt6t3VvJdFh73tZmqkAGXw8E26vQY1dE5KXxFny9YdSrNSnbyLuHMjtNZdzuHvmsVeo1P2aBwahgS",
  "key13": "2UFzyS2bYuPJTinok1GLM9gkXAKaQ6dKvvXMQcPYhHsU2iDY8SzMkNQEL7SxWrLSxLZ6yLocirH73Qpw9MdELvk9",
  "key14": "2buFdbmuJMRpzPP2BgofWZ42gKDgzjEABagz2AWL2kjMcNmwHo6EqaH7ieG32MdYWdA73JD5SMRZbFvqoHZbDTQ6",
  "key15": "3CLQA8B1rGV8sRH8WTSjmtKDw1TZHes5DK2mnGcxMmrp5Y8RU1zHsuk16gmbJoKBkdSdXVTHVvCDJcidMyPs1PU7",
  "key16": "4PG6DrMemZP2fkW6e1G2hNePJQp5FvWwg8oSeLRoF3TbhKGKUpWdabHk49NcCQysJYs5pNxdHSFLmHk3MsuDEj8C",
  "key17": "3PXStFwSSCVrPLoL1CUyEyqHsuABZfGfuiThmv9CnqsrFQdKAq3Jenkr6d8foJgjR55AQUFJ2N74tziwzoYonbhU",
  "key18": "5xHZ6MJRhnAcNjijg1LvN7vods7VMt7kqDNvnH8oQFPAeZAVsK3LkGheDpFbA7v2xfVXGZYvqC1yr3v4qBxGhL1A",
  "key19": "2rnvZ9S4Qd11r89U6cxzBJFt1JA365TTCun6ZrCwiBteNSzr5LYfDj1ts3yXW8JvG22bkTKuesJdmaN73WQpgRkn",
  "key20": "5ShxwKT6q7QpEXixchSs7irRvgZsfMFTr2sSY4iDXT3Rs6bbJ41GbKcDuMuv97MXBFoEzi92A3t39Tr4KUGrtyEh",
  "key21": "2M1ujNuPny3zpUdPmXXEvBuhsv2sCmS2Fi3t8dLEYX15aE2JKMXf51RXTqHrg1F1oSEDGVR68vwCP8q23a3oZwJW",
  "key22": "23FpjbXaKjiVYwNZcRNqVrhL9M8oSM4GxUuhqqjNZ1Xj6euzvEsLsHEaXWjJqsXSs8MAC7iuGXtsJ8bfRTpwbUui",
  "key23": "ryq7f9h1dG9x6qkBCS2ZSKPH3sz1TTpemEQLeyGKofBmPUAApmGwoUnwRWaDzTGf5LnYNDCLRDp49hjVKDPJHS4",
  "key24": "2LQzmUE6BURjegQhfyeQGt9cLQBwpsWhUiTvmuGvMMmecrAU195xc8o9npQ7cx5WVji8rFaGRS9SpaYJ8VRo9vpp",
  "key25": "sEpw1V3DjAdj1Y4nz35gYeKRRixxXGpcci1HdbBweUhjRno2oQubY1P7bc1NgAqBc6HyLmMCeNkbrWNGV9mRqo8",
  "key26": "brGhPbH9pKLGQdJs8uTgxz7ymuC1R2MwsU99xKqU1eHciGDoodnwAnzCQvA7o3RFyAVYz9B8AFX7LGk59UKSeHu",
  "key27": "27QWAqMwMWCkiFghiV9ppfRuY7tE8jsUx3Hr2EUcAX4TfSSKX4NeipQrWvrWDoziWGWRQaxcVhmb5NM1uRJzuLnd",
  "key28": "3PeGw4C1883uVK7GzSTzK6kmJ3XemmLHEVybNah1bnEARsVyv5a9f9tq55detPPVfkNmPHRQmKXKd5pHi3SY3721",
  "key29": "21vtjfpqPoXKqt4QmdWzs1adtSDUCLTejE6etGJUhCUFYVkf6CUVDKoEz51FfkHbDX7ys41FWsMQV5WiwKVmmd25",
  "key30": "Ybx3NcSxmo4njHCMPeEXuS2Eq5hSbBTYpcU9rFEVtd9LKs85pQG5DGxKDXKL68N4BoHZ7m5XhA5tR8rYBttaPos",
  "key31": "dQz841putHMfSvUxuFw4k2rWsG5f66b8XAmXU8jzzrCANZX6N4D7aL8fNXx7kHH9GRdyRzxZZNwqikEbzQb54nR",
  "key32": "2Jfm9wvhDTAN6ej5Ucs2Pbhqz21brMNzcWoyhSmxafTYEdiRqNFmsga7VQ9E4BTTajfT7RXHndpKnS6pg8S1pTwH",
  "key33": "2jeoRPoecoGanSGv7Uvg8ArTRqWg1opHR2n77jThbJ6cyiTS1gfU31cKPTDGSAjiXDiJR86SEkui11EV13rTFW32",
  "key34": "56JybReMgZGL1kbB4fzybz5FHBbGvTGMdxDQjndCCbZscb298qTzeYnmrehbZfopE7RsAFLzZidLoCc1xwHQcDLh",
  "key35": "3uKrnPNJ3zeCD2dfwn1VeLsxLA8JXa86Wp7qs7qLjpiABGxQvNgxEYNmgCCSXvmYbRgyz7rpBcMy8Bmh7UmZpZSK",
  "key36": "3fj9JY5WwKHT7qL97eJhK4kLavpfAt12o9sgkhdGsdBSSWSzBpBhAD6HSnHFwK7CPUQ7Exskf3z1u2Ao4GNLuQiY",
  "key37": "3sXdVtBbTxBF9iwPPjMLPH9zLatEbqBL3HX5wvyR4tNzsYD4JRSFFEkgKSKoBbPouZHN4rafTPFU4GE2VbexotJ3",
  "key38": "yBrDbhwh5y1XzN2JR3P832s3TAWYT4b7nUgFNWoxZEaSNJcrsvvkSVThTKb8A3yqvUfSppAt4kTYpUDex5XeJZw",
  "key39": "43AMj7RZo4SHHvprXX4Y2soGgZggRfuUJ3uh4rV6C6XW9d2tkrzTyAiGoDm6x4crh7DSdau22f3dH2xvxvDPeKQX",
  "key40": "27o8LNWJHDbWEW7BR7iXB65ToduJWHCDvQ52z8vxTedrMxKRqURSPUnHupnw44TajjVaFw9kYw6qcKvMtSbsdVnY",
  "key41": "4PPAH5WziBeh69SK577HwnNrNmjowiSgYCJkMWufQ4NhydiMmsmNvLhHv54JYXA8GQtWioZAVpXCzgbZfKa3xpYN"
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
